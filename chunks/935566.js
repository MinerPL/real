            "use strict";
            n.r(t), n.d(t, {
                BogoPromotionExperiment: function() {
                    return r
                },
                isBogoPromotionExperimentEnabled: function() {
                    return l
                },
                default: function() {
                    return s
                }
            });
            var i = n("862205");
            let r = (0, i.createExperiment)({
                    kind: "user",
                    id: "2023-06_bogo_promotion_gate",
                    label: "BOGO Promotion Manager",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Enable BOGO Promotion Manager",
                        config: {
                            enabled: !0
                        }
                    }]
                }),
                l = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    return r.getCurrentConfig({
                        location: "489551_2"
                    }, {
                        autoTrackExposure: e
                    })
                };
            var s = function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return r.useExperiment({
                    location: "489551_1"
                }, {
                    autoTrackExposure: e
                })
            }