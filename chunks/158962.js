            "use strict";
            n.r(t), n.d(t, {
                ExperimentColonistMiniShelfBanner: function() {
                    return l
                }
            });
            var a = n("862205");
            let l = (0, a.createExperiment)({
                kind: "user",
                id: "2023-11_colonist_minishelf_banner",
                label: "Actvity Colonist Mini-Shelf Banner",
                defaultConfig: {
                    enableColonistMiniShelfBanner: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enable mini-shelf banner",
                    config: {
                        enableColonistMiniShelfBanner: !0
                    }
                }]
            })