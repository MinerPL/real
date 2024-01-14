"use strict";
n.r(t), n.d(t, {
  default: function() {
    return ei
  }
}), n("222007"), n("581081"), n("70102");
var i = n("917351"),
  r = n.n(i),
  s = n("102053"),
  a = n("249654"),
  o = n("446674"),
  l = n("913144"),
  u = n("802493"),
  c = n("595525"),
  d = n("860255"),
  f = n("846527"),
  E = n("1544"),
  h = n("605250"),
  p = n("379881"),
  _ = n("560208"),
  S = n("233069"),
  m = n("271938"),
  T = n("305961"),
  g = n("697218"),
  I = n("49111");
let C = new h.default("ChannelStore"),
  v = {},
  A = {},
  R = {},
  N = {},
  O = null,
  D = {},
  y = {},
  P = 0,
  L = {},
  b = {},
  M = new Set,
  U = {},
  G = 0,
  w = 0;

function k(e, t, n) {
  if (null == e || !M.has(e) || 0 === t && f.default.hasGuild(e)) return;
  C.verbose("hydrating guild (guild: ".concat(e, ", trace: ").concat(n, ")"));
  let i = u.default.database(),
    r = null != i ? (0, c.tryLoadOrResetCacheGateway)("ensureGuildLoaded(".concat(e, ")"), () => d.default.getSync(i, e)) : null;
  if (null == r) {
    M.delete(e), f.default.restored(e), C.log("load returned null; early returning (guild: ".concat(e, ", database: ").concat(i, ")"));
    return
  }
  let [a, o] = r;
  for (let n of ((0, E.default)(a), 0 !== t && (w += 1), M.delete(e), f.default.restored(e), s.default.mark("❗", "loaded guild channels (guild: ".concat(e, ")"), o), a)) !Object.hasOwn(A, n.id) && W((0, S.castChannelRecord)(n));
  C.verbose("hydration complete (guild: ".concat(e, ", channels: ").concat(a.length, ", guilds_loaded: ").concat(w, ")"))
}

function x(e, t, n) {
  if (M.size > 0 && !Object.hasOwn(A, e) && !Object.hasOwn(N, e) && !Object.hasOwn(D, e) && !Object.hasOwn(b, e) && 1 === t) {
    let i = f.default.getBasicChannel(e);
    (null == i ? void 0 : i.guild_id) != null && k(i.guild_id, t, n)
  }
}

function F(e) {
  if (null != R[e]) {
    for (let t of Object.keys(R[e])) delete A[t];
    delete R[e]
  }
}

function V(e) {
  var t, n, i, r;
  return x(e, 0, "getBasicChannel"), null !== (r = null !== (i = null !== (n = null !== (t = A[e]) && void 0 !== t ? t : N[e]) && void 0 !== n ? n : D[e]) && void 0 !== i ? i : b[e]) && void 0 !== r ? r : f.default.getBasicChannel(e)
}

function B(e) {
  var t, n, i, r;
  return x(e, 1, "getChannel"), null !== (r = null !== (i = null !== (n = null !== (t = A[e]) && void 0 !== t ? t : N[e]) && void 0 !== n ? n : D[e]) && void 0 !== i ? i : b[e]) && void 0 !== r ? r : U[e]
}

function H(e) {
  e.isPrivate() ? (delete U[e.id], j(e)) : e.isThread() ? Y(e) : S.GUILD_CHANNEL_TYPES.has(e.type) && function(e) {
    W(e)
  }(e)
}

function j(e) {
  N[e.id] = e, e.type === I.ChannelTypes.DM && (y[e.getRecipientId()] = e.id), P += 1
}

function Y(e) {
  let t = A[e.parent_id];
  D[e.id] = e.merge({
    nsfw: (null == t ? void 0 : t.nsfw) === !0,
    parentChannelThreadType: null == t ? void 0 : t.type
  }), e.isScheduledForDeletion() && l.default.dispatch({
    type: "THREAD_DELETE",
    channel: e
  })
}

function W(e) {
  var t, n;
  let {
    id: i,
    guild_id: r
  } = e;
  A[i] = e, R[r] = null !== (t = R[r]) && void 0 !== t ? t : {}, R[r][i] = e, L[r] = (null !== (n = L[r]) && void 0 !== n ? n : 0) + 1
}

function K(e) {
  if (M.add(e.id), null != e.channels)
    for (let t of (F(e.id), M.delete(e.id), f.default.restored(e.id), e.channels)) W(t);
  if (null != e.channelUpdates) {
    let t = e.channelUpdates;
    for (let n of ((t.writes.length > 0 || t.deletes.length > 0) && f.default.invalidate(e.id), t.deletes)) Z(A[n]);
    for (let e of t.writes) W(e)
  }
  if (null != e.threads)
    for (let t of e.threads) Y(t)
}

