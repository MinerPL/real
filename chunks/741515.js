            "use strict";
            n.r(t), n.d(t, {
                usePriceTiers: function() {
                    return s
                },
                useMonetizationSettings: function() {
                    return a
                }
            });
            var r = n("884691"),
                i = n("446674"),
                u = n("837008"),
                l = n("763913"),
                o = n("670535");

            function s(e, t) {
                let n = (0, i.useStateFromStores)([o.default], () => o.default.getPriceTiersForGuildAndType(e, t)),
                    u = (0, i.useStateFromStores)([o.default], () => o.default.getPriceTiersFetchStateForGuildAndType(e, t));
                return r.useEffect(() => {
                    u === o.FetchState.NOT_FETCHED && (0, l.fetchPriceTiers)(e, t)
                }, [e, u, t]), {
                    loading: u === o.FetchState.FETCHING,
                    priceTiers: n
                }
            }

            function a(e) {
                let {
                    fetchSubscriptionsSettings: t,
                    loading: n,
                    error: i
                } = (0, u.useFetchSubscriptionsSettings)();
                r.useEffect(() => {
                    t(e)
                }, [t, e]);
                let l = (0, u.useSubscriptionsSettings)(e);
                return {
                    loaded: null != l && !n,
                    subscriptionsSettings: l,
                    loading: n,
                    error: i
                }
            }