            "use strict";
            n.r(t), n.d(t, {
                usePrivateChannelIntegrationState: function() {
                    return o
                }
            }), n("222007");
            var i = n("884691"),
                a = n("446674"),
                l = n("201155"),
                r = n("21121"),
                s = n("970755"),
                u = n("140596");

            function o(e) {
                let {
                    channelId: t
                } = e;
                (0, r.useInMainTabsExperiment)();
                let n = (0, l.useShowApplicationInGDM)(t),
                    {
                        installedIntegrations: o,
                        applicationsShelf: d,
                        integrationsFetchState: c,
                        applicationsShelfFetchState: E
                    } = (0, a.useStateFromStoresObject)([u.default], () => ({
                        installedIntegrations: u.default.getIntegrations(t),
                        applicationsShelf: u.default.getApplicationsShelf(),
                        integrationsFetchState: u.default.getIntegrationsFetchState(t),
                        applicationsShelfFetchState: u.default.getApplicationsShelfFetchState()
                    }));
                i.useEffect(() => {
                    n && ((c === u.FetchState.NOT_FETCHED || c === u.FetchState.FETCH_FAILED) && (0, s.fetchPrivateChannelIntegrations)(t), (E === u.FetchState.NOT_FETCHED || E === u.FetchState.FETCH_FAILED) && (0, s.fetchApplicationsShelf)())
                }, [n, t, c, E]);
                let _ = new Set(o.map(e => e.application.id)),
                    I = d.filter(e => !_.has(e.id));
                return {
                    installedIntegrations: o,
                    availableApplications: I,
                    applicationsShelf: d,
                    fetched: c !== u.FetchState.NOT_FETCHED && c !== u.FetchState.FETCHING && E !== u.FetchState.NOT_FETCHED && E !== u.FetchState.FETCHING,
                    appsInGDMEnabled: n
                }
            }