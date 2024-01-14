"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var a = n("446674"),
  l = n("6263"),
  s = n("233069"),
  i = n("42203"),
  r = n("305961"),
  o = n("18494"),
  u = n("49111");

function d(e, t) {
  let n = (0, a.useStateFromStores)([r.default], () => r.default.getGuild(t)),
    d = (0, a.useStateFromStores)([i.default], () => i.default.getChannel(e)),
    c = (0, a.useStateFromStores)([o.default], () => o.default.getChannelId(t)),
    {
      showOnboardingHome: f
    } = l.default.useExperiment({
      location: "52235f_1"
    }, {
      autoTrackExposure: !1
    });
  return e === c && null != d && null != n && d.getGuildId() === n.id && (0, s.isGuildTextChannelType)(d.type) && n.hasFeature(u.GuildFeatures.WELCOME_SCREEN_ENABLED) && n.hasFeature(u.GuildFeatures.COMMUNITY) && (!f || !n.hasFeature(u.GuildFeatures.GUILD_SERVER_GUIDE))
}