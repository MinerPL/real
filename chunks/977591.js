            "use strict";
            n.r(t), n.d(t, {
                ExpandedGiftingRevampExperiment: function() {
                    return a
                }
            });
            var i = n("862205");
            let a = (0, i.createExperiment)({
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