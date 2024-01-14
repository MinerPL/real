"use strict";
a.r(t), a.d(t, {
  usePurchasedProductsSort: function() {
    return n
  }
}), a("222007"), a("424973");
var l = a("884691"),
  s = a("65597"),
  r = a("775416");
let n = e => {
  let t = (0, s.default)([r.default], () => r.default.purchases),
    a = (0, l.useMemo)(() => {
      let a = [],
        l = [];
      for (let s of e.values()) void 0 !== t.get(s.skuId) ? a.push(s) : l.push(s);
      return l.concat(a)
    }, [e, t]);
  return a
}