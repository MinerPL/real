(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["94540"], {
        13399: function(e, t, n) {
            "use strict";
            e.exports.parse = function(e) {
                var t = /^(?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?((?:-(?:[\da-z]{5,8}|\d[\da-z]{3}))*)?((?:-[\da-wy-z](?:-[\da-z]{2,8})+)*)?(-x(?:-[\da-z]{1,8})+)?$|^(x(?:-[\da-z]{1,8})+)$/i.exec(e);
                if (!t) return null;
                t.shift();
                var n = null,
                    r = [];
                t[2] && (n = (l = t[2].split("-")).shift(), r = l);
                var a = [];
                t[5] && (a = t[5].split("-")).shift();
                var i = [];
                if (t[6]) {
                    (l = t[6].split("-")).shift();
                    for (var l, s, o = []; l.length;) {
                        var u = l.shift();
                        1 === u.length ? s ? (i.push({
                            singleton: s,
                            extension: o
                        }), s = u, o = []) : s = u : o.push(u)
                    }
                    i.push({
                        singleton: s,
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
                            extlang: r
                        },
                        script: t[3] || null,
                        region: t[4] || null,
                        variant: a,
                        extension: i,
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
        938252: function(e, t, n) {
            "use strict";
            e.exports = function(e, t) {
                var n = t.length,
                    r = e.length;
                if (r > n) return !1;
                if (r === n) return e === t;
                e: for (var a = 0, i = 0; a < r; a++) {
                    for (var l = e.charCodeAt(a); i < n;)
                        if (t.charCodeAt(i++) === l) continue e;
                    return !1
                }
                return !0
            }
        },
        861435: function(e, t, n) {
            "use strict";
            var r = {
                    childContextTypes: !0,
                    contextTypes: !0,
                    defaultProps: !0,
                    displayName: !0,
                    getDefaultProps: !0,
                    mixins: !0,
                    propTypes: !0,
                    type: !0
                },
                a = {
                    name: !0,
                    length: !0,
                    prototype: !0,
                    caller: !0,
                    arguments: !0,
                    arity: !0
                },
                i = "function" == typeof Object.getOwnPropertySymbols;
            e.exports = function(e, t, n) {
                if ("string" != typeof t) {
                    var l = Object.getOwnPropertyNames(t);
                    i && (l = l.concat(Object.getOwnPropertySymbols(t)));
                    for (var s = 0; s < l.length; ++s)
                        if (!r[l[s]] && !a[l[s]] && (!n || !n[l[s]])) try {
                            e[l[s]] = t[l[s]]
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
        39298: function(e, t, n) {
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
        663481: function(e, t, n) {
            "use strict";
            e.exports = n.p + "60e64ec1e28c734051d0.svg"
        },
        37598: function(e, t, n) {
            "use strict";
            e.exports = n.p + "e5fb2c858f851f61c32e.svg"
        },
        54239: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                pushLayer: function() {
                    return a
                },
                popLayer: function() {
                    return i
                },
                popAllLayers: function() {
                    return l
                }
            });
            var r = n("913144");

            function a(e) {
                r.default.dispatch({
                    type: "LAYER_PUSH",
                    component: e
                })
            }

            function i() {
                r.default.dispatch({
                    type: "LAYER_POP"
                })
            }

            function l() {
                r.default.dispatch({
                    type: "LAYER_POP_ALL"
                })
            }
        },
        405932: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("920040");
            n("773670");
            var a = n("77078"),
                i = n("534904"),
                l = function(e) {
                    let {
                        message: t
                    } = e;
                    return (0, r.jsxs)("div", {
                        className: i.warnBlock,
                        children: [(0, r.jsx)("div", {
                            className: i.warnIcon
                        }), (0, r.jsx)(a.Text, {
                            className: i.warnText,
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
                    return p
                }
            });
            var r = n("920040"),
                a = n("773670"),
                i = n("575482"),
                l = n.n(i),
                s = n("912557"),
                o = n("77078"),
                u = n("339783"),
                d = n("865146"),
                c = n("712218"),
                E = n("423487"),
                _ = n("701909"),
                f = n("49111"),
                S = n("809924"),
                I = n("782340"),
                T = n("877953");
            let C = "***@***.***",
                A = new d.CreditCardSourceRecord({
                    id: "new_payment_source_id",
                    brand: c.default.Types.UNKNOWN,
                    type: f.PaymentSourceTypes.CARD
                });

            function p(e) {
                var t, n;
                let i, {
                        selectedPaymentSourceId: p,
                        paymentSources: R,
                        prependOption: N,
                        hidePersonalInformation: L,
                        onChange: O,
                        onPaymentSourceAdd: h,
                        isTrial: m = !1,
                        disabled: D = !1,
                        className: g,
                        optionClassName: M,
                        dropdownLoading: P
                    } = e,
                    U = 0 === R.length,
                    v = [...null != N ? [N] : [], ...R, A].map((e, t) => {
                        if (e instanceof d.default) {
                            let {
                                brand: t,
                                label: n
                            } = function(e, t) {
                                if (e instanceof d.CreditCardSourceRecord) return e.id === A.id ? {
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
                                    label: t ? C : e.email
                                };
                                if (e instanceof d.SofortSourceRecord) return {
                                    brand: c.default.Types.SOFORT,
                                    label: t ? C : e.email
                                };
                                else if (e instanceof d.GiropaySourceRecord) return {
                                    brand: c.default.Types.GIROPAY,
                                    label: I.default.Messages.PAYMENT_SOURCE_GIROPAY
                                };
                                else if (e instanceof d.Przelewy24SourceRecord) return {
                                    brand: c.default.Types.PRZELEWY24,
                                    label: t ? C : e.email
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
                            }(e, L);
                            return {
                                value: e.id,
                                label: (0, r.jsxs)("div", {
                                    className: T.paymentSourceSelectedOption,
                                    children: [null != t ? (0, r.jsx)(c.default, {
                                        type: c.default.getType(t)
                                    }) : null, (0, r.jsx)("div", {
                                        className: l(T.paymentSourceLabel, {
                                            [T.error]: e.invalid
                                        }),
                                        children: n
                                    })]
                                })
                            }
                        }
                        return {
                            key: t,
                            value: e.value,
                            label: (0, r.jsx)("div", {
                                className: T.paymentSourceLabel,
                                children: e.label
                            })
                        }
                    }),
                    y = a.useMemo(() => R.find(e => e.id === p), [R, p]);
                let G = (t = m, n = y, i = null, t && null != n && f.IRREDEEMABLE_PAYMENT_SOURCES.has(n.type) ? i = I.default.Messages.PAYMENT_SOURCE_REDEMPTION_INVALID : t && null != n && n.hasFlag(S.PaymentSourceFlags.NEW) && (i = I.default.Messages.BILLING_PAYMENT_AUTHORIZATION_CHARGE.format({
                    helpDeskArticle: _.default.getArticleURL(f.HelpdeskArticles.PAYMENT_AUTHORIZATION_CHARGE)
                })), i);
                return (0, r.jsxs)(r.Fragment, {
                    children: [U ? (0, r.jsx)(o.Button, {
                        color: o.ButtonColors.BRAND,
                        fullWidth: !0,
                        onClick: h,
                        children: I.default.Messages.PAYMENT_SOURCES_ADD
                    }) : (0, r.jsx)(o.SingleSelect, {
                        options: v,
                        value: p,
                        onChange: e => {
                            if (e === A.id) null != h && h();
                            else {
                                let t = R.find(t => t.id === e);
                                null != O && O(t)
                            }
                        },
                        isDisabled: D,
                        className: l({
                            [T.paymentSourceHasWarning]: null != G
                        }, g),
                        optionClassName: M,
                        placeholder: I.default.Messages.PAYMENT_SOURCE_TYPE_SELECT,
                        renderOptionValue: e => {
                            let [t] = e;
                            return P ? (0, r.jsx)(o.Spinner, {
                                type: o.SpinnerTypes.SPINNING_CIRCLE
                            }) : t.label
                        }
                    }), null != G ? (0, r.jsxs)("div", {
                        className: T.paymentSourceWarning,
                        children: [(0, r.jsx)(E.default, {
                            className: T.paymentSourceWarningIcon,
                            color: s.default.unsafe_rawColors.YELLOW_300.css
                        }), (0, r.jsx)(o.Text, {
                            variant: "text-xs/normal",
                            children: G
                        })]
                    }) : null]
                })
            }
        },
        276825: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CheckmarkSmallIcon: function() {
                    return l
                }
            });
            var r = n("920040");
            n("773670");
            var a = n("912557"),
                i = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...o
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, i.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        fillRule: "evenodd",
                        d: "M18.707 7.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L10 14.586l7.293-7.293a1 1 0 0 1 1.414 0Z",
                        clipRule: "evenodd",
                        className: s
                    })
                })
            }
        },
        763377: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CircleQuestionIcon: function() {
                    return l
                }
            });
            var r = n("920040");
            n("773670");
            var a = n("912557"),
                i = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...o
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, i.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        fillRule: "evenodd",
                        d: "M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11Zm-.281-16c-.981 0-1.812.473-2.269 1.14A1 1 0 1 1 7.8 7.01C8.638 5.786 10.095 5 11.719 5c2.495 0 4.656 1.885 4.656 4.375 0 2.103-1.542 3.775-3.524 4.243l.14.993a1 1 0 0 1-1.981.278l-.281-2a1 1 0 0 1 .99-1.139c1.544 0 2.656-1.137 2.656-2.375S13.263 7 11.719 7ZM13 17.875a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0Z",
                        clipRule: "evenodd",
                        className: s
                    })
                })
            }
        },
        457802: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MinusIcon: function() {
                    return l
                }
            });
            var r = n("920040");
            n("773670");
            var a = n("912557"),
                i = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...o
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, i.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        stroke: "string" == typeof l ? l : l.css,
                        strokeLinecap: "round",
                        strokeWidth: "2",
                        d: "M21 12H3",
                        className: s
                    })
                })
            }
        },
        202909: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                NitroWheelIcon: function() {
                    return l
                }
            });
            var r = n("920040");
            n("773670");
            var a = n("912557"),
                i = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...o
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, i.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        fillRule: "evenodd",
                        d: "M7 4a1 1 0 0 0 0 2h3a1 1 0 1 1 0 2H5.5a1 1 0 0 0 0 2H8a1 1 0 1 1 0 2H6a1 1 0 1 0 0 2h1.252A8 8 0 1 0 15 4H7Zm8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM2.5 10a1 1 0 0 0 0-2H2a1 1 0 0 0 0 2h.5Z",
                        clipRule: "evenodd",
                        className: s
                    })
                })
            }
        },
        424823: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PlusSmallIcon: function() {
                    return l
                }
            });
            var r = n("920040");
            n("773670");
            var a = n("912557"),
                i = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...o
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, i.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        fillRule: "evenodd",
                        d: "M13 6a1 1 0 1 0-2 0v5H6a1 1 0 1 0 0 2h5v5a1 1 0 1 0 2 0v-5h5a1 1 0 1 0 0-2h-5V6Z",
                        clipRule: "evenodd",
                        className: s
                    })
                })
            }
        },
        689988: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            }), n("287727");
            var r = n("913144");
            class a {
                initialize() {
                    this.initializedCount++, !(this.initializedCount > 1) && (this._initialize(), Object.entries(this.actions).forEach(e => {
                        let [t, n] = e;
                        r.default.subscribe(t, "function" == typeof n ? n : n.callback)
                    }), this.stores.forEach((e, t) => {
                        t.addChangeListener(e), e()
                    }))
                }
                terminate(e) {
                    !(this.initializedCount <= 0) && (e ? this.initializedCount = 0 : this.initializedCount--, 0 === this.initializedCount && (this._terminate(), Object.entries(this.actions).forEach(e => {
                        let [t, n] = e;
                        r.default.unsubscribe(t, "function" == typeof n ? n : n.callback)
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
                    return a
                }
            });
            var r = n("773336");
            async function a(e, t) {
                let {
                    default: a
                } = await n.el("572544").then(n.bind(n, "572544")), i = a(e, {
                    skipExtensionCheck: t,
                    analyticsLocations: []
                });
                if (null != i) i(null);
                else if (r.isPlatformEmbedded) window.open(e);
                else {
                    let t = document.createElement("a");
                    t.href = e, t.target = "_blank", t.rel = "noreferrer noopener", t.click()
                }
            }
        },
        212084: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("605250"),
                a = n("802493");
            let i = new r.default("GuildStickers");
            var l = new class e {
                getSync(e) {
                    let t = performance.now(),
                        n = a.default.stickers(e).getMapEntriesSyncUnsafe(),
                        r = performance.now();
                    return i.log("synchronously loaded in ".concat(r - t, "ms (guilds: ").concat(n.length, ")")), n
                }
                handleConnectionOpen(e, t) {
                    for (let n of e.guilds) this.handleOneGuildCreate(n, t)
                }
                handleGuildCreate(e, t) {
                    this.handleOneGuildCreate(e.guild, t)
                }
                handleGuildUpdate(e, t) {
                    this.replace(e.guild.id, e.guild.stickers, t)
                }
                handleGuildDelete(e, t) {
                    this.delete(e.guild.id, t)
                }
                handleGuildStickersUpdate(e, t) {
                    this.replace(e.guildId, e.stickers, t)
                }
                handleBackgroundSync(e, t) {
                    e.promisesForBackgroundSyncToWaitOn.push(Promise.all(e.stickers.map(e => {
                        if ("unavailable" === e.dataMode) return Promise.resolve();
                        "full" === e.dataMode ? (i.verbose("Replacing ".concat(e.entities.length, " stickers for ").concat(e.guildId)), this.replace(e.guildId, e.entities, t)) : (e.updatedEntities.length > 0 || e.deletedEntityIds.length > 0) && (i.verbose("Updating ".concat(e.updatedEntities.length, " and deleting ").concat(e.deletedEntityIds.length, " stickers for ").concat(e.guildId)), this.update(e.guildId, e.updatedEntities, e.deletedEntityIds, t))
                    })))
                }
                handleOneGuildCreate(e, t) {
                    null != e.stickers && this.replace(e.id, e.stickers, t), null != e.stickerUpdates && this.update(e.id, e.stickerUpdates.writes, e.stickerUpdates.deletes, t)
                }
                handleClearGuildCache(e) {
                    this.clear(e)
                }
                handleReset() {}
                replace(e, t, n) {
                    a.default.stickersTransaction(n).replaceAll(e, t)
                }
                delete(e, t) {
                    a.default.stickersTransaction(t).delete(e)
                }
                clear(e) {
                    a.default.stickersTransaction(e).delete()
                }
                update(e, t, n, r) {
                    let i = a.default.stickersTransaction(r);
                    for (let r of (i.putAll(e, t), n)) i.delete(e, r)
                }
                constructor() {
                    this.actions = {
                        BACKGROUND_SYNC: (e, t) => this.handleBackgroundSync(e, t),
                        CLEAR_GUILD_CACHE: (e, t) => this.handleClearGuildCache(t),
                        CONNECTION_OPEN: (e, t) => this.handleConnectionOpen(e, t),
                        GUILD_CREATE: (e, t) => this.handleGuildCreate(e, t),
                        GUILD_DELETE: (e, t) => this.handleGuildDelete(e, t),
                        GUILD_STICKERS_UPDATE: (e, t) => this.handleGuildStickersUpdate(e, t),
                        GUILD_UPDATE: (e, t) => this.handleGuildUpdate(e, t)
                    }
                }
            }
        },
        988268: function(e, t, n) {
            "use strict";
            var r, a, i, l;
            n.r(t), n.d(t, {
                ApplicationTypes: function() {
                    return r
                },
                BotTagTypes: function() {
                    return a
                }
            }), (i = r || (r = {}))[i.GAME = 1] = "GAME", i[i.TICKETED_EVENTS = 3] = "TICKETED_EVENTS", i[i.GUILD_ROLE_SUBSCRIPTIONS = 4] = "GUILD_ROLE_SUBSCRIPTIONS", (l = a || (a = {}))[l.BOT = 0] = "BOT", l[l.SERVER = 1] = "SERVER", l[l.SYSTEM_DM = 2] = "SYSTEM_DM", l[l.OFFICIAL = 3] = "OFFICIAL", l[l.STAFF_ONLY_DM = 4] = "STAFF_ONLY_DM", l[l.ORIGINAL_POSTER = 5] = "ORIGINAL_POSTER", l[l.AI = 6] = "AI", l[l.REMIX = 7] = "REMIX"
        },
        339783: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                },
                getIdealBankDisplayNameFromBankName: function() {
                    return o
                },
                getEPSBankDisplayNameFromBankName: function() {
                    return d
                }
            });
            var r = n("862205"),
                a = n("49111"),
                i = n("782340"),
                l = (0, r.createExperiment)({
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
                            enabledPaymentTypes: [a.PaymentSourceTypes.SOFORT, a.PaymentSourceTypes.GIROPAY],
                            forceCountryCode: "DE",
                            validCountryCodes: ["DE"]
                        }
                    }, {
                        id: 2,
                        label: "Regional Payment Method for US",
                        config: {
                            enabledPaymentTypes: [a.PaymentSourceTypes.VENMO, a.PaymentSourceTypes.CASH_APP],
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
                            enabledPaymentTypes: [a.PaymentSourceTypes.PRZELEWY24],
                            forceCountryCode: "PL",
                            validCountryCodes: ["PL"]
                        }
                    }, {
                        id: 6,
                        label: "Enable paysafecard",
                        config: {
                            enabledPaymentTypes: [a.PaymentSourceTypes.PAYSAFE_CARD],
                            forceCountryCode: "DE",
                            validCountryCodes: ["BG", "CZ", "DK", "HU", "RO", "SE", "DE"]
                        }
                    }, {
                        id: 7,
                        label: "Regional Payment Method for Philippines",
                        config: {
                            enabledPaymentTypes: [a.PaymentSourceTypes.GCASH],
                            forceCountryCode: "PH",
                            validCountryCodes: ["PH"]
                        }
                    }, {
                        id: 8,
                        label: "Regional Payment Method for Malaysia",
                        config: {
                            enabledPaymentTypes: [a.PaymentSourceTypes.GRABPAY_MY],
                            forceCountryCode: "MY",
                            validCountryCodes: ["MY"]
                        }
                    }, {
                        id: 9,
                        label: "Regional Payment Method for Vietnam",
                        config: {
                            enabledPaymentTypes: [a.PaymentSourceTypes.MOMO_WALLET],
                            forceCountryCode: "VN",
                            validCountryCodes: ["VN"]
                        }
                    }, {
                        id: 10,
                        label: "Regional Payment Method for Indonesia",
                        config: {
                            enabledPaymentTypes: [a.PaymentSourceTypes.GOPAY_WALLET],
                            forceCountryCode: "ID",
                            validCountryCodes: ["ID"]
                        }
                    }, {
                        id: 11,
                        label: "Regional Payment Method for South Korea",
                        config: {
                            enabledPaymentTypes: [a.PaymentSourceTypes.KAKAOPAY],
                            forceCountryCode: "KR",
                            validCountryCodes: ["KR"]
                        }
                    }, {
                        id: 12,
                        label: "Regional Payment Method for Belgium",
                        config: {
                            enabledPaymentTypes: [a.PaymentSourceTypes.PAYSAFE_CARD, a.PaymentSourceTypes.SOFORT, a.PaymentSourceTypes.BANCONTACT],
                            forceCountryCode: "BE",
                            validCountryCodes: ["BE"]
                        }
                    }, {
                        id: 13,
                        label: "Regional Payment Method for Austria",
                        config: {
                            enabledPaymentTypes: [a.PaymentSourceTypes.PAYSAFE_CARD, a.PaymentSourceTypes.EPS, a.PaymentSourceTypes.SOFORT],
                            forceCountryCode: "AT",
                            validCountryCodes: ["AT"]
                        }
                    }, {
                        id: 14,
                        label: "Regional Payment Method for Netherlands",
                        config: {
                            enabledPaymentTypes: [a.PaymentSourceTypes.PAYSAFE_CARD, a.PaymentSourceTypes.IDEAL, a.PaymentSourceTypes.SOFORT],
                            forceCountryCode: "NL",
                            validCountryCodes: ["NL"]
                        }
                    }, {
                        id: 15,
                        label: "Launch Paysafecard and Sofort",
                        config: {
                            enabledPaymentTypes: [a.PaymentSourceTypes.PAYSAFE_CARD, a.PaymentSourceTypes.SOFORT],
                            forceCountryCode: "ES",
                            validCountryCodes: ["ES", "IT"]
                        }
                    }, {
                        id: 16,
                        label: "Launch Cash App",
                        config: {
                            enabledPaymentTypes: [a.PaymentSourceTypes.CASH_APP],
                            forceCountryCode: "US",
                            validCountryCodes: ["US"]
                        }
                    }]
                });
            let s = new Map([
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
                return void 0 !== e && s.has(e) ? s.get(e) : i.default.Messages.PAYMENT_SOURCE_UNKNOWN
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
                return void 0 !== e && u.has(e) ? u.get(e) : i.default.Messages.PAYMENT_SOURCE_UNKNOWN
            }
        },
        772051: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ClydeExperimentState: function() {
                    return a
                },
                default: function() {
                    return s
                }
            });
            var r, a, i = n("862205");
            (r = a || (a = {}))[r.None = 0] = "None", r[r.DefaultOn = 1] = "DefaultOn", r[r.DefaultOff = 2] = "DefaultOff", r[r.ComingSoon = 3] = "ComingSoon", r[r.ClydeProfiles = 4] = "ClydeProfiles";
            let l = (0, i.createExperiment)({
                kind: "guild",
                id: "2023-03_clyde_ai",
                label: "ClydeAI",
                defaultConfig: {
                    experimentState: a.None
                },
                treatments: [{
                    id: 1,
                    label: "Enabled (Default Off)",
                    config: {
                        experimentState: a.DefaultOff
                    }
                }, {
                    id: 3,
                    label: "Enabled (Default On)",
                    config: {
                        experimentState: a.DefaultOn
                    }
                }, {
                    id: 4,
                    label: "Coming Soon",
                    config: {
                        experimentState: a.ComingSoon
                    }
                }, {
                    id: 5,
                    label: "Clyde Profiles",
                    config: {
                        experimentState: a.ClydeProfiles
                    }
                }]
            });
            var s = l
        },
        254927: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                isClydeEnabledinGdms: function() {
                    return i
                }
            });
            var r = n("862205");
            let a = (0, r.createExperiment)({
                kind: "user",
                id: "2023-06_clyde_ai_gdm",
                label: "Clyde in DMs/GDMs",
                defaultConfig: {
                    isClydeEnabledinGdms: !1
                },
                treatments: [{
                    id: 1,
                    label: "enable clyde in gdms",
                    config: {
                        isClydeEnabledinGdms: !0
                    }
                }]
            });

            function i() {
                let {
                    isClydeEnabledinGdms: e
                } = a.getCurrentConfig({
                    location: "38acdb_1"
                }, {
                    autoTrackExposure: !1
                });
                return e
            }
        },
        980215: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useClydeExperiment: function() {
                    return u
                },
                useClydeProfilesEnabled: function() {
                    return d
                },
                useClydeEnabled: function() {
                    return c
                },
                getClydeEnabled: function() {
                    return _
                },
                getClydeExperimentEnabled: function() {
                    return f
                },
                canUseCustomClydeProfiles: function() {
                    return S
                }
            }), n("773670"), n("498225");
            var r = n("305961"),
                a = n("957255"),
                i = n("772051"),
                l = n("254927"),
                s = n("49111"),
                o = n("724210");

            function u(e) {
                var t;
                let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    r = null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : "",
                    a = i.default.useExperiment({
                        guildId: r,
                        location: "1e9ccc_1"
                    }, {
                        autoTrackExposure: n
                    }).experimentState;
                return a
            }

            function d(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = u(e, t);
                return n === i.ClydeExperimentState.ClydeProfiles
            }

            function c(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    r = u(e, n);
                return E(r, e, t)
            }

            function E(e, t, n) {
                if (null == t) {
                    if (null != n && n.isPrivate()) {
                        if (n.hasFlag(o.ChannelFlags.CLYDE_AI)) return !0;
                        let e = (0, l.isClydeEnabledinGdms)();
                        if (!e) return !1;
                        let t = r.default.getGuildIds().some(e => f(r.default.getGuild(e)));
                        return t
                    }
                    return !1
                }
                return null != e && e !== i.ClydeExperimentState.None && a.default.can(s.Permissions.USE_CLYDE_AI, n)
            }

            function _(e, t) {
                var n;
                let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    a = null !== (n = null == e ? void 0 : e.id) && void 0 !== n ? n : "",
                    l = i.default.getCurrentConfig({
                        guildId: a,
                        location: "1e9ccc_2"
                    }, {
                        autoTrackExposure: r
                    }).experimentState;
                return E(l, e, t)
            }

            function f(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = I(e, t);
                return n !== i.ClydeExperimentState.None
            }

            function S(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return I(e, t) === i.ClydeExperimentState.ClydeProfiles
            }

            function I(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (null == e) return !1;
                let n = e.id;
                return i.default.getCurrentConfig({
                    guildId: n,
                    location: "1e9ccc_4"
                }, {
                    autoTrackExposure: t
                }).experimentState
            }
        },
        115279: function(e, t, n) {
            "use strict";
            var r, a, i, l, s, o, u, d, c, E, _;
            n.r(t), n.d(t, {
                EmojiCategoryTypes: function() {
                    return r
                },
                GRID_NAVIGATOR_ID: function() {
                    return f
                },
                EmojiCategories: function() {
                    return a
                },
                EmojiSubCategory: function() {
                    return i
                },
                INACTIVE_CATEGORY_INDEX: function() {
                    return S
                },
                EmojiSize: function() {
                    return s
                },
                EMOJI_PICKER_TAB_PANEL_ID: function() {
                    return I
                },
                EMOJI_PICKER_TAB_ID: function() {
                    return T
                },
                SOUNDBOARD_PICKER_TAB_PANEL_ID: function() {
                    return C
                },
                SOUNDBOARD_PICKER_TAB_ID: function() {
                    return A
                },
                REACTION_PICKER_TAB_PANEL_ID: function() {
                    return p
                },
                REACTION_PICKER_TAB_ID: function() {
                    return R
                },
                SUPER_REACTION_PICKER_TAB_ID: function() {
                    return N
                },
                SuperReactionBalanceLocations: function() {
                    return o
                },
                GIF_PICKER_TAB_PANEL_ID: function() {
                    return L
                },
                GIF_PICKER_TAB_ID: function() {
                    return O
                },
                EMOJI_SIZE_MAP: function() {
                    return h
                },
                EMOJI_ROW_SIZE: function() {
                    return m
                }
            }), (u = r || (r = {})).GUILD = "GUILD", u.PACK = "PACK", u.UNICODE = "UNICODE", u.RECENT = "RECENT", u.CUSTOM = "CUSTOM", u.SEARCH_RESULTS = "SEARCH_RESULTS", u.FAVORITES = "FAVORITES", u.TOP_GUILD_EMOJI = "TOP_GUILD_EMOJI", u.PREMIUM_UPSELL = "PREMIUM_UPSELL";
            let f = "emoji-picker-grid";
            (d = a || (a = {})).RECENT = "recent", d.FAVORITES = "favorites", d.TOP_GUILD_EMOJI = "top guild emoji", d.CUSTOM = "custom", d.PEOPLE = "people", d.NATURE = "nature", d.FOOD = "food", d.ACTIVITY = "activity", d.TRAVEL = "travel", d.OBJECTS = "objects", d.SYMBOLS = "symbols", d.FLAGS = "flags", d.PREMIUM_UPSELL = "premium emoji", (c = i || (i = {})).NONE = "", c.TOP_GUILD_EMOJI = "top_server", c.NEWLY_ADDED_EMOJI = "newly_added", (E = l || (l = {}))[E.EMOJI = 0] = "EMOJI", E[E.NSFW = 1] = "NSFW";
            let S = -1;
            (_ = s || (s = {}))[_.MEDIUM = 40] = "MEDIUM", _[_.LARGE = 48] = "LARGE";
            let I = "emoji-picker-tab-panel",
                T = "emoji-picker-tab",
                C = "soundboard-picker-tab-panel",
                A = "soundboard-picker-tab",
                p = "reaction-picker-tab-panel",
                R = "reaction-picker-tab",
                N = "super-reaction-picker-tab";
            (o || (o = {})).TOOLTIP = "tooltip";
            let L = "gif-picker-tab-panel",
                O = "gif-picker-tab",
                h = {
                    reaction: 32,
                    default: 44,
                    jumbo: 96
                },
                m = 9
        },
        903016: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return O
                }
            });
            var r = n("920040"),
                a = n("773670"),
                i = n("575482"),
                l = n.n(i),
                s = n("498225"),
                o = n("580279"),
                u = n("77078"),
                d = n("345116"),
                c = n("521012"),
                E = n("145131"),
                _ = n("965397"),
                f = n("423487"),
                S = n("782340"),
                I = n("999650");
            class T extends a.PureComponent {
                render() {
                    let {
                        onClose: e
                    } = this.props;
                    return (0, r.jsxs)(u.ModalHeader, {
                        separator: !1,
                        justify: E.default.Justify.BETWEEN,
                        children: [(0, r.jsx)(u.Heading, {
                            variant: "heading-md/semibold",
                            children: this.props.text
                        }), null != e ? (0, r.jsx)(u.ModalCloseButton, {
                            onClick: e
                        }) : null]
                    })
                }
            }

            function C(e) {
                let {
                    imageClass: t,
                    children: n,
                    error: a,
                    onDismissError: i
                } = e;
                return (0, r.jsxs)("div", {
                    className: I.content,
                    children: [(0, r.jsx)("div", {
                        className: l(I.image, t)
                    }), n, (0, r.jsx)(o.default, {
                        children: null != a ? (0, r.jsx)(_.default, {
                            className: I.error,
                            children: (0, r.jsx)(u.FormErrorBlock, {
                                onDismiss: i,
                                children: a.message
                            })
                        }) : null
                    })]
                })
            }
            let A = e => {
                let {
                    canceledCount: t
                } = e, n = (0, s.useStateFromStores)([c.default], () => c.default.getPremiumTypeSubscription());
                return null == n ? null : (0, r.jsxs)("div", {
                    className: I.pendingCancellation,
                    children: [(0, r.jsx)(f.default, {
                        className: I.pendingCancellationIcon
                    }), (0, r.jsx)(u.Text, {
                        variant: "text-md/normal",
                        className: I.pendingCancellationMessage,
                        children: S.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_CANCEL_WARNING.format({
                            date: n.currentPeriodEnd,
                            canceledCount: t
                        })
                    })]
                })
            };

            function p(e) {
                let {
                    imageClass: t,
                    blurb: n,
                    guild: a,
                    warning: i,
                    error: l,
                    onDismissError: s,
                    slotCount: o = 1,
                    canceledCount: c = 0
                } = e;
                return (0, r.jsxs)(C, {
                    imageClass: t,
                    error: l,
                    onDismissError: s,
                    children: [(0, r.jsx)(u.Text, {
                        variant: "text-md/normal",
                        children: n
                    }), (0, r.jsx)(d.default, {
                        className: I.guildCard,
                        guild: a,
                        subscriptionChange: o
                    }), (0, r.jsx)(u.Text, {
                        variant: "text-md/normal",
                        children: i
                    }), c > 0 ? (0, r.jsx)(A, {
                        canceledCount: c
                    }) : null]
                })
            }

            function R(e) {
                var t, n;
                let {
                    imageClass: i,
                    blurb: l,
                    fromGuilds: s,
                    toGuild: o,
                    error: c,
                    onDismissError: E,
                    slotCount: _ = 1,
                    canceledCount: f = 0
                } = e, T = a.useRef(s), p = null === (t = T.current) || void 0 === t ? void 0 : t.length, R = null === (n = T.current) || void 0 === n ? void 0 : n.reduce((e, t) => (!e.hasOwnProperty(t.id) && (e[t.id] = []), e[t.id].push(t), e), {});
                return (0, r.jsxs)(C, {
                    imageClass: i,
                    error: c,
                    onDismissError: E,
                    children: [(0, r.jsx)(u.Text, {
                        variant: "text-md/normal",
                        children: l
                    }), (0, r.jsx)(u.Text, {
                        variant: "text-xs/bold",
                        className: I.transferGuildCardHeader,
                        children: S.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_TRANSFER_FROM_GUILD.format({
                            guildCount: p
                        })
                    }), null != R ? Object.keys(R).map(e => (0, r.jsx)(d.default, {
                        className: I.transferFromGuildCard,
                        guild: R[e][0],
                        subscriptionChange: -1 * R[e].length
                    }, e)) : null, (0, r.jsx)(u.Text, {
                        variant: "text-xs/normal",
                        className: I.transferGuildCardHeader,
                        children: S.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_TRANSFER_TO_GUILD.format({
                            slotCount: _
                        })
                    }), (0, r.jsx)("div", {
                        className: I.activeTransferGuildCardBorder,
                        children: (0, r.jsx)(d.default, {
                            className: I.transferToGuildCard,
                            guild: o,
                            subscriptionChange: null != s ? s.length : 1
                        })
                    }), f > 0 ? (0, r.jsx)(A, {
                        canceledCount: f
                    }) : null]
                })
            }
            class N extends a.PureComponent {
                render() {
                    let {
                        confirmation: e,
                        confirmationLabel: t,
                        isModifyingSubscription: n,
                        onConfirm: a,
                        onCancel: i
                    } = this.props;
                    return (0, r.jsxs)(u.ModalFooter, {
                        children: [(0, r.jsx)(u.Button, {
                            onClick: a,
                            submitting: n,
                            "aria-label": t,
                            children: e
                        }), (0, r.jsx)(u.Button, {
                            look: u.Button.Looks.LINK,
                            color: u.Button.Colors.PRIMARY,
                            onClick: i,
                            disabled: n,
                            children: S.default.Messages.CANCEL
                        })]
                    })
                }
            }
            class L extends a.PureComponent {
                render() {
                    let {
                        guild: e,
                        header: t,
                        blurb: n,
                        warning: i,
                        confirmation: l,
                        confirmationLabel: s,
                        imageClass: o,
                        error: d,
                        isModifyingSubscription: c,
                        onConfirm: E,
                        onCancel: _,
                        onDismissError: f,
                        canceledCount: S
                    } = this.props;
                    return (0, r.jsxs)(a.Fragment, {
                        children: [(0, r.jsx)(T, {
                            text: t
                        }), (0, r.jsx)(u.ModalContent, {
                            children: (0, r.jsx)(p, {
                                guild: e,
                                blurb: n,
                                warning: i,
                                imageClass: o,
                                error: d,
                                onDismissError: f,
                                canceledCount: S
                            })
                        }), (0, r.jsx)(N, {
                            confirmation: l,
                            confirmationLabel: s,
                            isModifyingSubscription: c,
                            onConfirm: E,
                            onCancel: _
                        })]
                    })
                }
            }
            L.Header = T, L.ApplyBody = p, L.TransferBody = R, L.Footer = N;
            var O = L
        },
        247760: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Steps: function() {
                    return a
                },
                default: function() {
                    return O
                }
            });
            var r, a, i = n("920040"),
                l = n("773670"),
                s = n("161179"),
                o = n.n(s),
                u = n("498225"),
                d = n("77078"),
                c = n("583367"),
                E = n("735201"),
                _ = n("305961"),
                f = n("625634"),
                S = n("751433"),
                I = n("599110"),
                T = n("427459"),
                C = n("903016"),
                A = n("936992"),
                p = n("658206"),
                R = n("49111"),
                N = n("782340"),
                L = n("765928");
            (r = a || (a = {})).UNUSED_QUANTITY_SELECT = "UNUSED_QUANTITY_SELECT", r.GUILD_SELECT = "GUILD_SELECT", r.CONFIRM = "CONFIRM", r.SUCCESS = "SUCCESS";
            var O = e => {
                var t, n;
                let {
                    guildBoostSlots: r,
                    selectedGuild: s,
                    locationSection: O,
                    transitionState: h,
                    onClose: m
                } = e, D = (0, T.getAvailableGuildBoostSlots)(f.default.boostSlots);
                o(null != r || null != s, "Must either provide slots or an initial selected guild"), o(!(null == r ? void 0 : r.some(e => e.isOnCooldown())), "If slots are provided, they must not be on cooldown");
                let g = [null == r ? a.UNUSED_QUANTITY_SELECT : null, null == s ? a.GUILD_SELECT : null, a.CONFIRM, a.SUCCESS].filter(e => null != e),
                    [M, P] = (0, u.useStateFromStoresArray)([E.default], () => [E.default.isModifyingAppliedBoost, E.default.applyBoostError]),
                    [U, v] = l.useState(""),
                    [y, G] = l.useState(g[0]),
                    [B, b] = l.useState(!1),
                    [x, F] = l.useState(s),
                    [w, k] = l.useState(null != r ? r : D.slice(0, 1)),
                    H = l.useMemo(() => null == w ? [] : w.map(e => {
                        let {
                            premiumGuildSubscription: t
                        } = e;
                        return _.default.getGuild(null == t ? void 0 : t.guildId)
                    }).filter(e => null != e), [w]),
                    V = l.useMemo(() => {
                        var e;
                        return (null == w ? void 0 : null === (e = w[0]) || void 0 === e ? void 0 : e.premiumGuildSubscription) != null
                    }, [w]),
                    j = () => {
                        m(y === a.SUCCESS), I.default.track(R.AnalyticEvents.MODAL_DISMISSED, {
                            type: R.AnalyticsSections.PREMIUM_GUILD_SUBSCRIBE_MODAL,
                            location_section: O
                        })
                    },
                    K = {
                        [a.UNUSED_QUANTITY_SELECT]: {
                            body: () => (o(!(null == r && 0 === D.length), "Cannot provide no slots if there are no other available slots"), (0, i.jsxs)("div", {
                                className: L.quantitySelectorBody,
                                children: [(0, i.jsx)(d.Heading, {
                                    variant: "heading-md/semibold",
                                    className: L.quantitySelectorHeader,
                                    children: N.default.Messages.PREMIUM_GUILD_SUBSCRIBE_UNUSED_SLOTS_HEADER
                                }), (0, i.jsx)(d.Text, {
                                    variant: "text-md/normal",
                                    className: L.quantitySelectorDescription,
                                    children: N.default.Messages.PREMIUM_GUILD_SUBSCRIBE_UNUSED_SLOTS_DESCRIPTION
                                }), (0, i.jsxs)("div", {
                                    className: L.quantitySelectorWrapper,
                                    children: [(0, i.jsx)(S.default, {
                                        value: w.length,
                                        onChange: e => k(D.slice(0, e)),
                                        minValue: 1,
                                        maxValue: D.length
                                    }), (0, i.jsx)(d.Text, {
                                        className: L.quantitySelectorLabel,
                                        variant: "text-md/normal",
                                        children: N.default.Messages.PREMIUM_GUILD_SUBSCRIBE_UNUSED_SLOTS_COUNTER
                                    })]
                                })]
                            })),
                            footer: () => (0, i.jsxs)(d.ModalFooter, {
                                children: [(0, i.jsx)(d.Button, {
                                    onClick: () => G(a.CONFIRM),
                                    children: N.default.Messages.PREMIUM_GUILD_SUBSCRIBE_UNUSED_SLOTS_NEXT
                                }), (0, i.jsx)(d.Button, {
                                    look: d.Button.Looks.LINK,
                                    color: d.Button.Colors.PRIMARY,
                                    onClick: j,
                                    children: N.default.Messages.PREMIUM_GUILD_SUBSCRIBE_UNUSED_SLOTS_CANCEL
                                })]
                            })
                        },
                        [a.GUILD_SELECT]: {
                            header: () => (0, i.jsx)(A.GuildSelectModalHeader, {
                                isTransfer: V,
                                query: U,
                                setQuery: v
                            }),
                            bodyClass: L.selectContent,
                            body: () => (0, i.jsx)(A.GuildSelectModalBody, {
                                onClose: j,
                                onSelectGuild: e => {
                                    F(e), G(a.CONFIRM)
                                },
                                isTransfer: V,
                                selectedSlotGuilds: H,
                                query: U
                            })
                        },
                        [a.CONFIRM]: {
                            body() {
                                if (null == x) return null;
                                let e = w.filter(e => (0, T.isGuildBoostSlotCanceled)(e)).length,
                                    t = w.length,
                                    n = H.length;
                                return V ? (0, i.jsx)(C.default.TransferBody, {
                                    fromGuilds: H,
                                    toGuild: x,
                                    blurb: N.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_TRANSFER_BLURB.format({
                                        slotCount: t,
                                        guildCount: n
                                    }),
                                    imageClass: L.transferConfirmImage,
                                    error: B ? P : null,
                                    onDismissError: () => b(!1),
                                    slotCount: t,
                                    canceledCount: e
                                }) : (0, i.jsx)(C.default.ApplyBody, {
                                    guild: x,
                                    blurb: N.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_BLURB,
                                    warning: N.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_COOLDOWN_WARNING.format({
                                        days: R.GUILD_BOOST_APPLY_COOLDOWN_DAYS,
                                        slotCount: t
                                    }),
                                    imageClass: L.confirmImage,
                                    error: B ? P : null,
                                    onDismissError: () => b(!1),
                                    slotCount: t,
                                    canceledCount: e
                                })
                            },
                            footer() {
                                let e = w.length,
                                    t = g[0] === a.CONFIRM ? j : () => G(g[g.indexOf(y) - 1]),
                                    n = async () => {
                                        if (null != x && (null == w ? void 0 : w.length) !== 0) {
                                            o(!w.some(e => e.isOnCooldown()), "Cannot use a premium guild subscription slot while on cooldown");
                                            try {
                                                await Promise.all(w.map(e => {
                                                    let {
                                                        premiumGuildSubscription: t
                                                    } = e;
                                                    return null != t ? (0, c.unapplyFromGuild)(t.guildId, t.id) : Promise.resolve()
                                                })), await (0, c.applyToGuild)(x.id, w.map(e => {
                                                    let {
                                                        id: t
                                                    } = e;
                                                    return t
                                                })), G(a.SUCCESS)
                                            } catch (e) {
                                                b(!0)
                                            }
                                        }
                                    };
                                return (0, i.jsx)(C.default.Footer, {
                                    confirmation: V ? N.default.Messages.PREMIUM_GUILD_SUBSCRIBE_TRANSFER_CONFIRM_CONFIRMATION.format({
                                        slotCount: e
                                    }) : N.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_CONFIRMATION.format({
                                        slotCount: e
                                    }),
                                    confirmationLabel: V ? N.default.Messages.PREMIUM_GUILD_SUBSCRIBE_TRANSFER_CONFIRM_CONFIRMATION_LABEL.format({
                                        slotCount: e
                                    }) : N.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_CONFIRMATION_LABEL.format({
                                        slotCount: e
                                    }),
                                    onConfirm: n,
                                    onCancel: t,
                                    isModifyingSubscription: M
                                })
                            }
                        },
                        [a.SUCCESS]: {
                            body: () => (0, i.jsx)(p.GuildBoostingConfirmation, {
                                guild: x,
                                isTransfer: V,
                                guildBoostQuantity: w.length,
                                onClose: j
                            })
                        }
                    };
                l.useEffect(() => {
                    I.default.track(R.AnalyticEvents.OPEN_MODAL, {
                        type: R.AnalyticsSections.PREMIUM_GUILD_SUBSCRIBE_MODAL,
                        location_section: O
                    })
                }, [O]);
                let Y = K[y];
                return (0, i.jsxs)(d.ModalRoot, {
                    transitionState: h,
                    className: L.modal,
                    size: d.ModalSize.SMALL,
                    children: [null === (t = Y.header) || void 0 === t ? void 0 : t.call(Y), (0, i.jsx)(d.ModalContent, {
                        className: Y.bodyClass,
                        children: (0, i.jsx)(d.Sequencer, {
                            step: y,
                            steps: g,
                            children: Y.body()
                        })
                    }), null === (n = Y.footer) || void 0 === n ? void 0 : n.call(Y), (0, i.jsx)(d.ModalCloseButton, {
                        className: L.modalCloseButton,
                        onClick: j
                    })]
                })
            }
        },
        936992: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GuildSelectModalHeader: function() {
                    return p
                },
                GuildSelectModalBody: function() {
                    return R
                },
                default: function() {
                    return N
                }
            });
            var r = n("920040"),
                a = n("773670"),
                i = n("938252"),
                l = n.n(i),
                s = n("498225"),
                o = n("77078"),
                u = n("54239"),
                d = n("393414"),
                c = n("334811"),
                E = n("305961"),
                _ = n("677099"),
                f = n("109024"),
                S = n("810567"),
                I = n("427459"),
                T = n("49111"),
                C = n("782340"),
                A = n("344757");

            function p(e) {
                let {
                    isTransfer: t = !1,
                    setQuery: n,
                    query: a
                } = e;
                return (0, r.jsxs)(o.ModalHeader, {
                    className: A.selectHeaderContainer,
                    children: [(0, r.jsx)(o.Heading, {
                        className: A.selectHeader,
                        variant: "heading-md/semibold",
                        children: t ? C.default.Messages.PREMIUM_GUILD_SUBSCRIBE_SELECT_GUILD_TRANSFER_HEADER : C.default.Messages.PREMIUM_GUILD_SUBSCRIBE_SELECT_GUILD_HEADER
                    }), (0, r.jsx)(S.default, {
                        size: S.default.Sizes.MEDIUM,
                        placeholder: C.default.Messages.PREMIUM_GUILD_SUBSCRIBE_SEARCH_GUILD_PLACEHOLDER,
                        "aria-label": C.default.Messages.PREMIUM_GUILD_SUBSCRIBE_SEARCH_GUILD_PLACEHOLDER,
                        className: A.selectSearch,
                        query: a,
                        onChange: n,
                        onClear: () => n("")
                    })]
                })
            }

            function R(e) {
                let {
                    isTransfer: t = !1,
                    selectedSlotGuilds: n,
                    onClose: a,
                    onSelectGuild: i,
                    query: S
                } = e, p = (0, s.useStateFromStores)([_.default], () => _.default.getFlattenedGuildIds()), R = (0, s.useStateFromStoresArray)([E.default], () => p.reduce((e, t) => {
                    let r = E.default.getGuild(t);
                    return null == r || null != n && n.some(e => e.id === t) ? e : ((S.length <= 0 || l(S.toLowerCase(), null == r ? void 0 : r.name.toLowerCase())) && e.push(r), e)
                }, [])), {
                    enabled: N
                } = c.default.useExperiment({
                    location: "5f417c_1"
                }, {
                    autoTrackExposure: !0
                });

                function L() {
                    a(), (0, u.popLayer)(), (0, d.transitionTo)(T.Routes.GUILD_DISCOVERY)
                }
                return (0, r.jsxs)(r.Fragment, {
                    children: [0 === R.length && (0, r.jsx)("div", {
                        className: A.emptyStateWrapper,
                        children: (0, r.jsx)(o.Text, {
                            variant: "text-md/normal",
                            children: 0 === p.length ? C.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_APPLY_NON_GUILD_MEMBER.format({
                                publicGuildDirectoryHook: (e, t) => (0, r.jsx)(o.Clickable, {
                                    onClick: L,
                                    tag: "a",
                                    children: e
                                }, t)
                            }) : C.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_APPLY_GUILD_NOT_FOUND
                        })
                    }), R.map(e => (0, r.jsxs)(o.Clickable, {
                        className: A.selectGuild,
                        onClick: () => {
                            i(e)
                        },
                        children: [(0, r.jsx)(f.default, {
                            className: A.selectGuildIcon,
                            guild: e,
                            size: f.default.Sizes.SMALL
                        }), (0, r.jsxs)("div", {
                            className: A.selectGuildCopy,
                            children: [(0, r.jsx)(o.Text, {
                                className: A.selectGuildName,
                                variant: "text-md/normal",
                                children: e.name
                            }), N && (0, r.jsx)(o.Text, {
                                className: A.selectGuildLevel,
                                color: "text-muted",
                                variant: "text-xs/normal",
                                children: (0, I.getTierName)(e.premiumTier)
                            })]
                        }), N && (0, r.jsx)(o.Text, {
                            className: A.selectGuildPseudoCta,
                            color: "always-white",
                            variant: "text-sm/medium",
                            children: t ? C.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_TRANSFER_HERE : C.default.Messages.PREMIUM_GUILD_SUBSCRIPTION
                        })]
                    }, e.id))]
                })
            }

            function N(e) {
                let {
                    onClose: t,
                    onSelectGuild: n,
                    transitionState: i
                } = e, [l, s] = a.useState("");
                return (0, r.jsxs)(o.ModalRoot, {
                    transitionState: i,
                    className: A.modal,
                    size: o.ModalSize.SMALL,
                    children: [(0, r.jsx)(p, {
                        query: l,
                        setQuery: s
                    }), (0, r.jsx)(o.ModalContent, {
                        className: A.modalContent,
                        children: (0, r.jsx)(R, {
                            onClose: t,
                            onSelectGuild: n,
                            query: l
                        })
                    }), (0, r.jsx)(o.ModalCloseButton, {
                        className: A.modalCloseButton,
                        onClick: t
                    })]
                })
            }
        },
        533613: function(e, t, n) {
            "use strict";
            var r, a;
            n.r(t), n.d(t, {
                HotspotLocations: function() {
                    return r
                }
            }), (a = r || (r = {})).REPORT_PROBLEM_POST_STREAM = "REPORT_PROBLEM_POST_STREAM", a.VIDEO_BACKGROUND_FEEDBACK = "VIDEO_BACKGROUND_FEEDBACK", a.VOICE_CALL_FEEDBACK = "VOICE_CALL_FEEDBACK", a.GUILD_ANALYTICS_GUILD_SETTINGS_MENU = "GUILD_ANALYTICS_GUILD_SETTINGS_MENU", a.NOW_PLAYING_CONSENT_CARD = "NOW_PLAYING_CONSENT_CARD", a.IOS_GUILD_NAV_EDUCATION = "IOS_GUILD_NAV_EDUCATION", a.VOICE_PANEL_INTRODUCTION = "VOICE_PANEL_INTRODUCTION", a.GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL = "GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL", a.FAVORITE_EMOJI_TOOLTIP = "FAVORITE_EMOJI_TOOLTIP", a.POST_ACTIVITY_FEEDBACK = "POST_ACTIVITY_FEEDBACK", a.GUILD_DELETE_FEEDBACK = "GUILD_DELETE_FEEDBACK", a.GUILD_LEAVE_FEEDBACK = "GUILD_LEAVE_FEEDBACK", a.APPLICATION_COMMAND_TOOLTIP = "APPLICATION_COMMAND_TOOLTIP", a.GUILD_CAP_INLINE_UPSELL = "GUILD_CAP_INLINE_UPSELL", a.STAGE_CHANNEL_UPSELL = "STAGE_CHANNEL_UPSELL", a.HUB_WAITLIST_UPSELL = "HUB_WAITLIST_UPSELL", a.HUB_NEW = "HUB_NEW", a.HUB_SECOND_EMAIL_CONNECTION_UPSELL = "HUB_SECOND_EMAIL_CONNECTION_UPSELL", a.LIVE_STAGE_NOTIFICATION_BADGE = "LIVE_STAGE_NOTIFICATION_BADGE", a.GUILD_EVENT_UPSELL = "GUILD_EVENT_UPSELL", a.HUB_LINK_CHANNEL_NOTICE = "HUB_LINK_CHANNEL_NOTICE", a.PREMIUM_PROGRESS_BAR_GUILD_HEADER_TOOLTIP = "PREMIUM_PROGRESS_BAR_GUILD_HEADER_TOOLTIP", a.ANIMATED_GUILD_BANNER_GUILD_HEADER_TOOLTIP = "ANIMATED_GUILD_BANNER_GUILD_HEADER_TOOLTIP", a.ANIMATED_GUILD_BANNER_SETTINGS_NEW_PILL = "ANIMATED_GUILD_BANNER_SETTINGS_NEW_PILL", a.MULTI_ACCOUNT_TOOLTIP = "MULTI_ACCOUNT_TOOLTIP", a.HUB_STUDY_ROOM_NOTICE = "HUB_STUDY_ROOM_NOTICE", a.CHANNEL_BANNER_MEMBER_LIST_NOTICE = "CHANNEL_BANNER_MEMBER_LIST_NOTICE", a.CHANGE_LANGUAGE_MODAL = "CHANGE_LANGUAGE_MODAL", a.ACTIVITY_BEB_TUTORIAL = "ACTIVITY_BEB_TUTORIAL", a.APP_DIRECTORY_SETTINGS_NEW_PILL = "APP_DIRECTORY_SETTINGS_NEW_PILL", a.INVITE_SPLASH_GUILD_HEADER_TOOLTIP = "INVITE_SPLASH_GUILD_HEADER_TOOLTIP", a.ANIMATED_VIDEO_BG_CAPERNITE_DAY_NEW = "ANIMATED_VIDEO_BG_CAPERNITE_DAY_NEW", a.ANIMATED_VIDEO_BG_CAPERNITE_NIGHT_NEW = "ANIMATED_VIDEO_BG_CAPERNITE_NIGHT_NEW", a.ANIMATED_VIDEO_BG_HACKER_DEN_NEW = "ANIMATED_VIDEO_BG_HACKER_DEN_NEW", a.ANIMATED_VIDEO_BG_WUMPICE_NEW = "ANIMATED_VIDEO_BG_WUMPICE_NEW", a.ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW = "ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW", a.ANIMATED_VIDEO_BG_BIRTHDAY_1_NEW = "ANIMATED_VIDEO_BG_BIRTHDAY_1_NEW", a.SOUNDBOARD_WHEEL_EDUCATION_MODAL = "SOUNDBOARD_WHEEL_EDUCATION_MODAL", a.IN_APP_REPORTS_FEEDBACK = "IN_APP_REPORTS_FEEDBACK", a.CLIPS_CHANNEL_ATTACH_REMINDER = "CLIPS_CHANNEL_ATTACH_REMINDER"
        },
        9294: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                generateInviteKeyFromUrlParams: function() {
                    return l
                },
                generateInviteKeyFromExtraData: function() {
                    return s
                },
                parseExtraDataFromInviteKey: function() {
                    return o
                },
                parseInviteCodeFromInviteKey: function() {
                    return u
                }
            });
            var r = n("126617"),
                a = n("833858");
            let i = "event";

            function l(e, t) {
                if (null == t) return e;
                let n = function(e) {
                    let t = "?" === e.charAt(0) ? e.substring(1) : e;
                    try {
                        let e = r.parse(t);
                        return (0, a.getFirstQueryStringValue)(e[i])
                    } catch (e) {
                        return
                    }
                }(t);
                return s({
                    baseCode: e,
                    guildScheduledEventId: n
                })
            }

            function s(e) {
                let {
                    baseCode: t,
                    guildScheduledEventId: n
                } = e;
                return null == n ? t : "".concat(t, "?").concat(i, "=").concat(n)
            }

            function o(e) {
                let [t, n] = e.split("?");
                if (null == n) return {
                    baseCode: t
                };
                let l = r.parse(n),
                    s = (0, a.getFirstQueryStringValue)(l[i]);
                return {
                    baseCode: t,
                    guildScheduledEventId: s
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
                    return E
                },
                useSubscriptionInvoicePreview: function() {
                    return S
                },
                useGetSubscriptionInvoice: function() {
                    return I
                },
                getItemUnitPriceWithDiscount: function() {
                    return T
                }
            });
            var r = n("773670"),
                a = n("498225"),
                i = n("990746"),
                l = n("448993"),
                s = n("195358"),
                o = n("521012"),
                u = n("719923"),
                d = n("49111");
            async function c(e) {
                let {
                    items: t,
                    paymentSourceId: n,
                    trialId: r,
                    code: a,
                    applyEntitlements: o = !1,
                    currency: c,
                    renewal: E,
                    metadata: _
                } = e;
                t = (0, u.coerceExistingItemsToNewItemInterval)(t);
                let f = {
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
                    trial_id: r,
                    code: a,
                    apply_entitlements: o,
                    currency: c,
                    renewal: E,
                    metadata: _
                };
                try {
                    let e = await i.default.post({
                        url: d.Endpoints.BILLING_SUBSCRIPTIONS_PREVIEW,
                        body: f,
                        oldFormErrors: !0
                    });
                    return s.default.createInvoiceFromServer(e.body)
                } catch (e) {
                    throw new l.BillingError(e)
                }
            }
            async function E(e) {
                var t;
                let {
                    subscriptionId: n,
                    items: r,
                    paymentSourceId: a,
                    renewal: o,
                    currency: c,
                    applyEntitlements: E = !1,
                    analyticsLocations: _,
                    analyticsLocation: f
                } = e;
                null != r && (r = (0, u.coerceExistingItemsToNewItemInterval)(r));
                let S = {
                    items: null === (t = r) || void 0 === t ? void 0 : t.map(e => {
                        let {
                            planId: t,
                            ...n
                        } = e;
                        return {
                            ...n,
                            plan_id: t
                        }
                    }),
                    payment_source_id: a,
                    renewal: o,
                    apply_entitlements: E,
                    currency: c
                };
                try {
                    let e = await i.default.patch({
                        url: d.Endpoints.BILLING_SUBSCRIPTION_PREVIEW(n),
                        query: {
                            location: f,
                            location_stack: _
                        },
                        body: S,
                        oldFormErrors: !0
                    });
                    return s.default.createInvoiceFromServer(e.body)
                } catch (e) {
                    throw new l.BillingError(e)
                }
            }
            async function _(e) {
                let {
                    subscriptionId: t,
                    preventFetch: n
                } = e;
                if (n) return null;
                let r = await i.default.get({
                    url: d.Endpoints.BILLING_SUBSCRIPTION_INVOICE(t),
                    oldFormErrors: !0
                });
                return s.default.createInvoiceFromServer(r.body)
            }

            function f(e, t) {
                let {
                    preventFetch: n = !1
                } = e, [i, l] = (0, r.useState)(null), [s, u] = (0, r.useState)(null), d = (0, a.useStateFromStores)([o.default], () => o.default.getSubscriptions());
                return (0, r.useEffect)(() => {
                    let e = !1;
                    async function r() {
                        try {
                            u(null), l(null);
                            let n = await t();
                            !e && l(n)
                        } catch (t) {
                            !e && u(t)
                        }
                    }
                    return !n && r(), () => {
                        e = !0
                    }
                }, [n, t, d]), [i, s]
            }

            function S(e) {
                if ("subscriptionId" in e && null == e.subscriptionId) {
                    let {
                        subscriptionId: t,
                        ...n
                    } = e;
                    e = n
                }
                let t = (0, r.useCallback)(() => "subscriptionId" in e ? E(e) : "items" in e ? c(e) : null, [JSON.stringify(e)]);
                return f(e, t)
            }

            function I(e) {
                let t = (0, r.useCallback)(() => _(e), [JSON.stringify(e)]);
                return f(e, t)
            }

            function T(e) {
                let t = e.subscriptionPlanPrice;
                return e.discounts.forEach(n => {
                    let r = n.amount / e.quantity;
                    t -= r
                }), t
            }
        },
        179935: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchReferralsRemaining: function() {
                    return o
                },
                checkRecipientEligibility: function() {
                    return u
                },
                createReferralTrial: function() {
                    return d
                },
                resolveReferralTrialOffer: function() {
                    return c
                }
            });
            var r = n("990746"),
                a = n("913144"),
                i = n("819689"),
                l = n("18494"),
                s = n("49111");
            let o = () => (a.default.dispatch({
                    type: "BILLING_REFERRALS_REMAINING_FETCH_START"
                }), r.default.get({
                    url: s.Endpoints.GET_REFERRALS_REMAINING,
                    oldFormErrors: !0
                }).then(e => {
                    a.default.dispatch({
                        type: "BILLING_REFERRALS_REMAINING_FETCH_SUCCESS",
                        referrals_remaining: null != e.body && null != e.body.referrals_remaining ? e.body.referrals_remaining : 0,
                        sent_user_ids: null != e.body && null != e.body.sent_user_ids ? e.body.sent_user_ids : []
                    })
                }, () => {
                    a.default.dispatch({
                        type: "BILLING_REFERRALS_REMAINING_FETCH_FAIL"
                    })
                })),
                u = e => (a.default.dispatch({
                    type: "BILLING_CREATE_REFERRAL_PREVIEW_START",
                    recipientId: e
                }), r.default.post({
                    url: s.Endpoints.CREATE_REFERRAL_PREVIEW(e),
                    oldFormErrors: !0
                }).then(t => {
                    a.default.dispatch({
                        type: "BILLING_CREATE_REFERRAL_PREVIEW_SUCCESS",
                        recipientId: e,
                        is_eligible: null != t.body && t.body.is_eligible
                    })
                }, () => {
                    a.default.dispatch({
                        type: "BILLING_CREATE_REFERRAL_PREVIEW_FAIL",
                        recipientId: e
                    })
                }));
            async function d(e) {
                try {
                    var t;
                    let n = await r.default.post({
                            url: s.Endpoints.CREATE_REFERRAL(e),
                            oldFormErrors: !0
                        }),
                        i = null !== (t = n.body) && void 0 !== t ? t : null;
                    return a.default.dispatch({
                        type: "BILLING_CREATE_REFERRAL_SUCCESS",
                        userTrialOffer: i
                    }), {
                        userTrialOffer: i
                    }
                } catch (e) {
                    if (a.default.dispatch({
                            type: "BILLING_CREATE_REFERRAL_FAIL"
                        }), e.body.code === s.AbortCodes.INVALID_MESSAGE_SEND_USER) {
                        let t = l.default.getCurrentlySelectedChannelId();
                        null != t && i.default.sendClydeError(t, e.body.code)
                    }
                }
            }
            async function c(e) {
                try {
                    var t;
                    let n = await r.default.get({
                            url: s.Endpoints.REFERRAL_OFFER_ID_RESOLVE(e),
                            oldFormErrors: !0
                        }),
                        i = null !== (t = n.body) && void 0 !== t ? t : null;
                    return a.default.dispatch({
                        type: "BILLING_REFERRAL_RESOLVE_SUCCESS",
                        userTrialOffer: i
                    }), {
                        userTrialOffer: i
                    }
                } catch (t) {
                    a.default.dispatch({
                        type: "BILLING_REFERRAL_RESOLVE_FAIL",
                        userTrialOfferId: e
                    })
                }
            }
        },
        540692: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return O
                }
            });
            var r = n("619415"),
                a = n("498225"),
                i = n("913144"),
                l = n("697218"),
                s = n("179935"),
                o = n("49111");
            let u = null,
                d = {},
                c = [],
                E = new Set,
                _ = !1,
                f = new Set,
                S = new Set,
                I = {},
                T = 0,
                C = null,
                A = () => !0;

            function p(e) {
                f.add(e)
            }

            function R(e) {
                let {
                    messages: t
                } = e;
                t.forEach(e => N(e))
            }

            function N(e) {
                let t = e.type === r.MessageTypes.PREMIUM_REFERRAL ? e.content : null;
                if (null == t) return !1;
                if (!S.has(t) && !f.has(t)) {
                    var n;
                    n = t, f.add(n), i.default.wait(() => (0, s.resolveReferralTrialOffer)(t).catch(o.NOOP_NULL))
                }
            }
            class L extends a.default.Store {
                initialize() {
                    this.waitFor(l.default), this.syncWith([l.default], A)
                }
                checkAndFetchReferralsRemaining() {
                    null == u && !_ && T < 5 && (null == C || C < Date.now()) && (0, s.fetchReferralsRemaining)()
                }
                getReferralsRemaining() {
                    return this.checkAndFetchReferralsRemaining(), u
                }
                getSentUserIds() {
                    return this.checkAndFetchReferralsRemaining(), null == c ? [] : c
                }
                isFetchingReferralsRemaining() {
                    return _
                }
                isFetchingRecipientEligibility(e) {
                    return E.has(e)
                }
                getRecipientEligibility(e) {
                    return void 0 === d[e] && !E.has(e) && (0, s.checkRecipientEligibility)(e), d[e]
                }
                getRelevantUserTrialOffer(e) {
                    return I[e]
                }
                isResolving(e) {
                    return f.has(e)
                }
            }
            L.displayName = "ReferralTrialStore";
            var O = new L(i.default, {
                BILLING_REFERRAL_TRIAL_OFFER_UPDATE: function(e) {
                    let {
                        userTrialOfferId: t,
                        recipientId: n
                    } = e;
                    if (!_ && (0, s.fetchReferralsRemaining)(), !E.has(n) && (0, s.checkRecipientEligibility)(n), !f.has(t)) {
                        var r;
                        r = t, f.add(r), i.default.wait(() => (0, s.resolveReferralTrialOffer)(t).catch(o.NOOP_NULL))
                    }
                },
                BILLING_REFERRALS_REMAINING_FETCH_START: function(e) {
                    let {} = e;
                    _ = !0
                },
                BILLING_REFERRALS_REMAINING_FETCH_SUCCESS: function(e) {
                    let {
                        referrals_remaining: t,
                        sent_user_ids: n
                    } = e;
                    _ = !1, u = t, c = n
                },
                BILLING_REFERRALS_REMAINING_FETCH_FAIL: function(e) {
                    let {} = e;
                    _ = !1, T += 1, C = Date.now() + 1e3 * Math.pow(2, T)
                },
                BILLING_CREATE_REFERRAL_PREVIEW_START: function(e) {
                    let {
                        recipientId: t
                    } = e;
                    E.add(t)
                },
                BILLING_CREATE_REFERRAL_PREVIEW_SUCCESS: function(e) {
                    let {
                        recipientId: t,
                        is_eligible: n
                    } = e;
                    d[t] = n, E.delete(t)
                },
                BILLING_CREATE_REFERRAL_PREVIEW_FAIL: function(e) {
                    let {
                        recipientId: t
                    } = e;
                    d[t] = !1, E.delete(t)
                },
                BILLING_CREATE_REFERRAL_SUCCESS: function(e) {
                    let {
                        userTrialOffer: t
                    } = e;
                    (0, s.fetchReferralsRemaining)(), I[t.id] = t, c = [...c, t.user_id]
                },
                BILLING_REFERRAL_RESOLVE_SUCCESS: function(e) {
                    let {
                        userTrialOffer: t
                    } = e;
                    null != t && (f.delete(t.id), S.add(t.id), I[t.id] = t)
                },
                BILLING_REFERRAL_RESOLVE_FAIL: function(e) {
                    let {
                        userTrialOfferId: t
                    } = e;
                    f.delete(t), S.add(t)
                },
                LOAD_MESSAGES_SUCCESS: R,
                MESSAGE_CREATE: function(e) {
                    let {
                        message: t
                    } = e;
                    N(t)
                },
                LOAD_MESSAGES_AROUND_SUCCESS: R,
                LOGOUT: function() {
                    u = null, d = {}, c = [], E = new Set, _ = !1, f = new Set, S = new Set, I = {}, T = 0, C = null
                }
            })
        },
        917247: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                usePremiumTrialOffer: function() {
                    return o
                }
            });
            var r = n("744196"),
                a = n("340412"),
                i = n("540692"),
                l = n("833516"),
                s = n("646718");

            function o(e) {
                var t, n, o, u;
                let d = (0, l.useTrialOffer)(s.PREMIUM_TIER_2_TRIAL_FOR_EVERYONE_TRIAL_ID),
                    c = (0, l.useTrialOffer)(s.PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID),
                    E = (0, l.useTrialOffer)(s.PREMIUM_TIER_2_REACTIVATION_TRIAL_ID),
                    _ = (0, l.useTrialOffer)(a.default.getAnyOfUserTrialOfferId([s.PREMIUM_TIER_2_HFU_ONE_WEEK_TRIAL_ID, s.PREMIUM_TIER_2_HFU_TWO_WEEK_TRIAL_ID, s.PREMIUM_TIER_2_HFU_ONE_MONTH_TRIAL_ID, s.PREMIUM_TIER_0_LIKELIHOOD_TRIAL_ID])),
                    f = (0, l.useTrialOffer)(s.PREMIUM_TIER_2_AUTH3_TRIAL_ID),
                    S = (0, r.default)([i.default], () => void 0 === e ? null : i.default.getRelevantUserTrialOffer(e));
                return null !== (u = null !== (o = null !== (n = null !== (t = null != d ? d : S) && void 0 !== t ? t : c) && void 0 !== n ? n : E) && void 0 !== o ? o : _) && void 0 !== u ? u : f
            }
        },
        833516: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                hasUserTrialOfferExpired: function() {
                    return u
                },
                useTrialOffer: function() {
                    return d
                }
            });
            var r = n("773670"),
                a = n("498225"),
                i = n("638800"),
                l = n("697218"),
                s = n("340412"),
                o = n("719923");

            function u(e) {
                return null != e && null != e.expires_at && Date.now() > Date.parse(e.expires_at)
            }

            function d(e) {
                let t = (0, a.useStateFromStores)([s.default], () => s.default.getUserTrialOffer(e)),
                    [n, d] = r.useState(u(t)),
                    c = (0, a.useStateFromStores)([l.default], () => (0, o.isPremium)(l.default.getCurrentUser()));
                return r.useEffect(() => {
                    if (null != t && null != t.expires_at) {
                        let e = new i.Timeout,
                            r = () => {
                                let a = null != t.expires_at ? Date.parse(t.expires_at) - Date.now() : 0;
                                null == e || e.start(a, () => {
                                    !n && u(t) ? d(!0) : r()
                                })
                            };
                        return r(), () => e.stop()
                    }
                }, [n, t]), n || c ? null : t
            }
        },
        345116: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            });
            var r = n("920040"),
                a = n("773670"),
                i = n("575482"),
                l = n.n(i),
                s = n("931138"),
                o = n("109024"),
                u = n("206453"),
                d = n("811151"),
                c = n("427459"),
                E = n("770669");
            class _ extends a.PureComponent {
                render() {
                    let {
                        tier: e
                    } = this.props;
                    return (0, r.jsxs)("div", {
                        className: E.tierPill,
                        children: [(0, r.jsx)(s.default, {
                            className: E.tierPillStar,
                            children: (0, r.jsx)(u.default, {
                                tier: e,
                                className: E.tierPillGem
                            })
                        }), (0, c.getTierName)(e)]
                    })
                }
            }
            let f = e => {
                let {
                    subscriptionChange: t,
                    guild: n
                } = e;
                if (0 === t) return null;
                let a = Math.max(n.premiumSubscriberCount + t, 0),
                    i = (0, c.getGuildTierFromAppliedBoostCount)(a, n.id),
                    l = i - (0, c.getGuildTierFromAppliedBoostCount)(n.premiumSubscriberCount, n.id);
                return 0 === l ? null : (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(d.default, {
                        className: l > 0 ? E.levelUpIcon : E.levelDownIcon
                    }), (0, r.jsx)(_, {
                        tier: i
                    })]
                })
            };
            class S extends a.PureComponent {
                render() {
                    let {
                        guild: e,
                        className: t,
                        subscriptionChange: n
                    } = this.props;
                    return (0, r.jsxs)("div", {
                        className: l(E.subscription, t),
                        children: [(0, r.jsx)(o.default, {
                            guild: e,
                            size: o.default.Sizes.LARGE
                        }), (0, r.jsxs)("div", {
                            className: E.subscriptionInfo,
                            children: [(0, r.jsx)("div", {
                                className: E.guildName,
                                children: e.name
                            }), (0, r.jsxs)("div", {
                                className: E.tierInfo,
                                children: [(0, r.jsx)(_, {
                                    tier: e.premiumTier
                                }), (0, r.jsx)(f, {
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
            var r = n("920040");
            n("773670");
            var a = n("575482"),
                i = n.n(a),
                l = n("153160"),
                s = n("646718"),
                o = n("782340"),
                u = n("22633");

            function d(e) {
                let {
                    price: t,
                    currency: n,
                    intervalType: a,
                    className: d,
                    intervalCount: c = 1,
                    isPrepaidPaymentSource: E = !1
                } = e, _ = (0, l.formatPrice)(t, n), f = null;
                return a === s.SubscriptionIntervalTypes.YEAR ? f = o.default.Messages.BILLING_PRICE_PER_YEAR_BOLD.format({
                    price: _
                }) : a === s.SubscriptionIntervalTypes.MONTH && 1 === c ? f = o.default.Messages.BILLING_PRICE_PER_MONTH_BOLD.format({
                    price: _
                }) : a === s.SubscriptionIntervalTypes.MONTH && c > 1 && (f = o.default.Messages.BILLING_PRICE_PER_MULTI_MONTHS_BOLD.format({
                    price: _,
                    intervalCount: c
                })), (0, r.jsx)("div", {
                    className: i(u.pricePerInterval, d),
                    "data-testid": "PricePerInterval-".concat(n),
                    children: null == a || E ? (0, r.jsx)("strong", {
                        children: _
                    }) : f
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
            var r = n("920040"),
                a = n("773670"),
                i = n("575482"),
                l = n.n(i),
                s = n("125264");
            let o = a.forwardRef(function(e, t) {
                let {
                    isActive: n,
                    children: a
                } = e;
                return (0, r.jsx)("div", {
                    className: l(s.wrapper, {
                        [s.wrapperActive]: n
                    }),
                    ref: t,
                    children: a
                })
            });
            var u = o
        },
        846325: function(e, t, n) {
            "use strict";
            var r, a;
            n.r(t), n.d(t, {
                MAX_LENGTH_SOUND_NAME: function() {
                    return i
                },
                MAX_SOUND_LENGTH_SECONDS: function() {
                    return l
                },
                DEFAULT_SOUND_GUILD_ID: function() {
                    return s
                },
                SoundboardWheelSize: function() {
                    return o
                },
                DEFAULT_KEYBIND: function() {
                    return u
                },
                EMPTY_SOUND_LIST: function() {
                    return d
                },
                CUSTOM_CALL_SOUND_GLOBAL_GUILD_ID: function() {
                    return c
                }
            });
            let i = 32,
                l = 5,
                s = "DEFAULT";
            (a = r || (r = {}))[a.SUCCESS = 0] = "SUCCESS", a[a.INTERRUPTED = 1] = "INTERRUPTED", r.SUCCESS, r.INTERRUPTED;
            let o = {
                    width: 424,
                    height: 424,
                    padding: 100
                },
                u = "ctrl+`",
                d = [],
                c = "0"
        },
        235004: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return M
                }
            });
            var r, a, i = n("427964"),
                l = n.n(i),
                s = n("498225"),
                o = n("913144"),
                u = n("845579"),
                d = n("374363"),
                c = n("697218"),
                E = n("599110"),
                _ = n("829536"),
                f = n("846325"),
                S = n("49111"),
                I = n("397336");
            (r = a || (a = {}))[r.NOT_FETCHED = 0] = "NOT_FETCHED", r[r.FETCHING = 1] = "FETCHING", r[r.FETCHED = 2] = "FETCHED";
            let T = new Map,
                C = new Map,
                A = new Set,
                p = a.NOT_FETCHED,
                R = a.NOT_FETCHED,
                N = new Set,
                L = new Map,
                O = !1;

            function h(e) {
                let {
                    sound: t
                } = e, n = T.get(t.guildId), r = null == n ? void 0 : n.findIndex(e => e.soundId === t.soundId);
                null != n && null != r && -1 !== r ? (n[r] = t, T.set(t.guildId, [...n])) : null != n && (null == n || n.push(t), T.set(t.guildId, [...n]))
            }
            let m = l.debounce(e => {
                E.default.track(S.AnalyticEvents.UPDATE_SOUNDBOARD_SETTINGS, {
                    volume: Math.round((0, _.amplitudeToPerceptual)(e))
                }), u.SoundboardSettings.updateSetting({
                    volume: e
                })
            }, 1e3);

            function D(e) {
                var t, n;
                let r = null !== (n = null == e ? void 0 : null === (t = e.audioContextSettings) || void 0 === t ? void 0 : t.user) && void 0 !== n ? n : {};
                for (let [e, t] of Object.entries(r)) t.soundboardMuted ? A.add(e) : A.delete(e);
                for (let e of A.keys()) null == r[e] && A.delete(e)
            }
            class g extends s.default.Store {
                initialize() {
                    this.waitFor(d.default), D(d.default.settings)
                }
                getOverlaySerializedState() {
                    return {
                        soundboardSounds: Object.fromEntries(T),
                        favoritedSoundIds: Array.from(N),
                        localSoundboardMutes: Array.from(A)
                    }
                }
                getSounds() {
                    return T
                }
                getSoundsForGuild(e) {
                    return T.get(e)
                }
                getDefaultSounds() {
                    return this.getSoundsForGuild(f.DEFAULT_SOUND_GUILD_ID)
                }
                getSound(e, t) {
                    var n;
                    let r = null !== (n = T.get(e)) && void 0 !== n ? n : [];
                    return r.find(e => e.soundId === t)
                }
                getSoundById(e) {
                    let t = Array.from(T.values()).flat();
                    return t.find(t => t.soundId === e)
                }
                isFetchingSounds() {
                    return R === a.FETCHING
                }
                isFetchingDefaultSounds() {
                    return p === a.FETCHING
                }
                isFetching() {
                    return this.isFetchingSounds() || this.isFetchingDefaultSounds()
                }
                shouldFetchDefaultSounds() {
                    return p === a.NOT_FETCHED
                }
                hasFetchedDefaultSounds() {
                    return p === a.FETCHED
                }
                isUserPlayingSounds(e) {
                    let t = L.get(e);
                    return null != t && t > 0
                }
                isPlayingSound(e) {
                    return null != C.get(e)
                }
                isFavoriteSound(e) {
                    return N.has(e)
                }
                getFavorites() {
                    return N
                }
                isLocalSoundboardMuted(e) {
                    return A.has(e)
                }
                hasHadOtherUserPlaySoundInSession() {
                    return O
                }
                hasFetchedAllSounds() {
                    return R === a.FETCHED && p === a.FETCHED
                }
            }
            g.displayName = "SoundboardStore";
            var M = new g(o.default, {
                LOGOUT: function() {
                    T.clear(), C.clear(), L.clear(), O = !1, R = a.NOT_FETCHED, p = a.NOT_FETCHED
                },
                GUILD_SOUNDBOARD_FETCH: function() {
                    R = a.FETCHING
                },
                GUILD_SOUNDBOARD_SOUND_CREATE: h,
                GUILD_SOUNDBOARD_SOUND_UPDATE: h,
                GUILD_SOUNDBOARD_SOUND_DELETE: function(e) {
                    let {
                        soundId: t,
                        guildId: n
                    } = e;
                    T.delete(t);
                    let r = T.get(n),
                        a = null == r ? void 0 : r.findIndex(e => e.soundId === t);
                    null != r && null != a && !(a < 0) && (r.splice(a, 1), T.set(n, [...r]))
                },
                GUILD_SOUNDBOARD_SOUND_PLAY_START: function(e) {
                    var t, n, r;
                    let {
                        soundId: a,
                        userId: i
                    } = e, l = (null !== (n = C.get(a)) && void 0 !== n ? n : 0) + 1, s = (null !== (r = L.get(i)) && void 0 !== r ? r : 0) + 1;
                    C.set(a, l), L.set(i, s), i !== (null === (t = c.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) && (O = !0)
                },
                GUILD_SOUNDBOARD_SOUND_PLAY_END: function(e) {
                    var t, n;
                    let {
                        soundId: r,
                        userId: a
                    } = e, i = (null !== (t = C.get(r)) && void 0 !== t ? t : 0) - 1, l = (null !== (n = L.get(a)) && void 0 !== n ? n : 0) - 1;
                    i <= 0 ? C.delete(r) : C.set(r, i), l <= 0 ? L.delete(a) : L.set(a, l)
                },
                USER_SOUNDBOARD_SET_VOLUME: function(e) {
                    let {
                        volume: t
                    } = e;
                    m(t)
                },
                VOICE_CHANNEL_SELECT: function() {
                    C.clear(), L.clear()
                },
                USER_SETTINGS_PROTO_UPDATE: function(e) {
                    let {
                        settings: t
                    } = e, {
                        type: n,
                        proto: r
                    } = t;
                    if (n === I.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS) {
                        var a, i;
                        N = new Set(null !== (i = null == r ? void 0 : null === (a = r.favoriteSoundboardSounds) || void 0 === a ? void 0 : a.soundIds) && void 0 !== i ? i : [])
                    } else n === I.UserSettingsTypes.PRELOADED_USER_SETTINGS && D(r)
                },
                SOUNDBOARD_FETCH_DEFAULT_SOUNDS: function() {
                    p = a.FETCHING
                },
                SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS: function(e) {
                    let {
                        soundboardSounds: t
                    } = e;
                    T.set(f.DEFAULT_SOUND_GUILD_ID, t), p = a.FETCHED
                },
                SOUNDBOARD_SOUNDS_RECEIVED: function(e) {
                    let {
                        updates: t
                    } = e;
                    t.forEach(e => {
                        let {
                            guildId: t,
                            sounds: n
                        } = e;
                        T.set(t, n)
                    }), R = a.FETCHED
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    T.delete(t.id)
                },
                AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE: function(e) {
                    let {
                        userId: t
                    } = e;
                    A.has(t) ? A.delete(t) : A.add(t)
                },
                OVERLAY_INITIALIZE: function(e) {
                    let {
                        soundboardStoreState: t
                    } = e;
                    T = new Map(Object.entries(t.soundboardSounds)), N = new Set(t.favoritedSoundIds), A = new Set(t.localSoundboardMutes)
                },
                GUILD_SOUNDBOARD_SOUNDS_UPDATE: function(e) {
                    let {
                        guildId: t,
                        soundboardSounds: n
                    } = e;
                    T.set(t, n)
                }
            })
        },
        364685: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return b
                }
            });
            var r, a, i = n("379279"),
                l = n("498225"),
                s = n("913144"),
                o = n("802493"),
                u = n("595525"),
                d = n("212084"),
                c = n("867805"),
                E = n("267567"),
                _ = n("813006"),
                f = n("778689"),
                S = n("305961"),
                I = n("161585"),
                T = n("24373"),
                C = n("49111");
            (r = a || (a = {}))[r.Unloaded = 0] = "Unloaded", r[r.MaybeLoaded = 1] = "MaybeLoaded", r[r.Loaded = 2] = "Loaded";
            let A = 2,
                p = new Map,
                R = new Map,
                N = null,
                L = [],
                O = null,
                h = !1,
                m = new Map,
                D = (e, t) => {
                    m = new Map(m.set(e, t))
                },
                g = 1e3 * C.Durations.HOUR,
                M = () => {
                    if (0 !== A) return;
                    let e = o.default.database();
                    if (null == e) return;
                    A = 2;
                    let t = (0, u.tryLoadOrResetCacheGateway)("StickerStore.loadSavedGuildStickers", () => i.default.time("\uD83D\uDCBE", "loadSavedGuildStickers", () => d.default.getSync(e)));
                    if (null != t) {
                        for (let [e, n] of t)
                            if (f.default.isMember(e) && !m.has(e)) {
                                for (let t of n) P(t, !0, S.default.getGuild(e));
                                D(e, n)
                            }
                    }
                },
                P = function(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    R.set(e.id, e), t && U(e, n)
                },
                U = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    if (null == N) return;
                    let {
                        tags: n
                    } = e, r = {
                        type: I.StickerMetadataTypes.STICKER_NAME,
                        value: e.name.trim().toLocaleLowerCase()
                    };
                    if ((0, T.isStandardSticker)(e)) {
                        let t = L.find(t => t.id === e.pack_id),
                            a = [r, ...(null != n ? n : "").split(",").map(e => ({
                                type: I.StickerMetadataTypes.TAG,
                                value: e.trim().toLocaleLowerCase()
                            }))];
                        null != t && a.push({
                            type: I.StickerMetadataTypes.PACK_NAME,
                            value: t.name
                        }), N.set(e.id, a)
                    } else if ((0, T.isGuildSticker)(e) && null != n) {
                        let a = c.default.getByName(n),
                            i = {
                                type: I.StickerMetadataTypes.TAG,
                                value: n.trim().toLocaleLowerCase()
                            },
                            l = [r, i];
                        if (null != t) {
                            let e = (t instanceof(0, _.default) ? t.name : t.properties.name).trim().toLocaleLowerCase();
                            null != e && "" !== e && l.push({
                                type: I.StickerMetadataTypes.GUILD_NAME,
                                value: e
                            })
                        }
                        if (null == a) {
                            N.set(e.id, l);
                            return
                        }
                        l.push({
                            type: I.StickerMetadataTypes.CORRELATED_EMOJI,
                            value: a.surrogates
                        }), a.forEachDiversity(e => l.push({
                            type: I.StickerMetadataTypes.CORRELATED_EMOJI,
                            value: e.surrogates
                        })), N.set(e.id, l)
                    }
                },
                v = (e, t, n) => {
                    p.set(e.id, e);
                    let r = [...L];
                    if (t) {
                        let t = r.findIndex(t => t.id === e.id); - 1 !== t ? r[t] = e : r.push(e), L = r
                    }(t || n) && e.stickers.forEach(e => P(e))
                },
                y = () => {
                    m.forEach((e, t) => {
                        let n = S.default.getGuild(t);
                        null != n && e.forEach(e => U(e, n))
                    }), L.forEach(e => {
                        e.stickers.forEach(e => U(e))
                    })
                };

            function G(e) {
                null != e.stickers && (e.stickers.forEach(t => P(t, !0, e)), D(e.id, e.stickers))
            }
            class B extends l.default.Store {
                initialize() {
                    this.waitFor(o.default, f.default, S.default)
                }
                get isLoaded() {
                    return 0 !== A
                }
                get stickerMetadata() {
                    return M(), null == N && (N = new Map, y()), N
                }
                get hasLoadedStickerPacks() {
                    return null != O && O + g > Date.now()
                }
                get isFetchingStickerPacks() {
                    return h
                }
                getStickerById(e) {
                    return !R.has(e) && M(), R.get(e)
                }
                getStickerPack(e) {
                    return p.get(e)
                }
                getPremiumPacks() {
                    return L
                }
                isPremiumPack(e) {
                    return L.some(t => t.id === e)
                }
                getRawStickersByGuild() {
                    return m
                }
                getAllStickersIterator() {
                    return M(), R.values()
                }
                getAllGuildStickers() {
                    return M(), m
                }
                getStickersByGuildId(e) {
                    return M(), m.get(e)
                }
            }
            B.displayName = "StickersStore";
            var b = new B(s.default, {
                BACKGROUND_SYNC: () => {
                    N = null, R = new Map, m = new Map, A = 0
                },
                CONNECTION_OPEN: e => {
                    let {
                        guilds: t
                    } = e;
                    N = null, R = new Map, m = new Map, t.forEach(G), A = t.every(e => null != e.stickers) ? 1 : 0
                },
                GUILD_CREATE: function(e) {
                    let {
                        guild: t
                    } = e;
                    !E.default.isLurking(t.id) && (G(t), 1 === A && null == t.stickers && null != t.stickerUpdates && (A = 0))
                },
                GUILD_DELETE: function(e) {
                    var t;
                    let {
                        guild: n
                    } = e, r = null !== (t = m.get(n.id)) && void 0 !== t ? t : [];
                    r.forEach(e => {
                        null != N && N.delete(e.id), R.delete(e.id)
                    }), m.delete(n.id), m = new Map(m)
                },
                LOGOUT: () => {
                    A = 0, L = [], R.clear(), p.clear(), N = null, m.clear(), m = new Map(m), h = !1, O = null
                },
                STICKER_PACKS_FETCH_START: () => {
                    h = !0
                },
                STICKER_PACKS_FETCH_SUCCESS: e => {
                    let {
                        packs: t
                    } = e;
                    t.forEach(e => v(e, !0)), O = Date.now(), h = !1
                },
                STICKER_PACK_FETCH_SUCCESS: e => {
                    let {
                        pack: t,
                        ingestStickers: n
                    } = e;
                    v(t, !1, n)
                },
                GUILD_STICKERS_FETCH_SUCCESS: e => {
                    let {
                        guildId: t,
                        stickers: n
                    } = e;
                    n.forEach(e => P(e)), D(t, n)
                },
                GUILD_STICKERS_CREATE_SUCCESS: e => {
                    var t, n;
                    let {
                        guildId: r,
                        sticker: a
                    } = e, i = null !== (t = m.get(r)) && void 0 !== t ? t : [];
                    D(r, [...null !== (n = i.filter(e => e.id !== a.id)) && void 0 !== n ? n : [], a]), P(a)
                },
                STICKER_FETCH_SUCCESS: e => {
                    let {
                        sticker: t
                    } = e;
                    P(t, !1)
                },
                GUILD_STICKERS_UPDATE: e => {
                    var t;
                    let {
                        guildId: n,
                        stickers: r
                    } = e, a = e => {
                        let t;
                        let n = R.get(e.id);
                        return null != n && (0, T.isGuildSticker)(n) && (t = null != n.user ? n.user : void 0), {
                            ...e,
                            user: t
                        }
                    }, i = null !== (t = m.get(n)) && void 0 !== t ? t : [], l = i.filter(e => null == r.find(t => t.id === e.id));
                    l.forEach(e => {
                        R.delete(e.id), null != N && N.delete(e.id)
                    });
                    let s = r.map(e => a(e));
                    s.forEach(e => P(e)), D(n, s)
                }
            })
        },
        729912: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SilentMessagesExperiment: function() {
                    return a
                }
            });
            var r = n("862205");
            let a = (0, r.createExperiment)({
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
                    return i
                },
                canSuppressNotifications: function() {
                    return l
                },
                default: function() {
                    return s
                }
            });
            var r = n("729912");
            let a = "@silent",
                i = new RegExp("^".concat(a, "(\\s|$)"));

            function l() {
                let e = r.SilentMessagesExperiment.getCurrentConfig({
                    location: "456bd9_1"
                }, {
                    autoTrackExposure: !1
                });
                return e.allowSending
            }

            function s(e) {
                return l() && null != e.match(i) ? [!0, e.substring(a.length).trim()] : [!1, e]
            }
        },
        334811: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var r = n("862205");
            let a = (0, r.createExperiment)({
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
            var i = a
        },
        917219: function(e, t, n) {
            "use strict";
            var r, a, i, l;
            n.r(t), n.d(t, {
                VideoFilterType: function() {
                    return r
                },
                DefaultVideoBackground: function() {
                    return a
                },
                ANIMATED_DEFAULT_VIDEO_BACKGROUNDS: function() {
                    return s
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
            }), (i = r || (r = {}))[i.BACKGROUND = 0] = "BACKGROUND", (l = a || (a = {}))[l.OPTION_1 = 0] = "OPTION_1", l[l.OPTION_2 = 1] = "OPTION_2", l[l.OPTION_3 = 2] = "OPTION_3", l[l.OPTION_4 = 3] = "OPTION_4", l[l.OPTION_7 = 7] = "OPTION_7", l[l.OPTION_8 = 8] = "OPTION_8", l[l.OPTION_9 = 9] = "OPTION_9", l[l.OPTION_10 = 10] = "OPTION_10";
            let s = [a.OPTION_7, a.OPTION_8, a.OPTION_9, a.OPTION_10],
                o = [a.OPTION_7, a.OPTION_8, a.OPTION_9, a.OPTION_10, a.OPTION_1, a.OPTION_2, a.OPTION_3, a.OPTION_4].reduce((e, t, n) => ({
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
        746304: function(e, t, n) {
            "use strict";
            var r, a;
            n.r(t), n.d(t, {
                AudioSettingsDefaultVolumes: function() {
                    return r
                }
            }), (a = r || (r = {}))[a.USER = 100] = "USER", a[a.STREAM = 18] = "STREAM"
        },
        148606: function(e, t, n) {
            "use strict";
            var r, a;
            n.r(t), n.d(t, {
                CountryCodes: function() {
                    return r
                },
                CountryCodesSets: function() {
                    return i
                }
            }), (a = r || (r = {})).AD = "AD", a.AE = "AE", a.AF = "AF", a.AG = "AG", a.AI = "AI", a.AL = "AL", a.AM = "AM", a.AO = "AO", a.AQ = "AQ", a.AR = "AR", a.AS = "AS", a.AT = "AT", a.AU = "AU", a.AW = "AW", a.AX = "AX", a.AZ = "AZ", a.BA = "BA", a.BB = "BB", a.BD = "BD", a.BE = "BE", a.BF = "BF", a.BG = "BG", a.BH = "BH", a.BI = "BI", a.BJ = "BJ", a.BL = "BL", a.BM = "BM", a.BN = "BN", a.BO = "BO", a.BQ = "BQ", a.BR = "BR", a.BS = "BS", a.BT = "BT", a.BV = "BV", a.BW = "BW", a.BY = "BY", a.BZ = "BZ", a.CA = "CA", a.CC = "CC", a.CD = "CD", a.CF = "CF", a.CG = "CG", a.CH = "CH", a.CI = "CI", a.CK = "CK", a.CL = "CL", a.CM = "CM", a.CN = "CN", a.CO = "CO", a.CR = "CR", a.CU = "CU", a.CV = "CV", a.CW = "CW", a.CX = "CX", a.CY = "CY", a.CZ = "CZ", a.DE = "DE", a.DJ = "DJ", a.DK = "DK", a.DM = "DM", a.DO = "DO", a.DZ = "DZ", a.EC = "EC", a.EE = "EE", a.EG = "EG", a.EH = "EH", a.ER = "ER", a.ES = "ES", a.ET = "ET", a.FI = "FI", a.FJ = "FJ", a.FK = "FK", a.FM = "FM", a.FO = "FO", a.FR = "FR", a.GA = "GA", a.GB = "GB", a.GD = "GD", a.GE = "GE", a.GF = "GF", a.GG = "GG", a.GH = "GH", a.GI = "GI", a.GL = "GL", a.GM = "GM", a.GN = "GN", a.GP = "GP", a.GQ = "GQ", a.GR = "GR", a.GS = "GS", a.GT = "GT", a.GU = "GU", a.GW = "GW", a.GY = "GY", a.HK = "HK", a.HM = "HM", a.HN = "HN", a.HR = "HR", a.HT = "HT", a.HU = "HU", a.ID = "ID", a.IE = "IE", a.IL = "IL", a.IM = "IM", a.IN = "IN", a.IO = "IO", a.IQ = "IQ", a.IR = "IR", a.IS = "IS", a.IT = "IT", a.JE = "JE", a.JM = "JM", a.JO = "JO", a.JP = "JP", a.KE = "KE", a.KG = "KG", a.KH = "KH", a.KI = "KI", a.KM = "KM", a.KN = "KN", a.KP = "KP", a.KR = "KR", a.KW = "KW", a.KY = "KY", a.KZ = "KZ", a.LA = "LA", a.LB = "LB", a.LC = "LC", a.LI = "LI", a.LK = "LK", a.LR = "LR", a.LS = "LS", a.LT = "LT", a.LU = "LU", a.LV = "LV", a.LY = "LY", a.MA = "MA", a.MC = "MC", a.MD = "MD", a.ME = "ME", a.MF = "MF", a.MG = "MG", a.MH = "MH", a.MK = "MK", a.ML = "ML", a.MM = "MM", a.MN = "MN", a.MO = "MO", a.MP = "MP", a.MQ = "MQ", a.MR = "MR", a.MS = "MS", a.MT = "MT", a.MU = "MU", a.MV = "MV", a.MW = "MW", a.MX = "MX", a.MY = "MY", a.MZ = "MZ", a.NA = "NA", a.NC = "NC", a.NE = "NE", a.NF = "NF", a.NG = "NG", a.NI = "NI", a.NL = "NL", a.NO = "NO", a.NP = "NP", a.NR = "NR", a.NU = "NU", a.NZ = "NZ", a.OM = "OM", a.PA = "PA", a.PE = "PE", a.PF = "PF", a.PG = "PG", a.PH = "PH", a.PK = "PK", a.PL = "PL", a.PM = "PM", a.PN = "PN", a.PR = "PR", a.PS = "PS", a.PT = "PT", a.PW = "PW", a.PY = "PY", a.QA = "QA", a.RE = "RE", a.RO = "RO", a.RS = "RS", a.RU = "RU", a.RW = "RW", a.SA = "SA", a.SB = "SB", a.SC = "SC", a.SD = "SD", a.SE = "SE", a.SG = "SG", a.SH = "SH", a.SI = "SI", a.SJ = "SJ", a.SK = "SK", a.SL = "SL", a.SM = "SM", a.SN = "SN", a.SO = "SO", a.SR = "SR", a.SS = "SS", a.ST = "ST", a.SV = "SV", a.SX = "SX", a.SY = "SY", a.SZ = "SZ", a.TC = "TC", a.TD = "TD", a.TF = "TF", a.TG = "TG", a.TH = "TH", a.TJ = "TJ", a.TK = "TK", a.TL = "TL", a.TM = "TM", a.TN = "TN", a.TO = "TO", a.TR = "TR", a.TT = "TT", a.TV = "TV", a.TW = "TW", a.TZ = "TZ", a.UA = "UA", a.UG = "UG", a.UM = "UM", a.US = "US", a.UY = "UY", a.UZ = "UZ", a.VA = "VA", a.VC = "VC", a.VE = "VE", a.VG = "VG", a.VI = "VI", a.VN = "VN", a.VU = "VU", a.WF = "WF", a.WS = "WS", a.YE = "YE", a.YT = "YT", a.ZA = "ZA", a.ZM = "ZM", a.ZW = "ZW", a.XK = "XK", a.AC = "AC", a.AN = "AN", a.DG = "DG", a.EL = "EL", a.IC = "IC", a.MI = "MI", a.TP = "TP", a.WK = "WK";
            let i = {
                NON_STANDARD_CODES: new Set(["AC", "AN", "DG", "EL", "IC", "MI", "TP", "WK", "XK"]),
                ALL: new Set(["AC", "AD", "AE", "AF", "AG", "AI", "AL", "AM", "AN", "AO", "AQ", "AR", "AS", "AT", "AU", "AW", "AX", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BL", "BM", "BN", "BO", "BQ", "BR", "BS", "BT", "BV", "BW", "BY", "BZ", "CA", "CC", "CD", "CF", "CG", "CH", "CI", "CK", "CL", "CM", "CN", "CO", "CR", "CU", "CV", "CW", "CX", "CY", "CZ", "DE", "DG", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "EH", "EL", "ER", "ES", "ET", "FI", "FJ", "FK", "FM", "FO", "FR", "GA", "GB", "GD", "GE", "GF", "GG", "GH", "GI", "GL", "GM", "GN", "GP", "GQ", "GR", "GS", "GT", "GU", "GW", "GY", "HK", "HM", "HN", "HR", "HT", "HU", "IC", "ID", "IE", "IL", "IM", "IN", "IO", "IQ", "IR", "IS", "IT", "JE", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KP", "KR", "KW", "KY", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MF", "MG", "MH", "MI", "MK", "ML", "MM", "MN", "MO", "MP", "MQ", "MR", "MS", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NC", "NE", "NF", "NG", "NI", "NL", "NO", "NP", "NR", "NU", "NZ", "OM", "PA", "PE", "PF", "PG", "PH", "PK", "PL", "PM", "PN", "PR", "PS", "PT", "PW", "PY", "QA", "RE", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SD", "SE", "SG", "SH", "SI", "SJ", "SK", "SL", "SM", "SN", "SO", "SR", "SS", "ST", "SV", "SX", "SY", "SZ", "TC", "TD", "TF", "TG", "TH", "TJ", "TK", "TL", "TM", "TN", "TO", "TP", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "UM", "US", "UY", "UZ", "VA", "VC", "VE", "VG", "VI", "VN", "VU", "WF", "WK", "WS", "XK", "YE", "YT", "ZA", "ZM", "ZW"]),
                US_TERRITORIES: new Set(["AS", "GU", "MP", "PR", "VI"]),
                FRANCE_AND_FRENCH_REGION: new Set(["FR", "GF", "GP", "MQ", "NC", "PF", "PM", "RE", "TF", "WF", "YT"]),
                VAT_EU_COUNTRIES: new Set(["AT", "BE", "BG", "CY", "CZ", "DE", "DK", "EE", "EL", "ES", "FI", "FR", "GR", "HR", "HU", "IE", "IT", "LT", "LU", "LV", "MT", "NL", "PL", "PT", "RO", "SE", "SI", "SK"]),
                VAT_COUNTRIES: new Set(["AT", "AU", "BE", "BG", "CH", "CY", "CZ", "DE", "DK", "EE", "EL", "ES", "FI", "FR", "GR", "HR", "HU", "IE", "IT", "LT", "LU", "LV", "MT", "NL", "NO", "PL", "PT", "RO", "SE", "SI", "SK"]),
                TAX_DOMESTIC: new Set(["CA", "GB", "US"]),
                EU_COUNTRIES: new Set(["AD", "AL", "AT", "AX", "BA", "BE", "BG", "BY", "CH", "CY", "CZ", "DE", "DK", "EE", "EL", "ES", "FI", "FO", "FR", "GG", "GR", "HR", "HU", "IC", "IE", "IM", "IT", "JE", "LI", "LT", "LU", "LV", "MC", "MD", "MK", "MT", "NL", "NO", "PL", "PT", "RO", "RU", "SE", "SI", "SJ", "SK", "SM", "UA", "VA"]),
                EEA_COUNTRIES: new Set(["AT", "BE", "BG", "CY", "CZ", "DE", "DK", "EE", "EL", "ES", "FI", "FR", "GR", "HR", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MT", "NL", "NO", "PL", "PT", "RO", "SE", "SI", "SK"]),
                WITHOUT_POSTAL_CODES: new Set(["AE", "AG", "AN", "AO", "AW", "BF", "BI", "BJ", "BM", "BO", "BQ", "BS", "BW", "BZ", "CD", "CF", "CG", "CI", "CK", "CM", "CW", "DJ", "DM", "ER", "FJ", "GA", "GD", "GH", "GM", "GQ", "GY", "HK", "HM", "IE", "JM", "KE", "KI", "KM", "KN", "KP", "LY", "ML", "MO", "MR", "MW", "NA", "NR", "NU", "QA", "RW", "SB", "SC", "SL", "SR", "ST", "SX", "SY", "TD", "TF", "TG", "TK", "TL", "TO", "TV", "UG", "VU", "YE", "ZA", "ZW"]),
                TAX_EXCLUSIVE: new Set(["CA", "US"]),
                TAX_ADDRESS_REQUIRE_POSTAL_CODE: new Set(["CA", "US"])
            }
        },
        989901: function(e, t, n) {
            "use strict";
            var r, a;
            n.r(t), n.d(t, {
                ThreadSearchTagSetting: function() {
                    return r
                }
            }), (a = r || (r = {})).MATCH_ALL = "match_all", a.MATCH_SOME = "match_some"
        },
        450205: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n("666038");
            class a extends r.default {
                toString() {
                    return this.name
                }
                constructor(e) {
                    super(), this.id = e.id, this.type = e.type, this.name = e.name, this.revoked = e.revoked || !1, this.integrations = e.integrations || [], this.visibility = e.visibility || 0, this.friendSync = e.friend_sync || !1, this.showActivity = e.show_activity || !1, this.verified = e.verified || !1, this.accessToken = e.access_token || null, this.twoWayLink = e.two_way_link || !1, this.metadata = e.metadata || null, this.metadataVisibility = e.metadata_visibility || 0
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
            var r = n("498225"),
                a = n("913144");
            let i = {},
                l = null,
                s = [],
                o = !1,
                u = null,
                d = null;

            function c() {
                o = !0
            }
            class E extends r.default.Store {
                getAppliedGuildBoostsForGuild(e) {
                    return null != i[e] ? i[e].subscriptions : null
                }
                getLastFetchedAtForGuild(e) {
                    return null != i[e] ? i[e].lastFetchedAt : null
                }
                getCurrentUserAppliedBoosts() {
                    return s
                }
                getAppliedGuildBoost(e) {
                    return s.find(t => t.id === e)
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
                    return l
                }
            }
            E.displayName = "AppliedGuildBoostStore";
            var _ = new E(a.default, {
                GUILD_APPLIED_BOOSTS_FETCH_SUCCESS: function(e) {
                    let {
                        guildId: t,
                        appliedBoosts: n
                    } = e;
                    i[t] = {
                        subscriptions: n,
                        lastFetchedAt: Date.now()
                    }
                },
                USER_APPLIED_BOOSTS_FETCH_SUCCESS: function(e) {
                    let {
                        appliedGuildBoosts: t
                    } = e;
                    s = t
                },
                APPLIED_BOOSTS_COOLDOWN_FETCH_SUCCESS: function(e) {
                    let {
                        endsAt: t
                    } = e;
                    l = t
                },
                GUILD_UNAPPLY_BOOST_START: c,
                GUILD_APPLY_BOOST_START: c,
                GUILD_APPLY_BOOST_SUCCESS: function(e) {
                    let {
                        appliedGuildBoost: t
                    } = e, n = new Set(t.map(e => e.id));
                    s = [...t, ...s.filter(e => !n.has(e.id))], u = null, o = !1
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
                    s = s.filter(e => e.id !== t), o = !1
                },
                GUILD_UNAPPLY_BOOST_FAIL: function(e) {
                    let {
                        error: t
                    } = e;
                    o = !1, d = t
                }
            })
        },
        47319: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            });
            var r = n("498225"),
                a = n("913144"),
                i = n("619340"),
                l = n("376556"),
                s = n("450205"),
                o = n("813006"),
                u = n("49111");
            let d = new Set([u.PlatformTypes.CONTACTS]),
                c = !0,
                E = [],
                _ = [],
                f = {},
                S = {},
                I = e => {
                    E = e.filter(e => !d.has(e.type) && l.default.isSupported(e.type)), _ = e.filter(e => d.has(e.type)), c = !1
                };
            class T extends r.default.Store {
                isJoining(e) {
                    return f[e] || !1
                }
                isFetching() {
                    return c
                }
                getAccounts() {
                    return E
                }
                getLocalAccounts() {
                    return _
                }
                getAccount(e, t) {
                    return E.find(n => (null == e || n.id === e) && n.type === t)
                }
                getLocalAccount(e) {
                    return _.find(t => t.type === e)
                }
                isSuggestedAccountType(e) {
                    return S[e] || !1
                }
            }
            T.displayName = "ConnectedAccountsStore";
            var C = new T(a.default, {
                CONNECTION_OPEN: function(e) {
                    let t = e.connectedAccounts.map(e => new s.default(e));
                    I(t)
                },
                USER_CONNECTIONS_UPDATE: function(e) {
                    if (e.local && null != e.accounts) {
                        let t = e.accounts.map(e => new s.default({
                            ...e,
                            integrations: e.integrations.map(e => ({
                                ...e,
                                guild: new o.default(e.guild)
                            }))
                        }));
                        I(t)
                    } else i.default.fetch()
                },
                USER_CONNECTIONS_INTEGRATION_JOINING: function(e) {
                    f[e.integrationId] = e.joining
                },
                USER_CONNECTION_UPDATE: function(e) {
                    let {
                        platformType: t,
                        id: n,
                        revoked: r,
                        accessToken: a
                    } = e, i = E.find(e => e.id === n && e.type === t);
                    if (null == i) return !1;
                    null != r && (i.revoked = r), null != a && (i.accessToken = a)
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
            var r = n("498225"),
                a = n("913144"),
                i = n("9294"),
                l = n("49111");
            let s = {},
                o = {},
                u = {};

            function d(e, t) {
                var n;
                e = null != e ? e : "";
                let r = (0, i.parseExtraDataFromInviteKey)(e),
                    a = s[e],
                    o = null != a ? {
                        state: l.InviteStates.RESOLVING,
                        ...a
                    } : {
                        state: l.InviteStates.RESOLVING,
                        code: r.baseCode
                    };
                t(o), s = {
                    ...s,
                    [e]: o
                }, (null === (n = o.guild) || void 0 === n ? void 0 : n.id) != null && (u = {
                    ...u,
                    [o.guild.id]: e
                })
            }

            function c(e) {
                return d(e.code, t => {
                    t.state = "banned" in e && e.banned ? l.InviteStates.BANNED : l.InviteStates.EXPIRED
                })
            }
            class E extends r.default.Store {
                getInvite(e) {
                    return s[e]
                }
                getInviteError(e) {
                    return o[e]
                }
                getInvites() {
                    return s
                }
                getInviteKeyForGuildId(e) {
                    return u[e]
                }
            }
            E.displayName = "InviteStore";
            var _ = new E(a.default, {
                INVITE_RESOLVE: function(e) {
                    let {
                        code: t
                    } = e, n = (0, i.parseExtraDataFromInviteKey)(t);
                    s = {
                        ...s,
                        [t]: {
                            code: n.baseCode,
                            state: l.InviteStates.RESOLVING
                        }
                    }
                },
                INVITE_RESOLVE_SUCCESS: function(e) {
                    return d(e.code, t => {
                        var n, r;
                        t.state = l.InviteStates.RESOLVED, t.guild = e.invite.guild, t.channel = e.invite.channel, t.inviter = e.invite.inviter, t.approximate_member_count = null !== (n = e.invite.approximate_member_count) && void 0 !== n ? n : null, t.approximate_presence_count = null !== (r = e.invite.approximate_presence_count) && void 0 !== r ? r : null, t.target_type = e.invite.target_type, t.target_user = e.invite.target_user, t.target_application = e.invite.target_application, t.expires_at = e.invite.expires_at, t.stage_instance = e.invite.stage_instance, t.friends_count = e.invite.friends_count, t.is_contact = e.invite.is_contact, t.guild_scheduled_event = e.invite.guild_scheduled_event, t.type = e.invite.type, t.flags = e.invite.flags
                    })
                },
                INVITE_RESOLVE_FAILURE: c,
                INSTANT_INVITE_REVOKE_SUCCESS: c,
                FRIEND_INVITE_CREATE_SUCCESS: function(e) {
                    return d(e.invite.code, t => {
                        t.state = l.InviteStates.RESOLVED, t.inviter = e.invite.inviter
                    })
                },
                FRIEND_INVITE_REVOKE_SUCCESS: function(e) {
                    e.invites.forEach(e => d(e.code, e => {
                        e.state = l.InviteStates.EXPIRED
                    }))
                },
                INSTANT_INVITE_CREATE_SUCCESS: function(e) {
                    return d(e.invite.code, t => {
                        var n, r;
                        t.state = l.InviteStates.RESOLVED, t.guild = e.invite.guild, t.channel = e.invite.channel, t.inviter = e.invite.inviter, t.approximate_member_count = null !== (n = e.invite.approximate_member_count) && void 0 !== n ? n : null, t.approximate_presence_count = null !== (r = e.invite.approximate_presence_count) && void 0 !== r ? r : null, t.target_type = e.invite.target_type, t.target_user = e.invite.target_user, t.target_application = e.invite.target_application, t.stage_instance = e.invite.stage_instance, t.guild_scheduled_event = e.invite.guild_scheduled_event, t.type = e.invite.type
                    })
                },
                INVITE_ACCEPT: function(e) {
                    return d(e.code, e => {
                        e.state = l.InviteStates.ACCEPTING
                    })
                },
                INVITE_ACCEPT_SUCCESS: function(e) {
                    return d(e.code, t => {
                        t.state = l.InviteStates.ACCEPTED, t.guild = e.invite.guild, t.new_member = e.invite.new_member, t.channel = {
                            ...t.channel,
                            ...e.invite.channel
                        }
                    })
                },
                INVITE_ACCEPT_FAILURE: function(e) {
                    return o[e.code] = e.error, d(e.code, e => {
                        e.state = l.InviteStates.ERROR
                    })
                },
                INVITE_APP_OPENING: function(e) {
                    return d(e.code, e => {
                        e.state = l.InviteStates.APP_OPENING
                    })
                },
                INVITE_APP_OPENED: function(e) {
                    return d(e.code, e => {
                        e.state = l.InviteStates.APP_OPENED
                    })
                },
                INVITE_APP_NOT_OPENED: function(e) {
                    return d(e.code, e => {
                        e.state = l.InviteStates.APP_NOT_OPENED
                    })
                }
            })
        },
        340412: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var r = n("498225"),
                a = n("913144"),
                i = n("697218"),
                l = n("719923"),
                s = n("521012");
            let o = {
                    userOffersLastFetchedAtDate: void 0,
                    userTrialOffers: {},
                    userDiscounts: {}
                },
                u = o;

            function d() {
                u.userTrialOffers = {}, u.userDiscounts = {}, u.userOffersLastFetchedAtDate = void 0
            }
            let c = () => !0;

            function E() {
                let e = s.default.getPremiumTypeSubscription();
                return null != e && (u.userTrialOffers = {}, u.userDiscounts = {}, !0)
            }
            class _ extends r.default.PersistedStore {
                initialize(e) {
                    u = null != e ? e : o, this.waitFor(i.default), this.syncWith([i.default], c), this.syncWith([s.default], E)
                }
                getUserTrialOffer(e) {
                    if (null !== e) return u.userTrialOffers[e]
                }
                getUserDiscount(e) {
                    if (null !== e) return u.userDiscounts[e]
                }
                getAnyOfUserTrialOfferId(e) {
                    for (let t of e)
                        if (null != u.userTrialOffers[t]) return t;
                    return null
                }
                hasFetchedOffer() {
                    return null != u.userOffersLastFetchedAtDate
                }
                shouldFetchOffer() {
                    let e = u.userOffersLastFetchedAtDate;
                    return null == e || Date.now() - 1728e5 > e
                }
                getAcknowledgedOffers(e) {
                    let t = i.default.getCurrentUser();
                    return (0, l.isPremium)(t) ? [] : Object.values(u.userTrialOffers).filter(t => e.includes(t.trial_id) && null != t.expires_at)
                }
                getUnacknowledgedDiscountOffers() {
                    let e = i.default.getCurrentUser();
                    return (0, l.isPremium)(e) ? [] : Object.values(u.userDiscounts).filter(e => null == e.expires_at)
                }
                getUnacknowledgedOffers(e) {
                    let t = i.default.getCurrentUser();
                    return (0, l.isPremium)(t) ? [] : Object.values(u.userTrialOffers).filter(t => e.includes(t.trial_id) && null == t.expires_at)
                }
                hasAnyUnexpiredOffer() {
                    return Object.values(u.userTrialOffers).some(e => null == e.expires_at || Date.parse(e.expires_at) > Date.now())
                }
                getState() {
                    return u
                }
                forceReset() {
                    d()
                }
            }
            _.displayName = "UserOfferStore", _.persistKey = "UserOfferStore";
            var f = new _(a.default, {
                BILLING_USER_TRIAL_OFFER_FETCH_SUCCESS: function(e) {
                    let {
                        userTrialOffer: t
                    } = e;
                    null != t ? u.userTrialOffers[t.trial_id] = t : d(), u.userOffersLastFetchedAtDate = Date.now()
                },
                BILLING_USER_TRIAL_OFFER_ACKNOWLEDGED_SUCCESS: function(e) {
                    let {
                        userTrialOffer: t
                    } = e;
                    u.userTrialOffers[t.trial_id] = t, u.userOffersLastFetchedAtDate = Date.now()
                },
                BILLING_USER_OFFER_FETCH_SUCCESS: function(e) {
                    let {
                        userTrialOffer: t,
                        userDiscount: n
                    } = e;
                    null == t && null == n && d(), null != t ? (u.userTrialOffers[t.trial_id] = t, u.userDiscounts = {}) : null != n && (u.userDiscounts[n.discount_id] = n, u.userTrialOffers = {}), u.userOffersLastFetchedAtDate = Date.now()
                },
                BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS: function(e) {
                    let {
                        userTrialOffer: t,
                        userDiscount: n
                    } = e;
                    (null != t || null != n) && (null != t && (u.userTrialOffers[t.trial_id] = t), null != n && (u.userDiscounts[n.discount_id] = n), u.userOffersLastFetchedAtDate = Date.now())
                },
                LOGOUT: d
            })
        },
        971427: function(e, t, n) {
            "use strict";
            let r;
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var a = n("498225"),
                i = n("913144");
            let l = {
                hasAcceptedStoreTerms: !1,
                hasAcceptedEulaIds: []
            };
            class s extends a.default.PersistedStore {
                initialize(e) {
                    r = null != e ? e : l
                }
                getState() {
                    return r
                }
                get hasAcceptedStoreTerms() {
                    return r.hasAcceptedStoreTerms
                }
                hasAcceptedEULA(e) {
                    return r.hasAcceptedEulaIds.includes(e)
                }
            }
            s.displayName = "ApplicationStoreUserSettingsStore", s.persistKey = "ApplicationStoreUserSettingsStore", s.migrations = [e => null == e.hasAcceptedEulaIds ? {
                ...e,
                hasAcceptedEulaIds: []
            } : e];
            var o = new s(i.default, {
                APPLICATION_STORE_ACCEPT_STORE_TERMS: function() {
                    r.hasAcceptedStoreTerms = !0
                },
                APPLICATION_STORE_ACCEPT_EULA: function(e) {
                    let {
                        eulaId: t
                    } = e;
                    if (r.hasAcceptedEulaIds.includes(t)) return !1;
                    r.hasAcceptedEulaIds.push(t)
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
            var r = n("920040"),
                a = n("773670"),
                i = n("575482"),
                l = n.n(i),
                s = n("77078"),
                o = n("760607"),
                u = n("13681");

            function d(e) {
                let {
                    children: t,
                    size: n = 16,
                    className: i,
                    flowerStarClassName: d,
                    ...c
                } = e, E = a.Children.only(t), _ = (0, s.useRedesignIconContext)().enabled;
                return (0, r.jsxs)("div", {
                    className: l(u.flowerStarContainer, i),
                    style: {
                        width: n,
                        height: n
                    },
                    children: [(0, r.jsx)(o.default, {
                        ...c,
                        className: l(d, u.flowerStar)
                    }), (0, r.jsx)("div", {
                        className: l(u.childContainer, {
                            [u.redesignIconChildContainer]: _
                        }),
                        children: E
                    })]
                })
            }
        },
        791106: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Gradients: function() {
                    return s
                },
                GradientCssUrls: function() {
                    return o
                },
                default: function() {
                    return I
                }
            });
            var r = n("920040"),
                a = n("773670"),
                i = n("462567"),
                l = n("912557");
            let s = Object.freeze({
                    PREMIUM_TIER_0: (0, i.v4)(),
                    PREMIUM_TIER_1: (0, i.v4)(),
                    PREMIUM_TIER_2: (0, i.v4)(),
                    PREMIUM_GUILD: (0, i.v4)(),
                    PREMIUM_TRIAL_TUTORIAL: (0, i.v4)(),
                    PREMIUM_GUILD_BADGE_V2_BACKGROUND: (0, i.v4)()
                }),
                o = {
                    PREMIUM_TIER_0: "url(#".concat(s.PREMIUM_TIER_0, ")"),
                    PREMIUM_TIER_1: "url(#".concat(s.PREMIUM_TIER_1, ")"),
                    PREMIUM_TIER_2: "url(#".concat(s.PREMIUM_TIER_2, ")"),
                    PREMIUM_GUILD: "url(#".concat(s.PREMIUM_GUILD, ")"),
                    PREMIUM_TRIAL_TUTORIAL: "url(#".concat(s.PREMIUM_TRIAL_TUTORIAL, ")"),
                    PREMIUM_GUILD_BADGE_V2_BACKGROUND: "url(#".concat(s.PREMIUM_GUILD_BADGE_V2_BACKGROUND, ")")
                },
                u = () => (0, r.jsxs)("linearGradient", {
                    id: s.PREMIUM_TIER_0,
                    children: [(0, r.jsx)("stop", {
                        offset: ".1762",
                        stopColor: l.default.unsafe_rawColors.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS.css
                    }), (0, r.jsx)("stop", {
                        offset: "0.5351",
                        stopColor: l.default.unsafe_rawColors.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS_2.css
                    }), (0, r.jsx)("stop", {
                        offset: "1",
                        stopColor: l.default.unsafe_rawColors.PREMIUM_TIER_0_PURPLE_FOR_GRADIENTS.css
                    })]
                }),
                d = () => (0, r.jsxs)("linearGradient", {
                    id: s.PREMIUM_TIER_1,
                    children: [(0, r.jsx)("stop", {
                        stopColor: l.default.unsafe_rawColors.PREMIUM_TIER_1_BLUE.css
                    }), (0, r.jsx)("stop", {
                        offset: "1",
                        stopColor: l.default.unsafe_rawColors.PREMIUM_TIER_1_PURPLE.css
                    })]
                }),
                c = () => (0, r.jsxs)("linearGradient", {
                    id: s.PREMIUM_TIER_2,
                    children: [(0, r.jsx)("stop", {
                        stopColor: l.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS.css
                    }), (0, r.jsx)("stop", {
                        offset: "0.502368",
                        stopColor: l.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS_2.css
                    }), (0, r.jsx)("stop", {
                        offset: "1",
                        stopColor: l.default.unsafe_rawColors.PREMIUM_TIER_2_PINK_FOR_GRADIENTS.css
                    })]
                }),
                E = () => (0, r.jsxs)("linearGradient", {
                    id: s.PREMIUM_GUILD,
                    children: [(0, r.jsx)("stop", {
                        stopColor: l.default.unsafe_rawColors.GUILD_BOOSTING_BLUE.css
                    }), (0, r.jsx)("stop", {
                        offset: "1",
                        stopColor: l.default.unsafe_rawColors.GUILD_BOOSTING_PURPLE.css
                    })]
                }),
                _ = () => (0, r.jsxs)("linearGradient", {
                    id: s.PREMIUM_TRIAL_TUTORIAL,
                    children: [(0, r.jsx)("stop", {
                        stopColor: l.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE.css
                    }), (0, r.jsx)("stop", {
                        offset: "1",
                        stopColor: l.default.unsafe_rawColors.PREMIUM_TIER_2_PINK.css
                    })]
                }),
                f = () => (0, r.jsxs)("linearGradient", {
                    id: s.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
                    gradientTransform: "rotate(45)",
                    children: [(0, r.jsx)("stop", {
                        offset: "0",
                        stopColor: l.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE.css
                    }), (0, r.jsx)("stop", {
                        offset: "1",
                        stopColor: l.default.unsafe_rawColors.PREMIUM_TIER_2_PINK.css
                    })]
                }),
                S = a.memo(function() {
                    return (0, r.jsxs)("svg", {
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
                        children: [u(), d(), c(), E(), _(), f()]
                    })
                }, () => !0);
            var I = S
        },
        712218: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                IconTypes: function() {
                    return a
                },
                IconSizes: function() {
                    return d
                },
                default: function() {
                    return E
                }
            });
            var r, a, i = n("920040"),
                l = n("773670"),
                s = n("575482"),
                o = n.n(s),
                u = n("65080");
            (r = a || (a = {})).UNKNOWN = "unknown", r.VISA = "visa", r.DISCOVER = "discover", r.MASTERCARD = "mastercard", r.AMEX = "amex", r.PAYPAL = "paypal", r.PAYMENT_REQUEST = "paymentRequest", r.G_PAY = "gPay", r.DINERS = "diners", r.JCB = "jcb", r.UNIONPAY = "unionpay", r.SOFORT = "sofort", r.PRZELEWY24 = "przelewy24", r.GIROPAY = "giropay", r.PAYSAFECARD = "paysafecard", r.GCASH = "gcash", r.GRABPAY = "grabpay", r.MOMO_WALLET = "momo_wallet", r.VENMO = "venmo", r.KAKAOPAY = "kakaopay", r.GOPAY_WALLET = "gopay_wallet", r.BANCONTACT = "bancontact", r.EPS = "eps", r.IDEAL = "ideal", r.CASH_APP = "cash_app";
            let d = {
                SMALL: u.cardIconSmall,
                MEDIUM: u.cardIconMedium,
                LARGE: u.cardIconLarge,
                XLARGE: u.cardIconXLarge
            };
            class c extends l.PureComponent {
                static getType(e) {
                    if (null == e) return a.UNKNOWN;
                    let t = e.replace(/[^a-z0-9_]/gi, "").toUpperCase();
                    return a[t] || a.UNKNOWN
                }
                render() {
                    let {
                        flipped: e,
                        type: t,
                        className: n,
                        size: r
                    } = this.props;
                    return (0, i.jsx)("div", {
                        className: o(r, u[t], n, {
                            [u.flipped]: e
                        }),
                        children: t
                    })
                }
            }
            c.Types = a, c.Sizes = d, c.defaultProps = {
                size: d.SMALL,
                flipped: !1
            };
            var E = c
        },
        467831: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PremiumPaymentAnimationTier0: function() {
                    return p
                },
                PremiumPaymentAnimationTier1: function() {
                    return N
                },
                PremiumPaymentAnimationTier2: function() {
                    return m
                },
                PremiumPaymentGuildAnimation: function() {
                    return v
                }
            });
            var r, a, i, l, s, o, u, d, c = n("920040"),
                E = n("773670"),
                _ = n("575482"),
                f = n.n(_),
                S = n("623829"),
                I = n("28926"),
                T = n("273108"),
                C = n("115994");
            (r = s || (s = {})).NORMAL = "normal", r.SPEED_START = "speed_start", r.SPEED_LOOP = "speed_loop", r.FINISH = "finish", r.IDLE = "idle";
            let A = {
                [s.NORMAL]: {
                    BEG: 0,
                    END: 600,
                    shouldForcePlayAfter: !0
                },
                [s.SPEED_START]: {
                    BEG: 601,
                    END: 636
                },
                [s.SPEED_LOOP]: {
                    BEG: 637,
                    END: 668
                },
                [s.FINISH]: {
                    BEG: 669,
                    END: 870
                },
                [s.IDLE]: {
                    BEG: 871,
                    END: 878
                }
            };
            class p extends E.PureComponent {
                static getNextScene(e) {
                    switch (e) {
                        case p.Scenes.SPEED_START:
                            return p.Scenes.SPEED_LOOP;
                        case p.Scenes.FINISH:
                            return p.Scenes.IDLE;
                        default:
                            return e
                    }
                }
                importDefault() {
                    return n.el("391009").then(n.t.bind(n, "391009", 19)).then(e => {
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
                        onSceneComplete: r,
                        pause: a,
                        pauseWhileUnfocused: i
                    } = this.props;
                    return (0, c.jsx)(T.default, {
                        className: f(C.sequencedAnimation, e),
                        importData: this.importDefault,
                        nextScene: a ? s.IDLE : t,
                        sceneSegments: A,
                        onScenePlay: n,
                        onSceneComplete: r,
                        pauseWhileUnfocused: i,
                        pause: a
                    })
                }
            }
            p.Scenes = s, (a = o || (o = {})).NORMAL = "normal", a.SPEED_START = "speed_start", a.SPEED_LOOP = "speed_loop", a.FINISH = "finish", a.IDLE = "idle";
            let R = {
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
            class N extends E.PureComponent {
                static getNextScene(e) {
                    switch (e) {
                        case N.Scenes.SPEED_START:
                            return N.Scenes.SPEED_LOOP;
                        case N.Scenes.FINISH:
                            return N.Scenes.IDLE;
                        default:
                            return e
                    }
                }
                importDefault() {
                    return n.el("163485").then(n.t.bind(n, "163485", 19)).then(e => {
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
                        onSceneComplete: r,
                        pause: a,
                        pauseWhileUnfocused: i
                    } = this.props;
                    return (0, c.jsx)(T.default, {
                        className: f(C.sequencedAnimation, e),
                        importData: this.importDefault,
                        nextScene: a ? o.IDLE : t,
                        sceneSegments: R,
                        onScenePlay: n,
                        onSceneComplete: r,
                        pauseWhileUnfocused: i,
                        pause: a
                    })
                }
            }
            N.Scenes = o, (i = u || (u = {})).IDLE_ENTRY = "idle_entry", i.IDLE_LOOP = "idle_loop", i.BOOST_START = "boost_start", i.BOOST_LOOP = "boost_loop", i.BOOST_END = "boost_end", i.VICTORY = "victory", i.ERROR = "error";
            let L = {
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
            class O extends E.PureComponent {
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
                        className: C.panningAnimation,
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
            let h = Object.freeze({
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
            class m extends E.PureComponent {
                static getNextScene(e) {
                    switch (e) {
                        case m.Scenes.IDLE_ENTRY:
                            return m.Scenes.IDLE_LOOP;
                        case m.Scenes.BOOST_START:
                            return m.Scenes.BOOST_LOOP;
                        case m.Scenes.BOOST_END:
                            return m.Scenes.VICTORY;
                        case m.Scenes.VICTORY:
                            return m.Scenes.IDLE_ENTRY;
                        case m.Scenes.ERROR:
                            return m.Scenes.IDLE_LOOP;
                        default:
                            return e
                    }
                }
                componentWillUnmount() {
                    this.didUnmount = !0
                }
                importData() {
                    return n.el("606935").then(n.t.bind(n, "606935", 19)).then(e => {
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
                    this.animateEntry(h.IDLE_ENTRY)
                }
                animateError() {
                    this.animateEntry(h.ERROR)
                }
                animateIdleLoop() {
                    this.animateIdleLoopBackground(), this.animateIdleLoopForeground()
                }
                animateBoostStart() {
                    I.default.parallel([I.default.timing(this.foregroundAnimation.y, {
                        toValue: h.BOOST_START.toValue,
                        duration: h.BOOST_START.duration,
                        delay: h.BOOST_START.delay
                    }), I.default.timing(this.backgroundAnimation.y, {
                        toValue: h.BOOST_START.toValue,
                        duration: 1.2 * h.BOOST_START.duration,
                        delay: h.BOOST_START.delay
                    })]).start()
                }
                render() {
                    let {
                        className: e,
                        nextScene: t,
                        pause: n,
                        onSceneComplete: r
                    } = this.props;
                    return (0, c.jsxs)("div", {
                        className: f(C.tier2Animation, e),
                        children: [n ? (0, c.jsx)(c.Fragment, {
                            children: (0, c.jsxs)("div", {
                                className: C.panningAnimation,
                                children: [(0, c.jsx)("div", {
                                    className: C.tier2Background
                                }), (0, c.jsx)("div", {
                                    className: C.tier2Foreground
                                })]
                            })
                        }) : (0, c.jsxs)(c.Fragment, {
                            children: [(0, c.jsx)(O, {
                                className: C.tier2Background,
                                animation: this.backgroundAnimation
                            }), (0, c.jsx)(O, {
                                className: C.tier2Foreground,
                                animation: this.foregroundAnimation
                            })]
                        }), (0, c.jsx)(T.default, {
                            className: C.sequencedAnimation,
                            importData: this.importData,
                            nextScene: n ? u.IDLE_LOOP : t,
                            sceneSegments: L,
                            onScenePlay: this.handleScenePlay,
                            onSceneComplete: r,
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
                            toValue: h.IDLE_LOOP.toValue,
                            duration: 1.2 * h.IDLE_LOOP.duration,
                            easing: I.default.Easing.linear
                        }).start(this.animateIdleLoopBackground))
                    }, this.animateIdleLoopForeground = () => {
                        !this.didUnmount && (this.foregroundAnimation.x.setValue(0), I.default.timing(this.foregroundAnimation.x, {
                            toValue: h.IDLE_LOOP.toValue,
                            duration: h.IDLE_LOOP.duration,
                            easing: h.IDLE_LOOP.easing
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
            m.Scenes = u, (l = d || (d = {})).ENTRY = "entry", l.IDLE = "idle", l.STARS = "stars", l.ERROR = "error", l.SUCCESS = "success";
            let D = {
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
                g = Object.freeze({
                    WHITE: "#ebf0f7",
                    PINK: "#fa6ef6"
                }),
                M = [{
                    left: 29,
                    top: 100,
                    color: g.WHITE
                }, {
                    left: 245,
                    top: 11,
                    color: g.PINK
                }, {
                    left: 393,
                    top: 22,
                    color: g.WHITE
                }, {
                    left: 74,
                    top: 30,
                    color: g.PINK
                }, {
                    left: 188,
                    top: 9,
                    color: g.WHITE
                }, {
                    left: 379,
                    top: 97,
                    color: g.PINK
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

            function U(e) {
                let {
                    animate: t
                } = e, [n, r] = E.useState(0), a = (0, S.useSprings)(M.length, M.map((e, a) => {
                    let i = a > 0 ? P.DELAY_STAGGER * a + Math.random() * (P.DELAY_MAX - P.DELAY_MIN) + P.DELAY_MIN : 0,
                        l = Math.random() * (P.SIZE_MAX - P.SIZE_MIN) + P.SIZE_MIN;
                    return {
                        from: {
                            scale: P.SCALE_INITIAL,
                            rotate: P.ROTATE_INITIAL,
                            top: e.top,
                            left: e.left,
                            width: l,
                            height: l
                        },
                        to: async e => {
                            t ? (await e({
                                scale: P.SCALE_MIDDLE,
                                rotate: P.ROTATE_MIDDLE,
                                delay: i,
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
                            }), a === M.length - 1 && r(n + 1)) : await e({
                                scale: P.SCALE_INITIAL,
                                rotate: P.ROTATE_INITIAL
                            })
                        }
                    }
                }));
                return (0, c.jsx)(c.Fragment, {
                    children: a.map((e, t) => {
                        let n = M[t];
                        return (0, c.jsx)(S.animated.svg, {
                            style: e,
                            className: C.guildStar,
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
            class v extends E.PureComponent {
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
                    return n.el("53302").then(n.t.bind(n, "53302", 19)).then(e => {
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
                        onScenePlay: r,
                        onSceneComplete: a,
                        pauseWhileUnfocused: i
                    } = this.props;
                    return (0, c.jsxs)("div", {
                        className: f(C.guildWrapper, e),
                        children: [(0, c.jsx)(T.default, {
                            className: C.guildBackground,
                            importData: this.importData,
                            nextScene: n ? d.IDLE : t,
                            sceneSegments: D,
                            onScenePlay: r,
                            onSceneComplete: a,
                            pauseWhileUnfocused: i,
                            pause: n
                        }), (0, c.jsx)(U, {
                            animate: !n && t === d.STARS
                        })]
                    })
                }
            }
            v.Scenes = d
        },
        273108: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var r = n("920040"),
                a = n("773670"),
                i = n("575482"),
                l = n.n(i),
                s = n("498225"),
                o = n("206230"),
                u = n("471671"),
                d = n("724063");
            class c extends a.PureComponent {
                async componentDidMount() {
                    let {
                        importData: e,
                        nextScene: t,
                        pauseWhileUnfocused: r,
                        pause: a,
                        isWindowFocused: i,
                        useReducedMotion: l
                    } = this.props, [s, {
                        default: o
                    }] = await Promise.all([e(), n.el("552280").then(n.t.bind(n, "552280", 21))]);
                    null != this.animationRef && (this.animation = o.loadAnimation({
                        container: this.animationRef,
                        renderer: "svg",
                        loop: !0,
                        autoplay: !0,
                        animationData: s
                    }), this.animation.addEventListener("loopComplete", this.handleLoopComplete), this.animation.addEventListener("complete", this.handleComplete), this.playScene(t), (r && !i || a || l) && this.animation.pause())
                }
                componentWillUnmount() {
                    this.isUnmounted = !0, null != this.animation && (this.animation.destroy(), this.animation = void 0)
                }
                componentDidUpdate(e) {
                    var t, n, r;
                    let {
                        nextScene: a,
                        pauseWhileUnfocused: i,
                        pause: l,
                        isWindowFocused: s,
                        useReducedMotion: o
                    } = this.props;
                    a !== this.currentScene && this.shouldForcePlayAfter() && !l && this.playScene(a), null != this.animation && (i && !e.isWindowFocused && s && !o && !0 !== l ? this.animation.play() : (o || i && e.isWindowFocused && !s) && this.animation.pause()), !e.pause && l ? null === (t = this.animation) || void 0 === t || t.pause() : e.pause && !l && !o && (null === (n = this.animation) || void 0 === n || n.play()), e.nextScene !== a && l && (this.playScene(a), null === (r = this.animation) || void 0 === r || r.pause())
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
                        useReducedMotion: r
                    } = this.props, a = n[e], i = n[this.currentScene];
                    if (null != this.animation && (e === this.currentScene || a.BEG !== i.BEG || a.END !== i.END) && this.animation.playSegments([a.BEG, a.END], !0), this.currentScene = e, null != t && t(this.currentScene), r) {
                        var l;
                        null === (l = this.animation) || void 0 === l || l.pause()
                    }
                }
                render() {
                    return (0, r.jsx)("div", {
                        ref: this.handleSetRef,
                        className: l(this.props.className, d.wrapper)
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
            var E = e => {
                let {
                    componentRef: t,
                    ...n
                } = e, a = (0, s.useStateFromStores)([u.default], () => u.default.isFocused()), i = (0, s.useStateFromStores)([o.default], () => o.default.useReducedMotion);
                return (0, r.jsx)(c, {
                    ...n,
                    isWindowFocused: a,
                    useReducedMotion: i,
                    ref: t
                })
            }
        },
        965397: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var r = n("920040"),
                a = n("773670"),
                i = n("575482"),
                l = n.n(i),
                s = n("28926"),
                o = n("77078"),
                u = n("750629");
            let d = {
                friction: 7,
                tension: 60
            };
            class c extends a.Component {
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
                    t.enabled ? this.animateTo(0).start(e) : s.default.stagger(250, [this.animateTo(1.3), this.animateTo(0)]).start(e)
                }
                animateTo(e) {
                    return s.default.spring(this.animation, {
                        ...d,
                        toValue: e
                    })
                }
                getAnimatedStyle() {
                    let {
                        reducedMotion: e
                    } = this.context;
                    return s.default.accelerate({
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
                    return (0, r.jsx)(s.default.div, {
                        className: l(e, u.slider),
                        style: this.getAnimatedStyle(),
                        children: t
                    })
                }
                constructor(...e) {
                    super(...e), this.animation = new s.default.Value(0)
                }
            }
            c.contextType = o.AccessibilityPreferencesContext;
            var E = c
        },
        784917: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var r = n("920040");
            n("773670");
            var a = n("75196");

            function i(e) {
                let {
                    width: t = 6,
                    height: n = 11,
                    color: i = "currentColor",
                    foreground: l,
                    ...s
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, a.default)(s),
                    width: t,
                    height: n,
                    viewBox: "0 0 6 11",
                    children: (0, r.jsx)("path", {
                        fill: i,
                        className: l,
                        d: "M3 0.625244L0 3.62524V7.62524L3 10.6252L6 7.62524V3.62524L3 0.625244ZM5 7.24524L3 9.24524L1 7.24524V4.04524L3 2.04524L5 4.04524V7.24524Z"
                    })
                })
            }
        },
        326880: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var r = n("920040");
            n("773670");
            var a = n("75196");

            function i(e) {
                let {
                    width: t = 6,
                    height: n = 11,
                    color: i = "currentColor",
                    foreground: l,
                    ...s
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, a.default)(s),
                    width: t,
                    height: n,
                    viewBox: "0 0 6 11",
                    children: (0, r.jsxs)("g", {
                        fill: i,
                        fillRule: "evenodd",
                        className: l,
                        children: [(0, r.jsx)("path", {
                            d: "M2 4.42007V6.79007L3 7.79007L4 6.79007V4.42007L3.01 3.42007L2 4.42007Z"
                        }), (0, r.jsx)("path", {
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
                    return i
                }
            });
            var r = n("920040");
            n("773670");
            var a = n("75196");

            function i(e) {
                let {
                    width: t = 6,
                    height: n = 11,
                    color: i = "currentColor",
                    foreground: l,
                    ...s
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, a.default)(s),
                    width: t,
                    height: n,
                    viewBox: "0 0 6 11",
                    children: (0, r.jsxs)("g", {
                        fill: i,
                        fillRule: "evenodd",
                        className: l,
                        children: [(0, r.jsx)("path", {
                            d: "M3 0.625305L0 3.62531V7.62531L3 10.6253L6 7.62531V3.62531L3 0.625305ZM5 7.24531L3 9.24531L1 7.24531V4.04531L3 2.04531L5 4.04531V7.24531Z"
                        }), (0, r.jsx)("path", {
                            d: "M3.76 4.21526L3 3.45526L2 4.45526V5.97526L3.76 4.21526Z"
                        }), (0, r.jsx)("path", {
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
            var r = n("920040");
            n("773670");
            var a = n("784917"),
                i = n("326880"),
                l = n("131777"),
                s = n("49111");

            function o(e) {
                let {
                    tier: t,
                    ...n
                } = e;
                switch (t) {
                    case s.BoostedGuildTiers.NONE:
                    case s.BoostedGuildTiers.TIER_1:
                        return (0, r.jsx)(a.default, {
                            ...n
                        });
                    case s.BoostedGuildTiers.TIER_2:
                        return (0, r.jsx)(i.default, {
                            ...n
                        });
                    case s.BoostedGuildTiers.TIER_3:
                        return (0, r.jsx)(l.default, {
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
                    return S
                }
            });
            var r = n("920040");
            n("773670");
            var a = n("575482"),
                i = n.n(a),
                l = n("384737"),
                s = n("448052"),
                o = n("748802"),
                u = n("260792"),
                d = n("77078"),
                c = n("75196"),
                E = n("246604");
            let _ = {
                    UP: E.directionUp,
                    RIGHT: E.directionRight,
                    DOWN: E.directionDown,
                    LEFT: E.directionLeft
                },
                f = e => {
                    let {
                        direction: t = _.DOWN,
                        width: n = 24,
                        height: a = 24,
                        color: f = "currentColor",
                        transition: S = E.transition,
                        className: I,
                        foreground: T,
                        expanded: C,
                        ...A
                    } = e, {
                        enabled: p
                    } = (0, d.useRedesignIconContext)(), R = t;
                    if (!0 === C ? R = _.DOWN : !1 === C && (R = _.RIGHT), p) {
                        let e = {
                            [_.UP]: u.ChevronSmallUpIcon,
                            [_.DOWN]: l.ChevronSmallDownIcon,
                            [_.LEFT]: s.ChevronSmallLeftIcon,
                            [_.RIGHT]: o.ChevronSmallRightIcon
                        } [R];
                        return (0, r.jsx)(e, {
                            ...A,
                            className: I,
                            width: n,
                            height: a,
                            color: f,
                            colorClass: T
                        })
                    }
                    return (0, r.jsx)("svg", {
                        className: i(I, S, R),
                        width: n,
                        height: a,
                        viewBox: "0 0 24 24",
                        ...(0, c.default)(A),
                        children: (0, r.jsx)("path", {
                            className: T,
                            fill: "none",
                            stroke: f,
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M7 10L12 15 17 10",
                            "aria-hidden": !0
                        })
                    })
                };
            f.Directions = _;
            var S = f
        },
        811151: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var r = n("920040");
            n("773670");
            var a = n("75196");

            function i(e) {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: i = "currentColor",
                    ...l
                } = e;
                return (0, r.jsxs)("svg", {
                    ...(0, a.default)(l),
                    width: t,
                    height: n,
                    viewBox: "0 0 16 16",
                    children: [(0, r.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M8.45329 8.53891L3.26217 13.7844C2.95995 14.0719 2.49772 14.0719 2.21328 13.7844C1.92883 13.497 1.92883 13.0299 2.21328 12.7245L6.88884 7.99999L2.21328 3.27543C1.92883 2.988 1.92883 2.50297 2.21328 2.21555C2.49772 1.92812 2.95995 1.92812 3.26217 2.21555L8.45329 7.47903C8.73774 7.76645 8.73774 8.23352 8.45329 8.53891Z",
                        fill: i
                    }), (0, r.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M14.4533 8.53891L9.26217 13.7844C8.95995 14.0719 8.49772 14.0719 8.21328 13.7844C7.92883 13.497 7.92883 13.0299 8.21328 12.7245L12.8888 7.99999L8.21328 3.27543C7.92883 2.988 7.92883 2.50297 8.21328 2.21555C8.49772 1.92812 8.95995 1.92812 9.26217 2.21555L14.4533 7.47903C14.7377 7.76645 14.7377 8.23352 14.4533 8.53891Z",
                        fill: i
                    })]
                })
            }
        },
        760607: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var r = n("920040");
            n("773670");
            var a = n("75196"),
                i = function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: i = "currentColor",
                        foreground: l,
                        ...s
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, a.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 16 15.2",
                        children: (0, r.jsx)("path", {
                            className: l,
                            fill: i,
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
                    return i
                }
            });
            var r = n("920040");
            n("773670");
            var a = n("75196");

            function i(e) {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: i = "currentColor",
                    foreground: l,
                    ...s
                } = e;
                return (0, r.jsxs)("svg", {
                    ...(0, a.default)(s),
                    width: t,
                    height: n,
                    viewBox: "0 0 8 12",
                    children: [(0, r.jsx)("path", {
                        d: "M4 0L0 4V8L4 12L8 8V4L4 0ZM7 7.59L4 10.59L1 7.59V4.41L4 1.41L7 4.41V7.59Z",
                        fill: i,
                        className: l
                    }), (0, r.jsx)("path", {
                        d: "M2 4.83V7.17L4 9.17L6 7.17V4.83L4 2.83L2 4.83Z",
                        fill: i,
                        className: l
                    })]
                })
            }
        },
        834179: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var r = n("920040");
            n("773670");
            var a = n("469563"),
                i = n("763377"),
                l = n("75196"),
                s = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        foreground: i,
                        ...s
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, l.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, r.jsx)("path", {
                            className: i,
                            fill: a,
                            d: "M12 2C6.486 2 2 6.487 2 12C2 17.515 6.486 22 12 22C17.514 22 22 17.515 22 12C22 6.487 17.514 2 12 2ZM12 18.25C11.31 18.25 10.75 17.691 10.75 17C10.75 16.31 11.31 15.75 12 15.75C12.69 15.75 13.25 16.31 13.25 17C13.25 17.691 12.69 18.25 12 18.25ZM13 13.875V15H11V12H12C13.104 12 14 11.103 14 10C14 8.896 13.104 8 12 8C10.896 8 10 8.896 10 10H8C8 7.795 9.795 6 12 6C14.205 6 16 7.795 16 10C16 11.861 14.723 13.429 13 13.875Z"
                        })
                    })
                }, i.CircleQuestionIcon)
        },
        216422: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var r = n("920040");
            n("773670");
            var a = n("469563"),
                i = n("202909"),
                l = n("75196"),
                s = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        viewBox: i = "0 0 24 24",
                        foreground: s,
                        ...o
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, l.default)(o),
                        width: t,
                        height: n,
                        viewBox: i,
                        children: (0, r.jsx)("path", {
                            className: s,
                            fill: a,
                            d: "M2.98966977,9.35789159 C2.98966977,9.77582472 2.63442946,10.1240466 2.20807287,10.1240466 L1.78171628,10.1240466 C1.35535969,10.1240466 0.999948837,9.77582472 0.999948837,9.35789159 C0.999948837,8.93995846 1.35535969,8.59173658 1.78171628,8.59173658 L2.20807287,8.59173658 C2.63442946,8.59173658 2.98966977,8.93995846 2.98966977,9.35789159 Z M22.2467643,9.14892503 C24.0942527,12.9800344 22.3888264,17.5772989 18.3384388,19.3882867 C14.4302837,21.1297305 9.74036124,19.457998 7.9638186,15.6268886 C7.60857829,14.8607335 7.3954,14.0248673 7.32428372,13.189001 L5.76091938,13.189001 C5.33456279,13.189001 4.97932248,12.840612 4.97932248,12.4226788 C4.97932248,12.0047457 5.33456279,11.6565238 5.76091938,11.6565238 L8.03493488,11.6565238 C8.46129147,11.6565238 8.81653178,11.3083019 8.81653178,10.8903688 C8.81653178,10.4724357 8.46129147,10.1240466 8.03493488,10.1240466 L4.41090388,10.1240466 C3.98454729,10.1240466 3.62913643,9.77582472 3.62913643,9.35789159 C3.62913643,8.93995846 3.98454729,8.59173658 4.41090388,8.59173658 L9.45606667,8.59173658 C9.88242326,8.59173658 10.2376636,8.24334752 10.2376636,7.82541439 C10.2376636,7.40748126 9.88242326,7.05925937 9.45606667,7.05925937 L7.3954,7.05925937 C6.75586512,7.05925937 6.18727597,6.57161499 6.18727597,5.87517123 C6.18727597,5.24827153 6.68474884,4.69091591 7.3954,4.69091591 L15.4250589,4.69091591 C18.267493,4.8303384 20.9676946,6.43235968 22.2467643,9.14892503 Z M13.2662961,8.38056332 C11.0193969,9.3919615 10.0341721,11.9973566 11.065955,14.1998642 C12.097738,16.4023718 14.755645,17.3681317 17.0025442,16.3567335 C19.249614,15.3453354 20.2346682,12.7399402 19.2028853,10.5374326 C18.1711023,8.33492503 15.5131953,7.36916515 13.2662961,8.38056332 Z M16.8462589,9.84548582 L18.2673907,12.2138293 C18.338507,12.3530846 18.338507,12.4227958 18.2673907,12.5620512 L16.8462589,14.9303946 C16.7751426,15.0696499 16.6330806,15.0696499 16.5619643,15.0696499 L13.7906465,15.0696499 C13.6485845,15.0696499 13.5774682,14.9999387 13.5065225,14.9303946 L12.0852202,12.5620512 C12.0142744,12.4227958 12.0142744,12.3530846 12.0852202,12.2138293 L13.5065225,9.84548582 C13.5774682,9.7062305 13.7197008,9.7062305 13.7906465,9.7062305 L16.5619643,9.7062305 C16.7041969,9.63651925 16.7751426,9.7062305 16.8462589,9.84548582 Z"
                        })
                    })
                }, i.NitroWheelIcon)
        },
        151185: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var r = n("920040");
            n("773670");
            var a = n("469563"),
                i = n("424823"),
                l = n("75196"),
                s = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        foreground: i,
                        ...s
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, l.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, r.jsx)("path", {
                            fill: a,
                            className: i,
                            d: "M20 11.1111H12.8889V4H11.1111V11.1111H4V12.8889H11.1111V20H12.8889V12.8889H20V11.1111Z"
                        })
                    })
                }, i.PlusSmallIcon)
        },
        342169: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var r = n("920040");
            n("773670");
            var a = n("469563"),
                i = n("457802"),
                l = n("75196"),
                s = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        foreground: i,
                        ...s
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, l.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 16 16",
                        children: (0, r.jsx)("path", {
                            fill: a,
                            className: i,
                            d: "M2.66663 7.40747H7.40737H8.59255H8.66663H13.3333V8.59266H8.59255H7.40737H2.66663V7.40747Z"
                        })
                    })
                }, i.MinusIcon)
        },
        486952: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var r = n("920040");
            n("773670");
            var a = n("469563"),
                i = n("276825"),
                l = n("75196"),
                s = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: a = "currentColor",
                        ...i
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, l.default)(i),
                        width: t,
                        height: n,
                        viewBox: "0 0 16 15.2",
                        children: (0, r.jsx)("path", {
                            d: "M7.4,11.17,4,8.62,5,7.26l2,1.53L10.64,4l1.36,1Z",
                            fill: a
                        })
                    })
                }, i.CheckmarkSmallIcon)
        },
        829536: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                perceptualToAmplitude: function() {
                    return r
                },
                amplitudeToPerceptual: function() {
                    return a
                }
            });

            function r(e) {
                let t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100;
                return 0 === e ? 0 : (t = e > n ? (e - n) / n * 6 : e / n * 50 - 50, n * Math.pow(10, t / 20))
            }

            function a(e) {
                let t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100;
                if (0 === e) return 0;
                let r = 20 * Math.log10(e / n);
                return n * (t = r > 0 ? r / 6 + 1 : (50 + r) / 50)
            }
        },
        833858: function(e, t, n) {
            "use strict";

            function r(e) {
                return Array.isArray(e) ? e[0] : e
            }
            n.r(t), n.d(t, {
                getFirstQueryStringValue: function() {
                    return r
                }
            })
        },
        840707: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("990746"),
                a = n("599110");

            function i(e, t, n) {
                let {
                    trackedActionData: r,
                    ...i
                } = t, l = {
                    url: i.url,
                    request_method: n
                };
                return new Promise((t, n) => {
                    e(i).then(e => {
                        let n = r.properties;
                        "function" == typeof r.properties && (n = r.properties(e)), (0, a.trackNetworkAction)(r.event, {
                            status_code: e.status,
                            ...l,
                            ...n
                        }), t(e)
                    }).catch(e => {
                        var t, i;
                        let s = r.properties;
                        "function" == typeof r.properties && (s = r.properties(e)), (0, a.trackNetworkAction)(r.event, {
                            status_code: e.status,
                            error_code: null === (t = e.body) || void 0 === t ? void 0 : t.code,
                            error_message: null === (i = e.body) || void 0 === i ? void 0 : i.message,
                            ...l,
                            ...s
                        }), n(e)
                    })
                })
            }
            var l = {
                get: function(e) {
                    return i(r.default.get, e, "get")
                },
                post: function(e) {
                    return i(r.default.post, e, "post")
                },
                put: function(e) {
                    return i(r.default.put, e, "put")
                },
                patch: function(e) {
                    return i(r.default.patch, e, "patch")
                },
                delete: function(e) {
                    return i(r.default.delete, e, "del")
                }
            }
        }
    }
]);