(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["24039"], {
        584503: function(e, t, n) {
            "use strict";
            e.exports = n.p + "55fda0412a4ff4072236.svg"
        },
        45656: function(e, t, n) {
            "use strict";
            e.exports = n.p + "f4d8991602d4587f573e.svg"
        },
        856413: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var a = n("884691"),
                r = n("286235"),
                i = (e, t, n, i, s) => {
                    let u = (0, a.useRef)(!1);
                    (0, a.useEffect)(() => {
                        if (t && !u.current) {
                            u.current = !0;
                            let t = setTimeout(() => {
                                let t = Error("".concat(e, " is taking too long to load."));
                                r.default.setExtra({
                                    loadingState: i,
                                    loadingTimeSeconds: n
                                }), r.default.captureException(t, {
                                    ...s,
                                    tags: {
                                        ...null == s ? void 0 : s.tags
                                    }
                                })
                            }, 1e3 * n);
                            return () => {
                                clearTimeout(t)
                            }
                        }
                    }, [t, n])
                }
        },
        245187: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                BlockedPaymentsContentSettings: function() {
                    return N
                },
                BlockedPaymentsContentModal: function() {
                    return p
                },
                BlockedPaymentsWarning: function() {
                    return I
                }
            });
            var a = n("37983");
            n("884691");
            var r = n("414456"),
                i = n.n(r),
                s = n("669491"),
                u = n("819855"),
                l = n("77078"),
                c = n("841098"),
                o = n("145131"),
                d = n("423487"),
                m = n("701909"),
                f = n("619935"),
                T = n("49111"),
                E = n("782340"),
                P = n("653842"),
                S = n("584503"),
                _ = n("45656");

            function A(e) {
                let {
                    className: t
                } = e, n = (0, c.default)(), r = (0, u.isThemeDark)(n) ? S : _;
                return (0, a.jsxs)("div", {
                    className: i(P.container, t),
                    children: [(0, a.jsx)(l.Heading, {
                        className: P.header,
                        variant: "heading-xl/semibold",
                        children: E.default.Messages.REGION_BLOCKED_PAYMENTS_HEADER
                    }), (0, a.jsxs)(l.Text, {
                        className: P.description,
                        variant: "text-md/normal",
                        color: "header-secondary",
                        children: [(0, a.jsx)("p", {
                            children: E.default.Messages.REGION_BLOCKED_PAYMENTS_BODY
                        }), (0, a.jsx)("p", {
                            children: E.default.Messages.REGION_BLOCKED_PAYMENTS_CTA.format({
                                helpdeskArticle: m.default.getArticleURL(T.HelpdeskArticles.BLOCKED_PAYMENTS)
                            })
                        })]
                    }), (0, a.jsx)("img", {
                        src: r,
                        className: P.splashImage,
                        alt: "Blocked Payments"
                    })]
                })
            }

            function N() {
                return (0, a.jsx)(A, {
                    className: P.settings
                })
            }

            function p(e) {
                let {
                    onClose: t
                } = e;
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(l.ModalHeader, {
                        className: P.blockedPaymentsModalHeader,
                        justify: o.default.Justify.END,
                        children: (0, a.jsx)(l.ModalCloseButton, {
                            onClick: t
                        })
                    }), (0, a.jsx)(l.ModalContent, {
                        className: P.blockedPaymentsModalContent,
                        children: (0, a.jsx)(A, {
                            className: P.modal
                        })
                    })]
                })
            }

            function I(e) {
                let {
                    className: t
                } = e, n = (0, f.useBlockedPaymentsConfig)();
                return n ? (0, a.jsxs)(l.Card, {
                    className: i(P.blockedPaymentsWarning, t),
                    type: l.Card.Types.CUSTOM,
                    children: [(0, a.jsx)(d.default, {
                        className: P.blockedPaymentsWarningIcon,
                        color: s.default.unsafe_rawColors.YELLOW_300.css
                    }), (0, a.jsx)(l.Text, {
                        variant: "text-sm/normal",
                        children: E.default.Messages.REGION_BLOCKED_PAYMENTS_ONE_LINER.format({
                            helpdeskArticle: m.default.getArticleURL(T.HelpdeskArticles.BLOCKED_PAYMENTS)
                        })
                    })]
                }) : null
            }
        },
        996808: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var a = n("884691"),
                r = n("913144");

            function i(e) {
                let t = (0, a.useRef)(e);
                (0, a.useEffect)(() => {
                    t.current = e
                }, [e]), (0, a.useEffect)(() => {
                    if (__OVERLAY__) {
                        function e(e) {
                            e.locked && t.current()
                        }
                        return r.default.subscribe("OVERLAY_SET_INPUT_LOCKED", e), () => {
                            r.default.unsubscribe("OVERLAY_SET_INPUT_LOCKED", e)
                        }
                    }
                }, [])
            }
        },
        176108: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                inOneStepSubscriptionCheckout: function() {
                    return i
                },
                planSwitchLoadingShowSpinner: function() {
                    return s
                },
                getDefaultPlanOneStepCheckout: function() {
                    return u
                }
            });
            var a = n("719923"),
                r = n("646718");

            function i(e) {
                let {
                    isTrial: t,
                    isGift: n,
                    selectedSkuId: a,
                    startedPaymentFlowWithPaymentSources: i
                } = e;
                return !t && !n && null != a && r.ACTIVE_PREMIUM_SKUS.includes(a) && i
            }

            function s(e, t, n) {
                let a = !1;
                if (e && null != t) {
                    let e = t.invoiceItems.find(e => e.subscriptionPlanId === n.id);
                    null == e && (a = !0)
                }
                return a
            }

            function u(e, t, n) {
                let i = null != t ? (0, a.getPremiumPlanItem)(t) : null,
                    s = r.PREMIUM_SKU_TO_YEARLY_PLAN[e],
                    u = null != n ? n : s;
                return null != i ? u === i.planId && u === r.PREMIUM_SKU_TO_MONTHLY_PLAN[e] ? u = r.PREMIUM_SKU_TO_YEARLY_PLAN[e] : u === i.planId && u === r.PREMIUM_SKU_TO_YEARLY_PLAN[e] ? u = r.PREMIUM_SKU_TO_MONTHLY_PLAN[e] : (i.planId === r.SubscriptionPlans.PREMIUM_YEAR_TIER_0 || i.planId === r.SubscriptionPlans.PREMIUM_YEAR_TIER_1) && u === r.SubscriptionPlans.PREMIUM_MONTH_TIER_2 && (u = r.SubscriptionPlans.PREMIUM_YEAR_TIER_2) : u === r.SubscriptionPlans.PREMIUM_YEAR_TIER_1 && (u = r.SubscriptionPlans.PREMIUM_MONTH_TIER_1), u
            }
        },
        254350: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                isInTrialRedemption: function() {
                    return i
                },
                default: function() {
                    return s
                }
            });
            var a = n("917247"),
                r = n("646718");

            function i(e) {
                let {
                    userTrialOffer: t,
                    isGift: n,
                    skuId: a
                } = e;
                return !n && null != t && (0, r.SubscriptionTrials)[t.trial_id].skus.includes(a)
            }

            function s(e) {
                let {
                    isGift: t,
                    skuId: n,
                    referralTrialOfferId: i
                } = e, s = (0, a.usePremiumTrialOffer)(i);
                return !t && null != s && (0, r.SubscriptionTrials)[s.trial_id].skus.includes(n)
            }
        },
        22368: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                usePaymentModalAnimationScene: function() {
                    return s
                }
            });
            var a = n("884691"),
                r = n("85336"),
                i = n("286350");

            function s(e) {
                let {
                    purchaseState: t,
                    currentStep: n,
                    initialScene: s,
                    purchaseScene: u,
                    errorScene: l,
                    successScene: c
                } = e, [o, d] = (0, a.useState)(s);
                return (0, a.useEffect)(() => {
                    t === i.PurchaseState.PURCHASING ? d(u) : t === i.PurchaseState.FAIL && d(l)
                }, [t, u, l]), (0, a.useEffect)(() => {
                    n === r.Step.CONFIRM && d(c)
                }, [n, c]), [o, d]
            }
        },
        160210: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return M
                }
            });
            var a = n("37983");
            n("884691");
            var r = n("414456"),
                i = n.n(r),
                s = n("446674"),
                u = n("77078"),
                l = n("206230"),
                c = n("145131"),
                o = n("41250"),
                d = n("379863"),
                m = n("707269"),
                f = n("192441"),
                T = n("181108"),
                E = n("719923"),
                P = n("153160"),
                S = n("78345"),
                _ = n("154889"),
                A = n("646718"),
                N = n("782340"),
                p = n("9180");
            let I = e => {
                let {
                    isTier0: t,
                    discountAmount: n
                } = e;
                return (0, a.jsx)("div", {
                    className: p.trialBadgeContainer,
                    children: (0, a.jsx)(u.Text, {
                        variant: "text-xs/bold",
                        className: i(p.trialOfferText, {
                            [p.tier0TrialOffer]: t
                        }),
                        children: void 0 !== n ? N.default.Messages.PREMIUM_DISCOUNT_AMOUNT_OFF_BADGE.format({
                            percent: n
                        }) : N.default.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT
                    })
                })
            };
            var M = function(e) {
                var t;
                let n;
                let {
                    hideCloseButton: r = !1,
                    hideCloseOnFullScreen: M,
                    shouldShowPrice: R,
                    plan: h,
                    renderAnimation: y,
                    onClose: g,
                    isGift: O,
                    upgradeToPremiumType: x,
                    headerTheme: L = S.PremiumHeaderThemes.DEFAULT,
                    className: C,
                    showTrialBadge: v = !1,
                    showDiscountBadge: H = !1
                } = e, U = x === A.PremiumTypes.TIER_2;
                n = x === A.PremiumTypes.TIER_0 ? d.default : x === A.PremiumTypes.TIER_1 ? m.default : o.default;
                let j = (0, s.useStateFromStores)([l.default], () => l.default.useReducedMotion),
                    k = (0, _.usePremiumDiscountOffer)(),
                    B = null == k ? void 0 : null === (t = k.discount) || void 0 === t ? void 0 : t.amount;
                return (0, a.jsxs)("div", {
                    "aria-hidden": !0,
                    className: i({
                        [p.headerBackground]: !U,
                        [L === S.PremiumHeaderThemes.WINTER ? p.tier2HeaderBackgroundWinterTheme : p.tier2HeaderBackground]: U
                    }, C),
                    children: [j || L !== S.PremiumHeaderThemes.WINTER ? null : (0, a.jsx)(T.default, {
                        className: p.snow,
                        wind: 5
                    }), (v || H) && (0, a.jsx)(f.default, {
                        className: p.trialBadgeSparkles
                    }), y(), (0, a.jsxs)(c.default, {
                        align: c.default.Align.START,
                        justify: c.default.Justify.BETWEEN,
                        className: p.headerTop,
                        children: [(0, a.jsxs)("div", {
                            children: [(0, a.jsx)(n, {
                                className: i(p.headerIcon, {
                                    [p.nonTier2]: !U
                                })
                            }), (v || H) && (0, a.jsx)(I, {
                                isTier0: x === A.PremiumTypes.TIER_0,
                                discountAmount: H ? B : void 0
                            })]
                        }), !r && (0, a.jsx)(u.ModalCloseButton, {
                            hideOnFullscreen: M,
                            onClick: g,
                            className: p.closeButton
                        })]
                    }), R && null != h ? (0, a.jsx)("div", {
                        className: p.price,
                        children: function(e, t) {
                            let n = E.default.getDefaultPrice(e),
                                {
                                    intervalType: a
                                } = E.default.getInterval(e),
                                r = (0, P.formatPrice)(n.amount, n.currency);
                            if (t) return r;
                            switch (a) {
                                case A.SubscriptionIntervalTypes.MONTH:
                                    return N.default.Messages.BILLING_PRICE_PER_MONTH.format({
                                        price: r
                                    });
                                case A.SubscriptionIntervalTypes.YEAR:
                                    return N.default.Messages.BILLING_PRICE_PER_YEAR.format({
                                        price: r
                                    })
                            }
                        }(h, O)
                    }) : null]
                })
            }
        },
        429070: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                usePurchaseTokenAuthStep: function() {
                    return s
                }
            });
            var a = n("884691"),
                r = n("85336"),
                i = n("467292");

            function s(e, t, n) {
                a.useEffect(() => {
                    null != e && e !== r.Step.AWAITING_PURCHASE_TOKEN_AUTH && t === i.PurchaseTokenAuthState.PENDING ? n(r.Step.AWAITING_PURCHASE_TOKEN_AUTH) : e === r.Step.AWAITING_PURCHASE_TOKEN_AUTH && t === i.PurchaseTokenAuthState.SUCCESS && n(r.Step.REVIEW)
                }, [e, t, n])
            }
        },
        992977: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PremiumModalHeaderAnimationTier0: function() {
                    return s
                },
                PremiumModalHeaderAnimationTier1: function() {
                    return u
                },
                PremiumModalHeaderAnimationTier2: function() {
                    return l
                }
            });
            var a = n("37983");
            n("884691");
            var r = n("467831"),
                i = n("22368");

            function s(e) {
                let {
                    currentStep: t,
                    purchaseState: n,
                    className: s,
                    pause: u
                } = e, [l, c] = (0, i.usePaymentModalAnimationScene)({
                    purchaseState: n,
                    currentStep: t,
                    initialScene: r.PremiumPaymentAnimationTier0.Scenes.NORMAL,
                    purchaseScene: r.PremiumPaymentAnimationTier0.Scenes.SPEED_START,
                    errorScene: r.PremiumPaymentAnimationTier0.Scenes.NORMAL,
                    successScene: r.PremiumPaymentAnimationTier0.Scenes.FINISH
                });
                return (0, a.jsx)(r.PremiumPaymentAnimationTier0, {
                    className: s,
                    nextScene: l,
                    onScenePlay: e => c(r.PremiumPaymentAnimationTier0.getNextScene(e)),
                    pauseWhileUnfocused: !1,
                    pause: u
                })
            }

            function u(e) {
                let {
                    currentStep: t,
                    purchaseState: n,
                    className: s,
                    pause: u
                } = e, [l, c] = (0, i.usePaymentModalAnimationScene)({
                    purchaseState: n,
                    currentStep: t,
                    initialScene: r.PremiumPaymentAnimationTier1.Scenes.NORMAL,
                    purchaseScene: r.PremiumPaymentAnimationTier1.Scenes.SPEED_START,
                    errorScene: r.PremiumPaymentAnimationTier1.Scenes.NORMAL,
                    successScene: r.PremiumPaymentAnimationTier1.Scenes.FINISH
                });
                return (0, a.jsx)(r.PremiumPaymentAnimationTier1, {
                    className: s,
                    nextScene: l,
                    onScenePlay: e => c(r.PremiumPaymentAnimationTier1.getNextScene(e)),
                    pauseWhileUnfocused: !1,
                    pause: u
                })
            }

            function l(e) {
                let {
                    currentStep: t,
                    purchaseState: n,
                    className: s,
                    pause: u
                } = e, [l, c] = (0, i.usePaymentModalAnimationScene)({
                    purchaseState: n,
                    currentStep: t,
                    initialScene: r.PremiumPaymentAnimationTier2.Scenes.IDLE_ENTRY,
                    purchaseScene: r.PremiumPaymentAnimationTier2.Scenes.BOOST_START,
                    errorScene: r.PremiumPaymentAnimationTier2.Scenes.ERROR,
                    successScene: r.PremiumPaymentAnimationTier2.Scenes.BOOST_END
                });
                return (0, a.jsx)(r.PremiumPaymentAnimationTier2, {
                    className: s,
                    nextScene: l,
                    onScenePlay: e => c(r.PremiumPaymentAnimationTier2.getNextScene(e)),
                    pauseWhileUnfocused: !1,
                    pause: u
                })
            }
        },
        510928: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            });
            var a = n("37983");
            n("884691");
            var r = n("414456"),
                i = n.n(r),
                s = n("446674"),
                u = n("77078"),
                l = n("206230"),
                c = n("85336"),
                o = n("659632"),
                d = n("78345"),
                m = n("160210"),
                f = n("992977"),
                T = n("646718"),
                E = n("782340"),
                P = n("721145");

            function S(e) {
                let {
                    currentStep: t,
                    className: n,
                    purchaseState: r,
                    premiumType: S,
                    useWinterTheme: _ = !1,
                    onClose: A,
                    hideCloseButton: N,
                    showTrialBadge: p,
                    showDiscountBadge: I,
                    giftRecipient: M
                } = e, R = (0, s.useStateFromStores)([l.default], () => l.default.useReducedMotion), h = _ ? d.PremiumHeaderThemes.WINTER : d.PremiumHeaderThemes.DEFAULT;
                return (0, o.isCustomGiftEnabled)(M) && t !== c.Step.CONFIRM ? (0, a.jsxs)(u.ModalHeader, {
                    className: P.modalHeaderCustomGift,
                    separator: !1,
                    children: [(0, a.jsx)("div", {
                        className: P.giftNitroInfo,
                        children: (0, a.jsx)(u.Heading, {
                            variant: "heading-lg/semibold",
                            children: (() => {
                                switch (t) {
                                    case c.Step.PLAN_SELECT:
                                        return E.default.Messages.GIFT_NITRO_ACTION;
                                    case c.Step.ADD_PAYMENT_STEPS:
                                        return E.default.Messages.PAYMENT_METHOD_SELECTION;
                                    case c.Step.REVIEW:
                                        return E.default.Messages.GIFT_PURCHASE_REVIEW;
                                    default:
                                        return E.default.Messages.GIFT_NITRO_ACTION
                                }
                            })()
                        })
                    }), (0, a.jsx)(u.ModalCloseButton, {
                        onClick: A,
                        className: P.closeButton
                    })]
                }) : (0, a.jsx)(u.ModalHeader, {
                    className: i(P.modalHeader, n),
                    separator: !1,
                    children: (0, a.jsx)(m.default, {
                        hideCloseOnFullScreen: !0,
                        hideCloseButton: N,
                        shouldShowPrice: !0,
                        upgradeToPremiumType: S,
                        renderAnimation: () => S === T.PremiumTypes.TIER_0 ? (0, a.jsx)(f.PremiumModalHeaderAnimationTier0, {
                            className: P.headerAnimation,
                            currentStep: t,
                            purchaseState: r,
                            pause: R
                        }) : S === T.PremiumTypes.TIER_1 ? (0, a.jsx)(f.PremiumModalHeaderAnimationTier1, {
                            className: P.headerAnimation,
                            currentStep: t,
                            purchaseState: r,
                            pause: R
                        }) : (0, a.jsx)(f.PremiumModalHeaderAnimationTier2, {
                            className: P.headerAnimation,
                            currentStep: t,
                            purchaseState: r,
                            pause: R
                        }),
                        plan: null,
                        isGift: !1,
                        className: P.header,
                        onClose: A,
                        headerTheme: h,
                        showTrialBadge: p,
                        showDiscountBadge: I
                    })
                })
            }
        },
        661128: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useUnsupportedExternalSubscriptionModalHandler: function() {
                    return d
                },
                useSubscriptionEntitlements: function() {
                    return f
                }
            });
            var a = n("884691"),
                r = n("446674"),
                i = n("404118"),
                s = n("10514"),
                u = n("437712"),
                l = n("719923"),
                c = n("843455"),
                o = n("782340");

            function d(e, t, n) {
                a.useEffect(() => {
                    null != e && e.isPurchasedExternally && null != e.paymentGateway && !n && (i.default.show({
                        title: o.default.Messages.BILLING_EXTERNAL_HEADER.format({
                            paymentGatewayName: c.PaymentGatewayToFriendlyName[e.paymentGateway]
                        }),
                        body: o.default.Messages.BILLING_EXTERNAL_MANAGE_ELSEWHERE.format({
                            paymentGatewayName: c.PaymentGatewayToFriendlyName[e.paymentGateway],
                            subscriptionManagementLink: (0, l.getExternalSubscriptionMethodUrl)(e.paymentGateway, "SUBSCRIPTION_MANAGEMENT")
                        }),
                        confirmText: o.default.Messages.OKAY
                    }), t())
                }, [e])
            }
            let m = [];

            function f(e, t) {
                let n = (0, r.useStateFromStores)([s.default], () => null != e ? s.default.get(e) : null),
                    i = (0, r.useStateFromStores)([u.default], () => {
                        var e;
                        return null != n && null !== (e = u.default.getForSku(n.skuId)) && void 0 !== e ? e : m
                    }),
                    c = a.useMemo(() => Array.from(i).filter(e => {
                        let {
                            parentId: t,
                            consumed: n
                        } = e;
                        return null != t && !n
                    }), [i]),
                    o = !t && null != n && null != c && c.length >= l.default.getIntervalMonths(n.interval, n.intervalCount);
                return {
                    hasEntitlements: o,
                    entitlements: c
                }
            }
        }
    }
]);