"use strict";
n.r(t), n.d(t, {
  ENABLE_CACHE_STORE: function() {
    return G
  }
}), n("222007"), n("808653");
var a = n("102053");
n("576863");
var s = n("316693"),
  i = n("446674"),
  l = n("95410"),
  r = n("913144"),
  o = n("595525"),
  u = n("759370"),
  d = n("29328"),
  c = n("849365"),
  f = n("219788"),
  E = n("860255"),
  _ = n("794897"),
  h = n("723939"),
  C = n("605250"),
  I = n("619443"),
  T = n("410912"),
  S = n("271938"),
  m = n("42203"),
  p = n("305961"),
  A = n("660478"),
  g = n("18494"),
  N = n("162771"),
  R = n("697218"),
  O = n("287850"),
  L = n("831588"),
  v = n("718517"),
  M = n("773336"),
  P = n("969388"),
  D = n("288206"),
  y = n("1544"),
  x = n("619317"),
  b = n("49111");
let U = new C.default("CacheStore"),
  G = !1,
  j = "stable-27",
  w = !1,
  k = "initializing",
  F = 15 * v.default.Millis.MINUTE,
  H = 0,
  B = !1,
  V = !1,
  Y = !1;

function W(e) {
  U.log("Clearing cache store"), H = Date.now(), D.default.clear(), l.default.remove(b.CACHE_STORE_KEY), l.default.remove(b.CACHE_STORE_LAZY_KEY), l.default.remove(b.CACHE_STORE_CHANNELS_LAZY_KEY), h.default.replaceDisableAllDatabases("CacheStore (".concat(e, ")")), k = "no-cache"
}

function K() {
  if (!(0, L.isAuthenticated)()) {
    U.log("Not writing cache because not authenticated");
    return
  }
  if (w) {
    U.log("Not writing cache because caches cleared");
    return
  }
  if (!Y) {
    U.log("Not writing cache because never connected");
    return
  }
  z()
}

function z() {
  U.verbose("Writing cache now"), H = Date.now();
  let e = q(),
    t = {
      version: j,
      channels: q(),
      guilds: function() {
        let e = p.default.getGuild(N.default.getGuildId());
        return null != e ? [e] : []
      }(),
      users: function(e) {
        let t = new Set;
        e.forEach(e => {
          e.isPrivate() && e.recipients.forEach(e => {
            let n = R.default.getUser(e);
            null != n && t.add(n)
          })
        }), O.default.getPrivateChannelIds().forEach(e => {
          let n = m.default.getChannel(e);
          (null == n ? void 0 : n.isPrivate()) && n.recipients.forEach(e => {
            let n = R.default.getUser(e);
            null != n && t.add(n)
          })
        });
        let n = R.default.getCurrentUser();
        return null != n && t.add(n), Array.from(t)
      }(e),
      readStates: function() {
        return A.default.getAllReadStates(!1)
      }()
    };
  B = !0, l.default.set(b.CACHE_STORE_KEY, t), l.default.remove(b.CACHE_STORE_CHANNELS_LAZY_KEY),
    function() {
      let e = Date.now().toString(),
        t = {
          version: j,
          nonce: e,
          saveableChannels: _.default.toSnapshot()
        };
      U.verbose("Writing lazy cache (nonce: ".concat(e, ")")), r.default.dispatch({
        type: "WRITE_CACHES",
        nonce: e
      }), l.default.set(b.CACHE_STORE_LAZY_KEY, t), D.default.persist(e)
    }()
}

function q() {
  let e = m.default.getChannel(g.default.getChannelId());
  return null != e ? [e] : []
}

