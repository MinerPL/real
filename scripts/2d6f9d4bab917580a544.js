(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["11047"], {
        116552: function(e, t, n) {
            "use strict";
            e.exports = n.p + "d7d2dfa9df5f112808a0.svg"
        },
        698745: function(e, t, n) {
            "use strict";
            e.exports = n.p + "a1d5e876c5e7b9b34836.svg"
        },
        141195: function(e, t, n) {
            "use strict";
            e.exports = n.p + "57ff574d8430697c11c7.svg"
        },
        951573: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var l = n("920040");
            n("773670");
            var a = n("498225"),
                s = n("77078"),
                i = n("206230"),
                u = n("22368"),
                o = n("145131"),
                r = n("467831"),
                c = n("259329");

            function d(e) {
                let {
                    purchaseState: t,
                    currentStep: n,
                    onClose: d
                } = e, [S, p] = (0, u.usePaymentModalAnimationScene)({
                    purchaseState: t,
                    currentStep: n,
                    initialScene: r.PremiumPaymentGuildAnimation.Scenes.ENTRY,
                    purchaseScene: r.PremiumPaymentGuildAnimation.Scenes.STARS,
                    errorScene: r.PremiumPaymentGuildAnimation.Scenes.ERROR,
                    successScene: r.PremiumPaymentGuildAnimation.Scenes.SUCCESS
                }), E = (0, a.useStateFromStores)([i.default], () => i.default.useReducedMotion);
                return (0, l.jsxs)(s.ModalHeader, {
                    align: o.default.Align.START,
                    className: c.header,
                    separator: !1,
                    children: [(0, l.jsx)(r.PremiumPaymentGuildAnimation, {
                        className: c.animation,
                        nextScene: S,
                        onScenePlay: e => p(r.PremiumPaymentGuildAnimation.getNextScene(e)),
                        pauseWhileUnfocused: !1,
                        pause: E
                    }), (0, l.jsx)("div", {
                        className: c.headerTitle
                    }), (0, l.jsx)(s.ModalCloseButton, {
                        onClick: d,
                        className: c.closeButton
                    })]
                })
            }
        },
        860634: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GuildBoostPurchaseModal: function() {
                    return ee
                },
                default: function() {
                    return et
                }
            });
            var l, a = n("920040"),
                s = n("773670"),
                i = n("161179"),
                u = n.n(i),
                o = n("365444"),
                r = n("462567"),
                c = n("498225"),
                d = n("819855"),
                S = n("77078"),
                p = n("850068"),
                E = n("583367"),
                m = n("157009"),
                P = n("612039"),
                _ = n("812204"),
                f = n("685665"),
                I = n("308592"),
                M = n("245187"),
                T = n("642906"),
                N = n("85336"),
                A = n("286350"),
                y = n("396053"),
                R = n("818711"),
                L = n("877261"),
                C = n("724522"),
                U = n("273619"),
                h = n("161778"),
                g = n("305961"),
                O = n("625634"),
                b = n("926223"),
                D = n("357957"),
                x = n("10514"),
                B = n("521012"),
                k = n("145131"),
                G = n("599110"),
                j = n("427459"),
                v = n("719923"),
                F = n("713518"),
                w = n("380186"),
                W = n("951573"),
                Y = n("658206"),
                H = n("985074"),
                V = n("49111"),
                K = n("646718"),
                z = n("809924"),
                q = n("782340"),
                J = n("85534");
            (l || (l = {})).PREMIUM = "discord://app/settings/nitro";
            let X = K.SubscriptionPlans.NONE_MONTH,
                Q = [N.Step.PLAN_SELECT, N.Step.REVIEW, N.Step.CONFIRM],
                Z = [N.Step.PLAN_SELECT, N.Step.ADD_PAYMENT_STEPS, N.Step.REVIEW, N.Step.CONFIRM];
            async function $(e) {
                await (0, E.fetchGuildBoostSlots)();
                let t = (0, j.getAvailableGuildBoostSlots)(O.default.boostSlots);
                return (0, E.applyToGuild)(e, t.map(e => e.id))
            }

            function ee(e) {
                var t, n;
                let i, {
                        transitionState: E,
                        onClose: ee,
                        closeGuildPerksModal: et,
                        analyticsLocations: en,
                        analyticsLocation: el,
                        analyticsSourceLocation: ea,
                        guildId: es,
                        onSubscribeComplete: ei,
                        totalNumberOfSlotsToAssign: eu = 1,
                        disablePremiumUpsell: eo = !1,
                        onSubscriptionConfirmation: er,
                        applicationId: ec
                    } = e,
                    {
                        activeSubscription: ed,
                        blockedPayments: eS
                    } = (0, T.usePaymentContext)(),
                    ep = (0, c.useStateFromStores)([B.default], () => B.default.hasFetchedSubscriptions()),
                    eE = null != ed ? ed.paymentSourceId : null,
                    em = (0, c.useStateFromStores)([x.default], () => null != ed ? (0, w.getOrFetchSubscriptionPlan)(ed.planId) : null),
                    eP = (0, c.useStateFromStores)([x.default], () => null == ed || null != x.default.get(ed.planId)),
                    e_ = (0, c.useStateFromStores)([x.default], () => null == em ? x.default.get(X) : em),
                    ef = (0, c.useStateFromStores)([h.default], () => h.default.theme),
                    eI = s.useRef((0, j.getAvailableGuildBoostSlots)(O.default.boostSlots)).current,
                    eM = (0, c.useStateFromStores)([D.default], () => D.default.defaultPaymentSourceId),
                    eT = (0, C.useSharedPaymentModal)(null != eE ? eE : ep ? eM : null),
                    {
                        paymentSources: eN,
                        setPurchaseError: eA,
                        paymentSourceId: ey,
                        setIsSubmittingCurrentStep: eR,
                        paymentAuthenticationState: eL,
                        setPaymentSourceId: eC,
                        isSubmittingCurrentStep: eU,
                        paymentError: eh,
                        purchaseError: eg,
                        purchaseErrorBlockRef: eO
                    } = eT,
                    eb = Object.keys(eN).length > 0,
                    [eD, ex] = s.useState(eu - eI.length),
                    [eB, ek] = s.useState(!1),
                    eG = (0, c.useStateFromStores)([b.default], () => b.default.popupCallbackCalled),
                    ej = (0, I.useSubscriptionPlansLoaded)(),
                    ev = s.useMemo(() => null != ed && eP && ej ? (0, R.calculateAdditionalPlansWithPremiumGuildAdjustment)(ed, eD) : [{
                        planId: K.SubscriptionPlans.PREMIUM_MONTH_GUILD,
                        quantity: eD
                    }], [ed, eP, eD, ej]),
                    [eF, ew] = (0, o.useLazyValue)(() => [(0, r.v4)(), Date.now()]),
                    {
                        analyticsLocations: eW
                    } = (0, f.default)(en, _.default.GUILD_BOOST_PURCHASE_MODAL),
                    eY = s.useMemo(() => {
                        var e;
                        return {
                            load_id: eF,
                            payment_type: z.PurchaseTypeToAnalyticsPaymentType[z.PurchaseTypes.SUBSCRIPTION],
                            sku_id: K.PremiumSubscriptionSKUs.GUILD,
                            subscription_type: V.SubscriptionTypes.PREMIUM,
                            subscription_plan_id: null !== (t = null === (e = ev.find(e => {
                                let {
                                    planId: t
                                } = e;
                                return K.PREMIUM_GUILD_SUBSCRIPTION_PLANS.has(t)
                            })) || void 0 === e ? void 0 : e.planId) && void 0 !== t ? t : K.SubscriptionPlans.PREMIUM_MONTH_GUILD,
                            quantity: eD,
                            location: el,
                            source: ea,
                            location_stack: eW
                        }
                    }, [eF, el, eW, ea, ev, eD]);
                s.useEffect(() => {
                    (0, F.fetchSubscriptionPlansOnNewPaymentSource)(ey)
                }, [ey]), s.useEffect(() => {
                    let e = async () => {
                        if (!0 === eG) try {
                            if (null == b.default.redirectedPaymentId) return;
                            await (0, p.redirectedPaymentSucceeded)(b.default.redirectedPaymentId), e$(N.Step.CONFIRM), eJ(A.PurchaseState.COMPLETED), null != es && await $(es), null != ei && ei()
                        } catch (e) {
                            eJ(A.PurchaseState.FAIL), eA(e), G.default.track(V.AnalyticEvents.PAYMENT_FLOW_FAILED, {
                                ...eY,
                                payment_gateway: V.PaymentGateways.STRIPE,
                                payment_source_id: ey,
                                duration_ms: Date.now() - ew
                            })
                        } finally {
                            eR(!1), (0, p.resetPaymentIntentId)()
                        }
                    };
                    e()
                }, [eG]), s.useEffect(() => {
                    !B.default.hasFetchedSubscriptions() && (0, p.fetchSubscriptions)(), G.default.track(V.AnalyticEvents.PAYMENT_FLOW_STARTED, {
                        ...eY,
                        guild_id: es,
                        application_id: ec
                    }), null != ed && null != ed.renewalMutations && G.default.track(V.AnalyticEvents.PREMIUM_GUILD_PENDING_MODAL, {
                        location: el,
                        guild_id: es
                    })
                }, []);
                let [eH, eV] = s.useState(Q), [eK, ez] = s.useState(N.Step.PLAN_SELECT), [eq, eJ] = s.useState(A.PurchaseState.WAITING), [eX, eQ] = s.useState(!0), eZ = (0, o.useStableMemo)(() => Date.now(), [eK]), e$ = s.useCallback((e, t) => {
                    ez(e), eA(null);
                    let n = Date.now();
                    G.default.track(V.AnalyticEvents.PAYMENT_FLOW_STEP, {
                        ...eY,
                        from_step: null != t ? t : eK,
                        to_step: e === N.Step.ADD_PAYMENT_STEPS ? N.Step.PAYMENT_TYPE : e,
                        step_duration_ms: n - eZ,
                        flow_duration_ms: n - ew,
                        guild_id: es,
                        application_id: ec
                    })
                }, [eA, eY, eK, eZ, ew, es, ec]), e0 = () => {
                    ee(eq === A.PurchaseState.COMPLETED)
                }, e1 = null != ed && ed.isPurchasedExternally;
                s.useEffect(() => {
                    eL !== L.PaymentAuthenticationState.PENDING && eK !== N.Step.CONFIRM && null != eE && (eH !== Q && eV(Q), !Q.includes(eK) && eK !== N.Step.PREMIUM_UPSELL && e$(N.Step.REVIEW)), eK === N.Step.ADD_PAYMENT_STEPS && eH !== Z && eV(Z), e1 && eK !== N.Step.PLAN_SELECT && ez(N.Step.PLAN_SELECT)
                }, [eK, e$, e1, eL, ed, eE, eH]), (0, L.usePaymentStepForAuthentication)(eK, eL, e$), (0, N.usePurchaseStateForStep)(eK, eq, eJ);
                let e5 = s.useRef(null),
                    [e7, e4] = (0, P.default)(!1, 500),
                    [e9, e6] = s.useState(null),
                    [e2, e8] = s.useState([]),
                    [e3, te] = s.useState(!1);
                s.useEffect(() => {
                    let e;
                    if (!ej) return;
                    let t = x.default.get(K.SubscriptionPlans.PREMIUM_MONTH_GUILD);
                    null != t && e8(e = (0, F.getCurrencies)(K.SubscriptionPlans.PREMIUM_MONTH_GUILD, ey, !1)), null == ey && null != ed && null != ed.paymentSourceId ? e6(ed.currency) : null != e && e6(e[0])
                }, [ey, ed, ej, JSON.stringify(e2)]);
                let tt = (0, C.AddPaymentFlow)({
                    paymentModalArgs: eT,
                    initialStep: N.Step.PAYMENT_TYPE,
                    prependSteps: [N.Step.PLAN_SELECT],
                    appendSteps: [N.Step.REVIEW, N.Step.CONFIRM],
                    breadcrumpSteps: eH,
                    currentBreadcrumpStep: eK,
                    onReturn: () => {
                        e$(Object.values(eN).length < 1 ? N.Step.PLAN_SELECT : N.Step.REVIEW, N.Step.PAYMENT_TYPE)
                    },
                    onComplete: e => {
                        e$(N.Step.REVIEW, e)
                    },
                    onStepChange: e => {
                        let {
                            currentStep: t,
                            toStep: n
                        } = e, l = Date.now();
                        G.default.track(V.AnalyticEvents.PAYMENT_FLOW_STEP, {
                            ...eY,
                            from_step: t,
                            to_step: n,
                            step_duration_ms: l - eZ,
                            flow_duration_ms: l - ew,
                            guild_id: es
                        })
                    }
                });
                if (eS) i = (0, a.jsx)(M.BlockedPaymentsContentModal, {
                    onClose: e0
                });
                else if (ep && eP && ej && null != e9 && "" !== e9) {
                    if (null != ed && null != ed.renewalMutations) i = (0, a.jsx)(S.ModalContent, {
                        children: (0, a.jsx)("p", {
                            className: J.copy,
                            children: q.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_ERROR_PENDING_MUTATION
                        })
                    });
                    else if (eK === N.Step.PREMIUM_UPSELL) {
                        u(null != e_, "Missing nextPremiumSubscriptionPlan"), u(e9, "Currency not defined");
                        let e = null != ey ? {
                            paymentSourceId: ey,
                            currency: e9
                        } : {
                            currency: e9
                        };
                        i = (0, a.jsx)(H.default, {
                            premiumSubscriptionPlan: e_,
                            analyticsLocation: el,
                            analyticsSourceLocation: ea,
                            onClose: e0,
                            onBack: () => e$(N.Step.PLAN_SELECT),
                            onSkip: () => e$(null != eE || eb ? N.Step.REVIEW : N.Step.ADD_PAYMENT_STEPS),
                            onSubscriptionConfirmation: er,
                            priceOptions: e
                        })
                    } else {
                        let e, t, s, o;
                        u(e9, "Currency not defined");
                        let r = null != ey ? {
                            paymentSourceId: ey,
                            currency: e9
                        } : {
                            currency: e9
                        };
                        switch (eK) {
                            case N.Step.PLAN_SELECT:
                                u(null != es, "Missing guildId"), u(null != e_, "Missing nextPremiumSubscriptionPlan"), e = (0, a.jsx)(Y.GuildBoostingPlanSelect, {
                                    premiumSubscriptionPlan: e_,
                                    numGuildBoosts: eD,
                                    setNumGuildBoosts: ex,
                                    setForceDisableSubmitButton: eQ,
                                    premiumSubscription: ed,
                                    existingAvailableSlots: eI,
                                    onClickPremiumSubscriptionLink: () => {
                                        if (__BILLING_STANDALONE__) {
                                            window.location.href = l.PREMIUM;
                                            return
                                        }
                                        e0(), null != et && et(), (0, y.navigateToPremiumMarketingPage)()
                                    },
                                    guildId: es,
                                    priceOptions: r
                                }), e1 && null != ed && null != ed.paymentGateway && (e = (0, a.jsxs)(a.Fragment, {
                                    children: [(0, a.jsx)(S.FormErrorBlock, {
                                        className: J.externalErrorBlock,
                                        children: q.default.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_EXTERNAL.format({
                                            paymentGatewayName: z.PaymentGatewayToFriendlyName[ed.paymentGateway]
                                        })
                                    }), e]
                                })), s = (0, a.jsx)(S.Button, {
                                    look: S.Button.Looks.LINK,
                                    color: (0, d.isThemeLight)(ef) ? S.Button.Colors.PRIMARY : S.Button.Colors.WHITE,
                                    onClick: e0,
                                    children: q.default.Messages.NEVERMIND
                                }), o = (0, a.jsx)(S.Button, {
                                    type: "submit",
                                    disabled: eX || 0 === eD || e1,
                                    onClick: () => {
                                        if (!eo && (null == em || em.premiumSubscriptionType !== K.PremiumTypes.TIER_2)) {
                                            e$(N.Step.PREMIUM_UPSELL);
                                            return
                                        }
                                        e$(null != eE || eb ? N.Step.REVIEW : N.Step.ADD_PAYMENT_STEPS)
                                    },
                                    children: q.default.Messages.CONTINUE
                                });
                                break;
                            case N.Step.ADD_PAYMENT_STEPS:
                                break;
                            case N.Step.AWAITING_AUTHENTICATION:
                                e = (0, a.jsx)(m.AwaitingAuthenticationStepBody, {
                                    className: J.body
                                });
                                break;
                            case N.Step.REVIEW:
                                u(null != e_, "Missing nextPremiumSubscriptionPlan"), e = (0, a.jsx)(Y.GuildBoostingReview, {
                                    paymentSources: eN,
                                    priceOptions: r,
                                    currentPremiumSubscription: ed,
                                    premiumSubscriptionPaymentSourceId: eE,
                                    premiumSubscriptionPlan: e_,
                                    newAdditionalPlans: ev,
                                    onPaymentSourceChange: e => eC(null != e ? e.id : null),
                                    onPaymentSourceAdd: () => {
                                        e$(N.Step.ADD_PAYMENT_STEPS), eC(null)
                                    },
                                    onPurchaseTermsChange: ek,
                                    legalTermsNodeRef: e5,
                                    hasLegalTermsFlash: e7
                                }), t = N.Step.PLAN_SELECT, o = eB ? (0, a.jsx)(S.Button, {
                                    color: S.Button.Colors.GREEN,
                                    type: "submit",
                                    submitting: eU,
                                    onClick: async () => {
                                        u(null != ev, "Missing newAdditionalPlans");
                                        let e = null != ey ? eN[ey] : null;
                                        eA(null);
                                        try {
                                            if (eJ(A.PurchaseState.PURCHASING), eR(!0), u(null != ey, "Missing paymentSourceId"), G.default.track(V.AnalyticEvents.PAYMENT_FLOW_COMPLETED, {
                                                    ...eY,
                                                    duration_ms: Date.now() - ew,
                                                    guild_id: es,
                                                    application_id: ec
                                                }), e3) return;
                                            if (null == ed || null == em) {
                                                u(null != e, "Missing paymentSource");
                                                let t = await (0, p.createSubscription)({
                                                    items: ev,
                                                    paymentSource: e,
                                                    currency: r.currency
                                                });
                                                if (t.redirectConfirmation) {
                                                    te(null != t.redirectURL);
                                                    return
                                                }
                                            } else {
                                                let t = {
                                                    items: (0, v.getItemsFromNewAdditionalPlans)(ed, ev)
                                                };
                                                t.currency = ed.currency, null == t.currency && (t.currency = r.currency), t.paymentSource = null != eE ? eN[eE] : void 0, null == t.paymentSource && (u(null != e, "Missing paymentSource"), t.paymentSource = e, t.currency = r.currency);
                                                let n = await (0, p.updateSubscription)(ed, t, eW);
                                                if (n.redirectConfirmation) {
                                                    te(null != n.redirectURL);
                                                    return
                                                }
                                            }
                                            e$(N.Step.CONFIRM), eJ(A.PurchaseState.COMPLETED), null != es && await $(es), null != ei && ei()
                                        } catch (t) {
                                            eJ(A.PurchaseState.FAIL), eA(t), G.default.track(V.AnalyticEvents.PAYMENT_FLOW_FAILED, {
                                                ...eY,
                                                payment_gateway: null != e ? e.type === V.PaymentSourceTypes.CARD ? V.PaymentGateways.STRIPE : V.PaymentGateways.BRAINTREE : null,
                                                payment_source_id: ey,
                                                duration_ms: Date.now() - ew
                                            })
                                        } finally {
                                            !e3 && eR(!1)
                                        }
                                    },
                                    children: q.default.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_SUBMIT
                                }) : (0, a.jsx)(S.Tooltip, {
                                    text: q.default.Messages.BILLING_ACCEPT_TERMS_PAID_SERVICES_TOOLTIP,
                                    children: e => (0, a.jsx)(S.Button, {
                                        ...e,
                                        color: S.Button.Colors.GREEN,
                                        onClick: () => {
                                            null != e5.current && (e5.current.scrollIntoView({
                                                behavior: "smooth"
                                            }), e4(!0))
                                        },
                                        type: "submit",
                                        children: q.default.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_SUBMIT
                                    })
                                });
                                break;
                            case N.Step.CONFIRM:
                                let c = g.default.getGuild(es);
                                e = (0, a.jsx)(Y.GuildBoostingConfirmation, {
                                    guild: c,
                                    guildBoostQuantity: eD + eI.length,
                                    onClose: e0,
                                    withAnimation: !1,
                                    paymentSourceType: null === (n = eN[null != ey ? ey : ""]) || void 0 === n ? void 0 : n.type
                                })
                        }
                        let E = null != eh && null == (0, N.errorToStep)(eh) ? eh : eg;
                        i = eK === N.Step.ADD_PAYMENT_STEPS ? tt : (0, a.jsx)(U.default, {
                            hideBreadcrumbs: eK === N.Step.CONFIRM,
                            steps: eH,
                            currentStep: eK,
                            paymentError: E,
                            purchaseErrorBlockRef: eO,
                            hasCurrencies: e2.length > 1,
                            body: e,
                            footer: eK !== N.Step.CONFIRM ? (0, a.jsxs)(S.ModalFooter, {
                                direction: k.default.Direction.HORIZONTAL,
                                align: k.default.Align.CENTER,
                                justify: k.default.Justify.END,
                                children: [null != t ? (0, a.jsx)("div", {
                                    className: J.backStep,
                                    children: (0, a.jsx)(S.Button, {
                                        color: (0, d.isThemeLight)(ef) ? S.Button.Colors.PRIMARY : S.Button.Colors.WHITE,
                                        look: S.Button.Looks.LINK,
                                        size: S.Button.Sizes.NONE,
                                        onClick: () => {
                                            null != t && e$(t)
                                        },
                                        children: q.default.Messages.BACK
                                    })
                                }) : null, (0, a.jsxs)("div", {
                                    className: J.footerRight,
                                    children: [s, o]
                                })]
                            }) : null
                        })
                    }
                } else i = (0, a.jsx)("div", {
                    className: J.loadingWrapper,
                    children: (0, a.jsx)(S.Spinner, {})
                });
                let tn = null;
                return !eS && eK !== N.Step.PREMIUM_UPSELL && (tn = (0, a.jsx)(W.default, {
                    onClose: e0,
                    currentStep: eK,
                    purchaseState: eq
                })), (0, a.jsxs)(S.ModalRoot, {
                    transitionState: E,
                    children: [tn, i]
                })
            }

            function et(e) {
                let t = (0, c.useStateFromStores)([B.default], () => B.default.getPremiumTypeSubscription()),
                    {
                        AnalyticsLocationProvider: n
                    } = (0, f.default)(_.default.GUILD_BOOST_PURCHASE_MODAL);
                return (0, a.jsx)(n, {
                    children: (0, a.jsx)(T.PaymentContextProvider, {
                        activeSubscription: t,
                        stepConfigs: [],
                        skuIDs: [],
                        children: (0, a.jsx)(ee, {
                            ...e
                        })
                    })
                })
            }
        },
        985074: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            });
            var l = n("920040"),
                a = n("773670"),
                s = n("575482"),
                i = n.n(s),
                u = n("498225"),
                o = n("819855"),
                r = n("77078"),
                c = n("812204"),
                d = n("685665"),
                S = n("649844"),
                p = n("917247"),
                E = n("956597"),
                m = n("674158"),
                P = n("915639"),
                _ = n("145131"),
                f = n("46829"),
                I = n("118503"),
                M = n("619911"),
                T = n("698015"),
                N = n("599110"),
                A = n("719923"),
                y = n("153160"),
                R = n("49111"),
                L = n("646718"),
                C = n("782340"),
                U = n("968459");

            function h(e) {
                let {
                    shouldUpsellFromNoneTier: t
                } = e, n = (0, u.useStateFromStores)([P.default], () => P.default.locale);
                return (0, l.jsxs)("div", {
                    className: U.perksList,
                    children: [(0, l.jsx)(m.default, {
                        icon: I.default,
                        iconClassName: U.perkIconGuild,
                        description: C.default.Messages.PREMIUM_UPSELL_FEATURE_FREE_GUILD_SUBSCRIPTION.format({
                            numFreeGuildSubscriptions: L.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM
                        })
                    }), (0, l.jsx)(m.default, {
                        icon: I.default,
                        iconClassName: U.perkIconGuild,
                        description: C.default.Messages.PREMIUM_UPSELL_FEATURE_GUILD_SUBSCRIPTION_DISCOUNT.format({
                            percent: (0, y.formatPercent)(n, L.GUILD_BOOST_COST_FOR_PREMIUM_USER_DISCOUNT_PERCENT / 100)
                        })
                    }), t ? (0, l.jsx)(m.default, {
                        icon: f.default,
                        iconClassName: U.perkIconChatPerks,
                        description: C.default.Messages.PREMIUM_UPSELL_FEATURE_CHAT_PERKS
                    }) : null, (0, l.jsx)(m.default, {
                        icon: M.default,
                        iconClassName: U.perkIconStream,
                        description: C.default.Messages.PREMIUM_UPSELL_FEATURE_STREAM
                    }), (0, l.jsx)(m.default, {
                        icon: T.default,
                        iconClassName: U.perkIconUpload,
                        description: C.default.Messages.PREMIUM_UPSELL_FEATURE_UPLOAD
                    })]
                })
            }

            function g(e) {
                var t;
                let {
                    premiumSubscriptionPlan: n,
                    onClose: s,
                    onBack: u,
                    onSkip: m,
                    onSubscriptionConfirmation: P,
                    analyticsLocation: f,
                    analyticsSourceLocation: I,
                    priceOptions: M
                } = e, {
                    analyticsLocations: T,
                    sourceAnalyticsLocations: g
                } = (0, d.default)(c.default.GUILD_BOOSTING_PREMIUM_UPSELL), {
                    theme: O
                } = (0, r.useThemeContext)(), b = (0, o.isThemeLight)(O) ? r.Button.Colors.PRIMARY : r.Button.Colors.WHITE, D = null == n || null == n.premiumSubscriptionType, x = A.default.getPrice(L.SubscriptionPlans.PREMIUM_MONTH_TIER_2, !1, !1, M), B = (0, y.formatPrice)(x.amount, x.currency), k = (0, p.usePremiumTrialOffer)(), G = null == k ? void 0 : k.trial_id, j = (null == k ? void 0 : null === (t = k.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === L.PremiumSubscriptionSKUs.TIER_2;
                return a.useEffect(() => {
                    N.default.track(R.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                        type: L.PremiumUpsellTypes.GUILD_PREMIUM_UPSELL_MODAL,
                        location_stack: g
                    })
                }, [g]), (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsxs)(r.ModalContent, {
                        className: U.content,
                        children: [(0, l.jsx)(r.ModalCloseButton, {
                            onClick: s,
                            className: U.closeButton
                        }), j && (0, l.jsx)(E.PremiumTrialGradientBadge, {
                            className: U.premiumTrialBadge
                        }), (0, l.jsx)("div", {
                            className: i(U.upsellImage, {
                                [U.upsellImageWithTrialOffer]: j
                            })
                        }), (0, l.jsx)("div", {
                            className: U.bodyText,
                            children: null != G ? C.default.Messages.PREMIUM_UPSELL_FEATURE_PRETEXT_TRIAL_VARIANT : C.default.Messages.PREMIUM_UPSELL_FEATURE_PRETEXT.format({
                                monthlyPrice: B
                            })
                        }), (0, l.jsx)(h, {
                            shouldUpsellFromNoneTier: D
                        })]
                    }), (0, l.jsxs)(r.ModalFooter, {
                        align: _.default.Align.CENTER,
                        justify: _.default.Justify.END,
                        children: [(0, l.jsxs)("div", {
                            className: U.footerRight,
                            children: [(0, l.jsx)(r.Button, {
                                look: r.Button.Looks.LINK,
                                color: b,
                                onClick: m,
                                children: C.default.Messages.PREMIUM_UPSELL_CONTINUE_TO_BOOSTS
                            }), (0, l.jsx)(r.Button, {
                                color: r.Button.Colors.GREEN,
                                type: "submit",
                                onClick: () => {
                                    s(), (0, S.default)({
                                        initialPlanId: null,
                                        subscriptionTier: L.PremiumSubscriptionSKUs.TIER_2,
                                        analyticsLocations: T,
                                        analyticsObject: {
                                            ...f,
                                            section: R.AnalyticsSections.PREMIUM_GUILD_PURCHASE_MODAL
                                        },
                                        analyticsSourceLocation: I,
                                        onSubscriptionConfirmation: P,
                                        trialId: G
                                    })
                                },
                                children: null != G ? C.default.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT : C.default.Messages.PREMIUM_UPSELL_UPGRADE
                            })]
                        }), (0, l.jsx)("div", {
                            className: U.backStep,
                            children: (0, l.jsx)(r.Button, {
                                color: b,
                                look: r.Button.Looks.LINK,
                                size: r.Button.Sizes.NONE,
                                onClick: () => u(),
                                children: C.default.Messages.BACK
                            })
                        })]
                    })]
                })
            }
        },
        818711: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                calculateAdditionalPlansWithPremiumGuildAdjustment: function() {
                    return r
                }
            });
            var l = n("161179"),
                a = n.n(l),
                s = n("10514"),
                i = n("719923"),
                u = n("646718"),
                o = n("49111");

            function r(e, t) {
                let n = s.default.get(e.planId);
                a(null != n, "missing premium subscription plan");
                let l = s.default.getForSkuAndInterval(u.PremiumSubscriptionSKUs.GUILD, n.interval, n.intervalCount);
                a(null != l, "missing premium guild plan");
                let r = null != e.renewalMutations ? e.renewalMutations.additionalPlans : e.additionalPlans,
                    c = e.status === o.SubscriptionStatusTypes.CANCELED ? 0 : (0, i.getNumPremiumGuildSubscriptions)(r),
                    d = c + t,
                    S = r.filter(e => e.planId !== l.id);
                if (d < 0) throw Error("Invalid adjustment");
                return 0 === d ? S : [...S, {
                    planId: l.id,
                    quantity: d
                }]
            }
        },
        674158: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("920040");
            n("773670");
            var a = n("575482"),
                s = n.n(a),
                i = n("537537");

            function u(e) {
                let {
                    icon: t,
                    iconClassName: n,
                    description: a,
                    color: u
                } = e;
                return (0, l.jsxs)("div", {
                    className: i.perkRow,
                    children: [(0, l.jsx)("div", {
                        className: i.perkIconContainer,
                        children: (0, l.jsx)(t, {
                            color: u,
                            className: s(i.perkIcon, n)
                        })
                    }), (0, l.jsx)("div", {
                        className: i.perkDescription,
                        children: a
                    })]
                })
            }
        }
    }
]);