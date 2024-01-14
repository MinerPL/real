"use strict";
n.r(t), n.d(t, {
  PremiumPaymentPlanSelectStep: function() {
    return R
  }
}), n("222007");
var i = n("37983"),
  r = n("884691"),
  s = n("627445"),
  l = n.n(s),
  a = n("65597"),
  u = n("77078"),
  o = n("856413"),
  d = n("916187"),
  c = n("809071"),
  f = n("669073"),
  m = n("154889"),
  p = n("917247"),
  S = n("358821"),
  E = n("570727"),
  P = n("697218"),
  _ = n("10514"),
  I = n("145131"),
  C = n("659632"),
  h = n("701909"),
  x = n("719923"),
  T = n("635357"),
  g = n("642906"),
  y = n("85336"),
  A = n("153727"),
  L = n("628738"),
  N = n("650484"),
  M = n("310093"),
  v = n("367767"),
  b = n("49111"),
  j = n("646718"),
  k = n("782340"),
  O = n("424650");

function R(e) {
  var t, n, s;
  let {
    handleStepChange: R,
    initialPlanId: U,
    subscriptionTier: F,
    trialId: w,
    referralTrialOfferId: B,
    handleClose: G
  } = e, {
    activeSubscription: D,
    hasFetchedSubscriptions: H,
    paymentSourceId: W,
    paymentSources: K,
    selectedSkuId: Y,
    selectedPlan: V,
    step: Z,
    defaultPlanId: z,
    priceOptions: J,
    isPremium: q
  } = (0, g.usePaymentContext)(), {
    isGift: X,
    giftRecipient: Q,
    giftMessage: $
  } = (0, T.useGiftContext)(), ee = null != W ? K[W] : null, {
    newPlans: et
  } = d.default.useExperiment({
    location: "d17fd6_3"
  }, {
    autoTrackExposure: !1
  }), en = (0, a.default)([P.default], () => P.default.getCurrentUser()), ei = !X && null != Y && Y === j.PremiumSubscriptionSKUs.TIER_2 && null != en && en.hasHadPremium() && H && null == D && (0, d.isPaymentSourceEligibleForMultiMonthPlans)(ee), er = (0, p.usePremiumTrialOffer)(B), es = !X && null != er && null != Y && (0, j.SubscriptionTrials)[er.trial_id].skus.includes(Y), el = (0, m.usePremiumDiscountOffer)(), ea = null == el ? void 0 : null === (t = el.discount) || void 0 === t ? void 0 : t.plan_ids.some(e => j.SubscriptionPlanInfo[e].skuId === Y), eu = !X && null != el && null != Y && ea, eo = null !== (n = es || eu) && void 0 !== n && n, {
    defaultToMonthlyPlan: ed
  } = f.TrialRedemptionDefaultPlanExperiment.useExperiment({
    location: "d17fd6_4"
  }, {
    autoTrackExposure: !1
  }), ec = r.useMemo(() => (0, x.getPremiumPlanOptions)({
    skuId: Y,
    isPremium: q,
    multiMonthPlans: ei ? et : [],
    currentSubscription: D,
    isGift: X,
    isEligibleForTrial: es,
    defaultPlanId: z,
    defaultToMonthlyPlan: ed
  }), [Y, q, et, D, ei, X, es, z, ed]), ef = eu && ec.includes(j.SubscriptionPlans.PREMIUM_MONTH_TIER_2) ? j.SubscriptionPlans.PREMIUM_MONTH_TIER_2 : ec[0], em = (0, a.default)([_.default], () => _.default.get(ef)), ep = [{
    planId: null == em ? void 0 : em.id,
    quantity: 1
  }], [eS, eE] = r.useState(eo), [eP, e_] = (0, c.useSubscriptionInvoicePreview)({
    items: ep,
    renewal: !1,
    preventFetch: !eo,
    applyEntitlements: !0,
    trialId: w,
    paymentSourceId: J.paymentSourceId,
    currency: J.currency
  });
  r.useEffect(() => {
    eo && eE((null == eP ? void 0 : eP.subscriptionPeriodEnd) == null)
  }, [eP, eo]), (0, o.default)("Payment Modal Plan Select Step", eS, 5, {
    proratedInvoicePreview: eP,
    proratedInvoiceError: e_,
    isEligibleForOffer: eo
  }, {
    tags: {
      app_context: "billing"
    }
  });
  let eI = null !== (s = null == e_ ? void 0 : e_.message) && void 0 !== s ? s : k.default.Messages.ERROR_GENERIC_TITLE,
    eC = eo && null == e_,
    eh = eo && null != e_;
  return eC && (null == eP ? void 0 : eP.subscriptionPeriodEnd) == null ? (0, i.jsx)(L.default, {}) : (l(null != Z, "Step should be set"), l(ec.length > 0, "Premium plan options should be set"), (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(M.GiftNote, {
      giftMessage: $
    }), !(X && (0, C.shouldShowCustomGiftExperience)(Q, !0, "PremiumPaymentPlanSelectStep")) && (0, i.jsx)(A.default, {
      isEligibleForTrial: es
    }), (0, i.jsxs)(N.PaymentPortalBody, {
      children: [eC && (0, i.jsx)("hr", {
        className: O.planSelectSeparatorUpper
      }), (0, i.jsx)(S.default, {
        isGift: X,
        plan: V
      }), (0, i.jsx)(v.default, {}), eh ? (0, i.jsx)(u.FormErrorBlock, {
        children: eI
      }) : (0, i.jsx)(E.PremiumSwitchPlanSelectBody, {
        planOptions: ec,
        eligibleForMultiMonthPlans: ei,
        referralTrialOfferId: B,
        selectedPlanId: null == V ? void 0 : V.id,
        subscriptionPeriodEnd: null == eP ? void 0 : eP.subscriptionPeriodEnd,
        discountInvoiceItems: eu ? null == eP ? void 0 : eP.invoiceItems : void 0,
        handleClose: G
      }), eC && (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)("hr", {
          className: O.planSelectSeparatorLower
        }), (0, i.jsx)(u.Text, {
          variant: "text-xs/normal",
          children: k.default.Messages.BILLING_TRIAL_CANCEL_ANYTIME_LINK.format({
            link: h.default.getArticleURL(b.HelpdeskArticles.PREMIUM_DETAILS_CANCEL_SUB)
          })
        })]
      })]
    }), (0, i.jsx)(N.PaymentPortalFooter, {
      children: (0, i.jsx)(u.ModalFooter, {
        justify: I.default.Justify.BETWEEN,
        align: I.default.Align.CENTER,
        children: (0, i.jsx)(E.PremiumSwitchPlanSelectFooter, {
          onStepChange: R,
          onBackClick: () => R(y.Step.SKU_SELECT),
          showBackButton: null == U && null == F,
          planOptions: ec,
          shouldRenderUpdatedPaymentModal: eC,
          isTrial: es
        })
      })
    })]
  }))
}