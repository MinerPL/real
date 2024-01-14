"use strict";
n.r(t), n.d(t, {
  PaymentModalHeader: function() {
    return y
  }
});
var l = n("37983"),
  u = n("884691"),
  a = n("627445"),
  i = n.n(a),
  s = n("77078"),
  r = n("333955"),
  o = n("210721"),
  c = n("53253"),
  d = n("154889"),
  f = n("917247"),
  _ = n("65324"),
  E = n("510928"),
  p = n("659632"),
  m = n("635357"),
  S = n("642906"),
  P = n("85336"),
  T = n("49111"),
  M = n("646718"),
  A = n("843455"),
  I = n("111735");

function y(e) {
  var t;
  let {
    renderHeader: n,
    referralTrialOfferId: a,
    handleClose: y
  } = e, {
    selectedSkuId: N,
    step: h,
    selectedPlan: R,
    purchaseState: C,
    purchaseType: O,
    productLine: g
  } = (0, S.usePaymentContext)(), {
    isGift: L,
    selectedGiftStyle: v,
    giftRecipient: k
  } = (0, m.useGiftContext)(), x = L && (0, p.shouldShowCustomGiftExperience)(k, !0, "PaymentModalHeader") && h === P.Step.CONFIRM && null != v && g !== T.SKUProductLines.COLLECTIBLES, U = null != n && null != h, b = h !== P.Step.SKU_SELECT && null != N, D = (0, f.usePremiumTrialOffer)(a), Y = !L && null != D && null != N && (0, M.SubscriptionTrials)[D.trial_id].skus.includes(N), G = (0, d.usePremiumDiscountOffer)(), H = null == G ? void 0 : null === (t = G.discount) || void 0 === t ? void 0 : t.plan_ids.some(e => M.SubscriptionPlanInfo[e].skuId === N), j = !L && null != G && null != N && H, {
    enabled: B
  } = c.default.useExperiment({
    location: "PaymentModalHeader"
  }, {
    autoTrackExposure: !1
  }), K = (0, c.useIsSeasonalGiftingActive)(), w = B && K, F = u.useMemo(() => {
    if (null == h) return;
    let e = null;
    if (x) e = (0, l.jsxs)("div", {
      className: I.container,
      children: [(0, l.jsx)(_.default, {
        defaultAnimationState: o.AnimationState.LOOP,
        giftStyle: v,
        className: I.seasonalGiftBoxHeaderIcon
      }), (0, l.jsx)(s.ModalCloseButton, {
        onClick: y,
        className: I.closeButton
      })]
    });
    else if (U) e = n(null != R ? R : null, y, h);
    else if (O === A.PurchaseTypes.ONE_TIME) e = (0, l.jsx)(r.PurchaseHeader, {
      step: h,
      onClose: y
    });
    else if (b) i(N in M.PremiumSubscriptionSKUToPremiumType, "invalid sku id: ".concat(N)), e = (0, l.jsx)(E.default, {
      currentStep: null != h ? h : void 0,
      purchaseState: C,
      premiumType: M.PremiumSubscriptionSKUToPremiumType[N],
      onClose: y,
      showTrialBadge: Y,
      showDiscountBadge: j,
      isGift: L,
      giftRecipient: k,
      useWinterTheme: w
    });
    return e
  }, [v, y, C, n, R, N, h, Y, j, x, b, U, O, L, k, w]);
  return F
}