"use strict";
n.r(t), n.d(t, {
  useProductType: function() {
    return l
  },
  usePrice: function() {
    return o
  }
});
var r = n("884691"),
  i = n("153160"),
  u = n("782340");

function l(e) {
  return r.useMemo(() => {
    if (null == e) return;
    let t = null != e.role_id,
      n = e.attachments_count > 0;
    if (t && n) return u.default.Messages.GUILD_PRODUCT_CARD_TYPE_DOWNLOADABLE_AND_ROLE;
    if (t) return u.default.Messages.GUILD_PRODUCT_CARD_TYPE_ROLE;
    if (n) return u.default.Messages.GUILD_PRODUCT_CARD_TYPE_DOWNLOADABLE
  }, [e])
}

function o(e) {
  return r.useMemo(() => {
    if ((null == e ? void 0 : e.price) == null) return;
    let {
      amount: t,
      currency: n
    } = e.price;
    return (0, i.formatPrice)(t, n)
  }, [e])
}