            "use strict";
            let r;
            n.r(e), n.d(e, {
                validateExpiry: function() {
                    return I
                },
                getStripe: function() {
                    return u
                },
                parseStripePaymentMethod: function() {
                    return c
                },
                authenticatePaymentIntentForPaymentId: function() {
                    return s
                }
            }), n("222007");
            var a, _, i = n("60979"),
                o = n("872717"),
                l = n("49111");
            (_ = a || (a = {})).REQUIRES_PAYMENT_METHOD = "requires_payment_method", _.REQUIRES_CONFIRMATION = "requires_confirmation", _.REQUIRES_ACTION = "requires_action", _.PROCESSING = "processing", _.CANCELED = "canceled", _.SUCCEEDED = "succeeded";
            let E = t => {
                    let e = e => "You passed an invalid expiration date ".concat(t) + "".concat(null != e ? e : "") + "Please pass a string containing a numeric month and year such as `01-17` or `2015 / 05`",
                        n = t.split(/[.\-/\s]+/g);
                    2 !== n.length && e();
                    let r = n.map(t => {
                            let r = parseInt(t);
                            return isNaN(r) && e("".concat(n, " is not a number.")), r < 1 && e("".concat(r, " is less than one.")), r
                        }),
                        [a, _] = r[0] > 12 ? [r[1], r[0]] : [r[0], r[1]];
                    return a > 12 && e("Month must be a number 1-12, not ".concat(a, ".")), _ < 100 && (_ += 2e3), [a, _]
                },
                I = t => {
                    let e, n;
                    try {
                        [e, n] = E(t)
                    } catch (t) {
                        return !1
                    }
                    let r = new Date(n, e),
                        a = new Date;
                    return r.setMonth(r.getMonth() - 1), r.setMonth(r.getMonth() + 1, 1), r > a
                };

            function u() {
                return null != r ? Promise.resolve(r) : (0, i.loadStripe)(l.PaymentSettings.STRIPE.KEY).then(t => (r = t, t))
            }

            function c(t) {
                var e, n, r, a, _, i, o, l;
                let {
                    billing_details: E
                } = t, I = null !== (e = E.address) && void 0 !== e ? e : {}, u = {
                    name: null !== (n = E.name) && void 0 !== n ? n : "",
                    line1: null !== (r = I.line1) && void 0 !== r ? r : "",
                    line2: null !== (a = I.line2) && void 0 !== a ? a : "",
                    city: null !== (_ = I.city) && void 0 !== _ ? _ : "",
                    state: null !== (i = I.state) && void 0 !== i ? i : "",
                    country: null !== (o = I.country) && void 0 !== o ? o : "",
                    postalCode: null !== (l = I.postal_code) && void 0 !== l ? l : ""
                };
                return {
                    token: t.id,
                    billingAddressInfo: u
                }
            }
            async function s(t) {
                try {
                    let e = await o.default.get({
                            url: l.Endpoints.BILLING_STRIPE_PAYMENT_INTENTS(t),
                            oldFormErrors: !0
                        }),
                        {
                            stripe_payment_intent_client_secret: n
                        } = e.body,
                        r = await u();
                    if (null == r) return {
                        error: "unable to load stripe"
                    };
                    let {
                        error: a,
                        paymentIntent: _
                    } = await r.retrievePaymentIntent(n);
                    if (null != a) return {
                        error: a.message
                    };
                    if (null == _) return {
                        error: "payment intent does not exist"
                    };
                    let i = {};
                    switch ("requires_payment_method" === _.status && null != _.last_payment_error && null != _.last_payment_error.payment_method && (i.payment_method = _.last_payment_error.payment_method.id), _.status) {
                        case "requires_payment_method":
                        case "requires_confirmation":
                        case "requires_action":
                            let {
                                error: E
                            } = await r.confirmCardPayment(n, i);
                            if (null != E) return {
                                error: E.message
                            };
                            return {};
                        case "succeeded":
                        case "processing":
                            return {};
                        default:
                            return {
                                error: "Invalid Payment Intent status: ".concat(_.status)
                            }
                    }
                } catch (t) {
                    return {
                        error: t.message
                    }
                }
            }