"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var a = n("37983");
n("884691");
var i = n("446674"),
  s = n("77078"),
  l = n("162771"),
  u = n("351825"),
  r = n("498139"),
  o = n("49111"),
  d = n("782340");

function f(e) {
  let t = (0, i.useStateFromStores)([l.default], () => l.default.getGuildId()),
    f = e.type === o.ChannelTypes.GUILD_CATEGORY,
    {
      isFavoritesPerk: c
    } = (0, r.useFavoritesServerExperiment)("useCategoryAddChannelItem");
  return !__OVERLAY__ && t === o.FAVORITES && c && f ? (0, a.jsx)(s.MenuItem, {
    id: "add-channel-to-category",
    icon: u.default,
    color: "brand",
    label: d.default.Messages.FAVORITES_ADD_A_CHANNEL,
    action: function() {
      (0, s.openModalLazy)(async () => {
        let {
          default: t
        } = await n.el("746039").then(n.bind(n, "746039"));
        return n => (0, a.jsx)(t, {
          ...n,
          parentId: e.id
        })
      })
    }
  }) : null
}