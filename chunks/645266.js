"use strict";
n.r(t), n.d(t, {
  initializeMemberSafetyStore: function() {
    return d
  },
  refreshMemberSafetyTimestamp: function() {
    return c
  },
  updateMemberSafetyTablePagination: function() {
    return f
  },
  updateSearchState: function() {
    return S
  },
  getMemberSupplemental: function() {
    return E
  },
  goToMemberSafetyDashboard: function() {
    return h
  }
});
var i = n("592407"),
  r = n("393414"),
  l = n("305961"),
  u = n("466818"),
  o = n("447038"),
  s = n("49111"),
  a = n("724210");
async function d(e) {
  return await (0, o.initializeMemberSafetyStoreV2)(e)
}

function c(e) {
  return (0, o.refreshMemberSafetyTimestampV2)(e)
}

function f(e, t) {
  return (0, o.updateMemberSafetyTablePaginationV2)(e, t)
}

function S(e, t) {
  return (0, o.updateSearchStateV2)(e, t)
}

function E(e, t) {
  return (0, o.getMemberSupplementalV2)(e, t)
}

function h(e) {
  let t = (0, u.canAccessMemberSafetyPage)(e),
    n = l.default.getGuild(e);
  return !!t && null != n && (n.hasFeature(s.GuildFeatures.COMMUNITY) || n.hasFeature(s.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY) ? ((0, r.transitionTo)(s.Routes.CHANNEL(e, a.StaticChannelRoute.MEMBER_SAFETY)), !0) : (i.default.open(n.id, s.GuildSettingsSections.MEMBERS), !0))
}