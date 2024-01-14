"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
}), n("808653");
var l = n("446674"),
  r = n("913144");
let s = {},
  u = null,
  a = null;

function i(e, t) {
  null == t ? e in s && delete s[e] : null != e && (s[e] = t)
}

function o(e) {
  let {
    user: t
  } = e;
  a = t.id
}
class c extends l.default.PersistedStore {
  initialize(e) {
    null != e && (s = e)
  }
  requiredActions(e) {
    var t;
    return null !== (t = s[e]) && void 0 !== t ? t : null
  }
  requiredActionsIncludes(e, t) {
    let n = this.requiredActions(e);
    return null != n && t.reduce((e, t) => e || n.includes(t), !1)
  }
  wasLoginAttemptedInSession(e) {
    return u === e
  }
  getState() {
    return s
  }
}
c.displayName = "LoginRequiredActionStore", c.persistKey = "LoginRequiredActionStore";
var d = new c(r.default, {
  LOGIN_ATTEMPTED: function(e) {
    let {
      required_actions: t,
      user_id: n
    } = e;
    i(u = n, t)
  },
  CONNECTION_OPEN: o,
  CURRENT_USER_UPDATE: o,
  LOGOUT: function(e) {
    let {
      isSwitchingAccount: t
    } = e;
    !t && null != a && i(a, null)
  },
  PASSWORD_UPDATED: function(e) {
    let {
      userId: t
    } = e;
    i(t, null)
  },
  MULTI_ACCOUNT_REMOVE_ACCOUNT: function(e) {
    let {
      userId: t
    } = e;
    i(t, null)
  }
})