            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return B
                }
            });
            var a = s("37983"),
                n = s("884691"),
                l = s("446674"),
                i = s("77078"),
                r = s("152584"),
                o = s("875212"),
                d = s("812204"),
                u = s("685665"),
                c = s("345210"),
                S = s("793346"),
                E = s("154889"),
                f = s("917247"),
                m = s("956597"),
                T = s("635956"),
                _ = s("783142"),
                g = s("217513"),
                h = s("225849"),
                I = s("790618"),
                N = s("216422"),
                p = s("599110"),
                C = s("719923"),
                A = s("184900"),
                O = s("11899"),
                x = s("668688"),
                M = s("447645"),
                R = s("632892"),
                v = s("52704"),
                L = s("741781"),
                D = s("121370"),
                P = s("49111"),
                j = s("646718"),
                b = s("397336"),
                U = s("782340"),
                y = s("387813");

            function B(e) {
                var t, B, F;
                let {
                    user: G
                } = e, {
                    reducedMotion: k
                } = n.useContext(i.AccessibilityPreferencesContext), w = C.default.isPremium(G), {
                    pendingAvatar: H,
                    pendingBanner: V,
                    pendingThemeColors: Y,
                    pendingPronouns: W,
                    pendingBio: K,
                    tryItOutThemeColors: z,
                    tryItOutAvatar: Q,
                    tryItOutBanner: q,
                    tryItOutAvatarDecoration: Z,
                    tryItOutProfileEffectId: X
                } = (0, l.useStateFromStoresObject)([I.default], () => {
                    let e = I.default.getAllPending(),
                        t = I.default.getErrors(),
                        s = I.default.getAllTryItOut();
                    return {
                        ...e,
                        ...s,
                        errors: t
                    }
                }), J = (0, c.default)(Z), $ = (0, S.default)(X), ee = n.useRef(null);
                (0, h.default)(ee, b.ProfileCustomizationScrollPositions.TRY_IT_OUT);
                let et = (0, g.default)(G.id),
                    es = null == et ? void 0 : et.getPreviewBio(K),
                    {
                        AnalyticsLocationProvider: ea,
                        sourceAnalyticsLocations: en
                    } = (0, u.default)(d.default.USER_SETTINGS_TRY_OUT_PREMIUM);
                n.useEffect(() => {
                    p.default.track(P.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                        type: j.PremiumUpsellTypes.PREMIUM_PROFILE_TRY_IT_OUT,
                        location: {
                            page: P.AnalyticsPages.USER_SETTINGS
                        },
                        location_stack: en
                    })
                }, [en, G]);
                let el = (null === (B = (0, f.usePremiumTrialOffer)()) || void 0 === B ? void 0 : null === (t = B.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === j.PremiumSubscriptionSKUs.TIER_2,
                    ei = (0, E.usePremiumDiscountOffer)(),
                    er = (0, E.discountOfferHasTier)(ei, j.PremiumSubscriptionSKUs.TIER_2),
                    eo = "TryOutPremiumSection";
                return (0, o.useTriggerDebuggingAA)({
                    location: eo + " auto on",
                    autoTrackExposure: !0
                }), (0, o.useTriggerDebuggingAA)({
                    location: eo + " auto off",
                    autoTrackExposure: !1
                }), (0, a.jsx)(ea, {
                    children: (0, a.jsxs)(R.default, {
                        ref: ee,
                        className: y.tryItOutSection,
                        type: R.FeatureBorderTypes.PREMIUM,
                        isShown: !0,
                        hasBackground: !0,
                        children: [(0, a.jsx)(O.default, {
                            layoutClassName: y.tryItOutLayout,
                            previewTitle: (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)(N.default, {
                                    className: y.premiumIcon
                                }), U.default.Messages.USER_SETTINGS_TRY_OUT_PREMIUM_PREVIEW]
                            }),
                            profilePreview: (0, a.jsx)(A.default, {
                                user: G,
                                onAvatarChange: _.setTryItOutAvatar,
                                onBannerChange: _.setTryItOutBanner,
                                pendingPronouns: W,
                                pendingBio: K,
                                pendingBanner: null !== (F = null != q ? q : V) && void 0 !== F ? F : s("901979"),
                                pendingAvatar: null != Q ? Q : H,
                                pendingThemeColors: null != z ? z : Y,
                                pendingAvatarDecoration: J,
                                pendingProfileEffectId: $,
                                avatarClassName: null != Q || null != H || k.enabled ? void 0 : y.spinningAvatar,
                                canUsePremiumCustomization: !0,
                                isTryItOutFlow: !0,
                                hideExampleButton: !0,
                                hideFakeActivity: !!(null == es ? void 0 : es.value)
                            }),
                            children: (0, a.jsxs)("div", {
                                className: y.editor,
                                children: [(0, a.jsxs)("div", {
                                    children: [(0, a.jsx)(i.Heading, {
                                        variant: "heading-xl/extrabold",
                                        children: U.default.Messages.USER_SETTINGS_TRY_OUT_PREMIUM_HEADER
                                    }), (0, a.jsx)(i.Text, {
                                        className: y.description,
                                        variant: "text-sm/normal",
                                        children: U.default.Messages.USER_SETTINGS_TRY_OUT_PREMIUM_DESCRIPTION
                                    })]
                                }), (0, a.jsx)(D.default, {
                                    className: y.customizationSection,
                                    user: G,
                                    pendingAvatar: null != Q ? Q : H,
                                    pendingColors: null != z ? z : Y,
                                    onThemeColorsChange: _.setTryItOutThemeColors,
                                    showPremiumIcon: !1,
                                    preventDisabled: !0
                                }), (0, a.jsx)(v.default, {
                                    className: y.customizationSection,
                                    isTryItOutFlow: !0,
                                    showRemoveBannerButton: null != q,
                                    onBannerChange: _.setTryItOutBanner,
                                    showPremiumIcon: !1
                                }), (0, a.jsx)(M.default, {
                                    className: y.customizationSection,
                                    isTryItOutFlow: !0,
                                    onAvatarChange: _.setTryItOutAvatar,
                                    showRemoveAvatarButton: !1,
                                    changeAvatarButtonText: U.default.Messages.USER_SETTINGS_ADD_ANIMATED_AVATAR,
                                    sectionTitle: U.default.Messages.PREMIUM_TIER_0_FEATURE_AVATAR
                                }), (0, a.jsx)(x.default, {
                                    isTryItOutFlow: !0,
                                    className: y.customizationSection,
                                    user: G
                                }, "decoration"), (0, a.jsx)(L.default, {
                                    className: y.customizationSection,
                                    isTryItOutFlow: !0,
                                    initialSelectedEffectId: $,
                                    user: G
                                }, "effect"), !el && (0, a.jsxs)(a.Fragment, {
                                    children: [(0, a.jsx)(i.Text, {
                                        variant: "text-sm/normal",
                                        className: y.premiumPerksListTitle,
                                        children: U.default.Messages.USER_SETTINGS_TRY_OUT_PREMIUM_ALSO_INCLUDES
                                    }), (0, a.jsx)(T.default, {
                                        onSubscribeModalClose: e => {
                                            e && ((0, r.setPendingAvatar)(Q), (0, _.setPendingBanner)(q), (0, _.setPendingThemeColors)(z))
                                        },
                                        subscriptionTier: j.PremiumSubscriptionSKUs.TIER_2,
                                        className: y.premiumSubscribeButton,
                                        size: i.Button.Sizes.MEDIUM,
                                        buttonText: w ? U.default.Messages.USER_SETTINGS_PROFILE_THEMES_UPSELL_UPGRADE : er ? U.default.Messages.PREMIUM_DISCOUNT_CTA.format({
                                            percent: null == ei ? void 0 : ei.discount.amount
                                        }) : U.default.Messages.PREMIUM_UPSELL_GET_NITRO
                                    })]
                                })]
                            })
                        }), el && (0, a.jsxs)("div", {
                            children: [(0, a.jsx)("div", {
                                className: y.premiumTier2Divider
                            }), (0, a.jsx)(m.default, {
                                type: j.PremiumUpsellTypes.CUSTOM_PROFILE_TRY_OUT_UPSELL,
                                subscriptionTier: j.PremiumSubscriptionSKUs.TIER_2
                            })]
                        })]
                    })
                })
            }