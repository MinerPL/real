"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  }
}), n("222007");
var l = n("884691"),
  r = n("446674"),
  i = n("850068"),
  s = n("357957");

function a(e) {
  let {
    isGift: t,
    activeSubscription: n
  } = e, {
    defaultPaymentSourceId: a,
    paymentSources: o,
    hasFetchedPaymentSources: u
  } = (0, r.useStateFromStoresObject)([s.default], () => ({
    defaultPaymentSourceId: s.default.defaultPaymentSourceId,
    paymentSources: s.default.paymentSources,
    hasFetchedPaymentSources: s.default.hasFetchedPaymentSources
  })), c = (e, t, n) => e || (null == t ? void 0 : t.paymentSourceId) == null ? n : t.paymentSourceId, [d, f] = l.useState(() => c(t, n, a));
  return l.useEffect(() => {
    u ? f(c(t, n, a)) : (0, i.fetchPaymentSources)()
  }, [u, t, n, a]), {
    paymentSources: o,
    hasPaymentSources: Object.keys(o).length > 0,
    paymentSourceId: d,
    setPaymentSourceId: f,
    hasFetchedPaymentSources: u
  }
}