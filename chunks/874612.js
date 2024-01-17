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
  i = n("700097");

function r(e) {
  let {
    message: t,
    usernameHook: r,
    compact: o
  } = e, u = (0, l.default)(t), d = r(u), c = i.default.getSystemMessageUserJoin(t.id), f = c.format({
    username: u.nick,
    usernameHook: d
  });
  return (0, s.jsx)(a.default, {
    icon: n("127067"),
    timestamp: t.timestamp,
    compact: o,
    children: f
  })
}