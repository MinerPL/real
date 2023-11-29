(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["20833"], {
        283196: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                FolderPlusIcon: function() {
                    return s
                }
            });
            var n = a("37983");
            a("884691");
            var i = a("669491"),
                l = a("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: a = 24,
                    color: s = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...d
                } = e;
                return (0, n.jsx)("svg", {
                    ...(0, l.default)(d),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: a,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3h-7l-1.406-2.11A2 2 0 0 0 8.93 2H5Zm7 7a1 1 0 0 1 1 1v3h3a1 1 0 0 1 0 2h-3v3a1 1 0 0 1-2 0v-3H8a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1Z",
                        clipRule: "evenodd",
                        className: u
                    })
                })
            }
        },
        473528: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                GamingStatsPromptExperiment: function() {
                    return i
                }
            });
            var n = a("862205");
            let i = (0, n.createExperiment)({
                kind: "guild",
                id: "2023-09_gaming_stats_prompt_guild",
                label: "Gaming stats prompt",
                defaultConfig: {
                    triggerGamingStats: !1
                },
                treatments: [{
                    id: 1,
                    label: "ability to trigger gaming stats prompt",
                    config: {
                        triggerGamingStats: !0
                    }
                }, {
                    id: 2,
                    label: "ability to trigger gaming stats prompt (leaderboard)",
                    config: {
                        triggerGamingStats: !0
                    }
                }]
            })
        },
        578899: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                SimpleDeadchatPromptExperiment: function() {
                    return i
                }
            });
            var n = a("862205");
            let i = (0, n.createExperiment)({
                kind: "guild",
                id: "2023-08_deadchat_simple_prompt_guild",
                label: "Simple deadchat prompt",
                defaultConfig: {
                    triggerDeadchat: !1,
                    enableDeadchat: !1
                },
                treatments: [{
                    id: 0,
                    label: "Control",
                    config: {
                        triggerDeadchat: !0,
                        enableDeadchat: !1
                    }
                }, {
                    id: 1,
                    label: "trigger deadchat upon connection open",
                    config: {
                        triggerDeadchat: !0,
                        enableDeadchat: !0
                    }
                }]
            })
        },
        383292: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return f
                }
            });
            var n = a("37983");
            a("884691");
            var i = a("917351"),
                l = a.n(i),
                s = a("446674"),
                u = a("77078"),
                d = a("689275"),
                r = a("300322"),
                o = a("109264"),
                c = a("782340");

            function f(e) {
                let t = (0, r.useIsThreadModerator)(e),
                    i = (0, s.useStateFromStores)([d.default], () => !l.isEmpty(d.default.getThreadsForGuild(e.id)));
                return t && i ? (0, n.jsx)(u.MenuItem, {
                    id: "active-threads",
                    label: c.default.Messages.ACTIVE_THREADS,
                    icon: o.default,
                    action: () => {
                        (0, u.openModalLazy)(async () => {
                            let {
                                default: t
                            } = await a.el("469755").then(a.bind(a, "469755"));
                            return a => (0, n.jsx)(t, {
                                guildId: e.id,
                                ...a
                            })
                        })
                    }
                }) : null
            }
        },
        163139: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return r
                }
            });
            var n = a("37983");
            a("884691");
            var i = a("77078"),
                l = a("412707"),
                s = a("838093"),
                u = a("71216"),
                d = a("782340");

            function r(e) {
                return (0, n.jsx)(i.MenuItem, {
                    id: "application-directory",
                    label: (0, n.jsx)(n.Fragment, {
                        children: d.default.Messages.APP_DIRECTORY
                    }),
                    icon: u.default,
                    action: () => {
                        (0, s.goToAppDirectory)({
                            guildId: e.id,
                            entrypoint: {
                                name: l.ApplicationDirectoryEntrypointNames.GUILD_HEADER_POPOUT
                            }
                        })
                    }
                })
            }
        },
        413266: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                openReportRaidModal: function() {
                    return l
                },
                openSafetyChannelSetupModal: function() {
                    return s
                }
            });
            var n = a("37983");
            a("884691");
            var i = a("77078");

            function l(e) {
                (0, i.openModalLazy)(async () => {
                    let {
                        default: t
                    } = await a.el("423588").then(a.bind(a, "423588"));
                    return a => (0, n.jsx)(t, {
                        ...a,
                        guildId: e
                    })
                })
            }

            function s(e) {
                (0, i.openModalLazy)(async () => {
                    let {
                        default: t
                    } = await a.el("982537").then(a.bind(a, "982537"));
                    return a => (0, n.jsx)(t, {
                        ...a,
                        guildId: e
                    })
                })
            }
        },
        701203: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                useCanReportRaid: function() {
                    return c
                },
                useCanEnableRaidAlerts: function() {
                    return f
                }
            });
            var n = a("884691"),
                i = a("446674");
            a("926809");
            var l = a("957255"),
                s = a("610174"),
                u = a("413476"),
                d = a("311161"),
                r = a("54346"),
                o = a("49111");

            function c(e) {
                var t;
                let a = null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : "",
                    {
                        enableRaidReporting: s
                    } = u.ReportRaidExperiment.useExperiment({
                        guildId: a,
                        location: "4467c7_1"
                    }, {
                        autoTrackExposure: !1
                    }),
                    c = (0, i.useStateFromStores)([l.default], () => (function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.default;
                        return t.can(o.Permissions.BAN_MEMBERS, e) || t.can(o.Permissions.KICK_MEMBERS, e) || t.can(o.Permissions.MANAGE_GUILD, e)
                    })(e, l.default), [e]),
                    f = (0, i.useStateFromStores)([r.default], () => null != e ? r.default.getGuildIncident(e.id) : null, [e]),
                    g = null != f && (0, d.hasDetectedActivity)(f);
                return n.useEffect(() => {
                    !g && c && u.ReportRaidExperiment.trackExposure({
                        guildId: a,
                        location: "4467c7_2"
                    })
                }, [g, c, a]), !g && c && s
            }

            function f(e) {
                var t;
                let a = null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : "",
                    n = (0, i.useStateFromStores)([l.default], () => (function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.default;
                        return t.can(o.Permissions.MANAGE_GUILD, e)
                    })(e, l.default), [e]),
                    {
                        enableRaidAlerts: d
                    } = u.RaidAlertExperiment.useExperiment({
                        guildId: a,
                        location: "4467c7_3"
                    }, {
                        autoTrackExposure: n
                    }),
                    {
                        showAlertMode: r
                    } = (0, s.useGuildAlertModeEnabled)(a);
                return n && (d || r)
            }
        },
        199938: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                staffOnlyGuildSettingsAccess: function() {
                    return u
                },
                useGuildAccessRateInsightExperiment: function() {
                    return d
                }
            });
            var n = a("884691"),
                i = a("862205"),
                l = a("697218");
            let s = (0, i.createExperiment)({
                kind: "guild",
                id: "2022-03_guild_access_rate_insight_experiment",
                label: "Guild Access Rate Insight Experiment",
                defaultConfig: {
                    showAccessRate: !1
                },
                treatments: [{
                    id: 1,
                    label: "Show guild access rate in insights",
                    config: {
                        showAccessRate: !0
                    }
                }]
            });

            function u(e) {
                var t;
                let a = null === (t = l.default.getCurrentUser()) || void 0 === t ? void 0 : t.isStaff();
                return a && s.getCurrentConfig({
                    guildId: e,
                    location: "77b4b2_1"
                }).showAccessRate
            }

            function d(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return n.useEffect(() => {
                    !t && null != e && s.trackExposure({
                        guildId: e,
                        location: "77b4b2_2"
                    })
                }, [e, t]), s.useExperiment({
                    guildId: null != e ? e : "",
                    location: "77b4b2_3"
                }, {
                    autoTrackExposure: !1,
                    disable: t || null == e
                })
            }
        },
        992996: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return et
                }
            });
            var n = a("37983"),
                i = a("884691"),
                l = a("414456"),
                s = a.n(l),
                u = a("627445"),
                d = a.n(u),
                r = a("446674"),
                o = a("77078"),
                c = a("126501"),
                f = a("388142"),
                g = a("473528"),
                p = a("578899"),
                E = a("685058"),
                h = a("578411"),
                I = a("383292"),
                m = a("163139"),
                M = a("230947"),
                x = a("747867"),
                _ = a("58622"),
                S = a("413266"),
                v = a("701203"),
                A = a("95039"),
                G = a("255812"),
                C = a("199938"),
                R = a("592407"),
                b = a("529932"),
                T = a("267567"),
                L = a("724026"),
                j = a("921228"),
                D = a("393414"),
                N = a("26989"),
                y = a("957255"),
                U = a("282109"),
                H = a("697218"),
                P = a("756609"),
                O = a("660279"),
                V = a("171710"),
                w = a("446352"),
                k = a("919765"),
                F = a("474571"),
                B = a("118503"),
                z = a("987772"),
                Y = a("351825"),
                Z = a("561359"),
                W = a("148337"),
                K = a("599110"),
                X = a("49111"),
                q = a("695838"),
                J = a("782340"),
                Q = a("480260");

            function $(e, t) {
                (0, o.openModal)(a => (0, n.jsx)(h.GuildLeaveConfirmModalContents, {
                    ...a,
                    guild: e,
                    discoverableGuildData: t
                }))
            }
            let ee = i.memo(function(e) {
                let {
                    guild: t,
                    onClose: l,
                    onSelect: u
                } = e, h = (0, r.useStateFromStores)([H.default], () => H.default.getCurrentUser());
                d(null != h, "GuildHeaderPopout: user cannot be undefined"), i.useEffect(() => {
                    K.default.track(X.AnalyticEvents.GUILD_DROPDOWN_MENU_VIEWED, {
                        guild_id: t.id
                    })
                });
                let ee = (0, r.useStateFromStores)([U.default], () => U.default.isGuildCollapsed(t.id), [t.id]),
                    {
                        canAccessSettings: et,
                        canManageChannels: ea,
                        showGuildAnalytics: en
                    } = (0, r.useStateFromStoresObject)([y.default], () => {
                        let e = y.default.can(X.Permissions.VIEW_GUILD_ANALYTICS, t) && t.hasFeature(X.GuildFeatures.COMMUNITY);
                        return {
                            canAccessSettings: y.default.canAccessGuildSettings(t),
                            canManageChannels: y.default.can(X.Permissions.MANAGE_CHANNELS, t),
                            showGuildAnalytics: (0, C.staffOnlyGuildSettingsAccess)(t.id) || e
                        }
                    }, [t]),
                    ei = (0, v.useCanReportRaid)(t),
                    el = t.isOwner(h),
                    es = (0, r.useStateFromStores)([T.default], () => T.default.isLurking(t.id), [t.id]),
                    eu = (0, r.useStateFromStores)([N.default], () => N.default.isCurrentUserGuest(t.id)),
                    ed = (0, G.default)(t.id, !0),
                    er = (0, E.default)(t),
                    eo = (0, _.default)({
                        source: X.InstantInviteSources.GUILD_HEADER,
                        guild: t
                    }),
                    ec = (0, M.default)({
                        guildId: t.id,
                        userId: h.id,
                        analyticsLocation: {
                            page: X.AnalyticsPages.GUILD_CHANNEL,
                            section: X.AnalyticsSections.GUILD_DROPDOWN_MENU
                        },
                        icon: z.default
                    }),
                    ef = t.hasFeature(X.GuildFeatures.HUB),
                    eg = t.id === q.FAVORITES_RAW_GUILD_ID,
                    ep = (0, L.default)(t.id),
                    eE = (0, I.default)(t),
                    eh = (0, m.default)(t),
                    eI = (0, j.useIsPremiumTutorialEnabled)("GuildHeaderPopout"),
                    em = (0, x.default)(t, !0),
                    {
                        triggerDeadchat: eM
                    } = p.SimpleDeadchatPromptExperiment.useExperiment({
                        guildId: t.id,
                        location: "guild header"
                    }, {
                        autoTrackExposure: !1
                    }),
                    {
                        triggerGamingStats: ex
                    } = g.GamingStatsPromptExperiment.useExperiment({
                        guildId: t.id,
                        location: "guild header"
                    }, {
                        autoTrackExposure: !1
                    }),
                    e_ = (0, b.useExpressionSourceGuildDataForGuildLeaveModal)(t);
                return es || eu ? (0, n.jsx)(o.Menu, {
                    onSelect: u,
                    navId: "guild-header-popout",
                    variant: "fixed",
                    onClose: l,
                    "aria-label": J.default.Messages.GUILD_ACTIONS_MENU_LABEL,
                    children: (0, n.jsx)(o.MenuItem, {
                        id: "leave-guild",
                        label: J.default.Messages.LEAVE_SERVER,
                        icon: w.default,
                        action: () => {
                            R.default.leaveGuild(t.id), !eu && (0, D.transitionTo)(X.Routes.GUILD_DISCOVERY)
                        }
                    })
                }) : eg ? (0, n.jsxs)(o.Menu, {
                    onSelect: u,
                    navId: "favorites-header-popout",
                    variant: "fixed",
                    onClose: l,
                    "aria-label": J.default.Messages.GUILD_ACTIONS_MENU_LABEL,
                    children: [(0, n.jsx)(o.MenuGroup, {
                        children: (0, n.jsx)(o.MenuItem, {
                            id: "create-category",
                            label: J.default.Messages.CREATE_CATEGORY,
                            icon: k.default,
                            action: () => (0, o.openModalLazy)(async () => {
                                let {
                                    default: e
                                } = await a.el("515680").then(a.bind(a, "515680"));
                                return t => (0, n.jsx)(e, {
                                    ...t
                                })
                            })
                        })
                    }), (0, n.jsx)(o.MenuGroup, {
                        children: (0, n.jsx)(o.MenuCheckboxItem, {
                            id: "hide-muted-channels",
                            label: J.default.Messages.HIDE_MUTED_CHANNELS,
                            checked: ee,
                            action: () => c.default.toggleCollapseGuild(t.id)
                        })
                    })]
                }) : ef ? (0, n.jsxs)(o.Menu, {
                    onSelect: u,
                    navId: "guild-header-popout",
                    variant: "fixed",
                    onClose: l,
                    "aria-label": J.default.Messages.GUILD_ACTIONS_MENU_LABEL,
                    children: [(0, n.jsxs)(o.MenuGroup, {
                        children: [et ? (0, n.jsx)(o.MenuItem, {
                            id: "settings",
                            label: J.default.Messages.SERVER_SETTINGS,
                            icon: F.default,
                            action: () => {
                                R.default.open(t.id, X.GuildSettingsSections.OVERVIEW)
                            }
                        }) : null, eo, (0, n.jsx)(o.MenuItem, {
                            id: "privacy",
                            label: J.default.Messages.PRIVACY_SETTINGS,
                            icon: W.default,
                            action: () => (0, o.openModalLazy)(async () => {
                                let {
                                    default: e
                                } = await a.el("349406").then(a.bind(a, "349406"));
                                return a => (0, n.jsx)(e, {
                                    ...a,
                                    guild: t
                                })
                            })
                        }), ec]
                    }), el ? null : (0, n.jsx)(o.MenuGroup, {
                        children: (0, n.jsx)(o.MenuItem, {
                            id: "leave",
                            label: J.default.Messages.LEAVE_HUB,
                            icon: w.default,
                            color: "danger",
                            action: () => $(t, e_)
                        })
                    })]
                }) : (0, n.jsxs)(o.Menu, {
                    onSelect: u,
                    navId: "guild-header-popout",
                    variant: "fixed",
                    onClose: l,
                    "aria-label": J.default.Messages.GUILD_ACTIONS_MENU_LABEL,
                    children: [(0, n.jsx)(o.MenuGroup, {
                        children: (0, n.jsx)(o.MenuItem, {
                            id: "premium-subscribe",
                            label: J.default.Messages.PREMIUM_GUILD_HEADER_DROPDOWN_NITRO_SERVER_SUBSCRIBE,
                            icon: B.default,
                            action: () => {
                                (0, A.openGuildBoostingMarketingModal)({
                                    guildId: t.id,
                                    location: {
                                        section: X.AnalyticsSections.GUILD_HEADER_POPOUT
                                    }
                                })
                            },
                            className: s({
                                [Q.boostingMenuItemHighlight]: eI
                            })
                        })
                    }), (0, n.jsxs)(o.MenuGroup, {
                        children: [el && h.isStaff() && eM ? (0, n.jsx)(o.MenuItem, {
                            id: "create-deadchat",
                            label: "Deadchat Ping",
                            icon: V.default,
                            action: () => {
                                (0, f.forcePrompt)(t.id, X.MessageTypes.GUILD_DEADCHAT_REVIVE_PROMPT)
                            }
                        }) : null, el && h.isStaff() && ex ? (0, n.jsx)(o.MenuItem, {
                            id: "create-gaming-ping",
                            label: "Gaming Stats Ping",
                            icon: V.default,
                            action: () => {
                                (0, f.forcePrompt)(t.id, X.MessageTypes.GUILD_GAMING_STATS_PROMPT)
                            }
                        }) : null, eo, et ? (0, n.jsx)(o.MenuItem, {
                            id: "settings",
                            label: J.default.Messages.SERVER_SETTINGS,
                            icon: F.default,
                            action: () => {
                                R.default.open(t.id, X.GuildSettingsSections.OVERVIEW)
                            }
                        }) : null, en ? (0, n.jsx)(o.MenuItem, {
                            id: "insights",
                            label: J.default.Messages.SERVER_INSIGHTS,
                            icon: P.default,
                            action: () => R.default.open(t.id, X.GuildSettingsSections.ANALYTICS)
                        }) : null, ea ? (0, n.jsxs)(n.Fragment, {
                            children: [(0, n.jsx)(o.MenuItem, {
                                id: "create-channel",
                                label: J.default.Messages.CREATE_CHANNEL,
                                icon: Y.default,
                                action: () => (0, o.openModalLazy)(async () => {
                                    let {
                                        default: e
                                    } = await a.el("581354").then(a.bind(a, "581354"));
                                    return a => (0, n.jsx)(e, {
                                        ...a,
                                        channelType: X.ChannelTypes.GUILD_TEXT,
                                        guildId: t.id
                                    })
                                })
                            }), (0, n.jsx)(o.MenuItem, {
                                id: "create-category",
                                label: J.default.Messages.CREATE_CATEGORY,
                                icon: k.default,
                                action: () => (0, o.openModalLazy)(async () => {
                                    let {
                                        default: e
                                    } = await a.el("581354").then(a.bind(a, "581354"));
                                    return a => (0, n.jsx)(e, {
                                        ...a,
                                        channelType: X.ChannelTypes.GUILD_CATEGORY,
                                        guildId: t.id
                                    })
                                })
                            })]
                        }) : null, ed, eE, eh, er]
                    }), (0, n.jsxs)(o.MenuGroup, {
                        children: [ep, (0, n.jsx)(o.MenuItem, {
                            id: "notifications",
                            label: J.default.Messages.NOTIFICATION_SETTINGS,
                            icon: O.default,
                            action: () => (0, o.openModalLazy)(async () => {
                                let {
                                    default: e
                                } = await a.el("747593").then(a.bind(a, "747593"));
                                return a => (0, n.jsx)(e, {
                                    ...a,
                                    guildId: t.id
                                })
                            })
                        }), (0, n.jsx)(o.MenuItem, {
                            id: "privacy",
                            label: J.default.Messages.PRIVACY_SETTINGS,
                            icon: W.default,
                            action: () => (0, o.openModalLazy)(async () => {
                                let {
                                    default: e
                                } = await a.el("349406").then(a.bind(a, "349406"));
                                return a => (0, n.jsx)(e, {
                                    ...a,
                                    guild: t
                                })
                            })
                        })]
                    }), (0, n.jsxs)(o.MenuGroup, {
                        children: [ec, (0, n.jsx)(o.MenuCheckboxItem, {
                            id: "hide-muted-channels",
                            label: J.default.Messages.HIDE_MUTED_CHANNELS,
                            checked: ee,
                            action: () => c.default.toggleCollapseGuild(t.id)
                        })]
                    }), (0, n.jsxs)(o.MenuGroup, {
                        children: [em, ei && t.isCommunity() ? (0, n.jsx)(o.MenuItem, {
                            id: "report-raid",
                            label: J.default.Messages.GUILD_REPORT_RAID_BUTTON_TITLE,
                            icon: Z.default,
                            color: "danger",
                            action: () => (0, S.openReportRaidModal)(t.id)
                        }) : null, el ? null : (0, n.jsx)(o.MenuItem, {
                            id: "leave",
                            label: J.default.Messages.LEAVE_SERVER,
                            icon: w.default,
                            color: "danger",
                            action: () => $(t, e_)
                        })]
                    })]
                })
            });
            var et = ee
        },
        756609: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return u
                }
            });
            var n = a("37983");
            a("884691");
            var i = a("469563"),
                l = a("308472"),
                s = a("75196"),
                u = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 18,
                        height: a = 18,
                        color: i = "currentColor",
                        foreground: l,
                        ...u
                    } = e;
                    return (0, n.jsxs)("svg", {
                        ...(0, s.default)(u),
                        width: t,
                        height: a,
                        viewBox: "0 0 18 18",
                        children: [(0, n.jsx)("path", {
                            fill: i,
                            className: l,
                            d: "M4.5,16.5v-3H3A1.5,1.5,0,0,1,1.5,12V3A1.5,1.5,0,0,1,3,1.5H15A1.5,1.5,0,0,1,16.5,3v9A1.5,1.5,0,0,1,15,13.5H8.5ZM3,3v9H6v1.5L8,12h7V3Z"
                        }), (0, n.jsx)("path", {
                            fill: i,
                            className: l,
                            d: "M6.75,4.5H5.25v6h1.5Z"
                        }), (0, n.jsx)("path", {
                            fill: i,
                            className: l,
                            d: "M9.75,7.5H8.25v3h1.5Z"
                        }), (0, n.jsx)("path", {
                            fill: i,
                            className: l,
                            d: "M12.75,6h-1.5v4.5h1.5Z"
                        })]
                    })
                }, l.AnalyticsIcon, void 0, {
                    size: 18
                })
        },
        446352: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return u
                }
            });
            var n = a("37983");
            a("884691");
            var i = a("469563"),
                l = a("354087"),
                s = a("75196"),
                u = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 18,
                        height: a = 18,
                        color: i = "currentColor",
                        foreground: l,
                        ...u
                    } = e;
                    return (0, n.jsx)("svg", {
                        ...(0, s.default)(u),
                        width: t,
                        height: a,
                        viewBox: "0 0 24 24",
                        children: (0, n.jsx)("path", {
                            className: l,
                            fill: i,
                            d: "M10.418 13L12.708 15.294L11.292 16.706L6.586 11.991L11.294 7.292L12.707 8.708L10.41 11H21.949C21.446 5.955 17.177 2 12 2C6.486 2 2 6.487 2 12C2 17.513 6.486 22 12 22C17.177 22 21.446 18.046 21.949 13H10.418Z"
                        })
                    })
                }, l.DoorExitIcon, void 0, {
                    size: 18
                })
        },
        919765: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return u
                }
            });
            var n = a("37983");
            a("884691");
            var i = a("469563"),
                l = a("283196"),
                s = a("75196"),
                u = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 18,
                        height: a = 18,
                        color: i = "currentColor",
                        foreground: l,
                        ...u
                    } = e;
                    return (0, n.jsx)("svg", {
                        ...(0, s.default)(u),
                        width: t,
                        height: a,
                        viewBox: "0 0 24 24",
                        children: (0, n.jsx)("path", {
                            className: l,
                            fill: i,
                            d: "M20 7H12L10.553 5.106C10.214 4.428 9.521 4 8.764 4H3C2.447 4 2 4.447 2 5V19C2 20.104 2.895 21 4 21H20C21.104 21 22 20.104 22 19V9C22 7.896 21.104 7 20 7ZM16 15H13V18H11V15H8V13H11V10H13V13H16V15Z"
                        })
                    })
                }, l.FolderPlusIcon, void 0, {
                    size: 18
                })
        }
    }
]);