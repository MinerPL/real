"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var u = n("884691"),
  r = n("446674"),
  i = n("913144"),
  a = n("850068"),
  l = n("271938"),
  o = n("160299"),
  s = n("357957");

function c() {
  let e = (0, r.useStateFromStores)([s.default], () => s.default.getDefaultBillingCountryCode()),
    t = (0, r.useStateFromStores)([o.default], () => o.default.ipCountryCode),
    n = (0, r.useStateFromStores)([l.default], () => l.default.isAuthenticated());
  return u.useEffect(() => {
    i.default.wait(() => {
      n && !o.default.isPaymentSourceFetching && !s.default.hasFetchedPaymentSources && a.fetchPaymentSources()
    })
  }, [n]), u.useEffect(() => {
    n && !o.default.ipCountryCodeLoaded && a.fetchIpCountryCode()
  }, [t, n]), {
    defaultBillingCountryCode: e,
    ipCountryCode: t
  }
}