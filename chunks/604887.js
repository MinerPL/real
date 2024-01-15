"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
});
var a = n("37983");
n("884691");
var i = n("446674"),
  s = n("155823"),
  u = n("987317"),
  l = n("305122"),
  d = n("675961"),
  o = n("957255"),
  r = n("18494"),
  c = n("49111"),
  f = n("782340");

function _(e, t) {
  let n = (0, i.useStateFromStores)([o.default], () => o.default.can(c.Permissions.CONNECT, e), [e]),
    _ = (0, i.useStateFromStores)([r.default], () => r.default.getVoiceChannelId()),
    p = (0, d.useCustomJoinSound)(t),
    E = _ === e.id;
  return e.isGuildVocal() && n && null != p && !E ? (0, a.jsx)(s.MenuItem, {
    id: "join-muted-custom-join-sound",
    label: f.default.Messages.VOICE_CHANNEL_MUTED_CUSTOM_JOIN_SOUND,
    action: () => {
      (0, l.muteCustomJoinSound)(e.id), u.default.selectVoiceChannel(e.id)
    }
  }) : null
}