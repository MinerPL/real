"use strict";
n.r(t), n.d(t, {
  PremiumPaymentModal: function() {
    return k
  },
  STEPS: function() {
    return G
  },
  default: function() {
    return D
  }
}), n("70102"), n("222007");
var s = n("37983"),
  a = n("884691"),
  l = n("446674"),
  r = n("913144"),
  i = n("775433"),
  u = n("812204"),
  o = n("685665"),
  d = n("677156"),
  c = n("10514"),
  _ = n("521012"),
  f = n("659632"),
  E = n("635357"),
  I = n("642906"),
  m = n("85336"),
  S = n("385179"),
  p = n("262683"),
  P = n("946359"),
  T = n("307367"),
  N = n("724269"),
  M = n("99836"),
  C = n("263820"),
  R = n("992049"),
  L = n("176108"),
  A = n("97461"),
  g = n("403365"),
  x = n("498475"),
  O = n("254350"),
  h = n("49111"),
  y = n("646718"),
  b = n("782340");
let U = [m.Step.PLAN_SELECT, m.Step.ADD_PAYMENT_STEPS, m.Step.REVIEW, m.Step.CONFIRM];

function k(e) {
  let {
    analyticsLocation: t,
    analyticsObject: n,
    analyticsSourceLocation: l,
    onComplete: u,
    transitionState: _,
    initialPlanId: p,
    subscriptionTier: P,
    onClose: T,
    trialId: N,
    trialFooterMessageOverride: M,
    reviewWarningMessage: R,
    openInvoiceId: L,
    onSubscriptionConfirmation: A,
    renderPurchaseConfirmation: g,
    postSuccessGuild: x,
    followupSKUInfo: O,
    renderHeader: b,
    applicationId: U,
    guildId: k,
    referralTrialOfferId: v,
    skuId: j,
    returnRef: G
  } = e, {
    analyticsLocations: D
  } = (0, o.default)();
  a.useEffect(() => {
    !c.default.isLoadedForPremiumSKUs() && r.default.wait(() => (0, i.fetchPremiumSubscriptionPlans)())
  }, []), C.default.getCurrentConfig({
    location: "3a6d55_1"
  }, {
    autoTrackExposure: !0
  });
  let {
    step: B
  } = (0, I.usePaymentContext)(), {
    isGift: F,
    giftMessage: H,
    giftRecipient: W
  } = (0, E.useGiftContext)(), Y = F && (0, f.shouldShowCustomGiftExperience)(W, !0, "PremiumPaymentModal") && B === m.Step.PLAN_SELECT;
  return null != W && d.CustomGiftExperiment.getCurrentConfig({
    location: "initialRelease_PremiumPaymentModal"
  }), (0, s.jsx)(S.PaymentModal, {
    analyticsLocations: D,
    analyticsLocation: t,
    analyticsObject: n,
    analyticsSourceLocation: l,
    analyticsSubscriptionType: h.SubscriptionTypes.PREMIUM,
    onComplete: u,
    transitionState: _,
    initialPlanId: p,
    giftMessage: H,
    subscriptionTier: P,
    onClose: T,
    trialId: N,
    isGift: F,
    trialFooterMessageOverride: M,
    reviewWarningMessage: R,
    planGroup: y.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
    openInvoiceId: L,
    onSubscriptionConfirmation: A,
    renderPurchaseConfirmation: g,
    postSuccessGuild: x,
    followupSKUInfo: O,
    renderHeader: b,
    applicationId: U,
    guildId: k,
    referralTrialOfferId: v,
    skuId: j,
    shakeWhilePurchasing: !0,
    isLargeModal: Y,
    returnRef: G
  })
}

function v(e) {
  let {
    startedPaymentFlowWithPaymentSourcesRef: t,
    selectedSkuId: n
  } = (0, I.usePaymentContext)(), {
    isGift: s
  } = (0, E.useGiftContext)();
  return (0, L.inOneStepSubscriptionCheckout)({
    isTrial: null != e && e,
    isGift: s,
    selectedSkuId: n,
    startedPaymentFlowWithPaymentSources: t.current
  })
}

