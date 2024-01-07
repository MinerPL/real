            "use strict";
            n.r(e), n.d(e, {
                isCustomBackgroundOption: function() {
                    return l
                },
                isDefaultBackgroundOption: function() {
                    return c
                },
                getEffectAnalyticsType: function() {
                    return f
                },
                getEffectDetailAnalyticsName: function() {
                    return E
                },
                trackBackgroundOptionUpdated: function() {
                    return p
                },
                trackBackgroundOptionAdded: function() {
                    return A
                },
                trackBackgroundOptionDeleted: function() {
                    return O
                },
                getVideoBackgroundProtoFromOption: function() {
                    return g
                },
                getVideoBackgroundOptionFromProto: function() {
                    return D
                }
            });
            var i = n("716241"),
                u = n("42203"),
                r = n("945956"),
                o = n("599110"),
                a = n("315102"),
                s = n("917219"),
                d = n("49111");

            function l(t) {
                return null != t && "object" == typeof t && "id" in t && t.type === s.VideoFilterType.BACKGROUND
            }

            function c(t) {
                return "number" == typeof t && t in s.DefaultVideoBackground
            }

            function _(t) {
                return c(t) ? s.ANIMATED_DEFAULT_VIDEO_BACKGROUNDS.includes(t) : !!l(t) && ((0, a.isAnimatedIconHash)(t.asset) || (0, a.isVideoAssetHash)(t.asset))
            }

            function f(t) {
                return null != t ? "Video Background" : "None"
            }

            function E(t) {
                if (null == t) return "None";
                if (l(t)) return "Custom";
                if ("blur" === t) return "Blur";
                else return "Preset - ".concat(function(t) {
                    switch (t) {
                        case s.DefaultVideoBackground.OPTION_1:
                            return "Cybercity";
                        case s.DefaultVideoBackground.OPTION_2:
                            return "Discord the Movie";
                        case s.DefaultVideoBackground.OPTION_3:
                            return "Wumpus Vacation";
                        case s.DefaultVideoBackground.OPTION_4:
                            return "Vaporwave";
                        case s.DefaultVideoBackground.OPTION_7:
                            return "Capernite Day";
                        case s.DefaultVideoBackground.OPTION_8:
                            return "Capernite Night";
                        case s.DefaultVideoBackground.OPTION_9:
                            return "Hacker Den";
                        case s.DefaultVideoBackground.OPTION_10:
                            return "Wumpice"
                    }
                }(t))
            }

            function p(t, e, n) {
                let a = r.default.getGuildId(),
                    s = r.default.getChannelId(),
                    l = u.default.getChannel(s),
                    c = (0, i.getVoiceStateMetadata)(a, s, !0);
                o.default.track(d.AnalyticEvents.VIDEO_EFFECT_UPDATED, {
                    location: e,
                    effect_type: f(t),
                    effect_detail: E(t),
                    effect_state: n,
                    channel_id: s,
                    channel_type: null == l ? void 0 : l.type,
                    guild_id: a,
                    voice_state_count: c.voice_state_count,
                    video_stream_count: c.video_stream_count,
                    media_session_id: r.default.getMediaSessionId(),
                    rtc_connection_id: r.default.getRTCConnectionId(),
                    is_animated: _(t)
                })
            }

            function A(t, e, n) {
                o.default.track(d.AnalyticEvents.VIDEO_BACKGROUND_ADDED, {
                    is_animated: _(t),
                    is_video: e,
                    is_from_tenor: n
                })
            }

            function O(t) {
                o.default.track(d.AnalyticEvents.VIDEO_BACKGROUND_DELETED, {
                    is_animated: _(t)
                })
            }

            function g(t) {
                if (null == t) return {
                    oneofKind: void 0
                };
                if (l(t)) return {
                    oneofKind: "customAsset",
                    customAsset: {
                        id: t.id,
                        assetHash: t.asset
                    }
                };
                if ("blur" === t) return {
                    oneofKind: "blur",
                    blur: {
                        useBlur: !0
                    }
                };
                else return {
                    oneofKind: "presetOption",
                    presetOption: t
                }
            }

            function D(t, e) {
                if (null == t || void 0 === t.oneofKind) return null;
                switch (t.oneofKind) {
                    case "customAsset":
                        return {
                            type: s.VideoFilterType.BACKGROUND, id: t.customAsset.id, user_id: e, asset: t.customAsset.assetHash
                        };
                    case "blur":
                        return t.blur.useBlur ? "blur" : null;
                    case "presetOption":
                        return t.presetOption
                }
            }