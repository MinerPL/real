"use strict";
n.r(t), n.d(t, {
  CirclePlayIcon: function() {
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
    secondaryColor: i = "transparent",
    secondaryColorClass: r = "",
    color: o = a.default.colors.INTERACTIVE_NORMAL,
    colorClass: u = "",
    ...d
  } = e;
  return (0, l.jsxs)("svg", {
    ...(0, s.default)(d),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: n,
    fill: "none",
    viewBox: "0 0 24 24",
    children: [(0, l.jsx)("circle", {
      cx: "12",
      cy: "12",
      r: "10",
      fill: "string" == typeof i ? i : i.css,
      className: r
    }), (0, l.jsx)("path", {
      fill: "string" == typeof o ? o : o.css,
      fillRule: "evenodd",
      d: "M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22ZM9 8.09c0-.88 1-1.4 1.73-.9l5.8 3.91c.63.44.63 1.36 0 1.8l-5.8 3.9C10 17.3 9 16.8 9 15.92V8.1Z",
      clipRule: "evenodd",
      className: u
    })]
  })
}