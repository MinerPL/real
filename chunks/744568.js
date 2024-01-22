"use strict";
n.r(t), n.d(t, {
  default: function() {
    return v
  }
});
var a = n("37983"),
  l = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("446674"),
  o = n("77078"),
  u = n("851387"),
  d = n("750560"),
  c = n("812204"),
  f = n("685665"),
  h = n("645266"),
  p = n("506885"),
  m = n("430312"),
  E = n("26989"),
  C = n("697218"),
  g = n("459824"),
  S = n("516832"),
  _ = n("986358"),
  I = n("590456"),
  T = n("623529");

function v(e) {
  let {
    userId: t,
    guildId: n,
    onClose: s,
    className: v,
    infoPanelClassName: x,
    style: N
  } = e, A = (0, g.useCanAccessGuildMemberModView)(n), M = (0, r.useStateFromStores)([C.default], () => C.default.getUser(t), [t]), R = (0, r.useStateFromStores)([E.default], () => E.default.getMember(n, t), [n, t]), j = null == M || null == R, {
    AnalyticsLocationProvider: L
  } = (0, f.default)(c.default.GUILD_MEMBER_MOD_VIEW);
  return (l.useEffect(() => {
    !A && s()
  }, [A, s]), (0, d.useSubscribeGuildMembers)({
    [n]: [t]
  }), l.useEffect(() => {
    u.default.requestMembersById(n, [t]), (0, p.default)(t, void 0, {
      guildId: n
    }), (0, h.getMemberSupplemental)(n, [t])
  }, [n, t]), A) ? j ? (0, a.jsx)("div", {
    className: i(T.sidebarContianer, T.loadingContainer, v),
    style: N,
    children: (0, a.jsx)(o.Spinner, {
      animated: !0,
      type: o.Spinner.Type.SPINNING_CIRCLE
    })
  }) : (0, a.jsx)(L, {
    children: (0, a.jsx)("div", {
      className: i(T.sidebarContianer, v),
      style: N,
      children: (0, a.jsx)(m.default, {
        user: M,
        guildId: n,
        profileType: I.UserProfileTypes.MODAL,
        forceShowPremium: !0,
        className: i(T.profileThemedContainer),
        children: (0, a.jsxs)("div", {
          className: i(T.innerContainer),
          children: [(0, a.jsx)(_.default, {
            userId: t,
            guildId: n,
            onClose: s
          }), (0, a.jsx)(S.default, {
            userId: t,
            guildId: n,
            onClose: s,
            className: x
          })]
        })
      })
    })
  }) : null
}