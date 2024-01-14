"use strict";
a.r(t), a.d(t, {
  getBillingAddressLayout: function() {
    return l
  },
  getOverrideBillingAddressLayout: function() {
    return d
  }
});
var o = a("394846"),
  n = a("18502"),
  s = a("49111");
let l = e => [s.PaymentSourceTypes.CARD, s.PaymentSourceTypes.VENMO].includes(e.type) && "US" === e.country ? o.isMobile ? n.default.Layouts.SETTINGS_US_MOBILE : n.default.Layouts.SETTINGS_US : e.type === s.PaymentSourceTypes.CARD && "US" !== e.country ? o.isMobile ? n.default.Layouts.SETTINGS_INTL_MOBILE : n.default.Layouts.SETTINGS_INTL : o.isMobile ? n.default.Layouts.SETTINGS_INTL_NO_NAME_MOBILE : n.default.Layouts.SETTINGS_INTL_NO_NAME,
  d = o.isMobile ? n.default.Layouts.SETTINGS_US_MOBILE : n.default.Layouts.SETTINGS_US