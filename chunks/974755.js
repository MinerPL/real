            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("414456"),
                u = n.n(i),
                l = n("446674"),
                o = n("77078"),
                s = n("51565"),
                a = n("95039"),
                d = n("863921"),
                c = n("26989"),
                f = n("697218"),
                h = n("580357"),
                _ = n("40469"),
                C = n("427459"),
                p = n("49111"),
                g = n("782340"),
                E = n("129818");

            function S(e) {
                let {
                    guild: t,
                    isBannerVisible: n,
                    disableBoostClick: i
                } = e, u = (0, l.useStateFromStores)([f.default, c.default], () => {
                    let e = f.default.getCurrentUser();
                    return c.default.isMember(t.id, null == e ? void 0 : e.id)
                }), {
                    premiumTier: s,
                    premiumSubscriberCount: h
                } = t;
                if (0 === h && s === p.BoostedGuildTiers.NONE) return null;
                let _ = e => {
                        e.stopPropagation(), e.preventDefault(), u && !i && (0, a.openGuildBoostingMarketingModal)({
                            guildId: t.id,
                            location: {
                                section: p.AnalyticsSections.GUILD_HEADER,
                                object: p.AnalyticsObjects.BOOST_GEM_ICON
                            }
                        })
                    },
                    S = s === p.BoostedGuildTiers.NONE ? g.default.Messages.PREMIUM_GUILD_HEADER_BADGE_NO_TIER : C.getTierName(s),
                    T = (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)("div", {
                            className: E.tierTooltipTitle,
                            children: S
                        }), (0, r.jsx)("div", {
                            children: g.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_SUBSCRIBER_COUNT_TOOLTIP.format({
                                subscriberCount: h
                            })
                        })]
                    });
                return (0, r.jsx)("div", {
                    className: E.guildIconContainer,
                    children: (0, r.jsx)(o.Tooltip, {
                        text: T,
                        position: "bottom",
                        "aria-label": null != S ? S : "",
                        children: e => (0, r.jsx)(o.Clickable, {
                            ...e,
                            className: E.premiumGuildIcon,
                            onClick: _,
                            children: (0, r.jsx)(d.default, {
                                premiumTier: s,
                                iconBackgroundClassName: n ? E.boostedGuildTierIconBackgroundWithVisibleBanner : null,
                                iconClassName: n && s !== p.BoostedGuildTiers.TIER_3 ? E.boostedGuildTierMutedIconWithVisibleBanner : null
                            })
                        })
                    })
                })
            }

            function T(e) {
                let {
                    guild: t,
                    disableColor: n,
                    disableBoostClick: i
                } = e, l = (0, s.default)(t);
                return l ? (0, r.jsx)("div", {
                    className: E.guildIconV2Container,
                    children: (0, r.jsx)(_.default, {
                        guild: t,
                        tooltipPosition: "bottom",
                        tooltipColor: o.Tooltip.Colors.PRIMARY,
                        className: u(E.guildBadge, {
                            [E.disableColor]: n
                        }),
                        disableBoostClick: i
                    })
                }) : (0, r.jsx)("div", {
                    className: E.guildIconContainer,
                    children: (0, r.jsx)(h.default, {
                        guild: t,
                        tooltipPosition: "bottom",
                        tooltipColor: o.Tooltip.Colors.PRIMARY,
                        className: u(E.guildBadge, {
                            [E.disableColor]: n
                        })
                    })
                })
            }

            function I(e) {
                let {
                    guild: t,
                    isBannerVisible: n,
                    disableBoostClick: i
                } = e, u = (0, s.default)(t);
                if (u) return (0, r.jsx)(T, {
                    guild: t,
                    disableColor: !1,
                    disableBoostClick: i
                });
                let l = t.hasFeature(p.GuildFeatures.VERIFIED) || t.hasFeature(p.GuildFeatures.PARTNERED);
                return l ? (0, r.jsx)(T, {
                    guild: t,
                    disableColor: !n
                }) : (0, r.jsx)(S, {
                    guild: t,
                    isBannerVisible: n,
                    disableBoostClick: i
                })
            }