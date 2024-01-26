"use strict";
n.r(t), n.d(t, {
  useIsInPremiumOfferExperience: function() {
    return d
  },
  useHasDiscountApplied: function() {
    return c
  }
});
var i = n("866227"),
  r = n.n(i),
  l = n("446674"),
  s = n("521012"),
  a = n("324878"),
  o = n("154889"),
  u = n("917247");

function d() {
  let e = (0, u.usePremiumTrialOffer)(),
    t = (0, a.useHasActiveTrial)(),
    n = (0, o.usePremiumDiscountOffer)(),
    i = c();
  return null != e || t || null != n || i
}
let c = () => {
  var e, t;
  let n = (0, l.useStateFromStores)([s.default], () => s.default.getPremiumTypeSubscription()),
    i = null == n ? void 0 : null === (e = n.metadata) || void 0 === e ? void 0 : e.nitro_likelihood_discount_expires_at,
    a = null == n ? void 0 : null === (t = n.metadata) || void 0 === t ? void 0 : t.nitro_reactivation_discount_expires_at,
    o = null != i ? i : a;
  return null != o && r(Date.now()) <= r(o)
}