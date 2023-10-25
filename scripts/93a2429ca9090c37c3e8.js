(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["36192"], {
        288207: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return u
                }
            });
            let l = new Set(["nvidia"]);

            function u(t) {
                for (let e of Object.keys(t)) {
                    let n = t[e];
                    if (null != n && null == n.error && l.has(e)) return !0
                }
                return !1
            }
        },
        709496: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return r
                }
            });
            var l = n("190735"),
                u = n.n(l),
                a = n("773336");
            let i = {
                [a.PlatformTypes.WINDOWS]: {
                    nvidia: ">=397.93.0"
                }
            };

            function r(t) {
                let e = i[(0, a.getPlatform)()];
                if (null == e) return !1;
                for (let n of Object.keys(t)) {
                    let l = t[n],
                        a = e[n];
                    if (null == l || null == a || null != l.error) continue;
                    let i = function(t) {
                        var e, n;
                        return "".concat(null !== (e = t.major) && void 0 !== e ? e : 0, ".").concat(null !== (n = t.minor) && void 0 !== n ? n : 0, ".0")
                    }(l);
                    if (!u.satisfies(i, a)) return !0
                }
                return !1
            }
        },
        767960: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return c
                }
            });
            var l = n("498225"),
                u = n("913144"),
                a = n("773336"),
                i = n("50885"),
                r = n("288207"),
                o = n("709496");
            let s = !1,
                d = !0;
            class f extends l.default.Store {
                initialize() {
                    !(!a.isPlatformEmbedded || __OVERLAY__) && i.default.getGPUDriverVersions().then(t => {
                        s = (0, o.default)(t), d = (0, r.default)(t), this.emitChange()
                    })
                }
                get GPUDriversOutdated() {
                    return s
                }
                get canUseHardwareAcceleration() {
                    return d
                }
                getState() {
                    return {
                        GPUDriversOutdated: s,
                        canUseHardwareAcceleration: d
                    }
                }
            }
            f.displayName = "StreamingCapabilitiesStore";
            var c = new f(u.default, {
                OVERLAY_INITIALIZE: function(t) {
                    let {
                        streamingCapabilitiesStoreState: e
                    } = t;
                    s = e.GPUDriversOutdated, d = e.canUseHardwareAcceleration
                }
            })
        },
        269596: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return d
                }
            });
            var l = n("498225"),
                u = n("913144"),
                a = n("197881"),
                i = n("492397");
            let r = new Set,
                o = {};
            class s extends l.default.PersistedStore {
                initialize(t) {
                    null != t && (Array.isArray(t.hiddenHotspots) && (r = new Set(t.hiddenHotspots)), null != t.hotspotOverrides && (o = t.hotspotOverrides))
                }
                hasHotspot(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = !e && o[t];
                    return !(i.CONFERENCE_MODE_ENABLED || a.ProcessArgs.isDisallowPopupsSet()) && (n || !r.has(t))
                }
                hasHiddenHotspot(t) {
                    return r.has(t)
                }
                getHotspotOverride(t) {
                    return o[t]
                }
                getState() {
                    return {
                        hiddenHotspots: r,
                        hotspotOverrides: o
                    }
                }
            }
            s.displayName = "HotspotStore", s.persistKey = "hotspots", s.migrations = [t => ({
                hiddenHotspots: null != t ? t : [],
                hotspotOverrides: {}
            })];
            var d = new s(u.default, {
                OVERLAY_INITIALIZE: function(t) {
                    let {
                        hiddenHotspots: e
                    } = t;
                    r = new Set(e)
                },
                HOTSPOT_HIDE: function(t) {
                    let {
                        location: e
                    } = t;
                    if (r.has(e)) return !1;
                    r.add(e)
                },
                HOTSPOT_OVERRIDE_SET: function(t) {
                    let {
                        location: e,
                        enabled: n
                    } = t;
                    o[e] = n
                },
                HOTSPOT_OVERRIDE_CLEAR: function(t) {
                    let {
                        location: e
                    } = t;
                    if (null == o[e]) return !1;
                    delete o[e]
                }
            })
        },
        869305: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return q
                }
            });
            var l = n("427964"),
                u = n.n(l),
                a = n("435653"),
                i = n("975162"),
                r = n("385976"),
                o = n("996777"),
                s = n("767960"),
                d = n("269596"),
                f = n("288518"),
                c = n("235004"),
                E = n("755624"),
                I = n("800843"),
                g = n("610730"),
                S = n("374363"),
                O = n("116949"),
                C = n("373469"),
                T = n("271938"),
                A = n("950104"),
                N = n("42203"),
                _ = n("86878"),
                p = n("925758"),
                y = n("546463"),
                v = n("341542"),
                h = n("525065"),
                L = n("26989"),
                R = n("305961"),
                P = n("216391"),
                m = n("260320"),
                D = n("169602"),
                b = n("52028"),
                V = n("42887"),
                w = n("824563"),
                H = n("945956"),
                U = n("660478"),
                Y = n("27618"),
                B = n("18494"),
                M = n("282109"),
                G = n("697218"),
                F = n("800762"),
                k = n("357957"),
                j = n("167726"),
                J = n("703370"),
                x = n("953998"),
                z = n("901165"),
                Z = n("819068");
            async function q(t, e) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new a.default;
                await new Promise(t => setImmediate(t));
                let l = G.default.getCurrentUser();
                if (null == l) return new Promise(l => {
                    n.fail(() => {
                        l(q(t, e, n))
                    })
                });
                n.succeed();
                let W = Object.values(G.default.getUsers()),
                    Q = Object.values(R.default.getGuilds()),
                    K = u.values(N.default.getInitialOverlayState()),
                    X = L.default.getMutableAllGuildsAndMembers(),
                    $ = U.default.getAllReadStates(!0),
                    tt = F.default.getAllVoiceStates(),
                    te = w.default.getState(),
                    tn = v.default.unavailableGuilds,
                    tl = u.mapValues(r.default.getGuilds(), t => t.emojis),
                    tu = M.default.getAllSettings(),
                    ta = A.default.getInternalState(),
                    ti = x.default.getStates(),
                    tr = _.default.getAllConnections(),
                    to = b.default.getApplicationActivities(),
                    ts = p.default.getParties(),
                    td = p.default.getUserParties(),
                    tf = T.default.getSessionId(),
                    tc = T.default.getAnalyticsToken(),
                    tE = J.default.getGameAsJSON(e),
                    tI = h.default.getMemberCounts(),
                    tg = Y.default.getRelationships(),
                    tS = Array.from(f.default.getMessageRequestChannelIds()),
                    tO = B.default.getVoiceChannelId(),
                    tC = z.default.getFocusedPID(),
                    tT = z.default.getSelectedGuildId(),
                    tA = z.default.getSelectedChannelId(),
                    tN = V.default.getState(),
                    t_ = y.default.games.map(t => t.toJS()),
                    tp = Object.values(k.default.paymentSources).map(t => t.toJS()),
                    ty = k.default.defaultPaymentSourceId,
                    tv = k.default.hasFetchedPaymentSources,
                    th = C.default.getState(),
                    tL = j.default.testModeApplicationId,
                    tR = {
                        null: {
                            state: H.default.getState(),
                            pings: H.default.getPings(),
                            quality: H.default.getQuality(),
                            hostname: H.default.getHostname(),
                            lossRate: H.default.getOutboundLossRate()
                        }
                    };
                P.default.forEach((t, e) => {
                    tR[e] = {
                        state: t.state,
                        pings: t.getPings(),
                        quality: t.quality,
                        hostname: t.hostname,
                        lossRate: t.getOutboundLossRate()
                    }
                });
                let tP = m.default.getLobbies(),
                    tm = D.default.getAllVoiceStates(),
                    tD = Array.from(d.default.getState().hiddenHotspots),
                    tb = o.default.getSerializedState(),
                    tV = s.default.getState(),
                    tw = E.default.getInitialOverlayState(),
                    tH = I.default.getInitialOverlayState(),
                    tU = g.default.getInitialOverlayState(),
                    tY = (0, O.protoToB64)(i.PreloadedUserSettings, S.default.settings),
                    tB = c.default.getOverlaySerializedState();
                return {
                    type: "OVERLAY_INITIALIZE",
                    version: Z.OVERLAY_VERSION,
                    users: W,
                    guilds: Q,
                    channels: K,
                    guildMembers: X,
                    readStates: $,
                    voiceStates: tt,
                    unavailableGuilds: tn,
                    emojis: tl,
                    allUserGuildSettings: tu,
                    callStoreInternalState: ta,
                    activityLauncherStates: ti,
                    connectedApps: tr,
                    localActivities: to,
                    parties: ts,
                    userParties: td,
                    user: l,
                    messageRequestChannelIds: tS,
                    token: t,
                    sessionId: tf,
                    analyticsToken: tc,
                    presences: te,
                    currentGame: tE,
                    selectedVoiceChannelId: tO,
                    selectedChannelId: tA,
                    selectedGuildId: tT,
                    guildMemberCounts: tI,
                    relationships: tg,
                    mediaEngineState: tN,
                    rtcConnectionStates: tR,
                    focusedPID: tC,
                    applications: t_,
                    paymentSources: tp,
                    defaultPaymentSourceId: ty,
                    hasFetchedPaymentSources: tv,
                    testModeApplicationId: tL,
                    lobbies: tP,
                    lobbyVoiceStates: tm,
                    applicationStreamState: th,
                    hiddenHotspots: tD,
                    serializedExperimentStore: tb,
                    streamingCapabilitiesStoreState: tV,
                    joinedThreads: tw,
                    threadMembers: tH,
                    threadMessages: tU,
                    userSettingsProto: tY,
                    soundboardStoreState: tB
                }
            }
        },
        925758: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return A
                }
            });
            var l = n("427964"),
                u = n.n(l),
                a = n("498225"),
                i = n("913144"),
                r = n("271938"),
                o = n("27618"),
                s = n("101125"),
                d = n("49111");
            let f = {},
                c = {};

            function E(t, e) {
                var n;
                let l = null !== (n = f[t]) && void 0 !== n ? n : {};
                return l[e]
            }

            function I(t, e) {
                let n = E(t, e);
                if (null == n) return;
                let l = f[t];
                delete l[e], u.isEmpty(l) && delete f[t];
                let a = c[n];
                null != a && (a.delete(t), 0 === a.size && delete c[n])
            }

            function g(t, e, n, l) {
                let u = n.find(t => null != t.party && t.party.id),
                    a = null != u && null != u.party ? u.party.id : null,
                    i = E(e, t);
                if (null == a || l === d.StatusTypes.OFFLINE) return null != i && (I(e, t), void 0);
                if (null != i) {
                    if (i === a) return !1;
                    I(e, t)
                }! function(t, e, n) {
                    var l;
                    let u = f[t];
                    if (null == u && (u = f[t] = {}), u[e] = n, o.default.isBlocked(t)) return;
                    let a = null !== (l = c[n]) && void 0 !== l ? l : new Set;
                    c[n] = a, a.add(t)
                }(e, t, a)
            }

            function S(t) {
                let {
                    guild: e
                } = t, n = !1;
                for (let {
                        user: t,
                        status: l,
                        activities: u
                    }
                    of e.presences) !1 !== g(e.id, t.id, u, l) && (n = !0);
                return n
            }

            function O(t, e) {
                let n = !1;
                return e.forEach(e => {
                    null != e && g(t, e.user.id, e.activities, e.status) && (n = !0)
                }), n
            }

            function C() {
                let t = r.default.getId(),
                    e = s.default.getActivities();
                return g(d.ME, t, e)
            }
            class T extends a.default.Store {
                initialize() {
                    this.syncWith([s.default], C), this.waitFor(s.default, o.default)
                }
                getParty(t) {
                    return null != t && null != c[t] ? c[t] : null
                }
                getUserParties() {
                    return f
                }
                getParties() {
                    return c
                }
            }
            T.displayName = "GamePartyStore";
            var A = new T(i.default, {
                CONNECTION_OPEN_SUPPLEMENTAL: function(t) {
                    let {
                        guilds: e,
                        presences: n
                    } = t, l = !1;
                    for (let {
                            user: t,
                            status: e,
                            activities: u
                        }
                        of n) null != t && !1 !== g(d.ME, t.id, u, e) && (l = !0);
                    for (let t of e) !1 !== S({
                        guild: t
                    }) && (l = !0);
                    return l
                },
                OVERLAY_INITIALIZE: function(t) {
                    let {
                        parties: e,
                        userParties: n
                    } = t;
                    c = {}, f = {
                        ...n
                    }, Object.keys(e).forEach(t => c[t] = new Set(e[t]))
                },
                GUILD_CREATE: S,
                PRESENCES_REPLACE: function(t) {
                    let {
                        presences: e
                    } = t, n = !1;
                    for (let {
                            user: t,
                            activities: l
                        }
                        of e) null != t && !1 !== g(d.ME, t.id, l) && (n = !0);
                    return n
                },
                PRESENCE_UPDATES: function(t) {
                    let {
                        updates: e
                    } = t;
                    return e.map(t => {
                        let {
                            guildId: e,
                            user: n,
                            status: l,
                            activities: u
                        } = t;
                        return g(null != e ? e : d.ME, n.id, u, l)
                    }).some(t => t)
                },
                THREAD_MEMBER_LIST_UPDATE: function(t) {
                    let {
                        guildId: e,
                        members: n
                    } = t;
                    return O(e, n.map(t => t.presence))
                },
                THREAD_MEMBERS_UPDATE: function(t) {
                    let {
                        guildId: e,
                        addedMembers: n
                    } = t;
                    return null != n && O(e, n.map(t => t.presence))
                },
                RELATIONSHIP_ADD: function(t) {
                    let {
                        relationship: e
                    } = t;
                    if (!o.default.isBlocked(e.id)) return !1;
                    let n = f[e.id];
                    if (null == n) return !1;
                    for (let t of u.values(n)) {
                        let n = c[t];
                        null != n && n.delete(e.id)
                    }
                },
                RELATIONSHIP_REMOVE: function(t) {
                    let {
                        relationship: e
                    } = t, n = f[e.id];
                    if (null == n) return !1;
                    for (let t of u.values(n)) {
                        let n = c[t];
                        null != n && n.add(e.id)
                    }
                }
            })
        },
        216391: function(t, e, n) {
            "use strict";
            let l;
            n.r(e), n.d(e, {
                default: function() {
                    return A
                }
            });
            var u = n("427964"),
                a = n.n(u),
                i = n("498225"),
                r = n("913144"),
                o = n("997722"),
                s = n("422791"),
                d = n("271938"),
                f = n("260320"),
                c = n("42887"),
                E = n("49111");
            let I = {};

            function g() {
                a.forEach(I, (t, e) => {
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
                    a.each(I, t)
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
            var A = new T(r.default, c.default.isSupported() ? {
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
                    return a.some(I, e => e === t.connection)
                },
                LOBBY_VOICE_STATE_UPDATE: function(t) {
                    if (d.default.getId() !== t.userId || t.sessionId !== l) return !1;
                    let e = I[t.lobbyId];
                    null != e && null == t.channelId ? (e.destroy(), delete I[t.lobbyId]) : null != e ? e.channelId = t.channelId : null != t.channelId && (e = function(t, e) {
                        if (null == l) throw Error("Creating RTCConnection without session.");
                        let n = f.default.getLobby(t);
                        if (null == n) throw Error("Creating RTCConnection without lobby.");
                        let u = n.application_id,
                            a = new o.default({
                                userId: d.default.getId(),
                                sessionId: l,
                                guildId: t,
                                channelId: e,
                                context: u
                            });
                        return a.on(s.RTCConnectionEvent.State, (e, n, l) => {
                            r.default.dispatch({
                                type: "RTC_CONNECTION_STATE",
                                state: e,
                                ...n,
                                ...l,
                                lobbyId: t
                            })
                        }), a.on(s.RTCConnectionEvent.Ping, (e, n) => {
                            r.default.dispatch({
                                type: "RTC_CONNECTION_PING",
                                pings: e,
                                quality: n,
                                lobbyId: t
                            })
                        }), a.on(s.RTCConnectionEvent.OutboundLossRate, e => {
                            r.default.dispatch({
                                type: "RTC_CONNECTION_LOSS_RATE",
                                lossRate: e,
                                lobbyId: t
                            })
                        }), a
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
        },
        169602: function(t, e, n) {
            "use strict";
            let l, u;
            n.r(e), n.d(e, {
                default: function() {
                    return I
                }
            });
            var a = n("427964"),
                i = n.n(a),
                r = n("498225"),
                o = n("913144"),
                s = n("628454");
            let d = Object.freeze({}),
                f = {};

            function c(t) {
                let {
                    lobbyId: e
                } = t;
                delete f[e]
            }
            class E extends r.default.Store {
                getAllVoiceStates() {
                    return f
                }
                getVoiceStates(t) {
                    var e;
                    return null !== (e = f[t]) && void 0 !== e ? e : d
                }
                getVoiceState(t, e) {
                    return this.getVoiceStates(t)[e]
                }
                getLobbyIdsForUser(t) {
                    return Object.keys(f).filter(e => null != f[e][t])
                }
            }
            E.displayName = "LobbyVoiceStateStore";
            var I = new E(o.default, {
                CONNECTION_OPEN: function(t) {
                    let {
                        user: e,
                        sessionId: n
                    } = t;
                    f = {}, l = e.id, u = n
                },
                OVERLAY_INITIALIZE: function(t) {
                    let {
                        lobbyVoiceStates: e,
                        user: n,
                        sessionId: a
                    } = t;
                    f = {}, i.each(e, (t, e) => {
                        f[e] = {}, i.each(t, (t, n) => {
                            f[e][n] = new s.default(t)
                        })
                    }), l = n.id, u = a
                },
                LOBBY_VOICE_STATE_UPDATE: function(t) {
                    var e;
                    let n, {
                            sessionId: a,
                            userId: i,
                            lobbyId: r,
                            channelId: o,
                            mute: d,
                            deaf: c,
                            selfMute: E,
                            selfDeaf: I
                        } = t,
                        g = i === l && a !== u,
                        S = null !== (e = f[r]) && void 0 !== e ? e : {},
                        O = S[i];
                    if (null != o && !g && (n = null == O ? new s.default({
                            userId: i,
                            sessionId: a,
                            channelId: o,
                            mute: d,
                            deaf: c,
                            selfMute: E,
                            selfDeaf: I
                        }) : O.merge({
                            userId: i,
                            sessionId: a,
                            channelId: o,
                            mute: d,
                            deaf: c,
                            selfMute: E,
                            selfDeaf: I
                        })), O === n) return !1;
                    null == n ? (S = {
                        ...S
                    }, delete S[i]) : S = {
                        ...S,
                        [i]: n
                    }, f[r] = S
                },
                LOBBY_DELETE: c,
                LOBBY_DISCONNECT: c
            })
        },
        953998: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return c
                }
            });
            var l = n("498225"),
                u = n("638800"),
                a = n("913144"),
                i = n("49111");
            let r = {},
                o = {};

            function s(t, e, n) {
                var l;
                let {
                    applicationId: s
                } = n, d = null !== (l = r[s]) && void 0 !== l ? l : {};
                if (d[e] = t, r[s] = d, !__OVERLAY__ && t === i.ActivityActionStates.FAILED) {
                    null != o[s] && o[s].stop();
                    let t = new u.Timeout;
                    t.start(12e4, () => a.default.dispatch({
                        type: "ACTIVITY_LAUNCH_FAIL",
                        applicationId: s,
                        activityType: e
                    })), o[s] = t
                }
            }

            function d(t) {
                return s(i.ActivityActionStates.COMPLETE, i.ActivityActionTypes.JOIN, t)
            }
            class f extends l.default.Store {
                getState(t, e) {
                    let n = r[t];
                    return null == n ? void 0 : n[e]
                }
                getStates() {
                    return r
                }
            }
            f.displayName = "ActivityLauncherStore";
            var c = new f(a.default, {
                OVERLAY_INITIALIZE: function(t) {
                    let {
                        activityLauncherStates: e
                    } = t;
                    r = {
                        ...e
                    }
                },
                ACTIVITY_JOIN_LOADING: t => s(i.ActivityActionStates.LOADING, i.ActivityActionTypes.JOIN, t),
                ACTIVITY_JOIN_FAILED: t => s(i.ActivityActionStates.FAILED, i.ActivityActionTypes.JOIN, t),
                ACTIVITY_JOIN: d,
                EMBEDDED_ACTIVITY_CLOSE: d,
                ACTIVITY_LAUNCH_FAIL: function(t) {
                    let {
                        applicationId: e,
                        activityType: n
                    } = t, l = r[e];
                    if (null == l || l[n] !== i.ActivityActionStates.FAILED) return !1;
                    delete l[n]
                }
            })
        }
    }
]);