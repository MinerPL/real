            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("748820"),
                l = n("77078"),
                o = n("112679"),
                a = n("55689"),
                u = n("676379"),
                s = n("697218"),
                d = n("599110"),
                c = n("659500"),
                f = n("719923"),
                E = n("49111"),
                _ = n("646718");

            function p(e) {
                let {
                    initialPlanId: t,
                    followupSKUInfo: p,
                    onClose: S,
                    onComplete: T,
                    onSubscriptionConfirmation: h,
                    analyticsLocations: I,
                    analyticsObject: A,
                    analyticsLocation: g,
                    analyticsSourceLocation: N,
                    isGift: C = !1,
                    giftMessage: m,
                    subscriptionTier: v,
                    trialId: R,
                    postSuccessGuild: O,
                    openInvoiceId: U,
                    applicationId: y,
                    referralTrialOfferId: D,
                    giftRecipient: P,
                    returnRef: M,
                    subscription: L
                } = null != e ? e : {}, b = !1, w = (0, r.v4)(), F = s.default.getCurrentUser(), V = (0, f.isPremiumExactly)(F, _.PremiumTypes.TIER_2);
                (0, l.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("646139").then(n.bind(n, "646139"));
                    return n => {
                        let {
                            onClose: r,
                            ...l
                        } = n;
                        return (0, i.jsx)(e, {
                            ...l,
                            loadId: w,
                            subscriptionTier: v,
                            skuId: v,
                            isGift: C,
                            giftMessage: m,
                            giftRecipient: P,
                            initialPlanId: t,
                            followupSKUInfo: p,
                            onClose: (e, t) => {
                                r(), null == S || S(e), e && (null == h || h(), !C && null != t && t === _.PremiumSubscriptionSKUs.TIER_2 && !V && c.ComponentDispatch.dispatch(E.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED))
                            },
                            onComplete: () => {
                                b = !0, null == T || T(), !C && (0, u.setCanPlayWowMoment)(!0)
                            },
                            onSubscriptionConfirmation: h,
                            analyticsLocations: I,
                            analyticsObject: A,
                            analyticsLocation: g,
                            analyticsSourceLocation: N,
                            trialId: R,
                            postSuccessGuild: O,
                            planGroup: _.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                            openInvoiceId: U,
                            applicationId: y,
                            referralTrialOfferId: D,
                            returnRef: M,
                            subscription: L
                        })
                    }
                }, {
                    modalKey: "payment-modal",
                    onCloseCallback: () => {
                        !b && d.default.track(E.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
                            load_id: w,
                            payment_type: E.PurchaseTypeToAnalyticsPaymentType[E.PurchaseTypes.SUBSCRIPTION],
                            location: null != g ? g : A,
                            source: N,
                            subscription_type: E.SubscriptionTypes.PREMIUM,
                            is_gift: C,
                            eligible_for_trial: null != R,
                            application_id: y,
                            location_stack: I
                        }), (0, o.clearError)(), (0, a.clearPurchaseTokenAuthState)(), null == S || S(b), b && (null == h || h())
                    },
                    onCloseRequest: E.NOOP
                })
            }