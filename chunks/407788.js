"use strict";
r.r(t), r.d(t, {
  default: function() {
    return u
  }
}), r("808653"), r("794252"), r("424973");
var u, l = r("506838"),
  n = r("265586"),
  i = r("797647"),
  s = r("730297"),
  o = r("792382"),
  a = r("806410"),
  c = r("49111");
u = class e extends o.default {
  static fromServer(t) {
    var r;
    let {
      type: u,
      premium_type: o,
      category_sku_id: d,
      prices: E,
      ...C
    } = t;
    return new e({
      ...super.fromServer(C),
      type: u,
      premiumType: o === c.PREMIUM_TYPE_NONE ? null : o,
      categorySkuId: d,
      prices: null == (r = E) ? {} : Object.keys(r).reduce((e, t) => {
        if (null == r) return e;
        let u = r[t];
        return e[t] = {
          countryPrices: {
            countryCode: u.country_prices.country_code,
            prices: u.country_prices.prices.map(e => (0, i.getPriceFromServer)(e, !0))
          },
          paymentSourcePrices: {}
        }, e
      }, {}),
      items: C.items.reduce((e, t) => (0, l.match)(t).with({
        type: n.CollectiblesItemType.AVATAR_DECORATION
      }, t => (e.push(s.default.fromServer(t)), e)).with({
        type: n.CollectiblesItemType.PROFILE_EFFECT
      }, t => (e.push(a.default.fromServer(t)), e)).otherwise(() => e), [])
    })
  }
  constructor(e) {
    super(e), this.summary = e.summary, this.type = e.type, this.premiumType = e.premiumType, this.items = e.items, this.categorySkuId = e.categorySkuId, this.prices = e.prices
  }
}