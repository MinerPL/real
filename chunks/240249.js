"use strict";
n.r(t), n.d(t, {
  getCachedCommand: function() {
    return A
  },
  getCachedApplicationSection: function() {
    return E
  },
  getCachedResults: function() {
    return N
  },
  getChangeKeys: function() {
    return S
  },
  useDiscovery: function() {
    return g
  },
  executeQuery: function() {
    return M
  },
  useQuery: function() {
    return O
  },
  useCommand: function() {
    return h
  },
  useCommandsForApplication: function() {
    return v
  },
  useSearchOpenState: function() {
    return y
  },
  isInIndexExperiment: function() {
    return D
  }
}), n("222007"), n("424973");
var i = n("884691"),
  l = n("446674"),
  a = n("938767"),
  s = n("305961"),
  o = n("697218"),
  r = n("449008"),
  u = n("507217"),
  d = n("589777"),
  c = n("14090"),
  p = n("988721"),
  f = n("972620"),
  m = n("216193"),
  I = n("166004"),
  _ = n("524768"),
  C = n("317041"),
  T = n("49111");

function A(e, t) {
  var n, i, l, a;
  if (null == t) return {
    application: void 0,
    command: void 0
  };
  if (!D({
      location: "getCachedCommand"
    })) {
    let e = m.default.getCommand(t),
      n = m.default.getApplication(null == e ? void 0 : e.applicationId);
    return {
      command: e,
      application: n
    }
  }
  let s = p.default.getUserState(),
    o = p.default.getContextState(e),
    r = Object.values(null !== (l = null === (n = s.result) || void 0 === n ? void 0 : n.sections) && void 0 !== l ? l : {}).concat(Object.values(null !== (a = null === (i = o.result) || void 0 === i ? void 0 : i.sections) && void 0 !== a ? a : {}));
  for (let e of r) {
    let n = e.commands[t];
    if (null != n) return {
      application: e.descriptor.application,
      command: n
    }
  }
  return {
    application: void 0,
    command: void 0
  }
}

function E(e, t, n) {
  var i, l, a, s, o, r;
  if (!D({
      location: "getCachedApplicationSection"
    })) return null === (o = I.default.getApplicationSections(e.id, t)) || void 0 === o ? void 0 : o.find(e => e.id === n);
  let u = p.default.getUserState(),
    d = p.default.getContextState(e),
    c = null !== (r = null === (l = u.result) || void 0 === l ? void 0 : null === (i = l.sections) || void 0 === i ? void 0 : i[n]) && void 0 !== r ? r : null === (s = d.result) || void 0 === s ? void 0 : null === (a = s.sections) || void 0 === a ? void 0 : a[n];
  return null == c ? void 0 : c.descriptor
}

function N(e, t, n) {
  if (!D({
      location: "getCachedResults"
    })) {
    var i, l;
    return {
      commands: null !== (i = I.default.getQueryCommands(e.id, t, n)) && void 0 !== i ? i : [],
      sections: null !== (l = I.default.getApplicationSections(e.id, t)) && void 0 !== l ? l : []
    }
  }
  let a = p.default.query(e, {
    commandType: t,
    text: n
  }, {
    scoreMethod: f.ScoreMethod.COMMAND_OR_APPLICATION,
    allowFetch: !1
  });
  return {
    commands: a.commands,
    sections: a.descriptors
  }
}

function S(e, t, n) {
  if (!D({
      location: "getChangeKeys"
    }, {
      autoTrackExposure: !1
    })) return [I.default.getQueryCommands(e.id, t, n)];
  let i = p.default.getUserState(),
    l = p.default.getContextState(e);
  return [null == i ? void 0 : i.result, null == l ? void 0 : l.result]
}

