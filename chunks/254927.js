            "use strict";
            n.r(t), n.d(t, {
                isClydeEnabledinGdms: function() {
                    return l
                }
            });
            var i = n("862205");
            let a = (0, i.createExperiment)({
                kind: "user",
                id: "2023-06_clyde_ai_gdm",
                label: "Clyde in DMs/GDMs",
                defaultConfig: {
                    isClydeEnabledinGdms: !1
                },
                treatments: [{
                    id: 1,
                    label: "enable clyde in gdms",
                    config: {
                        isClydeEnabledinGdms: !0
                    }
                }]
            });

            function l() {
                let {
                    isClydeEnabledinGdms: e
                } = a.getCurrentConfig({
                    location: "38acdb_1"
                }, {
                    autoTrackExposure: !1
                });
                return e
            }