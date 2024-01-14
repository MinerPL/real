"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var a = n("446674"),
  s = n("913144");
let i = {
    profileThemesRelevanceExceeded: null,
    savedAt: null
  },
  l = {
    hasFetchedRelevance: !1
  },
  r = i,
  o = l;
class u extends a.default.PersistedStore {
  initialize(e) {
    o = l, r = i;
    let t = new Date;
    null != e && null != e.savedAt && t.getTime() - e.savedAt < 432e5 && (r = e)
  }
  get hasFetchedRelevance() {
    return o.hasFetchedRelevance
  }
  get profileThemesRelevanceExceeded() {
    return r.profileThemesRelevanceExceeded
  }
  getState() {
    return r
  }
}
u.displayName = "PerksRelevanceStore", u.persistKey = "PerksRelevanceStore";
var d = new u(s.default, {
  BILLING_PERKS_RELEVANCE_FETCH_START: function() {
    o.hasFetchedRelevance = !0
  },
  BILLING_PERKS_RELEVANCE_FETCH_SUCCESS: function(e) {
    let {
      res: t
    } = e;
    null != t && (r.profileThemesRelevanceExceeded = t.eligible, r.savedAt = new Date().getTime())
  },
  BILLING_PERKS_RELEVANCE_FETCH_FAIL: function() {},
  LOGOUT: function() {
    o = l, r = i
  }
})