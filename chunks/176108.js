"use strict";
n.r(t), n.d(t, {
  inOneStepSubscriptionCheckout: function() {
    return a
  },
  planSwitchLoadingShowSpinner: function() {
    return i
  },
  getDefaultPlanOneStepCheckout: function() {
    return s
  }
});
var l = n("719923"),
  u = n("646718");

function a(e) {
  let {
    isTrial: t,
    isGift: n,
    selectedSkuId: l,
    startedPaymentFlowWithPaymentSources: a
  } = e;
  return !t && !n && null != l && u.ACTIVE_PREMIUM_SKUS.includes(l) && a
}

function i(e, t, n) {
  let l = !1;
  if (e && null != t) {
    let e = t.invoiceItems.find(e => e.subscriptionPlanId === n.id);
    null == e && (l = !0)
  }
  return l
}

function s(e, t, n) {
  let a = null != t ? (0, l.getPremiumPlanItem)(t) : null,
    i = u.PREMIUM_SKU_TO_YEARLY_PLAN[e],
    s = null != n ? n : i;
  return null != a ? s === a.planId && s === u.PREMIUM_SKU_TO_MONTHLY_PLAN[e] ? s = u.PREMIUM_SKU_TO_YEARLY_PLAN[e] : s === a.planId && s === u.PREMIUM_SKU_TO_YEARLY_PLAN[e] ? s = u.PREMIUM_SKU_TO_MONTHLY_PLAN[e] : (a.planId === u.SubscriptionPlans.PREMIUM_YEAR_TIER_0 || a.planId === u.SubscriptionPlans.PREMIUM_YEAR_TIER_1) && s === u.SubscriptionPlans.PREMIUM_MONTH_TIER_2 && (s = u.SubscriptionPlans.PREMIUM_YEAR_TIER_2) : s === u.SubscriptionPlans.PREMIUM_YEAR_TIER_1 && (s = u.SubscriptionPlans.PREMIUM_MONTH_TIER_1), s
}