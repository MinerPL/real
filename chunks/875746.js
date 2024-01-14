"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
});
var a = n("37983");
n("884691");
var s = n("627445"),
  l = n.n(s),
  i = n("65597"),
  r = n("77078"),
  o = n("206230"),
  u = n("305961"),
  d = n("181114"),
  c = n("866190"),
  f = n("442379"),
  m = n("565559"),
  E = n("777133"),
  _ = n("407417"),
  h = n("782340");

function p(e) {
  let {
    guildId: t,
    guildProductListingId: n,
    sourceAnalyticsLocations: s
  } = e, p = (0, i.default)([m.default], () => m.default.getGuildProduct(n)), I = (0, i.default)([u.default], () => u.default.getGuild(t), [t]), T = (0, i.default)([o.default], () => o.default.useReducedMotion), g = (0, c.useIsWindowFocused)();
  l(null != I, "guild cannot be null"), l(null != p, "guildProductListing cannot be null");
  let C = (0, f.useCanManageGuildProduct)(I);
  if (C) return (0, a.jsx)(r.Tooltip, {
    text: h.default.Messages.GUILD_PRODUCT_PURCHASE_DISABLED_TOOLTIP,
    children: e => (0, a.jsx)(r.Button, {
      ...e,
      color: r.Button.Colors.BRAND,
      disabled: !0,
      children: h.default.Messages.GUILD_PRODUCT_CARD_PURCHASE_BUTTON
    })
  });
  if (!p.has_entitlement) return (0, a.jsx)(d.default, {
    shineSize: d.default.ShineSizes.SMALL,
    pauseAnimation: T || !g,
    onClick: () => (0, E.openGuildProductPurchaseModal)({
      guildProductListing: p,
      guildId: I.id,
      sourceAnalyticsLocations: s
    }),
    children: h.default.Messages.GUILD_PRODUCT_CARD_PURCHASE_BUTTON
  });
  {
    let e = null != p.attachments;
    return e ? (0, a.jsx)(_.default, {
      guildId: I.id,
      productId: p.id
    }) : (0, a.jsx)(r.Button, {
      color: r.Button.Colors.PRIMARY,
      disabled: !0,
      children: h.default.Messages.GUILD_PRODUCT_CARD_PURCHASED
    })
  }
}