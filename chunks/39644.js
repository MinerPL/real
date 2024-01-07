            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return E
                }
            });
            var n = a("37983"),
                r = a("884691"),
                s = a("446674"),
                l = a("77078"),
                o = a("926223"),
                i = a("712218"),
                u = a("73748"),
                c = a("295583"),
                d = a("782340"),
                p = a("145701");
            class S extends r.PureComponent {
                componentDidMount() {
                    null == this.props.adyenPaymentData && u.reopenCashAppPayWindow()
                }
                render() {
                    var e, t;
                    let {
                        className: a,
                        cashAppPayComponent: r
                    } = this.props, s = this.props.adyenPaymentData, o = null !== (t = null == s ? void 0 : null === (e = s.paymentMethod) || void 0 === e ? void 0 : e.cashtag) && void 0 !== t ? t : "", u = null != s && "" !== o;
                    return (0, n.jsxs)("div", {
                        className: a,
                        children: [(0, n.jsx)(i.default, {
                            type: i.default.Types.CASH_APP,
                            size: i.IconSizes.MEDIUM,
                            className: p.icon
                        }), u ? (0, n.jsxs)(n.Fragment, {
                            children: [(0, n.jsx)(l.Heading, {
                                variant: o.length < 25 ? "heading-xl/bold" : "heading-lg/bold",
                                className: p.connectionInstructions,
                                children: d.default.Messages.PAYMENT_SOURCE_CASH_APP_PAY_CONNECTED_SUCCESS.format({
                                    cashtag: o
                                })
                            }), (0, n.jsx)(l.Text, {
                                variant: "text-md/medium",
                                className: p.connectionInstructions,
                                children: d.default.Messages.PAYMENT_SOURCE_CASH_APP_PAY_CONNECTED_SUCCESS_INSTRUCTIONS
                            })]
                        }) : (0, n.jsx)(l.Text, {
                            variant: "text-md/medium",
                            className: p.connectionInstructions,
                            children: null == r ? d.default.Messages.PAYMENT_SOURCE_CASH_APP_PAY_LOADING : d.default.Messages.PAYMENT_SOURCE_CASH_APP_PAY_CONNECTION_INSTRUCTIONS
                        })]
                    })
                }
            }
            var E = s.default.connectStores([c.default, o.default], () => ({
                cashAppPayComponent: c.default.cashAppPayComponent,
                adyenPaymentData: o.default.adyenPaymentData
            }))(S)