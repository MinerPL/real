"use strict";
n.r(t), n.d(t, {
  DEFAULT_MINIMUM_SIZE: function() {
    return s
  },
  LOWERED_MINIMUM_SIZE: function() {
    return l
  },
  default: function() {
    return c
  }
});
var r = n("446674"),
  i = n("913144");
let s = 1e3,
  l = 200,
  a = {},
  o = !1;
class u extends r.default.Store {
  isLoading() {
    return o
  }
  passesChecklist(e) {
    var t;
    return !o && (null === (t = a[e]) || void 0 === t ? void 0 : t.sufficient)
  }
  isPendingSuccess(e) {
    let t = a[e];
    return null != t && !o && t.healthScorePending && t.safeEnvironment && 0 === Object.keys(t.nsfwProperties).length && t.size && t.protected
  }
  getDiscoveryChecklist(e) {
    return a[e]
  }
}
u.displayName = "DiscoverGuildChecklistStore";
var c = new u(i.default, {
  DISCOVER_CHECKLIST_FETCH_START: function(e) {
    o = !0
  },
  DISCOVER_CHECKLIST_FETCH_FAILURE: function(e) {
    o = !1
  },
  DISCOVER_CHECKLIST_FETCH_SUCCESS: function(e) {
    var t;
    let {
      checklist: n,
      guildId: r
    } = e;
    o = !1, a[r] = {
      guildId: n.guild_id,
      safeEnvironment: n.safe_environment,
      healthy: n.healthy,
      healthScorePending: n.health_score_pending,
      nsfwProperties: n.nsfw_properties,
      size: n.size,
      protected: n.protected,
      sufficient: n.sufficient,
      sufficientWithoutGracePeriod: n.sufficient_without_grace_period,
      gracePeriodEndDate: null != n.grace_period_end_date ? new Date(n.grace_period_end_date) : null,
      retentionHealthy: n.retention_healthy,
      engagementHealthy: n.engagement_healthy,
      minimumGuildSize: null != n.minimum_size ? n.minimum_size : s,
      healthScore: n.health_score,
      minimumGuildAge: null !== (t = n.minimum_age) && void 0 !== t ? t : 0,
      age: n.age
    }
  }
})