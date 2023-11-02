(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["86221"], {
        78349: function(e, t, n) {
            "use strict";
            e.exports.parse = function(e) {
                var t = /^(?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?((?:-(?:[\da-z]{5,8}|\d[\da-z]{3}))*)?((?:-[\da-wy-z](?:-[\da-z]{2,8})+)*)?(-x(?:-[\da-z]{1,8})+)?$|^(x(?:-[\da-z]{1,8})+)$/i.exec(e);
                if (!t) return null;
                t.shift();
                var n = null,
                    a = [];
                t[2] && (n = (i = t[2].split("-")).shift(), a = i);
                var r = [];
                t[5] && (r = t[5].split("-")).shift();
                var s = [];
                if (t[6]) {
                    (i = t[6].split("-")).shift();
                    for (var i, l, o = []; i.length;) {
                        var u = i.shift();
                        1 === u.length ? l ? (s.push({
                            singleton: l,
                            extension: o
                        }), l = u, o = []) : l = u : o.push(u)
                    }
                    s.push({
                        singleton: l,
                        extension: o
                    })
                }
                var d = [];
                t[7] && ((d = t[7].split("-")).shift(), d.shift());
                var c = [];
                return t[8] && (c = t[8].split("-")).shift(), {
                    langtag: {
                        language: {
                            language: n,
                            extlang: a
                        },
                        script: t[3] || null,
                        region: t[4] || null,
                        variant: r,
                        extension: s,
                        privateuse: d
                    },
                    privateuse: c,
                    grandfathered: {
                        irregular: t[0] || null,
                        regular: t[1] || null
                    }
                }
            }
        },
        448105: function(e, t, n) {
            "use strict";
            e.exports = function(e, t) {
                var n = t.length,
                    a = e.length;
                if (a > n) return !1;
                if (a === n) return e === t;
                e: for (var r = 0, s = 0; r < a; r++) {
                    for (var i = e.charCodeAt(r); s < n;)
                        if (t.charCodeAt(s++) === i) continue e;
                    return !1
                }
                return !0
            }
        },
        310013: function(e, t, n) {
            "use strict";
            var a = {
                    childContextTypes: !0,
                    contextTypes: !0,
                    defaultProps: !0,
                    displayName: !0,
                    getDefaultProps: !0,
                    mixins: !0,
                    propTypes: !0,
                    type: !0
                },
                r = {
                    name: !0,
                    length: !0,
                    prototype: !0,
                    caller: !0,
                    arguments: !0,
                    arity: !0
                },
                s = "function" == typeof Object.getOwnPropertySymbols;
            e.exports = function(e, t, n) {
                if ("string" != typeof t) {
                    var i = Object.getOwnPropertyNames(t);
                    s && (i = i.concat(Object.getOwnPropertySymbols(t)));
                    for (var l = 0; l < i.length; ++l)
                        if (!a[i[l]] && !r[i[l]] && (!n || !n[i[l]])) try {
                            e[i[l]] = t[i[l]]
                        } catch (e) {}
                }
                return e
            }
        },
        2396: function(e, t, n) {
            "use strict";
            e.exports = n.p + "27d910e5335bc8ab70d1.svg"
        },
        111494: function(e, t, n) {
            "use strict";
            e.exports = n.p + "fb2bc9ec875070eb5384.svg"
        },
        577468: function(e, t, n) {
            "use strict";
            e.exports = n.p + "ca67ff158e9860e50cac.svg"
        },
        330574: function(e, t, n) {
            "use strict";
            e.exports = n.p + "5a0a3c94e4973427134e.svg"
        },
        186237: function(e, t, n) {
            "use strict";
            e.exports = n.p + "c269c9b36ab7b621c16b.svg"
        },
        868470: function(e, t, n) {
            "use strict";
            e.exports = n.p + "f57bdf2be6d676da652b.svg"
        },
        441294: function(e, t, n) {
            "use strict";
            e.exports = n.p + "4741849dca44f19ddfa3.svg"
        },
        941754: function(e, t, n) {
            "use strict";
            e.exports = n.p + "461029a773ee21ad9bb9.svg"
        },
        245317: function(e, t, n) {
            "use strict";
            e.exports = n.p + "9f9d36fd84ca5ce1c895.svg"
        },
        338262: function(e, t, n) {
            "use strict";
            e.exports = n.p + "d3d02d383054f64091d5.svg"
        },
        997322: function(e, t, n) {
            "use strict";
            e.exports = n.p + "dcc1b96dda5a27b9a2f0.svg"
        },
        586504: function(e, t, n) {
            "use strict";
            e.exports = n.p + "dd293574a2092f9d4555.svg"
        },
        667100: function(e, t, n) {
            "use strict";
            e.exports = n.p + "08d19f5d231757b14468.svg"
        },
        515533: function(e, t, n) {
            "use strict";
            e.exports = n.p + "66d99a14180b6e5da1a3.svg"
        },
        356402: function(e, t, n) {
            "use strict";
            e.exports = n.p + "a0e2e13b1edb66b440fe.svg"
        },
        165123: function(e, t, n) {
            "use strict";
            e.exports = n.p + "5b309e3bda0a954ae67e.svg"
        },
        955003: function(e, t, n) {
            "use strict";
            e.exports = n.p + "a6a8e98a210bf8b02da7.svg"
        },
        481205: function(e, t, n) {
            "use strict";
            e.exports = n.p + "74cc3a7d069e7bde4642.svg"
        },
        463057: function(e, t, n) {
            "use strict";
            e.exports = n.p + "022b6f08ce8cd06e7d2e.svg"
        },
        286549: function(e, t, n) {
            "use strict";
            e.exports = n.p + "731d9f380624da37c63d.svg"
        },
        936532: function(e, t, n) {
            "use strict";
            e.exports = n.p + "b8ead81360c33e0de3f5.svg"
        },
        697643: function(e, t, n) {
            "use strict";
            e.exports = n.p + "bb2df9b4fe177b88f5cb.svg"
        },
        878188: function(e, t, n) {
            "use strict";
            e.exports = n.p + "38ac3f3a945e2cca9509.svg"
        },
        59619: function(e, t, n) {
            "use strict";
            e.exports = n.p + "abc0b50e7b32970d6ffd.svg"
        },
        280968: function(e, t, n) {
            "use strict";
            e.exports = n.p + "21776a8b4fe8087b0bdc.svg"
        },
        144824: function(e, t, n) {
            "use strict";
            e.exports = n.p + "4cbb7212cd1c94d49cdf.svg"
        },
        686570: function(e, t, n) {
            "use strict";
            e.exports = n.p + "4cbb7212cd1c94d49cdf.svg"
        },
        669200: function(e, t, n) {
            "use strict";
            e.exports = n.p + "a426a3ae492eb54ac0f0.svg"
        },
        479125: function(e, t, n) {
            "use strict";
            e.exports = n.p + "2d8dac1dbbc8278bfa86.svg"
        },
        405932: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var a = n("37983");
            n("884691");
            var r = n("77078"),
                s = n("135898"),
                i = function(e) {
                    let {
                        message: t
                    } = e;
                    return (0, a.jsxs)("div", {
                        className: s.warnBlock,
                        children: [(0, a.jsx)("div", {
                            className: s.warnIcon
                        }), (0, a.jsx)(r.Text, {
                            className: s.warnText,
                            variant: "text-sm/normal",
                            children: t
                        })]
                    })
                }
        },
        740055: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var a = n("37983"),
                r = n("884691"),
                s = n("414456"),
                i = n.n(s),
                l = n("669491"),
                o = n("77078"),
                u = n("339783"),
                d = n("865146"),
                c = n("712218"),
                f = n("423487"),
                _ = n("701909"),
                p = n("49111"),
                E = n("843455"),
                S = n("782340"),
                m = n("429130");
            let I = "***@***.***",
                C = new d.CreditCardSourceRecord({
                    id: "new_payment_source_id",
                    brand: c.default.Types.UNKNOWN,
                    type: p.PaymentSourceTypes.CARD
                });

            function h(e) {
                var t, n;
                let s, {
                        selectedPaymentSourceId: h,
                        paymentSources: g,
                        prependOption: T,
                        hidePersonalInformation: y,
                        onChange: N,
                        onPaymentSourceAdd: A,
                        isTrial: R = !1,
                        disabled: b = !1,
                        className: v,
                        optionClassName: M,
                        dropdownLoading: O
                    } = e,
                    P = 0 === g.length,
                    x = [...null != T ? [T] : [], ...g, C].map((e, t) => {
                        if (e instanceof d.default) {
                            let {
                                brand: t,
                                label: n
                            } = function(e, t) {
                                if (e instanceof d.CreditCardSourceRecord) return e.id === C.id ? {
                                    brand: null,
                                    label: S.default.Messages.PAYMENT_SOURCES_ADD
                                } : {
                                    brand: t ? c.default.Types.UNKNOWN : e.brand,
                                    label: S.default.Messages.PAYMENT_SOURCE_CARD_ENDING_IN.format({
                                        last4: t ? "****" : e.last4
                                    })
                                };
                                if (e instanceof d.PaypalSourceRecord) return {
                                    brand: c.default.Types.PAYPAL,
                                    label: t ? I : e.email
                                };
                                if (e instanceof d.SofortSourceRecord) return {
                                    brand: c.default.Types.SOFORT,
                                    label: t ? I : e.email
                                };
                                else if (e instanceof d.GiropaySourceRecord) return {
                                    brand: c.default.Types.GIROPAY,
                                    label: S.default.Messages.PAYMENT_SOURCE_GIROPAY
                                };
                                else if (e instanceof d.Przelewy24SourceRecord) return {
                                    brand: c.default.Types.PRZELEWY24,
                                    label: t ? I : e.email
                                };
                                else if (e instanceof d.PaysafeSourceRecord) return {
                                    brand: c.default.Types.PAYSAFECARD,
                                    label: S.default.Messages.PAYMENT_SOURCE_PAYSAFE_CARD_REDIRECT
                                };
                                else if (e instanceof d.GcashSourceRecord) return {
                                    brand: c.default.Types.GCASH,
                                    label: S.default.Messages.PAYMENT_SOURCE_GCASH
                                };
                                else if (e instanceof d.GrabPayMySourceRecord) return {
                                    brand: c.default.Types.GRABPAY,
                                    label: S.default.Messages.PAYMENT_SOURCE_GRABPAY
                                };
                                else if (e instanceof d.MomoWalletSourceRecord) return {
                                    brand: c.default.Types.MOMO_WALLET,
                                    label: S.default.Messages.PAYMENT_SOURCE_MOMO_WALLET
                                };
                                else if (e instanceof d.VenmoSourceRecord) return {
                                    brand: c.default.Types.VENMO,
                                    label: t ? "***" : "@" + e.username
                                };
                                else if (e instanceof d.KaKaoPaySourceRecord) return {
                                    brand: c.default.Types.KAKAOPAY,
                                    label: S.default.Messages.PAYMENT_SOURCE_KAKAOPAY
                                };
                                else if (e instanceof d.GoPayWalletSourceRecord) return {
                                    brand: c.default.Types.GOPAY_WALLET,
                                    label: S.default.Messages.PAYMENT_SOURCE_GOPAY_WALLET
                                };
                                else if (e instanceof d.BancontactSourceRecord) return {
                                    brand: c.default.Types.BANCONTACT,
                                    label: S.default.Messages.PAYMENT_SOURCE_BANCONTACT
                                };
                                else if (e instanceof d.EPSSourceRecord) return {
                                    brand: c.default.Types.EPS,
                                    label: S.default.Messages.PAYMENT_SOURCE_EPS_WITH_BANK.format({
                                        bank: (0, u.getEPSBankDisplayNameFromBankName)(e.bank)
                                    })
                                };
                                else if (e instanceof d.IdealSourceRecord) return {
                                    brand: c.default.Types.IDEAL,
                                    label: S.default.Messages.PAYMENT_SOURCE_IDEAL_WITH_BANK.format({
                                        bank: (0, u.getIdealBankDisplayNameFromBankName)(e.bank)
                                    })
                                };
                                else if (e instanceof d.CashAppSourceRecord) return {
                                    brand: c.default.Types.CASH_APP,
                                    label: t ? "***" : e.username
                                };
                                throw Error("Invalid Payment Source")
                            }(e, y);
                            return {
                                value: e.id,
                                label: (0, a.jsxs)("div", {
                                    className: m.paymentSourceSelectedOption,
                                    children: [null != t ? (0, a.jsx)(c.default, {
                                        type: c.default.getType(t)
                                    }) : null, (0, a.jsx)("div", {
                                        className: i(m.paymentSourceLabel, {
                                            [m.error]: e.invalid
                                        }),
                                        children: n
                                    })]
                                })
                            }
                        }
                        return {
                            key: t,
                            value: e.value,
                            label: (0, a.jsx)("div", {
                                className: m.paymentSourceLabel,
                                children: e.label
                            })
                        }
                    }),
                    L = r.useMemo(() => g.find(e => e.id === h), [g, h]);
                let U = (t = R, n = L, s = null, t && null != n && p.IRREDEEMABLE_PAYMENT_SOURCES.has(n.type) ? s = S.default.Messages.PAYMENT_SOURCE_REDEMPTION_INVALID : t && null != n && n.hasFlag(E.PaymentSourceFlags.NEW) && (s = S.default.Messages.BILLING_PAYMENT_AUTHORIZATION_CHARGE.format({
                    helpDeskArticle: _.default.getArticleURL(p.HelpdeskArticles.PAYMENT_AUTHORIZATION_CHARGE)
                })), s);
                return (0, a.jsxs)(a.Fragment, {
                    children: [P ? (0, a.jsx)(o.Button, {
                        color: o.ButtonColors.BRAND,
                        fullWidth: !0,
                        onClick: A,
                        children: S.default.Messages.PAYMENT_SOURCES_ADD
                    }) : (0, a.jsx)(o.SingleSelect, {
                        options: x,
                        value: h,
                        onChange: e => {
                            if (e === C.id) null != A && A();
                            else {
                                let t = g.find(t => t.id === e);
                                null != N && N(t)
                            }
                        },
                        isDisabled: b,
                        className: i({
                            [m.paymentSourceHasWarning]: null != U
                        }, v),
                        optionClassName: M,
                        placeholder: S.default.Messages.PAYMENT_SOURCE_TYPE_SELECT,
                        renderOptionValue: e => {
                            let [t] = e;
                            return O ? (0, a.jsx)(o.Spinner, {
                                type: o.SpinnerTypes.SPINNING_CIRCLE
                            }) : t.label
                        }
                    }), null != U ? (0, a.jsxs)("div", {
                        className: m.paymentSourceWarning,
                        children: [(0, a.jsx)(f.default, {
                            className: m.paymentSourceWarningIcon,
                            color: l.default.unsafe_rawColors.YELLOW_300.css
                        }), (0, a.jsx)(o.Text, {
                            variant: "text-xs/normal",
                            children: U
                        })]
                    }) : null]
                })
            }
        },
        920636: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var a = n("37983"),
                r = n("884691"),
                s = n("414456"),
                i = n.n(s),
                l = n("77078"),
                o = n("782340"),
                u = n("347129");
            class d extends r.PureComponent {
                render() {
                    var e;
                    let {
                        title: t,
                        actionText: n,
                        children: s,
                        error: d,
                        isLoading: c,
                        maxLength: f,
                        transitionState: _,
                        helpMessage: p,
                        retryPrompt: E,
                        retrySuccessMessage: S
                    } = this.props, {
                        code: m,
                        errorMessage: I,
                        retrySuccess: C
                    } = this.state, h = r.Children.count(s) > 0 ? (0, a.jsx)(l.Card, {
                        type: l.Card.Types.WARNING,
                        className: u.card,
                        children: (0, a.jsx)(l.Text, {
                            variant: "text-md/normal",
                            children: s
                        })
                    }) : null, g = null != E ? (0, a.jsxs)(l.Text, {
                        className: i(u.submitText, u.spacing),
                        variant: "text-sm/normal",
                        children: [(0, a.jsx)("br", {}), (0, a.jsx)(l.Clickable, {
                            className: i(u.spacing, u.link),
                            onClick: this.handleRetry,
                            children: (0, a.jsx)(l.Anchor, {
                                children: E
                            })
                        })]
                    }) : null, T = C ? (0, a.jsx)(l.Card, {
                        type: l.Card.Types.SUCCESS,
                        className: u.card,
                        children: (0, a.jsx)(l.Text, {
                            variant: "text-md/normal",
                            children: S
                        })
                    }) : null;
                    return (0, a.jsx)(l.ModalRoot, {
                        transitionState: _,
                        children: (0, a.jsxs)("form", {
                            onSubmit: this.handleSubmit,
                            children: [(0, a.jsx)(l.ModalHeader, {
                                separator: !1,
                                children: (0, a.jsx)(l.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: t
                                })
                            }), (0, a.jsxs)(l.ModalContent, {
                                children: [null != p ? (0, a.jsx)(l.Text, {
                                    color: "text-normal",
                                    variant: "text-md/normal",
                                    className: u.spacing,
                                    children: p
                                }) : null, h, T, (0, a.jsxs)(l.FormItem, {
                                    title: this.getLabelText(),
                                    className: u.spacing,
                                    children: [(0, a.jsx)(l.TextInput, {
                                        inputRef: this.setRef,
                                        onChange: this.handleCodeChange,
                                        placeholder: null !== (e = this.getPlaceholder()) && void 0 !== e ? e : void 0,
                                        maxLength: null != f ? f : 10,
                                        value: m,
                                        autoComplete: "one-time-code",
                                        autoFocus: !0
                                    }), this.errorPresent() ? (0, a.jsx)(l.Text, {
                                        color: "text-danger",
                                        variant: "text-xs/normal",
                                        className: u.error,
                                        children: null != d ? d : I
                                    }) : null, g]
                                })]
                            }), (0, a.jsxs)(l.ModalFooter, {
                                children: [(0, a.jsx)(l.Button, {
                                    type: "submit",
                                    disabled: c || 0 === m.length,
                                    children: null != n ? n : o.default.Messages.CONFIRM
                                }), (0, a.jsx)(l.Button, {
                                    onClick: this.handleCancel,
                                    disabled: c,
                                    look: l.Button.Looks.LINK,
                                    color: l.Button.Colors.PRIMARY,
                                    children: o.default.Messages.CANCEL
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
                        return null !== (e = this.props.label) && void 0 !== e ? e : this.props.disallowBackupCodes ? o.default.Messages.TWO_FA_ENTER_TOKEN_NO_BACKUP_LABEL : o.default.Messages.TWO_FA_ENTER_TOKEN_LABEL
                    }, this.getSupportedCodeTypes = () => this.props.disallowBackupCodes ? o.default.Messages.TWO_FA_AUTH_CODE_NO_BACKUP : o.default.Messages.TWO_FA_AUTH_CODE, this.getPlaceholder = () => {
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
        80300: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                backgroundImagePreloader: function() {
                    return d
                }
            });
            var a = n("37983"),
                r = n("884691"),
                s = n("310013"),
                i = n.n(s),
                l = n("407063");
            let o = /url\(['"](.*)['"]\)/,
                u = e => {
                    if (null == e || "" === e || "none" === e) return null;
                    let t = e.match(o);
                    return null != t ? t[1] : e
                };

            function d(e) {
                class t extends r.Component {
                    componentDidUpdate(e, t) {
                        if (t === this.state) return;
                        let {
                            cached: n,
                            loaded: a
                        } = this.state, {
                            style: r
                        } = this.props, s = null != r ? u(r.backgroundImage) : null;
                        null == s && s !== n ? this.setState({
                            loaded: !0,
                            cached: s
                        }) : this.cachedURLs.indexOf(s) >= 0 ? this.setState({
                            loaded: !0,
                            cached: s
                        }) : null != s && s !== n && !0 === a && this.setState({
                            loaded: !1
                        }, () => this.preloadURL(s))
                    }
                    preloadURL(e) {
                        this.canceller && this.canceller(), this.canceller = (0, l.loadImage)(e, t => {
                            this.canceller && (this.canceller = null), !t && (this.cachedURLs.push(e), this.setState({
                                cached: e,
                                loaded: !0
                            }));
                            let {
                                onBackgroundImageLoad: n
                            } = this.props;
                            n && n(t, e)
                        })
                    }
                    componentWillUnmount() {
                        this.canceller && this.canceller(), this.cachedURLs.length = 0
                    }
                    render() {
                        let {
                            style: t,
                            onBackgroundImageLoad: n,
                            ...r
                        } = this.props, {
                            loaded: s,
                            cached: i
                        } = this.state;
                        if (!s && null != t) {
                            var l;
                            t = {
                                ...t,
                                backgroundImage: null == (l = i) || "" === l || "none" === l ? "none" : "url(".concat(l, ")")
                            }
                        }
                        return (0, a.jsx)(e, {
                            style: t,
                            ...r
                        })
                    }
                    constructor(e) {
                        super(e), this.cachedURLs = [], this.canceller = null;
                        let {
                            style: t
                        } = e, n = null != t ? u(t.backgroundImage) : null;
                        this.cachedURLs = [n], this.state = {
                            cached: n,
                            loaded: !0
                        }
                    }
                }
                return i(t, e), t
            }
        },
        689988: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            }), n("704744");
            var a = n("913144");
            class r {
                initialize() {
                    this.initializedCount++, !(this.initializedCount > 1) && (this._initialize(), Object.entries(this.actions).forEach(e => {
                        let [t, n] = e;
                        a.default.subscribe(t, "function" == typeof n ? n : n.callback)
                    }), this.stores.forEach((e, t) => {
                        t.addChangeListener(e), e()
                    }))
                }
                terminate(e) {
                    !(this.initializedCount <= 0) && (e ? this.initializedCount = 0 : this.initializedCount--, 0 === this.initializedCount && (this._terminate(), Object.entries(this.actions).forEach(e => {
                        let [t, n] = e;
                        a.default.unsubscribe(t, "function" == typeof n ? n : n.callback)
                    })))
                }
                _initialize() {}
                _terminate() {}
                constructor() {
                    this.initializedCount = 0, this.actions = {}, this.stores = new Map
                }
            }
        },
        545158: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("773336");
            async function r(e, t) {
                let {
                    default: r
                } = await n.el("572544").then(n.bind(n, "572544")), s = r(e, {
                    skipExtensionCheck: t,
                    analyticsLocations: []
                });
                if (null != s) s(null);
                else if (a.isPlatformEmbedded) window.open(e);
                else {
                    let t = document.createElement("a");
                    t.href = e, t.target = "_blank", t.rel = "noreferrer noopener", t.click()
                }
            }
        },
        988268: function(e, t, n) {
            "use strict";
            var a, r, s, i;
            n.r(t), n.d(t, {
                ApplicationTypes: function() {
                    return a
                },
                BotTagTypes: function() {
                    return r
                }
            }), (s = a || (a = {}))[s.GAME = 1] = "GAME", s[s.TICKETED_EVENTS = 3] = "TICKETED_EVENTS", s[s.GUILD_ROLE_SUBSCRIPTIONS = 4] = "GUILD_ROLE_SUBSCRIPTIONS", (i = r || (r = {}))[i.BOT = 0] = "BOT", i[i.SERVER = 1] = "SERVER", i[i.SYSTEM_DM = 2] = "SYSTEM_DM", i[i.OFFICIAL = 3] = "OFFICIAL", i[i.STAFF_ONLY_DM = 4] = "STAFF_ONLY_DM", i[i.ORIGINAL_POSTER = 5] = "ORIGINAL_POSTER", i[i.AI = 6] = "AI", i[i.REMIX = 7] = "REMIX"
        },
        339783: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                },
                getIdealBankDisplayNameFromBankName: function() {
                    return o
                },
                getEPSBankDisplayNameFromBankName: function() {
                    return d
                }
            });
            var a = n("862205"),
                r = n("49111"),
                s = n("782340"),
                i = (0, a.createExperiment)({
                    kind: "user",
                    id: "2021-08_regional_payment_methods",
                    label: "Regional Payment Methods",
                    defaultConfig: {
                        enabledPaymentTypes: [],
                        forceCountryCode: null,
                        validCountryCodes: []
                    },
                    treatments: [{
                        id: 1,
                        label: "Regional Payment Method for Germany",
                        config: {
                            enabledPaymentTypes: [r.PaymentSourceTypes.SOFORT, r.PaymentSourceTypes.GIROPAY],
                            forceCountryCode: "DE",
                            validCountryCodes: ["DE"]
                        }
                    }, {
                        id: 2,
                        label: "Regional Payment Method for US",
                        config: {
                            enabledPaymentTypes: [r.PaymentSourceTypes.VENMO, r.PaymentSourceTypes.CASH_APP],
                            forceCountryCode: "US",
                            validCountryCodes: ["US"]
                        }
                    }, {
                        id: 3,
                        label: "Regional Payment Method for Brazil",
                        config: {
                            enabledPaymentTypes: [],
                            forceCountryCode: "BR",
                            validCountryCodes: ["BR"]
                        }
                    }, {
                        id: 4,
                        label: "Regional Payment Method for Turkey",
                        config: {
                            enabledPaymentTypes: [],
                            forceCountryCode: "TR",
                            validCountryCodes: ["TR"]
                        }
                    }, {
                        id: 5,
                        label: "Regional Payment Method for Poland",
                        config: {
                            enabledPaymentTypes: [r.PaymentSourceTypes.PRZELEWY24],
                            forceCountryCode: "PL",
                            validCountryCodes: ["PL"]
                        }
                    }, {
                        id: 6,
                        label: "Enable paysafecard",
                        config: {
                            enabledPaymentTypes: [r.PaymentSourceTypes.PAYSAFE_CARD],
                            forceCountryCode: "DE",
                            validCountryCodes: ["BG", "CZ", "DK", "HU", "RO", "SE", "DE"]
                        }
                    }, {
                        id: 7,
                        label: "Regional Payment Method for Philippines",
                        config: {
                            enabledPaymentTypes: [r.PaymentSourceTypes.GCASH],
                            forceCountryCode: "PH",
                            validCountryCodes: ["PH"]
                        }
                    }, {
                        id: 8,
                        label: "Regional Payment Method for Malaysia",
                        config: {
                            enabledPaymentTypes: [r.PaymentSourceTypes.GRABPAY_MY],
                            forceCountryCode: "MY",
                            validCountryCodes: ["MY"]
                        }
                    }, {
                        id: 9,
                        label: "Regional Payment Method for Vietnam",
                        config: {
                            enabledPaymentTypes: [r.PaymentSourceTypes.MOMO_WALLET],
                            forceCountryCode: "VN",
                            validCountryCodes: ["VN"]
                        }
                    }, {
                        id: 10,
                        label: "Regional Payment Method for Indonesia",
                        config: {
                            enabledPaymentTypes: [r.PaymentSourceTypes.GOPAY_WALLET],
                            forceCountryCode: "ID",
                            validCountryCodes: ["ID"]
                        }
                    }, {
                        id: 11,
                        label: "Regional Payment Method for South Korea",
                        config: {
                            enabledPaymentTypes: [r.PaymentSourceTypes.KAKAOPAY],
                            forceCountryCode: "KR",
                            validCountryCodes: ["KR"]
                        }
                    }, {
                        id: 12,
                        label: "Regional Payment Method for Belgium",
                        config: {
                            enabledPaymentTypes: [r.PaymentSourceTypes.PAYSAFE_CARD, r.PaymentSourceTypes.SOFORT, r.PaymentSourceTypes.BANCONTACT],
                            forceCountryCode: "BE",
                            validCountryCodes: ["BE"]
                        }
                    }, {
                        id: 13,
                        label: "Regional Payment Method for Austria",
                        config: {
                            enabledPaymentTypes: [r.PaymentSourceTypes.PAYSAFE_CARD, r.PaymentSourceTypes.EPS, r.PaymentSourceTypes.SOFORT],
                            forceCountryCode: "AT",
                            validCountryCodes: ["AT"]
                        }
                    }, {
                        id: 14,
                        label: "Regional Payment Method for Netherlands",
                        config: {
                            enabledPaymentTypes: [r.PaymentSourceTypes.PAYSAFE_CARD, r.PaymentSourceTypes.IDEAL, r.PaymentSourceTypes.SOFORT],
                            forceCountryCode: "NL",
                            validCountryCodes: ["NL"]
                        }
                    }, {
                        id: 15,
                        label: "Launch Paysafecard and Sofort",
                        config: {
                            enabledPaymentTypes: [r.PaymentSourceTypes.PAYSAFE_CARD, r.PaymentSourceTypes.SOFORT],
                            forceCountryCode: "ES",
                            validCountryCodes: ["ES", "IT"]
                        }
                    }, {
                        id: 16,
                        label: "Launch Cash App",
                        config: {
                            enabledPaymentTypes: [r.PaymentSourceTypes.CASH_APP],
                            forceCountryCode: "US",
                            validCountryCodes: ["US"]
                        }
                    }]
                });
            let l = new Map([
                ["abn_amro", "ABN AMRO"],
                ["asn_bank", "ASN Bank"],
                ["bunq", "Bunq"],
                ["handelsbanken", "Handelsbanken"],
                ["ing ", "ING"],
                ["knab", "Knab"],
                ["rabobank", "Rabobank"],
                ["revolut", "Revolut"],
                ["regiobank", "RegioBank"],
                ["sns_bank", "SNS Bank (De Volksbank)"],
                ["triodos_bank", "Triodos Bank"],
                ["van_lanschot", "Van Lanschot"]
            ]);

            function o(e) {
                return void 0 !== e && l.has(e) ? l.get(e) : s.default.Messages.PAYMENT_SOURCE_UNKNOWN
            }
            let u = new Map([
                ["arzte_und_apotheker_bank", "\xc4rzte- und Apothekerbank"],
                ["austrian_anadi_bank_ag", "Austrian Anadi Bank AG"],
                ["bank_austria", "Bank Austria"],
                ["bankhaus_carl_spangler", "Bankhaus Carl Sp\xe4ngler & Co.AG"],
                ["bankhaus_schelhammer_und_schattera_ag", "Bankhaus Schelhammer & Schattera AG"],
                ["bawag_psk_ag", "BAWAG P.S.K. AG"],
                ["bks_bank_ag", "BKS Bank AG"],
                ["brull_kallmus_bank_ag", "Br\xfcll Kallmus Bank AG"],
                ["btv_vier_lander_bank", "BTV VIER L\xc4NDER BANK"],
                ["capital_bank_grawe_gruppe_ag", "Capital Bank Grawe Gruppe AG"],
                ["dolomitenbank", "Dolomitenbank"],
                ["easybank_ag", "Easybank AG"],
                ["erste_bank_und_sparkassen", "Erste Bank und Sparkassen"],
                ["hypo_alpeadriabank_international_ag", "Hypo Alpe-Adria-Bank International AG"],
                ["hypo_noe_lb_fur_niederosterreich_u_wien", "HYPO NOE LB f\xfcr Nieder\xf6sterreich u. Wien"],
                ["hypo_oberosterreich_salzburg_steiermark", "HYPO Ober\xf6sterreich, Salzburg, Steiermark"],
                ["hypo_tirol_bank_ag", "Hypo Tirol Bank AG"],
                ["hypo_vorarlberg_bank_ag", "Hypo Vorarlberg Bank AG"],
                ["hypo_bank_burgenland_aktiengesellschaft", "HYPO-BANK BURGENLAND Aktiengesellschaft"],
                ["marchfelder_bank", "Marchfelder Bank"],
                ["oberbank_ag", "Oberbank AG"],
                ["raiffeisen_bankengruppe_osterreich", "Raiffeisen Bankengruppe \xd6sterreich"],
                ["schoellerbank_ag", "Schoellerbank AG"],
                ["sparda_bank_wien", "Sparda-Bank Wien"],
                ["volksbank_gruppe", "Volksbank Gruppe"],
                ["volkskreditbank_ag", "Volkskreditbank AG"],
                ["vr_bank_braunau", "VR-Bank Braunau"]
            ]);

            function d(e) {
                return void 0 !== e && u.has(e) ? u.get(e) : s.default.Messages.PAYMENT_SOURCE_UNKNOWN
            }
        },
        903016: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
                }
            });
            var a = n("37983"),
                r = n("884691"),
                s = n("414456"),
                i = n.n(s),
                l = n("446674"),
                o = n("266491"),
                u = n("77078"),
                d = n("345116"),
                c = n("521012"),
                f = n("145131"),
                _ = n("965397"),
                p = n("423487"),
                E = n("782340"),
                S = n("47274");
            class m extends r.PureComponent {
                render() {
                    let {
                        onClose: e
                    } = this.props;
                    return (0, a.jsxs)(u.ModalHeader, {
                        separator: !1,
                        justify: f.default.Justify.BETWEEN,
                        children: [(0, a.jsx)(u.Heading, {
                            variant: "heading-md/semibold",
                            children: this.props.text
                        }), null != e ? (0, a.jsx)(u.ModalCloseButton, {
                            onClick: e
                        }) : null]
                    })
                }
            }

            function I(e) {
                let {
                    imageClass: t,
                    children: n,
                    error: r,
                    onDismissError: s
                } = e;
                return (0, a.jsxs)("div", {
                    className: S.content,
                    children: [(0, a.jsx)("div", {
                        className: i(S.image, t)
                    }), n, (0, a.jsx)(o.default, {
                        children: null != r ? (0, a.jsx)(_.default, {
                            className: S.error,
                            children: (0, a.jsx)(u.FormErrorBlock, {
                                onDismiss: s,
                                children: r.message
                            })
                        }) : null
                    })]
                })
            }
            let C = e => {
                let {
                    canceledCount: t
                } = e, n = (0, l.useStateFromStores)([c.default], () => c.default.getPremiumTypeSubscription());
                return null == n ? null : (0, a.jsxs)("div", {
                    className: S.pendingCancellation,
                    children: [(0, a.jsx)(p.default, {
                        className: S.pendingCancellationIcon
                    }), (0, a.jsx)(u.Text, {
                        variant: "text-md/normal",
                        className: S.pendingCancellationMessage,
                        children: E.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_CANCEL_WARNING.format({
                            date: n.currentPeriodEnd,
                            canceledCount: t
                        })
                    })]
                })
            };

            function h(e) {
                let {
                    imageClass: t,
                    blurb: n,
                    guild: r,
                    warning: s,
                    error: i,
                    onDismissError: l,
                    slotCount: o = 1,
                    canceledCount: c = 0
                } = e;
                return (0, a.jsxs)(I, {
                    imageClass: t,
                    error: i,
                    onDismissError: l,
                    children: [(0, a.jsx)(u.Text, {
                        variant: "text-md/normal",
                        children: n
                    }), (0, a.jsx)(d.default, {
                        className: S.guildCard,
                        guild: r,
                        subscriptionChange: o
                    }), (0, a.jsx)(u.Text, {
                        variant: "text-md/normal",
                        children: s
                    }), c > 0 ? (0, a.jsx)(C, {
                        canceledCount: c
                    }) : null]
                })
            }

            function g(e) {
                var t, n;
                let {
                    imageClass: s,
                    blurb: i,
                    fromGuilds: l,
                    toGuild: o,
                    error: c,
                    onDismissError: f,
                    slotCount: _ = 1,
                    canceledCount: p = 0
                } = e, m = r.useRef(l), h = null === (t = m.current) || void 0 === t ? void 0 : t.length, g = null === (n = m.current) || void 0 === n ? void 0 : n.reduce((e, t) => (!e.hasOwnProperty(t.id) && (e[t.id] = []), e[t.id].push(t), e), {});
                return (0, a.jsxs)(I, {
                    imageClass: s,
                    error: c,
                    onDismissError: f,
                    children: [(0, a.jsx)(u.Text, {
                        variant: "text-md/normal",
                        children: i
                    }), (0, a.jsx)(u.Text, {
                        variant: "text-xs/bold",
                        className: S.transferGuildCardHeader,
                        children: E.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_TRANSFER_FROM_GUILD.format({
                            guildCount: h
                        })
                    }), null != g ? Object.keys(g).map(e => (0, a.jsx)(d.default, {
                        className: S.transferFromGuildCard,
                        guild: g[e][0],
                        subscriptionChange: -1 * g[e].length
                    }, e)) : null, (0, a.jsx)(u.Text, {
                        variant: "text-xs/normal",
                        className: S.transferGuildCardHeader,
                        children: E.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_TRANSFER_TO_GUILD.format({
                            slotCount: _
                        })
                    }), (0, a.jsx)("div", {
                        className: S.activeTransferGuildCardBorder,
                        children: (0, a.jsx)(d.default, {
                            className: S.transferToGuildCard,
                            guild: o,
                            subscriptionChange: null != l ? l.length : 1
                        })
                    }), p > 0 ? (0, a.jsx)(C, {
                        canceledCount: p
                    }) : null]
                })
            }
            class T extends r.PureComponent {
                render() {
                    let {
                        confirmation: e,
                        confirmationLabel: t,
                        isModifyingSubscription: n,
                        onConfirm: r,
                        onCancel: s
                    } = this.props;
                    return (0, a.jsxs)(u.ModalFooter, {
                        children: [(0, a.jsx)(u.Button, {
                            onClick: r,
                            submitting: n,
                            "aria-label": t,
                            children: e
                        }), (0, a.jsx)(u.Button, {
                            look: u.Button.Looks.LINK,
                            color: u.Button.Colors.PRIMARY,
                            onClick: s,
                            disabled: n,
                            children: E.default.Messages.CANCEL
                        })]
                    })
                }
            }
            class y extends r.PureComponent {
                render() {
                    let {
                        guild: e,
                        header: t,
                        blurb: n,
                        warning: s,
                        confirmation: i,
                        confirmationLabel: l,
                        imageClass: o,
                        error: d,
                        isModifyingSubscription: c,
                        onConfirm: f,
                        onCancel: _,
                        onDismissError: p,
                        canceledCount: E
                    } = this.props;
                    return (0, a.jsxs)(r.Fragment, {
                        children: [(0, a.jsx)(m, {
                            text: t
                        }), (0, a.jsx)(u.ModalContent, {
                            children: (0, a.jsx)(h, {
                                guild: e,
                                blurb: n,
                                warning: s,
                                imageClass: o,
                                error: d,
                                onDismissError: p,
                                canceledCount: E
                            })
                        }), (0, a.jsx)(T, {
                            confirmation: i,
                            confirmationLabel: l,
                            isModifyingSubscription: c,
                            onConfirm: f,
                            onCancel: _
                        })]
                    })
                }
            }
            y.Header = m, y.ApplyBody = h, y.TransferBody = g, y.Footer = T;
            var N = y
        },
        247760: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Steps: function() {
                    return r
                },
                default: function() {
                    return N
                }
            });
            var a, r, s = n("37983"),
                i = n("884691"),
                l = n("627445"),
                o = n.n(l),
                u = n("446674"),
                d = n("77078"),
                c = n("583367"),
                f = n("735201"),
                _ = n("305961"),
                p = n("625634"),
                E = n("751433"),
                S = n("599110"),
                m = n("427459"),
                I = n("903016"),
                C = n("936992"),
                h = n("658206"),
                g = n("49111"),
                T = n("782340"),
                y = n("822841");
            (a = r || (r = {})).UNUSED_QUANTITY_SELECT = "UNUSED_QUANTITY_SELECT", a.GUILD_SELECT = "GUILD_SELECT", a.CONFIRM = "CONFIRM", a.SUCCESS = "SUCCESS";
            var N = e => {
                var t, n;
                let {
                    guildBoostSlots: a,
                    selectedGuild: l,
                    locationSection: N,
                    transitionState: A,
                    onClose: R
                } = e, b = (0, m.getAvailableGuildBoostSlots)(p.default.boostSlots);
                o(null != a || null != l, "Must either provide slots or an initial selected guild"), o(!(null == a ? void 0 : a.some(e => e.isOnCooldown())), "If slots are provided, they must not be on cooldown");
                let v = [null == a ? r.UNUSED_QUANTITY_SELECT : null, null == l ? r.GUILD_SELECT : null, r.CONFIRM, r.SUCCESS].filter(e => null != e),
                    [M, O] = (0, u.useStateFromStoresArray)([f.default], () => [f.default.isModifyingAppliedBoost, f.default.applyBoostError]),
                    [P, x] = i.useState(""),
                    [L, U] = i.useState(v[0]),
                    [B, D] = i.useState(!1),
                    [G, F] = i.useState(l),
                    [k, j] = i.useState(null != a ? a : b.slice(0, 1)),
                    w = i.useMemo(() => null == k ? [] : k.map(e => {
                        let {
                            premiumGuildSubscription: t
                        } = e;
                        return _.default.getGuild(null == t ? void 0 : t.guildId)
                    }).filter(e => null != e), [k]),
                    V = i.useMemo(() => {
                        var e;
                        return (null == k ? void 0 : null === (e = k[0]) || void 0 === e ? void 0 : e.premiumGuildSubscription) != null
                    }, [k]),
                    Y = () => {
                        R(L === r.SUCCESS), S.default.track(g.AnalyticEvents.MODAL_DISMISSED, {
                            type: g.AnalyticsSections.PREMIUM_GUILD_SUBSCRIBE_MODAL,
                            location_section: N
                        })
                    },
                    H = {
                        [r.UNUSED_QUANTITY_SELECT]: {
                            body: () => (o(!(null == a && 0 === b.length), "Cannot provide no slots if there are no other available slots"), (0, s.jsxs)("div", {
                                className: y.quantitySelectorBody,
                                children: [(0, s.jsx)(d.Heading, {
                                    variant: "heading-md/semibold",
                                    className: y.quantitySelectorHeader,
                                    children: T.default.Messages.PREMIUM_GUILD_SUBSCRIBE_UNUSED_SLOTS_HEADER
                                }), (0, s.jsx)(d.Text, {
                                    variant: "text-md/normal",
                                    className: y.quantitySelectorDescription,
                                    children: T.default.Messages.PREMIUM_GUILD_SUBSCRIBE_UNUSED_SLOTS_DESCRIPTION
                                }), (0, s.jsxs)("div", {
                                    className: y.quantitySelectorWrapper,
                                    children: [(0, s.jsx)(E.default, {
                                        value: k.length,
                                        onChange: e => j(b.slice(0, e)),
                                        minValue: 1,
                                        maxValue: b.length
                                    }), (0, s.jsx)(d.Text, {
                                        className: y.quantitySelectorLabel,
                                        variant: "text-md/normal",
                                        children: T.default.Messages.PREMIUM_GUILD_SUBSCRIBE_UNUSED_SLOTS_COUNTER
                                    })]
                                })]
                            })),
                            footer: () => (0, s.jsxs)(d.ModalFooter, {
                                children: [(0, s.jsx)(d.Button, {
                                    onClick: () => U(r.CONFIRM),
                                    children: T.default.Messages.PREMIUM_GUILD_SUBSCRIBE_UNUSED_SLOTS_NEXT
                                }), (0, s.jsx)(d.Button, {
                                    look: d.Button.Looks.LINK,
                                    color: d.Button.Colors.PRIMARY,
                                    onClick: Y,
                                    children: T.default.Messages.PREMIUM_GUILD_SUBSCRIBE_UNUSED_SLOTS_CANCEL
                                })]
                            })
                        },
                        [r.GUILD_SELECT]: {
                            header: () => (0, s.jsx)(C.GuildSelectModalHeader, {
                                isTransfer: V,
                                query: P,
                                setQuery: x
                            }),
                            bodyClass: y.selectContent,
                            body: () => (0, s.jsx)(C.GuildSelectModalBody, {
                                onClose: Y,
                                onSelectGuild: e => {
                                    F(e), U(r.CONFIRM)
                                },
                                isTransfer: V,
                                selectedSlotGuilds: w,
                                query: P
                            })
                        },
                        [r.CONFIRM]: {
                            body() {
                                if (null == G) return null;
                                let e = k.filter(e => (0, m.isGuildBoostSlotCanceled)(e)).length,
                                    t = k.length,
                                    n = w.length;
                                return V ? (0, s.jsx)(I.default.TransferBody, {
                                    fromGuilds: w,
                                    toGuild: G,
                                    blurb: T.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_TRANSFER_BLURB.format({
                                        slotCount: t,
                                        guildCount: n
                                    }),
                                    imageClass: y.transferConfirmImage,
                                    error: B ? O : null,
                                    onDismissError: () => D(!1),
                                    slotCount: t,
                                    canceledCount: e
                                }) : (0, s.jsx)(I.default.ApplyBody, {
                                    guild: G,
                                    blurb: T.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_BLURB,
                                    warning: T.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_COOLDOWN_WARNING.format({
                                        days: g.GUILD_BOOST_APPLY_COOLDOWN_DAYS,
                                        slotCount: t
                                    }),
                                    imageClass: y.confirmImage,
                                    error: B ? O : null,
                                    onDismissError: () => D(!1),
                                    slotCount: t,
                                    canceledCount: e
                                })
                            },
                            footer() {
                                let e = k.length,
                                    t = v[0] === r.CONFIRM ? Y : () => U(v[v.indexOf(L) - 1]),
                                    n = async () => {
                                        if (null != G && (null == k ? void 0 : k.length) !== 0) {
                                            o(!k.some(e => e.isOnCooldown()), "Cannot use a premium guild subscription slot while on cooldown");
                                            try {
                                                await Promise.all(k.map(e => {
                                                    let {
                                                        premiumGuildSubscription: t
                                                    } = e;
                                                    return null != t ? (0, c.unapplyFromGuild)(t.guildId, t.id) : Promise.resolve()
                                                })), await (0, c.applyToGuild)(G.id, k.map(e => {
                                                    let {
                                                        id: t
                                                    } = e;
                                                    return t
                                                })), U(r.SUCCESS)
                                            } catch (e) {
                                                D(!0)
                                            }
                                        }
                                    };
                                return (0, s.jsx)(I.default.Footer, {
                                    confirmation: V ? T.default.Messages.PREMIUM_GUILD_SUBSCRIBE_TRANSFER_CONFIRM_CONFIRMATION.format({
                                        slotCount: e
                                    }) : T.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_CONFIRMATION.format({
                                        slotCount: e
                                    }),
                                    confirmationLabel: V ? T.default.Messages.PREMIUM_GUILD_SUBSCRIBE_TRANSFER_CONFIRM_CONFIRMATION_LABEL.format({
                                        slotCount: e
                                    }) : T.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_CONFIRMATION_LABEL.format({
                                        slotCount: e
                                    }),
                                    onConfirm: n,
                                    onCancel: t,
                                    isModifyingSubscription: M
                                })
                            }
                        },
                        [r.SUCCESS]: {
                            body: () => (0, s.jsx)(h.GuildBoostingConfirmation, {
                                guild: G,
                                isTransfer: V,
                                guildBoostQuantity: k.length,
                                onClose: Y
                            })
                        }
                    };
                i.useEffect(() => {
                    S.default.track(g.AnalyticEvents.OPEN_MODAL, {
                        type: g.AnalyticsSections.PREMIUM_GUILD_SUBSCRIBE_MODAL,
                        location_section: N
                    })
                }, [N]);
                let K = H[L];
                return (0, s.jsxs)(d.ModalRoot, {
                    transitionState: A,
                    className: y.modal,
                    size: d.ModalSize.SMALL,
                    children: [null === (t = K.header) || void 0 === t ? void 0 : t.call(K), (0, s.jsx)(d.ModalContent, {
                        className: K.bodyClass,
                        children: (0, s.jsx)(d.Sequencer, {
                            step: L,
                            steps: v,
                            children: K.body()
                        })
                    }), null === (n = K.footer) || void 0 === n ? void 0 : n.call(K), (0, s.jsx)(d.ModalCloseButton, {
                        className: y.modalCloseButton,
                        onClick: Y
                    })]
                })
            }
        },
        936992: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GuildSelectModalHeader: function() {
                    return h
                },
                GuildSelectModalBody: function() {
                    return g
                },
                default: function() {
                    return T
                }
            });
            var a = n("37983"),
                r = n("884691"),
                s = n("448105"),
                i = n.n(s),
                l = n("446674"),
                o = n("77078"),
                u = n("54239"),
                d = n("393414"),
                c = n("334811"),
                f = n("305961"),
                _ = n("677099"),
                p = n("109024"),
                E = n("810567"),
                S = n("427459"),
                m = n("49111"),
                I = n("782340"),
                C = n("109396");

            function h(e) {
                let {
                    isTransfer: t = !1,
                    setQuery: n,
                    query: r
                } = e;
                return (0, a.jsxs)(o.ModalHeader, {
                    className: C.selectHeaderContainer,
                    children: [(0, a.jsx)(o.Heading, {
                        className: C.selectHeader,
                        variant: "heading-md/semibold",
                        children: t ? I.default.Messages.PREMIUM_GUILD_SUBSCRIBE_SELECT_GUILD_TRANSFER_HEADER : I.default.Messages.PREMIUM_GUILD_SUBSCRIBE_SELECT_GUILD_HEADER
                    }), (0, a.jsx)(E.default, {
                        size: E.default.Sizes.MEDIUM,
                        placeholder: I.default.Messages.PREMIUM_GUILD_SUBSCRIBE_SEARCH_GUILD_PLACEHOLDER,
                        "aria-label": I.default.Messages.PREMIUM_GUILD_SUBSCRIBE_SEARCH_GUILD_PLACEHOLDER,
                        className: C.selectSearch,
                        query: r,
                        onChange: n,
                        onClear: () => n("")
                    })]
                })
            }

            function g(e) {
                let {
                    isTransfer: t = !1,
                    selectedSlotGuilds: n,
                    onClose: r,
                    onSelectGuild: s,
                    query: E
                } = e, h = (0, l.useStateFromStores)([_.default], () => _.default.getFlattenedGuildIds()), g = (0, l.useStateFromStoresArray)([f.default], () => h.reduce((e, t) => {
                    let a = f.default.getGuild(t);
                    return null == a || null != n && n.some(e => e.id === t) ? e : ((E.length <= 0 || i(E.toLowerCase(), null == a ? void 0 : a.name.toLowerCase())) && e.push(a), e)
                }, [])), {
                    enabled: T
                } = c.default.useExperiment({
                    location: "5f417c_1"
                }, {
                    autoTrackExposure: !0
                });

                function y() {
                    r(), (0, u.popLayer)(), (0, d.transitionTo)(m.Routes.GUILD_DISCOVERY)
                }
                return (0, a.jsxs)(a.Fragment, {
                    children: [0 === g.length && (0, a.jsx)("div", {
                        className: C.emptyStateWrapper,
                        children: (0, a.jsx)(o.Text, {
                            variant: "text-md/normal",
                            children: 0 === h.length ? I.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_APPLY_NON_GUILD_MEMBER.format({
                                publicGuildDirectoryHook: (e, t) => (0, a.jsx)(o.Clickable, {
                                    onClick: y,
                                    tag: "a",
                                    children: e
                                }, t)
                            }) : I.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_APPLY_GUILD_NOT_FOUND
                        })
                    }), g.map(e => (0, a.jsxs)(o.Clickable, {
                        className: C.selectGuild,
                        onClick: () => {
                            s(e)
                        },
                        children: [(0, a.jsx)(p.default, {
                            className: C.selectGuildIcon,
                            guild: e,
                            size: p.default.Sizes.SMALL
                        }), (0, a.jsxs)("div", {
                            className: C.selectGuildCopy,
                            children: [(0, a.jsx)(o.Text, {
                                className: C.selectGuildName,
                                variant: "text-md/normal",
                                children: e.name
                            }), T && (0, a.jsx)(o.Text, {
                                className: C.selectGuildLevel,
                                color: "text-muted",
                                variant: "text-xs/normal",
                                children: (0, S.getTierName)(e.premiumTier)
                            })]
                        }), T && (0, a.jsx)(o.Text, {
                            className: C.selectGuildPseudoCta,
                            color: "always-white",
                            variant: "text-sm/medium",
                            children: t ? I.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_TRANSFER_HERE : I.default.Messages.PREMIUM_GUILD_SUBSCRIPTION
                        })]
                    }, e.id))]
                })
            }

            function T(e) {
                let {
                    onClose: t,
                    onSelectGuild: n,
                    transitionState: s
                } = e, [i, l] = r.useState("");
                return (0, a.jsxs)(o.ModalRoot, {
                    transitionState: s,
                    className: C.modal,
                    size: o.ModalSize.SMALL,
                    children: [(0, a.jsx)(h, {
                        query: i,
                        setQuery: l
                    }), (0, a.jsx)(o.ModalContent, {
                        className: C.modalContent,
                        children: (0, a.jsx)(g, {
                            onClose: t,
                            onSelectGuild: n,
                            query: i
                        })
                    }), (0, a.jsx)(o.ModalCloseButton, {
                        className: C.modalCloseButton,
                        onClick: t
                    })]
                })
            }
        },
        50926: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var a = n("872717"),
                r = n("913144"),
                s = n("479756"),
                i = n("38654"),
                l = n("9294"),
                o = n("26989"),
                u = n("337543"),
                d = n("697218"),
                c = n("49111");
            let f = async (e, t) => {
                let n = null != t ? t : u.default.getInviteKeyForGuildId(e),
                    s = d.default.getCurrentUser(),
                    i = !o.default.isMember(e, null == s ? void 0 : s.id);
                try {
                    let t = await a.default.get({
                        url: c.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        query: {
                            with_guild: i,
                            invite_code: null != n ? (0, l.parseInviteCodeFromInviteKey)(n) : void 0
                        },
                        oldFormErrors: !0
                    });
                    if (null == t.body) throw t;
                    let {
                        body: s
                    } = t;
                    return r.default.dispatch({
                        type: "MEMBER_VERIFICATION_FORM_UPDATE",
                        guildId: e,
                        form: {
                            version: s.version,
                            description: s.description,
                            formFields: s.form_fields,
                            guild: s.guild
                        }
                    }), s
                } catch (t) {
                    r.default.dispatch({
                        type: "MEMBER_VERIFICATION_FORM_FETCH_FAIL",
                        guildId: e
                    })
                }
            }, _ = async (e, t) => {
                let n = await a.default.patch({
                        url: c.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        body: {
                            form_fields: t
                        },
                        oldFormErrors: !0
                    }),
                    {
                        body: s
                    } = n;
                r.default.dispatch({
                    type: "MEMBER_VERIFICATION_FORM_UPDATE",
                    guildId: e,
                    form: {
                        version: s.version,
                        description: s.description,
                        formFields: s.form_fields
                    }
                })
            }, p = async (e, t) => {
                let n = await a.default.patch({
                        url: c.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        body: {
                            description: t
                        },
                        oldFormErrors: !0
                    }),
                    {
                        body: s
                    } = n;
                r.default.dispatch({
                    type: "MEMBER_VERIFICATION_FORM_UPDATE",
                    guildId: e,
                    form: {
                        version: s.version,
                        description: s.description,
                        formFields: s.form_fields
                    }
                })
            }, E = async (e, t) => {
                await a.default.patch({
                    url: c.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                    body: {
                        enabled: t
                    },
                    oldFormErrors: !0
                })
            }, S = async (e, t) => {
                if (i.default.isFullServerPreview(e)) {
                    (0, s.updateImpersonatedData)(e, {
                        memberOptions: {
                            isPending: !1
                        }
                    });
                    return
                }
                try {
                    let n = await a.default.put({
                            url: c.Endpoints.GUILD_MEMBER_REQUEST_TO_JOIN(e),
                            body: {
                                version: t.version,
                                form_fields: t.formFields
                            }
                        }),
                        {
                            body: s
                        } = n;
                    return r.default.dispatch({
                        type: "USER_GUILD_JOIN_REQUEST_UPDATE",
                        guildId: e,
                        request: s
                    }), s
                } catch (e) {
                    throw e
                }
            };
            var m = {
                fetchVerificationForm: f,
                updateVerificationForm: _,
                updateVerificationFormDescription: p,
                enableVerificationForm: E,
                submitVerificationForm: S
            }
        },
        394294: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AUTOMATIC_APPROVAL_FORM_FIELDS: function() {
                    return s
                },
                MANUAL_APPROVAL_FORM_FIELDS: function() {
                    return i
                },
                MAX_FORM_ELEMENTS: function() {
                    return l
                },
                MAX_NUM_RULES: function() {
                    return o
                },
                MAX_RULE_LENGTH: function() {
                    return u
                },
                MAX_QUESTION_LENGTH: function() {
                    return d
                },
                MAX_NUM_CHOICES: function() {
                    return c
                },
                MAX_CHOICE_LENGTH: function() {
                    return f
                },
                MAX_TEXT_RESPONSE_LENGTH: function() {
                    return _
                },
                MAX_PARAGRAPH_RESPONSE_LENGTH: function() {
                    return p
                },
                MAX_DESCRIPTION_LENGTH: function() {
                    return E
                },
                MEMBER_VERIFICATION_TYPE: function() {
                    return S
                },
                IN_APP_MEMBER_VERIFICATION_MODAL_KEY: function() {
                    return m
                }
            });
            var a, r = n("567054");
            r.VerificationFormFieldTypes.VERIFICATION;
            let s = new Set([r.VerificationFormFieldTypes.TERMS]),
                i = new Set([r.VerificationFormFieldTypes.MULTIPLE_CHOICE, r.VerificationFormFieldTypes.TEXT_INPUT, r.VerificationFormFieldTypes.PARAGRAPH]),
                l = 5,
                o = 16,
                u = 300,
                d = 300,
                c = 8,
                f = 150,
                _ = 150,
                p = 1e3,
                E = 300,
                S = "Membership Gating",
                m = "in-app-member-verification";
            (a || (a = {})).VERIFICATION_INFO = "VERIFICATION_INFO"
        },
        233322: function(e, t, n) {
            "use strict";
            let a;
            n.r(t), n.d(t, {
                openMemberVerificationModal: function() {
                    return r
                }
            }), a = n("453265").default;
            let r = a.openMemberVerificationModal;
            a.closeMemberVerificationModal
        },
        347977: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useMemberVerificationFormNoticeStore: function() {
                    return l
                },
                setHasUnsubmittedChanges: function() {
                    return o
                },
                setShowWarning: function() {
                    return u
                }
            });
            var a = n("308503"),
                r = n("659500"),
                s = n("49111");
            let i = Object.freeze({
                    hasUnsubmittedChanges: !1,
                    shouldShowWarning: !1
                }),
                l = (0, a.default)(e => i),
                o = e => {
                    l.setState({
                        hasUnsubmittedChanges: e
                    })
                },
                u = e => {
                    l.setState({
                        shouldShowWarning: e
                    }), e && r.ComponentDispatch.dispatch(s.ComponentActions.EMPHASIZE_NOTICE)
                }
        },
        453265: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var a = n("37983");
            n("884691");
            var r = n("551042"),
                s = n("599110"),
                i = n("50926"),
                l = n("347977"),
                o = n("394294"),
                u = n("49111");
            let d = () => {
                    s.default.track(u.AnalyticEvents.MODAL_DISMISSED, {
                        type: o.MEMBER_VERIFICATION_TYPE
                    })
                },
                c = e => {
                    s.default.track(u.AnalyticEvents.OPEN_MODAL, {
                        type: o.MEMBER_VERIFICATION_TYPE,
                        guild_id: e
                    })
                };
            var f = {
                openMemberVerificationModal(e, t) {
                    c(e);
                    let s = async t => {
                        await i.default.submitVerificationForm(e, t)
                    };
                    (0, r.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("93184").then(n.bind(n, "93184"));
                        return n => (0, a.jsx)(t, {
                            ...n,
                            guildId: e,
                            onComplete: s,
                            onClose: function() {
                                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                if (!e) {
                                    if (l.useMemberVerificationFormNoticeStore.getState().hasUnsubmittedChanges) {
                                        (0, l.setShowWarning)(!0);
                                        return
                                    }
                                    d()
                                }
                                n.onClose()
                            }
                        })
                    }, {
                        modalKey: o.IN_APP_MEMBER_VERIFICATION_MODAL_KEY,
                        onCloseRequest: () => {
                            d(), l.useMemberVerificationFormNoticeStore.getState().hasUnsubmittedChanges ? (0, l.setShowWarning)(!0) : (0, r.closeModal)(o.IN_APP_MEMBER_VERIFICATION_MODAL_KEY)
                        },
                        onCloseCallback: t
                    })
                },
                closeMemberVerificationModal() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    !e && d(), (0, r.closeModal)(o.IN_APP_MEMBER_VERIFICATION_MODAL_KEY)
                }
            }
        },
        479756: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                startImpersonating: function() {
                    return I
                },
                updateImpersonating: function() {
                    return C
                },
                stopImpersonating: function() {
                    return h
                },
                updateImpersonatedChannels: function() {
                    return T
                },
                updateImpersonatedRoles: function() {
                    return y
                },
                updateImpersonatedData: function() {
                    return N
                }
            });
            var a = n("913144"),
                r = n("716241"),
                s = n("393414"),
                i = n("42203"),
                l = n("923959"),
                o = n("26989"),
                u = n("305961"),
                d = n("957255"),
                c = n("18494"),
                f = n("282109"),
                _ = n("599110"),
                p = n("38654"),
                E = n("507950"),
                S = n("49111"),
                m = n("724210");

            function I(e, t) {
                _.default.track(S.AnalyticEvents.VIEW_AS_ROLES_SELECTED, {
                    num_roles: Object.keys(t.roles).length,
                    ...(0, r.collectGuildAnalyticsMetadata)(e),
                    is_viewing_as_member: t.type === E.ImpersonateType.NEW_MEMBER
                }), a.default.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: e,
                    data: t
                }), g(e)
            }

            function C(e, t) {
                let n = p.default.getData(e);
                null != n && n.type === t.type && (_.default.track(S.AnalyticEvents.VIEW_AS_ROLES_SELECTED, {
                    num_roles: Object.keys(n.roles).length,
                    ...(0, r.collectGuildAnalyticsMetadata)(e),
                    is_viewing_as_member: n.type === E.ImpersonateType.NEW_MEMBER
                }), a.default.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: e,
                    data: {
                        ...n,
                        ...t
                    }
                }), g(e))
            }

            function h(e) {
                a.default.dispatch({
                    type: "IMPERSONATE_STOP",
                    guildId: e
                })
            }

            function g(e) {
                let t = c.default.getChannelId(e),
                    n = i.default.getChannel(t),
                    a = null != t && (0, m.isStaticChannelRoute)(t);
                if (!a && !d.default.can(S.Permissions.VIEW_CHANNEL, n)) {
                    let t = l.default.getDefaultChannel(e);
                    null != t && (0, s.transitionTo)(S.Routes.CHANNEL(e, t.id))
                }
            }

            function T(e, t, n) {
                let a = new Set(f.default.getOptedInChannels(e));
                t.forEach(e => a.add(e)), n.forEach(e => a.delete(e)), C(e, {
                    type: E.ImpersonateType.NEW_MEMBER,
                    optInChannels: a
                })
            }

            function y(e, t) {
                let n = u.default.getGuild(e);
                if (null == n) return;
                ! function(e, t) {
                    let n = [...l.default.getSelectableChannelIds(e), ...l.default.getVocalChannelIds(e)],
                        a = Array.from(t);
                    l.default.addConditionalChangeListener(() => {
                        let t = o.default.getSelfMember(e);
                        if (null == t) return !1;
                        if (a.some(e => !t.roles.includes(e))) return !0;
                        let r = [...l.default.getSelectableChannelIds(e), ...l.default.getVocalChannelIds(e)],
                            s = r.filter(e => !n.includes(e));
                        return s.length > 0 && T(e, s, []), !1
                    })
                }(e, t);
                let a = {};
                t.forEach(e => a[e] = n.roles[e]), C(e, {
                    type: E.ImpersonateType.NEW_MEMBER,
                    roles: a
                })
            }

            function N(e, t) {
                C(e, {
                    type: E.ImpersonateType.NEW_MEMBER,
                    ...t
                })
            }
        },
        9294: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                generateInviteKeyFromUrlParams: function() {
                    return i
                },
                generateInviteKeyFromExtraData: function() {
                    return l
                },
                parseExtraDataFromInviteKey: function() {
                    return o
                },
                parseInviteCodeFromInviteKey: function() {
                    return u
                }
            });
            var a = n("522632"),
                r = n("833858");
            let s = "event";

            function i(e, t) {
                if (null == t) return e;
                let n = function(e) {
                    let t = "?" === e.charAt(0) ? e.substring(1) : e;
                    try {
                        let e = a.parse(t);
                        return (0, r.getFirstQueryStringValue)(e[s])
                    } catch (e) {
                        return
                    }
                }(t);
                return l({
                    baseCode: e,
                    guildScheduledEventId: n
                })
            }

            function l(e) {
                let {
                    baseCode: t,
                    guildScheduledEventId: n
                } = e;
                return null == n ? t : "".concat(t, "?").concat(s, "=").concat(n)
            }

            function o(e) {
                let [t, n] = e.split("?");
                if (null == n) return {
                    baseCode: t
                };
                let i = a.parse(n),
                    l = (0, r.getFirstQueryStringValue)(i[s]);
                return {
                    baseCode: t,
                    guildScheduledEventId: l
                }
            }

            function u(e) {
                let [t] = e.split("?");
                return t
            }
        },
        809071: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                updateSubscriptionInvoicePreview: function() {
                    return f
                },
                useSubscriptionInvoicePreview: function() {
                    return E
                },
                useGetSubscriptionInvoice: function() {
                    return S
                },
                getItemUnitPriceWithDiscount: function() {
                    return m
                }
            });
            var a = n("884691"),
                r = n("446674"),
                s = n("872717"),
                i = n("448993"),
                l = n("195358"),
                o = n("521012"),
                u = n("719923"),
                d = n("49111");
            async function c(e) {
                let {
                    items: t,
                    paymentSourceId: n,
                    trialId: a,
                    code: r,
                    applyEntitlements: o = !1,
                    currency: c,
                    renewal: f,
                    metadata: _
                } = e;
                t = (0, u.coerceExistingItemsToNewItemInterval)(t);
                let p = {
                    items: t.map(e => {
                        let {
                            planId: t,
                            ...n
                        } = e;
                        return {
                            ...n,
                            plan_id: t
                        }
                    }),
                    payment_source_id: n,
                    trial_id: a,
                    code: r,
                    apply_entitlements: o,
                    currency: c,
                    renewal: f,
                    metadata: _
                };
                try {
                    let e = await s.default.post({
                        url: d.Endpoints.BILLING_SUBSCRIPTIONS_PREVIEW,
                        body: p,
                        oldFormErrors: !0
                    });
                    return l.default.createInvoiceFromServer(e.body)
                } catch (e) {
                    throw new i.BillingError(e)
                }
            }
            async function f(e) {
                var t;
                let {
                    subscriptionId: n,
                    items: a,
                    paymentSourceId: r,
                    renewal: o,
                    currency: c,
                    applyEntitlements: f = !1,
                    analyticsLocations: _,
                    analyticsLocation: p
                } = e;
                null != a && (a = (0, u.coerceExistingItemsToNewItemInterval)(a));
                let E = {
                    items: null === (t = a) || void 0 === t ? void 0 : t.map(e => {
                        let {
                            planId: t,
                            ...n
                        } = e;
                        return {
                            ...n,
                            plan_id: t
                        }
                    }),
                    payment_source_id: r,
                    renewal: o,
                    apply_entitlements: f,
                    currency: c
                };
                try {
                    let e = await s.default.patch({
                        url: d.Endpoints.BILLING_SUBSCRIPTION_PREVIEW(n),
                        query: {
                            location: p,
                            location_stack: _
                        },
                        body: E,
                        oldFormErrors: !0
                    });
                    return l.default.createInvoiceFromServer(e.body)
                } catch (e) {
                    throw new i.BillingError(e)
                }
            }
            async function _(e) {
                let {
                    subscriptionId: t,
                    preventFetch: n
                } = e;
                if (n) return null;
                let a = await s.default.get({
                    url: d.Endpoints.BILLING_SUBSCRIPTION_INVOICE(t),
                    oldFormErrors: !0
                });
                return l.default.createInvoiceFromServer(a.body)
            }

            function p(e, t) {
                let {
                    preventFetch: n = !1
                } = e, [s, i] = (0, a.useState)(null), [l, u] = (0, a.useState)(null), d = (0, r.useStateFromStores)([o.default], () => o.default.getSubscriptions());
                return (0, a.useEffect)(() => {
                    let e = !1;
                    async function a() {
                        try {
                            u(null), i(null);
                            let n = await t();
                            !e && i(n)
                        } catch (t) {
                            !e && u(t)
                        }
                    }
                    return !n && a(), () => {
                        e = !0
                    }
                }, [n, t, d]), [s, l]
            }

            function E(e) {
                if ("subscriptionId" in e && null == e.subscriptionId) {
                    let {
                        subscriptionId: t,
                        ...n
                    } = e;
                    e = n
                }
                let t = (0, a.useCallback)(() => "subscriptionId" in e ? f(e) : "items" in e ? c(e) : null, [JSON.stringify(e)]);
                return p(e, t)
            }

            function S(e) {
                let t = (0, a.useCallback)(() => _(e), [JSON.stringify(e)]);
                return p(e, t)
            }

            function m(e) {
                let t = e.subscriptionPlanPrice;
                return e.discounts.forEach(n => {
                    let a = n.amount / e.quantity;
                    t -= a
                }), t
            }
        },
        345116: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var a = n("37983"),
                r = n("884691"),
                s = n("414456"),
                i = n.n(s),
                l = n("931138"),
                o = n("109024"),
                u = n("206453"),
                d = n("811151"),
                c = n("427459"),
                f = n("804308");
            class _ extends r.PureComponent {
                render() {
                    let {
                        tier: e
                    } = this.props;
                    return (0, a.jsxs)("div", {
                        className: f.tierPill,
                        children: [(0, a.jsx)(l.default, {
                            className: f.tierPillStar,
                            children: (0, a.jsx)(u.default, {
                                tier: e,
                                className: f.tierPillGem
                            })
                        }), (0, c.getTierName)(e)]
                    })
                }
            }
            let p = e => {
                let {
                    subscriptionChange: t,
                    guild: n
                } = e;
                if (0 === t) return null;
                let r = Math.max(n.premiumSubscriberCount + t, 0),
                    s = (0, c.getGuildTierFromAppliedBoostCount)(r, n.id),
                    i = s - (0, c.getGuildTierFromAppliedBoostCount)(n.premiumSubscriberCount, n.id);
                return 0 === i ? null : (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(d.default, {
                        className: i > 0 ? f.levelUpIcon : f.levelDownIcon
                    }), (0, a.jsx)(_, {
                        tier: s
                    })]
                })
            };
            class E extends r.PureComponent {
                render() {
                    let {
                        guild: e,
                        className: t,
                        subscriptionChange: n
                    } = this.props;
                    return (0, a.jsxs)("div", {
                        className: i(f.subscription, t),
                        children: [(0, a.jsx)(o.default, {
                            guild: e,
                            size: o.default.Sizes.LARGE
                        }), (0, a.jsxs)("div", {
                            className: f.subscriptionInfo,
                            children: [(0, a.jsx)("div", {
                                className: f.guildName,
                                children: e.name
                            }), (0, a.jsxs)("div", {
                                className: f.tierInfo,
                                children: [(0, a.jsx)(_, {
                                    tier: e.premiumTier
                                }), (0, a.jsx)(p, {
                                    guild: e,
                                    subscriptionChange: null != n ? n : 0
                                })]
                            })]
                        })]
                    })
                }
            }
        },
        824734: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("37983");
            n("884691");
            var r = n("414456"),
                s = n.n(r),
                i = n("153160"),
                l = n("646718"),
                o = n("782340"),
                u = n("552033");

            function d(e) {
                let {
                    price: t,
                    currency: n,
                    intervalType: r,
                    className: d,
                    intervalCount: c = 1,
                    isPrepaidPaymentSource: f = !1
                } = e, _ = (0, i.formatPrice)(t, n), p = null;
                return r === l.SubscriptionIntervalTypes.YEAR ? p = o.default.Messages.BILLING_PRICE_PER_YEAR_BOLD.format({
                    price: _
                }) : r === l.SubscriptionIntervalTypes.MONTH && 1 === c ? p = o.default.Messages.BILLING_PRICE_PER_MONTH_BOLD.format({
                    price: _
                }) : r === l.SubscriptionIntervalTypes.MONTH && c > 1 && (p = o.default.Messages.BILLING_PRICE_PER_MULTI_MONTHS_BOLD.format({
                    price: _,
                    intervalCount: c
                })), (0, a.jsx)("div", {
                    className: s(u.pricePerInterval, d),
                    "data-testid": "PricePerInterval-".concat(n),
                    children: null == r || f ? (0, a.jsx)("strong", {
                        children: _
                    }) : p
                })
            }
        },
        623003: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var a = n("37983"),
                r = n("884691"),
                s = n("414456"),
                i = n.n(s),
                l = n("849085");
            let o = r.forwardRef(function(e, t) {
                let {
                    isActive: n,
                    children: r
                } = e;
                return (0, a.jsx)("div", {
                    className: i(l.wrapper, {
                        [l.wrapperActive]: n
                    }),
                    ref: t,
                    children: r
                })
            });
            var u = o
        },
        729912: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SilentMessagesExperiment: function() {
                    return r
                }
            });
            var a = n("862205");
            let r = (0, a.createExperiment)({
                kind: "user",
                id: "2023-01_silent_messages",
                label: "Silent Messages",
                defaultConfig: {
                    allowSending: !1
                },
                treatments: [{
                    id: 1,
                    label: "Allow sending @silent messages",
                    config: {
                        allowSending: !0
                    }
                }]
            })
        },
        804888: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SILENT_RE: function() {
                    return s
                },
                canSuppressNotifications: function() {
                    return i
                },
                default: function() {
                    return l
                }
            });
            var a = n("729912");
            let r = "@silent",
                s = new RegExp("^".concat(r, "(\\s|$)"));

            function i() {
                let e = a.SilentMessagesExperiment.getCurrentConfig({
                    location: "456bd9_1"
                }, {
                    autoTrackExposure: !1
                });
                return e.allowSending
            }

            function l(e) {
                return i() && null != e.match(s) ? [!0, e.substring(r.length).trim()] : [!1, e]
            }
        },
        334811: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var a = n("862205");
            let r = (0, a.createExperiment)({
                kind: "user",
                id: "2023-04_guild_boosting_settings_redesign",
                label: "Guild Boosting Settings Redesign",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Variant 1",
                    config: {
                        enabled: !0
                    }
                }, {
                    id: 2,
                    label: "Variant 1 international",
                    config: {
                        enabled: !0
                    }
                }]
            });
            var s = r
        },
        917219: function(e, t, n) {
            "use strict";
            var a, r, s, i;
            n.r(t), n.d(t, {
                VideoFilterType: function() {
                    return a
                },
                DefaultVideoBackground: function() {
                    return r
                },
                ANIMATED_DEFAULT_VIDEO_BACKGROUNDS: function() {
                    return l
                },
                DEFAULT_VIDEO_BACKGROUND_SORT: function() {
                    return o
                },
                BLUR_BACKGROUND_OPTION: function() {
                    return u
                },
                BACKGROUND_REPLACEMENT_SIZE: function() {
                    return d
                },
                MAX_BACKGROUND_IMAGE_UPLOAD_FILESIZE_BYTES: function() {
                    return c
                }
            }), (s = a || (a = {}))[s.BACKGROUND = 0] = "BACKGROUND", (i = r || (r = {}))[i.OPTION_1 = 0] = "OPTION_1", i[i.OPTION_2 = 1] = "OPTION_2", i[i.OPTION_3 = 2] = "OPTION_3", i[i.OPTION_4 = 3] = "OPTION_4", i[i.OPTION_7 = 7] = "OPTION_7", i[i.OPTION_8 = 8] = "OPTION_8", i[i.OPTION_9 = 9] = "OPTION_9", i[i.OPTION_10 = 10] = "OPTION_10";
            let l = [r.OPTION_7, r.OPTION_8, r.OPTION_9, r.OPTION_10],
                o = [r.OPTION_7, r.OPTION_8, r.OPTION_9, r.OPTION_10, r.OPTION_1, r.OPTION_2, r.OPTION_3, r.OPTION_4].reduce((e, t, n) => ({
                    ...e,
                    [t]: n
                }), {}),
                u = "blur",
                d = {
                    width: 1280,
                    height: 720
                },
                c = 10485760
        },
        517763: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var a = n("866227"),
                r = n.n(a),
                s = n("666038");
            class i extends s.default {
                static createFromServer(e) {
                    var t;
                    return new i({
                        ...e,
                        maxUses: e.max_uses,
                        maxAge: e.max_age,
                        createdAt: r(null !== (t = e.created_at) && void 0 !== t ? t : void 0),
                        targetType: e.target_type,
                        targetUser: e.target_user,
                        targetApplication: e.target_application
                    })
                }
                isExpired() {
                    let e = this.maxAge;
                    if (e > 0) {
                        let t = r(this.createdAt);
                        if (t.add(e, "seconds").isBefore(Date.now())) return !0
                    }
                    return !1
                }
                getExpiresAt() {
                    if (this.maxAge > 0) {
                        let e = r(this.createdAt);
                        return e.add(this.maxAge, "seconds").toDate()
                    }
                    return 1 / 0
                }
                toString() {
                    return this.code
                }
                constructor(e) {
                    super(), this.code = e.code || "", this.temporary = e.temporary || !1, this.revoked = e.revoked || !1, this.uses = e.uses || 0, this.maxUses = e.maxUses || 0, this.maxAge = e.maxAge || 0, this.createdAt = e.createdAt || new Date, this.channel = e.channel, this.guild = e.guild, this.inviter = e.inviter || null, this.targetType = e.targetType || null, this.targetUser = e.targetUser || null, this.targetApplication = e.targetApplication || null, this.type = e.type || null, this.flags = e.flags || 0
                }
            }
        },
        735201: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var a = n("446674"),
                r = n("913144");
            let s = {},
                i = null,
                l = [],
                o = !1,
                u = null,
                d = null;

            function c() {
                o = !0
            }
            class f extends a.default.Store {
                getAppliedGuildBoostsForGuild(e) {
                    return null != s[e] ? s[e].subscriptions : null
                }
                getLastFetchedAtForGuild(e) {
                    return null != s[e] ? s[e].lastFetchedAt : null
                }
                getCurrentUserAppliedBoosts() {
                    return l
                }
                getAppliedGuildBoost(e) {
                    return l.find(t => t.id === e)
                }
                get isModifyingAppliedBoost() {
                    return o
                }
                get applyBoostError() {
                    return u
                }
                get unapplyBoostError() {
                    return d
                }
                get cooldownEndsAt() {
                    return i
                }
            }
            f.displayName = "AppliedGuildBoostStore";
            var _ = new f(r.default, {
                GUILD_APPLIED_BOOSTS_FETCH_SUCCESS: function(e) {
                    let {
                        guildId: t,
                        appliedBoosts: n
                    } = e;
                    s[t] = {
                        subscriptions: n,
                        lastFetchedAt: Date.now()
                    }
                },
                USER_APPLIED_BOOSTS_FETCH_SUCCESS: function(e) {
                    let {
                        appliedGuildBoosts: t
                    } = e;
                    l = t
                },
                APPLIED_BOOSTS_COOLDOWN_FETCH_SUCCESS: function(e) {
                    let {
                        endsAt: t
                    } = e;
                    i = t
                },
                GUILD_UNAPPLY_BOOST_START: c,
                GUILD_APPLY_BOOST_START: c,
                GUILD_APPLY_BOOST_SUCCESS: function(e) {
                    let {
                        appliedGuildBoost: t
                    } = e, n = new Set(t.map(e => e.id));
                    l = [...t, ...l.filter(e => !n.has(e.id))], u = null, o = !1
                },
                GUILD_APPLY_BOOST_FAIL: function(e) {
                    let {
                        error: t
                    } = e;
                    o = !1, u = t
                },
                GUILD_UNAPPLY_BOOST_SUCCESS: function(e) {
                    let {
                        boostId: t
                    } = e;
                    l = l.filter(e => e.id !== t), o = !1
                },
                GUILD_UNAPPLY_BOOST_FAIL: function(e) {
                    let {
                        error: t
                    } = e;
                    o = !1, d = t
                }
            })
        },
        337543: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var a = n("446674"),
                r = n("913144"),
                s = n("9294"),
                i = n("49111");
            let l = {},
                o = {},
                u = {};

            function d(e, t) {
                var n;
                e = null != e ? e : "";
                let a = (0, s.parseExtraDataFromInviteKey)(e),
                    r = l[e],
                    o = null != r ? {
                        state: i.InviteStates.RESOLVING,
                        ...r
                    } : {
                        state: i.InviteStates.RESOLVING,
                        code: a.baseCode
                    };
                t(o), l = {
                    ...l,
                    [e]: o
                }, (null === (n = o.guild) || void 0 === n ? void 0 : n.id) != null && (u = {
                    ...u,
                    [o.guild.id]: e
                })
            }

            function c(e) {
                return d(e.code, t => {
                    t.state = "banned" in e && e.banned ? i.InviteStates.BANNED : i.InviteStates.EXPIRED
                })
            }
            class f extends a.default.Store {
                getInvite(e) {
                    return l[e]
                }
                getInviteError(e) {
                    return o[e]
                }
                getInvites() {
                    return l
                }
                getInviteKeyForGuildId(e) {
                    return u[e]
                }
            }
            f.displayName = "InviteStore";
            var _ = new f(r.default, {
                INVITE_RESOLVE: function(e) {
                    let {
                        code: t
                    } = e, n = (0, s.parseExtraDataFromInviteKey)(t);
                    l = {
                        ...l,
                        [t]: {
                            code: n.baseCode,
                            state: i.InviteStates.RESOLVING
                        }
                    }
                },
                INVITE_RESOLVE_SUCCESS: function(e) {
                    return d(e.code, t => {
                        var n, a;
                        t.state = i.InviteStates.RESOLVED, t.guild = e.invite.guild, t.channel = e.invite.channel, t.inviter = e.invite.inviter, t.approximate_member_count = null !== (n = e.invite.approximate_member_count) && void 0 !== n ? n : null, t.approximate_presence_count = null !== (a = e.invite.approximate_presence_count) && void 0 !== a ? a : null, t.target_type = e.invite.target_type, t.target_user = e.invite.target_user, t.target_application = e.invite.target_application, t.expires_at = e.invite.expires_at, t.stage_instance = e.invite.stage_instance, t.friends_count = e.invite.friends_count, t.is_contact = e.invite.is_contact, t.guild_scheduled_event = e.invite.guild_scheduled_event, t.type = e.invite.type, t.flags = e.invite.flags
                    })
                },
                INVITE_RESOLVE_FAILURE: c,
                INSTANT_INVITE_REVOKE_SUCCESS: c,
                FRIEND_INVITE_CREATE_SUCCESS: function(e) {
                    return d(e.invite.code, t => {
                        t.state = i.InviteStates.RESOLVED, t.inviter = e.invite.inviter
                    })
                },
                FRIEND_INVITE_REVOKE_SUCCESS: function(e) {
                    e.invites.forEach(e => d(e.code, e => {
                        e.state = i.InviteStates.EXPIRED
                    }))
                },
                INSTANT_INVITE_CREATE_SUCCESS: function(e) {
                    return d(e.invite.code, t => {
                        var n, a;
                        t.state = i.InviteStates.RESOLVED, t.guild = e.invite.guild, t.channel = e.invite.channel, t.inviter = e.invite.inviter, t.approximate_member_count = null !== (n = e.invite.approximate_member_count) && void 0 !== n ? n : null, t.approximate_presence_count = null !== (a = e.invite.approximate_presence_count) && void 0 !== a ? a : null, t.target_type = e.invite.target_type, t.target_user = e.invite.target_user, t.target_application = e.invite.target_application, t.stage_instance = e.invite.stage_instance, t.guild_scheduled_event = e.invite.guild_scheduled_event, t.type = e.invite.type
                    })
                },
                INVITE_ACCEPT: function(e) {
                    return d(e.code, e => {
                        e.state = i.InviteStates.ACCEPTING
                    })
                },
                INVITE_ACCEPT_SUCCESS: function(e) {
                    return d(e.code, t => {
                        t.state = i.InviteStates.ACCEPTED, t.guild = e.invite.guild, t.new_member = e.invite.new_member, t.channel = {
                            ...t.channel,
                            ...e.invite.channel
                        }
                    })
                },
                INVITE_ACCEPT_FAILURE: function(e) {
                    return o[e.code] = e.error, d(e.code, e => {
                        e.state = i.InviteStates.ERROR
                    })
                },
                INVITE_APP_OPENING: function(e) {
                    return d(e.code, e => {
                        e.state = i.InviteStates.APP_OPENING
                    })
                },
                INVITE_APP_OPENED: function(e) {
                    return d(e.code, e => {
                        e.state = i.InviteStates.APP_OPENED
                    })
                },
                INVITE_APP_NOT_OPENED: function(e) {
                    return d(e.code, e => {
                        e.state = i.InviteStates.APP_NOT_OPENED
                    })
                }
            })
        },
        971427: function(e, t, n) {
            "use strict";
            let a;
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var r = n("446674"),
                s = n("913144");
            let i = {
                hasAcceptedStoreTerms: !1,
                hasAcceptedEulaIds: []
            };
            class l extends r.default.PersistedStore {
                initialize(e) {
                    a = null != e ? e : i
                }
                getState() {
                    return a
                }
                get hasAcceptedStoreTerms() {
                    return a.hasAcceptedStoreTerms
                }
                hasAcceptedEULA(e) {
                    return a.hasAcceptedEulaIds.includes(e)
                }
            }
            l.displayName = "ApplicationStoreUserSettingsStore", l.persistKey = "ApplicationStoreUserSettingsStore", l.migrations = [e => null == e.hasAcceptedEulaIds ? {
                ...e,
                hasAcceptedEulaIds: []
            } : e];
            var o = new l(s.default, {
                APPLICATION_STORE_ACCEPT_STORE_TERMS: function() {
                    a.hasAcceptedStoreTerms = !0
                },
                APPLICATION_STORE_ACCEPT_EULA: function(e) {
                    let {
                        eulaId: t
                    } = e;
                    if (a.hasAcceptedEulaIds.includes(t)) return !1;
                    a.hasAcceptedEulaIds.push(t)
                }
            })
        },
        615931: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                resolveThunk: function() {
                    return s
                }
            });
            var a = n("917351"),
                r = n.n(a);
            let s = e => "function" == typeof e ? e() : e;
            r.curry((e, t, n) => s(t) ? e(n) : n({}))
        },
        730622: function(e, t, n) {
            "use strict";
            let a, r;
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var s = n("697218"),
                i = n("615931");
            let l = () => {
                throw Error("updateModal has not been implemented.")
            };
            {
                let e = n("670924");
                a = e.showModal, l = e.updateModalProps, r = n("551042").closeModal
            }

            function o(e) {
                let {
                    promiseFn: t,
                    resolve: n,
                    reject: s,
                    modalProps: i = {},
                    hooks: {
                        onEarlyClose: o
                    } = {}
                } = e;
                if (null == a) {
                    null == o || o();
                    return
                }
                let d = a(p, c, i);

                function c() {
                    null == o || o()
                }

                function f(e) {
                    r(d), n(e)
                }

                function _(e) {
                    r(d), s(e)
                }

                function p(e) {
                    return l(d, p, c, {
                        ...i,
                        isLoading: !0
                    }), u({
                        promiseFn: t,
                        resolve: f,
                        reject: _,
                        code: e,
                        mfaCodeHandler: E,
                        isModalOpen: !0
                    })
                }

                function E(e) {
                    let {
                        res: t
                    } = e;
                    l(d, p, c, {
                        ...i,
                        error: t.body.message
                    })
                }
            }

            function u(e) {
                let {
                    promiseFn: t,
                    resolve: n,
                    reject: a,
                    code: r,
                    mfaCodeHandler: s = o,
                    isModalOpen: i = !1,
                    ...l
                } = e;
                return t(null != r ? {
                    code: r
                } : {}).then(n, e => {
                    var r, o;
                    if (r = e, o = i, r.body && 60008 === r.body.code || o && 429 === r.status) return s({
                        promiseFn: t,
                        resolve: n,
                        reject: a,
                        res: e,
                        ...l
                    });
                    a(e)
                })
            }

            function d(e, t) {
                var n, a;
                let {
                    checkEnabled: r = null !== (a = null === (n = s.default.getCurrentUser()) || void 0 === n ? void 0 : n.mfaEnabled) && void 0 !== a && a,
                    ...l
                } = null != t ? t : {};
                return new Promise((t, n) => {
                    ((0, i.resolveThunk)(r) ? o : u)({
                        promiseFn: e,
                        resolve: t,
                        reject: n,
                        ...l
                    })
                })
            }
        },
        833858: function(e, t, n) {
            "use strict";

            function a(e) {
                return Array.isArray(e) ? e[0] : e
            }
            n.r(t), n.d(t, {
                getFirstQueryStringValue: function() {
                    return a
                }
            })
        },
        474293: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getClass: function() {
                    return r
                }
            });
            var a = n("159885");

            function r(e, t) {
                for (var n = arguments.length, r = Array(n > 2 ? n - 2 : 0), s = 2; s < n; s++) r[s - 2] = arguments[s];
                let i = r.reduce((e, t) => e + (0, a.upperCaseFirstChar)(t), ""),
                    l = "".concat(t).concat(i),
                    o = e[l];
                if (null != o) return o
            }
        },
        670924: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                showModal: function() {
                    return l
                },
                updateModalProps: function() {
                    return o
                }
            });
            var a = n("37983");
            n("884691");
            var r = n("551042"),
                s = n("920636");
            let i = (e, t, n) => function(r) {
                return (0, a.jsx)(s.default, {
                    handleSubmit: e,
                    handleEarlyClose: t,
                    ...n,
                    ...r
                })
            };

            function l(e, t, n) {
                return (0, r.openModal)(i(e, t, n), {
                    onCloseCallback: t
                })
            }

            function o(e, t, n, a) {
                return (0, r.updateModal)(e, i(t, n, a))
            }
        }
    }
]);