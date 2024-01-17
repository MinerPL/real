"use strict";
l.r(r), l.d(r, {
  default: function() {
    return d
  }
});
var t = l("37983");
l("884691");
var o = l("77078"),
  i = l("38766"),
  n = l("49111"),
  a = l("782340"),
  s = l("364547");
let u = {
    page: n.AnalyticsPages.GUILD_CHANNEL,
    section: n.AnalyticsSections.PROFILE_POPOUT,
    object: n.AnalyticsObjects.EDIT_PER_SERVER_IDENTITY
  },
  f = {
    page: n.AnalyticsPages.USER_POPOUT,
    section: n.AnalyticsSections.PROFILE_POPOUT
  };

function d(e) {
  let {
    onSelect: r,
    onClose: l,
    guild: n
  } = e, d = (0, i.default)({
    guild: n,
    analyticsLocation: u
  }), c = (0, i.default)({
    analyticsLocation: f
  });
  return (0, t.jsxs)(o.Menu, {
    className: s.popoutMenu,
    onSelect: r,
    navId: "edit-profile-popout",
    onClose: l,
    "aria-label": a.default.Messages.PROFILE_ACTIONS_MENU_LABEL,
    children: [(0, t.jsx)(o.MenuItem, {
      id: "edit-server-profile",
      label: a.default.Messages.CHANGE_IDENTITY,
      subtext: a.default.Messages.CHANGE_IDENTITY_SERVER_PROFILE_MENU_HELP,
      action: () => d()
    }), (0, t.jsx)(o.MenuItem, {
      id: "edit-default-profile",
      label: a.default.Messages.USER_SETTINGS_EDIT_USER_PROFILE,
      subtext: a.default.Messages.USER_PROFILE_MENU_HELP,
      action: () => c()
    })]
  })
}