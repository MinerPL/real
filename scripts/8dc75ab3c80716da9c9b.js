(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["74307"], {
        304580: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return m
                }
            });
            var n, r, s = i("37983");
            i("884691");
            var l = i("414456"),
                o = i.n(l),
                a = i("394846"),
                u = i("77078"),
                d = i("945330"),
                c = i("381546"),
                E = i("782340"),
                f = i("955892");
            (n = r || (r = {})).DEFAULT = "", n.BOLD = "Bold", n.SOLID = "Solid";
            let _ = e => {
                let {
                    closeAction: t,
                    variant: i,
                    keybind: n,
                    className: l
                } = e;
                return (0, s.jsxs)("div", {
                    className: o(f.container, l),
                    children: [(0, s.jsx)(u.Clickable, {
                        className: o(f.closeButton, {
                            [f.closeButtonBold]: i === r.BOLD,
                            [f.closeButtonSolid]: i === r.SOLID
                        }),
                        onClick: t,
                        "aria-label": E.default.Messages.CLOSE,
                        children: i === r.SOLID ? (0, s.jsx)(c.default, {
                            width: 24,
                            height: 24,
                            "aria-hidden": !0
                        }) : (0, s.jsx)(d.default, {
                            width: 18,
                            height: 18,
                            "aria-hidden": !0
                        })
                    }), a.isMobile ? null : (0, s.jsx)("div", {
                        className: o(f.keybind),
                        "aria-hidden": !0,
                        children: n
                    })]
                })
            };
            _.defaultProps = {
                variant: r.DEFAULT
            }, _.Variants = r;
            var m = _
        },
        366634: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return u
                }
            });
            var n = i("37983");
            i("884691");
            var r = i("414456"),
                s = i.n(r),
                l = i("748820"),
                o = i("291077");
            let a = (0, l.v4)();
            var u = e => {
                let {
                    open: t,
                    className: i,
                    withHighlight: r = !1
                } = e;
                return (0, n.jsxs)("svg", {
                    width: "18",
                    height: "18",
                    className: s(o.button, i, {
                        [o.open]: t,
                        [o.withHighlight]: r
                    }),
                    children: [r && (0, n.jsx)("defs", {
                        children: (0, n.jsxs)("linearGradient", {
                            id: a,
                            x1: "0",
                            y1: "0",
                            x2: "0",
                            y2: "18",
                            gradientUnits: "userSpaceOnUse",
                            children: [(0, n.jsx)("stop", {
                                offset: "0",
                                stopColor: "#B473F5"
                            }), (0, n.jsx)("stop", {
                                offset: "1",
                                stopColor: "#E292AA"
                            })]
                        })
                    }), (0, n.jsxs)("g", {
                        fill: "none",
                        fillRule: "evenodd",
                        children: [(0, n.jsx)("path", {
                            d: "M0 0h18v18H0"
                        }), (0, n.jsx)("path", {
                            stroke: r ? "url(#".concat(a, ")") : "currentColor",
                            d: "M4.5 4.5l9 9",
                            strokeLinecap: "round"
                        }), (0, n.jsx)("path", {
                            stroke: r ? "url(#".concat(a, ")") : "currentColor",
                            d: "M13.5 4.5l-9 9",
                            strokeLinecap: "round"
                        })]
                    })]
                })
            }
        },
        80300: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                backgroundImagePreloader: function() {
                    return d
                }
            });
            var n = i("37983"),
                r = i("884691"),
                s = i("310013"),
                l = i.n(s),
                o = i("407063");
            let a = /url\(['"](.*)['"]\)/,
                u = e => {
                    if (null == e || "" === e || "none" === e) return null;
                    let t = e.match(a);
                    return null != t ? t[1] : e
                };

            function d(e) {
                class t extends r.Component {
                    componentDidUpdate(e, t) {
                        if (t === this.state) return;
                        let {
                            cached: i,
                            loaded: n
                        } = this.state, {
                            style: r
                        } = this.props, s = null != r ? u(r.backgroundImage) : null;
                        null == s && s !== i ? this.setState({
                            loaded: !0,
                            cached: s
                        }) : this.cachedURLs.indexOf(s) >= 0 ? this.setState({
                            loaded: !0,
                            cached: s
                        }) : null != s && s !== i && !0 === n && this.setState({
                            loaded: !1
                        }, () => this.preloadURL(s))
                    }
                    preloadURL(e) {
                        this.canceller && this.canceller(), this.canceller = (0, o.loadImage)(e, t => {
                            this.canceller && (this.canceller = null), !t && (this.cachedURLs.push(e), this.setState({
                                cached: e,
                                loaded: !0
                            }));
                            let {
                                onBackgroundImageLoad: i
                            } = this.props;
                            i && i(t, e)
                        })
                    }
                    componentWillUnmount() {
                        this.canceller && this.canceller(), this.cachedURLs.length = 0
                    }
                    render() {
                        let {
                            style: t,
                            onBackgroundImageLoad: i,
                            ...r
                        } = this.props, {
                            loaded: s,
                            cached: l
                        } = this.state;
                        if (!s && null != t) {
                            var o;
                            t = {
                                ...t,
                                backgroundImage: null == (o = l) || "" === o || "none" === o ? "none" : "url(".concat(o, ")")
                            }
                        }
                        return (0, n.jsx)(e, {
                            style: t,
                            ...r
                        })
                    }
                    constructor(e) {
                        super(e), this.cachedURLs = [], this.canceller = null;
                        let {
                            style: t
                        } = e, i = null != t ? u(t.backgroundImage) : null;
                        this.cachedURLs = [i], this.state = {
                            cached: i,
                            loaded: !0
                        }
                    }
                }
                return l(t, e), t
            }
        },
        526887: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                ConfettiCannonContext: function() {
                    return d
                },
                ConfettiCannonContextProvider: function() {
                    return c
                }
            });
            var n = i("37983"),
                r = i("884691"),
                s = i("516555"),
                l = i("65597"),
                o = i("206230"),
                a = i("49111");
            let u = {
                    confettiCanvas: null,
                    cannon: null,
                    createConfetti: () => void 0,
                    createConfettiAt: () => void 0,
                    createMultipleConfetti: () => [],
                    createMultipleConfettiAt: () => [],
                    addClickListener: () => a.NOOP,
                    removeClickListener: a.NOOP
                },
                d = r.createContext(u);

            function c(e) {
                let {
                    children: t,
                    confettiCanvas: i,
                    spriteCanvas: a,
                    baseConfig: c,
                    addClickListener: E,
                    removeClickListener: f
                } = e, _ = (0, s.useConfettiCannon)(i, a), m = (0, l.default)([o.default], () => o.default.useReducedMotion), I = r.useMemo(() => m ? u : {
                    confettiCanvas: i,
                    cannon: _,
                    createConfetti: (e, t) => _.createConfetti({
                        ...c,
                        ...e
                    }, t),
                    createConfettiAt: (e, t, i, n) => _.createConfetti({
                        ...c,
                        position: {
                            type: "static",
                            value: {
                                x: e,
                                y: t
                            }
                        },
                        ...i
                    }, n),
                    createMultipleConfetti: function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20,
                            i = arguments.length > 2 ? arguments[2] : void 0;
                        return _.createMultipleConfetti({
                            ...c,
                            ...e
                        }, t, i)
                    },
                    createMultipleConfettiAt: function(e, t, i) {
                        let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 20,
                            r = arguments.length > 4 ? arguments[4] : void 0;
                        return _.createMultipleConfetti({
                            ...c,
                            position: {
                                type: "static",
                                value: {
                                    x: e,
                                    y: t
                                }
                            },
                            ...i
                        }, n, r)
                    },
                    addClickListener: E,
                    removeClickListener: f
                }, [E, c, _, i, m, f]);
                return (0, n.jsx)(d.Provider, {
                    value: I,
                    children: t
                })
            }
        },
        614858: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                BadgeCategory: function() {
                    return r
                },
                getBadgeCategory: function() {
                    return l
                }
            });
            var n, r, s = i("883474");

            function l(e) {
                return e.staff ? r.STAFF : e.verified && e.partnered ? r.VERIFIED_AND_PARTNERED : e.verified ? r.VERIFIED : e.partnered ? r.PARTNERED : e.community && e.visibility === s.GuildVisibility.PUBLIC ? r.DISCOVERABLE : e.community ? r.COMMUNITY : r.NONE
            }(n = r || (r = {}))[n.PARTNERED = 0] = "PARTNERED", n[n.VERIFIED = 1] = "VERIFIED", n[n.VERIFIED_AND_PARTNERED = 2] = "VERIFIED_AND_PARTNERED", n[n.COMMUNITY = 3] = "COMMUNITY", n[n.DISCOVERABLE = 4] = "DISCOVERABLE", n[n.STAFF = 5] = "STAFF", n[n.NONE = 6] = "NONE"
        },
        347924: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                useInServerBadgingExperiment: function() {
                    return s
                }
            });
            var n = i("862205");
            let r = (0, n.createExperiment)({
                kind: "guild",
                id: "2023-04_server_badging",
                label: "Server Badging",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enable Server Badging",
                    config: {
                        enabled: !0
                    }
                }]
            });

            function s(e) {
                let {
                    enabled: t
                } = r.useExperiment({
                    guildId: e,
                    location: "482926_1"
                }, {
                    autoTrackExposure: !1
                });
                return t
            }
        },
        883474: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                GuildVisibility: function() {
                    return r
                },
                getGuildTraits: function() {
                    return o
                }
            });
            var n, r, s = i("813006"),
                l = i("49111");

            function o(e) {
                let t = new Set(e.features),
                    i = t.has(l.GuildFeatures.COMMUNITY) && t.has(l.GuildFeatures.DISCOVERABLE) ? r.PUBLIC : r.INVITE_ONLY,
                    n = function(e) {
                        return null != e && (e instanceof s.default ? e.premiumSubscriberCount > 0 || e.premiumTier > l.BoostedGuildTiers.NONE : null != e.premiumSubscriptionCount && e.premiumSubscriptionCount > 0)
                    }(e),
                    o = 0;
                if (n) {
                    var a;
                    o = null !== (a = e instanceof s.default ? e.premiumSubscriberCount : e.premiumSubscriptionCount) && void 0 !== a ? a : 0
                }
                let u = e instanceof s.default ? e.premiumTier : l.BoostedGuildTiers.NONE;
                return {
                    verified: t.has(l.GuildFeatures.VERIFIED),
                    partnered: t.has(l.GuildFeatures.PARTNERED),
                    community: t.has(l.GuildFeatures.COMMUNITY),
                    staff: t.has(l.GuildFeatures.INTERNAL_EMPLOYEE_ONLY),
                    visibility: i,
                    premium: n,
                    premiumSubscriberCount: o,
                    premiumTier: u
                }
            }(n = r || (r = {})).PUBLIC = "PUBLIC", n.INVITE_ONLY = "INVITE_ONLY"
        },
        51565: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return o
                }
            });
            var n = i("614858"),
                r = i("347924"),
                s = i("883474");
            let l = new Set([n.BadgeCategory.PARTNERED, n.BadgeCategory.VERIFIED, n.BadgeCategory.VERIFIED_AND_PARTNERED, n.BadgeCategory.COMMUNITY, n.BadgeCategory.DISCOVERABLE]);

            function o(e) {
                var t;
                let i = (0, r.useInServerBadgingExperiment)(null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : "");
                if (!i || null == e) return !1;
                let o = (0, s.getGuildTraits)(e),
                    a = (0, n.getBadgeCategory)(o);
                return l.has(a)
            }
        },
        863921: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return E
                }
            });
            var n = i("37983");
            i("884691");
            var r = i("414456"),
                s = i.n(r),
                l = i("931138"),
                o = i("206453"),
                a = i("49111"),
                u = i("323755");
            let d = {
                    [a.BoostedGuildTiers.NONE]: u.iconBackgroundTierNone,
                    [a.BoostedGuildTiers.TIER_1]: u.iconBackgroundTierOne,
                    [a.BoostedGuildTiers.TIER_2]: u.iconBackgroundTierTwo,
                    [a.BoostedGuildTiers.TIER_3]: u.iconBackgroundTierThree
                },
                c = {
                    [a.BoostedGuildTiers.NONE]: u.iconTierNone,
                    [a.BoostedGuildTiers.TIER_1]: u.iconTierOne,
                    [a.BoostedGuildTiers.TIER_2]: u.iconTierTwo,
                    [a.BoostedGuildTiers.TIER_3]: u.iconTierThree
                };

            function E(e) {
                let {
                    premiumTier: t,
                    iconBackgroundClassName: i,
                    iconClassName: r,
                    size: a
                } = e;
                return (0, n.jsx)(l.default, {
                    className: s(i, d[t]),
                    size: a,
                    children: (0, n.jsx)(o.default, {
                        tier: t,
                        className: s(r, u.boostedGuildIconGem, c[t])
                    })
                })
            }
        },
        944305: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                customRoleIconUpsellPerks: function() {
                    return A
                },
                guildBannerUpsellPerks: function() {
                    return O
                },
                animatedGuildBannerUpsellPerks: function() {
                    return B
                },
                vanityUrlUpsellPerks: function() {
                    return D
                },
                guildInviteUpsellPerks: function() {
                    return x
                },
                guildBoostingPerks: function() {
                    return G
                },
                premiumProgressBarUpsellPerks: function() {
                    return w
                }
            });
            var n = i("669491"),
                r = i("245307"),
                s = i("571658"),
                l = i("118503"),
                o = i("110006"),
                a = i("682344"),
                u = i("238521"),
                d = i("394832"),
                c = i("290581"),
                E = i("595086"),
                f = i("885541"),
                _ = i("49111");
            i("646718");
            var m = i("782340");
            let I = () => ({
                    color: n.default.unsafe_rawColors.PREMIUM_PERK_GREEN.css,
                    icon: u.default,
                    description: m.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_CUSTOM_INVITE
                }),
                p = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : n.default.unsafe_rawColors.PREMIUM_PERK_ORANGE.css;
                    return {
                        color: e,
                        icon: o.default,
                        description: m.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_ANIMATED_ICON
                    }
                },
                R = () => ({
                    color: n.default.unsafe_rawColors.PREMIUM_PERK_GREEN.css,
                    icon: u.default,
                    description: m.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_GUILD_BANNER
                }),
                M = () => ({
                    color: n.default.unsafe_rawColors.PREMIUM_PERK_GREEN.css,
                    icon: o.default,
                    description: m.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_ANIMATED_GUILD_BANNER
                }),
                T = () => ({
                    color: n.default.unsafe_rawColors.PREMIUM_PERK_ORANGE.css,
                    icon: a.default,
                    description: m.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_ROLE_ICON
                }),
                P = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : n.default.unsafe_rawColors.PREMIUM_PERK_PURPLE.css;
                    return {
                        color: e,
                        icon: E.default,
                        description: m.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_STICKERS
                    }
                },
                h = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : n.default.unsafe_rawColors.PREMIUM_PERK_PURPLE.css,
                        i = 0,
                        r = 0;
                    switch (e) {
                        case _.BoostedGuildTiers.TIER_1:
                            i = 15, r = 100;
                            break;
                        case _.BoostedGuildTiers.TIER_2:
                            i = 30, r = 150;
                            break;
                        case _.BoostedGuildTiers.TIER_3:
                            i = 60, r = 250
                    }
                    return {
                        color: t,
                        icon: E.default,
                        description: m.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_STICKERS_AND_EMOJIS.format({
                            numStickers: i,
                            numEmojis: r
                        })
                    }
                },
                g = () => ({
                    color: n.default.unsafe_rawColors.PREMIUM_PERK_GOLD.css,
                    icon: c.default,
                    description: m.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_VANITY_URL
                }),
                U = () => ({
                    icon: r.default,
                    description: m.default.Messages.PREMIUM_GUILD_USER_FEATURE_PROFILE_BADGE
                }),
                S = () => ({
                    icon: l.default,
                    color: n.default.unsafe_rawColors.PREMIUM_PERK_PINK.css,
                    description: m.default.Messages.PREMIUM_GUILD_USER_FEATURE_BOOST_CRYSTAL
                }),
                C = () => ({
                    icon: a.default,
                    color: n.default.unsafe_rawColors.PREMIUM_PERK_YELLOW.css,
                    description: m.default.Messages.PREMIUM_GUILD_USER_FEATURE_SPECIAL_ROLE
                }),
                v = () => ({
                    color: n.default.unsafe_rawColors.PREMIUM_PERK_BLUE.css,
                    icon: s.default,
                    description: m.default.Messages.PREMIUM_GUILD_USER_FEATURE_OTHERS
                }),
                N = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_OTHER;
                    return {
                        color: n.default.unsafe_rawColors.PREMIUM_PERK_BLUE.css,
                        icon: s.default,
                        description: e
                    }
                },
                L = () => ({
                    color: n.default.unsafe_rawColors.PREMIUM_PERK_PURPLE.css,
                    icon: f.default,
                    description: m.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_FILE_UPLOAD_TIER_3
                }),
                b = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : n.default.unsafe_rawColors.PREMIUM_PERK_GREEN.css;
                    return {
                        color: e,
                        icon: d.default,
                        description: m.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_SCREEN_SHARE_1080P
                    }
                };

            function A() {
                return [T(), R(), P(), N()]
            }

            function O() {
                return [T(), h(_.BoostedGuildTiers.TIER_2), b(), N()]
            }

            function B() {
                return [h(_.BoostedGuildTiers.TIER_3, n.default.unsafe_rawColors.PREMIUM_PERK_GREEN.css), L(), g(), N()]
            }

            function D() {
                return [g(), M(), h(_.BoostedGuildTiers.TIER_3), N()]
            }

            function x() {
                return [I(), P(), p(), N()]
            }

            function G() {
                return [P(), N()]
            }

            function w() {
                return [S(), C(), U(), v()]
            }
        },
        836275: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                openGuildBannerUpsellModal: function() {
                    return _
                }
            });
            var n = i("37983");
            i("884691");
            var r = i("77078"),
                s = i("366634"),
                l = i("974755"),
                o = i("427459"),
                a = i("379532"),
                u = i("944305"),
                d = i("49111"),
                c = i("782340"),
                E = i("670362");

            function f(e) {
                let {
                    guild: t,
                    banner: i
                } = e;
                return (0, n.jsx)("div", {
                    className: E.guildBanner,
                    style: {
                        backgroundImage: "url(".concat(i)
                    },
                    children: (0, n.jsxs)("div", {
                        className: E.guildHeader,
                        children: [(0, n.jsx)(l.default, {
                            guild: t,
                            isBannerVisible: !0
                        }), (0, n.jsx)(r.Heading, {
                            className: E.guildName,
                            variant: "heading-md/semibold",
                            children: t.toString()
                        }), (0, n.jsx)(s.default, {
                            className: E.dropdown,
                            open: !1
                        })]
                    })
                })
            }

            function _(e) {
                let {
                    analyticsLocations: t,
                    analyticsLocation: i,
                    guild: r,
                    isGIF: s,
                    banner: l
                } = e, E = s ? (0, o.minimumRequiredTierForGuildFeature)(d.GuildFeatures.ANIMATED_BANNER) : (0, o.minimumRequiredTierForGuildFeature)(d.GuildFeatures.BANNER);
                null != E && (0, a.default)({
                    analyticsLocations: t,
                    analyticsSourceLocation: i,
                    guild: r,
                    headerProps: {
                        title: c.default.Messages.GUILD_BANNER_UPSELL_MODAL_TITLE,
                        subtitle: function(e, t) {
                            let i = (0, o.getTierName)(e);
                            return t ? c.default.Messages.GUILD_BANNER_UPSELL_MODAL_SUBTITLE_ANIMATED.format({
                                targetLevelOrPlan: i
                            }) : c.default.Messages.GUILD_BANNER_UPSELL_MODAL_SUBTITLE_STATIC.format({
                                targetLevelOrPlan: i
                            })
                        }(E, s),
                        image: (0, n.jsx)(f, {
                            guild: r,
                            banner: l
                        })
                    },
                    perkIntro: c.default.Messages.GUILD_BANNER_UPSELL_MODAL_PERK_INTRO,
                    perks: s ? (0, u.animatedGuildBannerUpsellPerks)() : (0, u.guildBannerUpsellPerks)()
                })
            }
        },
        379532: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return u
                }
            });
            var n = i("37983");
            i("884691");
            var r = i("77078"),
                s = i("292687"),
                l = i("974889"),
                o = i("599110"),
                a = i("49111");

            function u(e, t) {
                let u = null != t ? t : "".concat(a.AnalyticsSections.PREMIUM_GUILD_UPSELL_MODAL);
                null != e.targetBoostedGuildTier && (u += " - Tier ".concat(e.targetBoostedGuildTier));
                o.default.track(a.AnalyticEvents.OPEN_MODAL, {
                    type: u,
                    location: e.analyticsSourceLocation
                });
                let {
                    openInPopoutEnabled: d,
                    ...c
                } = e, E = s.default.getWindowOpen(a.PopoutWindowKeys.CHANNEL_CALL_POPOUT) && null != d && d;
                E && (0, l.default)(a.PopoutWindowKeys.CHANNEL_CALL_POPOUT);
                let f = E ? r.POPOUT_MODAL_CONTEXT : r.DEFAULT_MODAL_CONTEXT;
                (0, r.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await i.el("874642").then(i.bind(i, "874642"));
                    return t => (0, n.jsx)(e, {
                        ...c,
                        ...t
                    })
                }, {
                    onCloseCallback: () => {
                        o.default.track(a.AnalyticEvents.MODAL_DISMISSED, {
                            type: u,
                            location: e.analyticsSourceLocation
                        })
                    },
                    contextKey: f
                })
            }
        },
        974755: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return P
                }
            });
            var n = i("37983");
            i("884691");
            var r = i("414456"),
                s = i.n(r),
                l = i("446674"),
                o = i("77078"),
                a = i("51565"),
                u = i("95039"),
                d = i("863921"),
                c = i("26989"),
                E = i("697218"),
                f = i("580357"),
                _ = i("40469"),
                m = i("427459"),
                I = i("49111"),
                p = i("782340"),
                R = i("129818");

            function M(e) {
                let {
                    guild: t,
                    isBannerVisible: i,
                    disableBoostClick: r
                } = e, s = (0, l.useStateFromStores)([E.default, c.default], () => {
                    let e = E.default.getCurrentUser();
                    return c.default.isMember(t.id, null == e ? void 0 : e.id)
                }), {
                    premiumTier: a,
                    premiumSubscriberCount: f
                } = t;
                if (0 === f && a === I.BoostedGuildTiers.NONE) return null;
                let _ = e => {
                        e.stopPropagation(), e.preventDefault(), s && !r && (0, u.openGuildBoostingMarketingModal)({
                            guildId: t.id,
                            location: {
                                section: I.AnalyticsSections.GUILD_HEADER,
                                object: I.AnalyticsObjects.BOOST_GEM_ICON
                            }
                        })
                    },
                    M = a === I.BoostedGuildTiers.NONE ? p.default.Messages.PREMIUM_GUILD_HEADER_BADGE_NO_TIER : m.getTierName(a),
                    T = (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("div", {
                            className: R.tierTooltipTitle,
                            children: M
                        }), (0, n.jsx)("div", {
                            children: p.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_SUBSCRIBER_COUNT_TOOLTIP.format({
                                subscriberCount: f
                            })
                        })]
                    });
                return (0, n.jsx)("div", {
                    className: R.guildIconContainer,
                    children: (0, n.jsx)(o.Tooltip, {
                        text: T,
                        position: "bottom",
                        "aria-label": null != M ? M : "",
                        children: e => (0, n.jsx)(o.Clickable, {
                            ...e,
                            className: R.premiumGuildIcon,
                            onClick: _,
                            children: (0, n.jsx)(d.default, {
                                premiumTier: a,
                                iconBackgroundClassName: i ? R.boostedGuildTierIconBackgroundWithVisibleBanner : null,
                                iconClassName: i && a !== I.BoostedGuildTiers.TIER_3 ? R.boostedGuildTierMutedIconWithVisibleBanner : null
                            })
                        })
                    })
                })
            }

            function T(e) {
                let {
                    guild: t,
                    disableColor: i,
                    disableBoostClick: r
                } = e, l = (0, a.default)(t);
                return l ? (0, n.jsx)("div", {
                    className: R.guildIconV2Container,
                    children: (0, n.jsx)(_.default, {
                        guild: t,
                        tooltipPosition: "bottom",
                        tooltipColor: o.Tooltip.Colors.PRIMARY,
                        className: s(R.guildBadge, {
                            [R.disableColor]: i
                        }),
                        disableBoostClick: r
                    })
                }) : (0, n.jsx)("div", {
                    className: R.guildIconContainer,
                    children: (0, n.jsx)(f.default, {
                        guild: t,
                        tooltipPosition: "bottom",
                        tooltipColor: o.Tooltip.Colors.PRIMARY,
                        className: s(R.guildBadge, {
                            [R.disableColor]: i
                        })
                    })
                })
            }

            function P(e) {
                let {
                    guild: t,
                    isBannerVisible: i,
                    disableBoostClick: r
                } = e, s = (0, a.default)(t);
                if (s) return (0, n.jsx)(T, {
                    guild: t,
                    disableColor: !1,
                    disableBoostClick: r
                });
                let l = t.hasFeature(I.GuildFeatures.VERIFIED) || t.hasFeature(I.GuildFeatures.PARTNERED);
                return l ? (0, n.jsx)(T, {
                    guild: t,
                    disableColor: !i
                }) : (0, n.jsx)(M, {
                    guild: t,
                    isBannerVisible: i,
                    disableBoostClick: r
                })
            }
        },
        507497: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return I
                }
            });
            var n = i("37983");
            i("884691");
            var r = i("446674"),
                s = i("77078"),
                l = i("685665"),
                o = i("836275"),
                a = i("379532"),
                u = i("305961"),
                d = i("162771"),
                c = i("118503"),
                E = i("49111"),
                f = i("944305"),
                _ = i("782340"),
                m = i("323723");

            function I(e) {
                let {
                    analyticsSection: t,
                    analyticsPage: i,
                    isGIF: I,
                    banner: p
                } = e, R = (0, r.useStateFromStores)([d.default], () => d.default.getGuildId()), M = (0, r.useStateFromStores)([u.default], () => u.default.getGuild(R)), {
                    analyticsLocations: T
                } = (0, l.default)();
                return null == M || M.hasFeature(E.GuildFeatures.ANIMATED_BANNER) || !I && M.hasFeature(E.GuildFeatures.BANNER) ? null : (0, n.jsxs)("div", {
                    className: m.container,
                    children: [(0, n.jsx)(c.default, {
                        className: m.guildBoostingIcon
                    }), (0, n.jsx)(s.Text, {
                        color: "header-primary",
                        variant: "text-sm/semibold",
                        children: _.default.Messages.PREMIUM_GUILD_PREVIEW
                    }), (0, n.jsx)(s.Button, {
                        look: s.Button.Looks.LINK,
                        color: s.Button.Colors.LINK,
                        className: m.subscribeButton,
                        onClick: () => {
                            if (null == M) return;
                            let e = {
                                section: t,
                                page: i,
                                object: E.AnalyticsObjects.UPSELL_HEADER
                            };
                            null != p ? (0, o.openGuildBannerUpsellModal)({
                                analyticsLocations: T,
                                analyticsLocation: e,
                                guild: M,
                                isGIF: I,
                                banner: p
                            }) : (0, a.default)({
                                analyticsLocations: T,
                                analyticsSourceLocation: e,
                                guild: M,
                                perks: I ? (0, f.animatedGuildBannerUpsellPerks)() : (0, f.guildBannerUpsellPerks)()
                            })
                        },
                        children: _.default.Messages.PREMIUM_GUILD_BOOST_SERVER
                    })]
                })
            }
        },
        193867: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return T
                }
            });
            var n = i("37983"),
                r = i("884691"),
                s = i("446674"),
                l = i("77078"),
                o = i("812204"),
                a = i("685665"),
                u = i("67069"),
                d = i("635956"),
                c = i("697218"),
                E = i("258078"),
                f = i("599110"),
                _ = i("719923"),
                m = i("49111"),
                I = i("75015"),
                p = i("646718"),
                R = i("782340"),
                M = i("123342");

            function T(e) {
                let {
                    analyticsSection: t,
                    type: i
                } = e, T = (0, s.useStateFromStores)([c.default], () => c.default.getCurrentUser()), P = _.default.canUseAnimatedAvatar(T), h = _.default.canUsePremiumProfileCustomization(T), g = i === I.UploadTypes.BANNER && h || i === I.UploadTypes.AVATAR && P, {
                    sourceAnalyticsLocations: U
                } = (0, a.default)(o.default.PREMIUM_PREVIEW_UPSELL_HEADER);
                if (r.useEffect(() => {
                        !g && f.default.track(m.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                            type: t,
                            location_stack: U
                        })
                    }, [g, t, U]), g) return null;
                let S = (0, n.jsx)(d.default, {
                    className: M.getNitroLink,
                    size: l.Button.Sizes.SMALL,
                    look: l.Button.Looks.LINK,
                    color: l.Button.Colors.LINK,
                    subscriptionTier: p.PremiumSubscriptionSKUs.TIER_2,
                    buttonText: R.default.Messages.PREMIUM_PREVIEW_GET_NITRO.format(),
                    showIcon: !1,
                    premiumModalAnalyticsLocation: {
                        section: t,
                        object: m.AnalyticsObjects.BUTTON_CTA
                    },
                    disableShine: !0
                });
                return (0, n.jsx)(u.default, {
                    reducedRightPadding: !0,
                    className: M.nitroPreviewUpsell,
                    text: R.default.Messages.PREMIUM_PREVIEW.format(),
                    textSize: E.default.Sizes.SIZE_14,
                    textColor: E.default.Colors.HEADER_PRIMARY,
                    button: S
                })
            }
        },
        652914: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return o
                }
            });
            var n = i("37983");
            i("884691");
            var r = i("507497"),
                s = i("193867"),
                l = i("75015");

            function o(e) {
                let {
                    type: t,
                    analyticsPage: i,
                    analyticsSection: o,
                    isGIF: a,
                    banner: u
                } = e;
                return [l.UploadTypes.BANNER, l.UploadTypes.AVATAR].includes(t) && a ? (0, n.jsx)(s.default, {
                    analyticsSection: o,
                    type: t
                }) : t === l.UploadTypes.GUILD_BANNER ? (0, n.jsx)(r.default, {
                    analyticsSection: o,
                    analyticsPage: i,
                    isGIF: a,
                    banner: u
                }) : null
            }
        },
        292687: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return n.default
                }
            });
            var n = i("870346")
        },
        974889: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return l
                }
            });
            var n = i("773336"),
                r = i("50885"),
                s = i("870346");

            function l(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    i = s.default.getWindow(e);
                null != i && !i.closed && (n.isPlatformEmbedded ? r.default.focus(e, t) : i.focus())
            }
        },
        824986: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                PremiumTutorialTooltips: function() {
                    return s
                },
                default: function() {
                    return m
                }
            });
            var n, r, s, l = i("446674"),
                o = i("913144"),
                a = i("521012"),
                u = i("565785"),
                d = i("646718");
            (n = s || (s = {})).FILE_UPLOAD = "file_upload", n.STICKER_PICKER = "sticker_picker", n.EMOJI_PICKER = "emoji_picker", n.BOOSTING_FLOW = "boosting_flow";
            let c = {
                isPersistentCoachmarkCollapsed: !1,
                hasFlowStartEventBeenEmitted: {},
                canPlayWowMoment: !1,
                isPersistentHelperHidden: !0,
                isFetchingWowMomentMedia: !1,
                wowMomentWumpusMediaUrl: null,
                wowMomentHelperMediaUrl: null,
                navigatedFromHelper: !1,
                tutorialExpirationTime: null
            };

            function E() {
                c = {
                    isPersistentCoachmarkCollapsed: !1,
                    hasFlowStartEventBeenEmitted: {},
                    canPlayWowMoment: !1,
                    isPersistentHelperHidden: !0,
                    isFetchingWowMomentMedia: !1,
                    wowMomentWumpusMediaUrl: null,
                    wowMomentHelperMediaUrl: null,
                    navigatedFromHelper: !1,
                    tutorialExpirationTime: null
                }
            }

            function f() {
                let e = new Date;
                e.setDate(e.getDate() + 14), c.tutorialExpirationTime = e.getTime()
            }
            class _ extends l.default.PersistedStore {
                initialize(e) {
                    null != e && (c = e), c.isPersistentHelperHidden = !1, c.canPlayWowMoment = !1, c.isFetchingWowMomentMedia = !1, c.wowMomentWumpusMediaUrl = null, c.wowMomentHelperMediaUrl = null
                }
                getState() {
                    return c
                }
                get isPersistentCoachmarkCollapsed() {
                    return c.isPersistentCoachmarkCollapsed
                }
                hasFlowStartEventBeenEmitted(e) {
                    return null == c.hasFlowStartEventBeenEmitted[e] && (c.hasFlowStartEventBeenEmitted[e] = !1), c.hasFlowStartEventBeenEmitted[e]
                }
                get canPlayWowMoment() {
                    return c.canPlayWowMoment
                }
                get isPersistentHelperHidden() {
                    return c.isPersistentHelperHidden
                }
                get isFetchingWowMomentMedia() {
                    return c.isFetchingWowMomentMedia
                }
                get wowMomentWumpusMedia() {
                    return c.wowMomentWumpusMediaUrl
                }
                get wowMomentHelperMedia() {
                    return c.wowMomentHelperMediaUrl
                }
                get navigatedFromHelper() {
                    return c.navigatedFromHelper
                }
                get tutorialExpirationTime() {
                    return c.tutorialExpirationTime
                }
            }
            _.displayName = "PremiumTutorialStore", _.persistKey = "PremiumTutorialStore", _.migrations = [e => ({
                ...e,
                hasFlowStartEventBeenEmitted: null !== (r = e.hasFlowStartEventBeenEmitted) && void 0 !== r ? r : {}
            })];
            var m = new _(o.default, {
                PREMIUM_TUTORIAL_PERSISTENT_ONBOARDING_TOGGLE_COLLAPSE: function() {
                    c.isPersistentCoachmarkCollapsed = !c.isPersistentCoachmarkCollapsed
                },
                UPDATE_HAS_FLOW_START_EVENT_BEEN_EMITTED: function(e) {
                    let {
                        event: t,
                        value: i
                    } = e;
                    c.hasFlowStartEventBeenEmitted[t] = i
                },
                LOGOUT: function() {
                    E()
                },
                RESET_PREMIUM_TUTORIAL_STORE: E,
                PREMIUM_TUTORIAL_SET_CAN_PLAY_WOW_MOMENT: function(e) {
                    let {
                        value: t
                    } = e;
                    c.canPlayWowMoment = t
                },
                PREMIUM_TUTORIAL_PERSISTENT_SET_IS_HIDDEN: function(e) {
                    let {
                        value: t
                    } = e;
                    c.isPersistentHelperHidden = t
                },
                PREMIUM_TUTORIAL_IS_FETCHING_WOW_MOMENT_MEDIA: function(e) {
                    let {
                        value: t
                    } = e;
                    c.isFetchingWowMomentMedia = t
                },
                PREMIUM_TUTORIAL_FETCH_WOW_MOMENT_MEDIA_SUCCESS: function(e) {
                    let {
                        wumpusMedia: t,
                        helperMedia: i
                    } = e;
                    c.wowMomentWumpusMediaUrl = t, c.wowMomentHelperMediaUrl = i, c.isFetchingWowMomentMedia = !1
                },
                PREMIUM_TUTORIAL_SET_NAVIGATED_FROM_HELPER: function(e) {
                    let {
                        value: t
                    } = e;
                    c.navigatedFromHelper = t
                },
                PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: function(e) {
                    let {
                        subscription: t
                    } = e, {
                        enabled: i
                    } = u.default.getCurrentConfig({
                        location: "5f2710_1"
                    }, {
                        autoTrackExposure: !1
                    });
                    i && null != t.items.find(e => d.PREMIUM_TIER_2_PLANS.has(e.plan_id)) && f()
                },
                GIFT_CODE_REDEEM_SUCCESS: function(e) {
                    let {
                        entitlement: t
                    } = e, {
                        enabled: i
                    } = u.default.getCurrentConfig({
                        location: "5f2710_2"
                    }, {
                        autoTrackExposure: !1
                    });
                    i && (null == t ? void 0 : t.sku_id) === d.PremiumSubscriptionSKUs.TIER_2 && null == a.default.getPremiumSubscription(!1) && null == c.tutorialExpirationTime && f()
                }
            })
        },
        694768: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return s
                }
            });
            var n = i("862205");
            let r = (0, n.createExperiment)({
                kind: "user",
                id: "2023-02_nitroduction_experience",
                label: "Nitroduction Experience",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "One month trial users recieve the Nitroduction experience",
                    config: {
                        enabled: !0
                    }
                }]
            });
            var s = r
        },
        565785: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return s
                }
            });
            var n = i("862205");
            let r = (0, n.createExperiment)({
                kind: "user",
                id: "2023-08_premium_tutorial_for_all",
                label: "Premium Tutorial Experience For All",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "All net new users (exclude trial) receive premium tutorial experience",
                    config: {
                        enabled: !0
                    }
                }]
            });
            var s = r
        },
        921228: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                useIsPremiumTutorialEnabled: function() {
                    return M
                },
                isPremiumTutorialEnabled: function() {
                    return h
                },
                useAllDismissedPremiumTutorialSteps: function() {
                    return S
                }
            });
            var n = i("884691"),
                r = i("446674"),
                s = i("151426"),
                l = i("850068"),
                o = i("10641"),
                a = i("374363"),
                u = i("697218"),
                d = i("521012"),
                c = i("719923"),
                E = i("324878"),
                f = i("824986"),
                _ = i("694768"),
                m = i("565785"),
                I = i("646718");
            let p = () => {
                    let e = (0, r.useStateFromStores)([d.default], () => d.default.getPremiumTypeSubscription()),
                        t = (0, o.useIsDismissibleContentDismissed)(s.DismissibleContent.PREMIUM_TUTORIAL_EXPERIENCE);
                    return (0, E.isEligibleTrialSub)(e) && !t
                },
                R = () => {
                    let e = (0, E.useHasActiveTrial)(),
                        t = (0, o.useIsDismissibleContentDismissed)(s.DismissibleContent.PREMIUM_TUTORIAL_EXPERIENCE),
                        i = (0, r.useStateFromStores)([u.default], () => u.default.getCurrentUser()),
                        a = (0, c.isPremiumExactly)(i, I.PremiumTypes.TIER_2),
                        f = (0, r.useStateFromStores)([d.default], () => d.default.hasFetchedPreviousPremiumTypeSubscription()),
                        _ = (0, r.useStateFromStores)([d.default], () => d.default.getPreviousPremiumTypeSubscription()),
                        m = !e && a;
                    n.useEffect(() => {
                        m && !f && !t && (0, l.fetchMostRecentSubscription)()
                    }, [m, f, t]);
                    let p = m && f && null == _;
                    return p && !t
                };

            function M(e) {
                var t;
                let i = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    n = p() && i,
                    {
                        enabled: s
                    } = _.default.useExperiment({
                        location: e
                    }, {
                        autoTrackExposure: n,
                        disable: !n
                    }),
                    l = (0, r.useStateFromStores)([f.default], () => f.default.tutorialExpirationTime),
                    o = new Date().getTime(),
                    a = (0, r.useStateFromStores)([d.default], () => {
                        var e, i;
                        return null !== (t = null === (i = d.default.getPremiumSubscription()) || void 0 === i ? void 0 : null === (e = i.createdAt) || void 0 === e ? void 0 : e.getTime()) && void 0 !== t ? t : 0
                    }),
                    u = R() && i,
                    c = m.default.useExperiment({
                        location: e
                    }, {
                        autoTrackExposure: u && o - a < 18e5,
                        disable: !u
                    }).enabled && null != l && l > o;
                return s || c
            }
            let T = () => {
                    let e = d.default.getPremiumTypeSubscription(),
                        t = (0, o.isDismissibleContentDismissed)(s.DismissibleContent.PREMIUM_TUTORIAL_EXPERIENCE);
                    return (0, E.isEligibleTrialSub)(e) && !t
                },
                P = () => {
                    let e = (0, E.hasActiveTrial)(),
                        t = (0, o.isDismissibleContentDismissed)(s.DismissibleContent.PREMIUM_TUTORIAL_EXPERIENCE),
                        i = u.default.getCurrentUser(),
                        n = (0, c.isPremiumExactly)(i, I.PremiumTypes.TIER_2),
                        r = d.default.hasFetchedPreviousPremiumTypeSubscription(),
                        a = d.default.getPreviousPremiumTypeSubscription();
                    return !r && n && !t && (0, l.fetchMostRecentSubscription)(), !t && !e && n && r && null == a
                },
                h = function(e) {
                    var t, i, n;
                    let r = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        s = T() && r,
                        {
                            enabled: l
                        } = _.default.getCurrentConfig({
                            location: e
                        }, {
                            disable: !s,
                            autoTrackExposure: s
                        }),
                        o = new Date().getTime(),
                        a = f.default.tutorialExpirationTime,
                        u = null !== (n = null === (i = d.default.getPremiumSubscription()) || void 0 === i ? void 0 : null === (t = i.createdAt) || void 0 === t ? void 0 : t.getTime()) && void 0 !== n ? n : 0,
                        c = P() && r,
                        E = m.default.getCurrentConfig({
                            location: e
                        }, {
                            disable: !c,
                            autoTrackExposure: c && o - u < 18e5
                        }).enabled && null != a && a > o;
                    return l || E
                },
                g = [];

            function U() {
                return I.PremiumTutorialStepOrder.filter(e => (0, o.isDismissibleContentDismissed)(e))
            }

            function S() {
                return function(e, t) {
                    let i = M("useMemoizedValueSyncedWithDismissibleContents"),
                        s = (0, r.useStateFromStores)([a.default], () => {
                            var e;
                            return null === (e = a.default.settings.userContent) || void 0 === e ? void 0 : e.dismissedContents
                        });
                    return n.useMemo(() => i ? e() : t, [i, t, e, s])
                }(U, g)
            }
        },
        67069: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return d
                }
            });
            var n = i("37983");
            i("884691");
            var r = i("414456"),
                s = i.n(r),
                l = i("791106"),
                o = i("216422"),
                a = i("258078"),
                u = i("63625");

            function d(e) {
                let {
                    text: t,
                    textSize: i = a.default.Sizes.SIZE_12,
                    textColor: r = a.default.Colors.STANDARD,
                    className: d,
                    button: c,
                    reducedRightPadding: E = !1
                } = e;
                return (0, n.jsxs)("div", {
                    className: s(E ? u.noticeWithoutRightPadding : u.noticeWithRightPadding, d),
                    children: [(0, n.jsxs)("div", {
                        className: u.noticeLeft,
                        children: [(0, n.jsx)(o.default, {
                            className: u.icon,
                            color: l.GradientCssUrls.PREMIUM_TIER_2
                        }), (0, n.jsx)(a.default, {
                            className: u.text,
                            size: i,
                            color: r,
                            children: t
                        })]
                    }), c]
                })
            }
        },
        474293: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                getClass: function() {
                    return r
                }
            });
            var n = i("159885");

            function r(e, t) {
                for (var i = arguments.length, r = Array(i > 2 ? i - 2 : 0), s = 2; s < i; s++) r[s - 2] = arguments[s];
                let l = r.reduce((e, t) => e + (0, n.upperCaseFirstChar)(t), ""),
                    o = "".concat(t).concat(l),
                    a = e[o];
                if (null != a) return a
            }
        },
        157590: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return l
                }
            });
            var n = i("817736"),
                r = i("118810");
            let s = {
                root: null,
                rootMargin: "0px",
                threshold: .5
            };
            class l {
                isVisible(e) {
                    return null == this._observer || this._visibleComponents.has(e)
                }
                observe(e) {
                    let t = this._observer;
                    if (null == t) return;
                    this.unobserve(e);
                    let i = (0, n.findDOMNode)(e);
                    (0, r.isElement)(i, HTMLElement) && (this._nodes.set(i, e), this._components.set(e, i), t.observe(i))
                }
                unobserve(e) {
                    let t = this._observer;
                    if (null == t) return;
                    let i = this._components.get(e);
                    null != i && (this._nodes.delete(i), this._components.delete(e), this._visibleComponents.delete(e), t.unobserve(i))
                }
                constructor(e = s) {
                    this._nodes = new WeakMap, this._components = new WeakMap, this._visibleComponents = new WeakSet, this._handleEntries = e => {
                        e.forEach(e => {
                            let t;
                            if (null != e.isIntersecting) t = e.isIntersecting;
                            else {
                                let {
                                    threshold: i
                                } = this._options;
                                t = null == i ? e.intersectionRatio > 0 : Array.isArray(i) ? i.some(t => e.intersectionRatio > t) : e.intersectionRatio > i
                            }
                            let i = this._nodes.get(e.target);
                            if (null != i) {
                                let e = !1;
                                t ? !this._visibleComponents.has(i) && (this._visibleComponents.add(i), e = !0) : this._visibleComponents.has(i) && (this._visibleComponents.delete(i), e = !0), e && i.forceUpdate()
                            }
                        })
                    }, this._options = e, null != window.IntersectionObserver && (this._observer = new window.IntersectionObserver(this._handleEntries, e))
                }
            }
        },
        235855: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return d
                }
            });
            var n = i("884691"),
                r = i("748820"),
                s = i("157590");
            let l = (0, r.v4)(),
                o = new Map,
                a = new Map;
            class u extends n.Component {
                componentDidMount() {
                    if (this.props.active) {
                        let e = this.getVisibilityObserver();
                        e.observe(this), this.isVisible = e.isVisible(this), this.props.onChange(this.isVisible)
                    }
                }
                componentDidUpdate(e) {
                    let t = this.getVisibilityObserver(),
                        i = t.isVisible(this);
                    this.props.active && i !== this.isVisible && this.props.onChange(i), !e.active && this.props.active ? t.observe(this) : e.active && !this.props.active && t.unobserve(this), this.isVisible = i
                }
                componentWillUnmount() {
                    this.getVisibilityObserver().unobserve(this)
                }
                getVisibilityObserverId() {
                    let {
                        rootMargin: e,
                        threshold: t
                    } = this.props;
                    return "".concat(this.elementId, " ").concat(e, " ").concat(t)
                }
                getVisibilityObserver() {
                    let e = this.getVisibilityObserverId(),
                        t = a.get(e);
                    if (!t) throw Error("Visibility sensor with id ".concat(e, " not found."));
                    return t
                }
                render() {
                    return n.Children.only(this.props.children)
                }
                constructor(e) {
                    super(e), this.isVisible = !1;
                    let {
                        root: t,
                        rootMargin: i,
                        threshold: n
                    } = e;
                    t ? o.has(t) ? this.elementId = o.get(t) || "" : o.set(t, (0, r.v4)()) : this.elementId = l;
                    let u = this.getVisibilityObserverId();
                    !a.has(u) && a.set(u, new s.default({
                        root: t,
                        rootMargin: i,
                        threshold: n
                    }))
                }
            }
            u.defaultProps = {
                active: !0,
                children: n.createElement("span"),
                root: null,
                rootMargin: "0px 0px 0px 0px",
                threshold: [0, Number.MIN_VALUE]
            };
            var d = u
        },
        290381: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                VisibilityObserver: function() {
                    return n.default
                },
                VisibilitySensor: function() {
                    return r.default
                }
            }), i("6268");
            var n = i("157590"),
                r = i("235855")
        }
    }
]);