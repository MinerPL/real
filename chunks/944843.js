"use strict";
n.r(t), n.d(t, {
  default: function() {
    return A
  }
});
var l = n("37983"),
  a = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("907002"),
  o = n("446674"),
  u = n("669491"),
  d = n("77078"),
  c = n("206230"),
  f = n("149362"),
  h = n("471671"),
  C = n("533403"),
  p = n("837899"),
  m = n("425190"),
  E = n("368121"),
  g = n("404008"),
  I = n("268760"),
  S = n("782340"),
  _ = n("326944");
let N = {
  friction: 30,
  tension: 300
};

function T(e) {
  var t;
  let {
    guildChannels: n,
    jumpToVoiceChannels: s
  } = e, r = n.getCategoryFromSection(n.voiceChannelsSectionNumber), o = (0, f.default)(n.id), c = a.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), s()
  }, [s]), h = null !== (t = null == r ? void 0 : r.getChannelRecords()) && void 0 !== t ? t : [], p = (0, g.computeSummarizedVoiceUsers)({
    channels: h,
    selectedChannelId: null,
    selectedVoiceChannelId: null,
    voiceStates: o
  });
  return (0, l.jsxs)(d.Clickable, {
    className: i(_.bar),
    onClick: c,
    children: [(0, l.jsx)(E.default, {
      className: _.voiceChannelsIcon,
      width: 14,
      height: 14,
      color: u.default.unsafe_rawColors.GREEN_330.css
    }), (0, l.jsx)(d.Text, {
      variant: "text-xs/semibold",
      color: "text-positive",
      className: _.barText,
      children: S.default.Messages.VOICE_CHANNEL_BAR_ACTIVE.format({
        count: p.length
      })
    }), (0, l.jsx)(C.default, {
      guildId: n.id,
      className: _.voiceChannelsUsers,
      users: p.slice(0, 4),
      renderMoreUsers: () => null,
      max: 4,
      size: d.AvatarSizes.SIZE_16
    })]
  })
}

function A(e) {
  let {
    position: t,
    guildChannels: n,
    guildChannelsVersion: s,
    jumpToVoiceChannels: u,
    jumpToChannel: f
  } = e, {
    bottomBar: C,
    topBar: E
  } = (0, o.useStateFromStoresObject)([I.default], () => I.default.getUnreadStateForGuildId(n.id)), g = (0, o.useStateFromStores)([c.default], () => c.default.useReducedMotion), A = (0, o.useStateFromStores)([h.default], () => h.default.isFocused()), {
    mode: L,
    mentionCount: v,
    targetChannelId: x
  } = "bottom" === t ? C : E, R = L === I.UnreadBarMode.HIDDEN, M = (0, r.useSpring)({
    to: {
      transform: R ? "bottom" === t ? "translateY(180%)" : "translateY(-180%)" : "translateY(0%)"
    },
    config: N,
    immediate: g || !A
  }), O = a.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), null != x && f(x)
  }, [f, x]);
  return (0, l.jsx)("div", {
    className: i(_.container, {
      [_.top]: "top" === t,
      [_.bottom]: "bottom" === t
    }),
    children: (0, l.jsx)(r.animated.div, {
      className: _.containerPadding,
      style: M,
      "aria-hidden": R,
      children: L === I.UnreadBarMode.HIDDEN ? (0, l.jsx)("div", {
        className: i(_.bar, _.emptyBar)
      }) : L === I.UnreadBarMode.UNREAD ? (0, l.jsxs)(d.Clickable, {
        className: _.bar,
        onClick: O,
        children: ["bottom" === t ? (0, l.jsx)(p.default, {
          className: _.unreadIcon,
          height: 14,
          width: 14
        }) : (0, l.jsx)(m.default, {
          className: _.unreadIcon,
          height: 14,
          width: 14
        }), (0, l.jsx)(d.Text, {
          variant: "text-xs/semibold",
          color: "interactive-normal",
          className: _.barText,
          children: S.default.Messages.NEW_UNREADS
        })]
      }) : L === I.UnreadBarMode.MENTIONS ? (0, l.jsx)(d.Clickable, {
        className: i(_.bar, _.mentionsBar),
        onClick: O,
        children: (0, l.jsx)(d.Text, {
          variant: "text-xs/semibold",
          color: "status-danger-text",
          className: _.barText,
          children: S.default.Messages.NEW_MENTIONS_COUNT.format({
            count: v
          })
        })
      }) : L === I.UnreadBarMode.VOICE_CHANNELS ? (0, l.jsx)(T, {
        jumpToVoiceChannels: u,
        guildChannels: n,
        guildChannelsVersion: s
      }) : void 0
    })
  })
}