            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("884691"),
                a = n("550766");

            function l(e) {
                let {
                    channel: t,
                    userActivity: n,
                    inActivity: l,
                    embeddedActivitiesManager: o
                } = e;
                i.useEffect(() => {
                    !l && (0, a.launchEmbeddedActivity)(t.id)
                }, [null == n ? void 0 : n.application_id, t.id, l, o])
            }