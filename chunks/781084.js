            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var a = n("862205");
            let s = (0, a.createExperiment)({
                kind: "user",
                id: "2023-09_premium_likelihood_discount_offers",
                label: "Premium Likelihood Discount Offers",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 0,
                    label: "Control group. Users will only get trial offers",
                    config: {
                        enabled: !0
                    }
                }, {
                    id: 1,
                    label: "Premium likelihood discount enabled for user.",
                    config: {
                        enabled: !0
                    }
                }, {
                    id: 2,
                    label: "Holdout. No trial or discount offers",
                    config: {
                        enabled: !0
                    }
                }]
            });
            var l = s