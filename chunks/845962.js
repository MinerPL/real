            "use strict";
            let r;
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var i = n("917351"),
                u = n("446674"),
                l = n("913144");
            let o = [],
                a = !1;
            let f = o,
                s = {},
                c = null,
                d = e => {
                    f = (0, i.cloneDeep)(e);
                    let t = {};
                    f.forEach(e => {
                        t[e.id] = e
                    }), s = t
                };
            class E extends u.default.Store {
                get isFetching() {
                    return a
                }
                get fetchError() {
                    return r
                }
                get profileEffects() {
                    return f
                }
                get tryItOutId() {
                    return c
                }
                getProfileEffectById(e) {
                    return null != e ? s[e] : void 0
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
                    a = !1, d(0 === t.length ? o : t)
                },
                USER_PROFILE_EFFECTS_FETCH_FAILURE: e => {
                    let {
                        error: t
                    } = e;
                    a = !1, r = t, d(o)
                },
                PROFILE_EFFECTS_SET_TRY_IT_OUT: e => {
                    let {
                        id: t
                    } = e;
                    c = t
                },
                LOGOUT: e => {
                    a = !1, d(o), c = null
                }
            })