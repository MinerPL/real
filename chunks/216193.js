"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
}), n("222007"), n("808653"), n("424973");
var i = n("917351"),
  l = n.n(i),
  a = n("693566"),
  s = n.n(a),
  o = n("446674"),
  r = n("913144"),
  u = n("798609"),
  d = n("140596"),
  c = n("42203"),
  p = n("957255"),
  f = n("507217"),
  m = n("166004"),
  I = n("389153");
let _ = new Map,
  C = new Set,
  T = new Set,
  A = new s({
    max: 1e4
  }),
  E = new s({
    max: 1e4
  }),
  N = e => {
    let {
      guildId: t,
      channelId: n,
      params: i,
      includeApplications: l
    } = e;
    return (0, m.search)(n, i).then(e => {
      var i;
      if (null == e) return;
      if (null != t && l && C.add(t), 0 === e.applicationCommands.length && (null == e.applications || 0 === e.applications.length)) return;
      let a = (0, I.buildApplicationCommands)(e.applicationCommands);
      f.updateRegistry(a, null !== (i = e.applications) && void 0 !== i ? i : [], n)
    })
  },
  S = l.debounce(e => {
    let {
      applicationId: t,
      guildId: n,
      channelId: i,
      includeApplications: l
    } = e, a = c.default.getChannel(i);
    if (null != a)(0, I.canUseApplicationCommands)(p.default, d.default, !1, a) && N({
      guildId: n,
      channelId: i,
      includeApplications: l,
      params: {
        type: u.ApplicationCommandType.CHAT,
        includeApplications: l,
        applicationId: t
      }
    })
  }, 250),
  g = l.debounce((e, t, n, i) => {
    let l = [...n].filter(I.isSnowflake);
    if (0 === l.length) return;
    let a = c.default.getChannel(t);
    if (null == a || !(0, I.canUseApplicationCommands)(p.default, d.default, !1, a)) return;
    let s = l.slice(0, 100),
      o = l.slice(100);
    N({
      guildId: e,
      channelId: t,
      includeApplications: i,
      params: {
        type: u.ApplicationCommandType.CHAT,
        includeApplications: i,
        commandIds: s,
        cursor: void 0,
        limit: 0
      }
    }).then(() => {
      o.length > 0 && g(e, t, new Set(o), i)
    })
  }, 250);
class M extends o.default.Store {
  hasCommand(e) {
    return null != e && A.has(e)
  }
  getApplication(e) {
    if (null != e) return _.get(e)
  }
  getCommand(e) {
    if (null != e) return A.get(e)
  }
  getCommands(e, t) {
    return e.reduce((e, n) => {
      let i = E.get(n);
      return (null == i ? void 0 : i.channelId) === t && e.push(i.command), e
    }, [])
  }
}
M.displayName = "ApplicationCommandRegistryStore";
let O = new M(r.default, {
  APPLICATION_COMMAND_FETCH: function(e) {
    let {
      channelId: t,
      commandId: n,
      guildId: i
    } = e;
    if (A.has(n)) return;
    T.add(n);
    let l = null != i && !C.has(i);
    g(i, t, T, l)
  },
  APPLICATION_COMMANDS_FETCH: function(e) {
    let {
      channelId: t,
      commandIds: n,
      guildId: i
    } = e;
    n.forEach(e => {
      var n;
      (null === (n = E.get(e)) || void 0 === n ? void 0 : n.channelId) !== t && T.add(e)
    });
    let l = null != i && !C.has(i);
    g(i, t, T, l)
  },
  APPLICATION_COMMANDS_FETCH_FOR_APPLICATION: function(e) {
    let {
      channelId: t,
      guildId: n,
      applicationId: i
    } = e;
    S({
      guildId: n,
      channelId: t,
      applicationId: i,
      includeApplications: !0
    })
  },
  GUILD_APPLICATION_COMMAND_INDEX_UPDATE: function(e) {
    let {
      guildId: t
    } = e;
    C.delete(t)
  },
  APPLICATION_COMMAND_REGISTRY_UPDATE: function(e) {
    let {
      applications: t,
      commands: n,
      channelId: i
    } = e;
    for (let e of t) _.set(e.id, e);
    for (let e of n) T.delete(e.id), A.set(e.id, e), E.set(e.id, {
      channelId: i,
      command: e
    })
  },
  APPLICATION_COMMAND_SET_ACTIVE_COMMAND: function(e) {
    let {
      command: t
    } = e;
    null != t && A.set(t.id, t)
  },
  APPLICATION_COMMAND_SEARCH_STORE_UPDATE: function(e) {
    var t, n;
    let {
      commandType: i,
      state: l
    } = e;
    i === u.ApplicationCommandType.CHAT && (null === (t = l.applicationCommands) || void 0 === t || t.forEach(e => {
      A.set(e.id, e)
    }), null === (n = l.applicationSections) || void 0 === n || n.forEach(e => {
      null != e.application && _.set(e.application.id, e.application)
    }))
  },
  LOGOUT: function() {
    _.clear(), C.clear(), T.clear(), A.reset(), E.reset()
  }
});
var h = O