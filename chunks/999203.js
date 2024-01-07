            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return o
                }
            });
            var n = l("446674"),
                a = l("650509"),
                s = l("90592"),
                i = l("713135"),
                r = l("49111");

            function o(e) {
                var t;
                let {
                    user: l,
                    guildId: o
                } = e, u = (0, n.useStateFromStores)([i.default], () => {
                    var e;
                    return null === (e = i.default.getUserProfile(l.id)) || void 0 === e ? void 0 : e.application
                }, [l]), {
                    applicationSubscriptionListingsShown: d
                } = (0, a.default)({
                    applicationId: null == u ? void 0 : u.id,
                    groupListingId: null == u ? void 0 : u.primarySkuId,
                    guildId: o
                }), {
                    activeSubscriptionListing: c,
                    activeEntitlement: f,
                    subscriptionGroupListing: m
                } = (0, a.useActiveSubscriptionListingForApplication)(null == u ? void 0 : u.id, o), p = null !== (t = null == m ? void 0 : m.sku_flags) && void 0 !== t ? t : 0, E = (0, s.isApplicationUserSubscription)(p) || null != o && o !== r.ME && (0, s.isApplicationGuildSubscription)(p), T = null != f;
                return d ? {
                    botUpgraded: T,
                    botUpgradeable: !T && d && E,
                    activeSubscriptionListing: c,
                    subscriptionGroupListing: m
                } : {
                    botUpgraded: !1,
                    botUpgradeable: !1,
                    activeSubscriptionListing: null,
                    subscriptionGroupListing: null
                }
            }