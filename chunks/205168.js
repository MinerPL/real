"use strict";
t.r(l), t.d(l, {
  ForumLockIcon: function() {
    return r
  }
});
var a = t("37983");
t("884691");
var n = t("669491"),
  s = t("75196");
let r = e => {
  let {
    width: l = 24,
    height: t = 24,
    color: r = n.default.colors.INTERACTIVE_NORMAL,
    colorClass: i = "",
    ...c
  } = e;
  return (0, a.jsxs)("svg", {
    ...(0, s.default)(c),
    xmlns: "http://www.w3.org/2000/svg",
    width: l,
    height: t,
    fill: "none",
    viewBox: "0 0 24 24",
    children: [(0, a.jsx)("path", {
      fill: "string" == typeof r ? r : r.css,
      fillRule: "evenodd",
      d: "M16 4h.5v-.5a2.5 2.5 0 0 1 5 0V4h.5a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Zm4-.5V4h-2v-.5a1 1 0 1 1 2 0Z",
      clipRule: "evenodd",
      className: i
    }), (0, a.jsx)("path", {
      fill: "string" == typeof r ? r : r.css,
      d: "M13.58 3.23c.24-.33.16-.86-.24-.96C12.59 2.1 11.8 2 11 2c-4.97 0-9 3.58-9 8 0 1.5.47 2.91 1.28 4.11.14.21.12.49-.06.67l-1.51 1.51A1 1 0 0 0 2.4 18h5.1a.5.5 0 0 0 .49-.5c0-3.17 2-5.82 4.77-6.94.29-.11.43-.45.34-.75A3 3 0 0 1 13 9V5c0-.66.22-1.28.58-1.77ZM18.91 12.98a5.45 5.45 0 0 1 2.18 6.2c-.1.33-.09.68.1.96l.83 1.32a1 1 0 0 1-.84 1.54h-5.5A5.6 5.6 0 0 1 10 17.5a5.6 5.6 0 0 1 5.68-5.5c1.2 0 2.32.36 3.23.98Z",
      className: i
    })]
  })
}