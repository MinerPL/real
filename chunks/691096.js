"use strict";
t.r(l), t.d(l, {
  DownloadIcon: function() {
    return i
  }
});
var s = t("37983");
t("884691");
var a = t("669491"),
  n = t("75196");
let i = e => {
  let {
    width: l = 24,
    height: t = 24,
    color: i = a.default.colors.INTERACTIVE_NORMAL,
    colorClass: r = "",
    ...o
  } = e;
  return (0, s.jsx)("svg", {
    ...(0, n.default)(o),
    xmlns: "http://www.w3.org/2000/svg",
    width: l,
    height: t,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, s.jsx)("path", {
      fill: "string" == typeof i ? i : i.css,
      d: "M12 2a1 1 0 0 1 1 1v10.59l3.3-3.3a1 1 0 1 1 1.4 1.42l-5 5a1 1 0 0 1-1.4 0l-5-5a1 1 0 1 1 1.4-1.42l3.3 3.3V3a1 1 0 0 1 1-1ZM3 20a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2H3Z",
      className: r
    })
  })
}