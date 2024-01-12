            "use strict";
            s.r(t), s.d(t, {
                ONE_TIME_PAYMENT_PREDICATE_STEP_CONFIG: function() {
                    return f
                },
                ONE_TIME_PAYMENT_ADD_PAYMENT_STEP_CONFIG: function() {
                    return S
                },
                REVIEW_STEP_CONFIG: function() {
                    return p
                },
                ONE_TIME_PAYMENT_CONFIRM_STEP_CONFIG: function() {
                    return _
                },
                SHARED_STEP_CONFIGS: function() {
                    return T
                }
            });
            var n = s("37983");
            s("884691");
            var r = s("357957"),
                l = s("85336"),
                i = s("262683"),
                a = s("946359"),
                u = s("724269"),
                o = s("7127"),
                d = s("99836"),
                c = s("217796");
            let f = {
                    key: null,
                    renderStep: e => (0, n.jsx)(c.OneTimePaymentPredicateStep, {
                        ...e
                    })
                },
                S = {
                    key: l.Step.ADD_PAYMENT_STEPS,
                    renderStep: e => (0, n.jsx)(n.Fragment, {
                        children: (0, n.jsx)(i.PaymentModalAddPaymentStep, {
                            ...e,
                            breadcrumbSteps: [l.Step.ADD_PAYMENT_STEPS, l.Step.REVIEW, l.Step.CONFIRM],
                            onReturn: () => {
                                let t = r.default.paymentSources;
                                0 === Object.keys(t).length ? e.handleClose() : e.handleStepChange(l.Step.REVIEW, {
                                    trackedFromStep: l.Step.ADD_PAYMENT_STEPS
                                })
                            }
                        })
                    }),
                    options: {
                        renderHeader: !0
                    }
                },
                E = {
                    key: l.Step.AWAITING_PURCHASE_TOKEN_AUTH,
                    renderStep: () => (0, n.jsx)(u.default, {})
                },
                I = {
                    key: l.Step.AWAITING_AUTHENTICATION,
                    renderStep: () => (0, n.jsx)(a.default, {})
                },
                p = {
                    key: l.Step.REVIEW,
                    renderStep: e => (0, n.jsx)(d.PaymentModalReviewStep, {
                        ...e
                    })
                },
                _ = {
                    key: l.Step.CONFIRM,
                    renderStep: e => (0, n.jsx)(o.PaymentModalConfirmStep, {
                        ...e
                    })
                },
                T = [E, I]