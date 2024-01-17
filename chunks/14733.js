"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var s = n("37983");
n("884691");
var l = n("574073"),
  a = n("711486"),
  i = n("304198"),
  r = n("782340"),
  o = n("896393");

function u(e) {
  let {
    message: t,
    compact: n,
    usernameHook: u
  } = e, d = (0, l.default)(t), c = u(d), f = r.default.Messages.SYSTEM_MESSAGE_STAGE_RAISE_HAND_HOOK.format({
    username: d.nick,
    usernameHook: c
  });
  return (0, s.jsx)(i.default, {
    className: o.stageSystemMessage,
    iconNode: (0, s.jsx)(a.default, {
      height: 24,
      width: 24
    }),
    iconContainerClassName: o.iconContainer,
    timestamp: t.timestamp,
    compact: n,
    children: f
  })
}