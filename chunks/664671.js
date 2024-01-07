            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return p
                }
            }), s("424973");
            var a = s("37983"),
                n = s("884691"),
                l = s("446674"),
                i = s("77078"),
                r = s("206230"),
                o = s("626301"),
                d = s("697218"),
                u = s("521012"),
                c = s("427459"),
                S = s("719923"),
                E = s("560437"),
                f = s("397723"),
                m = s("717266"),
                T = s("49111"),
                _ = s("782340"),
                g = s("152089");

            function h(e) {
                let {
                    guildBoostSlot: t,
                    isCancellable: s,
                    onCancel: l,
                    onUncancel: r,
                    premiumSubscription: o,
                    useReducedMotion: d
                } = e, u = n.useMemo(() => null != t.cooldownEndsAt ? new Date(t.cooldownEndsAt) : null, [t]), S = (0, c.isGuildBoostSlotCanceled)(t);
                return (0, a.jsxs)("li", {
                    className: g.unappliedGuildBoostSlot,
                    children: [(0, a.jsxs)("div", {
                        className: g.unappliedGuildBoostSlotContentPrimary,
                        children: [(0, a.jsx)(m.default, {
                            className: g.unappliedGuildBoostSlotIcon,
                            hasCooldown: t.isOnCooldown(),
                            isCanceled: S,
                            useReducedMotion: d
                        }), S && null != o ? (0, a.jsx)(i.Text, {
                            color: "text-muted",
                            variant: "text-sm/medium",
                            children: _.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_PENDING_CANCELATION.format({
                                date: o.currentPeriodEnd
                            })
                        }) : t.isOnCooldown() && null != u ? (0, a.jsx)(f.default, {
                            cooldown: u.getTime()
                        }) : (0, a.jsx)(i.Text, {
                            className: g.unappliedGuildBoostSlotDescription,
                            color: "text-muted",
                            variant: "text-sm/medium",
                            children: _.default.Messages.GUILD_BOOSTING_USER_SETTINGS_UNAPPLIED_GUILD_BOOST_DESCRIPTION
                        })]
                    }), (0, a.jsxs)("div", {
                        className: g.unappliedGuildBoostSlotContentSecondary,
                        children: [s && !S && (0, a.jsx)(i.Button, {
                            className: g.unappliedGuildBoostSlotCta,
                            color: i.Button.Colors.PRIMARY,
                            look: i.Button.Looks.LINK,
                            onClick: () => l(t),
                            size: i.Button.Sizes.NONE,
                            children: _.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_SLOT_CANCEL_BUTTON
                        }), S && (0, a.jsx)(i.Button, {
                            className: g.unappliedGuildBoostSlotCta,
                            color: i.Button.Colors.PRIMARY,
                            look: i.Button.Looks.LINK,
                            onClick: () => r(t),
                            size: i.Button.Sizes.NONE,
                            children: _.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_SLOT_UNCANCEL_BUTTON
                        })]
                    })]
                }, t.id)
            }

            function I(e) {
                (0, i.openModalLazy)(async () => {
                    let {
                        default: t
                    } = await s.el("933182").then(s.bind(s, "933182"));
                    return s => (0, a.jsx)(t, {
                        ...s,
                        guildBoostSlot: e
                    })
                })
            }

            function N(e) {
                (0, i.openModalLazy)(async () => {
                    let {
                        default: t
                    } = await s.el("738400").then(s.bind(s, "738400"));
                    return s => (0, a.jsx)(t, {
                        ...s,
                        guildBoostSlotId: e.id
                    })
                })
            }
            var p = function(e) {
                let {
                    guildBoostSlots: t
                } = e, f = (0, l.useStateFromStores)([u.default], () => u.default.getPremiumTypeSubscription()), m = (0, l.useStateFromStores)([r.default], () => r.default.useReducedMotion), p = (0, l.useStateFromStores)([d.default], () => d.default.getCurrentUser()), {
                    appliedGuildBoostSlots: C,
                    unappliedGuildBoostSlots: A,
                    numActiveGuildBoostSlots: O
                } = n.useMemo(() => {
                    let e = [],
                        s = [],
                        a = 0;
                    return t.forEach(t => {
                        !(0, c.isGuildBoostSlotCanceled)(t) && a++, null != t.premiumGuildSubscription ? e.push(t) : s.push(t)
                    }), {
                        appliedGuildBoostSlots: e,
                        unappliedGuildBoostSlots: s,
                        numActiveGuildBoostSlots: a
                    }
                }, [t]), x = null != f ? S.default.getNumIncludedPremiumGuildSubscriptionSlots(f.planId) : 0, M = Math.max(0, x - C.length), R = O > x, v = x === t.length, L = v && M === x ? x : 1, D = n.useMemo(() => {
                    let e = [];
                    for (let t = 0; t < L; t++) e.push((0, a.jsx)(E.default, {
                        className: g.headerBoostGem,
                        useReducedMotion: m
                    }, t));
                    return e
                }, [L, m]), P = n.useMemo(() => A.find(e => e.isAvailable()), [A]);
                if (0 === A.length) return null;
                let j = A.length;
                return (0, a.jsxs)("div", {
                    className: g.wrapper,
                    children: [(0, a.jsx)("svg", {
                        className: g.border,
                        children: (0, a.jsx)("rect", {
                            className: g.borderRect,
                            height: "100%",
                            width: "100%"
                        })
                    }), (0, a.jsxs)("div", {
                        className: g.header,
                        children: [(0, a.jsxs)("div", {
                            className: g.headerContentPrimary,
                            children: [(0, a.jsx)("div", {
                                className: g.headerBoostGems,
                                children: D
                            }), (0, a.jsxs)("div", {
                                className: g.headerCopy,
                                children: [(0, a.jsx)(i.Heading, {
                                    className: g.headerHeading,
                                    variant: "heading-lg/bold",
                                    children: v ? _.default.Messages.GUILD_BOOSTING_USER_SETTINGS_HEADING_UNAPPLIED_GUILD_BOOST_HEADING_INCLUDED_WITH_SUBSCRIPTION.format({
                                        numUnappliedGuildBoostSlots: j
                                    }) : _.default.Messages.GUILD_BOOSTING_USER_SETTINGS_HEADING_UNAPPLIED_GUILD_BOOST_HEADING_V2.format({
                                        numUnappliedGuildBoostSlots: j
                                    })
                                }), (0, a.jsx)(i.Text, {
                                    className: g.headerSubheading,
                                    color: "text-muted",
                                    variant: "text-sm/normal",
                                    children: S.default.isPremium(p) ? _.default.Messages.GUILD_BOOSTING_USER_SETTINGS_HEADING_UNAPPLIED_GUILD_BOOST_SUBHEADING_WITH_PREMIUM_SUBSCRIPTION.format({
                                        numUnappliedGuildBoostSlots: j,
                                        learnMoreHook: (e, t) => (0, a.jsx)(i.Clickable, {
                                            className: g.headerLearnMoreLink,
                                            tag: "span",
                                            onClick: () => {
                                                (0, o.navigateToPremiumMarketingPage)()
                                            },
                                            children: e
                                        }, t)
                                    }) : _.default.Messages.GUILD_BOOSTING_USER_SETTINGS_HEADING_UNAPPLIED_GUILD_BOOST_SUBHEADING.format({
                                        numUnappliedGuildBoostSlots: j
                                    })
                                })]
                            })]
                        }), (0, a.jsx)("div", {
                            className: g.headerContentSecondary,
                            children: (0, a.jsx)(i.Tooltip, {
                                shouldShow: null == P,
                                text: _.default.Messages.GUILD_BOOSTING_USER_SETTINGS_NO_AVAILABLE_GUILD_BOOST_SLOTS,
                                children: e => (0, a.jsx)(i.Button, {
                                    ...e,
                                    disabled: null == P,
                                    onClick: null != P ? () => {
                                        var e;
                                        return e = P, void(0, i.openModalLazy)(async () => {
                                            let {
                                                default: t
                                            } = await s.el("247760").then(s.bind(s, "247760"));
                                            return s => (0, a.jsx)(t, {
                                                ...s,
                                                guildBoostSlots: [e],
                                                locationSection: T.AnalyticsSections.SETTINGS_PREMIUM
                                            })
                                        })
                                    } : void 0,
                                    children: _.default.Messages.GUILD_BOOSTING_USER_SETTINGS_BOOST_ANY_SERVER
                                })
                            })
                        })]
                    }), !v && (0, a.jsx)("ul", {
                        className: g.unappliedBoostSlots,
                        children: A.map(e => (0, a.jsx)(h, {
                            guildBoostSlot: e,
                            isCancellable: R,
                            onCancel: I,
                            onUncancel: N,
                            premiumSubscription: f,
                            useReducedMotion: m
                        }, e.id))
                    })]
                })
            }