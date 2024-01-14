"use strict";
l.r(t), l.d(t, {
  BrowserIcon: function() {
    return r
  }
});
var n = l("37983");
l("884691");
var a = l("669491"),
  s = l("75196");
let r = e => {
  let {
    width: t = 24,
    height: l = 24,
    color: r = a.default.colors.INTERACTIVE_NORMAL,
    colorClass: i = "",
    ...u
  } = e;
  return (0, n.jsxs)("svg", {
    ...(0, s.default)(u),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: l,
    fill: "none",
    viewBox: "0 0 24 24",
    children: [(0, n.jsx)("path", {
      fill: "string" == typeof r ? r : r.css,
      fillRule: "evenodd",
      d: "M1 6a3 3 0 0 1 3-3h16a3 3 0 0 1 3 3v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6Zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm4-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm2 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
      clipRule: "evenodd",
      className: i
    }), (0, n.jsx)("path", {
      fill: "string" == typeof r ? r : r.css,
      d: "M1 12a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v6a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3v-6Z",
      className: i
    })]
  })
}