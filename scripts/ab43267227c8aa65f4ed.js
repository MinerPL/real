(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["64198"], {
        185782: function(e, t, n) {
            "use strict";
            e.exports = n.p + "140ec8f5d02da1e5195c.svg"
        },
        112679: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                updateStripePaymentRequest: function() {
                    return l
                },
                updateCardInfo: function() {
                    return s
                },
                clearCardInfo: function() {
                    return r
                },
                updateAddressInfo: function() {
                    return a
                },
                clearError: function() {
                    return o
                }
            });
            var i = n("913144");

            function l(e) {
                i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_STRIPE_PAYMENT_REQUEST_UPDATE",
                    stripePaymentMethod: e
                })
            }

            function s(e, t) {
                i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: e,
                    isValid: t
                })
            }

            function r() {
                i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: {
                        name: ""
                    },
                    isValid: !1
                })
            }

            function a(e, t) {
                i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_ADDRESS_INFO_UPDATE",
                    info: e,
                    isValid: t
                })
            }

            function o() {
                i.default.wait(() => i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CLEAR_ERROR"
                }))
            }
        },
        55689: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                clearPurchaseTokenAuthState: function() {
                    return l
                }
            });
            var i = n("913144");

            function l() {
                i.default.dispatch({
                    type: "BILLING_PURCHASE_TOKEN_AUTH_CLEAR_STATE"
                })
            }
        },
        304580: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return v
                }
            });
            var i, l, s = n("37983");
            n("884691");
            var r = n("414456"),
                a = n.n(r),
                o = n("394846"),
                c = n("77078"),
                u = n("945330"),
                d = n("381546"),
                h = n("782340"),
                f = n("955892");
            (i = l || (l = {})).DEFAULT = "", i.BOLD = "Bold", i.SOLID = "Solid";
            let p = e => {
                let {
                    closeAction: t,
                    variant: n,
                    keybind: i,
                    className: l
                } = e;
                return (0, s.jsxs)("div", {
                    className: a(f.container, l),
                    children: [(0, s.jsx)(c.Clickable, {
                        className: a(f.closeButton, {
                            [f.closeButtonBold]: "Bold" === n,
                            [f.closeButtonSolid]: "Solid" === n
                        }),
                        onClick: t,
                        "aria-label": h.default.Messages.CLOSE,
                        children: "Solid" === n ? (0, s.jsx)(d.default, {
                            width: 24,
                            height: 24,
                            "aria-hidden": !0
                        }) : (0, s.jsx)(u.default, {
                            width: 18,
                            height: 18,
                            "aria-hidden": !0
                        })
                    }), o.isMobile ? null : (0, s.jsx)("div", {
                        className: a(f.keybind),
                        "aria-hidden": !0,
                        children: i
                    })]
                })
            };
            p.defaultProps = {
                variant: ""
            }, p.Variants = l;
            var v = p
        },
        80300: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                backgroundImagePreloader: function() {
                    return u
                }
            }), n("424973");
            var i = n("37983"),
                l = n("884691"),
                s = n("310013"),
                r = n.n(s),
                a = n("407063");
            let o = /url\(['"](.*)['"]\)/,
                c = e => {
                    if (null == e || "" === e || "none" === e) return null;
                    let t = e.match(o);
                    return null != t ? t[1] : e
                };

            function u(e) {
                class t extends l.Component {
                    componentDidUpdate(e, t) {
                        if (t === this.state) return;
                        let {
                            cached: n,
                            loaded: i
                        } = this.state, {
                            style: l
                        } = this.props, s = null != l ? c(l.backgroundImage) : null;
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
                        this.canceller && this.canceller(), this.canceller = (0, a.loadImage)(e, t => {
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
                            ...l
                        } = this.props, {
                            loaded: s,
                            cached: r
                        } = this.state;
                        if (!s && null != t) {
                            var a;
                            t = {
                                ...t,
                                backgroundImage: null == (a = r) || "" === a || "none" === a ? "none" : "url(".concat(a, ")")
                            }
                        }
                        return (0, i.jsx)(e, {
                            style: t,
                            ...l
                        })
                    }
                    constructor(e) {
                        super(e), this.cachedURLs = [], this.canceller = null;
                        let {
                            style: t
                        } = e, n = null != t ? c(t.backgroundImage) : null;
                        this.cachedURLs = [n], this.state = {
                            cached: n,
                            loaded: !0
                        }
                    }
                }
                return r(t, e), t
            }
        },
        505088: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CircleXIcon: function() {
                    return r
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("669491"),
                s = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    secondaryColor: r = "transparent",
                    secondaryColorClass: a = "",
                    color: o = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: c = "",
                    ...u
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, s.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, i.jsx)("circle", {
                        cx: "12",
                        cy: "12",
                        r: "10",
                        fill: "string" == typeof r ? r : r.css,
                        className: a
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        fillRule: "evenodd",
                        d: "M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11Zm4.707-15.707a1 1 0 0 0-1.414 0L12 10.586 8.707 7.293a1 1 0 0 0-1.414 1.414L10.586 12l-3.293 3.293a1 1 0 1 0 1.414 1.414L12 13.414l3.293 3.293a1 1 0 0 0 1.414-1.414L13.414 12l3.293-3.293a1 1 0 0 0 0-1.414Z",
                        clipRule: "evenodd",
                        className: c
                    })]
                })
            }
        },
        666031: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GifIcon: function() {
                    return r
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("669491"),
                s = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...o
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, s.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm2.18 13.87c-.625 0-1.178-.162-1.66-.485-.482-.324-.855-.777-1.121-1.359C4.133 13.437 4 12.762 4 12c0-.755.14-1.423.42-2.005.288-.583.701-1.039 1.24-1.37.546-.33 1.197-.495 1.951-.495.64 0 1.211.136 1.714.41.51.272.895.657 1.154 1.153l-1.218.873c-.367-.676-.913-1.013-1.639-1.013-.661 0-1.168.215-1.52.646-.352.425-.528 1.025-.528 1.8 0 .784.176 1.388.528 1.812.352.424.859.636 1.52.636.295 0 .564-.054.809-.162.251-.115.445-.27.582-.463v-.927H7.299v-1.402h3.245v4.226H9.272l-.205-.712c-.424.575-1.053.863-1.887.863Zm6.34-.151h-1.574V8.28h1.574v7.438Zm1.51 0h1.574v-2.824h2.76v-1.423h-2.76V9.704H20V8.28h-4.97v7.438Z",
                        clipRule: "evenodd",
                        className: a
                    })
                })
            }
        },
        998460: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GiftIcon: function() {
                    return r
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("669491"),
                s = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...o
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, s.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, i.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        fillRule: "evenodd",
                        d: "M4 6a4 4 0 0 1 4-4h.089A4.089 4.089 0 0 1 12 4.898 4.089 4.089 0 0 1 15.912 2H16a4 4 0 0 1 3.465 6H20a2 2 0 0 1 2 2v1.5a.5.5 0 0 1-.5.5h-19a.5.5 0 0 1-.5-.5V10a2 2 0 0 1 2-2h.535A3.982 3.982 0 0 1 4 6Zm12 2a2 2 0 1 0 0-4h-.088c-.959 0-1.794.652-2.027 1.582L13.281 8H16Zm-5.885-2.418L10.719 8H8a2 2 0 1 1 0-4h.089c.958 0 1.793.652 2.026 1.582Z",
                        clipRule: "evenodd",
                        className: a
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "M3 20a2 2 0 0 0 2 2h5.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5V20ZM13.5 22a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5V20a2 2 0 0 1-2 2h-5.5Z",
                        className: a
                    })]
                })
            }
        },
        424823: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PlusSmallIcon: function() {
                    return r
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("669491"),
                s = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...o
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, s.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "M13 6a1 1 0 1 0-2 0v5H6a1 1 0 1 0 0 2h5v5a1 1 0 1 0 2 0v-5h5a1 1 0 1 0 0-2h-5V6Z",
                        className: a
                    })
                })
            }
        },
        125094: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ScreenArrowIcon: function() {
                    return r
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("669491"),
                s = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...o
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, s.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, i.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        fillRule: "evenodd",
                        d: "M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5Zm16 3a1 1 0 0 0-.293-.707l-3-3a1 1 0 1 0-1.414 1.414L14.586 7H13a6 6 0 0 0-6 6 1 1 0 1 0 2 0 4 4 0 0 1 4-4h1.586l-1.293 1.293a1 1 0 0 0 1.414 1.414l3-3A1 1 0 0 0 18 8Z",
                        clipRule: "evenodd",
                        className: a
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "M13 19.5a.5.5 0 0 0 .5.5H15a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h1.5a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v2Z",
                        className: a
                    })]
                })
            }
        },
        287083: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                StageIcon: function() {
                    return r
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("669491"),
                s = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...o
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, s.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, i.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "M19.615 18.25c-.335-.364-.35-.914-.079-1.328a9 9 0 1 0-15.072 0c.27.414.256.964-.079 1.328l-.019.02c-.407.442-1.113.428-1.452-.068A10.949 10.949 0 0 1 1 12C1 5.925 5.925 1 12 1s11 4.925 11 11c0 2.3-.706 4.436-1.914 6.202-.339.496-1.045.51-1.452.068l-.02-.02Z",
                        className: a
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "M16.83 15.233c.428.463 1.176.42 1.454-.145a7 7 0 1 0-12.568 0c.278.565 1.026.608 1.454.145l.054-.06c.304-.329.342-.817.168-1.23a5 5 0 1 1 9.216 0c-.174.413-.136.901.168 1.23l.054.06Z",
                        className: a
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.331 20.03c-.252.725.12 1.5.808 1.84A10.955 10.955 0 0 0 12 23c1.745 0 3.395-.406 4.861-1.13.69-.34 1.06-1.115.808-1.84a6.003 6.003 0 0 0-11.338 0Z",
                        className: a
                    })]
                })
            }
        },
        390300: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                VoiceNormalIcon: function() {
                    return r
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("669491"),
                s = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...o
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, s.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, i.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "M12 3a1 1 0 0 0-1-1h-.06a1 1 0 0 0-.737.324L5.917 7H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2.917l4.286 4.676a1 1 0 0 0 .737.324H11a1 1 0 0 0 1-1V3ZM15.1 20.754c-.58.138-1.1-.33-1.1-.926v-.032c0-.497.369-.912.849-1.043a7.003 7.003 0 0 0 0-13.506C14.369 5.116 14 4.7 14 4.204v-.032c0-.596.52-1.064 1.1-.926a9.004 9.004 0 0 1 0 17.508Z",
                        className: a
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "M15.157 16.512c-.57.273-1.157-.203-1.157-.835v-.14c0-.424.277-.789.633-1.02A2.997 2.997 0 0 0 16 12a2.997 2.997 0 0 0-1.367-2.517c-.356-.231-.633-.596-.633-1.02v-.14c0-.632.587-1.108 1.157-.835a5 5 0 0 1 0 9.024Z",
                        className: a
                    })]
                })
            }
        },
        252744: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            }), n("222007");
            var i = n("884691");

            function l(e) {
                let [t, n] = (0, i.useState)(!1), l = (0, i.useRef)(e.current);
                return (0, i.useEffect)(() => {
                    l.current = e.current
                }, [e]), (0, i.useEffect)(() => {
                    let e = l.current;
                    if (null == e) return;
                    let t = () => n(!0),
                        i = () => n(!1);
                    return e.addEventListener("mouseenter", t), e.addEventListener("mouseleave", i), () => {
                        e.removeEventListener("mouseenter", t), e.removeEventListener("mouseleave", i)
                    }
                }, [l]), t
            }
        },
        526887: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ConfettiCannonContext: function() {
                    return u
                },
                ConfettiCannonContextProvider: function() {
                    return d
                }
            });
            var i = n("37983"),
                l = n("884691"),
                s = n("516555"),
                r = n("65597"),
                a = n("206230"),
                o = n("49111");
            let c = {
                    confettiCanvas: null,
                    cannon: null,
                    createConfetti: () => void 0,
                    createConfettiAt: () => void 0,
                    createMultipleConfetti: () => [],
                    createMultipleConfettiAt: () => [],
                    addClickListener: () => o.NOOP,
                    removeClickListener: o.NOOP
                },
                u = l.createContext(c);

            function d(e) {
                let {
                    children: t,
                    confettiCanvas: n,
                    spriteCanvas: o,
                    baseConfig: d,
                    addClickListener: h,
                    removeClickListener: f
                } = e, p = (0, s.useConfettiCannon)(n, o), v = (0, r.default)([a.default], () => a.default.useReducedMotion), C = l.useMemo(() => v ? c : {
                    confettiCanvas: n,
                    cannon: p,
                    createConfetti: (e, t) => p.createConfetti({
                        ...d,
                        ...e
                    }, t),
                    createConfettiAt: (e, t, n, i) => p.createConfetti({
                        ...d,
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
                        return p.createMultipleConfetti({
                            ...d,
                            ...e
                        }, t, n)
                    },
                    createMultipleConfettiAt: function(e, t, n) {
                        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 20,
                            l = arguments.length > 4 ? arguments[4] : void 0;
                        return p.createMultipleConfetti({
                            ...d,
                            position: {
                                type: "static",
                                value: {
                                    x: e,
                                    y: t
                                }
                            },
                            ...n
                        }, i, l)
                    },
                    addClickListener: h,
                    removeClickListener: f
                }, [h, d, p, n, v, f]);
                return (0, i.jsx)(u.Provider, {
                    value: C,
                    children: t
                })
            }
        },
        649844: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("748820"),
                s = n("77078"),
                r = n("112679"),
                a = n("55689"),
                o = n("855133"),
                c = n("599110"),
                u = n("659500"),
                d = n("49111"),
                h = n("646718");

            function f(e) {
                let {
                    initialPlanId: t,
                    followupSKUInfo: f,
                    onClose: p,
                    onComplete: v,
                    onSubscriptionConfirmation: C,
                    analyticsLocations: E,
                    analyticsObject: _,
                    analyticsLocation: m,
                    analyticsSourceLocation: I,
                    isGift: g = !1,
                    giftMessage: M,
                    subscriptionTier: L,
                    trialId: S,
                    postSuccessGuild: A,
                    openInvoiceId: T,
                    applicationId: R,
                    referralTrialOfferId: x,
                    giftRecipient: N,
                    returnRef: y
                } = null != e ? e : {}, O = !1, b = (0, l.v4)();
                (0, s.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("646139").then(n.bind(n, "646139"));
                    return n => {
                        let {
                            onClose: l,
                            ...s
                        } = n;
                        return (0, i.jsx)(e, {
                            ...s,
                            loadId: b,
                            subscriptionTier: L,
                            skuId: L,
                            isGift: g,
                            giftMessage: M,
                            giftRecipient: N,
                            initialPlanId: t,
                            followupSKUInfo: f,
                            onClose: e => {
                                l(), null == p || p(e), e && (null == C || C())
                            },
                            onComplete: () => {
                                O = !0, null == v || v(), !g && ((0, o.setIsPersistentHelperHidden)(!0), (0, o.setCanPlayWowMoment)(!0))
                            },
                            onSubscriptionConfirmation: C,
                            analyticsLocations: E,
                            analyticsObject: _,
                            analyticsLocation: m,
                            analyticsSourceLocation: I,
                            trialId: S,
                            postSuccessGuild: A,
                            planGroup: h.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                            openInvoiceId: T,
                            applicationId: R,
                            referralTrialOfferId: x,
                            returnRef: y
                        })
                    }
                }, {
                    modalKey: "payment-modal",
                    onCloseCallback: () => {
                        !O && c.default.track(d.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
                            load_id: b,
                            payment_type: d.PurchaseTypeToAnalyticsPaymentType[d.PurchaseTypes.SUBSCRIPTION],
                            location: null != m ? m : _,
                            source: I,
                            subscription_type: d.SubscriptionTypes.PREMIUM,
                            is_gift: g,
                            eligible_for_trial: null != S,
                            application_id: R,
                            location_stack: E
                        }), (0, r.clearError)(), (0, a.clearPurchaseTokenAuthState)(), null == p || p(O), O && (!g && u.ComponentDispatch.dispatch(d.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED), null == C || C())
                    },
                    onCloseRequest: d.NOOP
                })
            }
        },
        855133: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                togglePersistentHelper: function() {
                    return l
                },
                setHasCompletedStep: function() {
                    return s
                },
                resetPremiumTutorialStore: function() {
                    return r
                },
                setCanPlayWowMoment: function() {
                    return a
                },
                setIsPersistentHelperHidden: function() {
                    return o
                },
                setNavigatedFromHelper: function() {
                    return c
                }
            });
            var i = n("913144");
            let l = () => {
                    i.default.dispatch({
                        type: "PREMIUM_TUTORIAL_PERSISTENT_ONBOARDING_TOGGLE_COLLAPSE"
                    })
                },
                s = () => {
                    i.default.dispatch({
                        type: "SET_HAS_COMPLETED_STEP"
                    })
                },
                r = () => {
                    i.default.dispatch({
                        type: "RESET_PREMIUM_TUTORIAL_STORE"
                    })
                },
                a = e => {
                    i.default.dispatch({
                        type: "PREMIUM_TUTORIAL_SET_CAN_PLAY_WOW_MOMENT",
                        value: e
                    })
                },
                o = e => {
                    i.default.dispatch({
                        type: "PREMIUM_TUTORIAL_PERSISTENT_SET_IS_HIDDEN",
                        value: e
                    })
                },
                c = e => {
                    i.default.dispatch({
                        type: "PREMIUM_TUTORIAL_SET_NAVIGATED_FROM_HELPER",
                        value: e
                    })
                }
        },
        374278: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("77078"),
                s = n("95039"),
                r = n("305961"),
                a = n("957255"),
                o = n("145131"),
                c = n("181114"),
                u = n("599110"),
                d = n("488464"),
                h = n("998716"),
                f = n("923510"),
                p = n("49111"),
                v = n("646718"),
                C = n("782340"),
                E = n("400237");

            function _(e) {
                var t;
                let n, {
                        channel: _,
                        transitionState: m,
                        onClose: I
                    } = e,
                    g = r.default.getGuild(_.guild_id),
                    M = null !== (t = null == g ? void 0 : g.maxStageVideoChannelUsers) && void 0 !== t ? t : 0,
                    L = !!(null == g ? void 0 : g.isCommunity()),
                    S = C.default.Messages.STAGE_FULL_TITLE,
                    A = L ? M < p.MAX_STAGE_VIDEO_USER_LIMIT_UNCAPPED : (null == g ? void 0 : g.premiumTier) !== p.BoostedGuildTiers.TIER_3 && M <= p.MAX_STAGE_VIDEO_USER_LIMIT_TIER2,
                    T = a.default.can(f.MODERATE_STAGE_CHANNEL_PERMISSIONS, _);
                n = L && (null == g ? void 0 : g.premiumTier) === p.BoostedGuildTiers.TIER_3 ? M <= p.MAX_STAGE_VIDEO_USER_LIMIT_UNCAPPED ? C.default.Messages.STAGE_FULL_BOOST_MORE_BODY : C.default.Messages.STAGE_FULL_MAX_BODY : A ? C.default.Messages.STAGE_FULL_BODY : C.default.Messages.STAGE_FULL_MAX_BODY;
                let R = () => {
                        I(), u.default.track(p.AnalyticEvents.BOOSTING_UPSELL_CLICKED, {
                            guild_id: _.guild_id,
                            type: v.PremiumUpsellTypes.VIDEO_STAGE_LIMIT,
                            is_moderator: T,
                            action: v.BoostingUpsellAction.DISMISS
                        })
                    },
                    x = d.default.getMutableParticipants(_.id, h.StageChannelParticipantNamedIndex.SPEAKER),
                    N = x.filter(e => e.type === h.StageChannelParticipantTypes.VOICE),
                    y = N.length,
                    O = d.default.getParticipantCount(_.id, h.StageChannelParticipantNamedIndex.AUDIENCE);
                return u.default.track(p.AnalyticEvents.BOOSTING_UPSELL_VIEWED, {
                    guild_id: _.guild_id,
                    type: v.PremiumUpsellTypes.VIDEO_STAGE_LIMIT,
                    is_moderator: T,
                    listener_count: y + O
                }), (0, i.jsxs)(l.ModalRoot, {
                    size: l.ModalSize.SMALL,
                    transitionState: m,
                    "aria-label": S,
                    children: [(0, i.jsxs)(l.ModalHeader, {
                        justify: o.default.Justify.END,
                        separator: !1,
                        className: E.header,
                        children: [(0, i.jsx)("div", {
                            className: E.fullArt
                        }), (0, i.jsx)(l.ModalCloseButton, {
                            onClick: I
                        })]
                    }), (0, i.jsxs)(l.ModalContent, {
                        className: E.content,
                        children: [(0, i.jsx)(l.Heading, {
                            variant: "heading-xl/bold",
                            children: S
                        }), (0, i.jsx)(l.Text, {
                            variant: "text-md/medium",
                            children: n
                        })]
                    }), (0, i.jsx)(l.ModalFooter, {
                        className: E.footer,
                        children: A ? (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)(l.Button, {
                                look: l.ButtonLooks.LINK,
                                className: E.noThanksButton,
                                color: l.ButtonColors.CUSTOM,
                                size: l.ButtonSizes.SMALL,
                                onClick: R,
                                children: C.default.Messages.NO_THANKS
                            }), (0, i.jsx)(c.default, {
                                onClick: () => {
                                    I(), (0, s.openGuildBoostingMarketingModal)({
                                        guildId: _.guild_id,
                                        location: {
                                            section: p.AnalyticsSections.STAGE_VIDEO_LIMIT
                                        }
                                    }), u.default.track(p.AnalyticEvents.BOOSTING_UPSELL_CLICKED, {
                                        guild_id: _.guild_id,
                                        type: v.PremiumUpsellTypes.VIDEO_STAGE_LIMIT,
                                        is_moderator: T,
                                        action: v.BoostingUpsellAction.BOOST
                                    })
                                },
                                size: l.ButtonSizes.SMALL,
                                className: E.boostButton,
                                children: C.default.Messages.PREMIUM_GUILD_SUBSCRIPTION
                            })]
                        }) : (0, i.jsx)(l.Button, {
                            onClick: R,
                            size: l.ButtonSizes.SMALL,
                            color: l.ButtonColors.CUSTOM,
                            className: E.boostButton,
                            children: C.default.Messages.GOT_IT
                        })
                    })]
                })
            }
        },
        931138: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("37983"),
                l = n("884691"),
                s = n("414456"),
                r = n.n(s),
                a = n("77078"),
                o = n("760607"),
                c = n("89976");

            function u(e) {
                let {
                    children: t,
                    size: n = 16,
                    className: s,
                    flowerStarClassName: u,
                    ...d
                } = e, h = l.Children.only(t), f = (0, a.useRedesignIconContext)().enabled;
                return (0, i.jsxs)("div", {
                    className: r(c.flowerStarContainer, s),
                    style: {
                        width: n,
                        height: n
                    },
                    children: [(0, i.jsx)(o.default, {
                        ...d,
                        className: r(u, c.flowerStar)
                    }), (0, i.jsx)("div", {
                        className: r(c.childContainer, {
                            [c.redesignIconChildContainer]: f
                        }),
                        children: h
                    })]
                })
            }
        },
        476263: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return L
                }
            });
            var i = n("37983"),
                l = n("884691"),
                s = n("414456"),
                r = n.n(s),
                a = n("90915"),
                o = n("446674"),
                c = n("669491"),
                u = n("77078"),
                d = n("80300"),
                h = n("471671"),
                f = n("103603"),
                p = n("474293"),
                v = n("580357"),
                C = n("491088");
            let E = {
                    SMOL: "Smol",
                    MINI: "Mini",
                    SMALLER: "Smaller",
                    SMALL: "Small",
                    MEDIUM: "Medium",
                    LARGE: "Large",
                    LARGER: "Larger",
                    XLARGE: "XLarge"
                },
                _ = {
                    [E.SMOL]: 16,
                    [E.MINI]: 20,
                    [E.SMALLER]: 24,
                    [E.SMALL]: 30,
                    [E.MEDIUM]: 40,
                    [E.LARGE]: 50,
                    [E.LARGER]: 64,
                    [E.XLARGE]: 100
                },
                m = {
                    [E.SMOL]: [10, 10, 8, 6, 6, 4],
                    [E.MINI]: [12, 12, 10, 10, 8, 6, 4],
                    [E.SMALLER]: [13, 13, 11, 11, 9, 7, 5],
                    [E.SMALL]: [14, 14, 12, 12, 10, 8, 6],
                    [E.MEDIUM]: [16, 16, 14, 14, 12, 10, 8],
                    [E.LARGE]: [18, 18, 16, 16, 14, 12, 10],
                    [E.LARGER]: [19, 19, 17, 17, 15, 13, 11],
                    [E.XLARGE]: [20, 20, 18, 18, 16, 14, 12]
                };
            class I extends l.PureComponent {
                renderAcronym() {
                    let {
                        guild: e,
                        iconSrc: t
                    } = this.props;
                    return null != e.icon || null != t ? null : (0, i.jsx)("div", {
                        className: C.acronym,
                        children: e.acronym
                    })
                }
                renderBadge() {
                    let {
                        showBadge: e,
                        guild: t,
                        badgeStrokeColor: n
                    } = this.props;
                    return e && null != t.hasFeature ? (0, i.jsx)(v.default, {
                        className: C.guildIconBadge,
                        guild: t,
                        badgeStrokeColor: n
                    }) : null
                }
                renderIcon() {
                    var e, t;
                    let {
                        guild: n,
                        className: l,
                        showBadge: s,
                        active: a,
                        size: o,
                        style: c = {},
                        textScale: d,
                        showTooltip: h,
                        tooltipPosition: f,
                        onClick: v,
                        to: E,
                        badgeStrokeColor: _,
                        animate: I,
                        tabIndex: g,
                        iconSrc: M,
                        "aria-hidden": L,
                        ...S
                    } = this.props, A = m[o], T = null != v ? u.Clickable : "div";
                    return (0, i.jsxs)(T, {
                        className: r(C.icon, l, (0, p.getClass)(C, "iconSize", o), {
                            [null !== (e = (0, p.getClass)(C, "iconActive", o)) && void 0 !== e ? e : ""]: a,
                            [C.iconInactive]: !a,
                            [C.noIcon]: null == n.icon
                        }),
                        "aria-hidden": L,
                        style: null == n.icon ? {
                            fontSize: (null !== (t = A[n.acronym.length]) && void 0 !== t ? t : A[A.length - 1]) * d,
                            ...c
                        } : c,
                        onClick: null != E || null == v ? void 0 : v,
                        tabIndex: g,
                        ...S,
                        children: [this.renderAcronym(), this.renderBadge()]
                    })
                }
                renderTooltip() {
                    let {
                        guild: e,
                        showTooltip: t,
                        tooltipPosition: n
                    } = this.props;
                    return t ? (0, i.jsx)(u.Tooltip, {
                        text: e.name,
                        position: n,
                        "aria-label": !1,
                        children: e => l.cloneElement(l.Children.only(this.renderIcon()), {
                            ...e
                        })
                    }) : this.renderIcon()
                }
                render() {
                    let {
                        to: e,
                        guild: t,
                        source: n,
                        tabIndex: l,
                        "aria-hidden": s
                    } = this.props;
                    return null != e ? (0, i.jsx)(a.Link, {
                        "aria-hidden": s,
                        to: {
                            pathname: e,
                            state: null != n ? {
                                analyticsSource: n
                            } : null
                        },
                        "aria-label": t.toString(),
                        tabIndex: l,
                        children: this.renderTooltip()
                    }) : this.renderTooltip()
                }
            }
            let g = o.default.connectStores([h.default], e => {
                let {
                    guild: t,
                    animate: n,
                    iconSrc: i,
                    style: l,
                    size: s
                } = e;
                return {
                    style: {
                        ...l,
                        backgroundImage: (0, f.makeCssUrlString)(null != i ? i : t.getIconURL(_[s], n && h.default.isFocused()))
                    }
                }
            })((0, d.backgroundImagePreloader)(e => (0, i.jsx)(I, {
                ...e
            })));
            class M extends l.PureComponent {
                render() {
                    return (0, i.jsx)(g, {
                        ...this.props
                    })
                }
            }
            M.Sizes = E, M.defaultProps = {
                size: E.LARGE,
                textScale: 1,
                showBadge: !1,
                showTooltip: !1,
                active: !1,
                tooltipPosition: "top",
                badgeStrokeColor: c.default.unsafe_rawColors.WHITE_500.css,
                animate: !1
            };
            var L = M
        },
        181114: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Shine: function() {
                    return C
                },
                default: function() {
                    return _
                }
            });
            var i, l, s = n("37983"),
                r = n("884691"),
                a = n("414456"),
                o = n.n(a),
                c = n("458960"),
                u = n("77078"),
                d = n("252744"),
                h = n("145131"),
                f = n("396792");
            (i = l || (l = {})).DEFAULT = "default", i.SMALL = "small";
            let p = {
                    default: f.shineDefault,
                    small: f.shineSmall
                },
                v = {
                    default: f.shineInnerDefault,
                    small: f.shineInnerSmall
                };
            class C extends r.PureComponent {
                render() {
                    let {
                        className: e,
                        shineSize: t,
                        shinePaused: n,
                        ...i
                    } = this.props;
                    return (0, s.jsx)(c.default.div, {
                        ...i,
                        className: o(f.shineContainer, e, {
                            [f.shinePaused]: n
                        }),
                        children: (0, s.jsx)(h.default, {
                            align: h.default.Align.CENTER,
                            justify: h.default.Justify.CENTER,
                            className: p[t],
                            children: (0, s.jsx)("div", {
                                className: v[t]
                            })
                        })
                    })
                }
            }
            C.defaultProps = {
                shineSize: "default"
            };
            let E = e => {
                let {
                    children: t,
                    className: n,
                    disabled: i,
                    submitting: l,
                    pauseAnimation: a,
                    shineSize: c = "default",
                    shinePaused: h,
                    buttonShineClassName: p,
                    onlyShineOnHover: v,
                    ...E
                } = e, _ = r.createRef(), m = (0, d.default)(_), I = !i && !l && !0 !== a && (!v || m);
                return (0, s.jsxs)(u.Button, {
                    buttonRef: _,
                    ...E,
                    className: o(f.shinyButton, n),
                    disabled: i,
                    submitting: l,
                    children: [t, I ? (0, s.jsx)(C, {
                        shinePaused: h,
                        className: o(f.buttonShine, v ? f.onlyShineOnHover : void 0, p),
                        shineSize: c
                    }) : null]
                })
            };
            E.ShineSizes = l;
            var _ = E
        },
        381546: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("469563"),
                s = n("505088"),
                r = n("75196"),
                a = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: l = "currentColor",
                        foreground: s,
                        backgroundColor: a,
                        ...o
                    } = e;
                    return (0, i.jsxs)("svg", {
                        ...(0, r.default)(o),
                        width: t,
                        height: n,
                        viewBox: "0 0 14 14",
                        children: [null != a ? (0, i.jsx)("circle", {
                            r: 5,
                            cx: 7,
                            cy: 7,
                            fill: a
                        }) : null, (0, i.jsx)("path", {
                            fill: l,
                            className: s,
                            d: "M7.02799 0.333252C3.346 0.333252 0.361328 3.31792 0.361328 6.99992C0.361328 10.6819 3.346 13.6666 7.02799 13.6666C10.71 13.6666 13.6947 10.6819 13.6947 6.99992C13.6947 3.31792 10.7093 0.333252 7.02799 0.333252ZM10.166 9.19525L9.22333 10.1379L7.02799 7.94325L4.83266 10.1379L3.89 9.19525L6.08466 6.99992L3.88933 4.80459L4.832 3.86259L7.02733 6.05792L9.22266 3.86259L10.1653 4.80459L7.97066 6.99992L10.166 9.19525Z"
                        })]
                    })
                }, s.CircleXIcon, void 0, {
                    size: 24
                })
        },
        760607: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("75196"),
                s = function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: s = "currentColor",
                        foreground: r,
                        ...a
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, l.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 16 15.2",
                        children: (0, i.jsx)("path", {
                            className: r,
                            fill: s,
                            fillRule: "evenodd",
                            d: "m16 7.6c0 .79-1.28 1.38-1.52 2.09s.44 2 0 2.59-1.84.35-2.46.8-.79 1.84-1.54 2.09-1.67-.8-2.47-.8-1.75 1-2.47.8-.92-1.64-1.54-2.09-2-.18-2.46-.8.23-1.84 0-2.59-1.54-1.3-1.54-2.09 1.28-1.38 1.52-2.09-.44-2 0-2.59 1.85-.35 2.48-.8.78-1.84 1.53-2.12 1.67.83 2.47.83 1.75-1 2.47-.8.91 1.64 1.53 2.09 2 .18 2.46.8-.23 1.84 0 2.59 1.54 1.3 1.54 2.09z"
                        })
                    })
                }
        },
        978679: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("469563"),
                s = n("998460"),
                r = n("75196"),
                a = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: l = "currentColor",
                        foreground: s,
                        ...a
                    } = e;
                    return (0, i.jsx)("svg", {
                        width: t,
                        height: n,
                        ...(0, r.default)(a),
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            fill: l,
                            className: s,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M16.886 7.999H20C21.104 7.999 22 8.896 22 9.999V11.999H2V9.999C2 8.896 2.897 7.999 4 7.999H7.114C6.663 7.764 6.236 7.477 5.879 7.121C4.709 5.951 4.709 4.048 5.879 2.879C7.012 1.746 8.986 1.746 10.121 2.877C11.758 4.514 11.979 7.595 11.998 7.941C11.9991 7.9525 11.9966 7.96279 11.9941 7.97304C11.992 7.98151 11.99 7.98995 11.99 7.999H12.01C12.01 7.98986 12.0079 7.98134 12.0058 7.97287C12.0034 7.96282 12.0009 7.95286 12.002 7.942C12.022 7.596 12.242 4.515 13.879 2.878C15.014 1.745 16.986 1.746 18.121 2.877C19.29 4.049 19.29 5.952 18.121 7.121C17.764 7.477 17.337 7.764 16.886 7.999ZM7.293 5.707C6.903 5.316 6.903 4.682 7.293 4.292C7.481 4.103 7.732 4 8 4C8.268 4 8.519 4.103 8.707 4.292C9.297 4.882 9.641 5.94 9.825 6.822C8.945 6.639 7.879 6.293 7.293 5.707ZM14.174 6.824C14.359 5.941 14.702 4.883 15.293 4.293C15.481 4.103 15.732 4 16 4C16.268 4 16.519 4.103 16.706 4.291C17.096 4.682 17.097 5.316 16.707 5.707C16.116 6.298 15.057 6.642 14.174 6.824ZM3 13.999V19.999C3 21.102 3.897 21.999 5 21.999H11V13.999H3ZM13 13.999V21.999H19C20.104 21.999 21 21.102 21 19.999V13.999H13Z"
                        })
                    })
                }, s.GiftIcon, void 0, {
                    size: 24
                })
        },
        151185: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("469563"),
                s = n("424823"),
                r = n("75196"),
                a = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: l = "currentColor",
                        foreground: s,
                        ...a
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, r.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            fill: l,
                            className: s,
                            d: "M20 11.1111H12.8889V4H11.1111V11.1111H4V12.8889H11.1111V20H12.8889V12.8889H20V11.1111Z"
                        })
                    })
                }, s.PlusSmallIcon, void 0, {
                    size: 24
                })
        },
        368121: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("469563"),
                s = n("390300"),
                r = n("75196"),
                a = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: l = "currentColor",
                        foreground: s,
                        ...a
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, r.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            className: s,
                            fill: l,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M11.383 3.07904C11.009 2.92504 10.579 3.01004 10.293 3.29604L6 8.00204H3C2.45 8.00204 2 8.45304 2 9.00204V15.002C2 15.552 2.45 16.002 3 16.002H6L10.293 20.71C10.579 20.996 11.009 21.082 11.383 20.927C11.757 20.772 12 20.407 12 20.002V4.00204C12 3.59904 11.757 3.23204 11.383 3.07904ZM14 5.00195V7.00195C16.757 7.00195 19 9.24595 19 12.002C19 14.759 16.757 17.002 14 17.002V19.002C17.86 19.002 21 15.863 21 12.002C21 8.14295 17.86 5.00195 14 5.00195ZM14 9.00195C15.654 9.00195 17 10.349 17 12.002C17 13.657 15.654 15.002 14 15.002V13.002C14.551 13.002 15 12.553 15 12.002C15 11.451 14.551 11.002 14 11.002V9.00195Z",
                            "aria-hidden": !0
                        })
                    })
                }, s.VoiceNormalIcon, void 0, {
                    size: 24
                })
        },
        228427: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("469563"),
                s = n("287083"),
                r = n("75196"),
                a = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 32,
                        height: n = 32,
                        color: l = "currentColor",
                        ...s
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, r.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: (0, i.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 13C14 14.1 13.1 15 12 15C10.9 15 10 14.1 10 13C10 11.9 10.9 11 12 11C13.1 11 14 11.9 14 13ZM8.5 20V19.5C8.5 17.8 9.94 16.5 12 16.5C14.06 16.5 15.5 17.8 15.5 19.5V20H8.5ZM7 13C7 10.24 9.24 8 12 8C14.76 8 17 10.24 17 13C17 13.91 16.74 14.75 16.31 15.49L17.62 16.25C18.17 15.29 18.5 14.19 18.5 13C18.5 9.42 15.58 6.5 12 6.5C8.42 6.5 5.5 9.42 5.5 13C5.5 14.18 5.82 15.29 6.38 16.25L7.69 15.49C7.26 14.75 7 13.91 7 13ZM2.5 13C2.5 7.75 6.75 3.5 12 3.5C17.25 3.5 21.5 7.75 21.5 13C21.5 14.73 21.03 16.35 20.22 17.75L21.51 18.5C22.45 16.88 23 15 23 13C23 6.93 18.07 2 12 2C5.93 2 1 6.93 1 13C1 15 1.55 16.88 2.48 18.49L3.77 17.74C2.97 16.35 2.5 14.73 2.5 13Z",
                            fill: l
                        })
                    })
                }, s.StageIcon, void 0, {
                    size: 32
                })
        },
        474293: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getClass: function() {
                    return l
                }
            }), n("808653");
            var i = n("159885");

            function l(e, t) {
                for (var n = arguments.length, l = Array(n > 2 ? n - 2 : 0), s = 2; s < n; s++) l[s - 2] = arguments[s];
                let r = l.reduce((e, t) => e + (0, i.upperCaseFirstChar)(t), ""),
                    a = "".concat(t).concat(r),
                    o = e[a];
                if (null != o) return o
            }
        },
        157590: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            }), n("222007");
            var i, l = n("817736"),
                s = n("118810");
            let r = {
                root: null,
                rootMargin: "0px",
                threshold: .5
            };
            i = class {
                isVisible(e) {
                    return null == this._observer || this._visibleComponents.has(e)
                }
                observe(e) {
                    let t = this._observer;
                    if (null == t) return;
                    this.unobserve(e);
                    let n = (0, l.findDOMNode)(e);
                    (0, s.isElement)(n, HTMLElement) && (this._nodes.set(n, e), this._components.set(e, n), t.observe(n))
                }
                unobserve(e) {
                    let t = this._observer;
                    if (null == t) return;
                    let n = this._components.get(e);
                    null != n && (this._nodes.delete(n), this._components.delete(e), this._visibleComponents.delete(e), t.unobserve(n))
                }
                constructor(e = r) {
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
                    return u
                }
            }), n("222007"), n("70102");
            var i = n("884691"),
                l = n("748820"),
                s = n("157590");
            let r = (0, l.v4)(),
                a = new Map,
                o = new Map;
            class c extends i.Component {
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
                        t = o.get(e);
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
                    t ? a.has(t) ? this.elementId = a.get(t) || "" : a.set(t, (0, l.v4)()) : this.elementId = r;
                    let c = this.getVisibilityObserverId();
                    !o.has(c) && o.set(c, new s.default({
                        root: t,
                        rootMargin: n,
                        threshold: i
                    }))
                }
            }
            c.defaultProps = {
                active: !0,
                children: i.createElement("span"),
                root: null,
                rootMargin: "0px 0px 0px 0px",
                threshold: [0, Number.MIN_VALUE]
            };
            var u = c
        },
        290381: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                VisibilityObserver: function() {
                    return i.default
                },
                VisibilitySensor: function() {
                    return l.default
                }
            }), n("6268");
            var i = n("157590"),
                l = n("235855")
        }
    }
]);