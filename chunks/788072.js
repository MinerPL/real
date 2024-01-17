"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
}), n("222007");
var a = n("37983"),
  l = n("884691"),
  s = n("917351"),
  i = n.n(s),
  r = n("446674"),
  o = n("151426"),
  u = n("823527"),
  d = n("47693"),
  c = n("77078"),
  f = n("954732"),
  h = n("362189"),
  E = n("211248"),
  m = n("805614"),
  p = n("64318"),
  g = n("833150"),
  S = n("782340"),
  N = n("643000");

function _(e) {
  let {
    setTab: t,
    badgeState: s,
    closePopout: _
  } = e, T = (0, r.useStateFromStoresArray)([f.default], () => f.default.getInvites()), C = (0, r.useStateFromStores)([f.default], () => f.default.getInviteStatuses()), [A, x] = l.useMemo(() => i.partition(T, e => {
    var t;
    if ((null === (t = C[e.invite_id]) || void 0 === t ? void 0 : t.joinable) === !1) return !1;
    let n = (Date.now() - new Date(e.created_at).getTime()) / 1e3;
    return n < e.ttl
  }), [T, C]);
  return (l.useEffect(() => {
    (0, h.clearUnseenInvites)()
  }), 0 === T.length) ? (0, a.jsxs)("div", {
    className: N.container,
    children: [(0, a.jsx)(p.default, {
      tab: o.InboxTab.GAME_INVITES,
      setTab: t,
      badgeState: s,
      closePopout: _
    }), (0, a.jsx)("div", {
      className: N.emptyStateContainer,
      children: (0, a.jsx)(m.default, {
        Icon: u.GameControllerIcon,
        header: S.default.Messages.GAME_INVITES_EMPTY_STATE_TITLE,
        tip: S.default.Messages.GAME_INVITES_EMPTY_STATE_SUBTITLE
      })
    })]
  }) : (0, a.jsxs)("div", {
    className: N.container,
    children: [(0, a.jsx)(p.default, {
      tab: o.InboxTab.GAME_INVITES,
      setTab: t,
      badgeState: s,
      closePopout: _,
      children: (0, a.jsx)(E.default, {
        className: N.deleteButton,
        tooltip: S.default.Messages.GAME_INVITES_DELETE_ALL,
        color: E.CircleIconButtonColors.SECONDARY,
        icon: (0, a.jsx)(d.TrashIcon, {
          width: 16,
          height: 16
        }),
        onClick: function() {
          (0, c.openModalLazy)(async () => {
            let {
              default: e
            } = await n.el("715668").then(n.bind(n, "715668"));
            return t => (0, a.jsx)(e, {
              ...t,
              onDelete: async () => {
                await t.onClose()
              }
            })
          })
        }
      })
    }), (0, a.jsx)(c.AdvancedScrollerThin, {
      children: (0, a.jsxs)("div", {
        className: N.invitesContainer,
        children: [A.length > 0 && (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(I, {
            title: S.default.Messages.GAME_INVITES_RECENT_HEADER
          }), (0, a.jsx)(a.Fragment, {
            children: A.map(e => (0, a.jsx)(g.default, {
              invite: e,
              expired: !1
            }, e.invite_id))
          })]
        }), x.length > 0 && (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(I, {
            title: S.default.Messages.GAME_INVITES_EXPIRED_HEADER
          }), (0, a.jsx)(a.Fragment, {
            children: x.map(e => (0, a.jsx)(g.default, {
              invite: e,
              expired: !0
            }, e.invite_id))
          })]
        })]
      })
    })]
  })
}

function I(e) {
  let {
    title: t
  } = e;
  return (0, a.jsxs)("div", {
    className: N.headerContainer,
    children: [(0, a.jsx)(c.Text, {
      className: N.headerTitle,
      variant: "text-xs/semibold",
      color: "interactive-normal",
      children: t
    }), (0, a.jsx)("div", {
      className: N.headerDivider
    })]
  })
}