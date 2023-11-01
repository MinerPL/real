(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["189"], {
        619025: function(e, t, n) {
            "use strict";
            e.exports = n.p + "aa2afb65f20b2a22447c.svg"
        },
        258925: function(e, t, n) {
            "use strict";
            e.exports = n.p + "c1957de296fc76c595c7.svg"
        },
        40755: function(e, t, n) {
            "use strict";
            e.exports = n.p + "ea00a9ee82d2b42562bd.svg"
        },
        311050: function(e, t, n) {
            "use strict";
            e.exports = n.p + "c3389d3a16ceea3ef63a.svg"
        },
        777273: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchUserAffinities: function() {
                    return l
                }
            });
            var i = n("872717"),
                r = n("913144"),
                s = n("843823"),
                a = n("49111");

            function l() {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                return s.default.needsRefresh() ? (r.default.dispatch({
                    type: "LOAD_USER_AFFINITIES"
                }), i.default.get({
                    url: a.Endpoints.USER_AFFINITIES,
                    retries: e ? 3 : 0,
                    oldFormErrors: !0
                }).then(e => {
                    let {
                        body: t
                    } = e;
                    r.default.dispatch({
                        type: "LOAD_USER_AFFINITIES_SUCCESS",
                        affinities: t
                    })
                }, () => {
                    r.default.dispatch({
                        type: "LOAD_USER_AFFINITIES_FAILURE"
                    })
                })) : Promise.resolve()
            }
        },
        274800: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                queueInteractionComponentState: function() {
                    return a
                },
                addQueued: function() {
                    return l
                },
                setFailed: function() {
                    return u
                },
                fetchMessageInteractionData: function() {
                    return o
                }
            });
            var i = n("872717"),
                r = n("913144"),
                s = n("49111");

            function a(e, t, n, i) {
                r.default.dispatch({
                    type: "QUEUE_INTERACTION_COMPONENT_STATE",
                    messageId: e,
                    nonce: t,
                    state: n,
                    indices: i
                })
            }

            function l(e, t) {
                let {
                    data: n,
                    messageId: i,
                    onCreate: s,
                    onSuccess: a,
                    onFailure: l
                } = t;
                r.default.dispatch({
                    type: "INTERACTION_QUEUE",
                    data: n,
                    nonce: e,
                    messageId: i,
                    onCreate: s,
                    onSuccess: a,
                    onFailure: l
                })
            }

            function u(e, t, n) {
                r.default.dispatch({
                    type: "INTERACTION_FAILURE",
                    nonce: e,
                    errorMessage: n,
                    errorCode: t
                })
            }
            async function o(e, t) {
                let n = await i.default.get({
                    url: s.Endpoints.MESSAGE_INTERACTION_DATA(e, t),
                    oldFormErrors: !0
                });
                if (n.ok) {
                    let i = n.body;
                    r.default.dispatch({
                        type: "LOAD_MESSAGE_INTERACTION_DATA_SUCCESS",
                        channelId: e,
                        messageId: t,
                        interactionData: i
                    })
                }
            }
        },
        752598: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getInteractionTimeoutTimestamp: function() {
                    return I
                },
                executeMessageComponentInteraction: function() {
                    return T
                },
                handleInteractionResponse: function() {
                    return P
                },
                InteractionStatusViewState: function() {
                    return r
                },
                getInteractionStatusViewState: function() {
                    return C
                },
                canRetryInteractionData: function() {
                    return A
                }
            });
            var i, r, s = n("249654"),
                a = n("872717"),
                l = n("913144"),
                u = n("819689"),
                o = n("798609"),
                d = n("263024"),
                c = n("271938"),
                f = n("274800"),
                p = n("809810"),
                S = n("3765"),
                E = n("606981"),
                m = n("49111");

            function I(e) {
                return null == e || "" === e || Number.isNaN(e) ? Date.now() : s.default.extractTimestamp(e) + 9e5
            }
            let T = async e => {
                let {
                    componentType: t,
                    messageId: n,
                    messageFlags: i,
                    customId: r,
                    indices: l,
                    applicationId: u,
                    channelId: S,
                    guildId: E,
                    localState: I
                } = e, T = s.default.fromTimestamp(Date.now());
                if (!p.default.canQueueInteraction(n, T)) return;
                await d.default.unarchiveThreadIfNecessary(S), (0, f.addQueued)(T, {
                    messageId: n,
                    data: {
                        interactionType: o.InteractionTypes.MESSAGE_COMPONENT,
                        customId: r,
                        indices: l
                    },
                    onFailure: (e, t) => _(S, e, t)
                }), null != I && (0, f.queueInteractionComponentState)(n, T, I, l);
                let C = {
                    type: o.InteractionTypes.MESSAGE_COMPONENT,
                    nonce: T,
                    guild_id: E,
                    channel_id: S,
                    message_flags: i,
                    message_id: n,
                    application_id: u,
                    session_id: c.default.getSessionId(),
                    data: {
                        component_type: t,
                        custom_id: r,
                        ... function(e) {
                            if (null == e) return null;
                            if (e.type === o.ComponentType.STRING_SELECT || e.type === o.ComponentType.INPUT_TEXT) return e;
                            let t = e.selectedOptions.map(e => e.value);
                            return {
                                type: e.type,
                                values: t
                            }
                        }(I)
                    }
                };
                await a.default.post({
                    url: m.Endpoints.INTERACTIONS,
                    body: C,
                    timeout: 3e3
                }, e => {
                    P(T, S, E, e)
                })
            }, _ = (e, t, n) => {
                null == n && null != t && u.default.sendClydeError(e, t)
            }, P = (e, t, n, i) => {
                if (!i.ok) {
                    if (!i.hasErr) {
                        var r;
                        if (i.status >= 400 && i.status < 500 && i.body) {
                            if (i.body.code === m.AbortCodes.INVALID_FORM_BODY && i.body.errors) {
                                let r = (0, E.getFirstSkemaError)(i.body.errors);
                                null != r && ("INTERACTION_APPLICATION_COMMAND_INVALID_VERSION" === r.code || "INTERACTION_APPLICATION_COMMAND_INVALID" === r.code) && l.default.dispatch({
                                    type: "APPLICATION_COMMAND_EXECUTE_BAD_VERSION",
                                    channelId: t,
                                    guildId: n
                                }), (0, f.setFailed)(e, void 0, null == r ? void 0 : r.message);
                                return
                            }(0, f.setFailed)(e, void 0, i.body.message);
                            return
                        }(0, f.setFailed)(e, null === (r = i.body) || void 0 === r ? void 0 : r.code);
                        return
                    }(0, f.setFailed)(e)
                }
            };
            (i = r || (r = {}))[i.SENDING = 0] = "SENDING", i[i.CREATED = 1] = "CREATED", i[i.FAILED = 2] = "FAILED", i[i.TIMED_OUT = 3] = "TIMED_OUT";
            let C = (e, t) => {
                var n;
                let i = null == t ? void 0 : t.state,
                    a = e.state === m.MessageStates.SENT && I(e.id) < Date.now();
                let l = e.state === m.MessageStates.SEND_FAILED && (null == (n = e.id) || "" === n || Number.isNaN(n) ? Date.now() : s.default.extractTimestamp(n) + 3e3) < Date.now(),
                    u = (null == t ? void 0 : t.data.interactionType) === o.InteractionTypes.APPLICATION_COMMAND,
                    d = e.isCommandType();
                if (u && i === S.InteractionState.QUEUED || d && e.state === m.MessageStates.SENDING && null != t) return r.SENDING;
                if (u && i === S.InteractionState.CREATED || e.hasFlag(m.MessageFlags.LOADING) && !a) return r.CREATED;
                if (null != e.interaction && e.hasFlag(m.MessageFlags.LOADING) && a) return r.TIMED_OUT;
                else if (null != e.interaction && !e.hasFlag(m.MessageFlags.LOADING) && l) return r.TIMED_OUT;
                else if (d && e.state === m.MessageStates.SEND_FAILED) return r.FAILED
            };

            function A(e) {
                var t;
                let n = e.options;
                for (;
                    (null === (t = n) || void 0 === t ? void 0 : t.length) === 1 && (n[0].type === o.ApplicationCommandOptionType.SUB_COMMAND_GROUP || n[0].type === o.ApplicationCommandOptionType.SUB_COMMAND);) n = n[0].options;
                for (let e of null != n ? n : [])
                    if (e.type === o.ApplicationCommandOptionType.ATTACHMENT) return !1;
                return !0
            }
        },
        606981: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getFirstSkemaError: function() {
                    return r
                }
            });
            let i = "_errors";

            function r(e) {
                return function e(t, n) {
                    let r = t[i];
                    if (null != r && Array.isArray(r)) return r[0];
                    for (let [r, s] of Object.entries(t))
                        if (r !== i && null != s && "object" == typeof s) return e(s, null != n ? n : r);
                    return null
                }(e, void 0)
            }
        },
        263820: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("862205");
            let r = (0, i.createExperiment)({
                kind: "user",
                id: "2023-08_checkout_aa_test",
                label: "Checkout AA Test",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "On",
                    config: {
                        enabled: !0
                    }
                }]
            });
            var s = r
        },
        149833: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AwaitingBrowserCheckoutStepBody: function() {
                    return o
                },
                AwaitingBrowserCheckoutStepFooter: function() {
                    return d
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("77078"),
                s = n("177998"),
                a = n("145131"),
                l = n("85336"),
                u = n("782340");
            let o = () => (0, i.jsx)("div", {
                    children: (0, i.jsx)(r.Heading, {
                        variant: "heading-xl/bold",
                        children: u.default.Messages.PAYMENT_WAITING_FOR_BROWSER_CHECKOUT_MODAL_HEADER
                    })
                }),
                d = e => {
                    let {
                        onStepChange: t,
                        onBackClick: n
                    } = e;
                    return (0, i.jsx)("div", {
                        children: (0, i.jsxs)(r.ModalFooter, {
                            justify: a.default.Justify.BETWEEN,
                            align: a.default.Align.CENTER,
                            children: [(0, i.jsx)(r.Button, {
                                color: r.Button.Colors.BRAND,
                                onClick: () => {
                                    t(l.Step.ADD_PAYMENT_STEPS)
                                },
                                children: u.default.Messages.PAYMENT_WAITING_FOR_BROWSER_CHECKOUT_MODAL_NEXT_BUTTON
                            }), (0, i.jsx)(s.default, {
                                onClick: n
                            })]
                        })
                    })
                }
        },
        992049: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PremiumPaymentConfirmStep: function() {
                    return E
                }
            });
            var i = n("37983"),
                r = n("884691"),
                s = n("627445"),
                a = n.n(s),
                l = n("210721"),
                u = n("491523"),
                o = n("775155"),
                d = n("659632"),
                c = n("380186"),
                f = n("642906"),
                p = n("650484"),
                S = n("367767");

            function E(e) {
                var t, n;
                let s, {
                        handleClose: E,
                        planGroup: m,
                        onSubscriptionConfirmation: I,
                        renderPurchaseConfirmation: T,
                        postSuccessGuild: _,
                        followupSKUInfo: P
                    } = e,
                    {
                        activeSubscription: C,
                        isGift: A,
                        paymentSources: g,
                        paymentSourceId: y,
                        selectedPlan: N,
                        selectedSkuId: M,
                        step: h,
                        updatedSubscription: x,
                        selectedGiftStyle: O,
                        startingPremiumSubscriptionPlanIdRef: b
                    } = (0, f.usePaymentContext)();
                a(null != N, "Expected plan to selected"), a(null != M, "Expected selectedSkuId"), a(null != h, "Step should be set");
                let R = r.useCallback(() => {
                        E(), null == I || I()
                    }, [E, I]),
                    {
                        giftRecipient: L
                    } = (0, f.usePaymentContext)(),
                    v = (0, d.useGetGiftCode)(M, A),
                    [U, D] = r.useState(!1),
                    [j, F] = r.useState(!1),
                    [k, G] = r.useState();
                return r.useEffect(() => {
                    if (!A || null == L || null == v || U || j || (0, d.isCustomGiftEnabled)(L)) return;
                    let e = u.AutomatedGiftCodeMessageExperiment.getCurrentConfig({
                        location: "36b986_1"
                    }).enabled;
                    e && (F(!0), (0, l.sendGiftMessage)(L, v).then(() => {
                        F(!1), null == I || I(), D(!0)
                    }).catch(e => {
                        F(!1), G(e), D(!0)
                    }))
                }, [A, L, v, U, D, F, j, G, I]), s = null != T ? T(N, R, x) : A ? (0, i.jsx)(o.PremiumSubscriptionGiftPurchaseConfirmation, {
                    planId: N.id,
                    selectedGiftStyle: O,
                    onClose: R,
                    hasSentMessage: U,
                    giftMessageError: k,
                    isSendingMessage: j
                }) : b.current === N.id ? (0, i.jsx)(o.default, {
                    planId: N.id,
                    postSuccessGuild: _,
                    onClose: R,
                    paymentSourceType: null === (t = g[null != y ? y : ""]) || void 0 === t ? void 0 : t.type
                }) : (0, i.jsx)(o.default, {
                    followupSKUInfo: P,
                    startingPremiumSubscriptionPlanId: b.current,
                    planId: N.id,
                    onClose: R,
                    isDowngrade: null != C && (0, c.subscriptionCanDowngrade)(C, N.id, m),
                    paymentSourceType: null === (n = g[null != y ? y : ""]) || void 0 === n ? void 0 : n.type
                }), (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsxs)(p.PaymentPortalBody, {
                        children: [(0, i.jsx)(S.default, {}), s]
                    })
                })
            }
        },
        646139: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PremiumPaymentModal: function() {
                    return v
                },
                STEPS: function() {
                    return j
                },
                default: function() {
                    return F
                }
            });
            var i = n("37983"),
                r = n("884691"),
                s = n("446674"),
                a = n("913144"),
                l = n("775433"),
                u = n("812204"),
                o = n("685665"),
                d = n("677156"),
                c = n("10514"),
                f = n("521012"),
                p = n("659632"),
                S = n("642906"),
                E = n("85336"),
                m = n("385179"),
                I = n("262683"),
                T = n("946359"),
                _ = n("307367"),
                P = n("724269"),
                C = n("99836"),
                A = n("263820"),
                g = n("992049"),
                y = n("176108"),
                N = n("97461"),
                M = n("403365"),
                h = n("498475"),
                x = n("254350"),
                O = n("49111"),
                b = n("646718"),
                R = n("782340");
            let L = [E.Step.PLAN_SELECT, E.Step.ADD_PAYMENT_STEPS, E.Step.REVIEW, E.Step.CONFIRM];

            function v(e) {
                let {
                    analyticsLocation: t,
                    analyticsObject: n,
                    analyticsSourceLocation: s,
                    onComplete: u,
                    transitionState: f,
                    initialPlanId: I,
                    giftMessage: T,
                    subscriptionTier: _,
                    onClose: P,
                    trialId: C,
                    isGift: g = !1,
                    trialFooterMessageOverride: y,
                    reviewWarningMessage: N,
                    openInvoiceId: M,
                    onSubscriptionConfirmation: h,
                    renderPurchaseConfirmation: x,
                    postSuccessGuild: R,
                    followupSKUInfo: L,
                    renderHeader: v,
                    applicationId: U,
                    guildId: D,
                    referralTrialOfferId: j,
                    skuId: F,
                    returnRef: k
                } = e, {
                    analyticsLocations: G
                } = (0, o.default)();
                r.useEffect(() => {
                    !c.default.isLoadedForPremiumSKUs() && a.default.wait(() => (0, l.fetchPremiumSubscriptionPlans)())
                }, []), A.default.getCurrentConfig({
                    location: "3a6d55_1"
                }, {
                    autoTrackExposure: !0
                });
                let {
                    giftRecipient: w,
                    step: B
                } = (0, S.usePaymentContext)(), W = (0, p.isCustomGiftEnabled)(w) && B === E.Step.PLAN_SELECT;
                return null != w && d.CustomGiftExperiment.getCurrentConfig({
                    location: "initialRelease_PremiumPaymentModal"
                }), (0, i.jsx)(m.PaymentModal, {
                    analyticsLocations: G,
                    analyticsLocation: t,
                    analyticsObject: n,
                    analyticsSourceLocation: s,
                    analyticsSubscriptionType: O.SubscriptionTypes.PREMIUM,
                    onComplete: u,
                    transitionState: f,
                    initialPlanId: I,
                    giftMessage: T,
                    subscriptionTier: _,
                    onClose: P,
                    trialId: C,
                    isGift: g,
                    trialFooterMessageOverride: y,
                    reviewWarningMessage: N,
                    planGroup: b.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                    openInvoiceId: M,
                    onSubscriptionConfirmation: h,
                    renderPurchaseConfirmation: x,
                    postSuccessGuild: R,
                    followupSKUInfo: L,
                    renderHeader: v,
                    applicationId: U,
                    guildId: D,
                    referralTrialOfferId: j,
                    skuId: F,
                    shakeWhilePurchasing: !0,
                    isLargeModal: W,
                    returnRef: k
                })
            }

            function U(e) {
                let {
                    startedPaymentFlowWithPaymentSourcesRef: t,
                    isGift: n,
                    selectedSkuId: i
                } = (0, S.usePaymentContext)();
                return (0, y.inOneStepSubscriptionCheckout)({
                    isTrial: null != e && e,
                    isGift: n,
                    selectedSkuId: i,
                    startedPaymentFlowWithPaymentSources: t.current
                })
            }

            function D(e) {
                let {
                    initialPlanId: t,
                    handleStepChange: n,
                    referralTrialOfferId: r
                } = e, {
                    paymentSources: s,
                    selectedSkuId: a,
                    isGift: l
                } = (0, S.usePaymentContext)(), u = (0, x.default)({
                    isGift: l,
                    skuId: a,
                    referralTrialOfferId: r
                }), o = U(u);
                return (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsx)(I.PaymentModalAddPaymentStep, {
                        ...e,
                        breadcrumbSteps: L,
                        onReturn: () => {
                            let e = Object.values(s).length < 1 && null == t ? E.Step.PLAN_SELECT : E.Step.REVIEW;
                            o && (e = E.Step.REVIEW), n(e, {
                                trackedFromStep: E.Step.PAYMENT_TYPE
                            })
                        }
                    })
                })
            }
            let j = [{
                key: null,
                renderStep: e => (0, i.jsx)(m.PaymentPredicateStep, {
                    ...e
                })
            }, {
                key: E.Step.SKU_SELECT,
                renderStep: e => (0, i.jsx)(M.PremiumPaymentSKUSelectStep, {
                    ...e
                }),
                options: {
                    renderHeader: !1,
                    hideSlider: !0
                }
            }, {
                key: E.Step.WHAT_YOU_LOSE,
                renderStep: e => (0, i.jsx)(h.PremiumPaymentWhatYouLoseStep, {
                    ...e
                }),
                options: {
                    renderHeader: !1,
                    hideSlider: !0
                }
            }, {
                key: E.Step.PLAN_SELECT,
                renderStep: e => (0, i.jsx)(N.PremiumPaymentPlanSelectStep, {
                    ...e
                }),
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: e => {
                        let t = U(e);
                        return t ? null : R.default.Messages.BILLING_STEP_SELECT_PLAN
                    }
                }
            }, {
                key: E.Step.ADD_PAYMENT_STEPS,
                renderStep: e => (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsx)(D, {
                        ...e
                    })
                }),
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: e => {
                        let t = U(e);
                        return t ? null : R.default.Messages.BILLING_STEP_PAYMENT
                    }
                }
            }, {
                key: E.Step.AWAITING_BROWSER_CHECKOUT,
                renderStep: e => (0, i.jsx)(_.default, {
                    ...e
                })
            }, {
                key: E.Step.AWAITING_PURCHASE_TOKEN_AUTH,
                renderStep: () => (0, i.jsx)(P.default, {})
            }, {
                key: E.Step.AWAITING_AUTHENTICATION,
                renderStep: () => (0, i.jsx)(T.default, {})
            }, {
                key: E.Step.REVIEW,
                renderStep: e => (0, i.jsx)(C.PaymentModalReviewStep, {
                    ...e
                }),
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: e => {
                        let t = U(e);
                        return t ? R.default.Messages.BILLING_STEP_PLAN_AND_PAYMENT : R.default.Messages.BILLING_STEP_REVIEW
                    }
                }
            }, {
                key: E.Step.CONFIRM,
                renderStep: e => (0, i.jsx)(g.PremiumPaymentConfirmStep, {
                    ...e
                })
            }];

            function F(e) {
                let t = (0, s.useStateFromStores)([f.default], () => f.default.getPremiumTypeSubscription()),
                    {
                        AnalyticsLocationProvider: n
                    } = (0, o.default)(e.analyticsLocations, u.default.PREMIUM_PAYMENT_MODAL),
                    {
                        subscriptionTier: r,
                        isGift: a,
                        giftRecipient: l,
                        loadId: d,
                        defaultPlanId: c,
                        referralCode: p
                    } = e;
                if (null != r && !Object.values(b.PremiumSubscriptionSKUs).includes(r)) throw Error("subscriptionTier must be a premium subscription");
                return (0, i.jsx)(n, {
                    children: (0, i.jsx)(S.PaymentContextProvider, {
                        loadId: d,
                        activeSubscription: t,
                        stepConfigs: j,
                        skuIDs: [...b.ACTIVE_PREMIUM_SKUS],
                        isGift: a,
                        defaultPlanId: c,
                        referralCode: p,
                        giftRecipient: null == l ? void 0 : l,
                        children: (0, i.jsx)(v, {
                            ...e
                        })
                    })
                })
            }
        },
        97461: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PremiumPaymentPlanSelectStep: function() {
                    return D
                }
            });
            var i = n("37983"),
                r = n("884691"),
                s = n("627445"),
                a = n.n(s),
                l = n("65597"),
                u = n("77078"),
                o = n("856413"),
                d = n("916187"),
                c = n("809071"),
                f = n("53253"),
                p = n("669073"),
                S = n("154889"),
                E = n("917247"),
                m = n("358821"),
                I = n("570727"),
                T = n("697218"),
                _ = n("10514"),
                P = n("145131"),
                C = n("659632"),
                A = n("701909"),
                g = n("719923"),
                y = n("642906"),
                N = n("85336"),
                M = n("153727"),
                h = n("628738"),
                x = n("650484"),
                O = n("310093"),
                b = n("367767"),
                R = n("49111"),
                L = n("646718"),
                v = n("782340"),
                U = n("424650");

            function D(e) {
                var t, n, s;
                let {
                    giftMessage: D,
                    handleStepChange: j,
                    initialPlanId: F,
                    subscriptionTier: k,
                    trialId: G,
                    referralTrialOfferId: w,
                    customGiftMessage: B,
                    emojiConfetti: W,
                    soundEffect: H,
                    setCustomGiftMessage: K,
                    setEmojiConfetti: Y,
                    setSoundEffect: V
                } = e, {
                    activeSubscription: Q,
                    hasFetchedSubscriptions: q,
                    isGift: X,
                    paymentSourceId: z,
                    paymentSources: J,
                    selectedSkuId: Z,
                    selectedPlan: $,
                    step: ee,
                    defaultPlanId: et,
                    priceOptions: en,
                    isPremium: ei,
                    selectedGiftStyle: er,
                    setSelectedGiftStyle: es,
                    giftRecipient: ea
                } = (0, y.usePaymentContext)(), {
                    enabled: el
                } = f.default.useExperiment({
                    location: "d17fd6_1"
                }, {
                    autoTrackExposure: !1
                }), eu = (0, f.useIsSeasonalGiftingActive)();
                r.useEffect(() => {
                    eu && X && f.default.trackExposure({
                        location: "d17fd6_2"
                    })
                }, [eu, X]);
                let eo = el && eu && X && Z === L.PremiumSubscriptionSKUs.TIER_2,
                    ed = null != z ? J[z] : null,
                    {
                        newPlans: ec
                    } = d.default.useExperiment({
                        location: "d17fd6_3"
                    }, {
                        autoTrackExposure: !1
                    }),
                    ef = (0, l.default)([T.default], () => T.default.getCurrentUser()),
                    ep = !X && null != Z && Z === L.PremiumSubscriptionSKUs.TIER_2 && null != ef && ef.hasHadPremium() && q && null == Q && (0, d.isPaymentSourceEligibleForMultiMonthPlans)(ed),
                    eS = (0, E.usePremiumTrialOffer)(w),
                    eE = !X && null != eS && null != Z && (0, L.SubscriptionTrials)[eS.trial_id].skus.includes(Z),
                    em = (0, S.usePremiumDiscountOffer)(),
                    eI = null == em ? void 0 : null === (t = em.discount) || void 0 === t ? void 0 : t.plan_ids.some(e => L.SubscriptionPlanInfo[e].skuId === Z),
                    eT = !X && null != em && null != Z && eI,
                    e_ = null !== (n = eE || eT) && void 0 !== n && n,
                    {
                        defaultToMonthlyPlan: eP
                    } = p.TrialRedemptionDefaultPlanExperiment.useExperiment({
                        location: "d17fd6_4"
                    }, {
                        autoTrackExposure: !1
                    }),
                    eC = r.useMemo(() => (0, g.getPremiumPlanOptions)({
                        skuId: Z,
                        isPremium: ei,
                        multiMonthPlans: ep ? ec : [],
                        currentSubscription: Q,
                        isGift: X,
                        isEligibleForTrial: eE,
                        defaultPlanId: et,
                        defaultToMonthlyPlan: eP
                    }), [Z, ei, ec, Q, ep, X, eE, et, eP]),
                    eA = eT && eC.includes(L.SubscriptionPlans.PREMIUM_MONTH_TIER_2) ? L.SubscriptionPlans.PREMIUM_MONTH_TIER_2 : eC[0],
                    eg = (0, l.default)([_.default], () => _.default.get(eA)),
                    ey = [{
                        planId: null == eg ? void 0 : eg.id,
                        quantity: 1
                    }],
                    [eN, eM] = r.useState(e_),
                    [eh, ex] = (0, c.useSubscriptionInvoicePreview)({
                        items: ey,
                        renewal: !1,
                        preventFetch: !e_,
                        applyEntitlements: !0,
                        trialId: G,
                        paymentSourceId: en.paymentSourceId,
                        currency: en.currency
                    });
                r.useEffect(() => {
                    if (e_) eM((null == eh ? void 0 : eh.subscriptionPeriodEnd) == null)
                }, [eh, e_]), (0, o.default)("Payment Modal Plan Select Step", eN, 5, {
                    proratedInvoicePreview: eh,
                    proratedInvoiceError: ex,
                    isEligibleForOffer: e_
                }, {
                    tags: {
                        app_context: "billing"
                    }
                });
                let eO = null !== (s = null == ex ? void 0 : ex.message) && void 0 !== s ? s : v.default.Messages.ERROR_GENERIC_TITLE,
                    eb = e_ && null == ex,
                    eR = e_ && null != ex;
                return eb && (null == eh ? void 0 : eh.subscriptionPeriodEnd) == null ? (0, i.jsx)(h.default, {}) : (a(null != ee, "Step should be set"), a(eC.length > 0, "Premium plan options should be set"), (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(O.GiftNote, {
                        giftMessage: D
                    }), !(0, C.isCustomGiftEnabled)(ea) && (0, i.jsx)(M.default, {
                        isEligibleForTrial: eE
                    }), (0, i.jsxs)(x.PaymentPortalBody, {
                        children: [eb && (0, i.jsx)("hr", {
                            className: U.planSelectSeparatorUpper
                        }), (0, i.jsx)(m.default, {
                            isGift: X,
                            plan: $
                        }), (0, i.jsx)(b.default, {}), eR ? (0, i.jsx)(u.FormErrorBlock, {
                            children: eO
                        }) : (0, i.jsx)(I.PremiumSwitchPlanSelectBody, {
                            isGift: X,
                            selectedGiftStyle: er,
                            setSelectedGiftStyle: es,
                            planOptions: eC,
                            eligibleForMultiMonthPlans: ep,
                            isSeasonalGift: eo,
                            referralTrialOfferId: w,
                            selectedPlanId: null == $ ? void 0 : $.id,
                            subscriptionPeriodEnd: null == eh ? void 0 : eh.subscriptionPeriodEnd,
                            customGiftMessage: B,
                            emojiConfetti: W,
                            soundEffect: H,
                            setCustomGiftMessage: K,
                            setEmojiConfetti: Y,
                            setSoundEffect: V,
                            discountInvoiceItems: eT ? null == eh ? void 0 : eh.invoiceItems : void 0
                        }), eb && (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)("hr", {
                                className: U.planSelectSeparatorLower
                            }), (0, i.jsx)(u.Text, {
                                variant: "text-xs/normal",
                                children: v.default.Messages.BILLING_TRIAL_CANCEL_ANYTIME_LINK.format({
                                    link: A.default.getArticleURL(R.HelpdeskArticles.PREMIUM_DETAILS_CANCEL_SUB)
                                })
                            })]
                        })]
                    }), (0, i.jsx)(x.PaymentPortalFooter, {
                        children: (0, i.jsx)(u.ModalFooter, {
                            justify: P.default.Justify.BETWEEN,
                            align: P.default.Align.CENTER,
                            children: (0, i.jsx)(I.PremiumSwitchPlanSelectFooter, {
                                onStepChange: j,
                                isGift: X,
                                onBackClick: () => j(N.Step.SKU_SELECT),
                                showBackButton: null == F && null == k,
                                planOptions: eC,
                                shouldRenderUpdatedPaymentModal: eb,
                                isTrial: eE
                            })
                        })
                    })]
                }))
            }
        },
        403365: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PremiumPaymentSKUSelectStep: function() {
                    return m
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("77078"),
                s = n("917247"),
                a = n("279171"),
                l = n("49735"),
                u = n("719923"),
                o = n("642906"),
                d = n("85336"),
                c = n("176108"),
                f = n("254350"),
                p = n("646718"),
                S = n("782340"),
                E = n("600465");

            function m(e) {
                let {
                    handleStepChange: t,
                    handleClose: n,
                    referralTrialOfferId: r
                } = e, {
                    setSelectedSkuId: a,
                    activeSubscription: l,
                    isGift: S,
                    startedPaymentFlowWithPaymentSourcesRef: E,
                    setSelectedPlanId: m
                } = (0, o.usePaymentContext)(), T = (0, s.usePremiumTrialOffer)(r);
                return (0, i.jsx)(I, {
                    selectSku: e => (function(e) {
                        let {
                            activeSubscription: t,
                            newSkuId: n,
                            setSelectedSkuId: i,
                            handleStepChange: r,
                            isGift: s,
                            userTrialOffer: a,
                            setSelectedPlanId: l,
                            startedPaymentFlowWithPaymentSources: o
                        } = e;
                        i(n);
                        let S = d.Step.PLAN_SELECT,
                            E = (0, u.getPremiumSkuIdForSubscription)(t);
                        (E === p.PremiumSubscriptionSKUs.TIER_1 || E === p.PremiumSubscriptionSKUs.TIER_2) && n === p.PremiumSubscriptionSKUs.TIER_0 && !s && (S = d.Step.WHAT_YOU_LOSE);
                        let m = (0, f.isInTrialRedemption)({
                                userTrialOffer: a,
                                isGift: s,
                                skuId: n
                            }),
                            I = (0, c.inOneStepSubscriptionCheckout)({
                                isTrial: m,
                                isGift: s,
                                selectedSkuId: n,
                                startedPaymentFlowWithPaymentSources: o
                            });
                        if (S !== d.Step.WHAT_YOU_LOSE && I) {
                            S = d.Step.REVIEW;
                            let e = (0, c.getDefaultPlanOneStepCheckout)(n, t);
                            l(e)
                        }
                        r(S, {
                            analyticsDataOverride: {
                                sku_id: n
                            }
                        })
                    })({
                        activeSubscription: l,
                        newSkuId: e,
                        setSelectedSkuId: a,
                        handleStepChange: t,
                        isGift: S,
                        userTrialOffer: T,
                        startedPaymentFlowWithPaymentSources: E.current,
                        setSelectedPlanId: m
                    }),
                    onClose: n,
                    isGift: S
                })
            }

            function I(e) {
                let {
                    selectSku: t,
                    onClose: n,
                    isGift: s
                } = e;
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsxs)(r.ModalHeader, {
                        className: E.skuSelectModalHeader,
                        separator: !1,
                        children: [(0, i.jsx)(r.FormTitle, {
                            tag: r.FormTitleTags.H4,
                            children: S.default.Messages.BILLING_STEP_SELECT_PLAN
                        }), (0, i.jsx)(r.ModalCloseButton, {
                            onClick: n
                        })]
                    }), (0, i.jsxs)(r.ModalContent, {
                        className: E.skuSelectModalContent,
                        children: [(0, i.jsx)(a.default, {
                            fromBoostCancelModal: !1,
                            className: E.legacyPricingNotice
                        }), (0, i.jsx)(l.default, {
                            onSelectSku: t,
                            isGift: s
                        })]
                    })]
                })
            }
        },
        498475: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PremiumPaymentWhatYouLoseStep: function() {
                    return m
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("627445"),
                s = n.n(r),
                a = n("819855"),
                l = n("77078"),
                u = n("841098"),
                o = n("360262"),
                d = n("719923"),
                c = n("642906"),
                f = n("85336"),
                p = n("176108"),
                S = n("782340"),
                E = n("943490");

            function m(e) {
                let {
                    handleStepChange: t,
                    handleClose: n
                } = e, r = (0, u.default)(), {
                    activeSubscription: m,
                    selectedSkuId: I,
                    setSelectedPlanId: T,
                    isGift: _,
                    startedPaymentFlowWithPaymentSourcesRef: P
                } = (0, c.usePaymentContext)(), C = null != m ? (0, d.getPremiumPlanItem)(m) : null, A = null != C ? (0, d.getDisplayPremiumType)(C.planId) : null, g = null != C ? (0, d.getPremiumType)(C.planId) : null, y = (0, p.inOneStepSubscriptionCheckout)({
                    isTrial: !1,
                    isGift: _,
                    selectedSkuId: I,
                    startedPaymentFlowWithPaymentSources: P.current
                });
                return s(null != g, "Expected premium type"), (0, i.jsx)(o.default, {
                    premiumType: g,
                    titleText: S.default.Messages.PREMIUM_DOWNGRADE_WHAT_YOU_LOSE_TITLE,
                    subtitleText: S.default.Messages.PREMIUM_DOWNGRADE_WHAT_YOU_LOSE_SUBTITLE.format({
                        subscriptionName: A
                    }),
                    footer: (0, i.jsxs)("div", {
                        className: E.whatYouLoseButtonContainer,
                        children: [(0, i.jsx)(l.Button, {
                            onClick: () => {
                                if (y) {
                                    let e = (0, p.getDefaultPlanOneStepCheckout)(I, m);
                                    T(e), t(f.Step.REVIEW)
                                } else t(f.Step.PLAN_SELECT)
                            },
                            children: S.default.Messages.CONTINUE
                        }), (0, i.jsx)(l.Button, {
                            look: l.Button.Looks.LINK,
                            color: (0, a.isThemeDark)(r) ? l.Button.Colors.WHITE : l.Button.Colors.PRIMARY,
                            onClick: n,
                            children: S.default.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BACK
                        })]
                    }),
                    onClose: n,
                    isDowngrade: !0
                })
            }
        },
        491523: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AutomatedGiftCodeMessageExperiment: function() {
                    return r
                }
            });
            var i = n("862205");
            let r = (0, i.createExperiment)({
                kind: "user",
                id: "2023-07_automated_gift_code_message",
                label: "Automatically send gift code message in direct message to gift recipient",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Show the automated gift code message",
                    config: {
                        enabled: !0
                    }
                }]
            })
        },
        358821: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("641078"),
                s = n("132554"),
                a = n("646718"),
                l = n("782340"),
                u = n("311050"),
                o = e => {
                    let {
                        isGift: t,
                        plan: n
                    } = e, o = (0, r.useIsEligibleForBogoPromotion)();
                    return t || (null == n ? void 0 : n.skuId) !== a.PremiumSubscriptionSKUs.TIER_2 || !o ? null : (0, i.jsx)(s.default, {
                        copy: l.default.Messages.BOGO_ANNOUNCEMENT_MODAL_UPGRADE_HEADER,
                        bannerImage: u
                    })
                }
        },
        49735: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("77078"),
                s = n("400307"),
                a = n("646718"),
                l = n("414539");

            function u(e) {
                let {
                    onClick: t,
                    isGift: n
                } = e;
                return (0, i.jsx)(r.Clickable, {
                    onClick: t,
                    style: {
                        cursor: "pointer"
                    },
                    children: (0, i.jsx)(s.Tier2Card, {
                        className: l.tier2MarketingCard,
                        ctaButton: null,
                        showWumpus: !0,
                        showYearlyPrice: !0,
                        isGift: n
                    })
                })
            }

            function o(e) {
                let {
                    onClick: t,
                    isGift: n
                } = e;
                return (0, i.jsx)(r.Clickable, {
                    onClick: t,
                    style: {
                        cursor: "pointer"
                    },
                    children: (0, i.jsx)(s.Tier0Card, {
                        className: l.tier0MarketingCard,
                        ctaButton: null,
                        showWumpus: !0,
                        showYearlyPrice: !0,
                        isGift: n
                    })
                })
            }
            var d = function(e) {
                let {
                    onSelectSku: t,
                    isGift: n
                } = e;
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(u, {
                        onClick: () => t(a.PremiumSubscriptionSKUs.TIER_2),
                        isGift: n
                    }), (0, i.jsx)(o, {
                        onClick: () => t(a.PremiumSubscriptionSKUs.TIER_0),
                        isGift: n
                    })]
                })
            }
        },
        132554: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("414456"),
                s = n.n(r),
                a = n("77078"),
                l = n("978679"),
                u = n("265469");

            function o(e) {
                let {
                    className: t,
                    copy: n,
                    bannerImage: r,
                    textColor: o = "always-white"
                } = e;
                return (0, i.jsxs)("div", {
                    className: s(u.bannerContainer, t),
                    children: [null == r ? null : (0, i.jsx)("img", {
                        alt: "",
                        className: u.banner,
                        src: r
                    }), (0, i.jsxs)("div", {
                        className: u.textContainer,
                        children: [(0, i.jsx)(l.default, {
                            className: u.giftIcon
                        }), (0, i.jsx)(a.Heading, {
                            className: u.textHeader,
                            color: o,
                            variant: "eyebrow",
                            children: n
                        })]
                    })]
                })
            }
        },
        843823: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var i = n("446674"),
                r = n("913144"),
                s = n("27618");
            let a = !1,
                l = Object.freeze({
                    userAffinities: [],
                    affinityUserIds: new Set,
                    lastFetched: 0
                }),
                u = {
                    ...l
                };

            function o() {
                u.affinityUserIds = new Set(u.userAffinities.map(e => e.user_id).filter(e => !s.default.isBlocked(e)))
            }
            class d extends i.default.PersistedStore {
                initialize(e) {
                    this.waitFor(s.default), null != e && (u.userAffinities = e.userAffinities, u.affinityUserIds = new Set(e.affinityUserIds), u.lastFetched = e.lastFetched), this.syncWith([s.default], o)
                }
                needsRefresh() {
                    return Date.now() - u.lastFetched > 864e5
                }
                getFetching() {
                    return a
                }
                getState() {
                    return u
                }
                getUserAffinities() {
                    return u.userAffinities
                }
                getUserAffinitiesUserIds() {
                    return u.affinityUserIds
                }
            }
            d.displayName = "UserAffinitiesStore", d.persistKey = "UserAffinitiesStore", d.migrations = [e => null];
            var c = new d(r.default, {
                LOAD_USER_AFFINITIES_SUCCESS: function(e) {
                    var t;
                    let {
                        affinities: n
                    } = e;
                    u.userAffinities = null !== (t = n.user_affinities) && void 0 !== t ? t : [], u.lastFetched = Date.now(), o(), a = !1
                },
                LOAD_USER_AFFINITIES: function() {
                    a = !0
                },
                LOAD_USER_AFFINITIES_FAILURE: function() {
                    a = !1
                },
                LOGOUT: function() {
                    u = {
                        ...l
                    }
                }
            })
        }
    }
]);