"use strict";
a.r(t), a.d(t, {
  FriendsIcon: function() {
    return r
  }
});
var n = a("37983");
a("884691");
var l = a("669491"),
  i = a("75196");
let r = e => {
  let {
    width: t = 24,
    height: a = 24,
    color: r = l.default.colors.INTERACTIVE_NORMAL,
    colorClass: s = "",
    ...u
  } = e;
  return (0, n.jsxs)("svg", {
    ...(0, i.default)(u),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: a,
    fill: "none",
    viewBox: "0 0 24 24",
    children: [(0, n.jsx)("path", {
      fill: "string" == typeof r ? r : r.css,
      d: "M13 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z",
      className: s
    }), (0, n.jsx)("path", {
      fill: "string" == typeof r ? r : r.css,
      d: "M3 5v-.75C3 3.56 3.56 3 4.25 3s1.24.56 1.33 1.25C6.12 8.65 9.46 12 13 12h1a8 8 0 0 1 8 8 2 2 0 0 1-2 2 .21.21 0 0 1-.2-.15 7.65 7.65 0 0 0-1.32-2.3c-.15-.2-.42-.06-.39.17l.25 2c.02.15-.1.28-.25.28H9a2 2 0 0 1-2-2v-2.22c0-1.57-.67-3.05-1.53-4.37A15.85 15.85 0 0 1 3 5Z",
      className: s
    })]
  })
}