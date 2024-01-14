"use strict";
n.r(t), n.d(t, {
  canAccessMemberSafetyPage: function() {
    return c
  },
  useCanAccessMemberSafetyPage: function() {
    return m
  },
  useCanAccessBulkBanningFeature: function() {
    return h
  },
  useCanAccessInviteCodeFeature: function() {
    return v
  },
  useCanBulkBanUser: function() {
    return E
  },
  canBulkBanUser: function() {
    return p
  }
}), n("222007");
var s = n("316693"),
  i = n("446674"),
  r = n("305961"),
  a = n("957255"),
  o = n("697218"),
  d = n("991170"),
  u = n("536999"),
  l = n("562980"),
  f = n("49111");
let _ = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [r.default, o.default],
      [n, s] = t,
      i = n.getGuild(e),
      a = s.getCurrentUser();
    return {
      user: a,
      guild: i
    }
  },
  c = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [r.default, o.default],
      n = _(e, t);
    if (null == n) return !1;
    let i = s.default.hasAny(d.default.computePermissions({
      user: n.user,
      context: n.guild,
      checkElevated: !1
    }), l.MemberSafetyPagePermissions);
    return i
  },
  g = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [r.default, o.default],
      n = _(e, t);
    return null != n && a.default.can(f.Permissions.MANAGE_GUILD, n.guild) && a.default.can(f.Permissions.BAN_MEMBERS, n.guild)
  };

function m(e) {
  let t = (0, i.useStateFromStores)([r.default, o.default], () => c(e, [r.default, o.default]), [e]);
  return t
}

function h(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    s = m(e),
    a = (0, i.useStateFromStores)([r.default, o.default], () => g(e, [r.default, o.default]), [e]),
    d = (0, u.useIsBulkBanningExperimentEnabled)(e, {
      location: t,
      autoTrackExposure: n,
      disable: !a
    });
  return s && a && d
}

function v(e) {
  return (0, i.useStateFromStores)([r.default, a.default], () => {
    let t = r.default.getGuild(e);
    return null != t && a.default.can(f.Permissions.MANAGE_GUILD, t)
  }, [e])
}

function E(e, t, n) {
  return (0, i.useStateFromStores)([a.default, r.default], () => {
    let s = r.default.getGuild(e);
    return null != s && t && a.default.canManageUser(f.Permissions.BAN_MEMBERS, n, s)
  }, [t, e, n])
}

function p(e, t, n) {
  let s = r.default.getGuild(e);
  return null != s && t && a.default.canManageUser(f.Permissions.BAN_MEMBERS, n, s)
}