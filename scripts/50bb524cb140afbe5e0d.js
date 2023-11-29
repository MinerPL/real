(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["20008"], {
        304580: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return I
                }
            });
            var n, i, l = s("37983");
            s("884691");
            var r = s("414456"),
                o = s.n(r),
                a = s("394846"),
                u = s("77078"),
                c = s("945330"),
                d = s("381546"),
                f = s("782340"),
                h = s("955892");
            (n = i || (i = {})).DEFAULT = "", n.BOLD = "Bold", n.SOLID = "Solid";
            let p = e => {
                let {
                    closeAction: t,
                    variant: s,
                    keybind: n,
                    className: i
                } = e;
                return (0, l.jsxs)("div", {
                    className: o(h.container, i),
                    children: [(0, l.jsx)(u.Clickable, {
                        className: o(h.closeButton, {
                            [h.closeButtonBold]: "Bold" === s,
                            [h.closeButtonSolid]: "Solid" === s
                        }),
                        onClick: t,
                        "aria-label": f.default.Messages.CLOSE,
                        children: "Solid" === s ? (0, l.jsx)(d.default, {
                            width: 24,
                            height: 24,
                            "aria-hidden": !0
                        }) : (0, l.jsx)(c.default, {
                            width: 18,
                            height: 18,
                            "aria-hidden": !0
                        })
                    }), a.isMobile ? null : (0, l.jsx)("div", {
                        className: o(h.keybind),
                        "aria-hidden": !0,
                        children: n
                    })]
                })
            };
            p.defaultProps = {
                variant: ""
            }, p.Variants = i;
            var I = p
        },
        366634: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return u
                }
            });
            var n = s("37983");
            s("884691");
            var i = s("414456"),
                l = s.n(i),
                r = s("748820"),
                o = s("291077");
            let a = (0, r.v4)();
            var u = e => {
                let {
                    open: t,
                    className: s,
                    withHighlight: i = !1
                } = e;
                return (0, n.jsxs)("svg", {
                    width: "18",
                    height: "18",
                    className: l(o.button, s, {
                        [o.open]: t,
                        [o.withHighlight]: i
                    }),
                    children: [i && (0, n.jsx)("defs", {
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
                            stroke: i ? "url(#".concat(a, ")") : "currentColor",
                            d: "M4.5 4.5l9 9",
                            strokeLinecap: "round"
                        }), (0, n.jsx)("path", {
                            stroke: i ? "url(#".concat(a, ")") : "currentColor",
                            d: "M13.5 4.5l-9 9",
                            strokeLinecap: "round"
                        })]
                    })]
                })
            }
        },
        80300: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                backgroundImagePreloader: function() {
                    return c
                }
            }), s("424973");
            var n = s("37983"),
                i = s("884691"),
                l = s("310013"),
                r = s.n(l),
                o = s("407063");
            let a = /url\(['"](.*)['"]\)/,
                u = e => {
                    if (null == e || "" === e || "none" === e) return null;
                    let t = e.match(a);
                    return null != t ? t[1] : e
                };

            function c(e) {
                class t extends i.Component {
                    componentDidUpdate(e, t) {
                        if (t === this.state) return;
                        let {
                            cached: s,
                            loaded: n
                        } = this.state, {
                            style: i
                        } = this.props, l = null != i ? u(i.backgroundImage) : null;
                        null == l && l !== s ? this.setState({
                            loaded: !0,
                            cached: l
                        }) : this.cachedURLs.indexOf(l) >= 0 ? this.setState({
                            loaded: !0,
                            cached: l
                        }) : null != l && l !== s && !0 === n && this.setState({
                            loaded: !1
                        }, () => this.preloadURL(l))
                    }
                    preloadURL(e) {
                        this.canceller && this.canceller(), this.canceller = (0, o.loadImage)(e, t => {
                            this.canceller && (this.canceller = null), !t && (this.cachedURLs.push(e), this.setState({
                                cached: e,
                                loaded: !0
                            }));
                            let {
                                onBackgroundImageLoad: s
                            } = this.props;
                            s && s(t, e)
                        })
                    }
                    componentWillUnmount() {
                        this.canceller && this.canceller(), this.cachedURLs.length = 0
                    }
                    render() {
                        let {
                            style: t,
                            onBackgroundImageLoad: s,
                            ...i
                        } = this.props, {
                            loaded: l,
                            cached: r
                        } = this.state;
                        if (!l && null != t) {
                            var o;
                            t = {
                                ...t,
                                backgroundImage: null == (o = r) || "" === o || "none" === o ? "none" : "url(".concat(o, ")")
                            }
                        }
                        return (0, n.jsx)(e, {
                            style: t,
                            ...i
                        })
                    }
                    constructor(e) {
                        super(e), this.cachedURLs = [], this.canceller = null;
                        let {
                            style: t
                        } = e, s = null != t ? u(t.backgroundImage) : null;
                        this.cachedURLs = [s], this.state = {
                            cached: s,
                            loaded: !0
                        }
                    }
                }
                return r(t, e), t
            }
        },
        505088: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                CircleXIcon: function() {
                    return r
                }
            });
            var n = s("37983");
            s("884691");
            var i = s("669491"),
                l = s("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: s = 24,
                    secondaryColor: r = "transparent",
                    secondaryColorClass: o = "",
                    color: a = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...c
                } = e;
                return (0, n.jsxs)("svg", {
                    ...(0, l.default)(c),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, n.jsx)("circle", {
                        cx: "12",
                        cy: "12",
                        r: "10",
                        fill: "string" == typeof r ? r : r.css,
                        className: o
                    }), (0, n.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11Zm4.707-15.707a1 1 0 0 0-1.414 0L12 10.586 8.707 7.293a1 1 0 0 0-1.414 1.414L10.586 12l-3.293 3.293a1 1 0 1 0 1.414 1.414L12 13.414l3.293 3.293a1 1 0 0 0 1.414-1.414L13.414 12l3.293-3.293a1 1 0 0 0 0-1.414Z",
                        clipRule: "evenodd",
                        className: u
                    })]
                })
            }
        },
        109731: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                HomeIcon: function() {
                    return r
                }
            });
            var n = s("37983");
            s("884691");
            var i = s("669491"),
                l = s("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: s = 24,
                    color: r = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...a
                } = e;
                return (0, n.jsx)("svg", {
                    ...(0, l.default)(a),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "m2.392 8.39 8.389-6.452a2 2 0 0 1 2.439 0l8.388 6.453c1.345 1.035.871 3.17-.785 3.537L20.5 12l-.82 8.199A2 2 0 0 1 17.69 22H16a1 1 0 0 1-1-1v-5a3 3 0 0 0-6 0v5a1 1 0 0 1-1 1H6.31a2 2 0 0 1-1.99-1.801L3.5 12l-.322-.072c-1.657-.368-2.131-2.502-.786-3.537Z",
                        className: o
                    })
                })
            }
        },
        424823: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                PlusSmallIcon: function() {
                    return r
                }
            });
            var n = s("37983");
            s("884691");
            var i = s("669491"),
                l = s("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: s = 24,
                    color: r = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...a
                } = e;
                return (0, n.jsx)("svg", {
                    ...(0, l.default)(a),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "M13 6a1 1 0 1 0-2 0v5H6a1 1 0 1 0 0 2h5v5a1 1 0 1 0 2 0v-5h5a1 1 0 1 0 0-2h-5V6Z",
                        className: o
                    })
                })
            }
        },
        287083: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                StageIcon: function() {
                    return r
                }
            });
            var n = s("37983");
            s("884691");
            var i = s("669491"),
                l = s("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: s = 24,
                    color: r = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...a
                } = e;
                return (0, n.jsxs)("svg", {
                    ...(0, l.default)(a),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, n.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "M19.615 18.25c-.335-.364-.35-.914-.079-1.328a9 9 0 1 0-15.072 0c.27.414.256.964-.079 1.328l-.019.02c-.407.442-1.113.428-1.452-.068A10.949 10.949 0 0 1 1 12C1 5.925 5.925 1 12 1s11 4.925 11 11c0 2.3-.706 4.436-1.914 6.202-.339.496-1.045.51-1.452.068l-.02-.02Z",
                        className: o
                    }), (0, n.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "M16.83 15.233c.428.463 1.176.42 1.454-.145a7 7 0 1 0-12.568 0c.278.565 1.026.608 1.454.145l.054-.06c.304-.329.342-.817.168-1.23a5 5 0 1 1 9.216 0c-.174.413-.136.901.168 1.23l.054.06Z",
                        className: o
                    }), (0, n.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.331 20.03c-.252.725.12 1.5.808 1.84A10.955 10.955 0 0 0 12 23c1.745 0 3.395-.406 4.861-1.13.69-.34 1.06-1.115.808-1.84a6.003 6.003 0 0 0-11.338 0Z",
                        className: o
                    })]
                })
            }
        },
        390300: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                VoiceNormalIcon: function() {
                    return r
                }
            });
            var n = s("37983");
            s("884691");
            var i = s("669491"),
                l = s("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: s = 24,
                    color: r = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...a
                } = e;
                return (0, n.jsxs)("svg", {
                    ...(0, l.default)(a),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, n.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "M12 3a1 1 0 0 0-1-1h-.06a1 1 0 0 0-.737.324L5.917 7H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2.917l4.286 4.676a1 1 0 0 0 .737.324H11a1 1 0 0 0 1-1V3ZM15.1 20.754c-.58.138-1.1-.33-1.1-.926v-.032c0-.497.369-.912.849-1.043a7.003 7.003 0 0 0 0-13.506C14.369 5.116 14 4.7 14 4.204v-.032c0-.596.52-1.064 1.1-.926a9.004 9.004 0 0 1 0 17.508Z",
                        className: o
                    }), (0, n.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "M15.157 16.512c-.57.273-1.157-.203-1.157-.835v-.14c0-.424.277-.789.633-1.02A2.997 2.997 0 0 0 16 12a2.997 2.997 0 0 0-1.367-2.517c-.356-.231-.633-.596-.633-1.02v-.14c0-.632.587-1.108 1.157-.835a5 5 0 0 1 0 9.024Z",
                        className: o
                    })]
                })
            }
        },
        526887: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                ConfettiCannonContext: function() {
                    return c
                },
                ConfettiCannonContextProvider: function() {
                    return d
                }
            });
            var n = s("37983"),
                i = s("884691"),
                l = s("516555"),
                r = s("65597"),
                o = s("206230"),
                a = s("49111");
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
                c = i.createContext(u);

            function d(e) {
                let {
                    children: t,
                    confettiCanvas: s,
                    spriteCanvas: a,
                    baseConfig: d,
                    addClickListener: f,
                    removeClickListener: h
                } = e, p = (0, l.useConfettiCannon)(s, a), I = (0, r.default)([o.default], () => o.default.useReducedMotion), _ = i.useMemo(() => I ? u : {
                    confettiCanvas: s,
                    cannon: p,
                    createConfetti: (e, t) => p.createConfetti({
                        ...d,
                        ...e
                    }, t),
                    createConfettiAt: (e, t, s, n) => p.createConfetti({
                        ...d,
                        position: {
                            type: "static",
                            value: {
                                x: e,
                                y: t
                            }
                        },
                        ...s
                    }, n),
                    createMultipleConfetti: function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20,
                            s = arguments.length > 2 ? arguments[2] : void 0;
                        return p.createMultipleConfetti({
                            ...d,
                            ...e
                        }, t, s)
                    },
                    createMultipleConfettiAt: function(e, t, s) {
                        let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 20,
                            i = arguments.length > 4 ? arguments[4] : void 0;
                        return p.createMultipleConfetti({
                            ...d,
                            position: {
                                type: "static",
                                value: {
                                    x: e,
                                    y: t
                                }
                            },
                            ...s
                        }, n, i)
                    },
                    addClickListener: f,
                    removeClickListener: h
                }, [f, d, p, s, I, h]);
                return (0, n.jsx)(c.Provider, {
                    value: _,
                    children: t
                })
            }
        },
        863921: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return f
                }
            });
            var n = s("37983");
            s("884691");
            var i = s("414456"),
                l = s.n(i),
                r = s("931138"),
                o = s("206453"),
                a = s("49111"),
                u = s("323755");
            let c = {
                    [a.BoostedGuildTiers.NONE]: u.iconBackgroundTierNone,
                    [a.BoostedGuildTiers.TIER_1]: u.iconBackgroundTierOne,
                    [a.BoostedGuildTiers.TIER_2]: u.iconBackgroundTierTwo,
                    [a.BoostedGuildTiers.TIER_3]: u.iconBackgroundTierThree
                },
                d = {
                    [a.BoostedGuildTiers.NONE]: u.iconTierNone,
                    [a.BoostedGuildTiers.TIER_1]: u.iconTierOne,
                    [a.BoostedGuildTiers.TIER_2]: u.iconTierTwo,
                    [a.BoostedGuildTiers.TIER_3]: u.iconTierThree
                };

            function f(e) {
                let {
                    premiumTier: t,
                    iconBackgroundClassName: s,
                    iconClassName: i,
                    size: a
                } = e;
                return (0, n.jsx)(r.default, {
                    className: l(s, c[t]),
                    size: a,
                    children: (0, n.jsx)(o.default, {
                        tier: t,
                        className: l(i, u.boostedGuildIconGem, d[t])
                    })
                })
            }
        },
        836275: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                openGuildBannerUpsellModal: function() {
                    return p
                }
            });
            var n = s("37983");
            s("884691");
            var i = s("77078"),
                l = s("366634"),
                r = s("974755"),
                o = s("427459"),
                a = s("379532"),
                u = s("944305"),
                c = s("49111"),
                d = s("782340"),
                f = s("670362");

            function h(e) {
                let {
                    guild: t,
                    banner: s
                } = e;
                return (0, n.jsx)("div", {
                    className: f.guildBanner,
                    style: {
                        backgroundImage: "url(".concat(s)
                    },
                    children: (0, n.jsxs)("div", {
                        className: f.guildHeader,
                        children: [(0, n.jsx)(r.default, {
                            guild: t,
                            isBannerVisible: !0
                        }), (0, n.jsx)(i.Heading, {
                            className: f.guildName,
                            variant: "heading-md/semibold",
                            children: t.toString()
                        }), (0, n.jsx)(l.default, {
                            className: f.dropdown,
                            open: !1
                        })]
                    })
                })
            }

            function p(e) {
                let {
                    analyticsLocations: t,
                    analyticsLocation: s,
                    guild: i,
                    isGIF: l,
                    banner: r
                } = e, f = l ? (0, o.minimumRequiredTierForGuildFeature)(c.GuildFeatures.ANIMATED_BANNER) : (0, o.minimumRequiredTierForGuildFeature)(c.GuildFeatures.BANNER);
                null != f && (0, a.default)({
                    analyticsLocations: t,
                    analyticsSourceLocation: s,
                    guild: i,
                    headerProps: {
                        title: d.default.Messages.GUILD_BANNER_UPSELL_MODAL_TITLE,
                        subtitle: function(e, t) {
                            let s = (0, o.getTierName)(e);
                            return t ? d.default.Messages.GUILD_BANNER_UPSELL_MODAL_SUBTITLE_ANIMATED.format({
                                targetLevelOrPlan: s
                            }) : d.default.Messages.GUILD_BANNER_UPSELL_MODAL_SUBTITLE_STATIC.format({
                                targetLevelOrPlan: s
                            })
                        }(f, l),
                        image: (0, n.jsx)(h, {
                            guild: i,
                            banner: r
                        })
                    },
                    perkIntro: d.default.Messages.GUILD_BANNER_UPSELL_MODAL_PERK_INTRO,
                    perks: l ? (0, u.animatedGuildBannerUpsellPerks)() : (0, u.guildBannerUpsellPerks)()
                })
            }
        },
        974755: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return M
                }
            });
            var n = s("37983");
            s("884691");
            var i = s("414456"),
                l = s.n(i),
                r = s("446674"),
                o = s("77078"),
                a = s("51565"),
                u = s("95039"),
                c = s("863921"),
                d = s("26989"),
                f = s("697218"),
                h = s("580357"),
                p = s("40469"),
                I = s("427459"),
                _ = s("49111"),
                v = s("782340"),
                E = s("129818");

            function R(e) {
                let {
                    guild: t,
                    isBannerVisible: s,
                    disableBoostClick: i
                } = e, l = (0, r.useStateFromStores)([f.default, d.default], () => {
                    let e = f.default.getCurrentUser();
                    return d.default.isMember(t.id, null == e ? void 0 : e.id)
                }), {
                    premiumTier: a,
                    premiumSubscriberCount: h
                } = t;
                if (0 === h && a === _.BoostedGuildTiers.NONE) return null;
                let p = e => {
                        e.stopPropagation(), e.preventDefault(), l && !i && (0, u.openGuildBoostingMarketingModal)({
                            guildId: t.id,
                            location: {
                                section: _.AnalyticsSections.GUILD_HEADER,
                                object: _.AnalyticsObjects.BOOST_GEM_ICON
                            }
                        })
                    },
                    R = a === _.BoostedGuildTiers.NONE ? v.default.Messages.PREMIUM_GUILD_HEADER_BADGE_NO_TIER : I.getTierName(a),
                    C = (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("div", {
                            className: E.tierTooltipTitle,
                            children: R
                        }), (0, n.jsx)("div", {
                            children: v.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_SUBSCRIBER_COUNT_TOOLTIP.format({
                                subscriberCount: h
                            })
                        })]
                    });
                return (0, n.jsx)("div", {
                    className: E.guildIconContainer,
                    children: (0, n.jsx)(o.Tooltip, {
                        text: C,
                        position: "bottom",
                        "aria-label": null != R ? R : "",
                        children: e => (0, n.jsx)(o.Clickable, {
                            ...e,
                            className: E.premiumGuildIcon,
                            onClick: p,
                            children: (0, n.jsx)(c.default, {
                                premiumTier: a,
                                iconBackgroundClassName: s ? E.boostedGuildTierIconBackgroundWithVisibleBanner : null,
                                iconClassName: s && a !== _.BoostedGuildTiers.TIER_3 ? E.boostedGuildTierMutedIconWithVisibleBanner : null
                            })
                        })
                    })
                })
            }

            function C(e) {
                let {
                    guild: t,
                    disableColor: s,
                    disableBoostClick: i
                } = e, r = (0, a.default)(t);
                return r ? (0, n.jsx)("div", {
                    className: E.guildIconV2Container,
                    children: (0, n.jsx)(p.default, {
                        guild: t,
                        tooltipPosition: "bottom",
                        tooltipColor: o.Tooltip.Colors.PRIMARY,
                        className: l(E.guildBadge, {
                            [E.disableColor]: s
                        }),
                        disableBoostClick: i
                    })
                }) : (0, n.jsx)("div", {
                    className: E.guildIconContainer,
                    children: (0, n.jsx)(h.default, {
                        guild: t,
                        tooltipPosition: "bottom",
                        tooltipColor: o.Tooltip.Colors.PRIMARY,
                        className: l(E.guildBadge, {
                            [E.disableColor]: s
                        })
                    })
                })
            }

            function M(e) {
                let {
                    guild: t,
                    isBannerVisible: s,
                    disableBoostClick: i
                } = e, l = (0, a.default)(t);
                if (l) return (0, n.jsx)(C, {
                    guild: t,
                    disableColor: !1,
                    disableBoostClick: i
                });
                let r = t.hasFeature(_.GuildFeatures.VERIFIED) || t.hasFeature(_.GuildFeatures.PARTNERED);
                return r ? (0, n.jsx)(C, {
                    guild: t,
                    disableColor: !s
                }) : (0, n.jsx)(R, {
                    guild: t,
                    isBannerVisible: s,
                    disableBoostClick: i
                })
            }
        },
        507497: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return _
                }
            });
            var n = s("37983");
            s("884691");
            var i = s("446674"),
                l = s("77078"),
                r = s("685665"),
                o = s("836275"),
                a = s("379532"),
                u = s("305961"),
                c = s("162771"),
                d = s("118503"),
                f = s("49111"),
                h = s("944305"),
                p = s("782340"),
                I = s("323723");

            function _(e) {
                let {
                    analyticsSection: t,
                    analyticsPage: s,
                    isGIF: _,
                    banner: v
                } = e, E = (0, i.useStateFromStores)([c.default], () => c.default.getGuildId()), R = (0, i.useStateFromStores)([u.default], () => u.default.getGuild(E)), {
                    analyticsLocations: C
                } = (0, r.default)();
                return null == R || R.hasFeature(f.GuildFeatures.ANIMATED_BANNER) || !_ && R.hasFeature(f.GuildFeatures.BANNER) ? null : (0, n.jsxs)("div", {
                    className: I.container,
                    children: [(0, n.jsx)(d.default, {
                        className: I.guildBoostingIcon
                    }), (0, n.jsx)(l.Text, {
                        color: "header-primary",
                        variant: "text-sm/semibold",
                        children: p.default.Messages.PREMIUM_GUILD_PREVIEW
                    }), (0, n.jsx)(l.Button, {
                        look: l.Button.Looks.LINK,
                        color: l.Button.Colors.LINK,
                        className: I.subscribeButton,
                        onClick: () => {
                            if (null == R) return;
                            let e = {
                                section: t,
                                page: s,
                                object: f.AnalyticsObjects.UPSELL_HEADER
                            };
                            null != v ? (0, o.openGuildBannerUpsellModal)({
                                analyticsLocations: C,
                                analyticsLocation: e,
                                guild: R,
                                isGIF: _,
                                banner: v
                            }) : (0, a.default)({
                                analyticsLocations: C,
                                analyticsSourceLocation: e,
                                guild: R,
                                perks: _ ? (0, h.animatedGuildBannerUpsellPerks)() : (0, h.guildBannerUpsellPerks)()
                            })
                        },
                        children: p.default.Messages.PREMIUM_GUILD_BOOST_SERVER
                    })]
                })
            }
        },
        193867: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return C
                }
            });
            var n = s("37983"),
                i = s("884691"),
                l = s("446674"),
                r = s("77078"),
                o = s("812204"),
                a = s("685665"),
                u = s("67069"),
                c = s("635956"),
                d = s("697218"),
                f = s("258078"),
                h = s("599110"),
                p = s("719923"),
                I = s("49111"),
                _ = s("75015"),
                v = s("646718"),
                E = s("782340"),
                R = s("123342");

            function C(e) {
                let {
                    analyticsSection: t,
                    type: s
                } = e, C = (0, l.useStateFromStores)([d.default], () => d.default.getCurrentUser()), M = p.default.canUseAnimatedAvatar(C), g = p.default.canUsePremiumProfileCustomization(C), m = s === _.UploadTypes.BANNER && g || s === _.UploadTypes.AVATAR && M, {
                    sourceAnalyticsLocations: x
                } = (0, a.default)(o.default.PREMIUM_PREVIEW_UPSELL_HEADER);
                if (i.useEffect(() => {
                        !m && h.default.track(I.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                            type: t,
                            location_stack: x
                        })
                    }, [m, t, x]), m) return null;
                let L = (0, n.jsx)(c.default, {
                    className: R.getNitroLink,
                    size: r.Button.Sizes.SMALL,
                    look: r.Button.Looks.LINK,
                    color: r.Button.Colors.LINK,
                    subscriptionTier: v.PremiumSubscriptionSKUs.TIER_2,
                    buttonText: E.default.Messages.PREMIUM_PREVIEW_GET_NITRO.format(),
                    showIcon: !1,
                    premiumModalAnalyticsLocation: {
                        section: t,
                        object: I.AnalyticsObjects.BUTTON_CTA
                    },
                    disableShine: !0
                });
                return (0, n.jsx)(u.default, {
                    reducedRightPadding: !0,
                    className: R.nitroPreviewUpsell,
                    text: E.default.Messages.PREMIUM_PREVIEW.format(),
                    textSize: f.default.Sizes.SIZE_14,
                    textColor: f.default.Colors.HEADER_PRIMARY,
                    button: L
                })
            }
        },
        652914: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return o
                }
            });
            var n = s("37983");
            s("884691");
            var i = s("507497"),
                l = s("193867"),
                r = s("75015");

            function o(e) {
                let {
                    type: t,
                    analyticsPage: s,
                    analyticsSection: o,
                    isGIF: a,
                    banner: u
                } = e;
                return [r.UploadTypes.BANNER, r.UploadTypes.AVATAR].includes(t) && a ? (0, n.jsx)(l.default, {
                    analyticsSection: o,
                    type: t
                }) : t === r.UploadTypes.GUILD_BANNER ? (0, n.jsx)(i.default, {
                    analyticsSection: o,
                    analyticsPage: s,
                    isGIF: a,
                    banner: u
                }) : null
            }
        },
        292687: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return n.default
                }
            });
            var n = s("870346")
        },
        974889: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return r
                }
            });
            var n = s("773336"),
                i = s("50885"),
                l = s("870346");

            function r(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    s = l.default.getWindow(e);
                null != s && !s.closed && (n.isPlatformEmbedded ? i.default.focus(e, t) : s.focus())
            }
        },
        67069: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return c
                }
            });
            var n = s("37983");
            s("884691");
            var i = s("414456"),
                l = s.n(i),
                r = s("791106"),
                o = s("216422"),
                a = s("258078"),
                u = s("63625");

            function c(e) {
                let {
                    text: t,
                    textSize: s = a.default.Sizes.SIZE_12,
                    textColor: i = a.default.Colors.STANDARD,
                    className: c,
                    button: d,
                    reducedRightPadding: f = !1
                } = e;
                return (0, n.jsxs)("div", {
                    className: l(f ? u.noticeWithoutRightPadding : u.noticeWithRightPadding, c),
                    children: [(0, n.jsxs)("div", {
                        className: u.noticeLeft,
                        children: [(0, n.jsx)(o.default, {
                            className: u.icon,
                            color: r.GradientCssUrls.PREMIUM_TIER_2
                        }), (0, n.jsx)(a.default, {
                            className: u.text,
                            size: s,
                            color: i,
                            children: t
                        })]
                    }), d]
                })
            }
        },
        931138: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return c
                }
            });
            var n = s("37983"),
                i = s("884691"),
                l = s("414456"),
                r = s.n(l),
                o = s("77078"),
                a = s("760607"),
                u = s("89976");

            function c(e) {
                let {
                    children: t,
                    size: s = 16,
                    className: l,
                    flowerStarClassName: c,
                    ...d
                } = e, f = i.Children.only(t), h = (0, o.useRedesignIconContext)().enabled;
                return (0, n.jsxs)("div", {
                    className: r(u.flowerStarContainer, l),
                    style: {
                        width: s,
                        height: s
                    },
                    children: [(0, n.jsx)(a.default, {
                        ...d,
                        className: r(c, u.flowerStar)
                    }), (0, n.jsx)("div", {
                        className: r(u.childContainer, {
                            [u.redesignIconChildContainer]: h
                        }),
                        children: f
                    })]
                })
            }
        },
        791106: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                Gradients: function() {
                    return o
                },
                GradientCssUrls: function() {
                    return a
                },
                default: function() {
                    return _
                }
            });
            var n = s("37983"),
                i = s("884691"),
                l = s("748820"),
                r = s("669491");
            let o = Object.freeze({
                    PREMIUM_TIER_0: (0, l.v4)(),
                    PREMIUM_TIER_1: (0, l.v4)(),
                    PREMIUM_TIER_2: (0, l.v4)(),
                    PREMIUM_GUILD: (0, l.v4)(),
                    PREMIUM_TRIAL_TUTORIAL: (0, l.v4)(),
                    PREMIUM_GUILD_BADGE_V2_BACKGROUND: (0, l.v4)()
                }),
                a = {
                    PREMIUM_TIER_0: "url(#".concat(o.PREMIUM_TIER_0, ")"),
                    PREMIUM_TIER_1: "url(#".concat(o.PREMIUM_TIER_1, ")"),
                    PREMIUM_TIER_2: "url(#".concat(o.PREMIUM_TIER_2, ")"),
                    PREMIUM_GUILD: "url(#".concat(o.PREMIUM_GUILD, ")"),
                    PREMIUM_TRIAL_TUTORIAL: "url(#".concat(o.PREMIUM_TRIAL_TUTORIAL, ")"),
                    PREMIUM_GUILD_BADGE_V2_BACKGROUND: "url(#".concat(o.PREMIUM_GUILD_BADGE_V2_BACKGROUND, ")")
                },
                u = () => (0, n.jsxs)("linearGradient", {
                    id: o.PREMIUM_TIER_0,
                    children: [(0, n.jsx)("stop", {
                        offset: ".1762",
                        stopColor: r.default.unsafe_rawColors.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS.css
                    }), (0, n.jsx)("stop", {
                        offset: "0.5351",
                        stopColor: r.default.unsafe_rawColors.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS_2.css
                    }), (0, n.jsx)("stop", {
                        offset: "1",
                        stopColor: r.default.unsafe_rawColors.PREMIUM_TIER_0_PURPLE_FOR_GRADIENTS.css
                    })]
                }),
                c = () => (0, n.jsxs)("linearGradient", {
                    id: o.PREMIUM_TIER_1,
                    children: [(0, n.jsx)("stop", {
                        stopColor: r.default.unsafe_rawColors.PREMIUM_TIER_1_BLUE.css
                    }), (0, n.jsx)("stop", {
                        offset: "1",
                        stopColor: r.default.unsafe_rawColors.PREMIUM_TIER_1_PURPLE.css
                    })]
                }),
                d = () => (0, n.jsxs)("linearGradient", {
                    id: o.PREMIUM_TIER_2,
                    children: [(0, n.jsx)("stop", {
                        stopColor: r.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS.css
                    }), (0, n.jsx)("stop", {
                        offset: "0.502368",
                        stopColor: r.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS_2.css
                    }), (0, n.jsx)("stop", {
                        offset: "1",
                        stopColor: r.default.unsafe_rawColors.PREMIUM_TIER_2_PINK_FOR_GRADIENTS.css
                    })]
                }),
                f = () => (0, n.jsxs)("linearGradient", {
                    id: o.PREMIUM_GUILD,
                    children: [(0, n.jsx)("stop", {
                        stopColor: r.default.unsafe_rawColors.GUILD_BOOSTING_BLUE.css
                    }), (0, n.jsx)("stop", {
                        offset: "1",
                        stopColor: r.default.unsafe_rawColors.GUILD_BOOSTING_PURPLE.css
                    })]
                }),
                h = () => (0, n.jsxs)("linearGradient", {
                    id: o.PREMIUM_TRIAL_TUTORIAL,
                    children: [(0, n.jsx)("stop", {
                        stopColor: r.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE.css
                    }), (0, n.jsx)("stop", {
                        offset: "1",
                        stopColor: r.default.unsafe_rawColors.PREMIUM_TIER_2_PINK.css
                    })]
                }),
                p = () => (0, n.jsxs)("linearGradient", {
                    id: o.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
                    gradientTransform: "rotate(45)",
                    children: [(0, n.jsx)("stop", {
                        offset: "0",
                        stopColor: r.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE.css
                    }), (0, n.jsx)("stop", {
                        offset: "1",
                        stopColor: r.default.unsafe_rawColors.PREMIUM_TIER_2_PINK.css
                    })]
                }),
                I = i.memo(function() {
                    return (0, n.jsxs)("svg", {
                        viewBox: "0 0 1 1",
                        style: {
                            position: "absolute",
                            pointerEvents: "none",
                            top: -1,
                            left: -1,
                            width: 1,
                            height: 1
                        },
                        "aria-hidden": !0,
                        children: [u(), c(), d(), f(), h(), p()]
                    })
                }, () => !0);
            var _ = I
        },
        476263: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return m
                }
            });
            var n = s("37983"),
                i = s("884691"),
                l = s("414456"),
                r = s.n(l),
                o = s("90915"),
                a = s("446674"),
                u = s("669491"),
                c = s("77078"),
                d = s("80300"),
                f = s("471671"),
                h = s("103603"),
                p = s("474293"),
                I = s("580357"),
                _ = s("491088");
            let v = {
                    SMOL: "Smol",
                    MINI: "Mini",
                    SMALLER: "Smaller",
                    SMALL: "Small",
                    MEDIUM: "Medium",
                    LARGE: "Large",
                    LARGER: "Larger",
                    XLARGE: "XLarge"
                },
                E = {
                    [v.SMOL]: 16,
                    [v.MINI]: 20,
                    [v.SMALLER]: 24,
                    [v.SMALL]: 30,
                    [v.MEDIUM]: 40,
                    [v.LARGE]: 50,
                    [v.LARGER]: 64,
                    [v.XLARGE]: 100
                },
                R = {
                    [v.SMOL]: [10, 10, 8, 6, 6, 4],
                    [v.MINI]: [12, 12, 10, 10, 8, 6, 4],
                    [v.SMALLER]: [13, 13, 11, 11, 9, 7, 5],
                    [v.SMALL]: [14, 14, 12, 12, 10, 8, 6],
                    [v.MEDIUM]: [16, 16, 14, 14, 12, 10, 8],
                    [v.LARGE]: [18, 18, 16, 16, 14, 12, 10],
                    [v.LARGER]: [19, 19, 17, 17, 15, 13, 11],
                    [v.XLARGE]: [20, 20, 18, 18, 16, 14, 12]
                };
            class C extends i.PureComponent {
                renderAcronym() {
                    let {
                        guild: e,
                        iconSrc: t
                    } = this.props;
                    return null != e.icon || null != t ? null : (0, n.jsx)("div", {
                        className: _.acronym,
                        children: e.acronym
                    })
                }
                renderBadge() {
                    let {
                        showBadge: e,
                        guild: t,
                        badgeStrokeColor: s
                    } = this.props;
                    return e && null != t.hasFeature ? (0, n.jsx)(I.default, {
                        className: _.guildIconBadge,
                        guild: t,
                        badgeStrokeColor: s
                    }) : null
                }
                renderIcon() {
                    var e, t;
                    let {
                        guild: s,
                        className: i,
                        showBadge: l,
                        active: o,
                        size: a,
                        style: u = {},
                        textScale: d,
                        showTooltip: f,
                        tooltipPosition: h,
                        onClick: I,
                        to: v,
                        badgeStrokeColor: E,
                        animate: C,
                        tabIndex: M,
                        iconSrc: g,
                        "aria-hidden": m,
                        ...x
                    } = this.props, L = R[a], T = null != I ? c.Clickable : "div";
                    return (0, n.jsxs)(T, {
                        className: r(_.icon, i, (0, p.getClass)(_, "iconSize", a), {
                            [null !== (e = (0, p.getClass)(_, "iconActive", a)) && void 0 !== e ? e : ""]: o,
                            [_.iconInactive]: !o,
                            [_.noIcon]: null == s.icon
                        }),
                        "aria-hidden": m,
                        style: null == s.icon ? {
                            fontSize: (null !== (t = L[s.acronym.length]) && void 0 !== t ? t : L[L.length - 1]) * d,
                            ...u
                        } : u,
                        onClick: null != v || null == I ? void 0 : I,
                        tabIndex: M,
                        ...x,
                        children: [this.renderAcronym(), this.renderBadge()]
                    })
                }
                renderTooltip() {
                    let {
                        guild: e,
                        showTooltip: t,
                        tooltipPosition: s
                    } = this.props;
                    return t ? (0, n.jsx)(c.Tooltip, {
                        text: e.name,
                        position: s,
                        "aria-label": !1,
                        children: e => i.cloneElement(i.Children.only(this.renderIcon()), {
                            ...e
                        })
                    }) : this.renderIcon()
                }
                render() {
                    let {
                        to: e,
                        guild: t,
                        source: s,
                        tabIndex: i,
                        "aria-hidden": l
                    } = this.props;
                    return null != e ? (0, n.jsx)(o.Link, {
                        "aria-hidden": l,
                        to: {
                            pathname: e,
                            state: null != s ? {
                                analyticsSource: s
                            } : null
                        },
                        "aria-label": t.toString(),
                        tabIndex: i,
                        children: this.renderTooltip()
                    }) : this.renderTooltip()
                }
            }
            let M = a.default.connectStores([f.default], e => {
                let {
                    guild: t,
                    animate: s,
                    iconSrc: n,
                    style: i,
                    size: l
                } = e;
                return {
                    style: {
                        ...i,
                        backgroundImage: (0, h.makeCssUrlString)(null != n ? n : t.getIconURL(E[l], s && f.default.isFocused()))
                    }
                }
            })((0, d.backgroundImagePreloader)(e => (0, n.jsx)(C, {
                ...e
            })));
            class g extends i.PureComponent {
                render() {
                    return (0, n.jsx)(M, {
                        ...this.props
                    })
                }
            }
            g.Sizes = v, g.defaultProps = {
                size: v.LARGE,
                textScale: 1,
                showBadge: !1,
                showTooltip: !1,
                active: !1,
                tooltipPosition: "top",
                badgeStrokeColor: u.default.unsafe_rawColors.WHITE_500.css,
                animate: !1
            };
            var m = g
        },
        381546: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return o
                }
            });
            var n = s("37983");
            s("884691");
            var i = s("469563"),
                l = s("505088"),
                r = s("75196"),
                o = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: s = 24,
                        color: i = "currentColor",
                        foreground: l,
                        backgroundColor: o,
                        ...a
                    } = e;
                    return (0, n.jsxs)("svg", {
                        ...(0, r.default)(a),
                        width: t,
                        height: s,
                        viewBox: "0 0 14 14",
                        children: [null != o ? (0, n.jsx)("circle", {
                            r: 5,
                            cx: 7,
                            cy: 7,
                            fill: o
                        }) : null, (0, n.jsx)("path", {
                            fill: i,
                            className: l,
                            d: "M7.02799 0.333252C3.346 0.333252 0.361328 3.31792 0.361328 6.99992C0.361328 10.6819 3.346 13.6666 7.02799 13.6666C10.71 13.6666 13.6947 10.6819 13.6947 6.99992C13.6947 3.31792 10.7093 0.333252 7.02799 0.333252ZM10.166 9.19525L9.22333 10.1379L7.02799 7.94325L4.83266 10.1379L3.89 9.19525L6.08466 6.99992L3.88933 4.80459L4.832 3.86259L7.02733 6.05792L9.22266 3.86259L10.1653 4.80459L7.97066 6.99992L10.166 9.19525Z"
                        })]
                    })
                }, l.CircleXIcon, void 0, {
                    size: 24
                })
        },
        760607: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return l
                }
            });
            var n = s("37983");
            s("884691");
            var i = s("75196"),
                l = function(e) {
                    let {
                        width: t = 16,
                        height: s = 16,
                        color: l = "currentColor",
                        foreground: r,
                        ...o
                    } = e;
                    return (0, n.jsx)("svg", {
                        ...(0, i.default)(o),
                        width: t,
                        height: s,
                        viewBox: "0 0 16 15.2",
                        children: (0, n.jsx)("path", {
                            className: r,
                            fill: l,
                            fillRule: "evenodd",
                            d: "m16 7.6c0 .79-1.28 1.38-1.52 2.09s.44 2 0 2.59-1.84.35-2.46.8-.79 1.84-1.54 2.09-1.67-.8-2.47-.8-1.75 1-2.47.8-.92-1.64-1.54-2.09-2-.18-2.46-.8.23-1.84 0-2.59-1.54-1.3-1.54-2.09 1.28-1.38 1.52-2.09-.44-2 0-2.59 1.85-.35 2.48-.8.78-1.84 1.53-2.12 1.67.83 2.47.83 1.75-1 2.47-.8.91 1.64 1.53 2.09 2 .18 2.46.8-.23 1.84 0 2.59 1.54 1.3 1.54 2.09z"
                        })
                    })
                }
        },
        682344: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return o
                }
            });
            var n = s("37983");
            s("884691");
            var i = s("469563"),
                l = s("305861"),
                r = s("75196"),
                o = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 20,
                        height: s = 23,
                        color: i = "currentColor",
                        foreground: l,
                        ...o
                    } = e;
                    return (0, n.jsx)("svg", {
                        ...(0, r.default)(o),
                        width: t,
                        height: s,
                        viewBox: "0 0 20 23",
                        children: (0, n.jsx)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: (0, n.jsx)("path", {
                                className: l,
                                fill: i,
                                d: "M19.487 5.126L10.487 0.126C10.184 -0.042 9.81798 -0.042 9.51498 0.126L0.514977 5.126C0.197977 5.302 0.000976562 5.636 0.000976562 5.999C0.000976562 6.693 0.114977 22.999 10.001 22.999C19.887 22.999 20.001 6.693 20.001 5.999C20.001 5.636 19.804 5.302 19.487 5.126ZM10.001 5.999C11.382 5.999 12.501 7.118 12.501 8.499C12.501 9.88 11.382 10.999 10.001 10.999C8.61998 10.999 7.50098 9.88 7.50098 8.499C7.50098 7.118 8.61998 5.999 10.001 5.999ZM6.25098 16C6.25098 13.699 7.69998 12.25 10.001 12.25C12.302 12.25 13.751 13.699 13.751 16H6.25098Z"
                            })
                        })
                    })
                }, l.ShieldUserIcon, void 0, {
                    size: 23
                })
        },
        151185: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return o
                }
            });
            var n = s("37983");
            s("884691");
            var i = s("469563"),
                l = s("424823"),
                r = s("75196"),
                o = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: s = 24,
                        color: i = "currentColor",
                        foreground: l,
                        ...o
                    } = e;
                    return (0, n.jsx)("svg", {
                        ...(0, r.default)(o),
                        width: t,
                        height: s,
                        viewBox: "0 0 24 24",
                        children: (0, n.jsx)("path", {
                            fill: i,
                            className: l,
                            d: "M20 11.1111H12.8889V4H11.1111V11.1111H4V12.8889H11.1111V20H12.8889V12.8889H20V11.1111Z"
                        })
                    })
                }, l.PlusSmallIcon, void 0, {
                    size: 24
                })
        },
        368121: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return o
                }
            });
            var n = s("37983");
            s("884691");
            var i = s("469563"),
                l = s("390300"),
                r = s("75196"),
                o = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: s = 24,
                        color: i = "currentColor",
                        foreground: l,
                        ...o
                    } = e;
                    return (0, n.jsx)("svg", {
                        ...(0, r.default)(o),
                        width: t,
                        height: s,
                        viewBox: "0 0 24 24",
                        children: (0, n.jsx)("path", {
                            className: l,
                            fill: i,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M11.383 3.07904C11.009 2.92504 10.579 3.01004 10.293 3.29604L6 8.00204H3C2.45 8.00204 2 8.45304 2 9.00204V15.002C2 15.552 2.45 16.002 3 16.002H6L10.293 20.71C10.579 20.996 11.009 21.082 11.383 20.927C11.757 20.772 12 20.407 12 20.002V4.00204C12 3.59904 11.757 3.23204 11.383 3.07904ZM14 5.00195V7.00195C16.757 7.00195 19 9.24595 19 12.002C19 14.759 16.757 17.002 14 17.002V19.002C17.86 19.002 21 15.863 21 12.002C21 8.14295 17.86 5.00195 14 5.00195ZM14 9.00195C15.654 9.00195 17 10.349 17 12.002C17 13.657 15.654 15.002 14 15.002V13.002C14.551 13.002 15 12.553 15 12.002C15 11.451 14.551 11.002 14 11.002V9.00195Z",
                            "aria-hidden": !0
                        })
                    })
                }, l.VoiceNormalIcon, void 0, {
                    size: 24
                })
        },
        228427: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return o
                }
            });
            var n = s("37983");
            s("884691");
            var i = s("469563"),
                l = s("287083"),
                r = s("75196"),
                o = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 32,
                        height: s = 32,
                        color: i = "currentColor",
                        ...l
                    } = e;
                    return (0, n.jsx)("svg", {
                        ...(0, r.default)(l),
                        width: t,
                        height: s,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: (0, n.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 13C14 14.1 13.1 15 12 15C10.9 15 10 14.1 10 13C10 11.9 10.9 11 12 11C13.1 11 14 11.9 14 13ZM8.5 20V19.5C8.5 17.8 9.94 16.5 12 16.5C14.06 16.5 15.5 17.8 15.5 19.5V20H8.5ZM7 13C7 10.24 9.24 8 12 8C14.76 8 17 10.24 17 13C17 13.91 16.74 14.75 16.31 15.49L17.62 16.25C18.17 15.29 18.5 14.19 18.5 13C18.5 9.42 15.58 6.5 12 6.5C8.42 6.5 5.5 9.42 5.5 13C5.5 14.18 5.82 15.29 6.38 16.25L7.69 15.49C7.26 14.75 7 13.91 7 13ZM2.5 13C2.5 7.75 6.75 3.5 12 3.5C17.25 3.5 21.5 7.75 21.5 13C21.5 14.73 21.03 16.35 20.22 17.75L21.51 18.5C22.45 16.88 23 15 23 13C23 6.93 18.07 2 12 2C5.93 2 1 6.93 1 13C1 15 1.55 16.88 2.48 18.49L3.77 17.74C2.97 16.35 2.5 14.73 2.5 13Z",
                            fill: i
                        })
                    })
                }, l.StageIcon, void 0, {
                    size: 32
                })
        },
        474293: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                getClass: function() {
                    return i
                }
            }), s("808653");
            var n = s("159885");

            function i(e, t) {
                for (var s = arguments.length, i = Array(s > 2 ? s - 2 : 0), l = 2; l < s; l++) i[l - 2] = arguments[l];
                let r = i.reduce((e, t) => e + (0, n.upperCaseFirstChar)(t), ""),
                    o = "".concat(t).concat(r),
                    a = e[o];
                if (null != a) return a
            }
        },
        157590: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return n
                }
            }), s("222007");
            var n, i = s("817736"),
                l = s("118810");
            let r = {
                root: null,
                rootMargin: "0px",
                threshold: .5
            };
            n = class {
                isVisible(e) {
                    return null == this._observer || this._visibleComponents.has(e)
                }
                observe(e) {
                    let t = this._observer;
                    if (null == t) return;
                    this.unobserve(e);
                    let s = (0, i.findDOMNode)(e);
                    (0, l.isElement)(s, HTMLElement) && (this._nodes.set(s, e), this._components.set(e, s), t.observe(s))
                }
                unobserve(e) {
                    let t = this._observer;
                    if (null == t) return;
                    let s = this._components.get(e);
                    null != s && (this._nodes.delete(s), this._components.delete(e), this._visibleComponents.delete(e), t.unobserve(s))
                }
                constructor(e = r) {
                    this._nodes = new WeakMap, this._components = new WeakMap, this._visibleComponents = new WeakSet, this._handleEntries = e => {
                        e.forEach(e => {
                            let t;
                            if (null != e.isIntersecting) t = e.isIntersecting;
                            else {
                                let {
                                    threshold: s
                                } = this._options;
                                t = null == s ? e.intersectionRatio > 0 : Array.isArray(s) ? s.some(t => e.intersectionRatio > t) : e.intersectionRatio > s
                            }
                            let s = this._nodes.get(e.target);
                            if (null != s) {
                                let e = !1;
                                t ? !this._visibleComponents.has(s) && (this._visibleComponents.add(s), e = !0) : this._visibleComponents.has(s) && (this._visibleComponents.delete(s), e = !0), e && s.forceUpdate()
                            }
                        })
                    }, this._options = e, null != window.IntersectionObserver && (this._observer = new window.IntersectionObserver(this._handleEntries, e))
                }
            }
        },
        235855: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return c
                }
            }), s("222007"), s("70102");
            var n = s("884691"),
                i = s("748820"),
                l = s("157590");
            let r = (0, i.v4)(),
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
                        s = t.isVisible(this);
                    this.props.active && s !== this.isVisible && this.props.onChange(s), !e.active && this.props.active ? t.observe(this) : e.active && !this.props.active && t.unobserve(this), this.isVisible = s
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
                        rootMargin: s,
                        threshold: n
                    } = e;
                    t ? o.has(t) ? this.elementId = o.get(t) || "" : o.set(t, (0, i.v4)()) : this.elementId = r;
                    let u = this.getVisibilityObserverId();
                    !a.has(u) && a.set(u, new l.default({
                        root: t,
                        rootMargin: s,
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
            var c = u
        },
        290381: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                VisibilityObserver: function() {
                    return n.default
                },
                VisibilitySensor: function() {
                    return i.default
                }
            }), s("6268");
            var n = s("157590"),
                i = s("235855")
        }
    }
]);