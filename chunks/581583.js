"use strict";
l.r(t), l.d(t, {
  MemberRole: function() {
    return w
  },
  default: function() {
    return V
  }
}), l("222007"), l("70102");
var n = l("37983"),
  a = l("884691"),
  s = l("414456"),
  i = l.n(s),
  r = l("627445"),
  o = l.n(r),
  u = l("748820"),
  d = l("974667"),
  c = l("509043"),
  f = l("446674"),
  m = l("669491"),
  p = l("77078"),
  E = l("272030"),
  T = l("851387"),
  _ = l("737960"),
  S = l("206230"),
  h = l("339023"),
  I = l("405645"),
  A = l("592407"),
  g = l("26989"),
  v = l("957255"),
  C = l("697218"),
  N = l("145131"),
  y = l("476765"),
  O = l("945330"),
  M = l("907566"),
  x = l("151185"),
  R = l("483093"),
  L = l("991170"),
  P = l("487311"),
  b = l("49111"),
  D = l("782340"),
  j = l("618600");
let U = () => Promise.resolve();

function F(e) {
  let {
    userRoles: t,
    position: l,
    ...a
  } = e, s = (0, y.useUID)();
  return (0, n.jsxs)(p.Dialog, {
    className: i(j.overflowRolesPopout, {
      [j.popoutBottom]: "bottom" === l,
      [j.popoutTop]: "top" === l
    }),
    "aria-labelledby": s,
    children: [(0, n.jsx)("div", {
      className: j.overflowRolesPopoutArrowWrapper,
      children: (0, n.jsx)("div", {
        className: j.overflowRolesPopoutArrow
      })
    }), (0, n.jsxs)(N.default, {
      className: j.overflowRolesPopoutHeader,
      align: N.default.Align.CENTER,
      children: [(0, n.jsx)(M.default, {
        color: m.default.unsafe_rawColors.PRIMARY_400.css,
        className: j.overflowRolesPopoutHeaderIcon
      }), (0, n.jsx)("div", {
        className: j.overflowRolesPopoutHeaderText,
        id: s,
        children: D.default.Messages.ROLES_LIST.format({
          numRoles: t.length
        })
      })]
    }), (0, n.jsx)(B, {
      ...a,
      wrap: !0,
      userRoles: t
    })]
  })
}
let w = a.forwardRef(function(e, t) {
  var s, r, o;
  let u;
  let {
    canRemove: T,
    className: _,
    role: A,
    onRemove: g,
    guildId: v,
    disableBorderColor: C,
    onMouseDown: N
  } = e, {
    tabIndex: y,
    ...M
  } = (0, d.useListItem)(A.id), x = (0, I.useRoleIcon)({
    roleId: A.id,
    size: 16,
    guildId: v
  }), L = (0, f.useStateFromStores)([S.default], () => S.default.roleStyle), P = (null === (s = A.tags) || void 0 === s ? void 0 : s.guild_connections) === null, b = a.useCallback(e => {
    (0, E.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await l.el("443070").then(l.bind(l, "443070"));
      return t => (0, n.jsx)(e, {
        ...t,
        id: A.id,
        label: D.default.Messages.COPY_ID_ROLE
      })
    })
  }, [A.id]), U = (0, p.useToken)(m.default.unsafe_rawColors.PRIMARY_300).hsl(), F = null !== (r = A.colorString) && void 0 !== r ? r : U, w = null !== (o = (0, c.hex2rgb)(F, .6)) && void 0 !== o ? o : void 0, G = m.default.unsafe_rawColors.WHITE_500.css, k = (0, c.hex2int)(F);
  null != k && .3 > (0, c.getDarkness)(k) && (G = m.default.unsafe_rawColors.PRIMARY_630.css), u = P ? (0, n.jsx)(h.default, {
    className: j.roleFlowerStar,
    iconClassName: T ? j.roleVerifiedIcon : void 0,
    color: F,
    size: 14
  }) : "dot" === L ? (0, n.jsx)(p.RoleDot, {
    className: j.roleDot,
    color: F,
    background: !1,
    tooltip: !1
  }) : (0, n.jsx)(p.RoleCircle, {
    color: F
  });
  let B = a.useMemo(() => {
    var t;
    return {
      borderColor: C ? void 0 : w,
      ...null !== (t = e.style) && void 0 !== t ? t : {}
    }
  }, [w, C, e.style]);
  return (0, n.jsx)(p.FocusRing, {
    children: (0, n.jsxs)("div", {
      ref: t,
      className: i(j.role, _),
      style: B,
      onContextMenu: b,
      onMouseDown: N,
      "aria-label": A.name,
      tabIndex: y,
      ...M,
      children: [(0, n.jsxs)(p.Clickable, {
        className: j.roleRemoveButton,
        onClick: T ? g : void 0,
        tabIndex: T ? y : -1,
        focusProps: {
          focusClassName: j.roleRemoveIconFocused
        },
        "aria-hidden": !T,
        "aria-label": D.default.Messages.GUILD_SETTINGS_MEMBERS_REMOVE_ROLE.format({
          roleName: A.name
        }),
        children: [u, T ? (0, n.jsx)(O.default, {
          color: G,
          className: j.roleRemoveIcon,
          "aria-hidden": !0
        }) : null]
      }), null != x ? (0, n.jsx)(R.default, {
        className: j.roleIcon,
        ...x,
        enableTooltip: !1
      }) : null, (0, n.jsx)("div", {
        "aria-hidden": !0,
        className: j.roleName,
        children: (0, n.jsx)(p.Text, {
          variant: "text-xs/medium",
          className: j.roleNameOverflow,
          children: A.name
        })
      })]
    })
  })
});

