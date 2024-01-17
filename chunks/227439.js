"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
});
var i = n("37983"),
  r = n("884691"),
  l = n("93332"),
  u = n("913491");
let o = r.memo(l.default);

function s(e) {
  let {
    message: t,
    channel: n,
    author: r,
    compact: l,
    animateAvatar: s,
    guildId: a,
    isGroupStart: d = !0,
    roleIcon: c,
    hideTimestamp: f
  } = e;
  return !(0, u.default)(t) && (d || l) ? (0, i.jsx)(o, {
    message: t,
    channel: n,
    author: r,
    guildId: a,
    compact: l,
    animate: s,
    roleIcon: c,
    hideTimestamp: f
  }) : void 0
}