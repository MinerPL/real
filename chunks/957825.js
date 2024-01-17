"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var l = n("37983");
n("884691");
var a = n("446674"),
  s = n("77078"),
  i = n("531674"),
  r = n("619436"),
  o = n("625399"),
  u = n("513472"),
  d = n("47495"),
  c = n("233069"),
  f = n("305961");

function E(e) {
  let {
    channel: t,
    closePopout: n,
    onSelect: E,
    navId: h,
    label: _,
    location: S,
    includeGuildMute: T
  } = e, N = (0, r.useChannelNotificationRadioItems)(t), p = (0, o.useChannelNotificationSettingsItemInner)(t), I = (0, a.useStateFromStores)([f.default], () => f.default.getGuild(t.guild_id)), m = (0, u.default)(I), A = (0, d.useShouldUseNewNotificationSystem)("ChannelNotificationSettingsPopoutMenu") && c.CHANNEL_ELIGIBLE_FOR_UNREAD_SETTING.has(t.type);
  return (0, l.jsxs)(s.Menu, {
    navId: h,
    onClose: n,
    "aria-label": _,
    onSelect: E,
    children: [(0, l.jsx)(s.MenuGroup, {
      children: (0, i.default)(t, S)
    }), T ? (0, l.jsx)(s.MenuGroup, {
      children: m
    }) : null, A ? p : (0, l.jsx)(s.MenuGroup, {
      children: N
    })]
  })
}