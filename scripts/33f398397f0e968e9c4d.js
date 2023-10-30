(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["57003"], {
        304580: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var l, i, s = n("37983");
            n("884691");
            var o = n("414456"),
                r = n.n(o),
                a = n("394846"),
                u = n("77078"),
                d = n("945330"),
                c = n("381546"),
                f = n("782340"),
                h = n("955892");
            (l = i || (i = {})).DEFAULT = "", l.BOLD = "Bold", l.SOLID = "Solid";
            let v = e => {
                let {
                    closeAction: t,
                    variant: n,
                    keybind: l,
                    className: o
                } = e;
                return (0, s.jsxs)("div", {
                    className: r(h.container, o),
                    children: [(0, s.jsx)(u.Clickable, {
                        className: r(h.closeButton, {
                            [h.closeButtonBold]: n === i.BOLD,
                            [h.closeButtonSolid]: n === i.SOLID
                        }),
                        onClick: t,
                        "aria-label": f.default.Messages.CLOSE,
                        children: n === i.SOLID ? (0, s.jsx)(c.default, {
                            width: 24,
                            height: 24,
                            "aria-hidden": !0
                        }) : (0, s.jsx)(d.default, {
                            width: 18,
                            height: 18,
                            "aria-hidden": !0
                        })
                    }), a.isMobile ? null : (0, s.jsx)("div", {
                        className: r(h.keybind),
                        "aria-hidden": !0,
                        children: l
                    })]
                })
            };
            v.defaultProps = {
                variant: i.DEFAULT
            }, v.Variants = i;
            var p = v
        },
        366634: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("414456"),
                s = n.n(i),
                o = n("748820"),
                r = n("291077");
            let a = (0, o.v4)();
            var u = e => {
                let {
                    open: t,
                    className: n,
                    withHighlight: i = !1
                } = e;
                return (0, l.jsxs)("svg", {
                    width: "18",
                    height: "18",
                    className: s(r.button, n, {
                        [r.open]: t,
                        [r.withHighlight]: i
                    }),
                    children: [i && (0, l.jsx)("defs", {
                        children: (0, l.jsxs)("linearGradient", {
                            id: a,
                            x1: "0",
                            y1: "0",
                            x2: "0",
                            y2: "18",
                            gradientUnits: "userSpaceOnUse",
                            children: [(0, l.jsx)("stop", {
                                offset: "0",
                                stopColor: "#B473F5"
                            }), (0, l.jsx)("stop", {
                                offset: "1",
                                stopColor: "#E292AA"
                            })]
                        })
                    }), (0, l.jsxs)("g", {
                        fill: "none",
                        fillRule: "evenodd",
                        children: [(0, l.jsx)("path", {
                            d: "M0 0h18v18H0"
                        }), (0, l.jsx)("path", {
                            stroke: i ? "url(#".concat(a, ")") : "currentColor",
                            d: "M4.5 4.5l9 9",
                            strokeLinecap: "round"
                        }), (0, l.jsx)("path", {
                            stroke: i ? "url(#".concat(a, ")") : "currentColor",
                            d: "M13.5 4.5l-9 9",
                            strokeLinecap: "round"
                        })]
                    })]
                })
            }
        },
        427027: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ChannelsVoiceNormalIcon: function() {
                    return o
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("669491"),
                s = n("75196");
            let o = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: o = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...a
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, s.default)(a),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        fillRule: "evenodd",
                        d: "M12 3a1 1 0 0 0-1-1h-.06a1 1 0 0 0-.737.324L5.917 7H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2.917l4.286 4.676a1 1 0 0 0 .737.324H11a1 1 0 0 0 1-1V3Zm3.1 17.754c-.58.138-1.1-.33-1.1-.926v-.032c0-.497.369-.912.849-1.043a7.003 7.003 0 0 0 0-13.506C14.369 5.116 14 4.7 14 4.204v-.032c0-.596.52-1.064 1.1-.926a9.004 9.004 0 0 1 0 17.508Zm.057-4.242c-.57.273-1.157-.203-1.157-.835v-.14c0-.424.277-.789.633-1.02A2.997 2.997 0 0 0 16 12a2.997 2.997 0 0 0-1.367-2.517c-.356-.231-.633-.596-.633-1.02v-.14c0-.632.587-1.108 1.157-.835a5 5 0 0 1 0 9.024Z",
                        clipRule: "evenodd",
                        className: r
                    })
                })
            }
        },
        276825: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CheckmarkSmallIcon: function() {
                    return o
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("669491"),
                s = n("75196");
            let o = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: o = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...a
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, s.default)(a),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        fillRule: "evenodd",
                        d: "M18.707 7.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L10 14.586l7.293-7.293a1 1 0 0 1 1.414 0Z",
                        clipRule: "evenodd",
                        className: r
                    })
                })
            }
        },
        505088: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CircleXIcon: function() {
                    return o
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("669491"),
                s = n("75196");
            let o = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: o = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...a
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, s.default)(a),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        fillRule: "evenodd",
                        d: "M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11Zm4.707-15.707a1 1 0 0 0-1.414 0L12 10.586 8.707 7.293a1 1 0 0 0-1.414 1.414L10.586 12l-3.293 3.293a1 1 0 1 0 1.414 1.414L12 13.414l3.293 3.293a1 1 0 0 0 1.414-1.414L13.414 12l3.293-3.293a1 1 0 0 0 0-1.414Z",
                        clipRule: "evenodd",
                        className: r
                    })
                })
            }
        },
        521590: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GlobeEarthIcon: function() {
                    return o
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("669491"),
                s = n("75196");
            let o = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: o = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...a
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, s.default)(a),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        fillRule: "evenodd",
                        d: "M18.843 17.847A9.004 9.004 0 0 0 15 3.513V4a3 3 0 0 1-3 3h-.77a.23.23 0 0 0-.23.23A2.77 2.77 0 0 1 8.23 10a.23.23 0 0 0-.23.23v1.52c0 .138.112.25.25.25H13a3 3 0 0 1 3 3v.77c0 .127.103.23.23.23a2.77 2.77 0 0 1 2.613 1.847Zm-15.66-7.664A9.001 9.001 0 0 0 11 20.945v-2.714a.23.23 0 0 0-.23-.231h-.649A2.121 2.121 0 0 1 8 15.879c0-.563-.223-1.102-.621-1.5l-4.196-4.196ZM23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11Z",
                        clipRule: "evenodd",
                        className: r
                    })
                })
            }
        },
        109731: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                HomeIcon: function() {
                    return o
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("669491"),
                s = n("75196");
            let o = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: o = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...a
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, s.default)(a),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, l.jsx)("g", {
                        clipPath: "url(#a)",
                        children: (0, l.jsx)("path", {
                            fill: "string" == typeof o ? o : o.css,
                            d: "m2.392 8.39 8.389-6.452a2 2 0 0 1 2.438 0l8.389 6.453c1.345 1.035.871 3.17-.786 3.537L20.5 12l-.82 8.2a2 2 0 0 1-1.99 1.8H16a1 1 0 0 1-1-1v-5a3 3 0 0 0-6 0v5a1 1 0 0 1-1 1H6.31a2 2 0 0 1-1.99-1.8L3.5 12l-.322-.072c-1.657-.368-2.131-2.502-.786-3.537Z",
                            className: r
                        })
                    }), (0, l.jsx)("defs", {
                        children: (0, l.jsx)("clipPath", {
                            id: "a",
                            children: (0, l.jsx)("path", {
                                fill: "#fff",
                                d: "M0 0h24v24H0z"
                            })
                        })
                    })]
                })
            }
        },
        753809: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                LinkIcon: function() {
                    return o
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("669491"),
                s = n("75196");
            let o = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: o = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...a
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, s.default)(a),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        fillRule: "evenodd",
                        d: "M16.293 14.707a1 1 0 0 1 0-1.414l2.5-2.5a3.95 3.95 0 1 0-5.586-5.586l-2.5 2.5a1 1 0 1 1-1.414-1.414l2.5-2.5a5.95 5.95 0 0 1 8.414 8.414l-2.5 2.5a1 1 0 0 1-1.414 0ZM7.707 9.293a1 1 0 0 1 0 1.414l-2.5 2.5a3.95 3.95 0 0 0 5.586 5.586l2.5-2.5a1 1 0 0 1 1.414 1.414l-2.5 2.5a5.95 5.95 0 1 1-8.414-8.414l2.5-2.5a1 1 0 0 1 1.414 0Zm7 1.414a1 1 0 1 0-1.414-1.414l-4 4a1 1 0 0 0 1.414 1.414l4-4Z",
                        clipRule: "evenodd",
                        className: r
                    })
                })
            }
        },
        424823: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PlusSmallIcon: function() {
                    return o
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("669491"),
                s = n("75196");
            let o = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: o = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...a
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, s.default)(a),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        fillRule: "evenodd",
                        d: "M13 6a1 1 0 1 0-2 0v5H6a1 1 0 1 0 0 2h5v5a1 1 0 1 0 2 0v-5h5a1 1 0 1 0 0-2h-5V6Z",
                        clipRule: "evenodd",
                        className: r
                    })
                })
            }
        },
        287083: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                StageIcon: function() {
                    return o
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("669491"),
                s = n("75196");
            let o = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: o = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...a
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, s.default)(a),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        fillRule: "evenodd",
                        d: "M19.615 18.25c-.335-.364-.35-.914-.079-1.328a9 9 0 1 0-15.072 0c.27.414.256.964-.079 1.328l-.019.02c-.407.442-1.113.428-1.452-.068A10.949 10.949 0 0 1 1 12C1 5.925 5.925 1 12 1s11 4.925 11 11c0 2.3-.706 4.436-1.914 6.202-.339.496-1.045.51-1.452.068l-.02-.02Zm-2.785-3.017c.428.463 1.176.42 1.454-.145a7 7 0 1 0-12.568 0c.278.565 1.026.608 1.454.145l.054-.06c.304-.329.342-.817.168-1.23a5 5 0 1 1 9.216 0c-.174.413-.136.901.168 1.23l.054.06ZM15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-8.669 8.03c-.252.725.12 1.5.808 1.84A10.955 10.955 0 0 0 12 23c1.745 0 3.395-.406 4.861-1.13.69-.34 1.06-1.115.808-1.84a6.003 6.003 0 0 0-11.338 0Z",
                        clipRule: "evenodd",
                        className: r
                    })
                })
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
            var l = n("37983"),
                i = n("884691"),
                s = n("516555"),
                o = n("65597"),
                r = n("206230"),
                a = n("49111");
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
                d = i.createContext(u);

            function c(e) {
                let {
                    children: t,
                    confettiCanvas: n,
                    spriteCanvas: a,
                    baseConfig: c,
                    addClickListener: f,
                    removeClickListener: h
                } = e, v = (0, s.useConfettiCannon)(n, a), p = (0, o.default)([r.default], () => r.default.useReducedMotion), _ = i.useMemo(() => p ? u : {
                    confettiCanvas: n,
                    cannon: v,
                    createConfetti: (e, t) => v.createConfetti({
                        ...c,
                        ...e
                    }, t),
                    createConfettiAt: (e, t, n, l) => v.createConfetti({
                        ...c,
                        position: {
                            type: "static",
                            value: {
                                x: e,
                                y: t
                            }
                        },
                        ...n
                    }, l),
                    createMultipleConfetti: function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20,
                            n = arguments.length > 2 ? arguments[2] : void 0;
                        return v.createMultipleConfetti({
                            ...c,
                            ...e
                        }, t, n)
                    },
                    createMultipleConfettiAt: function(e, t, n) {
                        let l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 20,
                            i = arguments.length > 4 ? arguments[4] : void 0;
                        return v.createMultipleConfetti({
                            ...c,
                            position: {
                                type: "static",
                                value: {
                                    x: e,
                                    y: t
                                }
                            },
                            ...n
                        }, l, i)
                    },
                    addClickListener: f,
                    removeClickListener: h
                }, [f, c, v, n, p, h]);
                return (0, l.jsx)(d.Provider, {
                    value: _,
                    children: t
                })
            }
        },
        863921: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("414456"),
                s = n.n(i),
                o = n("931138"),
                r = n("206453"),
                a = n("49111"),
                u = n("323755");
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
                    iconBackgroundClassName: n,
                    iconClassName: i,
                    size: a
                } = e;
                return (0, l.jsx)(o.default, {
                    className: s(n, d[t]),
                    size: a,
                    children: (0, l.jsx)(r.default, {
                        tier: t,
                        className: s(i, u.boostedGuildIconGem, c[t])
                    })
                })
            }
        },
        836275: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                openGuildBannerUpsellModal: function() {
                    return v
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("77078"),
                s = n("366634"),
                o = n("974755"),
                r = n("427459"),
                a = n("379532"),
                u = n("944305"),
                d = n("49111"),
                c = n("782340"),
                f = n("670362");

            function h(e) {
                let {
                    guild: t,
                    banner: n
                } = e;
                return (0, l.jsx)("div", {
                    className: f.guildBanner,
                    style: {
                        backgroundImage: "url(".concat(n)
                    },
                    children: (0, l.jsxs)("div", {
                        className: f.guildHeader,
                        children: [(0, l.jsx)(o.default, {
                            guild: t,
                            isBannerVisible: !0
                        }), (0, l.jsx)(i.Heading, {
                            className: f.guildName,
                            variant: "heading-md/semibold",
                            children: t.toString()
                        }), (0, l.jsx)(s.default, {
                            className: f.dropdown,
                            open: !1
                        })]
                    })
                })
            }

            function v(e) {
                let {
                    analyticsLocations: t,
                    analyticsLocation: n,
                    guild: i,
                    isGIF: s,
                    banner: o
                } = e, f = s ? (0, r.minimumRequiredTierForGuildFeature)(d.GuildFeatures.ANIMATED_BANNER) : (0, r.minimumRequiredTierForGuildFeature)(d.GuildFeatures.BANNER);
                null != f && (0, a.default)({
                    analyticsLocations: t,
                    analyticsSourceLocation: n,
                    guild: i,
                    headerProps: {
                        title: c.default.Messages.GUILD_BANNER_UPSELL_MODAL_TITLE,
                        subtitle: function(e, t) {
                            let n = (0, r.getTierName)(e);
                            return t ? c.default.Messages.GUILD_BANNER_UPSELL_MODAL_SUBTITLE_ANIMATED.format({
                                targetLevelOrPlan: n
                            }) : c.default.Messages.GUILD_BANNER_UPSELL_MODAL_SUBTITLE_STATIC.format({
                                targetLevelOrPlan: n
                            })
                        }(f, s),
                        image: (0, l.jsx)(h, {
                            guild: i,
                            banner: o
                        })
                    },
                    perkIntro: c.default.Messages.GUILD_BANNER_UPSELL_MODAL_PERK_INTRO,
                    perks: s ? (0, u.animatedGuildBannerUpsellPerks)() : (0, u.guildBannerUpsellPerks)()
                })
            }
        },
        974755: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("414456"),
                s = n.n(i),
                o = n("446674"),
                r = n("77078"),
                a = n("51565"),
                u = n("95039"),
                d = n("863921"),
                c = n("26989"),
                f = n("697218"),
                h = n("580357"),
                v = n("40469"),
                p = n("427459"),
                _ = n("49111"),
                I = n("782340"),
                E = n("129818");

            function C(e) {
                let {
                    guild: t,
                    isBannerVisible: n,
                    disableBoostClick: i
                } = e, s = (0, o.useStateFromStores)([f.default, c.default], () => {
                    let e = f.default.getCurrentUser();
                    return c.default.isMember(t.id, null == e ? void 0 : e.id)
                }), {
                    premiumTier: a,
                    premiumSubscriberCount: h
                } = t;
                if (0 === h && a === _.BoostedGuildTiers.NONE) return null;
                let v = e => {
                        e.stopPropagation(), e.preventDefault(), s && !i && (0, u.openGuildBoostingMarketingModal)({
                            guildId: t.id,
                            location: {
                                section: _.AnalyticsSections.GUILD_HEADER,
                                object: _.AnalyticsObjects.BOOST_GEM_ICON
                            }
                        })
                    },
                    C = a === _.BoostedGuildTiers.NONE ? I.default.Messages.PREMIUM_GUILD_HEADER_BADGE_NO_TIER : p.getTierName(a),
                    R = (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)("div", {
                            className: E.tierTooltipTitle,
                            children: C
                        }), (0, l.jsx)("div", {
                            children: I.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_SUBSCRIBER_COUNT_TOOLTIP.format({
                                subscriberCount: h
                            })
                        })]
                    });
                return (0, l.jsx)("div", {
                    className: E.guildIconContainer,
                    children: (0, l.jsx)(r.Tooltip, {
                        text: R,
                        position: "bottom",
                        "aria-label": null != C ? C : "",
                        children: e => (0, l.jsx)(r.Clickable, {
                            ...e,
                            className: E.premiumGuildIcon,
                            onClick: v,
                            children: (0, l.jsx)(d.default, {
                                premiumTier: a,
                                iconBackgroundClassName: n ? E.boostedGuildTierIconBackgroundWithVisibleBanner : null,
                                iconClassName: n && a !== _.BoostedGuildTiers.TIER_3 ? E.boostedGuildTierMutedIconWithVisibleBanner : null
                            })
                        })
                    })
                })
            }

            function R(e) {
                let {
                    guild: t,
                    disableColor: n,
                    disableBoostClick: i
                } = e, o = (0, a.default)(t);
                return o ? (0, l.jsx)("div", {
                    className: E.guildIconV2Container,
                    children: (0, l.jsx)(v.default, {
                        guild: t,
                        tooltipPosition: "bottom",
                        tooltipColor: r.Tooltip.Colors.PRIMARY,
                        className: s(E.guildBadge, {
                            [E.disableColor]: n
                        }),
                        disableBoostClick: i
                    })
                }) : (0, l.jsx)("div", {
                    className: E.guildIconContainer,
                    children: (0, l.jsx)(h.default, {
                        guild: t,
                        tooltipPosition: "bottom",
                        tooltipColor: r.Tooltip.Colors.PRIMARY,
                        className: s(E.guildBadge, {
                            [E.disableColor]: n
                        })
                    })
                })
            }

            function g(e) {
                let {
                    guild: t,
                    isBannerVisible: n,
                    disableBoostClick: i
                } = e, s = (0, a.default)(t);
                if (s) return (0, l.jsx)(R, {
                    guild: t,
                    disableColor: !1,
                    disableBoostClick: i
                });
                let o = t.hasFeature(_.GuildFeatures.VERIFIED) || t.hasFeature(_.GuildFeatures.PARTNERED);
                return o ? (0, l.jsx)(R, {
                    guild: t,
                    disableColor: !n
                }) : (0, l.jsx)(C, {
                    guild: t,
                    isBannerVisible: n,
                    disableBoostClick: i
                })
            }
        },
        507497: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("446674"),
                s = n("77078"),
                o = n("685665"),
                r = n("836275"),
                a = n("379532"),
                u = n("305961"),
                d = n("162771"),
                c = n("118503"),
                f = n("49111"),
                h = n("944305"),
                v = n("782340"),
                p = n("323723");

            function _(e) {
                let {
                    analyticsSection: t,
                    analyticsPage: n,
                    isGIF: _,
                    banner: I
                } = e, E = (0, i.useStateFromStores)([d.default], () => d.default.getGuildId()), C = (0, i.useStateFromStores)([u.default], () => u.default.getGuild(E)), {
                    analyticsLocations: R
                } = (0, o.default)();
                return null == C || C.hasFeature(f.GuildFeatures.ANIMATED_BANNER) || !_ && C.hasFeature(f.GuildFeatures.BANNER) ? null : (0, l.jsxs)("div", {
                    className: p.container,
                    children: [(0, l.jsx)(c.default, {
                        className: p.guildBoostingIcon
                    }), (0, l.jsx)(s.Text, {
                        color: "header-primary",
                        variant: "text-sm/semibold",
                        children: v.default.Messages.PREMIUM_GUILD_PREVIEW
                    }), (0, l.jsx)(s.Button, {
                        look: s.Button.Looks.LINK,
                        color: s.Button.Colors.LINK,
                        className: p.subscribeButton,
                        onClick: () => {
                            if (null == C) return;
                            let e = {
                                section: t,
                                page: n,
                                object: f.AnalyticsObjects.UPSELL_HEADER
                            };
                            null != I ? (0, r.openGuildBannerUpsellModal)({
                                analyticsLocations: R,
                                analyticsLocation: e,
                                guild: C,
                                isGIF: _,
                                banner: I
                            }) : (0, a.default)({
                                analyticsLocations: R,
                                analyticsSourceLocation: e,
                                guild: C,
                                perks: _ ? (0, h.animatedGuildBannerUpsellPerks)() : (0, h.guildBannerUpsellPerks)()
                            })
                        },
                        children: v.default.Messages.PREMIUM_GUILD_BOOST_SERVER
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
            var l = n("37983"),
                i = n("884691"),
                s = n("446674"),
                o = n("77078"),
                r = n("812204"),
                a = n("685665"),
                u = n("67069"),
                d = n("635956"),
                c = n("697218"),
                f = n("258078"),
                h = n("599110"),
                v = n("719923"),
                p = n("49111"),
                _ = n("75015"),
                I = n("646718"),
                E = n("782340"),
                C = n("123342");

            function R(e) {
                let {
                    analyticsSection: t,
                    type: n
                } = e, R = (0, s.useStateFromStores)([c.default], () => c.default.getCurrentUser()), g = v.default.canUseAnimatedAvatar(R), m = v.default.canUsePremiumProfileCustomization(R), M = n === _.UploadTypes.BANNER && m || n === _.UploadTypes.AVATAR && g, {
                    sourceAnalyticsLocations: x
                } = (0, a.default)(r.default.PREMIUM_PREVIEW_UPSELL_HEADER);
                if (i.useEffect(() => {
                        !M && h.default.track(p.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                            type: t,
                            location_stack: x
                        })
                    }, [M, t, x]), M) return null;
                let T = (0, l.jsx)(d.default, {
                    className: C.getNitroLink,
                    size: o.Button.Sizes.SMALL,
                    look: o.Button.Looks.LINK,
                    color: o.Button.Colors.LINK,
                    subscriptionTier: I.PremiumSubscriptionSKUs.TIER_2,
                    buttonText: E.default.Messages.PREMIUM_PREVIEW_GET_NITRO.format(),
                    showIcon: !1,
                    premiumModalAnalyticsLocation: {
                        section: t,
                        object: p.AnalyticsObjects.BUTTON_CTA
                    },
                    disableShine: !0
                });
                return (0, l.jsx)(u.default, {
                    reducedRightPadding: !0,
                    className: C.nitroPreviewUpsell,
                    text: E.default.Messages.PREMIUM_PREVIEW.format(),
                    textSize: f.default.Sizes.SIZE_14,
                    textColor: f.default.Colors.HEADER_PRIMARY,
                    button: T
                })
            }
        },
        652914: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("507497"),
                s = n("193867"),
                o = n("75015");

            function r(e) {
                let {
                    type: t,
                    analyticsPage: n,
                    analyticsSection: r,
                    isGIF: a,
                    banner: u
                } = e;
                return [o.UploadTypes.BANNER, o.UploadTypes.AVATAR].includes(t) && a ? (0, l.jsx)(s.default, {
                    analyticsSection: r,
                    type: t
                }) : t === o.UploadTypes.GUILD_BANNER ? (0, l.jsx)(i.default, {
                    analyticsSection: r,
                    analyticsPage: n,
                    isGIF: a,
                    banner: u
                }) : null
            }
        },
        870346: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return P
                }
            });
            var l = n("627445"),
                i = n.n(l),
                s = n("917351"),
                o = n.n(s),
                r = n("288661"),
                a = n("446674"),
                u = n("913144"),
                d = n("605250"),
                c = n("773336"),
                f = n("50885"),
                h = n("563680"),
                v = n("49111");
            let p = {},
                _ = {},
                I = {},
                E = {},
                C = {},
                R = new Set,
                g = () => L.emitChange(),
                m = o.debounce(g, 150);

            function M(e) {
                let t = I[e];
                null != t && !t.closed && (p[e] = {
                    x: t.screenX,
                    y: t.screenY,
                    width: t.innerWidth,
                    height: t.innerHeight,
                    alwaysOnTop: !!c.isPlatformEmbedded && _[e]
                })
            }

            function x(e) {
                let t = I[e];
                null != t && (!t.closed && M(e), t.close(), ! function(e) {
                    let t = I[e];
                    i(null != t, "Popout window was null during unmount"), t.removeEventListener("focus", g), t.removeEventListener("blur", g), t.removeEventListener("resize", m);
                    let n = E[e];
                    i(null != n, "Window root was null while unmounting"), n.unmount(), delete I[e], delete _[e], delete C[e], delete E[e]
                }(e), L.emitChange())
            }

            function T(e) {
                let {
                    data: t
                } = e;
                if (!(t instanceof Object && t.discordPopoutEvent instanceof Object)) return;
                let n = t.discordPopoutEvent;
                if (null != n.key) switch (n.type) {
                    case v.PopoutEventTypes.LOADED:
                        var l;
                        return l = n.key, void(R.has(l) && (! function(e) {
                            let t = I[e],
                                n = C[e];
                            if (null == t) {
                                new(0, d.default)("PopoutWindowStore").warn("Failed to open window", e);
                                return
                            }
                            let l = t.document;
                            (0, h.subscribeDocumentToFullScreenChange)(l, g), t.addEventListener("focus", g), t.addEventListener("blur", g), t.addEventListener("resize", m), ! function(e, t) {
                                let n = t.document,
                                    l = document.querySelectorAll('link[rel="stylesheet"]'),
                                    s = "".concat(window.location.protocol, "//").concat(window.location.host);
                                for (let e of l) {
                                    if (!e.href.startsWith(s)) continue;
                                    let t = n.createElement("link");
                                    t.href = e.href, t.rel = e.rel, t.integrity = e.integrity, i(null != n.head, "Document head was null"), n.head.appendChild(t)
                                }
                            }(0, t);
                            let s = (0, r.createRoot)(l.getElementById("app-mount"));
                            i(null != s, "No render target for popout!"), E[e] = s, s.render(n(e))
                        }(l), R.delete(l), L.emitChange()));
                    case v.PopoutEventTypes.UNLOADED:
                        return x(n.key)
                }
            }

            function w() {
                for (let e of Object.keys(I)) {
                    let t = I[e];
                    null != t && t.close()
                }
            }
            class N extends a.default.PersistedStore {
                initialize(e) {
                    window.addEventListener("message", T), window.addEventListener("beforeunload", w), p = null != e ? e : {}
                }
                getWindow(e) {
                    return I[e]
                }
                getWindowState(e) {
                    return p[e]
                }
                getWindowKeys() {
                    return Object.keys(I)
                }
                getWindowOpen(e) {
                    let t = I[e];
                    return null != t && !t.closed
                }
                getIsAlwaysOnTop(e) {
                    return !!_[e]
                }
                getWindowFocused(e) {
                    var t, n;
                    let l = I[e];
                    return null !== (n = null == l ? void 0 : null === (t = l.document) || void 0 === t ? void 0 : t.hasFocus()) && void 0 !== n && n
                }
                getState() {
                    return p
                }
                unmountWindow(e) {
                    return x(e)
                }
            }
            N.displayName = "PopoutWindowStore", N.persistKey = "PopoutWindowStore";
            let L = new N(u.default, {
                POPOUT_WINDOW_OPEN: function(e) {
                    let {
                        key: t,
                        features: n,
                        render: l
                    } = e;
                    if (c.isPlatformEmbedded && !f.default.supportsFeature(v.NativeFeatures.POPOUT_WINDOWS)) throw Error("Popout windows not supported on this native module version!");
                    let i = I[t];
                    if (null != i && !i.closed) return c.isPlatformEmbedded ? f.default.focus(t) : i.focus(), !1;
                    let {
                        defaultWidth: s,
                        defaultHeight: o,
                        defaultAlwaysOnTop: r = !1,
                        ...a
                    } = n, u = a, d = r, h = p[t];
                    if (null != h) {
                        let {
                            width: e,
                            height: t,
                            x: n,
                            y: l,
                            alwaysOnTop: i
                        } = h;
                        d = null != i ? i : r, u = {
                            width: null != e && 0 !== e ? e : s,
                            height: null != t && 0 !== t ? t : o,
                            left: n,
                            top: l,
                            ...u
                        }
                    }
                    let E = window.open(v.Routes.POPOUT_WINDOW, t, function(e) {
                        let t = "";
                        for (let n of Object.keys(e)) {
                            let l = e[n];
                            void 0 !== l && ("boolean" == typeof l && (l = l ? "yes" : "no"), t += "".concat(n, "=").concat(l, ","))
                        }
                        return t
                    }(u));
                    E.windowKey = t, null == E || E.focus(), I[t] = E, C[t] = l, c.isPlatformEmbedded && (f.default.setAlwaysOnTop(t, d), _[t] = d, f.default.isAlwaysOnTop(t).then(e => _[t] = e)), R.add(t)
                },
                POPOUT_WINDOW_CLOSE: function(e) {
                    let {
                        key: t
                    } = e, n = I[t];
                    null != n && !n.closed && (M(t), n.close())
                },
                POPOUT_WINDOW_SET_ALWAYS_ON_TOP: function(e) {
                    let {
                        key: t,
                        alwaysOnTop: n
                    } = e;
                    c.isPlatformEmbedded && (f.default.setAlwaysOnTop(t, n), _[t] = n, f.default.isAlwaysOnTop(t).then(e => _[t] = e))
                },
                LOGOUT: w
            });
            var P = L
        },
        292687: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l.default
                }
            });
            var l = n("870346")
        },
        974889: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var l = n("773336"),
                i = n("50885"),
                s = n("870346");

            function o(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = s.default.getWindow(e);
                null != n && !n.closed && (l.isPlatformEmbedded ? i.default.focus(e, t) : n.focus())
            }
        },
        67069: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("414456"),
                s = n.n(i),
                o = n("791106"),
                r = n("216422"),
                a = n("258078"),
                u = n("63625");

            function d(e) {
                let {
                    text: t,
                    textSize: n = a.default.Sizes.SIZE_12,
                    textColor: i = a.default.Colors.STANDARD,
                    className: d,
                    button: c,
                    reducedRightPadding: f = !1
                } = e;
                return (0, l.jsxs)("div", {
                    className: s(f ? u.noticeWithoutRightPadding : u.noticeWithRightPadding, d),
                    children: [(0, l.jsxs)("div", {
                        className: u.noticeLeft,
                        children: [(0, l.jsx)(r.default, {
                            className: u.icon,
                            color: o.GradientCssUrls.PREMIUM_TIER_2
                        }), (0, l.jsx)(a.default, {
                            className: u.text,
                            size: n,
                            color: i,
                            children: t
                        })]
                    }), c]
                })
            }
        },
        931138: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var l = n("37983"),
                i = n("884691"),
                s = n("414456"),
                o = n.n(s),
                r = n("77078"),
                a = n("760607"),
                u = n("89976");

            function d(e) {
                let {
                    children: t,
                    size: n = 16,
                    className: s,
                    flowerStarClassName: d,
                    ...c
                } = e, f = i.Children.only(t), h = (0, r.useRedesignIconContext)().enabled;
                return (0, l.jsxs)("div", {
                    className: o(u.flowerStarContainer, s),
                    style: {
                        width: n,
                        height: n
                    },
                    children: [(0, l.jsx)(a.default, {
                        ...c,
                        className: o(d, u.flowerStar)
                    }), (0, l.jsx)("div", {
                        className: o(u.childContainer, {
                            [u.redesignIconChildContainer]: h
                        }),
                        children: f
                    })]
                })
            }
        },
        791106: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Gradients: function() {
                    return r
                },
                GradientCssUrls: function() {
                    return a
                },
                default: function() {
                    return _
                }
            });
            var l = n("37983"),
                i = n("884691"),
                s = n("748820"),
                o = n("669491");
            let r = Object.freeze({
                    PREMIUM_TIER_0: (0, s.v4)(),
                    PREMIUM_TIER_1: (0, s.v4)(),
                    PREMIUM_TIER_2: (0, s.v4)(),
                    PREMIUM_GUILD: (0, s.v4)(),
                    PREMIUM_TRIAL_TUTORIAL: (0, s.v4)(),
                    PREMIUM_GUILD_BADGE_V2_BACKGROUND: (0, s.v4)()
                }),
                a = {
                    PREMIUM_TIER_0: "url(#".concat(r.PREMIUM_TIER_0, ")"),
                    PREMIUM_TIER_1: "url(#".concat(r.PREMIUM_TIER_1, ")"),
                    PREMIUM_TIER_2: "url(#".concat(r.PREMIUM_TIER_2, ")"),
                    PREMIUM_GUILD: "url(#".concat(r.PREMIUM_GUILD, ")"),
                    PREMIUM_TRIAL_TUTORIAL: "url(#".concat(r.PREMIUM_TRIAL_TUTORIAL, ")"),
                    PREMIUM_GUILD_BADGE_V2_BACKGROUND: "url(#".concat(r.PREMIUM_GUILD_BADGE_V2_BACKGROUND, ")")
                },
                u = () => (0, l.jsxs)("linearGradient", {
                    id: r.PREMIUM_TIER_0,
                    children: [(0, l.jsx)("stop", {
                        offset: ".1762",
                        stopColor: o.default.unsafe_rawColors.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS.css
                    }), (0, l.jsx)("stop", {
                        offset: "0.5351",
                        stopColor: o.default.unsafe_rawColors.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS_2.css
                    }), (0, l.jsx)("stop", {
                        offset: "1",
                        stopColor: o.default.unsafe_rawColors.PREMIUM_TIER_0_PURPLE_FOR_GRADIENTS.css
                    })]
                }),
                d = () => (0, l.jsxs)("linearGradient", {
                    id: r.PREMIUM_TIER_1,
                    children: [(0, l.jsx)("stop", {
                        stopColor: o.default.unsafe_rawColors.PREMIUM_TIER_1_BLUE.css
                    }), (0, l.jsx)("stop", {
                        offset: "1",
                        stopColor: o.default.unsafe_rawColors.PREMIUM_TIER_1_PURPLE.css
                    })]
                }),
                c = () => (0, l.jsxs)("linearGradient", {
                    id: r.PREMIUM_TIER_2,
                    children: [(0, l.jsx)("stop", {
                        stopColor: o.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS.css
                    }), (0, l.jsx)("stop", {
                        offset: "0.502368",
                        stopColor: o.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS_2.css
                    }), (0, l.jsx)("stop", {
                        offset: "1",
                        stopColor: o.default.unsafe_rawColors.PREMIUM_TIER_2_PINK_FOR_GRADIENTS.css
                    })]
                }),
                f = () => (0, l.jsxs)("linearGradient", {
                    id: r.PREMIUM_GUILD,
                    children: [(0, l.jsx)("stop", {
                        stopColor: o.default.unsafe_rawColors.GUILD_BOOSTING_BLUE.css
                    }), (0, l.jsx)("stop", {
                        offset: "1",
                        stopColor: o.default.unsafe_rawColors.GUILD_BOOSTING_PURPLE.css
                    })]
                }),
                h = () => (0, l.jsxs)("linearGradient", {
                    id: r.PREMIUM_TRIAL_TUTORIAL,
                    children: [(0, l.jsx)("stop", {
                        stopColor: o.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE.css
                    }), (0, l.jsx)("stop", {
                        offset: "1",
                        stopColor: o.default.unsafe_rawColors.PREMIUM_TIER_2_PINK.css
                    })]
                }),
                v = () => (0, l.jsxs)("linearGradient", {
                    id: r.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
                    gradientTransform: "rotate(45)",
                    children: [(0, l.jsx)("stop", {
                        offset: "0",
                        stopColor: o.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE.css
                    }), (0, l.jsx)("stop", {
                        offset: "1",
                        stopColor: o.default.unsafe_rawColors.PREMIUM_TIER_2_PINK.css
                    })]
                }),
                p = i.memo(function() {
                    return (0, l.jsxs)("svg", {
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
                        children: [u(), d(), c(), f(), h(), v()]
                    })
                }, () => !0);
            var _ = p
        },
        381546: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("469563"),
                s = n("505088"),
                o = n("75196"),
                r = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: s,
                        backgroundColor: r,
                        ...a
                    } = e;
                    return (0, l.jsxs)("svg", {
                        ...(0, o.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 14 14",
                        children: [null != r ? (0, l.jsx)("circle", {
                            r: 5,
                            cx: 7,
                            cy: 7,
                            fill: r
                        }) : null, (0, l.jsx)("path", {
                            fill: i,
                            className: s,
                            d: "M7.02799 0.333252C3.346 0.333252 0.361328 3.31792 0.361328 6.99992C0.361328 10.6819 3.346 13.6666 7.02799 13.6666C10.71 13.6666 13.6947 10.6819 13.6947 6.99992C13.6947 3.31792 10.7093 0.333252 7.02799 0.333252ZM10.166 9.19525L9.22333 10.1379L7.02799 7.94325L4.83266 10.1379L3.89 9.19525L6.08466 6.99992L3.88933 4.80459L4.832 3.86259L7.02733 6.05792L9.22266 3.86259L10.1653 4.80459L7.97066 6.99992L10.166 9.19525Z"
                        })]
                    })
                }, s.CircleXIcon)
        },
        760607: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("75196"),
                s = function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: s = "currentColor",
                        foreground: o,
                        ...r
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, i.default)(r),
                        width: t,
                        height: n,
                        viewBox: "0 0 16 15.2",
                        children: (0, l.jsx)("path", {
                            className: o,
                            fill: s,
                            fillRule: "evenodd",
                            d: "m16 7.6c0 .79-1.28 1.38-1.52 2.09s.44 2 0 2.59-1.84.35-2.46.8-.79 1.84-1.54 2.09-1.67-.8-2.47-.8-1.75 1-2.47.8-.92-1.64-1.54-2.09-2-.18-2.46-.8.23-1.84 0-2.59-1.54-1.3-1.54-2.09 1.28-1.38 1.52-2.09-.44-2 0-2.59 1.85-.35 2.48-.8.78-1.84 1.53-2.12 1.67.83 2.47.83 1.75-1 2.47-.8.91 1.64 1.53 2.09 2 .18 2.46.8-.23 1.84 0 2.59 1.54 1.3 1.54 2.09z"
                        })
                    })
                }
        },
        83900: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("469563"),
                s = n("753809"),
                o = n("75196"),
                r = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: s,
                        ...r
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, o.default)(r),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, l.jsxs)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: [(0, l.jsx)("path", {
                                className: s,
                                fill: i,
                                d: "M10.59 13.41c.41.39.41 1.03 0 1.42-.39.39-1.03.39-1.42 0a5.003 5.003 0 0 1 0-7.07l3.54-3.54a5.003 5.003 0 0 1 7.07 0 5.003 5.003 0 0 1 0 7.07l-1.49 1.49c.01-.82-.12-1.64-.4-2.42l.47-.48a2.982 2.982 0 0 0 0-4.24 2.982 2.982 0 0 0-4.24 0l-3.53 3.53a2.982 2.982 0 0 0 0 4.24zm2.82-4.24c.39-.39 1.03-.39 1.42 0a5.003 5.003 0 0 1 0 7.07l-3.54 3.54a5.003 5.003 0 0 1-7.07 0 5.003 5.003 0 0 1 0-7.07l1.49-1.49c-.01.82.12 1.64.4 2.43l-.47.47a2.982 2.982 0 0 0 0 4.24 2.982 2.982 0 0 0 4.24 0l3.53-3.53a2.982 2.982 0 0 0 0-4.24.973.973 0 0 1 0-1.42z"
                            }), (0, l.jsx)("rect", {
                                width: "24",
                                height: "24"
                            })]
                        })
                    })
                }, s.LinkIcon)
        },
        682344: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("469563"),
                s = n("305861"),
                o = n("75196"),
                r = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 20,
                        height: n = 23,
                        color: i = "currentColor",
                        foreground: s,
                        ...r
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, o.default)(r),
                        width: t,
                        height: n,
                        viewBox: "0 0 20 23",
                        children: (0, l.jsx)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: (0, l.jsx)("path", {
                                className: s,
                                fill: i,
                                d: "M19.487 5.126L10.487 0.126C10.184 -0.042 9.81798 -0.042 9.51498 0.126L0.514977 5.126C0.197977 5.302 0.000976562 5.636 0.000976562 5.999C0.000976562 6.693 0.114977 22.999 10.001 22.999C19.887 22.999 20.001 6.693 20.001 5.999C20.001 5.636 19.804 5.302 19.487 5.126ZM10.001 5.999C11.382 5.999 12.501 7.118 12.501 8.499C12.501 9.88 11.382 10.999 10.001 10.999C8.61998 10.999 7.50098 9.88 7.50098 8.499C7.50098 7.118 8.61998 5.999 10.001 5.999ZM6.25098 16C6.25098 13.699 7.69998 12.25 10.001 12.25C12.302 12.25 13.751 13.699 13.751 16H6.25098Z"
                            })
                        })
                    })
                }, s.ShieldUserIcon)
        },
        151185: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("469563"),
                s = n("424823"),
                o = n("75196"),
                r = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: s,
                        ...r
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, o.default)(r),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, l.jsx)("path", {
                            fill: i,
                            className: s,
                            d: "M20 11.1111H12.8889V4H11.1111V11.1111H4V12.8889H11.1111V20H12.8889V12.8889H20V11.1111Z"
                        })
                    })
                }, s.PlusSmallIcon)
        },
        368121: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("469563"),
                s = n("427027"),
                o = n("75196"),
                r = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: s,
                        ...r
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, o.default)(r),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, l.jsx)("path", {
                            className: s,
                            fill: i,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M11.383 3.07904C11.009 2.92504 10.579 3.01004 10.293 3.29604L6 8.00204H3C2.45 8.00204 2 8.45304 2 9.00204V15.002C2 15.552 2.45 16.002 3 16.002H6L10.293 20.71C10.579 20.996 11.009 21.082 11.383 20.927C11.757 20.772 12 20.407 12 20.002V4.00204C12 3.59904 11.757 3.23204 11.383 3.07904ZM14 5.00195V7.00195C16.757 7.00195 19 9.24595 19 12.002C19 14.759 16.757 17.002 14 17.002V19.002C17.86 19.002 21 15.863 21 12.002C21 8.14295 17.86 5.00195 14 5.00195ZM14 9.00195C15.654 9.00195 17 10.349 17 12.002C17 13.657 15.654 15.002 14 15.002V13.002C14.551 13.002 15 12.553 15 12.002C15 11.451 14.551 11.002 14 11.002V9.00195Z",
                            "aria-hidden": !0
                        })
                    })
                }, s.ChannelsVoiceNormalIcon)
        },
        228427: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("469563"),
                s = n("287083"),
                o = n("75196"),
                r = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 32,
                        height: n = 32,
                        color: i = "currentColor",
                        ...s
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, o.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: (0, l.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 13C14 14.1 13.1 15 12 15C10.9 15 10 14.1 10 13C10 11.9 10.9 11 12 11C13.1 11 14 11.9 14 13ZM8.5 20V19.5C8.5 17.8 9.94 16.5 12 16.5C14.06 16.5 15.5 17.8 15.5 19.5V20H8.5ZM7 13C7 10.24 9.24 8 12 8C14.76 8 17 10.24 17 13C17 13.91 16.74 14.75 16.31 15.49L17.62 16.25C18.17 15.29 18.5 14.19 18.5 13C18.5 9.42 15.58 6.5 12 6.5C8.42 6.5 5.5 9.42 5.5 13C5.5 14.18 5.82 15.29 6.38 16.25L7.69 15.49C7.26 14.75 7 13.91 7 13ZM2.5 13C2.5 7.75 6.75 3.5 12 3.5C17.25 3.5 21.5 7.75 21.5 13C21.5 14.73 21.03 16.35 20.22 17.75L21.51 18.5C22.45 16.88 23 15 23 13C23 6.93 18.07 2 12 2C5.93 2 1 6.93 1 13C1 15 1.55 16.88 2.48 18.49L3.77 17.74C2.97 16.35 2.5 14.73 2.5 13Z",
                            fill: i
                        })
                    })
                }, s.StageIcon)
        },
        12287: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("469563"),
                s = n("276825"),
                o = n("75196"),
                r = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: i = "currentColor",
                        ...s
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, o.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 16 15.2",
                        children: (0, l.jsx)("path", {
                            d: "M7.4,11.17,4,8.62,5,7.26l2,1.53L10.64,4l1.36,1Z",
                            fill: i
                        })
                    })
                }, s.CheckmarkSmallIcon)
        },
        157590: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var l = n("817736"),
                i = n("118810");
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
                    let n = (0, l.findDOMNode)(e);
                    (0, i.isElement)(n, HTMLElement) && (this._nodes.set(n, e), this._components.set(e, n), t.observe(n))
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
            var l = n("884691"),
                i = n("748820"),
                s = n("157590");
            let o = (0, i.v4)(),
                r = new Map,
                a = new Map;
            class u extends l.Component {
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
                        t = a.get(e);
                    if (!t) throw Error("Visibility sensor with id ".concat(e, " not found."));
                    return t
                }
                render() {
                    return l.Children.only(this.props.children)
                }
                constructor(e) {
                    super(e), this.isVisible = !1;
                    let {
                        root: t,
                        rootMargin: n,
                        threshold: l
                    } = e;
                    t ? r.has(t) ? this.elementId = r.get(t) || "" : r.set(t, (0, i.v4)()) : this.elementId = o;
                    let u = this.getVisibilityObserverId();
                    !a.has(u) && a.set(u, new s.default({
                        root: t,
                        rootMargin: n,
                        threshold: l
                    }))
                }
            }
            u.defaultProps = {
                active: !0,
                children: l.createElement("span"),
                root: null,
                rootMargin: "0px 0px 0px 0px",
                threshold: [0, Number.MIN_VALUE]
            };
            var d = u
        },
        290381: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                VisibilityObserver: function() {
                    return l.default
                },
                VisibilitySensor: function() {
                    return i.default
                }
            }), n("6268");
            var l = n("157590"),
                i = n("235855")
        }
    }
]);