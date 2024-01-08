            "use strict";
            n.r(t), n.d(t, {
                StrangerDangerTeensExperiment: function() {
                    return s
                },
                useIsEligibleForStrangerDangerTeens: function() {
                    return l
                }
            });
            var a = n("862205");
            let s = (0, a.createExperiment)({
                kind: "user",
                id: "2023-08_self_mod_stranger_danger_teens",
                label: "Stranger Danger Teens",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enable stranger danger for teens",
                    config: {
                        enabled: !0
                    }
                }]
            });

            function l(e) {
                return s.useExperiment({
                    location: e
                }, {
                    autoTrackExposure: !1
                }).enabled
            }