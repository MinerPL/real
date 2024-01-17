"use strict";
n.r(t), n.d(t, {
  EyeDropperIcon: function() {
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
      d: "m16.25 2.25-2 2-.63-.63a3 3 0 0 0-4.24 0l-.85.85c-.3.3-.3.77 0 1.06l9.94 9.94c.3.3.77.3 1.06 0l.85-.85a3 3 0 0 0 0-4.24l-.63-.63 2-2a3.89 3.89 0 1 0-5.5-5.5ZM9.3 9.7a1 1 0 0 1 1.4 0l3.6 3.6a1 1 0 0 1 0 1.4l-4.84 4.84a5 5 0 0 1-2.7 1.39c-.47.08-.86.42-1.1.83a2.5 2.5 0 1 1-3.42-3.42c.41-.24.75-.63.83-1.1a5 5 0 0 1 1.4-2.7L9.28 9.7Z",
      className: a
    })
  })
}