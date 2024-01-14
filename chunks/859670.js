"use strict";
s.r(t), s.d(t, {
  BoostTier1Icon: function() {
    return o
  }
});
var l = s("37983");
s("884691");
var n = s("669491"),
  r = s("75196");
let o = e => {
  let {
    width: t = 24,
    height: s = 24,
    color: o = n.default.colors.INTERACTIVE_NORMAL,
    colorClass: a = "",
    ...i
  } = e;
  return (0, l.jsx)("svg", {
    ...(0, r.default)(i),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: s,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, l.jsx)("path", {
      fill: "string" == typeof o ? o : o.css,
      fillRule: "evenodd",
      d: "M13.05 1.4a1.59 1.59 0 0 0-2.1 0l-4.9 4A3.37 3.37 0 0 0 5 8v8c0 1.07.4 2.06 1.05 2.6l4.9 4c.65.53 1.45.53 2.1 0l4.9-4A3.37 3.37 0 0 0 19 16V8c0-1.07-.4-2.06-1.05-2.6l-4.9-4ZM12 4.41 8.06 7.64c-.03.08-.06.2-.06.36v8c0 .16.03.28.06.36L12 19.59l3.94-3.23c.03-.08.06-.2.06-.36V8c0-.16-.03-.28-.06-.36L12 4.41Z",
      clipRule: "evenodd",
      className: a
    })
  })
}