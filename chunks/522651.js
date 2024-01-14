"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var l = n("37983");
n("884691");
var i = n("77078"),
  o = n("272030"),
  r = n("838446"),
  u = n("158534"),
  a = n("812204"),
  d = n("685665"),
  c = n("97508"),
  s = n("49111"),
  _ = n("782340"),
  f = (0, u.default)((0, r.default)(function(e) {
    var t;
    let {
      user: n,
      guildId: r,
      onSelect: u,
      analyticsLocations: s,
      onCloseContextMenu: f
    } = e, {
      analyticsLocations: E
    } = (0, d.default)(a.default.CONTEXT_MENU), A = null !== (t = null == s ? void 0 : s[0]) && void 0 !== t ? t : E[0], M = (0, c.default)(n.id, r, !0, A);
    return (0, l.jsx)(i.Menu, {
      navId: "guild-moderation-roles",
      onClose: () => {
        (0, o.closeContextMenu)(), null == f || f()
      },
      "aria-label": _.default.Messages.USER_ACTIONS_MENU_LABEL,
      onSelect: u,
      children: (0, l.jsx)(i.MenuGroup, {
        children: M
      })
    })
  }, {
    object: s.AnalyticsObjects.CONTEXT_MENU
  }), [a.default.CONTEXT_MENU, a.default.GUILD_MODERATION_USER_MENU])