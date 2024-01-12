            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return g
                }
            }), s("222007");
            var a = s("37983");
            s("884691");
            var n = s("627445"),
                l = s.n(n),
                i = s("77078"),
                r = s("812204"),
                o = s("685665"),
                d = s("10514"),
                u = s("719923"),
                c = s("153160"),
                S = s("809071"),
                E = s("646718"),
                f = s("49111"),
                T = s("782340"),
                m = s("700135");

            function _(e) {
                let {
                    subscription: t,
                    withOverheadSeparator: s
                } = e, {
                    analyticsLocations: n
                } = (0, o.default)(), [_] = (0, S.useSubscriptionInvoicePreview)({
                    subscriptionId: t.id,
                    renewal: !0,
                    analyticsLocations: n,
                    analyticsLocation: r.default.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT
                });
                if (null == _) return null;
                let g = s ? m.finePrintWithOverheadSeparator : m.finePrint,
                    h = _.invoiceItems.find(e => {
                        let {
                            subscriptionPlanId: t
                        } = e;
                        return (0, u.isPremiumBaseSubscriptionPlan)(t)
                    });
                if (null == h) return null;
                let I = h.subscriptionPlanId,
                    N = d.default.get(I);
                l(null != N, "Missing plan");
                let p = (0, c.formatPrice)(_.total, _.currency),
                    C = "";
                return N.interval === E.SubscriptionIntervalTypes.YEAR ? C = T.default.Messages.BILLING_PAYMENT_PREMIUM_TERMS_LEGALESE_YEARLY.format({
                    price: p,
                    termsUrl: f.MarketingURLs.TERMS,
                    paidURL: f.MarketingURLs.PAID_TERMS,
                    privacyUrl: f.MarketingURLs.PRIVACY
                }) : N.interval === E.SubscriptionIntervalTypes.MONTH && (C = 1 === N.intervalCount ? T.default.Messages.BILLING_PAYMENT_PREMIUM_TERMS_LEGALESE_MONTHLY.format({
                    price: p,
                    termsUrl: f.MarketingURLs.TERMS,
                    paidURL: f.MarketingURLs.PAID_TERMS,
                    privacyUrl: f.MarketingURLs.PRIVACY
                }) : T.default.Messages.BILLING_PAYMENT_PREMIUM_TERMS_LEGALESE_MULTI_MONTH.format({
                    price: p,
                    termsUrl: f.MarketingURLs.TERMS,
                    paidURL: f.MarketingURLs.PAID_TERMS,
                    privacyUrl: f.MarketingURLs.PRIVACY,
                    intervalCount: N.intervalCount
                })), (0, a.jsx)(i.Text, {
                    color: "text-muted",
                    className: g,
                    variant: "text-xs/normal",
                    children: C
                })
            }

            function g(e) {
                let {
                    subscription: t,
                    withOverheadSeparator: s
                } = e;
                return t.status === f.SubscriptionStatusTypes.CANCELED || t.isPurchasedExternally ? null : (0, a.jsx)(_, {
                    subscription: t,
                    withOverheadSeparator: s
                })
            }