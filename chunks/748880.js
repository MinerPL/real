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
    compact: r,
    missed: o,
    joinable: u,
    usernameHook: d,
    onClickJoinCall: c
  } = e, f = (0, l.default)(t), E = f.nick, _ = d(f), T = function(e) {
    let t = null != e.call ? e.call.duration : null;
    return null != t ? t.humanize() : null
  }(t);
  return o ? (0, s.jsx)(a.default, {
    icon: n("349745"),
    timestamp: t.timestamp,
    compact: r,
    children: null != T ? i.default.Messages.SYSTEM_MESSAGE_CALL_MISSED_WITH_DURATION_HOOK.format({
      username: E,
      usernameHook: _,
      callDuration: T
    }) : i.default.Messages.SYSTEM_MESSAGE_CALL_MISSED_HOOK.format({
      username: E,
      usernameHook: _
    })
  }) : (0, s.jsxs)(a.default, {
    icon: n("309541"),
    timestamp: t.timestamp,
    compact: r,
    children: [null != T ? i.default.Messages.SYSTEM_MESSAGE_CALL_STARTED_WITH_DURATION_HOOK.format({
      username: E,
      usernameHook: _,
      callDuration: T
    }) : i.default.Messages.SYSTEM_MESSAGE_CALL_STARTED_HOOK.format({
      username: E,
      usernameHook: _
    }), u ? (0, s.jsx)(a.default.Action, {
      onClick: c,
      children: i.default.Messages.SYSTEM_MESSAGE_JOIN_CALL
    }) : null]
  })
}