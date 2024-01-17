"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var s = n("37983");
n("884691");
var l = n("574073"),
  a = n("304198"),
  i = n("782340"),
  r = n("902896");

function o(e) {
  let {
    message: t,
    usernameHook: o,
    compact: u,
    isForumPost: d
  } = e, c = (0, l.default)(t), f = o(c);
  return (0, s.jsx)(a.default, {
    compact: u,
    className: r.channelNameChange,
    icon: n("544484"),
    timestamp: t.timestamp,
    children: (d ? i.default.Messages.SYSTEM_MESSAGE_FORUM_POST_TITLE_CHANGE2 : i.default.Messages.SYSTEM_MESSAGE_CHANNEL_NAME_CHANGE2).format({
      username: c.nick,
      usernameHook: f,
      channelName: t.content
    })
  })
}