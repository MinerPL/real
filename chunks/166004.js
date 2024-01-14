"use strict";
n.r(t), n.d(t, {
  search: function() {
    return L
  },
  default: function() {
    return K
  },
  useSearchStoreOpenState: function() {
    return z
  },
  useDiscoveryState: function() {
    return X
  },
  useQueryState: function() {
    return J
  }
}), n("222007"), n("424973"), n("506083");
var i = n("884691"),
  l = n("483366"),
  a = n.n(l),
  s = n("693566"),
  o = n.n(s),
  r = n("446674"),
  u = n("872717"),
  d = n("913144"),
  c = n("798609"),
  p = n("763898"),
  f = n("938767"),
  m = n("38654"),
  I = n("252063"),
  _ = n("140596"),
  C = n("685841"),
  T = n("872173"),
  A = n("374363"),
  E = n("42203"),
  N = n("923959"),
  S = n("957255"),
  g = n("18494"),
  M = n("599110"),
  O = n("589777"),
  h = n("369010"),
  v = n("342564"),
  y = n("524768"),
  D = n("389153"),
  R = n("317041"),
  P = n("49111");

function L(e, t, n) {
  var i;
  let l;
  if ((null == n ? void 0 : n.abortable) && (null == n ? void 0 : n.signal.aborted)) return Promise.resolve(null);
  let a = {
    type: t.type,
    role_ids: null === (i = t.roleIds) || void 0 === i ? void 0 : i.join(",")
  };
  "applicationId" in t && null != t.applicationId ? (a.application_id = t.applicationId, l = "application") : "query" in t ? (a.query = t.query, a.limit = t.limit, a.cursor = t.cursor, l = "query") : "cursor" in t ? (a.limit = t.limit, a.cursor = t.cursor, null != t.commandIds && t.commandIds.length > 0 && (a.command_ids = t.commandIds.join(",")), l = "discovery") : l = "unknown", "includeApplications" in t && (a.include_applications = t.includeApplications), "checkPermissions" in t && (a.check_permissions = t.checkPermissions);
  let s = async i => {
    var l;
    return await new Promise(e => {
      setTimeout(e, i)
    }), L(e, {
      ...t,
      retries: (null !== (l = t.retries) && void 0 !== l ? l : 0) + 1
    }, n)
  };
  (null == t.retries || 0 === t.retries) && (t.start = performance.now());
  let o = e => {
    var i, s, o;
    if (null == t.start) return;
    let r = performance.now() - t.start;
    M.default.track(P.AnalyticEvents.APPLICATION_COMMAND_PERFORMANCE, {
      duration_ms: r,
      aborted: null !== (i = null == n ? void 0 : n.signal.aborted) && void 0 !== i && i,
      error: e,
      kind: l,
      command_type: t.type,
      include_applications: null !== (s = a.include_applications) && void 0 !== s && s,
      retries: null !== (o = t.retries) && void 0 !== o ? o : 0
    })
  };
  return u.default.get({
    url: P.Endpoints.APPLICATION_COMMANDS_SEARCH(e),
    query: a,
    signal: (null == n ? void 0 : n.abortable) ? n.signal : void 0
  }).then(e => {
    var t, n, i;
    return 202 === e.status ? s(5e3) : (o(!1), {
      applicationCommands: e.body.application_commands,
      applications: e.body.applications,
      nextCursor: null === (t = e.body.cursor) || void 0 === t ? void 0 : t.next,
      prevCursor: null === (n = e.body.cursor) || void 0 === n ? void 0 : n.previous,
      repaired: null === (i = e.body.cursor) || void 0 === i ? void 0 : i.repaired
    })
  }, e => (null == n ? void 0 : n.abortable) && (null == n ? void 0 : n.signal.aborted) ? (o(!0), null) : 429 === e.status ? s(1e3 * e.body.retry_after) : (o(!0), null))
}
let U = (e, t, n) => {
  let {
    channel: i,
    guild: l
  } = e;
  return null != i ? (0, O.getBuiltInCommands)(t, !0, n).filter(e => null == e.predicate || e.predicate({
    channel: i,
    guild: l
  })) : []
};

