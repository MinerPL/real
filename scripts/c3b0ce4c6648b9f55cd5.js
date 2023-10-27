(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["52343"], {
        158574: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return i
                }
            });
            var l = a("377849"),
                n = a.n(l),
                u = a("851387"),
                i = {
                    async setCommunicationDisabledDuration(e, t, a, l, i) {
                        let s = null != a ? n().add(a, "s").toISOString() : null;
                        await u.default.setCommunicationDisabledUntil({
                            guildId: e,
                            userId: t,
                            communicationDisabledUntilTimestamp: s,
                            duration: a,
                            reason: l,
                            location: i
                        })
                    }
                }
        },
        230947: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return I
                }
            });
            var l = a("920040"),
                n = a("773670"),
                u = a("498225"),
                i = a("77078"),
                s = a("750560"),
                d = a("38766"),
                r = a("506885"),
                o = a("271938"),
                c = a("26989"),
                f = a("305961"),
                m = a("957255"),
                M = a("697218"),
                E = a("49111"),
                S = a("782340"),
                g = a("717578");

            function I(e) {
                let {
                    guildId: t,
                    userId: I,
                    analyticsLocation: _,
                    analyticsLocations: C,
                    context: R,
                    icon: A
                } = e, b = f.default.getGuild(t), N = o.default.getId(), v = (0, u.useStateFromStores)([M.default], () => M.default.getUser(I)), O = (0, u.useStateFromStores)([c.default], () => c.default.isGuestOrLurker(t, I), [t, I]);
                (0, u.useStateFromStores)([m.default], () => m.default.getGuildVersion(t), [t]);
                let h = n.useMemo(() => ({
                    [t]: [I]
                }), [t, I]);
                (0, s.useSubscribeGuildMembers)(h);
                let L = R === E.AppContext.POPOUT,
                    T = (0, d.default)({
                        guild: b,
                        analyticsLocation: _
                    });
                if (null == b || L) return null;
                let F = N === I && (m.default.can(E.Permissions.CHANGE_NICKNAME, b) || m.default.can(E.Permissions.MANAGE_NICKNAMES, b)),
                    U = N === I,
                    p = m.default.canManageUser(E.Permissions.MANAGE_NICKNAMES, I, b);
                if (!(F || p || U) || null == v || O) return null;
                let x = b.hasFeature(E.GuildFeatures.HUB),
                    D = x ? S.default.Messages.HUB_EDIT_PROFILE : S.default.Messages.CHANGE_IDENTITY,
                    y = U ? D : S.default.Messages.CHANGE_NICKNAME;
                return (0, l.jsx)(i.MenuItem, {
                    id: "change-nickname",
                    label: (0, l.jsx)("div", {
                        className: g.labelWrapper,
                        children: (0, l.jsx)("span", {
                            className: g.label,
                            children: y
                        })
                    }),
                    icon: A,
                    action: () => {
                        U ? ((0, r.default)(v.id, v.getAvatarURL(t, 80), {
                            guildId: t
                        }), T()) : (0, i.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await a.el("59709").then(a.bind(a, "59709"));
                            return a => (0, l.jsx)(e, {
                                ...a,
                                guildId: t,
                                user: v,
                                analyticsSource: _,
                                analyticsLocations: C
                            })
                        })
                    }
                })
            }
        },
        278483: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                openDisableCommunication: function() {
                    return u
                },
                openEnableCommunication: function() {
                    return i
                }
            });
            var l = a("920040");
            a("773670");
            var n = a("77078");

            function u(e, t, u) {
                (0, n.openModalLazy)(async () => {
                    let {
                        default: n
                    } = await a.el("693120").then(a.bind(a, "693120"));
                    return a => (0, l.jsx)(n, {
                        guildId: e,
                        userId: t,
                        anaylticsLocations: u,
                        ...a
                    })
                })
            }

            function i(e, t, u) {
                (0, n.openModalLazy)(async () => {
                    let {
                        default: n
                    } = await a.el("750331").then(a.bind(a, "750331"));
                    return a => (0, l.jsx)(n, {
                        guildId: e,
                        userId: t,
                        anaylticsLocations: u,
                        ...a
                    })
                })
            }
        },
        300925: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return O
                }
            });
            var l = a("920040"),
                n = a("773670"),
                u = a("498225"),
                i = a("77078"),
                s = a("158574"),
                d = a("851387"),
                r = a("750560"),
                o = a("278483"),
                c = a("700179"),
                f = a("406043"),
                m = a("130037"),
                M = a("42203"),
                E = a("26989"),
                S = a("305961"),
                g = a("957255"),
                I = a("697218"),
                _ = a("800762"),
                C = a("568734"),
                R = a("387111"),
                A = a("49111"),
                b = a("903639"),
                N = a("657944"),
                v = a("782340");

            function O(e, t, O, h) {
                var L, T, F;
                let U = n.useMemo(() => ({
                        [t]: [e.id]
                    }), [t, e.id]),
                    p = null != h ? [h] : [];
                (0, r.useSubscribeGuildMembers)(U), (0, u.useStateFromStores)([g.default], () => g.default.getGuildVersion(t), [t]);
                let x = (0, u.useStateFromStores)([S.default], () => S.default.getGuild(t), [t]),
                    D = (0, u.useStateFromStores)([I.default], () => {
                        var t;
                        return (null === (t = I.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) === e.id
                    }, [e.id]),
                    y = (0, u.useStateFromStores)([E.default], () => E.default.isGuestOrLurker(t, e.id), [t, e.id]),
                    G = (0, u.useStateFromStores)([M.default], () => M.default.getChannel(O), [O]),
                    [, j] = (0, f.default)(e.id, t),
                    P = null == G ? void 0 : G.isGuildStageVoice(),
                    {
                        muted: k,
                        deafened: B,
                        suppressed: V,
                        voiceChannelId: w
                    } = (0, u.useStateFromStoresObject)([_.default], () => {
                        var a, l, n;
                        let u = _.default.getVoiceState(t, e.id);
                        return {
                            muted: null !== (a = null == u ? void 0 : u.mute) && void 0 !== a && a,
                            deafened: null !== (l = null == u ? void 0 : u.deaf) && void 0 !== l && l,
                            suppressed: null !== (n = null == u ? void 0 : u.suppress) && void 0 !== n && n,
                            voiceChannelId: null == u ? void 0 : u.channelId
                        }
                    }),
                    K = (0, u.useStateFromStores)([E.default], () => E.default.getMember(t, e.id)),
                    H = (0, m.useTrackModerationAction)(t, {
                        location: h,
                        targetUserId: e.id
                    }),
                    Y = (0, c.default)(t, e.id),
                    W = null != w && null != O && g.default.canWithPartialContext(A.Permissions.VIEW_CHANNEL, {
                        channelId: w
                    }) && !y ? [(!P || P && !V) && g.default.canWithPartialContext(A.Permissions.MUTE_MEMBERS, {
                        channelId: O
                    }) ? (0, l.jsx)(i.MenuCheckboxItem, {
                        id: "voice-mute",
                        label: v.default.Messages.SERVER_VOICE_MUTE,
                        checked: k,
                        color: "danger",
                        action: () => {
                            !1 === k && H(m.ModerationActionType.MUTE), d.default.setServerMute(t, e.id, !k)
                        }
                    }, "voice-mute") : null, (!P || P && !V) && g.default.canWithPartialContext(A.Permissions.DEAFEN_MEMBERS, {
                        channelId: O
                    }) ? (0, l.jsx)(i.MenuCheckboxItem, {
                        id: "voice-deafen",
                        label: v.default.Messages.SERVER_DEAFEN,
                        checked: B,
                        color: "danger",
                        action: () => d.default.setServerDeaf(t, e.id, !B)
                    }, "voice-deafen") : null, !D && null != x && g.default.canWithPartialContext(A.Permissions.MOVE_MEMBERS, {
                        channelId: O
                    }) ? (0, l.jsx)(i.MenuItem, {
                        id: "voice-disconnect",
                        label: D ? v.default.Messages.DISCONNECT_SELF : v.default.Messages.DISCONNECT_OTHER,
                        color: "danger",
                        action: () => d.default.setChannel(t, e.id, null)
                    }, "voice-disconnect") : null] : [],
                    z = async (t, a, l) => {
                        if (t.ctrlKey || t.metaKey) try {
                            var n;
                            await s.default.setCommunicationDisabledDuration(a, l, b.DisableCommunicationDuration.DURATION_60_SEC, null, h), H(m.ModerationActionType.TIMEOUT), (0, i.showToast)((0, i.createToast)(v.default.Messages.GUILD_COMMUNICATION_DISABLED_SUCCESS.format({
                                user: null !== (n = R.default.getName(a, null, e)) && void 0 !== n ? n : ""
                            }), i.ToastType.SUCCESS))
                        } catch (e) {
                            (0, i.showToast)((0, i.createToast)(v.default.Messages.APPLICATION_STORE_LISTING_PURCHASE_GENERIC_ERROR, i.ToastType.FAILURE))
                        }
                    }, q = null;
                !D && null != x && null != K && null != K.joinedAt && (g.default.canManageUser(A.Permissions.MODERATE_MEMBERS, e, x) || g.default.canManageUser(A.Permissions.MANAGE_ROLES, e, x)) && x.hasFeature(A.GuildFeatures.GUILD_ONBOARDING_EVER_ENABLED) && (q = (0, C.hasFlag)(null !== (L = K.flags) && void 0 !== L ? L : 0, N.GuildMemberFlags.BYPASSES_VERIFICATION) ? (0, l.jsx)(i.MenuItem, {
                    id: "verify",
                    label: v.default.Messages.MANUALLY_UNVERIFY_MEMBER,
                    action: () => d.default.setMemberFlags(x.id, e.id, (0, C.setFlag)(null !== (T = K.flags) && void 0 !== T ? T : 0, N.GuildMemberFlags.BYPASSES_VERIFICATION, !1))
                }, "verify") : (0, l.jsx)(i.MenuItem, {
                    id: "verify",
                    label: v.default.Messages.MANUALLY_VERIFY_MEMBER,
                    action: () => d.default.setMemberFlags(x.id, e.id, (0, C.setFlag)(null !== (F = K.flags) && void 0 !== F ? F : 0, N.GuildMemberFlags.BYPASSES_VERIFICATION, !0))
                }, "verify"));
                let J = D || null == x ? [] : [q, Y && !y ? j ? (0, l.jsx)(i.MenuItem, {
                    id: "removetimeout",
                    label: v.default.Messages.ENABLE_GUILD_COMMUNICATION_FOR_USER.format({
                        user: e.username
                    }),
                    color: "danger",
                    action: () => {
                        (0, o.openEnableCommunication)(t, e.id, p)
                    }
                }, "removetimeout") : (0, l.jsx)(i.MenuItem, {
                    id: "timeout",
                    label: v.default.Messages.DISABLE_GUILD_COMMUNICATION_FOR_USER.format({
                        user: e.username
                    }),
                    color: "danger",
                    action: a => {
                        if (a.ctrlKey || a.metaKey) return z(a, t, e.id);
                        (0, o.openDisableCommunication)(t, e.id, p)
                    }
                }, "timeout") : null, g.default.canManageUser(A.Permissions.KICK_MEMBERS, e, x) && !e.isClyde() ? (0, l.jsx)(i.MenuItem, {
                    id: "kick",
                    label: v.default.Messages.KICK_USER.format({
                        user: e.username
                    }),
                    color: "danger",
                    action: () => (0, i.openModalLazy)(async () => {
                        let {
                            default: n
                        } = await a.el("125104").then(a.bind(a, "125104"));
                        return a => (0, l.jsx)(n, {
                            ...a,
                            location: h,
                            guildId: t,
                            user: e
                        })
                    })
                }, "kick") : null, g.default.canManageUser(A.Permissions.BAN_MEMBERS, e, x) ? (0, l.jsx)(i.MenuItem, {
                    id: "ban",
                    label: v.default.Messages.BAN_USER.format({
                        user: e.username
                    }),
                    color: "danger",
                    action: () => (0, i.openModalLazy)(async () => {
                        let {
                            default: n
                        } = await a.el("743506").then(a.bind(a, "743506"));
                        return a => (0, l.jsx)(n, {
                            ...a,
                            location: h,
                            guildId: t,
                            user: e
                        })
                    })
                }, "ban") : null];
                return [...W, ...J]
            }
        },
        97508: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return I
                }
            });
            var l = a("920040");
            a("773670");
            var n = a("253824"),
                u = a("498225"),
                i = a("77078"),
                s = a("206230"),
                d = a("130037"),
                r = a("592407"),
                o = a("26989"),
                c = a("305961"),
                f = a("957255"),
                m = a("449008"),
                M = a("49111"),
                E = a("782340"),
                S = a("181806");

            function g(e, t) {
                var a, u;
                return (0, l.jsxs)("div", {
                    className: S.roleRow,
                    children: ["dot" === t ? (0, l.jsx)(i.RoleDot, {
                        className: S.roleDot,
                        color: null !== (a = e.colorString) && void 0 !== a ? a : (0, n.int2hex)(M.DEFAULT_ROLE_COLOR),
                        background: !1,
                        tooltip: !1
                    }) : (0, l.jsx)(i.RoleCircle, {
                        className: S.roleDot,
                        color: null !== (u = e.colorString) && void 0 !== u ? u : (0, n.int2hex)(M.DEFAULT_ROLE_COLOR)
                    }), (0, l.jsx)("div", {
                        children: e.name
                    })]
                })
            }

            function I(e, t) {
                let a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                    S = (0, u.useStateFromStores)([c.default], () => c.default.getGuild(t), [t]),
                    I = (0, u.useStateFromStores)([s.default], () => s.default.roleStyle),
                    _ = (0, d.useTrackModerationAction)(t, {
                        location: n,
                        targetUserId: e
                    }),
                    {
                        userRoles: C,
                        isGuildMember: R,
                        canManageRoles: A
                    } = (0, u.useStateFromStoresObject)([o.default, f.default], () => {
                        let a = o.default.getMember(t, e);
                        return {
                            userRoles: null != a ? a.roles : [],
                            isGuildMember: null != a,
                            canManageRoles: null != S && f.default.can(M.Permissions.MANAGE_ROLES, S)
                        }
                    }, [e, t, S]);
                if (__OVERLAY__ || null == C || null == S || !R) return null;
                let b = f.default.getHighestRole(S),
                    N = Object.values(S.roles).filter(e => e.id !== S.id),
                    v = A ? N.map(a => {
                        let n = a.managed || !f.default.isRoleHigher(S, b, a),
                            u = -1 !== C.indexOf(a.id);
                        return n && !u ? null : (0, l.jsx)(i.MenuCheckboxItem, {
                            id: a.id,
                            label: () => g(a, I),
                            disabled: n,
                            action: () => {
                                var l;
                                return l = a, void(C.includes(l.id) ? (r.default.updateMemberRoles(t, e, C.filter(e => e !== l.id), [], [l.id]), _(d.ModerationActionType.REMOVE_ROLE)) : (r.default.updateMemberRoles(t, e, C.concat([l.id]), [l.id], []), _(d.ModerationActionType.ADD_ROLE)))
                            },
                            checked: u
                        }, a.id)
                    }) : N.filter(e => -1 !== C.indexOf(e.id)).map(e => e.id === S.id ? null : (0, l.jsx)(i.MenuItem, {
                        id: e.id,
                        label: () => g(e, I)
                    }, e.id));
                return 0 === v.filter(m.isNotNullish).length ? null : a ? v : (0, l.jsx)(i.MenuItem, {
                    id: "roles",
                    label: E.default.Messages.ROLES_LIST.format({
                        numRoles: v.length
                    }),
                    children: v
                })
            }
        }
    }
]);