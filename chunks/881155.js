"use strict";
s.r(t), s.d(t, {
  default: function() {
    return f
  }
});
var a = s("37983");
s("884691");
var n = s("819855"),
  l = s("77078"),
  i = s("841098"),
  r = s("719923"),
  u = s("154889"),
  o = s("917247"),
  d = s("635956"),
  c = s("646718"),
  _ = s("782340"),
  E = s("204859");
let I = e => {
    let {
      showTrialCTA: t,
      subscriptionTier: s,
      shouldShowUpsells: a,
      trialDurationCopy: n,
      isPersistentCTA: l,
      subscriptionTrial: i
    } = e;
    if (t && (s === c.PremiumSubscriptionSKUs.TIER_2 || l)) return (0, r.formatTrialCtaIntervalDuration)({
      intervalType: null == i ? void 0 : i.interval,
      intervalCount: null == i ? void 0 : i.interval_count
    });
    if (t) return _.default.Messages.GET_FREE_TRIAL.format({
      freeTrialText: n
    });
    if (a && s === c.PremiumSubscriptionSKUs.TIER_2) return _.default.Messages.BOGO_CHANGE_LOG_REDEEM
  },
  T = (e, t, s, a) => t || s ? _.default.Messages.PREMIUM_DISCOUNT_CTA_WITHOUT_PERCENT : e === c.PremiumSubscriptionSKUs.TIER_2 ? _.default.Messages.PREMIUM_DISCOUNT_CTA.format({
    percent: a
  }) : void 0;
var f = e => {
  var t;
  let {
    forceInverted: s,
    subscriptionTier: c,
    isEligibleForBogoPromotion: f = !1,
    isPersistentCTA: S = !1,
    useShorterCTA: R = !1,
    ...m
  } = e, p = (0, i.default)(), N = (0, n.isThemeDark)(p) || s, A = null === (t = (0, o.usePremiumTrialOffer)()) || void 0 === t ? void 0 : t.subscription_trial, g = (0, r.formatTrialOfferIntervalDuration)({
    intervalType: null == A ? void 0 : A.interval,
    intervalCount: null == A ? void 0 : A.interval_count
  }), P = (0, u.usePremiumDiscountOffer)(), C = null != A && c === A.sku_id, O = f ? _.default.Messages.BOGO_CLAIM_OFFER : null != P ? T(c, R, S, P.discount.amount) : I({
    showTrialCTA: C,
    subscriptionTier: c,
    shouldShowUpsells: !1,
    trialDurationCopy: g,
    isPersistentCTA: S,
    subscriptionTrial: A
  });
  return (0, a.jsx)(d.default, {
    color: l.ButtonColors.BRAND,
    look: N ? l.ButtonLooks.INVERTED : void 0,
    buttonShineClassName: "buttonShineClassName" in m ? m.buttonShineClassName : N ? E.brandShine : void 0,
    trialId: null == A ? void 0 : A.id,
    buttonText: O,
    buttonTextClassName: C ? E.freeTrialText : void 0,
    onlyShineOnHover: !0,
    subscriptionTier: c,
    ...m
  })
}