            "use strict";
            n.r(t), n.d(t, {
                ExperimentDevelopersGetDeveloperShelf: function() {
                    return a
                }
            });
            var i = n("862205");
            let a = (0, i.createExperiment)({
                kind: "user",
                id: "2024-01_developers_get_developer_shelf",
                label: "Developers Get Developer Shelf",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enable developers get developer shelf",
                    config: {
                        enabled: !0
                    }
                }]
            })