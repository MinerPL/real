(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["48935"], {
        510676: function(e, t, r) {
            "use strict";
            e.exports = r.p + "f0cba42b6a6d3b2de4fd.svg"
        },
        737444: function(e, t, r) {
            "use strict";
            e.exports = r.p + "0a3ae0a6213e605457af.svg"
        },
        184557: function(e, t, r) {
            "use strict";

            function n(e) {
                let t = "==".slice(0, (4 - e.length % 4) % 4),
                    r = e.replace(/-/g, "+").replace(/_/g, "/") + t,
                    n = atob(r),
                    s = new ArrayBuffer(n.length),
                    i = new Uint8Array(s);
                for (let e = 0; e < n.length; e++) i[e] = n.charCodeAt(e);
                return s
            }

            function s(e) {
                let t = new Uint8Array(e),
                    r = "";
                for (let e of t) r += String.fromCharCode(e);
                let n = btoa(r),
                    s = n.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
                return s
            }
            r.r(t), r.d(t, {
                create: function() {
                    return f
                },
                get: function() {
                    return N
                }
            });
            var i = "copy",
                o = "convert";

            function a(e, t, r) {
                if (t === i) return r;
                if (t === o) return e(r);
                if (t instanceof Array) return r.map(r => a(e, t[0], r));
                if (t instanceof Object) {
                    let n = {};
                    for (let [s, i] of Object.entries(t)) {
                        if (i.derive) {
                            let e = i.derive(r);
                            void 0 !== e && (r[s] = e)
                        }
                        if (!(s in r)) {
                            if (i.required) throw Error("Missing key: ".concat(s));
                            continue
                        }
                        if (null == r[s]) {
                            n[s] = null;
                            continue
                        }
                        n[s] = a(e, i.schema, r[s])
                    }
                    return n
                }
            }

            function u(e, t) {
                return {
                    required: !0,
                    schema: e,
                    derive: t
                }
            }

            function E(e) {
                return {
                    required: !0,
                    schema: e
                }
            }

            function l(e) {
                return {
                    required: !1,
                    schema: e
                }
            }
            var _ = {
                    type: E(i),
                    id: E(o),
                    transports: l(i)
                },
                d = {
                    appid: l(i),
                    appidExclude: l(i),
                    credProps: l(i)
                },
                R = {
                    appid: l(i),
                    appidExclude: l(i),
                    credProps: l(i)
                },
                c = {
                    publicKey: E({
                        rp: E(i),
                        user: E({
                            id: E(o),
                            name: E(i),
                            displayName: E(i)
                        }),
                        challenge: E(o),
                        pubKeyCredParams: E(i),
                        timeout: l(i),
                        excludeCredentials: l([_]),
                        authenticatorSelection: l(i),
                        attestation: l(i),
                        extensions: l(d)
                    }),
                    signal: l(i)
                },
                A = {
                    type: E(i),
                    id: E(i),
                    rawId: E(o),
                    authenticatorAttachment: l(i),
                    response: E({
                        clientDataJSON: E(o),
                        attestationObject: E(o),
                        transports: u(i, e => {
                            var t;
                            return (null == (t = e.getTransports) ? void 0 : t.call(e)) || []
                        })
                    }),
                    clientExtensionResults: u(R, e => e.getClientExtensionResults())
                },
                I = {
                    mediation: l(i),
                    publicKey: E({
                        challenge: E(o),
                        timeout: l(i),
                        rpId: l(i),
                        allowCredentials: l([_]),
                        userVerification: l(i),
                        extensions: l(d)
                    }),
                    signal: l(i)
                },
                D = {
                    type: E(i),
                    id: E(i),
                    rawId: E(o),
                    authenticatorAttachment: l(i),
                    response: E({
                        clientDataJSON: E(o),
                        authenticatorData: E(o),
                        signature: E(o),
                        userHandle: E(o)
                    }),
                    clientExtensionResults: u(R, e => e.getClientExtensionResults())
                };
            async function f(e) {
                let t = await navigator.credentials.create(a(n, c, e));
                return a(s, A, t)
            }
            async function N(e) {
                let t = await navigator.credentials.get(a(n, I, e));
                return a(s, D, t)
            }
        },
        599417: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return o
                }
            });
            var n = r("990746"),
                s = r("49111"),
                i = r("782340");
            class o extends n.default.V8APIError {
                constructor(e, t) {
                    super(e, t, null != t ? i.default.Messages.FORM_ERROR_GENERIC_WITH_DETAILS.format({
                        statusPageURL: s.Links.STATUS,
                        details: "".concat(t)
                    }) : i.default.Messages.FORM_ERROR_GENERIC.format({
                        statusPageURL: s.Links.STATUS
                    }))
                }
            }
        },
        79489: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return a
                }
            });
            var n = r("888400"),
                s = r("333805"),
                i = r("782340");
            class o extends s.default {
                _getMessageFromRateLimit(e) {
                    let t = e.body.retry_after,
                        r = (0, n.diffAsUnits)(0, 1e3 * t);
                    return (0, n.unitsAsStrings)(r, {
                        days: i.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_ERROR_RATE_LIMIT_DAYS,
                        hours: i.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_ERROR_RATE_LIMIT_HOURS,
                        minutes: i.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_ERROR_RATE_LIMIT_MINUTES
                    })
                }
                constructor(e, t) {
                    super(e, t), 429 === this.status && (this.message = this._getMessageFromRateLimit(e))
                }
            }
            var a = o
        },
        736978: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                ErrorCodes: function() {
                    return a
                },
                parseV8BillingAddressSkemaErrorToBillingError: function() {
                    return O
                },
                default: function() {
                    return C
                }
            });
            var n, s, i, o, a, u, E, l, _ = r("367502"),
                d = r("10134"),
                R = r("821879"),
                c = r("333805"),
                A = r("782340");
            (n = a || (a = {}))[n.UNKNOWN = 0] = "UNKNOWN", n[n.UNKNOWN_BILLING_PROFILE = 100001] = "UNKNOWN_BILLING_PROFILE", n[n.UNKNOWN_PAYMENT_SOURCE = 100002] = "UNKNOWN_PAYMENT_SOURCE", n[n.UNKNOWN_SUBSCRIPTION = 100003] = "UNKNOWN_SUBSCRIPTION", n[n.ALREADY_SUBSCRIBED = 100004] = "ALREADY_SUBSCRIBED", n[n.INVALID_PLAN = 100005] = "INVALID_PLAN", n[n.PAYMENT_SOURCE_REQUIRED = 100006] = "PAYMENT_SOURCE_REQUIRED", n[n.ALREADY_CANCELED = 100007] = "ALREADY_CANCELED", n[n.INVALID_PAYMENT = 100008] = "INVALID_PAYMENT", n[n.ALREADY_REFUNDED = 100009] = "ALREADY_REFUNDED", n[n.INVALID_BILLING_ADDRESS = 100010] = "INVALID_BILLING_ADDRESS", n[n.ALREADY_PURCHASED = 100011] = "ALREADY_PURCHASED", n[n.NEGATIVE_INVOICE_AMOUNT = 100027] = "NEGATIVE_INVOICE_AMOUNT", n[n.AUTHENTICATION_REQUIRED = 100029] = "AUTHENTICATION_REQUIRED", n[n.SUBSCRIPTION_RENEWAL_IN_PROGRESS = 100042] = "SUBSCRIPTION_RENEWAL_IN_PROGRESS", n[n.CONFIRMATION_REQUIRED = 100047] = "CONFIRMATION_REQUIRED", n[n.CARD_DECLINED = 100054] = "CARD_DECLINED", n[n.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED = 50097] = "INVALID_GIFT_REDEMPTION_FRAUD_REJECTED", n[n.PURCHASE_TOKEN_AUTHORIZATION_REQUIRED = 100056] = "PURCHASE_TOKEN_AUTHORIZATION_REQUIRED", n[n.INVALID_PAYMENT_SOURCE = 50048] = "INVALID_PAYMENT_SOURCE", n[n.INVALID_CURRENCY_FOR_PAYMENT_SOURCE = 100051] = "INVALID_CURRENCY_FOR_PAYMENT_SOURCE", n[n.BILLING_APPLE_SERVER_API_ERROR = 100070] = "BILLING_APPLE_SERVER_API_ERROR", (s = u || (u = {})).CARD_NUMBER = "cardNumber", s.CARD_CVC = "cvc", s.CARD_EXPIRATION_DATE = "expirationDate", s.CARD_NAME = "name", s.ADDRESS_NAME = "name", s.ADDRESS_LINE_1 = "line1", s.ADDRESS_LINE_2 = "line2", s.ADDRESS_CITY = "city", s.ADDRESS_STATE = "state", s.ADDRESS_POSTAL_CODE = "postalCode", s.ADDRESS_COUNTRY = "country", (i = E || (E = {})).ADDRESS_LINE_1 = "address_line1", i.ADDRESS_LINE_2 = "address_line2", i.ADDRESS_CITY = "address_city", i.ADDRESS_STATE = "address_state", i.ADDRESS_ZIP = "address_zip", i.ADDRESS_COUNTRY = "address_country", i.CARD_NUMBER = "number", i.CARD_EXPIRATION_DATE = "exp", i.CARD_EXPIRATION_MONTH = "exp_month", i.CARD_EXPIRATION_YEAR = "exp_year";
            let I = Object.freeze({
                    [E.ADDRESS_LINE_1]: u.ADDRESS_LINE_1,
                    [E.ADDRESS_LINE_2]: u.ADDRESS_LINE_2,
                    [E.ADDRESS_CITY]: u.ADDRESS_CITY,
                    [E.ADDRESS_STATE]: u.ADDRESS_STATE,
                    [E.ADDRESS_ZIP]: u.ADDRESS_POSTAL_CODE,
                    [E.ADDRESS_COUNTRY]: u.ADDRESS_COUNTRY,
                    [E.CARD_NUMBER]: u.CARD_NUMBER,
                    [E.CARD_EXPIRATION_DATE]: u.CARD_EXPIRATION_DATE,
                    [E.CARD_EXPIRATION_MONTH]: u.CARD_EXPIRATION_DATE,
                    [E.CARD_EXPIRATION_YEAR]: u.CARD_EXPIRATION_DATE
                }),
                D = Object.freeze({
                    line_1: u.ADDRESS_LINE_1,
                    line_2: u.ADDRESS_LINE_2,
                    postal_code: u.ADDRESS_POSTAL_CODE
                });
            (o = l || (l = {})).CARD = "card", o.ADDRESS = "address";
            let f = new Set([u.CARD_NUMBER, u.CARD_CVC, u.CARD_EXPIRATION_DATE, u.CARD_NAME]),
                N = new Set([u.CARD_NUMBER, u.CARD_CVC, u.CARD_EXPIRATION_DATE, u.CARD_NAME, u.ADDRESS_POSTAL_CODE, u.ADDRESS_COUNTRY, u.ADDRESS_LINE_1, u.ADDRESS_CITY, u.ADDRESS_STATE]),
                S = new Set([u.ADDRESS_NAME, u.ADDRESS_LINE_1, u.ADDRESS_LINE_2, u.ADDRESS_CITY, u.ADDRESS_STATE, u.ADDRESS_POSTAL_CODE, u.ADDRESS_COUNTRY]);

            function O(e) {
                var t, r, n, s, i;
                if ("string" != typeof e && (null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.code) === _.INVALID_FORM_BODY_ERROR_CODE) {
                    if (!Array.isArray(null == e ? void 0 : null === (r = e.body) || void 0 === r ? void 0 : r.errors) && (null == e ? void 0 : null === (s = e.body) || void 0 === s ? void 0 : null === (n = s.errors) || void 0 === n ? void 0 : n.billing_address) != null) {
                        for (let t in e.body.errors.billing_address) {
                            let r = e.body.errors.billing_address[t];
                            delete e.body.errors.billing_address[t], e.body.errors[t] = r
                        }
                        delete e.body.errors.billing_address
                    }(null === (i = e.body) || void 0 === i ? void 0 : i.errors) != null && (e.body = (0, d.default)(e.body.errors))
                }
                return new T(e)
            }
            class T extends c.default {
                _isInFieldSet(e) {
                    for (let t in this.fields)
                        if (e.has(t)) return !0
                }
                hasCardError() {
                    return 2 === (0, R.reducedPaymentInfoExperiment)().bucket ? this._isInFieldSet(N) : this._isInFieldSet(f)
                }
                hasAddressError() {
                    return this._isInFieldSet(S)
                }
                constructor(e, t) {
                    for (let r in super(e, t), this.paymentId = null, this.code === a.NEGATIVE_INVOICE_AMOUNT ? this.message = A.default.Messages.BILLING_ERROR_NEGATIVE_INVOICE_AMOUNT : this.code === a.INVALID_PAYMENT_SOURCE ? this.message = A.default.Messages.BILLING_PAYMENT_SOURCE_INVALID : this.code === a.UNKNOWN_PAYMENT_SOURCE ? this.message = A.default.Messages.BILLING_ERROR_UNKNOWN_PAYMENT_SOURCE : this.code === a.SUBSCRIPTION_RENEWAL_IN_PROGRESS ? this.message = A.default.Messages.BILLING_ERROR_PENDING_PAYMENT : 429 === this.status ? this.message = A.default.Messages.BILLING_ERROR_RATE_LIMIT : this.code === a.UNKNOWN ? this.message = A.default.Messages.BILLING_ERROR_GENERIC : 400 === this.status && null != this.fields.captcha_key && (this.message = A.default.Messages.BILLING_ERROR_INVALID_CAPTCHA_RESPONSE), this.fields) {
                        let e = I[r] || D[r];
                        if (null != e) {
                            let t = this.fields[r];
                            delete this.fields[r], this.fields[e] = t
                        }
                    }
                    null != e.body && "string" == typeof e.body.payment_id && (this.paymentId = e.body.payment_id)
                }
            }
            T.ErrorCodes = a, T.Fields = u, T.Sections = l, T.CARD_ERRORS = f, T.ADDRESS_ERRORS = S;
            var C = T
        },
        852766: function(e, t, r) {
            "use strict";
            r.r(t), r("736978")
        },
        927367: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                UploadErrorCodes: function() {
                    return s
                },
                default: function() {
                    return o
                }
            });
            var n, s, i = r("782340");
            (n = s || (s = {}))[n.GENERAL = 0] = "GENERAL", n[n.NO_FILE = 1] = "NO_FILE", n[n.PROGRESS = 2] = "PROGRESS", n[n.UPLOAD = 3] = "UPLOAD", n[n.READ = 4] = "READ";
            var o = class e {
                get displayMessage() {
                    switch (this.code) {
                        case s.NO_FILE:
                            return i.default.Messages.UPLOAD_DEBUG_LOG_FAILURE_NO_FILE;
                        case s.PROGRESS:
                            return i.default.Messages.UPLOAD_DEBUG_LOG_FAILURE_PROGRESS;
                        case s.UPLOAD:
                            return i.default.Messages.UPLOAD_DEBUG_LOG_FAILURE_UPLOAD;
                        case s.READ:
                            return i.default.Messages.UPLOAD_DEBUG_LOG_FAILURE_READ;
                        case s.GENERAL:
                        default:
                            return i.default.Messages.UPLOAD_DEBUG_LOG_FAILURE
                    }
                }
                constructor(e) {
                    this.code = e
                }
            }
        },
        333805: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return o
                }
            });
            var n = r("990746"),
                s = r("49111"),
                i = r("782340");
            class o extends n.default.V6OrEarlierAPIError {
                constructor(e, t) {
                    super(e, t, null != t ? i.default.Messages.FORM_ERROR_GENERIC_WITH_DETAILS.format({
                        statusPageURL: s.Links.STATUS,
                        details: "".concat(t)
                    }) : i.default.Messages.FORM_ERROR_GENERIC.format({
                        statusPageURL: s.Links.STATUS
                    }))
                }
            }
        },
        448993: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                V6OrEarlierAPIError: function() {
                    return n.default
                },
                APIError: function() {
                    return s.default
                },
                BillingError: function() {
                    return i.default
                },
                AppliedGuildBoostError: function() {
                    return o.default
                },
                UploadVoiceDebugLogsError: function() {
                    return a.default
                },
                UploadErrorCodes: function() {
                    return a.UploadErrorCodes
                }
            });
            var n = r("333805"),
                s = r("599417"),
                i = r("736978");
            r("852766"), r("846071");
            var o = r("79489"),
                a = r("927367")
        },
        153498: function(e, t, r) {
            "use strict";

            function n(e) {
                let {} = e;
                return !1
            }

            function s(e, t) {
                return !1
            }

            function i(e) {
                return !1
            }

            function o() {
                return !1
            }

            function a() {
                return !1
            }

            function u(e) {
                let {} = e;
                return !1
            }

            function E(e, t) {
                return !1
            }

            function l() {
                return !1
            }

            function _(e) {}

            function d(e) {}

            function R(e) {
                return !1
            }
            r.r(t), r.d(t, {
                navigateToChannel: function() {
                    return n
                },
                navigateToMemberVerification: function() {
                    return s
                },
                navigateToRootTab: function() {
                    return i
                },
                resetToAuthRoute: function() {
                    return o
                },
                resetToPanelsUI: function() {
                    return a
                },
                pushModal: function() {
                    return u
                },
                popModal: function() {
                    return E
                },
                popAllModals: function() {
                    return l
                },
                coerceChannelRoute: function() {
                    return _
                },
                coerceModalRoute: function() {
                    return d
                },
                useIsModalOpen: function() {
                    return R
                }
            })
        },
        821879: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                reducedPaymentInfoExperiment: function() {
                    return i
                }
            });
            var n = r("862205");
            let s = (0, n.createExperiment)({
                id: "2023-06_reduced_payment_method_address_info",
                label: "Reduced Payment Method Address Info",
                kind: "user",
                defaultConfig: {
                    bucket: 0,
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Simplify address form",
                    config: {
                        bucket: 1,
                        enabled: !0
                    }
                }, {
                    id: 2,
                    label: "Partial address in card form",
                    config: {
                        bucket: 2,
                        enabled: !0
                    }
                }]
            });

            function i() {
                let {
                    autoTrackExposure: e
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                    autoTrackExposure: !0
                }, t = s.getCurrentConfig({
                    location: "2b69fe_1"
                }, {
                    autoTrackExposure: e
                });
                return t
            }
        },
        899917: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return d
                }
            });
            var n = r("920040");
            r("773670");
            var s = r("498225"),
                i = r("77078"),
                o = r("387225"),
                a = r("697218"),
                u = r("145131"),
                E = r("782340"),
                l = r("956186");

            function _(e) {
                let {
                    onClose: t
                } = e, u = (0, s.useStateFromStores)([a.default], () => a.default.getCurrentUser());

                function l() {
                    null == t || t()
                }

                function _() {
                    l(), (0, i.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await r.el("867693").then(r.bind(r, "867693"));
                        return t => (0, n.jsx)(e, {
                            ...t
                        })
                    })
                }
                return (null == u ? void 0 : u.email) == null ? (0, n.jsx)(i.Button, {
                    onClick: _,
                    color: i.Button.Colors.BRAND,
                    look: i.Button.Looks.FILLED,
                    children: E.default.Messages.ADD_EMAIL_SHORT
                }) : (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(i.Button, {
                        onClick: _,
                        color: i.Button.Colors.PRIMARY,
                        look: i.Button.Looks.LINK,
                        children: E.default.Messages.CHANGE_EMAIL_SHORT
                    }), (0, n.jsx)(o.default, {
                        color: i.Button.Colors.BRAND,
                        onClick: l
                    })]
                })
            }
            var d = function(e) {
                let {
                    onClose: t,
                    transitionState: r
                } = e;
                return (0, n.jsxs)(i.ModalRoot, {
                    transitionState: r,
                    children: [(0, n.jsx)(i.ModalHeader, {
                        children: (0, n.jsx)(i.FormTitle, {
                            tag: i.FormTitleTags.H4,
                            children: E.default.Messages.PREMIUM_NOT_VERIFIED
                        })
                    }), (0, n.jsxs)(i.ModalContent, {
                        children: [(0, n.jsx)("div", {
                            className: l.imageUnverified
                        }), (0, n.jsx)(i.Text, {
                            variant: "text-md/normal",
                            className: l.message,
                            children: E.default.Messages.PREMIUM_NOT_VERIFIED_BODY
                        })]
                    }), (0, n.jsx)(i.ModalFooter, {
                        children: (0, n.jsx)(u.default, {
                            justify: u.default.Justify.END,
                            children: (0, n.jsx)(_, {
                                onClose: t
                            })
                        })
                    })]
                })
            }
        },
        191349: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                DEVICE_PUSH_VOIP_PROVIDER: function() {
                    return o
                },
                getDevicePushProvider: function() {
                    return a
                }
            });
            var n, s, i = r("773336");
            let o = null;

            function a() {
                return (0, i.isAndroid)(), null
            }(n = s || (s = {})).REMINDER = "reminder", n.TOP_MESSAGE_PUSH = "top_messages_push", n.TRENDING_CONTENT_PUSH = "trending_content_push"
        },
        387225: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return c
                }
            });
            var n = r("920040"),
                s = r("773670"),
                i = r("161179"),
                o = r.n(i),
                a = r("498225"),
                u = r("77078"),
                E = r("437822"),
                l = r("135230"),
                _ = r("697218"),
                d = r("782340");
            class R extends s.Component {
                render() {
                    let {
                        color: e,
                        look: t,
                        size: r
                    } = this.props;
                    return (0, n.jsx)(u.Button, {
                        look: t,
                        size: r,
                        color: e,
                        disabled: this.state.isSendingVerificationEmail,
                        onClick: this.handleResendVerification,
                        children: d.default.Messages.RESEND_VERIFICATION_EMAIL
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        isSendingVerificationEmail: !1
                    }, this.handleResendVerification = () => {
                        let {
                            currentUser: e,
                            onClick: t
                        } = this.props;
                        null == t || t(), this.setState({
                            isSendingVerificationEmail: !0
                        }, () => {
                            E.default.verifyResend().then(() => (0, u.openModal)(t => (0, n.jsx)(u.ConfirmModal, {
                                header: d.default.Messages.VERIFICATION_EMAIL_TITLE,
                                confirmText: d.default.Messages.OKAY,
                                confirmButtonColor: u.Button.Colors.BRAND,
                                ...t,
                                children: (0, n.jsx)(u.Text, {
                                    variant: "text-md/normal",
                                    children: d.default.Messages.VERIFICATION_EMAIL_BODY.format({
                                        email: e.email
                                    })
                                })
                            }))).catch(e => {
                                let {
                                    body: t
                                } = e, r = d.default.Messages.VERIFICATION_EMAIL_ERROR_BODY;
                                null != t && t.email && (r = t.email), (0, u.openModal)(e => (0, n.jsx)(l.default, {
                                    title: d.default.Messages.VERIFICATION_EMAIL_ERROR_TITLE,
                                    body: r,
                                    ...e
                                }))
                            }).then(() => this.setState({
                                isSendingVerificationEmail: !1
                            }))
                        })
                    }
                }
            }
            R.defaultProps = {
                size: u.Button.Sizes.MEDIUM,
                color: u.Button.Colors.BRAND
            };
            var c = a.default.connectStores([_.default], () => {
                let e = _.default.getCurrentUser();
                return o(null != e, "ResendEmailVerificationButton: currentUser cannot be undefined"), {
                    currentUser: e
                }
            })(R)
        },
        840707: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return o
                }
            });
            var n = r("990746"),
                s = r("599110");

            function i(e, t, r) {
                let {
                    trackedActionData: n,
                    ...i
                } = t, o = {
                    url: i.url,
                    request_method: r
                };
                return new Promise((t, r) => {
                    e(i).then(e => {
                        let r = n.properties;
                        "function" == typeof n.properties && (r = n.properties(e)), (0, s.trackNetworkAction)(n.event, {
                            status_code: e.status,
                            ...o,
                            ...r
                        }), t(e)
                    }).catch(e => {
                        var t, i;
                        let a = n.properties;
                        "function" == typeof n.properties && (a = n.properties(e)), (0, s.trackNetworkAction)(n.event, {
                            status_code: e.status,
                            error_code: null === (t = e.body) || void 0 === t ? void 0 : t.code,
                            error_message: null === (i = e.body) || void 0 === i ? void 0 : i.message,
                            ...o,
                            ...a
                        }), r(e)
                    })
                })
            }
            var o = {
                get: function(e) {
                    return i(n.default.get, e, "get")
                },
                post: function(e) {
                    return i(n.default.post, e, "post")
                },
                put: function(e) {
                    return i(n.default.put, e, "put")
                },
                patch: function(e) {
                    return i(n.default.patch, e, "patch")
                },
                delete: function(e) {
                    return i(n.default.delete, e, "del")
                }
            }
        }
    }
]);