"use strict";
n.r(t), n.d(t, {
  useContextMenuModerateRoles: function() {
    return E
  },
  openMemberProfile: function() {
    return _
  },
  useContextMenuModerateUser: function() {
    return p
  },
  useHighestRole: function() {
    return h
  },
  SearchState: function() {
    return i
  },
  getSearchState: function() {
    return S
  }
});
var l, i, r = n("884691"),
  s = n("65597"),
  a = n("685665"),
  o = n("401642"),
  u = n("305961"),
  d = n("697218"),
  c = n("441823"),
  f = n("49111");

function E(e, t) {
  let {
    analyticsLocations: n
  } = (0, a.default)();
  return r.useCallback(l => {
    if (null == e) return;
    let i = d.default.getUser(e.userId);
    null != i && (l.stopPropagation(), (0, c.openModerateRoleContextMenu)(l, {
      user: i,
      guildId: e.guildId,
      analyticsLocations: n,
      onCloseContextMenu: t
    }))
  }, [e, n, t])
}
let _ = e => {
  let {
    guildId: t,
    userId: n
  } = e;
  (0, o.openUserProfileModal)({
    userId: n,
    guildId: t,
    analyticsLocation: {
      section: f.AnalyticsSections.MEMBER_SAFETY_PAGE,
      object: f.AnalyticsObjects.ACTIONED_BY_USER
    }
  })
};

function p(e, t) {
  let {
    analyticsLocations: n
  } = (0, a.default)();
  return r.useCallback(l => {
    if (null == e) return;
    let i = d.default.getUser(e.userId);
    null != i && (l.stopPropagation(), (0, c.openModerateUserContextMenu)(l, {
      user: i,
      guildId: e.guildId,
      analyticsLocations: n,
      onCloseContextMenu: t
    }))
  }, [e, t, n])
}

function h(e) {
  return (0, s.default)([u.default], () => {
    var t;
    if (null == e) return null;
    let n = u.default.getGuild(e.guildId);
    return null == n || null == e.highestRoleId ? null : null !== (t = n.roles[e.highestRoleId]) && void 0 !== t ? t : null
  }, [e])
}

function S(e, t, n) {
  return t ? 0 : e ? 1 : n <= 0 ? 2 : 3
}(l = i || (i = {}))[l.LOADING = 0] = "LOADING", l[l.SUCCESS_STILL_INDEXING = 1] = "SUCCESS_STILL_INDEXING", l[l.SUCCESS_EMPTY = 2] = "SUCCESS_EMPTY", l[l.SUCCESS_FULL = 3] = "SUCCESS_FULL"