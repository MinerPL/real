"use strict";
n.r(t), n.d(t, {
  UserLinkPendingRequestRow: function() {
    return S
  }
});
var a = n("37983"),
  s = n("884691"),
  i = n("627445"),
  l = n.n(i),
  r = n("65597"),
  o = n("77078"),
  u = n("697218"),
  d = n("36694"),
  c = n("945330"),
  f = n("775032"),
  E = n("25132"),
  _ = n("768815"),
  h = n("176661"),
  C = n("922832"),
  I = n("782340"),
  T = n("850832");

function S(e) {
  let {
    user: t
  } = e, i = (0, f.default)(), S = (0, E.useHasMaxConnections)(), m = (0, r.default)([u.default], () => u.default.getCurrentUser()), p = s.useCallback(() => {
    l(void 0 !== m, "User must be logged in to accept a link request"), (0, o.openModalLazy)(async () => {
      let {
        default: e
      } = await n.el("134855").then(n.bind(n, "134855"));
      return n => (0, a.jsx)(e, {
        ...n,
        currentUser: m,
        otherUser: t
      })
    })
  }, [m, t]), A = s.useCallback(() => {
    l(void 0 !== m, "User must be logged in to decline a link request"), (0, o.openModalLazy)(async () => {
      let {
        default: e
      } = await n.el("217014").then(n.bind(n, "217014"));
      return n => (0, a.jsx)(e, {
        ...n,
        currentUser: m,
        otherUser: t
      })
    })
  }, [m, t]), g = s.useCallback(() => {
    l(void 0 !== m, "User must be logged in to decline a link request"), (0, o.openModalLazy)(async () => {
      let {
        default: e
      } = await n.el("809175").then(n.bind(n, "809175"));
      return n => (0, a.jsx)(e, {
        ...n,
        currentUser: m,
        otherUser: t
      })
    })
  }, [m, t]);
  return (0, a.jsxs)("div", {
    className: T.container,
    children: [(0, a.jsx)("div", {
      className: T.details,
      children: (0, a.jsx)(h.default, {
        otherUser: t,
        status: C.UserLinkStatus.PENDING
      })
    }), (0, a.jsx)("div", {
      className: T.actions,
      children: i ? (0, a.jsx)(_.default, {
        icon: c.default,
        className: T.actionDeny,
        tooltip: I.default.Messages.FAMILY_CENTER_LINK_ACTION_CANCEL,
        onClick: g
      }) : (0, a.jsxs)(a.Fragment, {
        children: [S ? null : (0, a.jsx)(_.default, {
          icon: d.default,
          className: T.actionAccept,
          tooltip: I.default.Messages.FAMILY_CENTER_LINK_ACTION_ACCEPT,
          onClick: p
        }), (0, a.jsx)(_.default, {
          icon: c.default,
          className: T.actionDeny,
          tooltip: I.default.Messages.FAMILY_CENTER_LINK_ACTION_DECLINE,
          onClick: A
        })]
      })
    })]
  })
}