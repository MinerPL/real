            "use strict";
            t.r(n), t.d(n, {
                default: function() {
                    return l
                }
            });
            var i = t("862205");
            let a = (0, i.createExperiment)({
                kind: "user",
                id: "2023-06_guild_boosting_legacy_pricing_fix_experiment",
                label: "Guild Boosting Legacy Pricing Fix Experiment",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Use Invoice Preview for Boost Pricing",
                    config: {
                        enabled: !0
                    }
                }]
            });
            var l = a