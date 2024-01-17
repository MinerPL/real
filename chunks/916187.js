"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  },
  isPaymentSourceEligibleForMultiMonthPlans: function() {
    return u
  }
}), n("222007");
var s = n("976979"),
  r = n("862205"),
  a = n("646718"),
  l = (0, r.createExperiment)({
    kind: "user",
    id: "2022-02_multi_month_plans",
    label: "Multi Month Plans",
    defaultConfig: {
      newPlans: []
    },
    treatments: [{
      id: 1,
      label: "3 and 6 Month Plans",
      config: {
        newPlans: [a.SubscriptionPlans.PREMIUM_6_MONTH_TIER_2, a.SubscriptionPlans.PREMIUM_3_MONTH_TIER_2]
      }
    }, {
      id: 2,
      label: "3 Month Plan Only",
      config: {
        newPlans: [a.SubscriptionPlans.PREMIUM_3_MONTH_TIER_2]
      }
    }]
  });
let i = new Set([s.CountryCodes.US, s.CountryCodes.CA]);

function u(e) {
  return null == e || i.has(e.country)
}