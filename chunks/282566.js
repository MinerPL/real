            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return M
                }
            }), i("222007");
            var n = i("37983"),
                l = i("884691"),
                s = i("414456"),
                a = i.n(s),
                r = i("819855"),
                o = i("77078"),
                u = i("841098"),
                c = i("812204"),
                d = i("685665"),
                f = i("538282"),
                E = i("626301"),
                m = i("552917"),
                I = i("843647"),
                p = i("154889"),
                g = i("917247"),
                _ = i("956597"),
                S = i("635956"),
                h = i("599110"),
                C = i("402671"),
                T = i("719923"),
                N = i("788506"),
                A = i("115279"),
                y = i("49111"),
                v = i("958706"),
                j = i("646718"),
                R = i("782340"),
                O = i("350028"),
                M = e => {
                    var t, s, M;
                    let {
                        onLearnMore: x,
                        onClose: P,
                        channel: L,
                        emojiDescriptor: D,
                        pickerIntention: b,
                        analyticsLocation: U
                    } = e, w = (0, u.default)(), [G, k] = l.useState(!1), F = () => {
                        (0, N.trackPremiumSettingsPaneOpened)(L), (0, E.navigateToPremiumMarketingPage)(), x()
                    }, V = (0, r.isThemeLight)(w) ? i("602291") : i("609708"), K = (0, g.usePremiumTrialOffer)(), H = (0, p.usePremiumDiscountOffer)(), B = null != K || null != H, {
                        isLoading: J,
                        suggestedPremiumType: W
                    } = (0, I.default)({
                        autoTrackExposure: !B,
                        experiment: m.default,
                        location: "emoji_picker"
                    }), z = (0, f.useExpressionPickerStore)(e => e.searchQuery), {
                        analyticsLocations: Z
                    } = (0, d.default)(c.default.EMOJI_PICKER), Y = null == K ? void 0 : null === (t = K.subscription_trial) || void 0 === t ? void 0 : t.sku_id, Q = null != Y ? Y === j.PremiumSubscriptionSKUs.TIER_0 : W === j.PremiumTypes.TIER_0;
                    return l.useEffect(() => {
                        if (!J) {
                            let e;
                            e = b === v.EmojiIntention.REACTION ? j.PremiumUpsellTypes.EMOJI_PICKER_REACTION_EMOJI_CLICKED : D.subCategory === A.EmojiSubCategory.TOP_GUILD_EMOJI ? j.PremiumUpsellTypes.EMOJI_PICKER_TOP_SERVER_EMOJI_CLICKED : D.subCategory === A.EmojiSubCategory.NEWLY_ADDED_EMOJI ? j.PremiumUpsellTypes.EMOJI_PICKER_NEWLY_ADDED_EMOJI_CLICKED : j.PremiumUpsellTypes.EMOJI_PICKER_EMOJI_CLICKED;
                            let t = D.emoji;
                            h.default.track(y.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                                type: e,
                                is_animated: t.animated,
                                is_external: !C.default.isInternalEmojiForGuildId(t, null == L ? void 0 : L.getGuildId()),
                                has_search_query: null != z && "" !== z,
                                location: {
                                    ...U,
                                    object: y.AnalyticsObjects.EMOJI
                                },
                                location_stack: Z,
                                sku_id: T.default.getSkuIdForPremiumType(W)
                            })
                        }
                    }, [J, W, D, L, U, Z, b, z]), (0, n.jsxs)("div", {
                        className: a(O.premiumPromo, {
                            [O.unifyTrialUpsell]: B
                        }),
                        children: [(0, n.jsx)(o.Clickable, {
                            className: O.premiumPromoClose,
                            onClick: P,
                            children: R.default.Messages.CLOSE
                        }), J ? (0, n.jsx)(o.Spinner, {}) : (0, n.jsxs)(n.Fragment, {
                            children: [B ? (0, n.jsx)(_.default, {
                                type: j.PremiumUpsellTypes.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_EMOJI,
                                subscriptionTier: null !== (M = null == K ? void 0 : null === (s = K.subscription_trial) || void 0 === s ? void 0 : s.sku_id) && void 0 !== M ? M : j.PremiumSubscriptionSKUs.TIER_2,
                                onClose: P,
                                trialOffer: K,
                                discountOffer: H,
                                children: Q ? R.default.Messages.PREMIUM_PROMO_DESCRIPTION_SEARCH_TIER_UPSELL.format({
                                    planName: (0, T.getTierDisplayName)(j.SubscriptionPlans.PREMIUM_MONTH_TIER_0),
                                    onClick: F
                                }) : R.default.Messages.PREMIUM_PROMO_DESCRIPTION_SEARCH_UPSELL.format({
                                    onClick: F
                                })
                            }) : (0, n.jsxs)(n.Fragment, {
                                children: [(0, n.jsx)("img", {
                                    alt: "",
                                    className: O.premiumPromoImage,
                                    src: V
                                }), (0, n.jsx)("div", {
                                    className: O.premiumPromoTitle,
                                    children: R.default.Messages.PREMIUM_PROMO_TITLE_SEARCH_UPSELL
                                }), (0, n.jsx)("div", {
                                    className: O.premiumPromoDescription,
                                    children: Q ? R.default.Messages.PREMIUM_PROMO_DESCRIPTION_SEARCH_TIER_UPSELL.format({
                                        planName: (0, T.getTierDisplayName)(j.SubscriptionPlans.PREMIUM_MONTH_TIER_0),
                                        onClick: F
                                    }) : R.default.Messages.PREMIUM_PROMO_DESCRIPTION_SEARCH_UPSELL.format({
                                        onClick: F
                                    })
                                })]
                            }), !B && (0, n.jsx)(S.default, {
                                subscriptionTier: Q ? j.PremiumSubscriptionSKUs.TIER_0 : j.PremiumSubscriptionSKUs.TIER_2,
                                submitting: G,
                                premiumModalAnalyticsLocation: {
                                    section: y.AnalyticsSections.EMOJI_PICKER_POPOUT,
                                    object: y.AnalyticsObjects.BUTTON_CTA
                                },
                                size: o.Button.Sizes.SMALL,
                                color: o.Button.Colors.GREEN,
                                onClick: () => {
                                    k(!0)
                                },
                                onSubscribeModalClose: e => {
                                    k(!1), e && P()
                                },
                                buttonText: (() => {
                                    if (B) return Q ? R.default.Messages.PREMIUM_TRIAL_TIER_0_CTA_BUTTON_VARIANT : R.default.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT;
                                    return Q ? R.default.Messages.PREMIUM_SETTINGS_GET_TIER_0 : R.default.Messages.PREMIUM_REQUIRED_GET_NITRO
                                })()
                            })]
                        })]
                    })
                }