"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
}), n("222007");
var s = n("917351"),
  i = n.n(s),
  r = n("446674"),
  a = n("913144"),
  o = n("233069"),
  d = n("42203");
let u = {},
  l = new Set;

function f(e) {
  return {
    id: e.id,
    parentId: e.parent_id
  }
}

function _(e) {
  e in u && delete u[e]
}

function c(e) {
  null != e.threads && e.threads.length > 0 && (u[e.id] = {}, e.threads.filter(e => o.ALL_CHANNEL_TYPES.has(e.type)).forEach(t => g(e.id, t))), e.hasThreadsSubscription && l.add(e.id)
}

function g(e, t) {
  let n = u[e],
    s = t.parent_id;
  !(s in n) && (n[s] = {}), u[e][s][t.id] = f(t)
}

function m(e) {
  var t, n;
  let {
    channel: s
  } = e;
  if (!o.ALL_CHANNEL_TYPES.has(s.type)) return !1;
  if ((null === (t = s.threadMetadata) || void 0 === t ? void 0 : t.archived) === !0) return h(s);
  {
    let e = null !== (n = u[s.guild_id]) && void 0 !== n ? n : {};
    u[s.guild_id] = {
      ...e,
      [s.parent_id]: {
        ...e[s.parent_id],
        [s.id]: f(s)
      }
    }
  }
}

function h(e) {
  let {
    guild_id: t,
    parent_id: n,
    id: s
  } = e;
  if (null == t || null == n || !(t in u) || !(n in u[t]) || !(s in u[t][n])) return !1;
  u[t] = {
    ...u[t],
    [n]: {
      ...u[t][n]
    }
  }, delete u[t][n][s], i.isEmpty(u[t][n]) && delete u[t][n]
}
let v = {};
class E extends r.default.Store {
  initialize() {
    this.waitFor(d.default)
  }
  isActive(e, t, n) {
    return null != e && null != this.getThreadsForParent(e, t)[n]
  }
  getThreadsForGuild(e) {
    var t;
    return null !== (t = u[e]) && void 0 !== t ? t : v
  }
  getThreadsForParent(e, t) {
    var n;
    return null !== (n = this.getThreadsForGuild(e)[t]) && void 0 !== n ? n : v
  }
  hasThreadsForChannel(e, t) {
    return !i.isEmpty(this.getThreadsForParent(e, t))
  }
  forEachGuild(e) {
    for (let t in u) e(t, u[t])
  }
  hasLoaded(e) {
    return l.has(e)
  }
}
E.displayName = "ActiveThreadsStore";
var p = new E(a.default, {
  CONNECTION_OPEN: function(e) {
    u = {}, l.clear(), e.guilds.forEach(e => {
      c(e)
    })
  },
  OVERLAY_INITIALIZE: function(e) {
    let {
      channels: t
    } = e;
    u = {}, i(t).filter(e => o.THREAD_CHANNEL_TYPES.has(e.type)).groupBy("guild_id").forEach((e, t) => {
      u[t] = {}, e.forEach(e => g(t, e))
    })
  },
  GUILD_CREATE: function(e) {
    let {
      guild: t
    } = e;
    _(t.id), c(t)
  },
  GUILD_DELETE: function(e) {
    let {
      guild: t
    } = e;
    _(t.id)
  },
  THREAD_CREATE: m,
  THREAD_UPDATE: m,
  THREAD_LIST_SYNC: function(e) {
    let {
      guildId: t,
      threads: n,
      channelIds: s
    } = e;
    for (let e in null == s && l.add(t), u[t] = {
        ...u[t]
      }, u[t]) u[t][e] = {
      ...u[t][e]
    };
    n.forEach(e => g(t, e))
  },
  THREAD_DELETE: function(e) {
    let {
      channel: t
    } = e;
    return h(t)
  },
  CHANNEL_DELETE: function(e) {
    let {
      channel: t
    } = e;
    if (null == t.guild_id || !(t.guild_id in u)) return !1;
    u[t.guild_id] = {
      ...u[t.guild_id]
    }, delete u[t.guild_id][t.id]
  }
})