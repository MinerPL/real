"use strict";
s.r(t), s.d(t, {
  default: function() {
    return i
  },
  isOnboardingWizardCompleted: function() {
    return r
  }
});
var a = s("446674"),
  n = s("305961"),
  l = s("49111");

function i(e) {
  return (0, a.useStateFromStores)([n.default], () => {
    let t = n.default.getGuild(e);
    return null != t && t.hasFeature(l.GuildFeatures.GUILD_ONBOARDING_EVER_ENABLED)
  })
}

function r(e) {
  let t = n.default.getGuild(e);
  return null != t && t.hasFeature(l.GuildFeatures.GUILD_ONBOARDING_EVER_ENABLED)
}