            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return a
                }
            }), r("808653"), r("794252"), r("424973");
            var a, n = r("506838"),
                s = r("265586"),
                i = r("797647"),
                u = r("730297"),
                l = r("792382"),
                o = r("806410");
            a = class e extends l.default {
                static fromServer(t) {
                    var r;
                    let {
                        currency: a,
                        price: l,
                        prices: c,
                        type: d,
                        category_sku_id: E,
                        ..._
                    } = t;
                    return new e({
                        ...super.fromServer(_),
                        currency: a,
                        price: l,
                        prices: null == (r = c) ? {} : Object.keys(r).reduce((e, t) => {
                            if (null == r) return e;
                            let a = r[t];
                            return e[t] = {
                                countryPrices: {
                                    countryCode: a.country_prices.country_code,
                                    prices: a.country_prices.prices.map(e => (0, i.getPriceFromServer)(e, !0))
                                },
                                paymentSourcePrices: {}
                            }, e
                        }, {}),
                        type: d,
                        categorySkuId: E,
                        items: _.items.reduce((e, t) => (0, n.match)(t).with({
                            type: s.CollectiblesItemType.AVATAR_DECORATION
                        }, t => (e.push(u.default.fromServer(t)), e)).with({
                            type: s.CollectiblesItemType.PROFILE_EFFECT
                        }, t => (e.push(o.default.fromServer(t)), e)).otherwise(() => e), [])
                    })
                }
                constructor(e) {
                    super(e), this.currency = e.currency, this.price = e.price, this.prices = e.prices, this.summary = e.summary, this.type = e.type, this.items = e.items, this.categorySkuId = e.categorySkuId
                }
            }