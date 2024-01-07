            "use strict";
            n.r(t), n.d(t, {
                areRoleSubscriptionsVisibleInGuild: function() {
                    return _
                },
                useRoleSubscriptionsVisibleInGuild: function() {
                    return E
                },
                useShowRoleSubscriptionsInChannelList: function() {
                    return f
                }
            }), n("222007");
            var i = n("446674"),
                a = n("551254"),
                l = n("250666"),
                s = n("465869"),
                r = n("38654"),
                u = n("305961"),
                o = n("638779"),
                d = n("49111");

            function c(e) {
                let [t, n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [u.default, r.default], i = t.getGuild(e);
                if (null == i) return !1;
                let a = (0, l.isCreatorMonetizationEnabledGuild)(i),
                    s = i.hasFeature(d.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE);
                if (a && s) return !0;
                let o = n.isViewingSubscriptionRoles(e);
                return !!o || !1
            }

            function _(e) {
                return !!c(e) || (0, o.computeHasRoleSubscriptionsInGuild)(e)
            }

            function E(e) {
                let t = (0, o.default)(e),
                    n = (0, i.useStateFromStores)([u.default, r.default], () => c(e, [u.default, r.default]), [e]),
                    {
                        shouldHideGuildPurchaseEntryPoints: a
                    } = (0, s.useShouldHideGuildPurchaseEntryPoints)(e);
                return !a && (n || t)
            }

            function f(e) {
                let t = E(e),
                    n = (0, a.useIsEligibleForSubscriptionsInGuildShop)(e, "useShowRoleSubscriptionsInChannelList");
                return t && !n
            }