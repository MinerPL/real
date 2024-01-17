"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var s = n("37983");
n("884691");
var l = n("77078"),
  a = n("687521"),
  i = n("574073"),
  r = n("304198"),
  o = n("782340");

function u(e) {
  let {
    children: t,
    messageReference: n
  } = e;
  if (null == n) return (0, s.jsx)(l.Anchor, {
    children: t
  });
  let {
    guild_id: i,
    channel_id: r,
    message_id: o
  } = n;
  return null == i ? (0, s.jsx)(l.Anchor, {
    children: t
  }) : (0, s.jsx)(a.default, {
    guildId: i,
    channelId: r,
    messageId: o,
    children: e => {
      let {
        "aria-controls": n,
        "aria-expanded": a,
        ...i
      } = e;
      return (0, s.jsx)(l.Anchor, {
        ...i,
        children: t
      })
    }
  })
}

function d(e) {
  let {
    usernameHook: t,
    message: l,
    compact: a
  } = e, {
    content: d,
    timestamp: c,
    messageReference: f
  } = l, E = (0, i.default)(l), _ = t(E), T = o.default.Messages.SYSTEM_MESSAGE_CHANNEL_FOLLOW_ADD_HOOK.format({
    username: E.nick,
    usernameHook: _,
    webhookName: d,
    webhookNameHook: (e, t) => (0, s.jsx)(u, {
      messageReference: f,
      children: e
    }, t)
  });
  return (0, s.jsx)(r.default, {
    icon: n("127067"),
    timestamp: c,
    compact: a,
    children: T
  })
}