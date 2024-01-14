"use strict";
s.r(t), s.d(t, {
  default: function() {
    return g
  }
});
var a = s("37983");
s("884691");
var n = s("414456"),
  l = s.n(n),
  i = s("446674"),
  r = s("77078"),
  o = s("419830"),
  d = s("648747"),
  u = s("380710"),
  c = s("843323"),
  E = s("461380"),
  _ = s("593195"),
  T = s("653274"),
  I = s("34654"),
  S = s("782340"),
  N = s("873536");

function g(e) {
  let {
    guild: t,
    scrollToQuestions: s
  } = e, n = (0, i.useStateFromStores)([T.default], () => T.default.editedDefaultChannelIds), l = (0, c.useFlattenedChannels)(t.id, n), r = l.filter(e => e.isCategory() || (0, d.canChannelBeDefault)(e.guild_id, e.id));
  return (0, a.jsxs)("div", {
    className: N.container,
    children: [(0, a.jsx)("div", {
      className: N.header,
      children: (0, a.jsx)(I.default, {
        guildId: t.id,
        scrollToQuestions: s
      })
    }), (0, a.jsxs)("div", {
      className: N.channelList,
      children: [(0, a.jsx)(L, {}), 0 === r.length && (0, a.jsx)(f, {}), (0, a.jsx)(A, {
        channels: r
      })]
    })]
  })
}

function f() {
  return (0, a.jsxs)("div", {
    className: N.emptyState,
    children: [(0, a.jsx)("div", {
      className: N.emptyStateIcon,
      children: (0, a.jsx)(_.default, {
        width: 24,
        height: 24
      })
    }), (0, a.jsx)(r.Text, {
      className: N.channelName,
      variant: "text-md/normal",
      color: "text-muted",
      children: S.default.Messages.DEFAULT_CHANNELS_PREVIEW_EMPTY_STATE
    })]
  })
}

function A(e) {
  let {
    channels: t
  } = e;
  return (0, a.jsx)(a.Fragment, {
    children: t.map(e => e.isCategory() ? (0, a.jsx)(m, {
      label: e.name
    }, e.id) : (0, a.jsx)(C, {
      channel: e
    }, e.id))
  })
}

function L() {
  return (0, a.jsx)("div", {
    className: N.divider
  })
}

function m(e) {
  let {
    label: t
  } = e;
  return (0, a.jsxs)("div", {
    className: N.category,
    children: [(0, a.jsx)(E.default, {
      className: N.caret,
      width: 12,
      height: 12,
      direction: E.default.Directions.DOWN
    }), (0, a.jsx)(r.Text, {
      variant: "text-xs/semibold",
      color: "text-muted",
      lineClamp: 1,
      children: t
    })]
  })
}

function C(e) {
  var t;
  let {
    channel: s
  } = e, n = (0, u.isChattableChannel)(s), i = null !== (t = (0, o.getChannelIconComponent)(s)) && void 0 !== t ? t : _.default;
  return (0, a.jsxs)("div", {
    className: N.channel,
    children: [(0, a.jsx)(i, {
      className: N.channelIcon,
      width: 16,
      height: 16
    }), (0, a.jsx)(r.Text, {
      className: N.channelName,
      variant: "text-md/normal",
      color: "text-muted",
      lineClamp: 1,
      children: s.name
    }), (0, a.jsx)("div", {
      className: l({
        [N.chattableIndicator]: n
      })
    })]
  })
}