            "use strict";
            n.r(t), n("222007");
            var a, s = n("446674"),
                i = n("95410"),
                l = n("862337"),
                r = n("913144"),
                o = n("260365"),
                u = n("374363"),
                d = n("964889"),
                c = n("546463"),
                E = n("686470"),
                f = n("568307"),
                _ = n("49111");
            let h = "ActivityTrackingStore",
                C = null !== (a = i.default.get(h)) && void 0 !== a ? a : {},
                I = {},
                T = !1;

            function S(e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                t && N(e, !0);
                let n = I[e.applicationId];
                null != n && (n.stop(), delete I[e.applicationId]), delete C[e.applicationId], i.default.set(h, C)
            }

            function N(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = Date.now(),
                    a = null != e.updatedAt ? n - e.updatedAt : 0;
                a > 21e5 && (a = 0), o.default.updateActivity({
                    applicationId: e.applicationId,
                    distributor: e.isDiscordApplication ? _.Distributors.DISCORD : e.distributor,
                    shareActivity: (0, d.shouldShareApplicationActivity)(e.applicationId, E.default),
                    token: e.token,
                    duration: Math.floor(a / 1e3),
                    closed: t
                }), e.updatedAt = n;
                let s = I[e.applicationId];
                null == s && (s = I[e.applicationId] = new l.Interval).start(18e5, () => N(e)), !t && (C[e.applicationId] = e, i.default.set(h, C))
            }

            function A() {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                    t = f.default.getRunningGames(),
                    n = new Set;
                for (let {
                        name: e,
                        distributor: a
                    }
                    of t) {
                    let t = c.default.getGameByName(e);
                    if (null != t) n.add(t.id), !(t.id in C) && N({
                        applicationId: t.id,
                        updatedAt: Date.now(),
                        distributor: a
                    })
                }
                for (let t of Object.keys(C)) !n.has(t) && S(C[t], e)
            }

            function m() {
                for (let e of Object.keys(C)) S(C[e]);
                T = !1
            }
            class p extends s.default.Store {
                initialize() {
                    this.waitFor(f.default, u.default, E.default), this.syncWith([u.default], A)
                }
                getActivities() {
                    return C
                }
            }
            p.displayName = "ActivityTrackingStore", new p(r.default, {
                RUNNING_GAMES_CHANGE: () => A(),
                CONNECTION_OPEN: function() {
                    if (T) return !1;
                    for (let e of Object.keys(C)) N(C[e]);
                    A(!1), T = !0
                },
                CONNECTION_CLOSED: function(e) {
                    let {
                        code: t
                    } = e;
                    4004 === t && m()
                },
                LOGOUT: m,
                ACTIVITY_UPDATE_SUCCESS: function(e) {
                    let {
                        applicationId: t,
                        token: n
                    } = e, a = C[t];
                    if (null == a) return !1;
                    a.token = n, i.default.set(h, C)
                },
                ACTIVITY_UPDATE_FAIL: function(e) {
                    let {
                        applicationId: t
                    } = e, n = C[t];
                    if (null == n) return !1;
                    n.token = null, n.updatedAt = null, i.default.set(h, C)
                }
            })