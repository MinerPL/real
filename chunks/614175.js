            "use strict";
            i.r(t), i.d(t, {
                ActivitiesGameNightExperiment: function() {
                    return a
                }
            });
            var l = i("862205");
            let a = (0, l.createExperiment)({
                kind: "user",
                id: "2023-03_activities_game_night_coach_mark",
                label: "Activities Game Night Experiment",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enable Activities Game Night",
                    config: {
                        enabled: !0
                    }
                }]
            })