"use strict";
s.r(t), s.d(t, {
  ReceiptIcon: function() {
    return i
  }
});
var r = s("37983");
s("884691");
var n = s("669491"),
  a = s("75196");
let i = e => {
  let {
    width: t = 24,
    height: s = 24,
    color: i = n.default.colors.INTERACTIVE_NORMAL,
    colorClass: l = "",
    ...o
  } = e;
  return (0, r.jsx)("svg", {
    ...(0, a.default)(o),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: s,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, r.jsx)("path", {
      fill: "string" == typeof i ? i : i.css,
      fillRule: "evenodd",
      d: "M21 21.93V2.07a1 1 0 0 0-1.27-.97l-2.5.7a3 3 0 0 1-1.46.04l-3.12-.7a3 3 0 0 0-1.3 0l-3.12.7a3 3 0 0 1-1.45-.04l-2.51-.7A1 1 0 0 0 3 2.07v19.86a1 1 0 0 0 1.27.97l2.5-.7a3 3 0 0 1 1.46-.04l3.12.7a3 3 0 0 0 1.3 0l3.12-.7a3 3 0 0 1 1.45.04l2.51.7a1 1 0 0 0 1.27-.97ZM7 8a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Zm1 3a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H8Zm-1 5a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Zm8-1a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2h-1Z",
      clipRule: "evenodd",
      className: l
    })
  })
}