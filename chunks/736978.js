            "use strict";
            n.r(t), n.d(t, {
                ErrorCodes: function() {
                    return r
                },
                parseV8BillingAddressSkemaErrorToBillingError: function() {
                    return T
                },
                default: function() {
                    return h
                }
            }), n("222007");
            var r, s, a, o, l, i, u, d, c = n("486196"),
                _ = n("614247"),
                E = n("821879"),
                f = n("333805"),
                A = n("782340");
            (l = r || (r = {}))[l.UNKNOWN = 0] = "UNKNOWN", l[l.UNKNOWN_BILLING_PROFILE = 100001] = "UNKNOWN_BILLING_PROFILE", l[l.UNKNOWN_PAYMENT_SOURCE = 100002] = "UNKNOWN_PAYMENT_SOURCE", l[l.UNKNOWN_SUBSCRIPTION = 100003] = "UNKNOWN_SUBSCRIPTION", l[l.ALREADY_SUBSCRIBED = 100004] = "ALREADY_SUBSCRIBED", l[l.INVALID_PLAN = 100005] = "INVALID_PLAN", l[l.PAYMENT_SOURCE_REQUIRED = 100006] = "PAYMENT_SOURCE_REQUIRED", l[l.ALREADY_CANCELED = 100007] = "ALREADY_CANCELED", l[l.INVALID_PAYMENT = 100008] = "INVALID_PAYMENT", l[l.ALREADY_REFUNDED = 100009] = "ALREADY_REFUNDED", l[l.INVALID_BILLING_ADDRESS = 100010] = "INVALID_BILLING_ADDRESS", l[l.ALREADY_PURCHASED = 100011] = "ALREADY_PURCHASED", l[l.NEGATIVE_INVOICE_AMOUNT = 100027] = "NEGATIVE_INVOICE_AMOUNT", l[l.AUTHENTICATION_REQUIRED = 100029] = "AUTHENTICATION_REQUIRED", l[l.SUBSCRIPTION_RENEWAL_IN_PROGRESS = 100042] = "SUBSCRIPTION_RENEWAL_IN_PROGRESS", l[l.CONFIRMATION_REQUIRED = 100047] = "CONFIRMATION_REQUIRED", l[l.CARD_DECLINED = 100054] = "CARD_DECLINED", l[l.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED = 50097] = "INVALID_GIFT_REDEMPTION_FRAUD_REJECTED", l[l.PURCHASE_TOKEN_AUTHORIZATION_REQUIRED = 100056] = "PURCHASE_TOKEN_AUTHORIZATION_REQUIRED", l[l.INVALID_PAYMENT_SOURCE = 50048] = "INVALID_PAYMENT_SOURCE", l[l.INVALID_CURRENCY_FOR_PAYMENT_SOURCE = 100051] = "INVALID_CURRENCY_FOR_PAYMENT_SOURCE", l[l.BILLING_APPLE_SERVER_API_ERROR = 100070] = "BILLING_APPLE_SERVER_API_ERROR", l[l.BILLING_TRIAL_REDEMPTION_DISABLED = 100078] = "BILLING_TRIAL_REDEMPTION_DISABLED", l[l.BILLING_PAUSE_DISABLED = 100079] = "BILLING_PAUSE_DISABLED", l[l.BILLING_PAUSE_PENDING_ALREADY_SET = 100080] = "BILLING_PAUSE_PENDING_ALREADY_SET", l[l.BILLING_PAUSE_NOT_ELIGIBLE = 100081] = "BILLING_PAUSE_NOT_ELIGIBLE", l[l.BILLING_PAUSE_INVALID_INTERVAL = 100082] = "BILLING_PAUSE_INVALID_INTERVAL", l[l.BILLING_ALREADY_PAUSED = 100083] = "BILLING_ALREADY_PAUSED", (i = s || (s = {})).CARD_NUMBER = "cardNumber", i.CARD_CVC = "cvc", i.CARD_EXPIRATION_DATE = "expirationDate", i.CARD_NAME = "name", i.ADDRESS_NAME = "name", i.ADDRESS_LINE_1 = "line1", i.ADDRESS_LINE_2 = "line2", i.ADDRESS_CITY = "city", i.ADDRESS_STATE = "state", i.ADDRESS_POSTAL_CODE = "postalCode", i.ADDRESS_COUNTRY = "country", (u = a || (a = {})).ADDRESS_LINE_1 = "address_line1", u.ADDRESS_LINE_2 = "address_line2", u.ADDRESS_CITY = "address_city", u.ADDRESS_STATE = "address_state", u.ADDRESS_ZIP = "address_zip", u.ADDRESS_COUNTRY = "address_country", u.CARD_NUMBER = "number", u.CARD_EXPIRATION_DATE = "exp", u.CARD_EXPIRATION_MONTH = "exp_month", u.CARD_EXPIRATION_YEAR = "exp_year";
            let I = Object.freeze({
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
                R = Object.freeze({
                    line_1: "line1",
                    line_2: "line2",
                    postal_code: "postalCode"
                });
            (d = o || (o = {})).CARD = "card", d.ADDRESS = "address";
            let N = new Set(["cardNumber", "cvc", "expirationDate", "name"]),
                p = new Set(["cardNumber", "cvc", "expirationDate", "name", "postalCode", "country", "line1", "city", "state"]),
                S = new Set(["name", "line1", "line2", "city", "state", "postalCode", "country"]);

            function T(e) {
                var t, n, r, s, a;
                if ("string" != typeof e && (null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.code) === c.INVALID_FORM_BODY_ERROR_CODE) {
                    if (!Array.isArray(null == e ? void 0 : null === (n = e.body) || void 0 === n ? void 0 : n.errors) && (null == e ? void 0 : null === (s = e.body) || void 0 === s ? void 0 : null === (r = s.errors) || void 0 === r ? void 0 : r.billing_address) != null) {
                        for (let t in e.body.errors.billing_address) {
                            let n = e.body.errors.billing_address[t];
                            delete e.body.errors.billing_address[t], e.body.errors[t] = n
                        }
                        delete e.body.errors.billing_address
                    }(null === (a = e.body) || void 0 === a ? void 0 : a.errors) != null && (e.body = (0, _.default)(e.body.errors))
                }
                return new C(e)
            }
            class C extends f.default {
                _isInFieldSet(e) {
                    for (let t in this.fields)
                        if (e.has(t)) return !0
                }
                hasCardError() {
                    return 2 === (0, E.reducedPaymentInfoExperiment)().bucket ? this._isInFieldSet(p) : this._isInFieldSet(N)
                }
                hasAddressError() {
                    return this._isInFieldSet(S)
                }
                constructor(e, t) {
                    for (let n in super(e, t), this.paymentId = null, 100027 === this.code ? this.message = A.default.Messages.BILLING_ERROR_NEGATIVE_INVOICE_AMOUNT : 50048 === this.code ? this.message = A.default.Messages.BILLING_PAYMENT_SOURCE_INVALID : 100002 === this.code ? this.message = A.default.Messages.BILLING_ERROR_UNKNOWN_PAYMENT_SOURCE : 100042 === this.code ? this.message = A.default.Messages.BILLING_ERROR_PENDING_PAYMENT : 100078 === this.code ? this.message = A.default.Messages.BILLING_TRIAL_REDEMPTION_DISABLED : 429 === this.status ? this.message = A.default.Messages.BILLING_ERROR_RATE_LIMIT : 0 === this.code ? this.message = A.default.Messages.BILLING_ERROR_GENERIC : 400 === this.status && null != this.fields.captcha_key && (this.message = A.default.Messages.BILLING_ERROR_INVALID_CAPTCHA_RESPONSE), this.fields) {
                        let e = I[n] || R[n];
                        if (null != e) {
                            let t = this.fields[n];
                            delete this.fields[n], this.fields[e] = t
                        }
                    }
                    null != e.body && "string" == typeof e.body.payment_id && (this.paymentId = e.body.payment_id)
                }
            }
            C.ErrorCodes = r, C.Fields = s, C.Sections = o, C.CARD_ERRORS = N, C.ADDRESS_ERRORS = S;
            var h = C