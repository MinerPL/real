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
    channel: r,
    targetUser: o,
    actorUsernameHook: u,
    targetUsernameHook: d,
    compact: c
  } = e, f = (0, l.default)(t), E = (0, l.useNullableUserAuthor)(o, r), _ = u(f), T = d(null != E ? E : void 0), I = i.default.Messages.SYSTEM_MESSAGE_THREAD_MEMBER_ADD.format({
    actorName: f.nick,
    actorHook: _,
    targetName: null == E ? void 0 : E.nick,
    targetHook: T
  });
  return (0, s.jsx)(a.default, {
    icon: n("127067"),
    timestamp: t.timestamp,
    compact: c,
    children: I
  })
}