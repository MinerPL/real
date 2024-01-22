"use strict";
n.r(t), n.d(t, {
  canAccessMemberSafetyPage: function() {
    return f
  },
  useCanAccessMemberSafetyPage: function() {
    return h
  },
  useCanAccessBulkBanningFeature: function() {
    return g
  },
  useCanAccessInviteCodeFeature: function() {
    return m
  },
  useCanBulkBanUser: function() {
    return E
  },
  canBulkBanUser: function() {
    return p
  }
}), n("222007");
var i = n("316693"),
  s = n("446674"),
  r = n("305961"),
  a = n("957255"),
  o = n("697218"),
  l = n("991170"),
  u = n("562980"),
  d = n("49111");
let c = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [r.default, o.default],
      [n, i] = t,
      s = n.getGuild(e),
      a = i.getCurrentUser();
    return {
      user: a,
      guild: s
    }
  },
  f = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [r.default, o.default],
      n = c(e, t);
    if (null == n) return !1;
    let s = i.default.hasAny(l.default.computePermissions({
      user: n.user,
      context: n.guild,
      checkElevated: !1
    }), u.MemberSafetyPagePermissions);
    return s
  },
  _ = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [r.default, o.default],
      n = c(e, t);
    return null != n && a.default.can(d.Permissions.MANAGE_GUILD, n.guild) && a.default.can(d.Permissions.BAN_MEMBERS, n.guild)
  };

function h(e) {
  let t = (0, s.useStateFromStores)([r.default, o.default], () => f(e, [r.default, o.default]), [e]);
  return t
}

function g(e) {
  let t = h(e),
    n = (0, s.useStateFromStores)([r.default, o.default], () => _(e, [r.default, o.default]), [e]);
  return t && n
}

function m(e) {
  return (0, s.useStateFromStores)([r.default, a.default], () => {
    let t = r.default.getGuild(e);
    return null != t && a.default.can(d.Permissions.MANAGE_GUILD, t)
  }, [e])
}

function E(e, t, n) {
  return (0, s.useStateFromStores)([a.default, r.default], () => {
    let i = r.default.getGuild(e);
    return null != i && t && a.default.canManageUser(d.Permissions.BAN_MEMBERS, n, i)
  }, [t, e, n])
}

function p(e, t, n) {
  let i = r.default.getGuild(e);
  return null != i && t && a.default.canManageUser(d.Permissions.BAN_MEMBERS, n, i)
}