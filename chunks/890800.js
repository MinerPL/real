            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return G
                }
            });
            var i = s("37983"),
                r = s("884691"),
                a = s("414456"),
                l = s.n(a),
                o = s("446674"),
                n = s("290381"),
                d = s("77078"),
                u = s("685665"),
                c = s("649844"),
                E = s("697218"),
                _ = s("625634"),
                T = s("476263"),
                I = s("978679"),
                N = s("118503"),
                f = s("719923"),
                R = s("617917"),
                g = s("49111"),
                m = s("646718"),
                M = s("782340"),
                S = s("310265"),
                G = function(e) {
                    let {
                        closeLayer: t,
                        guild: s,
                        onCtaVisibilityChange: a
                    } = e, G = (0, o.useStateFromStores)([E.default], () => E.default.getCurrentUser()), h = (0, o.useStateFromStores)([_.default], () => _.default.boostSlots), {
                        analyticsLocations: p
                    } = (0, u.default)(), B = r.useMemo(() => Object.keys(h).filter(e => {
                        let t = h[e];
                        return null != t.premiumGuildSubscription && t.premiumGuildSubscription.guildId === s.id
                    }), [h, s.id]);
                    return (0, i.jsxs)("div", {
                        className: S.guildStatus,
                        children: [(0, i.jsx)(T.default, {
                            className: S.guildIcon,
                            guild: s,
                            size: T.default.Sizes.LARGER
                        }), (0, i.jsx)(d.Heading, {
                            className: S.guildName,
                            color: "always-white",
                            variant: "text-lg/bold",
                            children: s.name
                        }), (0, i.jsxs)("div", {
                            className: S.guildBoostCountWrapper,
                            children: [(0, i.jsxs)("div", {
                                className: S.guildBoostCount,
                                children: [(0, i.jsx)(N.default, {
                                    className: l(S.guildBoostBadge, {
                                        [S.guildBoostBadgeWithBoosts]: s.premiumSubscriberCount > 0
                                    })
                                }), (0, i.jsx)(d.Text, {
                                    className: S.guildStatusCopy,
                                    variant: "text-md/bold",
                                    children: M.default.Messages.PREMIUM_GUILD_PERKS_MODAL_HEADER_SUBSCRIPTION_COUNT.format({
                                        subscriptions: s.premiumSubscriberCount
                                    })
                                })]
                            }), B.length > 0 ? (0, i.jsx)(d.Text, {
                                className: S.guildBoostCountCurrentUser,
                                variant: "text-sm/normal",
                                children: M.default.Messages.PREMIUM_GUILD_PERKS_MODAL_HEADER_USER_SUBSCRIPTION_COUNT.format({
                                    numSubscriptions: B.length
                                })
                            }) : null]
                        }), (0, i.jsxs)("div", {
                            className: S.guildBoostCtas,
                            children: [(0, i.jsx)(n.VisibilitySensor, {
                                onChange: a,
                                threshold: .9,
                                children: (0, i.jsx)("div", {
                                    className: l(S.guildBoostCta, S.guildBoostCtaBoostWrapper),
                                    children: (0, i.jsx)(R.default, {
                                        className: S.guildBoostCtaBoost,
                                        innerClassName: l(S.guildBoostCtaContent, S.guildBoostCtaBoostContent),
                                        buttonShineClassName: S.guildBoostCtaBoostShine,
                                        guild: s,
                                        analyticsLocation: {
                                            page: g.AnalyticsPages.PREMIUM_GUILD_USER_MODAL,
                                            section: g.AnalyticsSections.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                                            object: g.AnalyticsObjects.BUTTON_CTA,
                                            objectType: g.AnalyticsObjectTypes.BUY
                                        },
                                        closeLayer: t,
                                        color: d.Button.Colors.WHITE,
                                        size: d.Button.Sizes.LARGE,
                                        fullWidth: !0
                                    })
                                })
                            }), f.default.hasFreeBoosts(G) || f.default.isPremium(G, m.PremiumTypes.TIER_2) ? (0, i.jsxs)(d.Button, {
                                className: l(S.guildBoostCta, S.guildBoostCtaSecondary),
                                innerClassName: l(S.guildBoostCtaContent, S.guildBoostCtaGiftContent),
                                look: d.Button.Looks.OUTLINED,
                                color: d.Button.Colors.WHITE,
                                onClick: function() {
                                    (0, c.default)({
                                        initialPlanId: null,
                                        subscriptionTier: m.PremiumSubscriptionSKUs.TIER_2,
                                        isGift: !0,
                                        analyticsLocations: p,
                                        analyticsObject: {
                                            page: g.AnalyticsPages.PREMIUM_GUILD_USER_MODAL,
                                            section: g.AnalyticsSections.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                                            object: g.AnalyticsObjects.BUTTON_ICON,
                                            objectType: g.AnalyticsObjectTypes.GIFT
                                        },
                                        onClose: e => e && t()
                                    })
                                },
                                size: d.Button.Sizes.LARGE,
                                children: [(0, i.jsx)(I.default, {
                                    className: S.guildBoostCtaGiftIcon
                                }), M.default.Messages.PREMIUM_GUILD_PERKS_MODAL_GIFT_NITRO]
                            }) : (0, i.jsx)(d.Button, {
                                className: l(S.guildBoostCta, S.guildBoostCtaSecondary),
                                innerClassName: l(S.guildBoostCtaContent, S.guildBoostCtaSubscribeContent),
                                look: d.Button.Looks.OUTLINED,
                                color: d.Button.Colors.WHITE,
                                onClick: function() {
                                    (0, c.default)({
                                        initialPlanId: null,
                                        subscriptionTier: m.PremiumSubscriptionSKUs.TIER_2,
                                        analyticsLocations: p,
                                        analyticsObject: {
                                            page: g.AnalyticsPages.PREMIUM_GUILD_USER_MODAL,
                                            section: g.AnalyticsSections.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                                            object: g.AnalyticsObjects.BUTTON_ICON,
                                            objectType: g.AnalyticsObjectTypes.BUY
                                        },
                                        onClose: e => e && t()
                                    })
                                },
                                size: d.Button.Sizes.LARGE,
                                children: M.default.Messages.PREMIUM_GUILD_PERKS_MODAL_SUBSCRIBE_WITH_FREE_BOOSTS
                            })]
                        })]
                    })
                }