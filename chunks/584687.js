            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var i = (0, n("862205").createExperiment)({
                kind: "user",
                id: "2023-09_decoupled_game_clipping",
                label: "Test decoupled game clipping",
                defaultConfig: {
                    enableDecoupledGameClipping: !1
                },
                treatments: [{
                    id: 1,
                    label: "Decoupled Game Clipping",
                    config: {
                        enableDecoupledGameClipping: !0
                    }
                }]
            })