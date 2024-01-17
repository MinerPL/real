"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
});
var s = n("37983"),
  l = n("884691"),
  a = n("987317"),
  i = n("722525"),
  r = n("974755"),
  o = n("18494"),
  u = n("162771"),
  d = n("174622"),
  c = n("599110"),
  f = n("49111"),
  E = n("782340"),
  _ = n("18978");

function T(e) {
  var t;
  let {
    guild: n,
    channel: T,
    messageData: I
  } = e, m = u.default.getGuildId(), N = o.default.getChannelId(m), p = l.useCallback(() => {
    var e;
    c.default.track(f.AnalyticEvents.CHANNEL_LINK_PREVIEW_JOINED, {
      author_id: null === (e = I.author) || void 0 === e ? void 0 : e.id,
      link_guild_id: n.id,
      link_channel_id: T.id,
      link_channel_type: T.type,
      guild_id: m,
      channel_id: N
    }), (0, i.transitionToChannel)(n.id, T.id), a.default.selectVoiceChannel(T.id)
  }, [null === (t = I.author) || void 0 === t ? void 0 : t.id, n.id, T.id, T.type, m, N]), S = (0, s.jsx)(d.default.Channel, {
    channel: T
  });
  return (0, s.jsx)(d.default, {
    children: (0, s.jsxs)(d.default.Body, {
      children: [(0, s.jsxs)("div", {
        className: _.headerLine,
        children: [(0, s.jsx)(d.default.Icon, {
          guild: n
        }), (0, s.jsx)(d.default.Info, {
          title: S,
          onClick: p,
          children: (0, s.jsxs)("span", {
            className: _.infoTitle,
            children: [E.default.Messages.INVITE_BUTTON_BODY_IN_GUILD.format({
              guildName: n.name
            }), (0, s.jsx)("span", {
              className: _.infoBadge,
              children: (0, s.jsx)(r.default, {
                guild: n,
                isBannerVisible: !1
              })
            })]
          })
        })]
      }), (0, s.jsx)(d.default.Button, {
        onClick: p,
        color: d.default.Button.Colors.GREEN,
        children: T.isGuildStageVoice() ? E.default.Messages.STAGE_CHANNEL_JOIN : E.default.Messages.JOIN_VOICE
      })]
    })
  })
}