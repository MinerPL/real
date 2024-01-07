            "use strict";
            n.r(t), n.d(t, {
                useCanUseProfileEffects: function() {
                    return u
                },
                canUseProfileEffects: function() {
                    return l
                }
            });
            var r = n("862205");
            let i = (0, r.createExperiment)({
                kind: "user",
                id: "2023-08_profile_effects",
                label: "Profile Effects User Experiment",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enables profile effects and shop",
                    config: {
                        enabled: !0
                    }
                }]
            });

            function u(e) {
                let {
                    location: t,
                    trackExposureOptions: n = {},
                    autoTrackExposure: r = !0
                } = e;
                return i.useExperiment({
                    location: t
                }, {
                    autoTrackExposure: r,
                    trackExposureOptions: n
                }).enabled
            }

            function l(e) {
                let {
                    location: t,
                    trackExposureOptions: n = {},
                    autoTrackExposure: r = !0
                } = e;
                return i.getCurrentConfig({
                    location: t
                }, {
                    autoTrackExposure: r,
                    trackExposureOptions: n
                }).enabled
            }