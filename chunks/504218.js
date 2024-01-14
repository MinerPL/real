"use strict";
l.r(t), l.d(t, {
  TextIcon: function() {
    return r
  }
});
var n = l("37983");
l("884691");
var o = l("669491"),
  a = l("75196");
let r = e => {
  let {
    width: t = 24,
    height: l = 24,
    color: r = o.default.colors.INTERACTIVE_NORMAL,
    colorClass: s = "",
    ...i
  } = e;
  return (0, n.jsx)("svg", {
    ...(0, a.default)(i),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: l,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, n.jsx)("path", {
      fill: "string" == typeof r ? r : r.css,
      fillRule: "evenodd",
      d: "M10.99 3.16A1 1 0 1 0 9 2.84L8.15 8H4a1 1 0 0 0 0 2h3.82l-.67 4H3a1 1 0 1 0 0 2h3.82l-.8 4.84a1 1 0 0 0 1.97.32L8.85 16h4.97l-.8 4.84a1 1 0 0 0 1.97.32l.86-5.16H20a1 1 0 1 0 0-2h-3.82l.67-4H21a1 1 0 1 0 0-2h-3.82l.8-4.84a1 1 0 1 0-1.97-.32L15.15 8h-4.97l.8-4.84ZM14.15 14l.67-4H9.85l-.67 4h4.97Z",
      clipRule: "evenodd",
      className: s
    })
  })
}