function G(e) {
  let {
    user: t,
    numRolesHidden: l,
    roleClassName: a
  } = e, s = (0, d.useListItem)("overflow-more-roles-".concat(t.id));
  return (0, n.jsx)(p.Popout, {
    renderPopout: t => {
      let {
        position: l
      } = t;
      return (0, n.jsx)(F, {
        ...e,
        position: null != l ? l : "top"
      })
    },
    position: "top",
    align: "center",
    children: e => (0, n.jsx)(p.FocusRing, {
      children: (0, n.jsx)("button", {
        ...e,
        className: i(j.overflowButton, a),
        ...s,
        children: "+".concat(l)
      })
    })
  })
}

function k(e) {
  let {
    guild: t,
    user: l,
    handleAddRole: a,
    roleClassName: s
  } = e, r = (0, d.useListItem)("overflow-add-roles-".concat(l.id)), o = (0, f.useStateFromStores)([S.default], () => S.default.roleStyle), u = v.default.getHighestRole(t), c = g.default.getMember(t.id, l.id), m = e => e.id !== t.id && !e.managed && v.default.isRoleHigher(t, u, e) && (null == c || -1 === c.roles.indexOf(e.id));
  return (0, n.jsx)(p.Popout, {
    renderPopout: e => {
      let {
        closePopout: l
      } = e;
      return (0, n.jsx)(P.default, {
        guild: t,
        roleStyle: o,
        roleFilter: m,
        onSelect: a,
        onClose: l
      })
    },
    position: "bottom",
    align: "center",
    children: e => (0, n.jsx)(p.FocusRing, {
      children: (0, n.jsx)("button", {
        ...e,
        className: i(j.addButton, s),
        "aria-label": D.default.Messages.GUILD_SETTINGS_MEMBERS_ADD_ROLE,
        type: "button",
        ...r,
        children: (0, n.jsx)(x.default, {
          className: j.addButtonIcon,
          "aria-hidden": !0
        })
      })
    })
  })
}

