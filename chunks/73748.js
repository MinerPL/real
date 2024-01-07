            "use strict";
            a.r(t), a.d(t, {
                createClient: function() {
                    return S
                },
                reopenCashAppPayWindow: function() {
                    return E
                }
            }), a("70102");
            var n = a("717227"),
                r = a("872717"),
                s = a("913144"),
                l = a("850068"),
                o = a("339783"),
                i = a("44164"),
                u = a("745279"),
                c = a("295583"),
                d = a("49111");
            async function p() {
                let e = await r.default.get({
                    url: d.Endpoints.BILLING_ADYEN_PAYMENT_METHODS,
                    oldFormErrors: !0
                });
                return e
            }
            async function S() {
                try {
                    let {
                        enabledPaymentTypes: e
                    } = o.default.getCurrentConfig({
                        location: "40c266_2"
                    }, {
                        autoTrackExposure: !1
                    });
                    if (!e.includes(d.PaymentSourceTypes.CASH_APP)) return;
                    let t = await p(),
                        a = await (0, n.default)({
                            environment: d.PaymentSettings.ADYEN.KEY.startsWith("live_") ? "live" : "test",
                            clientKey: d.PaymentSettings.ADYEN.KEY,
                            analytics: {
                                enabled: !1
                            },
                            paymentMethodsResponse: t.body
                        });
                    s.default.dispatch({
                            type: "ADYEN_CREATE_CLIENT_SUCCESS",
                            client: a
                        }),
                        function(e) {
                            if (null != c.default.cashAppPayComponent) {
                                (function() {
                                    var e;
                                    null === (e = c.default.cashAppPayComponent) || void 0 === e || e.unmount()
                                })(),
                                function() {
                                    var e;
                                    let t = c.default.cashAppPayComponent;
                                    if (null == t) throw Error("Adyen CashAppPay component must be created before mounting.");
                                    null === (e = c.default.cashAppPayComponent) || void 0 === e || e.mount("#".concat(i.CASH_APP_PAY_CONTAINER))
                                }();
                                return
                            }
                            let t = e.create("cashapp", {
                                showPayButton: !1,
                                enableStoreDetails: !1,
                                storePaymentMethod: !0,
                                setStatusAutomatically: !1,
                                onSubmit: e => {
                                    let {
                                        data: t,
                                        isValid: a
                                    } = e;
                                    if (a) s.default.dispatch({
                                        type: "ADYEN_CASH_APP_PAY_SUBMIT_SUCCESS",
                                        data: t
                                    });
                                    else throw (0, l.dispatchConfirmationError)("Cash App Pay setup attempt is not valid.")
                                },
                                onError: e => {
                                    if ("CANCEL" !== e.name) {
                                        let t = "Payment declined by CashAppPay" !== e.message;
                                        throw (0, l.dispatchConfirmationError)(e.message, t)
                                    }
                                }
                            }).mount("#".concat(i.CASH_APP_PAY_CONTAINER));
                            s.default.dispatch({
                                type: "ADYEN_CREATE_CASH_APP_PAY_COMPONENT_SUCCESS",
                                component: t
                            })
                        }(a)
                } catch (e) {
                    (0, u.captureBillingException)(e), s.default.dispatch({
                        type: "ADYEN_CREATE_CLIENT_FAIL"
                    })
                }
            }

            function E() {
                let e = c.default.cashAppPayComponent;
                if (null == e) throw Error("Adyen CashAppPay component must be created before submitting.");
                e.submit()
            }