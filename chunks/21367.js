            "use strict";
            a.r(t), a.d(t, {
                Steps: function() {
                    return n
                },
                default: function() {
                    return Y
                }
            }), a("222007"), a("70102");
            var n, l, s = a("37983"),
                r = a("884691"),
                i = a("414456"),
                o = a.n(i),
                u = a("627445"),
                d = a.n(u),
                c = a("446674"),
                _ = a("819855"),
                E = a("77078"),
                f = a("850068"),
                m = a("841098"),
                I = a("812204"),
                C = a("685665"),
                N = a("619935"),
                p = a("10514"),
                M = a("145131"),
                L = a("599110"),
                R = a("701909"),
                P = a("719923"),
                T = a("153160"),
                A = a("809071"),
                g = a("883662"),
                S = a("360262"),
                y = a("177998"),
                O = a("146163"),
                b = a("510928"),
                h = a("661128"),
                v = a("646718"),
                x = a("49111"),
                B = a("782340"),
                k = a("169664");
            async function D(e) {
                let {
                    premiumSubscription: t,
                    onClose: a,
                    setHasError: n,
                    setIsCancelling: l,
                    analyticsLocations: s,
                    analyticsLocation: r
                } = e;
                try {
                    if (l(!0), n(!1), t.status === x.SubscriptionStatusTypes.PAST_DUE) await (0, f.cancelSubscription)(t.id, s, r);
                    else {
                        var i, o;
                        let e = null !== (o = null === (i = t.renewalMutations) || void 0 === i ? void 0 : i.items) && void 0 !== o ? o : t.items;
                        await (0, f.updateSubscription)(t, {
                            items: (0, P.getItemsWithoutPremiumPlanItem)(e)
                        }, s, r)
                    }
                    a()
                } catch {
                    n(!0), l(!1)
                }
            }

            function U(e) {
                var t;
                let {
                    premiumSubscription: a,
                    premiumType: n,
                    setStep: l,
                    onClose: i,
                    whatYouLoseExperienceEnabled: o,
                    analyticsLocation: u
                } = e, d = (0, N.useBlockedPaymentsConfig)(), [c, f] = r.useState(!1), [I, p] = r.useState(!1), L = (0, m.default)(), {
                    analyticsLocations: T
                } = (0, C.default)(), A = null;
                A = a.status === x.SubscriptionStatusTypes.PAST_DUE ? B.default.Messages.PREMIUM_CANCEL_PAST_DUE_CONFIRM_BODY : n === v.PremiumTypes.TIER_0 ? d ? B.default.Messages.PREMIUM_CANCEL_CONFIRM_BODY_TIER_0_PAYMENT_BLOCKED_RUSSIA.format({
                    date: a.currentPeriodEnd,
                    helpdeskArticle: R.default.getArticleURL(x.HelpdeskArticles.BLOCKED_PAYMENTS)
                }) : B.default.Messages.PREMIUM_CANCEL_CONFIRM_BODY_TIER_0.format({
                    date: a.currentPeriodEnd
                }) : n === v.PremiumTypes.TIER_1 ? d ? B.default.Messages.PREMIUM_CANCEL_CONFIRM_BODY_TIER_1_PAYMENT_BLOCKED_RUSSIA.format({
                    date: a.currentPeriodEnd,
                    helpdeskArticle: R.default.getArticleURL(x.HelpdeskArticles.BLOCKED_PAYMENTS)
                }) : B.default.Messages.PREMIUM_CANCEL_CONFIRM_BODY_TIER_1.format({
                    date: a.currentPeriodEnd
                }) : d ? B.default.Messages.PREMIUM_CANCEL_CONFIRM_BODY_TIER_2_PAYMENT_BLOCKED_RUSSIA.format({
                    date: a.currentPeriodEnd,
                    helpdeskArticle: R.default.getArticleURL(x.HelpdeskArticles.BLOCKED_PAYMENTS)
                }) : B.default.Messages.PREMIUM_CANCEL_CONFIRM_BODY_TIER_2.format({
                    date: a.currentPeriodEnd
                });
                let g = a.items.some(e => {
                        let {
                            planId: t
                        } = e;
                        return !v.PREMIUM_PLANS.has(t)
                    }),
                    S = g && null == a.renewalMutations || (null === (t = a.renewalMutations) || void 0 === t ? void 0 : t.items.find(e => {
                        let {
                            planId: t
                        } = e;
                        return !v.PREMIUM_PLANS.has(t)
                    })) != null,
                    y = S ? (0, s.jsx)(E.Button, {
                        onClick: () => l(3),
                        children: B.default.Messages.NEXT
                    }) : (0, s.jsx)(E.Button, {
                        color: E.Button.Colors.RED,
                        disabled: c,
                        onClick: async () => {
                            await D({
                                setHasError: p,
                                onClose: i,
                                premiumSubscription: a,
                                setIsCancelling: f,
                                analyticsLocations: T,
                                analyticsLocation: u
                            })
                        },
                        children: o ? B.default.Messages.CONFIRM : B.default.Messages.PREMIUM_CANCEL_CONFIRM_NEW.format({
                            planPremiumType: P.default.getDisplayPremiumType(a.planId)
                        })
                    }),
                    O = (0, s.jsx)(E.Button, {
                        look: E.Button.Looks.LINK,
                        color: (0, _.isThemeLight)(L) ? E.Button.Colors.PRIMARY : E.Button.Colors.WHITE,
                        onClick: i,
                        children: o ? B.default.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BACK : B.default.Messages.CANCEL
                    });
                return (0, s.jsxs)(s.Fragment, {
                    children: [o ? (0, s.jsx)(b.default, {
                        premiumType: n,
                        className: k.cancellationHeader,
                        onClose: i
                    }) : (0, s.jsxs)(E.ModalHeader, {
                        separator: !1,
                        children: [(0, s.jsx)(E.FormTitle, {
                            tag: E.FormTitleTags.H4,
                            children: B.default.Messages.PREMIUM_CANCEL_CONFIRM_TITLE.format({
                                planPremiumType: P.default.getDisplayPremiumType(a.planId)
                            })
                        }), (0, s.jsx)(E.ModalCloseButton, {
                            onClick: i
                        })]
                    }), (0, s.jsxs)(E.ModalContent, {
                        className: k.body,
                        children: [I ? (0, s.jsx)(E.FormErrorBlock, {
                            className: k.errorBlock,
                            children: B.default.Messages.BILLING_ERROR_GENERIC
                        }) : null, (0, s.jsx)("div", {
                            className: k.cancelImage
                        }), (0, s.jsx)("div", {
                            children: A
                        })]
                    }), (0, s.jsxs)(E.ModalFooter, {
                        justify: M.default.Justify.START,
                        children: [y, O]
                    })]
                })
            }

            function G(e) {
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
                    analyticsLocation: I.default.CANCEL_INVOICE_PREVIEW
                }), i = (0, c.useStateFromStores)([p.default], () => p.default.get(n.planId));
                if (null == r || null == i) return (0, s.jsx)(E.Spinner, {
                    className: k.loading
                });
                let {
                    intervalType: o,
                    intervalCount: u
                } = P.default.getIntervalForInvoice(r);
                return (0, s.jsxs)("div", {
                    className: k.bodyText,
                    children: [(0, s.jsx)("div", {
                        className: k.renewalInvoiceDate,
                        children: 0 !== r.total ? B.default.Messages.BILLING_SWITCH_PLAN_CHANGE_DATE_WITH_CHARGE.format({
                            renewalDate: r.subscriptionPeriodStart,
                            rate: (0, T.formatRate)((0, T.formatPrice)(r.total, r.currency), o, u)
                        }) : B.default.Messages.BILLING_SWITCH_PLAN_CHANGE_DATE.format({
                            renewalDate: r.subscriptionPeriodStart
                        })
                    }), (0, s.jsxs)(g.PremiumInvoiceTable, {
                        children: [(0, s.jsx)(g.PremiumInvoiceTableHeader, {
                            children: B.default.Messages.PREMIUM_SUBSCRIPTION_UPDATES
                        }), (0, s.jsx)(g.PremiumInvoiceTableRow, {
                            label: B.default.Messages.PREMIUM_SUBSCRIPTION_CANCELLED.format({
                                planName: P.default.getDisplayName(i.id)
                            }),
                            value: (0, P.getFormattedRateForPlan)(i),
                            className: k.invoiceCancelRow
                        }), (0, s.jsx)(g.PremiumInvoiceTableDivider, {}), (0, s.jsx)(O.SubscriptionInvoiceFooter, {
                            premiumSubscription: n,
                            renewalInvoice: r,
                            isUpdate: !0
                        })]
                    })]
                })
            }

            function w(e) {
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
                        className: o(k.previewStep, k.body),
                        children: [c ? (0, s.jsx)(E.FormErrorBlock, {
                            className: k.errorBlock,
                            children: B.default.Messages.BILLING_ERROR_GENERIC
                        }) : null, (0, s.jsx)(G, {
                            premiumSubscription: t
                        })]
                    }), (0, s.jsxs)(E.ModalFooter, {
                        align: M.default.Align.CENTER,
                        justify: M.default.Justify.BETWEEN,
                        children: [(0, s.jsx)(E.Button, {
                            color: E.Button.Colors.RED,
                            disabled: u,
                            onClick: async () => {
                                await D({
                                    setHasError: _,
                                    onClose: l,
                                    premiumSubscription: t,
                                    setIsCancelling: d,
                                    analyticsLocations: f,
                                    analyticsLocation: i
                                })
                            },
                            children: B.default.Messages.PREMIUM_CANCEL_CONFIRM_NEW.format({
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
            }(l = n || (n = {}))[l.WHAT_YOU_LOSE = 1] = "WHAT_YOU_LOSE", l[l.CONFIRM = 2] = "CONFIRM", l[l.PREVIEW = 3] = "PREVIEW";
            let F = {
                1: "What You're Losing",
                2: "Confirm Cancellation",
                3: "Preview Updated Subscription"
            };

            function Y(e) {
                var t;
                let a, {
                        premiumSubscription: n,
                        transitionState: l,
                        onClose: i,
                        analyticsLocations: o,
                        analyticsLocation: u
                    } = e,
                    c = null === (t = (0, P.getPremiumPlanItem)(n)) || void 0 === t ? void 0 : t.planId,
                    f = null != c ? P.default.getPremiumType(c) : null;
                d(null != f, "Should not be cancelling Nitro without premiumType");
                let N = (0, m.default)();
                r.useEffect(() => {
                    L.default.track(x.AnalyticEvents.CANCELLATION_FLOW_STARTED, j(n))
                }, [n]);
                let p = f === v.PremiumTypes.TIER_0 || f === v.PremiumTypes.TIER_1 || f === v.PremiumTypes.TIER_2,
                    M = p ? 1 : 2,
                    {
                        AnalyticsLocationProvider: R
                    } = (0, C.default)(o, I.default.PREMIUM_SUBSCRIPTION_CANCELLATION_MODAL),
                    [T, A, g, y] = function(e, t, a) {
                        let [n, l] = r.useState(e), [s, i] = r.useState(Date.now()), [o] = r.useState(Date.now()), u = r.useCallback(e => {
                            L.default.track(x.AnalyticEvents.CANCELLATION_FLOW_STEP, {
                                from_step: F[n],
                                to_step: F[e],
                                step_duration_ms: Date.now() - s,
                                flow_duration_ms: Date.now() - o,
                                location_stack: a,
                                ...j(t)
                            }), l(e), i(Date.now())
                        }, [a, o, s, n, t]);
                        return [n, u, s, o]
                    }(M, n, o);
                (0, h.useUnsupportedExternalSubscriptionModalHandler)(n, i, !1);
                let O = e => {
                    i(), L.default.track(x.AnalyticEvents.CANCELLATION_FLOW_STEP, {
                        from_step: F[e],
                        to_step: null,
                        step_duration_ms: Date.now() - g,
                        flow_duration_ms: Date.now() - y,
                        location_stack: o,
                        ...j(n)
                    })
                };
                switch (T) {
                    case 1:
                        a = (0, s.jsx)(S.default, {
                            premiumType: f,
                            titleText: B.default.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_TITLE,
                            subtitleText: B.default.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_SUBTITLE.format(),
                            footer: (0, s.jsxs)("div", {
                                className: k.whatYouLoseButtonContainer,
                                children: [(0, s.jsx)(E.Button, {
                                    onClick: () => A(2),
                                    children: B.default.Messages.CONTINUE
                                }), (0, s.jsx)(E.Button, {
                                    look: E.Button.Looks.LINK,
                                    color: (0, _.isThemeDark)(N) ? E.Button.Colors.WHITE : E.Button.Colors.PRIMARY,
                                    onClick: () => O(T),
                                    children: B.default.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BACK
                                })]
                            }),
                            onClose: () => O(T)
                        });
                        break;
                    case 2:
                        a = (0, s.jsx)(U, {
                            premiumSubscription: n,
                            premiumType: f,
                            setStep: A,
                            onClose: () => O(T),
                            whatYouLoseExperienceEnabled: p,
                            analyticsLocation: u
                        });
                        break;
                    case 3:
                        a = (0, s.jsx)(w, {
                            premiumSubscription: n,
                            premiumType: f,
                            onBack: () => A(2),
                            onClose: () => O(T),
                            analyticsLocation: u
                        });
                        break;
                    default:
                        throw Error("Unexpected step: ".concat(T))
                }
                return (0, s.jsx)(R, {
                    children: (0, s.jsx)(E.ModalRoot, {
                        transitionState: l,
                        children: a
                    })
                })
            }