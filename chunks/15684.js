"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  }
}), n("222007");
var i = n("249654"),
  s = n("446674"),
  l = n("913144"),
  a = n("267363"),
  r = n("582713"),
  d = n("374363"),
  h = n("271938"),
  u = n("42203"),
  o = n("923959"),
  c = n("26989"),
  C = n("305961"),
  g = n("660478"),
  f = n("282109"),
  p = n("718517"),
  I = n("49111");
let E = new Set,
  S = {},
  v = {};

function y(e, t) {
  let n = S[e];
  if (null != n && null != t && n.has(t)) {
    var s;
    f.default.isOptInEnabled(e) && !(null === (s = u.default.getChannel(t)) || void 0 === s ? void 0 : s.isThread()) && null == g.default.ackMessageId(t) && l.default.wait(() => (0, a.ack)(t, !0, !0, i.default.atPreviousMillisecond(t)))
  }
}

function m(e) {
  var t;
  if (null != S[e]) return;
  let n = o.default.getChannels(e),
    s = n[0, o.GUILD_SELECTABLE_CHANNELS_KEY].map(e => e.channel.id),
    l = null === (t = c.default.getMember(e, h.default.getId())) || void 0 === t ? void 0 : t.joinedAt;
  if (null == l) return;
  S[e] = new Set;
  let a = new Date(l).getTime();
  0 !== s.length && (S[e] = new Set(s.filter(t => {
    let n = i.default.extractTimestamp(t);
    return null == g.default.getTrackedAckMessageId(t) && n > Date.now() - p.default.Millis.WEEK && n > d.default.getGuildRecentsDismissedAt(e) && n > a && !f.default.isChannelOrParentOptedIn(e, t)
  })), v[e] = Date.now())
}

function _() {
  Object.keys(S).forEach(e => {
    let t = S[e];
    S[e] = new Set([...t].filter(t => !f.default.isChannelOrParentOptedIn(e, t)))
  })
}
class w extends s.default.Store {
  initialize() {
    this.waitFor(o.default, h.default, c.default, f.default, g.default, d.default), this.syncWith([f.default], _)
  }
  getNewChannelIds(e) {
    var t;
    return null != e && null == S[e] && m(e), null != e && null !== (t = S[e]) && void 0 !== t ? t : E
  }
  shouldIndicateNewChannel(e, t) {
    var n;
    if (null == e) return !1;
    let i = C.default.getGuild(e);
    return !!(null != i && i.hasFeature(I.GuildFeatures.COMMUNITY)) && (null != e && null == S[e] && m(e), (null === (n = S[e]) || void 0 === n ? void 0 : n.has(t)) && null == g.default.getTrackedAckMessageId(t))
  }
}
w.displayName = "NewChannelsStore";
var N = new w(l.default, {
  BULK_CLEAR_RECENTS: function(e) {
    let {
      guildId: t,
      channelIds: n
    } = e;
    if (null == S[t]) return !1;
    n.forEach(e => S[t].delete(e)), 0 === S[t].size && delete S[t]
  },
  CHANNEL_ACK: () => !0,
  CHANNEL_SELECT: function(e) {
    let {
      guildId: t,
      channelId: n
    } = e;
    if (null == t) return !1;
    let i = S[t];
    return null == i || v[t] < Date.now() - p.default.Millis.HOUR ? (m(t), !0) : (null != n && y(t, n), !1)
  },
  SIDEBAR_VIEW_CHANNEL: function(e) {
    let {
      guildId: t,
      channelId: n,
      sidebarType: i
    } = e;
    return null != t && i === r.SidebarType.VIEW_CHANNEL && (y(t, n), !1)
  },
  SIDEBAR_VIEW_GUILD: function(e) {
    let {
      guildId: t,
      baseChannelId: n
    } = e;
    return null != t && (y(t, n), !1)
  },
  GUILD_DELETE: function(e) {
    let {
      guild: t
    } = e;
    delete S[t.id]
  },
  CHANNEL_CREATE: function(e) {
    var t;
    let {
      channel: n
    } = e;
    !n.isVocal() && (S[n.guild_id] = null !== (t = S[n.guild_id]) && void 0 !== t ? t : new Set, S[n.guild_id].add(n.id))
  }
})