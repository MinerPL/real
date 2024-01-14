"use strict";
n.r(t), n.d(t, {
  default: function() {
    return M
  }
}), n("222007");
var s = n("37983"),
  r = n("884691"),
  l = n("627445"),
  i = n.n(l),
  a = n("446674"),
  u = n("77078"),
  o = n("850068"),
  c = n("685665"),
  d = n("921149"),
  f = n("177998"),
  m = n("661128"),
  _ = n("868869"),
  E = n("926223"),
  I = n("467292"),
  p = n("622839"),
  N = n("145131"),
  S = n("599110"),
  P = n("719923"),
  T = n("635357"),
  C = n("642906"),
  A = n("605886"),
  h = n("286350"),
  O = n("102492"),
  R = n("376641"),
  g = n("49111"),
  v = n("994770");

function M(e) {
  let {
    premiumSubscription: t,
    setPurchaseState: n,
    onBack: l,
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
    purchaseTokenAuthState: w,
    openInvoiceId: k,
    metadata: H,
    backButtonEligible: Y,
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
    contextMetadata: es
  } = (0, C.usePaymentContext)(), {
    isGift: er,
    selectedGiftStyle: el,
    customGiftMessage: ei,
    emojiConfetti: ea,
    soundEffect: eu,
    giftRecipient: eo
  } = (0, T.useGiftContext)(), ec = null == K ? void 0 : K.id, ed = (0, O.checkNoPaymentTrialEnabled)(U, V.paymentSourceId, ec), ef = (0, a.useStateFromStores)([E.default], () => E.default.popupCallbackCalled), {
    analyticsLocations: em
  } = (0, c.default)(), e_ = null != q ? Q[q] : null, [eE, eI] = r.useState(ed), [ep, eN] = r.useState(!1), {
    hasEntitlements: eS
  } = (0, m.useSubscriptionEntitlements)(ec, er), eP = (0, P.isPrepaidPaymentSource)(V.paymentSourceId), eT = eS || ed, eC = (0, d.useIsPrepaidPaymentPastDue)(), eA = null, eh = null;
  if (X === g.PurchaseTypes.ONE_TIME) {
    var eO;
    i(null != $, "SKU must be selected for one-time purchases"), i(null != (eA = null !== (eO = ee[$]) && void 0 !== eO ? eO : null), "SKU must exist and be fetched.");
    let e = et[$],
      t = null != q ? q : p.NO_PAYMENT_SOURCE;
    eh = null != e ? e[t] : null
  }
  let eR = async () => {
    await (0, A.purchaseProduct)({
      setPurchaseState: n,
      setHasAcceptedTerms: z,
      setIsSubmitting: eI,
      setPurchaseError: J,
      hasRedirectURL: ep,
      setHasRedirectURL: eN,
      isGift: er,
      giftStyle: el,
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
      openInvoiceId: k,
      premiumSubscription: t,
      onNext: M,
      metadata: H,
      sku: eA,
      skuPricePreview: eh,
      purchaseType: X,
      referralCode: en,
      loadId: es.loadId,
      giftRecipient: eo,
      customMessage: ei,
      emojiConfetti: ea,
      soundEffect: eu
    })
  };
  r.useEffect(() => {
    let e = async () => {
      if (!0 === ef) try {
        if (null == E.default.redirectedPaymentId) return;
        await (0, o.redirectedPaymentSucceeded)(E.default.redirectedPaymentId), n(h.PurchaseState.COMPLETED), M()
      } catch (e) {
        n(h.PurchaseState.FAIL), j(e), S.default.track(g.AnalyticEvents.PAYMENT_FLOW_FAILED, {
          ...G,
          payment_error_code: null == e ? void 0 : e.code,
          payment_source_id: q,
          payment_source_type: null == e_ ? void 0 : e_.type,
          duration_ms: Date.now() - D
        })
      } finally {
        eI(!1), (0, o.resetPaymentIntentId)()
      } else w === I.PurchaseTokenAuthState.SUCCESS && await eR()
    };
    e()
  }, [ef]), r.useEffect(() => {
    ed && !er && null == t && eR()
  }, [ed, er, t]);
  let eg = null != k || X === g.PurchaseTypes.ONE_TIME && !er;
  return ed ? null : (0, s.jsxs)(u.ModalFooter, {
    align: N.default.Align.CENTER,
    children: [(0, s.jsx)(_.default, {
      legalTermsNodeRef: x,
      invoiceError: L,
      planError: b,
      disablePurchase: W,
      flashLegalTerms: y,
      isSubmitting: eE,
      premiumSubscription: t,
      isGift: er,
      planGroup: B,
      isPrepaid: eP,
      isTrial: Z,
      makePurchase: eR,
      needsPaymentSource: null == e_ && !eT
    }), (0, s.jsx)(R.default, {}), Y && !eg ? (0, s.jsx)("div", {
      className: v.back,
      children: (0, s.jsx)(f.default, {
        onClick: l
      })
    }) : null]
  })
}