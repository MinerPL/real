"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
});
var a = n("37983");
n("884691");
var l = n("75196");

function s(e) {
  let {
    width: t = 16,
    height: n = 16,
    color: s = "currentColor",
    foreground: i,
    ...r
  } = e;
  return (0, a.jsx)("svg", {
    ...(0, l.default)(r),
    width: t,
    height: n,
    viewBox: "0 0 16 16",
    children: (0, a.jsx)("path", {
      className: i,
      fill: s,
      d: "M6,7 L2,7 L2,6 L6,6 L6,7 Z M8,5 L2,5 L2,4 L8,4 L8,5 Z M8,3 L2,3 L2,2 L8,2 L8,3 Z M8.88888889,0 L1.11111111,0 C0.494444444,0 0,0.494444444 0,1.11111111 L0,8.88888889 C0,9.50253861 0.497461389,10 1.11111111,10 L8.88888889,10 C9.50253861,10 10,9.50253861 10,8.88888889 L10,1.11111111 C10,0.494444444 9.5,0 8.88888889,0 Z",
      transform: "translate(3 3)"
    })
  })
}