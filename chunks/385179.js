            "use strict";
            n.r(t), n.d(t, {
                PaymentModal: function() {
                    return D
                },
                PaymentPredicateStep: function() {
                    return Y
                }
            }), n("222007");
            var l = n("37983"),
                u = n("884691"),
                a = n("414456"),
                i = n.n(a),
                s = n("775560"),
                r = n("65597"),
                o = n("77078"),
                c = n("316718"),
                d = n("856413"),
                f = n("245187"),
                _ = n("996808"),
                E = n("669073"),
                p = n("154889"),
                m = n("877261"),
                S = n("429070"),
                P = n("661128"),
                T = n("10514"),
                M = n("437712"),
                A = n("599110"),
                I = n("719923"),
                y = n("635357"),
                N = n("642906"),
                h = n("85336"),
                R = n("286350"),
                C = n("359371"),
                O = n("176108"),
                g = n("254350"),
                L = n("622271"),
                v = n("628738"),
                k = n("650484"),
                x = n("49111"),
                U = n("646718"),
                b = n("760604");

            function D(e) {
                let {
                    analyticsLocations: t,
                    analyticsLocation: n,
                    analyticsObject: a,
                    analyticsSourceLocation: r,
                    analyticsSubscriptionType: c = x.SubscriptionTypes.PREMIUM,
                    onComplete: d,
                    transitionState: f,
                    initialPlanId: E,
                    subscriptionTier: M,
                    onClose: O,
                    trialId: g,
                    trialFooterMessageOverride: v,
                    reviewWarningMessage: D,
                    planGroup: Y = U.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                    openInvoiceId: G,
                    onSubscriptionConfirmation: H,
                    renderPurchaseConfirmation: j,
                    postSuccessGuild: B,
                    followupSKUInfo: K,
                    renderHeader: w,
                    applicationId: F,
                    guildId: W,
                    referralTrialOfferId: V,
                    skuId: z,
                    shakeWhilePurchasing: X = !1,
                    isLargeModal: J = !1,
                    hideShadow: q = !1,
                    returnRef: Q
                } = e, {
                    activitySessionId: Z,
                    purchaseState: $,
                    setPurchaseState: ee,
                    selectedSkuId: et,
                    setSelectedSkuId: en,
                    selectedPlan: el,
                    setSelectedPlanId: eu,
                    setStep: ea,
                    setPurchaseError: ei,
                    paymentAuthenticationState: es,
                    step: er,
                    contextMetadata: eo,
                    purchaseTokenAuthState: ec,
                    activeSubscription: ed,
                    priceOptions: ef,
                    hasPaymentSources: e_,
                    paymentSourceId: eE,
                    paymentSources: ep,
                    purchaseType: em
                } = (0, N.usePaymentContext)(), eS = (0, C.default)(), eP = J || (null == eS ? void 0 : eS.isLargeModal) ? o.ModalSize.LARGE : o.ModalSize.SMALL, {
                    isGift: eT
                } = (0, y.useGiftContext)(), eM = (0, p.usePremiumDiscountOffer)(), eA = null != M && !eT && (0, p.discountOfferHasTier)(eM, M), [eI, ey] = u.useState({
                    load_id: eo.loadId,
                    payment_type: x.PurchaseTypeToAnalyticsPaymentType[em],
                    location: null != n ? n : a,
                    source: r,
                    subscription_type: c,
                    subscription_plan_id: null == el ? void 0 : el.id,
                    is_gift: eT,
                    eligible_for_trial: null != g,
                    location_stack: t,
                    sku_id: z,
                    application_id: F,
                    guild_id: W,
                    payment_modal_version: "v1",
                    activity_session_id: Z,
                    eligible_for_discount: eA
                }), eN = null != eE ? ep[eE] : null;
                u.useEffect(() => {
                    ey(e => {
                        let t = null != el ? (0, I.getPrice)(el.id, !1, eT, ef) : void 0,
                            n = {
                                ...e,
                                subscription_plan_id: null == el ? void 0 : el.id,
                                price: null == t ? void 0 : t.amount,
                                regular_price: null == el ? void 0 : el.price,
                                currency: ef.currency,
                                sku_id: et
                            };
                        return n
                    })
                }, [el, et, eT, ef]), u.useEffect(() => {
                    A.default.track(x.AnalyticEvents.PAYMENT_FLOW_STARTED, {
                        ...eI,
                        has_saved_payment_source: e_
                    })
                }, []), u.useEffect(() => {
                    if (eu(E), null != z) en(z);
                    else if (null != E) {
                        var e;
                        en(null === (e = T.default.get(E)) || void 0 === e ? void 0 : e.skuId)
                    }
                }, [eu, en, E, z]);
                let eh = (0, s.useStableMemo)(() => Date.now(), [er]),
                    eR = u.useCallback(function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            {
                                trackedFromStep: n,
                                analyticsDataOverride: l,
                                fulfillment: u
                            } = t,
                            a = Date.now();
                        e === h.Step.CONFIRM && (A.default.track(x.AnalyticEvents.PAYMENT_FLOW_SUCCEEDED, {
                            ...eI,
                            duration_ms: a - eo.startTime,
                            payment_source_type: null == eN ? void 0 : eN.type
                        }), null == d || d(u)), ea(e), ei(null);
                        let i = null != n ? n : er;
                        if (null === i) {
                            A.default.track(x.AnalyticEvents.PAYMENT_FLOW_LOADED, {
                                ...eI,
                                initial_step: e,
                                has_saved_payment_source: e_
                            });
                            return
                        }
                        A.default.track(x.AnalyticEvents.PAYMENT_FLOW_STEP, {
                            ...eI,
                            ...l,
                            from_step: i,
                            to_step: e === h.Step.ADD_PAYMENT_STEPS ? h.Step.PAYMENT_TYPE : e,
                            step_duration_ms: a - eh,
                            flow_duration_ms: a - eo.startTime
                        })
                    }, [eI, eo.startTime, d, ei, ea, er, eh, e_, eN]),
                    eC = u.useMemo(() => () => null == O ? void 0 : O($ === R.PurchaseState.COMPLETED, et), [O, $, et]);
                (0, m.usePaymentStepForAuthentication)(er, es, eR), (0, h.usePurchaseStateForStep)(er, $, ee), (0, S.usePurchaseTokenAuthStep)(er, ec, eR), (0, _.default)(eC), (0, P.useUnsupportedExternalSubscriptionModalHandler)(ed, () => O(!1), eT), (0, m.usePaymentAuthenticationPoller)(es);
                let eO = (0, L.PaymentModalHeader)({
                    renderHeader: w,
                    referralTrialOfferId: V,
                    handleClose: eC
                });
                return (0, l.jsx)(o.Shaker, {
                    className: b.shaker,
                    isShaking: X && $ === R.PurchaseState.PURCHASING,
                    intensity: 2,
                    children: (0, l.jsx)(o.ModalRoot, {
                        className: i(b.root, {
                            [b.withHeader]: null != eO
                        }),
                        transitionState: f,
                        hideShadow: q,
                        returnRef: Q,
                        size: eP,
                        children: (0, l.jsx)(k.default, {
                            header: eO,
                            isLargeModal: J || (null == eS ? void 0 : eS.isLargeModal),
                            initialPlanId: E,
                            subscriptionTier: M,
                            handleStepChange: eR,
                            handleClose: eC,
                            analyticsData: eI,
                            setAnalyticsData: ey,
                            trialId: g,
                            trialFooterMessageOverride: v,
                            reviewWarningMessage: D,
                            planGroup: Y,
                            openInvoiceId: G,
                            analyticsLocation: n,
                            onSubscriptionConfirmation: H,
                            renderPurchaseConfirmation: j,
                            postSuccessGuild: B,
                            followupSKUInfo: K,
                            referralTrialOfferId: V
                        })
                    })
                })
            }

            function Y(e) {
                let {
                    subscriptionTier: t,
                    initialPlanId: n,
                    handleStepChange: a,
                    referralTrialOfferId: i,
                    handleClose: s
                } = e, {
                    activeSubscription: o,
                    blockedPayments: _,
                    hasFetchedSubscriptions: p,
                    hasFetchedSubscriptionPlans: m,
                    currencyLoading: S,
                    selectedSkuId: P,
                    setSelectedPlanId: T,
                    defaultPlanId: A,
                    startedPaymentFlowWithPaymentSourcesRef: I
                } = (0, N.usePaymentContext)(), {
                    isGift: R
                } = (0, y.useGiftContext)(), C = I.current, L = (0, g.default)({
                    isGift: R,
                    skuId: P,
                    referralTrialOfferId: i
                }), {
                    defaultToMonthlyPlan: k
                } = E.TrialRedemptionDefaultPlanExperiment.getCurrentConfig({
                    location: "055ec5_1"
                }, {
                    autoTrackExposure: !1
                }), [x, b] = u.useState(!0), D = (0, r.default)([M.default], () => M.default.applicationIdsFetched.has(U.PREMIUM_SUBSCRIPTION_APPLICATION));
                return (u.useEffect(() => {
                    b(!p || !m || S)
                }, [S, m, p]), (0, d.default)("Payment Modal", x, 5, {
                    hasFetchedSubscriptions: p,
                    hasFetchedSubscriptionPlans: m,
                    currencyLoading: S
                }, {
                    tags: {
                        app_context: "billing"
                    }
                }), u.useEffect(() => {
                    if (!D && (0, c.fetchUserEntitlementsForApplication)(U.PREMIUM_SUBSCRIPTION_APPLICATION), x || _) return;
                    let e = (0, O.inOneStepSubscriptionCheckout)({
                        isTrial: L,
                        isGift: R,
                        selectedSkuId: P,
                        startedPaymentFlowWithPaymentSources: C
                    });
                    if (null != n) a(h.Step.REVIEW);
                    else if (e) {
                        let e = (0, O.getDefaultPlanOneStepCheckout)(P, o, A);
                        T(e), a(h.Step.REVIEW)
                    } else null != t ? a(h.Step.PLAN_SELECT) : a(h.Step.SKU_SELECT)
                }, [o, _, D, n, x, a, t, P, T, k, L, A, R, C]), x) ? (0, l.jsx)(v.default, {}) : _ ? (0, l.jsx)(f.BlockedPaymentsContentModal, {
                    onClose: s
                }) : null
            }