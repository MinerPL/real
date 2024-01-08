            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var r = n("884691"),
                i = n("446674"),
                o = n("913144"),
                u = n("850068"),
                a = n("271938"),
                s = n("160299"),
                l = n("357957");

            function c() {
                let e = (0, i.useStateFromStores)([l.default], () => l.default.getDefaultBillingCountryCode()),
                    t = (0, i.useStateFromStores)([s.default], () => s.default.ipCountryCode),
                    n = (0, i.useStateFromStores)([a.default], () => a.default.isAuthenticated());
                return r.useEffect(() => {
                    o.default.wait(() => {
                        n && !s.default.isPaymentSourceFetching && !l.default.hasFetchedPaymentSources && u.fetchPaymentSources()
                    })
                }, [n]), r.useEffect(() => {
                    n && !s.default.ipCountryCodeLoaded && u.fetchIpCountryCode()
                }, [t, n]), {
                    defaultBillingCountryCode: e,
                    ipCountryCode: t
                }
            }