function Q(e) {
  if (null != e.guilds) {
    for (let {
        roles: t
      }
      of e.guilds)
      if (null != t)
        for (let e in t) {
          let n = t[e];
          n.permissions = s.default.deserialize(n.permissions)
        }
  }
  null != e.channels && (0, y.default)(e.channels), null != e.privateChannels && (0, y.default)(e.privateChannels), null != e.guildChannels && (0, y.deserializeChannelEntries)(e.guildChannels)
}
async function Z(e, t, n) {
  let a = performance.now();
  if (null == e || null == n) return U.verbose("skipped loaded messages (channel: ".concat(n, ", database: ").concat(e, ").")), [performance.now() - a, {
    guildId: null,
    channelId: null,
    users: [],
    members: [],
    messages: []
  }];
  {
    let s = await f.default.startupLoad(e, t, n, b.MAX_MESSAGES_PER_CHANNEL);
    U.verbose("loaded ".concat(s.messages.length, " messages (guild: ").concat(t, ", channel: ").concat(n, ")."));
    let i = {
      guildId: t,
      channelId: n,
      users: s.users,
      members: s.members,
      messages: s.messages
    };
    return [performance.now() - a, i]
  }
}
async function X() {
  let e = performance.now(),
    t = await new Promise(e => l.default.asyncGet(b.CACHE_STORE_KEY, e));
  return (null == t ? void 0 : t.version) === j ? (Q(t), [performance.now() - e, t]) : (U.log("cache either did not exist, or contains an incompatible version (required: ".concat(j, ", loaded: ").concat(null == t ? void 0 : t.version, ").")), [performance.now() - e, null])
}
async function J(e, t, n) {
  var s, l, o, u, d;
  U.verbose("loading early cache");
  let c = I.default.getSocket();
  c.connect();
  let f = null !== (s = N.default.getGuildId()) && void 0 !== s ? s : null,
    _ = null !== (l = g.default.getChannelId()) && void 0 !== l ? l : null,
    h = performance.now(),
    C = T.default.loadCachedMessages.measureAsyncWithoutNesting(() => Z(e, f, _)),
    S = T.default.loadMiniCache.measureAsyncWithoutNesting(X),
    m = T.default.fetchInitialGuildCache.measureAsync(() => $(e, c, n)),
    p = null != e && "private-channels" === n.page ? a.default.timeAsync("\uD83D\uDCBE", "kv: private_channels", () => E.default.getAsync(e, null)) : Promise.resolve([]),
    [
      [A, R],
      [O, L], v, M
    ] = await Promise.all([S, C, m, p]),
    P = performance.now() - h;
  if (U.verbose("cache loaded in ".concat(P, "ms (legacy ").concat(A, "ms, channel_history ").concat(O, "ms)")), null == R || null == L) return null == R && null == L ? (0, x.default)("database:legacy_and_history_cache_null") : null == R ? (0, x.default)("database:legacy_cache_null") : (0, x.default)("database:history_cache_null"), U.verbose("finished without dispatching CACHE_LOADED"), [!1, null, 0];
  {
    let s = Object.fromEntries(L.members.map(e => [e.userId, e])),
      l = null != v.guild && null != v.channels,
      E = null !== (u = v.guild) && void 0 !== u ? u : null;
    return i.default.Emitter.batched(() => {
      a.default.time("\uD83D\uDCBE", "Dispatch Mini Cache", () => {
        var e;
        return r.default.dispatch({
          ...R,
          type: "CACHE_LOADED",
          guilds: null != E ? [...R.guilds, E] : R.guilds,
          channels: [...R.channels, ...M, ...null !== (e = v.channels) && void 0 !== e ? e : []],
          users: [...R.users, ...L.users],
          messages: null == L.channelId ? {} : {
            [L.channelId]: L.messages
          },
          guildMembers: null == L.guildId ? {} : {
            [L.guildId]: s
          }
        })
      }), a.default.time("\uD83D\uDCBE", "socket.processFirstQueuedDispatch()", () => c.processFirstQueuedDispatch(new Set(["INITIAL_GUILD"])))
    }), U.verbose("early_cache_summary: (\n        ok: true\n        meta:\n          auth_user_id: ".concat(t, "\n          selected_guild: ").concat(f, "\n          selected_channel: ").concat(_, "\n          navigation_state: ").concat(JSON.stringify(n), "\n          database: ").concat(null != e, "\n            name: ").concat(null == e ? void 0 : e.name, "\n        data:\n          database:\n            private_channels: ").concat("private-channels" === n.page ? M.length : "skipped", "\n            channel_history:\n              guild: ").concat(L.guildId, "\n              channel: ").concat(L.channelId, "\n              messages: ").concat(L.messages.length, "\n                members: ").concat(L.members.length, "\n                users: ").concat(L.users.length, "\n            initial_guild:\n              id: ").concat(null == E ? void 0 : E.id, "\n              channels: ").concat(null === (o = v.channels) || void 0 === o ? void 0 : o.length, "\n          legacy:\n            guilds: ").concat(R.guilds.length, " (").concat(R.guilds.map(e => e.id).join(", "), ")\n            channels: ").concat(R.channels.length, " (").concat(R.channels.map(e => e.id).join(", "), ")\n            users: ").concat(R.users.length, "\n            read_states: ").concat(R.readStates.length, "\n      )")), U.verbose("finished dispatching CACHE_LOADED"), [!0, l && null !== (d = null == E ? void 0 : E.id) && void 0 !== d ? d : null, M.length]
  }
}
async function $(e, t, n) {
  let a = t.getIdentifyInitialGuildId();
  if (null == a && "guild-channels" === n.page && (a = n.guildId), null == e || null == a) return U.verbose("skipped loading initial guild (guild: ".concat(a, ", database: ").concat(e, ")")), Promise.resolve({
    guild: null,
    channels: null
  });
  let s = a,
    [i, l] = await Promise.all([(0, o.tryLoadAsync)(() => d.default.getOneAsync(e, s)), (0, o.tryLoadAsync)(() => E.default.getAsync(e, s))]);
  return {
    guild: i,
    channels: l
  }
}
async function ee(e, t, n, s, i) {
  U.verbose("loading late lazy cache");
  let [f, _, h, C, S] = await T.default.fetchLazyCache.measureAsync(() => Promise.all([a.default.timeAsync("\uD83D\uDCBE", "storage: ".concat(b.CACHE_STORE_LAZY_KEY), () => l.default.asyncGetRaw(b.CACHE_STORE_LAZY_KEY)), (0, o.tryLoadAsync)(() => null != e ? a.default.timeAsync("\uD83D\uDCBE", "kv: cache_version", () => c.default.okAsync(e)) : Promise.resolve(!0)), (0, o.tryLoadAsync)(() => null != e ? a.default.timeAsync("\uD83D\uDCBE", "kv: guilds", () => d.default.getAsync(e)) : Promise.resolve([])), (0, o.tryLoadAsync)(() => null != e ? a.default.timeAsync("\uD83D\uDCBE", "kv: basic_channels", () => u.default.getAsync(e)) : Promise.resolve({
    all: [],
    stale: [],
    channels: []
  })), (0, o.tryLoadAsync)(() => null != e ? a.default.timeAsync("\uD83D\uDCBE", "kv: private_channels", () => E.default.getAsync(e, null)) : Promise.resolve([]))])), m = await T.default.fetchStaleChannels.measureAsync(() => null != e && null != C && C.stale.length > 0 ? (0, o.tryLoadAsync)(() => {
    var t, n;
    return t = e, n = C.stale, U.verbose("loading stale guild channels (count: ".concat(n.length, ", ids: ").concat(n.join(", "), ")")), Promise.all(n.map(e => E.default.getAsync(t, e).then(t => [e, t])))
  }) : Promise.resolve([]));
  await new Promise(e => setTimeout(e, 0)), T.default.loadLazyCache.recordStart();
  let p = I.default.getSocket();
  et(() => {
    var a, l, o;
    let u = performance.now();
    if (!1 === _) {
      (0, x.default)("database:not_ok"), W("database: not ok"), r.default.dispatch({
        type: "CACHE_LOADED_LAZY_NO_CACHE"
      });
      return
    }
    if (null == h || null == C || null == m || null == S) {
      (0, x.default)("database:load_failed"), U.log("couldn't load database item (\n          database: ".concat(null != e, "\n          basic_channels: ").concat(null != C, "\n          guild_channels: ").concat(null != m, "\n          private_channels: ").concat(null != S, "\n          guilds: ").concat(null != h, "\n        )")), W("database: load_failed"), r.default.dispatch({
        type: "CACHE_LOADED_LAZY_NO_CACHE"
      });
      return
    }
    if (null == _ && (h.length > 0 || S.length > 0 || C.all.length > 0)) {
      (0, x.default)("database:versionless"), W("database: versionless"), U.log("kv_cache was not ok (null version with values)"), r.default.dispatch({
        type: "CACHE_LOADED_LAZY_NO_CACHE"
      });
      return
    }
    if (V) {
      (0, x.default)("already_connected"), U.log("Skipping lazy cache; already connected."), r.default.dispatch({
        type: "CACHE_LOADED_LAZY_NO_CACHE"
      });
      return
    }
    if (null == f) {
      U.log("Lazy cache was missing"), (0, x.default)("cache:lazy_cache_missing"), r.default.dispatch({
        type: "CACHE_LOADED_LAZY_NO_CACHE"
      });
      return
    }
    p.addAnalytics({
      hadCacheAtStartup: !0
    });
    let d = T.default.parseLazyCache.measure(() => JSON.parse(f));
    if (d.version !== j) {
      U.log("Saved cached has mismatched version. Expected ".concat(j, ", got ").concat(d.version)), r.default.dispatch({
        type: "CACHE_LOADED_LAZY_NO_CACHE"
      });
      return
    }
    let c = d.nonce,
      E = D.default.getSavedNonce();
    if ("" !== E && c !== E) {
      (0, x.default)("nonce:lazy_cache"), U.log("ClientStateStore has mismatched nonces with cache."), r.default.dispatch({
        type: "CACHE_LOADED_LAZY_NO_CACHE"
      });
      return
    }
    let I = {
      ...d,
      guilds: h,
      privateChannels: S,
      guildChannels: m,
      basicGuildChannels: C.channels,
      initialGuildId: n
    };
    T.default.deserializeCache.measure(() => Q(I)), T.default.dispatchLazyCache.measure(() => r.default.dispatch({
      type: "CACHE_LOADED_LAZY",
      ...I
    })), U.verbose("late lazy cache loaded (ok: true, took: ".concat(performance.now() - u, "ms)")), p.addAnalytics({
      usedCacheAtStartup: !0
    });
    let A = m.reduce((e, t) => {
        let [n, a] = t;
        return e + a.length
      }, 0),
      g = m.length,
      N = C.all.reduce((e, t) => {
        let [n, a] = t;
        return e + a.length
      }, 0),
      R = C.channels.reduce((e, t) => {
        let [n, a] = t;
        return e + a.length
      }, 0),
      O = N - R,
      L = 0 === C.stale.length ? "" : " \xb7 ".concat(C.stale.join(", "));
    U.verbose("lazy_cache_summary: (\n        ok: true\n        meta:\n          auth_user_id: ".concat(t, "\n          nonce: ").concat(c, "\n          initial_guild: ").concat(n, "\n          database: ").concat(null != e, "\n            ok: ").concat(_, "\n            name: ").concat(null == e ? void 0 : e.name, "\n        data:\n          database:\n            guilds: ").concat(h.length, "\n            private_channels: ").concat("private-channels" === s.page ? "skipped" : S.length, "\n            basic_channels:\n              total: ").concat(N, " (").concat(C.channels.length, " guilds)\n              stale: ").concat(O, " (").concat(C.stale.length, " guilds").concat(L, ")\n              unstale: ").concat(R, "\n            full_channels (guilds_with_stale_basic_channels):\n              total: ").concat(A, " (").concat(m.length, " guilds)\n          legacy:\n              saveable_channels: ").concat(null === (l = I.saveableChannels) || void 0 === l ? void 0 : null === (a = l.channels) || void 0 === a ? void 0 : a.length, "\n              users: ").concat(null === (o = I.users) || void 0 === o ? void 0 : o.length, "\n      )")), T.default.setCacheInfo({
      guilds: h.length,
      privateChannels: i + S.length,
      basicChannels: N,
      basicChannelsStale: O,
      fullChannels: A,
      fullChannelGuilds: g
    })
  })
}

