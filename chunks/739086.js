"use strict";
n.r(t), n.d(t, {
  PhoneHangUpIcon: function() {
    return l
  }
});
var a = n("37983");
n("884691");
var r = n("669491"),
  s = n("75196");
let l = e => {
  let {
    width: t = 24,
    height: n = 24,
    color: l = r.default.colors.INTERACTIVE_NORMAL,
    colorClass: i = "",
    ...u
  } = e;
  return (0, a.jsx)("svg", {
    ...(0, s.default)(u),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: n,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, a.jsx)("path", {
      fill: "string" == typeof l ? l : l.css,
      d: "m21.5 16.6-.13.14a.88.88 0 0 1-.97.2l-4.09-1.7a.99.99 0 0 1-.57-1.18l.73-2.7c-2.24-3-6.7-3-8.94 0l.7 2.1a.99.99 0 0 1-.48 1.19l-4.13 2.2a.87.87 0 0 1-1.03-.15l-.1-.1a5.18 5.18 0 0 1-.32-6.92 12.67 12.67 0 0 1 19.66 0 5.18 5.18 0 0 1-.32 6.92Z",
      className: i
    })
  })
}