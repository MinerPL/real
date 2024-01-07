            "use strict";
            n.r(e), n.d(e, {
                PaymentContextProvider: function() {
                    return B
                },
                PaymentContext: function() {
                    return g
                },
                usePaymentContext: function() {
                    return G
                },
                useForwardedPaymentContext: function() {
                    return D
                }
            }), n("222007"), n("702976");
            var u = n("37983"),
                i = n("884691"),
                r = n("41092"),
                l = n("775560"),
                a = n("748820"),
                o = n("446674"),
                s = n("191225"),
                c = n("650509"),
                S = n("619935"),
                d = n("467292"),
                E = n("622839"),
                f = n("105097"),
                _ = n("568734"),
                T = n("719923"),
                I = n("286235"),
                A = n("621746"),
                p = n("854381"),
                C = n("237288"),
                P = n("986681"),
                N = n("702924"),
                R = n("241006"),
                U = n("284797"),
                L = n("383802"),
                M = n("334702"),
                F = n("775325"),
                O = n("403293"),
                h = n("523591"),
                m = n("49111"),
                y = n("646718");
            let [g, G, D] = (0, f.default)();

            function B(t) {
                var e, n;
                let {
                    loadId: f,
                    activeSubscription: G,
                    stepConfigs: D,
                    breadcrumbs: B = [],
                    skuIDs: H,
                    isGift: v = !1,
                    children: K,
                    defaultPlanId: b,
                    purchaseType: w = m.PurchaseTypes.SUBSCRIPTION,
                    applicationId: Y,
                    referralCode: W
                } = t, V = (0, O.default)(), k = (0, S.useBlockedPaymentsConfig)(), Z = (0, C.default)(), {
                    paymentSources: x,
                    hasPaymentSources: J,
                    paymentSourceId: Q,
                    setPaymentSourceId: X,
                    hasFetchedPaymentSources: j
                } = (0, P.default)({
                    isGift: v,
                    activeSubscription: G
                }), q = i.useRef(J), {
                    hasFetchedSubscriptionPlans: z,
                    priceOptions: $,
                    setCurrency: tt,
                    currencyLoading: te,
                    currencies: tn
                } = (0, p.default)({
                    activeSubscription: G,
                    skuIDs: H,
                    paymentSourceId: Q,
                    isGift: v
                }), tu = (0, L.default)(), [ti, tr] = i.useState(!1), {
                    step: tl,
                    setStep: ta,
                    steps: to,
                    breadcrumbsData: ts
                } = (0, F.default)({
                    stepConfigs: D,
                    breadcrumbs: B
                }), [tc, tS] = (0, U.default)(tl), {
                    paymentError: td,
                    paymentAuthenticationState: tE
                } = (0, N.default)(), {
                    purchaseError: tf,
                    purchaseErrorBlockRef: t_,
                    setPurchaseError: tT
                } = (0, R.default)(), tI = (0, l.useLazyValue)(() => {
                    let t = null != f ? f : (0, a.v4)();
                    return I.default.addBreadcrumb({
                        message: "Checkout session ID: ".concat(t)
                    }), {
                        loadId: t,
                        startTime: Date.now()
                    }
                }), {
                    selectedSkuId: tA,
                    selectedPlan: tp,
                    setSelectedSkuId: tC,
                    setSelectedPlanId: tP
                } = (0, A.default)(), [tN, tR] = (0, o.useStateFromStoresArray)([d.default], () => [d.default.purchaseTokenAuthState, d.default.purchaseTokenHash]), [tU, tL] = (0, o.useStateFromStoresArray)([h.default], () => [h.default.browserCheckoutState, h.default.loadId]), [tM, tF] = i.useState(null), [tO, th] = i.useState(null), [tm, ty] = i.useState(null), [tg, tG] = i.useState(null), [tD, tB] = i.useState(null), [tH, tv] = i.useState(void 0), [tK, tb] = i.useState([]), tw = i.useMemo(() => null == tp || (0, T.isPremiumSubscriptionPlan)(tp.id), [tp]), tY = i.useRef(null != G ? G.planId : null);
                i.useEffect(() => {
                    null == tY.current && null != G && (tY.current = G.planId)
                }, [G]);
                let {
                    skusById: tW,
                    hasFetchedSkus: tV,
                    skuPricePreviewsById: tk
                } = (0, M.default)({
                    applicationId: null != Y ? Y : y.PREMIUM_SUBSCRIPTION_APPLICATION,
                    skuIDs: H,
                    currentPaymentSourceId: Q,
                    isGift: v
                }), tZ = i.useMemo(() => {
                    if (null == tA) return null;
                    let t = tk[tA];
                    if (null == t) return null;
                    let e = null != Q ? Q : E.NO_PAYMENT_SOURCE;
                    return t[e]
                }, [tA, tk, Q]), tx = (0, c.useApplication)(Y), tJ = (0, _.hasFlag)(null !== (e = null == tx ? void 0 : tx.flags) && void 0 !== e ? e : 0, m.ApplicationFlags.EMBEDDED) && (0, _.hasFlag)(null !== (n = null == tx ? void 0 : tx.flags) && void 0 !== n ? n : 0, m.ApplicationFlags.EMBEDDED_IAP), tQ = (0, o.useStateFromStores)([s.default], () => Array.from(s.default.getSelfEmbeddedActivities().values()).find(t => {
                    let {
                        application_id: e
                    } = t;
                    return Y === e
                })), tX = null != tQ ? tQ.activity_id : void 0, tj = tW[null != tA ? tA : ""];
                return (0, u.jsx)(g.Provider, {
                    value: {
                        stripe: V,
                        contextMetadata: tI,
                        blockedPayments: k,
                        activeSubscription: G,
                        hasFetchedSubscriptions: Z,
                        hasFetchedSubscriptionPlans: z,
                        updatedSubscription: tg,
                        setUpdatedSubscription: tG,
                        subscriptionMetadataRequest: tD,
                        setSubscriptionMetadataRequest: tB,
                        hasFetchedPaymentSources: j,
                        paymentSources: x,
                        hasPaymentSources: J,
                        paymentSourceId: Q,
                        setPaymentSourceId: X,
                        priceOptions: $,
                        setCurrency: tt,
                        currencyLoading: te,
                        currencies: tn,
                        ...tu,
                        hasAcceptedTerms: ti,
                        setHasAcceptedTerms: tr,
                        step: tl,
                        setStep: ta,
                        steps: to,
                        stepConfigs: D,
                        breadcrumbs: ts,
                        purchaseState: tc,
                        setPurchaseState: tS,
                        paymentAuthenticationState: tE,
                        paymentError: td,
                        purchaseError: tf,
                        setPurchaseError: tT,
                        purchaseErrorBlockRef: t_,
                        purchaseTokenAuthState: tN,
                        purchaseTokenHash: tR,
                        browserCheckoutState: tU,
                        browserCheckoutStateLoadId: tL,
                        bodyNode: tM,
                        setBodyNode: tF,
                        footerNode: tO,
                        setFooterNode: th,
                        modalOverlayNode: tm,
                        setModalOverlayNode: ty,
                        selectedSkuId: tA,
                        selectedPlan: tp,
                        setSelectedSkuId: tC,
                        setSelectedPlanId: tP,
                        readySlideId: tH,
                        setReadySlideId: tv,
                        defaultPlanId: b,
                        isPremium: tw,
                        productLine: null == tj ? void 0 : tj.productLine,
                        startedPaymentFlowWithPaymentSourcesRef: q,
                        startingPremiumSubscriptionPlanIdRef: tY,
                        hasFetchedSkus: tV,
                        skusById: tW,
                        skuPricePreviewsById: tk,
                        selectedSkuPricePreview: tZ,
                        application: tx,
                        purchaseType: w,
                        isEmbeddedIAP: tJ,
                        activitySessionId: tX,
                        entitlementsGranted: tK,
                        setEntitlementsGranted: tb,
                        referralCode: W
                    },
                    children: (0, u.jsx)(r.Elements, {
                        options: m.StripeElementsOptions,
                        stripe: V,
                        children: K
                    })
                })
            }