function B(e, t) {
  if (0 === t.length) return e;
  let n = [...e],
    i = (0, D.buildApplicationCommands)(t).filter(e => {
      let t = n.findIndex(t => t.id === e.id);
      return !(t >= 0) || (n[t] = e, !1)
    });
  return [...n, ...i]
}

function F(e) {
  let t = e.map(D.getApplicationCommandSection);
  return t.concat(O.BUILT_IN_SECTIONS[R.BuiltInSectionId.BUILT_IN])
}
let b = (e, t) => ({
    type: t,
    inputType: y.ApplicationCommandInputType.PLACEHOLDER,
    id: "placeholder-".concat(e),
    name: "",
    displayName: "",
    description: "",
    displayDescription: "",
    applicationId: ""
  }),
  H = [O.BUILT_IN_SECTIONS[R.BuiltInSectionId.BUILT_IN]];
class w extends r.default.Store {
  initialize() {
    this.waitFor(A.default), this.syncWith([S.default], () => {
      this.shouldResetAll = !0
    }), this.syncWith([A.default], Y)
  }
  getChannelState(e, t) {
    var n;
    return null === (n = q.channelStates.get(e)) || void 0 === n ? void 0 : n[t]
  }
  getOrInsertChannelState(e, t) {
    let n = q.channelStates,
      i = n.has(e);
    if (M.default.track(P.AnalyticEvents.APPLICATION_COMMAND_CACHE_FETCH, {
        miss: !i,
        size: n.length
      }), !i) {
      let t = () => ({
          discoveryInitialized: !1,
          topCursor: null,
          scrollDownCursor: null,
          applicationSections: null,
          applicationCommands: null,
          filteredSectionId: null,
          pendingQueries: new Map,
          queries: new Map,
          queriedApplicationId: null,
          sawFrecencySection: !1
        }),
        i = {
          [c.ApplicationCommandType.CHAT]: t(),
          [c.ApplicationCommandType.MESSAGE]: t(),
          [c.ApplicationCommandType.USER]: t(),
          [c.ApplicationCommandType.PRIMARY_ENTRY_POINT]: t()
        };
      n.set(e, i)
    }
    return n.get(e)[t]
  }
  getApplicationSections(e, t) {
    var n, i;
    return null !== (i = null === (n = this.getChannelState(e, t)) || void 0 === n ? void 0 : n.applicationSections) && void 0 !== i ? i : H
  }
  getQueryCommands(e, t, n) {
    var i, l, a;
    let s = this.getChannelState(e, t);
    return null !== (a = null == s ? void 0 : null === (i = s.queries.get(n)) || void 0 === i ? void 0 : i.commands) && void 0 !== a ? a : null == s ? void 0 : null === (l = s.pendingQueries.get(n)) || void 0 === l ? void 0 : l.commands
  }
  hasQueryResults(e, t, n) {
    var i, l;
    return null !== (l = null === (i = this.getChannelState(e, t)) || void 0 === i ? void 0 : i.queries.has(n)) && void 0 !== l && l
  }
  constructor(...e) {
    super(...e), this.channelStates = new o({
      max: 5
    }), this.componentIsOpen = !1, this.shouldResetAll = !1, this.shouldResetGuild = null, this.shouldResetDMs = !1
  }
}

function G(e) {
  var t;
  let {
    guildId: n
  } = e, i = g.default.getChannelId();
  return null != i && (null === (t = E.default.getChannel(i)) || void 0 === t ? void 0 : t.guild_id) !== n ? x(n) : q.componentIsOpen ? (q.shouldResetGuild = n, !1) : x(n)
}

function x(e) {
  let t = N.default.getChannels(e),
    n = t[0, N.GUILD_SELECTABLE_CHANNELS_KEY].concat(t[N.GUILD_VOCAL_CHANNELS_KEY]),
    i = q.channelStates.length;
  for (let e of n) q.channelStates.del(e.channel.id);
  return q.channelStates.length !== i
}

