            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var i = n("446674"),
                a = n("913144"),
                l = n("448993");
            let s = null,
                r = null,
                u = null;

            function o(e) {
                let {
                    error: t
                } = e;
                s = t
            }

            function d() {
                s = null
            }
            class c extends i.default.Store {
                get paymentError() {
                    return s
                }
                getGiftCode(e) {
                    return e === u ? r : null
                }
            }
            c.displayName = "PremiumPaymentModalStore";
            var _ = new c(a.default, {
                PREMIUM_PAYMENT_SUBSCRIBE_FAIL: o,
                PREMIUM_PAYMENT_UPDATE_FAIL: o,
                PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: function() {
                    d()
                },
                PREMIUM_PAYMENT_UPDATE_SUCCESS: d,
                PREMIUM_PAYMENT_ERROR_CLEAR: d,
                BRAINTREE_TOKENIZE_PAYPAL_FAIL: function(e) {
                    let {
                        message: t,
                        code: n
                    } = e;
                    s = new l.BillingError(t, n)
                },
                BRAINTREE_TOKENIZE_VENMO_FAIL: function(e) {
                    let {
                        message: t,
                        code: n
                    } = e;
                    s = new l.BillingError(t, n)
                },
                SKU_PURCHASE_SUCCESS: function(e) {
                    r = e.giftCode, u = e.skuId
                },
                SKU_PURCHASE_FAIL: function(e) {
                    s = e.error
                },
                SKU_PURCHASE_AWAIT_CONFIRMATION: function(e) {
                    e.isGift && (u = e.skuId)
                },
                GIFT_CODE_CREATE: function(e) {
                    let {
                        giftCode: t
                    } = e;
                    if (0 !== t.uses || t.sku_id !== u) return !1;
                    r = t.code
                }
            })