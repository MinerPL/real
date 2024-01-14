"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
});
var a = n("37983");
n("884691");
var l = n("446674"),
  s = n("289867"),
  i = n("217513"),
  r = n("893980"),
  o = n("58351"),
  u = n("982108"),
  d = n("849483"),
  c = n("664336"),
  f = n("49111"),
  h = n("782340");

function p(e) {
  let {
    channel: t,
    showCall: n
  } = e, p = (0, l.useStateFromStores)([u.default], () => u.default.getSection(t.id, null == t ? void 0 : t.isDM())), m = (0, i.default)(t.getRecipientId()), E = (0, o.default)(), C = p === f.ChannelSections.PROFILE && !E;
  return (0, a.jsx)(c.Icon, {
    disabled: E || n,
    tooltip: E || n ? h.default.Messages.SHOW_USER_PROFILE_UNAVAILABLE : C ? h.default.Messages.HIDE_USER_PROFILE : h.default.Messages.SHOW_USER_PROFILE,
    icon: d.default,
    onClick: () => {
      (0, r.trackProfilePanelToggled)(m, !C), s.default.toggleProfilePanelSection()
    },
    selected: C && !E && !n
  })
}