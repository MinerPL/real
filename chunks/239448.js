            "use strict";
            n.r(t), n.d(t, {
                isCustomBackgroundOption: function() {
                    return d
                },
                isDefaultBackgroundOption: function() {
                    return c
                },
                getEffectAnalyticsType: function() {
                    return E
                },
                getEffectDetailAnalyticsName: function() {
                    return f
                },
                trackBackgroundOptionUpdated: function() {
                    return h
                },
                trackBackgroundOptionAdded: function() {
                    return p
                },
                trackBackgroundOptionDeleted: function() {
                    return T
                },
                getVideoBackgroundProtoFromOption: function() {
                    return C
                },
                getVideoBackgroundOptionFromProto: function() {
                    return m
                }
            });
            var i = n("716241"),
                a = n("42203"),
                l = n("945956"),
                s = n("599110"),
                r = n("315102"),
                u = n("917219"),
                o = n("49111");

            function d(e) {
                return null != e && "object" == typeof e && "id" in e && e.type === u.VideoFilterType.BACKGROUND
            }

            function c(e) {
                return "number" == typeof e && e in u.DefaultVideoBackground
            }

            function _(e) {
                return c(e) ? u.ANIMATED_DEFAULT_VIDEO_BACKGROUNDS.includes(e) : !!d(e) && ((0, r.isAnimatedIconHash)(e.asset) || (0, r.isVideoAssetHash)(e.asset))
            }

            function E(e) {
                return null != e ? "Video Background" : "None"
            }

            function f(e) {
                if (null == e) return "None";
                if (d(e)) return "Custom";
                if ("blur" === e) return "Blur";
                else return "Preset - ".concat(function(e) {
                    switch (e) {
                        case u.DefaultVideoBackground.OPTION_1:
                            return "Cybercity";
                        case u.DefaultVideoBackground.OPTION_2:
                            return "Discord the Movie";
                        case u.DefaultVideoBackground.OPTION_3:
                            return "Wumpus Vacation";
                        case u.DefaultVideoBackground.OPTION_4:
                            return "Vaporwave";
                        case u.DefaultVideoBackground.OPTION_7:
                            return "Capernite Day";
                        case u.DefaultVideoBackground.OPTION_8:
                            return "Capernite Night";
                        case u.DefaultVideoBackground.OPTION_9:
                            return "Hacker Den";
                        case u.DefaultVideoBackground.OPTION_10:
                            return "Wumpice"
                    }
                }(e))
            }

            function h(e, t, n) {
                let r = l.default.getGuildId(),
                    u = l.default.getChannelId(),
                    d = a.default.getChannel(u),
                    c = (0, i.getVoiceStateMetadata)(r, u, !0);
                s.default.track(o.AnalyticEvents.VIDEO_EFFECT_UPDATED, {
                    location: t,
                    effect_type: E(e),
                    effect_detail: f(e),
                    effect_state: n,
                    channel_id: u,
                    channel_type: null == d ? void 0 : d.type,
                    guild_id: r,
                    voice_state_count: c.voice_state_count,
                    video_stream_count: c.video_stream_count,
                    media_session_id: l.default.getMediaSessionId(),
                    rtc_connection_id: l.default.getRTCConnectionId(),
                    is_animated: _(e)
                })
            }

            function p(e, t, n) {
                s.default.track(o.AnalyticEvents.VIDEO_BACKGROUND_ADDED, {
                    is_animated: _(e),
                    is_video: t,
                    is_from_tenor: n
                })
            }

            function T(e) {
                s.default.track(o.AnalyticEvents.VIDEO_BACKGROUND_DELETED, {
                    is_animated: _(e)
                })
            }

            function C(e) {
                if (null == e) return {
                    oneofKind: void 0
                };
                if (d(e)) return {
                    oneofKind: "customAsset",
                    customAsset: {
                        id: e.id,
                        assetHash: e.asset
                    }
                };
                if ("blur" === e) return {
                    oneofKind: "blur",
                    blur: {
                        useBlur: !0
                    }
                };
                else return {
                    oneofKind: "presetOption",
                    presetOption: e
                }
            }

            function m(e, t) {
                if (null == e || void 0 === e.oneofKind) return null;
                switch (e.oneofKind) {
                    case "customAsset":
                        return {
                            type: u.VideoFilterType.BACKGROUND, id: e.customAsset.id, user_id: t, asset: e.customAsset.assetHash
                        };
                    case "blur":
                        return e.blur.useBlur ? "blur" : null;
                    case "presetOption":
                        return e.presetOption
                }
            }