            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return y
                }
            }), s("222007");
            var a = s("37983"),
                n = s("884691"),
                r = s("414456"),
                l = s.n(r),
                i = s("446674"),
                u = s("77078"),
                o = s("913144"),
                d = s("850068"),
                c = s("583367"),
                _ = s("775433"),
                E = s("642950"),
                I = s("812204"),
                T = s("685665"),
                f = s("619935"),
                S = s("308592"),
                R = s("245187"),
                p = s("102985"),
                m = s("697218"),
                N = s("521012"),
                A = s("599110"),
                g = s("764364"),
                P = s("446488"),
                C = s("456015"),
                O = s("982457"),
                M = s("300962"),
                L = s("781084"),
                h = s("959905"),
                x = s("154889"),
                v = s("917247"),
                U = s("254893"),
                D = s("840326"),
                b = s("646718"),
                j = s("49111"),
                G = s("265921"),
                y = function(e) {
                    let {
                        entrypoint: t = b.PremiumMarketingEntrypoints.UserSettings
                    } = e, s = (0, f.useBlockedPaymentsConfig)(), {
                        AnalyticsLocationProvider: r,
                        sourceAnalyticsLocations: y
                    } = (0, T.default)(I.default.PREMIUM_MARKETING), {
                        enabled: B
                    } = (0, M.default)(), k = (0, i.useStateFromStores)([N.default], () => N.default.hasFetchedSubscriptions()), H = (0, i.useStateFromStores)([m.default], () => m.default.getCurrentUser()), K = (0, v.usePremiumTrialOffer)(), F = (0, x.usePremiumDiscountOffer)(), W = (0, S.useSubscriptionPlansLoaded)(), [w, V] = n.useState(!0), Y = n.useRef(0), z = (0, g.isPremiumExactly)(H, b.PremiumTypes.TIER_2), Z = (0, h.useLocalizedPromoQuery)(), X = null == Z ? void 0 : Z.countryCode, Q = (0, i.useStateFromStores)([P.default], () => P.default.hasFetched);
                    n.useEffect(() => {
                        !Q && d.getNitroAffinity()
                    }, [Q]), n.useEffect(() => {
                        o.default.wait(async () => {
                            let e = Date.now();
                            await Promise.all([d.fetchSubscriptions(), (0, c.fetchGuildBoostSlots)(), d.fetchPaymentSources(), (0, _.fetchPremiumSubscriptionPlans)(X, null, j.RevenueSurfaces.DISCOVERY)]), Y.current = Date.now() - e, V(!1)
                        })
                    }, [X]), n.useEffect(() => {
                        if (s && (null != K || null != F)) {
                            let {
                                enabled: e
                            } = L.default.getCurrentConfig({
                                location: "PremiumMarketingPage"
                            }, {
                                autoTrackExposure: !1
                            });
                            e ? (0, C.acknowledgeUserOffer)(K, F) : null != K && null == K.expires_at && O.default.acknowledgeUserTrialOffer(K)
                        }
                    }, [s, K, F]), n.useEffect(() => {
                        !w && A.default.track(j.AnalyticEvents.PREMIUM_MARKETING_PAGE_VIEWED, {
                            location_stack: y,
                            load_duration_ms: Y.current
                        })
                    }, [y, w]);
                    let J = (0, i.useStateFromStores)([p.default], () => p.default.enabled);
                    if (J) return (0, a.jsx)(E.default, {});
                    if (s) return (0, a.jsx)(R.BlockedPaymentsContentSettings, {});
                    let q = t === b.PremiumMarketingEntrypoints.ApplicationStoreHome;
                    return q && z && !B ? (0, a.jsx)(r, {
                        children: (0, a.jsx)(D.default, {})
                    }) : k && W && !w ? (0, a.jsx)(r, {
                        children: (0, a.jsx)(U.default, {
                            entrypoint: t
                        })
                    }) : (0, a.jsx)("div", {
                        className: l(G.container, G.loading),
                        children: (0, a.jsx)(u.Spinner, {})
                    })
                }