function W() {
  let e = q.channelStates.length;
  return q.channelStates.keys().forEach(e => {
    var t;
    (null === (t = E.default.getChannel(e)) || void 0 === t ? void 0 : t.isPrivate()) && q.channelStates.del(e)
  }), q.channelStates.length !== e
}

function Y() {
  var e, t, n;
  let i = null !== (n = null === (t = A.default.settings.textAndImages) || void 0 === t ? void 0 : null === (e = t.viewNsfwCommands) || void 0 === e ? void 0 : e.value) && void 0 !== n && n,
    l = i !== q.viewNsfwCommands;
  if (l) {
    if (q.viewNsfwCommands = i, !q.componentIsOpen) return W();
    q.shouldResetDMs = !0
  }
  return !1
}

function k(e) {
  return !!q.channelStates.has(e) && (q.channelStates.del(e), !0)
}

function V() {
  q.shouldResetAll = !1, q.shouldResetGuild = null, q.shouldResetDMs = !1, q.componentIsOpen = !1, q.channelStates.reset()
}
w.displayName = "ApplicationCommandSearchStore";
let q = new w(d.default, {
  LOGOUT: V,
  CONNECTION_OPEN: V,
  APPLICATION_COMMAND_SEARCH_STORE_UPDATE: e => {
    let {
      channelId: t,
      commandType: n,
      state: i
    } = e, l = q.channelStates.get(t);
    if (null == l) return;
    let a = l[n],
      s = {
        ...a,
        ...i
      };
    l[n] = s, null == a.applicationCommands && null != s.applicationCommands && s.pendingQueries.forEach((e, t) => {
      let {
        context: n,
        commandType: i,
        limit: l
      } = e;
      Q({
        context: n,
        commandType: i,
        query: t,
        limit: l,
        canOnlyUseTextCommands: !1
      })
    })
  },
  APPLICATION_COMMAND_SEARCH_STORE_QUERY(e) {
    let {
      context: t,
      commandType: n,
      query: i,
      limit: l,
      applicationId: a
    } = e, s = null != C.default.getPendingReply(t.channel.id), o = Q({
      context: t,
      commandType: n,
      query: i,
      limit: l,
      canOnlyUseTextCommands: s,
      applicationId: a
    });
    !o && !s && Z({
      context: t,
      commandType: n,
      query: i,
      limit: l,
      applicationId: a
    })
  },
  CHANNEL_UPDATES(e) {
    let {
      channels: t
    } = e;
    for (let e of t)
      if (null != e.guild_id && G({
          guildId: e.guild_id
        })) return !0;
    return !1
  },
  GUILD_APPLICATION_COMMAND_INDEX_UPDATE: G,
  IMPERSONATE_UPDATE: G,
  IMPERSONATE_STOP: G,
  APPLICATION_COMMAND_SEARCH_STORE_UI_UPDATE(e) {
    let {
      isOpen: t
    } = e;
    if (q.componentIsOpen = t, q.shouldResetAll) {
      V();
      return
    }
    let n = !1;
    return null != q.shouldResetGuild && (n = x(q.shouldResetGuild), q.shouldResetGuild = null), q.shouldResetDMs && (n = W() || n, q.shouldResetDMs = !1), n
  },
  PRIVATE_CHANNEL_INTEGRATION_CREATE(e) {
    let {
      integration: t
    } = e;
    return k(t.channel_id)
  },
  PRIVATE_CHANNEL_INTEGRATION_UPDATE(e) {
    let {
      integration: t
    } = e;
    return k(t.channel_id)
  },
  PRIVATE_CHANNEL_INTEGRATION_DELETE(e) {
    let {
      channelId: t
    } = e;
    return k(t)
  },
  FETCH_PRIVATE_CHANNEL_INTEGRATIONS_SUCCESS(e) {
    let {
      channelId: t
    } = e;
    return k(t)
  }
});
var K = q;
let j = e => {
  if (null == e) return;
  let t = m.default.getViewingRoles(e);
  if (null == t) return;
  let n = Object.keys(t);
  return 0 === n.length && n.push(e), n
};

