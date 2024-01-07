            "use strict";
            n.r(t), n.d(t, {
                useSoundmojiExperiment: function() {
                    return s
                }
            });
            var l = n("862205");
            let a = (0, l.createExperiment)({
                kind: "user",
                id: "2023-09_soundmoji",
                label: "Soundmoji",
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

            function s(e) {
                let {
                    enabled: t
                } = a.useExperiment({
                    location: e
                }, {
                    autoTrackExposure: !0
                });
                return t
            }