"use strict";
r.r(t), r.d(t, {
  default: function() {
    return u
  }
});
var u, l = r("656280"),
  n = r.n(l),
  s = r("509043"),
  i = r("666038");
let o = e => null == e ? e : {
  backgroundColors: e.background_colors.map(e => n((0, s.int2hex)(e))),
  buttonColors: e.button_colors.map(e => n((0, s.int2hex)(e))),
  confettiColors: e.confetti_colors.map(e => n((0, s.int2hex)(e)))
};
u = class e extends i.default {
  static fromServer(t) {
    let {
      store_listing_id: r,
      sku_id: u,
      unpublished_at: l,
      styles: n,
      ...s
    } = t, i = null != l ? new Date(l) : null;
    return new e({
      ...s,
      storeListingId: r,
      skuId: u,
      unpublishedAt: i,
      styles: o(n)
    })
  }
  constructor(e) {
    super(), this.storeListingId = e.storeListingId, this.skuId = e.skuId, this.name = e.name, this.summary = e.summary, this.banner = e.banner, this.unpublishedAt = e.unpublishedAt, this.styles = e.styles
  }
}