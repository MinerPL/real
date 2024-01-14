"use strict";
a.r(t), a.d(t, {
  default: function() {
    return k
  }
}), a("222007");
var l = a("37983"),
  n = a("884691"),
  s = a("414456"),
  i = a.n(s),
  d = a("917351"),
  r = a("355262"),
  u = a("942367"),
  o = a("446674"),
  c = a("77078"),
  f = a("731898"),
  m = a("841098"),
  h = a("510889"),
  E = a("191152"),
  g = a("425974"),
  I = a("398604"),
  _ = a("534222"),
  x = a("316133"),
  v = a("461380"),
  S = a("599110"),
  C = a("558130"),
  N = a("887446"),
  p = a("241094"),
  T = a("154925"),
  A = a("128651"),
  j = a("475117"),
  M = a("540585"),
  D = a("821435"),
  F = a("49111"),
  L = a("782340"),
  R = a("382756"),
  b = a("897142"),
  G = a("352791");
let O = {
  overflowX: void 0,
  overflowY: void 0
};

function y() {
  let e = (0, m.default)();
  return (0, l.jsxs)("div", {
    className: R.emptyStateContainer,
    children: [(0, l.jsx)("img", {
      className: R.image,
      src: "dark" === e ? b : G,
      width: 154,
      height: 48,
      alt: ""
    }), (0, l.jsx)(c.Heading, {
      className: R.title,
      variant: "heading-md/semibold",
      children: L.default.Messages.ACTIVE_CHANNELS_EMPTY_TITLE
    }), (0, l.jsx)(c.Text, {
      className: R.subtitle,
      color: "header-secondary",
      variant: "text-sm/normal",
      children: L.default.Messages.ACTIVE_CHANNELS_EMPTY_SUBTITLE
    })]
  })
}

function H(e) {
  let {
    isUsingCollapsedLayout: t,
    scrollerRef: a,
    handleScroll: n,
    activeChannels: s,
    totalActiveChannels: i
  } = e, d = (0, h.default)("active-channels", a, {
    orientation: t ? u.Orientations.HORIZONTAL : u.Orientations.VERTICAL
  });
  return (0, l.jsx)(r.ListNavigatorProvider, {
    navigator: d,
    children: (0, l.jsx)(r.ListNavigatorContainer, {
      children: e => {
        let {
          ref: d,
          ...r
        } = e;
        return (0, l.jsxs)(c.AdvancedScrollerNone, {
          className: R.channelList,
          orientation: "horizontal",
          paddingFix: !1,
          onScroll: n,
          style: t ? void 0 : O,
          ref: e => {
            var t;
            a.current = e, d.current = null !== (t = null == e ? void 0 : e.getScrollerNode()) && void 0 !== t ? t : null, n()
          },
          ...r,
          children: [s, t && i < 4 && (0, l.jsx)(T.ActiveNowFiller, {})]
        })
      }
    })
  })
}