function g(e, t, n) {
  if (!R({
      location: "useDiscovery"
    })) {
    var a, o;
    return (0, I.useDiscoveryState)(e, t.commandType, null !== (a = n.placeholderCount) && void 0 !== a ? a : 0, null !== (o = n.limit) && void 0 !== o ? o : 10, {
      canOnlyUseTextCommands: t.builtIns === f.BuiltInCommandFilter.ONLY_TEXT,
      canUseFrecency: n.includeFrecency
    })
  }
  let r = (0, l.useStateFromStores)([s.default], () => s.default.getGuild(null == e ? void 0 : e.guild_id), [e.guild_id]),
    {
      descriptors: u,
      commands: c,
      sectionedCommands: m,
      loading: _
    } = (0, p.useDiscoveryState)(e, r, t, {
      ...n,
      allowFetch: !0
    }),
    [A, E] = i.useState(null),
    N = i.useRef(!1);
  N.current = _;
  let S = i.useMemo(() => {
    let e = [];
    if (null != n.placeholderCount)
      for (let i = 0; i < n.placeholderCount; i++) e.push(L(i, t.commandType));
    return e
  }, [t.commandType, n.placeholderCount]);
  return i.useMemo(() => {
    let e = {
      loading: N,
      commands: c,
      activeSections: u,
      commandsByActiveSection: m,
      filteredSectionId: A,
      hasMoreAfter: !1,
      placeholders: _ ? S : [],
      sectionDescriptors: u,
      filterSection: e => {
        E(e)
      },
      scrollDown: T.NOOP
    };
    if (null != A) {
      let t = m.find(e => e.section.id === A);
      e.activeSections = null != t ? [t.section] : [], e.commandsByActiveSection = null != t ? [t] : []
    }
    if (_) {
      let t = m[0];
      if (null != t) e.commandsByActiveSection = [{
        section: t.section,
        data: [...t.data, ...S]
      }, ...m.slice(1)];
      else {
        let t = d.BUILT_IN_SECTIONS[C.BuiltInSectionId.BUILT_IN];
        e.activeSections = [t], e.commandsByActiveSection = [{
          section: t,
          data: S
        }]
      }
      e.commands = [...c, ...S]
    }
    return e
  }, [c, u, A, m, _, S])
}

function M(e, t, n) {
  if (!D({
      location: "executeQuery"
    })) {
    var i, l, s, o, r;
    return !0 === n.allowFetch && u.querySearchManager((0, a.getCommandContext)(e), null !== (i = t.text) && void 0 !== i ? i : "", null !== (l = n.limit) && void 0 !== l ? l : 10, t.commandType), {
      commands: null !== (o = I.default.getQueryCommands(e.id, t.commandType, null !== (s = t.text) && void 0 !== s ? s : "")) && void 0 !== o ? o : [],
      sections: null !== (r = I.default.getApplicationSections(e.id, t.commandType)) && void 0 !== r ? r : []
    }
  }
  let {
    descriptors: c,
    commands: f,
    loading: m
  } = p.default.query(e, t, n), _ = [];
  if (null != n.placeholderCount && m)
    for (let e = 0; e < n.placeholderCount; e++) _.push(L(e, t.commandType));
  return {
    commands: m ? [...f, ..._] : f,
    sections: m && 0 === c.length ? [d.BUILT_IN_SECTIONS[C.BuiltInSectionId.BUILT_IN]] : c
  }
}

function O(e, t, n) {
  if (!R({
      location: "useQuery"
    })) {
    var l, a;
    return (0, I.useQueryState)(e, t.commandType, null !== (l = t.text) && void 0 !== l ? l : "", null !== (a = n.limit) && void 0 !== a ? a : 10)
  }
  let {
    descriptors: s,
    commands: o,
    loading: r
  } = (0, p.useQueryState)(e, t, {
    ...n,
    allowFetch: !0
  }), u = i.useMemo(() => {
    let e = [];
    if (null != n.placeholderCount)
      for (let i = 0; i < n.placeholderCount; i++) e.push(L(i, t.commandType));
    return e
  }, [t.commandType, n.placeholderCount]);
  return i.useMemo(() => ({
    commands: r ? [...o, ...u] : o,
    sections: r && 0 === s.length ? [d.BUILT_IN_SECTIONS[C.BuiltInSectionId.BUILT_IN]] : s,
    scrollDown: T.NOOP
  }), [r, o, s, u])
}

