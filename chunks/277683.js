"use strict";
n.r(t), n.d(t, {
  getGuildProductPurchaseSystemMessageContentMobile: function() {
    return l
  }
});
var s = n("782340");

function l(e) {
  let {
    username: t,
    usernameOnClickHandler: n,
    productName: l
  } = e;
  return s.default.Messages.SYSTEM_MESSAGE_GUILD_PRODUCT_PURCHASE_MOBILE.astFormat({
    username: t,
    usernameHook: n,
    productName: l
  })
}