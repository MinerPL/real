            "use strict";
            n.r(t), n.d(t, {
                usePrivateChannelIntegrationState: function() {
                    return c
                }
            }), n("222007");
            var l = n("884691"),
                i = n("446674"),
                r = n("201155"),
                s = n("21121"),
                a = n("970755"),
                o = n("140596");

            function c(e) {
                let {
                    channelId: t
                } = e;
                (0, s.useInMainTabsExperiment)();
                let n = (0, r.useShowApplicationInGDM)(t),
                    {
                        installedIntegrations: c,
                        applicationsShelf: u,
                        integrationsFetchState: d,
                        applicationsShelfFetchState: f
                    } = (0, i.useStateFromStoresObject)([o.default], () => ({
                        installedIntegrations: o.default.getIntegrations(t),
                        applicationsShelf: o.default.getApplicationsShelf(),
                        integrationsFetchState: o.default.getIntegrationsFetchState(t),
                        applicationsShelfFetchState: o.default.getApplicationsShelfFetchState()
                    }));
                l.useEffect(() => {
                    n && ((d === o.FetchState.NOT_FETCHED || d === o.FetchState.FETCH_FAILED) && (0, a.fetchPrivateChannelIntegrations)(t), (f === o.FetchState.NOT_FETCHED || f === o.FetchState.FETCH_FAILED) && (0, a.fetchApplicationsShelf)())
                }, [n, t, d, f]);
                let h = new Set(c.map(e => e.application.id)),
                    C = u.filter(e => !h.has(e.id));
                return {
                    installedIntegrations: c,
                    availableApplications: C,
                    applicationsShelf: u,
                    fetched: d !== o.FetchState.NOT_FETCHED && d !== o.FetchState.FETCHING && f !== o.FetchState.NOT_FETCHED && f !== o.FetchState.FETCHING,
                    appsInGDMEnabled: n
                }
            }