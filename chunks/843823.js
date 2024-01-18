"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
}), n("222007");
var i = n("446674"),
  r = n("913144"),
  s = n("27618");
let l = !1,
  a = Object.freeze({
    userAffinities: [],
    affinityUserIds: new Set,
    lastFetched: 0
  }),
  o = {
    ...a
  };

function u() {
  o.affinityUserIds = new Set(o.userAffinities.map(e => e.user_id).filter(e => !s.default.isBlocked(e)))
}
class c extends i.default.PersistedStore {
  initialize(e) {
    this.waitFor(s.default), null != e && (o.userAffinities = e.userAffinities, o.affinityUserIds = new Set(e.affinityUserIds), o.lastFetched = e.lastFetched), this.syncWith([s.default], u)
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
c.displayName = "UserAffinitiesStore", c.persistKey = "UserAffinitiesStore", c.migrations = [e => null];
var d = new c(r.default, {
  LOAD_USER_AFFINITIES_SUCCESS: function(e) {
    var t;
    let {
      affinities: n
    } = e;
    o.userAffinities = null !== (t = n.user_affinities) && void 0 !== t ? t : [], o.lastFetched = Date.now(), u(), l = !1
  },
  LOAD_USER_AFFINITIES: function() {
    l = !0
  },
  LOAD_USER_AFFINITIES_FAILURE: function() {
    l = !1
  },
  LOGOUT: function() {
    o = {
      ...a
    }
  }
})