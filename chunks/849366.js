"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var l = n("65597"),
  i = n("708730"),
  r = n("305961"),
  a = n("354023"),
  s = n("49111");

function o(e) {
  let t = (0, l.default)([r.default], () => r.default.getGuild(e), [e]),
    n = (0, i.useIsInGrowingFriendGuildCommunityUpsellExperiment)(e),
    o = a.default.getMaxAgeOptions;
  return !n || (null == t ? void 0 : t.hasFeature(s.GuildFeatures.COMMUNITY)) ? o.filter(e => (null == e ? void 0 : e.value) !== a.default.INVITE_OPTIONS_30_DAYS.value) : o
}