"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
}), n("222007");
var i = n("37983");
n("884691");
var a = n("446674"),
  l = n("762993"),
  s = n("570413"),
  o = n("350501"),
  r = n("42203"),
  d = n("18494"),
  u = n("360782"),
  c = n("846325"),
  f = n("739840");

function h() {
  let [e, t] = (0, a.useStateFromStoresArray)([l.default], () => [l.default.enabled, l.default.keepOpen]), n = (0, a.useStateFromStores)([d.default], () => d.default.getVoiceChannelId()), h = (0, a.useStateFromStores)([r.default], () => r.default.getChannel(n), [n]), p = null == h ? void 0 : h.getGuildId();
  return e && null != h ? (0, i.jsx)("div", {
    className: f.widget,
    children: (0, i.jsx)(o.default, {
      width: c.SoundboardWheelSize.width,
      height: c.SoundboardWheelSize.height,
      guildId: p,
      channel: h,
      keepOpen: t,
      onClose: function() {
        let e = (0, u.default)();
        null != e && (0, s.closeSoundboardInOverlay)(e)
      },
      analyticsSource: "overlay"
    })
  }) : null
}