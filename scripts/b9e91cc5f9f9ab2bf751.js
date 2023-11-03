(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["78789"], {
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
        945439: function(e, t, n) {
            "use strict";
            e.exports = n.p + "60e64ec1e28c734051d0.svg"
        },
        465312: function(e, t, n) {
            "use strict";
            e.exports = n.p + "e5fb2c858f851f61c32e.svg"
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
                    return C
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
                E = n("701909"),
                p = n("49111"),
                _ = n("843455"),
                I = n("782340"),
                h = n("429130");
            let m = "***@***.***",
                S = new d.CreditCardSourceRecord({
                    id: "new_payment_source_id",
                    brand: c.default.Types.UNKNOWN,
                    type: p.PaymentSourceTypes.CARD
                });

            function C(e) {
                var t, n;
                let s, {
                        selectedPaymentSourceId: C,
                        paymentSources: g,
                        prependOption: T,
                        hidePersonalInformation: R,
                        onChange: N,
                        onPaymentSourceAdd: A,
                        isTrial: M = !1,
                        disabled: O = !1,
                        className: y,
                        optionClassName: v,
                        dropdownLoading: P
                    } = e,
                    L = 0 === g.length,
                    x = [...null != T ? [T] : [], ...g, S].map((e, t) => {
                        if (e instanceof d.default) {
                            let {
                                brand: t,
                                label: n
                            } = function(e, t) {
                                if (e instanceof d.CreditCardSourceRecord) return e.id === S.id ? {
                                    brand: null,
                                    label: I.default.Messages.PAYMENT_SOURCES_ADD
                                } : {
                                    brand: t ? c.default.Types.UNKNOWN : e.brand,
                                    label: I.default.Messages.PAYMENT_SOURCE_CARD_ENDING_IN.format({
                                        last4: t ? "****" : e.last4
                                    })
                                };
                                if (e instanceof d.PaypalSourceRecord) return {
                                    brand: c.default.Types.PAYPAL,
                                    label: t ? m : e.email
                                };
                                if (e instanceof d.SofortSourceRecord) return {
                                    brand: c.default.Types.SOFORT,
                                    label: t ? m : e.email
                                };
                                else if (e instanceof d.GiropaySourceRecord) return {
                                    brand: c.default.Types.GIROPAY,
                                    label: I.default.Messages.PAYMENT_SOURCE_GIROPAY
                                };
                                else if (e instanceof d.Przelewy24SourceRecord) return {
                                    brand: c.default.Types.PRZELEWY24,
                                    label: t ? m : e.email
                                };
                                else if (e instanceof d.PaysafeSourceRecord) return {
                                    brand: c.default.Types.PAYSAFECARD,
                                    label: I.default.Messages.PAYMENT_SOURCE_PAYSAFE_CARD_REDIRECT
                                };
                                else if (e instanceof d.GcashSourceRecord) return {
                                    brand: c.default.Types.GCASH,
                                    label: I.default.Messages.PAYMENT_SOURCE_GCASH
                                };
                                else if (e instanceof d.GrabPayMySourceRecord) return {
                                    brand: c.default.Types.GRABPAY,
                                    label: I.default.Messages.PAYMENT_SOURCE_GRABPAY
                                };
                                else if (e instanceof d.MomoWalletSourceRecord) return {
                                    brand: c.default.Types.MOMO_WALLET,
                                    label: I.default.Messages.PAYMENT_SOURCE_MOMO_WALLET
                                };
                                else if (e instanceof d.VenmoSourceRecord) return {
                                    brand: c.default.Types.VENMO,
                                    label: t ? "***" : "@" + e.username
                                };
                                else if (e instanceof d.KaKaoPaySourceRecord) return {
                                    brand: c.default.Types.KAKAOPAY,
                                    label: I.default.Messages.PAYMENT_SOURCE_KAKAOPAY
                                };
                                else if (e instanceof d.GoPayWalletSourceRecord) return {
                                    brand: c.default.Types.GOPAY_WALLET,
                                    label: I.default.Messages.PAYMENT_SOURCE_GOPAY_WALLET
                                };
                                else if (e instanceof d.BancontactSourceRecord) return {
                                    brand: c.default.Types.BANCONTACT,
                                    label: I.default.Messages.PAYMENT_SOURCE_BANCONTACT
                                };
                                else if (e instanceof d.EPSSourceRecord) return {
                                    brand: c.default.Types.EPS,
                                    label: I.default.Messages.PAYMENT_SOURCE_EPS_WITH_BANK.format({
                                        bank: (0, u.getEPSBankDisplayNameFromBankName)(e.bank)
                                    })
                                };
                                else if (e instanceof d.IdealSourceRecord) return {
                                    brand: c.default.Types.IDEAL,
                                    label: I.default.Messages.PAYMENT_SOURCE_IDEAL_WITH_BANK.format({
                                        bank: (0, u.getIdealBankDisplayNameFromBankName)(e.bank)
                                    })
                                };
                                else if (e instanceof d.CashAppSourceRecord) return {
                                    brand: c.default.Types.CASH_APP,
                                    label: t ? "***" : e.username
                                };
                                throw Error("Invalid Payment Source")
                            }(e, R);
                            return {
                                value: e.id,
                                label: (0, a.jsxs)("div", {
                                    className: h.paymentSourceSelectedOption,
                                    children: [null != t ? (0, a.jsx)(c.default, {
                                        type: c.default.getType(t)
                                    }) : null, (0, a.jsx)("div", {
                                        className: i(h.paymentSourceLabel, {
                                            [h.error]: e.invalid
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
                                className: h.paymentSourceLabel,
                                children: e.label
                            })
                        }
                    }),
                    b = r.useMemo(() => g.find(e => e.id === C), [g, C]);
                let D = (t = M, n = b, s = null, t && null != n && p.IRREDEEMABLE_PAYMENT_SOURCES.has(n.type) ? s = I.default.Messages.PAYMENT_SOURCE_REDEMPTION_INVALID : t && null != n && n.hasFlag(_.PaymentSourceFlags.NEW) && (s = I.default.Messages.BILLING_PAYMENT_AUTHORIZATION_CHARGE.format({
                    helpDeskArticle: E.default.getArticleURL(p.HelpdeskArticles.PAYMENT_AUTHORIZATION_CHARGE)
                })), s);
                return (0, a.jsxs)(a.Fragment, {
                    children: [L ? (0, a.jsx)(o.Button, {
                        color: o.ButtonColors.BRAND,
                        fullWidth: !0,
                        onClick: A,
                        children: I.default.Messages.PAYMENT_SOURCES_ADD
                    }) : (0, a.jsx)(o.SingleSelect, {
                        options: x,
                        value: C,
                        onChange: e => {
                            if (e === S.id) null != A && A();
                            else {
                                let t = g.find(t => t.id === e);
                                null != N && N(t)
                            }
                        },
                        isDisabled: O,
                        className: i({
                            [h.paymentSourceHasWarning]: null != D
                        }, y),
                        optionClassName: v,
                        placeholder: I.default.Messages.PAYMENT_SOURCE_TYPE_SELECT,
                        renderOptionValue: e => {
                            let [t] = e;
                            return P ? (0, a.jsx)(o.Spinner, {
                                type: o.SpinnerTypes.SPINNING_CIRCLE
                            }) : t.label
                        }
                    }), null != D ? (0, a.jsxs)("div", {
                        className: h.paymentSourceWarning,
                        children: [(0, a.jsx)(f.default, {
                            className: h.paymentSourceWarningIcon,
                            color: l.default.unsafe_rawColors.YELLOW_300.css
                        }), (0, a.jsx)(o.Text, {
                            variant: "text-xs/normal",
                            children: D
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
                        transitionState: E,
                        helpMessage: p,
                        retryPrompt: _,
                        retrySuccessMessage: I
                    } = this.props, {
                        code: h,
                        errorMessage: m,
                        retrySuccess: S
                    } = this.state, C = r.Children.count(s) > 0 ? (0, a.jsx)(l.Card, {
                        type: l.Card.Types.WARNING,
                        className: u.card,
                        children: (0, a.jsx)(l.Text, {
                            variant: "text-md/normal",
                            children: s
                        })
                    }) : null, g = null != _ ? (0, a.jsxs)(l.Text, {
                        className: i(u.submitText, u.spacing),
                        variant: "text-sm/normal",
                        children: [(0, a.jsx)("br", {}), (0, a.jsx)(l.Clickable, {
                            className: i(u.spacing, u.link),
                            onClick: this.handleRetry,
                            children: (0, a.jsx)(l.Anchor, {
                                children: _
                            })
                        })]
                    }) : null, T = S ? (0, a.jsx)(l.Card, {
                        type: l.Card.Types.SUCCESS,
                        className: u.card,
                        children: (0, a.jsx)(l.Text, {
                            variant: "text-md/normal",
                            children: I
                        })
                    }) : null;
                    return (0, a.jsx)(l.ModalRoot, {
                        transitionState: E,
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
                                }) : null, C, T, (0, a.jsxs)(l.FormItem, {
                                    title: this.getLabelText(),
                                    className: u.spacing,
                                    children: [(0, a.jsx)(l.TextInput, {
                                        inputRef: this.setRef,
                                        onChange: this.handleCodeChange,
                                        placeholder: null !== (e = this.getPlaceholder()) && void 0 !== e ? e : void 0,
                                        maxLength: null != f ? f : 10,
                                        value: h,
                                        autoComplete: "one-time-code",
                                        autoFocus: !0
                                    }), this.errorPresent() ? (0, a.jsx)(l.Text, {
                                        color: "text-danger",
                                        variant: "text-xs/normal",
                                        className: u.error,
                                        children: null != d ? d : m
                                    }) : null, g]
                                })]
                            }), (0, a.jsxs)(l.ModalFooter, {
                                children: [(0, a.jsx)(l.Button, {
                                    type: "submit",
                                    disabled: c || 0 === h.length,
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
        763377: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CircleQuestionIcon: function() {
                    return i
                }
            });
            var a = n("37983");
            n("884691");
            var r = n("669491"),
                s = n("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    secondaryColor: i = "transparent",
                    secondaryColorClass: l = "",
                    color: o = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...d
                } = e;
                return (0, a.jsxs)("svg", {
                    ...(0, s.default)(d),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, a.jsx)("circle", {
                        cx: "12",
                        cy: "12",
                        r: "10",
                        fill: "string" == typeof i ? i : i.css,
                        className: l
                    }), (0, a.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        fillRule: "evenodd",
                        d: "M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11Zm-.281-16c-.981 0-1.812.473-2.269 1.14A1 1 0 1 1 7.8 7.01C8.638 5.786 10.095 5 11.719 5c2.495 0 4.656 1.885 4.656 4.375 0 2.103-1.542 3.775-3.524 4.243l.14.993a1 1 0 0 1-1.981.278l-.281-2a1 1 0 0 1 .99-1.139c1.544 0 2.656-1.137 2.656-2.375S13.263 7 11.719 7ZM13 17.875a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0Z",
                        clipRule: "evenodd",
                        className: u
                    })]
                })
            }
        },
        457802: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MinusIcon: function() {
                    return i
                }
            });
            var a = n("37983");
            n("884691");
            var r = n("669491"),
                s = n("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: i = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: l = "",
                    ...o
                } = e;
                return (0, a.jsx)("svg", {
                    ...(0, s.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, a.jsx)("path", {
                        stroke: "string" == typeof i ? i : i.css,
                        strokeLinecap: "round",
                        strokeWidth: "2",
                        d: "M21 12H3",
                        className: l
                    })
                })
            }
        },
        202909: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                NitroWheelIcon: function() {
                    return i
                }
            });
            var a = n("37983");
            n("884691");
            var r = n("669491"),
                s = n("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: i = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: l = "",
                    ...o
                } = e;
                return (0, a.jsxs)("svg", {
                    ...(0, s.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, a.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        d: "M15 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
                        className: l
                    }), (0, a.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        fillRule: "evenodd",
                        d: "M7 4a1 1 0 0 0 0 2h3a1 1 0 1 1 0 2H5.5a1 1 0 0 0 0 2H8a1 1 0 1 1 0 2H6a1 1 0 1 0 0 2h1.252A8 8 0 1 0 15 4H7Zm8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z",
                        clipRule: "evenodd",
                        className: l
                    }), (0, a.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        d: "M2.5 10a1 1 0 0 0 0-2H2a1 1 0 0 0 0 2h.5Z",
                        className: l
                    })]
                })
            }
        },
        424823: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PlusSmallIcon: function() {
                    return i
                }
            });
            var a = n("37983");
            n("884691");
            var r = n("669491"),
                s = n("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: i = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: l = "",
                    ...o
                } = e;
                return (0, a.jsx)("svg", {
                    ...(0, s.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, a.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        d: "M13 6a1 1 0 1 0-2 0v5H6a1 1 0 1 0 0 2h5v5a1 1 0 1 0 2 0v-5h5a1 1 0 1 0 0-2h-5V6Z",
                        className: l
                    })
                })
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
                E = n("965397"),
                p = n("423487"),
                _ = n("782340"),
                I = n("47274");
            class h extends r.PureComponent {
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

            function m(e) {
                let {
                    imageClass: t,
                    children: n,
                    error: r,
                    onDismissError: s
                } = e;
                return (0, a.jsxs)("div", {
                    className: I.content,
                    children: [(0, a.jsx)("div", {
                        className: i(I.image, t)
                    }), n, (0, a.jsx)(o.default, {
                        children: null != r ? (0, a.jsx)(E.default, {
                            className: I.error,
                            children: (0, a.jsx)(u.FormErrorBlock, {
                                onDismiss: s,
                                children: r.message
                            })
                        }) : null
                    })]
                })
            }
            let S = e => {
                let {
                    canceledCount: t
                } = e, n = (0, l.useStateFromStores)([c.default], () => c.default.getPremiumTypeSubscription());
                return null == n ? null : (0, a.jsxs)("div", {
                    className: I.pendingCancellation,
                    children: [(0, a.jsx)(p.default, {
                        className: I.pendingCancellationIcon
                    }), (0, a.jsx)(u.Text, {
                        variant: "text-md/normal",
                        className: I.pendingCancellationMessage,
                        children: _.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_CANCEL_WARNING.format({
                            date: n.currentPeriodEnd,
                            canceledCount: t
                        })
                    })]
                })
            };

            function C(e) {
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
                return (0, a.jsxs)(m, {
                    imageClass: t,
                    error: i,
                    onDismissError: l,
                    children: [(0, a.jsx)(u.Text, {
                        variant: "text-md/normal",
                        children: n
                    }), (0, a.jsx)(d.default, {
                        className: I.guildCard,
                        guild: r,
                        subscriptionChange: o
                    }), (0, a.jsx)(u.Text, {
                        variant: "text-md/normal",
                        children: s
                    }), c > 0 ? (0, a.jsx)(S, {
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
                    slotCount: E = 1,
                    canceledCount: p = 0
                } = e, h = r.useRef(l), C = null === (t = h.current) || void 0 === t ? void 0 : t.length, g = null === (n = h.current) || void 0 === n ? void 0 : n.reduce((e, t) => (!e.hasOwnProperty(t.id) && (e[t.id] = []), e[t.id].push(t), e), {});
                return (0, a.jsxs)(m, {
                    imageClass: s,
                    error: c,
                    onDismissError: f,
                    children: [(0, a.jsx)(u.Text, {
                        variant: "text-md/normal",
                        children: i
                    }), (0, a.jsx)(u.Text, {
                        variant: "text-xs/bold",
                        className: I.transferGuildCardHeader,
                        children: _.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_TRANSFER_FROM_GUILD.format({
                            guildCount: C
                        })
                    }), null != g ? Object.keys(g).map(e => (0, a.jsx)(d.default, {
                        className: I.transferFromGuildCard,
                        guild: g[e][0],
                        subscriptionChange: -1 * g[e].length
                    }, e)) : null, (0, a.jsx)(u.Text, {
                        variant: "text-xs/normal",
                        className: I.transferGuildCardHeader,
                        children: _.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_TRANSFER_TO_GUILD.format({
                            slotCount: E
                        })
                    }), (0, a.jsx)("div", {
                        className: I.activeTransferGuildCardBorder,
                        children: (0, a.jsx)(d.default, {
                            className: I.transferToGuildCard,
                            guild: o,
                            subscriptionChange: null != l ? l.length : 1
                        })
                    }), p > 0 ? (0, a.jsx)(S, {
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
                            children: _.default.Messages.CANCEL
                        })]
                    })
                }
            }
            class R extends r.PureComponent {
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
                        onCancel: E,
                        onDismissError: p,
                        canceledCount: _
                    } = this.props;
                    return (0, a.jsxs)(r.Fragment, {
                        children: [(0, a.jsx)(h, {
                            text: t
                        }), (0, a.jsx)(u.ModalContent, {
                            children: (0, a.jsx)(C, {
                                guild: e,
                                blurb: n,
                                warning: s,
                                imageClass: o,
                                error: d,
                                onDismissError: p,
                                canceledCount: _
                            })
                        }), (0, a.jsx)(T, {
                            confirmation: i,
                            confirmationLabel: l,
                            isModifyingSubscription: c,
                            onConfirm: f,
                            onCancel: E
                        })]
                    })
                }
            }
            R.Header = h, R.ApplyBody = C, R.TransferBody = g, R.Footer = T;
            var N = R
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
                E = n("305961"),
                p = n("625634"),
                _ = n("751433"),
                I = n("599110"),
                h = n("427459"),
                m = n("903016"),
                S = n("936992"),
                C = n("658206"),
                g = n("49111"),
                T = n("782340"),
                R = n("822841");
            (a = r || (r = {})).UNUSED_QUANTITY_SELECT = "UNUSED_QUANTITY_SELECT", a.GUILD_SELECT = "GUILD_SELECT", a.CONFIRM = "CONFIRM", a.SUCCESS = "SUCCESS";
            var N = e => {
                var t, n;
                let {
                    guildBoostSlots: a,
                    selectedGuild: l,
                    locationSection: N,
                    transitionState: A,
                    onClose: M
                } = e, O = (0, h.getAvailableGuildBoostSlots)(p.default.boostSlots);
                o(null != a || null != l, "Must either provide slots or an initial selected guild"), o(!(null == a ? void 0 : a.some(e => e.isOnCooldown())), "If slots are provided, they must not be on cooldown");
                let y = [null == a ? r.UNUSED_QUANTITY_SELECT : null, null == l ? r.GUILD_SELECT : null, r.CONFIRM, r.SUCCESS].filter(e => null != e),
                    [v, P] = (0, u.useStateFromStoresArray)([f.default], () => [f.default.isModifyingAppliedBoost, f.default.applyBoostError]),
                    [L, x] = i.useState(""),
                    [b, D] = i.useState(y[0]),
                    [U, B] = i.useState(!1),
                    [G, j] = i.useState(l),
                    [F, w] = i.useState(null != a ? a : O.slice(0, 1)),
                    k = i.useMemo(() => null == F ? [] : F.map(e => {
                        let {
                            premiumGuildSubscription: t
                        } = e;
                        return E.default.getGuild(null == t ? void 0 : t.guildId)
                    }).filter(e => null != e), [F]),
                    V = i.useMemo(() => {
                        var e;
                        return (null == F ? void 0 : null === (e = F[0]) || void 0 === e ? void 0 : e.premiumGuildSubscription) != null
                    }, [F]),
                    Y = () => {
                        M(b === r.SUCCESS), I.default.track(g.AnalyticEvents.MODAL_DISMISSED, {
                            type: g.AnalyticsSections.PREMIUM_GUILD_SUBSCRIBE_MODAL,
                            location_section: N
                        })
                    },
                    H = {
                        [r.UNUSED_QUANTITY_SELECT]: {
                            body: () => (o(!(null == a && 0 === O.length), "Cannot provide no slots if there are no other available slots"), (0, s.jsxs)("div", {
                                className: R.quantitySelectorBody,
                                children: [(0, s.jsx)(d.Heading, {
                                    variant: "heading-md/semibold",
                                    className: R.quantitySelectorHeader,
                                    children: T.default.Messages.PREMIUM_GUILD_SUBSCRIBE_UNUSED_SLOTS_HEADER
                                }), (0, s.jsx)(d.Text, {
                                    variant: "text-md/normal",
                                    className: R.quantitySelectorDescription,
                                    children: T.default.Messages.PREMIUM_GUILD_SUBSCRIBE_UNUSED_SLOTS_DESCRIPTION
                                }), (0, s.jsxs)("div", {
                                    className: R.quantitySelectorWrapper,
                                    children: [(0, s.jsx)(_.default, {
                                        value: F.length,
                                        onChange: e => w(O.slice(0, e)),
                                        minValue: 1,
                                        maxValue: O.length
                                    }), (0, s.jsx)(d.Text, {
                                        className: R.quantitySelectorLabel,
                                        variant: "text-md/normal",
                                        children: T.default.Messages.PREMIUM_GUILD_SUBSCRIBE_UNUSED_SLOTS_COUNTER
                                    })]
                                })]
                            })),
                            footer: () => (0, s.jsxs)(d.ModalFooter, {
                                children: [(0, s.jsx)(d.Button, {
                                    onClick: () => D(r.CONFIRM),
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
                            header: () => (0, s.jsx)(S.GuildSelectModalHeader, {
                                isTransfer: V,
                                query: L,
                                setQuery: x
                            }),
                            bodyClass: R.selectContent,
                            body: () => (0, s.jsx)(S.GuildSelectModalBody, {
                                onClose: Y,
                                onSelectGuild: e => {
                                    j(e), D(r.CONFIRM)
                                },
                                isTransfer: V,
                                selectedSlotGuilds: k,
                                query: L
                            })
                        },
                        [r.CONFIRM]: {
                            body() {
                                if (null == G) return null;
                                let e = F.filter(e => (0, h.isGuildBoostSlotCanceled)(e)).length,
                                    t = F.length,
                                    n = k.length;
                                return V ? (0, s.jsx)(m.default.TransferBody, {
                                    fromGuilds: k,
                                    toGuild: G,
                                    blurb: T.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_TRANSFER_BLURB.format({
                                        slotCount: t,
                                        guildCount: n
                                    }),
                                    imageClass: R.transferConfirmImage,
                                    error: U ? P : null,
                                    onDismissError: () => B(!1),
                                    slotCount: t,
                                    canceledCount: e
                                }) : (0, s.jsx)(m.default.ApplyBody, {
                                    guild: G,
                                    blurb: T.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_BLURB,
                                    warning: T.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_COOLDOWN_WARNING.format({
                                        days: g.GUILD_BOOST_APPLY_COOLDOWN_DAYS,
                                        slotCount: t
                                    }),
                                    imageClass: R.confirmImage,
                                    error: U ? P : null,
                                    onDismissError: () => B(!1),
                                    slotCount: t,
                                    canceledCount: e
                                })
                            },
                            footer() {
                                let e = F.length,
                                    t = y[0] === r.CONFIRM ? Y : () => D(y[y.indexOf(b) - 1]),
                                    n = async () => {
                                        if (null != G && (null == F ? void 0 : F.length) !== 0) {
                                            o(!F.some(e => e.isOnCooldown()), "Cannot use a premium guild subscription slot while on cooldown");
                                            try {
                                                await Promise.all(F.map(e => {
                                                    let {
                                                        premiumGuildSubscription: t
                                                    } = e;
                                                    return null != t ? (0, c.unapplyFromGuild)(t.guildId, t.id) : Promise.resolve()
                                                })), await (0, c.applyToGuild)(G.id, F.map(e => {
                                                    let {
                                                        id: t
                                                    } = e;
                                                    return t
                                                })), D(r.SUCCESS)
                                            } catch (e) {
                                                B(!0)
                                            }
                                        }
                                    };
                                return (0, s.jsx)(m.default.Footer, {
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
                                    isModifyingSubscription: v
                                })
                            }
                        },
                        [r.SUCCESS]: {
                            body: () => (0, s.jsx)(C.GuildBoostingConfirmation, {
                                guild: G,
                                isTransfer: V,
                                guildBoostQuantity: F.length,
                                onClose: Y
                            })
                        }
                    };
                i.useEffect(() => {
                    I.default.track(g.AnalyticEvents.OPEN_MODAL, {
                        type: g.AnalyticsSections.PREMIUM_GUILD_SUBSCRIBE_MODAL,
                        location_section: N
                    })
                }, [N]);
                let W = H[b];
                return (0, s.jsxs)(d.ModalRoot, {
                    transitionState: A,
                    className: R.modal,
                    size: d.ModalSize.SMALL,
                    children: [null === (t = W.header) || void 0 === t ? void 0 : t.call(W), (0, s.jsx)(d.ModalContent, {
                        className: W.bodyClass,
                        children: (0, s.jsx)(d.Sequencer, {
                            step: b,
                            steps: y,
                            children: W.body()
                        })
                    }), null === (n = W.footer) || void 0 === n ? void 0 : n.call(W), (0, s.jsx)(d.ModalCloseButton, {
                        className: R.modalCloseButton,
                        onClick: Y
                    })]
                })
            }
        },
        936992: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GuildSelectModalHeader: function() {
                    return C
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
                E = n("677099"),
                p = n("109024"),
                _ = n("810567"),
                I = n("427459"),
                h = n("49111"),
                m = n("782340"),
                S = n("109396");

            function C(e) {
                let {
                    isTransfer: t = !1,
                    setQuery: n,
                    query: r
                } = e;
                return (0, a.jsxs)(o.ModalHeader, {
                    className: S.selectHeaderContainer,
                    children: [(0, a.jsx)(o.Heading, {
                        className: S.selectHeader,
                        variant: "heading-md/semibold",
                        children: t ? m.default.Messages.PREMIUM_GUILD_SUBSCRIBE_SELECT_GUILD_TRANSFER_HEADER : m.default.Messages.PREMIUM_GUILD_SUBSCRIBE_SELECT_GUILD_HEADER
                    }), (0, a.jsx)(_.default, {
                        size: _.default.Sizes.MEDIUM,
                        placeholder: m.default.Messages.PREMIUM_GUILD_SUBSCRIBE_SEARCH_GUILD_PLACEHOLDER,
                        "aria-label": m.default.Messages.PREMIUM_GUILD_SUBSCRIBE_SEARCH_GUILD_PLACEHOLDER,
                        className: S.selectSearch,
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
                    query: _
                } = e, C = (0, l.useStateFromStores)([E.default], () => E.default.getFlattenedGuildIds()), g = (0, l.useStateFromStoresArray)([f.default], () => C.reduce((e, t) => {
                    let a = f.default.getGuild(t);
                    return null == a || null != n && n.some(e => e.id === t) ? e : ((_.length <= 0 || i(_.toLowerCase(), null == a ? void 0 : a.name.toLowerCase())) && e.push(a), e)
                }, [])), {
                    enabled: T
                } = c.default.useExperiment({
                    location: "5f417c_1"
                }, {
                    autoTrackExposure: !0
                });

                function R() {
                    r(), (0, u.popLayer)(), (0, d.transitionTo)(h.Routes.GUILD_DISCOVERY)
                }
                return (0, a.jsxs)(a.Fragment, {
                    children: [0 === g.length && (0, a.jsx)("div", {
                        className: S.emptyStateWrapper,
                        children: (0, a.jsx)(o.Text, {
                            variant: "text-md/normal",
                            children: 0 === C.length ? m.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_APPLY_NON_GUILD_MEMBER.format({
                                publicGuildDirectoryHook: (e, t) => (0, a.jsx)(o.Clickable, {
                                    onClick: R,
                                    tag: "a",
                                    children: e
                                }, t)
                            }) : m.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_APPLY_GUILD_NOT_FOUND
                        })
                    }), g.map(e => (0, a.jsxs)(o.Clickable, {
                        className: S.selectGuild,
                        onClick: () => {
                            s(e)
                        },
                        children: [(0, a.jsx)(p.default, {
                            className: S.selectGuildIcon,
                            guild: e,
                            size: p.default.Sizes.SMALL
                        }), (0, a.jsxs)("div", {
                            className: S.selectGuildCopy,
                            children: [(0, a.jsx)(o.Text, {
                                className: S.selectGuildName,
                                variant: "text-md/normal",
                                children: e.name
                            }), T && (0, a.jsx)(o.Text, {
                                className: S.selectGuildLevel,
                                color: "text-muted",
                                variant: "text-xs/normal",
                                children: (0, I.getTierName)(e.premiumTier)
                            })]
                        }), T && (0, a.jsx)(o.Text, {
                            className: S.selectGuildPseudoCta,
                            color: "always-white",
                            variant: "text-sm/medium",
                            children: t ? m.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_TRANSFER_HERE : m.default.Messages.PREMIUM_GUILD_SUBSCRIPTION
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
                    className: S.modal,
                    size: o.ModalSize.SMALL,
                    children: [(0, a.jsx)(C, {
                        query: i,
                        setQuery: l
                    }), (0, a.jsx)(o.ModalContent, {
                        className: S.modalContent,
                        children: (0, a.jsx)(g, {
                            onClose: t,
                            onSelectGuild: n,
                            query: i
                        })
                    }), (0, a.jsx)(o.ModalCloseButton, {
                        className: S.modalCloseButton,
                        onClick: t
                    })]
                })
            }
        },
        50926: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
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
            }, E = async (e, t) => {
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
            }, _ = async (e, t) => {
                await a.default.patch({
                    url: c.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                    body: {
                        enabled: t
                    },
                    oldFormErrors: !0
                })
            }, I = async (e, t) => {
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
            var h = {
                fetchVerificationForm: f,
                updateVerificationForm: E,
                updateVerificationFormDescription: p,
                enableVerificationForm: _,
                submitVerificationForm: I
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
                    return E
                },
                MAX_PARAGRAPH_RESPONSE_LENGTH: function() {
                    return p
                },
                MAX_DESCRIPTION_LENGTH: function() {
                    return _
                },
                MEMBER_VERIFICATION_TYPE: function() {
                    return I
                },
                IN_APP_MEMBER_VERIFICATION_MODAL_KEY: function() {
                    return h
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
                E = 150,
                p = 1e3,
                _ = 300,
                I = "Membership Gating",
                h = "in-app-member-verification";
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
                    return m
                },
                updateImpersonating: function() {
                    return S
                },
                stopImpersonating: function() {
                    return C
                },
                updateImpersonatedChannels: function() {
                    return T
                },
                updateImpersonatedRoles: function() {
                    return R
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
                E = n("599110"),
                p = n("38654"),
                _ = n("507950"),
                I = n("49111"),
                h = n("724210");

            function m(e, t) {
                E.default.track(I.AnalyticEvents.VIEW_AS_ROLES_SELECTED, {
                    num_roles: Object.keys(t.roles).length,
                    ...(0, r.collectGuildAnalyticsMetadata)(e),
                    is_viewing_as_member: t.type === _.ImpersonateType.NEW_MEMBER
                }), a.default.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: e,
                    data: t
                }), g(e)
            }

            function S(e, t) {
                let n = p.default.getData(e);
                null != n && n.type === t.type && (E.default.track(I.AnalyticEvents.VIEW_AS_ROLES_SELECTED, {
                    num_roles: Object.keys(n.roles).length,
                    ...(0, r.collectGuildAnalyticsMetadata)(e),
                    is_viewing_as_member: n.type === _.ImpersonateType.NEW_MEMBER
                }), a.default.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: e,
                    data: {
                        ...n,
                        ...t
                    }
                }), g(e))
            }

            function C(e) {
                a.default.dispatch({
                    type: "IMPERSONATE_STOP",
                    guildId: e
                })
            }

            function g(e) {
                let t = c.default.getChannelId(e),
                    n = i.default.getChannel(t),
                    a = null != t && (0, h.isStaticChannelRoute)(t);
                if (!a && !d.default.can(I.Permissions.VIEW_CHANNEL, n)) {
                    let t = l.default.getDefaultChannel(e);
                    null != t && (0, s.transitionTo)(I.Routes.CHANNEL(e, t.id))
                }
            }

            function T(e, t, n) {
                let a = new Set(f.default.getOptedInChannels(e));
                t.forEach(e => a.add(e)), n.forEach(e => a.delete(e)), S(e, {
                    type: _.ImpersonateType.NEW_MEMBER,
                    optInChannels: a
                })
            }

            function R(e, t) {
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
                t.forEach(e => a[e] = n.roles[e]), S(e, {
                    type: _.ImpersonateType.NEW_MEMBER,
                    roles: a
                })
            }

            function N(e, t) {
                S(e, {
                    type: _.ImpersonateType.NEW_MEMBER,
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
                    return _
                },
                useGetSubscriptionInvoice: function() {
                    return I
                },
                getItemUnitPriceWithDiscount: function() {
                    return h
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
                    metadata: E
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
                    metadata: E
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
                    analyticsLocations: E,
                    analyticsLocation: p
                } = e;
                null != a && (a = (0, u.coerceExistingItemsToNewItemInterval)(a));
                let _ = {
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
                            location_stack: E
                        },
                        body: _,
                        oldFormErrors: !0
                    });
                    return l.default.createInvoiceFromServer(e.body)
                } catch (e) {
                    throw new i.BillingError(e)
                }
            }
            async function E(e) {
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

            function _(e) {
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

            function I(e) {
                let t = (0, a.useCallback)(() => E(e), [JSON.stringify(e)]);
                return p(e, t)
            }

            function h(e) {
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
                    return _
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
            class E extends r.PureComponent {
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
                    }), (0, a.jsx)(E, {
                        tier: s
                    })]
                })
            };
            class _ extends r.PureComponent {
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
                                children: [(0, a.jsx)(E, {
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
                } = e, E = (0, i.formatPrice)(t, n), p = null;
                return r === l.SubscriptionIntervalTypes.YEAR ? p = o.default.Messages.BILLING_PRICE_PER_YEAR_BOLD.format({
                    price: E
                }) : r === l.SubscriptionIntervalTypes.MONTH && 1 === c ? p = o.default.Messages.BILLING_PRICE_PER_MONTH_BOLD.format({
                    price: E
                }) : r === l.SubscriptionIntervalTypes.MONTH && c > 1 && (p = o.default.Messages.BILLING_PRICE_PER_MULTI_MONTHS_BOLD.format({
                    price: E,
                    intervalCount: c
                })), (0, a.jsx)("div", {
                    className: s(u.pricePerInterval, d),
                    "data-testid": "PricePerInterval-".concat(n),
                    children: null == r || f ? (0, a.jsx)("strong", {
                        children: E
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
                    return E
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
            var E = new f(r.default, {
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
                    return E
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
            var E = new f(r.default, {
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
        931138: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("37983"),
                r = n("884691"),
                s = n("414456"),
                i = n.n(s),
                l = n("77078"),
                o = n("760607"),
                u = n("89976");

            function d(e) {
                let {
                    children: t,
                    size: n = 16,
                    className: s,
                    flowerStarClassName: d,
                    ...c
                } = e, f = r.Children.only(t), E = (0, l.useRedesignIconContext)().enabled;
                return (0, a.jsxs)("div", {
                    className: i(u.flowerStarContainer, s),
                    style: {
                        width: n,
                        height: n
                    },
                    children: [(0, a.jsx)(o.default, {
                        ...c,
                        className: i(d, u.flowerStar)
                    }), (0, a.jsx)("div", {
                        className: i(u.childContainer, {
                            [u.redesignIconChildContainer]: E
                        }),
                        children: f
                    })]
                })
            }
        },
        791106: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Gradients: function() {
                    return l
                },
                GradientCssUrls: function() {
                    return o
                },
                default: function() {
                    return I
                }
            });
            var a = n("37983"),
                r = n("884691"),
                s = n("748820"),
                i = n("669491");
            let l = Object.freeze({
                    PREMIUM_TIER_0: (0, s.v4)(),
                    PREMIUM_TIER_1: (0, s.v4)(),
                    PREMIUM_TIER_2: (0, s.v4)(),
                    PREMIUM_GUILD: (0, s.v4)(),
                    PREMIUM_TRIAL_TUTORIAL: (0, s.v4)(),
                    PREMIUM_GUILD_BADGE_V2_BACKGROUND: (0, s.v4)()
                }),
                o = {
                    PREMIUM_TIER_0: "url(#".concat(l.PREMIUM_TIER_0, ")"),
                    PREMIUM_TIER_1: "url(#".concat(l.PREMIUM_TIER_1, ")"),
                    PREMIUM_TIER_2: "url(#".concat(l.PREMIUM_TIER_2, ")"),
                    PREMIUM_GUILD: "url(#".concat(l.PREMIUM_GUILD, ")"),
                    PREMIUM_TRIAL_TUTORIAL: "url(#".concat(l.PREMIUM_TRIAL_TUTORIAL, ")"),
                    PREMIUM_GUILD_BADGE_V2_BACKGROUND: "url(#".concat(l.PREMIUM_GUILD_BADGE_V2_BACKGROUND, ")")
                },
                u = () => (0, a.jsxs)("linearGradient", {
                    id: l.PREMIUM_TIER_0,
                    children: [(0, a.jsx)("stop", {
                        offset: ".1762",
                        stopColor: i.default.unsafe_rawColors.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS.css
                    }), (0, a.jsx)("stop", {
                        offset: "0.5351",
                        stopColor: i.default.unsafe_rawColors.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS_2.css
                    }), (0, a.jsx)("stop", {
                        offset: "1",
                        stopColor: i.default.unsafe_rawColors.PREMIUM_TIER_0_PURPLE_FOR_GRADIENTS.css
                    })]
                }),
                d = () => (0, a.jsxs)("linearGradient", {
                    id: l.PREMIUM_TIER_1,
                    children: [(0, a.jsx)("stop", {
                        stopColor: i.default.unsafe_rawColors.PREMIUM_TIER_1_BLUE.css
                    }), (0, a.jsx)("stop", {
                        offset: "1",
                        stopColor: i.default.unsafe_rawColors.PREMIUM_TIER_1_PURPLE.css
                    })]
                }),
                c = () => (0, a.jsxs)("linearGradient", {
                    id: l.PREMIUM_TIER_2,
                    children: [(0, a.jsx)("stop", {
                        stopColor: i.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS.css
                    }), (0, a.jsx)("stop", {
                        offset: "0.502368",
                        stopColor: i.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS_2.css
                    }), (0, a.jsx)("stop", {
                        offset: "1",
                        stopColor: i.default.unsafe_rawColors.PREMIUM_TIER_2_PINK_FOR_GRADIENTS.css
                    })]
                }),
                f = () => (0, a.jsxs)("linearGradient", {
                    id: l.PREMIUM_GUILD,
                    children: [(0, a.jsx)("stop", {
                        stopColor: i.default.unsafe_rawColors.GUILD_BOOSTING_BLUE.css
                    }), (0, a.jsx)("stop", {
                        offset: "1",
                        stopColor: i.default.unsafe_rawColors.GUILD_BOOSTING_PURPLE.css
                    })]
                }),
                E = () => (0, a.jsxs)("linearGradient", {
                    id: l.PREMIUM_TRIAL_TUTORIAL,
                    children: [(0, a.jsx)("stop", {
                        stopColor: i.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE.css
                    }), (0, a.jsx)("stop", {
                        offset: "1",
                        stopColor: i.default.unsafe_rawColors.PREMIUM_TIER_2_PINK.css
                    })]
                }),
                p = () => (0, a.jsxs)("linearGradient", {
                    id: l.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
                    gradientTransform: "rotate(45)",
                    children: [(0, a.jsx)("stop", {
                        offset: "0",
                        stopColor: i.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE.css
                    }), (0, a.jsx)("stop", {
                        offset: "1",
                        stopColor: i.default.unsafe_rawColors.PREMIUM_TIER_2_PINK.css
                    })]
                }),
                _ = r.memo(function() {
                    return (0, a.jsxs)("svg", {
                        viewBox: "0 0 1 1",
                        style: {
                            position: "absolute",
                            pointerEvents: "none",
                            top: -1,
                            left: -1,
                            width: 1,
                            height: 1
                        },
                        "aria-hidden": !0,
                        children: [u(), d(), c(), f(), E(), p()]
                    })
                }, () => !0);
            var I = _
        },
        712218: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                IconTypes: function() {
                    return r
                },
                IconSizes: function() {
                    return d
                },
                default: function() {
                    return f
                }
            });
            var a, r, s = n("37983"),
                i = n("884691"),
                l = n("414456"),
                o = n.n(l),
                u = n("30003");
            (a = r || (r = {})).UNKNOWN = "unknown", a.VISA = "visa", a.DISCOVER = "discover", a.MASTERCARD = "mastercard", a.AMEX = "amex", a.PAYPAL = "paypal", a.PAYMENT_REQUEST = "paymentRequest", a.G_PAY = "gPay", a.DINERS = "diners", a.JCB = "jcb", a.UNIONPAY = "unionpay", a.SOFORT = "sofort", a.PRZELEWY24 = "przelewy24", a.GIROPAY = "giropay", a.PAYSAFECARD = "paysafecard", a.GCASH = "gcash", a.GRABPAY = "grabpay", a.MOMO_WALLET = "momo_wallet", a.VENMO = "venmo", a.KAKAOPAY = "kakaopay", a.GOPAY_WALLET = "gopay_wallet", a.BANCONTACT = "bancontact", a.EPS = "eps", a.IDEAL = "ideal", a.CASH_APP = "cash_app";
            let d = {
                SMALL: u.cardIconSmall,
                MEDIUM: u.cardIconMedium,
                LARGE: u.cardIconLarge,
                XLARGE: u.cardIconXLarge
            };
            class c extends i.PureComponent {
                static getType(e) {
                    if (null == e) return r.UNKNOWN;
                    let t = e.replace(/[^a-z0-9_]/gi, "").toUpperCase();
                    return r[t] || r.UNKNOWN
                }
                render() {
                    let {
                        flipped: e,
                        type: t,
                        className: n,
                        size: a
                    } = this.props;
                    return (0, s.jsx)("div", {
                        className: o(a, u[t], n, {
                            [u.flipped]: e
                        }),
                        children: t
                    })
                }
            }
            c.Types = r, c.Sizes = d, c.defaultProps = {
                size: d.SMALL,
                flipped: !1
            };
            var f = c
        },
        467831: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PremiumPaymentAnimationTier0: function() {
                    return C
                },
                PremiumPaymentAnimationTier1: function() {
                    return T
                },
                PremiumPaymentAnimationTier2: function() {
                    return M
                },
                PremiumPaymentGuildAnimation: function() {
                    return x
                }
            });
            var a, r, s, i, l, o, u, d, c = n("37983"),
                f = n("884691"),
                E = n("414456"),
                p = n.n(E),
                _ = n("301165"),
                I = n("458960"),
                h = n("273108"),
                m = n("635233");
            (a = l || (l = {})).NORMAL = "normal", a.SPEED_START = "speed_start", a.SPEED_LOOP = "speed_loop", a.FINISH = "finish", a.IDLE = "idle";
            let S = {
                [l.NORMAL]: {
                    BEG: 0,
                    END: 600,
                    shouldForcePlayAfter: !0
                },
                [l.SPEED_START]: {
                    BEG: 601,
                    END: 636
                },
                [l.SPEED_LOOP]: {
                    BEG: 637,
                    END: 668
                },
                [l.FINISH]: {
                    BEG: 669,
                    END: 870
                },
                [l.IDLE]: {
                    BEG: 871,
                    END: 878
                }
            };
            class C extends f.PureComponent {
                static getNextScene(e) {
                    switch (e) {
                        case C.Scenes.SPEED_START:
                            return C.Scenes.SPEED_LOOP;
                        case C.Scenes.FINISH:
                            return C.Scenes.IDLE;
                        default:
                            return e
                    }
                }
                importDefault() {
                    return n.el("133541").then(n.t.bind(n, "133541", 19)).then(e => {
                        let {
                            default: t
                        } = e;
                        return t
                    })
                }
                render() {
                    let {
                        className: e,
                        nextScene: t,
                        onScenePlay: n,
                        onSceneComplete: a,
                        pause: r,
                        pauseWhileUnfocused: s
                    } = this.props;
                    return (0, c.jsx)(h.default, {
                        className: p(m.sequencedAnimation, e),
                        importData: this.importDefault,
                        nextScene: r ? l.IDLE : t,
                        sceneSegments: S,
                        onScenePlay: n,
                        onSceneComplete: a,
                        pauseWhileUnfocused: s,
                        pause: r
                    })
                }
            }
            C.Scenes = l, (r = o || (o = {})).NORMAL = "normal", r.SPEED_START = "speed_start", r.SPEED_LOOP = "speed_loop", r.FINISH = "finish", r.IDLE = "idle";
            let g = {
                [o.NORMAL]: {
                    BEG: 0,
                    END: 600,
                    shouldForcePlayAfter: !0
                },
                [o.SPEED_START]: {
                    BEG: 601,
                    END: 636
                },
                [o.SPEED_LOOP]: {
                    BEG: 637,
                    END: 668
                },
                [o.FINISH]: {
                    BEG: 669,
                    END: 870
                },
                [o.IDLE]: {
                    BEG: 871,
                    END: 878
                }
            };
            class T extends f.PureComponent {
                static getNextScene(e) {
                    switch (e) {
                        case T.Scenes.SPEED_START:
                            return T.Scenes.SPEED_LOOP;
                        case T.Scenes.FINISH:
                            return T.Scenes.IDLE;
                        default:
                            return e
                    }
                }
                importDefault() {
                    return n.el("549988").then(n.t.bind(n, "549988", 19)).then(e => {
                        let {
                            default: t
                        } = e;
                        return t
                    })
                }
                render() {
                    let {
                        className: e,
                        nextScene: t,
                        onScenePlay: n,
                        onSceneComplete: a,
                        pause: r,
                        pauseWhileUnfocused: s
                    } = this.props;
                    return (0, c.jsx)(h.default, {
                        className: p(m.sequencedAnimation, e),
                        importData: this.importDefault,
                        nextScene: r ? o.IDLE : t,
                        sceneSegments: g,
                        onScenePlay: n,
                        onSceneComplete: a,
                        pauseWhileUnfocused: s,
                        pause: r
                    })
                }
            }
            T.Scenes = o, (s = u || (u = {})).IDLE_ENTRY = "idle_entry", s.IDLE_LOOP = "idle_loop", s.BOOST_START = "boost_start", s.BOOST_LOOP = "boost_loop", s.BOOST_END = "boost_end", s.VICTORY = "victory", s.ERROR = "error";
            let R = {
                [u.IDLE_ENTRY]: {
                    BEG: 0,
                    END: 50
                },
                [u.IDLE_LOOP]: {
                    BEG: 50,
                    END: 230,
                    shouldForcePlayAfter: !0
                },
                [u.BOOST_START]: {
                    BEG: 230,
                    END: 275
                },
                [u.BOOST_LOOP]: {
                    BEG: 275,
                    END: 290
                },
                [u.BOOST_END]: {
                    BEG: 386,
                    END: 455
                },
                [u.VICTORY]: {
                    BEG: 470,
                    END: 525
                },
                [u.ERROR]: {
                    BEG: 290,
                    END: 375
                }
            };
            class N extends f.PureComponent {
                getStyle(e) {
                    let {
                        animation: t
                    } = this.props;
                    return {
                        transform: [{
                            translateX: t.x.interpolate({
                                inputRange: [0, 1],
                                outputRange: e ? ["100%", "0%"] : ["0%", "-100%"]
                            })
                        }, {
                            translateY: t.y.interpolate({
                                inputRange: [0, 1],
                                outputRange: ["100%", "0%"]
                            })
                        }]
                    }
                }
                render() {
                    let {
                        className: e
                    } = this.props;
                    return (0, c.jsxs)("div", {
                        className: m.panningAnimation,
                        children: [(0, c.jsx)(I.default.div, {
                            className: e,
                            style: this.getStyle(!1)
                        }), (0, c.jsx)(I.default.div, {
                            className: e,
                            style: this.getStyle(!0)
                        })]
                    })
                }
            }
            let A = Object.freeze({
                IDLE_ENTRY: {
                    toValue: 1,
                    duration: 1500
                },
                IDLE_LOOP: {
                    toValue: 1,
                    duration: 6e3,
                    easing: I.default.Easing.linear
                },
                BOOST_START: {
                    toValue: 0,
                    duration: 2e3,
                    delay: 500
                },
                ERROR: {
                    toValue: 1,
                    duration: 1500,
                    delay: 1e3
                }
            });
            class M extends f.PureComponent {
                static getNextScene(e) {
                    switch (e) {
                        case M.Scenes.IDLE_ENTRY:
                            return M.Scenes.IDLE_LOOP;
                        case M.Scenes.BOOST_START:
                            return M.Scenes.BOOST_LOOP;
                        case M.Scenes.BOOST_END:
                            return M.Scenes.VICTORY;
                        case M.Scenes.VICTORY:
                            return M.Scenes.IDLE_ENTRY;
                        case M.Scenes.ERROR:
                            return M.Scenes.IDLE_LOOP;
                        default:
                            return e
                    }
                }
                componentWillUnmount() {
                    this.didUnmount = !0
                }
                importData() {
                    return n.el("475800").then(n.t.bind(n, "475800", 19)).then(e => {
                        let {
                            default: t
                        } = e;
                        return t
                    })
                }
                animateEntry(e) {
                    I.default.parallel([I.default.timing(this.foregroundAnimation.y, {
                        toValue: e.toValue,
                        duration: e.duration,
                        delay: e.delay || 0
                    }), I.default.timing(this.backgroundAnimation.y, {
                        toValue: e.toValue,
                        duration: 1.2 * e.duration,
                        delay: e.delay || 0
                    })]).start()
                }
                animateIdleEntry() {
                    this.animateEntry(A.IDLE_ENTRY)
                }
                animateError() {
                    this.animateEntry(A.ERROR)
                }
                animateIdleLoop() {
                    this.animateIdleLoopBackground(), this.animateIdleLoopForeground()
                }
                animateBoostStart() {
                    I.default.parallel([I.default.timing(this.foregroundAnimation.y, {
                        toValue: A.BOOST_START.toValue,
                        duration: A.BOOST_START.duration,
                        delay: A.BOOST_START.delay
                    }), I.default.timing(this.backgroundAnimation.y, {
                        toValue: A.BOOST_START.toValue,
                        duration: 1.2 * A.BOOST_START.duration,
                        delay: A.BOOST_START.delay
                    })]).start()
                }
                render() {
                    let {
                        className: e,
                        nextScene: t,
                        pause: n,
                        onSceneComplete: a
                    } = this.props;
                    return (0, c.jsxs)("div", {
                        className: p(m.tier2Animation, e),
                        children: [n ? (0, c.jsx)(c.Fragment, {
                            children: (0, c.jsxs)("div", {
                                className: m.panningAnimation,
                                children: [(0, c.jsx)("div", {
                                    className: m.tier2Background
                                }), (0, c.jsx)("div", {
                                    className: m.tier2Foreground
                                })]
                            })
                        }) : (0, c.jsxs)(c.Fragment, {
                            children: [(0, c.jsx)(N, {
                                className: m.tier2Background,
                                animation: this.backgroundAnimation
                            }), (0, c.jsx)(N, {
                                className: m.tier2Foreground,
                                animation: this.foregroundAnimation
                            })]
                        }), (0, c.jsx)(h.default, {
                            className: m.sequencedAnimation,
                            importData: this.importData,
                            nextScene: n ? u.IDLE_LOOP : t,
                            sceneSegments: R,
                            onScenePlay: this.handleScenePlay,
                            onSceneComplete: a,
                            pauseWhileUnfocused: !1,
                            pause: n
                        })]
                    })
                }
                constructor(...e) {
                    super(...e), this.backgroundAnimation = new I.default.ValueXY({
                        x: 0,
                        y: 0
                    }), this.foregroundAnimation = new I.default.ValueXY({
                        x: 0,
                        y: 0
                    }), this.didUnmount = !1, this.animateIdleLoopBackground = () => {
                        !this.didUnmount && (this.backgroundAnimation.x.setValue(0), I.default.timing(this.backgroundAnimation.x, {
                            toValue: A.IDLE_LOOP.toValue,
                            duration: 1.2 * A.IDLE_LOOP.duration,
                            easing: I.default.Easing.linear
                        }).start(this.animateIdleLoopBackground))
                    }, this.animateIdleLoopForeground = () => {
                        !this.didUnmount && (this.foregroundAnimation.x.setValue(0), I.default.timing(this.foregroundAnimation.x, {
                            toValue: A.IDLE_LOOP.toValue,
                            duration: A.IDLE_LOOP.duration,
                            easing: A.IDLE_LOOP.easing
                        }).start(this.animateIdleLoopForeground))
                    }, this.handleScenePlay = e => {
                        switch (e) {
                            case u.IDLE_ENTRY:
                                this.animateIdleEntry(), this.animateIdleLoop();
                                break;
                            case u.ERROR:
                                this.animateError();
                                break;
                            case u.BOOST_START:
                                this.animateBoostStart()
                        }
                        let {
                            onScenePlay: t
                        } = this.props;
                        null != t && t(e)
                    }
                }
            }
            M.Scenes = u, (i = d || (d = {})).ENTRY = "entry", i.IDLE = "idle", i.STARS = "stars", i.ERROR = "error", i.SUCCESS = "success";
            let O = {
                    [d.ENTRY]: {
                        BEG: 0,
                        END: 180
                    },
                    [d.IDLE]: {
                        BEG: 180,
                        END: 360,
                        shouldForcePlayAfter: !0
                    },
                    [d.STARS]: {
                        BEG: 180,
                        END: 360,
                        shouldForcePlayAfter: !0
                    },
                    [d.ERROR]: {
                        BEG: 360,
                        END: 540
                    },
                    [d.SUCCESS]: {
                        BEG: 540,
                        END: 778
                    }
                },
                y = Object.freeze({
                    WHITE: "#ebf0f7",
                    PINK: "#fa6ef6"
                }),
                v = [{
                    left: 29,
                    top: 100,
                    color: y.WHITE
                }, {
                    left: 245,
                    top: 11,
                    color: y.PINK
                }, {
                    left: 393,
                    top: 22,
                    color: y.WHITE
                }, {
                    left: 74,
                    top: 30,
                    color: y.PINK
                }, {
                    left: 188,
                    top: 9,
                    color: y.WHITE
                }, {
                    left: 379,
                    top: 97,
                    color: y.PINK
                }],
                P = Object.freeze({
                    SCALE_INITIAL: 0,
                    SCALE_MIDDLE: 1,
                    SCALE_END: 0,
                    ROTATE_INITIAL: 0,
                    ROTATE_MIDDLE: 180,
                    ROTATE_END: 360,
                    DELAY_MIN: 200,
                    DELAY_MAX: 500,
                    DELAY_STAGGER: 200,
                    DURATION_MIDDLE: 400,
                    DURATION_END: 250,
                    SIZE_MIN: 7,
                    SIZE_MAX: 15,
                    EASING_MIDDLE: I.default.Easing.bezier(.3, .01, 0, .99),
                    EASING_END: I.default.Easing.bezier(0, -.01, .99, 0)
                });

            function L(e) {
                let {
                    animate: t
                } = e, [n, a] = f.useState(0), r = (0, _.useSprings)(v.length, v.map((e, r) => {
                    let s = r > 0 ? P.DELAY_STAGGER * r + Math.random() * (P.DELAY_MAX - P.DELAY_MIN) + P.DELAY_MIN : 0,
                        i = Math.random() * (P.SIZE_MAX - P.SIZE_MIN) + P.SIZE_MIN;
                    return {
                        from: {
                            scale: P.SCALE_INITIAL,
                            rotate: P.ROTATE_INITIAL,
                            top: e.top,
                            left: e.left,
                            width: i,
                            height: i
                        },
                        to: async e => {
                            t ? (await e({
                                scale: P.SCALE_MIDDLE,
                                rotate: P.ROTATE_MIDDLE,
                                delay: s,
                                config: {
                                    duration: P.DURATION_MIDDLE,
                                    easing: P.EASING_MIDDLE
                                }
                            }), await e({
                                scale: P.SCALE_END,
                                rotate: P.ROTATE_END,
                                config: {
                                    duration: P.DURATION_END,
                                    easing: P.EASING_END
                                }
                            }), await e({
                                scale: P.SCALE_INITIAL,
                                rotate: P.ROTATE_INITIAL,
                                immediate: !0
                            }), r === v.length - 1 && a(n + 1)) : await e({
                                scale: P.SCALE_INITIAL,
                                rotate: P.ROTATE_INITIAL
                            })
                        }
                    }
                }));
                return (0, c.jsx)(c.Fragment, {
                    children: r.map((e, t) => {
                        let n = v[t];
                        return (0, c.jsx)(_.animated.svg, {
                            style: e,
                            className: m.guildStar,
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 12.14 12.24",
                            children: (0, c.jsx)("path", {
                                d: "M5.62 10.22l-4 1.9a1.17 1.17 0 01-1.5-.5 1.7 1.7 0 010-1l1.9-4a.91.91 0 000-1l-1.9-4a1.14 1.14 0 01.5-1.5 1.39 1.39 0 01.9 0l4 1.9a.91.91 0 001 0l4-1.9a1.14 1.14 0 011.5.5 1.39 1.39 0 010 .9l-1.9 4a.91.91 0 000 1l1.9 4a1.17 1.17 0 01-.5 1.5 1.7 1.7 0 01-1 0l-4-1.9a1 1 0 00-.9.1z",
                                fill: n.color
                            })
                        }, t)
                    })
                })
            }
            class x extends f.PureComponent {
                static getNextScene(e) {
                    switch (e) {
                        case d.ENTRY:
                        case d.ERROR:
                        case d.SUCCESS:
                            return d.IDLE;
                        default:
                            return e
                    }
                }
                importData() {
                    return n.el("438967").then(n.t.bind(n, "438967", 19)).then(e => {
                        let {
                            default: t
                        } = e;
                        return t
                    })
                }
                render() {
                    let {
                        className: e,
                        nextScene: t,
                        pause: n,
                        onScenePlay: a,
                        onSceneComplete: r,
                        pauseWhileUnfocused: s
                    } = this.props;
                    return (0, c.jsxs)("div", {
                        className: p(m.guildWrapper, e),
                        children: [(0, c.jsx)(h.default, {
                            className: m.guildBackground,
                            importData: this.importData,
                            nextScene: n ? d.IDLE : t,
                            sceneSegments: O,
                            onScenePlay: a,
                            onSceneComplete: r,
                            pauseWhileUnfocused: s,
                            pause: n
                        }), (0, c.jsx)(L, {
                            animate: !n && t === d.STARS
                        })]
                    })
                }
            }
            x.Scenes = d
        },
        273108: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var a = n("37983"),
                r = n("884691"),
                s = n("414456"),
                i = n.n(s),
                l = n("446674"),
                o = n("206230"),
                u = n("471671"),
                d = n("629758");
            class c extends r.PureComponent {
                async componentDidMount() {
                    let {
                        importData: e,
                        nextScene: t,
                        pauseWhileUnfocused: a,
                        pause: r,
                        isWindowFocused: s,
                        useReducedMotion: i
                    } = this.props, [l, {
                        default: o
                    }] = await Promise.all([e(), n.el("230265").then(n.t.bind(n, "230265", 21))]);
                    null != this.animationRef && (this.animation = o.loadAnimation({
                        container: this.animationRef,
                        renderer: "svg",
                        loop: !0,
                        autoplay: !0,
                        animationData: l
                    }), this.animation.addEventListener("loopComplete", this.handleLoopComplete), this.animation.addEventListener("complete", this.handleComplete), this.playScene(t), (a && !s || r || i) && this.animation.pause())
                }
                componentWillUnmount() {
                    this.isUnmounted = !0, null != this.animation && (this.animation.destroy(), this.animation = void 0)
                }
                componentDidUpdate(e) {
                    var t, n, a;
                    let {
                        nextScene: r,
                        pauseWhileUnfocused: s,
                        pause: i,
                        isWindowFocused: l,
                        useReducedMotion: o
                    } = this.props;
                    r !== this.currentScene && this.shouldForcePlayAfter() && !i && this.playScene(r), null != this.animation && (s && !e.isWindowFocused && l && !o && !0 !== i ? this.animation.play() : (o || s && e.isWindowFocused && !l) && this.animation.pause()), !e.pause && i ? null === (t = this.animation) || void 0 === t || t.pause() : e.pause && !i && !o && (null === (n = this.animation) || void 0 === n || n.play()), e.nextScene !== r && i && (this.playScene(r), null === (a = this.animation) || void 0 === a || a.pause())
                }
                shouldForcePlayAfter() {
                    let {
                        sceneSegments: e
                    } = this.props, t = e[this.currentScene];
                    return !0 === t.shouldForcePlayAfter
                }
                playScene(e) {
                    if (this.isUnmounted) return;
                    let {
                        onScenePlay: t,
                        sceneSegments: n,
                        useReducedMotion: a
                    } = this.props, r = n[e], s = n[this.currentScene];
                    if (null != this.animation && (e === this.currentScene || r.BEG !== s.BEG || r.END !== s.END) && this.animation.playSegments([r.BEG, r.END], !0), this.currentScene = e, null != t && t(this.currentScene), a) {
                        var i;
                        null === (i = this.animation) || void 0 === i || i.pause()
                    }
                }
                render() {
                    return (0, a.jsx)("div", {
                        ref: this.handleSetRef,
                        className: i(this.props.className, d.wrapper)
                    })
                }
                constructor(...e) {
                    super(...e), this.animationRef = null, this.currentScene = this.props.nextScene, this.isUnmounted = !1, this.handleLoopComplete = () => {
                        let {
                            onSceneComplete: e,
                            nextScene: t
                        } = this.props;
                        null != e && e(this.currentScene), this.playScene(t)
                    }, this.handleComplete = () => {
                        let {
                            onSceneComplete: e
                        } = this.props;
                        null != e && e(this.currentScene)
                    }, this.handleSetRef = e => {
                        this.animationRef = e;
                        let {
                            animationRef: t
                        } = this.props;
                        null != t && t(e)
                    }
                }
            }
            c.defaultProps = {
                pauseWhileUnfocused: !0,
                pause: !1
            };
            var f = e => {
                let {
                    componentRef: t,
                    ...n
                } = e, r = (0, l.useStateFromStores)([u.default], () => u.default.isFocused()), s = (0, l.useStateFromStores)([o.default], () => o.default.useReducedMotion);
                return (0, a.jsx)(c, {
                    ...n,
                    isWindowFocused: r,
                    useReducedMotion: s,
                    ref: t
                })
            }
        },
        965397: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var a = n("37983"),
                r = n("884691"),
                s = n("414456"),
                i = n.n(s),
                l = n("458960"),
                o = n("77078"),
                u = n("866893");
            let d = {
                friction: 7,
                tension: 60
            };
            class c extends r.Component {
                componentWillAppear(e) {
                    this.animateTo(1).start(e)
                }
                componentWillEnter(e) {
                    this.animateTo(1).start(e)
                }
                componentWillLeave(e) {
                    let {
                        reducedMotion: t
                    } = this.context;
                    t.enabled ? this.animateTo(0).start(e) : l.default.stagger(250, [this.animateTo(1.3), this.animateTo(0)]).start(e)
                }
                animateTo(e) {
                    return l.default.spring(this.animation, {
                        ...d,
                        toValue: e
                    })
                }
                getAnimatedStyle() {
                    let {
                        reducedMotion: e
                    } = this.context;
                    return l.default.accelerate({
                        opacity: this.animation,
                        transform: e.enabled ? void 0 : [{
                            translateY: this.animation.interpolate({
                                inputRange: [0, 1],
                                outputRange: ["150%", "0%"]
                            })
                        }]
                    })
                }
                render() {
                    let {
                        className: e,
                        children: t
                    } = this.props;
                    return (0, a.jsx)(l.default.div, {
                        className: i(e, u.slider),
                        style: this.getAnimatedStyle(),
                        children: t
                    })
                }
                constructor(...e) {
                    super(...e), this.animation = new l.default.Value(0)
                }
            }
            c.contextType = o.AccessibilityPreferencesContext;
            var f = c
        },
        784917: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var a = n("37983");
            n("884691");
            var r = n("75196");

            function s(e) {
                let {
                    width: t = 6,
                    height: n = 11,
                    color: s = "currentColor",
                    foreground: i,
                    ...l
                } = e;
                return (0, a.jsx)("svg", {
                    ...(0, r.default)(l),
                    width: t,
                    height: n,
                    viewBox: "0 0 6 11",
                    children: (0, a.jsx)("path", {
                        fill: s,
                        className: i,
                        d: "M3 0.625244L0 3.62524V7.62524L3 10.6252L6 7.62524V3.62524L3 0.625244ZM5 7.24524L3 9.24524L1 7.24524V4.04524L3 2.04524L5 4.04524V7.24524Z"
                    })
                })
            }
        },
        326880: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var a = n("37983");
            n("884691");
            var r = n("75196");

            function s(e) {
                let {
                    width: t = 6,
                    height: n = 11,
                    color: s = "currentColor",
                    foreground: i,
                    ...l
                } = e;
                return (0, a.jsx)("svg", {
                    ...(0, r.default)(l),
                    width: t,
                    height: n,
                    viewBox: "0 0 6 11",
                    children: (0, a.jsxs)("g", {
                        fill: s,
                        fillRule: "evenodd",
                        className: i,
                        children: [(0, a.jsx)("path", {
                            d: "M2 4.42007V6.79007L3 7.79007L4 6.79007V4.42007L3.01 3.42007L2 4.42007Z"
                        }), (0, a.jsx)("path", {
                            d: "M3 0.590088L0 3.59009V7.59009L3 10.5901L6 7.59009V3.59009L3 0.590088ZM5 7.21009L3 9.21009L1 7.21009V4.00009L3 2.00009L5 4.00009V7.21009Z"
                        })]
                    })
                })
            }
        },
        131777: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var a = n("37983");
            n("884691");
            var r = n("75196");

            function s(e) {
                let {
                    width: t = 6,
                    height: n = 11,
                    color: s = "currentColor",
                    foreground: i,
                    ...l
                } = e;
                return (0, a.jsx)("svg", {
                    ...(0, r.default)(l),
                    width: t,
                    height: n,
                    viewBox: "0 0 6 11",
                    children: (0, a.jsxs)("g", {
                        fill: s,
                        fillRule: "evenodd",
                        className: i,
                        children: [(0, a.jsx)("path", {
                            d: "M3 0.625305L0 3.62531V7.62531L3 10.6253L6 7.62531V3.62531L3 0.625305ZM5 7.24531L3 9.24531L1 7.24531V4.04531L3 2.04531L5 4.04531V7.24531Z"
                        }), (0, a.jsx)("path", {
                            d: "M3.76 4.21526L3 3.45526L2 4.45526V5.97526L3.76 4.21526Z"
                        }), (0, a.jsx)("path", {
                            d: "M2.28003 7.11532L3.00003 7.83532L4.00003 6.83532V5.39532L2.28003 7.11532Z"
                        })]
                    })
                })
            }
        },
        206453: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var a = n("37983");
            n("884691");
            var r = n("784917"),
                s = n("326880"),
                i = n("131777"),
                l = n("49111");

            function o(e) {
                let {
                    tier: t,
                    ...n
                } = e;
                switch (t) {
                    case l.BoostedGuildTiers.NONE:
                    case l.BoostedGuildTiers.TIER_1:
                        return (0, a.jsx)(r.default, {
                            ...n
                        });
                    case l.BoostedGuildTiers.TIER_2:
                        return (0, a.jsx)(s.default, {
                            ...n
                        });
                    case l.BoostedGuildTiers.TIER_3:
                        return (0, a.jsx)(i.default, {
                            ...n
                        });
                    default:
                        throw Error("Not a valid tier type")
                }
            }
        },
        461380: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var a = n("37983");
            n("884691");
            var r = n("414456"),
                s = n.n(r),
                i = n("384737"),
                l = n("448052"),
                o = n("748802"),
                u = n("260792"),
                d = n("77078"),
                c = n("75196"),
                f = n("4177");
            let E = {
                    UP: f.directionUp,
                    RIGHT: f.directionRight,
                    DOWN: f.directionDown,
                    LEFT: f.directionLeft
                },
                p = e => {
                    let {
                        direction: t = E.DOWN,
                        width: n = 24,
                        height: r = 24,
                        color: p = "currentColor",
                        transition: _ = f.transition,
                        className: I,
                        foreground: h,
                        expanded: m,
                        ...S
                    } = e, {
                        enabled: C
                    } = (0, d.useRedesignIconContext)(), g = t;
                    if (!0 === m ? g = E.DOWN : !1 === m && (g = E.RIGHT), C) {
                        let e = {
                            [E.UP]: u.ChevronSmallUpIcon,
                            [E.DOWN]: i.ChevronSmallDownIcon,
                            [E.LEFT]: l.ChevronSmallLeftIcon,
                            [E.RIGHT]: o.ChevronSmallRightIcon
                        } [g];
                        return (0, a.jsx)(e, {
                            ...S,
                            className: I,
                            width: n,
                            height: r,
                            color: p,
                            colorClass: h
                        })
                    }
                    return (0, a.jsx)("svg", {
                        className: s(I, _, g),
                        width: n,
                        height: r,
                        viewBox: "0 0 24 24",
                        ...(0, c.default)(S),
                        children: (0, a.jsx)("path", {
                            className: h,
                            fill: "none",
                            stroke: p,
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M7 10L12 15 17 10",
                            "aria-hidden": !0
                        })
                    })
                };
            p.Directions = E;
            var _ = p
        },
        811151: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var a = n("37983");
            n("884691");
            var r = n("75196");

            function s(e) {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = "currentColor",
                    ...i
                } = e;
                return (0, a.jsxs)("svg", {
                    ...(0, r.default)(i),
                    width: t,
                    height: n,
                    viewBox: "0 0 16 16",
                    children: [(0, a.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M8.45329 8.53891L3.26217 13.7844C2.95995 14.0719 2.49772 14.0719 2.21328 13.7844C1.92883 13.497 1.92883 13.0299 2.21328 12.7245L6.88884 7.99999L2.21328 3.27543C1.92883 2.988 1.92883 2.50297 2.21328 2.21555C2.49772 1.92812 2.95995 1.92812 3.26217 2.21555L8.45329 7.47903C8.73774 7.76645 8.73774 8.23352 8.45329 8.53891Z",
                        fill: s
                    }), (0, a.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M14.4533 8.53891L9.26217 13.7844C8.95995 14.0719 8.49772 14.0719 8.21328 13.7844C7.92883 13.497 7.92883 13.0299 8.21328 12.7245L12.8888 7.99999L8.21328 3.27543C7.92883 2.988 7.92883 2.50297 8.21328 2.21555C8.49772 1.92812 8.95995 1.92812 9.26217 2.21555L14.4533 7.47903C14.7377 7.76645 14.7377 8.23352 14.4533 8.53891Z",
                        fill: s
                    })]
                })
            }
        },
        760607: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var a = n("37983");
            n("884691");
            var r = n("75196"),
                s = function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: s = "currentColor",
                        foreground: i,
                        ...l
                    } = e;
                    return (0, a.jsx)("svg", {
                        ...(0, r.default)(l),
                        width: t,
                        height: n,
                        viewBox: "0 0 16 15.2",
                        children: (0, a.jsx)("path", {
                            className: i,
                            fill: s,
                            fillRule: "evenodd",
                            d: "m16 7.6c0 .79-1.28 1.38-1.52 2.09s.44 2 0 2.59-1.84.35-2.46.8-.79 1.84-1.54 2.09-1.67-.8-2.47-.8-1.75 1-2.47.8-.92-1.64-1.54-2.09-2-.18-2.46-.8.23-1.84 0-2.59-1.54-1.3-1.54-2.09 1.28-1.38 1.52-2.09-.44-2 0-2.59 1.85-.35 2.48-.8.78-1.84 1.53-2.12 1.67.83 2.47.83 1.75-1 2.47-.8.91 1.64 1.53 2.09 2 .18 2.46.8-.23 1.84 0 2.59 1.54 1.3 1.54 2.09z"
                        })
                    })
                }
        },
        118503: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var a = n("37983");
            n("884691");
            var r = n("75196");

            function s(e) {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = "currentColor",
                    foreground: i,
                    ...l
                } = e;
                return (0, a.jsxs)("svg", {
                    ...(0, r.default)(l),
                    width: t,
                    height: n,
                    viewBox: "0 0 8 12",
                    children: [(0, a.jsx)("path", {
                        d: "M4 0L0 4V8L4 12L8 8V4L4 0ZM7 7.59L4 10.59L1 7.59V4.41L4 1.41L7 4.41V7.59Z",
                        fill: s,
                        className: i
                    }), (0, a.jsx)("path", {
                        d: "M2 4.83V7.17L4 9.17L6 7.17V4.83L4 2.83L2 4.83Z",
                        fill: s,
                        className: i
                    })]
                })
            }
        },
        834179: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var a = n("37983");
            n("884691");
            var r = n("469563"),
                s = n("763377"),
                i = n("75196"),
                l = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: s,
                        ...l
                    } = e;
                    return (0, a.jsx)("svg", {
                        ...(0, i.default)(l),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, a.jsx)("path", {
                            className: s,
                            fill: r,
                            d: "M12 2C6.486 2 2 6.487 2 12C2 17.515 6.486 22 12 22C17.514 22 22 17.515 22 12C22 6.487 17.514 2 12 2ZM12 18.25C11.31 18.25 10.75 17.691 10.75 17C10.75 16.31 11.31 15.75 12 15.75C12.69 15.75 13.25 16.31 13.25 17C13.25 17.691 12.69 18.25 12 18.25ZM13 13.875V15H11V12H12C13.104 12 14 11.103 14 10C14 8.896 13.104 8 12 8C10.896 8 10 8.896 10 10H8C8 7.795 9.795 6 12 6C14.205 6 16 7.795 16 10C16 11.861 14.723 13.429 13 13.875Z"
                        })
                    })
                }, s.CircleQuestionIcon)
        },
        216422: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var a = n("37983");
            n("884691");
            var r = n("469563"),
                s = n("202909"),
                i = n("75196"),
                l = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        viewBox: s = "0 0 24 24",
                        foreground: l,
                        ...o
                    } = e;
                    return (0, a.jsx)("svg", {
                        ...(0, i.default)(o),
                        width: t,
                        height: n,
                        viewBox: s,
                        children: (0, a.jsx)("path", {
                            className: l,
                            fill: r,
                            d: "M2.98966977,9.35789159 C2.98966977,9.77582472 2.63442946,10.1240466 2.20807287,10.1240466 L1.78171628,10.1240466 C1.35535969,10.1240466 0.999948837,9.77582472 0.999948837,9.35789159 C0.999948837,8.93995846 1.35535969,8.59173658 1.78171628,8.59173658 L2.20807287,8.59173658 C2.63442946,8.59173658 2.98966977,8.93995846 2.98966977,9.35789159 Z M22.2467643,9.14892503 C24.0942527,12.9800344 22.3888264,17.5772989 18.3384388,19.3882867 C14.4302837,21.1297305 9.74036124,19.457998 7.9638186,15.6268886 C7.60857829,14.8607335 7.3954,14.0248673 7.32428372,13.189001 L5.76091938,13.189001 C5.33456279,13.189001 4.97932248,12.840612 4.97932248,12.4226788 C4.97932248,12.0047457 5.33456279,11.6565238 5.76091938,11.6565238 L8.03493488,11.6565238 C8.46129147,11.6565238 8.81653178,11.3083019 8.81653178,10.8903688 C8.81653178,10.4724357 8.46129147,10.1240466 8.03493488,10.1240466 L4.41090388,10.1240466 C3.98454729,10.1240466 3.62913643,9.77582472 3.62913643,9.35789159 C3.62913643,8.93995846 3.98454729,8.59173658 4.41090388,8.59173658 L9.45606667,8.59173658 C9.88242326,8.59173658 10.2376636,8.24334752 10.2376636,7.82541439 C10.2376636,7.40748126 9.88242326,7.05925937 9.45606667,7.05925937 L7.3954,7.05925937 C6.75586512,7.05925937 6.18727597,6.57161499 6.18727597,5.87517123 C6.18727597,5.24827153 6.68474884,4.69091591 7.3954,4.69091591 L15.4250589,4.69091591 C18.267493,4.8303384 20.9676946,6.43235968 22.2467643,9.14892503 Z M13.2662961,8.38056332 C11.0193969,9.3919615 10.0341721,11.9973566 11.065955,14.1998642 C12.097738,16.4023718 14.755645,17.3681317 17.0025442,16.3567335 C19.249614,15.3453354 20.2346682,12.7399402 19.2028853,10.5374326 C18.1711023,8.33492503 15.5131953,7.36916515 13.2662961,8.38056332 Z M16.8462589,9.84548582 L18.2673907,12.2138293 C18.338507,12.3530846 18.338507,12.4227958 18.2673907,12.5620512 L16.8462589,14.9303946 C16.7751426,15.0696499 16.6330806,15.0696499 16.5619643,15.0696499 L13.7906465,15.0696499 C13.6485845,15.0696499 13.5774682,14.9999387 13.5065225,14.9303946 L12.0852202,12.5620512 C12.0142744,12.4227958 12.0142744,12.3530846 12.0852202,12.2138293 L13.5065225,9.84548582 C13.5774682,9.7062305 13.7197008,9.7062305 13.7906465,9.7062305 L16.5619643,9.7062305 C16.7041969,9.63651925 16.7751426,9.7062305 16.8462589,9.84548582 Z"
                        })
                    })
                }, s.NitroWheelIcon)
        },
        151185: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var a = n("37983");
            n("884691");
            var r = n("469563"),
                s = n("424823"),
                i = n("75196"),
                l = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: s,
                        ...l
                    } = e;
                    return (0, a.jsx)("svg", {
                        ...(0, i.default)(l),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, a.jsx)("path", {
                            fill: r,
                            className: s,
                            d: "M20 11.1111H12.8889V4H11.1111V11.1111H4V12.8889H11.1111V20H12.8889V12.8889H20V11.1111Z"
                        })
                    })
                }, s.PlusSmallIcon)
        },
        342169: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var a = n("37983");
            n("884691");
            var r = n("469563"),
                s = n("457802"),
                i = n("75196"),
                l = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: s,
                        ...l
                    } = e;
                    return (0, a.jsx)("svg", {
                        ...(0, i.default)(l),
                        width: t,
                        height: n,
                        viewBox: "0 0 16 16",
                        children: (0, a.jsx)("path", {
                            fill: r,
                            className: s,
                            d: "M2.66663 7.40747H7.40737H8.59255H8.66663H13.3333V8.59266H8.59255H7.40737H2.66663V7.40747Z"
                        })
                    })
                }, s.MinusIcon)
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

                function E(e) {
                    r(d), s(e)
                }

                function p(e) {
                    return l(d, p, c, {
                        ...i,
                        isLoading: !0
                    }), u({
                        promiseFn: t,
                        resolve: f,
                        reject: E,
                        code: e,
                        mfaCodeHandler: _,
                        isModalOpen: !0
                    })
                }

                function _(e) {
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