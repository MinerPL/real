"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
});
var a = n("37983");
n("884691");
var s = n("907002"),
  i = n("446674"),
  l = n("139321"),
  r = n("923959"),
  o = n("957255"),
  u = n("119153"),
  d = n("602632"),
  c = n("723872"),
  f = n("49111");

function E(e) {
  let {
    channel: t,
    guild: n
  } = e, r = (0, i.useStateFromStores)([l.HotspotStore], () => l.HotspotStore.hasHotspot(l.HotspotLocations.HUB_STUDY_ROOM_NOTICE)), o = (0, c.useConnectedInCurrentHub)(t.guild_id), f = (0, s.useSpring)({
    maxHeight: o ? 0 : 300,
    overflow: "hidden",
    delay: 400
  });
  return (0, a.jsx)(s.animated.div, {
    style: f,
    children: r ? (0, a.jsx)(u.default, {
      channel: t,
      guild: n
    }) : (0, a.jsx)(d.default, {
      name: "\uD83D\uDCDA☕ ".concat(t.name),
      channel: t
    })
  })
}
var _ = function(e) {
  let {
    guild: t
  } = e, n = (0, i.useStateFromStores)([r.default], () => {
    let e = r.default.getChannels(t.id),
      n = e[r.GUILD_VOCAL_CHANNELS_KEY];
    return n[0]
  }), s = (0, i.useStateFromStores)([o.default], () => null != n && o.default.can(f.Permissions.CONNECT, n.channel));
  return t.hasFeature(f.GuildFeatures.HUB) && null != n && s ? (0, a.jsx)(E, {
    channel: n.channel,
    guild: t
  }) : null
}