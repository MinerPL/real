"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
}), n("222007");
var s = n("37983");
n("884691");
var l = n("42203"),
  a = n("305961"),
  i = n("957255"),
  r = n("67541"),
  o = n("49111");

function u(e) {
  let {
    code: t,
    messageData: n
  } = e, [u, d] = t.split("/"), c = l.default.getChannel(d), f = a.default.getGuild(u);
  return null != c && c.isGuildVocal() && null != f && i.default.can(o.Permissions.VIEW_CHANNEL, c) && i.default.can(o.Permissions.CONNECT, c) ? (0, s.jsx)(r.default, {
    guild: f,
    channel: c,
    messageData: n
  }) : null
}