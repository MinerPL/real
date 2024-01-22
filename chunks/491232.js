"use strict";
r.r(e), r.d(e, {
  isPremiumCollectiblesProduct: function() {
    return c
  },
  isPremiumCollectiblesPurchase: function() {
    return E
  },
  getFormattedPriceForCollectiblesProduct: function() {
    return s
  },
  extractPriceByPurchaseTypes: function() {
    return _
  },
  isFreeCollectiblesProduct: function() {
    return d
  },
  getProductsFromCategories: function() {
    return S
  },
  getAvatarDecorationsFromPurchases: function() {
    return f
  },
  getAvatarDecorationsFromCategories: function() {
    return A
  },
  getCollectiblesAssetURL: function() {
    return v
  },
  getProfileEffectsFromPurchases: function() {
    return N
  },
  getProfileEffectsFromCategories: function() {
    return O
  },
  groupProfileEffects: function() {
    return R
  },
  isCollectiblesGiftCode: function() {
    return P
  }
}), r("222007");
var n = r("917351"),
  i = r("265586"),
  o = r("407063"),
  u = r("153160"),
  l = r("730297"),
  a = r("806410"),
  T = r("49111");
let c = t => (null == t ? void 0 : t.premiumType) != null,
  E = t => (null == t ? void 0 : t.purchaseType) === T.EntitlementTypes.PREMIUM_PURCHASE,
  s = (t, e) => {
    let r = _(t, e ? T.PriceSetAssignmentPurchaseTypes.PREMIUM_TIER_2 : T.PriceSetAssignmentPurchaseTypes.DEFAULT);
    return null == r ? "" : (0, u.formatPrice)(null == r ? void 0 : r.amount, null == r ? void 0 : r.currency)
  },
  _ = (t, e) => {
    var r, n, i;
    let o = null !== (i = t.prices[e]) && void 0 !== i ? i : null;
    return null == o ? null : null === (n = o.countryPrices) || void 0 === n ? void 0 : null === (r = n.prices) || void 0 === r ? void 0 : r[0]
  },
  d = t => {
    var e;
    return (null === (e = _(t, T.PriceSetAssignmentPurchaseTypes.DEFAULT)) || void 0 === e ? void 0 : e.amount) === 0
  },
  S = t => {
    let e = (0, n.flatMap)([...t.values()], "products");
    return (0, n.uniqBy)(e, "storeListingId")
  },
  C = (t, e) => {
    if (e === i.CollectiblesItemType.AVATAR_DECORATION) {
      let e = (0, n.flatMap)([...t.values()], "items").filter(l.isAvatarDecorationRecord);
      return (0, n.uniqBy)(e, "id")
    }
    if (e === i.CollectiblesItemType.PROFILE_EFFECT) {
      let e = (0, n.flatMap)([...t.values()], "items").filter(a.isProfileEffectRecord);
      return (0, n.uniqBy)(e, "id")
    }
  },
  I = (t, e) => {
    let r = S(t);
    if (e === i.CollectiblesItemType.AVATAR_DECORATION) {
      let t = (0, n.flatMap)(r, "items").filter(l.isAvatarDecorationRecord);
      return (0, n.uniqBy)(t, "id")
    }
    if (e === i.CollectiblesItemType.PROFILE_EFFECT) {
      let t = (0, n.flatMap)(r, "items").filter(a.isProfileEffectRecord);
      return (0, n.uniqBy)(t, "id")
    }
  },
  f = t => C(t, i.CollectiblesItemType.AVATAR_DECORATION),
  A = t => I(t, i.CollectiblesItemType.AVATAR_DECORATION),
  v = (t, e) => {
    var r;
    let {
      CDN_HOST: n,
      API_ENDPOINT: i
    } = window.GLOBAL_ENV, u = (0, o.getBestMediaProxySize)(e.size * (0, o.getDevicePixelRatio)()), l = null !== (r = null == e ? void 0 : e.format) && void 0 !== r ? r : "png";
    if (null != n) return "".concat(location.protocol, "//").concat(n, "/app-assets/").concat(T.COLLECTIBLES_APPLICATION_ID, "/").concat(t, ".").concat(l, "?size=").concat(u);
    let a = T.Endpoints.APPLICATION_ASSET(T.COLLECTIBLES_APPLICATION_ID, t, l);
    return "".concat(location.protocol).concat(i).concat(a, "?size=").concat(u)
  },
  N = t => C(t, i.CollectiblesItemType.PROFILE_EFFECT),
  O = t => I(t, i.CollectiblesItemType.PROFILE_EFFECT),
  R = (t, e) => {
    let r = N(e),
      n = O(t).filter(t => {
        let {
          id: e
        } = t;
        return !r.some(t => t.id === e)
      });
    return {
      purchased: r,
      shopPreviews: n
    }
  },
  P = t => t.applicationId === T.COLLECTIBLES_APPLICATION_ID