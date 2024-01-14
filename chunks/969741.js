"use strict";
s.r(t), s.d(t, {
  GuildSettingsMembersRow: function() {
    return S
  },
  default: function() {
    return N
  }
});
var a = s("37983");
s("884691");
var n = s("917351"),
  l = s("446674"),
  i = s("77078"),
  r = s("466818"),
  o = s("645266"),
  d = s("284234"),
  u = s("758710"),
  c = s("592407"),
  E = s("900938"),
  _ = s("49111"),
  T = s("782340"),
  I = s("927911");

function S() {
  var e;
  let t = (0, l.useStateFromStores)([E.default], () => E.default.getProps().guild, []),
    s = null !== (e = null == t ? void 0 : t.isCommunity()) && void 0 !== e && e;
  return (0, a.jsxs)(i.Clickable, {
    onClick: e => {
      null != t && (s ? (e.preventDefault(), c.default.close(), (0, o.goToMemberSafetyDashboard)(t.id)) : c.default.open(t.id, _.GuildSettingsSections.MEMBERS))
    },
    className: I.rowContainer,
    children: [(0, a.jsx)("div", {
      children: T.default.Messages.MEMBERS
    }), s && (0, a.jsx)(u.default, {
      className: I.linkIcon,
      width: 16,
      height: 16
    })]
  })
}

function N() {
  var e;
  let {
    guild: t
  } = (0, l.useStateFromStores)([E.default], () => E.default.getProps(), [], n.isEqual), s = null !== (e = null == t ? void 0 : t.id) && void 0 !== e ? e : "", i = (0, r.useCanAccessMemberSafetyPage)(s);
  return i ? (0, a.jsx)(d.default, {
    guildId: s
  }) : null
}