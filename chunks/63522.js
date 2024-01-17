"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var s = n("37983");
n("884691");
var l = n("574073"),
  a = n("232259"),
  i = n("8161"),
  r = n("304198"),
  o = n("509425"),
  u = n("121135");

function d(e) {
  let {
    message: t,
    channel: n,
    compact: d
  } = e, c = (0, l.default)(t), f = t.application, E = (0, a.useUsernameHook)(t.author, n.id, n.guild_id);
  return (0, s.jsx)(r.default, {
    iconNode: (0, s.jsx)(i.default, {
      className: u.ticketIcon
    }),
    timestamp: t.timestamp,
    compact: d,
    children: (0, o.getApplicationSubscriptionSystemMessageContent)({
      application: f,
      username: c.nick,
      usernameHook: E(c)
    })
  })
}