            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            }), n("70102");
            var a = n("37983");
            n("884691");
            var s = n("174727"),
                i = n("812204"),
                l = n("685665"),
                r = n("649844"),
                o = n("216422"),
                u = n("489622"),
                d = n("917247"),
                c = n("646718"),
                E = n("49111"),
                f = n("782340"),
                _ = n("185401"),
                h = function(e) {
                    var t;
                    let {
                        dismissCurrentNotice: n,
                        subscriptionTier: h
                    } = e, {
                        analyticsLocations: C
                    } = (0, l.default)(function(e) {
                        switch (e) {
                            case c.PremiumSubscriptionSKUs.TIER_0:
                                return i.default.PREMIUM_TIER_0_TRIAL_ENDING_NOTICE;
                            case c.PremiumSubscriptionSKUs.TIER_2:
                                return i.default.PREMIUM_TIER_2_TRIAL_ENDING_NOTICE;
                            default:
                                throw Error("Unsupported subscription tier: ".concat(e))
                        }
                    }(h)), I = (0, d.usePremiumTrialOffer)(), T = (0, s.default)(null != I && null != I.expires_at ? Date.parse(I.expires_at) : 0);
                    return null == I || (null === (t = I.subscription_trial) || void 0 === t ? void 0 : t.sku_id) !== h || null == I.expires_at || Object.values(T).every(e => 0 === e) ? null : (0, a.jsxs)(u.default, {
                        color: function(e) {
                            switch (e) {
                                case c.PremiumSubscriptionSKUs.TIER_0:
                                    return u.NoticeColors.PREMIUM_TIER_0;
                                case c.PremiumSubscriptionSKUs.TIER_2:
                                    return u.NoticeColors.PREMIUM_TIER_2;
                                default:
                                    throw Error("Unsupported subscription tier: ".concat(e))
                            }
                        }(h),
                        children: [(0, a.jsx)(u.NoticeCloseButton, {
                            onClick: n
                        }), (0, a.jsx)(o.default, {
                            className: _.premiumIcon
                        }), function(e, t) {
                            switch (e) {
                                case c.PremiumSubscriptionSKUs.TIER_0:
                                    return t.days > 0 ? f.default.Messages.NOTICE_PREMIUM_TIER_0_TRIAL_ENDING_DAYS_VARIANT.format({
                                        days: t.days
                                    }) : t.hours > 0 ? f.default.Messages.NOTICE_PREMIUM_TIER_0_TRIAL_ENDING_HOURS_VARIANT.format({
                                        hours: t.hours
                                    }) : f.default.Messages.NOTICE_PREMIUM_TIER_0_TRIAL_ENDING_MINUTES_VARIANT.format({
                                        minutes: Math.max(t.minutes, 1)
                                    });
                                case c.PremiumSubscriptionSKUs.TIER_2:
                                    return t.days > 0 ? f.default.Messages.NOTICE_PREMIUM_TIER_2_TRIAL_ENDING_DAYS_VARIANT.format({
                                        days: t.days
                                    }) : t.hours > 0 ? f.default.Messages.NOTICE_PREMIUM_TIER_2_TRIAL_ENDING_HOURS_VARIANT.format({
                                        hours: t.hours
                                    }) : f.default.Messages.NOTICE_PREMIUM_TIER_2_TRIAL_ENDING_MINUTES_VARIANT.format({
                                        minutes: Math.max(t.minutes, 1)
                                    });
                                default:
                                    throw Error("Unsupported subscription tier: ".concat(e))
                            }
                        }(h, T), (0, a.jsx)(u.NoticeButton, {
                            onClick: () => {
                                (0, r.default)({
                                    trialId: I.trial_id,
                                    subscriptionTier: h,
                                    analyticsLocations: C,
                                    analyticsObject: {
                                        page: E.AnalyticsPages.IN_APP,
                                        section: E.AnalyticsSections.NOTIFICATION_BAR,
                                        object: E.AnalyticsObjects.BUTTON_CTA
                                    }
                                })
                            },
                            children: function(e) {
                                switch (e) {
                                    case c.PremiumSubscriptionSKUs.TIER_0:
                                        return f.default.Messages.NOTICE_PREMIUM_TIER_0_TRIAL_ENDING_CTA_VARIANT;
                                    case c.PremiumSubscriptionSKUs.TIER_2:
                                        return f.default.Messages.NOTICE_PREMIUM_TIER_2_TRIAL_ENDING_CTA_VARIANT;
                                    default:
                                        throw Error("Unsupported subscription tier: ".concat(e))
                                }
                            }(h)
                        })]
                    })
                }