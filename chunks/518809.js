            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return f
                }
            });
            var n = a("37983"),
                r = a("884691"),
                s = a("446674"),
                l = a("77078"),
                o = a("82731"),
                u = a("40597"),
                c = a("926223"),
                i = a("712218"),
                d = a("782340"),
                E = a("30325");
            class p extends r.PureComponent {
                componentDidMount() {
                    null != this.props.paypalClient && o.tokenizePayPal()
                }
                componentWillUnmount() {
                    o.teardownPaypal().then(() => o.createPayPalClient())
                }
                render() {
                    let {
                        braintreeEmail: e,
                        className: t,
                        paypalClient: a
                    } = this.props;
                    return (0, n.jsx)(l.FormSection, {
                        className: t,
                        title: d.default.Messages.PAYMENT_SOURCE_PAYPAL_ACCOUNT,
                        children: (0, n.jsxs)("div", {
                            className: E.inputWrapper,
                            children: [(0, n.jsx)(i.default, {
                                type: i.default.Types.PAYPAL,
                                className: E.paypalIcon
                            }), (0, n.jsx)(l.TextInput, {
                                value: e,
                                editable: !1,
                                readOnly: !0,
                                placeholder: null == a ? d.default.Messages.PAYMENT_SOURCE_PAYPAL_LOADING : d.default.Messages.PAYMENT_SOURCE_CONFIRM_PAYPAL_DETAILS,
                                inputClassName: E.paypalInput
                            })]
                        })
                    })
                }
            }
            var f = s.default.connectStores([u.default, c.default], () => ({
                braintreeEmail: c.default.braintreeEmail,
                paypalClient: u.default.getPayPalClient()
            }))(p)