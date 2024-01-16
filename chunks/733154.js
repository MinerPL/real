"use strict";
n.r(t), n.d(t, {
  ChatIcon: function() {
    return r
  }
});
var i = n("37983");
n("884691");
var l = n("669491"),
  a = n("75196");
let r = e => {
  let {
    width: t = 24,
    height: n = 24,
    color: r = l.default.colors.INTERACTIVE_NORMAL,
    colorClass: s = "",
    ...o
  } = e;
  return (0, i.jsx)("svg", {
    ...(0, a.default)(o),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: n,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, i.jsx)("path", {
      fill: "string" == typeof r ? r : r.css,
      d: "M12 22a10 10 0 1 0-8.45-4.64c.13.19.11.44-.04.61l-2.06 2.37A1 1 0 0 0 2.2 22H12Z",
      className: s
    })
  })
}