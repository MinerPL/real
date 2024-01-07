            "use strict";
            n.r(t), n.d(t, {
                useIsUnauthenticatedReportFormEnabled: function() {
                    return l
                }
            });
            var s = n("862205");
            let a = (0, s.createExperiment)({
                kind: "user",
                id: "2023-09_iar_dsa_webform",
                label: "Safety Experience Unauthenticated Report Form",
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

            function l(e) {
                return a.useExperiment({
                    location: e
                }, {
                    autoTrackExposure: !0
                }).enabled
            }