"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
});
var l = n("37983");
n("884691");
var a = n("75196");

function s(e) {
  let {
    width: t = 24,
    height: n = 24,
    color: s = "currentColor",
    ...i
  } = e;
  return (0, l.jsx)("svg", {
    ...(0, a.default)(i),
    width: t,
    height: n,
    viewBox: "0 0 4 4",
    children: (0, l.jsx)("circle", {
      cx: "2",
      cy: "2",
      r: "2",
      fill: s
    })
  })
}