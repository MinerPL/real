(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["74945"], {
        121432: function(e, t, s) {
            "use strict";
            e.exports = s.p + "21351b92881882ca8597.svg"
        },
        545876: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return _
                }
            });
            var l = s("37983"),
                a = s("884691"),
                n = s("414456"),
                i = s.n(n),
                r = s("627445"),
                c = s.n(r),
                o = s("446674"),
                u = s("77078"),
                d = s("788666"),
                p = s("868869"),
                h = s("971427"),
                L = s("701909"),
                I = s("719923"),
                E = s("49111"),
                f = s("646718"),
                m = s("782340"),
                A = s("461503");
            class T extends a.Component {
                componentDidMount() {
                    this.props.onChange(this.hasAcceptedNeccessaryTerms(this.props, this.state))
                }
                componentDidUpdate(e, t) {
                    let s = this.hasAcceptedNeccessaryTerms(e, t),
                        l = this.hasAcceptedNeccessaryTerms(this.props, this.state);
                    l !== s && this.props.onChange(l)
                }
                canSkipTOSCheckbox() {
                    let {
                        purchaseType: e,
                        isGift: t,
                        isTrial: s,
                        isDiscount: l
                    } = this.props;
                    return !!t || !!s || !!l || e === E.PurchaseTypes.ONE_TIME
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
                        checkboxLabelClassname: r,
                        disabled: c,
                        subscriptionPlan: o,
                        isGift: h,
                        currentSubscription: L,
                        planGroup: I
                    } = this.props;
                    if (this.canSkipTOSCheckbox()) return null;
                    if ((t || !e) && !s && null != o) {
                        let e = (0, d.checkoutTOSExperiment)("purchase_terms", {
                            autoTrackExposure: !1
                        }).bucket;
                        if (1 === e) return null;
                        if (2 === e) {
                            let e = (0, p.getReviewConfirmButtonLabel)({
                                    purchaseType: E.PurchaseTypes.SUBSCRIPTION,
                                    plan: o,
                                    premiumSubscription: null == L ? null : L,
                                    isGift: !!h,
                                    planGroup: null == I ? [] : I,
                                    isPrepaidPaymentSource: !1
                                }),
                                t = m.default.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL_V2.format({
                                    primaryText: e,
                                    paidURL: E.MarketingURLs.PAID_TERMS
                                });
                            return (0, l.jsx)("div", {
                                className: i(A.checkboxLabel, r),
                                children: t
                            })
                        }
                    }
                    if (t || !e) {
                        let {
                            hasAcceptedTerms: e
                        } = this.state;
                        return (0, l.jsx)(u.Checkbox, {
                            type: u.Checkbox.Types.INVERTED,
                            value: e,
                            onChange: this.handleToggleTermsAcceptance,
                            disabled: c,
                            className: i(A.checkbox, n),
                            children: (0, l.jsx)("div", {
                                className: i(A.checkboxLabel, r),
                                children: null != a ? a : m.default.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL.format({
                                    termsURL: E.MarketingURLs.TERMS,
                                    paidURL: E.MarketingURLs.PAID_TERMS
                                })
                            })
                        })
                    }
                    return null
                }
                formatInterval(e) {
                    if (e === f.SubscriptionIntervalTypes.YEAR) return m.default.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_YEAR;
                    if (e === f.SubscriptionIntervalTypes.MONTH) return m.default.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_MONTH;
                    throw Error("Invalid interval type: ".concat(e))
                }
                render() {
                    let {
                        eulaId: e,
                        applicationName: t,
                        hasPreviouslyAcceptedTerms: a,
                        hasPreviouslyAcceptedEULA: n,
                        forceShow: r,
                        disabled: o,
                        className: d,
                        checkboxClassname: p,
                        checkboxLabelClassname: h,
                        finePrint: f,
                        showPricingLink: T,
                        showWithdrawalWaiver: _,
                        isTrial: N,
                        isDiscount: S,
                        subscriptionPlan: C,
                        finePrintClassname: x
                    } = this.props, {
                        hasAcceptedEULA: M,
                        hasAcceptedWithdrawalWaiver: R
                    } = this.state;
                    if (c(!N || null != C, "subscriptionPlan cannot be null if shouldShowUpdatedPaymentModal is true"), !r && a && (null == e || n) && !_) return null;
                    let g = _ ? m.default.Messages.BILLING_ONLINE_PURCHASE_WAIVER : m.default.Messages.BILLING_LEGAL_MUMBO_JUMBO;
                    return this.isInCheckoutTOSExperiment() && !_ && (g = ""), (0, l.jsxs)("div", {
                        className: d,
                        children: [!N && !S && "" !== g && (0, l.jsx)(u.FormTitle, {
                            className: A.formTitle,
                            children: g
                        }), this.renderLegalTerms(), null != e && (r || !n) ? (0, l.jsx)(u.Checkbox, {
                            type: u.Checkbox.Types.INVERTED,
                            value: M,
                            onChange: this.handleToggleEULAAcceptance,
                            disabled: o,
                            className: A.checkbox,
                            children: (0, l.jsx)("div", {
                                className: A.checkboxLabel,
                                children: m.default.Messages.BILLING_THIRD_PARTY_EULA_LABEL.format({
                                    applicationName: t,
                                    onClick: t => {
                                        (0, u.openModalLazy)(async () => {
                                            let {
                                                default: t
                                            } = await s.el("523360").then(s.bind(s, "523360"));
                                            return s => (0, l.jsx)(t, {
                                                eulaId: e,
                                                ...s
                                            })
                                        }), t.preventDefault()
                                    }
                                })
                            })
                        }) : null, null == f ? null : (0, l.jsx)("div", {
                            className: i(A.finePrint, x),
                            children: f
                        }), _ ? (0, l.jsxs)("div", {
                            className: d,
                            children: [(0, l.jsx)(u.Checkbox, {
                                type: u.Checkbox.Types.INVERTED,
                                value: R,
                                onChange: this.handleToggleEUWithdralWaiverAcceptance,
                                disabled: o,
                                className: i(A.checkbox, p),
                                children: (0, l.jsx)("div", {
                                    className: i(A.checkboxLabel, h),
                                    children: m.default.Messages.BILLING_ONLINE_PURCHASE_WAIVER_CHECKBOX
                                })
                            }), (0, l.jsx)("div", {
                                className: A.finePrint,
                                children: m.default.Messages.BILLING_ONLINE_PURCHASE_WAIVER_DISCLAIMER
                            })]
                        }) : null, T && (0, l.jsxs)("div", {
                            className: A.finePrint,
                            children: ["*", m.default.Messages.BILLING_HOW_PRICING_WORKS.format({
                                documentationLink: L.default.getArticleURL(E.HelpdeskArticles.LOCALIZED_PRICING)
                            })]
                        }), N && null != C && (0, l.jsx)(u.Text, {
                            variant: "text-xs/medium",
                            color: "interactive-normal",
                            children: m.default.Messages.BILLING_TRIAL_LEGAL_COPY_V2.format({
                                buttonText: (0, I.getBillingReviewSubheader)(null, C),
                                interval: this.formatInterval(null == C ? void 0 : C.interval),
                                cancelSubscriptionArticle: L.default.getArticleURL(E.HelpdeskArticles.PREMIUM_DETAILS_CANCEL_SUB),
                                paidServiceTermsArticle: L.default.getArticleURL(E.HelpdeskArticles.PAID_TERMS)
                            })
                        }), S && null != C && (0, l.jsx)(u.Text, {
                            variant: "text-xs/medium",
                            color: "interactive-normal",
                            children: m.default.Messages.BILLING_DISCOUNT_LEGAL_COPY.format({
                                buttonText: (0, I.getBillingReviewSubheader)(null, C),
                                interval: this.formatInterval(null == C ? void 0 : C.interval),
                                cancelSubscriptionArticle: L.default.getArticleURL(E.HelpdeskArticles.PREMIUM_DETAILS_CANCEL_SUB),
                                paidServiceTermsArticle: L.default.getArticleURL(E.HelpdeskArticles.PAID_TERMS)
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
            var _ = o.default.connectStores([h.default], e => {
                let {
                    eulaId: t
                } = e;
                return {
                    hasPreviouslyAcceptedTerms: h.default.hasAcceptedStoreTerms,
                    hasPreviouslyAcceptedEULA: null != t && h.default.hasAcceptedEULA(t)
                }
            })(T)
        },
        380140: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return T
                }
            });
            var l = s("37983"),
                a = s("884691"),
                n = s("446674"),
                i = s("77078"),
                r = s("465527"),
                c = s("846239"),
                o = s("546463"),
                u = s("552712"),
                d = s("145131"),
                p = s("551184"),
                h = s("599110"),
                L = s("733835"),
                I = s("391294"),
                E = s("49111"),
                f = s("184048"),
                m = s("36662");
            class A extends a.Component {
                componentDidMount() {
                    let {
                        application: e,
                        skuId: t,
                        sku: s,
                        onClose: l
                    } = this.props;
                    null == s ? (0, r.fetchSKU)(e.id, t).catch(e => l(e.message)) : this.track(s)
                }
                componentDidUpdate(e) {
                    let {
                        sku: t
                    } = this.props;
                    t !== e.sku && null != t && this.track(t)
                }
                track(e) {
                    let {
                        analyticsSource: t
                    } = this.props;
                    h.default.track(E.AnalyticEvents.OPEN_MODAL, {
                        type: "Application Entitlement Confirmation",
                        source: t,
                        application_id: e.applicationId,
                        sku_id: e.id
                    })
                }
                render() {
                    let {
                        sku: e,
                        application: t,
                        onClose: s,
                        isIAP: a,
                        transitionState: n
                    } = this.props, r = null != e ? (0, I.getSkuHeaderText)(a, e.type) : null;
                    return (0, l.jsxs)(i.ModalRoot, {
                        transitionState: n,
                        size: i.ModalSize.SMALL,
                        "aria-label": r,
                        className: m.modal,
                        children: [(0, l.jsx)(c.default, {
                            application: t,
                            splashSize: 880
                        }), (0, l.jsx)(p.default.Content, {
                            className: m.content,
                            children: (0, l.jsxs)(d.default, {
                                direction: d.default.Direction.VERTICAL,
                                className: f.confirmContent,
                                children: [(0, l.jsx)(i.ModalCloseButton, {
                                    onClick: () => s(),
                                    className: f.confirmCloseButton
                                }), null != e ? (0, l.jsx)(L.default, {
                                    application: t,
                                    sku: e,
                                    isIAP: a,
                                    onClose: () => s()
                                }) : null]
                            })
                        })]
                    })
                }
            }
            var T = n.default.connectStores([o.default, u.default], e => {
                let {
                    applicationId: t,
                    skuId: s
                } = e;
                return {
                    application: o.default.getGame(t),
                    sku: u.default.get(s)
                }
            })(A)
        },
        868869: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                getReviewConfirmButtonLabel: function() {
                    return I
                },
                default: function() {
                    return f
                }
            });
            var l = s("37983");
            s("884691");
            var a = s("627445"),
                n = s.n(a),
                i = s("77078"),
                r = s("642906"),
                c = s("181114"),
                o = s("719923"),
                u = s("380186"),
                d = s("843455"),
                p = s("782340"),
                h = s("122778"),
                L = s("121432");

            function I(e) {
                let {
                    purchaseType: t,
                    plan: s,
                    premiumSubscription: l,
                    isGift: a,
                    planGroup: i,
                    isPrepaidPaymentSource: r
                } = e;
                if (t === d.PurchaseTypes.ONE_TIME) return p.default.Messages.GUILD_PRODUCT_PURCHASE_MODAL_CTA;
                if (n(null != s, "Subscription plan must be selected to render SubscriptionReviewButton"), a) return p.default.Messages.PAYMENT_MODAL_BUTTON_PREMIUM_GIFT;
                if ((0, o.isPremiumSubscriptionPlan)(s.id)) return r ? p.default.Messages.BILLING_SELECT_PLAN : null != l ? (0, u.subscriptionCanSwitchImmediately)(l, s.id, i) ? p.default.Messages.BILLING_SWITCH_PLAN_UPGRADE : p.default.Messages.BILLING_SWITCH_PLAN_CHANGE : (0, o.getBillingReviewSubheader)(null, s);
                return p.default.Messages.BILLING_SUBSCRIBE_TO_PLAN
            }

            function E(e, t) {
                null != e.current && (e.current.scrollIntoView({
                    behavior: "smooth"
                }), t())
            }

            function f(e) {
                let {
                    legalTermsNodeRef: t,
                    invoiceError: s,
                    planError: a,
                    disablePurchase: n,
                    flashLegalTerms: o,
                    isSubmitting: u,
                    premiumSubscription: d,
                    isGift: f,
                    planGroup: m,
                    isPrepaid: A,
                    isTrial: T,
                    makePurchase: _,
                    needsPaymentSource: N
                } = e, {
                    selectedPlan: S,
                    hasAcceptedTerms: C,
                    purchaseType: x
                } = (0, r.usePaymentContext)(), M = I({
                    purchaseType: x,
                    plan: S,
                    premiumSubscription: d,
                    isGift: f,
                    planGroup: m,
                    isPrepaidPaymentSource: A
                });
                if (null != s || null != a || n) return (0, l.jsx)(i.Button, {
                    color: i.Button.Colors.GREEN,
                    disabled: !0,
                    children: M
                });
                if (N) return (0, l.jsx)(i.Tooltip, {
                    text: p.default.Messages.BILLING_SELECT_PAYMENT_SOURCE_TOOLTIP,
                    children: e => (0, l.jsx)(i.Button, {
                        ...e,
                        color: i.Button.Colors.GREEN,
                        type: "submit",
                        "data-testid": "submitButton",
                        disabled: !0,
                        children: M
                    })
                });
                if (T) return (0, l.jsxs)(c.default, {
                    innerClassName: h.innerButton,
                    "data-testid": C ? "purchase" : "submitButton",
                    onClick: C ? _ : () => E(t, o),
                    color: i.Button.Colors.GREEN,
                    submitting: u,
                    children: [(0, l.jsx)("img", {
                        alt: "",
                        className: h.nitroIcon,
                        src: L
                    }), M]
                });
                else if (!C) return (0, l.jsx)(i.Tooltip, {
                    text: p.default.Messages.BILLING_ACCEPT_TERMS_PAID_SERVICES_TOOLTIP,
                    children: e => (0, l.jsx)(i.Button, {
                        ...e,
                        color: i.Button.Colors.GREEN,
                        type: "submit",
                        onClick: () => E(t, o),
                        "data-testid": "submitButton",
                        children: M
                    })
                });
                else return (0, l.jsx)(i.Button, {
                    "data-testid": "purchase",
                    onClick: _,
                    color: i.Button.Colors.GREEN,
                    submitting: u,
                    children: M
                })
            }
        }
    }
]);