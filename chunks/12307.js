            "use strict";
            n.r(t), n.d(t, {
                isPremiumResolution: function() {
                    return _
                },
                isPremiumFPS: function() {
                    return E
                },
                getResolutionText: function() {
                    return h
                },
                getFPSText: function() {
                    return p
                },
                getMaxQuality: function() {
                    return T
                },
                trackStreamSettingsUpdate: function() {
                    return C
                }
            });
            var i = n("305961"),
                a = n("945956"),
                l = n("697218"),
                s = n("599110"),
                r = n("49111"),
                u = n("686298"),
                o = n("646718"),
                d = n("353927"),
                c = n("782340");

            function _(e) {
                if (null == e) return;
                let t = e.maxResolution.type === d.ResolutionTypes.SOURCE ? u.ApplicationStreamResolutions.RESOLUTION_SOURCE : e.maxResolution.height,
                    n = (0, u.getApplicationResolution)(t),
                    i = (0, u.getApplicationFramerate)(e.maxFrameRate);
                return i !== u.ApplicationStreamFPS.FPS_5 && null == u.ApplicationStreamSettingRequirements.find(e => e.resolution === n && e.fps !== u.ApplicationStreamFPS.FPS_5 && !f(e))
            }

            function E(e) {
                if (null == e) return;
                let t = (0, u.getApplicationFramerate)(e.maxFrameRate);
                return null == u.ApplicationStreamSettingRequirements.find(e => e.fps === t && !f(e))
            }

            function f(e) {
                return null != e.quality || null != e.guildPremiumTier
            }

            function h(e) {
                return e.type === d.ResolutionTypes.SOURCE ? c.default.Messages.SCREENSHARE_SOURCE : c.default.Messages.SCREENSHARE_RESOLUTION_ABBREVIATED.format({
                    resolution: e.height
                })
            }

            function p(e) {
                return c.default.Messages.SCREENSHARE_FPS_ABBREVIATED.format({
                    fps: e
                })
            }

            function T(e) {
                return null == e.maxResolution || null == e.maxFrameRate ? null : {
                    maxFrameRate: e.maxFrameRate,
                    maxResolution: e.maxResolution
                }
            }

            function C(e, t, n) {
                var d, c, _;
                let E = (d = e, c = t, _ = n, u.ApplicationStreamSettingRequirements.find(e => (null == e.preset || e.preset === d) && e.resolution === c && e.fps === _)),
                    f = l.default.getCurrentUser(),
                    h = a.default.getGuildId(),
                    p = null != h ? i.default.getGuild(h) : null;
                s.default.track(r.AnalyticEvents.STREAM_SETTINGS_UPDATE, {
                    user_premium_tier: null == f ? void 0 : f.premiumType,
                    guild_premium_tier: null == p ? void 0 : p.premiumTier,
                    stream_quality_user_premium_tier: (null == E ? void 0 : E.quality) != null ? o.StreamQualitiesToPremiumType[E.quality] : null,
                    stream_quality_guild_premium_tier: null == E ? void 0 : E.guildPremiumTier,
                    stream_quality_preset: e,
                    stream_quality_resolution: t,
                    stream_quality_frame_rate: n
                })
            }