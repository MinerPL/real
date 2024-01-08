            "use strict";
            n.r(t), n.d(t, {
                useStaffTeenSafetyAssistAgeBypass: function() {
                    return l
                }
            });
            var a = n("862205");
            let s = (0, a.createExperiment)({
                kind: "user",
                id: "2023-10_staff_teen_safety_assist_age_bypass",
                label: "Staff Teen Safety Assist Age Bypass",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enable staff teen safety assist age bypass (your account will behave as a teen user)",
                    config: {
                        enabled: !0
                    }
                }]
            });

            function l(e) {
                return s.useExperiment({
                    location: e
                }, {
                    autoTrackExposure: !0
                }).enabled
            }