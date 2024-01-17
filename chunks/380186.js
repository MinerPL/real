"use strict";
n.r(t), n.d(t, {
  getSubscriptionSKUs: function() {
    return u
  },
  subscriptionCanSwitchImmediately: function() {
    return d
  },
  subscriptionCanDowngrade: function() {
    return c
  },
  getOrFetchSubscriptionPlan: function() {
    return f
  }
}), n("222007"), n("884691");
var s = n("627445"),
  l = n.n(s);
n("446674");
var a = n("775433"),
  i = n("10514"),
  r = n("49111"),
  o = n("646718");

function u(e) {
  return e.items.map(e => {
    let t = i.default.get(e.planId);
    return l(null != t, "Unable to fetch plan"), t
  }).map(e => e.skuId)
}

function d(e, t, n) {
  let s = e.getCurrentSubscriptionPlanIdForGroup(n);
  return e.type === r.SubscriptionTypes.PREMIUM && null == s || (l(null != s, "Current subscription has no plan in group"), l(!(s === o.SubscriptionPlans.PREMIUM_YEAR_TIER_1 && t === o.SubscriptionPlans.PREMIUM_MONTH_TIER_2), "Unexpected plan switch"), n.indexOf(s) < n.indexOf(t))
}

function c(e, t, n) {
  return !d(e, t, n)
}

function f(e, t) {
  let n = i.default.get(e);
  if (null == n) {
    let n = o.SubscriptionPlanInfo[e];
    l(null != n, "Missing hardcoded subscriptionPlan: ".concat(e));
    let s = n.skuId;
    !i.default.isFetchingForSKU(s) && (0, a.fetchSubscriptionPlansForSKU)(s, t)
  }
  return n
}