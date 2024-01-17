"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
});
var s = n("37983");
n("884691");
var l = n("627445"),
  a = n.n(l),
  i = n("65597"),
  r = n("77078"),
  o = n("206230"),
  u = n("305961"),
  d = n("181114"),
  c = n("866190"),
  f = n("442379"),
  E = n("565559"),
  _ = n("777133"),
  T = n("407417"),
  I = n("782340");

function m(e) {
  let {
    guildId: t,
    guildProductListingId: n,
    sourceAnalyticsLocations: l
  } = e, m = (0, i.default)([E.default], () => E.default.getGuildProduct(n)), N = (0, i.default)([u.default], () => u.default.getGuild(t), [t]), p = (0, i.default)([o.default], () => o.default.useReducedMotion), S = (0, c.useIsWindowFocused)();
  a(null != N, "guild cannot be null"), a(null != m, "guildProductListing cannot be null");
  let A = (0, f.useCanManageGuildProduct)(N);
  if (A) return (0, s.jsx)(r.Tooltip, {
    text: I.default.Messages.GUILD_PRODUCT_PURCHASE_DISABLED_TOOLTIP,
    children: e => (0, s.jsx)(r.Button, {
      ...e,
      color: r.Button.Colors.BRAND,
      disabled: !0,
      children: I.default.Messages.GUILD_PRODUCT_CARD_PURCHASE_BUTTON
    })
  });
  if (!m.has_entitlement) return (0, s.jsx)(d.default, {
    shineSize: d.default.ShineSizes.SMALL,
    pauseAnimation: p || !S,
    onClick: () => (0, _.openGuildProductPurchaseModal)({
      guildProductListing: m,
      guildId: N.id,
      sourceAnalyticsLocations: l
    }),
    children: I.default.Messages.GUILD_PRODUCT_CARD_PURCHASE_BUTTON
  });
  {
    let e = null != m.attachments;
    return e ? (0, s.jsx)(T.default, {
      guildId: N.id,
      productId: m.id
    }) : (0, s.jsx)(r.Button, {
      color: r.Button.Colors.PRIMARY,
      disabled: !0,
      children: I.default.Messages.GUILD_PRODUCT_CARD_PURCHASED
    })
  }
}