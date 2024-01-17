"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var s = n("37983");
n("884691");
var l = n("574073"),
  a = n("304198"),
  i = n("782340");

function r(e) {
  let {
    message: t,
    usernameHook: r,
    compact: o
  } = e, u = (0, l.default)(t), d = r(u);
  return (0, s.jsx)(a.default, {
    icon: n("544484"),
    timestamp: t.timestamp,
    compact: o,
    children: i.default.Messages.SYSTEM_MESSAGE_CHANNEL_ICON_CHANGE_HOOK.format({
      username: u.nick,
      usernameHook: d
    })
  })
}