function z() {
  i.useEffect(() => (d.default.dispatch({
    type: "APPLICATION_COMMAND_SEARCH_STORE_UI_UPDATE",
    isOpen: !0
  }), () => {
    d.default.dispatch({
      type: "APPLICATION_COMMAND_SEARCH_STORE_UI_UPDATE",
      isOpen: !1
    })
  }), [])
}

function X(e, t, n, l) {
  let {
    canOnlyUseTextCommands: a,
    canUseFrecency: s
  } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}, {
    discoveryInitialized: o,
    topCursor: u,
    scrollDownCursor: c,
    applicationSections: m,
    applicationCommands: C,
    filteredSectionId: T,
    sawFrecencySection: A
  } = (0, r.useStateFromStores)([q], () => q.getOrInsertChannelState(e.id, t), [e.id, t]), E = i.useCallback(n => {
    d.default.dispatch({
      type: "APPLICATION_COMMAND_SEARCH_STORE_UPDATE",
      channelId: e.id,
      commandType: t,
      state: n
    })
  }, [e.id, t]);
  (0, I.usePrivateChannelIntegrationState)({
    channelId: e.id
  });
  let N = i.useRef(!1),
    g = (0, p.default)(),
    M = i.useCallback(function(n, i) {
      let l = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
      if (N.current) return;
      N.current = !0;
      let a = j(e.guild_id);
      L(e.id, {
        type: t,
        roleIds: a,
        ...n
      }, {
        abortable: l,
        signal: g
      }).then(e => {
        N.current = !1, i(e)
      })
    }, [e.id, e.guild_id, t, g]),
    y = (0, f.useCommandContext)(e),
    P = (0, h.useTopCommands)(y),
    H = (0, h.useTopRealCommands)(y),
    w = (0, r.useStateFromStores)([S.default, _.default], () => (0, D.canUseApplicationCommands)(S.default, _.default, null != a && a, e), [a, e]);
  i.useEffect(() => {
    if (o) return;
    if (E({
        discoveryInitialized: !0
      }), !w || null != C && C.length > 0) return;
    let t = e.isPrivate() ? {} : {
      limit: l,
      commandIds: o ? void 0 : H,
      cursor: null != u ? u : void 0
    };
    M({
      ...t,
      includeApplications: null == m
    }, e => {
      if (null == e) return;
      let t = B([], e.applicationCommands),
        n = {
          applicationCommands: t,
          topCursor: e.prevCursor,
          scrollDownCursor: e.nextCursor
        };
      if (null != e.applications) {
        var i;
        n.applicationSections = F(null !== (i = e.applications) && void 0 !== i ? i : [])
      }
      E(n)
    }, !1)
  }, [C, e, l, w, m, o, u, M, H, E]);
  let G = i.useCallback(() => {
      null != c && M({
        limit: l,
        cursor: c
      }, e => {
        if (null == e) return;
        let t = !1 === e.repaired ? B([], e.applicationCommands) : B(null != C ? C : [], e.applicationCommands);
        E({
          applicationCommands: t,
          scrollDownCursor: e.nextCursor
        })
      })
    }, [l, M, c, C, E]),
    x = i.useCallback(t => {
      if (!N.current && t !== T) {
        if (null == t) {
          e.isPrivate() ? E({
            filteredSectionId: null,
            discoveryInitialized: !0
          }) : E({
            filteredSectionId: null,
            applicationCommands: null,
            discoveryInitialized: !1
          });
          return
        }!(t in O.BUILT_IN_SECTIONS || e.isPrivate()) && M({
          applicationId: t
        }, e => {
          null != e && E({
            applicationCommands: B([], e.applicationCommands)
          })
        }), E({
          filteredSectionId: t,
          scrollDownCursor: null
        })
      }
    }, [e, M, E, T]);
  z(), i.useEffect(() => () => {
    var n;
    (null === (n = q.channelStates.get(e.id)) || void 0 === n ? void 0 : n[t].filteredSectionId) != null && x(null)
  }, []);
  let W = i.useMemo(() => U(y, t, a), [y, t, a]),
    Y = i.useMemo(() => {
      if (!s) return [];
      let e = (w && null != C ? C : []).concat(W);
      return e.filter(e => P.includes(e.id)).sort((e, t) => {
        let n = v.default.getScoreWithoutLoadingLatest(y, e),
          i = v.default.getScoreWithoutLoadingLatest(y, t);
        return i - n
      }).slice(0, R.DISCOVERY_COMMANDS_FRECENCY_LIMIT)
    }, [s, P, w, C, W, y]);
  i.useEffect(() => {
    !A && Y.length > 0 && E({
      sawFrecencySection: !0
    })
  }, [E, Y, A]);
  let k = i.useMemo(() => {
      var e;
      let t = [];
      return (Y.length > 0 || A) && (t = t.concat(O.BUILT_IN_SECTIONS[R.BuiltInSectionId.FRECENCY])), w && null != m && (t = t.concat(m)), (null === (e = t[t.length - 1]) || void 0 === e ? void 0 : e.id) !== R.BuiltInSectionId.BUILT_IN && (t = t.concat(O.BUILT_IN_SECTIONS[R.BuiltInSectionId.BUILT_IN])), t
    }, [w, m, Y, A]),
    V = w && (!o || N.current || null != c),
    K = i.useMemo(() => {
      if (!V) return [];
      let e = [];
      for (let i = 0; i < n; i++) e.push(b(i, t));
      return e
    }, [V, n, t]),
    {
      activeSections: X,
      commandsByActiveSection: Q
    } = i.useMemo(() => {
      let e = [],
        t = [];
      return k.forEach(n => {
        let i;
        (null == T || n.id === T) && ((i = n.id === R.BuiltInSectionId.BUILT_IN ? V ? [] : [...W] : n.id === R.BuiltInSectionId.FRECENCY ? [...Y] : (null != C ? C : []).filter(e => e.applicationId === n.id)).length > 0 || n.id === T) && (e.push(n), t.push({
          section: n,
          data: i
        }))
      }), t.length > 0 && K.length > 0 && t[t.length - 1].data.push(...K), {
        activeSections: e,
        commandsByActiveSection: t
      }
    }, [k, Y, C, W, K, V, T]),
    Z = i.useMemo(() => {
      let e = [];
      return e = e.concat(Y), w && null != C && (e = e.concat(C)), e = e.concat(W)
    }, [w, Y, C, W]);
  return {
    filterSection: x,
    scrollDown: G,
    loading: N,
    filteredSectionId: T,
    hasMoreAfter: V,
    commands: Z,
    sectionDescriptors: k,
    activeSections: X,
    commandsByActiveSection: Q,
    placeholders: K
  }
}