function k(e) {
  let {
    guildId: t,
    isUsingCollapsedLayout: a
  } = e, s = (0, o.useStateFromStores)([C.default], () => C.default.getActiveChannelsFetchStatus(t)), r = (0, p.useActiveTextChannels)(t), u = (0, _.useGuildActiveEvent)(t), m = (0, o.useStateFromStores)([x.default], () => x.default.getVoiceStates(t)), h = (0, p.useActiveVoiceChannels)(t, u), T = r.length + h.length + (null != u ? 1 : 0), b = T > 0, G = n.useRef(null), O = (0, _.default)(t), k = O.filter(e => !(0, I.isGuildScheduledEventActive)(e)), [U, w] = n.useState(0 === k.length), [B, P] = n.useState(!0), [V, W] = n.useState(!1), {
    ref: K,
    width: z
  } = (0, f.default)(), Y = n.useCallback(() => {
    let {
      current: e
    } = G;
    if (null == e || null == z) return;
    let {
      scrollLeft: t,
      scrollWidth: a
    } = e.getScrollerState();
    P(t <= 0), W(t >= a - z - 1)
  }, [z]), Z = n.useCallback(() => {
    let {
      current: e
    } = G;
    if (null == e || null == z) return;
    let {
      scrollLeft: t
    } = e.getScrollerState(), a = z + 12, l = Math.max(.25 * z - 9, 140);
    e.scrollTo({
      to: Math.max(0, Math.ceil((t - a) / l) * l),
      animate: !0
    })
  }, [z]), X = n.useCallback(() => {
    let {
      current: e
    } = G;
    if (null == e || null == z) return;
    let {
      scrollLeft: t,
      scrollWidth: a
    } = e.getScrollerState(), l = z + 12, n = Math.max(.25 * z - 9, 140);
    e.scrollTo({
      to: Math.min(a, Math.floor((t + l) / n) * n),
      animate: !0
    })
  }, [z]);
  n.useEffect(() => {
    C.default.shouldFetch(t) && (0, E.fetchActiveChannels)(t)
  }, [t]), (0, g.default)(t, r, h);
  let J = n.useCallback(e => {
      S.default.track(F.AnalyticEvents.ACTIVE_CHANNEL_CLICKED, {
        guild_id: e.guild_id,
        channel_id: e.id,
        channel_type: e.type,
        text_channels_shown: r.length,
        voice_channels_shown: h.length,
        home_session_id: N.default.getHomeSessionId(e.guild_id)
      })
    }, [r, h]),
    q = r.map(e => (0, l.jsx)(j.default, {
      guildId: t,
      channel: e,
      trackChannelClick: J
    }, e.id)),
    Q = h.map(e => (0, l.jsx)(M.default, {
      guildId: t,
      channel: e,
      voiceStates: m[e.id],
      trackChannelClick: J,
      showPreview: !a
    }, e.id)),
    $ = [];
  if (a) $ = [...q, ...Q];
  else if (U) $ = d.compact([null != u && (0, l.jsx)(D.default, {
    event: u,
    isInList: !0
  }, "event"), ...q.slice(0, 10), ...Q]);
  else {
    let e = d.take(q, 3 - (Q.length > 0 ? 1 : 0) - (null != u ? 1 : 0)),
      t = d.take(Q, 3 - e.length - (null != u ? 1 : 0));
    $ = d.compact([null != u && (0, l.jsx)(D.default, {
      event: u,
      isInList: !0
    }, "event"), ...e, ...t])
  }
  return (0, l.jsx)("div", {
    ref: K,
    className: R.container,
    children: (0, l.jsxs)(c.HeadingLevel, {
      component: (0, l.jsxs)("div", {
        className: R.header,
        children: [(0, l.jsx)(c.Heading, {
          variant: "heading-md/semibold",
          children: L.default.Messages.ACTIVE_CHANNELS_HEADER
        }), !a && (null == s ? void 0 : s.loading) !== !0 && T > 3 && (0, l.jsx)(c.Clickable, {
          onClick: () => w(!U),
          children: (0, l.jsx)(c.Text, {
            className: R.showAll,
            variant: "text-sm/normal",
            children: U ? L.default.Messages.GUILD_HOME_SEE_LESS : L.default.Messages.GUILD_HOME_SEE_ALL.format({
              count: T
            })
          })
        })]
      }),
      children: [(null == s ? void 0 : s.loading) ? (0, l.jsx)(c.AdvancedScrollerNone, {
        className: R.channelList,
        orientation: "horizontal",
        paddingFix: !1,
        children: (0, l.jsx)(A.default, {
          guildId: t
        })
      }) : b ? (0, l.jsx)(H, {
        isUsingCollapsedLayout: a,
        scrollerRef: G,
        handleScroll: Y,
        activeChannels: $,
        totalActiveChannels: T
      }) : (0, l.jsx)(y, {}), a && b && !B && (0, l.jsx)(c.Clickable, {
        className: i(R.scrollIcon, R.left),
        onClick: Z,
        "aria-hidden": !0,
        children: (0, l.jsx)(v.default, {
          direction: v.default.Directions.LEFT,
          height: 12,
          width: 12
        })
      }), a && b && !V && (0, l.jsx)(c.Clickable, {
        className: i(R.scrollIcon, R.right),
        onClick: X,
        "aria-hidden": !0,
        children: (0, l.jsx)(v.default, {
          direction: v.default.Directions.RIGHT,
          height: 12,
          width: 12
        })
      })]
    })
  })
}