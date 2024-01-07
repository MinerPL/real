            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return y
                }
            }), a("222007"), a("70102");
            var n = a("37983"),
                r = a("884691"),
                s = a("41092"),
                l = a("819855"),
                o = a("77078"),
                i = a("841098"),
                u = a("843455"),
                c = a("782340"),
                d = a("119218"),
                p = a("561755"),
                S = a("383297"),
                E = a("991362"),
                m = a("123720"),
                A = a("952835"),
                T = a("74020"),
                y = function(e) {
                    let t = (0, i.default)(),
                        a = r.useRef(null),
                        [y, P] = r.useState({});
                    switch (r.useLayoutEffect(() => {
                            let {
                                current: e
                            } = a;
                            if (null == e) return;
                            let t = window.getComputedStyle(e),
                                n = window.getComputedStyle(e, "::placeholder"),
                                r = t.getPropertyValue("font-family"),
                                s = t.getPropertyValue("font-weight"),
                                l = t.getPropertyValue("color"),
                                o = t.getPropertyValue("font-size"),
                                i = t.getPropertyValue("background-color");
                            P({
                                base: {
                                    fontFamily: r,
                                    fontWeight: s,
                                    color: l,
                                    fontSize: o,
                                    backgroundColor: i,
                                    padding: "12px",
                                    "::placeholder": {
                                        color: n.getPropertyValue("color")
                                    }
                                }
                            })
                        }, [a]), e.type) {
                        case u.PaymentSourceTypes.PRZELEWY24: {
                            let r = (0, l.isThemeDark)(t) ? A : T,
                                {
                                    onNameChange: i,
                                    onEmailChange: u,
                                    onP24BankChange: p,
                                    p24BankValue: S,
                                    billingAddressInfo: E
                                } = e;
                            return (0, n.jsxs)("div", {
                                className: d.body,
                                children: [(0, n.jsx)(o.FormSection, {
                                    title: c.default.Messages.EMAIL,
                                    children: (0, n.jsx)(o.TextInput, {
                                        inputRef: a,
                                        name: c.default.Messages.EMAIL,
                                        placeholder: c.default.Messages.EMAIL,
                                        onChange: e => u(e),
                                        value: E.email
                                    })
                                }), (0, n.jsx)(o.FormSection, {
                                    className: d.nonTopInputWrapper,
                                    title: c.default.Messages.CREDIT_CARD_NAME,
                                    children: (0, n.jsx)(o.TextInput, {
                                        name: c.default.Messages.CREDIT_CARD_NAME,
                                        placeholder: c.default.Messages.CREDIT_CARD_NAME,
                                        onChange: e => i(e),
                                        value: E.name
                                    })
                                }), (0, n.jsxs)(o.FormSection, {
                                    className: d.nonTopInputWrapper,
                                    title: c.default.Messages.PAYMENT_SOURCE_PRZELEWY24_BANK_LABEL,
                                    children: [(0, n.jsx)(s.P24BankElement, {
                                        options: {
                                            value: S,
                                            style: y
                                        },
                                        onChange: e => p(e.value)
                                    }), (0, n.jsx)("div", {
                                        className: d.bankSelectionStub,
                                        children: (0, n.jsx)("img", {
                                            src: r,
                                            alt: "Przelewy24"
                                        })
                                    })]
                                })]
                            })
                        }
                        case u.PaymentSourceTypes.EPS: {
                            let {
                                onAccountHolderNameChange: r,
                                onEPSBankChange: i,
                                epsBankValue: u,
                                billingAddressInfo: E
                            } = e, m = (0, l.isThemeDark)(t) ? p : S;
                            return (0, n.jsxs)("div", {
                                className: d.body,
                                children: [(0, n.jsx)(o.FormSection, {
                                    title: c.default.Messages.PAYMENT_SOURCE_ACCOUNT_HOLDER_NAME,
                                    children: (0, n.jsx)(o.TextInput, {
                                        inputRef: a,
                                        name: c.default.Messages.PAYMENT_SOURCE_ACCOUNT_HOLDER_NAME,
                                        placeholder: c.default.Messages.PAYMENT_SOURCE_ACCOUNT_HOLDER_NAME,
                                        onChange: e => r(e),
                                        value: E.name
                                    })
                                }), (0, n.jsxs)(o.FormSection, {
                                    className: d.nonTopInputWrapper,
                                    title: c.default.Messages.PAYMENT_SOURCE_EPS_BANK_LABEL,
                                    children: [(0, n.jsx)(s.EpsBankElement, {
                                        options: {
                                            value: u,
                                            style: y
                                        },
                                        onChange: e => i(e.value)
                                    }), (0, n.jsx)("div", {
                                        className: d.bankSelectionStub,
                                        children: (0, n.jsx)("img", {
                                            src: m,
                                            alt: "EPS"
                                        })
                                    })]
                                })]
                            })
                        }
                        case u.PaymentSourceTypes.IDEAL: {
                            let {
                                onAccountHolderNameChange: r,
                                onIdealBankChange: i,
                                idealBankValue: u,
                                billingAddressInfo: p
                            } = e, S = (0, l.isThemeDark)(t) ? E : m;
                            return (0, n.jsxs)("div", {
                                className: d.body,
                                children: [(0, n.jsx)(o.FormSection, {
                                    title: c.default.Messages.PAYMENT_SOURCE_ACCOUNT_HOLDER_NAME,
                                    children: (0, n.jsx)(o.TextInput, {
                                        inputRef: a,
                                        name: c.default.Messages.PAYMENT_SOURCE_ACCOUNT_HOLDER_NAME,
                                        placeholder: c.default.Messages.PAYMENT_SOURCE_ACCOUNT_HOLDER_NAME,
                                        onChange: e => r(e),
                                        value: p.name
                                    })
                                }), (0, n.jsxs)(o.FormSection, {
                                    className: d.nonTopInputWrapper,
                                    title: c.default.Messages.PAYMENT_SOURCE_IDEAL_BANK_LABEL,
                                    children: [(0, n.jsx)(s.IdealBankElement, {
                                        options: {
                                            value: u,
                                            style: y
                                        },
                                        onChange: e => i(e.value)
                                    }), (0, n.jsx)("div", {
                                        className: d.bankSelectionStub,
                                        children: (0, n.jsx)("img", {
                                            src: S,
                                            alt: "iDeal"
                                        })
                                    })]
                                })]
                            })
                        }
                        default:
                            throw Error("unknown payment source type")
                    }
                }