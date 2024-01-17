"use strict";
r.r(t), r.d(t, {
  default: function() {
    return u
  }
});
var u, l = r("666038");
u = class e extends l.default {
  static fromServer(t) {
    let {
      store_listing_id: r,
      sku_id: u,
      unpublished_at: l,
      ...n
    } = t, i = null != l ? new Date(l) : null;
    return new e({
      ...n,
      storeListingId: r,
      skuId: u,
      unpublishedAt: i
    })
  }
  constructor(e) {
    super(), this.storeListingId = e.storeListingId, this.skuId = e.skuId, this.name = e.name, this.summary = e.summary, this.banner = e.banner, this.unpublishedAt = e.unpublishedAt
  }
}