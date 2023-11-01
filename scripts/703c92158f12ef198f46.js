(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["55039"], {
        158534: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return a
                }
            });
            var u = l("37983");
            l("884691");
            var n = l("685665");

            function a(e, t) {
                return function(l) {
                    let {
                        AnalyticsLocationProvider: a
                    } = (0, n.default)(t);
                    return (0, u.jsx)(a, {
                        children: (0, u.jsx)(e, {
                            ...l
                        })
                    })
                }
            }
        },
        230947: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return A
                }
            });
            var u = l("37983"),
                n = l("884691"),
                a = l("446674"),
                r = l("77078"),
                d = l("750560"),
                i = l("38766"),
                s = l("506885"),
                o = l("271938"),
                f = l("26989"),
                c = l("305961"),
                E = l("957255"),
                _ = l("697218"),
                M = l("49111"),
                S = l("782340"),
                m = l("460856");

            function A(e) {
                let {
                    guildId: t,
                    userId: A,
                    analyticsLocation: g,
                    analyticsLocations: R,
                    context: C,
                    icon: T
                } = e, O = c.default.getGuild(t), I = o.default.getId(), N = (0, a.useStateFromStores)([_.default], () => _.default.getUser(A)), h = (0, a.useStateFromStores)([f.default], () => f.default.isGuestOrLurker(t, A), [t, A]);
                (0, a.useStateFromStores)([E.default], () => E.default.getGuildVersion(t), [t]);
                let v = n.useMemo(() => ({
                    [t]: [A]
                }), [t, A]);
                (0, d.useSubscribeGuildMembers)(v);
                let p = C === M.AppContext.POPOUT,
                    U = (0, i.default)({
                        guild: O,
                        analyticsLocation: g
                    });
                if (null == O || p) return null;
                let b = I === A && (E.default.can(M.Permissions.CHANGE_NICKNAME, O) || E.default.can(M.Permissions.MANAGE_NICKNAMES, O)),
                    F = I === A,
                    x = E.default.canManageUser(M.Permissions.MANAGE_NICKNAMES, A, O);
                if (!(b || x || F) || null == N || h) return null;
                let L = O.hasFeature(M.GuildFeatures.HUB),
                    G = L ? S.default.Messages.HUB_EDIT_PROFILE : S.default.Messages.CHANGE_IDENTITY,
                    j = F ? G : S.default.Messages.CHANGE_NICKNAME;
                return (0, u.jsx)(r.MenuItem, {
                    id: "change-nickname",
                    label: (0, u.jsx)("div", {
                        className: m.labelWrapper,
                        children: (0, u.jsx)("span", {
                            className: m.label,
                            children: j
                        })
                    }),
                    icon: T,
                    action: () => {
                        F ? ((0, s.default)(N.id, N.getAvatarURL(t, 80), {
                            guildId: t
                        }), U()) : (0, r.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await l.el("59709").then(l.bind(l, "59709"));
                            return l => (0, u.jsx)(e, {
                                ...l,
                                guildId: t,
                                user: N,
                                analyticsSource: g,
                                analyticsLocations: R
                            })
                        })
                    }
                })
            }
        },
        130037: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                useTrackMemberSearchUsed: function() {
                    return _
                },
                useTrackMemberFilterRolesUsed: function() {
                    return M
                },
                MemberSafetyFlagType: function() {
                    return a
                },
                useTrackMemberFilterSafetyFlagsUsed: function() {
                    return S
                },
                ModerationActionType: function() {
                    return r
                },
                useTrackModerationAction: function() {
                    return m
                }
            });
            var u, n, a, r, d = l("884691"),
                i = l("812204"),
                s = l("716241"),
                o = l("271938"),
                f = l("599110"),
                c = l("49111");

            function E(e, t, l) {
                var u;
                let n = {
                    ...t,
                    ...(0, s.collectGuildAnalyticsMetadata)(null !== (u = t.guild_id) && void 0 !== u ? u : l)
                };
                f.default.track(e, n)
            }

            function _(e) {
                let t = d.useCallback(t => {
                    ! function(e) {
                        let t = {
                            guild_id: e,
                            location: i.default.MEMBER_SAFETY_PAGE
                        };
                        E(c.AnalyticEvents.MOD_DASH_SEARCH_MEMBERS, t)
                    }(e)
                }, [e]);
                return t
            }

            function M(e) {
                let t = d.useCallback(t => {
                    ! function(e, t) {
                        let l = {
                            selected_role_count: t.size,
                            guild_id: e,
                            location: i.default.MEMBER_SAFETY_PAGE
                        };
                        E(c.AnalyticEvents.MOD_DASH_FILTER_ROLES, l)
                    }(e, t)
                }, [e]);
                return t
            }(u = a || (a = {})).UNUSUAL_DM_ACTIVITY = "unusual_dm_activity", u.COMMUNICATION_DISABLED = "communication_disabled";

            function S(e) {
                let t = d.useCallback(t => {
                    ! function(e, t) {
                        let l = {
                            flag_type: t,
                            guild_id: e,
                            location: i.default.MEMBER_SAFETY_PAGE
                        };
                        E(c.AnalyticEvents.MOD_DASH_FILTER_SAFETY_FLAGS, l)
                    }(e, t)
                }, [e]);
                return t
            }

            function m(e, t) {
                let {
                    location: l,
                    targetUserId: u,
                    targets: n
                } = t, a = d.useCallback(t => {
                    let a = {
                        action_type: t,
                        mod_user_id: o.default.getId(),
                        guild_id: e,
                        location: l,
                        target_user_id: null != u ? u : void 0,
                        targets: null != n ? n : void 0
                    };
                    E(c.AnalyticEvents.MODERATION_ACTION, a)
                }, [e, l, u, n]);
                return a
            }(n = r || (r = {})).BAN = "ban", n.KICK = "kick", n.MUTE = "mute", n.TIMEOUT = "timeout", n.ADD_ROLE = "add_role", n.REMOVE_ROLE = "remove_role", n.COPY_ID = "copy_id", n.CHANGE_NICKNAME = "change_nickname"
        },
        77445: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return d
                }
            });
            var u = l("446674"),
                n = l("271938"),
                a = l("18494"),
                r = l("808422");

            function d() {
                let e = (0, u.useStateFromStores)([a.default], () => a.default.getVoiceChannelId()),
                    t = (0, u.useStateFromStores)([n.default], () => n.default.getId()),
                    l = (0, r.default)(t, e);
                return l === r.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK
            }
        },
        130563: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return r
                }
            });
            var u = l("446674"),
                n = l("42203"),
                a = l("18494");

            function r() {
                return (0, u.useStateFromStores)([a.default, n.default], () => {
                    let e = a.default.getVoiceChannelId();
                    if (null != e) {
                        let t = n.default.getChannel(e);
                        if (null == t ? void 0 : t.isGuildStageVoice()) return t
                    }
                    return null
                })
            }
        },
        726750: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return M
                }
            });
            var u = l("37983");
            l("884691");
            var n = l("446674"),
                a = l("77078"),
                r = l("305961"),
                d = l("697218"),
                i = l("800762"),
                s = l("244480"),
                o = l("619395"),
                f = l("325861"),
                c = l("77445"),
                E = l("130563"),
                _ = l("782340");

            function M(e) {
                var t;
                let l = (0, E.default)(),
                    M = null == l ? void 0 : l.id,
                    S = null == l ? void 0 : l.guild_id,
                    m = (0, n.useStateFromStores)([r.default], () => r.default.getGuild(S), [S]),
                    A = (0, n.useStateFromStores)([i.default], () => null != M ? i.default.getVoiceStateForChannel(M, e.id) : null, [M, e.id]),
                    g = (null === (t = d.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) === e.id,
                    R = (0, c.default)(),
                    C = (0, n.useStateFromStores)([f.default], () => f.default.getPermissionsForUser(e.id, M), [M, e.id]),
                    T = (0, o.useCanModerateRequestToSpeak)(M);
                if (null == l || null == m || null == A || C.speaker) return null;
                let O = () => {
                    g ? (0, s.audienceAckRequestToSpeak)(l, !1) : (0, s.inviteUserToStage)(l, e.id)
                };
                return T ? (0, u.jsx)(a.MenuItem, {
                    id: "invite-speaker",
                    label: g ? _.default.Messages.STAGE_CHANNEL_USER_SET_MYSELF_TO_SPEAKER : _.default.Messages.STAGE_CHANNEL_USER_INVITE_TO_SPEAK,
                    action: O
                }) : R && g ? (0, u.jsx)(a.MenuItem, {
                    id: "invite-speaker",
                    label: _.default.Messages.STAGE_CHANNEL_USER_SET_MYSELF_TO_SPEAKER,
                    action: O
                }) : null
            }
        },
        721429: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return b
                }
            });
            var u = l("37983");
            l("884691");
            var n = l("77078"),
                a = l("272030"),
                r = l("838446"),
                d = l("158534"),
                i = l("798609"),
                s = l("846883"),
                o = l("812204"),
                f = l("861370"),
                c = l("230947"),
                E = l("726750"),
                _ = l("170990"),
                M = l("304582"),
                S = l("72057"),
                m = l("563816"),
                A = l("489836"),
                g = l("406703"),
                R = l("314838"),
                C = l("383161"),
                T = l("421602"),
                O = l("459870"),
                I = l("393394"),
                N = l("806179"),
                h = l("97508"),
                v = l("623879"),
                p = l("49111"),
                U = l("782340"),
                b = (0, d.default)((0, r.default)(function(e) {
                    let {
                        user: t,
                        guildId: l,
                        channel: r,
                        context: d,
                        onSelect: o,
                        onHeightUpdate: b
                    } = e, F = (0, N.default)(t.id, l), x = (0, C.default)(t, l, d), L = (0, T.default)(t.id, d), G = (0, v.default)(t.id), j = (0, g.default)(t, d), y = (0, S.default)({
                        user: t,
                        guildId: l,
                        context: d
                    }), P = (0, M.default)(t), k = (0, c.default)({
                        guildId: l,
                        userId: t.id,
                        analyticsLocation: {
                            page: p.AnalyticsPages.GUILD_CHANNEL,
                            section: p.AnalyticsSections.CHAT_USERNAME,
                            object: p.AnalyticsObjects.CONTEXT_MENU_ITEM
                        },
                        context: d
                    }), D = (0, R.default)(t, l), V = (0, s.default)(null, t), H = (0, _.default)(t), K = (0, A.default)(t), B = (0, I.default)(t, l, r.id), Y = (0, h.default)(t.id, l), w = (0, O.default)(t, l), z = (0, f.default)({
                        id: t.id,
                        label: U.default.Messages.COPY_ID_USER
                    }), q = (0, E.default)(t), X = (0, m.default)({
                        commandType: i.ApplicationCommandType.USER,
                        commandTargetId: t.id,
                        channel: r,
                        guildId: l,
                        onShow: b
                    }), W = t.isNonUserBot();
                    return (0, u.jsxs)(n.Menu, {
                        navId: "user-context",
                        onClose: a.closeContextMenu,
                        "aria-label": U.default.Messages.USER_ACTIONS_MENU_LABEL,
                        onSelect: o,
                        children: [!W && (0, u.jsxs)(u.Fragment, {
                            children: [(0, u.jsx)(n.MenuGroup, {
                                children: q
                            }), (0, u.jsxs)(n.MenuGroup, {
                                children: [F, x, L, j, y, P, G]
                            }), (0, u.jsx)(n.MenuGroup, {
                                children: V
                            }), (0, u.jsxs)(n.MenuGroup, {
                                children: [k, X, D, H, K]
                            }), (0, u.jsx)(n.MenuGroup, {
                                children: B
                            }), (0, u.jsxs)(n.MenuGroup, {
                                children: [Y, w]
                            })]
                        }), (0, u.jsx)(n.MenuGroup, {
                            children: z
                        })]
                    })
                }, {
                    object: p.AnalyticsObjects.CONTEXT_MENU
                }), [o.default.CONTEXT_MENU, o.default.THREAD_USER_MENU])
        },
        421602: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return o
                }
            });
            var u = l("37983");
            l("884691");
            var n = l("77078"),
                a = l("450911"),
                r = l("54239"),
                d = l("271938"),
                i = l("49111"),
                s = l("782340");

            function o(e, t) {
                let l = d.default.getId(),
                    o = t === i.AppContext.POPOUT;
                return l === e || o ? null : (0, u.jsx)(n.MenuItem, {
                    id: "message-user",
                    label: s.default.Messages.USER_POPOUT_MESSAGE,
                    action: () => {
                        a.default.openPrivateChannel(e), (0, r.popLayer)()
                    }
                })
            }
        },
        459870: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return T
                }
            });
            var u = l("37983");
            l("884691");
            var n = l("446674"),
                a = l("77078"),
                r = l("851387"),
                d = l("987317"),
                i = l("679653"),
                s = l("271938"),
                o = l("42203"),
                f = l("923959"),
                c = l("26989"),
                E = l("305961"),
                _ = l("957255"),
                M = l("27618"),
                S = l("697218"),
                m = l("800762"),
                A = l("404008"),
                g = l("991170"),
                R = l("49111"),
                C = l("782340");

            function T(e, t) {
                let l = (0, n.useStateFromStores)([f.default], () => f.default.getChannels(t)[f.GUILD_VOCAL_CHANNELS_KEY], [t]),
                    T = (0, n.useStateFromStores)([m.default, o.default], () => {
                        let l = m.default.getUserVoiceChannelId(t, e.id);
                        return o.default.getChannel(l)
                    }, [t, e.id]),
                    O = (0, n.useStateFromStores)([c.default], () => c.default.isGuestOrLurker(t, e.id), [t, e.id]);
                if (O || null == T) return null;
                let I = e.id === s.default.getId();
                if (!I && !_.default.can(R.Permissions.MOVE_MEMBERS, T)) return null;
                let N = l.filter(t => {
                    let {
                        channel: l
                    } = t;
                    return l.id !== T.id && (I ? _.default.can(R.Permissions.CONNECT, l) && !(0, A.isChannelFull)(l, m.default, E.default) : _.default.can(R.Permissions.MOVE_MEMBERS, l) && (_.default.can(R.Permissions.CONNECT, l) || g.default.can({
                        permission: R.Permissions.CONNECT,
                        user: e,
                        context: l
                    })) && !(0, A.isChannelFull)(l, m.default, E.default))
                });
                return 0 === N.length ? null : (0, u.jsx)(a.MenuItem, {
                    id: "voice-move",
                    label: C.default.Messages.MOVE_TO,
                    children: N.map(l => {
                        let {
                            channel: n
                        } = l;
                        return (0, u.jsx)(a.MenuItem, {
                            id: n.id,
                            action: () => {
                                var l;
                                return l = n, void(e.id === s.default.getId() ? d.default.selectVoiceChannel(l.id) : r.default.setChannel(t, e.id, l.id))
                            },
                            label: (0, i.computeChannelName)(n, S.default, M.default)
                        }, n.id)
                    })
                })
            }
        },
        393394: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return m
                }
            });
            var u = l("37983"),
                n = l("884691"),
                a = l("446674"),
                r = l("77078"),
                d = l("750560"),
                i = l("64016"),
                s = l("263024"),
                o = l("300322"),
                f = l("42203"),
                c = l("305961"),
                E = l("957255"),
                _ = l("697218"),
                M = l("49111"),
                S = l("782340");

            function m(e, t, m) {
                let A = n.useMemo(() => ({
                    [t]: [e.id]
                }), [t, e.id]);
                (0, d.useSubscribeGuildMembers)(A), (0, a.useStateFromStores)([E.default], () => E.default.getGuildVersion(t), [t]);
                let g = (0, a.useStateFromStores)([f.default], () => f.default.getChannel(m)),
                    R = (0, a.useStateFromStores)([c.default], () => c.default.getGuild(t), [t]),
                    C = (0, a.useStateFromStores)([_.default], () => _.default.getCurrentUser()),
                    T = (0, i.default)(g, "Context Menu"),
                    O = (0, o.useIsThreadModerator)(g);
                if ((null == C ? void 0 : C.id) === e.id) return [T];
                if (null == R || null == g || null == C) return [];
                let I = O || g.ownerId === C.id && g.type === M.ChannelTypes.PRIVATE_THREAD;
                return [I ? (0, u.jsx)(r.MenuItem, {
                    id: "remove",
                    label: g.isForumPost() ? S.default.Messages.REMOVE_USER_FROM_FORUM_POST.format({
                        user: e.username
                    }) : S.default.Messages.REMOVE_USER_FROM_THREAD.format({
                        user: e.username
                    }),
                    color: "danger",
                    action: () => s.default.removeMember(g, e.id, "Context Menu")
                }) : null, E.default.canManageUser(M.Permissions.KICK_MEMBERS, e, R) ? (0, u.jsx)(r.MenuItem, {
                    id: "kick",
                    label: I ? S.default.Messages.KICK_USER_FROM_SERVER.format({
                        user: e.username
                    }) : S.default.Messages.KICK_USER.format({
                        user: e.username
                    }),
                    color: "danger",
                    action: () => (0, r.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await l.el("125104").then(l.bind(l, "125104"));
                        return l => (0, u.jsx)(t, {
                            ...l,
                            guildId: R.id,
                            user: e
                        })
                    })
                }) : null, E.default.canManageUser(M.Permissions.BAN_MEMBERS, e, R) ? (0, u.jsx)(r.MenuItem, {
                    id: "ban",
                    label: I ? S.default.Messages.BAN_USER_FROM_SERVER.format({
                        user: e.username
                    }) : S.default.Messages.BAN_USER.format({
                        user: e.username
                    }),
                    color: "danger",
                    action: () => (0, r.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await l.el("743506").then(l.bind(l, "743506"));
                        return l => (0, u.jsx)(t, {
                            ...l,
                            guildId: R.id,
                            user: e
                        })
                    })
                }) : null]
            }
        },
        97508: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return A
                }
            });
            var u = l("37983");
            l("884691");
            var n = l("509043"),
                a = l("446674"),
                r = l("77078"),
                d = l("206230"),
                i = l("130037"),
                s = l("592407"),
                o = l("26989"),
                f = l("305961"),
                c = l("957255"),
                E = l("449008"),
                _ = l("49111"),
                M = l("782340"),
                S = l("640659");

            function m(e, t) {
                var l, a;
                return (0, u.jsxs)("div", {
                    className: S.roleRow,
                    children: ["dot" === t ? (0, u.jsx)(r.RoleDot, {
                        className: S.roleDot,
                        color: null !== (l = e.colorString) && void 0 !== l ? l : (0, n.int2hex)(_.DEFAULT_ROLE_COLOR),
                        background: !1,
                        tooltip: !1
                    }) : (0, u.jsx)(r.RoleCircle, {
                        className: S.roleDot,
                        color: null !== (a = e.colorString) && void 0 !== a ? a : (0, n.int2hex)(_.DEFAULT_ROLE_COLOR)
                    }), (0, u.jsx)("div", {
                        children: e.name
                    })]
                })
            }

            function A(e, t) {
                let l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                    S = (0, a.useStateFromStores)([f.default], () => f.default.getGuild(t), [t]),
                    A = (0, a.useStateFromStores)([d.default], () => d.default.roleStyle),
                    g = (0, i.useTrackModerationAction)(t, {
                        location: n,
                        targetUserId: e
                    }),
                    {
                        userRoles: R,
                        isGuildMember: C,
                        canManageRoles: T
                    } = (0, a.useStateFromStoresObject)([o.default, c.default], () => {
                        let l = o.default.getMember(t, e);
                        return {
                            userRoles: null != l ? l.roles : [],
                            isGuildMember: null != l,
                            canManageRoles: null != S && c.default.can(_.Permissions.MANAGE_ROLES, S)
                        }
                    }, [e, t, S]);
                if (__OVERLAY__ || null == R || null == S || !C) return null;
                let O = c.default.getHighestRole(S),
                    I = Object.values(S.roles).filter(e => e.id !== S.id),
                    N = T ? I.map(l => {
                        let n = l.managed || !c.default.isRoleHigher(S, O, l),
                            a = -1 !== R.indexOf(l.id);
                        return n && !a ? null : (0, u.jsx)(r.MenuCheckboxItem, {
                            id: l.id,
                            label: () => m(l, A),
                            disabled: n,
                            action: () => {
                                var u;
                                return u = l, void(R.includes(u.id) ? (s.default.updateMemberRoles(t, e, R.filter(e => e !== u.id), [], [u.id]), g(i.ModerationActionType.REMOVE_ROLE)) : (s.default.updateMemberRoles(t, e, R.concat([u.id]), [u.id], []), g(i.ModerationActionType.ADD_ROLE)))
                            },
                            checked: a
                        }, l.id)
                    }) : I.filter(e => -1 !== R.indexOf(e.id)).map(e => e.id === S.id ? null : (0, u.jsx)(r.MenuItem, {
                        id: e.id,
                        label: () => m(e, A)
                    }, e.id));
                return 0 === N.filter(E.isNotNullish).length ? null : l ? N : (0, u.jsx)(r.MenuItem, {
                    id: "roles",
                    label: M.default.Messages.ROLES_LIST.format({
                        numRoles: N.length
                    }),
                    children: N
                })
            }
        }
    }
]);