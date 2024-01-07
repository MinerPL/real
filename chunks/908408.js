            "use strict";
            n.r(t), n.d(t, {
                StickersPremiumUpsell: function() {
                    return I
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                o = n.n(r),
                s = n("77078"),
                a = n("812204"),
                u = n("685665"),
                d = n("154889"),
                c = n("917247"),
                f = n("956597"),
                p = n("945330"),
                m = n("599110"),
                h = n("719923"),
                E = n("570759"),
                S = n("281072"),
                g = n("49111"),
                C = n("646718"),
                T = n("782340"),
                v = n("416841"),
                y = n("481927");
            let x = () => (0, E.setShowPremiumUpsell)(!1),
                I = e => {
                    var t, n, r;
                    let {
                        onLearnMore: E
                    } = e, {
                        analyticsLocations: I
                    } = (0, u.default)(a.default.PREMIUM_UPSELL);
                    i.useEffect(() => {
                        m.default.track(g.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                            location_section: g.AnalyticsSections.STICKER_PICKER_UPSELL,
                            type: C.PremiumUpsellTypes.STICKER_PICKER_UPSELL,
                            location_stack: I
                        })
                    }, [I]);
                    let N = (0, c.usePremiumTrialOffer)(),
                        _ = (0, d.usePremiumDiscountOffer)(),
                        A = (null == N ? void 0 : null === (t = N.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === C.PremiumSubscriptionSKUs.TIER_0,
                        R = null != N || null != _;
                    return (0, l.jsxs)("div", {
                        className: o(v.upsellWrapper, {
                            [v.unifyTrialUpsell]: R
                        }),
                        children: [R ? (0, l.jsx)(f.default, {
                            trialOffer: N,
                            discountOffer: _,
                            onClose: x,
                            type: C.PremiumUpsellTypes.STICKER_PICKER_UPSELL,
                            subscriptionTier: null !== (r = null == N ? void 0 : null === (n = N.subscription_trial) || void 0 === n ? void 0 : n.sku_id) && void 0 !== r ? r : C.PremiumSubscriptionSKUs.TIER_2,
                            children: A ? T.default.Messages.STICKER_PICKER_PREMIUM_TIER_UPSELL_DESCRIPTION.format({
                                planName: (0, h.getTierDisplayName)(C.SubscriptionPlans.PREMIUM_MONTH_TIER_0),
                                onClick: E
                            }) : T.default.Messages.STICKER_PICKER_PREMIUM_UPSELL_DESCRIPTION.format({
                                onClick: E
                            })
                        }) : (0, l.jsxs)(l.Fragment, {
                            children: [(0, l.jsx)("img", {
                                className: v.upsellImage,
                                src: y,
                                alt: T.default.Messages.STICKER_PICKER_PREMIUM_UPSELL_ALT
                            }), (0, l.jsx)(s.Text, {
                                className: v.upsellTitle,
                                color: "header-primary",
                                variant: "text-lg/semibold",
                                children: T.default.Messages.STICKER_PICKER_PREMIUM_UPSELL_TITLE
                            }), (0, l.jsx)(s.Text, {
                                className: v.upsellDescription,
                                variant: "text-md/normal",
                                children: T.default.Messages.STICKER_PICKER_PREMIUM_UPSELL_DESCRIPTION.format({
                                    onClick: E
                                })
                            })]
                        }), !R && (0, l.jsx)(S.default, {
                            analyticsSection: g.AnalyticsSections.EXPRESSION_PICKER,
                            buttonText: R ? A ? T.default.Messages.PREMIUM_TRIAL_TIER_0_CTA_BUTTON_VARIANT : T.default.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT : void 0
                        }), (0, l.jsx)(s.Clickable, {
                            className: v.upsellClose,
                            onClick: x,
                            children: (0, l.jsx)(p.default, {})
                        })]
                    })
                }