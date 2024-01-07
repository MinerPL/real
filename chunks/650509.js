            "use strict";
            n.r(e), n.d(e, {
                LoadState: function() {
                    return u
                },
                useFetchListingsForApplication: function() {
                    return N
                },
                useFetchEntitlementsForGuild: function() {
                    return R
                },
                useSubscriptionListingsForGroup: function() {
                    return L
                },
                useActiveSubscriptionListingForApplication: function() {
                    return O
                },
                useUnseenEndedApplicationSubscriptionEntitlements: function() {
                    return h
                },
                useFetchListingsForSubscriptions: function() {
                    return m
                },
                useFetchUserApplicationSubscriptionEntitlements: function() {
                    return y
                },
                useApplication: function() {
                    return g
                },
                default: function() {
                    return G
                },
                useEligibleApplicationSubscriptionGuilds: function() {
                    return D
                }
            }), n("424973"), n("222007");
            var u, i, r = n("884691"),
                l = n("446674"),
                a = n("316718"),
                o = n("598981"),
                s = n("299285"),
                c = n("305961"),
                S = n("957255"),
                d = n("10514"),
                E = n("521012"),
                f = n("437712"),
                _ = n("552712"),
                T = n("479952"),
                I = n("524503"),
                A = n("104449"),
                p = n("186211"),
                C = n("90592"),
                P = n("49111");
            (i = u || (u = {}))[i.NOT_LOADED = 0] = "NOT_LOADED", i[i.LOADING = 1] = "LOADING", i[i.LOADED = 2] = "LOADED", i[i.ERROR = 3] = "ERROR";
            let N = function(t, e) {
                    let {
                        refetchOnMount: n = !1
                    } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, u = (0, l.useStateFromStores)([p.default], () => null != t ? p.default.getSubscriptionGroupListingsForApplicationFetchState(t) : p.FetchState.FETCHED, [t]);
                    return r.useEffect(() => {
                        if (null == t || null == e) return;
                        let u = p.default.getSubscriptionGroupListingsForApplicationFetchState(t);
                        (n || u === p.FetchState.NOT_FETCHED) && (0, I.fetchAllSubscriptionListingsDataForApplication)(t, e)
                    }, [t, e, n]), {
                        listingsLoaded: u === p.FetchState.FETCHED
                    }
                },
                R = t => {
                    let {
                        guildId: e,
                        canFetch: n = !0,
                        forceRefetch: u = !1
                    } = t, i = (0, l.useStateFromStores)([p.default], () => null != e ? p.default.getEntitlementsForGuildFetchState(e) : null, [e]);
                    return r.useEffect(() => {
                        if (null == e || e === P.ME) return;
                        let t = p.default.getEntitlementsForGuildFetchState(e);
                        n && (t === p.FetchState.NOT_FETCHED || u) && (0, I.fetchEntitlementsForGuild)(e)
                    }, [e, n, u]), {
                        entitlementsLoaded: i === p.FetchState.FETCHED
                    }
                },
                U = t => {
                    let {
                        applicationId: e,
                        canFetch: n = !0,
                        forceRefetch: u = !1,
                        loggedIn: i
                    } = t, o = (0, l.useStateFromStores)([f.default], () => f.default.isFetchedForApplication(e), [e]);
                    return r.useEffect(() => {
                        if (i) {
                            let t = f.default.isFetchingForApplication(e),
                                i = n && !t && !o || u;
                            i && (0, a.fetchUserEntitlements)({
                                entitlementType: P.EntitlementTypes.APPLICATION_SUBSCRIPTION
                            })
                        }
                    }, [e, n, o, u, i]), {
                        entitlementsLoaded: o
                    }
                },
                L = function(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        includeSoftDeleted: !1
                    };
                    return (0, l.useStateFromStoresArray)([p.default], () => {
                        if (null == t) return [];
                        let n = p.default.getSubscriptionGroupListing(t);
                        if (null == n) return [];
                        let u = [];
                        for (let t of n.subscription_listings_ids) {
                            let n = p.default.getSubscriptionListing(t);
                            if (null != n)(!n.soft_deleted || e.includeSoftDeleted) && u.push(n)
                        }
                        return u
                    }, [t, e.includeSoftDeleted])
                },
                M = [],
                F = [];

            function O(t, e) {
                let n = (0, l.useStateFromStores)([E.default], () => E.default.getSubscriptions()),
                    {
                        subscriptionGroupListing: u,
                        guildEntitlements: i,
                        userEntitlements: a
                    } = (0, l.useStateFromStoresObject)([p.default, f.default], () => {
                        var n, u;
                        return {
                            subscriptionGroupListing: null != t ? p.default.getSubscriptionGroupListingForApplication(t) : null,
                            guildEntitlements: null != t && null != e ? p.default.getApplicationEntitlementsForGuild(t, e) : M,
                            userEntitlements: null != t && null !== (u = null === (n = f.default.getForApplication(t)) || void 0 === n ? void 0 : n.values()) && void 0 !== u ? u : F
                        }
                    }, [t, e]),
                    o = r.useMemo(() => [...i, ...a], [i, a]),
                    s = null == u ? void 0 : u.subscription_listings,
                    {
                        activeSubscriptionListing: c,
                        activeEntitlement: S
                    } = r.useMemo(() => {
                        if (null != s) {
                            for (let t of o)
                                for (let n of s)
                                    if ((0, C.isListingActiveInGuild)(n, t, e)) return {
                                        activeSubscriptionListing: n,
                                        activeEntitlement: t
                                    }
                        }
                        return {
                            activeSubscriptionListing: null,
                            activeEntitlement: null
                        }
                    }, [o, s, e]),
                    d = r.useMemo(() => {
                        if (null == n) return null;
                        let t = null == c ? void 0 : c.subscription_plans[0].id;
                        for (let e of Object.values(n))
                            if (e.type === P.SubscriptionTypes.APPLICATION) {
                                let n = e.items[0].planId;
                                if (n === t) return e
                            } return null
                    }, [c, n]);
                return {
                    activeSubscription: d,
                    activeSubscriptionListing: c,
                    activeEntitlement: S,
                    subscriptionGroupListing: u
                }
            }

            function h(t) {
                var e;
                let n = null !== (e = null == t ? void 0 : t.id) && void 0 !== e ? e : "",
                    u = (0, l.useStateFromStores)([S.default], () => S.default.can(P.Permissions.ADMINISTRATOR, t)),
                    {
                        entitlementsLoaded: i
                    } = R({
                        guildId: n,
                        canFetch: u
                    }),
                    a = (0, l.useStateFromStores)([T.default], () => T.default.getLastGuildDismissedTime(n)),
                    o = (0, l.useStateFromStoresArray)([p.default], () => {
                        let t = p.default.getEntitlementsForGuild(n),
                            e = p.default.getEntitlementsForGuild(n, !1),
                            u = t.map(t => t.applicationId);
                        return e.filter(t => !u.includes(t.applicationId))
                    }),
                    s = (0, l.useStateFromStores)([_.default], () => _.default.getSKUs()),
                    c = r.useMemo(() => o.filter(t => {
                        let e = s[t.skuId];
                        return null != e && e.available
                    }), [o, s]);
                return i ? c.filter(t => null != t.endsAt && t.endsAt.getTime() > Math.max(null != a ? a : 0, Date.now() - 2592e6)) : []
            }
            let m = t => {
                    let [e, n] = r.useState(!1), u = r.useMemo(() => t.map(C.getApplicationSubscriptionPlanId), [t]), i = (0, l.useStateFromStoresArray)([d.default], () => u.filter(t => null == d.default.get(t)), [u]);
                    return r.useEffect(() => {
                        i.length > 0 && (n(!0), Promise.all(i.map(t => (0, I.fetchSubscriptionListingForPlan)(t))).catch(() => {}).then(() => {
                            n(!1)
                        }))
                    }, [i]), {
                        loading: e
                    }
                },
                y = () => {
                    let [t, e] = r.useState(0);
                    return r.useEffect(() => {
                        e(1), (0, a.fetchUserEntitlements)({
                            withSku: !0,
                            withApplication: !0,
                            entitlementType: P.EntitlementTypes.APPLICATION_SUBSCRIPTION
                        }).catch(() => {
                            e(3)
                        }).then(() => {
                            e(2)
                        })
                    }, []), {
                        loadState: t
                    }
                },
                g = t => {
                    let e = (0, o.default)(),
                        n = (0, l.useStateFromStores)([s.default], () => null != t ? s.default.getApplication(t) : null, [t]),
                        u = null != n;
                    return r.useEffect(() => {
                        !u && null != t && e && (0, A.fetchApplication)(t)
                    }, [u, t, e]), n
                };

            function G(t) {
                let {
                    applicationId: e,
                    groupListingId: n,
                    guildId: u
                } = t, i = (0, o.default)(), {
                    listingsLoaded: r
                } = N(e, n), {
                    entitlementsLoaded: l
                } = R({
                    guildId: u
                }), {
                    entitlementsLoaded: a
                } = U({
                    applicationId: e,
                    loggedIn: i
                }), {
                    subscriptionGroupListing: s
                } = O(e, u);
                return {
                    applicationSubscriptionListingsShown: null != e && null != n && (null == u || l) && (!i || a) && r && null != s && (0, C.hasPayableSubscriptionPlan)(s)
                }
            }

            function D(t, e) {
                let n = (0, l.useStateFromStores)([c.default], () => c.default.isLoaded()),
                    [u, i] = r.useState([]);
                return r.useEffect(() => {
                    null == e && null != t && n && (0, A.fetchEligibleApplicationSubscriptionGuilds)(t).then(t => {
                        let e = t.map(t => c.default.getGuild(t)).filter(t => null != t);
                        i(e)
                    })
                }, [t, e, n]), u
            }