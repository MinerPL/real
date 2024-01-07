            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return D
                }
            }), a("222007");
            var l = a("37983"),
                n = a("884691"),
                s = a("171210"),
                i = a("446674"),
                d = a("77078"),
                r = a("298878"),
                u = a("305961"),
                o = a("45029"),
                c = a("599110"),
                _ = a("311340"),
                I = a("311161"),
                f = a("54346"),
                h = a("421127"),
                E = a("49111"),
                A = a("782340"),
                N = a("809313");

            function D(e) {
                let {
                    guildId: t,
                    transitionState: D,
                    onClose: C,
                    analyticsData: T
                } = e, R = (0, i.useStateFromStores)([u.default], () => u.default.getGuild(t), [t]), x = null == R ? void 0 : R.hasFeature(E.GuildFeatures.INVITES_DISABLED), [S] = n.useState(!1), [g, v] = n.useState(h.DEFAULT_LOCKDOWN_DURATION), L = (0, i.useStateFromStores)([f.default], () => f.default.getGuildIncident(t)), M = (0, I.hasInvitesDisabled)(L), m = (0, I.hasDMsDisabled)(L), [p, j] = n.useState(M), [G, O] = n.useState(m), [b, w] = n.useState(!1), y = p !== M || G !== m || b;
                if (null == R) return C(), null;

                function B() {
                    j(e => !e)
                }
                return (0, l.jsxs)(d.ModalRoot, {
                    transitionState: D,
                    size: d.ModalSize.MEDIUM,
                    children: [(0, l.jsx)(d.ModalHeader, {
                        separator: !0,
                        children: (0, l.jsxs)("div", {
                            className: N.headerContainer,
                            children: [(0, l.jsx)(o.default, {
                                color: s.default.INTERACTIVE_NORMAL,
                                width: 16,
                                height: 16
                            }), (0, l.jsx)(d.Heading, {
                                color: "header-primary",
                                variant: "heading-md/semibold",
                                children: A.default.Messages.GUILD_SERVER_LOCKDOWN_TITLE
                            }), (0, l.jsx)(r.default, {})]
                        })
                    }), (0, l.jsx)(d.ModalContent, {
                        children: (0, l.jsxs)("div", {
                            className: N.mainContainer,
                            children: [(0, l.jsx)(d.Select, {
                                placeholder: A.default.Messages.GUILD_SERVER_LOCKDOWN_DURATION_PLACEHOLDER,
                                options: (0, h.getTimeframes)(),
                                select: e => {
                                    v(e), w(!0)
                                },
                                isSelected: e => e === g,
                                serialize: e => String(e)
                            }), (0, l.jsxs)("div", {
                                className: N.pauseContainer,
                                children: [(0, l.jsxs)("div", {
                                    className: N.pauseText,
                                    children: [(0, l.jsx)(d.Text, {
                                        variant: "text-md/semibold",
                                        color: "header-primary",
                                        children: A.default.Messages.DISABLE_INVITES
                                    }), (0, l.jsx)(d.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        children: A.default.Messages.GUILD_INVITE_DISABLE_ACTION_SHEET_DESCRIPTION
                                    })]
                                }), (0, l.jsx)(d.Tooltip, {
                                    text: A.default.Messages.INVITES_PERMANENTLY_DISABLED_TIP,
                                    children: e => (0, l.jsx)("div", {
                                        ...e,
                                        children: (0, l.jsx)(d.Switch, {
                                            className: N.toggle,
                                            onChange: B,
                                            checked: p || x,
                                            disabled: x
                                        })
                                    })
                                })]
                            }), (0, l.jsxs)("div", {
                                className: N.pauseContainer,
                                children: [(0, l.jsxs)("div", {
                                    className: N.pauseText,
                                    children: [(0, l.jsx)(d.Text, {
                                        variant: "text-md/semibold",
                                        color: "header-primary",
                                        children: A.default.Messages.DISABLE_DMS
                                    }), (0, l.jsx)(d.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        children: A.default.Messages.GUILD_DMS_DISABLE_ACTION_SHEET_DESCRIPTION
                                    })]
                                }), (0, l.jsx)(d.Switch, {
                                    className: N.toggle,
                                    onChange: function() {
                                        O(e => !e)
                                    },
                                    checked: G
                                })]
                            })]
                        })
                    }), (0, l.jsxs)(d.ModalFooter, {
                        children: [(0, l.jsx)(d.Button, {
                            onClick: () => {
                                (M || m) && !p && !G ? ((0, _.setGuildIncidentActions)(R.id, !1, !1), (0, d.openModalLazy)(async () => {
                                    let {
                                        default: e
                                    } = await a.el("187317").then(a.bind(a, "187317"));
                                    return a => (0, l.jsx)(e, {
                                        ...a,
                                        guildId: t
                                    })
                                })) : (0, _.setGuildIncidentActions)(R.id, p, G, g);
                                let {
                                    source: e,
                                    alertType: n,
                                    messageId: s
                                } = T;
                                c.default.track(E.AnalyticEvents.GUILD_RAID_INTERVENTION_STATE_CHANGE, {
                                    guild_id: t,
                                    source: e,
                                    raid_alert_id: s,
                                    raid_alert_type: n,
                                    intervention_type_enabled: (0, I.getEnabledInterventions)(p, G),
                                    intervention_type_disabled: (0, I.getDisabledInterventions)(p, G),
                                    duration: 60 * g
                                }), C()
                            },
                            color: d.Button.Colors.BRAND_NEW,
                            look: d.Button.Looks.FILLED,
                            submitting: S,
                            disabled: !y,
                            children: A.default.Messages.GUILD_SERVER_LOCKDOWN_MODAL_CTA
                        }), (0, l.jsx)(d.Button, {
                            onClick: C,
                            color: d.Button.Colors.PRIMARY,
                            look: d.Button.Looks.LINK,
                            disabled: S,
                            children: A.default.Messages.CANCEL
                        })]
                    })]
                })
            }