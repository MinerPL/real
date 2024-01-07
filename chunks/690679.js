            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return g
                }
            }), s("222007"), s("70102");
            var a = s("37983"),
                n = s("884691"),
                i = s("414456"),
                r = s.n(i),
                l = s("627445"),
                u = s.n(l),
                o = s("446674"),
                d = s("77078"),
                c = s("112679"),
                f = s("596523"),
                E = s("335430"),
                p = s("740055"),
                I = s("685665"),
                m = s("308592"),
                _ = s("102985"),
                N = s("357957"),
                S = s("10514"),
                P = s("719923"),
                R = s("713518"),
                T = s("380186"),
                C = s("809071"),
                A = s("49111"),
                h = s("782340"),
                L = s("539735"),
                M = s("173791");

            function g(e) {
                let {
                    subscription: t,
                    onPaymentSourceAdded: i,
                    highlightAddPaymentMethodButton: l,
                    dropdownClassName: g,
                    analyticsLocation: x,
                    currentInvoicePreview: D,
                    disabled: U = !1
                } = e, v = (0, o.useStateFromStores)([_.default], () => _.default.hidePersonalInformation), [O, b] = (0, o.useStateFromStoresArray)([N.default], () => [N.default.paymentSources, N.default.hasFetchedPaymentSources]), B = (0, m.useSubscriptionPlansLoaded)((0, T.getSubscriptionSKUs)(t)), {
                    analyticsLocations: j
                } = (0, I.default)(), G = n.useMemo(() => Object.values(O).filter(e => !e.invalid), [O]), [F, w] = n.useState(!1), [k, Y] = n.useState(t.currency), H = async (e, s) => {
                    if (null == t) throw Error("missing subscription and paymentSource");
                    null == e ? await f.changeSubscriptionCurrency(t, s, j, x) : await f.changePaymentSource(t, e, s, j, x), w(!1), Y(s)
                }, V = async (e, s, a) => {
                    w(!0);
                    let n = await (0, C.updateSubscriptionInvoicePreview)({
                        subscriptionId: t.id,
                        paymentSourceId: null == e ? void 0 : e.id,
                        renewal: !0,
                        currency: s,
                        analyticsLocations: j,
                        analyticsLocation: x
                    });
                    D.currency !== n.currency || D.currency === n.currency && D.total !== n.total ? await y(n, () => {
                        a(e, s)
                    }, () => {
                        w(!1)
                    }) : a(e, s)
                }, K = e => {
                    let s = S.default.get(t.planIdForCurrencies);
                    u(null != e, "paymentSource not specified for change"), u(null != s, "Unable to fetch plan");
                    let a = (0, R.getCurrencies)(s.id, e.id, !1),
                        n = a.length > 0 ? a[0] : A.CurrencyCodes.USD;
                    return n
                }, W = e => {
                    null != e && V(e, K(e), H)
                }, z = e => {
                    (0, R.fetchSubscriptionPlansOnNewPaymentSource)(e.id, (0, T.getSubscriptionSKUs)(t)).then(() => {
                        V(e, K(e), H)
                    }), "function" == typeof i && i(e.id)
                }, Z = () => {
                    (0, d.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await s.el("960391").then(s.bind(s, "960391"));
                        return t => (0, a.jsx)(e, {
                            ...t,
                            onAddPaymentSource: z,
                            analyticsLocation: x
                        })
                    }, {
                        onCloseCallback: () => {
                            (0, c.clearError)()
                        },
                        onCloseRequest: A.NOOP
                    })
                };
                if (t.isPurchasedExternally) return (e => {
                    u(null != e.paymentGateway, "Expected payment gateway when managed externally");
                    let t = (0, P.getExternalSubscriptionMethodUrl)(e.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT");
                    return (0, a.jsx)(d.Anchor, {
                        href: t,
                        useDefaultUnderlineStyles: !1,
                        className: L.externalLink,
                        children: (0, a.jsx)(d.Button, {
                            fullWidth: !0,
                            look: d.Button.Looks.FILLED,
                            color: d.Button.Colors.PRIMARY,
                            children: h.default.Messages.BILLING_MANAGE_BILLING
                        })
                    })
                })(t);
                if (!b || !B) return (0, a.jsx)(d.Spinner, {});
                if (!(G.length > 0)) return (0, a.jsx)(d.Button, {
                    fullWidth: !0,
                    look: d.Button.Looks.FILLED,
                    color: l ? d.Button.Colors.BRAND : d.Button.Colors.PRIMARY,
                    onClick: Z,
                    children: h.default.Messages.BILLING_ADD_PAYMENT_METHOD
                });
                else {
                    let e = S.default.get(t.planIdForCurrencies);
                    u(null != e, "Unable to fetch plan");
                    let s = (0, R.getCurrencies)(e, t.paymentSourceId, !1);
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(() => {
                            let e = t.paymentSourceId;
                            return (0, a.jsx)(p.default, {
                                prependOption: null == e ? {
                                    label: h.default.Messages.ATTACH_PAYMENT_SOURCE_PROMPT_OPTION,
                                    value: null
                                } : null,
                                className: g,
                                paymentSources: G,
                                hidePersonalInformation: v,
                                selectedPaymentSourceId: e,
                                onChange: W,
                                onPaymentSourceAdd: Z,
                                dropdownLoading: F,
                                disabled: U
                            })
                        })(), null != t.paymentSourceId ? (0, a.jsx)(E.CurrencyWrapper, {
                            currencies: s,
                            children: (0, a.jsxs)("div", {
                                className: r(L.currency, M.flex, M.alignCenter),
                                children: [(0, a.jsx)("div", {
                                    children: h.default.Messages.PAYMENT_CURRENCY_PAYING_IN
                                }), (0, a.jsx)(E.default, {
                                    className: L.currencyDropdown,
                                    selectedCurrency: k,
                                    currencies: s,
                                    onChange: e => {
                                        V(void 0, e, H)
                                    }
                                })]
                            })
                        }) : null]
                    })
                }
            }
            let y = async (e, t, n) => {
                let i = await (0, d.openModalLazy)(async () => {
                    let {
                        default: i
                    } = await s.el("336811").then(s.bind(s, "336811"));
                    return s => (0, a.jsx)(i, {
                        newInvoice: e,
                        onConfirm: t,
                        onCancel: n,
                        modalProps: s
                    })
                }, {
                    onCloseRequest: () => {
                        null != i && (0, d.closeModal)(i), n()
                    }
                })
            }