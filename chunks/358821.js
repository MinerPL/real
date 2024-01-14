"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var i = n("37983");
n("884691");
var r = n("641078"),
  s = n("132554"),
  l = n("646718"),
  a = n("782340"),
  u = n("880865"),
  o = e => {
    let {
      isGift: t,
      plan: n
    } = e, o = (0, r.useIsEligibleForBogoPromotion)();
    return t || (null == n ? void 0 : n.skuId) !== l.PremiumSubscriptionSKUs.TIER_2 || !o ? null : (0, i.jsx)(s.default, {
      copy: a.default.Messages.BOGO_ANNOUNCEMENT_MODAL_UPGRADE_HEADER,
      bannerImage: u
    })
  }