            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return A
                }
            });
            var o = r("37983");
            r("884691");
            var a = r("414456"),
                l = r.n(a),
                s = r("446674"),
                i = r("669491"),
                n = r("819855"),
                u = r("77078"),
                d = r("614858"),
                c = r("883474"),
                f = r("95039"),
                E = r("161778"),
                g = r("26989"),
                C = r("697218"),
                _ = r("427459"),
                I = r("931138"),
                p = r("791106"),
                h = r("888978"),
                N = r("419441"),
                T = r("583698"),
                m = r("992639"),
                R = r("390864"),
                D = r("486952"),
                x = r("49111"),
                L = r("782340"),
                B = r("279801");
            let w = {
                [d.BadgeCategory.STAFF]: {
                    IconComponent: R.default,
                    foregroundDarkColor: i.default.unsafe_rawColors.WHITE_400.css,
                    foregroundLightColor: i.default.unsafe_rawColors.WHITE_400.css,
                    backgroundDarkColor: i.default.unsafe_rawColors.GREEN_360.css,
                    backgroundLightColor: i.default.unsafe_rawColors.GREEN_360.css
                },
                [d.BadgeCategory.VERIFIED_AND_PARTNERED]: {
                    IconComponent: D.default,
                    foregroundDarkColor: i.default.unsafe_rawColors.WHITE_400.css,
                    foregroundLightColor: i.default.unsafe_rawColors.WHITE_400.css,
                    backgroundDarkColor: i.default.unsafe_rawColors.GREEN_360.css,
                    backgroundLightColor: i.default.unsafe_rawColors.GREEN_360.css
                },
                [d.BadgeCategory.VERIFIED]: {
                    IconComponent: D.default,
                    foregroundDarkColor: i.default.unsafe_rawColors.WHITE_400.css,
                    foregroundLightColor: i.default.unsafe_rawColors.WHITE_400.css,
                    backgroundDarkColor: i.default.unsafe_rawColors.GREEN_360.css,
                    backgroundLightColor: i.default.unsafe_rawColors.GREEN_360.css
                },
                [d.BadgeCategory.PARTNERED]: {
                    IconComponent: h.default,
                    foregroundDarkColor: i.default.unsafe_rawColors.WHITE_400.css,
                    foregroundLightColor: i.default.unsafe_rawColors.WHITE_400.css,
                    backgroundDarkColor: i.default.unsafe_rawColors.BRAND_500.css,
                    backgroundLightColor: i.default.unsafe_rawColors.BRAND_500.css
                },
                [d.BadgeCategory.COMMUNITY]: {
                    IconComponent: N.default,
                    foregroundDarkColor: i.default.unsafe_rawColors.PRIMARY_500.css,
                    foregroundLightColor: i.default.unsafe_rawColors.WHITE_400.css,
                    backgroundDarkColor: i.default.unsafe_rawColors.WHITE_400.css,
                    backgroundLightColor: i.default.unsafe_rawColors.PRIMARY_500.css,
                    premiumBackgroundColor: p.GradientCssUrls.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
                    premiumForegroundColor: i.default.unsafe_rawColors.WHITE_400.css
                },
                [d.BadgeCategory.DISCOVERABLE]: {
                    IconComponent: T.default,
                    foregroundDarkColor: i.default.unsafe_rawColors.PRIMARY_500.css,
                    foregroundLightColor: i.default.unsafe_rawColors.WHITE_400.css,
                    backgroundDarkColor: i.default.unsafe_rawColors.WHITE_400.css,
                    backgroundLightColor: i.default.unsafe_rawColors.PRIMARY_500.css,
                    premiumBackgroundColor: p.GradientCssUrls.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
                    premiumForegroundColor: i.default.unsafe_rawColors.WHITE_400.css
                },
                [d.BadgeCategory.NONE]: {}
            };

            function M(e) {
                let {
                    guildTraits: t
                } = e;
                return (0, o.jsxs)("div", {
                    className: B.tooltipPremiumFooterContainer,
                    children: [(0, o.jsxs)("div", {
                        className: l(B.tooltipPremiumFooterSegment, B.tooltipPremiumFooterTierSegment),
                        children: [(0, o.jsx)(m.default, {
                            width: 18,
                            height: 18,
                            className: B.gemIcon
                        }), (0, o.jsx)(u.Text, {
                            variant: "text-xs/semibold",
                            color: "always-white",
                            children: _.getTierName(t.premiumTier)
                        })]
                    }), (0, o.jsx)("div", {
                        className: l(B.tooltipPremiumFooterSegment),
                        children: (0, o.jsx)(u.Text, {
                            variant: "text-xs/semibold",
                            color: "always-white",
                            children: L.default.Messages.SERVER_BADGE_PREMIUM_FOOTER_BOOST_COUNT.format({
                                count: t.premiumSubscriberCount
                            })
                        })
                    })]
                })
            }

            function v(e) {
                let {
                    badgeType: t,
                    guildTraits: r
                } = e, {
                    tooltipTitle: a,
                    tooltipSubtitle: l,
                    tooltipDescription: s
                } = function(e, t) {
                    let r = t === c.GuildVisibility.PUBLIC ? L.default.Messages.SERVER_BADGE_DESCRIPTION_ANYONE_CAN_JOIN : L.default.Messages.SERVER_BADGE_DESCRIPTION_INVITE_ONLY;
                    switch (e) {
                        case d.BadgeCategory.STAFF:
                            return {
                                tooltipTitle: L.default.Messages.INTERNAL_EMPLOYEE_ONLY, tooltipSubtitle: L.default.Messages.INTERNAL_EMPLOYEE_ONLY, tooltipDescription: L.default.Messages.INTERNAL_EMPLOYEE_ONLY
                            };
                        case d.BadgeCategory.VERIFIED:
                            return {
                                tooltipTitle: L.default.Messages.SERVER_BADGE_TITLE_COMMUNITY, tooltipSubtitle: L.default.Messages.GUILD_VERIFIED, tooltipDescription: r
                            };
                        case d.BadgeCategory.PARTNERED:
                            return {
                                tooltipTitle: L.default.Messages.SERVER_BADGE_TITLE_COMMUNITY, tooltipSubtitle: L.default.Messages.GUILD_PARTNERED, tooltipDescription: r
                            };
                        case d.BadgeCategory.VERIFIED_AND_PARTNERED:
                            return {
                                tooltipTitle: L.default.Messages.SERVER_BADGE_TITLE_COMMUNITY, tooltipSubtitle: L.default.Messages.GUILD_VERIFIED_AND_PARTNERED, tooltipDescription: r
                            };
                        case d.BadgeCategory.COMMUNITY:
                            return {
                                tooltipTitle: L.default.Messages.SERVER_BADGE_TITLE_COMMUNITY, tooltipDescription: L.default.Messages.SERVER_BADGE_DESCRIPTION_INVITE_ONLY
                            };
                        case d.BadgeCategory.DISCOVERABLE:
                            return {
                                tooltipTitle: L.default.Messages.SERVER_BADGE_TITLE_COMMUNITY, tooltipDescription: L.default.Messages.SERVER_BADGE_DESCRIPTION_ANYONE_CAN_JOIN
                            };
                        default:
                            return {
                                tooltipTitle: L.default.Messages.SERVER_BADGE_TITLE_UNKNOWN
                            }
                    }
                }(t, r.visibility);
                return (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsxs)("div", {
                        className: B.tooltipBodyContainer,
                        children: [(0, o.jsx)(u.Text, {
                            color: "interactive-active",
                            variant: "text-xs/bold",
                            children: a
                        }), null != l ? (0, o.jsx)(u.Text, {
                            color: "text-muted",
                            variant: "text-xs/medium",
                            children: l
                        }) : null, null != s ? (0, o.jsx)(u.Text, {
                            color: "text-muted",
                            variant: "text-xs/medium",
                            children: s
                        }) : null]
                    }), r.premium ? (0, o.jsx)(M, {
                        guildTraits: r
                    }) : null]
                })
            }

            function A(e) {
                let t, r, {
                        guild: a,
                        tooltipColor: l = u.Tooltip.Colors.BRAND,
                        tooltipPosition: i,
                        className: _,
                        flowerStarClassName: p,
                        iconClassName: h,
                        badgeStrokeColor: N,
                        badgeColor: T,
                        size: m = 16,
                        disableBoostClick: R,
                        "aria-label": D = !1
                    } = e,
                    L = (0, s.useStateFromStores)([C.default, g.default], () => {
                        let e = C.default.getCurrentUser();
                        return g.default.isMember(null == a ? void 0 : a.id, null == e ? void 0 : e.id)
                    }),
                    M = (0, s.useStateFromStores)([E.default], () => E.default.theme),
                    A = (0, c.getGuildTraits)(a),
                    O = (0, d.getBadgeCategory)(A);
                if (O === d.BadgeCategory.NONE) return null;
                let S = w[O],
                    {
                        IconComponent: V,
                        backgroundDarkColor: b,
                        backgroundLightColor: G,
                        foregroundDarkColor: j,
                        foregroundLightColor: y,
                        premiumBackgroundColor: P,
                        premiumForegroundColor: k
                    } = S;
                if (null == V) return null;
                A.premium && (t = k, r = P);
                let F = (0, n.isThemeDark)(M) ? j : y,
                    U = (0, n.isThemeDark)(M) ? b : G;
                t = null != t ? t : F, r = null != r ? r : U;
                let Y = e => {
                    A.premium && L && !R && (e.stopPropagation(), e.preventDefault(), (0, f.openGuildBoostingMarketingModal)({
                        guildId: a.id,
                        location: {
                            section: x.AnalyticsSections.GUILD_HEADER,
                            object: x.AnalyticsObjects.BOOST_GEM_ICON
                        }
                    }))
                };
                return (0, o.jsx)(u.Tooltip, {
                    color: l,
                    position: i,
                    "aria-label": D,
                    text: (0, o.jsx)(v, {
                        badgeType: O,
                        guildTraits: A
                    }),
                    tooltipContentClassName: B.tooltipRemovePadding,
                    children: e => (0, o.jsx)(u.Clickable, {
                        onClick: Y,
                        children: (0, o.jsx)(I.default, {
                            ...e,
                            className: _,
                            flowerStarClassName: p,
                            color: null != r ? r : T,
                            stroke: N,
                            size: m,
                            children: (0, o.jsx)(V, {
                                className: h,
                                color: t
                            })
                        })
                    })
                })
            }