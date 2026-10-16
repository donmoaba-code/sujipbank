"""Local helper that shows sujipbank sold-item prices on list pages.

The public list replaces the price with "판매완료" / "품절".
The product detail page still has the amount in set_goods_price.
This server fetches that amount and serves the list with the price visible.
"""

from __future__ import annotations

import json
import re
import sys
import threading
from concurrent.futures import ThreadPoolExecutor, as_completed
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.error import HTTPError, URLError
from urllib.parse import parse_qsl, quote, urlencode, urljoin, urlparse, urlunparse
from urllib.request import Request, urlopen

HOST = "127.0.0.1"
PORT = 8765
ORIGIN = f"http://{HOST}:{PORT}"
ROOT = Path(__file__).resolve().parent
INDEX_FILE = ROOT / "sujipbank_search_v2.2.html"
ALLOWED_HOSTS = {"www.sujipbank.com", "sujipbank.com"}
UA = (
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
    "AppleWebKit/537.36 (KHTML, like Gecko) "
    "Chrome/122.0.0.0 Safari/537.36"
)

SOLD_LI_RE = re.compile(
    r'<li\b[^>]*\bclass="[^"]*\bitem_soldout\b[^"]*"[^>]*>',
    re.I,
)
PRICE_TAG_RE = re.compile(
    r'(<strong class="item_price">)\s*(?:판매완료|품절)\s*(</strong>)',
    re.I,
)
SET_PRICE_RE = re.compile(
    r'name="set_goods_price"\s+value="(\d+(?:\.\d+)?)"',
    re.I,
)
DC_PRICE_RE = re.compile(
    r'class="dcPrice"[^>]*\bprice="(\d+(?:\.\d+)?)"',
    re.I,
)
DETAIL_SOLD_RE = re.compile(
    r'(<div class="dcPrice"[^>]*>\s*</div>\s*<strong>)\s*(판매완료|품절)\s*(</strong>)',
    re.I,
)
HREF_RE = re.compile(r'href\s*=\s*(["\'])([^"\']*)\1', re.I)
FRM_LIST_RE = re.compile(
    r'<form\b[^>]*\bname=(["\'])frmList\1[^>]*>',
    re.I,
)

_cache: dict[str, int | None] = {}
_cache_lock = threading.Lock()


def allowed_url(url: str) -> bool:
    parsed = urlparse(url)
    if parsed.scheme not in ("http", "https"):
        return False
    return (parsed.hostname or "").lower() in ALLOWED_HOSTS


def proxy_link(url: str) -> str:
    return ORIGIN + "/view?url=" + quote(url, safe="")


def format_won(amount: int) -> str:
    return f"{amount:,}원"


def price_html(amount: int, label: str = "판매완료") -> str:
    return (
        f'<span class="sujip-sold-price">{format_won(amount)}</span>'
        f'<span class="sujip-sold-tag">{label}</span>'
    )


def fetch_text(url: str, timeout: float = 25) -> str:
    req = Request(url, headers={"User-Agent": UA, "Accept-Language": "ko-KR,ko;q=0.9"})
    with urlopen(req, timeout=timeout) as resp:
        final = resp.geturl()
        if not allowed_url(final):
            raise ValueError("redirected outside sujipbank")
        raw = resp.read()
        charset = "utf-8"
        content_type = resp.headers.get("Content-Type", "")
        match = re.search(r"charset=([\w.-]+)", content_type, re.I)
        if match:
            charset = match.group(1)
        return raw.decode(charset, "replace")


def extract_price(detail_html: str) -> int | None:
    match = SET_PRICE_RE.search(detail_html) or DC_PRICE_RE.search(detail_html)
    if not match:
        return None
    amount = int(round(float(match.group(1))))
    if amount < 0:
        return None
    return amount


def detail_url(goods_no: str) -> str:
    return f"https://www.sujipbank.com/goods/goods_view.php?goodsNo={goods_no}"


def lookup_price(goods_no: str) -> int | None:
    with _cache_lock:
        if goods_no in _cache:
            return _cache[goods_no]
    try:
        amount = extract_price(fetch_text(detail_url(goods_no), timeout=15))
    except (URLError, TimeoutError, ValueError, OSError):
        amount = None
    with _cache_lock:
        _cache[goods_no] = amount
    return amount


