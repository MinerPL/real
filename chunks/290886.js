"use strict";
n.r(t), n.d(t, {
  useCanSeeOnboardingHome: function() {
    return T
  },
  canSeeOnboardingHome: function() {
    return g
  }
}), n("222007");
var i = n("917351"),
  r = n.n(i),
  s = n("65597"),
  a = n("380710"),
  o = n("38654"),
  l = n("21121"),
  u = n("42203"),
  c = n("26989"),
  d = n("305961"),
  f = n("698882"),
  E = n("233706"),
  h = n("6263"),
  p = n("363176"),
  _ = n("49111"),
  S = n("724210");

function m(e) {
  var t;
  let n = e.id,
    {
      homeSettingsEnabled: i
    } = E.default.getCurrentConfig({
      guildId: n,
      location: "61eef9_1"
    }, {
      autoTrackExposure: !1
    }),
    r = (null !== (t = f.default.getNewMemberActions(n)) && void 0 !== t ? t : []).length > 0,
    s = f.default.getEnabled(n);
  return i && r && e.hasFeature(_.GuildFeatures.COMMUNITY) && !(e.hasFeature(_.GuildFeatures.GUILD_ONBOARDING) && !s)
}

function T(e) {
  let t = (0, s.default)([d.default], () => d.default.getGuild(e)),
    n = (0, s.default)([c.default], () => c.default.getSelfMember(e)),
    {
      showOnboardingHome: i
    } = (0, h.useOnboardingHomeExperiment)(t, n),
    {
      homeSettingsEnabled: l
    } = E.default.useExperiment({
      guildId: e,
      location: "61eef9_2"
    }, {
      autoTrackExposure: !1
    }),
    f = (0, s.default)([o.default], () => o.default.isFullServerPreview(e)),
    T = (0, p.default)(e),
    g = (0, s.default)([u.default], () => u.default.getMutableGuildChannelsForGuild(e));
  if (null == t || __OVERLAY__ || e === _.ME || e === _.FAVORITES) return !1;
  if (f) return m(t);
  let I = l && (0, a.isGuildOnboardingSettingsAvailable)(e) && t.hasFeature(_.GuildFeatures.GUILD_ONBOARDING) && t.hasFeature(_.GuildFeatures.GUILD_SERVER_GUIDE),
    C = r.some(r.values(g), e => e.hasFlag(S.ChannelFlags.IS_GUILD_RESOURCE_CHANNEL));
  return !(!T && !C) && (i && t.hasFeature(_.GuildFeatures.GUILD_ONBOARDING) && t.hasFeature(_.GuildFeatures.GUILD_SERVER_GUIDE) || I) && t.hasFeature(_.GuildFeatures.COMMUNITY)
}

function g(e) {
  let t = d.default.getGuild(e),
    {
      showOnboardingHome: n
    } = h.default.getCurrentConfig({
      location: "61eef9_3"
    }, {
      autoTrackExposure: !1
    }),
    {
      homeSettingsEnabled: i
    } = E.default.getCurrentConfig({
      guildId: e,
      location: "61eef9_4"
    }),
    r = o.default.isFullServerPreview(e);
  if (null == t || __OVERLAY__ || e === _.ME || e === _.FAVORITES || (0, l.isInMainTabsExperiment)()) return !1;
  if (r) return m(t);
  let s = i && (0, a.isGuildOnboardingSettingsAvailable)(e) && t.hasFeature(_.GuildFeatures.GUILD_ONBOARDING) && t.hasFeature(_.GuildFeatures.GUILD_SERVER_GUIDE);
  return (n && t.hasFeature(_.GuildFeatures.GUILD_ONBOARDING) && t.hasFeature(_.GuildFeatures.GUILD_SERVER_GUIDE) || s) && t.hasFeature(_.GuildFeatures.COMMUNITY)
}