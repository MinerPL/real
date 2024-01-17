"use strict";
n.r(t), n.d(t, {
  MobilePhoneIcon: function() {
    return o
  }
});
var i = n("37983");
n("884691");
var r = n("669491"),
  l = n("75196");
let o = e => {
  let {
    width: t = 24,
    height: n = 24,
    color: o = r.default.colors.INTERACTIVE_NORMAL,
    colorClass: s = "",
    ...a
  } = e;
  return (0, i.jsx)("svg", {
    ...(0, l.default)(a),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: n,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, i.jsx)("path", {
      fill: "string" == typeof o ? o : o.css,
      fillRule: "evenodd",
      d: "M5 4a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v16a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V4Zm5 16a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1ZM8 3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H8Z",
      clipRule: "evenodd",
      className: s
    })
  })
}