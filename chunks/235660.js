"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var i = n("917351"),
  r = n.n(i),
  s = n("446674"),
  a = n("913144"),
  o = n("271938");
let l = Object.freeze([]),
  u = {};

function c(e) {
  u = {}, e.sessions.forEach(e => {
    u[e.sessionId] = e
  })
}
class d extends s.default.Store {
  initialize() {
    this.waitFor(o.default)
  }
  getSessions() {
    return u
  }
  getSession() {
    let e = o.default.getSessionId();
    return null != e ? this.getSessionById(e) : null
  }
  getRemoteActivities() {
    let e = o.default.getSessionId(),
      t = r.find(u, t => t.active && t.sessionId !== e);
    return null != t ? t.activities : l
  }
  getSessionById(e) {
    return u[e]
  }
  getActiveSession() {
    return r.find(u, e => {
      let {
        active: t
      } = e;
      return t
    })
  }
}
d.displayName = "SessionsStore";
var f = new d(a.default, {
  CONNECTION_OPEN: c,
  SESSIONS_REPLACE: c
})