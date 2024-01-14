"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
}), n("222007"), n("702976");
var i = n("917351"),
  r = n.n(i),
  s = n("446674"),
  a = n("913144"),
  o = n("668597"),
  l = n("233069"),
  u = n("271938");
let c = {},
  d = new o.default,
  f = new Set;

function E(e) {
  c = r(c).reject(t => t.guildId === e).keyBy("threadId").value()
}

function h(e) {
  var t;
  null === (t = e.threads) || void 0 === t || t.forEach(p)
}

function p(e) {
  l.ALL_CHANNEL_TYPES.has(e.type) && null != e.member && (c[e.id] = {
    threadId: e.id,
    guildId: e.guild_id,
    flags: e.member.flags,
    muted: e.member.muted,
    muteConfig: e.member.muteConfig,
    joinTimestamp: new Date(e.member.joinTimestamp)
  }, _(e.id))
}

function _(e) {
  let t = c[e];
  d.clearTimer(e), !0 === t.muted ? ((f = new Set(f)).add(e), d.setTimer(e, t.muteConfig, () => {
    c[e].muted = !1, (f = new Set(f)).delete(e), T.emitChange()
  })) : (f = new Set(f)).delete(e)
}

function S(e) {
  let {
    guildId: t,
    members: n
  } = e;
  null != t && null != n && n.forEach(e => {
    c[e.id] = {
      threadId: e.id,
      guildId: t,
      flags: e.flags,
      muted: e.muted,
      muteConfig: e.muteConfig,
      joinTimestamp: new Date(e.joinTimestamp)
    }, _(e.id)
  })
}
class m extends s.default.Store {
  hasJoined(e) {
    return e in c
  }
  joinTimestamp(e) {
    var t;
    return null === (t = c[e]) || void 0 === t ? void 0 : t.joinTimestamp
  }
  flags(e) {
    var t;
    return null === (t = c[e]) || void 0 === t ? void 0 : t.flags
  }
  getInitialOverlayState() {
    return Object.values(c)
  }
  getMuteConfig(e) {
    var t;
    return null === (t = c[e]) || void 0 === t ? void 0 : t.muteConfig
  }
  getMutedThreads() {
    return f
  }
  isMuted(e) {
    return f.has(e)
  }
}
m.displayName = "JoinedThreadsStore";
let T = new m(a.default, {
  CONNECTION_OPEN: function(e) {
    d.reset(), f = new Set, c = {}, e.guilds.forEach(e => {
      h(e)
    })
  },
  OVERLAY_INITIALIZE: function(e) {
    let {
      joinedThreads: t
    } = e;
    c = r(t).map(e => ({
      ...e,
      joinTimestamp: new Date(e.joinTimestamp)
    })).keyBy("threadId").value()
  },
  GUILD_CREATE: function(e) {
    let {
      guild: t
    } = e;
    E(t.id), h(t)
  },
  GUILD_DELETE: function(e) {
    let {
      guild: t
    } = e;
    E(t.id)
  },
  THREAD_CREATE: function(e) {
    let {
      channel: t
    } = e;
    p(t)
  },
  THREAD_LIST_SYNC: S,
  SEARCH_FINISH: S,
  LOAD_THREADS_SUCCESS: S,
  LOAD_ARCHIVED_THREADS_SUCCESS: S,
  THREAD_DELETE: function(e) {
    let {
      channel: t
    } = e;
    if (!(t.id in c)) return !1;
    c = {
      ...c
    }, delete c[t.id]
  },
  THREAD_MEMBER_UPDATE: function(e) {
    if (u.default.getId() !== e.userId) return !1;
    c[e.id] = {
      threadId: e.id,
      guildId: e.guildId,
      flags: e.flags,
      muted: e.muted,
      muteConfig: e.muteConfig,
      joinTimestamp: new Date(e.joinTimestamp)
    }, _(e.id)
  },
  THREAD_MEMBER_LOCAL_UPDATE: function(e) {
    let {
      id: t,
      userId: n,
      guildId: i,
      isJoining: r
    } = e;
    if (u.default.getId() !== n || null === i) return !1;
    r ? c[t] = {
      threadId: t,
      guildId: i,
      flags: 0,
      muted: !0,
      muteConfig: {
        end_time: void 0
      },
      joinTimestamp: new Date
    } : delete c[t]
  },
  THREAD_MEMBERS_UPDATE: function(e) {
    var t, n;
    let i = !1;
    return (null === (t = e.removedMemberIds) || void 0 === t ? void 0 : t.includes(u.default.getId())) && e.id in c && (c = {
      ...c
    }, delete c[e.id], i = !0), null === (n = e.addedMembers) || void 0 === n || n.forEach(t => {
      t.userId === u.default.getId() && ((c = {
        ...c
      })[e.id] = {
        threadId: e.id,
        guildId: e.guildId,
        flags: t.flags,
        muted: t.muted,
        muteConfig: t.muteConfig,
        joinTimestamp: new Date(t.joinTimestamp)
      }, _(e.id), i = !0)
    }), i
  }
});
var g = T