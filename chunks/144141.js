            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return a
                }
            });
            var s = l("862205");
            let n = (0, s.createExperiment)({
                kind: "user",
                id: "2023-01_guild_onboarding_includes_rules",
                label: "Guild Onboarding includes rules experience",
                defaultConfig: {
                    includeRules: !1
                },
                treatments: [{
                    id: 1,
                    label: "Last page of onboarding is rules",
                    config: {
                        includeRules: !0
                    }
                }]
            });
            var a = n