            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return U
                }
            }), s("222007");
            var a = s("37983"),
                n = s("884691"),
                i = s("414456"),
                r = s.n(i),
                l = s("627445"),
                u = s.n(l),
                o = s("974667"),
                d = s("446674"),
                c = s("77078"),
                f = s("913144"),
                E = s("850068"),
                p = s("444949"),
                I = s("775433"),
                m = s("510889"),
                _ = s("386876"),
                N = s("10514"),
                S = s("521012"),
                P = s("145131"),
                R = s("251752"),
                T = s("719923"),
                C = s("942456"),
                A = s("646718"),
                h = s("843455"),
                L = s("782340"),
                M = s("116523"),
                g = s("852225");

            function y(e) {
                let {
                    payments: t,
                    locale: s,
                    compactMode: i,
                    numPages: l
                } = e, u = n.useRef(null), [d, f] = n.useState(0), [p, I] = n.useState(null), _ = t.slice(10 * d, (d + 1) * 10);
                n.useEffect(() => {
                    var e;
                    null === (e = u.current) || void 0 === e || e.scrollTo({
                        to: 0
                    })
                }, [d]);
                let N = n.useCallback(e => {
                        f(e);
                        let s = t[t.length - 1].id;
                        e === l - 1 && p !== s && ((0, E.fetchPayments)(10, s), I(s))
                    }, [t, l, p]),
                    S = (0, m.default)("billing-history", u);
                return (0, a.jsx)(o.ListNavigatorProvider, {
                    navigator: S,
                    children: (0, a.jsx)(o.ListNavigatorContainer, {
                        children: e => {
                            let {
                                ref: t,
                                ...n
                            } = e;
                            return (0, a.jsx)(R.default, {
                                className: r(M.verticalFit, M.paginator),
                                currentPageIndex: d,
                                onChangePage: N,
                                numPages: l,
                                ref: t,
                                ...n,
                                children: (0, a.jsx)(c.AdvancedScroller, {
                                    className: M.bottomDivider,
                                    ref: u,
                                    children: _.map((e, t) => (0, a.jsx)(C.default, {
                                        className: r(M.paymentRow, M.bottomDivider),
                                        payment: e,
                                        locale: s,
                                        compactMode: i
                                    }, t))
                                })
                            })
                        }
                    })
                })
            }
            class x extends n.PureComponent {
                get numPages() {
                    return Math.max(Math.ceil(this.props.payments.length / 10), 1)
                }
                componentDidMount() {
                    f.default.wait(() => {
                        (0, p.fetchActivityStatistics)(), (0, E.fetchPayments)(20)
                    })
                }
                renderPremiumExternalSubscription(e) {
                    return u(null != e.paymentGateway, "Expected payment gateway when rendering for external subscription"), (0, a.jsxs)(c.Card, {
                        className: M.externalRow,
                        children: [(0, a.jsx)("div", {
                            className: M.externalRowHeader,
                            children: L.default.Messages.BILLING_EXTERNAL_HEADER.format({
                                paymentGatewayName: h.PaymentGatewayToFriendlyName[e.paymentGateway]
                            })
                        }), (0, a.jsx)("div", {
                            className: M.externalRowBody,
                            children: L.default.Messages.BILLING_EXTERNAL_DESCRIPTION.format({
                                paymentGatewayName: h.PaymentGatewayToFriendlyName[e.paymentGateway],
                                billingHistoryLink: (0, T.getExternalSubscriptionMethodUrl)(e.paymentGateway, "BILLING_HISTORY")
                            })
                        })]
                    })
                }
                render() {
                    let {
                        compactMode: e,
                        payments: t,
                        subscription: s,
                        locale: n
                    } = this.props, i = null != s && s.isPurchasedExternally;
                    return 0 !== t.length || i ? (0, a.jsxs)("div", {
                        className: M.verticalFit,
                        children: [null != s && i ? this.renderPremiumExternalSubscription(s) : null, t.length > 0 ? (0, a.jsxs)("div", {
                            className: r(M.paymentPane, M.verticalFit),
                            children: [e ? null : (0, a.jsx)("div", {
                                className: r(M.paymentRow, M.bottomDivider),
                                children: (0, a.jsxs)(P.default, {
                                    className: M.paymentRowHeader,
                                    children: [(0, a.jsx)("div", {
                                        className: g.date,
                                        children: L.default.Messages.BILLING_PAYMENT_TABLE_HEADER_DATE
                                    }), (0, a.jsx)("div", {
                                        className: M.paymentRowHeaderDescription,
                                        children: L.default.Messages.BILLING_PAYMENT_TABLE_HEADER_DESCRIPTION
                                    }), (0, a.jsx)("div", {
                                        className: g.amount,
                                        children: L.default.Messages.BILLING_PAYMENT_TABLE_HEADER_AMOUNT
                                    })]
                                })
                            }), (0, a.jsx)(y, {
                                compactMode: e,
                                locale: n,
                                payments: t,
                                numPages: this.numPages
                            })]
                        }) : null]
                    }) : null
                }
                constructor(...e) {
                    super(...e), this.scrollerRef = n.createRef()
                }
            }

            function D(e) {
                var t;
                let s = e.skuId,
                    a = null === (t = e.subscription) || void 0 === t ? void 0 : t.items[0].planId;
                return !(null == s || null == a || Object.values(A.PremiumSubscriptionSKUs).includes(s) || (0, T.isPremiumSubscriptionPlan)(a))
            }

            function U(e) {
                let t = (0, d.useStateFromStores)([_.default], () => _.default.getPayments()),
                    s = (0, d.useStateFromStores)([S.default], () => S.default.getPremiumTypeSubscription()),
                    i = n.useMemo(() => new Set(t.filter(D).map(e => {
                        let {
                            subscription: t
                        } = e;
                        return null == t ? void 0 : t.items[0].planId
                    })), [t]),
                    r = n.useMemo(() => new Set(t.filter(D).map(e => {
                        let {
                            skuId: t
                        } = e;
                        return t
                    })), [t]),
                    l = (0, d.useStateFromStoresArray)([N.default], () => N.default.getPlanIdsForSkus(Array.from(r))),
                    u = n.useCallback(() => l.length === i.size, [l, i]);
                return n.useEffect(() => {
                    !u() && f.default.wait(() => {
                        r.forEach(e => (0, I.fetchSubscriptionPlansForSKU)(e, void 0, void 0, !0, void 0))
                    })
                }, [u, r]), (0, a.jsx)(x, {
                    ...e,
                    payments: u() ? t : [],
                    subscription: s
                })
            }
            x.defaultProps = {
                compactMode: !1
            }