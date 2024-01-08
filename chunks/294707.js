            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var a = n("427459"),
                s = n("719923"),
                r = n("646718");

            function i(e, t, n) {
                if (null == e || null == e.quality && null == e.guildPremiumTier) return !0;
                let i = !1;
                return null != e.quality && (e.quality === r.StreamQualities.HIGH_STREAMING_QUALITY ? i = i || s.default.canStreamQuality(s.default.StreamQuality.HIGH, t) : e.quality === r.StreamQualities.MID_STREAMING_QUALITY && (i = i || s.default.canStreamQuality(s.default.StreamQuality.MID, t))), null != e.guildPremiumTier && (i = i || (0, a.isGuildBoostedAtLeast)(n, e.guildPremiumTier)), i
            }