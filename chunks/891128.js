"use strict";
n.r(t), n.d(t, {
  CircleCheckIcon: function() {
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
    secondaryColor: a = "transparent",
    secondaryColorClass: o = "",
    color: l = r.default.colors.INTERACTIVE_NORMAL,
    colorClass: u = "",
    ...c
  } = e;
  return (0, i.jsxs)("svg", {
    ...(0, s.default)(c),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: n,
    fill: "none",
    viewBox: "0 0 24 24",
    children: [(0, i.jsx)("circle", {
      cx: "12",
      cy: "12",
      r: "10",
      fill: "string" == typeof a ? a : a.css,
      className: o
    }), (0, i.jsx)("path", {
      fill: "string" == typeof l ? l : l.css,
      fillRule: "evenodd",
      d: "M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22Zm5.7-13.3a1 1 0 0 0-1.4-1.4L10 14.58l-2.3-2.3a1 1 0 0 0-1.4 1.42l3 3a1 1 0 0 0 1.4 0l7-7Z",
      clipRule: "evenodd",
      className: u
    })]
  })
}