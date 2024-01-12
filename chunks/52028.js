            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return D
                }
            }), n("424973"), n("222007");
            var s = n("714617"),
                i = n.n(s),
                r = n("917351"),
                a = n.n(r),
                o = n("446674"),
                d = n("913144"),
                u = n("191225"),
                l = n("299285"),
                f = n("225772"),
                _ = n("32346"),
                c = n("925880"),
                g = n("662285"),
                m = n("845579"),
                h = n("374363"),
                v = n("373469"),
                E = n("848872"),
                p = n("568307"),
                y = n("49111"),
                T = n("782340");
            let C = [],
                S = {};

            function I() {
                let e = [],
                    t = m.CustomStatusSetting.getSetting();
                null != t && ("0" === t.expiresAtMs || new Date(Number(t.expiresAtMs)).getTime() - new Date().getTime() > 0) && e.push((0, f.default)(t));
                let n = c.default.getActivities();
                e.push(...n);
                let s = E.default.getStream();
                null != s && e.push({
                    type: y.ActivityTypes.STREAMING,
                    ...s
                });
                let r = new Set,
                    o = new Set;
                a.forEach(S, t => {
                    null != t.application_id && (r.add(t.name), o.add(t.application_id), e.push(t))
                }), u.default.getSelfEmbeddedActivities().forEach(t => {
                    var n;
                    let {
                        applicationId: s
                    } = t;
                    if (o.has(s)) return;
                    let i = null === (n = l.default.getApplication(s)) || void 0 === n ? void 0 : n.name;
                    e.push({
                        type: y.ActivityTypes.PLAYING,
                        name: null != i ? i : T.default.Messages.EMBEDDED_ACTIVITIES_LAUNCHING_ACTIVITY,
                        application_id: s,
                        flags: y.ActivityFlags.EMBEDDED
                    })
                });
                let d = p.default.getVisibleGame(),
                    h = null != d && null != d.name && r.has(d.name),
                    I = null != d && d.isLauncher,
                    A = v.default.getCurrentUserActiveStream();
                null != d && null != d.name && !(h || I && !(null != A)) && e.push({
                    type: y.ActivityTypes.PLAYING,
                    name: d.name,
                    application_id: d.id,
                    timestamps: {
                        start: d.start
                    }
                });
                let D = g.default.getActivity();
                null != D && e.push({
                    type: y.ActivityTypes.LISTENING,
                    ...D
                });
                let N = _.default.getCurrentHangStatus();
                if (null != N) {
                    let t = _.default.getCustomHangStatus();
                    e.push({
                        type: y.ActivityTypes.HANG_STATUS,
                        name: "Hang Status",
                        state: N,
                        details: null == t ? void 0 : t.status,
                        emoji: null == t ? void 0 : t.emoji
                    })
                }!i(C, e) && (C = e)
            }
            class A extends o.default.Store {
                initialize() {
                    this.waitFor(p.default, u.default, E.default, v.default, g.default, h.default, _.default), this.syncWith([c.default, _.default], () => I())
                }
                getActivities() {
                    return C
                }
                getPrimaryActivity() {
                    return C[0]
                }
                getApplicationActivity(e) {
                    return this.findActivity(t => t.application_id === e)
                }
                getCustomStatusActivity() {
                    return this.findActivity(e => e.type === y.ActivityTypes.CUSTOM_STATUS)
                }
                findActivity(e) {
                    return C.find(e)
                }
                getApplicationActivities() {
                    return S
                }
            }
            A.displayName = "LocalActivityStore";
            var D = new A(d.default, {
                OVERLAY_INITIALIZE: function(e) {
                    let {
                        localActivities: t
                    } = e;
                    S = {
                        ...t
                    }, I()
                },
                START_SESSION: function() {
                    S = {}, I()
                },
                LOCAL_ACTIVITY_UPDATE: function(e) {
                    let {
                        socketId: t,
                        activity: n
                    } = e;
                    if (i(S[t], n)) return !1;
                    null != n ? S[t] = n : delete S[t], I()
                },
                RPC_APP_DISCONNECTED: function(e) {
                    let {
                        socketId: t
                    } = e;
                    delete S[t], I()
                },
                RUNNING_GAMES_CHANGE: I,
                LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS: I,
                SPOTIFY_PLAYER_STATE: I,
                SPOTIFY_PLAYER_PLAY: I,
                STREAMING_UPDATE: I,
                USER_CONNECTIONS_UPDATE: I,
                STREAM_START: I,
                STREAM_STOP: I,
                USER_SETTINGS_PROTO_UPDATE: I,
                EMBEDDED_ACTIVITY_OPEN: I,
                EMBEDDED_ACTIVITY_CLOSE: I,
                UPDATE_HANG_STATUS: I
            })