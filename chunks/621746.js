"use strict";
n.r(e), n.d(e, {
  default: function() {
    return l
  }
}), n("222007");
var u = n("884691"),
  i = n("446674"),
  r = n("10514");

function l() {
  let [t, e] = u.useState(void 0), [n, l] = u.useState(void 0), a = (0, i.useStateFromStores)([r.default], () => null != n ? r.default.get(n) : null);
  return {
    selectedSkuId: t,
    selectedPlan: a,
    setSelectedSkuId: e,
    setSelectedPlanId: l
  }
}