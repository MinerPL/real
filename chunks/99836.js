"use strict";
n.r(t), n.d(t, {
  PaymentModalReviewStep: function() {
    return N
  }
}), n("222007"), n("70102");
var i = n("37983"),
  a = n("884691"),
  r = n("627445"),
  l = n.n(r),
  s = n("612039"),
  u = n("916187"),
  o = n("154889"),
  c = n("917247"),
  d = n("527866"),
  p = n("826795"),
  m = n("659632"),
  f = n("635357"),
  S = n("642906"),
  h = n("85336"),
  P = n("310093"),
  I = n("367767"),
  v = n("176108"),
  E = n("298392"),
  y = n("153727"),
  T = n("39065"),
  x = n("650484"),
  C = n("646718"),
  b = n("843455"),
  _ = n("782340");

function N(e) {
  var t, n;
  let r, {
      handleStepChange: N,
      trialId: g,
      trialFooterMessageOverride: L,
      reviewWarningMessage: A,
      planGroup: j,
      openInvoiceId: R,
      analyticsData: M,
      analyticsLocation: w,
      referralTrialOfferId: F,
      initialPlanId: O,
      subscriptionTier: U,
      handleClose: G
    } = e,
    {
      activeSubscription: D,
      setUpdatedSubscription: B,
      contextMetadata: W,
      currencies: k,
      paymentSourceId: H,
      paymentSources: V,
      priceOptions: z,
      purchaseError: Y,
      purchaseTokenAuthState: Z,
      selectedPlan: K,
      selectedSkuId: Q,
      setCurrency: J,
      setPaymentSourceId: X,
      setPurchaseState: q,
      setPurchaseError: $,
      step: ee,
      purchaseState: et,
      isPremium: en,
      setHasAcceptedTerms: ei,
      purchaseType: ea,
      setEntitlementsGranted: er,
      startedPaymentFlowWithPaymentSourcesRef: el
    } = (0, S.usePaymentContext)(),
    {
      isGift: es,
      giftMessage: eu,
      giftRecipient: eo
    } = (0, f.useGiftContext)();
  l(null != ee, "Step should be set");
  let ec = a.useRef(null),
    [ed, ep] = (0, s.default)(!1, 500),
    em = null !== (n = null != g ? g : F) && void 0 !== n ? n : null,
    ef = null != em && (!en || (0, C.SubscriptionTrials)[em].skus.includes(Q)) ? em : null,
    eS = (0, c.usePremiumTrialOffer)(F),
    eh = (0, o.usePremiumDiscountOffer)(),
    eP = {
      user_trial_offer_id: null == eS ? void 0 : eS.id
    };
  a.useEffect(() => {
    null != Y && null != ec.current && ec.current.scrollIntoView({
      behavior: "smooth"
    })
  }, [Y]);
  let eI = a.useCallback((e, t) => {
      B(e), null != t && er(t), N(h.Step.CONFIRM, {
        fulfillment: {
          subscription: e,
          entitlements: t
        }
      })
    }, [N, B, er]),
    ev = null != H ? V[H] : null,
    eE = null != K && C.MULTI_MONTH_PLANS.has(K.id) && null != ev && !(0, u.isPaymentSourceEligibleForMultiMonthPlans)(ev) ? Error(_.default.Messages.BILLING_ERROR_INVALID_PLAN_FOR_PAYMENT_SOURCE) : null,
    ey = a.useRef(null),
    [eT, ex] = a.useState(null),
    eC = !es && null != eS && null != Q && (0, C.SubscriptionTrials)[eS.trial_id].skus.includes(Q),
    eb = null == eh ? void 0 : null === (t = eh.discount) || void 0 === t ? void 0 : t.plan_ids,
    e_ = !es && null != eh && null != eb && null != K && eb.includes(K.id),
    eN = es && (0, m.shouldShowCustomGiftExperience)(eo, !0, "PaymentModalReviewStep"),
    eg = null == O && null == U && ea === b.PurchaseTypes.SUBSCRIPTION,
    eL = (0, v.inOneStepSubscriptionCheckout)({
      isTrial: eC,
      isGift: es,
      selectedSkuId: Q,
      startedPaymentFlowWithPaymentSources: el.current
    }),
    eA = es && ea === b.PurchaseTypes.ONE_TIME,
    ej = eA || (eL ? eg && en : en),
    eR = a.useCallback(() => {
      if (eL) {
        N(h.Step.SKU_SELECT);
        return
      }
      return eA ? N(h.Step.GIFT_CUSTOMIZATION) : N(h.Step.PLAN_SELECT)
    }, [N, eL, eA]);
  return ea === b.PurchaseTypes.ONE_TIME ? r = (0, i.jsx)(E.default, {
    hasLegalTermsFlash: ed,
    legalTermsNodeRef: ey,
    onPaymentSourceChange: e => X(null != e ? e.id : null),
    handlePaymentSourceAdd: () => N(h.Step.ADD_PAYMENT_STEPS)
  }) : null == D || es ? (l(null != K, "Expected plan to be selected"), r = (0, i.jsx)(d.default, {
    selectedPlanId: K.id,
    paymentSources: V,
    onPaymentSourceChange: e => X(null != e ? e.id : null),
    priceOptions: z,
    currencies: k,
    onCurrencyChange: e => J(e),
    handlePaymentSourceAdd: () => N(h.Step.ADD_PAYMENT_STEPS),
    setHasAcceptedTerms: ei,
    legalTermsNodeRef: ey,
    hasLegalTermsFlash: ed,
    trialId: ef,
    trialFooterMessageOverride: L,
    reviewWarningMessage: A,
    purchaseState: et,
    referralTrialOfferId: F,
    isTrial: eC || null != g && null != L,
    isDiscount: e_,
    handleClose: G
  })) : (l(null != K, "Expected plan to be selected"), r = (0, i.jsx)(p.default, {
    premiumSubscription: D,
    paymentSources: V,
    priceOptions: z,
    onPaymentSourceChange: e => {
      X(null != e ? e.id : null)
    },
    onPaymentSourceAdd: () => {
      N(h.Step.ADD_PAYMENT_STEPS)
    },
    planId: K.id,
    setHasAcceptedTerms: ei,
    legalTermsNodeRef: ey,
    hasLegalTermsFlash: ed,
    onInvoiceError: e => ex(e),
    planGroup: j,
    currencies: k,
    onCurrencyChange: e => J(e),
    hasOpenInvoice: null != R,
    purchaseState: et,
    handleClose: G
  })), (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(P.GiftNote, {
      giftMessage: eu
    }), !eN && (0, i.jsx)(y.default, {
      isEligibleForTrial: eC
    }), (0, i.jsxs)(x.PaymentPortalBody, {
      children: [(0, i.jsx)(I.default, {}), r]
    }), (0, i.jsx)(x.PaymentPortalFooter, {
      children: (0, i.jsx)(T.default, {
        premiumSubscription: null != D ? D : null,
        setPurchaseState: q,
        onBack: eR,
        onNext: eI,
        onPurchaseError: e => $(e),
        legalTermsNodeRef: ey,
        flashLegalTerms: () => ep(!0),
        invoiceError: eT,
        planError: eE,
        analyticsLocation: w,
        baseAnalyticsData: M,
        flowStartTime: W.startTime,
        trialId: ef,
        planGroup: j,
        purchaseTokenAuthState: Z,
        openInvoiceId: R,
        backButtonEligible: ej,
        metadata: eP,
        isTrial: eC,
        disablePurchase: null != ev && ea === b.PurchaseTypes.SUBSCRIPTION && eC && !ev.canRedeemTrial()
      })
    })]
  })
}