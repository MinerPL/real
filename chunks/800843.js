"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
}), n("222007");
var i = n("917351"),
  l = n.n(i),
  a = n("446674"),
  s = n("913144"),
  r = n("560208"),
  u = n("233069"),
  d = n("42203");
let o = {};

function c(e) {
  var t;
  null === (t = e.threads) || void 0 === t || t.forEach(_)
}

function _(e) {
  if (!u.ALL_CHANNEL_TYPES.has(e.type)) return !1;
  let t = function(e) {
    if (!(e.id in o)) {
      var t, n;
      o[e.id] = {
        guildId: e.guild_id,
        parentId: e.parent_id,
        memberCount: null !== (t = e.memberCount) && void 0 !== t ? t : 0,
        memberIdsPreview: null !== (n = e.memberIdsPreview) && void 0 !== n ? n : []
      }
    }
    return o[e.id]
  }(e);
  null != e.memberCount && (t.memberCount = e.memberCount), null != e.memberIdsPreview && (t.memberIdsPreview = e.memberIdsPreview)
}

function f(e) {
  let {
    channel: t
  } = e;
  return _(t)
}

function h(e) {
  let {
    threads: t
  } = e;
  t.forEach(E)
}

function E(e) {
  if (null != e && !(e.id in o)) {
    let t = d.default.getChannel(e.id);
    if (null != t) return _(t), !0
  }
  return !1
}
class g extends a.default.Store {
  initialize() {
    this.waitFor(d.default)
  }
  getMemberCount(e) {
    var t, n;
    return null !== (n = null === (t = o[e]) || void 0 === t ? void 0 : t.memberCount) && void 0 !== n ? n : null
  }
  getMemberIdsPreview(e) {
    var t, n;
    return null !== (n = null === (t = o[e]) || void 0 === t ? void 0 : t.memberIdsPreview) && void 0 !== n ? n : null
  }
  getInitialOverlayState() {
    return o
  }
}
g.displayName = "ThreadMembersStore";
var m = new g(s.default, {
  CONNECTION_OPEN: function(e) {
    o = {}, e.guilds.forEach(c)
  },
  OVERLAY_INITIALIZE: function(e) {
    let {
      threadMembers: t
    } = e;
    o = {
      ...t
    }
  },
  GUILD_CREATE: function(e) {
    let {
      guild: t
    } = e;
    c(t)
  },
  GUILD_DELETE: function(e) {
    var t;
    let {
      guild: n
    } = e;
    t = n.id, o = l.omitBy(o, e => e.guildId === t)
  },
  CHANNEL_DELETE: function(e) {
    var t;
    let {
      channel: n
    } = e;
    t = n.id, o = l.omitBy(o, e => e.parentId === t)
  },
  THREAD_CREATE: f,
  THREAD_UPDATE: f,
  THREAD_LIST_SYNC: function(e) {
    let {
      threads: t
    } = e;
    t.forEach(_)
  },
  THREAD_MEMBERS_UPDATE: function(e) {
    let t = o[e.id];
    if (null == t) return !1;
    null != e.memberIdsPreview && (t.memberIdsPreview = e.memberIdsPreview), t.memberCount = e.memberCount
  },
  SEARCH_FINISH: function(e) {
    let t = !1;
    for (let n of e.messages)
      for (let e of n) t = E(e.thread) || t;
    return e.threads.forEach(e => {
      t = E(e) || t
    }), t
  },
  LOAD_THREADS_SUCCESS: h,
  LOAD_ARCHIVED_THREADS_SUCCESS: h,
  THREAD_DELETE: function(e) {
    let {
      channel: t
    } = e;
    delete o[t.id]
  },
  LOAD_MESSAGES_SUCCESS: function(e) {
    let t = !1;
    for (let n of e.messages) t = E(n.thread) || t;
    return t
  },
  GUILD_FEED_FETCH_SUCCESS: function(e) {
    let {
      data: t
    } = e, n = !1;
    for (let e of (0, r.getThreadsFromGuildFeedFetch)(t)) n = E(e) || n;
    return n
  }
})