"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var i = n("37983");
n("884691");
var s = n("446674"),
  a = n("77078"),
  l = n("957255"),
  u = n("49111"),
  d = n("695838"),
  o = n("782340");

function r(e) {
  let t = (0, s.useStateFromStores)([l.default], () => l.default.can(u.Permissions.MANAGE_CHANNELS, e));
  return __OVERLAY__ ? null : e.id === d.FAVORITES_RAW_GUILD_ID ? (0, i.jsx)(i.Fragment, {
    children: (0, i.jsx)(a.MenuItem, {
      id: "create-category",
      label: o.default.Messages.CREATE_CATEGORY,
      action: () => (0, a.openModalLazy)(async () => {
        let {
          default: e
        } = await n.el("515680").then(n.bind(n, "515680"));
        return t => (0, i.jsx)(e, {
          ...t
        })
      })
    })
  }) : t ? [(0, i.jsx)(a.MenuItem, {
    id: "create-channel",
    label: o.default.Messages.CREATE_CHANNEL,
    action: () => (0, a.openModalLazy)(async () => {
      let {
        default: t
      } = await n.el("581354").then(n.bind(n, "581354"));
      return n => (0, i.jsx)(t, {
        ...n,
        channelType: u.ChannelTypes.GUILD_TEXT,
        guildId: e.id
      })
    })
  }, "create-channel"), (0, i.jsx)(a.MenuItem, {
    id: "create-category",
    label: o.default.Messages.CREATE_CATEGORY,
    action: () => (0, a.openModalLazy)(async () => {
      let {
        default: t
      } = await n.el("581354").then(n.bind(n, "581354"));
      return n => (0, i.jsx)(t, {
        ...n,
        channelType: u.ChannelTypes.GUILD_CATEGORY,
        guildId: e.id
      })
    })
  }, "create-category")] : null
}