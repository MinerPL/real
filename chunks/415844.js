"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  }
});
var s = n("37983");
n("884691");
var l = n("75196");

function a(e) {
  let {
    width: t = 24,
    height: n = 24,
    color: a = "currentColor",
    foreground: i,
    ...r
  } = e;
  return (0, s.jsx)("svg", {
    ...(0, l.default)(r),
    width: t,
    height: n,
    viewBox: "0 0 24 24",
    children: (0, s.jsxs)("g", {
      fill: "none",
      fillRule: "evenodd",
      children: [(0, s.jsx)("path", {
        className: i,
        fill: a,
        d: "M4 11.526V6.553l5.684-1.25v6.138L4 11.526zM20.105 3v8.29l-9.473.142V5.094L20.105 3zM4 12.474l5.684.085v6.452L4 17.92v-5.447zm16.105.237V21l-9.473-1.81v-6.622l9.473.143z"
      }), (0, s.jsx)("rect", {
        width: "24",
        height: "24"
      })]
    })
  })
}