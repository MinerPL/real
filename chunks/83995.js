            "use strict";
            n.r(t), n.d(t, {
                PollsExperiment: function() {
                    return l
                },
                PollsUserExperiment: function() {
                    return s
                }
            });
            var a = n("862205");
            let l = (0, a.createExperiment)({
                    kind: "guild",
                    id: "2023-09_guild_polls",
                    label: "Polls",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Enables creation of polls within a guild",
                        config: {
                            enabled: !0
                        }
                    }]
                }),
                s = (0, a.createExperiment)({
                    kind: "user",
                    id: "2023-10_poll_users",
                    label: "Polls User Experiment",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Enables poll messages",
                        config: {
                            enabled: !0
                        }
                    }]
                })