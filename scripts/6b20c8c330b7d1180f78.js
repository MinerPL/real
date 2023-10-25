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
                    return T
                }
            });
            var r = s("920040");
            s("773670");
            var a = s("788666"),
                n = s("868869"),
                l = s("745279"),
                i = s("701909"),
                c = s("719923"),
                u = s("153160"),
                o = s("380186"),
                d = s("49111"),
                E = s("646718"),
                p = s("782340"),
                _ = s("650392"),
                T = function(e) {
                    let t, s, T;
                    let {
                        subscriptionPlan: I,
                        isGift: L,
                        isEmbeddedIAP: h,
                        renewalInvoice: A,
                        paymentSourceType: M,
                        hide: f,
                        purchaseType: S,
                        productLine: N,
                        basePrice: R,
                        currentSubscription: m
                    } = e;
                    if (f) return null;
                    let P = null == e.planGroup ? [] : e.planGroup;
                    if (null != A) {
                        let e = c.default.getIntervalForInvoice(A);
                        t = e.intervalType, s = e.intervalCount, T = (0, u.formatRate)((0, u.formatPrice)(A.total, A.currency), t, s)
                    } else null != I && (t = I.interval, s = I.intervalCount);
                    let C = (0, n.getReviewConfirmButtonLabel)({
                            purchaseType: S || d.PurchaseTypes.SUBSCRIPTION,
                            plan: I,
                            premiumSubscription: null == m ? null : m,
                            isGift: !!L,
                            planGroup: P,
                            isPrepaidPaymentSource: !1
                        }),
                        U = "",
                        g = "";
                    if (h) {
                        if (null != T && (null == A ? void 0 : A.subscriptionPeriodEnd) != null) U = p.default.Messages.EMBEDDED_ACTIVITIES_IAP_NON_REFUNDABLE_SUBSCRIPTION_RATE_AND_RENEWAL.format({
                            rate: T,
                            renewalDate: A.subscriptionPeriodEnd
                        });
                        else switch (t) {
                            case E.SubscriptionIntervalTypes.MONTH:
                                U = 1 === s ? p.default.Messages.EMBEDDED_ACTIVITIES_IAP_NON_REFUNDABLE_SUBSCRIPTION_MONTHLY : p.default.Messages.EMBEDDED_ACTIVITIES_IAP_NON_REFUNDABLE_SUBSCRIPTION_MULTI_MONTH.format({
                                    intervalCount: s
                                });
                                break;
                            case E.SubscriptionIntervalTypes.YEAR:
                                U = p.default.Messages.EMBEDDED_ACTIVITIES_IAP_NON_REFUNDABLE_SUBSCRIPTION_YEARLY;
                                break;
                            case void 0:
                                g = p.default.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL_V2.format({
                                    primaryText: C,
                                    paidURL: d.MarketingURLs.PAID_TERMS
                                }), U = p.default.Messages.EMBEDDED_ACTIVITIES_IAP_NON_REFUNDABLE.format({});
                                break;
                            default:
                                throw Error("Unexpected interval: ".concat(t))
                        }
                    } else if (S === d.PurchaseTypes.ONE_TIME) g = p.default.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL_V2.format({
                        primaryText: C,
                        paidURL: d.MarketingURLs.PAID_TERMS
                    }), U = N === d.SKUProductLines.COLLECTIBLES ? p.default.Messages.COLLECTIBLES_PURCHASE_DISCLAIMER_PAYMENT : p.default.Messages.ONE_TIME_PURCHASE_FINE_PRINT;
                    else {
                        let e = (0, a.checkoutTOSExperiment)("legal_fine_print", {
                            autoTrackExposure: !1
                        });
                        if (null != I && !L && e.enabled && 1 === e.bucket) {
                            let e;
                            let r = (0, n.getReviewConfirmButtonLabel)({
                                purchaseType: d.PurchaseTypes.SUBSCRIPTION,
                                plan: I,
                                premiumSubscription: null == m ? null : m,
                                isGift: !1,
                                planGroup: P,
                                isPrepaidPaymentSource: !1
                            });
                            if (null != R && null != t && null != s && (e = (0, u.formatRate)((0, u.formatPrice)(R.amount, R.currency), t, s)), null == e) {
                                let e = Error("Missing base rate for legal fine print");
                                (0, l.captureBillingException)(e, {
                                    tags: {
                                        planId: I.id
                                    }
                                })
                            }
                            U = null != m && (0, o.subscriptionCanDowngrade)(m, I.id, P) ? p.default.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_PLAN_CHANGE_V2.format({
                                primaryText: r,
                                rate: e,
                                paidURL: d.MarketingURLs.PAID_TERMS,
                                contactLink: d.MarketingURLs.CONTACT,
                                helpdeskArticle: i.default.getArticleURL(d.HelpdeskArticles.BILLING)
                            }) : p.default.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_V2.format({
                                primaryText: r,
                                rate: e,
                                paidURL: d.MarketingURLs.PAID_TERMS,
                                contactLink: d.MarketingURLs.CONTACT,
                                helpdeskArticle: i.default.getArticleURL(d.HelpdeskArticles.BILLING)
                            })
                        } else switch (L && (g = p.default.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL_V2.format({
                                primaryText: C,
                                paidURL: d.MarketingURLs.PAID_TERMS
                            })), t) {
                            case E.SubscriptionIntervalTypes.MONTH:
                                U = L ? p.default.Messages.PREMIUM_PAYMENT_GIFT_SUBTEXT_MONTHLY : p.default.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_MONTHLY, U = L ? p.default.Messages.PREMIUM_PAYMENT_GIFT_SUBTEXT_MONTHLY : 1 === s ? p.default.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_MONTHLY : p.default.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_MULTI_MONTH.format({
                                    intervalCount: s
                                });
                                break;
                            case E.SubscriptionIntervalTypes.YEAR:
                                U = L ? p.default.Messages.PREMIUM_PAYMENT_GIFT_SUBTEXT_YEARLY : p.default.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_YEARLY;
                                break;
                            case void 0:
                                U = "";
                                break;
                            default:
                                throw Error("Unexpected interval: ".concat(t))
                        }
                    }
                    return (0, r.jsxs)(r.Fragment, {
                        children: ["" !== g && (0, r.jsxs)("div", {
                            children: [(0, r.jsx)("div", {
                                children: g
                            }), (0, r.jsx)("div", {
                                className: _.divider
                            })]
                        }), "" !== U && (0, r.jsx)("div", {
                            children: U
                        }), M === d.PaymentSourceTypes.PAYSAFE_CARD && (0, r.jsx)("div", {
                            className: _.paymentSourceNoticeCopy,
                            children: p.default.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_PAYSAFECARD
                        }), M === d.PaymentSourceTypes.SOFORT && (0, r.jsxs)("div", {
                            className: _.paymentSourceNoticeCopy,
                            children: [p.default.Messages.SOFORT_MANDATE_AGREEMENT, " "]
                        })]
                    })
                }
        },
        545876: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return f
                }
            });
            var r = s("920040"),
                a = s("773670"),
                n = s("575482"),
                l = s.n(n),
                i = s("161179"),
                c = s.n(i),
                u = s("498225"),
                o = s("77078"),
                d = s("788666"),
                E = s("868869"),
                p = s("971427"),
                _ = s("701909"),
                T = s("719923"),
                I = s("49111"),
                L = s("646718"),
                h = s("782340"),
                A = s("718701");
            class M extends a.Component {
                componentDidMount() {
                    this.props.onChange(this.hasAcceptedNeccessaryTerms(this.props, this.state))
                }
                componentDidUpdate(e, t) {
                    let s = this.hasAcceptedNeccessaryTerms(e, t),
                        r = this.hasAcceptedNeccessaryTerms(this.props, this.state);
                    r !== s && this.props.onChange(r)
                }
                canSkipTOSCheckbox() {
                    let {
                        purchaseType: e,
                        isGift: t,
                        isTrial: s,
                        isDiscount: r
                    } = this.props;
                    return !!t || !!s || !!r || e === I.PurchaseTypes.ONE_TIME
                }
                hasAcceptedNeccessaryTerms(e, t) {
                    return (t.hasAcceptedTerms || this.canSkipTOSCheckbox() || this.isInCheckoutTOSExperiment()) && (null == e.eulaId || t.hasAcceptedEULA) && (!e.showWithdrawalWaiver || t.hasAcceptedWithdrawalWaiver)
                }
                isInCheckoutTOSExperiment() {
                    let {
                        isTrial: e,
                        subscriptionPlan: t,
                        isGift: s
                    } = this.props;
                    return !e && null != t && !s && (0, d.checkoutTOSExperiment)("purchase_terms", {
                        autoTrackExposure: !0
                    }).enabled
                }
                renderLegalTerms() {
                    let {
                        hasPreviouslyAcceptedTerms: e,
                        forceShow: t,
                        isTrial: s,
                        checkboxLabel: a,
                        checkboxClassname: n,
                        checkboxLabelClassname: i,
                        disabled: c,
                        subscriptionPlan: u,
                        isGift: p,
                        currentSubscription: _,
                        planGroup: T
                    } = this.props;
                    if (this.canSkipTOSCheckbox()) return null;
                    if ((t || !e) && !s && null != u) {
                        let e = (0, d.checkoutTOSExperiment)("purchase_terms", {
                            autoTrackExposure: !1
                        }).bucket;
                        if (1 === e) return null;
                        if (2 === e) {
                            let e = (0, E.getReviewConfirmButtonLabel)({
                                    purchaseType: I.PurchaseTypes.SUBSCRIPTION,
                                    plan: u,
                                    premiumSubscription: null == _ ? null : _,
                                    isGift: !!p,
                                    planGroup: null == T ? [] : T,
                                    isPrepaidPaymentSource: !1
                                }),
                                t = h.default.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL_V2.format({
                                    primaryText: e,
                                    paidURL: I.MarketingURLs.PAID_TERMS
                                });
                            return (0, r.jsx)("div", {
                                className: l(A.checkboxLabel, i),
                                children: t
                            })
                        }
                    }
                    if (t || !e) {
                        let {
                            hasAcceptedTerms: e
                        } = this.state;
                        return (0, r.jsx)(o.Checkbox, {
                            type: o.Checkbox.Types.INVERTED,
                            value: e,
                            onChange: this.handleToggleTermsAcceptance,
                            disabled: c,
                            className: l(A.checkbox, n),
                            children: (0, r.jsx)("div", {
                                className: l(A.checkboxLabel, i),
                                children: null != a ? a : h.default.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL.format({
                                    termsURL: I.MarketingURLs.TERMS,
                                    paidURL: I.MarketingURLs.PAID_TERMS
                                })
                            })
                        })
                    }
                    return null
                }
                formatInterval(e) {
                    if (e === L.SubscriptionIntervalTypes.YEAR) return h.default.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_YEAR;
                    if (e === L.SubscriptionIntervalTypes.MONTH) return h.default.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_MONTH;
                    throw Error("Invalid interval type: ".concat(e))
                }
                render() {
                    let {
                        eulaId: e,
                        applicationName: t,
                        hasPreviouslyAcceptedTerms: a,
                        hasPreviouslyAcceptedEULA: n,
                        forceShow: i,
                        disabled: u,
                        className: d,
                        checkboxClassname: E,
                        checkboxLabelClassname: p,
                        finePrint: L,
                        showPricingLink: M,
                        showWithdrawalWaiver: f,
                        isTrial: S,
                        isDiscount: N,
                        subscriptionPlan: R,
                        finePrintClassname: m
                    } = this.props, {
                        hasAcceptedEULA: P,
                        hasAcceptedWithdrawalWaiver: C
                    } = this.state;
                    if (c(!S || null != R, "subscriptionPlan cannot be null if shouldShowUpdatedPaymentModal is true"), !i && a && (null == e || n) && !f) return null;
                    let U = f ? h.default.Messages.BILLING_ONLINE_PURCHASE_WAIVER : h.default.Messages.BILLING_LEGAL_MUMBO_JUMBO;
                    return this.isInCheckoutTOSExperiment() && !f && (U = ""), (0, r.jsxs)("div", {
                        className: d,
                        children: [!S && !N && "" !== U && (0, r.jsx)(o.FormTitle, {
                            className: A.formTitle,
                            children: U
                        }), this.renderLegalTerms(), null != e && (i || !n) ? (0, r.jsx)(o.Checkbox, {
                            type: o.Checkbox.Types.INVERTED,
                            value: P,
                            onChange: this.handleToggleEULAAcceptance,
                            disabled: u,
                            className: A.checkbox,
                            children: (0, r.jsx)("div", {
                                className: A.checkboxLabel,
                                children: h.default.Messages.BILLING_THIRD_PARTY_EULA_LABEL.format({
                                    applicationName: t,
                                    onClick: t => {
                                        (0, o.openModalLazy)(async () => {
                                            let {
                                                default: t
                                            } = await s.el("523360").then(s.bind(s, "523360"));
                                            return s => (0, r.jsx)(t, {
                                                eulaId: e,
                                                ...s
                                            })
                                        }), t.preventDefault()
                                    }
                                })
                            })
                        }) : null, null == L ? null : (0, r.jsx)("div", {
                            className: l(A.finePrint, m),
                            children: L
                        }), f ? (0, r.jsxs)("div", {
                            className: d,
                            children: [(0, r.jsx)(o.Checkbox, {
                                type: o.Checkbox.Types.INVERTED,
                                value: C,
                                onChange: this.handleToggleEUWithdralWaiverAcceptance,
                                disabled: u,
                                className: l(A.checkbox, E),
                                children: (0, r.jsx)("div", {
                                    className: l(A.checkboxLabel, p),
                                    children: h.default.Messages.BILLING_ONLINE_PURCHASE_WAIVER_CHECKBOX
                                })
                            }), (0, r.jsx)("div", {
                                className: A.finePrint,
                                children: h.default.Messages.BILLING_ONLINE_PURCHASE_WAIVER_DISCLAIMER
                            })]
                        }) : null, M && (0, r.jsxs)("div", {
                            className: A.finePrint,
                            children: ["*", h.default.Messages.BILLING_HOW_PRICING_WORKS.format({
                                documentationLink: _.default.getArticleURL(I.HelpdeskArticles.LOCALIZED_PRICING)
                            })]
                        }), S && null != R && (0, r.jsx)(o.Text, {
                            variant: "text-xs/medium",
                            color: "interactive-normal",
                            children: h.default.Messages.BILLING_TRIAL_LEGAL_COPY_V2.format({
                                buttonText: (0, T.getBillingReviewSubheader)(null, R),
                                interval: this.formatInterval(null == R ? void 0 : R.interval),
                                cancelSubscriptionArticle: _.default.getArticleURL(I.HelpdeskArticles.PREMIUM_DETAILS_CANCEL_SUB),
                                paidServiceTermsArticle: _.default.getArticleURL(I.HelpdeskArticles.PAID_TERMS)
                            })
                        }), N && null != R && (0, r.jsx)(o.Text, {
                            variant: "text-xs/medium",
                            color: "interactive-normal",
                            children: h.default.Messages.BILLING_DISCOUNT_LEGAL_COPY.format({
                                buttonText: (0, T.getBillingReviewSubheader)(null, R),
                                interval: this.formatInterval(null == R ? void 0 : R.interval),
                                cancelSubscriptionArticle: _.default.getArticleURL(I.HelpdeskArticles.PREMIUM_DETAILS_CANCEL_SUB),
                                paidServiceTermsArticle: _.default.getArticleURL(I.HelpdeskArticles.PAID_TERMS)
                            })
                        })]
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        hasAcceptedTerms: !this.props.forceShow && this.props.hasPreviouslyAcceptedTerms,
                        hasAcceptedEULA: !this.props.forceShow && this.props.hasPreviouslyAcceptedEULA,
                        hasAcceptedWithdrawalWaiver: !1
                    }, this.handleToggleTermsAcceptance = (e, t) => {
                        this.setState({
                            hasAcceptedTerms: t
                        })
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
            var f = u.default.connectStores([p.default], e => {
                let {
                    eulaId: t
                } = e;
                return {
                    hasPreviouslyAcceptedTerms: p.default.hasAcceptedStoreTerms,
                    hasPreviouslyAcceptedEULA: null != t && p.default.hasAcceptedEULA(t)
                }
            })(M)
        },
        868869: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                getReviewConfirmButtonLabel: function() {
                    return T
                },
                default: function() {
                    return L
                }
            });
            var r = s("920040");
            s("773670");
            var a = s("161179"),
                n = s.n(a),
                l = s("77078"),
                i = s("642906"),
                c = s("181114"),
                u = s("719923"),
                o = s("380186"),
                d = s("809924"),
                E = s("782340"),
                p = s("233333"),
                _ = s("121432");

            function T(e) {
                let {
                    purchaseType: t,
                    plan: s,
                    premiumSubscription: r,
                    isGift: a,
                    planGroup: l,
                    isPrepaidPaymentSource: i
                } = e;
                if (t === d.PurchaseTypes.ONE_TIME) return E.default.Messages.GUILD_PRODUCT_PURCHASE_MODAL_CTA;
                if (n(null != s, "Subscription plan must be selected to render SubscriptionReviewButton"), a) return E.default.Messages.PAYMENT_MODAL_BUTTON_PREMIUM_GIFT;
                if ((0, u.isPremiumSubscriptionPlan)(s.id)) return i ? E.default.Messages.BILLING_SELECT_PLAN : null != r ? (0, o.subscriptionCanSwitchImmediately)(r, s.id, l) ? E.default.Messages.BILLING_SWITCH_PLAN_UPGRADE : E.default.Messages.BILLING_SWITCH_PLAN_CHANGE : (0, u.getBillingReviewSubheader)(null, s);
                return E.default.Messages.BILLING_SUBSCRIBE_TO_PLAN
            }

            function I(e, t) {
                null != e.current && (e.current.scrollIntoView({
                    behavior: "smooth"
                }), t())
            }

            function L(e) {
                let {
                    legalTermsNodeRef: t,
                    invoiceError: s,
                    planError: a,
                    disablePurchase: n,
                    flashLegalTerms: u,
                    isSubmitting: o,
                    premiumSubscription: d,
                    isGift: L,
                    planGroup: h,
                    isPrepaid: A,
                    isTrial: M,
                    makePurchase: f,
                    needsPaymentSource: S
                } = e, {
                    selectedPlan: N,
                    hasAcceptedTerms: R,
                    purchaseType: m
                } = (0, i.usePaymentContext)(), P = T({
                    purchaseType: m,
                    plan: N,
                    premiumSubscription: d,
                    isGift: L,
                    planGroup: h,
                    isPrepaidPaymentSource: A
                });
                if (null != s || null != a || n) return (0, r.jsx)(l.Button, {
                    color: l.Button.Colors.GREEN,
                    disabled: !0,
                    children: P
                });
                if (S) return (0, r.jsx)(l.Tooltip, {
                    text: E.default.Messages.BILLING_SELECT_PAYMENT_SOURCE_TOOLTIP,
                    children: e => (0, r.jsx)(l.Button, {
                        ...e,
                        color: l.Button.Colors.GREEN,
                        type: "submit",
                        "data-testid": "submitButton",
                        disabled: !0,
                        children: P
                    })
                });
                if (M) return (0, r.jsxs)(c.default, {
                    innerClassName: p.innerButton,
                    "data-testid": R ? "purchase" : "submitButton",
                    onClick: R ? f : () => I(t, u),
                    color: l.Button.Colors.GREEN,
                    submitting: o,
                    children: [(0, r.jsx)("img", {
                        alt: "",
                        className: p.nitroIcon,
                        src: _
                    }), P]
                });
                else if (!R) return (0, r.jsx)(l.Tooltip, {
                    text: E.default.Messages.BILLING_ACCEPT_TERMS_PAID_SERVICES_TOOLTIP,
                    children: e => (0, r.jsx)(l.Button, {
                        ...e,
                        color: l.Button.Colors.GREEN,
                        type: "submit",
                        onClick: () => I(t, u),
                        "data-testid": "submitButton",
                        children: P
                    })
                });
                else return (0, r.jsx)(l.Button, {
                    "data-testid": "purchase",
                    onClick: f,
                    color: l.Button.Colors.GREEN,
                    submitting: o,
                    children: P
                })
            }
        },
        380186: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                getSubscriptionSKUs: function() {
                    return u
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
            });
            var r = s("161179"),
                a = s.n(r),
                n = s("775433"),
                l = s("10514"),
                i = s("49111"),
                c = s("646718");

            function u(e) {
                return e.items.map(e => {
                    let t = l.default.get(e.planId);
                    return a(null != t, "Unable to fetch plan"), t
                }).map(e => e.skuId)
            }

            function o(e, t, s) {
                let r = e.getCurrentSubscriptionPlanIdForGroup(s);
                return e.type === i.SubscriptionTypes.PREMIUM && null == r || (a(null != r, "Current subscription has no plan in group"), a(!(r === c.SubscriptionPlans.PREMIUM_YEAR_TIER_1 && t === c.SubscriptionPlans.PREMIUM_MONTH_TIER_2), "Unexpected plan switch"), s.indexOf(r) < s.indexOf(t))
            }

            function d(e, t, s) {
                return !o(e, t, s)
            }

            function E(e, t) {
                let s = l.default.get(e);
                if (null == s) {
                    let s = c.SubscriptionPlanInfo[e];
                    a(null != s, "Missing hardcoded subscriptionPlan: ".concat(e));
                    let r = s.skuId;
                    !l.default.isFetchingForSKU(r) && (0, n.fetchSubscriptionPlansForSKU)(r, t)
                }
                return s
            }
        }
    }
]);