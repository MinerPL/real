"use strict";
n.r(t), n.d(t, {
  default: function() {
    return L
  }
}), n("222007");
var l = n("37983"),
  a = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("907002"),
  o = n("446674"),
  u = n("77078"),
  d = n("913144"),
  c = n("267363"),
  f = n("716241"),
  E = n("739034"),
  h = n("393414"),
  _ = n("42203"),
  S = n("211248"),
  T = n("461380"),
  N = n("36694"),
  p = n("11539"),
  I = n("815978"),
  m = n("814744"),
  A = n("879165"),
  g = n("609023"),
  C = n("49111"),
  R = n("782340"),
  M = n("951244");
let O = a.memo(function(e) {
  let {
    channel: t,
    deleteChannel: n
  } = e, s = a.useRef(null), [
    [i, o], u
  ] = a.useState([0, 0]), d = t.deleted && i > 0;
  if (t.deleted && 0 === i && null != s.current) {
    let e = s.current.offsetHeight,
      t = s.current.offsetTop,
      n = s.current.parentElement.scrollTop,
      l = n > t ? e - (n - t) : e;
    u([e, e - l])
  }
  let {
    opacity: c,
    size: f
  } = (0, r.useSpring)({
    config: {
      clamp: !0,
      friction: 18,
      tension: 200
    },
    opacity: d ? 0 : 1,
    size: d ? 0 : 1,
    onRest: () => {
      n(t.channelId)
    }
  }), E = {
    opacity: c,
    height: f.to(e => d ? function(e, t, n) {
      return t + (e - t) * n
    }(i, o, e) : "auto")
  };
  return (0, l.jsx)(r.animated.div, {
    ref: s,
    style: E,
    children: (0, l.jsx)(v, {
      ...e
    })
  })
});
var L = O;
let v = a.memo(function(e) {
  let {
    channel: t,
    onJump: n,
    deleteChannel: s,
    toggle: i
  } = e, r = (0, o.useStateFromStores)([_.default], () => _.default.getChannel(t.channelId));
  if (a.useEffect(() => {
      null != r && t.isFullyLoaded && !t.hasError && !t.collapsed && "messages" === t.type && 0 === t.messages.length && d.default.wait(() => {
        (0, c.ack)(t.channelId, !0), s(t.channelId)
      })
    }), null == r || !t.hasLoadedAnything) return null;
  let E = (e, l) => {
    (0, f.trackWithMetadata)(C.AnalyticEvents.INBOX_CHANNEL_CLICKED, {
      channel_id: t.channelId,
      guild_id: t.guildId
    });
    let a = null != l ? l : t.oldestUnreadMessageId;
    (0, h.transitionTo)(C.Routes.CHANNEL(t.guildId, t.channelId, "forum" === t.type ? null : a)), n(e)
  };
  return (0, l.jsx)("div", {
    className: M.channel,
    children: (0, l.jsx)(u.HeadingLevel, {
      component: (0, l.jsxs)(m.default, {
        channel: r,
        gotoChannel: E,
        mentionCount: t.mentionCount,
        toggleCollapsed: i,
        channelState: t,
        children: [(0, l.jsx)(I.default, {
          channel: r
        }), (0, l.jsx)(D, {
          ...e
        }), "nsfw" === t.type ? null : (0, l.jsx)(y, {
          ...e
        })]
      }),
      children: t.collapsed ? null : "messages" === t.type ? (0, l.jsx)(g.default, {
        channel: t,
        channelRecord: r,
        gotoChannel: E
      }) : "forum" === t.type ? (0, l.jsx)(A.default, {
        channel: t,
        channelRecord: r,
        deleteChannel: s
      }) : null
    })
  })
});

function D(e) {
  let {
    channel: t,
    markChannelRead: n,
    markGuildRead: a,
    getNumUnreadChannels: s
  } = e, i = (0, E.default)(), r = i && null != t.guildId;
  return (0, l.jsx)(S.default, {
    className: M.markReadButton,
    tooltip: r ? R.default.Messages.MARK_GUILD_AS_READ : R.default.Messages.MARK_AS_READ,
    color: S.CircleIconButtonColors.TERTIARY,
    icon: r ? (0, l.jsx)(p.default, {
      width: 16,
      height: 16
    }) : (0, l.jsx)(N.default, {
      width: 16,
      height: 16
    }),
    onClick: function() {
      r && null != t.guildId ? a(t.guildId) : n(t), (0, f.trackWithMetadata)(C.AnalyticEvents.INBOX_CHANNEL_ACKED, {
        channel_id: t.channelId,
        guild_id: t.guildId,
        marked_all_channels_as_read: !1,
        num_unread_channels_remaining: s() - 1
      })
    }
  })
}

function y(e) {
  let {
    channel: t,
    toggle: n,
    getNumUnreadChannels: a
  } = e;

  function s() {
    n(t), (0, f.trackWithMetadata)(C.AnalyticEvents.INBOX_CHANNEL_COLLAPSED, {
      channel_id: t.channelId,
      guild_id: t.guildId,
      num_unread_channels_remaining: a(),
      is_now_collapsed: !t.collapsed
    })
  }
  return (0, l.jsx)(u.Tooltip, {
    text: R.default.Messages.COLLAPSE,
    children: e => (0, l.jsx)(u.Clickable, {
      ...e,
      className: i(M.collapseButton, {
        [M.collapsed]: t.collapsed
      }),
      onClick: s,
      children: (0, l.jsx)(T.default, {
        width: 16,
        height: 16
      })
    })
  })
}