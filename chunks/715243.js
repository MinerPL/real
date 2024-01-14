"use strict";
t.r(n), t.d(n, {
  default: function() {
    return d
  }
});
var a = t("37983");
t("884691");
var u = t("446674"),
  l = t("77078"),
  s = t("957255"),
  r = t("49111"),
  i = t("782340");

function d(e, n) {
  let d = (0, u.useStateFromStores)([s.default], () => s.default.can(r.Permissions.MANAGE_CHANNELS, e), [e]);
  return __OVERLAY__ || !d ? null : (0, a.jsx)(l.MenuItem, {
    id: "clone-channel",
    label: i.default.Messages.CLONE_CHANNEL,
    action: () => (0, l.openModalLazy)(async () => {
      let {
        default: u
      } = await t.el("581354").then(t.bind(t, "581354"));
      return t => (0, a.jsx)(u, {
        ...t,
        channelType: e.type,
        guildId: n.id,
        categoryId: e.parent_id,
        cloneChannelId: e.id
      })
    })
  })
}