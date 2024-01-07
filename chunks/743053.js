            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return Z
                }
            }), s("222007");
            var a = s("37983"),
                n = s("884691"),
                l = s("414456"),
                i = s.n(l),
                r = s("866227"),
                o = s.n(r),
                d = s("446674"),
                u = s("235855"),
                c = s("819855"),
                S = s("77078"),
                E = s("913144"),
                f = s("850068"),
                m = s("54239"),
                T = s("775433"),
                _ = s("79112"),
                g = s("642950"),
                h = s("875212"),
                I = s("841098"),
                N = s("812204"),
                p = s("685665"),
                C = s("619935"),
                A = s("308592"),
                O = s("245187"),
                x = s("393414"),
                M = s("102985"),
                R = s("521012"),
                v = s("90404"),
                L = s("41250"),
                D = s("599110"),
                P = s("719923"),
                j = s("182650"),
                b = s("53253"),
                U = s("300962"),
                y = s("959905"),
                B = s("635956"),
                F = s("400307"),
                G = s("992118"),
                k = s("525505"),
                w = s("646718"),
                H = s("49111"),
                V = s("782340"),
                Y = s("23876"),
                W = s("12483"),
                K = s("391590"),
                z = s("435021");

            function Q() {
                let e = (0, d.useStateFromStores)([R.default], () => R.default.getPremiumTypeSubscription()),
                    t = (0, j.useHasDiscountApplied)(),
                    s = (0, I.default)(),
                    {
                        enabled: n
                    } = (0, U.default)();
                if (null == e || null == e.planIdFromItems) return null;
                let l = null != e.trialId,
                    r = t || l,
                    u = null != e.trialEndsAt ? o(e.trialEndsAt).diff(o(), "d") : 0,
                    E = w.SubscriptionPlanInfo[e.planIdFromItems],
                    f = P.default.formatPriceString(P.default.getDefaultPrice(E.id), E.interval);
                return (0, a.jsxs)("div", {
                    className: i(Y.tierCard, {
                        [Y.withTier2Rim]: r
                    }),
                    children: [(0, a.jsxs)("div", {
                        className: Y.tierInfo,
                        children: [(0, a.jsx)(L.default, {
                            className: i(Y.tierTitle)
                        }), r ? (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(F.PremiumPillWithSparkles, {
                                text: l ? V.default.Messages.PREMIUM_TIER_CARD_TRIAL_ACTIVATED : V.default.Messages.PREMIUM_TIER_CARD_DISCOUNT_APPLIED,
                                className: Y.topRimPill,
                                colorOptions: (0, c.isThemeDark)(s) ? F.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_WHITE_FILL : F.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_OLD_GRADIENT_FILL
                            }), (0, a.jsx)("div", {
                                className: Y.rimGlowTier2
                            }), (0, a.jsx)(S.Heading, {
                                variant: "heading-md/normal",
                                color: "always-white",
                                className: Y.trialHeader,
                                children: l ? V.default.Messages.PREMIUM_TIER_CARD_TRIAL_HEADER_AFTER_REDEMPTION.format({
                                    remainingTime: u,
                                    price: f
                                }) : V.default.Messages.PREMIUM_TIER_CARD_DISCOUNT_HEADER_AFTER_REDEMPTION.format({
                                    percent: 30,
                                    regularPrice: f
                                })
                            })]
                        }) : (0, a.jsx)(G.default, {
                            subscriptionTier: w.PremiumSubscriptionSKUs.TIER_2
                        }), (0, a.jsx)(F.Tier2FeatureItems, {}), n ? null : (0, a.jsx)(S.Button, {
                            className: Y.tierCardButton,
                            color: S.Button.Colors.WHITE,
                            onClick: () => {
                                D.default.track(H.AnalyticEvents.PREMIUM_SETTINGS_INTERACTED, {
                                    cta_type: "to_premium_home_button",
                                    target: "premium home page"
                                }), (0, m.popLayer)(), (0, x.transitionTo)(H.Routes.APPLICATION_STORE)
                            },
                            children: (0, a.jsx)(S.Text, {
                                className: Y.tierCardButtonCTA,
                                variant: "text-sm/medium",
                                children: V.default.Messages.PREMIUM_SETTINGS_NAVIGATE_TO_HOME_CTA_V2
                            })
                        }), (0, a.jsx)(S.Button, {
                            className: Y.managePlanButton,
                            look: S.Button.Looks.OUTLINED,
                            color: S.Button.Colors.WHITE,
                            onClick: () => {
                                D.default.track(H.AnalyticEvents.PREMIUM_SETTINGS_INTERACTED, {
                                    cta_type: "to_subscriptions_button",
                                    target: "subscriptions settings"
                                }), _.default.open(H.UserSettingsSections.SUBSCRIPTIONS)
                            },
                            children: (0, a.jsx)(S.Text, {
                                className: Y.managePlanButtonCTA,
                                variant: "text-sm/medium",
                                color: "always-white",
                                children: V.default.Messages.PREMIUM_SETTINGS_NATIGATE_TO_SUBSCRIPTIONS_CTA
                            })
                        })]
                    }), (0, a.jsx)("div", {
                        className: Y.tierImage,
                        children: (0, a.jsx)("img", {
                            className: Y.tierImage,
                            alt: "",
                            src: W
                        })
                    })]
                })
            }

            function q() {
                let e = (0, b.useIsSeasonalGiftingActive)(),
                    {
                        enabled: t
                    } = b.SeasonalGiftingMarketingExperiment.useExperiment({
                        location: "GiftNitro"
                    }, {
                        autoTrackExposure: e
                    }),
                    s = t && e;
                return (0, a.jsxs)("div", {
                    className: i(Y.giftCard, {
                        [Y.giftCardSeasonal]: s
                    }),
                    children: [s && (0, a.jsx)("img", {
                        className: Y.seasonalGiftImage,
                        alt: "",
                        src: K
                    }), (0, a.jsx)("img", {
                        className: Y.giftImage,
                        style: {
                            visibility: s ? "hidden" : "visible"
                        },
                        alt: "",
                        src: z
                    }), (0, a.jsxs)("div", {
                        className: Y.giftInfo,
                        children: [(0, a.jsx)(S.Heading, {
                            className: i(Y.giftTitle, {
                                [Y.seasonalColor]: s
                            }),
                            variant: "heading-xl/extrabold",
                            children: s ? V.default.Messages.PREMIUM_TRIAL_MARKETING_EXPERIMENT_SEASONAL_GIFT_HEADING : V.default.Messages.PREMIUM_TRIAL_MARKETING_EXPERIMENT_GIFT_HEADING
                        }), (0, a.jsx)(S.Text, {
                            className: i(Y.giftText, {
                                [Y.seasonalColor]: s
                            }),
                            variant: "text-sm/normal",
                            children: s ? V.default.Messages.PREMIUM_TRIAL_MARKETING_EXPERIMENT_SEASONAL_GIFT_BODY : V.default.Messages.PREMIUM_TRIAL_MARKETING_EXPERIMENT_GIFT_BODY
                        }), (0, a.jsx)(B.default, {
                            isGift: !0,
                            className: i(Y.giftCardButton, s ? Y.seasonalColor : Y.giftCardButtonColor),
                            look: S.Button.Looks.OUTLINED,
                            buttonText: V.default.Messages.GIFT_NITRO,
                            buttonTextClassName: Y.giftButtonCTA,
                            color: S.Button.Colors.CUSTOM,
                            onClick: () => {
                                D.default.track(H.AnalyticEvents.PREMIUM_SETTINGS_INTERACTED, {
                                    cta_type: "gifting_button",
                                    target: "payment modal"
                                })
                            }
                        })]
                    })]
                })
            }
            var Z = function() {
                let e = (0, C.useBlockedPaymentsConfig)(),
                    {
                        AnalyticsLocationProvider: t,
                        analyticsLocations: s
                    } = (0, p.default)(N.default.PREMIUM_SETTINGS),
                    l = (0, d.useStateFromStores)([R.default], () => R.default.getPremiumTypeSubscription()),
                    i = (0, d.useStateFromStores)([R.default], () => R.default.hasFetchedSubscriptions()),
                    r = (0, A.useSubscriptionPlansLoaded)(),
                    [o, c] = n.useState(!0),
                    m = (0, y.useLocalizedPromoQuery)(),
                    _ = null == m ? void 0 : m.countryCode,
                    I = (0, d.useStateFromStores)([M.default], () => M.default.enabled),
                    x = "PremiumManagementSettings";
                (0, h.useTriggerDebuggingAA)({
                    location: x + " auto on",
                    autoTrackExposure: !0
                }), (0, h.useTriggerDebuggingAA)({
                    location: x + " auto off",
                    autoTrackExposure: !1
                }), n.useEffect(() => {
                    E.default.wait(async () => {
                        !I && !e && await Promise.all([f.fetchSubscriptions(), f.fetchPaymentSources(), (0, T.fetchPremiumSubscriptionPlans)(_, null, H.RevenueSurfaces.DISCOVERY)]), c(!1)
                    })
                }, [_, I, e]);
                let [L, P] = n.useState(!1);
                if (I) return (0, a.jsx)(g.default, {});
                if (e) return (0, a.jsx)(O.BlockedPaymentsContentSettings, {});
                if ((!i || null == l || !r) && !o) return (0, a.jsx)(v.default, {
                    title: V.default.Messages.REDIRECTED_CALLBACK_ERROR,
                    note: null
                });
                if (!i || null == l || !r || o) return (0, a.jsx)(S.Spinner, {});
                let j = null != l.trialId;
                return (0, a.jsx)(t, {
                    children: (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsxs)("div", {
                            className: Y.container,
                            children: [(0, a.jsx)(Q, {}), (0, a.jsx)(q, {}), (0, a.jsx)(k.default, {
                                className: Y.planComparisonTable,
                                hideCTAs: !0,
                                headingOverride: V.default.Messages.PREMIUM_COMPARISON_TABLE_WHAT_YOU_HAVE_GOT_TITLE,
                                hidePill: !j,
                                selectedPlanColumnClassName: Y.tier2PlanComparisonTableBackground,
                                selectedPlanTier: w.PremiumTypes.TIER_2
                            })]
                        }), (0, a.jsx)(u.default, {
                            onChange: e => {
                                e && !L && (D.default.track(H.AnalyticEvents.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                                    location_stack: s
                                }), P(!0))
                            },
                            children: (0, a.jsx)("div", {
                                className: Y.bottomOfPageVisibilitySensor
                            })
                        })]
                    })
                })
            }