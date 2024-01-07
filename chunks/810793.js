            "use strict";
            n.r(t), n.d(t, {
                ActivityBookmarkEmbedExperiment: function() {
                    return a
                }
            });
            var i = n("862205");
            let a = (0, i.createExperiment)({
                kind: "user",
                id: "2023-04_activity_launcher_embed",
                label: "Activity Launcher Embed",
                defaultConfig: {
                    activityBookmarkEmbedEnabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enable the Activity Launcher Embed in chat",
                    config: {
                        activityBookmarkEmbedEnabled: !0
                    }
                }]
            })