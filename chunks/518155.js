"use strict";
s.r(t), s.d(t, {
  default: function() {
    return c
  }
});
var a = s("37983");
s("884691");
var n = s("281071"),
  l = s("77078"),
  i = s("83900"),
  d = s("599110"),
  r = s("306160"),
  u = s("49111"),
  o = s("782340");

function c(e, t) {
  return r.SUPPORTS_COPY && e.type !== u.MessageTypes.GUILD_INVITE_REMINDER ? (0, a.jsx)(l.MenuItem, {
    id: "copy-link",
    label: o.default.Messages.COPY_MESSAGE_LINK,
    icon: i.default,
    action: () => {
      (0, n.copy)("".concat(location.protocol, "//").concat(location.host).concat(u.Routes.CHANNEL(t.guild_id, t.id, e.id))), d.default.track(u.AnalyticEvents.MESSAGE_LINK_COPIED, {
        message_id: e.id,
        channel: e.channel_id
      })
    }
  }) : null
}