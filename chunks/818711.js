            "use strict";
            s.r(e), s.d(e, {
                calculateAdditionalPlansWithPremiumGuildAdjustment: function() {
                    return r
                }
            }), s("70102"), s("222007");
            var n = s("627445"),
                i = s.n(n),
                l = s("10514"),
                a = s("719923"),
                u = s("646718"),
                o = s("49111");

            function r(t, e) {
                let s = l.default.get(t.planId);
                i(null != s, "missing premium subscription plan");
                let n = l.default.getForSkuAndInterval(u.PremiumSubscriptionSKUs.GUILD, s.interval, s.intervalCount);
                i(null != n, "missing premium guild plan");
                let r = null != t.renewalMutations ? t.renewalMutations.additionalPlans : t.additionalPlans,
                    d = t.status === o.SubscriptionStatusTypes.CANCELED ? 0 : (0, a.getNumPremiumGuildSubscriptions)(r),
                    c = d + e,
                    I = r.filter(t => t.planId !== n.id);
                if (c < 0) throw Error("Invalid adjustment");
                return 0 === c ? I : [...I, {
                    planId: n.id,
                    quantity: c
                }]
            }