            "use strict";
            n.r(t), n.d(t, {
                PROGRESS_BAR_CONTAINER_HEIGHT: function() {
                    return O
                },
                PROGRESS_BAR_CONTAINER_HEIGHT_WITH_MARGIN: function() {
                    return y
                },
                default: function() {
                    return b
                }
            }), n("222007");
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("907002"),
                o = n("446674"),
                u = n("769846"),
                d = n("77078"),
                c = n("272030"),
                f = n("206230"),
                h = n("812204"),
                C = n("716241"),
                p = n("685665"),
                m = n("592407"),
                E = n("957255"),
                g = n("461380"),
                I = n("427459"),
                S = n("159885"),
                _ = n("514256"),
                N = n("223817"),
                T = n("379532"),
                A = n("944305"),
                L = n("49111"),
                v = n("782340"),
                x = n("503561");
            let R = (0, S.cssValueToNumber)(u.default.GUILD_BOOSTING_SIDEBAR_DISPLAY_CONDITIONAL_BOTTOM_MARGIN),
                M = e => {
                    let {
                        guild: t,
                        onSelect: n
                    } = e, [s, i] = a.useState(t.premiumProgressBarEnabled), [r, u] = a.useState(!1), f = (0, o.useStateFromStores)([E.default], () => E.default.can(L.Permissions.MANAGE_GUILD, t)), h = async () => {
                        f && (u(!0), await m.default.saveGuild(t.id, {
                            premiumProgressBarEnabled: !s
                        }), i(!s), u(!1))
                    };
                    return (0, l.jsx)(d.Menu, {
                        navId: "progress-bar-context",
                        onClose: c.closeContextMenu,
                        "aria-label": v.default.Messages.PROGRESS_BAR_ACTIONS_MENU_LABEL,
                        onSelect: n,
                        children: (0, l.jsx)(d.MenuCheckboxItem, {
                            id: "progress-bar-enabled",
                            label: v.default.Messages.GUILD_ENABLE_PROGRESS_BAR,
                            checked: s,
                            disabled: r,
                            action: h
                        })
                    })
                },
                O = 57,
                y = O + R,
                D = {
                    tension: 180,
                    friction: 80
                };
            var b = e => {
                let {
                    guild: t,
                    withMargin: n
                } = e, {
                    analyticsLocations: s
                } = (0, p.default)(h.default.GUILD_BOOSTING_SIDEBAR_DISPLAY), {
                    premiumSubscriberCount: u,
                    id: m
                } = t, S = (0, I.getGuildTierFromAppliedBoostCount)(u, m), R = (0, I.getNextTier)(S, t.id), O = null == R, y = null != R ? R : S, b = (0, o.useStateFromStores)([N.default], () => {
                    var e;
                    return null !== (e = N.default.getCountForGuild(m)) && void 0 !== e ? e : 0
                }), j = (0, o.useStateFromStores)([f.default], () => f.default.useReducedMotion), G = (0, o.useStateFromStores)([E.default], () => E.default.can(L.Permissions.MANAGE_GUILD, t));
                a.useEffect(() => {
                    b !== u && (0, _.updateGuildPremiumSubscriptionCount)(m, u)
                }, [m, b, u]);
                let U = "".concat(Math.min(100, u / (0, I.getAppliedGuildBoostsRequired)(t.id)[y] * 100), "%"),
                    {
                        current: P
                    } = a.useRef(U),
                    w = {
                        from: {
                            width: b === u ? P : "0%"
                        },
                        to: {
                            width: U
                        },
                        config: D,
                        immediate: j
                    },
                    [F, B] = (0, r.useSpring)(() => w),
                    V = () => {
                        (0, C.trackWithMetadata)(L.AnalyticEvents.PREMIUM_GUILD_PROMOTION_OPENED, {
                            location: {
                                section: L.AnalyticsSections.PREMIUM_GUILD_PROGRESS_BAR
                            },
                            guild_id: m,
                            location_stack: s
                        }), (0, T.default)({
                            analyticsLocations: s,
                            analyticsSourceLocation: {
                                page: L.AnalyticsPages.GUILD_CHANNEL,
                                section: L.AnalyticsSections.PREMIUM_GUILD_PROGRESS_BAR,
                                object: L.AnalyticsObjects.TOOLTIP
                            },
                            guild: t,
                            perks: (0, A.premiumProgressBarUpsellPerks)(),
                            perkIntro: v.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_MODAL_PROGRESS_BAR_HEADER
                        })
                    },
                    H = v.default.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_GOAL.format({
                        levelName: (0, I.getShortenedTierName)(y)
                    }),
                    k = v.default.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_PROGRESS_BAR_BLURB.format({
                        numBoosts: u,
                        numTotal: (0, I.getAppliedGuildBoostsRequired)(t.id)[y]
                    });
                return O && (H = (0, I.getShortenedTierName)(y), k = v.default.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_PROGRESS_BAR_COMPLETED_BLURB.format({
                    numBoosts: u
                })), (0, l.jsx)(d.Tooltip, {
                    text: O ? v.default.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_NUDGE_TOOLTIP_COMPLETE : v.default.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_NUDGE_TOOLTIP.format({
                        levelName: (0, I.getTierName)(y)
                    }),
                    color: d.Tooltip.Colors.BLACK,
                    position: "top",
                    delay: 200,
                    hideOnClick: !0,
                    children: e => (0, l.jsxs)(d.Clickable, {
                        ...e,
                        onClick: V,
                        onMouseEnter: () => {
                            var t;
                            null === (t = e.onMouseEnter) || void 0 === t || t.call(e), B(w)
                        },
                        className: i(x.container, {
                            [x.containerWithMargin]: n
                        }),
                        onContextMenu: e => {
                            G && (0, c.openContextMenu)(e, e => (0, l.jsx)(M, {
                                ...e,
                                guild: t
                            }))
                        },
                        children: [(0, l.jsxs)("div", {
                            className: x.textArea,
                            children: [(0, l.jsx)("div", {
                                className: x.goalTextContainer,
                                children: (0, l.jsx)(d.Text, {
                                    className: x.goalText,
                                    color: "interactive-active",
                                    variant: "text-xs/bold",
                                    children: H
                                })
                            }), (0, l.jsxs)("div", {
                                className: x.progressFraction,
                                children: [(0, l.jsx)(d.Text, {
                                    color: "interactive-normal",
                                    variant: "text-xs/normal",
                                    children: k
                                }), (0, l.jsx)(g.default, {
                                    className: x.count,
                                    height: 16,
                                    width: 16,
                                    direction: g.default.Directions.RIGHT
                                })]
                            })]
                        }), (0, l.jsxs)("div", {
                            className: i(x.progressBarContainer, {
                                [x.progressBarContainerComplete]: O
                            }),
                            children: [(0, l.jsx)(r.animated.div, {
                                className: x.progressBar,
                                style: F
                            }), O ? (0, l.jsx)("span", {
                                "aria-label": v.default.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_PROGRESS_BAR_TADA_ICON_ALT_TEXT,
                                role: "img",
                                className: x.tadaIcon,
                                children: "\uD83C\uDF89"
                            }) : null]
                        })]
                    })
                })
            }