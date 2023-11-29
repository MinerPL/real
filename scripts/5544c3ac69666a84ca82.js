(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["71518"], {
        93902: function(e, t, n) {
            "use strict";
            e.exports = n.p + "de1981a6479d060d8ebd.png"
        },
        315147: function(e, t, n) {
            "use strict";
            e.exports = n.p + "3808a69f670fa9a67284.svg"
        },
        426188: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useFetchCollectiblesProduct: function() {
                    return o
                }
            }), n("222007");
            var i = n("884691"),
                a = n("65597"),
                r = n("552712"),
                s = n("21526"),
                l = n("853987"),
                u = n("49111");

            function o(e) {
                let t = (0, a.default)([r.default], () => null != e ? r.default.get(e) : null),
                    n = null == t ? void 0 : t.productLine,
                    [o, c] = (0, a.useStateFromStoresArray)([l.default], () => [l.default.isFetching, l.default.getProduct(e)]);
                return (0, i.useEffect)(() => {
                    null != e && null == c && (null == n || n === u.SKUProductLines.COLLECTIBLES) && (0, s.fetchCollectiblesProduct)(e)
                }, [e, c, n]), {
                    product: c,
                    isFetching: o
                }
            }
        },
        99836: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PaymentModalReviewStep: function() {
                    return g
                }
            }), n("222007"), n("70102");
            var i = n("37983"),
                a = n("884691"),
                r = n("627445"),
                s = n.n(r),
                l = n("612039"),
                u = n("916187"),
                o = n("154889"),
                c = n("917247"),
                d = n("527866"),
                p = n("451516"),
                m = n("826795"),
                f = n("659632"),
                S = n("635357"),
                h = n("642906"),
                P = n("85336"),
                I = n("310093"),
                v = n("367767"),
                E = n("176108"),
                y = n("298392"),
                T = n("153727"),
                x = n("650484"),
                C = n("646718"),
                b = n("843455"),
                _ = n("782340");

            function g(e) {
                var t, n;
                let r, {
                        handleStepChange: g,
                        trialId: N,
                        trialFooterMessageOverride: L,
                        reviewWarningMessage: A,
                        planGroup: j,
                        openInvoiceId: R,
                        analyticsData: M,
                        analyticsLocation: w,
                        referralTrialOfferId: F,
                        initialPlanId: O,
                        subscriptionTier: U
                    } = e,
                    {
                        activeSubscription: G,
                        setUpdatedSubscription: D,
                        contextMetadata: B,
                        currencies: W,
                        paymentSourceId: k,
                        paymentSources: H,
                        priceOptions: V,
                        purchaseError: z,
                        purchaseTokenAuthState: Y,
                        selectedPlan: K,
                        selectedSkuId: Z,
                        setCurrency: Q,
                        setPaymentSourceId: J,
                        setPurchaseState: X,
                        setPurchaseError: q,
                        step: $,
                        purchaseState: ee,
                        isPremium: et,
                        setHasAcceptedTerms: en,
                        purchaseType: ei,
                        setEntitlementsGranted: ea,
                        startedPaymentFlowWithPaymentSourcesRef: er
                    } = (0, h.usePaymentContext)(),
                    {
                        isGift: es,
                        giftMessage: el,
                        giftRecipient: eu
                    } = (0, S.useGiftContext)();
                s(null != $, "Step should be set");
                let eo = a.useRef(null),
                    [ec, ed] = (0, l.default)(!1, 500),
                    ep = null !== (n = null != N ? N : F) && void 0 !== n ? n : null,
                    em = null != ep && (!et || (0, C.SubscriptionTrials)[ep].skus.includes(Z)) ? ep : null,
                    ef = (0, c.usePremiumTrialOffer)(F),
                    eS = (0, o.usePremiumDiscountOffer)(),
                    eh = {
                        user_trial_offer_id: null == ef ? void 0 : ef.id
                    };
                a.useEffect(() => {
                    null != z && null != eo.current && eo.current.scrollIntoView({
                        behavior: "smooth"
                    })
                }, [z]);
                let eP = a.useCallback((e, t) => {
                        D(e), null != t && ea(t), g(P.Step.CONFIRM, {
                            fulfillment: {
                                subscription: e,
                                entitlements: t
                            }
                        })
                    }, [g, D, ea]),
                    eI = null != k ? H[k] : null,
                    ev = null != K && C.MULTI_MONTH_PLANS.has(K.id) && null != eI && !(0, u.isPaymentSourceEligibleForMultiMonthPlans)(eI) ? Error(_.default.Messages.BILLING_ERROR_INVALID_PLAN_FOR_PAYMENT_SOURCE) : null,
                    eE = a.useRef(null),
                    [ey, eT] = a.useState(null),
                    ex = !es && null != ef && null != Z && (0, C.SubscriptionTrials)[ef.trial_id].skus.includes(Z),
                    eC = null == eS ? void 0 : null === (t = eS.discount) || void 0 === t ? void 0 : t.plan_ids,
                    eb = !es && null != eS && null != eC && null != K && eC.includes(K.id),
                    e_ = es && (0, f.shouldShowCustomGiftExperience)(eu, !0, "PaymentModalReviewStep"),
                    eg = null == O && null == U && ei === b.PurchaseTypes.SUBSCRIPTION,
                    eN = (0, E.inOneStepSubscriptionCheckout)({
                        isTrial: ex,
                        isGift: es,
                        selectedSkuId: Z,
                        startedPaymentFlowWithPaymentSources: er.current
                    });
                return ei === b.PurchaseTypes.ONE_TIME ? r = (0, i.jsx)(y.default, {
                    hasLegalTermsFlash: ec,
                    legalTermsNodeRef: eE,
                    onPaymentSourceChange: e => J(null != e ? e.id : null),
                    handlePaymentSourceAdd: () => g(P.Step.ADD_PAYMENT_STEPS)
                }) : null == G || es ? (s(null != K, "Expected plan to be selected"), r = (0, i.jsx)(d.default, {
                    selectedPlanId: K.id,
                    paymentSources: H,
                    onPaymentSourceChange: e => J(null != e ? e.id : null),
                    priceOptions: V,
                    currencies: W,
                    onCurrencyChange: e => Q(e),
                    handlePaymentSourceAdd: () => g(P.Step.ADD_PAYMENT_STEPS),
                    setHasAcceptedTerms: en,
                    legalTermsNodeRef: eE,
                    hasLegalTermsFlash: ec,
                    trialId: em,
                    trialFooterMessageOverride: L,
                    reviewWarningMessage: A,
                    purchaseState: ee,
                    referralTrialOfferId: F,
                    isTrial: ex,
                    isDiscount: eb
                })) : (s(null != K, "Expected plan to be selected"), r = (0, i.jsx)(m.default, {
                    premiumSubscription: G,
                    paymentSources: H,
                    priceOptions: V,
                    onPaymentSourceChange: e => {
                        J(null != e ? e.id : null)
                    },
                    onPaymentSourceAdd: () => {
                        g(P.Step.ADD_PAYMENT_STEPS)
                    },
                    planId: K.id,
                    setHasAcceptedTerms: en,
                    legalTermsNodeRef: eE,
                    hasLegalTermsFlash: ec,
                    onInvoiceError: e => eT(e),
                    planGroup: j,
                    currencies: W,
                    onCurrencyChange: e => Q(e),
                    hasOpenInvoice: null != R,
                    purchaseState: ee
                })), (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(I.GiftNote, {
                        giftMessage: el
                    }), !e_ && (0, i.jsx)(T.default, {
                        isEligibleForTrial: ex
                    }), (0, i.jsxs)(x.PaymentPortalBody, {
                        children: [(0, i.jsx)(v.default, {}), r]
                    }), (0, i.jsx)(x.PaymentPortalFooter, {
                        children: (0, i.jsx)(p.default, {
                            premiumSubscription: null != G ? G : null,
                            setPurchaseState: X,
                            onBack: () => eN ? g(P.Step.SKU_SELECT) : g(P.Step.PLAN_SELECT),
                            onNext: eP,
                            onPurchaseError: e => q(e),
                            legalTermsNodeRef: eE,
                            flashLegalTerms: () => ed(!0),
                            invoiceError: ey,
                            planError: ev,
                            analyticsLocation: w,
                            baseAnalyticsData: M,
                            flowStartTime: B.startTime,
                            trialId: em,
                            planGroup: j,
                            purchaseTokenAuthState: Y,
                            openInvoiceId: R,
                            backButtonEligible: eN ? eg && et : et,
                            metadata: eh,
                            isTrial: ex,
                            disablePurchase: null != eI && ei === b.PurchaseTypes.SUBSCRIPTION && ex && !eI.canRedeemTrial()
                        })
                    })]
                })
            }
        },
        310093: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GiftNote: function() {
                    return c
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("812952"),
                r = n("978679"),
                s = n("659632"),
                l = n("635357"),
                u = n("782340"),
                o = n("588937");

            function c(e) {
                let {
                    giftMessage: t = u.default.Messages.PREMIUM_PAYMENT_IS_GIFT
                } = e, {
                    isGift: n,
                    giftRecipient: c
                } = (0, l.useGiftContext)();
                return !n || (0, s.shouldShowCustomGiftExperience)(c, !0, "GiftNote") ? null : (0, i.jsx)(a.default, {
                    className: o.paymentNote,
                    iconSize: a.default.Sizes.SMALL,
                    icon: r.default,
                    color: null == t ? a.default.Colors.PRIMARY : a.default.Colors.SECONDARY,
                    children: t
                })
            }
        },
        298392: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return w
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("627445"),
                r = n.n(a),
                s = n("976979"),
                l = n("65597"),
                u = n("77078"),
                o = n("703332"),
                c = n("812952"),
                d = n("740055"),
                p = n("545876"),
                m = n("84460"),
                f = n("883662"),
                S = n("623003"),
                h = n("617223"),
                P = n("102985"),
                I = n("160299"),
                v = n("622839"),
                E = n("167726"),
                y = n("953109"),
                T = n("315585"),
                x = n("659632"),
                C = n("153160"),
                b = n("635357"),
                _ = n("642906"),
                g = n("286350"),
                N = n("628135"),
                L = n("49111"),
                A = n("782340"),
                j = n("135878");

            function R(e) {
                let {
                    sku: t,
                    skuPricePreview: n
                } = e;
                r(null != n.amount, "SKU must have a price set.");
                let a = n.amount - n.tax;
                return !n.tax_inclusive && n.tax > 0 ? (0, i.jsxs)(f.PremiumInvoiceTable, {
                    className: j.invoice,
                    children: [(0, i.jsx)(f.PremiumInvoiceTableRow, {
                        label: t.name,
                        value: (0, C.formatPrice)(a, n.currency),
                        className: j.subscriptionCostRow
                    }), (0, i.jsx)(f.PremiumInvoiceTableRow, {
                        label: A.default.Messages.PURCHASE_REVIEW_TAX_LABEL,
                        value: (0, C.formatPrice)(n.tax, n.currency),
                        className: j.subscriptionCostRow
                    }), (0, i.jsx)(f.PremiumInvoiceTableDivider, {}), (0, i.jsx)(f.PremiumInvoiceTableTotalRow, {
                        label: A.default.Messages.BILLING_INVOICE_TOTAL.format(),
                        value: (0, C.formatPrice)(n.amount, n.currency),
                        className: j.subscriptionCostRow
                    })]
                }) : (0, i.jsx)(f.PremiumInvoiceTable, {
                    className: j.invoice,
                    children: (0, i.jsx)(f.PremiumInvoiceTableRow, {
                        label: t.name,
                        value: (0, C.formatPrice)(n.amount, n.currency),
                        className: j.subscriptionCostRow
                    })
                })
            }

            function M(e) {
                let {
                    application: t,
                    sku: n,
                    isEmbeddedIAP: a
                } = e;
                return !0 !== a ? null : (0, i.jsxs)("div", {
                    className: j.skuHeading,
                    children: [(0, i.jsx)(y.default, {
                        game: t
                    }), (0, i.jsx)(u.Heading, {
                        variant: "heading-lg/bold",
                        className: j.skuHeadingText,
                        children: n.name
                    })]
                })
            }

            function w(e) {
                let {
                    hasLegalTermsFlash: t,
                    legalTermsNodeRef: n,
                    onPaymentSourceChange: a,
                    handlePaymentSourceAdd: f
                } = e, {
                    application: y,
                    purchaseState: C,
                    paymentSources: w,
                    paymentSourceId: F,
                    setHasAcceptedTerms: O,
                    skusById: U,
                    skuPricePreviewsById: G,
                    selectedSkuId: D,
                    isEmbeddedIAP: B,
                    purchaseType: W
                } = (0, _.usePaymentContext)(), {
                    isGift: k,
                    giftRecipient: H
                } = (0, b.useGiftContext)(), V = k && (0, x.shouldShowCustomGiftExperience)(H, !0, "OneTimePurchaseReview");
                r(null != D, "Expected selectedSkuId");
                let z = U[D],
                    Y = G[D],
                    K = null != F ? F : v.NO_PAYMENT_SOURCE,
                    Z = null != Y ? Y[K] : null;
                r(null != z, "SKU must exist and be fetched."), r(null != y, "Application must exist.");
                let Q = (0, l.default)([m.default, E.default], () => E.default.inTestModeForApplication(y.id) || m.default.inDevModeForApplication(y.id), [y.id]),
                    J = (0, l.default)([P.default], () => P.default.enabled),
                    X = s.CountryCodesSets.EEA_COUNTRIES.has(I.default.ipCountryCodeWithFallback),
                    q = C === g.PurchaseState.PURCHASING || C === g.PurchaseState.COMPLETED,
                    $ = null != F ? w[F].type : null;
                return (0, i.jsxs)("div", {
                    className: j.stepBody,
                    children: [Q && (0, i.jsx)(c.default, {
                        icon: T.default,
                        iconSize: c.default.Sizes.SMALL,
                        color: c.default.Colors.WARNING,
                        className: j.errorBlock,
                        children: A.default.Messages.APPLICATION_STORE_PURCHASE_TEST_MODE
                    }, "TEST_MODE"), (0, i.jsx)(M, {
                        application: y,
                        sku: z,
                        isEmbeddedIAP: B
                    }), V && (0, i.jsx)(N.default, {
                        sku: z
                    }), null != H ? (0, i.jsx)(h.SendGiftToUser, {
                        giftRecipient: H
                    }) : null, (0, i.jsx)(u.FormTitle, {
                        tag: u.FormTitleTags.H5,
                        children: k ? A.default.Messages.PREMIUM_GIFTING_BUTTON : A.default.Messages.ONE_TIME_PURCHASE_REVIEW_STEP_PURCHASE_DETAILS_LABEL
                    }), null == Z ? (0, i.jsx)(u.Spinner, {
                        type: u.Spinner.Type.WANDERING_CUBES,
                        className: j.invoiceSpinner
                    }) : (0, i.jsx)(R, {
                        sku: z,
                        skuPricePreview: Z
                    }), (0, i.jsxs)("div", {
                        className: j.paymentSourceWrapper,
                        children: [(0, i.jsx)(u.FormTitle, {
                            tag: u.FormTitleTags.H5,
                            children: A.default.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_TITLE
                        }), (0, i.jsx)(d.default, {
                            paymentSources: Object.values(w),
                            selectedPaymentSourceId: F,
                            onChange: a,
                            onPaymentSourceAdd: f,
                            hidePersonalInformation: J
                        })]
                    }), (0, i.jsx)(S.default, {
                        isActive: t,
                        ref: n,
                        children: (0, i.jsx)(p.default, {
                            onChange: O,
                            forceShow: !0,
                            showWithdrawalWaiver: X,
                            disabled: q,
                            subscriptionPlan: null,
                            finePrintClassname: j.fineprint,
                            purchaseType: W,
                            isGift: k,
                            checkboxLabel: z.productLine === L.SKUProductLines.COLLECTIBLES ? A.default.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL_SIMPLE.format({
                                paidURL: L.MarketingURLs.PAID_TERMS
                            }) : void 0,
                            finePrint: (0, i.jsx)(o.default, {
                                paymentSourceType: $,
                                isEmbeddedIAP: B,
                                purchaseType: W,
                                productLine: z.productLine,
                                isGift: k
                            })
                        })
                    })]
                })
            }
        },
        628135: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return x
                }
            }), n("794252");
            var i = n("37983");
            n("884691");
            var a = n("506838"),
                r = n("265586"),
                s = n("65597"),
                l = n("77078"),
                u = n("606292"),
                o = n("688318"),
                c = n("426188"),
                d = n("210721"),
                p = n("65324"),
                m = n("845962"),
                f = n("635471"),
                S = n("50885"),
                h = n("635357"),
                P = n("782340"),
                I = n("433264"),
                v = n("93902");
            let E = S.default.getEnableHardwareAcceleration() ? l.AnimatedAvatar : l.Avatar;

            function y(e) {
                let {
                    avatarDecoration: t
                } = e, {
                    avatarDecorationSrc: n,
                    eventHandlers: a,
                    avatarPlaceholderSrc: r
                } = (0, o.default)({
                    avatarDecorationOverride: t,
                    size: (0, u.getDecorationSizeForAvatarSize)(l.AvatarSizes.SIZE_152)
                });
                return (0, i.jsx)("div", {
                    className: I.giftMainAnimationWrapper,
                    children: (0, i.jsx)(E, {
                        ...a,
                        avatarDecoration: n,
                        src: r,
                        className: I.avatar,
                        size: l.AvatarSizes.SIZE_152,
                        "aria-label": P.default.Messages.USER_SETTINGS_AVATAR
                    })
                })
            }

            function T(e) {
                let {
                    id: t
                } = e, n = (0, s.default)([m.default], () => {
                    var e;
                    return null === (e = m.default.getProfileEffectById(t)) || void 0 === e ? void 0 : e.config
                });
                return (0, i.jsxs)("div", {
                    className: I.profileEffectContainer,
                    children: [(0, i.jsx)("img", {
                        src: v,
                        alt: null == n ? void 0 : n.accessibilityLabel,
                        className: I.profileEffectBackground
                    }), (0, i.jsx)(f.default, {
                        profileEffectID: t
                    })]
                })
            }

            function x(e) {
                let {
                    sku: t
                } = e, {
                    selectedGiftStyle: n
                } = (0, h.useGiftContext)(), {
                    product: s
                } = (0, c.useFetchCollectiblesProduct)(null == t ? void 0 : t.id), l = null == s ? void 0 : s.items[0], u = (0, a.match)(l).with({
                    type: r.CollectiblesItemType.AVATAR_DECORATION
                }, e => (0, i.jsx)(y, {
                    avatarDecoration: e
                })).with({
                    type: r.CollectiblesItemType.PROFILE_EFFECT
                }, e => (0, i.jsx)(T, {
                    id: e.id
                })).otherwise(() => null);
                return null != n && null == u ? (0, i.jsx)("div", {
                    className: I.giftMainAnimationWrapper,
                    children: (0, i.jsx)(p.default, {
                        defaultAnimationState: d.AnimationState.LOOP,
                        giftStyle: n,
                        shouldAnimate: !0,
                        className: I.giftMainAnimation
                    })
                }) : u
            }
        },
        826795: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return F
                }
            }), n("222007");
            var i = n("37983"),
                a = n("884691"),
                r = n("627445"),
                s = n.n(r),
                l = n("976979"),
                u = n("446674"),
                o = n("77078"),
                c = n("335430"),
                d = n("703332"),
                p = n("740055"),
                m = n("545876"),
                f = n("812204"),
                S = n("685665"),
                h = n("635357"),
                P = n("642906"),
                I = n("286350"),
                v = n("176108"),
                E = n("102985"),
                y = n("160299"),
                T = n("10514"),
                x = n("719923"),
                C = n("380186"),
                b = n("809071"),
                _ = n("883662"),
                g = n("991329"),
                N = n("623003"),
                L = n("570727"),
                A = n("146163"),
                j = n("49111"),
                R = n("782340"),
                M = n("709626"),
                w = n("615689");

            function F(e) {
                var t;
                let n, {
                        premiumSubscription: r,
                        paymentSources: f,
                        priceOptions: S,
                        onPaymentSourceChange: b,
                        onPaymentSourceAdd: g,
                        planId: A,
                        setHasAcceptedTerms: M,
                        legalTermsNodeRef: F,
                        hasLegalTermsFlash: B,
                        onInvoiceError: W,
                        planGroup: k,
                        currencies: H,
                        onCurrencyChange: V,
                        hasOpenInvoice: z,
                        purchaseState: Y
                    } = e,
                    {
                        selectedSkuId: K,
                        defaultPlanId: Z,
                        isPremium: Q,
                        startedPaymentFlowWithPaymentSourcesRef: J
                    } = (0, P.usePaymentContext)(),
                    {
                        isGift: X
                    } = (0, h.useGiftContext)(),
                    q = S.paymentSourceId,
                    $ = (0, u.useStateFromStores)([T.default], () => T.default.get(A));
                s(null != $, "Missing newPlan");
                let ee = (0, u.useStateFromStores)([E.default], () => E.default.hidePersonalInformation);
                n = z ? R.default.Messages.BILLING_PURCHASE_DETAILS_HEADER : (0, x.isPremiumSubscriptionPlan)(A) ? (0, x.getBillingReviewSubheader)(r, $) : R.default.Messages.BILLING_SELECT_PLAN_GUILD_SUBSCRIPTION.format({
                    planName: $.name
                });
                let et = l.CountryCodesSets.EEA_COUNTRIES.has(y.default.ipCountryCodeWithFallback),
                    en = Y === I.PurchaseState.PURCHASING || Y === I.PurchaseState.COMPLETED,
                    ei = (0, v.inOneStepSubscriptionCheckout)({
                        isTrial: !1,
                        isGift: X,
                        selectedSkuId: K,
                        startedPaymentFlowWithPaymentSources: J.current
                    }),
                    ea = a.useMemo(() => (0, x.getPremiumPlanOptions)({
                        skuId: K,
                        isPremium: Q,
                        multiMonthPlans: [],
                        currentSubscription: r,
                        isGift: X,
                        isEligibleForTrial: !1,
                        defaultPlanId: Z,
                        defaultToMonthlyPlan: !1
                    }), [K, r, Z, Q, X]);
                return (0, i.jsxs)("div", {
                    className: w.stepBody,
                    children: [ei && (0, i.jsxs)("div", {
                        children: [(0, i.jsx)(_.PremiumInvoiceTableDivider, {
                            negativeMarginTop: !0
                        }), (0, i.jsx)(L.PremiumSwitchPlanSelectBody, {
                            planOptions: ea,
                            eligibleForMultiMonthPlans: !1,
                            selectedPlanId: A,
                            showTotal: !1
                        }), (0, i.jsx)(_.PremiumInvoiceTableDivider, {})]
                    }), (0, i.jsx)(o.FormTitle, {
                        tag: o.FormTitleTags.H5,
                        children: n
                    }), null != r ? z ? (0, i.jsx)(O, {
                        premiumSubscription: r,
                        onInvoiceError: W,
                        priceOptions: S,
                        preventFetch: !1
                    }) : (0, C.subscriptionCanSwitchImmediately)(r, A, k) ? (0, i.jsx)(U, {
                        premiumSubscription: r,
                        newPlan: $,
                        onInvoiceError: W,
                        planGroup: k,
                        priceOptions: S,
                        preventFetch: en
                    }) : (0, i.jsx)(D, {
                        premiumSubscription: r,
                        newPlan: $,
                        planGroup: k,
                        priceOptions: S,
                        preventFetch: en
                    }) : null, (0, i.jsxs)("div", {
                        className: w.paymentSourceWrapper,
                        children: [(0, i.jsx)(o.FormTitle, {
                            tag: o.FormTitleTags.H5,
                            children: R.default.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_TITLE
                        }), (0, i.jsx)(p.default, {
                            paymentSources: Object.values(f),
                            selectedPaymentSourceId: q,
                            onChange: b,
                            onPaymentSourceAdd: g,
                            hidePersonalInformation: ee,
                            disabled: en
                        })]
                    }), (0, i.jsxs)(c.CurrencyWrapper, {
                        currencies: H,
                        className: w.currencyWrapper,
                        children: [(0, i.jsx)(o.FormTitle, {
                            tag: o.FormTitleTags.H5,
                            children: R.default.Messages.PAYMENT_CURRENCY
                        }), (0, i.jsx)(c.default, {
                            selectedCurrency: S.currency,
                            currencies: H,
                            onChange: V,
                            disabled: en
                        })]
                    }), (0, i.jsx)(N.default, {
                        isActive: B,
                        ref: F,
                        children: null != r && (0, C.subscriptionCanSwitchImmediately)(r, A, k) ? (0, i.jsx)(G, {
                            premiumSubscription: r,
                            newPlan: $,
                            onInvoiceError: W,
                            planGroup: k,
                            priceOptions: S,
                            preventFetch: en,
                            disabled: en,
                            isEEA: et,
                            paymentSources: f,
                            setHasAcceptedTerms: M
                        }) : (0, i.jsx)(m.default, {
                            onChange: M,
                            finePrint: (0, i.jsx)(d.default, {
                                subscriptionPlan: $,
                                paymentSourceType: null === (t = f[null != q ? q : ""]) || void 0 === t ? void 0 : t.type,
                                basePrice: (0, x.getPrice)($.id, !1, X, S),
                                currentSubscription: r,
                                planGroup: k
                            }),
                            forceShow: !0,
                            showPricingLink: $.currency !== j.CurrencyCodes.USD,
                            showWithdrawalWaiver: et,
                            disabled: en,
                            subscriptionPlan: $,
                            currentSubscription: r,
                            planGroup: k
                        })
                    })]
                })
            }

            function O(e) {
                let {
                    premiumSubscription: t,
                    onInvoiceError: n,
                    priceOptions: r,
                    preventFetch: s
                } = e, [l, u] = (0, b.useGetSubscriptionInvoice)({
                    subscriptionId: t.id,
                    preventFetch: s
                });
                a.useEffect(() => {
                    n(u)
                }, [n, u]);
                let c = (0, x.isPrepaidPaymentSource)(r.paymentSourceId);
                return null != l ? (0, i.jsxs)(_.PremiumInvoiceTable, {
                    className: M.invoice,
                    children: [(0, i.jsx)(A.PremiumSubscriptionCurrentInvoiceRows, {
                        invoice: l,
                        isPrepaidPaymentSource: c
                    }), (0, i.jsx)(A.SubscriptionInvoiceFooter, {
                        premiumSubscription: t,
                        renewalInvoice: l,
                        isUpdate: !0,
                        isPrepaidPaymentSource: c
                    })]
                }) : (0, i.jsx)(o.Spinner, {})
            }

            function U(e) {
                let {
                    premiumSubscription: t,
                    newPlan: n,
                    onInvoiceError: r,
                    planGroup: s,
                    priceOptions: l,
                    preventFetch: u
                } = e, {
                    selectedSkuId: c,
                    startedPaymentFlowWithPaymentSourcesRef: d
                } = (0, P.usePaymentContext)(), {
                    isGift: p
                } = (0, h.useGiftContext)(), {
                    analyticsLocations: m
                } = (0, S.default)(), I = (0, x.getItemsWithUpsertedPlanIdForGroup)(t, n.id, 1, new Set(s)), [E, y] = (0, b.useSubscriptionInvoicePreview)({
                    subscriptionId: t.id,
                    items: I,
                    renewal: !1,
                    applyEntitlements: !0,
                    paymentSourceId: l.paymentSourceId,
                    currency: l.currency,
                    preventFetch: u,
                    analyticsLocations: m,
                    analyticsLocation: f.default.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW
                }), [T, C] = (0, b.useSubscriptionInvoicePreview)({
                    subscriptionId: t.id,
                    items: I,
                    renewal: !0,
                    paymentSourceId: l.paymentSourceId,
                    currency: l.currency,
                    preventFetch: u,
                    analyticsLocations: m,
                    analyticsLocation: f.default.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW
                }), g = null != y ? y : C;
                if (a.useEffect(() => {
                        r(g)
                    }, [r, g]), null != g) return (0, i.jsx)(o.FormErrorBlock, {
                    children: g.message
                });
                let N = (0, v.inOneStepSubscriptionCheckout)({
                        isTrial: !1,
                        isGift: p,
                        selectedSkuId: c,
                        startedPaymentFlowWithPaymentSources: d.current
                    }),
                    L = (0, v.planSwitchLoadingShowSpinner)(N, E, n);
                if (null == E || null == T || L) return (0, i.jsx)(o.Spinner, {
                    className: w.spinner
                });
                let j = (0, x.isPrepaidPaymentSource)(l.paymentSourceId);
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(A.SubscriptionPeriodResetNotice, {
                        proratedInvoice: E,
                        renewalInvoice: T
                    }), (0, i.jsxs)(_.PremiumInvoiceTable, {
                        className: w.invoice,
                        children: [(0, i.jsx)(_.PremiumInvoiceTableHeader, {
                            children: R.default.Messages.BILLING_SWITCH_PLAN_PURCHASE_DETAILS
                        }), (0, i.jsx)(A.PremiumSubscriptionChangePlanInvoiceRows, {
                            invoice: E,
                            newPlan: n,
                            isPrepaidPaymentSource: j
                        }), (0, i.jsx)(A.SubscriptionInvoiceFooter, {
                            premiumSubscription: t,
                            proratedInvoice: E,
                            renewalInvoice: T,
                            isUpdate: !0,
                            isPrepaidPaymentSource: j
                        })]
                    })]
                })
            }

            function G(e) {
                var t, n;
                let r, {
                        premiumSubscription: s,
                        newPlan: l,
                        onInvoiceError: u,
                        planGroup: c,
                        priceOptions: p,
                        preventFetch: h,
                        disabled: P,
                        isEEA: I,
                        paymentSources: v,
                        setHasAcceptedTerms: E
                    } = e,
                    {
                        analyticsLocations: y
                    } = (0, S.default)(),
                    T = (0, x.getItemsWithUpsertedPlanIdForGroup)(s, l.id, 1, new Set(c)),
                    [C, _] = (0, b.useSubscriptionInvoicePreview)({
                        subscriptionId: s.id,
                        items: T,
                        renewal: !0,
                        paymentSourceId: p.paymentSourceId,
                        currency: p.currency,
                        preventFetch: h,
                        analyticsLocations: y,
                        analyticsLocation: f.default.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW
                    });
                return (a.useEffect(() => {
                    u(_)
                }, [u, _]), null != _) ? (0, i.jsx)(o.FormErrorBlock, {
                    children: _.message
                }) : (null != C && (r = {
                    amount: C.total,
                    currency: C.currency,
                    tax: C.tax,
                    taxInclusive: C.taxInclusive
                }), null == r) ? null : (0, i.jsx)(m.default, {
                    onChange: E,
                    finePrint: (0, i.jsx)(d.default, {
                        subscriptionPlan: l,
                        paymentSourceType: null === (t = v[null !== (n = p.paymentSourceId) && void 0 !== n ? n : ""]) || void 0 === t ? void 0 : t.type,
                        basePrice: r,
                        currentSubscription: s,
                        planGroup: c
                    }),
                    forceShow: !0,
                    showPricingLink: l.currency !== j.CurrencyCodes.USD,
                    showWithdrawalWaiver: I,
                    disabled: P,
                    subscriptionPlan: l,
                    currentSubscription: s,
                    planGroup: c
                })
            }

            function D(e) {
                let t, {
                        premiumSubscription: n,
                        newPlan: a,
                        planGroup: r,
                        priceOptions: s,
                        preventFetch: l
                    } = e,
                    {
                        analyticsLocations: u
                    } = (0, S.default)(),
                    [c, d] = (0, b.useSubscriptionInvoicePreview)({
                        subscriptionId: n.id,
                        items: (0, x.getItemsWithUpsertedPlanIdForGroup)(n, a.id, 1, new Set(r)),
                        renewal: !0,
                        applyEntitlements: !1,
                        paymentSourceId: s.paymentSourceId,
                        currency: s.currency,
                        preventFetch: l,
                        analyticsLocations: u,
                        analyticsLocation: "billing_switch_plan_renewal_mutation_renewal_invoice_preview"
                    });
                if (null != d) return (0, i.jsx)(o.FormErrorBlock, {
                    children: d.message
                });
                if (null == c) return (0, i.jsx)("div", {
                    children: (0, i.jsx)(o.Spinner, {})
                });
                t = n.type === j.SubscriptionTypes.PREMIUM ? (0, x.getDisplayName)(a.id) : a.name;
                let p = (0, x.isPrepaidPaymentSource)(s.paymentSourceId);
                return (0, i.jsxs)("div", {
                    className: w.bodyText,
                    children: [(0, i.jsx)("div", {
                        className: M.renewalInvoiceDate,
                        children: R.default.Messages.BILLING_SWITCH_PLAN_CHANGE_DATE.format({
                            renewalDate: c.subscriptionPeriodStart
                        })
                    }), (0, i.jsxs)(_.PremiumInvoiceTable, {
                        className: w.invoice,
                        children: [(0, i.jsx)(_.PremiumInvoiceTableHeader, {
                            children: R.default.Messages.PREMIUM_SUBSCRIPTION_UPDATES
                        }), (0, i.jsx)(_.PremiumInvoiceTableRow, {
                            label: t,
                            value: (0, x.getFormattedRateForPlan)(a, s, !0)
                        }), (0, i.jsx)(g.default, {
                            invoice: c
                        }), (0, i.jsx)(_.PremiumInvoiceTableDivider, {}), (0, i.jsx)(A.SubscriptionInvoiceFooter, {
                            premiumSubscription: n,
                            renewalInvoice: c,
                            isUpdate: !0,
                            isPrepaidPaymentSource: p
                        })]
                    })]
                })
            }
        },
        273108: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            }), n("222007");
            var i = n("37983"),
                a = n("884691"),
                r = n("414456"),
                s = n.n(r),
                l = n("446674"),
                u = n("206230"),
                o = n("471671"),
                c = n("629758");
            class d extends a.PureComponent {
                async componentDidMount() {
                    let {
                        importData: e,
                        nextScene: t,
                        pauseWhileUnfocused: i,
                        pause: a,
                        isWindowFocused: r,
                        useReducedMotion: s
                    } = this.props, [l, {
                        default: u
                    }] = await Promise.all([e(), n.el("230265").then(n.t.bind(n, "230265", 23))]);
                    null != this.animationRef && (this.animation = u.loadAnimation({
                        container: this.animationRef,
                        renderer: "svg",
                        loop: !0,
                        autoplay: !0,
                        animationData: l
                    }), this.animation.addEventListener("loopComplete", this.handleLoopComplete), this.animation.addEventListener("complete", this.handleComplete), this.playScene(t), (i && !r || a || s) && this.animation.pause())
                }
                componentWillUnmount() {
                    this.isUnmounted = !0, null != this.animation && (this.animation.destroy(), this.animation = void 0)
                }
                componentDidUpdate(e) {
                    var t, n, i;
                    let {
                        nextScene: a,
                        pauseWhileUnfocused: r,
                        pause: s,
                        isWindowFocused: l,
                        useReducedMotion: u
                    } = this.props;
                    a !== this.currentScene && this.shouldForcePlayAfter() && !s && this.playScene(a), null != this.animation && (r && !e.isWindowFocused && l && !u && !0 !== s ? this.animation.play() : (u || r && e.isWindowFocused && !l) && this.animation.pause()), !e.pause && s ? null === (t = this.animation) || void 0 === t || t.pause() : e.pause && !s && !u && (null === (n = this.animation) || void 0 === n || n.play()), e.nextScene !== a && s && (this.playScene(a), null === (i = this.animation) || void 0 === i || i.pause())
                }
                shouldForcePlayAfter() {
                    let {
                        sceneSegments: e
                    } = this.props, t = e[this.currentScene];
                    return !0 === t.shouldForcePlayAfter
                }
                playScene(e) {
                    if (this.isUnmounted) return;
                    let {
                        onScenePlay: t,
                        sceneSegments: n,
                        useReducedMotion: i
                    } = this.props, a = n[e], r = n[this.currentScene];
                    if (null != this.animation && (e === this.currentScene || a.BEG !== r.BEG || a.END !== r.END) && this.animation.playSegments([a.BEG, a.END], !0), this.currentScene = e, null != t && t(this.currentScene), i) {
                        var s;
                        null === (s = this.animation) || void 0 === s || s.pause()
                    }
                }
                render() {
                    return (0, i.jsx)("div", {
                        ref: this.handleSetRef,
                        className: s(this.props.className, c.wrapper)
                    })
                }
                constructor(...e) {
                    super(...e), this.animationRef = null, this.currentScene = this.props.nextScene, this.isUnmounted = !1, this.handleLoopComplete = () => {
                        let {
                            onSceneComplete: e,
                            nextScene: t
                        } = this.props;
                        null != e && e(this.currentScene), this.playScene(t)
                    }, this.handleComplete = () => {
                        let {
                            onSceneComplete: e
                        } = this.props;
                        null != e && e(this.currentScene)
                    }, this.handleSetRef = e => {
                        this.animationRef = e;
                        let {
                            animationRef: t
                        } = this.props;
                        null != t && t(e)
                    }
                }
            }
            d.defaultProps = {
                pauseWhileUnfocused: !0,
                pause: !1
            };
            var p = e => {
                let {
                    componentRef: t,
                    ...n
                } = e, a = (0, l.useStateFromStores)([o.default], () => o.default.isFocused()), r = (0, l.useStateFromStores)([u.default], () => u.default.useReducedMotion);
                return (0, i.jsx)(d, {
                    ...n,
                    isWindowFocused: a,
                    useReducedMotion: r,
                    ref: t
                })
            }
        },
        315585: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("75196");

            function r(e) {
                let {
                    width: t = 14,
                    height: n = 14,
                    color: r = "currentColor",
                    foreground: s,
                    ...l
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, a.default)(l),
                    width: t,
                    height: n,
                    viewBox: "0 0 14 14",
                    children: (0, i.jsx)("path", {
                        className: s,
                        fill: r,
                        d: "M12,0 C12.8284271,0 14,1.17157288 14,2 L14,12 C14,12.8284271 12.8284271,14 12,14 L2,14 C1.17157288,14 0,12.8284271 0,12 L0,2 C0,1.17157288 1.17157288,0 2,0 L12,0 Z M8,3 L6,3 L6,8 L8,8 L8,3 Z M8,11 L8,9 L6,9 L6,11 L8,11 Z"
                    })
                })
            }
        },
        181108: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            }), n("222007");
            var i = n("37983"),
                a = n("884691"),
                r = n("516555");
            let s = [n("315147")],
                l = ["#FFFFFF"],
                u = 1e3 / 60,
                o = {
                    velocity: {
                        type: "static-random",
                        minValue: {
                            x: 0,
                            y: 1
                        },
                        maxValue: {
                            x: 3,
                            y: 3
                        }
                    },
                    rotation: {
                        type: "linear-random",
                        minValue: {
                            x: 0,
                            y: 0,
                            z: 0
                        },
                        maxValue: {
                            x: 0,
                            y: 0,
                            z: 360
                        },
                        minAddValue: {
                            x: 0,
                            y: 0,
                            z: -5
                        },
                        maxAddValue: {
                            x: 0,
                            y: 0,
                            z: 5
                        }
                    },
                    size: {
                        type: "static-random",
                        minValue: 2,
                        maxValue: 6
                    },
                    dragCoefficient: {
                        type: "static",
                        value: {
                            x: .05,
                            y: .05
                        }
                    },
                    opacity: {
                        type: "static",
                        value: .3
                    }
                };

            function c(e) {
                let {
                    className: t,
                    firing: n = !0,
                    wind: c = 2
                } = e, [d, p] = a.useState(null), [m, f] = a.useState(null), S = (0, r.useConfettiCannon)(m, d), h = a.useMemo(() => new r.Environment({
                    wind: c
                }), [c]), P = a.useCallback(() => {
                    let e = null == m ? void 0 : m.getCanvas();
                    if (null == e) return;
                    let t = e.getBoundingClientRect();
                    S.createConfetti({
                        ...o,
                        position: {
                            type: "static-random",
                            minValue: {
                                x: -t.width / 2,
                                y: -6
                            },
                            maxValue: {
                                x: t.width,
                                y: -6
                            }
                        }
                    })
                }, [S, m]);
                return a.useEffect(() => {
                    let e = n ? setInterval(P, u) : null;
                    return () => clearInterval(e)
                }, [n, P]), (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(r.ConfettiCanvas, {
                        ref: f,
                        className: t,
                        environment: h
                    }), (0, i.jsx)(r.SpriteCanvas, {
                        ref: p,
                        colors: l,
                        sprites: s,
                        spriteWidth: 6,
                        spriteHeight: 6
                    })]
                })
            }
        }
    }
]);