"use strict";
n.r(t), n.d(t, {
  useTrackLocalizedPricingPromoImpression: function() {
    return s
  }
});
var i = n("759843"),
  r = n("428958");

function s(e, t) {
  (0, r.default)({
    type: i.ImpressionTypes.VIEW,
    name: i.ImpressionNames.LOCALIZED_PRICING_UPSELL_VIEWED,
    properties: {
      country_code: t,
      action_location: e
    }
  })
}