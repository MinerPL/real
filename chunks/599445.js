            "use strict";
            n.r(t), n.d(t, {
                GuildShopStorefrontExperiment: function() {
                    return a
                },
                ShowGuildRoleSubInGuildShopExperiment: function() {
                    return l
                },
                GuildShopPreviewExperiment: function() {
                    return s
                }
            });
            var i = n("862205");
            let a = (0, i.createExperiment)({
                    kind: "user",
                    id: "2023-08_server_shop_storefront",
                    label: "Server Shop Storefront",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Enables Server shop storefront",
                        config: {
                            enabled: !0
                        }
                    }]
                }),
                l = (0, i.createExperiment)({
                    kind: "user",
                    id: "2023-09_show_server_sub_in_server_shop",
                    label: "Show server sub in server shop",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Enables showing server sub in server shop",
                        config: {
                            enabled: !0
                        }
                    }]
                }),
                s = (0, i.createExperiment)({
                    kind: "user",
                    id: "2023-09_server_shop_phantom_preview",
                    label: "Server Shop Phantom Preview",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Enables Server shop phantom preview",
                        config: {
                            enabled: !0
                        }
                    }]
                })