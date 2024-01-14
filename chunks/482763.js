"use strict";
s.r(t), s.d(t, {
  default: function() {
    return R
  }
});
var a = s("37983"),
  n = s("884691"),
  l = s("627445"),
  i = s.n(l),
  r = s("446674"),
  o = s("77078"),
  d = s("716241"),
  u = s("70919"),
  c = s("957255"),
  E = s("599110"),
  _ = s("449008"),
  T = s("36402"),
  I = s("531493"),
  S = s("900938"),
  N = s("986654"),
  g = s("462752"),
  f = s("505002"),
  A = s("893448"),
  L = s("376252"),
  m = s("728955"),
  C = s("53948"),
  O = s("49111"),
  h = s("121255");

function R(e) {
  let t, {
      editRoleId: s,
      setEditRoleId: l,
      selectedSection: R,
      setSelectedSection: D
    } = e,
    M = (0, r.useStateFromStores)([I.default], () => I.default.guild, []);
  i(null != M, "guildId cannot be null here");
  let {
    role: G,
    permissionSearchQuery: x
  } = (0, r.useStateFromStoresObject)([I.default], () => ({
    role: I.default.getRole(s),
    permissionSearchQuery: I.default.getPermissionSearchQuery()
  }), [s]);
  n.useEffect(() => {
    null == G && l(null)
  }, [G, l]);
  let p = (0, r.useStateFromStores)([c.default], () => c.default.getHighestRole(M), [M]),
    U = (0, r.useStateFromStores)([c.default], () => !c.default.isRoleHigher(M, p, G)),
    v = n.useRef(null),
    j = (0, r.useStateFromStores)([S.default], () => S.default.getProps().integrations);
  if (n.useEffect(() => {
      var e, t;
      let a = (0, N.getSectionAnalyticsName)(R),
        n = null !== (t = null === (e = T.default.getRoleMemberCount(M.id)) || void 0 === e ? void 0 : e[s]) && void 0 !== t ? t : 0;
      E.default.track(O.AnalyticEvents.ROLE_PAGE_VIEWED, {
        tab_opened: a,
        is_everyone: M.id === s,
        role_id: s,
        role_mentionable: null == G ? void 0 : G.mentionable,
        role_hoist: null == G ? void 0 : G.hoist,
        role_permissions: null == G ? void 0 : G.permissions.toString(),
        role_num_members: n,
        ...(0, d.collectGuildAnalyticsMetadata)(M.id)
      })
    }, [R, M.id, null == G ? void 0 : G.id]), n.useEffect(() => {
      (null == G ? void 0 : G.id) != null && (0, u.fetchRoleConnectionsConfiguration)(M.id, G.id)
    }, [M.id, null == G ? void 0 : G.id]), null == G) return null;
  switch (R) {
    case C.GuildSettingsRoleEditSections.DISPLAY:
      t = (0, a.jsx)(f.default, {
        guild: M,
        role: G,
        locked: U,
        highestRole: p,
        setSelectedSection: D
      });
      break;
    case C.GuildSettingsRoleEditSections.PERMISSIONS:
      t = (0, a.jsx)(L.default, {
        guild: M,
        role: G,
        locked: U,
        setSelectedSection: D,
        initialSearchQuery: x
      });
      break;
    case C.GuildSettingsRoleEditSections.VERIFICATIONS:
      t = (0, a.jsx)(g.default, {
        guild: M,
        role: G,
        locked: U,
        setSelectedSection: D,
        integrations: null != j ? j : void 0
      });
      break;
    case C.GuildSettingsRoleEditSections.MEMBERS:
      t = (0, a.jsx)(A.default, {
        guild: M,
        role: G,
        locked: U,
        setSelectedSection: D
      });
      break;
    default:
      (0, _.assertNever)(R)
  }
  return (0, a.jsxs)(o.FormSection, {
    className: h.page,
    children: [(0, a.jsx)(m.default, {
      guild: M,
      currentRoleId: s,
      setCurrentRoleId: l,
      setSelectedSection: D
    }), (0, a.jsx)("div", {
      className: h.contentContainer,
      ref: v,
      children: (0, a.jsx)(o.FocusRingScope, {
        containerRef: v,
        children: t
      })
    })]
  })
}