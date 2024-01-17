"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  }
});
var l = n("884691"),
  i = n("577357"),
  r = n("677795"),
  s = n("646718"),
  o = n("782340");

function a(e) {
  return l.useMemo(() => {
    var t;
    let n = r.TIER_TRIAL_INTERVALS.map(e => ({
        value: e,
        label: e.interval === s.SubscriptionIntervalTypes.DAY && 7 === e.interval_count ? o.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_TRIAL_TIME_LIMIT_DEFAULT_OPTION.format({
          defaultLimit: (0, i.formatPlanIntervalDuration)(e)
        }) : (0, i.formatPlanIntervalDuration)(e),
        isDefault: e.interval === s.SubscriptionIntervalTypes.DAY && 7 === e.interval_count
      })),
      l = null != e ? null === (t = n.find(t => null != t.value && t.value.interval === e.interval && t.value.interval_count === e.interval_count)) || void 0 === t ? void 0 : t.value : e;
    return {
      options: n,
      selectedOption: l
    }
  }, [e])
}