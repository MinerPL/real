"use strict";
let u;
r.r(t), r.d(t, {
  default: function() {
    return d
  }
});
var l = r("446674"),
  n = r("913144");
let i = [],
  s = i,
  a = null,
  c = e => {
    s = i, a = null
  };
class o extends l.default.Store {
  get analyticsLocations() {
    return s
  }
  get analyticsSource() {
    return a
  }
  get initialProductSkuId() {
    return u
  }
  getAnalytics() {
    return {
      analyticsLocations: s,
      analyticsSource: a
    }
  }
}
o.displayName = "CollectiblesShopStore";
var d = new o(n.default, {
  COLLECTIBLES_SHOP_OPEN: e => {
    var t, r;
    s = null !== (t = e.analyticsLocations) && void 0 !== t ? t : i, a = null !== (r = e.analyticsSource) && void 0 !== r ? r : null, u = e.initialProductSkuId
  },
  COLLECTIBLES_SHOP_CLOSE: c,
  COLLECTIBLES_PRODUCT_DETAILS_OPEN: e => {
    e.item.skuId === u && (u = void 0)
  },
  LOGOUT: c
})