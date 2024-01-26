"use strict";
n.r(t), n.d(t, {
  PollMessageContextItemTypes: function() {
    return a
  },
  default: function() {
    return o
  }
}), n("424973");
var a, i, l = n("446674"),
  s = n("271938"),
  u = n("957255"),
  r = n("49111");
(i = a || (a = {}))[i.END_EARLY = 0] = "END_EARLY";
let d = [];

function o(e, t) {
  let n = (0, l.useStateFromStores)([s.default], () => s.default.getId()),
    a = (0, l.useStateFromStores)([u.default], () => !t.isPrivate() && u.default.can(r.Permissions.MANAGE_MESSAGES, t), [t]),
    {
      poll: i
    } = e;
  if (!e.isPoll() || null == i) return d;
  let o = [],
    c = i.expiry.isSameOrBefore(Date.now()),
    f = !c && (e.author.id === n || a);
  return f && o.push(0), o
}