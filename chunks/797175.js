"use strict";
s.r(t), s.d(t, {
  default: function() {
    return o
  }
}), s("222007");
var a = s("446674"),
  n = s("913144");
let l = [];

function i() {
  l = []
}
class r extends a.default.Store {
  getSessions() {
    return l
  }
}
r.displayName = "AuthSessionsStore";
var o = new r(n.default, {
  LOGOUT: i,
  LOGIN_SUCCESS: i,
  FETCH_AUTH_SESSIONS_SUCCESS: function(e) {
    let {
      sessions: t
    } = e;
    l = t.map(e => ({
      ...e,
      approx_last_used_time: new Date(e.approx_last_used_time)
    }))
  },
  LOGOUT_AUTH_SESSIONS_SUCCESS: function(e) {
    let {
      sessionIdHashes: t
    } = e, s = [...l], a = !1;
    for (let e of t) {
      let t = s.findIndex(t => t.id_hash === e);
      t >= 0 && (s.splice(t, 1), a = !0)
    }
    if (!a) return !1;
    l = s
  }
})