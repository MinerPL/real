"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  }
});
var r = n("37983");
n("884691");
var i = n("414456"),
  l = n.n(i),
  o = n("642032"),
  s = n("767964");

function a(e) {
  let {
    className: t,
    children: n,
    forceUseColor: i = !1,
    hideStars: a
  } = e;
  return (0, r.jsxs)("span", {
    className: l(s.container, t, {
      [s.containerColored]: i
    }),
    children: [n, a ? null : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(o.default, {
        foreground: s.sparkleStarTopRight
      }), (0, r.jsx)(o.default, {
        foreground: s.sparkleStarRight
      }), (0, r.jsx)(o.default, {
        foreground: s.sparkleStarBottomLeft
      })]
    })]
  })
}