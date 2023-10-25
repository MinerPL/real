(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["69408"], {
        434657: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                LockIcon: function() {
                    return d
                }
            });
            var a = n("920040");
            n("773670");
            var l = n("912557"),
                r = n("75196");
            let d = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: d = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...s
                } = e;
                return (0, a.jsx)("svg", {
                    ...(0, r.default)(s),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, a.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        fillRule: "evenodd",
                        d: "M15 8V6a3 3 0 1 0-6 0v2h6ZM7 8H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3h-2V6A5 5 0 0 0 7 6v2Zm6 7.732A2 2 0 0 0 12 12a2 2 0 0 0-1 3.732V17a1 1 0 1 0 2 0v-1.268Z",
                        clipRule: "evenodd",
                        className: i
                    })
                })
            }
        },
        20606: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var a = n("710984").default
        },
        298878: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var a = n("920040");
            n("773670");
            var l = n("912557"),
                r = n("956089"),
                d = n("782340");

            function i(e) {
                let {
                    className: t,
                    color: n = l.default.unsafe_rawColors.BRAND_500.css,
                    ...i
                } = e;
                return (0, a.jsx)(r.TextBadge, {
                    ...i,
                    text: d.default.Messages.BETA,
                    color: n,
                    className: t
                })
            }
        },
        311340: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                trackReportRaidViewed: function() {
                    return f
                },
                setGuildRaidAlerts: function() {
                    return _
                },
                setGuildIncidentActions: function() {
                    return h
                },
                handleResolveRaid: function() {
                    return I
                },
                handleReportRaid: function() {
                    return g
                }
            });
            var a = n("377849"),
                l = n.n(a),
                r = n("990746"),
                d = n("716241"),
                i = n("592407"),
                s = n("305961"),
                u = n("599110"),
                o = n("610174"),
                c = n("49111");

            function f(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                0 !== t.length && u.default.track(c.AnalyticEvents.GUILD_RAID_REPORTED, {
                    ...(0, d.collectGuildAnalyticsMetadata)(e),
                    guild_id: e,
                    raid_types: t
                })
            }
            async function _(e, t) {
                let n = new Set(e.features);
                n.has(c.GuildFeatures.COMMUNITY) ? t ? n.delete(c.GuildFeatures.RAID_ALERTS_DISABLED) : n.add(c.GuildFeatures.RAID_ALERTS_DISABLED) : t ? n.add(c.GuildFeatures.NON_COMMUNITY_RAID_ALERTS) : n.delete(c.GuildFeatures.NON_COMMUNITY_RAID_ALERTS), await i.default.saveGuild(e.id, {
                    features: n
                }, {
                    throwErr: !0
                })
            }
            async function h(e, t, n, a) {
                let d = l().add(a, "hours").toISOString(),
                    i = await r.default.put({
                        url: c.Endpoints.GUILD_INCIDENT_ACTIONS(e),
                        body: {
                            invites_disabled_until: t ? d : null,
                            dms_disabled_until: n ? d : null
                        }
                    });
                return i
            }
            async function I(e, t, n) {
                let {
                    showAlertMode: a
                } = (0, o.getGuildAlertModeEnabled)(e), l = s.default.getGuild(e), d = null == l ? void 0 : l.getSafetyAlertsChannelId();
                if (!a || null == d) return null;
                let i = await r.default.post({
                    url: c.Endpoints.GUILD_INCIDENT_REPORT_FALSE_ALARM(e),
                    body: {
                        alert_message_id: t,
                        reason: n
                    }
                });
                return i
            }
            async function g(e) {
                let {
                    showAlertMode: t
                } = (0, o.getGuildAlertModeEnabled)(e), n = s.default.getGuild(e), a = null == n ? void 0 : n.getSafetyAlertsChannelId();
                if (!t || null == a) return null;
                let l = await r.default.post({
                    url: c.Endpoints.GUILD_INCIDENT_REPORT_RAID(e)
                });
                return l
            }
        },
        186638: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return R
                }
            });
            var a = n("920040"),
                l = n("773670"),
                r = n("710984"),
                d = n("498225"),
                i = n("77078"),
                s = n("298878"),
                u = n("305961"),
                o = n("45029"),
                c = n("599110"),
                f = n("311340"),
                _ = n("311161"),
                h = n("54346"),
                I = n("421127"),
                g = n("49111"),
                N = n("782340"),
                E = n("461035");

            function R(e) {
                let {
                    guildId: t,
                    transitionState: R,
                    onClose: A,
                    analyticsData: D
                } = e, C = (0, d.useStateFromStores)([u.default], () => u.default.getGuild(t), [t]), [v] = l.useState(!1), [T, S] = l.useState(I.DEFAULT_LOCKDOWN_DURATION), x = (0, d.useStateFromStores)([h.default], () => h.default.getGuildIncident(t)), m = (0, _.hasInvitesDisabled)(x), L = (0, _.hasDMsDisabled)(x), [p, M] = l.useState(m), [O, j] = l.useState(L), G = p !== m || O !== L;
                return null == C ? (A(), null) : (0, a.jsxs)(i.ModalRoot, {
                    transitionState: R,
                    size: i.ModalSize.MEDIUM,
                    children: [(0, a.jsx)(i.ModalHeader, {
                        separator: !0,
                        children: (0, a.jsxs)("div", {
                            className: E.headerContainer,
                            children: [(0, a.jsx)(o.default, {
                                color: r.default.INTERACTIVE_NORMAL,
                                width: 16,
                                height: 16
                            }), (0, a.jsx)(i.Heading, {
                                color: "header-primary",
                                variant: "heading-md/semibold",
                                children: N.default.Messages.GUILD_SERVER_LOCKDOWN_TITLE
                            }), (0, a.jsx)(s.default, {})]
                        })
                    }), (0, a.jsx)(i.ModalContent, {
                        children: (0, a.jsxs)("div", {
                            className: E.mainContainer,
                            children: [(0, a.jsx)(i.Select, {
                                placeholder: N.default.Messages.GUILD_SERVER_LOCKDOWN_DURATION_PLACEHOLDER,
                                options: (0, I.getTimeframes)(),
                                select: e => {
                                    S(e)
                                },
                                isSelected: e => e === T,
                                serialize: e => String(e)
                            }), (0, a.jsxs)("div", {
                                className: E.pauseContainer,
                                children: [(0, a.jsxs)("div", {
                                    className: E.pauseText,
                                    children: [(0, a.jsx)(i.Text, {
                                        variant: "text-md/semibold",
                                        color: "header-primary",
                                        children: N.default.Messages.DISABLE_INVITES
                                    }), (0, a.jsx)(i.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        children: N.default.Messages.GUILD_INVITE_DISABLE_ACTION_SHEET_DESCRIPTION
                                    })]
                                }), (0, a.jsx)(i.Switch, {
                                    className: E.toggle,
                                    onChange: function() {
                                        M(e => !e)
                                    },
                                    checked: p
                                })]
                            }), (0, a.jsxs)("div", {
                                className: E.pauseContainer,
                                children: [(0, a.jsxs)("div", {
                                    className: E.pauseText,
                                    children: [(0, a.jsx)(i.Text, {
                                        variant: "text-md/semibold",
                                        color: "header-primary",
                                        children: N.default.Messages.DISABLE_DMS
                                    }), (0, a.jsx)(i.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        children: N.default.Messages.GUILD_DMS_DISABLE_ACTION_SHEET_DESCRIPTION
                                    })]
                                }), (0, a.jsx)(i.Switch, {
                                    className: E.toggle,
                                    onChange: function() {
                                        j(e => !e)
                                    },
                                    checked: O
                                })]
                            })]
                        })
                    }), (0, a.jsxs)(i.ModalFooter, {
                        children: [(0, a.jsx)(i.Button, {
                            onClick: () => {
                                (m || L) && !p && !O ? ((0, f.setGuildIncidentActions)(C.id, !1, !1), (0, i.openModalLazy)(async () => {
                                    let {
                                        default: e
                                    } = await n.el("187317").then(n.bind(n, "187317"));
                                    return n => (0, a.jsx)(e, {
                                        ...n,
                                        guildId: t
                                    })
                                })) : (0, f.setGuildIncidentActions)(C.id, p, O, T);
                                let {
                                    source: e,
                                    alertType: l,
                                    messageId: r
                                } = D;
                                c.default.track(g.AnalyticEvents.GUILD_RAID_INTERVENTION_STATE_CHANGE, {
                                    guild_id: t,
                                    source: e,
                                    raid_alert_id: r,
                                    raid_alert_type: l,
                                    intervention_type_enabled: (0, _.getEnabledInterventions)(p, O),
                                    intervention_type_disabled: (0, _.getDisabledInterventions)(p, O),
                                    duration: 60 * T
                                }), A()
                            },
                            color: i.Button.Colors.BRAND_NEW,
                            look: i.Button.Looks.FILLED,
                            submitting: v,
                            disabled: !G,
                            children: N.default.Messages.GUILD_SERVER_LOCKDOWN_MODAL_CTA
                        }), (0, a.jsx)(i.Button, {
                            onClick: A,
                            color: i.Button.Colors.PRIMARY,
                            look: i.Button.Looks.LINK,
                            disabled: v,
                            children: N.default.Messages.CANCEL
                        })]
                    })]
                })
            }
        },
        45029: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var a = n("920040");
            n("773670");
            var l = n("469563"),
                r = n("434657"),
                d = n("75196"),
                i = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: l = "currentColor",
                        className: r,
                        foreground: i,
                        ...s
                    } = e;
                    return (0, a.jsx)("svg", {
                        width: t,
                        height: n,
                        className: r,
                        viewBox: "0 0 24 24",
                        ...(0, d.default)(s),
                        children: (0, a.jsx)("path", {
                            className: i,
                            fill: l,
                            d: "M17 11V7C17 4.243 14.756 2 12 2C9.242 2 7 4.243 7 7V11C5.897 11 5 11.896 5 13V20C5 21.103 5.897 22 7 22H17C18.103 22 19 21.103 19 20V13C19 11.896 18.103 11 17 11ZM12 18C11.172 18 10.5 17.328 10.5 16.5C10.5 15.672 11.172 15 12 15C12.828 15 13.5 15.672 13.5 16.5C13.5 17.328 12.828 18 12 18ZM15 11H9V7C9 5.346 10.346 4 12 4C13.654 4 15 5.346 15 7V11Z",
                            "aria-hidden": !0
                        })
                    })
                }, r.LockIcon)
        },
        956089: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                BadgeShapes: function() {
                    return s
                },
                getBadgeWidthForValue: function() {
                    return u
                },
                getBadgeCountString: function() {
                    return o
                },
                NumberBadge: function() {
                    return c
                },
                TextBadge: function() {
                    return f
                },
                PremiumBadge: function() {
                    return _
                },
                IconBadge: function() {
                    return h
                },
                CircleBadge: function() {
                    return I
                }
            });
            var a = n("920040");
            n("773670");
            var l = n("575482"),
                r = n.n(l);
            n("77078");
            var d = n("20606");
            n("782340");
            var i = n("460671");
            let s = {
                ROUND: i.baseShapeRound,
                ROUND_LEFT: i.baseShapeRoundLeft,
                ROUND_RIGHT: i.baseShapeRoundRight,
                SQUARE: ""
            };

            function u(e) {
                return e < 10 ? 16 : e < 100 ? 22 : 30
            }

            function o(e) {
                return e < 1e3 ? "".concat(e) : "".concat(Math.min(Math.floor(e / 1e3), 9), "k+")
            }
            let c = e => {
                    let {
                        count: t,
                        color: n = d.default.STATUS_DANGER,
                        disableColor: l = !1,
                        shape: c = s.ROUND,
                        className: f,
                        style: _,
                        ...h
                    } = e;
                    return (0, a.jsx)("div", {
                        className: r(f, i.numberBadge, c),
                        style: {
                            backgroundColor: l ? void 0 : n,
                            width: u(t),
                            paddingRight: function(e) {
                                switch (e) {
                                    case 1:
                                    case 4:
                                    case 6:
                                        return 1;
                                    default:
                                        return
                                }
                            }(t),
                            ..._
                        },
                        ...h,
                        children: o(t)
                    })
                },
                f = e => {
                    let {
                        text: t,
                        className: n,
                        color: l = d.default.STATUS_DANGER,
                        shape: u = s.ROUND,
                        disableColor: o = !1,
                        style: c,
                        ...f
                    } = e;
                    return (0, a.jsx)("div", {
                        className: r(n, i.textBadge, u),
                        style: {
                            backgroundColor: o ? void 0 : l,
                            ...c
                        },
                        ...f,
                        children: t
                    })
                },
                _ = e => {
                    let {
                        text: t,
                        className: n,
                        ...l
                    } = e;
                    return (0, a.jsx)(f, {
                        className: r(i.premiumBadge, n),
                        text: t,
                        ...l
                    })
                },
                h = e => {
                    let {
                        icon: t,
                        className: n,
                        color: l = d.default.STATUS_DANGER,
                        shape: u = s.ROUND,
                        disableColor: o = !1,
                        style: c
                    } = e;
                    return (0, a.jsx)("div", {
                        className: r(n, i.iconBadge, u),
                        style: {
                            backgroundColor: o ? void 0 : l,
                            ...c
                        },
                        children: (0, a.jsx)(t, {
                            className: i.icon
                        })
                    })
                },
                I = e => {
                    let {
                        className: t,
                        color: n = d.default.INTERACTIVE_ACTIVE,
                        shape: l = s.ROUND,
                        disableColor: u = !1,
                        style: o,
                        ...c
                    } = e;
                    return (0, a.jsx)("div", {
                        className: r(t, i.circleBadge, l),
                        style: {
                            backgroundColor: u ? void 0 : n,
                            ...o
                        },
                        ...c
                    })
                }
        }
    }
]);