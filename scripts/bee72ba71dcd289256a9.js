(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["8181"], {
        280968: function(e, t, n) {
            "use strict";
            e.exports = n.p + "21776a8b4fe8087b0bdc.svg"
        },
        361396: function(e, t, n) {
            "use strict";
            e.exports = n.p + "d159a1f367b4a1eb7f2c.png"
        },
        291059: function(e, t, n) {
            "use strict";
            e.exports = n.p + "9254c6ef3fdf4d153df8.png"
        },
        356057: function(e, t, n) {
            "use strict";
            e.exports = n.p + "163c5051f6417b3bc324.png"
        },
        892712: function(e, t, n) {
            "use strict";
            e.exports = n.p + "13fbe1295be9098d06dd.png"
        },
        335430: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CurrencyWrapper: function() {
                    return l
                },
                default: function() {
                    return i
                }
            });
            var r = n("37983");
            n("884691");
            var s = n("77078"),
                a = n("575209");

            function l(e) {
                let {
                    currencies: t,
                    className: n,
                    children: s
                } = e;
                return t.length < 2 ? null : (0, r.jsx)("div", {
                    className: n,
                    children: s
                })
            }
            var i = function(e) {
                let {
                    currencies: t,
                    onChange: n,
                    selectedCurrency: l,
                    className: i,
                    disabled: u = !1
                } = e;
                if (t.length < 2) return null;
                let c = t.map((e, t) => ({
                    key: t,
                    value: e,
                    label: "".concat(e.toUpperCase(), " - ").concat((0, a.getCurrencyFullName)(e))
                }));
                return (0, r.jsx)(s.SingleSelect, {
                    value: l,
                    options: c,
                    onChange: e => {
                        null != e && n(e)
                    },
                    className: i,
                    isDisabled: u
                })
            }
        },
        405932: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var s = n("77078"),
                a = n("135898"),
                l = function(e) {
                    let {
                        message: t
                    } = e;
                    return (0, r.jsxs)("div", {
                        className: a.warnBlock,
                        children: [(0, r.jsx)("div", {
                            className: a.warnIcon
                        }), (0, r.jsx)(s.Text, {
                            className: a.warnText,
                            variant: "text-sm/normal",
                            children: t
                        })]
                    })
                }
        },
        50517: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AwaitingPurchaseTokenAuthStepBody: function() {
                    return u
                },
                AwaitingPurchaseTokenAuthStepFooter: function() {
                    return c
                }
            });
            var r = n("37983");
            n("884691");
            var s = n("77078"),
                a = n("145131"),
                l = n("782340"),
                i = n("57153");
            let u = e => {
                    let {
                        className: t,
                        isEmailResent: n,
                        resendEmail: a
                    } = e;
                    return (0, r.jsx)("div", {
                        className: t,
                        children: (0, r.jsxs)("div", {
                            className: i.awaitingWrapper,
                            children: [(0, r.jsx)(s.Heading, {
                                variant: "heading-xl/bold",
                                children: l.default.Messages.PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_HEADER
                            }), (0, r.jsxs)("p", {
                                children: [(0, r.jsx)(s.Text, {
                                    variant: "text-md/normal",
                                    children: l.default.Messages.PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL
                                }), (0, r.jsx)("br", {}), (0, r.jsx)(s.Text, {
                                    variant: "text-md/normal",
                                    children: l.default.Messages.PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_INSTRUCTIONS
                                }), (0, r.jsx)("br", {}), (0, r.jsxs)(s.Text, {
                                    variant: "text-md/normal",
                                    children: [l.default.Messages.PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_RESEND_PROMPT, "\xa0", n ? l.default.Messages.PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_RESEND_SENT : (0, r.jsx)(s.Anchor, {
                                        onClick: a,
                                        children: l.default.Messages.PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_RESEND_ACTION
                                    })]
                                })]
                            })]
                        })
                    })
                },
                c = () => (0, r.jsx)("div", {
                    children: (0, r.jsx)(s.ModalFooter, {
                        justify: a.default.Justify.BETWEEN,
                        align: a.default.Align.CENTER,
                        children: (0, r.jsx)(s.Button, {
                            "data-testid": "continue",
                            color: s.Button.Colors.BRAND,
                            disabled: !0,
                            children: l.default.Messages.PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_NEXT_BUTTON
                        })
                    })
                })
        },
        763377: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CircleQuestionIcon: function() {
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var s = n("669491"),
                a = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = s.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...u
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, a.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        fillRule: "evenodd",
                        d: "M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11Zm-.281-16c-.981 0-1.812.473-2.269 1.14A1 1 0 1 1 7.8 7.01C8.638 5.786 10.095 5 11.719 5c2.495 0 4.656 1.885 4.656 4.375 0 2.103-1.542 3.775-3.524 4.243l.14.993a1 1 0 0 1-1.981.278l-.281-2a1 1 0 0 1 .99-1.139c1.544 0 2.656-1.137 2.656-2.375S13.263 7 11.719 7ZM13 17.875a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0Z",
                        clipRule: "evenodd",
                        className: i
                    })
                })
            }
        },
        645156: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SlashIcon: function() {
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var s = n("669491"),
                a = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = s.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...u
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, a.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        fillRule: "evenodd",
                        d: "M19.117 2a.5.5 0 0 1 .429.757L8.218 21.636a.75.75 0 0 1-.643.364H4.883a.5.5 0 0 1-.429-.757L15.782 2.364A.75.75 0 0 1 16.424 2h2.692Z",
                        clipRule: "evenodd",
                        className: i
                    })
                })
            }
        },
        594203: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ResizeOrientation: function() {
                    return a
                },
                default: function() {
                    return o
                }
            });
            var r, s, a, l, i = n("884691"),
                u = n("917351");

            function c(e) {
                return e === a.HORIZONTAL_LEFT || e === a.HORIZONTAL_RIGHT ? l.HORIZONTAL : l.VERTICAL
            }(r = a || (a = {}))[r.VERTICAL_TOP = 0] = "VERTICAL_TOP", r[r.VERTICAL_BOTTOM = 1] = "VERTICAL_BOTTOM", r[r.HORIZONTAL_LEFT = 2] = "HORIZONTAL_LEFT", r[r.HORIZONTAL_RIGHT = 3] = "HORIZONTAL_RIGHT", (s = l || (l = {}))[s.VERTICAL = 0] = "VERTICAL", s[s.HORIZONTAL = 1] = "HORIZONTAL";
            var o = e => {
                let {
                    initialElementDimension: t,
                    resizableDomNodeRef: n,
                    maxDimension: r,
                    minDimension: s,
                    onElementResize: o,
                    onElementResizeEnd: d,
                    throttleDuration: f = 300,
                    orientation: _,
                    usePointerEvents: m = !1
                } = e, [I, E] = i.useState(!1), p = i.useRef(0), P = i.useRef(null == t ? 0 : t);
                return i.useLayoutEffect(() => {
                    if (!I || null == n.current) return;

                    function e(e) {
                        let t = c(_) === l.HORIZONTAL ? e.screenX : e.screenY,
                            n = _ === a.VERTICAL_TOP || _ === a.HORIZONTAL_LEFT,
                            i = (t - p.current) * (n ? -1 : 1),
                            o = P.current + i;
                        return (0, u.clamp)(o, null != s ? s : 0, null != r ? r : o)
                    }
                    let t = (0, u.throttle)(o, f),
                        i = r => {
                            if (null == n.current) return null;
                            let s = e(r),
                                a = c(_) === l.HORIZONTAL ? "width" : "height";
                            n.current.style[a] = "".concat(s, "px"), t(s)
                        },
                        N = t => {
                            E(!1);
                            let n = e(t);
                            o(n), null == d || d(n)
                        },
                        S = m ? "pointerup" : "mouseup",
                        T = m ? "pointermove" : "mousemove",
                        A = n.current.ownerDocument;
                    return A.addEventListener(S, N), A.addEventListener(T, i), () => {
                        A.removeEventListener(S, N), A.removeEventListener(T, i), t.cancel()
                    }
                }, [I, o, s, r, _, n, f, d, m]), i.useCallback(e => {
                    let t = c(_) === l.HORIZONTAL;
                    null != n.current && (P.current = t ? n.current.offsetWidth : n.current.offsetHeight), p.current = t ? e.screenX : e.screenY, E(!0)
                }, [_, n])
            }
        },
        605886: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                purchaseProduct: function() {
                    return N
                }
            });
            var r = n("627445"),
                s = n.n(r),
                a = n("913144"),
                l = n("850068"),
                i = n("112679"),
                u = n("596523"),
                c = n("465527"),
                o = n("388290"),
                d = n("599110"),
                f = n("745279"),
                _ = n("659632"),
                m = n("719923"),
                I = n("286350"),
                E = n("49111"),
                p = n("646718"),
                P = n("782340");
            async function N(e) {
                var t;
                let {
                    setPurchaseState: n,
                    setHasAcceptedTerms: r,
                    setIsSubmitting: N,
                    setPurchaseError: S,
                    hasRedirectURL: T,
                    setHasRedirectURL: A,
                    isGift: C,
                    giftStyle: O,
                    baseAnalyticsData: R,
                    analyticsLocation: M,
                    analyticsLocations: g,
                    flowStartTime: L,
                    subscriptionPlan: y,
                    planGroup: h,
                    trialId: v,
                    priceOptions: x,
                    paymentSource: b,
                    isPrepaidPaymentPastDue: G,
                    openInvoiceId: j,
                    premiumSubscription: U,
                    onNext: D,
                    metadata: B,
                    sku: F,
                    skuPricePreview: k,
                    purchaseType: w,
                    referralCode: Y,
                    loadId: H,
                    giftRecipient: W,
                    customMessage: Z
                } = e;
                n(I.PurchaseState.PURCHASING), r(!0), N(!0), a.default.wait(i.clearError), S(null);
                try {
                    let e, r, a;
                    if (d.default.track(E.AnalyticEvents.PAYMENT_FLOW_COMPLETED, {
                            ...R,
                            duration_ms: Date.now() - L
                        }), T) return;
                    let i = (0, _.isCustomGiftEnabled)(W);
                    if (w === E.PurchaseTypes.ONE_TIME) s(null != F, "SKU must exist and be fetched."), s(null != k, "SKUPricePreview must exist."), e = await (0, c.purchaseSKU)(F.applicationId, F.id, {
                        expectedAmount: k.amount,
                        expectedCurrency: k.currency,
                        paymentSource: b,
                        loadId: H
                    });
                    else if (s(null != y, "Missing subscriptionPlan"), C) {
                        let n = (0, m.getPrice)(y.id, !1, !0, x);
                        if ("usd" === n.currency && (null == b ? void 0 : b.type) === E.PaymentSourceTypes.GCASH) {
                            let e = Error("Invalid USD currency for GCash");
                            (0, f.captureBillingException)(e, {
                                tags: {
                                    paymentSourceId: null !== (t = null == b ? void 0 : b.id) && void 0 !== t ? t : "",
                                    subscriptionPlanId: y.id,
                                    priceOptions: JSON.stringify(x)
                                }
                            })
                        }
                        e = await (0, c.purchaseSKU)(p.PREMIUM_SUBSCRIPTION_APPLICATION, y.skuId, {
                            expectedAmount: n.amount,
                            expectedCurrency: n.currency,
                            paymentSource: b,
                            subscriptionPlanId: y.id,
                            isGift: !0,
                            giftStyle: O,
                            loadId: H,
                            recipientId: i ? null == W ? void 0 : W.id : void 0,
                            customMessage: i ? Z : void 0
                        })
                    } else e = G && null != j && null != b && null != U ? E.PREPAID_PAYMENT_SOURCES.has(b.type) ? await (0, l.payInvoiceManually)(U, j, b, x.currency) : await (0, l.updateSubscription)(U, {
                        paymentSource: b,
                        currency: x.currency
                    }, g, M) : null != U ? await (0, l.updateSubscription)(U, {
                        items: (0, m.getItemsWithUpsertedPlanIdForGroup)(U, y.id, 1, new Set(h)),
                        paymentSource: b,
                        currency: x.currency
                    }, g, M) : await (0, u.subscribe)({
                        planId: y.id,
                        currency: x.currency,
                        paymentSource: b,
                        trialId: v,
                        metadata: B,
                        referralCode: Y,
                        loadId: H
                    });
                    if (e.redirectConfirmation) {
                        A(null != e.redirectURL);
                        return
                    }
                    let N = {
                        ...R,
                        duration_ms: Date.now() - L,
                        payment_source_type: null == b ? void 0 : b.type
                    };
                    i && (N.is_custom_message_edited = Z !== P.default.Messages.DEFAULT_CUSTOM_GIFT_MESSAGE), d.default.track(E.AnalyticEvents.PAYMENT_FLOW_SUCCEEDED, N), n(I.PurchaseState.COMPLETED), "subscription" in e ? r = null != e.subscription ? o.default.createFromServer(e.subscription) : null : "entitlements" in e && (a = null != e.entitlements ? e.entitlements : void 0), D(r, a)
                } catch (e) {
                    n(I.PurchaseState.FAIL), S(e), d.default.track(E.AnalyticEvents.PAYMENT_FLOW_FAILED, {
                        ...R,
                        payment_source_id: null == b ? void 0 : b.id,
                        payment_source_type: null == b ? void 0 : b.type,
                        duration_ms: Date.now() - L
                    })
                } finally {
                    !T && N(!1)
                }
            }
        },
        262683: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PaymentModalAddPaymentStep: function() {
                    return _
                }
            });
            var r = n("627445"),
                s = n.n(r),
                a = n("775560"),
                l = n("917247"),
                i = n("724522"),
                u = n("599110"),
                c = n("642906"),
                o = n("85336"),
                d = n("49111"),
                f = n("646718");

            function _(e) {
                let {
                    analyticsData: t,
                    initialPlanId: n,
                    breadcrumbSteps: r,
                    handleStepChange: _,
                    referralTrialOfferId: m,
                    onReturn: I
                } = e, {
                    contextMetadata: E,
                    step: p,
                    paymentSources: P,
                    paymentSourceId: N,
                    setPaymentSourceId: S,
                    purchaseError: T,
                    setPurchaseError: A,
                    purchaseErrorBlockRef: C,
                    paymentAuthenticationState: O,
                    isGift: R,
                    selectedSkuId: M
                } = (0, c.usePaymentContext)(), g = {
                    ...(0, i.useSharedPaymentModal)(),
                    paymentSources: P,
                    paymentSourceId: N,
                    setPaymentSourceId: S,
                    purchaseError: T,
                    setPurchaseError: A,
                    purchaseErrorBlockRef: C,
                    paymentAuthenticationState: O
                }, L = (0, l.usePremiumTrialOffer)(m), y = !R && null != L && null != M && (0, f.SubscriptionTrials)[L.trial_id].skus.includes(M), h = null != I ? I : () => {
                    let e = Object.values(P).length < 1 && null == n ? o.Step.PLAN_SELECT : o.Step.REVIEW;
                    _(e, {
                        trackedFromStep: o.Step.PAYMENT_TYPE
                    })
                };
                s(p, "Step should be set here");
                let v = (0, a.useStableMemo)(() => Date.now(), [p]);
                return (0, i.AddPaymentFlow)({
                    paymentModalArgs: g,
                    initialStep: o.Step.PAYMENT_TYPE,
                    prependSteps: [o.Step.PROMOTION_INFO],
                    appendSteps: [o.Step.REVIEW, o.Step.CONFIRM],
                    breadcrumpSteps: r,
                    currentBreadcrumpStep: p,
                    usePaymentModalStep: !0,
                    onReturn: h,
                    onComplete: e => {
                        _(o.Step.REVIEW, {
                            trackedFromStep: e
                        })
                    },
                    onStepChange: e => {
                        let {
                            currentStep: n,
                            toStep: r
                        } = e, s = Date.now();
                        u.default.track(d.AnalyticEvents.PAYMENT_FLOW_STEP, {
                            ...t,
                            from_step: n,
                            to_step: r,
                            step_duration_ms: s - v,
                            flow_duration_ms: s - E.startTime
                        })
                    },
                    isEligibleForTrial: y
                })
            }
        },
        946359: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var r = n("37983");
            n("884691");
            var s = n("157009"),
                a = n("153727"),
                l = n("650484"),
                i = n("913390");

            function u() {
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(a.default, {}), (0, r.jsx)(l.PaymentPortalBody, {
                        children: (0, r.jsx)(s.AwaitingAuthenticationStepBody, {
                            className: i.awaitingAuthenticationStep
                        })
                    })]
                })
            }
        },
        724269: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var r = n("37983"),
                s = n("884691"),
                a = n("465527"),
                l = n("50517"),
                i = n("153727"),
                u = n("650484"),
                c = n("199142");

            function o() {
                let [e, t] = s.useState(!1), n = async () => {
                    t(!0), await (0, a.resendPaymentVerificationEmail)()
                };
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(i.default, {}), (0, r.jsx)(u.PaymentPortalBody, {
                        children: (0, r.jsx)(l.AwaitingPurchaseTokenAuthStepBody, {
                            className: c.body,
                            isEmailResent: e,
                            resendEmail: n
                        })
                    }), (0, r.jsx)(u.PaymentPortalFooter, {
                        children: (0, r.jsx)(l.AwaitingPurchaseTokenAuthStepFooter, {})
                    })]
                })
            }
        },
        883558: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n("862205");
            let s = (0, r.createExperiment)({
                id: "2023-07_checkout_optimization_browser_autofill",
                label: "Checkout Optimization Browser Autofill",
                kind: "user",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enabled",
                    config: {
                        enabled: !0
                    }
                }]
            });
            var a = s
        },
        102492: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                checkNoPaymentTrialEnabled: function() {
                    return i
                }
            });
            var r = n("862205"),
                s = n("719923");
            let a = (0, r.createExperiment)({
                    kind: "user",
                    id: "2022-06_no_payment_info_trial",
                    label: "No Payment Info Trial",
                    defaultConfig: {
                        bypassCheckout: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Bypass collecting payment info",
                        config: {
                            bypassCheckout: !0
                        }
                    }]
                }),
                l = (e, t, n) => {
                    let r = null == n || (0, s.isPremiumBaseSubscriptionPlan)(n);
                    return null != e && null == t && r
                },
                i = (e, t, n) => {
                    let {
                        bypassCheckout: r
                    } = a.useExperiment({
                        location: "aeb070_1"
                    }, {
                        autoTrackExposure: !1
                    }), s = l(e, t, n);
                    return r && s
                }
        },
        35188: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var r = (0, n("862205").createExperiment)({
                kind: "user",
                id: "2022-12_localized_pricing_poland_notice",
                label: "Localized Pricing Poland Notice",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enable Poland Notice",
                    config: {
                        enabled: !0
                    }
                }]
            })
        },
        909469: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PAYMENT_SOURCE_NAMES: function() {
                    return f
                },
                getLocalizedPricingNotice: function() {
                    return m
                },
                getLocalizedPricingBannerStrings: function() {
                    return I
                }
            });
            var r = n("592861"),
                s = n("988415"),
                a = n("701909"),
                l = n("153160"),
                i = n("49111"),
                u = n("843455"),
                c = n("782340");
            let o = new Set([u.CurrencyCodes.ARS, u.CurrencyCodes.CLP, u.CurrencyCodes.COP]),
                d = new Set([u.CurrencyCodes.USD, u.CurrencyCodes.JPY]),
                f = {
                    [i.PaymentSourceTypes.CARD]: () => c.default.Messages.PAYMENT_SOURCE_CREDIT_CARD_CARD_ONLY,
                    [i.PaymentSourceTypes.PAYPAL]: () => c.default.Messages.PAYMENT_SOURCE_PAYPAL,
                    [i.PaymentSourceTypes.SOFORT]: () => c.default.Messages.PAYMENT_SOURCE_SOFORT,
                    [i.PaymentSourceTypes.GIROPAY]: () => c.default.Messages.PAYMENT_SOURCE_GIROPAY,
                    [i.PaymentSourceTypes.PRZELEWY24]: () => c.default.Messages.PAYMENT_SOURCE_PRZELEWY24,
                    [i.PaymentSourceTypes.PAYSAFE_CARD]: () => c.default.Messages.PAYMENT_SOURCE_PAYSAFE_CARD,
                    [i.PaymentSourceTypes.GCASH]: () => c.default.Messages.PAYMENT_SOURCE_GCASH,
                    [i.PaymentSourceTypes.GRABPAY_MY]: () => c.default.Messages.PAYMENT_SOURCE_GRABPAY,
                    [i.PaymentSourceTypes.MOMO_WALLET]: () => c.default.Messages.PAYMENT_SOURCE_MOMO_WALLET,
                    [i.PaymentSourceTypes.VENMO]: () => c.default.Messages.PAYMENT_SOURCE_VENMO,
                    [i.PaymentSourceTypes.KAKAOPAY]: () => c.default.Messages.PAYMENT_SOURCE_KAKAOPAY,
                    [i.PaymentSourceTypes.GOPAY_WALLET]: () => c.default.Messages.PAYMENT_SOURCE_GOPAY_WALLET,
                    [i.PaymentSourceTypes.BANCONTACT]: () => c.default.Messages.PAYMENT_SOURCE_BANCONTACT,
                    [i.PaymentSourceTypes.EPS]: () => c.default.Messages.PAYMENT_SOURCE_EPS,
                    [i.PaymentSourceTypes.IDEAL]: () => c.default.Messages.PAYMENT_SOURCE_IDEAL,
                    [i.PaymentSourceTypes.CASH_APP]: () => c.default.Messages.PAYMENT_SOURCE_CASH_APP_PAY
                },
                _ = [i.PaymentSourceTypes.EPS, i.PaymentSourceTypes.BANCONTACT, i.PaymentSourceTypes.IDEAL, i.PaymentSourceTypes.SOFORT, i.PaymentSourceTypes.GIROPAY, i.PaymentSourceTypes.SEPA_DEBIT, i.PaymentSourceTypes.PAYSAFE_CARD],
                m = (e, t, n, r) => {
                    if (null == e) return "";
                    let a = (0, s.getI18NCountryName)(e);
                    if (t === u.CurrencyCodes.EUR) return n ? c.default.Messages.LOCALIZED_PRICING_NOTICE_GENERALIZED_PAYMENT_METHODS_PROMO.format({
                        country: a
                    }) : c.default.Messages.LOCALIZED_PRICING_NOTICE_NO_LOWERED_PRICE.format({
                        currencyISOCode: t.toUpperCase()
                    });
                    return r ? c.default.Messages.NOTICE_NITRO_PRICE_CHANGED.format({
                        countryName: a
                    }) : c.default.Messages.LOCALIZED_PRICING_NOTICE.format({
                        country: a
                    })
                },
                I = e => {
                    let {
                        localizedPricingPromo: t,
                        subscription: n,
                        forceSingleLine: r = !1,
                        userLocale: m
                    } = e, {
                        countryCode: I,
                        amount: p,
                        currency: P,
                        paymentSourceTypes: N
                    } = t, S = 0 !== N.length, T = E(I), A = (0, l.formatPrice)(p, P, {
                        style: "currency",
                        currency: P,
                        currencyDisplay: "symbol",
                        localeOverride: T
                    }), C = c.default.Messages.LOCALIZED_PRICING_BANNER_BODY_NEW_CURRENCY.format({
                        helpCenterLink: a.default.getArticleURL(i.HelpdeskArticles.LOCALIZED_PRICING),
                        currencyISOCode: P.toUpperCase(),
                        localizedPriceWithCurrencySymbol: A
                    });
                    if (d.has(P) && (C = c.default.Messages.LOCALIZED_PRICING_BANNER_BODY_EXISTING_CURRENCY.format({
                            helpCenterLink: a.default.getArticleURL(i.HelpdeskArticles.LOCALIZED_PRICING),
                            localizedPriceWithCurrencySymbol: A
                        })), o.has(P) && (C = c.default.Messages.LOCALIZED_PRICING_BANNER_BODY_NEW_CURRENCY_WITH_AMBIGUOUS_SYMBOL.format({
                            helpCenterLink: a.default.getArticleURL(i.HelpdeskArticles.LOCALIZED_PRICING),
                            currencyISOCode: P.toUpperCase(),
                            localizedPriceWithCurrencySymbol: A
                        })), null != n && !n.hasPremiumNitroMonthly && (C = c.default.Messages.LOCALIZED_PRICING_BANNER_BODY_WITHOUT_PRICE.format({
                            helpCenterLink: a.default.getArticleURL(i.HelpdeskArticles.LOCALIZED_PRICING),
                            currencyISOCode: P.toUpperCase()
                        })), P === u.CurrencyCodes.EUR && (C = r ? c.default.Messages.LOCALIZED_PRICING_BANNER_NO_LOWERED_PRICE_SINGLE_STRING.format({
                            country: (0, s.getI18NCountryName)(I),
                            currencyISOCode: P.toUpperCase(),
                            helpCenterLink: a.default.getArticleURL(i.HelpdeskArticles.LOCALIZED_PRICING)
                        }) : c.default.Messages.LOCALIZED_PRICING_BANNER_NO_LOWERED_PRICE.format({
                            currencyISOCode: P.toUpperCase(),
                            helpCenterLink: a.default.getArticleURL(i.HelpdeskArticles.LOCALIZED_PRICING)
                        })), S) {
                        let e = _.filter(e => N.includes(e)),
                            t = N.filter(e => !_.includes(e)),
                            n = [...e, ...t],
                            r = n.slice(0, 2).map(e => {
                                var t, n;
                                return null !== (n = null === (t = f[e]) || void 0 === t ? void 0 : t.call(f)) && void 0 !== n ? n : c.default.Messages.PAYMENT_SOURCE_UNKNOWN
                            });
                        N.length >= 3 && r.push(c.default.Messages.LOCALIZED_PRICING_MORE_NEW_WAYS_TO_PAY);
                        let s = new Intl.ListFormat(m, {
                            style: "short",
                            type: "conjunction"
                        });
                        C = c.default.Messages.LOCALIZED_PRICING_PAYMENT_METHODS_PROMO.format({
                            helpCenterLink: a.default.getArticleURL(i.HelpdeskArticles.LOCALIZED_PRICING),
                            paymentMethods: s.format(r)
                        })
                    }
                    return {
                        localizedPricingBannerHeader: c.default.Messages.LOCALIZED_PRICING_BANNER_HEADER.format({
                            country: (0, s.getI18NCountryName)(I)
                        }),
                        localizedPricingBannerBody: C,
                        localizedPricingBannerLinkOnly: c.default.Messages.LOCALIZED_PRICING_BANNER_LINK_ONLY.format({
                            helpCenterLink: a.default.getArticleURL(i.HelpdeskArticles.LOCALIZED_PRICING)
                        }),
                        localizedPricingBannerSubNotif: S ? void 0 : c.default.Messages.LOCALIZED_PRICING_BANNER_SUB_NOTIF
                    }
                },
                E = e => {
                    let t = r.default.find(t => t.alpha2 === e);
                    return null == t ? void 0 : t.localeForICU
                }
        },
        391533: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var r = (0, n("862205").createExperiment)({
                kind: "user",
                id: "2023-05_localized_pricing_turkey_notice",
                label: "Localized Pricing Turkey Notice",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enable Turkey Notice",
                    config: {
                        enabled: !0
                    }
                }]
            })
        },
        916187: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                },
                isPaymentSourceEligibleForMultiMonthPlans: function() {
                    return u
                }
            });
            var r = n("976979"),
                s = n("862205"),
                a = n("646718"),
                l = (0, s.createExperiment)({
                    kind: "user",
                    id: "2022-02_multi_month_plans",
                    label: "Multi Month Plans",
                    defaultConfig: {
                        newPlans: []
                    },
                    treatments: [{
                        id: 1,
                        label: "3 and 6 Month Plans",
                        config: {
                            newPlans: [a.SubscriptionPlans.PREMIUM_6_MONTH_TIER_2, a.SubscriptionPlans.PREMIUM_3_MONTH_TIER_2]
                        }
                    }, {
                        id: 2,
                        label: "3 Month Plan Only",
                        config: {
                            newPlans: [a.SubscriptionPlans.PREMIUM_3_MONTH_TIER_2]
                        }
                    }]
                });
            let i = new Set([r.CountryCodes.US, r.CountryCodes.CA]);

            function u(e) {
                return null == e || i.has(e.country)
            }
        },
        809071: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                updateSubscriptionInvoicePreview: function() {
                    return f
                },
                useSubscriptionInvoicePreview: function() {
                    return I
                },
                useGetSubscriptionInvoice: function() {
                    return E
                },
                getItemUnitPriceWithDiscount: function() {
                    return p
                }
            });
            var r = n("884691"),
                s = n("446674"),
                a = n("872717"),
                l = n("448993"),
                i = n("195358"),
                u = n("521012"),
                c = n("719923"),
                o = n("49111");
            async function d(e) {
                let {
                    items: t,
                    paymentSourceId: n,
                    trialId: r,
                    code: s,
                    applyEntitlements: u = !1,
                    currency: d,
                    renewal: f,
                    metadata: _
                } = e;
                t = (0, c.coerceExistingItemsToNewItemInterval)(t);
                let m = {
                    items: t.map(e => {
                        let {
                            planId: t,
                            ...n
                        } = e;
                        return {
                            ...n,
                            plan_id: t
                        }
                    }),
                    payment_source_id: n,
                    trial_id: r,
                    code: s,
                    apply_entitlements: u,
                    currency: d,
                    renewal: f,
                    metadata: _
                };
                try {
                    let e = await a.default.post({
                        url: o.Endpoints.BILLING_SUBSCRIPTIONS_PREVIEW,
                        body: m,
                        oldFormErrors: !0
                    });
                    return i.default.createInvoiceFromServer(e.body)
                } catch (e) {
                    throw new l.BillingError(e)
                }
            }
            async function f(e) {
                var t;
                let {
                    subscriptionId: n,
                    items: r,
                    paymentSourceId: s,
                    renewal: u,
                    currency: d,
                    applyEntitlements: f = !1,
                    analyticsLocations: _,
                    analyticsLocation: m
                } = e;
                null != r && (r = (0, c.coerceExistingItemsToNewItemInterval)(r));
                let I = {
                    items: null === (t = r) || void 0 === t ? void 0 : t.map(e => {
                        let {
                            planId: t,
                            ...n
                        } = e;
                        return {
                            ...n,
                            plan_id: t
                        }
                    }),
                    payment_source_id: s,
                    renewal: u,
                    apply_entitlements: f,
                    currency: d
                };
                try {
                    let e = await a.default.patch({
                        url: o.Endpoints.BILLING_SUBSCRIPTION_PREVIEW(n),
                        query: {
                            location: m,
                            location_stack: _
                        },
                        body: I,
                        oldFormErrors: !0
                    });
                    return i.default.createInvoiceFromServer(e.body)
                } catch (e) {
                    throw new l.BillingError(e)
                }
            }
            async function _(e) {
                let {
                    subscriptionId: t,
                    preventFetch: n
                } = e;
                if (n) return null;
                let r = await a.default.get({
                    url: o.Endpoints.BILLING_SUBSCRIPTION_INVOICE(t),
                    oldFormErrors: !0
                });
                return i.default.createInvoiceFromServer(r.body)
            }

            function m(e, t) {
                let {
                    preventFetch: n = !1
                } = e, [a, l] = (0, r.useState)(null), [i, c] = (0, r.useState)(null), o = (0, s.useStateFromStores)([u.default], () => u.default.getSubscriptions());
                return (0, r.useEffect)(() => {
                    let e = !1;
                    async function r() {
                        try {
                            c(null), l(null);
                            let n = await t();
                            !e && l(n)
                        } catch (t) {
                            !e && c(t)
                        }
                    }
                    return !n && r(), () => {
                        e = !0
                    }
                }, [n, t, o]), [a, i]
            }

            function I(e) {
                if ("subscriptionId" in e && null == e.subscriptionId) {
                    let {
                        subscriptionId: t,
                        ...n
                    } = e;
                    e = n
                }
                let t = (0, r.useCallback)(() => "subscriptionId" in e ? f(e) : "items" in e ? d(e) : null, [JSON.stringify(e)]);
                return m(e, t)
            }

            function E(e) {
                let t = (0, r.useCallback)(() => _(e), [JSON.stringify(e)]);
                return m(e, t)
            }

            function p(e) {
                let t = e.subscriptionPlanPrice;
                return e.discounts.forEach(n => {
                    let r = n.amount / e.quantity;
                    t -= r
                }), t
            }
        },
        968532: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CheckoutV2ChildExperiments: function() {
                    return s
                },
                default: function() {
                    return i
                }
            });
            var r, s, a = n("862205");
            (r = s || (s = {}))[r.NONE = 0] = "NONE", r[r.BROWSER_AUTOFILL = 1] = "BROWSER_AUTOFILL", r[r.MERGE_PLAN_SELECT_TO_REVIEW = 2] = "MERGE_PLAN_SELECT_TO_REVIEW";
            let l = (0, a.createExperiment)({
                id: "2023-08_checkout_v2_parent",
                label: "Checkout V2 Parent",
                kind: "user",
                defaultConfig: {
                    experiment: s.NONE
                },
                treatments: [{
                    id: 1,
                    label: "Browser Autofill",
                    config: {
                        experiment: s.BROWSER_AUTOFILL
                    }
                }, {
                    id: 2,
                    label: "Merge Plan Select to Review",
                    config: {
                        experiment: s.MERGE_PLAN_SELECT_TO_REVIEW
                    }
                }]
            });
            var i = l
        },
        921149: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useIsPrepaidPaymentPastDue: function() {
                    return f
                }
            });
            var r = n("866227"),
                s = n.n(r),
                a = n("446674"),
                l = n("357957"),
                i = n("10514"),
                u = n("521012"),
                c = n("719923"),
                o = n("49111"),
                d = n("843455");

            function f() {
                let e = (0, a.useStateFromStores)([u.default], () => u.default.getPremiumTypeSubscription()),
                    t = (0, a.useStateFromStores)([i.default], () => null != e && null != e.planIdFromItems ? i.default.get(null == e ? void 0 : e.planIdFromItems) : null),
                    n = (0, a.useStateFromStores)([l.default], () => null != e && null != e.paymentSourceId ? l.default.getPaymentSource(e.paymentSourceId) : null, [e]),
                    r = null != n && d.PREPAID_PAYMENT_SOURCES.has(n.type),
                    f = (null == e ? void 0 : e.status) === o.SubscriptionStatusTypes.PAST_DUE ? s().diff(s(e.currentPeriodStart), "days") : 0;
                return !!(null != e && null != t && (0, c.isPremiumBaseSubscriptionPlan)(t.id)) && r && f >= 0 && f <= (0, c.getBillingGracePeriodDays)(e) && e.status === o.SubscriptionStatusTypes.PAST_DUE && !e.isPurchasedExternally
            }
        },
        279171: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useShouldShowLegacyPricingNotice: function() {
                    return E
                },
                default: function() {
                    return p
                }
            });
            var r = n("37983");
            n("884691");
            var s = n("414456"),
                a = n.n(s),
                l = n("627445"),
                i = n.n(l),
                u = n("423487"),
                c = n("701909"),
                o = n("35188"),
                d = n("391533"),
                f = n("296253"),
                _ = n("49111"),
                m = n("782340"),
                I = n("712109");

            function E() {
                let e = (0, f.default)(),
                    {
                        enabled: t
                    } = o.default.useExperiment({
                        location: "5ebfcf_1"
                    }, {
                        autoTrackExposure: !1
                    }),
                    {
                        enabled: n
                    } = d.default.useExperiment({
                        location: "5ebfcf_2"
                    }, {
                        autoTrackExposure: !1
                    });
                return null != e && ("PL" === e ? t : "TR" === e && n)
            }
            var p = e => {
                var t, n;
                let {
                    fromBoostCancelModal: s,
                    className: l
                } = e, o = (0, f.default)(), d = E();
                if (!d) return null;
                return i(null != o, "Subscription billing country should not be null"), (0, r.jsxs)("div", {
                    className: a(I.noticeRoot, l),
                    children: [(0, r.jsx)("div", {
                        className: I.iconContainer,
                        children: (0, r.jsx)(u.default, {
                            className: I.infoIcon
                        })
                    }), (0, r.jsx)("div", {
                        className: I.text,
                        children: (t = o, n = s, "PL" === t ? n ? m.default.Messages.LOCALIZED_PRICING_PLN_LEGACY_PRICING_BOOST_WARNING : m.default.Messages.LOCALIZED_PRICING_PLN_LEGACY_PRICING_WARNING : "TR" === t ? n ? m.default.Messages.LOCALIZED_PRICING_TRY_LEGACY_PRICING_BOOST_WARNING : m.default.Messages.LOCALIZED_PRICING_TRY_LEGACY_PRICING_WARNING : n ? m.default.Messages.LOCALIZED_PRICING_LEGACY_PRICING_BOOST_WARNING : m.default.Messages.LOCALIZED_PRICING_LEGACY_PRICING_WARNING).format({
                            helpCenterLink: c.default.getArticleURL(_.HelpdeskArticles.LOCALIZED_PRICING)
                        })
                    })]
                })
            }
        },
        824734: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var r = n("37983");
            n("884691");
            var s = n("414456"),
                a = n.n(s),
                l = n("153160"),
                i = n("646718"),
                u = n("782340"),
                c = n("552033");

            function o(e) {
                let {
                    price: t,
                    currency: n,
                    intervalType: s,
                    className: o,
                    intervalCount: d = 1,
                    isPrepaidPaymentSource: f = !1
                } = e, _ = (0, l.formatPrice)(t, n), m = null;
                return s === i.SubscriptionIntervalTypes.YEAR ? m = u.default.Messages.BILLING_PRICE_PER_YEAR_BOLD.format({
                    price: _
                }) : s === i.SubscriptionIntervalTypes.MONTH && 1 === d ? m = u.default.Messages.BILLING_PRICE_PER_MONTH_BOLD.format({
                    price: _
                }) : s === i.SubscriptionIntervalTypes.MONTH && d > 1 && (m = u.default.Messages.BILLING_PRICE_PER_MULTI_MONTHS_BOLD.format({
                    price: _,
                    intervalCount: d
                })), (0, r.jsx)("div", {
                    className: a(c.pricePerInterval, o),
                    "data-testid": "PricePerInterval-".concat(n),
                    children: null == s || f ? (0, r.jsx)("strong", {
                        children: _
                    }) : m
                })
            }
        },
        705820: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var r = n("37983"),
                s = n("884691"),
                a = n("77078"),
                l = n("850391"),
                i = n("149022"),
                u = n("681060"),
                c = n("570697"),
                o = n("233069"),
                d = n("49111"),
                f = n("782340"),
                _ = n("809331");
            let m = (0, o.createChannelRecord)({
                id: "1",
                type: d.ChannelTypes.DM
            });

            function I(e) {
                let {
                    sectionTitle: t,
                    errors: n,
                    onTextChange: o,
                    pendingText: d,
                    placeholder: I,
                    currentText: E,
                    disabled: p = !1
                } = e, [P, N] = s.useState(null != d ? d : E), [S, T] = s.useState((0, i.toRichValue)(P)), A = s.useRef(!1);
                return s.useEffect(() => {
                    A.current = !0
                }, []), s.useEffect(() => {
                    if (void 0 === d) {
                        let e = (0, i.toRichValue)(E);
                        N(E), T(e)
                    }
                }, [d, E]), (0, r.jsx)("div", {
                    className: _.body,
                    children: (0, r.jsxs)(c.default, {
                        title: t,
                        errors: n,
                        disabled: p,
                        children: [(0, r.jsx)(u.default, {
                            innerClassName: _.textArea,
                            maxCharacterCount: 190,
                            onChange: function(e, t, n) {
                                t !== P && (N(t), T(n), o(t))
                            },
                            placeholder: I,
                            channel: m,
                            textValue: P,
                            richValue: S,
                            type: l.ChatInputTypes.CUSTOM_GIFT,
                            onBlur: () => {
                                A.current = !1
                            },
                            onFocus: () => {
                                A.current = !0
                            },
                            focused: A.current,
                            onSubmit: function() {
                                return new Promise(e => {
                                    e({
                                        shouldClear: !1,
                                        shouldRefocus: !0
                                    })
                                })
                            }
                        }), (0, r.jsx)(a.HiddenVisually, {
                            children: f.default.Messages.MAXIMUM_LENGTH.format({
                                maxLength: 190
                            })
                        })]
                    })
                })
            }
        },
        623003: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var r = n("37983"),
                s = n("884691"),
                a = n("414456"),
                l = n.n(a),
                i = n("849085");
            let u = s.forwardRef(function(e, t) {
                let {
                    isActive: n,
                    children: s
                } = e;
                return (0, r.jsx)("div", {
                    className: l(i.wrapper, {
                        [i.wrapperActive]: n
                    }),
                    ref: t,
                    children: s
                })
            });
            var c = u
        },
        208559: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GiftAnimationOptions: function() {
                    return N
                }
            });
            var r = n("37983"),
                s = n("884691"),
                a = n("77078"),
                l = n("642906"),
                i = n("68238"),
                u = n("659632"),
                c = n("210721"),
                o = n("78345"),
                d = n("53253"),
                f = n("65324"),
                _ = n("64798"),
                m = n("782340"),
                I = n("734203");
            let E = [o.PremiumGiftStyles.BOX, o.PremiumGiftStyles.CUP, o.PremiumGiftStyles.SNOWGLOBE],
                p = [o.PremiumGiftStyles.STANDARD_BOX, o.PremiumGiftStyles.CAKE, o.PremiumGiftStyles.COFFEE, o.PremiumGiftStyles.CHEST],
                P = () => (0, r.jsxs)("div", {
                    className: I.giftBoxHeaderContainer,
                    children: [(0, r.jsx)(a.Heading, {
                        variant: "heading-deprecated-12/semibold",
                        className: I.giftBoxHeaderText,
                        children: m.default.Messages.SEASONAL_GIFTING_CUSTOMIZE_YOUR_GIFT_BOX
                    }), (0, r.jsx)(a.Tooltip, {
                        text: m.default.Messages.SEASONAL_GIFTING_INFO_TOOLTIP,
                        position: "top",
                        children: e => (0, r.jsx)(a.Clickable, {
                            ...e,
                            className: I.infoIconContainer,
                            "aria-label": m.default.Messages.SEASONAL_GIFTING_INFO_TOOLTIP,
                            children: (0, r.jsx)(i.default, {
                                className: I.infoIcon
                            })
                        })
                    })]
                }),
                N = e => {
                    let {
                        selectedGiftStyle: t,
                        setSelectedGiftStyle: n
                    } = e, {
                        giftRecipient: i
                    } = (0, l.usePaymentContext)(), [o, N] = s.useState(!1), S = s.useRef(null), T = (0, a.useRadioGroup)({
                        orientation: "horizontal"
                    }), {
                        enabled: A
                    } = d.default.getCurrentConfig({
                        location: "premiumGiftSelect_GiftAnimationOptions"
                    }), C = (0, u.isCustomGiftEnabled)(i), O = null;
                    return A ? O = E : C && (O = p), (0, r.jsxs)("div", {
                        children: [A && (0, r.jsx)(P, {}), C && (0, r.jsx)("div", {
                            className: I.giftMainAnimation,
                            children: null != t ? (0, r.jsx)(f.default, {
                                giftStyle: t,
                                defaultAnimationState: c.AnimationState.ACTION,
                                idleAnimationState: c.AnimationState.LOOP,
                                shouldAnimate: !0,
                                className: I.animation
                            }) : (0, r.jsx)(a.Spinner, {
                                className: I.spinner
                            })
                        }), (0, r.jsx)("div", {
                            tabIndex: null != t || o ? void 0 : 0,
                            onFocus: e => {
                                var t;
                                e.target === e.currentTarget && (null === (t = S.current) || void 0 === t || t.focus())
                            },
                            className: I.giftBoxOptionContainer,
                            "aria-label": m.default.Messages.SEASONAL_GIFTING_CUSTOMIZE_YOUR_GIFT_BOX,
                            ...T,
                            children: null != O && O.map((e, s) => (0, r.jsx)(_.GiftStaticOption, {
                                isSelected: t === e,
                                giftStyle: e,
                                setSelectedGiftStyle: n,
                                ref: 0 === s ? S : null,
                                onFocus: () => N(!0),
                                onBlur: () => N(!1)
                            }, e))
                        }), (0, r.jsx)("div", {
                            className: I.selectPlanDivider
                        })]
                    })
                }
        },
        64798: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GiftStaticOption: function() {
                    return _
                }
            });
            var r = n("37983"),
                s = n("884691"),
                a = n("77078"),
                l = n("78345"),
                i = n("107342"),
                u = n("361396"),
                c = n("291059"),
                o = n("356057"),
                d = n("892712");
            let f = {
                    [l.PremiumGiftStyles.STANDARD_BOX]: u,
                    [l.PremiumGiftStyles.CAKE]: c,
                    [l.PremiumGiftStyles.CHEST]: o,
                    [l.PremiumGiftStyles.COFFEE]: d,
                    [l.PremiumGiftStyles.SNOWGLOBE]: "",
                    [l.PremiumGiftStyles.BOX]: "",
                    [l.PremiumGiftStyles.CUP]: ""
                },
                _ = s.forwardRef(function(e, t) {
                    let {
                        isSelected: n,
                        giftStyle: s,
                        setSelectedGiftStyle: l,
                        onFocus: u,
                        onBlur: c
                    } = e;
                    return (0, r.jsx)(a.Clickable, {
                        innerRef: t,
                        className: i.clickable,
                        onClick: () => l(s),
                        onFocus: u,
                        onBlur: c,
                        children: (0, r.jsx)("img", {
                            style: {
                                width: "100%",
                                height: "100%"
                            },
                            alt: "",
                            src: f[s],
                            className: n ? i.customGiftBoxHighlighted : i.customGiftBox
                        })
                    })
                })
        },
        177998: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var r = n("37983");
            n("884691");
            var s = n("77078"),
                a = n("782340"),
                l = n("816318"),
                i = e => {
                    let {
                        onClick: t
                    } = e;
                    return (0, r.jsx)(s.Anchor, {
                        onClick: t,
                        className: l.link,
                        children: a.default.Messages.BACK
                    })
                }
        },
        570727: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PremiumSwitchPlanSelectBody: function() {
                    return k
                },
                PremiumSwitchPlanSelectFooter: function() {
                    return w
                }
            });
            var r = n("37983"),
                s = n("884691"),
                a = n("627445"),
                l = n.n(a),
                i = n("446674"),
                u = n("77078"),
                c = n("405932"),
                o = n("798609"),
                d = n("642906"),
                f = n("85336"),
                _ = n("883558"),
                m = n("10514"),
                I = n("521012"),
                E = n("659632"),
                p = n("701909"),
                P = n("773336"),
                N = n("719923"),
                S = n("153160"),
                T = n("916187"),
                A = n("968532"),
                C = n("15733"),
                O = n("154889"),
                R = n("917247"),
                M = n("279171"),
                g = n("883662"),
                L = n("824734"),
                y = n("705820"),
                h = n("208559"),
                v = n("177998"),
                x = n("661128"),
                b = n("26785"),
                G = n("617223"),
                j = n("646718"),
                U = n("49111"),
                D = n("843455"),
                B = n("782340"),
                F = n("33769");

            function k(e) {
                var t, n, a, f, _, I;
                let {
                    premiumSubscription: P,
                    skuId: A,
                    selectedPlanId: v,
                    setSelectedPlanId: x,
                    isGift: k = !1,
                    isSeasonalGift: w = !1,
                    selectedGiftStyle: Y,
                    setSelectedGiftStyle: H,
                    priceOptions: W,
                    planOptions: Z,
                    eligibleForMultiMonthPlans: K,
                    referralTrialOfferId: V,
                    subscriptionPeriodEnd: z,
                    showTotal: X = !0,
                    customGiftMessage: J,
                    setCustomGiftMessage: q,
                    discountInvoiceItems: Q
                } = e, {
                    activeSubscription: $,
                    setSelectedPlanId: ee,
                    selectedSkuId: et,
                    giftRecipient: en,
                    selectedPlan: er,
                    priceOptions: es
                } = (0, d.usePaymentContext)(), ea = (0, E.isCustomGiftEnabled)(en);
                A = null != A ? A : et, l(void 0 !== (P = null != P ? P : $), "should not be undefined");
                let [el, ei] = (0, i.useStateFromStoresArray)([m.default], () => [null != P ? m.default.get(P.planId) : null, null != v ? m.default.get(v) : null]), eu = (0, R.usePremiumTrialOffer)(V), ec = null == eu ? void 0 : eu.subscription_trial, eo = (0, O.usePremiumDiscountOffer)(), ed = null == eo ? void 0 : null === (t = eo.discount) || void 0 === t ? void 0 : t.plan_ids, ef = null != ei ? ei : er, e_ = s.useCallback(e => {
                    null != x ? x(e) : ee(e)
                }, [x, ee]), em = null != W ? W : es;
                l(null != em, "Price option has to be set");
                let eI = null != eu && (0, j.SubscriptionTrials)[eu.trial_id].skus.includes(A),
                    eE = null != eo && Z.some(e => null == ed ? void 0 : ed.includes(e)),
                    ep = (0, N.getPrice)(j.SubscriptionPlans.PREMIUM_MONTH_TIER_2, !1, k, em);
                s.useEffect(() => {
                    K && T.default.trackExposure({
                        location: "5f89bb_1"
                    })
                }, [K]);
                let eP = (null == ef ? void 0 : ef.id) != null && Z.includes(ef.id);
                s.useEffect(() => {
                    if (!eP) {
                        if (null == el || k) e_(Z[0]);
                        else if (null != el) {
                            let e = Z.find(e => e !== el.id);
                            null != e && e_(e)
                        }
                    }
                }, [eP, k, Z, el, e_]);
                let eN = !ea && (k || !eI && !eE) && eP && X,
                    eS = (0, u.useRadioGroup)(),
                    eT = (null == ef ? void 0 : ef.id) != null ? (0, N.getPrice)(ef.id, !1, k, em) : void 0,
                    {
                        ipCountryCode: eA
                    } = (0, C.default)(),
                    eC = "HR" === eA && null != eT && eT.currency === D.CurrencyCodes.EUR,
                    eO = (0, N.isPrepaidPaymentSource)(em.paymentSourceId),
                    eR = (null == ec ? void 0 : ec.interval) === j.SubscriptionIntervalTypes.DAY ? B.default.Messages.BILLING_TRIAL_2_WEEK_PERIOD : B.default.Messages.BILLING_TRIAL_30_DAY_PERIOD,
                    eM = !k && (eE || null != ec && eI && null != z),
                    eg = null == Q ? void 0 : null === (f = Q.find(e => e.subscriptionPlanId === j.SubscriptionPlans.PREMIUM_MONTH_TIER_2)) || void 0 === f ? void 0 : null === (a = f.discounts) || void 0 === a ? void 0 : null === (n = a.find(e => e.type === o.InvoiceDiscountTypes.SUBSCRIPTION_PLAN)) || void 0 === n ? void 0 : n.amount;
                return (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsxs)("div", {
                        className: ea ? F.stepBodyCustomGift : F.stepBody,
                        children: [(0, r.jsxs)("div", {
                            className: ea ? F.bodyColumnMiddle : void 0,
                            children: [(0, r.jsx)(M.default, {
                                fromBoostCancelModal: !1,
                                className: F.legacyPricingNotice
                            }), (w || ea) && null != Y && (0, r.jsx)(h.GiftAnimationOptions, {
                                selectedGiftStyle: Y,
                                setSelectedGiftStyle: H
                            })]
                        }), (0, r.jsxs)("div", {
                            className: ea ? F.bodyColumnRight : void 0,
                            children: [ea && (0, r.jsx)(G.SendGiftToUser, {
                                giftRecipient: en
                            }), (() => {
                                if (ea && null != q) return (0, r.jsx)(y.default, {
                                    sectionTitle: B.default.Messages.GIFT_OPTIONAL_MESSAGE,
                                    onTextChange: e => q(e),
                                    pendingText: J,
                                    currentText: J
                                })
                            })(), null != el && !k && (0, r.jsx)("div", {
                                className: F.bodyText,
                                children: function(e, t) {
                                    let n = B.default.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_MONTH,
                                        r = B.default.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_1_YEAR,
                                        s = (() => {
                                            switch (e.interval) {
                                                case j.SubscriptionIntervalTypes.YEAR:
                                                    return n;
                                                case j.SubscriptionIntervalTypes.MONTH:
                                                default:
                                                    return r
                                            }
                                        })(),
                                        a = e.skuId;
                                    switch (t) {
                                        case j.PremiumSubscriptionSKUs.TIER_0:
                                            switch (a) {
                                                case j.PremiumSubscriptionSKUs.TIER_1:
                                                    return B.default.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_TIER_1_TO_TIER_0;
                                                case j.PremiumSubscriptionSKUs.TIER_2:
                                                    return B.default.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_TIER_0;
                                                default:
                                                    return s
                                            }
                                        case j.PremiumSubscriptionSKUs.TIER_1:
                                            switch (a) {
                                                case j.PremiumSubscriptionSKUs.TIER_0:
                                                    return B.default.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_1;
                                                case j.PremiumSubscriptionSKUs.TIER_2:
                                                    return B.default.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_TIER_1;
                                                default:
                                                    return s
                                            }
                                        case j.PremiumSubscriptionSKUs.TIER_2:
                                            switch (a) {
                                                case j.PremiumSubscriptionSKUs.TIER_0:
                                                case j.PremiumSubscriptionSKUs.TIER_1:
                                                    return B.default.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_2;
                                                case j.PremiumSubscriptionSKUs.TIER_2:
                                                    return e.interval === j.SubscriptionIntervalTypes.MONTH ? B.default.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_2_YEAR.format({
                                                        numFreeGuildSubscriptions: j.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM
                                                    }) : s;
                                                default:
                                                    return s
                                            }
                                        default:
                                            return s
                                    }
                                }(el, A)
                            }), (_ = eI, I = eE, ea ? (0, r.jsx)(u.FormTitle, {
                                children: B.default.Messages.GIFT_SUBSCRIPTION_SELECTION
                            }) : eM ? _ ? (0, r.jsxs)("div", {
                                children: [(0, r.jsx)(u.Text, {
                                    variant: "text-sm/normal",
                                    className: F.trialPlanSelectHeader,
                                    children: B.default.Messages.BILLING_TRIAL_PAYMENT_MODAL_INFO.format({
                                        trialEnd: z,
                                        trialPeriod: eR
                                    })
                                }), (0, r.jsx)("hr", {
                                    className: F.planSelectSeparator
                                })]
                            }) : I && null != eg && null != ep ? (0, r.jsxs)("div", {
                                children: [(0, r.jsx)(u.Text, {
                                    variant: "text-sm/normal",
                                    className: F.trialPlanSelectHeader,
                                    children: B.default.Messages.BILLING_DISCOUNT_PAYMENT_MODAL_INFO.format({
                                        discountedPrice: (0, S.formatPrice)(ep.amount - eg, ep.currency),
                                        regularPrice: (0, S.formatPrice)(ep.amount, ep.currency)
                                    })
                                }), (0, r.jsx)("hr", {
                                    className: F.planSelectSeparator
                                })]
                            }) : void 0 : (0, r.jsx)("div", {
                                className: F.selectPlanChooseTitle,
                                children: B.default.Messages.BILLING_SWITCH_PLAN_CHOOSE_ONE
                            })), (0, r.jsx)("div", {
                                ...eS,
                                children: Z.map(e => (0, r.jsx)(b.default, {
                                    planId: e,
                                    isGift: k,
                                    premiumSubscription: k ? null : null != P ? P : null,
                                    selectPlan: e_,
                                    selected: (null == ef ? void 0 : ef.id) === e,
                                    priceOptions: em,
                                    shouldShowUpdatedPaymentModal: eM,
                                    isEligibleForDiscount: eE,
                                    discountAmountOff: eg
                                }, e))
                            }), (0, r.jsx)("div", {
                                children: eN && null != ef && null != eT ? (0, r.jsxs)("div", {
                                    children: [(0, r.jsx)("div", {
                                        className: F.selectPlanDivider
                                    }), (0, r.jsx)(g.PremiumInvoiceTableTotalRow, {
                                        label: B.default.Messages.BILLING_PAYMENT_BREAKDOWN_TOTAL,
                                        value: (0, r.jsx)(L.default, {
                                            price: eT.amount,
                                            currency: eT.currency,
                                            intervalType: k ? null : ef.interval,
                                            intervalCount: ef.intervalCount,
                                            isPrepaidPaymentSource: eO
                                        }),
                                        className: F.selectPlanTotalRow
                                    })]
                                }) : null
                            }), eC && (0, r.jsx)(c.default, {
                                message: B.default.Messages.LOCALIZED_PRICING_HRK_EURO_WARNING.format({
                                    kunaPriceWithCurrency: (0, S.formatPrice)(7.5345 * eT.amount, D.CurrencyCodes.HRK)
                                })
                            }), !k && !eM && X && (0, r.jsx)(c.default, {
                                message: B.default.Messages.BILLING_FINAL_PRICE_MAY_CHANGE.format({
                                    documentationLink: p.default.getArticleURL(U.HelpdeskArticles.LOCALIZED_PRICING)
                                })
                            })]
                        })]
                    })
                })
            }

            function w(e) {
                let {
                    onStepChange: t,
                    selectedPlanId: n,
                    isGift: s,
                    paymentSources: a,
                    onBackClick: l,
                    showBackButton: i,
                    planOptions: c,
                    shouldRenderUpdatedPaymentModal: o = !1,
                    isTrial: f
                } = e, {
                    paymentSources: _,
                    selectedPlan: m
                } = (0, d.usePaymentContext)();
                return a = null != a ? a : _, n = null != n ? n : null == m ? void 0 : m.id, (0, r.jsxs)(r.Fragment, {
                    children: [null != n && c.includes(n) ? (0, r.jsx)(Y, {
                        paymentSources: a,
                        onStepChange: t,
                        selectedPlanId: n,
                        isGift: s,
                        shouldRenderUpdatedPaymentModal: o,
                        isTrial: f
                    }) : (0, r.jsx)(u.Button, {
                        disabled: !0,
                        children: B.default.Messages.SELECT
                    }), i ? (0, r.jsx)(v.default, {
                        onClick: l
                    }) : null]
                })
            }

            function Y(e) {
                let {
                    onStepChange: t,
                    selectedPlanId: n,
                    isGift: s,
                    paymentSources: a,
                    shouldRenderUpdatedPaymentModal: l,
                    isTrial: c
                } = e, o = (0, i.useStateFromStores)([I.default], () => I.default.getPremiumTypeSubscription()), {
                    hasEntitlements: d
                } = (0, x.useSubscriptionEntitlements)(n, s), m = null != o && null != o.paymentSourceId || Object.keys(a).length > 0 || d && !c;
                var E = l ? B.default.Messages.NEXT : B.default.Messages.SELECT,
                    p = f.Step.ADD_PAYMENT_STEPS;
                return m ? p = f.Step.REVIEW : (0, P.isDesktop)() && function() {
                    let {
                        experiment: e
                    } = A.default.getCurrentConfig({
                        location: "5f89bb_2"
                    });
                    if (e === A.CheckoutV2ChildExperiments.BROWSER_AUTOFILL) {
                        let {
                            enabled: e
                        } = _.default.getCurrentConfig({
                            location: "5f89bb_3"
                        }, {
                            autoTrackExposure: !0
                        });
                        return e
                    }
                    return !1
                }() && (p = f.Step.AWAITING_BROWSER_CHECKOUT, E = B.default.Messages.CONTINUE_IN_BROWSER), (0, r.jsx)(u.Button, {
                    onClick: () => t(p),
                    children: E
                })
            }
        },
        26785: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            });
            var r = n("37983");
            n("884691");
            var s = n("414456"),
                a = n.n(s),
                l = n("627445"),
                i = n.n(l),
                u = n("446674"),
                c = n("669491"),
                o = n("77078"),
                d = n("642906"),
                f = n("915639"),
                _ = n("10514"),
                m = n("659632"),
                I = n("719923"),
                E = n("153160"),
                p = n("646718"),
                P = n("782340"),
                N = n("419063");

            function S(e) {
                let {
                    premiumSubscription: t,
                    planId: n,
                    selectPlan: s,
                    selected: l,
                    isGift: S,
                    priceOptions: T,
                    shouldShowUpdatedPaymentModal: A,
                    isEligibleForDiscount: C,
                    discountAmountOff: O
                } = e, R = (0, u.useStateFromStores)([f.default], () => f.default.locale), M = (0, u.useStateFromStores)([_.default], () => _.default.get(n)), {
                    giftRecipient: g
                } = (0, d.usePaymentContext)(), L = (0, m.isCustomGiftEnabled)(g);
                i(null != M, "Missing subscriptionPlan");
                let y = null != t && t.planId === n,
                    h = y || n === p.SubscriptionPlans.PREMIUM_MONTH_TIER_2 && null != t && [p.SubscriptionPlans.PREMIUM_YEAR_TIER_0, p.SubscriptionPlans.PREMIUM_YEAR_TIER_1].includes(t.planId),
                    v = p.DISCOUNTS[n],
                    x = (0, I.getPrice)(n, !1, S, T),
                    b = (0, I.isPrepaidPaymentSource)(T.paymentSourceId),
                    G = null != v && !A,
                    j = M.interval === p.SubscriptionIntervalTypes.YEAR ? P.default.Messages.BILLING_TRIAL_YEARLY_PRICE_AFTER_TRIAL : P.default.Messages.BILLING_TRIAL_MONTHLY_PRICE_AFTER_TRIAL,
                    U = () => null != v && (0, r.jsx)(o.Text, {
                        tag: "span",
                        variant: "eyebrow",
                        color: "always-white",
                        className: N.planOptionDiscount,
                        children: P.default.Messages.BILLING_PLAN_SELECTION_DISCOUNT.format({
                            discount: (0, E.formatPercent)(R, v / 100)
                        })
                    }),
                    D = () => M.interval === p.SubscriptionIntervalTypes.YEAR && null != t || G && !y ? M.interval === p.SubscriptionIntervalTypes.YEAR && null != t ? (0, r.jsxs)("span", {
                        className: N.planOptionMonthsFree,
                        children: ["(", P.default.Messages.BILLING_SWITCH_PLAN_YEARLY_FREE_MONTHS, ")"]
                    }) : G && !y ? U() : void 0 : null;
                return (0, r.jsxs)(o.Clickable, {
                    role: L ? "menuitem" : "radio",
                    "aria-checked": l,
                    tabIndex: l ? 0 : -1,
                    focusProps: {
                        offset: {
                            left: -4,
                            right: -4,
                            top: 0,
                            bottom: 0
                        }
                    },
                    onClick: h ? void 0 : () => s(n),
                    className: a(N.planOptionClickableContainer, {
                        [N.selectedPlan]: L && l,
                        [N.selectionBox]: L
                    }),
                    children: [(0, r.jsxs)("div", {
                        className: a(N.planOption, {
                            [N.planOptionDisabled]: h
                        }),
                        children: [(0, r.jsxs)("div", {
                            className: N.planOptionClickable,
                            children: [!L && (0, r.jsx)(o.Checkbox, {
                                readOnly: !0,
                                displayOnly: !0,
                                value: l,
                                shape: o.Checkbox.Shapes.ROUND,
                                color: c.default.unsafe_rawColors.BRAND_500.css,
                                type: o.Checkbox.Types.INVERTED,
                                className: N.planOptionCheckbox
                            }), (0, r.jsxs)("div", {
                                children: [(0, r.jsxs)("div", {
                                    className: a(N.planOptionInterval, {
                                        [N.optionSelected]: l || L,
                                        [N.updatedOptionSelected]: A && (l || L)
                                    }),
                                    children: [(0, I.getIntervalString)(M.interval, S, b, M.intervalCount, L), L && D()]
                                }), L && (0, r.jsx)("div", {
                                    className: N.planOneTimeCost,
                                    children: P.default.Messages.ONE_TIME_CHARGE.format({
                                        currencyAmount: (0, E.formatPrice)(x.amount, x.currency)
                                    })
                                })]
                            }), y && (0, r.jsxs)("span", {
                                className: N.planOptionCurrentPlan,
                                children: ["(", P.default.Messages.BILLING_SWITCH_PLAN_CURRENT_PLAN, ")"]
                            }), !L && D()]
                        }), A ? (0, r.jsx)("div", {
                            className: a({
                                [N.optionPriceSelected]: l
                            }),
                            children: P.default.Messages.BILLING_TRIAL_PRICE_NOW.format({
                                price: (() => {
                                    if (C && null != O) return M.interval === p.SubscriptionIntervalTypes.MONTH ? (0, E.formatPrice)(x.amount - O, x.currency) : (0, E.formatPrice)(x.amount, x.currency);
                                    return (0, E.formatPrice)(0, x.currency, {
                                        maximumFractionDigits: 0
                                    })
                                })()
                            })
                        }) : (0, r.jsx)("div", {
                            className: a({
                                [N.optionSelected]: l || L
                            }),
                            children: (0, E.formatPrice)(x.amount, x.currency)
                        })]
                    }), A && (0, r.jsx)("div", {
                        className: N.planOptionSubtextContainer,
                        children: (0, r.jsx)(o.Text, {
                            variant: "text-md/normal",
                            color: l ? "text-normal" : "interactive-normal",
                            className: a(N.planOptionSubtext, {
                                [N.discountPlanOptionSubtext]: C
                            }),
                            children: C && null != O ? M.interval === p.SubscriptionIntervalTypes.MONTH ? P.default.Messages.BILLING_DISCOUNT_MONTHLY_PRICE.format({
                                discountedPrice: (0, E.formatPrice)(x.amount - O, x.currency),
                                regularPrice: (0, E.formatPrice)(x.amount, x.currency)
                            }) : P.default.Messages.BILLING_YEARLY_PLAN_SAVINGS.format({
                                percent: v
                            }) : j.format({
                                price: (0, E.formatPrice)(x.amount, x.currency)
                            })
                        })
                    })]
                })
            }
        },
        617223: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SendGiftToUser: function() {
                    return c
                }
            });
            var r = n("37983");
            n("884691");
            var s = n("77078"),
                a = n("87657"),
                l = n("158998"),
                i = n("782340"),
                u = n("438269");
            let c = e => {
                let {
                    giftRecipient: t
                } = e;
                return null == t ? null : (0, r.jsxs)("div", {
                    className: u.content,
                    children: [(0, r.jsx)(s.FormTitle, {
                        children: i.default.Messages.FORM_LABEL_SEND_TO
                    }), (0, r.jsxs)("div", {
                        className: u.giftRecipientInfo,
                        children: [(0, r.jsx)(a.default, {
                            user: t,
                            className: u.giftRecipient,
                            size: s.AvatarSizes.SIZE_20
                        }), (0, r.jsx)(s.Heading, {
                            className: u.giftRecipientName,
                            variant: "text-md/normal",
                            children: l.default.getName(t)
                        }), (0, r.jsx)(s.Heading, {
                            className: u.giftRecipientTag,
                            variant: "text-md/normal",
                            children: l.default.getUserTag(t)
                        })]
                    })]
                })
            }
        },
        527866: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return Y
                }
            });
            var r = n("37983"),
                s = n("884691"),
                a = n("627445"),
                l = n.n(a),
                i = n("976979"),
                u = n("446674"),
                c = n("669491"),
                o = n("77078"),
                d = n("335430"),
                f = n("703332"),
                _ = n("740055"),
                m = n("545876"),
                I = n("736978"),
                E = n("642906"),
                p = n("286350"),
                P = n("102492"),
                N = n("176108"),
                S = n("102985"),
                T = n("160299"),
                A = n("10514"),
                C = n("68238"),
                O = n("659632"),
                R = n("719923"),
                M = n("153160"),
                g = n("210721"),
                L = n("809071"),
                y = n("154889"),
                h = n("883662"),
                v = n("623003"),
                x = n("65324"),
                b = n("570727"),
                G = n("146163"),
                j = n("661128"),
                U = n("617223"),
                D = n("646718"),
                B = n("49111"),
                F = n("843455"),
                k = n("782340"),
                w = n("615689");

            function Y(e) {
                var t, n, a;
                let Y, H, {
                        selectedPlanId: W,
                        paymentSources: Z,
                        priceOptions: K,
                        currencies: V,
                        onCurrencyChange: z,
                        isGift: X = !1,
                        onPaymentSourceChange: J,
                        handlePaymentSourceAdd: q,
                        setHasAcceptedTerms: Q,
                        legalTermsNodeRef: $,
                        hasLegalTermsFlash: ee,
                        trialId: et,
                        trialFooterMessageOverride: en,
                        reviewWarningMessage: er,
                        metadata: es,
                        purchaseState: ea,
                        hideSubscriptionDetails: el,
                        referralTrialOfferId: ei,
                        isTrial: eu = !1,
                        isDiscount: ec = !1
                    } = e,
                    {
                        isEmbeddedIAP: eo,
                        activeSubscription: ed,
                        selectedSkuId: ef,
                        defaultPlanId: e_,
                        selectedGiftStyle: em,
                        setSelectedGiftStyle: eI,
                        isPremium: eE,
                        giftRecipient: ep,
                        startedPaymentFlowWithPaymentSourcesRef: eP
                    } = (0, E.usePaymentContext)(),
                    eN = (0, y.usePremiumDiscountOffer)(),
                    eS = null == eN ? void 0 : null === (t = eN.discount) || void 0 === t ? void 0 : t.plan_ids.some(e => D.SubscriptionPlanInfo[e].skuId === ef),
                    eT = !X && null != eN && null != ef && eS,
                    eA = (0, u.useStateFromStores)([A.default], () => A.default.get(W));
                l(null != eA, "Missing plan");
                let eC = [{
                        planId: eA.id,
                        quantity: 1
                    }],
                    eO = ea === p.PurchaseState.PURCHASING || ea === p.PurchaseState.COMPLETED,
                    eR = X || eO,
                    [eM, eg] = (0, L.useSubscriptionInvoicePreview)({
                        items: eC,
                        renewal: !1,
                        preventFetch: eR,
                        applyEntitlements: !0,
                        paymentSourceId: K.paymentSourceId,
                        currency: K.currency,
                        trialId: et,
                        metadata: es
                    }),
                    [eL, ey] = (0, L.useSubscriptionInvoicePreview)({
                        items: eC,
                        renewal: !0,
                        preventFetch: eR,
                        trialId: et,
                        paymentSourceId: K.paymentSourceId,
                        currency: K.currency,
                        metadata: es
                    }),
                    [eh, ev] = (0, L.useSubscriptionInvoicePreview)({
                        items: [{
                            planId: D.SubscriptionPlans.PREMIUM_MONTH_TIER_2,
                            quantity: 1
                        }],
                        renewal: !0,
                        preventFetch: !eT,
                        trialId: et,
                        paymentSourceId: K.paymentSourceId,
                        currency: K.currency,
                        metadata: es
                    }),
                    ex = (0, O.isCustomGiftEnabled)(ep),
                    eb = null !== (a = null != eg ? eg : ey) && void 0 !== a ? a : ev,
                    eG = (0, u.useStateFromStores)([S.default], () => S.default.enabled),
                    ej = K.paymentSourceId,
                    {
                        hasEntitlements: eU,
                        entitlements: eD
                    } = (0, j.useSubscriptionEntitlements)(eA.id, X),
                    eB = (0, R.isPrepaidPaymentSource)(K.paymentSourceId),
                    eF = (0, P.checkNoPaymentTrialEnabled)(et, ej, W),
                    ek = (0, N.inOneStepSubscriptionCheckout)({
                        isTrial: eu,
                        isGift: X,
                        selectedSkuId: ef,
                        startedPaymentFlowWithPaymentSources: eP.current
                    }),
                    [ew, eY] = s.useState(null == eM ? void 0 : eM.subscriptionPeriodEnd);
                s.useEffect(() => {
                    if (null == ew) eY(null == eM ? void 0 : eM.subscriptionPeriodEnd)
                }, [null == eM ? void 0 : eM.subscriptionPeriodEnd, ew]);
                let eH = s.useMemo(() => (0, R.getPremiumPlanOptions)({
                        skuId: ef,
                        isPremium: eE,
                        multiMonthPlans: [],
                        currentSubscription: ed,
                        isGift: X,
                        isEligibleForTrial: eu,
                        defaultPlanId: e_,
                        defaultToMonthlyPlan: !1
                    }), [ef, ed, X, e_, eE, eu]),
                    eW = (0, N.planSwitchLoadingShowSpinner)(ek, eM, eA);
                if (null != eb) {
                    let e = eb.message;
                    return eb.code === I.ErrorCodes.INVALID_CURRENCY_FOR_PAYMENT_SOURCE && (e = k.default.Messages.BILLING_ERROR_UNSUPPORTED_CURRENCY), (0, r.jsx)(o.FormErrorBlock, {
                        children: e
                    })
                }
                if (X) H = (0, r.jsx)(G.SubscriptionInvoiceGift, {
                    paymentSourceId: K.paymentSourceId,
                    plan: eA,
                    className: w.invoice,
                    isPrepaidPaymentSource: eB,
                    isCustomGift: ex
                });
                else if (eu && null != eM) H = (0, r.jsxs)("div", {
                    children: [(0, r.jsx)(h.PremiumInvoiceTableDivider, {
                        negativeMarginTop: !0
                    }), (0, r.jsxs)(h.PremiumInvoiceTable, {
                        className: w.invoice,
                        children: [(0, r.jsxs)("div", {
                            className: w.trialPriceLine,
                            children: [(0, r.jsx)(o.Text, {
                                variant: "text-md/bold",
                                children: k.default.Messages.BILLING_PAYMENT_BREAKDOWN_TOTAL
                            }), (0, r.jsx)(o.Text, {
                                variant: "text-md/normal",
                                children: k.default.Messages.BILLING_TRIAL_PRICE_NOW.format({
                                    price: (0, M.formatPrice)(0, eM.currency, {
                                        maximumFractionDigits: 0
                                    })
                                })
                            })]
                        }), (0, r.jsx)("div", {
                            className: w.afterTrialPriceLine,
                            children: (0, r.jsx)(G.PremiumTrialInvoiceTableRow, {
                                invoice: eM,
                                plan: eA
                            })
                        })]
                    })]
                });
                else {
                    if (null == eM || null == eL || eW) return (0, r.jsx)("div", {
                        className: w.spinnerWrapper,
                        children: (0, r.jsx)(o.Spinner, {})
                    });
                    eu && eM.subscriptionPeriodEnd !== eL.subscriptionPeriodEnd && (Y = eM.subscriptionPeriodEnd), H = (0, r.jsxs)(h.PremiumInvoiceTable, {
                        className: w.invoice,
                        children: [(0, r.jsx)(h.PremiumInvoiceTableHeader, {
                            children: k.default.Messages.BILLING_SWITCH_PLAN_PURCHASE_DETAILS
                        }), (0, r.jsx)(G.PremiumSubscriptionChangePlanInvoiceRows, {
                            invoice: eM,
                            newPlan: eA,
                            isPrepaidPaymentSource: eB,
                            referralTrialOfferId: ei
                        }), eB ? null : (0, r.jsx)(G.SubscriptionInvoiceFooter, {
                            renewalInvoice: eL,
                            isTrial: eu,
                            priceOptions: K,
                            overrideRenewalDate: Y,
                            trialFooterMessageOverride: en,
                            hideSubscriptionDetails: el
                        })]
                    })
                }
                let eZ = i.CountryCodesSets.EEA_COUNTRIES.has(T.default.ipCountryCodeWithFallback),
                    {
                        checkboxLabel: eK,
                        checkboxClassname: eV,
                        checkboxLabelClassname: ez
                    } = function(e, t, n) {
                        let r = null,
                            s = null,
                            a = null;
                        if (e && null != t) {
                            let {
                                intervalType: e,
                                intervalCount: l
                            } = R.default.getIntervalForInvoice(t), i = (0, M.formatRate)((0, M.formatPrice)(t.total, t.currency), e, l), u = null != n ? n : t.subscriptionPeriodEnd;
                            r = k.default.Messages.BILLING_LEGAL_MUMBO_JUMBO_TRIAL_TERMS_LABEL.format({
                                termsURL: B.MarketingURLs.TERMS,
                                paidURL: B.MarketingURLs.PAID_TERMS,
                                rate: i,
                                renewalDate: u
                            }), s = w.trialCheckbox, a = w.trialCheckboxLabel
                        }
                        return {
                            checkboxLabel: r,
                            checkboxClassname: s,
                            checkboxLabelClassname: a
                        }
                    }(null != eu && eu, eL, Y),
                    eX = k.default.Messages.BILLING_SELECT_PLAN_GUILD_SUBSCRIPTION.format({
                        planName: eA.name
                    });
                return X && !ex ? eX = k.default.Messages.PAYMENT_MODAL_SUBTITLE_PREMIUM_GIFT : X && ex ? eX = "" : (0, R.isPremiumSubscriptionPlan)(eA.id) && (eX = R.default.getBillingReviewSubheader(null, eA)), eF ? null : (0, r.jsxs)("div", {
                    className: w.stepBody,
                    children: [null != er && (0, r.jsxs)("div", {
                        className: w.reviewWarningMessageContainer,
                        children: [(0, r.jsx)(C.default, {
                            color: c.default.unsafe_rawColors.YELLOW_300.css,
                            width: 20,
                            height: 20
                        }), (0, r.jsx)(o.Text, {
                            className: w.reviewWarningMessage,
                            variant: "text-sm/normal",
                            children: er
                        })]
                    }), ek && (0, r.jsxs)("div", {
                        children: [(0, r.jsx)(h.PremiumInvoiceTableDivider, {
                            negativeMarginTop: !0
                        }), (0, r.jsx)(b.PremiumSwitchPlanSelectBody, {
                            isGift: X,
                            selectedGiftStyle: em,
                            setSelectedGiftStyle: eI,
                            planOptions: eH,
                            eligibleForMultiMonthPlans: !1,
                            isSeasonalGift: !1,
                            referralTrialOfferId: void 0,
                            selectedPlanId: W,
                            subscriptionPeriodEnd: ew,
                            showTotal: !1,
                            discountInvoiceItems: eT ? null == eh ? void 0 : eh.invoiceItems : void 0
                        }), (0, r.jsx)(h.PremiumInvoiceTableDivider, {})]
                    }), !eu && (0, r.jsx)(o.FormTitle, {
                        tag: o.FormTitleTags.H5,
                        children: eX
                    }), ex && null != em && (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(x.default, {
                            defaultAnimationState: g.AnimationState.LOOP,
                            giftStyle: em,
                            shouldAnimate: !0,
                            className: w.giftMainAnimation
                        }), (0, r.jsx)(U.SendGiftToUser, {
                            giftRecipient: ep
                        })]
                    }), H, (0, r.jsxs)("div", {
                        className: w.paymentSourceWrapper,
                        children: [eu ? (0, r.jsx)(o.FormTitle, {
                            tag: o.FormTitleTags.H5,
                            className: w.formTitle,
                            children: k.default.Messages.BILLING_STEP_PAYMENT_METHOD
                        }) : (0, r.jsx)(o.FormTitle, {
                            tag: o.FormTitleTags.H5,
                            children: k.default.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_TITLE
                        }), (0, r.jsx)(_.default, {
                            paymentSources: Object.values(Z),
                            selectedPaymentSourceId: ej,
                            prependOption: eU && !eu ? {
                                label: k.default.Messages.ATTACH_PAYMENT_SOURCE_PROMPT_OPTION_OPTIONAL,
                                value: null
                            } : null,
                            onChange: J,
                            onPaymentSourceAdd: q,
                            hidePersonalInformation: eG,
                            isTrial: eu
                        }), eU && null == ej ? (0, r.jsx)("div", {
                            className: w.paymentSourceOptionalWarning,
                            children: k.default.Messages.ATTACH_PAYMENT_SOURCE_OPTIONAL_WITH_ENTITLEMENTS_WARNING.format({
                                months: eD.length
                            })
                        }) : null, ec ? null : (0, r.jsxs)(d.CurrencyWrapper, {
                            currencies: V,
                            className: w.currencyWrapper,
                            children: [(0, r.jsx)(o.FormTitle, {
                                tag: o.FormTitleTags.H5,
                                children: k.default.Messages.PAYMENT_CURRENCY
                            }), (0, r.jsx)(d.default, {
                                selectedCurrency: K.currency,
                                currencies: V,
                                onChange: z
                            })]
                        })]
                    }), (0, r.jsx)(v.default, {
                        isActive: ee,
                        ref: $,
                        children: (0, r.jsx)(m.default, {
                            onChange: Q,
                            forceShow: !0,
                            checkboxLabel: eK,
                            checkboxClassname: eV,
                            checkboxLabelClassname: ez,
                            finePrint: (0, r.jsx)(f.default, {
                                hide: eu || ec,
                                subscriptionPlan: eA,
                                renewalInvoice: eL,
                                isGift: X,
                                paymentSourceType: null === (n = Z[null != ej ? ej : ""]) || void 0 === n ? void 0 : n.type,
                                isEmbeddedIAP: eo,
                                basePrice: (0, R.getPrice)(eA.id, !1, X, K)
                            }),
                            showPricingLink: eA.currency !== F.CurrencyCodes.USD,
                            showWithdrawalWaiver: eZ,
                            disabled: eO,
                            isTrial: eu,
                            isDiscount: ec,
                            subscriptionPlan: eA,
                            isGift: X
                        })
                    })]
                })
            }
        },
        451516: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return L
                }
            });
            var r = n("37983"),
                s = n("884691"),
                a = n("627445"),
                l = n.n(a),
                i = n("446674"),
                u = n("77078"),
                c = n("850068"),
                o = n("685665"),
                d = n("642906"),
                f = n("605886"),
                _ = n("286350"),
                m = n("376641"),
                I = n("102492"),
                E = n("926223"),
                p = n("467292"),
                P = n("622839"),
                N = n("145131"),
                S = n("599110"),
                T = n("719923"),
                A = n("921149"),
                C = n("177998"),
                O = n("661128"),
                R = n("868869"),
                M = n("49111"),
                g = n("717913");

            function L(e) {
                var t;
                let {
                    premiumSubscription: n,
                    setPurchaseState: a,
                    onBack: L,
                    onNext: y,
                    legalTermsNodeRef: h,
                    flashLegalTerms: v,
                    invoiceError: x,
                    planError: b,
                    onPurchaseError: G,
                    baseAnalyticsData: j,
                    flowStartTime: U,
                    isGift: D = !1,
                    giftStyle: B,
                    customGiftMessage: F,
                    trialId: k,
                    planGroup: w,
                    analyticsLocation: Y,
                    purchaseTokenAuthState: H,
                    openInvoiceId: W,
                    metadata: Z,
                    backButtonEligible: K,
                    disablePurchase: V,
                    isTrial: z = !1
                } = e, {
                    selectedPlan: X,
                    priceOptions: J,
                    setHasAcceptedTerms: q,
                    setPurchaseError: Q,
                    purchaseType: $,
                    paymentSourceId: ee,
                    paymentSources: et,
                    selectedSkuId: en,
                    skusById: er,
                    skuPricePreviewsById: es,
                    referralCode: ea,
                    contextMetadata: el,
                    giftRecipient: ei
                } = (0, d.usePaymentContext)(), eu = null == X ? void 0 : X.id, ec = (0, I.checkNoPaymentTrialEnabled)(k, J.paymentSourceId, eu), eo = (0, i.useStateFromStores)([E.default], () => E.default.popupCallbackCalled), {
                    analyticsLocations: ed
                } = (0, o.default)(), ef = null != ee ? et[ee] : null, [e_, em] = s.useState(ec), [eI, eE] = s.useState(!1), {
                    hasEntitlements: ep
                } = (0, O.useSubscriptionEntitlements)(eu, D), eP = (0, T.isPrepaidPaymentSource)(J.paymentSourceId), eN = ep || ec, eS = (0, A.useIsPrepaidPaymentPastDue)(), eT = null, eA = null;
                if ($ === M.PurchaseTypes.ONE_TIME) {
                    l(null != en, "SKU must be selected for one-time purchases"), l(null != (eT = null !== (t = er[en]) && void 0 !== t ? t : null), "SKU must exist and be fetched.");
                    let e = es[en],
                        n = null != ee ? ee : P.NO_PAYMENT_SOURCE;
                    eA = null != e ? e[n] : null
                }
                let eC = async () => {
                    await (0, f.purchaseProduct)({
                        setPurchaseState: a,
                        setHasAcceptedTerms: q,
                        setIsSubmitting: em,
                        setPurchaseError: Q,
                        hasRedirectURL: eI,
                        setHasRedirectURL: eE,
                        isGift: D,
                        giftStyle: B,
                        baseAnalyticsData: j,
                        analyticsLocation: Y,
                        analyticsLocations: ed,
                        flowStartTime: U,
                        subscriptionPlan: X,
                        planGroup: w,
                        trialId: k,
                        priceOptions: J,
                        paymentSource: ef,
                        isPrepaidPaymentPastDue: eS,
                        openInvoiceId: W,
                        premiumSubscription: n,
                        onNext: y,
                        metadata: Z,
                        sku: eT,
                        skuPricePreview: eA,
                        purchaseType: $,
                        referralCode: ea,
                        loadId: el.loadId,
                        giftRecipient: ei,
                        customMessage: F
                    })
                };
                s.useEffect(() => {
                    let e = async () => {
                        if (!0 === eo) try {
                            if (null == E.default.redirectedPaymentId) return;
                            await (0, c.redirectedPaymentSucceeded)(E.default.redirectedPaymentId), S.default.track(M.AnalyticEvents.PAYMENT_FLOW_SUCCEEDED, {
                                ...j,
                                duration_ms: Date.now() - U,
                                payment_source_type: null == ef ? void 0 : ef.type
                            }), a(_.PurchaseState.COMPLETED), y()
                        } catch (e) {
                            a(_.PurchaseState.FAIL), G(e), S.default.track(M.AnalyticEvents.PAYMENT_FLOW_FAILED, {
                                ...j,
                                payment_source_id: ee,
                                payment_source_type: null == ef ? void 0 : ef.type,
                                duration_ms: Date.now() - U
                            })
                        } finally {
                            em(!1), (0, c.resetPaymentIntentId)()
                        } else H === p.PurchaseTokenAuthState.SUCCESS && await eC()
                    };
                    e()
                }, [eo]), s.useEffect(() => {
                    ec && !D && null == n && eC()
                }, [ec, D, n]);
                let eO = null != W || $ === M.PurchaseTypes.ONE_TIME;
                return ec ? null : (0, r.jsxs)(u.ModalFooter, {
                    align: N.default.Align.CENTER,
                    children: [(0, r.jsx)(R.default, {
                        legalTermsNodeRef: h,
                        invoiceError: x,
                        planError: b,
                        disablePurchase: V,
                        flashLegalTerms: v,
                        isSubmitting: e_,
                        premiumSubscription: n,
                        isGift: D,
                        planGroup: w,
                        isPrepaid: eP,
                        isTrial: z,
                        makePurchase: eC,
                        needsPaymentSource: null == ef && !eN
                    }), (0, r.jsx)(m.default, {}), K && !eO ? (0, r.jsx)("div", {
                        className: g.back,
                        children: (0, r.jsx)(C.default, {
                            onClick: L
                        })
                    }) : null]
                })
            }
        },
        891653: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var r = n("37983");
            n("884691");
            var s = n("414456"),
                a = n.n(s),
                l = n("77078"),
                i = n("216422"),
                u = n("782340"),
                c = n("881609");

            function o(e) {
                let {
                    text: t = u.default.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP,
                    className: n
                } = e;
                return (0, r.jsx)(l.Tooltip, {
                    text: t,
                    children: e => (0, r.jsx)(l.Clickable, {
                        ...e,
                        children: (0, r.jsx)(i.default, {
                            className: a(c.nitroWheel, n)
                        })
                    })
                })
            }
        },
        570697: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var r = n("37983");
            n("884691");
            var s = n("414456"),
                a = n.n(s),
                l = n("65597"),
                i = n("77078"),
                u = n("70723"),
                c = n("254490"),
                o = n("891653"),
                d = n("632892"),
                f = n("646718"),
                _ = n("326908");

            function m(e) {
                let {
                    errors: t
                } = e;
                return (0, r.jsx)(r.Fragment, {
                    children: t.map((e, t) => (0, r.jsx)(i.Text, {
                        variant: "text-xs/normal",
                        color: "text-danger",
                        className: _.errorMessage,
                        children: e.replace(/[0-9.,]+ ?kb/g, e => {
                            let t = 1024 * parseInt(e, 10);
                            return isNaN(t) ? e : (0, c.sizeString)(t)
                        })
                    }, t))
                })
            }

            function I(e) {
                let {
                    title: t,
                    titleIcon: n,
                    titleId: s,
                    description: c,
                    children: I,
                    className: E,
                    errors: p,
                    disabled: P = !1,
                    hideDivider: N = !1,
                    showBorder: S = !1,
                    borderType: T,
                    hasBackground: A = !1,
                    forcedDivider: C = !1,
                    showPremiumIcon: O = !1
                } = e, R = (0, l.default)([u.default], () => {
                    let e = u.default.activeSubstep;
                    return null != e && f.PremiumTutorialSubstepsToStepMap[e] === f.PremiumTutorialSteps.PROFILE_CUSTOMIZATION
                });
                return (0, r.jsx)("div", {
                    className: a(_.customizationSection, E, {
                        [_.disabled]: P,
                        [_.hideDivider]: N,
                        [_.showBorder]: S,
                        [_.withDivider]: C
                    }),
                    children: (0, r.jsxs)(d.default, {
                        className: _.customizationSectionBorder,
                        backgroundClassName: _.customizationSectionBackground,
                        isShown: S && !R,
                        type: T,
                        hasBackground: A,
                        children: [(0, r.jsxs)(i.FormTitle, {
                            className: _.title,
                            id: s,
                            children: [t, O && (0, r.jsx)(o.default, {}), n]
                        }), null != c ? (0, r.jsx)(i.FormText, {
                            type: i.FormText.Types.DESCRIPTION,
                            className: _.sectionDescription,
                            children: c
                        }) : null, I, null != p && (0, r.jsx)(m, {
                            errors: p
                        })]
                    })
                })
            }
        },
        632892: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                FeatureBorderTypes: function() {
                    return s
                },
                default: function() {
                    return d
                }
            });
            var r, s, a = n("37983"),
                l = n("884691"),
                i = n("414456"),
                u = n.n(i),
                c = n("623682");
            (r = s || (s = {})).PREMIUM = "premium", r.LIMITED = "limited";
            let o = {
                [s.PREMIUM]: {
                    border: c.premiumFeatureBorder,
                    background: c.premiumBackground
                },
                [s.LIMITED]: {
                    border: c.limitedFeatureBorder,
                    background: c.limitedBackground
                }
            };
            var d = l.forwardRef(function(e, t) {
                let {
                    children: n,
                    type: r = s.PREMIUM,
                    isShown: l,
                    hasBackground: i = !1,
                    className: d,
                    backgroundClassName: f
                } = e;
                if (!l) return (0, a.jsx)(a.Fragment, {
                    children: n
                });
                let {
                    border: _,
                    background: m
                } = o[r];
                return (0, a.jsx)("div", {
                    ref: t,
                    className: u(_, d),
                    children: (0, a.jsx)("div", {
                        className: u(i ? m : c.background, f),
                        children: n
                    })
                })
            })
        },
        882641: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                EMOJI_BUTTON_SPRING_CONFIG: function() {
                    return P
                },
                default: function() {
                    return N
                }
            });
            var r = n("37983"),
                s = n("884691"),
                a = n("414456"),
                l = n.n(a),
                i = n("301165"),
                u = n("446674"),
                c = n("77078"),
                o = n("765969"),
                d = n("630400"),
                f = n("557562"),
                _ = n("162771"),
                m = n("474293"),
                I = n("958706"),
                E = n("782340"),
                p = n("505436");
            let P = {
                tension: 800,
                friction: 24
            };
            var N = function(e) {
                let {
                    tabIndex: t,
                    className: n,
                    renderButtonContents: a,
                    active: N,
                    onClick: S,
                    "aria-controls": T,
                    focusProps: A
                } = e, [C, O] = s.useState(!1), [R, M] = s.useState(0), g = (0, u.useStateFromStores)([_.default], () => _.default.getGuildId()), L = C || N, y = (0, m.getClass)(p, "emojiButton", L ? "Hovered" : "Normal"), h = function(e) {
                    let t = -e % I.EmojiSprites.PickerPerRow * 22,
                        n = -(22 * Math.floor(e / I.EmojiSprites.PickerPerRow));
                    return {
                        backgroundPosition: "".concat(t, "px ").concat(n, "px"),
                        backgroundSize: "".concat(22 * I.EmojiSprites.PickerPerRow, "px ").concat(22 * Math.ceil(I.EmojiSprites.PickerCount / I.EmojiSprites.PickerPerRow), "px")
                    }
                }(R), v = s.useCallback(() => {
                    if (L) return;
                    let e = Math.floor(Math.random() * I.EmojiSprites.PickerCount);
                    O(!0), M(e), (0, d.maybeFetchTopEmojisByGuild)(g), (0, f.maybeGetPacksForUser)("emoji button - mouse enter"), (0, o.maybeGetEmojiCaptionsForUser)("emoji button - mouse enter")
                }, [L, O, M, g]), x = s.useCallback(() => {
                    O(!1)
                }, [O]), b = s.useCallback(() => {
                    (0, d.maybeFetchTopEmojisByGuild)(g)
                }, [g]);
                return (0, r.jsx)(c.Button, {
                    look: c.Button.Looks.BLANK,
                    size: c.Button.Sizes.NONE,
                    tabIndex: t,
                    className: l(y, n),
                    onMouseEnter: v,
                    onMouseOver: v,
                    onMouseLeave: x,
                    onFocus: b,
                    onClick: S,
                    "aria-label": E.default.Messages.SELECT_EMOJI,
                    "aria-controls": T,
                    "aria-expanded": N,
                    "aria-haspopup": "dialog",
                    focusProps: A,
                    children: null != a ? a() : (0, r.jsx)(i.Spring, {
                        config: P,
                        to: {
                            value: L ? 1 : 0
                        },
                        children: e => {
                            let {
                                value: t
                            } = e;
                            return (0, r.jsx)(i.animated.div, {
                                className: p.sprite,
                                style: {
                                    ...h,
                                    transform: t.to([0, 1], [1, 1.14]).to(e => "scale(".concat(e, ")")),
                                    filter: t.to(e => "grayscale(".concat(100 - 100 * e, "%)"))
                                }
                            })
                        }
                    })
                })
            }
        },
        834179: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var r = n("37983");
            n("884691");
            var s = n("469563"),
                a = n("763377"),
                l = n("75196"),
                i = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: s = "currentColor",
                        foreground: a,
                        ...i
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, l.default)(i),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, r.jsx)("path", {
                            className: a,
                            fill: s,
                            d: "M12 2C6.486 2 2 6.487 2 12C2 17.515 6.486 22 12 22C17.514 22 22 17.515 22 12C22 6.487 17.514 2 12 2ZM12 18.25C11.31 18.25 10.75 17.691 10.75 17C10.75 16.31 11.31 15.75 12 15.75C12.69 15.75 13.25 16.31 13.25 17C13.25 17.691 12.69 18.25 12 18.25ZM13 13.875V15H11V12H12C13.104 12 14 11.103 14 10C14 8.896 13.104 8 12 8C10.896 8 10 8.896 10 10H8C8 7.795 9.795 6 12 6C14.205 6 16 7.795 16 10C16 11.861 14.723 13.429 13 13.875Z"
                        })
                    })
                }, a.CircleQuestionIcon)
        },
        548775: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var s = n("469563"),
                a = n("645156"),
                l = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: s = "currentColor",
                        className: a,
                        foreground: l
                    } = e;
                    return (0, r.jsx)("svg", {
                        className: a,
                        width: t,
                        height: n,
                        viewBox: "0 0 16 16",
                        children: (0, r.jsxs)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: [(0, r.jsx)("rect", {
                                width: "16",
                                height: "16"
                            }), (0, r.jsx)("polygon", {
                                className: l,
                                fill: s,
                                points: "12 2.32 10.513 2 4 13.68 5.487 14"
                            })]
                        })
                    })
                }, a.SlashIcon)
        },
        575209: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getCurrencyFullName: function() {
                    return s
                }
            });
            var r = n("782340");

            function s(e) {
                switch (e) {
                    case "brl":
                        return r.default.Messages.BRL_NAME;
                    case "pln":
                        return r.default.Messages.PLN_NAME;
                    case "try":
                        return r.default.Messages.TRY_NAME;
                    case "usd":
                        return r.default.Messages.USD_NAME;
                    case "aud":
                        return r.default.Messages.AUD_NAME;
                    case "pen":
                        return r.default.Messages.PEN_NAME;
                    case "php":
                        return r.default.Messages.PHP_NAME;
                    case "ars":
                        return r.default.Messages.ARS_NAME;
                    case "cop":
                        return r.default.Messages.COP_NAME;
                    case "clr":
                        return r.default.Messages.CLR_NAME;
                    case "jpy":
                        return r.default.Messages.JPY_NAME;
                    case "idr":
                        return r.default.Messages.IDR_NAME;
                    case "vnd":
                        return r.default.Messages.VND_NAME;
                    case "thb":
                        return r.default.Messages.THB_NAME;
                    case "myr":
                        return r.default.Messages.MYR_NAME;
                    case "krw":
                        return r.default.Messages.KRW_NAME;
                    case "mxn":
                        return r.default.Messages.MXN_NAME;
                    case "bgn":
                        return r.default.Messages.BGN_NAME;
                    case "czk":
                        return r.default.Messages.CZK_NAME;
                    case "dkk":
                        return r.default.Messages.DKK_NAME;
                    case "huf":
                        return r.default.Messages.HUF_NAME;
                    case "ron":
                        return r.default.Messages.RON_NAME;
                    case "sek":
                        return r.default.Messages.SEK_NAME;
                    case "eur":
                        return r.default.Messages.EUR_NAME;
                    default:
                        return ""
                }
            }
        }
    }
]);