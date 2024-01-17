"use strict";
n.r(t), n.d(t, {
  SlowmodeType: function() {
    return a
  },
  default: function() {
    return m
  }
}), n("222007");
var a, l, s = n("446674"),
  i = n("862337"),
  r = n("913144"),
  d = n("718517"),
  u = n("42203"),
  o = n("957255"),
  c = n("49111");
(l = a || (a = {}))[l.SendMessage = 0] = "SendMessage", l[l.CreateThread = 1] = "CreateThread";
let E = {
  0: {},
  1: {}
};

function f(e, t, n) {
  if (function(e, t) {
      null != E[t][e.id] && (E[t][e.id].timer.stop(), delete E[t][e.id])
    }(e, t), function(e, t) {
      return 0 === t ? o.default.can(c.Permissions.MANAGE_CHANNELS, e) || o.default.can(c.Permissions.MANAGE_MESSAGES, e) : o.default.can(c.Permissions.MANAGE_THREADS, e)
    }(e, t) || n <= 0) return;
  let a = n + Date.now();
  E[t][e.id] = {
    rateLimitPerUser: e.rateLimitPerUser,
    cooldownMs: n,
    cooldownEndTimestamp: a,
    timer: new i.Timeout
  }, E[t][e.id].timer.start(1e3, () => {
    r.default.dispatch({
      type: "SLOWMODE_SET_COOLDOWN",
      channelId: e.id,
      slowmodeType: t,
      cooldownMs: Math.max(a - Date.now(), 0)
    })
  }, !0)
}

function _(e, t) {
  let n = u.default.getChannel(e);
  if (null == n) return !1;
  f(n, t, 0 === n.rateLimitPerUser ? 0 : n.rateLimitPerUser * d.default.Millis.SECOND + 100)
}

function g(e) {
  let {
    file: t
  } = e, n = u.default.getChannel(t.channelId);
  return null != n && f(n, 0, 0)
}
class h extends s.default.Store {
  initialize() {
    this.waitFor(u.default)
  }
  getSlowmodeCooldownGuess(e, t) {
    let n = E[null != t ? t : 0][e];
    return null != n ? n.cooldownMs : 0
  }
}
h.displayName = "SlowmodeStore";
var m = new h(r.default, {
  SLOWMODE_RESET_COOLDOWN: function(e) {
    let {
      channelId: t,
      slowmodeType: n
    } = e;
    return _(t, n)
  },
  SLOWMODE_SET_COOLDOWN: function(e) {
    let {
      channelId: t,
      slowmodeType: n,
      cooldownMs: a
    } = e, l = u.default.getChannel(t);
    if (null == l) return !1;
    f(l, n, 0 === a ? 0 : a + 100)
  },
  UPLOAD_START: function(e) {
    let {
      channelId: t
    } = e;
    return _(t, 0)
  },
  UPLOAD_FAIL: g,
  UPLOAD_CANCEL_REQUEST: g,
  CHANNEL_UPDATES: function(e) {
    let {
      channels: t
    } = e;
    [0, 1].forEach(e => {
      for (let a of t) {
        var n;
        let t = E[e][a.id],
          l = a.rateLimitPerUser;
        if (null == t || t.rateLimitPerUser === l) continue;
        let s = Math.min(null !== (n = null == t ? void 0 : t.cooldownMs) && void 0 !== n ? n : 0, l * d.default.Millis.SECOND);
        f(a, e, s)
      }
    })
  },
  LOGOUT: function() {
    [0, 1].forEach(e => {
      Object.keys(E[e]).forEach(t => E[e][t].timer.stop()), E[e] = {}
    })
  }
})