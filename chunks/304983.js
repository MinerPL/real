"use strict";
a.r(t), a.d(t, {
  MoreHorizontalIcon: function() {
    return r
  }
});
var n = a("37983");
a("884691");
var l = a("669491"),
  i = a("75196");
let r = e => {
  let {
    width: t = 24,
    height: a = 24,
    color: r = l.default.colors.INTERACTIVE_NORMAL,
    colorClass: s = "",
    ...u
  } = e;
  return (0, n.jsx)("svg", {
    ...(0, i.default)(u),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: a,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, n.jsx)("path", {
      fill: "string" == typeof r ? r : r.css,
      fillRule: "evenodd",
      d: "M4 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm10-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm8 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z",
      clipRule: "evenodd",
      className: s
    })
  })
}