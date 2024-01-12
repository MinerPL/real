            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("414456"),
                l = n.n(i),
                o = n("153160"),
                s = n("646718"),
                a = n("782340"),
                u = n("552033");

            function c(e) {
                let {
                    price: t,
                    currency: n,
                    intervalType: i,
                    className: c,
                    intervalCount: d = 1,
                    isPrepaidPaymentSource: f = !1
                } = e, E = (0, o.formatPrice)(t, n), _ = null;
                return i === s.SubscriptionIntervalTypes.YEAR ? _ = a.default.Messages.BILLING_PRICE_PER_YEAR_BOLD.format({
                    price: E
                }) : i === s.SubscriptionIntervalTypes.MONTH && 1 === d ? _ = a.default.Messages.BILLING_PRICE_PER_MONTH_BOLD.format({
                    price: E
                }) : i === s.SubscriptionIntervalTypes.MONTH && d > 1 && (_ = a.default.Messages.BILLING_PRICE_PER_MULTI_MONTHS_BOLD.format({
                    price: E,
                    intervalCount: d
                })), (0, r.jsx)("div", {
                    className: l(u.pricePerInterval, c),
                    "data-testid": "PricePerInterval-".concat(n),
                    children: null == i || f ? (0, r.jsx)("strong", {
                        children: E
                    }) : _
                })
            }