            "use strict";
            n.r(t), n.d(t, {
                useGuildShopVisibleInGuild: function() {
                    return u
                },
                isGuildShopVisibleInGuild: function() {
                    return o
                }
            });
            var i = n("465869"),
                a = n("903724"),
                l = n("551254"),
                s = n("991148"),
                r = n("49111");

            function u(e) {
                let t = (0, l.useIsEligibleForGuildShopStorefront)(),
                    n = (0, l.useIsEligibleForSubscriptionsInGuildShop)(null == e ? void 0 : e.id, "channel_list"),
                    u = (0, a.useRoleSubscriptionsVisibleInGuild)(null == e ? void 0 : e.id),
                    o = (0, s.useGuildShopPreviewVisible)(e, "channel_list"),
                    {
                        shouldHideGuildPurchaseEntryPoints: d
                    } = (0, i.useShouldHideGuildPurchaseEntryPoints)(null == e ? void 0 : e.id);
                return !!t && null != e && !d && (e.hasFeature(r.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE) || n && u || o)
            }

            function o(e) {
                let t = (0, l.isEligibleForGuildShopStorefront)(),
                    n = (0, l.isEligibleForSubscriptionsInGuildShop)(null == e ? void 0 : e.id, "channel_list"),
                    i = (0, a.areRoleSubscriptionsVisibleInGuild)(null == e ? void 0 : e.id);
                return !!t && null != e && (e.hasFeature(r.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE) || n && i)
            }