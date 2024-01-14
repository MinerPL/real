"use strict";
l.r(t), l.d(t, {
  default: function() {
    return v
  }
}), l("222007");
var n = l("37983"),
  a = l("884691"),
  s = l("414456"),
  i = l.n(s),
  r = l("446674"),
  o = l("77078"),
  u = l("851387"),
  d = l("216049"),
  c = l("915639"),
  f = l("102985"),
  m = l("461380"),
  p = l("713135"),
  E = l("824140"),
  T = l("401642"),
  _ = l("777003"),
  S = l("590456"),
  h = l("49111"),
  I = l("782340"),
  A = l("843482"),
  g = l("814076");

function v(e) {
  var t, l;
  let s, v, {
      userId: C,
      channelId: N,
      guild: y,
      theme: O,
      onClose: M,
      className: x
    } = e,
    R = (0, d.default)(y, C, N),
    [L, P] = a.useState(new Set),
    b = (0, r.useStateFromStores)([p.default], () => p.default.getUserProfile(C)),
    D = null !== (t = null == b ? void 0 : b.connectedAccounts) && void 0 !== t ? t : [],
    j = null !== (l = null == b ? void 0 : b.applicationRoleConnections) && void 0 !== l ? l : [],
    U = (0, r.useStateFromStores)([f.default], () => f.default.hidePersonalInformation),
    F = (0, r.useStateFromStores)([c.default], () => c.default.locale);
  if (a.useEffect(() => {
      (null == y ? void 0 : y.id) != null && (null == R ? void 0 : R.id) != null && u.default.fetchGuildRoleConnectionsEligibility(y.id, R.id).then(e => {
        let t = new Set;
        for (let l of e)
          for (let {
              connection_type: e
            }
            of l) t.add(e);
        P(t)
      })
    }, [null == y ? void 0 : y.id, null == R ? void 0 : R.id]), U || null == R) return null;
  let w = Array.from(L).map(e => {
    let t = D.find(t => t.type === e);
    return null == t ? null : (0, n.jsx)(E.ConnectedUserAccount, {
      connectedAccount: t,
      theme: O,
      locale: F,
      userId: C
    }, "".concat(t.type, ":").concat(t.id))
  }).filter(e => null != e);
  return (w.length > 0 && (s = (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(o.Heading, {
      variant: "eyebrow",
      className: g.title,
      children: I.default.Messages.CONNECTIONS
    }), (0, n.jsxs)("div", {
      className: i(A.connectionsContainer, x),
      children: [w, (0, n.jsxs)(o.Clickable, {
        onClick: function() {
          (0, T.openUserProfileModal)({
            userId: C,
            guildId: null == y ? void 0 : y.id,
            channelId: N,
            section: S.UserProfileSections.USER_INFO_CONNECTIONS,
            analyticsLocation: {
              section: h.AnalyticsSections.PROFILE_POPOUT
            }
          }), null == M || M()
        },
        className: A.connections,
        children: [(0, n.jsx)(o.Text, {
          variant: "text-md/semibold",
          color: "interactive-active",
          className: A.connectionsText,
          children: I.default.Messages.CONNECTIONS_ROLE_POPOUT_VIEW_ALL
        }), (0, n.jsx)(m.default, {
          direction: m.default.Directions.RIGHT,
          className: A.connectionsCaret
        })]
      })]
    })]
  })), j.length > 0 && (v = (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(o.Heading, {
      variant: "eyebrow",
      className: g.title,
      children: I.default.Messages.APPS
    }), (0, n.jsx)("div", {
      className: i(A.connectionsContainer, x),
      children: j.map(e => (0, n.jsx)(E.ConnectedApplicationUserRoleAccount, {
        applicationRoleConnection: e,
        locale: F
      }, e.application.id))
    })]
  })), null == s && null == v) ? null : (0, n.jsxs)(_.default, {
    children: [v, s]
  })
}