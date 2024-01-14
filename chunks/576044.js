"use strict";
l.r(t), l.d(t, {
  LocationIcon: function() {
    return r
  }
});
var n = l("37983");
l("884691");
var a = l("669491"),
  s = l("75196");
let r = e => {
  let {
    width: t = 24,
    height: l = 24,
    color: r = a.default.colors.INTERACTIVE_NORMAL,
    colorClass: u = "",
    ...i
  } = e;
  return (0, n.jsx)("svg", {
    ...(0, s.default)(i),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: l,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, n.jsx)("path", {
      fill: "string" == typeof r ? r : r.css,
      fillRule: "evenodd",
      d: "M12 23c3 0 9-8.03 9-13a9 9 0 1 0-18 0c0 4.97 6 13 9 13Zm0-10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
      clipRule: "evenodd",
      className: u
    })
  })
}