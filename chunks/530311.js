"use strict";
s.r(t), s.d(t, {
  default: function() {
    return r
  }
});
var a = s("37983");
s("884691");
var n = s("75196");

function r(e) {
  let {
    width: t = 24,
    height: s = 24,
    color: r = "currentColor",
    foreground: l,
    ...i
  } = e;
  return (0, a.jsx)("svg", {
    ...(0, n.default)(i),
    width: t,
    height: s,
    viewBox: "0 0 24 24",
    children: (0, a.jsxs)("g", {
      fill: "none",
      fillRule: "evenodd",
      children: [(0, a.jsx)("path", {
        className: l,
        fill: r,
        d: "M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"
      }), (0, a.jsx)("rect", {
        width: "24",
        height: "24"
      })]
    })
  })
}