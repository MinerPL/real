"use strict";
s.r(t), s.d(t, {
  ServerGridIcon: function() {
    return l
  }
});
var i = s("37983");
s("884691");
var r = s("669491"),
  a = s("75196");
let l = e => {
  let {
    width: t = 24,
    height: s = 24,
    color: l = r.default.colors.INTERACTIVE_NORMAL,
    colorClass: o = "",
    ...n
  } = e;
  return (0, i.jsx)("svg", {
    ...(0, a.default)(n),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: s,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, i.jsx)("path", {
      fill: "string" == typeof l ? l : l.css,
      d: "M5.25 2A3.25 3.25 0 0 0 2 5.25v2.5C2 9.55 3.46 11 5.25 11h2.5C9.55 11 11 9.54 11 7.75v-2.5C11 3.45 9.54 2 7.75 2h-2.5ZM5.25 13A3.25 3.25 0 0 0 2 16.25v2.5C2 20.55 3.46 22 5.25 22h2.5c1.8 0 3.25-1.46 3.25-3.25v-2.5C11 14.45 9.54 13 7.75 13h-2.5ZM13 5.25C13 3.45 14.46 2 16.25 2h2.5C20.55 2 22 3.46 22 5.25v2.5c0 1.8-1.46 3.25-3.25 3.25h-2.5A3.25 3.25 0 0 1 13 7.75v-2.5ZM16.25 13A3.25 3.25 0 0 0 13 16.25v2.5c0 1.8 1.46 3.25 3.25 3.25h2.5c1.8 0 3.25-1.46 3.25-3.25v-2.5c0-1.8-1.46-3.25-3.25-3.25h-2.5Z",
      className: o
    })
  })
}