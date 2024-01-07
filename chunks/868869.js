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