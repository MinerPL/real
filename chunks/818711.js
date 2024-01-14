"use strict";
n.r(t), n.d(t, {
  calculateAdditionalPlansWithPremiumGuildAdjustment: function() {
    return o
  }
}), n("70102"), n("222007");
var a = n("627445"),
  l = n.n(a),
  i = n("10514"),
  s = n("719923"),
  r = n("646718"),
  u = n("49111");

function o(e, t) {
  let n = i.default.get(e.planId);
  l(null != n, "missing premium subscription plan");
  let a = i.default.getForSkuAndInterval(r.PremiumSubscriptionSKUs.GUILD, n.interval, n.intervalCount);
  l(null != a, "missing premium guild plan");
  let o = null != e.renewalMutations ? e.renewalMutations.additionalPlans : e.additionalPlans,
    c = e.status === u.SubscriptionStatusTypes.CANCELED ? 0 : (0, s.getNumPremiumGuildSubscriptions)(o),
    d = c + t,
    I = o.filter(e => e.planId !== a.id);
  if (d < 0) throw Error("Invalid adjustment");
  return 0 === d ? I : [...I, {
    planId: a.id,
    quantity: d
  }]
}