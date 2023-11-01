(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["53306"], {
        2396: function(e, t, r) {
            "use strict";
            e.exports = r.p + "27d910e5335bc8ab70d1.svg"
        },
        111494: function(e, t, r) {
            "use strict";
            e.exports = r.p + "fb2bc9ec875070eb5384.svg"
        },
        577468: function(e, t, r) {
            "use strict";
            e.exports = r.p + "ca67ff158e9860e50cac.svg"
        },
        330574: function(e, t, r) {
            "use strict";
            e.exports = r.p + "5a0a3c94e4973427134e.svg"
        },
        186237: function(e, t, r) {
            "use strict";
            e.exports = r.p + "c269c9b36ab7b621c16b.svg"
        },
        868470: function(e, t, r) {
            "use strict";
            e.exports = r.p + "f57bdf2be6d676da652b.svg"
        },
        441294: function(e, t, r) {
            "use strict";
            e.exports = r.p + "4741849dca44f19ddfa3.svg"
        },
        941754: function(e, t, r) {
            "use strict";
            e.exports = r.p + "461029a773ee21ad9bb9.svg"
        },
        245317: function(e, t, r) {
            "use strict";
            e.exports = r.p + "9f9d36fd84ca5ce1c895.svg"
        },
        338262: function(e, t, r) {
            "use strict";
            e.exports = r.p + "d3d02d383054f64091d5.svg"
        },
        997322: function(e, t, r) {
            "use strict";
            e.exports = r.p + "dcc1b96dda5a27b9a2f0.svg"
        },
        586504: function(e, t, r) {
            "use strict";
            e.exports = r.p + "dd293574a2092f9d4555.svg"
        },
        667100: function(e, t, r) {
            "use strict";
            e.exports = r.p + "08d19f5d231757b14468.svg"
        },
        515533: function(e, t, r) {
            "use strict";
            e.exports = r.p + "66d99a14180b6e5da1a3.svg"
        },
        356402: function(e, t, r) {
            "use strict";
            e.exports = r.p + "a0e2e13b1edb66b440fe.svg"
        },
        165123: function(e, t, r) {
            "use strict";
            e.exports = r.p + "5b309e3bda0a954ae67e.svg"
        },
        955003: function(e, t, r) {
            "use strict";
            e.exports = r.p + "a6a8e98a210bf8b02da7.svg"
        },
        481205: function(e, t, r) {
            "use strict";
            e.exports = r.p + "74cc3a7d069e7bde4642.svg"
        },
        463057: function(e, t, r) {
            "use strict";
            e.exports = r.p + "022b6f08ce8cd06e7d2e.svg"
        },
        286549: function(e, t, r) {
            "use strict";
            e.exports = r.p + "731d9f380624da37c63d.svg"
        },
        936532: function(e, t, r) {
            "use strict";
            e.exports = r.p + "b8ead81360c33e0de3f5.svg"
        },
        697643: function(e, t, r) {
            "use strict";
            e.exports = r.p + "bb2df9b4fe177b88f5cb.svg"
        },
        878188: function(e, t, r) {
            "use strict";
            e.exports = r.p + "38ac3f3a945e2cca9509.svg"
        },
        59619: function(e, t, r) {
            "use strict";
            e.exports = r.p + "abc0b50e7b32970d6ffd.svg"
        },
        364735: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return g
                }
            });
            var a = r("37983"),
                n = r("884691"),
                i = r("414456"),
                l = r.n(i),
                o = r("77078"),
                s = r("339783"),
                d = r("865146"),
                c = r("145131"),
                u = r("712218"),
                f = r("745279"),
                m = r("159885"),
                h = r("782340"),
                p = r("584565");
            class g extends n.PureComponent {
                get typeString() {
                    let {
                        paymentSource: e
                    } = this.props;
                    if (e instanceof d.PaypalSourceRecord) return u.default.Types.PAYPAL;
                    if (e instanceof d.SofortSourceRecord) return u.default.Types.SOFORT;
                    if (e instanceof d.CreditCardSourceRecord) return u.default.getType(e.brand);
                    else if (e instanceof d.GiropaySourceRecord) return u.default.Types.GIROPAY;
                    else if (e instanceof d.Przelewy24SourceRecord) return u.default.Types.PRZELEWY24;
                    else if (e instanceof d.PaysafeSourceRecord) return u.default.Types.PAYSAFECARD;
                    else if (e instanceof d.GcashSourceRecord) return u.default.Types.GCASH;
                    else if (e instanceof d.GrabPayMySourceRecord) return u.default.Types.GRABPAY;
                    else if (e instanceof d.MomoWalletSourceRecord) return u.default.Types.MOMO_WALLET;
                    else if (e instanceof d.VenmoSourceRecord) return u.default.Types.VENMO;
                    else if (e instanceof d.KaKaoPaySourceRecord) return u.default.Types.KAKAOPAY;
                    else if (e instanceof d.GoPayWalletSourceRecord) return u.default.Types.GOPAY_WALLET;
                    else if (e instanceof d.BancontactSourceRecord) return u.default.Types.BANCONTACT;
                    else if (e instanceof d.EPSSourceRecord) return u.default.Types.EPS;
                    else if (e instanceof d.IdealSourceRecord) return u.default.Types.IDEAL;
                    else if (e instanceof d.CashAppSourceRecord) return u.default.Types.CASH_APP;
                    return u.default.Types.UNKNOWN
                }
                getLabel(e) {
                    return e instanceof d.CreditCardSourceRecord ? h.default.Messages.PAYMENT_SOURCE_CARD_ENDING.format({
                        brand: (0, m.upperCaseFirstChar)(e.brand),
                        last_4: e.last4
                    }) : e instanceof d.PaypalSourceRecord ? h.default.Messages.PAYMENT_SOURCE_PAYPAL : e instanceof d.SofortSourceRecord ? h.default.Messages.PAYMENT_SOURCE_SOFORT : e instanceof d.GiropaySourceRecord ? h.default.Messages.PAYMENT_SOURCE_GIROPAY : e instanceof d.Przelewy24SourceRecord ? h.default.Messages.PAYMENT_SOURCE_PRZELEWY24 : e instanceof d.PaysafeSourceRecord ? h.default.Messages.PAYMENT_SOURCE_PAYSAFE_CARD : e instanceof d.GcashSourceRecord ? h.default.Messages.PAYMENT_SOURCE_GCASH : e instanceof d.GrabPayMySourceRecord ? h.default.Messages.PAYMENT_SOURCE_GRABPAY : e instanceof d.MomoWalletSourceRecord ? h.default.Messages.PAYMENT_SOURCE_MOMO_WALLET : e instanceof d.VenmoSourceRecord ? h.default.Messages.PAYMENT_SOURCE_VENMO : e instanceof d.KaKaoPaySourceRecord ? h.default.Messages.PAYMENT_SOURCE_KAKAOPAY : e instanceof d.GoPayWalletSourceRecord ? h.default.Messages.PAYMENT_SOURCE_GOPAY_WALLET : e instanceof d.BancontactSourceRecord ? h.default.Messages.PAYMENT_SOURCE_BANCONTACT : e instanceof d.IdealSourceRecord ? h.default.Messages.PAYMENT_SOURCE_IDEAL_WITH_BANK.format({
                        bank: (0, s.getIdealBankDisplayNameFromBankName)(e.bank)
                    }) : e instanceof d.EPSSourceRecord ? h.default.Messages.PAYMENT_SOURCE_EPS_WITH_BANK.format({
                        bank: (0, s.getEPSBankDisplayNameFromBankName)(e.bank)
                    }) : e instanceof d.CashAppSourceRecord ? h.default.Messages.PAYMENT_SOURCE_CASH_APP_PAY : h.default.Messages.PAYMENT_SOURCE_UNKNOWN
                }
                renderDescription() {
                    let {
                        paymentSource: e,
                        descriptionClassName: t
                    } = this.props;
                    return (0, a.jsx)(o.Text, {
                        className: l(p.description, t),
                        variant: "text-md/semibold",
                        children: this.getLabel(e)
                    })
                }
                renderSubText() {
                    let {
                        paymentSource: e,
                        locale: t
                    } = this.props, r = null;
                    return e instanceof d.CreditCardSourceRecord ? r = h.default.Messages.PAYMENT_SOURCE_CARD_EXPIRES.format({
                        month: (0, f.getLocalizedDisplayMonth)(e.expiresMonth, t),
                        year: e.expiresYear
                    }) : e instanceof d.PaypalSourceRecord ? r = e.email : e instanceof d.SofortSourceRecord ? r = e.email : e instanceof d.Przelewy24SourceRecord ? r = e.email : e instanceof d.VenmoSourceRecord ? r = "@" + e.username : e instanceof d.CashAppSourceRecord && (r = e.username), r
                }
                render() {
                    let {
                        isDefault: e,
                        paymentSource: t,
                        showSubtext: r,
                        isForSubscription: n
                    } = this.props, i = this.renderSubText();
                    return (0, a.jsxs)(c.default, {
                        children: [(0, a.jsx)(u.default, {
                            type: this.typeString
                        }), (0, a.jsxs)(c.default, {
                            direction: c.default.Direction.VERTICAL,
                            className: p.descriptionWrapper,
                            children: [(0, a.jsxs)(c.default, {
                                align: c.default.Align.CENTER,
                                children: [this.renderDescription(), e ? (0, a.jsx)("div", {
                                    className: p.defaultIndicator,
                                    children: h.default.Messages.DEFAULT
                                }) : null, n ? (0, a.jsx)("div", {
                                    className: p.premiumIndicator,
                                    children: h.default.Messages.PAYMENT_SOURCE_SUBSCRIPTION
                                }) : null, t.invalid ? (0, a.jsx)("div", {
                                    className: p.invalidIndicator,
                                    children: h.default.Messages.PAYMENT_SOURCE_INVALID
                                }) : null]
                            }), r && null != i ? (0, a.jsx)("div", {
                                className: p.subText,
                                children: i
                            }) : null]
                        })]
                    })
                }
            }
            g.defaultProps = {
                isForSubscription: !1,
                isDefault: !1,
                showSubtext: !1
            }
        },
        746164: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return a
                }
            });
            var a = (0, r("862205").createExperiment)({
                kind: "guild",
                id: "2023-02_voice_channel_statuses",
                label: "Voice Channel Status Guild Experiment",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enable viewing and setting voice channel statuses for guild",
                    config: {
                        enabled: !0
                    }
                }, {
                    id: 2,
                    label: "A/A test, identical to treatment 1",
                    config: {
                        enabled: !0
                    }
                }]
            })
        },
        594203: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                ResizeOrientation: function() {
                    return i
                },
                default: function() {
                    return c
                }
            });
            var a, n, i, l, o = r("884691"),
                s = r("917351");

            function d(e) {
                return e === i.HORIZONTAL_LEFT || e === i.HORIZONTAL_RIGHT ? l.HORIZONTAL : l.VERTICAL
            }(a = i || (i = {}))[a.VERTICAL_TOP = 0] = "VERTICAL_TOP", a[a.VERTICAL_BOTTOM = 1] = "VERTICAL_BOTTOM", a[a.HORIZONTAL_LEFT = 2] = "HORIZONTAL_LEFT", a[a.HORIZONTAL_RIGHT = 3] = "HORIZONTAL_RIGHT", (n = l || (l = {}))[n.VERTICAL = 0] = "VERTICAL", n[n.HORIZONTAL = 1] = "HORIZONTAL";
            var c = e => {
                let {
                    initialElementDimension: t,
                    resizableDomNodeRef: r,
                    maxDimension: a,
                    minDimension: n,
                    onElementResize: c,
                    onElementResizeEnd: u,
                    throttleDuration: f = 300,
                    orientation: m,
                    usePointerEvents: h = !1
                } = e, [p, g] = o.useState(!1), b = o.useRef(0), y = o.useRef(null == t ? 0 : t);
                return o.useLayoutEffect(() => {
                    if (!p || null == r.current) return;

                    function e(e) {
                        let t = d(m) === l.HORIZONTAL ? e.screenX : e.screenY,
                            r = m === i.VERTICAL_TOP || m === i.HORIZONTAL_LEFT,
                            o = (t - b.current) * (r ? -1 : 1),
                            c = y.current + o;
                        return (0, s.clamp)(c, null != n ? n : 0, null != a ? a : c)
                    }
                    let t = (0, s.throttle)(c, f),
                        o = a => {
                            if (null == r.current) return null;
                            let n = e(a),
                                i = d(m) === l.HORIZONTAL ? "width" : "height";
                            r.current.style[i] = "".concat(n, "px"), t(n)
                        },
                        x = t => {
                            g(!1);
                            let r = e(t);
                            c(r), null == u || u(r)
                        },
                        k = h ? "pointerup" : "mouseup",
                        S = h ? "pointermove" : "mousemove",
                        v = r.current.ownerDocument;
                    return v.addEventListener(k, x), v.addEventListener(S, o), () => {
                        v.removeEventListener(k, x), v.removeEventListener(S, o), t.cancel()
                    }
                }, [p, c, n, a, m, r, f, u, h]), o.useCallback(e => {
                    let t = d(m) === l.HORIZONTAL;
                    null != r.current && (y.current = t ? r.current.offsetWidth : r.current.offsetHeight), b.current = t ? e.screenX : e.screenY, g(!0)
                }, [m, r])
            }
        },
        597590: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return i
                }
            });
            var a = r("884691");
            let n = a.createContext(void 0);
            var i = n
        },
        339783: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return l
                },
                getIdealBankDisplayNameFromBankName: function() {
                    return s
                },
                getEPSBankDisplayNameFromBankName: function() {
                    return c
                }
            });
            var a = r("862205"),
                n = r("49111"),
                i = r("782340"),
                l = (0, a.createExperiment)({
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
                            enabledPaymentTypes: [n.PaymentSourceTypes.SOFORT, n.PaymentSourceTypes.GIROPAY],
                            forceCountryCode: "DE",
                            validCountryCodes: ["DE"]
                        }
                    }, {
                        id: 2,
                        label: "Regional Payment Method for US",
                        config: {
                            enabledPaymentTypes: [n.PaymentSourceTypes.VENMO, n.PaymentSourceTypes.CASH_APP],
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
                            enabledPaymentTypes: [n.PaymentSourceTypes.PRZELEWY24],
                            forceCountryCode: "PL",
                            validCountryCodes: ["PL"]
                        }
                    }, {
                        id: 6,
                        label: "Enable paysafecard",
                        config: {
                            enabledPaymentTypes: [n.PaymentSourceTypes.PAYSAFE_CARD],
                            forceCountryCode: "DE",
                            validCountryCodes: ["BG", "CZ", "DK", "HU", "RO", "SE", "DE"]
                        }
                    }, {
                        id: 7,
                        label: "Regional Payment Method for Philippines",
                        config: {
                            enabledPaymentTypes: [n.PaymentSourceTypes.GCASH],
                            forceCountryCode: "PH",
                            validCountryCodes: ["PH"]
                        }
                    }, {
                        id: 8,
                        label: "Regional Payment Method for Malaysia",
                        config: {
                            enabledPaymentTypes: [n.PaymentSourceTypes.GRABPAY_MY],
                            forceCountryCode: "MY",
                            validCountryCodes: ["MY"]
                        }
                    }, {
                        id: 9,
                        label: "Regional Payment Method for Vietnam",
                        config: {
                            enabledPaymentTypes: [n.PaymentSourceTypes.MOMO_WALLET],
                            forceCountryCode: "VN",
                            validCountryCodes: ["VN"]
                        }
                    }, {
                        id: 10,
                        label: "Regional Payment Method for Indonesia",
                        config: {
                            enabledPaymentTypes: [n.PaymentSourceTypes.GOPAY_WALLET],
                            forceCountryCode: "ID",
                            validCountryCodes: ["ID"]
                        }
                    }, {
                        id: 11,
                        label: "Regional Payment Method for South Korea",
                        config: {
                            enabledPaymentTypes: [n.PaymentSourceTypes.KAKAOPAY],
                            forceCountryCode: "KR",
                            validCountryCodes: ["KR"]
                        }
                    }, {
                        id: 12,
                        label: "Regional Payment Method for Belgium",
                        config: {
                            enabledPaymentTypes: [n.PaymentSourceTypes.PAYSAFE_CARD, n.PaymentSourceTypes.SOFORT, n.PaymentSourceTypes.BANCONTACT],
                            forceCountryCode: "BE",
                            validCountryCodes: ["BE"]
                        }
                    }, {
                        id: 13,
                        label: "Regional Payment Method for Austria",
                        config: {
                            enabledPaymentTypes: [n.PaymentSourceTypes.PAYSAFE_CARD, n.PaymentSourceTypes.EPS, n.PaymentSourceTypes.SOFORT],
                            forceCountryCode: "AT",
                            validCountryCodes: ["AT"]
                        }
                    }, {
                        id: 14,
                        label: "Regional Payment Method for Netherlands",
                        config: {
                            enabledPaymentTypes: [n.PaymentSourceTypes.PAYSAFE_CARD, n.PaymentSourceTypes.IDEAL, n.PaymentSourceTypes.SOFORT],
                            forceCountryCode: "NL",
                            validCountryCodes: ["NL"]
                        }
                    }, {
                        id: 15,
                        label: "Launch Paysafecard and Sofort",
                        config: {
                            enabledPaymentTypes: [n.PaymentSourceTypes.PAYSAFE_CARD, n.PaymentSourceTypes.SOFORT],
                            forceCountryCode: "ES",
                            validCountryCodes: ["ES", "IT"]
                        }
                    }, {
                        id: 16,
                        label: "Launch Cash App",
                        config: {
                            enabledPaymentTypes: [n.PaymentSourceTypes.CASH_APP],
                            forceCountryCode: "US",
                            validCountryCodes: ["US"]
                        }
                    }]
                });
            let o = new Map([
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

            function s(e) {
                return void 0 !== e && o.has(e) ? o.get(e) : i.default.Messages.PAYMENT_SOURCE_UNKNOWN
            }
            let d = new Map([
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

            function c(e) {
                return void 0 !== e && d.has(e) ? d.get(e) : i.default.Messages.PAYMENT_SOURCE_UNKNOWN
            }
        },
        398570: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return h
                }
            });
            var a = r("748820"),
                n = r("391679"),
                i = r("446674"),
                l = r("913144"),
                o = r("271938"),
                s = r("584369");
            let d = 0,
                c = [],
                u = [],
                f = !1;
            class m extends i.default.Store {
                initialize() {
                    this.waitFor(s.default)
                }
                get loggedEvents() {
                    return c
                }
                get loggedTriggers() {
                    return u
                }
                get trackTriggers() {
                    return f
                }
            }
            m.displayName = "AnalyticsLogStore";
            var h = new m(l.default, {
                TRACK: function(e) {
                    let {
                        event: t,
                        properties: r,
                        fingerprint: a
                    } = e;
                    if (s.default.devToolsEnabled) {
                        var i;
                        (c = [...c, {
                            key: (d++).toString(),
                            event: t,
                            properties: r,
                            fingerprint: null != (i = a) ? (0, n.extractId)(i) : o.default.getId(),
                            timestamp: new Date
                        }]).length > 500 && c.shift()
                    }
                },
                TRACK_TRIGGER: function(e) {
                    let {
                        experimentId: t,
                        descriptor: r,
                        exposureType: n,
                        excluded: i,
                        location: l,
                        previouslyTracked: o
                    } = e;
                    if (!!s.default.devToolsEnabled) f && (u = [...u, {
                        key: (0, a.v4)(),
                        experimentId: t,
                        descriptor: r,
                        exposureType: n,
                        excluded: i,
                        location: l,
                        previouslyTracked: o,
                        timestamp: new Date
                    }]).length > 500 && u.shift()
                },
                SET_TRACK_TRIGGERS: function(e) {
                    let {
                        enabled: t
                    } = e;
                    f = t
                },
                ANALYTICS_LOG_CLEAR: function() {
                    c = [], u = []
                }
            })
        },
        220462: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                toggle: function() {
                    return i
                }
            });
            var a = r("913144"),
                n = r("676574");

            function i(e, t) {
                let r = "boolean" == typeof t ? t : !n.default.get(e);
                a.default.dispatch({
                    type: "DEV_TOOLS_DEV_SETTING_SET",
                    toggle: e,
                    value: r
                })
            }
        },
        304207: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return Y
                }
            });
            var a = r("37983"),
                n = r("884691"),
                i = r("414456"),
                l = r.n(i),
                o = r("759843"),
                s = r("446674"),
                d = r("77078"),
                c = r("594203"),
                u = r("428958"),
                f = r("481555"),
                m = r("368694"),
                h = r("461380"),
                p = r("945330"),
                g = r("496657"),
                b = r("664336"),
                y = r("370492"),
                x = r("584369"),
                k = r("676574");
            r("444489");
            var S = r("224249"),
                v = r("706098"),
                C = r("383925"),
                E = r("21573"),
                T = r("245515"),
                _ = r("172248"),
                N = r("719086"),
                j = r("811199"),
                R = r("175768"),
                w = r("358344"),
                A = r("34971"),
                O = r("134034"),
                I = r("79953"),
                P = r("388557"),
                M = r("238161"),
                L = r("20950"),
                D = r("724209"),
                B = r("782340"),
                G = r("978482"),
                U = r("694735");

            function F(e) {
                let {
                    resizableNode: t,
                    onResize: r,
                    onResizeEnd: n
                } = e, i = (0, c.default)({
                    minDimension: x.DEVTOOLS_SIDEBAR_MIN_WIDTH,
                    resizableDomNodeRef: t,
                    onElementResize: r,
                    onElementResizeEnd: n,
                    orientation: c.ResizeOrientation.HORIZONTAL_LEFT
                });
                return (0, a.jsx)("div", {
                    onMouseDown: i,
                    className: G.resizeHandle
                })
            }

            function H() {
                var e;
                let t = function() {
                        let e = (0, f.useChannelHighlightsExperiment)();
                        return n.useMemo(() => {
                            let t = [{
                                id: "analytics",
                                name: "Analytics",
                                render: () => (0, a.jsx)(S.default, {})
                            }, {
                                id: "triggers",
                                name: "Triggers",
                                render: () => (0, a.jsx)(L.default, {})
                            }, {
                                id: "stores",
                                name: "Stores",
                                render: () => (0, a.jsx)(I.default, {})
                            }, {
                                id: "dispatcher",
                                name: "Dispatcher",
                                render: () => (0, a.jsx)(T.default, {})
                            }];
                            return m.default.isDeveloper && t.push({
                                id: "quick_actions",
                                name: "Quick Actions",
                                render: () => (0, a.jsx)(O.default, {})
                            }), e && t.push({
                                id: "highlights",
                                name: "Highlights",
                                render: () => (0, a.jsx)(N.default, {})
                            }), t.push({
                                id: "colors",
                                name: "Colors",
                                render: () => (0, a.jsx)(C.default, {})
                            }), t.push({
                                id: "design_toggles",
                                name: "Design Toggles",
                                render: () => (0, a.jsx)(E.default, {})
                            }), t.push({
                                id: "overlays",
                                name: "Dev Overlays",
                                render: () => (0, a.jsx)(_.default, {
                                    devSettingsCategory: k.DevSettingsCategory.OVERLAYS
                                })
                            }), t.push({
                                id: "messaging",
                                name: "Messaging",
                                render: () => (0, a.jsx)(_.default, {
                                    devSettingsCategory: k.DevSettingsCategory.MESSAGING
                                })
                            }), t.push({
                                id: "permissions",
                                name: "Permissions",
                                render: () => (0, a.jsx)(A.default, {})
                            }), t.push({
                                id: "modals",
                                name: "Modals",
                                render: () => (0, a.jsx)(R.default, {})
                            }), window.GLOBAL_ENV.RELEASE_CHANNEL.startsWith("staging") && (t.push({
                                id: "trials",
                                name: "Trials",
                                render: () => (0, a.jsx)(M.default, {})
                            }), t.push({
                                id: "payments",
                                name: "Payments",
                                render: () => (0, a.jsx)(w.default, {})
                            }), t.push({
                                id: "subscriptions",
                                name: "Subscriptions",
                                render: () => (0, a.jsx)(P.default, {})
                            }), t.push({
                                id: "billing",
                                name: "Billing",
                                render: () => (0, a.jsx)(v.default, {})
                            })), t
                        }, [e])
                    }(),
                    {
                        TabBar: r,
                        renderSelectedTab: i,
                        selectedTabId: l
                    } = (0, D.default)({
                        tabs: t,
                        initialSelectedTabId: null !== (e = x.default.lastOpenTabId) && void 0 !== e ? e : void 0,
                        onChangeTab: e => {
                            (0, y.updateDevToolsSettings)({
                                lastOpenTabId: e
                            })
                        }
                    }, [t]);
                return (0, u.default)({
                    type: o.ImpressionTypes.PANE,
                    name: o.ImpressionNames.VIEW_PANEL_DEVTOOLS,
                    properties: {
                        panel: l
                    }
                }), (0, a.jsxs)(j.DevToolsLayerProvider, {
                    children: [(0, a.jsxs)(b.default, {
                        className: U.headerBar,
                        toolbar: (0, a.jsx)(b.default.Icon, {
                            icon: p.default,
                            tooltip: B.default.Messages.CLOSE,
                            onClick: y.toggleDisplayDevTools
                        }),
                        children: [(0, a.jsx)(b.default.Icon, {
                            icon: g.default,
                            tooltip: "DevTools"
                        }), (0, a.jsx)(b.default.Title, {
                            children: "DevTools"
                        })]
                    }), (0, a.jsx)(r, {}), i(), (0, a.jsx)(j.DevToolsLayerContainer, {
                        className: G.layerContainer
                    })]
                })
            }

            function V() {
                let e = n.useRef(null),
                    t = (0, s.useStateFromStores)([x.default], () => x.default.sidebarWidth),
                    [r, i] = n.useState(null),
                    o = n.useCallback(e => (0, y.updateDevToolsSettings)({
                        sidebarWidth: e
                    }), []);
                return (n.useEffect(() => {
                    null === r && null !== t && i(t)
                }, [t, r]), null === r) ? null : (0, a.jsxs)("div", {
                    ref: e,
                    className: l(G.container),
                    style: {
                        minWidth: x.DEVTOOLS_SIDEBAR_MIN_WIDTH,
                        width: r
                    },
                    children: [(0, a.jsx)(F, {
                        resizableNode: e,
                        onResize: i,
                        onResizeEnd: o
                    }), (0, a.jsx)("div", {
                        className: G.sidebarContent,
                        children: (0, a.jsx)(H, {})
                    })]
                })
            }

            function z() {
                let e = (0, s.useStateFromStores)([x.default], () => x.default.displayTools);
                return e ? (0, a.jsx)("div", {
                    className: l(G.container, G.mobileContainerExpanded),
                    children: (0, a.jsx)("div", {
                        className: G.sidebarContent,
                        children: (0, a.jsx)(H, {})
                    })
                }) : (0, a.jsx)("div", {
                    className: G.container,
                    children: (0, a.jsx)(d.Clickable, {
                        onClick: y.toggleDisplayDevTools,
                        children: (0, a.jsxs)(b.default, {
                            className: l(U.headerBar, G.mobileHeaderCollapsed),
                            toolbar: (0, a.jsx)(h.default, {
                                direction: h.default.Directions.UP
                            }),
                            children: [(0, a.jsx)(b.default.Icon, {
                                icon: g.default,
                                tooltip: "DevTools"
                            }), (0, a.jsx)(b.default.Title, {
                                children: "DevTools"
                            })]
                        })
                    })
                })
            }

            function Y(e) {
                let {
                    mobile: t
                } = e;
                return t ? (0, a.jsx)(z, {}) : (0, a.jsx)(V, {})
            }
        },
        444489: function(e, t, r) {
            "use strict";
            r.r(t), r("37983"), r("884691"), r("414456"), r("77078"), r("696316"), r("759388"), r("456254"), r("9074"), r("664336"), r("50625"), r("928063"), r("109475"), r("724209"), r("578885"), r("694735")
        },
        224249: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return A
                }
            });
            var a = r("37983"),
                n = r("884691"),
                i = r("414456"),
                l = r.n(i),
                o = r("866227"),
                s = r.n(o),
                d = r("446674"),
                c = r("77078"),
                u = r("145079"),
                f = r("697218"),
                m = r("756609"),
                h = r("228220"),
                p = r("664336"),
                g = r("888400"),
                b = r("398570"),
                y = r("370492"),
                x = r("332814"),
                k = r("928063"),
                S = r("109475"),
                v = r("724209"),
                C = r("782340"),
                E = r("185187"),
                T = r("694735");
            let _ = [{
                key: "event",
                cellClassName: E.eventColumn,
                render(e) {
                    let {
                        event: t
                    } = e;
                    return t
                }
            }, {
                key: "location",
                cellClassName: E.locationColumn,
                render(e) {
                    let {
                        properties: t
                    } = e;
                    return t.location
                }
            }];

            function N(e) {
                let {
                    children: t
                } = e;
                return (0, a.jsx)(c.ScrollerThin, {
                    className: E.customPropertiesContainer,
                    children: (0, a.jsx)("dl", {
                        children: t
                    })
                })
            }

            function j(e) {
                let {
                    name: t,
                    children: r
                } = e;
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)("dt", {
                        className: E.customPropertiesName,
                        children: t
                    }), (0, a.jsx)("dd", {
                        className: E.customPropertiesValue,
                        children: r
                    })]
                })
            }
            let R = [{
                    id: "details",
                    name: "Details",
                    render: e => {
                        let {
                            loggedEvent: {
                                event: t,
                                properties: r,
                                timestamp: n,
                                fingerprint: i
                            }
                        } = e, o = f.default.getUser(i), d = s(n);
                        return (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsxs)(p.default, {
                                className: l(T.headerBar, E.subPanelHeaderBar),
                                children: [(0, a.jsx)(p.default.Icon, {
                                    icon: m.default,
                                    tooltip: t
                                }), (0, a.jsx)(p.default.Title, {
                                    children: t
                                })]
                            }), (0, a.jsxs)(x.Properties, {
                                className: E.commonProperties,
                                children: [(0, a.jsx)(x.Property, {
                                    name: "Timestamp (local)",
                                    children: (0, a.jsx)("time", {
                                        dateTime: n.toISOString(),
                                        title: (0, g.dateFormat)(d, "LLLL"),
                                        children: (0, g.calendarFormat)(d)
                                    })
                                }), null != o && (0, a.jsx)(x.Property, {
                                    name: "User",
                                    children: (0, a.jsx)(u.default, {
                                        user: o
                                    })
                                }), (0, a.jsx)(x.Property, {
                                    name: "Fingerprint",
                                    children: (0, a.jsx)("code", {
                                        children: i
                                    })
                                })]
                            }), (0, a.jsx)(N, {
                                children: Object.entries(r).map(e => {
                                    let [t, r] = e;
                                    return (0, a.jsx)(j, {
                                        name: "".concat(t, ":"),
                                        children: null != r ? (0, a.jsx)("code", {
                                            children: JSON.stringify(r)
                                        }) : (0, a.jsx)("code", {
                                            className: E.emptyProperty,
                                            children: "null"
                                        })
                                    }, t)
                                })
                            })]
                        })
                    }
                }],
                w = {
                    events: {
                        label: "Events",
                        filter: e => Object.entries(w).filter(e => {
                            let [t] = e;
                            return "events" !== t
                        }).map(t => {
                            let [r, {
                                filter: a
                            }] = t;
                            return !a(e)
                        }).every(e => e)
                    },
                    experiments: {
                        label: "Experiments",
                        filter: e => ["experiment_user_triggered", "experiment_guild_triggered"].includes(e.event)
                    },
                    impressions: {
                        label: "Impressions",
                        filter: e => e.event.startsWith("impression_")
                    },
                    networkActions: {
                        label: "Network",
                        filter: e => e.event.startsWith("network_action")
                    }
                };

            function A() {
                let e = n.useRef(null),
                    t = (0, d.useStateFromStores)([b.default], () => b.default.loggedEvents),
                    [r, i] = n.useState(Object.keys(w)),
                    o = t.filter(e => {
                        for (let t of r)
                            if (w[t].filter(e)) return !0;
                        return !1
                    }),
                    [s, u] = n.useState(void 0),
                    f = o.find(e => e.key === s),
                    {
                        TabBar: m,
                        renderSelectedTab: p
                    } = (0, v.default)({
                        tabs: R
                    }, []);
                return (0, a.jsxs)("div", {
                    ref: e,
                    className: l(T.panel, E.panel),
                    children: [(0, a.jsxs)("div", {
                        className: E.toolbar,
                        children: [(0, a.jsx)(c.Button, {
                            className: E.toolbarButton,
                            look: c.Button.Looks.BLANK,
                            size: c.Button.Sizes.ICON,
                            onClick: y.clearAnalyticsLog,
                            children: (0, a.jsx)("span", {
                                title: C.default.Messages.CLEAR,
                                children: (0, a.jsx)(h.default, {
                                    "aria-label": C.default.Messages.CLEAR
                                })
                            })
                        }), (0, a.jsx)("div", {
                            className: E.toolbarDivider
                        }), (0, a.jsx)("div", {
                            className: E.filters,
                            children: Object.entries(w).map(e => {
                                let [t, n] = e;
                                return (0, a.jsx)(c.Clickable, {
                                    className: l(E.filter, r.includes(t) && E.activeFilter),
                                    onClick: () => {
                                        var e;
                                        return e = t, void i(t => t.includes(e) ? t.filter(t => t !== e) : [...t, e])
                                    },
                                    children: n.label
                                }, t)
                            })
                        })]
                    }), (0, a.jsx)(c.ScrollerThin, {
                        className: E.tableContainer,
                        children: (0, a.jsx)(S.default, {
                            columns: _,
                            data: o,
                            selectedRowKey: s,
                            onClickRow: u
                        })
                    }), null != f && (0, a.jsxs)(k.default, {
                        className: E.subPanel,
                        minHeight: 100,
                        initialHeight: null != e.current ? e.current.clientHeight / 2 : 300,
                        children: [(0, a.jsx)(m, {}), p({
                            loggedEvent: f
                        })]
                    })]
                })
            }
        },
        706098: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return l
                }
            });
            var a = r("37983");
            r("884691");
            var n = r("358344"),
                i = r("388557");

            function l() {
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(n.default, {}), (0, a.jsx)(i.default, {})]
                })
            }
        },
        383925: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return M
                }
            });
            var a = r("926607"),
                n = r("37983"),
                i = r("884691"),
                l = r("10371"),
                o = r.n(l),
                s = r("675576"),
                d = r("917351"),
                c = r.n(d),
                u = r("703809"),
                f = r("65597"),
                m = r("95410"),
                h = r("497991"),
                p = r("111940"),
                g = r("133198"),
                b = r("77078"),
                y = r("841098"),
                x = r("87469"),
                k = r("168973"),
                S = r("810567"),
                v = r("945330"),
                C = r("811199"),
                E = r("559980"),
                T = r("694735");

            function _() {
                let e = (0, a._)(["\n    import {defineColorTokens, themedToken} from '../tools/define';\n\n    const semanticTokenValues = {\n      ", "\n    };\n\n    export const semanticTokens = defineColorTokens(() => semanticTokenValues);\n    export type SemanticTokenValue = typeof semanticTokenValues;\n  "]);
                return _ = function() {
                    return e
                }, e
            }

            function N() {
                let e = (0, a._)(["\n      export const rawPalette = {\n        ", "\n      } as const;\n    "]);
                return N = function() {
                    return e
                }, e
            }
            let j = {
                    ...g.semanticColorTokens,
                    ...h.componentColorTokens
                },
                R = {
                    ...I(g.semanticColorTokens),
                    ...I(h.componentColorTokens)
                },
                w = ["100", "130", "160", "200", "230", "260", "300", "330", "345", "360", "400", "430", "460", "500", "530", "560", "600", "630", "645", "660", "700", "730", "760", "800", "830", "860", "900"];

            function A(e) {
                var t;
                let r = "string" == typeof e ? 1 : null !== (t = e.opacity) && void 0 !== t ? t : 1,
                    a = "string" == typeof e ? e : e.color;
                return {
                    color: a,
                    opacity: r
                }
            }

            function O(e) {
                return "name" in e
            }

            function I(e) {
                let t = {};
                return Object.keys(e).forEach(r => {
                    let a = e[r];
                    if ("name" in a) a = function e(t) {
                        let r = j[t.name];
                        return "name" in r ? e(r) : r
                    }(a);
                    t[r] = {
                        light: A(a.light),
                        dark: A(a.dark),
                        darker: A(null != a.darker ? a.darker : a.dark),
                        amoled: A(null != a.amoled ? a.amoled : a.dark)
                    }
                }), t
            }

            function P(e, t) {
                let [r, a] = i.useState(() => {
                    let r = m.default.get(e);
                    return null != r ? r : t
                });
                return i.useEffect(() => {
                    m.default.set(e, r)
                }, [e, r]), [r, a]
            }

            function M() {
                let e = (0, y.useTheme)(),
                    t = (0, f.default)([k.default], () => k.default.useAMOLEDTheme),
                    r = x.default.useExperiment({
                        location: "786c82_1"
                    }, {
                        autoTrackExposure: !1
                    }).enabledAMOLEDThemeOption;
                t === E.AMOLEDThemeState.ON && r && (e = "amoled");
                let [{
                    rawPalette: a,
                    semanticTokens: l
                }, d, m, h, g, j] = function(e, t) {
                    let [r, a] = P("".concat(e, "-states"), [t]), [n, l] = P("".concat(e, "-index"), 0), o = r[n], s = i.useCallback(e => {
                        let t = [e, ...r].slice(0, 20);
                        a(t), l(0)
                    }, [l, a, r]), d = i.useCallback(() => {
                        l(Math.min(r.length - 1, n + 1))
                    }, [n, l, r.length]), c = i.useCallback(() => {
                        l(Math.max(0, n - 1))
                    }, [n, l]), u = n < r.length - 1, f = n > 0;
                    return [o, s, d, c, u, f]
                }("color-override-03-03-23", {
                    rawPalette: p.rawPalette,
                    semanticTokens: R
                }), [A, O] = i.useState(""), [I, M] = i.useState({}), [L, D] = i.useState({}), B = i.useMemo(() => {
                    let e = Object.keys(a);
                    return e.reduce((e, t) => [...e, {
                        value: t,
                        label: t
                    }], [])
                }, [a]), G = i.useCallback((e, t, r, n) => {
                    let i = c.cloneDeep(l);
                    i[e][t] = {
                        color: r,
                        opacity: n
                    }, d({
                        rawPalette: a,
                        semanticTokens: i
                    })
                }, [l, a, d]), U = i.useMemo(() => {
                    let t = Object.keys(l).map(t => {
                            let r = l[t],
                                {
                                    color: a,
                                    opacity: n
                                } = r[e];
                            return "--".concat(t, ": hsl(var(--").concat(a.replace(".", "-"), "-hsl) / ").concat(n, ");")
                        }),
                        r = Object.keys(a).flatMap(e => {
                            let {
                                hex: t
                            } = a[e], {
                                h: r,
                                s: n,
                                l: i
                            } = function(e) {
                                let [t, r, a] = "transparent" === e ? [0, 0, 0] : o(e).hsl(), n = isNaN(t) ? 0 : c.round(t, 1), i = c.round(100 * a, 1), l = c.round(100 * r, 1);
                                return {
                                    h: n,
                                    s: l,
                                    l: i
                                }
                            }(t), l = c.kebabCase(e);
                            return ["--".concat(l, "-hsl: ").concat(r, " calc(var(--saturation-factor, 1) * ").concat(n, "%) ").concat(i, "% !important;"), "--".concat(l, ": hsl(var(--").concat(l, "-hsl)) !important;")]
                        });
                    return "\n      .theme-".concat(e, " {\n        ").concat(t.join("\n"), "\n\n        ").concat(Object.keys(I).filter(e => I[e]).map(e => "--".concat(e, ": magenta !important;")).join("\n"), "\n\n        ").concat(Object.keys(L).filter(e => L[e]).map(e => "--".concat(e, ": magenta !important;")).join("\n"), "\n      }\n\n      html {\n        ").concat(r.join("\n"), "\n      }\n    ")
                }, [e, l, a, I, L]), F = i.useCallback(e => {
                    let t = "",
                        r = "",
                        a = !1;
                    return (0, s.default)(_(), Object.keys(e).map(n => {
                        (r = n.split("-")[0]) !== t ? (t = r, a = !0) : a = !1;
                        let i = e[n],
                            l = i.light,
                            o = i.dark,
                            s = i.amoled,
                            d = [
                                ["dark", o],
                                ["light", l]
                            ];
                        (s.opacity !== o.opacity || s.color !== o.color) && d.push(["amoled", s]);
                        let c = d.map(e => {
                                let [t, {
                                    color: r,
                                    opacity: a
                                }] = e;
                                return 1 === a ? "".concat(t, ': "').concat(r, '"') : "".concat(t, ': { color: "').concat(r, '", opacity: ').concat(a, " }")
                            }).join(",\n"),
                            u = '"'.concat(n, '": themedToken({ ').concat(c, " })");
                        return "".concat(a ? "\n" : "").concat(u)
                    }).join(",\n"))
                }, []), H = i.useCallback(e => (0, s.default)(N(), Object.keys(e).map(t => '"'.concat(t, '": {hex: "').concat(e[t].hex, '"}'))), []), V = i.useCallback(e => {
                    let t = {};
                    Object.keys(e).forEach(r => {
                        Object.keys(e[r]).map(a => {
                            let n = [...w];
                            "primary" !== r && (n = n.filter(e => "645" !== e)), t["".concat(r, ".").concat(n[+a])] = {
                                hex: e[r][a]
                            }
                        })
                    }), d({
                        rawPalette: t,
                        semanticTokens: l
                    })
                }, [l, d]);
                return (0, n.jsxs)("div", {
                    className: T.panel,
                    style: {
                        display: "flex",
                        flexDirection: "column"
                    },
                    children: [(0, n.jsxs)("div", {
                        className: T.toolbar,
                        style: {
                            flex: "0 0 34px",
                            padding: "0 4px"
                        },
                        children: [(0, n.jsxs)("div", {
                            className: T.toolbarGroup,
                            children: [(0, n.jsx)(b.Button, {
                                onClick: m,
                                disabled: !g,
                                size: b.Button.Sizes.MIN,
                                children: "Undo"
                            }), (0, n.jsx)(b.Button, {
                                onClick: h,
                                disabled: !j,
                                size: b.Button.Sizes.MIN,
                                children: "Redo"
                            })]
                        }), (0, n.jsx)("div", {
                            className: T.toolbarDivider
                        }), (0, n.jsxs)("div", {
                            className: T.toolbarGroup,
                            children: [(0, n.jsx)("span", {
                                className: T.toolbarGroupLabel,
                                children: "Raw"
                            }), (0, n.jsx)(b.Button, {
                                size: b.Button.Sizes.MIN,
                                onClick: () => {
                                    navigator.clipboard.readText().then(e => {
                                        V(JSON.parse(e))
                                    })
                                },
                                children: "Import"
                            }), (0, n.jsx)(b.Button, {
                                size: b.Button.Sizes.MIN,
                                onClick: () => {
                                    navigator.clipboard.writeText(H(a))
                                },
                                children: "Export"
                            })]
                        }), (0, n.jsx)("div", {
                            className: T.toolbarDivider
                        }), (0, n.jsxs)("div", {
                            className: T.toolbarGroup,
                            children: [(0, n.jsx)("span", {
                                className: T.toolbarGroupLabel,
                                children: "Semantic"
                            }), (0, n.jsx)(b.Button, {
                                size: b.Button.Sizes.MIN,
                                onClick: () => {
                                    navigator.clipboard.writeText(F(l))
                                },
                                children: "Export"
                            })]
                        }), (0, n.jsx)("div", {
                            className: T.toolbarDivider
                        }), (0, n.jsx)("div", {
                            className: T.toolbarGroup,
                            children: (0, n.jsx)(b.Button, {
                                size: b.Button.Sizes.MIN,
                                type: "reset",
                                color: b.Button.Colors.RED,
                                onClick: () => {
                                    d({
                                        rawPalette: p.rawPalette,
                                        semanticTokens: R
                                    })
                                },
                                children: "Reset all"
                            })
                        }), (0, n.jsx)("div", {
                            className: T.toolbarDivider
                        }), (0, n.jsxs)("div", {
                            className: T.toolbarGroup,
                            style: {
                                flexGrow: 1
                            },
                            children: [(0, n.jsx)(S.default, {
                                size: S.default.Sizes.SMALL,
                                query: A,
                                onChange: O,
                                onClear: () => O(""),
                                placeholder: "Search tokens",
                                "aria-label": "Search tokens"
                            }), " "]
                        })]
                    }), (0, n.jsx)(b.ScrollerThin, {
                        children: (0, n.jsx)("div", {
                            style: {
                                display: "grid",
                                gridTemplateColumns: "min-content 1fr 1fr min-content min-content",
                                gap: 8,
                                margin: 8,
                                alignItems: "center"
                            },
                            children: Object.keys(R).filter(e => "" === A || e.toLowerCase().includes(A)).map(t => {
                                var r;
                                let a = R[t][e],
                                    o = null == l[t] ? {
                                        ...a
                                    } : l[t][e],
                                    s = o.color !== a.color || o.opacity !== a.opacity;
                                return (0, n.jsxs)(i.Fragment, {
                                    children: [(0, n.jsx)("div", {
                                        onMouseEnter: () => {
                                            D(e => ({
                                                ...e,
                                                [t]: !0
                                            }))
                                        },
                                        onMouseLeave: () => {
                                            D(e => ({
                                                ...e,
                                                [t]: !1
                                            }))
                                        },
                                        children: (0, n.jsx)(b.Checkbox, {
                                            value: I[t],
                                            onChange: () => {
                                                M(e => ({
                                                    ...e,
                                                    [t]: !e[t]
                                                }))
                                            }
                                        })
                                    }), (0, n.jsx)("span", {
                                        children: t
                                    }), (0, n.jsx)(b.SearchableSelect, {
                                        value: o.color,
                                        options: B,
                                        onChange: r => {
                                            G(t, e, r, o.opacity)
                                        },
                                        renderOptionPrefix: t => null == t ? null : (0, n.jsx)("div", {
                                            style: {
                                                width: 16,
                                                height: 16,
                                                borderRadius: "50%",
                                                backgroundColor: "var(--".concat(t.value.replace(".", "-"), ")"),
                                                border: "1px solid ".concat("dark" === e ? "white" : "black")
                                            }
                                        }),
                                        popoutLayerContext: C.devToolsLayerContext
                                    }), (0, n.jsx)(b.TextInput, {
                                        type: "number",
                                        style: {
                                            width: "4em"
                                        },
                                        value: null === (r = o.opacity) || void 0 === r ? void 0 : r.toString(),
                                        onChange: r => {
                                            "" !== r && G(t, e, o.color, parseFloat(r))
                                        }
                                    }), (0, n.jsx)(b.Clickable, {
                                        style: s ? {} : {
                                            opacity: 0,
                                            pointerEvents: "none"
                                        },
                                        onClick: () => {
                                            var r;
                                            s && G(t, e, a.color, null !== (r = a.opacity) && void 0 !== r ? r : 1)
                                        },
                                        children: (0, n.jsx)(v.default, {
                                            width: 16,
                                            height: 16
                                        })
                                    })]
                                }, t)
                            })
                        })
                    }), (0, n.jsx)(u.Helmet, {
                        children: (0, n.jsx)("style", {
                            id: "devtools-color-overrides",
                            children: U
                        })
                    })]
                })
            }
        },
        21573: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return c
                }
            });
            var a = r("37983"),
                n = r("884691"),
                i = r("446674"),
                l = r("77078"),
                o = r("508815"),
                s = r("916523"),
                d = r("70310");

            function c() {
                let e = (0, i.useStateFromStores)([s.default], () => s.default.allWithDescriptions(), [], i.statesWillNeverBeEqual),
                    t = n.useMemo(() => e.map(e => {
                        let [t, r, n] = e;
                        return (0, a.jsx)(l.FormItem, {
                            children: (0, a.jsx)(l.FormSwitch, {
                                value: r,
                                note: t,
                                onChange: e => (0, o.toggle)(t, e),
                                hideBorder: !0,
                                children: n
                            })
                        }, t)
                    }), [e]);
                return (0, a.jsxs)("div", {
                    className: d.container,
                    children: [(0, a.jsx)(l.Button, {
                        onClick: o.clearAll,
                        className: d.button,
                        fullWidth: !0,
                        children: "Clear all"
                    }), (0, a.jsx)("div", {
                        className: d.rowsContainer,
                        children: t
                    })]
                })
            }
        },
        245515: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return j
                }
            });
            var a = r("37983"),
                n = r("884691"),
                i = r("414456"),
                l = r.n(i),
                o = r("866227"),
                s = r.n(o),
                d = r("77078"),
                c = r("913144"),
                u = r("561703"),
                f = r("315585"),
                m = r("664336"),
                h = r("888400"),
                p = r("50625"),
                g = r("332814"),
                b = r("928063"),
                y = r("109475"),
                x = r("724209"),
                k = r("8114"),
                S = r("694735");

            function v(e) {
                return parseFloat(e.toFixed(3))
            }
            let C = [{
                key: "store",
                cellClassName: k.actionColumn,
                render(e) {
                    let {
                        trace: t
                    } = e;
                    return t.name
                }
            }, {
                key: "time",
                cellClassName: k.totalTimeColumn,
                render(e) {
                    let {
                        trace: t
                    } = e;
                    return "".concat(v(t.time), " ms")
                }
            }];

            function E(e) {
                let {
                    actionLog: t
                } = e, r = n.useMemo(() => t.traces.map(e => ({
                    key: e.name,
                    trace: e
                })), [t]);
                return (0, a.jsx)(d.ScrollerThin, {
                    children: (0, a.jsx)(y.default, {
                        columns: C,
                        data: r
                    })
                })
            }
            let T = [{
                id: "action",
                name: "Action",
                render(e) {
                    var t;
                    let {
                        actionLog: r
                    } = e, n = s(r.createdAt);
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsxs)(g.Properties, {
                            className: k.actionProperties,
                            children: [(0, a.jsx)(g.Property, {
                                name: "Created at",
                                children: (0, a.jsx)("time", {
                                    dateTime: null === (t = r.createdAt) || void 0 === t ? void 0 : t.toISOString(),
                                    title: (0, h.dateFormat)(n, "LLLL"),
                                    children: (0, h.calendarFormat)(n)
                                })
                            }), (0, a.jsxs)(g.Property, {
                                name: "Total Time",
                                children: [v(r.totalTime), " ms"]
                            })]
                        }), (0, a.jsx)(d.ScrollerThin, {
                            className: k.inspectorContainer,
                            children: (0, a.jsx)(p.default, {
                                data: r.action
                            })
                        })]
                    })
                }
            }, {
                id: "traces",
                name: "Store Handlers",
                render(e) {
                    let {
                        actionLog: t
                    } = e;
                    return (0, a.jsx)(E, {
                        actionLog: t
                    })
                }
            }];

            function _(e) {
                let {
                    actionLog: t,
                    initialHeight: r
                } = e, i = n.useMemo(() => t.error ? [...T, {
                    id: "error",
                    name: (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(f.default, {
                            className: k.errorIcon
                        }), "Error"]
                    }),
                    render(e) {
                        let {
                            actionLog: t
                        } = e;
                        return (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)("div", {
                                className: l(k.errorToolbar, S.toolbar),
                                children: (0, a.jsx)("div", {
                                    className: S.toolbarGroup,
                                    children: (0, a.jsx)(d.Button, {
                                        className: S.toolbarButton,
                                        size: d.Button.Sizes.MIN,
                                        onClick: () => console.error(t.error),
                                        children: "Log to Console"
                                    })
                                })
                            }), (0, a.jsx)(d.ScrollerThin, {
                                className: k.inspectorContainer,
                                children: (0, a.jsx)(p.default, {
                                    data: t.error
                                })
                            })]
                        })
                    }
                }] : T, [t]), {
                    TabBar: o,
                    renderSelectedTab: s
                } = (0, x.default)({
                    tabs: i
                }, [i]);
                return (0, a.jsxs)(b.default, {
                    className: k.subPanel,
                    minHeight: 100,
                    initialHeight: r,
                    children: [(0, a.jsx)(o, {}), (0, a.jsxs)(m.default, {
                        className: l(S.headerBar, k.subPanelHeaderBar),
                        children: [(0, a.jsx)(m.default.Icon, {
                            icon: u.default,
                            tooltip: t.name
                        }), (0, a.jsx)(m.default.Title, {
                            children: t.name
                        })]
                    }), s({
                        actionLog: t
                    })]
                })
            }
            let N = [{
                key: "action",
                cellClassName: k.actionColumn,
                render(e) {
                    let {
                        actionLog: t
                    } = e;
                    return (0, a.jsxs)(a.Fragment, {
                        children: [t.error && (0, a.jsx)(f.default, {
                            className: k.errorIcon
                        }), t.name]
                    })
                }
            }, {
                key: "total time",
                cellClassName: k.totalTimeColumn,
                render(e) {
                    let {
                        actionLog: t
                    } = e;
                    return "".concat(v(t.totalTime), " ms")
                }
            }];

            function j() {
                let e = n.useRef(null),
                    t = function(e) {
                        let [t, r] = n.useState([...e.logs]), a = n.useCallback(() => r([...e.logs]), [e]);
                        return n.useEffect(() => (e.on("log", a), () => {
                            e.off("log", a)
                        }), [e, a]), t
                    }(c.default.actionLogger),
                    r = n.useMemo(() => t.map(e => ({
                        key: e.id.toString(),
                        actionLog: e
                    })), [t]),
                    [i, o] = n.useState(),
                    s = t.find(e => e.id === i);
                return (0, a.jsxs)("div", {
                    ref: e,
                    className: l(S.panel, k.panel),
                    children: [(0, a.jsx)(d.ScrollerThin, {
                        className: k.tableContainer,
                        children: (0, a.jsx)(y.default, {
                            columns: N,
                            data: r,
                            selectedRowKey: null == i ? void 0 : i.toString(),
                            onClickRow: e => o(Number.parseInt(e, 10))
                        })
                    }), null != s && (0, a.jsx)(_, {
                        actionLog: s,
                        initialHeight: null != e.current ? e.current.clientHeight / 2 : 300
                    })]
                })
            }
        },
        172248: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return m
                }
            });
            var a = r("37983"),
                n = r("884691"),
                i = r("414456"),
                l = r.n(i),
                o = r("446674"),
                s = r("77078"),
                d = r("220462"),
                c = r("676574"),
                u = r("954098"),
                f = r("694735");

            function m(e) {
                let {
                    devSettingsCategory: t
                } = e, r = (0, o.useStateFromStores)([c.default], () => c.default.allByCategory(t), [t], o.statesWillNeverBeEqual), i = n.useMemo(() => r.map(e => {
                    let [t, r, {
                        label: n
                    }] = e;
                    return (0, a.jsx)(s.FormSwitch, {
                        value: r,
                        onChange: e => (0, d.toggle)(t, e),
                        hideBorder: !0,
                        className: u.switch,
                        children: n
                    }, t)
                }), [r]);
                return (0, a.jsx)("div", {
                    className: l(f.panel, u.panel),
                    children: i
                })
            }
        },
        719086: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return R
                }
            });
            var a = r("37983"),
                n = r("884691"),
                i = r("414456"),
                l = r.n(i),
                o = r("917351"),
                s = r.n(o),
                d = r("866227"),
                c = r.n(d),
                u = r("446674"),
                f = r("77078"),
                m = r("884422"),
                h = r("483038"),
                p = r("456936"),
                g = r("144491"),
                b = r("42203"),
                y = r("923959"),
                x = r("162771"),
                k = r("220677"),
                S = r("993477"),
                v = r("879946"),
                C = r("664336"),
                E = r("928063"),
                T = r("149310"),
                _ = r("694735");

            function N(e) {
                let {
                    channelId: t,
                    highlightIds: r
                } = e, i = (0, u.useStateFromStores)([b.default], () => b.default.getChannel(t), [t]), l = n.useCallback(() => {
                    (0, g.transitionToChannel)(t)
                }, [t]), o = n.useCallback(() => {
                    let e = s.min(Array.from(r));
                    null != e && (0, p.default)(t, e)
                }, [t, r]);
                return 0 === r.size || null == i ? null : (0, a.jsxs)("div", {
                    className: T.channelRow,
                    children: [(0, a.jsx)(f.Clickable, {
                        className: T.channelName,
                        onClick: l,
                        children: (0, a.jsx)(f.Text, {
                            variant: "text-md/semibold",
                            children: i.name
                        })
                    }), (0, a.jsxs)("div", {
                        className: T.channelActions,
                        children: [(0, a.jsx)(f.Clickable, {
                            className: T.markUnread,
                            onClick: o,
                            children: (0, a.jsx)(S.default, {
                                height: 18,
                                width: 18
                            })
                        }), (0, a.jsx)(k.default, {
                            className: T.badge,
                            value: r.size
                        })]
                    })]
                })
            }

            function j(e) {
                let {
                    guildId: t
                } = e, r = (0, u.useStateFromStores)([y.default], () => y.default.getChannels(t)[y.GUILD_SELECTABLE_CHANNELS_KEY], [t]), n = (0, u.useStateFromStoresObject)([h.default], () => s(r).keyBy("channel.id").mapValues(e => {
                    let {
                        channel: t
                    } = e;
                    return h.default.getHighlightedMessageIds(t.id)
                }).value(), [r]);
                return (0, a.jsxs)(E.default, {
                    className: T.highlightsPanel,
                    initialHeight: 240,
                    children: [(0, a.jsx)(C.default, {
                        className: _.headerBar,
                        children: (0, a.jsx)(C.default.Title, {
                            children: "Channels with Highlights"
                        })
                    }), s.entries(n).map(e => {
                        let [t, r] = e;
                        return (0, a.jsx)(N, {
                            channelId: t,
                            highlightIds: r
                        }, t)
                    })]
                })
            }

            function R() {
                let e = (0, u.useStateFromStores)([x.default], () => x.default.getGuildId()),
                    t = (0, u.useStateFromStores)([h.default], () => null == e ? 0 : h.default.getLastFetchedMillis(e), [e]),
                    r = n.useCallback(() => {
                        null != e && (0, m.fetchChannelHighlights)(e)
                    }, [e]);
                return (0, a.jsxs)("div", {
                    className: l(_.panel, T.panel),
                    children: [(0, a.jsxs)("div", {
                        className: T.infoBar,
                        children: [(0, a.jsxs)(f.Text, {
                            variant: "text-md/semibold",
                            children: ["Last Fetched: ", c(t).fromNow()]
                        }), (0, a.jsx)(f.Clickable, {
                            className: T.refreshButton,
                            onClick: r,
                            children: (0, a.jsx)(v.default, {})
                        })]
                    }), null != e && (0, a.jsx)(a.Fragment, {
                        children: (0, a.jsx)(j, {
                            guildId: e
                        })
                    })]
                })
            }
        },
        50625: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return p
                }
            });
            var a = r("37983");
            r("884691");
            var n = r("420117"),
                i = r("669491"),
                l = r("841098"),
                o = r("505684"),
                s = r("49111"),
                d = r("694735");
            let c = {
                base00: i.default.colors.BACKGROUND_SECONDARY.css,
                base03: i.default.colors.TEXT_WARNING.css,
                base07: i.default.colors.TEXT_NORMAL.css,
                base08: i.default.colors.TEXT_MUTED.css,
                base09: i.default.colors.TEXT_POSITIVE.css,
                base0B: i.default.colors.TEXT_WARNING.css,
                base0D: i.default.colors.TEXT_BRAND.css
            };

            function u(e) {
                let t = {};
                for (let [r, a] of Object.entries(e)) t[r] = a;
                return t
            }
            let f = u(c),
                m = u(c);

            function h(e) {
                return s.TOKEN_REGEX.test(e) ? (0, a.jsx)(o.default, {
                    type: o.default.Types.TEXT,
                    children: () => (0, a.jsx)(a.Fragment, {
                        children: e
                    })
                }) : e
            }

            function p(e) {
                let {
                    data: t
                } = e, r = (0, l.default)();
                return (0, a.jsx)("div", {
                    className: d.inspectorWrapper,
                    children: (0, a.jsx)(n.JSONTree, {
                        data: t,
                        theme: "light" === r ? m : f,
                        invertTheme: !1,
                        valueRenderer: h
                    })
                })
            }
        },
        811199: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                DevToolsLayerContainer: function() {
                    return s
                },
                DevToolsLayerProvider: function() {
                    return d
                },
                devToolsLayerContext: function() {
                    return c
                }
            });
            var a = r("77078");
            let {
                Layer: n,
                LayerContainer: i,
                LayerProvider: l,
                layerContext: o
            } = (0, a.createLayer)("DevTools"), s = i, d = l, c = o
        },
        175768: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return u
                }
            });
            var a = r("37983"),
                n = r("884691"),
                i = r("414456"),
                l = r.n(i),
                o = r("77078"),
                s = r("811199"),
                d = r("694735"),
                c = r("186720");

            function u() {
                let e = {
                        Q4DropAnnouncementModal: async () => {
                            let {
                                default: e
                            } = await r.el("986675").then(r.bind(r, "986675"));
                            return t => (0, a.jsx)(e, {
                                renderModalProps: t
                            })
                        },
                        BOGOAnnouncementModal: async () => {
                            let {
                                default: e
                            } = await r.el("981125").then(r.bind(r, "981125"));
                            return t => (0, a.jsx)(e, {
                                renderModalProps: t
                            })
                        },
                        InventoryTryPacksModal: async () => {
                            let {
                                default: e
                            } = await r.el("953314").then(r.bind(r, "953314"));
                            return t => (0, a.jsx)(e, {
                                renderModalProps: t
                            })
                        }
                    },
                    t = Object.keys(e).map(e => ({
                        label: e,
                        value: e
                    })),
                    [i, u] = n.useState(t[0].value);
                return (0, a.jsx)(o.ScrollerThin, {
                    className: l(d.panel),
                    children: (0, a.jsx)("div", {
                        className: c.panelInner,
                        children: (0, a.jsxs)("section", {
                            className: c.section,
                            children: [(0, a.jsx)(o.Heading, {
                                variant: "heading-md/semibold",
                                children: "Open a Modal"
                            }), (0, a.jsxs)("div", {
                                className: c.inputRow,
                                children: [(0, a.jsx)(o.Select, {
                                    className: c.input,
                                    options: t,
                                    isSelected: e => i === e,
                                    placeholder: "Trial ID",
                                    serialize: e => String(e),
                                    select: e => u(e),
                                    popoutLayerContext: s.devToolsLayerContext
                                }), (0, a.jsx)(o.Button, {
                                    onClick: () => {
                                        (0, o.openModalLazy)(e[i])
                                    },
                                    children: "Open"
                                })]
                            })]
                        })
                    })
                })
            }
        },
        358344: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return b
                }
            });
            var a = r("37983"),
                n = r("884691"),
                i = r("414456"),
                l = r.n(i),
                o = r("65597"),
                s = r("872717"),
                d = r("77078"),
                c = r("850068"),
                u = r("364735"),
                f = r("357957"),
                m = r("811199"),
                h = r("694735"),
                p = r("186720");
            let g = [{
                label: "VISA",
                value: "pm_card_us"
            }, {
                label: "Mastercard",
                value: "pm_card_mastercard"
            }, {
                label: "Canadian Visa",
                value: "pm_card_ca"
            }, {
                label: "Mexican Visa",
                value: "pm_card_mx"
            }, {
                label: "German Visa",
                value: "pm_card_de"
            }, {
                label: "Brazilian Visa",
                value: "pm_card_br"
            }, {
                label: "UK Visa",
                value: "pm_card_gb"
            }, {
                label: "Japanese Visa",
                value: "pm_card_jp"
            }, {
                label: "Malaysia Visa",
                value: "pm_card_my"
            }, {
                label: "Polish Visa",
                value: "pm_card_pl"
            }];

            function b() {
                let [e, t] = n.useState("pm_card_us"), r = (0, o.default)([f.default], () => f.default.paymentSources), i = Object.values(r), u = async () => {
                    let t = e;
                    "" === t && (t = "pm_card_us"), await s.default.post({
                        url: "/debug/payment-source",
                        body: {
                            token: t
                        }
                    }), await (0, c.fetchPaymentSources)()
                }, b = async () => {
                    await s.default.delete("/debug/payment-source"), await (0, c.fetchPaymentSources)()
                };
                return n.useEffect(() => {
                    (0, c.fetchPaymentSources)()
                }, []), (0, a.jsx)(d.ScrollerThin, {
                    className: l(h.panel),
                    children: (0, a.jsxs)("div", {
                        className: p.panelInner,
                        children: [(0, a.jsxs)(d.Text, {
                            style: {
                                marginBottom: "16px"
                            },
                            variant: "text-lg/bold",
                            children: [" ", "Manage Payment Sources", " "]
                        }), (0, a.jsxs)("div", {
                            className: p.buttons,
                            children: [(0, a.jsx)(d.Text, {
                                variant: "text-md/normal",
                                children: " Card Type "
                            }), (0, a.jsx)(d.Select, {
                                serialize: e => e,
                                isSelected: t => t === e,
                                options: g,
                                select: t,
                                popoutLayerContext: m.devToolsLayerContext
                            }), (0, a.jsx)(d.Button, {
                                size: d.Button.Sizes.SMALL,
                                onClick: u,
                                children: "Create Stripe Credit Card"
                            }), i.length > 0 && (0, a.jsx)(d.Button, {
                                size: d.Button.Sizes.SMALL,
                                onClick: b,
                                children: "Delete All Payment Sources"
                            })]
                        }), (0, a.jsx)(d.Text, {
                            style: {
                                marginTop: "16px",
                                marginBottom: "16px"
                            },
                            variant: "text-md/normal",
                            children: "Existing Payment Sources"
                        }), i.map(e => (0, a.jsx)(y, {
                            paymentSource: e
                        }, e.id))]
                    })
                })
            }

            function y(e) {
                let {
                    paymentSource: t
                } = e;
                return (0, a.jsxs)("div", {
                    className: p.inputRow,
                    children: [(0, a.jsx)(u.default, {
                        locale: "en-US",
                        paymentSource: t
                    }, t.id), (0, a.jsx)("img", {
                        alt: t.country,
                        style: {
                            marginRight: 5,
                            height: 25
                        },
                        src: k(t.country)
                    })]
                })
            }
            let x = ["AN", "MI", "TP"],
                k = e => {
                    if (null == e) return "";
                    if (x.includes(e)) return "https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f30e.svg";
                    let t = e.toUpperCase().split("").map(e => (127397 + e.charCodeAt(0)).toString(16)).join("-");
                    return "https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/".concat(t, ".svg")
                }
        },
        34971: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return v
                }
            });
            var a = r("37983");
            r("884691");
            var n = r("414456"),
                i = r.n(n),
                l = r("316693"),
                o = r("446674"),
                s = r("77078"),
                d = r("679653"),
                c = r("42203"),
                u = r("305961"),
                f = r("957255"),
                m = r("18494"),
                h = r("162771"),
                p = r("36694"),
                g = r("945330"),
                b = r("465305"),
                y = r("606762"),
                x = r("96896"),
                k = r("694735");

            function S(e) {
                let {
                    title: t,
                    can: r
                } = e, n = r ? p.default : g.default, l = (0, a.jsx)("div", {
                    className: i(x.iconOuter, r ? x.iconCheck : x.iconCross),
                    children: (0, a.jsx)(n, {
                        className: x.icon
                    })
                });
                return (0, a.jsxs)("div", {
                    className: x.scope,
                    children: [l, (0, a.jsx)("div", {
                        className: x.scopeInner,
                        children: (0, a.jsx)(s.Text, {
                            variant: "text-md/normal",
                            children: t
                        })
                    })]
                })
            }

            function v() {
                let e = (0, o.useStateFromStores)([m.default], () => m.default.getChannelId()),
                    t = (0, o.useStateFromStores)([h.default], () => h.default.getGuildId()),
                    r = (0, o.useStateFromStores)([c.default], () => c.default.getChannel(e)),
                    n = (0, o.useStateFromStores)([u.default], () => u.default.getGuild(t)),
                    p = (0, o.useStateFromStores)([f.default], () => f.default.computePermissions(r)),
                    g = (0, o.useStateFromStores)([f.default], () => f.default.computePermissions(n)),
                    v = (0, d.default)(r, !0),
                    C = null != r ? (0, y.getChannelPermissionSpecMap)(r, !1, !0) : null,
                    E = null != n ? b.default.getGuildPermissionSpecMap(n) : null,
                    T = Object.values(null != C ? C : {}).map(e => {
                        let {
                            title: t,
                            flag: r
                        } = e, n = l.default.has(p, r);
                        return (0, a.jsx)(S, {
                            title: t,
                            can: n
                        }, t)
                    }),
                    _ = Object.values(null != E ? E : {}).map(e => {
                        let {
                            title: t,
                            flag: r
                        } = e, n = l.default.has(g, r);
                        return (0, a.jsx)(S, {
                            title: t,
                            can: n
                        }, t)
                    });
                return (0, a.jsx)("div", {
                    className: i(k.panel, x.panel),
                    children: (0, a.jsxs)("div", {
                        className: x.panelInner,
                        children: [(0, a.jsxs)("section", {
                            className: x.section,
                            children: [(0, a.jsx)(s.Heading, {
                                variant: "heading-md/semibold",
                                children: null != v ? "Permissions in ".concat(v) : "No channel selected"
                            }), T]
                        }), (0, a.jsxs)("section", {
                            className: x.section,
                            children: [(0, a.jsx)(s.Heading, {
                                variant: "heading-md/semibold",
                                children: null != n ? "Permissions in ".concat(n.name) : "No guild selected"
                            }), _]
                        })]
                    })
                })
            }
        },
        332814: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                Properties: function() {
                    return s
                },
                Property: function() {
                    return d
                },
                BooleanPropertyValue: function() {
                    return c
                }
            });
            var a = r("37983");
            r("884691");
            var n = r("414456"),
                i = r.n(n),
                l = r("77078"),
                o = r("694735");

            function s(e) {
                let {
                    className: t,
                    children: r
                } = e;
                return (0, a.jsx)("dl", {
                    className: i(o.properties, t),
                    children: r
                })
            }

            function d(e) {
                let {
                    name: t,
                    children: r
                } = e;
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)("dt", {
                        className: o.propertyName,
                        children: t
                    }), (0, a.jsx)("dd", {
                        children: r
                    })]
                })
            }

            function c(e) {
                let {
                    value: t
                } = e;
                return (0, a.jsx)(l.Checkbox, {
                    size: 16,
                    value: t,
                    shape: l.Checkbox.Shapes.SMALL_BOX,
                    displayOnly: !0
                })
            }
        },
        134034: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return d
                }
            });
            var a = r("37983");
            r("884691");
            var n = r("77078"),
                i = r("484894"),
                l = r("579921"),
                o = r("926622");
            let s = () => {
                r.el("776502").then(r.bind(r, "776502")).then(e => {
                    let {
                        openMFAModal: t
                    } = e;
                    t({
                        ticket: "ticket",
                        methods: [{
                            type: "webauthn",
                            challenge: "{}"
                        }, {
                            type: "totp",
                            backup_codes_allowed: !0
                        }, {
                            type: "sms"
                        }, {
                            type: "password"
                        }]
                    }, console.log, console.error)
                })
            };

            function d() {
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)("div", {
                        className: [l.buttonsContainer, o.marginBottom20].join(" "),
                        children: (0, a.jsx)(i.OverridePremiumTypeDropDown, {
                            isDevTools: !0
                        })
                    }), (0, a.jsx)("div", {
                        className: [l.buttonsContainer, o.marginBottom20].join(" "),
                        children: (0, a.jsx)(n.Button, {
                            onClick: s,
                            children: "Launch MFA"
                        })
                    })]
                })
            }
        },
        79953: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return C
                }
            });
            var a = r("37983"),
                n = r("884691"),
                i = r("414456"),
                l = r.n(i),
                o = r("446674"),
                s = r("77078"),
                d = r("810567"),
                c = r("547896"),
                u = r("664336"),
                f = r("50625"),
                m = r("928063"),
                h = r("109475"),
                p = r("724209"),
                g = r("694735"),
                b = r("435275");

            function y(e, t) {
                return e.store.getName().localeCompare(t.store.getName())
            }

            function x(e) {
                let {
                    store: t,
                    dataGetter: r
                } = e, [i, l] = n.useState(r(t));
                return n.useEffect(() => {
                    let e = () => l(r(t));
                    return e(), t.addChangeListener(e), () => {
                        t.removeChangeListener(e)
                    }
                }, [t, r]), (0, a.jsx)(s.ScrollerThin, {
                    className: b.inspectorContainer,
                    children: (0, a.jsx)(f.default, {
                        data: i
                    })
                })
            }
            let k = [{
                    key: "name",
                    cellClassName: b.eventColumn,
                    render(e) {
                        let {
                            store: t
                        } = e;
                        return t.getName()
                    }
                }],
                S = [{
                    id: "local",
                    name: "Local Variables",
                    render(e) {
                        let {
                            store: t
                        } = e;
                        return null == t.__getLocalVars ? (0, a.jsxs)("div", {
                            className: b.inspectorContainer,
                            children: ["Store is missing ", (0, a.jsx)("code", {
                                children: "__getLocalVars"
                            }), " method."]
                        }) : (0, a.jsx)(x, {
                            store: t,
                            dataGetter: e => e.__getLocalVars()
                        })
                    }
                }, {
                    id: "instance",
                    name: "Store Instance",
                    render(e) {
                        let {
                            store: t
                        } = e;
                        return (0, a.jsx)(x, {
                            store: t,
                            dataGetter: e => e
                        })
                    }
                }];

            function v(e) {
                let {
                    store: t,
                    initialHeight: r
                } = e, {
                    TabBar: n,
                    renderSelectedTab: i
                } = (0, p.default)({
                    tabs: S
                }, []);
                return (0, a.jsxs)(m.default, {
                    className: b.subPanel,
                    minHeight: 100,
                    initialHeight: r,
                    children: [(0, a.jsx)(n, {}), (0, a.jsxs)(u.default, {
                        className: l(g.headerBar, b.subPanelHeaderBar),
                        children: [(0, a.jsx)(u.default.Icon, {
                            icon: c.default,
                            tooltip: t.getName()
                        }), (0, a.jsx)(u.default.Title, {
                            children: t.getName()
                        })]
                    }), i({
                        store: t
                    })]
                })
            }

            function C() {
                let e = n.useRef(null),
                    [t, r] = n.useState(""),
                    i = o.Store.getAll(),
                    c = n.useMemo(() => i.map(e => ({
                        key: e._dispatchToken,
                        store: e
                    })).sort(y), [i]),
                    u = c.filter(e => (function(e, t) {
                        let {
                            store: r
                        } = e;
                        return r.getName().toLowerCase().includes(t.toLowerCase())
                    })(e, t)),
                    [f, m] = n.useState(),
                    p = i.find(e => e._dispatchToken === f);
                return (0, a.jsxs)("div", {
                    ref: e,
                    className: l(g.panel, b.panel),
                    children: [(0, a.jsx)("div", {
                        className: b.toolbar,
                        children: (0, a.jsx)(d.default, {
                            className: b.searchBar,
                            size: d.default.Sizes.SMALL,
                            query: t,
                            onChange: r,
                            onClear: () => r(""),
                            placeholder: "Search stores",
                            "aria-label": "Search stores"
                        })
                    }), (0, a.jsx)(s.ScrollerThin, {
                        className: b.tableContainer,
                        children: (0, a.jsx)(h.default, {
                            columns: k,
                            data: u,
                            selectedRowKey: f,
                            onClickRow: m
                        })
                    }), null != p && (0, a.jsx)(v, {
                        store: p,
                        initialHeight: null != e.current ? e.current.clientHeight / 2 : 300
                    })]
                })
            }
        },
        928063: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return c
                }
            });
            var a = r("37983"),
                n = r("884691"),
                i = r("414456"),
                l = r.n(i),
                o = r("594203"),
                s = r("693477");

            function d(e) {
                let {
                    resizableNode: t,
                    minHeight: r,
                    onResize: n
                } = e, i = (0, o.default)({
                    minDimension: r,
                    resizableDomNodeRef: t,
                    onElementResize: n,
                    orientation: o.ResizeOrientation.VERTICAL_TOP,
                    usePointerEvents: !0
                });
                return (0, a.jsx)("div", {
                    onPointerDown: i,
                    className: s.resizeHandle
                })
            }

            function c(e) {
                let {
                    children: t,
                    className: r,
                    initialHeight: i,
                    minHeight: o
                } = e, c = n.useRef(null), [u, f] = n.useState(i);
                return (0, a.jsxs)("div", {
                    ref: c,
                    className: s.container,
                    style: {
                        minHeight: o,
                        height: u
                    },
                    children: [(0, a.jsx)(d, {
                        resizableNode: c,
                        minHeight: o,
                        onResize: f
                    }), (0, a.jsx)("div", {
                        className: l(s.subPanelContent, r),
                        children: t
                    })]
                })
            }
        },
        388557: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return k
                }
            });
            var a = r("37983"),
                n = r("884691"),
                i = r("414456"),
                l = r.n(i),
                o = r("65597"),
                s = r("872717"),
                d = r("77078"),
                c = r("850068"),
                u = r("521012"),
                f = r("811199"),
                m = r("49111"),
                h = r("694735"),
                p = r("186720");
            let g = [{
                    label: "Nitro Monthly",
                    value: "511651880837840896"
                }, {
                    label: "Nitro Yearly",
                    value: "511651885459963904"
                }, {
                    label: "Nitro Classic Monthly",
                    value: "511651871736201216"
                }, {
                    label: "Nitro Classic Yearly",
                    value: "511651876987469824"
                }, {
                    label: "Basic Monthly",
                    value: "978380692553465866"
                }, {
                    label: "Basic Yearly",
                    value: "1024422698568122368"
                }],
                b = {
                    [m.SubscriptionStatusTypes.UNPAID]: "Unpaid",
                    [m.SubscriptionStatusTypes.ACTIVE]: "Active",
                    [m.SubscriptionStatusTypes.PAST_DUE]: "Past Due",
                    [m.SubscriptionStatusTypes.CANCELED]: "Canceled",
                    [m.SubscriptionStatusTypes.ENDED]: "Ended",
                    [m.SubscriptionStatusTypes.ACCOUNT_HOLD]: "Account Hold"
                },
                y = [{
                    label: "Unpaid",
                    value: m.SubscriptionStatusTypes.UNPAID
                }, {
                    label: "Active",
                    value: m.SubscriptionStatusTypes.ACTIVE
                }, {
                    label: "Past Due",
                    value: m.SubscriptionStatusTypes.PAST_DUE
                }, {
                    label: "Canceled",
                    value: m.SubscriptionStatusTypes.CANCELED
                }, {
                    label: "Ended",
                    value: m.SubscriptionStatusTypes.ENDED
                }, {
                    label: "Account Hold",
                    value: m.SubscriptionStatusTypes.ACCOUNT_HOLD
                }],
                x = {
                    "511651880837840896": "Nitro Monthly",
                    "511651885459963904": "Nitro Yearly",
                    "511651871736201216": "Nitro Classic Monthly",
                    "511651876987469824": "Nitro Classic Yearly",
                    "978380692553465866": "Basic Monthly",
                    "1024422698568122368": "Basic Yearly"
                };

            function k() {
                let [e, t] = n.useState("511651880837840896"), r = (0, o.default)([u.default], () => u.default.getPremiumSubscription()), i = async () => {
                    await s.default.post({
                        url: "/debug/subscription",
                        body: {
                            plan_id: e
                        }
                    }), await (0, c.fetchSubscriptions)()
                }, m = async () => {
                    await s.default.delete("/debug/subscription"), await (0, c.fetchSubscriptions)()
                };
                return (0, a.jsx)(d.ScrollerThin, {
                    className: l(h.panel),
                    children: (0, a.jsxs)("div", {
                        className: p.panelInner,
                        children: [(0, a.jsx)(d.Text, {
                            style: {
                                marginBottom: "16px"
                            },
                            variant: "text-lg/bold",
                            children: "Manage Subscription"
                        }), (0, a.jsxs)("section", {
                            className: p.buttons,
                            children: [null == r && (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)(d.Text, {
                                    variant: "text-md/normal",
                                    children: " Subscription Type"
                                }), (0, a.jsx)(d.Select, {
                                    serialize: e => e,
                                    isSelected: t => t === e,
                                    options: g,
                                    select: t,
                                    popoutLayerContext: f.devToolsLayerContext
                                }), (0, a.jsx)(d.Button, {
                                    size: d.Button.Sizes.SMALL,
                                    onClick: i,
                                    children: "Create Subscription"
                                })]
                            }), (0, a.jsx)(d.Button, {
                                size: d.Button.Sizes.SMALL,
                                onClick: m,
                                children: "Delete Subscription"
                            })]
                        }), null != r && (0, a.jsx)(S, {
                            subscription: r
                        })]
                    })
                })
            }

            function S(e) {
                let {
                    subscription: t
                } = e, r = e => {
                    if (null == e && (e = t.status), e in b) return b[e];
                    throw Error("Unknown status")
                }, n = async e => {
                    await s.default.patch({
                        url: "/debug/subscription",
                        body: {
                            subscription_status: e
                        }
                    })
                }, i = t.planIdFromItems in {
                    "978380692553465866": !0,
                    "1024422698568122368": !0
                };
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(d.Text, {
                        style: {
                            marginTop: "15px"
                        },
                        variant: "text-md/normal",
                        children: "Existing Subscription"
                    }), (0, a.jsxs)("div", {
                        className: l(p.card, i ? p.gradientWrapperTier0 : p.gradientWrapperTier2),
                        children: [(0, a.jsxs)(d.Text, {
                            variant: "text-md/normal",
                            children: [" Subscription Type: ", (() => {
                                let e = t.planIdFromItems;
                                if (null == e) throw Error("No plan id");
                                if (e in x) return x[e];
                                throw Error("Unknown plan id")
                            })(), " "]
                        }), (0, a.jsxs)(d.Text, {
                            variant: "text-md/normal",
                            children: [" Subscription ID ", t.id, " "]
                        }), (0, a.jsxs)(d.Text, {
                            style: {
                                marginBottom: "15px"
                            },
                            variant: "text-md/normal",
                            children: ["Subscription Status: ", r()]
                        }), (0, a.jsx)(d.Select, {
                            serialize: e => r(e),
                            isSelected: e => e === t.status,
                            options: y,
                            select: n,
                            popoutLayerContext: f.devToolsLayerContext
                        })]
                    })]
                })
            }
        },
        109475: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return c
                }
            });
            var a = r("37983"),
                n = r("884691"),
                i = r("414456"),
                l = r.n(i),
                o = r("77078"),
                s = r("158352"),
                d = r("694735");

            function c(e) {
                let {
                    columns: t,
                    rowComponent: r,
                    headerClassName: i,
                    stickyHeader: c,
                    onClickRow: u,
                    selectedRowKey: f,
                    ...m
                } = e, h = n.useMemo(() => t.map(e => ({
                    renderHeader: () => (0, a.jsx)(o.Text, {
                        variant: "text-sm/semibold",
                        children: e.key
                    }),
                    ...e
                })), [t]);
                return (0, a.jsx)(s.default, {
                    ...m,
                    columns: h,
                    rowComponent: null != r ? r : e => {
                        let {
                            item: t,
                            children: r
                        } = e, n = l(d.tableRow, {
                            [d.selectedTableRow]: t.key === f
                        });
                        return null != u ? (0, a.jsx)(o.Clickable, {
                            className: n,
                            onClick: () => u(t.key),
                            children: r
                        }) : (0, a.jsx)("div", {
                            className: n,
                            children: r
                        })
                    },
                    headerClassName: l(d.tableHeader, i),
                    stickyHeader: null == c || c
                })
            }
        },
        238161: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return A
                }
            });
            var a = r("37983"),
                n = r("884691"),
                i = r("414456"),
                l = r.n(i),
                o = r("872717"),
                s = r("151426"),
                d = r("77078"),
                c = r("456015"),
                u = r("872173"),
                f = r("340412"),
                m = r("413709"),
                h = r("830031"),
                p = r("228220"),
                g = r("306160"),
                b = r("719923"),
                y = r("811199"),
                x = r("49111"),
                k = r("646718"),
                S = r("694735"),
                v = r("186720");
            let C = async () => {
                try {
                    let {
                        body: e
                    } = await o.default.get({
                        url: x.Endpoints.USER_OFFER_IDS
                    });
                    return e
                } catch (e) {
                    return []
                }
            }, E = async (e, t) => {
                try {
                    await o.default.post({
                        url: x.Endpoints.CREATE_USER_OFFER(e, t)
                    })
                } catch {} finally {
                    await (0, c.fetchUserOffer)()
                }
            }, T = async (e, t) => {
                try {
                    await o.default.delete({
                        url: x.Endpoints.DELETE_USER_OFFER(e, t)
                    })
                } catch {} finally {
                    await (0, c.fetchUserOffer)()
                }
            }, _ = async (e, t) => {
                try {
                    await o.default.post({
                        url: x.Endpoints.UNACK_USER_OFFER(e, t)
                    })
                } catch {} finally {
                    await (0, c.fetchUserOffer)()
                }
            }, N = async () => {
                try {
                    let {
                        body: e
                    } = await o.default.get({
                        url: x.Endpoints.USER_OFFERS
                    });
                    return e
                } catch (e) {
                    return {
                        trial: [],
                        discount: []
                    }
                }
            }, j = async () => {
                try {
                    await o.default.delete({
                        url: x.Endpoints.USER_OFFERS
                    })
                } catch {} finally {
                    await f.default.forceReset(), await (0, c.fetchUserOffer)()
                }
            };

            function R(e) {
                var t, r, i, o;
                let {
                    offer: s,
                    offerOptions: u,
                    forceRefetch: f
                } = e, [y, x] = n.useState(!1), [S, C] = n.useState(!1), [E, N] = n.useState(!1), [j, R] = n.useState(!1);
                n.useEffect(() => {
                    E && R(!0);
                    let e = setTimeout(() => {
                        R(!1)
                    }, 500);
                    return () => {
                        clearTimeout(e)
                    }
                }, [E]);
                let {
                    id: w,
                    expires_at: A,
                    redeemed_at: O,
                    trial_id: I,
                    subscription_trial: P
                } = s, M = null !== (r = null === (t = u.find(e => {
                    let {
                        value: t
                    } = e;
                    return t === I
                })) || void 0 === t ? void 0 : t.label) && void 0 !== r ? r : "Unknown", L = null != A, D = null != A && new Date(A).getTime() < Date.now(), B = (null == P ? void 0 : P.sku_id) === k.PremiumSubscriptionSKUs.TIER_0, G = async () => {
                    N(!0), L ? await _(w, "trial") : await (0, c.acknowledgeUserOffer)(s), f(), N(!1)
                };
                n.useEffect(() => {
                    if (y) {
                        let e = setTimeout(() => {
                            x(!1)
                        }, 3e3);
                        return () => {
                            clearTimeout(e)
                        }
                    }
                    if (S) {
                        let e = setTimeout(() => {
                            C(!1)
                        }, 3e3);
                        return () => {
                            clearTimeout(e)
                        }
                    }
                }, [y, S]);
                let U = "Active";
                return L && (U = "Acknowledged"), D && (U = "Expired"), (0, a.jsxs)("div", {
                    className: l(v.card, B ? v.gradientWrapperTier0 : v.gradientWrapperTier2),
                    children: [(0, a.jsxs)("div", {
                        className: l(v.row, v.nameRow),
                        children: [(0, a.jsx)(d.Heading, {
                            variant: "heading-lg/semibold",
                            color: "always-white",
                            children: M
                        }), (0, a.jsx)(d.Clickable, {
                            onClick: async () => {
                                N(!0), await T(w, "trial"), f(), N(!1)
                            },
                            children: (0, a.jsx)(p.default, {
                                className: l(v.icon, v.trashIcon)
                            })
                        })]
                    }), (0, a.jsxs)(d.Clickable, {
                        className: l(v.row, v.idRow),
                        onClick: () => {
                            (0, g.copy)(w), x(!0)
                        },
                        children: [(0, a.jsxs)(d.Text, {
                            variant: "eyebrow",
                            color: "always-white",
                            children: ["Offer: ", w]
                        }), y ? (0, a.jsx)(h.default, {
                            className: l(v.icon, v.noMargin)
                        }) : (0, a.jsx)(m.default, {
                            className: v.icon
                        })]
                    }), (0, a.jsxs)(d.Clickable, {
                        className: l(v.row, v.idRow),
                        onClick: () => {
                            (0, g.copy)(I), C(!0)
                        },
                        children: [(0, a.jsxs)(d.Text, {
                            variant: "eyebrow",
                            color: "always-white",
                            children: ["Trial: ", I]
                        }), S ? (0, a.jsx)(h.default, {
                            className: l(v.icon, v.noMargin)
                        }) : (0, a.jsx)(m.default, {
                            className: v.icon
                        })]
                    }), (0, a.jsx)("div", {
                        children: (0, a.jsxs)(d.Text, {
                            variant: "eyebrow",
                            color: "always-white",
                            children: ["Trial Length:", " ", (0, b.formatIntervalDuration)({
                                intervalType: null !== (i = null == P ? void 0 : P.interval) && void 0 !== i ? i : k.SubscriptionIntervalTypes.MONTH,
                                intervalCount: null !== (o = null == P ? void 0 : P.interval_count) && void 0 !== o ? o : 1,
                                capitalize: !1
                            })]
                        })
                    }), (0, a.jsxs)("div", {
                        className: v.badgeContainer,
                        children: [(0, a.jsx)(d.Clickable, {
                            onClick: G,
                            className: l(v.badge, v.clickable, {
                                [v.acked]: L,
                                [v.expired]: D
                            }),
                            children: (0, a.jsx)(d.Text, {
                                variant: "eyebrow",
                                color: "Acknowledged" === U ? void 0 : "always-white",
                                children: U
                            })
                        }), null != O && (0, a.jsx)("div", {
                            className: l(v.badge, v.badgeBottom, v.redeemed),
                            children: (0, a.jsx)(d.Text, {
                                variant: "eyebrow",
                                color: "always-white",
                                children: "Redeemed"
                            })
                        })]
                    }), (0, a.jsx)("div", {
                        className: l(v.loadingContainer, {
                            [v.isLoading]: E || j
                        }),
                        children: (0, a.jsx)(d.Spinner, {})
                    })]
                })
            }

            function w(e) {
                var t, r;
                let {
                    offer: i,
                    offerOptions: o,
                    forceRefetch: s
                } = e, [u, f] = n.useState(!1), [b, y] = n.useState(!1), [x, k] = n.useState(!1), [S, C] = n.useState(!1);
                n.useEffect(() => {
                    x && C(!0);
                    let e = setTimeout(() => {
                        C(!1)
                    }, 500);
                    return () => {
                        clearTimeout(e)
                    }
                }, [x]);
                let {
                    id: E,
                    expires_at: N,
                    applied_at: j,
                    discount_id: R,
                    discount: w
                } = i, A = null !== (r = null === (t = o.find(e => {
                    let {
                        value: t
                    } = e;
                    return t === R
                })) || void 0 === t ? void 0 : t.label) && void 0 !== r ? r : "Unknown", O = null != N, I = null != N && new Date(N).getTime() < Date.now(), P = async () => {
                    k(!0), O ? await _(E, "discount") : await (0, c.acknowledgeUserOffer)(void 0, i), s(), k(!1)
                };
                n.useEffect(() => {
                    if (u) {
                        let e = setTimeout(() => {
                            f(!1)
                        }, 3e3);
                        return () => {
                            clearTimeout(e)
                        }
                    }
                    if (b) {
                        let e = setTimeout(() => {
                            y(!1)
                        }, 3e3);
                        return () => {
                            clearTimeout(e)
                        }
                    }
                }, [u, b]);
                let M = "Active";
                return I && (M = "Expired"), O && (M = "Acknowledged"), (0, a.jsxs)("div", {
                    className: l(v.card, v.discount),
                    children: [(0, a.jsxs)("div", {
                        className: l(v.row, v.nameRow),
                        children: [(0, a.jsx)(d.Heading, {
                            variant: "heading-lg/semibold",
                            color: "text-normal",
                            children: A
                        }), (0, a.jsx)(d.Clickable, {
                            onClick: async () => {
                                k(!0), await T(E, "discount"), s(), k(!1)
                            },
                            children: (0, a.jsx)(p.default, {
                                className: l(v.icon, v.trashIcon)
                            })
                        })]
                    }), (0, a.jsxs)(d.Clickable, {
                        className: l(v.row, v.idRow),
                        onClick: () => {
                            (0, g.copy)(E), f(!0)
                        },
                        children: [(0, a.jsxs)(d.Text, {
                            variant: "eyebrow",
                            color: "text-normal",
                            children: ["Offer: ", E]
                        }), u ? (0, a.jsx)(h.default, {
                            className: l(v.icon, v.noMargin)
                        }) : (0, a.jsx)(m.default, {
                            className: v.icon
                        })]
                    }), (0, a.jsxs)(d.Clickable, {
                        className: l(v.row, v.idRow),
                        onClick: () => {
                            (0, g.copy)(R), y(!0)
                        },
                        children: [(0, a.jsxs)(d.Text, {
                            variant: "eyebrow",
                            color: "text-normal",
                            children: ["Discount: ", R]
                        }), b ? (0, a.jsx)(h.default, {
                            className: l(v.icon, v.noMargin)
                        }) : (0, a.jsx)(m.default, {
                            className: v.icon
                        })]
                    }), (0, a.jsx)("div", {
                        children: (0, a.jsxs)(d.Text, {
                            variant: "eyebrow",
                            color: "text-normal",
                            children: [w.amount, "% off"]
                        })
                    }), (0, a.jsxs)("div", {
                        className: v.badgeContainer,
                        children: [(0, a.jsx)(d.Clickable, {
                            onClick: P,
                            className: l(v.badge, v.clickable, {
                                [v.acked]: O,
                                [v.expired]: I
                            }),
                            children: (0, a.jsx)(d.Text, {
                                variant: "eyebrow",
                                color: "Acknowledged" === M ? void 0 : "always-white",
                                children: M
                            })
                        }), null != j && (0, a.jsx)("div", {
                            className: l(v.badge, v.badgeBottom, v.redeemed),
                            children: (0, a.jsx)(d.Text, {
                                variant: "eyebrow",
                                color: "always-white",
                                children: "Applied"
                            })
                        })]
                    }), (0, a.jsx)("div", {
                        className: l(v.loadingContainer, {
                            [v.isLoading]: x || S
                        }),
                        children: (0, a.jsx)(d.Spinner, {})
                    })]
                })
            }

            function A() {
                let [e, t] = n.useState([]), [r, i] = n.useState([]), [o, m] = n.useState(), [h, p] = n.useState(), [g, b] = n.useState([]), [x, k] = n.useState([]), [T, _] = n.useState(!0);
                n.useEffect(() => {
                    (0 === e.length || 0 === r.length || T) && C().then(e => {
                        let r = Object.keys(e.trial).map(t => ({
                                label: t,
                                value: e.trial[t]
                            })),
                            a = Object.keys(e.discount).map(t => ({
                                label: t,
                                value: e.discount[t]
                            }));
                        t(r), i(a), null == o && m(r[0].value), null == h && p(a[0].value)
                    })
                }, [e, r, o, h, T]), n.useEffect(() => {
                    T && (_(!1), f.default.forceReset(), (0, c.fetchUserOffer)(), N().then(e => {
                        let t = e.trial.sort((e, t) => e.id.localeCompare(t.id));
                        b(t);
                        let r = e.discount.sort((e, t) => e.id.localeCompare(t.id));
                        k(r)
                    }))
                }, [T]);
                let A = async () => {
                    null != o && (await E(o, "trial"), _(!0))
                }, O = async () => {
                    null != h && (await E(h, "discount"), _(!0))
                }, I = async () => {
                    await j(), _(!0)
                };
                return (0, a.jsx)(d.ScrollerThin, {
                    className: l(S.panel),
                    children: (0, a.jsxs)("div", {
                        className: v.panelInner,
                        children: [(0, a.jsxs)("section", {
                            className: v.section,
                            children: [(0, a.jsx)(d.Heading, {
                                variant: "heading-md/semibold",
                                children: "Utils"
                            }), (0, a.jsxs)("div", {
                                className: v.buttons,
                                children: [(0, a.jsx)(d.Button, {
                                    size: d.Button.Sizes.SMALL,
                                    onClick: I,
                                    children: "Clear all User Offers"
                                }), (0, a.jsx)(d.Button, {
                                    size: d.Button.Sizes.SMALL,
                                    onClick: () => (0, u.removeDismissedContent)(s.DismissibleContent.PREMIUM_MOBILE_TRIAL_USER_SETTINGS_AVATAR_BADGE),
                                    children: "Clear Mobile Trials DismissibleContent"
                                }), (0, a.jsx)(d.Button, {
                                    size: d.Button.Sizes.SMALL,
                                    onClick: () => _(!0),
                                    children: "Refresh DevTools"
                                })]
                            })]
                        }), (0, a.jsxs)("section", {
                            className: v.section,
                            children: [(0, a.jsx)(d.Heading, {
                                variant: "heading-md/semibold",
                                children: "Create a Trial Offer"
                            }), (0, a.jsxs)("div", {
                                className: v.inputRow,
                                children: [(0, a.jsx)(d.Select, {
                                    className: v.input,
                                    options: e,
                                    isSelected: e => o === e,
                                    placeholder: "Trial Type",
                                    serialize: e => String(e),
                                    select: e => m(e),
                                    popoutLayerContext: y.devToolsLayerContext
                                }), (0, a.jsx)(d.Button, {
                                    onClick: A,
                                    children: "Create"
                                })]
                            })]
                        }), (0, a.jsxs)("section", {
                            className: v.section,
                            children: [(0, a.jsx)(d.Heading, {
                                variant: "heading-md/semibold",
                                children: "Create a Discount Offer"
                            }), (0, a.jsxs)("div", {
                                className: v.inputRow,
                                children: [(0, a.jsx)(d.Select, {
                                    className: v.input,
                                    options: r,
                                    isSelected: e => h === e,
                                    placeholder: "Discount Type",
                                    serialize: e => String(e),
                                    select: e => p(e),
                                    popoutLayerContext: y.devToolsLayerContext
                                }), (0, a.jsx)(d.Button, {
                                    onClick: O,
                                    children: "Create"
                                })]
                            })]
                        }), g.length > 0 && (0, a.jsxs)("section", {
                            className: v.section,
                            children: [(0, a.jsx)(d.Heading, {
                                variant: "heading-md/semibold",
                                children: "Existing Trial Offers"
                            }), g.map(t => (0, a.jsx)(R, {
                                offer: t,
                                offerOptions: e,
                                forceRefetch: () => _(!0)
                            }, t.id))]
                        }), x.length > 0 && (0, a.jsxs)("section", {
                            className: v.section,
                            children: [(0, a.jsx)(d.Heading, {
                                variant: "heading-md/semibold",
                                children: "Existing Discount Offers"
                            }), x.map(e => (0, a.jsx)(w, {
                                offer: e,
                                offerOptions: r,
                                forceRefetch: () => _(!0)
                            }, e.id))]
                        })]
                    })
                })
            }
        },
        20950: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return w
                }
            });
            var a = r("37983"),
                n = r("884691"),
                i = r("414456"),
                l = r.n(i),
                o = r("448105"),
                s = r.n(o),
                d = r("866227"),
                c = r.n(d),
                u = r("446674"),
                f = r("77078"),
                m = r("913144"),
                h = r("810567"),
                p = r("756609"),
                g = r("228220"),
                b = r("664336"),
                y = r("888400"),
                x = r("398570"),
                k = r("370492"),
                S = r("332814"),
                v = r("928063"),
                C = r("109475"),
                E = r("724209"),
                T = r("782340"),
                _ = r("185187"),
                N = r("694735");
            let j = [{
                    key: "id",
                    cellClassName: _.eventColumn,
                    render(e) {
                        let {
                            experimentId: t
                        } = e;
                        return t
                    }
                }, {
                    key: "bucket",
                    cellClassName: _.locationColumn,
                    render(e) {
                        let {
                            descriptor: t
                        } = e;
                        return t.bucket
                    }
                }, {
                    key: "timestamp",
                    cellClassName: _.locationColumn,
                    render(e) {
                        let {
                            timestamp: t
                        } = e;
                        return t.toLocaleString()
                    }
                }],
                R = [{
                    id: "details",
                    name: "Details",
                    render: e => {
                        let {
                            loggedTrigger: {
                                experimentId: t,
                                descriptor: r,
                                exposureType: n,
                                excluded: i,
                                timestamp: o,
                                location: s,
                                previouslyTracked: d
                            }
                        } = e, u = c(o);
                        return (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsxs)(b.default, {
                                className: l(N.headerBar, _.subPanelHeaderBar),
                                children: [(0, a.jsx)(b.default.Icon, {
                                    icon: p.default,
                                    tooltip: t
                                }), (0, a.jsx)(b.default.Title, {
                                    children: t
                                })]
                            }), (0, a.jsxs)(S.Properties, {
                                className: _.commonProperties,
                                children: [(0, a.jsx)(S.Property, {
                                    name: "Timestamp (local)",
                                    children: (0, a.jsx)("time", {
                                        dateTime: o.toISOString(),
                                        title: (0, y.dateFormat)(u, "LLLL"),
                                        children: (0, y.calendarFormat)(u)
                                    })
                                }), "guild" === r.type && (0, a.jsx)(S.Property, {
                                    name: "Guild ID",
                                    children: (0, a.jsx)("code", {
                                        children: r.guildId
                                    })
                                }), (0, a.jsx)(S.Property, {
                                    name: "Bucket",
                                    children: (0, a.jsx)("code", {
                                        children: r.bucket
                                    })
                                }), (0, a.jsx)(S.Property, {
                                    name: "Revision",
                                    children: (0, a.jsx)("code", {
                                        children: r.revision
                                    })
                                }), (0, a.jsx)(S.Property, {
                                    name: "Override",
                                    children: (0, a.jsx)(S.BooleanPropertyValue, {
                                        value: r.override
                                    })
                                }), (0, a.jsx)(S.Property, {
                                    name: "Exposure type",
                                    children: (0, a.jsx)("code", {
                                        children: n
                                    })
                                }), (0, a.jsx)(S.Property, {
                                    name: "Excluded",
                                    children: (0, a.jsx)(S.BooleanPropertyValue, {
                                        value: i
                                    })
                                }), (0, a.jsx)(S.Property, {
                                    name: "Previously tracked",
                                    children: (0, a.jsx)(S.BooleanPropertyValue, {
                                        value: d
                                    })
                                }), (0, a.jsx)(S.Property, {
                                    name: "Location",
                                    children: (0, a.jsx)("code", {
                                        children: s
                                    })
                                })]
                            })]
                        })
                    }
                }];

            function w() {
                let [e, t] = n.useState(""), r = n.useRef(null), i = (0, u.useStateFromStoresArray)([x.default], () => x.default.loggedTriggers), o = n.useMemo(() => i.filter(t => 0 === e.length || s(e, t.experimentId)).sort((e, t) => t.timestamp.getTime() - e.timestamp.getTime()), [i, e]), [d, c] = n.useState(void 0), p = o.find(e => e.key === d), {
                    TabBar: b,
                    renderSelectedTab: y
                } = (0, E.default)({
                    tabs: R
                }, []), S = (0, u.useStateFromStores)([x.default], () => x.default.trackTriggers), w = n.useCallback(e => {
                    m.default.dispatch({
                        type: "SET_TRACK_TRIGGERS",
                        enabled: e
                    })
                }, []);
                return (0, a.jsxs)("div", {
                    ref: r,
                    className: l(N.panel, _.panel),
                    children: [(0, a.jsxs)("div", {
                        className: _.toolbar,
                        children: [(0, a.jsx)("div", {
                            title: "Enables tracking of all triggers",
                            className: _.triggersEnable,
                            children: (0, a.jsx)(f.Switch, {
                                checked: S,
                                onChange: w,
                                className: _.toolbarSwitch
                            })
                        }), (0, a.jsx)(f.Button, {
                            className: _.toolbarButton,
                            look: f.Button.Looks.BLANK,
                            size: f.Button.Sizes.ICON,
                            onClick: k.clearAnalyticsLog,
                            children: (0, a.jsx)("span", {
                                title: T.default.Messages.CLEAR,
                                children: (0, a.jsx)(g.default, {
                                    "aria-label": T.default.Messages.CLEAR
                                })
                            })
                        }), (0, a.jsx)(h.default, {
                            className: _.searchBar,
                            query: e,
                            onChange: t,
                            onClear: () => t(""),
                            placeholder: "Search by experiment id"
                        })]
                    }), (0, a.jsx)(f.ScrollerThin, {
                        className: _.tableContainer,
                        children: (0, a.jsx)(C.default, {
                            columns: j,
                            data: o,
                            selectedRowKey: d,
                            onClickRow: c
                        })
                    }), null != p && (0, a.jsxs)(v.default, {
                        className: _.subPanel,
                        minHeight: 100,
                        initialHeight: null != r.current ? r.current.clientHeight / 2 : 300,
                        children: [(0, a.jsx)(b, {}), y({
                            loggedTrigger: p
                        })]
                    })]
                })
            }
        },
        508815: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                toggle: function() {
                    return i
                },
                clearAll: function() {
                    return l
                }
            });
            var a = r("913144"),
                n = r("916523");

            function i(e, t) {
                let r = "boolean" == typeof t ? t : !n.default.get(e);
                a.default.dispatch({
                    type: "DEV_TOOLS_DESIGN_TOGGLE_WEB_SET",
                    toggle: e,
                    value: r
                })
            }

            function l() {
                for (let e in n.default.all()) i(e, !1)
            }
        },
        724209: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return h
                }
            });
            var a = r("37983"),
                n = r("884691"),
                i = r("414456"),
                l = r.n(i),
                o = r("77078"),
                s = r("811151"),
                d = r("449008"),
                c = r("811199"),
                u = r("694735");
            let f = n.forwardRef(function(e, t) {
                let {
                    id: r,
                    selected: n,
                    onClick: i,
                    children: s
                } = e;
                return (0, a.jsx)(o.Clickable, {
                    className: l(u.tabItem, {
                        [u.selected]: n
                    }),
                    "data-tab-id": r,
                    innerRef: t,
                    onClick: i,
                    children: s
                })
            });

            function m(e) {
                let {
                    tabs: t,
                    selectedTabId: r,
                    onSelectTab: i
                } = e, l = n.useRef(null), m = n.useRef(0), h = n.useRef(new Map), [p, g] = n.useState([]), b = n.useCallback(() => {
                    var e, a, n, i;
                    if (null == l.current) return;
                    let o = [],
                        s = l.current.getBoundingClientRect().width;
                    if (s !== m.current) {
                        for (let l of (m.current = s, s -= null !== (a = null === (e = h.current.get(r)) || void 0 === e ? void 0 : e.width) && void 0 !== a ? a : 0, t)) l.id !== r && (s -= null !== (i = null === (n = h.current.get(l.id)) || void 0 === n ? void 0 : n.width) && void 0 !== i ? i : 0) < 0 && o.push(l.id);
                        g(o)
                    }
                }, [t, r]), y = n.useRef(null);
                n.useEffect(() => (y.current = new ResizeObserver(() => b()), null != l.current && y.current.observe(l.current), () => {
                    var e;
                    null === (e = y.current) || void 0 === e || e.disconnect()
                }), [b]);
                let x = n.useCallback(e => {
                    let {
                        closePopout: n
                    } = e;
                    return (0, a.jsx)(o.Menu, {
                        navId: "devtools-overflow",
                        variant: "fixed",
                        onClose: n,
                        "aria-label": "Overflowed DevTools Tabs",
                        onSelect: n,
                        children: t.map(e => {
                            let {
                                id: t,
                                name: n
                            } = e;
                            return p.includes(t) && r !== t ? (0, a.jsx)(o.MenuItem, {
                                id: t,
                                label: n,
                                action: () => i(t)
                            }, t) : null
                        }).filter(d.isNotNullish)
                    })
                }, [t, p, i, r]);
                return (0, a.jsxs)("div", {
                    className: u.tabBar,
                    ref: l,
                    children: [t.map(e => {
                        let {
                            id: t,
                            name: n
                        } = e;
                        if (!p.includes(t)) return (0, a.jsx)(f, {
                            id: t,
                            selected: r === t,
                            ref: e => {
                                var r, a, n;
                                let i = null !== (a = null === (r = h.current.get(t)) || void 0 === r ? void 0 : r.width) && void 0 !== a ? a : 0;
                                h.current.set(t, {
                                    node: e,
                                    width: null !== (n = null == e ? void 0 : e.getBoundingClientRect().width) && void 0 !== n ? n : i
                                })
                            },
                            onClick: r !== t ? () => i(t) : void 0,
                            children: n
                        }, t)
                    }).filter(d.isNotNullish), p.length > 0 && (0, a.jsx)(a.Fragment, {
                        children: (0, a.jsx)(o.Popout, {
                            layerContext: c.devToolsLayerContext,
                            renderPopout: x,
                            position: "bottom",
                            align: "right",
                            spacing: 0,
                            children: e => (0, a.jsx)(o.Button, {
                                ...e,
                                className: u.overflowChevron,
                                size: o.Button.Sizes.ICON,
                                look: o.Button.Looks.BLANK,
                                children: (0, a.jsx)(s.default, {
                                    className: u.overflowIcon,
                                    width: 16,
                                    height: 16
                                })
                            })
                        })
                    })]
                })
            }

            function h(e, t) {
                var r, i, l;
                let {
                    tabs: o,
                    initialSelectedTabId: s,
                    onChangeTab: d
                } = e, [c, u] = n.useState(null != s ? s : null === (r = o[0]) || void 0 === r ? void 0 : r.id), f = n.useCallback(() => (0, a.jsx)(m, {
                    tabs: o,
                    selectedTabId: c,
                    onSelectTab: e => {
                        u(e), null == d || d(e)
                    }
                }), [c, u, d, ...t]), h = null !== (l = null === (i = o.find(e => e.id === c)) || void 0 === i ? void 0 : i.render) && void 0 !== l ? l : () => null;
                return {
                    TabBar: f,
                    renderSelectedTab: h,
                    selectedTabId: c
                }
            }
        },
        831585: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                AutomodNonCommunityGuildsRelease: function() {
                    return n
                },
                AutomodMentionRaidLimit: function() {
                    return i
                },
                AutomodMentionRaidNotice: function() {
                    return l
                },
                AutomodCustomMessage: function() {
                    return o
                },
                AutomodServerPolicy: function() {
                    return s
                },
                AutomodUserProfile: function() {
                    return d
                }
            });
            var a = r("862205");
            let n = (0, a.createExperiment)({
                    kind: "guild",
                    id: "2022-11_automod_non_community_guilds_release",
                    label: "Automod Non-Community Guilds Release",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Automod Non-Community Guilds Release",
                        config: {
                            enabled: !0
                        }
                    }]
                }),
                i = (0, a.createExperiment)({
                    kind: "guild",
                    id: "2022-12_mention_raid_limit",
                    label: "Automod Mention Raid Limit",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Automod Mention Raid Limit",
                        config: {
                            enabled: !0
                        }
                    }]
                }),
                l = (0, a.createExperiment)({
                    kind: "guild",
                    id: "2023-01_mention_raid_notice",
                    label: "Automod Mention Raid Notice",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Automod Mention Raid Notice",
                        config: {
                            enabled: !0
                        }
                    }]
                }),
                o = (0, a.createExperiment)({
                    kind: "guild",
                    id: "2023-02_automod_custom_message",
                    label: "Automod Custom Message",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Automod Custom Message",
                        config: {
                            enabled: !0
                        }
                    }]
                }),
                s = (0, a.createExperiment)({
                    kind: "guild",
                    id: "2023-02_free_form",
                    label: "Automod Server Policy",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Automod Server Policy",
                        config: {
                            enabled: !0
                        }
                    }, {
                        id: 10,
                        label: "Automod Server Policy Rules Summarization",
                        config: {
                            enabled: !0
                        }
                    }]
                }),
                d = (0, a.createExperiment)({
                    kind: "guild",
                    id: "2023-05_automod_user_profile_ab",
                    label: "Automod on User Profile A/B",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Automod on User Profile enabled",
                        config: {
                            enabled: !0
                        }
                    }]
                })
        },
        926809: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                isInNonCommunityGuildsRollout: function() {
                    return n
                },
                useIsInNonCommunityGuildsRollout: function() {
                    return i
                },
                isInMentionRaidExperiment: function() {
                    return l
                },
                useIsMentionRaidExperimentEnabled: function() {
                    return o
                },
                isInMentionRaidNoticeExperiment: function() {
                    return s
                },
                useIsCustomMessageExperimentEnabled: function() {
                    return d
                },
                useIsServerPolicyExperimentEnabled: function() {
                    return c
                },
                useIsUserProfileRuleExperimentEnabled: function() {
                    return u
                }
            });
            var a = r("831585");

            function n(e) {
                let {
                    enabled: t
                } = a.AutomodNonCommunityGuildsRelease.getCurrentConfig({
                    guildId: e,
                    location: "988d4e_1"
                });
                return t
            }

            function i(e) {
                let {
                    enabled: t
                } = a.AutomodNonCommunityGuildsRelease.useExperiment({
                    guildId: e,
                    location: "988d4e_2"
                }, {
                    autoTrackExposure: !0
                });
                return t
            }

            function l(e) {
                let {
                    enabled: t
                } = a.AutomodMentionRaidLimit.getCurrentConfig({
                    guildId: e,
                    location: "988d4e_3"
                });
                return t
            }

            function o(e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    {
                        enabled: r
                    } = a.AutomodMentionRaidLimit.useExperiment({
                        guildId: e,
                        location: "988d4e_4"
                    }, {
                        autoTrackExposure: t
                    });
                return r
            }

            function s(e) {
                if (null == e) return !1;
                let {
                    enabled: t
                } = a.AutomodMentionRaidNotice.getCurrentConfig({
                    guildId: e,
                    location: "988d4e_5"
                });
                return t
            }

            function d(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    {
                        enabled: r
                    } = a.AutomodCustomMessage.useExperiment({
                        guildId: e,
                        location: "988d4e_6"
                    }, {
                        autoTrackExposure: t
                    });
                return r
            }

            function c(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    {
                        enabled: r
                    } = a.AutomodServerPolicy.useExperiment({
                        guildId: e,
                        location: "988d4e_7"
                    }, {
                        autoTrackExposure: t
                    });
                return r
            }

            function u(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    {
                        enabled: r
                    } = a.AutomodUserProfile.useExperiment({
                        guildId: e,
                        location: "988d4e_8"
                    }, {
                        autoTrackExposure: t
                    });
                return r
            }
        },
        348934: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                canCurrentUserManageMessageFilters: function() {
                    return d
                },
                canCurrentUserManageAutomod: function() {
                    return c
                },
                useCanCurrentUserManageAutomod: function() {
                    return u
                },
                useShowAutomodCustomBlockMessageUpsell: function() {
                    return f
                },
                useIsUserProfileRuleEnabled: function() {
                    return m
                },
                useShowAutomodUserProfileUpsell: function() {
                    return h
                }
            });
            var a = r("446674"),
                n = r("305961"),
                i = r("957255"),
                l = r("926809"),
                o = r("49111");
            let s = function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [n.default, i.default],
                    [r, a] = t,
                    s = r.getGuild(e);
                if (null == s) return !1;
                let d = s.hasFeature(o.GuildFeatures.COMMUNITY) || (0, l.isInNonCommunityGuildsRollout)(e);
                return d && a.can(o.Permissions.MANAGE_GUILD, s)
            };

            function d(e) {
                if (null == e) return !1;
                let t = s(e);
                return t
            }

            function c(e) {
                let t = s(e);
                return t
            }

            function u(e) {
                return (0, a.useStateFromStores)([n.default, i.default], () => s(e, [n.default, i.default]), [e])
            }

            function f(e) {
                var t;
                let r = (0, a.useStateFromStores)([i.default], () => i.default.can(o.Permissions.MANAGE_GUILD, e), [e]),
                    n = (0, l.useIsCustomMessageExperimentEnabled)(null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : "", !1);
                return n && r
            }

            function m(e) {
                var t;
                let r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    i = (0, a.useStateFromStores)([n.default], () => {
                        var r;
                        return null !== (t = null === (r = n.default.getGuild(e)) || void 0 === r ? void 0 : r.hasFeature(o.GuildFeatures.AUTOMOD_TRIGGER_USER_PROFILE)) && void 0 !== t && t
                    }, [e]),
                    s = (0, l.useIsUserProfileRuleExperimentEnabled)(e, r);
                return s || i
            }

            function h(e) {
                var t, r;
                let a = m(null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : "", !0),
                    n = u(null !== (r = null == e ? void 0 : e.id) && void 0 !== r ? r : "");
                return a && n
            }
        },
        456936: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return f
                }
            });
            var a = r("872717"),
                n = r("755624"),
                i = r("263024"),
                l = r("42203"),
                o = r("377253"),
                s = r("660478"),
                d = r("697218"),
                c = r("299039"),
                u = r("49111");
            async function f(e, t) {
                let r = d.default.getCurrentUser();
                if (null == r) return;
                let f = o.default.getMessages(e),
                    m = f.toArray().filter(e => 0 > c.default.compare(e.id, t)).sort((e, t) => c.default.compare(e.id, t.id)).reverse()[0],
                    h = null == m ? c.default.atPreviousMillisecond(t) : m.id,
                    p = 0;
                f.forAll(e => {
                    c.default.compare(e.id, h) > 0 && (0, s.shouldBadgeMessage)(e, r) && p++
                });
                let g = l.default.getChannel(e);
                null != g && g.isThread() && (g.isArchivedThread() && await i.default.unarchiveThread(g, !1), !n.default.hasJoined(e) && await i.default.joinThread(g, "Mark Unread")), a.default.post({
                    url: u.Endpoints.MESSAGE_ACK(e, h),
                    body: {
                        manual: !0,
                        mention_count: p
                    },
                    oldFormErrors: !0
                })
            }
        },
        95045: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return s
                },
                renderAutomodMessageMarkup: function() {
                    return d
                }
            }), r("355025");
            var a = r("367376"),
                n = r("240873"),
                i = r("49111");
            let l = new Set([i.MessageEmbedTypes.IMAGE, i.MessageEmbedTypes.GIFV]),
                o = new Set(["strong", "em", "u", "text", "inlineCode", "s", "spoiler"]);

            function s(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    r = t.formatInline ? a.default.parseInlineReply : a.default.parse;
                return function(e, t, r) {
                    var a, i;
                    let {
                        toAST: s = !1,
                        hideSimpleEmbedContent: d = !0,
                        formatInline: f = !1,
                        postProcessor: m
                    } = r, h = !1;
                    let p = e(t.content, !0, (a = t, i = r, {
                        allowLinks: null != a.webhookId || !!i.allowLinks,
                        allowEmojiLinks: null != a.webhookId,
                        channelId: a.channel_id,
                        messageId: a.id,
                        mentionChannels: a.mentionChannels,
                        isInteracting: !!i.isInteracting,
                        formatInline: !!i.formatInline,
                        noStyleAndInteraction: !!i.noStyleAndInteraction,
                        allowHeading: !!i.allowHeading,
                        allowList: !!i.allowList,
                        previewLinkTarget: !!i.previewLinkTarget,
                        disableAnimatedEmoji: !!i.disableAnimatedEmoji,
                        disableAutoBlockNewlines: !0,
                        muted: !1
                    }), (e, r) => (!Array.isArray(e) && (e = [e]), d && (e = function(e, t) {
                        if (1 !== e.length || 1 !== t.length) return e;
                        let r = e[0],
                            a = t[0];
                        return "link" === r.type && l.has(a.type) && (0, n.isEmbedInline)(a) ? [] : e
                    }(e, t.embeds)), !f && (e = function(e, t) {
                        return t ? c(e) : ("paragraph" === e[0].type && e[0].content instanceof Array && (e[0].content = c(e[0].content)), e)
                    }(e, r)), h = function(e, t) {
                        return t ? u(e) : "paragraph" === e[0].type && e[0].content instanceof Array && u(e[0].content)
                    }(e, r), f && (e = function e(t) {
                        return t.forEach(t => {
                            o.has(t.type) && null != t.content && (Array.isArray(t.content) ? e(t.content) : t.content = t.content.replace(/\n/g, " "))
                        }), t
                    }(e)), null != m && (e = m(e, r)), e));
                    return {
                        hasSpoilerEmbeds: h,
                        content: p
                    }
                }(r, e, t)
            }

            function d(e, t, r) {
                var n;
                return n = a.default.parseAutoModerationSystemMessage, n(e, !0, {
                    allowLinks: !1,
                    allowEmojiLinks: !1,
                    mentionChannels: [],
                    isInteracting: !1,
                    formatInline: !1,
                    noStyleAndInteraction: !1,
                    allowHeading: !1,
                    allowList: !1,
                    disableAutoBlockNewlines: !0,
                    highlightWord: t,
                    disableAnimatedEmoji: !1,
                    channelId: r,
                    muted: !1
                }, e => (!Array.isArray(e) && (e = [e]), e))
            }

            function c(e) {
                let t = e.some(e => "emoji" !== e.type && "customEmoji" !== e.type && "soundboard" !== e.type && ("string" != typeof e.content || "" !== e.content.trim()) && !0);
                if (t) return e;
                let r = 0;
                return (e.forEach(e => {
                    if (("emoji" === e.type || "customEmoji" === e.type || "soundboard" === e.type) && (r += 1), r > 30) return !1
                }), r > 30) ? e : (e.forEach(e => {
                    e.jumboable = !0
                }), e)
            }

            function u(e) {
                return e.some(e => "spoiler" === e.type && Array.isArray(e.content) && e.content.some(e => "link" === e.type))
            }
        },
        232268: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return l
                }
            });
            var a = r("37983");
            r("884691");
            var n = r("65597"),
                i = r("880731");

            function l(e) {
                let {
                    children: t,
                    confettiLocation: r
                } = e, l = (0, n.default)([i.default], () => i.default.isEnabled({
                    confettiLocation: r
                }));
                return l ? (0, a.jsx)(a.Fragment, {
                    children: t
                }) : null
            }
        },
        798592: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return o
                }
            });
            var a = r("884691"),
                n = r("65597"),
                i = r("526887"),
                l = r("880731");

            function o() {
                let {
                    createMultipleConfettiAt: e
                } = a.useContext(i.ConfettiCannonContext), t = (0, n.default)([l.default], () => l.default.getState()), r = a.useCallback(e => ({
                    size: {
                        type: "static-random",
                        minValue: e.confettiSize - 7,
                        maxValue: e.confettiSize + 7
                    }
                }), []), o = a.useMemo(() => ({
                    fire: (a, n, i) => {
                        var l, o;
                        let s = (null == i ? void 0 : i.settings) != null ? {
                                ...t,
                                ...i.settings
                            } : t,
                            d = r(s);
                        e(a, n, d, (null !== (l = null == i ? void 0 : i.count) && void 0 !== l ? l : s.confettiCount) * (null !== (o = null == i ? void 0 : i.countMultiplier) && void 0 !== o ? o : 1), {
                            sprite: null == i ? void 0 : i.sprite
                        })
                    }
                }), [e, r, t]);
                return o
            }
        },
        285471: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                updateClientPremiumTypeOverride: function() {
                    return n
                }
            });
            var a = r("913144");
            let n = (e, t) => {
                a.default.dispatch({
                    type: "SET_PREMIUM_TYPE_OVERRIDE",
                    premiumType: e
                }), a.default.dispatch({
                    type: "UPDATE_CLIENT_PREMIUM_TYPE",
                    user: t
                })
            }
        },
        456015: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                fetchUserOffer: function() {
                    return l
                },
                acknowledgeUserOffer: function() {
                    return o
                }
            });
            var a = r("872717"),
                n = r("913144"),
                i = r("49111");
            async function l() {
                n.default.dispatch({
                    type: "BILLING_USER_OFFER_FETCH_START"
                });
                try {
                    var e, t;
                    let r = await a.default.post({
                            url: i.Endpoints.USER_OFFER
                        }),
                        l = null !== (e = r.body.user_trial_offer) && void 0 !== e ? e : null,
                        o = null !== (t = r.body.user_discount) && void 0 !== t ? t : null;
                    return n.default.dispatch({
                        type: "BILLING_USER_OFFER_FETCH_SUCCESS",
                        userTrialOffer: l,
                        userDiscount: o
                    }), {
                        userTrialOffer: l,
                        userDiscount: o
                    }
                } catch (e) {
                    n.default.dispatch({
                        type: "BILLING_USER_OFFER_FETCH_FAIL"
                    })
                }
            }

            function o(e, t) {
                let r = null != e && null == e.expires_at ? e.id : void 0,
                    l = null != t && null == t.expires_at ? t.id : void 0;
                if (void 0 !== r || void 0 !== l) return a.default.post({
                    url: i.Endpoints.USER_OFFER_ACKNOWLEDGED,
                    body: {
                        user_trial_offer_id: r,
                        user_discount_id: l
                    },
                    oldFormErrors: !0
                }).then(e => {
                    var t, r;
                    n.default.dispatch({
                        type: "BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS",
                        userTrialOffer: null !== (t = e.body.user_trial_offer) && void 0 !== t ? t : null,
                        userDiscount: null !== (r = e.body.user_discount) && void 0 !== r ? r : null
                    })
                })
            }
        },
        178225: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                isGuildEligibleForStageChannels: function() {
                    return l
                },
                useGuildEligibleForStageChannels: function() {
                    return o
                }
            });
            var a = r("446674"),
                n = r("305961"),
                i = r("49111");

            function l(e) {
                var t;
                let [r] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [n.default];
                return !!(null === (t = r.getGuild(e)) || void 0 === t ? void 0 : t.hasFeature(i.GuildFeatures.COMMUNITY))
            }

            function o(e) {
                return (0, a.useStateFromStores)([n.default], () => l(e, [n.default]), [e])
            }
        },
        484894: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                OverridePremiumTypeDropDown: function() {
                    return u
                }
            });
            var a = r("37983");
            r("884691");
            var n = r("446674"),
                i = r("77078"),
                l = r("811199"),
                o = r("285471"),
                s = r("400205"),
                d = r("697218"),
                c = r("646718");
            let u = e => {
                let {
                    isDevTools: t = !1
                } = e, r = (0, n.useStateFromStores)([d.default], () => d.default.getCurrentUser()), u = (0, n.useStateFromStores)([s.default], () => s.default.getPremiumTypeOverride());
                return (0, a.jsxs)("div", {
                    children: [(0, a.jsx)(i.FormSection, {
                        title: "Override Client-Side Premium Type",
                        tag: i.FormTitleTags.H3,
                        children: (0, a.jsx)(i.SingleSelect, {
                            options: c.PREMIUM_TYPE_OVERRIDE_OPTIONS,
                            value: u,
                            onChange: e => {
                                (0, o.updateClientPremiumTypeOverride)(e, r)
                            },
                            popoutLayerContext: t ? l.devToolsLayerContext : void 0
                        })
                    }), (0, a.jsx)(i.Button, {
                        look: i.Button.Looks.LINK,
                        style: {
                            padding: "0"
                        },
                        onClick: () => {
                            (0, o.updateClientPremiumTypeOverride)(c.UNSELECTED_PREMIUM_TYPE_OVERRIDE, r)
                        },
                        children: "Reset premium type override"
                    })]
                })
            }
        },
        465305: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return E
                }
            });
            var a = r("200900"),
                n = r("79112"),
                i = r("746164"),
                l = r("980215"),
                o = r("250666"),
                s = r("680986"),
                d = r("867965"),
                c = r("348934"),
                u = r("520141"),
                f = r("592407"),
                m = r("819450"),
                h = r("178225"),
                p = r("300322"),
                g = r("233069"),
                b = r("305961"),
                y = r("701909"),
                x = r("49111"),
                k = r("606762"),
                S = r("782340");

            function v(e) {
                let t = (0, h.isGuildEligibleForStageChannels)(e),
                    r = (0, s.getEnableForumPermissions)(e),
                    a = (0, u.isMemberVerificationManualApproval)(e),
                    d = b.default.getGuild(e),
                    c = null != d && (0, o.isCreatorMonetizationEnabledGuild)(d),
                    f = (0, l.getClydeExperimentEnabled)(d),
                    m = i.default.getCurrentConfig({
                        guildId: e,
                        location: "permission_spec_utils"
                    }, {
                        autoTrackExposure: !1
                    }).enabled;
                return {
                    PRIORITY_SPEAKER_DESCRIPTION: S.default.Messages.ROLE_PERMISSIONS_PRIORITY_SPEAKER_DESCRIPTION_APP.format({
                        keybind: S.default.Messages.KEYBIND_PUSH_TO_TALK_PRIORITY,
                        onClick: () => {
                            n.default.open(x.UserSettingsSections.KEYBINDS)
                        }
                    }),
                    SOUNDBOARD_DESCRIPTION: S.default.Messages.ROLE_PERMISSIONS_USE_SOUNDBOARD_DESCRIPTION_LEARN_MORE.format({
                        helpCenterArticle: y.default.getArticleURL(x.HelpdeskArticles.SOUNDBOARD)
                    }),
                    showStageChannelPermissions: t,
                    showExperimental: !0,
                    showForumPermissions: r,
                    showMembershipManualApprovalPermissions: a,
                    showCreatorMonetizationAnalyticsPermission: c,
                    showClydeAIPermissions: f,
                    showVoiceChannelStatusPermission: m
                }
            }

            function C(e, t) {
                return e ? [t()] : []
            }
            var E = {
                generateChannelPermissionSpec: function(e, t, r, n) {
                    var i, o, u, h, y, C;
                    let E = (0, s.getEnableForumPermissions)(e),
                        T = (0, k.getChannelPermissionSpecMap)(t, r, E, n),
                        _ = v(e),
                        N = p.VoiceInThreadsExperiment.getCurrentConfig({
                            guildId: e,
                            location: "3ad37d_1"
                        }).enabled && g.VOICE_THREAD_PARENT_CHANNEL_TYPES.has(t.type),
                        j = (0, m.isStageVideoEnabled)(e),
                        R = (0, c.canCurrentUserManageMessageFilters)(e),
                        w = t.isMediaChannel(),
                        A = b.default.getGuild(e),
                        O = (0, l.getClydeExperimentEnabled)(A);
                    switch (t.type) {
                        case x.ChannelTypes.GUILD_CATEGORY:
                            ;
                            return [a.generateChannelGeneralSection(T, S.default.Messages.ROLE_PERMISSIONS_SECTION_GENERAL_CATEGORY), a.generateChannelMembershipSection(T, S.default.Messages.ROLE_PERMISSIONS_SECTION_MEMBERSHIP), a.generateChannelTextSection(T, S.default.Messages.ROLE_PERMISSIONS_SECTION_TEXT, {
                                showPrivateThreads: !0,
                                showCreateThreads: !0,
                                showClydeAIPermissions: O
                            }), a.generateChannelVoiceSection(T, S.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE, {
                                showVoiceChannelStatusPermission: _.showVoiceChannelStatusPermission
                            }), ...(i = _.showStageChannelPermissions, o = () => a.generateChannelStageSection(T, S.default.Messages.ROLE_PERMISSIONS_SECTION_STAGE), i ? [o()] : []), a.generateChannelEventsSection(T, S.default.Messages.ROLE_PERMISSIONS_SECTION_GUILD_EVENTS)];
                        case x.ChannelTypes.GUILD_VOICE:
                            return [a.generateChannelGeneralSection(T, S.default.Messages.ROLE_PERMISSIONS_SECTION_GENERAL_CHANNEL, {
                                showManageWebhooks: !0
                            }), a.generateChannelMembershipSection(T, S.default.Messages.ROLE_PERMISSIONS_SECTION_MEMBERSHIP), a.generateChannelVoiceSection(T, S.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE, {
                                showVoiceChannelStatusPermission: _.showVoiceChannelStatusPermission
                            }), a.generateChannelVoiceChatSection(T, S.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE_CHAT, {
                                sectionDescription: R ? S.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE_CHAT_DESCRIPTION.format({
                                    setUpAutomod: () => {
                                        f.default.open(e, x.GuildSettingsSections.GUILD_AUTOMOD)
                                    }
                                }) : void 0
                            }), a.generateChannelEventsSection(T, S.default.Messages.ROLE_PERMISSIONS_SECTION_GUILD_EVENTS)];
                        case x.ChannelTypes.GUILD_STAGE_VOICE:
                            return [a.generateChannelGeneralSection(T, S.default.Messages.ROLE_PERMISSIONS_SECTION_GENERAL_CHANNEL, {
                                showManageWebhooks: !1
                            }), a.generateChannelMembershipSection(T, S.default.Messages.ROLE_PERMISSIONS_SECTION_MEMBERSHIP), a.generateChannelStageVoiceSection(T, S.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE, j), a.generateChannelStageSection(T, S.default.Messages.ROLE_PERMISSIONS_SECTION_STAGE), a.generateChannelEventsSection(T, S.default.Messages.ROLE_PERMISSIONS_SECTION_GUILD_EVENTS), a.generateChannelVoiceChatSection(T, S.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE_CHAT, {
                                sectionDescription: R ? S.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE_CHAT_DESCRIPTION.format({
                                    setUpAutomod: () => {
                                        f.default.open(e, x.GuildSettingsSections.GUILD_AUTOMOD)
                                    }
                                }) : void 0
                            })];
                        case x.ChannelTypes.GUILD_FORUM:
                        case x.ChannelTypes.GUILD_MEDIA:
                            ;
                            let I = w ? S.default.Messages.ROLE_PERMISSIONS_SECTION_MEDIA_CHANNEL : S.default.Messages.ROLE_PERMISSIONS_SECTION_FORUMS,
                                P = w ? S.default.Messages.ROLE_PERMISSIONS_SECTION_MEDIA_CHANNEL_DESCRIPTION : S.default.Messages.ROLE_PERMISSIONS_SECTION_FORUMS_DESCRIPTION;
                            return [a.generateChannelGeneralSection(T, S.default.Messages.ROLE_PERMISSIONS_SECTION_GENERAL_CHANNEL), a.generateChannelMembershipSection(T, S.default.Messages.ROLE_PERMISSIONS_SECTION_MEMBERSHIP), a.generateChannelTextSection(T, I, {
                                showPrivateThreads: !1,
                                showCreateThreads: !1,
                                sectionDescription: R ? P.format({
                                    setUpAutomod: () => {
                                        !w && (0, d.trackForumEnableAutomodClicked)(), f.default.open(e, x.GuildSettingsSections.GUILD_AUTOMOD)
                                    }
                                }) : void 0,
                                showClydeAIPermissions: O
                            }), ...(u = N, h = () => a.generateChannelVoiceSection(T, S.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE, {
                                showVoiceChannelStatusPermission: !1
                            }), u ? [h()] : [])];
                        default:
                            ;
                            return [a.generateChannelGeneralSection(T, S.default.Messages.ROLE_PERMISSIONS_SECTION_GENERAL_CHANNEL), a.generateChannelMembershipSection(T, S.default.Messages.ROLE_PERMISSIONS_SECTION_MEMBERSHIP), a.generateChannelTextSection(T, S.default.Messages.ROLE_PERMISSIONS_SECTION_TEXT, {
                                showPrivateThreads: t.type !== x.ChannelTypes.GUILD_ANNOUNCEMENT,
                                showCreateThreads: !0,
                                showClydeAIPermissions: O
                            }), ...(y = N, C = () => a.generateChannelVoiceSection(T, S.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE, {
                                showVoiceChannelStatusPermission: !1
                            }), y ? [C()] : [])]
                    }
                },
                generateGuildPermissionSpec: function(e) {
                    var t, r;
                    let n = new Set,
                        i = e.hasFeature(x.GuildFeatures.COMMUNITY);
                    return !i && n.add(x.Permissions.VIEW_GUILD_ANALYTICS.toString()), t = a.generateGuildPermissionSpec(S.default.Messages, v(e.id)), 0 === (r = n).size ? t : t.map(e => ({
                        ...e,
                        permissions: e.permissions.filter(e => !r.has(e.flag.toString()))
                    }))
                },
                getGuildPermissionSpecMap: function(e) {
                    return a.getGuildPermissionSpec(S.default.Messages, v(e.id))
                }
            }
        },
        900731: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return a
                }
            });
            var a = (0, r("237436").defineColorTokens)({
                "button-danger-background": {
                    dark: "red.430",
                    light: "red.430"
                },
                "button-danger-background-hover": {
                    dark: "red.500",
                    light: "red.500"
                },
                "button-danger-background-active": {
                    dark: "red.530",
                    light: "red.530"
                },
                "button-danger-background-disabled": {
                    dark: "red.430",
                    light: "red.430"
                },
                "button-positive-background": {
                    dark: "green.430",
                    light: "green.430"
                },
                "button-positive-background-hover": {
                    dark: "green.500",
                    light: "green.530",
                    amoled: "green.530"
                },
                "button-positive-background-active": {
                    dark: "green.530",
                    light: "green.530"
                },
                "button-positive-background-disabled": {
                    dark: "green.430",
                    light: "green.430"
                },
                "button-secondary-background": {
                    dark: "primary.500",
                    light: "primary.430"
                },
                "button-secondary-background-hover": {
                    dark: "primary.430",
                    light: "primary.500"
                },
                "button-secondary-background-active": {
                    dark: "primary.400",
                    light: "primary.530"
                },
                "button-secondary-background-disabled": {
                    dark: "primary.500",
                    light: "primary.430"
                },
                "button-outline-danger-text": {
                    dark: "white.500",
                    light: "black.500"
                },
                "button-outline-danger-border": {
                    dark: "red.400",
                    light: "red.430"
                },
                "button-outline-danger-background": {
                    dark: {
                        color: "white.500",
                        opacity: 0
                    },
                    light: {
                        color: "white.500",
                        opacity: 0
                    }
                },
                "button-outline-danger-background-hover": {
                    dark: "red.430",
                    light: "red.430"
                },
                "button-outline-danger-text-hover": {
                    dark: "white.500",
                    light: "white.500"
                },
                "button-outline-danger-border-hover": {
                    dark: "red.430",
                    light: "red.430"
                },
                "button-outline-danger-background-active": {
                    dark: "red.460",
                    light: "red.460"
                },
                "button-outline-danger-text-active": {
                    dark: "white.500",
                    light: "white.500"
                },
                "button-outline-danger-border-active": {
                    dark: "red.430",
                    light: "red.430"
                },
                "button-outline-positive-text": {
                    dark: "white.500",
                    light: "black.500"
                },
                "button-outline-positive-border": {
                    dark: "green.360",
                    light: "green.400"
                },
                "button-outline-positive-background": {
                    dark: {
                        color: "white.500",
                        opacity: 0
                    },
                    light: {
                        color: "white.500",
                        opacity: 0
                    }
                },
                "button-outline-positive-background-hover": {
                    dark: "green.430",
                    light: "green.430"
                },
                "button-outline-positive-text-hover": {
                    dark: "white.500",
                    light: "white.500"
                },
                "button-outline-positive-border-hover": {
                    dark: "green.430",
                    light: "green.430"
                },
                "button-outline-positive-background-active": {
                    dark: "green.530",
                    light: "green.530"
                },
                "button-outline-positive-text-active": {
                    dark: "white.500",
                    light: "white.500"
                },
                "button-outline-positive-border-active": {
                    dark: "green.530",
                    light: "green.530"
                },
                "button-outline-brand-text": {
                    dark: "white.500",
                    light: "black.500"
                },
                "button-outline-brand-border": {
                    dark: "brand.500",
                    light: "brand.500"
                },
                "button-outline-brand-background": {
                    dark: {
                        color: "white.500",
                        opacity: 0
                    },
                    light: {
                        color: "white.500",
                        opacity: 0
                    }
                },
                "button-outline-brand-background-hover": {
                    dark: "brand.500",
                    light: "brand.500"
                },
                "button-outline-brand-text-hover": {
                    dark: "white.500",
                    light: "white.500"
                },
                "button-outline-brand-border-hover": {
                    dark: "brand.500",
                    light: "brand.500"
                },
                "button-outline-brand-background-active": {
                    dark: "brand.560",
                    light: "brand.560"
                },
                "button-outline-brand-text-active": {
                    dark: "white.500",
                    light: "white.500"
                },
                "button-outline-brand-border-active": {
                    dark: "brand.560",
                    light: "brand.560"
                },
                "button-outline-primary-text": {
                    dark: "white.500",
                    light: "black.500"
                },
                "button-outline-primary-border": {
                    dark: "primary.500",
                    light: "primary.530"
                },
                "button-outline-primary-background": {
                    dark: {
                        color: "white.500",
                        opacity: 0
                    },
                    light: {
                        color: "white.500",
                        opacity: 0
                    }
                },
                "button-outline-primary-background-hover": {
                    dark: "primary.500",
                    light: "primary.530"
                },
                "button-outline-primary-text-hover": {
                    dark: "white.500",
                    light: "white.500"
                },
                "button-outline-primary-border-hover": {
                    dark: "primary.500",
                    light: "primary.530"
                },
                "button-outline-primary-background-active": {
                    dark: "primary.430",
                    light: "primary.600"
                },
                "button-outline-primary-text-active": {
                    dark: "white.500",
                    light: "white.500"
                },
                "button-outline-primary-border-active": {
                    dark: "primary.430",
                    light: "primary.600"
                },
                "button-creator-revenue-background": {
                    dark: "teal.430",
                    light: "teal.430"
                },
                "redesign-button-primary-text": {
                    name: "white"
                },
                "redesign-button-primary-background": {
                    dark: "brand.500",
                    light: "brand.500"
                },
                "redesign-button-primary-pressed-background": {
                    dark: "brand.560",
                    light: "brand.560"
                },
                "redesign-button-primary-on-blurple-text": {
                    dark: "brand.500",
                    light: "brand.500"
                },
                "redesign-button-primary-on-blurple-background": {
                    name: "white"
                },
                "redesign-button-primary-on-blurple-pressed-text": {
                    dark: "brand.530",
                    light: "brand.530"
                },
                "redesign-button-primary-on-blurple-pressed-background": {
                    dark: "brand.200",
                    light: "brand.200"
                },
                "redesign-button-primary-alt-text": {
                    name: "text-brand"
                },
                "redesign-button-primary-alt-border": {
                    name: "text-brand"
                },
                "redesign-button-primary-alt-background": {
                    dark: {
                        color: "brand.500",
                        opacity: 0
                    },
                    light: {
                        color: "brand.500",
                        opacity: 0
                    }
                },
                "redesign-button-primary-alt-pressed-text": {
                    dark: "brand.360",
                    light: "brand.560"
                },
                "redesign-button-primary-alt-pressed-border": {
                    dark: {
                        color: "brand.400",
                        opacity: .5
                    },
                    light: "brand.330"
                },
                "redesign-button-primary-alt-pressed-background": {
                    dark: {
                        color: "brand.700",
                        opacity: .16
                    },
                    light: {
                        color: "brand.500",
                        opacity: .06
                    }
                },
                "redesign-button-primary-alt-on-blurple-text": {
                    name: "white"
                },
                "redesign-button-primary-alt-on-blurple-border": {
                    name: "white"
                },
                "redesign-button-primary-alt-on-blurple-background": {
                    dark: {
                        color: "brand.530",
                        opacity: 0
                    },
                    light: {
                        color: "brand.530",
                        opacity: 0
                    }
                },
                "redesign-button-primary-alt-on-blurple-pressed-border": {
                    dark: "brand.360",
                    light: "brand.360"
                },
                "redesign-button-primary-alt-on-blurple-pressed-background": {
                    dark: {
                        color: "brand.530",
                        opacity: 1
                    },
                    light: {
                        color: "brand.530",
                        opacity: 1
                    }
                },
                "redesign-button-secondary-text": {
                    name: "text-primary"
                },
                "redesign-button-secondary-border": {
                    name: "border-subtle"
                },
                "redesign-button-secondary-background": {
                    dark: "primary.460",
                    light: "white.500"
                },
                "redesign-button-secondary-pressed-border": {
                    dark: {
                        color: "white.500",
                        opacity: 0
                    },
                    light: {
                        color: "black.500",
                        opacity: .04
                    }
                },
                "redesign-button-secondary-pressed-background": {
                    dark: "primary.500",
                    light: "primary.130"
                },
                "redesign-button-secondary-alt-text": {
                    name: "text-primary"
                },
                "redesign-button-secondary-alt-background": {
                    dark: "primary.530",
                    light: {
                        color: "black.500",
                        opacity: .08
                    }
                },
                "redesign-button-secondary-alt-pressed-background": {
                    dark: "primary.560",
                    light: {
                        color: "black.500",
                        opacity: .16
                    }
                },
                "redesign-button-secondary-alt-pressed-text": {
                    name: "text-secondary"
                },
                "redesign-button-danger-text": {
                    name: "white"
                },
                "redesign-button-danger-background": {
                    dark: "red.430",
                    light: "red.430"
                },
                "redesign-button-danger-pressed-background": {
                    dark: "red.460",
                    light: "red.460"
                },
                "redesign-button-positive-text": {
                    name: "white"
                },
                "redesign-button-positive-background": {
                    dark: "green.430",
                    light: "green.430"
                },
                "redesign-button-positive-pressed-background": {
                    dark: "green.460",
                    light: "green.460"
                },
                "redesign-button-overlay-text": {
                    dark: "primary.860",
                    light: "primary.860"
                },
                "redesign-button-overlay-background": {
                    name: "white"
                },
                "redesign-button-overlay-pressed-background": {
                    dark: "primary.230",
                    light: "primary.230"
                },
                "redesign-button-overlay-alpha-text": {
                    name: "white"
                }
            })
        },
        591434: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return i
                }
            });
            var a = r("237436");
            let n = {
                figma: {
                    category: "feedback"
                }
            };
            var i = (0, a.defineColorTokens)({
                "info-positive-background": {
                    dark: {
                        color: "green.360",
                        opacity: .1
                    },
                    light: {
                        color: "green.400",
                        opacity: .05
                    },
                    meta: n
                },
                "info-positive-foreground": {
                    dark: "green.360",
                    light: "green.400",
                    meta: n
                },
                "info-positive-text": {
                    dark: "white.500",
                    light: "black.500",
                    meta: n
                },
                "info-warning-background": {
                    dark: {
                        color: "yellow.300",
                        opacity: .1
                    },
                    light: {
                        color: "yellow.400",
                        opacity: .1
                    },
                    meta: n
                },
                "info-warning-foreground": {
                    dark: "yellow.300",
                    light: "yellow.400",
                    meta: n
                },
                "info-warning-text": {
                    dark: "white.500",
                    light: "black.500",
                    meta: n
                },
                "info-danger-background": {
                    dark: {
                        color: "red.400",
                        opacity: .1
                    },
                    light: {
                        color: "red.430",
                        opacity: .1
                    },
                    meta: n
                },
                "info-danger-foreground": {
                    dark: "red.400",
                    light: "red.430",
                    meta: n
                },
                "info-danger-text": {
                    dark: "white.500",
                    light: "black.500",
                    meta: n
                },
                "info-help-background": {
                    dark: {
                        color: "blue.345",
                        opacity: .1
                    },
                    light: {
                        color: "blue.430",
                        opacity: .1
                    },
                    meta: n
                },
                "info-help-foreground": {
                    dark: "blue.345",
                    light: "blue.430",
                    meta: n
                },
                "info-help-text": {
                    dark: "white.500",
                    light: "black.500",
                    meta: n
                }
            })
        },
        448072: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return i
                }
            });
            var a = r("237436");
            let n = {
                figma: {
                    category: "forms"
                }
            };
            var i = (0, a.defineColorTokens)({
                "input-background": {
                    dark: "primary.700",
                    light: "primary.200",
                    meta: n
                },
                "input-placeholder-text": {
                    dark: "input-placeholder-text-dark",
                    light: "primary.560",
                    meta: n
                },
                "redesign-input-control-selected": {
                    dark: "brand.500",
                    light: "brand.500"
                }
            })
        },
        497991: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                componentColorTokens: function() {
                    return h
                }
            });
            var a = r("900731"),
                n = r("591434"),
                i = r("448072"),
                l = r("868203"),
                o = r("143474"),
                s = r("602642"),
                d = r("765926"),
                c = r("846303"),
                u = r("445077"),
                f = r("5354"),
                m = r("726110");
            let h = {
                ...a.default,
                ...i.default,
                ...n.default,
                ...l.default,
                ...o.default,
                ...s.default,
                ...d.default,
                ...c.default,
                ...u.default,
                ...f.default,
                ...m.default
            }
        },
        868203: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return i
                }
            });
            var a = r("237436");
            let n = {
                figma: {
                    category: "chat"
                }
            };
            var i = (0, a.defineColorTokens)({
                "channel-text-area-placeholder": {
                    dark: "primary.430",
                    light: "primary.400",
                    amoled: "primary.400",
                    meta: n
                },
                "channeltextarea-background": {
                    dark: "primary.560",
                    light: "primary.160",
                    amoled: "primary.800",
                    meta: n
                },
                "text-message-preview-low-sat": {
                    dark: "primary.360",
                    darker: "plum.11",
                    light: "primary.460",
                    amoled: "plum.9"
                }
            })
        },
        143474: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return i
                }
            });
            var a = r("237436");
            let n = {
                figma: {
                    category: "misc"
                }
            };
            var i = (0, a.defineColorTokens)({
                "activity-card-background": {
                    dark: "primary.700",
                    light: "white.500",
                    meta: n
                },
                "logo-primary": {
                    dark: "white.500",
                    light: "brand.500",
                    meta: n
                },
                "focus-primary": {
                    dark: "blue.345",
                    light: "blue.345",
                    meta: n
                },
                "android-navigation-scrim-background": {
                    dark: {
                        color: "primary.830",
                        opacity: .5
                    },
                    light: {
                        color: "primary.100",
                        opacity: .5
                    },
                    meta: n
                },
                "bug-reporter-modal-submitting-background": {
                    dark: {
                        color: "primary.800",
                        opacity: .6
                    },
                    light: {
                        color: "white.500",
                        opacity: .6
                    },
                    meta: n
                },
                "forum-post-extra-media-count-container-background": {
                    dark: {
                        color: "primary.660",
                        opacity: .8
                    },
                    light: {
                        color: "primary.160",
                        opacity: .8
                    },
                    meta: n
                },
                "forum-post-tag-background": {
                    dark: {
                        color: "primary.660",
                        opacity: .9
                    },
                    light: {
                        color: "primary.160",
                        opacity: .9
                    },
                    meta: n
                },
                "live-stage-tile-border": {
                    dark: {
                        color: "primary.500",
                        opacity: .6
                    },
                    light: {
                        color: "primary.430",
                        opacity: .15
                    },
                    meta: n
                },
                "user-profile-header-overflow-background": {
                    dark: {
                        color: "primary.700",
                        opacity: .5
                    },
                    light: {
                        color: "white.200",
                        opacity: .5
                    },
                    meta: n
                },
                "display-banner-overflow-background": {
                    dark: {
                        color: "primary.700",
                        opacity: .5
                    },
                    light: {
                        color: "white.200",
                        opacity: .5
                    },
                    meta: n
                },
                "info-box-background": {
                    dark: {
                        color: "blue.345",
                        opacity: .1
                    },
                    light: {
                        color: "blue.345",
                        opacity: .1
                    },
                    meta: n
                },
                "home-card-resting-border": {
                    dark: "transparent",
                    light: {
                        color: "primary.400",
                        opacity: .24
                    }
                },
                "creator-revenue-locked-channel-icon": {
                    dark: "teal.345",
                    light: "teal.400"
                },
                "creator-revenue-icon-gradient-start": {
                    dark: "teal.360",
                    light: "teal.345"
                },
                "creator-revenue-icon-gradient-end": {
                    dark: "teal.430",
                    light: "teal.400"
                },
                "creator-revenue-progress-bar": {
                    dark: "teal.400",
                    light: "teal.345"
                },
                "creator-revenue-info-box-border": {
                    dark: "teal.400",
                    light: "teal.400"
                },
                "creator-revenue-info-box-background": {
                    dark: {
                        color: "teal.430",
                        opacity: .1
                    },
                    light: {
                        color: "teal.430",
                        opacity: .1
                    }
                },
                "guild-notifications-bottom-sheet-pill-background": {
                    light: "white.500",
                    dark: "primary.700"
                }
            })
        },
        602642: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return a
                }
            });
            var a = (0, r("237436").defineColorTokens)({
                "android-navigation-bar-background": {
                    dark: "primary.830",
                    light: "primary.100"
                },
                "android-ripple": {
                    dark: {
                        color: "white.500",
                        opacity: .07
                    },
                    light: {
                        color: "black.500",
                        opacity: .12
                    }
                },
                "navigator-header-tint": {
                    dark: "white.500",
                    light: "primary.500"
                }
            })
        },
        765926: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return a
                }
            });
            var a = (0, r("237436").defineColorTokens)({
                "modal-background": {
                    dark: "primary.600",
                    light: "white.500",
                    meta: {
                        figma: {
                            category: "overlays"
                        }
                    }
                },
                "modal-footer-background": {
                    dark: "primary.630",
                    light: "primary.130",
                    meta: {
                        figma: {
                            category: "overlays"
                        }
                    }
                },
                "blur-fallback": {
                    light: {
                        color: "primary.530",
                        opacity: .96
                    },
                    dark: {
                        color: "primary.700",
                        opacity: .96
                    },
                    darker: {
                        color: "plum.17",
                        opacity: .96
                    },
                    amoled: {
                        color: "plum.19",
                        opacity: .96
                    }
                },
                "blur-fallback-pressed": {
                    light: {
                        color: "primary.530",
                        opacity: .96
                    },
                    dark: {
                        color: "primary.730",
                        opacity: .96
                    },
                    darker: {
                        color: "plum.17",
                        opacity: .96
                    },
                    amoled: {
                        color: "plum.19",
                        opacity: .96
                    }
                },
                "theme-locked-blur-fallback": {
                    light: {
                        color: "primary.700",
                        opacity: .96
                    },
                    dark: {
                        color: "primary.700",
                        opacity: .96
                    },
                    darker: {
                        color: "primary.700",
                        opacity: .96
                    },
                    amoled: {
                        color: "primary.700",
                        opacity: .96
                    }
                },
                "voice-video-video-tile-blur-fallback": {
                    light: {
                        color: "primary.700",
                        opacity: .48
                    },
                    dark: {
                        color: "primary.700",
                        opacity: .48
                    },
                    darker: {
                        color: "primary.700",
                        opacity: .48
                    },
                    amoled: {
                        color: "primary.700",
                        opacity: .48
                    }
                },
                "legacy-android-blur-overlay-default": {
                    light: {
                        color: "primary.130",
                        opacity: .1
                    },
                    dark: {
                        color: "primary.660",
                        opacity: .5
                    },
                    meta: {
                        figma: {
                            ignore: !0
                        }
                    }
                },
                "legacy-android-blur-overlay-ultra-thin": {
                    light: {
                        color: "white.500",
                        opacity: .25
                    },
                    dark: {
                        color: "black.500",
                        opacity: .025
                    },
                    meta: {
                        figma: {
                            ignore: !0
                        }
                    }
                },
                "legacy-blur-fallback-default": {
                    light: {
                        color: "primary.230",
                        opacity: .975
                    },
                    dark: {
                        color: "primary.660",
                        opacity: .975
                    },
                    meta: {
                        figma: {
                            ignore: !0
                        }
                    }
                },
                "legacy-blur-fallback-ultra-thin": {
                    light: {
                        color: "white.500",
                        opacity: .95
                    },
                    dark: {
                        color: "black.500",
                        opacity: .95
                    },
                    meta: {
                        figma: {
                            ignore: !0
                        }
                    }
                }
            })
        },
        846303: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return a
                }
            });
            var a = (0, r("237436").defineColorTokens)({
                "polls-victor-border": {
                    name: "text-warning"
                },
                "polls-victor-fill": {
                    dark: "yellow.200",
                    light: "yellow.200"
                },
                "polls-victor-label": {
                    dark: "primary.600",
                    light: "primary.600"
                },
                "polls-voted-border": {
                    name: "text-positive"
                },
                "polls-voted-fill": {
                    dark: "green.160",
                    light: "green.160"
                },
                "polls-voted-label": {
                    dark: "primary.600",
                    light: "primary.600"
                },
                "polls-image-normal-border": {
                    dark: {
                        color: "black.430",
                        opacity: .9
                    },
                    light: {
                        color: "black.430",
                        opacity: .9
                    }
                }
            })
        },
        445077: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return i
                }
            });
            var a = r("237436");
            let n = {
                figma: {
                    ignore: !0
                }
            };
            var i = (0, a.defineColorTokens)({
                "profile-gradient-overlay-synced-with-user-theme": {
                    dark: {
                        color: "black.500",
                        opacity: .8
                    },
                    light: {
                        color: "white.500",
                        opacity: .8
                    },
                    meta: n
                },
                "profile-gradient-overlay": {
                    dark: {
                        color: "black.500",
                        opacity: .6
                    },
                    light: {
                        color: "white.500",
                        opacity: .6
                    },
                    meta: n
                },
                "profile-gradient-section-box": {
                    dark: {
                        color: "black.500",
                        opacity: .45
                    },
                    light: {
                        color: "white.500",
                        opacity: .45
                    },
                    meta: n
                },
                "profile-gradient-card-background": {
                    dark: {
                        color: "black.500",
                        opacity: .7
                    },
                    light: {
                        color: "white.500",
                        opacity: .7
                    },
                    meta: n
                },
                "profile-gradient-message-input-border": {
                    dark: {
                        color: "primary.500",
                        opacity: .48
                    },
                    light: {
                        color: "primary.430",
                        opacity: .24
                    },
                    meta: n
                },
                "profile-gradient-note-background": {
                    dark: {
                        color: "black.500",
                        opacity: .3
                    },
                    light: {
                        color: "white.500",
                        opacity: .3
                    },
                    meta: n
                },
                "profile-gradient-profile-body-background-hover": {
                    dark: {
                        color: "white.500",
                        opacity: .16
                    },
                    light: {
                        color: "black.500",
                        opacity: .08
                    },
                    meta: n
                },
                "profile-gradient-role-pill-background": {
                    dark: {
                        color: "primary.660",
                        opacity: .5
                    },
                    light: {
                        color: "white.500",
                        opacity: .5
                    },
                    meta: n
                },
                "profile-gradient-role-pill-border": {
                    dark: {
                        color: "white.500",
                        opacity: .2
                    },
                    light: {
                        color: "primary.660",
                        opacity: .2
                    },
                    meta: n
                }
            })
        },
        5354: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return a
                }
            });
            var a = (0, r("237436").defineColorTokens)({
                "scrollbar-thin-thumb": {
                    dark: "primary.730",
                    light: {
                        color: "primary.500",
                        opacity: .3
                    },
                    amoled: "primary.700"
                },
                "scrollbar-thin-track": {
                    dark: {
                        color: "black.500",
                        opacity: 0
                    },
                    light: {
                        color: "black.500",
                        opacity: 0
                    }
                },
                "scrollbar-auto-thumb": {
                    dark: "primary.730",
                    light: "primary.300",
                    amoled: "primary.600"
                },
                "scrollbar-auto-track": {
                    dark: "primary.630",
                    light: "primary.160",
                    amoled: "primary.860"
                },
                "scrollbar-auto-scrollbar-color-thumb": {
                    dark: "primary.730",
                    light: "primary.230",
                    amoled: "primary.700"
                },
                "scrollbar-auto-scrollbar-color-track": {
                    dark: "primary.630",
                    light: "primary.130"
                }
            })
        },
        726110: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return a
                }
            });
            var a = (0, r("237436").defineColorTokens)({
                "status-online": {
                    dark: "green.360",
                    light: "green.400"
                },
                "status-idle": {
                    dark: "yellow.300",
                    light: "yellow.400"
                },
                "status-dnd": {
                    dark: "red.400",
                    light: "red.430"
                },
                "status-offline": {
                    dark: "primary.360",
                    light: "primary.460"
                }
            })
        },
        111940: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                rawPalette: function() {
                    return a
                }
            });
            let a = {
                "red.100": {
                    hex: "#fef8f9"
                },
                "red.130": {
                    hex: "#fef4f4"
                },
                "red.160": {
                    hex: "#feeaea"
                },
                "red.200": {
                    hex: "#fdddde"
                },
                "red.230": {
                    hex: "#fbcdce"
                },
                "red.260": {
                    hex: "#fbbabb"
                },
                "red.300": {
                    hex: "#fba6a8"
                },
                "red.330": {
                    hex: "#fa9193"
                },
                "red.345": {
                    hex: "#fa777b"
                },
                "red.360": {
                    hex: "#f85b5f"
                },
                "red.400": {
                    hex: "#f23f43"
                },
                "red.430": {
                    hex: "#da373c"
                },
                "red.460": {
                    hex: "#bb3033"
                },
                "red.500": {
                    hex: "#a12829"
                },
                "red.530": {
                    hex: "#8f2022"
                },
                "red.560": {
                    hex: "#7f1c1e"
                },
                "red.600": {
                    hex: "#70181a"
                },
                "red.630": {
                    hex: "#651517"
                },
                "red.660": {
                    hex: "#5a1314"
                },
                "red.700": {
                    hex: "#501012"
                },
                "red.730": {
                    hex: "#460e0f"
                },
                "red.760": {
                    hex: "#3f0b0c"
                },
                "red.800": {
                    hex: "#360a0b"
                },
                "red.830": {
                    hex: "#2e090a"
                },
                "red.860": {
                    hex: "#280808"
                },
                "red.900": {
                    hex: "#220606"
                },
                "orange.100": {
                    hex: "#fff8f5"
                },
                "orange.130": {
                    hex: "#fff4ed"
                },
                "orange.160": {
                    hex: "#feeadf"
                },
                "orange.200": {
                    hex: "#fddecd"
                },
                "orange.230": {
                    hex: "#fccfb2"
                },
                "orange.260": {
                    hex: "#fcbd95"
                },
                "orange.300": {
                    hex: "#fbab70"
                },
                "orange.330": {
                    hex: "#fa9746"
                },
                "orange.345": {
                    hex: "#f1882a"
                },
                "orange.360": {
                    hex: "#db7628"
                },
                "orange.400": {
                    hex: "#c46926"
                },
                "orange.430": {
                    hex: "#ac591f"
                },
                "orange.460": {
                    hex: "#9b4c19"
                },
                "orange.500": {
                    hex: "#8c4013"
                },
                "orange.530": {
                    hex: "#7b3710"
                },
                "orange.560": {
                    hex: "#6d300e"
                },
                "orange.600": {
                    hex: "#5f2b0b"
                },
                "orange.630": {
                    hex: "#56260a"
                },
                "orange.660": {
                    hex: "#4c2209"
                },
                "orange.700": {
                    hex: "#431e09"
                },
                "orange.730": {
                    hex: "#3b1a07"
                },
                "orange.760": {
                    hex: "#331606"
                },
                "orange.800": {
                    hex: "#2d1305"
                },
                "orange.830": {
                    hex: "#261005"
                },
                "orange.860": {
                    hex: "#200e05"
                },
                "orange.900": {
                    hex: "#190d04"
                },
                "yellow.100": {
                    hex: "#fff8ef"
                },
                "yellow.130": {
                    hex: "#fff4e8"
                },
                "yellow.160": {
                    hex: "#ffebd3"
                },
                "yellow.200": {
                    hex: "#fee0b6"
                },
                "yellow.230": {
                    hex: "#fdd18c"
                },
                "yellow.260": {
                    hex: "#fcc145"
                },
                "yellow.300": {
                    hex: "#f0b232"
                },
                "yellow.330": {
                    hex: "#e1a42a"
                },
                "yellow.345": {
                    hex: "#d49824"
                },
                "yellow.360": {
                    hex: "#bf861c"
                },
                "yellow.400": {
                    hex: "#af7615"
                },
                "yellow.430": {
                    hex: "#9a650d"
                },
                "yellow.460": {
                    hex: "#8a5709"
                },
                "yellow.500": {
                    hex: "#7c4b04"
                },
                "yellow.530": {
                    hex: "#6d4104"
                },
                "yellow.560": {
                    hex: "#613803"
                },
                "yellow.600": {
                    hex: "#543203"
                },
                "yellow.630": {
                    hex: "#4c2d03"
                },
                "yellow.660": {
                    hex: "#432803"
                },
                "yellow.700": {
                    hex: "#3b2303"
                },
                "yellow.730": {
                    hex: "#351e02"
                },
                "yellow.760": {
                    hex: "#2e1a02"
                },
                "yellow.800": {
                    hex: "#271602"
                },
                "yellow.830": {
                    hex: "#221302"
                },
                "yellow.860": {
                    hex: "#1c1002"
                },
                "yellow.900": {
                    hex: "#160e02"
                },
                "green.100": {
                    hex: "#ecfef1"
                },
                "green.130": {
                    hex: "#defee7"
                },
                "green.160": {
                    hex: "#bdfcd3"
                },
                "green.200": {
                    hex: "#88fbb5"
                },
                "green.230": {
                    hex: "#58f39c"
                },
                "green.260": {
                    hex: "#48e58b"
                },
                "green.300": {
                    hex: "#3bd67f"
                },
                "green.330": {
                    hex: "#2dc771"
                },
                "green.345": {
                    hex: "#26b968"
                },
                "green.360": {
                    hex: "#23a55a"
                },
                "green.400": {
                    hex: "#24934e"
                },
                "green.430": {
                    hex: "#248045"
                },
                "green.460": {
                    hex: "#1f703c"
                },
                "green.500": {
                    hex: "#1a6334"
                },
                "green.530": {
                    hex: "#15562b"
                },
                "green.560": {
                    hex: "#124c24"
                },
                "green.600": {
                    hex: "#0e431f"
                },
                "green.630": {
                    hex: "#0c3c1c"
                },
                "green.660": {
                    hex: "#0a3618"
                },
                "green.700": {
                    hex: "#072f15"
                },
                "green.730": {
                    hex: "#052910"
                },
                "green.760": {
                    hex: "#03240e"
                },
                "green.800": {
                    hex: "#031f0c"
                },
                "green.830": {
                    hex: "#031b0a"
                },
                "green.860": {
                    hex: "#041708"
                },
                "green.900": {
                    hex: "#051307"
                },
                "blue.100": {
                    hex: "#f6fafe"
                },
                "blue.130": {
                    hex: "#f0f7fe"
                },
                "blue.160": {
                    hex: "#e2f0fd"
                },
                "blue.200": {
                    hex: "#cde8fd"
                },
                "blue.230": {
                    hex: "#b2ddfc"
                },
                "blue.260": {
                    hex: "#94d2fc"
                },
                "blue.300": {
                    hex: "#66c4fd"
                },
                "blue.330": {
                    hex: "#2eb6ff"
                },
                "blue.345": {
                    hex: "#00aafc"
                },
                "blue.360": {
                    hex: "#0097f2"
                },
                "blue.400": {
                    hex: "#0082eb"
                },
                "blue.430": {
                    hex: "#006be7"
                },
                "blue.460": {
                    hex: "#005cd1"
                },
                "blue.500": {
                    hex: "#0051b6"
                },
                "blue.530": {
                    hex: "#00489b"
                },
                "blue.560": {
                    hex: "#004088"
                },
                "blue.600": {
                    hex: "#003976"
                },
                "blue.630": {
                    hex: "#00336a"
                },
                "blue.660": {
                    hex: "#002d5f"
                },
                "blue.700": {
                    hex: "#002855"
                },
                "blue.730": {
                    hex: "#002348"
                },
                "blue.760": {
                    hex: "#001e3f"
                },
                "blue.800": {
                    hex: "#001a36"
                },
                "blue.830": {
                    hex: "#001630"
                },
                "blue.860": {
                    hex: "#00132b"
                },
                "blue.900": {
                    hex: "#001024"
                },
                "teal.100": {
                    hex: "#f4fbfd"
                },
                "teal.130": {
                    hex: "#e9f9fd"
                },
                "teal.160": {
                    hex: "#d3f4fb"
                },
                "teal.200": {
                    hex: "#b1eff9"
                },
                "teal.230": {
                    hex: "#7ee7f7"
                },
                "teal.260": {
                    hex: "#5edbef"
                },
                "teal.300": {
                    hex: "#47cbe2"
                },
                "teal.330": {
                    hex: "#35bcd5"
                },
                "teal.345": {
                    hex: "#2eb0c9"
                },
                "teal.360": {
                    hex: "#289fb6"
                },
                "teal.400": {
                    hex: "#248da1"
                },
                "teal.430": {
                    hex: "#207a8d"
                },
                "teal.460": {
                    hex: "#1b6b7c"
                },
                "teal.500": {
                    hex: "#175e6d"
                },
                "teal.530": {
                    hex: "#13525f"
                },
                "teal.560": {
                    hex: "#0f4954"
                },
                "teal.600": {
                    hex: "#0c4049"
                },
                "teal.630": {
                    hex: "#0a3942"
                },
                "teal.660": {
                    hex: "#08333a"
                },
                "teal.700": {
                    hex: "#062d34"
                },
                "teal.730": {
                    hex: "#05272d"
                },
                "teal.760": {
                    hex: "#042227"
                },
                "teal.800": {
                    hex: "#031d21"
                },
                "teal.830": {
                    hex: "#02191d"
                },
                "teal.860": {
                    hex: "#021619"
                },
                "teal.900": {
                    hex: "#011215"
                },
                "white.100": {
                    hex: "#ffffff",
                    meta: {
                        figma: {
                            ignore: !0
                        }
                    }
                },
                "white.130": {
                    hex: "#ffffff",
                    meta: {
                        figma: {
                            ignore: !0
                        }
                    }
                },
                "white.160": {
                    hex: "#ffffff",
                    meta: {
                        figma: {
                            ignore: !0
                        }
                    }
                },
                "white.200": {
                    hex: "#ffffff",
                    meta: {
                        figma: {
                            ignore: !0
                        }
                    }
                },
                "white.230": {
                    hex: "#ffffff",
                    meta: {
                        figma: {
                            ignore: !0
                        }
                    }
                },
                "white.260": {
                    hex: "#ffffff",
                    meta: {
                        figma: {
                            ignore: !0
                        }
                    }
                },
                "white.300": {
                    hex: "#ffffff",
                    meta: {
                        figma: {
                            ignore: !0
                        }
                    }
                },
                "white.330": {
                    hex: "#ffffff",
                    meta: {
                        figma: {
                            ignore: !0
                        }
                    }
                },
                "white.345": {
                    hex: "#ffffff",
                    meta: {
                        figma: {
                            ignore: !0
                        }
                    }
                },
                "white.360": {
                    hex: "#ffffff",
                    meta: {
                        figma: {
                            ignore: !0
                        }
                    }
                },
                "white.400": {
                    hex: "#ffffff",
                    meta: {
                        figma: {
                            ignore: !0
                        }
                    }
                },
                "white.430": {
                    hex: "#ffffff",
                    meta: {
                        figma: {
                            ignore: !0
                        }
                    }
                },
                "white.460": {
                    hex: "#ffffff",
                    meta: {
                        figma: {
                            ignore: !0
                        }
                    }
                },
                "white.500": {
                    hex: "#ffffff"
                },
                "white.530": {
                    hex: "#e8e8e8",
                    meta: {
                        figma: {
                            ignore: !0
                        }
                    }
                },
                "white.560": {
                    hex: "#cfcfcf",
                    meta: {
                        figma: {
                            ignore: !0
                        }
                    }
                },
                "white.600": {
                    hex: "#adadad",
                    meta: {
                        figma: {
                            ignore: !0
                        }
                    }
                },
                "white.630": {
                    hex: "#969696",
                    meta: {
                        figma: {
                            ignore: !0
                        }
                    }
                },
                "white.660": {
                    hex: "#838383",
                    meta: {
                        figma: {
                            ignore: !0
                        }
                    }
                },
                "white.700": {
                    hex: "#666666",
                    meta: {
                        figma: {
                            ignore: !0
                        }
                    }
                },
                "white.730": {
                    hex: "#5f5f5f",
                    meta: {
                        figma: {
                            ignore: !0
                        }
                    }
                },
                "white.760": {
                    hex: "#585858",
                    meta: {
                        figma: {
                            ignore: !0
                        }
                    }
                },
                "white.800": {
                    hex: "#4d4d4d",
                    meta: {
                        figma: {
                            ignore: !0
                        }
                    }
                },
                "white.830": {
                    hex: "#3b3b3b",
                    meta: {
                        figma: {
                            ignore: !0
                        }
                    }
                },
                "white.860": {
                    hex: "#262626",
                    meta: {
                        figma: {
                            ignore: !0
                        }
                    }
                },
                "white.900": {
                    hex: "#0d0d0d",
                    meta: {
                        figma: {
                            ignore: !0
                        }
                    }
                },
                "black.100": {
                    hex: "#f2f2f2",
                    meta: {
                        figma: {
                            ignore: !0
                        }
                    }
                },
                "black.130": {
                    hex: "#e8e8e8",
                    meta: {
                        figma: {
                            ignore: !0
                        }
                    }
                },
                "black.160": {
                    hex: "#dadada",
                    meta: {
                        figma: {
                            ignore: !0
                        }
                    }
                },
                "black.200": {
                    hex: "#cccccc",
                    meta: {
                        figma: {
                            ignore: !0
                        }
                    }
                },
                "black.230": {
                    hex: "#bdbdbd",
                    meta: {
                        figma: {
                            ignore: !0
                        }
                    }
                },
                "black.260": {
                    hex: "#acacac",
                    meta: {
                        figma: {
                            ignore: !0
                        }
                    }
                },
                "black.300": {
                    hex: "#999999",
                    meta: {
                        figma: {
                            ignore: !0
                        }
                    }
                },
                "black.330": {
                    hex: "#7a7a7a",
                    meta: {
                        figma: {
                            ignore: !0
                        }
                    }
                },
                "black.345": {
                    hex: "#666666",
                    meta: {
                        figma: {
                            ignore: !0
                        }
                    }
                },
                "black.360": {
                    hex: "#5c5c5c",
                    meta: {
                        figma: {
                            ignore: !0
                        }
                    }
                },
                "black.400": {
                    hex: "#333333",
                    meta: {
                        figma: {
                            ignore: !0
                        }
                    }
                },
                "black.430": {
                    hex: "#252525",
                    meta: {
                        figma: {
                            ignore: !0
                        }
                    }
                },
                "black.460": {
                    hex: "#141414",
                    meta: {
                        figma: {
                            ignore: !0
                        }
                    }
                },
                "black.500": {
                    hex: "#000000"
                },
                "black.530": {
                    hex: "#000000",
                    meta: {
                        figma: {
                            ignore: !0
                        }
                    }
                },
                "black.560": {
                    hex: "#000000",
                    meta: {
                        figma: {
                            ignore: !0
                        }
                    }
                },
                "black.600": {
                    hex: "#000000",
                    meta: {
                        figma: {
                            ignore: !0
                        }
                    }
                },
                "black.630": {
                    hex: "#000000",
                    meta: {
                        figma: {
                            ignore: !0
                        }
                    }
                },
                "black.660": {
                    hex: "#000000",
                    meta: {
                        figma: {
                            ignore: !0
                        }
                    }
                },
                "black.700": {
                    hex: "#000000",
                    meta: {
                        figma: {
                            ignore: !0
                        }
                    }
                },
                "black.730": {
                    hex: "#000000",
                    meta: {
                        figma: {
                            ignore: !0
                        }
                    }
                },
                "black.760": {
                    hex: "#000000",
                    meta: {
                        figma: {
                            ignore: !0
                        }
                    }
                },
                "black.800": {
                    hex: "#000000",
                    meta: {
                        figma: {
                            ignore: !0
                        }
                    }
                },
                "black.830": {
                    hex: "#000000",
                    meta: {
                        figma: {
                            ignore: !0
                        }
                    }
                },
                "black.860": {
                    hex: "#000000",
                    meta: {
                        figma: {
                            ignore: !0
                        }
                    }
                },
                "black.900": {
                    hex: "#000000",
                    meta: {
                        figma: {
                            ignore: !0
                        }
                    }
                },
                "brand.100": {
                    hex: "#f7f7fe"
                },
                "brand.130": {
                    hex: "#f0f1fe"
                },
                "brand.160": {
                    hex: "#e7e9fd"
                },
                "brand.200": {
                    hex: "#dee0fc"
                },
                "brand.230": {
                    hex: "#d4d7fc"
                },
                "brand.260": {
                    hex: "#c9cdfb"
                },
                "brand.300": {
                    hex: "#bcc1fa"
                },
                "brand.330": {
                    hex: "#a8aff8"
                },
                "brand.345": {
                    hex: "#9ba3f7"
                },
                "brand.360": {
                    hex: "#949cf7"
                },
                "brand.400": {
                    hex: "#7984f5"
                },
                "brand.430": {
                    hex: "#707bf4"
                },
                "brand.460": {
                    hex: "#6571f3"
                },
                "brand.500": {
                    hex: "#5865f2"
                },
                "brand.530": {
                    hex: "#505cdc"
                },
                "brand.560": {
                    hex: "#4752c4"
                },
                "brand.600": {
                    hex: "#3c45a5"
                },
                "brand.630": {
                    hex: "#343b8f"
                },
                "brand.660": {
                    hex: "#2d347d"
                },
                "brand.700": {
                    hex: "#232861"
                },
                "brand.730": {
                    hex: "#21265b"
                },
                "brand.760": {
                    hex: "#1e2353"
                },
                "brand.800": {
                    hex: "#1a1e49"
                },
                "brand.830": {
                    hex: "#141738"
                },
                "brand.860": {
                    hex: "#0d0f24"
                },
                "brand.900": {
                    hex: "#04050c"
                },
                "primary.100": {
                    hex: "#f9f9f9"
                },
                "primary.130": {
                    hex: "#f2f3f5"
                },
                "primary.160": {
                    hex: "#ebedef"
                },
                "primary.200": {
                    hex: "#e3e5e8"
                },
                "primary.230": {
                    hex: "#dbdee1"
                },
                "primary.260": {
                    hex: "#d2d5d9"
                },
                "primary.300": {
                    hex: "#c4c9ce"
                },
                "primary.330": {
                    hex: "#b5bac1"
                },
                "primary.345": {
                    hex: "#a5abb3"
                },
                "primary.360": {
                    hex: "#949ba4"
                },
                "primary.400": {
                    hex: "#80848e"
                },
                "primary.430": {
                    hex: "#6d6f78"
                },
                "primary.460": {
                    hex: "#5c5e66"
                },
                "primary.500": {
                    hex: "#4e5058"
                },
                "primary.530": {
                    hex: "#41434a"
                },
                "primary.560": {
                    hex: "#383a40"
                },
                "primary.600": {
                    hex: "#313338"
                },
                "primary.630": {
                    hex: "#2b2d31"
                },
                "primary.645": {
                    hex: "#282a2e"
                },
                "primary.660": {
                    hex: "#232428"
                },
                "primary.700": {
                    hex: "#1e1f22"
                },
                "primary.730": {
                    hex: "#1a1b1e"
                },
                "primary.760": {
                    hex: "#161719"
                },
                "primary.800": {
                    hex: "#111214"
                },
                "primary.830": {
                    hex: "#0c0c0d"
                },
                "primary.860": {
                    hex: "#060607"
                },
                "primary.900": {
                    hex: "#020202"
                },
                "plum.0": {
                    hex: "#f9f9fa"
                },
                "plum.1": {
                    hex: "#f3f3f4"
                },
                "plum.2": {
                    hex: "#ecedef"
                },
                "plum.3": {
                    hex: "#e4e5e8"
                },
                "plum.4": {
                    hex: "#dddee1"
                },
                "plum.5": {
                    hex: "#d3d5d9"
                },
                "plum.6": {
                    hex: "#c7c8ce"
                },
                "plum.7": {
                    hex: "#b8bac1"
                },
                "plum.8": {
                    hex: "#a8aab4"
                },
                "plum.9": {
                    hex: "#9597a3"
                },
                "plum.10": {
                    hex: "#828391"
                },
                "plum.11": {
                    hex: "#6d6f7e"
                },
                "plum.12": {
                    hex: "#5c5d6e"
                },
                "plum.13": {
                    hex: "#4e4f5f"
                },
                "plum.14": {
                    hex: "#414252"
                },
                "plum.15": {
                    hex: "#383948"
                },
                "plum.16": {
                    hex: "#31323f"
                },
                "plum.17": {
                    hex: "#2b2c38"
                },
                "plum.18": {
                    hex: "#262732"
                },
                "plum.19": {
                    hex: "#21222b"
                },
                "plum.20": {
                    hex: "#1c1d26"
                },
                "plum.21": {
                    hex: "#181921"
                },
                "plum.22": {
                    hex: "#15161d"
                },
                "plum.23": {
                    hex: "#121319"
                },
                "plum.24": {
                    hex: "#0f1015"
                },
                "plum.25": {
                    hex: "#0c0c10"
                },
                "plum.26": {
                    hex: "#08080b"
                }
            }
        },
        133198: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                semanticColorTokens: function() {
                    return i
                }
            });
            let a = {
                    figma: {
                        category: "chat"
                    }
                },
                n = {
                    figma: {
                        ignore: !0
                    }
                },
                i = {
                    "background-accent": {
                        dark: "primary.530",
                        light: "primary.430"
                    },
                    "background-floating": {
                        dark: "primary.800",
                        light: "white.500"
                    },
                    "background-mentioned": {
                        dark: {
                            color: "yellow.300",
                            opacity: .1
                        },
                        light: {
                            color: "yellow.300",
                            opacity: .1
                        }
                    },
                    "background-mentioned-hover": {
                        dark: {
                            color: "yellow.300",
                            opacity: .08
                        },
                        light: {
                            color: "yellow.300",
                            opacity: .2
                        }
                    },
                    "background-message-automod": {
                        dark: {
                            color: "red.400",
                            opacity: .05
                        },
                        light: {
                            color: "red.400",
                            opacity: .05
                        }
                    },
                    "background-message-automod-hover": {
                        dark: {
                            color: "red.400",
                            opacity: .1
                        },
                        light: {
                            color: "red.400",
                            opacity: .1
                        }
                    },
                    "background-message-highlight": {
                        dark: {
                            color: "brand.360",
                            opacity: .08
                        },
                        light: {
                            color: "brand.360",
                            opacity: .1
                        }
                    },
                    "background-message-highlight-hover": {
                        dark: {
                            color: "brand.360",
                            opacity: .06
                        },
                        light: {
                            color: "brand.360",
                            opacity: .2
                        }
                    },
                    "background-message-hover": {
                        dark: {
                            color: "primary.900",
                            opacity: .06
                        },
                        light: {
                            color: "primary.900",
                            opacity: .03
                        }
                    },
                    "background-mobile-primary": {
                        dark: "primary.600",
                        light: "primary.100"
                    },
                    "background-mobile-secondary": {
                        dark: "primary.630",
                        light: "white.500"
                    },
                    "background-modifier-accent": {
                        dark: {
                            color: "primary.500",
                            opacity: .48
                        },
                        light: {
                            color: "primary.400",
                            opacity: .24
                        }
                    },
                    "background-modifier-accent-2": {
                        dark: {
                            color: "primary.500",
                            opacity: .48
                        },
                        light: {
                            color: "primary.400",
                            opacity: .24
                        }
                    },
                    "background-modifier-active": {
                        dark: {
                            color: "primary.500",
                            opacity: .48
                        },
                        light: {
                            color: "primary.400",
                            opacity: .2
                        }
                    },
                    "background-modifier-hover": {
                        dark: {
                            color: "primary.500",
                            opacity: .3
                        },
                        light: {
                            color: "primary.400",
                            opacity: .16
                        }
                    },
                    "background-modifier-selected": {
                        dark: {
                            color: "primary.500",
                            opacity: .6
                        },
                        light: {
                            color: "primary.400",
                            opacity: .24
                        }
                    },
                    "background-nested-floating": {
                        dark: "primary.630",
                        light: "white.500"
                    },
                    "background-primary": {
                        dark: "primary.600",
                        light: "white.500",
                        meta: {
                            description: "Background for the main content area of the app"
                        }
                    },
                    "background-secondary": {
                        dark: "primary.630",
                        light: "primary.130",
                        meta: {
                            description: "Background for the secondary content area of the app"
                        }
                    },
                    "background-secondary-alt": {
                        dark: "primary.660",
                        light: "primary.160",
                        meta: {
                            description: "Alternative for the secondary content area of the app"
                        }
                    },
                    "background-tertiary": {
                        dark: "primary.700",
                        light: "primary.200",
                        meta: {
                            description: "Background for the tertiary content area of the app"
                        }
                    },
                    black: {
                        dark: "black.500",
                        light: "black.500",
                        meta: n
                    },
                    "border-strong": {
                        meta: {
                            description: "A stronger border for use in components that require a more prominent border"
                        },
                        dark: {
                            color: "white.500",
                            opacity: .16
                        },
                        light: {
                            color: "black.500",
                            opacity: .16
                        }
                    },
                    "border-subtle": {
                        meta: {
                            description: "A subtle border for use in components that require a less prominent border"
                        },
                        dark: {
                            color: "white.500",
                            opacity: .08
                        },
                        light: {
                            color: "black.500",
                            opacity: .08
                        }
                    },
                    "channel-icon": {
                        dark: "primary.400",
                        light: "primary.430",
                        meta: a
                    },
                    "channels-default": {
                        dark: "primary.360",
                        light: "primary.460",
                        meta: a
                    },
                    "chat-background": {
                        dark: "primary.600",
                        light: "white.500",
                        meta: a
                    },
                    "chat-border": {
                        dark: "primary.700",
                        light: "primary.200",
                        meta: a
                    },
                    "chat-input-container-background": {
                        dark: "primary.600",
                        light: "white.500",
                        meta: a
                    },
                    "chat-swipe-to-reply-background": {
                        dark: "primary.660",
                        light: "primary.160",
                        darker: "plum.22",
                        amoled: "plum.22",
                        meta: a
                    },
                    "control-brand-foreground": {
                        dark: "brand.360",
                        light: "brand.500",
                        meta: {
                            figma: {
                                category: "misc"
                            }
                        }
                    },
                    "control-brand-foreground-new": {
                        dark: "brand.360",
                        light: "brand.500",
                        meta: n
                    },
                    "deprecated-card-bg": {
                        dark: {
                            color: "primary.700",
                            opacity: .6
                        },
                        light: "primary.100",
                        meta: n
                    },
                    "deprecated-card-editable-bg": {
                        dark: {
                            color: "primary.700",
                            opacity: .3
                        },
                        light: {
                            color: "primary.100",
                            opacity: .6
                        },
                        meta: n
                    },
                    "deprecated-quickswitcher-input-background": {
                        dark: "primary.400",
                        light: "white.500",
                        meta: n
                    },
                    "deprecated-quickswitcher-input-placeholder": {
                        dark: {
                            color: "white.500",
                            opacity: .3
                        },
                        light: {
                            color: "primary.500",
                            opacity: .3
                        },
                        meta: n
                    },
                    "deprecated-store-bg": {
                        dark: "primary.600",
                        light: "primary.100",
                        meta: n
                    },
                    "deprecated-text-input-bg": {
                        dark: "primary.700",
                        light: "primary.200",
                        meta: n
                    },
                    "deprecated-text-input-border": {
                        dark: {
                            color: "black.500",
                            opacity: .3
                        },
                        light: {
                            color: "primary.500",
                            opacity: .3
                        },
                        meta: n
                    },
                    "deprecated-text-input-border-disabled": {
                        dark: "primary.700",
                        light: "primary.200",
                        meta: n
                    },
                    "deprecated-text-input-border-hover": {
                        dark: "primary.900",
                        light: "primary.300",
                        meta: n
                    },
                    "deprecated-text-input-prefix": {
                        dark: "primary.200",
                        light: "primary.300",
                        meta: n
                    },
                    "divider-strong": {
                        dark: {
                            color: "white.500",
                            opacity: .16
                        },
                        light: {
                            color: "black.500",
                            opacity: .16
                        }
                    },
                    "divider-subtle": {
                        dark: {
                            color: "white.500",
                            opacity: .08
                        },
                        light: {
                            color: "black.500",
                            opacity: .08
                        }
                    },
                    "header-muted": {
                        dark: "primary.360",
                        light: "primary.460"
                    },
                    "header-primary": {
                        dark: "primary.130",
                        light: "primary.860"
                    },
                    "header-secondary": {
                        dark: "primary.330",
                        light: "primary.500"
                    },
                    "home-background": {
                        dark: "primary.645",
                        light: "primary.100",
                        meta: {
                            figma: {
                                category: "background"
                            }
                        }
                    },
                    "icon-muted": {
                        dark: "primary.500",
                        light: "primary.300"
                    },
                    "icon-primary": {
                        dark: "primary.130",
                        light: "primary.860"
                    },
                    "icon-secondary": {
                        dark: "primary.330",
                        light: "primary.500"
                    },
                    "interactive-active": {
                        dark: "white.500",
                        light: "primary.860"
                    },
                    "interactive-hover": {
                        dark: "primary.230",
                        light: "primary.600"
                    },
                    "interactive-muted": {
                        dark: "primary.500",
                        light: "primary.300"
                    },
                    "interactive-normal": {
                        dark: "primary.330",
                        light: "primary.500"
                    },
                    "mention-background": {
                        dark: {
                            color: "brand.500",
                            opacity: .3
                        },
                        light: {
                            color: "brand.500",
                            opacity: .15
                        },
                        meta: a
                    },
                    "mention-foreground": {
                        dark: "brand.260",
                        light: "brand.500",
                        meta: a
                    },
                    "redesign-activity-card-background": {
                        dark: "primary.560",
                        light: "white.500"
                    },
                    "redesign-activity-card-background-pressed": {
                        dark: "primary.630",
                        light: "primary.160"
                    },
                    "redesign-activity-card-badge-icon": {
                        dark: "primary.400",
                        light: "primary.400"
                    },
                    "redesign-activity-card-border": {
                        dark: {
                            color: "white.500",
                            opacity: .02
                        },
                        light: {
                            color: "primary.400",
                            opacity: .24
                        }
                    },
                    "redesign-activity-card-overflow-background": {
                        dark: "primary.630",
                        darker: "plum.17",
                        light: "primary.230"
                    },
                    "redesign-only-background-active": {
                        dark: "primary.530",
                        light: "primary.430"
                    },
                    "redesign-only-background-default": {
                        dark: "primary.600",
                        light: "white.500"
                    },
                    "redesign-only-background-overlay": {
                        dark: "primary.645",
                        light: "primary.160"
                    },
                    "redesign-only-background-raised": {
                        dark: "primary.630",
                        light: "primary.130"
                    },
                    "redesign-only-background-sunken": {
                        dark: "primary.660",
                        light: "primary.200"
                    },
                    "spoiler-hidden-background": {
                        dark: "primary.700",
                        light: "primary.200",
                        meta: a
                    },
                    "spoiler-revealed-background": {
                        dark: "primary.660",
                        light: "primary.160",
                        meta: a
                    },
                    "status-danger": {
                        dark: "red.400",
                        light: "red.430"
                    },
                    "status-danger-background": {
                        dark: "red.400",
                        light: "red.430"
                    },
                    "status-danger-text": {
                        dark: "white.500",
                        light: "white.500"
                    },
                    "status-positive": {
                        dark: "green.360",
                        light: "green.400"
                    },
                    "status-positive-background": {
                        dark: "green.430",
                        light: "green.430"
                    },
                    "status-positive-text": {
                        dark: "white.500",
                        light: "white.500"
                    },
                    "status-warning": {
                        dark: "yellow.300",
                        light: "yellow.400"
                    },
                    "status-warning-background": {
                        dark: "yellow.300",
                        light: "yellow.400"
                    },
                    "status-warning-text": {
                        dark: "black.500",
                        light: "white.500"
                    },
                    "status-speaking": {
                        dark: "green.360",
                        light: "green.360"
                    },
                    "text-brand": {
                        dark: "brand.360",
                        light: "brand.500"
                    },
                    "text-danger": {
                        dark: "red.345",
                        light: "red.500"
                    },
                    "text-link": {
                        dark: "blue.345",
                        light: "blue.430"
                    },
                    "text-link-low-saturation": {
                        dark: "blue.330",
                        light: "blue.430",
                        meta: n
                    },
                    "text-low-contrast": {
                        dark: "primary.360",
                        light: "primary.460"
                    },
                    "text-muted": {
                        dark: "primary.360",
                        light: "primary.460"
                    },
                    "text-muted-on-default": {
                        dark: "primary.330",
                        light: "primary.430"
                    },
                    "text-normal": {
                        dark: "primary.230",
                        light: "primary.600"
                    },
                    "text-positive": {
                        dark: "green.330",
                        light: "green.430"
                    },
                    "text-primary": {
                        dark: "primary.230",
                        light: "primary.600"
                    },
                    "text-secondary": {
                        dark: "primary.330",
                        light: "primary.500"
                    },
                    "text-warning": {
                        dark: "yellow.300",
                        light: "yellow.430"
                    },
                    "textbox-markdown-syntax": {
                        dark: "primary.360",
                        light: "primary.530",
                        meta: a
                    },
                    white: {
                        dark: "white.500",
                        light: "white.500",
                        meta: n
                    },
                    "card-gradient-bg": {
                        dark: {
                            color: "black.500",
                            opacity: .4
                        },
                        light: {
                            color: "white.500",
                            opacity: .7
                        },
                        meta: n
                    },
                    "card-gradient-pressed-bg": {
                        dark: {
                            color: "black.500",
                            opacity: .5
                        },
                        light: {
                            color: "white.500",
                            opacity: .5
                        },
                        meta: n
                    },
                    "bg-backdrop-no-opacity": {
                        light: {
                            color: "black.500"
                        },
                        darker: {
                            color: "black.500"
                        },
                        amoled: {
                            color: "plum.19"
                        },
                        dark: {
                            color: "black.500"
                        }
                    }
                }
        },
        237436: function(e, t, r) {
            "use strict";

            function a(e) {
                return e
            }
            r.r(t), r.d(t, {
                defineColorTokens: function() {
                    return a
                }
            })
        }
    }
]);