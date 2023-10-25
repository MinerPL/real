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
            var i = t("498225"),
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
                    return o
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
                    return P
                },
                PremiumInvoiceTableFinePrint: function() {
                    return _
                }
            });
            var i = t("920040");
            t("773670");
            var r = t("575482"),
                a = t.n(r),
                l = t("798609"),
                s = t("153160"),
                u = t("782340"),
                c = t("382274");

            function o(e) {
                let {
                    children: n,
                    className: t
                } = e;
                return (0, i.jsx)("div", {
                    className: a(c.table, t),
                    children: n
                })
            }

            function I(e) {
                let {
                    children: n
                } = e;
                return (0, i.jsx)("div", {
                    className: c.header,
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
                    className: a(c.row, r),
                    children: [(0, i.jsx)("div", {
                        className: c.rowLabel,
                        children: n
                    }), (0, i.jsx)("div", {
                        className: c.rowAmount,
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
                    interval: o,
                    currency: I,
                    className: m,
                    intervalCount: T
                } = e, P = e => null != r ? r.find(n => n.type === e) : null, _ = P(l.InvoiceDiscountTypes.SUBSCRIPTION_PLAN), v = P(l.InvoiceDiscountTypes.ENTITLEMENT), f = null != _ ? Math.floor(_.amount / a * 100) : null, M = (0, s.formatPrice)(a, I);
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(d, {
                        label: n,
                        value: (0, i.jsxs)(i.Fragment, {
                            children: [t, null != f ? (0, i.jsxs)("div", {
                                className: c.rowPercentDiscount,
                                children: ["-", f, "%"]
                            }) : null]
                        }),
                        className: m
                    }), null != f ? (0, i.jsxs)("div", {
                        className: c.rowDiscountOriginalPrice,
                        children: ["(", null != o && null != T ? (0, s.formatRate)(M, o, T) : M, ")"]
                    }) : null, null != v ? (0, i.jsx)("div", {
                        className: c.entitlementDiscountRow,
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
                    className: a(c.divider, {
                        [c.dividerExtended]: n,
                        [c.negativeMarginTop]: t
                    })
                })
            }

            function P(e) {
                let {
                    label: n,
                    value: t,
                    className: r
                } = e;
                return (0, i.jsxs)("div", {
                    className: a(c.totalRow, r),
                    children: [(0, i.jsx)("div", {
                        className: c.totalLabel,
                        children: n
                    }), (0, i.jsx)("div", {
                        className: c.totalAmount,
                        children: t
                    })]
                })
            }

            function _(e) {
                let {
                    children: n,
                    className: t
                } = e;
                return (0, i.jsx)("div", {
                    className: a(c.finePrint, t),
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
            var i = t("920040");
            t("773670");
            var r = t("153160"),
                a = t("883662"),
                l = t("782340");

            function s(e) {
                let {
                    invoice: n
                } = e;
                return n.taxInclusive || n.tax <= 0 ? null : (0, i.jsx)(a.PremiumInvoiceTableRow, {
                    label: l.default.Messages.ESTIMATED_TAX_LABEL,
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
                    return k
                },
                PremiumTrialInvoiceTableRow: function() {
                    return Y
                }
            });
            var i = t("920040"),
                r = t("773670"),
                a = t("575482"),
                l = t.n(a),
                s = t("161179"),
                u = t.n(s),
                c = t("498225"),
                o = t("77078"),
                I = t("798609"),
                d = t("812204"),
                m = t("685665"),
                T = t("788666"),
                P = t("10514"),
                _ = t("461380"),
                v = t("834179"),
                f = t("701909"),
                M = t("719923"),
                R = t("153160"),
                p = t("809071"),
                N = t("643619"),
                S = t("917247"),
                b = t("883662"),
                E = t("991329"),
                U = t("646718"),
                O = t("49111"),
                L = t("782340"),
                C = t("405375");
            let x = (e, n) => {
                    var t;
                    return !!(null === (t = e.discounts) || void 0 === t ? void 0 : t.some(e => e.type === n))
                },
                A = (e, n) => {
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
                } = e, T = (0, c.useStateFromStores)([P.default], () => P.default.get(t.subscriptionPlanId)), _ = null === (n = (0, S.usePremiumTrialOffer)(m)) || void 0 === n ? void 0 : n.subscription_trial;
                u(null != T, "Missing subscriptionPlan");
                let f = (0, M.formatIntervalDuration)({
                        intervalType: null == _ ? void 0 : _.interval,
                        intervalCount: null == _ ? void 0 : _.interval_count
                    }),
                    p = function(e, n, t, i) {
                        let r = x(e, I.InvoiceDiscountTypes.PREMIUM_TRIAL);
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
                                return L.default.Messages.PREMIUM_GUILD_NUM_MULTI_MONTHS_GUILD_SUBSCRIPTIONS.format({
                                    num: e.quantity,
                                    intervalCount: n.intervalCount
                                });
                            case U.SubscriptionPlans.PREMIUM_MONTH_GUILD:
                                return L.default.Messages.PREMIUM_GUILD_NUM_MONTH_GUILD_SUBSCRIPTIONS.format({
                                    num: e.quantity
                                });
                            case U.SubscriptionPlans.PREMIUM_YEAR_GUILD:
                                return L.default.Messages.PREMIUM_GUILD_NUM_YEAR_GUILD_SUBSCRIPTIONS.format({
                                    num: e.quantity
                                })
                        }
                        switch (n.interval) {
                            case U.SubscriptionIntervalTypes.MONTH:
                                if (1 === n.intervalCount) return L.default.Messages.MONTHLY_GUILD_SUBSCRIPTION.format({
                                    planName: n.name
                                });
                                return L.default.Messages.MULTI_MONTHS_GUILD_SUBSCRIPTION.format({
                                    planName: n.name,
                                    intervalCount: n.intervalCount
                                });
                            case U.SubscriptionIntervalTypes.YEAR:
                                return L.default.Messages.YEARLY_GUILD_SUBSCRIPTION.format({
                                    planName: n.name
                                })
                        }
                        throw Error("Unexpected invoice plan: ".concat(e.subscriptionPlanId))
                    }(t, T, d, f);
                !0 === a && (p = (0, i.jsxs)("div", {
                    className: C.invoiceItemLabelWithIcon,
                    children: [(0, i.jsxs)("div", {
                        children: [p, " "]
                    }), (0, i.jsx)(o.Tooltip, {
                        text: L.default.Messages.PREMIUM_SUBSCRIPTION_GUILD_SUBSCRIPTION_ADJUSTMENT_TOOLTIP.format(),
                        "aria-label": L.default.Messages.PREMIUM_SUBSCRIPTION_GUILD_SUBSCRIPTION_ADJUSTMENT_TEXT,
                        tooltipClassName: C.invoiceItemTooltip,
                        children: e => (0, i.jsx)(v.default, {
                            ...e,
                            className: C.invoiceItemLabelIcon
                        })
                    })]
                }));
                let N = (0, R.formatPrice)(null != r ? r : t.amount, l),
                    E = d ? N : (0, R.formatRate)(N, T.interval, T.intervalCount);
                return (0, i.jsx)(b.PremiumInvoiceDiscountedTableRow, {
                    label: p,
                    value: E,
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
                    children: [n, (0, i.jsx)(o.Tooltip, {
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
                } = e, r = (0, N.coalesceInvoiceItems)(n.invoiceItems), a = r.find(e => !(0, M.isPremiumGuildSubscriptionPlan)(e.subscriptionPlanId) && e.amount >= 0), l = r.find(e => (0, M.isPremiumGuildSubscriptionPlan)(e.subscriptionPlanId) && e.amount >= 0), s = (0, c.useStateFromStores)([P.default], () => null != l ? P.default.get(l.subscriptionPlanId) : null), u = null != l ? l.amount : 0, o = (0, R.formatPrice)(u, n.currency), I = null != s ? (0, R.formatRate)(o, s.interval, s.intervalCount) : 0;
                return (0, i.jsxs)(i.Fragment, {
                    children: [null != a ? (0, i.jsx)(g, {
                        invoiceItem: a,
                        currency: n.currency,
                        isPrepaidPaymentSource: t
                    }) : null, 0 !== u && null != l && null != s ? (0, i.jsx)(b.PremiumInvoiceTableRow, {
                        label: L.default.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_INVOICE_ROW_CONTENT.format({
                            numGuildSubscriptions: l.quantity,
                            planName: (0, M.getDisplayName)(s.id, !1, t)
                        }),
                        value: t ? o : I
                    }) : null, (0, i.jsx)(E.default, {
                        invoice: n
                    }), (0, i.jsx)(b.PremiumInvoiceTableDivider, {}), (0, i.jsx)(b.PremiumInvoiceTableTotalRow, {
                        label: (n.taxInclusive ? t ? L.default.Messages.BILLING_INVOICE_TOTAL_TAX_INCLUSIVE : L.default.Messages.BILLING_INVOICE_TODAY_TOTAL_TAX_INCLUSIVE : L.default.Messages.BILLING_INVOICE_TODAY_TOTAL).format(),
                        value: n.currency === O.CurrencyCodes.USD ? (0, R.formatPrice)(n.total, n.currency) : "".concat((0, R.formatPrice)(n.total, n.currency), "*")
                    })]
                })
            }

            function j(e) {
                let {
                    invoice: n,
                    newPlan: t,
                    isPrepaidPaymentSource: r,
                    referralTrialOfferId: a
                } = e, l = (0, N.coalesceInvoiceItems)(n.invoiceItems), s = l.find(e => e.subscriptionPlanId === t.id);
                u(null != s, "Expected newPlanInvoiceItem");
                let c = l.find(e => !(0, M.isPremiumGuildSubscriptionPlan)(e.subscriptionPlanId) && e.amount < 0),
                    o = l.find(e => null == e.subscriptionPlanId && null != e.discounts && e.discounts.find(e => e.type === I.InvoiceDiscountTypes.PREMIUM_LEGACY_UPGRADE_PROMOTION)),
                    d = x(s, I.InvoiceDiscountTypes.PREMIUM_TRIAL),
                    m = A(s, I.InvoiceDiscountTypes.SUBSCRIPTION_PLAN),
                    T = s.quantity * m,
                    P = s.amount + (null != c ? c.amount : 0) - T + (null != o ? o.amount : 0),
                    _ = l.filter(e => e.subscriptionPlanId === U.SubscriptionPlans.PREMIUM_MONTH_GUILD || e.subscriptionPlanId === U.SubscriptionPlans.PREMIUM_YEAR_GUILD),
                    v = _.reduce((e, n) => e + n.amount, 0);
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(g, {
                        invoiceItem: s,
                        currency: n.currency,
                        overrideAmount: T,
                        isPrepaidPaymentSource: r,
                        referralTrialOfferId: a
                    }), 0 === P || d ? null : (0, i.jsx)(b.PremiumInvoiceTableRow, {
                        label: (0, i.jsx)(D, {
                            label: L.default.Messages.PREMIUM_SUBSCRIPTION_PLAN_ADJUSTMENT.format({
                                planName: (0, M.isPremiumSubscriptionPlan)(t.id) ? (0, M.getTierDisplayName)(t.id) : t.name
                            }),
                            tooltipText: L.default.Messages.PREMIUM_SUBSCRIPTION_ADJUSTMENT_TOOLTIP
                        }),
                        value: (0, R.formatPrice)(P, n.currency)
                    }), 0 !== v ? (0, i.jsx)(b.PremiumInvoiceTableRow, {
                        label: (0, i.jsx)(D, {
                            label: L.default.Messages.PREMIUM_SUBSCRIPTION_GUILD_SUBSCRIPTION_ADJUSTMENT,
                            tooltipText: L.default.Messages.PREMIUM_SUBSCRIPTION_GUILD_SUBSCRIPTION_ADJUSTMENT_TOOLTIP.format(),
                            tooltipAriaLabel: L.default.Messages.PREMIUM_SUBSCRIPTION_GUILD_SUBSCRIPTION_ADJUSTMENT_TEXT
                        }),
                        value: (0, R.formatPrice)(v, n.currency)
                    }) : null, (0, i.jsx)(E.default, {
                        invoice: n
                    }), (0, i.jsx)(b.PremiumInvoiceTableDivider, {}), (0, i.jsx)(b.PremiumInvoiceTableTotalRow, {
                        label: (n.taxInclusive ? r ? L.default.Messages.BILLING_INVOICE_TOTAL_TAX_INCLUSIVE : L.default.Messages.BILLING_INVOICE_TODAY_TOTAL_TAX_INCLUSIVE : L.default.Messages.BILLING_INVOICE_TODAY_TOTAL).format(),
                        value: n.currency === O.CurrencyCodes.USD ? (0, R.formatPrice)(n.total, n.currency) : "".concat((0, R.formatPrice)(n.total, n.currency), "*")
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
                    children: L.default.Messages.PREMIUM_SUBSCRIPTION_PERIOD_RESET_NOTICE.format({
                        renewalDate: n.subscriptionPeriodEnd
                    })
                })
            }

            function w(e) {
                let {
                    isUpdate: n,
                    currentInvoice: t,
                    newInvoice: r
                } = e, a = null != t ? (0, N.coalesceInvoiceItems)(t.invoiceItems) : null, s = null != t ? (0, M.getIntervalForInvoice)(t) : null, {
                    intervalType: u,
                    intervalCount: c
                } = (0, M.getIntervalForInvoice)(r), o = null != s && (s.intervalType !== u || s.intervalCount !== c);
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(b.PremiumInvoiceTableDivider, {
                        extended: !0
                    }), null != t ? (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(b.PremiumInvoiceTableHeader, {
                            children: L.default.Messages.PREMIUM_SUBSCRIPTION_CURRENT_LABEL
                        }), B(h((0, N.coalesceInvoiceItems)(t.invoiceItems))).map(e => (0, i.jsx)(g, {
                            invoiceItem: e,
                            currency: t.currency
                        }, e.id)), (0, i.jsx)(b.PremiumInvoiceTableDivider, {
                            extended: !0
                        })]
                    }) : null, (0, i.jsx)(b.PremiumInvoiceTableHeader, {
                        children: L.default.Messages.PREMIUM_SUBSCRIPTION_NEW_LABEL
                    }), B(h((0, N.coalesceInvoiceItems)(r.invoiceItems))).map(e => {
                        let t = null != a && !a.some(n => n.subscriptionPlanId === e.subscriptionPlanId && n.quantity === e.quantity);
                        return (0, i.jsx)(g, {
                            invoiceItem: e,
                            currency: r.currency,
                            showGuildSubscriptionAdjustmentTooltip: o && (e.subscriptionPlanId === U.SubscriptionPlans.PREMIUM_MONTH_GUILD || e.subscriptionPlanId === U.SubscriptionPlans.PREMIUM_YEAR_GUILD || e.subscriptionPlanId === U.SubscriptionPlans.PREMIUM_3_MONTH_GUILD || e.subscriptionPlanId === U.SubscriptionPlans.PREMIUM_6_MONTH_GUILD),
                            className: l({
                                [C.subscriptionAddedInvoiceItem]: !n || t
                            })
                        }, e.id)
                    }), (0, i.jsx)(E.default, {
                        invoice: r
                    }), (0, i.jsx)(b.PremiumInvoiceTableDivider, {}), (0, i.jsx)(b.PremiumInvoiceTableRow, {
                        label: L.default.Messages.PREMIUM_SUBSCRIPTION_NEW_TOTAL,
                        value: (0, R.formatRate)((0, R.formatPrice)(r.total, r.currency), u, c),
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
                } = e, c = null === (n = (0, S.usePremiumTrialOffer)()) || void 0 === n ? void 0 : n.subscription_trial, {
                    intervalType: o,
                    intervalCount: I
                } = (0, M.getIntervalForInvoice)(r), d = (0, T.checkoutTOSExperiment)("purchase_terms", {
                    autoTrackExposure: !1
                });
                if (null == t && d.enabled && 1 === d.bucket) return null;
                if (a) {
                    let e = (0, M.formatIntervalDuration)({
                            intervalType: null == c ? void 0 : c.interval,
                            intervalCount: null == c ? void 0 : c.interval_count
                        }),
                        n = (null == c ? void 0 : c.interval) === U.SubscriptionIntervalTypes.DAY && (null == c ? void 0 : c.interval_count) < 28 ? 2 : 7;
                    return (0, i.jsx)(i.Fragment, {
                        children: null != u ? u : L.default.Messages.PREMIUM_SUBSCRIPTION_RENEWAL_FOOTER_TRIAL_DURATION.format({
                            duration: e,
                            days: n,
                            contactLink: O.MarketingURLs.CONTACT,
                            helpdeskArticle: f.default.getArticleURL(O.HelpdeskArticles.PREMIUM_TRIAL)
                        })
                    })
                }
                let m = r.taxInclusive ? L.default.Messages.PREMIUM_SUBSCRIPTION_RENEWAL_FOOTER : L.default.Messages.PREMIUM_SUBSCRIPTION_RENEWAL_FOOTER_TAX_EXCLUSIVE;
                return (0, i.jsx)(i.Fragment, {
                    children: m.format({
                        rate: (0, R.formatRate)((0, R.formatPrice)(r.subtotal, r.currency), o, I),
                        renewalDate: null != s ? s : l ? null != t ? t.subscriptionPeriodEnd : r.subscriptionPeriodStart : r.subscriptionPeriodEnd,
                        contactLink: O.MarketingURLs.CONTACT,
                        helpdeskArticle: f.default.getArticleURL(O.HelpdeskArticles.BILLING)
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
                    priceOptions: c,
                    isPrepaidPaymentSource: I = !1,
                    trialFooterMessageOverride: T,
                    hideSubscriptionDetails: P = !1
                } = e, {
                    analyticsLocations: v
                } = (0, m.default)(), f = {
                    subscriptionId: null == n ? void 0 : n.id,
                    renewal: !0,
                    preventFetch: !s,
                    analyticsLocatinons: v,
                    analyticsLocation: d.default.SUBSCRIPTION_INVOICE_FOOTER,
                    ...c
                }, [M] = (0, p.useSubscriptionInvoicePreview)(f), [R, N] = r.useState(!1);
                return (0, i.jsxs)(i.Fragment, {
                    children: [I ? null : (0, i.jsx)(b.PremiumInvoiceTableFinePrint, {
                        children: (0, i.jsx)(F, {
                            proratedInvoice: t,
                            renewalInvoice: a,
                            isTrial: u,
                            isUpdate: s,
                            overrideRenewalDate: l,
                            trialFooterMessageOverride: T
                        })
                    }), !P && (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsxs)(o.Clickable, {
                            onClick: () => N(e => !e),
                            className: C.subscriptionDetailsToggle,
                            children: [R ? L.default.Messages.PREMIUM_SUBSCRIPTION_HIDE_DETAILS : L.default.Messages.PREMIUM_SUBSCRIPTION_SHOW_DETAILS, (0, i.jsx)(_.default, {
                                direction: R ? _.default.Directions.UP : _.default.Directions.DOWN,
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

            function k(e) {
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
                    c = (0, R.formatPrice)(u.amount, u.currency);
                if (s) switch (t.interval) {
                    case U.SubscriptionIntervalTypes.MONTH:
                        n = L.default.Messages.GIFT_DURATION.format({
                            timeInterval: L.default.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_MONTH
                        });
                        break;
                    case U.SubscriptionIntervalTypes.YEAR:
                        n = L.default.Messages.GIFT_DURATION.format({
                            timeInterval: L.default.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_YEAR
                        })
                } else n = L.default.Messages.BILLING_INVOICE_GIFT_PLAN.format({
                    planName: (0, M.getDisplayName)(t.id, !1, l)
                });
                return s ? (0, i.jsxs)("div", {
                    className: r,
                    children: [(0, i.jsx)(o.FormTitle, {
                        children: L.default.Messages.PREMIUM_GIFTING_BUTTON
                    }), (0, i.jsx)(o.Heading, {
                        variant: "text-md/normal",
                        children: "".concat(n, " - ").concat(c)
                    })]
                }) : (0, i.jsx)(b.PremiumInvoiceTable, {
                    className: r,
                    children: (0, i.jsx)(b.PremiumInvoiceTableRow, {
                        label: n,
                        value: c,
                        className: C.subscriptionCostRow
                    })
                })
            }

            function Y(e) {
                let {
                    invoice: n,
                    plan: t
                } = e, r = (0, N.coalesceInvoiceItems)(n.invoiceItems), a = r.find(e => e.subscriptionPlanId === t.id);
                if (u(null != a, "newPlanInvoiceItem can not be null"), t.interval === U.SubscriptionIntervalTypes.MONTH) return (0, i.jsx)(o.Text, {
                    variant: "text-md/normal",
                    children: L.default.Messages.BILLING_TRIAL_MONTHLY_PRICE_AFTER_TRIAL.format({
                        price: (0, R.formatPrice)(a.subscriptionPlanPrice, n.currency)
                    })
                });
                if (t.interval === U.SubscriptionIntervalTypes.YEAR) return (0, i.jsx)(o.Text, {
                    variant: "text-md/normal",
                    children: L.default.Messages.BILLING_TRIAL_YEARLY_PRICE_AFTER_TRIAL.format({
                        price: (0, R.formatPrice)(a.subscriptionPlanPrice, n.currency)
                    })
                });
                u(!1, "Invalid interval type")
            }
        }
    }
]);