            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return m
                }
            }), a("222007");
            var n = a("37983"),
                r = a("884691"),
                s = a("77078"),
                l = a("605250"),
                o = a("145131"),
                u = a("712218"),
                c = a("773336"),
                i = a("520713"),
                d = a("49111"),
                E = a("782340");
            let p = new l.default("PaymentRequest");
            class f extends r.Component {
                componentDidMount() {
                    (0, i.getStripe)().then(e => {
                        this.initPaymentRequest(e)
                    })
                }
                render() {
                    let {
                        canMakePayment: e
                    } = this.state;
                    if (null == e) return (0, n.jsx)(s.Button, {
                        submitting: !0,
                        look: s.Button.Looks.FILLED
                    });
                    if (!1 === e) return (0, n.jsx)(s.Button, {
                        disabled: !0,
                        look: s.Button.Looks.FILLED,
                        children: E.default.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_UNSUPPORTED
                    });
                    let t = (0, c.isAndroidChrome)(),
                        a = t ? E.default.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_BUTTON_GPAY : E.default.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_BUTTON_GENERIC,
                        r = t ? u.default.Types.G_PAY : u.default.Types.PAYMENT_REQUEST,
                        {
                            className: l,
                            iconClassName: i
                        } = this.props;
                    return (0, n.jsx)(s.Button, {
                        onClick: this.handleOnClick,
                        className: l,
                        children: (0, n.jsxs)(o.default, {
                            align: o.default.Align.CENTER,
                            children: [(0, n.jsx)(u.default, {
                                className: i,
                                type: r
                            }), a]
                        })
                    }, d.PaymentSourceTypes.PAYMENT_REQUEST)
                }
                constructor(...e) {
                    super(...e), this.state = {}, this.initPaymentRequest = async e => {
                        if (null == e) return;
                        let t = e.paymentRequest({
                                country: "US",
                                currency: "usd",
                                total: {
                                    label: this.props.paymentLabel,
                                    amount: 0,
                                    pending: !0
                                },
                                requestPayerName: !0
                            }),
                            {
                                onStripePaymentMethodReceived: a
                            } = this.props;
                        t.on("paymentmethod", e => {
                            let {
                                complete: t,
                                paymentMethod: n
                            } = e;
                            a(n), t("success")
                        }), t.on("cancel", () => {
                            a(null)
                        });
                        let n = await t.canMakePayment();
                        p.info("PaymentRequest availablity check", n), this.setState({
                            canMakePayment: !!n,
                            paymentRequest: t
                        })
                    }, this.handleOnClick = () => {
                        let {
                            onChooseType: e
                        } = this.props;
                        e(d.PaymentSourceTypes.PAYMENT_REQUEST);
                        let {
                            paymentRequest: t
                        } = this.state;
                        null != t && t.show()
                    }
                }
            }
            var m = f