function z() {
  y = {}, A = {}, R = {}, L = {}, N = {}, U = {}, D = {}, M = new Set
}

function q(e) {
  for (let t of (z(), e.channels)) H((0, E.deserializeChannel)((0, S.castChannelRecord)(t)));
  M = new Set(e.guilds.map(e => e.id))
}

function X(e) {
  if (!S.ALL_CHANNEL_TYPES.has(e.channel.type)) return !1;
  let t = B(e.channel.id);
  if (null == t) t = e.channel;
  else {
    var n;
    t = t.merge({
      ...e.channel.toJS(),
      bitrate: null !== (n = e.channel.bitrate) && void 0 !== n ? n : t.bitrate
    })
  }
  H(t)
}

function Q(e) {
  let {
    threads: t
  } = e;
  t.forEach(e => {
    S.ALL_CHANNEL_TYPES.has(e.type) && H((0, S.createChannelRecordFromServer)(e))
  })
}

function Z(e) {
  if (null == e) return;
  let t = e.guild_id;
  e.id in N && delete N[e.id], e.id in A && delete A[e.id], e.id in D && delete D[e.id], null != t && null != R[t] && e.id in R[t] && delete R[t][e.id], ! function(e) {
    if (null == e.guild_id || S.THREAD_CHANNEL_TYPES.has(e.type))(0, S.isPrivate)(e.type) && (P += 1);
    else {
      var t;
      L[e.guild_id] = (null !== (t = L[e.guild_id]) && void 0 !== t ? t : 0) + 1
    }
  }(e)
}

function J(e) {
  var t, n;
  let {
    channel: i
  } = e, r = null !== (n = null !== (t = A[i.id]) && void 0 !== t ? t : N[i.id]) && void 0 !== n ? n : D[i.id];
  if (null == r) return !1;
  Z(r), ! function(e) {
    if ("basicPermissions" in e || e.type !== I.ChannelTypes.DM) return;
    let t = e.getRecipientId(),
      n = y[t];
    n === e.id && delete y[t]
  }(r)
}

function $(e) {
  let {
    messages: t
  } = e;
  for (let e of t) null != e.thread && !(e.thread.id in D) && S.ALL_CHANNEL_TYPES.has(e.thread.type) && Y((0, S.createChannelRecordFromServer)(e.thread))
}

function ee(e) {
  null != e && !(e.id in D) && S.ALL_CHANNEL_TYPES.has(e.type) && Y((0, S.createChannelRecordFromServer)(e))
}

