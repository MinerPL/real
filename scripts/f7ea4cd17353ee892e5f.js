(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["79933"], {
        304580: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return E
                }
            });
            var n, o, r = l("920040");
            l("773670");
            var s = l("575482"),
                i = l.n(s),
                a = l("807403"),
                u = l("77078"),
                d = l("945330"),
                c = l("381546"),
                f = l("782340"),
                h = l("830888");
            (n = o || (o = {})).DEFAULT = "", n.BOLD = "Bold", n.SOLID = "Solid";
            let I = e => {
                let {
                    closeAction: t,
                    variant: l,
                    keybind: n,
                    className: s
                } = e;
                return (0, r.jsxs)("div", {
                    className: i(h.container, s),
                    children: [(0, r.jsx)(u.Clickable, {
                        className: i(h.closeButton, {
                            [h.closeButtonBold]: l === o.BOLD,
                            [h.closeButtonSolid]: l === o.SOLID
                        }),
                        onClick: t,
                        "aria-label": f.default.Messages.CLOSE,
                        children: l === o.SOLID ? (0, r.jsx)(c.default, {
                            width: 24,
                            height: 24,
                            "aria-hidden": !0
                        }) : (0, r.jsx)(d.default, {
                            width: 18,
                            height: 18,
                            "aria-hidden": !0
                        })
                    }), a.isMobile ? null : (0, r.jsx)("div", {
                        className: i(h.keybind),
                        "aria-hidden": !0,
                        children: n
                    })]
                })
            };
            I.defaultProps = {
                variant: o.DEFAULT
            }, I.Variants = o;
            var E = I
        },
        366634: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return u
                }
            });
            var n = l("920040");
            l("773670");
            var o = l("575482"),
                r = l.n(o),
                s = l("462567"),
                i = l("12336");
            let a = (0, s.v4)();
            var u = e => {
                let {
                    open: t,
                    className: l,
                    withHighlight: o = !1
                } = e;
                return (0, n.jsxs)("svg", {
                    width: "18",
                    height: "18",
                    className: r(i.button, l, {
                        [i.open]: t,
                        [i.withHighlight]: o
                    }),
                    children: [o && (0, n.jsx)("defs", {
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
                            stroke: o ? "url(#".concat(a, ")") : "currentColor",
                            d: "M4.5 4.5l9 9",
                            strokeLinecap: "round"
                        }), (0, n.jsx)("path", {
                            stroke: o ? "url(#".concat(a, ")") : "currentColor",
                            d: "M13.5 4.5l-9 9",
                            strokeLinecap: "round"
                        })]
                    })]
                })
            }
        },
        427027: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                ChannelsVoiceNormalIcon: function() {
                    return s
                }
            });
            var n = l("920040");
            l("773670");
            var o = l("912557"),
                r = l("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: l = 24,
                    color: s = o.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...a
                } = e;
                return (0, n.jsx)("svg", {
                    ...(0, r.default)(a),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: l,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        fillRule: "evenodd",
                        d: "M12 3a1 1 0 0 0-1-1h-.06a1 1 0 0 0-.737.324L5.917 7H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2.917l4.286 4.676a1 1 0 0 0 .737.324H11a1 1 0 0 0 1-1V3Zm3.1 17.754c-.58.138-1.1-.33-1.1-.926v-.032c0-.497.369-.912.849-1.043a7.003 7.003 0 0 0 0-13.506C14.369 5.116 14 4.7 14 4.204v-.032c0-.596.52-1.064 1.1-.926a9.004 9.004 0 0 1 0 17.508Zm.057-4.242c-.57.273-1.157-.203-1.157-.835v-.14c0-.424.277-.789.633-1.02A2.997 2.997 0 0 0 16 12a2.997 2.997 0 0 0-1.367-2.517c-.356-.231-.633-.596-.633-1.02v-.14c0-.632.587-1.108 1.157-.835a5 5 0 0 1 0 9.024Z",
                        clipRule: "evenodd",
                        className: i
                    })
                })
            }
        },
        276825: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                CheckmarkSmallIcon: function() {
                    return s
                }
            });
            var n = l("920040");
            l("773670");
            var o = l("912557"),
                r = l("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: l = 24,
                    color: s = o.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...a
                } = e;
                return (0, n.jsx)("svg", {
                    ...(0, r.default)(a),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: l,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        fillRule: "evenodd",
                        d: "M18.707 7.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L10 14.586l7.293-7.293a1 1 0 0 1 1.414 0Z",
                        clipRule: "evenodd",
                        className: i
                    })
                })
            }
        },
        505088: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                CircleXIcon: function() {
                    return s
                }
            });
            var n = l("920040");
            l("773670");
            var o = l("912557"),
                r = l("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: l = 24,
                    color: s = o.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...a
                } = e;
                return (0, n.jsx)("svg", {
                    ...(0, r.default)(a),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: l,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        fillRule: "evenodd",
                        d: "M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11Zm4.707-15.707a1 1 0 0 0-1.414 0L12 10.586 8.707 7.293a1 1 0 0 0-1.414 1.414L10.586 12l-3.293 3.293a1 1 0 1 0 1.414 1.414L12 13.414l3.293 3.293a1 1 0 0 0 1.414-1.414L13.414 12l3.293-3.293a1 1 0 0 0 0-1.414Z",
                        clipRule: "evenodd",
                        className: i
                    })
                })
            }
        },
        521590: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                GlobeEarthIcon: function() {
                    return s
                }
            });
            var n = l("920040");
            l("773670");
            var o = l("912557"),
                r = l("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: l = 24,
                    color: s = o.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...a
                } = e;
                return (0, n.jsx)("svg", {
                    ...(0, r.default)(a),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: l,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        fillRule: "evenodd",
                        d: "M18.843 17.847A9.004 9.004 0 0 0 15 3.513V4a3 3 0 0 1-3 3h-.77a.23.23 0 0 0-.23.23A2.77 2.77 0 0 1 8.23 10a.23.23 0 0 0-.23.23v1.52c0 .138.112.25.25.25H13a3 3 0 0 1 3 3v.77c0 .127.103.23.23.23a2.77 2.77 0 0 1 2.613 1.847Zm-15.66-7.664A9.001 9.001 0 0 0 11 20.945v-2.714a.23.23 0 0 0-.23-.231h-.649A2.121 2.121 0 0 1 8 15.879c0-.563-.223-1.102-.621-1.5l-4.196-4.196ZM23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11Z",
                        clipRule: "evenodd",
                        className: i
                    })
                })
            }
        },
        109731: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                HomeIcon: function() {
                    return s
                }
            });
            var n = l("920040");
            l("773670");
            var o = l("912557"),
                r = l("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: l = 24,
                    color: s = o.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...a
                } = e;
                return (0, n.jsxs)("svg", {
                    ...(0, r.default)(a),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: l,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, n.jsx)("g", {
                        clipPath: "url(#a)",
                        children: (0, n.jsx)("path", {
                            fill: "string" == typeof s ? s : s.css,
                            d: "m2.392 8.39 8.389-6.452a2 2 0 0 1 2.438 0l8.389 6.453c1.345 1.035.871 3.17-.786 3.537L20.5 12l-.82 8.2a2 2 0 0 1-1.99 1.8H16a1 1 0 0 1-1-1v-5a3 3 0 0 0-6 0v5a1 1 0 0 1-1 1H6.31a2 2 0 0 1-1.99-1.8L3.5 12l-.322-.072c-1.657-.368-2.131-2.502-.786-3.537Z",
                            className: i
                        })
                    }), (0, n.jsx)("defs", {
                        children: (0, n.jsx)("clipPath", {
                            id: "a",
                            children: (0, n.jsx)("path", {
                                fill: "#fff",
                                d: "M0 0h24v24H0z"
                            })
                        })
                    })]
                })
            }
        },
        753809: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                LinkIcon: function() {
                    return s
                }
            });
            var n = l("920040");
            l("773670");
            var o = l("912557"),
                r = l("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: l = 24,
                    color: s = o.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...a
                } = e;
                return (0, n.jsx)("svg", {
                    ...(0, r.default)(a),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: l,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        fillRule: "evenodd",
                        d: "M16.293 14.707a1 1 0 0 1 0-1.414l2.5-2.5a3.95 3.95 0 1 0-5.586-5.586l-2.5 2.5a1 1 0 1 1-1.414-1.414l2.5-2.5a5.95 5.95 0 0 1 8.414 8.414l-2.5 2.5a1 1 0 0 1-1.414 0ZM7.707 9.293a1 1 0 0 1 0 1.414l-2.5 2.5a3.95 3.95 0 0 0 5.586 5.586l2.5-2.5a1 1 0 0 1 1.414 1.414l-2.5 2.5a5.95 5.95 0 1 1-8.414-8.414l2.5-2.5a1 1 0 0 1 1.414 0Zm7 1.414a1 1 0 1 0-1.414-1.414l-4 4a1 1 0 0 0 1.414 1.414l4-4Z",
                        clipRule: "evenodd",
                        className: i
                    })
                })
            }
        },
        424823: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                PlusSmallIcon: function() {
                    return s
                }
            });
            var n = l("920040");
            l("773670");
            var o = l("912557"),
                r = l("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: l = 24,
                    color: s = o.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...a
                } = e;
                return (0, n.jsx)("svg", {
                    ...(0, r.default)(a),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: l,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        fillRule: "evenodd",
                        d: "M13 6a1 1 0 1 0-2 0v5H6a1 1 0 1 0 0 2h5v5a1 1 0 1 0 2 0v-5h5a1 1 0 1 0 0-2h-5V6Z",
                        clipRule: "evenodd",
                        className: i
                    })
                })
            }
        },
        287083: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                StageIcon: function() {
                    return s
                }
            });
            var n = l("920040");
            l("773670");
            var o = l("912557"),
                r = l("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: l = 24,
                    color: s = o.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...a
                } = e;
                return (0, n.jsx)("svg", {
                    ...(0, r.default)(a),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: l,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        fillRule: "evenodd",
                        d: "M19.615 18.25c-.335-.364-.35-.914-.079-1.328a9 9 0 1 0-15.072 0c.27.414.256.964-.079 1.328l-.019.02c-.407.442-1.113.428-1.452-.068A10.949 10.949 0 0 1 1 12C1 5.925 5.925 1 12 1s11 4.925 11 11c0 2.3-.706 4.436-1.914 6.202-.339.496-1.045.51-1.452.068l-.02-.02Zm-2.785-3.017c.428.463 1.176.42 1.454-.145a7 7 0 1 0-12.568 0c.278.565 1.026.608 1.454.145l.054-.06c.304-.329.342-.817.168-1.23a5 5 0 1 1 9.216 0c-.174.413-.136.901.168 1.23l.054.06ZM15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-8.669 8.03c-.252.725.12 1.5.808 1.84A10.955 10.955 0 0 0 12 23c1.745 0 3.395-.406 4.861-1.13.69-.34 1.06-1.115.808-1.84a6.003 6.003 0 0 0-11.338 0Z",
                        clipRule: "evenodd",
                        className: i
                    })
                })
            }
        },
        526887: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                ConfettiCannonContext: function() {
                    return d
                },
                ConfettiCannonContextProvider: function() {
                    return c
                }
            });
            var n = l("920040"),
                o = l("773670"),
                r = l("641900"),
                s = l("744196"),
                i = l("206230"),
                a = l("49111");
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
                d = o.createContext(u);

            function c(e) {
                let {
                    children: t,
                    confettiCanvas: l,
                    spriteCanvas: a,
                    baseConfig: c,
                    addClickListener: f,
                    removeClickListener: h
                } = e, I = (0, r.useConfettiCannon)(l, a), E = (0, s.default)([i.default], () => i.default.useReducedMotion), v = o.useMemo(() => E ? u : {
                    confettiCanvas: l,
                    cannon: I,
                    createConfetti: (e, t) => I.createConfetti({
                        ...c,
                        ...e
                    }, t),
                    createConfettiAt: (e, t, l, n) => I.createConfetti({
                        ...c,
                        position: {
                            type: "static",
                            value: {
                                x: e,
                                y: t
                            }
                        },
                        ...l
                    }, n),
                    createMultipleConfetti: function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20,
                            l = arguments.length > 2 ? arguments[2] : void 0;
                        return I.createMultipleConfetti({
                            ...c,
                            ...e
                        }, t, l)
                    },
                    createMultipleConfettiAt: function(e, t, l) {
                        let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 20,
                            o = arguments.length > 4 ? arguments[4] : void 0;
                        return I.createMultipleConfetti({
                            ...c,
                            position: {
                                type: "static",
                                value: {
                                    x: e,
                                    y: t
                                }
                            },
                            ...l
                        }, n, o)
                    },
                    addClickListener: f,
                    removeClickListener: h
                }, [f, c, I, l, E, h]);
                return (0, n.jsx)(d.Provider, {
                    value: v,
                    children: t
                })
            }
        },
        863921: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return f
                }
            });
            var n = l("920040");
            l("773670");
            var o = l("575482"),
                r = l.n(o),
                s = l("931138"),
                i = l("206453"),
                a = l("49111"),
                u = l("743613");
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

            function f(e) {
                let {
                    premiumTier: t,
                    iconBackgroundClassName: l,
                    iconClassName: o,
                    size: a
                } = e;
                return (0, n.jsx)(s.default, {
                    className: r(l, d[t]),
                    size: a,
                    children: (0, n.jsx)(i.default, {
                        tier: t,
                        className: r(o, u.boostedGuildIconGem, c[t])
                    })
                })
            }
        },
        836275: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                openGuildBannerUpsellModal: function() {
                    return I
                }
            });
            var n = l("920040");
            l("773670");
            var o = l("77078"),
                r = l("366634"),
                s = l("974755"),
                i = l("427459"),
                a = l("379532"),
                u = l("944305"),
                d = l("49111"),
                c = l("782340"),
                f = l("22815");

            function h(e) {
                let {
                    guild: t,
                    banner: l
                } = e;
                return (0, n.jsx)("div", {
                    className: f.guildBanner,
                    style: {
                        backgroundImage: "url(".concat(l)
                    },
                    children: (0, n.jsxs)("div", {
                        className: f.guildHeader,
                        children: [(0, n.jsx)(s.default, {
                            guild: t,
                            isBannerVisible: !0
                        }), (0, n.jsx)(o.Heading, {
                            className: f.guildName,
                            variant: "heading-md/semibold",
                            children: t.toString()
                        }), (0, n.jsx)(r.default, {
                            className: f.dropdown,
                            open: !1
                        })]
                    })
                })
            }

            function I(e) {
                let {
                    analyticsLocations: t,
                    analyticsLocation: l,
                    guild: o,
                    isGIF: r,
                    banner: s
                } = e, f = r ? (0, i.minimumRequiredTierForGuildFeature)(d.GuildFeatures.ANIMATED_BANNER) : (0, i.minimumRequiredTierForGuildFeature)(d.GuildFeatures.BANNER);
                null != f && (0, a.default)({
                    analyticsLocations: t,
                    analyticsSourceLocation: l,
                    guild: o,
                    headerProps: {
                        title: c.default.Messages.GUILD_BANNER_UPSELL_MODAL_TITLE,
                        subtitle: function(e, t) {
                            let l = (0, i.getTierName)(e);
                            return t ? c.default.Messages.GUILD_BANNER_UPSELL_MODAL_SUBTITLE_ANIMATED.format({
                                targetLevelOrPlan: l
                            }) : c.default.Messages.GUILD_BANNER_UPSELL_MODAL_SUBTITLE_STATIC.format({
                                targetLevelOrPlan: l
                            })
                        }(f, r),
                        image: (0, n.jsx)(h, {
                            guild: o,
                            banner: s
                        })
                    },
                    perkIntro: c.default.Messages.GUILD_BANNER_UPSELL_MODAL_PERK_INTRO,
                    perks: r ? (0, u.animatedGuildBannerUpsellPerks)() : (0, u.guildBannerUpsellPerks)()
                })
            }
        },
        974755: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return g
                }
            });
            var n = l("920040");
            l("773670");
            var o = l("575482"),
                r = l.n(o),
                s = l("498225"),
                i = l("77078"),
                a = l("51565"),
                u = l("95039"),
                d = l("863921"),
                c = l("26989"),
                f = l("697218"),
                h = l("580357"),
                I = l("40469"),
                E = l("427459"),
                v = l("49111"),
                _ = l("782340"),
                R = l("944837");

            function p(e) {
                let {
                    guild: t,
                    isBannerVisible: l,
                    disableBoostClick: o
                } = e, r = (0, s.useStateFromStores)([f.default, c.default], () => {
                    let e = f.default.getCurrentUser();
                    return c.default.isMember(t.id, null == e ? void 0 : e.id)
                }), {
                    premiumTier: a,
                    premiumSubscriberCount: h
                } = t;
                if (0 === h && a === v.BoostedGuildTiers.NONE) return null;
                let I = e => {
                        e.stopPropagation(), e.preventDefault(), r && !o && (0, u.openGuildBoostingMarketingModal)({
                            guildId: t.id,
                            location: {
                                section: v.AnalyticsSections.GUILD_HEADER,
                                object: v.AnalyticsObjects.BOOST_GEM_ICON
                            }
                        })
                    },
                    p = a === v.BoostedGuildTiers.NONE ? _.default.Messages.PREMIUM_GUILD_HEADER_BADGE_NO_TIER : E.getTierName(a),
                    C = (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("div", {
                            className: R.tierTooltipTitle,
                            children: p
                        }), (0, n.jsx)("div", {
                            children: _.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_SUBSCRIBER_COUNT_TOOLTIP.format({
                                subscriberCount: h
                            })
                        })]
                    });
                return (0, n.jsx)("div", {
                    className: R.guildIconContainer,
                    children: (0, n.jsx)(i.Tooltip, {
                        text: C,
                        position: "bottom",
                        "aria-label": null != p ? p : "",
                        children: e => (0, n.jsx)(i.Clickable, {
                            ...e,
                            className: R.premiumGuildIcon,
                            onClick: I,
                            children: (0, n.jsx)(d.default, {
                                premiumTier: a,
                                iconBackgroundClassName: l ? R.boostedGuildTierIconBackgroundWithVisibleBanner : null,
                                iconClassName: l && a !== v.BoostedGuildTiers.TIER_3 ? R.boostedGuildTierMutedIconWithVisibleBanner : null
                            })
                        })
                    })
                })
            }

            function C(e) {
                let {
                    guild: t,
                    disableColor: l,
                    disableBoostClick: o
                } = e, s = (0, a.default)(t);
                return s ? (0, n.jsx)("div", {
                    className: R.guildIconV2Container,
                    children: (0, n.jsx)(I.default, {
                        guild: t,
                        tooltipPosition: "bottom",
                        tooltipColor: i.Tooltip.Colors.PRIMARY,
                        className: r(R.guildBadge, {
                            [R.disableColor]: l
                        }),
                        disableBoostClick: o
                    })
                }) : (0, n.jsx)("div", {
                    className: R.guildIconContainer,
                    children: (0, n.jsx)(h.default, {
                        guild: t,
                        tooltipPosition: "bottom",
                        tooltipColor: i.Tooltip.Colors.PRIMARY,
                        className: r(R.guildBadge, {
                            [R.disableColor]: l
                        })
                    })
                })
            }

            function g(e) {
                let {
                    guild: t,
                    isBannerVisible: l,
                    disableBoostClick: o
                } = e, r = (0, a.default)(t);
                if (r) return (0, n.jsx)(C, {
                    guild: t,
                    disableColor: !1,
                    disableBoostClick: o
                });
                let s = t.hasFeature(v.GuildFeatures.VERIFIED) || t.hasFeature(v.GuildFeatures.PARTNERED);
                return s ? (0, n.jsx)(C, {
                    guild: t,
                    disableColor: !l
                }) : (0, n.jsx)(p, {
                    guild: t,
                    isBannerVisible: l,
                    disableBoostClick: o
                })
            }
        },
        507497: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return v
                }
            });
            var n = l("920040");
            l("773670");
            var o = l("498225"),
                r = l("77078"),
                s = l("685665"),
                i = l("836275"),
                a = l("379532"),
                u = l("305961"),
                d = l("162771"),
                c = l("118503"),
                f = l("49111"),
                h = l("944305"),
                I = l("782340"),
                E = l("850867");

            function v(e) {
                let {
                    analyticsSection: t,
                    analyticsPage: l,
                    isGIF: v,
                    banner: _
                } = e, R = (0, o.useStateFromStores)([d.default], () => d.default.getGuildId()), p = (0, o.useStateFromStores)([u.default], () => u.default.getGuild(R)), {
                    analyticsLocations: C
                } = (0, s.default)();
                return null == p || p.hasFeature(f.GuildFeatures.ANIMATED_BANNER) || !v && p.hasFeature(f.GuildFeatures.BANNER) ? null : (0, n.jsxs)("div", {
                    className: E.container,
                    children: [(0, n.jsx)(c.default, {
                        className: E.guildBoostingIcon
                    }), (0, n.jsx)(r.Text, {
                        color: "header-primary",
                        variant: "text-sm/semibold",
                        children: I.default.Messages.PREMIUM_GUILD_PREVIEW
                    }), (0, n.jsx)(r.Button, {
                        look: r.Button.Looks.LINK,
                        color: r.Button.Colors.LINK,
                        className: E.subscribeButton,
                        onClick: () => {
                            if (null == p) return;
                            let e = {
                                section: t,
                                page: l,
                                object: f.AnalyticsObjects.UPSELL_HEADER
                            };
                            null != _ ? (0, i.openGuildBannerUpsellModal)({
                                analyticsLocations: C,
                                analyticsLocation: e,
                                guild: p,
                                isGIF: v,
                                banner: _
                            }) : (0, a.default)({
                                analyticsLocations: C,
                                analyticsSourceLocation: e,
                                guild: p,
                                perks: v ? (0, h.animatedGuildBannerUpsellPerks)() : (0, h.guildBannerUpsellPerks)()
                            })
                        },
                        children: I.default.Messages.PREMIUM_GUILD_BOOST_SERVER
                    })]
                })
            }
        },
        193867: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return C
                }
            });
            var n = l("920040"),
                o = l("773670"),
                r = l("498225"),
                s = l("77078"),
                i = l("812204"),
                a = l("685665"),
                u = l("67069"),
                d = l("635956"),
                c = l("697218"),
                f = l("258078"),
                h = l("599110"),
                I = l("719923"),
                E = l("49111"),
                v = l("75015"),
                _ = l("646718"),
                R = l("782340"),
                p = l("222380");

            function C(e) {
                let {
                    analyticsSection: t,
                    type: l
                } = e, C = (0, r.useStateFromStores)([c.default], () => c.default.getCurrentUser()), g = I.default.canUseAnimatedAvatar(C), M = I.default.canUsePremiumProfileCustomization(C), T = l === v.UploadTypes.BANNER && M || l === v.UploadTypes.AVATAR && g, {
                    sourceAnalyticsLocations: m
                } = (0, a.default)(i.default.PREMIUM_PREVIEW_UPSELL_HEADER);
                if (o.useEffect(() => {
                        !T && h.default.track(E.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                            type: t,
                            location_stack: m
                        })
                    }, [T, t, m]), T) return null;
                let x = (0, n.jsx)(d.default, {
                    className: p.getNitroLink,
                    size: s.Button.Sizes.SMALL,
                    look: s.Button.Looks.LINK,
                    color: s.Button.Colors.LINK,
                    subscriptionTier: _.PremiumSubscriptionSKUs.TIER_2,
                    buttonText: R.default.Messages.PREMIUM_PREVIEW_GET_NITRO.format(),
                    showIcon: !1,
                    premiumModalAnalyticsLocation: {
                        section: t,
                        object: E.AnalyticsObjects.BUTTON_CTA
                    },
                    disableShine: !0
                });
                return (0, n.jsx)(u.default, {
                    reducedRightPadding: !0,
                    className: p.nitroPreviewUpsell,
                    text: R.default.Messages.PREMIUM_PREVIEW.format(),
                    textSize: f.default.Sizes.SIZE_14,
                    textColor: f.default.Colors.HEADER_PRIMARY,
                    button: x
                })
            }
        },
        652914: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return i
                }
            });
            var n = l("920040");
            l("773670");
            var o = l("507497"),
                r = l("193867"),
                s = l("75015");

            function i(e) {
                let {
                    type: t,
                    analyticsPage: l,
                    analyticsSection: i,
                    isGIF: a,
                    banner: u
                } = e;
                return [s.UploadTypes.BANNER, s.UploadTypes.AVATAR].includes(t) && a ? (0, n.jsx)(r.default, {
                    analyticsSection: i,
                    type: t
                }) : t === s.UploadTypes.GUILD_BANNER ? (0, n.jsx)(o.default, {
                    analyticsSection: i,
                    analyticsPage: l,
                    isGIF: a,
                    banner: u
                }) : null
            }
        },
        870346: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return P
                }
            });
            var n = l("161179"),
                o = l.n(n),
                r = l("427964"),
                s = l.n(r),
                i = l("709173"),
                a = l("498225"),
                u = l("913144"),
                d = l("605250"),
                c = l("773336"),
                f = l("50885"),
                h = l("563680"),
                I = l("49111");
            let E = {},
                v = {},
                _ = {},
                R = {},
                p = {},
                C = new Set,
                g = () => L.emitChange(),
                M = s.debounce(g, 150);

            function T(e) {
                let t = _[e];
                null != t && !t.closed && (E[e] = {
                    x: t.screenX,
                    y: t.screenY,
                    width: t.innerWidth,
                    height: t.innerHeight,
                    alwaysOnTop: !!c.isPlatformEmbedded && v[e]
                })
            }

            function m(e) {
                let t = _[e];
                null != t && (!t.closed && T(e), t.close(), ! function(e) {
                    let t = _[e];
                    o(null != t, "Popout window was null during unmount"), t.removeEventListener("focus", g), t.removeEventListener("blur", g), t.removeEventListener("resize", M);
                    let l = R[e];
                    o(null != l, "Window root was null while unmounting"), l.unmount(), delete _[e], delete v[e], delete p[e], delete R[e]
                }(e), L.emitChange())
            }

            function x(e) {
                let {
                    data: t
                } = e;
                if (!(t instanceof Object && t.discordPopoutEvent instanceof Object)) return;
                let l = t.discordPopoutEvent;
                if (null != l.key) switch (l.type) {
                    case I.PopoutEventTypes.LOADED:
                        var n;
                        return n = l.key, void(C.has(n) && (! function(e) {
                            let t = _[e],
                                l = p[e];
                            if (null == t) {
                                new(0, d.default)("PopoutWindowStore").warn("Failed to open window", e);
                                return
                            }
                            let n = t.document;
                            (0, h.subscribeDocumentToFullScreenChange)(n, g), t.addEventListener("focus", g), t.addEventListener("blur", g), t.addEventListener("resize", M), ! function(e, t) {
                                let l = t.document,
                                    n = document.querySelectorAll('link[rel="stylesheet"]'),
                                    r = "".concat(window.location.protocol, "//").concat(window.location.host);
                                for (let e of n) {
                                    if (!e.href.startsWith(r)) continue;
                                    let t = l.createElement("link");
                                    t.href = e.href, t.rel = e.rel, t.integrity = e.integrity, o(null != l.head, "Document head was null"), l.head.appendChild(t)
                                }
                            }(0, t);
                            let r = (0, i.createRoot)(n.getElementById("app-mount"));
                            o(null != r, "No render target for popout!"), R[e] = r, r.render(l(e))
                        }(n), C.delete(n), L.emitChange()));
                    case I.PopoutEventTypes.UNLOADED:
                        return m(l.key)
                }
            }

            function w() {
                for (let e of Object.keys(_)) {
                    let t = _[e];
                    null != t && t.close()
                }
            }
            class N extends a.default.PersistedStore {
                initialize(e) {
                    window.addEventListener("message", x), window.addEventListener("beforeunload", w), E = null != e ? e : {}
                }
                getWindow(e) {
                    return _[e]
                }
                getWindowState(e) {
                    return E[e]
                }
                getWindowKeys() {
                    return Object.keys(_)
                }
                getWindowOpen(e) {
                    let t = _[e];
                    return null != t && !t.closed
                }
                getIsAlwaysOnTop(e) {
                    return !!v[e]
                }
                getWindowFocused(e) {
                    var t, l;
                    let n = _[e];
                    return null !== (l = null == n ? void 0 : null === (t = n.document) || void 0 === t ? void 0 : t.hasFocus()) && void 0 !== l && l
                }
                getState() {
                    return E
                }
                unmountWindow(e) {
                    return m(e)
                }
            }
            N.displayName = "PopoutWindowStore", N.persistKey = "PopoutWindowStore";
            let L = new N(u.default, {
                POPOUT_WINDOW_OPEN: function(e) {
                    let {
                        key: t,
                        features: l,
                        render: n
                    } = e;
                    if (c.isPlatformEmbedded && !f.default.supportsFeature(I.NativeFeatures.POPOUT_WINDOWS)) throw Error("Popout windows not supported on this native module version!");
                    let o = _[t];
                    if (null != o && !o.closed) return c.isPlatformEmbedded ? f.default.focus(t) : o.focus(), !1;
                    let {
                        defaultWidth: r,
                        defaultHeight: s,
                        defaultAlwaysOnTop: i = !1,
                        ...a
                    } = l, u = a, d = i, h = E[t];
                    if (null != h) {
                        let {
                            width: e,
                            height: t,
                            x: l,
                            y: n,
                            alwaysOnTop: o
                        } = h;
                        d = null != o ? o : i, u = {
                            width: null != e && 0 !== e ? e : r,
                            height: null != t && 0 !== t ? t : s,
                            left: l,
                            top: n,
                            ...u
                        }
                    }
                    let R = window.open(I.Routes.POPOUT_WINDOW, t, function(e) {
                        let t = "";
                        for (let l of Object.keys(e)) {
                            let n = e[l];
                            void 0 !== n && ("boolean" == typeof n && (n = n ? "yes" : "no"), t += "".concat(l, "=").concat(n, ","))
                        }
                        return t
                    }(u));
                    R.windowKey = t, null == R || R.focus(), _[t] = R, p[t] = n, c.isPlatformEmbedded && (f.default.setAlwaysOnTop(t, d), v[t] = d, f.default.isAlwaysOnTop(t).then(e => v[t] = e)), C.add(t)
                },
                POPOUT_WINDOW_CLOSE: function(e) {
                    let {
                        key: t
                    } = e, l = _[t];
                    null != l && !l.closed && (T(t), l.close())
                },
                POPOUT_WINDOW_SET_ALWAYS_ON_TOP: function(e) {
                    let {
                        key: t,
                        alwaysOnTop: l
                    } = e;
                    c.isPlatformEmbedded && (f.default.setAlwaysOnTop(t, l), v[t] = l, f.default.isAlwaysOnTop(t).then(e => v[t] = e))
                },
                LOGOUT: w
            });
            var P = L
        },
        292687: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return n.default
                }
            });
            var n = l("870346")
        },
        974889: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return s
                }
            });
            var n = l("773336"),
                o = l("50885"),
                r = l("870346");

            function s(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    l = r.default.getWindow(e);
                null != l && !l.closed && (n.isPlatformEmbedded ? o.default.focus(e, t) : l.focus())
            }
        },
        67069: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return d
                }
            });
            var n = l("920040");
            l("773670");
            var o = l("575482"),
                r = l.n(o),
                s = l("791106"),
                i = l("216422"),
                a = l("258078"),
                u = l("897247");

            function d(e) {
                let {
                    text: t,
                    textSize: l = a.default.Sizes.SIZE_12,
                    textColor: o = a.default.Colors.STANDARD,
                    className: d,
                    button: c,
                    reducedRightPadding: f = !1
                } = e;
                return (0, n.jsxs)("div", {
                    className: r(f ? u.noticeWithoutRightPadding : u.noticeWithRightPadding, d),
                    children: [(0, n.jsxs)("div", {
                        className: u.noticeLeft,
                        children: [(0, n.jsx)(i.default, {
                            className: u.icon,
                            color: s.GradientCssUrls.PREMIUM_TIER_2
                        }), (0, n.jsx)(a.default, {
                            className: u.text,
                            size: l,
                            color: o,
                            children: t
                        })]
                    }), c]
                })
            }
        },
        931138: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return d
                }
            });
            var n = l("920040"),
                o = l("773670"),
                r = l("575482"),
                s = l.n(r),
                i = l("77078"),
                a = l("760607"),
                u = l("13681");

            function d(e) {
                let {
                    children: t,
                    size: l = 16,
                    className: r,
                    flowerStarClassName: d,
                    ...c
                } = e, f = o.Children.only(t), h = (0, i.useRedesignIconContext)().enabled;
                return (0, n.jsxs)("div", {
                    className: s(u.flowerStarContainer, r),
                    style: {
                        width: l,
                        height: l
                    },
                    children: [(0, n.jsx)(a.default, {
                        ...c,
                        className: s(d, u.flowerStar)
                    }), (0, n.jsx)("div", {
                        className: s(u.childContainer, {
                            [u.redesignIconChildContainer]: h
                        }),
                        children: f
                    })]
                })
            }
        },
        791106: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                Gradients: function() {
                    return i
                },
                GradientCssUrls: function() {
                    return a
                },
                default: function() {
                    return v
                }
            });
            var n = l("920040"),
                o = l("773670"),
                r = l("462567"),
                s = l("912557");
            let i = Object.freeze({
                    PREMIUM_TIER_0: (0, r.v4)(),
                    PREMIUM_TIER_1: (0, r.v4)(),
                    PREMIUM_TIER_2: (0, r.v4)(),
                    PREMIUM_GUILD: (0, r.v4)(),
                    PREMIUM_TRIAL_TUTORIAL: (0, r.v4)(),
                    PREMIUM_GUILD_BADGE_V2_BACKGROUND: (0, r.v4)()
                }),
                a = {
                    PREMIUM_TIER_0: "url(#".concat(i.PREMIUM_TIER_0, ")"),
                    PREMIUM_TIER_1: "url(#".concat(i.PREMIUM_TIER_1, ")"),
                    PREMIUM_TIER_2: "url(#".concat(i.PREMIUM_TIER_2, ")"),
                    PREMIUM_GUILD: "url(#".concat(i.PREMIUM_GUILD, ")"),
                    PREMIUM_TRIAL_TUTORIAL: "url(#".concat(i.PREMIUM_TRIAL_TUTORIAL, ")"),
                    PREMIUM_GUILD_BADGE_V2_BACKGROUND: "url(#".concat(i.PREMIUM_GUILD_BADGE_V2_BACKGROUND, ")")
                },
                u = () => (0, n.jsxs)("linearGradient", {
                    id: i.PREMIUM_TIER_0,
                    children: [(0, n.jsx)("stop", {
                        offset: ".1762",
                        stopColor: s.default.unsafe_rawColors.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS.css
                    }), (0, n.jsx)("stop", {
                        offset: "0.5351",
                        stopColor: s.default.unsafe_rawColors.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS_2.css
                    }), (0, n.jsx)("stop", {
                        offset: "1",
                        stopColor: s.default.unsafe_rawColors.PREMIUM_TIER_0_PURPLE_FOR_GRADIENTS.css
                    })]
                }),
                d = () => (0, n.jsxs)("linearGradient", {
                    id: i.PREMIUM_TIER_1,
                    children: [(0, n.jsx)("stop", {
                        stopColor: s.default.unsafe_rawColors.PREMIUM_TIER_1_BLUE.css
                    }), (0, n.jsx)("stop", {
                        offset: "1",
                        stopColor: s.default.unsafe_rawColors.PREMIUM_TIER_1_PURPLE.css
                    })]
                }),
                c = () => (0, n.jsxs)("linearGradient", {
                    id: i.PREMIUM_TIER_2,
                    children: [(0, n.jsx)("stop", {
                        stopColor: s.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS.css
                    }), (0, n.jsx)("stop", {
                        offset: "0.502368",
                        stopColor: s.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS_2.css
                    }), (0, n.jsx)("stop", {
                        offset: "1",
                        stopColor: s.default.unsafe_rawColors.PREMIUM_TIER_2_PINK_FOR_GRADIENTS.css
                    })]
                }),
                f = () => (0, n.jsxs)("linearGradient", {
                    id: i.PREMIUM_GUILD,
                    children: [(0, n.jsx)("stop", {
                        stopColor: s.default.unsafe_rawColors.GUILD_BOOSTING_BLUE.css
                    }), (0, n.jsx)("stop", {
                        offset: "1",
                        stopColor: s.default.unsafe_rawColors.GUILD_BOOSTING_PURPLE.css
                    })]
                }),
                h = () => (0, n.jsxs)("linearGradient", {
                    id: i.PREMIUM_TRIAL_TUTORIAL,
                    children: [(0, n.jsx)("stop", {
                        stopColor: s.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE.css
                    }), (0, n.jsx)("stop", {
                        offset: "1",
                        stopColor: s.default.unsafe_rawColors.PREMIUM_TIER_2_PINK.css
                    })]
                }),
                I = () => (0, n.jsxs)("linearGradient", {
                    id: i.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
                    gradientTransform: "rotate(45)",
                    children: [(0, n.jsx)("stop", {
                        offset: "0",
                        stopColor: s.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE.css
                    }), (0, n.jsx)("stop", {
                        offset: "1",
                        stopColor: s.default.unsafe_rawColors.PREMIUM_TIER_2_PINK.css
                    })]
                }),
                E = o.memo(function() {
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
                        children: [u(), d(), c(), f(), h(), I()]
                    })
                }, () => !0);
            var v = E
        },
        381546: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return i
                }
            });
            var n = l("920040");
            l("773670");
            var o = l("469563"),
                r = l("505088"),
                s = l("75196"),
                i = (0, o.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: l = 24,
                        color: o = "currentColor",
                        foreground: r,
                        backgroundColor: i,
                        ...a
                    } = e;
                    return (0, n.jsxs)("svg", {
                        ...(0, s.default)(a),
                        width: t,
                        height: l,
                        viewBox: "0 0 14 14",
                        children: [null != i ? (0, n.jsx)("circle", {
                            r: 5,
                            cx: 7,
                            cy: 7,
                            fill: i
                        }) : null, (0, n.jsx)("path", {
                            fill: o,
                            className: r,
                            d: "M7.02799 0.333252C3.346 0.333252 0.361328 3.31792 0.361328 6.99992C0.361328 10.6819 3.346 13.6666 7.02799 13.6666C10.71 13.6666 13.6947 10.6819 13.6947 6.99992C13.6947 3.31792 10.7093 0.333252 7.02799 0.333252ZM10.166 9.19525L9.22333 10.1379L7.02799 7.94325L4.83266 10.1379L3.89 9.19525L6.08466 6.99992L3.88933 4.80459L4.832 3.86259L7.02733 6.05792L9.22266 3.86259L10.1653 4.80459L7.97066 6.99992L10.166 9.19525Z"
                        })]
                    })
                }, r.CircleXIcon)
        },
        760607: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return r
                }
            });
            var n = l("920040");
            l("773670");
            var o = l("75196"),
                r = function(e) {
                    let {
                        width: t = 16,
                        height: l = 16,
                        color: r = "currentColor",
                        foreground: s,
                        ...i
                    } = e;
                    return (0, n.jsx)("svg", {
                        ...(0, o.default)(i),
                        width: t,
                        height: l,
                        viewBox: "0 0 16 15.2",
                        children: (0, n.jsx)("path", {
                            className: s,
                            fill: r,
                            fillRule: "evenodd",
                            d: "m16 7.6c0 .79-1.28 1.38-1.52 2.09s.44 2 0 2.59-1.84.35-2.46.8-.79 1.84-1.54 2.09-1.67-.8-2.47-.8-1.75 1-2.47.8-.92-1.64-1.54-2.09-2-.18-2.46-.8.23-1.84 0-2.59-1.54-1.3-1.54-2.09 1.28-1.38 1.52-2.09-.44-2 0-2.59 1.85-.35 2.48-.8.78-1.84 1.53-2.12 1.67.83 2.47.83 1.75-1 2.47-.8.91 1.64 1.53 2.09 2 .18 2.46.8-.23 1.84 0 2.59 1.54 1.3 1.54 2.09z"
                        })
                    })
                }
        },
        83900: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return i
                }
            });
            var n = l("920040");
            l("773670");
            var o = l("469563"),
                r = l("753809"),
                s = l("75196"),
                i = (0, o.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: l = 24,
                        color: o = "currentColor",
                        foreground: r,
                        ...i
                    } = e;
                    return (0, n.jsx)("svg", {
                        ...(0, s.default)(i),
                        width: t,
                        height: l,
                        viewBox: "0 0 24 24",
                        children: (0, n.jsxs)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: [(0, n.jsx)("path", {
                                className: r,
                                fill: o,
                                d: "M10.59 13.41c.41.39.41 1.03 0 1.42-.39.39-1.03.39-1.42 0a5.003 5.003 0 0 1 0-7.07l3.54-3.54a5.003 5.003 0 0 1 7.07 0 5.003 5.003 0 0 1 0 7.07l-1.49 1.49c.01-.82-.12-1.64-.4-2.42l.47-.48a2.982 2.982 0 0 0 0-4.24 2.982 2.982 0 0 0-4.24 0l-3.53 3.53a2.982 2.982 0 0 0 0 4.24zm2.82-4.24c.39-.39 1.03-.39 1.42 0a5.003 5.003 0 0 1 0 7.07l-3.54 3.54a5.003 5.003 0 0 1-7.07 0 5.003 5.003 0 0 1 0-7.07l1.49-1.49c-.01.82.12 1.64.4 2.43l-.47.47a2.982 2.982 0 0 0 0 4.24 2.982 2.982 0 0 0 4.24 0l3.53-3.53a2.982 2.982 0 0 0 0-4.24.973.973 0 0 1 0-1.42z"
                            }), (0, n.jsx)("rect", {
                                width: "24",
                                height: "24"
                            })]
                        })
                    })
                }, r.LinkIcon)
        },
        682344: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return i
                }
            });
            var n = l("920040");
            l("773670");
            var o = l("469563"),
                r = l("305861"),
                s = l("75196"),
                i = (0, o.replaceIcon)(function(e) {
                    let {
                        width: t = 20,
                        height: l = 23,
                        color: o = "currentColor",
                        foreground: r,
                        ...i
                    } = e;
                    return (0, n.jsx)("svg", {
                        ...(0, s.default)(i),
                        width: t,
                        height: l,
                        viewBox: "0 0 20 23",
                        children: (0, n.jsx)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: (0, n.jsx)("path", {
                                className: r,
                                fill: o,
                                d: "M19.487 5.126L10.487 0.126C10.184 -0.042 9.81798 -0.042 9.51498 0.126L0.514977 5.126C0.197977 5.302 0.000976562 5.636 0.000976562 5.999C0.000976562 6.693 0.114977 22.999 10.001 22.999C19.887 22.999 20.001 6.693 20.001 5.999C20.001 5.636 19.804 5.302 19.487 5.126ZM10.001 5.999C11.382 5.999 12.501 7.118 12.501 8.499C12.501 9.88 11.382 10.999 10.001 10.999C8.61998 10.999 7.50098 9.88 7.50098 8.499C7.50098 7.118 8.61998 5.999 10.001 5.999ZM6.25098 16C6.25098 13.699 7.69998 12.25 10.001 12.25C12.302 12.25 13.751 13.699 13.751 16H6.25098Z"
                            })
                        })
                    })
                }, r.ShieldUserIcon)
        },
        151185: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return i
                }
            });
            var n = l("920040");
            l("773670");
            var o = l("469563"),
                r = l("424823"),
                s = l("75196"),
                i = (0, o.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: l = 24,
                        color: o = "currentColor",
                        foreground: r,
                        ...i
                    } = e;
                    return (0, n.jsx)("svg", {
                        ...(0, s.default)(i),
                        width: t,
                        height: l,
                        viewBox: "0 0 24 24",
                        children: (0, n.jsx)("path", {
                            fill: o,
                            className: r,
                            d: "M20 11.1111H12.8889V4H11.1111V11.1111H4V12.8889H11.1111V20H12.8889V12.8889H20V11.1111Z"
                        })
                    })
                }, r.PlusSmallIcon)
        },
        368121: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return i
                }
            });
            var n = l("920040");
            l("773670");
            var o = l("469563"),
                r = l("427027"),
                s = l("75196"),
                i = (0, o.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: l = 24,
                        color: o = "currentColor",
                        foreground: r,
                        ...i
                    } = e;
                    return (0, n.jsx)("svg", {
                        ...(0, s.default)(i),
                        width: t,
                        height: l,
                        viewBox: "0 0 24 24",
                        children: (0, n.jsx)("path", {
                            className: r,
                            fill: o,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M11.383 3.07904C11.009 2.92504 10.579 3.01004 10.293 3.29604L6 8.00204H3C2.45 8.00204 2 8.45304 2 9.00204V15.002C2 15.552 2.45 16.002 3 16.002H6L10.293 20.71C10.579 20.996 11.009 21.082 11.383 20.927C11.757 20.772 12 20.407 12 20.002V4.00204C12 3.59904 11.757 3.23204 11.383 3.07904ZM14 5.00195V7.00195C16.757 7.00195 19 9.24595 19 12.002C19 14.759 16.757 17.002 14 17.002V19.002C17.86 19.002 21 15.863 21 12.002C21 8.14295 17.86 5.00195 14 5.00195ZM14 9.00195C15.654 9.00195 17 10.349 17 12.002C17 13.657 15.654 15.002 14 15.002V13.002C14.551 13.002 15 12.553 15 12.002C15 11.451 14.551 11.002 14 11.002V9.00195Z",
                            "aria-hidden": !0
                        })
                    })
                }, r.ChannelsVoiceNormalIcon)
        },
        228427: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return i
                }
            });
            var n = l("920040");
            l("773670");
            var o = l("469563"),
                r = l("287083"),
                s = l("75196"),
                i = (0, o.replaceIcon)(function(e) {
                    let {
                        width: t = 32,
                        height: l = 32,
                        color: o = "currentColor",
                        ...r
                    } = e;
                    return (0, n.jsx)("svg", {
                        ...(0, s.default)(r),
                        width: t,
                        height: l,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: (0, n.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 13C14 14.1 13.1 15 12 15C10.9 15 10 14.1 10 13C10 11.9 10.9 11 12 11C13.1 11 14 11.9 14 13ZM8.5 20V19.5C8.5 17.8 9.94 16.5 12 16.5C14.06 16.5 15.5 17.8 15.5 19.5V20H8.5ZM7 13C7 10.24 9.24 8 12 8C14.76 8 17 10.24 17 13C17 13.91 16.74 14.75 16.31 15.49L17.62 16.25C18.17 15.29 18.5 14.19 18.5 13C18.5 9.42 15.58 6.5 12 6.5C8.42 6.5 5.5 9.42 5.5 13C5.5 14.18 5.82 15.29 6.38 16.25L7.69 15.49C7.26 14.75 7 13.91 7 13ZM2.5 13C2.5 7.75 6.75 3.5 12 3.5C17.25 3.5 21.5 7.75 21.5 13C21.5 14.73 21.03 16.35 20.22 17.75L21.51 18.5C22.45 16.88 23 15 23 13C23 6.93 18.07 2 12 2C5.93 2 1 6.93 1 13C1 15 1.55 16.88 2.48 18.49L3.77 17.74C2.97 16.35 2.5 14.73 2.5 13Z",
                            fill: o
                        })
                    })
                }, r.StageIcon)
        },
        486952: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return i
                }
            });
            var n = l("920040");
            l("773670");
            var o = l("469563"),
                r = l("276825"),
                s = l("75196"),
                i = (0, o.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: l = 16,
                        color: o = "currentColor",
                        ...r
                    } = e;
                    return (0, n.jsx)("svg", {
                        ...(0, s.default)(r),
                        width: t,
                        height: l,
                        viewBox: "0 0 16 15.2",
                        children: (0, n.jsx)("path", {
                            d: "M7.4,11.17,4,8.62,5,7.26l2,1.53L10.64,4l1.36,1Z",
                            fill: o
                        })
                    })
                }, r.CheckmarkSmallIcon)
        }
    }
]);