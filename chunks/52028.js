            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return R
                }
            }), n("424973"), n("222007");
            var i = n("714617"),
                a = n.n(i),
                l = n("917351"),
                s = n.n(l),
                r = n("446674"),
                u = n("913144"),
                o = n("191225"),
                d = n("299285"),
                c = n("225772"),
                _ = n("32346"),
                E = n("925880"),
                f = n("662285"),
                h = n("845579"),
                p = n("374363"),
                T = n("373469"),
                C = n("848872"),
                m = n("568307"),
                S = n("49111"),
                I = n("782340");
            let g = [],
                A = {};

            function N() {
                let e = [],
                    t = h.CustomStatusSetting.getSetting();
                null != t && ("0" === t.expiresAtMs || new Date(Number(t.expiresAtMs)).getTime() - new Date().getTime() > 0) && e.push((0, c.default)(t));
                let n = E.default.getActivities();
                e.push(...n);
                let i = C.default.getStream();
                null != i && e.push({
                    type: S.ActivityTypes.STREAMING,
                    ...i
                });
                let l = new Set,
                    r = new Set;
                s.forEach(A, t => {
                    null != t.application_id && (l.add(t.name), r.add(t.application_id), e.push(t))
                }), o.default.getSelfEmbeddedActivities().forEach(t => {
                    var n;
                    let {
                        applicationId: i
                    } = t;
                    if (r.has(i)) return;
                    let a = null === (n = d.default.getApplication(i)) || void 0 === n ? void 0 : n.name;
                    e.push({
                        type: S.ActivityTypes.PLAYING,
                        name: null != a ? a : I.default.Messages.EMBEDDED_ACTIVITIES_LAUNCHING_ACTIVITY,
                        application_id: i,
                        flags: S.ActivityFlags.EMBEDDED
                    })
                });
                let u = m.default.getVisibleGame(),
                    p = null != u && null != u.name && l.has(u.name),
                    N = null != u && u.isLauncher,
                    O = T.default.getCurrentUserActiveStream();
                null != u && null != u.name && !(p || N && !(null != O)) && e.push({
                    type: S.ActivityTypes.PLAYING,
                    name: u.name,
                    application_id: u.id,
                    timestamps: {
                        start: u.start
                    }
                });
                let R = f.default.getActivity();
                null != R && e.push({
                    type: S.ActivityTypes.LISTENING,
                    ...R
                });
                let y = _.default.getCurrentHangStatus();
                if (null != y) {
                    let t = _.default.getCustomHangStatus();
                    e.push({
                        type: S.ActivityTypes.HANG_STATUS,
                        name: "Hang Status",
                        state: y,
                        details: null == t ? void 0 : t.status,
                        emoji: null == t ? void 0 : t.emoji
                    })
                }!a(g, e) && (g = e)
            }
            class O extends r.default.Store {
                initialize() {
                    this.waitFor(m.default, o.default, C.default, T.default, f.default, p.default, _.default), this.syncWith([E.default, _.default], () => N())
                }
                getActivities() {
                    return g
                }
                getPrimaryActivity() {
                    return g[0]
                }
                getApplicationActivity(e) {
                    return this.findActivity(t => t.application_id === e)
                }
                getCustomStatusActivity() {
                    return this.findActivity(e => e.type === S.ActivityTypes.CUSTOM_STATUS)
                }
                findActivity(e) {
                    return g.find(e)
                }
                getApplicationActivities() {
                    return A
                }
            }
            O.displayName = "LocalActivityStore";
            var R = new O(u.default, {
                OVERLAY_INITIALIZE: function(e) {
                    let {
                        localActivities: t
                    } = e;
                    A = {
                        ...t
                    }, N()
                },
                START_SESSION: function() {
                    A = {}, N()
                },
                LOCAL_ACTIVITY_UPDATE: function(e) {
                    let {
                        socketId: t,
                        activity: n
                    } = e;
                    if (a(A[t], n)) return !1;
                    null != n ? A[t] = n : delete A[t], N()
                },
                RPC_APP_DISCONNECTED: function(e) {
                    let {
                        socketId: t
                    } = e;
                    delete A[t], N()
                },
                RUNNING_GAMES_CHANGE: N,
                LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS: N,
                SPOTIFY_PLAYER_STATE: N,
                SPOTIFY_PLAYER_PLAY: N,
                STREAMING_UPDATE: N,
                USER_CONNECTIONS_UPDATE: N,
                STREAM_START: N,
                STREAM_STOP: N,
                USER_SETTINGS_PROTO_UPDATE: N,
                EMBEDDED_ACTIVITY_OPEN: N,
                EMBEDDED_ACTIVITY_CLOSE: N,
                UPDATE_HANG_STATUS: N
            })