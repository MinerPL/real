"use strict";
n.r(t), n.d(t, {
  PaymentModalAddPaymentStep: function() {
    return _
  }
});
var s = n("627445"),
  r = n.n(s),
  a = n("775560"),
  l = n("917247"),
  i = n("724522"),
  u = n("599110"),
  c = n("635357"),
  o = n("642906"),
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
    paymentSourceId: T,
    setPaymentSourceId: P,
    purchaseError: C,
    setPurchaseError: A,
    purchaseErrorBlockRef: O,
    paymentAuthenticationState: h,
    selectedSkuId: R
  } = (0, o.usePaymentContext)(), {
    isGift: g
  } = (0, c.useGiftContext)(), M = {
    ...(0, i.useSharedPaymentModal)(),
    paymentSources: S,
    paymentSourceId: T,
    setPaymentSourceId: P,
    purchaseError: C,
    setPurchaseError: A,
    purchaseErrorBlockRef: O,
    paymentAuthenticationState: h
  }, v = (0, l.usePremiumTrialOffer)(E), x = !g && null != v && null != R && (0, m.SubscriptionTrials)[v.trial_id].skus.includes(R), L = null != I ? I : () => {
    let e = Object.values(S).length < 1 && null == n ? d.Step.PLAN_SELECT : d.Step.REVIEW;
    _(e, {
      trackedFromStep: d.Step.PAYMENT_TYPE
    })
  };
  r(N, "Step should be set here");
  let y = (0, a.useStableMemo)(() => Date.now(), [N]);
  return (0, i.AddPaymentFlow)({
    paymentModalArgs: M,
    initialStep: d.Step.PAYMENT_TYPE,
    prependSteps: [d.Step.PROMOTION_INFO],
    appendSteps: [d.Step.REVIEW, d.Step.CONFIRM],
    breadcrumpSteps: s,
    currentBreadcrumpStep: N,
    usePaymentModalStep: !0,
    onReturn: L,
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
        step_duration_ms: r - y,
        flow_duration_ms: r - p.startTime
      })
    },
    isEligibleForTrial: x
  })
}