"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var a = n("37983");
n("884691");
var l = n("446674"),
  s = n("77078"),
  i = n("531674"),
  r = n("619436"),
  o = n("625399"),
  u = n("513472"),
  d = n("47495"),
  c = n("233069"),
  f = n("305961");

function h(e) {
  let {
    channel: t,
    closePopout: n,
    onSelect: h,
    navId: E,
    label: m,
    location: p,
    includeGuildMute: g
  } = e, S = (0, r.useChannelNotificationRadioItems)(t), N = (0, o.useChannelNotificationSettingsItemInner)(t), _ = (0, l.useStateFromStores)([f.default], () => f.default.getGuild(t.guild_id)), I = (0, u.default)(_), T = (0, d.useShouldUseNewNotificationSystem)("ChannelNotificationSettingsPopoutMenu") && c.CHANNEL_ELIGIBLE_FOR_UNREAD_SETTING.has(t.type);
  return (0, a.jsxs)(s.Menu, {
    navId: E,
    onClose: n,
    "aria-label": m,
    onSelect: h,
    children: [(0, a.jsx)(s.MenuGroup, {
      children: (0, i.default)(t, p)
    }), g ? (0, a.jsx)(s.MenuGroup, {
      children: I
    }) : null, T ? N : (0, a.jsx)(s.MenuGroup, {
      children: S
    })]
  })
}