            "use strict";
            n.r(t), n.d(t, {
                calculateAdditionalPlansWithPremiumGuildAdjustment: function() {
                    return r
                }
            }), n("70102"), n("222007");
            var l = n("627445"),
                a = n.n(l),
                s = n("10514"),
                i = n("719923"),
                u = n("646718"),
                o = n("49111");

            function r(e, t) {
                let n = s.default.get(e.planId);
                a(null != n, "missing premium subscription plan");
                let l = s.default.getForSkuAndInterval(u.PremiumSubscriptionSKUs.GUILD, n.interval, n.intervalCount);
                a(null != l, "missing premium guild plan");
                let r = null != e.renewalMutations ? e.renewalMutations.additionalPlans : e.additionalPlans,
                    c = e.status === o.SubscriptionStatusTypes.CANCELED ? 0 : (0, i.getNumPremiumGuildSubscriptions)(r),
                    d = c + t,
                    S = r.filter(e => e.planId !== l.id);
                if (d < 0) throw Error("Invalid adjustment");
                return 0 === d ? S : [...S, {
                    planId: l.id,
                    quantity: d
                }]
            }