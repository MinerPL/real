            "use strict";
            n.r(t), n.d(t, {
                GuildRoleSubscriptionCollapsibleCardBasicInfo: function() {
                    return p
                }
            }), n("222007");
            var a = n("37983");
            n("884691");
            var l = n("77078"),
                s = n("837899"),
                i = n("425190"),
                r = n("153160"),
                u = n("577357"),
                o = n("167109"),
                d = n("373622"),
                c = n("944256"),
                f = n("782340"),
                h = n("948286");
            let p = e => {
                let {
                    listingId: t,
                    isListingPublished: n,
                    expanded: p,
                    onToggleExpanded: m
                } = e, E = (0, d.default)(), [C] = o.useName(t), [S] = o.useImage(t, E), [g] = o.useSubscriptionPlan(t);
                return (0, a.jsxs)("div", {
                    className: h.container,
                    children: [(0, a.jsx)(c.GuildRoleSubscriptionCardTierImage, {
                        image: S
                    }), (0, a.jsxs)("div", {
                        className: h.tierTextInfoContainer,
                        children: [(0, a.jsx)(c.GuildRoleSubscriptionCardTierName, {
                            listingName: C
                        }), (0, a.jsxs)("div", {
                            className: h.tierPriceContainer,
                            children: [!n && (0, a.jsx)(c.GuildRoleSubscriptionCardDraftTierBadge, {}), (0, a.jsxs)(l.Text, {
                                variant: "text-xs/normal",
                                className: h.tierPrice,
                                children: [(0, r.formatPrice)(g.price, g.currency), " ", f.default.Messages.GUILD_ROLE_SUBSCRIPTION_AMOUNT_PER_PERIOD.format({
                                    period: (0, u.formatPlanInterval)({
                                        interval: g.interval,
                                        interval_count: g.interval_count
                                    })
                                })]
                            })]
                        })]
                    }), (0, a.jsx)(l.Clickable, {
                        onClick: m,
                        children: p ? (0, a.jsx)(i.default, {
                            className: h.toggleButton
                        }) : (0, a.jsx)(s.default, {
                            className: h.toggleButton
                        })
                    })]
                })
            }