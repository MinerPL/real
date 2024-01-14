"use strict";
a.r(t), a.d(t, {
  default: function() {
    return h
  }
});
var l = a("37983");
a("884691");
var s = a("414456"),
  r = a.n(s),
  n = a("65597"),
  o = a("755854"),
  i = a("77078"),
  u = a("161778"),
  c = a("697218"),
  d = a("216422"),
  f = a("719923"),
  C = a("491232"),
  E = a("791309"),
  m = a("49111"),
  p = a("782340"),
  g = a("173046");

function h(e) {
  let {
    product: t,
    className: a,
    disableTooltipPointerEvents: s,
    alwaysWhiteText: h = !0
  } = e, T = (0, n.default)([c.default], () => c.default.getCurrentUser()), b = (0, n.default)([u.default], () => (0, o.isThemeDark)(u.default.theme)), x = (0, C.extractPriceByPurchaseTypes)(t, m.PriceSetAssignmentPurchaseTypes.DEFAULT);
  if (null == x) return null;
  if (x.amount <= 0) return (0, l.jsx)("div", {
    className: r(g.priceTagsContainer, a),
    children: (0, l.jsx)(E.default, {
      alwaysWhiteText: h,
      price: x
    })
  });
  let L = (0, C.extractPriceByPurchaseTypes)(t, m.PriceSetAssignmentPurchaseTypes.PREMIUM_TIER_2),
    S = !f.default.canUseCollectibles(T);
  return (0, l.jsxs)("div", {
    className: r(g.priceTagsContainer, a),
    children: [(0, l.jsx)(E.default, {
      alwaysWhiteText: h,
      price: x,
      className: S ? void 0 : g.strikedPrice
    }), null != L && (0, l.jsx)(E.default, {
      price: L,
      alwaysWhiteText: h,
      renderPrice: S ? e => p.default.Messages.COLLECTIBLES_NON_PREMIUM_PRICE.format({
        price: e
      }) : void 0,
      className: S ? g.fullPrice : void 0,
      variant: S ? "text-xs/semibold" : void 0,
      icon: (0, l.jsx)(i.Tooltip, {
        text: p.default.Messages.COLLECTIBLES_PREMIUM_DISCOUNT_TOOLTIP_TEXT,
        "aria-label": p.default.Messages.COLLECTIBLES_NITRO_EXCLUSIVE,
        disableTooltipPointerEvents: s,
        children: e => {
          let {
            ...t
          } = e;
          return (0, l.jsx)(d.default, {
            ...t,
            className: r(g.premiumIcon, {
              [g.fullPrice]: S
            }),
            color: h || b ? "white" : "black"
          })
        }
      })
    })]
  })
}