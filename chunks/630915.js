            "use strict";
            n.r(t), n.d(t, {
                isOOPExperimentEnabled: function() {
                    return s
                }
            });
            var i = n("296892");
            let r = (0, i.default)({
                kind: "user",
                id: "2023-08_overlay3_out_of_process_enablement",
                label: "Overlay3 - Out of Process Enablement",
                defaultConfig: {
                    useGlobalOverlay: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enabled",
                    config: {
                        useGlobalOverlay: !0
                    }
                }]
            });

            function s() {
                let e = r.getCurrentConfig({
                    location: "isOOPExperimentEnabled"
                }, {
                    autoTrackExposure: !0
                });
                return null != e && e.useGlobalOverlay
            }