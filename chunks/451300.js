            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                o = n.n(r),
                s = n("446674"),
                a = n("77078"),
                u = n("812204"),
                d = n("685665"),
                c = n("154889"),
                f = n("917247"),
                p = n("956597"),
                m = n("599110"),
                h = n("256860"),
                E = n("364685"),
                S = n("41170"),
                g = n("281072"),
                C = n("560241"),
                T = n("49111"),
                v = n("646718"),
                y = n("782340"),
                x = n("817028");

            function I(e) {
                var t, n, r;
                let {
                    className: I,
                    onClose: N
                } = e;
                (0, h.useFetchStickerPacks)();
                let {
                    analyticsLocations: _
                } = (0, d.default)(u.default.EMPTY_STATE), A = (0, s.useStateFromStoresArray)([E.default], () => C.EMPTY_STATE_STICKERS.map(e => E.default.getStickerById(e)));
                i.useEffect(() => {
                    m.default.track(T.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                        type: v.PremiumUpsellTypes.EMPTY_STICKER_PICKER_UPSELL,
                        source: {
                            section: T.AnalyticsSections.EMPTY_STICKER_PICKER_UPSELL
                        },
                        location_stack: _
                    })
                }, [_]);
                let R = (0, f.usePremiumTrialOffer)(),
                    O = (0, c.usePremiumDiscountOffer)(),
                    M = null != R || null != O,
                    k = (null == R ? void 0 : null === (t = R.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === v.PremiumSubscriptionSKUs.TIER_0;
                return (0, l.jsxs)("div", {
                    className: o(x.emptyState, I, {
                        [x.unifyTrialUpsell]: M
                    }),
                    children: [M ? (0, l.jsx)(p.default, {
                        discountOffer: O,
                        trialOffer: R,
                        onClose: N,
                        type: v.PremiumUpsellTypes.EMPTY_STICKER_PICKER_UPSELL,
                        subscriptionTier: null !== (r = null == R ? void 0 : null === (n = R.subscription_trial) || void 0 === n ? void 0 : n.sku_id) && void 0 !== r ? r : v.PremiumSubscriptionSKUs.TIER_2,
                        children: y.default.Messages.STICKER_PICKER_PREMIUM_EMPTY_STATE_SUBTITLE
                    }) : (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(a.Heading, {
                            className: x.header,
                            variant: "heading-xl/semibold",
                            children: y.default.Messages.STICKER_PICKER_PREMIUM_EMPTY_STATE_TITLE
                        }), (0, l.jsx)(a.Text, {
                            className: x.subtitle,
                            color: "header-secondary",
                            variant: "text-md/normal",
                            children: y.default.Messages.STICKER_PICKER_PREMIUM_EMPTY_STATE_SUBTITLE
                        }), (0, l.jsx)("div", {
                            className: x.stickersRow,
                            children: A.filter(e => null != e).map(e => (0, l.jsx)(S.default, {
                                sticker: e,
                                className: x.sticker,
                                size: 80
                            }, null == e ? void 0 : e.id))
                        })]
                    }), !M && (0, l.jsx)(g.default, {
                        analyticsSection: T.AnalyticsSections.EXPRESSION_PICKER,
                        buttonText: M ? k ? y.default.Messages.PREMIUM_TRIAL_TIER_0_CTA_BUTTON_VARIANT : y.default.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT : void 0
                    })]
                })
            }