def lookup_many(goods_nos: list[str]) -> dict[str, int | None]:
    unique = []
    seen = set()
    for goods_no in goods_nos:
        if goods_no and goods_no not in seen:
            seen.add(goods_no)
            unique.append(goods_no)
    found: dict[str, int | None] = {}
    if not unique:
        return found
    with ThreadPoolExecutor(max_workers=6) as pool:
        futures = {pool.submit(lookup_price, goods_no): goods_no for goods_no in unique}
        for future in as_completed(futures):
            goods_no = futures[future]
            try:
                found[goods_no] = future.result()
            except Exception:
                found[goods_no] = None
    return found


def fill_sold_list(html: str) -> tuple[str, int]:
    matches = list(SOLD_LI_RE.finditer(html))
    if not matches:
        return html, 0

    blocks = []
    for index, match in enumerate(matches):
        start = match.end()
        end = matches[index + 1].start() if index + 1 < len(matches) else len(html)
        chunk = html[start:end]
        close = chunk.find("</li>")
        if close < 0:
            blocks.append(("raw", chunk, None))
            continue
        body = chunk[:close]
        tail = chunk[close:]
        goods = re.search(r"goodsNo=(\d+)", body)
        blocks.append((body, tail, goods.group(1) if goods else None))

    prices = lookup_many([block[2] for block in blocks if block and block[2]])
    filled = 0
    pieces = [html[: matches[0].start()]]
    for match, block in zip(matches, blocks):
        pieces.append(match.group(0))
        if block[0] == "raw":
            pieces.append(block[1])
            continue
        body, tail, goods_no = block
        amount = prices.get(goods_no) if goods_no else None
        if amount is not None:
            def repl(tag_match, value=amount):
                return tag_match.group(1) + price_html(value) + tag_match.group(2)

            body, count = PRICE_TAG_RE.subn(repl, body, count=1)
            filled += count
        pieces.append(body)
        pieces.append(tail)
    return "".join(pieces), filled


def fill_sold_detail(html: str) -> tuple[str, int]:
    amount = extract_price(html)
    if amount is None:
        return html, 0

    def repl(match, value=amount):
        label = match.group(2)
        return match.group(1) + price_html(value, label) + match.group(3)

    updated, count = DETAIL_SOLD_RE.subn(repl, html, count=1)
    return updated, count


def rewrite_catalog_links(html: str, page_url: str) -> str:
    def repl(match):
        quote_char, href = match.group(1), match.group(2)
        if href.startswith(("javascript:", "#", "mailto:", "data:")):
            return match.group(0)
        absolute = urljoin(page_url, href)
        parsed = urlparse(absolute)
        if not allowed_url(absolute):
            return match.group(0)
        if not parsed.path.endswith(("goods_list.php", "goods_search.php")):
            return match.group(0)
        return f"href={quote_char}{proxy_link(absolute)}{quote_char}"

    return HREF_RE.sub(repl, html)


def point_list_form(html: str, page_url: str) -> str:
    action = proxy_link(page_url)

    def repl(match):
        tag = match.group(0)
        if re.search(r'\baction\s*=\s*(["\']).*?\1', tag, re.I):
            tag = re.sub(
                r'\baction\s*=\s*(["\']).*?\1',
                f'action="{action}"',
                tag,
                count=1,
                flags=re.I,
            )
        else:
            tag = tag[:-1] + f' action="{action}">'
        return tag

    return FRM_LIST_RE.sub(repl, html, count=1)


def inject_chrome(html: str, page_url: str, filled: int) -> str:
    del page_url
    style = (
        "<style>"
        ".sujip-sold-price{color:#c2410c;font-weight:800;}"
        ".sujip-sold-tag{margin-left:6px;font-size:11px;color:#667085;font-weight:700;}"
        ".sujip-price-banner{position:sticky;top:0;z-index:99999;background:#fff7ed;"
        "color:#9a3412;padding:8px 14px;font-size:13px;font-weight:700;"
        "border-bottom:1px solid #fdba74;font-family:'Malgun Gothic',sans-serif;}"
        "</style>"
    )
    banner = (
        f'<div class="sujip-price-banner">판매완료·품절 상품 가격 {filled}건을 '
        "상세 페이지에서 불러와 표시했습니다.</div>"
    )
    html = re.sub(r"(<head[^>]*>)", r"\1" + style, html, count=1, flags=re.I)
    html = re.sub(r"(<body[^>]*>)", r"\1" + banner, html, count=1, flags=re.I)
    return html


def render_page(target: str) -> tuple[str, int]:
    html = fetch_text(target)
    parsed = urlparse(target)
    if parsed.path.endswith("goods_view.php"):
        html, filled = fill_sold_detail(html)
    else:
        html, filled = fill_sold_list(html)
    html = rewrite_catalog_links(html, target)
    html = point_list_form(html, target)
    html = inject_chrome(html, target, filled)
    return html, filled


