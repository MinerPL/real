"use strict";
let n, i;
r.r(e), r.d(e, {
  default: function() {
    return I
  }
}), r("222007");
var o = r("917351"),
  u = r("446674"),
  l = r("913144"),
  a = r("915639"),
  T = r("491232");
let c = new Map,
  E = new Map,
  s = c,
  _ = E,
  S = !1;
let d = () => {
  s = c, _ = E, i = void 0, S = !1, n = void 0
};
class C extends u.default.Store {
  initialize() {
    this.syncWith([a.default], d)
  }
  get isFetching() {
    return S
  }
  get error() {
    return n
  }
  get lastFetched() {
    return i
  }
  get categories() {
    return s
  }
  get products() {
    return _
  }
  getCategory(t) {
    return null != t ? s.get(t) : void 0
  }
  getProduct(t) {
    return null != t ? _.get(t) : void 0
  }
  getCategoryForProduct(t) {
    let e = this.getProduct(t);
    return this.getCategory(null == e ? void 0 : e.categorySkuId)
  }
}
C.displayName = "CollectiblesCategoryStore";
var I = new C(l.default, {
  COLLECTIBLES_CATEGORIES_FETCH: t => {
    S = !0, n = void 0
  },
  COLLECTIBLES_CATEGORIES_FETCH_SUCCESS: t => {
    0 === t.categories.length ? (s = c, _ = E) : !(0, o.isEqual)([...s.values()], t.categories) && (s = new Map(t.categories.map(t => [t.skuId, t])), _ = new Map((0, T.getProductsFromCategories)(s).map(t => [t.skuId, t]))), i = Date.now(), S = !1, n = void 0
  },
  COLLECTIBLES_CATEGORIES_FETCH_FAILURE: t => {
    let {
      error: e
    } = t;
    s = c, _ = E, S = !1, n = e
  },
  COLLECTIBLES_PRODUCT_FETCH: t => {
    S = !0, n = void 0
  },
  COLLECTIBLES_PRODUCT_FETCH_SUCCESS: t => {
    _.set(t.product.skuId, t.product), S = !1, n = void 0
  },
  COLLECTIBLES_PRODUCT_FETCH_FAILURE: t => {
    let {
      error: e
    } = t;
    S = !1, n = e
  },
  LOGOUT: d
})