"use strict";
n.r(t), n.d(t, {
  usePurchaseTokenAuthStep: function() {
    return i
  }
});
var l = n("884691"),
  u = n("85336"),
  a = n("467292");

function i(e, t, n) {
  l.useEffect(() => {
    null != e && e !== u.Step.AWAITING_PURCHASE_TOKEN_AUTH && t === a.PurchaseTokenAuthState.PENDING ? n(u.Step.AWAITING_PURCHASE_TOKEN_AUTH) : e === u.Step.AWAITING_PURCHASE_TOKEN_AUTH && t === a.PurchaseTokenAuthState.SUCCESS && n(u.Step.REVIEW)
  }, [e, t, n])
}