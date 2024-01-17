"use strict";
t.r(n), t.d(n, {
  default: function() {
    return c
  }
});
var u = t("42203"),
  l = t("945956"),
  i = t("568307"),
  o = t("18494"),
  a = t("599110"),
  d = t("846325"),
  r = t("49111"),
  s = t("646718");

function c(e, n, t, c) {
  var _, f, E;
  let S = u.default.getChannel(o.default.getVoiceChannelId()),
    C = null == S ? void 0 : S.getGuildId(),
    y = l.default.getMediaSessionId(),
    m = l.default.getRTCConnectionId(),
    A = null === (_ = i.default.getCurrentGameForAnalytics()) || void 0 === _ ? void 0 : _.name,
    g = C !== t.guildId && t.guildId !== d.DEFAULT_SOUND_GUILD_ID;
  let U = (f = t, E = g, f.guildId === d.DEFAULT_SOUND_GUILD_ID ? "default" : E ? "custom-external" : "custom");
  a.default.track(r.AnalyticEvents.PREMIUM_FEATURE_USAGE, {
    feature_name: s.AnalyticsPremiumFeatureNames.SOUNDBOARD_PLAY,
    feature_tier: g ? s.AnalyticsPremiumFeatureTiers.PREMIUM_STANDARD : s.AnalyticsPremiumFeatureTiers.FREE,
    guild_id: C,
    location_stack: e,
    rtc_connection_id: m,
    media_session_id: y,
    in_overlay: n,
    application_name: A,
    emoji_count: null != t.emojiId || null != t.emojiName ? 1 : 0,
    feature_selection: U,
    feature_selection_id: t.soundId,
    sound_type: c,
    is_broadcast: null != S && S.isBroadcastChannel()
  })
}