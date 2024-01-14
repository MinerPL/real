"use strict";
n.r(t), n.d(t, {
  PlusSmallIcon: function() {
    return o
  }
});
var r = n("37983");
n("884691");
var i = n("669491"),
  l = n("75196");
let o = e => {
  let {
    width: t = 24,
    height: n = 24,
    color: o = i.default.colors.INTERACTIVE_NORMAL,
    colorClass: s = "",
    ...a
  } = e;
  return (0, r.jsx)("svg", {
    ...(0, l.default)(a),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: n,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, r.jsx)("path", {
      fill: "string" == typeof o ? o : o.css,
      d: "M13 6a1 1 0 1 0-2 0v5H6a1 1 0 1 0 0 2h5v5a1 1 0 1 0 2 0v-5h5a1 1 0 1 0 0-2h-5V6Z",
      className: s
    })
  })
}