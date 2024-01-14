"use strict";
var a, n, i, r, l, u;
s.r(t), s.d(t, {
  RefundReason: function() {
    return a
  },
  PremiumRefundDisqualificationReason: function() {
    return n
  },
  AdyenResultCodes: function() {
    return i
  }
}), (r = a || (a = {}))[r.OTHER = 0] = "OTHER", r[r.GIFTING_REFUND = 1] = "GIFTING_REFUND", r[r.BUYERS_REMORSE = 2] = "BUYERS_REMORSE", r[r.WRONG_PURCHASE = 3] = "WRONG_PURCHASE", r[r.FORGOT_TO_CANCEL = 4] = "FORGOT_TO_CANCEL", r[r.SERVER_BOOSTING_COOLDOWN = 5] = "SERVER_BOOSTING_COOLDOWN", r[r.USER_CONFUSION = 6] = "USER_CONFUSION", r[r.WANT_TO_SWITCH_TIERS = 7] = "WANT_TO_SWITCH_TIERS", r[r.DONT_NEED = 8] = "DONT_NEED", (l = n || (n = {}))[l.OTHER = 0] = "OTHER", l[l.ALREADY_REFUNDED = 1] = "ALREADY_REFUNDED", l[l.NOT_USER_REFUNDABLE_TYPE = 2] = "NOT_USER_REFUNDABLE_TYPE", l[l.PAST_REFUNDABLE_DATE = 3] = "PAST_REFUNDABLE_DATE", l[l.ENTITLEMENT_ALREADY_CONSUMED = 4] = "ENTITLEMENT_ALREADY_CONSUMED", l[l.ALREADY_REFUNDED_PREMIUM = 5] = "ALREADY_REFUNDED_PREMIUM", l[l.ALREADY_REFUNDED_PREMIUM_GUILD = 6] = "ALREADY_REFUNDED_PREMIUM_GUILD", (u = i || (i = {})).Authorised = "Authorised", u.Error = "Error"