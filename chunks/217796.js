            "use strict";
            n.r(t), n.d(t, {
                OneTimePaymentPredicateStep: function() {
                    return h
                }
            }), n("222007");
            var r = n("37983"),
                u = n("884691"),
                s = n("627445"),
                l = n.n(s),
                i = n("245187"),
                o = n("635357"),
                a = n("642906"),
                c = n("85336"),
                d = n("628738"),
                f = n("49111");

            function h(e) {
                let {
                    handleStepChange: t,
                    handleClose: n
                } = e, {
                    blockedPayments: s,
                    hasFetchedSkus: h,
                    paymentSources: p,
                    hasFetchedPaymentSources: v,
                    application: S,
                    skusById: E,
                    selectedSkuId: m
                } = (0, a.usePaymentContext)(), {
                    isGift: x
                } = (0, o.useGiftContext)(), [I, C] = u.useState(!0);
                return (u.useEffect(() => {
                    let e = null != S;
                    h && v && e && C(!1)
                }, [h, v, S]), u.useEffect(() => {
                    if (I || s) return;
                    l(null != m, "Expected selectedSkuId");
                    let e = E[m];
                    if (x && (null == e ? void 0 : e.productLine) === f.SKUProductLines.COLLECTIBLES) {
                        t(c.Step.GIFT_CUSTOMIZATION);
                        return
                    }
                    if (0 === Object.keys(p).length) {
                        t(c.Step.ADD_PAYMENT_STEPS);
                        return
                    }
                    t(c.Step.REVIEW)
                }, [I, s, t, p, x, E, m]), I) ? (0, r.jsx)(d.default, {}) : s ? (0, r.jsx)(i.BlockedPaymentsContentModal, {
                    onClose: n
                }) : null
            }