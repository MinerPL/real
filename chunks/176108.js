            "use strict";
            n.r(t), n.d(t, {
                inOneStepSubscriptionCheckout: function() {
                    return l
                },
                planSwitchLoadingShowSpinner: function() {
                    return s
                },
                getDefaultPlanOneStepCheckout: function() {
                    return a
                }
            });
            var r = n("719923"),
                i = n("646718");

            function l(e) {
                let {
                    isTrial: t,
                    isGift: n,
                    selectedSkuId: r,
                    startedPaymentFlowWithPaymentSources: l
                } = e;
                return !t && !n && null != r && i.ACTIVE_PREMIUM_SKUS.includes(r) && l
            }

            function s(e, t, n) {
                let r = !1;
                if (e && null != t) {
                    let e = t.invoiceItems.find(e => e.subscriptionPlanId === n.id);
                    null == e && (r = !0)
                }
                return r
            }

            function a(e, t, n) {
                let l = null != t ? (0, r.getPremiumPlanItem)(t) : null,
                    s = i.PREMIUM_SKU_TO_YEARLY_PLAN[e],
                    a = null != n ? n : s;
                return null != l ? a === l.planId && a === i.PREMIUM_SKU_TO_MONTHLY_PLAN[e] ? a = i.PREMIUM_SKU_TO_YEARLY_PLAN[e] : a === l.planId && a === i.PREMIUM_SKU_TO_YEARLY_PLAN[e] ? a = i.PREMIUM_SKU_TO_MONTHLY_PLAN[e] : (l.planId === i.SubscriptionPlans.PREMIUM_YEAR_TIER_0 || l.planId === i.SubscriptionPlans.PREMIUM_YEAR_TIER_1) && a === i.SubscriptionPlans.PREMIUM_MONTH_TIER_2 && (a = i.SubscriptionPlans.PREMIUM_YEAR_TIER_2) : a === i.SubscriptionPlans.PREMIUM_YEAR_TIER_1 && (a = i.SubscriptionPlans.PREMIUM_MONTH_TIER_1), a
            }