            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return B
                }
            }), s("222007");
            var a = s("37983"),
                n = s("884691"),
                r = s("414456"),
                l = s.n(r),
                i = s("446674"),
                u = s("290381"),
                o = s("77078"),
                d = s("875212"),
                c = s("521012"),
                _ = s("594098"),
                E = s("719923"),
                I = s("182650"),
                f = s("300962"),
                T = s("959905"),
                S = s("154889"),
                R = s("917247"),
                p = s("460680"),
                A = s("411205"),
                m = s("934570"),
                N = s("641078"),
                g = s("400307"),
                P = s("159646"),
                C = s("379521"),
                O = s("958966"),
                M = s("830648"),
                h = s("627474"),
                L = s("904871"),
                x = s("360776"),
                v = s("525505"),
                U = s("881155"),
                D = s("646718"),
                j = s("880552"),
                b = s("679324"),
                G = s("905498"),
                y = s("452637"),
                B = e => {
                    var t;
                    let {
                        isFullscreen: s
                    } = e, [r, B] = n.useState(!1), [k, H] = n.useState(!1), [K, F] = n.useState(!1), W = (0, i.useStateFromStores)([c.default], () => c.default.getPremiumTypeSubscription()), w = null != W ? (0, E.getPremiumPlanItem)(W) : null, V = null != w ? E.default.getSkuIdForPlan(w.planId) : null, Y = null !== V && V !== D.PremiumSubscriptionSKUs.TIER_2 ? D.PremiumSubscriptionSKUs.TIER_2 : null, z = (0, T.useLocalizedPromoQuery)(), Z = null != z, X = (0, S.usePremiumDiscountOffer)(), Q = (0, R.usePremiumTrialOffer)(), J = null == Q ? void 0 : null === (t = Q.subscription_trial) || void 0 === t ? void 0 : t.sku_id, q = (0, I.useIsInPremiumOfferExperience)(), $ = (0, N.useIsEligibleForBogoPromotion)(), {
                        enabled: ee
                    } = (0, f.default)(), et = "PremiumMarketingHome";
                    return (0, d.useTriggerDebuggingAA)({
                        location: et + " auto on",
                        autoTrackExposure: !0
                    }), (0, d.useTriggerDebuggingAA)({
                        location: et + " auto off",
                        autoTrackExposure: !1
                    }), n.useEffect(() => {
                        F(!0)
                    }, []), (0, a.jsxs)("div", {
                        className: j.container,
                        "data-cy": "tier-0-marketing-page",
                        children: [(0, a.jsx)(P.default, {
                            premiumSubscription: W,
                            className: l(s ? j.fullscreenExistingSubscriberSpacing : j.existingSubscriberSpacing, {
                                [j.zIndex1]: q
                            }),
                            isFullscreen: s
                        }), s || q ? (0, a.jsx)(C.default, {
                            lifted: !s && q
                        }) : null, !s && Z ? (0, a.jsx)(m.default, {
                            localizedPricingPromo: z,
                            smallGap: !0
                        }) : (0, a.jsx)(u.VisibilitySensor, {
                            onChange: e => B(e),
                            threshold: 0,
                            active: !0,
                            children: (0, a.jsx)(O.default, {
                                subscriptionTier: Y,
                                isFullscreen: s || q,
                                className: l({
                                    [j.fullscreenHero]: s,
                                    [j.settingsHeroNoBackground]: !s && q,
                                    [j.trialMarketingMargin]: q,
                                    [j.settingsHeroBogoHeight]: !s && $,
                                    [j.settingsHeroBogoMarginFullscreen]: s && $,
                                    [j.noTopPaddingOverride]: null != W
                                })
                            })
                        }), (0, a.jsxs)("div", {
                            className: s ? j.premiumTierCardsContainerFullscreen : j.premiumTierCardsContainerSettings,
                            children: [(0, a.jsx)(p.default, {
                                isFullscreen: s
                            }), s && Z && (0, a.jsx)(A.default, {
                                localizedPricingPromo: z
                            }), (0, a.jsx)(u.VisibilitySensor, {
                                onChange: e => H(e),
                                threshold: .1,
                                active: !0,
                                children: (0, a.jsx)(g.default, {
                                    showWumpus: !0,
                                    tier0CTAButton: J === D.PremiumSubscriptionSKUs.TIER_2 || $ || null != X ? (0, a.jsx)(U.default, {
                                        forceInverted: !0,
                                        showIcon: !1,
                                        subscriptionTier: D.PremiumSubscriptionSKUs.TIER_0,
                                        className: j.marginTopForButtons,
                                        look: o.ButtonLooks.OUTLINED,
                                        color: o.ButtonColors.WHITE,
                                        buttonShineClassName: void 0
                                    }) : (0, a.jsx)(U.default, {
                                        forceInverted: !0,
                                        showIcon: !1,
                                        subscriptionTier: D.PremiumSubscriptionSKUs.TIER_0,
                                        className: j.marginTopForButtons
                                    }),
                                    tier2CTAButton: J === D.PremiumSubscriptionSKUs.TIER_0 ? (0, a.jsx)(U.default, {
                                        forceInverted: !0,
                                        showIcon: !1,
                                        subscriptionTier: D.PremiumSubscriptionSKUs.TIER_2,
                                        className: j.marginTopForButtons,
                                        look: o.ButtonLooks.OUTLINED,
                                        color: o.ButtonColors.WHITE,
                                        buttonShineClassName: void 0
                                    }) : (0, a.jsx)(U.default, {
                                        forceInverted: !0,
                                        showIcon: !1,
                                        subscriptionTier: D.PremiumSubscriptionSKUs.TIER_2,
                                        className: j.marginTopForButtons,
                                        isEligibleForBogoPromotion: $
                                    })
                                })
                            })]
                        }), s && !ee ? (0, a.jsxs)("div", {
                            className: j.whatsNewSection,
                            children: [(0, a.jsx)(h.default, {
                                variant: h.PerksDiscoverabilityVariants.WHATS_NEW
                            }), (0, a.jsx)(h.default, {}), q ? (0, a.jsx)(L.default, {
                                className: j.pdSparklesTop,
                                variant: L.SparkleVariants.TOP
                            }) : null, q ? (0, a.jsx)(L.default, {
                                className: j.pdSparklesBottom,
                                variant: L.SparkleVariants.BOTTOM
                            }) : null]
                        }) : null, (0, a.jsx)(M.default, {
                            className: s ? j.perkCardsContainerSpacingFullscreen : j.perkCardsContainerSpacingSettings
                        }), (0, a.jsxs)("div", {
                            className: j.planComparisonTableContainer,
                            children: [(0, a.jsx)(v.default, {
                                className: j.planComparisonTable,
                                hideCTAs: !0
                            }), s ? (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)(_.default, {
                                    src: G,
                                    className: j.tableLeftSideDecoration,
                                    width: 197,
                                    height: 486,
                                    zoomable: !1
                                }), (0, a.jsx)(_.default, {
                                    src: y,
                                    className: j.tableRightSideDecoration,
                                    width: 241,
                                    height: 552,
                                    zoomable: !1
                                })]
                            }) : null]
                        }), (0, a.jsx)("div", {
                            className: s ? j.footerSpacingFullscreen : j.footerSpacing
                        }), (0, a.jsx)(x.default, {
                            isVisible: !r && !k && K,
                            isFullscreen: s,
                            subscriptionTier: Y
                        }), (0, a.jsx)(_.default, {
                            src: b,
                            className: j.bottomIllustration,
                            width: 112,
                            height: 85,
                            zoomable: !1
                        })]
                    })
                }