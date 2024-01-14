"use strict";
t.r(n), t.d(n, {
  default: function() {
    return c
  }
});
var a = t("37983");
t("884691");
var u = t("446674"),
  l = t("77078"),
  s = t("18054"),
  r = t("957255"),
  i = t("49111"),
  d = t("782340");

function c(e) {
  let {
    canManageChannels: n,
    canManageRoles: t,
    canManageWebhooks: c,
    canAccessChannel: o
  } = (0, u.useStateFromStoresObject)([r.default], () => ({
    canManageChannels: r.default.can(i.Permissions.MANAGE_CHANNELS, e),
    canManageRoles: r.default.can(i.Permissions.MANAGE_ROLES, e),
    canManageWebhooks: r.default.can(i.Permissions.MANAGE_WEBHOOKS, e),
    canAccessChannel: r.default.can(e.accessPermissions, e)
  }), [e]);
  return !__OVERLAY__ && o && (n || t || c) ? (0, a.jsx)(l.MenuItem, {
    id: "edit-channel",
    label: e.type === i.ChannelTypes.GUILD_CATEGORY ? d.default.Messages.EDIT_CATEGORY : d.default.Messages.EDIT_CHANNEL,
    action: () => s.default.open(e.id)
  }) : null
}