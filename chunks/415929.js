            "use strict";
            n.r(t), n.d(t, {
                useIsSafetyConsumerEducationBlockMuteEnabled: function() {
                    return i
                },
                useIsSafetyConsumerEducationBlockMuteBucket: function() {
                    return l
                }
            });
            var a = n("862205");
            let s = (0, a.createExperiment)({
                kind: "user",
                id: "2023-01_consumer_education_launch",
                label: "Safety Consumer Education Launch - Block/Mute",
                defaultConfig: {
                    bucket: 0,
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Mute",
                    config: {
                        bucket: 1,
                        enabled: !0
                    }
                }, {
                    id: 2,
                    label: "Block",
                    config: {
                        bucket: 2,
                        enabled: !0
                    }
                }]
            });

            function i() {
                return s.useExperiment({
                    location: "b85a21_1"
                }, {
                    autoTrackExposure: !0
                }).enabled
            }

            function l() {
                return s.useExperiment({
                    location: "b85a21_2"
                }, {
                    autoTrackExposure: !1
                }).bucket
            }