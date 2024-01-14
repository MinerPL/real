"use strict";
n.r(t), n.d(t, {
  shouldShowGuildOnboardingUpsell: function() {
    return E
  },
  dismissedGuildOnboardingUpsell: function() {
    return h
  }
}), n("222007");
var i = n("866227"),
  a = n.n(i),
  l = n("151426"),
  s = n("801340"),
  u = n("10641"),
  d = n("872173"),
  r = n("374363"),
  o = n("305961"),
  c = n("696326"),
  f = n("380710"),
  p = n("49111"),
  m = n("994428");
let _ = [l.DismissibleContent.GUILD_ONBOARDING_UPSELL_MODAL_V2, l.DismissibleContent.GUILD_ONBOARDING_UPSELL_CHANNEL_NOTICE, l.DismissibleContent.GUILD_ONBOARDING_UPSELL_NAGBAR],
  g = [0, 1, 7];

function E(e, t) {
  var n;
  let i = o.default.getGuilds(),
    l = Object.entries(i).some(e => {
      let [t, n] = e, i = (0, f.isGuildOnboardingSettingsAvailable)(t), a = n.hasFeature(p.GuildFeatures.GUILD_ONBOARDING_EVER_ENABLED);
      return i && a
    });
  if (l || !(0, f.isGuildOnboardingSettingsAvailable)(e)) return !1;
  let d = null === (n = r.default.settings.userContent) || void 0 === n ? void 0 : n.guildOnboardingUpsellDismissedAt,
    m = null != d ? s.Timestamp.toDate(d) : void 0,
    E = null != m ? a().diff(m, "days") : null,
    h = _.indexOf(t);
  if (-1 === h) return !1;
  let S = null == E || E > g[h];
  if (!S) return !1;
  let v = _.find(e => !(0, u.isDismissibleContentDismissed)(e)) === t;
  if (!v) return !1;
  let {
    showLifecycleUpsells: I
  } = c.default.getCurrentConfig({
    guildId: e,
    location: "7f5b67_1"
  }, {
    disable: l || !(0, f.isGuildOnboardingSettingsAvailable)(e),
    autoTrackExposure: !0
  });
  return I
}

function h(e, t) {
  let n = s.Timestamp.now();
  d.PreloadedUserSettingsActionCreators.updateAsync("userContent", e => {
    e.guildOnboardingUpsellDismissedAt = n
  }, d.UserSettingsDelay.INFREQUENT_USER_ACTION), null != t && (0, u.markDismissibleContentAsDismissed)(t, {
    forceTrack: !0,
    dismissAction: m.ContentDismissActionType.AUTO,
    guildId: e
  })
}