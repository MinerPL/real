"use strict";
r.r(t), r.d(t, {
  Section: function() {
    return a
  },
  NONE_ITEM: function() {
    return f
  },
  SHOP_ITEM: function() {
    return A
  },
  default: function() {
    return m
  }
}), r("222007"), r("808653"), r("424973");
var a, n, i = r("884691"),
  s = r("917351"),
  u = r("65597"),
  l = r("853987"),
  o = r("775416"),
  c = r("491232"),
  d = r("697218"),
  E = r("719923"),
  _ = r("782340");
(n = a || (a = {})).PURCHASE = "purchase", n.PREMIUM_PURCHASE = "premium_purchase", n.PREVIEW = "preview", n.PREMIUM_PREVIEW = "premium_preview";
let f = {
    id: "None"
  },
  A = {
    id: "Shop"
  };
var m = () => {
  let e = (0, u.default)([d.default], () => d.default.getCurrentUser()),
    t = E.default.canUseCollectibles(e),
    r = (0, u.default)([o.default], () => o.default.purchases),
    [a, n] = (0, u.useStateFromStoresArray)([l.default], () => [l.default.categories, l.default.products]);
  return (0, i.useMemo)(() => {
    let e = (0, s.uniqBy)([...(0, c.getAvatarDecorationsFromPurchases)(r), ...(0, c.getAvatarDecorationsFromCategories)(a)], "id"),
      i = e.reduce((e, a) => {
        let i = r.get(a.skuId),
          s = (0, c.isPremiumCollectiblesPurchase)(i);
        if (s && 0 === e.premium_purchase.length && (e.premium_purchase = e.premium_preview, e.premium_preview = []), s) return e.premium_purchase.push(a), e;
        if (null != i) return e.purchase.push(a), e;
        if (!t && (0, c.isPremiumCollectiblesProduct)(n.get(a.skuId))) {
          let t = e.premium_purchase.length > 0 ? e.premium_purchase : e.premium_preview;
          return t.push(a), e
        }
        return e.preview.push(a), e
      }, {
        purchase: [],
        premium_purchase: [],
        preview: [],
        premium_preview: []
      });
    return [{
      section: "purchase",
      items: [f, A, ...i.purchase],
      height: 12,
      header: _.default.Messages.CHANGE_DECORATION_MODAL_PURCHASE_HEADER
    }, {
      section: i.premium_purchase.length > 0 ? "premium_purchase" : "premium_preview",
      items: i.premium_purchase.length > 0 ? i.premium_purchase : i.premium_preview,
      height: 12,
      header: _.default.Messages.CHANGE_DECORATION_MODAL_PREMIUM_STARTER_HEADER
    }, {
      section: "preview",
      items: i.preview,
      height: 12,
      header: _.default.Messages.PROFILE_EFFECT_MODAL_SHOP_PREVIEW_HEADER
    }].filter(e => {
      let {
        items: t
      } = e;
      return t.length > 0
    })
  }, [a, n, r, t])
}