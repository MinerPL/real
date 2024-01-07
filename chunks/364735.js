            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return n
                }
            });
            var a, n, i = s("37983"),
                r = s("884691"),
                l = s("414456"),
                u = s.n(l),
                o = s("77078"),
                d = s("339783"),
                c = s("865146"),
                f = s("145131"),
                E = s("712218"),
                p = s("745279"),
                I = s("159885"),
                m = s("782340"),
                _ = s("584565");
            (a = class extends r.PureComponent {
                get typeString() {
                    let {
                        paymentSource: e
                    } = this.props;
                    if (e instanceof c.PaypalSourceRecord) return E.default.Types.PAYPAL;
                    if (e instanceof c.SofortSourceRecord) return E.default.Types.SOFORT;
                    if (e instanceof c.CreditCardSourceRecord) return E.default.getType(e.brand);
                    else if (e instanceof c.GiropaySourceRecord) return E.default.Types.GIROPAY;
                    else if (e instanceof c.Przelewy24SourceRecord) return E.default.Types.PRZELEWY24;
                    else if (e instanceof c.PaysafeSourceRecord) return E.default.Types.PAYSAFECARD;
                    else if (e instanceof c.GcashSourceRecord) return E.default.Types.GCASH;
                    else if (e instanceof c.GrabPayMySourceRecord) return E.default.Types.GRABPAY;
                    else if (e instanceof c.MomoWalletSourceRecord) return E.default.Types.MOMO_WALLET;
                    else if (e instanceof c.VenmoSourceRecord) return E.default.Types.VENMO;
                    else if (e instanceof c.KaKaoPaySourceRecord) return E.default.Types.KAKAOPAY;
                    else if (e instanceof c.GoPayWalletSourceRecord) return E.default.Types.GOPAY_WALLET;
                    else if (e instanceof c.BancontactSourceRecord) return E.default.Types.BANCONTACT;
                    else if (e instanceof c.EPSSourceRecord) return E.default.Types.EPS;
                    else if (e instanceof c.IdealSourceRecord) return E.default.Types.IDEAL;
                    else if (e instanceof c.CashAppSourceRecord) return E.default.Types.CASH_APP;
                    return E.default.Types.UNKNOWN
                }
                getLabel(e) {
                    return e instanceof c.CreditCardSourceRecord ? m.default.Messages.PAYMENT_SOURCE_CARD_ENDING.format({
                        brand: (0, I.upperCaseFirstChar)(e.brand),
                        last_4: e.last4
                    }) : e instanceof c.PaypalSourceRecord ? m.default.Messages.PAYMENT_SOURCE_PAYPAL : e instanceof c.SofortSourceRecord ? m.default.Messages.PAYMENT_SOURCE_SOFORT : e instanceof c.GiropaySourceRecord ? m.default.Messages.PAYMENT_SOURCE_GIROPAY : e instanceof c.Przelewy24SourceRecord ? m.default.Messages.PAYMENT_SOURCE_PRZELEWY24 : e instanceof c.PaysafeSourceRecord ? m.default.Messages.PAYMENT_SOURCE_PAYSAFE_CARD : e instanceof c.GcashSourceRecord ? m.default.Messages.PAYMENT_SOURCE_GCASH : e instanceof c.GrabPayMySourceRecord ? m.default.Messages.PAYMENT_SOURCE_GRABPAY : e instanceof c.MomoWalletSourceRecord ? m.default.Messages.PAYMENT_SOURCE_MOMO_WALLET : e instanceof c.VenmoSourceRecord ? m.default.Messages.PAYMENT_SOURCE_VENMO : e instanceof c.KaKaoPaySourceRecord ? m.default.Messages.PAYMENT_SOURCE_KAKAOPAY : e instanceof c.GoPayWalletSourceRecord ? m.default.Messages.PAYMENT_SOURCE_GOPAY_WALLET : e instanceof c.BancontactSourceRecord ? m.default.Messages.PAYMENT_SOURCE_BANCONTACT : e instanceof c.IdealSourceRecord ? m.default.Messages.PAYMENT_SOURCE_IDEAL_WITH_BANK.format({
                        bank: (0, d.getIdealBankDisplayNameFromBankName)(e.bank)
                    }) : e instanceof c.EPSSourceRecord ? m.default.Messages.PAYMENT_SOURCE_EPS_WITH_BANK.format({
                        bank: (0, d.getEPSBankDisplayNameFromBankName)(e.bank)
                    }) : e instanceof c.CashAppSourceRecord ? m.default.Messages.PAYMENT_SOURCE_CASH_APP_PAY : m.default.Messages.PAYMENT_SOURCE_UNKNOWN
                }
                renderDescription() {
                    let {
                        paymentSource: e,
                        descriptionClassName: t
                    } = this.props;
                    return (0, i.jsx)(o.Text, {
                        className: u(_.description, t),
                        variant: "text-md/semibold",
                        children: this.getLabel(e)
                    })
                }
                renderSubText() {
                    let {
                        paymentSource: e,
                        locale: t
                    } = this.props, s = null;
                    return e instanceof c.CreditCardSourceRecord ? s = m.default.Messages.PAYMENT_SOURCE_CARD_EXPIRES.format({
                        month: (0, p.getLocalizedDisplayMonth)(e.expiresMonth, t),
                        year: e.expiresYear
                    }) : e instanceof c.PaypalSourceRecord ? s = e.email : e instanceof c.SofortSourceRecord ? s = e.email : e instanceof c.Przelewy24SourceRecord ? s = e.email : e instanceof c.VenmoSourceRecord ? s = "@" + e.username : e instanceof c.CashAppSourceRecord && (s = e.username), s
                }
                render() {
                    let {
                        isDefault: e,
                        paymentSource: t,
                        showSubtext: s,
                        isForSubscription: a
                    } = this.props, n = this.renderSubText();
                    return (0, i.jsxs)(f.default, {
                        children: [(0, i.jsx)(E.default, {
                            type: this.typeString
                        }), (0, i.jsxs)(f.default, {
                            direction: f.default.Direction.VERTICAL,
                            className: _.descriptionWrapper,
                            children: [(0, i.jsxs)(f.default, {
                                align: f.default.Align.CENTER,
                                children: [this.renderDescription(), e ? (0, i.jsx)("div", {
                                    className: _.defaultIndicator,
                                    children: m.default.Messages.DEFAULT
                                }) : null, a ? (0, i.jsx)("div", {
                                    className: _.premiumIndicator,
                                    children: m.default.Messages.PAYMENT_SOURCE_SUBSCRIPTION
                                }) : null, t.invalid ? (0, i.jsx)("div", {
                                    className: _.invalidIndicator,
                                    children: m.default.Messages.PAYMENT_SOURCE_INVALID
                                }) : null]
                            }), s && null != n ? (0, i.jsx)("div", {
                                className: _.subText,
                                children: n
                            }) : null]
                        })]
                    })
                }
            }).defaultProps = {
                isForSubscription: !1,
                isDefault: !1,
                showSubtext: !1
            }, n = a