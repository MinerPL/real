            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            }), n("222007");
            var l = n("884691"),
                i = n("446674"),
                r = n("189293"),
                s = n("845962"),
                a = n("235898");

            function o() {
                let {
                    isFetching: e,
                    error: t,
                    categories: n,
                    purchases: o
                } = (0, a.default)(), [c, u, d] = (0, i.useStateFromStoresArray)([s.default], () => [s.default.isFetching, s.default.fetchError, s.default.profileEffects]);
                return (0, l.useEffect)(() => {
                    (0, r.fetchUserProfileEffects)()
                }, []), {
                    isFetching: e || c,
                    error: null != t ? t : u,
                    profileEffects: d,
                    categories: n,
                    purchases: o
                }
            }