(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["26743"], {
        136798: function(e, t, n) {
            "use strict";
            e.exports = n.p + "ab4644ba521f3abc0507.svg"
        },
        698745: function(e, t, n) {
            "use strict";
            e.exports = n.p + "a1d5e876c5e7b9b34836.svg"
        },
        141195: function(e, t, n) {
            "use strict";
            e.exports = n.p + "57ff574d8430697c11c7.svg"
        },
        933182: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return B
                }
            }), n("70102"), n("222007");
            var a, l, i = n("37983"),
                s = n("884691"),
                r = n("917351"),
                u = n.n(r),
                o = n("446674"),
                c = n("77078"),
                d = n("850068"),
                I = n("583367"),
                m = n("812204"),
                f = n("685665"),
                _ = n("809071"),
                C = n("818711"),
                N = n("279171"),
                S = n("883662"),
                P = n("177998"),
                E = n("146163"),
                L = n("625634"),
                R = n("10514"),
                p = n("521012"),
                M = n("145131"),
                T = n("427459"),
                A = n("719923"),
                x = n("153160"),
                g = n("951573"),
                G = n("646718"),
                h = n("843455"),
                U = n("782340"),
                O = n("753767");

            function b(e) {
                let {
                    premiumSubscription: t,
                    isInventory: n,
                    onNext: a,
                    onClose: l
                } = e;
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsxs)(c.ModalHeader, {
                        separator: !1,
                        children: [(0, i.jsx)(c.FormTitle, {
                            tag: c.FormTitleTags.H4,
                            children: n ? U.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_CANCEL_TITLE_INVENTORY : U.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_CANCEL_TITLE_GUILD
                        }), (0, i.jsx)(c.ModalCloseButton, {
                            onClick: l
                        })]
                    }), (0, i.jsxs)(c.ModalContent, {
                        className: O.body,
                        children: [(0, i.jsx)("div", {
                            className: O.cancelImage
                        }), (0, i.jsx)("div", {
                            children: t.isPurchasedExternally && null != t.paymentGateway ? U.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_CANCEL_BODY_EXTERNAL.format({
                                paymentGatewayName: h.PaymentGatewayToFriendlyName[t.paymentGateway],
                                subscriptionManagementLink: (0, A.getExternalSubscriptionMethodUrl)(t.paymentGateway, "SUBSCRIPTION_MANAGEMENT")
                            }) : n ? U.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_CANCEL_BODY_INVENTORY.format({
                                endDate: t.currentPeriodEnd
                            }) : U.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_CANCEL_BODY_GUILD.format({
                                endDate: t.currentPeriodEnd
                            })
                        }), (0, i.jsx)(N.default, {
                            fromBoostCancelModal: !0
                        })]
                    }), t.isPurchasedExternally ? null : (0, i.jsxs)(c.ModalFooter, {
                        justify: M.default.Justify.START,
                        children: [(0, i.jsx)(c.Button, {
                            onClick: a,
                            children: U.default.Messages.NEXT
                        }), (0, i.jsx)(c.Button, {
                            look: c.Button.Looks.LINK,
                            onClick: l,
                            children: U.default.Messages.CANCEL
                        })]
                    })]
                })
            }(l = a || (a = {}))[l.START = 1] = "START", l[l.PREVIEW = 2] = "PREVIEW", l[l.CONFIRM = 3] = "CONFIRM";
            async function j(e, t, n, a) {
                let l = null != a ? a : function() {
                    let e = Object.values(L.default.boostSlots),
                        t = u.sortBy(e.filter(e => !(0, T.isGuildBoostSlotCanceled)(e)), e => [null != e.premiumGuildSubscription, null != e.cooldownEndsAt ? new Date(e.cooldownEndsAt) : null])[0];
                    return null != t ? t.id : null
                }();
                if (null == l) throw Error("No slot to cancel");
                await (0, I.cancelGuildBoostSlot)(l), await (0, d.updateSubscription)(e, {
                    items: (0, A.getItemsFromNewAdditionalPlans)(e, t)
                }, n)
            }

            function v(e) {
                var t, n, a;
                let {
                    premiumSubscription: l,
                    guildBoostSlotId: r,
                    onBack: u,
                    onNext: d,
                    onClose: I
                } = e, [N, L] = s.useState(!1), [p, T] = s.useMemo(() => {
                    try {
                        return [(0, C.calculateAdditionalPlansWithPremiumGuildAdjustment)(l, -1), !1]
                    } catch {
                        return [
                            [], !0
                        ]
                    }
                }, [l]);
                s.useEffect(() => {
                    T && I()
                }, [T]);
                let {
                    premiumSubscriptionPlan: h,
                    premiumGuildPlan: b
                } = (0, o.useStateFromStoresObject)([R.default], () => {
                    let e = R.default.get(l.planId);
                    return {
                        premiumSubscriptionPlan: e,
                        premiumGuildPlan: null != e ? R.default.getForSkuAndInterval(G.PremiumSubscriptionSKUs.GUILD, e.interval, e.intervalCount) : null
                    }
                }), {
                    analyticsLocations: v
                } = (0, f.default)(), [y] = (0, _.useSubscriptionInvoicePreview)({
                    subscriptionId: l.id,
                    renewal: !0,
                    currency: l.currency,
                    paymentSourceId: l.paymentSourceId,
                    analyticsLocations: v,
                    analyticsLocation: m.default.GUILD_BOOST_SLOT_CANCELLATION_MODAL_CURRENT_INVOICE_PREVIEW
                }), B = null != b ? (0, A.getItemsWithUpsertedPremiumGuildPlan)(l, null !== (a = null === (t = p[0]) || void 0 === t ? void 0 : t.quantity) && void 0 !== a ? a : 0, b.id) : null, [D] = (0, _.useSubscriptionInvoicePreview)({
                    subscriptionId: l.id,
                    items: B,
                    renewal: !0,
                    analyticsLocations: v,
                    analyticsLocation: m.default.GUILD_BOOST_SLOT_CANCELLATION_MODAL_RENEWAL_INVOICE_PREVIEW
                });
                if (null == D || null == h || null == b || null == y) return (0, i.jsx)(c.Spinner, {});
                let k = l.items.some(e => {
                        let {
                            planId: t
                        } = e;
                        return !G.PREMIUM_GUILD_SUBSCRIPTION_PLANS.has(t)
                    }),
                    w = k && null == l.renewalMutations || (null === (n = l.renewalMutations) || void 0 === n ? void 0 : n.items.find(e => {
                        let {
                            planId: t
                        } = e;
                        return !G.PREMIUM_GUILD_SUBSCRIPTION_PLANS.has(t)
                    })) != null,
                    F = p.some(e => {
                        let {
                            planId: t
                        } = e;
                        return G.PREMIUM_GUILD_SUBSCRIPTION_PLANS.has(t)
                    }),
                    W = w || F ? D.total - y.total : -y.total,
                    {
                        interval: Y,
                        intervalCount: V
                    } = h;
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(g.default, {
                        onClose: I
                    }), (0, i.jsxs)(c.ModalContent, {
                        className: O.body,
                        children: [(0, i.jsx)("div", {
                            children: U.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_CANCEL_PREVIEW.format({
                                endDate: D.subscriptionPeriodStart
                            })
                        }), (0, i.jsxs)(S.PremiumInvoiceTable, {
                            className: O.invoiceTable,
                            children: [(0, i.jsx)(S.PremiumInvoiceTableHeader, {
                                children: U.default.Messages.PREMIUM_SUBSCRIPTION_UPDATES
                            }), (0, i.jsx)(S.PremiumInvoiceTableRow, {
                                label: U.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_CANCEL_INVOICE_SUBSCRIPTION_CANCELLED.format({
                                    subscriptionCount: 1
                                }),
                                value: (0, x.formatRate)((0, x.formatPrice)(W, l.currency), Y, V),
                                className: O.invoiceCancelRow
                            }), null != B && B.length > 0 ? (0, i.jsxs)("div", {
                                children: [(0, i.jsx)(S.PremiumInvoiceTableDivider, {}), (0, i.jsx)(E.SubscriptionInvoiceFooter, {
                                    premiumSubscription: l,
                                    renewalInvoice: D,
                                    isUpdate: !0
                                })]
                            }) : null]
                        })]
                    }), (0, i.jsxs)(c.ModalFooter, {
                        align: M.default.Align.CENTER,
                        justify: M.default.Justify.BETWEEN,
                        children: [(0, i.jsx)(c.Button, {
                            color: c.Button.Colors.RED,
                            disabled: N,
                            onClick: async () => {
                                try {
                                    L(!0), await j(l, p, v, r), d()
                                } catch {
                                    L(!1)
                                }
                            },
                            children: U.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_CANCEL_BUTTON
                        }), (0, i.jsx)(P.default, {
                            onClick: u
                        })]
                    })]
                })
            }

            function y(e) {
                let {
                    premiumSubscription: t,
                    onClose: n
                } = e;
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsxs)(c.ModalHeader, {
                        separator: !1,
                        children: [(0, i.jsx)(c.FormTitle, {
                            tag: c.FormTitleTags.H4,
                            children: U.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_CONFIRM_TITLE
                        }), (0, i.jsx)(c.ModalCloseButton, {
                            onClick: n
                        })]
                    }), (0, i.jsxs)(c.ModalContent, {
                        className: O.body,
                        children: [(0, i.jsx)("div", {
                            className: O.cancelImage
                        }), (0, i.jsx)("div", {
                            children: U.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_CONFIRM_BODY.format({
                                endDate: t.currentPeriodEnd
                            })
                        })]
                    }), (0, i.jsx)(c.ModalFooter, {
                        children: (0, i.jsx)(c.Button, {
                            onClick: n,
                            children: U.default.Messages.OKAY
                        })
                    })]
                })
            }

            function B(e) {
                let t, {
                    guildBoostSlot: n,
                    transitionState: a,
                    onClose: l
                } = e;
                s.useEffect(() => {
                    !p.default.hasFetchedSubscriptions() && (0, d.fetchSubscriptions)()
                }, []);
                let r = (0, o.useStateFromStores)([p.default], () => p.default.getPremiumTypeSubscription()),
                    [u, I] = s.useState(1),
                    {
                        AnalyticsLocationProvider: _
                    } = (0, f.default)(m.default.GUILD_BOOST_CANCELLATION_MODAL);
                if (null == r) t = (0, i.jsx)(c.ModalContent, {
                    children: (0, i.jsx)(c.Spinner, {})
                });
                else switch (u) {
                    case 1:
                        t = (0, i.jsx)(b, {
                            premiumSubscription: r,
                            isInventory: null == n.premiumGuildSubscription,
                            onNext: () => I(2),
                            onClose: l
                        });
                        break;
                    case 2:
                        t = (0, i.jsx)(v, {
                            premiumSubscription: r,
                            guildBoostSlotId: n.id,
                            onBack: () => I(1),
                            onNext: () => I(3),
                            onClose: l
                        });
                        break;
                    case 3:
                        t = (0, i.jsx)(y, {
                            premiumSubscription: r,
                            onClose: l
                        });
                        break;
                    default:
                        throw Error("Unexpected step: ".concat(u))
                }
                return (0, i.jsx)(_, {
                    children: (0, i.jsx)(c.ModalRoot, {
                        transitionState: a,
                        children: t
                    })
                })
            }
        },
        951573: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            }), n("222007");
            var a = n("37983");
            n("884691");
            var l = n("446674"),
                i = n("77078"),
                s = n("206230"),
                r = n("22368"),
                u = n("145131"),
                o = n("467831"),
                c = n("113400");

            function d(e) {
                let {
                    purchaseState: t,
                    currentStep: n,
                    onClose: d
                } = e, [I, m] = (0, r.usePaymentModalAnimationScene)({
                    purchaseState: t,
                    currentStep: n,
                    initialScene: o.PremiumPaymentGuildAnimation.Scenes.ENTRY,
                    purchaseScene: o.PremiumPaymentGuildAnimation.Scenes.STARS,
                    errorScene: o.PremiumPaymentGuildAnimation.Scenes.ERROR,
                    successScene: o.PremiumPaymentGuildAnimation.Scenes.SUCCESS
                }), f = (0, l.useStateFromStores)([s.default], () => s.default.useReducedMotion);
                return (0, a.jsxs)(i.ModalHeader, {
                    align: u.default.Align.START,
                    className: c.header,
                    separator: !1,
                    children: [(0, a.jsx)(o.PremiumPaymentGuildAnimation, {
                        className: c.animation,
                        nextScene: I,
                        onScenePlay: e => m(o.PremiumPaymentGuildAnimation.getNextScene(e)),
                        pauseWhileUnfocused: !1,
                        pause: f
                    }), (0, a.jsx)("div", {
                        className: c.headerTitle
                    }), (0, a.jsx)(i.ModalCloseButton, {
                        onClick: d,
                        className: c.closeButton
                    })]
                })
            }
        },
        35188: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var a = (0, n("862205").createExperiment)({
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
        391533: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var a = (0, n("862205").createExperiment)({
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
        818711: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                calculateAdditionalPlansWithPremiumGuildAdjustment: function() {
                    return o
                }
            }), n("70102"), n("222007");
            var a = n("627445"),
                l = n.n(a),
                i = n("10514"),
                s = n("719923"),
                r = n("646718"),
                u = n("49111");

            function o(e, t) {
                let n = i.default.get(e.planId);
                l(null != n, "missing premium subscription plan");
                let a = i.default.getForSkuAndInterval(r.PremiumSubscriptionSKUs.GUILD, n.interval, n.intervalCount);
                l(null != a, "missing premium guild plan");
                let o = null != e.renewalMutations ? e.renewalMutations.additionalPlans : e.additionalPlans,
                    c = e.status === u.SubscriptionStatusTypes.CANCELED ? 0 : (0, s.getNumPremiumGuildSubscriptions)(o),
                    d = c + t,
                    I = o.filter(e => e.planId !== a.id);
                if (d < 0) throw Error("Invalid adjustment");
                return 0 === d ? I : [...I, {
                    planId: a.id,
                    quantity: d
                }]
            }
        },
        279171: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useShouldShowLegacyPricingNotice: function() {
                    return C
                },
                default: function() {
                    return N
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("414456"),
                i = n.n(l),
                s = n("627445"),
                r = n.n(s),
                u = n("423487"),
                o = n("701909"),
                c = n("35188"),
                d = n("391533"),
                I = n("296253"),
                m = n("49111"),
                f = n("782340"),
                _ = n("712109");

            function C() {
                let e = (0, I.default)(),
                    {
                        enabled: t
                    } = c.default.useExperiment({
                        location: "5ebfcf_1"
                    }, {
                        autoTrackExposure: !1
                    }),
                    {
                        enabled: n
                    } = d.default.useExperiment({
                        location: "5ebfcf_2"
                    }, {
                        autoTrackExposure: !1
                    });
                return null != e && ("PL" === e ? t : "TR" === e && n)
            }
            var N = e => {
                var t, n;
                let {
                    fromBoostCancelModal: l,
                    className: s
                } = e, c = (0, I.default)(), d = C();
                if (!d) return null;
                return r(null != c, "Subscription billing country should not be null"), (0, a.jsxs)("div", {
                    className: i(_.noticeRoot, s),
                    children: [(0, a.jsx)("div", {
                        className: _.iconContainer,
                        children: (0, a.jsx)(u.default, {
                            className: _.infoIcon
                        })
                    }), (0, a.jsx)("div", {
                        className: _.text,
                        children: (t = c, n = l, "PL" === t ? n ? f.default.Messages.LOCALIZED_PRICING_PLN_LEGACY_PRICING_BOOST_WARNING : f.default.Messages.LOCALIZED_PRICING_PLN_LEGACY_PRICING_WARNING : "TR" === t ? n ? f.default.Messages.LOCALIZED_PRICING_TRY_LEGACY_PRICING_BOOST_WARNING : f.default.Messages.LOCALIZED_PRICING_TRY_LEGACY_PRICING_WARNING : n ? f.default.Messages.LOCALIZED_PRICING_LEGACY_PRICING_BOOST_WARNING : f.default.Messages.LOCALIZED_PRICING_LEGACY_PRICING_WARNING).format({
                            helpCenterLink: o.default.getArticleURL(m.HelpdeskArticles.LOCALIZED_PRICING)
                        })
                    })]
                })
            }
        },
        177998: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("77078"),
                i = n("782340"),
                s = n("816318"),
                r = e => {
                    let {
                        onClick: t
                    } = e;
                    return (0, a.jsx)(l.Anchor, {
                        onClick: t,
                        className: s.link,
                        children: i.default.Messages.BACK
                    })
                }
        }
    }
]);