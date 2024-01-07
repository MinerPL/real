            "use strict";
            i.r(t), i.d(t, {
                useIsWatchTogetherPromoEnabled: function() {
                    return n
                }
            });
            var l = i("862205");
            let a = (0, l.createExperiment)({
                    kind: "user",
                    id: "2023-03_activitieswatchtogetherpromo",
                    label: "Activities Watch Together Promo",
                    defaultConfig: {
                        enableWatchTogetherPromo: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "enable Watch Together promo",
                        config: {
                            enableWatchTogetherPromo: !0
                        }
                    }]
                }),
                n = () => {
                    let {
                        enableWatchTogetherPromo: e
                    } = a.useExperiment({
                        location: "ea09d5_1"
                    }, {
                        autoTrackExposure: !1
                    });
                    return e
                }