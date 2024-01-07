            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return s
                }
            });
            var n = l("862205");
            let a = (0, n.createExperiment)({
                kind: "user",
                id: "2023-10_collectibles_shop_for_all",
                label: "Collectibles Shop For All",
                defaultConfig: {
                    shopForAllEnabled: !1,
                    marketingEnabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enables Collectibles Shop For All",
                    config: {
                        shopForAllEnabled: !0,
                        marketingEnabled: !1
                    }
                }, {
                    id: 2,
                    label: "Enables Collectibles Shop For All with in-app DCF marketing",
                    config: {
                        shopForAllEnabled: !0,
                        marketingEnabled: !0
                    }
                }]
            });
            var s = e => {
                let {
                    location: t,
                    autoTrackExposure: l = !0,
                    trackExposureOptions: n = {}
                } = e;
                return a.useExperiment({
                    location: t
                }, {
                    autoTrackExposure: l,
                    trackExposureOptions: n
                })
            }