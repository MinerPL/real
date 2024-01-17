"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var s = n("37983");
n("884691");
var l = n("574073"),
  a = n("985622"),
  i = n("304198"),
  r = n("980423"),
  o = n("782340");

function u(e) {
  var t;
  let {
    message: n,
    channel: u,
    playingActivity: d,
    onJoinStream: c,
    usernameHook: f,
    compact: E
  } = e, _ = (0, l.default)(n), T = null === (t = n.call) || void 0 === t ? void 0 : t.duration, I = f(_), m = o.default.Messages.SYSTEM_MESSAGE_GUILD_STREAM_ACTIVE.format({
    username: _.nick,
    activityName: null != d ? d.name : "unknown",
    onJoinStream: c,
    usernameHook: I
  });
  return null != T && (m = o.default.Messages.SYSTEM_MESSAGE_GUILD_STREAM_ENDED.format({
    username: _.nick,
    duration: T.humanize(),
    channelName: u.name,
    usernameHook: I
  })), (0, s.jsx)(i.default, {
    iconNode: null != T ? (0, s.jsx)(a.default, {
      width: 20,
      height: 20
    }) : (0, s.jsx)(r.default, {
      size: r.default.Sizes.SMALL
    }),
    timestamp: n.timestamp,
    compact: E,
    children: m
  })
}