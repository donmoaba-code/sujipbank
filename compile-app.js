const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = __dirname;
const sourcePath = path.join(root, 'app.source.jsx');
const htmlPath = path.join(root, 'sujipbank_search_v2.2.html');
const babelPath = path.join(root, 'libs', 'babel.min.js');
const outPath = path.join(root, 'app.bundle.js');

function readJsxSource() {
    if (fs.existsSync(sourcePath)) {
        return fs.readFileSync(sourcePath, 'utf8');
    }
    for (const candidate of ['app/index.html', 'github-pages/index.html']) {
        const html = fs.readFileSync(path.join(root, candidate), 'utf8');
        const match = html.match(/<script type="text\/babel">([\s\S]*?)<\/script>/);
        if (match) {
            fs.writeFileSync(sourcePath, match[1].trim(), 'utf8');
            console.log('Saved', sourcePath, 'from', candidate);
            return match[1].trim();
        }
    }
    throw new Error('No JSX source found. Create app.source.jsx first.');
}

function readLib(name) {
    return fs.readFileSync(path.join(root, 'libs', name), 'utf8');
}

function inlineScript(code) {
    return code.replace(/<\/script/gi, '<\\/script');
}

const ctx = { console, globalThis: {} };
ctx.globalThis = ctx;
vm.runInNewContext(fs.readFileSync(babelPath, 'utf8'), ctx);

const source = readJsxSource();
const code = ctx.Babel.transform(source, {
    presets: [['react', { runtime: 'classic' }], 'env'],
    filename: 'app.source.jsx',
}).code;

fs.writeFileSync(outPath, code, 'utf8');
console.log('Wrote', outPath, '(' + code.length + ' bytes)');

const tailwind = readLib('tailwindcss.js');
const react = readLib('react.production.min.js');
const reactDom = readLib('react-dom.production.min.js');

const standaloneHtml = `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>수집뱅크 통합 검색기 v3.0</title>
    <script>${inlineScript(tailwind)}</script>
    <script>${inlineScript(react)}</script>
    <script>${inlineScript(reactDom)}</script>
    <style>
        body { font-family: 'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif; }
    </style>
</head>
<body class="bg-slate-50 text-slate-900">
    <div id="root"></div>
    <script>${inlineScript(code)}</script>
</body>
</html>
`;

const deployHtml = `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>수집뱅크 통합 검색기 v3.0</title>
    <script src="./libs/tailwindcss.js"></script>
    <script src="./libs/react.production.min.js"></script>
    <script src="./libs/react-dom.production.min.js"></script>
    <style>
        body { font-family: 'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif; }
    </style>
</head>
<body class="bg-slate-50 text-slate-900">
    <div id="root"></div>
    <script src="./app.bundle.js"></script>
</body>
</html>
`;

fs.writeFileSync(htmlPath, standaloneHtml, 'utf8');
console.log('Updated', htmlPath, '(standalone, file:// OK)');

for (const target of [path.join(root, 'app', 'index.html'), path.join(root, 'github-pages', 'index.html')]) {
    fs.writeFileSync(target, deployHtml, 'utf8');
    console.log('Updated', target);
}

for (const dir of ['app', 'github-pages']) {
    fs.copyFileSync(outPath, path.join(root, dir, 'app.bundle.js'));
    console.log('Copied bundle to', dir);
}
