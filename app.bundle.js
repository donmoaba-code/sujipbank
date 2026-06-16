"use strict";

function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var _React = React,
  useState = _React.useState,
  useEffect = _React.useEffect;
var APP_VERSION = '2.2';
var Icon = function Icon(_ref) {
  var path = _ref.path,
    className = _ref.className;
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: className
  }, path);
};
var Icons = {
  Search: /*#__PURE__*/React.createElement(Icon, {
    path: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "11",
      cy: "11",
      r: "8"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "21",
      y1: "21",
      x2: "16.65",
      y2: "16.65"
    }))
  }),
  Reset: /*#__PURE__*/React.createElement(Icon, {
    path: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M3 3v5h5"
    }))
  }),
  Close: /*#__PURE__*/React.createElement(Icon, {
    path: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("line", {
      x1: "18",
      y1: "6",
      x2: "6",
      y2: "18"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "6",
      y1: "6",
      x2: "18",
      y2: "18"
    }))
  }),
  Category: /*#__PURE__*/React.createElement(Icon, {
    path: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "3",
      width: "7",
      height: "7"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "14",
      y: "3",
      width: "7",
      height: "7"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "14",
      y: "14",
      width: "7",
      height: "7"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "14",
      width: "7",
      height: "7"
    }))
  }),
  Filter: /*#__PURE__*/React.createElement(Icon, {
    path: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("polygon", {
      points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"
    }))
  }),
  Eye: /*#__PURE__*/React.createElement(Icon, {
    path: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "3"
    }))
  }),
  RadioOn: /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    className: "text-blue-600"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "5",
    fill: "currentColor"
  })),
  RadioOff: /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    className: "text-gray-300"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }))
};
var CATEGORIES = [{
  id: '001',
  label: '한국지폐',
  slot: 0,
  hasCatalog: true
}, {
  id: '002',
  label: '한국주화',
  slot: 1,
  hasCatalog: true
}, {
  id: '003',
  label: '세계지폐',
  slot: 2
}, {
  id: '004',
  label: '세계주화',
  slot: 3
}, {
  id: '005',
  label: '한국우표',
  slot: 0
}, {
  id: '006',
  label: '세계우표',
  slot: 0
}];
var KR_BANKNOTE_CATALOG = {
  id: '001',
  label: '한국지폐 전체',
  children: [{
    id: '001001',
    label: '구한국은행 이전',
    children: [{
      id: '001001001',
      label: '호조 태환권'
    }, {
      id: '001001035',
      label: '일본제일은행권'
    }, {
      id: '001001036',
      label: '구한국은행권'
    }, {
      id: '001001037',
      label: '사찰 어음'
    }]
  }, {
    id: '001002',
    label: '조선은행권',
    children: [{
      id: '001002001',
      label: '광복이전(1914~44년)',
      children: [{
        id: '001002001001',
        label: '금권 100원권'
      }, {
        id: '001002001002',
        label: '금권 10원권'
      }, {
        id: '001002001003',
        label: '금권 5원권'
      }, {
        id: '001002001004',
        label: '금권 1원권'
      }, {
        id: '001002001005',
        label: '개 100원권'
      }, {
        id: '001002001006',
        label: '개 10원권'
      }, {
        id: '001002001007',
        label: '개 5원권'
      }, {
        id: '001002001008',
        label: '개 1원권-유번호'
      }, {
        id: '001002001009',
        label: '개 1원권-무번호'
      }, {
        id: '001002001010',
        label: '갑 100원권'
      }, {
        id: '001002001011',
        label: '지급어음 50전-1차'
      }, {
        id: '001002001012',
        label: '지급어음 20전권-1차'
      }, {
        id: '001002001013',
        label: '지급어음 10전권-1차'
      }, {
        id: '001002001014',
        label: '지급어음 50전권-2차'
      }, {
        id: '001002001015',
        label: '지급어음 20전권-2차'
      }, {
        id: '001002001016',
        label: '지급어음 10전권-2차'
      }, {
        id: '001002001017',
        label: '지급어음 50전권-3차'
      }, {
        id: '001002001018',
        label: '지급어음 10전권-3차'
      }, {
        id: '001002001019',
        label: '갑 10원권-유번호'
      }, {
        id: '001002001020',
        label: '갑 10원권-무번호'
      }, {
        id: '001002001021',
        label: '갑 5원권-유번호'
      }, {
        id: '001002001022',
        label: '갑 5원권-무번호'
      }]
    }, {
      id: '001002002',
      label: '광복이후(1945~50년)',
      children: [{
        id: '001002002001',
        label: '을 100원권'
      }, {
        id: '001002002002',
        label: '을 10원권'
      }, {
        id: '001002002003',
        label: '을 1원권'
      }, {
        id: '001002002004',
        label: '병 100원권'
      }, {
        id: '001002002005',
        label: '병 10원권'
      }, {
        id: '001002002006',
        label: '정 100원권'
      }, {
        id: '001002002007',
        label: '정 10원권'
      }, {
        id: '001002002008',
        label: '무 100원권'
      }, {
        id: '001002002009',
        label: '신 10원권(독립문)'
      }, {
        id: '001002002010',
        label: '신 5원권(독립문)'
      }, {
        id: '001002002011',
        label: '미발행 신1000원권'
      }, {
        id: '001002002012',
        label: '미발행 1000원권'
      }, {
        id: '001002002013',
        label: '미발행 갑1000원권'
      }, {
        id: '001002002014',
        label: '소액 50전권'
      }, {
        id: '001002002015',
        label: '소액 10전권'
      }, {
        id: '001002002016',
        label: '소액 5전권'
      }]
    }]
  }, {
    id: '001003',
    label: '한국은행권(1960년이전)',
    children: [{
      id: '001003001',
      label: '원(圓)권(1950~53년)',
      children: [{
        id: '001003001001',
        label: '1000원권(한복천원)'
      }, {
        id: '001003001002',
        label: '500원권(좌이박/남색지)'
      }, {
        id: '001003001003',
        label: '100원권(광화문)'
      }, {
        id: '001003001004',
        label: '신 1000원권(좌이박)'
      }]
    }, {
      id: '001003002',
      label: '환권(1953~62년)',
      children: [{
        id: '001003002001',
        label: '1000환권(거북선)'
      }, {
        id: '001003002002',
        label: '100환권(거북선)'
      }, {
        id: '001003002003',
        label: '10환권(거북선)'
      }, {
        id: '001003002004',
        label: '5환권(거북선)'
      }, {
        id: '001003002005',
        label: '1환권(거북선)'
      }, {
        id: '001003002006',
        label: '신 100환권(황색지)'
      }, {
        id: '001003002007',
        label: '신 100환권(백색지)'
      }, {
        id: '001003002008',
        label: '신 10환권(황색지)'
      }, {
        id: '001003002009',
        label: '신 10환권(백색지)'
      }, {
        id: '001003002010',
        label: '500환권(중앙이박)'
      }, {
        id: '001003002011',
        label: '신 1000환권(우이박)'
      }, {
        id: '001003002012',
        label: '개 100환권(우이박)'
      }, {
        id: '001003002013',
        label: '50환권(독립문)'
      }, {
        id: '001003002014',
        label: '신 500환권(우이박)'
      }, {
        id: '001003002015',
        label: '개 1000환권(세종)'
      }, {
        id: '001003002016',
        label: '개 500환권(세종)'
      }, {
        id: '001003002017',
        label: '개갑 100환권(모자상)'
      }]
    }]
  }, {
    id: '001004',
    label: '한국은행권(1960년이후)',
    children: [{
      id: '001004001',
      label: '현행권(1962~73년)',
      children: [{
        id: '001004001001',
        label: '가 500원권(영제)'
      }, {
        id: '001004001002',
        label: '가 100원권(영제)'
      }, {
        id: '001004001003',
        label: '가 50원권(영제)'
      }, {
        id: '001004001004',
        label: '가 10원권(영제)'
      }, {
        id: '001004001005',
        label: '5원권(영제)'
      }, {
        id: '001004001006',
        label: '1원권(영제)'
      }, {
        id: '001004001007',
        label: '나 100원권(경회루)'
      }, {
        id: '001004001008',
        label: '나 10원권(첨성대)'
      }, {
        id: '001004001009',
        label: '50전권'
      }, {
        id: '001004001010',
        label: '10전권'
      }, {
        id: '001004001011',
        label: '나 500원권(남대문)'
      }, {
        id: '001004001012',
        label: '다 100원권(세종)'
      }, {
        id: '001004001013',
        label: '나 50원권(팔각정)'
      }]
    }, {
      id: '001004002',
      label: '현행권(1973년이후)',
      children: [{
        id: '001004002001',
        label: '가 10,000원권(1차)'
      }, {
        id: '001004002002',
        label: '가 5,000원권(1차)'
      }, {
        id: '001004002003',
        label: '다 500원권(이순신)'
      }, {
        id: '001004002004',
        label: '나 10,000원권(2차)'
      }, {
        id: '001004002005',
        label: '나 5,000원권(2차)'
      }, {
        id: '001004002006',
        label: '가 1,000원권(1차)'
      }, {
        id: '001004002007',
        label: '다 10,000원권(3차)'
      }, {
        id: '001004002008',
        label: '다 5,000원권(3차)'
      }, {
        id: '001004002009',
        label: '나 1,000원권(2차)'
      }, {
        id: '001004002010',
        label: '라 10,000원권(4차)'
      }, {
        id: '001004002011',
        label: '마 10,000원권(5차)'
      }, {
        id: '001004002012',
        label: '라 5,000원권(4차)'
      }, {
        id: '001004002013',
        label: '바 10,000원권(6차)'
      }, {
        id: '001004002014',
        label: '마 5,000원권(5차)'
      }, {
        id: '001004002015',
        label: '다 1,000원권(3차)'
      }, {
        id: '001004002016',
        label: '가 50,000원권(1차)'
      }]
    }, {
      id: '001004003',
      label: '구매권'
    }, {
      id: '001004004',
      label: '연결형은행권',
      children: [{
        id: '001004004001',
        label: '전지 2차 천원'
      }, {
        id: '001004004002',
        label: '전지 3차 천원'
      }, {
        id: '001004004003',
        label: '4매 2차천원 2002'
      }, {
        id: '001004004004',
        label: '4매 2차천원 2004'
      }, {
        id: '001004004005',
        label: '4매 2차천원 2005'
      }, {
        id: '001004004006',
        label: '4매 3차천원 2016'
      }, {
        id: '001004004007',
        label: '4매 5차오천원 2016'
      }, {
        id: '001004004008',
        label: '2매 2차천원 2001'
      }, {
        id: '001004004009',
        label: '2매 2차천원 2002'
      }, {
        id: '001004004010',
        label: '2매 2차천원 2003'
      }, {
        id: '001004004011',
        label: '2매 2차천원 2004'
      }, {
        id: '001004004012',
        label: '2매 2차천원 2005'
      }, {
        id: '001004004013',
        label: '2매 3차천원 2009'
      }, {
        id: '001004004014',
        label: '2매 3차천원 2013'
      }, {
        id: '001004004015',
        label: '2매 3차천원 2014'
      }, {
        id: '001004004016',
        label: '2매 3차천원 2015'
      }, {
        id: '001004004017',
        label: '2매 4차오천원 2002'
      }, {
        id: '001004004018',
        label: '2매 4차오천원 2003'
      }, {
        id: '001004004019',
        label: '2매 4차오천원 2004'
      }, {
        id: '001004004020',
        label: '2매 4차오천원 2005'
      }, {
        id: '001004004021',
        label: '2매 5차오천원 2007'
      }, {
        id: '001004004022',
        label: '2매 5차오천원 2013'
      }, {
        id: '001004004023',
        label: '2매 5차오천원 2014'
      }, {
        id: '001004004024',
        label: '2매 5차만원 2006'
      }, {
        id: '001004004025',
        label: '2매 6차만원 2011'
      }, {
        id: '001004004026',
        label: '2매 6차만원 2012'
      }, {
        id: '001004004027',
        label: '2매 6차만원 2017'
      }, {
        id: '001004004028',
        label: '2매 5차오천원 2020'
      }, {
        id: '001004004029',
        label: '2매 3차천원 2020'
      }, {
        id: '001004004030',
        label: '4매 3차천원 2020'
      }, {
        id: '001004004031',
        label: '전지 3차천원 2021'
      }, {
        id: '001004004032',
        label: '16매 5차오천원 2021'
      }, {
        id: '001004004033',
        label: '2매 6차만원 2022'
      }, {
        id: '001004004034',
        label: '2매 5차오천원 2022'
      }, {
        id: '001004004035',
        label: '2매 3차천원 2022'
      }, {
        id: '001004004036',
        label: '4매 5차오천원 2022'
      }, {
        id: '001004004037',
        label: '4매 6차만원 2022'
      }, {
        id: '001004004038',
        label: '2매 오만원 2024'
      }, {
        id: '001004004039',
        label: '2매 3차천원 2024'
      }, {
        id: '001004004040',
        label: '2매 5차오천원 2024'
      }, {
        id: '001004004041',
        label: '2매 6차만원 2024'
      }, {
        id: '001004004042',
        label: '4매 3차천원 2024'
      }, {
        id: '001004004043',
        label: '4매 5차오천원 2024'
      }, {
        id: '001004004044',
        label: '4매 6차만원 2024'
      }, {
        id: '001004004045',
        label: '16매 5차오천원 2025'
      }, {
        id: '001004004046',
        label: '2매 3차천원 2023'
      }, {
        id: '001004004047',
        label: '2매 5차오천원 2023'
      }, {
        id: '001004004048',
        label: '2매 6차만원 2023'
      }]
    }, {
      id: '001004005',
      label: '기념은행권 (2018 평창동계올림픽)'
    }, {
      id: '001004006',
      label: '테스트노트'
    }]
  }]
};
var KR_COIN_CATALOG = {
  id: '002',
  label: '한국주화 전체',
  children: [{
    id: '002001',
    label: '고전',
    children: [{
      id: '002001001',
      label: '고려시대',
      children: [{
        id: '002001001001',
        label: '무문전'
      }, {
        id: '002001001002',
        label: '건원중보'
      }, {
        id: '002001001003',
        label: '개원통보'
      }, {
        id: '002001001004',
        label: '동국중보'
      }, {
        id: '002001001005',
        label: '동국통보'
      }, {
        id: '002001001006',
        label: '해동원보'
      }, {
        id: '002001001007',
        label: '해동통보'
      }, {
        id: '002001001008',
        label: '해동중보'
      }, {
        id: '002001001009',
        label: '삼한통보'
      }, {
        id: '002001001010',
        label: '삼한중보'
      }]
    }, {
      id: '002001002',
      label: '조선시대',
      children: [{
        id: '002001002001',
        label: '조선통보'
      }, {
        id: '002001002002',
        label: '십전통보'
      }, {
        id: '002001002003',
        label: '상평통보'
      }, {
        id: '002001002004',
        label: '상평통보 모전'
      }, {
        id: '002001002005',
        label: '상평통보 단자'
      }, {
        id: '002001002006',
        label: '상평통보 당일'
      }, {
        id: '002001002007',
        label: '상평통보 당이'
      }, {
        id: '002001002008',
        label: '상평통보 중형'
      }, {
        id: '002001002009',
        label: '상평통보 당오'
      }, {
        id: '002001002010',
        label: '상평통보 당백'
      }, {
        id: '002001002011',
        label: '상평통보 세트'
      }]
    }, {
      id: '002001003',
      label: '별전',
      children: [{
        id: '002001003001',
        label: '기하도형전'
      }, {
        id: '002001003002',
        label: '도화전'
      }, {
        id: '002001003003',
        label: '동물전'
      }, {
        id: '002001003004',
        label: '문자전'
      }, {
        id: '002001003005',
        label: '부조전'
      }, {
        id: '002001003006',
        label: '부채전'
      }, {
        id: '002001003007',
        label: '식물전'
      }, {
        id: '002001003008',
        label: '실패전'
      }, {
        id: '002001003009',
        label: '투조전'
      }, {
        id: '002001003010',
        label: '오행전'
      }, {
        id: '002001003011',
        label: '와당전'
      }, {
        id: '002001003012',
        label: '화형'
      }, {
        id: '002001003013',
        label: '기타전'
      }]
    }, {
      id: '002001004',
      label: '열쇠패'
    }]
  }, {
    id: '002002',
    label: '근대주화',
    children: [{
      id: '002002001',
      label: '조선시대',
      children: [{
        id: '002002001001',
        label: '대동전'
      }, {
        id: '002002001002',
        label: '당오전 시주화'
      }, {
        id: '002002001003',
        label: '을유년 시주화'
      }, {
        id: '002002001004',
        label: '태극장 시주화'
      }, {
        id: '002002001005',
        label: '1원은화(태극)'
      }, {
        id: '002002001006',
        label: '십문 청동화(태극)'
      }, {
        id: '002002001007',
        label: '오문 청동화(태극)'
      }, {
        id: '002002001008',
        label: '일원 은화(이화)'
      }, {
        id: '002002001009',
        label: '닷량 은화'
      }, {
        id: '002002001010',
        label: '한량 은화'
      }, {
        id: '002002001011',
        label: '두돈오푼 백동화'
      }, {
        id: '002002001012',
        label: '오푼 청동화'
      }, {
        id: '002002001013',
        label: '한푼 황동화'
      }]
    }, {
      id: '002002002',
      label: '대한제국시대',
      children: [{
        id: '002002002001',
        label: '이십원 금화'
      }, {
        id: '002002002002',
        label: '십원 금화'
      }, {
        id: '002002002003',
        label: '오원 금화'
      }, {
        id: '002002002004',
        label: '반원 은화(大)'
      }, {
        id: '002002002005',
        label: '반원 은화(小)'
      }, {
        id: '002002002006',
        label: '이십전 은화(大)'
      }, {
        id: '002002002007',
        label: '이십전 은화(小)'
      }, {
        id: '002002002008',
        label: '십전 은화'
      }, {
        id: '002002002009',
        label: '오전 백동화'
      }, {
        id: '002002002010',
        label: '일전 청동화(대형)'
      }, {
        id: '002002002011',
        label: '일전 청동화(소형)'
      }, {
        id: '002002002012',
        label: '반전 청동화(大)'
      }, {
        id: '002002002013',
        label: '반전 청동화(小)'
      }, {
        id: '002002002014',
        label: '반원 은화(독수리)'
      }, {
        id: '002002002015',
        label: '오전 백동화(독수리)'
      }, {
        id: '002002002016',
        label: '일전 청동화(독수리)'
      }, {
        id: '002002002017',
        label: '시주화(독수리)'
      }]
    }]
  }, {
    id: '002003',
    label: '현행주화',
    children: [{
      id: '002003001',
      label: '100환',
      children: [{
        id: '002003001001',
        label: '그레이딩'
      }]
    }, {
      id: '002003002',
      label: '50환',
      children: [{
        id: '002003002001',
        label: '그레이딩'
      }]
    }, {
      id: '002003003',
      label: '10환',
      children: [{
        id: '002003003001',
        label: '그레이딩'
      }]
    }, {
      id: '002003004',
      label: '500원',
      children: [{
        id: '002003004001',
        label: '그레이딩'
      }, {
        id: '002003004002',
        label: '미사용'
      }, {
        id: '002003004003',
        label: '사용제'
      }]
    }, {
      id: '002003005',
      label: '100원',
      children: [{
        id: '002003005001',
        label: '그레이딩'
      }, {
        id: '002003005002',
        label: '미사용'
      }, {
        id: '002003005003',
        label: '사용제'
      }]
    }, {
      id: '002003006',
      label: '50원',
      children: [{
        id: '002003006001',
        label: '그레이딩'
      }, {
        id: '002003006002',
        label: '미사용'
      }, {
        id: '002003006003',
        label: '사용제'
      }]
    }, {
      id: '002003007',
      label: '10원',
      children: [{
        id: '002003007001',
        label: '그레이딩'
      }, {
        id: '002003007002',
        label: '미사용'
      }, {
        id: '002003007003',
        label: '사용제'
      }]
    }, {
      id: '002003010',
      label: '5원',
      children: [{
        id: '002003010001',
        label: '그레이딩'
      }, {
        id: '002003010002',
        label: '미사용'
      }, {
        id: '002003010003',
        label: '사용제'
      }]
    }, {
      id: '002003008',
      label: '1원',
      children: [{
        id: '002003008001',
        label: '그레이딩'
      }, {
        id: '002003008002',
        label: '미사용'
      }, {
        id: '002003008003',
        label: '사용제'
      }]
    }, {
      id: '002003009',
      label: '민트세트',
      children: [{
        id: '002003009001',
        label: '한국은행 민트'
      }, {
        id: '002003009002',
        label: '한국조폐공사 민트'
      }, {
        id: '002003009003',
        label: '기타 주화세트'
      }]
    }]
  }, {
    id: '002004',
    label: '기념주화/메달',
    children: [{
      id: '002004001',
      label: '대한민국 오천년 영광사'
    }, {
      id: '002004002',
      label: '광복 30주년'
    }, {
      id: '002004003',
      label: '제42회 세계사격선수권대회'
    }, {
      id: '002004004',
      label: '제5공화국출범'
    }, {
      id: '002004005',
      label: '제24회 올림픽대회유치'
    }, {
      id: '002004006',
      label: '천주교전래 200주년'
    }, {
      id: '002004007',
      label: '제10회 서울아시안게임'
    }, {
      id: '002004008',
      label: '제24회 서울올림픽'
    }, {
      id: '002004009',
      label: '대전 엑스포'
    }, {
      id: '002004010',
      label: '광복 50주년'
    }, {
      id: '002004011',
      label: '유엔창설50주년'
    }, {
      id: '002004012',
      label: '정부수립 50주년'
    }, {
      id: '002004013',
      label: '새천년'
    }, {
      id: '002004014',
      label: '한국은행 창립기념'
    }, {
      id: '002004015',
      label: '제3차 아시아유럽정상회의'
    }, {
      id: '002004016',
      label: '2002 한일월드컵'
    }, {
      id: '002004017',
      label: '부산아시안게임'
    }, {
      id: '002004018',
      label: '광복 60주년'
    }, {
      id: '002004019',
      label: 'APEC정상회의'
    }, {
      id: '002004020',
      label: '한글날 560돌'
    }, {
      id: '002004021',
      label: '민속놀이'
    }, {
      id: '002004022',
      label: '건국 60주년'
    }, {
      id: '002004023',
      label: '서울G20정상회의'
    }, {
      id: '002004024',
      label: '한국조폐공사메달'
    }, {
      id: '002004025',
      label: '유네스코문화유산'
    }, {
      id: '002004026',
      label: '2011대구세계육상선수권대회'
    }, {
      id: '002004027',
      label: '서울핵안보정상회의'
    }, {
      id: '002004028',
      label: '기타메달',
      children: [{
        id: '002004028001',
        label: '수향시리즈'
      }]
    }, {
      id: '002004029',
      label: '여수엑스포'
    }, {
      id: '002004030',
      label: '세계자연보호총회'
    }, {
      id: '002004031',
      label: '숭례문 복구 기념주화'
    }, {
      id: '002004032',
      label: '나로호발사성공'
    }, {
      id: '002004033',
      label: '한국의 문화유산'
    }, {
      id: '002004034',
      label: '인천아시아경기대회'
    }, {
      id: '002004035',
      label: '교황방문'
    }, {
      id: '002004036',
      label: '광복 70주년'
    }, {
      id: '002004038',
      label: '2015 세계군인체육대회'
    }, {
      id: '002004039',
      label: '평창동계올림픽'
    }, {
      id: '002004040',
      label: '국립공원'
    }, {
      id: '002004041',
      label: '3·1운동 및 임시정부수립'
    }, {
      id: '002004042',
      label: '2019 광주FINA 세계수영선수권'
    }, {
      id: '002004043',
      label: '제100회 전국체육대회'
    }, {
      id: '002004044',
      label: '2020년대',
      children: [{
        id: '002004044001',
        label: '새만금 세계스카우트잼버리'
      }, {
        id: '002004044002',
        label: '누리호발사성공'
      }, {
        id: '002004044003',
        label: '순천만국제정원박람회'
      }, {
        id: '002004044004',
        label: '한국 명산의 사계'
      }, {
        id: '002004044005',
        label: '한국의 센서스 100년'
      }, {
        id: '002004044006',
        label: '광복 80년'
      }, {
        id: '002004044007',
        label: '2025 APEC정상회의'
      }]
    }]
  }]
};
var CATALOG_MAP = {
  '001': KR_BANKNOTE_CATALOG,
  '002': KR_COIN_CATALOG
};
var SORT_OPTIONS = [{
  value: '',
  label: '추천순'
}, {
  value: 'orderCnt',
  label: '인기순'
}, {
  value: 'price_asc',
  label: '낮은가격'
}, {
  value: 'price_dsc',
  label: '높은가격'
}, {
  value: 'regDt',
  label: '등록일순'
}];
var PAGE_SIZE_OPTIONS = ['30', '60', '90', '120'];
var parseInputKeyword = function parseInputKeyword(text) {
  var trimmed = text.trim();
  if (!trimmed) return '';
  return trimmed.split(/\s+/).filter(Boolean).join('%');
};
var mergeCatalogKeyword = function mergeCatalogKeyword(catalogTerms, userKeyword) {
  var parts = _toConsumableArray(catalogTerms);
  if (userKeyword) parts.push.apply(parts, _toConsumableArray(userKeyword.split('%').filter(Boolean)));
  return parts.join('%');
};
var _findCatalogNode = function findCatalogNode(node, id) {
  if (node.id === id) return node;
  if (!node.children) return null;
  var _iterator = _createForOfIteratorHelper(node.children),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var child = _step.value;
      var found = _findCatalogNode(child, id);
      if (found) return found;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return null;
};
var _getAncestorIds = function getAncestorIds(node, targetId) {
  var path = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  if (node.id === targetId) return path;
  if (!node.children) return null;
  var _iterator2 = _createForOfIteratorHelper(node.children),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var child = _step2.value;
      var result = _getAncestorIds(child, targetId, [].concat(_toConsumableArray(path), [node.id]));
      if (result) return result;
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  return null;
};
var getCatalogBreadcrumb = function getCatalogBreadcrumb(catalogRoot, catalogId) {
  var ancestors = _getAncestorIds(catalogRoot, catalogId) || [];
  return [].concat(_toConsumableArray(ancestors), [catalogId]).map(function (id) {
    return _findCatalogNode(catalogRoot, id);
  }).filter(Boolean).map(function (n) {
    return n.label;
  });
};

