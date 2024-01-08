            "use strict";
            n.r(t), n.d(t, {
                useOpenInPopoutExperiment: function() {
                    return i
                }
            });
            var r = n("862205");
            let a = (0, r.createExperiment)({
                kind: "user",
                id: "2023-08-30_open-in-popout",
                label: "Open Channel in Popout",
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

            function i(e) {
                return a.useExperiment({
                    location: e
                }, {
                    autoTrackExposure: !1
                }).enabled
            }