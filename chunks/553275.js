"use strict";
n.r(t), n.d(t, {
  openMemberProfile: function() {
    return E
  },
  useContextMenuModerateRoles: function() {
    return _
  },
  useContextMenuModerateUser: function() {
    return h
  },
  useHighestRole: function() {
    return p
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
  o = n("685665"),
  a = n("401642"),
  u = n("305961"),
  c = n("697218"),
  d = n("441823"),
  f = n("49111");
let E = e => {
  let {
    guildId: t,
    userId: n
  } = e;
  (0, a.openUserProfileModal)({
    userId: n,
    guildId: t,
    analyticsLocation: {
      section: f.AnalyticsSections.MEMBER_SAFETY_PAGE,
      object: f.AnalyticsObjects.ACTIONED_BY_USER
    }
  })
};

function _(e, t, n) {
  let {
    analyticsLocations: l
  } = (0, o.default)();
  return r.useCallback(i => {
    if (null == e) return;
    let r = c.default.getUser(e.userId);
    null != r && (i.stopPropagation(), (0, d.openModerateRoleContextMenu)(i, {
      user: r,
      guildId: e.guildId,
      analyticsLocations: null != t ? [t] : l,
      onCloseContextMenu: n
    }))
  }, [e, l, n, t])
}

function h(e, t, n) {
  let {
    analyticsLocations: l
  } = (0, o.default)();
  return r.useCallback(i => {
    if (null == e) return;
    let r = c.default.getUser(e.userId);
    null != r && (i.stopPropagation(), (0, d.openModerateUserContextMenu)(i, {
      user: r,
      guildId: e.guildId,
      analyticsLocations: null != t ? [t] : l,
      onCloseContextMenu: n
    }))
  }, [e, n, l, t])
}

function p(e) {
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