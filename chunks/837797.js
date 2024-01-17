"use strict";
s.r(t), s.d(t, {
  useResponseOnUserState: function() {
    return o
  }
});
var a = s("446674"),
  n = s("521012"),
  l = s("719923"),
  i = s("154889"),
  r = s("917247"),
  u = s("646718");

function o(e) {
  let {
    defaultResponse: t,
    onDiscountOffer: s,
    onNonSubscriber: o,
    onTier0TrialOffer: d,
    onTier2TrialOffer: c,
    onTier0TrialPeriod: _,
    onTier2TrialPeriod: E,
    onNonTier2Subscriber: I,
    onTier2Subscriber: T,
    onCustomCriteria: f
  } = e, S = (0, r.usePremiumTrialOffer)(), R = (0, i.usePremiumDiscountOffer)(), m = (0, a.useStateFromStores)([n.default], () => n.default.getPremiumTypeSubscription()), p = l.default.getPremiumTypeFromSubscription(m);
  if (null != f) {
    let e = f();
    if (null != e) return e
  }
  return null != S && (0, u.SubscriptionTrials)[S.trial_id].skus.includes(u.PremiumSubscriptionSKUs.TIER_0) ? null != d ? d : t : null != S && (0, u.SubscriptionTrials)[S.trial_id].skus.includes(u.PremiumSubscriptionSKUs.TIER_2) ? null != c ? c : t : null != m && null != m.trialId && p === u.PremiumTypes.TIER_0 ? null != _ ? _ : t : null != m && null != m.trialId && p === u.PremiumTypes.TIER_2 ? null != E ? E : t : null != R ? null != s ? s : t : null == p ? null != o ? o : t : p === u.PremiumTypes.TIER_0 || p === u.PremiumTypes.TIER_1 ? null != I ? I : t : p === u.PremiumTypes.TIER_2 ? null != T ? T : t : t
}