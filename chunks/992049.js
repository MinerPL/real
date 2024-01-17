"use strict";
n.r(t), n.d(t, {
  PremiumPaymentConfirmStep: function() {
    return S
  }
});
var s = n("37983"),
  a = n("884691"),
  l = n("627445"),
  r = n.n(l),
  i = n("837148"),
  u = n("491523"),
  o = n("775155"),
  d = n("659632"),
  c = n("380186"),
  _ = n("635357"),
  f = n("642906"),
  E = n("236838"),
  I = n("650484"),
  m = n("367767");

function S(e) {
  var t, n;
  let l, {
      handleClose: S,
      planGroup: p,
      onSubscriptionConfirmation: P,
      renderPurchaseConfirmation: T,
      postSuccessGuild: N,
      followupSKUInfo: M
    } = e,
    {
      activeSubscription: C,
      paymentSources: R,
      paymentSourceId: L,
      selectedPlan: A,
      selectedSkuId: g,
      step: x,
      updatedSubscription: O,
      startingPremiumSubscriptionPlanIdRef: h
    } = (0, f.usePaymentContext)(),
    {
      isGift: y,
      giftRecipient: b,
      giftCode: U,
      hasSentMessage: k,
      isSendingMessage: v,
      sendGiftMessage: j
    } = (0, _.useGiftContext)();
  r(null != A, "Expected plan to selected"), r(null != g, "Expected selectedSkuId"), r(null != x, "Step should be set");
  let {
    successUpsellEnabled: G
  } = (0, i.default)({
    location: "PremiumPaymentConfirmStep"
  }), D = a.useCallback(() => {
    S(), null == P || P()
  }, [S, P]);
  return a.useEffect(() => {
    if (!y || null == b || null == U || k || v || (0, d.shouldShowCustomGiftExperience)(b, !0, "PremiumPaymentConfirmStep")) return;
    let e = u.AutomatedGiftCodeMessageExperiment.getCurrentConfig({
      location: "36b986_1"
    }).enabled;
    e && j({
      onSubscriptionConfirmation: P
    })
  }, [j, y, b, U, k, v, P]), l = null != T ? T(A, D, O) : y ? (0, s.jsx)(o.PremiumSubscriptionGiftPurchaseConfirmation, {
    planId: A.id,
    onClose: D
  }) : h.current === A.id ? (0, s.jsx)(o.default, {
    planId: A.id,
    postSuccessGuild: N,
    onClose: D,
    paymentSourceType: null === (t = R[null != L ? L : ""]) || void 0 === t ? void 0 : t.type
  }) : (0, s.jsx)(o.default, {
    followupSKUInfo: M,
    startingPremiumSubscriptionPlanId: h.current,
    planId: A.id,
    onClose: D,
    isDowngrade: null != C && (0, c.subscriptionCanDowngrade)(C, A.id, p),
    paymentSourceType: null === (n = R[null != L ? L : ""]) || void 0 === n ? void 0 : n.type
  }), (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsxs)(I.PaymentPortalBody, {
      children: [(0, s.jsx)(m.default, {}), l]
    }), G && y && (0, s.jsx)(E.default, {
      onClose: D
    })]
  })
}