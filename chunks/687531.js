            "use strict";
            n.r(t), n.d(t, {
                useIsDmSpamFilterCoachmarkEnabled: function() {
                    return i
                }
            });
            var a = n("862205");
            let s = (0, a.createExperiment)({
                kind: "user",
                id: "2023-04_dm_spam_filter_coachmark",
                label: "Safety DM Spam Filter Coachmark rollout",
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

            function i() {
                return s.useExperiment({
                    location: "acbeda_1"
                }, {
                    autoTrackExposure: !1
                }).enabled
            }