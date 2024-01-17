"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var r = n("37983");
n("884691");
var i = n("414456"),
  s = n.n(i),
  a = n("641078"),
  l = n("78938"),
  u = n("212942");

function o(e) {
  let {
    isNitroTab: t = !1
  } = e, n = (0, a.useIsEligibleForBogoPromotion)(), i = (0, a.getBOGOPillCopy)();
  return n ? (0, r.jsx)(l.default, {
    className: s({
      [u.nitroTabBadgeContainer]: t
    }),
    copy: i
  }) : null
}