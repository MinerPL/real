"use strict";
let i, s, l, r;
n.r(t), n.d(t, {
  default: function() {
    return I
  }
});
var a = n("748820"),
  u = n("446674"),
  o = n("913144"),
  d = n("724210"),
  c = n("515631");
let h = {};

function f(e) {
  return {
    guildId: e,
    sessionId: (0, a.v4)()
  }
}

function m(e) {
  null != l && l.guildId === e ? (s = l, l = void 0) : s = f(e)
}
class p extends u.default.Store {
  getSavedScrollPosition(e) {
    return h[e]
  }
  getHomeSessionId(e) {
    return null != s && s.guildId === e ? s.sessionId : null != l && l.guildId === e ? l.sessionId : void 0
  }
  getHomeSessionSource(e) {
    return null != r && r.guildId === e ? r.source : c.GuildHomeLandingSource.ORGANIC
  }
}
p.displayName = "GuildHomeStore";
var I = new p(o.default, {
  CONNECTION_OPEN: function() {
    h = {}
  },
  GUILD_FEED_FETCH_FRESH_START: function(e) {
    let {
      guildId: t
    } = e;
    delete h[t]
  },
  GUILD_HOME_SET_SCROLL_POSITION: function(e) {
    let {
      guildId: t,
      scrollPosition: n
    } = e;
    h[t] = n
  },
  CHANNEL_SELECT: function(e) {
    let {
      guildId: t,
      channelId: n
    } = e;
    if (null == t || null == n || !(0, d.isStaticChannelRoute)(n) || !(0, d.isGuildHomeChannel)(n)) {
      i = void 0, s = void 0, l = void 0, r = void 0;
      return
    }
    let a = (0, d.buildGuildStaticChannelId)(n, t);
    if (i === a || null != s && s.guildId === t) return !1;
    m(t), i = a, null != r && r.guildId !== t && (r = void 0)
  },
  CHANNEL_PRELOAD: function(e) {
    let {
      guildId: t,
      channelId: n
    } = e;
    if (null == t || null == n || !(0, d.isStaticChannelRoute)(n) || !(0, d.isGuildHomeChannel)(n)) {
      l = void 0;
      return
    }
    if (null != l && l.guildId === t) return !1;
    l = f(t)
  },
  GUILD_HOME_SET_SOURCE: function(e) {
    let {
      source: t,
      guildId: n
    } = e;
    r = {
      guildId: n,
      source: t
    }
  },
  GUILD_HOME_ENSURE_HOME_SESSION: function(e) {
    let {
      guildId: t
    } = e;
    if (null != s && s.guildId === t) return !1;
    m(t)
  },
  LOGOUT: function() {
    s = void 0, l = void 0, r = void 0
  }
})