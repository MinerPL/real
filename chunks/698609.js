            "use strict";
            n.r(t), n.d(t, {
                useSafetyHubClassification: function() {
                    return c
                },
                useActiveSafetyHubClassifications: function() {
                    return d
                },
                useExpiredSafetyHubClassifications: function() {
                    return f
                }
            });
            var i = n("884691"),
                r = n("446674"),
                l = n("299039"),
                a = n("781324"),
                o = n("647149"),
                s = n("646356");

            function u() {
                let e = (0, r.useStateFromStoresArray)([s.default], () => s.default.getClassifications());
                return e.sort((e, t) => l.default.extractTimestamp(t.id) - l.default.extractTimestamp(e.id))
            }

            function c(e) {
                let t = (0, r.useStateFromStores)([s.default], () => s.default.getClassification(e)),
                    n = (0, r.useStateFromStores)([s.default], () => s.default.getClassificationRequestState(e)),
                    l = (0, r.useStateFromStores)([s.default], () => s.default.getIsDsaEligible()),
                    u = (0, o.useIsInappAppealIngestionEnabled)();
                return i.useEffect(() => {
                    void 0 === t && null == n && a.getSafetyHubDataForClassification(e)
                }, [e, t, n]), {
                    classification: t,
                    classificationRequestState: n,
                    isDsaEligible: l,
                    isAppealEligible: u && l && null != t && null == t.appeal_status
                }
            }

            function d() {
                let e = u(),
                    t = new Date;
                return e.filter(e => new Date(e.max_expiration_time) > t)
            }

            function f() {
                let e = u(),
                    t = new Date;
                return e.filter(e => new Date(e.max_expiration_time) <= t)
            }