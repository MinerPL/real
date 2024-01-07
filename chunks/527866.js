            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return Y
                }
            }), n("222007");
            var s = n("37983"),
                r = n("884691"),
                l = n("627445"),
                i = n.n(l),
                a = n("976979"),
                u = n("446674"),
                o = n("669491"),
                c = n("77078"),
                d = n("335430"),
                f = n("703332"),
                m = n("740055"),
                _ = n("545876"),
                E = n("736978"),
                I = n("635357"),
                p = n("642906"),
                N = n("286350"),
                S = n("102492"),
                P = n("176108"),
                T = n("102985"),
                C = n("160299"),
                A = n("10514"),
                h = n("68238"),
                O = n("659632"),
                R = n("719923"),
                g = n("153160"),
                v = n("210721"),
                M = n("809071"),
                x = n("154889"),
                y = n("883662"),
                L = n("623003"),
                b = n("65324"),
                j = n("570727"),
                G = n("146163"),
                D = n("661128"),
                U = n("617223"),
                B = n("646718"),
                F = n("49111"),
                w = n("843455"),
                k = n("782340"),
                H = n("615689");

            function Y(e) {
                var t, n, l;
                let Y, W, {
                        selectedPlanId: Z,
                        paymentSources: K,
                        priceOptions: V,
                        currencies: z,
                        onCurrencyChange: J,
                        onPaymentSourceChange: X,
                        handlePaymentSourceAdd: q,
                        setHasAcceptedTerms: Q,
                        legalTermsNodeRef: $,
                        hasLegalTermsFlash: ee,
                        trialId: et,
                        trialFooterMessageOverride: en,
                        reviewWarningMessage: es,
                        metadata: er,
                        purchaseState: el,
                        hideSubscriptionDetails: ei,
                        referralTrialOfferId: ea,
                        isTrial: eu = !1,
                        isDiscount: eo = !1,
                        handleClose: ec
                    } = e,
                    {
                        isEmbeddedIAP: ed,
                        activeSubscription: ef,
                        selectedSkuId: em,
                        defaultPlanId: e_,
                        isPremium: eE,
                        startedPaymentFlowWithPaymentSourcesRef: eI
                    } = (0, p.usePaymentContext)(),
                    {
                        isGift: ep,
                        giftRecipient: eN,
                        selectedGiftStyle: eS
                    } = (0, I.useGiftContext)(),
                    eP = (0, x.usePremiumDiscountOffer)(),
                    eT = null == eP ? void 0 : null === (t = eP.discount) || void 0 === t ? void 0 : t.plan_ids.some(e => B.SubscriptionPlanInfo[e].skuId === em),
                    eC = !ep && null != eP && null != em && eT,
                    eA = (0, u.useStateFromStores)([A.default], () => A.default.get(Z));
                i(null != eA, "Missing plan");
                let eh = [{
                        planId: eA.id,
                        quantity: 1
                    }],
                    eO = el === N.PurchaseState.PURCHASING || el === N.PurchaseState.COMPLETED,
                    eR = ep || eO,
                    [eg, ev] = (0, M.useSubscriptionInvoicePreview)({
                        items: eh,
                        renewal: !1,
                        preventFetch: eR,
                        applyEntitlements: !0,
                        paymentSourceId: V.paymentSourceId,
                        currency: V.currency,
                        trialId: et,
                        metadata: er
                    }),
                    [eM, ex] = (0, M.useSubscriptionInvoicePreview)({
                        items: eh,
                        renewal: !0,
                        preventFetch: eR,
                        trialId: et,
                        paymentSourceId: V.paymentSourceId,
                        currency: V.currency,
                        metadata: er
                    }),
                    [ey, eL] = (0, M.useSubscriptionInvoicePreview)({
                        items: [{
                            planId: B.SubscriptionPlans.PREMIUM_MONTH_TIER_2,
                            quantity: 1
                        }],
                        renewal: !0,
                        preventFetch: !eC,
                        trialId: et,
                        paymentSourceId: V.paymentSourceId,
                        currency: V.currency,
                        metadata: er
                    }),
                    eb = ep && (0, O.shouldShowCustomGiftExperience)(eN, !0, "PremiumSubscriptionReview"),
                    ej = null !== (l = null != ev ? ev : ex) && void 0 !== l ? l : eL,
                    eG = (0, u.useStateFromStores)([T.default], () => T.default.enabled),
                    eD = V.paymentSourceId,
                    {
                        hasEntitlements: eU,
                        entitlements: eB
                    } = (0, D.useSubscriptionEntitlements)(eA.id, ep),
                    eF = (0, R.isPrepaidPaymentSource)(V.paymentSourceId),
                    ew = (0, S.checkNoPaymentTrialEnabled)(et, eD, Z),
                    ek = (0, P.inOneStepSubscriptionCheckout)({
                        isTrial: eu,
                        isGift: ep,
                        selectedSkuId: em,
                        startedPaymentFlowWithPaymentSources: eI.current
                    }),
                    [eH, eY] = r.useState(null == eg ? void 0 : eg.subscriptionPeriodEnd);
                r.useEffect(() => {
                    null == eH && eY(null == eg ? void 0 : eg.subscriptionPeriodEnd)
                }, [null == eg ? void 0 : eg.subscriptionPeriodEnd, eH]);
                let eW = r.useMemo(() => (0, R.getPremiumPlanOptions)({
                        skuId: em,
                        isPremium: eE,
                        multiMonthPlans: [],
                        currentSubscription: ef,
                        isGift: ep,
                        isEligibleForTrial: eu,
                        defaultPlanId: e_,
                        defaultToMonthlyPlan: !1
                    }), [em, ef, ep, e_, eE, eu]),
                    eZ = (0, P.planSwitchLoadingShowSpinner)(ek, eg, eA);
                if (null != ej) {
                    let e = ej.message;
                    return ej.code === E.ErrorCodes.INVALID_CURRENCY_FOR_PAYMENT_SOURCE && (e = k.default.Messages.BILLING_ERROR_UNSUPPORTED_CURRENCY), (0, s.jsx)(c.FormErrorBlock, {
                        children: e
                    })
                }
                if (ep) W = (0, s.jsx)(G.SubscriptionInvoiceGift, {
                    paymentSourceId: V.paymentSourceId,
                    plan: eA,
                    className: H.invoice,
                    isPrepaidPaymentSource: eF,
                    isCustomGift: eb
                });
                else if (eu && null != eg) W = (0, s.jsxs)("div", {
                    children: [(0, s.jsx)(y.PremiumInvoiceTableDivider, {
                        negativeMarginTop: !0
                    }), (0, s.jsxs)(y.PremiumInvoiceTable, {
                        className: H.invoice,
                        children: [(0, s.jsxs)("div", {
                            className: H.trialPriceLine,
                            children: [(0, s.jsx)(c.Text, {
                                variant: "text-md/bold",
                                children: k.default.Messages.BILLING_PAYMENT_BREAKDOWN_TOTAL
                            }), (0, s.jsx)(c.Text, {
                                variant: "text-md/normal",
                                children: k.default.Messages.BILLING_TRIAL_PRICE_NOW.format({
                                    price: (0, g.formatPrice)(0, eg.currency, {
                                        maximumFractionDigits: 0
                                    })
                                })
                            })]
                        }), (0, s.jsx)("div", {
                            className: H.afterTrialPriceLine,
                            children: (0, s.jsx)(G.PremiumTrialInvoiceTableRow, {
                                invoice: eg,
                                plan: eA
                            })
                        })]
                    })]
                });
                else {
                    if (null == eg || null == eM || eZ) return (0, s.jsx)("div", {
                        className: H.spinnerWrapper,
                        children: (0, s.jsx)(c.Spinner, {})
                    });
                    eu && eg.subscriptionPeriodEnd !== eM.subscriptionPeriodEnd && (Y = eg.subscriptionPeriodEnd), W = (0, s.jsxs)(y.PremiumInvoiceTable, {
                        className: H.invoice,
                        children: [(0, s.jsx)(y.PremiumInvoiceTableHeader, {
                            children: k.default.Messages.BILLING_SWITCH_PLAN_PURCHASE_DETAILS
                        }), (0, s.jsx)(G.PremiumSubscriptionChangePlanInvoiceRows, {
                            invoice: eg,
                            newPlan: eA,
                            isPrepaidPaymentSource: eF,
                            referralTrialOfferId: ea
                        }), eF ? null : (0, s.jsx)(G.SubscriptionInvoiceFooter, {
                            renewalInvoice: eM,
                            isTrial: eu,
                            priceOptions: V,
                            overrideRenewalDate: Y,
                            trialFooterMessageOverride: en,
                            hideSubscriptionDetails: ei
                        })]
                    })
                }
                let eK = a.CountryCodesSets.EEA_COUNTRIES.has(C.default.ipCountryCodeWithFallback),
                    {
                        checkboxLabel: eV,
                        checkboxClassname: ez,
                        checkboxLabelClassname: eJ
                    } = function(e, t, n) {
                        let s = null,
                            r = null,
                            l = null;
                        if (e && null != t) {
                            let {
                                intervalType: e,
                                intervalCount: i
                            } = R.default.getIntervalForInvoice(t), a = (0, g.formatRate)((0, g.formatPrice)(t.total, t.currency), e, i), u = null != n ? n : t.subscriptionPeriodEnd;
                            s = k.default.Messages.BILLING_LEGAL_MUMBO_JUMBO_TRIAL_TERMS_LABEL.format({
                                termsURL: F.MarketingURLs.TERMS,
                                paidURL: F.MarketingURLs.PAID_TERMS,
                                rate: a,
                                renewalDate: u
                            }), r = H.trialCheckbox, l = H.trialCheckboxLabel
                        }
                        return {
                            checkboxLabel: s,
                            checkboxClassname: r,
                            checkboxLabelClassname: l
                        }
                    }(null != eu && eu, eM, Y),
                    eX = k.default.Messages.BILLING_SELECT_PLAN_GUILD_SUBSCRIPTION.format({
                        planName: eA.name
                    });
                return ep && !eb ? eX = k.default.Messages.PAYMENT_MODAL_SUBTITLE_PREMIUM_GIFT : ep && eb ? eX = "" : (0, R.isPremiumSubscriptionPlan)(eA.id) && (eX = R.default.getBillingReviewSubheader(null, eA)), ew ? null : (0, s.jsxs)("div", {
                    className: H.stepBody,
                    children: [null != es && (0, s.jsxs)("div", {
                        className: H.reviewWarningMessageContainer,
                        children: [(0, s.jsx)(h.default, {
                            color: o.default.unsafe_rawColors.YELLOW_300.css,
                            width: 20,
                            height: 20
                        }), (0, s.jsx)(c.Text, {
                            className: H.reviewWarningMessage,
                            variant: "text-sm/normal",
                            children: es
                        })]
                    }), ek && (0, s.jsxs)("div", {
                        children: [(0, s.jsx)(y.PremiumInvoiceTableDivider, {
                            negativeMarginTop: !0
                        }), (0, s.jsx)(j.PremiumSwitchPlanSelectBody, {
                            planOptions: eW,
                            eligibleForMultiMonthPlans: !1,
                            referralTrialOfferId: void 0,
                            selectedPlanId: Z,
                            subscriptionPeriodEnd: eH,
                            showTotal: !1,
                            discountInvoiceItems: eC ? null == ey ? void 0 : ey.invoiceItems : void 0,
                            handleClose: ec
                        }), (0, s.jsx)(y.PremiumInvoiceTableDivider, {})]
                    }), !eu && (0, s.jsx)(c.FormTitle, {
                        tag: c.FormTitleTags.H5,
                        children: eX
                    }), eb && null != eS && (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)(b.default, {
                            defaultAnimationState: v.AnimationState.LOOP,
                            giftStyle: eS,
                            shouldAnimate: !0,
                            className: H.giftMainAnimation
                        }), (0, s.jsx)(U.SendGiftToUser, {
                            giftRecipient: eN
                        })]
                    }), W, (0, s.jsxs)("div", {
                        className: H.paymentSourceWrapper,
                        children: [eu ? (0, s.jsx)(c.FormTitle, {
                            tag: c.FormTitleTags.H5,
                            className: H.formTitle,
                            children: k.default.Messages.BILLING_STEP_PAYMENT_METHOD
                        }) : (0, s.jsx)(c.FormTitle, {
                            tag: c.FormTitleTags.H5,
                            children: k.default.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_TITLE
                        }), (0, s.jsx)(m.default, {
                            paymentSources: Object.values(K),
                            selectedPaymentSourceId: eD,
                            prependOption: eU && !eu ? {
                                label: k.default.Messages.ATTACH_PAYMENT_SOURCE_PROMPT_OPTION_OPTIONAL,
                                value: null
                            } : null,
                            onChange: X,
                            onPaymentSourceAdd: q,
                            hidePersonalInformation: eG,
                            isTrial: eu
                        }), eU && null == eD ? (0, s.jsx)("div", {
                            className: H.paymentSourceOptionalWarning,
                            children: k.default.Messages.ATTACH_PAYMENT_SOURCE_OPTIONAL_WITH_ENTITLEMENTS_WARNING.format({
                                months: eB.length
                            })
                        }) : null, eo ? null : (0, s.jsxs)(d.CurrencyWrapper, {
                            currencies: z,
                            className: H.currencyWrapper,
                            children: [(0, s.jsx)(c.FormTitle, {
                                tag: c.FormTitleTags.H5,
                                children: k.default.Messages.PAYMENT_CURRENCY
                            }), (0, s.jsx)(d.default, {
                                selectedCurrency: V.currency,
                                currencies: z,
                                onChange: J
                            })]
                        })]
                    }), (0, s.jsx)(L.default, {
                        isActive: ee,
                        ref: $,
                        children: (0, s.jsx)(_.default, {
                            onChange: Q,
                            forceShow: !0,
                            checkboxLabel: eV,
                            checkboxClassname: ez,
                            checkboxLabelClassname: eJ,
                            finePrint: null != en ? en : (0, s.jsx)(f.default, {
                                hide: eu || eo,
                                subscriptionPlan: eA,
                                renewalInvoice: eM,
                                isGift: ep,
                                paymentSourceType: null === (n = K[null != eD ? eD : ""]) || void 0 === n ? void 0 : n.type,
                                isEmbeddedIAP: ed,
                                basePrice: (0, R.getPrice)(eA.id, !1, ep, V)
                            }),
                            showPricingLink: eA.currency !== w.CurrencyCodes.USD,
                            showWithdrawalWaiver: eK,
                            disabled: eO,
                            isTrial: eu && null == en,
                            isDiscount: eo,
                            subscriptionPlan: eA,
                            isGift: ep
                        })
                    })]
                })
            }