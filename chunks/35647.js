"use strict";
n.r(t), n.d(t, {
  IdIcon: function() {
    return d
  }
});
var l = n("37983");
n("884691");
var u = n("669491"),
  a = n("75196");
let d = e => {
  let {
    width: t = 24,
    height: n = 24,
    color: d = u.default.colors.INTERACTIVE_NORMAL,
    colorClass: i = "",
    ...r
  } = e;
  return (0, l.jsxs)("svg", {
    ...(0, a.default)(r),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: n,
    fill: "none",
    viewBox: "0 0 24 24",
    children: [(0, l.jsx)("path", {
      fill: "string" == typeof d ? d : d.css,
      d: "M15.3 14.48c-.46.45-1.08.67-1.86.67h-1.39V9.2h1.39c.78 0 1.4.22 1.86.67.46.45.68 1.22.68 2.31 0 1.1-.22 1.86-.68 2.31Z",
      className: i
    }), (0, l.jsx)("path", {
      fill: "string" == typeof d ? d : d.css,
      fillRule: "evenodd",
      d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm1 15h2.04V7.34H6V17Zm4-9.66V17h3.44c1.46 0 2.6-.42 3.38-1.25.8-.83 1.2-2.02 1.2-3.58s-.4-2.75-1.2-3.58c-.79-.83-1.92-1.25-3.38-1.25H10Z",
      clipRule: "evenodd",
      className: i
    })]
  })
}