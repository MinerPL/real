            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var i = n("913144"),
                a = n("716241"),
                l = n("659558"),
                s = n("870879"),
                r = n("239448"),
                u = n("42203"),
                o = n("42887"),
                d = n("945956"),
                c = n("18494"),
                _ = n("697218");
            let E = (e, t) => ({
                    channel_id: e.id,
                    channel_type: e.type,
                    guild_id: e.getGuildId(),
                    rtc_connection_id: d.default.getRTCConnectionId(),
                    duration: d.default.getDuration(),
                    media_session_id: d.default.getMediaSessionId(),
                    ...(0, a.getVoiceStateMetadata)(d.default.getGuildId(), d.default.getChannelId(), t)
                }),
                f = () => {
                    var e;
                    let t = (0, l.getLastUsedVideoBackgroundOption)(_.default.getCurrentUser());
                    return {
                        video_device_name: null === (e = o.default.getVideoDevices()[o.default.getVideoDeviceId()]) || void 0 === e ? void 0 : e.name,
                        video_hardware_scaling_enabled: o.default.getHardwareH264(),
                        video_effect_type: (0, r.getEffectAnalyticsType)(t),
                        video_effect_detail: (0, r.getEffectDetailAnalyticsName)(t)
                    }
                };

            function h(e, t, n, a) {
                let l = c.default.getVoiceChannelId(),
                    r = u.default.getChannel(l);
                if (null == t && null != l && null != r) {
                    let t = E(r, a);
                    if (e(), s.default.hasUsedBackgroundInCall) {
                        let e = {
                            ...t,
                            ...f()
                        };
                        i.default.dispatch({
                            type: "VIDEO_BACKGROUND_SHOW_FEEDBACK",
                            analyticsData: e
                        })
                    } else i.default.dispatch({
                        type: "VOICE_CHANNEL_SHOW_FEEDBACK",
                        analyticsData: t
                    })
                } else e()
            }