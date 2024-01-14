"use strict";
n.r(e), n.d(e, {
  AIcon: function() {
    return a
  }
});
var o = n("37983");
n("884691");
var i = n("669491"),
  s = n("75196");
let a = t => {
  let {
    width: e = 24,
    height: n = 24,
    color: a = i.default.colors.INTERACTIVE_NORMAL,
    colorClass: r = "",
    ...u
  } = t;
  return (0, o.jsx)("svg", {
    ...(0, s.default)(u),
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: n,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, o.jsx)("path", {
      fill: "string" == typeof a ? a : a.css,
      d: "M20.84 21.32a.5.5 0 0 1-.46.68h-1.52a1 1 0 0 1-.94-.66l-1.55-4.28H7.63l-1.56 4.28a1 1 0 0 1-.94.66H3.62a.5.5 0 0 1-.47-.68l7.09-18.6a1 1 0 0 1 .93-.64h1.63a1 1 0 0 1 .93.65l7.11 18.6ZM11.98 5.1l-3.43 9.43h6.87L11.98 5.1Z",
      className: r
    })
  })
}