"use strict";
s.r(t), s.d(t, {
  LockUnlockedIcon: function() {
    return l
  }
});
var a = s("37983");
s("884691");
var n = s("669491"),
  r = s("75196");
let l = e => {
  let {
    width: t = 24,
    height: s = 24,
    color: l = n.default.colors.INTERACTIVE_NORMAL,
    colorClass: i = "",
    ...u
  } = e;
  return (0, a.jsx)("svg", {
    ...(0, r.default)(u),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: s,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, a.jsx)("path", {
      fill: "string" == typeof l ? l : l.css,
      fillRule: "evenodd",
      d: "M8.7 2.25A4.98 4.98 0 0 1 17 6v3h1a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3h9V6a3 3 0 0 0-4.98-2.25 1 1 0 0 1-1.33-1.5ZM14 14a2 2 0 0 1-1 1.73V18a1 1 0 1 1-2 0v-2.27A2 2 0 1 1 14 14Z",
      clipRule: "evenodd",
      className: i
    })
  })
}