function et() {
  for (let e in b = {}, p.default.getFavoriteChannels()) {
    let t = p.default.getCategoryRecord(e);
    null != t && (b[e] = t)
  }
}
class en extends o.default.Store {
  initialize() {
    this.waitFor(f.default, g.default, T.default, p.default), this.syncWith([p.default], et)
  }
  hasChannel(e) {
    return null != V(e)
  }
  getBasicChannel(e) {
    if (null != e) return V(e)
  }
  getChannel(e) {
    if (null != e) return B(e)
  }
  loadAllGuildAndPrivateChannelsFromDisk() {
    for (let e of T.default.getGuildIds()) k(e, 1, "loadAllGuildAndPrivateChannelsFromDisk");
    return {
      ...A,
      ...N
    }
  }
  getChannelIds(e) {
    var t, n;
    return (k(e, 0, "getChannelIds"), null == e) ? Object.keys(N) : Object.keys(null !== (n = null !== (t = f.default.getGuildBasicChannels(e)) && void 0 !== t ? t : R[e]) && void 0 !== n ? n : v)
  }
  getMutablePrivateChannels() {
    return N
  }
  getMutableBasicGuildChannelsForGuild(e) {
    var t, n;
    return k(e, 0, "getMutableBasicGuildChannelsForGuild"), null !== (n = null !== (t = f.default.getGuildBasicChannels(e)) && void 0 !== t ? t : R[e]) && void 0 !== n ? n : v
  }
  getMutableGuildChannelsForGuild(e) {
    var t;
    return k(e, 1, "getMutableGuildChannelsForGuild"), null !== (t = R[e]) && void 0 !== t ? t : v
  }
  getSortedPrivateChannels() {
    return r(N).values().sort((e, t) => a.default.compare(e.lastMessageId, t.lastMessageId)).reverse().value()
  }
  getDMFromUserId(e) {
    if (null != e) return y[e]
  }
  getDMUserIds() {
    return Object.keys(y)
  }
  getPrivateChannelsVersion() {
    return P
  }
  getGuildChannelsVersion(e) {
    var t;
    return null !== (t = L[e]) && void 0 !== t ? t : 0
  }
  getAllThreadsForParent(e) {
    return r.values(D).filter(t => t.parent_id === e)
  }
  getInitialOverlayState() {
    return {
      ...A,
      ...N,
      ...D
    }
  }
}
en.displayName = "ChannelStore";
var ei = new en(l.default, {
  BACKGROUND_SYNC: function(e) {
    let {
      guilds: t
    } = e, n = R;
    A = {}, R = {}, L = {}, t.forEach(e => {
      if ("unavailable" === e.data_mode) r.forEach(n[e.id], W);
      else if ("partial" === e.data_mode) {
        var t, i;
        r.forEach(n[e.id], W);
        let s = null !== (i = e.partial_updates.deleted_channel_ids) && void 0 !== i ? i : [];
        s.length > 0 && (k(e.id, 1, "handleBackgroundSync"), s.forEach(e => Z(A[e]))), null === (t = e.partial_updates.channels) || void 0 === t || t.forEach(t => W((0, S.createChannelRecordFromServer)(t, e.id)))
      } else F(e.id), M.delete(e.id), f.default.restored(e.id), e.channels.forEach(t => W((0, S.createChannelRecordFromServer)(t, e.id)))
    })
  },
  CACHE_LOADED_LAZY: function(e) {
    if (null != e.privateChannels)
      for (let t of e.privateChannels) H((0, S.castChannelRecord)(t));
    for (let [t, n] of e.guildChannels)
      for (let e of n) H((0, S.castChannelRecord)(e));
    e.guilds.length, M = new Set(e.guilds.map(e => e.id))
  },
  CACHE_LOADED: q,
  CHANNEL_CREATE: function(e) {
    H(e.channel)
  },
  CHANNEL_DELETE: J,
  CHANNEL_RECIPIENT_ADD: function(e) {
    let t = B(e.channelId),
      n = m.default.getId();
    return (null == t ? !!void 0 : !!t.isPrivate()) && (H(t.addRecipient(e.user.id, e.nick, n)), !0)
  },
  CHANNEL_RECIPIENT_REMOVE: function(e) {
    let t = B(e.channelId);
    return (null == t ? !!void 0 : !!t.isPrivate()) && (H(t.removeRecipient(e.user.id)), !0)
  },
  CHANNEL_UPDATES: function(e) {
    let t = e.channels.some(e => {
      let t = B(e.id);
      return e.nsfw !== (null == t ? void 0 : t.nsfw) || e.type !== (null == t ? void 0 : t.type)
    });
    for (let t of e.channels) H(t);
    t && Object.values(D).forEach(e => H(e))
  },
  CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
    let {
      lazyPrivateChannels: t
    } = e;
    null != O && (N = {}, O.forEach(j)), t.forEach(j)
  },
  CONNECTION_OPEN: function(e) {
    let t = R;
    for (let n of (y = {}, A = {}, R = {}, D = {}, L = {}, U = {}, M = new Set, O = e.initialPrivateChannels, e.initialPrivateChannels.forEach(j), e.guilds)) "partial" === n.dataMode && r.forEach(t[n.id], W), K(n);
    et()
  },
  GUILD_CREATE: function(e) {
    K(e.guild)
  },
  GUILD_DELETE: function(e) {
    F(e.guild.id), M.delete(e.guild.id), f.default.invalidate(e.guild.id)
  },
  GUILD_FEED_FETCH_SUCCESS: function(e) {
    let {
      data: t
    } = e, n = !1, i = (0, _.getThreadsFromGuildFeedFetch)(t);
    for (let e of i) !(e.id in D) && S.ALL_CHANNEL_TYPES.has(e.type) && (Y((0, S.createChannelRecordFromServer)(e)), n = !0);
    return n
  },
  LOAD_ARCHIVED_THREADS_SUCCESS: Q,
  LOAD_MESSAGES_AROUND_SUCCESS: $,
  LOAD_MESSAGES_SUCCESS: $,
  LOAD_THREADS_SUCCESS: Q,
  LOGOUT: function() {
    z()
  },
  OVERLAY_INITIALIZE: q,
  SEARCH_FINISH: function(e) {
    let {
      messages: t,
      threads: n,
      channels: i
    } = e;
    for (let e of t)
      for (let t of e) ee(t.thread);
    n.forEach(ee), null == i || i.forEach(e => {
      let t = (0, S.createChannelRecordFromServer)(e),
        n = null != B(e.id),
        i = null != U[e.id];
      t.isPrivate() && (!n || i) ? U[t.id] = t : !n && H(t)
    })
  },
  THREAD_CREATE: X,
  THREAD_DELETE: J,
  THREAD_LIST_SYNC: function(e) {
    let {
      threads: t
    } = e;
    t.forEach(e => {
      S.ALL_CHANNEL_TYPES.has(e.type) && H(e)
    })
  },
  THREAD_UPDATE: X
})