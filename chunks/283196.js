"use strict";
a.r(t), a.d(t, {
  FolderPlusIcon: function() {
    return s
  }
});
var n = a("37983");
a("884691");
var i = a("669491"),
  l = a("75196");
let s = e => {
  let {
    width: t = 24,
    height: a = 24,
    color: s = i.default.colors.INTERACTIVE_NORMAL,
    colorClass: d = "",
    ...u
  } = e;
  return (0, n.jsx)("svg", {
    ...(0, l.default)(u),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: a,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, n.jsx)("path", {
      fill: "string" == typeof s ? s : s.css,
      fillRule: "evenodd",
      d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3h-7l-1.4-2.1A2 2 0 0 0 8.92 2H5Zm7 7a1 1 0 0 1 1 1v3h3a1 1 0 0 1 0 2h-3v3a1 1 0 0 1-2 0v-3H8a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1Z",
      clipRule: "evenodd",
      className: d
    })
  })
}