function Q(e) {
  let t, {
      context: n,
      commandType: i,
      query: l,
      limit: a,
      canOnlyUseTextCommands: s,
      applicationCommands: o,
      scrollDownCursor: r,
      applications: u,
      applicationId: d = null
    } = e,
    c = q.getOrInsertChannelState(n.channel.id, i);
  if (c.queriedApplicationId !== d) c.queries.clear(), c.pendingQueries.clear(), c.queriedApplicationId = d;
  else if (c.queries.has(l)) return !0;
  if (null != u && (c.applicationSections = F(u)), s) t = [];
  else {
    var p;
    t = n.channel.isPrivate() ? null !== (p = c.applicationCommands) && void 0 !== p ? p : [] : B([], null != o ? o : [])
  }
  let f = U(n, i, s),
    m = (0, D.canUseApplicationCommands)(S.default, _.default, s, n.channel) && (n.channel.isPrivate() ? null == c.applicationCommands : null == o),
    I = [],
    C = !1;
  if (m)
    for (let e = l.length - 1; e > 0; e -= 1) {
      let n = l.slice(0, e),
        i = c.queries.get(n);
      if (null != i) {
        C = i.done, i.commands.forEach(e => {
          null == t.find(t => t.id === e.id) && null == f.find(t => t.id === e.id) && I.push(e)
        });
        break
      }
    }
  C && (m = !1);
  let A = [],
    E = l.split(" ");
  if ([...t, ...I, ...f].forEach(e => {
      var t;
      let n = null === (t = c.applicationSections) || void 0 === t ? void 0 : t.find(t => t.id === e.applicationId),
        i = ee(l, E, e, n);
      i > 0 && A.push({
        ...e,
        score: i
      })
    }), T.FrecencyUserSettingsActionCreators.loadIfNecessary(), A.sort((e, t) => {
      if (e.score !== t.score) return t.score - e.score;
      let i = v.default.getScoreWithoutLoadingLatest(n, e),
        l = v.default.getScoreWithoutLoadingLatest(n, t);
      return i !== l ? l - i : e.displayName.localeCompare(t.displayName)
    }), m || null != r)
    for (let e = 0; e < 4; e += 1) A.push({
      ...b(e, i),
      score: 0
    });
  return m ? (c.pendingQueries.set(l, {
    context: n,
    commandType: i,
    limit: a,
    commands: A
  }), c.queries.delete(l)) : (c.pendingQueries.delete(l), c.queries.set(l, {
    commands: A,
    done: C || null == r,
    scrollDownCursor: r
  })), C
}
let Z = a(e => {
    var t;
    let {
      context: n,
      commandType: i,
      query: l,
      limit: a,
      applicationId: s
    } = e;
    if (!(0, D.canUseApplicationCommands)(S.default, _.default, !1, n.channel)) return;
    let o = q.getOrInsertChannelState(n.channel.id, i);
    if (n.channel.isPrivate()) {
      !o.discoveryInitialized && null == o.applicationCommands && L(n.channel.id, {
        type: i,
        includeApplications: null == o.applicationSections
      }).then(e => {
        var t;
        if (null == e) return;
        let l = {
          applicationCommands: B([], null !== (t = e.applicationCommands) && void 0 !== t ? t : [])
        };
        null != e.applications && (l.applicationSections = F(e.applications)), d.default.dispatch({
          type: "APPLICATION_COMMAND_SEARCH_STORE_UPDATE",
          channelId: n.channel.id,
          commandType: i,
          state: l
        })
      });
      return
    }(null === (t = o.queries.get(l)) || void 0 === t ? void 0 : t.scrollDownCursor) == null && L(n.channel.id, {
      type: i,
      roleIds: j(n.channel.guild_id),
      query: l,
      limit: a,
      applicationId: s,
      includeApplications: !o.discoveryInitialized && null == o.applicationSections
    }).then(e => {
      if (null != e) q.channelStates.has(n.channel.id) && (Q({
        context: n,
        commandType: i,
        query: l,
        limit: a,
        canOnlyUseTextCommands: !1,
        applicationCommands: e.applicationCommands,
        scrollDownCursor: e.nextCursor,
        applications: e.applications,
        applicationId: s
      }), q.emitChange())
    })
  }, 250, {
    leading: !0,
    trailing: !0,
    maxWait: 750
  }),
  $ = async (e, t) => {
    var n;
    let {
      context: i,
      commandType: l,
      query: a,
      limit: s
    } = e;
    if (!(0, D.canUseApplicationCommands)(S.default, _.default, !1, i.channel) || i.channel.isPrivate()) return;
    let o = q.getOrInsertChannelState(i.channel.id, l),
      r = null === (n = o.queries.get(a)) || void 0 === n ? void 0 : n.scrollDownCursor;
    null != r && await L(i.channel.id, {
      type: l,
      roleIds: j(i.channel.guild_id),
      query: a,
      limit: s,
      cursor: r,
      includeApplications: !o.discoveryInitialized && null == o.applicationSections
    }, {
      abortable: !0,
      signal: t
    }).then(e => {
      var t, n;
      if (null == e || !q.channelStates.has(i.channel.id)) return;
      let s = null !== (n = null === (t = o.queries.get(a)) || void 0 === t ? void 0 : t.commands.filter(e => e.inputType !== y.ApplicationCommandInputType.PLACEHOLDER)) && void 0 !== n ? n : [],
        r = B([], e.applicationCommands),
        u = [],
        d = a.split(" ");
      r.forEach(e => {
        var t;
        if (null != s.find(t => t.id === e.id)) return;
        let n = null === (t = o.applicationSections) || void 0 === t ? void 0 : t.find(t => t.id === e.applicationId),
          i = ee(a, d, e, n);
        i > 0 && u.push({
          ...e,
          score: i
        })
      }), T.FrecencyUserSettingsActionCreators.loadIfNecessary(), u.sort((e, t) => {
        if (e.score !== t.score) return t.score - e.score;
        let n = v.default.getScoreWithoutLoadingLatest(i, e),
          l = v.default.getScoreWithoutLoadingLatest(i, t);
        return n !== l ? l - n : e.displayName.localeCompare(t.displayName)
      });
      let c = e.nextCursor;
      if (null != c)
        for (let e = 0; e < 4; e += 1) u.push({
          ...b(e, l),
          score: 0
        });
      o.queries.set(a, {
        commands: e.repaired ? u : [...s, ...u],
        done: !0,
        scrollDownCursor: c
      }), q.emitChange()
    })
  };

