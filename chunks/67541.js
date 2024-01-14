"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
});
var a = n("37983"),
  s = n("884691"),
  l = n("987317"),
  i = n("722525"),
  r = n("974755"),
  o = n("18494"),
  u = n("162771"),
  d = n("174622"),
  c = n("599110"),
  f = n("49111"),
  m = n("782340"),
  E = n("18978");

function _(e) {
  var t;
  let {
    guild: n,
    channel: _,
    messageData: h
  } = e, p = u.default.getGuildId(), I = o.default.getChannelId(p), T = s.useCallback(() => {
    var e;
    c.default.track(f.AnalyticEvents.CHANNEL_LINK_PREVIEW_JOINED, {
      author_id: null === (e = h.author) || void 0 === e ? void 0 : e.id,
      link_guild_id: n.id,
      link_channel_id: _.id,
      link_channel_type: _.type,
      guild_id: p,
      channel_id: I
    }), (0, i.transitionToChannel)(n.id, _.id), l.default.selectVoiceChannel(_.id)
  }, [null === (t = h.author) || void 0 === t ? void 0 : t.id, n.id, _.id, _.type, p, I]), g = (0, a.jsx)(d.default.Channel, {
    channel: _
  });
  return (0, a.jsx)(d.default, {
    children: (0, a.jsxs)(d.default.Body, {
      children: [(0, a.jsxs)("div", {
        className: E.headerLine,
        children: [(0, a.jsx)(d.default.Icon, {
          guild: n
        }), (0, a.jsx)(d.default.Info, {
          title: g,
          onClick: T,
          children: (0, a.jsxs)("span", {
            className: E.infoTitle,
            children: [m.default.Messages.INVITE_BUTTON_BODY_IN_GUILD.format({
              guildName: n.name
            }), (0, a.jsx)("span", {
              className: E.infoBadge,
              children: (0, a.jsx)(r.default, {
                guild: n,
                isBannerVisible: !1
              })
            })]
          })
        })]
      }), (0, a.jsx)(d.default.Button, {
        onClick: T,
        color: d.default.Button.Colors.GREEN,
        children: _.isGuildStageVoice() ? m.default.Messages.STAGE_CHANNEL_JOIN : m.default.Messages.JOIN_VOICE
      })]
    })
  })
}