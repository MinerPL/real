            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return F
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
                c = s("812204"),
                _ = s("685665"),
                E = s("521012"),
                I = s("594098"),
                f = s("599110"),
                T = s("719923"),
                S = s("182650"),
                R = s("300962"),
                p = s("959905"),
                A = s("154889"),
                N = s("917247"),
                m = s("460680"),
                g = s("411205"),
                P = s("934570"),
                C = s("641078"),
                O = s("400307"),
                M = s("159646"),
                L = s("379521"),
                h = s("958966"),
                x = s("830648"),
                v = s("627474"),
                U = s("904871"),
                D = s("360776"),
                b = s("525505"),
                j = s("881155"),
                G = s("646718"),
                y = s("49111"),
                B = s("880552"),
                k = s("679324"),
                H = s("905498"),
                K = s("452637"),
                F = e => {
                    var t;
                    let {
                        isFullscreen: s
                    } = e, r = n.useRef(null), [F, W] = n.useState(!1), [w, V] = n.useState(!1), [Y, z] = n.useState(!1), [Z, X] = n.useState(!1), Q = (0, i.useStateFromStores)([E.default], () => E.default.getPremiumTypeSubscription()), J = null != Q ? (0, T.getPremiumPlanItem)(Q) : null, q = null != J ? T.default.getSkuIdForPlan(J.planId) : null, $ = null !== q && q !== G.PremiumSubscriptionSKUs.TIER_2 ? G.PremiumSubscriptionSKUs.TIER_2 : null, ee = (0, p.useLocalizedPromoQuery)(), et = null != ee, es = (0, A.usePremiumDiscountOffer)(), ea = (0, N.usePremiumTrialOffer)(), en = null == ea ? void 0 : null === (t = ea.subscription_trial) || void 0 === t ? void 0 : t.sku_id, er = (0, S.useIsInPremiumOfferExperience)(), el = (0, C.useIsEligibleForBogoPromotion)(), {
                        enabled: ei
                    } = (0, R.default)(), {
                        analyticsLocations: eu
                    } = (0, _.default)(c.default.PREMIUM_MARKETING), eo = "PremiumMarketingHome";
                    return (0, d.useTriggerDebuggingAA)({
                        location: eo + " auto on",
                        autoTrackExposure: !0
                    }), (0, d.useTriggerDebuggingAA)({
                        location: eo + " auto off",
                        autoTrackExposure: !1
                    }), n.useEffect(() => {
                        X(!0)
                    }, []), (0, a.jsx)(o.AdvancedScrollerAuto, {
                        className: B.scroller,
                        ref: r,
                        children: (0, a.jsxs)("div", {
                            className: B.container,
                            "data-cy": "tier-0-marketing-page",
                            children: [(0, a.jsx)(M.default, {
                                premiumSubscription: Q,
                                className: l(s ? B.fullscreenExistingSubscriberSpacing : B.existingSubscriberSpacing, {
                                    [B.zIndex1]: er
                                }),
                                isFullscreen: s
                            }), s || er ? (0, a.jsx)(L.default, {
                                lifted: !s && er
                            }) : null, !s && et ? (0, a.jsx)(P.default, {
                                localizedPricingPromo: ee,
                                smallGap: !0
                            }) : (0, a.jsx)(u.VisibilitySensor, {
                                onChange: e => W(e),
                                threshold: 0,
                                active: !0,
                                children: (0, a.jsx)(h.default, {
                                    subscriptionTier: $,
                                    isFullscreen: s || er,
                                    className: l({
                                        [B.fullscreenHero]: s,
                                        [B.settingsHeroNoBackground]: !s && er,
                                        [B.trialMarketingMargin]: er,
                                        [B.settingsHeroBogoHeight]: !s && el,
                                        [B.settingsHeroBogoMarginFullscreen]: s && el,
                                        [B.noTopPaddingOverride]: null != Q
                                    })
                                })
                            }), (0, a.jsxs)("div", {
                                className: s ? B.premiumTierCardsContainerFullscreen : B.premiumTierCardsContainerSettings,
                                children: [(0, a.jsx)(m.default, {
                                    isFullscreen: s
                                }), s && et && (0, a.jsx)(g.default, {
                                    localizedPricingPromo: ee
                                }), (0, a.jsx)(u.VisibilitySensor, {
                                    onChange: e => V(e),
                                    threshold: .1,
                                    active: !0,
                                    children: (0, a.jsx)(O.default, {
                                        showWumpus: !0,
                                        tier0CTAButton: en === G.PremiumSubscriptionSKUs.TIER_2 || el || null != es ? (0, a.jsx)(j.default, {
                                            forceInverted: !0,
                                            showIcon: !1,
                                            subscriptionTier: G.PremiumSubscriptionSKUs.TIER_0,
                                            className: B.marginTopForButtons,
                                            look: o.ButtonLooks.OUTLINED,
                                            color: o.ButtonColors.WHITE,
                                            buttonShineClassName: void 0
                                        }) : (0, a.jsx)(j.default, {
                                            forceInverted: !0,
                                            showIcon: !1,
                                            subscriptionTier: G.PremiumSubscriptionSKUs.TIER_0,
                                            className: B.marginTopForButtons
                                        }),
                                        tier2CTAButton: en === G.PremiumSubscriptionSKUs.TIER_0 ? (0, a.jsx)(j.default, {
                                            forceInverted: !0,
                                            showIcon: !1,
                                            subscriptionTier: G.PremiumSubscriptionSKUs.TIER_2,
                                            className: B.marginTopForButtons,
                                            look: o.ButtonLooks.OUTLINED,
                                            color: o.ButtonColors.WHITE,
                                            buttonShineClassName: void 0
                                        }) : (0, a.jsx)(j.default, {
                                            forceInverted: !0,
                                            showIcon: !1,
                                            subscriptionTier: G.PremiumSubscriptionSKUs.TIER_2,
                                            className: B.marginTopForButtons,
                                            isEligibleForBogoPromotion: el
                                        })
                                    })
                                })]
                            }), s && !ei ? (0, a.jsxs)("div", {
                                className: B.whatsNewSection,
                                children: [(0, a.jsx)(v.default, {
                                    variant: v.PerksDiscoverabilityVariants.WHATS_NEW
                                }), (0, a.jsx)(v.default, {}), er ? (0, a.jsx)(U.default, {
                                    className: B.pdSparklesTop,
                                    variant: U.SparkleVariants.TOP
                                }) : null, er ? (0, a.jsx)(U.default, {
                                    className: B.pdSparklesBottom,
                                    variant: U.SparkleVariants.BOTTOM
                                }) : null]
                            }) : null, (0, a.jsx)(x.default, {
                                className: s ? B.perkCardsContainerSpacingFullscreen : B.perkCardsContainerSpacingSettings
                            }), (0, a.jsxs)("div", {
                                className: B.planComparisonTableContainer,
                                children: [(0, a.jsx)(b.default, {
                                    className: B.planComparisonTable,
                                    hideCTAs: !0
                                }), s ? (0, a.jsxs)(a.Fragment, {
                                    children: [(0, a.jsx)(I.default, {
                                        src: H,
                                        className: B.tableLeftSideDecoration,
                                        width: 197,
                                        height: 486,
                                        zoomable: !1
                                    }), (0, a.jsx)(I.default, {
                                        src: K,
                                        className: B.tableRightSideDecoration,
                                        width: 241,
                                        height: 552,
                                        zoomable: !1
                                    })]
                                }) : null]
                            }), (0, a.jsx)("div", {
                                className: s ? B.footerSpacingFullscreen : B.footerSpacing
                            }), (0, a.jsx)(D.default, {
                                isVisible: !F && !w && Z,
                                isFullscreen: s,
                                subscriptionTier: $
                            }), (0, a.jsx)(u.VisibilitySensor, {
                                onChange: e => {
                                    e && !Y && (f.default.track(y.AnalyticEvents.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                                        location_stack: eu
                                    }), z(!0))
                                },
                                children: (0, a.jsx)("div", {
                                    className: B.bottomOfPageVisibilitySensor
                                })
                            }), (0, a.jsx)(I.default, {
                                src: k,
                                className: B.bottomIllustration,
                                width: 112,
                                height: 85,
                                zoomable: !1
                            })]
                        })
                    })
                }