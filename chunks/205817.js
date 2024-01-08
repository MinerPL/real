            "use strict";
            let i, a;
            n.r(t), n.d(t, {
                default: function() {
                    return F
                }
            }), n("424973");
            var l = n("627445"),
                s = n.n(l),
                r = n("917351"),
                u = n.n(r),
                o = n("446674"),
                d = n("773364"),
                c = n("913144"),
                _ = n("583702"),
                E = n("374014"),
                f = n("582415"),
                h = n("537429"),
                p = n("773336"),
                T = n("373469"),
                C = n("271938"),
                m = n("42203"),
                S = n("42887"),
                I = n("824563"),
                g = n("945956"),
                A = n("568307"),
                N = n("49111"),
                O = n("353927");
            let R = {},
                y = {},
                v = {},
                M = {},
                D = N.StreamLayouts.THEATRE,
                L = {},
                U = [];

            function P() {
                u.forEach(L, (e, t) => {
                    e.destroy(e.isOwner ? "sender-disconnect" : "receiver-disconnect"), delete L[t]
                })
            }

            function b(e) {
                e.filter(e => {
                    let {
                        connection: t
                    } = e;
                    return t.context === O.MediaEngineContextTypes.STREAM
                }).forEach(e => {
                    let {
                        stats: t
                    } = e;
                    c.default.dispatch({
                        type: "STREAM_STATS_UPDATE",
                        stats: t
                    })
                })
            }

            function G() {
                return !0
            }
            class k extends o.default.Store {
                getActiveStreamKey() {
                    return (0, h.default)(S.default) ? a : null
                }
                getAllActiveStreamKeys() {
                    return Object.keys(L)
                }
                getRTCConnection(e) {
                    return L[e]
                }
                getStatsHistory(e, t, n) {
                    if (!(0, h.default)(S.default) || null == t) return null;
                    if (n) {
                        let n = T.default.getActiveStreamForUser(t, e);
                        if (null == n || 0 === T.default.getViewerIds(n).length) return null
                    }
                    return U.map(e => n ? function(e) {
                        var t, n, i, a, l;
                        let s = e.find(e => "video" === e.type);
                        return null != s && "video" === s.type ? {
                            type: "streamer",
                            packetsSentOrReceived: null !== (n = s.packetsSent) && void 0 !== n ? n : 0,
                            packetsLost: null !== (i = s.packetsLost) && void 0 !== i ? i : 0,
                            frameRate: null !== (a = s.frameRateEncode) && void 0 !== a ? a : 0,
                            resolution: null !== (l = null === (t = s.resolution) || void 0 === t ? void 0 : t.height) && void 0 !== l ? l : 0,
                            bitrate: 0
                        } : null
                    }(e.rtp.outbound) : function(e) {
                        var t, n, i, a, l, s;
                        if (null == e) return null;
                        let r = e.find(e => "video" === e.type);
                        return null != r && "video" === r.type ? {
                            type: "spectator",
                            packetsSentOrReceived: null !== (n = r.packetsReceived) && void 0 !== n ? n : 0,
                            packetsLost: null !== (i = r.packetsLost) && void 0 !== i ? i : 0,
                            frameRate: null !== (a = r.frameRateDecode) && void 0 !== a ? a : 0,
                            bitrate: null !== (l = r.bitrate) && void 0 !== l ? l : 0,
                            resolution: null !== (s = null === (t = r.resolution) || void 0 === t ? void 0 : t.height) && void 0 !== s ? s : 0
                        } : null
                    }(e.rtp.inbound[t]))
                }
                getQuality() {
                    if (!(0, h.default)(S.default)) return N.RTCConnectionQuality.UNKNOWN;
                    let e = this.getActiveStreamKey(),
                        t = null != e ? L[e] : null;
                    return null != t ? t.quality : N.RTCConnectionQuality.UNKNOWN
                }
                getMediaSessionId(e) {
                    if (null == e) return null;
                    let t = L[e];
                    if (null != t) return null != t ? t.getMediaSessionId() : null
                }
                getRtcConnectionId(e) {
                    if (null == e) return null;
                    let t = L[e];
                    if (null != t) return null != t ? t.getRTCConnectionId() : null
                }
                getVideoStats(e) {
                    if (null == e) return null;
                    let t = L[e];
                    return null != t ? t.getVideoStats() : null
                }
                getHostname(e) {
                    if (null == e) return "";
                    let t = L[e];
                    return null != t ? null != t.hostname ? t.hostname : "" : ""
                }
                getRegion(e) {
                    if (null == e) return null;
                    let t = L[e];
                    return null != t ? t.getRegion() : null
                }
                getMaxViewers(e) {
                    if (null == e) return null;
                    let t = L[e];
                    return null != t ? t.getMaxViewers() : null
                }
                getStreamSourceId(e) {
                    return M[e]
                }
            }
            k.displayName = "StreamRTCConnectionStore";
            var F = new k(c.default, !S.default.isSupported() || __OVERLAY__ ? {} : {
                CONNECTION_OPEN: function(e) {
                    i = e.sessionId, a = null, P()
                },
                CONNECTION_CLOSED: function() {
                    i = null, a = null, P()
                },
                RTC_CONNECTION_STATE: G,
                RTC_CONNECTION_PING: G,
                RTC_CONNECTION_LOSS_RATE: G,
                RTC_CONNECTION_UPDATE_ID: function(e) {
                    return u.some(L, t => t === e.connection)
                },
                STREAM_START: function(e) {
                    let {
                        streamType: t,
                        guildId: n,
                        channelId: i,
                        appContext: a,
                        pid: l,
                        sourceId: s
                    } = e, r = (0, E.encodeStreamKey)({
                        streamType: t,
                        guildId: n,
                        channelId: i,
                        ownerId: C.default.getId()
                    });
                    if (R[r] = a, u.forEach(L, e => {
                            let {
                                analyticsContext: t
                            } = e;
                            t.setActionContext(a)
                        }), M[r] = s, v[r] = l, null != l) {
                        let e = A.default.getGameForPID(l);
                        null != e && (y[r] = {
                            name: e.name,
                            id: e.id,
                            exe: e.exeName
                        })
                    }
                },
                STREAM_STOP: function(e) {
                    let {
                        appContext: t,
                        streamKey: n
                    } = e;
                    R[n] = t, u.forEach(L, e => {
                        let {
                            analyticsContext: n
                        } = e;
                        n.setActionContext(t)
                    }), M[n] = null, v[n] = null
                },
                STREAM_CREATE: function(e) {
                    let {
                        streamKey: t,
                        rtcServerId: n,
                        region: l,
                        viewerIds: r
                    } = e;
                    a = t;
                    let u = L[t];
                    if (null == u && null != n) {
                        var o, c, h;
                        null == v[t] && (y[t] = null);
                        let e = (0, E.decodeStreamKey)(t);
                        null == y[t] && null == M[t] && (y[t] = (0, f.getStreamerApplication)(e, I.default));
                        let a = m.default.getChannel(e.channelId),
                            d = null != a && a.isBroadcastChannel(),
                            T = new _.StreamRTCAnalyticsContext({
                                streamRegion: l,
                                streamApplication: y[t],
                                streamSourceType: function(e) {
                                    var t, n, i;
                                    if (null == e) return "unknown";
                                    if (p.isPlatformEmbedded || (null === (t = platform) || void 0 === t ? void 0 : t.name) === "Chrome") {
                                        if (e.startsWith("web-contents-media-stream:")) return "tab";
                                        if (e.startsWith("window:")) return "window";
                                        else if (e.startsWith("screen:")) return "screen"
                                    } else if ((null === (n = platform) || void 0 === n ? void 0 : n.name) === "Firefox") return "" !== e ? "window" : "screen";
                                    else if ((null === (i = platform) || void 0 === i ? void 0 : i.name) === "Safari") return "window";
                                    return "unknown"
                                }(M[t]),
                                actionContext: R[t],
                                numViewers: null != r ? r.length : 0,
                                isBroadcast: d
                            });
                        o = t, c = n, h = T, s(null != i, "Creating RTCConnection without session."), u = new _.default({
                            sessionId: i,
                            streamKey: o,
                            serverId: c,
                            initialLayout: D,
                            analyticsContext: h,
                            isStreamer: null != y[o],
                            parentMediaSessionId: g.default.getMediaSessionId()
                        }), L[t] = u
                    }
                    U = [], S.default.getMediaEngine().on(d.MediaEngineEvent.ConnectionStats, b)
                },
                STREAM_SERVER_UPDATE: function(e) {
                    let t = L[e.streamKey];
                    if (null == t) return !1;
                    t.connect(e.endpoint, e.token)
                },
                STREAM_UPDATE: function(e) {
                    let {
                        streamKey: t,
                        viewerIds: n,
                        paused: i
                    } = e, a = L[t];
                    if (null == a) return !1;
                    null != n && a.analyticsContext.trackViewerCount(n.length), a.streamUpdate(i)
                },
                STREAM_DELETE: function(e) {
                    let {
                        streamKey: t
                    } = e, n = L[t];
                    if (null == n) return !1;
                    t === a && (a = null, S.default.getMediaEngine().off(d.MediaEngineEvent.ConnectionStats, b)), n.destroy("stream-end"), delete L[t]
                },
                STREAM_STATS_UPDATE: function(e) {
                    let {
                        stats: t
                    } = e;
                    if (null == t) return !1;
                    U.push(t), U.length > 30 && U.shift()
                },
                STREAM_LAYOUT_UPDATE: function(e) {
                    let {
                        layout: t
                    } = e;
                    D = t, Object.values(L).forEach(e => e.layoutChange(t))
                }
            })