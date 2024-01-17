"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var s = n("37983");
n("884691");
var l = n("669491"),
  a = n("574073"),
  i = n("228427"),
  r = n("304198"),
  o = n("782340"),
  u = n("896393");

function d(e) {
  let {
    message: t,
    compact: n,
    usernameHook: d
  } = e, c = (0, a.default)(t), f = d(c), E = o.default.Messages.SYSTEM_MESSAGE_STAGE_START_HOOK.format({
    username: c.nick,
    usernameHook: f,
    topic: t.content
  });
  return (0, s.jsx)(r.default, {
    className: u.stageSystemMessage,
    iconNode: (0, s.jsx)(i.default, {
      height: 24,
      width: 24,
      color: l.default.unsafe_rawColors.GREEN_360.css
    }),
    iconContainerClassName: u.iconContainer,
    timestamp: t.timestamp,
    compact: n,
    children: E
  })
}