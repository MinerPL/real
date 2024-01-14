"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var l = n("37983");
n("884691");
var a = n("469563"),
  s = n("424823"),
  i = n("75196"),
  r = (0, a.replaceIcon)(function(e) {
    let {
      width: t = 18,
      height: n = 18,
      color: a = "currentColor",
      foreground: s,
      ...r
    } = e;
    return (0, l.jsx)("svg", {
      ...(0, i.default)(r),
      width: t,
      height: n,
      viewBox: "0 0 18 18",
      children: (0, l.jsx)("polygon", {
        fillRule: "nonzero",
        className: s,
        fill: a,
        points: "15 10 10 10 10 15 8 15 8 10 3 10 3 8 8 8 8 3 10 3 10 8 15 8"
      })
    })
  }, s.PlusSmallIcon, void 0, {
    size: 18
  })