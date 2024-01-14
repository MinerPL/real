"use strict";
n.r(t), n.d(t, {
  useLocalizedPromoQuery: function() {
    return s
  }
});
var r = n("446674"),
  i = n("160299");

function s() {
  let {
    localizedPricingPromo: e,
    hasError: t
  } = (0, r.useStateFromStoresObject)([i.default], () => ({
    localizedPricingPromo: i.default.localizedPricingPromo,
    hasError: i.default.localizedPricingPromoHasError
  }));
  return t ? null : e
}