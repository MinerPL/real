            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            }), n("222007");
            var s = n("37983"),
                r = n("884691"),
                l = n("465527"),
                i = n("50517"),
                a = n("153727"),
                u = n("650484"),
                o = n("199142");

            function c() {
                let [e, t] = r.useState(!1), n = async () => {
                    t(!0), await (0, l.resendPaymentVerificationEmail)()
                };
                return (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)(a.default, {}), (0, s.jsx)(u.PaymentPortalBody, {
                        children: (0, s.jsx)(i.AwaitingPurchaseTokenAuthStepBody, {
                            className: o.body,
                            isEmailResent: e,
                            resendEmail: n
                        })
                    }), (0, s.jsx)(u.PaymentPortalFooter, {
                        children: (0, s.jsx)(i.AwaitingPurchaseTokenAuthStepFooter, {})
                    })]
                })
            }