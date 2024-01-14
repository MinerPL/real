"use strict";
i.r(t), i.d(t, {
  default: function() {
    return r
  }
});
var l = i("446674"),
  s = i("760190"),
  u = i("957255"),
  a = i("808388"),
  n = i("49111"),
  d = i("782340"),
  r = {
    title: () => d.default.Messages.GUILD_ROLE_SUBSCRIPTION_WELCOME_TITLE,
    description: () => d.default.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_TEMPLATE_DEEPLINK_MODAL_DESCRIPTION,
    canCreateGuild: !1,
    useIsGuildSupported: () => (0, l.useStateFromStores)([s.default, u.default], () => e => e.hasFeature(n.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED) && !e.hasFeature(n.GuildFeatures.CREATOR_MONETIZABLE_RESTRICTED) && u.default.can(n.Permissions.ADMINISTRATOR, e) && (0, a.isUserEligibleForTierTemplates)() && (0, a.isGuildEligibleForTierTemplates)(e.id), [])
  }