function h(e, t) {
  if (!R({
      location: "useCommand"
    })) {
    var n;
    let a = (0, l.useStateFromStores)([o.default], () => {
        if (null == e ? void 0 : e.isDM()) {
          let t = e.getRecipientId(),
            n = o.default.getUser(t);
          if (null != n && n.bot) return n
        }
        return null
      }, [e]),
      {
        command: s,
        application: r
      } = (0, l.useStateFromStoresObject)([m.default], () => {
        let e = null != t ? m.default.getCommand(t) : void 0,
          n = m.default.getApplication(null == e ? void 0 : e.applicationId);
        return {
          command: e,
          application: n
        }
      });
    return (i.useEffect(() => {
      null != e && null == s && (null != a ? u.fetchCommandsForApplication({
        guildId: null,
        channelId: e.id,
        applicationId: a.id
      }) : null != e.guild_id && null != t && u.fetchCommand(e.guild_id, e.id, t))
    }, [a, e, s, t]), null == e || null == e.guild_id && (null == a || null == r || a.id !== (null === (n = r.bot) || void 0 === n ? void 0 : n.id))) ? {
      command: void 0,
      application: void 0
    } : {
      command: s,
      application: r
    }
  }
  let a = (0, p.useUserIndexState)(!0, !0),
    s = (0, p.useContextIndexState)(e, !0, !0);
  return i.useMemo(() => {
    if (null != t) {
      var e, n, i, l;
      let o = Object.values(null !== (i = null === (e = a.result) || void 0 === e ? void 0 : e.sections) && void 0 !== i ? i : {}).concat(Object.values(null !== (l = null === (n = s.result) || void 0 === n ? void 0 : n.sections) && void 0 !== l ? l : {}));
      for (let e of o) {
        let n = e.commands[t];
        if (null != n) return {
          command: n,
          application: e.descriptor.application
        }
      }
    }
    return {
      command: void 0,
      application: void 0
    }
  }, [s.result, a.result, t])
}

function v(e, t, n) {
  if (!R({
      location: "useCommandsForApplication"
    })) return i.useEffect(() => {
    u.fetchCommands(e.guild_id, e.id, n)
  }, [n, e]), (0, l.useStateFromStoresObject)([m.default], () => {
    let i = m.default.getApplication(t),
      l = m.default.getCommands(n, e.id);
    return {
      commands: l,
      application: i
    }
  });
  let a = (0, p.useUserIndexState)(!0, !0),
    s = (0, p.useContextIndexState)(e, !0, !0);
  return i.useMemo(() => {
    var e, i, l, o, u;
    let d = null !== (u = null === (i = a.result) || void 0 === i ? void 0 : null === (e = i.sections) || void 0 === e ? void 0 : e[t]) && void 0 !== u ? u : null === (l = s.result) || void 0 === l ? void 0 : l.sections[t];
    return {
      application: null == d ? void 0 : null === (o = d.descriptor) || void 0 === o ? void 0 : o.application,
      commands: null != d ? n.map(e => d.commands[e]).filter(r.isNotNullish) : []
    }
  }, [null == a ? void 0 : a.result, null == s ? void 0 : s.result, t, n])
}

function y() {
  !R({
    location: "useSearchOpenState"
  }) && (0, I.useSearchStoreOpenState)()
}

function D(e, t) {
  return c.default.getCurrentConfig(e, t).enabled
}

function R(e, t) {
  let [n] = i.useState(D(e, t));
  return n
}
let P = {
  id: "placeholder-section",
  type: _.ApplicationCommandSectionType.APPLICATION,
  name: ""
};

function L(e, t) {
  return {
    type: t,
    inputType: _.ApplicationCommandInputType.PLACEHOLDER,
    id: "placeholder-".concat(e),
    name: "",
    displayName: "",
    description: "",
    displayDescription: "",
    applicationId: "",
    section: P
  }
}