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
                    return m
                },
                default: function() {
                    return C
                }
            });
            var n = a("920040");
            a("773670");
            var l = a("575482"),
                s = a.n(l),
                r = a("161179"),
                i = a.n(r),
                o = a("423487"),
                u = a("701909"),
                d = a("35188"),
                c = a("391533"),
                _ = a("296253"),
                E = a("49111"),
                f = a("782340"),
                I = a("331392");

            function m() {
                let e = (0, _.default)(),
                    {
                        enabled: t
                    } = d.default.useExperiment({
                        location: "5ebfcf_1"
                    }, {
                        autoTrackExposure: !1
                    }),
                    {
                        enabled: a
                    } = c.default.useExperiment({
                        location: "5ebfcf_2"
                    }, {
                        autoTrackExposure: !1
                    });
                return null != e && ("PL" === e ? t : "TR" === e && a)
            }
            var C = e => {
                var t, a;
                let {
                    fromBoostCancelModal: l,
                    className: r
                } = e, d = (0, _.default)(), c = m();
                if (!c) return null;
                return i(null != d, "Subscription billing country should not be null"), (0, n.jsxs)("div", {
                    className: s(I.noticeRoot, r),
                    children: [(0, n.jsx)("div", {
                        className: I.iconContainer,
                        children: (0, n.jsx)(o.default, {
                            className: I.infoIcon
                        })
                    }), (0, n.jsx)("div", {
                        className: I.text,
                        children: (t = d, a = l, "PL" === t ? a ? f.default.Messages.LOCALIZED_PRICING_PLN_LEGACY_PRICING_BOOST_WARNING : f.default.Messages.LOCALIZED_PRICING_PLN_LEGACY_PRICING_WARNING : "TR" === t ? a ? f.default.Messages.LOCALIZED_PRICING_TRY_LEGACY_PRICING_BOOST_WARNING : f.default.Messages.LOCALIZED_PRICING_TRY_LEGACY_PRICING_WARNING : a ? f.default.Messages.LOCALIZED_PRICING_LEGACY_PRICING_BOOST_WARNING : f.default.Messages.LOCALIZED_PRICING_LEGACY_PRICING_WARNING).format({
                            helpCenterLink: u.default.getArticleURL(E.HelpdeskArticles.LOCALIZED_PRICING)
                        })
                    })]
                })
            }
        },
        21367: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                Steps: function() {
                    return l
                },
                default: function() {
                    return W
                }
            });
            var n, l, s = a("920040"),
                r = a("773670"),
                i = a("575482"),
                o = a.n(i),
                u = a("161179"),
                d = a.n(u),
                c = a("498225"),
                _ = a("819855"),
                E = a("77078"),
                f = a("850068"),
                I = a("841098"),
                m = a("812204"),
                C = a("685665"),
                N = a("619935"),
                p = a("10514"),
                M = a("145131"),
                R = a("599110"),
                L = a("701909"),
                P = a("719923"),
                T = a("153160"),
                A = a("809071"),
                S = a("883662"),
                g = a("360262"),
                y = a("177998"),
                O = a("146163"),
                b = a("510928"),
                h = a("661128"),
                v = a("646718"),
                x = a("49111"),
                k = a("782340"),
                B = a("487628");
            async function U(e) {
                let {
                    premiumSubscription: t,
                    onClose: n,
                    setHasError: l,
                    setIsCancelling: r,
                    analyticsLocations: i,
                    analyticsLocation: o
                } = e;
                try {
                    if (r(!0), l(!1), t.status === x.SubscriptionStatusTypes.PAST_DUE) await (0, f.cancelSubscription)(t.id, i, o);
                    else {
                        var u, d;
                        let e = null !== (d = null === (u = t.renewalMutations) || void 0 === u ? void 0 : u.items) && void 0 !== d ? d : t.items;
                        await (0, f.updateSubscription)(t, {
                            items: (0, P.getItemsWithoutPremiumPlanItem)(e)
                        }, i, o)
                    }
                    n();
                    let e = P.default.getPremiumType(t.planId);
                    null != e && function(e) {
                        R.default.track(x.AnalyticEvents.OPEN_MODAL, {
                            type: "Nitro Churn Survey"
                        }), (0, E.openModalLazy)(async () => {
                            let {
                                default: t
                            } = await a.el("659291").then(a.bind(a, "659291"));
                            return a => (0, s.jsx)(t, {
                                ...a,
                                ...e
                            })
                        })
                    }({
                        premiumType: e
                    })
                } catch {
                    l(!0), r(!1)
                }
            }

            function D(e) {
                var t;
                let {
                    premiumSubscription: a,
                    premiumType: n,
                    setStep: i,
                    onClose: o,
                    whatYouLoseExperienceEnabled: u,
                    analyticsLocation: d
                } = e, c = (0, N.useBlockedPaymentsConfig)(), [f, m] = r.useState(!1), [p, R] = r.useState(!1), T = (0, I.default)(), {
                    analyticsLocations: A
                } = (0, C.default)(), S = null;
                S = a.status === x.SubscriptionStatusTypes.PAST_DUE ? k.default.Messages.PREMIUM_CANCEL_PAST_DUE_CONFIRM_BODY : n === v.PremiumTypes.TIER_0 ? c ? k.default.Messages.PREMIUM_CANCEL_CONFIRM_BODY_TIER_0_PAYMENT_BLOCKED_RUSSIA.format({
                    date: a.currentPeriodEnd,
                    helpdeskArticle: L.default.getArticleURL(x.HelpdeskArticles.BLOCKED_PAYMENTS)
                }) : k.default.Messages.PREMIUM_CANCEL_CONFIRM_BODY_TIER_0.format({
                    date: a.currentPeriodEnd
                }) : n === v.PremiumTypes.TIER_1 ? c ? k.default.Messages.PREMIUM_CANCEL_CONFIRM_BODY_TIER_1_PAYMENT_BLOCKED_RUSSIA.format({
                    date: a.currentPeriodEnd,
                    helpdeskArticle: L.default.getArticleURL(x.HelpdeskArticles.BLOCKED_PAYMENTS)
                }) : k.default.Messages.PREMIUM_CANCEL_CONFIRM_BODY_TIER_1.format({
                    date: a.currentPeriodEnd
                }) : c ? k.default.Messages.PREMIUM_CANCEL_CONFIRM_BODY_TIER_2_PAYMENT_BLOCKED_RUSSIA.format({
                    date: a.currentPeriodEnd,
                    helpdeskArticle: L.default.getArticleURL(x.HelpdeskArticles.BLOCKED_PAYMENTS)
                }) : k.default.Messages.PREMIUM_CANCEL_CONFIRM_BODY_TIER_2.format({
                    date: a.currentPeriodEnd
                });
                let g = a.items.some(e => {
                        let {
                            planId: t
                        } = e;
                        return !v.PREMIUM_PLANS.has(t)
                    }),
                    y = g && null == a.renewalMutations || (null === (t = a.renewalMutations) || void 0 === t ? void 0 : t.items.find(e => {
                        let {
                            planId: t
                        } = e;
                        return !v.PREMIUM_PLANS.has(t)
                    })) != null,
                    O = y ? (0, s.jsx)(E.Button, {
                        onClick: () => i(l.PREVIEW),
                        children: k.default.Messages.NEXT
                    }) : (0, s.jsx)(E.Button, {
                        color: E.Button.Colors.RED,
                        disabled: f,
                        onClick: async () => {
                            await U({
                                setHasError: R,
                                onClose: o,
                                premiumSubscription: a,
                                setIsCancelling: m,
                                analyticsLocations: A,
                                analyticsLocation: d
                            })
                        },
                        children: u ? k.default.Messages.CONFIRM : k.default.Messages.PREMIUM_CANCEL_CONFIRM_NEW.format({
                            planPremiumType: P.default.getDisplayPremiumType(a.planId)
                        })
                    }),
                    h = (0, s.jsx)(E.Button, {
                        look: E.Button.Looks.LINK,
                        color: (0, _.isThemeLight)(T) ? E.Button.Colors.PRIMARY : E.Button.Colors.WHITE,
                        onClick: o,
                        children: u ? k.default.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BACK : k.default.Messages.CANCEL
                    });
                return (0, s.jsxs)(s.Fragment, {
                    children: [u ? (0, s.jsx)(b.default, {
                        premiumType: n,
                        className: B.cancellationHeader,
                        onClose: o
                    }) : (0, s.jsxs)(E.ModalHeader, {
                        separator: !1,
                        children: [(0, s.jsx)(E.FormTitle, {
                            tag: E.FormTitleTags.H4,
                            children: k.default.Messages.PREMIUM_CANCEL_CONFIRM_TITLE.format({
                                planPremiumType: P.default.getDisplayPremiumType(a.planId)
                            })
                        }), (0, s.jsx)(E.ModalCloseButton, {
                            onClick: o
                        })]
                    }), (0, s.jsxs)(E.ModalContent, {
                        className: B.body,
                        children: [p ? (0, s.jsx)(E.FormErrorBlock, {
                            className: B.errorBlock,
                            children: k.default.Messages.BILLING_ERROR_GENERIC
                        }) : null, (0, s.jsx)("div", {
                            className: B.cancelImage
                        }), (0, s.jsx)("div", {
                            children: S
                        })]
                    }), (0, s.jsxs)(E.ModalFooter, {
                        justify: M.default.Justify.START,
                        children: [O, h]
                    })]
                })
            }

            function w(e) {
                var t, a;
                let {
                    premiumSubscription: n
                } = e, {
                    analyticsLocations: l
                } = (0, C.default)(), [r] = (0, A.useSubscriptionInvoicePreview)({
                    subscriptionId: n.id,
                    items: (0, P.getItemsWithoutPremiumPlanItem)(null !== (a = null === (t = n.renewalMutations) || void 0 === t ? void 0 : t.items) && void 0 !== a ? a : n.items),
                    renewal: !0,
                    analyticsLocations: l,
                    analyticsLocation: m.default.CANCEL_INVOICE_PREVIEW
                }), i = (0, c.useStateFromStores)([p.default], () => p.default.get(n.planId));
                if (null == r || null == i) return (0, s.jsx)(E.Spinner, {
                    className: B.loading
                });
                let {
                    intervalType: o,
                    intervalCount: u
                } = P.default.getIntervalForInvoice(r);
                return (0, s.jsxs)("div", {
                    className: B.bodyText,
                    children: [(0, s.jsx)("div", {
                        className: B.renewalInvoiceDate,
                        children: 0 !== r.total ? k.default.Messages.BILLING_SWITCH_PLAN_CHANGE_DATE_WITH_CHARGE.format({
                            renewalDate: r.subscriptionPeriodStart,
                            rate: (0, T.formatRate)((0, T.formatPrice)(r.total, r.currency), o, u)
                        }) : k.default.Messages.BILLING_SWITCH_PLAN_CHANGE_DATE.format({
                            renewalDate: r.subscriptionPeriodStart
                        })
                    }), (0, s.jsxs)(S.PremiumInvoiceTable, {
                        children: [(0, s.jsx)(S.PremiumInvoiceTableHeader, {
                            children: k.default.Messages.PREMIUM_SUBSCRIPTION_UPDATES
                        }), (0, s.jsx)(S.PremiumInvoiceTableRow, {
                            label: k.default.Messages.PREMIUM_SUBSCRIPTION_CANCELLED.format({
                                planName: P.default.getDisplayName(i.id)
                            }),
                            value: (0, P.getFormattedRateForPlan)(i),
                            className: B.invoiceCancelRow
                        }), (0, s.jsx)(S.PremiumInvoiceTableDivider, {}), (0, s.jsx)(O.SubscriptionInvoiceFooter, {
                            premiumSubscription: n,
                            renewalInvoice: r,
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
                    onClose: l,
                    analyticsLocation: i
                } = e, [u, d] = r.useState(!1), [c, _] = r.useState(!1), {
                    analyticsLocations: f
                } = (0, C.default)();
                return (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)(b.default, {
                        premiumType: a,
                        onClose: l
                    }), (0, s.jsxs)(E.ModalContent, {
                        className: o(B.previewStep, B.body),
                        children: [c ? (0, s.jsx)(E.FormErrorBlock, {
                            className: B.errorBlock,
                            children: k.default.Messages.BILLING_ERROR_GENERIC
                        }) : null, (0, s.jsx)(w, {
                            premiumSubscription: t
                        })]
                    }), (0, s.jsxs)(E.ModalFooter, {
                        align: M.default.Align.CENTER,
                        justify: M.default.Justify.BETWEEN,
                        children: [(0, s.jsx)(E.Button, {
                            color: E.Button.Colors.RED,
                            disabled: u,
                            onClick: async () => {
                                await U({
                                    setHasError: _,
                                    onClose: l,
                                    premiumSubscription: t,
                                    setIsCancelling: d,
                                    analyticsLocations: f,
                                    analyticsLocation: i
                                })
                            },
                            children: k.default.Messages.PREMIUM_CANCEL_CONFIRM_NEW.format({
                                planPremiumType: P.default.getDisplayPremiumType(t.planId)
                            })
                        }), (0, s.jsx)(y.default, {
                            onClick: n
                        })]
                    })]
                })
            }

            function j(e) {
                var t;
                return {
                    subscription_id: e.id,
                    subscription_type: e.type,
                    subscription_plan_id: null === (t = (0, P.getPremiumPlanItem)(e)) || void 0 === t ? void 0 : t.id,
                    subscription_plan_gateway_plan_id: e.paymentGatewayPlanId
                }
            }(n = l || (l = {}))[n.WHAT_YOU_LOSE = 1] = "WHAT_YOU_LOSE", n[n.CONFIRM = 2] = "CONFIRM", n[n.PREVIEW = 3] = "PREVIEW";
            let F = {
                [l.WHAT_YOU_LOSE]: "What You're Losing",
                [l.CONFIRM]: "Confirm Cancellation",
                [l.PREVIEW]: "Preview Updated Subscription"
            };

            function W(e) {
                var t;
                let a, {
                        premiumSubscription: n,
                        transitionState: i,
                        onClose: o,
                        analyticsLocations: u,
                        analyticsLocation: c
                    } = e,
                    f = null === (t = (0, P.getPremiumPlanItem)(n)) || void 0 === t ? void 0 : t.planId,
                    N = null != f ? P.default.getPremiumType(f) : null;
                d(null != N, "Should not be cancelling Nitro without premiumType");
                let p = (0, I.default)();
                r.useEffect(() => {
                    R.default.track(x.AnalyticEvents.CANCELLATION_FLOW_STARTED, j(n))
                }, [n]);
                let M = N === v.PremiumTypes.TIER_0 || N === v.PremiumTypes.TIER_1 || N === v.PremiumTypes.TIER_2,
                    L = M ? l.WHAT_YOU_LOSE : l.CONFIRM,
                    {
                        AnalyticsLocationProvider: T
                    } = (0, C.default)(u, m.default.PREMIUM_SUBSCRIPTION_CANCELLATION_MODAL),
                    [A, S, y, O] = function(e, t, a) {
                        let [n, l] = r.useState(e), [s, i] = r.useState(Date.now()), [o] = r.useState(Date.now()), u = r.useCallback(e => {
                            R.default.track(x.AnalyticEvents.CANCELLATION_FLOW_STEP, {
                                from_step: F[n],
                                to_step: F[e],
                                step_duration_ms: Date.now() - s,
                                flow_duration_ms: Date.now() - o,
                                location_stack: a,
                                ...j(t)
                            }), l(e), i(Date.now())
                        }, [a, o, s, n, t]);
                        return [n, u, s, o]
                    }(L, n, u);
                (0, h.useUnsupportedExternalSubscriptionModalHandler)(n, o, !1);
                let b = e => {
                    o(), R.default.track(x.AnalyticEvents.CANCELLATION_FLOW_STEP, {
                        from_step: F[e],
                        to_step: null,
                        step_duration_ms: Date.now() - y,
                        flow_duration_ms: Date.now() - O,
                        location_stack: u,
                        ...j(n)
                    })
                };
                switch (A) {
                    case l.WHAT_YOU_LOSE:
                        a = (0, s.jsx)(g.default, {
                            premiumType: N,
                            titleText: k.default.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_TITLE,
                            subtitleText: k.default.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_SUBTITLE.format(),
                            footer: (0, s.jsxs)("div", {
                                className: B.whatYouLoseButtonContainer,
                                children: [(0, s.jsx)(E.Button, {
                                    onClick: () => S(l.CONFIRM),
                                    children: k.default.Messages.CONTINUE
                                }), (0, s.jsx)(E.Button, {
                                    look: E.Button.Looks.LINK,
                                    color: (0, _.isThemeDark)(p) ? E.Button.Colors.WHITE : E.Button.Colors.PRIMARY,
                                    onClick: () => b(A),
                                    children: k.default.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BACK
                                })]
                            }),
                            onClose: () => b(A)
                        });
                        break;
                    case l.CONFIRM:
                        a = (0, s.jsx)(D, {
                            premiumSubscription: n,
                            premiumType: N,
                            setStep: S,
                            onClose: () => b(A),
                            whatYouLoseExperienceEnabled: M,
                            analyticsLocation: c
                        });
                        break;
                    case l.PREVIEW:
                        a = (0, s.jsx)(G, {
                            premiumSubscription: n,
                            premiumType: N,
                            onBack: () => S(l.CONFIRM),
                            onClose: () => b(A),
                            analyticsLocation: c
                        });
                        break;
                    default:
                        throw Error("Unexpected step: ".concat(A))
                }
                return (0, s.jsx)(T, {
                    children: (0, s.jsx)(E.ModalRoot, {
                        transitionState: i,
                        children: a
                    })
                })
            }
        },
        177998: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return i
                }
            });
            var n = a("920040");
            a("773670");
            var l = a("77078"),
                s = a("782340"),
                r = a("179753"),
                i = e => {
                    let {
                        onClick: t
                    } = e;
                    return (0, n.jsx)(l.Anchor, {
                        onClick: t,
                        className: r.link,
                        children: s.default.Messages.BACK
                    })
                }
        },
        661128: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                useUnsupportedExternalSubscriptionModalHandler: function() {
                    return c
                },
                useSubscriptionEntitlements: function() {
                    return E
                }
            });
            var n = a("773670"),
                l = a("498225"),
                s = a("404118"),
                r = a("10514"),
                i = a("437712"),
                o = a("719923"),
                u = a("809924"),
                d = a("782340");

            function c(e, t, a) {
                n.useEffect(() => {
                    null != e && e.isPurchasedExternally && null != e.paymentGateway && !a && (s.default.show({
                        title: d.default.Messages.BILLING_EXTERNAL_HEADER.format({
                            paymentGatewayName: u.PaymentGatewayToFriendlyName[e.paymentGateway]
                        }),
                        body: d.default.Messages.BILLING_EXTERNAL_MANAGE_ELSEWHERE.format({
                            paymentGatewayName: u.PaymentGatewayToFriendlyName[e.paymentGateway],
                            subscriptionManagementLink: (0, o.getExternalSubscriptionMethodUrl)(e.paymentGateway, "SUBSCRIPTION_MANAGEMENT")
                        }),
                        confirmText: d.default.Messages.OKAY
                    }), t())
                }, [e])
            }
            let _ = [];

            function E(e, t) {
                let a = (0, l.useStateFromStores)([r.default], () => null != e ? r.default.get(e) : null),
                    s = (0, l.useStateFromStores)([i.default], () => {
                        var e;
                        return null != a && null !== (e = i.default.getForSku(a.skuId)) && void 0 !== e ? e : _
                    }),
                    u = n.useMemo(() => Array.from(s).filter(e => {
                        let {
                            parentId: t,
                            consumed: a
                        } = e;
                        return null != t && !a
                    }), [s]),
                    d = !t && null != a && null != u && u.length >= o.default.getIntervalMonths(a.interval, a.intervalCount);
                return {
                    hasEntitlements: d,
                    entitlements: u
                }
            }
        }
    }
]);