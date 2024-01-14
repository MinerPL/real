"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var r = n("37983");
n("884691");
var i = n("414456"),
  s = n.n(i),
  l = n("641078"),
  a = n("78938"),
  o = n("212942");

function u(e) {
  let {
    isNitroTab: t = !1
  } = e, n = (0, l.useIsEligibleForBogoPromotion)(), i = (0, l.getBOGOPillCopy)();
  return n ? (0, r.jsx)(a.default, {
    className: s({
      [o.nitroTabBadgeContainer]: t
    }),
    copy: i
  }) : null
}