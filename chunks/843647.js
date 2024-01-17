"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
});
var i = n("446674"),
  r = n("697218"),
  l = n("10514"),
  s = n("719923"),
  a = n("716849"),
  o = n("676572"),
  u = n("942377"),
  d = n("917247"),
  c = n("646718");

function m(e) {
  let {
    autoTrackExposure: t,
    experiment: n,
    location: m
  } = e, f = (0, i.useStateFromStores)([r.default], () => r.default.getCurrentUser()), _ = (0, d.usePremiumTrialOffer)(), E = null != _, T = null != f && (0, s.isPremium)(f);
  (0, a.useMaybeFetchPremiumLikelihood)(n);
  let {
    enabled: I,
    useExpectedValue: P,
    useLikelihood: p
  } = n.useExperiment({
    location: null != m ? m : "1"
  }, {
    autoTrackExposure: !T && !E && t
  }), {
    premiumLikelihood: S,
    fetched: R
  } = (0, i.useStateFromStoresObject)([o.default], () => {
    let e = o.default.getState();
    return {
      fetched: e.fetched,
      premiumLikelihood: e.premiumLikelihood
    }
  }), C = (0, i.useStateFromStores)([l.default], () => l.default.isLoadedForSKUs([c.PremiumSubscriptionSKUs.TIER_0, c.PremiumSubscriptionSKUs.TIER_2])), O = !T && I && !E && (P ? !R || !C : !R), M = c.PremiumTypes.TIER_2;
  if (E) {
    let e = _.subscription_trial;
    (null == e ? void 0 : e.sku_id) === c.PremiumSubscriptionSKUs.TIER_0 ? M = c.PremiumTypes.TIER_0 : (null == e ? void 0 : e.sku_id) === c.PremiumSubscriptionSKUs.TIER_2 && (M = c.PremiumTypes.TIER_2)
  } else if (!T && !O && I) {
    if (P) {
      let {
        amount: e
      } = (0, s.getPrice)(c.SubscriptionPlans.PREMIUM_MONTH_TIER_0), {
        amount: t
      } = (0, s.getPrice)(c.SubscriptionPlans.PREMIUM_MONTH_TIER_2);
      M = (0, u.getHigherExpectedValue)(S, e, t)
    } else p && (M = (0, u.getHighestLikelihood)(S))
  }
  return {
    isLoading: O,
    suggestedPremiumType: M
  }
}