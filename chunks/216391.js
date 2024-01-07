            "use strict";
            let l;
            n.r(e), n.d(e, {
                default: function() {
                    return A
                }
            }), n("70102");
            var u = n("917351"),
                r = n.n(u),
                i = n("446674"),
                a = n("913144"),
                o = n("997722"),
                s = n("422791"),
                d = n("271938"),
                f = n("260320"),
                c = n("42887"),
                E = n("49111");
            let I = {};

            function g() {
                r.forEach(I, (t, e) => {
                    t.destroy(), delete I[e]
                })
            }

            function S(t, e, n) {
                let l = I[t];
                return null != l ? e(l) : n
            }

            function O(t) {
                let {
                    lobbyId: e
                } = t, n = I[e];
                if (null == n) return !1;
                n.destroy(), delete I[e]
            }

            function C() {
                return !0
            }
            class T extends i.default.Store {
                forEach(t) {
                    r.each(I, t)
                }
                getState(t) {
                    return S(t, t => t.state, E.RTCConnectionStates.DISCONNECTED)
                }
                isConnected(t) {
                    return this.getState(t) === E.RTCConnectionStates.RTC_CONNECTED
                }
                isDisconnected(t) {
                    return this.getState(t) === E.RTCConnectionStates.DISCONNECTED
                }
                getHostname(t) {
                    return S(t, t => t.hostname, null)
                }
                getQuality(t) {
                    return S(t, t => t.quality, E.RTCConnectionQuality.UNKNOWN)
                }
                getPings(t) {
                    return S(t, t => t.getPings(), [])
                }
                getAveragePing(t) {
                    return S(t, t => t.getAveragePing(), 0)
                }
                getLastPing(t) {
                    return S(t, t => t.getLastPing(), 0)
                }
                getOutboundLossRate(t) {
                    return S(t, t => t.getOutboundLossRate(), 0)
                }
                getMediaSessionId(t) {
                    return S(t, t => t.getMediaSessionId(), null)
                }
                getRTCConnectionId(t) {
                    return S(t, t => t.getRTCConnectionId(), null)
                }
                getDuration(t) {
                    return S(t, t => t.getDuration(), 0)
                }
            }
            T.displayName = "RTCConnectionStore";
            var A = new T(a.default, c.default.isSupported() ? {
                CONNECTION_OPEN: function(t) {
                    l = t.sessionId, g()
                },
                CONNECTION_CLOSED: function() {
                    l = null, g()
                },
                RTC_CONNECTION_STATE: C,
                RTC_CONNECTION_PING: C,
                RTC_CONNECTION_LOSS_RATE: C,
                RTC_CONNECTION_UPDATE_ID: function(t) {
                    return r.some(I, e => e === t.connection)
                },
                LOBBY_VOICE_STATE_UPDATE: function(t) {
                    if (d.default.getId() !== t.userId || t.sessionId !== l) return !1;
                    let e = I[t.lobbyId];
                    null != e && null == t.channelId ? (e.destroy(), delete I[t.lobbyId]) : null != e ? e.channelId = t.channelId : null != t.channelId && (e = function(t, e) {
                        if (null == l) throw Error("Creating RTCConnection without session.");
                        let n = f.default.getLobby(t);
                        if (null == n) throw Error("Creating RTCConnection without lobby.");
                        let u = n.application_id,
                            r = new o.default({
                                userId: d.default.getId(),
                                sessionId: l,
                                guildId: t,
                                channelId: e,
                                context: u
                            });
                        return r.on(s.RTCConnectionEvent.State, (e, n, l) => {
                            a.default.dispatch({
                                type: "RTC_CONNECTION_STATE",
                                state: e,
                                ...n,
                                ...l,
                                lobbyId: t
                            })
                        }), r.on(s.RTCConnectionEvent.Ping, (e, n) => {
                            a.default.dispatch({
                                type: "RTC_CONNECTION_PING",
                                pings: e,
                                quality: n,
                                lobbyId: t
                            })
                        }), r.on(s.RTCConnectionEvent.OutboundLossRate, e => {
                            a.default.dispatch({
                                type: "RTC_CONNECTION_LOSS_RATE",
                                lossRate: e,
                                lobbyId: t
                            })
                        }), r
                    }(t.lobbyId, t.channelId), I[t.lobbyId] = e)
                },
                LOBBY_VOICE_SERVER_UPDATE: function(t) {
                    let e = I[t.lobbyId];
                    if (null == e) return !1;
                    e.connect(t.endpoint, t.token)
                },
                LOBBY_DELETE: O,
                LOBBY_DISCONNECT: O
            } : {})