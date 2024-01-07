            "use strict";
            let r;
            n.r(e), n.d(e, {
                validateExpiry: function() {
                    return s
                },
                getStripe: function() {
                    return d
                },
                parseStripePaymentMethod: function() {
                    return _
                },
                authenticatePaymentIntentForPaymentId: function() {
                    return p
                }
            }), n("222007");
            var a, i, o = n("60979"),
                l = n("872717"),
                u = n("49111");
            (i = a || (a = {})).REQUIRES_PAYMENT_METHOD = "requires_payment_method", i.REQUIRES_CONFIRMATION = "requires_confirmation", i.REQUIRES_ACTION = "requires_action", i.PROCESSING = "processing", i.CANCELED = "canceled", i.SUCCEEDED = "succeeded";
            let c = t => {
                    let e = e => "You passed an invalid expiration date ".concat(t) + "".concat(null != e ? e : "") + "Please pass a string containing a numeric month and year such as `01-17` or `2015 / 05`",
                        n = t.split(/[.\-/\s]+/g);
                    2 !== n.length && e();
                    let r = n.map(t => {
                            let r = parseInt(t);
                            return isNaN(r) && e("".concat(n, " is not a number.")), r < 1 && e("".concat(r, " is less than one.")), r
                        }),
                        [a, i] = r[0] > 12 ? [r[1], r[0]] : [r[0], r[1]];
                    return a > 12 && e("Month must be a number 1-12, not ".concat(a, ".")), i < 100 && (i += 2e3), [a, i]
                },
                s = t => {
                    let e, n;
                    try {
                        [e, n] = c(t)
                    } catch (t) {
                        return !1
                    }
                    let r = new Date(n, e),
                        a = new Date;
                    return r.setMonth(r.getMonth() - 1), r.setMonth(r.getMonth() + 1, 1), r > a
                };

            function d() {
                return null != r ? Promise.resolve(r) : (0, o.loadStripe)(u.PaymentSettings.STRIPE.KEY).then(t => (r = t, t))
            }

            function _(t) {
                var e, n, r, a, i, o, l, u;
                let {
                    billing_details: c
                } = t, s = null !== (e = c.address) && void 0 !== e ? e : {}, d = {
                    name: null !== (n = c.name) && void 0 !== n ? n : "",
                    line1: null !== (r = s.line1) && void 0 !== r ? r : "",
                    line2: null !== (a = s.line2) && void 0 !== a ? a : "",
                    city: null !== (i = s.city) && void 0 !== i ? i : "",
                    state: null !== (o = s.state) && void 0 !== o ? o : "",
                    country: null !== (l = s.country) && void 0 !== l ? l : "",
                    postalCode: null !== (u = s.postal_code) && void 0 !== u ? u : ""
                };
                return {
                    token: t.id,
                    billingAddressInfo: d
                }
            }
            async function p(t) {
                try {
                    let e = await l.default.get({
                            url: u.Endpoints.BILLING_STRIPE_PAYMENT_INTENTS(t),
                            oldFormErrors: !0
                        }),
                        {
                            stripe_payment_intent_client_secret: n
                        } = e.body,
                        r = await d();
                    if (null == r) return {
                        error: "unable to load stripe"
                    };
                    let {
                        error: a,
                        paymentIntent: i
                    } = await r.retrievePaymentIntent(n);
                    if (null != a) return {
                        error: a.message
                    };
                    if (null == i) return {
                        error: "payment intent does not exist"
                    };
                    let o = {};
                    switch ("requires_payment_method" === i.status && null != i.last_payment_error && null != i.last_payment_error.payment_method && (o.payment_method = i.last_payment_error.payment_method.id), i.status) {
                        case "requires_payment_method":
                        case "requires_confirmation":
                        case "requires_action":
                            let {
                                error: c
                            } = await r.confirmCardPayment(n, o);
                            if (null != c) return {
                                error: c.message
                            };
                            return {};
                        case "succeeded":
                        case "processing":
                            return {};
                        default:
                            return {
                                error: "Invalid Payment Intent status: ".concat(i.status)
                            }
                    }
                } catch (t) {
                    return {
                        error: t.message
                    }
                }
            }