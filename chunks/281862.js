"use strict";
i.r(t), i.d(t, {
  PinIcon: function() {
    return o
  }
});
var a = i("37983");
i("884691");
var l = i("669491"),
  n = i("75196");
let o = e => {
  let {
    width: t = 24,
    height: i = 24,
    color: o = l.default.colors.INTERACTIVE_NORMAL,
    colorClass: s = "",
    ...r
  } = e;
  return (0, a.jsx)("svg", {
    ...(0, n.default)(r),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: i,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, a.jsx)("path", {
      fill: "string" == typeof o ? o : o.css,
      d: "M19.38 11.38a3 3 0 0 0 4.24 0l.03-.03a.5.5 0 0 0 0-.7L13.35.35a.5.5 0 0 0-.7 0l-.03.03a3 3 0 0 0 0 4.24L13 5l-2.92 2.92-3.65-.34a2 2 0 0 0-1.6.58l-.62.63a1 1 0 0 0 0 1.42l9.58 9.58a1 1 0 0 0 1.42 0l.63-.63a2 2 0 0 0 .58-1.6l-.34-3.64L19 11l.38.38ZM9.07 17.07a.5.5 0 0 1-.08.77l-5.15 3.43a.5.5 0 0 1-.63-.06l-.42-.42a.5.5 0 0 1-.06-.63L6.16 15a.5.5 0 0 1 .77-.08l2.14 2.14Z",
      className: s
    })
  })
}