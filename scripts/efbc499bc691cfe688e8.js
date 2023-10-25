(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["5343"], {
        809497: function(t, e, s) {
            "use strict";
            t.exports = s.p + "765af82f8e62cbe2acc8.svg"
        },
        738400: function(t, e, s) {
            "use strict";
            s.r(e), s.d(e, {
                default: function() {
                    return j
                }
            });
            var n, i, l = s("920040"),
                a = s("773670"),
                u = s("161179"),
                o = s.n(u),
                r = s("498225"),
                d = s("819855"),
                c = s("77078"),
                I = s("850068"),
                N = s("583367"),
                m = s("812204"),
                C = s("685665"),
                S = s("818711"),
                f = s("161778"),
                T = s("521012"),
                M = s("145131"),
                p = s("719923"),
                h = s("782340"),
                R = s("413009");
            async function _(t, e, s, n) {
                await (0, N.uncancelGuildBoostSlot)(s), await (0, I.updateSubscription)(t, {
                    items: (0, p.getItemsFromNewAdditionalPlans)(t, e)
                }, n)
            }

            function g(t) {
                let {
                    premiumSubscription: e,
                    guildBoostSlotId: s,
                    onNext: n,
                    onClose: i
                } = t, [u, I] = a.useState(!1), N = (0, r.useStateFromStores)([f.default], () => f.default.theme), {
                    analyticsLocations: m
                } = (0, C.default)();
                return (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsxs)(c.ModalHeader, {
                        separator: !1,
                        children: [(0, l.jsx)(c.FormTitle, {
                            tag: c.FormTitleTags.H4,
                            children: h.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_INVENTORY_UNCANCEL_TITLE
                        }), (0, l.jsx)(c.ModalCloseButton, {
                            onClick: i
                        })]
                    }), (0, l.jsx)(c.ModalContent, {
                        className: R.body,
                        children: h.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_INVENTORY_UNCANCEL_DESCRIPTION
                    }), (0, l.jsxs)(c.ModalFooter, {
                        justify: M.default.Justify.START,
                        children: [(0, l.jsx)(c.Button, {
                            onClick: async () => {
                                try {
                                    I(!0);
                                    let t = (0, S.calculateAdditionalPlansWithPremiumGuildAdjustment)(e, 1);
                                    o((0, p.getNumPremiumGuildSubscriptions)(t) <= (0, p.getNumPremiumGuildSubscriptions)(e.additionalPlans), "Uncanceling should not increase the number of guild subscriptions"), await _(e, t, s, m), n()
                                } catch (t) {
                                    I(!1)
                                }
                            },
                            submitting: u,
                            children: h.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_INVENTORY_UNCANCEL_BUTTON
                        }), (0, l.jsx)(c.Button, {
                            look: c.Button.Looks.LINK,
                            color: (0, d.isThemeLight)(N) ? c.Button.Colors.PRIMARY : c.Button.Colors.WHITE,
                            onClick: i,
                            disabled: u,
                            children: h.default.Messages.NEVERMIND
                        })]
                    })]
                })
            }

            function E(t) {
                let {
                    onClose: e
                } = t;
                return (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsxs)(c.ModalHeader, {
                        separator: !1,
                        children: [(0, l.jsx)(c.FormTitle, {
                            tag: c.FormTitleTags.H4,
                            children: h.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_INVENTORY_UNCANCEL_CONFIRM_TITLE
                        }), (0, l.jsx)(c.ModalCloseButton, {
                            onClick: e
                        })]
                    }), (0, l.jsxs)(c.ModalContent, {
                        className: R.body,
                        children: [(0, l.jsx)("div", {
                            className: R.uncancelImage
                        }), (0, l.jsx)("div", {
                            children: h.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_INVENTORY_UNCANCEL_CONFIRM_DESCRIPTION
                        })]
                    }), (0, l.jsx)(c.ModalFooter, {
                        children: (0, l.jsx)(c.Button, {
                            onClick: e,
                            children: h.default.Messages.OKAY
                        })
                    })]
                })
            }

            function j(t) {
                let e, {
                        guildBoostSlotId: s,
                        transitionState: n,
                        onClose: u
                    } = t,
                    {
                        AnalyticsLocationProvider: o
                    } = (0, C.default)(m.default.GUILD_BOOST_UNCANCELLATION_MODAL);
                a.useEffect(() => {
                    !T.default.hasFetchedSubscriptions() && (0, I.fetchSubscriptions)()
                }, []);
                let d = (0, r.useStateFromStores)([T.default], () => T.default.getPremiumTypeSubscription()),
                    [N, S] = a.useState(i.START);
                if (null == d) e = (0, l.jsx)(c.ModalContent, {
                    children: (0, l.jsx)(c.Spinner, {})
                });
                else switch (N) {
                    case i.START:
                        e = (0, l.jsx)(g, {
                            premiumSubscription: d,
                            guildBoostSlotId: s,
                            onNext: () => S(i.CONFIRM),
                            onClose: u
                        });
                        break;
                    case i.CONFIRM:
                        e = (0, l.jsx)(E, {
                            onClose: u
                        });
                        break;
                    default:
                        throw Error("Unexpected step: ".concat(N))
                }
                return (0, l.jsx)(o, {
                    children: (0, l.jsx)(c.ModalRoot, {
                        transitionState: n,
                        children: e
                    })
                })
            }(n = i || (i = {}))[n.START = 1] = "START", n[n.CONFIRM = 2] = "CONFIRM"
        },
        818711: function(t, e, s) {
            "use strict";
            s.r(e), s.d(e, {
                calculateAdditionalPlansWithPremiumGuildAdjustment: function() {
                    return r
                }
            });
            var n = s("161179"),
                i = s.n(n),
                l = s("10514"),
                a = s("719923"),
                u = s("646718"),
                o = s("49111");

            function r(t, e) {
                let s = l.default.get(t.planId);
                i(null != s, "missing premium subscription plan");
                let n = l.default.getForSkuAndInterval(u.PremiumSubscriptionSKUs.GUILD, s.interval, s.intervalCount);
                i(null != n, "missing premium guild plan");
                let r = null != t.renewalMutations ? t.renewalMutations.additionalPlans : t.additionalPlans,
                    d = t.status === o.SubscriptionStatusTypes.CANCELED ? 0 : (0, a.getNumPremiumGuildSubscriptions)(r),
                    c = d + e,
                    I = r.filter(t => t.planId !== n.id);
                if (c < 0) throw Error("Invalid adjustment");
                return 0 === c ? I : [...I, {
                    planId: n.id,
                    quantity: c
                }]
            }
        }
    }
]);