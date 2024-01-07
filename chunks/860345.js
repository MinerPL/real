            "use strict";
            n.r(t), n.d(t, {
                PaxVcTileActivitiesExperiment: function() {
                    return l
                }
            });
            var a = n("862205");
            let l = (0, a.createExperiment)({
                kind: "user",
                id: "2023-03_pax_vc_tile_activities",
                label: "PAX VC Tile Activities",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enable PAX VC Tile Activities",
                    config: {
                        enabled: !0
                    }
                }]
            })