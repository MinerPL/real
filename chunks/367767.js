            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return E
                }
            });
            var n = a("37983");
            a("884691");
            var r = a("414456"),
                s = a.n(r),
                l = a("77078"),
                o = a("448993"),
                i = a("736978"),
                u = a("642906"),
                c = a("85336"),
                d = a("49111"),
                p = a("782340"),
                S = a("732602");

            function E(e) {
                let {
                    planError: t,
                    purchaseErrorBlockRef: a,
                    className: r
                } = e, {
                    currencies: E,
                    paymentError: m,
                    purchaseError: A
                } = (0, u.usePaymentContext)(), T = null;
                null != m && null == (0, c.errorToStep)(m) ? T = m : null != A ? T = A : null != t && (T = t);
                let y = E.length > 1,
                    P = null != T ? T.message : "";
                return (null != T && T instanceof o.BillingError && (T.code === i.ErrorCodes.CARD_DECLINED && y && (P += " ".concat(p.default.Messages.BILLING_ERROR_TRY_ANOTHER)), T.code === i.ErrorCodes.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (P = p.default.Messages.GIFT_CODE_SMITE_REJECT_HELP_TEXT), T.code === d.AbortCodes.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (P = p.default.Messages.GIFT_CODE_PAYMENT_SOURCE_INVALID)), null == T) ? null : (0, n.jsx)("div", {
                    className: s(S.errorBlockWrapper, r),
                    children: (0, n.jsx)(l.FormErrorBlock, {
                        ref: a,
                        children: P
                    })
                })
            }