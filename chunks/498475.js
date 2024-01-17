"use strict";
n.r(t), n.d(t, {
  PremiumPaymentWhatYouLoseStep: function() {
    return S
  }
});
var s = n("37983");
n("884691");
var a = n("627445"),
  l = n.n(a),
  r = n("819855"),
  i = n("77078"),
  u = n("841098"),
  o = n("360262"),
  d = n("719923"),
  c = n("635357"),
  _ = n("642906"),
  f = n("85336"),
  E = n("176108"),
  I = n("782340"),
  m = n("943490");

function S(e) {
  let {
    handleStepChange: t,
    handleClose: n
  } = e, a = (0, u.default)(), {
    activeSubscription: S,
    selectedSkuId: p,
    setSelectedPlanId: P,
    startedPaymentFlowWithPaymentSourcesRef: T
  } = (0, _.usePaymentContext)(), {
    isGift: N
  } = (0, c.useGiftContext)(), M = null != S ? (0, d.getPremiumPlanItem)(S) : null, C = null != M ? (0, d.getDisplayPremiumType)(M.planId) : null, R = null != M ? (0, d.getPremiumType)(M.planId) : null, L = (0, E.inOneStepSubscriptionCheckout)({
    isTrial: !1,
    isGift: N,
    selectedSkuId: p,
    startedPaymentFlowWithPaymentSources: T.current
  });
  return l(null != R, "Expected premium type"), (0, s.jsx)(o.default, {
    premiumType: R,
    titleText: I.default.Messages.PREMIUM_DOWNGRADE_WHAT_YOU_LOSE_TITLE,
    subtitleText: I.default.Messages.PREMIUM_DOWNGRADE_WHAT_YOU_LOSE_SUBTITLE.format({
      subscriptionName: C
    }),
    footer: (0, s.jsxs)("div", {
      className: m.whatYouLoseButtonContainer,
      children: [(0, s.jsx)(i.Button, {
        onClick: () => {
          if (L) {
            let e = (0, E.getDefaultPlanOneStepCheckout)(p, S);
            P(e), t(f.Step.REVIEW)
          } else t(f.Step.PLAN_SELECT)
        },
        children: I.default.Messages.CONTINUE
      }), (0, s.jsx)(i.Button, {
        look: i.Button.Looks.LINK,
        color: (0, r.isThemeDark)(a) ? i.Button.Colors.WHITE : i.Button.Colors.PRIMARY,
        onClick: n,
        children: I.default.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BACK
      })]
    }),
    onClose: n,
    isDowngrade: !0
  })
}