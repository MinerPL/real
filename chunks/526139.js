            "use strict";
            s.r(t), s.d(t, {
                COLLECTIBLES_ADD_PAYMENT_STEP_CONFIG: function() {
                    return u
                }
            });
            var n = s("37983");
            s("884691");
            var r = s("357957"),
                l = s("635357"),
                i = s("85336"),
                a = s("262683");
            let u = {
                key: i.Step.ADD_PAYMENT_STEPS,
                renderStep: e => (0, n.jsx)(o, {
                    ...e
                }),
                options: {
                    renderHeader: !0
                }
            };

            function o(e) {
                let {
                    isGift: t
                } = (0, l.useGiftContext)();
                return (0, n.jsx)(n.Fragment, {
                    children: (0, n.jsx)(a.PaymentModalAddPaymentStep, {
                        ...e,
                        breadcrumbSteps: [i.Step.ADD_PAYMENT_STEPS, i.Step.REVIEW, i.Step.CONFIRM],
                        onReturn: () => {
                            let s = r.default.paymentSources;
                            if (0 === Object.keys(s).length) {
                                if (t) {
                                    e.handleStepChange(i.Step.GIFT_CUSTOMIZATION);
                                    return
                                }
                                e.handleClose()
                            } else e.handleStepChange(i.Step.REVIEW, {
                                trackedFromStep: i.Step.ADD_PAYMENT_STEPS
                            })
                        }
                    })
                })
            }