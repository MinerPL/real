"use strict";
n.r(t), n.d(t, {
  default: function() {
    return R
  }
}), n("222007");
var a = n("37983"),
  l = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("907002"),
  o = n("446674"),
  u = n("77078"),
  d = n("913144"),
  c = n("267363"),
  f = n("716241"),
  h = n("739034"),
  E = n("393414"),
  m = n("42203"),
  p = n("211248"),
  g = n("461380"),
  S = n("36694"),
  N = n("11539"),
  _ = n("815978"),
  I = n("814744"),
  T = n("879165"),
  C = n("609023"),
  A = n("49111"),
  x = n("782340"),
  v = n("951244");
let M = l.memo(function(e) {
  let {
    channel: t,
    deleteChannel: n
  } = e, s = l.useRef(null), [
    [i, o], u
  ] = l.useState([0, 0]), d = t.deleted && i > 0;
  if (t.deleted && 0 === i && null != s.current) {
    let e = s.current.offsetHeight,
      t = s.current.offsetTop,
      n = s.current.parentElement.scrollTop,
      a = n > t ? e - (n - t) : e;
    u([e, e - a])
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
  }), h = {
    opacity: c,
    height: f.to(e => d ? function(e, t, n) {
      return t + (e - t) * n
    }(i, o, e) : "auto")
  };
  return (0, a.jsx)(r.animated.div, {
    ref: s,
    style: h,
    children: (0, a.jsx)(L, {
      ...e
    })
  })
});
var R = M;
let L = l.memo(function(e) {
  let {
    channel: t,
    onJump: n,
    deleteChannel: s,
    toggle: i
  } = e, r = (0, o.useStateFromStores)([m.default], () => m.default.getChannel(t.channelId));
  if (l.useEffect(() => {
      null != r && t.isFullyLoaded && !t.hasError && !t.collapsed && "messages" === t.type && 0 === t.messages.length && d.default.wait(() => {
        (0, c.ack)(t.channelId, !0), s(t.channelId)
      })
    }), null == r || !t.hasLoadedAnything) return null;
  let h = (e, a) => {
    (0, f.trackWithMetadata)(A.AnalyticEvents.INBOX_CHANNEL_CLICKED, {
      channel_id: t.channelId,
      guild_id: t.guildId
    });
    let l = null != a ? a : t.oldestUnreadMessageId;
    (0, E.transitionTo)(A.Routes.CHANNEL(t.guildId, t.channelId, "forum" === t.type ? null : l)), n(e)
  };
  return (0, a.jsx)("div", {
    className: v.channel,
    children: (0, a.jsx)(u.HeadingLevel, {
      component: (0, a.jsxs)(I.default, {
        channel: r,
        gotoChannel: h,
        mentionCount: t.mentionCount,
        toggleCollapsed: i,
        channelState: t,
        children: [(0, a.jsx)(_.default, {
          channel: r
        }), (0, a.jsx)(O, {
          ...e
        }), "nsfw" === t.type ? null : (0, a.jsx)(b, {
          ...e
        })]
      }),
      children: t.collapsed ? null : "messages" === t.type ? (0, a.jsx)(C.default, {
        channel: t,
        channelRecord: r,
        gotoChannel: h
      }) : "forum" === t.type ? (0, a.jsx)(T.default, {
        channel: t,
        channelRecord: r,
        deleteChannel: s
      }) : null
    })
  })
});

function O(e) {
  let {
    channel: t,
    markChannelRead: n,
    markGuildRead: l,
    getNumUnreadChannels: s
  } = e, i = (0, h.default)(), r = i && null != t.guildId;
  return (0, a.jsx)(p.default, {
    className: v.markReadButton,
    tooltip: r ? x.default.Messages.MARK_GUILD_AS_READ : x.default.Messages.MARK_AS_READ,
    color: p.CircleIconButtonColors.TERTIARY,
    icon: r ? (0, a.jsx)(N.default, {
      width: 16,
      height: 16
    }) : (0, a.jsx)(S.default, {
      width: 16,
      height: 16
    }),
    onClick: function() {
      r && null != t.guildId ? l(t.guildId) : n(t), (0, f.trackWithMetadata)(A.AnalyticEvents.INBOX_CHANNEL_ACKED, {
        channel_id: t.channelId,
        guild_id: t.guildId,
        marked_all_channels_as_read: !1,
        num_unread_channels_remaining: s() - 1
      })
    }
  })
}

function b(e) {
  let {
    channel: t,
    toggle: n,
    getNumUnreadChannels: l
  } = e;

  function s() {
    n(t), (0, f.trackWithMetadata)(A.AnalyticEvents.INBOX_CHANNEL_COLLAPSED, {
      channel_id: t.channelId,
      guild_id: t.guildId,
      num_unread_channels_remaining: l(),
      is_now_collapsed: !t.collapsed
    })
  }
  return (0, a.jsx)(u.Tooltip, {
    text: x.default.Messages.COLLAPSE,
    children: e => (0, a.jsx)(u.Clickable, {
      ...e,
      className: i(v.collapseButton, {
        [v.collapsed]: t.collapsed
      }),
      onClick: s,
      children: (0, a.jsx)(g.default, {
        width: 16,
        height: 16
      })
    })
  })
}