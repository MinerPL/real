"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
}), n("222007");
var a = n("37983");
n("884691");
var s = n("759843"),
  l = n("65597"),
  i = n("812204"),
  r = n("428958"),
  o = n("162771"),
  u = n("442379"),
  d = n("858291"),
  c = n("660516");

function f(e) {
  let {
    code: t
  } = e, [n, f] = t.split("-"), m = (0, u.useFetchGuildProductListing)(n, f), E = (0, l.default)([o.default], () => o.default.getGuildId());
  return ((0, r.default)({
    type: c.ImpressionTypes.VIEW,
    name: s.ImpressionNames.GUILD_PRODUCT_LISTING_EMBED,
    properties: {
      guild_product_listing_id: f,
      has_entitlement: (null == m ? void 0 : m.has_entitlement) === !0
    }
  }, {
    disableTrack: null == m
  }), null == m || E !== n) ? null : (0, a.jsx)(d.GuildProductListingPublicCard, {
    guildProductListing: m,
    guildId: n,
    location: i.default.GUILD_PRODUCT_EMBED_CARD,
    cardWidth: 390,
    thumbnailHeight: 219
  })
}