function j(e) {
  let {
    initialPlanId: t,
    handleStepChange: n,
    referralTrialOfferId: a
  } = e, {
    paymentSources: l,
    selectedSkuId: r
  } = (0, I.usePaymentContext)(), {
    isGift: i
  } = (0, E.useGiftContext)(), u = (0, O.default)({
    isGift: i,
    skuId: r,
    referralTrialOfferId: a
  }), o = v(u);
  return (0, s.jsx)(s.Fragment, {
    children: (0, s.jsx)(p.PaymentModalAddPaymentStep, {
      ...e,
      breadcrumbSteps: U,
      onReturn: () => {
        let e = Object.values(l).length < 1 && null == t ? m.Step.PLAN_SELECT : m.Step.REVIEW;
        o && (e = m.Step.REVIEW), n(e, {
          trackedFromStep: m.Step.PAYMENT_TYPE
        })
      }
    })
  })
}
let G = [{
  key: null,
  renderStep: e => (0, s.jsx)(S.PaymentPredicateStep, {
    ...e
  })
}, {
  key: m.Step.SKU_SELECT,
  renderStep: e => (0, s.jsx)(g.PremiumPaymentSKUSelectStep, {
    ...e
  }),
  options: {
    renderHeader: !1,
    hideSlider: !0
  }
}, {
  key: m.Step.WHAT_YOU_LOSE,
  renderStep: e => (0, s.jsx)(x.PremiumPaymentWhatYouLoseStep, {
    ...e
  }),
  options: {
    renderHeader: !1,
    hideSlider: !0
  }
}, {
  key: m.Step.PLAN_SELECT,
  renderStep: e => (0, s.jsx)(A.PremiumPaymentPlanSelectStep, {
    ...e
  }),
  options: {
    renderHeader: !0,
    useBreadcrumbLabel: e => {
      let t = v(e);
      return t ? null : b.default.Messages.BILLING_STEP_SELECT_PLAN
    }
  }
}, {
  key: m.Step.ADD_PAYMENT_STEPS,
  renderStep: e => (0, s.jsx)(s.Fragment, {
    children: (0, s.jsx)(j, {
      ...e
    })
  }),
  options: {
    renderHeader: !0,
    useBreadcrumbLabel: e => {
      let t = v(e);
      return t ? null : b.default.Messages.BILLING_STEP_PAYMENT
    }
  }
}, {
  key: m.Step.AWAITING_BROWSER_CHECKOUT,
  renderStep: e => (0, s.jsx)(T.default, {
    ...e
  })
}, {
  key: m.Step.AWAITING_PURCHASE_TOKEN_AUTH,
  renderStep: () => (0, s.jsx)(N.default, {})
}, {
  key: m.Step.AWAITING_AUTHENTICATION,
  renderStep: () => (0, s.jsx)(P.default, {})
}, {
  key: m.Step.REVIEW,
  renderStep: e => (0, s.jsx)(M.PaymentModalReviewStep, {
    ...e
  }),
  options: {
    renderHeader: !0,
    useBreadcrumbLabel: e => {
      let t = v(e);
      return t ? b.default.Messages.BILLING_STEP_PLAN_AND_PAYMENT : b.default.Messages.BILLING_STEP_REVIEW
    }
  }
}, {
  key: m.Step.CONFIRM,
  renderStep: e => (0, s.jsx)(R.PremiumPaymentConfirmStep, {
    ...e
  })
}];

function D(e) {
  let t = (0, l.useStateFromStores)([_.default], () => _.default.getPremiumTypeSubscription()),
    {
      AnalyticsLocationProvider: n
    } = (0, o.default)(e.analyticsLocations, u.default.PREMIUM_PAYMENT_MODAL),
    {
      subscriptionTier: a,
      isGift: r,
      giftRecipient: i,
      giftMessage: d,
      loadId: c,
      defaultPlanId: f,
      referralCode: m
    } = e;
  if (null != a && !Object.values(y.PremiumSubscriptionSKUs).includes(a)) throw Error("subscriptionTier must be a premium subscription");
  return (0, s.jsx)(n, {
    children: (0, s.jsx)(I.PaymentContextProvider, {
      loadId: c,
      activeSubscription: null != e.subscription ? e.subscription : t,
      stepConfigs: G,
      skuIDs: [...y.ACTIVE_PREMIUM_SKUS],
      isGift: r,
      defaultPlanId: f,
      referralCode: m,
      children: (0, s.jsx)(E.GiftContextProvider, {
        isGift: r,
        giftRecipient: null == i ? void 0 : i,
        giftMessage: d,
        children: (0, s.jsx)(k, {
          ...e
        })
      })
    })
  })
}