"use strict";
n.r(t), n.d(t, {
  GuildScheduledEventInviteHeader: function() {
    return u
  }
});
var s = n("37983");
n("884691");
var a = n("77078"),
  l = n("419830"),
  r = n("400271"),
  i = n("839427");

function o(e) {
  let {
    channel: t
  } = e, n = (0, l.getSimpleChannelIconComponent)(t.type);
  return (0, s.jsxs)("div", {
    className: i.channelInfoContainer,
    children: [null != n ? (0, s.jsx)(n, {
      width: 20,
      height: 20
    }) : null, (0, s.jsx)(a.Text, {
      className: i.channelInfoText,
      color: "none",
      variant: "text-sm/semibold",
      children: t.name
    })]
  })
}

function u(e) {
  let {
    channel: t,
    guildScheduledEvent: n
  } = e;
  return (0, s.jsxs)("div", {
    className: i.container,
    children: [(0, s.jsx)(r.GuildEventStatus, {
      className: i.statusContainer,
      guildId: n.guild_id,
      guildEventId: n.id,
      eventPreview: n
    }), (0, s.jsx)(r.GuildEventDetails, {
      name: n.name,
      description: n.description,
      guildId: n.guild_id
    }), null != t && n.channel_id === t.id ? (0, s.jsx)(o, {
      channel: t
    }) : null]
  })
}