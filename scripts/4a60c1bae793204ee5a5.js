(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["71518"], {
        315147: function(e, t, n) {
            "use strict";
            e.exports = n.p + "3808a69f670fa9a67284.svg"
        },
        99836: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PaymentModalReviewStep: function() {
                    return _
                }
            });
            var i = n("37983"),
                a = n("884691"),
                s = n("627445"),
                r = n.n(s),
                l = n("612039"),
                u = n("916187"),
                o = n("154889"),
                c = n("917247"),
                d = n("527866"),
                p = n("451516"),
                m = n("826795"),
                S = n("642906"),
                h = n("85336"),
                f = n("310093"),
                P = n("367767"),
                I = n("176108"),
                y = n("298392"),
                E = n("153727"),
                v = n("650484"),
                T = n("646718"),
                x = n("843455"),
                C = n("782340");

            function _(e) {
                var t, n;
                let s, {
                        handleStepChange: _,
                        trialId: b,
                        trialFooterMessageOverride: L,
                        reviewWarningMessage: N,
                        planGroup: g,
                        openInvoiceId: A,
                        analyticsData: j,
                        analyticsLocation: R,
                        giftMessage: M,
                        customGiftMessage: w,
                        referralTrialOfferId: F,
                        initialPlanId: O,
                        subscriptionTier: U
                    } = e,
                    {
                        activeSubscription: D,
                        setUpdatedSubscription: G,
                        contextMetadata: W,
                        currencies: B,
                        isGift: k,
                        paymentSourceId: H,
                        paymentSources: V,
                        priceOptions: Y,
                        purchaseError: z,
                        purchaseTokenAuthState: K,
                        selectedPlan: Z,
                        selectedSkuId: Q,
                        setCurrency: J,
                        setPaymentSourceId: X,
                        setPurchaseState: q,
                        setPurchaseError: $,
                        step: ee,
                        purchaseState: et,
                        isPremium: en,
                        selectedGiftStyle: ei,
                        setHasAcceptedTerms: ea,
                        purchaseType: es,
                        setEntitlementsGranted: er,
                        startedPaymentFlowWithPaymentSourcesRef: el
                    } = (0, S.usePaymentContext)();
                r(null != ee, "Step should be set");
                let eu = a.useRef(null),
                    [eo, ec] = (0, l.default)(!1, 500),
                    ed = null !== (n = null != b ? b : F) && void 0 !== n ? n : null,
                    ep = null != ed && (!en || (0, T.SubscriptionTrials)[ed].skus.includes(Q)) ? ed : null,
                    em = (0, c.usePremiumTrialOffer)(F),
                    eS = (0, o.usePremiumDiscountOffer)(),
                    eh = {
                        user_trial_offer_id: null == em ? void 0 : em.id
                    };
                a.useEffect(() => {
                    null != z && null != eu.current && eu.current.scrollIntoView({
                        behavior: "smooth"
                    })
                }, [z]);
                let ef = a.useCallback((e, t) => {
                        G(e), null != t && er(t), _(h.Step.CONFIRM, {
                            fulfillment: {
                                subscription: e,
                                entitlements: t
                            }
                        })
                    }, [_, G, er]),
                    eP = null != H ? V[H] : null,
                    eI = null != Z && T.MULTI_MONTH_PLANS.has(Z.id) && null != eP && !(0, u.isPaymentSourceEligibleForMultiMonthPlans)(eP) ? Error(C.default.Messages.BILLING_ERROR_INVALID_PLAN_FOR_PAYMENT_SOURCE) : null,
                    ey = a.useRef(null),
                    [eE, ev] = a.useState(null),
                    eT = !k && null != em && null != Q && (0, T.SubscriptionTrials)[em.trial_id].skus.includes(Q),
                    ex = null == eS ? void 0 : null === (t = eS.discount) || void 0 === t ? void 0 : t.plan_ids,
                    eC = !k && null != eS && null != ex && null != Z && ex.includes(Z.id),
                    e_ = null == O && null == U && es === x.PurchaseTypes.SUBSCRIPTION,
                    eb = (0, I.inOneStepSubscriptionCheckout)({
                        isTrial: eT,
                        isGift: k,
                        selectedSkuId: Q,
                        startedPaymentFlowWithPaymentSources: el.current
                    });
                return es === x.PurchaseTypes.ONE_TIME ? s = (0, i.jsx)(y.default, {
                    hasLegalTermsFlash: eo,
                    legalTermsNodeRef: ey,
                    onPaymentSourceChange: e => X(null != e ? e.id : null),
                    handlePaymentSourceAdd: () => _(h.Step.ADD_PAYMENT_STEPS)
                }) : null == D || k ? (r(null != Z, "Expected plan to be selected"), s = (0, i.jsx)(d.default, {
                    selectedPlanId: Z.id,
                    isGift: k,
                    paymentSources: V,
                    onPaymentSourceChange: e => X(null != e ? e.id : null),
                    priceOptions: Y,
                    currencies: B,
                    onCurrencyChange: e => J(e),
                    handlePaymentSourceAdd: () => _(h.Step.ADD_PAYMENT_STEPS),
                    setHasAcceptedTerms: ea,
                    legalTermsNodeRef: ey,
                    hasLegalTermsFlash: eo,
                    trialId: ep,
                    trialFooterMessageOverride: L,
                    reviewWarningMessage: N,
                    purchaseState: et,
                    referralTrialOfferId: F,
                    isTrial: eT,
                    isDiscount: eC
                })) : (r(null != Z, "Expected plan to be selected"), s = (0, i.jsx)(m.default, {
                    premiumSubscription: D,
                    paymentSources: V,
                    priceOptions: Y,
                    onPaymentSourceChange: e => {
                        X(null != e ? e.id : null)
                    },
                    onPaymentSourceAdd: () => {
                        _(h.Step.ADD_PAYMENT_STEPS)
                    },
                    planId: Z.id,
                    setHasAcceptedTerms: ea,
                    legalTermsNodeRef: ey,
                    hasLegalTermsFlash: eo,
                    onInvoiceError: e => ev(e),
                    planGroup: g,
                    currencies: B,
                    onCurrencyChange: e => J(e),
                    hasOpenInvoice: null != A,
                    purchaseState: et
                })), (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(f.GiftNote, {
                        giftMessage: M
                    }), (0, i.jsx)(E.default, {
                        isEligibleForTrial: eT
                    }), (0, i.jsxs)(v.PaymentPortalBody, {
                        children: [(0, i.jsx)(P.default, {}), s]
                    }), (0, i.jsx)(v.PaymentPortalFooter, {
                        children: (0, i.jsx)(p.default, {
                            premiumSubscription: null != D ? D : null,
                            setPurchaseState: q,
                            onBack: () => eb ? _(h.Step.SKU_SELECT) : _(h.Step.PLAN_SELECT),
                            onNext: ef,
                            onPurchaseError: e => $(e),
                            legalTermsNodeRef: ey,
                            flashLegalTerms: () => ec(!0),
                            invoiceError: eE,
                            planError: eI,
                            analyticsLocation: R,
                            baseAnalyticsData: j,
                            flowStartTime: W.startTime,
                            isGift: k,
                            giftStyle: ei,
                            customGiftMessage: w,
                            trialId: ep,
                            planGroup: g,
                            purchaseTokenAuthState: K,
                            openInvoiceId: A,
                            backButtonEligible: eb ? e_ && en : en,
                            metadata: eh,
                            isTrial: eT,
                            disablePurchase: null != eP && es === x.PurchaseTypes.SUBSCRIPTION && eT && x.IRREDEEMABLE_PAYMENT_SOURCES.has(eP.type)
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
                s = n("978679"),
                r = n("659632"),
                l = n("642906"),
                u = n("782340"),
                o = n("588937");

            function c(e) {
                let {
                    giftMessage: t = u.default.Messages.PREMIUM_PAYMENT_IS_GIFT
                } = e, {
                    isGift: n,
                    giftRecipient: c
                } = (0, l.usePaymentContext)();
                return !1 === n || (0, r.isCustomGiftEnabled)(c) ? null : (0, i.jsx)(a.default, {
                    className: o.paymentNote,
                    iconSize: a.default.Sizes.SMALL,
                    icon: s.default,
                    color: null == t ? a.default.Colors.PRIMARY : a.default.Colors.SECONDARY,
                    children: t
                })
            }
        },
        298392: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return A
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("627445"),
                s = n.n(a),
                r = n("976979"),
                l = n("65597"),
                u = n("77078"),
                o = n("703332"),
                c = n("812952"),
                d = n("740055"),
                p = n("545876"),
                m = n("84460"),
                S = n("883662"),
                h = n("623003"),
                f = n("102985"),
                P = n("160299"),
                I = n("622839"),
                y = n("167726"),
                E = n("953109"),
                v = n("315585"),
                T = n("153160"),
                x = n("642906"),
                C = n("286350"),
                _ = n("49111"),
                b = n("782340"),
                L = n("135878");

            function N(e) {
                let {
                    sku: t,
                    skuPricePreview: n
                } = e;
                s(null != n.amount, "SKU must have a price set.");
                let a = n.amount - n.tax;
                return !n.tax_inclusive && n.tax > 0 ? (0, i.jsxs)(S.PremiumInvoiceTable, {
                    className: L.invoice,
                    children: [(0, i.jsx)(S.PremiumInvoiceTableRow, {
                        label: t.name,
                        value: (0, T.formatPrice)(a, n.currency),
                        className: L.subscriptionCostRow
                    }), (0, i.jsx)(S.PremiumInvoiceTableRow, {
                        label: b.default.Messages.PURCHASE_REVIEW_TAX_LABEL,
                        value: (0, T.formatPrice)(n.tax, n.currency),
                        className: L.subscriptionCostRow
                    }), (0, i.jsx)(S.PremiumInvoiceTableDivider, {}), (0, i.jsx)(S.PremiumInvoiceTableTotalRow, {
                        label: b.default.Messages.BILLING_INVOICE_TOTAL.format(),
                        value: (0, T.formatPrice)(n.amount, n.currency),
                        className: L.subscriptionCostRow
                    })]
                }) : (0, i.jsx)(S.PremiumInvoiceTable, {
                    className: L.invoice,
                    children: (0, i.jsx)(S.PremiumInvoiceTableRow, {
                        label: t.name,
                        value: (0, T.formatPrice)(n.amount, n.currency),
                        className: L.subscriptionCostRow
                    })
                })
            }

            function g(e) {
                let {
                    application: t,
                    sku: n,
                    isEmbeddedIAP: a
                } = e;
                return !0 !== a ? null : (0, i.jsxs)("div", {
                    className: L.skuHeading,
                    children: [(0, i.jsx)(E.default, {
                        game: t
                    }), (0, i.jsx)(u.Heading, {
                        variant: "heading-lg/bold",
                        className: L.skuHeadingText,
                        children: n.name
                    })]
                })
            }

            function A(e) {
                let {
                    hasLegalTermsFlash: t,
                    legalTermsNodeRef: n,
                    onPaymentSourceChange: a,
                    handlePaymentSourceAdd: S
                } = e, {
                    application: E,
                    purchaseState: T,
                    paymentSources: A,
                    paymentSourceId: j,
                    setHasAcceptedTerms: R,
                    skusById: M,
                    skuPricePreviewsById: w,
                    selectedSkuId: F,
                    isEmbeddedIAP: O,
                    purchaseType: U
                } = (0, x.usePaymentContext)();
                s(null != F, "Expected selectedSkuId");
                let D = M[F],
                    G = w[F],
                    W = null != j ? j : I.NO_PAYMENT_SOURCE,
                    B = null != G ? G[W] : null;
                s(null != D, "SKU must exist and be fetched."), s(null != E, "Application must exist.");
                let k = (0, l.default)([m.default, y.default], () => y.default.inTestModeForApplication(E.id) || m.default.inDevModeForApplication(E.id), [E.id]),
                    H = (0, l.default)([f.default], () => f.default.enabled),
                    V = r.CountryCodesSets.EEA_COUNTRIES.has(P.default.ipCountryCodeWithFallback),
                    Y = T === C.PurchaseState.PURCHASING || T === C.PurchaseState.COMPLETED,
                    z = null != j ? A[j].type : null;
                return (0, i.jsxs)("div", {
                    className: L.stepBody,
                    children: [k && (0, i.jsx)(c.default, {
                        icon: v.default,
                        iconSize: c.default.Sizes.SMALL,
                        color: c.default.Colors.WARNING,
                        className: L.errorBlock,
                        children: b.default.Messages.APPLICATION_STORE_PURCHASE_TEST_MODE
                    }, "TEST_MODE"), (0, i.jsx)(g, {
                        application: E,
                        sku: D,
                        isEmbeddedIAP: O
                    }), (0, i.jsx)(u.FormTitle, {
                        tag: u.FormTitleTags.H5,
                        children: b.default.Messages.ONE_TIME_PURCHASE_REVIEW_STEP_PURCHASE_DETAILS_LABEL
                    }), null == B ? (0, i.jsx)(u.Spinner, {
                        type: u.Spinner.Type.WANDERING_CUBES,
                        className: L.invoiceSpinner
                    }) : (0, i.jsx)(N, {
                        sku: D,
                        skuPricePreview: B
                    }), (0, i.jsxs)("div", {
                        className: L.paymentSourceWrapper,
                        children: [(0, i.jsx)(u.FormTitle, {
                            tag: u.FormTitleTags.H5,
                            children: b.default.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_TITLE
                        }), (0, i.jsx)(d.default, {
                            paymentSources: Object.values(A),
                            selectedPaymentSourceId: j,
                            onChange: a,
                            onPaymentSourceAdd: S,
                            hidePersonalInformation: H
                        })]
                    }), (0, i.jsx)(h.default, {
                        isActive: t,
                        ref: n,
                        children: (0, i.jsx)(p.default, {
                            onChange: R,
                            forceShow: !0,
                            showWithdrawalWaiver: V,
                            disabled: Y,
                            subscriptionPlan: null,
                            finePrintClassname: L.fineprint,
                            purchaseType: U,
                            checkboxLabel: D.productLine === _.SKUProductLines.COLLECTIBLES ? b.default.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL_SIMPLE.format({
                                paidURL: _.MarketingURLs.PAID_TERMS
                            }) : void 0,
                            finePrint: (0, i.jsx)(o.default, {
                                paymentSourceType: z,
                                isEmbeddedIAP: O,
                                purchaseType: U,
                                productLine: D.productLine
                            })
                        })
                    })]
                })
            }
        },
        826795: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return w
                }
            });
            var i = n("37983"),
                a = n("884691"),
                s = n("627445"),
                r = n.n(s),
                l = n("976979"),
                u = n("446674"),
                o = n("77078"),
                c = n("335430"),
                d = n("703332"),
                p = n("740055"),
                m = n("545876"),
                S = n("812204"),
                h = n("685665"),
                f = n("642906"),
                P = n("286350"),
                I = n("176108"),
                y = n("102985"),
                E = n("160299"),
                v = n("10514"),
                T = n("719923"),
                x = n("380186"),
                C = n("809071"),
                _ = n("883662"),
                b = n("991329"),
                L = n("623003"),
                N = n("570727"),
                g = n("146163"),
                A = n("49111"),
                j = n("782340"),
                R = n("709626"),
                M = n("615689");

            function w(e) {
                var t;
                let n, {
                        premiumSubscription: s,
                        paymentSources: S,
                        priceOptions: h,
                        onPaymentSourceChange: C,
                        onPaymentSourceAdd: b,
                        planId: g,
                        setHasAcceptedTerms: R,
                        legalTermsNodeRef: w,
                        hasLegalTermsFlash: G,
                        onInvoiceError: W,
                        planGroup: B,
                        currencies: k,
                        onCurrencyChange: H,
                        hasOpenInvoice: V,
                        purchaseState: Y
                    } = e,
                    {
                        selectedSkuId: z,
                        defaultPlanId: K,
                        selectedGiftStyle: Z,
                        setSelectedGiftStyle: Q,
                        isGift: J,
                        isPremium: X,
                        startedPaymentFlowWithPaymentSourcesRef: q
                    } = (0, f.usePaymentContext)(),
                    $ = h.paymentSourceId,
                    ee = (0, u.useStateFromStores)([v.default], () => v.default.get(g));
                r(null != ee, "Missing newPlan");
                let et = (0, u.useStateFromStores)([y.default], () => y.default.hidePersonalInformation);
                n = V ? j.default.Messages.BILLING_PURCHASE_DETAILS_HEADER : (0, T.isPremiumSubscriptionPlan)(g) ? (0, T.getBillingReviewSubheader)(s, ee) : j.default.Messages.BILLING_SELECT_PLAN_GUILD_SUBSCRIPTION.format({
                    planName: ee.name
                });
                let en = l.CountryCodesSets.EEA_COUNTRIES.has(E.default.ipCountryCodeWithFallback),
                    ei = Y === P.PurchaseState.PURCHASING || Y === P.PurchaseState.COMPLETED,
                    ea = (0, I.inOneStepSubscriptionCheckout)({
                        isTrial: !1,
                        isGift: J,
                        selectedSkuId: z,
                        startedPaymentFlowWithPaymentSources: q.current
                    }),
                    es = a.useMemo(() => (0, T.getPremiumPlanOptions)({
                        skuId: z,
                        isPremium: X,
                        multiMonthPlans: [],
                        currentSubscription: s,
                        isGift: J,
                        isEligibleForTrial: !1,
                        defaultPlanId: K,
                        defaultToMonthlyPlan: !1
                    }), [z, s, K, X, J]);
                return (0, i.jsxs)("div", {
                    className: M.stepBody,
                    children: [ea && (0, i.jsxs)("div", {
                        children: [(0, i.jsx)(_.PremiumInvoiceTableDivider, {
                            negativeMarginTop: !0
                        }), (0, i.jsx)(N.PremiumSwitchPlanSelectBody, {
                            isGift: J,
                            selectedGiftStyle: Z,
                            setSelectedGiftStyle: Q,
                            planOptions: es,
                            eligibleForMultiMonthPlans: !1,
                            selectedPlanId: g,
                            showTotal: !1
                        }), (0, i.jsx)(_.PremiumInvoiceTableDivider, {})]
                    }), (0, i.jsx)(o.FormTitle, {
                        tag: o.FormTitleTags.H5,
                        children: n
                    }), null != s ? V ? (0, i.jsx)(F, {
                        premiumSubscription: s,
                        onInvoiceError: W,
                        priceOptions: h,
                        preventFetch: !1
                    }) : (0, x.subscriptionCanSwitchImmediately)(s, g, B) ? (0, i.jsx)(O, {
                        premiumSubscription: s,
                        newPlan: ee,
                        onInvoiceError: W,
                        planGroup: B,
                        priceOptions: h,
                        preventFetch: ei
                    }) : (0, i.jsx)(D, {
                        premiumSubscription: s,
                        newPlan: ee,
                        planGroup: B,
                        priceOptions: h,
                        preventFetch: ei
                    }) : null, (0, i.jsxs)("div", {
                        className: M.paymentSourceWrapper,
                        children: [(0, i.jsx)(o.FormTitle, {
                            tag: o.FormTitleTags.H5,
                            children: j.default.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_TITLE
                        }), (0, i.jsx)(p.default, {
                            paymentSources: Object.values(S),
                            selectedPaymentSourceId: $,
                            onChange: C,
                            onPaymentSourceAdd: b,
                            hidePersonalInformation: et,
                            disabled: ei
                        })]
                    }), (0, i.jsxs)(c.CurrencyWrapper, {
                        currencies: k,
                        className: M.currencyWrapper,
                        children: [(0, i.jsx)(o.FormTitle, {
                            tag: o.FormTitleTags.H5,
                            children: j.default.Messages.PAYMENT_CURRENCY
                        }), (0, i.jsx)(c.default, {
                            selectedCurrency: h.currency,
                            currencies: k,
                            onChange: H,
                            disabled: ei
                        })]
                    }), (0, i.jsx)(L.default, {
                        isActive: G,
                        ref: w,
                        children: null != s && (0, x.subscriptionCanSwitchImmediately)(s, g, B) ? (0, i.jsx)(U, {
                            premiumSubscription: s,
                            newPlan: ee,
                            onInvoiceError: W,
                            planGroup: B,
                            priceOptions: h,
                            preventFetch: ei,
                            disabled: ei,
                            isEEA: en,
                            paymentSources: S,
                            setHasAcceptedTerms: R
                        }) : (0, i.jsx)(m.default, {
                            onChange: R,
                            finePrint: (0, i.jsx)(d.default, {
                                subscriptionPlan: ee,
                                paymentSourceType: null === (t = S[null != $ ? $ : ""]) || void 0 === t ? void 0 : t.type,
                                basePrice: (0, T.getPrice)(ee.id, !1, J, h),
                                currentSubscription: s,
                                planGroup: B
                            }),
                            forceShow: !0,
                            showPricingLink: ee.currency !== A.CurrencyCodes.USD,
                            showWithdrawalWaiver: en,
                            disabled: ei,
                            subscriptionPlan: ee,
                            currentSubscription: s,
                            planGroup: B
                        })
                    })]
                })
            }

            function F(e) {
                let {
                    premiumSubscription: t,
                    onInvoiceError: n,
                    priceOptions: s,
                    preventFetch: r
                } = e, [l, u] = (0, C.useGetSubscriptionInvoice)({
                    subscriptionId: t.id,
                    preventFetch: r
                });
                a.useEffect(() => {
                    n(u)
                }, [n, u]);
                let c = (0, T.isPrepaidPaymentSource)(s.paymentSourceId);
                return null != l ? (0, i.jsxs)(_.PremiumInvoiceTable, {
                    className: R.invoice,
                    children: [(0, i.jsx)(g.PremiumSubscriptionCurrentInvoiceRows, {
                        invoice: l,
                        isPrepaidPaymentSource: c
                    }), (0, i.jsx)(g.SubscriptionInvoiceFooter, {
                        premiumSubscription: t,
                        renewalInvoice: l,
                        isUpdate: !0,
                        isPrepaidPaymentSource: c
                    })]
                }) : (0, i.jsx)(o.Spinner, {})
            }

            function O(e) {
                let {
                    premiumSubscription: t,
                    newPlan: n,
                    onInvoiceError: s,
                    planGroup: r,
                    priceOptions: l,
                    preventFetch: u
                } = e, {
                    selectedSkuId: c,
                    isGift: d,
                    startedPaymentFlowWithPaymentSourcesRef: p
                } = (0, f.usePaymentContext)(), {
                    analyticsLocations: m
                } = (0, h.default)(), P = (0, T.getItemsWithUpsertedPlanIdForGroup)(t, n.id, 1, new Set(r)), [y, E] = (0, C.useSubscriptionInvoicePreview)({
                    subscriptionId: t.id,
                    items: P,
                    renewal: !1,
                    applyEntitlements: !0,
                    paymentSourceId: l.paymentSourceId,
                    currency: l.currency,
                    preventFetch: u,
                    analyticsLocations: m,
                    analyticsLocation: S.default.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW
                }), [v, x] = (0, C.useSubscriptionInvoicePreview)({
                    subscriptionId: t.id,
                    items: P,
                    renewal: !0,
                    paymentSourceId: l.paymentSourceId,
                    currency: l.currency,
                    preventFetch: u,
                    analyticsLocations: m,
                    analyticsLocation: S.default.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW
                }), b = null != E ? E : x;
                if (a.useEffect(() => {
                        s(b)
                    }, [s, b]), null != b) return (0, i.jsx)(o.FormErrorBlock, {
                    children: b.message
                });
                let L = (0, I.inOneStepSubscriptionCheckout)({
                        isTrial: !1,
                        isGift: d,
                        selectedSkuId: c,
                        startedPaymentFlowWithPaymentSources: p.current
                    }),
                    N = (0, I.planSwitchLoadingShowSpinner)(L, y, n);
                if (null == y || null == v || N) return (0, i.jsx)(o.Spinner, {
                    className: M.spinner
                });
                let A = (0, T.isPrepaidPaymentSource)(l.paymentSourceId);
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(g.SubscriptionPeriodResetNotice, {
                        proratedInvoice: y,
                        renewalInvoice: v
                    }), (0, i.jsxs)(_.PremiumInvoiceTable, {
                        className: M.invoice,
                        children: [(0, i.jsx)(_.PremiumInvoiceTableHeader, {
                            children: j.default.Messages.BILLING_SWITCH_PLAN_PURCHASE_DETAILS
                        }), (0, i.jsx)(g.PremiumSubscriptionChangePlanInvoiceRows, {
                            invoice: y,
                            newPlan: n,
                            isPrepaidPaymentSource: A
                        }), (0, i.jsx)(g.SubscriptionInvoiceFooter, {
                            premiumSubscription: t,
                            proratedInvoice: y,
                            renewalInvoice: v,
                            isUpdate: !0,
                            isPrepaidPaymentSource: A
                        })]
                    })]
                })
            }

            function U(e) {
                var t, n;
                let s, {
                        premiumSubscription: r,
                        newPlan: l,
                        onInvoiceError: u,
                        planGroup: c,
                        priceOptions: p,
                        preventFetch: f,
                        disabled: P,
                        isEEA: I,
                        paymentSources: y,
                        setHasAcceptedTerms: E
                    } = e,
                    {
                        analyticsLocations: v
                    } = (0, h.default)(),
                    x = (0, T.getItemsWithUpsertedPlanIdForGroup)(r, l.id, 1, new Set(c)),
                    [_, b] = (0, C.useSubscriptionInvoicePreview)({
                        subscriptionId: r.id,
                        items: x,
                        renewal: !0,
                        paymentSourceId: p.paymentSourceId,
                        currency: p.currency,
                        preventFetch: f,
                        analyticsLocations: v,
                        analyticsLocation: S.default.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW
                    });
                return (a.useEffect(() => {
                    u(b)
                }, [u, b]), null != b) ? (0, i.jsx)(o.FormErrorBlock, {
                    children: b.message
                }) : (null != _ && (s = {
                    amount: _.total,
                    currency: _.currency,
                    tax: _.tax,
                    taxInclusive: _.taxInclusive
                }), null == s) ? null : (0, i.jsx)(m.default, {
                    onChange: E,
                    finePrint: (0, i.jsx)(d.default, {
                        subscriptionPlan: l,
                        paymentSourceType: null === (t = y[null !== (n = p.paymentSourceId) && void 0 !== n ? n : ""]) || void 0 === t ? void 0 : t.type,
                        basePrice: s,
                        currentSubscription: r,
                        planGroup: c
                    }),
                    forceShow: !0,
                    showPricingLink: l.currency !== A.CurrencyCodes.USD,
                    showWithdrawalWaiver: I,
                    disabled: P,
                    subscriptionPlan: l,
                    currentSubscription: r,
                    planGroup: c
                })
            }

            function D(e) {
                let t, {
                        premiumSubscription: n,
                        newPlan: a,
                        planGroup: s,
                        priceOptions: r,
                        preventFetch: l
                    } = e,
                    {
                        analyticsLocations: u
                    } = (0, h.default)(),
                    [c, d] = (0, C.useSubscriptionInvoicePreview)({
                        subscriptionId: n.id,
                        items: (0, T.getItemsWithUpsertedPlanIdForGroup)(n, a.id, 1, new Set(s)),
                        renewal: !0,
                        applyEntitlements: !1,
                        paymentSourceId: r.paymentSourceId,
                        currency: r.currency,
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
                t = n.type === A.SubscriptionTypes.PREMIUM ? (0, T.getDisplayName)(a.id) : a.name;
                let p = (0, T.isPrepaidPaymentSource)(r.paymentSourceId);
                return (0, i.jsxs)("div", {
                    className: M.bodyText,
                    children: [(0, i.jsx)("div", {
                        className: R.renewalInvoiceDate,
                        children: j.default.Messages.BILLING_SWITCH_PLAN_CHANGE_DATE.format({
                            renewalDate: c.subscriptionPeriodStart
                        })
                    }), (0, i.jsxs)(_.PremiumInvoiceTable, {
                        className: M.invoice,
                        children: [(0, i.jsx)(_.PremiumInvoiceTableHeader, {
                            children: j.default.Messages.PREMIUM_SUBSCRIPTION_UPDATES
                        }), (0, i.jsx)(_.PremiumInvoiceTableRow, {
                            label: t,
                            value: (0, T.getFormattedRateForPlan)(a, r, !0)
                        }), (0, i.jsx)(b.default, {
                            invoice: c
                        }), (0, i.jsx)(_.PremiumInvoiceTableDivider, {}), (0, i.jsx)(g.SubscriptionInvoiceFooter, {
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
            });
            var i = n("37983"),
                a = n("884691"),
                s = n("414456"),
                r = n.n(s),
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
                        isWindowFocused: s,
                        useReducedMotion: r
                    } = this.props, [l, {
                        default: u
                    }] = await Promise.all([e(), n.el("230265").then(n.t.bind(n, "230265", 21))]);
                    null != this.animationRef && (this.animation = u.loadAnimation({
                        container: this.animationRef,
                        renderer: "svg",
                        loop: !0,
                        autoplay: !0,
                        animationData: l
                    }), this.animation.addEventListener("loopComplete", this.handleLoopComplete), this.animation.addEventListener("complete", this.handleComplete), this.playScene(t), (i && !s || a || r) && this.animation.pause())
                }
                componentWillUnmount() {
                    this.isUnmounted = !0, null != this.animation && (this.animation.destroy(), this.animation = void 0)
                }
                componentDidUpdate(e) {
                    var t, n, i;
                    let {
                        nextScene: a,
                        pauseWhileUnfocused: s,
                        pause: r,
                        isWindowFocused: l,
                        useReducedMotion: u
                    } = this.props;
                    a !== this.currentScene && this.shouldForcePlayAfter() && !r && this.playScene(a), null != this.animation && (s && !e.isWindowFocused && l && !u && !0 !== r ? this.animation.play() : (u || s && e.isWindowFocused && !l) && this.animation.pause()), !e.pause && r ? null === (t = this.animation) || void 0 === t || t.pause() : e.pause && !r && !u && (null === (n = this.animation) || void 0 === n || n.play()), e.nextScene !== a && r && (this.playScene(a), null === (i = this.animation) || void 0 === i || i.pause())
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
                    } = this.props, a = n[e], s = n[this.currentScene];
                    if (null != this.animation && (e === this.currentScene || a.BEG !== s.BEG || a.END !== s.END) && this.animation.playSegments([a.BEG, a.END], !0), this.currentScene = e, null != t && t(this.currentScene), i) {
                        var r;
                        null === (r = this.animation) || void 0 === r || r.pause()
                    }
                }
                render() {
                    return (0, i.jsx)("div", {
                        ref: this.handleSetRef,
                        className: r(this.props.className, c.wrapper)
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
                } = e, a = (0, l.useStateFromStores)([o.default], () => o.default.isFocused()), s = (0, l.useStateFromStores)([u.default], () => u.default.useReducedMotion);
                return (0, i.jsx)(d, {
                    ...n,
                    isWindowFocused: a,
                    useReducedMotion: s,
                    ref: t
                })
            }
        },
        315585: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("75196");

            function s(e) {
                let {
                    width: t = 14,
                    height: n = 14,
                    color: s = "currentColor",
                    foreground: r,
                    ...l
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, a.default)(l),
                    width: t,
                    height: n,
                    viewBox: "0 0 14 14",
                    children: (0, i.jsx)("path", {
                        className: r,
                        fill: s,
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
            });
            var i = n("37983"),
                a = n("884691"),
                s = n("516555");
            let r = [n("315147")],
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
                } = e, [d, p] = a.useState(null), [m, S] = a.useState(null), h = (0, s.useConfettiCannon)(m, d), f = a.useMemo(() => new s.Environment({
                    wind: c
                }), [c]), P = a.useCallback(() => {
                    let e = null == m ? void 0 : m.getCanvas();
                    if (null == e) return;
                    let t = e.getBoundingClientRect();
                    h.createConfetti({
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
                }, [h, m]);
                return a.useEffect(() => {
                    let e = n ? setInterval(P, u) : null;
                    return () => clearInterval(e)
                }, [n, P]), (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(s.ConfettiCanvas, {
                        ref: S,
                        className: t,
                        environment: f
                    }), (0, i.jsx)(s.SpriteCanvas, {
                        ref: p,
                        colors: l,
                        sprites: r,
                        spriteWidth: 6,
                        spriteHeight: 6
                    })]
                })
            }
        }
    }
]);