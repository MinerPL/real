"use strict";
let s, i, r, l;
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
  null != r && r.guildId === e ? (i = r, r = void 0) : i = f(e)
}
class p extends u.default.Store {
  getSavedScrollPosition(e) {
    return h[e]
  }
  getHomeSessionId(e) {
    return null != i && i.guildId === e ? i.sessionId : null != r && r.guildId === e ? r.sessionId : void 0
  }
  getHomeSessionSource(e) {
    return null != l && l.guildId === e ? l.source : c.GuildHomeLandingSource.ORGANIC
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
      s = void 0, i = void 0, r = void 0, l = void 0;
      return
    }
    let a = (0, d.buildGuildStaticChannelId)(n, t);
    if (s === a || null != i && i.guildId === t) return !1;
    m(t), s = a, null != l && l.guildId !== t && (l = void 0)
  },
  CHANNEL_PRELOAD: function(e) {
    let {
      guildId: t,
      channelId: n
    } = e;
    if (null == t || null == n || !(0, d.isStaticChannelRoute)(n) || !(0, d.isGuildHomeChannel)(n)) {
      r = void 0;
      return
    }
    if (null != r && r.guildId === t) return !1;
    r = f(t)
  },
  GUILD_HOME_SET_SOURCE: function(e) {
    let {
      source: t,
      guildId: n
    } = e;
    l = {
      guildId: n,
      source: t
    }
  },
  GUILD_HOME_ENSURE_HOME_SESSION: function(e) {
    let {
      guildId: t
    } = e;
    if (null != i && i.guildId === t) return !1;
    m(t)
  },
  LOGOUT: function() {
    i = void 0, r = void 0, l = void 0
  }
})