"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var s = n("37983");
n("884691");
var l = n("446674"),
  a = n("574073"),
  i = n("42203"),
  r = n("959097"),
  o = n("304198"),
  u = n("782340"),
  d = n("829583");

function c(e) {
  var t;
  let {
    message: n,
    compact: c,
    usernameHook: f,
    onClickThread: E,
    onClickViewThreads: _,
    onContextMenuThread: T
  } = e, I = (0, a.default)(n), m = f(I), N = (0, l.useStateFromStores)([i.default], () => {
    var e;
    return i.default.getChannel(null === (e = n.messageReference) || void 0 === e ? void 0 : e.channel_id)
  }), p = u.default.Messages.SYSTEM_MESSAGE_THREAD_CREATED.format({
    actorName: I.nick,
    actorHook: m,
    threadName: null !== (t = null == N ? void 0 : N.name) && void 0 !== t ? t : n.content,
    threadOnClick: {
      onClick: E,
      onContextMenu: T
    },
    viewThreadsOnClick: _
  });
  return (0, s.jsx)(o.default, {
    iconNode: (0, s.jsx)(r.default, {
      className: d.icon
    }),
    timestamp: n.timestamp,
    compact: c,
    children: p
  })
}