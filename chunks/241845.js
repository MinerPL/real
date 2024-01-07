            "use strict";
            n.r(t), n.d(t, {
                UserTriggerAAExperiment: function() {
                    return i
                },
                useGlobalTriggerDebugging: function() {
                    return r
                }
            });
            var a = n("862205"),
                s = n("565034");
            let i = (0, a.createExperiment)({
                    kind: "user",
                    id: s.userTriggerExperimentId,
                    label: "Trigger Debugging User AA Experiment",
                    defaultConfig: {
                        inUse: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "On",
                        config: {
                            inUse: !0
                        }
                    }]
                }),
                l = (0, a.createExperiment)({
                    kind: "guild",
                    id: s.guildTriggerExperimentId,
                    label: "Trigger Debugging Guild AA Experiment",
                    defaultConfig: {
                        inUse: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "On",
                        config: {
                            inUse: !0
                        }
                    }]
                }),
                r = e => {
                    let t = "guild trigger debug",
                        n = "user trigger debug";
                    l.useExperiment({
                        location: t,
                        guildId: e
                    }, {
                        autoTrackExposure: !1
                    }), l.trackExposure({
                        location: t,
                        guildId: e
                    }), i.useExperiment({
                        location: n
                    }, {
                        autoTrackExposure: !1
                    }), i.trackExposure({
                        location: n
                    })
                }