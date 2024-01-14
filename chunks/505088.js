"use strict";
n.r(t), n.d(t, {
  CircleXIcon: function() {
    return s
  }
});
var l = n("37983");
n("884691");
var a = n("669491"),
  r = n("75196");
let s = e => {
  let {
    width: t = 24,
    height: n = 24,
    secondaryColor: s = "transparent",
    secondaryColorClass: i = "",
    color: u = a.default.colors.INTERACTIVE_NORMAL,
    colorClass: o = "",
    ...c
  } = e;
  return (0, l.jsxs)("svg", {
    ...(0, r.default)(c),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: n,
    fill: "none",
    viewBox: "0 0 24 24",
    children: [(0, l.jsx)("circle", {
      cx: "12",
      cy: "12",
      r: "10",
      fill: "string" == typeof s ? s : s.css,
      className: i
    }), (0, l.jsx)("path", {
      fill: "string" == typeof u ? u : u.css,
      fillRule: "evenodd",
      d: "M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22Zm4.7-15.7a1 1 0 0 0-1.4 0L12 10.58l-3.3-3.3a1 1 0 0 0-1.4 1.42L10.58 12l-3.3 3.3a1 1 0 1 0 1.42 1.4L12 13.42l3.3 3.3a1 1 0 0 0 1.4-1.42L13.42 12l3.3-3.3a1 1 0 0 0 0-1.4Z",
      clipRule: "evenodd",
      className: o
    })]
  })
}