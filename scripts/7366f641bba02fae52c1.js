(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["43653"], {
        315147: function(e, a, l) {
            "use strict";
            e.exports = l.p + "3808a69f670fa9a67284.svg"
        },
        99836: function(e, a, l) {
            "use strict";
            l.r(a), l.d(a, {
                PaymentModalReviewStep: function() {
                    return C
                }
            });
            var n = l("920040"),
                t = l("773670"),
                i = l("161179"),
                r = l.n(i),
                s = l("612039"),
                u = l("916187"),
                o = l("154889"),
                c = l("917247"),
                d = l("527866"),
                p = l("451516"),
                m = l("826795"),
                S = l("642906"),
                v = l("85336"),
                h = l("310093"),
                f = l("367767"),
                P = l("176108"),
                b = l("298392"),
                I = l("153727"),
                y = l("650484"),
                E = l("646718"),
                T = l("809924"),
                N = l("782340");

            function C(e) {
                var a, l;
                let i, {
                        handleStepChange: C,
                        trialId: x,
                        trialFooterMessageOverride: A,
                        reviewWarningMessage: _,
                        planGroup: L,
                        openInvoiceId: M,
                        analyticsData: g,
                        analyticsLocation: R,
                        giftMessage: w,
                        customGiftMessage: j,
                        referralTrialOfferId: F,
                        initialPlanId: O,
                        subscriptionTier: U
                    } = e,
                    {
                        activeSubscription: D,
                        setUpdatedSubscription: W,
                        contextMetadata: G,
                        currencies: B,
                        isGift: k,
                        paymentSourceId: H,
                        paymentSources: V,
                        priceOptions: Y,
                        purchaseError: K,
                        purchaseTokenAuthState: z,
                        selectedPlan: Q,
                        selectedSkuId: Z,
                        setCurrency: J,
                        setPaymentSourceId: X,
                        setPurchaseState: q,
                        setPurchaseError: $,
                        step: ee,
                        purchaseState: ea,
                        isPremium: el,
                        selectedGiftStyle: en,
                        setHasAcceptedTerms: et,
                        purchaseType: ei,
                        setEntitlementsGranted: er,
                        startedPaymentFlowWithPaymentSourcesRef: es
                    } = (0, S.usePaymentContext)();
                r(null != ee, "Step should be set");
                let eu = t.useRef(null),
                    [eo, ec] = (0, s.default)(!1, 500),
                    ed = null !== (l = null != x ? x : F) && void 0 !== l ? l : null,
                    ep = null != ed && (!el || (0, E.SubscriptionTrials)[ed].skus.includes(Z)) ? ed : null,
                    em = (0, c.usePremiumTrialOffer)(F),
                    eS = (0, o.usePremiumDiscountOffer)(),
                    ev = {
                        user_trial_offer_id: null == em ? void 0 : em.id
                    };
                t.useEffect(() => {
                    null != K && null != eu.current && eu.current.scrollIntoView({
                        behavior: "smooth"
                    })
                }, [K]);
                let eh = t.useCallback((e, a) => {
                        W(e), null != a && er(a), C(v.Step.CONFIRM, {
                            fulfillment: {
                                subscription: e,
                                entitlements: a
                            }
                        })
                    }, [C, W, er]),
                    ef = null != H ? V[H] : null,
                    eP = null != Q && E.MULTI_MONTH_PLANS.has(Q.id) && null != ef && !(0, u.isPaymentSourceEligibleForMultiMonthPlans)(ef) ? Error(N.default.Messages.BILLING_ERROR_INVALID_PLAN_FOR_PAYMENT_SOURCE) : null,
                    eb = t.useRef(null),
                    [eI, ey] = t.useState(null),
                    eE = !k && null != em && null != Z && (0, E.SubscriptionTrials)[em.trial_id].skus.includes(Z),
                    eT = null == eS ? void 0 : null === (a = eS.discount) || void 0 === a ? void 0 : a.plan_ids,
                    eN = !k && null != eS && null != eT && null != Q && eT.includes(Q.id),
                    eC = null == O && null == U && ei === T.PurchaseTypes.SUBSCRIPTION,
                    ex = (0, P.inOneStepSubscriptionCheckout)({
                        isTrial: eE,
                        isGift: k,
                        selectedSkuId: Z,
                        startedPaymentFlowWithPaymentSources: es.current
                    });
                return ei === T.PurchaseTypes.ONE_TIME ? i = (0, n.jsx)(b.default, {
                    hasLegalTermsFlash: eo,
                    legalTermsNodeRef: eb,
                    onPaymentSourceChange: e => X(null != e ? e.id : null),
                    handlePaymentSourceAdd: () => C(v.Step.ADD_PAYMENT_STEPS)
                }) : null == D || k ? (r(null != Q, "Expected plan to be selected"), i = (0, n.jsx)(d.default, {
                    selectedPlanId: Q.id,
                    isGift: k,
                    paymentSources: V,
                    onPaymentSourceChange: e => X(null != e ? e.id : null),
                    priceOptions: Y,
                    currencies: B,
                    onCurrencyChange: e => J(e),
                    handlePaymentSourceAdd: () => C(v.Step.ADD_PAYMENT_STEPS),
                    setHasAcceptedTerms: et,
                    legalTermsNodeRef: eb,
                    hasLegalTermsFlash: eo,
                    trialId: ep,
                    trialFooterMessageOverride: A,
                    reviewWarningMessage: _,
                    purchaseState: ea,
                    referralTrialOfferId: F,
                    isTrial: eE,
                    isDiscount: eN
                })) : (r(null != Q, "Expected plan to be selected"), i = (0, n.jsx)(m.default, {
                    premiumSubscription: D,
                    paymentSources: V,
                    priceOptions: Y,
                    onPaymentSourceChange: e => {
                        X(null != e ? e.id : null)
                    },
                    onPaymentSourceAdd: () => {
                        C(v.Step.ADD_PAYMENT_STEPS)
                    },
                    planId: Q.id,
                    setHasAcceptedTerms: et,
                    legalTermsNodeRef: eb,
                    hasLegalTermsFlash: eo,
                    onInvoiceError: e => ey(e),
                    planGroup: L,
                    currencies: B,
                    onCurrencyChange: e => J(e),
                    hasOpenInvoice: null != M,
                    purchaseState: ea
                })), (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(h.GiftNote, {
                        giftMessage: w
                    }), (0, n.jsx)(I.default, {
                        isEligibleForTrial: eE
                    }), (0, n.jsxs)(y.PaymentPortalBody, {
                        children: [(0, n.jsx)(f.default, {}), i]
                    }), (0, n.jsx)(y.PaymentPortalFooter, {
                        children: (0, n.jsx)(p.default, {
                            premiumSubscription: null != D ? D : null,
                            setPurchaseState: q,
                            onBack: () => ex ? C(v.Step.SKU_SELECT) : C(v.Step.PLAN_SELECT),
                            onNext: eh,
                            onPurchaseError: e => $(e),
                            legalTermsNodeRef: eb,
                            flashLegalTerms: () => ec(!0),
                            invoiceError: eI,
                            planError: eP,
                            analyticsLocation: R,
                            baseAnalyticsData: g,
                            flowStartTime: G.startTime,
                            isGift: k,
                            giftStyle: en,
                            customGiftMessage: j,
                            trialId: ep,
                            planGroup: L,
                            purchaseTokenAuthState: z,
                            openInvoiceId: M,
                            backButtonEligible: ex ? eC && el : el,
                            metadata: ev,
                            isTrial: eE,
                            disablePurchase: null != ef && ei === T.PurchaseTypes.SUBSCRIPTION && eE && T.IRREDEEMABLE_PAYMENT_SOURCES.has(ef.type)
                        })
                    })]
                })
            }
        },
        310093: function(e, a, l) {
            "use strict";
            l.r(a), l.d(a, {
                GiftNote: function() {
                    return c
                }
            });
            var n = l("920040");
            l("773670");
            var t = l("812952"),
                i = l("978679"),
                r = l("659632"),
                s = l("642906"),
                u = l("782340"),
                o = l("333212");

            function c(e) {
                let {
                    giftMessage: a = u.default.Messages.PREMIUM_PAYMENT_IS_GIFT
                } = e, {
                    isGift: l,
                    giftRecipient: c
                } = (0, s.usePaymentContext)();
                return !1 === l || (0, r.isCustomGiftEnabled)(c) ? null : (0, n.jsx)(t.default, {
                    className: o.paymentNote,
                    iconSize: t.default.Sizes.SMALL,
                    icon: i.default,
                    color: null == a ? t.default.Colors.PRIMARY : t.default.Colors.SECONDARY,
                    children: a
                })
            }
        },
        298392: function(e, a, l) {
            "use strict";
            l.r(a), l.d(a, {
                default: function() {
                    return M
                }
            });
            var n = l("920040");
            l("773670");
            var t = l("161179"),
                i = l.n(t),
                r = l("148606"),
                s = l("744196"),
                u = l("77078"),
                o = l("703332"),
                c = l("812952"),
                d = l("740055"),
                p = l("545876"),
                m = l("84460"),
                S = l("883662"),
                v = l("623003"),
                h = l("102985"),
                f = l("160299"),
                P = l("622839"),
                b = l("167726"),
                I = l("953109"),
                y = l("315585"),
                E = l("153160"),
                T = l("642906"),
                N = l("286350"),
                C = l("49111"),
                x = l("782340"),
                A = l("352625");

            function _(e) {
                let {
                    sku: a,
                    skuPricePreview: l
                } = e;
                i(null != l.amount, "SKU must have a price set.");
                let t = l.amount - l.tax;
                return !l.tax_inclusive && l.tax > 0 ? (0, n.jsxs)(S.PremiumInvoiceTable, {
                    className: A.invoice,
                    children: [(0, n.jsx)(S.PremiumInvoiceTableRow, {
                        label: a.name,
                        value: (0, E.formatPrice)(t, l.currency),
                        className: A.subscriptionCostRow
                    }), (0, n.jsx)(S.PremiumInvoiceTableRow, {
                        label: x.default.Messages.PURCHASE_REVIEW_TAX_LABEL,
                        value: (0, E.formatPrice)(l.tax, l.currency),
                        className: A.subscriptionCostRow
                    }), (0, n.jsx)(S.PremiumInvoiceTableDivider, {}), (0, n.jsx)(S.PremiumInvoiceTableTotalRow, {
                        label: x.default.Messages.BILLING_INVOICE_TOTAL.format(),
                        value: (0, E.formatPrice)(l.amount, l.currency),
                        className: A.subscriptionCostRow
                    })]
                }) : (0, n.jsx)(S.PremiumInvoiceTable, {
                    className: A.invoice,
                    children: (0, n.jsx)(S.PremiumInvoiceTableRow, {
                        label: a.name,
                        value: (0, E.formatPrice)(l.amount, l.currency),
                        className: A.subscriptionCostRow
                    })
                })
            }

            function L(e) {
                let {
                    application: a,
                    sku: l,
                    isEmbeddedIAP: t
                } = e;
                return !0 !== t ? null : (0, n.jsxs)("div", {
                    className: A.skuHeading,
                    children: [(0, n.jsx)(I.default, {
                        game: a
                    }), (0, n.jsx)(u.Heading, {
                        variant: "heading-lg/bold",
                        className: A.skuHeadingText,
                        children: l.name
                    })]
                })
            }

            function M(e) {
                let {
                    hasLegalTermsFlash: a,
                    legalTermsNodeRef: l,
                    onPaymentSourceChange: t,
                    handlePaymentSourceAdd: S
                } = e, {
                    application: I,
                    purchaseState: E,
                    paymentSources: M,
                    paymentSourceId: g,
                    setHasAcceptedTerms: R,
                    skusById: w,
                    skuPricePreviewsById: j,
                    selectedSkuId: F,
                    isEmbeddedIAP: O,
                    purchaseType: U
                } = (0, T.usePaymentContext)();
                i(null != F, "Expected selectedSkuId");
                let D = w[F],
                    W = j[F],
                    G = null != g ? g : P.NO_PAYMENT_SOURCE,
                    B = null != W ? W[G] : null;
                i(null != D, "SKU must exist and be fetched."), i(null != I, "Application must exist.");
                let k = (0, s.default)([m.default, b.default], () => b.default.inTestModeForApplication(I.id) || m.default.inDevModeForApplication(I.id), [I.id]),
                    H = (0, s.default)([h.default], () => h.default.enabled),
                    V = r.CountryCodesSets.EEA_COUNTRIES.has(f.default.ipCountryCodeWithFallback),
                    Y = E === N.PurchaseState.PURCHASING || E === N.PurchaseState.COMPLETED,
                    K = null != g ? M[g].type : null;
                return (0, n.jsxs)("div", {
                    className: A.stepBody,
                    children: [k && (0, n.jsx)(c.default, {
                        icon: y.default,
                        iconSize: c.default.Sizes.SMALL,
                        color: c.default.Colors.WARNING,
                        className: A.errorBlock,
                        children: x.default.Messages.APPLICATION_STORE_PURCHASE_TEST_MODE
                    }, "TEST_MODE"), (0, n.jsx)(L, {
                        application: I,
                        sku: D,
                        isEmbeddedIAP: O
                    }), (0, n.jsx)(u.FormTitle, {
                        tag: u.FormTitleTags.H5,
                        children: x.default.Messages.ONE_TIME_PURCHASE_REVIEW_STEP_PURCHASE_DETAILS_LABEL
                    }), null == B ? (0, n.jsx)(u.Spinner, {
                        type: u.Spinner.Type.WANDERING_CUBES,
                        className: A.invoiceSpinner
                    }) : (0, n.jsx)(_, {
                        sku: D,
                        skuPricePreview: B
                    }), (0, n.jsxs)("div", {
                        className: A.paymentSourceWrapper,
                        children: [(0, n.jsx)(u.FormTitle, {
                            tag: u.FormTitleTags.H5,
                            children: x.default.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_TITLE
                        }), (0, n.jsx)(d.default, {
                            paymentSources: Object.values(M),
                            selectedPaymentSourceId: g,
                            onChange: t,
                            onPaymentSourceAdd: S,
                            hidePersonalInformation: H
                        })]
                    }), (0, n.jsx)(v.default, {
                        isActive: a,
                        ref: l,
                        children: (0, n.jsx)(p.default, {
                            onChange: R,
                            forceShow: !0,
                            showWithdrawalWaiver: V,
                            disabled: Y,
                            subscriptionPlan: null,
                            finePrintClassname: A.fineprint,
                            purchaseType: U,
                            checkboxLabel: D.productLine === C.SKUProductLines.COLLECTIBLES ? x.default.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL_SIMPLE.format({
                                paidURL: C.MarketingURLs.PAID_TERMS
                            }) : void 0,
                            finePrint: (0, n.jsx)(o.default, {
                                paymentSourceType: K,
                                isEmbeddedIAP: O,
                                purchaseType: U,
                                productLine: D.productLine
                            })
                        })
                    })]
                })
            }
        },
        826795: function(e, a, l) {
            "use strict";
            l.r(a), l.d(a, {
                default: function() {
                    return j
                }
            });
            var n = l("920040"),
                t = l("773670"),
                i = l("161179"),
                r = l.n(i),
                s = l("148606"),
                u = l("498225"),
                o = l("77078"),
                c = l("335430"),
                d = l("703332"),
                p = l("740055"),
                m = l("545876"),
                S = l("812204"),
                v = l("685665"),
                h = l("642906"),
                f = l("286350"),
                P = l("176108"),
                b = l("102985"),
                I = l("160299"),
                y = l("10514"),
                E = l("719923"),
                T = l("380186"),
                N = l("809071"),
                C = l("883662"),
                x = l("991329"),
                A = l("623003"),
                _ = l("570727"),
                L = l("146163"),
                M = l("49111"),
                g = l("782340"),
                R = l("184337"),
                w = l("676853");

            function j(e) {
                var a;
                let l, {
                        premiumSubscription: i,
                        paymentSources: S,
                        priceOptions: v,
                        onPaymentSourceChange: N,
                        onPaymentSourceAdd: x,
                        planId: L,
                        setHasAcceptedTerms: R,
                        legalTermsNodeRef: j,
                        hasLegalTermsFlash: W,
                        onInvoiceError: G,
                        planGroup: B,
                        currencies: k,
                        onCurrencyChange: H,
                        hasOpenInvoice: V,
                        purchaseState: Y
                    } = e,
                    {
                        selectedSkuId: K,
                        defaultPlanId: z,
                        selectedGiftStyle: Q,
                        setSelectedGiftStyle: Z,
                        isGift: J,
                        isPremium: X,
                        startedPaymentFlowWithPaymentSourcesRef: q
                    } = (0, h.usePaymentContext)(),
                    $ = v.paymentSourceId,
                    ee = (0, u.useStateFromStores)([y.default], () => y.default.get(L));
                r(null != ee, "Missing newPlan");
                let ea = (0, u.useStateFromStores)([b.default], () => b.default.hidePersonalInformation);
                l = V ? g.default.Messages.BILLING_PURCHASE_DETAILS_HEADER : (0, E.isPremiumSubscriptionPlan)(L) ? (0, E.getBillingReviewSubheader)(i, ee) : g.default.Messages.BILLING_SELECT_PLAN_GUILD_SUBSCRIPTION.format({
                    planName: ee.name
                });
                let el = s.CountryCodesSets.EEA_COUNTRIES.has(I.default.ipCountryCodeWithFallback),
                    en = Y === f.PurchaseState.PURCHASING || Y === f.PurchaseState.COMPLETED,
                    et = (0, P.inOneStepSubscriptionCheckout)({
                        isTrial: !1,
                        isGift: J,
                        selectedSkuId: K,
                        startedPaymentFlowWithPaymentSources: q.current
                    }),
                    ei = t.useMemo(() => (0, E.getPremiumPlanOptions)({
                        skuId: K,
                        isPremium: X,
                        multiMonthPlans: [],
                        currentSubscription: i,
                        isGift: J,
                        isEligibleForTrial: !1,
                        defaultPlanId: z,
                        defaultToMonthlyPlan: !1
                    }), [K, i, z, X, J]);
                return (0, n.jsxs)("div", {
                    className: w.stepBody,
                    children: [et && (0, n.jsxs)("div", {
                        children: [(0, n.jsx)(C.PremiumInvoiceTableDivider, {
                            negativeMarginTop: !0
                        }), (0, n.jsx)(_.PremiumSwitchPlanSelectBody, {
                            isGift: J,
                            selectedGiftStyle: Q,
                            setSelectedGiftStyle: Z,
                            planOptions: ei,
                            eligibleForMultiMonthPlans: !1,
                            selectedPlanId: L,
                            showTotal: !1
                        }), (0, n.jsx)(C.PremiumInvoiceTableDivider, {})]
                    }), (0, n.jsx)(o.FormTitle, {
                        tag: o.FormTitleTags.H5,
                        children: l
                    }), null != i ? V ? (0, n.jsx)(F, {
                        premiumSubscription: i,
                        onInvoiceError: G,
                        priceOptions: v,
                        preventFetch: !1
                    }) : (0, T.subscriptionCanSwitchImmediately)(i, L, B) ? (0, n.jsx)(O, {
                        premiumSubscription: i,
                        newPlan: ee,
                        onInvoiceError: G,
                        planGroup: B,
                        priceOptions: v,
                        preventFetch: en
                    }) : (0, n.jsx)(D, {
                        premiumSubscription: i,
                        newPlan: ee,
                        planGroup: B,
                        priceOptions: v,
                        preventFetch: en
                    }) : null, (0, n.jsxs)("div", {
                        className: w.paymentSourceWrapper,
                        children: [(0, n.jsx)(o.FormTitle, {
                            tag: o.FormTitleTags.H5,
                            children: g.default.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_TITLE
                        }), (0, n.jsx)(p.default, {
                            paymentSources: Object.values(S),
                            selectedPaymentSourceId: $,
                            onChange: N,
                            onPaymentSourceAdd: x,
                            hidePersonalInformation: ea,
                            disabled: en
                        })]
                    }), (0, n.jsxs)(c.CurrencyWrapper, {
                        currencies: k,
                        className: w.currencyWrapper,
                        children: [(0, n.jsx)(o.FormTitle, {
                            tag: o.FormTitleTags.H5,
                            children: g.default.Messages.PAYMENT_CURRENCY
                        }), (0, n.jsx)(c.default, {
                            selectedCurrency: v.currency,
                            currencies: k,
                            onChange: H,
                            disabled: en
                        })]
                    }), (0, n.jsx)(A.default, {
                        isActive: W,
                        ref: j,
                        children: null != i && (0, T.subscriptionCanSwitchImmediately)(i, L, B) ? (0, n.jsx)(U, {
                            premiumSubscription: i,
                            newPlan: ee,
                            onInvoiceError: G,
                            planGroup: B,
                            priceOptions: v,
                            preventFetch: en,
                            disabled: en,
                            isEEA: el,
                            paymentSources: S,
                            setHasAcceptedTerms: R
                        }) : (0, n.jsx)(m.default, {
                            onChange: R,
                            finePrint: (0, n.jsx)(d.default, {
                                subscriptionPlan: ee,
                                paymentSourceType: null === (a = S[null != $ ? $ : ""]) || void 0 === a ? void 0 : a.type,
                                basePrice: (0, E.getPrice)(ee.id, !1, J, v),
                                currentSubscription: i,
                                planGroup: B
                            }),
                            forceShow: !0,
                            showPricingLink: ee.currency !== M.CurrencyCodes.USD,
                            showWithdrawalWaiver: el,
                            disabled: en,
                            subscriptionPlan: ee,
                            currentSubscription: i,
                            planGroup: B
                        })
                    })]
                })
            }

            function F(e) {
                let {
                    premiumSubscription: a,
                    onInvoiceError: l,
                    priceOptions: i,
                    preventFetch: r
                } = e, [s, u] = (0, N.useGetSubscriptionInvoice)({
                    subscriptionId: a.id,
                    preventFetch: r
                });
                t.useEffect(() => {
                    l(u)
                }, [l, u]);
                let c = (0, E.isPrepaidPaymentSource)(i.paymentSourceId);
                return null != s ? (0, n.jsxs)(C.PremiumInvoiceTable, {
                    className: R.invoice,
                    children: [(0, n.jsx)(L.PremiumSubscriptionCurrentInvoiceRows, {
                        invoice: s,
                        isPrepaidPaymentSource: c
                    }), (0, n.jsx)(L.SubscriptionInvoiceFooter, {
                        premiumSubscription: a,
                        renewalInvoice: s,
                        isUpdate: !0,
                        isPrepaidPaymentSource: c
                    })]
                }) : (0, n.jsx)(o.Spinner, {})
            }

            function O(e) {
                let {
                    premiumSubscription: a,
                    newPlan: l,
                    onInvoiceError: i,
                    planGroup: r,
                    priceOptions: s,
                    preventFetch: u
                } = e, {
                    selectedSkuId: c,
                    isGift: d,
                    startedPaymentFlowWithPaymentSourcesRef: p
                } = (0, h.usePaymentContext)(), {
                    analyticsLocations: m
                } = (0, v.default)(), f = (0, E.getItemsWithUpsertedPlanIdForGroup)(a, l.id, 1, new Set(r)), [b, I] = (0, N.useSubscriptionInvoicePreview)({
                    subscriptionId: a.id,
                    items: f,
                    renewal: !1,
                    applyEntitlements: !0,
                    paymentSourceId: s.paymentSourceId,
                    currency: s.currency,
                    preventFetch: u,
                    analyticsLocations: m,
                    analyticsLocation: S.default.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW
                }), [y, T] = (0, N.useSubscriptionInvoicePreview)({
                    subscriptionId: a.id,
                    items: f,
                    renewal: !0,
                    paymentSourceId: s.paymentSourceId,
                    currency: s.currency,
                    preventFetch: u,
                    analyticsLocations: m,
                    analyticsLocation: S.default.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW
                }), x = null != I ? I : T;
                if (t.useEffect(() => {
                        i(x)
                    }, [i, x]), null != x) return (0, n.jsx)(o.FormErrorBlock, {
                    children: x.message
                });
                let A = (0, P.inOneStepSubscriptionCheckout)({
                        isTrial: !1,
                        isGift: d,
                        selectedSkuId: c,
                        startedPaymentFlowWithPaymentSources: p.current
                    }),
                    _ = (0, P.planSwitchLoadingShowSpinner)(A, b, l);
                if (null == b || null == y || _) return (0, n.jsx)(o.Spinner, {
                    className: w.spinner
                });
                let M = (0, E.isPrepaidPaymentSource)(s.paymentSourceId);
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(L.SubscriptionPeriodResetNotice, {
                        proratedInvoice: b,
                        renewalInvoice: y
                    }), (0, n.jsxs)(C.PremiumInvoiceTable, {
                        className: w.invoice,
                        children: [(0, n.jsx)(C.PremiumInvoiceTableHeader, {
                            children: g.default.Messages.BILLING_SWITCH_PLAN_PURCHASE_DETAILS
                        }), (0, n.jsx)(L.PremiumSubscriptionChangePlanInvoiceRows, {
                            invoice: b,
                            newPlan: l,
                            isPrepaidPaymentSource: M
                        }), (0, n.jsx)(L.SubscriptionInvoiceFooter, {
                            premiumSubscription: a,
                            proratedInvoice: b,
                            renewalInvoice: y,
                            isUpdate: !0,
                            isPrepaidPaymentSource: M
                        })]
                    })]
                })
            }

            function U(e) {
                var a, l;
                let i, {
                        premiumSubscription: r,
                        newPlan: s,
                        onInvoiceError: u,
                        planGroup: c,
                        priceOptions: p,
                        preventFetch: h,
                        disabled: f,
                        isEEA: P,
                        paymentSources: b,
                        setHasAcceptedTerms: I
                    } = e,
                    {
                        analyticsLocations: y
                    } = (0, v.default)(),
                    T = (0, E.getItemsWithUpsertedPlanIdForGroup)(r, s.id, 1, new Set(c)),
                    [C, x] = (0, N.useSubscriptionInvoicePreview)({
                        subscriptionId: r.id,
                        items: T,
                        renewal: !0,
                        paymentSourceId: p.paymentSourceId,
                        currency: p.currency,
                        preventFetch: h,
                        analyticsLocations: y,
                        analyticsLocation: S.default.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW
                    });
                return (t.useEffect(() => {
                    u(x)
                }, [u, x]), null != x) ? (0, n.jsx)(o.FormErrorBlock, {
                    children: x.message
                }) : (null != C && (i = {
                    amount: C.total,
                    currency: C.currency,
                    tax: C.tax,
                    taxInclusive: C.taxInclusive
                }), null == i) ? null : (0, n.jsx)(m.default, {
                    onChange: I,
                    finePrint: (0, n.jsx)(d.default, {
                        subscriptionPlan: s,
                        paymentSourceType: null === (a = b[null !== (l = p.paymentSourceId) && void 0 !== l ? l : ""]) || void 0 === a ? void 0 : a.type,
                        basePrice: i,
                        currentSubscription: r,
                        planGroup: c
                    }),
                    forceShow: !0,
                    showPricingLink: s.currency !== M.CurrencyCodes.USD,
                    showWithdrawalWaiver: P,
                    disabled: f,
                    subscriptionPlan: s,
                    currentSubscription: r,
                    planGroup: c
                })
            }

            function D(e) {
                let a, {
                        premiumSubscription: l,
                        newPlan: t,
                        planGroup: i,
                        priceOptions: r,
                        preventFetch: s
                    } = e,
                    {
                        analyticsLocations: u
                    } = (0, v.default)(),
                    [c, d] = (0, N.useSubscriptionInvoicePreview)({
                        subscriptionId: l.id,
                        items: (0, E.getItemsWithUpsertedPlanIdForGroup)(l, t.id, 1, new Set(i)),
                        renewal: !0,
                        applyEntitlements: !1,
                        paymentSourceId: r.paymentSourceId,
                        currency: r.currency,
                        preventFetch: s,
                        analyticsLocations: u,
                        analyticsLocation: "billing_switch_plan_renewal_mutation_renewal_invoice_preview"
                    });
                if (null != d) return (0, n.jsx)(o.FormErrorBlock, {
                    children: d.message
                });
                if (null == c) return (0, n.jsx)("div", {
                    children: (0, n.jsx)(o.Spinner, {})
                });
                a = l.type === M.SubscriptionTypes.PREMIUM ? (0, E.getDisplayName)(t.id) : t.name;
                let p = (0, E.isPrepaidPaymentSource)(r.paymentSourceId);
                return (0, n.jsxs)("div", {
                    className: w.bodyText,
                    children: [(0, n.jsx)("div", {
                        className: R.renewalInvoiceDate,
                        children: g.default.Messages.BILLING_SWITCH_PLAN_CHANGE_DATE.format({
                            renewalDate: c.subscriptionPeriodStart
                        })
                    }), (0, n.jsxs)(C.PremiumInvoiceTable, {
                        className: w.invoice,
                        children: [(0, n.jsx)(C.PremiumInvoiceTableHeader, {
                            children: g.default.Messages.PREMIUM_SUBSCRIPTION_UPDATES
                        }), (0, n.jsx)(C.PremiumInvoiceTableRow, {
                            label: a,
                            value: (0, E.getFormattedRateForPlan)(t, r, !0)
                        }), (0, n.jsx)(x.default, {
                            invoice: c
                        }), (0, n.jsx)(C.PremiumInvoiceTableDivider, {}), (0, n.jsx)(L.SubscriptionInvoiceFooter, {
                            premiumSubscription: l,
                            renewalInvoice: c,
                            isUpdate: !0,
                            isPrepaidPaymentSource: p
                        })]
                    })]
                })
            }
        },
        434976: function(e, a, l) {
            "use strict";
            l.r(a), l.d(a, {
                default: function() {
                    return n
                }
            });
            var n = [{
                label: "Alberta",
                value: "AB"
            }, {
                label: "British Columbia",
                value: "BC"
            }, {
                label: "Manitoba",
                value: "MB"
            }, {
                label: "New Brunswick",
                value: "NB"
            }, {
                label: "Newfoundland and Labrador",
                value: "NL"
            }, {
                label: "Nova Scotia",
                value: "NS"
            }, {
                label: "Ontario",
                value: "ON"
            }, {
                label: "Prince Edward Island",
                value: "PE"
            }, {
                label: "Quebec",
                value: "QC"
            }, {
                label: "Saskatchewan",
                value: "SK"
            }, {
                label: "Northwest Territories",
                value: "NT"
            }, {
                label: "Nunavut",
                value: "NU"
            }, {
                label: "Yukon",
                value: "YT"
            }]
        },
        722303: function(e, a, l) {
            "use strict";
            l.r(a), l.d(a, {
                default: function() {
                    return n
                }
            });
            var n = [{
                label: "Alabama",
                value: "AL"
            }, {
                label: "Alaska",
                value: "AK"
            }, {
                label: "American Samoa",
                value: "AS"
            }, {
                label: "Arizona",
                value: "AZ"
            }, {
                label: "Arkansas",
                value: "AR"
            }, {
                label: "Armed Forces: Americas",
                value: "AA"
            }, {
                label: "Armed Forces: Europe",
                value: "AE"
            }, {
                label: "Armed Forces: Pacific",
                value: "AP"
            }, {
                label: "California",
                value: "CA"
            }, {
                label: "Colorado",
                value: "CO"
            }, {
                label: "Connecticut",
                value: "CT"
            }, {
                label: "Delaware",
                value: "DE"
            }, {
                label: "District Of Columbia",
                value: "DC"
            }, {
                label: "Federated States Of Micronesia",
                value: "FM"
            }, {
                label: "Florida",
                value: "FL"
            }, {
                label: "Georgia",
                value: "GA"
            }, {
                label: "Guam",
                value: "GU"
            }, {
                label: "Hawaii",
                value: "HI"
            }, {
                label: "Idaho",
                value: "ID"
            }, {
                label: "Illinois",
                value: "IL"
            }, {
                label: "Indiana",
                value: "IN"
            }, {
                label: "Iowa",
                value: "IA"
            }, {
                label: "Kansas",
                value: "KS"
            }, {
                label: "Kentucky",
                value: "KY"
            }, {
                label: "Louisiana",
                value: "LA"
            }, {
                label: "Maine",
                value: "ME"
            }, {
                label: "Marshall Islands",
                value: "MH"
            }, {
                label: "Maryland",
                value: "MD"
            }, {
                label: "Massachusetts",
                value: "MA"
            }, {
                label: "Michigan",
                value: "MI"
            }, {
                label: "Minnesota",
                value: "MN"
            }, {
                label: "Mississippi",
                value: "MS"
            }, {
                label: "Missouri",
                value: "MO"
            }, {
                label: "Montana",
                value: "MT"
            }, {
                label: "Nebraska",
                value: "NE"
            }, {
                label: "Nevada",
                value: "NV"
            }, {
                label: "New Hampshire",
                value: "NH"
            }, {
                label: "New Jersey",
                value: "NJ"
            }, {
                label: "New Mexico",
                value: "NM"
            }, {
                label: "New York",
                value: "NY"
            }, {
                label: "North Carolina",
                value: "NC"
            }, {
                label: "North Dakota",
                value: "ND"
            }, {
                label: "Northern Mariana Islands",
                value: "MP"
            }, {
                label: "Ohio",
                value: "OH"
            }, {
                label: "Oklahoma",
                value: "OK"
            }, {
                label: "Oregon",
                value: "OR"
            }, {
                label: "Palau",
                value: "PW"
            }, {
                label: "Pennsylvania",
                value: "PA"
            }, {
                label: "Puerto Rico",
                value: "PR"
            }, {
                label: "Rhode Island",
                value: "RI"
            }, {
                label: "South Carolina",
                value: "SC"
            }, {
                label: "South Dakota",
                value: "SD"
            }, {
                label: "Tennessee",
                value: "TN"
            }, {
                label: "Texas",
                value: "TX"
            }, {
                label: "Utah",
                value: "UT"
            }, {
                label: "Vermont",
                value: "VT"
            }, {
                label: "Virgin Islands",
                value: "VI"
            }, {
                label: "Virginia",
                value: "VA"
            }, {
                label: "Washington",
                value: "WA"
            }, {
                label: "West Virginia",
                value: "WV"
            }, {
                label: "Wisconsin",
                value: "WI"
            }, {
                label: "Wyoming",
                value: "WY"
            }]
        },
        273108: function(e, a, l) {
            "use strict";
            l.r(a), l.d(a, {
                default: function() {
                    return p
                }
            });
            var n = l("920040"),
                t = l("773670"),
                i = l("575482"),
                r = l.n(i),
                s = l("498225"),
                u = l("206230"),
                o = l("471671"),
                c = l("724063");
            class d extends t.PureComponent {
                async componentDidMount() {
                    let {
                        importData: e,
                        nextScene: a,
                        pauseWhileUnfocused: n,
                        pause: t,
                        isWindowFocused: i,
                        useReducedMotion: r
                    } = this.props, [s, {
                        default: u
                    }] = await Promise.all([e(), l.el("552280").then(l.t.bind(l, "552280", 21))]);
                    null != this.animationRef && (this.animation = u.loadAnimation({
                        container: this.animationRef,
                        renderer: "svg",
                        loop: !0,
                        autoplay: !0,
                        animationData: s
                    }), this.animation.addEventListener("loopComplete", this.handleLoopComplete), this.animation.addEventListener("complete", this.handleComplete), this.playScene(a), (n && !i || t || r) && this.animation.pause())
                }
                componentWillUnmount() {
                    this.isUnmounted = !0, null != this.animation && (this.animation.destroy(), this.animation = void 0)
                }
                componentDidUpdate(e) {
                    var a, l, n;
                    let {
                        nextScene: t,
                        pauseWhileUnfocused: i,
                        pause: r,
                        isWindowFocused: s,
                        useReducedMotion: u
                    } = this.props;
                    t !== this.currentScene && this.shouldForcePlayAfter() && !r && this.playScene(t), null != this.animation && (i && !e.isWindowFocused && s && !u && !0 !== r ? this.animation.play() : (u || i && e.isWindowFocused && !s) && this.animation.pause()), !e.pause && r ? null === (a = this.animation) || void 0 === a || a.pause() : e.pause && !r && !u && (null === (l = this.animation) || void 0 === l || l.play()), e.nextScene !== t && r && (this.playScene(t), null === (n = this.animation) || void 0 === n || n.pause())
                }
                shouldForcePlayAfter() {
                    let {
                        sceneSegments: e
                    } = this.props, a = e[this.currentScene];
                    return !0 === a.shouldForcePlayAfter
                }
                playScene(e) {
                    if (this.isUnmounted) return;
                    let {
                        onScenePlay: a,
                        sceneSegments: l,
                        useReducedMotion: n
                    } = this.props, t = l[e], i = l[this.currentScene];
                    if (null != this.animation && (e === this.currentScene || t.BEG !== i.BEG || t.END !== i.END) && this.animation.playSegments([t.BEG, t.END], !0), this.currentScene = e, null != a && a(this.currentScene), n) {
                        var r;
                        null === (r = this.animation) || void 0 === r || r.pause()
                    }
                }
                render() {
                    return (0, n.jsx)("div", {
                        ref: this.handleSetRef,
                        className: r(this.props.className, c.wrapper)
                    })
                }
                constructor(...e) {
                    super(...e), this.animationRef = null, this.currentScene = this.props.nextScene, this.isUnmounted = !1, this.handleLoopComplete = () => {
                        let {
                            onSceneComplete: e,
                            nextScene: a
                        } = this.props;
                        null != e && e(this.currentScene), this.playScene(a)
                    }, this.handleComplete = () => {
                        let {
                            onSceneComplete: e
                        } = this.props;
                        null != e && e(this.currentScene)
                    }, this.handleSetRef = e => {
                        this.animationRef = e;
                        let {
                            animationRef: a
                        } = this.props;
                        null != a && a(e)
                    }
                }
            }
            d.defaultProps = {
                pauseWhileUnfocused: !0,
                pause: !1
            };
            var p = e => {
                let {
                    componentRef: a,
                    ...l
                } = e, t = (0, s.useStateFromStores)([o.default], () => o.default.isFocused()), i = (0, s.useStateFromStores)([u.default], () => u.default.useReducedMotion);
                return (0, n.jsx)(d, {
                    ...l,
                    isWindowFocused: t,
                    useReducedMotion: i,
                    ref: a
                })
            }
        },
        315585: function(e, a, l) {
            "use strict";
            l.r(a), l.d(a, {
                default: function() {
                    return i
                }
            });
            var n = l("920040");
            l("773670");
            var t = l("75196");

            function i(e) {
                let {
                    width: a = 14,
                    height: l = 14,
                    color: i = "currentColor",
                    foreground: r,
                    ...s
                } = e;
                return (0, n.jsx)("svg", {
                    ...(0, t.default)(s),
                    width: a,
                    height: l,
                    viewBox: "0 0 14 14",
                    children: (0, n.jsx)("path", {
                        className: r,
                        fill: i,
                        d: "M12,0 C12.8284271,0 14,1.17157288 14,2 L14,12 C14,12.8284271 12.8284271,14 12,14 L2,14 C1.17157288,14 0,12.8284271 0,12 L0,2 C0,1.17157288 1.17157288,0 2,0 L12,0 Z M8,3 L6,3 L6,8 L8,8 L8,3 Z M8,11 L8,9 L6,9 L6,11 L8,11 Z"
                    })
                })
            }
        },
        181108: function(e, a, l) {
            "use strict";
            l.r(a), l.d(a, {
                default: function() {
                    return c
                }
            });
            var n = l("920040"),
                t = l("773670"),
                i = l("641900");
            let r = [l("315147")],
                s = ["#FFFFFF"],
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
                    className: a,
                    firing: l = !0,
                    wind: c = 2
                } = e, [d, p] = t.useState(null), [m, S] = t.useState(null), v = (0, i.useConfettiCannon)(m, d), h = t.useMemo(() => new i.Environment({
                    wind: c
                }), [c]), f = t.useCallback(() => {
                    let e = null == m ? void 0 : m.getCanvas();
                    if (null == e) return;
                    let a = e.getBoundingClientRect();
                    v.createConfetti({
                        ...o,
                        position: {
                            type: "static-random",
                            minValue: {
                                x: -a.width / 2,
                                y: -6
                            },
                            maxValue: {
                                x: a.width,
                                y: -6
                            }
                        }
                    })
                }, [v, m]);
                return t.useEffect(() => {
                    let e = l ? setInterval(f, u) : null;
                    return () => clearInterval(e)
                }, [l, f]), (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(i.ConfettiCanvas, {
                        ref: S,
                        className: a,
                        environment: h
                    }), (0, n.jsx)(i.SpriteCanvas, {
                        ref: p,
                        colors: s,
                        sprites: r,
                        spriteWidth: 6,
                        spriteHeight: 6
                    })]
                })
            }
        }
    }
]);