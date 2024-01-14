"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
});
var l = n("446674"),
  i = n("305961"),
  r = n("837008");

function s(e, t) {
  let n = (0, l.useStateFromStores)([i.default], () => i.default.getGuild(e), [e]),
    s = (0, r.useSubscriptionListing)(t);
  return null == n || null == s ? null : n.roles[s.role_id]
}