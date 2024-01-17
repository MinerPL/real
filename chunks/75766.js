"use strict";
n.r(t), n.d(t, {
  DEFAULT_MINIMUM_SIZE: function() {
    return s
  },
  LOWERED_MINIMUM_SIZE: function() {
    return a
  },
  default: function() {
    return c
  }
});
var r = n("446674"),
  i = n("913144");
let s = 1e3,
  a = 200,
  l = {},
  u = !1;
class o extends r.default.Store {
  isLoading() {
    return u
  }
  passesChecklist(e) {
    var t;
    return !u && (null === (t = l[e]) || void 0 === t ? void 0 : t.sufficient)
  }
  isPendingSuccess(e) {
    let t = l[e];
    return null != t && !u && t.healthScorePending && t.safeEnvironment && 0 === Object.keys(t.nsfwProperties).length && t.size && t.protected
  }
  getDiscoveryChecklist(e) {
    return l[e]
  }
}
o.displayName = "DiscoverGuildChecklistStore";
var c = new o(i.default, {
  DISCOVER_CHECKLIST_FETCH_START: function(e) {
    u = !0
  },
  DISCOVER_CHECKLIST_FETCH_FAILURE: function(e) {
    u = !1
  },
  DISCOVER_CHECKLIST_FETCH_SUCCESS: function(e) {
    var t;
    let {
      checklist: n,
      guildId: r
    } = e;
    u = !1, l[r] = {
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