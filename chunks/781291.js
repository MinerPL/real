"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
});
var i = n("37983");
n("884691");
var r = n("75196");

function s(e) {
  let {
    width: t = 24,
    height: n = 24,
    color: s = "currentColor",
    className: a,
    background: o,
    foreground: l,
    ...u
  } = e;
  return (0, i.jsxs)("svg", {
    ...(0, r.default)(u),
    className: a,
    width: t,
    height: n,
    viewBox: "0 0 24 24",
    children: [(0, i.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M5.37499 3H18.625C19.9197 3 21.0056 4.08803 21 5.375V18.625C21 19.936 19.9359 21 18.625 21H5.37499C4.06518 21 3 19.936 3 18.625V5.375C3 4.06519 4.06518 3 5.37499 3Z",
      className: o,
      fill: s
    }), (0, i.jsx)("path", {
      d: "M9.58473 14.8636L6.04944 11.4051L4.50003 12.9978L9.58473 18L19.5 8.26174L17.9656 6.64795L9.58473 14.8636Z",
      className: l,
      fill: s
    })]
  })
}