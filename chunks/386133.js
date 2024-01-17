"use strict";
n.r(t), n.d(t, {
  default: function() {
    return D
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
  T = n("718517"),
  I = n("744923"),
  S = n("333705"),
  N = n("749554"),
  A = n("62659"),
  p = n("36512"),
  m = n("638441"),
  g = n("49111"),
  R = n("988268"),
  O = n("782340"),
  L = n("561368");
let v = 15 * T.default.Millis.MINUTE,
  M = (0, m.default)(function(e) {
    let {
      party: t,
      onUserContextMenu: n,
      onChannelContextMenu: i
    } = e, l = (0, a.jsx)(N.default, {
      party: t,
      onUserContextMenu: n
    }), r = (0, a.jsx)(S.default, {
      party: t,
      onChannelContextMenu: i
    }), {
      partiedMembers: u,
      applicationStreams: c,
      currentActivities: E,
      voiceChannels: f
    } = t, _ = u.length, h = c.length, T = E.length, I = f.length > 0, m = s.useCallback(() => {
      let e = E.filter(e => {
        var t, n;
        return (null === (t = e.game) || void 0 === t ? void 0 : t.name) != null && (null === (n = e.game) || void 0 === n ? void 0 : n.type) === R.ApplicationTypes.GAME
      }).map(e => e.game.name);
      C.default.track(g.AnalyticEvents.NOW_PLAYING_CARD_HOVERED, {
        num_users: _,
        num_streams: h,
        num_activities: T,
        in_voice_channel: I,
        games_detected: e
      })
    }, [_, h, T, I, E]), O = o(m, v);
    return null != l || null != r ? (0, a.jsx)(d.Popout, {
      position: "left",
      renderPopout: e => {
        let {
          closePopout: n
        } = e;
        return (0, a.jsx)(p.default, {
          party: t,
          close: n
        })
      },
      spacing: 8,
      children: (e, t) => {
        let {
          isShown: n
        } = t;
        return (0, a.jsx)(A.default, {
          ...e,
          onMouseEnter: O,
          "aria-haspopup": "menu",
          className: L.itemCard,
          active: n,
          children: (0, a.jsxs)("div", {
            children: [l, r]
          })
        })
      }
    }) : null
  }),
  P = l.throttle(() => E.fetchUserAffinities(!1), 3e5);

function D() {
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
  s.useEffect(() => (c.default.wait(() => I.mount()), () => c.default.wait(() => I.unmount())), [null == l ? void 0 : l.id]), s.useEffect(() => {
    n && !i && P()
  }, [n, i]);
  let r = null;
  return t ? (r = e.length > 0 ? e.map(e => {
    let {
      party: t
    } = e;
    return (0, a.jsx)(M, {
      party: t
    }, t.id)
  }) : (0, a.jsxs)("div", {
    className: L.emptyCard,
    children: [(0, a.jsx)(d.Heading, {
      variant: "heading-md/semibold",
      className: L.emptyHeader,
      children: O.default.Messages.ACTIVITY_FEED_NONE_PLAYING_HEADER
    }), (0, a.jsx)(d.Text, {
      color: "none",
      className: L.emptyText,
      variant: "text-sm/normal",
      children: O.default.Messages.ACTIVITY_FEED_NONE_PLAYING_BODY
    })]
  }), (0, a.jsx)(a.Fragment, {
    children: r
  })) : (0, a.jsx)("div", {
    className: L.emptyCard,
    children: (0, a.jsx)(d.Spinner, {})
  })
}