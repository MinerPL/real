            "use strict";
            n.r(t), n.d(t, {
                MidjourneyOnboardingExperiment: function() {
                    return a
                }
            });
            var i = n("862205");
            let a = (0, i.createExperiment)({
                kind: "user",
                id: "2023-11_midjourney_onboarding",
                label: "Midjourney Onboarding",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enables the accelerated Midjourney Onboarding & Discord experience for the user.",
                    config: {
                        enabled: !0
                    }
                }]
            })