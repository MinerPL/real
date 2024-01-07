            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return d
                }
            });
            var a = s("884691"),
                n = s("228100"),
                l = s("717559"),
                i = s("38904"),
                r = s("988268"),
                o = s("397056");

            function d(e) {
                var t;
                let {
                    application: s,
                    loading: d
                } = (0, n.default)(e, r.ApplicationTypes.GUILD_ROLE_SUBSCRIPTIONS), {
                    payoutsByPeriod: u,
                    loading: c
                } = (0, i.default)(null == s ? void 0 : s.id, {
                    groupType: o.PaymentPayoutGroupTypes.GUILD_PRODUCT,
                    teamId: null == s ? void 0 : null === (t = s.team) || void 0 === t ? void 0 : t.id
                }), {
                    currentPeriod: E,
                    previousPeriods: _,
                    metrics: T
                } = a.useMemo(() => {
                    let {
                        currentPeriod: e,
                        previousPeriods: t
                    } = (0, l.splitCurrentPeriod)(u), s = (0, l.calculateMetrics)(e, t[0]);
                    return {
                        currentPeriod: e,
                        previousPeriods: t,
                        metrics: s
                    }
                }, [u]);
                return {
                    loading: d || c,
                    payoutsByPeriod: u,
                    currentPeriod: E,
                    previousPeriods: _,
                    metrics: T,
                    application: s
                }
            }