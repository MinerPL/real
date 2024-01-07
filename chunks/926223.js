            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return m
                }
            });
            var u = n("446674"),
                i = n("913144"),
                r = n("520713");
            let l = "",
                a = null,
                o = "",
                s = null,
                c = !1,
                S = null,
                d = "",
                E = "",
                f = "",
                _ = "",
                T = "",
                I = "",
                A = "",
                p = "",
                C = !1,
                P = null,
                N = null,
                R = null,
                U = null;

            function L() {
                s = null, l = "", a = null, o = "", c = !1, S = null, d = "US", E = "", f = "", _ = "", T = "", I = "", A = "", p = "", C = !1, P = null, N = null, R = null, U = null
            }

            function M(t) {
                E = t.name, d = t.country, _ = t.line1, T = t.line2, I = t.city, A = t.postalCode, p = t.state, f = t.email
            }

            function F() {
                P = null
            }

            function O(t) {
                let {
                    error: e
                } = t;
                P = e
            }
            class h extends u.default.Store {
                get stripePaymentMethod() {
                    return s
                }
                get popupCallbackCalled() {
                    return R
                }
                get braintreeEmail() {
                    return l
                }
                get braintreeNonce() {
                    return a
                }
                get venmoUsername() {
                    return o
                }
                get redirectedPaymentId() {
                    return N
                }
                get adyenPaymentData() {
                    return S
                }
                get redirectedPaymentSourceId() {
                    return U
                }
                getCreditCardInfo() {
                    return {
                        name: E
                    }
                }
                get isCardInfoValid() {
                    return c
                }
                getBillingAddressInfo() {
                    return {
                        name: E,
                        email: f,
                        country: d,
                        line1: _,
                        line2: T,
                        city: I,
                        postalCode: A,
                        state: p
                    }
                }
                get isBillingAddressInfoValid() {
                    return C
                }
                get error() {
                    return P
                }
            }
            h.displayName = "NewPaymentSourceStore";
            var m = new h(i.default, {
                NEW_PAYMENT_SOURCE_STRIPE_PAYMENT_REQUEST_UPDATE: function(t) {
                    let {
                        stripePaymentMethod: e
                    } = t;
                    if (null == e) {
                        L();
                        return
                    }
                    s = e;
                    let {
                        billingAddressInfo: n
                    } = r.parseStripePaymentMethod(s);
                    M(n)
                },
                NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE: function(t) {
                    let {
                        info: e,
                        isValid: n
                    } = t;
                    E = e.name, c = n
                },
                NEW_PAYMENT_SOURCE_ADDRESS_INFO_UPDATE: function(t) {
                    let {
                        info: e,
                        isValid: n
                    } = t;
                    null != e.name && "" !== e.name && (E = e.name), d = e.country, E = e.name, _ = e.line1, T = e.line2, I = e.city, A = e.postalCode, p = e.state, f = e.email, C = n
                },
                BRAINTREE_TOKENIZE_PAYPAL_START: function() {
                    l = "", a = null
                },
                BRAINTREE_TOKENIZE_PAYPAL_SUCCESS: function(t) {
                    let {
                        email: e,
                        nonce: n,
                        billingAddress: u
                    } = t;
                    l = e, a = n, M(u), C = d.length > 0
                },
                BRAINTREE_TOKENIZE_VENMO_START: function() {
                    o = "", a = null
                },
                BRAINTREE_TOKENIZE_VENMO_SUCCESS: function(t) {
                    let {
                        username: e,
                        nonce: n
                    } = t;
                    o = e, a = n
                },
                ADYEN_CASH_APP_PAY_SUBMIT_SUCCESS: function(t) {
                    let {
                        data: e
                    } = t;
                    S = e
                },
                BILLING_PAYMENT_SOURCE_CREATE_START: F,
                MODAL_POP: F,
                NEW_PAYMENT_SOURCE_CLEAR_ERROR: F,
                BILLING_PAYMENT_SOURCE_CREATE_FAIL: O,
                STRIPE_TOKEN_FAILURE: O,
                BILLING_PAYMENT_SOURCE_CREATE_SUCCESS: L,
                LOGOUT: L,
                BILLING_POPUP_BRIDGE_CALLBACK: function(t) {
                    let {
                        query: e
                    } = t;
                    (null == e ? void 0 : e.payment_id) != null ? (R = !0, N = e.payment_id) : (null == e ? void 0 : e.payment_source_id) != null && (R = !0, U = e.payment_source_id)
                },
                RESET_PAYMENT_ID: function() {
                    R = !1, N = null
                }
            })