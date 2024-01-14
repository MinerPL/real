"use strict";
s.r(t), s.d(t, {
  useRoleSubscriptionInsightsAccess: function() {
    return o
  }
});
var a = s("316693"),
  n = s("446674"),
  l = s("305961"),
  i = s("957255"),
  r = s("49111");

function o(e) {
  let t = (0, n.useStateFromStores)([l.default, i.default], () => {
    let t = l.default.getGuild(e);
    if (null == t) return !1;
    let s = i.default.getGuildPermissions(t);
    return null != s && a.default.has(s, r.Permissions.VIEW_CREATOR_MONETIZATION_ANALYTICS)
  });
  return t
}