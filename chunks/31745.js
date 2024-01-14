"use strict";
n.r(t), n.d(t, {
  CirclePlusIcon: function() {
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
      d: "M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22Zm0-17a1 1 0 0 1 1 1v4h4a1 1 0 1 1 0 2h-4v4a1 1 0 1 1-2 0v-4H7a1 1 0 1 1 0-2h4V7a1 1 0 0 1 1-1Z",
      clipRule: "evenodd",
      className: o
    })]
  })
}