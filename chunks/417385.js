            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return M
                }
            }), s("222007");
            var a, n, l, i, r = s("37983"),
                o = s("884691"),
                d = s("414456"),
                u = s.n(d),
                c = s("907002"),
                E = s("77078"),
                _ = s("983065"),
                T = s("160604"),
                I = s("879473"),
                S = s("912702"),
                N = s("381546"),
                g = s("45029"),
                f = s("956089"),
                A = s("427459"),
                L = s("49111"),
                m = s("782340"),
                C = s("765565");
            let O = {
                    tension: 200,
                    friction: 20
                },
                h = {
                    ...O,
                    clamp: !0
                };

            function R(e) {
                let [t, s] = o.useState(0), {
                    numUnlocked: a,
                    numRequired: n
                } = e, l = () => {
                    s(1)
                }, i = () => {
                    s(2)
                }, d = 2 === t, _ = 1 === t;
                if (!(!(a >= n) && a / n >= .8) || d) return null;
                let T = _ || d ? C.hidden : null,
                    S = _ ? I.default.Stages.FLYING : I.default.Stages.HOVERING;
                return (0, r.jsx)(c.Spring, {
                    from: {
                        opacity: 0
                    },
                    to: {
                        opacity: 1
                    },
                    config: h,
                    children: e => (0, r.jsxs)(c.animated.div, {
                        className: C.tierClose,
                        style: e,
                        children: [(0, r.jsx)(I.default, {
                            className: C.tierCloseMechaWumpus,
                            stage: S,
                            onFlyingComplete: i
                        }), (0, r.jsx)("div", {
                            className: u(C.tierCloseHint, T),
                            children: m.default.Messages.GUILD_SETTINGS_PREMIUM_GUILD_CLOSE_HINT.format({
                                numLeft: n - a
                            })
                        }), (0, r.jsx)(E.Clickable, {
                            onClick: l,
                            className: u(C.tierCloseClose, T),
                            children: (0, r.jsx)(N.default, {
                                className: C.tierCloseCloseIcon
                            })
                        })]
                    })
                })
            }

            function D(e) {
                let {
                    withCardBody: t,
                    isAnimatedTo: s,
                    hasAnimatedUnlocked: a,
                    onSetRef: n,
                    tier: l,
                    showHeaderLockStatus: i,
                    headerButton: d = null,
                    subscriptionsRequired: E,
                    subscriptionCount: _,
                    className: T
                } = e, I = e => {
                    null == n || n(e)
                }, [N, g] = o.useState(0);
                return o.useLayoutEffect(() => {
                    s && g(1)
                }, [s]), (0, r.jsx)(c.Spring, {
                    from: {
                        unlockedTranslateY: 50
                    },
                    to: {
                        unlockedTranslateY: 0 === N ? 50 : 0
                    },
                    config: O,
                    children: e => (0, r.jsx)("div", {
                        className: u({
                            [C.tierHeaderWithoutCardBody]: !t,
                            [C.tierHeaderUnlocked]: a,
                            [C.tierHeaderLocked]: !a
                        }, T),
                        ref: I,
                        children: (0, r.jsxs)("div", {
                            className: C.tierHeaderContent,
                            children: [(0, r.jsx)(S.default, {
                                tier: l.tier,
                                className: u(C.tierIcon, {
                                    [C.tierIconLocked]: !a
                                })
                            }), (0, r.jsx)("div", {
                                className: u(C.tierTitle, {
                                    [C.tierTitleActive]: a
                                }),
                                children: l.title
                            }), i ? (0, r.jsx)(G, {
                                transform: null == e ? void 0 : e.unlockedTranslateY.to(e => "translate3d(0, ".concat(e, "px, 0)")),
                                headerButton: d,
                                subscriptionsRequired: E,
                                hasAnimatedUnlocked: a
                            }) : null, (0, r.jsx)(R, {
                                numUnlocked: _,
                                numRequired: E
                            })]
                        })
                    })
                })
            }

            function M(e) {
                let {
                    children: t,
                    subscriptionCount: s,
                    onSetRef: a,
                    tier: n,
                    isAnimatedTo: l,
                    hasBottomMargin: i,
                    headerButton: o = null,
                    withCardBody: d = !0,
                    guildId: c,
                    showHeaderLockStatus: E = !0
                } = e, I = (0, A.getAppliedGuildBoostsRequired)(c)[n.tier], S = l && s >= I, N = n.tier !== L.BoostedGuildTiers.NONE && n.tier !== L.BoostedGuildTiers.TIER_1, g = (e, t) => {
                    let {
                        icon: s,
                        className: a
                    } = (0, _.getPerkIcon)(e.icon, t);
                    return (0, r.jsxs)("div", {
                        className: C.perk,
                        children: [(0, r.jsx)(T.default, {
                            name: String(e.icon),
                            icon: s,
                            className: C.perkIcon,
                            iconClassName: a
                        }), (0, r.jsxs)("div", {
                            className: C.perkText,
                            children: [(0, r.jsxs)("div", {
                                className: C.perkTitle,
                                children: [e.title, e.isNew ? (0, r.jsx)(f.TextBadge, {
                                    className: C.newBadge,
                                    text: m.default.Messages.NEW
                                }) : null]
                            }), (0, r.jsx)("div", {
                                className: C.perkDescription,
                                children: e.description
                            })]
                        })]
                    }, e.title)
                };
                return (0, r.jsxs)("div", {
                    className: u(C.tier, {
                        [C.tierBottomMargin]: i
                    }),
                    children: [(0, r.jsx)(D, {
                        subscriptionCount: s,
                        tier: n,
                        headerButton: o,
                        showHeaderLockStatus: E,
                        onSetRef: e => {
                            null != a && a(e, n)
                        },
                        withCardBody: d,
                        guildId: c,
                        hasBottomMargin: i,
                        subscriptionsRequired: I,
                        hasAnimatedUnlocked: S,
                        isAnimatedTo: l
                    }), (0, r.jsx)("div", {
                        className: u({
                            [C.tierBody]: d
                        }),
                        children: null != t ? t : (0, r.jsxs)(r.Fragment, {
                            children: [N ? (0, r.jsx)("div", {
                                className: C.previousPerks,
                                children: m.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERKS_PREVIOUS_PERKS
                            }) : null, null != n.perks && (0, r.jsx)("div", {
                                className: C.perks,
                                children: n.perks.map(e => g(e, S))
                            })]
                        })
                    })]
                }, n.tier)
            }(l = a || (a = {}))[l.OPEN = 0] = "OPEN", l[l.CLOSING = 1] = "CLOSING", l[l.CLOSED = 2] = "CLOSED", (i = n || (n = {}))[i.NONE = 0] = "NONE", i[i.UNLOCKED_SLIDE = 1] = "UNLOCKED_SLIDE";
            let G = e => {
                    let {
                        transform: t,
                        hasAnimatedUnlocked: s,
                        headerButton: a,
                        subscriptionsRequired: n
                    } = e;
                    return null !== a ? a : s ? (0, r.jsx)(x, {
                        transform: t
                    }) : (0, r.jsx)(p, {
                        subscriptionsRequired: n
                    })
                },
                x = e => {
                    let {
                        transform: t
                    } = e;
                    return (0, r.jsx)(c.animated.div, {
                        style: {
                            transform: t
                        },
                        className: C.tierUnlocked,
                        children: m.default.Messages.GUILD_SETTINGS_PREMIUM_GUILD_UNLOCKED
                    })
                },
                p = e => {
                    let {
                        subscriptionsRequired: t
                    } = e;
                    return (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)("div", {
                            className: C.tierRequirement,
                            children: m.default.Messages.GUILD_SETTINGS_PREMIUM_GUILD_TIER_REQUIREMENT.format({
                                required: t
                            })
                        }), (0, r.jsx)(g.default, {
                            className: C.tierLock
                        })]
                    })
                }