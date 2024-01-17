"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
}), n("222007");
var i = n("446674"),
  s = n("913144"),
  r = n("27618");
let l = !1,
  a = Object.freeze({
    userAffinities: [],
    affinityUserIds: new Set,
    lastFetched: 0
  }),
  u = {
    ...a
  };

function o() {
  u.affinityUserIds = new Set(u.userAffinities.map(e => e.user_id).filter(e => !r.default.isBlocked(e)))
}
class c extends i.default.PersistedStore {
  initialize(e) {
    this.waitFor(r.default), null != e && (u.userAffinities = e.userAffinities, u.affinityUserIds = new Set(e.affinityUserIds), u.lastFetched = e.lastFetched), this.syncWith([r.default], o)
  }
  needsRefresh() {
    return Date.now() - u.lastFetched > 864e5
  }
  getFetching() {
    return l
  }
  getState() {
    return u
  }
  getUserAffinities() {
    return u.userAffinities
  }
  getUserAffinitiesUserIds() {
    return u.affinityUserIds
  }
}
c.displayName = "UserAffinitiesStore", c.persistKey = "UserAffinitiesStore", c.migrations = [e => null];
var d = new c(s.default, {
  LOAD_USER_AFFINITIES_SUCCESS: function(e) {
    var t;
    let {
      affinities: n
    } = e;
    u.userAffinities = null !== (t = n.user_affinities) && void 0 !== t ? t : [], u.lastFetched = Date.now(), o(), l = !1
  },
  LOAD_USER_AFFINITIES: function() {
    l = !0
  },
  LOAD_USER_AFFINITIES_FAILURE: function() {
    l = !1
  },
  LOGOUT: function() {
    u = {
      ...a
    }
  }
})