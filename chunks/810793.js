            "use strict";
            n.r(t), n.d(t, {
                ActivityBookmarkEmbedExperiment: function() {
                    return i
                }
            });
            var r = n("862205");
            let i = (0, r.createExperiment)({
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