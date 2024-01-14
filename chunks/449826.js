"use strict";
A.r(t), A.d(t, {
  UndoIcon: function() {
    return r
  }
});
var a = A("37983");
A("884691");
var l = A("669491"),
  n = A("75196");
let r = e => {
  let {
    width: t = 24,
    height: A = 24,
    color: r = l.default.colors.INTERACTIVE_NORMAL,
    colorClass: s = "",
    ...o
  } = e;
  return (0, a.jsx)("svg", {
    ...(0, n.default)(o),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: A,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, a.jsx)("path", {
      fill: "string" == typeof r ? r : r.css,
      d: "M2 8a1 1 0 0 1 2 0v3.54A10.26 10.26 0 0 1 12.38 7c4.23 0 7.83 2.74 9.53 6.6a1 1 0 1 1-1.82.8c-1.45-3.25-4.4-5.4-7.71-5.4a8.34 8.34 0 0 0-6.96 4H9a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1V8Z",
      className: s
    })
  })
}