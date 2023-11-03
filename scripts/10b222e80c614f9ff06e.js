(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["53265"], {
        788666: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                checkoutTOSExperiment: function() {
                    return a
                }
            });
            var i = t("862205");
            let r = (0, i.createExperiment)({
                id: "2023-05_checkout_terms_of_service",
                label: "Checkout Terms of Service",
                kind: "user",
                defaultConfig: {
                    bucket: 0,
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "remove-checkbox-with-ui-changes",
                    config: {
                        bucket: 1,
                        enabled: !0
                    }
                }, {
                    id: 2,
                    label: "remove-checkbox-only",
                    config: {
                        bucket: 2,
                        enabled: !0
                    }
                }]
            });

            function a(e) {
                let {
                    autoTrackExposure: n
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                    autoTrackExposure: !0
                };
                return r.getCurrentConfig({
                    location: e
                }, {
                    autoTrackExposure: n
                })
            }
        },
        296253: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                default: function() {
                    return l
                }
            });
            var i = t("446674"),
                r = t("357957"),
                a = t("521012");

            function l() {
                let e = (0, i.useStateFromStores)([a.default], () => a.default.getPremiumTypeSubscription()),
                    n = (0, i.useStateFromStores)([r.default], () => {
                        var n;
                        return (null == e ? void 0 : e.paymentSourceId) != null ? null === (n = r.default.getPaymentSource(e.paymentSourceId)) || void 0 === n ? void 0 : n.country : null
                    });
                return n
            }
        },
        883662: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                PremiumInvoiceTable: function() {
                    return c
                },
                PremiumInvoiceTableHeader: function() {
                    return I
                },
                PremiumInvoiceTableRow: function() {
                    return d
                },
                PremiumInvoiceDiscountedTableRow: function() {
                    return m
                },
                PremiumInvoiceTableDivider: function() {
                    return T
                },
                PremiumInvoiceTableTotalRow: function() {
                    return _
                },
                PremiumInvoiceTableFinePrint: function() {
                    return P
                }
            });
            var i = t("37983");
            t("884691");
            var r = t("414456"),
                a = t.n(r),
                l = t("798609"),
                s = t("153160"),
                u = t("782340"),
                o = t("889454");

            function c(e) {
                let {
                    children: n,
                    className: t
                } = e;
                return (0, i.jsx)("div", {
                    className: a(o.table, t),
                    children: n
                })
            }

            function I(e) {
                let {
                    children: n
                } = e;
                return (0, i.jsx)("div", {
                    className: o.header,
                    children: n
                })
            }

            function d(e) {
                let {
                    label: n,
                    value: t,
                    className: r
                } = e;
                return (0, i.jsxs)("div", {
                    className: a(o.row, r),
                    children: [(0, i.jsx)("div", {
                        className: o.rowLabel,
                        children: n
                    }), (0, i.jsx)("div", {
                        className: o.rowAmount,
                        children: t
                    })]
                })
            }

            function m(e) {
                let {
                    label: n,
                    value: t,
                    discounts: r,
                    originalAmount: a,
                    interval: c,
                    currency: I,
                    className: m,
                    intervalCount: T
                } = e, _ = e => null != r ? r.find(n => n.type === e) : null, P = _(l.InvoiceDiscountTypes.SUBSCRIPTION_PLAN), v = _(l.InvoiceDiscountTypes.ENTITLEMENT), f = null != P ? Math.floor(P.amount / a * 100) : null, M = (0, s.formatPrice)(a, I);
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(d, {
                        label: n,
                        value: (0, i.jsxs)(i.Fragment, {
                            children: [t, null != f ? (0, i.jsxs)("div", {
                                className: o.rowPercentDiscount,
                                children: ["-", f, "%"]
                            }) : null]
                        }),
                        className: m
                    }), null != f ? (0, i.jsxs)("div", {
                        className: o.rowDiscountOriginalPrice,
                        children: ["(", null != c && null != T ? (0, s.formatRate)(M, c, T) : M, ")"]
                    }) : null, null != v ? (0, i.jsx)("div", {
                        className: o.entitlementDiscountRow,
                        children: u.default.Messages.BILLING_INVOICE_SUBSCRIPTION_CREDIT_APPLIED
                    }) : null]
                })
            }

            function T(e) {
                let {
                    extended: n = !1,
                    negativeMarginTop: t = !1
                } = e;
                return (0, i.jsx)("div", {
                    className: a(o.divider, {
                        [o.dividerExtended]: n,
                        [o.negativeMarginTop]: t
                    })
                })
            }

            function _(e) {
                let {
                    label: n,
                    value: t,
                    className: r
                } = e;
                return (0, i.jsxs)("div", {
                    className: a(o.totalRow, r),
                    children: [(0, i.jsx)("div", {
                        className: o.totalLabel,
                        children: n
                    }), (0, i.jsx)("div", {
                        className: o.totalAmount,
                        children: t
                    })]
                })
            }

            function P(e) {
                let {
                    children: n,
                    className: t
                } = e;
                return (0, i.jsx)("div", {
                    className: a(o.finePrint, t),
                    children: n
                })
            }
        },
        991329: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                default: function() {
                    return s
                }
            });
            var i = t("37983");
            t("884691");
            var r = t("153160"),
                a = t("883662"),
                l = t("782340");

            function s(e) {
                let {
                    invoice: n
                } = e;
                return n.taxInclusive || n.tax <= 0 ? null : (0, i.jsx)(a.PremiumInvoiceTableRow, {
                    label: l.default.Messages.TAX_LABEL,
                    value: (0, r.formatPrice)(n.tax, n.currency)
                })
            }
        },
        146163: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                PremiumInvoiceLabelWithAdjustment: function() {
                    return D
                },
                PremiumSubscriptionCurrentInvoiceRows: function() {
                    return y
                },
                PremiumSubscriptionChangePlanInvoiceRows: function() {
                    return j
                },
                SubscriptionPeriodResetNotice: function() {
                    return G
                },
                SubscriptionInvoiceFooter: function() {
                    return H
                },
                SubscriptionInvoiceGift: function() {
                    return Y
                },
                PremiumTrialInvoiceTableRow: function() {
                    return k
                }
            });
            var i = t("37983"),
                r = t("884691"),
                a = t("414456"),
                l = t.n(a),
                s = t("627445"),
                u = t.n(s),
                o = t("446674"),
                c = t("77078"),
                I = t("798609"),
                d = t("812204"),
                m = t("685665"),
                T = t("788666"),
                _ = t("10514"),
                P = t("461380"),
                v = t("834179"),
                f = t("701909"),
                M = t("719923"),
                R = t("153160"),
                N = t("809071"),
                p = t("643619"),
                E = t("917247"),
                S = t("883662"),
                b = t("991329"),
                U = t("646718"),
                L = t("49111"),
                O = t("782340"),
                C = t("616006");
            let A = (e, n) => {
                    var t;
                    return !!(null === (t = e.discounts) || void 0 === t ? void 0 : t.some(e => e.type === n))
                },
                x = (e, n) => {
                    var t, i, r;
                    return e.subscriptionPlanPrice - (null !== (r = null === (i = e.discounts) || void 0 === i ? void 0 : null === (t = i.find(e => e.type === n)) || void 0 === t ? void 0 : t.amount) && void 0 !== r ? r : 0)
                };

            function g(e) {
                var n;
                let {
                    invoiceItem: t,
                    overrideAmount: r,
                    showGuildSubscriptionAdjustmentTooltip: a,
                    currency: l,
                    className: s,
                    isPrepaidPaymentSource: d,
                    referralTrialOfferId: m
                } = e, T = (0, o.useStateFromStores)([_.default], () => _.default.get(t.subscriptionPlanId)), P = null === (n = (0, E.usePremiumTrialOffer)(m)) || void 0 === n ? void 0 : n.subscription_trial;
                u(null != T, "Missing subscriptionPlan");
                let f = (0, M.formatIntervalDuration)({
                        intervalType: null == P ? void 0 : P.interval,
                        intervalCount: null == P ? void 0 : P.interval_count
                    }),
                    N = function(e, n, t, i) {
                        let r = A(e, I.InvoiceDiscountTypes.PREMIUM_TRIAL);
                        switch (e.subscriptionPlanId) {
                            case U.SubscriptionPlans.PREMIUM_MONTH_LEGACY:
                            case U.SubscriptionPlans.PREMIUM_YEAR_LEGACY:
                            case U.SubscriptionPlans.PREMIUM_MONTH_TIER_0:
                            case U.SubscriptionPlans.PREMIUM_YEAR_TIER_0:
                            case U.SubscriptionPlans.PREMIUM_MONTH_TIER_1:
                            case U.SubscriptionPlans.PREMIUM_YEAR_TIER_1:
                            case U.SubscriptionPlans.PREMIUM_MONTH_TIER_2:
                            case U.SubscriptionPlans.PREMIUM_YEAR_TIER_2:
                            case U.SubscriptionPlans.PREMIUM_3_MONTH_TIER_2:
                            case U.SubscriptionPlans.PREMIUM_6_MONTH_TIER_2:
                                return (0, M.getDisplayName)(e.subscriptionPlanId, r, t, i);
                            case U.SubscriptionPlans.PREMIUM_3_MONTH_GUILD:
                            case U.SubscriptionPlans.PREMIUM_6_MONTH_GUILD:
                                return O.default.Messages.PREMIUM_GUILD_NUM_MULTI_MONTHS_GUILD_SUBSCRIPTIONS.format({
                                    num: e.quantity,
                                    intervalCount: n.intervalCount
                                });
                            case U.SubscriptionPlans.PREMIUM_MONTH_GUILD:
                                return O.default.Messages.PREMIUM_GUILD_NUM_MONTH_GUILD_SUBSCRIPTIONS.format({
                                    num: e.quantity
                                });
                            case U.SubscriptionPlans.PREMIUM_YEAR_GUILD:
                                return O.default.Messages.PREMIUM_GUILD_NUM_YEAR_GUILD_SUBSCRIPTIONS.format({
                                    num: e.quantity
                                })
                        }
                        switch (n.interval) {
                            case U.SubscriptionIntervalTypes.MONTH:
                                if (1 === n.intervalCount) return O.default.Messages.MONTHLY_GUILD_SUBSCRIPTION.format({
                                    planName: n.name
                                });
                                return O.default.Messages.MULTI_MONTHS_GUILD_SUBSCRIPTION.format({
                                    planName: n.name,
                                    intervalCount: n.intervalCount
                                });
                            case U.SubscriptionIntervalTypes.YEAR:
                                return O.default.Messages.YEARLY_GUILD_SUBSCRIPTION.format({
                                    planName: n.name
                                })
                        }
                        throw Error("Unexpected invoice plan: ".concat(e.subscriptionPlanId))
                    }(t, T, d, f);
                !0 === a && (N = (0, i.jsxs)("div", {
                    className: C.invoiceItemLabelWithIcon,
                    children: [(0, i.jsxs)("div", {
                        children: [N, " "]
                    }), (0, i.jsx)(c.Tooltip, {
                        text: O.default.Messages.PREMIUM_SUBSCRIPTION_GUILD_SUBSCRIPTION_ADJUSTMENT_TOOLTIP.format(),
                        "aria-label": O.default.Messages.PREMIUM_SUBSCRIPTION_GUILD_SUBSCRIPTION_ADJUSTMENT_TEXT,
                        tooltipClassName: C.invoiceItemTooltip,
                        children: e => (0, i.jsx)(v.default, {
                            ...e,
                            className: C.invoiceItemLabelIcon
                        })
                    })]
                }));
                let p = (0, R.formatPrice)(null != r ? r : t.amount, l),
                    b = d ? p : (0, R.formatRate)(p, T.interval, T.intervalCount);
                return (0, i.jsx)(S.PremiumInvoiceDiscountedTableRow, {
                    label: N,
                    value: b,
                    originalAmount: t.subscriptionPlanPrice * t.quantity,
                    discounts: t.discounts,
                    interval: T.interval,
                    intervalCount: T.intervalCount,
                    currency: l,
                    className: s
                })
            }

            function D(e) {
                let {
                    label: n,
                    tooltipText: t,
                    tooltipAriaLabel: r
                } = e;
                return (0, i.jsxs)("div", {
                    className: C.invoiceItemLabelWithIcon,
                    children: [n, (0, i.jsx)(c.Tooltip, {
                        clickableOnMobile: !0,
                        text: t,
                        "aria-label": r,
                        tooltipClassName: C.invoiceItemTooltip,
                        children: e => (0, i.jsx)(v.default, {
                            ...e,
                            className: C.invoiceItemLabelIcon
                        })
                    })]
                })
            }

            function y(e) {
                let {
                    invoice: n,
                    isPrepaidPaymentSource: t
                } = e, r = (0, p.coalesceInvoiceItems)(n.invoiceItems), a = r.find(e => !(0, M.isPremiumGuildSubscriptionPlan)(e.subscriptionPlanId) && e.amount >= 0), l = r.find(e => (0, M.isPremiumGuildSubscriptionPlan)(e.subscriptionPlanId) && e.amount >= 0), s = (0, o.useStateFromStores)([_.default], () => null != l ? _.default.get(l.subscriptionPlanId) : null), u = null != l ? l.amount : 0, c = (0, R.formatPrice)(u, n.currency), I = null != s ? (0, R.formatRate)(c, s.interval, s.intervalCount) : 0;
                return (0, i.jsxs)(i.Fragment, {
                    children: [null != a ? (0, i.jsx)(g, {
                        invoiceItem: a,
                        currency: n.currency,
                        isPrepaidPaymentSource: t
                    }) : null, 0 !== u && null != l && null != s ? (0, i.jsx)(S.PremiumInvoiceTableRow, {
                        label: O.default.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_INVOICE_ROW_CONTENT.format({
                            numGuildSubscriptions: l.quantity,
                            planName: (0, M.getDisplayName)(s.id, !1, t)
                        }),
                        value: t ? c : I
                    }) : null, (0, i.jsx)(b.default, {
                        invoice: n
                    }), (0, i.jsx)(S.PremiumInvoiceTableDivider, {}), (0, i.jsx)(S.PremiumInvoiceTableTotalRow, {
                        label: (n.taxInclusive ? t ? O.default.Messages.BILLING_INVOICE_TOTAL_TAX_INCLUSIVE : O.default.Messages.BILLING_INVOICE_TODAY_TOTAL_TAX_INCLUSIVE : O.default.Messages.BILLING_INVOICE_TODAY_TOTAL).format(),
                        value: n.currency === L.CurrencyCodes.USD ? (0, R.formatPrice)(n.total, n.currency) : "".concat((0, R.formatPrice)(n.total, n.currency), "*")
                    })]
                })
            }

            function j(e) {
                let {
                    invoice: n,
                    newPlan: t,
                    isPrepaidPaymentSource: r,
                    referralTrialOfferId: a
                } = e, l = (0, p.coalesceInvoiceItems)(n.invoiceItems), s = l.find(e => e.subscriptionPlanId === t.id);
                u(null != s, "Expected newPlanInvoiceItem");
                let o = l.find(e => !(0, M.isPremiumGuildSubscriptionPlan)(e.subscriptionPlanId) && e.amount < 0),
                    c = l.find(e => null == e.subscriptionPlanId && null != e.discounts && e.discounts.find(e => e.type === I.InvoiceDiscountTypes.PREMIUM_LEGACY_UPGRADE_PROMOTION)),
                    d = A(s, I.InvoiceDiscountTypes.PREMIUM_TRIAL),
                    m = x(s, I.InvoiceDiscountTypes.SUBSCRIPTION_PLAN),
                    T = s.quantity * m,
                    _ = s.amount + (null != o ? o.amount : 0) - T + (null != c ? c.amount : 0),
                    P = l.filter(e => e.subscriptionPlanId === U.SubscriptionPlans.PREMIUM_MONTH_GUILD || e.subscriptionPlanId === U.SubscriptionPlans.PREMIUM_YEAR_GUILD),
                    v = P.reduce((e, n) => e + n.amount, 0);
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(g, {
                        invoiceItem: s,
                        currency: n.currency,
                        overrideAmount: T,
                        isPrepaidPaymentSource: r,
                        referralTrialOfferId: a
                    }), 0 === _ || d ? null : (0, i.jsx)(S.PremiumInvoiceTableRow, {
                        label: (0, i.jsx)(D, {
                            label: O.default.Messages.PREMIUM_SUBSCRIPTION_PLAN_ADJUSTMENT.format({
                                planName: (0, M.isPremiumSubscriptionPlan)(t.id) ? (0, M.getTierDisplayName)(t.id) : t.name
                            }),
                            tooltipText: O.default.Messages.PREMIUM_SUBSCRIPTION_ADJUSTMENT_TOOLTIP
                        }),
                        value: (0, R.formatPrice)(_, n.currency)
                    }), 0 !== v ? (0, i.jsx)(S.PremiumInvoiceTableRow, {
                        label: (0, i.jsx)(D, {
                            label: O.default.Messages.PREMIUM_SUBSCRIPTION_GUILD_SUBSCRIPTION_ADJUSTMENT,
                            tooltipText: O.default.Messages.PREMIUM_SUBSCRIPTION_GUILD_SUBSCRIPTION_ADJUSTMENT_TOOLTIP.format(),
                            tooltipAriaLabel: O.default.Messages.PREMIUM_SUBSCRIPTION_GUILD_SUBSCRIPTION_ADJUSTMENT_TEXT
                        }),
                        value: (0, R.formatPrice)(v, n.currency)
                    }) : null, (0, i.jsx)(b.default, {
                        invoice: n
                    }), (0, i.jsx)(S.PremiumInvoiceTableDivider, {}), (0, i.jsx)(S.PremiumInvoiceTableTotalRow, {
                        label: (n.taxInclusive ? r ? O.default.Messages.BILLING_INVOICE_TOTAL_TAX_INCLUSIVE : O.default.Messages.BILLING_INVOICE_TODAY_TOTAL_TAX_INCLUSIVE : O.default.Messages.BILLING_INVOICE_TODAY_TOTAL).format(),
                        value: n.currency === L.CurrencyCodes.USD ? (0, R.formatPrice)(n.total, n.currency) : "".concat((0, R.formatPrice)(n.total, n.currency), "*")
                    })]
                })
            }

            function h(e) {
                let n = e.slice();
                return n.sort((e, n) => {
                    let t = (0, M.isPremiumBaseSubscriptionPlan)(e.subscriptionPlanId),
                        i = (0, M.isPremiumBaseSubscriptionPlan)(n.subscriptionPlanId);
                    return t && !i ? -1 : !t && i ? 1 : 0
                }), n
            }

            function B(e) {
                return e.filter(e => {
                    let {
                        subscriptionPlanId: n
                    } = e;
                    return n !== U.SubscriptionPlans.NONE_MONTH && n !== U.SubscriptionPlans.NONE_YEAR
                })
            }

            function G(e) {
                let {
                    proratedInvoice: n,
                    renewalInvoice: t
                } = e, {
                    intervalType: r,
                    intervalCount: a
                } = (0, M.getIntervalForInvoice)(n), {
                    intervalType: l,
                    intervalCount: s
                } = (0, M.getIntervalForInvoice)(t);
                return r !== l || a !== s || n.subscriptionPeriodEnd.getTime() === t.subscriptionPeriodStart.getTime() ? null : (0, i.jsx)("div", {
                    className: C.subscriptionPeriodResetNotice,
                    children: O.default.Messages.PREMIUM_SUBSCRIPTION_PERIOD_RESET_NOTICE.format({
                        renewalDate: n.subscriptionPeriodEnd
                    })
                })
            }

            function w(e) {
                let {
                    isUpdate: n,
                    currentInvoice: t,
                    newInvoice: r
                } = e, a = null != t ? (0, p.coalesceInvoiceItems)(t.invoiceItems) : null, s = null != t ? (0, M.getIntervalForInvoice)(t) : null, {
                    intervalType: u,
                    intervalCount: o
                } = (0, M.getIntervalForInvoice)(r), c = null != s && (s.intervalType !== u || s.intervalCount !== o);
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(S.PremiumInvoiceTableDivider, {
                        extended: !0
                    }), null != t ? (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(S.PremiumInvoiceTableHeader, {
                            children: O.default.Messages.PREMIUM_SUBSCRIPTION_CURRENT_LABEL
                        }), B(h((0, p.coalesceInvoiceItems)(t.invoiceItems))).map(e => (0, i.jsx)(g, {
                            invoiceItem: e,
                            currency: t.currency
                        }, e.id)), (0, i.jsx)(S.PremiumInvoiceTableDivider, {
                            extended: !0
                        })]
                    }) : null, (0, i.jsx)(S.PremiumInvoiceTableHeader, {
                        children: O.default.Messages.PREMIUM_SUBSCRIPTION_NEW_LABEL
                    }), B(h((0, p.coalesceInvoiceItems)(r.invoiceItems))).map(e => {
                        let t = null != a && !a.some(n => n.subscriptionPlanId === e.subscriptionPlanId && n.quantity === e.quantity);
                        return (0, i.jsx)(g, {
                            invoiceItem: e,
                            currency: r.currency,
                            showGuildSubscriptionAdjustmentTooltip: c && (e.subscriptionPlanId === U.SubscriptionPlans.PREMIUM_MONTH_GUILD || e.subscriptionPlanId === U.SubscriptionPlans.PREMIUM_YEAR_GUILD || e.subscriptionPlanId === U.SubscriptionPlans.PREMIUM_3_MONTH_GUILD || e.subscriptionPlanId === U.SubscriptionPlans.PREMIUM_6_MONTH_GUILD),
                            className: l({
                                [C.subscriptionAddedInvoiceItem]: !n || t
                            })
                        }, e.id)
                    }), (0, i.jsx)(b.default, {
                        invoice: r
                    }), (0, i.jsx)(S.PremiumInvoiceTableDivider, {}), (0, i.jsx)(S.PremiumInvoiceTableRow, {
                        label: O.default.Messages.PREMIUM_SUBSCRIPTION_NEW_TOTAL,
                        value: (0, R.formatRate)((0, R.formatPrice)(r.total, r.currency), u, o),
                        className: C.subscriptionCostRow
                    })]
                })
            }

            function F(e) {
                var n;
                let {
                    proratedInvoice: t,
                    renewalInvoice: r,
                    isTrial: a,
                    isUpdate: l,
                    overrideRenewalDate: s,
                    trialFooterMessageOverride: u
                } = e, o = null === (n = (0, E.usePremiumTrialOffer)()) || void 0 === n ? void 0 : n.subscription_trial, {
                    intervalType: c,
                    intervalCount: I
                } = (0, M.getIntervalForInvoice)(r), d = (0, T.checkoutTOSExperiment)("purchase_terms", {
                    autoTrackExposure: !1
                });
                if (null == t && d.enabled && 1 === d.bucket) return null;
                if (a) {
                    let e = (0, M.formatIntervalDuration)({
                            intervalType: null == o ? void 0 : o.interval,
                            intervalCount: null == o ? void 0 : o.interval_count
                        }),
                        n = (null == o ? void 0 : o.interval) === U.SubscriptionIntervalTypes.DAY && (null == o ? void 0 : o.interval_count) < 28 ? 2 : 7;
                    return (0, i.jsx)(i.Fragment, {
                        children: null != u ? u : O.default.Messages.PREMIUM_SUBSCRIPTION_RENEWAL_FOOTER_TRIAL_DURATION.format({
                            duration: e,
                            days: n,
                            contactLink: L.MarketingURLs.CONTACT,
                            helpdeskArticle: f.default.getArticleURL(L.HelpdeskArticles.PREMIUM_TRIAL)
                        })
                    })
                }
                let m = r.taxInclusive ? O.default.Messages.PREMIUM_SUBSCRIPTION_RENEWAL_FOOTER : O.default.Messages.PREMIUM_SUBSCRIPTION_RENEWAL_FOOTER_TAX_EXCLUSIVE;
                return (0, i.jsx)(i.Fragment, {
                    children: m.format({
                        rate: (0, R.formatRate)((0, R.formatPrice)(r.subtotal, r.currency), c, I),
                        renewalDate: null != s ? s : l ? null != t ? t.subscriptionPeriodEnd : r.subscriptionPeriodStart : r.subscriptionPeriodEnd,
                        contactLink: L.MarketingURLs.CONTACT,
                        helpdeskArticle: f.default.getArticleURL(L.HelpdeskArticles.BILLING)
                    })
                })
            }

            function H(e) {
                let {
                    premiumSubscription: n,
                    proratedInvoice: t,
                    renewalInvoice: a,
                    overrideRenewalDate: l,
                    isUpdate: s = !1,
                    isTrial: u = !1,
                    priceOptions: o,
                    isPrepaidPaymentSource: I = !1,
                    trialFooterMessageOverride: T,
                    hideSubscriptionDetails: _ = !1
                } = e, {
                    analyticsLocations: v
                } = (0, m.default)(), f = {
                    subscriptionId: null == n ? void 0 : n.id,
                    renewal: !0,
                    preventFetch: !s,
                    analyticsLocatinons: v,
                    analyticsLocation: d.default.SUBSCRIPTION_INVOICE_FOOTER,
                    ...o
                }, [M] = (0, N.useSubscriptionInvoicePreview)(f), [R, p] = r.useState(!1);
                return (0, i.jsxs)(i.Fragment, {
                    children: [I ? null : (0, i.jsx)(S.PremiumInvoiceTableFinePrint, {
                        children: (0, i.jsx)(F, {
                            proratedInvoice: t,
                            renewalInvoice: a,
                            isTrial: u,
                            isUpdate: s,
                            overrideRenewalDate: l,
                            trialFooterMessageOverride: T
                        })
                    }), !_ && (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsxs)(c.Clickable, {
                            onClick: () => p(e => !e),
                            className: C.subscriptionDetailsToggle,
                            children: [R ? O.default.Messages.PREMIUM_SUBSCRIPTION_HIDE_DETAILS : O.default.Messages.PREMIUM_SUBSCRIPTION_SHOW_DETAILS, (0, i.jsx)(P.default, {
                                direction: R ? P.default.Directions.UP : P.default.Directions.DOWN,
                                className: C.subscriptionDetailsToggleCaret
                            })]
                        }), R ? (0, i.jsx)(w, {
                            isUpdate: s,
                            currentInvoice: M,
                            newInvoice: a
                        }) : null]
                    })]
                })
            }

            function Y(e) {
                let n, {
                        plan: t,
                        className: r,
                        paymentSourceId: a,
                        isPrepaidPaymentSource: l = !1,
                        isCustomGift: s = !1
                    } = e,
                    u = (0, M.getPrice)(t.id, !1, !0, {
                        paymentSourceId: a
                    }),
                    o = (0, R.formatPrice)(u.amount, u.currency);
                if (s) switch (t.interval) {
                    case U.SubscriptionIntervalTypes.MONTH:
                        n = O.default.Messages.GIFT_DURATION.format({
                            timeInterval: O.default.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_MONTH
                        });
                        break;
                    case U.SubscriptionIntervalTypes.YEAR:
                        n = O.default.Messages.GIFT_DURATION.format({
                            timeInterval: O.default.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_YEAR
                        })
                } else n = O.default.Messages.BILLING_INVOICE_GIFT_PLAN.format({
                    planName: (0, M.getDisplayName)(t.id, !1, l)
                });
                return s ? (0, i.jsxs)("div", {
                    className: r,
                    children: [(0, i.jsx)(c.FormTitle, {
                        children: O.default.Messages.PREMIUM_GIFTING_BUTTON
                    }), (0, i.jsx)(c.Heading, {
                        variant: "text-md/normal",
                        children: "".concat(n, " - ").concat(o)
                    })]
                }) : (0, i.jsx)(S.PremiumInvoiceTable, {
                    className: r,
                    children: (0, i.jsx)(S.PremiumInvoiceTableRow, {
                        label: n,
                        value: o,
                        className: C.subscriptionCostRow
                    })
                })
            }

            function k(e) {
                let n, {
                        invoice: t,
                        plan: r
                    } = e,
                    a = (0, p.coalesceInvoiceItems)(t.invoiceItems),
                    l = a.find(e => e.subscriptionPlanId === r.id);
                return u(null != l, "newPlanInvoiceItem can not be null"), r.interval === U.SubscriptionIntervalTypes.MONTH ? n = t.taxInclusive ? O.default.Messages.BILLING_TRIAL_MONTHLY_PRICE_AFTER_TRIAL : O.default.Messages.BILLING_TRIAL_MONTHLY_PRICE_AFTER_TRIAL_TAX_EXCLUSIVE : r.interval === U.SubscriptionIntervalTypes.YEAR ? n = t.taxInclusive ? O.default.Messages.BILLING_TRIAL_YEARLY_PRICE_AFTER_TRIAL : O.default.Messages.BILLING_TRIAL_YEARLY_PRICE_AFTER_TRIAL_TAX_EXCLUSIVE : u(!1, "Invalid interval type"), (0, i.jsx)(c.Text, {
                    variant: "text-md/normal",
                    children: n.format({
                        price: (0, R.formatPrice)(l.subscriptionPlanPrice, t.currency)
                    })
                })
            }
        }
    }
]);