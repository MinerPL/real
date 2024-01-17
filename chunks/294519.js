"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
}), n("222007");
var s = n("37983");
n("884691");
var l = n("759843"),
  a = n("65597"),
  i = n("812204"),
  r = n("428958"),
  o = n("162771"),
  u = n("442379"),
  d = n("858291"),
  c = n("660516");

function f(e) {
  let {
    code: t
  } = e, [n, f] = t.split("-"), E = (0, u.useFetchGuildProductListing)(n, f), _ = (0, a.default)([o.default], () => o.default.getGuildId());
  return ((0, r.default)({
    type: c.ImpressionTypes.VIEW,
    name: l.ImpressionNames.GUILD_PRODUCT_LISTING_EMBED,
    properties: {
      guild_product_listing_id: f,
      has_entitlement: (null == E ? void 0 : E.has_entitlement) === !0
    }
  }, {
    disableTrack: null == E
  }), null == E || _ !== n) ? null : (0, s.jsx)(d.GuildProductListingPublicCard, {
    guildProductListing: E,
    guildId: n,
    location: i.default.GUILD_PRODUCT_EMBED_CARD,
    cardWidth: 390,
    thumbnailHeight: 219
  })
}