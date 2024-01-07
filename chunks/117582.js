            "use strict";
            n.r(t), n.d(t, {
                VcTileActivityExperimentType: function() {
                    return l
                },
                VcTileActivitiesEntryPointExperiment: function() {
                    return i
                }
            });
            var a, l, s = n("862205");
            (a = l || (l = {})).CONTROL = "CONTROL", a.ONE_OR_TWO_USERS = "ONE_OR_TWO_USERS", a.ANY_NUMBER_OF_USERS = "ANY_NUMBER_OF_USERS";
            let i = (0, s.createExperiment)({
                kind: "user",
                id: "2023-01_vc_tile_activities_entry_point",
                label: "VC Tile Activities Entry Point",
                defaultConfig: {
                    vcTileActivityExperimentType: "CONTROL"
                },
                treatments: [{
                    id: 1,
                    label: "Enable one or two users VC Tile Activities Entry Point",
                    config: {
                        vcTileActivityExperimentType: "ONE_OR_TWO_USERS"
                    }
                }, {
                    id: 2,
                    label: "Enable any number of users VC Tile Activities Entry Point",
                    config: {
                        vcTileActivityExperimentType: "ANY_NUMBER_OF_USERS"
                    }
                }]
            })