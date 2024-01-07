            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("299285"),
                a = n("49111");

            function l(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                    l = i.default.getApplication(e.applicationId),
                    s = e.getPrice(),
                    r = e.getPrice(null, !1),
                    u = {
                        sku_id: e.id,
                        sku_type: e.type,
                        application_id: e.applicationId,
                        application_name: null != l ? l.name : null,
                        store_title: e.name,
                        distribution_type: e.premium ? "premium" : "distribution"
                    },
                    o = null;
                n && (o = {
                    price: null != s ? s.amount : null,
                    regular_price: null != r ? r.amount : null,
                    currency: null != s ? s.currency : null
                });
                let d = null;
                return t && (d = {
                    has_single_player: e.hasFeature(a.SKUFeatureTypes.SINGLE_PLAYER),
                    has_online_multiplayer: e.hasFeature(a.SKUFeatureTypes.ONLINE_MULTIPLAYER),
                    has_local_multiplayer: e.hasFeature(a.SKUFeatureTypes.LOCAL_MULTIPLAYER),
                    has_pvp_features: e.hasFeature(a.SKUFeatureTypes.PVP),
                    has_local_coop: e.hasFeature(a.SKUFeatureTypes.LOCAL_COOP),
                    has_online_coop: e.hasFeature(a.SKUFeatureTypes.ONLINE_COOP),
                    has_cross_platform: e.hasFeature(a.SKUFeatureTypes.CROSS_PLATFORM),
                    has_rich_presence: e.hasFeature(a.SKUFeatureTypes.RICH_PRESENCE),
                    has_game_invites: e.hasFeature(a.SKUFeatureTypes.DISCORD_GAME_INVITES),
                    has_spectator_mode: e.hasFeature(a.SKUFeatureTypes.SPECTATOR_MODE),
                    has_controller_support: e.hasFeature(a.SKUFeatureTypes.CONTROLLER_SUPPORT),
                    has_cloud_saves: e.hasFeature(a.SKUFeatureTypes.CLOUD_SAVES),
                    has_secure_networking: e.hasFeature(a.SKUFeatureTypes.SECURE_NETWORKING)
                }), {
                    ...u,
                    ...o,
                    ...d
                }
            }