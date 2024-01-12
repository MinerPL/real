            "use strict";
            n.r(t), n.d(t, {
                useIsSafetyHubDisplayGuildViolationsEnabled: function() {
                    return r
                }
            });
            var i = n("862205");
            let l = (0, i.createExperiment)({
                kind: "user",
                id: "2024-01_safety_hub_display_guild_violations",
                label: "Safety Hub Display Guild Violations",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Display guild violations in account standing",
                    config: {
                        enabled: !0
                    }
                }]
            });

            function r(e) {
                return !!l.useExperiment({
                    location: e
                }, {
                    autoTrackExposure: !0
                }).enabled
            }