// goods_list.php는 keyword 파라미터를 무시함 → 검색어 있으면 퀵검색 사용
// 그레이딩·미사용 등은 상품명에 없어 검색어로 쓰면 0건 → 제외
var CATALOG_SKIP_TERMS = new Set(['그레이딩', '미사용', '사용제', '한국지폐 전체', '한국주화 전체', '현행주화', '현행권', '고전', '근대주화', '기념주화/메달', '민트세트']);
var getCatalogSearchTerms = function getCatalogSearchTerms(catalogRoot, catalogId) {
  var node = _findCatalogNode(catalogRoot, catalogId);
  if (!node || catalogId === catalogRoot.id) return [];
  var paren = node.label.match(/\(([^)]+)\)/);
  if (paren && !CATALOG_SKIP_TERMS.has(paren[1])) return [paren[1]];
  var crumbs = getCatalogBreadcrumb(catalogRoot, catalogId).filter(function (l) {
    return l !== catalogRoot.label;
  });
  for (var i = crumbs.length - 1; i >= 0; i--) {
    var label = crumbs[i];
    if (CATALOG_SKIP_TERMS.has(label)) continue;
    var mp = label.match(/\(([^)]+)\)/);
    if (mp && !CATALOG_SKIP_TERMS.has(mp[1])) return [mp[1]];
    if (/^\d+원$/.test(label) || /\d+원권/.test(label) || /\d+환/.test(label)) return [label];
  }
  var last = crumbs.filter(function (l) {
    return !CATALOG_SKIP_TERMS.has(l);
  }).pop();
  return last ? [last] : [];
};
var buildQuickSearchParams = function buildQuickSearchParams(categoryId, keyword) {
  var slots = ['', '', '', ''];
  var cat = CATEGORIES.find(function (c) {
    return c.id === categoryId;
  });
  if (cat) slots[cat.slot] = categoryId;
  var params = ['mode=quick'];
  slots.forEach(function (val) {
    return params.push("quickCateGoods[]=".concat(val));
  });
  params.push('goodsPrice[]=', 'goodsPrice[]=');
  params.push("keyword=".concat(encodeURIComponent(keyword)));
  return params;
};
function CatalogTreeNode(_ref2) {
  var node = _ref2.node,
    selectedId = _ref2.selectedId,
    onSelect = _ref2.onSelect,
    onOpenSearch = _ref2.onOpenSearch,
    expandedIds = _ref2.expandedIds,
    toggleExpand = _ref2.toggleExpand,
    depth = _ref2.depth;
  var hasChildren = node.children && node.children.length > 0;
  var isExpanded = expandedIds.has(node.id);
  var isSelected = selectedId === node.id;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-1 py-1.5 pr-2 rounded-lg cursor-pointer text-sm transition-colors ".concat(isSelected ? 'bg-blue-100 text-blue-900 font-bold' : 'hover:bg-slate-50 text-slate-700'),
    style: {
      paddingLeft: "".concat(depth * 14 + 8, "px")
    },
    onClick: function onClick() {
      return onSelect(node.id);
    },
    onDoubleClick: function onDoubleClick(e) {
      e.preventDefault();
      onSelect(node.id);
      onOpenSearch(node.id);
    },
    title: "\uB354\uBE14\uD074\uB9AD: \uC218\uC9D1\uBC45\uD06C \uC870\uD68C (\uC0C8 \uCC3D)"
  }, hasChildren ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: function onClick(e) {
      e.stopPropagation();
      toggleExpand(node.id);
    },
    className: "w-5 h-5 shrink-0 text-xs text-slate-400 hover:text-blue-600"
  }, isExpanded ? '▼' : '▶') : /*#__PURE__*/React.createElement("span", {
    className: "w-5 shrink-0"
  }), /*#__PURE__*/React.createElement("span", {
    className: "flex-1 leading-snug"
  }, node.label), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] text-slate-400 font-mono shrink-0"
  }, node.id)), hasChildren && isExpanded && node.children.map(function (child) {
    return /*#__PURE__*/React.createElement(CatalogTreeNode, {
      key: child.id,
      node: child,
      selectedId: selectedId,
      onSelect: onSelect,
      onOpenSearch: onOpenSearch,
      expandedIds: expandedIds,
      toggleExpand: toggleExpand,
      depth: depth + 1
    });
  }));
}
function App() {
  var _CATEGORIES$find;
  var _useState = useState(''),
    _useState2 = _slicedToArray(_useState, 2),
    inputValue = _useState2[0],
    setInputValue = _useState2[1];
  var _useState3 = useState(''),
    _useState4 = _slicedToArray(_useState3, 2),
    selectedCat = _useState4[0],
    setSelectedCat = _useState4[1];
  var _useState5 = useState(''),
    _useState6 = _slicedToArray(_useState5, 2),
    selectedCatalogId = _useState6[0],
    setSelectedCatalogId = _useState6[1];
  var _useState7 = useState(new Set()),
    _useState8 = _slicedToArray(_useState7, 2),
    expandedIds = _useState8[0],
    setExpandedIds = _useState8[1];
  var _useState9 = useState(''),
    _useState10 = _slicedToArray(_useState9, 2),
    sortMethod = _useState10[0],
    setSortMethod = _useState10[1];
  var _useState11 = useState('30'),
    _useState12 = _slicedToArray(_useState11, 2),
    itemsPerPage = _useState12[0],
    setItemsPerPage = _useState12[1];
  var activeCatalog = CATALOG_MAP[selectedCat] || null;
  var isCatalogMode = !!activeCatalog;
  var handleCategoryClick = function handleCategoryClick(id) {
    setSelectedCat(function (prev) {
      if (prev === id) {
        setSelectedCatalogId('');
        setExpandedIds(new Set());
        return '';
      }
      if (CATALOG_MAP[id]) {
        setSelectedCatalogId(id);
        setExpandedIds(new Set([id]));
      } else {
        setSelectedCatalogId('');
        setExpandedIds(new Set());
      }
      return id;
    });
  };
  var toggleExpand = function toggleExpand(id) {
    setExpandedIds(function (prev) {
      var next = new Set(prev);
      if (next.has(id)) next["delete"](id);else next.add(id);
      return next;
    });
  };
  var handleCatalogSelect = function handleCatalogSelect(id) {
    setSelectedCatalogId(id);
    if (!activeCatalog) return;
    var ancestors = _getAncestorIds(activeCatalog, id) || [];
    setExpandedIds(function (prev) {
      return new Set([].concat(_toConsumableArray(prev), _toConsumableArray(ancestors), [id]));
    });
  };
  var resetAll = function resetAll() {
    setInputValue('');
    setSelectedCat('');
    setSelectedCatalogId('');
    setExpandedIds(new Set());
    setSortMethod('');
    setItemsPerPage('30');
  };
  var buildSearchUrl = function buildSearchUrl(userKeyword) {
    var catalogIdOverride = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var catalogId = catalogIdOverride !== null && catalogIdOverride !== void 0 ? catalogIdOverride : selectedCatalogId;
    if (isCatalogMode && catalogId && activeCatalog) {
      if (userKeyword) {
        var catalogTerms = getCatalogSearchTerms(activeCatalog, catalogId);
        var searchKeyword = mergeCatalogKeyword(catalogTerms, userKeyword);
        var _baseUrl = 'https://www.sujipbank.com/goods/goods_search.php';
        var _params = buildQuickSearchParams(selectedCat, searchKeyword);
        if (sortMethod) _params.push("sort=".concat(sortMethod));
        _params.push("pageNum=".concat(itemsPerPage));
        return "".concat(_baseUrl, "?").concat(_params.join('&'));
      }
      var _baseUrl2 = 'https://www.sujipbank.com/goods/goods_list.php';
      var _params2 = ["cateCd=".concat(catalogId)];
      if (sortMethod) _params2.push("sort=".concat(sortMethod));
      _params2.push("pageNum=".concat(itemsPerPage));
      return "".concat(_baseUrl2, "?").concat(_params2.join('&'));
    }
    var baseUrl = 'https://www.sujipbank.com/goods/goods_search.php';
    if (selectedCat) {
      var slots = ['', '', '', ''];
      var cat = CATEGORIES.find(function (c) {
        return c.id === selectedCat;
      });
      if (cat) slots[cat.slot] = selectedCat;
      var _params3 = ['mode=quick'];
      slots.forEach(function (val) {
        return _params3.push("quickCateGoods[]=".concat(val));
      });
      _params3.push('goodsPrice[]=', 'goodsPrice[]=');
      _params3.push("keyword=".concat(encodeURIComponent(userKeyword)));
      if (sortMethod) _params3.push("sort=".concat(sortMethod));
      _params3.push("pageNum=".concat(itemsPerPage));
      return "".concat(baseUrl, "?").concat(_params3.join('&'));
    }
    var params = ["keyword=".concat(encodeURIComponent(userKeyword))];
    if (sortMethod) params.push("sort=".concat(sortMethod));
    params.push("pageNum=".concat(itemsPerPage));
    return "".concat(baseUrl, "?").concat(params.join('&'));
  };
  var openSearch = function openSearch() {
    var catalogIdOverride = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    window.open(buildSearchUrl(parseInputKeyword(inputValue), catalogIdOverride), '_blank');
  };
  var executeSearch = function executeSearch() {
    return openSearch();
  };
  useEffect(function () {
    var onKeyDown = function onKeyDown(e) {
      if (e.key !== 'Enter') return;
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      if (isCatalogMode && selectedCatalogId) {
        e.preventDefault();
        openSearch(selectedCatalogId);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return function () {
      return window.removeEventListener('keydown', onKeyDown);
    };
  }, [isCatalogMode, selectedCatalogId]);
  return /*#__PURE__*/React.createElement("div", {
    className: "min-h-screen flex items-start justify-center px-4 pt-4 pb-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-full max-w-5xl bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white px-5 py-4 border-b border-gray-100 flex items-center justify-between gap-3"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "text-xl font-extrabold text-blue-900 flex items-center gap-2 shrink-0"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-blue-600"
  }, Icons.Search), "\uC218\uC9D1\uBC45\uD06C \uD1B5\uD569 \uAC80\uC0C9", /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-bold bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full"
  }, "v", APP_VERSION)), /*#__PURE__*/React.createElement("button", {
    onClick: executeSearch,
    className: "flex-1 max-w-xs h-9 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-lg shadow transition-colors flex items-center justify-center gap-2"
  }, Icons.Search, " ", isCatalogMode ? '카탈로그 조회 (새 창)' : '검색 결과 보기 (새 창)'), /*#__PURE__*/React.createElement("button", {
    onClick: resetAll,
    className: "flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-lg text-xs font-bold text-gray-600 transition-colors shrink-0"
  }, Icons.Reset, " \uCD08\uAE30\uD654")), /*#__PURE__*/React.createElement("div", {
    className: "p-5 space-y-5"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between mb-1.5 gap-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-4 min-w-0 flex-wrap"
  }, /*#__PURE__*/React.createElement("label", {
    className: "text-xs font-bold text-gray-700 shrink-0"
  }, "\uAC80\uC0C9\uC5B4 \uC785\uB825"), inputValue.trim() && selectedCat && /*#__PURE__*/React.createElement("span", {
    className: "text-[11px] text-orange-600 font-bold"
  }, "\u26A0\uFE0F \uCE74\uD14C\uACE0\uB9AC\uAC00 \uC120\uD0DD\uB41C \uACBD\uC6B0, \uD574\uB2F9 \uCE74\uD14C\uACE0\uB9AC \uB0B4\uC5D0\uC11C\uB9CC \uAC80\uC0C9\uC774 \uC9C4\uD589\uB429\uB2C8\uB2E4.")), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] bg-orange-500 text-white px-2 py-0.5 rounded-full font-bold shrink-0"
  }, "\uB744\uC5B4\uC4F0\uAE30=AND")), /*#__PURE__*/React.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: inputValue,
    onChange: function onChange(e) {
      return setInputValue(e.target.value);
    },
    onKeyDown: function onKeyDown(e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        executeSearch();
      }
    },
    placeholder: "\uC608: \uC81510\uC6D0 \uC720\uBC88\uD638 \xB7 Enter\uB85C \uAC80\uC0C9 \xB7 \uB610\uB294 '\uAC80\uC0C9 (\uC0C8 \uCC3D)' \uBC84\uD2BC \uD074\uB9AD\uC73C\uB85C \uAC80\uC0C9",
    className: "w-full h-9 pl-3 pr-8 border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:outline-none transition-colors"
  }), inputValue && /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setInputValue('');
    },
    className: "absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-red-500"
  }, Icons.Close))), /*#__PURE__*/React.createElement("hr", {
    className: "border-gray-100"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] text-gray-500 mb-2"
  }, "\uCE74\uD14C\uACE0\uB9AC\uB294 1\uAC1C\uB9CC \uC120\uD0DD\uAC00\uB2A5 /", ' ', /*#__PURE__*/React.createElement("span", {
    className: "text-orange-600 font-bold"
  }, "\uC6D0\uD558\uB294 \uCE74\uD14C\uACE0\uB9AC \uD074\uB9AD=\uC120\uD0DD / \uB2E4\uC2DC \uD074\uB9AD=\uD574\uC81C\uB428")), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 flex-wrap"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-gray-600 shrink-0"
  }, Icons.Category), /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-bold text-gray-700 shrink-0"
  }, "\uCE74\uD14C\uACE0\uB9AC \uC120\uD0DD"), CATEGORIES.map(function (cat) {
    return /*#__PURE__*/React.createElement("div", {
      key: cat.id,
      onClick: function onClick() {
        return handleCategoryClick(cat.id);
      },
      className: "flex items-center gap-1 px-2 py-1 rounded-md border cursor-pointer transition-all select-none text-xs ".concat(selectedCat === cat.id ? 'border-blue-500 bg-blue-50 text-blue-800 font-bold' : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300')
    }, selectedCat === cat.id ? Icons.RadioOn : Icons.RadioOff, cat.label, cat.hasCatalog && /*#__PURE__*/React.createElement("span", {
      className: "text-[9px] bg-emerald-100 text-emerald-700 px-1 rounded"
    }, "\uCE74\uD0C8\uB85C\uADF8"));
  }))), isCatalogMode && activeCatalog && /*#__PURE__*/React.createElement("div", {
    className: "p-4 bg-emerald-50/50 rounded-xl border border-emerald-100"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between mb-3"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-bold text-emerald-900 text-sm"
  }, (_CATEGORIES$find = CATEGORIES.find(function (c) {
    return c.id === selectedCat;
  })) === null || _CATEGORIES$find === void 0 ? void 0 : _CATEGORIES$find.label, " \uCE74\uD0C8\uB85C\uADF8"), /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-emerald-600"
  }, "\u25B6 \uD074\uB9AD: \uD3BC\uCE58\uAE30 \xB7 \uB354\uBE14\uD074\uB9AD \uB610\uB294 Enter: \uC870\uD68C (\uC0C8 \uCC3D)")), selectedCatalogId && /*#__PURE__*/React.createElement("div", {
    className: "mb-3 px-3 py-2 bg-white rounded-lg border border-emerald-200 text-sm"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-emerald-700 font-bold"
  }, "\uC120\uD0DD: "), getCatalogBreadcrumb(activeCatalog, selectedCatalogId).join(' › '), /*#__PURE__*/React.createElement("span", {
    className: "ml-2 text-xs font-mono text-slate-400"
  }, "cateCd=", selectedCatalogId)), /*#__PURE__*/React.createElement("div", {
    className: "max-h-[32rem] overflow-y-auto bg-white rounded-lg border border-emerald-100 p-2",
    tabIndex: 0
  }, /*#__PURE__*/React.createElement(CatalogTreeNode, {
    node: activeCatalog,
    selectedId: selectedCatalogId,
    onSelect: handleCatalogSelect,
    onOpenSearch: openSearch,
    expandedIds: expandedIds,
    toggleExpand: toggleExpand,
    depth: 0
  }))), /*#__PURE__*/React.createElement("hr", {
    className: "border-gray-100"
  }), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 flex-wrap"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-gray-700 font-bold shrink-0 flex items-center gap-1"
  }, Icons.Filter, " \uC815\uB82C"), SORT_OPTIONS.map(function (opt) {
    return /*#__PURE__*/React.createElement("button", {
      key: opt.value,
      onClick: function onClick() {
        return setSortMethod(opt.value);
      },
      className: "px-2 py-1 text-xs rounded-md border transition-colors ".concat(sortMethod === opt.value ? 'bg-slate-800 text-white border-slate-800' : 'bg-white border-gray-200 text-gray-500 hover:border-gray-400')
    }, opt.label);
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 flex-wrap"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-gray-700 font-bold shrink-0 flex items-center gap-1"
  }, Icons.Eye, " \uBCF4\uAE30"), PAGE_SIZE_OPTIONS.map(function (size) {
    return /*#__PURE__*/React.createElement("button", {
      key: size,
      onClick: function onClick() {
        return setItemsPerPage(size);
      },
      className: "px-2 py-1 text-xs rounded-md border transition-colors ".concat(itemsPerPage === size ? 'bg-slate-800 text-white border-slate-800' : 'bg-white border-gray-200 text-gray-500 hover:border-gray-400')
    }, size, "\uAC1C\uC529");
  })))));
}
var root = ReactDOM.createRoot(document.getElementById('root'));
root.render(/*#__PURE__*/React.createElement(App, null));