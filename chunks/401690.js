"use strict";
n.r(t), n.d(t, {
  default: function() {
    return Q
  }
}), n("222007"), n("424973");
var s = n("917351"),
  i = n.n(s),
  r = n("249654"),
  a = n("446674"),
  o = n("913144"),
  d = n("233069"),
  u = n("42203"),
  l = n("305961"),
  f = n("660478"),
  _ = n("18494"),
  c = n("689275"),
  g = n("755624"),
  m = n("984674"),
  h = n("724210");
let v = {},
  E = {},
  p = {},
  y = {},
  C = {},
  T = {},
  S = null,
  I = {};

function A() {
  for (let e in v = {}, C = {}, E = {}, p = {}, y = {}, S = _.default.getChannelId(), I) clearTimeout(I[e]);
  I = {}, c.default.forEachGuild(e => {
    N(e)
  }), O()
}

function D(e) {
  for (let t in delete v[e], delete C[e], delete E[e], delete p[e], delete y[e], N(e), p[e]) P(e, t)
}

function N(e) {
  let t = c.default.getThreadsForGuild(e);
  for (let e in t)
    for (let n in t[e]) {
      F(n);
      let e = u.default.getChannel(n);
      if (null == e) continue;
      let t = g.default.joinTimestamp(n);
      if (null != t) {
        let n = {
            channel: e,
            joinTimestamp: t.getTime()
          },
          {
            isUnread: s,
            isRelevant: i,
            isTimedRelevant: r
          } = U(e);
        x(v, e, n, !1), x(C, e, i ? n : null, !1), x(E, e, s ? n : null, !1), r && G(e, !0)
      } else {
        x(p, e, e, !1);
        let t = f.default.isForumPostUnread(e.id);
        x(y, e, t ? e : null, !1)
      }
    }
}

function O() {
  for (let e in T = {}, p)
    for (let t in p[e]) P(e, t)
}

function b(e) {
  let t = u.default.getBasicChannel(e);
  null != t && d.THREADED_CHANNEL_TYPES.has(t.type) && P(t.guild_id, t.id)
}

function P(e, t) {
  let n = u.default.getChannel(t);
  if (null == n || !n.isForumLikeChannel()) return;
  if (null == T[e] && (T[e] = {}), T[e][t] = 0, null == p[e] || null == p[e][t]) return;
  let s = l.default.getGuild(e);
  if (null == s) return;
  let i = f.default.getTrackedAckMessageId(t);
  if (null == i) {
    let e = Date.now();
    null != s.joinedAt && (s.joinedAt instanceof Date ? e = s.joinedAt.getTime() : "string" == typeof s.joinedAt && (e = new Date(s.joinedAt).getTime())), i = r.default.fromTimestamp(e)
  }
  for (let n in p[e][t]) t === S ? f.default.isNewForumThread(n, t, s) && T[e][t]++ : r.default.compare(n, i) > 0 && !f.default.hasOpenedThread(n) && T[e][t]++
}

function k(e, t, n) {
  if (null == t) return !1;
  let s = u.default.getChannel(n),
    i = g.default.joinTimestamp(n);
  if (null != s && c.default.isActive(e, t, n)) {
    if (null != i) {
      let e = {
          channel: s,
          joinTimestamp: i.getTime()
        },
        {
          isUnread: t,
          isRelevant: n,
          isTimedRelevant: r
        } = U(s);
      x(v, s, e, !0), x(C, s, n ? e : null, !0), x(E, s, t ? e : null, !0), x(p, s, null, !0), x(y, s, null, !0), G(s, r)
    } else {
      let e = f.default.isForumPostUnread(s.id);
      x(v, s, null, !0), x(E, s, null, !0), x(C, s, null, !0), x(p, s, s, !0), x(y, s, e ? s : null, !0), F(s.id)
    }
    P(e, t)
  } else B(v, e, t, n), B(C, e, t, n), B(E, e, t, n), B(p, e, t, n), B(y, e, t, n), F(n), P(e, t)
}

function R(e) {
  return k(e.channel.guild_id, e.channel.parent_id, e.channel.id)
}

function V(e) {
  let t = u.default.getChannel(e.id);
  return !!(null != t && c.default.isActive(e.guildId, t.parent_id, e.id)) && k(t.guild_id, t.parent_id, t.id)
}

