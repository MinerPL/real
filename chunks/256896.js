            "use strict";
            n.r(t), n.d(t, {
                isEligibleForMidjourneyOnboarding: function() {
                    return a
                }
            });
            var i = n("924593");

            function a(e) {
                let {
                    enabled: t
                } = i.MidjourneyOnboardingExperiment.getCurrentConfig({
                    location: e
                });
                return t
            }