"use strict";
n.r(t), n.d(t, {
  ArrowSmallRightIcon: function() {
    return l
  }
});
var r = n("37983");
n("884691");
var i = n("669491"),
  u = n("75196");
let l = e => {
  let {
    width: t = 24,
    height: n = 24,
    color: l = i.default.colors.INTERACTIVE_NORMAL,
    colorClass: o = "",
    ...s
  } = e;
  return (0, r.jsx)("svg", {
    ...(0, u.default)(s),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: n,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, r.jsx)("path", {
      fill: "string" == typeof l ? l : l.css,
      d: "M20.7 12.7a1 1 0 0 0 0-1.4l-5-5a1 1 0 1 0-1.4 1.4l3.29 3.3H4a1 1 0 1 0 0 2h13.59l-3.3 3.3a1 1 0 0 0 1.42 1.4l5-5Z",
      className: o
    })
  })
}