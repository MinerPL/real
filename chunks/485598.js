"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var a = n("37983");
n("884691");
var i = n("77078"),
  l = n("957255"),
  s = n("85175"),
  u = n("363396"),
  r = n("49111"),
  d = n("782340");

function o(e, t) {
  let n = t.getGuildId(),
    o = null != n && (e.type === r.MessageTypes.USER_JOIN || e.type === r.MessageTypes.GUILD_INVITE_REMINDER) && l.default.canWithPartialContext(r.Permissions.MANAGE_GUILD, {
      guildId: n
    });
  return o ? (0, a.jsx)(i.MenuItem, {
    id: "configure",
    label: d.default.Messages.CONFIGURE,
    icon: s.default,
    action: () => (0, u.configureJoin)(t)
  }) : null
}