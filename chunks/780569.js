            "use strict";
            a.r(t), a.d(t, {
                AddressStepBody: function() {
                    return _
                },
                AddressStepFooter: function() {
                    return A
                }
            });
            var n = a("37983"),
                r = a("884691"),
                s = a("446674"),
                l = a("77078"),
                o = a("18502"),
                u = a("821879"),
                c = a("915639"),
                i = a("160299"),
                d = a("145131"),
                E = a("45640"),
                p = a("49111"),
                f = a("782340"),
                m = a("36662");
            let _ = e => {
                    let t, {
                            billingAddressInfo: a,
                            billingError: d,
                            onBillingAddressChange: _,
                            paymentSourceType: A
                        } = e,
                        N = null != d && (null == d.code || (0, E.errorToStep)(d) === E.Steps.ADDRESS),
                        T = (0, s.useStateFromStores)([c.default], () => c.default.locale);
                    switch (A) {
                        case p.PaymentSourceTypes.CARD:
                            t = "en-US" === T ? 1 === (0, u.reducedPaymentInfoExperiment)().bucket ? o.default.Layouts.MODAL_US_REDUCED : o.default.Layouts.MODAL_US : o.default.Layouts.MODAL_INTL;
                            break;
                        case p.PaymentSourceTypes.GIROPAY:
                        case p.PaymentSourceTypes.PAYSAFE_CARD:
                        case p.PaymentSourceTypes.GCASH:
                        case p.PaymentSourceTypes.GRABPAY_MY:
                        case p.PaymentSourceTypes.MOMO_WALLET:
                        case p.PaymentSourceTypes.KAKAOPAY:
                        case p.PaymentSourceTypes.GOPAY_WALLET:
                        case p.PaymentSourceTypes.BANCONTACT:
                            t = "en-US" === T ? o.default.Layouts.MODAL_US_WITH_NAME : o.default.Layouts.MODAL_INTL_WITH_NAME;
                            break;
                        case p.PaymentSourceTypes.VENMO:
                        case p.PaymentSourceTypes.CASH_APP:
                            t = o.default.Layouts.MODAL_US_WITH_NAME;
                            break;
                        default:
                            t = "en-US" === T ? o.default.Layouts.MODAL_US : o.default.Layouts.MODAL_INTL
                    }
                    let S = (0, s.useStateFromStores)([i.default], () => i.default.ipCountryCode);
                    return 0 === a.country.length && (a.country = null != S ? S : ""), (0, n.jsxs)(r.Fragment, {
                        children: [N ? (0, n.jsx)(l.FormErrorBlock, {
                            className: m.errorBlock,
                            children: f.default.Messages.BILLING_ERROR_SECTION_ADDRESS
                        }) : null, (0, n.jsx)(o.default, {
                            className: m.formItem,
                            onBillingAddressChange: _,
                            error: d,
                            layout: t,
                            ...a
                        })]
                    })
                },
                A = e => {
                    let {
                        isBillingAddressInfoValid: t,
                        submitting: a,
                        onContinue: r,
                        renderBackButton: s
                    } = e;
                    return (0, n.jsxs)(l.ModalFooter, {
                        justify: d.default.Justify.BETWEEN,
                        direction: d.default.Direction.HORIZONTAL,
                        children: [s(), (0, n.jsx)(l.Button, {
                            type: "submit",
                            disabled: !t,
                            submitting: a,
                            onClick: r,
                            children: f.default.Messages.NEXT
                        })]
                    })
                }