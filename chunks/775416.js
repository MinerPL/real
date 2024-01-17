"use strict";
let u, l, n;
r.r(t), r.d(t, {
  default: function() {
    return C
  }
}), r("222007");
var i = r("917351"),
  s = r("446674"),
  a = r("913144");
let c = new Map,
  o = c,
  d = !1;
class E extends s.default.Store {
  get isFetching() {
    return d
  }
  get isClaiming() {
    return u
  }
  get purchases() {
    return o
  }
  get fetchError() {
    return l
  }
  get claimError() {
    return n
  }
  getPurchase(e) {
    return null != e ? o.get(e) : void 0
  }
}
E.displayName = "CollectiblesPurchaseStore";
var C = new E(a.default, {
  COLLECTIBLES_PURCHASES_FETCH: e => {
    d = !0, l = void 0
  },
  COLLECTIBLES_PURCHASES_FETCH_SUCCESS: e => {
    0 === e.purchases.length ? o = c : !(0, i.isEqual)([...o.values()], e.purchases) && (o = new Map(e.purchases.map(e => [e.skuId, e]))), d = !1, l = void 0
  },
  COLLECTIBLES_PURCHASES_FETCH_FAILURE: e => {
    let {
      error: t
    } = e;
    o = c, d = !1, l = t
  },
  COLLECTIBLES_CLAIM: e => {
    u = e.skuId, n = void 0
  },
  COLLECTIBLES_CLAIM_SUCCESS: e => {
    null == e.purchases || 0 === e.purchases.length ? o = c : !(0, i.isEqual)([...o.values()], e.purchases) && (o = new Map(e.purchases.map(e => [e.skuId, e]))), u = void 0, n = void 0
  },
  COLLECTIBLES_CLAIM_FAILURE: e => {
    let {
      error: t,
      skuId: r
    } = e;
    u = r, n = t
  },
  LOGOUT: e => {
    o = c, d = !1, u = void 0, l = void 0, n = void 0
  }
})