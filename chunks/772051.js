            "use strict";
            n.r(t), n.d(t, {
                ClydeExperimentState: function() {
                    return i
                },
                default: function() {
                    return o
                }
            });
            var s, i, r = n("862205");
            (s = i || (i = {}))[s.None = 0] = "None", s[s.DefaultOn = 1] = "DefaultOn", s[s.DefaultOff = 2] = "DefaultOff", s[s.ComingSoon = 3] = "ComingSoon", s[s.ClydeProfiles = 4] = "ClydeProfiles";
            let a = (0, r.createExperiment)({
                kind: "guild",
                id: "2023-03_clyde_ai",
                label: "ClydeAI",
                defaultConfig: {
                    experimentState: 0
                },
                treatments: [{
                    id: 1,
                    label: "Enabled (Default Off)",
                    config: {
                        experimentState: 2
                    }
                }, {
                    id: 3,
                    label: "Enabled (Default On)",
                    config: {
                        experimentState: 1
                    }
                }, {
                    id: 4,
                    label: "Coming Soon",
                    config: {
                        experimentState: 3
                    }
                }, {
                    id: 5,
                    label: "Clyde Profiles",
                    config: {
                        experimentState: 4
                    }
                }]
            });
            var o = a