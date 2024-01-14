"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  }
});
var r = n("884691"),
  u = n("627445"),
  s = n.n(u),
  l = n("642906"),
  i = n("134666"),
  o = n("273093");

function a(e) {
  let {
    handleClose: t
  } = e, {
    guildProductListing: n,
    guildId: u
  } = (0, o.useGuildProductPurchaseContext)(), {
    selectedSkuPricePreview: a
  } = (0, l.usePaymentContext)();
  return r.useEffect(() => {
    s(null != a, "selectedSkuPricePreview cannot be null"), (0, i.openGuildProductPurchaseConfirmationModal)({
      guildId: u,
      guildProductListingId: n.id,
      skuPricePreview: a
    }), t()
  }, []), null
}