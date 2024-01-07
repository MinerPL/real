            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return J
                }
            });
            var n = a("37983"),
                i = a("884691"),
                l = a("627445"),
                s = a.n(l),
                d = a("446674"),
                u = a("77078"),
                r = a("126501"),
                o = a("388142"),
                c = a("473528"),
                f = a("578899"),
                g = a("685058"),
                p = a("578411"),
                E = a("383292"),
                h = a("163139"),
                I = a("230947"),
                M = a("747867"),
                m = a("58622"),
                x = a("413266"),
                _ = a("701203"),
                S = a("95039"),
                v = a("255812"),
                A = a("199938"),
                G = a("592407"),
                C = a("529932"),
                R = a("267567"),
                b = a("724026"),
                T = a("393414"),
                L = a("26989"),
                j = a("957255"),
                D = a("282109"),
                N = a("697218"),
                y = a("756609"),
                U = a("660279"),
                H = a("171710"),
                O = a("796454"),
                P = a("919765"),
                V = a("474571"),
                w = a("118503"),
                k = a("987772"),
                F = a("351825"),
                B = a("561359"),
                z = a("148337"),
                Y = a("599110"),
                Z = a("49111"),
                W = a("695838"),
                K = a("782340");

            function X(e, t) {
                (0, u.openModal)(a => (0, n.jsx)(p.GuildLeaveConfirmModalContents, {
                    ...a,
                    guild: e,
                    discoverableGuildData: t
                }))
            }
            let q = i.memo(function(e) {
                let {
                    guild: t,
                    onClose: l,
                    onSelect: p
                } = e, q = (0, d.useStateFromStores)([N.default], () => N.default.getCurrentUser());
                s(null != q, "GuildHeaderPopout: user cannot be undefined"), i.useEffect(() => {
                    Y.default.track(Z.AnalyticEvents.GUILD_DROPDOWN_MENU_VIEWED, {
                        guild_id: t.id
                    })
                });
                let J = (0, d.useStateFromStores)([D.default], () => D.default.isGuildCollapsed(t.id), [t.id]),
                    {
                        canAccessSettings: Q,
                        canManageChannels: $,
                        showGuildAnalytics: ee
                    } = (0, d.useStateFromStoresObject)([j.default], () => {
                        let e = j.default.can(Z.Permissions.VIEW_GUILD_ANALYTICS, t) && t.hasFeature(Z.GuildFeatures.COMMUNITY);
                        return {
                            canAccessSettings: j.default.canAccessGuildSettings(t),
                            canManageChannels: j.default.can(Z.Permissions.MANAGE_CHANNELS, t),
                            showGuildAnalytics: (0, A.staffOnlyGuildSettingsAccess)(t.id) || e
                        }
                    }, [t]),
                    et = (0, _.useCanReportRaid)(t),
                    ea = t.isOwner(q),
                    en = (0, d.useStateFromStores)([R.default], () => R.default.isLurking(t.id), [t.id]),
                    ei = (0, d.useStateFromStores)([L.default], () => L.default.isCurrentUserGuest(t.id)),
                    el = (0, v.default)(t.id, !0),
                    es = (0, g.default)(t),
                    ed = (0, m.default)({
                        source: Z.InstantInviteSources.GUILD_HEADER,
                        guild: t
                    }),
                    eu = (0, I.default)({
                        guildId: t.id,
                        userId: q.id,
                        analyticsLocation: {
                            page: Z.AnalyticsPages.GUILD_CHANNEL,
                            section: Z.AnalyticsSections.GUILD_DROPDOWN_MENU
                        },
                        icon: k.default
                    }),
                    er = t.hasFeature(Z.GuildFeatures.HUB),
                    eo = t.id === W.FAVORITES_RAW_GUILD_ID,
                    ec = (0, b.default)(t.id),
                    ef = (0, E.default)(t),
                    eg = (0, h.default)(t),
                    ep = (0, M.default)(t, !0),
                    {
                        triggerDeadchat: eE
                    } = f.SimpleDeadchatPromptExperiment.useExperiment({
                        guildId: t.id,
                        location: "guild header"
                    }, {
                        autoTrackExposure: !1
                    }),
                    {
                        triggerGamingStats: eh
                    } = c.GamingStatsPromptExperiment.useExperiment({
                        guildId: t.id,
                        location: "guild header"
                    }, {
                        autoTrackExposure: !1
                    }),
                    eI = (0, C.useExpressionSourceGuildDataForGuildLeaveModal)(t);
                return en || ei ? (0, n.jsx)(u.Menu, {
                    onSelect: p,
                    navId: "guild-header-popout",
                    variant: "fixed",
                    onClose: l,
                    "aria-label": K.default.Messages.GUILD_ACTIONS_MENU_LABEL,
                    children: (0, n.jsx)(u.MenuItem, {
                        id: "leave-guild",
                        label: K.default.Messages.LEAVE_SERVER,
                        icon: O.default,
                        action: () => {
                            G.default.leaveGuild(t.id), !ei && (0, T.transitionTo)(Z.Routes.GUILD_DISCOVERY)
                        }
                    })
                }) : eo ? (0, n.jsxs)(u.Menu, {
                    onSelect: p,
                    navId: "favorites-header-popout",
                    variant: "fixed",
                    onClose: l,
                    "aria-label": K.default.Messages.GUILD_ACTIONS_MENU_LABEL,
                    children: [(0, n.jsx)(u.MenuGroup, {
                        children: (0, n.jsx)(u.MenuItem, {
                            id: "create-category",
                            label: K.default.Messages.CREATE_CATEGORY,
                            icon: P.default,
                            action: () => (0, u.openModalLazy)(async () => {
                                let {
                                    default: e
                                } = await a.el("515680").then(a.bind(a, "515680"));
                                return t => (0, n.jsx)(e, {
                                    ...t
                                })
                            })
                        })
                    }), (0, n.jsx)(u.MenuGroup, {
                        children: (0, n.jsx)(u.MenuCheckboxItem, {
                            id: "hide-muted-channels",
                            label: K.default.Messages.HIDE_MUTED_CHANNELS,
                            checked: J,
                            action: () => r.default.toggleCollapseGuild(t.id)
                        })
                    })]
                }) : er ? (0, n.jsxs)(u.Menu, {
                    onSelect: p,
                    navId: "guild-header-popout",
                    variant: "fixed",
                    onClose: l,
                    "aria-label": K.default.Messages.GUILD_ACTIONS_MENU_LABEL,
                    children: [(0, n.jsxs)(u.MenuGroup, {
                        children: [Q ? (0, n.jsx)(u.MenuItem, {
                            id: "settings",
                            label: K.default.Messages.SERVER_SETTINGS,
                            icon: V.default,
                            action: () => {
                                G.default.open(t.id, Z.GuildSettingsSections.OVERVIEW)
                            }
                        }) : null, ed, (0, n.jsx)(u.MenuItem, {
                            id: "privacy",
                            label: K.default.Messages.PRIVACY_SETTINGS,
                            icon: z.default,
                            action: () => (0, u.openModalLazy)(async () => {
                                let {
                                    default: e
                                } = await a.el("349406").then(a.bind(a, "349406"));
                                return a => (0, n.jsx)(e, {
                                    ...a,
                                    guild: t
                                })
                            })
                        }), eu]
                    }), ea ? null : (0, n.jsx)(u.MenuGroup, {
                        children: (0, n.jsx)(u.MenuItem, {
                            id: "leave",
                            label: K.default.Messages.LEAVE_HUB,
                            icon: O.default,
                            color: "danger",
                            action: () => X(t, eI)
                        })
                    })]
                }) : (0, n.jsxs)(u.Menu, {
                    onSelect: p,
                    navId: "guild-header-popout",
                    variant: "fixed",
                    onClose: l,
                    "aria-label": K.default.Messages.GUILD_ACTIONS_MENU_LABEL,
                    children: [(0, n.jsx)(u.MenuGroup, {
                        children: (0, n.jsx)(u.MenuItem, {
                            id: "premium-subscribe",
                            label: K.default.Messages.PREMIUM_GUILD_HEADER_DROPDOWN_NITRO_SERVER_SUBSCRIBE,
                            icon: w.default,
                            action: () => {
                                (0, S.openGuildBoostingMarketingModal)({
                                    guildId: t.id,
                                    location: {
                                        section: Z.AnalyticsSections.GUILD_HEADER_POPOUT
                                    }
                                })
                            }
                        })
                    }), (0, n.jsxs)(u.MenuGroup, {
                        children: [ea && q.isStaff() && eE ? (0, n.jsx)(u.MenuItem, {
                            id: "create-deadchat",
                            label: "Deadchat Ping",
                            icon: H.default,
                            action: () => {
                                (0, o.forcePrompt)(t.id, Z.MessageTypes.GUILD_DEADCHAT_REVIVE_PROMPT)
                            }
                        }) : null, ea && q.isStaff() && eh ? (0, n.jsx)(u.MenuItem, {
                            id: "create-gaming-ping",
                            label: "Gaming Stats Ping",
                            icon: H.default,
                            action: () => {
                                (0, o.forcePrompt)(t.id, Z.MessageTypes.GUILD_GAMING_STATS_PROMPT)
                            }
                        }) : null, ed, Q ? (0, n.jsx)(u.MenuItem, {
                            id: "settings",
                            label: K.default.Messages.SERVER_SETTINGS,
                            icon: V.default,
                            action: () => {
                                G.default.open(t.id, Z.GuildSettingsSections.OVERVIEW)
                            }
                        }) : null, ee ? (0, n.jsx)(u.MenuItem, {
                            id: "insights",
                            label: K.default.Messages.SERVER_INSIGHTS,
                            icon: y.default,
                            action: () => G.default.open(t.id, Z.GuildSettingsSections.ANALYTICS)
                        }) : null, $ ? (0, n.jsxs)(n.Fragment, {
                            children: [(0, n.jsx)(u.MenuItem, {
                                id: "create-channel",
                                label: K.default.Messages.CREATE_CHANNEL,
                                icon: F.default,
                                action: () => (0, u.openModalLazy)(async () => {
                                    let {
                                        default: e
                                    } = await a.el("581354").then(a.bind(a, "581354"));
                                    return a => (0, n.jsx)(e, {
                                        ...a,
                                        channelType: Z.ChannelTypes.GUILD_TEXT,
                                        guildId: t.id
                                    })
                                })
                            }), (0, n.jsx)(u.MenuItem, {
                                id: "create-category",
                                label: K.default.Messages.CREATE_CATEGORY,
                                icon: P.default,
                                action: () => (0, u.openModalLazy)(async () => {
                                    let {
                                        default: e
                                    } = await a.el("581354").then(a.bind(a, "581354"));
                                    return a => (0, n.jsx)(e, {
                                        ...a,
                                        channelType: Z.ChannelTypes.GUILD_CATEGORY,
                                        guildId: t.id
                                    })
                                })
                            })]
                        }) : null, el, ef, eg, es]
                    }), (0, n.jsxs)(u.MenuGroup, {
                        children: [ec, (0, n.jsx)(u.MenuItem, {
                            id: "notifications",
                            label: K.default.Messages.NOTIFICATION_SETTINGS,
                            icon: U.default,
                            action: () => (0, u.openModalLazy)(async () => {
                                let {
                                    default: e
                                } = await a.el("747593").then(a.bind(a, "747593"));
                                return a => (0, n.jsx)(e, {
                                    ...a,
                                    guildId: t.id
                                })
                            })
                        }), (0, n.jsx)(u.MenuItem, {
                            id: "privacy",
                            label: K.default.Messages.PRIVACY_SETTINGS,
                            icon: z.default,
                            action: () => (0, u.openModalLazy)(async () => {
                                let {
                                    default: e
                                } = await a.el("349406").then(a.bind(a, "349406"));
                                return a => (0, n.jsx)(e, {
                                    ...a,
                                    guild: t
                                })
                            })
                        })]
                    }), (0, n.jsxs)(u.MenuGroup, {
                        children: [eu, (0, n.jsx)(u.MenuCheckboxItem, {
                            id: "hide-muted-channels",
                            label: K.default.Messages.HIDE_MUTED_CHANNELS,
                            checked: J,
                            action: () => r.default.toggleCollapseGuild(t.id)
                        })]
                    }), (0, n.jsxs)(u.MenuGroup, {
                        children: [ep, et && t.isCommunity() ? (0, n.jsx)(u.MenuItem, {
                            id: "report-raid",
                            label: K.default.Messages.GUILD_REPORT_RAID_BUTTON_TITLE,
                            icon: B.default,
                            color: "danger",
                            action: () => (0, x.openReportRaidModal)(t.id)
                        }) : null, ea ? null : (0, n.jsx)(u.MenuItem, {
                            id: "leave",
                            label: K.default.Messages.LEAVE_SERVER,
                            icon: O.default,
                            color: "danger",
                            action: () => X(t, eI)
                        })]
                    })]
                })
            });
            var J = q