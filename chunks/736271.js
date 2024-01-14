"use strict";
n.r(t), n.d(t, {
  isRestrictedFromShowingGuildPurchaseEntryPoints: function() {
    return o
  },
  shouldHideGuildPurchaseEntryPoints: function() {
    return l
  },
  isRestrictedFromUpdatingCreatorMonetizationSettings: function() {
    return u
  },
  shouldRestrictUpdatingCreatorMonetizationSettings: function() {
    return c
  },
  isRestrictedFromMonetizationReapplication: function() {
    return d
  }
});
var i = n("648825"),
  r = n("305961"),
  s = n("139170"),
  a = n("49111");

function o(e) {
  return null != e && e.includes(s.CreatorMonetizationRestrictions.NEW_PURCHASES_DISABLED)
}

function l(e) {
  var t;
  if (null == e) return !1;
  let n = i.default.getMonetizationRestrictionsFetchState(e),
    s = i.default.getMonetizationRestrictions(e),
    l = r.default.getGuild(e);
  return n === i.FetchState.FETCHED ? o(s) : null === (t = null == l ? void 0 : l.hasFeature(a.GuildFeatures.CREATOR_MONETIZABLE_RESTRICTED)) || void 0 === t || t
}

function u(e) {
  return null != e && e.includes(s.CreatorMonetizationRestrictions.SETTINGS_READ_ONLY)
}

function c(e) {
  var t;
  if (null == e) return !1;
  let n = i.default.getMonetizationRestrictionsFetchState(e),
    s = i.default.getMonetizationRestrictions(e),
    o = r.default.getGuild(e);
  return n === i.FetchState.FETCHED ? u(s) : null === (t = null == o ? void 0 : o.hasFeature(a.GuildFeatures.CREATOR_MONETIZABLE_RESTRICTED)) || void 0 === t || t
}

function d(e) {
  return null != e && e.includes(s.CreatorMonetizationRestrictions.REAPPLICATION_DISABLED)
}