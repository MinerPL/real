            "use strict";
            a.r(t), a.d(t, {
                createClient: function() {
                    return i
                },
                createVenmoClient: function() {
                    return d
                },
                createPayPalClient: function() {
                    return E
                },
                tokenizePayPal: function() {
                    return p
                },
                tokenizeVenmo: function() {
                    return f
                },
                teardownPaypal: function() {
                    return _
                },
                teardownVenmo: function() {
                    return A
                },
                teardownClients: function() {
                    return N
                },
                reopenPayPalWindow: function() {
                    return T
                },
                reopenVenmoWindow: function() {
                    return S
                }
            }), a("70102"), a("222007");
            var n = a("872717"),
                r = a("913144"),
                s = a("40597"),
                l = a("967117"),
                o = a("773336"),
                u = a("850068"),
                c = a("49111");

            function i() {
                (0, l.getBraintreeSDK)().then(e => {
                    e.client.create({
                        authorization: c.PaymentSettings.BRAINTREE.KEY
                    }).then(e => {
                        r.default.dispatch({
                            type: "BRAINTREE_CREATE_CLIENT_SUCCESS",
                            client: e
                        }), E(), d()
                    }).catch(() => r.default.dispatch({
                        type: "BRAINTREE_CREATE_CLIENT_FAIL"
                    }))
                })
            }

            function d() {
                let e = s.default.getClient();
                if (null == e) throw Error("Braintree client must be initialized before creating Venmo client.");
                (0, l.getBraintreeSDK)().then(t => {
                    t.venmo.create({
                        client: e,
                        allowDesktop: !0,
                        paymentMethodUsage: "multi_use"
                    }).then(e => {
                        r.default.dispatch({
                            type: "BRAINTREE_CREATE_VENMO_CLIENT_SUCCESS",
                            venmoClient: e
                        })
                    }).catch(() => {
                        r.default.dispatch({
                            type: "BRAINTREE_CREATE_VENMO_CLIENT_FAIL"
                        })
                    })
                })
            }

            function E() {
                let e = s.default.getClient();
                if (null == e) throw Error("braintree client must be initialized before calling this");
                (0, l.getBraintreeSDK)().then(t => {
                    t.paypal.create({
                        client: e
                    }).then(e => {
                        if (null == e._navigateFrameToAuth) throw Error("braintree client missing _navigateFrameToAuth. did someone upgrade the braintree library?");
                        e._navigateFrameToAuth = function(e) {
                            let t = this._formatPaymentResourceData(e);
                            return n.default.post({
                                url: c.Endpoints.BILLING_PAYPAL_BILLING_AGREEMENT_TOKENS,
                                oldFormErrors: !0,
                                body: {
                                    return_url: t.returnUrl,
                                    cancel_url: t.cancelUrl
                                }
                            }).then(e => {
                                let {
                                    body: {
                                        token: t
                                    }
                                } = e;
                                this._frameService.redirect(function(e) {
                                    let t = c.PaymentSettings.BRAINTREE.KEY.startsWith("production_") ? "https://www.paypal.com" : "https://sandbox.paypal.com";
                                    return "".concat(t, "/agreements/approve?nolegacy=1&ba_token=").concat(e)
                                }(t))
                            }).catch(e => (this._frameService.close(), this._authorizationInProgress = !1, Promise.reject(Error(e.body && e.body.message))))
                        }, r.default.dispatch({
                            type: "BRAINTREE_CREATE_PAYPAL_CLIENT_SUCCESS",
                            paypalClient: e
                        })
                    }).catch(() => r.default.dispatch({
                        type: "BRAINTREE_CREATE_PAYPAL_CLIENT_FAIL"
                    }))
                })
            }

            function p() {
                let e = s.default.getPayPalClient();
                if (null == e) throw Error("braintree paypal client must be initialized before calling this");
                r.default.dispatch({
                    type: "BRAINTREE_TOKENIZE_PAYPAL_START"
                });
                let t = Promise.resolve("");
                (0, o.isDesktop)() && (t = (0, u.popupBridgeState)(c.PaymentSourceTypes.PAYPAL)), t.then(() => e.tokenize({
                    flow: "vault"
                })).then(e => {
                    let {
                        email: t,
                        firstName: a,
                        lastName: n,
                        billingAddress: s
                    } = e.details;
                    r.default.dispatch({
                        type: "BRAINTREE_TOKENIZE_PAYPAL_SUCCESS",
                        nonce: e.nonce,
                        email: t,
                        billingAddress: {
                            name: "".concat(a, " ").concat(n),
                            line1: s.line1,
                            line2: s.line2,
                            city: s.city,
                            state: s.state,
                            country: s.countryCode,
                            postalCode: s.postalCode
                        }
                    })
                }).catch(e => {
                    let {
                        message: t,
                        code: a
                    } = e;
                    a === c.BraintreeErrors.PAYPAL_POPUP_CLOSED || null == a ? r.default.dispatch({
                        type: "BRAINTREE_TOKENIZE_PAYPAL_FAIL_WINDOW_CLOSED"
                    }) : r.default.dispatch({
                        type: "BRAINTREE_TOKENIZE_PAYPAL_FAIL",
                        message: t,
                        code: a
                    })
                })
            }

            function f() {
                let e = s.default.getVenmoClient();
                if (null == e) throw Error("Braintree Venmo client must be initialized before calling tokenize.");
                r.default.dispatch({
                    type: "BRAINTREE_TOKENIZE_VENMO_START"
                }), e.tokenize().then(e => {
                    let {
                        username: t
                    } = e.details;
                    r.default.dispatch({
                        type: "BRAINTREE_TOKENIZE_VENMO_SUCCESS",
                        nonce: e.nonce,
                        username: t
                    })
                }).catch(e => {
                    let {
                        message: t,
                        code: a
                    } = e;
                    a === c.BraintreeErrors.VENMO_APP_CANCELED || a === c.BraintreeErrors.VENMO_CANCELED ? r.default.dispatch({
                        type: "BRAINTREE_TOKENIZE_VENMO_FAIL_CANCELED"
                    }) : r.default.dispatch({
                        type: "BRAINTREE_TOKENIZE_VENMO_FAIL",
                        message: t,
                        code: a
                    })
                })
            }

            function m(e, t) {
                if (null == e) return Promise.resolve();
                r.default.dispatch(t);
                try {
                    return Promise.resolve(e.teardown())
                } catch (e) {
                    return Promise.resolve()
                }
            }

            function _() {
                return m(s.default.getPayPalClient(), {
                    type: "BRAINTREE_TEARDOWN_PAYPAL_CLIENT"
                })
            }

            function A() {
                return m(s.default.getVenmoClient(), {
                    type: "BRAINTREE_TEARDOWN_VENMO_CLIENT"
                })
            }

            function N() {
                return Promise.all([_(), A()])
            }

            function T() {
                let e = s.default.getLastURL();
                null == e ? p() : (r.default.dispatch({
                    type: "BRAINTREE_TOKENIZE_PAYPAL_START"
                }), window.open(e))
            }

            function S() {
                f()
            }