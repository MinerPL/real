"use strict";
t.r(n), t.d(n, {
  default: function() {
    return o
  }
});
var u = t("37983");
t("884691");
var i = t("77078"),
  s = t("592407"),
  r = t("65722"),
  a = t("49111"),
  l = t("782340");

function o(e) {
  let n = (0, r.useCanManageGuildRoleSubscriptions)(e);
  return n ? (0, u.jsx)(i.MenuItem, {
    id: "role-subscription-settings",
    label: l.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_EDIT_SETTINGS,
    action: () => {
      s.default.open(e.id, a.GuildSettingsSections.ROLE_SUBSCRIPTIONS)
    }
  }) : null
}