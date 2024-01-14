"use strict";
r.r(t), r.d(t, {
  default: function() {
    return a
  }
});
var a, n = r("407788");
a = class e extends n.default {
  static fromServer(t) {
    let {
      purchased_at: r,
      purchase_type: a,
      ...n
    } = t;
    return new e({
      ...super.fromServer(n),
      purchaseType: a,
      purchasedAt: null != r ? new Date(r) : r
    })
  }
  constructor(e) {
    super(e), this.purchasedAt = e.purchasedAt, this.purchaseType = e.purchaseType
  }
}