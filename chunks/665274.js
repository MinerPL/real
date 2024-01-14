"use strict";
n.r(t), n("424973"), n("222007");
var a = n("446674"),
  s = n("913144"),
  i = n("271938"),
  l = n("42203"),
  r = n("305961"),
  o = n("188631");
let u = {};

function d(e, t) {
  let n = u[e];
  return !(null == n || n.has(t)) && (u[e] = new Set(n.add(t)), !0)
}
class c extends a.default.PersistedStore {
  initialize(e) {
    this.waitFor(i.default, r.default), u = {}, null != e && Object.keys(e).forEach(t => {
      let n = e[t];
      null != n && "function" == typeof n[Symbol.iterator] && (u[t] = new Set(n))
    })
  }
  getProgress(e) {
    return u[e]
  }
  hasProgress(e) {
    let t = u[e];
    return null != t && !t.has(o.Steps.DISMISSED)
  }
  getState() {
    return u
  }
}
c.displayName = "GuildProgressStore", c.persistKey = "GuildProgressStore", new c(s.default, {
  CONNECTION_OPEN: function() {
    let e = [];
    Object.keys(u).forEach(t => {
      u[t].has(o.Steps.COMPLETED) && e.push(t)
    }), e.forEach(e => d(e, o.Steps.DISMISSED))
  },
  GUILD_PROGRESS_INITIALIZE: function(e) {
    let {
      guildId: t
    } = e;
    null == u[t] && (u[t] = new Set), !u[t].has(o.Steps.COMPLETED) && u[t].delete(o.Steps.DISMISSED)
  },
  GUILD_PROGRESS_COMPLETED_SEEN: function(e) {
    let {
      guildId: t
    } = e;
    if (null == u[t]) return !1;
    u[t] = new Set(u[t].add(o.Steps.COMPLETED))
  },
  GUILD_PROGRESS_DISMISS: function(e) {
    let {
      guildId: t
    } = e;
    return d(t, o.Steps.DISMISSED)
  },
  GUILD_CREATE: function(e) {
    let {
      guild: {
        id: t,
        member_count: n
      }
    } = e, a = r.default.getGuild(t);
    if (null == a) return !1;
    a.ownerId === i.default.getId() && null != u[a.id] && (null != a.icon && u[a.id].add(o.Steps.AVATAR), n > 1 && u[a.id].add(o.Steps.INVITE))
  },
  CHANNEL_CREATE: function(e) {
    let {
      channel: t
    } = e;
    return null != t && null != t.guild_id && null != u[t.guild_id] && d(t.guild_id, o.Steps.CHANNEL)
  },
  CHANNEL_UPDATES: function(e) {
    let {
      channels: t
    } = e, n = !1;
    for (let e of t) null != e && null != e.guild_id && null != u[e.guild_id] && !1 !== d(e.guild_id, o.Steps.CHANNEL) && (n = !0);
    return n
  },
  GUILD_SETTINGS_SUBMIT_SUCCESS: function(e) {
    let {
      guild: t
    } = e;
    return null != t && null != t.id && null != u[t.id] && null != t.icon && d(t.id, o.Steps.AVATAR)
  },
  MESSAGE_CREATE: function(e) {
    var t;
    let {
      channelId: n,
      message: a
    } = e, s = l.default.getChannel(n);
    return (null === (t = a.author) || void 0 === t ? void 0 : t.id) === i.default.getId() && null != s && null != u[s.guild_id] && d(s.guild_id, o.Steps.MESSAGE)
  },
  GUILD_MEMBER_LIST_UPDATE: function(e) {
    let {
      guildId: t,
      memberCount: n
    } = e;
    return null != u[t] && !!(n > 1) && d(t, o.Steps.INVITE)
  }
})