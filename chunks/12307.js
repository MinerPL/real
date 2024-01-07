            "use strict";
            n.r(e), n.d(e, {
                isPremiumResolution: function() {
                    return _
                },
                isPremiumFPS: function() {
                    return f
                },
                getResolutionText: function() {
                    return p
                },
                getFPSText: function() {
                    return A
                },
                getMaxQuality: function() {
                    return O
                },
                trackStreamSettingsUpdate: function() {
                    return g
                }
            });
            var i = n("305961"),
                u = n("945956"),
                r = n("697218"),
                o = n("599110"),
                a = n("49111"),
                s = n("686298"),
                d = n("646718"),
                l = n("353927"),
                c = n("782340");

            function _(t) {
                if (null == t) return;
                let e = t.maxResolution.type === l.ResolutionTypes.SOURCE ? s.ApplicationStreamResolutions.RESOLUTION_SOURCE : t.maxResolution.height,
                    n = (0, s.getApplicationResolution)(e),
                    i = (0, s.getApplicationFramerate)(t.maxFrameRate);
                return i !== s.ApplicationStreamFPS.FPS_5 && null == s.ApplicationStreamSettingRequirements.find(t => t.resolution === n && t.fps !== s.ApplicationStreamFPS.FPS_5 && !E(t))
            }

            function f(t) {
                if (null == t) return;
                let e = (0, s.getApplicationFramerate)(t.maxFrameRate);
                return null == s.ApplicationStreamSettingRequirements.find(t => t.fps === e && !E(t))
            }

            function E(t) {
                return null != t.quality || null != t.guildPremiumTier
            }

            function p(t) {
                return t.type === l.ResolutionTypes.SOURCE ? c.default.Messages.SCREENSHARE_SOURCE : c.default.Messages.SCREENSHARE_RESOLUTION_ABBREVIATED.format({
                    resolution: t.height
                })
            }

            function A(t) {
                return c.default.Messages.SCREENSHARE_FPS_ABBREVIATED.format({
                    fps: t
                })
            }

            function O(t) {
                return null == t.maxResolution || null == t.maxFrameRate ? null : {
                    maxFrameRate: t.maxFrameRate,
                    maxResolution: t.maxResolution
                }
            }

            function g(t, e, n) {
                var l, c, _;
                let f = (l = t, c = e, _ = n, s.ApplicationStreamSettingRequirements.find(t => (null == t.preset || t.preset === l) && t.resolution === c && t.fps === _)),
                    E = r.default.getCurrentUser(),
                    p = u.default.getGuildId(),
                    A = null != p ? i.default.getGuild(p) : null;
                o.default.track(a.AnalyticEvents.STREAM_SETTINGS_UPDATE, {
                    user_premium_tier: null == E ? void 0 : E.premiumType,
                    guild_premium_tier: null == A ? void 0 : A.premiumTier,
                    stream_quality_user_premium_tier: (null == f ? void 0 : f.quality) != null ? d.StreamQualitiesToPremiumType[f.quality] : null,
                    stream_quality_guild_premium_tier: null == f ? void 0 : f.guildPremiumTier,
                    stream_quality_preset: t,
                    stream_quality_resolution: e,
                    stream_quality_frame_rate: n
                })
            }