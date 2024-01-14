"use strict";
n.r(t), n.d(t, {
  ComponentStateContextProvider: function() {
    return R
  },
  useComponentState: function() {
    return b
  },
  useComponentStateContext: function() {
    return U
  }
}), n("222007"), n("702976");
var l = n("37983"),
  a = n("884691"),
  s = n("627445"),
  u = n.n(s),
  o = n("917351"),
  i = n.n(o),
  r = n("446674"),
  d = n("913144"),
  c = n("798609"),
  m = n("406043"),
  p = n("809810"),
  f = n("3765"),
  E = n("752598"),
  C = n("267567"),
  S = n("300322"),
  T = n("42203"),
  N = n("26989"),
  v = n("88093"),
  h = n("697218"),
  _ = n("192112"),
  I = n("524094"),
  g = n("9884");
let O = e => {
    switch (e.type) {
      case c.ComponentType.BUTTON:
        return e.style !== c.ButtonStyle.LINK;
      case c.ComponentType.STRING_SELECT:
      case c.ComponentType.USER_SELECT:
      case c.ComponentType.ROLE_SELECT:
      case c.ComponentType.MENTIONABLE_SELECT:
      case c.ComponentType.CHANNEL_SELECT:
        return !0;
      case c.ComponentType.ACTION_ROW:
      case c.ComponentType.INPUT_TEXT:
        return !1
    }
  },
  x = function(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
      l = _.ActionComponentState.NORMAL;
    return null != e && e.state !== f.InteractionState.FAILED && (e.data.interactionType === c.InteractionTypes.MESSAGE_COMPONENT && i.isEqual(e.data.indices, t.indices) ? l = _.ActionComponentState.LOADING : O(t) && (l = _.ActionComponentState.DISABLED)), n && (l = _.ActionComponentState.DISABLED), l
  },
  L = e => {
    let t = T.default.getChannel(e),
      n = (0, r.useStateFromStores)([v.default], () => (null == t ? void 0 : t.guild_id) == null || v.default.canChatInGuild(t.guild_id), [t]),
      l = (0, r.useStateFromStores)([C.default], () => (null == t ? void 0 : t.guild_id) != null && C.default.isLurking(t.guild_id), [t]),
      a = (0, r.useStateFromStores)([N.default, h.default], () => {
        var e, n;
        let l = h.default.getCurrentUser();
        return null !== (n = (null == t ? void 0 : t.guild_id) != null && null != l ? null === (e = N.default.getMember(null == t ? void 0 : t.guild_id, l.id)) || void 0 === e ? void 0 : e.isPending : null) && void 0 !== n && n
      }),
      [, s] = (0, m.useCurrentUserCommunicationDisabled)(null == t ? void 0 : t.guild_id),
      u = (0, S.useCanUnarchiveThread)(t);
    return !!(!n || l || a || (null == t ? void 0 : t.isLockedThread()) || (null == t ? void 0 : t.isArchivedThread()) && !u) || !!s || !1
  };

function y(e, t) {
  let n = a.useContext(M),
    [l, s] = a.useState(null),
    u = a.useCallback(t => {
      let n = (0, g.default)(e, t);
      return s(n), null == n
    }, [e]);
  return a.useEffect(() => {
    var e;
    let l = () => u(t);
    return null === (e = n.validators) || void 0 === e || e.add(l), () => {
      var e;
      null === (e = n.validators) || void 0 === e || e.delete(l)
    }
  }, [n.validators, u, t]), {
    error: l,
    validate: u
  }
}

function j(e, t, n) {
  u(t.type !== c.ComponentType.ACTION_ROW, "action row components do not have state");
  let l = (0, r.useStateFromStores)([I.default], () => I.default.getInteractionComponentState(e.id, t.indices)),
    s = (0, r.useStateFromStores)([p.default], () => p.default.getInteraction(e), [e]),
    o = L(e.channel_id),
    {
      error: i,
      validate: d
    } = y(t, l),
    m = a.useCallback(n => {
      if (!d(n)) return !1;
      let l = T.default.getChannel(e.channel_id);
      return null != l && null != t.customId && (0, E.executeMessageComponentInteraction)({
        componentType: t.type,
        messageId: e.id,
        messageFlags: e.flags,
        customId: t.customId,
        indices: t.indices,
        applicationId: t.applicationId,
        channelId: l.id,
        guildId: l.guild_id,
        localState: n
      }), !0
    }, [e.channel_id, e.flags, e.id, t.customId, t.type, t.indices, t.applicationId, d]);
  return {
    state: l,
    executeStateUpdate: m,
    isDisabled: o,
    visualState: x(s, t),
    error: i
  }
}

function A(e, t, n) {
  let l = (0, r.useStateFromStores)([I.default], () => I.default.getInteractionComponentState(e.customId, t.indices)),
    {
      error: s,
      validate: u
    } = y(t, l),
    o = a.useCallback(n => null == n || (d.default.dispatch({
      type: "SET_INTERACTION_COMPONENT_STATE",
      id: e.customId,
      indices: t.indices,
      state: n
    }), !!u(n) || !1), [e.customId, t.indices, u]);
  return a.useEffect(() => {
    o(n)
  }, []), {
    state: l,
    executeStateUpdate: o,
    isDisabled: !1,
    visualState: _.ActionComponentState.NORMAL,
    error: s
  }
}
let M = a.createContext(null);

function R(e) {
  let {
    children: t,
    message: n,
    modal: s,
    validators: o
  } = e, i = a.useMemo(() => null != n ? {
    useComponentState: j.bind(null, n),
    message: n,
    validators: o
  } : (u(null != s, "modal is present if message is not"), {
    useComponentState: A.bind(null, s),
    message: n,
    validators: o
  }), [n, s, o]);
  return (0, l.jsx)(M.Provider, {
    value: i,
    children: t
  })
}

function b(e, t) {
  let n = a.useContext(M);
  return n.useComponentState(e, t)
}

function U() {
  return a.useContext(M)
}