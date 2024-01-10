            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return T
                }
            });
            var a = s("37983");
            s("884691");
            var n = s("819855"),
                r = s("77078"),
                l = s("841098"),
                i = s("719923"),
                u = s("154889"),
                o = s("917247"),
                d = s("635956"),
                c = s("646718"),
                _ = s("782340"),
                E = s("204859");
            let I = e => {
                    let {
                        showTrialCTA: t,
                        subscriptionTier: s,
                        shouldShowUpsells: a,
                        trialDurationCopy: n,
                        isPersistentCTA: r,
                        subscriptionTrial: l
                    } = e;
                    if (t && (s === c.PremiumSubscriptionSKUs.TIER_2 || r)) return (0, i.formatTrialCtaIntervalDuration)({
                        intervalType: null == l ? void 0 : l.interval,
                        intervalCount: null == l ? void 0 : l.interval_count
                    });
                    if (t) return _.default.Messages.GET_FREE_TRIAL.format({
                        freeTrialText: n
                    });
                    if (a && s === c.PremiumSubscriptionSKUs.TIER_2) return _.default.Messages.BOGO_CHANGE_LOG_REDEEM
                },
                f = (e, t, s, a) => t || s ? _.default.Messages.PREMIUM_DISCOUNT_CTA_WITHOUT_PERCENT : e === c.PremiumSubscriptionSKUs.TIER_2 ? _.default.Messages.PREMIUM_DISCOUNT_CTA.format({
                    percent: a
                }) : void 0;
            var T = e => {
                var t;
                let {
                    forceInverted: s,
                    subscriptionTier: c,
                    isEligibleForBogoPromotion: T = !1,
                    isPersistentCTA: S = !1,
                    useShorterCTA: R = !1,
                    ...p
                } = e, A = (0, l.default)(), N = (0, n.isThemeDark)(A) || s, m = null === (t = (0, o.usePremiumTrialOffer)()) || void 0 === t ? void 0 : t.subscription_trial, g = (0, i.formatTrialOfferIntervalDuration)({
                    intervalType: null == m ? void 0 : m.interval,
                    intervalCount: null == m ? void 0 : m.interval_count
                }), P = (0, u.usePremiumDiscountOffer)(), C = null != m && c === m.sku_id, O = T ? _.default.Messages.BOGO_CLAIM_OFFER : null != P ? f(c, R, S, P.discount.amount) : I({
                    showTrialCTA: C,
                    subscriptionTier: c,
                    shouldShowUpsells: !1,
                    trialDurationCopy: g,
                    isPersistentCTA: S,
                    subscriptionTrial: m
                });
                return (0, a.jsx)(d.default, {
                    color: r.ButtonColors.BRAND,
                    look: N ? r.ButtonLooks.INVERTED : void 0,
                    buttonShineClassName: "buttonShineClassName" in p ? p.buttonShineClassName : N ? E.brandShine : void 0,
                    trialId: null == m ? void 0 : m.id,
                    buttonText: O,
                    buttonTextClassName: C ? E.freeTrialText : void 0,
                    onlyShineOnHover: !0,
                    subscriptionTier: c,
                    ...p
                })
            }