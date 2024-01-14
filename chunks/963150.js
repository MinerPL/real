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
  let d = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e.type,
    c = (0, u.useStateFromStores)([s.default], () => s.default.can(r.Permissions.MANAGE_CHANNELS, e), [e]);
  if (__OVERLAY__ || !c) return null;
  let o = () => {
    (0, l.openModalLazy)(async () => {
      let {
        default: n
      } = await t.el("581354").then(t.bind(t, "581354"));
      return t => (0, a.jsx)(n, {
        ...t,
        channelType: d,
        guildId: e.guild_id,
        categoryId: e.parent_id
      })
    })
  };
  switch (d) {
    case r.ChannelTypes.GUILD_TEXT:
      return (0, a.jsx)(l.MenuItem, {
        id: "create-text-channel",
        label: i.default.Messages.CREATE_TEXT_CHANNEL,
        action: o
      });
    case r.ChannelTypes.GUILD_VOICE:
      return (0, a.jsx)(l.MenuItem, {
        id: "create-voice-channel",
        label: i.default.Messages.CREATE_VOICE_CHANNEL,
        action: o
      });
    default:
      return null
  }
}