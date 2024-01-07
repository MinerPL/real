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
                u = s("235855"),
                o = s("77078"),
                d = s("913144"),
                c = s("850068"),
                _ = s("583367"),
                E = s("775433"),
                I = s("642950"),
                T = s("812204"),
                f = s("685665"),
                S = s("619935"),
                R = s("308592"),
                p = s("245187"),
                m = s("102985"),
                N = s("697218"),
                A = s("521012"),
                g = s("599110"),
                P = s("764364"),
                C = s("446488"),
                O = s("456015"),
                M = s("982457"),
                L = s("300962"),
                h = s("781084"),
                x = s("959905"),
                v = s("154889"),
                U = s("917247"),
                D = s("254893"),
                j = s("840326"),
                b = s("646718"),
                G = s("49111"),
                y = s("265921"),
                B = function(e) {
                    let {
                        entrypoint: t = b.PremiumMarketingEntrypoints.UserSettings
                    } = e, s = (0, S.useBlockedPaymentsConfig)(), {
                        AnalyticsLocationProvider: r,
                        sourceAnalyticsLocations: B,
                        analyticsLocations: k
                    } = (0, f.default)(T.default.PREMIUM_MARKETING), {
                        enabled: H
                    } = (0, L.default)(), K = (0, i.useStateFromStores)([A.default], () => A.default.hasFetchedSubscriptions()), F = (0, i.useStateFromStores)([N.default], () => N.default.getCurrentUser()), W = (0, U.usePremiumTrialOffer)(), w = (0, v.usePremiumDiscountOffer)(), V = (0, R.useSubscriptionPlansLoaded)(), [Y, z] = n.useState(!0), Z = n.useRef(0), X = (0, P.isPremiumExactly)(F, b.PremiumTypes.TIER_2), Q = (0, x.useLocalizedPromoQuery)(), J = null == Q ? void 0 : Q.countryCode, q = (0, i.useStateFromStores)([C.default], () => C.default.hasFetched);
                    n.useEffect(() => {
                        !q && c.getNitroAffinity()
                    }, [q]), n.useEffect(() => {
                        d.default.wait(async () => {
                            let e = Date.now();
                            await Promise.all([c.fetchSubscriptions(), (0, _.fetchGuildBoostSlots)(), c.fetchPaymentSources(), (0, E.fetchPremiumSubscriptionPlans)(J, null, G.RevenueSurfaces.DISCOVERY)]), Z.current = Date.now() - e, z(!1)
                        })
                    }, [J]), n.useEffect(() => {
                        if (s && (null != W || null != w)) {
                            let {
                                enabled: e
                            } = h.default.getCurrentConfig({
                                location: "PremiumMarketingPage"
                            }, {
                                autoTrackExposure: !1
                            });
                            e ? (0, O.acknowledgeUserOffer)(W, w) : null != W && null == W.expires_at && M.default.acknowledgeUserTrialOffer(W)
                        }
                    }, [s, W, w]), n.useEffect(() => {
                        !Y && g.default.track(G.AnalyticEvents.PREMIUM_MARKETING_PAGE_VIEWED, {
                            location_stack: B,
                            load_duration_ms: Z.current
                        })
                    }, [B, Y]);
                    let [$, ee] = n.useState(!1), et = (0, i.useStateFromStores)([m.default], () => m.default.enabled);
                    if (et) return (0, a.jsx)(I.default, {});
                    if (s) return (0, a.jsx)(p.BlockedPaymentsContentSettings, {});
                    let es = t === b.PremiumMarketingEntrypoints.ApplicationStoreHome;
                    return es && X && !H ? (0, a.jsx)(r, {
                        children: (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(j.default, {}), (0, a.jsx)(u.default, {
                                onChange: e => {
                                    e && !$ && (g.default.track(G.AnalyticEvents.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                                        location_stack: k
                                    }), ee(!0))
                                },
                                children: (0, a.jsx)("div", {
                                    className: y.bottomOfPageVisibilitySensor
                                })
                            })]
                        })
                    }) : K && V && !Y ? (0, a.jsx)(r, {
                        children: (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(D.default, {
                                entrypoint: t
                            }), (0, a.jsx)(u.default, {
                                onChange: e => {
                                    e && !$ && (g.default.track(G.AnalyticEvents.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                                        location_stack: k
                                    }), ee(!0))
                                },
                                children: (0, a.jsx)("div", {
                                    className: y.bottomOfPageVisibilitySensor
                                })
                            })]
                        })
                    }) : (0, a.jsx)("div", {
                        className: l(y.container, y.loading),
                        children: (0, a.jsx)(o.Spinner, {})
                    })
                }