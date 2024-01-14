"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var i = n("884691"),
  r = n("446674"),
  u = n("913144"),
  a = n("850068"),
  l = n("271938"),
  s = n("160299"),
  o = n("357957");

function c() {
  let e = (0, r.useStateFromStores)([o.default], () => o.default.getDefaultBillingCountryCode()),
    t = (0, r.useStateFromStores)([s.default], () => s.default.ipCountryCode),
    n = (0, r.useStateFromStores)([l.default], () => l.default.isAuthenticated());
  return i.useEffect(() => {
    u.default.wait(() => {
      n && !s.default.isPaymentSourceFetching && !o.default.hasFetchedPaymentSources && a.fetchPaymentSources()
    })
  }, [n]), i.useEffect(() => {
    n && !s.default.ipCountryCodeLoaded && a.fetchIpCountryCode()
  }, [t, n]), {
    defaultBillingCountryCode: e,
    ipCountryCode: t
  }
}