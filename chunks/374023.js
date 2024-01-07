            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return r
                }
            });
            var a = s("862205");
            let n = (0, a.createExperiment)({
                id: "2023-12_quests",
                kind: "user",
                label: "Quests",
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
                    label: "Quests enabled",
                    config: {
                        enabled: !0
                    }
                }]
            });
            var r = n