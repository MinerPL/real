"use strict";
n.r(t), n.d(t, {
  getBasePlanIdForSubscriptionItems: function() {
    return r
  }
});
var i = n("646718");

function r(e, t, n) {
  let r = e.find(e => {
    let t = i.SubscriptionPlanInfo[e.planId];
    return null != t && null != t.premiumType
  });
  if (null == r) {
    if (e.length > 0) {
      let r = i.SubscriptionPlanInfo[e[0].planId];
      t = r.interval, n = r.intervalCount
    }
    return function(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        n = Object.keys(i.SubscriptionPlanInfo).find(n => {
          let r = i.SubscriptionPlanInfo[n];
          return null != r && r.skuId === i.PremiumSubscriptionSKUs.NONE && r.interval === e && r.intervalCount === t
        });
      return null != n ? n : i.SubscriptionPlans.NONE_MONTH
    }(t, n)
  }
  return r.planId
}