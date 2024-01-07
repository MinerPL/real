            "use strict";
            n.r(t), n.d(t, {
                PaymentModalAddPaymentStep: function() {
                    return _
                }
            });
            var s = n("627445"),
                r = n.n(s),
                l = n("775560"),
                i = n("917247"),
                a = n("724522"),
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
                    breadcrumbSteps: s,
                    handleStepChange: _,
                    referralTrialOfferId: E,
                    onReturn: I
                } = e, {
                    contextMetadata: p,
                    step: N,
                    paymentSources: S,
                    paymentSourceId: P,
                    setPaymentSourceId: T,
                    purchaseError: C,
                    setPurchaseError: A,
                    purchaseErrorBlockRef: h,
                    paymentAuthenticationState: O,
                    selectedSkuId: R
                } = (0, c.usePaymentContext)(), {
                    isGift: g
                } = (0, o.useGiftContext)(), v = {
                    ...(0, a.useSharedPaymentModal)(),
                    paymentSources: S,
                    paymentSourceId: P,
                    setPaymentSourceId: T,
                    purchaseError: C,
                    setPurchaseError: A,
                    purchaseErrorBlockRef: h,
                    paymentAuthenticationState: O
                }, M = (0, i.usePremiumTrialOffer)(E), x = !g && null != M && null != R && (0, m.SubscriptionTrials)[M.trial_id].skus.includes(R), y = null != I ? I : () => {
                    let e = Object.values(S).length < 1 && null == n ? d.Step.PLAN_SELECT : d.Step.REVIEW;
                    _(e, {
                        trackedFromStep: d.Step.PAYMENT_TYPE
                    })
                };
                r(N, "Step should be set here");
                let L = (0, l.useStableMemo)(() => Date.now(), [N]);
                return (0, a.AddPaymentFlow)({
                    paymentModalArgs: v,
                    initialStep: d.Step.PAYMENT_TYPE,
                    prependSteps: [d.Step.PROMOTION_INFO],
                    appendSteps: [d.Step.REVIEW, d.Step.CONFIRM],
                    breadcrumpSteps: s,
                    currentBreadcrumpStep: N,
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
                            toStep: s
                        } = e, r = Date.now();
                        u.default.track(f.AnalyticEvents.PAYMENT_FLOW_STEP, {
                            ...t,
                            from_step: n,
                            to_step: s,
                            step_duration_ms: r - L,
                            flow_duration_ms: r - p.startTime
                        })
                    },
                    isEligibleForTrial: x
                })
            }