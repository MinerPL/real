            "use strict";
            s.r(t), s.d(t, {
                isMfaEmailVerificationEnabled: function() {
                    return l
                }
            });
            var a = s("862205");
            let n = (0, a.createExperiment)({
                kind: "user",
                id: "2023-07_mfa_email_verification",
                label: "Safety Experience Mfa Email Verification",
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

            function l() {
                let {
                    enabled: e
                } = n.getCurrentConfig({
                    location: "41ef90_2"
                }, {
                    autoTrackExposure: !0
                });
                return e
            }