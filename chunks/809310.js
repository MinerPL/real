"use strict";
n.r(t), n.d(t, {
  ENABLE_CACHE_STORE: function() {
    return j
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
  E = n("353026"),
  _ = n("860255"),
  h = n("794897"),
  C = n("723939"),
  I = n("605250"),
  T = n("619443"),
  S = n("410912"),
  m = n("271938"),
  p = n("42203"),
  A = n("305961"),
  g = n("660478"),
  N = n("18494"),
  R = n("162771"),
  O = n("697218"),
  L = n("287850"),
  v = n("831588"),
  M = n("718517"),
  P = n("773336"),
  D = n("969388"),
  y = n("288206"),
  x = n("1544"),
  b = n("619317"),
  U = n("49111");
let G = new I.default("CacheStore"),
  j = !1,
  w = "stable-27",
  k = !1,
  F = "initializing",
  H = 15 * M.default.Millis.MINUTE,
  B = 0,
  V = !1,
  Y = !1,
  W = !1;

function K(e) {
  G.log("Clearing cache store"), B = Date.now(), y.default.clear(), l.default.remove(U.CACHE_STORE_KEY), l.default.remove(U.CACHE_STORE_LAZY_KEY), l.default.remove(U.CACHE_STORE_CHANNELS_LAZY_KEY), C.default.replaceDisableAllDatabases("CacheStore (".concat(e, ")")), F = "no-cache"
}

function z() {
  if (!(0, v.isAuthenticated)()) {
    G.log("Not writing cache because not authenticated");
    return
  }
  if (k) {
    G.log("Not writing cache because caches cleared");
    return
  }
  if (!W) {
    G.log("Not writing cache because never connected");
    return
  }
  q()
}

function q() {
  G.verbose("Writing cache now"), B = Date.now();
  let e = Q(),
    t = {
      version: w,
      channels: Q(),
      guilds: function() {
        let e = A.default.getGuild(R.default.getGuildId());
        return null != e ? [e] : []
      }(),
      users: function(e) {
        let t = new Set;
        e.forEach(e => {
          e.isPrivate() && e.recipients.forEach(e => {
            let n = O.default.getUser(e);
            null != n && t.add(n)
          })
        }), L.default.getPrivateChannelIds().forEach(e => {
          let n = p.default.getChannel(e);
          (null == n ? void 0 : n.isPrivate()) && n.recipients.forEach(e => {
            let n = O.default.getUser(e);
            null != n && t.add(n)
          })
        });
        let n = O.default.getCurrentUser();
        return null != n && t.add(n), Array.from(t)
      }(e),
      readStates: function() {
        return g.default.getAllReadStates(!1)
      }()
    };
  V = !0, l.default.set(U.CACHE_STORE_KEY, t), l.default.remove(U.CACHE_STORE_CHANNELS_LAZY_KEY),
    function() {
      let e = Date.now().toString(),
        t = {
          version: w,
          nonce: e,
          saveableChannels: h.default.toSnapshot()
        };
      G.verbose("Writing lazy cache (nonce: ".concat(e, ")")), r.default.dispatch({
        type: "WRITE_CACHES",
        nonce: e
      }), l.default.set(U.CACHE_STORE_LAZY_KEY, t), y.default.persist(e)
    }()
}

function Q() {
  let e = p.default.getChannel(N.default.getChannelId());
  return null != e ? [e] : []
}

function Z(e) {
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
  null != e.channels && (0, x.default)(e.channels), null != e.privateChannels && (0, x.default)(e.privateChannels), null != e.guildChannels && (0, x.deserializeChannelEntries)(e.guildChannels)
}
async function X(e, t, n) {
  let a = performance.now();
  if (null == e || null == n) return G.verbose("skipped loaded messages (channel: ".concat(n, ", database: ").concat(e, ").")), [performance.now() - a, {
    guildId: null,
    channelId: null,
    users: [],
    members: [],
    messages: []
  }];
  {
    let s = await f.default.startupLoad(e, t, n, U.MAX_MESSAGES_PER_CHANNEL);
    G.verbose("loaded ".concat(s.messages.length, " messages (guild: ").concat(t, ", channel: ").concat(n, ")."));
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
async function J() {
  let e = performance.now(),
    t = await new Promise(e => l.default.asyncGet(U.CACHE_STORE_KEY, e));
  return (null == t ? void 0 : t.version) === w ? (Z(t), [performance.now() - e, t]) : (G.log("cache either did not exist, or contains an incompatible version (required: ".concat(w, ", loaded: ").concat(null == t ? void 0 : t.version, ").")), [performance.now() - e, null])
}
async function $(e, t, n) {
  var s, l, o, u, d;
  G.verbose("loading early cache");
  let c = T.default.getSocket();
  c.connect();
  let f = null !== (s = R.default.getGuildId()) && void 0 !== s ? s : null,
    h = null !== (l = N.default.getChannelId()) && void 0 !== l ? l : null,
    C = performance.now(),
    I = S.default.loadCachedMessages.measureAsyncWithoutNesting(() => X(e, f, h)),
    m = S.default.loadMiniCache.measureAsyncWithoutNesting(J),
    p = S.default.fetchInitialGuildCache.measureAsync(() => ee(e, c, n)),
    A = null != e && "private-channels" === n.page ? a.default.timeAsync("\uD83D\uDCBE", "kv: private_channels", () => _.default.getAsync(e, null)) : Promise.resolve([]),
    g = null == e ? Promise.resolve({}) : a.default.timeAsync("\uD83D\uDCBE", "kv: user_settings", () => E.default.getAll(e)),
    [
      [O, L],
      [v, M], P, D, y
    ] = await Promise.all([m, I, p, A, g]),
    x = performance.now() - C;
  if (G.verbose("cache loaded in ".concat(x, "ms (legacy ").concat(O, "ms, channel_history ").concat(v, "ms)")), null == L || null == M) return null == L && null == M ? (0, b.default)("database:legacy_and_history_cache_null") : null == L ? (0, b.default)("database:legacy_cache_null") : (0, b.default)("database:history_cache_null"), G.verbose("finished without dispatching CACHE_LOADED"), [!1, null, 0];
  {
    let s = Object.fromEntries(M.members.map(e => [e.userId, e])),
      l = null != P.guild && null != P.channels,
      E = null !== (u = P.guild) && void 0 !== u ? u : null;
    return i.default.Emitter.batched(() => {
      a.default.time("\uD83D\uDCBE", "Dispatch Mini Cache", () => {
        var e;
        return r.default.dispatch({
          ...L,
          type: "CACHE_LOADED",
          guilds: null != E ? [...L.guilds, E] : L.guilds,
          channels: [...L.channels, ...D, ...null !== (e = P.channels) && void 0 !== e ? e : []],
          users: [...L.users, ...M.users],
          messages: null == M.channelId ? {} : {
            [M.channelId]: M.messages
          },
          guildMembers: null == M.guildId ? {} : {
            [M.guildId]: s
          },
          userSettings: y
        })
      }), a.default.time("\uD83D\uDCBE", "socket.processFirstQueuedDispatch()", () => c.processFirstQueuedDispatch(new Set(["INITIAL_GUILD"])))
    }), G.verbose("early_cache_summary: (\n        ok: true\n        meta:\n          auth_user_id: ".concat(t, "\n          selected_guild: ").concat(f, "\n          selected_channel: ").concat(h, "\n          navigation_state: ").concat(JSON.stringify(n), "\n          database: ").concat(null != e, "\n            name: ").concat(null == e ? void 0 : e.name, "\n        data:\n          database:\n            private_channels: ").concat("private-channels" === n.page ? D.length : "skipped", "\n            channel_history:\n              guild: ").concat(M.guildId, "\n              channel: ").concat(M.channelId, "\n              messages: ").concat(M.messages.length, "\n                members: ").concat(M.members.length, "\n                users: ").concat(M.users.length, "\n            initial_guild:\n              id: ").concat(null == E ? void 0 : E.id, "\n              channels: ").concat(null === (o = P.channels) || void 0 === o ? void 0 : o.length, "\n            user_settings: ").concat(Object.keys(y).length, "\n          legacy:\n            guilds: ").concat(L.guilds.length, " (").concat(L.guilds.map(e => e.id).join(", "), ")\n            channels: ").concat(L.channels.length, " (").concat(L.channels.map(e => e.id).join(", "), ")\n            users: ").concat(L.users.length, "\n            read_states: ").concat(L.readStates.length, "\n      )")), G.verbose("finished dispatching CACHE_LOADED"), [!0, l && null !== (d = null == E ? void 0 : E.id) && void 0 !== d ? d : null, D.length]
  }
}
async function ee(e, t, n) {
  let a = t.getIdentifyInitialGuildId();
  if (null == a && "guild-channels" === n.page && (a = n.guildId), null == e || null == a) return G.verbose("skipped loading initial guild (guild: ".concat(a, ", database: ").concat(e, ")")), Promise.resolve({
    guild: null,
    channels: null
  });
  let s = a,
    [i, l] = await Promise.all([(0, o.tryLoadAsync)(() => d.default.getOneAsync(e, s)), (0, o.tryLoadAsync)(() => _.default.getAsync(e, s))]);
  return {
    guild: i,
    channels: l
  }
}
async function et(e, t, n, s, i) {
  G.verbose("loading late lazy cache");
  let [f, E, h, C, I] = await S.default.fetchLazyCache.measureAsync(() => Promise.all([a.default.timeAsync("\uD83D\uDCBE", "storage: ".concat(U.CACHE_STORE_LAZY_KEY), () => l.default.asyncGetRaw(U.CACHE_STORE_LAZY_KEY)), (0, o.tryLoadAsync)(() => null != e ? a.default.timeAsync("\uD83D\uDCBE", "kv: cache_version", () => c.default.okAsync(e)) : Promise.resolve(!0)), (0, o.tryLoadAsync)(() => null != e ? a.default.timeAsync("\uD83D\uDCBE", "kv: guilds", () => d.default.getAsync(e)) : Promise.resolve([])), (0, o.tryLoadAsync)(() => null != e ? a.default.timeAsync("\uD83D\uDCBE", "kv: basic_channels", () => u.default.getAsync(e)) : Promise.resolve({
    all: [],
    stale: [],
    channels: []
  })), (0, o.tryLoadAsync)(() => null != e ? a.default.timeAsync("\uD83D\uDCBE", "kv: private_channels", () => _.default.getAsync(e, null)) : Promise.resolve([]))])), m = await S.default.fetchStaleChannels.measureAsync(() => null != e && null != C && C.stale.length > 0 ? (0, o.tryLoadAsync)(() => {
    var t, n;
    return t = e, n = C.stale, G.verbose("loading stale guild channels (count: ".concat(n.length, ", ids: ").concat(n.join(", "), ")")), Promise.all(n.map(e => _.default.getAsync(t, e).then(t => [e, t])))
  }) : Promise.resolve([]));
  await new Promise(e => setTimeout(e, 0)), S.default.loadLazyCache.recordStart();
  let p = T.default.getSocket();
  en(() => {
    var a, l, o;
    let u = performance.now();
    if (!1 === E) {
      (0, b.default)("database:not_ok"), K("database: not ok"), r.default.dispatch({
        type: "CACHE_LOADED_LAZY_NO_CACHE"
      });
      return
    }
    if (null == h || null == C || null == m || null == I) {
      (0, b.default)("database:load_failed"), G.log("couldn't load database item (\n          database: ".concat(null != e, "\n          basic_channels: ").concat(null != C, "\n          guild_channels: ").concat(null != m, "\n          private_channels: ").concat(null != I, "\n          guilds: ").concat(null != h, "\n        )")), K("database: load_failed"), r.default.dispatch({
        type: "CACHE_LOADED_LAZY_NO_CACHE"
      });
      return
    }
    if (null == E && (h.length > 0 || I.length > 0 || C.all.length > 0)) {
      (0, b.default)("database:versionless"), K("database: versionless"), G.log("kv_cache was not ok (null version with values)"), r.default.dispatch({
        type: "CACHE_LOADED_LAZY_NO_CACHE"
      });
      return
    }
    if (Y) {
      (0, b.default)("already_connected"), G.log("Skipping lazy cache; already connected."), r.default.dispatch({
        type: "CACHE_LOADED_LAZY_NO_CACHE"
      });
      return
    }
    if (null == f) {
      G.log("Lazy cache was missing"), (0, b.default)("cache:lazy_cache_missing"), r.default.dispatch({
        type: "CACHE_LOADED_LAZY_NO_CACHE"
      });
      return
    }
    p.addAnalytics({
      hadCacheAtStartup: !0
    });
    let d = S.default.parseLazyCache.measure(() => JSON.parse(f));
    if (d.version !== w) {
      G.log("Saved cached has mismatched version. Expected ".concat(w, ", got ").concat(d.version)), r.default.dispatch({
        type: "CACHE_LOADED_LAZY_NO_CACHE"
      });
      return
    }
    let c = d.nonce,
      _ = y.default.getSavedNonce();
    if ("" !== _ && c !== _) {
      (0, b.default)("nonce:lazy_cache"), G.log("ClientStateStore has mismatched nonces with cache."), r.default.dispatch({
        type: "CACHE_LOADED_LAZY_NO_CACHE"
      });
      return
    }
    let T = {
      ...d,
      guilds: h,
      privateChannels: I,
      guildChannels: m,
      basicGuildChannels: C.channels,
      initialGuildId: n
    };
    S.default.deserializeCache.measure(() => Z(T)), S.default.dispatchLazyCache.measure(() => r.default.dispatch({
      type: "CACHE_LOADED_LAZY",
      ...T
    })), G.verbose("late lazy cache loaded (ok: true, took: ".concat(performance.now() - u, "ms)")), p.addAnalytics({
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
    G.verbose("lazy_cache_summary: (\n        ok: true\n        meta:\n          auth_user_id: ".concat(t, "\n          nonce: ").concat(c, "\n          initial_guild: ").concat(n, "\n          database: ").concat(null != e, "\n            ok: ").concat(E, "\n            name: ").concat(null == e ? void 0 : e.name, "\n        data:\n          database:\n            guilds: ").concat(h.length, "\n            private_channels: ").concat("private-channels" === s.page ? "skipped" : I.length, "\n            basic_channels:\n              total: ").concat(N, " (").concat(C.channels.length, " guilds)\n              stale: ").concat(O, " (").concat(C.stale.length, " guilds").concat(L, ")\n              unstale: ").concat(R, "\n            full_channels (guilds_with_stale_basic_channels):\n              total: ").concat(A, " (").concat(m.length, " guilds)\n          legacy:\n              saveable_channels: ").concat(null === (l = T.saveableChannels) || void 0 === l ? void 0 : null === (a = l.channels) || void 0 === a ? void 0 : a.length, "\n              users: ").concat(null === (o = T.users) || void 0 === o ? void 0 : o.length, "\n      )")), S.default.setCacheInfo({
      guilds: h.length,
      privateChannels: i + I.length,
      basicChannels: N,
      basicChannelsStale: O,
      fullChannels: A,
      fullChannelGuilds: g
    })
  })
}

function en(e) {
  let t = T.default.getSocket(),
    n = !1;
  i.default.Emitter.batched(() => {
    try {
      if (e(), !t.hasQueuedDispatches()) {
        G.verbose("Processing Dispatch Queue"), t.processDispatchQueue();
        return
      }
      n = !0, S.default.loadLazyCache.recordEnd(), G.verbose("Processing First Queued Dispatch"), t.processFirstQueuedDispatch(new Set(["READY", "INITIAL_GUILD"])), setTimeout(() => {
        G.verbose("Processing Dispatch Queue"), t.processDispatchQueue()
      }, 100)
    } catch (e) {
      var a;
      G.warn("Lazy cache has encountered error", e), K("error: resumeFluxAndSocket"), null === (a = T.default.getSocket()) || void 0 === a || a.resetSocketOnError(e, "LazyCache", {
        sentry: !0,
        immediate: !0
      })
    }
  }), !n && S.default.loadLazyCache.recordEnd()
}
class ea extends i.default.Store {
  initialize() {
    if (!j) {
      let e = T.default.getSocket();
      e.processDispatchQueue()
    }
  }
  hasCache() {
    return !j || V
  }
  getLazyCacheStatus() {
    return j ? F : "no-cache"
  }
  async loadCacheAsync(e, t) {
    let n = (0, D.callOnce)(t);
    if ("initializing" !== F) {
      (0, b.default)("cache:lazy_cache_not_initializing"), n(), setTimeout(() => {
        var e;
        return null === (e = T.default.getSocket()) || void 0 === e ? void 0 : e.processDispatchQueue()
      }, 0);
      return
    }
    try {
      let t = m.default.getId(),
        a = C.default.carefullyOpenDatabase(t),
        [s, i, l] = await $(a, t, e);
      s ? (n(), await et(a, t, i, e, l)) : (n(), await (en(() => r.default.dispatch({
        type: "CACHE_LOADED_LAZY_NO_CACHE"
      })), Promise.resolve()))
    } catch (e) {
      var a;
      G.error("clearing cache. exception encountered while loading cache.", e, e.stack), (0, b.default)("cache:exception"), K("loadCacheAsync"), n(), null === (a = T.default.getSocket()) || void 0 === a || a.resetSocketOnError(e, "loadCacheAsync", {
        sentry: !0,
        immediate: !0
      })
    }
  }
  constructor(...e) {
    super(...e), this.persist = q
  }
}
ea.displayName = "CacheStore", new ea(r.default, j ? {
  CONNECTION_OPEN: function() {
    return Y = !0, W = !0, !1
  },
  LOGOUT: function() {
    K("action: LOGOUT")
  },
  CONNECTION_CLOSED: function() {
    return Y = !1, W = !0, G.verbose("Writing cache on connection closed"), z(), !1
  },
  APP_STATE_UPDATE: function(e) {
    let {
      state: t
    } = e, n = (0, P.isAndroid)() ? U.AppStates.BACKGROUND : U.AppStates.INACTIVE;
    return n === t && Y && z(), !1
  },
  CACHE_LOADED: function() {
    V = !0
  },
  CACHE_LOADED_LAZY: function() {
    V = !0, F = "cache-loaded"
  },
  CACHE_LOADED_LAZY_NO_CACHE: function() {
    F = "no-cache"
  },
  CLEAR_CACHES: function() {
    K("action: CLEAR_CACHES"), k = !0
  },
  WINDOW_FOCUS: function(e) {
    let {
      focused: t
    } = e;
    return !t && (Date.now() - B > H ? (G.verbose("Writing cache from window unfocus"), z()) : G.verbose("Not writing cache from window unfocus")), !1
  }
} : {})