            "use strict";
            let n;
            r.r(t), r.d(t, {
                default: function() {
                    return _
                }
            });
            var i = r("917351"),
                u = r("446674"),
                l = r("913144");
            let o = [],
                a = !1;
            let s = o,
                d = {},
                c = null,
                f = e => {
                    s = (0, i.cloneDeep)(e);
                    let t = {};
                    s.forEach(e => {
                        t[e.id] = e
                    }), d = t
                };
            class E extends u.default.Store {
                get isFetching() {
                    return a
                }
                get fetchError() {
                    return n
                }
                get profileEffects() {
                    return s
                }
                get tryItOutId() {
                    return c
                }
                getProfileEffectById(e) {
                    return null != e ? d[e] : void 0
                }
            }
            E.displayName = "ProfileEffectStore";
            var _ = new E(l.default, {
                USER_PROFILE_EFFECTS_FETCH: () => {
                    a = !0
                },
                USER_PROFILE_EFFECTS_FETCH_SUCCESS: e => {
                    let {
                        profileEffects: t
                    } = e;
                    a = !1, f(0 === t.length ? o : t)
                },
                USER_PROFILE_EFFECTS_FETCH_FAILURE: e => {
                    let {
                        error: t
                    } = e;
                    a = !1, n = t, f(o)
                },
                PROFILE_EFFECTS_SET_TRY_IT_OUT: e => {
                    let {
                        id: t
                    } = e;
                    c = t
                },
                LOGOUT: e => {
                    a = !1, f(o), c = null
                }
            })