            "use strict";
            s.r(t), s.d(t, {
                useIsSafetyHubEnabled: function() {
                    return l
                }
            });
            var a = s("862205");
            let n = (0, a.createExperiment)({
                kind: "user",
                id: "2023-07_safetyhub",
                label: "Safety Hub",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enabled",
                    config: {
                        enabled: !0
                    }
                }]
            });

            function l() {
                return !!n.useExperiment({
                    location: "ed2c3f_1"
                }, {
                    autoTrackExposure: !0
                }).enabled
            }