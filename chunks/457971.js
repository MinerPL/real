            "use strict";
            n.r(t), n.d(t, {
                isEligibleForExplicitMediaRedaction: function() {
                    return s
                },
                useIsEligibleForExplicitMediaRedaction: function() {
                    return r
                }
            });
            var i = n("862205");
            let a = (0, i.createExperiment)({
                    kind: "user",
                    id: "2023-08_explicit_media_redaction",
                    label: "Explicit Media Redaction",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Enable explicit media redaction",
                        config: {
                            enabled: !0
                        }
                    }]
                }),
                l = (0, i.createExperiment)({
                    kind: "user",
                    id: "2023-08_explicit_media_redaction_teen",
                    label: "Explicit Media Redaction for Teens",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Enable explicit media redaction for teens",
                        config: {
                            enabled: !0
                        }
                    }]
                });

            function s() {
                let {
                    enabled: e
                } = a.getCurrentConfig({
                    location: "686da2_1"
                }, {
                    autoTrackExposure: !0
                }), {
                    enabled: t
                } = l.getCurrentConfig({
                    location: "686da2_1"
                }, {
                    autoTrackExposure: !0
                });
                return e || t
            }

            function r() {
                let {
                    enabled: e
                } = a.useExperiment({
                    location: "686da2_2"
                }, {
                    autoTrackExposure: !0
                }), {
                    enabled: t
                } = l.useExperiment({
                    location: "686da2_2"
                }, {
                    autoTrackExposure: !0
                });
                return e || t
            }