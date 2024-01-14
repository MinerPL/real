"use strict";
s.r(t), s.d(t, {
  getPaymentPayoutGroups: function() {
    return l
  }
});
var a = s("872717"),
  n = s("49111");
let l = async (e, t) => {
  let s = await a.default.get({
    url: n.Endpoints.PAYMENT_PAYOUT_GROUPS(e),
    query: t
  });
  return s.body
}