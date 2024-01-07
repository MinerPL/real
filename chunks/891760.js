            "use strict";
            n.r(t), n.d(t, {
                shouldReadWriteAudioSettings: function() {
                    return s
                }
            });
            var i = n("862205");
            let r = (0, i.createExperiment)({
                kind: "user",
                id: "2022-09_remote_audio_settings",
                label: "Remote Audio Settings",
                defaultConfig: {
                    readWriteRemoteSettings: !1
                },
                treatments: [{
                    id: 1,
                    label: "Read/write remote audio settings",
                    config: {
                        readWriteRemoteSettings: !0
                    }
                }]
            });

            function s() {
                return r.getCurrentConfig({
                    location: "da0fa6_1"
                }, {
                    autoTrackExposure: !1
                }).readWriteRemoteSettings
            }