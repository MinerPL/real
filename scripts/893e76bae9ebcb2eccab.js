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
                    return i
                },
                default: function() {
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var s = n("77078"),
                a = n("575209");

            function i(e) {
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
            var l = function(e) {
                let {
                    currencies: t,
                    onChange: n,
                    selectedCurrency: i,
                    className: l,
                    disabled: u = !1
                } = e;
                if (t.length < 2) return null;
                let o = t.map((e, t) => ({
                    key: t,
                    value: e,
                    label: "".concat(e.toUpperCase(), " - ").concat((0, a.getCurrencyFullName)(e))
                }));
                return (0, r.jsx)(s.SingleSelect, {
                    value: i,
                    options: o,
                    onChange: e => {
                        null != e && n(e)
                    },
                    className: l,
                    isDisabled: u
                })
            }
        },
        405932: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var r = n("37983");
            n("884691");
            var s = n("77078"),
                a = n("135898"),
                i = function(e) {
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
                    return o
                }
            });
            var r = n("37983");
            n("884691");
            var s = n("77078"),
                a = n("145131"),
                i = n("782340"),
                l = n("57153");
            let u = e => {
                    let {
                        className: t,
                        isEmailResent: n,
                        resendEmail: a
                    } = e;
                    return (0, r.jsx)("div", {
                        className: t,
                        children: (0, r.jsxs)("div", {
                            className: l.awaitingWrapper,
                            children: [(0, r.jsx)(s.Heading, {
                                variant: "heading-xl/bold",
                                children: i.default.Messages.PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_HEADER
                            }), (0, r.jsxs)("p", {
                                children: [(0, r.jsx)(s.Text, {
                                    variant: "text-md/normal",
                                    children: i.default.Messages.PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL
                                }), (0, r.jsx)("br", {}), (0, r.jsx)(s.Text, {
                                    variant: "text-md/normal",
                                    children: i.default.Messages.PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_INSTRUCTIONS
                                }), (0, r.jsx)("br", {}), (0, r.jsxs)(s.Text, {
                                    variant: "text-md/normal",
                                    children: [i.default.Messages.PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_RESEND_PROMPT, "\xa0", n ? i.default.Messages.PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_RESEND_SENT : (0, r.jsx)(s.Anchor, {
                                        onClick: a,
                                        children: i.default.Messages.PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_RESEND_ACTION
                                    })]
                                })]
                            })]
                        })
                    })
                },
                o = () => (0, r.jsx)("div", {
                    children: (0, r.jsx)(s.ModalFooter, {
                        justify: a.default.Justify.BETWEEN,
                        align: a.default.Align.CENTER,
                        children: (0, r.jsx)(s.Button, {
                            "data-testid": "continue",
                            color: s.Button.Colors.BRAND,
                            disabled: !0,
                            children: i.default.Messages.PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_NEXT_BUTTON
                        })
                    })
                })
        },
        763377: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CircleQuestionIcon: function() {
                    return i
                }
            });
            var r = n("37983");
            n("884691");
            var s = n("669491"),
                a = n("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    secondaryColor: i = "transparent",
                    secondaryColorClass: l = "",
                    color: u = s.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...c
                } = e;
                return (0, r.jsxs)("svg", {
                    ...(0, a.default)(c),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, r.jsx)("circle", {
                        cx: "12",
                        cy: "12",
                        r: "10",
                        fill: "string" == typeof i ? i : i.css,
                        className: l
                    }), (0, r.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        fillRule: "evenodd",
                        d: "M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11Zm-.281-16c-.981 0-1.812.473-2.269 1.14A1 1 0 1 1 7.8 7.01C8.638 5.786 10.095 5 11.719 5c2.495 0 4.656 1.885 4.656 4.375 0 2.103-1.542 3.775-3.524 4.243l.14.993a1 1 0 0 1-1.981.278l-.281-2a1 1 0 0 1 .99-1.139c1.544 0 2.656-1.137 2.656-2.375S13.263 7 11.719 7ZM13 17.875a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0Z",
                        clipRule: "evenodd",
                        className: o
                    })]
                })
            }
        },
        645156: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SlashIcon: function() {
                    return i
                }
            });
            var r = n("37983");
            n("884691");
            var s = n("669491"),
                a = n("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: i = s.default.colors.INTERACTIVE_NORMAL,
                    colorClass: l = "",
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
                        fill: "string" == typeof i ? i : i.css,
                        fillRule: "evenodd",
                        d: "M19.117 2a.5.5 0 0 1 .429.757L8.218 21.636a.75.75 0 0 1-.643.364H4.883a.5.5 0 0 1-.429-.757L15.782 2.364A.75.75 0 0 1 16.424 2h2.692Z",
                        clipRule: "evenodd",
                        className: l
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
                    return c
                }
            });
            var r, s, a, i, l = n("884691"),
                u = n("917351");

            function o(e) {
                return e === a.HORIZONTAL_LEFT || e === a.HORIZONTAL_RIGHT ? i.HORIZONTAL : i.VERTICAL
            }(r = a || (a = {}))[r.VERTICAL_TOP = 0] = "VERTICAL_TOP", r[r.VERTICAL_BOTTOM = 1] = "VERTICAL_BOTTOM", r[r.HORIZONTAL_LEFT = 2] = "HORIZONTAL_LEFT", r[r.HORIZONTAL_RIGHT = 3] = "HORIZONTAL_RIGHT", (s = i || (i = {}))[s.VERTICAL = 0] = "VERTICAL", s[s.HORIZONTAL = 1] = "HORIZONTAL";
            var c = e => {
                let {
                    initialElementDimension: t,
                    resizableDomNodeRef: n,
                    maxDimension: r,
                    minDimension: s,
                    onElementResize: c,
                    onElementResizeEnd: d,
                    throttleDuration: f = 300,
                    orientation: m,
                    usePointerEvents: _ = !1
                } = e, [I, E] = l.useState(!1), p = l.useRef(0), N = l.useRef(null == t ? 0 : t);
                return l.useLayoutEffect(() => {
                    if (!I || null == n.current) return;

                    function e(e) {
                        let t = o(m) === i.HORIZONTAL ? e.screenX : e.screenY,
                            n = m === a.VERTICAL_TOP || m === a.HORIZONTAL_LEFT,
                            l = (t - p.current) * (n ? -1 : 1),
                            c = N.current + l;
                        return (0, u.clamp)(c, null != s ? s : 0, null != r ? r : c)
                    }
                    let t = (0, u.throttle)(c, f),
                        l = r => {
                            if (null == n.current) return null;
                            let s = e(r),
                                a = o(m) === i.HORIZONTAL ? "width" : "height";
                            n.current.style[a] = "".concat(s, "px"), t(s)
                        },
                        S = t => {
                            E(!1);
                            let n = e(t);
                            c(n), null == d || d(n)
                        },
                        P = _ ? "pointerup" : "mouseup",
                        T = _ ? "pointermove" : "mousemove",
                        C = n.current.ownerDocument;
                    return C.addEventListener(P, S), C.addEventListener(T, l), () => {
                        C.removeEventListener(P, S), C.removeEventListener(T, l), t.cancel()
                    }
                }, [I, c, s, r, m, n, f, d, _]), l.useCallback(e => {
                    let t = o(m) === i.HORIZONTAL;
                    null != n.current && (N.current = t ? n.current.offsetWidth : n.current.offsetHeight), p.current = t ? e.screenX : e.screenY, E(!0)
                }, [m, n])
            }
        },
        605886: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                purchaseProduct: function() {
                    return P
                }
            });
            var r = n("627445"),
                s = n.n(r),
                a = n("913144"),
                i = n("850068"),
                l = n("112679"),
                u = n("596523"),
                o = n("465527"),
                c = n("78710"),
                d = n("388290"),
                f = n("599110"),
                m = n("745279"),
                _ = n("659632"),
                I = n("719923"),
                E = n("286350"),
                p = n("49111"),
                N = n("646718"),
                S = n("782340");
            async function P(e) {
                var t;
                let {
                    setPurchaseState: n,
                    setHasAcceptedTerms: r,
                    setIsSubmitting: P,
                    setPurchaseError: T,
                    hasRedirectURL: C,
                    setHasRedirectURL: A,
                    isGift: O,
                    giftStyle: R,
                    baseAnalyticsData: g,
                    analyticsLocation: h,
                    analyticsLocations: M,
                    flowStartTime: L,
                    subscriptionPlan: v,
                    planGroup: y,
                    trialId: x,
                    priceOptions: b,
                    paymentSource: j,
                    isPrepaidPaymentPastDue: G,
                    openInvoiceId: D,
                    premiumSubscription: U,
                    onNext: B,
                    metadata: F,
                    sku: k,
                    skuPricePreview: w,
                    purchaseType: H,
                    referralCode: Y,
                    loadId: W,
                    giftRecipient: Z,
                    customMessage: K,
                    emojiConfetti: V,
                    soundEffect: z
                } = e;
                n(E.PurchaseState.PURCHASING), r(!0), P(!0), a.default.wait(l.clearError), T(null);
                try {
                    let e, r, a;
                    if (f.default.track(p.AnalyticEvents.PAYMENT_FLOW_COMPLETED, {
                            ...g,
                            duration_ms: Date.now() - L
                        }), C) return;
                    let l = (0, _.isCustomGiftEnabled)(Z),
                        P = !1;
                    if (l && (P = c.CustomGiftSoundboardEmojiExperiment.getCurrentConfig({
                            location: "premiumGiftSelect_GiftAnimationOptions"
                        }, {
                            autoTrackExposure: !1
                        }).enabled), H === p.PurchaseTypes.ONE_TIME) s(null != k, "SKU must exist and be fetched."), s(null != w, "SKUPricePreview must exist."), e = await (0, o.purchaseSKU)(k.applicationId, k.id, {
                        expectedAmount: w.amount,
                        expectedCurrency: w.currency,
                        paymentSource: j,
                        loadId: W
                    });
                    else if (s(null != v, "Missing subscriptionPlan"), O) {
                        let n = (0, I.getPrice)(v.id, !1, !0, b);
                        if ("usd" === n.currency && (null == j ? void 0 : j.type) === p.PaymentSourceTypes.GCASH) {
                            let e = Error("Invalid USD currency for GCash");
                            (0, m.captureBillingException)(e, {
                                tags: {
                                    paymentSourceId: null !== (t = null == j ? void 0 : j.id) && void 0 !== t ? t : "",
                                    subscriptionPlanId: v.id,
                                    priceOptions: JSON.stringify(b)
                                }
                            })
                        }
                        e = await (0, o.purchaseSKU)(N.PREMIUM_SUBSCRIPTION_APPLICATION, v.skuId, {
                            expectedAmount: n.amount,
                            expectedCurrency: n.currency,
                            paymentSource: j,
                            subscriptionPlanId: v.id,
                            isGift: !0,
                            giftStyle: R,
                            loadId: W,
                            recipientId: l ? null == Z ? void 0 : Z.id : void 0,
                            customMessage: l ? K : void 0,
                            emojiConfetti: P ? V : void 0,
                            soundEffect: P ? z : void 0
                        })
                    } else e = G && null != D && null != j && null != U ? p.PREPAID_PAYMENT_SOURCES.has(j.type) ? await (0, i.payInvoiceManually)(U, D, j, b.currency) : await (0, i.updateSubscription)(U, {
                        paymentSource: j,
                        currency: b.currency
                    }, M, h) : null != U ? await (0, i.updateSubscription)(U, {
                        items: (0, I.getItemsWithUpsertedPlanIdForGroup)(U, v.id, 1, new Set(y)),
                        paymentSource: j,
                        currency: b.currency
                    }, M, h) : await (0, u.subscribe)({
                        planId: v.id,
                        currency: b.currency,
                        paymentSource: j,
                        trialId: x,
                        metadata: F,
                        referralCode: Y,
                        loadId: W
                    });
                    if (e.redirectConfirmation) {
                        A(null != e.redirectURL);
                        return
                    }
                    let T = {
                        ...g,
                        duration_ms: Date.now() - L,
                        payment_source_type: null == j ? void 0 : j.type
                    };
                    l && (T.is_custom_message_edited = K !== S.default.Messages.DEFAULT_CUSTOM_GIFT_MESSAGE), P && (T.is_custom_emoji_sound_available = !0, null != V && (T.emoji_name = V.surrogates), null != z && (T.sound_id = z.soundId)), f.default.track(p.AnalyticEvents.PAYMENT_FLOW_SUCCEEDED, T), n(E.PurchaseState.COMPLETED), "subscription" in e ? r = null != e.subscription ? d.default.createFromServer(e.subscription) : null : "entitlements" in e && (a = null != e.entitlements ? e.entitlements : void 0), B(r, a)
                } catch (e) {
                    n(E.PurchaseState.FAIL), T(e), f.default.track(p.AnalyticEvents.PAYMENT_FLOW_FAILED, {
                        ...g,
                        payment_source_id: null == j ? void 0 : j.id,
                        payment_source_type: null == j ? void 0 : j.type,
                        duration_ms: Date.now() - L
                    })
                } finally {
                    !C && P(!1)
                }
            }
        },
        262683: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PaymentModalAddPaymentStep: function() {
                    return m
                }
            });
            var r = n("627445"),
                s = n.n(r),
                a = n("775560"),
                i = n("917247"),
                l = n("724522"),
                u = n("599110"),
                o = n("642906"),
                c = n("85336"),
                d = n("49111"),
                f = n("646718");

            function m(e) {
                let {
                    analyticsData: t,
                    initialPlanId: n,
                    breadcrumbSteps: r,
                    handleStepChange: m,
                    referralTrialOfferId: _,
                    onReturn: I
                } = e, {
                    contextMetadata: E,
                    step: p,
                    paymentSources: N,
                    paymentSourceId: S,
                    setPaymentSourceId: P,
                    purchaseError: T,
                    setPurchaseError: C,
                    purchaseErrorBlockRef: A,
                    paymentAuthenticationState: O,
                    isGift: R,
                    selectedSkuId: g
                } = (0, o.usePaymentContext)(), h = {
                    ...(0, l.useSharedPaymentModal)(),
                    paymentSources: N,
                    paymentSourceId: S,
                    setPaymentSourceId: P,
                    purchaseError: T,
                    setPurchaseError: C,
                    purchaseErrorBlockRef: A,
                    paymentAuthenticationState: O
                }, M = (0, i.usePremiumTrialOffer)(_), L = !R && null != M && null != g && (0, f.SubscriptionTrials)[M.trial_id].skus.includes(g), v = null != I ? I : () => {
                    let e = Object.values(N).length < 1 && null == n ? c.Step.PLAN_SELECT : c.Step.REVIEW;
                    m(e, {
                        trackedFromStep: c.Step.PAYMENT_TYPE
                    })
                };
                s(p, "Step should be set here");
                let y = (0, a.useStableMemo)(() => Date.now(), [p]);
                return (0, l.AddPaymentFlow)({
                    paymentModalArgs: h,
                    initialStep: c.Step.PAYMENT_TYPE,
                    prependSteps: [c.Step.PROMOTION_INFO],
                    appendSteps: [c.Step.REVIEW, c.Step.CONFIRM],
                    breadcrumpSteps: r,
                    currentBreadcrumpStep: p,
                    usePaymentModalStep: !0,
                    onReturn: v,
                    onComplete: e => {
                        m(c.Step.REVIEW, {
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
                            step_duration_ms: s - y,
                            flow_duration_ms: s - E.startTime
                        })
                    },
                    isEligibleForTrial: L
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
                i = n("650484"),
                l = n("913390");

            function u() {
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(a.default, {}), (0, r.jsx)(i.PaymentPortalBody, {
                        children: (0, r.jsx)(s.AwaitingAuthenticationStepBody, {
                            className: l.awaitingAuthenticationStep
                        })
                    })]
                })
            }
        },
        724269: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var r = n("37983"),
                s = n("884691"),
                a = n("465527"),
                i = n("50517"),
                l = n("153727"),
                u = n("650484"),
                o = n("199142");

            function c() {
                let [e, t] = s.useState(!1), n = async () => {
                    t(!0), await (0, a.resendPaymentVerificationEmail)()
                };
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(l.default, {}), (0, r.jsx)(u.PaymentPortalBody, {
                        children: (0, r.jsx)(i.AwaitingPurchaseTokenAuthStepBody, {
                            className: o.body,
                            isEmailResent: e,
                            resendEmail: n
                        })
                    }), (0, r.jsx)(u.PaymentPortalFooter, {
                        children: (0, r.jsx)(i.AwaitingPurchaseTokenAuthStepFooter, {})
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
                    return l
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
                i = (e, t, n) => {
                    let r = null == n || (0, s.isPremiumBaseSubscriptionPlan)(n);
                    return null != e && null == t && r
                },
                l = (e, t, n) => {
                    let {
                        bypassCheckout: r
                    } = a.useExperiment({
                        location: "aeb070_1"
                    }, {
                        autoTrackExposure: !1
                    }), s = i(e, t, n);
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
                    return _
                },
                getLocalizedPricingBannerStrings: function() {
                    return I
                }
            });
            var r = n("592861"),
                s = n("988415"),
                a = n("701909"),
                i = n("153160"),
                l = n("49111"),
                u = n("843455"),
                o = n("782340");
            let c = new Set([u.CurrencyCodes.ARS, u.CurrencyCodes.CLP, u.CurrencyCodes.COP]),
                d = new Set([u.CurrencyCodes.USD, u.CurrencyCodes.JPY]),
                f = {
                    [l.PaymentSourceTypes.CARD]: () => o.default.Messages.PAYMENT_SOURCE_CREDIT_CARD_CARD_ONLY,
                    [l.PaymentSourceTypes.PAYPAL]: () => o.default.Messages.PAYMENT_SOURCE_PAYPAL,
                    [l.PaymentSourceTypes.SOFORT]: () => o.default.Messages.PAYMENT_SOURCE_SOFORT,
                    [l.PaymentSourceTypes.GIROPAY]: () => o.default.Messages.PAYMENT_SOURCE_GIROPAY,
                    [l.PaymentSourceTypes.PRZELEWY24]: () => o.default.Messages.PAYMENT_SOURCE_PRZELEWY24,
                    [l.PaymentSourceTypes.PAYSAFE_CARD]: () => o.default.Messages.PAYMENT_SOURCE_PAYSAFE_CARD,
                    [l.PaymentSourceTypes.GCASH]: () => o.default.Messages.PAYMENT_SOURCE_GCASH,
                    [l.PaymentSourceTypes.GRABPAY_MY]: () => o.default.Messages.PAYMENT_SOURCE_GRABPAY,
                    [l.PaymentSourceTypes.MOMO_WALLET]: () => o.default.Messages.PAYMENT_SOURCE_MOMO_WALLET,
                    [l.PaymentSourceTypes.VENMO]: () => o.default.Messages.PAYMENT_SOURCE_VENMO,
                    [l.PaymentSourceTypes.KAKAOPAY]: () => o.default.Messages.PAYMENT_SOURCE_KAKAOPAY,
                    [l.PaymentSourceTypes.GOPAY_WALLET]: () => o.default.Messages.PAYMENT_SOURCE_GOPAY_WALLET,
                    [l.PaymentSourceTypes.BANCONTACT]: () => o.default.Messages.PAYMENT_SOURCE_BANCONTACT,
                    [l.PaymentSourceTypes.EPS]: () => o.default.Messages.PAYMENT_SOURCE_EPS,
                    [l.PaymentSourceTypes.IDEAL]: () => o.default.Messages.PAYMENT_SOURCE_IDEAL,
                    [l.PaymentSourceTypes.CASH_APP]: () => o.default.Messages.PAYMENT_SOURCE_CASH_APP_PAY
                },
                m = [l.PaymentSourceTypes.EPS, l.PaymentSourceTypes.BANCONTACT, l.PaymentSourceTypes.IDEAL, l.PaymentSourceTypes.SOFORT, l.PaymentSourceTypes.GIROPAY, l.PaymentSourceTypes.SEPA_DEBIT, l.PaymentSourceTypes.PAYSAFE_CARD],
                _ = (e, t, n, r) => {
                    if (null == e) return "";
                    let a = (0, s.getI18NCountryName)(e);
                    if (t === u.CurrencyCodes.EUR) return n ? o.default.Messages.LOCALIZED_PRICING_NOTICE_GENERALIZED_PAYMENT_METHODS_PROMO.format({
                        country: a
                    }) : o.default.Messages.LOCALIZED_PRICING_NOTICE_NO_LOWERED_PRICE.format({
                        currencyISOCode: t.toUpperCase()
                    });
                    return r ? o.default.Messages.NOTICE_NITRO_PRICE_CHANGED.format({
                        countryName: a
                    }) : o.default.Messages.LOCALIZED_PRICING_NOTICE.format({
                        country: a
                    })
                },
                I = e => {
                    let {
                        localizedPricingPromo: t,
                        subscription: n,
                        forceSingleLine: r = !1,
                        userLocale: _
                    } = e, {
                        countryCode: I,
                        amount: p,
                        currency: N,
                        paymentSourceTypes: S
                    } = t, P = 0 !== S.length, T = E(I), C = (0, i.formatPrice)(p, N, {
                        style: "currency",
                        currency: N,
                        currencyDisplay: "symbol",
                        localeOverride: T
                    }), A = o.default.Messages.LOCALIZED_PRICING_BANNER_BODY_NEW_CURRENCY.format({
                        helpCenterLink: a.default.getArticleURL(l.HelpdeskArticles.LOCALIZED_PRICING),
                        currencyISOCode: N.toUpperCase(),
                        localizedPriceWithCurrencySymbol: C
                    });
                    if (d.has(N) && (A = o.default.Messages.LOCALIZED_PRICING_BANNER_BODY_EXISTING_CURRENCY.format({
                            helpCenterLink: a.default.getArticleURL(l.HelpdeskArticles.LOCALIZED_PRICING),
                            localizedPriceWithCurrencySymbol: C
                        })), c.has(N) && (A = o.default.Messages.LOCALIZED_PRICING_BANNER_BODY_NEW_CURRENCY_WITH_AMBIGUOUS_SYMBOL.format({
                            helpCenterLink: a.default.getArticleURL(l.HelpdeskArticles.LOCALIZED_PRICING),
                            currencyISOCode: N.toUpperCase(),
                            localizedPriceWithCurrencySymbol: C
                        })), null != n && !n.hasPremiumNitroMonthly && (A = o.default.Messages.LOCALIZED_PRICING_BANNER_BODY_WITHOUT_PRICE.format({
                            helpCenterLink: a.default.getArticleURL(l.HelpdeskArticles.LOCALIZED_PRICING),
                            currencyISOCode: N.toUpperCase()
                        })), N === u.CurrencyCodes.EUR && (A = r ? o.default.Messages.LOCALIZED_PRICING_BANNER_NO_LOWERED_PRICE_SINGLE_STRING.format({
                            country: (0, s.getI18NCountryName)(I),
                            currencyISOCode: N.toUpperCase(),
                            helpCenterLink: a.default.getArticleURL(l.HelpdeskArticles.LOCALIZED_PRICING)
                        }) : o.default.Messages.LOCALIZED_PRICING_BANNER_NO_LOWERED_PRICE.format({
                            currencyISOCode: N.toUpperCase(),
                            helpCenterLink: a.default.getArticleURL(l.HelpdeskArticles.LOCALIZED_PRICING)
                        })), P) {
                        let e = m.filter(e => S.includes(e)),
                            t = S.filter(e => !m.includes(e)),
                            n = [...e, ...t],
                            r = n.slice(0, 2).map(e => {
                                var t, n;
                                return null !== (n = null === (t = f[e]) || void 0 === t ? void 0 : t.call(f)) && void 0 !== n ? n : o.default.Messages.PAYMENT_SOURCE_UNKNOWN
                            });
                        S.length >= 3 && r.push(o.default.Messages.LOCALIZED_PRICING_MORE_NEW_WAYS_TO_PAY);
                        let s = new Intl.ListFormat(_, {
                            style: "short",
                            type: "conjunction"
                        });
                        A = o.default.Messages.LOCALIZED_PRICING_PAYMENT_METHODS_PROMO.format({
                            helpCenterLink: a.default.getArticleURL(l.HelpdeskArticles.LOCALIZED_PRICING),
                            paymentMethods: s.format(r)
                        })
                    }
                    return {
                        localizedPricingBannerHeader: o.default.Messages.LOCALIZED_PRICING_BANNER_HEADER.format({
                            country: (0, s.getI18NCountryName)(I)
                        }),
                        localizedPricingBannerBody: A,
                        localizedPricingBannerLinkOnly: o.default.Messages.LOCALIZED_PRICING_BANNER_LINK_ONLY.format({
                            helpCenterLink: a.default.getArticleURL(l.HelpdeskArticles.LOCALIZED_PRICING)
                        }),
                        localizedPricingBannerSubNotif: P ? void 0 : o.default.Messages.LOCALIZED_PRICING_BANNER_SUB_NOTIF
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
                    return i
                },
                isPaymentSourceEligibleForMultiMonthPlans: function() {
                    return u
                }
            });
            var r = n("976979"),
                s = n("862205"),
                a = n("646718"),
                i = (0, s.createExperiment)({
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
            let l = new Set([r.CountryCodes.US, r.CountryCodes.CA]);

            function u(e) {
                return null == e || l.has(e.country)
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
                i = n("448993"),
                l = n("195358"),
                u = n("521012"),
                o = n("719923"),
                c = n("49111");
            async function d(e) {
                let {
                    items: t,
                    paymentSourceId: n,
                    trialId: r,
                    code: s,
                    applyEntitlements: u = !1,
                    currency: d,
                    renewal: f,
                    metadata: m
                } = e;
                t = (0, o.coerceExistingItemsToNewItemInterval)(t);
                let _ = {
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
                    metadata: m
                };
                try {
                    let e = await a.default.post({
                        url: c.Endpoints.BILLING_SUBSCRIPTIONS_PREVIEW,
                        body: _,
                        oldFormErrors: !0
                    });
                    return l.default.createInvoiceFromServer(e.body)
                } catch (e) {
                    throw new i.BillingError(e)
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
                    analyticsLocations: m,
                    analyticsLocation: _
                } = e;
                null != r && (r = (0, o.coerceExistingItemsToNewItemInterval)(r));
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
                        url: c.Endpoints.BILLING_SUBSCRIPTION_PREVIEW(n),
                        query: {
                            location: _,
                            location_stack: m
                        },
                        body: I,
                        oldFormErrors: !0
                    });
                    return l.default.createInvoiceFromServer(e.body)
                } catch (e) {
                    throw new i.BillingError(e)
                }
            }
            async function m(e) {
                let {
                    subscriptionId: t,
                    preventFetch: n
                } = e;
                if (n) return null;
                let r = await a.default.get({
                    url: c.Endpoints.BILLING_SUBSCRIPTION_INVOICE(t),
                    oldFormErrors: !0
                });
                return l.default.createInvoiceFromServer(r.body)
            }

            function _(e, t) {
                let {
                    preventFetch: n = !1
                } = e, [a, i] = (0, r.useState)(null), [l, o] = (0, r.useState)(null), c = (0, s.useStateFromStores)([u.default], () => u.default.getSubscriptions());
                return (0, r.useEffect)(() => {
                    let e = !1;
                    async function r() {
                        try {
                            o(null), i(null);
                            let n = await t();
                            !e && i(n)
                        } catch (t) {
                            !e && o(t)
                        }
                    }
                    return !n && r(), () => {
                        e = !0
                    }
                }, [n, t, c]), [a, l]
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
                return _(e, t)
            }

            function E(e) {
                let t = (0, r.useCallback)(() => m(e), [JSON.stringify(e)]);
                return _(e, t)
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
                    return l
                }
            });
            var r, s, a = n("862205");
            (r = s || (s = {}))[r.NONE = 0] = "NONE", r[r.BROWSER_AUTOFILL = 1] = "BROWSER_AUTOFILL", r[r.MERGE_PLAN_SELECT_TO_REVIEW = 2] = "MERGE_PLAN_SELECT_TO_REVIEW";
            let i = (0, a.createExperiment)({
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
            var l = i
        },
        78710: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CustomGiftSoundboardEmojiExperiment: function() {
                    return s
                }
            });
            var r = n("862205");
            let s = (0, r.createExperiment)({
                kind: "user",
                id: "2023-10_custom_gift_soundboard_emoji",
                label: "Custom Gift - Soundboard and Emoji Experiment",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Show gift purchaser custom gift flow with soundboard and emoji features",
                    config: {
                        enabled: !0
                    }
                }]
            })
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
                i = n("357957"),
                l = n("10514"),
                u = n("521012"),
                o = n("719923"),
                c = n("49111"),
                d = n("843455");

            function f() {
                let e = (0, a.useStateFromStores)([u.default], () => u.default.getPremiumTypeSubscription()),
                    t = (0, a.useStateFromStores)([l.default], () => null != e && null != e.planIdFromItems ? l.default.get(null == e ? void 0 : e.planIdFromItems) : null),
                    n = (0, a.useStateFromStores)([i.default], () => null != e && null != e.paymentSourceId ? i.default.getPaymentSource(e.paymentSourceId) : null, [e]),
                    r = null != n && d.PREPAID_PAYMENT_SOURCES.has(n.type),
                    f = (null == e ? void 0 : e.status) === c.SubscriptionStatusTypes.PAST_DUE ? s().diff(s(e.currentPeriodStart), "days") : 0;
                return !!(null != e && null != t && (0, o.isPremiumBaseSubscriptionPlan)(t.id)) && r && f >= 0 && f <= (0, o.getBillingGracePeriodDays)(e) && e.status === c.SubscriptionStatusTypes.PAST_DUE && !e.isPurchasedExternally
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
                i = n("627445"),
                l = n.n(i),
                u = n("423487"),
                o = n("701909"),
                c = n("35188"),
                d = n("391533"),
                f = n("296253"),
                m = n("49111"),
                _ = n("782340"),
                I = n("712109");

            function E() {
                let e = (0, f.default)(),
                    {
                        enabled: t
                    } = c.default.useExperiment({
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
                    className: i
                } = e, c = (0, f.default)(), d = E();
                if (!d) return null;
                return l(null != c, "Subscription billing country should not be null"), (0, r.jsxs)("div", {
                    className: a(I.noticeRoot, i),
                    children: [(0, r.jsx)("div", {
                        className: I.iconContainer,
                        children: (0, r.jsx)(u.default, {
                            className: I.infoIcon
                        })
                    }), (0, r.jsx)("div", {
                        className: I.text,
                        children: (t = c, n = s, "PL" === t ? n ? _.default.Messages.LOCALIZED_PRICING_PLN_LEGACY_PRICING_BOOST_WARNING : _.default.Messages.LOCALIZED_PRICING_PLN_LEGACY_PRICING_WARNING : "TR" === t ? n ? _.default.Messages.LOCALIZED_PRICING_TRY_LEGACY_PRICING_BOOST_WARNING : _.default.Messages.LOCALIZED_PRICING_TRY_LEGACY_PRICING_WARNING : n ? _.default.Messages.LOCALIZED_PRICING_LEGACY_PRICING_BOOST_WARNING : _.default.Messages.LOCALIZED_PRICING_LEGACY_PRICING_WARNING).format({
                            helpCenterLink: o.default.getArticleURL(m.HelpdeskArticles.LOCALIZED_PRICING)
                        })
                    })]
                })
            }
        },
        824734: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var r = n("37983");
            n("884691");
            var s = n("414456"),
                a = n.n(s),
                i = n("153160"),
                l = n("646718"),
                u = n("782340"),
                o = n("552033");

            function c(e) {
                let {
                    price: t,
                    currency: n,
                    intervalType: s,
                    className: c,
                    intervalCount: d = 1,
                    isPrepaidPaymentSource: f = !1
                } = e, m = (0, i.formatPrice)(t, n), _ = null;
                return s === l.SubscriptionIntervalTypes.YEAR ? _ = u.default.Messages.BILLING_PRICE_PER_YEAR_BOLD.format({
                    price: m
                }) : s === l.SubscriptionIntervalTypes.MONTH && 1 === d ? _ = u.default.Messages.BILLING_PRICE_PER_MONTH_BOLD.format({
                    price: m
                }) : s === l.SubscriptionIntervalTypes.MONTH && d > 1 && (_ = u.default.Messages.BILLING_PRICE_PER_MULTI_MONTHS_BOLD.format({
                    price: m,
                    intervalCount: d
                })), (0, r.jsx)("div", {
                    className: a(o.pricePerInterval, c),
                    "data-testid": "PricePerInterval-".concat(n),
                    children: null == s || f ? (0, r.jsx)("strong", {
                        children: m
                    }) : _
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
                i = n("850391"),
                l = n("149022"),
                u = n("681060"),
                o = n("570697"),
                c = n("233069"),
                d = n("49111"),
                f = n("782340"),
                m = n("809331");
            let _ = (0, c.createChannelRecord)({
                id: "1",
                type: d.ChannelTypes.DM
            });

            function I(e) {
                let {
                    sectionTitle: t,
                    errors: n,
                    onTextChange: c,
                    pendingText: d,
                    placeholder: I,
                    currentText: E,
                    disabled: p = !1
                } = e, [N, S] = s.useState(null != d ? d : E), [P, T] = s.useState((0, l.toRichValue)(N)), C = s.useRef(!1);
                return s.useEffect(() => {
                    C.current = !0
                }, []), s.useEffect(() => {
                    if (void 0 === d) {
                        let e = (0, l.toRichValue)(E);
                        S(E), T(e)
                    }
                }, [d, E]), (0, r.jsx)("div", {
                    className: m.body,
                    children: (0, r.jsxs)(o.default, {
                        title: t,
                        errors: n,
                        disabled: p,
                        children: [(0, r.jsx)(u.default, {
                            innerClassName: m.textArea,
                            maxCharacterCount: 190,
                            onChange: function(e, t, n) {
                                t !== N && (S(t), T(n), c(t))
                            },
                            placeholder: I,
                            channel: _,
                            textValue: N,
                            richValue: P,
                            type: i.ChatInputTypes.CUSTOM_GIFT,
                            onBlur: () => {
                                C.current = !1
                            },
                            onFocus: () => {
                                C.current = !0
                            },
                            focused: C.current,
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
                    return o
                }
            });
            var r = n("37983"),
                s = n("884691"),
                a = n("414456"),
                i = n.n(a),
                l = n("849085");
            let u = s.forwardRef(function(e, t) {
                let {
                    isActive: n,
                    children: s
                } = e;
                return (0, r.jsx)("div", {
                    className: i(l.wrapper, {
                        [l.wrapperActive]: n
                    }),
                    ref: t,
                    children: s
                })
            });
            var o = u
        },
        208559: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GiftAnimationOptions: function() {
                    return C
                }
            });
            var r = n("37983"),
                s = n("884691"),
                a = n("77078"),
                i = n("642906"),
                l = n("742926"),
                u = n("68238"),
                o = n("659632"),
                c = n("210721"),
                d = n("78345"),
                f = n("53253"),
                m = n("78710"),
                _ = n("65324"),
                I = n("563613"),
                E = n("64798"),
                p = n("782340"),
                N = n("734203");
            let S = [d.PremiumGiftStyles.BOX, d.PremiumGiftStyles.CUP, d.PremiumGiftStyles.SNOWGLOBE],
                P = [d.PremiumGiftStyles.STANDARD_BOX, d.PremiumGiftStyles.CAKE, d.PremiumGiftStyles.COFFEE, d.PremiumGiftStyles.CHEST],
                T = () => (0, r.jsxs)("div", {
                    className: N.giftBoxHeaderContainer,
                    children: [(0, r.jsx)(a.Heading, {
                        variant: "heading-deprecated-12/semibold",
                        className: N.giftBoxHeaderText,
                        children: p.default.Messages.SEASONAL_GIFTING_CUSTOMIZE_YOUR_GIFT_BOX
                    }), (0, r.jsx)(a.Tooltip, {
                        text: p.default.Messages.SEASONAL_GIFTING_INFO_TOOLTIP,
                        position: "top",
                        children: e => (0, r.jsx)(a.Clickable, {
                            ...e,
                            className: N.infoIconContainer,
                            "aria-label": p.default.Messages.SEASONAL_GIFTING_INFO_TOOLTIP,
                            children: (0, r.jsx)(u.default, {
                                className: N.infoIcon
                            })
                        })
                    })]
                }),
                C = e => {
                    let {
                        selectedGiftStyle: t,
                        setSelectedGiftStyle: n,
                        emojiConfetti: u,
                        soundEffect: d,
                        setEmojiConfetti: C,
                        setSoundEffect: A
                    } = e, {
                        giftRecipient: O
                    } = (0, i.usePaymentContext)(), [R, g] = s.useState(!1), h = s.useRef(null), M = (0, a.useRadioGroup)({
                        orientation: "horizontal"
                    }), {
                        enabled: L
                    } = f.default.getCurrentConfig({
                        location: "premiumGiftSelect_GiftAnimationOptions"
                    }), v = (0, o.isCustomGiftEnabled)(O), y = null;
                    L ? y = S : v && (y = P);
                    let x = !1;
                    return v && (x = m.CustomGiftSoundboardEmojiExperiment.getCurrentConfig({
                        location: "premiumGiftSelect_GiftAnimationOptions"
                    }).enabled), (0, r.jsxs)("div", {
                        children: [L && (0, r.jsx)(T, {}), v && (0, r.jsxs)("div", {
                            className: N.giftMainAnimation,
                            children: [null != t ? (0, r.jsx)(_.default, {
                                giftStyle: t,
                                defaultAnimationState: c.AnimationState.ACTION,
                                idleAnimationState: c.AnimationState.LOOP,
                                shouldAnimate: !0,
                                className: N.animation
                            }) : (0, r.jsx)(a.Spinner, {
                                className: N.spinner
                            }), x && (0, r.jsxs)("div", {
                                className: N.soundEmojiContainer,
                                children: [(0, r.jsx)("div", {
                                    className: N.sound,
                                    children: (0, r.jsx)(l.default, {
                                        sound: d,
                                        onSelect: e => {
                                            null != A && A(null == e ? void 0 : e)
                                        }
                                    })
                                }), (0, r.jsx)("div", {
                                    className: N.emoji,
                                    children: (0, r.jsx)(I.default, {
                                        setEmojiConfetti: C,
                                        emojiConfetti: null == u ? void 0 : u
                                    })
                                })]
                            })]
                        }), (0, r.jsx)("div", {
                            tabIndex: null != t || R ? void 0 : 0,
                            onFocus: e => {
                                var t;
                                e.target === e.currentTarget && (null === (t = h.current) || void 0 === t || t.focus())
                            },
                            className: N.giftBoxOptionContainer,
                            "aria-label": p.default.Messages.SEASONAL_GIFTING_CUSTOMIZE_YOUR_GIFT_BOX,
                            ...M,
                            children: null != y && y.map((e, s) => (0, r.jsx)(E.GiftStaticOption, {
                                isSelected: t === e,
                                giftStyle: e,
                                setSelectedGiftStyle: n,
                                ref: 0 === s ? h : null,
                                onFocus: () => g(!0),
                                onBlur: () => g(!1)
                            }, e))
                        }), (0, r.jsx)("div", {
                            className: N.selectPlanDivider
                        })]
                    })
                }
        },
        563613: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var r = n("37983"),
                s = n("884691"),
                a = n("77078"),
                i = n("86678"),
                l = n("46829"),
                u = n("49111"),
                o = n("958706"),
                c = n("782340"),
                d = n("347609");
            let f = {
                    section: u.AnalyticsSections.VOICE_CHANNEL_EFFECTS_EMOJI_PICKER,
                    openPopoutType: "gift_effect_emoji_picker"
                },
                m = o.EmojiIntention.GIFT;

            function _(e) {
                let {
                    setEmojiConfetti: t,
                    emojiConfetti: n
                } = e, [u, o] = s.useState(!1), _ = e => (0, r.jsxs)("div", {
                    className: d.customGiftContent,
                    children: [(0, r.jsxs)("div", {
                        className: d.customGiftHeader,
                        children: [(0, r.jsx)(a.Text, {
                            variant: "text-md/bold",
                            children: c.default.Messages.GIFT_SELECT_EMOJI
                        }), (0, r.jsx)(a.Text, {
                            variant: "text-sm/normal",
                            children: c.default.Messages.GIFT_SELECT_SOUNDBOARD_OR_EMOJI_DESCRIPTION
                        })]
                    }), e]
                }), I = e => {
                    null != t && (t(e), o(!1))
                };
                return (0, r.jsx)(a.Popout, {
                    shouldShow: u,
                    position: "top",
                    onRequestClose: () => o(!1),
                    renderPopout: e => {
                        let {
                            closePopout: t
                        } = e;
                        return (0, r.jsx)(i.default, {
                            analyticsOverride: f,
                            closePopout: t,
                            onSelectEmoji: I,
                            wrapper: "div",
                            pickerIntention: m,
                            disableEmojiTutorialFlow: !0,
                            renderHeader: _,
                            headerClassName: d.emojiHeader,
                            className: d.emojiList,
                            listHeaderClassName: d.emojiList,
                            searchProps: {
                                accessory: (0, r.jsx)(r.Fragment, {})
                            }
                        })
                    },
                    children: () => (0, r.jsx)("div", {
                        className: d.container,
                        children: (0, r.jsx)(a.Clickable, {
                            className: d.emoji,
                            onClick: () => o(!0),
                            children: (null == n ? void 0 : n.name) == null ? (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)(l.default, {
                                    className: d.emojiIcon,
                                    width: 14,
                                    height: 14
                                }), (0, r.jsx)(a.Text, {
                                    className: d.text,
                                    variant: "text-sm/semibold",
                                    children: c.default.Messages.GIFT_SELECT_EMOJI
                                })]
                            }) : (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)(a.Text, {
                                    className: d.textSelected,
                                    variant: "text-sm/semibold",
                                    children: n.optionallyDiverseSequence
                                }), (0, r.jsx)(a.Text, {
                                    className: d.text,
                                    variant: "text-sm/semibold",
                                    children: n.name.replace(/_/g, " ")
                                })]
                            })
                        })
                    })
                })
            }
        },
        64798: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GiftStaticOption: function() {
                    return m
                }
            });
            var r = n("37983"),
                s = n("884691"),
                a = n("77078"),
                i = n("78345"),
                l = n("107342"),
                u = n("361396"),
                o = n("291059"),
                c = n("356057"),
                d = n("892712");
            let f = {
                    [i.PremiumGiftStyles.STANDARD_BOX]: u,
                    [i.PremiumGiftStyles.CAKE]: o,
                    [i.PremiumGiftStyles.CHEST]: c,
                    [i.PremiumGiftStyles.COFFEE]: d,
                    [i.PremiumGiftStyles.SNOWGLOBE]: "",
                    [i.PremiumGiftStyles.BOX]: "",
                    [i.PremiumGiftStyles.CUP]: ""
                },
                m = s.forwardRef(function(e, t) {
                    let {
                        isSelected: n,
                        giftStyle: s,
                        setSelectedGiftStyle: i,
                        onFocus: u,
                        onBlur: o
                    } = e;
                    return (0, r.jsx)(a.Clickable, {
                        innerRef: t,
                        className: l.clickable,
                        onClick: () => i(s),
                        onFocus: u,
                        onBlur: o,
                        children: (0, r.jsx)("img", {
                            style: {
                                width: "100%",
                                height: "100%"
                            },
                            alt: "",
                            src: f[s],
                            className: n ? l.customGiftBoxHighlighted : l.customGiftBox
                        })
                    })
                })
        },
        177998: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var s = n("77078"),
                a = n("782340"),
                i = n("816318"),
                l = e => {
                    let {
                        onClick: t
                    } = e;
                    return (0, r.jsx)(s.Anchor, {
                        onClick: t,
                        className: i.link,
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
                i = n.n(a),
                l = n("446674"),
                u = n("77078"),
                o = n("405932"),
                c = n("798609"),
                d = n("642906"),
                f = n("85336"),
                m = n("883558"),
                _ = n("10514"),
                I = n("521012"),
                E = n("659632"),
                p = n("701909"),
                N = n("773336"),
                S = n("719923"),
                P = n("153160"),
                T = n("916187"),
                C = n("968532"),
                A = n("15733"),
                O = n("154889"),
                R = n("917247"),
                g = n("279171"),
                h = n("883662"),
                M = n("824734"),
                L = n("705820"),
                v = n("208559"),
                y = n("177998"),
                x = n("661128"),
                b = n("26785"),
                j = n("617223"),
                G = n("646718"),
                D = n("49111"),
                U = n("843455"),
                B = n("782340"),
                F = n("33769");

            function k(e) {
                var t, n, a, f, m, I;
                let {
                    premiumSubscription: N,
                    skuId: C,
                    selectedPlanId: y,
                    setSelectedPlanId: x,
                    isGift: k = !1,
                    isSeasonalGift: w = !1,
                    selectedGiftStyle: H,
                    setSelectedGiftStyle: Y,
                    priceOptions: W,
                    planOptions: Z,
                    eligibleForMultiMonthPlans: K,
                    referralTrialOfferId: V,
                    subscriptionPeriodEnd: z,
                    showTotal: J = !0,
                    customGiftMessage: X,
                    emojiConfetti: q,
                    soundEffect: Q,
                    setCustomGiftMessage: $,
                    setEmojiConfetti: ee,
                    setSoundEffect: et,
                    discountInvoiceItems: en
                } = e, {
                    activeSubscription: er,
                    setSelectedPlanId: es,
                    selectedSkuId: ea,
                    giftRecipient: ei,
                    selectedPlan: el,
                    priceOptions: eu
                } = (0, d.usePaymentContext)(), eo = (0, E.isCustomGiftEnabled)(ei);
                C = null != C ? C : ea, i(void 0 !== (N = null != N ? N : er), "should not be undefined");
                let [ec, ed] = (0, l.useStateFromStoresArray)([_.default], () => [null != N ? _.default.get(N.planId) : null, null != y ? _.default.get(y) : null]), ef = (0, R.usePremiumTrialOffer)(V), em = null == ef ? void 0 : ef.subscription_trial, e_ = (0, O.usePremiumDiscountOffer)(), eI = null == e_ ? void 0 : null === (t = e_.discount) || void 0 === t ? void 0 : t.plan_ids, eE = null != ed ? ed : el, ep = s.useCallback(e => {
                    null != x ? x(e) : es(e)
                }, [x, es]), eN = null != W ? W : eu;
                i(null != eN, "Price option has to be set");
                let eS = null != ef && (0, G.SubscriptionTrials)[ef.trial_id].skus.includes(C),
                    eP = null != e_ && Z.some(e => null == eI ? void 0 : eI.includes(e)),
                    eT = (0, S.getPrice)(G.SubscriptionPlans.PREMIUM_MONTH_TIER_2, !1, k, eN);
                s.useEffect(() => {
                    K && T.default.trackExposure({
                        location: "5f89bb_1"
                    })
                }, [K]);
                let eC = (null == eE ? void 0 : eE.id) != null && Z.includes(eE.id);
                s.useEffect(() => {
                    if (!eC) {
                        if (null == ec || k) ep(Z[0]);
                        else if (null != ec) {
                            let e = Z.find(e => e !== ec.id);
                            null != e && ep(e)
                        }
                    }
                }, [eC, k, Z, ec, ep]);
                let eA = !eo && (k || !eS && !eP) && eC && J,
                    eO = (0, u.useRadioGroup)(),
                    eR = (null == eE ? void 0 : eE.id) != null ? (0, S.getPrice)(eE.id, !1, k, eN) : void 0,
                    {
                        ipCountryCode: eg
                    } = (0, A.default)(),
                    eh = "HR" === eg && null != eR && eR.currency === U.CurrencyCodes.EUR,
                    eM = (0, S.isPrepaidPaymentSource)(eN.paymentSourceId),
                    eL = (null == em ? void 0 : em.interval) === G.SubscriptionIntervalTypes.DAY ? B.default.Messages.BILLING_TRIAL_2_WEEK_PERIOD : B.default.Messages.BILLING_TRIAL_30_DAY_PERIOD,
                    ev = !k && (eP || null != em && eS && null != z),
                    ey = null == en ? void 0 : null === (f = en.find(e => e.subscriptionPlanId === G.SubscriptionPlans.PREMIUM_MONTH_TIER_2)) || void 0 === f ? void 0 : null === (a = f.discounts) || void 0 === a ? void 0 : null === (n = a.find(e => e.type === c.InvoiceDiscountTypes.SUBSCRIPTION_PLAN)) || void 0 === n ? void 0 : n.amount;
                return (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsxs)("div", {
                        className: eo ? F.stepBodyCustomGift : F.stepBody,
                        children: [(0, r.jsxs)("div", {
                            className: eo ? F.bodyColumnMiddle : void 0,
                            children: [(0, r.jsx)(g.default, {
                                fromBoostCancelModal: !1,
                                className: F.legacyPricingNotice
                            }), (w || eo) && null != H && (0, r.jsx)(v.GiftAnimationOptions, {
                                emojiConfetti: q,
                                setEmojiConfetti: ee,
                                setSoundEffect: et,
                                soundEffect: Q,
                                selectedGiftStyle: H,
                                setSelectedGiftStyle: Y
                            })]
                        }), (0, r.jsxs)("div", {
                            className: eo ? F.bodyColumnRight : void 0,
                            children: [eo && (0, r.jsx)(j.SendGiftToUser, {
                                giftRecipient: ei
                            }), (() => {
                                if (eo && null != $) return (0, r.jsx)(L.default, {
                                    sectionTitle: B.default.Messages.GIFT_OPTIONAL_MESSAGE,
                                    onTextChange: e => $(e),
                                    pendingText: X,
                                    currentText: X
                                })
                            })(), null != ec && !k && (0, r.jsx)("div", {
                                className: F.bodyText,
                                children: function(e, t) {
                                    let n = B.default.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_MONTH,
                                        r = B.default.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_1_YEAR,
                                        s = (() => {
                                            switch (e.interval) {
                                                case G.SubscriptionIntervalTypes.YEAR:
                                                    return n;
                                                case G.SubscriptionIntervalTypes.MONTH:
                                                default:
                                                    return r
                                            }
                                        })(),
                                        a = e.skuId;
                                    switch (t) {
                                        case G.PremiumSubscriptionSKUs.TIER_0:
                                            switch (a) {
                                                case G.PremiumSubscriptionSKUs.TIER_1:
                                                    return B.default.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_TIER_1_TO_TIER_0;
                                                case G.PremiumSubscriptionSKUs.TIER_2:
                                                    return B.default.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_TIER_0;
                                                default:
                                                    return s
                                            }
                                        case G.PremiumSubscriptionSKUs.TIER_1:
                                            switch (a) {
                                                case G.PremiumSubscriptionSKUs.TIER_0:
                                                    return B.default.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_1;
                                                case G.PremiumSubscriptionSKUs.TIER_2:
                                                    return B.default.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_TIER_1;
                                                default:
                                                    return s
                                            }
                                        case G.PremiumSubscriptionSKUs.TIER_2:
                                            switch (a) {
                                                case G.PremiumSubscriptionSKUs.TIER_0:
                                                case G.PremiumSubscriptionSKUs.TIER_1:
                                                    return B.default.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_2;
                                                case G.PremiumSubscriptionSKUs.TIER_2:
                                                    return e.interval === G.SubscriptionIntervalTypes.MONTH ? B.default.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_2_YEAR.format({
                                                        numFreeGuildSubscriptions: G.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM
                                                    }) : s;
                                                default:
                                                    return s
                                            }
                                        default:
                                            return s
                                    }
                                }(ec, C)
                            }), (m = eS, I = eP, eo ? (0, r.jsx)(u.FormTitle, {
                                children: B.default.Messages.GIFT_SUBSCRIPTION_SELECTION
                            }) : ev ? m ? (0, r.jsxs)("div", {
                                children: [(0, r.jsx)(u.Text, {
                                    variant: "text-sm/normal",
                                    className: F.trialPlanSelectHeader,
                                    children: B.default.Messages.BILLING_TRIAL_PAYMENT_MODAL_INFO.format({
                                        trialEnd: z,
                                        trialPeriod: eL
                                    })
                                }), (0, r.jsx)("hr", {
                                    className: F.planSelectSeparator
                                })]
                            }) : I && null != ey && null != eT ? (0, r.jsxs)("div", {
                                children: [(0, r.jsx)(u.Text, {
                                    variant: "text-sm/normal",
                                    className: F.trialPlanSelectHeader,
                                    children: B.default.Messages.BILLING_DISCOUNT_PAYMENT_MODAL_INFO.format({
                                        discountedPrice: (0, P.formatPrice)(eT.amount - ey, eT.currency),
                                        regularPrice: (0, P.formatPrice)(eT.amount, eT.currency)
                                    })
                                }), (0, r.jsx)("hr", {
                                    className: F.planSelectSeparator
                                })]
                            }) : void 0 : (0, r.jsx)("div", {
                                className: F.selectPlanChooseTitle,
                                children: B.default.Messages.BILLING_SWITCH_PLAN_CHOOSE_ONE
                            })), (0, r.jsx)("div", {
                                ...eO,
                                children: Z.map(e => (0, r.jsx)(b.default, {
                                    planId: e,
                                    isGift: k,
                                    premiumSubscription: k ? null : null != N ? N : null,
                                    selectPlan: ep,
                                    selected: (null == eE ? void 0 : eE.id) === e,
                                    priceOptions: eN,
                                    shouldShowUpdatedPaymentModal: ev,
                                    isEligibleForDiscount: eP,
                                    discountAmountOff: ey
                                }, e))
                            }), (0, r.jsx)("div", {
                                children: eA && null != eE && null != eR ? (0, r.jsxs)("div", {
                                    children: [(0, r.jsx)("div", {
                                        className: F.selectPlanDivider
                                    }), (0, r.jsx)(h.PremiumInvoiceTableTotalRow, {
                                        label: B.default.Messages.BILLING_PAYMENT_BREAKDOWN_TOTAL,
                                        value: (0, r.jsx)(M.default, {
                                            price: eR.amount,
                                            currency: eR.currency,
                                            intervalType: k ? null : eE.interval,
                                            intervalCount: eE.intervalCount,
                                            isPrepaidPaymentSource: eM
                                        }),
                                        className: F.selectPlanTotalRow
                                    })]
                                }) : null
                            }), eh && (0, r.jsx)(o.default, {
                                message: B.default.Messages.LOCALIZED_PRICING_HRK_EURO_WARNING.format({
                                    kunaPriceWithCurrency: (0, P.formatPrice)(7.5345 * eR.amount, U.CurrencyCodes.HRK)
                                })
                            }), !k && !ev && J && (0, r.jsx)(o.default, {
                                message: B.default.Messages.BILLING_FINAL_PRICE_MAY_CHANGE.format({
                                    documentationLink: p.default.getArticleURL(D.HelpdeskArticles.LOCALIZED_PRICING)
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
                    onBackClick: i,
                    showBackButton: l,
                    planOptions: o,
                    shouldRenderUpdatedPaymentModal: c = !1,
                    isTrial: f
                } = e, {
                    paymentSources: m,
                    selectedPlan: _
                } = (0, d.usePaymentContext)();
                return a = null != a ? a : m, n = null != n ? n : null == _ ? void 0 : _.id, (0, r.jsxs)(r.Fragment, {
                    children: [null != n && o.includes(n) ? (0, r.jsx)(H, {
                        paymentSources: a,
                        onStepChange: t,
                        selectedPlanId: n,
                        isGift: s,
                        shouldRenderUpdatedPaymentModal: c,
                        isTrial: f
                    }) : (0, r.jsx)(u.Button, {
                        disabled: !0,
                        children: B.default.Messages.SELECT
                    }), l ? (0, r.jsx)(y.default, {
                        onClick: i
                    }) : null]
                })
            }

            function H(e) {
                let {
                    onStepChange: t,
                    selectedPlanId: n,
                    isGift: s,
                    paymentSources: a,
                    shouldRenderUpdatedPaymentModal: i,
                    isTrial: o
                } = e, c = (0, l.useStateFromStores)([I.default], () => I.default.getPremiumTypeSubscription()), {
                    hasEntitlements: d
                } = (0, x.useSubscriptionEntitlements)(n, s), _ = null != c && null != c.paymentSourceId || Object.keys(a).length > 0 || d && !o;
                var E = i ? B.default.Messages.NEXT : B.default.Messages.SELECT,
                    p = f.Step.ADD_PAYMENT_STEPS;
                return _ ? p = f.Step.REVIEW : (0, N.isDesktop)() && function() {
                    let {
                        experiment: e
                    } = C.default.getCurrentConfig({
                        location: "5f89bb_2"
                    });
                    if (e === C.CheckoutV2ChildExperiments.BROWSER_AUTOFILL) {
                        let {
                            enabled: e
                        } = m.default.getCurrentConfig({
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
                    return P
                }
            });
            var r = n("37983");
            n("884691");
            var s = n("414456"),
                a = n.n(s),
                i = n("627445"),
                l = n.n(i),
                u = n("446674"),
                o = n("669491"),
                c = n("77078"),
                d = n("642906"),
                f = n("915639"),
                m = n("10514"),
                _ = n("659632"),
                I = n("719923"),
                E = n("153160"),
                p = n("646718"),
                N = n("782340"),
                S = n("419063");

            function P(e) {
                let {
                    premiumSubscription: t,
                    planId: n,
                    selectPlan: s,
                    selected: i,
                    isGift: P,
                    priceOptions: T,
                    shouldShowUpdatedPaymentModal: C,
                    isEligibleForDiscount: A,
                    discountAmountOff: O
                } = e, R = (0, u.useStateFromStores)([f.default], () => f.default.locale), g = (0, u.useStateFromStores)([m.default], () => m.default.get(n)), {
                    giftRecipient: h
                } = (0, d.usePaymentContext)(), M = (0, _.isCustomGiftEnabled)(h);
                l(null != g, "Missing subscriptionPlan");
                let L = null != t && t.planId === n,
                    v = L || n === p.SubscriptionPlans.PREMIUM_MONTH_TIER_2 && null != t && [p.SubscriptionPlans.PREMIUM_YEAR_TIER_0, p.SubscriptionPlans.PREMIUM_YEAR_TIER_1].includes(t.planId),
                    y = p.DISCOUNTS[n],
                    x = (0, I.getPrice)(n, !1, P, T),
                    b = (0, I.isPrepaidPaymentSource)(T.paymentSourceId),
                    j = null != y && !C,
                    G = g.interval === p.SubscriptionIntervalTypes.YEAR ? N.default.Messages.BILLING_TRIAL_YEARLY_PRICE_AFTER_TRIAL : N.default.Messages.BILLING_TRIAL_MONTHLY_PRICE_AFTER_TRIAL,
                    D = () => null != y && (0, r.jsx)(c.Text, {
                        tag: "span",
                        variant: "eyebrow",
                        color: "always-white",
                        className: S.planOptionDiscount,
                        children: N.default.Messages.BILLING_PLAN_SELECTION_DISCOUNT.format({
                            discount: (0, E.formatPercent)(R, y / 100)
                        })
                    }),
                    U = () => g.interval === p.SubscriptionIntervalTypes.YEAR && null != t || j && !L ? g.interval === p.SubscriptionIntervalTypes.YEAR && null != t ? (0, r.jsxs)("span", {
                        className: S.planOptionMonthsFree,
                        children: ["(", N.default.Messages.BILLING_SWITCH_PLAN_YEARLY_FREE_MONTHS, ")"]
                    }) : j && !L ? D() : void 0 : null;
                return (0, r.jsxs)(c.Clickable, {
                    role: M ? "menuitem" : "radio",
                    "aria-checked": i,
                    tabIndex: i ? 0 : -1,
                    focusProps: {
                        offset: {
                            left: -4,
                            right: -4,
                            top: 0,
                            bottom: 0
                        }
                    },
                    onClick: v ? void 0 : () => s(n),
                    className: a(S.planOptionClickableContainer, {
                        [S.selectedPlan]: M && i,
                        [S.selectionBox]: M
                    }),
                    children: [(0, r.jsxs)("div", {
                        className: a(S.planOption, {
                            [S.planOptionDisabled]: v
                        }),
                        children: [(0, r.jsxs)("div", {
                            className: S.planOptionClickable,
                            children: [!M && (0, r.jsx)(c.Checkbox, {
                                readOnly: !0,
                                displayOnly: !0,
                                value: i,
                                shape: c.Checkbox.Shapes.ROUND,
                                color: o.default.unsafe_rawColors.BRAND_500.css,
                                type: c.Checkbox.Types.INVERTED,
                                className: S.planOptionCheckbox
                            }), (0, r.jsxs)("div", {
                                children: [(0, r.jsxs)("div", {
                                    className: a(S.planOptionInterval, {
                                        [S.optionSelected]: i || M,
                                        [S.updatedOptionSelected]: C && (i || M)
                                    }),
                                    children: [(0, I.getIntervalString)(g.interval, P, b, g.intervalCount, M), M && U()]
                                }), M && (0, r.jsx)("div", {
                                    className: S.planOneTimeCost,
                                    children: N.default.Messages.ONE_TIME_CHARGE.format({
                                        currencyAmount: (0, E.formatPrice)(x.amount, x.currency)
                                    })
                                })]
                            }), L && (0, r.jsxs)("span", {
                                className: S.planOptionCurrentPlan,
                                children: ["(", N.default.Messages.BILLING_SWITCH_PLAN_CURRENT_PLAN, ")"]
                            }), !M && U()]
                        }), C ? (0, r.jsx)("div", {
                            className: a({
                                [S.optionPriceSelected]: i
                            }),
                            children: N.default.Messages.BILLING_TRIAL_PRICE_NOW.format({
                                price: (() => {
                                    if (A && null != O) return g.interval === p.SubscriptionIntervalTypes.MONTH ? (0, E.formatPrice)(x.amount - O, x.currency) : (0, E.formatPrice)(x.amount, x.currency);
                                    return (0, E.formatPrice)(0, x.currency, {
                                        maximumFractionDigits: 0
                                    })
                                })()
                            })
                        }) : (0, r.jsx)("div", {
                            className: a({
                                [S.optionSelected]: i || M
                            }),
                            children: (0, E.formatPrice)(x.amount, x.currency)
                        })]
                    }), C && (0, r.jsx)("div", {
                        className: S.planOptionSubtextContainer,
                        children: (0, r.jsx)(c.Text, {
                            variant: "text-md/normal",
                            color: i ? "text-normal" : "interactive-normal",
                            className: a(S.planOptionSubtext, {
                                [S.discountPlanOptionSubtext]: A
                            }),
                            children: A && null != O ? g.interval === p.SubscriptionIntervalTypes.MONTH ? N.default.Messages.BILLING_DISCOUNT_MONTHLY_PRICE.format({
                                discountedPrice: (0, E.formatPrice)(x.amount - O, x.currency),
                                regularPrice: (0, E.formatPrice)(x.amount, x.currency)
                            }) : N.default.Messages.BILLING_YEARLY_PLAN_SAVINGS.format({
                                percent: y
                            }) : G.format({
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
                    return o
                }
            });
            var r = n("37983");
            n("884691");
            var s = n("77078"),
                a = n("87657"),
                i = n("158998"),
                l = n("782340"),
                u = n("438269");
            let o = e => {
                let {
                    giftRecipient: t
                } = e;
                return null == t ? null : (0, r.jsxs)("div", {
                    className: u.content,
                    children: [(0, r.jsx)(s.FormTitle, {
                        children: l.default.Messages.FORM_LABEL_SEND_TO
                    }), (0, r.jsxs)("div", {
                        className: u.giftRecipientInfo,
                        children: [(0, r.jsx)(a.default, {
                            user: t,
                            className: u.giftRecipient,
                            size: s.AvatarSizes.SIZE_20
                        }), (0, r.jsx)(s.Heading, {
                            className: u.giftRecipientName,
                            variant: "text-md/normal",
                            children: i.default.getName(t)
                        }), (0, r.jsx)(s.Heading, {
                            className: u.giftRecipientTag,
                            variant: "text-md/normal",
                            children: i.default.getUserTag(t)
                        })]
                    })]
                })
            }
        },
        527866: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return H
                }
            });
            var r = n("37983"),
                s = n("884691"),
                a = n("627445"),
                i = n.n(a),
                l = n("976979"),
                u = n("446674"),
                o = n("669491"),
                c = n("77078"),
                d = n("335430"),
                f = n("703332"),
                m = n("740055"),
                _ = n("545876"),
                I = n("736978"),
                E = n("642906"),
                p = n("286350"),
                N = n("102492"),
                S = n("176108"),
                P = n("102985"),
                T = n("160299"),
                C = n("10514"),
                A = n("68238"),
                O = n("659632"),
                R = n("719923"),
                g = n("153160"),
                h = n("210721"),
                M = n("809071"),
                L = n("154889"),
                v = n("883662"),
                y = n("623003"),
                x = n("65324"),
                b = n("570727"),
                j = n("146163"),
                G = n("661128"),
                D = n("617223"),
                U = n("646718"),
                B = n("49111"),
                F = n("843455"),
                k = n("782340"),
                w = n("615689");

            function H(e) {
                var t, n, a;
                let H, Y, {
                        selectedPlanId: W,
                        paymentSources: Z,
                        priceOptions: K,
                        currencies: V,
                        onCurrencyChange: z,
                        isGift: J = !1,
                        onPaymentSourceChange: X,
                        handlePaymentSourceAdd: q,
                        setHasAcceptedTerms: Q,
                        legalTermsNodeRef: $,
                        hasLegalTermsFlash: ee,
                        trialId: et,
                        trialFooterMessageOverride: en,
                        reviewWarningMessage: er,
                        metadata: es,
                        purchaseState: ea,
                        hideSubscriptionDetails: ei,
                        referralTrialOfferId: el,
                        isTrial: eu = !1,
                        isDiscount: eo = !1
                    } = e,
                    {
                        isEmbeddedIAP: ec,
                        activeSubscription: ed,
                        selectedSkuId: ef,
                        defaultPlanId: em,
                        selectedGiftStyle: e_,
                        setSelectedGiftStyle: eI,
                        isPremium: eE,
                        giftRecipient: ep,
                        startedPaymentFlowWithPaymentSourcesRef: eN
                    } = (0, E.usePaymentContext)(),
                    eS = (0, L.usePremiumDiscountOffer)(),
                    eP = null == eS ? void 0 : null === (t = eS.discount) || void 0 === t ? void 0 : t.plan_ids.some(e => U.SubscriptionPlanInfo[e].skuId === ef),
                    eT = !J && null != eS && null != ef && eP,
                    eC = (0, u.useStateFromStores)([C.default], () => C.default.get(W));
                i(null != eC, "Missing plan");
                let eA = [{
                        planId: eC.id,
                        quantity: 1
                    }],
                    eO = ea === p.PurchaseState.PURCHASING || ea === p.PurchaseState.COMPLETED,
                    eR = J || eO,
                    [eg, eh] = (0, M.useSubscriptionInvoicePreview)({
                        items: eA,
                        renewal: !1,
                        preventFetch: eR,
                        applyEntitlements: !0,
                        paymentSourceId: K.paymentSourceId,
                        currency: K.currency,
                        trialId: et,
                        metadata: es
                    }),
                    [eM, eL] = (0, M.useSubscriptionInvoicePreview)({
                        items: eA,
                        renewal: !0,
                        preventFetch: eR,
                        trialId: et,
                        paymentSourceId: K.paymentSourceId,
                        currency: K.currency,
                        metadata: es
                    }),
                    [ev, ey] = (0, M.useSubscriptionInvoicePreview)({
                        items: [{
                            planId: U.SubscriptionPlans.PREMIUM_MONTH_TIER_2,
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
                    eb = null !== (a = null != eh ? eh : eL) && void 0 !== a ? a : ey,
                    ej = (0, u.useStateFromStores)([P.default], () => P.default.enabled),
                    eG = K.paymentSourceId,
                    {
                        hasEntitlements: eD,
                        entitlements: eU
                    } = (0, G.useSubscriptionEntitlements)(eC.id, J),
                    eB = (0, R.isPrepaidPaymentSource)(K.paymentSourceId),
                    eF = (0, N.checkNoPaymentTrialEnabled)(et, eG, W),
                    ek = (0, S.inOneStepSubscriptionCheckout)({
                        isTrial: eu,
                        isGift: J,
                        selectedSkuId: ef,
                        startedPaymentFlowWithPaymentSources: eN.current
                    }),
                    [ew, eH] = s.useState(null == eg ? void 0 : eg.subscriptionPeriodEnd);
                s.useEffect(() => {
                    if (null == ew) eH(null == eg ? void 0 : eg.subscriptionPeriodEnd)
                }, [null == eg ? void 0 : eg.subscriptionPeriodEnd, ew]);
                let eY = s.useMemo(() => (0, R.getPremiumPlanOptions)({
                        skuId: ef,
                        isPremium: eE,
                        multiMonthPlans: [],
                        currentSubscription: ed,
                        isGift: J,
                        isEligibleForTrial: eu,
                        defaultPlanId: em,
                        defaultToMonthlyPlan: !1
                    }), [ef, ed, J, em, eE, eu]),
                    eW = (0, S.planSwitchLoadingShowSpinner)(ek, eg, eC);
                if (null != eb) {
                    let e = eb.message;
                    return eb.code === I.ErrorCodes.INVALID_CURRENCY_FOR_PAYMENT_SOURCE && (e = k.default.Messages.BILLING_ERROR_UNSUPPORTED_CURRENCY), (0, r.jsx)(c.FormErrorBlock, {
                        children: e
                    })
                }
                if (J) Y = (0, r.jsx)(j.SubscriptionInvoiceGift, {
                    paymentSourceId: K.paymentSourceId,
                    plan: eC,
                    className: w.invoice,
                    isPrepaidPaymentSource: eB,
                    isCustomGift: ex
                });
                else if (eu && null != eg) Y = (0, r.jsxs)("div", {
                    children: [(0, r.jsx)(v.PremiumInvoiceTableDivider, {
                        negativeMarginTop: !0
                    }), (0, r.jsxs)(v.PremiumInvoiceTable, {
                        className: w.invoice,
                        children: [(0, r.jsxs)("div", {
                            className: w.trialPriceLine,
                            children: [(0, r.jsx)(c.Text, {
                                variant: "text-md/bold",
                                children: k.default.Messages.BILLING_PAYMENT_BREAKDOWN_TOTAL
                            }), (0, r.jsx)(c.Text, {
                                variant: "text-md/normal",
                                children: k.default.Messages.BILLING_TRIAL_PRICE_NOW.format({
                                    price: (0, g.formatPrice)(0, eg.currency, {
                                        maximumFractionDigits: 0
                                    })
                                })
                            })]
                        }), (0, r.jsx)("div", {
                            className: w.afterTrialPriceLine,
                            children: (0, r.jsx)(j.PremiumTrialInvoiceTableRow, {
                                invoice: eg,
                                plan: eC
                            })
                        })]
                    })]
                });
                else {
                    if (null == eg || null == eM || eW) return (0, r.jsx)("div", {
                        className: w.spinnerWrapper,
                        children: (0, r.jsx)(c.Spinner, {})
                    });
                    eu && eg.subscriptionPeriodEnd !== eM.subscriptionPeriodEnd && (H = eg.subscriptionPeriodEnd), Y = (0, r.jsxs)(v.PremiumInvoiceTable, {
                        className: w.invoice,
                        children: [(0, r.jsx)(v.PremiumInvoiceTableHeader, {
                            children: k.default.Messages.BILLING_SWITCH_PLAN_PURCHASE_DETAILS
                        }), (0, r.jsx)(j.PremiumSubscriptionChangePlanInvoiceRows, {
                            invoice: eg,
                            newPlan: eC,
                            isPrepaidPaymentSource: eB,
                            referralTrialOfferId: el
                        }), eB ? null : (0, r.jsx)(j.SubscriptionInvoiceFooter, {
                            renewalInvoice: eM,
                            isTrial: eu,
                            priceOptions: K,
                            overrideRenewalDate: H,
                            trialFooterMessageOverride: en,
                            hideSubscriptionDetails: ei
                        })]
                    })
                }
                let eZ = l.CountryCodesSets.EEA_COUNTRIES.has(T.default.ipCountryCodeWithFallback),
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
                                intervalCount: i
                            } = R.default.getIntervalForInvoice(t), l = (0, g.formatRate)((0, g.formatPrice)(t.total, t.currency), e, i), u = null != n ? n : t.subscriptionPeriodEnd;
                            r = k.default.Messages.BILLING_LEGAL_MUMBO_JUMBO_TRIAL_TERMS_LABEL.format({
                                termsURL: B.MarketingURLs.TERMS,
                                paidURL: B.MarketingURLs.PAID_TERMS,
                                rate: l,
                                renewalDate: u
                            }), s = w.trialCheckbox, a = w.trialCheckboxLabel
                        }
                        return {
                            checkboxLabel: r,
                            checkboxClassname: s,
                            checkboxLabelClassname: a
                        }
                    }(null != eu && eu, eM, H),
                    eJ = k.default.Messages.BILLING_SELECT_PLAN_GUILD_SUBSCRIPTION.format({
                        planName: eC.name
                    });
                return J && !ex ? eJ = k.default.Messages.PAYMENT_MODAL_SUBTITLE_PREMIUM_GIFT : J && ex ? eJ = "" : (0, R.isPremiumSubscriptionPlan)(eC.id) && (eJ = R.default.getBillingReviewSubheader(null, eC)), eF ? null : (0, r.jsxs)("div", {
                    className: w.stepBody,
                    children: [null != er && (0, r.jsxs)("div", {
                        className: w.reviewWarningMessageContainer,
                        children: [(0, r.jsx)(A.default, {
                            color: o.default.unsafe_rawColors.YELLOW_300.css,
                            width: 20,
                            height: 20
                        }), (0, r.jsx)(c.Text, {
                            className: w.reviewWarningMessage,
                            variant: "text-sm/normal",
                            children: er
                        })]
                    }), ek && (0, r.jsxs)("div", {
                        children: [(0, r.jsx)(v.PremiumInvoiceTableDivider, {
                            negativeMarginTop: !0
                        }), (0, r.jsx)(b.PremiumSwitchPlanSelectBody, {
                            isGift: J,
                            selectedGiftStyle: e_,
                            setSelectedGiftStyle: eI,
                            planOptions: eY,
                            eligibleForMultiMonthPlans: !1,
                            isSeasonalGift: !1,
                            referralTrialOfferId: void 0,
                            selectedPlanId: W,
                            subscriptionPeriodEnd: ew,
                            showTotal: !1,
                            discountInvoiceItems: eT ? null == ev ? void 0 : ev.invoiceItems : void 0
                        }), (0, r.jsx)(v.PremiumInvoiceTableDivider, {})]
                    }), !eu && (0, r.jsx)(c.FormTitle, {
                        tag: c.FormTitleTags.H5,
                        children: eJ
                    }), ex && null != e_ && (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(x.default, {
                            defaultAnimationState: h.AnimationState.LOOP,
                            giftStyle: e_,
                            shouldAnimate: !0,
                            className: w.giftMainAnimation
                        }), (0, r.jsx)(D.SendGiftToUser, {
                            giftRecipient: ep
                        })]
                    }), Y, (0, r.jsxs)("div", {
                        className: w.paymentSourceWrapper,
                        children: [eu ? (0, r.jsx)(c.FormTitle, {
                            tag: c.FormTitleTags.H5,
                            className: w.formTitle,
                            children: k.default.Messages.BILLING_STEP_PAYMENT_METHOD
                        }) : (0, r.jsx)(c.FormTitle, {
                            tag: c.FormTitleTags.H5,
                            children: k.default.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_TITLE
                        }), (0, r.jsx)(m.default, {
                            paymentSources: Object.values(Z),
                            selectedPaymentSourceId: eG,
                            prependOption: eD && !eu ? {
                                label: k.default.Messages.ATTACH_PAYMENT_SOURCE_PROMPT_OPTION_OPTIONAL,
                                value: null
                            } : null,
                            onChange: X,
                            onPaymentSourceAdd: q,
                            hidePersonalInformation: ej,
                            isTrial: eu
                        }), eD && null == eG ? (0, r.jsx)("div", {
                            className: w.paymentSourceOptionalWarning,
                            children: k.default.Messages.ATTACH_PAYMENT_SOURCE_OPTIONAL_WITH_ENTITLEMENTS_WARNING.format({
                                months: eU.length
                            })
                        }) : null, eo ? null : (0, r.jsxs)(d.CurrencyWrapper, {
                            currencies: V,
                            className: w.currencyWrapper,
                            children: [(0, r.jsx)(c.FormTitle, {
                                tag: c.FormTitleTags.H5,
                                children: k.default.Messages.PAYMENT_CURRENCY
                            }), (0, r.jsx)(d.default, {
                                selectedCurrency: K.currency,
                                currencies: V,
                                onChange: z
                            })]
                        })]
                    }), (0, r.jsx)(y.default, {
                        isActive: ee,
                        ref: $,
                        children: (0, r.jsx)(_.default, {
                            onChange: Q,
                            forceShow: !0,
                            checkboxLabel: eK,
                            checkboxClassname: eV,
                            checkboxLabelClassname: ez,
                            finePrint: (0, r.jsx)(f.default, {
                                hide: eu || eo,
                                subscriptionPlan: eC,
                                renewalInvoice: eM,
                                isGift: J,
                                paymentSourceType: null === (n = Z[null != eG ? eG : ""]) || void 0 === n ? void 0 : n.type,
                                isEmbeddedIAP: ec,
                                basePrice: (0, R.getPrice)(eC.id, !1, J, K)
                            }),
                            showPricingLink: eC.currency !== F.CurrencyCodes.USD,
                            showWithdrawalWaiver: eZ,
                            disabled: eO,
                            isTrial: eu,
                            isDiscount: eo,
                            subscriptionPlan: eC,
                            isGift: J
                        })
                    })]
                })
            }
        },
        451516: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return M
                }
            });
            var r = n("37983"),
                s = n("884691"),
                a = n("627445"),
                i = n.n(a),
                l = n("446674"),
                u = n("77078"),
                o = n("850068"),
                c = n("685665"),
                d = n("642906"),
                f = n("605886"),
                m = n("286350"),
                _ = n("376641"),
                I = n("102492"),
                E = n("926223"),
                p = n("467292"),
                N = n("622839"),
                S = n("145131"),
                P = n("599110"),
                T = n("719923"),
                C = n("921149"),
                A = n("177998"),
                O = n("661128"),
                R = n("868869"),
                g = n("49111"),
                h = n("717913");

            function M(e) {
                var t;
                let {
                    premiumSubscription: n,
                    setPurchaseState: a,
                    onBack: M,
                    onNext: L,
                    legalTermsNodeRef: v,
                    flashLegalTerms: y,
                    invoiceError: x,
                    planError: b,
                    onPurchaseError: j,
                    baseAnalyticsData: G,
                    flowStartTime: D,
                    isGift: U = !1,
                    giftStyle: B,
                    customGiftMessage: F,
                    emojiConfetti: k,
                    soundEffect: w,
                    trialId: H,
                    planGroup: Y,
                    analyticsLocation: W,
                    purchaseTokenAuthState: Z,
                    openInvoiceId: K,
                    metadata: V,
                    backButtonEligible: z,
                    disablePurchase: J,
                    isTrial: X = !1
                } = e, {
                    selectedPlan: q,
                    priceOptions: Q,
                    setHasAcceptedTerms: $,
                    setPurchaseError: ee,
                    purchaseType: et,
                    paymentSourceId: en,
                    paymentSources: er,
                    selectedSkuId: es,
                    skusById: ea,
                    skuPricePreviewsById: ei,
                    referralCode: el,
                    contextMetadata: eu,
                    giftRecipient: eo
                } = (0, d.usePaymentContext)(), ec = null == q ? void 0 : q.id, ed = (0, I.checkNoPaymentTrialEnabled)(H, Q.paymentSourceId, ec), ef = (0, l.useStateFromStores)([E.default], () => E.default.popupCallbackCalled), {
                    analyticsLocations: em
                } = (0, c.default)(), e_ = null != en ? er[en] : null, [eI, eE] = s.useState(ed), [ep, eN] = s.useState(!1), {
                    hasEntitlements: eS
                } = (0, O.useSubscriptionEntitlements)(ec, U), eP = (0, T.isPrepaidPaymentSource)(Q.paymentSourceId), eT = eS || ed, eC = (0, C.useIsPrepaidPaymentPastDue)(), eA = null, eO = null;
                if (et === g.PurchaseTypes.ONE_TIME) {
                    i(null != es, "SKU must be selected for one-time purchases"), i(null != (eA = null !== (t = ea[es]) && void 0 !== t ? t : null), "SKU must exist and be fetched.");
                    let e = ei[es],
                        n = null != en ? en : N.NO_PAYMENT_SOURCE;
                    eO = null != e ? e[n] : null
                }
                let eR = async () => {
                    await (0, f.purchaseProduct)({
                        setPurchaseState: a,
                        setHasAcceptedTerms: $,
                        setIsSubmitting: eE,
                        setPurchaseError: ee,
                        hasRedirectURL: ep,
                        setHasRedirectURL: eN,
                        isGift: U,
                        giftStyle: B,
                        baseAnalyticsData: G,
                        analyticsLocation: W,
                        analyticsLocations: em,
                        flowStartTime: D,
                        subscriptionPlan: q,
                        planGroup: Y,
                        trialId: H,
                        priceOptions: Q,
                        paymentSource: e_,
                        isPrepaidPaymentPastDue: eC,
                        openInvoiceId: K,
                        premiumSubscription: n,
                        onNext: L,
                        metadata: V,
                        sku: eA,
                        skuPricePreview: eO,
                        purchaseType: et,
                        referralCode: el,
                        loadId: eu.loadId,
                        giftRecipient: eo,
                        customMessage: F,
                        emojiConfetti: k,
                        soundEffect: w
                    })
                };
                s.useEffect(() => {
                    let e = async () => {
                        if (!0 === ef) try {
                            if (null == E.default.redirectedPaymentId) return;
                            await (0, o.redirectedPaymentSucceeded)(E.default.redirectedPaymentId), P.default.track(g.AnalyticEvents.PAYMENT_FLOW_SUCCEEDED, {
                                ...G,
                                duration_ms: Date.now() - D,
                                payment_source_type: null == e_ ? void 0 : e_.type
                            }), a(m.PurchaseState.COMPLETED), L()
                        } catch (e) {
                            a(m.PurchaseState.FAIL), j(e), P.default.track(g.AnalyticEvents.PAYMENT_FLOW_FAILED, {
                                ...G,
                                payment_source_id: en,
                                payment_source_type: null == e_ ? void 0 : e_.type,
                                duration_ms: Date.now() - D
                            })
                        } finally {
                            eE(!1), (0, o.resetPaymentIntentId)()
                        } else Z === p.PurchaseTokenAuthState.SUCCESS && await eR()
                    };
                    e()
                }, [ef]), s.useEffect(() => {
                    ed && !U && null == n && eR()
                }, [ed, U, n]);
                let eg = null != K || et === g.PurchaseTypes.ONE_TIME;
                return ed ? null : (0, r.jsxs)(u.ModalFooter, {
                    align: S.default.Align.CENTER,
                    children: [(0, r.jsx)(R.default, {
                        legalTermsNodeRef: v,
                        invoiceError: x,
                        planError: b,
                        disablePurchase: J,
                        flashLegalTerms: y,
                        isSubmitting: eI,
                        premiumSubscription: n,
                        isGift: U,
                        planGroup: Y,
                        isPrepaid: eP,
                        isTrial: X,
                        makePurchase: eR,
                        needsPaymentSource: null == e_ && !eT
                    }), (0, r.jsx)(_.default, {}), z && !eg ? (0, r.jsx)("div", {
                        className: h.back,
                        children: (0, r.jsx)(A.default, {
                            onClick: M
                        })
                    }) : null]
                })
            }
        },
        891653: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var r = n("37983");
            n("884691");
            var s = n("414456"),
                a = n.n(s),
                i = n("77078"),
                l = n("216422"),
                u = n("782340"),
                o = n("881609");

            function c(e) {
                let {
                    text: t = u.default.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP,
                    className: n
                } = e;
                return (0, r.jsx)(i.Tooltip, {
                    text: t,
                    children: e => (0, r.jsx)(i.Clickable, {
                        ...e,
                        children: (0, r.jsx)(l.default, {
                            className: a(o.nitroWheel, n)
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
                i = n("65597"),
                l = n("77078"),
                u = n("70723"),
                o = n("254490"),
                c = n("891653"),
                d = n("632892"),
                f = n("646718"),
                m = n("326908");

            function _(e) {
                let {
                    errors: t
                } = e;
                return (0, r.jsx)(r.Fragment, {
                    children: t.map((e, t) => (0, r.jsx)(l.Text, {
                        variant: "text-xs/normal",
                        color: "text-danger",
                        className: m.errorMessage,
                        children: e.replace(/[0-9.,]+ ?kb/g, e => {
                            let t = 1024 * parseInt(e, 10);
                            return isNaN(t) ? e : (0, o.sizeString)(t)
                        })
                    }, t))
                })
            }

            function I(e) {
                let {
                    title: t,
                    titleIcon: n,
                    titleId: s,
                    description: o,
                    children: I,
                    className: E,
                    errors: p,
                    disabled: N = !1,
                    hideDivider: S = !1,
                    showBorder: P = !1,
                    borderType: T,
                    hasBackground: C = !1,
                    forcedDivider: A = !1,
                    showPremiumIcon: O = !1
                } = e, R = (0, i.default)([u.default], () => {
                    let e = u.default.activeSubstep;
                    return null != e && f.PremiumTutorialSubstepsToStepMap[e] === f.PremiumTutorialSteps.PROFILE_CUSTOMIZATION
                });
                return (0, r.jsx)("div", {
                    className: a(m.customizationSection, E, {
                        [m.disabled]: N,
                        [m.hideDivider]: S,
                        [m.showBorder]: P,
                        [m.withDivider]: A
                    }),
                    children: (0, r.jsxs)(d.default, {
                        className: m.customizationSectionBorder,
                        backgroundClassName: m.customizationSectionBackground,
                        isShown: P && !R,
                        type: T,
                        hasBackground: C,
                        children: [(0, r.jsxs)(l.FormTitle, {
                            className: m.title,
                            id: s,
                            children: [t, O && (0, r.jsx)(c.default, {}), n]
                        }), null != o ? (0, r.jsx)(l.FormText, {
                            type: l.FormText.Types.DESCRIPTION,
                            className: m.sectionDescription,
                            children: o
                        }) : null, I, null != p && (0, r.jsx)(_, {
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
                i = n("884691"),
                l = n("414456"),
                u = n.n(l),
                o = n("623682");
            (r = s || (s = {})).PREMIUM = "premium", r.LIMITED = "limited";
            let c = {
                [s.PREMIUM]: {
                    border: o.premiumFeatureBorder,
                    background: o.premiumBackground
                },
                [s.LIMITED]: {
                    border: o.limitedFeatureBorder,
                    background: o.limitedBackground
                }
            };
            var d = i.forwardRef(function(e, t) {
                let {
                    children: n,
                    type: r = s.PREMIUM,
                    isShown: i,
                    hasBackground: l = !1,
                    className: d,
                    backgroundClassName: f
                } = e;
                if (!i) return (0, a.jsx)(a.Fragment, {
                    children: n
                });
                let {
                    border: m,
                    background: _
                } = c[r];
                return (0, a.jsx)("div", {
                    ref: t,
                    className: u(m, d),
                    children: (0, a.jsx)("div", {
                        className: u(l ? _ : o.background, f),
                        children: n
                    })
                })
            })
        },
        742926: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var r = n("37983"),
                s = n("884691"),
                a = n("292915"),
                i = n("77078"),
                l = n("389480"),
                u = n("191191"),
                o = n("782340"),
                c = n("895576");
            let d = [54, 8, 8, 8];

            function f(e) {
                let {
                    onSelect: t,
                    sound: n
                } = e, [f, m] = s.useState(!1);

                function _(e) {
                    m(!1), null == t || t(e)
                }
                let I = e => (0, r.jsxs)("div", {
                    className: c.customGiftHeader,
                    children: [(0, r.jsxs)("div", {
                        className: c.customGiftHeaderText,
                        children: [(0, r.jsx)(i.Text, {
                            variant: "text-md/bold",
                            children: o.default.Messages.GIFT_SELECT_SOUND
                        }), (0, r.jsx)(i.Text, {
                            variant: "text-sm/normal",
                            children: o.default.Messages.GIFT_SELECT_SOUNDBOARD_OR_EMOJI_DESCRIPTION
                        })]
                    }), (0, r.jsx)("div", {
                        className: c.searchAndSound,
                        children: e
                    })]
                });
                return (0, r.jsx)(i.Popout, {
                    shouldShow: f,
                    position: "left",
                    onRequestClose: () => m(!1),
                    renderPopout: e => {
                        let {
                            closePopout: t
                        } = e;
                        return (0, r.jsx)(i.Dialog, {
                            children: (0, r.jsx)(u.default, {
                                suppressPlaySound: !0,
                                shouldShowUpsell: !1,
                                guildId: null,
                                channel: null,
                                onClose: t,
                                onSelect: _,
                                analyticsSource: "gift soundboard",
                                soundButtonOverlay: l.SoundButtonOverlay.ADD,
                                listPadding: d,
                                renderHeader: I,
                                defaultSoundsOnly: !0
                            })
                        })
                    },
                    children: () => (0, r.jsx)(i.Clickable, {
                        className: c.sound,
                        onClick: () => m(!0),
                        children: null == n ? (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)(a.SoundboardIcon, {
                                className: c.soundIcon,
                                width: 14,
                                height: 14
                            }), (0, r.jsx)(i.Text, {
                                className: c.text,
                                variant: "text-sm/semibold",
                                children: o.default.Messages.GIFT_SELECT_SOUND
                            })]
                        }) : (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)(i.Text, {
                                className: c.textSelected,
                                variant: "text-sm/semibold",
                                children: n.emojiName
                            }), (0, r.jsx)(i.Text, {
                                className: c.text,
                                variant: "text-sm/semibold",
                                children: n.name
                            })]
                        })
                    })
                })
            }

            function m(e) {
                let {
                    sound: t,
                    onSelect: n
                } = e;
                return (0, r.jsx)("div", {
                    className: c.container,
                    children: (0, r.jsx)(f, {
                        onSelect: n,
                        sound: t
                    })
                })
            }
        },
        882641: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                EMOJI_BUTTON_SPRING_CONFIG: function() {
                    return _
                },
                default: function() {
                    return I
                }
            });
            var r = n("37983"),
                s = n("884691"),
                a = n("414456"),
                i = n.n(a),
                l = n("301165"),
                u = n("77078"),
                o = n("913144"),
                c = n("474293"),
                d = n("958706"),
                f = n("782340"),
                m = n("505436");
            let _ = {
                tension: 800,
                friction: 24
            };
            var I = function(e) {
                let {
                    tabIndex: t,
                    className: n,
                    renderButtonContents: a,
                    active: I,
                    onClick: E,
                    "aria-controls": p,
                    focusProps: N
                } = e, [S, P] = s.useState(!1), [T, C] = s.useState(0), A = S || I, O = (0, c.getClass)(m, "emojiButton", A ? "Hovered" : "Normal"), R = function(e) {
                    let t = -e % d.EmojiSprites.PickerPerRow * 22,
                        n = -(22 * Math.floor(e / d.EmojiSprites.PickerPerRow));
                    return {
                        backgroundPosition: "".concat(t, "px ").concat(n, "px"),
                        backgroundSize: "".concat(22 * d.EmojiSprites.PickerPerRow, "px ").concat(22 * Math.ceil(d.EmojiSprites.PickerCount / d.EmojiSprites.PickerPerRow), "px")
                    }
                }(T), g = s.useCallback(() => {
                    if (A) return;
                    let e = Math.floor(Math.random() * d.EmojiSprites.PickerCount);
                    P(!0), C(e), o.default.dispatch({
                        type: "EMOJI_INTERACTION_INITIATED",
                        interaction: d.EmojiInteractionPoint.EmojiButtonMouseEntered
                    })
                }, [A, P, C]), h = s.useCallback(() => {
                    P(!1)
                }, [P]), M = s.useCallback(() => {
                    o.default.dispatch({
                        type: "EMOJI_INTERACTION_INITIATED",
                        interaction: d.EmojiInteractionPoint.EmojiButtonFocused
                    })
                }, []);
                return (0, r.jsx)(u.Button, {
                    look: u.Button.Looks.BLANK,
                    size: u.Button.Sizes.NONE,
                    tabIndex: t,
                    className: i(O, n),
                    onMouseEnter: g,
                    onMouseOver: g,
                    onMouseLeave: h,
                    onFocus: M,
                    onClick: E,
                    "aria-label": f.default.Messages.SELECT_EMOJI,
                    "aria-controls": p,
                    "aria-expanded": I,
                    "aria-haspopup": "dialog",
                    focusProps: N,
                    children: null != a ? a() : (0, r.jsx)(l.Spring, {
                        config: _,
                        to: {
                            value: A ? 1 : 0
                        },
                        children: e => {
                            let {
                                value: t
                            } = e;
                            return (0, r.jsx)(l.animated.div, {
                                className: m.sprite,
                                style: {
                                    ...R,
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
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var s = n("469563"),
                a = n("763377"),
                i = n("75196"),
                l = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: s = "currentColor",
                        foreground: a,
                        ...l
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, i.default)(l),
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
                    return i
                }
            });
            var r = n("37983");
            n("884691");
            var s = n("469563"),
                a = n("645156"),
                i = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: s = "currentColor",
                        className: a,
                        foreground: i
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
                                className: i,
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