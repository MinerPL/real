"use strict";
n.r(t), n.d(t, {
  shouldShowGuildOnboardingUpsell: function() {
    return _
  },
  dismissedGuildOnboardingUpsell: function() {
    return S
  }
}), n("222007");
var i = n("866227"),
  s = n.n(i),
  a = n("151426"),
  l = n("801340"),
  r = n("10641"),
  o = n("872173"),
  u = n("374363"),
  d = n("305961"),
  c = n("696326"),
  f = n("380710"),
  h = n("49111"),
  p = n("994428");
let E = [a.DismissibleContent.GUILD_ONBOARDING_UPSELL_MODAL_V2, a.DismissibleContent.GUILD_ONBOARDING_UPSELL_CHANNEL_NOTICE, a.DismissibleContent.GUILD_ONBOARDING_UPSELL_NAGBAR],
  T = [0, 1, 7];

function _(e, t) {
  var n;
  let i = d.default.getGuilds(),
    a = Object.entries(i).some(e => {
      let [t, n] = e, i = (0, f.isGuildOnboardingSettingsAvailable)(t), s = n.hasFeature(h.GuildFeatures.GUILD_ONBOARDING_EVER_ENABLED);
      return i && s
    });
  if (a || !(0, f.isGuildOnboardingSettingsAvailable)(e)) return !1;
  let o = null === (n = u.default.settings.userContent) || void 0 === n ? void 0 : n.guildOnboardingUpsellDismissedAt,
    p = null != o ? l.Timestamp.toDate(o) : void 0,
    _ = null != p ? s().diff(p, "days") : null,
    S = E.indexOf(t);
  if (-1 === S) return !1;
  let I = null == _ || _ > T[S];
  if (!I) return !1;
  let g = E.find(e => !(0, r.isDismissibleContentDismissed)(e)) === t;
  if (!g) return !1;
  let {
    showLifecycleUpsells: A
  } = c.default.getCurrentConfig({
    guildId: e,
    location: "7f5b67_1"
  }, {
    disable: a || !(0, f.isGuildOnboardingSettingsAvailable)(e),
    autoTrackExposure: !0
  });
  return A
}

function S(e, t) {
  let n = l.Timestamp.now();
  o.PreloadedUserSettingsActionCreators.updateAsync("userContent", e => {
    e.guildOnboardingUpsellDismissedAt = n
  }, o.UserSettingsDelay.INFREQUENT_USER_ACTION), null != t && (0, r.markDismissibleContentAsDismissed)(t, {
    forceTrack: !0,
    dismissAction: p.ContentDismissActionType.AUTO,
    guildId: e
  })
}