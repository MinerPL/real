"use strict";
n.r(t), n.d(t, {
  useAddToFavoritesItem: function() {
    return A
  },
  useRemoveFromFavoritesItem: function() {
    return v
  }
}), n("222007");
var a = n("37983");
n("884691");
var l = n("917351"),
  i = n.n(l),
  d = n("446674"),
  u = n("77078"),
  s = n("923959"),
  o = n("379881"),
  r = n("200008"),
  c = n("986373"),
  f = n("498139"),
  I = n("49111"),
  p = n("782340");

function _(e, t) {
  return e.type === I.ChannelTypes.GROUP_DM ? t ? p.default.Messages.UNFAVORITE_GDM : p.default.Messages.FAVORITE_GDM : e.type === I.ChannelTypes.DM ? t ? p.default.Messages.UNFAVORITE_DM : p.default.Messages.FAVORITE_DM : t ? p.default.Messages.UNFAVORITE_CHANNEL : p.default.Messages.FAVORITE_CHANNEL
}

function A(e) {
  let t = (0, d.useStateFromStores)([s.default], () => s.default.getChannels(I.FAVORITES))[I.ChannelTypes.GUILD_CATEGORY],
    {
      isFavoritesPerk: n
    } = (0, f.useFavoritesServerExperiment)("58e21a_1"),
    {
      notifyFavoriteAdded: l
    } = (0, c.useFavoriteAdded)(),
    o = (0, c.useCanFavoriteChannel)(e);
  if (!o) return null;
  let [
    [p], A
  ] = i.partition(t, e => "null" === e.channel.id);

  function v(t) {
    l(), (0, r.addFavoriteChannel)(e.id, t)
  }
  return 0 === A.length ? (0, a.jsx)(u.MenuItem, {
    id: "favorite-channel",
    label: _(e, !1),
    action: () => v(null)
  }) : (0, a.jsxs)(u.MenuItem, {
    id: "favorite-channel",
    label: _(e, !1),
    action: () => v(null),
    children: [n && (0, a.jsx)(u.MenuGroup, {
      children: (0, a.jsx)(u.MenuItem, {
        id: "favorite-".concat(p.channel.id),
        label: p.channel.name,
        action: () => v("null" === p.channel.id ? null : p.channel.id)
      }, p.channel.id)
    }), (0, a.jsx)(u.MenuGroup, {
      children: A.map(e => (0, a.jsx)(u.MenuItem, {
        id: "favorite-".concat(e.channel.id),
        label: e.channel.name,
        action: () => v(e.channel.id)
      }, e.channel.id))
    })]
  })
}

function v(e) {
  let t = (0, d.useStateFromStores)([o.default], () => o.default.isFavorite(e.id));
  return __OVERLAY__ || !t ? null : (0, a.jsx)(u.MenuItem, {
    id: "favorite-channel",
    label: _(e, !0),
    color: "danger",
    action: () => e.type === I.ChannelTypes.GUILD_CATEGORY ? (0, u.openModalLazy)(async () => {
      let {
        default: t
      } = await n.el("338052").then(n.bind(n, "338052"));
      return n => (0, a.jsx)(t, {
        ...n,
        onConfirm: () => {
          n.onClose(), (0, r.removeFavoriteChannel)(e.id)
        },
        channel: e
      })
    }) : (0, r.removeFavoriteChannel)(e.id)
  })
}