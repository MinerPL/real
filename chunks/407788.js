"use strict";
r.r(t), r.d(t, {
  default: function() {
    return a
  }
}), r("808653"), r("794252"), r("424973");
var a, n = r("506838"),
  s = r("265586"),
  u = r("797647"),
  i = r("730297"),
  l = r("792382"),
  o = r("806410");
a = class e extends l.default {
  static fromServer(t) {
    var r;
    let {
      type: a,
      category_sku_id: l,
      prices: c,
      ...d
    } = t;
    return new e({
      ...super.fromServer(d),
      type: a,
      categorySkuId: l,
      prices: null == (r = c) ? {} : Object.keys(r).reduce((e, t) => {
        if (null == r) return e;
        let a = r[t];
        return e[t] = {
          countryPrices: {
            countryCode: a.country_prices.country_code,
            prices: a.country_prices.prices.map(e => (0, u.getPriceFromServer)(e, !0))
          },
          paymentSourcePrices: {}
        }, e
      }, {}),
      items: d.items.reduce((e, t) => (0, n.match)(t).with({
        type: s.CollectiblesItemType.AVATAR_DECORATION
      }, t => (e.push(i.default.fromServer(t)), e)).with({
        type: s.CollectiblesItemType.PROFILE_EFFECT
      }, t => (e.push(o.default.fromServer(t)), e)).otherwise(() => e), [])
    })
  }
  constructor(e) {
    super(e), this.summary = e.summary, this.type = e.type, this.items = e.items, this.categorySkuId = e.categorySkuId, this.prices = e.prices
  }
}