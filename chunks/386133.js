"use strict";
n.r(t), n.d(t, {
  default: function() {
    return M
  }
});
var a = n("37983"),
  s = n("884691"),
  i = n("917351"),
  l = n.n(i),
  r = n("483366"),
  o = n.n(r),
  u = n("446674"),
  d = n("77078"),
  c = n("913144"),
  E = n("777273"),
  f = n("843823"),
  _ = n("697218"),
  h = n("392453"),
  C = n("599110"),
  T = n("744923"),
  I = n("333705"),
  S = n("749554"),
  N = n("62659"),
  A = n("36512"),
  p = n("638441"),
  m = n("49111"),
  g = n("988268"),
  R = n("782340"),
  O = n("561368");
let L = (0, p.default)(function(e) {
    let {
      party: t,
      onUserContextMenu: n,
      onChannelContextMenu: i
    } = e, l = (0, a.jsx)(S.default, {
      party: t,
      onUserContextMenu: n
    }), r = (0, a.jsx)(I.default, {
      party: t,
      onChannelContextMenu: i
    }), {
      partiedMembers: u,
      applicationStreams: c,
      currentActivities: E,
      voiceChannels: f
    } = t, _ = u.length, h = c.length, T = E.length, p = f.length > 0, R = s.useCallback(() => {
      let e = E.filter(e => {
        var t, n;
        return (null === (t = e.game) || void 0 === t ? void 0 : t.name) != null && (null === (n = e.game) || void 0 === n ? void 0 : n.type) === g.ApplicationTypes.GAME
      }).map(e => e.game.name);
      C.default.track(m.AnalyticEvents.NOW_PLAYING_CARD_HOVERED, {
        num_users: _,
        num_streams: h,
        num_activities: T,
        in_voice_channel: p,
        games_detected: e
      })
    }, [_, h, T, p, E]), L = o(R, 9e5);
    return null != l || null != r ? (0, a.jsx)(d.Popout, {
      position: "left",
      renderPopout: e => {
        let {
          closePopout: n
        } = e;
        return (0, a.jsx)(A.default, {
          party: t,
          close: n
        })
      },
      spacing: 8,
      children: (e, t) => {
        let {
          isShown: n
        } = t;
        return (0, a.jsx)(N.default, {
          ...e,
          onMouseEnter: L,
          "aria-haspopup": "menu",
          className: O.itemCard,
          active: n,
          children: (0, a.jsxs)("div", {
            children: [l, r]
          })
        })
      }
    }) : null
  }),
  v = l.throttle(() => E.fetchUserAffinities(!1), 3e5);

function M() {
  let {
    nowPlayingCards: e,
    loaded: t,
    needsRefresh: n,
    fetching: i,
    currentUser: l
  } = (0, u.useStateFromStoresObject)([h.default, f.default, _.default], () => ({
    nowPlayingCards: h.default.nowPlayingCards,
    loaded: h.default.loaded,
    needsRefresh: f.default.needsRefresh(),
    fetching: f.default.getFetching(),
    currentUser: _.default.getCurrentUser()
  }));
  s.useEffect(() => (c.default.wait(() => T.mount()), () => c.default.wait(() => T.unmount())), [null == l ? void 0 : l.id]), s.useEffect(() => {
    n && !i && v()
  }, [n, i]);
  let r = null;
  return t ? (r = e.length > 0 ? e.map(e => {
    let {
      party: t
    } = e;
    return (0, a.jsx)(L, {
      party: t
    }, t.id)
  }) : (0, a.jsxs)("div", {
    className: O.emptyCard,
    children: [(0, a.jsx)(d.Heading, {
      variant: "heading-md/semibold",
      className: O.emptyHeader,
      children: R.default.Messages.ACTIVITY_FEED_NONE_PLAYING_HEADER
    }), (0, a.jsx)(d.Text, {
      color: "none",
      className: O.emptyText,
      variant: "text-sm/normal",
      children: R.default.Messages.ACTIVITY_FEED_NONE_PLAYING_BODY
    })]
  }), (0, a.jsx)(a.Fragment, {
    children: r
  })) : (0, a.jsx)("div", {
    className: O.emptyCard,
    children: (0, a.jsx)(d.Spinner, {})
  })
}