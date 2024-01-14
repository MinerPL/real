"use strict";
l.r(t), l.d(t, {
  default: function() {
    return E
  }
});
var n = l("37983");
l("884691");
var u = l("509043"),
  i = l("446674"),
  r = l("77078"),
  o = l("206230"),
  a = l("130037"),
  d = l("592407"),
  s = l("26989"),
  c = l("305961"),
  f = l("957255"),
  M = l("449008"),
  O = l("49111"),
  h = l("782340"),
  p = l("640659");

function x(e, t) {
  var l, i;
  return (0, n.jsxs)("div", {
    className: p.roleRow,
    children: ["dot" === t ? (0, n.jsx)(r.RoleDot, {
      className: p.roleDot,
      color: null !== (l = e.colorString) && void 0 !== l ? l : (0, u.int2hex)(O.DEFAULT_ROLE_COLOR),
      background: !1,
      tooltip: !1
    }) : (0, n.jsx)(r.RoleCircle, {
      className: p.roleDot,
      color: null !== (i = e.colorString) && void 0 !== i ? i : (0, u.int2hex)(O.DEFAULT_ROLE_COLOR)
    }), (0, n.jsx)("div", {
      children: e.name
    })]
  })
}

function E(e, t) {
  let l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    u = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
    p = (0, i.useStateFromStores)([c.default], () => c.default.getGuild(t), [t]),
    E = (0, i.useStateFromStores)([o.default], () => o.default.roleStyle),
    _ = (0, a.useTrackModerationAction)(t, {
      location: u,
      targetUserId: e
    }),
    {
      userRoles: R,
      isGuildMember: m,
      canManageRoles: g
    } = (0, i.useStateFromStoresObject)([s.default, f.default], () => {
      let l = s.default.getMember(t, e);
      return {
        userRoles: null != l ? l.roles : [],
        isGuildMember: null != l,
        canManageRoles: null != p && f.default.can(O.Permissions.MANAGE_ROLES, p)
      }
    }, [e, t, p]);
  if (__OVERLAY__ || null == R || null == p || !m) return null;
  let v = f.default.getHighestRole(p),
    S = Object.values(p.roles).filter(e => e.id !== p.id),
    b = g ? S.map(l => {
      let u = l.managed || !f.default.isRoleHigher(p, v, l),
        i = -1 !== R.indexOf(l.id);
      return u && !i ? null : (0, n.jsx)(r.MenuCheckboxItem, {
        id: l.id,
        label: () => x(l, E),
        disabled: u,
        action: () => {
          var n;
          return n = l, void(R.includes(n.id) ? (d.default.updateMemberRoles(t, e, R.filter(e => e !== n.id), [], [n.id]), _(a.ModerationActionType.REMOVE_ROLE)) : (d.default.updateMemberRoles(t, e, R.concat([n.id]), [n.id], []), _(a.ModerationActionType.ADD_ROLE)))
        },
        checked: i
      }, l.id)
    }) : S.filter(e => -1 !== R.indexOf(e.id)).map(e => e.id === p.id ? null : (0, n.jsx)(r.MenuItem, {
      id: e.id,
      label: () => x(e, E)
    }, e.id));
  return 0 === b.filter(M.isNotNullish).length ? null : l ? b : (0, n.jsx)(r.MenuItem, {
    id: "roles",
    label: h.default.Messages.ROLES_LIST.format({
      numRoles: b.length
    }),
    children: b
  })
}