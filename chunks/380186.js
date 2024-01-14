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
var a = n("627445"),
  s = n.n(a);
n("446674");
var l = n("775433"),
  i = n("10514"),
  r = n("49111"),
  o = n("646718");

function u(e) {
  return e.items.map(e => {
    let t = i.default.get(e.planId);
    return s(null != t, "Unable to fetch plan"), t
  }).map(e => e.skuId)
}

function d(e, t, n) {
  let a = e.getCurrentSubscriptionPlanIdForGroup(n);
  return e.type === r.SubscriptionTypes.PREMIUM && null == a || (s(null != a, "Current subscription has no plan in group"), s(!(a === o.SubscriptionPlans.PREMIUM_YEAR_TIER_1 && t === o.SubscriptionPlans.PREMIUM_MONTH_TIER_2), "Unexpected plan switch"), n.indexOf(a) < n.indexOf(t))
}

function c(e, t, n) {
  return !d(e, t, n)
}

function f(e, t) {
  let n = i.default.get(e);
  if (null == n) {
    let n = o.SubscriptionPlanInfo[e];
    s(null != n, "Missing hardcoded subscriptionPlan: ".concat(e));
    let a = n.skuId;
    !i.default.isFetchingForSKU(a) && (0, l.fetchSubscriptionPlansForSKU)(a, t)
  }
  return n
}