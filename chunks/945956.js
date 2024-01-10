            "use strict";
            let i, r;
            n.r(t), n.d(t, {
                default: function() {
                    return y
                }
            }), n("70102"), n("808653");
            var s = n("446674"),
                a = n("913144"),
                o = n("422791"),
                l = n("241718"),
                u = n("733589"),
                c = n("76393"),
                d = n("122530"),
                f = n("271938"),
                E = n("316133"),
                h = n("49111"),
                p = n("353927");
            let _ = null,
                S = null,
                m = null,
                T = null,
                g = !1,
                I = !1;

            function C(e, t) {
                if (null == r) throw Error("Creating RTCConnection without session.");
                let i = f.default.getId(),
                    s = n("997722").default,
                    u = new s({
                        userId: i,
                        sessionId: r,
                        guildId: e,
                        channelId: t
                    });
                return u.on(o.RTCConnectionEvent.State, (e, t, n) => {
                    a.default.wait(() => a.default.dispatch({
                        type: "RTC_CONNECTION_STATE",
                        state: e,
                        ...t,
                        ...n
                    }))
                }), u.on(o.RTCConnectionEvent.Video, (e, t, n, i, r) => {
                    a.default.wait(() => a.default.dispatch({
                        type: "RTC_CONNECTION_VIDEO",
                        guildId: e,
                        channelId: t,
                        userId: n,
                        streamId: i,
                        rtcServerId: r,
                        context: p.MediaEngineContextTypes.DEFAULT
                    }))
                }), u.on(o.RTCConnectionEvent.Ping, (e, t) => {
                    a.default.wait(() => a.default.dispatch({
                        type: "RTC_CONNECTION_PING",
                        pings: e,
                        quality: t
                    }))
                }), u.on(o.RTCConnectionEvent.OutboundLossRate, e => {
                    a.default.wait(() => a.default.dispatch({
                        type: "RTC_CONNECTION_LOSS_RATE",
                        lossRate: e
                    }))
                }), u.on(o.RTCConnectionEvent.Speaking, (e, t) => {
                    null == m || m.setSpeaking(e, t)
                }), u.on(o.RTCConnectionEvent.Flags, (e, t) => {
                    a.default.wait(() => {
                        a.default.dispatch({
                            type: "RTC_CONNECTION_FLAGS",
                            flags: t,
                            userId: e,
                            guildId: u.guildId,
                            channelId: u.channelId,
                            context: u.context
                        })
                    })
                }), u.on(o.RTCConnectionEvent.Platform, (e, t, n) => {
                    a.default.wait(() => {
                        a.default.dispatch({
                            type: "RTC_CONNECTION_PLATFORM",
                            platform: t,
                            userId: e,
                            channelId: n
                        })
                    })
                }), m = new l.default(f.default.getId(), t), T = null, g = !1, I = !1, u
            }

            function v() {
                if (null == i) return !1;
                T = i.getDuration(), i.destroy(), i = null, m = null
            }

            function A() {
                _ = null
            }

            function R(e) {
                let {
                    channel: t
                } = e;
                if (null == i || i.channelId !== t.id) return !1;
                v()
            }

            function N() {
                return !0
            }
            class O extends s.default.Store {
                initialize() {
                    this.waitFor(E.default), (0, d.setVideoToggleAnalyticsParams)(this.getRTCConnectionId, this.getMediaSessionId)
                }
                getRTCConnection() {
                    return i
                }
                getState() {
                    return null != i ? i.state : h.RTCConnectionStates.DISCONNECTED
                }
                isConnected() {
                    return this.getState() === h.RTCConnectionStates.RTC_CONNECTED
                }
                isDisconnected() {
                    return this.getState() === h.RTCConnectionStates.DISCONNECTED
                }
                getRemoteDisconnectVoiceChannelId() {
                    return _
                }
                getLastSessionVoiceChannelId() {
                    return S
                }
                setLastSessionVoiceChannelId(e) {
                    S = e
                }
                getGuildId() {
                    return null == i ? void 0 : i.guildId
                }
                getChannelId() {
                    return null == i ? void 0 : i.channelId
                }
                getHostname() {
                    return null != i ? i.hostname : ""
                }
                getQuality() {
                    return null != i ? i.quality : h.RTCConnectionQuality.UNKNOWN
                }
                getPings() {
                    return null != i ? i.getPings() : []
                }
                getAveragePing() {
                    return null != i ? null == i ? void 0 : i.getAveragePing() : 0
                }
                getLastPing() {
                    return null == i ? void 0 : i.getLastPing()
                }
                getOutboundLossRate() {
                    return null == i ? void 0 : i.getOutboundLossRate()
                }
                getMediaSessionId() {
                    return null == i ? void 0 : i.getMediaSessionId()
                }
                getRTCConnectionId() {
                    return null == i ? void 0 : i.getRTCConnectionId()
                }
                getDuration() {
                    var e;
                    return null !== (e = null == i ? void 0 : i.getDuration()) && void 0 !== e ? e : T
                }
                getPacketStats() {
                    return null == i ? void 0 : i.getPacketStats()
                }
                getVoiceStateStats() {
                    return null == m ? void 0 : m.getStats()
                }
                getWasEverMultiParticipant() {
                    return g
                }
                getWasEverRtcConnected() {
                    return I
                }
            }
            O.displayName = "RTCConnectionStore";
            let D = new O(a.default, __OVERLAY__ ? {} : {
                CONNECTION_OPEN: function(e) {
                    return r = e.sessionId, _ = null, S = null, v(), !1
                },
                CONNECTION_CLOSED: function() {
                    r = null, _ = null, S = null, v()
                },
                RTC_CONNECTION_STATE: function(e) {
                    return e.state === h.RTCConnectionStates.RTC_CONNECTED && (I = !0), !0
                },
                RTC_CONNECTION_PING: N,
                RTC_CONNECTION_LOSS_RATE: N,
                RTC_CONNECTION_UPDATE_ID: function(e) {
                    return e.connection === i
                },
                VOICE_STATE_UPDATES: function(e) {
                    let {
                        voiceStates: t
                    } = e;
                    return t.reduce((e, t) => {
                        var n, s, a;
                        if (null == m || m.updateVoiceStates(t.userId, t.channelId), g = g || (null !== (n = null == m ? void 0 : m.getStats().max_voice_state_count) && void 0 !== n ? n : 0) > 1, f.default.getId() !== t.userId) return !1;
                        if (null != i) {
                            if (t.sessionId === r) null != t.guildId && t.guildId === i.guildId || null == t.guildId && t.channelId === i.channelId ? null == t.channelId ? v() : i.channelId = t.channelId : (t.guildId !== i.guildId && null == t.channelId || v(), null != t.channelId && (_ = null, S = null, i = C(t.guildId, t.channelId), g = (null !== (s = null == m ? void 0 : m.getStats().max_voice_state_count) && void 0 !== s ? s : 0) > 1));
                            else if (t.guildId === i.guildId) {
                                let e = null != c.default.getAwaitingRemoteSessionInfo() && null != c.default.getRemoteSessionId();
                                !e && (_ = i.channelId), v()
                            }
                        } else {
                            if (t.sessionId !== r || null == t.channelId) return e;
                            _ = null, S = null, i = C(t.guildId, t.channelId), g = (null !== (a = null == m ? void 0 : m.getStats().max_voice_state_count) && void 0 !== a ? a : 0) > 1
                        }
                        return !0
                    }, !1)
                },
                VOICE_CHANNEL_SELECT: function(e) {
                    let {
                        channelId: t
                    } = e;
                    if (null == i || null != t && i.channelId === t) return !1;
                    v()
                },
                VOICE_SERVER_UPDATE: function(e) {
                    if (null == i || null != e.guildId && e.guildId !== i.guildId || null != e.channelId && e.channelId !== i.channelId) return !1;
                    i.connect(e.endpoint, e.token)
                },
                CLEAR_REMOTE_DISCONNECT_VOICE_CHANNEL_ID: A,
                REMOTE_SESSION_CONNECT: A,
                CLEAR_LAST_SESSION_VOICE_CHANNEL_ID: function() {
                    S = null
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    if (null == i || i.guildId !== t.id) return !1;
                    v()
                },
                CHANNEL_DELETE: R,
                THREAD_DELETE: R,
                CALL_DELETE: function(e) {
                    let {
                        channelId: t
                    } = e;
                    if (null == i || i.channelId !== t) return !1;
                    v()
                },
                APP_STATE_UPDATE: function(e) {
                    if (null != i) {
                        let t = e.state === h.AppStates.BACKGROUND,
                            n = u.default.isEnabled();
                        i.setAppBackgrounded(t, n)
                    }
                    return e.state === h.AppStates.ACTIVE && null != i && i.resetBackoff("App state is active"), !1
                },
                RTC_LOG_MARKER: function(e) {
                    if (null == i) {
                        console.warn("handleRtcLogMarker: Unexpected state, no rtcConnection.");
                        return
                    }
                    i.setRtcLogMarker(e.marker)
                }
            });
            n.el("599110").then(n.bind(n, "599110")).then(e => {
                let {
                    addExtraAnalyticsDecorator: t
                } = e;
                t(e => {
                    e.client_rtc_state = D.getState()
                })
            });
            var y = D