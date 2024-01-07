            "use strict";
            s.r(t), s.d(t, {
                Tier1AccountCreditBanner: function() {
                    return x
                },
                default: function() {
                    return D
                }
            });
            var a = s("37983");
            s("884691");
            var n = s("414456"),
                i = s.n(n),
                r = s("627445"),
                l = s.n(r),
                u = s("77078"),
                o = s("596523"),
                d = s("812204"),
                c = s("685665"),
                f = s("605250"),
                E = s("649844"),
                p = s("797647"),
                I = s("10514"),
                m = s("563890"),
                _ = s("270227"),
                N = s("719923"),
                S = s("713518"),
                P = s("70578"),
                R = s("892843"),
                T = s("646718"),
                C = s("49111"),
                A = s("782340"),
                h = s("224138");
            let L = new f.default("SubscriptionHeader.tsx"),
                M = {
                    page: C.AnalyticsPages.USER_SETTINGS,
                    section: C.AnalyticsSections.SETTINGS_PREMIUM,
                    object: C.AnalyticsObjects.CARD
                };

            function g(e) {
                let {
                    wordMark: t,
                    subscriptionInfo: s,
                    buttons: n,
                    statusClasses: r
                } = e;
                return (0, a.jsxs)("div", {
                    className: i(h.banner, r),
                    children: [(0, a.jsx)("div", {
                        className: h.bannerBackgroundImage
                    }), (0, a.jsxs)("div", {
                        className: h.detailsContainer,
                        children: [(0, a.jsx)("div", {
                            className: h.image
                        }), (0, a.jsxs)("div", {
                            className: h.details,
                            children: [t, s]
                        })]
                    }), (0, a.jsx)("div", {
                        className: h.buttons,
                        children: n
                    })]
                })
            }

            function y() {
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(_.default, {
                        className: h.discordWordmark,
                        "aria-label": A.default.Messages.PREMIUM_TIER_1
                    }), (0, a.jsx)("div", {
                        className: h.classicWordmark
                    })]
                })
            }

            function x() {
                let {
                    analyticsLocations: e
                } = (0, c.default)(d.default.ACCOUNT_CREDIT_BANNER);
                return (0, a.jsx)(g, {
                    wordMark: (0, a.jsx)(y, {}),
                    subscriptionInfo: (0, a.jsx)("div", {
                        className: h.planInfo,
                        children: A.default.Messages.PREMIUM_TIER_1_ACCOUNT_CREDIT_BANNER_DESCRIPTION
                    }),
                    buttons: (0, a.jsx)(R.default, {
                        className: h.toolsButton,
                        onClick: () => (0, E.default)({
                            subscriptionTier: T.PremiumSubscriptionSKUs.TIER_1,
                            analyticsLocations: e,
                            analyticsObject: M
                        }),
                        children: A.default.Messages.PREMIUM_TIER_1_ACCOUNT_CREDIT_BANNER_CTA
                    }),
                    statusClasses: {
                        [h.tier1]: !0
                    }
                })
            }
            var D = function(e) {
                var t;
                let {
                    subscription: n,
                    renewalInvoicePreview: r,
                    paymentSource: f,
                    busy: x,
                    analyticsLocation: D
                } = e, {
                    analyticsLocations: U
                } = (0, c.default)(d.default.SUBSCRIPTION_HEADER), {
                    enabled: v
                } = (0, P.default)({
                    location: "subscription_header"
                }), O = () => {
                    (n.status === C.SubscriptionStatusTypes.ACTIVE || n.status === C.SubscriptionStatusTypes.PAST_DUE) && b()
                }, b = () => {
                    (0, u.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await s.el("21367").then(s.bind(s, "21367"));
                        return t => (0, a.jsx)(e, {
                            ...t,
                            premiumSubscription: n,
                            analyticsLocation: D,
                            analyticsLocations: U
                        })
                    })
                }, B = () => {
                    if (null != n && null != n.planIdFromItems) {
                        let e = I.default.get(n.planIdFromItems);
                        if (null == e) {
                            L.info("Plan not fetched for plan id: ".concat(n.planIdFromItems));
                            return
                        }
                        let t = (0, S.getCurrencies)(e, null == f ? void 0 : f.id, !1),
                            s = t.length > 0 ? t[0] : n.currency,
                            a = !1;
                        1 === t.length && (null == f ? void 0 : f.id) === n.paymentSourceId && (0, S.planHasCurrency)(e.id, s, null == f ? void 0 : f.id) && (a = !0), a ? o.resubscribe(n, U) : (0, E.default)({
                            initialPlanId: n.planIdFromItems,
                            analyticsLocations: U,
                            analyticsLocation: D,
                            analyticsObject: M,
                            subscription: n
                        })
                    }
                }, j = N.default.getPlanIdFromInvoice(n, r);
                if ((0, p.isNoneSubscription)(j)) return null;
                let G = N.default.getStatusFromInvoice(n, r),
                    F = N.default.getPremiumType(j),
                    w = {
                        [h.tier0]: F === T.PremiumTypes.TIER_0,
                        [h.tier1]: F === T.PremiumTypes.TIER_1,
                        [h.tier2]: F === T.PremiumTypes.TIER_2,
                        [h.canceled]: G === C.SubscriptionStatusTypes.CANCELED,
                        [h.failedPayment]: (0, N.isSubscriptionStatusFailedPayment)(G)
                    },
                    k = null;
                switch (F) {
                    case T.PremiumTypes.TIER_0:
                        k = (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(_.default, {
                                className: h.discordWordmark,
                                "aria-label": A.default.Messages.PREMIUM_TIER_0
                            }), (0, a.jsx)("div", {
                                className: h.basicWordmark
                            })]
                        });
                        break;
                    case T.PremiumTypes.TIER_1:
                        k = (0, a.jsx)(y, {});
                        break;
                    case T.PremiumTypes.TIER_2:
                        k = (0, a.jsx)(m.default, {
                            className: h.planName,
                            "aria-label": A.default.Messages.PREMIUM_TITLE
                        })
                }
                return (0, a.jsx)(g, {
                    wordMark: k,
                    subscriptionInfo: (t = j, l(null != r, "Expected renewalInvoicePreview"), (0, a.jsx)("div", {
                        className: h.planInfo,
                        children: (0, N.getPlanDescriptionFromInvoice)({
                            planId: t,
                            subscription: n,
                            renewalInvoicePreview: r
                        })
                    })),
                    buttons: (() => {
                        let {
                            status: e
                        } = n;
                        if (n.isPurchasedExternally) {
                            let e = (0, N.getExternalSubscriptionMethodUrl)(n.paymentGateway, "SUBSCRIPTION_MANAGEMENT");
                            return (0, a.jsx)(u.Anchor, {
                                href: e,
                                useDefaultUnderlineStyles: !1,
                                children: (0, a.jsx)(u.Button, {
                                    className: i(h.toolsButton, h.externalButton),
                                    size: u.Button.Sizes.SMALL,
                                    look: u.ButtonLooks.OUTLINED,
                                    color: u.ButtonColors.WHITE,
                                    submitting: x,
                                    children: A.default.Messages.BILLING_MANAGE_SUBSCRIPTION
                                })
                            })
                        }
                        if (N.default.isBaseSubscriptionCanceled(n)) return (0, a.jsx)(u.Button, {
                            className: h.toolsButton,
                            size: u.Button.Sizes.SMALL,
                            look: u.ButtonLooks.INVERTED,
                            color: u.ButtonColors.BRAND,
                            submitting: x,
                            onClick: B,
                            children: A.default.Messages.RESUBSCRIBE
                        });
                        if (e === C.SubscriptionStatusTypes.ACTIVE || e === C.SubscriptionStatusTypes.PAST_DUE) {
                            let t = !1,
                                s = null;
                            return null != n.renewalMutations && (t = !0, s = n.renewalMutations.planId !== n.planId ? A.default.Messages.PREMIUM_SWITCH_PLAN_DISABLED_PENDING_MUTATION_PLAN : A.default.Messages.PREMIUM_SWITCH_PLAN_DISABLED_PENDING_MUTATION_PREMIUM_GUILD_SUBSCRIPTION), null != n.trialEndsAt && (t = !0, s = A.default.Messages.PREMIUM_SWITCH_PLAN_DISABLED_IN_TRIAL), e === C.SubscriptionStatusTypes.PAST_DUE && (t = !0), (0, a.jsxs)("div", {
                                className: h.toolsButtons,
                                children: [v ? (0, a.jsx)(u.Button, {
                                    className: h.toolsButton,
                                    size: u.Button.Sizes.SMALL,
                                    look: u.ButtonLooks.LINK,
                                    color: u.ButtonColors.WHITE,
                                    submitting: x,
                                    onClick: O,
                                    children: A.default.Messages.PREMIUM_PAUSE_OR_CANCEL
                                }) : (0, a.jsx)(u.Button, {
                                    className: h.toolsButton,
                                    size: u.Button.Sizes.SMALL,
                                    look: u.ButtonLooks.LINK,
                                    color: u.ButtonColors.WHITE,
                                    submitting: x,
                                    onClick: O,
                                    children: A.default.Messages.CANCEL
                                }), (0, a.jsx)(u.Tooltip, {
                                    text: s,
                                    children: e => (0, a.jsx)(R.default, {
                                        ...e,
                                        disabled: t,
                                        className: h.toolsButton,
                                        onClick: () => {
                                            (0, E.default)({
                                                analyticsLocations: U,
                                                analyticsLocation: D,
                                                analyticsObject: M,
                                                subscription: n
                                            })
                                        },
                                        children: A.default.Messages.PREMIUM_SWITCH_PLANS
                                    })
                                })]
                            })
                        }
                    })(),
                    statusClasses: w
                })
            }