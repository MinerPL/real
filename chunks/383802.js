            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return a
                }
            }), n("222007");
            var u = n("884691"),
                i = n("976979"),
                r = n("446674"),
                l = n("160299");

            function a() {
                let [t, e] = u.useState(!1), [n, a] = u.useState(!1), o = (0, r.useStateFromStores)([l.default], () => i.CountryCodesSets.EEA_COUNTRIES.has(l.default.ipCountryCodeWithFallback));
                return {
                    hasViewedPurchaseTerms: t,
                    setHasViewedPurchaseTerms: e,
                    showWithdrawalWaiver: o,
                    hasAcceptedWithdrawalWaiver: !o || n,
                    setHasAcceptedWithdrawalWaiver: a
                }
            }