(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["40644"], {
        506264: function(t, e, n) {
            var r = n("626849").Symbol;
            t.exports = r
        },
        60297: function(t, e, n) {
            var r = n("506264"),
                i = n("754892"),
                u = n("19797"),
                a = r ? r.toStringTag : void 0;
            t.exports = function(t) {
                return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : a && a in Object(t) ? i(t) : u(t)
            }
        },
        306551: function(t, e, n) {
            var r = n("84927"),
                i = /^\s+/;
            t.exports = function(t) {
                return t ? t.slice(0, r(t) + 1).replace(i, "") : t
            }
        },
        571255: function(t, e, n) {
            var r = "object" == typeof n.g && n.g && n.g.Object === Object && n.g;
            t.exports = r
        },
        754892: function(t, e, n) {
            var r = n("506264"),
                i = Object.prototype,
                u = i.hasOwnProperty,
                a = i.toString,
                o = r ? r.toStringTag : void 0;
            t.exports = function(t) {
                var e = u.call(t, o),
                    n = t[o];
                try {
                    t[o] = void 0;
                    var r = !0
                } catch (t) {}
                var i = a.call(t);
                return r && (e ? t[o] = n : delete t[o]), i
            }
        },
        19797: function(t, e, n) {
            var r = Object.prototype.toString;
            t.exports = function(t) {
                return r.call(t)
            }
        },
        626849: function(t, e, n) {
            var r = n("571255"),
                i = "object" == typeof self && self && self.Object === Object && self,
                u = r || i || Function("return this")();
            t.exports = u
        },
        84927: function(t, e, n) {
            var r = /\s/;
            t.exports = function(t) {
                for (var e = t.length; e-- && r.test(t.charAt(e)););
                return e
            }
        },
        478098: function(t, e, n) {
            var r = n("952133"),
                i = n("645942"),
                u = n("261497"),
                a = Math.max,
                o = Math.min;
            t.exports = function(t, e, n) {
                var l, f, c, s, d, h, p = 0,
                    v = !1,
                    b = !1,
                    E = !0;
                if ("function" != typeof t) throw TypeError("Expected a function");

                function m(e) {
                    var n = l,
                        r = f;
                    return l = f = void 0, p = e, s = t.apply(r, n)
                }
                e = u(e) || 0, r(n) && (v = !!n.leading, c = (b = "maxWait" in n) ? a(u(n.maxWait) || 0, e) : c, E = "trailing" in n ? !!n.trailing : E);

                function S(t) {
                    var n = t - h,
                        r = t - p;
                    return void 0 === h || n >= e || n < 0 || b && r >= c
                }

                function O() {
                    var t, n, r, u, a = i();
                    if (S(a)) return y(a);
                    d = setTimeout(O, (n = (t = a) - h, r = t - p, u = e - n, b ? o(u, c - r) : u))
                }

                function y(t) {
                    return (d = void 0, E && l) ? m(t) : (l = f = void 0, s)
                }

                function P() {
                    var t, n = i(),
                        r = S(n);
                    if (l = arguments, f = this, h = n, r) {
                        if (void 0 === d) {
                            ;
                            return p = t = h, d = setTimeout(O, e), v ? m(t) : s
                        }
                        if (b) return clearTimeout(d), d = setTimeout(O, e), m(h)
                    }
                    return void 0 === d && (d = setTimeout(O, e)), s
                }
                return P.cancel = function() {
                    void 0 !== d && clearTimeout(d), p = 0, l = h = f = d = void 0
                }, P.flush = function() {
                    return void 0 === d ? s : y(i())
                }, P
            }
        },
        952133: function(t, e, n) {
            t.exports = function(t) {
                var e = typeof t;
                return null != t && ("object" == e || "function" == e)
            }
        },
        346173: function(t, e, n) {
            t.exports = function(t) {
                return null != t && "object" == typeof t
            }
        },
        501870: function(t, e, n) {
            var r = n("60297"),
                i = n("346173");
            t.exports = function(t) {
                return "symbol" == typeof t || i(t) && "[object Symbol]" == r(t)
            }
        },
        645942: function(t, e, n) {
            var r = n("626849");
            t.exports = function() {
                return r.Date.now()
            }
        },
        229042: function(t, e, n) {
            var r = n("478098"),
                i = n("952133");
            t.exports = function(t, e, n) {
                var u = !0,
                    a = !0;
                if ("function" != typeof t) throw TypeError("Expected a function");
                return i(n) && (u = "leading" in n ? !!n.leading : u, a = "trailing" in n ? !!n.trailing : a), r(t, e, {
                    leading: u,
                    maxWait: e,
                    trailing: a
                })
            }
        },
        261497: function(t, e, n) {
            var r = n("306551"),
                i = n("952133"),
                u = n("501870"),
                a = 0 / 0,
                o = /^[-+]0x[0-9a-f]+$/i,
                l = /^0b[01]+$/i,
                f = /^0o[0-7]+$/i,
                c = parseInt;
            t.exports = function(t) {
                if ("number" == typeof t) return t;
                if (u(t)) return a;
                if (i(t)) {
                    var e = "function" == typeof t.valueOf ? t.valueOf() : t;
                    t = i(e) ? e + "" : e
                }
                if ("string" != typeof t) return 0 === t ? t : +t;
                t = r(t);
                var n = l.test(t);
                return n || f.test(t) ? c(t.slice(2), n ? 2 : 8) : o.test(t) ? a : +t
            }
        },
        87657: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return o
                }
            });
            var r = n("37983"),
                i = n("884691"),
                u = n("77078"),
                a = n("390236"),
                o = i.memo(function(t) {
                    var e, n, o, l;
                    let {
                        user: f,
                        size: c = u.AvatarSizes.SIZE_32,
                        animate: s = !1,
                        "aria-hidden": d = !1,
                        ...h
                    } = t, p = i.useContext(a.default);
                    return (0, r.jsx)(u.Avatar, {
                        src: (e = f, n = (0, u.getAvatarSize)(c), o = s, l = p, e.getAvatarURL(l, n, o)),
                        size: c,
                        "aria-label": d ? void 0 : f.username,
                        "aria-hidden": d,
                        ...h
                    })
                })
        },
        405314: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                STANDARD_ONE_TIME_PAYMENT_STEPS: function() {
                    return s
                },
                default: function() {
                    return d
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("812204"),
                u = n("685665"),
                a = n("642906"),
                o = n("385179"),
                l = n("292215"),
                f = n("843455");

            function c(t) {
                let {
                    onClose: e,
                    onComplete: n,
                    transitionState: i,
                    loadId: l,
                    applicationId: f,
                    skuId: c
                } = t, {} = (0, a.usePaymentContext)(), {
                    analyticsLocations: s
                } = (0, u.default)();
                return (0, r.jsx)(o.PaymentModal, {
                    onClose: e,
                    onComplete: n,
                    loadId: l,
                    applicationId: f,
                    skuId: c,
                    initialPlanId: null,
                    analyticsLocations: s,
                    transitionState: i
                })
            }
            let s = [l.ONE_TIME_PAYMENT_PREDICATE_STEP_CONFIG, l.ONE_TIME_PAYMENT_ADD_PAYMENT_STEP_CONFIG, ...l.SHARED_STEP_CONFIGS, l.REVIEW_STEP_CONFIG, l.ONE_TIME_PAYMENT_CONFIRM_STEP_CONFIG];

            function d(t) {
                let {
                    applicationId: e,
                    skuId: n,
                    analyticsLocations: o
                } = t, {
                    AnalyticsLocationProvider: l
                } = (0, u.default)(o, i.default.PREMIUM_PAYMENT_MODAL);
                return (0, r.jsx)(l, {
                    children: (0, r.jsx)(a.PaymentContextProvider, {
                        stepConfigs: s,
                        applicationId: e,
                        skuIDs: [n],
                        activeSubscription: null,
                        purchaseType: f.PurchaseTypes.ONE_TIME,
                        children: (0, r.jsx)(c, {
                            ...t
                        })
                    })
                })
            }
        },
        210721: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                AnimationState: function() {
                    return i
                },
                getGiftAnimationData: function() {
                    return h
                },
                sendGiftMessage: function() {
                    return p
                }
            });
            var r, i, u = n("627445"),
                a = n.n(u),
                o = n("450911"),
                l = n("819689"),
                f = n("884351"),
                c = n("42203"),
                s = n("659632"),
                d = n("78345");
            (r = i || (i = {})).ACTION = "action", r.LOOP = "loop", r.IDLE = "idle";
            let h = (t, e) => {
                    let r;
                    switch (t) {
                        case d.PremiumGiftStyles.SNOWGLOBE:
                            r = () => n.el("452661").then(n.t.bind(n, "452661", 19)).then(t => {
                                let {
                                    default: e
                                } = t;
                                return e
                            });
                            break;
                        case d.PremiumGiftStyles.BOX:
                            r = () => n.el("726871").then(n.t.bind(n, "726871", 19)).then(t => {
                                let {
                                    default: e
                                } = t;
                                return e
                            });
                            break;
                        case d.PremiumGiftStyles.CUP:
                            r = () => n.el("544929").then(n.t.bind(n, "544929", 19)).then(t => {
                                let {
                                    default: e
                                } = t;
                                return e
                            });
                            break;
                        case d.PremiumGiftStyles.STANDARD_BOX:
                            switch (e) {
                                case i.IDLE:
                                    r = () => n.el("973372").then(n.t.bind(n, "973372", 19)).then(t => {
                                        let {
                                            default: e
                                        } = t;
                                        return e
                                    });
                                    break;
                                case i.LOOP:
                                    r = () => n.el("353540").then(n.t.bind(n, "353540", 19)).then(t => {
                                        let {
                                            default: e
                                        } = t;
                                        return e
                                    });
                                    break;
                                default:
                                    r = () => n.el("303473").then(n.t.bind(n, "303473", 19)).then(t => {
                                        let {
                                            default: e
                                        } = t;
                                        return e
                                    })
                            }
                            break;
                        case d.PremiumGiftStyles.CAKE:
                            switch (e) {
                                case i.IDLE:
                                    r = () => n.el("127891").then(n.t.bind(n, "127891", 19)).then(t => {
                                        let {
                                            default: e
                                        } = t;
                                        return e
                                    });
                                    break;
                                case i.LOOP:
                                    r = () => n.el("953820").then(n.t.bind(n, "953820", 19)).then(t => {
                                        let {
                                            default: e
                                        } = t;
                                        return e
                                    });
                                    break;
                                default:
                                    r = () => n.el("311972").then(n.t.bind(n, "311972", 19)).then(t => {
                                        let {
                                            default: e
                                        } = t;
                                        return e
                                    })
                            }
                            break;
                        case d.PremiumGiftStyles.CHEST:
                            switch (e) {
                                case i.IDLE:
                                    r = () => n.el("269055").then(n.t.bind(n, "269055", 19)).then(t => {
                                        let {
                                            default: e
                                        } = t;
                                        return e
                                    });
                                    break;
                                case i.LOOP:
                                    r = () => n.el("120467").then(n.t.bind(n, "120467", 19)).then(t => {
                                        let {
                                            default: e
                                        } = t;
                                        return e
                                    });
                                    break;
                                default:
                                    r = () => n.el("451680").then(n.t.bind(n, "451680", 19)).then(t => {
                                        let {
                                            default: e
                                        } = t;
                                        return e
                                    })
                            }
                            break;
                        case d.PremiumGiftStyles.COFFEE:
                            switch (e) {
                                case i.IDLE:
                                    r = () => n.el("863089").then(n.t.bind(n, "863089", 19)).then(t => {
                                        let {
                                            default: e
                                        } = t;
                                        return e
                                    });
                                    break;
                                case i.LOOP:
                                    r = () => n.el("949233").then(n.t.bind(n, "949233", 19)).then(t => {
                                        let {
                                            default: e
                                        } = t;
                                        return e
                                    });
                                    break;
                                default:
                                    r = () => n.el("361896").then(n.t.bind(n, "361896", 19)).then(t => {
                                        let {
                                            default: e
                                        } = t;
                                        return e
                                    })
                            }
                            break;
                        default:
                            r = () => Promise.resolve("Error: Invalid giftStyle")
                    }
                    return r
                },
                p = async (t, e) => {
                    if (null == e) throw Error("giftCode must be defined");
                    if (null == t) throw Error("Recipient must be defined");
                    let n = await o.default.openPrivateChannel(t.id).then(t => {
                            let e = c.default.getChannel(t);
                            if (a(null != e, "PrivateChannel is null"), null == e) throw Error("Channel must be defined");
                            return e
                        }),
                        r = (0, s.getGiftCodeURL)(e);
                    return l.default.sendMessage(n.id, f.default.parse(n, r), void 0, {
                        isGiftLinkSentOnBehalfOfUser: !0
                    })
                }
        },
        65324: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return c
                }
            });
            var r = n("37983"),
                i = n("884691"),
                u = n("446674"),
                a = n("206230"),
                o = n("491605"),
                l = n("210721"),
                f = n("78345");

            function c(t) {
                let {
                    giftStyle: e,
                    className: n,
                    shouldAnimate: c = !0,
                    defaultAnimationState: s,
                    idleAnimationState: d
                } = t, h = (0, u.useStateFromStores)([a.default], () => a.default.useReducedMotion), [p, v] = i.useState(s), b = i.useRef((0, l.getGiftAnimationData)(e, p)), [E, m] = i.useState(null == d), [S, O] = i.useState(!1), [y, P] = i.useState(-1), g = () => {
                    b.current = (0, l.getGiftAnimationData)(e, p), P(t => t + 1)
                }, T = () => {
                    m(!1), O(!0), P(-1), v(s)
                };
                i.useEffect(() => {
                    null == d && v(s)
                }, [d, s]), i.useEffect(() => {
                    if (null != d && y >= 0) {
                        T();
                        return
                    }
                    g()
                }, [e, d]), i.useEffect(() => {
                    (!S || null == d) && g()
                }, [p]), i.useEffect(() => {
                    S && (m(null == d), O(!1), g())
                }, [S]);
                if (!f.PremiumGiftStyles.hasOwnProperty(e)) throw Error("Unexpected giftStyle ".concat(e));
                return (0, r.jsx)(o.default, {
                    importData: b.current,
                    shouldAnimate: !h && c,
                    className: n,
                    versionKey: y,
                    onComplete: null != d ? () => {
                        null != d && (v(d), m(!0))
                    } : void 0,
                    loop: E
                })
            }
        }
    }
]);