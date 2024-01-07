            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var a = n("862205"),
                l = n("772051");
            let s = (0, a.createExperiment)({
                kind: "guild",
                id: "2023-11_clyde_ai_aa",
                label: "ClydeAI",
                defaultConfig: {
                    experimentState: l.ClydeExperimentState.None
                },
                treatments: [{
                    id: 1,
                    label: "Enabled (Default Off)",
                    config: {
                        experimentState: l.ClydeExperimentState.DefaultOff
                    }
                }, {
                    id: 3,
                    label: "Enabled (Default On)",
                    config: {
                        experimentState: l.ClydeExperimentState.DefaultOn
                    }
                }, {
                    id: 4,
                    label: "Coming Soon",
                    config: {
                        experimentState: l.ClydeExperimentState.ComingSoon
                    }
                }, {
                    id: 5,
                    label: "Clyde Profiles",
                    config: {
                        experimentState: l.ClydeExperimentState.ClydeProfiles
                    }
                }]
            });
            var i = s