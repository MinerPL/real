(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["55451"], {
        310093: function(e, n, i) {
            "use strict";
            i.r(n), i.d(n, {
                GiftNote: function() {
                    return u
                }
            });
            var t = i("37983");
            i("884691");
            var r = i("812952"),
                a = i("978679"),
                s = i("659632"),
                l = i("642906"),
                o = i("782340"),
                c = i("588937");

            function u(e) {
                let {
                    giftMessage: n = o.default.Messages.PREMIUM_PAYMENT_IS_GIFT
                } = e, {
                    isGift: i,
                    giftRecipient: u
                } = (0, l.usePaymentContext)();
                return !1 === i || (0, s.isCustomGiftEnabled)(u) ? null : (0, t.jsx)(r.default, {
                    className: c.paymentNote,
                    iconSize: r.default.Sizes.SMALL,
                    icon: a.default,
                    color: null == n ? r.default.Colors.PRIMARY : r.default.Colors.SECONDARY,
                    children: n
                })
            }
        },
        298392: function(e, n, i) {
            "use strict";
            i.r(n), i.d(n, {
                default: function() {
                    return A
                }
            });
            var t = i("37983");
            i("884691");
            var r = i("627445"),
                a = i.n(r),
                s = i("976979"),
                l = i("65597"),
                o = i("77078"),
                c = i("703332"),
                u = i("812952"),
                d = i("740055"),
                p = i("545876"),
                m = i("84460"),
                S = i("883662"),
                I = i("623003"),
                P = i("102985"),
                f = i("160299"),
                E = i("622839"),
                v = i("167726"),
                y = i("953109"),
                T = i("315585"),
                h = i("153160"),
                b = i("642906"),
                _ = i("286350"),
                x = i("49111"),
                C = i("782340"),
                N = i("135878");

            function L(e) {
                let {
                    sku: n,
                    skuPricePreview: i
                } = e;
                a(null != i.amount, "SKU must have a price set.");
                let r = i.amount - i.tax;
                return !i.tax_inclusive && i.tax > 0 ? (0, t.jsxs)(S.PremiumInvoiceTable, {
                    className: N.invoice,
                    children: [(0, t.jsx)(S.PremiumInvoiceTableRow, {
                        label: n.name,
                        value: (0, h.formatPrice)(r, i.currency),
                        className: N.subscriptionCostRow
                    }), (0, t.jsx)(S.PremiumInvoiceTableRow, {
                        label: C.default.Messages.PURCHASE_REVIEW_TAX_LABEL,
                        value: (0, h.formatPrice)(i.tax, i.currency),
                        className: N.subscriptionCostRow
                    }), (0, t.jsx)(S.PremiumInvoiceTableDivider, {}), (0, t.jsx)(S.PremiumInvoiceTableTotalRow, {
                        label: C.default.Messages.BILLING_INVOICE_TOTAL.format(),
                        value: (0, h.formatPrice)(i.amount, i.currency),
                        className: N.subscriptionCostRow
                    })]
                }) : (0, t.jsx)(S.PremiumInvoiceTable, {
                    className: N.invoice,
                    children: (0, t.jsx)(S.PremiumInvoiceTableRow, {
                        label: n.name,
                        value: (0, h.formatPrice)(i.amount, i.currency),
                        className: N.subscriptionCostRow
                    })
                })
            }

            function j(e) {
                let {
                    application: n,
                    sku: i,
                    isEmbeddedIAP: r
                } = e;
                return !0 !== r ? null : (0, t.jsxs)("div", {
                    className: N.skuHeading,
                    children: [(0, t.jsx)(y.default, {
                        game: n
                    }), (0, t.jsx)(o.Heading, {
                        variant: "heading-lg/bold",
                        className: N.skuHeadingText,
                        children: i.name
                    })]
                })
            }

            function A(e) {
                let {
                    hasLegalTermsFlash: n,
                    legalTermsNodeRef: i,
                    onPaymentSourceChange: r,
                    handlePaymentSourceAdd: S
                } = e, {
                    application: y,
                    purchaseState: h,
                    paymentSources: A,
                    paymentSourceId: g,
                    setHasAcceptedTerms: w,
                    skusById: M,
                    skuPricePreviewsById: R,
                    selectedSkuId: F,
                    isEmbeddedIAP: U,
                    purchaseType: O
                } = (0, b.usePaymentContext)();
                a(null != F, "Expected selectedSkuId");
                let G = M[F],
                    W = R[F],
                    D = null != g ? g : E.NO_PAYMENT_SOURCE,
                    B = null != W ? W[D] : null;
                a(null != G, "SKU must exist and be fetched."), a(null != y, "Application must exist.");
                let H = (0, l.default)([m.default, v.default], () => v.default.inTestModeForApplication(y.id) || m.default.inDevModeForApplication(y.id), [y.id]),
                    k = (0, l.default)([P.default], () => P.default.enabled),
                    Y = s.CountryCodesSets.EEA_COUNTRIES.has(f.default.ipCountryCodeWithFallback),
                    V = h === _.PurchaseState.PURCHASING || h === _.PurchaseState.COMPLETED,
                    z = null != g ? A[g].type : null;
                return (0, t.jsxs)("div", {
                    className: N.stepBody,
                    children: [H && (0, t.jsx)(u.default, {
                        icon: T.default,
                        iconSize: u.default.Sizes.SMALL,
                        color: u.default.Colors.WARNING,
                        className: N.errorBlock,
                        children: C.default.Messages.APPLICATION_STORE_PURCHASE_TEST_MODE
                    }, "TEST_MODE"), (0, t.jsx)(j, {
                        application: y,
                        sku: G,
                        isEmbeddedIAP: U
                    }), (0, t.jsx)(o.FormTitle, {
                        tag: o.FormTitleTags.H5,
                        children: C.default.Messages.ONE_TIME_PURCHASE_REVIEW_STEP_PURCHASE_DETAILS_LABEL
                    }), null == B ? (0, t.jsx)(o.Spinner, {
                        type: o.Spinner.Type.WANDERING_CUBES,
                        className: N.invoiceSpinner
                    }) : (0, t.jsx)(L, {
                        sku: G,
                        skuPricePreview: B
                    }), (0, t.jsxs)("div", {
                        className: N.paymentSourceWrapper,
                        children: [(0, t.jsx)(o.FormTitle, {
                            tag: o.FormTitleTags.H5,
                            children: C.default.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_TITLE
                        }), (0, t.jsx)(d.default, {
                            paymentSources: Object.values(A),
                            selectedPaymentSourceId: g,
                            onChange: r,
                            onPaymentSourceAdd: S,
                            hidePersonalInformation: k
                        })]
                    }), (0, t.jsx)(I.default, {
                        isActive: n,
                        ref: i,
                        children: (0, t.jsx)(p.default, {
                            onChange: w,
                            forceShow: !0,
                            showWithdrawalWaiver: Y,
                            disabled: V,
                            subscriptionPlan: null,
                            finePrintClassname: N.fineprint,
                            purchaseType: O,
                            checkboxLabel: G.productLine === x.SKUProductLines.COLLECTIBLES ? C.default.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL_SIMPLE.format({
                                paidURL: x.MarketingURLs.PAID_TERMS
                            }) : void 0,
                            finePrint: (0, t.jsx)(c.default, {
                                paymentSourceType: z,
                                isEmbeddedIAP: U,
                                purchaseType: O,
                                productLine: G.productLine
                            })
                        })
                    })]
                })
            }
        },
        826795: function(e, n, i) {
            "use strict";
            i.r(n), i.d(n, {
                default: function() {
                    return R
                }
            });
            var t = i("37983"),
                r = i("884691"),
                a = i("627445"),
                s = i.n(a),
                l = i("976979"),
                o = i("446674"),
                c = i("77078"),
                u = i("335430"),
                d = i("703332"),
                p = i("740055"),
                m = i("545876"),
                S = i("812204"),
                I = i("685665"),
                P = i("642906"),
                f = i("286350"),
                E = i("176108"),
                v = i("102985"),
                y = i("160299"),
                T = i("10514"),
                h = i("719923"),
                b = i("380186"),
                _ = i("809071"),
                x = i("883662"),
                C = i("991329"),
                N = i("623003"),
                L = i("570727"),
                j = i("146163"),
                A = i("49111"),
                g = i("782340"),
                w = i("709626"),
                M = i("615689");

            function R(e) {
                var n;
                let i, {
                        premiumSubscription: a,
                        paymentSources: S,
                        priceOptions: I,
                        onPaymentSourceChange: _,
                        onPaymentSourceAdd: C,
                        planId: j,
                        setHasAcceptedTerms: w,
                        legalTermsNodeRef: R,
                        hasLegalTermsFlash: W,
                        onInvoiceError: D,
                        planGroup: B,
                        currencies: H,
                        onCurrencyChange: k,
                        hasOpenInvoice: Y,
                        purchaseState: V
                    } = e,
                    {
                        selectedSkuId: z,
                        defaultPlanId: K,
                        selectedGiftStyle: Q,
                        setSelectedGiftStyle: J,
                        isGift: X,
                        isPremium: q,
                        startedPaymentFlowWithPaymentSourcesRef: Z
                    } = (0, P.usePaymentContext)(),
                    $ = I.paymentSourceId,
                    ee = (0, o.useStateFromStores)([T.default], () => T.default.get(j));
                s(null != ee, "Missing newPlan");
                let en = (0, o.useStateFromStores)([v.default], () => v.default.hidePersonalInformation);
                i = Y ? g.default.Messages.BILLING_PURCHASE_DETAILS_HEADER : (0, h.isPremiumSubscriptionPlan)(j) ? (0, h.getBillingReviewSubheader)(a, ee) : g.default.Messages.BILLING_SELECT_PLAN_GUILD_SUBSCRIPTION.format({
                    planName: ee.name
                });
                let ei = l.CountryCodesSets.EEA_COUNTRIES.has(y.default.ipCountryCodeWithFallback),
                    et = V === f.PurchaseState.PURCHASING || V === f.PurchaseState.COMPLETED,
                    er = (0, E.inOneStepSubscriptionCheckout)({
                        isTrial: !1,
                        isGift: X,
                        selectedSkuId: z,
                        startedPaymentFlowWithPaymentSources: Z.current
                    }),
                    ea = r.useMemo(() => (0, h.getPremiumPlanOptions)({
                        skuId: z,
                        isPremium: q,
                        multiMonthPlans: [],
                        currentSubscription: a,
                        isGift: X,
                        isEligibleForTrial: !1,
                        defaultPlanId: K,
                        defaultToMonthlyPlan: !1
                    }), [z, a, K, q, X]);
                return (0, t.jsxs)("div", {
                    className: M.stepBody,
                    children: [er && (0, t.jsxs)("div", {
                        children: [(0, t.jsx)(x.PremiumInvoiceTableDivider, {
                            negativeMarginTop: !0
                        }), (0, t.jsx)(L.PremiumSwitchPlanSelectBody, {
                            isGift: X,
                            selectedGiftStyle: Q,
                            setSelectedGiftStyle: J,
                            planOptions: ea,
                            eligibleForMultiMonthPlans: !1,
                            selectedPlanId: j,
                            showTotal: !1
                        }), (0, t.jsx)(x.PremiumInvoiceTableDivider, {})]
                    }), (0, t.jsx)(c.FormTitle, {
                        tag: c.FormTitleTags.H5,
                        children: i
                    }), null != a ? Y ? (0, t.jsx)(F, {
                        premiumSubscription: a,
                        onInvoiceError: D,
                        priceOptions: I,
                        preventFetch: !1
                    }) : (0, b.subscriptionCanSwitchImmediately)(a, j, B) ? (0, t.jsx)(U, {
                        premiumSubscription: a,
                        newPlan: ee,
                        onInvoiceError: D,
                        planGroup: B,
                        priceOptions: I,
                        preventFetch: et
                    }) : (0, t.jsx)(G, {
                        premiumSubscription: a,
                        newPlan: ee,
                        planGroup: B,
                        priceOptions: I,
                        preventFetch: et
                    }) : null, (0, t.jsxs)("div", {
                        className: M.paymentSourceWrapper,
                        children: [(0, t.jsx)(c.FormTitle, {
                            tag: c.FormTitleTags.H5,
                            children: g.default.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_TITLE
                        }), (0, t.jsx)(p.default, {
                            paymentSources: Object.values(S),
                            selectedPaymentSourceId: $,
                            onChange: _,
                            onPaymentSourceAdd: C,
                            hidePersonalInformation: en,
                            disabled: et
                        })]
                    }), (0, t.jsxs)(u.CurrencyWrapper, {
                        currencies: H,
                        className: M.currencyWrapper,
                        children: [(0, t.jsx)(c.FormTitle, {
                            tag: c.FormTitleTags.H5,
                            children: g.default.Messages.PAYMENT_CURRENCY
                        }), (0, t.jsx)(u.default, {
                            selectedCurrency: I.currency,
                            currencies: H,
                            onChange: k,
                            disabled: et
                        })]
                    }), (0, t.jsx)(N.default, {
                        isActive: W,
                        ref: R,
                        children: null != a && (0, b.subscriptionCanSwitchImmediately)(a, j, B) ? (0, t.jsx)(O, {
                            premiumSubscription: a,
                            newPlan: ee,
                            onInvoiceError: D,
                            planGroup: B,
                            priceOptions: I,
                            preventFetch: et,
                            disabled: et,
                            isEEA: ei,
                            paymentSources: S,
                            setHasAcceptedTerms: w
                        }) : (0, t.jsx)(m.default, {
                            onChange: w,
                            finePrint: (0, t.jsx)(d.default, {
                                subscriptionPlan: ee,
                                paymentSourceType: null === (n = S[null != $ ? $ : ""]) || void 0 === n ? void 0 : n.type,
                                basePrice: (0, h.getPrice)(ee.id, !1, X, I),
                                currentSubscription: a,
                                planGroup: B
                            }),
                            forceShow: !0,
                            showPricingLink: ee.currency !== A.CurrencyCodes.USD,
                            showWithdrawalWaiver: ei,
                            disabled: et,
                            subscriptionPlan: ee,
                            currentSubscription: a,
                            planGroup: B
                        })
                    })]
                })
            }

            function F(e) {
                let {
                    premiumSubscription: n,
                    onInvoiceError: i,
                    priceOptions: a,
                    preventFetch: s
                } = e, [l, o] = (0, _.useGetSubscriptionInvoice)({
                    subscriptionId: n.id,
                    preventFetch: s
                });
                r.useEffect(() => {
                    i(o)
                }, [i, o]);
                let u = (0, h.isPrepaidPaymentSource)(a.paymentSourceId);
                return null != l ? (0, t.jsxs)(x.PremiumInvoiceTable, {
                    className: w.invoice,
                    children: [(0, t.jsx)(j.PremiumSubscriptionCurrentInvoiceRows, {
                        invoice: l,
                        isPrepaidPaymentSource: u
                    }), (0, t.jsx)(j.SubscriptionInvoiceFooter, {
                        premiumSubscription: n,
                        renewalInvoice: l,
                        isUpdate: !0,
                        isPrepaidPaymentSource: u
                    })]
                }) : (0, t.jsx)(c.Spinner, {})
            }

            function U(e) {
                let {
                    premiumSubscription: n,
                    newPlan: i,
                    onInvoiceError: a,
                    planGroup: s,
                    priceOptions: l,
                    preventFetch: o
                } = e, {
                    selectedSkuId: u,
                    isGift: d,
                    startedPaymentFlowWithPaymentSourcesRef: p
                } = (0, P.usePaymentContext)(), {
                    analyticsLocations: m
                } = (0, I.default)(), f = (0, h.getItemsWithUpsertedPlanIdForGroup)(n, i.id, 1, new Set(s)), [v, y] = (0, _.useSubscriptionInvoicePreview)({
                    subscriptionId: n.id,
                    items: f,
                    renewal: !1,
                    applyEntitlements: !0,
                    paymentSourceId: l.paymentSourceId,
                    currency: l.currency,
                    preventFetch: o,
                    analyticsLocations: m,
                    analyticsLocation: S.default.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW
                }), [T, b] = (0, _.useSubscriptionInvoicePreview)({
                    subscriptionId: n.id,
                    items: f,
                    renewal: !0,
                    paymentSourceId: l.paymentSourceId,
                    currency: l.currency,
                    preventFetch: o,
                    analyticsLocations: m,
                    analyticsLocation: S.default.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW
                }), C = null != y ? y : b;
                if (r.useEffect(() => {
                        a(C)
                    }, [a, C]), null != C) return (0, t.jsx)(c.FormErrorBlock, {
                    children: C.message
                });
                let N = (0, E.inOneStepSubscriptionCheckout)({
                        isTrial: !1,
                        isGift: d,
                        selectedSkuId: u,
                        startedPaymentFlowWithPaymentSources: p.current
                    }),
                    L = (0, E.planSwitchLoadingShowSpinner)(N, v, i);
                if (null == v || null == T || L) return (0, t.jsx)(c.Spinner, {
                    className: M.spinner
                });
                let A = (0, h.isPrepaidPaymentSource)(l.paymentSourceId);
                return (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsx)(j.SubscriptionPeriodResetNotice, {
                        proratedInvoice: v,
                        renewalInvoice: T
                    }), (0, t.jsxs)(x.PremiumInvoiceTable, {
                        className: M.invoice,
                        children: [(0, t.jsx)(x.PremiumInvoiceTableHeader, {
                            children: g.default.Messages.BILLING_SWITCH_PLAN_PURCHASE_DETAILS
                        }), (0, t.jsx)(j.PremiumSubscriptionChangePlanInvoiceRows, {
                            invoice: v,
                            newPlan: i,
                            isPrepaidPaymentSource: A
                        }), (0, t.jsx)(j.SubscriptionInvoiceFooter, {
                            premiumSubscription: n,
                            proratedInvoice: v,
                            renewalInvoice: T,
                            isUpdate: !0,
                            isPrepaidPaymentSource: A
                        })]
                    })]
                })
            }

            function O(e) {
                var n, i;
                let a, {
                        premiumSubscription: s,
                        newPlan: l,
                        onInvoiceError: o,
                        planGroup: u,
                        priceOptions: p,
                        preventFetch: P,
                        disabled: f,
                        isEEA: E,
                        paymentSources: v,
                        setHasAcceptedTerms: y
                    } = e,
                    {
                        analyticsLocations: T
                    } = (0, I.default)(),
                    b = (0, h.getItemsWithUpsertedPlanIdForGroup)(s, l.id, 1, new Set(u)),
                    [x, C] = (0, _.useSubscriptionInvoicePreview)({
                        subscriptionId: s.id,
                        items: b,
                        renewal: !0,
                        paymentSourceId: p.paymentSourceId,
                        currency: p.currency,
                        preventFetch: P,
                        analyticsLocations: T,
                        analyticsLocation: S.default.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW
                    });
                return (r.useEffect(() => {
                    o(C)
                }, [o, C]), null != C) ? (0, t.jsx)(c.FormErrorBlock, {
                    children: C.message
                }) : (null != x && (a = {
                    amount: x.total,
                    currency: x.currency,
                    tax: x.tax,
                    taxInclusive: x.taxInclusive
                }), null == a) ? null : (0, t.jsx)(m.default, {
                    onChange: y,
                    finePrint: (0, t.jsx)(d.default, {
                        subscriptionPlan: l,
                        paymentSourceType: null === (n = v[null !== (i = p.paymentSourceId) && void 0 !== i ? i : ""]) || void 0 === n ? void 0 : n.type,
                        basePrice: a,
                        currentSubscription: s,
                        planGroup: u
                    }),
                    forceShow: !0,
                    showPricingLink: l.currency !== A.CurrencyCodes.USD,
                    showWithdrawalWaiver: E,
                    disabled: f,
                    subscriptionPlan: l,
                    currentSubscription: s,
                    planGroup: u
                })
            }

            function G(e) {
                let n, {
                        premiumSubscription: i,
                        newPlan: r,
                        planGroup: a,
                        priceOptions: s,
                        preventFetch: l
                    } = e,
                    {
                        analyticsLocations: o
                    } = (0, I.default)(),
                    [u, d] = (0, _.useSubscriptionInvoicePreview)({
                        subscriptionId: i.id,
                        items: (0, h.getItemsWithUpsertedPlanIdForGroup)(i, r.id, 1, new Set(a)),
                        renewal: !0,
                        applyEntitlements: !1,
                        paymentSourceId: s.paymentSourceId,
                        currency: s.currency,
                        preventFetch: l,
                        analyticsLocations: o,
                        analyticsLocation: "billing_switch_plan_renewal_mutation_renewal_invoice_preview"
                    });
                if (null != d) return (0, t.jsx)(c.FormErrorBlock, {
                    children: d.message
                });
                if (null == u) return (0, t.jsx)("div", {
                    children: (0, t.jsx)(c.Spinner, {})
                });
                n = i.type === A.SubscriptionTypes.PREMIUM ? (0, h.getDisplayName)(r.id) : r.name;
                let p = (0, h.isPrepaidPaymentSource)(s.paymentSourceId);
                return (0, t.jsxs)("div", {
                    className: M.bodyText,
                    children: [(0, t.jsx)("div", {
                        className: w.renewalInvoiceDate,
                        children: g.default.Messages.BILLING_SWITCH_PLAN_CHANGE_DATE.format({
                            renewalDate: u.subscriptionPeriodStart
                        })
                    }), (0, t.jsxs)(x.PremiumInvoiceTable, {
                        className: M.invoice,
                        children: [(0, t.jsx)(x.PremiumInvoiceTableHeader, {
                            children: g.default.Messages.PREMIUM_SUBSCRIPTION_UPDATES
                        }), (0, t.jsx)(x.PremiumInvoiceTableRow, {
                            label: n,
                            value: (0, h.getFormattedRateForPlan)(r, s, !0)
                        }), (0, t.jsx)(C.default, {
                            invoice: u
                        }), (0, t.jsx)(x.PremiumInvoiceTableDivider, {}), (0, t.jsx)(j.SubscriptionInvoiceFooter, {
                            premiumSubscription: i,
                            renewalInvoice: u,
                            isUpdate: !0,
                            isPrepaidPaymentSource: p
                        })]
                    })]
                })
            }
        }
    }
]);