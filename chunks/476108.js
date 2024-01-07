            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var r = n("446674"),
                i = n("95410"),
                l = n("913144"),
                s = n("49111");
            let a = {
                    lastViewedPath: null,
                    lastViewedNonVoicePath: null
                },
                u = a,
                o = "LAST_VIEWED_PATH";
            class c extends r.default.PersistedStore {
                initialize() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a;
                    u = null != e ? e : a
                }
                get defaultRoute() {
                    return s.Routes.ME
                }
                get lastNonVoiceRoute() {
                    var e;
                    return null !== (e = u.lastViewedNonVoicePath) && void 0 !== e ? e : s.Routes.ME
                }
                get fallbackRoute() {
                    return s.Routes.ME
                }
                getState() {
                    return u
                }
            }
            c.displayName = "DefaultRouteStore", c.persistKey = "DefaultRouteStore", c.migrations = [() => {
                let e = i.default.get(o, null);
                return i.default.remove(o), {
                    lastViewedPath: e
                }
            }];
            var d = new c(l.default, {
                SAVE_LAST_ROUTE: function(e) {
                    let {
                        path: t
                    } = e;
                    return u.lastViewedPath = t, !0
                },
                SAVE_LAST_NON_VOICE_ROUTE: function(e) {
                    let {
                        path: t
                    } = e;
                    return u.lastViewedNonVoicePath = t, !0
                }
            })