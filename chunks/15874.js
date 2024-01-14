"use strict";
l.r(t), l.d(t, {
  default: function() {
    return f
  }
});
var n = l("37983");
l("884691");
var a = l("446674"),
  s = l("987317"),
  i = l("957255"),
  r = l("945956"),
  o = l("599110"),
  u = l("295999"),
  d = l("49111"),
  c = l("782340");

function f(e) {
  let {
    className: t,
    color: l,
    look: f,
    hangStatusChannel: m
  } = e, p = (0, a.useStateFromStores)([r.default], () => r.default.getChannelId() === m.id);
  return (0, n.jsx)(n.Fragment, {
    children: (0, n.jsx)(u.default, {
      className: t,
      disabled: p,
      onClick: () => {
        i.default.can(d.Permissions.CONNECT, m), s.default.selectVoiceChannel(m.id), o.default.track(d.AnalyticEvents.HANG_STATUS_CTA_CLICKED, {
          source: "UserProfilePopout",
          guild_id: m.guild_id,
          channel_id: m.id
        })
      },
      color: l,
      look: f,
      fullWidth: !0,
      children: c.default.Messages.JOIN
    }, "join-hang")
  })
}