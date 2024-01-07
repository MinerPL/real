            "use strict";
            n.r(t), n.d(t, {
                useFetchDeveloperActivityShelfItems: function() {
                    return r
                }
            }), n("222007");
            var s = n("884691"),
                i = n("446674"),
                a = n("84460"),
                l = n("550766"),
                u = n("126939");

            function r() {
                let e = (0, u.useIsActivitiesEnabledForCurrentPlatform)(),
                    [t, n] = (0, i.useStateFromStoresArray)([a.default], () => [a.default.getIsEnabled(), a.default.getFetchState()], []);
                return s.useEffect(() => {
                    e && t && null == n && (0, l.fetchDeveloperApplications)()
                }, [e, t, n]), null
            }