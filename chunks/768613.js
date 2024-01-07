            "use strict";
            n.r(t), n.d(t, {
                BashOutCoachMarkExperiment: function() {
                    return s
                }
            });
            var a = n("862205");
            let s = (0, a.createExperiment)({
                kind: "user",
                id: "2022-11_activitiesbashoutcoachmark",
                label: "Bash Out Coach Mark",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 0,
                    label: "Control",
                    config: {
                        enabled: !1
                    }
                }, {
                    id: 1,
                    label: "Enable Bash Out Coach Mark",
                    config: {
                        enabled: !0
                    }
                }]
            })