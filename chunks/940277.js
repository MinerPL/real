"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
});
var a = n("37983");
n("884691");
var r = n("75196");

function s(e) {
  let {
    width: t = 12,
    height: n = 12,
    color: s = "currentColor",
    foreground: i,
    ...l
  } = e;
  return (0, a.jsx)("svg", {
    ...(0, r.default)(l),
    width: t,
    height: n,
    viewBox: "0 0 12 12",
    children: (0, a.jsx)("polygon", {
      fill: s,
      className: i,
      fillRule: "evenodd",
      points: "11 1.576 6.583 6 11 10.424 10.424 11 6 6.583 1.576 11 1 10.424 5.417 6 1 1.576 1.576 1 6 5.417 10.424 1"
    })
  })
}