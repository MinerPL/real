"use strict";
n.r(t), n.d(t, {
  buildPermissionContext: function() {
    return _
  },
  usePermissionContext: function() {
    return C
  },
  computeCommandContextType: function() {
    return E
  },
  getContextGuildId: function() {
    return N
  }
});
var i = n("884691"),
  l = n("316693"),
  a = n("446674"),
  s = n("798609"),
  o = n("38654"),
  r = n("845579"),
  u = n("233069"),
  d = n("271938"),
  c = n("42203"),
  p = n("26989"),
  f = n("957255"),
  m = n("697218"),
  I = n("49111");

function _(e, t) {
  var n, i, l, a, s;
  let f;
  f = e instanceof u.ChannelRecordBase && e.isThread() ? null !== (l = c.default.getChannel(e.parent_id)) && void 0 !== l ? l : e : e;
  let I = N(f),
    _ = r.ViewNsfwCommands.getSetting(),
    C = d.default.getId(),
    E = null !== (a = null === (n = m.default.getCurrentUser()) || void 0 === n ? void 0 : n.nsfwAllowed) && void 0 !== a && a,
    S = null != I && null !== (s = null === (i = p.default.getMember(I, C)) || void 0 === i ? void 0 : i.roles) && void 0 !== s ? s : [],
    g = o.default.isViewingRoles(I),
    {
      computedPermissions: M,
      hasBaseAccessPermissions: O
    } = A(f);
  return {
    context: f,
    userId: C,
    roleIds: S,
    isImpersonating: g,
    commandType: t,
    computedPermissions: M,
    hasBaseAccessPermissions: O,
    allowNsfw: T(f, E, _)
  }
}

function C(e, t) {
  let n = i.useMemo(() => {
      if (e instanceof u.ChannelRecordBase && e.isThread()) {
        var t;
        return null !== (t = c.default.getChannel(e.parent_id)) && void 0 !== t ? t : e
      }
      return e
    }, [e]),
    l = N(n),
    s = r.ViewNsfwCommands.useSetting(),
    f = (0, a.useStateFromStores)([d.default], () => d.default.getId()),
    I = (0, a.useStateFromStores)([m.default], () => {
      var e, t;
      return null !== (t = null === (e = m.default.getCurrentUser()) || void 0 === e ? void 0 : e.nsfwAllowed) && void 0 !== t && t
    }),
    _ = (0, a.useStateFromStoresArray)([p.default], () => {
      var e, t;
      return null != l && null !== (t = null === (e = p.default.getMember(l, f)) || void 0 === e ? void 0 : e.roles) && void 0 !== t ? t : []
    }),
    C = (0, a.useStateFromStores)([o.default], () => o.default.isViewingRoles(l));
  return i.useMemo(() => {
    let {
      computedPermissions: e,
      hasBaseAccessPermissions: i
    } = A(n);
    return {
      context: n,
      userId: f,
      roleIds: _,
      commandType: t,
      isImpersonating: C,
      computedPermissions: e,
      hasBaseAccessPermissions: i,
      allowNsfw: T(n, I, s)
    }
  }, [t, n, C, _, f, I, s])
}

function T(e, t, n) {
  return !!t && (!(e instanceof u.ChannelRecordBase) || (null != e.guild_id ? e.nsfw : n))
}

function A(e) {
  let t;
  if (e instanceof u.ChannelRecordBase && e.isPrivate()) return {
    computedPermissions: l.default.deserialize(0),
    hasBaseAccessPermissions: !0
  };
  let n = f.default.computePermissions(e);
  return t = !!l.default.has(n, I.Permissions.ADMINISTRATOR) || (e instanceof u.ChannelRecordBase ? l.default.has(n, I.Permissions.VIEW_CHANNEL) && l.default.has(n, I.Permissions.USE_APPLICATION_COMMANDS) : l.default.has(n, I.Permissions.VIEW_CHANNEL)), {
    computedPermissions: n,
    hasBaseAccessPermissions: t
  }
}

function E(e, t) {
  return e instanceof u.ChannelRecordBase && null == e.guild_id ? e.type === I.ChannelTypes.DM && e.getRecipientId() === t ? s.ApplicationCommandContextType.BOT_DM : s.ApplicationCommandContextType.PRIVATE_CHANNEL : s.ApplicationCommandContextType.GUILD
}

function N(e) {
  return e instanceof u.ChannelRecordBase ? e.guild_id : e.id
}