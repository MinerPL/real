(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["57666"], {
        20606: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return n
                }
            });
            var n = a("171210").default
        },
        298878: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return i
                }
            });
            var n = a("37983");
            a("884691");
            var l = a("669491"),
                s = a("956089"),
                d = a("782340");

            function i(e) {
                let {
                    className: t,
                    color: a = l.default.unsafe_rawColors.BRAND_500.css,
                    ...i
                } = e;
                return (0, n.jsx)(s.TextBadge, {
                    ...i,
                    text: d.default.Messages.BETA,
                    color: a,
                    className: t
                })
            }
        },
        311340: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                trackReportRaidViewed: function() {
                    return _
                },
                setGuildRaidAlerts: function() {
                    return I
                },
                setGuildIncidentActions: function() {
                    return f
                },
                handleResolveRaid: function() {
                    return E
                },
                handleReportRaid: function() {
                    return D
                }
            });
            var n = a("866227"),
                l = a.n(n),
                s = a("872717"),
                d = a("716241"),
                i = a("592407"),
                r = a("305961"),
                u = a("599110"),
                o = a("610174"),
                c = a("49111");

            function _(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                0 !== t.length && u.default.track(c.AnalyticEvents.GUILD_RAID_REPORTED, {
                    ...(0, d.collectGuildAnalyticsMetadata)(e),
                    guild_id: e,
                    raid_types: t
                })
            }
            async function I(e, t) {
                let a = new Set(e.features);
                a.has(c.GuildFeatures.COMMUNITY) ? t ? a.delete(c.GuildFeatures.RAID_ALERTS_DISABLED) : a.add(c.GuildFeatures.RAID_ALERTS_DISABLED) : t ? a.add(c.GuildFeatures.NON_COMMUNITY_RAID_ALERTS) : a.delete(c.GuildFeatures.NON_COMMUNITY_RAID_ALERTS), await i.default.saveGuild(e.id, {
                    features: a
                }, {
                    throwErr: !0
                })
            }
            async function f(e, t, a, n) {
                let d = l().add(n, "hours").toISOString(),
                    i = await s.default.put({
                        url: c.Endpoints.GUILD_INCIDENT_ACTIONS(e),
                        body: {
                            invites_disabled_until: t ? d : null,
                            dms_disabled_until: a ? d : null
                        }
                    });
                return i
            }
            async function E(e, t, a) {
                let {
                    showAlertMode: n
                } = (0, o.getGuildAlertModeEnabled)(e), l = r.default.getGuild(e), d = null == l ? void 0 : l.getSafetyAlertsChannelId();
                if (!n || null == d) return null;
                let i = await s.default.post({
                    url: c.Endpoints.GUILD_INCIDENT_REPORT_FALSE_ALARM(e),
                    body: {
                        alert_message_id: t,
                        reason: a
                    }
                });
                return i
            }
            async function D(e) {
                let {
                    showAlertMode: t
                } = (0, o.getGuildAlertModeEnabled)(e), a = r.default.getGuild(e), n = null == a ? void 0 : a.getSafetyAlertsChannelId();
                if (!t || null == n) return null;
                let l = await s.default.post({
                    url: c.Endpoints.GUILD_INCIDENT_REPORT_RAID(e)
                });
                return l
            }
        },
        186638: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return N
                }
            });
            var n = a("37983"),
                l = a("884691"),
                s = a("171210"),
                d = a("446674"),
                i = a("77078"),
                r = a("298878"),
                u = a("305961"),
                o = a("45029"),
                c = a("599110"),
                _ = a("311340"),
                I = a("311161"),
                f = a("54346"),
                E = a("421127"),
                D = a("49111"),
                h = a("782340"),
                A = a("809313");

            function N(e) {
                let {
                    guildId: t,
                    transitionState: N,
                    onClose: R,
                    analyticsData: S
                } = e, T = (0, d.useStateFromStores)([u.default], () => u.default.getGuild(t), [t]), [g] = l.useState(!1), [L, x] = l.useState(E.DEFAULT_LOCKDOWN_DURATION), C = (0, d.useStateFromStores)([f.default], () => f.default.getGuildIncident(t)), M = (0, I.hasInvitesDisabled)(C), m = (0, I.hasDMsDisabled)(C), [p, v] = l.useState(M), [G, O] = l.useState(m), j = p !== M || G !== m;
                return null == T ? (R(), null) : (0, n.jsxs)(i.ModalRoot, {
                    transitionState: N,
                    size: i.ModalSize.MEDIUM,
                    children: [(0, n.jsx)(i.ModalHeader, {
                        separator: !0,
                        children: (0, n.jsxs)("div", {
                            className: A.headerContainer,
                            children: [(0, n.jsx)(o.default, {
                                color: s.default.INTERACTIVE_NORMAL,
                                width: 16,
                                height: 16
                            }), (0, n.jsx)(i.Heading, {
                                color: "header-primary",
                                variant: "heading-md/semibold",
                                children: h.default.Messages.GUILD_SERVER_LOCKDOWN_TITLE
                            }), (0, n.jsx)(r.default, {})]
                        })
                    }), (0, n.jsx)(i.ModalContent, {
                        children: (0, n.jsxs)("div", {
                            className: A.mainContainer,
                            children: [(0, n.jsx)(i.Select, {
                                placeholder: h.default.Messages.GUILD_SERVER_LOCKDOWN_DURATION_PLACEHOLDER,
                                options: (0, E.getTimeframes)(),
                                select: e => {
                                    x(e)
                                },
                                isSelected: e => e === L,
                                serialize: e => String(e)
                            }), (0, n.jsxs)("div", {
                                className: A.pauseContainer,
                                children: [(0, n.jsxs)("div", {
                                    className: A.pauseText,
                                    children: [(0, n.jsx)(i.Text, {
                                        variant: "text-md/semibold",
                                        color: "header-primary",
                                        children: h.default.Messages.DISABLE_INVITES
                                    }), (0, n.jsx)(i.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        children: h.default.Messages.GUILD_INVITE_DISABLE_ACTION_SHEET_DESCRIPTION
                                    })]
                                }), (0, n.jsx)(i.Switch, {
                                    className: A.toggle,
                                    onChange: function() {
                                        v(e => !e)
                                    },
                                    checked: p
                                })]
                            }), (0, n.jsxs)("div", {
                                className: A.pauseContainer,
                                children: [(0, n.jsxs)("div", {
                                    className: A.pauseText,
                                    children: [(0, n.jsx)(i.Text, {
                                        variant: "text-md/semibold",
                                        color: "header-primary",
                                        children: h.default.Messages.DISABLE_DMS
                                    }), (0, n.jsx)(i.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        children: h.default.Messages.GUILD_DMS_DISABLE_ACTION_SHEET_DESCRIPTION
                                    })]
                                }), (0, n.jsx)(i.Switch, {
                                    className: A.toggle,
                                    onChange: function() {
                                        O(e => !e)
                                    },
                                    checked: G
                                })]
                            })]
                        })
                    }), (0, n.jsxs)(i.ModalFooter, {
                        children: [(0, n.jsx)(i.Button, {
                            onClick: () => {
                                (M || m) && !p && !G ? ((0, _.setGuildIncidentActions)(T.id, !1, !1), (0, i.openModalLazy)(async () => {
                                    let {
                                        default: e
                                    } = await a.el("187317").then(a.bind(a, "187317"));
                                    return a => (0, n.jsx)(e, {
                                        ...a,
                                        guildId: t
                                    })
                                })) : (0, _.setGuildIncidentActions)(T.id, p, G, L);
                                let {
                                    source: e,
                                    alertType: l,
                                    messageId: s
                                } = S;
                                c.default.track(D.AnalyticEvents.GUILD_RAID_INTERVENTION_STATE_CHANGE, {
                                    guild_id: t,
                                    source: e,
                                    raid_alert_id: s,
                                    raid_alert_type: l,
                                    intervention_type_enabled: (0, I.getEnabledInterventions)(p, G),
                                    intervention_type_disabled: (0, I.getDisabledInterventions)(p, G),
                                    duration: 60 * L
                                }), R()
                            },
                            color: i.Button.Colors.BRAND_NEW,
                            look: i.Button.Looks.FILLED,
                            submitting: g,
                            disabled: !j,
                            children: h.default.Messages.GUILD_SERVER_LOCKDOWN_MODAL_CTA
                        }), (0, n.jsx)(i.Button, {
                            onClick: R,
                            color: i.Button.Colors.PRIMARY,
                            look: i.Button.Looks.LINK,
                            disabled: g,
                            children: h.default.Messages.CANCEL
                        })]
                    })]
                })
            }
        }
    }
]);