"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
});
var a = n("37983");
n("884691");
var r = n("75196");

function s(e) {
  let {
    width: t = 12,
    height: n = 12,
    color: s = "currentColor",
    foreground: i,
    ...l
  } = e;
  return (0, a.jsx)("svg", {
    ...(0, r.default)(l),
    width: t,
    height: n,
    viewBox: "0 0 12 12",
    children: (0, a.jsxs)("g", {
      fill: s,
      className: i,
      fillRule: "evenodd",
      children: [(0, a.jsx)("path", {
        d: "M5,3 C5,3 5,6.1325704 5,6.48601043 C5,6.83945045 5.18485201,7 5.49021559,7 L9,7 L9,6 L8,6 L8,5 L7,5 L7,4 L6,4 L6,3 L5,3 Z",
        transform: "rotate(180 7 5)"
      }), (0, a.jsx)("path", {
        d: "M3,5 C3,5 3,8.1325704 3,8.48601043 C3,8.83945045 3.18485201,9 3.49021559,9 L7,9 L7,8 L6,8 L6,7 L5,7 L5,6 L4,6 L4,5 L3,5 Z"
      })]
    })
  })
}