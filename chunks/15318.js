"use strict";
n.r(t), n.d(t, {
  ConnectionFineIcon: function() {
    return i
  }
});
var l = n("37983");
n("884691");
var a = n("669491"),
  s = n("75196");
let i = e => {
  let {
    width: t = 24,
    height: n = 24,
    color: i = a.default.colors.STATUS_POSITIVE,
    colorClass: r = "",
    ...o
  } = e;
  return (0, l.jsxs)("svg", {
    ...(0, s.default)(o),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: n,
    fill: "none",
    viewBox: "0 0 24 24",
    children: [(0, l.jsx)("path", {
      fill: "string" == typeof i ? i : i.css,
      d: "M2 3a1 1 0 0 1 1-1 19 19 0 0 1 19 19 1 1 0 1 1-2 0A17 17 0 0 0 3 4a1 1 0 0 1-1-1Z",
      className: r
    }), (0, l.jsx)("path", {
      fill: "string" == typeof i ? i : i.css,
      d: "M2 8a1 1 0 0 1 1-1 14 14 0 0 1 14 14 1 1 0 1 1-2 0A12 12 0 0 0 3 9a1 1 0 0 1-1-1Z",
      className: r
    }), (0, l.jsx)("path", {
      fill: "string" == typeof i ? i : i.css,
      d: "M3 12a1 1 0 1 0 0 2 7 7 0 0 1 7 7 1 1 0 1 0 2 0 9 9 0 0 0-9-9ZM2 17.83c0-.46.37-.83.83-.83C5.13 17 7 18.87 7 21.17c0 .46-.37.83-.83.83H3a1 1 0 0 1-1-1v-3.17Z",
      className: r
    })]
  })
}