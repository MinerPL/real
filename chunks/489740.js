            "use strict";
            r.r(t), r.d(t, {
                State: function() {
                    return l
                },
                default: function() {
                    return f
                }
            });
            var n, l, i = r("446674"),
                a = r("913144"),
                s = r("355025");
            (n = l || (l = {}))[n.NotResolved = 0] = "NotResolved", n[n.Resolving = 1] = "Resolving", n[n.Resolved = 2] = "Resolved", n[n.Invalid = 3] = "Invalid";
            let u = 0,
                d = null,
                o = {};
            class c extends i.default.Store {
                getCurrentBuildOverride() {
                    return 0 === u && (u = 1, (0, s.getBuildOverride)().then(e => {
                        a.default.dispatch({
                            type: "CURRENT_BUILD_OVERRIDE_RESOLVED",
                            overrides: e
                        })
                    })), {
                        state: u,
                        overrides: d
                    }
                }
                getBuildOverride(e) {
                    return ! function(e) {
                        if (e in o) return;
                        let t = (0, s.validateURL)(e);
                        if (null == t) {
                            o = {
                                ...o,
                                [e]: {
                                    url: e,
                                    state: 3
                                }
                            };
                            return
                        }
                        o = {
                            ...o,
                            [e]: {
                                url: e,
                                validatedURL: t.url,
                                payload: String(t.payload),
                                state: 1
                            }
                        };
                        (0, s.getBuildOverrideMeta)(t.url).then(t => {
                            a.default.dispatch({
                                type: "BUILD_OVERRIDE_RESOLVED",
                                url: e,
                                override: t
                            })
                        })
                    }(e), o[e]
                }
                getBuildOverrides() {
                    return o
                }
            }
            c.displayName = "BuildOverrideStore";
            var f = new c(a.default, {
                BUILD_OVERRIDE_RESOLVED: function(e) {
                    let {
                        url: t,
                        override: r
                    } = e;
                    o = {
                        ...o,
                        [t]: {
                            ...o[t],
                            state: null == r ? 3 : 2,
                            override: r
                        }
                    }
                },
                CURRENT_BUILD_OVERRIDE_RESOLVED: function(e) {
                    let {
                        overrides: t
                    } = e;
                    u = 2, d = t
                }
            })