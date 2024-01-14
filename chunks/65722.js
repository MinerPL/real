"use strict";
n.r(t), n.d(t, {
  GuildRoleSubscriptionSettingsVisibility: function() {
    return i
  },
  canSeeGuildRoleSubscriptionSettings: function() {
    return E
  },
  useGuildRoleSubscriptionSettingsVisibility: function() {
    return _
  },
  useCanManageGuildRoleSubscriptions: function() {
    return p
  },
  canManageGuildRoleSubscriptions: function() {
    return h
  }
});
var l, i, r = n("446674"),
  s = n("7331"),
  a = n("465869"),
  o = n("957255"),
  u = n("697218"),
  d = n("808388"),
  c = n("49111");
(l = i || (i = {}))[l.NONE = 0] = "NONE", l[l.WAITLIST_ONLY = 1] = "WAITLIST_ONLY", l[l.NEEDS_COMMUNITY = 2] = "NEEDS_COMMUNITY", l[l.VISIBLE = 3] = "VISIBLE";

function f(e) {
  if (e.guild.hasFeature(c.GuildFeatures.CREATOR_MONETIZABLE_DISABLED)) return 0;
  if (function(e) {
      let {
        guild: t,
        isOwner: n,
        canManageGuildRoleSubscriptions: l,
        isGuildEligibleForRoleSubscriptions: i,
        isExpeditedMonetizationOnboardingGuild: r,
        isUserInCreatorMonetizationEligibleCountry: s,
        shouldRestrictUpdatingRoleSubscriptionSettings: a
      } = e;
      return !!t.hasFeature(c.GuildFeatures.COMMUNITY) && !!l && (!a || !!n) && (!!(t.hasFeature(c.GuildFeatures.CREATOR_MONETIZABLE) || t.hasFeature(c.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL)) || (!!i || !!r) && n && s)
    }(e)) return 3;
  let {
    guild: t,
    isOwner: n,
    isUserInCreatorMonetizationEligibleCountry: l,
    isMonetizationWaitlistEnabledForGuild: i,
    isGuildEligibleForRoleSubscriptions: r,
    isExpeditedMonetizationOnboardingGuild: s
  } = e;
  return n && !l && i ? 1 : n && i && (r || s) && !t.hasFeature(c.GuildFeatures.COMMUNITY) ? 2 : 0
}

function E(e) {
  return 0 !== f(e)
}

function _(e) {
  let t = (0, d.useGuildEligibleForRoleSubscriptions)(null == e ? void 0 : e.id),
    n = (0, s.useIsExpeditedOnboardingGuild)(e),
    l = (0, s.useIsMonetizationWaitlistEnabledForGuild)(null == e ? void 0 : e.id),
    i = p(e),
    o = (0, r.useStateFromStores)([u.default], () => {
      let t = u.default.getCurrentUser();
      return null != t && (null == e ? void 0 : e.isOwner(t)) === !0
    }),
    c = (0, s.useIsUserInCreatorMonetizationEligibleCountry)(),
    {
      shouldRestrictUpdatingCreatorMonetizationSettings: E
    } = (0, a.useShouldRestrictUpdatingCreatorMonetizationSettings)(null == e ? void 0 : e.id);
  return null == e ? 0 : f({
    guild: e,
    isOwner: o,
    canManageGuildRoleSubscriptions: i,
    isGuildEligibleForRoleSubscriptions: t,
    isMonetizationWaitlistEnabledForGuild: l,
    isExpeditedMonetizationOnboardingGuild: n,
    isUserInCreatorMonetizationEligibleCountry: c,
    shouldRestrictUpdatingRoleSubscriptionSettings: E
  })
}

function p(e) {
  let t = (0, r.useStateFromStores)([o.default], () => h(e), [e]);
  return t
}

function h(e) {
  return null != e && o.default.can(c.Permissions.ADMINISTRATOR, e)
}