function M(e) {
  let t = u.default.getChannel(e.channelId);
  if (null == t) w();
  else {
    let {
      guild_id: e,
      parent_id: s
    } = t;
    if (!d.THREAD_CHANNEL_TYPES.has(t.type)) {
      var n;
      return !!(Number(null === (n = T[e]) || void 0 === n ? void 0 : n[t.id]) > 0) && (P(e, t.id), !0)
    }
    if (null == s) return !1;
    if (H(v, t)) {
      let {
        isUnread: n,
        isRelevant: i,
        isTimedRelevant: r
      } = U(t);
      G(t, r);
      let a = H(E, t),
        o = H(C, t);
      if (n === a && i === o) return !1;
      let d = v[e][s][t.id],
        u = n ? d : null,
        l = i ? d : null;
      x(E, t, u, !0), x(C, t, l, !0), P(e, s)
    } else {
      let e = H(y, t),
        n = f.default.isForumPostUnread(t.id);
      if (n === e) return !1;
      x(y, t, n ? t : null, !0)
    }
  }
}

function w() {
  for (let e in E = {}, C = {}, v)
    for (let t in v[e])
      for (let n in v[e][t]) {
        let s = v[e][t][n],
          {
            isUnread: i,
            isRelevant: r,
            isTimedRelevant: a
          } = U(s.channel);
        i && x(E, s.channel, s, !1), r && x(C, s.channel, s, !1), G(s.channel, a)
      }
  for (let e in y = {}, p)
    for (let t in p[e])
      for (let n in p[e][t]) {
        let s = p[e][t][n],
          i = f.default.isForumPostUnread(n);
        i && x(y, s, s, !1)
      }
  O()
}

function L() {
  let e = S;
  if ((S = _.default.getChannelId()) === e) return !1;
  b(e), b(S)
}

function U(e) {
  let t = f.default.getMentionCount(e.id) > 0,
    n = f.default.hasUnread(e.id) && (!g.default.isMuted(e.id) || t),
    s = e.hasFlag(h.ChannelFlags.PINNED),
    i = e.isActiveThread(),
    r = i && (0, m.default)(e) > Date.now();
  return {
    isUnread: (i || s) && n,
    isRelevant: r || s || n,
    isTimedRelevant: r
  }
}

function G(e, t) {
  F(e.id), t && function(e) {
    I[e.id] = setTimeout(() => {
      let t = u.default.getChannel(e.id);
      null != t && o.default.dispatch({
        type: "THREAD_UPDATE",
        channel: t
      })
    }, (0, m.default)(e) - Date.now() + 1)
  }(e)
}

function F(e) {
  e in I && (clearTimeout(I[e]), delete I[e])
}

function x(e, t, n, s) {
  let {
    guild_id: r,
    parent_id: a,
    id: o
  } = t;
  null != r && null != a && null != o && (!(r in e) && (e[r] = {}), !(a in e[r]) && (e[r][a] = {}), s && (e[r] = {
    ...e[r],
    [a]: {
      ...e[r][a]
    }
  }), null === n ? (delete e[r][a][o], i.isEmpty(e[r][a]) && delete e[r][a]) : e[r][a][o] = n)
}

function B(e, t, n, s) {
  if (null != t && null != n && null != s) Y(e, t, n, s) && (e[t] = {
    ...e[t],
    [n]: {
      ...e[t][n]
    }
  }, delete e[t][n][s], i.isEmpty(e[t][n]) && delete e[t][n])
}

function H(e, t) {
  return Y(e, t.guild_id, t.parent_id, t.id)
}

function Y(e, t, n, s) {
  return t in e && n in e[t] && s in e[t][n]
}
let j = {},
  K = {},
  W = {},
  z = {},
  q = {};
