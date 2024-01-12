            "use strict";
            n.r(t), n.d(t, {
                ExpandedGiftingRevampExperiment: function() {
                    return i
                }
            });
            var s = n("862205");
            let i = (0, s.createExperiment)({
                kind: "user",
                id: "2023-11_expanded_gifting_revamp_experiment",
                label: "Expanded Gifting Revamp Experiment",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Show expanded gifting revamp experience",
                    config: {
                        enabled: !0
                    }
                }]
            })