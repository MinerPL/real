            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return o
                }
            });
            var a = s("37983");
            s("884691");
            var n = s("77078"),
                l = s("427459"),
                i = s("49111"),
                r = s("782340");

            function o(e) {
                let {
                    guildBoostSlot: t,
                    onClose: o,
                    hasCancelableGuildBoostSlot: d,
                    premiumSubscription: u,
                    onSelect: c
                } = e, S = u.status === i.SubscriptionStatusTypes.PAST_DUE;
                return (0, a.jsxs)(n.Menu, {
                    onSelect: c,
                    navId: "subscription-context",
                    variant: "fixed",
                    "aria-label": r.default.Messages.GENERIC_ACTIONS_MENU_LABEL,
                    onClose: o,
                    children: [(0, a.jsx)(n.MenuItem, {
                        id: "apply",
                        label: null != t.premiumGuildSubscription ? r.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_TRANSFER_BUTTON : r.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_SELECT_SERVER_BUTTON,
                        subtext: t.isOnCooldown() ? r.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_TRANSFER_BUTTON_DISABLED_TOOLTIP : null,
                        action: function() {
                            (0, n.openModalLazy)(async () => {
                                let {
                                    default: e
                                } = await s.el("247760").then(s.bind(s, "247760"));
                                return s => (0, a.jsx)(e, {
                                    ...s,
                                    guildBoostSlots: [t],
                                    locationSection: i.AnalyticsSections.SETTINGS_PREMIUM
                                })
                            })
                        },
                        disabled: t.isOnCooldown()
                    }), (0, l.isGuildBoostSlotCanceled)(t) ? (0, a.jsx)(n.MenuItem, {
                        id: "uncancel",
                        label: r.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_SLOT_UNCANCEL_BUTTON,
                        subtext: S ? r.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_CANCEL_BUTTON_DISABLED_PAST_DUE_TOOLTIP : null,
                        action: function() {
                            (0, n.openModalLazy)(async () => {
                                let {
                                    default: e
                                } = await s.el("738400").then(s.bind(s, "738400"));
                                return s => (0, a.jsx)(e, {
                                    ...s,
                                    guildBoostSlotId: t.id
                                })
                            })
                        },
                        disabled: S
                    }) : (0, a.jsx)(n.MenuItem, {
                        id: "cancel",
                        label: r.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_SLOT_CANCEL_BUTTON,
                        subtext: d ? S ? r.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_CANCEL_BUTTON_DISABLED_PAST_DUE_TOOLTIP : null : r.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_CANCEL_BUTTON_DISABLED_TOOLTIP,
                        action: function() {
                            (0, n.openModalLazy)(async () => {
                                let {
                                    default: e
                                } = await s.el("933182").then(s.bind(s, "933182"));
                                return s => (0, a.jsx)(e, {
                                    ...s,
                                    guildBoostSlot: t
                                })
                            })
                        },
                        disabled: !d || S,
                        color: "danger"
                    })]
                })
            }