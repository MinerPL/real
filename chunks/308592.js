"use strict";
n.r(e), n.d(e, {
  useSubscriptionPlansLoaded: function() {
    return c
  },
  getSubscriptionPlansLoaded: function() {
    return S
  }
}), n("222007");
var u = n("446674"),
  i = n("605250"),
  r = n("357957"),
  l = n("10514"),
  a = n("521012"),
  o = n("646718");
new i.default("useSubscriptionPlansLoaded");
let s = t => {};

function c() {
  let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [...o.ACTIVE_PREMIUM_SKUS];
  return (0, u.useStateFromStores)([r.default, l.default, a.default], () => S(t, [r.default, l.default, a.default]), [t])
}

function S() {
  var t;
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [...o.ACTIVE_PREMIUM_SKUS],
    [n, u, i] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [r.default, l.default, a.default],
    c = n.paymentSourceIds,
    S = n.defaultPaymentSourceId,
    d = u.isLoadedForSKUs(e),
    E = null === (t = i.getPremiumTypeSubscription()) || void 0 === t ? void 0 : t.paymentSourceId;
  if (null != E && !u.hasPaymentSourceForSKUIds(E, e)) return s("subscription payment source ".concat(E, " not loaded for ").concat(e)), !1;
  if (null != S && !u.hasPaymentSourceForSKUIds(S, e)) return s("default payment source ".concat(S, " not loaded for ").concat(e)), !1;
  for (let t of c)
    if (!u.hasPaymentSourceForSKUIds(t, e)) return s("payment source ".concat(t, " not loaded for ").concat(e)), !1;
  return s("isLoadedForSKUs ".concat(d)), d
}