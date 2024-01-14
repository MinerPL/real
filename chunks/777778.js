"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
}), n("843762");
var l = n("37983"),
  a = n("884691"),
  s = n("446674"),
  i = n("266491"),
  r = n("274870"),
  o = n("42203"),
  u = n("336376"),
  d = n("945956"),
  c = n("543785");

function f() {
  (0, s.useStateFromStores)([o.default], () => o.default.getPrivateChannelsVersion());
  let e = o.default.getMutablePrivateChannels(),
    t = (0, s.useStateFromStoresArray)([u.default], () => u.default.getUnreadPrivateChannelIds()),
    {
      selectedVoiceGuildId: n,
      selectedVoiceChannelId: f
    } = (0, s.useStateFromStoresObject)([d.default], () => ({
      selectedVoiceGuildId: d.default.getGuildId(),
      selectedVoiceChannelId: d.default.getChannelId()
    })),
    h = t.map(t => {
      let n = e[t];
      return null == n || n.id === f || n.isBroadcastChannel() ? null : (0, l.jsx)(c.default, {
        channel: n
      }, n.id)
    }),
    C = null == n && null != f ? e[f] : null,
    p = (0, r.useIsBroadcastingGDM)(null == C ? void 0 : C.id);
  return null != C && !p && h.unshift((0, l.jsx)(c.default, {
    channel: C
  }, C.id)), (0, l.jsx)(i.default, {
    component: a.Fragment,
    children: h
  })
}