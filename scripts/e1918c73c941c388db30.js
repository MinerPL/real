(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["20833"], {
        126501: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return s
                }
            });
            var n = a("913144"),
                l = a("679428"),
                i = a("282109"),
                s = {
                    update(e) {
                        n.default.dispatch({
                            type: "CHANNEL_COLLAPSE",
                            channelId: e
                        })
                    },
                    toggleCollapseGuild(e) {
                        l.default.saveUserGuildSettings(e, {
                            hide_muted_channels: !i.default.isGuildCollapsed(e)
                        }), n.default.dispatch({
                            type: "GUILD_TOGGLE_COLLAPSE_MUTED",
                            guildId: e
                        })
                    }
                }
        },
        473528: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                GamingStatsPromptExperiment: function() {
                    return l
                }
            });
            var n = a("862205");
            let l = (0, n.createExperiment)({
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
        578411: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                GuildLeaveConfirmModalContents: function() {
                    return G
                }
            });
            var n = a("37983"),
                l = a("884691"),
                i = a("414456"),
                s = a.n(i),
                u = a("65597"),
                d = a("151426"),
                r = a("77078"),
                o = a("10641"),
                c = a("298878"),
                f = a("592407"),
                E = a("13162"),
                I = a("529932"),
                g = a("166465"),
                _ = a("267567"),
                M = a("412745"),
                m = a("393414"),
                p = a("476765"),
                S = a("216422"),
                N = a("599110"),
                h = a("49111"),
                A = a("365058"),
                C = a("782340"),
                T = a("866351");
            let G = e => {
                let {
                    guild: t,
                    discoverableGuildData: i
                } = e, G = t.id, {
                    isPremium: L,
                    collectEnabled: x,
                    hasReachedMaxPacksCollected: D
                } = (0, I.usePackCollectionData)({
                    expressionSourceGuild: i
                }), b = (0, p.useUID)(), R = (0, u.default)([g.default], () => null != g.default.getPackByPackId({
                    packId: t.id,
                    allowDuplicateGuildPack: !0
                })), O = x && !R, [v, U] = l.useState(!1), y = async () => {
                    let e = _.default.isLurking(G);
                    await f.default.leaveGuild(G), v && (N.default.track(h.AnalyticEvents.INVENTORY_PACK_ACTION_COMPLETED, {
                        type: M.EmojiPopoutType.ADD_PACK,
                        inventory_pack_id: G,
                        nonce: b
                    }), await (0, E.collectPack)({
                        packId: G
                    })), e ? (0, m.transitionTo)(h.Routes.GUILD_DISCOVERY) : !(0, o.isDismissibleContentDismissed)(d.DismissibleContent.GUILD_LEAVE_FEEDBACK) && (0, r.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await a.el("953750").then(a.bind(a, "953750"));
                        return a => (0, n.jsx)(e, {
                            ...a,
                            guildId: G,
                            guildName: t.name
                        })
                    })
                };
                return (0, n.jsxs)(r.ConfirmModal, {
                    className: s(T.confirmModal, {
                        [T.widthForAddPack]: O
                    }),
                    bodyClassName: s(T.confirmModalBody, {
                        [T.widthForAddPack]: O
                    }),
                    header: C.default.Messages.LEAVE_SERVER_TITLE.format({
                        name: t.name
                    }),
                    confirmText: t.hasFeature(h.GuildFeatures.HUB) ? C.default.Messages.LEAVE_HUB : C.default.Messages.LEAVE_SERVER,
                    cancelText: C.default.Messages.CANCEL,
                    onConfirm: y,
                    ...e,
                    children: [(0, n.jsx)(r.Text, {
                        variant: "text-md/normal",
                        children: t.hasFeature(h.GuildFeatures.HUB) ? C.default.Messages.LEAVE_HUB_BODY.format({
                            name: t.name
                        }) : C.default.Messages.LEAVE_SERVER_BODY.format({
                            name: t.name
                        })
                    }), O && (0, n.jsxs)("div", {
                        className: T.addPackSection,
                        children: [(0, n.jsxs)(r.FormSwitch, {
                            className: T.addPackHeader,
                            value: v,
                            disabled: D,
                            onChange: e => {
                                U(e)
                            },
                            hideBorder: !0,
                            children: [C.default.Messages.INVENTORY_ADD_PACK, " ", (0, n.jsx)(c.default, {
                                className: T.betaTag,
                                color: "white"
                            })]
                        }), (0, n.jsxs)(r.Text, {
                            variant: "text-sm/medium",
                            className: T.inventoryLeaveServerDescription,
                            children: [(0, n.jsx)(S.default, {
                                className: T.nitroWheel
                            }), C.default.Messages.INVENTORY_LEAVE_SERVER_DESCRIPTION]
                        }), D && !L && (0, n.jsx)(r.Text, {
                            variant: "text-sm/normal",
                            className: T.maxPacksNoticeText,
                            children: C.default.Messages.INVENTORY_ADD_NITRO_DESCRIPTION_WITH_PLURAL.format({
                                maxFreePacks: A.INVENTORY_MAX_FREE_PACKS,
                                maxPacks: A.INVENTORY_MAX_PACKS
                            })
                        })]
                    })]
                })
            }
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
            var l = a("917351"),
                i = a.n(l),
                s = a("446674"),
                u = a("77078"),
                d = a("689275"),
                r = a("300322"),
                o = a("109264"),
                c = a("782340");

            function f(e) {
                let t = (0, r.useIsThreadModerator)(e),
                    l = (0, s.useStateFromStores)([d.default], () => !i.isEmpty(d.default.getThreadsForGuild(e.id)));
                return t && l ? (0, n.jsx)(u.MenuItem, {
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
            var l = a("77078"),
                i = a("412707"),
                s = a("838093"),
                u = a("71216"),
                d = a("782340");

            function r(e) {
                return (0, n.jsx)(l.MenuItem, {
                    id: "application-directory",
                    label: (0, n.jsx)(n.Fragment, {
                        children: d.default.Messages.APP_DIRECTORY
                    }),
                    icon: u.default,
                    action: () => {
                        (0, s.goToAppDirectory)({
                            guildId: e.id,
                            entrypoint: {
                                name: i.ApplicationDirectoryEntrypointNames.GUILD_HEADER_POPOUT
                            }
                        })
                    }
                })
            }
        },
        230947: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return m
                }
            });
            var n = a("37983"),
                l = a("884691"),
                i = a("446674"),
                s = a("77078"),
                u = a("750560"),
                d = a("38766"),
                r = a("506885"),
                o = a("271938"),
                c = a("26989"),
                f = a("305961"),
                E = a("957255"),
                I = a("697218"),
                g = a("49111"),
                _ = a("782340"),
                M = a("460856");

            function m(e) {
                let {
                    guildId: t,
                    userId: m,
                    analyticsLocation: p,
                    analyticsLocations: S,
                    context: N,
                    icon: h
                } = e, A = f.default.getGuild(t), C = o.default.getId(), T = (0, i.useStateFromStores)([I.default], () => I.default.getUser(m)), G = (0, i.useStateFromStores)([c.default], () => c.default.isGuestOrLurker(t, m), [t, m]);
                (0, i.useStateFromStores)([E.default], () => E.default.getGuildVersion(t), [t]);
                let L = l.useMemo(() => ({
                    [t]: [m]
                }), [t, m]);
                (0, u.useSubscribeGuildMembers)(L);
                let x = N === g.AppContext.POPOUT,
                    D = (0, d.default)({
                        guild: A,
                        analyticsLocation: p
                    });
                if (null == A || x) return null;
                let b = C === m && (E.default.can(g.Permissions.CHANGE_NICKNAME, A) || E.default.can(g.Permissions.MANAGE_NICKNAMES, A)),
                    R = C === m,
                    O = E.default.canManageUser(g.Permissions.MANAGE_NICKNAMES, m, A);
                if (!(b || O || R) || null == T || G) return null;
                let v = A.hasFeature(g.GuildFeatures.HUB),
                    U = v ? _.default.Messages.HUB_EDIT_PROFILE : _.default.Messages.CHANGE_IDENTITY,
                    y = R ? U : _.default.Messages.CHANGE_NICKNAME;
                return (0, n.jsx)(s.MenuItem, {
                    id: "change-nickname",
                    label: (0, n.jsx)("div", {
                        className: M.labelWrapper,
                        children: (0, n.jsx)("span", {
                            className: M.label,
                            children: y
                        })
                    }),
                    icon: h,
                    action: () => {
                        R ? ((0, r.default)(T.id, T.getAvatarURL(t, 80), {
                            guildId: t
                        }), D()) : (0, s.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await a.el("59709").then(a.bind(a, "59709"));
                            return a => (0, n.jsx)(e, {
                                ...a,
                                guildId: t,
                                user: T,
                                analyticsSource: p,
                                analyticsLocations: S
                            })
                        })
                    }
                })
            }
        },
        747867: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return f
                }
            });
            var n = a("37983"),
                l = a("884691"),
                i = a("77078"),
                s = a("398654"),
                u = a("712125"),
                d = a("311161"),
                r = a("45029"),
                o = a("372624"),
                c = a("782340");

            function f(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    {
                        shouldShowIncidentActions: f,
                        isUnderLockdown: E,
                        incidentData: I
                    } = (0, s.useGuildIncidentsState)(e.id),
                    g = l.useCallback(() => {
                        let t = {
                            source: u.GuildIncidentActionSources.CONTEXT_MENU,
                            alertType: (0, d.getIncidentAlertType)(I)
                        };
                        (0, i.openModalLazy)(async () => {
                            let {
                                default: l
                            } = await a.el("186638").then(a.bind(a, "186638"));
                            return a => (0, n.jsx)(l, {
                                ...a,
                                guildId: e.id,
                                analyticsData: t
                            })
                        })
                    }, [e.id, I]);
                return e.isCommunity() && f ? (0, n.jsx)(i.MenuItem, {
                    id: "server-lockdown",
                    label: E ? c.default.Messages.GUILD_SERVER_LOCKDOWN_CONTEXT_MENU_UNLOCK : c.default.Messages.GUILD_SERVER_LOCKDOWN_CONTEXT_MENU_LOCK,
                    icon: t ? E ? o.default : r.default : void 0,
                    action: g,
                    color: "danger"
                }) : null
            }
        },
        58622: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return f
                }
            });
            var n = a("37983");
            a("884691");
            var l = a("446674"),
                i = a("77078"),
                s = a("242757"),
                u = a("923959"),
                d = a("957255"),
                r = a("76539"),
                o = a("49111"),
                c = a("782340");

            function f(e) {
                let {
                    source: t,
                    guild: a,
                    channel: n,
                    stageInstance: i
                } = e, r = (0, l.useStateFromStores)([u.default, d.default], () => {
                    var e;
                    let t = u.default.getChannels(a.id);
                    return null === (e = t[0, u.GUILD_SELECTABLE_CHANNELS_KEY].find(e => d.default.can(o.Permissions.CREATE_INSTANT_INVITE, e.channel))) || void 0 === e ? void 0 : e.channel
                }), c = (0, l.useStateFromStores)([d.default], () => (0, s.canViewInviteModal)(d.default, a, n, i)), f = E(t, a, c && null != n ? n : r), g = I(t);
                return null == n && t === o.InstantInviteSources.GUILD_CONTEXT_MENU ? null : c || null != r ? f : g
            }
            let E = (e, t, l) => (0, n.jsx)(i.MenuItem, {
                    id: "invite-people",
                    label: c.default.Messages.INVITE_PEOPLE,
                    color: "brand",
                    icon: e === o.InstantInviteSources.GUILD_HEADER ? r.default : void 0,
                    action: () => (0, i.openModalLazy)(async () => {
                        let {
                            default: i
                        } = await a.el("310688").then(a.bind(a, "310688"));
                        return a => (0, n.jsx)(i, {
                            ...a,
                            guild: t,
                            channel: l,
                            source: e
                        })
                    })
                }),
                I = e => (0, n.jsx)(i.MenuItem, {
                    id: "invite-people",
                    label: c.default.Messages.INVITE_PEOPLE,
                    color: "brand",
                    icon: e === o.InstantInviteSources.GUILD_HEADER ? r.default : void 0,
                    action: () => (0, i.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await a.el("973132").then(a.bind(a, "973132"));
                        return t => (0, n.jsx)(e, {
                            ...t
                        })
                    })
                })
        },
        255812: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return r
                }
            });
            var n = a("37983");
            a("884691");
            var l = a("77078"),
                i = a("70025"),
                s = a("334683"),
                u = a("842672"),
                d = a("782340");

            function r(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    r = (0, s.default)(e),
                    o = (0, u.default)();
                return r ? (0, n.jsx)(l.MenuItem, {
                    id: "create-event",
                    label: d.default.Messages.SCHEDULE_EVENT,
                    icon: t ? i.default : void 0,
                    action: () => {
                        (0, l.openModalLazy)(async () => {
                            let {
                                default: t
                            } = await a.el("590942").then(a.bind(a, "590942"));
                            return a => (0, n.jsx)(t, {
                                ...a,
                                guildId: e
                            })
                        }, o)
                    }
                }) : null
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
                l = a("884691"),
                i = a("414456"),
                s = a.n(i),
                u = a("627445"),
                d = a.n(u),
                r = a("446674"),
                o = a("77078"),
                c = a("126501"),
                f = a("388142"),
                E = a("473528"),
                I = a("578899"),
                g = a("685058"),
                _ = a("578411"),
                M = a("383292"),
                m = a("163139"),
                p = a("230947"),
                S = a("747867"),
                N = a("58622"),
                h = a("413266"),
                A = a("701203"),
                C = a("95039"),
                T = a("255812"),
                G = a("199938"),
                L = a("592407"),
                x = a("529932"),
                D = a("267567"),
                b = a("724026"),
                R = a("921228"),
                O = a("393414"),
                v = a("26989"),
                U = a("957255"),
                y = a("282109"),
                j = a("697218"),
                P = a("756609"),
                V = a("660279"),
                F = a("171710"),
                H = a("446352"),
                k = a("919765"),
                w = a("474571"),
                B = a("118503"),
                Y = a("987772"),
                K = a("351825"),
                z = a("561359"),
                W = a("148337"),
                X = a("599110"),
                q = a("49111"),
                J = a("695838"),
                Q = a("782340"),
                Z = a("480260");

            function $(e, t) {
                (0, o.openModal)(a => (0, n.jsx)(_.GuildLeaveConfirmModalContents, {
                    ...a,
                    guild: e,
                    discoverableGuildData: t
                }))
            }
            let ee = l.memo(function(e) {
                let {
                    guild: t,
                    onClose: i,
                    onSelect: u
                } = e, _ = (0, r.useStateFromStores)([j.default], () => j.default.getCurrentUser());
                d(null != _, "GuildHeaderPopout: user cannot be undefined"), l.useEffect(() => {
                    X.default.track(q.AnalyticEvents.GUILD_DROPDOWN_MENU_VIEWED, {
                        guild_id: t.id
                    })
                });
                let ee = (0, r.useStateFromStores)([y.default], () => y.default.isGuildCollapsed(t.id), [t.id]),
                    {
                        canAccessSettings: et,
                        canManageChannels: ea,
                        showGuildAnalytics: en
                    } = (0, r.useStateFromStoresObject)([U.default], () => {
                        let e = U.default.can(q.Permissions.VIEW_GUILD_ANALYTICS, t) && t.hasFeature(q.GuildFeatures.COMMUNITY);
                        return {
                            canAccessSettings: U.default.canAccessGuildSettings(t),
                            canManageChannels: U.default.can(q.Permissions.MANAGE_CHANNELS, t),
                            showGuildAnalytics: (0, G.staffOnlyGuildSettingsAccess)(t.id) || e
                        }
                    }, [t]),
                    el = (0, A.useCanReportRaid)(t),
                    ei = t.isOwner(_),
                    es = (0, r.useStateFromStores)([D.default], () => D.default.isLurking(t.id), [t.id]),
                    eu = (0, r.useStateFromStores)([v.default], () => v.default.isCurrentUserGuest(t.id)),
                    ed = (0, T.default)(t.id, !0),
                    er = (0, g.default)(t),
                    eo = (0, N.default)({
                        source: q.InstantInviteSources.GUILD_HEADER,
                        guild: t
                    }),
                    ec = (0, p.default)({
                        guildId: t.id,
                        userId: _.id,
                        analyticsLocation: {
                            page: q.AnalyticsPages.GUILD_CHANNEL,
                            section: q.AnalyticsSections.GUILD_DROPDOWN_MENU
                        },
                        icon: Y.default
                    }),
                    ef = t.hasFeature(q.GuildFeatures.HUB),
                    eE = t.id === J.FAVORITES_RAW_GUILD_ID,
                    eI = (0, b.default)(t.id),
                    eg = (0, M.default)(t),
                    e_ = (0, m.default)(t),
                    eM = (0, R.useIsPremiumTutorialEnabled)("GuildHeaderPopout"),
                    em = (0, S.default)(t, !0),
                    {
                        triggerDeadchat: ep
                    } = I.SimpleDeadchatPromptExperiment.useExperiment({
                        guildId: t.id,
                        location: "guild header"
                    }, {
                        autoTrackExposure: !1
                    }),
                    {
                        triggerGamingStats: eS
                    } = E.GamingStatsPromptExperiment.useExperiment({
                        guildId: t.id,
                        location: "guild header"
                    }, {
                        autoTrackExposure: !1
                    }),
                    eN = (0, x.useExpressionSourceGuildDataForGuildLeaveModal)(t);
                return es || eu ? (0, n.jsx)(o.Menu, {
                    onSelect: u,
                    navId: "guild-header-popout",
                    variant: "fixed",
                    onClose: i,
                    "aria-label": Q.default.Messages.GUILD_ACTIONS_MENU_LABEL,
                    children: (0, n.jsx)(o.MenuItem, {
                        id: "leave-guild",
                        label: Q.default.Messages.LEAVE_SERVER,
                        icon: H.default,
                        action: () => {
                            L.default.leaveGuild(t.id), !eu && (0, O.transitionTo)(q.Routes.GUILD_DISCOVERY)
                        }
                    })
                }) : eE ? (0, n.jsxs)(o.Menu, {
                    onSelect: u,
                    navId: "favorites-header-popout",
                    variant: "fixed",
                    onClose: i,
                    "aria-label": Q.default.Messages.GUILD_ACTIONS_MENU_LABEL,
                    children: [(0, n.jsx)(o.MenuGroup, {
                        children: (0, n.jsx)(o.MenuItem, {
                            id: "create-category",
                            label: Q.default.Messages.CREATE_CATEGORY,
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
                            label: Q.default.Messages.HIDE_MUTED_CHANNELS,
                            checked: ee,
                            action: () => c.default.toggleCollapseGuild(t.id)
                        })
                    })]
                }) : ef ? (0, n.jsxs)(o.Menu, {
                    onSelect: u,
                    navId: "guild-header-popout",
                    variant: "fixed",
                    onClose: i,
                    "aria-label": Q.default.Messages.GUILD_ACTIONS_MENU_LABEL,
                    children: [(0, n.jsxs)(o.MenuGroup, {
                        children: [et ? (0, n.jsx)(o.MenuItem, {
                            id: "settings",
                            label: Q.default.Messages.SERVER_SETTINGS,
                            icon: w.default,
                            action: () => {
                                L.default.open(t.id, q.GuildSettingsSections.OVERVIEW)
                            }
                        }) : null, eo, (0, n.jsx)(o.MenuItem, {
                            id: "privacy",
                            label: Q.default.Messages.PRIVACY_SETTINGS,
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
                    }), ei ? null : (0, n.jsx)(o.MenuGroup, {
                        children: (0, n.jsx)(o.MenuItem, {
                            id: "leave",
                            label: Q.default.Messages.LEAVE_HUB,
                            icon: H.default,
                            color: "danger",
                            action: () => $(t, eN)
                        })
                    })]
                }) : (0, n.jsxs)(o.Menu, {
                    onSelect: u,
                    navId: "guild-header-popout",
                    variant: "fixed",
                    onClose: i,
                    "aria-label": Q.default.Messages.GUILD_ACTIONS_MENU_LABEL,
                    children: [(0, n.jsx)(o.MenuGroup, {
                        children: (0, n.jsx)(o.MenuItem, {
                            id: "premium-subscribe",
                            label: Q.default.Messages.PREMIUM_GUILD_HEADER_DROPDOWN_NITRO_SERVER_SUBSCRIBE,
                            icon: B.default,
                            action: () => {
                                (0, C.openGuildBoostingMarketingModal)({
                                    guildId: t.id,
                                    location: {
                                        section: q.AnalyticsSections.GUILD_HEADER_POPOUT
                                    }
                                })
                            },
                            className: s({
                                [Z.boostingMenuItemHighlight]: eM
                            })
                        })
                    }), (0, n.jsxs)(o.MenuGroup, {
                        children: [ei && _.isStaff() && ep ? (0, n.jsx)(o.MenuItem, {
                            id: "create-deadchat",
                            label: "Deadchat Ping",
                            icon: F.default,
                            action: () => {
                                (0, f.forcePrompt)(t.id, q.MessageTypes.GUILD_DEADCHAT_REVIVE_PROMPT)
                            }
                        }) : null, ei && _.isStaff() && eS ? (0, n.jsx)(o.MenuItem, {
                            id: "create-gaming-ping",
                            label: "Gaming Stats Ping",
                            icon: F.default,
                            action: () => {
                                (0, f.forcePrompt)(t.id, q.MessageTypes.GUILD_GAMING_STATS_PROMPT)
                            }
                        }) : null, eo, et ? (0, n.jsx)(o.MenuItem, {
                            id: "settings",
                            label: Q.default.Messages.SERVER_SETTINGS,
                            icon: w.default,
                            action: () => {
                                L.default.open(t.id, q.GuildSettingsSections.OVERVIEW)
                            }
                        }) : null, en ? (0, n.jsx)(o.MenuItem, {
                            id: "insights",
                            label: Q.default.Messages.SERVER_INSIGHTS,
                            icon: P.default,
                            action: () => L.default.open(t.id, q.GuildSettingsSections.ANALYTICS)
                        }) : null, ea ? (0, n.jsxs)(n.Fragment, {
                            children: [(0, n.jsx)(o.MenuItem, {
                                id: "create-channel",
                                label: Q.default.Messages.CREATE_CHANNEL,
                                icon: K.default,
                                action: () => (0, o.openModalLazy)(async () => {
                                    let {
                                        default: e
                                    } = await a.el("581354").then(a.bind(a, "581354"));
                                    return a => (0, n.jsx)(e, {
                                        ...a,
                                        channelType: q.ChannelTypes.GUILD_TEXT,
                                        guildId: t.id
                                    })
                                })
                            }), (0, n.jsx)(o.MenuItem, {
                                id: "create-category",
                                label: Q.default.Messages.CREATE_CATEGORY,
                                icon: k.default,
                                action: () => (0, o.openModalLazy)(async () => {
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
                        }) : null, ed, eg, e_, er]
                    }), (0, n.jsxs)(o.MenuGroup, {
                        children: [eI, (0, n.jsx)(o.MenuItem, {
                            id: "notifications",
                            label: Q.default.Messages.NOTIFICATION_SETTINGS,
                            icon: V.default,
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
                            label: Q.default.Messages.PRIVACY_SETTINGS,
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
                            label: Q.default.Messages.HIDE_MUTED_CHANNELS,
                            checked: ee,
                            action: () => c.default.toggleCollapseGuild(t.id)
                        })]
                    }), (0, n.jsxs)(o.MenuGroup, {
                        children: [em, el && t.isCommunity() ? (0, n.jsx)(o.MenuItem, {
                            id: "report-raid",
                            label: Q.default.Messages.GUILD_REPORT_RAID_BUTTON_TITLE,
                            icon: z.default,
                            color: "danger",
                            action: () => (0, h.openReportRaidModal)(t.id)
                        }) : null, ei ? null : (0, n.jsx)(o.MenuItem, {
                            id: "leave",
                            label: Q.default.Messages.LEAVE_SERVER,
                            icon: H.default,
                            color: "danger",
                            action: () => $(t, eN)
                        })]
                    })]
                })
            });
            var et = ee
        },
        986003: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                hasNotSetUpChannelOptIn: function() {
                    return c
                },
                toggleShowAllChannels: function() {
                    return f
                },
                optIntoAllChannelsForExistingMember: function() {
                    return E
                }
            }), a("151426");
            var n = a("921031");
            a("374363");
            var l = a("923959"),
                i = a("26989"),
                s = a("282109"),
                u = a("568734"),
                d = a("629220"),
                r = a("512395"),
                o = a("657944");

            function c(e) {
                var t, a;
                let n = (0, r.isOptInEnabledForGuild)(e),
                    l = null !== (a = null === (t = i.default.getSelfMember(e)) || void 0 === t ? void 0 : t.flags) && void 0 !== a ? a : 0,
                    d = (0, u.hasFlag)(l, o.GuildMemberFlags.COMPLETED_ONBOARDING),
                    c = s.default.getOptedInChannels(e).size > 0;
                return !n && !d && !c
            }

            function f(e) {
                if (c(e)) {
                    E(e);
                    return
                } {
                    let t = (0, r.isOptInEnabledForGuild)(e);
                    (0, d.setGuildOptIn)(e, !t)
                }
            }

            function E(e) {
                let {
                    include: t = new Set,
                    exclude: a = new Set
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, i = l.default.getChannels(e), s = [...i[0, l.GUILD_SELECTABLE_CHANNELS_KEY], ...i[0, l.GUILD_VOCAL_CHANNELS_KEY]].filter(e => {
                    let {
                        channel: t
                    } = e;
                    return !t.isThread() && !a.has(t.id)
                }).map(e => {
                    let {
                        channel: t
                    } = e;
                    return t.id
                });
                t.forEach(e => s.push(e)), n.default.onboardExistingMember(e, new Set(s))
            }
        },
        724026: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return f
                }
            });
            var n = a("37983");
            a("884691");
            var l = a("446674"),
                i = a("77078"),
                s = a("305961"),
                u = a("697218"),
                d = a("986003"),
                r = a("512395"),
                o = a("49111"),
                c = a("782340");

            function f(e) {
                let t = (0, r.useOptInEnabledForGuild)(e),
                    a = (0, l.useStateFromStores)([s.default], () => s.default.getGuild(e)),
                    f = (0, l.useStateFromStores)([u.default], () => u.default.getCurrentUser());
                return null != f && null != a && (a.hasFeature(o.GuildFeatures.COMMUNITY) || f.isStaff()) ? (0, n.jsx)(i.MenuCheckboxItem, {
                    id: "opt-in",
                    label: c.default.Messages.GUILD_CHANNEL_OPT_IN,
                    checked: !t,
                    action: () => {
                        (0, d.toggleShowAllChannels)(e)
                    }
                }) : null
            }
        }
    }
]);