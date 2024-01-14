"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var l = n("37983");
n("884691");
var a = n("830210"),
  s = n("42687");

function i(e) {
  let {
    channel: t,
    video: n,
    userCount: i
  } = e, {
    limit: r
  } = (0, a.default)(t), o = -1, u = !1;
  return t.userLimit > 0 && (o = t.userLimit), n && r > 0 && (u = o < 0 || r < o, o = o > 0 ? Math.min(o, r) : r), (0, l.jsx)(s.default, {
    users: i,
    total: o,
    videoLimit: u
  })
}