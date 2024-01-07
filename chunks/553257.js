            "use strict";
            n.r(t), n.d(t, {
                experiment: function() {
                    return a
                },
                usePomeloEligibility: function() {
                    return l
                },
                getPomeloEligibility: function() {
                    return s
                }
            });
            var i = n("862205");
            let a = (0, i.createExperiment)({
                    kind: "user",
                    label: "Pomelo",
                    id: "2023-03_pomelo",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "enabled",
                        config: {
                            enabled: !0
                        }
                    }]
                }),
                l = () => {
                    let {
                        enabled: e
                    } = a.useExperiment({
                        location: "faf26d_1"
                    }, {
                        autoTrackExposure: !1
                    });
                    return e
                },
                s = () => {
                    let {
                        enabled: e
                    } = a.getCurrentConfig({
                        location: "faf26d_2"
                    }, {
                        autoTrackExposure: !1
                    });
                    return e
                }