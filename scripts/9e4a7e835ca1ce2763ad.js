(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["18257"], {
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
        945439: function(e, t, n) {
            "use strict";
            e.exports = n.p + "60e64ec1e28c734051d0.svg"
        },
        465312: function(e, t, n) {
            "use strict";
            e.exports = n.p + "e5fb2c858f851f61c32e.svg"
        },
        933182: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return U
                }
            });
            var a, i, s = n("37983"),
                l = n("884691"),
                r = n("917351"),
                o = n.n(r),
                u = n("446674"),
                c = n("77078"),
                d = n("850068"),
                E = n("583367"),
                I = n("812204"),
                m = n("685665"),
                S = n("809071"),
                N = n("818711"),
                f = n("279171"),
                _ = n("883662"),
                T = n("177998"),
                L = n("146163"),
                R = n("625634"),
                A = n("10514"),
                p = n("521012"),
                O = n("145131"),
                P = n("427459"),
                D = n("719923"),
                h = n("153160"),
                C = n("951573"),
                g = n("646718"),
                x = n("843455"),
                M = n("782340"),
                y = n("753767");

            function G(e) {
                let {
                    premiumSubscription: t,
                    isInventory: n,
                    onNext: a,
                    onClose: i
                } = e;
                return (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsxs)(c.ModalHeader, {
                        separator: !1,
                        children: [(0, s.jsx)(c.FormTitle, {
                            tag: c.FormTitleTags.H4,
                            children: n ? M.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_CANCEL_TITLE_INVENTORY : M.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_CANCEL_TITLE_GUILD
                        }), (0, s.jsx)(c.ModalCloseButton, {
                            onClick: i
                        })]
                    }), (0, s.jsxs)(c.ModalContent, {
                        className: y.body,
                        children: [(0, s.jsx)("div", {
                            className: y.cancelImage
                        }), (0, s.jsx)("div", {
                            children: t.isPurchasedExternally && null != t.paymentGateway ? M.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_CANCEL_BODY_EXTERNAL.format({
                                paymentGatewayName: x.PaymentGatewayToFriendlyName[t.paymentGateway],
                                subscriptionManagementLink: (0, D.getExternalSubscriptionMethodUrl)(t.paymentGateway, "SUBSCRIPTION_MANAGEMENT")
                            }) : n ? M.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_CANCEL_BODY_INVENTORY.format({
                                endDate: t.currentPeriodEnd
                            }) : M.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_CANCEL_BODY_GUILD.format({
                                endDate: t.currentPeriodEnd
                            })
                        }), (0, s.jsx)(f.default, {
                            fromBoostCancelModal: !0
                        })]
                    }), t.isPurchasedExternally ? null : (0, s.jsxs)(c.ModalFooter, {
                        justify: O.default.Justify.START,
                        children: [(0, s.jsx)(c.Button, {
                            onClick: a,
                            children: M.default.Messages.NEXT
                        }), (0, s.jsx)(c.Button, {
                            look: c.Button.Looks.LINK,
                            onClick: i,
                            children: M.default.Messages.CANCEL
                        })]
                    })]
                })
            }(a = i || (i = {}))[a.START = 1] = "START", a[a.PREVIEW = 2] = "PREVIEW", a[a.CONFIRM = 3] = "CONFIRM";
            async function B(e, t, n, a) {
                let i = null != a ? a : function() {
                    let e = Object.values(R.default.boostSlots),
                        t = o.sortBy(e.filter(e => !(0, P.isGuildBoostSlotCanceled)(e)), e => [null != e.premiumGuildSubscription, null != e.cooldownEndsAt ? new Date(e.cooldownEndsAt) : null])[0];
                    return null != t ? t.id : null
                }();
                if (null == i) throw Error("No slot to cancel");
                await (0, E.cancelGuildBoostSlot)(i), await (0, d.updateSubscription)(e, {
                    items: (0, D.getItemsFromNewAdditionalPlans)(e, t)
                }, n)
            }

            function b(e) {
                var t, n, a;
                let {
                    premiumSubscription: i,
                    guildBoostSlotId: r,
                    onBack: o,
                    onNext: d,
                    onClose: E
                } = e, [f, R] = l.useState(!1), [p, P] = l.useMemo(() => {
                    try {
                        return [(0, N.calculateAdditionalPlansWithPremiumGuildAdjustment)(i, -1), !1]
                    } catch {
                        return [
                            [], !0
                        ]
                    }
                }, [i]);
                l.useEffect(() => {
                    P && E()
                }, [P]);
                let {
                    premiumSubscriptionPlan: x,
                    premiumGuildPlan: G
                } = (0, u.useStateFromStoresObject)([A.default], () => {
                    let e = A.default.get(i.planId);
                    return {
                        premiumSubscriptionPlan: e,
                        premiumGuildPlan: null != e ? A.default.getForSkuAndInterval(g.PremiumSubscriptionSKUs.GUILD, e.interval, e.intervalCount) : null
                    }
                }), {
                    analyticsLocations: b
                } = (0, m.default)(), [j] = (0, S.useSubscriptionInvoicePreview)({
                    subscriptionId: i.id,
                    renewal: !0,
                    currency: i.currency,
                    paymentSourceId: i.paymentSourceId,
                    analyticsLocations: b,
                    analyticsLocation: I.default.GUILD_BOOST_SLOT_CANCELLATION_MODAL_CURRENT_INVOICE_PREVIEW
                }), U = null != G ? (0, D.getItemsWithUpsertedPremiumGuildPlan)(i, null !== (a = null === (t = p[0]) || void 0 === t ? void 0 : t.quantity) && void 0 !== a ? a : 0, G.id) : null, [v] = (0, S.useSubscriptionInvoicePreview)({
                    subscriptionId: i.id,
                    items: U,
                    renewal: !0,
                    analyticsLocations: b,
                    analyticsLocation: I.default.GUILD_BOOST_SLOT_CANCELLATION_MODAL_RENEWAL_INVOICE_PREVIEW
                });
                if (null == v || null == x || null == G || null == j) return (0, s.jsx)(c.Spinner, {});
                let w = i.items.some(e => {
                        let {
                            planId: t
                        } = e;
                        return !g.PREMIUM_GUILD_SUBSCRIPTION_PLANS.has(t)
                    }),
                    k = w && null == i.renewalMutations || (null === (n = i.renewalMutations) || void 0 === n ? void 0 : n.items.find(e => {
                        let {
                            planId: t
                        } = e;
                        return !g.PREMIUM_GUILD_SUBSCRIPTION_PLANS.has(t)
                    })) != null,
                    F = p.some(e => {
                        let {
                            planId: t
                        } = e;
                        return g.PREMIUM_GUILD_SUBSCRIPTION_PLANS.has(t)
                    }),
                    Y = k || F ? v.total - j.total : -j.total,
                    {
                        interval: V,
                        intervalCount: W
                    } = x;
                return (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)(C.default, {
                        onClose: E
                    }), (0, s.jsxs)(c.ModalContent, {
                        className: y.body,
                        children: [(0, s.jsx)("div", {
                            children: M.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_CANCEL_PREVIEW.format({
                                endDate: v.subscriptionPeriodStart
                            })
                        }), (0, s.jsxs)(_.PremiumInvoiceTable, {
                            className: y.invoiceTable,
                            children: [(0, s.jsx)(_.PremiumInvoiceTableHeader, {
                                children: M.default.Messages.PREMIUM_SUBSCRIPTION_UPDATES
                            }), (0, s.jsx)(_.PremiumInvoiceTableRow, {
                                label: M.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_CANCEL_INVOICE_SUBSCRIPTION_CANCELLED.format({
                                    subscriptionCount: 1
                                }),
                                value: (0, h.formatRate)((0, h.formatPrice)(Y, i.currency), V, W),
                                className: y.invoiceCancelRow
                            }), null != U && U.length > 0 ? (0, s.jsxs)("div", {
                                children: [(0, s.jsx)(_.PremiumInvoiceTableDivider, {}), (0, s.jsx)(L.SubscriptionInvoiceFooter, {
                                    premiumSubscription: i,
                                    renewalInvoice: v,
                                    isUpdate: !0
                                })]
                            }) : null]
                        })]
                    }), (0, s.jsxs)(c.ModalFooter, {
                        align: O.default.Align.CENTER,
                        justify: O.default.Justify.BETWEEN,
                        children: [(0, s.jsx)(c.Button, {
                            color: c.Button.Colors.RED,
                            disabled: f,
                            onClick: async () => {
                                try {
                                    R(!0), await B(i, p, b, r), d()
                                } catch {
                                    R(!1)
                                }
                            },
                            children: M.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_CANCEL_BUTTON
                        }), (0, s.jsx)(T.default, {
                            onClick: o
                        })]
                    })]
                })
            }

            function j(e) {
                let {
                    premiumSubscription: t,
                    onClose: n
                } = e;
                return (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsxs)(c.ModalHeader, {
                        separator: !1,
                        children: [(0, s.jsx)(c.FormTitle, {
                            tag: c.FormTitleTags.H4,
                            children: M.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_CONFIRM_TITLE
                        }), (0, s.jsx)(c.ModalCloseButton, {
                            onClick: n
                        })]
                    }), (0, s.jsxs)(c.ModalContent, {
                        className: y.body,
                        children: [(0, s.jsx)("div", {
                            className: y.cancelImage
                        }), (0, s.jsx)("div", {
                            children: M.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_CONFIRM_BODY.format({
                                endDate: t.currentPeriodEnd
                            })
                        })]
                    }), (0, s.jsx)(c.ModalFooter, {
                        children: (0, s.jsx)(c.Button, {
                            onClick: n,
                            children: M.default.Messages.OKAY
                        })
                    })]
                })
            }

            function U(e) {
                let t, {
                    guildBoostSlot: n,
                    transitionState: a,
                    onClose: r
                } = e;
                l.useEffect(() => {
                    !p.default.hasFetchedSubscriptions() && (0, d.fetchSubscriptions)()
                }, []);
                let o = (0, u.useStateFromStores)([p.default], () => p.default.getPremiumTypeSubscription()),
                    [E, S] = l.useState(i.START),
                    {
                        AnalyticsLocationProvider: N
                    } = (0, m.default)(I.default.GUILD_BOOST_CANCELLATION_MODAL);
                if (null == o) t = (0, s.jsx)(c.ModalContent, {
                    children: (0, s.jsx)(c.Spinner, {})
                });
                else switch (E) {
                    case i.START:
                        t = (0, s.jsx)(G, {
                            premiumSubscription: o,
                            isInventory: null == n.premiumGuildSubscription,
                            onNext: () => S(i.PREVIEW),
                            onClose: r
                        });
                        break;
                    case i.PREVIEW:
                        t = (0, s.jsx)(b, {
                            premiumSubscription: o,
                            guildBoostSlotId: n.id,
                            onBack: () => S(i.START),
                            onNext: () => S(i.CONFIRM),
                            onClose: r
                        });
                        break;
                    case i.CONFIRM:
                        t = (0, s.jsx)(j, {
                            premiumSubscription: o,
                            onClose: r
                        });
                        break;
                    default:
                        throw Error("Unexpected step: ".concat(E))
                }
                return (0, s.jsx)(N, {
                    children: (0, s.jsx)(c.ModalRoot, {
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
            });
            var a = n("37983");
            n("884691");
            var i = n("446674"),
                s = n("77078"),
                l = n("206230"),
                r = n("22368"),
                o = n("145131"),
                u = n("467831"),
                c = n("113400");

            function d(e) {
                let {
                    purchaseState: t,
                    currentStep: n,
                    onClose: d
                } = e, [E, I] = (0, r.usePaymentModalAnimationScene)({
                    purchaseState: t,
                    currentStep: n,
                    initialScene: u.PremiumPaymentGuildAnimation.Scenes.ENTRY,
                    purchaseScene: u.PremiumPaymentGuildAnimation.Scenes.STARS,
                    errorScene: u.PremiumPaymentGuildAnimation.Scenes.ERROR,
                    successScene: u.PremiumPaymentGuildAnimation.Scenes.SUCCESS
                }), m = (0, i.useStateFromStores)([l.default], () => l.default.useReducedMotion);
                return (0, a.jsxs)(s.ModalHeader, {
                    align: o.default.Align.START,
                    className: c.header,
                    separator: !1,
                    children: [(0, a.jsx)(u.PremiumPaymentGuildAnimation, {
                        className: c.animation,
                        nextScene: E,
                        onScenePlay: e => I(u.PremiumPaymentGuildAnimation.getNextScene(e)),
                        pauseWhileUnfocused: !1,
                        pause: m
                    }), (0, a.jsx)("div", {
                        className: c.headerTitle
                    }), (0, a.jsx)(s.ModalCloseButton, {
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
                    return u
                }
            });
            var a = n("627445"),
                i = n.n(a),
                s = n("10514"),
                l = n("719923"),
                r = n("646718"),
                o = n("49111");

            function u(e, t) {
                let n = s.default.get(e.planId);
                i(null != n, "missing premium subscription plan");
                let a = s.default.getForSkuAndInterval(r.PremiumSubscriptionSKUs.GUILD, n.interval, n.intervalCount);
                i(null != a, "missing premium guild plan");
                let u = null != e.renewalMutations ? e.renewalMutations.additionalPlans : e.additionalPlans,
                    c = e.status === o.SubscriptionStatusTypes.CANCELED ? 0 : (0, l.getNumPremiumGuildSubscriptions)(u),
                    d = c + t,
                    E = u.filter(e => e.planId !== a.id);
                if (d < 0) throw Error("Invalid adjustment");
                return 0 === d ? E : [...E, {
                    planId: a.id,
                    quantity: d
                }]
            }
        },
        279171: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useShouldShowLegacyPricingNotice: function() {
                    return N
                },
                default: function() {
                    return f
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("414456"),
                s = n.n(i),
                l = n("627445"),
                r = n.n(l),
                o = n("423487"),
                u = n("701909"),
                c = n("35188"),
                d = n("391533"),
                E = n("296253"),
                I = n("49111"),
                m = n("782340"),
                S = n("712109");

            function N() {
                let e = (0, E.default)(),
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
            var f = e => {
                var t, n;
                let {
                    fromBoostCancelModal: i,
                    className: l
                } = e, c = (0, E.default)(), d = N();
                if (!d) return null;
                return r(null != c, "Subscription billing country should not be null"), (0, a.jsxs)("div", {
                    className: s(S.noticeRoot, l),
                    children: [(0, a.jsx)("div", {
                        className: S.iconContainer,
                        children: (0, a.jsx)(o.default, {
                            className: S.infoIcon
                        })
                    }), (0, a.jsx)("div", {
                        className: S.text,
                        children: (t = c, n = i, "PL" === t ? n ? m.default.Messages.LOCALIZED_PRICING_PLN_LEGACY_PRICING_BOOST_WARNING : m.default.Messages.LOCALIZED_PRICING_PLN_LEGACY_PRICING_WARNING : "TR" === t ? n ? m.default.Messages.LOCALIZED_PRICING_TRY_LEGACY_PRICING_BOOST_WARNING : m.default.Messages.LOCALIZED_PRICING_TRY_LEGACY_PRICING_WARNING : n ? m.default.Messages.LOCALIZED_PRICING_LEGACY_PRICING_BOOST_WARNING : m.default.Messages.LOCALIZED_PRICING_LEGACY_PRICING_WARNING).format({
                            helpCenterLink: u.default.getArticleURL(I.HelpdeskArticles.LOCALIZED_PRICING)
                        })
                    })]
                })
            }
        },
        22368: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                usePaymentModalAnimationScene: function() {
                    return l
                }
            });
            var a = n("884691"),
                i = n("85336"),
                s = n("286350");

            function l(e) {
                let {
                    purchaseState: t,
                    currentStep: n,
                    initialScene: l,
                    purchaseScene: r,
                    errorScene: o,
                    successScene: u
                } = e, [c, d] = (0, a.useState)(l);
                return (0, a.useEffect)(() => {
                    t === s.PurchaseState.PURCHASING ? d(r) : t === s.PurchaseState.FAIL && d(o)
                }, [t, r, o]), (0, a.useEffect)(() => {
                    n === i.Step.CONFIRM && d(u)
                }, [n, u]), [c, d]
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
            var i = n("77078"),
                s = n("782340"),
                l = n("816318"),
                r = e => {
                    let {
                        onClick: t
                    } = e;
                    return (0, a.jsx)(i.Anchor, {
                        onClick: t,
                        className: l.link,
                        children: s.default.Messages.BACK
                    })
                }
        },
        467831: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PremiumPaymentAnimationTier0: function() {
                    return L
                },
                PremiumPaymentAnimationTier1: function() {
                    return A
                },
                PremiumPaymentAnimationTier2: function() {
                    return D
                },
                PremiumPaymentGuildAnimation: function() {
                    return y
                }
            });
            var a, i, s, l, r, o, u, c, d = n("37983"),
                E = n("884691"),
                I = n("414456"),
                m = n.n(I),
                S = n("301165"),
                N = n("458960"),
                f = n("273108"),
                _ = n("635233");
            (a = r || (r = {})).NORMAL = "normal", a.SPEED_START = "speed_start", a.SPEED_LOOP = "speed_loop", a.FINISH = "finish", a.IDLE = "idle";
            let T = {
                [r.NORMAL]: {
                    BEG: 0,
                    END: 600,
                    shouldForcePlayAfter: !0
                },
                [r.SPEED_START]: {
                    BEG: 601,
                    END: 636
                },
                [r.SPEED_LOOP]: {
                    BEG: 637,
                    END: 668
                },
                [r.FINISH]: {
                    BEG: 669,
                    END: 870
                },
                [r.IDLE]: {
                    BEG: 871,
                    END: 878
                }
            };
            class L extends E.PureComponent {
                static getNextScene(e) {
                    switch (e) {
                        case L.Scenes.SPEED_START:
                            return L.Scenes.SPEED_LOOP;
                        case L.Scenes.FINISH:
                            return L.Scenes.IDLE;
                        default:
                            return e
                    }
                }
                importDefault() {
                    return n.el("133541").then(n.t.bind(n, "133541", 19)).then(e => {
                        let {
                            default: t
                        } = e;
                        return t
                    })
                }
                render() {
                    let {
                        className: e,
                        nextScene: t,
                        onScenePlay: n,
                        onSceneComplete: a,
                        pause: i,
                        pauseWhileUnfocused: s
                    } = this.props;
                    return (0, d.jsx)(f.default, {
                        className: m(_.sequencedAnimation, e),
                        importData: this.importDefault,
                        nextScene: i ? r.IDLE : t,
                        sceneSegments: T,
                        onScenePlay: n,
                        onSceneComplete: a,
                        pauseWhileUnfocused: s,
                        pause: i
                    })
                }
            }
            L.Scenes = r, (i = o || (o = {})).NORMAL = "normal", i.SPEED_START = "speed_start", i.SPEED_LOOP = "speed_loop", i.FINISH = "finish", i.IDLE = "idle";
            let R = {
                [o.NORMAL]: {
                    BEG: 0,
                    END: 600,
                    shouldForcePlayAfter: !0
                },
                [o.SPEED_START]: {
                    BEG: 601,
                    END: 636
                },
                [o.SPEED_LOOP]: {
                    BEG: 637,
                    END: 668
                },
                [o.FINISH]: {
                    BEG: 669,
                    END: 870
                },
                [o.IDLE]: {
                    BEG: 871,
                    END: 878
                }
            };
            class A extends E.PureComponent {
                static getNextScene(e) {
                    switch (e) {
                        case A.Scenes.SPEED_START:
                            return A.Scenes.SPEED_LOOP;
                        case A.Scenes.FINISH:
                            return A.Scenes.IDLE;
                        default:
                            return e
                    }
                }
                importDefault() {
                    return n.el("549988").then(n.t.bind(n, "549988", 19)).then(e => {
                        let {
                            default: t
                        } = e;
                        return t
                    })
                }
                render() {
                    let {
                        className: e,
                        nextScene: t,
                        onScenePlay: n,
                        onSceneComplete: a,
                        pause: i,
                        pauseWhileUnfocused: s
                    } = this.props;
                    return (0, d.jsx)(f.default, {
                        className: m(_.sequencedAnimation, e),
                        importData: this.importDefault,
                        nextScene: i ? o.IDLE : t,
                        sceneSegments: R,
                        onScenePlay: n,
                        onSceneComplete: a,
                        pauseWhileUnfocused: s,
                        pause: i
                    })
                }
            }
            A.Scenes = o, (s = u || (u = {})).IDLE_ENTRY = "idle_entry", s.IDLE_LOOP = "idle_loop", s.BOOST_START = "boost_start", s.BOOST_LOOP = "boost_loop", s.BOOST_END = "boost_end", s.VICTORY = "victory", s.ERROR = "error";
            let p = {
                [u.IDLE_ENTRY]: {
                    BEG: 0,
                    END: 50
                },
                [u.IDLE_LOOP]: {
                    BEG: 50,
                    END: 230,
                    shouldForcePlayAfter: !0
                },
                [u.BOOST_START]: {
                    BEG: 230,
                    END: 275
                },
                [u.BOOST_LOOP]: {
                    BEG: 275,
                    END: 290
                },
                [u.BOOST_END]: {
                    BEG: 386,
                    END: 455
                },
                [u.VICTORY]: {
                    BEG: 470,
                    END: 525
                },
                [u.ERROR]: {
                    BEG: 290,
                    END: 375
                }
            };
            class O extends E.PureComponent {
                getStyle(e) {
                    let {
                        animation: t
                    } = this.props;
                    return {
                        transform: [{
                            translateX: t.x.interpolate({
                                inputRange: [0, 1],
                                outputRange: e ? ["100%", "0%"] : ["0%", "-100%"]
                            })
                        }, {
                            translateY: t.y.interpolate({
                                inputRange: [0, 1],
                                outputRange: ["100%", "0%"]
                            })
                        }]
                    }
                }
                render() {
                    let {
                        className: e
                    } = this.props;
                    return (0, d.jsxs)("div", {
                        className: _.panningAnimation,
                        children: [(0, d.jsx)(N.default.div, {
                            className: e,
                            style: this.getStyle(!1)
                        }), (0, d.jsx)(N.default.div, {
                            className: e,
                            style: this.getStyle(!0)
                        })]
                    })
                }
            }
            let P = Object.freeze({
                IDLE_ENTRY: {
                    toValue: 1,
                    duration: 1500
                },
                IDLE_LOOP: {
                    toValue: 1,
                    duration: 6e3,
                    easing: N.default.Easing.linear
                },
                BOOST_START: {
                    toValue: 0,
                    duration: 2e3,
                    delay: 500
                },
                ERROR: {
                    toValue: 1,
                    duration: 1500,
                    delay: 1e3
                }
            });
            class D extends E.PureComponent {
                static getNextScene(e) {
                    switch (e) {
                        case D.Scenes.IDLE_ENTRY:
                            return D.Scenes.IDLE_LOOP;
                        case D.Scenes.BOOST_START:
                            return D.Scenes.BOOST_LOOP;
                        case D.Scenes.BOOST_END:
                            return D.Scenes.VICTORY;
                        case D.Scenes.VICTORY:
                            return D.Scenes.IDLE_ENTRY;
                        case D.Scenes.ERROR:
                            return D.Scenes.IDLE_LOOP;
                        default:
                            return e
                    }
                }
                componentWillUnmount() {
                    this.didUnmount = !0
                }
                importData() {
                    return n.el("475800").then(n.t.bind(n, "475800", 19)).then(e => {
                        let {
                            default: t
                        } = e;
                        return t
                    })
                }
                animateEntry(e) {
                    N.default.parallel([N.default.timing(this.foregroundAnimation.y, {
                        toValue: e.toValue,
                        duration: e.duration,
                        delay: e.delay || 0
                    }), N.default.timing(this.backgroundAnimation.y, {
                        toValue: e.toValue,
                        duration: 1.2 * e.duration,
                        delay: e.delay || 0
                    })]).start()
                }
                animateIdleEntry() {
                    this.animateEntry(P.IDLE_ENTRY)
                }
                animateError() {
                    this.animateEntry(P.ERROR)
                }
                animateIdleLoop() {
                    this.animateIdleLoopBackground(), this.animateIdleLoopForeground()
                }
                animateBoostStart() {
                    N.default.parallel([N.default.timing(this.foregroundAnimation.y, {
                        toValue: P.BOOST_START.toValue,
                        duration: P.BOOST_START.duration,
                        delay: P.BOOST_START.delay
                    }), N.default.timing(this.backgroundAnimation.y, {
                        toValue: P.BOOST_START.toValue,
                        duration: 1.2 * P.BOOST_START.duration,
                        delay: P.BOOST_START.delay
                    })]).start()
                }
                render() {
                    let {
                        className: e,
                        nextScene: t,
                        pause: n,
                        onSceneComplete: a
                    } = this.props;
                    return (0, d.jsxs)("div", {
                        className: m(_.tier2Animation, e),
                        children: [n ? (0, d.jsx)(d.Fragment, {
                            children: (0, d.jsxs)("div", {
                                className: _.panningAnimation,
                                children: [(0, d.jsx)("div", {
                                    className: _.tier2Background
                                }), (0, d.jsx)("div", {
                                    className: _.tier2Foreground
                                })]
                            })
                        }) : (0, d.jsxs)(d.Fragment, {
                            children: [(0, d.jsx)(O, {
                                className: _.tier2Background,
                                animation: this.backgroundAnimation
                            }), (0, d.jsx)(O, {
                                className: _.tier2Foreground,
                                animation: this.foregroundAnimation
                            })]
                        }), (0, d.jsx)(f.default, {
                            className: _.sequencedAnimation,
                            importData: this.importData,
                            nextScene: n ? u.IDLE_LOOP : t,
                            sceneSegments: p,
                            onScenePlay: this.handleScenePlay,
                            onSceneComplete: a,
                            pauseWhileUnfocused: !1,
                            pause: n
                        })]
                    })
                }
                constructor(...e) {
                    super(...e), this.backgroundAnimation = new N.default.ValueXY({
                        x: 0,
                        y: 0
                    }), this.foregroundAnimation = new N.default.ValueXY({
                        x: 0,
                        y: 0
                    }), this.didUnmount = !1, this.animateIdleLoopBackground = () => {
                        !this.didUnmount && (this.backgroundAnimation.x.setValue(0), N.default.timing(this.backgroundAnimation.x, {
                            toValue: P.IDLE_LOOP.toValue,
                            duration: 1.2 * P.IDLE_LOOP.duration,
                            easing: N.default.Easing.linear
                        }).start(this.animateIdleLoopBackground))
                    }, this.animateIdleLoopForeground = () => {
                        !this.didUnmount && (this.foregroundAnimation.x.setValue(0), N.default.timing(this.foregroundAnimation.x, {
                            toValue: P.IDLE_LOOP.toValue,
                            duration: P.IDLE_LOOP.duration,
                            easing: P.IDLE_LOOP.easing
                        }).start(this.animateIdleLoopForeground))
                    }, this.handleScenePlay = e => {
                        switch (e) {
                            case u.IDLE_ENTRY:
                                this.animateIdleEntry(), this.animateIdleLoop();
                                break;
                            case u.ERROR:
                                this.animateError();
                                break;
                            case u.BOOST_START:
                                this.animateBoostStart()
                        }
                        let {
                            onScenePlay: t
                        } = this.props;
                        null != t && t(e)
                    }
                }
            }
            D.Scenes = u, (l = c || (c = {})).ENTRY = "entry", l.IDLE = "idle", l.STARS = "stars", l.ERROR = "error", l.SUCCESS = "success";
            let h = {
                    [c.ENTRY]: {
                        BEG: 0,
                        END: 180
                    },
                    [c.IDLE]: {
                        BEG: 180,
                        END: 360,
                        shouldForcePlayAfter: !0
                    },
                    [c.STARS]: {
                        BEG: 180,
                        END: 360,
                        shouldForcePlayAfter: !0
                    },
                    [c.ERROR]: {
                        BEG: 360,
                        END: 540
                    },
                    [c.SUCCESS]: {
                        BEG: 540,
                        END: 778
                    }
                },
                C = Object.freeze({
                    WHITE: "#ebf0f7",
                    PINK: "#fa6ef6"
                }),
                g = [{
                    left: 29,
                    top: 100,
                    color: C.WHITE
                }, {
                    left: 245,
                    top: 11,
                    color: C.PINK
                }, {
                    left: 393,
                    top: 22,
                    color: C.WHITE
                }, {
                    left: 74,
                    top: 30,
                    color: C.PINK
                }, {
                    left: 188,
                    top: 9,
                    color: C.WHITE
                }, {
                    left: 379,
                    top: 97,
                    color: C.PINK
                }],
                x = Object.freeze({
                    SCALE_INITIAL: 0,
                    SCALE_MIDDLE: 1,
                    SCALE_END: 0,
                    ROTATE_INITIAL: 0,
                    ROTATE_MIDDLE: 180,
                    ROTATE_END: 360,
                    DELAY_MIN: 200,
                    DELAY_MAX: 500,
                    DELAY_STAGGER: 200,
                    DURATION_MIDDLE: 400,
                    DURATION_END: 250,
                    SIZE_MIN: 7,
                    SIZE_MAX: 15,
                    EASING_MIDDLE: N.default.Easing.bezier(.3, .01, 0, .99),
                    EASING_END: N.default.Easing.bezier(0, -.01, .99, 0)
                });

            function M(e) {
                let {
                    animate: t
                } = e, [n, a] = E.useState(0), i = (0, S.useSprings)(g.length, g.map((e, i) => {
                    let s = i > 0 ? x.DELAY_STAGGER * i + Math.random() * (x.DELAY_MAX - x.DELAY_MIN) + x.DELAY_MIN : 0,
                        l = Math.random() * (x.SIZE_MAX - x.SIZE_MIN) + x.SIZE_MIN;
                    return {
                        from: {
                            scale: x.SCALE_INITIAL,
                            rotate: x.ROTATE_INITIAL,
                            top: e.top,
                            left: e.left,
                            width: l,
                            height: l
                        },
                        to: async e => {
                            t ? (await e({
                                scale: x.SCALE_MIDDLE,
                                rotate: x.ROTATE_MIDDLE,
                                delay: s,
                                config: {
                                    duration: x.DURATION_MIDDLE,
                                    easing: x.EASING_MIDDLE
                                }
                            }), await e({
                                scale: x.SCALE_END,
                                rotate: x.ROTATE_END,
                                config: {
                                    duration: x.DURATION_END,
                                    easing: x.EASING_END
                                }
                            }), await e({
                                scale: x.SCALE_INITIAL,
                                rotate: x.ROTATE_INITIAL,
                                immediate: !0
                            }), i === g.length - 1 && a(n + 1)) : await e({
                                scale: x.SCALE_INITIAL,
                                rotate: x.ROTATE_INITIAL
                            })
                        }
                    }
                }));
                return (0, d.jsx)(d.Fragment, {
                    children: i.map((e, t) => {
                        let n = g[t];
                        return (0, d.jsx)(S.animated.svg, {
                            style: e,
                            className: _.guildStar,
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 12.14 12.24",
                            children: (0, d.jsx)("path", {
                                d: "M5.62 10.22l-4 1.9a1.17 1.17 0 01-1.5-.5 1.7 1.7 0 010-1l1.9-4a.91.91 0 000-1l-1.9-4a1.14 1.14 0 01.5-1.5 1.39 1.39 0 01.9 0l4 1.9a.91.91 0 001 0l4-1.9a1.14 1.14 0 011.5.5 1.39 1.39 0 010 .9l-1.9 4a.91.91 0 000 1l1.9 4a1.17 1.17 0 01-.5 1.5 1.7 1.7 0 01-1 0l-4-1.9a1 1 0 00-.9.1z",
                                fill: n.color
                            })
                        }, t)
                    })
                })
            }
            class y extends E.PureComponent {
                static getNextScene(e) {
                    switch (e) {
                        case c.ENTRY:
                        case c.ERROR:
                        case c.SUCCESS:
                            return c.IDLE;
                        default:
                            return e
                    }
                }
                importData() {
                    return n.el("438967").then(n.t.bind(n, "438967", 19)).then(e => {
                        let {
                            default: t
                        } = e;
                        return t
                    })
                }
                render() {
                    let {
                        className: e,
                        nextScene: t,
                        pause: n,
                        onScenePlay: a,
                        onSceneComplete: i,
                        pauseWhileUnfocused: s
                    } = this.props;
                    return (0, d.jsxs)("div", {
                        className: m(_.guildWrapper, e),
                        children: [(0, d.jsx)(f.default, {
                            className: _.guildBackground,
                            importData: this.importData,
                            nextScene: n ? c.IDLE : t,
                            sceneSegments: h,
                            onScenePlay: a,
                            onSceneComplete: i,
                            pauseWhileUnfocused: s,
                            pause: n
                        }), (0, d.jsx)(M, {
                            animate: !n && t === c.STARS
                        })]
                    })
                }
            }
            y.Scenes = c
        }
    }
]);