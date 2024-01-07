            "use strict";
            a.r(t), a.d(t, {
                PaymentRequestStepBody: function() {
                    return i
                }
            });
            var n = a("37983");
            a("884691");
            var r = a("414456"),
                s = a.n(r),
                l = a("77078"),
                o = a("712218"),
                u = a("782340"),
                c = a("639932");
            let i = e => {
                let {
                    className: t,
                    submitting: a,
                    stripePaymentMethod: r
                } = e, {
                    card: i
                } = null != r ? r : {}, d = null != i ? o.default.getType(i.brand) : o.default.Types.UNKNOWN;
                return (0, n.jsx)(l.FormSection, {
                    className: t,
                    title: u.default.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_TITLE,
                    children: (0, n.jsxs)("div", {
                        className: c.cardNumberWrapper,
                        children: [(0, n.jsx)(o.default, {
                            className: s(c.cardIcon, {
                                [c.submitting]: a
                            }),
                            type: d
                        }), (0, n.jsx)(l.TextInput, {
                            value: a && null != i ? u.default.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_CREATING.format(i) : void 0,
                            editable: !1,
                            readOnly: !0,
                            placeholder: u.default.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_LOADING,
                            inputClassName: c.cardNumberInput
                        })]
                    })
                })
            }