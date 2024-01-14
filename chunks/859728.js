"use strict";
l.r(t), l.d(t, {
  default: function() {
    return p
  }
}), l("424973"), l("222007");
var n = l("884691"),
  a = l("627445"),
  s = l.n(a),
  i = l("917351"),
  r = l.n(i),
  o = l("446674"),
  d = l("713841"),
  u = l("524768"),
  c = l("389153"),
  f = l("42203"),
  m = l("305961"),
  I = l("957255"),
  T = l("697218"),
  N = l("449008"),
  E = l("683830"),
  h = l("892692"),
  g = l("49111");

function p(e, t, l) {
  let a = (0, o.useStateFromStores)([E.default], () => E.default.getApplicationPermissions()),
    i = n.useMemo(() => (function(e, t) {
      let l = {
          ...t
        },
        n = (0, c.allChannelsSentinel)(e),
        a = (0, h.toPermissionKey)(n, u.ApplicationCommandPermissionType.CHANNEL),
        s = (0, h.toPermissionKey)(e, u.ApplicationCommandPermissionType.ROLE);
      return !(s in l) && (l[s] = {
        id: e,
        permission: !0,
        type: u.ApplicationCommandPermissionType.ROLE
      }), !(a in l) && (l[a] = {
        id: n,
        permission: !0,
        type: u.ApplicationCommandPermissionType.CHANNEL
      }), l
    })(e, null != a ? a : {}), [a, e]),
    p = (0, o.useStateFromStores)([E.default], () => {
      var e;
      if (null == l) return;
      let t = E.default.getCommand(l);
      return null !== (e = null == t ? void 0 : t.permissions) && void 0 !== e ? e : {}
    }, [l]),
    S = (0, o.useStateFromStores)([E.default], () => {
      var e;
      return null == l ? E.default.getEditedApplication() : null === (e = E.default.getEditedCommand()) || void 0 === e ? void 0 : e.permissions
    }, [l]),
    O = null != l ? l : t,
    _ = null != l ? p : i,
    A = n.useMemo(() => null != S ? S : {
      ...null != _ ? _ : {}
    }, [S, _]),
    C = n.useMemo(() => Object.keys(A).length, [A]),
    x = n.useMemo(() => null == _ || null == A ? null : !r.isEqual(_, A), [_, A]);
  return n.useEffect(() => {
    O === t && (x ? d.default.startEditingCommandPermissions(O) : d.default.stopEditingCommandPermissions(O))
  }, [t, x, O]), {
    originalApplicationPermissions: i,
    originalCommandPermissions: p,
    editedTargetPermissions: function(e, t) {
      let l = (0, o.useStateFromStores)([m.default], () => m.default.getGuild(e), [e]);
      s(null != l, "guild must be present to be editing its integration settings");
      let a = (0, o.useStateFromStores)([I.default], () => I.default.getHighestRole(l), [l]),
        i = (0, o.useStateFromStores)([T.default], () => {
          var e;
          return null === (e = T.default.getCurrentUser()) || void 0 === e ? void 0 : e.id
        });
      s(null != i, "useComputePermissions: currentUserId must not be null");
      let r = i === l.ownerId,
        {
          channelIds: d,
          roleIds: E,
          userIds: h
        } = n.useMemo(() => {
          let e = [],
            l = [],
            n = [];
          for (let a of Object.values(t)) a.type === u.ApplicationCommandPermissionType.CHANNEL ? e.push(a.id) : a.type === u.ApplicationCommandPermissionType.ROLE ? l.push(a.id) : a.type === u.ApplicationCommandPermissionType.USER && n.push(a.id);
          return {
            channelIds: e,
            roleIds: l,
            userIds: n
          }
        }, [t]),
        p = (0, o.useStateFromStoresObject)([f.default], () => Object.fromEntries(d.map(f.default.getChannel).filter(N.isNotNullish).map(e => [e.id, e])), [d]),
        S = n.useMemo(() => Object.fromEntries(E.map(e => l.getRole(e)).filter(N.isNotNullish).map(e => [e.id, e])), [l, E]),
        O = (0, o.useStateFromStoresObject)([T.default], () => Object.fromEntries(h.map(T.default.getUser).filter(N.isNotNullish).map(e => [e.id, e])), [h]);
      return n.useMemo(() => {
        let e = l.id,
          n = (0, c.allChannelsSentinel)(l.id),
          s = {};
        for (let [i, o] of Object.entries(t)) {
          let t = !1,
            d = !1;
          if (o.type === u.ApplicationCommandPermissionType.CHANNEL) {
            let e = o.id === n,
              l = p[o.id];
            t = e || I.default.can(g.Permissions.VIEW_CHANNEL, l), d = !0
          } else if (o.type === u.ApplicationCommandPermissionType.ROLE) {
            let n = o.id === e,
              s = S[o.id];
            t = n || null != s, d = r || n || I.default.isRoleHigher(l, a, s)
          } else if (o.type === u.ApplicationCommandPermissionType.USER) {
            let e = O[o.id];
            t = null != e, d = null != e && (r || I.default.canManageUser(g.Permissions.USE_APPLICATION_COMMANDS, e, l))
          }
          s[i] = {
            ...o,
            canRead: t,
            canWrite: d
          }
        }
        return s
      }, [p, l, a, r, t, S, O])
    }(e, A),
    hasChanges: x,
    selectedPermissionCount: C
  }
}