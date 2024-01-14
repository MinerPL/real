"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var s = n("37983");
n("884691");
var i = n("414456"),
  l = n.n(i),
  r = n("791106"),
  o = n("216422"),
  a = n("258078"),
  u = n("63625");

function c(e) {
  let {
    text: t,
    textSize: n = a.default.Sizes.SIZE_12,
    textColor: i = a.default.Colors.STANDARD,
    className: c,
    button: d,
    reducedRightPadding: f = !1
  } = e;
  return (0, s.jsxs)("div", {
    className: l(f ? u.noticeWithoutRightPadding : u.noticeWithRightPadding, c),
    children: [(0, s.jsxs)("div", {
      className: u.noticeLeft,
      children: [(0, s.jsx)(o.default, {
        className: u.icon,
        color: r.GradientCssUrls.PREMIUM_TIER_2
      }), (0, s.jsx)(a.default, {
        className: u.text,
        size: n,
        color: i,
        children: t
      })]
    }), d]
  })
}