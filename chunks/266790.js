            "use strict";
            n.r(t), n.d(t, {
                useActivitiesRolloutExperiments: function() {
                    return u
                }
            });
            var a, s, i = n("884691"),
                l = n("862205");
            let r = (a = "Watch Together", s = "2021-09_watch_together_rollout", (0, l.createExperiment)({
                    kind: "guild",
                    id: s,
                    label: "Exposure tracking for ".concat(a, " (do not override)"),
                    defaultConfig: {},
                    treatments: []
                })),
                o = [r];

            function u(e) {
                i.useEffect(() => {
                    null != e && o.forEach(t => {
                        t.trackExposure({
                            guildId: e,
                            location: "508ef2_1"
                        })
                    })
                }, [e])
            }