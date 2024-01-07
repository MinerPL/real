            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return C
                }
            }), n("70102");
            var u = n("446674"),
                i = n("913144"),
                r = n("596523"),
                l = n("465527"),
                a = n("736978"),
                o = n("745279"),
                s = n("520713"),
                c = n("49111"),
                S = n("782340");
            let d = !1,
                E = null,
                f = null;

            function _() {
                d = !1, f = null
            }

            function T(t) {
                let {
                    error: e
                } = t, {
                    code: n,
                    paymentId: u
                } = e;
                if (n !== a.default.ErrorCodes.AUTHENTICATION_REQUIRED) return d = !1, !1;
                !d && (d = !0, E = u, I(u))
            }
            async function I(t) {
                if (null == t) return;
                let {
                    error: e
                } = await (0, s.authenticatePaymentIntentForPaymentId)(t);
                if (null != e) {
                    i.default.dispatch({
                        type: "PAYMENT_AUTHENTICATION_ERROR",
                        error: new a.default(S.default.Messages.PAYMENT_METHOD_CONFIRMATION_ERROR)
                    });
                    let t = Error(e);
                    (0, o.captureBillingException)(t, {
                        extra: {
                            authenticationError: e
                        }
                    })
                }
            }

            function A(t) {
                let {
                    payment: e
                } = t;
                if (!d || e.id !== E || ![c.PaymentStatusTypes.COMPLETED, c.PaymentStatusTypes.CANCELED].includes(e.status)) return !1;
                d = !1, f = null, E = null, i.default.wait(r.clearError), i.default.wait(l.clearPurchaseError)
            }
            class p extends u.default.Store {
                get isAwaitingAuthentication() {
                    return d
                }
                get error() {
                    return f
                }
                get awaitingPaymentId() {
                    return E
                }
            }
            p.displayName = "PaymentAuthenticationStore";
            var C = new p(i.default, {
                BILLING_SUBSCRIPTION_UPDATE_START: _,
                PAYMENT_AUTHENTICATION_CLEAR_ERROR: _,
                PREMIUM_PAYMENT_ERROR_CLEAR: _,
                PREMIUM_PAYMENT_MODAL_CLOSE: _,
                PREMIUM_PAYMENT_MODAL_OPEN: _,
                PREMIUM_PAYMENT_SUBSCRIBE_START: _,
                PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: _,
                PREMIUM_PAYMENT_UPDATE_SUCCESS: _,
                SKU_PURCHASE_MODAL_CLOSE: _,
                SKU_PURCHASE_MODAL_OPEN: _,
                SKU_PURCHASE_START: _,
                SKU_PURCHASE_SUCCESS: _,
                BILLING_SUBSCRIPTION_UPDATE_FAIL: T,
                PREMIUM_PAYMENT_SUBSCRIBE_FAIL: T,
                PREMIUM_PAYMENT_UPDATE_FAIL: T,
                SKU_PURCHASE_FAIL: T,
                GIFT_CODE_REDEEM_FAILURE: T,
                PAYMENT_AUTHENTICATION_ERROR: function(t) {
                    let {
                        error: e
                    } = t;
                    f = e, d = !1
                },
                PAYMENT_UPDATE: A,
                BILLING_PAYMENT_FETCH_SUCCESS: A
            })