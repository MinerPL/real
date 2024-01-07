            "use strict";
            s.r(t), s.d(t, {
                getStatusForPeriod: function() {
                    return n
                },
                splitCurrentPeriod: function() {
                    return l
                },
                calculateMetrics: function() {
                    return i
                }
            }), s("222007");
            var a = s("397056");
            let n = e => {
                var t, s;
                let a = Object.values(null !== (s = null == e ? void 0 : e.ppgs) && void 0 !== s ? s : {})[0],
                    n = null == a ? void 0 : a.status,
                    l = null == a ? void 0 : null === (t = a.payout) || void 0 === t ? void 0 : t.status,
                    i = null == a ? void 0 : a.deferral_reasons,
                    r = null == a ? void 0 : a.period_ending_at;
                return {
                    ppgStatus: n,
                    payoutStatus: l,
                    ppgDeferralReasons: i,
                    periodEndDate: r
                }
            };

            function l(e) {
                let t, s;
                let {
                    ppgStatus: l
                } = n(e[0]);
                return l === a.PaymentPayoutGroupStatuses.OPEN ? [t, ...s] = e : s = e, {
                    currentPeriod: t,
                    previousPeriods: s
                }
            }

            function i(e, t) {
                let s, a, n, l;
                return null != e && (s = e.amount, n = e.paymentsCount, null != t && (a = e.amount / t.amount - 1, l = e.paymentsCount - t.paymentsCount)), {
                    revenue: s,
                    revenuePctChange: a,
                    paymentsCount: n,
                    paymentsCountChange: l
                }
            }