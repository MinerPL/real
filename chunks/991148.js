            "use strict";
            n.r(t), n.d(t, {
                useGuildShopPreviewVisible: function() {
                    return d
                }
            });
            var i = n("65597"),
                a = n("151426"),
                l = n("10641"),
                s = n("287883"),
                r = n("957255"),
                u = n("551254"),
                o = n("49111");

            function d(e, t) {
                var n;
                let d = (0, u.useIsEligibleForGuildShopPreview)(t),
                    c = (0, l.useIsDismissibleContentDismissed)(a.DismissibleContent.SERVER_SHOP_PHANTOM_PREVIEW),
                    _ = (0, i.default)([r.default], () => null != e && r.default.can(o.Permissions.ADMINISTRATOR, e)),
                    E = null !== (n = null == e ? void 0 : e.hasFeature(o.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE)) && void 0 !== n && n,
                    f = (0, s.useGuildEligibleForGuildProducts)(null == e ? void 0 : e.id, "useGuildShopPreviewVisible"),
                    h = [o.GuildFeatures.CREATOR_MONETIZABLE, o.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL, o.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED].some(t => (null == e ? void 0 : e.hasFeature(t)) === !0);
                return null != e && _ && !E && h && d && f && !c
            }