            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return y
                }
            }), n("222007");
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                o = n.n(r),
                s = n("819855"),
                a = n("77078"),
                u = n("997289"),
                d = n("841098"),
                c = n("812204"),
                f = n("685665"),
                p = n("626301"),
                m = n("635956"),
                h = n("599110"),
                E = n("719923"),
                S = n("49111"),
                g = n("646718"),
                C = n("782340"),
                T = n("665946"),
                v = n("350028");

            function y(e) {
                let {
                    onClose: t,
                    closePopout: r
                } = e, y = (0, d.default)(), [x, I] = i.useState(!1), {
                    location: N
                } = (0, u.useAnalyticsContext)(), _ = i.useMemo(() => ({
                    ...N,
                    section: S.AnalyticsSections.SOUNDBOARD_SOUND_PICKER
                }), [N]), {
                    analyticsLocations: A
                } = (0, f.default)(c.default.PREMIUM_UPSELL), R = (0, s.isThemeLight)(y) ? n("602291") : n("609708");
                i.useEffect(() => {
                    h.default.track(S.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                        type: g.PremiumUpsellTypes.SOUND_PICKER_SOUND_CLICKED,
                        is_external: !0,
                        location: {
                            ..._,
                            object: S.AnalyticsObjects.SOUNDBOARD_SOUND
                        },
                        location_stack: A,
                        sku_id: E.default.getSkuIdForPremiumType(g.PremiumTypes.TIER_2)
                    })
                }, [A, _]);
                let O = i.useCallback(() => {
                    h.default.track(S.AnalyticEvents.PREMIUM_PROMOTION_OPENED, {
                        location_section: S.AnalyticsSections.SOUNDBOARD_SOUND_PICKER_UPSELL
                    }), (0, p.navigateToPremiumMarketingPage)(), r()
                }, [r]);
                return (0, l.jsxs)("div", {
                    className: o(v.premiumPromo, T.container),
                    children: [(0, l.jsx)(a.Clickable, {
                        className: v.premiumPromoClose,
                        onClick: t,
                        children: C.default.Messages.CLOSE
                    }), (0, l.jsx)("img", {
                        "aria-hidden": !0,
                        alt: "",
                        className: o(v.premiumPromoImage, v.premiumPromoImageSmaller, T.image),
                        src: R
                    }), (0, l.jsx)(a.Heading, {
                        variant: "heading-lg/normal",
                        color: "header-primary",
                        className: v.premiumPromoTitle,
                        children: C.default.Messages.SOUNDBOARD_NITRO_UPSELL_TITLE
                    }), (0, l.jsx)(a.Text, {
                        variant: "text-md/normal",
                        color: "header-secondary",
                        className: v.premiumPromoDescription,
                        children: C.default.Messages.SOUNDBOARD_NITRO_UPSELL_BODY.format({
                            onClick: O
                        })
                    }), (0, l.jsx)(m.default, {
                        subscriptionTier: g.PremiumSubscriptionSKUs.TIER_2,
                        submitting: x,
                        premiumModalAnalyticsLocation: {
                            section: S.AnalyticsSections.SOUNDBOARD_SOUND_PICKER,
                            object: S.AnalyticsObjects.BUTTON_CTA
                        },
                        size: a.Button.Sizes.SMALL,
                        color: a.Button.Colors.GREEN,
                        onClick: () => {
                            I(!0)
                        },
                        onSubscribeModalClose: e => {
                            I(!1), e && t()
                        }
                    })]
                })
            }