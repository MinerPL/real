(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["27083"], {
        121432: function(e, t, s) {
            "use strict";
            e.exports = s.p + "21351b92881882ca8597.svg"
        },
        703332: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return I
                }
            }), s("70102");
            var a = s("37983");
            s("884691");
            var n = s("868869"),
                r = s("745279"),
                l = s("701909"),
                i = s("719923"),
                u = s("153160"),
                c = s("380186"),
                o = s("49111"),
                d = s("646718"),
                E = s("782340"),
                _ = s("314502"),
                I = function(e) {
                    let t, s, I;
                    let {
                        subscriptionPlan: p,
                        isGift: T,
                        isEmbeddedIAP: L,
                        renewalInvoice: A,
                        paymentSourceType: M,
                        hide: f,
                        purchaseType: N,
                        productLine: S,
                        basePrice: R,
                        currentSubscription: h
                    } = e;
                    if (f) return null;
                    let P = null == e.planGroup ? [] : e.planGroup;
                    if (null != A) {
                        let e = i.default.getIntervalForInvoice(A);
                        t = e.intervalType, s = e.intervalCount, I = (0, u.formatRate)((0, u.formatPrice)(A.total, A.currency), t, s)
                    } else null != p && (t = p.interval, s = p.intervalCount);
                    let C = (0, n.getReviewConfirmButtonLabel)({
                            purchaseType: N || o.PurchaseTypes.SUBSCRIPTION,
                            plan: p,
                            premiumSubscription: null == h ? null : h,
                            isGift: !!T,
                            planGroup: P,
                            isPrepaidPaymentSource: !1
                        }),
                        U = "",
                        g = "";
                    if (L) {
                        if (null != I && (null == A ? void 0 : A.subscriptionPeriodEnd) != null) U = E.default.Messages.EMBEDDED_ACTIVITIES_IAP_NON_REFUNDABLE_SUBSCRIPTION_RATE_AND_RENEWAL.format({
                            rate: I,
                            renewalDate: A.subscriptionPeriodEnd
                        });
                        else switch (t) {
                            case d.SubscriptionIntervalTypes.MONTH:
                                U = 1 === s ? E.default.Messages.EMBEDDED_ACTIVITIES_IAP_NON_REFUNDABLE_SUBSCRIPTION_MONTHLY : E.default.Messages.EMBEDDED_ACTIVITIES_IAP_NON_REFUNDABLE_SUBSCRIPTION_MULTI_MONTH.format({
                                    intervalCount: s
                                });
                                break;
                            case d.SubscriptionIntervalTypes.YEAR:
                                U = E.default.Messages.EMBEDDED_ACTIVITIES_IAP_NON_REFUNDABLE_SUBSCRIPTION_YEARLY;
                                break;
                            case void 0:
                                g = E.default.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL_V2.format({
                                    primaryText: C,
                                    paidURL: o.MarketingURLs.PAID_TERMS
                                }), U = E.default.Messages.EMBEDDED_ACTIVITIES_IAP_NON_REFUNDABLE.format({});
                                break;
                            default:
                                throw Error("Unexpected interval: ".concat(t))
                        }
                    } else if (N === o.PurchaseTypes.ONE_TIME) g = E.default.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL_V2.format({
                        primaryText: C,
                        paidURL: o.MarketingURLs.PAID_TERMS
                    }), U = S === o.SKUProductLines.COLLECTIBLES ? T ? E.default.Messages.COLLECTIBLES_PURCHASE_DISCLAIMER_GIFT_PAYMENT : E.default.Messages.COLLECTIBLES_PURCHASE_DISCLAIMER_PAYMENT : E.default.Messages.ONE_TIME_PURCHASE_FINE_PRINT;
                    else if (null == p || T) switch (T && (g = E.default.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL_V2.format({
                            primaryText: C,
                            paidURL: o.MarketingURLs.PAID_TERMS
                        })), t) {
                        case d.SubscriptionIntervalTypes.MONTH:
                            U = T ? E.default.Messages.PREMIUM_PAYMENT_GIFT_SUBTEXT_MONTHLY : E.default.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_MONTHLY, U = T ? E.default.Messages.PREMIUM_PAYMENT_GIFT_SUBTEXT_MONTHLY : 1 === s ? E.default.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_MONTHLY : E.default.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_MULTI_MONTH.format({
                                intervalCount: s
                            });
                            break;
                        case d.SubscriptionIntervalTypes.YEAR:
                            U = T ? E.default.Messages.PREMIUM_PAYMENT_GIFT_SUBTEXT_YEARLY : E.default.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_YEARLY;
                            break;
                        case void 0:
                            U = "";
                            break;
                        default:
                            throw Error("Unexpected interval: ".concat(t))
                    } else {
                        let e;
                        let a = (0, n.getReviewConfirmButtonLabel)({
                            purchaseType: o.PurchaseTypes.SUBSCRIPTION,
                            plan: p,
                            premiumSubscription: null == h ? null : h,
                            isGift: !1,
                            planGroup: P,
                            isPrepaidPaymentSource: !1
                        });
                        if (null != R && null != t && null != s && (e = (0, u.formatRate)((0, u.formatPrice)(R.amount, R.currency), t, s)), null == e) {
                            let e = Error("Missing base rate for legal fine print");
                            (0, r.captureBillingException)(e, {
                                tags: {
                                    planId: p.id
                                }
                            })
                        }
                        U = null != h && (0, c.subscriptionCanDowngrade)(h, p.id, P) ? E.default.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_PLAN_CHANGE_V2.format({
                            primaryText: a,
                            rate: e,
                            paidURL: o.MarketingURLs.PAID_TERMS,
                            contactLink: o.MarketingURLs.CONTACT,
                            helpdeskArticle: l.default.getArticleURL(o.HelpdeskArticles.BILLING)
                        }) : E.default.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_V2.format({
                            primaryText: a,
                            rate: e,
                            paidURL: o.MarketingURLs.PAID_TERMS,
                            contactLink: o.MarketingURLs.CONTACT,
                            helpdeskArticle: l.default.getArticleURL(o.HelpdeskArticles.BILLING)
                        })
                    }
                    return (0, a.jsxs)(a.Fragment, {
                        children: ["" !== g && (0, a.jsxs)("div", {
                            children: [(0, a.jsx)("div", {
                                children: g
                            }), (0, a.jsx)("div", {
                                className: _.divider
                            })]
                        }), "" !== U && (0, a.jsx)("div", {
                            children: U
                        }), M === o.PaymentSourceTypes.PAYSAFE_CARD && (0, a.jsx)("div", {
                            className: _.paymentSourceNoticeCopy,
                            children: E.default.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_PAYSAFECARD
                        }), M === o.PaymentSourceTypes.SOFORT && (0, a.jsxs)("div", {
                            className: _.paymentSourceNoticeCopy,
                            children: [E.default.Messages.SOFORT_MANDATE_AGREEMENT, " "]
                        })]
                    })
                }
        },
        545876: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return M
                }
            }), s("70102"), s("222007");
            var a = s("37983"),
                n = s("884691"),
                r = s("414456"),
                l = s.n(r),
                i = s("627445"),
                u = s.n(i),
                c = s("446674"),
                o = s("77078"),
                d = s("971427"),
                E = s("701909"),
                _ = s("719923"),
                I = s("49111"),
                p = s("646718"),
                T = s("782340"),
                L = s("461503");
            class A extends n.Component {
                componentDidMount() {
                    this.props.onChange(this.hasAcceptedNeccessaryTerms(this.props, this.state))
                }
                componentDidUpdate(e, t) {
                    let s = this.hasAcceptedNeccessaryTerms(e, t),
                        a = this.hasAcceptedNeccessaryTerms(this.props, this.state);
                    a !== s && this.props.onChange(a)
                }
                hasAcceptedNeccessaryTerms(e, t) {
                    return (null == e.eulaId || t.hasAcceptedEULA) && (!e.showWithdrawalWaiver || t.hasAcceptedWithdrawalWaiver)
                }
                formatInterval(e) {
                    if (e === p.SubscriptionIntervalTypes.YEAR) return T.default.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_YEAR;
                    if (e === p.SubscriptionIntervalTypes.MONTH) return T.default.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_MONTH;
                    throw Error("Invalid interval type: ".concat(e))
                }
                render() {
                    let {
                        eulaId: e,
                        applicationName: t,
                        hasPreviouslyAcceptedEULA: n,
                        forceShow: r,
                        disabled: i,
                        className: c,
                        checkboxClassname: d,
                        checkboxLabelClassname: p,
                        finePrint: A,
                        showPricingLink: M,
                        showWithdrawalWaiver: f,
                        isTrial: N,
                        isDiscount: S,
                        subscriptionPlan: R,
                        finePrintClassname: h
                    } = this.props, {
                        hasAcceptedEULA: P,
                        hasAcceptedWithdrawalWaiver: C
                    } = this.state;
                    return (u(!N || null != R, "subscriptionPlan cannot be null if shouldShowUpdatedPaymentModal is true"), r || null != e && !n || f) ? (0, a.jsxs)("div", {
                        className: c,
                        children: [f && (0, a.jsx)(o.FormTitle, {
                            className: L.formTitle,
                            children: T.default.Messages.BILLING_ONLINE_PURCHASE_WAIVER
                        }), null != e && (r || !n) ? (0, a.jsx)(o.Checkbox, {
                            type: o.Checkbox.Types.INVERTED,
                            value: P,
                            onChange: this.handleToggleEULAAcceptance,
                            disabled: i,
                            className: L.checkbox,
                            children: (0, a.jsx)("div", {
                                className: L.checkboxLabel,
                                children: T.default.Messages.BILLING_THIRD_PARTY_EULA_LABEL.format({
                                    applicationName: t,
                                    onClick: t => {
                                        (0, o.openModalLazy)(async () => {
                                            let {
                                                default: t
                                            } = await s.el("523360").then(s.bind(s, "523360"));
                                            return s => (0, a.jsx)(t, {
                                                eulaId: e,
                                                ...s
                                            })
                                        }), t.preventDefault()
                                    }
                                })
                            })
                        }) : null, null == A ? null : (0, a.jsx)("div", {
                            className: l(L.finePrint, h),
                            children: A
                        }), f ? (0, a.jsxs)("div", {
                            className: c,
                            children: [(0, a.jsx)(o.Checkbox, {
                                type: o.Checkbox.Types.INVERTED,
                                value: C,
                                onChange: this.handleToggleEUWithdralWaiverAcceptance,
                                disabled: i,
                                className: l(L.checkbox, d),
                                children: (0, a.jsx)("div", {
                                    className: l(L.checkboxLabel, p),
                                    children: T.default.Messages.BILLING_ONLINE_PURCHASE_WAIVER_CHECKBOX
                                })
                            }), (0, a.jsx)("div", {
                                className: L.finePrint,
                                children: T.default.Messages.BILLING_ONLINE_PURCHASE_WAIVER_DISCLAIMER
                            })]
                        }) : null, M && (0, a.jsxs)("div", {
                            className: L.finePrint,
                            children: ["*", T.default.Messages.BILLING_HOW_PRICING_WORKS.format({
                                documentationLink: E.default.getArticleURL(I.HelpdeskArticles.LOCALIZED_PRICING)
                            })]
                        }), N && null != R && (0, a.jsx)(o.Text, {
                            variant: "text-xs/medium",
                            color: "interactive-normal",
                            children: T.default.Messages.BILLING_TRIAL_LEGAL_COPY_V2.format({
                                buttonText: (0, _.getBillingReviewSubheader)(null, R),
                                interval: this.formatInterval(null == R ? void 0 : R.interval),
                                cancelSubscriptionArticle: E.default.getArticleURL(I.HelpdeskArticles.PREMIUM_DETAILS_CANCEL_SUB),
                                paidServiceTermsArticle: E.default.getArticleURL(I.HelpdeskArticles.PAID_TERMS)
                            })
                        }), S && null != R && (0, a.jsx)(o.Text, {
                            variant: "text-xs/medium",
                            color: "interactive-normal",
                            children: T.default.Messages.BILLING_DISCOUNT_LEGAL_COPY.format({
                                buttonText: (0, _.getBillingReviewSubheader)(null, R),
                                interval: this.formatInterval(null == R ? void 0 : R.interval),
                                cancelSubscriptionArticle: E.default.getArticleURL(I.HelpdeskArticles.PREMIUM_DETAILS_CANCEL_SUB),
                                paidServiceTermsArticle: E.default.getArticleURL(I.HelpdeskArticles.PAID_TERMS)
                            })
                        })]
                    }) : null
                }
                constructor(...e) {
                    super(...e), this.state = {
                        hasAcceptedEULA: !this.props.forceShow && this.props.hasPreviouslyAcceptedEULA,
                        hasAcceptedWithdrawalWaiver: !1
                    }, this.handleToggleEUWithdralWaiverAcceptance = (e, t) => {
                        this.setState({
                            hasAcceptedWithdrawalWaiver: t
                        })
                    }, this.handleToggleEULAAcceptance = (e, t) => {
                        this.setState({
                            hasAcceptedEULA: t
                        })
                    }
                }
            }
            var M = c.default.connectStores([d.default], e => {
                let {
                    eulaId: t
                } = e;
                return {
                    hasPreviouslyAcceptedEULA: null != t && d.default.hasAcceptedEULA(t)
                }
            })(A)
        },
        868869: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                getReviewConfirmButtonLabel: function() {
                    return p
                },
                default: function() {
                    return L
                }
            });
            var a = s("37983");
            s("884691");
            var n = s("627445"),
                r = s.n(n),
                l = s("77078"),
                i = s("642906"),
                u = s("181114"),
                c = s("719923"),
                o = s("380186"),
                d = s("843455"),
                E = s("782340"),
                _ = s("122778"),
                I = s("121432");

            function p(e) {
                let {
                    purchaseType: t,
                    plan: s,
                    premiumSubscription: a,
                    isGift: n,
                    planGroup: l,
                    isPrepaidPaymentSource: i
                } = e;
                if (t === d.PurchaseTypes.ONE_TIME) return n ? E.default.Messages.PAYMENT_MODAL_BUTTON_PREMIUM_GIFT : E.default.Messages.GUILD_PRODUCT_PURCHASE_MODAL_CTA;
                if (r(null != s, "Subscription plan must be selected to render SubscriptionReviewButton"), n) return E.default.Messages.PAYMENT_MODAL_BUTTON_PREMIUM_GIFT;
                if ((0, c.isPremiumSubscriptionPlan)(s.id)) return i ? E.default.Messages.BILLING_SELECT_PLAN : null != a ? (0, o.subscriptionCanSwitchImmediately)(a, s.id, l) ? E.default.Messages.BILLING_SWITCH_PLAN_UPGRADE : E.default.Messages.BILLING_SWITCH_PLAN_CHANGE : (0, c.getBillingReviewSubheader)(null, s);
                return E.default.Messages.BILLING_SUBSCRIBE_TO_PLAN
            }

            function T(e, t) {
                null != e.current && (e.current.scrollIntoView({
                    behavior: "smooth"
                }), t())
            }

            function L(e) {
                let {
                    legalTermsNodeRef: t,
                    invoiceError: s,
                    planError: n,
                    disablePurchase: r,
                    flashLegalTerms: c,
                    isSubmitting: o,
                    premiumSubscription: d,
                    isGift: L,
                    planGroup: A,
                    isPrepaid: M,
                    isTrial: f,
                    makePurchase: N,
                    needsPaymentSource: S
                } = e, {
                    selectedPlan: R,
                    hasAcceptedTerms: h,
                    purchaseType: P
                } = (0, i.usePaymentContext)(), C = p({
                    purchaseType: P,
                    plan: R,
                    premiumSubscription: d,
                    isGift: L,
                    planGroup: A,
                    isPrepaidPaymentSource: M
                });
                if (null != s || null != n || r) return (0, a.jsx)(l.Button, {
                    color: l.Button.Colors.GREEN,
                    disabled: !0,
                    children: C
                });
                if (S) return (0, a.jsx)(l.Tooltip, {
                    text: E.default.Messages.BILLING_SELECT_PAYMENT_SOURCE_TOOLTIP,
                    children: e => (0, a.jsx)(l.Button, {
                        ...e,
                        color: l.Button.Colors.GREEN,
                        type: "submit",
                        "data-testid": "submitButton",
                        disabled: !0,
                        children: C
                    })
                });
                if (f) return (0, a.jsxs)(u.default, {
                    innerClassName: _.innerButton,
                    "data-testid": h ? "purchase" : "submitButton",
                    onClick: h ? N : () => T(t, c),
                    color: l.Button.Colors.GREEN,
                    submitting: o,
                    children: [(0, a.jsx)("img", {
                        alt: "",
                        className: _.nitroIcon,
                        src: I
                    }), C]
                });
                else if (!h) return (0, a.jsx)(l.Tooltip, {
                    text: E.default.Messages.BILLING_ACCEPT_TERMS_PAID_SERVICES_TOOLTIP,
                    children: e => (0, a.jsx)(l.Button, {
                        ...e,
                        color: l.Button.Colors.GREEN,
                        type: "submit",
                        onClick: () => T(t, c),
                        "data-testid": "submitButton",
                        children: C
                    })
                });
                else return (0, a.jsx)(l.Button, {
                    "data-testid": "purchase",
                    onClick: N,
                    color: l.Button.Colors.GREEN,
                    submitting: o,
                    children: C
                })
            }
        },
        380186: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                getSubscriptionSKUs: function() {
                    return c
                },
                subscriptionCanSwitchImmediately: function() {
                    return o
                },
                subscriptionCanDowngrade: function() {
                    return d
                },
                getOrFetchSubscriptionPlan: function() {
                    return E
                }
            }), s("222007"), s("884691");
            var a = s("627445"),
                n = s.n(a);
            s("446674");
            var r = s("775433"),
                l = s("10514"),
                i = s("49111"),
                u = s("646718");

            function c(e) {
                return e.items.map(e => {
                    let t = l.default.get(e.planId);
                    return n(null != t, "Unable to fetch plan"), t
                }).map(e => e.skuId)
            }

            function o(e, t, s) {
                let a = e.getCurrentSubscriptionPlanIdForGroup(s);
                return e.type === i.SubscriptionTypes.PREMIUM && null == a || (n(null != a, "Current subscription has no plan in group"), n(!(a === u.SubscriptionPlans.PREMIUM_YEAR_TIER_1 && t === u.SubscriptionPlans.PREMIUM_MONTH_TIER_2), "Unexpected plan switch"), s.indexOf(a) < s.indexOf(t))
            }

            function d(e, t, s) {
                return !o(e, t, s)
            }

            function E(e, t) {
                let s = l.default.get(e);
                if (null == s) {
                    let s = u.SubscriptionPlanInfo[e];
                    n(null != s, "Missing hardcoded subscriptionPlan: ".concat(e));
                    let a = s.skuId;
                    !l.default.isFetchingForSKU(a) && (0, r.fetchSubscriptionPlansForSKU)(a, t)
                }
                return s
            }
        }
    }
]);