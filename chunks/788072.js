"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  }
}), n("222007");
var l = n("37983"),
  a = n("884691"),
  s = n("917351"),
  i = n.n(s),
  r = n("446674"),
  o = n("151426"),
  u = n("823527"),
  d = n("47693"),
  c = n("77078"),
  f = n("954732"),
  E = n("362189"),
  h = n("211248"),
  _ = n("805614"),
  S = n("64318"),
  T = n("833150"),
  N = n("782340"),
  p = n("643000");

function I(e) {
  let {
    setTab: t,
    badgeState: s,
    closePopout: I
  } = e, A = (0, r.useStateFromStoresArray)([f.default], () => f.default.getInvites()), g = (0, r.useStateFromStores)([f.default], () => f.default.getInviteStatuses()), [C, R] = a.useMemo(() => i.partition(A, e => {
    var t;
    if ((null === (t = g[e.invite_id]) || void 0 === t ? void 0 : t.joinable) === !1) return !1;
    let n = (Date.now() - new Date(e.created_at).getTime()) / 1e3;
    return n < e.ttl
  }), [A, g]);
  return (a.useEffect(() => {
    (0, E.clearUnseenInvites)()
  }), 0 === A.length) ? (0, l.jsxs)("div", {
    className: p.container,
    children: [(0, l.jsx)(S.default, {
      tab: o.InboxTab.GAME_INVITES,
      setTab: t,
      badgeState: s,
      closePopout: I
    }), (0, l.jsx)("div", {
      className: p.emptyStateContainer,
      children: (0, l.jsx)(_.default, {
        Icon: u.GameControllerIcon,
        header: N.default.Messages.GAME_INVITES_EMPTY_STATE_TITLE,
        tip: N.default.Messages.GAME_INVITES_EMPTY_STATE_SUBTITLE
      })
    })]
  }) : (0, l.jsxs)("div", {
    className: p.container,
    children: [(0, l.jsx)(S.default, {
      tab: o.InboxTab.GAME_INVITES,
      setTab: t,
      badgeState: s,
      closePopout: I,
      children: (0, l.jsx)(h.default, {
        className: p.deleteButton,
        tooltip: N.default.Messages.GAME_INVITES_DELETE_ALL,
        color: h.CircleIconButtonColors.SECONDARY,
        icon: (0, l.jsx)(d.TrashIcon, {
          width: 16,
          height: 16
        }),
        onClick: function() {
          (0, c.openModalLazy)(async () => {
            let {
              default: e
            } = await n.el("715668").then(n.bind(n, "715668"));
            return t => (0, l.jsx)(e, {
              ...t,
              onDelete: async () => {
                await t.onClose()
              }
            })
          })
        }
      })
    }), (0, l.jsx)(c.AdvancedScrollerThin, {
      children: (0, l.jsxs)("div", {
        className: p.invitesContainer,
        children: [C.length > 0 && (0, l.jsxs)(l.Fragment, {
          children: [(0, l.jsx)(m, {
            title: N.default.Messages.GAME_INVITES_RECENT_HEADER
          }), (0, l.jsx)(l.Fragment, {
            children: C.map(e => (0, l.jsx)(T.default, {
              invite: e,
              expired: !1
            }, e.invite_id))
          })]
        }), R.length > 0 && (0, l.jsxs)(l.Fragment, {
          children: [(0, l.jsx)(m, {
            title: N.default.Messages.GAME_INVITES_EXPIRED_HEADER
          }), (0, l.jsx)(l.Fragment, {
            children: R.map(e => (0, l.jsx)(T.default, {
              invite: e,
              expired: !0
            }, e.invite_id))
          })]
        })]
      })
    })]
  })
}

function m(e) {
  let {
    title: t
  } = e;
  return (0, l.jsxs)("div", {
    className: p.headerContainer,
    children: [(0, l.jsx)(c.Text, {
      className: p.headerTitle,
      variant: "text-xs/semibold",
      color: "interactive-normal",
      children: t
    }), (0, l.jsx)("div", {
      className: p.headerDivider
    })]
  })
}