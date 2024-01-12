            "use strict";
            n.r(t), n.d(t, {
                isCustomBackgroundOption: function() {
                    return l
                },
                isDefaultBackgroundOption: function() {
                    return f
                },
                getEffectAnalyticsType: function() {
                    return c
                },
                getEffectDetailAnalyticsName: function() {
                    return g
                },
                trackBackgroundOptionUpdated: function() {
                    return m
                },
                trackBackgroundOptionAdded: function() {
                    return h
                },
                trackBackgroundOptionDeleted: function() {
                    return v
                },
                getVideoBackgroundProtoFromOption: function() {
                    return E
                },
                getVideoBackgroundOptionFromProto: function() {
                    return p
                }
            });
            var s = n("716241"),
                i = n("42203"),
                r = n("945956"),
                a = n("599110"),
                o = n("315102"),
                d = n("917219"),
                u = n("49111");

            function l(e) {
                return null != e && "object" == typeof e && "id" in e && e.type === d.VideoFilterType.BACKGROUND
            }

            function f(e) {
                return "number" == typeof e && e in d.DefaultVideoBackground
            }

            function _(e) {
                return f(e) ? d.ANIMATED_DEFAULT_VIDEO_BACKGROUNDS.includes(e) : !!l(e) && ((0, o.isAnimatedIconHash)(e.asset) || (0, o.isVideoAssetHash)(e.asset))
            }

            function c(e) {
                return null != e ? "Video Background" : "None"
            }

            function g(e) {
                if (null == e) return "None";
                if (l(e)) return "Custom";
                if ("blur" === e) return "Blur";
                else return "Preset - ".concat(function(e) {
                    switch (e) {
                        case d.DefaultVideoBackground.OPTION_1:
                            return "Cybercity";
                        case d.DefaultVideoBackground.OPTION_2:
                            return "Discord the Movie";
                        case d.DefaultVideoBackground.OPTION_3:
                            return "Wumpus Vacation";
                        case d.DefaultVideoBackground.OPTION_4:
                            return "Vaporwave";
                        case d.DefaultVideoBackground.OPTION_7:
                            return "Capernite Day";
                        case d.DefaultVideoBackground.OPTION_8:
                            return "Capernite Night";
                        case d.DefaultVideoBackground.OPTION_9:
                            return "Hacker Den";
                        case d.DefaultVideoBackground.OPTION_10:
                            return "Wumpice"
                    }
                }(e))
            }

            function m(e, t, n) {
                let o = r.default.getGuildId(),
                    d = r.default.getChannelId(),
                    l = i.default.getChannel(d),
                    f = (0, s.getVoiceStateMetadata)(o, d, !0);
                a.default.track(u.AnalyticEvents.VIDEO_EFFECT_UPDATED, {
                    location: t,
                    effect_type: c(e),
                    effect_detail: g(e),
                    effect_state: n,
                    channel_id: d,
                    channel_type: null == l ? void 0 : l.type,
                    guild_id: o,
                    voice_state_count: f.voice_state_count,
                    video_stream_count: f.video_stream_count,
                    media_session_id: r.default.getMediaSessionId(),
                    rtc_connection_id: r.default.getRTCConnectionId(),
                    is_animated: _(e)
                })
            }

            function h(e, t, n) {
                a.default.track(u.AnalyticEvents.VIDEO_BACKGROUND_ADDED, {
                    is_animated: _(e),
                    is_video: t,
                    is_from_tenor: n
                })
            }

            function v(e) {
                a.default.track(u.AnalyticEvents.VIDEO_BACKGROUND_DELETED, {
                    is_animated: _(e)
                })
            }

            function E(e) {
                if (null == e) return {
                    oneofKind: void 0
                };
                if (l(e)) return {
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

            function p(e, t) {
                if (null == e || void 0 === e.oneofKind) return null;
                switch (e.oneofKind) {
                    case "customAsset":
                        return {
                            type: d.VideoFilterType.BACKGROUND, id: e.customAsset.id, user_id: t, asset: e.customAsset.assetHash
                        };
                    case "blur":
                        return e.blur.useBlur ? "blur" : null;
                    case "presetOption":
                        return e.presetOption
                }
            }