            "use strict";
            l.r(t), l.d(t, {
                CollectiblesShopMarketingVariants: function() {
                    return a
                },
                default: function() {
                    return r
                }
            });
            var n, a, s = l("862205");
            (n = a || (a = {}))[n.DEFAULT = 0] = "DEFAULT", n[n.WINTER_2023_DROP = 1] = "WINTER_2023_DROP", n[n.MONSTER_DROP = 2] = "MONSTER_DROP";
            let i = (0, s.createExperiment)({
                kind: "user",
                id: "2023-12_collectibles_shop_marketing",
                label: "Collectibles Shop Marketing Variations",
                defaultConfig: {
                    variant: 0
                },
                treatments: [{
                    id: 1,
                    label: "Winter 2023",
                    config: {
                        variant: 1
                    }
                }, {
                    id: 2,
                    label: "Jan 2024",
                    config: {
                        variant: 2
                    }
                }]
            });
            var r = e => i.useExperiment({
                location: e
            }).variant