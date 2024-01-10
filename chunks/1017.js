            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return R
                }
            });
            var a = s("446674"),
                n = s("913144"),
                r = s("177589"),
                l = s("824563"),
                i = s("843823"),
                u = s("697218"),
                o = s("49111");
            let d = !1,
                c = {},
                _ = {};

            function E(e) {
                let t = !1;
                return e.forEach(e => {
                    t = !1 !== f(e) || t
                }), t
            }

            function I(e) {
                let t = _[e];
                if (null == t) return !1;
                let s = t.gameId;
                return null != c[s] && (c = {
                    ...c
                }, delete c[s][e], 0 === Object.values(c[s]).length && delete c[s]), _ = {
                    ..._
                }, delete _[e], !0
            }

            function f(e) {
                var t, s, a, n;
                let {
                    user: l,
                    activities: u
                } = e;
                if (null == l || !i.default.getUserAffinitiesUserIds().has(l.id)) return !1;
                let d = u.find(e => e.type !== o.ActivityTypes.CUSTOM_STATUS);
                if (null == d) return I(l.id);
                let E = (0, r.default)(d);
                if (null == E) return I(l.id);
                let f = _[l.id];
                null != f && f.gameId !== E && I(l.id);
                let T = null !== (s = null === (t = d.timestamps) || void 0 === t ? void 0 : t.start) && void 0 !== s ? s : Date.now(),
                    S = {
                        userId: l.id,
                        activity: d,
                        startedPlaying: T
                    };
                return a = E, n = S, c = {
                    ...c,
                    [a]: {
                        ...c[a],
                        [n.userId]: n
                    }
                }, _ = {
                    ..._,
                    [n.userId]: {
                        gameId: a,
                        startedPlaying: n.startedPlaying
                    }
                }, !0
            }

            function T() {
                let e = !1;
                if (!i.default.needsRefresh() && !d) {
                    let t;
                    c = {}, _ = {}, t = !1, l.default.getUserIds().forEach(e => {
                        let s = u.default.getUser(e);
                        null != s && (t = f({
                            user: s,
                            activities: l.default.getActivities(e)
                        }) || t)
                    }), e = t
                }
                return d = !i.default.needsRefresh(), e
            }
            class S extends a.default.Store {
                initialize() {
                    this.waitFor(i.default), this.syncWith([i.default], T)
                }
                get games() {
                    return c
                }
                get usersPlaying() {
                    return _
                }
                get gameIds() {
                    return Object.keys(c)
                }
                getNowPlaying(e) {
                    return c[e]
                }
                getUserGame(e) {
                    return _[e]
                }
            }
            S.displayName = "NowPlayingStore";
            var R = new S(n.default, {
                CONNECTION_OPEN: function() {
                    c = {}, _ = {}
                },
                CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
                    let {
                        presences: t
                    } = e;
                    return E(t)
                },
                LOGOUT: function() {
                    c = {}, _ = {}
                },
                PRESENCE_UPDATES: function(e) {
                    let {
                        updates: t
                    } = e;
                    return t.map(e => f(e)).some(e => e)
                },
                PRESENCES_REPLACE: function(e) {
                    let {
                        presences: t
                    } = e;
                    return E(t)
                }
            })