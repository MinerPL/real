(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["32196"], {
        280968: function(e, t, n) {
            "use strict";
            e.exports = n.p + "21776a8b4fe8087b0bdc.svg"
        },
        392459: function(e, t, n) {
            "use strict";
            e.exports = n.p + "e813b2b634fd928e71ca.svg"
        },
        26245: function(e, t, n) {
            "use strict";
            e.exports = n.p + "da8bcf0d776e8fde9e5b.svg"
        },
        21340: function(e, t, n) {
            "use strict";
            e.exports = n.p + "d008fce672ad7583f06e.svg"
        },
        159548: function(e, t, n) {
            "use strict";
            e.exports = n.p + "8098ac87218ab1d81fe5.svg"
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
                    return r
                },
                default: function() {
                    return c
                }
            }), n("222007");
            var r, s, a, i, l = n("884691"),
                u = n("917351");

            function o(e) {
                return 2 === e || 3 === e ? 1 : 0
            }(a = r || (r = {}))[a.VERTICAL_TOP = 0] = "VERTICAL_TOP", a[a.VERTICAL_BOTTOM = 1] = "VERTICAL_BOTTOM", a[a.HORIZONTAL_LEFT = 2] = "HORIZONTAL_LEFT", a[a.HORIZONTAL_RIGHT = 3] = "HORIZONTAL_RIGHT", (i = s || (s = {}))[i.VERTICAL = 0] = "VERTICAL", i[i.HORIZONTAL = 1] = "HORIZONTAL";
            var c = e => {
                let {
                    initialElementDimension: t,
                    resizableDomNodeRef: n,
                    maxDimension: r,
                    minDimension: s,
                    onElementResize: a,
                    onElementResizeEnd: i,
                    throttleDuration: c = 300,
                    orientation: d,
                    usePointerEvents: f = !1
                } = e, [m, _] = l.useState(!1), I = l.useRef(0), E = l.useRef(null == t ? 0 : t);
                return l.useLayoutEffect(() => {
                    if (!m || null == n.current) return;

                    function e(e) {
                        let t = 1 === o(d) ? e.screenX : e.screenY,
                            n = 0 === d || 2 === d,
                            a = (t - I.current) * (n ? -1 : 1),
                            i = E.current + a;
                        return (0, u.clamp)(i, null != s ? s : 0, null != r ? r : i)
                    }
                    let t = (0, u.throttle)(a, c),
                        l = r => {
                            if (null == n.current) return null;
                            let s = e(r),
                                a = 1 === o(d) ? "width" : "height";
                            n.current.style[a] = "".concat(s, "px"), t(s)
                        },
                        p = t => {
                            _(!1);
                            let n = e(t);
                            a(n), null == i || i(n)
                        },
                        S = f ? "pointerup" : "mouseup",
                        N = f ? "pointermove" : "mousemove",
                        P = n.current.ownerDocument;
                    return P.addEventListener(S, p), P.addEventListener(N, l), () => {
                        P.removeEventListener(S, p), P.removeEventListener(N, l), t.cancel()
                    }
                }, [m, a, s, r, d, n, c, i, f]), l.useCallback(e => {
                    let t = 1 === o(d);
                    null != n.current && (E.current = t ? n.current.offsetWidth : n.current.offsetHeight), I.current = t ? e.screenX : e.screenY, _(!0)
                }, [d, n])
            }
        },
        605886: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                purchaseProduct: function() {
                    return N
                }
            }), n("70102"), n("222007");
            var r = n("627445"),
                s = n.n(r),
                a = n("913144"),
                i = n("850068"),
                l = n("112679"),
                u = n("596523"),
                o = n("465527"),
                c = n("388290"),
                d = n("599110"),
                f = n("745279"),
                m = n("659632"),
                _ = n("719923"),
                I = n("286350"),
                E = n("49111"),
                p = n("646718"),
                S = n("782340");
            async function N(e) {
                let {
                    setPurchaseState: t,
                    setHasAcceptedTerms: n,
                    setIsSubmitting: r,
                    setPurchaseError: N,
                    hasRedirectURL: P,
                    setHasRedirectURL: T,
                    isGift: C,
                    giftStyle: A,
                    baseAnalyticsData: O,
                    analyticsLocation: R,
                    analyticsLocations: h,
                    flowStartTime: g,
                    subscriptionPlan: v,
                    planGroup: M,
                    trialId: x,
                    priceOptions: y,
                    paymentSource: L,
                    isPrepaidPaymentPastDue: b,
                    openInvoiceId: j,
                    premiumSubscription: G,
                    onNext: D,
                    metadata: U,
                    sku: B,
                    skuPricePreview: F,
                    purchaseType: k,
                    referralCode: w,
                    loadId: Y,
                    giftRecipient: H,
                    customMessage: W,
                    emojiConfetti: Z,
                    soundEffect: K
                } = e;
                t(I.PurchaseState.PURCHASING), n(!0), r(!0), a.default.wait(l.clearError), N(null);
                try {
                    let e, n, r;
                    if (d.default.track(E.AnalyticEvents.PAYMENT_FLOW_COMPLETED, {
                            ...O,
                            duration_ms: Date.now() - g
                        }), P) return;
                    let a = (0, m.getGiftExperience)(H),
                        l = m.GIFT_EXPERIENCES_WITH_CUSTOM_MESSAGING.has(a),
                        N = m.GIFT_EXPERIENCES_WITH_CUSTOM_EMOJI_SOUNDBOARD.has(a);
                    if (k === E.PurchaseTypes.ONE_TIME) s(null != B, "SKU must exist and be fetched."), s(null != F, "SKUPricePreview must exist."), e = await (0, o.purchaseSKU)(B.applicationId, B.id, {
                        expectedAmount: F.amount,
                        expectedCurrency: F.currency,
                        isGift: C,
                        paymentSource: L,
                        loadId: Y,
                        giftStyle: A,
                        recipientId: a !== m.GiftExperience.DEFAULT ? null == H ? void 0 : H.id : void 0,
                        customMessage: l ? W : void 0,
                        emojiConfetti: N ? Z : void 0,
                        soundEffect: N ? K : void 0
                    });
                    else if (s(null != v, "Missing subscriptionPlan"), C) {
                        let t = (0, _.getPrice)(v.id, !1, !0, y);
                        if ("usd" === t.currency && (null == L ? void 0 : L.type) === E.PaymentSourceTypes.GCASH) {
                            var V;
                            let e = Error("Invalid USD currency for GCash");
                            (0, f.captureBillingException)(e, {
                                tags: {
                                    paymentSourceId: null !== (V = null == L ? void 0 : L.id) && void 0 !== V ? V : "",
                                    subscriptionPlanId: v.id,
                                    priceOptions: JSON.stringify(y)
                                }
                            })
                        }
                        e = await (0, o.purchaseSKU)(p.PREMIUM_SUBSCRIPTION_APPLICATION, v.skuId, {
                            expectedAmount: t.amount,
                            expectedCurrency: t.currency,
                            paymentSource: L,
                            subscriptionPlanId: v.id,
                            isGift: !0,
                            giftStyle: A,
                            loadId: Y,
                            recipientId: a !== m.GiftExperience.DEFAULT ? null == H ? void 0 : H.id : void 0,
                            customMessage: l ? W : void 0,
                            emojiConfetti: N ? Z : void 0,
                            soundEffect: N ? K : void 0
                        })
                    } else e = b && null != j && null != L && null != G ? E.PREPAID_PAYMENT_SOURCES.has(L.type) ? await (0, i.payInvoiceManually)(G, j, L, y.currency) : await (0, i.updateSubscription)(G, {
                        paymentSource: L,
                        currency: y.currency
                    }, h, R) : null != G ? await (0, i.updateSubscription)(G, {
                        items: (0, _.getItemsWithUpsertedPlanIdForGroup)(G, v.id, 1, new Set(M)),
                        paymentSource: L,
                        currency: y.currency
                    }, h, R) : await (0, u.subscribe)({
                        planId: v.id,
                        currency: y.currency,
                        paymentSource: L,
                        trialId: x,
                        metadata: U,
                        referralCode: w,
                        loadId: Y
                    });
                    if (e.redirectConfirmation) {
                        T(null != e.redirectURL);
                        return
                    }
                    let z = {
                        ...O,
                        duration_ms: Date.now() - g,
                        payment_source_type: null == L ? void 0 : L.type
                    };
                    C && (l && (z.is_custom_message_edited = W !== S.default.Messages.DEFAULT_CUSTOM_GIFT_MESSAGE), N && (z.is_custom_emoji_sound_available = !0, null != Z && (z.emoji_name = Z.surrogates), null != K && (z.sound_id = K.soundId))), t(I.PurchaseState.COMPLETED), "subscription" in e ? n = null != e.subscription ? c.default.createFromServer(e.subscription) : null : "entitlements" in e && (r = null != e.entitlements ? e.entitlements : void 0), D(n, r)
                } catch (e) {
                    t(I.PurchaseState.FAIL), N(e), d.default.track(E.AnalyticEvents.PAYMENT_FLOW_FAILED, {
                        ...O,
                        payment_error_code: null == e ? void 0 : e.code,
                        payment_source_id: null == L ? void 0 : L.id,
                        payment_source_type: null == L ? void 0 : L.type,
                        duration_ms: Date.now() - g
                    })
                } finally {
                    !P && r(!1)
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
                i = n("917247"),
                l = n("724522"),
                u = n("599110"),
                o = n("635357"),
                c = n("642906"),
                d = n("85336"),
                f = n("49111"),
                m = n("646718");

            function _(e) {
                let {
                    analyticsData: t,
                    initialPlanId: n,
                    breadcrumbSteps: r,
                    handleStepChange: _,
                    referralTrialOfferId: I,
                    onReturn: E
                } = e, {
                    contextMetadata: p,
                    step: S,
                    paymentSources: N,
                    paymentSourceId: P,
                    setPaymentSourceId: T,
                    purchaseError: C,
                    setPurchaseError: A,
                    purchaseErrorBlockRef: O,
                    paymentAuthenticationState: R,
                    selectedSkuId: h
                } = (0, c.usePaymentContext)(), {
                    isGift: g
                } = (0, o.useGiftContext)(), v = {
                    ...(0, l.useSharedPaymentModal)(),
                    paymentSources: N,
                    paymentSourceId: P,
                    setPaymentSourceId: T,
                    purchaseError: C,
                    setPurchaseError: A,
                    purchaseErrorBlockRef: O,
                    paymentAuthenticationState: R
                }, M = (0, i.usePremiumTrialOffer)(I), x = !g && null != M && null != h && (0, m.SubscriptionTrials)[M.trial_id].skus.includes(h), y = null != E ? E : () => {
                    let e = Object.values(N).length < 1 && null == n ? d.Step.PLAN_SELECT : d.Step.REVIEW;
                    _(e, {
                        trackedFromStep: d.Step.PAYMENT_TYPE
                    })
                };
                s(S, "Step should be set here");
                let L = (0, a.useStableMemo)(() => Date.now(), [S]);
                return (0, l.AddPaymentFlow)({
                    paymentModalArgs: v,
                    initialStep: d.Step.PAYMENT_TYPE,
                    prependSteps: [d.Step.PROMOTION_INFO],
                    appendSteps: [d.Step.REVIEW, d.Step.CONFIRM],
                    breadcrumpSteps: r,
                    currentBreadcrumpStep: S,
                    usePaymentModalStep: !0,
                    onReturn: y,
                    onComplete: e => {
                        _(d.Step.REVIEW, {
                            trackedFromStep: e
                        })
                    },
                    onStepChange: e => {
                        let {
                            currentStep: n,
                            toStep: r
                        } = e, s = Date.now();
                        u.default.track(f.AnalyticEvents.PAYMENT_FLOW_STEP, {
                            ...t,
                            from_step: n,
                            to_step: r,
                            step_duration_ms: s - L,
                            flow_duration_ms: s - p.startTime
                        })
                    },
                    isEligibleForTrial: x
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
            }), n("222007");
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
            }), n("222007"), n("424973");
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
                        currency: S,
                        paymentSourceTypes: N
                    } = t, P = 0 !== N.length, T = E(I), C = (0, i.formatPrice)(p, S, {
                        style: "currency",
                        currency: S,
                        currencyDisplay: "symbol",
                        localeOverride: T
                    }), A = o.default.Messages.LOCALIZED_PRICING_BANNER_BODY_NEW_CURRENCY.format({
                        helpCenterLink: a.default.getArticleURL(l.HelpdeskArticles.LOCALIZED_PRICING),
                        currencyISOCode: S.toUpperCase(),
                        localizedPriceWithCurrencySymbol: C
                    });
                    if (d.has(S) && (A = o.default.Messages.LOCALIZED_PRICING_BANNER_BODY_EXISTING_CURRENCY.format({
                            helpCenterLink: a.default.getArticleURL(l.HelpdeskArticles.LOCALIZED_PRICING),
                            localizedPriceWithCurrencySymbol: C
                        })), c.has(S) && (A = o.default.Messages.LOCALIZED_PRICING_BANNER_BODY_NEW_CURRENCY_WITH_AMBIGUOUS_SYMBOL.format({
                            helpCenterLink: a.default.getArticleURL(l.HelpdeskArticles.LOCALIZED_PRICING),
                            currencyISOCode: S.toUpperCase(),
                            localizedPriceWithCurrencySymbol: C
                        })), null != n && !n.hasPremiumNitroMonthly && (A = o.default.Messages.LOCALIZED_PRICING_BANNER_BODY_WITHOUT_PRICE.format({
                            helpCenterLink: a.default.getArticleURL(l.HelpdeskArticles.LOCALIZED_PRICING),
                            currencyISOCode: S.toUpperCase()
                        })), S === u.CurrencyCodes.EUR && (A = r ? o.default.Messages.LOCALIZED_PRICING_BANNER_NO_LOWERED_PRICE_SINGLE_STRING.format({
                            country: (0, s.getI18NCountryName)(I),
                            currencyISOCode: S.toUpperCase(),
                            helpCenterLink: a.default.getArticleURL(l.HelpdeskArticles.LOCALIZED_PRICING)
                        }) : o.default.Messages.LOCALIZED_PRICING_BANNER_NO_LOWERED_PRICE.format({
                            currencyISOCode: S.toUpperCase(),
                            helpCenterLink: a.default.getArticleURL(l.HelpdeskArticles.LOCALIZED_PRICING)
                        })), P) {
                        let e = m.filter(e => N.includes(e)),
                            t = N.filter(e => !m.includes(e)),
                            n = [...e, ...t],
                            r = n.slice(0, 2).map(e => {
                                var t, n;
                                return null !== (n = null === (t = f[e]) || void 0 === t ? void 0 : t.call(f)) && void 0 !== n ? n : o.default.Messages.PAYMENT_SOURCE_UNKNOWN
                            });
                        N.length >= 3 && r.push(o.default.Messages.LOCALIZED_PRICING_MORE_NEW_WAYS_TO_PAY);
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
            }), n("222007");
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
            }), n("222007");
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
                let {
                    subscriptionId: t,
                    items: n,
                    paymentSourceId: r,
                    renewal: s,
                    currency: u,
                    applyEntitlements: d = !1,
                    analyticsLocations: f,
                    analyticsLocation: m
                } = e;
                null != n && (n = (0, o.coerceExistingItemsToNewItemInterval)(n));
                let _ = {
                    items: null == n ? void 0 : n.map(e => {
                        let {
                            planId: t,
                            ...n
                        } = e;
                        return {
                            ...n,
                            plan_id: t
                        }
                    }),
                    payment_source_id: r,
                    renewal: s,
                    apply_entitlements: d,
                    currency: u
                };
                try {
                    let e = await a.default.patch({
                        url: c.Endpoints.BILLING_SUBSCRIPTION_PREVIEW(t),
                        query: {
                            location: m,
                            location_stack: f
                        },
                        body: _,
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
                    experiment: 0
                },
                treatments: [{
                    id: 1,
                    label: "Browser Autofill",
                    config: {
                        experiment: 1
                    }
                }, {
                    id: 2,
                    label: "Merge Plan Select to Review",
                    config: {
                        experiment: 2
                    }
                }]
            });
            var l = i
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
            }), n("222007");
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
                } = e, [S, N] = s.useState(null != d ? d : E), [P, T] = s.useState((0, l.toRichValue)(S)), C = s.useRef(!1);
                return s.useEffect(() => {
                    C.current = !0
                }, []), s.useEffect(() => {
                    if (void 0 === d) {
                        let e = (0, l.toRichValue)(E);
                        N(E), T(e)
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
                                t !== S && (N(t), T(n), c(t))
                            },
                            placeholder: I,
                            channel: _,
                            textValue: S,
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
                    return N
                }
            }), n("222007");
            var r = n("37983"),
                s = n("884691"),
                a = n("77078"),
                i = n("635357"),
                l = n("742926"),
                u = n("659632"),
                o = n("210721"),
                c = n("78345"),
                d = n("53253"),
                f = n("65324"),
                m = n("563613"),
                _ = n("64798"),
                I = n("646718"),
                E = n("782340"),
                p = n("734203");
            let S = [c.PremiumGiftStyles.STANDARD_BOX, c.PremiumGiftStyles.CAKE, c.PremiumGiftStyles.COFFEE, c.PremiumGiftStyles.CHEST],
                N = () => {
                    let {
                        giftRecipient: e,
                        selectedGiftStyle: t,
                        setSelectedGiftStyle: n,
                        emojiConfetti: c,
                        soundEffect: N,
                        setEmojiConfetti: P,
                        setSoundEffect: T
                    } = (0, i.useGiftContext)(), [C, A] = s.useState(!1), O = s.useRef(null), R = (0, a.useRadioGroup)({
                        orientation: "horizontal"
                    }), h = (0, u.getGiftExperience)(e, !0, "premiumGiftSelect_GiftAnimationOptions"), g = u.GIFT_EXPERIENCES_WITH_CUSTOM_EMOJI_SOUNDBOARD.has(h), v = h !== u.GiftExperience.DEFAULT, M = (0, d.useIsSeasonalGiftingActive)(), {
                        enabled: x
                    } = d.default.useExperiment({
                        location: "premiumGiftSelect_GiftAnimationOptions"
                    }, {
                        autoTrackExposure: M
                    }), y = null;
                    return v && (y = x ? I.SeasonalGiftStyles2023 : S), (0, r.jsxs)("div", {
                        children: [v && (0, r.jsxs)("div", {
                            className: p.giftMainAnimation,
                            children: [null != t ? (0, r.jsx)(f.default, {
                                giftStyle: t,
                                defaultAnimationState: o.AnimationState.ACTION,
                                idleAnimationState: o.AnimationState.LOOP,
                                shouldAnimate: !0,
                                className: p.animation
                            }) : (0, r.jsx)(a.Spinner, {
                                className: p.spinner
                            }), g && (0, r.jsxs)("div", {
                                className: p.soundEmojiContainer,
                                children: [(0, r.jsx)("div", {
                                    className: p.sound,
                                    children: (0, r.jsx)(l.default, {
                                        sound: N,
                                        onSelect: e => {
                                            null != T && T(null == e ? void 0 : e)
                                        }
                                    })
                                }), (0, r.jsx)("div", {
                                    className: p.emoji,
                                    children: (0, r.jsx)(m.default, {
                                        setEmojiConfetti: P,
                                        emojiConfetti: null == c ? void 0 : c
                                    })
                                })]
                            })]
                        }), (0, r.jsx)("div", {
                            tabIndex: null != t || C ? void 0 : 0,
                            onFocus: e => {
                                var t;
                                e.target === e.currentTarget && (null === (t = O.current) || void 0 === t || t.focus())
                            },
                            className: p.giftBoxOptionContainer,
                            "aria-label": E.default.Messages.SEASONAL_GIFTING_CUSTOMIZE_YOUR_GIFT_BOX,
                            ...R,
                            children: null != y && y.map((e, s) => (0, r.jsx)(_.GiftStaticOption, {
                                isSelected: t === e,
                                giftStyle: e,
                                setSelectedGiftStyle: n,
                                ref: 0 === s ? O : null,
                                onFocus: () => A(!0),
                                onBlur: () => A(!1)
                            }, e))
                        }), (0, r.jsx)("div", {
                            className: p.selectPlanDivider
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
            }), n("222007"), n("781738");
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
                    position: "bottom",
                    align: "left",
                    autoInvert: !1,
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
                    return p
                }
            });
            var r = n("37983"),
                s = n("884691"),
                a = n("77078"),
                i = n("78345"),
                l = n("107342"),
                u = n("392459"),
                o = n("26245"),
                c = n("21340"),
                d = n("159548"),
                f = n("361396"),
                m = n("291059"),
                _ = n("356057"),
                I = n("892712");
            let E = {
                    [i.PremiumGiftStyles.STANDARD_BOX]: f,
                    [i.PremiumGiftStyles.CAKE]: m,
                    [i.PremiumGiftStyles.CHEST]: _,
                    [i.PremiumGiftStyles.COFFEE]: I,
                    [i.PremiumGiftStyles.SNOWGLOBE]: "",
                    [i.PremiumGiftStyles.BOX]: "",
                    [i.PremiumGiftStyles.CUP]: "",
                    [i.PremiumGiftStyles.SEASONAL_CAKE]: o,
                    [i.PremiumGiftStyles.SEASONAL_CHEST]: c,
                    [i.PremiumGiftStyles.SEASONAL_COFFEE]: d,
                    [i.PremiumGiftStyles.SEASONAL_STANDARD_BOX]: u
                },
                p = s.forwardRef(function(e, t) {
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
                            src: E[s],
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
                    return w
                },
                PremiumSwitchPlanSelectFooter: function() {
                    return Y
                }
            }), n("222007");
            var r = n("37983"),
                s = n("884691"),
                a = n("627445"),
                i = n.n(a),
                l = n("446674"),
                u = n("77078"),
                o = n("405932"),
                c = n("798609"),
                d = n("635357"),
                f = n("642906"),
                m = n("85336"),
                _ = n("883558"),
                I = n("10514"),
                E = n("521012"),
                p = n("659632"),
                S = n("701909"),
                N = n("773336"),
                P = n("719923"),
                T = n("153160"),
                C = n("916187"),
                A = n("968532"),
                O = n("15733"),
                R = n("154889"),
                h = n("917247"),
                g = n("279171"),
                v = n("883662"),
                M = n("824734"),
                x = n("705820"),
                y = n("208559"),
                L = n("177998"),
                b = n("661128"),
                j = n("26785"),
                G = n("617223"),
                D = n("646718"),
                U = n("49111"),
                B = n("843455"),
                F = n("782340"),
                k = n("33769");

            function w(e) {
                var t, n, a, m, _, E;
                let {
                    premiumSubscription: N,
                    skuId: A,
                    selectedPlanId: L,
                    setSelectedPlanId: b,
                    priceOptions: w,
                    planOptions: Y,
                    eligibleForMultiMonthPlans: H,
                    referralTrialOfferId: W,
                    subscriptionPeriodEnd: Z,
                    showTotal: K = !0,
                    discountInvoiceItems: V
                } = e, {
                    activeSubscription: z,
                    setSelectedPlanId: J,
                    selectedSkuId: X,
                    selectedPlan: q,
                    priceOptions: Q
                } = (0, f.usePaymentContext)(), {
                    isGift: $,
                    giftRecipient: ee,
                    selectedGiftStyle: et,
                    customGiftMessage: en,
                    setCustomGiftMessage: er
                } = (0, d.useGiftContext)(), es = (0, p.isCustomGiftEnabled)(ee), ea = $ && (0, p.shouldShowCustomGiftExperience)(ee, !0, "PremiumSwitchPlanSelectBody");
                A = null != A ? A : X, i(void 0 !== (N = null != N ? N : z), "should not be undefined");
                let [ei, el] = (0, l.useStateFromStoresArray)([I.default], () => [null != N ? I.default.get(N.planId) : null, null != L ? I.default.get(L) : null]), eu = (0, h.usePremiumTrialOffer)(W), eo = null == eu ? void 0 : eu.subscription_trial, ec = (0, R.usePremiumDiscountOffer)(), ed = null == ec ? void 0 : null === (t = ec.discount) || void 0 === t ? void 0 : t.plan_ids, ef = null != el ? el : q, em = s.useCallback(e => {
                    null != b ? b(e) : J(e)
                }, [b, J]), e_ = null != w ? w : Q;
                i(null != e_, "Price option has to be set");
                let eI = null != eu && (0, D.SubscriptionTrials)[eu.trial_id].skus.includes(A),
                    eE = null != ec && Y.some(e => null == ed ? void 0 : ed.includes(e)),
                    ep = (0, P.getPrice)(D.SubscriptionPlans.PREMIUM_MONTH_TIER_2, !1, $, e_);
                s.useEffect(() => {
                    H && C.default.trackExposure({
                        location: "5f89bb_1"
                    })
                }, [H]);
                let eS = (null == ef ? void 0 : ef.id) != null && Y.includes(ef.id);
                s.useEffect(() => {
                    if (!eS) {
                        if (null == ei || $) em(Y[0]);
                        else if (null != ei) {
                            let e = Y.find(e => e !== ei.id);
                            null != e && em(e)
                        }
                    }
                }, [eS, $, Y, ei, em]);
                let eN = !ea && ($ || !eI && !eE) && eS && K,
                    eP = (0, u.useRadioGroup)(),
                    eT = (null == ef ? void 0 : ef.id) != null ? (0, P.getPrice)(ef.id, !1, $, e_) : void 0,
                    {
                        ipCountryCode: eC
                    } = (0, O.default)(),
                    eA = "HR" === eC && null != eT && eT.currency === B.CurrencyCodes.EUR,
                    eO = (0, P.isPrepaidPaymentSource)(e_.paymentSourceId),
                    eR = (null == eo ? void 0 : eo.interval) === D.SubscriptionIntervalTypes.DAY ? F.default.Messages.BILLING_TRIAL_2_WEEK_PERIOD : F.default.Messages.BILLING_TRIAL_30_DAY_PERIOD,
                    eh = !$ && (eE || null != eo && eI && null != Z),
                    eg = null == V ? void 0 : null === (m = V.find(e => e.subscriptionPlanId === D.SubscriptionPlans.PREMIUM_MONTH_TIER_2)) || void 0 === m ? void 0 : null === (a = m.discounts) || void 0 === a ? void 0 : null === (n = a.find(e => e.type === c.InvoiceDiscountTypes.SUBSCRIPTION_PLAN)) || void 0 === n ? void 0 : n.amount;
                return (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsxs)("div", {
                        className: ea ? k.stepBodyCustomGift : k.stepBody,
                        children: [(0, r.jsxs)("div", {
                            className: ea ? k.bodyColumnMiddle : void 0,
                            children: [(0, r.jsx)(g.default, {
                                fromBoostCancelModal: !1,
                                className: k.legacyPricingNotice
                            }), ea && null != et && (0, r.jsx)(y.GiftAnimationOptions, {})]
                        }), (0, r.jsxs)("div", {
                            className: ea ? k.bodyColumnRight : void 0,
                            children: [es && (0, r.jsx)(G.SendGiftToUser, {
                                giftRecipient: ee
                            }), (() => {
                                if (es && null != er) return (0, r.jsx)(x.default, {
                                    sectionTitle: F.default.Messages.GIFT_OPTIONAL_MESSAGE,
                                    onTextChange: e => er(e),
                                    pendingText: en,
                                    currentText: en
                                })
                            })(), null != ei && !$ && (0, r.jsx)("div", {
                                className: k.bodyText,
                                children: function(e, t) {
                                    let n = F.default.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_MONTH,
                                        r = F.default.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_1_YEAR,
                                        s = (() => {
                                            switch (e.interval) {
                                                case D.SubscriptionIntervalTypes.YEAR:
                                                    return n;
                                                case D.SubscriptionIntervalTypes.MONTH:
                                                default:
                                                    return r
                                            }
                                        })(),
                                        a = e.skuId;
                                    switch (t) {
                                        case D.PremiumSubscriptionSKUs.TIER_0:
                                            switch (a) {
                                                case D.PremiumSubscriptionSKUs.TIER_1:
                                                    return F.default.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_TIER_1_TO_TIER_0;
                                                case D.PremiumSubscriptionSKUs.TIER_2:
                                                    return F.default.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_TIER_0;
                                                default:
                                                    return s
                                            }
                                        case D.PremiumSubscriptionSKUs.TIER_1:
                                            switch (a) {
                                                case D.PremiumSubscriptionSKUs.TIER_0:
                                                    return F.default.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_1;
                                                case D.PremiumSubscriptionSKUs.TIER_2:
                                                    return F.default.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_TIER_1;
                                                default:
                                                    return s
                                            }
                                        case D.PremiumSubscriptionSKUs.TIER_2:
                                            switch (a) {
                                                case D.PremiumSubscriptionSKUs.TIER_0:
                                                case D.PremiumSubscriptionSKUs.TIER_1:
                                                    return F.default.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_2;
                                                case D.PremiumSubscriptionSKUs.TIER_2:
                                                    return e.interval === D.SubscriptionIntervalTypes.MONTH ? F.default.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_2_YEAR.format({
                                                        numFreeGuildSubscriptions: D.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM
                                                    }) : s;
                                                default:
                                                    return s
                                            }
                                        default:
                                            return s
                                    }
                                }(ei, A)
                            }), (_ = eI, E = eE, ea ? (0, r.jsx)(u.FormTitle, {
                                children: F.default.Messages.GIFT_SUBSCRIPTION_SELECTION
                            }) : eh ? _ ? (0, r.jsxs)("div", {
                                children: [(0, r.jsx)(u.Text, {
                                    variant: "text-sm/normal",
                                    className: k.trialPlanSelectHeader,
                                    children: F.default.Messages.BILLING_TRIAL_PAYMENT_MODAL_INFO.format({
                                        trialEnd: Z,
                                        trialPeriod: eR
                                    })
                                }), (0, r.jsx)("hr", {
                                    className: k.planSelectSeparator
                                })]
                            }) : E && null != eg && null != ep ? (0, r.jsxs)("div", {
                                children: [(0, r.jsx)(u.Text, {
                                    variant: "text-sm/normal",
                                    className: k.trialPlanSelectHeader,
                                    children: F.default.Messages.BILLING_DISCOUNT_PAYMENT_MODAL_INFO.format({
                                        discountedPrice: (0, T.formatPrice)(ep.amount - eg, ep.currency),
                                        regularPrice: (0, T.formatPrice)(ep.amount, ep.currency)
                                    })
                                }), (0, r.jsx)("hr", {
                                    className: k.planSelectSeparator
                                })]
                            }) : void 0 : (0, r.jsx)("div", {
                                className: k.selectPlanChooseTitle,
                                children: F.default.Messages.BILLING_SWITCH_PLAN_CHOOSE_ONE
                            })), (0, r.jsx)("div", {
                                ...eP,
                                children: Y.map(e => (0, r.jsx)(j.default, {
                                    planId: e,
                                    premiumSubscription: $ ? null : null != N ? N : null,
                                    selectPlan: em,
                                    selected: (null == ef ? void 0 : ef.id) === e,
                                    priceOptions: e_,
                                    shouldShowUpdatedPaymentModal: eh,
                                    isEligibleForDiscount: eE,
                                    discountAmountOff: eg
                                }, e))
                            }), (0, r.jsx)("div", {
                                children: eN && null != ef && null != eT ? (0, r.jsxs)("div", {
                                    children: [(0, r.jsx)("div", {
                                        className: k.selectPlanDivider
                                    }), (0, r.jsx)(v.PremiumInvoiceTableTotalRow, {
                                        label: F.default.Messages.BILLING_PAYMENT_BREAKDOWN_TOTAL,
                                        value: (0, r.jsx)(M.default, {
                                            price: eT.amount,
                                            currency: eT.currency,
                                            intervalType: $ ? null : ef.interval,
                                            intervalCount: ef.intervalCount,
                                            isPrepaidPaymentSource: eO
                                        }),
                                        className: k.selectPlanTotalRow
                                    })]
                                }) : null
                            }), eA && (0, r.jsx)(o.default, {
                                message: F.default.Messages.LOCALIZED_PRICING_HRK_EURO_WARNING.format({
                                    kunaPriceWithCurrency: (0, T.formatPrice)(7.5345 * eT.amount, B.CurrencyCodes.HRK)
                                })
                            }), !$ && !eh && K && (0, r.jsx)(o.default, {
                                message: F.default.Messages.BILLING_FINAL_PRICE_MAY_CHANGE.format({
                                    documentationLink: S.default.getArticleURL(U.HelpdeskArticles.LOCALIZED_PRICING)
                                })
                            })]
                        })]
                    })
                })
            }

            function Y(e) {
                let {
                    onStepChange: t,
                    selectedPlanId: n,
                    paymentSources: s,
                    onBackClick: a,
                    showBackButton: i,
                    planOptions: l,
                    shouldRenderUpdatedPaymentModal: o = !1,
                    isTrial: c
                } = e, {
                    paymentSources: m,
                    selectedPlan: _
                } = (0, f.usePaymentContext)(), {
                    isGift: I
                } = (0, d.useGiftContext)();
                return s = null != s ? s : m, n = null != n ? n : null == _ ? void 0 : _.id, (0, r.jsxs)(r.Fragment, {
                    children: [null != n && l.includes(n) ? (0, r.jsx)(H, {
                        paymentSources: s,
                        onStepChange: t,
                        selectedPlanId: n,
                        isGift: I,
                        shouldRenderUpdatedPaymentModal: o,
                        isTrial: c
                    }) : (0, r.jsx)(u.Button, {
                        disabled: !0,
                        children: F.default.Messages.SELECT
                    }), i ? (0, r.jsx)(L.default, {
                        onClick: a
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
                } = e, c = (0, l.useStateFromStores)([E.default], () => E.default.getPremiumTypeSubscription()), {
                    hasEntitlements: d
                } = (0, b.useSubscriptionEntitlements)(n, s), f = null != c && null != c.paymentSourceId || Object.keys(a).length > 0 || d && !o;
                var I = i ? F.default.Messages.NEXT : F.default.Messages.SELECT,
                    p = m.Step.ADD_PAYMENT_STEPS;
                return f ? p = m.Step.REVIEW : (0, N.isDesktop)() && function() {
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
                }() && (p = m.Step.AWAITING_BROWSER_CHECKOUT, I = F.default.Messages.CONTINUE_IN_BROWSER), (0, r.jsx)(u.Button, {
                    onClick: () => t(p),
                    children: I
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
                d = n("635357"),
                f = n("915639"),
                m = n("10514"),
                _ = n("659632"),
                I = n("719923"),
                E = n("153160"),
                p = n("646718"),
                S = n("782340"),
                N = n("419063");

            function P(e) {
                let {
                    premiumSubscription: t,
                    planId: n,
                    selectPlan: s,
                    selected: i,
                    priceOptions: P,
                    shouldShowUpdatedPaymentModal: T,
                    isEligibleForDiscount: C,
                    discountAmountOff: A
                } = e, O = (0, u.useStateFromStores)([f.default], () => f.default.locale), R = (0, u.useStateFromStores)([m.default], () => m.default.get(n)), {
                    isGift: h,
                    giftRecipient: g
                } = (0, d.useGiftContext)(), v = h && (0, _.shouldShowCustomGiftExperience)(g, !0, "PremiumSwitchPlanSelectOption");
                l(null != R, "Missing subscriptionPlan");
                let M = null != t && t.planId === n,
                    x = M || n === p.SubscriptionPlans.PREMIUM_MONTH_TIER_2 && null != t && [p.SubscriptionPlans.PREMIUM_YEAR_TIER_0, p.SubscriptionPlans.PREMIUM_YEAR_TIER_1].includes(t.planId),
                    y = p.DISCOUNTS[n],
                    L = (0, I.getPrice)(n, !1, h, P),
                    b = (0, I.isPrepaidPaymentSource)(P.paymentSourceId),
                    j = null != y && !T,
                    G = R.interval === p.SubscriptionIntervalTypes.YEAR ? S.default.Messages.BILLING_TRIAL_YEARLY_PRICE_AFTER_TRIAL : S.default.Messages.BILLING_TRIAL_MONTHLY_PRICE_AFTER_TRIAL,
                    D = () => null != y && (0, r.jsx)(c.Text, {
                        tag: "span",
                        variant: "eyebrow",
                        color: "always-white",
                        className: N.planOptionDiscount,
                        children: S.default.Messages.BILLING_PLAN_SELECTION_DISCOUNT.format({
                            discount: (0, E.formatPercent)(O, y / 100)
                        })
                    }),
                    U = () => R.interval === p.SubscriptionIntervalTypes.YEAR && null != t || j && !M ? R.interval === p.SubscriptionIntervalTypes.YEAR && null != t ? (0, r.jsxs)("span", {
                        className: N.planOptionMonthsFree,
                        children: ["(", S.default.Messages.BILLING_SWITCH_PLAN_YEARLY_FREE_MONTHS, ")"]
                    }) : j && !M ? D() : void 0 : null;
                return (0, r.jsxs)(c.Clickable, {
                    role: v ? "menuitem" : "radio",
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
                    onClick: x ? void 0 : () => s(n),
                    className: a(N.planOptionClickableContainer, {
                        [N.selectedPlan]: v && i,
                        [N.selectionBox]: v
                    }),
                    children: [(0, r.jsxs)("div", {
                        className: a(N.planOption, {
                            [N.planOptionDisabled]: x
                        }),
                        children: [(0, r.jsxs)("div", {
                            className: N.planOptionClickable,
                            children: [!v && (0, r.jsx)(c.Checkbox, {
                                readOnly: !0,
                                displayOnly: !0,
                                value: i,
                                shape: c.Checkbox.Shapes.ROUND,
                                color: o.default.unsafe_rawColors.BRAND_500.css,
                                type: c.Checkbox.Types.INVERTED,
                                className: N.planOptionCheckbox
                            }), (0, r.jsxs)("div", {
                                children: [(0, r.jsxs)("div", {
                                    className: a(N.planOptionInterval, {
                                        [N.optionSelected]: i || v,
                                        [N.updatedOptionSelected]: T && (i || v)
                                    }),
                                    children: [(0, I.getIntervalString)(R.interval, h, b, R.intervalCount, v, (0, I.getPremiumType)(R.id)), v && U()]
                                }), v && (0, r.jsx)("div", {
                                    className: N.planOneTimeCost,
                                    children: S.default.Messages.ONE_TIME_CHARGE.format({
                                        currencyAmount: (0, E.formatPrice)(L.amount, L.currency)
                                    })
                                })]
                            }), M && (0, r.jsxs)("span", {
                                className: N.planOptionCurrentPlan,
                                children: ["(", S.default.Messages.BILLING_SWITCH_PLAN_CURRENT_PLAN, ")"]
                            }), !v && U()]
                        }), T ? (0, r.jsx)("div", {
                            className: a({
                                [N.optionPriceSelected]: i
                            }),
                            children: S.default.Messages.BILLING_TRIAL_PRICE_NOW.format({
                                price: (() => {
                                    if (C && null != A) return R.interval === p.SubscriptionIntervalTypes.MONTH ? (0, E.formatPrice)(L.amount - A, L.currency) : (0, E.formatPrice)(L.amount, L.currency);
                                    return (0, E.formatPrice)(0, L.currency, {
                                        maximumFractionDigits: 0
                                    })
                                })()
                            })
                        }) : (0, r.jsx)("div", {
                            className: a({
                                [N.optionSelected]: i || v
                            }),
                            children: (0, E.formatPrice)(L.amount, L.currency)
                        })]
                    }), T && (0, r.jsx)("div", {
                        className: N.planOptionSubtextContainer,
                        children: (0, r.jsx)(c.Text, {
                            variant: "text-md/normal",
                            color: i ? "text-normal" : "interactive-normal",
                            className: a(N.planOptionSubtext, {
                                [N.discountPlanOptionSubtext]: C
                            }),
                            children: C && null != A ? R.interval === p.SubscriptionIntervalTypes.MONTH ? S.default.Messages.BILLING_DISCOUNT_MONTHLY_PRICE.format({
                                discountedPrice: (0, E.formatPrice)(L.amount - A, L.currency),
                                regularPrice: (0, E.formatPrice)(L.amount, L.currency)
                            }) : S.default.Messages.BILLING_YEARLY_PLAN_SAVINGS.format({
                                percent: y
                            }) : G.format({
                                price: (0, E.formatPrice)(L.amount, L.currency)
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
            }), n("222007");
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
                E = n("635357"),
                p = n("642906"),
                S = n("286350"),
                N = n("102492"),
                P = n("176108"),
                T = n("102985"),
                C = n("160299"),
                A = n("10514"),
                O = n("68238"),
                R = n("659632"),
                h = n("719923"),
                g = n("153160"),
                v = n("210721"),
                M = n("809071"),
                x = n("154889"),
                y = n("883662"),
                L = n("623003"),
                b = n("65324"),
                j = n("570727"),
                G = n("146163"),
                D = n("661128"),
                U = n("617223"),
                B = n("646718"),
                F = n("49111"),
                k = n("843455"),
                w = n("782340"),
                Y = n("615689");

            function H(e) {
                var t, n, a;
                let H, W, {
                        selectedPlanId: Z,
                        paymentSources: K,
                        priceOptions: V,
                        currencies: z,
                        onCurrencyChange: J,
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
                        isPremium: e_,
                        startedPaymentFlowWithPaymentSourcesRef: eI
                    } = (0, p.usePaymentContext)(),
                    {
                        isGift: eE,
                        giftRecipient: ep,
                        selectedGiftStyle: eS
                    } = (0, E.useGiftContext)(),
                    eN = (0, x.usePremiumDiscountOffer)(),
                    eP = null == eN ? void 0 : null === (t = eN.discount) || void 0 === t ? void 0 : t.plan_ids.some(e => B.SubscriptionPlanInfo[e].skuId === ef),
                    eT = !eE && null != eN && null != ef && eP,
                    eC = (0, u.useStateFromStores)([A.default], () => A.default.get(Z));
                i(null != eC, "Missing plan");
                let eA = [{
                        planId: eC.id,
                        quantity: 1
                    }],
                    eO = ea === S.PurchaseState.PURCHASING || ea === S.PurchaseState.COMPLETED,
                    eR = eE || eO,
                    [eh, eg] = (0, M.useSubscriptionInvoicePreview)({
                        items: eA,
                        renewal: !1,
                        preventFetch: eR,
                        applyEntitlements: !0,
                        paymentSourceId: V.paymentSourceId,
                        currency: V.currency,
                        trialId: et,
                        metadata: es
                    }),
                    [ev, eM] = (0, M.useSubscriptionInvoicePreview)({
                        items: eA,
                        renewal: !0,
                        preventFetch: eR,
                        trialId: et,
                        paymentSourceId: V.paymentSourceId,
                        currency: V.currency,
                        metadata: es
                    }),
                    [ex, ey] = (0, M.useSubscriptionInvoicePreview)({
                        items: [{
                            planId: B.SubscriptionPlans.PREMIUM_MONTH_TIER_2,
                            quantity: 1
                        }],
                        renewal: !0,
                        preventFetch: !eT,
                        trialId: et,
                        paymentSourceId: V.paymentSourceId,
                        currency: V.currency,
                        metadata: es
                    }),
                    eL = eE && (0, R.shouldShowCustomGiftExperience)(ep, !0, "PremiumSubscriptionReview"),
                    eb = null !== (a = null != eg ? eg : eM) && void 0 !== a ? a : ey,
                    ej = (0, u.useStateFromStores)([T.default], () => T.default.enabled),
                    eG = V.paymentSourceId,
                    {
                        hasEntitlements: eD,
                        entitlements: eU
                    } = (0, D.useSubscriptionEntitlements)(eC.id, eE),
                    eB = (0, h.isPrepaidPaymentSource)(V.paymentSourceId),
                    eF = (0, N.checkNoPaymentTrialEnabled)(et, eG, Z),
                    ek = (0, P.inOneStepSubscriptionCheckout)({
                        isTrial: eu,
                        isGift: eE,
                        selectedSkuId: ef,
                        startedPaymentFlowWithPaymentSources: eI.current
                    }),
                    [ew, eY] = s.useState(null == eh ? void 0 : eh.subscriptionPeriodEnd);
                s.useEffect(() => {
                    null == ew && eY(null == eh ? void 0 : eh.subscriptionPeriodEnd)
                }, [null == eh ? void 0 : eh.subscriptionPeriodEnd, ew]);
                let eH = s.useMemo(() => (0, h.getPremiumPlanOptions)({
                        skuId: ef,
                        isPremium: e_,
                        multiMonthPlans: [],
                        currentSubscription: ed,
                        isGift: eE,
                        isEligibleForTrial: eu,
                        defaultPlanId: em,
                        defaultToMonthlyPlan: !1
                    }), [ef, ed, eE, em, e_, eu]),
                    eW = (0, P.planSwitchLoadingShowSpinner)(ek, eh, eC);
                if (null != eb) {
                    let e = eb.message;
                    return eb.code === I.ErrorCodes.INVALID_CURRENCY_FOR_PAYMENT_SOURCE && (e = w.default.Messages.BILLING_ERROR_UNSUPPORTED_CURRENCY), (0, r.jsx)(c.FormErrorBlock, {
                        children: e
                    })
                }
                if (eE) W = (0, r.jsx)(G.SubscriptionInvoiceGift, {
                    paymentSourceId: V.paymentSourceId,
                    plan: eC,
                    className: Y.invoice,
                    isPrepaidPaymentSource: eB,
                    isCustomGift: eL
                });
                else if (eu && null != eh) W = (0, r.jsxs)("div", {
                    children: [(0, r.jsx)(y.PremiumInvoiceTableDivider, {
                        negativeMarginTop: !0
                    }), (0, r.jsxs)(y.PremiumInvoiceTable, {
                        className: Y.invoice,
                        children: [(0, r.jsxs)("div", {
                            className: Y.trialPriceLine,
                            children: [(0, r.jsx)(c.Text, {
                                variant: "text-md/bold",
                                children: w.default.Messages.BILLING_PAYMENT_BREAKDOWN_TOTAL
                            }), (0, r.jsx)(c.Text, {
                                variant: "text-md/normal",
                                children: w.default.Messages.BILLING_TRIAL_PRICE_NOW.format({
                                    price: (0, g.formatPrice)(0, eh.currency, {
                                        maximumFractionDigits: 0
                                    })
                                })
                            })]
                        }), (0, r.jsx)("div", {
                            className: Y.afterTrialPriceLine,
                            children: (0, r.jsx)(G.PremiumTrialInvoiceTableRow, {
                                invoice: eh,
                                plan: eC
                            })
                        })]
                    })]
                });
                else {
                    if (null == eh || null == ev || eW) return (0, r.jsx)("div", {
                        className: Y.spinnerWrapper,
                        children: (0, r.jsx)(c.Spinner, {})
                    });
                    eu && eh.subscriptionPeriodEnd !== ev.subscriptionPeriodEnd && (H = eh.subscriptionPeriodEnd), W = (0, r.jsxs)(y.PremiumInvoiceTable, {
                        className: Y.invoice,
                        children: [(0, r.jsx)(y.PremiumInvoiceTableHeader, {
                            children: w.default.Messages.BILLING_SWITCH_PLAN_PURCHASE_DETAILS
                        }), (0, r.jsx)(G.PremiumSubscriptionChangePlanInvoiceRows, {
                            invoice: eh,
                            newPlan: eC,
                            isPrepaidPaymentSource: eB,
                            referralTrialOfferId: el
                        }), eB ? null : (0, r.jsx)(G.SubscriptionInvoiceFooter, {
                            renewalInvoice: ev,
                            isTrial: eu,
                            priceOptions: V,
                            overrideRenewalDate: H,
                            trialFooterMessageOverride: en,
                            hideSubscriptionDetails: ei
                        })]
                    })
                }
                let eZ = l.CountryCodesSets.EEA_COUNTRIES.has(C.default.ipCountryCodeWithFallback),
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
                            } = h.default.getIntervalForInvoice(t), l = (0, g.formatRate)((0, g.formatPrice)(t.total, t.currency), e, i), u = null != n ? n : t.subscriptionPeriodEnd;
                            r = w.default.Messages.BILLING_LEGAL_MUMBO_JUMBO_TRIAL_TERMS_LABEL.format({
                                termsURL: F.MarketingURLs.TERMS,
                                paidURL: F.MarketingURLs.PAID_TERMS,
                                rate: l,
                                renewalDate: u
                            }), s = Y.trialCheckbox, a = Y.trialCheckboxLabel
                        }
                        return {
                            checkboxLabel: r,
                            checkboxClassname: s,
                            checkboxLabelClassname: a
                        }
                    }(null != eu && eu, ev, H),
                    eJ = w.default.Messages.BILLING_SELECT_PLAN_GUILD_SUBSCRIPTION.format({
                        planName: eC.name
                    });
                return eE && !eL ? eJ = w.default.Messages.PAYMENT_MODAL_SUBTITLE_PREMIUM_GIFT : eE && eL ? eJ = "" : (0, h.isPremiumSubscriptionPlan)(eC.id) && (eJ = h.default.getBillingReviewSubheader(null, eC)), eF ? null : (0, r.jsxs)("div", {
                    className: Y.stepBody,
                    children: [null != er && (0, r.jsxs)("div", {
                        className: Y.reviewWarningMessageContainer,
                        children: [(0, r.jsx)(O.default, {
                            color: o.default.unsafe_rawColors.YELLOW_300.css,
                            width: 20,
                            height: 20
                        }), (0, r.jsx)(c.Text, {
                            className: Y.reviewWarningMessage,
                            variant: "text-sm/normal",
                            children: er
                        })]
                    }), ek && (0, r.jsxs)("div", {
                        children: [(0, r.jsx)(y.PremiumInvoiceTableDivider, {
                            negativeMarginTop: !0
                        }), (0, r.jsx)(j.PremiumSwitchPlanSelectBody, {
                            planOptions: eH,
                            eligibleForMultiMonthPlans: !1,
                            referralTrialOfferId: void 0,
                            selectedPlanId: Z,
                            subscriptionPeriodEnd: ew,
                            showTotal: !1,
                            discountInvoiceItems: eT ? null == ex ? void 0 : ex.invoiceItems : void 0
                        }), (0, r.jsx)(y.PremiumInvoiceTableDivider, {})]
                    }), !eu && (0, r.jsx)(c.FormTitle, {
                        tag: c.FormTitleTags.H5,
                        children: eJ
                    }), eL && null != eS && (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(b.default, {
                            defaultAnimationState: v.AnimationState.LOOP,
                            giftStyle: eS,
                            shouldAnimate: !0,
                            className: Y.giftMainAnimation
                        }), (0, r.jsx)(U.SendGiftToUser, {
                            giftRecipient: ep
                        })]
                    }), W, (0, r.jsxs)("div", {
                        className: Y.paymentSourceWrapper,
                        children: [eu ? (0, r.jsx)(c.FormTitle, {
                            tag: c.FormTitleTags.H5,
                            className: Y.formTitle,
                            children: w.default.Messages.BILLING_STEP_PAYMENT_METHOD
                        }) : (0, r.jsx)(c.FormTitle, {
                            tag: c.FormTitleTags.H5,
                            children: w.default.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_TITLE
                        }), (0, r.jsx)(m.default, {
                            paymentSources: Object.values(K),
                            selectedPaymentSourceId: eG,
                            prependOption: eD && !eu ? {
                                label: w.default.Messages.ATTACH_PAYMENT_SOURCE_PROMPT_OPTION_OPTIONAL,
                                value: null
                            } : null,
                            onChange: X,
                            onPaymentSourceAdd: q,
                            hidePersonalInformation: ej,
                            isTrial: eu
                        }), eD && null == eG ? (0, r.jsx)("div", {
                            className: Y.paymentSourceOptionalWarning,
                            children: w.default.Messages.ATTACH_PAYMENT_SOURCE_OPTIONAL_WITH_ENTITLEMENTS_WARNING.format({
                                months: eU.length
                            })
                        }) : null, eo ? null : (0, r.jsxs)(d.CurrencyWrapper, {
                            currencies: z,
                            className: Y.currencyWrapper,
                            children: [(0, r.jsx)(c.FormTitle, {
                                tag: c.FormTitleTags.H5,
                                children: w.default.Messages.PAYMENT_CURRENCY
                            }), (0, r.jsx)(d.default, {
                                selectedCurrency: V.currency,
                                currencies: z,
                                onChange: J
                            })]
                        })]
                    }), (0, r.jsx)(L.default, {
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
                                renewalInvoice: ev,
                                isGift: eE,
                                paymentSourceType: null === (n = K[null != eG ? eG : ""]) || void 0 === n ? void 0 : n.type,
                                isEmbeddedIAP: ec,
                                basePrice: (0, h.getPrice)(eC.id, !1, eE, V)
                            }),
                            showPricingLink: eC.currency !== k.CurrencyCodes.USD,
                            showWithdrawalWaiver: eZ,
                            disabled: eO,
                            isTrial: eu,
                            isDiscount: eo,
                            subscriptionPlan: eC,
                            isGift: eE
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
            }), n("222007");
            var r = n("37983"),
                s = n("884691"),
                a = n("627445"),
                i = n.n(a),
                l = n("446674"),
                u = n("77078"),
                o = n("850068"),
                c = n("685665"),
                d = n("635357"),
                f = n("642906"),
                m = n("605886"),
                _ = n("286350"),
                I = n("376641"),
                E = n("102492"),
                p = n("926223"),
                S = n("467292"),
                N = n("622839"),
                P = n("145131"),
                T = n("599110"),
                C = n("719923"),
                A = n("921149"),
                O = n("177998"),
                R = n("661128"),
                h = n("868869"),
                g = n("49111"),
                v = n("717913");

            function M(e) {
                let {
                    premiumSubscription: t,
                    setPurchaseState: n,
                    onBack: a,
                    onNext: M,
                    legalTermsNodeRef: x,
                    flashLegalTerms: y,
                    invoiceError: L,
                    planError: b,
                    onPurchaseError: j,
                    baseAnalyticsData: G,
                    flowStartTime: D,
                    trialId: U,
                    planGroup: B,
                    analyticsLocation: F,
                    purchaseTokenAuthState: k,
                    openInvoiceId: w,
                    metadata: Y,
                    backButtonEligible: H,
                    disablePurchase: W,
                    isTrial: Z = !1
                } = e, {
                    selectedPlan: K,
                    priceOptions: V,
                    setHasAcceptedTerms: z,
                    setPurchaseError: J,
                    purchaseType: X,
                    paymentSourceId: q,
                    paymentSources: Q,
                    selectedSkuId: $,
                    skusById: ee,
                    skuPricePreviewsById: et,
                    referralCode: en,
                    contextMetadata: er
                } = (0, f.usePaymentContext)(), {
                    isGift: es,
                    selectedGiftStyle: ea,
                    customGiftMessage: ei,
                    emojiConfetti: el,
                    soundEffect: eu,
                    giftRecipient: eo
                } = (0, d.useGiftContext)(), ec = null == K ? void 0 : K.id, ed = (0, E.checkNoPaymentTrialEnabled)(U, V.paymentSourceId, ec), ef = (0, l.useStateFromStores)([p.default], () => p.default.popupCallbackCalled), {
                    analyticsLocations: em
                } = (0, c.default)(), e_ = null != q ? Q[q] : null, [eI, eE] = s.useState(ed), [ep, eS] = s.useState(!1), {
                    hasEntitlements: eN
                } = (0, R.useSubscriptionEntitlements)(ec, es), eP = (0, C.isPrepaidPaymentSource)(V.paymentSourceId), eT = eN || ed, eC = (0, A.useIsPrepaidPaymentPastDue)(), eA = null, eO = null;
                if (X === g.PurchaseTypes.ONE_TIME) {
                    var eR;
                    i(null != $, "SKU must be selected for one-time purchases"), i(null != (eA = null !== (eR = ee[$]) && void 0 !== eR ? eR : null), "SKU must exist and be fetched.");
                    let e = et[$],
                        t = null != q ? q : N.NO_PAYMENT_SOURCE;
                    eO = null != e ? e[t] : null
                }
                let eh = async () => {
                    await (0, m.purchaseProduct)({
                        setPurchaseState: n,
                        setHasAcceptedTerms: z,
                        setIsSubmitting: eE,
                        setPurchaseError: J,
                        hasRedirectURL: ep,
                        setHasRedirectURL: eS,
                        isGift: es,
                        giftStyle: ea,
                        baseAnalyticsData: G,
                        analyticsLocation: F,
                        analyticsLocations: em,
                        flowStartTime: D,
                        subscriptionPlan: K,
                        planGroup: B,
                        trialId: U,
                        priceOptions: V,
                        paymentSource: e_,
                        isPrepaidPaymentPastDue: eC,
                        openInvoiceId: w,
                        premiumSubscription: t,
                        onNext: M,
                        metadata: Y,
                        sku: eA,
                        skuPricePreview: eO,
                        purchaseType: X,
                        referralCode: en,
                        loadId: er.loadId,
                        giftRecipient: eo,
                        customMessage: ei,
                        emojiConfetti: el,
                        soundEffect: eu
                    })
                };
                s.useEffect(() => {
                    let e = async () => {
                        if (!0 === ef) try {
                            if (null == p.default.redirectedPaymentId) return;
                            await (0, o.redirectedPaymentSucceeded)(p.default.redirectedPaymentId), n(_.PurchaseState.COMPLETED), M()
                        } catch (e) {
                            n(_.PurchaseState.FAIL), j(e), T.default.track(g.AnalyticEvents.PAYMENT_FLOW_FAILED, {
                                ...G,
                                payment_error_code: null == e ? void 0 : e.code,
                                payment_source_id: q,
                                payment_source_type: null == e_ ? void 0 : e_.type,
                                duration_ms: Date.now() - D
                            })
                        } finally {
                            eE(!1), (0, o.resetPaymentIntentId)()
                        } else k === S.PurchaseTokenAuthState.SUCCESS && await eh()
                    };
                    e()
                }, [ef]), s.useEffect(() => {
                    ed && !es && null == t && eh()
                }, [ed, es, t]);
                let eg = null != w || X === g.PurchaseTypes.ONE_TIME;
                return ed ? null : (0, r.jsxs)(u.ModalFooter, {
                    align: P.default.Align.CENTER,
                    children: [(0, r.jsx)(h.default, {
                        legalTermsNodeRef: x,
                        invoiceError: L,
                        planError: b,
                        disablePurchase: W,
                        flashLegalTerms: y,
                        isSubmitting: eI,
                        premiumSubscription: t,
                        isGift: es,
                        planGroup: B,
                        isPrepaid: eP,
                        isTrial: Z,
                        makePurchase: eh,
                        needsPaymentSource: null == e_ && !eT
                    }), (0, r.jsx)(I.default, {}), H && !eg ? (0, r.jsx)("div", {
                        className: v.back,
                        children: (0, r.jsx)(O.default, {
                            onClick: a
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
            }), n("781738");
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
                    disabled: S = !1,
                    hideDivider: N = !1,
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
                        [m.disabled]: S,
                        [m.hideDivider]: N,
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
                premium: {
                    border: o.premiumFeatureBorder,
                    background: o.premiumBackground
                },
                limited: {
                    border: o.limitedFeatureBorder,
                    background: o.limitedBackground
                }
            };
            var d = i.forwardRef(function(e, t) {
                let {
                    children: n,
                    type: r = "premium",
                    isShown: s,
                    hasBackground: i = !1,
                    className: l,
                    backgroundClassName: d
                } = e;
                if (!s) return (0, a.jsx)(a.Fragment, {
                    children: n
                });
                let {
                    border: f,
                    background: m
                } = c[r];
                return (0, a.jsx)("div", {
                    ref: t,
                    className: u(f, l),
                    children: (0, a.jsx)("div", {
                        className: u(i ? m : o.background, d),
                        children: n
                    })
                })
            })
        },
        742926: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            }), n("222007");
            var r = n("37983"),
                s = n("884691"),
                a = n("669491"),
                i = n("292915"),
                l = n("77078"),
                u = n("389480"),
                o = n("191191"),
                c = n("782340"),
                d = n("895576");
            let f = [54, 8, 8, 8];

            function m(e) {
                let {
                    onSelect: t,
                    sound: n
                } = e, [m, _] = s.useState(!1);

                function I(e) {
                    _(!1), null == t || t(e)
                }
                let E = e => (0, r.jsxs)("div", {
                    className: d.customGiftHeader,
                    children: [(0, r.jsxs)("div", {
                        className: d.customGiftHeaderText,
                        children: [(0, r.jsx)(l.Text, {
                            variant: "text-md/bold",
                            children: c.default.Messages.GIFT_SELECT_SOUND
                        }), (0, r.jsx)(l.Text, {
                            variant: "text-sm/normal",
                            children: c.default.Messages.GIFT_SELECT_SOUNDBOARD_OR_EMOJI_DESCRIPTION
                        })]
                    }), (0, r.jsx)("div", {
                        className: d.searchAndSound,
                        children: e
                    })]
                });
                return (0, r.jsx)(l.Popout, {
                    shouldShow: m,
                    position: "bottom",
                    align: "left",
                    onRequestClose: () => _(!1),
                    renderPopout: e => {
                        let {
                            closePopout: t
                        } = e;
                        return (0, r.jsx)(l.Dialog, {
                            children: (0, r.jsx)(o.default, {
                                suppressPlaySound: !0,
                                shouldShowUpsell: !1,
                                guildId: null,
                                channel: null,
                                onClose: t,
                                onSelect: I,
                                analyticsSource: "gift soundboard",
                                soundButtonOverlay: u.SoundButtonOverlay.ADD,
                                listPadding: f,
                                renderHeader: E,
                                defaultSoundsOnly: !0
                            })
                        })
                    },
                    children: () => (0, r.jsx)(l.Clickable, {
                        className: d.sound,
                        onClick: () => _(!0),
                        children: null == n ? (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)(i.SoundboardIcon, {
                                color: a.default.colors.WHITE,
                                className: d.soundIcon,
                                width: 14,
                                height: 14
                            }), (0, r.jsx)(l.Text, {
                                className: d.text,
                                variant: "text-sm/semibold",
                                children: c.default.Messages.GIFT_SELECT_SOUND
                            })]
                        }) : (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)(l.Text, {
                                className: d.textSelected,
                                variant: "text-sm/semibold",
                                children: n.emojiName
                            }), (0, r.jsx)(l.Text, {
                                className: d.text,
                                variant: "text-sm/semibold",
                                children: n.name
                            })]
                        })
                    })
                })
            }

            function _(e) {
                let {
                    sound: t,
                    onSelect: n
                } = e;
                return (0, r.jsx)("div", {
                    className: d.container,
                    children: (0, r.jsx)(m, {
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
            }), n("222007");
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
                    focusProps: S
                } = e, [N, P] = s.useState(!1), [T, C] = s.useState(0), A = N || I, O = (0, c.getClass)(m, "emojiButton", A ? "Hovered" : "Normal"), R = function(e) {
                    let t = -e % d.EmojiSprites.PickerPerRow * 22,
                        n = -(22 * Math.floor(e / d.EmojiSprites.PickerPerRow));
                    return {
                        backgroundPosition: "".concat(t, "px ").concat(n, "px"),
                        backgroundSize: "".concat(22 * d.EmojiSprites.PickerPerRow, "px ").concat(22 * Math.ceil(d.EmojiSprites.PickerCount / d.EmojiSprites.PickerPerRow), "px")
                    }
                }(T), h = s.useCallback(() => {
                    if (A) return;
                    let e = Math.floor(Math.random() * d.EmojiSprites.PickerCount);
                    P(!0), C(e), o.default.dispatch({
                        type: "EMOJI_INTERACTION_INITIATED",
                        interaction: d.EmojiInteractionPoint.EmojiButtonMouseEntered
                    })
                }, [A, P, C]), g = s.useCallback(() => {
                    P(!1)
                }, [P]), v = s.useCallback(() => {
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
                    onMouseEnter: h,
                    onMouseOver: h,
                    onMouseLeave: g,
                    onFocus: v,
                    onClick: E,
                    "aria-label": f.default.Messages.SELECT_EMOJI,
                    "aria-controls": p,
                    "aria-expanded": I,
                    "aria-haspopup": "dialog",
                    focusProps: S,
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
                }, a.CircleQuestionIcon, void 0, {
                    size: 24
                })
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
                }, a.SlashIcon, void 0, {
                    size: 16
                })
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