"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var a = n("37983");
n("884691");
var r = n("446674"),
  s = n("77078"),
  i = n("244201"),
  l = n("856343"),
  u = n("373469"),
  o = n("474571"),
  d = n("773336"),
  c = n("162236"),
  f = n("49111"),
  E = n("782340");

function h(e) {
  let {
    onClose: t
  } = e, n = (0, i.useAppContext)(), h = (0, r.useStateFromStores)([u.default], () => u.default.getCurrentUserActiveStream()), p = (0, l.default)(h, n);
  return (0, a.jsxs)(s.Menu, {
    onSelect: f.NOOP_NULL,
    navId: "manage-broadcast",
    onClose: t,
    "aria-label": E.default.Messages.SETTINGS,
    children: [d.isPlatformEmbedded && null != h ? (0, a.jsx)(s.MenuItem, {
      id: "stream-settings",
      label: E.default.Messages.SCREENSHARE_STREAM_QUALITY,
      children: p
    }) : null, (0, a.jsx)(s.MenuItem, {
      id: "broadcast-settings",
      label: E.default.Messages.BROADCAST_SETTINGS,
      icon: o.default,
      action: () => (0, c.openBroadcastingPrivacySettingsModal)()
    })]
  })
}