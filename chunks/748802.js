"use strict";
n.r(t), n.d(t, {
  ChevronSmallRightIcon: function() {
    return a
  }
});
var i = n("37983");
n("884691");
var r = n("669491"),
  s = n("75196");
let a = e => {
  let {
    width: t = 24,
    height: n = 24,
    color: a = r.default.colors.INTERACTIVE_NORMAL,
    colorClass: o = "",
    ...l
  } = e;
  return (0, i.jsx)("svg", {
    ...(0, s.default)(l),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: n,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, i.jsx)("path", {
      fill: "string" == typeof a ? a : a.css,
      d: "M9.3 5.3a1 1 0 0 0 0 1.4l5.29 5.3-5.3 5.3a1 1 0 1 0 1.42 1.4l6-6a1 1 0 0 0 0-1.4l-6-6a1 1 0 0 0-1.42 0Z",
      className: o
    })
  })
}