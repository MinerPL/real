(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["19193"], {
        35188: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var a = (0, n("862205").createExperiment)({
                kind: "user",
                id: "2022-12_localized_pricing_poland_notice",
                label: "Localized Pricing Poland Notice",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enable Poland Notice",
                    config: {
                        enabled: !0
                    }
                }]
            })
        },
        391533: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var a = (0, n("862205").createExperiment)({
                kind: "user",
                id: "2023-05_localized_pricing_turkey_notice",
                label: "Localized Pricing Turkey Notice",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enable Turkey Notice",
                    config: {
                        enabled: !0
                    }
                }]
            })
        },
        296253: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var a = n("446674"),
                r = n("357957"),
                i = n("521012");

            function s() {
                let e = (0, a.useStateFromStores)([i.default], () => i.default.getPremiumTypeSubscription()),
                    t = (0, a.useStateFromStores)([r.default], () => {
                        var t;
                        return (null == e ? void 0 : e.paymentSourceId) != null ? null === (t = r.default.getPaymentSource(e.paymentSourceId)) || void 0 === t ? void 0 : t.country : null
                    });
                return t
            }
        },
        279171: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useShouldShowLegacyPricingNotice: function() {
                    return I
                },
                default: function() {
                    return N
                }
            });
            var a = n("37983");
            n("884691");
            var r = n("414456"),
                i = n.n(r),
                s = n("627445"),
                u = n.n(s),
                l = n("423487"),
                o = n("701909"),
                c = n("35188"),
                d = n("391533"),
                m = n("296253"),
                _ = n("49111"),
                f = n("782340"),
                T = n("712109");

            function I() {
                let e = (0, m.default)(),
                    {
                        enabled: t
                    } = c.default.useExperiment({
                        location: "5ebfcf_1"
                    }, {
                        autoTrackExposure: !1
                    }),
                    {
                        enabled: n
                    } = d.default.useExperiment({
                        location: "5ebfcf_2"
                    }, {
                        autoTrackExposure: !1
                    });
                return null != e && ("PL" === e ? t : "TR" === e && n)
            }
            var N = e => {
                var t, n;
                let {
                    fromBoostCancelModal: r,
                    className: s
                } = e, c = (0, m.default)(), d = I();
                if (!d) return null;
                return u(null != c, "Subscription billing country should not be null"), (0, a.jsxs)("div", {
                    className: i(T.noticeRoot, s),
                    children: [(0, a.jsx)("div", {
                        className: T.iconContainer,
                        children: (0, a.jsx)(l.default, {
                            className: T.infoIcon
                        })
                    }), (0, a.jsx)("div", {
                        className: T.text,
                        children: (t = c, n = r, "PL" === t ? n ? f.default.Messages.LOCALIZED_PRICING_PLN_LEGACY_PRICING_BOOST_WARNING : f.default.Messages.LOCALIZED_PRICING_PLN_LEGACY_PRICING_WARNING : "TR" === t ? n ? f.default.Messages.LOCALIZED_PRICING_TRY_LEGACY_PRICING_BOOST_WARNING : f.default.Messages.LOCALIZED_PRICING_TRY_LEGACY_PRICING_WARNING : n ? f.default.Messages.LOCALIZED_PRICING_LEGACY_PRICING_BOOST_WARNING : f.default.Messages.LOCALIZED_PRICING_LEGACY_PRICING_WARNING).format({
                            helpCenterLink: o.default.getArticleURL(_.HelpdeskArticles.LOCALIZED_PRICING)
                        })
                    })]
                })
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
                    successScene: o
                } = e, [c, d] = (0, a.useState)(s);
                return (0, a.useEffect)(() => {
                    t === i.PurchaseState.PURCHASING ? d(u) : t === i.PurchaseState.FAIL && d(l)
                }, [t, u, l]), (0, a.useEffect)(() => {
                    n === r.Step.CONFIRM && d(o)
                }, [n, o]), [c, d]
            }
        },
        160210: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return O
                }
            });
            var a = n("37983");
            n("884691");
            var r = n("414456"),
                i = n.n(r),
                s = n("446674"),
                u = n("77078"),
                l = n("206230"),
                o = n("145131"),
                c = n("41250"),
                d = n("379863"),
                m = n("707269"),
                _ = n("192441"),
                f = n("181108"),
                T = n("719923"),
                I = n("153160"),
                N = n("78345"),
                S = n("154889"),
                P = n("646718"),
                E = n("782340"),
                A = n("9180");
            let R = e => {
                let {
                    isTier0: t,
                    discountAmount: n
                } = e;
                return (0, a.jsx)("div", {
                    className: A.trialBadgeContainer,
                    children: (0, a.jsx)(u.Text, {
                        variant: "text-xs/bold",
                        className: i(A.trialOfferText, {
                            [A.tier0TrialOffer]: t
                        }),
                        children: void 0 !== n ? E.default.Messages.PREMIUM_DISCOUNT_AMOUNT_OFF_BADGE.format({
                            percent: n
                        }) : E.default.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT
                    })
                })
            };
            var O = function(e) {
                var t;
                let n;
                let {
                    hideCloseButton: r = !1,
                    hideCloseOnFullScreen: O,
                    shouldShowPrice: p,
                    plan: M,
                    renderAnimation: C,
                    onClose: L,
                    isGift: y,
                    upgradeToPremiumType: h,
                    headerTheme: g = N.PremiumHeaderThemes.DEFAULT,
                    className: U,
                    showTrialBadge: x = !1,
                    showDiscountBadge: v = !1
                } = e, G = h === P.PremiumTypes.TIER_2;
                n = h === P.PremiumTypes.TIER_0 ? d.default : h === P.PremiumTypes.TIER_1 ? m.default : c.default;
                let B = (0, s.useStateFromStores)([l.default], () => l.default.useReducedMotion),
                    H = (0, S.usePremiumDiscountOffer)(),
                    D = null == H ? void 0 : null === (t = H.discount) || void 0 === t ? void 0 : t.amount;
                return (0, a.jsxs)("div", {
                    "aria-hidden": !0,
                    className: i({
                        [A.headerBackground]: !G,
                        [g === N.PremiumHeaderThemes.WINTER ? A.tier2HeaderBackgroundWinterTheme : A.tier2HeaderBackground]: G
                    }, U),
                    children: [B || g !== N.PremiumHeaderThemes.WINTER ? null : (0, a.jsx)(f.default, {
                        className: A.snow,
                        wind: 5
                    }), (x || v) && (0, a.jsx)(_.default, {
                        className: A.trialBadgeSparkles
                    }), C(), (0, a.jsxs)(o.default, {
                        align: o.default.Align.START,
                        justify: o.default.Justify.BETWEEN,
                        className: A.headerTop,
                        children: [(0, a.jsxs)("div", {
                            children: [(0, a.jsx)(n, {
                                className: i(A.headerIcon, {
                                    [A.nonTier2]: !G
                                })
                            }), (x || v) && (0, a.jsx)(R, {
                                isTier0: h === P.PremiumTypes.TIER_0,
                                discountAmount: v ? D : void 0
                            })]
                        }), !r && (0, a.jsx)(u.ModalCloseButton, {
                            hideOnFullscreen: O,
                            onClick: L,
                            className: A.closeButton
                        })]
                    }), p && null != M ? (0, a.jsx)("div", {
                        className: A.price,
                        children: function(e, t) {
                            let n = T.default.getDefaultPrice(e),
                                {
                                    intervalType: a
                                } = T.default.getInterval(e),
                                r = (0, I.formatPrice)(n.amount, n.currency);
                            if (t) return r;
                            switch (a) {
                                case P.SubscriptionIntervalTypes.MONTH:
                                    return E.default.Messages.BILLING_PRICE_PER_MONTH.format({
                                        price: r
                                    });
                                case P.SubscriptionIntervalTypes.YEAR:
                                    return E.default.Messages.BILLING_PRICE_PER_YEAR.format({
                                        price: r
                                    })
                            }
                        }(M, y)
                    }) : null]
                })
            }
        },
        67323: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return y
                }
            });
            var a = n("37983"),
                r = n("884691"),
                i = n("446674"),
                s = n("819855"),
                u = n("77078"),
                l = n("596523"),
                o = n("841098"),
                c = n("812204"),
                d = n("685665"),
                m = n("649844"),
                _ = n("357957"),
                f = n("10514"),
                T = n("599110"),
                I = n("719923"),
                N = n("153160"),
                S = n("713518"),
                P = n("380186"),
                E = n("809071"),
                A = n("360262"),
                R = n("510928"),
                O = n("775155"),
                p = n("646718"),
                M = n("49111"),
                C = n("782340"),
                L = n("889353"),
                y = e => {
                    let {
                        daysLeft: t,
                        premiumType: n,
                        premiumSubscription: y,
                        analyticsSource: h,
                        ...g
                    } = e, U = (0, o.default)(), [x, v] = r.useState(!1), {
                        analyticsLocations: G
                    } = (0, d.default)(c.default.PREMIUM_UNCANCEL_MODAL), B = (0, i.useStateFromStores)([_.default], () => (null == y ? void 0 : y.paymentSourceId) != null ? _.default.getPaymentSource(y.paymentSourceId) : null, [y]), [H] = (0, E.useSubscriptionInvoicePreview)({
                        subscriptionId: y.id,
                        renewal: !0,
                        analyticsLocations: (0, d.default)(c.default.PREMIUM_UNCANCEL_MODAL),
                        analyticsLocation: c.default.PREMIUM_UNCANCEL_MODAL
                    }), D = I.default.getPlanIdFromInvoice(y, H), j = p.SubscriptionPlanInfo[D].skuId, b = (0, i.useStateFromStores)([f.default], () => (0, P.getOrFetchSubscriptionPlan)(D), [D]), F = (0, i.useStateFromStores)([f.default], () => f.default.isFetchingForSKU(j)), Y = null != b ? I.default.getDefaultPrice(D) : null, {
                        intervalType: W,
                        intervalCount: k
                    } = I.default.getInterval(D), w = n === p.PremiumTypes.TIER_1, Z = null != Y ? (0, N.formatPrice)(Y.amount, Y.currency) : null;
                    return r.useEffect(() => {
                        T.default.track(M.AnalyticEvents.OPEN_MODAL, {
                            type: "Premium Uncancel Winback",
                            source: h
                        })
                    }, [h]), (0, a.jsx)(u.ModalRoot, {
                        ...g,
                        className: L.modal,
                        children: x ? (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(R.default, {
                                premiumType: n,
                                onClose: g.onClose
                            }), (0, a.jsx)(O.default, {
                                planId: D,
                                onClose: g.onClose,
                                paymentSourceType: null == B ? void 0 : B.type
                            })]
                        }) : (0, a.jsx)(A.default, {
                            premiumType: n,
                            titleText: w ? C.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_TITLE_TIER_1.format({
                                daysLeft: t
                            }) : C.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_TITLE.format({
                                daysLeft: t
                            }),
                            subtitleText: w ? C.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_SUBTITLE_TIER_1.format() : C.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_SUBTITLE.format(),
                            footer: (0, a.jsxs)("div", {
                                children: [null !== Z ? (0, a.jsx)(u.Text, {
                                    variant: "text-sm/normal",
                                    children: function(e) {
                                        switch (W) {
                                            case p.SubscriptionIntervalTypes.YEAR:
                                                return w ? C.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_YEARLY_TIER_1.format({
                                                    price: e
                                                }) : C.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_YEARLY.format({
                                                    price: e
                                                });
                                            case p.SubscriptionIntervalTypes.MONTH:
                                                if (w) return C.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_MONTHLY_TIER_1.format({
                                                    price: e
                                                });
                                                if (1 === k) return C.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_MONTHLY.format({
                                                    price: e
                                                });
                                                else return C.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_MULTI_MONTH.format({
                                                    price: e,
                                                    intervalCount: k
                                                });
                                            default:
                                                throw Error("Unknown interval type ".concat(W))
                                        }
                                    }(Z)
                                }) : (0, a.jsx)(u.Spinner, {
                                    type: u.SpinnerTypes.SPINNING_CIRCLE
                                }), (0, a.jsxs)("div", {
                                    className: L.footer,
                                    children: [(0, a.jsx)(u.Button, {
                                        disabled: F,
                                        onClick: () => {
                                            if (null != y) {
                                                let e = (0, S.planHasCurrency)(D, y.currency, null == B ? void 0 : B.id);
                                                null != B && B.id === y.paymentSourceId && e ? (l.resubscribe(y, G, M.AnalyticsLocations.UNCANCEL_WINBACK_MODAL), v(!0)) : (g.onClose(), (0, m.default)({
                                                    initialPlanId: D,
                                                    analyticsLocations: G,
                                                    analyticsLocation: M.AnalyticsLocations.UNCANCEL_WINBACK_MODAL
                                                }))
                                            }
                                        },
                                        children: C.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_BUTTON_KEEP_NITRO
                                    }), (0, a.jsx)(u.Button, {
                                        look: u.Button.Looks.LINK,
                                        color: (0, s.isThemeDark)(U) ? u.Button.Colors.WHITE : u.Button.Colors.PRIMARY,
                                        onClick: g.onClose,
                                        children: C.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_BUTTON_CANCEL
                                    })]
                                })]
                            }),
                            stickyFooter: !0,
                            onClose: g.onClose
                        })
                    })
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
                } = e, [l, o] = (0, i.usePaymentModalAnimationScene)({
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
                    onScenePlay: e => o(r.PremiumPaymentAnimationTier0.getNextScene(e)),
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
                } = e, [l, o] = (0, i.usePaymentModalAnimationScene)({
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
                    onScenePlay: e => o(r.PremiumPaymentAnimationTier1.getNextScene(e)),
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
                } = e, [l, o] = (0, i.usePaymentModalAnimationScene)({
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
                    onScenePlay: e => o(r.PremiumPaymentAnimationTier2.getNextScene(e)),
                    pauseWhileUnfocused: !1,
                    pause: u
                })
            }
        },
        510928: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
                }
            });
            var a = n("37983");
            n("884691");
            var r = n("414456"),
                i = n.n(r),
                s = n("446674"),
                u = n("77078"),
                l = n("206230"),
                o = n("85336"),
                c = n("659632"),
                d = n("78345"),
                m = n("160210"),
                _ = n("992977"),
                f = n("646718"),
                T = n("782340"),
                I = n("721145");

            function N(e) {
                let {
                    currentStep: t,
                    className: n,
                    purchaseState: r,
                    premiumType: N,
                    useWinterTheme: S = !1,
                    onClose: P,
                    hideCloseButton: E,
                    showTrialBadge: A,
                    showDiscountBadge: R,
                    giftRecipient: O
                } = e, p = (0, s.useStateFromStores)([l.default], () => l.default.useReducedMotion), M = S ? d.PremiumHeaderThemes.WINTER : d.PremiumHeaderThemes.DEFAULT;
                return (0, c.isCustomGiftEnabled)(O) && t !== o.Step.CONFIRM ? (0, a.jsxs)(u.ModalHeader, {
                    className: I.modalHeaderCustomGift,
                    separator: !1,
                    children: [(0, a.jsx)("div", {
                        className: I.giftNitroInfo,
                        children: (0, a.jsx)(u.Heading, {
                            variant: "heading-lg/semibold",
                            children: (() => {
                                switch (t) {
                                    case o.Step.PLAN_SELECT:
                                        return T.default.Messages.GIFT_NITRO_ACTION;
                                    case o.Step.ADD_PAYMENT_STEPS:
                                        return T.default.Messages.PAYMENT_METHOD_SELECTION;
                                    case o.Step.REVIEW:
                                        return T.default.Messages.GIFT_PURCHASE_REVIEW;
                                    default:
                                        return T.default.Messages.GIFT_NITRO_ACTION
                                }
                            })()
                        })
                    }), (0, a.jsx)(u.ModalCloseButton, {
                        onClick: P,
                        className: I.closeButton
                    })]
                }) : (0, a.jsx)(u.ModalHeader, {
                    className: i(I.modalHeader, n),
                    separator: !1,
                    children: (0, a.jsx)(m.default, {
                        hideCloseOnFullScreen: !0,
                        hideCloseButton: E,
                        shouldShowPrice: !0,
                        upgradeToPremiumType: N,
                        renderAnimation: () => N === f.PremiumTypes.TIER_0 ? (0, a.jsx)(_.PremiumModalHeaderAnimationTier0, {
                            className: I.headerAnimation,
                            currentStep: t,
                            purchaseState: r,
                            pause: p
                        }) : N === f.PremiumTypes.TIER_1 ? (0, a.jsx)(_.PremiumModalHeaderAnimationTier1, {
                            className: I.headerAnimation,
                            currentStep: t,
                            purchaseState: r,
                            pause: p
                        }) : (0, a.jsx)(_.PremiumModalHeaderAnimationTier2, {
                            className: I.headerAnimation,
                            currentStep: t,
                            purchaseState: r,
                            pause: p
                        }),
                        plan: null,
                        isGift: !1,
                        className: I.header,
                        onClose: P,
                        headerTheme: M,
                        showTrialBadge: A,
                        showDiscountBadge: R
                    })
                })
            }
        }
    }
]);