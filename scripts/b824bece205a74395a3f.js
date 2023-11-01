(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["50579"], {
        846903: function(e, t, a) {
            "use strict";
            e.exports = a.p + "d12b5c285831f85c5eee.svg"
        },
        34212: function(e, t, a) {
            "use strict";
            e.exports = a.p + "c60749c54c9f5152ebbc.svg"
        },
        35188: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return n
                }
            });
            var n = (0, a("862205").createExperiment)({
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
        391533: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return n
                }
            });
            var n = (0, a("862205").createExperiment)({
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
        279171: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                useShouldShowLegacyPricingNotice: function() {
                    return I
                },
                default: function() {
                    return T
                }
            });
            var n = a("37983");
            a("884691");
            var s = a("414456"),
                r = a.n(s),
                i = a("627445"),
                l = a.n(i),
                u = a("423487"),
                o = a("701909"),
                c = a("35188"),
                d = a("391533"),
                m = a("296253"),
                f = a("49111"),
                _ = a("782340"),
                E = a("712109");

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
                        enabled: a
                    } = d.default.useExperiment({
                        location: "5ebfcf_2"
                    }, {
                        autoTrackExposure: !1
                    });
                return null != e && ("PL" === e ? t : "TR" === e && a)
            }
            var T = e => {
                var t, a;
                let {
                    fromBoostCancelModal: s,
                    className: i
                } = e, c = (0, m.default)(), d = I();
                if (!d) return null;
                return l(null != c, "Subscription billing country should not be null"), (0, n.jsxs)("div", {
                    className: r(E.noticeRoot, i),
                    children: [(0, n.jsx)("div", {
                        className: E.iconContainer,
                        children: (0, n.jsx)(u.default, {
                            className: E.infoIcon
                        })
                    }), (0, n.jsx)("div", {
                        className: E.text,
                        children: (t = c, a = s, "PL" === t ? a ? _.default.Messages.LOCALIZED_PRICING_PLN_LEGACY_PRICING_BOOST_WARNING : _.default.Messages.LOCALIZED_PRICING_PLN_LEGACY_PRICING_WARNING : "TR" === t ? a ? _.default.Messages.LOCALIZED_PRICING_TRY_LEGACY_PRICING_BOOST_WARNING : _.default.Messages.LOCALIZED_PRICING_TRY_LEGACY_PRICING_WARNING : a ? _.default.Messages.LOCALIZED_PRICING_LEGACY_PRICING_BOOST_WARNING : _.default.Messages.LOCALIZED_PRICING_LEGACY_PRICING_WARNING).format({
                            helpCenterLink: o.default.getArticleURL(f.HelpdeskArticles.LOCALIZED_PRICING)
                        })
                    })]
                })
            }
        },
        22368: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                usePaymentModalAnimationScene: function() {
                    return i
                }
            });
            var n = a("884691"),
                s = a("85336"),
                r = a("286350");

            function i(e) {
                let {
                    purchaseState: t,
                    currentStep: a,
                    initialScene: i,
                    purchaseScene: l,
                    errorScene: u,
                    successScene: o
                } = e, [c, d] = (0, n.useState)(i);
                return (0, n.useEffect)(() => {
                    t === r.PurchaseState.PURCHASING ? d(l) : t === r.PurchaseState.FAIL && d(u)
                }, [t, l, u]), (0, n.useEffect)(() => {
                    a === s.Step.CONFIRM && d(o)
                }, [a, o]), [c, d]
            }
        },
        160210: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return S
                }
            });
            var n = a("37983");
            a("884691");
            var s = a("414456"),
                r = a.n(s),
                i = a("446674"),
                l = a("77078"),
                u = a("206230"),
                o = a("145131"),
                c = a("41250"),
                d = a("379863"),
                m = a("707269"),
                f = a("192441"),
                _ = a("181108"),
                E = a("719923"),
                I = a("153160"),
                T = a("78345"),
                N = a("154889"),
                P = a("646718"),
                p = a("782340"),
                A = a("9180");
            let C = e => {
                let {
                    isTier0: t,
                    discountAmount: a
                } = e;
                return (0, n.jsx)("div", {
                    className: A.trialBadgeContainer,
                    children: (0, n.jsx)(l.Text, {
                        variant: "text-xs/bold",
                        className: r(A.trialOfferText, {
                            [A.tier0TrialOffer]: t
                        }),
                        children: void 0 !== a ? p.default.Messages.PREMIUM_DISCOUNT_AMOUNT_OFF_BADGE.format({
                            percent: a
                        }) : p.default.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT
                    })
                })
            };
            var S = function(e) {
                var t;
                let a;
                let {
                    hideCloseButton: s = !1,
                    hideCloseOnFullScreen: S,
                    shouldShowPrice: M,
                    plan: R,
                    renderAnimation: L,
                    onClose: y,
                    isGift: g,
                    upgradeToPremiumType: h,
                    headerTheme: O = T.PremiumHeaderThemes.DEFAULT,
                    className: x,
                    showTrialBadge: v = !1,
                    showDiscountBadge: B = !1
                } = e, b = h === P.PremiumTypes.TIER_2;
                a = h === P.PremiumTypes.TIER_0 ? d.default : h === P.PremiumTypes.TIER_1 ? m.default : c.default;
                let j = (0, i.useStateFromStores)([u.default], () => u.default.useReducedMotion),
                    D = (0, N.usePremiumDiscountOffer)(),
                    U = null == D ? void 0 : null === (t = D.discount) || void 0 === t ? void 0 : t.amount;
                return (0, n.jsxs)("div", {
                    "aria-hidden": !0,
                    className: r({
                        [A.headerBackground]: !b,
                        [O === T.PremiumHeaderThemes.WINTER ? A.tier2HeaderBackgroundWinterTheme : A.tier2HeaderBackground]: b
                    }, x),
                    children: [j || O !== T.PremiumHeaderThemes.WINTER ? null : (0, n.jsx)(_.default, {
                        className: A.snow,
                        wind: 5
                    }), (v || B) && (0, n.jsx)(f.default, {
                        className: A.trialBadgeSparkles
                    }), L(), (0, n.jsxs)(o.default, {
                        align: o.default.Align.START,
                        justify: o.default.Justify.BETWEEN,
                        className: A.headerTop,
                        children: [(0, n.jsxs)("div", {
                            children: [(0, n.jsx)(a, {
                                className: r(A.headerIcon, {
                                    [A.nonTier2]: !b
                                })
                            }), (v || B) && (0, n.jsx)(C, {
                                isTier0: h === P.PremiumTypes.TIER_0,
                                discountAmount: B ? U : void 0
                            })]
                        }), !s && (0, n.jsx)(l.ModalCloseButton, {
                            hideOnFullscreen: S,
                            onClick: y,
                            className: A.closeButton
                        })]
                    }), M && null != R ? (0, n.jsx)("div", {
                        className: A.price,
                        children: function(e, t) {
                            let a = E.default.getDefaultPrice(e),
                                {
                                    intervalType: n
                                } = E.default.getInterval(e),
                                s = (0, I.formatPrice)(a.amount, a.currency);
                            if (t) return s;
                            switch (n) {
                                case P.SubscriptionIntervalTypes.MONTH:
                                    return p.default.Messages.BILLING_PRICE_PER_MONTH.format({
                                        price: s
                                    });
                                case P.SubscriptionIntervalTypes.YEAR:
                                    return p.default.Messages.BILLING_PRICE_PER_YEAR.format({
                                        price: s
                                    })
                            }
                        }(R, g)
                    }) : null]
                })
            }
        },
        21367: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                Steps: function() {
                    return s
                },
                default: function() {
                    return H
                }
            });
            var n, s, r = a("37983"),
                i = a("884691"),
                l = a("414456"),
                u = a.n(l),
                o = a("627445"),
                c = a.n(o),
                d = a("446674"),
                m = a("819855"),
                f = a("77078"),
                _ = a("850068"),
                E = a("841098"),
                I = a("812204"),
                T = a("685665"),
                N = a("619935"),
                P = a("10514"),
                p = a("145131"),
                A = a("599110"),
                C = a("701909"),
                S = a("719923"),
                M = a("153160"),
                R = a("809071"),
                L = a("883662"),
                y = a("360262"),
                g = a("177998"),
                h = a("146163"),
                O = a("510928"),
                x = a("661128"),
                v = a("646718"),
                B = a("49111"),
                b = a("782340"),
                j = a("169664");
            async function D(e) {
                let {
                    premiumSubscription: t,
                    onClose: n,
                    setHasError: s,
                    setIsCancelling: i,
                    analyticsLocations: l,
                    analyticsLocation: u
                } = e;
                try {
                    if (i(!0), s(!1), t.status === B.SubscriptionStatusTypes.PAST_DUE) await (0, _.cancelSubscription)(t.id, l, u);
                    else {
                        var o, c;
                        let e = null !== (c = null === (o = t.renewalMutations) || void 0 === o ? void 0 : o.items) && void 0 !== c ? c : t.items;
                        await (0, _.updateSubscription)(t, {
                            items: (0, S.getItemsWithoutPremiumPlanItem)(e)
                        }, l, u)
                    }
                    n();
                    let e = S.default.getPremiumType(t.planId);
                    null != e && function(e) {
                        A.default.track(B.AnalyticEvents.OPEN_MODAL, {
                            type: "Nitro Churn Survey"
                        }), (0, f.openModalLazy)(async () => {
                            let {
                                default: t
                            } = await a.el("659291").then(a.bind(a, "659291"));
                            return a => (0, r.jsx)(t, {
                                ...a,
                                ...e
                            })
                        })
                    }({
                        premiumType: e
                    })
                } catch {
                    s(!0), i(!1)
                }
            }

            function U(e) {
                var t;
                let {
                    premiumSubscription: a,
                    premiumType: n,
                    setStep: l,
                    onClose: u,
                    whatYouLoseExperienceEnabled: o,
                    analyticsLocation: c
                } = e, d = (0, N.useBlockedPaymentsConfig)(), [_, I] = i.useState(!1), [P, A] = i.useState(!1), M = (0, E.default)(), {
                    analyticsLocations: R
                } = (0, T.default)(), L = null;
                L = a.status === B.SubscriptionStatusTypes.PAST_DUE ? b.default.Messages.PREMIUM_CANCEL_PAST_DUE_CONFIRM_BODY : n === v.PremiumTypes.TIER_0 ? d ? b.default.Messages.PREMIUM_CANCEL_CONFIRM_BODY_TIER_0_PAYMENT_BLOCKED_RUSSIA.format({
                    date: a.currentPeriodEnd,
                    helpdeskArticle: C.default.getArticleURL(B.HelpdeskArticles.BLOCKED_PAYMENTS)
                }) : b.default.Messages.PREMIUM_CANCEL_CONFIRM_BODY_TIER_0.format({
                    date: a.currentPeriodEnd
                }) : n === v.PremiumTypes.TIER_1 ? d ? b.default.Messages.PREMIUM_CANCEL_CONFIRM_BODY_TIER_1_PAYMENT_BLOCKED_RUSSIA.format({
                    date: a.currentPeriodEnd,
                    helpdeskArticle: C.default.getArticleURL(B.HelpdeskArticles.BLOCKED_PAYMENTS)
                }) : b.default.Messages.PREMIUM_CANCEL_CONFIRM_BODY_TIER_1.format({
                    date: a.currentPeriodEnd
                }) : d ? b.default.Messages.PREMIUM_CANCEL_CONFIRM_BODY_TIER_2_PAYMENT_BLOCKED_RUSSIA.format({
                    date: a.currentPeriodEnd,
                    helpdeskArticle: C.default.getArticleURL(B.HelpdeskArticles.BLOCKED_PAYMENTS)
                }) : b.default.Messages.PREMIUM_CANCEL_CONFIRM_BODY_TIER_2.format({
                    date: a.currentPeriodEnd
                });
                let y = a.items.some(e => {
                        let {
                            planId: t
                        } = e;
                        return !v.PREMIUM_PLANS.has(t)
                    }),
                    g = y && null == a.renewalMutations || (null === (t = a.renewalMutations) || void 0 === t ? void 0 : t.items.find(e => {
                        let {
                            planId: t
                        } = e;
                        return !v.PREMIUM_PLANS.has(t)
                    })) != null,
                    h = g ? (0, r.jsx)(f.Button, {
                        onClick: () => l(s.PREVIEW),
                        children: b.default.Messages.NEXT
                    }) : (0, r.jsx)(f.Button, {
                        color: f.Button.Colors.RED,
                        disabled: _,
                        onClick: async () => {
                            await D({
                                setHasError: A,
                                onClose: u,
                                premiumSubscription: a,
                                setIsCancelling: I,
                                analyticsLocations: R,
                                analyticsLocation: c
                            })
                        },
                        children: o ? b.default.Messages.CONFIRM : b.default.Messages.PREMIUM_CANCEL_CONFIRM_NEW.format({
                            planPremiumType: S.default.getDisplayPremiumType(a.planId)
                        })
                    }),
                    x = (0, r.jsx)(f.Button, {
                        look: f.Button.Looks.LINK,
                        color: (0, m.isThemeLight)(M) ? f.Button.Colors.PRIMARY : f.Button.Colors.WHITE,
                        onClick: u,
                        children: o ? b.default.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BACK : b.default.Messages.CANCEL
                    });
                return (0, r.jsxs)(r.Fragment, {
                    children: [o ? (0, r.jsx)(O.default, {
                        premiumType: n,
                        className: j.cancellationHeader,
                        onClose: u
                    }) : (0, r.jsxs)(f.ModalHeader, {
                        separator: !1,
                        children: [(0, r.jsx)(f.FormTitle, {
                            tag: f.FormTitleTags.H4,
                            children: b.default.Messages.PREMIUM_CANCEL_CONFIRM_TITLE.format({
                                planPremiumType: S.default.getDisplayPremiumType(a.planId)
                            })
                        }), (0, r.jsx)(f.ModalCloseButton, {
                            onClick: u
                        })]
                    }), (0, r.jsxs)(f.ModalContent, {
                        className: j.body,
                        children: [P ? (0, r.jsx)(f.FormErrorBlock, {
                            className: j.errorBlock,
                            children: b.default.Messages.BILLING_ERROR_GENERIC
                        }) : null, (0, r.jsx)("div", {
                            className: j.cancelImage
                        }), (0, r.jsx)("div", {
                            children: L
                        })]
                    }), (0, r.jsxs)(f.ModalFooter, {
                        justify: p.default.Justify.START,
                        children: [h, x]
                    })]
                })
            }

            function k(e) {
                var t, a;
                let {
                    premiumSubscription: n
                } = e, {
                    analyticsLocations: s
                } = (0, T.default)(), [i] = (0, R.useSubscriptionInvoicePreview)({
                    subscriptionId: n.id,
                    items: (0, S.getItemsWithoutPremiumPlanItem)(null !== (a = null === (t = n.renewalMutations) || void 0 === t ? void 0 : t.items) && void 0 !== a ? a : n.items),
                    renewal: !0,
                    analyticsLocations: s,
                    analyticsLocation: I.default.CANCEL_INVOICE_PREVIEW
                }), l = (0, d.useStateFromStores)([P.default], () => P.default.get(n.planId));
                if (null == i || null == l) return (0, r.jsx)(f.Spinner, {
                    className: j.loading
                });
                let {
                    intervalType: u,
                    intervalCount: o
                } = S.default.getIntervalForInvoice(i);
                return (0, r.jsxs)("div", {
                    className: j.bodyText,
                    children: [(0, r.jsx)("div", {
                        className: j.renewalInvoiceDate,
                        children: 0 !== i.total ? b.default.Messages.BILLING_SWITCH_PLAN_CHANGE_DATE_WITH_CHARGE.format({
                            renewalDate: i.subscriptionPeriodStart,
                            rate: (0, M.formatRate)((0, M.formatPrice)(i.total, i.currency), u, o)
                        }) : b.default.Messages.BILLING_SWITCH_PLAN_CHANGE_DATE.format({
                            renewalDate: i.subscriptionPeriodStart
                        })
                    }), (0, r.jsxs)(L.PremiumInvoiceTable, {
                        children: [(0, r.jsx)(L.PremiumInvoiceTableHeader, {
                            children: b.default.Messages.PREMIUM_SUBSCRIPTION_UPDATES
                        }), (0, r.jsx)(L.PremiumInvoiceTableRow, {
                            label: b.default.Messages.PREMIUM_SUBSCRIPTION_CANCELLED.format({
                                planName: S.default.getDisplayName(l.id)
                            }),
                            value: (0, S.getFormattedRateForPlan)(l),
                            className: j.invoiceCancelRow
                        }), (0, r.jsx)(L.PremiumInvoiceTableDivider, {}), (0, r.jsx)(h.SubscriptionInvoiceFooter, {
                            premiumSubscription: n,
                            renewalInvoice: i,
                            isUpdate: !0
                        })]
                    })]
                })
            }

            function G(e) {
                let {
                    premiumSubscription: t,
                    premiumType: a,
                    onBack: n,
                    onClose: s,
                    analyticsLocation: l
                } = e, [o, c] = i.useState(!1), [d, m] = i.useState(!1), {
                    analyticsLocations: _
                } = (0, T.default)();
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(O.default, {
                        premiumType: a,
                        onClose: s
                    }), (0, r.jsxs)(f.ModalContent, {
                        className: u(j.previewStep, j.body),
                        children: [d ? (0, r.jsx)(f.FormErrorBlock, {
                            className: j.errorBlock,
                            children: b.default.Messages.BILLING_ERROR_GENERIC
                        }) : null, (0, r.jsx)(k, {
                            premiumSubscription: t
                        })]
                    }), (0, r.jsxs)(f.ModalFooter, {
                        align: p.default.Align.CENTER,
                        justify: p.default.Justify.BETWEEN,
                        children: [(0, r.jsx)(f.Button, {
                            color: f.Button.Colors.RED,
                            disabled: o,
                            onClick: async () => {
                                await D({
                                    setHasError: m,
                                    onClose: s,
                                    premiumSubscription: t,
                                    setIsCancelling: c,
                                    analyticsLocations: _,
                                    analyticsLocation: l
                                })
                            },
                            children: b.default.Messages.PREMIUM_CANCEL_CONFIRM_NEW.format({
                                planPremiumType: S.default.getDisplayPremiumType(t.planId)
                            })
                        }), (0, r.jsx)(g.default, {
                            onClick: n
                        })]
                    })]
                })
            }

            function F(e) {
                var t;
                return {
                    subscription_id: e.id,
                    subscription_type: e.type,
                    subscription_plan_id: null === (t = (0, S.getPremiumPlanItem)(e)) || void 0 === t ? void 0 : t.id,
                    subscription_plan_gateway_plan_id: e.paymentGatewayPlanId
                }
            }(n = s || (s = {}))[n.WHAT_YOU_LOSE = 1] = "WHAT_YOU_LOSE", n[n.CONFIRM = 2] = "CONFIRM", n[n.PREVIEW = 3] = "PREVIEW";
            let w = {
                [s.WHAT_YOU_LOSE]: "What You're Losing",
                [s.CONFIRM]: "Confirm Cancellation",
                [s.PREVIEW]: "Preview Updated Subscription"
            };

            function H(e) {
                var t;
                let a, {
                        premiumSubscription: n,
                        transitionState: l,
                        onClose: u,
                        analyticsLocations: o,
                        analyticsLocation: d
                    } = e,
                    _ = null === (t = (0, S.getPremiumPlanItem)(n)) || void 0 === t ? void 0 : t.planId,
                    N = null != _ ? S.default.getPremiumType(_) : null;
                c(null != N, "Should not be cancelling Nitro without premiumType");
                let P = (0, E.default)();
                i.useEffect(() => {
                    A.default.track(B.AnalyticEvents.CANCELLATION_FLOW_STARTED, F(n))
                }, [n]);
                let p = N === v.PremiumTypes.TIER_0 || N === v.PremiumTypes.TIER_1 || N === v.PremiumTypes.TIER_2,
                    C = p ? s.WHAT_YOU_LOSE : s.CONFIRM,
                    {
                        AnalyticsLocationProvider: M
                    } = (0, T.default)(o, I.default.PREMIUM_SUBSCRIPTION_CANCELLATION_MODAL),
                    [R, L, g, h] = function(e, t, a) {
                        let [n, s] = i.useState(e), [r, l] = i.useState(Date.now()), [u] = i.useState(Date.now()), o = i.useCallback(e => {
                            A.default.track(B.AnalyticEvents.CANCELLATION_FLOW_STEP, {
                                from_step: w[n],
                                to_step: w[e],
                                step_duration_ms: Date.now() - r,
                                flow_duration_ms: Date.now() - u,
                                location_stack: a,
                                ...F(t)
                            }), s(e), l(Date.now())
                        }, [a, u, r, n, t]);
                        return [n, o, r, u]
                    }(C, n, o);
                (0, x.useUnsupportedExternalSubscriptionModalHandler)(n, u, !1);
                let O = e => {
                    u(), A.default.track(B.AnalyticEvents.CANCELLATION_FLOW_STEP, {
                        from_step: w[e],
                        to_step: null,
                        step_duration_ms: Date.now() - g,
                        flow_duration_ms: Date.now() - h,
                        location_stack: o,
                        ...F(n)
                    })
                };
                switch (R) {
                    case s.WHAT_YOU_LOSE:
                        a = (0, r.jsx)(y.default, {
                            premiumType: N,
                            titleText: b.default.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_TITLE,
                            subtitleText: b.default.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_SUBTITLE.format(),
                            footer: (0, r.jsxs)("div", {
                                className: j.whatYouLoseButtonContainer,
                                children: [(0, r.jsx)(f.Button, {
                                    onClick: () => L(s.CONFIRM),
                                    children: b.default.Messages.CONTINUE
                                }), (0, r.jsx)(f.Button, {
                                    look: f.Button.Looks.LINK,
                                    color: (0, m.isThemeDark)(P) ? f.Button.Colors.WHITE : f.Button.Colors.PRIMARY,
                                    onClick: () => O(R),
                                    children: b.default.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BACK
                                })]
                            }),
                            onClose: () => O(R)
                        });
                        break;
                    case s.CONFIRM:
                        a = (0, r.jsx)(U, {
                            premiumSubscription: n,
                            premiumType: N,
                            setStep: L,
                            onClose: () => O(R),
                            whatYouLoseExperienceEnabled: p,
                            analyticsLocation: d
                        });
                        break;
                    case s.PREVIEW:
                        a = (0, r.jsx)(G, {
                            premiumSubscription: n,
                            premiumType: N,
                            onBack: () => L(s.CONFIRM),
                            onClose: () => O(R),
                            analyticsLocation: d
                        });
                        break;
                    default:
                        throw Error("Unexpected step: ".concat(R))
                }
                return (0, r.jsx)(M, {
                    children: (0, r.jsx)(f.ModalRoot, {
                        transitionState: l,
                        children: a
                    })
                })
            }
        },
        177998: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return l
                }
            });
            var n = a("37983");
            a("884691");
            var s = a("77078"),
                r = a("782340"),
                i = a("816318"),
                l = e => {
                    let {
                        onClick: t
                    } = e;
                    return (0, n.jsx)(s.Anchor, {
                        onClick: t,
                        className: i.link,
                        children: r.default.Messages.BACK
                    })
                }
        },
        992977: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                PremiumModalHeaderAnimationTier0: function() {
                    return i
                },
                PremiumModalHeaderAnimationTier1: function() {
                    return l
                },
                PremiumModalHeaderAnimationTier2: function() {
                    return u
                }
            });
            var n = a("37983");
            a("884691");
            var s = a("467831"),
                r = a("22368");

            function i(e) {
                let {
                    currentStep: t,
                    purchaseState: a,
                    className: i,
                    pause: l
                } = e, [u, o] = (0, r.usePaymentModalAnimationScene)({
                    purchaseState: a,
                    currentStep: t,
                    initialScene: s.PremiumPaymentAnimationTier0.Scenes.NORMAL,
                    purchaseScene: s.PremiumPaymentAnimationTier0.Scenes.SPEED_START,
                    errorScene: s.PremiumPaymentAnimationTier0.Scenes.NORMAL,
                    successScene: s.PremiumPaymentAnimationTier0.Scenes.FINISH
                });
                return (0, n.jsx)(s.PremiumPaymentAnimationTier0, {
                    className: i,
                    nextScene: u,
                    onScenePlay: e => o(s.PremiumPaymentAnimationTier0.getNextScene(e)),
                    pauseWhileUnfocused: !1,
                    pause: l
                })
            }

            function l(e) {
                let {
                    currentStep: t,
                    purchaseState: a,
                    className: i,
                    pause: l
                } = e, [u, o] = (0, r.usePaymentModalAnimationScene)({
                    purchaseState: a,
                    currentStep: t,
                    initialScene: s.PremiumPaymentAnimationTier1.Scenes.NORMAL,
                    purchaseScene: s.PremiumPaymentAnimationTier1.Scenes.SPEED_START,
                    errorScene: s.PremiumPaymentAnimationTier1.Scenes.NORMAL,
                    successScene: s.PremiumPaymentAnimationTier1.Scenes.FINISH
                });
                return (0, n.jsx)(s.PremiumPaymentAnimationTier1, {
                    className: i,
                    nextScene: u,
                    onScenePlay: e => o(s.PremiumPaymentAnimationTier1.getNextScene(e)),
                    pauseWhileUnfocused: !1,
                    pause: l
                })
            }

            function u(e) {
                let {
                    currentStep: t,
                    purchaseState: a,
                    className: i,
                    pause: l
                } = e, [u, o] = (0, r.usePaymentModalAnimationScene)({
                    purchaseState: a,
                    currentStep: t,
                    initialScene: s.PremiumPaymentAnimationTier2.Scenes.IDLE_ENTRY,
                    purchaseScene: s.PremiumPaymentAnimationTier2.Scenes.BOOST_START,
                    errorScene: s.PremiumPaymentAnimationTier2.Scenes.ERROR,
                    successScene: s.PremiumPaymentAnimationTier2.Scenes.BOOST_END
                });
                return (0, n.jsx)(s.PremiumPaymentAnimationTier2, {
                    className: i,
                    nextScene: u,
                    onScenePlay: e => o(s.PremiumPaymentAnimationTier2.getNextScene(e)),
                    pauseWhileUnfocused: !1,
                    pause: l
                })
            }
        },
        510928: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return T
                }
            });
            var n = a("37983");
            a("884691");
            var s = a("414456"),
                r = a.n(s),
                i = a("446674"),
                l = a("77078"),
                u = a("206230"),
                o = a("85336"),
                c = a("659632"),
                d = a("78345"),
                m = a("160210"),
                f = a("992977"),
                _ = a("646718"),
                E = a("782340"),
                I = a("721145");

            function T(e) {
                let {
                    currentStep: t,
                    className: a,
                    purchaseState: s,
                    premiumType: T,
                    useWinterTheme: N = !1,
                    onClose: P,
                    hideCloseButton: p,
                    showTrialBadge: A,
                    showDiscountBadge: C,
                    giftRecipient: S
                } = e, M = (0, i.useStateFromStores)([u.default], () => u.default.useReducedMotion), R = N ? d.PremiumHeaderThemes.WINTER : d.PremiumHeaderThemes.DEFAULT;
                return (0, c.isCustomGiftEnabled)(S) && t !== o.Step.CONFIRM ? (0, n.jsxs)(l.ModalHeader, {
                    className: I.modalHeaderCustomGift,
                    separator: !1,
                    children: [(0, n.jsx)("div", {
                        className: I.giftNitroInfo,
                        children: (0, n.jsx)(l.Heading, {
                            variant: "heading-lg/semibold",
                            children: (() => {
                                switch (t) {
                                    case o.Step.PLAN_SELECT:
                                        return E.default.Messages.GIFT_NITRO_ACTION;
                                    case o.Step.ADD_PAYMENT_STEPS:
                                        return E.default.Messages.PAYMENT_METHOD_SELECTION;
                                    case o.Step.REVIEW:
                                        return E.default.Messages.GIFT_PURCHASE_REVIEW;
                                    default:
                                        return E.default.Messages.GIFT_NITRO_ACTION
                                }
                            })()
                        })
                    }), (0, n.jsx)(l.ModalCloseButton, {
                        onClick: P,
                        className: I.closeButton
                    })]
                }) : (0, n.jsx)(l.ModalHeader, {
                    className: r(I.modalHeader, a),
                    separator: !1,
                    children: (0, n.jsx)(m.default, {
                        hideCloseOnFullScreen: !0,
                        hideCloseButton: p,
                        shouldShowPrice: !0,
                        upgradeToPremiumType: T,
                        renderAnimation: () => T === _.PremiumTypes.TIER_0 ? (0, n.jsx)(f.PremiumModalHeaderAnimationTier0, {
                            className: I.headerAnimation,
                            currentStep: t,
                            purchaseState: s,
                            pause: M
                        }) : T === _.PremiumTypes.TIER_1 ? (0, n.jsx)(f.PremiumModalHeaderAnimationTier1, {
                            className: I.headerAnimation,
                            currentStep: t,
                            purchaseState: s,
                            pause: M
                        }) : (0, n.jsx)(f.PremiumModalHeaderAnimationTier2, {
                            className: I.headerAnimation,
                            currentStep: t,
                            purchaseState: s,
                            pause: M
                        }),
                        plan: null,
                        isGift: !1,
                        className: I.header,
                        onClose: P,
                        headerTheme: R,
                        showTrialBadge: A,
                        showDiscountBadge: C
                    })
                })
            }
        },
        661128: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                useUnsupportedExternalSubscriptionModalHandler: function() {
                    return d
                },
                useSubscriptionEntitlements: function() {
                    return f
                }
            });
            var n = a("884691"),
                s = a("446674"),
                r = a("404118"),
                i = a("10514"),
                l = a("437712"),
                u = a("719923"),
                o = a("843455"),
                c = a("782340");

            function d(e, t, a) {
                n.useEffect(() => {
                    null != e && e.isPurchasedExternally && null != e.paymentGateway && !a && (r.default.show({
                        title: c.default.Messages.BILLING_EXTERNAL_HEADER.format({
                            paymentGatewayName: o.PaymentGatewayToFriendlyName[e.paymentGateway]
                        }),
                        body: c.default.Messages.BILLING_EXTERNAL_MANAGE_ELSEWHERE.format({
                            paymentGatewayName: o.PaymentGatewayToFriendlyName[e.paymentGateway],
                            subscriptionManagementLink: (0, u.getExternalSubscriptionMethodUrl)(e.paymentGateway, "SUBSCRIPTION_MANAGEMENT")
                        }),
                        confirmText: c.default.Messages.OKAY
                    }), t())
                }, [e])
            }
            let m = [];

            function f(e, t) {
                let a = (0, s.useStateFromStores)([i.default], () => null != e ? i.default.get(e) : null),
                    r = (0, s.useStateFromStores)([l.default], () => {
                        var e;
                        return null != a && null !== (e = l.default.getForSku(a.skuId)) && void 0 !== e ? e : m
                    }),
                    o = n.useMemo(() => Array.from(r).filter(e => {
                        let {
                            parentId: t,
                            consumed: a
                        } = e;
                        return null != t && !a
                    }), [r]),
                    c = !t && null != a && null != o && o.length >= u.default.getIntervalMonths(a.interval, a.intervalCount);
                return {
                    hasEntitlements: c,
                    entitlements: o
                }
            }
        }
    }
]);