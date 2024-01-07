            "use strict";
            n.r(t), n.d(t, {
                PremiumPaymentModal: function() {
                    return O
                },
                STEPS: function() {
                    return F
                },
                default: function() {
                    return w
                }
            }), n("70102"), n("222007");
            var i = n("37983"),
                r = n("884691"),
                s = n("446674"),
                l = n("913144"),
                a = n("775433"),
                u = n("812204"),
                o = n("685665"),
                d = n("677156"),
                c = n("10514"),
                f = n("521012"),
                m = n("659632"),
                p = n("635357"),
                S = n("642906"),
                E = n("85336"),
                P = n("385179"),
                _ = n("262683"),
                I = n("946359"),
                C = n("307367"),
                h = n("724269"),
                x = n("99836"),
                T = n("263820"),
                g = n("992049"),
                y = n("176108"),
                A = n("97461"),
                L = n("403365"),
                N = n("498475"),
                M = n("254350"),
                v = n("49111"),
                b = n("646718"),
                j = n("782340");
            let k = [E.Step.PLAN_SELECT, E.Step.ADD_PAYMENT_STEPS, E.Step.REVIEW, E.Step.CONFIRM];

            function O(e) {
                let {
                    analyticsLocation: t,
                    analyticsObject: n,
                    analyticsSourceLocation: s,
                    onComplete: u,
                    transitionState: f,
                    initialPlanId: _,
                    subscriptionTier: I,
                    onClose: C,
                    trialId: h,
                    trialFooterMessageOverride: x,
                    reviewWarningMessage: g,
                    openInvoiceId: y,
                    onSubscriptionConfirmation: A,
                    renderPurchaseConfirmation: L,
                    postSuccessGuild: N,
                    followupSKUInfo: M,
                    renderHeader: j,
                    applicationId: k,
                    guildId: O,
                    referralTrialOfferId: R,
                    skuId: U,
                    returnRef: F
                } = e, {
                    analyticsLocations: w
                } = (0, o.default)();
                r.useEffect(() => {
                    !c.default.isLoadedForPremiumSKUs() && l.default.wait(() => (0, a.fetchPremiumSubscriptionPlans)())
                }, []), T.default.getCurrentConfig({
                    location: "3a6d55_1"
                }, {
                    autoTrackExposure: !0
                });
                let {
                    step: B
                } = (0, S.usePaymentContext)(), {
                    isGift: G,
                    giftMessage: D,
                    giftRecipient: H
                } = (0, p.useGiftContext)(), W = G && (0, m.shouldShowCustomGiftExperience)(H, !0, "PremiumPaymentModal") && B === E.Step.PLAN_SELECT;
                return null != H && d.CustomGiftExperiment.getCurrentConfig({
                    location: "initialRelease_PremiumPaymentModal"
                }), (0, i.jsx)(P.PaymentModal, {
                    analyticsLocations: w,
                    analyticsLocation: t,
                    analyticsObject: n,
                    analyticsSourceLocation: s,
                    analyticsSubscriptionType: v.SubscriptionTypes.PREMIUM,
                    onComplete: u,
                    transitionState: f,
                    initialPlanId: _,
                    giftMessage: D,
                    subscriptionTier: I,
                    onClose: C,
                    trialId: h,
                    isGift: G,
                    trialFooterMessageOverride: x,
                    reviewWarningMessage: g,
                    planGroup: b.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                    openInvoiceId: y,
                    onSubscriptionConfirmation: A,
                    renderPurchaseConfirmation: L,
                    postSuccessGuild: N,
                    followupSKUInfo: M,
                    renderHeader: j,
                    applicationId: k,
                    guildId: O,
                    referralTrialOfferId: R,
                    skuId: U,
                    shakeWhilePurchasing: !0,
                    isLargeModal: W,
                    returnRef: F
                })
            }

            function R(e) {
                let {
                    startedPaymentFlowWithPaymentSourcesRef: t,
                    selectedSkuId: n
                } = (0, S.usePaymentContext)(), {
                    isGift: i
                } = (0, p.useGiftContext)();
                return (0, y.inOneStepSubscriptionCheckout)({
                    isTrial: null != e && e,
                    isGift: i,
                    selectedSkuId: n,
                    startedPaymentFlowWithPaymentSources: t.current
                })
            }

            function U(e) {
                let {
                    initialPlanId: t,
                    handleStepChange: n,
                    referralTrialOfferId: r
                } = e, {
                    paymentSources: s,
                    selectedSkuId: l
                } = (0, S.usePaymentContext)(), {
                    isGift: a
                } = (0, p.useGiftContext)(), u = (0, M.default)({
                    isGift: a,
                    skuId: l,
                    referralTrialOfferId: r
                }), o = R(u);
                return (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsx)(_.PaymentModalAddPaymentStep, {
                        ...e,
                        breadcrumbSteps: k,
                        onReturn: () => {
                            let e = Object.values(s).length < 1 && null == t ? E.Step.PLAN_SELECT : E.Step.REVIEW;
                            o && (e = E.Step.REVIEW), n(e, {
                                trackedFromStep: E.Step.PAYMENT_TYPE
                            })
                        }
                    })
                })
            }
            let F = [{
                key: null,
                renderStep: e => (0, i.jsx)(P.PaymentPredicateStep, {
                    ...e
                })
            }, {
                key: E.Step.SKU_SELECT,
                renderStep: e => (0, i.jsx)(L.PremiumPaymentSKUSelectStep, {
                    ...e
                }),
                options: {
                    renderHeader: !1,
                    hideSlider: !0
                }
            }, {
                key: E.Step.WHAT_YOU_LOSE,
                renderStep: e => (0, i.jsx)(N.PremiumPaymentWhatYouLoseStep, {
                    ...e
                }),
                options: {
                    renderHeader: !1,
                    hideSlider: !0
                }
            }, {
                key: E.Step.PLAN_SELECT,
                renderStep: e => (0, i.jsx)(A.PremiumPaymentPlanSelectStep, {
                    ...e
                }),
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: e => {
                        let t = R(e);
                        return t ? null : j.default.Messages.BILLING_STEP_SELECT_PLAN
                    }
                }
            }, {
                key: E.Step.ADD_PAYMENT_STEPS,
                renderStep: e => (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsx)(U, {
                        ...e
                    })
                }),
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: e => {
                        let t = R(e);
                        return t ? null : j.default.Messages.BILLING_STEP_PAYMENT
                    }
                }
            }, {
                key: E.Step.AWAITING_BROWSER_CHECKOUT,
                renderStep: e => (0, i.jsx)(C.default, {
                    ...e
                })
            }, {
                key: E.Step.AWAITING_PURCHASE_TOKEN_AUTH,
                renderStep: () => (0, i.jsx)(h.default, {})
            }, {
                key: E.Step.AWAITING_AUTHENTICATION,
                renderStep: () => (0, i.jsx)(I.default, {})
            }, {
                key: E.Step.REVIEW,
                renderStep: e => (0, i.jsx)(x.PaymentModalReviewStep, {
                    ...e
                }),
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: e => {
                        let t = R(e);
                        return t ? j.default.Messages.BILLING_STEP_PLAN_AND_PAYMENT : j.default.Messages.BILLING_STEP_REVIEW
                    }
                }
            }, {
                key: E.Step.CONFIRM,
                renderStep: e => (0, i.jsx)(g.PremiumPaymentConfirmStep, {
                    ...e
                })
            }];

            function w(e) {
                let t = (0, s.useStateFromStores)([f.default], () => f.default.getPremiumTypeSubscription()),
                    {
                        AnalyticsLocationProvider: n
                    } = (0, o.default)(e.analyticsLocations, u.default.PREMIUM_PAYMENT_MODAL),
                    {
                        subscriptionTier: r,
                        isGift: l,
                        giftRecipient: a,
                        giftMessage: d,
                        loadId: c,
                        defaultPlanId: m,
                        referralCode: E
                    } = e;
                if (null != r && !Object.values(b.PremiumSubscriptionSKUs).includes(r)) throw Error("subscriptionTier must be a premium subscription");
                return (0, i.jsx)(n, {
                    children: (0, i.jsx)(S.PaymentContextProvider, {
                        loadId: c,
                        activeSubscription: null != e.subscription ? e.subscription : t,
                        stepConfigs: F,
                        skuIDs: [...b.ACTIVE_PREMIUM_SKUS],
                        isGift: l,
                        defaultPlanId: m,
                        referralCode: E,
                        children: (0, i.jsx)(p.GiftContextProvider, {
                            isGift: l,
                            giftRecipient: null == a ? void 0 : a,
                            giftMessage: d,
                            children: (0, i.jsx)(O, {
                                ...e
                            })
                        })
                    })
                })
            }