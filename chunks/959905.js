"use strict";
n.r(t), n.d(t, {
  useLocalizedPromoQuery: function() {
    return s
  }
});
var i = n("446674"),
  r = n("160299");

function s() {
  let {
    localizedPricingPromo: e,
    hasError: t
  } = (0, i.useStateFromStoresObject)([r.default], () => ({
    localizedPricingPromo: r.default.localizedPricingPromo,
    hasError: r.default.localizedPricingPromoHasError
  }));
  return t ? null : e
}