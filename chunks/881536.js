"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
}), n("222007");
var s = n("37983");
n("884691");
var l = n("414456"),
  a = n.n(l),
  i = n("77078"),
  r = n("367376"),
  o = n("560176"),
  u = n("304198"),
  d = n("388142"),
  c = n("49111"),
  f = n("782340"),
  E = n("19676");

function _(e) {
  let {
    message: t,
    channel: l,
    compact: r
  } = e, o = null != t.embeds && t.embeds.length > 0;
  return (0, s.jsxs)("div", {
    children: [(0, s.jsx)(u.default, {
      className: a(E.mainContainer, {
        [E.compact]: r
      }),
      icon: n("127067"),
      compact: r,
      children: (0, s.jsx)("div", {
        className: a(E.content, {
          [E.compact]: r
        }),
        children: (0, s.jsx)("div", {
          className: a(E.messageContent, {
            [E.compact]: r
          }),
          children: t.content
        })
      })
    }), (0, s.jsx)("div", {
      className: a(E.embedContent, {
        [E.compact]: r
      }),
      children: (0, s.jsx)(T, {
        message: t
      })
    }), (0, s.jsx)("div", {
      className: E.actions,
      children: (0, s.jsx)(i.Button, {
        color: i.Button.Colors.PRIMARY,
        onClick: () => {
          o ? (0, d.updateGamingStats)(t) : (0, d.sendGamingStatsMessage)(l.guild_id, l.id, t.id)
        },
        children: f.default.Messages.SYSTEM_MESSAGE_GET_GAMING_STATS
      })
    })]
  })
}

function T(e) {
  var t;
  let {
    message: n
  } = e, [l] = null !== (t = n.embeds) && void 0 !== t ? t : [];
  return null == l ? null : (0, s.jsx)(o.default, {
    className: E.embed,
    embed: l,
    renderTitle: (e, t) => r.default.parseEmbedTitle(t, !0, {
      channelId: n.channel_id
    }),
    renderDescription: (e, t, s) => r.default.parse(t, !0, {
      channelId: n.channel_id
    }),
    autoPlayGif: !1,
    renderImageComponent: e => (0, c.NOOP_NULL)(),
    renderVideoComponent: e => (0, c.NOOP_NULL)(),
    renderLinkComponent: e => (0, c.NOOP_NULL)()
  })
}