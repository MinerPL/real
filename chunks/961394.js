            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return l
                }
            });
            var a = s("862205");
            let n = (0, a.createExperiment)({
                kind: "user",
                id: "2020-12_guild_delete_feedback",
                label: "Guild Delete Feedback experiment",
                defaultConfig: {
                    showFeedback: !1
                },
                treatments: [{
                    id: 1,
                    label: "Show guild delete feedback",
                    config: {
                        showFeedback: !0
                    }
                }]
            });
            var l = n