"use strict";
l.r(t), l.d(t, {
  SendMessageIcon: function() {
    return i
  }
});
var n = l("37983");
l("884691");
var a = l("669491"),
  s = l("75196");
let i = e => {
  let {
    width: t = 24,
    height: l = 24,
    color: i = a.default.colors.INTERACTIVE_NORMAL,
    colorClass: r = "",
    ...o
  } = e;
  return (0, n.jsx)("svg", {
    ...(0, s.default)(o),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: l,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, n.jsx)("path", {
      fill: "string" == typeof i ? i : i.css,
      d: "m5.1 10.02 7.4 1.39a.6.6 0 0 1 0 1.18L5.1 14l-2.94 5.87a1.48 1.48 0 0 0 1.99 1.98l17.03-8.52a1.48 1.48 0 0 0 0-2.64L4.15 2.16a1.48 1.48 0 0 0-1.99 1.98l2.94 5.88Z",
      className: r
    })
  })
}