(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["40644"], {
        506264: function(e, t, n) {
            var r = n("626849").Symbol;
            e.exports = r
        },
        60297: function(e, t, n) {
            var r = n("506264"),
                i = n("754892"),
                a = n("19797"),
                u = r ? r.toStringTag : void 0;
            e.exports = function(e) {
                return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : u && u in Object(e) ? i(e) : a(e)
            }
        },
        306551: function(e, t, n) {
            var r = n("84927"),
                i = /^\s+/;
            e.exports = function(e) {
                return e ? e.slice(0, r(e) + 1).replace(i, "") : e
            }
        },
        571255: function(e, t, n) {
            var r = "object" == typeof n.g && n.g && n.g.Object === Object && n.g;
            e.exports = r
        },
        754892: function(e, t, n) {
            var r = n("506264"),
                i = Object.prototype,
                a = i.hasOwnProperty,
                u = i.toString,
                l = r ? r.toStringTag : void 0;
            e.exports = function(e) {
                var t = a.call(e, l),
                    n = e[l];
                try {
                    e[l] = void 0;
                    var r = !0
                } catch (e) {}
                var i = u.call(e);
                return r && (t ? e[l] = n : delete e[l]), i
            }
        },
        19797: function(e, t, n) {
            var r = Object.prototype.toString;
            e.exports = function(e) {
                return r.call(e)
            }
        },
        626849: function(e, t, n) {
            var r = n("571255"),
                i = "object" == typeof self && self && self.Object === Object && self,
                a = r || i || Function("return this")();
            e.exports = a
        },
        84927: function(e, t, n) {
            var r = /\s/;
            e.exports = function(e) {
                for (var t = e.length; t-- && r.test(e.charAt(t)););
                return t
            }
        },
        478098: function(e, t, n) {
            var r = n("952133"),
                i = n("645942"),
                a = n("261497"),
                u = Math.max,
                l = Math.min;
            e.exports = function(e, t, n) {
                var o, s, f, c, d, p, E = 0,
                    S = !1,
                    m = !1,
                    h = !0;
                if ("function" != typeof e) throw TypeError("Expected a function");

                function P(t) {
                    var n = o,
                        r = s;
                    return o = s = void 0, E = t, c = e.apply(r, n)
                }
                t = a(t) || 0, r(n) && (S = !!n.leading, f = (m = "maxWait" in n) ? u(a(n.maxWait) || 0, t) : f, h = "trailing" in n ? !!n.trailing : h);

                function v(e) {
                    var n = e - p,
                        r = e - E;
                    return void 0 === p || n >= t || n < 0 || m && r >= f
                }

                function T() {
                    var e, n, r, a, u = i();
                    if (v(u)) return _(u);
                    d = setTimeout(T, (n = (e = u) - p, r = e - E, a = t - n, m ? l(a, f - r) : a))
                }

                function _(e) {
                    return (d = void 0, h && o) ? P(e) : (o = s = void 0, c)
                }

                function O() {
                    var e, n = i(),
                        r = v(n);
                    if (o = arguments, s = this, p = n, r) {
                        if (void 0 === d) {
                            ;
                            return E = e = p, d = setTimeout(T, t), S ? P(e) : c
                        }
                        if (m) return clearTimeout(d), d = setTimeout(T, t), P(p)
                    }
                    return void 0 === d && (d = setTimeout(T, t)), c
                }
                return O.cancel = function() {
                    void 0 !== d && clearTimeout(d), E = 0, o = p = s = d = void 0
                }, O.flush = function() {
                    return void 0 === d ? c : _(i())
                }, O
            }
        },
        952133: function(e, t, n) {
            e.exports = function(e) {
                var t = typeof e;
                return null != e && ("object" == t || "function" == t)
            }
        },
        346173: function(e, t, n) {
            e.exports = function(e) {
                return null != e && "object" == typeof e
            }
        },
        501870: function(e, t, n) {
            var r = n("60297"),
                i = n("346173");
            e.exports = function(e) {
                return "symbol" == typeof e || i(e) && "[object Symbol]" == r(e)
            }
        },
        645942: function(e, t, n) {
            var r = n("626849");
            e.exports = function() {
                return r.Date.now()
            }
        },
        229042: function(e, t, n) {
            var r = n("478098"),
                i = n("952133");
            e.exports = function(e, t, n) {
                var a = !0,
                    u = !0;
                if ("function" != typeof e) throw TypeError("Expected a function");
                return i(n) && (a = "leading" in n ? !!n.leading : a, u = "trailing" in n ? !!n.trailing : u), r(e, t, {
                    leading: a,
                    maxWait: t,
                    trailing: u
                })
            }
        },
        261497: function(e, t, n) {
            var r = n("306551"),
                i = n("952133"),
                a = n("501870"),
                u = 0 / 0,
                l = /^[-+]0x[0-9a-f]+$/i,
                o = /^0b[01]+$/i,
                s = /^0o[0-7]+$/i,
                f = parseInt;
            e.exports = function(e) {
                if ("number" == typeof e) return e;
                if (a(e)) return u;
                if (i(e)) {
                    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                    e = i(t) ? t + "" : t
                }
                if ("string" != typeof e) return 0 === e ? e : +e;
                e = r(e);
                var n = o.test(e);
                return n || s.test(e) ? f(e.slice(2), n ? 2 : 8) : l.test(e) ? u : +e
            }
        },
        87657: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("37983"),
                i = n("884691"),
                a = n("77078"),
                u = n("390236"),
                l = i.memo(function(e) {
                    var t, n, l, o;
                    let {
                        user: s,
                        size: f = a.AvatarSizes.SIZE_32,
                        animate: c = !1,
                        "aria-hidden": d = !1,
                        ...p
                    } = e, E = i.useContext(u.default);
                    return (0, r.jsx)(a.Avatar, {
                        src: (t = s, n = (0, a.getAvatarSize)(f), l = c, o = E, t.getAvatarURL(o, n, l)),
                        size: f,
                        "aria-label": d ? void 0 : s.username,
                        "aria-hidden": d,
                        ...p
                    })
                })
        },
        7127: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PaymentModalConfirmStep: function() {
                    return d
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("627445"),
                a = n.n(i),
                u = n("77078"),
                l = n("642906"),
                o = n("367767"),
                s = n("650484"),
                f = n("782340"),
                c = n("966425");

            function d(e) {
                let {
                    handleClose: t
                } = e, {
                    skusById: n,
                    selectedSkuId: i,
                    application: d
                } = (0, l.usePaymentContext)();
                a(null != i, "Expected selectedSkuId"), a(null != d, "Expected application");
                let p = n[i];
                a(null != p, "Expected sku");
                let E = f.default.Messages.APPLICATION_ADDON_PURCHASE_CONFIRMATION_BLURB.format({
                    applicationName: d.name,
                    itemName: p.name
                });
                return (0, r.jsxs)(s.PaymentPortalBody, {
                    children: [(0, r.jsx)(o.default, {}), (0, r.jsxs)("div", {
                        className: c.confirmation,
                        children: [(0, r.jsx)(u.Heading, {
                            variant: "heading-xxl/bold",
                            className: c.confirmationHeader,
                            children: "Success!"
                        }), (0, r.jsx)(u.Text, {
                            variant: "text-md/normal",
                            children: E
                        }), (0, r.jsx)("div", {
                            className: c.divider
                        }), (0, r.jsx)(u.Button, {
                            onClick: t,
                            children: f.default.Messages.CLOSE
                        })]
                    })]
                })
            }
        },
        292215: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ONE_TIME_PAYMENT_PREDICATE_STEP_CONFIG: function() {
                    return d
                },
                ONE_TIME_PAYMENT_ADD_PAYMENT_STEP_CONFIG: function() {
                    return p
                },
                REVIEW_STEP_CONFIG: function() {
                    return m
                },
                ONE_TIME_PAYMENT_CONFIRM_STEP_CONFIG: function() {
                    return h
                },
                SHARED_STEP_CONFIGS: function() {
                    return P
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("357957"),
                a = n("85336"),
                u = n("262683"),
                l = n("946359"),
                o = n("724269"),
                s = n("7127"),
                f = n("99836"),
                c = n("217796");
            let d = {
                    key: null,
                    renderStep: e => (0, r.jsx)(c.OneTimePaymentPredicateStep, {
                        ...e
                    })
                },
                p = {
                    key: a.Step.ADD_PAYMENT_STEPS,
                    renderStep: e => (0, r.jsx)(r.Fragment, {
                        children: (0, r.jsx)(u.PaymentModalAddPaymentStep, {
                            ...e,
                            breadcrumbSteps: [a.Step.ADD_PAYMENT_STEPS, a.Step.REVIEW, a.Step.CONFIRM],
                            onReturn: () => {
                                let t = i.default.paymentSources;
                                0 === Object.keys(t).length ? e.handleClose() : e.handleStepChange(a.Step.REVIEW, {
                                    trackedFromStep: a.Step.ADD_PAYMENT_STEPS
                                })
                            }
                        })
                    }),
                    options: {
                        renderHeader: !0
                    }
                },
                E = {
                    key: a.Step.AWAITING_PURCHASE_TOKEN_AUTH,
                    renderStep: () => (0, r.jsx)(o.default, {})
                },
                S = {
                    key: a.Step.AWAITING_AUTHENTICATION,
                    renderStep: () => (0, r.jsx)(l.default, {})
                },
                m = {
                    key: a.Step.REVIEW,
                    renderStep: e => (0, r.jsx)(f.PaymentModalReviewStep, {
                        ...e
                    })
                },
                h = {
                    key: a.Step.CONFIRM,
                    renderStep: e => (0, r.jsx)(s.PaymentModalConfirmStep, {
                        ...e
                    })
                },
                P = [E, S]
        },
        217796: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                OneTimePaymentPredicateStep: function() {
                    return s
                }
            });
            var r = n("37983"),
                i = n("884691"),
                a = n("245187"),
                u = n("642906"),
                l = n("85336"),
                o = n("628738");

            function s(e) {
                let {
                    handleStepChange: t,
                    handleClose: n
                } = e, {
                    blockedPayments: s,
                    hasFetchedSkus: f,
                    paymentSources: c,
                    hasFetchedPaymentSources: d,
                    application: p
                } = (0, u.usePaymentContext)(), [E, S] = i.useState(!0);
                return (i.useEffect(() => {
                    let e = null != p;
                    f && d && e && S(!1)
                }, [f, d, p]), i.useEffect(() => {
                    !E && !s && (0 === Object.keys(c).length ? t(l.Step.ADD_PAYMENT_STEPS) : t(l.Step.REVIEW))
                }, [E, s, t, c]), E) ? (0, r.jsx)(o.default, {}) : s ? (0, r.jsx)(a.BlockedPaymentsContentModal, {
                    onClose: n
                }) : null
            }
        },
        405314: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                STANDARD_ONE_TIME_PAYMENT_STEPS: function() {
                    return c
                },
                default: function() {
                    return d
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("812204"),
                a = n("685665"),
                u = n("642906"),
                l = n("385179"),
                o = n("292215"),
                s = n("843455");

            function f(e) {
                let {
                    onClose: t,
                    onComplete: n,
                    transitionState: i,
                    loadId: o,
                    applicationId: s,
                    skuId: f
                } = e, {} = (0, u.usePaymentContext)(), {
                    analyticsLocations: c
                } = (0, a.default)();
                return (0, r.jsx)(l.PaymentModal, {
                    onClose: t,
                    onComplete: n,
                    loadId: o,
                    applicationId: s,
                    skuId: f,
                    initialPlanId: null,
                    analyticsLocations: c,
                    transitionState: i
                })
            }
            let c = [o.ONE_TIME_PAYMENT_PREDICATE_STEP_CONFIG, o.ONE_TIME_PAYMENT_ADD_PAYMENT_STEP_CONFIG, ...o.SHARED_STEP_CONFIGS, o.REVIEW_STEP_CONFIG, o.ONE_TIME_PAYMENT_CONFIRM_STEP_CONFIG];

            function d(e) {
                let {
                    applicationId: t,
                    skuId: n,
                    analyticsLocations: l
                } = e, {
                    AnalyticsLocationProvider: o
                } = (0, a.default)(l, i.default.PREMIUM_PAYMENT_MODAL);
                return (0, r.jsx)(o, {
                    children: (0, r.jsx)(u.PaymentContextProvider, {
                        stepConfigs: c,
                        applicationId: t,
                        skuIDs: [n],
                        activeSubscription: null,
                        purchaseType: s.PurchaseTypes.ONE_TIME,
                        children: (0, r.jsx)(f, {
                            ...e
                        })
                    })
                })
            }
        },
        210721: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AnimationState: function() {
                    return i
                },
                getGiftAnimationData: function() {
                    return p
                },
                sendGiftMessage: function() {
                    return E
                }
            });
            var r, i, a = n("627445"),
                u = n.n(a),
                l = n("450911"),
                o = n("819689"),
                s = n("884351"),
                f = n("42203"),
                c = n("659632"),
                d = n("78345");
            (r = i || (i = {})).ACTION = "action", r.LOOP = "loop", r.IDLE = "idle";
            let p = (e, t) => {
                    let r;
                    switch (e) {
                        case d.PremiumGiftStyles.SNOWGLOBE:
                            r = () => n.el("452661").then(n.t.bind(n, "452661", 19)).then(e => {
                                let {
                                    default: t
                                } = e;
                                return t
                            });
                            break;
                        case d.PremiumGiftStyles.BOX:
                            r = () => n.el("726871").then(n.t.bind(n, "726871", 19)).then(e => {
                                let {
                                    default: t
                                } = e;
                                return t
                            });
                            break;
                        case d.PremiumGiftStyles.CUP:
                            r = () => n.el("544929").then(n.t.bind(n, "544929", 19)).then(e => {
                                let {
                                    default: t
                                } = e;
                                return t
                            });
                            break;
                        case d.PremiumGiftStyles.STANDARD_BOX:
                            switch (t) {
                                case i.IDLE:
                                    r = () => n.el("973372").then(n.t.bind(n, "973372", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                case i.LOOP:
                                    r = () => n.el("353540").then(n.t.bind(n, "353540", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                default:
                                    r = () => n.el("303473").then(n.t.bind(n, "303473", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    })
                            }
                            break;
                        case d.PremiumGiftStyles.CAKE:
                            switch (t) {
                                case i.IDLE:
                                    r = () => n.el("127891").then(n.t.bind(n, "127891", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                case i.LOOP:
                                    r = () => n.el("953820").then(n.t.bind(n, "953820", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                default:
                                    r = () => n.el("311972").then(n.t.bind(n, "311972", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    })
                            }
                            break;
                        case d.PremiumGiftStyles.CHEST:
                            switch (t) {
                                case i.IDLE:
                                    r = () => n.el("269055").then(n.t.bind(n, "269055", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                case i.LOOP:
                                    r = () => n.el("120467").then(n.t.bind(n, "120467", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                default:
                                    r = () => n.el("451680").then(n.t.bind(n, "451680", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    })
                            }
                            break;
                        case d.PremiumGiftStyles.COFFEE:
                            switch (t) {
                                case i.IDLE:
                                    r = () => n.el("863089").then(n.t.bind(n, "863089", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                case i.LOOP:
                                    r = () => n.el("949233").then(n.t.bind(n, "949233", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                default:
                                    r = () => n.el("361896").then(n.t.bind(n, "361896", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    })
                            }
                            break;
                        default:
                            r = () => Promise.resolve("Error: Invalid giftStyle")
                    }
                    return r
                },
                E = async (e, t) => {
                    if (null == t) throw Error("giftCode must be defined");
                    if (null == e) throw Error("Recipient must be defined");
                    let n = await l.default.openPrivateChannel(e.id).then(e => {
                            let t = f.default.getChannel(e);
                            if (u(null != t, "PrivateChannel is null"), null == t) throw Error("Channel must be defined");
                            return t
                        }),
                        r = (0, c.getGiftCodeURL)(t);
                    return o.default.sendMessage(n.id, s.default.parse(n, r), void 0, {
                        isGiftLinkSentOnBehalfOfUser: !0
                    })
                }
        },
        65324: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var r = n("37983"),
                i = n("884691"),
                a = n("446674"),
                u = n("206230"),
                l = n("491605"),
                o = n("210721"),
                s = n("78345");

            function f(e) {
                let {
                    giftStyle: t,
                    className: n,
                    shouldAnimate: f = !0,
                    defaultAnimationState: c,
                    idleAnimationState: d
                } = e, p = (0, a.useStateFromStores)([u.default], () => u.default.useReducedMotion), [E, S] = i.useState(c), m = i.useRef((0, o.getGiftAnimationData)(t, E)), [h, P] = i.useState(null == d), [v, T] = i.useState(!1), [_, O] = i.useState(-1), b = () => {
                    m.current = (0, o.getGiftAnimationData)(t, E), O(e => e + 1)
                }, y = () => {
                    P(!1), T(!0), O(-1), S(c)
                };
                i.useEffect(() => {
                    null == d && S(c)
                }, [d, c]), i.useEffect(() => {
                    if (null != d && _ >= 0) {
                        y();
                        return
                    }
                    b()
                }, [t, d]), i.useEffect(() => {
                    (!v || null == d) && b()
                }, [E]), i.useEffect(() => {
                    v && (P(null == d), T(!1), b())
                }, [v]);
                if (!s.PremiumGiftStyles.hasOwnProperty(t)) throw Error("Unexpected giftStyle ".concat(t));
                return (0, r.jsx)(l.default, {
                    importData: m.current,
                    shouldAnimate: !p && f,
                    className: n,
                    versionKey: _,
                    onComplete: null != d ? () => {
                        null != d && (S(d), P(!0))
                    } : void 0,
                    loop: h
                })
            }
        }
    }
]);