function B(e) {
  let t;
  let {
    user: l,
    guild: s,
    userRoles: r,
    wrap: c = !0,
    width: f,
    className: m,
    readOnly: p,
    roleClassName: E,
    disableBorderColor: _
  } = e, S = a.useRef({}), h = a.useCallback(e => {
    var t;
    let n = r.filter(t => t !== e.id);
    (null === (t = e.tags) || void 0 === t ? void 0 : t.guild_connections) === null ? T.default.unassignGuildRoleConnection(s.id, e.id) : A.default.updateMemberRoles(s.id, l.id, n, [], [e.id])
  }, [r, s.id, l.id]), I = a.useCallback(e => {
    let t = r; - 1 === t.indexOf(e) && (t = t.concat([e])), A.default.updateMemberRoles(s.id, l.id, t, [e], [])
  }, [r, s.id, l.id]), [g, N] = a.useState(null), y = a.useMemo(() => {
    let e = Object.values(s.roles).filter(e => r.includes(e.id)).sort((e, t) => {
      var l, n;
      let a = (null === (l = e.tags) || void 0 === l ? void 0 : l.guild_connections) !== null,
        s = (null === (n = t.tags) || void 0 === n ? void 0 : n.guild_connections) !== null;
      return a && !s ? 1 : !a && s ? -1 : 0
    });
    return null != g ? e.slice(0, g) : e
  }, [s.roles, g, r]), O = r.length - y.length;
  a.useLayoutEffect(() => {
    if (c) return;
    if ("number" != typeof f) throw Error("Unexpected null width");
    let e = 0,
      t = 0,
      l = f - 30 - 4;
    for (let n = 0; n < y.length; n++) {
      let a = y[n],
        s = S.current[a.id];
      if (null == s) continue;
      let i = s.offsetWidth;
      if ((t += i + 4) > l) break;
      e++
    }
    N(t => e < y.length ? e : t)
  }, [c, f, y]);
  let M = C.default.getCurrentUser();
  o(null != M, "MemberRolesList: currentUser cannot be undefined");
  let x = !p && v.default.can(b.Permissions.MANAGE_ROLES, s),
    R = L.default.getHighestRole(s, M.id),
    P = a.useMemo(() => "roles-".concat((0, u.v4)()), []),
    F = (0, d.default)({
      id: P,
      isEnabled: !0,
      scrollToStart: U,
      scrollToEnd: U,
      wrap: !0
    }),
    B = y.map(e => {
      var t;
      return (0, n.jsx)(w, {
        className: E,
        role: e,
        canRemove: x && L.default.isRoleHigher(s, M.id, R, e) || (null === (t = e.tags) || void 0 === t ? void 0 : t.guild_connections) === null && l.id === M.id,
        onRemove: () => h(e),
        ref: t => {
          var l, n;
          return l = e.id, void(null != (n = t) ? S.current[l] = n : delete S.current[l])
        },
        guildId: s.id,
        disableBorderColor: _
      }, e.id)
    });
  return null != g && 0 !== O ? t = (0, n.jsx)(G, {
    ...e,
    numRolesHidden: O
  }) : x && (t = (0, n.jsx)(k, {
    ...e,
    handleAddRole: I
  })), (0, n.jsx)(d.ListNavigatorProvider, {
    navigator: F,
    children: (0, n.jsx)(d.ListNavigatorContainer, {
      children: e => {
        let {
          ref: l,
          ...a
        } = e;
        return (0, n.jsxs)("div", {
          className: i(j.root, m),
          "aria-label": D.default.Messages.ROLES_LIST.format({
            numRoles: r.length
          }),
          ref: l,
          ...a,
          children: [B, t]
        })
      }
    })
  })
}
let Y = (0, _.default)(B);

function V(e) {
  return (0, f.useStateFromStores)([v.default], () => {
    var t;
    return v.default.getGuildVersion(null === (t = e.guild) || void 0 === t ? void 0 : t.id)
  }), !1 === e.wrap ? (0, n.jsx)(Y, {
    ...e
  }) : (0, n.jsx)(B, {
    ...e
  })
}