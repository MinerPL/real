            "use strict";
            n.r(t), n.d(t, {
                ErrorCodes: function() {
                    return r
                },
                parseV8BillingAddressSkemaErrorToBillingError: function() {
                    return g
                },
                default: function() {
                    return m
                }
            }), n("222007");
            var r, i, a, s, o, u, l, c, d = n("486196"),
                _ = n("614247"),
                E = n("821879"),
                f = n("333805"),
                I = n("782340");
            (o = r || (r = {}))[o.UNKNOWN = 0] = "UNKNOWN", o[o.UNKNOWN_BILLING_PROFILE = 100001] = "UNKNOWN_BILLING_PROFILE", o[o.UNKNOWN_PAYMENT_SOURCE = 100002] = "UNKNOWN_PAYMENT_SOURCE", o[o.UNKNOWN_SUBSCRIPTION = 100003] = "UNKNOWN_SUBSCRIPTION", o[o.ALREADY_SUBSCRIBED = 100004] = "ALREADY_SUBSCRIBED", o[o.INVALID_PLAN = 100005] = "INVALID_PLAN", o[o.PAYMENT_SOURCE_REQUIRED = 100006] = "PAYMENT_SOURCE_REQUIRED", o[o.ALREADY_CANCELED = 100007] = "ALREADY_CANCELED", o[o.INVALID_PAYMENT = 100008] = "INVALID_PAYMENT", o[o.ALREADY_REFUNDED = 100009] = "ALREADY_REFUNDED", o[o.INVALID_BILLING_ADDRESS = 100010] = "INVALID_BILLING_ADDRESS", o[o.ALREADY_PURCHASED = 100011] = "ALREADY_PURCHASED", o[o.NEGATIVE_INVOICE_AMOUNT = 100027] = "NEGATIVE_INVOICE_AMOUNT", o[o.AUTHENTICATION_REQUIRED = 100029] = "AUTHENTICATION_REQUIRED", o[o.SUBSCRIPTION_RENEWAL_IN_PROGRESS = 100042] = "SUBSCRIPTION_RENEWAL_IN_PROGRESS", o[o.CONFIRMATION_REQUIRED = 100047] = "CONFIRMATION_REQUIRED", o[o.CARD_DECLINED = 100054] = "CARD_DECLINED", o[o.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED = 50097] = "INVALID_GIFT_REDEMPTION_FRAUD_REJECTED", o[o.PURCHASE_TOKEN_AUTHORIZATION_REQUIRED = 100056] = "PURCHASE_TOKEN_AUTHORIZATION_REQUIRED", o[o.INVALID_PAYMENT_SOURCE = 50048] = "INVALID_PAYMENT_SOURCE", o[o.INVALID_CURRENCY_FOR_PAYMENT_SOURCE = 100051] = "INVALID_CURRENCY_FOR_PAYMENT_SOURCE", o[o.BILLING_APPLE_SERVER_API_ERROR = 100070] = "BILLING_APPLE_SERVER_API_ERROR", o[o.BILLING_TRIAL_REDEMPTION_DISABLED = 100078] = "BILLING_TRIAL_REDEMPTION_DISABLED", o[o.BILLING_PAUSE_DISABLED = 100079] = "BILLING_PAUSE_DISABLED", o[o.BILLING_PAUSE_PENDING_ALREADY_SET = 100080] = "BILLING_PAUSE_PENDING_ALREADY_SET", o[o.BILLING_PAUSE_NOT_ELIGIBLE = 100081] = "BILLING_PAUSE_NOT_ELIGIBLE", o[o.BILLING_PAUSE_INVALID_INTERVAL = 100082] = "BILLING_PAUSE_INVALID_INTERVAL", o[o.BILLING_ALREADY_PAUSED = 100083] = "BILLING_ALREADY_PAUSED", (u = i || (i = {})).CARD_NUMBER = "cardNumber", u.CARD_CVC = "cvc", u.CARD_EXPIRATION_DATE = "expirationDate", u.CARD_NAME = "name", u.ADDRESS_NAME = "name", u.ADDRESS_LINE_1 = "line1", u.ADDRESS_LINE_2 = "line2", u.ADDRESS_CITY = "city", u.ADDRESS_STATE = "state", u.ADDRESS_POSTAL_CODE = "postalCode", u.ADDRESS_COUNTRY = "country", (l = a || (a = {})).ADDRESS_LINE_1 = "address_line1", l.ADDRESS_LINE_2 = "address_line2", l.ADDRESS_CITY = "address_city", l.ADDRESS_STATE = "address_state", l.ADDRESS_ZIP = "address_zip", l.ADDRESS_COUNTRY = "address_country", l.CARD_NUMBER = "number", l.CARD_EXPIRATION_DATE = "exp", l.CARD_EXPIRATION_MONTH = "exp_month", l.CARD_EXPIRATION_YEAR = "exp_year";
            let p = Object.freeze({
                    address_line1: "line1",
                    address_line2: "line2",
                    address_city: "city",
                    address_state: "state",
                    address_zip: "postalCode",
                    address_country: "country",
                    number: "cardNumber",
                    exp: "expirationDate",
                    exp_month: "expirationDate",
                    exp_year: "expirationDate"
                }),
                A = Object.freeze({
                    line_1: "line1",
                    line_2: "line2",
                    postal_code: "postalCode"
                });
            (c = s || (s = {})).CARD = "card", c.ADDRESS = "address";
            let R = new Set(["cardNumber", "cvc", "expirationDate", "name"]),
                h = new Set(["cardNumber", "cvc", "expirationDate", "name", "postalCode", "country", "line1", "city", "state"]),
                N = new Set(["name", "line1", "line2", "city", "state", "postalCode", "country"]);

            function g(e) {
                var t, n, r, i, a;
                if ("string" != typeof e && (null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.code) === d.INVALID_FORM_BODY_ERROR_CODE) {
                    if (!Array.isArray(null == e ? void 0 : null === (n = e.body) || void 0 === n ? void 0 : n.errors) && (null == e ? void 0 : null === (i = e.body) || void 0 === i ? void 0 : null === (r = i.errors) || void 0 === r ? void 0 : r.billing_address) != null) {
                        for (let t in e.body.errors.billing_address) {
                            let n = e.body.errors.billing_address[t];
                            delete e.body.errors.billing_address[t], e.body.errors[t] = n
                        }
                        delete e.body.errors.billing_address
                    }(null === (a = e.body) || void 0 === a ? void 0 : a.errors) != null && (e.body = (0, _.default)(e.body.errors))
                }
                return new S(e)
            }
            class S extends f.default {
                _isInFieldSet(e) {
                    for (let t in this.fields)
                        if (e.has(t)) return !0
                }
                hasCardError() {
                    return 2 === (0, E.reducedPaymentInfoExperiment)().bucket ? this._isInFieldSet(h) : this._isInFieldSet(R)
                }
                hasAddressError() {
                    return this._isInFieldSet(N)
                }
                constructor(e, t) {
                    for (let n in super(e, t), this.paymentId = null, 100027 === this.code ? this.message = I.default.Messages.BILLING_ERROR_NEGATIVE_INVOICE_AMOUNT : 50048 === this.code ? this.message = I.default.Messages.BILLING_PAYMENT_SOURCE_INVALID : 100002 === this.code ? this.message = I.default.Messages.BILLING_ERROR_UNKNOWN_PAYMENT_SOURCE : 100042 === this.code ? this.message = I.default.Messages.BILLING_ERROR_PENDING_PAYMENT : 100078 === this.code ? this.message = I.default.Messages.BILLING_TRIAL_REDEMPTION_DISABLED : 429 === this.status ? this.message = I.default.Messages.BILLING_ERROR_RATE_LIMIT : 0 === this.code ? this.message = I.default.Messages.BILLING_ERROR_GENERIC : 400 === this.status && null != this.fields.captcha_key && (this.message = I.default.Messages.BILLING_ERROR_INVALID_CAPTCHA_RESPONSE), this.fields) {
                        let e = p[n] || A[n];
                        if (null != e) {
                            let t = this.fields[n];
                            delete this.fields[n], this.fields[e] = t
                        }
                    }
                    null != e.body && "string" == typeof e.body.payment_id && (this.paymentId = e.body.payment_id)
                }
            }
            S.ErrorCodes = r, S.Fields = i, S.Sections = s, S.CARD_ERRORS = R, S.ADDRESS_ERRORS = N;
            var m = S