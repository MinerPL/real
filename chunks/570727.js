            "use strict";
            n.r(t), n.d(t, {
                PremiumSwitchPlanSelectBody: function() {
                    return Y
                },
                PremiumSwitchPlanSelectFooter: function() {
                    return W
                }
            }), n("222007");
            var s = n("37983"),
                r = n("884691"),
                l = n("627445"),
                i = n.n(l),
                a = n("446674"),
                u = n("77078"),
                o = n("405932"),
                c = n("798609"),
                d = n("837148"),
                f = n("903494"),
                m = n("635357"),
                _ = n("642906"),
                E = n("85336"),
                I = n("883558"),
                p = n("10514"),
                N = n("521012"),
                S = n("659632"),
                P = n("701909"),
                T = n("773336"),
                C = n("719923"),
                A = n("153160"),
                h = n("916187"),
                O = n("968532"),
                R = n("15733"),
                g = n("154889"),
                v = n("917247"),
                M = n("279171"),
                x = n("883662"),
                y = n("824734"),
                L = n("705820"),
                b = n("889554"),
                j = n("177998"),
                G = n("661128"),
                D = n("26785"),
                U = n("617223"),
                B = n("646718"),
                F = n("49111"),
                w = n("843455"),
                k = n("782340"),
                H = n("33769");

            function Y(e) {
                var t, n, l, E, I, N;
                let {
                    premiumSubscription: T,
                    skuId: O,
                    selectedPlanId: j,
                    setSelectedPlanId: G,
                    priceOptions: Y,
                    planOptions: W,
                    eligibleForMultiMonthPlans: Z,
                    referralTrialOfferId: K,
                    subscriptionPeriodEnd: V,
                    showTotal: z = !0,
                    discountInvoiceItems: J,
                    handleClose: X
                } = e, {
                    activeSubscription: q,
                    setSelectedPlanId: Q,
                    selectedSkuId: $,
                    selectedPlan: ee,
                    priceOptions: et
                } = (0, _.usePaymentContext)(), {
                    isGift: en,
                    giftRecipient: es,
                    selectedGiftStyle: er,
                    customGiftMessage: el,
                    setCustomGiftMessage: ei
                } = (0, m.useGiftContext)(), ea = (0, S.isCustomGiftEnabled)(es), eu = en && (0, S.shouldShowCustomGiftExperience)(es, !0, "PremiumSwitchPlanSelectBody"), {
                    confirmUpsellEnabled: eo
                } = (0, d.default)({
                    location: "PremiumSwitchPlanSelectBody"
                });
                O = null != O ? O : $, i(void 0 !== (T = null != T ? T : q), "should not be undefined");
                let [ec, ed] = (0, a.useStateFromStoresArray)([p.default], () => [null != T ? p.default.get(T.planId) : null, null != j ? p.default.get(j) : null]), ef = (0, v.usePremiumTrialOffer)(K), em = null == ef ? void 0 : ef.subscription_trial, e_ = (0, g.usePremiumDiscountOffer)(), eE = null == e_ ? void 0 : null === (t = e_.discount) || void 0 === t ? void 0 : t.plan_ids, eI = null != ed ? ed : ee, ep = r.useCallback(e => {
                    null != G ? G(e) : Q(e)
                }, [G, Q]), eN = null != Y ? Y : et;
                i(null != eN, "Price option has to be set");
                let eS = null != ef && (0, B.SubscriptionTrials)[ef.trial_id].skus.includes(O),
                    eP = null != e_ && W.some(e => null == eE ? void 0 : eE.includes(e)),
                    eT = (0, C.getPrice)(B.SubscriptionPlans.PREMIUM_MONTH_TIER_2, !1, en, eN);
                r.useEffect(() => {
                    Z && h.default.trackExposure({
                        location: "5f89bb_1"
                    })
                }, [Z]);
                let eC = (null == eI ? void 0 : eI.id) != null && W.includes(eI.id);
                r.useEffect(() => {
                    if (!eC) {
                        if (null == ec || en) ep(W[0]);
                        else if (null != ec) {
                            let e = W.find(e => e !== ec.id);
                            null != e && ep(e)
                        }
                    }
                }, [eC, en, W, ec, ep]);
                let eA = !eu && (en || !eS && !eP) && eC && z,
                    eh = (0, u.useRadioGroup)(),
                    eO = (null == eI ? void 0 : eI.id) != null ? (0, C.getPrice)(eI.id, !1, en, eN) : void 0,
                    {
                        ipCountryCode: eR
                    } = (0, R.default)(),
                    eg = "HR" === eR && null != eO && eO.currency === w.CurrencyCodes.EUR,
                    ev = (0, C.isPrepaidPaymentSource)(eN.paymentSourceId),
                    eM = (null == em ? void 0 : em.interval) === B.SubscriptionIntervalTypes.DAY ? k.default.Messages.BILLING_TRIAL_2_WEEK_PERIOD : k.default.Messages.BILLING_TRIAL_30_DAY_PERIOD,
                    ex = !en && (eP || null != em && eS && null != V),
                    ey = null == J ? void 0 : null === (E = J.find(e => e.subscriptionPlanId === B.SubscriptionPlans.PREMIUM_MONTH_TIER_2)) || void 0 === E ? void 0 : null === (l = E.discounts) || void 0 === l ? void 0 : null === (n = l.find(e => e.type === c.InvoiceDiscountTypes.SUBSCRIPTION_PLAN)) || void 0 === n ? void 0 : n.amount;
                return (0, s.jsx)(s.Fragment, {
                    children: (0, s.jsxs)("div", {
                        className: eu ? H.stepBodyCustomGift : H.stepBody,
                        children: [(0, s.jsxs)("div", {
                            className: eu ? H.bodyColumnMiddle : void 0,
                            children: [(0, s.jsx)(M.default, {
                                fromBoostCancelModal: !1,
                                className: H.legacyPricingNotice
                            }), eu && null != er && (0, s.jsx)(b.GiftAnimationOptions, {})]
                        }), (0, s.jsxs)("div", {
                            className: eu ? H.bodyColumnRight : void 0,
                            children: [ea && (0, s.jsx)(U.SendGiftToUser, {
                                giftRecipient: es
                            }), (() => {
                                if (ea && null != ei) return (0, s.jsx)(L.default, {
                                    sectionTitle: k.default.Messages.GIFT_OPTIONAL_MESSAGE,
                                    onTextChange: e => ei(e),
                                    pendingText: el,
                                    currentText: el
                                })
                            })(), null != ec && !en && (0, s.jsx)("div", {
                                className: H.bodyText,
                                children: function(e, t) {
                                    let n = k.default.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_MONTH,
                                        s = k.default.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_1_YEAR,
                                        r = (() => {
                                            switch (e.interval) {
                                                case B.SubscriptionIntervalTypes.YEAR:
                                                    return n;
                                                case B.SubscriptionIntervalTypes.MONTH:
                                                default:
                                                    return s
                                            }
                                        })(),
                                        l = e.skuId;
                                    switch (t) {
                                        case B.PremiumSubscriptionSKUs.TIER_0:
                                            switch (l) {
                                                case B.PremiumSubscriptionSKUs.TIER_1:
                                                    return k.default.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_TIER_1_TO_TIER_0;
                                                case B.PremiumSubscriptionSKUs.TIER_2:
                                                    return k.default.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_TIER_0;
                                                default:
                                                    return r
                                            }
                                        case B.PremiumSubscriptionSKUs.TIER_1:
                                            switch (l) {
                                                case B.PremiumSubscriptionSKUs.TIER_0:
                                                    return k.default.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_1;
                                                case B.PremiumSubscriptionSKUs.TIER_2:
                                                    return k.default.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_TIER_1;
                                                default:
                                                    return r
                                            }
                                        case B.PremiumSubscriptionSKUs.TIER_2:
                                            switch (l) {
                                                case B.PremiumSubscriptionSKUs.TIER_0:
                                                case B.PremiumSubscriptionSKUs.TIER_1:
                                                    return k.default.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_2;
                                                case B.PremiumSubscriptionSKUs.TIER_2:
                                                    return e.interval === B.SubscriptionIntervalTypes.MONTH ? k.default.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_2_YEAR.format({
                                                        numFreeGuildSubscriptions: B.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM
                                                    }) : r;
                                                default:
                                                    return r
                                            }
                                        default:
                                            return r
                                    }
                                }(ec, O)
                            }), (I = eS, N = eP, eu ? (0, s.jsx)(u.FormTitle, {
                                children: k.default.Messages.GIFT_SUBSCRIPTION_SELECTION
                            }) : ex ? I ? (0, s.jsxs)("div", {
                                children: [(0, s.jsx)(u.Text, {
                                    variant: "text-sm/normal",
                                    className: H.trialPlanSelectHeader,
                                    children: k.default.Messages.BILLING_TRIAL_PAYMENT_MODAL_INFO.format({
                                        trialEnd: V,
                                        trialPeriod: eM
                                    })
                                }), (0, s.jsx)("hr", {
                                    className: H.planSelectSeparator
                                })]
                            }) : N && null != ey && null != eT ? (0, s.jsxs)("div", {
                                children: [(0, s.jsx)(u.Text, {
                                    variant: "text-sm/normal",
                                    className: H.trialPlanSelectHeader,
                                    children: k.default.Messages.BILLING_DISCOUNT_PAYMENT_MODAL_INFO.format({
                                        discountedPrice: (0, A.formatPrice)(eT.amount - ey, eT.currency),
                                        regularPrice: (0, A.formatPrice)(eT.amount, eT.currency)
                                    })
                                }), (0, s.jsx)("hr", {
                                    className: H.planSelectSeparator
                                })]
                            }) : void 0 : (0, s.jsx)("div", {
                                className: H.selectPlanChooseTitle,
                                children: k.default.Messages.BILLING_SWITCH_PLAN_CHOOSE_ONE
                            })), (0, s.jsx)("div", {
                                ...eh,
                                children: W.map(e => (0, s.jsx)(D.default, {
                                    planId: e,
                                    premiumSubscription: en ? null : null != T ? T : null,
                                    selectPlan: ep,
                                    selected: (null == eI ? void 0 : eI.id) === e,
                                    priceOptions: eN,
                                    shouldShowUpdatedPaymentModal: ex,
                                    isEligibleForDiscount: eP,
                                    discountAmountOff: ey
                                }, e))
                            }), (0, s.jsx)("div", {
                                children: eA && null != eI && null != eO ? (0, s.jsxs)("div", {
                                    children: [(0, s.jsx)("div", {
                                        className: H.selectPlanDivider
                                    }), (0, s.jsx)(x.PremiumInvoiceTableTotalRow, {
                                        label: k.default.Messages.BILLING_PAYMENT_BREAKDOWN_TOTAL,
                                        value: (0, s.jsx)(y.default, {
                                            price: eO.amount,
                                            currency: eO.currency,
                                            intervalType: en ? null : eI.interval,
                                            intervalCount: eI.intervalCount,
                                            isPrepaidPaymentSource: ev
                                        }),
                                        className: H.selectPlanTotalRow
                                    })]
                                }) : null
                            }), eg && (0, s.jsx)(o.default, {
                                message: k.default.Messages.LOCALIZED_PRICING_HRK_EURO_WARNING.format({
                                    kunaPriceWithCurrency: (0, A.formatPrice)(7.5345 * eO.amount, w.CurrencyCodes.HRK)
                                })
                            }), !en && !ex && z && (0, s.jsx)(o.default, {
                                message: k.default.Messages.BILLING_FINAL_PRICE_MAY_CHANGE.format({
                                    documentationLink: P.default.getArticleURL(F.HelpdeskArticles.LOCALIZED_PRICING)
                                })
                            }), eo && en && (0, s.jsx)(f.default, {
                                onClose: X
                            })]
                        })]
                    })
                })
            }

            function W(e) {
                let {
                    onStepChange: t,
                    selectedPlanId: n,
                    paymentSources: r,
                    onBackClick: l,
                    showBackButton: i,
                    planOptions: a,
                    shouldRenderUpdatedPaymentModal: o = !1,
                    isTrial: c
                } = e, {
                    paymentSources: d,
                    selectedPlan: f
                } = (0, _.usePaymentContext)(), {
                    isGift: E
                } = (0, m.useGiftContext)();
                return r = null != r ? r : d, n = null != n ? n : null == f ? void 0 : f.id, (0, s.jsxs)(s.Fragment, {
                    children: [null != n && a.includes(n) ? (0, s.jsx)(Z, {
                        paymentSources: r,
                        onStepChange: t,
                        selectedPlanId: n,
                        isGift: E,
                        shouldRenderUpdatedPaymentModal: o,
                        isTrial: c
                    }) : (0, s.jsx)(u.Button, {
                        disabled: !0,
                        children: k.default.Messages.SELECT
                    }), i ? (0, s.jsx)(j.default, {
                        onClick: l
                    }) : null]
                })
            }

            function Z(e) {
                let {
                    onStepChange: t,
                    selectedPlanId: n,
                    isGift: r,
                    paymentSources: l,
                    shouldRenderUpdatedPaymentModal: i,
                    isTrial: o
                } = e, c = (0, a.useStateFromStores)([N.default], () => N.default.getPremiumTypeSubscription()), {
                    hasEntitlements: d
                } = (0, G.useSubscriptionEntitlements)(n, r), f = null != c && null != c.paymentSourceId || Object.keys(l).length > 0 || d && !o;
                var m = i ? k.default.Messages.NEXT : k.default.Messages.SELECT,
                    _ = E.Step.ADD_PAYMENT_STEPS;
                return f ? _ = E.Step.REVIEW : (0, T.isDesktop)() && function() {
                    let {
                        experiment: e
                    } = O.default.getCurrentConfig({
                        location: "5f89bb_2"
                    });
                    if (e === O.CheckoutV2ChildExperiments.BROWSER_AUTOFILL) {
                        let {
                            enabled: e
                        } = I.default.getCurrentConfig({
                            location: "5f89bb_3"
                        }, {
                            autoTrackExposure: !0
                        });
                        return e
                    }
                    return !1
                }() && (_ = E.Step.AWAITING_BROWSER_CHECKOUT, m = k.default.Messages.CONTINUE_IN_BROWSER), (0, s.jsx)(u.Button, {
                    onClick: () => t(_),
                    children: m
                })
            }