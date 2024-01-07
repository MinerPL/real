            "use strict";
            let i, a;
            n.r(t), n.d(t, {
                default: function() {
                    return V
                }
            }), n("222007");
            var l = n("714617"),
                s = n.n(l),
                r = n("917351"),
                u = n.n(r),
                o = n("446674"),
                d = n("913144"),
                c = n("429928"),
                _ = n("837374"),
                E = n("662285"),
                f = n("845579"),
                h = n("374363"),
                p = n("233069"),
                T = n("964889"),
                C = n("271938"),
                m = n("546463"),
                S = n("603699"),
                I = n("686470"),
                g = n("52028"),
                A = n("824563"),
                N = n("235660"),
                O = n("49111");
            let R = !1,
                y = O.StatusTypes.ONLINE,
                v = O.StatusTypes.UNKNOWN,
                M = 0,
                L = [],
                D = !1,
                U = !0,
                P = Object.freeze([]),
                b = [];

            function G(e) {
                return (0, T.shouldShareApplicationActivity)(e, I.default)
            }

            function k(e) {
                switch (e.type) {
                    case O.ActivityTypes.LISTENING:
                        if ((0, c.default)(e)) return E.default.shouldShowActivity();
                        if (null != e.application_id) return G(e.application_id);
                        return !1;
                    case O.ActivityTypes.PLAYING:
                        return null != e.application_id ? G(e.application_id) : function(e) {
                            let t = m.default.getGameByName(e);
                            return null != t ? G(t.id) : f.ShowCurrentGame.getSetting()
                        }(e.name);
                    case O.ActivityTypes.STREAMING:
                    case O.ActivityTypes.WATCHING:
                    default:
                        return null == e.application_id || G(e.application_id)
                }
            }

            function F() {
                var e;
                M = null !== (e = S.default.getIdleSince()) && void 0 !== e ? e : 0, D = S.default.isAFK(), U ? (y = v, w()) : y = R ? O.StatusTypes.INVISIBLE : f.StatusSetting.getSetting(), y === O.StatusTypes.ONLINE && M > 0 && (y = O.StatusTypes.IDLE);
                let t = !1,
                    n = U || y === O.StatusTypes.INVISIBLE ? [] : g.default.getActivities().filter(k);
                !s(L, n) && (L = n, t = !0);
                let i = N.default.getRemoteActivities();
                if (P !== i && (P = i, t = !0), t) {
                    let e = L.find(e => e.type === O.ActivityTypes.CUSTOM_STATUS),
                        t = L.filter(e => e.type !== O.ActivityTypes.CUSTOM_STATUS);
                    b = t.length > 0 ? L : null != e ? [e, ...u(P).filter(e => e.type !== O.ActivityTypes.CUSTOM_STATUS).uniqBy(e => "".concat(e.type, ":").concat(e.application_id, ":").concat(e.name)).value()] : u.uniqBy(P, e => "".concat(e.type, ":").concat(e.application_id, ":").concat(e.name))
                }
            }

            function w() {
                i = void 0, a = void 0
            }

            function H() {
                U = !1, v = O.StatusTypes.UNKNOWN, F(), A.default.setCurrentUserOnConnectionOpen(y, b)
            }
            class x extends o.default.Store {
                initialize() {
                    this.waitFor(S.default, h.default, g.default, N.default, I.default, m.default), this.syncWith([g.default], F)
                }
                getLocalPresence() {
                    return {
                        status: y,
                        since: M,
                        activities: L,
                        afk: D,
                        broadcast: a
                    }
                }
                getStatus() {
                    return y
                }
                getActivities() {
                    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                    return e ? b : L
                }
                getPrimaryActivity() {
                    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                    return e ? b[0] : L[0]
                }
                getApplicationActivity(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    return this.findActivity(t => t.application_id === e, t)
                }
                findActivity(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    return this.getActivities(t).find(e)
                }
                getBroadcast() {
                    return i
                }
            }
            x.displayName = "SelfPresenceStore";
            var V = new x(d.default, {
                START_SESSION: F,
                CONNECTION_OPEN: H,
                CONNECTION_OPEN_SUPPLEMENTAL: H,
                OVERLAY_INITIALIZE: H,
                CONNECTION_CLOSED: F,
                IDLE: F,
                AFK: F,
                RUNNING_GAMES_CHANGE: F,
                STREAMING_UPDATE: F,
                USER_SETTINGS_PROTO_UPDATE: F,
                LOCAL_ACTIVITY_UPDATE: F,
                SPOTIFY_PLAYER_STATE: F,
                SPOTIFY_PLAYER_PLAY: F,
                USER_CONNECTIONS_UPDATE: F,
                SESSIONS_REPLACE: F,
                RPC_APP_DISCONNECTED: F,
                LIBRARY_FETCH_SUCCESS: F,
                LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS: F,
                LOGOUT: function() {
                    U = !0, v = y, F()
                },
                EMBEDDED_ACTIVITY_CLOSE: F,
                EMBEDDED_ACTIVITY_OPEN: F,
                FORCE_INVISIBLE: function(e) {
                    return R = e.invisible, F()
                },
                WINDOW_FOCUS: function() {
                    return R = !1, F()
                },
                BROADCAST_START: function(e) {
                    i = e.broadcast, a = (0, _.broadcastToServer)(e.broadcast)
                },
                BROADCAST_STOP: w,
                CHANNEL_DELETE: function(e) {
                    let {
                        channel: t
                    } = e;
                    t instanceof p.ChannelRecordBase && (null == t ? void 0 : t.isBroadcastChannel()) && (null == t ? void 0 : t.ownerId) === C.default.getId() && (i = void 0, a = void 0)
                }
            })