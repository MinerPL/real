"use strict";
a.r(t), a.d(t, {
  Steps: function() {
    return r
  },
  getCrumbLabels: function() {
    return l
  },
  errorToStep: function() {
    return o
  },
  getStepIndex: function() {
    return u
  },
  canGoBack: function() {
    return c
  }
});
var n, r, s = a("782340");

function l(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  return ({
    payment_type: () => s.default.Messages.BILLING_STEP_PAYMENT_TYPE,
    payment_request_info: () => s.default.Messages.BILLING_STEP_PAYMENT_INFO,
    paypal: () => s.default.Messages.BILLING_STEP_PAYPAL,
    paypal_address: () => s.default.Messages.BILLING_STEP_ADDRESS,
    venmo: () => s.default.Messages.BILLING_STEP_VENMO,
    venmo_address: () => s.default.Messages.BILLING_STEP_ADDRESS,
    credit_card_information: () => s.default.Messages.BILLING_STEP_CREDIT_CARD_INFORMATION,
    address: () => s.default.Messages.BILLING_STEP_ADDRESS,
    review: () => s.default.Messages.BILLING_STEP_REVIEW,
    select_plan: () => s.default.Messages.BILLING_STEP_SELECT_PLAN,
    awaiting_authentication: () => s.default.Messages.BILLING_STEP_AWAITING_AUTHENTICATION,
    confirm: () => "",
    ...t
  })[e]()
}

function o(e) {
  if (null != e) {
    if (e.hasCardError()) return "credit_card_information";
    if (e.hasAddressError()) return "address"
  }
  return null
}

function u(e, t) {
  return t.findIndex(t => t === e)
}

function c(e, t) {
  return e > 0 || Object.keys(t).length > 0
}(n = r || (r = {})).SELECT_PLAN = "select_plan", n.PAYMENT_TYPE = "payment_type", n.PAYPAL = "paypal", n.PAYPAL_ADDRESS = "paypal_address", n.PAYMENT_REQUEST_INFO = "payment_request_info", n.CREDIT_CARD_INFORMATION = "credit_card_information", n.ADDRESS = "address", n.REVIEW = "review", n.CONFIRM = "confirm", n.AWAITING_AUTHENTICATION = "awaiting_authentication", n.VENMO = "venmo", n.VENMO_ADDRESS = "venmo_address"