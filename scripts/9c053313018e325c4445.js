(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["60932"], {
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
                    return u
                }
            });
            var l = n("884691"),
                a = n("286235"),
                u = (e, t, n, u, s) => {
                    let i = (0, l.useRef)(!1);
                    (0, l.useEffect)(() => {
                        if (t && !i.current) {
                            i.current = !0;
                            let t = setTimeout(() => {
                                let t = Error("".concat(e, " is taking too long to load."));
                                a.default.setExtra({
                                    loadingState: u,
                                    loadingTimeSeconds: n
                                }), a.default.captureException(t, {
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
                    return M
                },
                BlockedPaymentsContentModal: function() {
                    return A
                },
                BlockedPaymentsWarning: function() {
                    return I
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("414456"),
                u = n.n(a),
                s = n("669491"),
                i = n("819855"),
                r = n("77078"),
                o = n("841098"),
                c = n("145131"),
                d = n("423487"),
                f = n("701909"),
                _ = n("619935"),
                E = n("49111"),
                p = n("782340"),
                S = n("653842"),
                m = n("584503"),
                P = n("45656");

            function T(e) {
                let {
                    className: t
                } = e, n = (0, o.default)(), a = (0, i.isThemeDark)(n) ? m : P;
                return (0, l.jsxs)("div", {
                    className: u(S.container, t),
                    children: [(0, l.jsx)(r.Heading, {
                        className: S.header,
                        variant: "heading-xl/semibold",
                        children: p.default.Messages.REGION_BLOCKED_PAYMENTS_HEADER
                    }), (0, l.jsxs)(r.Text, {
                        className: S.description,
                        variant: "text-md/normal",
                        color: "header-secondary",
                        children: [(0, l.jsx)("p", {
                            children: p.default.Messages.REGION_BLOCKED_PAYMENTS_BODY
                        }), (0, l.jsx)("p", {
                            children: p.default.Messages.REGION_BLOCKED_PAYMENTS_CTA.format({
                                helpdeskArticle: f.default.getArticleURL(E.HelpdeskArticles.BLOCKED_PAYMENTS)
                            })
                        })]
                    }), (0, l.jsx)("img", {
                        src: a,
                        className: S.splashImage,
                        alt: "Blocked Payments"
                    })]
                })
            }

            function M() {
                return (0, l.jsx)(T, {
                    className: S.settings
                })
            }

            function A(e) {
                let {
                    onClose: t
                } = e;
                return (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)(r.ModalHeader, {
                        className: S.blockedPaymentsModalHeader,
                        justify: c.default.Justify.END,
                        children: (0, l.jsx)(r.ModalCloseButton, {
                            onClick: t
                        })
                    }), (0, l.jsx)(r.ModalContent, {
                        className: S.blockedPaymentsModalContent,
                        children: (0, l.jsx)(T, {
                            className: S.modal
                        })
                    })]
                })
            }

            function I(e) {
                let {
                    className: t
                } = e, n = (0, _.useBlockedPaymentsConfig)();
                return n ? (0, l.jsxs)(r.Card, {
                    className: u(S.blockedPaymentsWarning, t),
                    type: r.Card.Types.CUSTOM,
                    children: [(0, l.jsx)(d.default, {
                        className: S.blockedPaymentsWarningIcon,
                        color: s.default.unsafe_rawColors.YELLOW_300.css
                    }), (0, l.jsx)(r.Text, {
                        variant: "text-sm/normal",
                        children: p.default.Messages.REGION_BLOCKED_PAYMENTS_ONE_LINER.format({
                            helpdeskArticle: f.default.getArticleURL(E.HelpdeskArticles.BLOCKED_PAYMENTS)
                        })
                    })]
                }) : null
            }
        },
        996808: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("884691"),
                a = n("913144");

            function u(e) {
                let t = (0, l.useRef)(e);
                (0, l.useEffect)(() => {
                    t.current = e
                }, [e]), (0, l.useEffect)(() => {
                    if (__OVERLAY__) {
                        function e(e) {
                            e.locked && t.current()
                        }
                        return a.default.subscribe("OVERLAY_SET_INPUT_LOCKED", e), () => {
                            a.default.unsubscribe("OVERLAY_SET_INPUT_LOCKED", e)
                        }
                    }
                }, [])
            }
        },
        385179: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PaymentModal: function() {
                    return D
                },
                PaymentPredicateStep: function() {
                    return Y
                }
            });
            var l = n("37983"),
                a = n("884691"),
                u = n("414456"),
                s = n.n(u),
                i = n("775560"),
                r = n("65597"),
                o = n("77078"),
                c = n("251472"),
                d = n("856413"),
                f = n("245187"),
                _ = n("996808"),
                E = n("669073"),
                p = n("154889"),
                S = n("877261"),
                m = n("429070"),
                P = n("661128"),
                T = n("10514"),
                M = n("437712"),
                A = n("599110"),
                I = n("659632"),
                N = n("719923"),
                h = n("642906"),
                y = n("85336"),
                R = n("286350"),
                C = n("176108"),
                O = n("254350"),
                g = n("622271"),
                k = n("628738"),
                L = n("650484"),
                v = n("49111"),
                x = n("646718"),
                U = n("782340"),
                b = n("760604");

            function D(e) {
                let {
                    analyticsLocations: t,
                    analyticsLocation: n,
                    analyticsObject: u,
                    analyticsSourceLocation: r,
                    analyticsSubscriptionType: c = v.SubscriptionTypes.PREMIUM,
                    onComplete: d,
                    transitionState: f,
                    initialPlanId: E,
                    giftMessage: M,
                    subscriptionTier: C,
                    onClose: O,
                    trialId: k,
                    isGift: D = !1,
                    trialFooterMessageOverride: Y,
                    reviewWarningMessage: G,
                    planGroup: j = x.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                    openInvoiceId: H,
                    onSubscriptionConfirmation: B,
                    renderPurchaseConfirmation: K,
                    postSuccessGuild: w,
                    followupSKUInfo: F,
                    renderHeader: W,
                    applicationId: V,
                    guildId: z,
                    referralTrialOfferId: X,
                    skuId: J,
                    shakeWhilePurchasing: q = !1,
                    isLargeModal: Q = !1,
                    hideShadow: Z = !1,
                    returnRef: $
                } = e, {
                    activitySessionId: ee,
                    purchaseState: et,
                    setPurchaseState: en,
                    selectedSkuId: el,
                    setSelectedSkuId: ea,
                    selectedPlan: eu,
                    setSelectedPlanId: es,
                    setStep: ei,
                    setPurchaseError: er,
                    paymentAuthenticationState: eo,
                    step: ec,
                    contextMetadata: ed,
                    purchaseTokenAuthState: ef,
                    activeSubscription: e_,
                    priceOptions: eE,
                    hasPaymentSources: ep,
                    purchaseType: eS,
                    giftRecipient: em
                } = (0, h.usePaymentContext)(), eP = (0, p.usePremiumDiscountOffer)(), eT = null != C && !D && (0, p.discountOfferHasTier)(eP, C), [eM, eA] = a.useState({
                    load_id: ed.loadId,
                    payment_type: v.PurchaseTypeToAnalyticsPaymentType[eS],
                    location: null != n ? n : u,
                    source: r,
                    subscription_type: c,
                    subscription_plan_id: null == eu ? void 0 : eu.id,
                    is_gift: D,
                    eligible_for_trial: null != k,
                    location_stack: t,
                    sku_id: J,
                    application_id: V,
                    guild_id: z,
                    payment_modal_version: "v1",
                    activity_session_id: ee,
                    eligible_for_discount: eT
                }), [eI, eN] = a.useState((0, I.isCustomGiftEnabled)(em) ? U.default.Messages.DEFAULT_CUSTOM_GIFT_MESSAGE : void 0);
                a.useEffect(() => {
                    eA(e => {
                        let t = null != eu ? (0, N.getPrice)(eu.id, !1, D, eE) : void 0,
                            n = {
                                ...e,
                                subscription_plan_id: null == eu ? void 0 : eu.id,
                                price: null == t ? void 0 : t.amount,
                                regular_price: null == eu ? void 0 : eu.price,
                                currency: eE.currency,
                                sku_id: el
                            };
                        return n
                    })
                }, [eu, el, D, eE]), a.useEffect(() => {
                    A.default.track(v.AnalyticEvents.PAYMENT_FLOW_STARTED, {
                        ...eM,
                        has_saved_payment_source: ep
                    })
                }, []), a.useEffect(() => {
                    if (es(E), null != J) ea(J);
                    else if (null != E) {
                        var e;
                        ea(null === (e = T.default.get(E)) || void 0 === e ? void 0 : e.skuId)
                    }
                }, [es, ea, E, J]);
                let eh = (0, i.useStableMemo)(() => Date.now(), [ec]),
                    ey = a.useCallback(function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            {
                                trackedFromStep: n,
                                analyticsDataOverride: l,
                                fulfillment: a
                            } = t;
                        if (e === y.Step.CONFIRM) null == d || d(a);
                        ei(e), er(null);
                        let u = null != n ? n : ec,
                            s = Date.now();
                        if (null === u) {
                            A.default.track(v.AnalyticEvents.PAYMENT_FLOW_LOADED, {
                                ...eM,
                                initial_step: e,
                                has_saved_payment_source: ep
                            });
                            return
                        }
                        A.default.track(v.AnalyticEvents.PAYMENT_FLOW_STEP, {
                            ...eM,
                            ...l,
                            from_step: u,
                            to_step: e === y.Step.ADD_PAYMENT_STEPS ? y.Step.PAYMENT_TYPE : e,
                            step_duration_ms: s - eh,
                            flow_duration_ms: s - ed.startTime
                        })
                    }, [eM, ed.startTime, d, er, ei, ec, eh, ep]),
                    eR = a.useMemo(() => () => null == O ? void 0 : O(et === R.PurchaseState.COMPLETED), [O, et]);
                (0, S.usePaymentStepForAuthentication)(ec, eo, ey), (0, y.usePurchaseStateForStep)(ec, et, en), (0, m.usePurchaseTokenAuthStep)(ec, ef, ey), (0, _.default)(eR), (0, P.useUnsupportedExternalSubscriptionModalHandler)(e_, () => O(!1), D), (0, S.usePaymentAuthenticationPoller)(eo);
                let eC = (0, g.PaymentModalHeader)({
                    isGift: D,
                    renderHeader: W,
                    referralTrialOfferId: X,
                    handleClose: eR
                });
                return (0, l.jsx)(o.Shaker, {
                    className: b.shaker,
                    isShaking: q && et === R.PurchaseState.PURCHASING,
                    intensity: 2,
                    children: (0, l.jsx)(o.ModalRoot, {
                        className: s(b.root, {
                            [b.withHeader]: null != eC
                        }),
                        transitionState: f,
                        hideShadow: Z,
                        returnRef: $,
                        size: Q ? o.ModalSize.LARGE : o.ModalSize.SMALL,
                        children: (0, l.jsx)(L.default, {
                            header: eC,
                            isLargeModal: Q,
                            initialPlanId: E,
                            giftMessage: M,
                            customGiftMessage: eI,
                            setCustomGiftMessage: eN,
                            subscriptionTier: C,
                            handleStepChange: ey,
                            handleClose: eR,
                            analyticsData: eM,
                            setAnalyticsData: eA,
                            trialId: k,
                            trialFooterMessageOverride: Y,
                            reviewWarningMessage: G,
                            planGroup: j,
                            openInvoiceId: H,
                            analyticsLocation: n,
                            onSubscriptionConfirmation: B,
                            renderPurchaseConfirmation: K,
                            postSuccessGuild: w,
                            followupSKUInfo: F,
                            referralTrialOfferId: X
                        })
                    })
                })
            }

            function Y(e) {
                let {
                    subscriptionTier: t,
                    initialPlanId: n,
                    handleStepChange: u,
                    referralTrialOfferId: s,
                    handleClose: i
                } = e, {
                    activeSubscription: o,
                    blockedPayments: _,
                    hasFetchedSubscriptions: p,
                    hasFetchedSubscriptionPlans: S,
                    currencyLoading: m,
                    selectedSkuId: P,
                    setSelectedPlanId: T,
                    isGift: A,
                    defaultPlanId: I,
                    startedPaymentFlowWithPaymentSourcesRef: N
                } = (0, h.usePaymentContext)(), R = N.current, g = (0, O.default)({
                    isGift: A,
                    skuId: P,
                    referralTrialOfferId: s
                }), {
                    defaultToMonthlyPlan: L
                } = E.TrialRedemptionDefaultPlanExperiment.getCurrentConfig({
                    location: "055ec5_1"
                }, {
                    autoTrackExposure: !1
                }), [v, U] = a.useState(!0), b = (0, r.default)([M.default], () => M.default.applicationIdsFetched.has(x.PREMIUM_SUBSCRIPTION_APPLICATION));
                return (a.useEffect(() => {
                    U(!p || !S || m)
                }, [m, S, p]), (0, d.default)("Payment Modal", v, 5, {
                    hasFetchedSubscriptions: p,
                    hasFetchedSubscriptionPlans: S,
                    currencyLoading: m
                }, {
                    tags: {
                        app_context: "billing"
                    }
                }), a.useEffect(() => {
                    if (!b && (0, c.fetchUserEntitlementsForApplication)(x.PREMIUM_SUBSCRIPTION_APPLICATION), v || _) return;
                    let e = (0, C.inOneStepSubscriptionCheckout)({
                        isTrial: g,
                        isGift: A,
                        selectedSkuId: P,
                        startedPaymentFlowWithPaymentSources: R
                    });
                    if (null != n) u(y.Step.REVIEW);
                    else if (e) {
                        let e = (0, C.getDefaultPlanOneStepCheckout)(P, o, I);
                        T(e), u(y.Step.REVIEW)
                    } else null != t ? u(y.Step.PLAN_SELECT) : u(y.Step.SKU_SELECT)
                }, [o, _, b, n, v, u, t, P, T, L, g, I, A, R]), v) ? (0, l.jsx)(k.default, {}) : _ ? (0, l.jsx)(f.BlockedPaymentsContentModal, {
                    onClose: i
                }) : null
            }
        },
        622271: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PaymentModalHeader: function() {
                    return A
                }
            });
            var l = n("37983"),
                a = n("884691"),
                u = n("627445"),
                s = n.n(u),
                i = n("77078"),
                r = n("333955"),
                o = n("210721"),
                c = n("53253"),
                d = n("154889"),
                f = n("917247"),
                _ = n("65324"),
                E = n("510928"),
                p = n("659632"),
                S = n("642906"),
                m = n("85336"),
                P = n("646718"),
                T = n("843455"),
                M = n("111735");

            function A(e) {
                var t;
                let {
                    isGift: n,
                    renderHeader: u,
                    referralTrialOfferId: A,
                    handleClose: I
                } = e, {
                    selectedSkuId: N,
                    step: h,
                    selectedPlan: y,
                    purchaseState: R,
                    selectedGiftStyle: C,
                    purchaseType: O,
                    giftRecipient: g
                } = (0, S.usePaymentContext)(), {
                    enabled: k
                } = c.default.useExperiment({
                    location: "cbdb8c_1"
                }, {
                    autoTrackExposure: !1
                }), L = (0, c.useIsSeasonalGiftingActive)();
                a.useEffect(() => {
                    L && n && c.default.trackExposure({
                        location: "cbdb8c_2"
                    })
                }, [L, n]);
                let v = k && L && n && N === P.PremiumSubscriptionSKUs.TIER_2,
                    x = (v || (0, p.isCustomGiftEnabled)(g)) && h === m.Step.CONFIRM && null != C,
                    U = null != u && null != h,
                    b = h !== m.Step.SKU_SELECT && null != N,
                    D = (0, f.usePremiumTrialOffer)(A),
                    Y = !n && null != D && null != N && (0, P.SubscriptionTrials)[D.trial_id].skus.includes(N),
                    G = (0, d.usePremiumDiscountOffer)(),
                    j = null == G ? void 0 : null === (t = G.discount) || void 0 === t ? void 0 : t.plan_ids.some(e => P.SubscriptionPlanInfo[e].skuId === N),
                    H = !n && null != G && null != N && j,
                    B = a.useMemo(() => {
                        if (null == h) return;
                        let e = null;
                        if (x) e = (0, l.jsxs)("div", {
                            className: M.container,
                            children: [(0, l.jsx)(_.default, {
                                defaultAnimationState: o.AnimationState.LOOP,
                                giftStyle: C,
                                className: M.seasonalGiftBoxHeaderIcon
                            }), (0, l.jsx)(i.ModalCloseButton, {
                                onClick: I,
                                className: M.closeButton
                            })]
                        });
                        else if (U) e = u(null != y ? y : null, I, h);
                        else if (O === T.PurchaseTypes.ONE_TIME) e = (0, l.jsx)(r.PurchaseHeader, {
                            step: h,
                            onClose: I
                        });
                        else if (b) s(N in P.PremiumSubscriptionSKUToPremiumType, "invalid sku id: ".concat(N)), e = (0, l.jsx)(E.default, {
                            currentStep: null != h ? h : void 0,
                            purchaseState: R,
                            premiumType: P.PremiumSubscriptionSKUToPremiumType[N],
                            onClose: I,
                            useWinterTheme: v,
                            showTrialBadge: Y,
                            showDiscountBadge: H,
                            giftRecipient: g
                        });
                        return e
                    }, [v, C, I, R, u, y, N, h, Y, H, x, b, U, O, g]);
                return B
            }
        },
        628738: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("77078"),
                u = n("840339");

            function s() {
                return (0, l.jsx)(a.Spinner, {
                    className: u.spinner
                })
            }
        },
        176108: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                inOneStepSubscriptionCheckout: function() {
                    return u
                },
                planSwitchLoadingShowSpinner: function() {
                    return s
                },
                getDefaultPlanOneStepCheckout: function() {
                    return i
                }
            });
            var l = n("719923"),
                a = n("646718");

            function u(e) {
                let {
                    isTrial: t,
                    isGift: n,
                    selectedSkuId: l,
                    startedPaymentFlowWithPaymentSources: u
                } = e;
                return !t && !n && null != l && a.ACTIVE_PREMIUM_SKUS.includes(l) && u
            }

            function s(e, t, n) {
                let l = !1;
                if (e && null != t) {
                    let e = t.invoiceItems.find(e => e.subscriptionPlanId === n.id);
                    null == e && (l = !0)
                }
                return l
            }

            function i(e, t, n) {
                let u = null != t ? (0, l.getPremiumPlanItem)(t) : null,
                    s = a.PREMIUM_SKU_TO_YEARLY_PLAN[e],
                    i = null != n ? n : s;
                return null != u ? i === u.planId && i === a.PREMIUM_SKU_TO_MONTHLY_PLAN[e] ? i = a.PREMIUM_SKU_TO_YEARLY_PLAN[e] : i === u.planId && i === a.PREMIUM_SKU_TO_YEARLY_PLAN[e] ? i = a.PREMIUM_SKU_TO_MONTHLY_PLAN[e] : (u.planId === a.SubscriptionPlans.PREMIUM_YEAR_TIER_0 || u.planId === a.SubscriptionPlans.PREMIUM_YEAR_TIER_1) && i === a.SubscriptionPlans.PREMIUM_MONTH_TIER_2 && (i = a.SubscriptionPlans.PREMIUM_YEAR_TIER_2) : i === a.SubscriptionPlans.PREMIUM_YEAR_TIER_1 && (i = a.SubscriptionPlans.PREMIUM_MONTH_TIER_1), i
            }
        },
        254350: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                isInTrialRedemption: function() {
                    return u
                },
                default: function() {
                    return s
                }
            });
            var l = n("917247"),
                a = n("646718");

            function u(e) {
                let {
                    userTrialOffer: t,
                    isGift: n,
                    skuId: l
                } = e;
                return !n && null != t && (0, a.SubscriptionTrials)[t.trial_id].skus.includes(l)
            }

            function s(e) {
                let {
                    isGift: t,
                    skuId: n,
                    referralTrialOfferId: u
                } = e, s = (0, l.usePremiumTrialOffer)(u);
                return !t && null != s && (0, a.SubscriptionTrials)[s.trial_id].skus.includes(n)
            }
        },
        429070: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                usePurchaseTokenAuthStep: function() {
                    return s
                }
            });
            var l = n("884691"),
                a = n("85336"),
                u = n("467292");

            function s(e, t, n) {
                l.useEffect(() => {
                    null != e && e !== a.Step.AWAITING_PURCHASE_TOKEN_AUTH && t === u.PurchaseTokenAuthState.PENDING ? n(a.Step.AWAITING_PURCHASE_TOKEN_AUTH) : e === a.Step.AWAITING_PURCHASE_TOKEN_AUTH && t === u.PurchaseTokenAuthState.SUCCESS && n(a.Step.REVIEW)
                }, [e, t, n])
            }
        },
        661128: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useUnsupportedExternalSubscriptionModalHandler: function() {
                    return d
                },
                useSubscriptionEntitlements: function() {
                    return _
                }
            });
            var l = n("884691"),
                a = n("446674"),
                u = n("404118"),
                s = n("10514"),
                i = n("437712"),
                r = n("719923"),
                o = n("843455"),
                c = n("782340");

            function d(e, t, n) {
                l.useEffect(() => {
                    null != e && e.isPurchasedExternally && null != e.paymentGateway && !n && (u.default.show({
                        title: c.default.Messages.BILLING_EXTERNAL_HEADER.format({
                            paymentGatewayName: o.PaymentGatewayToFriendlyName[e.paymentGateway]
                        }),
                        body: c.default.Messages.BILLING_EXTERNAL_MANAGE_ELSEWHERE.format({
                            paymentGatewayName: o.PaymentGatewayToFriendlyName[e.paymentGateway],
                            subscriptionManagementLink: (0, r.getExternalSubscriptionMethodUrl)(e.paymentGateway, "SUBSCRIPTION_MANAGEMENT")
                        }),
                        confirmText: c.default.Messages.OKAY
                    }), t())
                }, [e])
            }
            let f = [];

            function _(e, t) {
                let n = (0, a.useStateFromStores)([s.default], () => null != e ? s.default.get(e) : null),
                    u = (0, a.useStateFromStores)([i.default], () => {
                        var e;
                        return null != n && null !== (e = i.default.getForSku(n.skuId)) && void 0 !== e ? e : f
                    }),
                    o = l.useMemo(() => Array.from(u).filter(e => {
                        let {
                            parentId: t,
                            consumed: n
                        } = e;
                        return null != t && !n
                    }), [u]),
                    c = !t && null != n && null != o && o.length >= r.default.getIntervalMonths(n.interval, n.intervalCount);
                return {
                    hasEntitlements: c,
                    entitlements: o
                }
            }
        }
    }
]);