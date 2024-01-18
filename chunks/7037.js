"use strict";
n.r(t), n.d(t, {
  ArrowSmallUpIcon: function() {
    return l
  }
});
var i = n("37983");
n("884691");
var r = n("669491"),
  s = n("75196");
let l = e => {
  let {
    width: t = 24,
    height: n = 24,
    color: l = r.default.colors.INTERACTIVE_NORMAL,
    colorClass: a = "",
    ...o
  } = e;
  return (0, i.jsx)("svg", {
    ...(0, s.default)(o),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: n,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, i.jsx)("path", {
      fill: "string" == typeof l ? l : l.css,
      d: "M12.7 3.3a1 1 0 0 0-1.4 0l-5 5a1 1 0 0 0 1.4 1.4L11 6.42V20a1 1 0 1 0 2 0V6.41l3.3 3.3a1 1 0 0 0 1.4-1.42l-5-5Z",
      className: a
    })
  })
}