"use strict";
let i;
n.r(t), n.d(t, {
  PAGE_SIZE: function() {
    return m
  },
  default: function() {
    return L
  }
}), n("222007");
var a = n("917351"),
  l = n.n(a),
  s = n("335710"),
  r = n("249654"),
  u = n("446674"),
  d = n("913144"),
  o = n("786742"),
  c = n("867965"),
  _ = n("233069"),
  f = n("42203"),
  h = n("660478"),
  E = n("449008"),
  g = n("755624");
let m = 25,
  A = !1,
  T = !0,
  p = !1,
  S = !1,
  M = null,
  v = s.ThreadSortOrder.LATEST_ACTIVITY,
  N = [],
  C = 0;

function O() {
  A = !1, T = !0, p = !1, S = !1, M = null, v = s.ThreadSortOrder.LATEST_ACTIVITY, i = new Set, C = 0, N = []
}

function R(e, t) {
  return t === s.ThreadSortOrder.LATEST_ACTIVITY ? h.default.lastMessageId(e.id) : e.id
}

function I() {
  if (null == M) return !1;
  let e = !p,
    t = f.default.getChannel(N[N.length - 1]),
    n = null == t ? null : R(t, v);
  N = l(f.default.getAllThreadsForParent(M)).filter(e => e.isArchivedThread()).filter(t => {
    var a;
    if (0 !== i.size && (null === (a = t.appliedTags) || void 0 === a ? void 0 : a.some(e => i.has(e))) !== !0) return !1;
    if (e || null == n) return !0;
    {
      let e = null == t ? null : R(t, v);
      return null != e && r.default.compare(e, n) >= 0
    }
  }).sort((e, t) => r.default.compare(R(e, v), R(t, v))).map(e => e.id).reverse().value()
}

function b(e) {
  if (!(N.indexOf(e) >= 0)) return !1;
  N = N.filter(t => t !== e)
}
let D = [];
class y extends u.default.Store {
  initialize() {
    this.waitFor(f.default, g.default, h.default)
  }
  get canLoadMore() {
    return p && !A && !S
  }
  get nextOffset() {
    return C
  }
  get isInitialLoad() {
    return T
  }
  isLoading(e, t, n) {
    return M === e && v === t && (0, E.areSetsEqual)(i, n) ? A : (O(), !1)
  }
  getThreads(e, t, n) {
    return M === e && v === t && (0, E.areSetsEqual)(i, n) ? N : D
  }
}
y.displayName = "ArchivedThreadsStore";
var L = new y(d.default, {
  CONNECTION_OPEN: O,
  THREAD_DELETE: function(e) {
    let {
      channel: t
    } = e;
    return b(t.id)
  },
  THREAD_UPDATE: function(e) {
    let {
      channel: t
    } = e;
    return M === t.parent_id && !!(0, o.isForumPostPinned)(t.id) && void b(t.id)
  },
  CHANNEL_DELETE: function(e) {
    if (e.channel.id !== M) return !1;
    O()
  },
  LOAD_ARCHIVED_THREADS: function(e) {
    (e.channelId !== M || e.sortOrder !== v || !(0, E.areSetsEqual)(e.tagFilter, i)) && O(), M = e.channelId, v = e.sortOrder, i = e.tagFilter instanceof Set ? e.tagFilter : new Set(e.tagFilter), A = !0, T = !1
  },
  LOAD_ARCHIVED_THREADS_SUCCESS: function(e) {
    if (e.channelId !== M || e.sortOrder !== v || !(0, E.areSetsEqual)(e.tagFilter, i)) return !1;
    let t = e.threads.filter(e => _.ALL_CHANNEL_TYPES.has(e.type)).map(e => e.id);
    N = N.concat(t);
    let n = f.default.getChannel(M);
    null != n && n.isForumLikeChannel() && (0, c.trackForumMorePostsLoaded)({
      guildId: n.guild_id,
      channelId: n.id,
      numArchivedThreads: N.length,
      hasMoreThreads: e.hasMore,
      filterTagIds: Array.from(e.tagFilter),
      sortOrder: e.sortOrder
    }), I(), p = e.hasMore, C = e.offset + m, A = !1, T = !1
  },
  LOAD_ARCHIVED_THREADS_FAIL: function(e) {
    if (e.channelId !== M || e.sortOrder !== v || !(0, E.areSetsEqual)(e.tagFilter, i)) return !1;
    A = !1, S = !0, T = !1
  },
  RESORT_THREADS: function(e) {
    return (null == M || null == e.channelId || M === e.channelId) && I()
  }
})