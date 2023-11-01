(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["74307"], {
        304580: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var i, r, s = n("37983");
            n("884691");
            var o = n("414456"),
                l = n.n(o),
                u = n("394846"),
                a = n("77078"),
                d = n("945330"),
                c = n("381546"),
                f = n("782340"),
                E = n("955892");
            (i = r || (r = {})).DEFAULT = "", i.BOLD = "Bold", i.SOLID = "Solid";
            let _ = e => {
                let {
                    closeAction: t,
                    variant: n,
                    keybind: i,
                    className: o
                } = e;
                return (0, s.jsxs)("div", {
                    className: l(E.container, o),
                    children: [(0, s.jsx)(a.Clickable, {
                        className: l(E.closeButton, {
                            [E.closeButtonBold]: n === r.BOLD,
                            [E.closeButtonSolid]: n === r.SOLID
                        }),
                        onClick: t,
                        "aria-label": f.default.Messages.CLOSE,
                        children: n === r.SOLID ? (0, s.jsx)(c.default, {
                            width: 24,
                            height: 24,
                            "aria-hidden": !0
                        }) : (0, s.jsx)(d.default, {
                            width: 18,
                            height: 18,
                            "aria-hidden": !0
                        })
                    }), u.isMobile ? null : (0, s.jsx)("div", {
                        className: l(E.keybind),
                        "aria-hidden": !0,
                        children: i
                    })]
                })
            };
            _.defaultProps = {
                variant: r.DEFAULT
            }, _.Variants = r;
            var m = _
        },
        366634: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("414456"),
                s = n.n(r),
                o = n("748820"),
                l = n("291077");
            let u = (0, o.v4)();
            var a = e => {
                let {
                    open: t,
                    className: n,
                    withHighlight: r = !1
                } = e;
                return (0, i.jsxs)("svg", {
                    width: "18",
                    height: "18",
                    className: s(l.button, n, {
                        [l.open]: t,
                        [l.withHighlight]: r
                    }),
                    children: [r && (0, i.jsx)("defs", {
                        children: (0, i.jsxs)("linearGradient", {
                            id: u,
                            x1: "0",
                            y1: "0",
                            x2: "0",
                            y2: "18",
                            gradientUnits: "userSpaceOnUse",
                            children: [(0, i.jsx)("stop", {
                                offset: "0",
                                stopColor: "#B473F5"
                            }), (0, i.jsx)("stop", {
                                offset: "1",
                                stopColor: "#E292AA"
                            })]
                        })
                    }), (0, i.jsxs)("g", {
                        fill: "none",
                        fillRule: "evenodd",
                        children: [(0, i.jsx)("path", {
                            d: "M0 0h18v18H0"
                        }), (0, i.jsx)("path", {
                            stroke: r ? "url(#".concat(u, ")") : "currentColor",
                            d: "M4.5 4.5l9 9",
                            strokeLinecap: "round"
                        }), (0, i.jsx)("path", {
                            stroke: r ? "url(#".concat(u, ")") : "currentColor",
                            d: "M13.5 4.5l-9 9",
                            strokeLinecap: "round"
                        })]
                    })]
                })
            }
        },
        80300: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                backgroundImagePreloader: function() {
                    return d
                }
            });
            var i = n("37983"),
                r = n("884691"),
                s = n("310013"),
                o = n.n(s),
                l = n("407063");
            let u = /url\(['"](.*)['"]\)/,
                a = e => {
                    if (null == e || "" === e || "none" === e) return null;
                    let t = e.match(u);
                    return null != t ? t[1] : e
                };

            function d(e) {
                class t extends r.Component {
                    componentDidUpdate(e, t) {
                        if (t === this.state) return;
                        let {
                            cached: n,
                            loaded: i
                        } = this.state, {
                            style: r
                        } = this.props, s = null != r ? a(r.backgroundImage) : null;
                        null == s && s !== n ? this.setState({
                            loaded: !0,
                            cached: s
                        }) : this.cachedURLs.indexOf(s) >= 0 ? this.setState({
                            loaded: !0,
                            cached: s
                        }) : null != s && s !== n && !0 === i && this.setState({
                            loaded: !1
                        }, () => this.preloadURL(s))
                    }
                    preloadURL(e) {
                        this.canceller && this.canceller(), this.canceller = (0, l.loadImage)(e, t => {
                            this.canceller && (this.canceller = null), !t && (this.cachedURLs.push(e), this.setState({
                                cached: e,
                                loaded: !0
                            }));
                            let {
                                onBackgroundImageLoad: n
                            } = this.props;
                            n && n(t, e)
                        })
                    }
                    componentWillUnmount() {
                        this.canceller && this.canceller(), this.cachedURLs.length = 0
                    }
                    render() {
                        let {
                            style: t,
                            onBackgroundImageLoad: n,
                            ...r
                        } = this.props, {
                            loaded: s,
                            cached: o
                        } = this.state;
                        if (!s && null != t) {
                            var l;
                            t = {
                                ...t,
                                backgroundImage: null == (l = o) || "" === l || "none" === l ? "none" : "url(".concat(l, ")")
                            }
                        }
                        return (0, i.jsx)(e, {
                            style: t,
                            ...r
                        })
                    }
                    constructor(e) {
                        super(e), this.cachedURLs = [], this.canceller = null;
                        let {
                            style: t
                        } = e, n = null != t ? a(t.backgroundImage) : null;
                        this.cachedURLs = [n], this.state = {
                            cached: n,
                            loaded: !0
                        }
                    }
                }
                return o(t, e), t
            }
        },
        526887: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ConfettiCannonContext: function() {
                    return d
                },
                ConfettiCannonContextProvider: function() {
                    return c
                }
            });
            var i = n("37983"),
                r = n("884691"),
                s = n("516555"),
                o = n("65597"),
                l = n("206230"),
                u = n("49111");
            let a = {
                    confettiCanvas: null,
                    cannon: null,
                    createConfetti: () => void 0,
                    createConfettiAt: () => void 0,
                    createMultipleConfetti: () => [],
                    createMultipleConfettiAt: () => [],
                    addClickListener: () => u.NOOP,
                    removeClickListener: u.NOOP
                },
                d = r.createContext(a);

            function c(e) {
                let {
                    children: t,
                    confettiCanvas: n,
                    spriteCanvas: u,
                    baseConfig: c,
                    addClickListener: f,
                    removeClickListener: E
                } = e, _ = (0, s.useConfettiCannon)(n, u), m = (0, o.default)([l.default], () => l.default.useReducedMotion), p = r.useMemo(() => m ? a : {
                    confettiCanvas: n,
                    cannon: _,
                    createConfetti: (e, t) => _.createConfetti({
                        ...c,
                        ...e
                    }, t),
                    createConfettiAt: (e, t, n, i) => _.createConfetti({
                        ...c,
                        position: {
                            type: "static",
                            value: {
                                x: e,
                                y: t
                            }
                        },
                        ...n
                    }, i),
                    createMultipleConfetti: function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20,
                            n = arguments.length > 2 ? arguments[2] : void 0;
                        return _.createMultipleConfetti({
                            ...c,
                            ...e
                        }, t, n)
                    },
                    createMultipleConfettiAt: function(e, t, n) {
                        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 20,
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
                            ...n
                        }, i, r)
                    },
                    addClickListener: f,
                    removeClickListener: E
                }, [f, c, _, n, m, E]);
                return (0, i.jsx)(d.Provider, {
                    value: p,
                    children: t
                })
            }
        },
        614858: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                BadgeCategory: function() {
                    return r
                },
                getBadgeCategory: function() {
                    return o
                }
            });
            var i, r, s = n("883474");

            function o(e) {
                return e.staff ? r.STAFF : e.verified && e.partnered ? r.VERIFIED_AND_PARTNERED : e.verified ? r.VERIFIED : e.partnered ? r.PARTNERED : e.community && e.visibility === s.GuildVisibility.PUBLIC ? r.DISCOVERABLE : e.community ? r.COMMUNITY : r.NONE
            }(i = r || (r = {}))[i.PARTNERED = 0] = "PARTNERED", i[i.VERIFIED = 1] = "VERIFIED", i[i.VERIFIED_AND_PARTNERED = 2] = "VERIFIED_AND_PARTNERED", i[i.COMMUNITY = 3] = "COMMUNITY", i[i.DISCOVERABLE = 4] = "DISCOVERABLE", i[i.STAFF = 5] = "STAFF", i[i.NONE = 6] = "NONE"
        },
        347924: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useInServerBadgingExperiment: function() {
                    return s
                }
            });
            var i = n("862205");
            let r = (0, i.createExperiment)({
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
        883474: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GuildVisibility: function() {
                    return r
                },
                getGuildTraits: function() {
                    return l
                }
            });
            var i, r, s = n("813006"),
                o = n("49111");

            function l(e) {
                let t = new Set(e.features),
                    n = t.has(o.GuildFeatures.COMMUNITY) && t.has(o.GuildFeatures.DISCOVERABLE) ? r.PUBLIC : r.INVITE_ONLY,
                    i = function(e) {
                        return null != e && (e instanceof s.default ? e.premiumSubscriberCount > 0 || e.premiumTier > o.BoostedGuildTiers.NONE : null != e.premiumSubscriptionCount && e.premiumSubscriptionCount > 0)
                    }(e),
                    l = 0;
                if (i) {
                    var u;
                    l = null !== (u = e instanceof s.default ? e.premiumSubscriberCount : e.premiumSubscriptionCount) && void 0 !== u ? u : 0
                }
                let a = e instanceof s.default ? e.premiumTier : o.BoostedGuildTiers.NONE;
                return {
                    verified: t.has(o.GuildFeatures.VERIFIED),
                    partnered: t.has(o.GuildFeatures.PARTNERED),
                    community: t.has(o.GuildFeatures.COMMUNITY),
                    staff: t.has(o.GuildFeatures.INTERNAL_EMPLOYEE_ONLY),
                    visibility: n,
                    premium: i,
                    premiumSubscriberCount: l,
                    premiumTier: a
                }
            }(i = r || (r = {})).PUBLIC = "PUBLIC", i.INVITE_ONLY = "INVITE_ONLY"
        },
        51565: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("614858"),
                r = n("347924"),
                s = n("883474");
            let o = new Set([i.BadgeCategory.PARTNERED, i.BadgeCategory.VERIFIED, i.BadgeCategory.VERIFIED_AND_PARTNERED, i.BadgeCategory.COMMUNITY, i.BadgeCategory.DISCOVERABLE]);

            function l(e) {
                var t;
                let n = (0, r.useInServerBadgingExperiment)(null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : "");
                if (!n || null == e) return !1;
                let l = (0, s.getGuildTraits)(e),
                    u = (0, i.getBadgeCategory)(l);
                return o.has(u)
            }
        },
        863921: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("414456"),
                s = n.n(r),
                o = n("931138"),
                l = n("206453"),
                u = n("49111"),
                a = n("323755");
            let d = {
                    [u.BoostedGuildTiers.NONE]: a.iconBackgroundTierNone,
                    [u.BoostedGuildTiers.TIER_1]: a.iconBackgroundTierOne,
                    [u.BoostedGuildTiers.TIER_2]: a.iconBackgroundTierTwo,
                    [u.BoostedGuildTiers.TIER_3]: a.iconBackgroundTierThree
                },
                c = {
                    [u.BoostedGuildTiers.NONE]: a.iconTierNone,
                    [u.BoostedGuildTiers.TIER_1]: a.iconTierOne,
                    [u.BoostedGuildTiers.TIER_2]: a.iconTierTwo,
                    [u.BoostedGuildTiers.TIER_3]: a.iconTierThree
                };

            function f(e) {
                let {
                    premiumTier: t,
                    iconBackgroundClassName: n,
                    iconClassName: r,
                    size: u
                } = e;
                return (0, i.jsx)(o.default, {
                    className: s(n, d[t]),
                    size: u,
                    children: (0, i.jsx)(l.default, {
                        tier: t,
                        className: s(r, a.boostedGuildIconGem, c[t])
                    })
                })
            }
        },
        944305: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                customRoleIconUpsellPerks: function() {
                    return O
                },
                guildBannerUpsellPerks: function() {
                    return A
                },
                animatedGuildBannerUpsellPerks: function() {
                    return w
                },
                vanityUrlUpsellPerks: function() {
                    return D
                },
                guildInviteUpsellPerks: function() {
                    return B
                },
                guildBoostingPerks: function() {
                    return y
                },
                premiumProgressBarUpsellPerks: function() {
                    return x
                }
            });
            var i = n("669491"),
                r = n("245307"),
                s = n("571658"),
                o = n("118503"),
                l = n("110006"),
                u = n("682344"),
                a = n("238521"),
                d = n("394832"),
                c = n("290581"),
                f = n("595086"),
                E = n("885541"),
                _ = n("49111");
            n("646718");
            var m = n("782340");
            let p = () => ({
                    color: i.default.unsafe_rawColors.PREMIUM_PERK_GREEN.css,
                    icon: a.default,
                    description: m.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_CUSTOM_INVITE
                }),
                I = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i.default.unsafe_rawColors.PREMIUM_PERK_ORANGE.css;
                    return {
                        color: e,
                        icon: l.default,
                        description: m.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_ANIMATED_ICON
                    }
                },
                P = () => ({
                    color: i.default.unsafe_rawColors.PREMIUM_PERK_GREEN.css,
                    icon: a.default,
                    description: m.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_GUILD_BANNER
                }),
                T = () => ({
                    color: i.default.unsafe_rawColors.PREMIUM_PERK_GREEN.css,
                    icon: l.default,
                    description: m.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_ANIMATED_GUILD_BANNER
                }),
                R = () => ({
                    color: i.default.unsafe_rawColors.PREMIUM_PERK_ORANGE.css,
                    icon: u.default,
                    description: m.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_ROLE_ICON
                }),
                h = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i.default.unsafe_rawColors.PREMIUM_PERK_PURPLE.css;
                    return {
                        color: e,
                        icon: f.default,
                        description: m.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_STICKERS
                    }
                },
                M = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.default.unsafe_rawColors.PREMIUM_PERK_PURPLE.css,
                        n = 0,
                        r = 0;
                    switch (e) {
                        case _.BoostedGuildTiers.TIER_1:
                            n = 15, r = 100;
                            break;
                        case _.BoostedGuildTiers.TIER_2:
                            n = 30, r = 150;
                            break;
                        case _.BoostedGuildTiers.TIER_3:
                            n = 60, r = 250
                    }
                    return {
                        color: t,
                        icon: f.default,
                        description: m.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_STICKERS_AND_EMOJIS.format({
                            numStickers: n,
                            numEmojis: r
                        })
                    }
                },
                g = () => ({
                    color: i.default.unsafe_rawColors.PREMIUM_PERK_GOLD.css,
                    icon: c.default,
                    description: m.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_VANITY_URL
                }),
                S = () => ({
                    icon: r.default,
                    description: m.default.Messages.PREMIUM_GUILD_USER_FEATURE_PROFILE_BADGE
                }),
                U = () => ({
                    icon: o.default,
                    color: i.default.unsafe_rawColors.PREMIUM_PERK_PINK.css,
                    description: m.default.Messages.PREMIUM_GUILD_USER_FEATURE_BOOST_CRYSTAL
                }),
                v = () => ({
                    icon: u.default,
                    color: i.default.unsafe_rawColors.PREMIUM_PERK_YELLOW.css,
                    description: m.default.Messages.PREMIUM_GUILD_USER_FEATURE_SPECIAL_ROLE
                }),
                C = () => ({
                    color: i.default.unsafe_rawColors.PREMIUM_PERK_BLUE.css,
                    icon: s.default,
                    description: m.default.Messages.PREMIUM_GUILD_USER_FEATURE_OTHERS
                }),
                N = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_OTHER;
                    return {
                        color: i.default.unsafe_rawColors.PREMIUM_PERK_BLUE.css,
                        icon: s.default,
                        description: e
                    }
                },
                L = () => ({
                    color: i.default.unsafe_rawColors.PREMIUM_PERK_PURPLE.css,
                    icon: E.default,
                    description: m.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_FILE_UPLOAD_TIER_3
                }),
                b = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i.default.unsafe_rawColors.PREMIUM_PERK_GREEN.css;
                    return {
                        color: e,
                        icon: d.default,
                        description: m.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_SCREEN_SHARE_1080P
                    }
                };

            function O() {
                return [R(), P(), h(), N()]
            }

            function A() {
                return [R(), M(_.BoostedGuildTiers.TIER_2), b(), N()]
            }

            function w() {
                return [M(_.BoostedGuildTiers.TIER_3, i.default.unsafe_rawColors.PREMIUM_PERK_GREEN.css), L(), g(), N()]
            }

            function D() {
                return [g(), T(), M(_.BoostedGuildTiers.TIER_3), N()]
            }

            function B() {
                return [p(), h(), I(), N()]
            }

            function y() {
                return [h(), N()]
            }

            function x() {
                return [U(), v(), S(), C()]
            }
        },
        836275: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                openGuildBannerUpsellModal: function() {
                    return _
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("77078"),
                s = n("366634"),
                o = n("974755"),
                l = n("427459"),
                u = n("379532"),
                a = n("944305"),
                d = n("49111"),
                c = n("782340"),
                f = n("670362");

            function E(e) {
                let {
                    guild: t,
                    banner: n
                } = e;
                return (0, i.jsx)("div", {
                    className: f.guildBanner,
                    style: {
                        backgroundImage: "url(".concat(n)
                    },
                    children: (0, i.jsxs)("div", {
                        className: f.guildHeader,
                        children: [(0, i.jsx)(o.default, {
                            guild: t,
                            isBannerVisible: !0
                        }), (0, i.jsx)(r.Heading, {
                            className: f.guildName,
                            variant: "heading-md/semibold",
                            children: t.toString()
                        }), (0, i.jsx)(s.default, {
                            className: f.dropdown,
                            open: !1
                        })]
                    })
                })
            }

            function _(e) {
                let {
                    analyticsLocations: t,
                    analyticsLocation: n,
                    guild: r,
                    isGIF: s,
                    banner: o
                } = e, f = s ? (0, l.minimumRequiredTierForGuildFeature)(d.GuildFeatures.ANIMATED_BANNER) : (0, l.minimumRequiredTierForGuildFeature)(d.GuildFeatures.BANNER);
                null != f && (0, u.default)({
                    analyticsLocations: t,
                    analyticsSourceLocation: n,
                    guild: r,
                    headerProps: {
                        title: c.default.Messages.GUILD_BANNER_UPSELL_MODAL_TITLE,
                        subtitle: function(e, t) {
                            let n = (0, l.getTierName)(e);
                            return t ? c.default.Messages.GUILD_BANNER_UPSELL_MODAL_SUBTITLE_ANIMATED.format({
                                targetLevelOrPlan: n
                            }) : c.default.Messages.GUILD_BANNER_UPSELL_MODAL_SUBTITLE_STATIC.format({
                                targetLevelOrPlan: n
                            })
                        }(f, s),
                        image: (0, i.jsx)(E, {
                            guild: r,
                            banner: o
                        })
                    },
                    perkIntro: c.default.Messages.GUILD_BANNER_UPSELL_MODAL_PERK_INTRO,
                    perks: s ? (0, a.animatedGuildBannerUpsellPerks)() : (0, a.guildBannerUpsellPerks)()
                })
            }
        },
        379532: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("77078"),
                s = n("292687"),
                o = n("974889"),
                l = n("599110"),
                u = n("49111");

            function a(e, t) {
                let a = null != t ? t : "".concat(u.AnalyticsSections.PREMIUM_GUILD_UPSELL_MODAL);
                null != e.targetBoostedGuildTier && (a += " - Tier ".concat(e.targetBoostedGuildTier));
                l.default.track(u.AnalyticEvents.OPEN_MODAL, {
                    type: a,
                    location: e.analyticsSourceLocation
                });
                let {
                    openInPopoutEnabled: d,
                    ...c
                } = e, f = s.default.getWindowOpen(u.PopoutWindowKeys.CHANNEL_CALL_POPOUT) && null != d && d;
                f && (0, o.default)(u.PopoutWindowKeys.CHANNEL_CALL_POPOUT);
                let E = f ? r.POPOUT_MODAL_CONTEXT : r.DEFAULT_MODAL_CONTEXT;
                (0, r.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("874642").then(n.bind(n, "874642"));
                    return t => (0, i.jsx)(e, {
                        ...c,
                        ...t
                    })
                }, {
                    onCloseCallback: () => {
                        l.default.track(u.AnalyticEvents.MODAL_DISMISSED, {
                            type: a,
                            location: e.analyticsSourceLocation
                        })
                    },
                    contextKey: E
                })
            }
        },
        974755: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("414456"),
                s = n.n(r),
                o = n("446674"),
                l = n("77078"),
                u = n("51565"),
                a = n("95039"),
                d = n("863921"),
                c = n("26989"),
                f = n("697218"),
                E = n("580357"),
                _ = n("40469"),
                m = n("427459"),
                p = n("49111"),
                I = n("782340"),
                P = n("129818");

            function T(e) {
                let {
                    guild: t,
                    isBannerVisible: n,
                    disableBoostClick: r
                } = e, s = (0, o.useStateFromStores)([f.default, c.default], () => {
                    let e = f.default.getCurrentUser();
                    return c.default.isMember(t.id, null == e ? void 0 : e.id)
                }), {
                    premiumTier: u,
                    premiumSubscriberCount: E
                } = t;
                if (0 === E && u === p.BoostedGuildTiers.NONE) return null;
                let _ = e => {
                        e.stopPropagation(), e.preventDefault(), s && !r && (0, a.openGuildBoostingMarketingModal)({
                            guildId: t.id,
                            location: {
                                section: p.AnalyticsSections.GUILD_HEADER,
                                object: p.AnalyticsObjects.BOOST_GEM_ICON
                            }
                        })
                    },
                    T = u === p.BoostedGuildTiers.NONE ? I.default.Messages.PREMIUM_GUILD_HEADER_BADGE_NO_TIER : m.getTierName(u),
                    R = (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("div", {
                            className: P.tierTooltipTitle,
                            children: T
                        }), (0, i.jsx)("div", {
                            children: I.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_SUBSCRIBER_COUNT_TOOLTIP.format({
                                subscriberCount: E
                            })
                        })]
                    });
                return (0, i.jsx)("div", {
                    className: P.guildIconContainer,
                    children: (0, i.jsx)(l.Tooltip, {
                        text: R,
                        position: "bottom",
                        "aria-label": null != T ? T : "",
                        children: e => (0, i.jsx)(l.Clickable, {
                            ...e,
                            className: P.premiumGuildIcon,
                            onClick: _,
                            children: (0, i.jsx)(d.default, {
                                premiumTier: u,
                                iconBackgroundClassName: n ? P.boostedGuildTierIconBackgroundWithVisibleBanner : null,
                                iconClassName: n && u !== p.BoostedGuildTiers.TIER_3 ? P.boostedGuildTierMutedIconWithVisibleBanner : null
                            })
                        })
                    })
                })
            }

            function R(e) {
                let {
                    guild: t,
                    disableColor: n,
                    disableBoostClick: r
                } = e, o = (0, u.default)(t);
                return o ? (0, i.jsx)("div", {
                    className: P.guildIconV2Container,
                    children: (0, i.jsx)(_.default, {
                        guild: t,
                        tooltipPosition: "bottom",
                        tooltipColor: l.Tooltip.Colors.PRIMARY,
                        className: s(P.guildBadge, {
                            [P.disableColor]: n
                        }),
                        disableBoostClick: r
                    })
                }) : (0, i.jsx)("div", {
                    className: P.guildIconContainer,
                    children: (0, i.jsx)(E.default, {
                        guild: t,
                        tooltipPosition: "bottom",
                        tooltipColor: l.Tooltip.Colors.PRIMARY,
                        className: s(P.guildBadge, {
                            [P.disableColor]: n
                        })
                    })
                })
            }

            function h(e) {
                let {
                    guild: t,
                    isBannerVisible: n,
                    disableBoostClick: r
                } = e, s = (0, u.default)(t);
                if (s) return (0, i.jsx)(R, {
                    guild: t,
                    disableColor: !1,
                    disableBoostClick: r
                });
                let o = t.hasFeature(p.GuildFeatures.VERIFIED) || t.hasFeature(p.GuildFeatures.PARTNERED);
                return o ? (0, i.jsx)(R, {
                    guild: t,
                    disableColor: !n
                }) : (0, i.jsx)(T, {
                    guild: t,
                    isBannerVisible: n,
                    disableBoostClick: r
                })
            }
        },
        507497: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("446674"),
                s = n("77078"),
                o = n("685665"),
                l = n("836275"),
                u = n("379532"),
                a = n("305961"),
                d = n("162771"),
                c = n("118503"),
                f = n("49111"),
                E = n("944305"),
                _ = n("782340"),
                m = n("323723");

            function p(e) {
                let {
                    analyticsSection: t,
                    analyticsPage: n,
                    isGIF: p,
                    banner: I
                } = e, P = (0, r.useStateFromStores)([d.default], () => d.default.getGuildId()), T = (0, r.useStateFromStores)([a.default], () => a.default.getGuild(P)), {
                    analyticsLocations: R
                } = (0, o.default)();
                return null == T || T.hasFeature(f.GuildFeatures.ANIMATED_BANNER) || !p && T.hasFeature(f.GuildFeatures.BANNER) ? null : (0, i.jsxs)("div", {
                    className: m.container,
                    children: [(0, i.jsx)(c.default, {
                        className: m.guildBoostingIcon
                    }), (0, i.jsx)(s.Text, {
                        color: "header-primary",
                        variant: "text-sm/semibold",
                        children: _.default.Messages.PREMIUM_GUILD_PREVIEW
                    }), (0, i.jsx)(s.Button, {
                        look: s.Button.Looks.LINK,
                        color: s.Button.Colors.LINK,
                        className: m.subscribeButton,
                        onClick: () => {
                            if (null == T) return;
                            let e = {
                                section: t,
                                page: n,
                                object: f.AnalyticsObjects.UPSELL_HEADER
                            };
                            null != I ? (0, l.openGuildBannerUpsellModal)({
                                analyticsLocations: R,
                                analyticsLocation: e,
                                guild: T,
                                isGIF: p,
                                banner: I
                            }) : (0, u.default)({
                                analyticsLocations: R,
                                analyticsSourceLocation: e,
                                guild: T,
                                perks: p ? (0, E.animatedGuildBannerUpsellPerks)() : (0, E.guildBannerUpsellPerks)()
                            })
                        },
                        children: _.default.Messages.PREMIUM_GUILD_BOOST_SERVER
                    })]
                })
            }
        },
        193867: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return R
                }
            });
            var i = n("37983"),
                r = n("884691"),
                s = n("446674"),
                o = n("77078"),
                l = n("812204"),
                u = n("685665"),
                a = n("67069"),
                d = n("635956"),
                c = n("697218"),
                f = n("258078"),
                E = n("599110"),
                _ = n("719923"),
                m = n("49111"),
                p = n("75015"),
                I = n("646718"),
                P = n("782340"),
                T = n("123342");

            function R(e) {
                let {
                    analyticsSection: t,
                    type: n
                } = e, R = (0, s.useStateFromStores)([c.default], () => c.default.getCurrentUser()), h = _.default.canUseAnimatedAvatar(R), M = _.default.canUsePremiumProfileCustomization(R), g = n === p.UploadTypes.BANNER && M || n === p.UploadTypes.AVATAR && h, {
                    sourceAnalyticsLocations: S
                } = (0, u.default)(l.default.PREMIUM_PREVIEW_UPSELL_HEADER);
                if (r.useEffect(() => {
                        !g && E.default.track(m.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                            type: t,
                            location_stack: S
                        })
                    }, [g, t, S]), g) return null;
                let U = (0, i.jsx)(d.default, {
                    className: T.getNitroLink,
                    size: o.Button.Sizes.SMALL,
                    look: o.Button.Looks.LINK,
                    color: o.Button.Colors.LINK,
                    subscriptionTier: I.PremiumSubscriptionSKUs.TIER_2,
                    buttonText: P.default.Messages.PREMIUM_PREVIEW_GET_NITRO.format(),
                    showIcon: !1,
                    premiumModalAnalyticsLocation: {
                        section: t,
                        object: m.AnalyticsObjects.BUTTON_CTA
                    },
                    disableShine: !0
                });
                return (0, i.jsx)(a.default, {
                    reducedRightPadding: !0,
                    className: T.nitroPreviewUpsell,
                    text: P.default.Messages.PREMIUM_PREVIEW.format(),
                    textSize: f.default.Sizes.SIZE_14,
                    textColor: f.default.Colors.HEADER_PRIMARY,
                    button: U
                })
            }
        },
        652914: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("507497"),
                s = n("193867"),
                o = n("75015");

            function l(e) {
                let {
                    type: t,
                    analyticsPage: n,
                    analyticsSection: l,
                    isGIF: u,
                    banner: a
                } = e;
                return [o.UploadTypes.BANNER, o.UploadTypes.AVATAR].includes(t) && u ? (0, i.jsx)(s.default, {
                    analyticsSection: l,
                    type: t
                }) : t === o.UploadTypes.GUILD_BANNER ? (0, i.jsx)(r.default, {
                    analyticsSection: l,
                    analyticsPage: n,
                    isGIF: u,
                    banner: a
                }) : null
            }
        },
        870346: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return L
                }
            });
            var i = n("627445"),
                r = n.n(i),
                s = n("917351"),
                o = n.n(s),
                l = n("288661"),
                u = n("446674"),
                a = n("913144"),
                d = n("605250"),
                c = n("773336"),
                f = n("50885"),
                E = n("563680"),
                _ = n("49111");
            let m = {},
                p = {},
                I = {},
                P = {},
                T = {},
                R = new Set,
                h = () => N.emitChange(),
                M = o.debounce(h, 150);

            function g(e) {
                let t = I[e];
                null != t && !t.closed && (m[e] = {
                    x: t.screenX,
                    y: t.screenY,
                    width: t.innerWidth,
                    height: t.innerHeight,
                    alwaysOnTop: !!c.isPlatformEmbedded && p[e]
                })
            }

            function S(e) {
                let t = I[e];
                null != t && (!t.closed && g(e), t.close(), ! function(e) {
                    let t = I[e];
                    r(null != t, "Popout window was null during unmount"), t.removeEventListener("focus", h), t.removeEventListener("blur", h), t.removeEventListener("resize", M);
                    let n = P[e];
                    r(null != n, "Window root was null while unmounting"), n.unmount(), delete I[e], delete p[e], delete T[e], delete P[e]
                }(e), N.emitChange())
            }

            function U(e) {
                let {
                    data: t
                } = e;
                if (!(t instanceof Object && t.discordPopoutEvent instanceof Object)) return;
                let n = t.discordPopoutEvent;
                if (null != n.key) switch (n.type) {
                    case _.PopoutEventTypes.LOADED:
                        var i;
                        return i = n.key, void(R.has(i) && (! function(e) {
                            let t = I[e],
                                n = T[e];
                            if (null == t) {
                                new(0, d.default)("PopoutWindowStore").warn("Failed to open window", e);
                                return
                            }
                            let i = t.document;
                            (0, E.subscribeDocumentToFullScreenChange)(i, h), t.addEventListener("focus", h), t.addEventListener("blur", h), t.addEventListener("resize", M), ! function(e, t) {
                                let n = t.document,
                                    i = document.querySelectorAll('link[rel="stylesheet"]'),
                                    s = "".concat(window.location.protocol, "//").concat(window.location.host);
                                for (let e of i) {
                                    if (!e.href.startsWith(s)) continue;
                                    let t = n.createElement("link");
                                    t.href = e.href, t.rel = e.rel, t.integrity = e.integrity, r(null != n.head, "Document head was null"), n.head.appendChild(t)
                                }
                            }(0, t);
                            let s = (0, l.createRoot)(i.getElementById("app-mount"));
                            r(null != s, "No render target for popout!"), P[e] = s, s.render(n(e))
                        }(i), R.delete(i), N.emitChange()));
                    case _.PopoutEventTypes.UNLOADED:
                        return S(n.key)
                }
            }

            function v() {
                for (let e of Object.keys(I)) {
                    let t = I[e];
                    null != t && t.close()
                }
            }
            class C extends u.default.PersistedStore {
                initialize(e) {
                    window.addEventListener("message", U), window.addEventListener("beforeunload", v), m = null != e ? e : {}
                }
                getWindow(e) {
                    return I[e]
                }
                getWindowState(e) {
                    return m[e]
                }
                getWindowKeys() {
                    return Object.keys(I)
                }
                getWindowOpen(e) {
                    let t = I[e];
                    return null != t && !t.closed
                }
                getIsAlwaysOnTop(e) {
                    return !!p[e]
                }
                getWindowFocused(e) {
                    var t, n;
                    let i = I[e];
                    return null !== (n = null == i ? void 0 : null === (t = i.document) || void 0 === t ? void 0 : t.hasFocus()) && void 0 !== n && n
                }
                getState() {
                    return m
                }
                unmountWindow(e) {
                    return S(e)
                }
            }
            C.displayName = "PopoutWindowStore", C.persistKey = "PopoutWindowStore";
            let N = new C(a.default, {
                POPOUT_WINDOW_OPEN: function(e) {
                    let {
                        key: t,
                        features: n,
                        render: i
                    } = e;
                    if (c.isPlatformEmbedded && !f.default.supportsFeature(_.NativeFeatures.POPOUT_WINDOWS)) throw Error("Popout windows not supported on this native module version!");
                    let r = I[t];
                    if (null != r && !r.closed) return c.isPlatformEmbedded ? f.default.focus(t) : r.focus(), !1;
                    let {
                        defaultWidth: s,
                        defaultHeight: o,
                        defaultAlwaysOnTop: l = !1,
                        ...u
                    } = n, a = u, d = l, E = m[t];
                    if (null != E) {
                        let {
                            width: e,
                            height: t,
                            x: n,
                            y: i,
                            alwaysOnTop: r
                        } = E;
                        d = null != r ? r : l, a = {
                            width: null != e && 0 !== e ? e : s,
                            height: null != t && 0 !== t ? t : o,
                            left: n,
                            top: i,
                            ...a
                        }
                    }
                    let P = window.open(_.Routes.POPOUT_WINDOW, t, function(e) {
                        let t = "";
                        for (let n of Object.keys(e)) {
                            let i = e[n];
                            void 0 !== i && ("boolean" == typeof i && (i = i ? "yes" : "no"), t += "".concat(n, "=").concat(i, ","))
                        }
                        return t
                    }(a));
                    P.windowKey = t, null == P || P.focus(), I[t] = P, T[t] = i, c.isPlatformEmbedded && (f.default.setAlwaysOnTop(t, d), p[t] = d, f.default.isAlwaysOnTop(t).then(e => p[t] = e)), R.add(t)
                },
                POPOUT_WINDOW_CLOSE: function(e) {
                    let {
                        key: t
                    } = e, n = I[t];
                    null != n && !n.closed && (g(t), n.close())
                },
                POPOUT_WINDOW_SET_ALWAYS_ON_TOP: function(e) {
                    let {
                        key: t,
                        alwaysOnTop: n
                    } = e;
                    c.isPlatformEmbedded && (f.default.setAlwaysOnTop(t, n), p[t] = n, f.default.isAlwaysOnTop(t).then(e => p[t] = e))
                },
                LOGOUT: v
            });
            var L = N
        },
        292687: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i.default
                }
            });
            var i = n("870346")
        },
        974889: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("773336"),
                r = n("50885"),
                s = n("870346");

            function o(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = s.default.getWindow(e);
                null != n && !n.closed && (i.isPlatformEmbedded ? r.default.focus(e, t) : n.focus())
            }
        },
        824986: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PremiumTutorialTooltips: function() {
                    return s
                },
                default: function() {
                    return m
                }
            });
            var i, r, s, o = n("446674"),
                l = n("913144"),
                u = n("521012"),
                a = n("565785"),
                d = n("646718");
            (i = s || (s = {})).FILE_UPLOAD = "file_upload", i.STICKER_PICKER = "sticker_picker", i.EMOJI_PICKER = "emoji_picker", i.BOOSTING_FLOW = "boosting_flow";
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

            function f() {
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

            function E() {
                let e = new Date;
                e.setDate(e.getDate() + 14), c.tutorialExpirationTime = e.getTime()
            }
            class _ extends o.default.PersistedStore {
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
            var m = new _(l.default, {
                PREMIUM_TUTORIAL_PERSISTENT_ONBOARDING_TOGGLE_COLLAPSE: function() {
                    c.isPersistentCoachmarkCollapsed = !c.isPersistentCoachmarkCollapsed
                },
                UPDATE_HAS_FLOW_START_EVENT_BEEN_EMITTED: function(e) {
                    let {
                        event: t,
                        value: n
                    } = e;
                    c.hasFlowStartEventBeenEmitted[t] = n
                },
                LOGOUT: function() {
                    f()
                },
                RESET_PREMIUM_TUTORIAL_STORE: f,
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
                        helperMedia: n
                    } = e;
                    c.wowMomentWumpusMediaUrl = t, c.wowMomentHelperMediaUrl = n, c.isFetchingWowMomentMedia = !1
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
                        enabled: n
                    } = a.default.getCurrentConfig({
                        location: "5f2710_1"
                    }, {
                        autoTrackExposure: !1
                    });
                    n && null != t.items.find(e => d.PREMIUM_TIER_2_PLANS.has(e.plan_id)) && E()
                },
                GIFT_CODE_REDEEM_SUCCESS: function(e) {
                    let {
                        entitlement: t
                    } = e, {
                        enabled: n
                    } = a.default.getCurrentConfig({
                        location: "5f2710_2"
                    }, {
                        autoTrackExposure: !1
                    });
                    n && (null == t ? void 0 : t.sku_id) === d.PremiumSubscriptionSKUs.TIER_2 && null == u.default.getPremiumSubscription(!1) && null == c.tutorialExpirationTime && E()
                }
            })
        },
        694768: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("862205");
            let r = (0, i.createExperiment)({
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
        565785: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("862205");
            let r = (0, i.createExperiment)({
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
        921228: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useIsPremiumTutorialEnabled: function() {
                    return T
                },
                isPremiumTutorialEnabled: function() {
                    return M
                },
                useAllDismissedPremiumTutorialSteps: function() {
                    return U
                }
            });
            var i = n("884691"),
                r = n("446674"),
                s = n("151426"),
                o = n("850068"),
                l = n("10641"),
                u = n("374363"),
                a = n("697218"),
                d = n("521012"),
                c = n("719923"),
                f = n("324878"),
                E = n("824986"),
                _ = n("694768"),
                m = n("565785"),
                p = n("646718");
            let I = () => {
                    let e = (0, r.useStateFromStores)([d.default], () => d.default.getPremiumTypeSubscription()),
                        t = (0, l.useIsDismissibleContentDismissed)(s.DismissibleContent.PREMIUM_TUTORIAL_EXPERIENCE);
                    return (0, f.isEligibleTrialSub)(e) && !t
                },
                P = () => {
                    let e = (0, f.useHasActiveTrial)(),
                        t = (0, l.useIsDismissibleContentDismissed)(s.DismissibleContent.PREMIUM_TUTORIAL_EXPERIENCE),
                        n = (0, r.useStateFromStores)([a.default], () => a.default.getCurrentUser()),
                        u = (0, c.isPremiumExactly)(n, p.PremiumTypes.TIER_2),
                        E = (0, r.useStateFromStores)([d.default], () => d.default.hasFetchedPreviousPremiumTypeSubscription()),
                        _ = (0, r.useStateFromStores)([d.default], () => d.default.getPreviousPremiumTypeSubscription()),
                        m = !e && u;
                    i.useEffect(() => {
                        m && !E && !t && (0, o.fetchMostRecentSubscription)()
                    }, [m, E, t]);
                    let I = m && E && null == _;
                    return I && !t
                };

            function T(e) {
                var t;
                let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    i = I() && n,
                    {
                        enabled: s
                    } = _.default.useExperiment({
                        location: e
                    }, {
                        autoTrackExposure: i,
                        disable: !i
                    }),
                    o = (0, r.useStateFromStores)([E.default], () => E.default.tutorialExpirationTime),
                    l = new Date().getTime(),
                    u = (0, r.useStateFromStores)([d.default], () => {
                        var e, n;
                        return null !== (t = null === (n = d.default.getPremiumSubscription()) || void 0 === n ? void 0 : null === (e = n.createdAt) || void 0 === e ? void 0 : e.getTime()) && void 0 !== t ? t : 0
                    }),
                    a = P() && n,
                    c = m.default.useExperiment({
                        location: e
                    }, {
                        autoTrackExposure: a && l - u < 18e5,
                        disable: !a
                    }).enabled && null != o && o > l;
                return s || c
            }
            let R = () => {
                    let e = d.default.getPremiumTypeSubscription(),
                        t = (0, l.isDismissibleContentDismissed)(s.DismissibleContent.PREMIUM_TUTORIAL_EXPERIENCE);
                    return (0, f.isEligibleTrialSub)(e) && !t
                },
                h = () => {
                    let e = (0, f.hasActiveTrial)(),
                        t = (0, l.isDismissibleContentDismissed)(s.DismissibleContent.PREMIUM_TUTORIAL_EXPERIENCE),
                        n = a.default.getCurrentUser(),
                        i = (0, c.isPremiumExactly)(n, p.PremiumTypes.TIER_2),
                        r = d.default.hasFetchedPreviousPremiumTypeSubscription(),
                        u = d.default.getPreviousPremiumTypeSubscription();
                    return !r && i && !t && (0, o.fetchMostRecentSubscription)(), !t && !e && i && r && null == u
                },
                M = function(e) {
                    var t, n, i;
                    let r = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        s = R() && r,
                        {
                            enabled: o
                        } = _.default.getCurrentConfig({
                            location: e
                        }, {
                            disable: !s,
                            autoTrackExposure: s
                        }),
                        l = new Date().getTime(),
                        u = E.default.tutorialExpirationTime,
                        a = null !== (i = null === (n = d.default.getPremiumSubscription()) || void 0 === n ? void 0 : null === (t = n.createdAt) || void 0 === t ? void 0 : t.getTime()) && void 0 !== i ? i : 0,
                        c = h() && r,
                        f = m.default.getCurrentConfig({
                            location: e
                        }, {
                            disable: !c,
                            autoTrackExposure: c && l - a < 18e5
                        }).enabled && null != u && u > l;
                    return o || f
                },
                g = [];

            function S() {
                return p.PremiumTutorialStepOrder.filter(e => (0, l.isDismissibleContentDismissed)(e))
            }

            function U() {
                return function(e, t) {
                    let n = T("useMemoizedValueSyncedWithDismissibleContents"),
                        s = (0, r.useStateFromStores)([u.default], () => {
                            var e;
                            return null === (e = u.default.settings.userContent) || void 0 === e ? void 0 : e.dismissedContents
                        });
                    return i.useMemo(() => n ? e() : t, [n, t, e, s])
                }(S, g)
            }
        },
        67069: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("414456"),
                s = n.n(r),
                o = n("791106"),
                l = n("216422"),
                u = n("258078"),
                a = n("63625");

            function d(e) {
                let {
                    text: t,
                    textSize: n = u.default.Sizes.SIZE_12,
                    textColor: r = u.default.Colors.STANDARD,
                    className: d,
                    button: c,
                    reducedRightPadding: f = !1
                } = e;
                return (0, i.jsxs)("div", {
                    className: s(f ? a.noticeWithoutRightPadding : a.noticeWithRightPadding, d),
                    children: [(0, i.jsxs)("div", {
                        className: a.noticeLeft,
                        children: [(0, i.jsx)(l.default, {
                            className: a.icon,
                            color: o.GradientCssUrls.PREMIUM_TIER_2
                        }), (0, i.jsx)(u.default, {
                            className: a.text,
                            size: n,
                            color: r,
                            children: t
                        })]
                    }), c]
                })
            }
        },
        474293: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getClass: function() {
                    return r
                }
            });
            var i = n("159885");

            function r(e, t) {
                for (var n = arguments.length, r = Array(n > 2 ? n - 2 : 0), s = 2; s < n; s++) r[s - 2] = arguments[s];
                let o = r.reduce((e, t) => e + (0, i.upperCaseFirstChar)(t), ""),
                    l = "".concat(t).concat(o),
                    u = e[l];
                if (null != u) return u
            }
        },
        157590: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("817736"),
                r = n("118810");
            let s = {
                root: null,
                rootMargin: "0px",
                threshold: .5
            };
            class o {
                isVisible(e) {
                    return null == this._observer || this._visibleComponents.has(e)
                }
                observe(e) {
                    let t = this._observer;
                    if (null == t) return;
                    this.unobserve(e);
                    let n = (0, i.findDOMNode)(e);
                    (0, r.isElement)(n, HTMLElement) && (this._nodes.set(n, e), this._components.set(e, n), t.observe(n))
                }
                unobserve(e) {
                    let t = this._observer;
                    if (null == t) return;
                    let n = this._components.get(e);
                    null != n && (this._nodes.delete(n), this._components.delete(e), this._visibleComponents.delete(e), t.unobserve(n))
                }
                constructor(e = s) {
                    this._nodes = new WeakMap, this._components = new WeakMap, this._visibleComponents = new WeakSet, this._handleEntries = e => {
                        e.forEach(e => {
                            let t;
                            if (null != e.isIntersecting) t = e.isIntersecting;
                            else {
                                let {
                                    threshold: n
                                } = this._options;
                                t = null == n ? e.intersectionRatio > 0 : Array.isArray(n) ? n.some(t => e.intersectionRatio > t) : e.intersectionRatio > n
                            }
                            let n = this._nodes.get(e.target);
                            if (null != n) {
                                let e = !1;
                                t ? !this._visibleComponents.has(n) && (this._visibleComponents.add(n), e = !0) : this._visibleComponents.has(n) && (this._visibleComponents.delete(n), e = !0), e && n.forceUpdate()
                            }
                        })
                    }, this._options = e, null != window.IntersectionObserver && (this._observer = new window.IntersectionObserver(this._handleEntries, e))
                }
            }
        },
        235855: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var i = n("884691"),
                r = n("748820"),
                s = n("157590");
            let o = (0, r.v4)(),
                l = new Map,
                u = new Map;
            class a extends i.Component {
                componentDidMount() {
                    if (this.props.active) {
                        let e = this.getVisibilityObserver();
                        e.observe(this), this.isVisible = e.isVisible(this), this.props.onChange(this.isVisible)
                    }
                }
                componentDidUpdate(e) {
                    let t = this.getVisibilityObserver(),
                        n = t.isVisible(this);
                    this.props.active && n !== this.isVisible && this.props.onChange(n), !e.active && this.props.active ? t.observe(this) : e.active && !this.props.active && t.unobserve(this), this.isVisible = n
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
                        t = u.get(e);
                    if (!t) throw Error("Visibility sensor with id ".concat(e, " not found."));
                    return t
                }
                render() {
                    return i.Children.only(this.props.children)
                }
                constructor(e) {
                    super(e), this.isVisible = !1;
                    let {
                        root: t,
                        rootMargin: n,
                        threshold: i
                    } = e;
                    t ? l.has(t) ? this.elementId = l.get(t) || "" : l.set(t, (0, r.v4)()) : this.elementId = o;
                    let a = this.getVisibilityObserverId();
                    !u.has(a) && u.set(a, new s.default({
                        root: t,
                        rootMargin: n,
                        threshold: i
                    }))
                }
            }
            a.defaultProps = {
                active: !0,
                children: i.createElement("span"),
                root: null,
                rootMargin: "0px 0px 0px 0px",
                threshold: [0, Number.MIN_VALUE]
            };
            var d = a
        },
        290381: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                VisibilityObserver: function() {
                    return i.default
                },
                VisibilitySensor: function() {
                    return r.default
                }
            }), n("6268");
            var i = n("157590"),
                r = n("235855")
        }
    }
]);