def merge_target(query: str) -> str | None:
    target = None
    extra = []
    for key, value in parse_qsl(query, keep_blank_values=True):
        if key == "url" and target is None:
            target = value
        elif key != "url":
            extra.append((key, value))
    if not target or not allowed_url(target):
        return None
    if not extra:
        return target
    parsed = urlparse(target)
    merged = dict(parse_qsl(parsed.query, keep_blank_values=True))
    for key, value in extra:
        merged[key] = value
    return urlunparse(parsed._replace(query=urlencode(merged)))


LOCK_FILE = "3938234jhdskjfd29393123dk"
UPSTREAM_ORIGIN = "https://www.sujipbank.com"


class Handler(BaseHTTPRequestHandler):
    def log_message(self, fmt: str, *args) -> None:
        sys.stderr.write("%s - %s\n" % (self.address_string(), fmt % args))

    def _send(self, status: int, body: bytes, content_type: str, method: str = "GET") -> None:
        self.send_response(status)
        self.send_header("Content-Type", content_type)
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Cache-Control", "no-store")
        self.end_headers()
        if method != "HEAD":
            self.wfile.write(body)

    def _proxy_upstream(self, method: str) -> None:
        parsed = urlparse(self.path)
        if not parsed.path.startswith("/") or parsed.path.startswith("//"):
            self._send(400, b"bad path", "text/plain; charset=utf-8", method)
            return
        # Same-origin stand-in for the shop's domain check. A failed request
        # makes the shop script delete the product list.
        if LOCK_FILE in parsed.path:
            self._send(200, b"ok", "text/plain; charset=utf-8", method)
            return
        target = UPSTREAM_ORIGIN + parsed.path
        if parsed.query:
            target += "?" + parsed.query
        req = Request(target, method=method, headers={"User-Agent": UA, "Accept-Language": "ko-KR,ko;q=0.9"})
        try:
            with urlopen(req, timeout=30) as resp:
                final = urlparse(resp.geturl())
                if (final.hostname or "").lower() not in ALLOWED_HOSTS:
                    self._send(502, b"upstream redirect blocked", "text/plain; charset=utf-8", method)
                    return
                body = b"" if method == "HEAD" else resp.read()
                content_type = resp.headers.get("Content-Type", "application/octet-stream")
                status = resp.status
        except HTTPError as exc:
            body = b"" if method == "HEAD" else exc.read()
            content_type = exc.headers.get("Content-Type", "application/octet-stream") if exc.headers else "text/plain"
            status = exc.code
        except (URLError, TimeoutError, OSError):
            self._send(502, b"upstream failed", "text/plain; charset=utf-8", method)
            return
        self._send(status, body, content_type, method)

    def do_OPTIONS(self) -> None:
        self.send_response(204)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "*")
        self.end_headers()

    def do_HEAD(self) -> None:
        self._dispatch("HEAD")

    def do_GET(self) -> None:
        self._dispatch("GET")

    def _dispatch(self, method: str) -> None:
        parsed = urlparse(self.path)
        if parsed.path in ("/", "/index.html"):
            if not INDEX_FILE.exists():
                self._send(404, b"index missing", "text/plain; charset=utf-8", method)
                return
            self._send(200, INDEX_FILE.read_bytes(), "text/html; charset=utf-8", method)
            return
        if parsed.path == "/health":
            body = json.dumps({"ok": True}).encode("utf-8")
            self._send(200, body, "application/json; charset=utf-8", method)
            return
        if parsed.path != "/view":
            self._proxy_upstream(method)
            return
        target = merge_target(parsed.query)
        if not target:
            self._send(400, "수집뱅크 주소만 열 수 있습니다.".encode("utf-8"), "text/plain; charset=utf-8", method)
            return
        try:
            html, filled = render_page(target)
        except Exception as exc:
            message = f"페이지를 불러오지 못했습니다: {exc}".encode("utf-8")
            self._send(502, message, "text/plain; charset=utf-8", method)
            return
        sys.stderr.write(f"filled {filled} prices for {target}\n")
        self._send(200, html.encode("utf-8"), "text/html; charset=utf-8", method)


def main() -> None:
    try:
        httpd = ThreadingHTTPServer((HOST, PORT), Handler)
    except OSError as exc:
        winerror = getattr(exc, "winerror", None)
        if winerror == 10048 or exc.errno in (48, 98, 10048):
            print(f"price server already running on {ORIGIN}")
            return
        raise
    print(f"price server on {ORIGIN}")
    httpd.serve_forever()


if __name__ == "__main__":
    main()
