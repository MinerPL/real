"use strict";
n.r(t), n.d(t, {
  UndoIcon: function() {
    return s
  }
});
var l = n("37983");
n("884691");
var r = n("669491"),
  i = n("75196");
let s = e => {
  let {
    width: t = 24,
    height: n = 24,
    color: s = r.default.colors.INTERACTIVE_NORMAL,
    colorClass: a = "",
    ...o
  } = e;
  return (0, l.jsx)("svg", {
    ...(0, i.default)(o),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: n,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, l.jsx)("path", {
      fill: "string" == typeof s ? s : s.css,
      d: "M2 8a1 1 0 0 1 2 0v3.54A10.26 10.26 0 0 1 12.38 7c4.23 0 7.83 2.74 9.53 6.6a1 1 0 1 1-1.82.8c-1.45-3.25-4.4-5.4-7.71-5.4a8.34 8.34 0 0 0-6.96 4H9a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1V8Z",
      className: a
    })
  })
}