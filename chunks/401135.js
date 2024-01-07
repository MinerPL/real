            "use strict";
            s.r(t), s.d(t, {
                useCheapestMonthlyPrice: function() {
                    return i
                }
            });
            var a = s("446674"),
                n = s("10514"),
                r = s("719923"),
                l = s("646718");

            function i() {
                let e = (0, a.useStateFromStores)([n.default], () => n.default.getForSkuAndInterval(l.PremiumSubscriptionSKUs.TIER_0, l.SubscriptionIntervalTypes.MONTH));
                return null != e ? (0, r.getFormattedPriceForPlan)(e) : "…"
            }