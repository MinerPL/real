"use strict";
A.r(t), A.d(t, {
  UserMinusIcon: function() {
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
  return (0, a.jsxs)("svg", {
    ...(0, n.default)(o),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: A,
    fill: "none",
    viewBox: "0 0 24 24",
    children: [(0, a.jsx)("path", {
      d: "M11.53 11A9.53 9.53 0 0 0 2 20.53c0 .81.66 1.47 1.47 1.47h.22c.24 0 .44-.17.5-.4.29-1.12.84-2.17 1.32-2.91.14-.21.43-.1.4.15l-.25 2.61c-.03.3.2.55.5.55h7.63c.12 0 .17-.31.06-.36C12.82 21.14 12 20.22 12 19a3 3 0 0 1 3-3h5.02c.38 0 .61-.4.4-.72A9.52 9.52 0 0 0 12.47 11h-.94ZM12 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z",
      fill: "string" == typeof r ? r : r.css,
      className: s
    }), (0, a.jsx)("path", {
      d: "M15 18a1 1 0 1 0 0 2h8a1 1 0 0 0 0-2h-8Z",
      fill: "string" == typeof r ? r : r.css,
      className: s
    })]
  })
}