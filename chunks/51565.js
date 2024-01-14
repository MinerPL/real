"use strict";
r.r(t), r.d(t, {
  default: function() {
    return i
  }
}), r("222007");
var o = r("614858"),
  a = r("347924"),
  l = r("883474");
let s = new Set([o.BadgeCategory.PARTNERED, o.BadgeCategory.VERIFIED, o.BadgeCategory.VERIFIED_AND_PARTNERED, o.BadgeCategory.COMMUNITY, o.BadgeCategory.DISCOVERABLE]);

function i(e) {
  var t;
  let r = (0, a.useInServerBadgingExperiment)(null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : "");
  if (!r || null == e) return !1;
  let i = (0, l.getGuildTraits)(e),
    n = (0, o.getBadgeCategory)(i);
  return s.has(n)
}