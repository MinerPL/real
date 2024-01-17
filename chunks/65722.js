"use strict";
n.r(t), n.d(t, {
  GuildRoleSubscriptionSettingsVisibility: function() {
    return r
  },
  canSeeGuildRoleSubscriptionSettings: function() {
    return S
  },
  useGuildRoleSubscriptionSettingsVisibility: function() {
    return E
  },
  useCanManageGuildRoleSubscriptions: function() {
    return h
  },
  canManageGuildRoleSubscriptions: function() {
    return g
  }
});
var i, r, l = n("446674"),
  u = n("7331"),
  o = n("465869"),
  s = n("957255"),
  a = n("697218"),
  d = n("808388"),
  c = n("49111");
(i = r || (r = {}))[i.NONE = 0] = "NONE", i[i.WAITLIST_ONLY = 1] = "WAITLIST_ONLY", i[i.NEEDS_COMMUNITY = 2] = "NEEDS_COMMUNITY", i[i.VISIBLE = 3] = "VISIBLE";

function f(e) {
  if (e.guild.hasFeature(c.GuildFeatures.CREATOR_MONETIZABLE_DISABLED)) return 0;
  if (function(e) {
      let {
        guild: t,
        isOwner: n,
        canManageGuildRoleSubscriptions: i,
        isGuildEligibleForRoleSubscriptions: r,
        isExpeditedMonetizationOnboardingGuild: l,
        isUserInCreatorMonetizationEligibleCountry: u,
        shouldRestrictUpdatingRoleSubscriptionSettings: o
      } = e;
      return !!t.hasFeature(c.GuildFeatures.COMMUNITY) && !!i && (!o || !!n) && (!!(t.hasFeature(c.GuildFeatures.CREATOR_MONETIZABLE) || t.hasFeature(c.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL)) || (!!r || !!l) && n && u)
    }(e)) return 3;
  let {
    guild: t,
    isOwner: n,
    isUserInCreatorMonetizationEligibleCountry: i,
    isMonetizationWaitlistEnabledForGuild: r,
    isGuildEligibleForRoleSubscriptions: l,
    isExpeditedMonetizationOnboardingGuild: u
  } = e;
  return n && !i && r ? 1 : n && r && (l || u) && !t.hasFeature(c.GuildFeatures.COMMUNITY) ? 2 : 0
}

function S(e) {
  return 0 !== f(e)
}

function E(e) {
  let t = (0, d.useGuildEligibleForRoleSubscriptions)(null == e ? void 0 : e.id),
    n = (0, u.useIsExpeditedOnboardingGuild)(e),
    i = (0, u.useIsMonetizationWaitlistEnabledForGuild)(null == e ? void 0 : e.id),
    r = h(e),
    s = (0, l.useStateFromStores)([a.default], () => {
      let t = a.default.getCurrentUser();
      return null != t && (null == e ? void 0 : e.isOwner(t)) === !0
    }),
    c = (0, u.useIsUserInCreatorMonetizationEligibleCountry)(),
    {
      shouldRestrictUpdatingCreatorMonetizationSettings: S
    } = (0, o.useShouldRestrictUpdatingCreatorMonetizationSettings)(null == e ? void 0 : e.id);
  return null == e ? 0 : f({
    guild: e,
    isOwner: s,
    canManageGuildRoleSubscriptions: r,
    isGuildEligibleForRoleSubscriptions: t,
    isMonetizationWaitlistEnabledForGuild: i,
    isExpeditedMonetizationOnboardingGuild: n,
    isUserInCreatorMonetizationEligibleCountry: c,
    shouldRestrictUpdatingRoleSubscriptionSettings: S
  })
}

function h(e) {
  let t = (0, l.useStateFromStores)([s.default], () => g(e), [e]);
  return t
}

function g(e) {
  return null != e && s.default.can(c.Permissions.ADMINISTRATOR, e)
}