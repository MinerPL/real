            "use strict";
            n.r(t), n.d(t, {
                isProactiveClydeV2Enabled: function() {
                    return s
                }
            });
            var a = n("862205");
            let l = (0, a.createExperiment)({
                kind: "guild",
                id: "2023-10_clyde_ai_proactive_guilds_v2",
                label: "Proactive Clyde V2",
                defaultConfig: {
                    isProactiveClydeV2Enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "enable proactive clyde v2",
                    config: {
                        isProactiveClydeV2Enabled: !0
                    }
                }]
            });

            function s(e, t) {
                let {
                    isProactiveClydeV2Enabled: n
                } = l.getCurrentConfig({
                    guildId: e,
                    location: t
                }, {
                    autoTrackExposure: !1
                });
                return n
            }