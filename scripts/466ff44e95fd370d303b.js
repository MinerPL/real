(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["6291"], {
        158574: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return i
                }
            });
            var a = l("377849"),
                n = l.n(a),
                u = l("851387"),
                i = {
                    async setCommunicationDisabledDuration(e, t, l, a, i) {
                        let s = null != l ? n().add(l, "s").toISOString() : null;
                        await u.default.setCommunicationDisabledUntil({
                            guildId: e,
                            userId: t,
                            communicationDisabledUntilTimestamp: s,
                            duration: l,
                            reason: a,
                            location: i
                        })
                    }
                }
        },
        230947: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return I
                }
            });
            var a = l("920040"),
                n = l("773670"),
                u = l("498225"),
                i = l("77078"),
                s = l("750560"),
                d = l("38766"),
                r = l("506885"),
                o = l("271938"),
                c = l("26989"),
                f = l("305961"),
                m = l("957255"),
                M = l("697218"),
                E = l("49111"),
                S = l("782340"),
                g = l("717578");

            function I(e) {
                let {
                    guildId: t,
                    userId: I,
                    analyticsLocation: C,
                    analyticsLocations: _,
                    context: N,
                    icon: v
                } = e, A = f.default.getGuild(t), O = o.default.getId(), R = (0, u.useStateFromStores)([M.default], () => M.default.getUser(I)), b = (0, u.useStateFromStores)([c.default], () => c.default.isGuestOrLurker(t, I), [t, I]);
                (0, u.useStateFromStores)([m.default], () => m.default.getGuildVersion(t), [t]);
                let h = n.useMemo(() => ({
                    [t]: [I]
                }), [t, I]);
                (0, s.useSubscribeGuildMembers)(h);
                let L = N === E.AppContext.POPOUT,
                    T = (0, d.default)({
                        guild: A,
                        analyticsLocation: C
                    });
                if (null == A || L) return null;
                let p = O === I && (m.default.can(E.Permissions.CHANGE_NICKNAME, A) || m.default.can(E.Permissions.MANAGE_NICKNAMES, A)),
                    F = O === I,
                    U = m.default.canManageUser(E.Permissions.MANAGE_NICKNAMES, I, A);
                if (!(p || U || F) || null == R || b) return null;
                let x = A.hasFeature(E.GuildFeatures.HUB),
                    D = x ? S.default.Messages.HUB_EDIT_PROFILE : S.default.Messages.CHANGE_IDENTITY,
                    P = F ? D : S.default.Messages.CHANGE_NICKNAME;
                return (0, a.jsx)(i.MenuItem, {
                    id: "change-nickname",
                    label: (0, a.jsx)("div", {
                        className: g.labelWrapper,
                        children: (0, a.jsx)("span", {
                            className: g.label,
                            children: P
                        })
                    }),
                    icon: v,
                    action: () => {
                        F ? ((0, r.default)(R.id, R.getAvatarURL(t, 80), {
                            guildId: t
                        }), T()) : (0, i.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await l.el("59709").then(l.bind(l, "59709"));
                            return l => (0, a.jsx)(e, {
                                ...l,
                                guildId: t,
                                user: R,
                                analyticsSource: C,
                                analyticsLocations: _
                            })
                        })
                    }
                })
            }
        },
        278483: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                openDisableCommunication: function() {
                    return u
                },
                openEnableCommunication: function() {
                    return i
                }
            });
            var a = l("920040");
            l("773670");
            var n = l("77078");

            function u(e, t, u) {
                (0, n.openModalLazy)(async () => {
                    let {
                        default: n
                    } = await l.el("693120").then(l.bind(l, "693120"));
                    return l => (0, a.jsx)(n, {
                        guildId: e,
                        userId: t,
                        anaylticsLocations: u,
                        ...l
                    })
                })
            }

            function i(e, t, u) {
                (0, n.openModalLazy)(async () => {
                    let {
                        default: n
                    } = await l.el("750331").then(l.bind(l, "750331"));
                    return l => (0, a.jsx)(n, {
                        guildId: e,
                        userId: t,
                        anaylticsLocations: u,
                        ...l
                    })
                })
            }
        },
        300925: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return b
                }
            });
            var a = l("920040"),
                n = l("773670"),
                u = l("498225"),
                i = l("77078"),
                s = l("158574"),
                d = l("851387"),
                r = l("750560"),
                o = l("278483"),
                c = l("700179"),
                f = l("406043"),
                m = l("130037"),
                M = l("42203"),
                E = l("26989"),
                S = l("305961"),
                g = l("957255"),
                I = l("697218"),
                C = l("800762"),
                _ = l("568734"),
                N = l("387111"),
                v = l("49111"),
                A = l("903639"),
                O = l("657944"),
                R = l("782340");

            function b(e, t, b, h) {
                var L, T, p;
                let F = n.useMemo(() => ({
                        [t]: [e.id]
                    }), [t, e.id]),
                    U = null != h ? [h] : [];
                (0, r.useSubscribeGuildMembers)(F), (0, u.useStateFromStores)([g.default], () => g.default.getGuildVersion(t), [t]);
                let x = (0, u.useStateFromStores)([S.default], () => S.default.getGuild(t), [t]),
                    D = (0, u.useStateFromStores)([I.default], () => {
                        var t;
                        return (null === (t = I.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) === e.id
                    }, [e.id]),
                    P = (0, u.useStateFromStores)([E.default], () => E.default.isGuestOrLurker(t, e.id), [t, e.id]),
                    y = (0, u.useStateFromStores)([M.default], () => M.default.getChannel(b), [b]),
                    [, G] = (0, f.default)(e.id, t),
                    j = null == y ? void 0 : y.isGuildStageVoice(),
                    {
                        muted: V,
                        deafened: B,
                        suppressed: k,
                        voiceChannelId: K
                    } = (0, u.useStateFromStoresObject)([C.default], () => {
                        var l, a, n;
                        let u = C.default.getVoiceState(t, e.id);
                        return {
                            muted: null !== (l = null == u ? void 0 : u.mute) && void 0 !== l && l,
                            deafened: null !== (a = null == u ? void 0 : u.deaf) && void 0 !== a && a,
                            suppressed: null !== (n = null == u ? void 0 : u.suppress) && void 0 !== n && n,
                            voiceChannelId: null == u ? void 0 : u.channelId
                        }
                    }),
                    w = (0, u.useStateFromStores)([E.default], () => E.default.getMember(t, e.id)),
                    H = (0, m.useTrackModerationAction)(t, {
                        location: h,
                        targetUserId: e.id
                    }),
                    Y = (0, c.default)(t, e.id),
                    W = null != K && null != b && g.default.canWithPartialContext(v.Permissions.VIEW_CHANNEL, {
                        channelId: K
                    }) && !P ? [(!j || j && !k) && g.default.canWithPartialContext(v.Permissions.MUTE_MEMBERS, {
                        channelId: b
                    }) ? (0, a.jsx)(i.MenuCheckboxItem, {
                        id: "voice-mute",
                        label: R.default.Messages.SERVER_VOICE_MUTE,
                        checked: V,
                        color: "danger",
                        action: () => {
                            !1 === V && H(m.ModerationActionType.MUTE), d.default.setServerMute(t, e.id, !V)
                        }
                    }, "voice-mute") : null, (!j || j && !k) && g.default.canWithPartialContext(v.Permissions.DEAFEN_MEMBERS, {
                        channelId: b
                    }) ? (0, a.jsx)(i.MenuCheckboxItem, {
                        id: "voice-deafen",
                        label: R.default.Messages.SERVER_DEAFEN,
                        checked: B,
                        color: "danger",
                        action: () => d.default.setServerDeaf(t, e.id, !B)
                    }, "voice-deafen") : null, !D && null != x && g.default.canWithPartialContext(v.Permissions.MOVE_MEMBERS, {
                        channelId: b
                    }) ? (0, a.jsx)(i.MenuItem, {
                        id: "voice-disconnect",
                        label: D ? R.default.Messages.DISCONNECT_SELF : R.default.Messages.DISCONNECT_OTHER,
                        color: "danger",
                        action: () => d.default.setChannel(t, e.id, null)
                    }, "voice-disconnect") : null] : [],
                    z = async (t, l, a) => {
                        if (t.ctrlKey || t.metaKey) try {
                            var n;
                            await s.default.setCommunicationDisabledDuration(l, a, A.DisableCommunicationDuration.DURATION_60_SEC, null, h), H(m.ModerationActionType.TIMEOUT), (0, i.showToast)((0, i.createToast)(R.default.Messages.GUILD_COMMUNICATION_DISABLED_SUCCESS.format({
                                user: null !== (n = N.default.getName(l, null, e)) && void 0 !== n ? n : ""
                            }), i.ToastType.SUCCESS))
                        } catch (e) {
                            (0, i.showToast)((0, i.createToast)(R.default.Messages.APPLICATION_STORE_LISTING_PURCHASE_GENERIC_ERROR, i.ToastType.FAILURE))
                        }
                    }, q = null;
                !D && null != x && null != w && null != w.joinedAt && (g.default.canManageUser(v.Permissions.MODERATE_MEMBERS, e, x) || g.default.canManageUser(v.Permissions.MANAGE_ROLES, e, x)) && x.hasFeature(v.GuildFeatures.GUILD_ONBOARDING_EVER_ENABLED) && (q = (0, _.hasFlag)(null !== (L = w.flags) && void 0 !== L ? L : 0, O.GuildMemberFlags.BYPASSES_VERIFICATION) ? (0, a.jsx)(i.MenuItem, {
                    id: "verify",
                    label: R.default.Messages.MANUALLY_UNVERIFY_MEMBER,
                    action: () => d.default.setMemberFlags(x.id, e.id, (0, _.setFlag)(null !== (T = w.flags) && void 0 !== T ? T : 0, O.GuildMemberFlags.BYPASSES_VERIFICATION, !1))
                }, "verify") : (0, a.jsx)(i.MenuItem, {
                    id: "verify",
                    label: R.default.Messages.MANUALLY_VERIFY_MEMBER,
                    action: () => d.default.setMemberFlags(x.id, e.id, (0, _.setFlag)(null !== (p = w.flags) && void 0 !== p ? p : 0, O.GuildMemberFlags.BYPASSES_VERIFICATION, !0))
                }, "verify"));
                let J = D || null == x ? [] : [q, Y && !P ? G ? (0, a.jsx)(i.MenuItem, {
                    id: "removetimeout",
                    label: R.default.Messages.ENABLE_GUILD_COMMUNICATION_FOR_USER.format({
                        user: e.username
                    }),
                    color: "danger",
                    action: () => {
                        (0, o.openEnableCommunication)(t, e.id, U)
                    }
                }, "removetimeout") : (0, a.jsx)(i.MenuItem, {
                    id: "timeout",
                    label: R.default.Messages.DISABLE_GUILD_COMMUNICATION_FOR_USER.format({
                        user: e.username
                    }),
                    color: "danger",
                    action: l => {
                        if (l.ctrlKey || l.metaKey) return z(l, t, e.id);
                        (0, o.openDisableCommunication)(t, e.id, U)
                    }
                }, "timeout") : null, g.default.canManageUser(v.Permissions.KICK_MEMBERS, e, x) && !e.isClyde() ? (0, a.jsx)(i.MenuItem, {
                    id: "kick",
                    label: R.default.Messages.KICK_USER.format({
                        user: e.username
                    }),
                    color: "danger",
                    action: () => (0, i.openModalLazy)(async () => {
                        let {
                            default: n
                        } = await l.el("125104").then(l.bind(l, "125104"));
                        return l => (0, a.jsx)(n, {
                            ...l,
                            location: h,
                            guildId: t,
                            user: e
                        })
                    })
                }, "kick") : null, g.default.canManageUser(v.Permissions.BAN_MEMBERS, e, x) ? (0, a.jsx)(i.MenuItem, {
                    id: "ban",
                    label: R.default.Messages.BAN_USER.format({
                        user: e.username
                    }),
                    color: "danger",
                    action: () => (0, i.openModalLazy)(async () => {
                        let {
                            default: n
                        } = await l.el("743506").then(l.bind(l, "743506"));
                        return l => (0, a.jsx)(n, {
                            ...l,
                            location: h,
                            guildId: t,
                            user: e
                        })
                    })
                }, "ban") : null];
                return [...W, ...J]
            }
        },
        421602: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return o
                }
            });
            var a = l("920040");
            l("773670");
            var n = l("77078"),
                u = l("450911"),
                i = l("54239"),
                s = l("271938"),
                d = l("49111"),
                r = l("782340");

            function o(e, t) {
                let l = s.default.getId(),
                    o = t === d.AppContext.POPOUT;
                return l === e || o ? null : (0, a.jsx)(n.MenuItem, {
                    id: "message-user",
                    label: r.default.Messages.USER_POPOUT_MESSAGE,
                    action: () => {
                        u.default.openPrivateChannel(e), (0, i.popLayer)()
                    }
                })
            }
        },
        459870: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return v
                }
            });
            var a = l("920040");
            l("773670");
            var n = l("498225"),
                u = l("77078"),
                i = l("851387"),
                s = l("987317"),
                d = l("679653"),
                r = l("271938"),
                o = l("42203"),
                c = l("923959"),
                f = l("26989"),
                m = l("305961"),
                M = l("957255"),
                E = l("27618"),
                S = l("697218"),
                g = l("800762"),
                I = l("404008"),
                C = l("991170"),
                _ = l("49111"),
                N = l("782340");

            function v(e, t) {
                let l = (0, n.useStateFromStores)([c.default], () => c.default.getChannels(t)[c.GUILD_VOCAL_CHANNELS_KEY], [t]),
                    v = (0, n.useStateFromStores)([g.default, o.default], () => {
                        let l = g.default.getUserVoiceChannelId(t, e.id);
                        return o.default.getChannel(l)
                    }, [t, e.id]),
                    A = (0, n.useStateFromStores)([f.default], () => f.default.isGuestOrLurker(t, e.id), [t, e.id]);
                if (A || null == v) return null;
                let O = e.id === r.default.getId();
                if (!O && !M.default.can(_.Permissions.MOVE_MEMBERS, v)) return null;
                let R = l.filter(t => {
                    let {
                        channel: l
                    } = t;
                    return l.id !== v.id && (O ? M.default.can(_.Permissions.CONNECT, l) && !(0, I.isChannelFull)(l, g.default, m.default) : M.default.can(_.Permissions.MOVE_MEMBERS, l) && (M.default.can(_.Permissions.CONNECT, l) || C.default.can({
                        permission: _.Permissions.CONNECT,
                        user: e,
                        context: l
                    })) && !(0, I.isChannelFull)(l, g.default, m.default))
                });
                return 0 === R.length ? null : (0, a.jsx)(u.MenuItem, {
                    id: "voice-move",
                    label: N.default.Messages.MOVE_TO,
                    children: R.map(l => {
                        let {
                            channel: n
                        } = l;
                        return (0, a.jsx)(u.MenuItem, {
                            id: n.id,
                            action: () => {
                                var l;
                                return l = n, void(e.id === r.default.getId() ? s.default.selectVoiceChannel(l.id) : i.default.setChannel(t, e.id, l.id))
                            },
                            label: (0, d.computeChannelName)(n, S.default, E.default)
                        }, n.id)
                    })
                })
            }
        },
        97508: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return I
                }
            });
            var a = l("920040");
            l("773670");
            var n = l("253824"),
                u = l("498225"),
                i = l("77078"),
                s = l("206230"),
                d = l("130037"),
                r = l("592407"),
                o = l("26989"),
                c = l("305961"),
                f = l("957255"),
                m = l("449008"),
                M = l("49111"),
                E = l("782340"),
                S = l("181806");

            function g(e, t) {
                var l, u;
                return (0, a.jsxs)("div", {
                    className: S.roleRow,
                    children: ["dot" === t ? (0, a.jsx)(i.RoleDot, {
                        className: S.roleDot,
                        color: null !== (l = e.colorString) && void 0 !== l ? l : (0, n.int2hex)(M.DEFAULT_ROLE_COLOR),
                        background: !1,
                        tooltip: !1
                    }) : (0, a.jsx)(i.RoleCircle, {
                        className: S.roleDot,
                        color: null !== (u = e.colorString) && void 0 !== u ? u : (0, n.int2hex)(M.DEFAULT_ROLE_COLOR)
                    }), (0, a.jsx)("div", {
                        children: e.name
                    })]
                })
            }

            function I(e, t) {
                let l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                    S = (0, u.useStateFromStores)([c.default], () => c.default.getGuild(t), [t]),
                    I = (0, u.useStateFromStores)([s.default], () => s.default.roleStyle),
                    C = (0, d.useTrackModerationAction)(t, {
                        location: n,
                        targetUserId: e
                    }),
                    {
                        userRoles: _,
                        isGuildMember: N,
                        canManageRoles: v
                    } = (0, u.useStateFromStoresObject)([o.default, f.default], () => {
                        let l = o.default.getMember(t, e);
                        return {
                            userRoles: null != l ? l.roles : [],
                            isGuildMember: null != l,
                            canManageRoles: null != S && f.default.can(M.Permissions.MANAGE_ROLES, S)
                        }
                    }, [e, t, S]);
                if (__OVERLAY__ || null == _ || null == S || !N) return null;
                let A = f.default.getHighestRole(S),
                    O = Object.values(S.roles).filter(e => e.id !== S.id),
                    R = v ? O.map(l => {
                        let n = l.managed || !f.default.isRoleHigher(S, A, l),
                            u = -1 !== _.indexOf(l.id);
                        return n && !u ? null : (0, a.jsx)(i.MenuCheckboxItem, {
                            id: l.id,
                            label: () => g(l, I),
                            disabled: n,
                            action: () => {
                                var a;
                                return a = l, void(_.includes(a.id) ? (r.default.updateMemberRoles(t, e, _.filter(e => e !== a.id), [], [a.id]), C(d.ModerationActionType.REMOVE_ROLE)) : (r.default.updateMemberRoles(t, e, _.concat([a.id]), [a.id], []), C(d.ModerationActionType.ADD_ROLE)))
                            },
                            checked: u
                        }, l.id)
                    }) : O.filter(e => -1 !== _.indexOf(e.id)).map(e => e.id === S.id ? null : (0, a.jsx)(i.MenuItem, {
                        id: e.id,
                        label: () => g(e, I)
                    }, e.id));
                return 0 === R.filter(m.isNotNullish).length ? null : l ? R : (0, a.jsx)(i.MenuItem, {
                    id: "roles",
                    label: E.default.Messages.ROLES_LIST.format({
                        numRoles: R.length
                    }),
                    children: R
                })
            }
        }
    }
]);