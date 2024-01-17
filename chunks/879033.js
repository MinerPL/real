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
  let t, {
      message: r,
      usernameHook: o,
      otherUser: u,
      otherUsernameHook: d,
      compact: c,
      channel: f
    } = e,
    E = (0, l.default)(r),
    _ = E.nick,
    T = o(E),
    I = (0, l.useNullableUserAuthor)(u, f);
  if (null != I && null != d) {
    let e = d(I);
    t = i.default.Messages.SYSTEM_MESSAGE_RECIPIENT_REMOVE_HOOK.format({
      username: _,
      usernameHook: T,
      otherUsername: I.nick,
      otherUsernameHook: e
    })
  } else t = i.default.Messages.SYSTEM_MESSAGE_RECIPIENT_REMOVE_SELF_HOOK.format({
    username: _,
    usernameHook: T
  });
  return (0, s.jsx)(a.default, {
    icon: n("226315"),
    timestamp: r.timestamp,
    compact: c,
    children: t
  })
}