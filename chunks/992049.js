"use strict";
n.r(t), n.d(t, {
  PremiumPaymentConfirmStep: function() {
    return P
  }
});
var i = n("37983"),
  r = n("884691"),
  s = n("627445"),
  l = n.n(s),
  a = n("837148"),
  u = n("491523"),
  o = n("775155"),
  d = n("659632"),
  c = n("380186"),
  f = n("635357"),
  m = n("642906"),
  p = n("236838"),
  S = n("650484"),
  E = n("367767");

function P(e) {
  var t, n;
  let s, {
      handleClose: P,
      planGroup: _,
      onSubscriptionConfirmation: I,
      renderPurchaseConfirmation: C,
      postSuccessGuild: h,
      followupSKUInfo: x
    } = e,
    {
      activeSubscription: T,
      paymentSources: g,
      paymentSourceId: y,
      selectedPlan: A,
      selectedSkuId: L,
      step: N,
      updatedSubscription: M,
      startingPremiumSubscriptionPlanIdRef: v
    } = (0, m.usePaymentContext)(),
    {
      isGift: b,
      giftRecipient: j,
      giftCode: k,
      hasSentMessage: O,
      isSendingMessage: R,
      sendGiftMessage: U
    } = (0, f.useGiftContext)();
  l(null != A, "Expected plan to selected"), l(null != L, "Expected selectedSkuId"), l(null != N, "Step should be set");
  let {
    successUpsellEnabled: F
  } = (0, a.default)({
    location: "PremiumPaymentConfirmStep"
  }), w = r.useCallback(() => {
    P(), null == I || I()
  }, [P, I]);
  return r.useEffect(() => {
    if (!b || null == j || null == k || O || R || (0, d.shouldShowCustomGiftExperience)(j, !0, "PremiumPaymentConfirmStep")) return;
    let e = u.AutomatedGiftCodeMessageExperiment.getCurrentConfig({
      location: "36b986_1"
    }).enabled;
    e && U({
      onSubscriptionConfirmation: I
    })
  }, [U, b, j, k, O, R, I]), s = null != C ? C(A, w, M) : b ? (0, i.jsx)(o.PremiumSubscriptionGiftPurchaseConfirmation, {
    planId: A.id,
    onClose: w
  }) : v.current === A.id ? (0, i.jsx)(o.default, {
    planId: A.id,
    postSuccessGuild: h,
    onClose: w,
    paymentSourceType: null === (t = g[null != y ? y : ""]) || void 0 === t ? void 0 : t.type
  }) : (0, i.jsx)(o.default, {
    followupSKUInfo: x,
    startingPremiumSubscriptionPlanId: v.current,
    planId: A.id,
    onClose: w,
    isDowngrade: null != T && (0, c.subscriptionCanDowngrade)(T, A.id, _),
    paymentSourceType: null === (n = g[null != y ? y : ""]) || void 0 === n ? void 0 : n.type
  }), (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)(S.PaymentPortalBody, {
      children: [(0, i.jsx)(E.default, {}), s]
    }), F && b && (0, i.jsx)(p.default, {
      onClose: w
    })]
  })
}