"use strict";
r.r(t), r.d(t, {
  ArrowSmallLeftIcon: function() {
    return l
  }
});
var n = r("37983");
r("884691");
var i = r("669491"),
  a = r("75196");
let l = e => {
  let {
    width: t = 24,
    height: r = 24,
    color: l = i.default.colors.INTERACTIVE_NORMAL,
    colorClass: o = "",
    ...s
  } = e;
  return (0, n.jsx)("svg", {
    ...(0, a.default)(s),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: r,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, n.jsx)("path", {
      fill: "string" == typeof l ? l : l.css,
      d: "M3.3 11.3a1 1 0 0 0 0 1.4l5 5a1 1 0 0 0 1.4-1.4L6.42 13H20a1 1 0 1 0 0-2H6.41l3.3-3.3a1 1 0 0 0-1.42-1.4l-5 5Z",
      className: o
    })
  })
}