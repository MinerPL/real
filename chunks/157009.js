            "use strict";
            a.r(t), a.d(t, {
                AwaitingAuthenticationStepBody: function() {
                    return c
                },
                AwaitingAuthenticationStep: function() {
                    return d
                }
            });
            var n = a("37983");
            a("884691");
            var r = a("627445"),
                s = a.n(r),
                l = a("77078"),
                o = a("642906"),
                i = a("273619"),
                u = a("782340");
            let c = e => {
                let {
                    className: t
                } = e;
                return (0, n.jsx)(l.FormSection, {
                    className: t,
                    children: (0, n.jsx)(l.FormTitle, {
                        children: u.default.Messages.PAYMENT_WAITING_FOR_AUTHENTICATION
                    })
                })
            };

            function d(e) {
                let {
                    steps: t,
                    currentStep: a,
                    paymentError: r,
                    className: l
                } = e, {
                    steps: u,
                    step: d,
                    paymentError: p
                } = (0, o.usePaymentContext)();
                return t = null != t ? t : u, null == a && null != d && (a = d), s(a, "step should be set"), s(t, "step should be set"), r = null != r ? r : p, (0, n.jsx)(i.default, {
                    steps: t,
                    currentStep: a,
                    paymentError: r,
                    body: (0, n.jsx)(c, {
                        className: l
                    }),
                    footer: null
                })
            }