"use strict";
let n, i;
r.r(e), r.d(e, {
  default: function() {
    return d
  }
}), r("222007");
var o = r("917351"),
  u = r("446674"),
  l = r("913144"),
  a = r("491232");
let T = new Map,
  c = new Map,
  E = T,
  s = c,
  _ = !1;
class S extends u.default.Store {
  get isFetching() {
    return _
  }
  get error() {
    return n
  }
  get lastFetched() {
    return i
  }
  get categories() {
    return E
  }
  get products() {
    return s
  }
  getCategory(t) {
    return null != t ? E.get(t) : void 0
  }
  getProduct(t) {
    return null != t ? s.get(t) : void 0
  }
  getCategoryForProduct(t) {
    let e = this.getProduct(t);
    return this.getCategory(null == e ? void 0 : e.categorySkuId)
  }
}
S.displayName = "CollectiblesCategoryStore";
var d = new S(l.default, {
  COLLECTIBLES_CATEGORIES_FETCH: t => {
    _ = !0, n = void 0
  },
  COLLECTIBLES_CATEGORIES_FETCH_SUCCESS: t => {
    0 === t.categories.length ? (E = T, s = c) : !(0, o.isEqual)([...E.values()], t.categories) && (E = new Map(t.categories.map(t => [t.skuId, t])), s = new Map((0, a.getProductsFromCategories)(E).map(t => [t.skuId, t]))), i = Date.now(), _ = !1, n = void 0
  },
  COLLECTIBLES_CATEGORIES_FETCH_FAILURE: t => {
    let {
      error: e
    } = t;
    E = T, s = c, _ = !1, n = e
  },
  COLLECTIBLES_PRODUCT_FETCH: t => {
    _ = !0, n = void 0
  },
  COLLECTIBLES_PRODUCT_FETCH_SUCCESS: t => {
    s.set(t.product.skuId, t.product), _ = !1, n = void 0
  },
  COLLECTIBLES_PRODUCT_FETCH_FAILURE: t => {
    let {
      error: e
    } = t;
    _ = !1, n = e
  },
  LOGOUT: t => {
    E = T, s = c, i = void 0, _ = !1, n = void 0
  }
})