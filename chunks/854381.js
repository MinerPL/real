            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return o
                }
            });
            var u = n("446674"),
                i = n("10514"),
                r = n("713518"),
                l = n("646718"),
                a = n("843455");

            function o(t) {
                var e, n;
                let {
                    activeSubscription: o,
                    skuIDs: s,
                    paymentSourceId: c,
                    isGift: S
                } = t;
                s = s.filter(t => t !== l.PremiumSubscriptionSKUs.NONE);
                let d = (0, u.useStateFromStores)([i.default], () => {
                        let t = i.default.getPlanIdsForSkus(s).filter(t => !S || l.PREMIUM_PLANS.has(t));
                        return t.length > 0 ? i.default.get(t[0]) : null
                    }),
                    E = null == d ? [] : (0, r.getCurrencies)(d.id, c, S),
                    f = null !== (n = null !== (e = E.find(t => t === (null == o ? void 0 : o.currency))) && void 0 !== e ? e : E[0]) && void 0 !== n ? n : a.CurrencyCodes.USD;
                return {
                    ...(0, r.useCurrencyWithPaymentSourceChange)(f, null == d ? void 0 : d.id, c, S, s),
                    currencies: E
                }
            }