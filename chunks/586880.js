"use strict";
t.r(l), t.d(l, {
  HubIcon: function() {
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
  return (0, a.jsx)("svg", {
    ...(0, s.default)(c),
    xmlns: "http://www.w3.org/2000/svg",
    width: l,
    height: t,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, a.jsx)("path", {
      fill: "string" == typeof r ? r : r.css,
      d: "M13 7.83a3 3 0 1 0-2 0V11H8a4 4 0 0 0-4 4v1.17a3 3 0 1 0 2 0V15c0-1.1.9-2 2-2h3v3.17a3 3 0 1 0 2 0V13h3a2 2 0 0 1 2 2v1.17a3 3 0 1 0 2 0V15a4 4 0 0 0-4-4h-3V7.83Z",
      className: i
    })
  })
}