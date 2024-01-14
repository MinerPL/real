"use strict";
t.r(n), t.d(n, {
  default: function() {
    return o
  }
});
var u = t("37983");
t("884691");
var i = t("77078"),
  s = t("272030"),
  r = t("633188"),
  a = t("351653"),
  l = t("782340");

function o(e) {
  let {
    guild: n,
    onSelect: t
  } = e, o = (0, a.default)(n), c = (0, r.default)(n.id);
  return (0, u.jsx)(i.Menu, {
    navId: "role-subscription-context",
    "aria-label": l.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_ACTION_MENU_LABEL,
    onClose: s.closeContextMenu,
    onSelect: t,
    children: (0, u.jsxs)(i.MenuGroup, {
      children: [o, c]
    })
  })
}