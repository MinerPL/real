(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["10141"], {
        856670: function(e, t, s) {
            "use strict";
            e.exports = s.p + "018197f71e03e53562e7.svg"
        },
        693029: function(e, t, s) {
            "use strict";
            e.exports = s.p + "7e5dd7f59f96cc264184.svg"
        },
        243704: function(e, t, s) {
            "use strict";
            e.exports = s.p + "6418419524dd1e583beb.svg"
        },
        274456: function(e, t, s) {
            "use strict";
            e.exports = s.p + "15f331c71c4a92929dd6.svg"
        },
        193919: function(e, t, s) {
            "use strict";
            e.exports = s.p + "799c4384055c8514120b.svg"
        },
        133403: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return c
                }
            });
            var l = s("37983");
            s("884691");
            var n = s("414456"),
                r = s.n(n),
                o = s("77078"),
                a = s("782340"),
                i = s("239636");
            let u = Object.freeze({
                DEFAULT: i.default,
                FILLED: i.filled
            });

            function c(e) {
                let {
                    className: t,
                    onClick: s,
                    "aria-label": n,
                    look: c = u.DEFAULT
                } = e;
                return (0, l.jsx)(o.Clickable, {
                    "aria-label": null != n ? n : a.default.Messages.REMOVE,
                    className: r(i.button, c, t),
                    onClick: s
                })
            }
            c.Looks = u
        },
        913801: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return C
                }
            });
            var l = s("37983"),
                n = s("884691"),
                r = s("414456"),
                o = s.n(r),
                a = s("862337"),
                i = s("77078"),
                u = s("188525"),
                c = s("306160"),
                d = s("782340"),
                f = s("166392");
            class E extends n.PureComponent {
                componentWillUnmount() {
                    this._timeout.stop()
                }
                render() {
                    let {
                        isVertical: e,
                        value: t,
                        text: s,
                        className: n,
                        inputClassName: r
                    } = this.props, {
                        mode: a
                    } = this.state, c = a === u.default.Modes.SUCCESS ? d.default.Messages.COPIED : s;
                    return e ? (0, l.jsxs)("div", {
                        className: o(n, a),
                        children: [(0, l.jsx)(i.TextInput, {
                            value: t,
                            inputClassName: r
                        }), (0, l.jsx)(i.Button, {
                            className: f.button,
                            onClick: this.handleCopy,
                            size: i.Button.Sizes.MIN,
                            color: this.getVerticalButtonColor(a),
                            look: i.Button.Looks.FILLED,
                            children: c
                        })]
                    }) : (0, l.jsx)(u.default, {
                        ...this.props,
                        onCopy: this.handleCopy,
                        mode: a,
                        text: c
                    })
                }
                handleCopy() {
                    let {
                        onCopy: e,
                        value: t,
                        delay: s
                    } = this.props, l = (0, c.copy)(t);
                    this.setState({
                        mode: l ? u.default.Modes.SUCCESS : u.default.Modes.ERROR
                    }), this._timeout.start(s, () => this.setState({
                        mode: u.default.Modes.DEFAULT
                    })), null == e || e()
                }
                getVerticalButtonColor(e) {
                    switch (e) {
                        case u.default.Modes.SUCCESS:
                            return i.Button.Colors.GREEN;
                        case u.default.Modes.ERROR:
                            return i.Button.Colors.RED;
                        default:
                            return i.Button.Colors.BRAND
                    }
                }
                constructor(e) {
                    super(e), this.state = {
                        mode: u.default.Modes.DEFAULT
                    }, this._timeout = new a.Timeout, this.handleCopy = this.handleCopy.bind(this)
                }
            }
            E.defaultProps = {
                isVertical: !1,
                delay: 300
            };
            var C = E
        },
        45299: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return f
                }
            }), s("222007");
            var l = s("37983"),
                n = s("884691"),
                r = s("301165"),
                o = s("669491"),
                a = s("77078"),
                i = s("659500"),
                u = s("49111"),
                c = s("782340"),
                d = s("317404"),
                f = function(e) {
                    var t;
                    let {
                        message: s,
                        errorMessage: f,
                        submitting: E,
                        onReset: C,
                        onSave: _,
                        onSaveText: I,
                        onResetText: L,
                        onSaveButtonColor: h,
                        disabled: N,
                        saveButtonTooltip: p
                    } = e, g = n.useRef(null), [{
                        spring: m
                    }, T] = (0, r.useSpring)(() => ({
                        spring: 0
                    }));
                    n.useEffect(() => {
                        function e() {
                            T({
                                spring: 1,
                                config: r.config.gentle
                            }), T({
                                spring: 0,
                                config: r.config.gentle,
                                delay: 1e3
                            })
                        }
                        return i.ComponentDispatch.subscribe(u.ComponentActions.EMPHASIZE_NOTICE, e), () => {
                            i.ComponentDispatch.unsubscribe(u.ComponentActions.EMPHASIZE_NOTICE, e)
                        }
                    }, [T]);
                    let v = m.to({
                            range: [0, 1],
                            output: [(0, a.useToken)(o.default.colors.TEXT_NORMAL).hex(), (0, a.useToken)(o.default.unsafe_rawColors.WHITE_500).hex()]
                        }),
                        R = m.to({
                            range: [0, 1],
                            output: [(0, a.useToken)(o.default.colors.BACKGROUND_FLOATING).hex(), (0, a.useToken)(o.default.colors.STATUS_DANGER).hex()]
                        }),
                        M = (0, a.useToken)(o.default.colors.TEXT_DANGER).hex();
                    return (0, l.jsx)(r.animated.div, {
                        className: d.container,
                        style: {
                            backgroundColor: R
                        },
                        children: (0, l.jsx)("div", {
                            className: d.flexContainer,
                            ref: g,
                            children: (0, l.jsxs)(a.FocusRingScope, {
                                containerRef: g,
                                children: [(0, l.jsx)("div", {
                                    className: d.shrinkingContainer,
                                    children: (0, l.jsx)(r.animated.div, {
                                        className: d.message,
                                        style: {
                                            color: null != f ? M : v
                                        },
                                        children: null !== (t = null != f ? f : s) && void 0 !== t ? t : c.default.Messages.SETTINGS_NOTICE_MESSAGE
                                    })
                                }), (0, l.jsxs)("div", {
                                    className: d.actions,
                                    children: [null != C && (0, l.jsx)(a.Button, {
                                        className: d.resetButton,
                                        size: a.Button.Sizes.SMALL,
                                        color: a.Button.Colors.PRIMARY,
                                        look: a.Button.Looks.LINK,
                                        onClick: C,
                                        children: (0, l.jsx)(r.animated.span, {
                                            style: {
                                                color: v
                                            },
                                            children: null != L ? L : c.default.Messages.RESET
                                        })
                                    }), null != _ ? (0, l.jsx)(a.Tooltip, {
                                        text: p,
                                        children: e => (0, l.jsx)(a.Button, {
                                            size: a.Button.Sizes.SMALL,
                                            color: null != h ? h : a.Button.Colors.GREEN,
                                            submitting: E,
                                            disabled: N,
                                            onClick: _,
                                            ...e,
                                            children: null != I ? I : c.default.Messages.SAVE_CHANGES
                                        })
                                    }) : null]
                                })]
                            })
                        })
                    })
                }
        },
        859670: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                BoostTier1Icon: function() {
                    return o
                }
            });
            var l = s("37983");
            s("884691");
            var n = s("669491"),
                r = s("75196");
            let o = e => {
                let {
                    width: t = 24,
                    height: s = 24,
                    color: o = n.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...i
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, r.default)(i),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        fillRule: "evenodd",
                        d: "M13.054 1.4c-.652-.534-1.456-.534-2.108 0L6.054 5.406C5.402 5.94 5 6.928 5 7.995v8.01c0 1.068.402 2.055 1.054 2.59l4.892 4.004c.652.535 1.456.535 2.108 0l4.892-4.005c.652-.534 1.054-1.52 1.054-2.59V7.996c0-1.068-.402-2.055-1.054-2.59l-4.892-4.004ZM12 4.416 8.056 7.644A1.029 1.029 0 0 0 8 7.995v8.01c0 .157.03.28.056.351L12 19.586l3.944-3.23a1.03 1.03 0 0 0 .056-.351v-8.01c0-.157-.03-.28-.056-.351L12 4.414Z",
                        clipRule: "evenodd",
                        className: a
                    })
                })
            }
        },
        372167: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                BoostTier2Icon: function() {
                    return o
                }
            });
            var l = s("37983");
            s("884691");
            var n = s("669491"),
                r = s("75196");
            let o = e => {
                let {
                    width: t = 24,
                    height: s = 24,
                    color: o = n.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...i
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, r.default)(i),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, l.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        d: "M11.646 6.354 9.293 8.707A1 1 0 0 0 9 9.414v5.172a1 1 0 0 0 .293.707l2.353 2.353a.5.5 0 0 0 .708 0l2.353-2.353a1 1 0 0 0 .293-.707V9.414a1 1 0 0 0-.293-.707l-2.353-2.353a.5.5 0 0 0-.708 0Z",
                        className: a
                    }), (0, l.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        fillRule: "evenodd",
                        d: "M10.946 1.4c.652-.534 1.456-.534 2.108 0l4.892 4.005C18.598 5.94 19 6.928 19 7.995v8.01c0 1.068-.402 2.055-1.054 2.59l-4.892 4.004c-.652.535-1.456.535-2.108 0l-4.892-4.005C5.402 18.06 5 17.075 5 16.005V7.996c0-1.068.402-2.055 1.054-2.59l4.892-4.004ZM7.32 6.954 12 3.123l4.679 3.83c.069.056.321.4.321 1.042v8.01c0 .643-.253.986-.321 1.042L12 20.877l-4.679-3.83c-.068-.056-.321-.4-.321-1.042v-8.01c0-.643.253-.986.321-1.042Z",
                        clipRule: "evenodd",
                        className: a
                    })]
                })
            }
        },
        860942: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                BoostTier3Icon: function() {
                    return o
                }
            });
            var l = s("37983");
            s("884691");
            var n = s("669491"),
                r = s("75196");
            let o = e => {
                let {
                    width: t = 24,
                    height: s = 24,
                    color: o = n.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...i
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, r.default)(i),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, l.jsx)("path", {
                        d: "M13.189 2.493c.291-.23.352-.694.064-.93l-.199-.162c-.652-.535-1.456-.535-2.108 0L6.054 5.406C5.402 5.94 5 6.925 5 7.995v8.009c0 1.068.402 2.055 1.054 2.59l4.892 4.004c.652.535 1.456.535 2.108 0l4.892-4.005c.652-.534 1.054-1.52 1.054-2.59V12.5c0-.276-.225-.496-.498-.537a3.274 3.274 0 0 1-.602-.15c-.394-.14-.9.118-.9.536v3.656c0 .643-.253.986-.321 1.042l-4.362 3.571a.5.5 0 0 1-.634 0l-4.362-3.571c-.068-.056-.321-.4-.321-1.042v-8.01c0-.643.253-.986.321-1.042l4.521-3.701a.25.25 0 0 1 .316 0c.12.099.302.063.39-.067.172-.256.386-.49.64-.692Z",
                        fill: "string" == typeof o ? o : o.css,
                        className: a
                    }), (0, l.jsx)("path", {
                        d: "m9.293 8.707 2.353-2.353a.5.5 0 0 1 .708 0l2.353 2.353a1 1 0 0 1 .293.707v5.172a1 1 0 0 1-.293.707l-2.353 2.353a.5.5 0 0 1-.708 0l-2.353-2.353A1 1 0 0 1 9 14.586V9.414a1 1 0 0 1 .293-.707ZM17.861.793c.392-1.057 1.886-1.057 2.278 0l.51 1.377a2 2 0 0 0 1.18 1.182l1.378.51c1.057.39 1.057 1.885 0 2.277l-1.377.51a2 2 0 0 0-1.182 1.18l-.51 1.378c-.39 1.057-1.886 1.057-2.277 0l-.51-1.377a2 2 0 0 0-1.18-1.182l-1.378-.51c-1.057-.39-1.057-1.885 0-2.277l1.377-.51a2 2 0 0 0 1.182-1.18l.51-1.378Z",
                        fill: "string" == typeof o ? o : o.css,
                        className: a
                    })]
                })
            }
        },
        639055: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                EyeDropperIcon: function() {
                    return o
                }
            });
            var l = s("37983");
            s("884691");
            var n = s("669491"),
                r = s("75196");
            let o = e => {
                let {
                    width: t = 24,
                    height: s = 24,
                    color: o = n.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...i
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, r.default)(i),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        d: "m16.25 2.25-2 2-.629-.629a3 3 0 0 0-4.242 0l-.849.849a.75.75 0 0 0 0 1.06l9.94 9.94a.75.75 0 0 0 1.06 0l.849-.849a3 3 0 0 0 0-4.242l-.629-.629 2-2a3.89 3.89 0 1 0-5.5-5.5ZM9.293 9.707a1 1 0 0 1 1.414 0l3.586 3.586a1 1 0 0 1 0 1.414l-4.829 4.828A5 5 0 0 1 6.76 20.93c-.467.08-.86.418-1.099.827A2.5 2.5 0 0 1 1 20.5c0-.922.5-1.728 1.243-2.161.41-.24.748-.632.827-1.1a5 5 0 0 1 1.394-2.704l4.829-4.828Z",
                        className: a
                    })
                })
            }
        },
        248559: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return n
                }
            }), s("222007");
            var l = s("884691"),
                n = () => {
                    let [e, t] = (0, l.useState)(null);
                    return (0, l.useEffect)(() => {
                        var e;
                        (null === (e = window) || void 0 === e ? void 0 : e.EyeDropper) != null && t(new window.EyeDropper)
                    }, []), e
                }
        },
        866561: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return C
                }
            });
            var l = s("37983");
            s("884691");
            var n = s("446674"),
                r = s("77078"),
                o = s("626301"),
                a = s("400307"),
                i = s("697218"),
                u = s("719923"),
                c = s("646718"),
                d = s("782340"),
                f = s("157997");
            let E = e => {
                let {
                    onOpenPremiumClick: t
                } = e, s = (0, l.jsx)(r.Button, {
                    className: f.tier0Button,
                    color: r.Button.Colors.BRAND,
                    look: r.Button.Looks.INVERTED,
                    onClick: () => {
                        (0, o.navigateToPremiumMarketingPage)(), null != t && t()
                    },
                    children: d.default.Messages.LEARN_MORE
                });
                return (0, l.jsxs)("div", {
                    className: f.tier0Container,
                    children: [(0, l.jsx)(r.Heading, {
                        className: f.tier0Heading,
                        variant: "heading-xxl/extrabold",
                        children: d.default.Messages.GUILD_SETTINGS_PREMIUM_UPSELL_HEADING_SECONDARY
                    }), (0, l.jsx)(a.Tier2Card, {
                        className: f.tier0Card,
                        ctaButton: s,
                        featureSet: a.Tier2FeatureSet.BOOSTING,
                        showWumpus: !0,
                        showYearlyPrice: !0
                    })]
                })
            };
            var C = e => {
                let {
                    onOpenPremiumClick: t
                } = e, s = (0, n.useStateFromStores)([i.default], () => i.default.getCurrentUser());
                return u.default.isPremium(s, c.PremiumTypes.TIER_2) ? null : (0, l.jsx)(E, {
                    onOpenPremiumClick: t
                })
            }
        },
        656142: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return L
                }
            });
            var l = s("37983");
            s("884691");
            var n = s("414456"),
                r = s.n(n),
                o = s("446674"),
                a = s("77078"),
                i = s("915639"),
                u = s("697218"),
                c = s("10514"),
                d = s("521012"),
                f = s("719923"),
                E = s("153160"),
                C = s("646718"),
                _ = s("782340"),
                I = s("545627"),
                L = e => {
                    var t;
                    let {
                        className: s
                    } = e, n = (0, o.useStateFromStores)([u.default], () => u.default.getCurrentUser()), L = (0, o.useStateFromStores)([i.default], () => i.default.locale), h = (0, o.useStateFromStores)([d.default], () => d.default.getPremiumTypeSubscription()), N = (0, o.useStateFromStores)([c.default], () => null != h ? c.default.get(h.planId) : void 0), p = null !== (t = (0, o.useStateFromStores)([c.default], () => null != N ? c.default.getForSkuAndInterval(C.PremiumSubscriptionSKUs.GUILD, N.interval, N.intervalCount) : void 0)) && void 0 !== t ? t : C.SubscriptionPlanInfo[C.SubscriptionPlans.PREMIUM_MONTH_GUILD];
                    return (0, l.jsxs)("div", {
                        className: r(I.wrapper, s),
                        children: [(0, l.jsx)(a.Heading, {
                            className: I.heading,
                            variant: "heading-xl/semibold",
                            children: _.default.Messages.GUILD_SETTINGS_PREMIUM_UPSELL_HEADING_PRIMARY
                        }), (0, l.jsx)(a.Text, {
                            variant: "text-md/normal",
                            children: function(e) {
                                let {
                                    currentUser: t,
                                    locale: s,
                                    guildBoostingPlanId: n,
                                    interval: r,
                                    intervalCount: o
                                } = e, a = f.default.getDefaultPrice(n, f.default.isPremium(t)), i = f.default.getDefaultPrice(n, !1), u = (0, E.formatRate)((0, E.formatPrice)(a.amount, a.currency), r, o), c = (0, E.formatRate)((0, E.formatPrice)(i.amount, i.currency), r, o);
                                return f.default.isPremium(t, C.PremiumTypes.TIER_2) ? _.default.Messages.GUILD_SETTINGS_PREMIUM_UPSELL_SUBHEADING_TIER_2.format({
                                    price: u,
                                    originalPrice: c,
                                    originalPriceHook: (e, t) => (0, l.jsx)("span", {
                                        className: I.originalPrice,
                                        children: e
                                    }, t),
                                    freeSubscriptionCount: C.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM,
                                    discountPercent: (0, E.formatPercent)(s, C.GUILD_BOOST_COST_FOR_PREMIUM_USER_DISCOUNT_PERCENT / 100)
                                }) : f.default.isPremium(t, C.PremiumTypes.TIER_1) ? _.default.Messages.GUILD_SETTINGS_PREMIUM_UPSELL_SUBHEADING_TIER_1.format({
                                    price: u,
                                    originalPrice: c,
                                    originalPriceHook: (e, t) => (0, l.jsx)("span", {
                                        className: I.originalPrice,
                                        children: e
                                    }, t),
                                    discountPercent: (0, E.formatPercent)(s, C.GUILD_BOOST_COST_FOR_PREMIUM_USER_DISCOUNT_PERCENT / 100)
                                }) : _.default.Messages.GUILD_SETTINGS_PREMIUM_UPSELL_SUBHEADING.format({
                                    price: u
                                })
                            }({
                                currentUser: n,
                                locale: L,
                                guildBoostingPlanId: p.id,
                                interval: p.interval,
                                intervalCount: p.intervalCount
                            })
                        })]
                    })
                }
        },
        352807: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                openActionCompleteSuccessModal: function() {
                    return d
                }
            });
            var l = s("37983");
            s("884691");
            var n = s("77078"),
                r = s("191814"),
                o = s("430677"),
                a = s("476765"),
                i = s("782340"),
                u = s("937769");

            function c(e) {
                let {
                    transitionState: t,
                    Icon: s,
                    title: c,
                    body: d,
                    onClose: f
                } = e, E = (0, a.useUID)();
                return (0, l.jsxs)(n.ModalRoot, {
                    className: u.container,
                    transitionState: t,
                    "aria-labelledby": E,
                    children: [(0, l.jsxs)(n.ModalContent, {
                        children: [(0, l.jsx)(o.default, {
                            Icon: s
                        }), (0, l.jsx)(r.default, {
                            size: 24
                        }), (0, l.jsx)(n.Heading, {
                            id: E,
                            className: u.title,
                            variant: "heading-xl/semibold",
                            children: c
                        }), (0, l.jsx)(r.default, {
                            size: 8
                        }), (0, l.jsx)(n.Text, {
                            className: u.body,
                            variant: "text-sm/normal",
                            children: d
                        })]
                    }), (0, l.jsx)(r.default, {
                        size: 24
                    }), (0, l.jsx)(n.Button, {
                        size: n.Button.Sizes.MEDIUM,
                        grow: !1,
                        onClick: f,
                        children: i.default.Messages.GOT_IT
                    })]
                })
            }

            function d(e) {
                (0, n.openModal)(t => (0, l.jsx)(c, {
                    ...t,
                    ...e
                }))
            }
        },
        306073: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return o
                }
            });
            var l = s("37983"),
                n = s("884691");
            let r = e => t => {
                null == t || t.stopPropagation(), e()
            };

            function o(e) {
                let {
                    onClick: t,
                    className: s,
                    children: o
                } = e, a = n.useRef(null);
                return (0, l.jsx)("div", {
                    onClick: t,
                    ref: a,
                    className: s,
                    children: o({
                        areaRef: a,
                        handleStopPropagation: r
                    })
                })
            }
        },
        223984: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                MessageBlockColors: function() {
                    return i
                },
                default: function() {
                    return u
                }
            });
            var l = s("37983");
            s("884691");
            var n = s("414456"),
                r = s.n(n),
                o = s("77078"),
                a = s("53895");
            let i = {
                RED: a.redMessageBlock,
                YELLOW: a.yellowMessageBlock,
                BROWN: a.brownMessageBlock
            };

            function u(e) {
                let {
                    color: t,
                    icon: s,
                    children: n,
                    className: i
                } = e;
                return (0, l.jsx)(o.FormErrorBlock, {
                    icon: e => (0, l.jsx)(s, {
                        height: 20,
                        width: 20,
                        ...e
                    }),
                    iconClassName: a.messageBlockIcon,
                    className: r(t, i),
                    children: n
                })
            }
        },
        417186: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return o
                }
            });
            var l = s("37983");
            s("884691");
            var n = s("423487"),
                r = s("223984");

            function o(e) {
                let {
                    children: t,
                    className: s,
                    color: o = r.MessageBlockColors.YELLOW
                } = e;
                return (0, l.jsx)(r.default, {
                    className: s,
                    color: o,
                    icon: n.default,
                    children: t
                })
            }
        },
        264742: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                WarningBlockButtonPosition: function() {
                    return f
                },
                default: function() {
                    return E
                }
            });
            var l = s("37983");
            s("884691");
            var n = s("414456"),
                r = s.n(n),
                o = s("819855"),
                a = s("77078"),
                i = s("841098"),
                u = s("223984"),
                c = s("417186"),
                d = s("946790");
            let f = {
                RIGHT: d.horizontalStatusWarningBlock,
                BOTTOM: d.verticalStatusWarningBlock
            };

            function E(e) {
                let {
                    className: t,
                    color: s = u.MessageBlockColors.YELLOW,
                    buttonPosition: n = f.BOTTOM,
                    notice: E,
                    ctaLabel: C,
                    ctaLoading: _,
                    ctaDisabled: I,
                    ctaClassName: L,
                    onClick: h
                } = e, N = (0, i.default)();
                return (0, l.jsx)(c.default, {
                    className: r(d.statusWarningBlock, {
                        [d.statusWarningBlockWithCta]: null != C
                    }, t),
                    color: (0, o.isThemeDark)(N) ? s : u.MessageBlockColors.BROWN,
                    children: (0, l.jsxs)("div", {
                        className: n,
                        children: [(0, l.jsx)(a.Text, {
                            variant: "text-sm/normal",
                            color: "interactive-active",
                            children: E
                        }), null != C && null != h && (0, l.jsx)("div", {
                            className: d.ctaButtonContainer,
                            children: (0, l.jsx)(a.Button, {
                                className: r(d.ctaButton, (0, o.isThemeDark)(N) ? void 0 : d.ctaBlackButton, L),
                                color: (0, o.isThemeDark)(N) ? a.Button.Colors.WHITE : a.Button.Colors.CUSTOM,
                                size: a.ButtonSizes.MEDIUM,
                                onClick: h,
                                disabled: I,
                                submitting: _,
                                children: (0, l.jsx)(a.Text, {
                                    className: d.ctaButtonText,
                                    variant: "text-sm/medium",
                                    children: C
                                })
                            })
                        })]
                    })
                })
            }
        },
        797944: function(e, t, s) {
            "use strict";
            var l, n;
            s.r(t), s.d(t, {
                HighlightColors: function() {
                    return l
                }
            }), (n = l || (l = {})).ACCENT = "accent", n.GREEN = "statusGreen", n.YELLOW = "statusYellow", n.ORANGE = "statusOrange", n.RED = "statusRed", n.NONE = "transparent"
        },
        973262: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                DefaultColorButton: function() {
                    return g
                },
                CustomColorButton: function() {
                    return m
                },
                CustomColorPicker: function() {
                    return T
                },
                default: function() {
                    return v
                }
            }), s("222007");
            var l = s("37983"),
                n = s("884691"),
                r = s("414456"),
                o = s.n(r),
                a = s("974667"),
                i = s("509043"),
                u = s("77078"),
                c = s("248559"),
                d = s("449918"),
                f = s("526975"),
                E = s("36694"),
                C = s("422403"),
                _ = s("664336"),
                I = s("49111"),
                L = s("782340"),
                h = s("169225");
            let N = () => Promise.resolve();

            function p(e) {
                let {
                    color: t,
                    isDefault: s = !1,
                    isCustom: n = !1,
                    isSelected: r = !1,
                    disabled: c = !1,
                    style: f = {},
                    onClick: _,
                    "aria-label": L
                } = e, N = (0, a.useListItem)("color-".concat(t)), p = null != t ? (0, i.int2hex)(t) : f.backgroundColor, g = !1;
                return n && !r ? g = !0 : (n || r) && (g = (0, i.getDarkness)(t) > .1), (0, l.jsx)(u.FocusRing, {
                    offset: -2,
                    children: (0, l.jsxs)("button", {
                        type: "button",
                        className: o(h.colorPickerSwatch, {
                            [h.disabled]: c,
                            [h.default]: s,
                            [h.custom]: n,
                            [h.noColor]: null == t
                        }),
                        disabled: c,
                        onClick: () => null == _ ? void 0 : _(t),
                        style: {
                            ...f,
                            backgroundColor: p
                        },
                        "aria-label": null != L ? L : p,
                        ...N,
                        children: [n ? (0, l.jsx)(C.default, {
                            className: h.colorPickerDropper,
                            foreground: h.colorPickerDropperFg,
                            width: 14,
                            height: 14,
                            color: (0, d.getColor)(g ? I.Color.WHITE_500 : I.Color.BLACK_500)
                        }) : null, function() {
                            let e = 16,
                                t = 16;
                            if ((n || s) && (e = 32, t = 24), r) return (0, l.jsx)(E.default, {
                                width: e,
                                height: t,
                                color: (0, d.getColor)(g ? I.Color.WHITE_500 : I.Color.BLACK_500)
                            })
                        }()]
                    })
                })
            }
            class g extends n.PureComponent {
                render() {
                    let {
                        color: e,
                        onChange: t,
                        value: s,
                        disabled: n
                    } = this.props;
                    return (0, l.jsx)(p, {
                        isDefault: !0,
                        color: e,
                        isSelected: e === s || 0 === s,
                        onClick: t,
                        disabled: n
                    })
                }
            }
            class m extends n.PureComponent {
                render() {
                    let {
                        customColor: e,
                        value: t,
                        disabled: s,
                        "aria-label": n
                    } = this.props;
                    return (0, l.jsx)(p, {
                        isCustom: !0,
                        color: e,
                        isSelected: t === e,
                        disabled: s,
                        "aria-label": n
                    })
                }
            }
            let T = n.memo(e => {
                let {
                    value: t,
                    onChange: s,
                    onClose: r,
                    suggestedColors: o,
                    middle: a,
                    footer: d,
                    showEyeDropper: E
                } = e, I = (0, c.default)(), [N, p] = n.useState(() => {
                    let e = null != t ? t : 0,
                        s = (0, i.int2hex)(e);
                    return {
                        current: e,
                        pending: s,
                        input: s
                    }
                });
                n.useEffect(() => {
                    if (null == t || t === N.current) return;
                    let e = (0, i.int2hex)(t);
                    p({
                        current: t,
                        pending: e,
                        input: e
                    })
                }, [t, N]), n.useEffect(() => r, [r]);
                let g = e => {
                        let t = "#" === e[0] ? e : "#".concat(e);
                        if (!(0, i.isValidHex)(t)) {
                            p(e => ({
                                ...e,
                                input: t
                            }));
                            return
                        }
                        let l = (0, i.hex2int)(t);
                        p({
                            current: l,
                            pending: t,
                            input: t
                        }), s(l)
                    },
                    m = async () => {
                        if (null != I) try {
                            let {
                                sRGBHex: e
                            } = await I.open();
                            g(e)
                        } catch {}
                    }, T = e => {
                        p(t => ({
                            ...t,
                            pending: e,
                            input: e
                        }))
                    }, v = e => {
                        s((0, i.hex2int)(e))
                    };
                return (0, l.jsxs)(u.Dialog, {
                    "aria-label": L.default.Messages.PICK_A_COLOR,
                    className: h.customColorPicker,
                    children: [(0, l.jsx)(f.default, {
                        onChange: e => {
                            let {
                                hex: t
                            } = e;
                            return T(t)
                        },
                        onChangeComplete: e => {
                            let {
                                hex: t
                            } = e;
                            return v(t)
                        },
                        color: N.pending
                    }), a, (0, l.jsxs)("div", {
                        className: h.customColorPickerInputContainer,
                        children: [E && null != I && (0, l.jsx)(_.Icon, {
                            onClick: m,
                            tooltip: L.default.Messages.PICK_A_COLOR_FROM_THE_PAGE,
                            tooltipPosition: "top",
                            className: h.customColorPickerEyeDropper,
                            icon: C.default
                        }), (0, l.jsx)(u.TextInput, {
                            className: h.customColorPickerInput,
                            value: N.input,
                            onChange: g,
                            maxLength: 7
                        })]
                    }), null != o && o.length > 0 && (0, l.jsx)("div", {
                        className: h.suggestedColors,
                        children: o.map((e, t) => (0, l.jsx)(u.Clickable, {
                            "aria-label": "",
                            style: {
                                backgroundColor: e
                            },
                            className: h.suggestedColor,
                            onClick: () => g(e)
                        }, "".concat(e, "-").concat(t)))
                    }), d]
                })
            });

            function v(e) {
                let {
                    className: t,
                    defaultColor: s,
                    customColor: n,
                    colors: r,
                    value: i,
                    disabled: u,
                    onChange: c,
                    renderDefaultButton: d,
                    renderCustomButton: f,
                    colorContainerClassName: E
                } = e, C = e => (0, l.jsx)("div", {
                    className: h.colorPickerRow,
                    children: e.map(e => (0, l.jsx)(p, {
                        color: e,
                        isSelected: e === i,
                        onClick: c,
                        disabled: u
                    }, e))
                }), _ = r.slice(0, r.length / 2), I = r.slice(r.length / 2, r.length), L = (0, a.default)({
                    id: "color-picker",
                    isEnabled: !0,
                    scrollToStart: N,
                    scrollToEnd: N
                });
                return (0, l.jsx)(a.ListNavigatorProvider, {
                    navigator: L,
                    children: (0, l.jsx)(a.ListNavigatorContainer, {
                        children: e => {
                            let {
                                ref: r,
                                ...a
                            } = e;
                            return (0, l.jsxs)("div", {
                                className: o(h.container, t),
                                ref: r,
                                ...a,
                                children: [(0, l.jsx)("div", {
                                    className: o(h.defaultContainer, E),
                                    children: d({
                                        value: i,
                                        color: s,
                                        onChange: c,
                                        disabled: u
                                    })
                                }), (0, l.jsx)("div", {
                                    className: o(h.customContainer, E),
                                    children: f({
                                        value: i,
                                        customColor: n,
                                        disabled: u
                                    })
                                }), (0, l.jsxs)("div", {
                                    className: h.presets,
                                    children: [C(_), C(I)]
                                })]
                            })
                        }
                    })
                })
            }
        },
        526975: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return u
                }
            });
            var l = s("37983"),
                n = s("884691"),
                r = s("266937"),
                o = s("286458"),
                a = s("29799");
            let i = (0, r.CustomPicker)(e => (0, l.jsxs)("div", {
                className: a.wrapper,
                children: [(0, l.jsx)("div", {
                    className: a.saturation,
                    children: (0, l.jsx)(o.Saturation, {
                        ...e
                    })
                }), (0, l.jsx)("div", {
                    className: a.hue,
                    children: (0, l.jsx)(o.Hue, {
                        ...e,
                        direction: "horizontal"
                    })
                })]
            }));
            var u = n.memo(i)
        },
        188525: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                CopyInputModes: function() {
                    return f
                },
                default: function() {
                    return C
                }
            }), s("222007");
            var l = s("37983"),
                n = s("884691"),
                r = s("414456"),
                o = s.n(r),
                a = s("77078"),
                i = s("474293"),
                u = s("145131"),
                c = s("782340"),
                d = s("863448");
            let f = {
                DEFAULT: "default",
                SUCCESS: "success",
                ERROR: "error"
            };
            class E extends n.PureComponent {
                select() {
                    var e;
                    null === (e = this.inputRef.current) || void 0 === e || e.select()
                }
                renderInput(e) {
                    var t;
                    let {
                        value: s,
                        mode: n
                    } = this.props, r = null === (t = this.context) || void 0 === t ? void 0 : t.titleId;
                    return (0, l.jsx)("input", {
                        className: o((0, i.getClass)(d, "input", n), {
                            [d.inputHidden]: e
                        }),
                        ref: this.inputRef,
                        type: "text",
                        value: s,
                        onClick: this.handleInputClick,
                        readOnly: !0,
                        "aria-labelledby": r
                    })
                }
                render() {
                    let e;
                    let {
                        text: t = c.default.Messages.COPY,
                        mode: s,
                        hideMessage: n,
                        className: r,
                        buttonLook: E
                    } = this.props, C = null != n;
                    switch (s) {
                        case f.SUCCESS:
                            e = a.ButtonColors.GREEN;
                            break;
                        case f.ERROR:
                            e = a.ButtonColors.RED;
                            break;
                        default:
                            e = this.props.buttonColor
                    }
                    return (0, l.jsx)(a.FocusRing, {
                        focusTarget: this.inputRef,
                        ringTarget: this.containerRef,
                        children: (0, l.jsx)("div", {
                            className: o((0, i.getClass)(d, "copyInput", s), r),
                            ref: this.containerRef,
                            children: (0, l.jsxs)(u.default, {
                                className: d.layout,
                                children: [(0, l.jsxs)(u.default, {
                                    className: d.inputWrapper,
                                    children: [this.renderInput(C), C ? (0, l.jsx)("div", {
                                        className: d.hiddenMessage,
                                        children: n
                                    }) : null]
                                }), (0, l.jsx)(u.default, {
                                    shrink: 1,
                                    grow: 0,
                                    style: {
                                        margin: 0
                                    },
                                    children: (0, l.jsx)(a.Button, {
                                        className: d.button,
                                        onClick: this.handleButtonClick,
                                        size: a.ButtonSizes.MIN,
                                        color: e,
                                        look: E,
                                        children: t
                                    })
                                })]
                            })
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this.inputRef = n.createRef(), this.containerRef = n.createRef(), this.handleButtonClick = () => {
                        this.select();
                        let {
                            onCopy: e,
                            value: t
                        } = this.props;
                        e(t)
                    }, this.handleInputClick = () => {
                        this.select()
                    }
                }
            }
            E.contextType = a.FormContext, E.defaultProps = {
                supportsCopy: !0,
                buttonColor: a.ButtonColors.PRIMARY,
                buttonLook: a.ButtonLooks.FILLED,
                mode: f.DEFAULT
            }, E.Modes = f, E.ButtonColors = a.ButtonColors, E.ButtonLooks = a.ButtonLooks;
            var C = E
        },
        430677: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return u
                }
            });
            var l = s("37983");
            s("884691");
            var n = s("414456"),
                r = s.n(n),
                o = s("839966"),
                a = s("274456"),
                i = s("193919");

            function u(e) {
                let {
                    Icon: t,
                    className: s
                } = e;
                return (0, l.jsx)("div", {
                    className: r(o.container, s),
                    children: (0, l.jsxs)("div", {
                        className: o.innerContainer,
                        children: [(0, l.jsx)("img", {
                            src: i,
                            alt: "",
                            className: o.star
                        }), (0, l.jsx)("div", {
                            className: o.iconWrapper,
                            children: (0, l.jsx)(t, {
                                width: 40,
                                height: 40
                            })
                        }), (0, l.jsx)("img", {
                            src: a,
                            alt: "",
                            className: o.sparkle
                        })]
                    })
                })
            }
        },
        912702: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return i
                }
            }), s("70102");
            var l = s("37983");
            s("884691");
            var n = s("394716"),
                r = s("216773"),
                o = s("507006"),
                a = s("49111");

            function i(e) {
                let {
                    tier: t,
                    ...s
                } = e;
                switch (t) {
                    case a.BoostedGuildTiers.TIER_1:
                        return (0, l.jsx)(n.default, {
                            ...s
                        });
                    case a.BoostedGuildTiers.TIER_2:
                        return (0, l.jsx)(r.default, {
                            ...s
                        });
                    case a.BoostedGuildTiers.TIER_3:
                        return (0, l.jsx)(o.default, {
                            ...s
                        });
                    case a.BoostedGuildTiers.NONE:
                        return null;
                    default:
                        throw Error("Not a valid tier type")
                }
            }
        },
        394716: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return a
                }
            });
            var l = s("37983");
            s("884691");
            var n = s("469563"),
                r = s("859670"),
                o = s("75196"),
                a = (0, n.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: s = 24,
                        color: n = "currentColor",
                        foreground: r,
                        ...a
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, o.default)(a),
                        width: t,
                        height: s,
                        viewBox: "0 0 32 32",
                        children: (0, l.jsx)("path", {
                            fill: n,
                            className: r,
                            d: "M16 1L7 10V22L16 31L25 22V10L16 1ZM20.62 11.27L16.5 7.16V2.91L23.62 10.03L20.62 11.27ZM12 19.93V12.07L16 8.07L20 12.07V19.93L16 23.93L12 19.93ZM15.5 7.16L11.38 11.28L8.38 10.04L15.5 2.91V7.16ZM11 12.2V19.8L8 21.04V10.96L11 12.2ZM11.38 20.73L15.5 24.85V29.09L8.38 21.97L11.38 20.73ZM16.5 24.84L20.62 20.72L23.62 21.96L16.5 29.09V24.84ZM21 19.8V12.2L24 10.96V21.05L21 19.8Z"
                        })
                    })
                }, r.BoostTier1Icon, void 0, {
                    size: 24
                })
        },
        216773: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return a
                }
            });
            var l = s("37983");
            s("884691");
            var n = s("469563"),
                r = s("372167"),
                o = s("75196"),
                a = (0, n.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: s = 24,
                        color: n = "currentColor",
                        foreground: r,
                        ...a
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, o.default)(a),
                        width: t,
                        height: s,
                        viewBox: "0 0 32 32",
                        children: (0, l.jsx)("path", {
                            fill: n,
                            className: r,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M16.5 1.46002L24.62 9.58002L20.62 11.23L16.5 7.12002V1.46002ZM11 12.16L7 10.5V21.42L11 19.76V12.16ZM16.5 24.8001V30.4601L24.62 22.3401L20.62 20.6801L16.5 24.8001ZM15.5 7.12004V1.46004L7.38 9.58004L11.38 11.23L15.5 7.12004ZM15.5 30.46L7.38 22.34L11.38 20.68L15.5 24.8V30.46ZM21 19.76L25 21.42V10.5L21 12.16V19.76ZM16 8.03003L20 12.03V19.89L16 23.89L12 19.89V12.03L16 8.03003Z"
                        })
                    })
                }, r.BoostTier2Icon, void 0, {
                    size: 24
                })
        },
        507006: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return a
                }
            });
            var l = s("37983");
            s("884691");
            var n = s("469563"),
                r = s("860942"),
                o = s("75196"),
                a = (0, n.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: s = 24,
                        color: n = "currentColor",
                        foreground: r,
                        ...a
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, o.default)(a),
                        width: t,
                        height: s,
                        viewBox: "0 0 32 32",
                        children: (0, l.jsx)("path", {
                            fill: n,
                            className: r,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M29 2C29 2.55 28.55 3 28 3C27.45 3 27 2.55 27 2V1C27 0.45 27.45 0 28 0C28.55 0 29 0.45 29 1V2ZM2.94 25.94L4 24L5.06 25.94L7 27L5.06 28.06L4 30L2.94 28.06L1 27L2.94 25.94ZM28 5C27.45 5 27 5.45 27 6V7C27 7.55 27.45 8 28 8C28.55 8 29 7.55 29 7V6C29 5.45 28.56 5 28 5ZM30 3H31C31.56 3 32 3.45 32 4C32 4.55 31.55 5 31 5H30C29.45 5 29 4.55 29 4C29 3.45 29.45 3 30 3ZM26 3H25C24.45 3 24 3.45 24 4C24 4.55 24.45 5 25 5H26C26.55 5 27 4.55 27 4C27 3.45 26.56 3 26 3ZM15.6201 1.46002V7.12002L11.5001 11.23L7.50012 9.58002L15.6201 1.46002ZM24.7401 9.58002L16.6201 1.46002V7.12002L20.7401 11.23L24.7401 9.58002ZM7.12012 10.5L11.1201 12.16V19.76L7.12012 21.42V10.5ZM16.6201 24.8V30.46L24.7401 22.34L20.7401 20.68L16.6201 24.8ZM15.6201 30.46L7.50012 22.34L11.5001 20.68L15.6201 24.8V30.46ZM21.1201 19.76L25.1201 21.42V10.5L21.1201 12.16V19.76ZM19.7301 11.64L20.1201 12.03V19.89L16.1201 23.89L12.1201 19.89V19.38L19.7301 11.64ZM12.1201 17.95L19.0201 10.93L18.2401 10.15L12.1201 16.38V17.95ZM17.5301 9.44002L12.1201 14.95V12.03L16.1201 8.03002L17.5301 9.44002Z"
                        })
                    })
                }, r.BoostTier3Icon, void 0, {
                    size: 24
                })
        },
        422403: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return o
                }
            });
            var l = s("37983");
            s("884691");
            var n = s("469563"),
                r = s("639055"),
                o = (0, n.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: s = 16,
                        color: n = "currentColor",
                        className: r,
                        foreground: o
                    } = e;
                    return (0, l.jsx)("svg", {
                        className: r,
                        width: t,
                        height: s,
                        viewBox: "0 0 16 16",
                        children: (0, l.jsxs)("g", {
                            fill: "none",
                            children: [(0, l.jsx)("path", {
                                d: "M-4-4h24v24H-4z"
                            }), (0, l.jsx)("path", {
                                className: o,
                                fill: n,
                                d: "M14.994 1.006C13.858-.257 11.904-.3 10.72.89L8.637 2.975l-.696-.697-1.387 1.388 5.557 5.557 1.387-1.388-.697-.697 1.964-1.964c1.13-1.13 1.3-2.985.23-4.168zm-13.25 10.25c-.225.224-.408.48-.55.764L.02 14.37l1.39 1.39 2.35-1.174c.283-.14.54-.33.765-.55l4.808-4.808-2.776-2.776-4.813 4.803z"
                            })]
                        })
                    })
                }, r.EyeDropperIcon, void 0, {
                    size: 16
                })
        },
        818643: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return a
                }
            });
            var l = s("37983");
            s("884691");
            var n = s("469563"),
                r = s("851298"),
                o = s("75196"),
                a = (0, n.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: s = 24,
                        color: n = "currentColor",
                        ...r
                    } = e;
                    return (0, l.jsxs)("svg", {
                        ...(0, o.default)(r),
                        width: t,
                        height: s,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: [(0, l.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M13.2899 2L6 2C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V10.7101C21.3663 10.8987 20.695 11 20 11C16.134 11 13 7.86599 13 4C13 3.30503 13.1013 2.63371 13.2899 2ZM8 6C9.1032 6 10 6.8952 10 8C10 9.1056 9.1032 10 8 10C6.8944 10 6 9.1056 6 8C6 6.8952 6.8944 6 8 6ZM6 18L9 14L11 16L15 11L18 18H6Z",
                            fill: n
                        }), (0, l.jsx)("path", {
                            d: "M21 0V3H24V5H21V8H19V5H16V3H19V0H21Z",
                            fill: n
                        })]
                    })
                }, r.ImagePlusIcon, void 0, {
                    size: 24
                })
        },
        468759: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return a
                }
            });
            var l = s("37983");
            s("884691");
            var n = s("469563"),
                r = s("833222"),
                o = s("75196"),
                a = (0, n.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: s = 24,
                        color: n = "currentColor",
                        className: r,
                        foreground: a,
                        ...i
                    } = e;
                    return (0, l.jsxs)("svg", {
                        ...(0, o.default)(i),
                        className: r,
                        width: t,
                        height: s,
                        viewBox: "0 0 24 24",
                        children: [(0, l.jsx)("path", {
                            d: "M0 0h24v24H0z",
                            fill: "none"
                        }), (0, l.jsx)("path", {
                            className: a,
                            fill: n,
                            d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20zm6.31-3.1L7.1 5.69C8.45 4.63 10.15 4 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z"
                        })]
                    })
                }, r.DenyIcon, void 0, {
                    size: 24
                })
        },
        62418: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                mapOptionToHighlightedRowOptions: function() {
                    return u
                },
                generateVerificationLevelOptions: function() {
                    return c
                },
                generateContentFilterHighlightedOptions: function() {
                    return d
                },
                generateDmSpamOptions: function() {
                    return f
                },
                generateExplicitImageOptions: function() {
                    return E
                }
            });
            var l = s("151426");
            s("854588");
            var n = s("669491"),
                r = s("797944"),
                o = s("49111"),
                a = s("568456"),
                i = s("782340");

            function u(e) {
                return e.map(e => ({
                    title: e.name,
                    description: e.desc,
                    highlightColor: function(e) {
                        switch (e) {
                            case C("PRIMARY_400"):
                                return r.HighlightColors.ACCENT;
                            case C("GREEN_360"):
                                return r.HighlightColors.GREEN;
                            case C("YELLOW_360"):
                                return r.HighlightColors.YELLOW;
                            case C("ORANGE_345"):
                                return r.HighlightColors.ORANGE;
                            case C("RED_400"):
                                return r.HighlightColors.RED;
                            default:
                                return r.HighlightColors.NONE
                        }
                    }(e.color),
                    value: e.value,
                    disabled: e.disabled
                }))
            }

            function c() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return [{
                    name: i.default.Messages.VERIFICATION_LEVEL_NONE,
                    desc: i.default.Messages.VERIFICATION_LEVEL_NONE_CRITERIA,
                    value: o.VerificationLevels.NONE,
                    disabled: e,
                    tooltipText: e ? i.default.Messages.TOOLTIP_COMMUNITY_FEATURE_DISABLED : null
                }, {
                    name: i.default.Messages.VERIFICATION_LEVEL_LOW,
                    desc: i.default.Messages.VERIFICATION_LEVEL_LOW_CRITERIA,
                    value: o.VerificationLevels.LOW,
                    color: t ? void 0 : C("GREEN_360")
                }, {
                    name: i.default.Messages.VERIFICATION_LEVEL_MEDIUM,
                    desc: i.default.Messages.VERIFICATION_LEVEL_MEDIUM_CRITERIA.format({
                        min: o.VerificationCriteria.ACCOUNT_AGE
                    }),
                    value: o.VerificationLevels.MEDIUM,
                    color: t ? void 0 : C("YELLOW_360")
                }, {
                    name: i.default.Messages.VERIFICATION_LEVEL_HIGH,
                    desc: i.default.Messages.VERIFICATION_LEVEL_HIGH_CRITERIA.format({
                        min: o.VerificationCriteria.MEMBER_AGE
                    }),
                    value: o.VerificationLevels.HIGH,
                    color: t ? void 0 : C("ORANGE_345")
                }, {
                    name: i.default.Messages.VERIFICATION_LEVEL_VERY_HIGH,
                    desc: i.default.Messages.VERIFICATION_LEVEL_VERY_HIGH_CRITERIA,
                    value: o.VerificationLevels.VERY_HIGH,
                    color: t ? void 0 : C("RED_400")
                }]
            }

            function d() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return [{
                    name: i.default.Messages.EXPLICIT_CONTENT_FILTER_HIGH_V2,
                    desc: i.default.Messages.EXPLICIT_CONTENT_FILTER_HIGH_DESCRIPTION_V2,
                    value: o.GuildExplicitContentFilterTypes.ALL_MEMBERS,
                    color: C("RED_400")
                }, {
                    name: i.default.Messages.EXPLICIT_CONTENT_FILTER_MEDIUM_V2,
                    desc: i.default.Messages.EXPLICIT_CONTENT_FILTER_MEDIUM_DESCRIPTION_V2,
                    value: o.GuildExplicitContentFilterTypes.MEMBERS_WITHOUT_ROLES,
                    disabled: e,
                    tooltipText: e ? i.default.Messages.TOOLTIP_COMMUNITY_FEATURE_DISABLED : null,
                    color: C("YELLOW_360")
                }, {
                    name: i.default.Messages.EXPLICIT_CONTENT_FILTER_DISABLED_V2,
                    desc: i.default.Messages.EXPLICIT_CONTENT_FILTER_DISABLED_DESCRIPTION_V2,
                    value: o.GuildExplicitContentFilterTypes.DISABLED,
                    disabled: e,
                    tooltipText: e ? i.default.Messages.TOOLTIP_COMMUNITY_FEATURE_DISABLED : null,
                    color: C("PRIMARY_400")
                }]
            }

            function f() {
                return [{
                    name: i.default.Messages.USER_DM_SPAM_FILTER_FRIENDS_AND_NON_FRIENDS,
                    desc: i.default.Messages.USER_DM_SPAM_FILTER_FRIENDS_AND_NON_FRIENDS_HELP,
                    value: l.DmSpamFilterV2.FRIENDS_AND_NON_FRIENDS,
                    color: C("GREEN_360")
                }, {
                    name: i.default.Messages.USER_DM_SPAM_FILTER_NON_FRIENDS,
                    desc: i.default.Messages.USER_DM_SPAM_FILTER_NON_FRIENDS_HELP,
                    value: l.DmSpamFilterV2.NON_FRIENDS,
                    color: C("YELLOW_360")
                }, {
                    name: i.default.Messages.USER_DM_SPAM_FILTER_DISABLED,
                    desc: i.default.Messages.USER_DM_SPAM_FILTER_DISABLED_HELP,
                    value: l.DmSpamFilterV2.DISABLED,
                    color: C("RED_400")
                }]
            }

            function E() {
                return [{
                    name: i.default.Messages.USER_EXPLICIT_CONTENT_FILTER_FRIENDS_AND_NON_FRIENDS_V2,
                    desc: i.default.Messages.USER_EXPLICIT_CONTENT_FILTER_FRIENDS_AND_NON_FRIENDS_HELP_V2,
                    value: a.ExplicitContentFilterTypes.FRIENDS_AND_NON_FRIENDS,
                    color: C("GREEN_360")
                }, {
                    name: i.default.Messages.USER_EXPLICIT_CONTENT_FILTER_NON_FRIENDS_V2,
                    desc: i.default.Messages.USER_EXPLICIT_CONTENT_FILTER_NON_FRIENDS_HELP_V2,
                    value: a.ExplicitContentFilterTypes.NON_FRIENDS,
                    color: C("YELLOW_360")
                }, {
                    name: i.default.Messages.USER_EXPLICIT_CONTENT_FILTER_DISABLED_V2,
                    desc: i.default.Messages.USER_EXPLICIT_CONTENT_FILTER_DISABLED_HELP_V2,
                    value: a.ExplicitContentFilterTypes.DISABLED,
                    color: C("RED_400")
                }]
            }

            function C(e) {
                return n.default.unsafe_rawColors[e].css
            }
        }
    }
]);