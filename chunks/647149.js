            "use strict";
            n.r(t), n.d(t, {
                useIsInappAppealIngestionEnabled: function() {
                    return l
                }
            });
            var i = n("862205");
            let r = (0, i.createExperiment)({
                kind: "user",
                id: "2023-11_safety_hub_inapp_appeal_ingestion",
                label: "In-app Appeal Ingestion",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "EU user",
                    config: {
                        enabled: !0
                    }
                }, {
                    id: 2,
                    label: "DSA E2E testing user",
                    config: {
                        enabled: !0
                    }
                }]
            });

            function l() {
                return !!r.useExperiment({
                    location: "appeal-ingestion-link"
                }, {
                    autoTrackExposure: !0
                }).enabled
            }