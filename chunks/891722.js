"use strict";
n.r(t), n.d(t, {
  ArrowSmallLeftIcon: function() {
    return l
  }
});
var r = n("37983");
n("884691");
var i = n("669491"),
  a = n("75196");
let l = e => {
  let {
    width: t = 24,
    height: n = 24,
    color: l = i.default.colors.INTERACTIVE_NORMAL,
    colorClass: s = "",
    ...o
  } = e;
  return (0, r.jsx)("svg", {
    ...(0, a.default)(o),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: n,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, r.jsx)("path", {
      fill: "string" == typeof l ? l : l.css,
      d: "M3.3 11.3a1 1 0 0 0 0 1.4l5 5a1 1 0 0 0 1.4-1.4L6.42 13H20a1 1 0 1 0 0-2H6.41l3.3-3.3a1 1 0 0 0-1.42-1.4l-5 5Z",
      className: s
    })
  })
}