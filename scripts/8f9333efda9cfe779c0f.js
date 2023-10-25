(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["55057"], {
        87657: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var r = n("920040"),
                a = n("773670"),
                l = n("77078"),
                u = n("390236"),
                i = a.memo(function(e) {
                    var t, n, i, s;
                    let {
                        user: d,
                        size: o = l.AvatarSizes.SIZE_32,
                        animate: c = !1,
                        "aria-hidden": f = !1,
                        ...E
                    } = e, S = a.useContext(u.default);
                    return (0, r.jsx)(l.Avatar, {
                        src: (t = d, n = (0, l.getAvatarSize)(o), i = c, s = S, t.getAvatarURL(s, n, i)),
                        size: o,
                        "aria-label": f ? void 0 : d.username,
                        "aria-hidden": f,
                        ...E
                    })
                })
        },
        7127: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PaymentModalConfirmStep: function() {
                    return f
                }
            });
            var r = n("920040");
            n("773670");
            var a = n("161179"),
                l = n.n(a),
                u = n("77078"),
                i = n("642906"),
                s = n("367767"),
                d = n("650484"),
                o = n("782340"),
                c = n("659854");

            function f(e) {
                let {
                    handleClose: t
                } = e, {
                    skusById: n,
                    selectedSkuId: a,
                    application: f
                } = (0, i.usePaymentContext)();
                l(null != a, "Expected selectedSkuId"), l(null != f, "Expected application");
                let E = n[a];
                l(null != E, "Expected sku");
                let S = o.default.Messages.APPLICATION_ADDON_PURCHASE_CONFIRMATION_BLURB.format({
                    applicationName: f.name,
                    itemName: E.name
                });
                return (0, r.jsxs)(d.PaymentPortalBody, {
                    children: [(0, r.jsx)(s.default, {}), (0, r.jsxs)("div", {
                        className: c.confirmation,
                        children: [(0, r.jsx)(u.Heading, {
                            variant: "heading-xxl/bold",
                            className: c.confirmationHeader,
                            children: "Success!"
                        }), (0, r.jsx)(u.Text, {
                            variant: "text-md/normal",
                            children: S
                        }), (0, r.jsx)("div", {
                            className: c.divider
                        }), (0, r.jsx)(u.Button, {
                            onClick: t,
                            children: o.default.Messages.CLOSE
                        })]
                    })]
                })
            }
        },
        292215: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ONE_TIME_PAYMENT_PREDICATE_STEP_CONFIG: function() {
                    return f
                },
                ONE_TIME_PAYMENT_ADD_PAYMENT_STEP_CONFIG: function() {
                    return E
                },
                REVIEW_STEP_CONFIG: function() {
                    return h
                },
                ONE_TIME_PAYMENT_CONFIRM_STEP_CONFIG: function() {
                    return m
                },
                SHARED_STEP_CONFIGS: function() {
                    return _
                }
            });
            var r = n("920040");
            n("773670");
            var a = n("357957"),
                l = n("85336"),
                u = n("262683"),
                i = n("946359"),
                s = n("724269"),
                d = n("7127"),
                o = n("99836"),
                c = n("217796");
            let f = {
                    key: null,
                    renderStep: e => (0, r.jsx)(c.OneTimePaymentPredicateStep, {
                        ...e
                    })
                },
                E = {
                    key: l.Step.ADD_PAYMENT_STEPS,
                    renderStep: e => (0, r.jsx)(r.Fragment, {
                        children: (0, r.jsx)(u.PaymentModalAddPaymentStep, {
                            ...e,
                            breadcrumbSteps: [l.Step.ADD_PAYMENT_STEPS, l.Step.REVIEW, l.Step.CONFIRM],
                            onReturn: () => {
                                let t = a.default.paymentSources;
                                0 === Object.keys(t).length ? e.handleClose() : e.handleStepChange(l.Step.REVIEW, {
                                    trackedFromStep: l.Step.ADD_PAYMENT_STEPS
                                })
                            }
                        })
                    }),
                    options: {
                        renderHeader: !0
                    }
                },
                S = {
                    key: l.Step.AWAITING_PURCHASE_TOKEN_AUTH,
                    renderStep: () => (0, r.jsx)(s.default, {})
                },
                P = {
                    key: l.Step.AWAITING_AUTHENTICATION,
                    renderStep: () => (0, r.jsx)(i.default, {})
                },
                h = {
                    key: l.Step.REVIEW,
                    renderStep: e => (0, r.jsx)(o.PaymentModalReviewStep, {
                        ...e
                    })
                },
                m = {
                    key: l.Step.CONFIRM,
                    renderStep: e => (0, r.jsx)(d.PaymentModalConfirmStep, {
                        ...e
                    })
                },
                _ = [S, P]
        },
        217796: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                OneTimePaymentPredicateStep: function() {
                    return d
                }
            });
            var r = n("920040"),
                a = n("773670"),
                l = n("245187"),
                u = n("642906"),
                i = n("85336"),
                s = n("628738");

            function d(e) {
                let {
                    handleStepChange: t,
                    handleClose: n
                } = e, {
                    blockedPayments: d,
                    hasFetchedSkus: o,
                    paymentSources: c,
                    hasFetchedPaymentSources: f,
                    application: E
                } = (0, u.usePaymentContext)(), [S, P] = a.useState(!0);
                return (a.useEffect(() => {
                    let e = null != E;
                    o && f && e && P(!1)
                }, [o, f, E]), a.useEffect(() => {
                    !S && !d && (0 === Object.keys(c).length ? t(i.Step.ADD_PAYMENT_STEPS) : t(i.Step.REVIEW))
                }, [S, d, t, c]), S) ? (0, r.jsx)(s.default, {}) : d ? (0, r.jsx)(l.BlockedPaymentsContentModal, {
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
                    return f
                }
            });
            var r = n("920040");
            n("773670");
            var a = n("812204"),
                l = n("685665"),
                u = n("642906"),
                i = n("385179"),
                s = n("292215"),
                d = n("809924");

            function o(e) {
                let {
                    onClose: t,
                    onComplete: n,
                    transitionState: a,
                    loadId: s,
                    applicationId: d,
                    skuId: o
                } = e, {} = (0, u.usePaymentContext)(), {
                    analyticsLocations: c
                } = (0, l.default)();
                return (0, r.jsx)(i.PaymentModal, {
                    onClose: t,
                    onComplete: n,
                    loadId: s,
                    applicationId: d,
                    skuId: o,
                    initialPlanId: null,
                    analyticsLocations: c,
                    transitionState: a
                })
            }
            let c = [s.ONE_TIME_PAYMENT_PREDICATE_STEP_CONFIG, s.ONE_TIME_PAYMENT_ADD_PAYMENT_STEP_CONFIG, ...s.SHARED_STEP_CONFIGS, s.REVIEW_STEP_CONFIG, s.ONE_TIME_PAYMENT_CONFIRM_STEP_CONFIG];

            function f(e) {
                let {
                    applicationId: t,
                    skuId: n,
                    analyticsLocations: i
                } = e, {
                    AnalyticsLocationProvider: s
                } = (0, l.default)(i, a.default.PREMIUM_PAYMENT_MODAL);
                return (0, r.jsx)(s, {
                    children: (0, r.jsx)(u.PaymentContextProvider, {
                        stepConfigs: c,
                        applicationId: t,
                        skuIDs: [n],
                        activeSubscription: null,
                        purchaseType: d.PurchaseTypes.ONE_TIME,
                        children: (0, r.jsx)(o, {
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
                    return a
                },
                getGiftAnimationData: function() {
                    return E
                },
                sendGiftMessage: function() {
                    return S
                }
            });
            var r, a, l = n("161179"),
                u = n.n(l),
                i = n("450911"),
                s = n("819689"),
                d = n("884351"),
                o = n("42203"),
                c = n("659632"),
                f = n("78345");
            (r = a || (a = {})).ACTION = "action", r.LOOP = "loop", r.IDLE = "idle";
            let E = (e, t) => {
                    let r;
                    switch (e) {
                        case f.PremiumGiftStyles.SNOWGLOBE:
                            r = () => n.el("729943").then(n.t.bind(n, "729943", 19)).then(e => {
                                let {
                                    default: t
                                } = e;
                                return t
                            });
                            break;
                        case f.PremiumGiftStyles.BOX:
                            r = () => n.el("5754").then(n.t.bind(n, "5754", 19)).then(e => {
                                let {
                                    default: t
                                } = e;
                                return t
                            });
                            break;
                        case f.PremiumGiftStyles.CUP:
                            r = () => n.el("132631").then(n.t.bind(n, "132631", 19)).then(e => {
                                let {
                                    default: t
                                } = e;
                                return t
                            });
                            break;
                        case f.PremiumGiftStyles.STANDARD_BOX:
                            switch (t) {
                                case a.IDLE:
                                    r = () => n.el("376058").then(n.t.bind(n, "376058", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                case a.LOOP:
                                    r = () => n.el("588315").then(n.t.bind(n, "588315", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                default:
                                    r = () => n.el("31805").then(n.t.bind(n, "31805", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    })
                            }
                            break;
                        case f.PremiumGiftStyles.CAKE:
                            switch (t) {
                                case a.IDLE:
                                    r = () => n.el("298104").then(n.t.bind(n, "298104", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                case a.LOOP:
                                    r = () => n.el("482376").then(n.t.bind(n, "482376", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                default:
                                    r = () => n.el("278985").then(n.t.bind(n, "278985", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    })
                            }
                            break;
                        case f.PremiumGiftStyles.CHEST:
                            switch (t) {
                                case a.IDLE:
                                    r = () => n.el("748733").then(n.t.bind(n, "748733", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                case a.LOOP:
                                    r = () => n.el("294698").then(n.t.bind(n, "294698", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                default:
                                    r = () => n.el("726130").then(n.t.bind(n, "726130", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    })
                            }
                            break;
                        case f.PremiumGiftStyles.COFFEE:
                            switch (t) {
                                case a.IDLE:
                                    r = () => n.el("179448").then(n.t.bind(n, "179448", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                case a.LOOP:
                                    r = () => n.el("772933").then(n.t.bind(n, "772933", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                default:
                                    r = () => n.el("461087").then(n.t.bind(n, "461087", 19)).then(e => {
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
                S = async (e, t) => {
                    if (null == t) throw Error("giftCode must be defined");
                    if (null == e) throw Error("Recipient must be defined");
                    let n = await i.default.openPrivateChannel(e.id).then(e => {
                            let t = o.default.getChannel(e);
                            if (u(null != t, "PrivateChannel is null"), null == t) throw Error("Channel must be defined");
                            return t
                        }),
                        r = (0, c.getGiftCodeURL)(t);
                    return s.default.sendMessage(n.id, d.default.parse(n, r), void 0, {
                        isGiftLinkSentOnBehalfOfUser: !0
                    })
                }
        },
        65324: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var r = n("920040"),
                a = n("773670"),
                l = n("498225"),
                u = n("206230"),
                i = n("491605"),
                s = n("210721"),
                d = n("78345");

            function o(e) {
                let {
                    giftStyle: t,
                    className: n,
                    shouldAnimate: o = !0,
                    defaultAnimationState: c,
                    idleAnimationState: f
                } = e, E = (0, l.useStateFromStores)([u.default], () => u.default.useReducedMotion), [S, P] = a.useState(c), h = a.useRef((0, s.getGiftAnimationData)(t, S)), [m, _] = a.useState(null == f), [p, T] = a.useState(!1), [I, N] = a.useState(-1), A = () => {
                    h.current = (0, s.getGiftAnimationData)(t, S), N(e => e + 1)
                }, O = () => {
                    _(!1), T(!0), N(-1), P(c)
                };
                a.useEffect(() => {
                    null == f && P(c)
                }, [f, c]), a.useEffect(() => {
                    if (null != f && I >= 0) {
                        O();
                        return
                    }
                    A()
                }, [t, f]), a.useEffect(() => {
                    (!p || null == f) && A()
                }, [S]), a.useEffect(() => {
                    p && (_(null == f), T(!1), A())
                }, [p]);
                if (!d.PremiumGiftStyles.hasOwnProperty(t)) throw Error("Unexpected giftStyle ".concat(t));
                return (0, r.jsx)(i.default, {
                    importData: h.current,
                    shouldAnimate: !E && o,
                    className: n,
                    versionKey: I,
                    onComplete: null != f ? () => {
                        null != f && (P(f), _(!0))
                    } : void 0,
                    loop: m
                })
            }
        },
        391845: function(e, t, n) {
            "use strict";

            function r() {
                let e = Promise.resolve(null);
                return t => new Promise((n, r) => {
                    e = e.then(t).then(n, r)
                })
            }
            n.r(t), n.d(t, {
                createLock: function() {
                    return r
                }
            })
        }
    }
]);