function J(e, t, n, l) {
  z();
  let a = (0, p.default)(),
    {
      commands: s,
      applicationSections: o
    } = (0, r.useStateFromStoresObject)([q], () => {
      var i, l, a;
      let {
        queries: s,
        pendingQueries: o,
        applicationSections: r
      } = q.getOrInsertChannelState(e.id, t);
      return {
        applicationSections: r,
        commands: null !== (a = null === (i = s.get(n)) || void 0 === i ? void 0 : i.commands) && void 0 !== a ? a : null === (l = o.get(n)) || void 0 === l ? void 0 : l.commands
      }
    }, [e.id, t, n]);
  i.useEffect(() => {
    d.default.dispatch({
      type: "APPLICATION_COMMAND_SEARCH_STORE_QUERY",
      context: (0, f.getCommandContext)(e),
      query: n,
      limit: l,
      commandType: t
    })
  }, [e, t, n, l]);
  let u = i.useRef(!1),
    c = i.useCallback(() => {
      !u.current && (u.current = !0, $({
        commandType: t,
        context: {
          channel: e
        },
        query: n,
        limit: l
      }, a).finally(() => {
        u.current = !1
      }))
    }, [t, e, n, a, l]);
  return {
    commands: s,
    sections: null != o ? o : H,
    scrollDown: c
  }
}

