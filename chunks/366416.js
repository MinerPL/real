            "use strict";
            n.r(t), n.d(t, {
                useIsIarUserReportingEnabled: function() {
                    return r
                }
            });
            var s = n("862205");
            let l = (0, s.createExperiment)({
                kind: "user",
                id: "2023-09_iar_user_reporting",
                label: "Safety Experience IAR User Reporting",
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

            function r(e) {
                return l.useExperiment({
                    location: e
                }, {
                    autoTrackExposure: !0
                }).enabled
            }