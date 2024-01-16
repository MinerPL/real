"use strict";
s.r(t), s.d(t, {
  default: function() {
    return c
  }
}), s("222007");
var n = s("446674"),
  r = s("913144"),
  a = s("27618");
let l = !1,
  i = Object.freeze({
    userAffinities: [],
    affinityUserIds: new Set,
    lastFetched: 0
  }),
  o = {
    ...i
  };

function u() {
  o.affinityUserIds = new Set(o.userAffinities.map(e => e.user_id).filter(e => !a.default.isBlocked(e)))
}
class d extends n.default.PersistedStore {
  initialize(e) {
    this.waitFor(a.default), null != e && (o.userAffinities = e.userAffinities, o.affinityUserIds = new Set(e.affinityUserIds), o.lastFetched = e.lastFetched), this.syncWith([a.default], u)
  }
  needsRefresh() {
    return Date.now() - o.lastFetched > 864e5
  }
  getFetching() {
    return l
  }
  getState() {
    return o
  }
  getUserAffinities() {
    return o.userAffinities
  }
  getUserAffinitiesUserIds() {
    return o.affinityUserIds
  }
}
d.displayName = "UserAffinitiesStore", d.persistKey = "UserAffinitiesStore", d.migrations = [e => null];
var c = new d(r.default, {
  LOAD_USER_AFFINITIES_SUCCESS: function(e) {
    var t;
    let {
      affinities: s
    } = e;
    o.userAffinities = null !== (t = s.user_affinities) && void 0 !== t ? t : [], o.lastFetched = Date.now(), u(), l = !1
  },
  LOAD_USER_AFFINITIES: function() {
    l = !0
  },
  LOAD_USER_AFFINITIES_FAILURE: function() {
    l = !1
  },
  LOGOUT: function() {
    o = {
      ...i
    }
  }
})