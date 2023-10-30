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
                    colorClass: d = "",
                    ...u
                } = e;
                return (0, n.jsx)("svg", {
                    ...(0, l.default)(u),
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
                        className: d
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
                d = a("77078"),
                u = a("689275"),
                o = a("300322"),
                r = a("109264"),
                c = a("782340");

            function f(e) {
                let t = (0, o.useIsThreadModerator)(e),
                    i = (0, s.useStateFromStores)([u.default], () => !l.isEmpty(u.default.getThreadsForGuild(e.id)));
                return t && i ? (0, n.jsx)(d.MenuItem, {
                    id: "active-threads",
                    label: c.default.Messages.ACTIVE_THREADS,
                    icon: r.default,
                    action: () => {
                        (0, d.openModalLazy)(async () => {
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
                    return o
                }
            });
            var n = a("37983");
            a("884691");
            var i = a("77078"),
                l = a("412707"),
                s = a("838093"),
                d = a("71216"),
                u = a("782340");

            function o(e) {
                return (0, n.jsx)(i.MenuItem, {
                    id: "application-directory",
                    label: (0, n.jsx)(n.Fragment, {
                        children: u.default.Messages.APP_DIRECTORY
                    }),
                    icon: d.default,
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
                d = a("627445"),
                u = a.n(d),
                o = a("446674"),
                r = a("77078"),
                c = a("126501"),
                f = a("388142"),
                g = a("473528"),
                I = a("578899"),
                E = a("685058"),
                p = a("578411"),
                M = a("383292"),
                h = a("163139"),
                m = a("230947"),
                _ = a("747867"),
                S = a("58622"),
                x = a("413266"),
                G = a("701203"),
                T = a("95039"),
                C = a("255812"),
                A = a("199938"),
                L = a("592407"),
                R = a("529932"),
                j = a("267567"),
                b = a("724026"),
                v = a("921228"),
                D = a("393414"),
                N = a("26989"),
                y = a("957255"),
                U = a("282109"),
                O = a("697218"),
                H = a("756609"),
                P = a("660279"),
                V = a("171710"),
                w = a("446352"),
                F = a("919765"),
                k = a("474571"),
                B = a("118503"),
                Y = a("987772"),
                W = a("351825"),
                z = a("561359"),
                Z = a("148337"),
                X = a("599110"),
                q = a("49111"),
                J = a("695838"),
                K = a("782340"),
                Q = a("480260");

            function $(e, t) {
                (0, r.openModal)(a => (0, n.jsx)(p.GuildLeaveConfirmModalContents, {
                    ...a,
                    guild: e,
                    discoverableGuildData: t
                }))
            }
            let ee = i.memo(function(e) {
                let {
                    guild: t,
                    onClose: l,
                    onSelect: d
                } = e, p = (0, o.useStateFromStores)([O.default], () => O.default.getCurrentUser());
                u(null != p, "GuildHeaderPopout: user cannot be undefined"), i.useEffect(() => {
                    X.default.track(q.AnalyticEvents.GUILD_DROPDOWN_MENU_VIEWED, {
                        guild_id: t.id
                    })
                });
                let ee = (0, o.useStateFromStores)([U.default], () => U.default.isGuildCollapsed(t.id), [t.id]),
                    {
                        canAccessSettings: et,
                        canManageChannels: ea,
                        showGuildAnalytics: en
                    } = (0, o.useStateFromStoresObject)([y.default], () => {
                        let e = y.default.can(q.Permissions.VIEW_GUILD_ANALYTICS, t) && t.hasFeature(q.GuildFeatures.COMMUNITY);
                        return {
                            canAccessSettings: y.default.canAccessGuildSettings(t),
                            canManageChannels: y.default.can(q.Permissions.MANAGE_CHANNELS, t),
                            showGuildAnalytics: (0, A.staffOnlyGuildSettingsAccess)(t.id) || e
                        }
                    }, [t]),
                    ei = (0, G.useCanReportRaid)(t),
                    el = t.isOwner(p),
                    es = (0, o.useStateFromStores)([j.default], () => j.default.isLurking(t.id), [t.id]),
                    ed = (0, o.useStateFromStores)([N.default], () => N.default.isCurrentUserGuest(t.id)),
                    eu = (0, C.default)(t.id, !0),
                    eo = (0, E.default)(t),
                    er = (0, S.default)({
                        source: q.InstantInviteSources.GUILD_HEADER,
                        guild: t
                    }),
                    ec = (0, m.default)({
                        guildId: t.id,
                        userId: p.id,
                        analyticsLocation: {
                            page: q.AnalyticsPages.GUILD_CHANNEL,
                            section: q.AnalyticsSections.GUILD_DROPDOWN_MENU
                        },
                        icon: Y.default
                    }),
                    ef = t.hasFeature(q.GuildFeatures.HUB),
                    eg = t.id === J.FAVORITES_RAW_GUILD_ID,
                    eI = (0, b.default)(t.id),
                    eE = (0, M.default)(t),
                    ep = (0, h.default)(t),
                    eM = (0, v.useIsPremiumTutorialEnabled)("GuildHeaderPopout"),
                    eh = (0, _.default)(t, !0),
                    {
                        triggerDeadchat: em
                    } = I.SimpleDeadchatPromptExperiment.useExperiment({
                        guildId: t.id,
                        location: "guild header"
                    }, {
                        autoTrackExposure: !1
                    }),
                    {
                        triggerGamingStats: e_
                    } = g.GamingStatsPromptExperiment.useExperiment({
                        guildId: t.id,
                        location: "guild header"
                    }, {
                        autoTrackExposure: !1
                    }),
                    eS = (0, R.useExpressionSourceGuildDataForGuildLeaveModal)(t);
                return es || ed ? (0, n.jsx)(r.Menu, {
                    onSelect: d,
                    navId: "guild-header-popout",
                    variant: "fixed",
                    onClose: l,
                    "aria-label": K.default.Messages.GUILD_ACTIONS_MENU_LABEL,
                    children: (0, n.jsx)(r.MenuItem, {
                        id: "leave-guild",
                        label: K.default.Messages.LEAVE_SERVER,
                        icon: w.default,
                        action: () => {
                            L.default.leaveGuild(t.id), !ed && (0, D.transitionTo)(q.Routes.GUILD_DISCOVERY)
                        }
                    })
                }) : eg ? (0, n.jsxs)(r.Menu, {
                    onSelect: d,
                    navId: "favorites-header-popout",
                    variant: "fixed",
                    onClose: l,
                    "aria-label": K.default.Messages.GUILD_ACTIONS_MENU_LABEL,
                    children: [(0, n.jsx)(r.MenuGroup, {
                        children: (0, n.jsx)(r.MenuItem, {
                            id: "create-category",
                            label: K.default.Messages.CREATE_CATEGORY,
                            icon: F.default,
                            action: () => (0, r.openModalLazy)(async () => {
                                let {
                                    default: e
                                } = await a.el("515680").then(a.bind(a, "515680"));
                                return t => (0, n.jsx)(e, {
                                    ...t
                                })
                            })
                        })
                    }), (0, n.jsx)(r.MenuGroup, {
                        children: (0, n.jsx)(r.MenuCheckboxItem, {
                            id: "hide-muted-channels",
                            label: K.default.Messages.HIDE_MUTED_CHANNELS,
                            checked: ee,
                            action: () => c.default.toggleCollapseGuild(t.id)
                        })
                    })]
                }) : ef ? (0, n.jsxs)(r.Menu, {
                    onSelect: d,
                    navId: "guild-header-popout",
                    variant: "fixed",
                    onClose: l,
                    "aria-label": K.default.Messages.GUILD_ACTIONS_MENU_LABEL,
                    children: [(0, n.jsxs)(r.MenuGroup, {
                        children: [et ? (0, n.jsx)(r.MenuItem, {
                            id: "settings",
                            label: K.default.Messages.SERVER_SETTINGS,
                            icon: k.default,
                            action: () => {
                                L.default.open(t.id, q.GuildSettingsSections.OVERVIEW)
                            }
                        }) : null, er, (0, n.jsx)(r.MenuItem, {
                            id: "privacy",
                            label: K.default.Messages.PRIVACY_SETTINGS,
                            icon: Z.default,
                            action: () => (0, r.openModalLazy)(async () => {
                                let {
                                    default: e
                                } = await a.el("349406").then(a.bind(a, "349406"));
                                return a => (0, n.jsx)(e, {
                                    ...a,
                                    guild: t
                                })
                            })
                        }), ec]
                    }), el ? null : (0, n.jsx)(r.MenuGroup, {
                        children: (0, n.jsx)(r.MenuItem, {
                            id: "leave",
                            label: K.default.Messages.LEAVE_HUB,
                            icon: w.default,
                            color: "danger",
                            action: () => $(t, eS)
                        })
                    })]
                }) : (0, n.jsxs)(r.Menu, {
                    onSelect: d,
                    navId: "guild-header-popout",
                    variant: "fixed",
                    onClose: l,
                    "aria-label": K.default.Messages.GUILD_ACTIONS_MENU_LABEL,
                    children: [(0, n.jsx)(r.MenuGroup, {
                        children: (0, n.jsx)(r.MenuItem, {
                            id: "premium-subscribe",
                            label: K.default.Messages.PREMIUM_GUILD_HEADER_DROPDOWN_NITRO_SERVER_SUBSCRIBE,
                            icon: B.default,
                            action: () => {
                                (0, T.openGuildBoostingMarketingModal)({
                                    guildId: t.id,
                                    location: {
                                        section: q.AnalyticsSections.GUILD_HEADER_POPOUT
                                    }
                                })
                            },
                            className: s({
                                [Q.boostingMenuItemHighlight]: eM
                            })
                        })
                    }), (0, n.jsxs)(r.MenuGroup, {
                        children: [el && p.isStaff() && em ? (0, n.jsx)(r.MenuItem, {
                            id: "create-deadchat",
                            label: "Deadchat Ping",
                            icon: V.default,
                            action: () => {
                                (0, f.forcePrompt)(t.id, q.MessageTypes.GUILD_DEADCHAT_REVIVE_PROMPT)
                            }
                        }) : null, el && p.isStaff() && e_ ? (0, n.jsx)(r.MenuItem, {
                            id: "create-gaming-ping",
                            label: "Gaming Stats Ping",
                            icon: V.default,
                            action: () => {
                                (0, f.forcePrompt)(t.id, q.MessageTypes.GUILD_GAMING_STATS_PROMPT)
                            }
                        }) : null, er, et ? (0, n.jsx)(r.MenuItem, {
                            id: "settings",
                            label: K.default.Messages.SERVER_SETTINGS,
                            icon: k.default,
                            action: () => {
                                L.default.open(t.id, q.GuildSettingsSections.OVERVIEW)
                            }
                        }) : null, en ? (0, n.jsx)(r.MenuItem, {
                            id: "insights",
                            label: K.default.Messages.SERVER_INSIGHTS,
                            icon: H.default,
                            action: () => L.default.open(t.id, q.GuildSettingsSections.ANALYTICS)
                        }) : null, ea ? (0, n.jsxs)(n.Fragment, {
                            children: [(0, n.jsx)(r.MenuItem, {
                                id: "create-channel",
                                label: K.default.Messages.CREATE_CHANNEL,
                                icon: W.default,
                                action: () => (0, r.openModalLazy)(async () => {
                                    let {
                                        default: e
                                    } = await a.el("581354").then(a.bind(a, "581354"));
                                    return a => (0, n.jsx)(e, {
                                        ...a,
                                        channelType: q.ChannelTypes.GUILD_TEXT,
                                        guildId: t.id
                                    })
                                })
                            }), (0, n.jsx)(r.MenuItem, {
                                id: "create-category",
                                label: K.default.Messages.CREATE_CATEGORY,
                                icon: F.default,
                                action: () => (0, r.openModalLazy)(async () => {
                                    let {
                                        default: e
                                    } = await a.el("581354").then(a.bind(a, "581354"));
                                    return a => (0, n.jsx)(e, {
                                        ...a,
                                        channelType: q.ChannelTypes.GUILD_CATEGORY,
                                        guildId: t.id
                                    })
                                })
                            })]
                        }) : null, eu, eE, ep, eo]
                    }), (0, n.jsxs)(r.MenuGroup, {
                        children: [eI, (0, n.jsx)(r.MenuItem, {
                            id: "notifications",
                            label: K.default.Messages.NOTIFICATION_SETTINGS,
                            icon: P.default,
                            action: () => (0, r.openModalLazy)(async () => {
                                let {
                                    default: e
                                } = await a.el("747593").then(a.bind(a, "747593"));
                                return a => (0, n.jsx)(e, {
                                    ...a,
                                    guildId: t.id
                                })
                            })
                        }), (0, n.jsx)(r.MenuItem, {
                            id: "privacy",
                            label: K.default.Messages.PRIVACY_SETTINGS,
                            icon: Z.default,
                            action: () => (0, r.openModalLazy)(async () => {
                                let {
                                    default: e
                                } = await a.el("349406").then(a.bind(a, "349406"));
                                return a => (0, n.jsx)(e, {
                                    ...a,
                                    guild: t
                                })
                            })
                        })]
                    }), (0, n.jsxs)(r.MenuGroup, {
                        children: [ec, (0, n.jsx)(r.MenuCheckboxItem, {
                            id: "hide-muted-channels",
                            label: K.default.Messages.HIDE_MUTED_CHANNELS,
                            checked: ee,
                            action: () => c.default.toggleCollapseGuild(t.id)
                        })]
                    }), (0, n.jsxs)(r.MenuGroup, {
                        children: [eh, ei && t.isCommunity() ? (0, n.jsx)(r.MenuItem, {
                            id: "report-raid",
                            label: K.default.Messages.GUILD_REPORT_RAID_BUTTON_TITLE,
                            icon: z.default,
                            color: "danger",
                            action: () => (0, x.openReportRaidModal)(t.id)
                        }) : null, el ? null : (0, n.jsx)(r.MenuItem, {
                            id: "leave",
                            label: K.default.Messages.LEAVE_SERVER,
                            icon: w.default,
                            color: "danger",
                            action: () => $(t, eS)
                        })]
                    })]
                })
            });
            var et = ee
        },
        446352: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return d
                }
            });
            var n = a("37983");
            a("884691");
            var i = a("469563"),
                l = a("354087"),
                s = a("75196"),
                d = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 18,
                        height: a = 18,
                        color: i = "currentColor",
                        foreground: l,
                        ...d
                    } = e;
                    return (0, n.jsx)("svg", {
                        ...(0, s.default)(d),
                        width: t,
                        height: a,
                        viewBox: "0 0 24 24",
                        children: (0, n.jsx)("path", {
                            className: l,
                            fill: i,
                            d: "M10.418 13L12.708 15.294L11.292 16.706L6.586 11.991L11.294 7.292L12.707 8.708L10.41 11H21.949C21.446 5.955 17.177 2 12 2C6.486 2 2 6.487 2 12C2 17.513 6.486 22 12 22C17.177 22 21.446 18.046 21.949 13H10.418Z"
                        })
                    })
                }, l.DoorExitIcon)
        },
        919765: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return d
                }
            });
            var n = a("37983");
            a("884691");
            var i = a("469563"),
                l = a("283196"),
                s = a("75196"),
                d = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 18,
                        height: a = 18,
                        color: i = "currentColor",
                        foreground: l,
                        ...d
                    } = e;
                    return (0, n.jsx)("svg", {
                        ...(0, s.default)(d),
                        width: t,
                        height: a,
                        viewBox: "0 0 24 24",
                        children: (0, n.jsx)("path", {
                            className: l,
                            fill: i,
                            d: "M20 7H12L10.553 5.106C10.214 4.428 9.521 4 8.764 4H3C2.447 4 2 4.447 2 5V19C2 20.104 2.895 21 4 21H20C21.104 21 22 20.104 22 19V9C22 7.896 21.104 7 20 7ZM16 15H13V18H11V15H8V13H11V10H13V13H16V15Z"
                        })
                    })
                }, l.FolderPlusIcon)
        }
    }
]);