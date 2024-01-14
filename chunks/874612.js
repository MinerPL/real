"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var a = n("37983");
n("884691");
var s = n("574073"),
  l = n("304198"),
  i = n("700097");

function r(e) {
  let {
    message: t,
    usernameHook: r,
    compact: o
  } = e, u = (0, s.default)(t), d = r(u), c = i.default.getSystemMessageUserJoin(t.id), f = c.format({
    username: u.nick,
    usernameHook: d
  });
  return (0, a.jsx)(l.default, {
    icon: n("127067"),
    timestamp: t.timestamp,
    compact: o,
    children: f
  })
}