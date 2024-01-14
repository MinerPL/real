"use strict";
n.r(t), n.d(t, {
  useGetTrialPurchaseEligibility: function() {
    return s
  }
}), n("222007");
var a = n("884691"),
  l = n("719726");
let s = () => {
  let [e, t] = a.useState(!1), [n, s] = a.useState(null), i = a.useCallback(async (e, n, a) => {
    t(!0), s(null);
    try {
      let t = await (0, l.getGuildRoleSubscriptionTrialEligibility)(e, n, a);
      return t
    } catch (e) {
      s(e)
    } finally {
      t(!1)
    }
  }, []);
  return {
    loading: e,
    error: n,
    getTrialPurchaseEligibility: i
  }
}