"use strict";
n.r(t), n.d(t, {
  NO_WELCOME_SCREEN: function() {
    return r
  },
  default: function() {
    return _
  }
});
var l = n("446674"),
  i = n("913144");
let r = {},
  s = {},
  o = {},
  a = !1,
  u = !1,
  c = !1;

function d(e) {
  let {
    guild: t
  } = e.invite;
  return (null == t ? void 0 : t.welcome_screen) != null && (s[t.id] = t.welcome_screen, !0)
}

function f(e) {
  let {
    welcomeScreen: t,
    guildId: n
  } = e;
  s[n] = null != t ? t : r
}
class E extends l.default.Store {
  get(e) {
    if (null != e) return s[e]
  }
  isFetching() {
    return u
  }
  hasError() {
    return c
  }
  hasSeen(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return null != e && (t ? a : o[e] || !1)
  }
  isEmpty(e) {
    if (null == e) return !0;
    let t = s[e];
    return null == t || 0 === t.welcome_channels.length
  }
}
E.displayName = "WelcomeScreenStore";
var _ = new E(i.default, {
  INVITE_RESOLVE_SUCCESS: d,
  INVITE_ACCEPT_SUCCESS: d,
  WELCOME_SCREEN_SUBMIT_SUCCESS: f,
  WELCOME_SCREEN_UPDATE: f,
  WELCOME_SCREEN_VIEW: function(e) {
    let {
      guildId: t,
      isLurking: n
    } = e;
    o[t] = !0, n && (a = !0)
  },
  GUILD_STOP_LURKING: function() {
    a = !1
  },
  GUILD_DELETE: function(e) {
    let {
      guild: {
        id: t
      }
    } = e;
    o[t] = !1
  },
  WELCOME_SCREEN_FETCH_START: function() {
    u = !0, c = !1
  },
  WELCOME_SCREEN_FETCH_SUCCESS: function(e) {
    u = !1, c = !1;
    let {
      welcomeScreen: t,
      guildId: n
    } = e;
    s[n] = null != t ? t : r
  },
  WELCOME_SCREEN_FETCH_FAIL: function() {
    u = !1, c = !0
  }
})