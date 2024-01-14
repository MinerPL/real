"use strict";
n.r(t), n.d(t, {
  CircleInformationIcon: function() {
    return o
  }
});
var r = n("37983");
n("884691");
var i = n("669491"),
  l = n("75196");
let o = e => {
  let {
    width: t = 24,
    height: n = 24,
    secondaryColor: o = "transparent",
    secondaryColorClass: s = "",
    color: a = i.default.colors.INTERACTIVE_NORMAL,
    colorClass: u = "",
    ...c
  } = e;
  return (0, r.jsxs)("svg", {
    ...(0, l.default)(c),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: n,
    fill: "none",
    viewBox: "0 0 24 24",
    children: [(0, r.jsx)("circle", {
      cx: "12",
      cy: "12",
      r: "10",
      fill: "string" == typeof o ? o : o.css,
      className: s
    }), (0, r.jsx)("path", {
      fill: "string" == typeof a ? a : a.css,
      fillRule: "evenodd",
      d: "M23 12a11 11 0 1 1-22 0 11 11 0 0 1 22 0Zm-9.5-4.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm-.77 3.96a1 1 0 1 0-1.96-.42l-1.04 4.86a2.77 2.77 0 0 0 4.31 2.83l.24-.17a1 1 0 1 0-1.16-1.62l-.24.17a.77.77 0 0 1-1.2-.79l1.05-4.86Z",
      clipRule: "evenodd",
      className: u
    })]
  })
}