"use strict";
t.r(l), t.d(l, {
  ForumIcon: function() {
    return s
  }
});
var n = t("37983");
t("884691");
var a = t("669491"),
  i = t("75196");
let s = e => {
  let {
    width: l = 24,
    height: t = 24,
    color: s = a.default.colors.INTERACTIVE_NORMAL,
    colorClass: r = "",
    ...c
  } = e;
  return (0, n.jsxs)("svg", {
    ...(0, i.default)(c),
    xmlns: "http://www.w3.org/2000/svg",
    width: l,
    height: t,
    fill: "none",
    viewBox: "0 0 24 24",
    children: [(0, n.jsx)("path", {
      fill: "string" == typeof s ? s : s.css,
      d: "M18.91 12.98a5.45 5.45 0 0 1 2.18 6.2c-.1.33-.09.68.1.96l.83 1.32a1 1 0 0 1-.84 1.54h-5.5A5.6 5.6 0 0 1 10 17.5a5.6 5.6 0 0 1 5.68-5.5c1.2 0 2.32.36 3.23.98Z",
      className: r
    }), (0, n.jsx)("path", {
      fill: "string" == typeof s ? s : s.css,
      d: "M19.24 10.86c.32.16.72-.02.74-.38L20 10c0-4.42-4.03-8-9-8s-9 3.58-9 8c0 1.5.47 2.91 1.28 4.11.14.21.12.49-.06.67l-1.51 1.51A1 1 0 0 0 2.4 18h5.1a.5.5 0 0 0 .49-.5c0-4.2 3.5-7.5 7.68-7.5 1.28 0 2.5.3 3.56.86Z",
      className: r
    })]
  })
}