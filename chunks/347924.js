            "use strict";
            s.r(t), s.d(t, {
                useInServerBadgingExperiment: function() {
                    return l
                }
            });
            var n = s("862205");
            let a = (0, n.createExperiment)({
                kind: "guild",
                id: "2023-04_server_badging",
                label: "Server Badging",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enable Server Badging",
                    config: {
                        enabled: !0
                    }
                }]
            });

            function l(e) {
                let {
                    enabled: t
                } = a.useExperiment({
                    guildId: e,
                    location: "482926_1"
                }, {
                    autoTrackExposure: !1
                });
                return t
            }