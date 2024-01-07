            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var s = n("862205");
            let r = (0, s.createExperiment)({
                kind: "user",
                id: "2023-12_collectibles_gifting_dm_entrypoint",
                label: "Collectibles Gifting From DM's",
                defaultConfig: {
                    confirmUpsellEnabled: !1,
                    successUpsellEnabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Collectibles Gifting From DM's Enabled With Success Step Upsell",
                    config: {
                        confirmUpsellEnabled: !1,
                        successUpsellEnabled: !0
                    }
                }, {
                    id: 2,
                    label: "Collectibles Gifting from DM's Enabled With Confirm Step Upsell",
                    config: {
                        confirmUpsellEnabled: !0,
                        successUpsellEnabled: !1
                    }
                }, {
                    id: 100,
                    label: "Collectibles Gifting from DM's Enabled With All Upsells",
                    config: {
                        confirmUpsellEnabled: !0,
                        successUpsellEnabled: !0
                    }
                }]
            });
            var l = e => {
                let {
                    location: t,
                    autoTrackExposure: n = !0,
                    trackExposureOptions: s = {}
                } = e;
                return r.useExperiment({
                    location: t
                }, {
                    autoTrackExposure: n,
                    trackExposureOptions: s
                })
            }