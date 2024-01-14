"use strict";
r.r(t), r.d(t, {
  default: function() {
    return a
  }
});
var a, n = r("666038");
a = class e extends n.default {
  static fromServer(t) {
    let {
      store_listing_id: r,
      sku_id: a,
      unpublished_at: n,
      ...s
    } = t, u = null != n ? new Date(n) : null;
    return new e({
      ...s,
      storeListingId: r,
      skuId: a,
      unpublishedAt: u
    })
  }
  constructor(e) {
    super(), this.storeListingId = e.storeListingId, this.skuId = e.skuId, this.name = e.name, this.summary = e.summary, this.banner = e.banner, this.unpublishedAt = e.unpublishedAt
  }
}