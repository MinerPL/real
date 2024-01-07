            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return f
                }
            });
            var n = i("446674"),
                l = i("862337"),
                a = i("913144"),
                u = i("49111");
            let r = {},
                d = {};

            function o(e, t, i) {
                var n;
                let {
                    applicationId: o
                } = i, s = null !== (n = r[o]) && void 0 !== n ? n : {};
                if (s[t] = e, r[o] = s, !__OVERLAY__ && e === u.ActivityActionStates.FAILED) {
                    null != d[o] && d[o].stop();
                    let e = new l.Timeout;
                    e.start(12e4, () => a.default.dispatch({
                        type: "ACTIVITY_LAUNCH_FAIL",
                        applicationId: o,
                        activityType: t
                    })), d[o] = e
                }
            }

            function s(e) {
                return o(u.ActivityActionStates.COMPLETE, u.ActivityActionTypes.JOIN, e)
            }
            class c extends n.default.Store {
                getState(e, t) {
                    let i = r[e];
                    return null == i ? void 0 : i[t]
                }
                getStates() {
                    return r
                }
            }
            c.displayName = "ActivityLauncherStore";
            var f = new c(a.default, {
                OVERLAY_INITIALIZE: function(e) {
                    let {
                        activityLauncherStates: t
                    } = e;
                    r = {
                        ...t
                    }
                },
                ACTIVITY_JOIN_LOADING: e => o(u.ActivityActionStates.LOADING, u.ActivityActionTypes.JOIN, e),
                ACTIVITY_JOIN_FAILED: e => o(u.ActivityActionStates.FAILED, u.ActivityActionTypes.JOIN, e),
                ACTIVITY_JOIN: s,
                EMBEDDED_ACTIVITY_CLOSE: s,
                ACTIVITY_LAUNCH_FAIL: function(e) {
                    let {
                        applicationId: t,
                        activityType: i
                    } = e, n = r[t];
                    if (null == n || n[i] !== u.ActivityActionStates.FAILED) return !1;
                    delete n[i]
                }
            })