            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return a
                }
            }), n("222007");
            var u = n("884691"),
                i = n("446674"),
                r = n("850068"),
                l = n("357957");

            function a(t) {
                let {
                    isGift: e,
                    activeSubscription: n
                } = t, {
                    defaultPaymentSourceId: a,
                    paymentSources: o,
                    hasFetchedPaymentSources: s
                } = (0, i.useStateFromStoresObject)([l.default], () => ({
                    defaultPaymentSourceId: l.default.defaultPaymentSourceId,
                    paymentSources: l.default.paymentSources,
                    hasFetchedPaymentSources: l.default.hasFetchedPaymentSources
                })), c = (t, e, n) => t || (null == e ? void 0 : e.paymentSourceId) == null ? n : e.paymentSourceId, [S, d] = u.useState(() => c(e, n, a));
                return u.useEffect(() => {
                    s ? d(c(e, n, a)) : (0, r.fetchPaymentSources)()
                }, [s, e, n, a]), {
                    paymentSources: o,
                    hasPaymentSources: Object.keys(o).length > 0,
                    paymentSourceId: S,
                    setPaymentSourceId: d,
                    hasFetchedPaymentSources: s
                }
            }