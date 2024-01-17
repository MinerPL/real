"use strict";
r.r(t), r.d(t, {
  default: function() {
    return u
  }
});
var u, l = r("407788");
u = class e extends l.default {
  static fromServer(t) {
    let {
      purchased_at: r,
      purchase_type: u,
      ...l
    } = t;
    return new e({
      ...super.fromServer(l),
      purchaseType: u,
      purchasedAt: null != r ? new Date(r) : r
    })
  }
  constructor(e) {
    super(e), this.purchasedAt = e.purchasedAt, this.purchaseType = e.purchaseType
  }
}