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
    foreground: l,
    ...i
  } = e;
  return (0, a.jsx)("svg", {
    ...(0, r.default)(i),
    width: t,
    height: n,
    viewBox: "0 0 12 12",
    children: (0, a.jsx)("rect", {
      fill: s,
      className: l,
      width: "8",
      height: "2",
      x: "2",
      y: "5",
      fillRule: "evenodd"
    })
  })
}