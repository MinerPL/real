(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["69084"], {
        955958: function(e, t, n) {
            "use strict";
            e.exports = n.p + "2067403f7d81a04ff750.svg"
        },
        251721: function(e, t, n) {
            "use strict";
            e.exports = n.p + "d4ee85cbb7dbfd39a9d4.svg"
        },
        376507: function(e, t, n) {
            "use strict";

            function r(e) {
                let t = "==".slice(0, (4 - e.length % 4) % 4),
                    n = e.replace(/-/g, "+").replace(/_/g, "/") + t,
                    r = atob(n),
                    s = new ArrayBuffer(r.length),
                    o = new Uint8Array(s);
                for (let e = 0; e < r.length; e++) o[e] = r.charCodeAt(e);
                return s
            }

            function s(e) {
                let t = new Uint8Array(e),
                    n = "";
                for (let e of t) n += String.fromCharCode(e);
                let r = btoa(n),
                    s = r.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
                return s
            }
            n.r(t), n.d(t, {
                create: function() {
                    return I
                },
                get: function() {
                    return N
                }
            }), n("781738"), n("101997"), n("311790"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341"), n("222007"), n("70102");
            var o = "copy",
                a = "convert";

            function l(e, t, n) {
                if (t === o) return n;
                if (t === a) return e(n);
                if (t instanceof Array) return n.map(n => l(e, t[0], n));
                if (t instanceof Object) {
                    let r = {};
                    for (let [s, o] of Object.entries(t)) {
                        if (o.derive) {
                            let e = o.derive(n);
                            void 0 !== e && (n[s] = e)
                        }
                        if (!(s in n)) {
                            if (o.required) throw Error("Missing key: ".concat(s));
                            continue
                        }
                        if (null == n[s]) {
                            r[s] = null;
                            continue
                        }
                        r[s] = l(e, o.schema, n[s])
                    }
                    return r
                }
            }

            function i(e, t) {
                return {
                    required: !0,
                    schema: e,
                    derive: t
                }
            }

            function u(e) {
                return {
                    required: !0,
                    schema: e
                }
            }

            function d(e) {
                return {
                    required: !1,
                    schema: e
                }
            }
            var c = {
                    type: u(o),
                    id: u(a),
                    transports: d(o)
                },
                _ = {
                    appid: d(o),
                    appidExclude: d(o),
                    credProps: d(o)
                },
                f = {
                    appid: d(o),
                    appidExclude: d(o),
                    credProps: d(o)
                },
                E = {
                    publicKey: u({
                        rp: u(o),
                        user: u({
                            id: u(a),
                            name: u(o),
                            displayName: u(o)
                        }),
                        challenge: u(a),
                        pubKeyCredParams: u(o),
                        timeout: d(o),
                        excludeCredentials: d([c]),
                        authenticatorSelection: d(o),
                        attestation: d(o),
                        extensions: d(_)
                    }),
                    signal: d(o)
                },
                A = {
                    type: u(o),
                    id: u(o),
                    rawId: u(a),
                    authenticatorAttachment: d(o),
                    response: u({
                        clientDataJSON: u(a),
                        attestationObject: u(a),
                        transports: i(o, e => {
                            var t;
                            return (null == (t = e.getTransports) ? void 0 : t.call(e)) || []
                        })
                    }),
                    clientExtensionResults: i(f, e => e.getClientExtensionResults())
                },
                R = {
                    mediation: d(o),
                    publicKey: u({
                        challenge: u(a),
                        timeout: d(o),
                        rpId: d(o),
                        allowCredentials: d([c]),
                        userVerification: d(o),
                        extensions: d(_)
                    }),
                    signal: d(o)
                },
                p = {
                    type: u(o),
                    id: u(o),
                    rawId: u(a),
                    authenticatorAttachment: d(o),
                    response: u({
                        clientDataJSON: u(a),
                        authenticatorData: u(a),
                        signature: u(a),
                        userHandle: u(a)
                    }),
                    clientExtensionResults: i(f, e => e.getClientExtensionResults())
                };
            async function I(e) {
                let t = await navigator.credentials.create(l(r, E, e));
                return l(s, A, t)
            }
            async function N(e) {
                let t = await navigator.credentials.get(l(r, R, e));
                return l(s, p, t)
            }
        },
        152584: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                accountDetailsInit: function() {
                    return A
                },
                accountDetailsClose: function() {
                    return R
                },
                disableAccount: function() {
                    return p
                },
                saveAccountRequest: function() {
                    return I
                },
                saveAccountChanges: function() {
                    return N
                },
                getHarvestStatus: function() {
                    return S
                },
                requestHarvest: function() {
                    return T
                },
                setPendingAvatar: function() {
                    return C
                },
                setPendingGlobalNameName: function() {
                    return h
                },
                setPendingAvatarDecoration: function() {
                    return m
                },
                setPendingProfileEffectID: function() {
                    return g
                },
                setSingleTryItOutCollectiblesItem: function() {
                    return O
                },
                clearErrors: function() {
                    return D
                },
                resetPendingAccountChanges: function() {
                    return U
                },
                resetAllPending: function() {
                    return L
                },
                resetAndCloseUserProfileForm: function() {
                    return v
                },
                setDisableSubmit: function() {
                    return M
                }
            });
            var r = n("872717"),
                s = n("95410"),
                o = n("819855"),
                a = n("913144"),
                l = n("393414"),
                i = n("599110"),
                u = n("315102"),
                d = n("730622"),
                c = n("437822"),
                _ = n("49111"),
                f = n("191349"),
                E = n("782340");

            function A() {
                a.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_INIT"
                })
            }

            function R() {
                a.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_CLOSE"
                })
            }

            function p(e, t) {
                let n = t ? E.default.Messages.DELETE_ACCOUNT : E.default.Messages.DISABLE_ACCOUNT,
                    s = t ? _.Endpoints.DELETE_ACCOUNT : _.Endpoints.DISABLE_ACCOUNT;
                return (0, d.default)(t => r.default.post({
                    url: s,
                    body: {
                        password: e,
                        ...t
                    },
                    oldFormErrors: !0
                }), {
                    modalProps: {
                        title: n
                    },
                    checkEnabled: !1
                }).then(() => {
                    c.default.logoutInternal(), (0, l.transitionTo)(_.Routes.DEFAULT_LOGGED_OUT)
                })
            }
            async function I(e) {
                let t = await r.default.patch({
                        url: _.Endpoints.ME,
                        oldFormErrors: !0,
                        body: e
                    }),
                    n = t.body;
                if (n.token) {
                    let t = n.token;
                    delete n.token, a.default.dispatch({
                        type: "UPDATE_TOKEN",
                        token: t,
                        userId: n.id
                    }), (null == e ? void 0 : e.password) != null && (null == e ? void 0 : e.new_password) != null && a.default.dispatch({
                        type: "PASSWORD_UPDATED",
                        userId: n.id
                    })
                }
                return a.default.dispatch({
                    type: "CURRENT_USER_UPDATE",
                    user: n
                }), t
            }

            function N(e) {
                let {
                    username: t,
                    discriminator: n,
                    email: r,
                    emailToken: o,
                    password: l,
                    avatar: c,
                    avatarDecoration: A,
                    newPassword: R,
                    globalName: p
                } = e;
                return a.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SUBMIT"
                }), (0, d.default)(e => {
                    let a = {
                        username: t,
                        email: r,
                        email_token: o,
                        password: l,
                        avatar: c,
                        discriminator: n,
                        global_name: p,
                        new_password: R,
                        ...e
                    };
                    null === A && (a.avatar_decoration_id = null), null != A && (a.avatar_decoration_id = A.id, a.avatar_decoration_sku_id = A.skuId);
                    let i = s.default.get(_.DEVICE_TOKEN),
                        u = (0, f.getDevicePushProvider)();
                    null != u && null != i && (a.push_provider = u, a.push_token = i);
                    let d = s.default.get(_.DEVICE_VOIP_TOKEN);
                    return null != f.DEVICE_PUSH_VOIP_PROVIDER && null != d && (a.push_voip_provider = f.DEVICE_PUSH_VOIP_PROVIDER, a.push_voip_token = d), I(a)
                }, {
                    checkEnabled: !1,
                    modalProps: {
                        title: E.default.Messages.TWO_FA_CHANGE_ACCOUNT
                    },
                    hooks: {
                        onEarlyClose: () => a.default.dispatch({
                            type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
                            errors: {}
                        })
                    }
                }).then(e => {
                    let t = e.body;
                    return i.default.track(_.AnalyticEvents.USER_AVATAR_UPDATED, {
                        animated: (0, u.isAnimatedIconHash)(t.avatar)
                    }), a.default.dispatch({
                        type: "USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS"
                    }), e
                }, e => (a.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
                    errors: e.body
                }), e))
            }

            function S() {
                return r.default.get({
                    url: _.Endpoints.USER_HARVEST,
                    oldFormErrors: !0
                })
            }

            function T() {
                return r.default.post({
                    url: _.Endpoints.USER_HARVEST,
                    oldFormErrors: !0
                })
            }

            function C(e) {
                a.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR",
                    avatar: e
                }), null == e ? o.AccessibilityAnnouncer.announce(E.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_NONE) : o.AccessibilityAnnouncer.announce(E.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_CHANGED)
            }

            function h(e) {
                a.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME",
                    globalName: e
                })
            }

            function m(e) {
                a.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION",
                    avatarDecoration: e
                })
            }

            function g(e) {
                a.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PROFILE_EFFECT_ID",
                    profileEffectID: e
                })
            }

            function O(e) {
                a.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_SINGLE_TRY_IT_OUT_COLLECTIBLES_ITEM",
                    item: e
                })
            }

            function D() {
                a.default.dispatch({
                    type: "USER_SETTINGS_CLEAR_ERRORS"
                })
            }

            function U() {
                a.default.dispatch({
                    type: "USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES"
                })
            }

            function L() {
                a.default.dispatch({
                    type: "USER_SETTINGS_RESET_ALL_PENDING"
                })
            }

            function v() {
                a.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM"
                })
            }

            function M(e) {
                a.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_DISABLE_SUBMIT",
                    disable: e
                })
            }
        },
        920636: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            }), n("222007");
            var r = n("37983"),
                s = n("884691"),
                o = n("414456"),
                a = n.n(o),
                l = n("77078"),
                i = n("782340"),
                u = n("347129");
            class d extends s.PureComponent {
                render() {
                    var e;
                    let {
                        title: t,
                        actionText: n,
                        children: o,
                        error: d,
                        isLoading: c,
                        maxLength: _,
                        transitionState: f,
                        helpMessage: E,
                        retryPrompt: A,
                        retrySuccessMessage: R
                    } = this.props, {
                        code: p,
                        errorMessage: I,
                        retrySuccess: N
                    } = this.state, S = s.Children.count(o) > 0 ? (0, r.jsx)(l.Card, {
                        type: l.Card.Types.WARNING,
                        className: u.card,
                        children: (0, r.jsx)(l.Text, {
                            variant: "text-md/normal",
                            children: o
                        })
                    }) : null, T = null != A ? (0, r.jsxs)(l.Text, {
                        className: a(u.submitText, u.spacing),
                        variant: "text-sm/normal",
                        children: [(0, r.jsx)("br", {}), (0, r.jsx)(l.Clickable, {
                            className: a(u.spacing, u.link),
                            onClick: this.handleRetry,
                            children: (0, r.jsx)(l.Anchor, {
                                children: A
                            })
                        })]
                    }) : null, C = N ? (0, r.jsx)(l.Card, {
                        type: l.Card.Types.SUCCESS,
                        className: u.card,
                        children: (0, r.jsx)(l.Text, {
                            variant: "text-md/normal",
                            children: R
                        })
                    }) : null;
                    return (0, r.jsx)(l.ModalRoot, {
                        transitionState: f,
                        children: (0, r.jsxs)("form", {
                            onSubmit: this.handleSubmit,
                            children: [(0, r.jsx)(l.ModalHeader, {
                                separator: !1,
                                children: (0, r.jsx)(l.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: t
                                })
                            }), (0, r.jsxs)(l.ModalContent, {
                                children: [null != E ? (0, r.jsx)(l.Text, {
                                    color: "text-normal",
                                    variant: "text-md/normal",
                                    className: u.spacing,
                                    children: E
                                }) : null, S, C, (0, r.jsxs)(l.FormItem, {
                                    title: this.getLabelText(),
                                    className: u.spacing,
                                    children: [(0, r.jsx)(l.TextInput, {
                                        inputRef: this.setRef,
                                        onChange: this.handleCodeChange,
                                        placeholder: null !== (e = this.getPlaceholder()) && void 0 !== e ? e : void 0,
                                        maxLength: null != _ ? _ : 10,
                                        value: p,
                                        autoComplete: "one-time-code",
                                        autoFocus: !0
                                    }), this.errorPresent() ? (0, r.jsx)(l.Text, {
                                        color: "text-danger",
                                        variant: "text-xs/normal",
                                        className: u.error,
                                        children: null != d ? d : I
                                    }) : null, T]
                                })]
                            }), (0, r.jsxs)(l.ModalFooter, {
                                children: [(0, r.jsx)(l.Button, {
                                    type: "submit",
                                    disabled: c || 0 === p.length,
                                    children: null != n ? n : i.default.Messages.CONFIRM
                                }), (0, r.jsx)(l.Button, {
                                    onClick: this.handleCancel,
                                    disabled: c,
                                    look: l.Button.Looks.LINK,
                                    color: l.Button.Colors.PRIMARY,
                                    children: i.default.Messages.CANCEL
                                })]
                            })]
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        code: "",
                        errorMessage: "",
                        retrySuccess: !1
                    }, this.setRef = e => {
                        this._input = e
                    }, this.getLabelText = () => {
                        var e;
                        return null !== (e = this.props.label) && void 0 !== e ? e : this.props.disallowBackupCodes ? i.default.Messages.TWO_FA_ENTER_TOKEN_NO_BACKUP_LABEL : i.default.Messages.TWO_FA_ENTER_TOKEN_LABEL
                    }, this.getSupportedCodeTypes = () => this.props.disallowBackupCodes ? i.default.Messages.TWO_FA_AUTH_CODE_NO_BACKUP : i.default.Messages.TWO_FA_AUTH_CODE, this.getPlaceholder = () => {
                        var e;
                        return this.props.forceNoPlaceholder ? null : null !== (e = this.props.placeholder) && void 0 !== e ? e : this.getSupportedCodeTypes()
                    }, this.errorPresent = () => null != this.props.error && "" !== this.props.error || null != this.state.errorMessage && "" !== this.state.errorMessage, this.handleRetry = () => {
                        let {
                            onRetry: e
                        } = this.props;
                        null == e || e().then(() => this.setState({
                            retrySuccess: !0
                        }))
                    }, this.handleSubmit = e => {
                        e.preventDefault();
                        let {
                            handleSubmit: t,
                            onError: n
                        } = this.props;
                        t(this.state.code).catch(e => {
                            null != e.body && (null == n || n(e.body), e.body.message && this.setState({
                                errorMessage: e.body.message
                            }))
                        })
                    }, this.handleCancel = () => {
                        let {
                            onClose: e,
                            handleEarlyClose: t
                        } = this.props;
                        e(), null == t || t()
                    }, this.handleCodeChange = e => {
                        this.setState({
                            code: e
                        })
                    }
                }
            }
            d.defaultProps = {
                btnClass: "",
                isLoading: !1,
                disallowBackupCodes: !1,
                error: null,
                forceNoPlaceholder: !1
            };
            var c = d
        },
        599417: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var r, s = n("872717"),
                o = n("49111"),
                a = n("782340");
            r = class extends s.default.V8APIError {
                constructor(e, t) {
                    super(e, t, null != t ? a.default.Messages.FORM_ERROR_GENERIC_WITH_DETAILS.format({
                        statusPageURL: o.Links.STATUS,
                        details: "".concat(t)
                    }) : a.default.Messages.FORM_ERROR_GENERIC.format({
                        statusPageURL: o.Links.STATUS
                    }))
                }
            }
        },
        79489: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("888400"),
                s = n("333805"),
                o = n("782340");
            class a extends s.default {
                _getMessageFromRateLimit(e) {
                    let t = e.body.retry_after,
                        n = (0, r.diffAsUnits)(0, 1e3 * t);
                    return (0, r.unitsAsStrings)(n, {
                        days: o.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_ERROR_RATE_LIMIT_DAYS,
                        hours: o.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_ERROR_RATE_LIMIT_HOURS,
                        minutes: o.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_ERROR_RATE_LIMIT_MINUTES
                    })
                }
                constructor(e, t) {
                    super(e, t), 429 === this.status && (this.message = this._getMessageFromRateLimit(e))
                }
            }
            var l = a
        },
        736978: function(e, t, n) {
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
            var r, s, o, a, l, i, u, d, c = n("486196"),
                _ = n("614247"),
                f = n("821879"),
                E = n("333805"),
                A = n("782340");
            (l = r || (r = {}))[l.UNKNOWN = 0] = "UNKNOWN", l[l.UNKNOWN_BILLING_PROFILE = 100001] = "UNKNOWN_BILLING_PROFILE", l[l.UNKNOWN_PAYMENT_SOURCE = 100002] = "UNKNOWN_PAYMENT_SOURCE", l[l.UNKNOWN_SUBSCRIPTION = 100003] = "UNKNOWN_SUBSCRIPTION", l[l.ALREADY_SUBSCRIBED = 100004] = "ALREADY_SUBSCRIBED", l[l.INVALID_PLAN = 100005] = "INVALID_PLAN", l[l.PAYMENT_SOURCE_REQUIRED = 100006] = "PAYMENT_SOURCE_REQUIRED", l[l.ALREADY_CANCELED = 100007] = "ALREADY_CANCELED", l[l.INVALID_PAYMENT = 100008] = "INVALID_PAYMENT", l[l.ALREADY_REFUNDED = 100009] = "ALREADY_REFUNDED", l[l.INVALID_BILLING_ADDRESS = 100010] = "INVALID_BILLING_ADDRESS", l[l.ALREADY_PURCHASED = 100011] = "ALREADY_PURCHASED", l[l.NEGATIVE_INVOICE_AMOUNT = 100027] = "NEGATIVE_INVOICE_AMOUNT", l[l.AUTHENTICATION_REQUIRED = 100029] = "AUTHENTICATION_REQUIRED", l[l.SUBSCRIPTION_RENEWAL_IN_PROGRESS = 100042] = "SUBSCRIPTION_RENEWAL_IN_PROGRESS", l[l.CONFIRMATION_REQUIRED = 100047] = "CONFIRMATION_REQUIRED", l[l.CARD_DECLINED = 100054] = "CARD_DECLINED", l[l.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED = 50097] = "INVALID_GIFT_REDEMPTION_FRAUD_REJECTED", l[l.PURCHASE_TOKEN_AUTHORIZATION_REQUIRED = 100056] = "PURCHASE_TOKEN_AUTHORIZATION_REQUIRED", l[l.INVALID_PAYMENT_SOURCE = 50048] = "INVALID_PAYMENT_SOURCE", l[l.INVALID_CURRENCY_FOR_PAYMENT_SOURCE = 100051] = "INVALID_CURRENCY_FOR_PAYMENT_SOURCE", l[l.BILLING_APPLE_SERVER_API_ERROR = 100070] = "BILLING_APPLE_SERVER_API_ERROR", l[l.BILLING_TRIAL_REDEMPTION_DISABLED = 100078] = "BILLING_TRIAL_REDEMPTION_DISABLED", (i = s || (s = {})).CARD_NUMBER = "cardNumber", i.CARD_CVC = "cvc", i.CARD_EXPIRATION_DATE = "expirationDate", i.CARD_NAME = "name", i.ADDRESS_NAME = "name", i.ADDRESS_LINE_1 = "line1", i.ADDRESS_LINE_2 = "line2", i.ADDRESS_CITY = "city", i.ADDRESS_STATE = "state", i.ADDRESS_POSTAL_CODE = "postalCode", i.ADDRESS_COUNTRY = "country", (u = o || (o = {})).ADDRESS_LINE_1 = "address_line1", u.ADDRESS_LINE_2 = "address_line2", u.ADDRESS_CITY = "address_city", u.ADDRESS_STATE = "address_state", u.ADDRESS_ZIP = "address_zip", u.ADDRESS_COUNTRY = "address_country", u.CARD_NUMBER = "number", u.CARD_EXPIRATION_DATE = "exp", u.CARD_EXPIRATION_MONTH = "exp_month", u.CARD_EXPIRATION_YEAR = "exp_year";
            let R = Object.freeze({
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
                p = Object.freeze({
                    line_1: "line1",
                    line_2: "line2",
                    postal_code: "postalCode"
                });
            (d = a || (a = {})).CARD = "card", d.ADDRESS = "address";
            let I = new Set(["cardNumber", "cvc", "expirationDate", "name"]),
                N = new Set(["cardNumber", "cvc", "expirationDate", "name", "postalCode", "country", "line1", "city", "state"]),
                S = new Set(["name", "line1", "line2", "city", "state", "postalCode", "country"]);

            function T(e) {
                var t, n, r, s, o;
                if ("string" != typeof e && (null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.code) === c.INVALID_FORM_BODY_ERROR_CODE) {
                    if (!Array.isArray(null == e ? void 0 : null === (n = e.body) || void 0 === n ? void 0 : n.errors) && (null == e ? void 0 : null === (s = e.body) || void 0 === s ? void 0 : null === (r = s.errors) || void 0 === r ? void 0 : r.billing_address) != null) {
                        for (let t in e.body.errors.billing_address) {
                            let n = e.body.errors.billing_address[t];
                            delete e.body.errors.billing_address[t], e.body.errors[t] = n
                        }
                        delete e.body.errors.billing_address
                    }(null === (o = e.body) || void 0 === o ? void 0 : o.errors) != null && (e.body = (0, _.default)(e.body.errors))
                }
                return new C(e)
            }
            class C extends E.default {
                _isInFieldSet(e) {
                    for (let t in this.fields)
                        if (e.has(t)) return !0
                }
                hasCardError() {
                    return 2 === (0, f.reducedPaymentInfoExperiment)().bucket ? this._isInFieldSet(N) : this._isInFieldSet(I)
                }
                hasAddressError() {
                    return this._isInFieldSet(S)
                }
                constructor(e, t) {
                    for (let n in super(e, t), this.paymentId = null, 100027 === this.code ? this.message = A.default.Messages.BILLING_ERROR_NEGATIVE_INVOICE_AMOUNT : 50048 === this.code ? this.message = A.default.Messages.BILLING_PAYMENT_SOURCE_INVALID : 100002 === this.code ? this.message = A.default.Messages.BILLING_ERROR_UNKNOWN_PAYMENT_SOURCE : 100042 === this.code ? this.message = A.default.Messages.BILLING_ERROR_PENDING_PAYMENT : 100078 === this.code ? this.message = A.default.Messages.BILLING_TRIAL_REDEMPTION_DISABLED : 429 === this.status ? this.message = A.default.Messages.BILLING_ERROR_RATE_LIMIT : 0 === this.code ? this.message = A.default.Messages.BILLING_ERROR_GENERIC : 400 === this.status && null != this.fields.captcha_key && (this.message = A.default.Messages.BILLING_ERROR_INVALID_CAPTCHA_RESPONSE), this.fields) {
                        let e = R[n] || p[n];
                        if (null != e) {
                            let t = this.fields[n];
                            delete this.fields[n], this.fields[e] = t
                        }
                    }
                    null != e.body && "string" == typeof e.body.payment_id && (this.paymentId = e.body.payment_id)
                }
            }
            C.ErrorCodes = r, C.Fields = s, C.Sections = a, C.CARD_ERRORS = I, C.ADDRESS_ERRORS = S;
            var h = C
        },
        852766: function(e, t, n) {
            "use strict";
            n.r(t), n("736978")
        },
        927367: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                UploadErrorCodes: function() {
                    return s
                },
                default: function() {
                    return a
                }
            });
            var r, s, o = n("782340");
            (r = s || (s = {}))[r.GENERAL = 0] = "GENERAL", r[r.NO_FILE = 1] = "NO_FILE", r[r.PROGRESS = 2] = "PROGRESS", r[r.UPLOAD = 3] = "UPLOAD", r[r.READ = 4] = "READ";
            var a = class e {
                get displayMessage() {
                    switch (this.code) {
                        case 1:
                            return o.default.Messages.UPLOAD_DEBUG_LOG_FAILURE_NO_FILE;
                        case 2:
                            return o.default.Messages.UPLOAD_DEBUG_LOG_FAILURE_PROGRESS;
                        case 3:
                            return o.default.Messages.UPLOAD_DEBUG_LOG_FAILURE_UPLOAD;
                        case 4:
                            return o.default.Messages.UPLOAD_DEBUG_LOG_FAILURE_READ;
                        default:
                            return o.default.Messages.UPLOAD_DEBUG_LOG_FAILURE
                    }
                }
                constructor(e) {
                    this.code = e
                }
            }
        },
        333805: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var r, s = n("872717"),
                o = n("49111"),
                a = n("782340");
            r = class extends s.default.V6OrEarlierAPIError {
                constructor(e, t) {
                    super(e, t, null != t ? a.default.Messages.FORM_ERROR_GENERIC_WITH_DETAILS.format({
                        statusPageURL: o.Links.STATUS,
                        details: "".concat(t)
                    }) : a.default.Messages.FORM_ERROR_GENERIC.format({
                        statusPageURL: o.Links.STATUS
                    }))
                }
            }
        },
        448993: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                V6OrEarlierAPIError: function() {
                    return r.default
                },
                APIError: function() {
                    return s.default
                },
                BillingError: function() {
                    return o.default
                },
                AppliedGuildBoostError: function() {
                    return a.default
                },
                UploadVoiceDebugLogsError: function() {
                    return l.default
                },
                UploadErrorCodes: function() {
                    return l.UploadErrorCodes
                }
            });
            var r = n("333805"),
                s = n("599417"),
                o = n("736978");
            n("852766"), n("846071");
            var a = n("79489"),
                l = n("927367")
        },
        633156: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            }), n("222007");
            var r = n("37983"),
                s = n("884691"),
                o = n("414456"),
                a = n.n(o),
                l = n("77078"),
                i = n("437822"),
                u = n("152584"),
                d = n("42963"),
                c = n("145131"),
                _ = n("599110"),
                f = n("98013"),
                E = n("439932"),
                A = n("49111"),
                R = n("149806"),
                p = n("782340"),
                I = n("528414");

            function N(e) {
                let {
                    email: t,
                    setEmail: n,
                    claimRequired: o,
                    onSuccess: _,
                    onClose: f
                } = e, [N, S] = s.useState(), [T, C] = s.useState(""), [h, m] = s.useState(""), [g, O] = s.useState(!1);
                s.useEffect(() => d.default.flowStep(R.FlowType.ANY, R.ClaimAccountSteps.CLAIM_ACCOUNT), []);
                let D = async e => {
                    e.preventDefault(), O(!0), S(""), m("");
                    try {
                        await (0, u.saveAccountRequest)({
                            email: t,
                            password: T
                        }), O(!1), _()
                    } catch (e) {
                        var n, r;
                        (null == e ? void 0 : null === (n = e.body) || void 0 === n ? void 0 : n.email) && S(e.body.email), (null == e ? void 0 : null === (r = e.body) || void 0 === r ? void 0 : r.password) && m(e.body.password), O(!1)
                    }
                };
                return (0, r.jsxs)("div", {
                    className: a(I.modalLight, (0, E.getThemeClass)(A.ThemeTypes.LIGHT)),
                    children: [(0, r.jsxs)(l.ModalHeader, {
                        className: I.formHeader,
                        direction: c.default.Direction.VERTICAL,
                        separator: !1,
                        children: [(0, r.jsx)("div", {
                            className: I.formImage
                        }), (0, r.jsx)(l.Heading, {
                            className: I.formTitle,
                            variant: "heading-xl/semibold",
                            children: p.default.Messages.FINISH_SIGNING_UP
                        }), (0, r.jsx)(l.Text, {
                            className: I.formBody,
                            variant: "text-md/normal",
                            color: "header-secondary",
                            children: o ? p.default.Messages.CLAIM_ACCOUNT_REQUIRED_BODY : p.default.Messages.CLAIM_ACCOUNT_BODY_2
                        }), (0, r.jsx)(l.ModalCloseButton, {
                            className: I.closeButton,
                            onClick: f
                        })]
                    }), (0, r.jsx)(l.ModalContent, {
                        children: (0, r.jsxs)("form", {
                            className: I.formContent,
                            onSubmit: D,
                            children: [(0, r.jsx)(l.FormItem, {
                                title: p.default.Messages.FORM_LABEL_EMAIL,
                                className: I.formItem,
                                children: (0, r.jsx)(l.TextInput, {
                                    value: t,
                                    error: N,
                                    onChange: e => n(e),
                                    autoFocus: !0
                                })
                            }), (0, r.jsx)(l.FormItem, {
                                title: p.default.Messages.FORM_LABEL_PASSWORD,
                                className: I.formItem,
                                children: (0, r.jsx)(l.TextInput, {
                                    type: "password",
                                    value: T,
                                    error: h,
                                    onChange: e => C(e)
                                })
                            }), (0, r.jsx)(l.Button, {
                                type: "submit",
                                size: l.Button.Sizes.LARGE,
                                fullWidth: !0,
                                submitting: g,
                                disabled: 0 === t.length || 0 === T.length,
                                children: p.default.Messages.CLAIM_ACCOUNT
                            }), o && (0, r.jsx)(l.Button, {
                                className: I.logoutButton,
                                color: l.Button.Colors.PRIMARY,
                                look: l.Button.Looks.LINK,
                                size: l.Button.Sizes.NONE,
                                onClick: () => {
                                    i.default.logout(), f()
                                },
                                children: p.default.Messages.LOGOUT
                            })]
                        })
                    })]
                })
            }

            function S(e) {
                let {
                    email: t,
                    claimRequired: n,
                    onClose: o
                } = e, i = n ? p.default.Messages.CLAIM_ACCOUNT_REQUIRED_EMAIL_TO : p.default.Messages.CLAIM_ACCOUNT_EMAIL_TO;

                function u() {
                    window.open((0, f.getCurrentPlatformDownloadURL)(), "_blank"), _.default.track(A.AnalyticEvents.DOWNLOAD_APP, {
                        platform: (0, f.getPlatformReadableName)(),
                        ptb: !1,
                        released: !0,
                        has_e_mail: !0,
                        referring_location: "Claim Modal",
                        qr_code: !1
                    })
                }
                return s.useEffect(() => d.default.flowStep(R.FlowType.ANY, R.ClaimAccountSteps.CLAIM_ACCOUNT_SUCCESS), []), (0, r.jsxs)("div", {
                    className: a(I.modalLight, (0, E.getThemeClass)(A.ThemeTypes.LIGHT)),
                    children: [(0, r.jsxs)(l.ModalContent, {
                        className: I.successContent,
                        children: [!n && (0, r.jsx)(l.ModalCloseButton, {
                            className: I.closeButton,
                            onClick: o
                        }), (0, r.jsx)("div", {
                            className: I.successImage
                        }), (0, r.jsx)(l.Text, {
                            className: I.successTitle,
                            variant: "text-lg/semibold",
                            children: i.format({
                                email: t
                            })
                        }), (0, r.jsx)(l.Text, {
                            className: I.successPromotion,
                            variant: "text-md/normal",
                            children: p.default.Messages.CLAIM_ACCOUNT_PROMOTE_APP_2021_04
                        })]
                    }), n ? (0, r.jsx)(l.ModalFooter, {
                        direction: c.default.Direction.VERTICAL,
                        children: (0, r.jsx)(l.Button, {
                            size: l.Button.Sizes.LARGE,
                            onClick: o,
                            children: p.default.Messages.OKAY
                        })
                    }) : (0, r.jsx)(l.ModalFooter, {
                        direction: c.default.Direction.VERTICAL,
                        children: (0, r.jsx)(l.Button, {
                            color: l.Button.Colors.BRAND,
                            size: l.Button.Sizes.LARGE,
                            onClick: u,
                            children: p.default.Messages.CLAIM_ACCOUNT_GET_APP
                        })
                    })]
                })
            }

            function T(e) {
                let {
                    onClose: t,
                    transitionState: n,
                    claimRequired: o = !1
                } = e, [a, i] = s.useState(""), [u, d] = s.useState(!1);
                return u ? (0, r.jsx)(l.ModalRoot, {
                    transitionState: n,
                    children: (0, r.jsx)(S, {
                        email: a,
                        claimRequired: o,
                        onClose: t
                    })
                }) : (0, r.jsx)(l.ModalRoot, {
                    transitionState: n,
                    children: (0, r.jsx)(N, {
                        email: a,
                        setEmail: i,
                        claimRequired: o,
                        onSuccess: () => d(!0),
                        onClose: t
                    })
                })
            }
        },
        153498: function(e, t, n) {
            "use strict";

            function r(e) {
                let {} = e;
                return !1
            }

            function s(e, t) {
                return !1
            }

            function o(e) {
                return !1
            }

            function a() {
                return !1
            }

            function l() {
                return !1
            }

            function i(e) {
                let {} = e;
                return !1
            }

            function u(e, t) {
                return !1
            }

            function d() {
                return !1
            }

            function c(e) {}

            function _(e) {}

            function f(e) {}

            function E(e) {
                return !1
            }
            n.r(t), n.d(t, {
                navigateToChannel: function() {
                    return r
                },
                navigateToMemberVerification: function() {
                    return s
                },
                navigateToRootTab: function() {
                    return o
                },
                resetToAuthRoute: function() {
                    return a
                },
                resetToPanelsUI: function() {
                    return l
                },
                pushModal: function() {
                    return i
                },
                popModal: function() {
                    return u
                },
                popAllModals: function() {
                    return d
                },
                coerceChannelRoute: function() {
                    return c
                },
                coerceGuildsRoute: function() {
                    return _
                },
                coerceModalRoute: function() {
                    return f
                },
                useIsModalOpen: function() {
                    return E
                }
            })
        },
        821879: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                reducedPaymentInfoExperiment: function() {
                    return o
                }
            });
            var r = n("862205");
            let s = (0, r.createExperiment)({
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

            function o() {
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
        191349: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                DEVICE_PUSH_VOIP_PROVIDER: function() {
                    return a
                },
                getDevicePushProvider: function() {
                    return l
                }
            });
            var r, s, o = n("773336");
            let a = null;

            function l() {
                return (0, o.isAndroid)(), null
            }(r = s || (s = {})).REMINDER = "reminder", r.TOP_MESSAGE_PUSH = "top_messages_push", r.TRENDING_CONTENT_PUSH = "trending_content_push"
        },
        149806: function(e, t, n) {
            "use strict";
            var r, s, o, a, l, i, u, d, c, _;
            n.r(t), n.d(t, {
                FlowType: function() {
                    return r
                },
                AgeGateSteps: function() {
                    return s
                },
                ClaimAccountSteps: function() {
                    return o
                },
                CreateGuildSteps: function() {
                    return a
                },
                RegistrationSteps: function() {
                    return l
                }
            }), (i = r || (r = {})).UNKNOWN = "unknown", i.ANY = "any", i.INVITE = "invite", i.ORGANIC = "organic_registration", i.ORGANIC_MARKETING = "organic_marketing", i.ORGANIC_GUILD_TEMPLATES = "organic_guild_template", i.CREATE_GUILD = "create_guild", (u = s || (s = {})).AGE_GATE = "age_gate", u.AGE_GATE_UNDERAGE = "age_gate_underage", (d = o || (o = {})).CLAIM_ACCOUNT = "claim_account", d.CLAIM_ACCOUNT_SUCCESS = "claim_account_success", (c = a || (a = {})).GUILD_TEMPLATES = "guild_templates", c.GUILD_CREATE = "guild_create", c.CREATION_INTENT = "creation_intent", c.CHANNEL_PROMPT = "channel_prompt", c.JOIN_GUILD = "join_guild", c.SUCCESS = "create_success", (_ = l || (l = {})).NUF_STARTED = "nuf_started", _.AGE_GATE = "age_gate", _.NUF_COMPLETE = "nuf_complete", _.HUB_CONNECTION = "hub_connection"
        },
        42963: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return R
                }
            });
            var r = n("308503"),
                s = n("95410"),
                o = n("605250"),
                a = n("599110"),
                l = n("149806"),
                i = n("49111");
            let u = "UserFlowAnalyticsStore_current",
                d = "UserFlowAnalyticsStore";

            function c(e) {
                if (e === l.FlowType.UNKNOWN) return null;
                let t = s.default.get("".concat(d, "-").concat(e));
                if (null == t) return null;
                let {
                    version: n,
                    ...r
                } = t;
                return 1 !== n ? null : r
            }
            new o.default("UserFlowAnalytics");
            let _ = (0, r.default)((e, t) => ({
                flows: {},
                currentFlow: null,
                activeFlow: () => {
                    var e;
                    let n = null !== (e = t().currentFlow) && void 0 !== e ? e : s.default.get(u);
                    if (null == n) return null;
                    let {
                        [n]: r
                    } = t().flows, o = null != r ? r : c(n);
                    return (null == o ? void 0 : o.currentStep) != null ? n : null
                }
            }));

            function f(e, t) {
                let {
                    [e]: n, ...r
                } = _.getState().flows, s = null != n ? n : c(e);
                if ((null == s ? void 0 : s.currentStep) == null || s.currentStep !== t) _.setState({
                    flows: {
                        ...r,
                        [e]: {
                            type: e,
                            lastStep: null,
                            lastTimestamp: null,
                            currentStep: t,
                            currentTimestamp: new Date,
                            skipped: !1
                        }
                    },
                    currentFlow: e
                })
            }

            function E(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    r = e;
                if (e === l.FlowType.ANY) {
                    var s;
                    r = null !== (s = _.getState().activeFlow()) && void 0 !== s ? s : l.FlowType.UNKNOWN
                }
                let {
                    [r]: o, ...a
                } = _.getState().flows, i = null != o ? o : c(r);
                if (null != i && null != i.currentStep) i.currentStep !== t && _.setState({
                    flows: {
                        ...a,
                        [r]: {
                            ...i,
                            lastStep: i.currentStep,
                            lastTimestamp: i.currentTimestamp,
                            currentStep: t,
                            currentTimestamp: new Date,
                            ended: n
                        }
                    },
                    currentFlow: r
                })
            }
            _.subscribe(e => {
                var t;
                if (null != e && (! function(e) {
                        if (e.type === l.FlowType.UNKNOWN) return;
                        let t = "".concat(d, "-").concat(e.type);
                        e.ended ? (s.default.remove(t), s.default.remove(u)) : (s.default.set("".concat(d, "-").concat(e.type), {
                            ...e,
                            version: 1
                        }), s.default.set(u, e.type))
                    }(e), a.default.track(i.AnalyticEvents.NUO_TRANSITION, {
                        flow_type: e.type,
                        from_step: e.lastStep,
                        to_step: e.currentStep,
                        seconds_on_from_step: "function" != typeof(null === (t = e.lastTimestamp) || void 0 === t ? void 0 : t.getTime) ? 0 : (e.currentTimestamp.getTime() - e.lastTimestamp.getTime()) / 1e3
                    }, {
                        flush: !0
                    }), e.ended)) {
                    let t = {
                        ..._.getState().flows
                    };
                    delete t[e.type], _.setState({
                        flows: t,
                        currentFlow: null
                    })
                }
            }, e => null != e.currentFlow ? e.flows[e.currentFlow] : void 0);

            function A() {
                return null != _.getState().activeFlow()
            }
            var R = {
                flowStart: f,
                flowStepOrStart: function(e, t) {
                    A() ? E(e, t) : f(e, t)
                },
                flowStep: E,
                hasActiveFlow: A
            }
        },
        98013: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                makeDesktopDownloadURL: function() {
                    return u
                },
                getPlatformReadableName: function() {
                    return c
                },
                getCurrentPlatformDownloadURL: function() {
                    return _
                },
                getMobileDownloadLink: function() {
                    return f
                }
            });
            var r = n("597755"),
                s = n.n(r),
                o = n("815157"),
                a = n("271938"),
                l = n("49111");
            let i = "linux";

            function u(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 ? arguments[2] : void 0;
                return "".concat(l.DownloadLinks.DESKTOP).concat(t ? "/ptb" : "", "?platform=").concat(e).concat(null != n ? "&format=".concat(n) : "")
            }

            function d() {
                var e;
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null === (e = s.os) || void 0 === e ? void 0 : e.family;
                return null == t ? "win" : -1 !== t.indexOf("Ubuntu") || -1 !== t.indexOf("Debian") || -1 !== t.indexOf("Fedora") || -1 !== t.indexOf("Red Hat") || -1 !== t.indexOf("SuSE") || -1 !== t.indexOf("Linux") ? i : -1 !== t.indexOf("OS X") ? "osx" : "win"
            }

            function c(e) {
                return ({
                    win: "Windows",
                    osx: "Mac",
                    [i]: "Linux"
                })[d(e)]
            }

            function _() {
                let e = d();
                return u(e, !1, e === i ? "tar.gz" : null)
            }

            function f(e, t, n) {
                let r = null != n ? n.toString() : null;
                switch (t) {
                    case "iOS":
                        return (0, o.default)(null != r ? r : "https://itunes.apple.com/us/app/discord-chat-for-games/id985746746", {
                            utmSource: e,
                            fingerprint: a.default.getFingerprint(),
                            attemptId: (0, o.generateAttemptId)()
                        });
                    case "Android":
                        return (0, o.default)(null != r ? r : "https://play.google.com/store/apps/details", {
                            utmSource: e,
                            id: "com.discord",
                            fingerprint: a.default.getFingerprint(),
                            attemptId: (0, o.generateAttemptId)()
                        });
                    default:
                        return null != r ? r : "https://www.discord.com"
                }
            }
        },
        615931: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                resolveThunk: function() {
                    return o
                }
            });
            var r = n("917351"),
                s = n.n(r);
            let o = e => "function" == typeof e ? e() : e;
            s.curry((e, t, n) => o(t) ? e(n) : n({}))
        },
        730622: function(e, t, n) {
            "use strict";
            let r, s;
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            }), n("70102");
            var o = n("697218"),
                a = n("615931");
            let l = () => {
                throw Error("updateModal has not been implemented.")
            };
            {
                let e = n("670924");
                r = e.showModal, l = e.updateModalProps, s = n("551042").closeModal
            }

            function i(e) {
                let {
                    promiseFn: t,
                    resolve: n,
                    reject: o,
                    modalProps: a = {},
                    hooks: {
                        onEarlyClose: i
                    } = {}
                } = e;
                if (null == r) {
                    null == i || i();
                    return
                }
                let d = r(E, c, a);

                function c() {
                    null == i || i()
                }

                function _(e) {
                    s(d), n(e)
                }

                function f(e) {
                    s(d), o(e)
                }

                function E(e) {
                    return l(d, E, c, {
                        ...a,
                        isLoading: !0
                    }), u({
                        promiseFn: t,
                        resolve: _,
                        reject: f,
                        code: e,
                        mfaCodeHandler: A,
                        isModalOpen: !0
                    })
                }

                function A(e) {
                    let {
                        res: t
                    } = e;
                    l(d, E, c, {
                        ...a,
                        error: t.body.message
                    })
                }
            }

            function u(e) {
                let {
                    promiseFn: t,
                    resolve: n,
                    reject: r,
                    code: s,
                    mfaCodeHandler: o = i,
                    isModalOpen: a = !1,
                    ...l
                } = e;
                return t(null != s ? {
                    code: s
                } : {}).then(n, e => {
                    var s, i;
                    if (s = e, i = a, s.body && 60008 === s.body.code || i && 429 === s.status) return o({
                        promiseFn: t,
                        resolve: n,
                        reject: r,
                        res: e,
                        ...l
                    });
                    r(e)
                })
            }

            function d(e, t) {
                var n, r;
                let {
                    checkEnabled: s = null !== (r = null === (n = o.default.getCurrentUser()) || void 0 === n ? void 0 : n.mfaEnabled) && void 0 !== r && r,
                    ...l
                } = null != t ? t : {};
                return new Promise((t, n) => {
                    ((0, a.resolveThunk)(s) ? i : u)({
                        promiseFn: e,
                        resolve: t,
                        reject: n,
                        ...l
                    })
                })
            }
        },
        840707: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n("872717"),
                s = n("599110");

            function o(e, t, n) {
                let {
                    trackedActionData: r,
                    ...o
                } = t, a = {
                    url: o.url,
                    request_method: n
                };
                return new Promise((t, n) => {
                    e(o).then(e => {
                        let n = r.properties;
                        "function" == typeof r.properties && (n = r.properties(e)), (0, s.trackNetworkAction)(r.event, {
                            status_code: e.status,
                            ...a,
                            ...n
                        }), t(e)
                    }).catch(e => {
                        var t, o;
                        let l = r.properties;
                        "function" == typeof r.properties && (l = r.properties(e)), (0, s.trackNetworkAction)(r.event, {
                            status_code: e.status,
                            error_code: null === (t = e.body) || void 0 === t ? void 0 : t.code,
                            error_message: null === (o = e.body) || void 0 === o ? void 0 : o.message,
                            ...a,
                            ...l
                        }), n(e)
                    })
                })
            }
            var a = {
                get: function(e) {
                    return o(r.default.get, e, "get")
                },
                post: function(e) {
                    return o(r.default.post, e, "post")
                },
                put: function(e) {
                    return o(r.default.put, e, "put")
                },
                patch: function(e) {
                    return o(r.default.patch, e, "patch")
                },
                delete: function(e) {
                    return o(r.default.delete, e, "del")
                }
            }
        },
        670924: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                showModal: function() {
                    return l
                },
                updateModalProps: function() {
                    return i
                }
            });
            var r = n("37983");
            n("884691");
            var s = n("551042"),
                o = n("920636");
            let a = (e, t, n) => function(s) {
                return (0, r.jsx)(o.default, {
                    handleSubmit: e,
                    handleEarlyClose: t,
                    ...n,
                    ...s
                })
            };

            function l(e, t, n) {
                return (0, s.openModal)(a(e, t, n), {
                    onCloseCallback: t
                })
            }

            function i(e, t, n, r) {
                return (0, s.updateModal)(e, a(t, n, r))
            }
        },
        815157: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                generateAttemptId: function() {
                    return i
                },
                parseDynamicLink: function() {
                    return u
                },
                default: function() {
                    return d
                }
            }), n("511434"), n("313619"), n("654714"), n("287168"), n("956660"), n("222007");
            var r = n("383536"),
                s = n.n(r),
                o = n("748820"),
                a = n("530334");
            let l = "https://discordapp.page.link";

            function i() {
                return (0, o.v4)()
            }

            function u(e) {
                if (!e.startsWith(l)) return null;
                try {
                    var t;
                    let n = new URL(e),
                        r = n.searchParams,
                        s = r.get("link");
                    if (null == s) return null;
                    let o = decodeURIComponent(s),
                        a = new URL(o).searchParams,
                        l = {
                            utmSource: null !== (t = r.get("utm_source")) && void 0 !== t ? t : void 0
                        };
                    for (let [e, t] of a.entries()) l[e] = t;
                    return l
                } catch {
                    return null
                }
            }

            function d(e, t) {
                let {
                    utmSource: n,
                    androidFallbackLink: r,
                    iosFallbackLink: o,
                    ...i
                } = t, u = new URL(e);
                for (let e in i) {
                    let t = i[e];
                    null != t && u.searchParams.set(e, t)
                }
                let d = encodeURIComponent(u.toString()),
                    c = encodeURIComponent((0, a.default)()),
                    _ = ! function() {
                        var e, t;
                        let n = RegExp("(".concat("WebView|(iPhone|iPod|iPad)(?!.*Safari/)", ")"), "ig"),
                            r = (null == s ? void 0 : null === (e = s.ua) || void 0 === e ? void 0 : e.match(n)) != null,
                            o = (null == s ? void 0 : s.name) === "Safari" && !r;
                        return (null == s ? void 0 : null === (t = s.os) || void 0 === t ? void 0 : t.family) !== "iOS" || o
                    }() ? 0 : 1,
                    f = null != r ? encodeURIComponent(r) : null,
                    E = null != o ? encodeURIComponent(o) : null,
                    A = "".concat(l, "/?link=").concat(d, "&utm_source=").concat(n, "&apn=").concat("com.discord", "&isi=").concat(985746746, "&ibi=").concat("com.hammerandchisel.discord", "&sd=").concat(c, "&efr=").concat(_);
                return null != f && (A += "&afl=".concat(f)), null != E && (A += "&ifl=".concat(E)), A
            }
        },
        530334: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            let r = () => "";
            var s = r = n("466237").default
        },
        466237: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var r = n("792788");

            function s() {
                return r.default.Messages.DynamicLinks.IOS_APP_PREVIEW_DESCRIPTION
            }
        }
    }
]);