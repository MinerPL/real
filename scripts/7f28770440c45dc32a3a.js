(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["20833"], {
        126501: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return i
                }
            });
            var l = a("913144"),
                n = a("679428"),
                s = a("282109"),
                i = {
                    update(e) {
                        l.default.dispatch({
                            type: "CHANNEL_COLLAPSE",
                            channelId: e
                        })
                    },
                    toggleCollapseGuild(e) {
                        n.default.saveUserGuildSettings(e, {
                            hide_muted_channels: !s.default.isGuildCollapsed(e)
                        }), l.default.dispatch({
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
                    return n
                }
            });
            var l = a("862205");
            let n = (0, l.createExperiment)({
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
                    return L
                }
            });
            var l = a("37983"),
                n = a("884691"),
                s = a("414456"),
                i = a.n(s),
                d = a("65597"),
                u = a("151426"),
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
                T = a("599110"),
                N = a("49111"),
                A = a("365058"),
                G = a("782340"),
                C = a("866351");
            let L = e => {
                let {
                    guild: t,
                    discoverableGuildData: s
                } = e, L = t.id, {
                    isPremium: h,
                    collectEnabled: x,
                    hasReachedMaxPacksCollected: D
                } = (0, I.usePackCollectionData)({
                    expressionSourceGuild: s
                }), R = (0, p.useUID)(), b = (0, d.default)([g.default], () => null != g.default.getPackByPackId({
                    packId: t.id,
                    allowDuplicateGuildPack: !0
                })), v = x && !b, [y, O] = n.useState(!1), U = async () => {
                    let e = _.default.isLurking(L);
                    await f.default.leaveGuild(L), y && (T.default.track(N.AnalyticEvents.INVENTORY_PACK_ACTION_COMPLETED, {
                        type: M.EmojiPopoutType.ADD_PACK,
                        inventory_pack_id: L,
                        nonce: R
                    }), await (0, E.collectPack)({
                        packId: L
                    })), e ? (0, m.transitionTo)(N.Routes.GUILD_DISCOVERY) : !(0, o.isDismissibleContentDismissed)(u.DismissibleContent.GUILD_LEAVE_FEEDBACK) && (0, r.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await a.el("953750").then(a.bind(a, "953750"));
                        return a => (0, l.jsx)(e, {
                            ...a,
                            guildId: L,
                            guildName: t.name
                        })
                    })
                };
                return (0, l.jsxs)(r.ConfirmModal, {
                    className: i(C.confirmModal, {
                        [C.widthForAddPack]: v
                    }),
                    bodyClassName: i(C.confirmModalBody, {
                        [C.widthForAddPack]: v
                    }),
                    header: G.default.Messages.LEAVE_SERVER_TITLE.format({
                        name: t.name
                    }),
                    confirmText: t.hasFeature(N.GuildFeatures.HUB) ? G.default.Messages.LEAVE_HUB : G.default.Messages.LEAVE_SERVER,
                    cancelText: G.default.Messages.CANCEL,
                    onConfirm: U,
                    ...e,
                    children: [(0, l.jsx)(r.Text, {
                        variant: "text-md/normal",
                        children: t.hasFeature(N.GuildFeatures.HUB) ? G.default.Messages.LEAVE_HUB_BODY.format({
                            name: t.name
                        }) : G.default.Messages.LEAVE_SERVER_BODY.format({
                            name: t.name
                        })
                    }), v && (0, l.jsxs)("div", {
                        className: C.addPackSection,
                        children: [(0, l.jsxs)(r.FormSwitch, {
                            className: C.addPackHeader,
                            value: y,
                            disabled: D,
                            onChange: e => {
                                O(e)
                            },
                            hideBorder: !0,
                            children: [G.default.Messages.INVENTORY_ADD_PACK, " ", (0, l.jsx)(c.default, {
                                className: C.betaTag,
                                color: "white"
                            })]
                        }), (0, l.jsxs)(r.Text, {
                            variant: "text-sm/medium",
                            className: C.inventoryLeaveServerDescription,
                            children: [(0, l.jsx)(S.default, {
                                className: C.nitroWheel
                            }), G.default.Messages.INVENTORY_LEAVE_SERVER_DESCRIPTION]
                        }), D && !h && (0, l.jsx)(r.Text, {
                            variant: "text-sm/normal",
                            className: C.maxPacksNoticeText,
                            children: G.default.Messages.INVENTORY_ADD_NITRO_DESCRIPTION_WITH_PLURAL.format({
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
            var l = a("37983");
            a("884691");
            var n = a("917351"),
                s = a.n(n),
                i = a("446674"),
                d = a("77078"),
                u = a("689275"),
                r = a("300322"),
                o = a("109264"),
                c = a("782340");

            function f(e) {
                let t = (0, r.useIsThreadModerator)(e),
                    n = (0, i.useStateFromStores)([u.default], () => !s.isEmpty(u.default.getThreadsForGuild(e.id)));
                return t && n ? (0, l.jsx)(d.MenuItem, {
                    id: "active-threads",
                    label: c.default.Messages.ACTIVE_THREADS,
                    icon: o.default,
                    action: () => {
                        (0, d.openModalLazy)(async () => {
                            let {
                                default: t
                            } = await a.el("469755").then(a.bind(a, "469755"));
                            return a => (0, l.jsx)(t, {
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
            var l = a("37983");
            a("884691");
            var n = a("77078"),
                s = a("412707"),
                i = a("838093"),
                d = a("71216"),
                u = a("782340");

            function r(e) {
                return (0, l.jsx)(n.MenuItem, {
                    id: "application-directory",
                    label: (0, l.jsx)(l.Fragment, {
                        children: u.default.Messages.APP_DIRECTORY
                    }),
                    icon: d.default,
                    action: () => {
                        (0, i.goToAppDirectory)({
                            guildId: e.id,
                            entrypoint: {
                                name: s.ApplicationDirectoryEntrypointNames.GUILD_HEADER_POPOUT
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
            var l = a("37983"),
                n = a("884691"),
                s = a("446674"),
                i = a("77078"),
                d = a("750560"),
                u = a("38766"),
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
                    context: T,
                    icon: N
                } = e, A = f.default.getGuild(t), G = o.default.getId(), C = (0, s.useStateFromStores)([I.default], () => I.default.getUser(m)), L = (0, s.useStateFromStores)([c.default], () => c.default.isGuestOrLurker(t, m), [t, m]);
                (0, s.useStateFromStores)([E.default], () => E.default.getGuildVersion(t), [t]);
                let h = n.useMemo(() => ({
                    [t]: [m]
                }), [t, m]);
                (0, d.useSubscribeGuildMembers)(h);
                let x = T === g.AppContext.POPOUT,
                    D = (0, u.default)({
                        guild: A,
                        analyticsLocation: p
                    });
                if (null == A || x) return null;
                let R = G === m && (E.default.can(g.Permissions.CHANGE_NICKNAME, A) || E.default.can(g.Permissions.MANAGE_NICKNAMES, A)),
                    b = G === m,
                    v = E.default.canManageUser(g.Permissions.MANAGE_NICKNAMES, m, A);
                if (!(R || v || b) || null == C || L) return null;
                let y = A.hasFeature(g.GuildFeatures.HUB),
                    O = y ? _.default.Messages.HUB_EDIT_PROFILE : _.default.Messages.CHANGE_IDENTITY,
                    U = b ? O : _.default.Messages.CHANGE_NICKNAME;
                return (0, l.jsx)(i.MenuItem, {
                    id: "change-nickname",
                    label: (0, l.jsx)("div", {
                        className: M.labelWrapper,
                        children: (0, l.jsx)("span", {
                            className: M.label,
                            children: U
                        })
                    }),
                    icon: N,
                    action: () => {
                        b ? ((0, r.default)(C.id, C.getAvatarURL(t, 80), {
                            guildId: t
                        }), D()) : (0, i.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await a.el("59709").then(a.bind(a, "59709"));
                            return a => (0, l.jsx)(e, {
                                ...a,
                                guildId: t,
                                user: C,
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
            var l = a("37983"),
                n = a("884691"),
                s = a("77078"),
                i = a("398654"),
                d = a("712125"),
                u = a("311161"),
                r = a("45029"),
                o = a("372624"),
                c = a("782340");

            function f(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    {
                        shouldShowIncidentActions: f,
                        isUnderLockdown: E,
                        incidentData: I
                    } = (0, i.useGuildIncidentsState)(e.id),
                    g = n.useCallback(() => {
                        let t = {
                            source: d.GuildIncidentActionSources.CONTEXT_MENU,
                            alertType: (0, u.getIncidentAlertType)(I)
                        };
                        (0, s.openModalLazy)(async () => {
                            let {
                                default: n
                            } = await a.el("186638").then(a.bind(a, "186638"));
                            return a => (0, l.jsx)(n, {
                                ...a,
                                guildId: e.id,
                                analyticsData: t
                            })
                        })
                    }, [e.id, I]);
                return e.isCommunity() && f ? (0, l.jsx)(s.MenuItem, {
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
            var l = a("37983");
            a("884691");
            var n = a("446674"),
                s = a("77078"),
                i = a("242757"),
                d = a("923959"),
                u = a("957255"),
                r = a("76539"),
                o = a("49111"),
                c = a("782340");

            function f(e) {
                let {
                    source: t,
                    guild: a,
                    channel: l,
                    stageInstance: s
                } = e, r = (0, n.useStateFromStores)([d.default, u.default], () => {
                    var e;
                    let t = d.default.getChannels(a.id);
                    return null === (e = t[0, d.GUILD_SELECTABLE_CHANNELS_KEY].find(e => u.default.can(o.Permissions.CREATE_INSTANT_INVITE, e.channel))) || void 0 === e ? void 0 : e.channel
                }), c = (0, n.useStateFromStores)([u.default], () => (0, i.canViewInviteModal)(u.default, a, l, s)), f = E(t, a, c && null != l ? l : r), g = I(t);
                return null == l && t === o.InstantInviteSources.GUILD_CONTEXT_MENU ? null : c || null != r ? f : g
            }
            let E = (e, t, n) => (0, l.jsx)(s.MenuItem, {
                    id: "invite-people",
                    label: c.default.Messages.INVITE_PEOPLE,
                    color: "brand",
                    icon: e === o.InstantInviteSources.GUILD_HEADER ? r.default : void 0,
                    action: () => (0, s.openModalLazy)(async () => {
                        let {
                            default: s
                        } = await a.el("310688").then(a.bind(a, "310688"));
                        return a => (0, l.jsx)(s, {
                            ...a,
                            guild: t,
                            channel: n,
                            source: e
                        })
                    })
                }),
                I = e => (0, l.jsx)(s.MenuItem, {
                    id: "invite-people",
                    label: c.default.Messages.INVITE_PEOPLE,
                    color: "brand",
                    icon: e === o.InstantInviteSources.GUILD_HEADER ? r.default : void 0,
                    action: () => (0, s.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await a.el("973132").then(a.bind(a, "973132"));
                        return t => (0, l.jsx)(e, {
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
            var l = a("37983");
            a("884691");
            var n = a("77078"),
                s = a("70025"),
                i = a("334683"),
                d = a("842672"),
                u = a("782340");

            function r(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    r = (0, i.default)(e),
                    o = (0, d.default)();
                return r ? (0, l.jsx)(n.MenuItem, {
                    id: "create-event",
                    label: u.default.Messages.SCHEDULE_EVENT,
                    icon: t ? s.default : void 0,
                    action: () => {
                        (0, n.openModalLazy)(async () => {
                            let {
                                default: t
                            } = await a.el("590942").then(a.bind(a, "590942"));
                            return a => (0, l.jsx)(t, {
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
            var l = a("37983"),
                n = a("884691"),
                s = a("414456"),
                i = a.n(s),
                d = a("627445"),
                u = a.n(d),
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
                T = a("58622"),
                N = a("413266"),
                A = a("701203"),
                G = a("95039"),
                C = a("255812"),
                L = a("199938"),
                h = a("592407"),
                x = a("529932"),
                D = a("267567"),
                R = a("724026"),
                b = a("921228"),
                v = a("393414"),
                y = a("26989"),
                O = a("957255"),
                U = a("282109"),
                j = a("697218"),
                P = a("756609"),
                V = a("660279"),
                F = a("171710"),
                k = a("446352"),
                H = a("919765"),
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
                (0, o.openModal)(a => (0, l.jsx)(_.GuildLeaveConfirmModalContents, {
                    ...a,
                    guild: e,
                    discoverableGuildData: t
                }))
            }
            let ee = n.memo(function(e) {
                let {
                    guild: t,
                    onClose: s,
                    onSelect: d
                } = e, _ = (0, r.useStateFromStores)([j.default], () => j.default.getCurrentUser());
                u(null != _, "GuildHeaderPopout: user cannot be undefined"), n.useEffect(() => {
                    X.default.track(q.AnalyticEvents.GUILD_DROPDOWN_MENU_VIEWED, {
                        guild_id: t.id
                    })
                });
                let ee = (0, r.useStateFromStores)([U.default], () => U.default.isGuildCollapsed(t.id), [t.id]),
                    {
                        canAccessSettings: et,
                        canManageChannels: ea,
                        showGuildAnalytics: el
                    } = (0, r.useStateFromStoresObject)([O.default], () => {
                        let e = O.default.can(q.Permissions.VIEW_GUILD_ANALYTICS, t) && t.hasFeature(q.GuildFeatures.COMMUNITY);
                        return {
                            canAccessSettings: O.default.canAccessGuildSettings(t),
                            canManageChannels: O.default.can(q.Permissions.MANAGE_CHANNELS, t),
                            showGuildAnalytics: (0, L.staffOnlyGuildSettingsAccess)(t.id) || e
                        }
                    }, [t]),
                    en = (0, A.useCanReportRaid)(t),
                    es = t.isOwner(_),
                    ei = (0, r.useStateFromStores)([D.default], () => D.default.isLurking(t.id), [t.id]),
                    ed = (0, r.useStateFromStores)([y.default], () => y.default.isCurrentUserGuest(t.id)),
                    eu = (0, C.default)(t.id, !0),
                    er = (0, g.default)(t),
                    eo = (0, T.default)({
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
                    eI = (0, R.default)(t.id),
                    eg = (0, M.default)(t),
                    e_ = (0, m.default)(t),
                    eM = (0, b.useIsPremiumTutorialEnabled)("GuildHeaderPopout"),
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
                    eT = (0, x.useExpressionSourceGuildDataForGuildLeaveModal)(t);
                return ei || ed ? (0, l.jsx)(o.Menu, {
                    onSelect: d,
                    navId: "guild-header-popout",
                    variant: "fixed",
                    onClose: s,
                    "aria-label": Q.default.Messages.GUILD_ACTIONS_MENU_LABEL,
                    children: (0, l.jsx)(o.MenuItem, {
                        id: "leave-guild",
                        label: Q.default.Messages.LEAVE_SERVER,
                        icon: k.default,
                        action: () => {
                            h.default.leaveGuild(t.id), !ed && (0, v.transitionTo)(q.Routes.GUILD_DISCOVERY)
                        }
                    })
                }) : eE ? (0, l.jsxs)(o.Menu, {
                    onSelect: d,
                    navId: "favorites-header-popout",
                    variant: "fixed",
                    onClose: s,
                    "aria-label": Q.default.Messages.GUILD_ACTIONS_MENU_LABEL,
                    children: [(0, l.jsx)(o.MenuGroup, {
                        children: (0, l.jsx)(o.MenuItem, {
                            id: "create-category",
                            label: Q.default.Messages.CREATE_CATEGORY,
                            icon: H.default,
                            action: () => (0, o.openModalLazy)(async () => {
                                let {
                                    default: e
                                } = await a.el("515680").then(a.bind(a, "515680"));
                                return t => (0, l.jsx)(e, {
                                    ...t
                                })
                            })
                        })
                    }), (0, l.jsx)(o.MenuGroup, {
                        children: (0, l.jsx)(o.MenuCheckboxItem, {
                            id: "hide-muted-channels",
                            label: Q.default.Messages.HIDE_MUTED_CHANNELS,
                            checked: ee,
                            action: () => c.default.toggleCollapseGuild(t.id)
                        })
                    })]
                }) : ef ? (0, l.jsxs)(o.Menu, {
                    onSelect: d,
                    navId: "guild-header-popout",
                    variant: "fixed",
                    onClose: s,
                    "aria-label": Q.default.Messages.GUILD_ACTIONS_MENU_LABEL,
                    children: [(0, l.jsxs)(o.MenuGroup, {
                        children: [et ? (0, l.jsx)(o.MenuItem, {
                            id: "settings",
                            label: Q.default.Messages.SERVER_SETTINGS,
                            icon: w.default,
                            action: () => {
                                h.default.open(t.id, q.GuildSettingsSections.OVERVIEW)
                            }
                        }) : null, eo, (0, l.jsx)(o.MenuItem, {
                            id: "privacy",
                            label: Q.default.Messages.PRIVACY_SETTINGS,
                            icon: W.default,
                            action: () => (0, o.openModalLazy)(async () => {
                                let {
                                    default: e
                                } = await a.el("349406").then(a.bind(a, "349406"));
                                return a => (0, l.jsx)(e, {
                                    ...a,
                                    guild: t
                                })
                            })
                        }), ec]
                    }), es ? null : (0, l.jsx)(o.MenuGroup, {
                        children: (0, l.jsx)(o.MenuItem, {
                            id: "leave",
                            label: Q.default.Messages.LEAVE_HUB,
                            icon: k.default,
                            color: "danger",
                            action: () => $(t, eT)
                        })
                    })]
                }) : (0, l.jsxs)(o.Menu, {
                    onSelect: d,
                    navId: "guild-header-popout",
                    variant: "fixed",
                    onClose: s,
                    "aria-label": Q.default.Messages.GUILD_ACTIONS_MENU_LABEL,
                    children: [(0, l.jsx)(o.MenuGroup, {
                        children: (0, l.jsx)(o.MenuItem, {
                            id: "premium-subscribe",
                            label: Q.default.Messages.PREMIUM_GUILD_HEADER_DROPDOWN_NITRO_SERVER_SUBSCRIBE,
                            icon: B.default,
                            action: () => {
                                (0, G.openGuildBoostingMarketingModal)({
                                    guildId: t.id,
                                    location: {
                                        section: q.AnalyticsSections.GUILD_HEADER_POPOUT
                                    }
                                })
                            },
                            className: i({
                                [Z.boostingMenuItemHighlight]: eM
                            })
                        })
                    }), (0, l.jsxs)(o.MenuGroup, {
                        children: [es && _.isStaff() && ep ? (0, l.jsx)(o.MenuItem, {
                            id: "create-deadchat",
                            label: "Deadchat Ping",
                            icon: F.default,
                            action: () => {
                                (0, f.forcePrompt)(t.id, q.MessageTypes.GUILD_DEADCHAT_REVIVE_PROMPT)
                            }
                        }) : null, es && _.isStaff() && eS ? (0, l.jsx)(o.MenuItem, {
                            id: "create-gaming-ping",
                            label: "Gaming Stats Ping",
                            icon: F.default,
                            action: () => {
                                (0, f.forcePrompt)(t.id, q.MessageTypes.GUILD_GAMING_STATS_PROMPT)
                            }
                        }) : null, eo, et ? (0, l.jsx)(o.MenuItem, {
                            id: "settings",
                            label: Q.default.Messages.SERVER_SETTINGS,
                            icon: w.default,
                            action: () => {
                                h.default.open(t.id, q.GuildSettingsSections.OVERVIEW)
                            }
                        }) : null, el ? (0, l.jsx)(o.MenuItem, {
                            id: "insights",
                            label: Q.default.Messages.SERVER_INSIGHTS,
                            icon: P.default,
                            action: () => h.default.open(t.id, q.GuildSettingsSections.ANALYTICS)
                        }) : null, ea ? (0, l.jsxs)(l.Fragment, {
                            children: [(0, l.jsx)(o.MenuItem, {
                                id: "create-channel",
                                label: Q.default.Messages.CREATE_CHANNEL,
                                icon: K.default,
                                action: () => (0, o.openModalLazy)(async () => {
                                    let {
                                        default: e
                                    } = await a.el("581354").then(a.bind(a, "581354"));
                                    return a => (0, l.jsx)(e, {
                                        ...a,
                                        channelType: q.ChannelTypes.GUILD_TEXT,
                                        guildId: t.id
                                    })
                                })
                            }), (0, l.jsx)(o.MenuItem, {
                                id: "create-category",
                                label: Q.default.Messages.CREATE_CATEGORY,
                                icon: H.default,
                                action: () => (0, o.openModalLazy)(async () => {
                                    let {
                                        default: e
                                    } = await a.el("581354").then(a.bind(a, "581354"));
                                    return a => (0, l.jsx)(e, {
                                        ...a,
                                        channelType: q.ChannelTypes.GUILD_CATEGORY,
                                        guildId: t.id
                                    })
                                })
                            })]
                        }) : null, eu, eg, e_, er]
                    }), (0, l.jsxs)(o.MenuGroup, {
                        children: [eI, (0, l.jsx)(o.MenuItem, {
                            id: "notifications",
                            label: Q.default.Messages.NOTIFICATION_SETTINGS,
                            icon: V.default,
                            action: () => (0, o.openModalLazy)(async () => {
                                let {
                                    default: e
                                } = await a.el("747593").then(a.bind(a, "747593"));
                                return a => (0, l.jsx)(e, {
                                    ...a,
                                    guildId: t.id
                                })
                            })
                        }), (0, l.jsx)(o.MenuItem, {
                            id: "privacy",
                            label: Q.default.Messages.PRIVACY_SETTINGS,
                            icon: W.default,
                            action: () => (0, o.openModalLazy)(async () => {
                                let {
                                    default: e
                                } = await a.el("349406").then(a.bind(a, "349406"));
                                return a => (0, l.jsx)(e, {
                                    ...a,
                                    guild: t
                                })
                            })
                        })]
                    }), (0, l.jsxs)(o.MenuGroup, {
                        children: [ec, (0, l.jsx)(o.MenuCheckboxItem, {
                            id: "hide-muted-channels",
                            label: Q.default.Messages.HIDE_MUTED_CHANNELS,
                            checked: ee,
                            action: () => c.default.toggleCollapseGuild(t.id)
                        })]
                    }), (0, l.jsxs)(o.MenuGroup, {
                        children: [em, en && t.isCommunity() ? (0, l.jsx)(o.MenuItem, {
                            id: "report-raid",
                            label: Q.default.Messages.GUILD_REPORT_RAID_BUTTON_TITLE,
                            icon: z.default,
                            color: "danger",
                            action: () => (0, N.openReportRaidModal)(t.id)
                        }) : null, es ? null : (0, l.jsx)(o.MenuItem, {
                            id: "leave",
                            label: Q.default.Messages.LEAVE_SERVER,
                            icon: k.default,
                            color: "danger",
                            action: () => $(t, eT)
                        })]
                    })]
                })
            });
            var et = ee
        },
        724026: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return f
                }
            });
            var l = a("37983");
            a("884691");
            var n = a("446674"),
                s = a("77078"),
                i = a("305961"),
                d = a("697218"),
                u = a("986003"),
                r = a("512395"),
                o = a("49111"),
                c = a("782340");

            function f(e) {
                let t = (0, r.useOptInEnabledForGuild)(e),
                    a = (0, n.useStateFromStores)([i.default], () => i.default.getGuild(e)),
                    f = (0, n.useStateFromStores)([d.default], () => d.default.getCurrentUser());
                return null != f && null != a && (a.hasFeature(o.GuildFeatures.COMMUNITY) || f.isStaff()) ? (0, l.jsx)(s.MenuCheckboxItem, {
                    id: "opt-in",
                    label: c.default.Messages.GUILD_CHANNEL_OPT_IN,
                    checked: !t,
                    action: () => {
                        (0, u.toggleShowAllChannels)(e)
                    }
                }) : null
            }
        }
    }
]);