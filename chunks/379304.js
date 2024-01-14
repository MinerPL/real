"use strict";
n.r(t), n.d(t, {
  default: function() {
    return v
  }
});
var l = n("37983");
n("884691");
var a = n("65597"),
  u = n("77078"),
  r = n("926994"),
  i = n("495194"),
  d = n("945956"),
  s = n("800762"),
  o = n("889486"),
  c = n("261552"),
  f = n("742898"),
  E = n("424024"),
  C = n("49111"),
  S = n("782340");

function v(e) {
  let t = (0, a.default)([d.default], () => d.default.getChannelId() === e.id),
    v = (0, c.default)(),
    h = (null == v ? void 0 : v.channelId) === e.id,
    _ = (0, i.useIsVoiceChannelLocked)(e) && !e.isPrivate(),
    N = (0, i.default)(e),
    T = (0, a.default)([s.default], () => s.default.isInChannel(e.id)),
    g = !T && N || _,
    I = (0, f.default)();
  if (!h && 0 === I.length) return null;
  let m = t => {
    if (!t.twoWayLink || t.revoked) {
      (0, r.default)(t.type, "Console Transfer Item");
      return
    }
    t.type === C.PlatformTypes.XBOX ? (0, u.openModalLazy)(async () => {
      let {
        default: t
      } = await n.el("613895").then(n.bind(n, "613895"));
      return n => (0, l.jsx)(t, {
        ...n,
        channel: e
      })
    }) : (t.type === C.PlatformTypes.PLAYSTATION || t.type === C.PlatformTypes.PLAYSTATION_STAGING) && (0, u.openModalLazy)(async () => {
      let {
        default: a
      } = await n.el("962512").then(n.bind(n, "962512"));
      return n => (0, l.jsx)(a, {
        ...n,
        platform: t.type,
        channel: e
      })
    })
  };
  return (0, l.jsx)(l.Fragment, {
    children: h ? (0, l.jsx)(u.MenuItem, {
      label: S.default.Messages.TRANSFER_VOICE_TO_DEVICE,
      id: "handoff",
      action: () => {
        (0, o.handoffRemote)(v)
      },
      icon: (0, E.default)(void 0),
      disabled: g
    }) : I.map(e => (0, l.jsx)(u.MenuItem, {
      id: "transfer-".concat(e.type, "-").concat(e.id),
      label: function(e, t) {
        if (e === C.PlatformTypes.XBOX) return t ? S.default.Messages.TRANSFER_VOICE_TO_XBOX : S.default.Messages.JOIN_ON_XBOX;
        if (e === C.PlatformTypes.PLAYSTATION) return t ? S.default.Messages.CONSOLE_PLAYSTATION_TRANSFER_VOICE : S.default.Messages.CONSOLE_PLAYSTATION_JOIN_VOICE;
        if (e === C.PlatformTypes.PLAYSTATION_STAGING) return t ? S.default.Messages.CONSOLE_PLAYSTATION_STAGING_TRANSFER_VOICE : S.default.Messages.CONSOLE_PLAYSTATION_STAGING_JOIN_VOICE
      }(e.type, t),
      action: () => m(e),
      icon: (0, E.default)(e.type),
      disabled: g
    }, e.id))
  })
}