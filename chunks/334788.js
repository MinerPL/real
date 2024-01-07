            "use strict";
            n.r(t), n.d(t, {
                ExperimentBirthdayActivitiesGdmTile: function() {
                    return s
                }
            });
            var a = n("862205");
            let s = (0, a.createExperiment)({
                kind: "user",
                id: "2023-04_birthday_activities_whats_new_gdm_tile",
                label: "Birthday Activities Whats New GDM Tile",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enable GDM tile",
                    config: {
                        enabled: !0
                    }
                }]
            })