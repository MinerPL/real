"use strict";
n.r(t), n.d(t, {
  canToggleCommunicationDisableOnUser: function() {
    return s
  },
  default: function() {
    return d
  }
}), n("222007");
var i = n("446674"),
  u = n("305961"),
  l = n("957255"),
  o = n("697218"),
  r = n("991170"),
  a = n("49111");

function s(e, t) {
  let [n, i, s] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [o.default, u.default, l.default], d = i.getGuild(e), c = n.getUser(t);
  if (null == d || null == c || c.isNonUserBot()) return !1;
  let E = d.isOwner(c) || r.default.can({
    permission: a.Permissions.ADMINISTRATOR,
    user: c,
    context: d
  });
  return !E && s.canManageUser(a.Permissions.MODERATE_MEMBERS, c, d)
}

function d(e, t) {
  return (0, i.useStateFromStores)([o.default, u.default, l.default], () => s(e, t, [o.default, u.default, l.default]), [e, t])
}