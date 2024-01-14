"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
});
var l = n("37983"),
  a = n("884691"),
  s = n("509043"),
  u = n("77078"),
  o = n("145079"),
  i = n("689226"),
  r = n("405645"),
  d = n("795228"),
  c = n("42203"),
  m = n("305961"),
  p = n("824563"),
  f = n("697218"),
  E = n("781896"),
  C = n("682344"),
  S = n("483093"),
  T = n("307311"),
  N = n("192112"),
  v = n("704257"),
  h = n("184406"),
  _ = n("49111"),
  I = n("928123");

function g(e) {
  var t;
  let n = (0, T.useComponentStateContext)(),
    g = null == n ? void 0 : null === (t = n.message) || void 0 === t ? void 0 : t.getChannelId(),
    O = c.default.getChannel(g),
    x = m.default.getGuild(null == O ? void 0 : O.getGuildId()),
    L = (0, d.default)(null == x ? void 0 : x.id, v.MIN_REREQUEST_TIME),
    y = a.useMemo(() => (0, v.getSnowflakeSelectDefaultValues)(e.defaultValues, null == x ? void 0 : x.id), [e.defaultValues, x]);
  return (0, l.jsx)(h.default, {
    selectActionComponent: e,
    queryOptions: t => (0, v.queryMentionables)(e.type, t, g),
    renderIcon: (e, t) => {
      let n = t === h.SelectIconSize.PILL_ICON_SIZE;
      if ((null == e ? void 0 : e.type) === N.SelectOptionType.USER) {
        let a = f.default.getUser(e.value);
        if (null == a) return;
        return (0, l.jsx)(u.Avatar, {
          size: n ? u.AvatarSizes.SIZE_16 : u.AvatarSizes.SIZE_24,
          src: a.getAvatarURL(null == x ? void 0 : x.id, t),
          status: n ? null : p.default.getStatus(a.id),
          "aria-hidden": !0
        })
      }
      if ((null == e ? void 0 : e.type) === N.SelectOptionType.ROLE) {
        var a;
        let n = null == x ? void 0 : x.getRole(e.value);
        if (null == n || null == x) return;
        let u = (0, i.canGuildUseRoleIcons)(x, n) ? (0, r.getRoleIconProps)(n, t) : null;
        return null != u ? (0, l.jsx)(S.default, {
          ...u
        }) : (0, l.jsx)(C.default, {
          color: null !== (a = n.colorString) && void 0 !== a ? a : (0, s.int2hex)(_.DEFAULT_ROLE_COLOR),
          height: t,
          width: t
        })
      }
    },
    renderOptionLabel: e => {
      let t = null;
      if (e.type === N.SelectOptionType.USER) {
        let n = f.default.getUser(e.value);
        null != n && (t = (0, l.jsx)(o.default, {
          className: I.tag,
          usernameClass: I.username,
          discriminatorClass: I.discriminator,
          botClass: I.bot,
          user: n,
          forceUsername: !0
        }))
      } else if (e.type === N.SelectOptionType.ROLE) {
        let n = null == x ? void 0 : x.getRole(e.value),
          a = null == n ? null : null == L ? void 0 : L[n.id];
        null != a && (t = (0, l.jsxs)("div", {
          className: I.roleCountContainer,
          children: [(0, l.jsx)(E.default, {
            className: I.roleCountIcon,
            height: 18,
            width: 18
          }), (0, l.jsx)("span", {
            className: I.roleCountText,
            children: a
          })]
        }))
      }
      return (0, l.jsxs)("span", {
        className: I.label,
        children: [(0, l.jsx)("span", {
          className: I.labelText,
          children: e.label
        }), t]
      })
    },
    defaultValues: y
  })
}