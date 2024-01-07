            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return u
                }
            }), l("222007");
            var a = l("884691"),
                s = l("65597"),
                r = l("875212"),
                n = l("21526"),
                o = l("853987"),
                i = l("775416");

            function u() {
                var e;
                let t = "useFetchCollectiblesCategoriesAndPurchases";
                (0, r.useTriggerDebuggingAA)({
                    location: t + " auto on",
                    autoTrackExposure: !0
                }), (0, r.useTriggerDebuggingAA)({
                    location: t + " auto off",
                    autoTrackExposure: !1
                });
                let {
                    isFetching: l,
                    categories: u,
                    error: c
                } = function() {
                    let e = "useMaybeFetchCollectiblesCategories";
                    (0, r.useTriggerDebuggingAA)({
                        location: e + " auto on",
                        autoTrackExposure: !0
                    }), (0, r.useTriggerDebuggingAA)({
                        location: e + " auto off",
                        autoTrackExposure: !1
                    });
                    let [t, l, i, u] = (0, s.useStateFromStoresArray)([o.default], () => {
                        var e;
                        return [o.default.isFetching, o.default.error, null !== (e = o.default.lastFetched) && void 0 !== e ? e : 0, o.default.categories]
                    });
                    return (0, a.useEffect)(() => {
                        !(t || l || Date.now() - i < 6e5) && (0, n.fetchCollectiblesCategories)()
                    }, [t, i, l]), {
                        isFetching: t,
                        categories: u,
                        error: l
                    }
                }(), {
                    isClaiming: d,
                    fetchError: f,
                    claimError: C,
                    isFetching: m,
                    purchases: E
                } = function() {
                    let e = "useFetchPurchases";
                    (0, r.useTriggerDebuggingAA)({
                        location: e + " auto on",
                        autoTrackExposure: !0
                    }), (0, r.useTriggerDebuggingAA)({
                        location: e + " auto off",
                        autoTrackExposure: !1
                    });
                    let [t, l, o, u, c] = (0, s.useStateFromStoresArray)([i.default], () => [i.default.isFetching, i.default.isClaiming, i.default.fetchError, i.default.claimError, i.default.purchases]);
                    return (0, a.useEffect)(() => {
                        (0, n.fetchCollectiblesPurchases)()
                    }, []), {
                        isClaiming: l,
                        fetchError: o,
                        claimError: u,
                        isFetching: t,
                        purchases: c
                    }
                }(), p = null !== (e = null != c ? c : f) && void 0 !== e ? e : C;
                return {
                    isFetching: l || m,
                    isFetchingCategories: l,
                    isFetchingPurchases: m,
                    isClaiming: d,
                    categories: u,
                    purchases: E,
                    error: p
                }
            }