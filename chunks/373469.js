            "use strict";
            let i, a, l, s;
            n.r(t), n.d(t, {
                default: function() {
                    return b
                }
            }), n("222007"), n("424973"), n("808653");
            var r = n("446674"),
                u = n("913144"),
                o = n("76393"),
                d = n("374014"),
                c = n("223913"),
                _ = n("537429"),
                E = n("271938"),
                f = n("42203"),
                h = n("305961"),
                p = n("42887"),
                T = n("957255"),
                C = n("945956"),
                m = n("568307"),
                S = n("18494"),
                I = n("800762"),
                g = n("49111"),
                A = n("706530");
            let N = null,
                O = {},
                R = null;

            function y() {
                i = new Map, a = {}, l = {}, s = {}, O = {}
            }
            y();

            function v(e) {
                i.delete(e)
            }

            function M() {
                let e = [];
                for (let t in a) {
                    let n = a[t];
                    for (let i in n) e.push(a[t][i])
                }
                return e
            }

            function L(e) {
                let {
                    streamKey: t,
                    region: n,
                    viewerIds: a,
                    paused: s
                } = e;
                i.set(t, {
                    ...(0, d.decodeStreamKey)(t),
                    state: s ? g.ApplicationStreamStates.PAUSED : g.ApplicationStreamStates.ACTIVE
                }), l[t] = {
                    streamKey: t,
                    region: n,
                    viewerIds: a
                }
            }

            function D(e, t) {
                return e === A.StreamTypes.CALL || T.default.canWithPartialContext(g.Permissions.VIEW_CHANNEL, {
                    channelId: t
                })
            }

            function U(e) {
                let t = f.default.getChannel(e.channelId);
                return !!D(e.streamType, e.channelId) || null != t && (0, c.canWatchStream)(t, I.default, h.default, T.default, o.default)[0]
            }
            class P extends r.default.Store {
                initialize() {
                    this.syncWith([T.default], () => !0), this.waitFor(m.default, T.default)
                }
                isSelfStreamHidden(e) {
                    var t;
                    return null !== (t = O[e]) && void 0 !== t && t
                }
                getLastActiveStream() {
                    var e;
                    return (0, _.default)(p.default) ? null !== (e = Array.from(i.values()).pop()) && void 0 !== e ? e : null : null
                }
                getAllActiveStreams() {
                    return (0, _.default)(p.default) ? Array.from(i.values()) : []
                }
                getAllActiveStreamsForChannel(e) {
                    return (0, _.default)(p.default) ? Array.from(i.values()).filter(t => t.channelId === e) : []
                }
                getActiveStreamForStreamKey(e) {
                    var t;
                    return (0, _.default)(p.default) ? null !== (t = i.get(e)) && void 0 !== t ? t : null : null
                }
                getActiveStreamForApplicationStream(e) {
                    var t;
                    if (!(0, _.default)(p.default) || null == e) return null;
                    let n = (0, d.encodeStreamKey)(e);
                    return null !== (t = this.getActiveStreamForStreamKey(n)) && void 0 !== t ? t : null
                }
                getCurrentUserActiveStream() {
                    let e = S.default.getVoiceChannelId(),
                        t = f.default.getChannel(e);
                    return null == t ? null : this.getActiveStreamForUser(E.default.getId(), t.getGuildId())
                }
                getActiveStreamForUser(e, t) {
                    var n;
                    let i = this.getStreamForUser(e, t);
                    return null != i ? this.getActiveStreamForApplicationStream(i) : null !== (n = this.getAllActiveStreams().find(t => t.ownerId === e)) && void 0 !== n ? n : null
                }
                getStreamerActiveStreamMetadata() {
                    var e;
                    let t = S.default.getVoiceChannelId(),
                        n = f.default.getChannel(t);
                    if (null == n) return null;
                    let i = this.getActiveStreamForUser(E.default.getId(), n.getGuildId());
                    return null == i ? null : null !== (e = s[(0, d.encodeStreamKey)(i)]) && void 0 !== e ? e : null
                }
                getAnyStreamForUser(e) {
                    var t;
                    if (!(0, _.default)(p.default)) return null;
                    let n = a[e];
                    return null == n ? null : null !== (t = Object.values(n).find(e => U(e))) && void 0 !== t ? t : null
                }
                getStreamForUser(e, t) {
                    var n;
                    if (!(0, _.default)(p.default)) return null;
                    let i = null === (n = a[e]) || void 0 === n ? void 0 : n[null != t ? t : "null"];
                    return null != i && U(i) ? i : null
                }
                getRTCStream(e) {
                    var t;
                    return (0, _.default)(p.default) ? null !== (t = l[e]) && void 0 !== t ? t : null : null
                }
                getAllApplicationStreams() {
                    return (0, _.default)(p.default) ? M().filter(e => null != e && D(e.streamType, e.channelId)) : []
                }
                getAllApplicationStreamsForChannel(e) {
                    return (0, _.default)(p.default) ? M().filter(t => null != t && t.channelId === e && D(t.streamType, t.channelId)) : []
                }
                getViewerIds(e) {
                    if (!(0, _.default)(p.default)) return [];
                    let t = null;
                    t = "string" == typeof e ? e : (0, d.encodeStreamKey)(e);
                    let n = null != t ? l[t] : null;
                    return null != n ? n.viewerIds : []
                }
                getCurrentAppIntent() {
                    return R
                }
                getState() {
                    return (0, _.default)(p.default) ? {
                        activeStreams: Array.from(i.entries()),
                        streamsByUserAndGuild: a,
                        rtcStreams: l,
                        streamerActiveStreamMetadatas: s
                    } : {
                        activeStreams: [],
                        streamsByUserAndGuild: {},
                        rtcStreams: {},
                        streamerActiveStreamMetadatas: {}
                    }
                }
            }
            P.displayName = "ApplicationStreamingStore";
            var b = new P(u.default, {
                OVERLAY_INITIALIZE: function(e) {
                    let {
                        applicationStreamState: t
                    } = e;
                    a = t.streamsByUserAndGuild, i = new Map(t.activeStreams), l = t.rtcStreams, s = t.streamerActiveStreamMetadatas
                },
                VOICE_STATE_UPDATES: function(e) {
                    let {
                        voiceStates: t
                    } = e;
                    return t.reduce((e, t) => {
                        var n, i, l, s, r;
                        let {
                            userId: u,
                            guildId: o,
                            channelId: d,
                            sessionId: c,
                            selfStream: _
                        } = t;
                        if (_ && null != d) {
                            ;
                            return null == a[(n = {
                                streamType: null != o ? A.StreamTypes.GUILD : A.StreamTypes.CALL,
                                ownerId: u,
                                guildId: o,
                                channelId: d
                            }).ownerId] && (a[n.ownerId] = {}), a[n.ownerId][null !== (i = n.guildId) && void 0 !== i ? i : "null"] = n, !0
                        } {
                            ;
                            let t = E.default.getSessionId();
                            if (u === E.default.getId() && c !== t && null != C.default.getChannelId()) return e;
                            return l = u, s = null != (s = o) ? s : "null", (null === (r = a[l]) || void 0 === r ? void 0 : r[s]) != null && (delete a[l][s], !0) || e
                        }
                    }, !1)
                },
                STREAM_WATCH: function(e) {
                    let {
                        streamKey: t
                    } = e, n = (0, d.decodeStreamKey)(t);
                    i.delete(t), i.set(t, {
                        ...n,
                        state: g.ApplicationStreamStates.CONNECTING
                    }), n.ownerId === E.default.getId() && (O[n.channelId] = !1)
                },
                STREAM_START: function(e) {
                    let {
                        streamType: t,
                        guildId: n,
                        channelId: a,
                        pid: l,
                        sourceName: r
                    } = e, u = (0, d.encodeStreamKey)({
                        streamType: t,
                        guildId: n,
                        channelId: a,
                        ownerId: E.default.getId()
                    }), o = null != l ? m.default.getGameForPID(l) : null;
                    s[u] = {
                        id: null == o ? void 0 : o.id,
                        pid: l,
                        sourceName: r
                    }, i.delete(u), i.set(u, {
                        streamType: t,
                        guildId: n,
                        channelId: a,
                        ownerId: E.default.getId(),
                        state: g.ApplicationStreamStates.CONNECTING
                    })
                },
                STREAM_STOP: function(e) {
                    let {
                        streamKey: t
                    } = e;
                    s[t] = null
                },
                STREAM_CREATE: L,
                STREAM_UPDATE: L,
                STREAM_TIMED_OUT: function(e) {
                    let {
                        streamKey: t
                    } = e, n = i.get(t);
                    if (null == n) return !1;
                    i.set(t, {
                        ...n,
                        state: g.ApplicationStreamStates.FAILED
                    })
                },
                STREAM_DELETE: function(e) {
                    let {
                        streamKey: t,
                        unavailable: a,
                        reason: s
                    } = e;
                    delete l[t];
                    let r = i.get(t);
                    if (null == r) return !1;
                    let u = g.ApplicationStreamStates.ENDED;
                    if (a) u = g.ApplicationStreamStates.RECONNECTING;
                    else if (s === g.ApplicationStreamDeleteReasons.UNAUTHORIZED) u = g.ApplicationStreamStates.FAILED;
                    else if (s === g.ApplicationStreamDeleteReasons.SAFETY_GUILD_RATE_LIMITED) {
                        let {
                            guildId: e
                        } = (0, d.decodeStreamKey)(t);
                        n.el("772545").then(n.bind(n, "772545")).then(t => {
                            let {
                                default: n
                            } = t;
                            n(e)
                        }), u = g.ApplicationStreamStates.ENDED
                    }
                    i.set(t, {
                        ...r,
                        state: u
                    }), u === g.ApplicationStreamStates.ENDED && N !== t && v(t)
                },
                STREAM_CLOSE: function(e) {
                    let {
                        streamKey: t
                    } = e;
                    v(t)
                },
                STREAM_UPDATE_SELF_HIDDEN: function(e) {
                    let {
                        channelId: t,
                        selfStreamHidden: n
                    } = e, i = (0, d.isStreamKey)(N);
                    i && (null == N ? void 0 : N.includes(E.default.getId())) && !1 === O[t] && !0 === n && (N = null), O[t] = n
                },
                SET_STREAM_APP_INTENT: function(e) {
                    let {
                        intent: t
                    } = e;
                    R = t
                },
                RTC_CONNECTION_STATE: function(e) {
                    let {
                        streamKey: t,
                        state: n
                    } = e;
                    if (null == t) return !1;
                    let a = i.get(t);
                    if (null == a || a.state === g.ApplicationStreamStates.ENDED) return !1;
                    let l = a.state;
                    switch (n) {
                        case g.RTCConnectionStates.DISCONNECTED:
                            l = g.ApplicationStreamStates.RECONNECTING;
                            break;
                        case g.RTCConnectionStates.RTC_CONNECTED:
                            l = g.ApplicationStreamStates.ACTIVE
                    }
                    if (l === a.state) return !1;
                    i.set(t, {
                        ...a,
                        state: l
                    })
                },
                CHANNEL_RTC_SELECT_PARTICIPANT: function(e) {
                    let {
                        id: t,
                        channelId: n
                    } = e;
                    if (N = t, Array.from(i.values()).forEach(e => {
                            (0, d.encodeStreamKey)(e) !== N && e.state === g.ApplicationStreamStates.ENDED && v((0, d.encodeStreamKey)(e))
                        }), null == t) return;
                    let a = (0, d.isStreamKey)(t);
                    a && t.includes(E.default.getId()) && (O[n] = !1)
                },
                CONNECTION_OPEN: y,
                CONNECTION_CLOSED: y,
                LOGOUT: y
            })