            "use strict";
            t.r(n), t.d(n, {
                default: function() {
                    return c
                }
            });
            var l = t("42203"),
                u = t("945956"),
                i = t("568307"),
                o = t("18494"),
                a = t("599110"),
                d = t("846325"),
                r = t("49111"),
                s = t("646718");

            function c(e, n, t, c) {
                var f, _, E;
                let S = l.default.getChannel(o.default.getVoiceChannelId()),
                    C = null == S ? void 0 : S.getGuildId(),
                    y = u.default.getMediaSessionId(),
                    m = u.default.getRTCConnectionId(),
                    A = null === (f = i.default.getCurrentGameForAnalytics()) || void 0 === f ? void 0 : f.name,
                    g = C !== t.guildId && t.guildId !== d.DEFAULT_SOUND_GUILD_ID;
                let I = (_ = t, E = g, _.guildId === d.DEFAULT_SOUND_GUILD_ID ? "default" : E ? "custom-external" : "custom");
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
                    feature_selection: I,
                    feature_selection_id: t.soundId,
                    sound_type: c,
                    is_broadcast: null != S && S.isBroadcastChannel()
                })
            }