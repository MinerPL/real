"use strict";
n.r(t), n.d(t, {
  default: function() {
    return P
  }
});
var l = n("37983"),
  s = n("884691"),
  a = n("414456"),
  i = n.n(a),
  u = n("446674"),
  r = n("77078"),
  d = n("812204"),
  o = n("685665"),
  c = n("69927"),
  f = n("994906"),
  h = n("459824"),
  m = n("41594"),
  S = n("539938"),
  g = n("393414"),
  x = n("401642"),
  E = n("982108"),
  T = n("42203"),
  C = n("923959"),
  p = n("305961"),
  I = n("18494"),
  M = n("98292"),
  b = n("155207"),
  A = n("466818"),
  N = n("485810"),
  j = n("914985"),
  _ = n("714247"),
  v = n("565556"),
  R = n("891222"),
  B = n("49111"),
  k = n("724210"),
  G = n("782340"),
  L = n("973033"),
  F = n("305794");

function y(e) {
  let {
    guild: t,
    previousChannel: n
  } = e, a = G.default.Messages.MEMBER_SAFETY_CHANNEL_TITLE, i = G.default.Messages.MEMBER_SAFETY_CHANNEL_TITLE;
  return (0, c.usePageTitle)({
    location: t.name,
    subsection: a
  }), (0, l.jsxs)(S.default, {
    className: L.header,
    innerClassname: L.innerHeader,
    channelId: k.StaticChannelRoute.MEMBER_SAFETY,
    guildId: t.id,
    hideSearch: !0,
    toolbar: null != n ? (0, l.jsx)(r.Button, {
      className: L.returnButton,
      size: r.Button.Sizes.SMALL,
      look: r.Button.Looks.OUTLINED,
      color: r.Button.Colors.PRIMARY,
      onClick: () => {
        null != n && (0, g.transitionToGuild)(t.id, n.id)
      },
      children: (0, l.jsx)(r.Text, {
        className: L.returnButtonText,
        variant: "text-xs/medium",
        color: "none",
        children: G.default.Messages.RETURN_TO_CHANNEL.format({
          channelNameHook: () => null == n ? null : (0, l.jsxs)(s.Fragment, {
            children: [(0, l.jsx)(m.ChannelItemIcon, {
              className: L.returnIcon,
              guild: t,
              channel: n
            }), (0, l.jsx)(M.default, {
              children: (0, l.jsx)(r.Text, {
                variant: "text-xs/medium",
                color: "none",
                children: n.name
              })
            })]
          }, n.id)
        })
      })
    }) : (0, l.jsx)("div", {}),
    children: [(0, l.jsx)(S.default.Icon, {
      icon: b.default,
      "aria-hidden": !0
    }), (0, l.jsx)(S.default.Title, {
      children: i
    })]
  })
}

function P(e) {
  let {
    guildId: t
  } = e, n = (0, u.useStateFromStores)([p.default], () => p.default.getGuild(t)), {
    AnalyticsLocationProvider: a
  } = (0, o.default)(d.default.MEMBER_SAFETY_PAGE), c = (0, A.useCanAccessMemberSafetyPage)(t), m = (0, h.useCanAccessGuildMemberModView)(t), S = (0, u.useStateFromStores)([I.default], () => I.default.getLastSelectedChannelId(t)), M = (0, u.useStateFromStores)([T.default], () => T.default.getChannel(S)), b = s.useRef(null);
  (0, N.useSubscribeToGuildMemberUpdates)(t), s.useEffect(() => {
    if (!c && null != n) {
      var e;
      let t = null === (e = C.default.getDefaultChannel(n.id)) || void 0 === e ? void 0 : e.id;
      (0, g.transitionToGuild)(n.id, t)
    }
  }, [n, c]);
  let G = (0, u.useStateFromStores)([E.default], () => null != E.default.getGuildSidebarState(t), [t]),
    P = s.useCallback(e => {
      m ? (0, f.openGuildMemberModViewSidebar)(e.guildId, e.userId, k.StaticChannelRoute.MEMBER_SAFETY) : (0, x.openUserProfileModal)({
        userId: e.userId,
        guildId: e.guildId,
        analyticsLocation: {
          section: B.AnalyticsSections.MEMBER_SAFETY_PAGE
        }
      })
    }, [m]);
  return null != n && c ? (0, l.jsxs)(a, {
    children: [(0, l.jsxs)("div", {
      className: i(F.chat, L.page, {
        [F.threadSidebarOpen]: G
      }),
      children: [(0, l.jsx)(y, {
        guild: n,
        previousChannel: M
      }), (0, l.jsx)(r.AdvancedScroller, {
        className: i(L.scroller),
        ref: b,
        children: (0, l.jsxs)("div", {
          className: i(F.content, L.container),
          children: [(0, l.jsx)(j.default, {
            guild: n
          }), (0, l.jsx)(R.default, {
            guild: n,
            onMemberSelect: P
          })]
        })
      }), (0, l.jsx)(v.default, {
        guildId: n.id
      })]
    }), m && (0, l.jsx)(_.default, {
      guildId: n.id
    })]
  }) : null
}