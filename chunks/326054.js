"use strict";
n.r(t), n.d(t, {
  Section: function() {
    return l
  },
  NONE_ITEM: function() {
    return C
  },
  SHOP_ITEM: function() {
    return E
  },
  default: function() {
    return p
  }
}), n("222007"), n("808653"), n("424973");
var l, i, r = n("884691"),
  s = n("917351"),
  a = n("65597"),
  o = n("853987"),
  c = n("775416"),
  u = n("491232"),
  d = n("697218"),
  f = n("719923"),
  h = n("782340");
(i = l || (l = {})).PURCHASE = "purchase", i.PREMIUM_PURCHASE = "premium_purchase", i.PREVIEW = "preview";
let C = {
    id: "None"
  },
  E = {
    id: "Shop"
  };
var p = () => {
  let e = (0, a.default)([d.default], () => d.default.getCurrentUser()),
    t = f.default.canUseCollectibles(e),
    n = (0, a.default)([c.default], () => c.default.purchases),
    [l, i] = (0, a.useStateFromStoresArray)([o.default], () => [o.default.categories, o.default.products]);
  return (0, r.useMemo)(() => {
    let e = (0, s.uniqBy)([...(0, u.getProfileEffectsFromPurchases)(n), ...(0, u.getProfileEffectsFromCategories)(l)], "id"),
      r = e.reduce((e, l) => {
        let r = n.get(l.skuId),
          s = (0, u.isPremiumCollectiblesPurchase)(r);
        if (s) return e.premium_purchase.push(l), e;
        if (null != r) return e.purchase.push(l), e;
        if (!t && (0, u.isPremiumCollectiblesProduct)(i.get(l.skuId))) {
          let t = e.premium_purchase;
          return t.push(l), e
        }
        return e.preview.push(l), e
      }, {
        purchase: [],
        premium_purchase: [],
        preview: []
      });
    return [{
      section: "purchase",
      items: [C, E, ...r.purchase],
      height: 12,
      header: h.default.Messages.CHANGE_DECORATION_MODAL_PURCHASE_HEADER
    }, {
      section: "premium_purchase",
      items: r.premium_purchase,
      height: 12,
      header: h.default.Messages.CHANGE_DECORATION_MODAL_PREMIUM_STARTER_HEADER
    }, {
      section: "preview",
      items: r.preview,
      height: 12,
      header: h.default.Messages.PROFILE_EFFECT_MODAL_SHOP_PREVIEW_HEADER
    }].filter(e => {
      let {
        items: t
      } = e;
      return t.length > 0
    })
  }, [l, i, n, t])
}