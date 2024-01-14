"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
});
var i = n("37983");
n("884691");
var r = n("414456"),
  l = n.n(r),
  s = n("446674"),
  a = n("77078"),
  o = n("10514"),
  u = n("719923"),
  d = n("646718"),
  c = n("449001"),
  m = function(e) {
    let {
      subscriptionTier: t,
      interval: n = d.SubscriptionIntervalTypes.MONTH,
      className: r,
      isGift: m = !1
    } = e, f = (0, s.useStateFromStores)([o.default], () => o.default.isLoadedForPremiumSKUs());
    if (!f) return (0, i.jsx)(a.Spinner, {
      type: a.Spinner.Type.PULSING_ELLIPSIS,
      className: c.priceSpinner
    });
    let _ = o.default.getForSkuAndInterval(t, n),
      E = null != _ ? (0, u.getFormattedPriceForPlan)(_, void 0, !1, m) : null;
    return (0, i.jsxs)(a.Heading, {
      color: "always-white",
      variant: "heading-md/medium",
      className: l(c.pricePerInterval, r),
      children: [(0, i.jsx)("span", {
        className: c.price,
        children: E
      }), " / ", (0, u.getIntervalStringAsNoun)(n)]
    })
  }