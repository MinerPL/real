"use strict";
r.r(t), r.d(t, {
  default: function() {
    return c
  }
});
var l = r("37983");
r("884691");
var i = r("77078"),
  o = r("38766"),
  n = r("49111"),
  s = r("782340"),
  a = r("364547");
let u = {
    page: n.AnalyticsPages.GUILD_CHANNEL,
    section: n.AnalyticsSections.PROFILE_POPOUT,
    object: n.AnalyticsObjects.EDIT_PER_SERVER_IDENTITY
  },
  d = {
    page: n.AnalyticsPages.USER_POPOUT,
    section: n.AnalyticsSections.PROFILE_POPOUT
  };

function c(e) {
  let {
    onSelect: t,
    onClose: r,
    guild: n
  } = e, c = (0, o.default)({
    guild: n,
    analyticsLocation: u
  }), f = (0, o.default)({
    analyticsLocation: d
  });
  return (0, l.jsxs)(i.Menu, {
    className: a.popoutMenu,
    onSelect: t,
    navId: "edit-profile-popout",
    onClose: r,
    "aria-label": s.default.Messages.PROFILE_ACTIONS_MENU_LABEL,
    children: [(0, l.jsx)(i.MenuItem, {
      id: "edit-server-profile",
      label: s.default.Messages.CHANGE_IDENTITY,
      subtext: s.default.Messages.CHANGE_IDENTITY_SERVER_PROFILE_MENU_HELP,
      action: () => c()
    }), (0, l.jsx)(i.MenuItem, {
      id: "edit-default-profile",
      label: s.default.Messages.USER_SETTINGS_EDIT_USER_PROFILE,
      subtext: s.default.Messages.USER_PROFILE_MENU_HELP,
      action: () => f()
    })]
  })
}