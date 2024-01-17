"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var l = n("446674"),
  r = n("10514"),
  i = n("713518"),
  s = n("646718"),
  a = n("843455");

function o(e) {
  var t, n;
  let {
    activeSubscription: o,
    skuIDs: u,
    paymentSourceId: c,
    isGift: d
  } = e;
  u = u.filter(e => e !== s.PremiumSubscriptionSKUs.NONE);
  let f = (0, l.useStateFromStores)([r.default], () => {
      let e = r.default.getPlanIdsForSkus(u).filter(e => !d || s.PREMIUM_PLANS.has(e));
      return e.length > 0 ? r.default.get(e[0]) : null
    }),
    h = null == f ? [] : (0, i.getCurrencies)(f.id, c, d),
    E = null !== (n = null !== (t = h.find(e => e === (null == o ? void 0 : o.currency))) && void 0 !== t ? t : h[0]) && void 0 !== n ? n : a.CurrencyCodes.USD;
  return {
    ...(0, i.useCurrencyWithPaymentSourceChange)(E, null == f ? void 0 : f.id, c, d, u),
    currencies: h
  }
}