class X extends a.default.Store {
  initialize() {
    this.waitFor(c.default, u.default, g.default, f.default), this.syncWith([_.default], L)
  }
  hasActiveJoinedUnreadThreads(e, t) {
    return e in E && t in E[e]
  }
  getActiveUnjoinedThreadsForParent(e, t) {
    var n;
    return e in p && null !== (n = p[e][t]) && void 0 !== n ? n : z
  }
  getActiveJoinedThreadsForParent(e, t) {
    var n;
    return e in v && null !== (n = v[e][t]) && void 0 !== n ? n : W
  }
  getActiveJoinedThreadsForGuild(e) {
    var t;
    return null !== (t = v[e]) && void 0 !== t ? t : j
  }
  getActiveJoinedUnreadThreadsForGuild(e) {
    var t;
    return null !== (t = E[e]) && void 0 !== t ? t : j
  }
  getActiveJoinedUnreadThreadsForParent(e, t) {
    var n;
    return null !== (n = this.getActiveJoinedUnreadThreadsForGuild(e)[t]) && void 0 !== n ? n : W
  }
  getActiveJoinedRelevantThreadsForGuild(e) {
    var t;
    return null !== (t = C[e]) && void 0 !== t ? t : j
  }
  getActiveJoinedRelevantThreadsForParent(e, t) {
    var n;
    return null !== (n = this.getActiveJoinedRelevantThreadsForGuild(e)[t]) && void 0 !== n ? n : W
  }
  getActiveUnjoinedThreadsForGuild(e) {
    var t;
    return null !== (t = p[e]) && void 0 !== t ? t : K
  }
  getActiveUnjoinedUnreadThreadsForGuild(e) {
    var t;
    return null !== (t = y[e]) && void 0 !== t ? t : j
  }
  getActiveUnjoinedUnreadThreadsForParent(e, t) {
    var n;
    return null !== (n = this.getActiveUnjoinedUnreadThreadsForGuild(e)[t]) && void 0 !== n ? n : W
  }
  getNewThreadCountsForGuild(e) {
    var t;
    return null !== (t = T[e]) && void 0 !== t ? t : q
  }
  computeAllActiveJoinedThreads(e) {
    let t = [];
    for (let n in v)
      if (n === e || null == e)
        for (let e in v[n])
          for (let s in v[n][e]) t.push(v[n][e][s].channel);
    return t
  }
  getNewThreadCount(e, t) {
    var n, s;
    return null !== (s = null === (n = T[e]) || void 0 === n ? void 0 : n[t]) && void 0 !== s ? s : 0
  }
  getActiveThreadCount(e, t) {
    var n, s, r, a;
    let o = i.size(null !== (r = null === (n = v[e]) || void 0 === n ? void 0 : n[t]) && void 0 !== r ? r : {}),
      d = i.size(null !== (a = null === (s = p[e]) || void 0 === s ? void 0 : s[t]) && void 0 !== a ? a : {});
    return o + d
  }
}
X.displayName = "ActiveJoinedThreadsStore";
var Q = new X(o.default, {
  CONNECTION_OPEN: A,
  OVERLAY_INITIALIZE: A,
  THREAD_LIST_SYNC: function(e) {
    let {
      guildId: t
    } = e;
    return D(t)
  },
  LOAD_THREADS_SUCCESS: A,
  LOAD_ARCHIVED_THREADS_SUCCESS: A,
  SEARCH_FINISH: A,
  GUILD_CREATE: function(e) {
    let {
      guild: t
    } = e;
    return D(t.id)
  },
  GUILD_DELETE: A,
  CURRENT_USER_UPDATE: A,
  THREAD_CREATE: R,
  THREAD_UPDATE: R,
  THREAD_DELETE: R,
  CHANNEL_UPDATES: function(e) {
    let {
      channels: t
    } = e;
    for (let e of t)
      if (e.isNSFW() !== function(e, t) {
          if (null == t) return !1;
          let n = v[e],
            s = null == n ? null : n[t];
          if (null != s) {
            for (let e in s)
              if (s[e].channel.isNSFW()) return !0
          }
          let i = p[e],
            r = null == i ? null : i[t];
          if (null != r) {
            for (let e in r)
              if (r[e].isNSFW()) return !0
          }
          return !1
        }(e.guild_id, e.parent_id)) {
        A();
        return
      } return !1
  },
  CHANNEL_DELETE: function(e) {
    let {
      channel: t
    } = e, n = !1;
    return null != t.guild_id && null != t.parent_id && (t.guild_id in v && t.parent_id in v[t.guild_id] && (delete v[t.guild_id][t.parent_id], n = !0), t.guild_id in E && t.parent_id in E[t.guild_id] && (delete E[t.guild_id][t.parent_id], n = !0), t.guild_id in C && t.parent_id in C[t.guild_id] && (Object.keys(C[t.guild_id][t.parent_id]).forEach(F), delete C[t.guild_id][t.parent_id], n = !0), t.guild_id in p && t.parent_id in p[t.guild_id] && (delete p[t.guild_id][t.parent_id], n = !0), t.guild_id in y && t.parent_id in y[t.guild_id] && (delete y[t.guild_id][t.parent_id], n = !0), n && P(t.guild_id, t.parent_id)), n
  },
  THREAD_MEMBER_UPDATE: V,
  THREAD_MEMBERS_UPDATE: V,
  LOAD_MESSAGES_SUCCESS: M,
  MESSAGE_CREATE: M,
  MESSAGE_DELETE: M,
  MESSAGE_DELETE_BULK: M,
  MESSAGE_ACK: M,
  CHANNEL_ACK: M,
  CHANNEL_LOCAL_ACK: M,
  CHANNEL_SELECT: function(e) {
    M(e), L()
  },
  PASSIVE_UPDATE_V1: function(e) {
    null != e.channels && w()
  },
  WINDOW_FOCUS: w,
  UPDATE_CHANNEL_DIMENSIONS: w,
  DRAWER_OPEN: w,
  DRAWER_CLOSE: w,
  BULK_ACK: w
})