"use strict";
n.r(t), n.d(t, {
  FacebookIcon: function() {
    return r
  }
});
var l = n("37983");
n("884691");
var a = n("669491"),
  s = n("75196");
let r = e => {
  let {
    width: t = 24,
    height: n = 24,
    color: r = a.default.colors.INTERACTIVE_NORMAL,
    colorClass: o = "",
    ...i
  } = e;
  return (0, l.jsx)("svg", {
    ...(0, s.default)(i),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: n,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, l.jsx)("path", {
      fill: "string" == typeof r ? r : r.css,
      d: "M23 12a11 11 0 1 0-12.72 10.87v-7.69h-2.8V12h2.8V9.58c0-2.76 1.64-4.28 4.16-4.28 1.2 0 2.46.21 2.46.21v2.7H15.5c-1.37 0-1.8.86-1.8 1.73V12h3.06l-.49 3.18h-2.56v7.69A11 11 0 0 0 23 12Z",
      className: o
    })
  })
}