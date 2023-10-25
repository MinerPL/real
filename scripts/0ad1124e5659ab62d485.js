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
                    return S
                }
            });
            var l = s("920040"),
                r = s("773670"),
                a = s("575482"),
                n = s.n(a),
                i = s("161179"),
                c = s.n(i),
                o = s("498225"),
                u = s("77078"),
                d = s("788666"),
                h = s("868869"),
                p = s("971427"),
                L = s("701909"),
                f = s("719923"),
                m = s("49111"),
                E = s("646718"),
                I = s("782340"),
                A = s("718701");
            class _ extends r.Component {
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
                    return !!t || !!s || !!l || e === m.PurchaseTypes.ONE_TIME
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
                        checkboxLabel: r,
                        checkboxClassname: a,
                        checkboxLabelClassname: i,
                        disabled: c,
                        subscriptionPlan: o,
                        isGift: p,
                        currentSubscription: L,
                        planGroup: f
                    } = this.props;
                    if (this.canSkipTOSCheckbox()) return null;
                    if ((t || !e) && !s && null != o) {
                        let e = (0, d.checkoutTOSExperiment)("purchase_terms", {
                            autoTrackExposure: !1
                        }).bucket;
                        if (1 === e) return null;
                        if (2 === e) {
                            let e = (0, h.getReviewConfirmButtonLabel)({
                                    purchaseType: m.PurchaseTypes.SUBSCRIPTION,
                                    plan: o,
                                    premiumSubscription: null == L ? null : L,
                                    isGift: !!p,
                                    planGroup: null == f ? [] : f,
                                    isPrepaidPaymentSource: !1
                                }),
                                t = I.default.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL_V2.format({
                                    primaryText: e,
                                    paidURL: m.MarketingURLs.PAID_TERMS
                                });
                            return (0, l.jsx)("div", {
                                className: n(A.checkboxLabel, i),
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
                            className: n(A.checkbox, a),
                            children: (0, l.jsx)("div", {
                                className: n(A.checkboxLabel, i),
                                children: null != r ? r : I.default.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL.format({
                                    termsURL: m.MarketingURLs.TERMS,
                                    paidURL: m.MarketingURLs.PAID_TERMS
                                })
                            })
                        })
                    }
                    return null
                }
                formatInterval(e) {
                    if (e === E.SubscriptionIntervalTypes.YEAR) return I.default.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_YEAR;
                    if (e === E.SubscriptionIntervalTypes.MONTH) return I.default.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_MONTH;
                    throw Error("Invalid interval type: ".concat(e))
                }
                render() {
                    let {
                        eulaId: e,
                        applicationName: t,
                        hasPreviouslyAcceptedTerms: r,
                        hasPreviouslyAcceptedEULA: a,
                        forceShow: i,
                        disabled: o,
                        className: d,
                        checkboxClassname: h,
                        checkboxLabelClassname: p,
                        finePrint: E,
                        showPricingLink: _,
                        showWithdrawalWaiver: S,
                        isTrial: T,
                        isDiscount: C,
                        subscriptionPlan: M,
                        finePrintClassname: N
                    } = this.props, {
                        hasAcceptedEULA: x,
                        hasAcceptedWithdrawalWaiver: R
                    } = this.state;
                    if (c(!T || null != M, "subscriptionPlan cannot be null if shouldShowUpdatedPaymentModal is true"), !i && r && (null == e || a) && !S) return null;
                    let g = S ? I.default.Messages.BILLING_ONLINE_PURCHASE_WAIVER : I.default.Messages.BILLING_LEGAL_MUMBO_JUMBO;
                    return this.isInCheckoutTOSExperiment() && !S && (g = ""), (0, l.jsxs)("div", {
                        className: d,
                        children: [!T && !C && "" !== g && (0, l.jsx)(u.FormTitle, {
                            className: A.formTitle,
                            children: g
                        }), this.renderLegalTerms(), null != e && (i || !a) ? (0, l.jsx)(u.Checkbox, {
                            type: u.Checkbox.Types.INVERTED,
                            value: x,
                            onChange: this.handleToggleEULAAcceptance,
                            disabled: o,
                            className: A.checkbox,
                            children: (0, l.jsx)("div", {
                                className: A.checkboxLabel,
                                children: I.default.Messages.BILLING_THIRD_PARTY_EULA_LABEL.format({
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
                        }) : null, null == E ? null : (0, l.jsx)("div", {
                            className: n(A.finePrint, N),
                            children: E
                        }), S ? (0, l.jsxs)("div", {
                            className: d,
                            children: [(0, l.jsx)(u.Checkbox, {
                                type: u.Checkbox.Types.INVERTED,
                                value: R,
                                onChange: this.handleToggleEUWithdralWaiverAcceptance,
                                disabled: o,
                                className: n(A.checkbox, h),
                                children: (0, l.jsx)("div", {
                                    className: n(A.checkboxLabel, p),
                                    children: I.default.Messages.BILLING_ONLINE_PURCHASE_WAIVER_CHECKBOX
                                })
                            }), (0, l.jsx)("div", {
                                className: A.finePrint,
                                children: I.default.Messages.BILLING_ONLINE_PURCHASE_WAIVER_DISCLAIMER
                            })]
                        }) : null, _ && (0, l.jsxs)("div", {
                            className: A.finePrint,
                            children: ["*", I.default.Messages.BILLING_HOW_PRICING_WORKS.format({
                                documentationLink: L.default.getArticleURL(m.HelpdeskArticles.LOCALIZED_PRICING)
                            })]
                        }), T && null != M && (0, l.jsx)(u.Text, {
                            variant: "text-xs/medium",
                            color: "interactive-normal",
                            children: I.default.Messages.BILLING_TRIAL_LEGAL_COPY_V2.format({
                                buttonText: (0, f.getBillingReviewSubheader)(null, M),
                                interval: this.formatInterval(null == M ? void 0 : M.interval),
                                cancelSubscriptionArticle: L.default.getArticleURL(m.HelpdeskArticles.PREMIUM_DETAILS_CANCEL_SUB),
                                paidServiceTermsArticle: L.default.getArticleURL(m.HelpdeskArticles.PAID_TERMS)
                            })
                        }), C && null != M && (0, l.jsx)(u.Text, {
                            variant: "text-xs/medium",
                            color: "interactive-normal",
                            children: I.default.Messages.BILLING_DISCOUNT_LEGAL_COPY.format({
                                buttonText: (0, f.getBillingReviewSubheader)(null, M),
                                interval: this.formatInterval(null == M ? void 0 : M.interval),
                                cancelSubscriptionArticle: L.default.getArticleURL(m.HelpdeskArticles.PREMIUM_DETAILS_CANCEL_SUB),
                                paidServiceTermsArticle: L.default.getArticleURL(m.HelpdeskArticles.PAID_TERMS)
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
            var S = o.default.connectStores([p.default], e => {
                let {
                    eulaId: t
                } = e;
                return {
                    hasPreviouslyAcceptedTerms: p.default.hasAcceptedStoreTerms,
                    hasPreviouslyAcceptedEULA: null != t && p.default.hasAcceptedEULA(t)
                }
            })(_)
        },
        380140: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return _
                }
            });
            var l = s("920040"),
                r = s("773670"),
                a = s("498225"),
                n = s("77078"),
                i = s("465527"),
                c = s("846239"),
                o = s("546463"),
                u = s("552712"),
                d = s("145131"),
                h = s("551184"),
                p = s("599110"),
                L = s("733835"),
                f = s("391294"),
                m = s("49111"),
                E = s("91706"),
                I = s("731789");
            class A extends r.Component {
                componentDidMount() {
                    let {
                        application: e,
                        skuId: t,
                        sku: s,
                        onClose: l
                    } = this.props;
                    null == s ? (0, i.fetchSKU)(e.id, t).catch(e => l(e.message)) : this.track(s)
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
                    p.default.track(m.AnalyticEvents.OPEN_MODAL, {
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
                        isIAP: r,
                        transitionState: a
                    } = this.props, i = null != e ? (0, f.getSkuHeaderText)(r, e.type) : null;
                    return (0, l.jsxs)(n.ModalRoot, {
                        transitionState: a,
                        size: n.ModalSize.SMALL,
                        "aria-label": i,
                        className: I.modal,
                        children: [(0, l.jsx)(c.default, {
                            application: t,
                            splashSize: 880
                        }), (0, l.jsx)(h.default.Content, {
                            className: I.content,
                            children: (0, l.jsxs)(d.default, {
                                direction: d.default.Direction.VERTICAL,
                                className: E.confirmContent,
                                children: [(0, l.jsx)(n.ModalCloseButton, {
                                    onClick: () => s(),
                                    className: E.confirmCloseButton
                                }), null != e ? (0, l.jsx)(L.default, {
                                    application: t,
                                    sku: e,
                                    isIAP: r,
                                    onClose: () => s()
                                }) : null]
                            })
                        })]
                    })
                }
            }
            var _ = a.default.connectStores([o.default, u.default], e => {
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
                    return f
                },
                default: function() {
                    return E
                }
            });
            var l = s("920040");
            s("773670");
            var r = s("161179"),
                a = s.n(r),
                n = s("77078"),
                i = s("642906"),
                c = s("181114"),
                o = s("719923"),
                u = s("380186"),
                d = s("809924"),
                h = s("782340"),
                p = s("233333"),
                L = s("121432");

            function f(e) {
                let {
                    purchaseType: t,
                    plan: s,
                    premiumSubscription: l,
                    isGift: r,
                    planGroup: n,
                    isPrepaidPaymentSource: i
                } = e;
                if (t === d.PurchaseTypes.ONE_TIME) return h.default.Messages.GUILD_PRODUCT_PURCHASE_MODAL_CTA;
                if (a(null != s, "Subscription plan must be selected to render SubscriptionReviewButton"), r) return h.default.Messages.PAYMENT_MODAL_BUTTON_PREMIUM_GIFT;
                if ((0, o.isPremiumSubscriptionPlan)(s.id)) return i ? h.default.Messages.BILLING_SELECT_PLAN : null != l ? (0, u.subscriptionCanSwitchImmediately)(l, s.id, n) ? h.default.Messages.BILLING_SWITCH_PLAN_UPGRADE : h.default.Messages.BILLING_SWITCH_PLAN_CHANGE : (0, o.getBillingReviewSubheader)(null, s);
                return h.default.Messages.BILLING_SUBSCRIBE_TO_PLAN
            }

            function m(e, t) {
                null != e.current && (e.current.scrollIntoView({
                    behavior: "smooth"
                }), t())
            }

            function E(e) {
                let {
                    legalTermsNodeRef: t,
                    invoiceError: s,
                    planError: r,
                    disablePurchase: a,
                    flashLegalTerms: o,
                    isSubmitting: u,
                    premiumSubscription: d,
                    isGift: E,
                    planGroup: I,
                    isPrepaid: A,
                    isTrial: _,
                    makePurchase: S,
                    needsPaymentSource: T
                } = e, {
                    selectedPlan: C,
                    hasAcceptedTerms: M,
                    purchaseType: N
                } = (0, i.usePaymentContext)(), x = f({
                    purchaseType: N,
                    plan: C,
                    premiumSubscription: d,
                    isGift: E,
                    planGroup: I,
                    isPrepaidPaymentSource: A
                });
                if (null != s || null != r || a) return (0, l.jsx)(n.Button, {
                    color: n.Button.Colors.GREEN,
                    disabled: !0,
                    children: x
                });
                if (T) return (0, l.jsx)(n.Tooltip, {
                    text: h.default.Messages.BILLING_SELECT_PAYMENT_SOURCE_TOOLTIP,
                    children: e => (0, l.jsx)(n.Button, {
                        ...e,
                        color: n.Button.Colors.GREEN,
                        type: "submit",
                        "data-testid": "submitButton",
                        disabled: !0,
                        children: x
                    })
                });
                if (_) return (0, l.jsxs)(c.default, {
                    innerClassName: p.innerButton,
                    "data-testid": M ? "purchase" : "submitButton",
                    onClick: M ? S : () => m(t, o),
                    color: n.Button.Colors.GREEN,
                    submitting: u,
                    children: [(0, l.jsx)("img", {
                        alt: "",
                        className: p.nitroIcon,
                        src: L
                    }), x]
                });
                else if (!M) return (0, l.jsx)(n.Tooltip, {
                    text: h.default.Messages.BILLING_ACCEPT_TERMS_PAID_SERVICES_TOOLTIP,
                    children: e => (0, l.jsx)(n.Button, {
                        ...e,
                        color: n.Button.Colors.GREEN,
                        type: "submit",
                        onClick: () => m(t, o),
                        "data-testid": "submitButton",
                        children: x
                    })
                });
                else return (0, l.jsx)(n.Button, {
                    "data-testid": "purchase",
                    onClick: S,
                    color: n.Button.Colors.GREEN,
                    submitting: u,
                    children: x
                })
            }
        },
        551184: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return d
                }
            });
            var l = s("920040"),
                r = s("773670"),
                a = s("575482"),
                n = s.n(a),
                i = s("77078"),
                c = s("21744");
            let o = {
                SMALL: c.sizeSmall,
                MEDIUM: c.sizeMedium,
                LARGE: c.sizeLarge
            };
            class u extends r.PureComponent {
                calculateScroll() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._scroller;
                    if (null == e) return;
                    let {
                        scrollTop: t
                    } = e.getScrollerState(), {
                        hideSeparator: s
                    } = this.state;
                    0 !== t || s ? t > 0 && s && this.setState({
                        hideSeparator: !1
                    }) : this.setState({
                        hideSeparator: !0
                    })
                }
                getScroller() {
                    return this._scroller
                }
                renderChildren() {
                    let {
                        hideSeparator: e
                    } = this.state;
                    return r.Children.map(this.props.children, t => r.isValidElement(t) ? t.type === i.ModalContent || t.type === i.ModalListContent ? r.cloneElement(t, {
                        scrollerRef: this.setRef,
                        onScroll: this.handleScroll,
                        onResize: this.handleScroll
                    }) : t.type === i.ModalHeader && e ? r.cloneElement(t, {
                        separator: !1
                    }) : t : t)
                }
                render() {
                    let {
                        className: e,
                        children: t,
                        tag: s,
                        size: r,
                        fullscreenOnMobile: a,
                        ...i
                    } = this.props;
                    return (0, l.jsx)(s, {
                        className: n(c.modal, e, r, {
                            [c.fullscreenOnMobile]: a
                        }),
                        ...i,
                        children: this.renderChildren()
                    })
                }
                constructor(e) {
                    super(e), this._scroller = null, this.setRef = e => {
                        this._scroller = e, null != e && this.calculateScroll()
                    }, this.handleScroll = e => {
                        this.calculateScroll();
                        let {
                            onScroll: t
                        } = this.props;
                        null == t || t(e)
                    }, this.state = {
                        hideSeparator: !1
                    }
                }
            }
            u.Header = i.ModalHeader, u.Footer = i.ModalFooter, u.Content = i.ModalContent, u.ListContent = i.ModalListContent, u.CloseButton = i.ModalCloseButton, u.Sizes = o, u.defaultProps = {
                fullscreenOnMobile: !0,
                size: o.SMALL,
                tag: "div"
            };
            var d = u
        }
    }
]);