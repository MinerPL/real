            "use strict";
            n.r(t), n.d(t, {
                useIsWatchTogetherPromoWeek1SparklesEnabled: function() {
                    return s
                }
            });
            var a = n("862205");
            let l = (0, a.createExperiment)({
                    kind: "user",
                    id: "2023-03_activities_watch_together_promo_sparkles_week_1",
                    label: "Activities Watch Together Promo Week 1 Sparkles",
                    defaultConfig: {
                        enableWatchTogetherPromoWeek1Sparkles: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "enable Watch Together promo week 1 sparkles",
                        config: {
                            enableWatchTogetherPromoWeek1Sparkles: !0
                        }
                    }]
                }),
                s = () => {
                    let {
                        enableWatchTogetherPromoWeek1Sparkles: e
                    } = l.useExperiment({
                        location: "703243_1"
                    }, {
                        autoTrackExposure: !1
                    });
                    return e
                }