function ee(e, t, n, i) {
  var l;
  let a = n.name,
    s = n.displayName;
  if (a.startsWith(e) || s.startsWith(e)) return 6;
  if (a.startsWith(t[0])) {
    let e = a.split(" ").slice(1).join(" ");
    if (e.startsWith(t.slice(1).join(" "))) return 5
  }
  if (s.startsWith(t[0])) {
    let e = s.split(" ").slice(1).join(" ");
    if (e.startsWith(t.slice(1).join(" "))) return 5
  }
  if (a.includes(e) || (null == s ? void 0 : s.includes(e))) return 4;
  let o = !1;
  for (let {
      name: t,
      serverLocalizedName: i
    }
    of null !== (l = n.options) && void 0 !== l ? l : []) {
    if (t.startsWith(e) || "".concat(a, " ").concat(t).startsWith(e)) return 3;
    if (null != s && "".concat(s, " ").concat(t).startsWith(e)) return 2;
    if (null != i && (i.startsWith(e) || "".concat(a, " ").concat(i).startsWith(e) || null != s && "".concat(s, " ").concat(i).startsWith(e))) return 3;
    (t.includes(e) || (null == i ? void 0 : i.includes(e))) && (o = !0)
  }
  return o ? 2 : (null == i ? void 0 : i.name.toLocaleLowerCase().startsWith(e)) ? 1 : 0
}