function et(e) {
  let t = I.default.getSocket(),
    n = !1;
  i.default.Emitter.batched(() => {
    try {
      if (e(), !t.hasQueuedDispatches()) {
        U.verbose("Processing Dispatch Queue"), t.processDispatchQueue();
        return
      }
      n = !0, T.default.loadLazyCache.recordEnd(), U.verbose("Processing First Queued Dispatch"), t.processFirstQueuedDispatch(new Set(["READY", "INITIAL_GUILD"])), setTimeout(() => {
        U.verbose("Processing Dispatch Queue"), t.processDispatchQueue()
      }, 100)
    } catch (e) {
      var a;
      U.warn("Lazy cache has encountered error", e), W("error: resumeFluxAndSocket"), null === (a = I.default.getSocket()) || void 0 === a || a.resetSocketOnError(e, "LazyCache", {
        sentry: !0,
        immediate: !0
      })
    }
  }), !n && T.default.loadLazyCache.recordEnd()
}
class en extends i.default.Store {
  initialize() {
    if (!G) {
      let e = I.default.getSocket();
      e.processDispatchQueue()
    }
  }
  hasCache() {
    return !G || B
  }
  getLazyCacheStatus() {
    return G ? k : "no-cache"
  }
  async loadCacheAsync(e, t) {
    let n = (0, P.callOnce)(t);
    if ("initializing" !== k) {
      (0, x.default)("cache:lazy_cache_not_initializing"), n(), setTimeout(() => {
        var e;
        return null === (e = I.default.getSocket()) || void 0 === e ? void 0 : e.processDispatchQueue()
      }, 0);
      return
    }
    try {
      let t = S.default.getId(),
        a = h.default.carefullyOpenDatabase(t),
        [s, i, l] = await J(a, t, e);
      s ? (n(), await ee(a, t, i, e, l)) : (n(), await (et(() => r.default.dispatch({
        type: "CACHE_LOADED_LAZY_NO_CACHE"
      })), Promise.resolve()))
    } catch (e) {
      var a;
      U.error("clearing cache. exception encountered while loading cache.", e, e.stack), (0, x.default)("cache:exception"), W("loadCacheAsync"), n(), null === (a = I.default.getSocket()) || void 0 === a || a.resetSocketOnError(e, "loadCacheAsync", {
        sentry: !0,
        immediate: !0
      })
    }
  }
  constructor(...e) {
    super(...e), this.persist = z
  }
}
en.displayName = "CacheStore", new en(r.default, G ? {
  CONNECTION_OPEN: function() {
    return V = !0, Y = !0, !1
  },
  LOGOUT: function() {
    W("action: LOGOUT")
  },
  CONNECTION_CLOSED: function() {
    return V = !1, Y = !0, U.verbose("Writing cache on connection closed"), K(), !1
  },
  APP_STATE_UPDATE: function(e) {
    let {
      state: t
    } = e, n = (0, M.isAndroid)() ? b.AppStates.BACKGROUND : b.AppStates.INACTIVE;
    return n === t && V && K(), !1
  },
  CACHE_LOADED: function() {
    B = !0
  },
  CACHE_LOADED_LAZY: function() {
    B = !0, k = "cache-loaded"
  },
  CACHE_LOADED_LAZY_NO_CACHE: function() {
    k = "no-cache"
  },
  CLEAR_CACHES: function() {
    W("action: CLEAR_CACHES"), w = !0
  },
  WINDOW_FOCUS: function(e) {
    let {
      focused: t
    } = e;
    return !t && (Date.now() - H > F ? (U.verbose("Writing cache from window unfocus"), K()) : U.verbose("Not writing cache from window unfocus")), !1
  }
} : {})