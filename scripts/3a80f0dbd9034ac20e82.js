(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["69408"], {
        434657: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                LockIcon: function() {
                    return i
                }
            });
            var n = a("37983");
            a("884691");
            var l = a("669491"),
                s = a("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: a = 24,
                    color: i = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: d = "",
                    ...r
                } = e;
                return (0, n.jsx)("svg", {
                    ...(0, s.default)(r),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: a,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        fillRule: "evenodd",
                        d: "M15 8V6a3 3 0 1 0-6 0v2h6ZM7 8H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3h-2V6A5 5 0 0 0 7 6v2Zm6 7.732A2 2 0 0 0 12 12a2 2 0 0 0-1 3.732V17a1 1 0 1 0 2 0v-1.268Z",
                        clipRule: "evenodd",
                        className: d
                    })
                })
            }
        },
        298878: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return d
                }
            });
            var n = a("37983");
            a("884691");
            var l = a("669491"),
                s = a("956089"),
                i = a("782340");

            function d(e) {
                let {
                    className: t,
                    color: a = l.default.unsafe_rawColors.BRAND_500.css,
                    ...d
                } = e;
                return (0, n.jsx)(s.TextBadge, {
                    ...d,
                    text: i.default.Messages.BETA,
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
                    return h
                },
                handleReportRaid: function() {
                    return E
                }
            });
            var n = a("866227"),
                l = a.n(n),
                s = a("872717"),
                i = a("716241"),
                d = a("592407"),
                r = a("305961"),
                u = a("599110"),
                o = a("610174"),
                c = a("49111");

            function _(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                0 !== t.length && u.default.track(c.AnalyticEvents.GUILD_RAID_REPORTED, {
                    ...(0, i.collectGuildAnalyticsMetadata)(e),
                    guild_id: e,
                    raid_types: t
                })
            }
            async function I(e, t) {
                let a = new Set(e.features);
                a.has(c.GuildFeatures.COMMUNITY) ? t ? a.delete(c.GuildFeatures.RAID_ALERTS_DISABLED) : a.add(c.GuildFeatures.RAID_ALERTS_DISABLED) : t ? a.add(c.GuildFeatures.NON_COMMUNITY_RAID_ALERTS) : a.delete(c.GuildFeatures.NON_COMMUNITY_RAID_ALERTS), await d.default.saveGuild(e.id, {
                    features: a
                }, {
                    throwErr: !0
                })
            }
            async function f(e, t, a, n) {
                let i = l().add(n, "hours").toISOString(),
                    d = await s.default.put({
                        url: c.Endpoints.GUILD_INCIDENT_ACTIONS(e),
                        body: {
                            invites_disabled_until: t ? i : null,
                            dms_disabled_until: a ? i : null
                        }
                    });
                return d
            }
            async function h(e, t, a) {
                let {
                    showAlertMode: n
                } = (0, o.getGuildAlertModeEnabled)(e), l = r.default.getGuild(e), i = null == l ? void 0 : l.getSafetyAlertsChannelId();
                if (!n || null == i) return null;
                let d = await s.default.post({
                    url: c.Endpoints.GUILD_INCIDENT_REPORT_FALSE_ALARM(e),
                    body: {
                        alert_message_id: t,
                        reason: a
                    }
                });
                return d
            }
            async function E(e) {
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
                C = a("809313");

            function N(e) {
                let {
                    guildId: t,
                    transitionState: N,
                    onClose: D,
                    analyticsData: R
                } = e, g = (0, i.useStateFromStores)([u.default], () => u.default.getGuild(t), [t]), [x] = l.useState(!1), [T, v] = l.useState(h.DEFAULT_LOCKDOWN_DURATION), S = (0, i.useStateFromStores)([f.default], () => f.default.getGuildIncident(t)), L = (0, I.hasInvitesDisabled)(S), M = (0, I.hasDMsDisabled)(S), [m, p] = l.useState(L), [O, j] = l.useState(M), G = m !== L || O !== M;
                return null == g ? (D(), null) : (0, n.jsxs)(d.ModalRoot, {
                    transitionState: N,
                    size: d.ModalSize.MEDIUM,
                    children: [(0, n.jsx)(d.ModalHeader, {
                        separator: !0,
                        children: (0, n.jsxs)("div", {
                            className: C.headerContainer,
                            children: [(0, n.jsx)(o.default, {
                                color: s.default.INTERACTIVE_NORMAL,
                                width: 16,
                                height: 16
                            }), (0, n.jsx)(d.Heading, {
                                color: "header-primary",
                                variant: "heading-md/semibold",
                                children: A.default.Messages.GUILD_SERVER_LOCKDOWN_TITLE
                            }), (0, n.jsx)(r.default, {})]
                        })
                    }), (0, n.jsx)(d.ModalContent, {
                        children: (0, n.jsxs)("div", {
                            className: C.mainContainer,
                            children: [(0, n.jsx)(d.Select, {
                                placeholder: A.default.Messages.GUILD_SERVER_LOCKDOWN_DURATION_PLACEHOLDER,
                                options: (0, h.getTimeframes)(),
                                select: e => {
                                    v(e)
                                },
                                isSelected: e => e === T,
                                serialize: e => String(e)
                            }), (0, n.jsxs)("div", {
                                className: C.pauseContainer,
                                children: [(0, n.jsxs)("div", {
                                    className: C.pauseText,
                                    children: [(0, n.jsx)(d.Text, {
                                        variant: "text-md/semibold",
                                        color: "header-primary",
                                        children: A.default.Messages.DISABLE_INVITES
                                    }), (0, n.jsx)(d.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        children: A.default.Messages.GUILD_INVITE_DISABLE_ACTION_SHEET_DESCRIPTION
                                    })]
                                }), (0, n.jsx)(d.Switch, {
                                    className: C.toggle,
                                    onChange: function() {
                                        p(e => !e)
                                    },
                                    checked: m
                                })]
                            }), (0, n.jsxs)("div", {
                                className: C.pauseContainer,
                                children: [(0, n.jsxs)("div", {
                                    className: C.pauseText,
                                    children: [(0, n.jsx)(d.Text, {
                                        variant: "text-md/semibold",
                                        color: "header-primary",
                                        children: A.default.Messages.DISABLE_DMS
                                    }), (0, n.jsx)(d.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        children: A.default.Messages.GUILD_DMS_DISABLE_ACTION_SHEET_DESCRIPTION
                                    })]
                                }), (0, n.jsx)(d.Switch, {
                                    className: C.toggle,
                                    onChange: function() {
                                        j(e => !e)
                                    },
                                    checked: O
                                })]
                            })]
                        })
                    }), (0, n.jsxs)(d.ModalFooter, {
                        children: [(0, n.jsx)(d.Button, {
                            onClick: () => {
                                (L || M) && !m && !O ? ((0, _.setGuildIncidentActions)(g.id, !1, !1), (0, d.openModalLazy)(async () => {
                                    let {
                                        default: e
                                    } = await a.el("187317").then(a.bind(a, "187317"));
                                    return a => (0, n.jsx)(e, {
                                        ...a,
                                        guildId: t
                                    })
                                })) : (0, _.setGuildIncidentActions)(g.id, m, O, T);
                                let {
                                    source: e,
                                    alertType: l,
                                    messageId: s
                                } = R;
                                c.default.track(E.AnalyticEvents.GUILD_RAID_INTERVENTION_STATE_CHANGE, {
                                    guild_id: t,
                                    source: e,
                                    raid_alert_id: s,
                                    raid_alert_type: l,
                                    intervention_type_enabled: (0, I.getEnabledInterventions)(m, O),
                                    intervention_type_disabled: (0, I.getDisabledInterventions)(m, O),
                                    duration: 60 * T
                                }), D()
                            },
                            color: d.Button.Colors.BRAND_NEW,
                            look: d.Button.Looks.FILLED,
                            submitting: x,
                            disabled: !G,
                            children: A.default.Messages.GUILD_SERVER_LOCKDOWN_MODAL_CTA
                        }), (0, n.jsx)(d.Button, {
                            onClick: D,
                            color: d.Button.Colors.PRIMARY,
                            look: d.Button.Looks.LINK,
                            disabled: x,
                            children: A.default.Messages.CANCEL
                        })]
                    })]
                })
            }
        },
        45029: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return d
                }
            });
            var n = a("37983");
            a("884691");
            var l = a("469563"),
                s = a("434657"),
                i = a("75196"),
                d = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: a = 24,
                        color: l = "currentColor",
                        className: s,
                        foreground: d,
                        ...r
                    } = e;
                    return (0, n.jsx)("svg", {
                        width: t,
                        height: a,
                        className: s,
                        viewBox: "0 0 24 24",
                        ...(0, i.default)(r),
                        children: (0, n.jsx)("path", {
                            className: d,
                            fill: l,
                            d: "M17 11V7C17 4.243 14.756 2 12 2C9.242 2 7 4.243 7 7V11C5.897 11 5 11.896 5 13V20C5 21.103 5.897 22 7 22H17C18.103 22 19 21.103 19 20V13C19 11.896 18.103 11 17 11ZM12 18C11.172 18 10.5 17.328 10.5 16.5C10.5 15.672 11.172 15 12 15C12.828 15 13.5 15.672 13.5 16.5C13.5 17.328 12.828 18 12 18ZM15 11H9V7C9 5.346 10.346 4 12 4C13.654 4 15 5.346 15 7V11Z",
                            "aria-hidden": !0
                        })
                    })
                }, s.LockIcon)
        }
    }
]);