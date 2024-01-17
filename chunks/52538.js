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
    otherUsername: r,
    usernameHook: o,
    otherUsernameHook: u,
    compact: d
  } = e, {
    nick: c
  } = (0, l.default)(t), f = o(), E = u(), _ = i.default.Messages.SYSTEM_MESSAGE_RECIPIENT_ADD_HOOK.format({
    username: c,
    usernameHook: f,
    otherUsername: r,
    otherUsernameHook: E
  });
  return (0, s.jsx)(a.default, {
    icon: n("127067"),
    timestamp: t.timestamp,
    compact: d,
    children: _
  })
}