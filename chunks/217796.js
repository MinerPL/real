            "use strict";
            s.r(t), s.d(t, {
                OneTimePaymentPredicateStep: function() {
                    return S
                }
            }), s("222007");
            var n = s("37983"),
                l = s("884691"),
                r = s("627445"),
                i = s.n(r),
                a = s("245187"),
                u = s("635357"),
                o = s("642906"),
                d = s("85336"),
                c = s("628738"),
                f = s("49111");

            function S(e) {
                let {
                    handleStepChange: t,
                    handleClose: s
                } = e, {
                    blockedPayments: r,
                    hasFetchedSkus: S,
                    paymentSources: E,
                    hasFetchedPaymentSources: I,
                    application: p,
                    skusById: _,
                    selectedSkuId: T
                } = (0, o.usePaymentContext)(), {
                    isGift: h
                } = (0, u.useGiftContext)(), [C, m] = l.useState(!0);
                return (l.useEffect(() => {
                    let e = null != p;
                    S && I && e && m(!1)
                }, [S, I, p]), l.useEffect(() => {
                    if (C || r) return;
                    i(null != T, "Expected selectedSkuId");
                    let e = _[T];
                    if (h && (null == e ? void 0 : e.productLine) === f.SKUProductLines.COLLECTIBLES) {
                        t(d.Step.GIFT_CUSTOMIZATION);
                        return
                    }
                    if (0 === Object.keys(E).length) {
                        t(d.Step.ADD_PAYMENT_STEPS);
                        return
                    }
                    t(d.Step.REVIEW)
                }, [C, r, t, E, h, _, T]), C) ? (0, n.jsx)(c.default, {}) : r ? (0, n.jsx)(a.BlockedPaymentsContentModal, {
                    onClose: s
                }) : null
            }