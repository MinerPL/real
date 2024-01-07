            "use strict";
            n.r(t), n.d(t, {
                useEmbeddedActivityLifecycle: function() {
                    return s
                }
            });
            var i = n("884691"),
                a = n("550766"),
                l = n("505259"),
                o = n("676065"),
                r = n("141962");
            let s = e => {
                let {
                    userActivity: t,
                    inActivity: n
                } = (0, l.default)(e.id), s = r.default;
                return (0, o.default)({
                    channel: e,
                    userActivity: t,
                    inActivity: n,
                    embeddedActivitiesManager: s
                }), i.useEffect(() => () => {
                    (null == t ? void 0 : t.application_id) != null && (0, a.disconnectEmbeddedActivity)(e.id, null == t ? void 0 : t.application_id)
                }, [e.id, null == t ? void 0 : t.application_id]), {
                    isLoading: !n
                }
            }