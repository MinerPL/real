"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
});
var a = n("37983");
n("884691");
var l = n("446674"),
  s = n("118849"),
  i = n("290581"),
  r = n("664336"),
  o = n("379881"),
  u = n("200008"),
  d = n("986373"),
  c = n("498139"),
  f = n("20209"),
  h = n("782340");

function p(e) {
  let {
    channel: t
  } = e, {
    isFavoritesPerk: n
  } = (0, c.useFavoritesServerExperiment)("ChannelFavoritesHeaderButton"), p = (0, f.default)(), {
    notifyFavoriteAdded: m
  } = (0, d.useFavoriteAdded)(), E = (0, l.useStateFromStores)([o.default], () => o.default.isFavorite(t.id));
  if (!n || p) return null;
  let C = E ? i.default : s.default,
    g = E ? h.default.Messages.UNFAVORITE_CHANNEL : h.default.Messages.FAVORITE_CHANNEL;
  return (0, a.jsx)(r.default.Icon, {
    icon: C,
    tooltip: g,
    "aria-label": g,
    onClick: () => {
      E ? (0, u.removeFavoriteChannel)(t.id) : (m(), (0, u.addFavoriteChannel)(t.id))
    }
  })
}