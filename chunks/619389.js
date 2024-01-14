"use strict";
s.r(t), s.d(t, {
  default: function() {
    return d
  }
});
var a = s("884691"),
  n = s("717559"),
  l = s("38904"),
  i = s("257869"),
  r = s("452111"),
  o = s("397056");

function d(e, t) {
  let s = null == t ? void 0 : t.team,
    {
      payoutsByPeriod: d,
      loading: u
    } = (0, l.default)(null == t ? void 0 : t.id, {
      groupType: o.PaymentPayoutGroupTypes.SERVER_ROLE_SUBSCRIPTION,
      teamId: null == s ? void 0 : s.id
    }),
    c = (0, i.useGroupListingsFetchContext)("useEarningMetrics"),
    E = (0, r.default)(e),
    {
      currentPeriod: _,
      previousPeriods: T,
      metrics: I
    } = a.useMemo(() => {
      let {
        currentPeriod: e,
        previousPeriods: t
      } = (0, n.splitCurrentPeriod)(d), s = (0, n.calculateMetrics)(e, t[0]), a = {
        ...s,
        subscribers: E,
        subscriberChange: s.paymentsCountChange
      };
      return {
        currentPeriod: e,
        previousPeriods: t,
        metrics: a
      }
    }, [d, E]);
  return {
    loading: u || !c,
    team: s,
    currentPeriod: _,
    previousPeriods: T,
    allPeriods: d,
    metrics: I
  }
}