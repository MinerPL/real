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
                m = n("42203"),
                h = n("18494"),
                E = n("791106"),
                S = n("216422"),
                g = n("599110"),
                C = n("49111"),
                T = n("646718"),
                v = n("782340"),
                y = n("317478");

            function x() {
                (0, a.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("532210").then(n.bind(n, "532210"));
                    return t => (0, l.jsx)(e, {
                        channel: null,
                        ...t
                    })
                })
            }

            function I(e) {
                var t;
                let {
                    className: n,
                    iconOnly: r,
                    remaining: I
                } = e, N = (0, s.useStateFromStores)([h.default, m.default], () => {
                    let e = m.default.getChannel(h.default.getChannelId());
                    return (null == e ? void 0 : e.isPrivate()) ? C.AnalyticsPages.DM_CHANNEL : C.AnalyticsPages.GUILD_CHANNEL
                }), {
                    analyticsLocations: _
                } = (0, d.default)(u.default.PREMIUM_UPSELL), A = (0, c.usePremiumDiscountOffer)(), R = (0, f.usePremiumTrialOffer)(), O = (0, c.discountOfferHasTier)(A, T.PremiumSubscriptionSKUs.TIER_2), M = (null == R ? void 0 : null === (t = R.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === T.PremiumSubscriptionSKUs.TIER_2;
                return (i.useEffect(() => {
                    g.default.track(C.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                        type: "longer messages inline",
                        location: {
                            location_page: N,
                            location_section: C.AnalyticsSections.CHANNEL_TEXT_AREA
                        },
                        location_stack: _
                    })
                }, [N, _]), (M || O) && I < 0) ? (0, l.jsx)(p.default, {
                    type: T.PremiumUpsellTypes.MESSAGE_LENGTH_IN_EDITOR_UPSELL,
                    subscriptionTier: T.PremiumSubscriptionSKUs.TIER_2,
                    context: I,
                    discountOffer: A,
                    trialOffer: R,
                    children: v.default.Messages.PREMIUM_MESSAGE_LENGTH_UPSELL_TOOLTIP.format({
                        onLearnMore: x
                    })
                }) : r ? (0, l.jsx)(a.Clickable, {
                    className: y.iconOnly,
                    onClick: () => x(),
                    children: (0, l.jsx)(a.Tooltip, {
                        text: v.default.Messages.PREMIUM_MESSAGE_LENGTH_UPSELL_TOOLTIP_WITHOUT_LINK,
                        position: "top",
                        children: e => (0, l.jsx)(S.default, {
                            className: y.premium,
                            ...e
                        })
                    })
                }) : (0, l.jsxs)("div", {
                    className: o(y.root, n),
                    children: [(0, l.jsx)(S.default, {
                        className: y.premium,
                        color: E.GradientCssUrls.PREMIUM_TIER_2
                    }), (0, l.jsx)(a.Text, {
                        className: y.text,
                        variant: "text-sm/normal",
                        children: v.default.Messages.PREMIUM_MESSAGE_LENGTH_UPSELL_TOOLTIP.format({
                            onLearnMore: x
                        })
                    })]
                })
            }