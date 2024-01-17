"use strict";
n.r(t), n.d(t, {
  useSubscriptionPlansLoaded: function() {
    return c
  },
  getSubscriptionPlansLoaded: function() {
    return d
  }
}), n("222007");
var l = n("446674"),
  r = n("605250"),
  i = n("357957"),
  s = n("10514"),
  a = n("521012"),
  o = n("646718");
new r.default("useSubscriptionPlansLoaded");
let u = e => {};

function c() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [...o.ACTIVE_PREMIUM_SKUS];
  return (0, l.useStateFromStores)([i.default, s.default, a.default], () => d(e, [i.default, s.default, a.default]), [e])
}

function d() {
  var e;
  let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [...o.ACTIVE_PREMIUM_SKUS],
    [n, l, r] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [i.default, s.default, a.default],
    c = n.paymentSourceIds,
    d = n.defaultPaymentSourceId,
    f = l.isLoadedForSKUs(t),
    h = null === (e = r.getPremiumTypeSubscription()) || void 0 === e ? void 0 : e.paymentSourceId;
  if (null != h && !l.hasPaymentSourceForSKUIds(h, t)) return u("subscription payment source ".concat(h, " not loaded for ").concat(t)), !1;
  if (null != d && !l.hasPaymentSourceForSKUIds(d, t)) return u("default payment source ".concat(d, " not loaded for ").concat(t)), !1;
  for (let e of c)
    if (!l.hasPaymentSourceForSKUIds(e, t)) return u("payment source ".concat(e, " not loaded for ").concat(t)), !1;
  return u("isLoadedForSKUs ".concat(f)), f
}