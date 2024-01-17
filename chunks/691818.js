"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var a = n("446674"),
  s = n("913144"),
  i = n("718517");
let l = 12 * i.default.Millis.HOUR,
  r = {
    profileThemesRelevanceExceeded: null,
    savedAt: null
  },
  o = {
    hasFetchedRelevance: !1
  },
  u = r,
  d = o;
class c extends a.default.PersistedStore {
  initialize(e) {
    d = o, u = r;
    let t = new Date;
    null != e && null != e.savedAt && t.getTime() - e.savedAt < l && (u = e)
  }
  get hasFetchedRelevance() {
    return d.hasFetchedRelevance
  }
  get profileThemesRelevanceExceeded() {
    return u.profileThemesRelevanceExceeded
  }
  getState() {
    return u
  }
}
c.displayName = "PerksRelevanceStore", c.persistKey = "PerksRelevanceStore";
var f = new c(s.default, {
  BILLING_PERKS_RELEVANCE_FETCH_START: function() {
    d.hasFetchedRelevance = !0
  },
  BILLING_PERKS_RELEVANCE_FETCH_SUCCESS: function(e) {
    let {
      res: t
    } = e;
    null != t && (u.profileThemesRelevanceExceeded = t.eligible, u.savedAt = new Date().getTime())
  },
  BILLING_PERKS_RELEVANCE_FETCH_FAIL: function() {},
  LOGOUT: function() {
    d = o, u = r
  }
})