"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
});
var a = n("37983");
n("884691");
var r = n("446674"),
  s = n("77078"),
  l = n("244201"),
  i = n("856343"),
  u = n("373469"),
  o = n("474571"),
  d = n("773336"),
  c = n("162236"),
  f = n("49111"),
  h = n("782340");

function p(e) {
  let {
    onClose: t
  } = e, n = (0, l.useAppContext)(), p = (0, r.useStateFromStores)([u.default], () => u.default.getCurrentUserActiveStream()), E = (0, i.default)(p, n);
  return (0, a.jsxs)(s.Menu, {
    onSelect: f.NOOP_NULL,
    navId: "manage-broadcast",
    onClose: t,
    "aria-label": h.default.Messages.SETTINGS,
    children: [d.isPlatformEmbedded && null != p ? (0, a.jsx)(s.MenuItem, {
      id: "stream-settings",
      label: h.default.Messages.SCREENSHARE_STREAM_QUALITY,
      children: E
    }) : null, (0, a.jsx)(s.MenuItem, {
      id: "broadcast-settings",
      label: h.default.Messages.BROADCAST_SETTINGS,
      icon: o.default,
      action: () => (0, c.openBroadcastingPrivacySettingsModal)()
    })]
  })
}