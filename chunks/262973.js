            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                },
                systemDMRedesignEnabled: function() {
                    return i
                }
            });
            var a = n("862205");
            let s = (0, a.createExperiment)({
                kind: "user",
                id: "2022-07_system_dm_safety_onboarding",
                label: "System DM Safety Onboarding",
                defaultConfig: {
                    systemDMRedesignEnabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enabled, v1 copy",
                    config: {
                        systemDMRedesignEnabled: !0
                    }
                }, {
                    id: 2,
                    label: "Enabled, v2 copy",
                    config: {
                        systemDMRedesignEnabled: !0
                    }
                }]
            });
            var l = s;

            function i() {
                return s.getCurrentConfig({
                    location: "0a5674_1"
                }, {
                    autoTrackExposure: !1
                }).systemDMRedesignEnabled
            }