"use strict";
n.r(t), n.d(t, {
  PremiumPaymentPlanSelectStep: function() {
    return v
  }
}), n("222007");
var s = n("37983"),
  a = n("884691"),
  l = n("627445"),
  r = n.n(l),
  i = n("65597"),
  u = n("77078"),
  o = n("856413"),
  d = n("916187"),
  c = n("809071"),
  _ = n("669073"),
  f = n("154889"),
  E = n("917247"),
  I = n("358821"),
  m = n("570727"),
  S = n("697218"),
  p = n("10514"),
  P = n("145131"),
  T = n("659632"),
  N = n("701909"),
  M = n("719923"),
  C = n("635357"),
  R = n("642906"),
  L = n("85336"),
  A = n("153727"),
  g = n("628738"),
  x = n("650484"),
  O = n("310093"),
  h = n("367767"),
  y = n("49111"),
  b = n("646718"),
  U = n("782340"),
  k = n("424650");

function v(e) {
  var t, n, l;
  let {
    handleStepChange: v,
    initialPlanId: j,
    subscriptionTier: G,
    trialId: D,
    referralTrialOfferId: B,
    handleClose: F
  } = e, {
    activeSubscription: H,
    hasFetchedSubscriptions: W,
    paymentSourceId: Y,
    paymentSources: w,
    selectedSkuId: K,
    selectedPlan: V,
    step: J,
    defaultPlanId: Z,
    priceOptions: q,
    isPremium: X
  } = (0, R.usePaymentContext)(), {
    isGift: z,
    giftRecipient: Q,
    giftMessage: $
  } = (0, C.useGiftContext)(), ee = null != Y ? w[Y] : null, {
    newPlans: et
  } = d.default.useExperiment({
    location: "d17fd6_3"
  }, {
    autoTrackExposure: !1
  }), en = (0, i.default)([S.default], () => S.default.getCurrentUser()), es = !z && null != K && K === b.PremiumSubscriptionSKUs.TIER_2 && null != en && en.hasHadPremium() && W && null == H && (0, d.isPaymentSourceEligibleForMultiMonthPlans)(ee), ea = (0, E.usePremiumTrialOffer)(B), el = !z && null != ea && null != K && (0, b.SubscriptionTrials)[ea.trial_id].skus.includes(K), er = (0, f.usePremiumDiscountOffer)(), ei = null == er ? void 0 : null === (t = er.discount) || void 0 === t ? void 0 : t.plan_ids.some(e => b.SubscriptionPlanInfo[e].skuId === K), eu = !z && null != er && null != K && ei, eo = null !== (n = el || eu) && void 0 !== n && n, {
    defaultToMonthlyPlan: ed
  } = _.TrialRedemptionDefaultPlanExperiment.useExperiment({
    location: "d17fd6_4"
  }, {
    autoTrackExposure: !1
  }), ec = a.useMemo(() => (0, M.getPremiumPlanOptions)({
    skuId: K,
    isPremium: X,
    multiMonthPlans: es ? et : [],
    currentSubscription: H,
    isGift: z,
    isEligibleForTrial: el,
    defaultPlanId: Z,
    defaultToMonthlyPlan: ed
  }), [K, X, et, H, es, z, el, Z, ed]), e_ = eu && ec.includes(b.SubscriptionPlans.PREMIUM_MONTH_TIER_2) ? b.SubscriptionPlans.PREMIUM_MONTH_TIER_2 : ec[0], ef = (0, i.default)([p.default], () => p.default.get(e_)), eE = [{
    planId: null == ef ? void 0 : ef.id,
    quantity: 1
  }], [eI, em] = a.useState(eo), [eS, ep] = (0, c.useSubscriptionInvoicePreview)({
    items: eE,
    renewal: !1,
    preventFetch: !eo,
    applyEntitlements: !0,
    trialId: D,
    paymentSourceId: q.paymentSourceId,
    currency: q.currency
  });
  a.useEffect(() => {
    eo && em((null == eS ? void 0 : eS.subscriptionPeriodEnd) == null)
  }, [eS, eo]), (0, o.default)("Payment Modal Plan Select Step", eI, 5, {
    proratedInvoicePreview: eS,
    proratedInvoiceError: ep,
    isEligibleForOffer: eo
  }, {
    tags: {
      app_context: "billing"
    }
  });
  let eP = null !== (l = null == ep ? void 0 : ep.message) && void 0 !== l ? l : U.default.Messages.ERROR_GENERIC_TITLE,
    eT = eo && null == ep,
    eN = eo && null != ep;
  return eT && (null == eS ? void 0 : eS.subscriptionPeriodEnd) == null ? (0, s.jsx)(g.default, {}) : (r(null != J, "Step should be set"), r(ec.length > 0, "Premium plan options should be set"), (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(O.GiftNote, {
      giftMessage: $
    }), !(z && (0, T.shouldShowCustomGiftExperience)(Q, !0, "PremiumPaymentPlanSelectStep")) && (0, s.jsx)(A.default, {
      isEligibleForTrial: el
    }), (0, s.jsxs)(x.PaymentPortalBody, {
      children: [eT && (0, s.jsx)("hr", {
        className: k.planSelectSeparatorUpper
      }), (0, s.jsx)(I.default, {
        isGift: z,
        plan: V
      }), (0, s.jsx)(h.default, {}), eN ? (0, s.jsx)(u.FormErrorBlock, {
        children: eP
      }) : (0, s.jsx)(m.PremiumSwitchPlanSelectBody, {
        planOptions: ec,
        eligibleForMultiMonthPlans: es,
        referralTrialOfferId: B,
        selectedPlanId: null == V ? void 0 : V.id,
        subscriptionPeriodEnd: null == eS ? void 0 : eS.subscriptionPeriodEnd,
        discountInvoiceItems: eu ? null == eS ? void 0 : eS.invoiceItems : void 0,
        handleClose: F
      }), eT && (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)("hr", {
          className: k.planSelectSeparatorLower
        }), (0, s.jsx)(u.Text, {
          variant: "text-xs/normal",
          children: U.default.Messages.BILLING_TRIAL_CANCEL_ANYTIME_LINK.format({
            link: N.default.getArticleURL(y.HelpdeskArticles.PREMIUM_DETAILS_CANCEL_SUB)
          })
        })]
      })]
    }), (0, s.jsx)(x.PaymentPortalFooter, {
      children: (0, s.jsx)(u.ModalFooter, {
        justify: P.default.Justify.BETWEEN,
        align: P.default.Align.CENTER,
        children: (0, s.jsx)(m.PremiumSwitchPlanSelectFooter, {
          onStepChange: v,
          onBackClick: () => v(L.Step.SKU_SELECT),
          showBackButton: null == j && null == G,
          planOptions: ec,
          shouldRenderUpdatedPaymentModal: eT,
          isTrial: el
        })
      })
    })]
  }))
}