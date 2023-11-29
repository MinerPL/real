(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["40644"], {
        506264: function(t, e, n) {
            var Symbol = n("626849").Symbol;
            t.exports = Symbol
        },
        60297: function(t, e, n) {
            var Symbol = n("506264"),
                r = n("754892"),
                i = n("19797"),
                o = Symbol ? Symbol.toStringTag : void 0;
            t.exports = function(t) {
                return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : o && o in Object(t) ? r(t) : i(t)
            }
        },
        306551: function(t, e, n) {
            n("781738");
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
            var Symbol = n("506264"),
                r = Object.prototype,
                i = r.hasOwnProperty,
                o = r.toString,
                u = Symbol ? Symbol.toStringTag : void 0;
            t.exports = function(t) {
                var e = i.call(t, u),
                    n = t[u];
                try {
                    t[u] = void 0;
                    var r = !0
                } catch (t) {}
                var a = o.call(t);
                return r && (e ? t[u] = n : delete t[u]), a
            }
        },
        19797: function(t, e, n) {
            var r = Object.prototype.toString;
            t.exports = function(t) {
                return r.call(t)
            }
        },
        626849: function(t, e, n) {
            n("854508");
            var r = n("571255"),
                i = "object" == typeof self && self && self.Object === Object && self,
                o = r || i || Function("return this")();
            t.exports = o
        },
        84927: function(t, e, n) {
            var r = /\s/;
            t.exports = function(t) {
                for (var e = t.length; e-- && r.test(t.charAt(e)););
                return e
            }
        },
        478098: function(t, e, n) {
            n("70102");
            var r = n("952133"),
                i = n("645942"),
                o = n("261497"),
                u = Math.max,
                a = Math.min;
            t.exports = function(t, e, n) {
                var c, l, s, f, d, p, E = 0,
                    S = !1,
                    v = !1,
                    T = !0;
                if ("function" != typeof t) throw TypeError("Expected a function");

                function _(e) {
                    var n = c,
                        r = l;
                    return c = l = void 0, E = e, f = t.apply(r, n)
                }
                e = o(e) || 0, r(n) && (S = !!n.leading, s = (v = "maxWait" in n) ? u(o(n.maxWait) || 0, e) : s, T = "trailing" in n ? !!n.trailing : T);

                function m(t) {
                    var n = t - p,
                        r = t - E;
                    return void 0 === p || n >= e || n < 0 || v && r >= s
                }

                function x() {
                    var t, n, r, o, u = i();
                    if (m(u)) return P(u);
                    d = setTimeout(x, (n = (t = u) - p, r = t - E, o = e - n, v ? a(o, s - r) : o))
                }

                function P(t) {
                    return (d = void 0, T && c) ? _(t) : (c = l = void 0, f)
                }

                function I() {
                    var t, n = i(),
                        r = m(n);
                    if (c = arguments, l = this, p = n, r) {
                        if (void 0 === d) {
                            ;
                            return E = t = p, d = setTimeout(x, e), S ? _(t) : f
                        }
                        if (v) return clearTimeout(d), d = setTimeout(x, e), _(p)
                    }
                    return void 0 === d && (d = setTimeout(x, e)), f
                }
                return I.cancel = function() {
                    void 0 !== d && clearTimeout(d), E = 0, c = p = l = d = void 0
                }, I.flush = function() {
                    return void 0 === d ? f : P(i())
                }, I
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
            n("70102");
            var r = n("478098"),
                i = n("952133");
            t.exports = function(t, e, n) {
                var o = !0,
                    u = !0;
                if ("function" != typeof t) throw TypeError("Expected a function");
                return i(n) && (o = "leading" in n ? !!n.leading : o, u = "trailing" in n ? !!n.trailing : u), r(t, e, {
                    leading: o,
                    maxWait: e,
                    trailing: u
                })
            }
        },
        261497: function(t, e, n) {
            var r = n("306551"),
                i = n("952133"),
                o = n("501870"),
                u = 0 / 0,
                a = /^[-+]0x[0-9a-f]+$/i,
                c = /^0b[01]+$/i,
                l = /^0o[0-7]+$/i,
                s = parseInt;
            t.exports = function(t) {
                if ("number" == typeof t) return t;
                if (o(t)) return u;
                if (i(t)) {
                    var e = "function" == typeof t.valueOf ? t.valueOf() : t;
                    t = i(e) ? e + "" : e
                }
                if ("string" != typeof t) return 0 === t ? t : +t;
                t = r(t);
                var n = c.test(t);
                return n || l.test(t) ? s(t.slice(2), n ? 2 : 8) : a.test(t) ? u : +t
            }
        },
        87657: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return a
                }
            });
            var r = n("37983"),
                i = n("884691"),
                o = n("77078"),
                u = n("390236"),
                a = i.memo(function(t) {
                    var e, n, a, c;
                    let {
                        user: l,
                        size: s = o.AvatarSizes.SIZE_32,
                        animate: f = !1,
                        "aria-hidden": d = !1,
                        ...p
                    } = t, E = i.useContext(u.default);
                    return (0, r.jsx)(o.Avatar, {
                        src: (e = l, n = (0, o.getAvatarSize)(s), a = f, c = E, e.getAvatarURL(c, n, a)),
                        size: s,
                        "aria-label": d ? void 0 : l.username,
                        "aria-hidden": d,
                        ...p
                    })
                })
        },
        7127: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                PaymentModalConfirmStep: function() {
                    return d
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("627445"),
                o = n.n(i),
                u = n("77078"),
                a = n("642906"),
                c = n("367767"),
                l = n("650484"),
                s = n("782340"),
                f = n("966425");

            function d(t) {
                let {
                    handleClose: e
                } = t, {
                    skusById: n,
                    selectedSkuId: i,
                    application: d
                } = (0, a.usePaymentContext)();
                o(null != i, "Expected selectedSkuId"), o(null != d, "Expected application");
                let p = n[i];
                o(null != p, "Expected sku");
                let E = s.default.Messages.APPLICATION_ADDON_PURCHASE_CONFIRMATION_BLURB.format({
                    applicationName: d.name,
                    itemName: p.name
                });
                return (0, r.jsxs)(l.PaymentPortalBody, {
                    children: [(0, r.jsx)(c.default, {}), (0, r.jsxs)("div", {
                        className: f.confirmation,
                        children: [(0, r.jsx)(u.Heading, {
                            variant: "heading-xxl/bold",
                            className: f.confirmationHeader,
                            children: "Success!"
                        }), (0, r.jsx)(u.Text, {
                            variant: "text-md/normal",
                            children: E
                        }), (0, r.jsx)("div", {
                            className: f.divider
                        }), (0, r.jsx)(u.Button, {
                            onClick: e,
                            children: s.default.Messages.CLOSE
                        })]
                    })]
                })
            }
        },
        292215: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                ONE_TIME_PAYMENT_PREDICATE_STEP_CONFIG: function() {
                    return d
                },
                ONE_TIME_PAYMENT_ADD_PAYMENT_STEP_CONFIG: function() {
                    return p
                },
                REVIEW_STEP_CONFIG: function() {
                    return v
                },
                ONE_TIME_PAYMENT_CONFIRM_STEP_CONFIG: function() {
                    return T
                },
                SHARED_STEP_CONFIGS: function() {
                    return _
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("357957"),
                o = n("85336"),
                u = n("262683"),
                a = n("946359"),
                c = n("724269"),
                l = n("7127"),
                s = n("99836"),
                f = n("217796");
            let d = {
                    key: null,
                    renderStep: t => (0, r.jsx)(f.OneTimePaymentPredicateStep, {
                        ...t
                    })
                },
                p = {
                    key: o.Step.ADD_PAYMENT_STEPS,
                    renderStep: t => (0, r.jsx)(r.Fragment, {
                        children: (0, r.jsx)(u.PaymentModalAddPaymentStep, {
                            ...t,
                            breadcrumbSteps: [o.Step.ADD_PAYMENT_STEPS, o.Step.REVIEW, o.Step.CONFIRM],
                            onReturn: () => {
                                let e = i.default.paymentSources;
                                0 === Object.keys(e).length ? t.handleClose() : t.handleStepChange(o.Step.REVIEW, {
                                    trackedFromStep: o.Step.ADD_PAYMENT_STEPS
                                })
                            }
                        })
                    }),
                    options: {
                        renderHeader: !0
                    }
                },
                E = {
                    key: o.Step.AWAITING_PURCHASE_TOKEN_AUTH,
                    renderStep: () => (0, r.jsx)(c.default, {})
                },
                S = {
                    key: o.Step.AWAITING_AUTHENTICATION,
                    renderStep: () => (0, r.jsx)(a.default, {})
                },
                v = {
                    key: o.Step.REVIEW,
                    renderStep: t => (0, r.jsx)(s.PaymentModalReviewStep, {
                        ...t
                    })
                },
                T = {
                    key: o.Step.CONFIRM,
                    renderStep: t => (0, r.jsx)(l.PaymentModalConfirmStep, {
                        ...t
                    })
                },
                _ = [E, S]
        },
        217796: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                OneTimePaymentPredicateStep: function() {
                    return p
                }
            }), n("222007");
            var r = n("37983"),
                i = n("884691"),
                o = n("627445"),
                u = n.n(o),
                a = n("245187"),
                c = n("635357"),
                l = n("642906"),
                s = n("85336"),
                f = n("628738"),
                d = n("49111");

            function p(t) {
                let {
                    handleStepChange: e,
                    handleClose: n
                } = t, {
                    blockedPayments: o,
                    hasFetchedSkus: p,
                    paymentSources: E,
                    hasFetchedPaymentSources: S,
                    application: v,
                    skusById: T,
                    selectedSkuId: _
                } = (0, l.usePaymentContext)(), {
                    isGift: m
                } = (0, c.useGiftContext)(), [x, P] = i.useState(!0);
                return (i.useEffect(() => {
                    let t = null != v;
                    p && S && t && P(!1)
                }, [p, S, v]), i.useEffect(() => {
                    if (x || o) return;
                    u(null != _, "Expected selectedSkuId");
                    let t = T[_];
                    if (m && (null == t ? void 0 : t.productLine) === d.SKUProductLines.COLLECTIBLES) {
                        e(s.Step.GIFT_CUSTOMIZATION);
                        return
                    }
                    if (0 === Object.keys(E).length) {
                        e(s.Step.ADD_PAYMENT_STEPS);
                        return
                    }
                    e(s.Step.REVIEW)
                }, [x, o, e, E, m, T, _]), x) ? (0, r.jsx)(f.default, {}) : o ? (0, r.jsx)(a.BlockedPaymentsContentModal, {
                    onClose: n
                }) : null
            }
        },
        405314: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                STANDARD_ONE_TIME_PAYMENT_STEPS: function() {
                    return d
                },
                default: function() {
                    return p
                }
            }), n("222007");
            var r = n("37983");
            n("884691");
            var i = n("812204"),
                o = n("685665"),
                u = n("635357"),
                a = n("642906"),
                c = n("385179"),
                l = n("292215"),
                s = n("843455");

            function f(t) {
                let {
                    onClose: e,
                    onComplete: n,
                    transitionState: i,
                    loadId: u,
                    applicationId: l,
                    skuId: s
                } = t, {} = (0, a.usePaymentContext)(), {
                    analyticsLocations: f
                } = (0, o.default)();
                return (0, r.jsx)(c.PaymentModal, {
                    onClose: e,
                    onComplete: n,
                    loadId: u,
                    applicationId: l,
                    skuId: s,
                    initialPlanId: null,
                    analyticsLocations: f,
                    transitionState: i
                })
            }
            let d = [l.ONE_TIME_PAYMENT_PREDICATE_STEP_CONFIG, l.ONE_TIME_PAYMENT_ADD_PAYMENT_STEP_CONFIG, ...l.SHARED_STEP_CONFIGS, l.REVIEW_STEP_CONFIG, l.ONE_TIME_PAYMENT_CONFIRM_STEP_CONFIG];

            function p(t) {
                let {
                    applicationId: e,
                    skuId: n,
                    analyticsLocations: c
                } = t, {
                    AnalyticsLocationProvider: l
                } = (0, o.default)(c, i.default.PREMIUM_PAYMENT_MODAL);
                return (0, r.jsx)(l, {
                    children: (0, r.jsx)(a.PaymentContextProvider, {
                        stepConfigs: d,
                        applicationId: e,
                        skuIDs: [n],
                        activeSubscription: null,
                        purchaseType: s.PurchaseTypes.ONE_TIME,
                        children: (0, r.jsx)(u.GiftContextProvider, {
                            children: (0, r.jsx)(f, {
                                ...t
                            })
                        })
                    })
                })
            }
        },
        65324: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return s
                }
            }), n("222007"), n("70102");
            var r = n("37983"),
                i = n("884691"),
                o = n("446674"),
                u = n("206230"),
                a = n("491605"),
                c = n("210721"),
                l = n("78345");

            function s(t) {
                let {
                    giftStyle: e,
                    className: n,
                    shouldAnimate: s = !0,
                    defaultAnimationState: f,
                    idleAnimationState: d
                } = t, p = (0, o.useStateFromStores)([u.default], () => u.default.useReducedMotion), [E, S] = i.useState(f), v = i.useRef((0, c.getGiftAnimationData)(e, E)), [T, _] = i.useState(null == d), [m, x] = i.useState(!1), [P, I] = i.useState(-1), N = () => {
                    v.current = (0, c.getGiftAnimationData)(e, E), I(t => t + 1)
                }, y = () => {
                    _(!1), x(!0), I(-1), S(f)
                };
                i.useEffect(() => {
                    null == d && S(f)
                }, [d, f]), i.useEffect(() => {
                    if (null != d && P >= 0) {
                        y();
                        return
                    }
                    N()
                }, [e, d]), i.useEffect(() => {
                    (!m || null == d) && N()
                }, [E]), i.useEffect(() => {
                    m && (_(null == d), x(!1), N())
                }, [m]);
                if (!l.PremiumGiftStyles.hasOwnProperty(e)) throw Error("Unexpected giftStyle ".concat(e));
                return (0, r.jsx)(a.default, {
                    importData: v.current,
                    shouldAnimate: !p && s,
                    className: n,
                    versionKey: P,
                    onComplete: null != d ? () => {
                        null != d && (S(d), _(!0))
                    } : void 0,
                    loop: T
                })
            }
        }
    }
]);