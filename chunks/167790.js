"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var a = n("446674"),
  s = n("7331"),
  i = n("305961"),
  l = n("697218"),
  r = n("49111");

function o(e) {
  var t;
  let n = (0, a.useStateFromStores)([i.default], () => i.default.getGuild(e)),
    o = (0, a.useStateFromStores)([l.default], () => l.default.getCurrentUser()),
    u = (null == n ? void 0 : n.ownerId) === (null == o ? void 0 : o.id),
    d = (0, s.useIsUserInCreatorMonetizationEligibleCountry)();
  return u && null !== (t = null == n ? void 0 : n.hasFeature(r.GuildFeatures.COMMUNITY)) && void 0 !== t && t && d && !((null == n ? void 0 : n.hasFeature(r.GuildFeatures.CREATOR_MONETIZABLE)) || (null == n ? void 0 : n.hasFeature(r.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL)) || (null == n ? void 0 : n.hasFeature(r.GuildFeatures.CREATOR_MONETIZABLE_DISABLED)))
}