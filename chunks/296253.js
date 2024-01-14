"use strict";
i.r(n), i.d(n, {
  default: function() {
    return a
  }
});
var t = i("446674"),
  r = i("357957"),
  l = i("521012");

function a() {
  let e = (0, t.useStateFromStores)([l.default], () => l.default.getPremiumTypeSubscription()),
    n = (0, t.useStateFromStores)([r.default], () => {
      var n;
      return (null == e ? void 0 : e.paymentSourceId) != null ? null === (n = r.default.getPaymentSource(e.paymentSourceId)) || void 0 === n ? void 0 : n.country : null
    });
  return n
}