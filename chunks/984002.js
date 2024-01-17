"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  }
}), n("222007");
var u = n("65597"),
  r = n("853987"),
  i = n("775416"),
  a = e => {
    let [t, n] = (0, u.useStateFromStoresArray)([r.default], () => [r.default.getCategoryForProduct(e), r.default.getProduct(e)]), a = (0, u.default)([i.default], () => i.default.getPurchase(e));
    return {
      category: t,
      product: n,
      purchase: a
    }
  }