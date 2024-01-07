            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return U
                }
            }), n("222007");
            var i = n("917351"),
                r = n.n(i),
                s = n("316693"),
                a = n("798609"),
                o = n("681937"),
                l = n("509"),
                u = n("38654"),
                c = n("267567"),
                d = n("755624"),
                f = n("233069"),
                E = n("271938"),
                h = n("42203"),
                p = n("26989"),
                _ = n("305961"),
                S = n("697218"),
                m = n("49111");
            let T = s.default.deserialize(0),
                g = s.default.combine(...r.values(m.Permissions)),
                I = s.default.combine(m.Permissions.CREATE_INSTANT_INVITE, m.Permissions.CHANGE_NICKNAME, m.Permissions.VIEW_CHANNEL, m.Permissions.SEND_MESSAGES, m.Permissions.EMBED_LINKS, m.Permissions.ATTACH_FILES, m.Permissions.READ_MESSAGE_HISTORY, m.Permissions.MENTION_EVERYONE, m.Permissions.USE_EXTERNAL_EMOJIS, m.Permissions.USE_EXTERNAL_STICKERS, m.Permissions.ADD_REACTIONS, m.Permissions.CREATE_PUBLIC_THREADS, m.Permissions.CREATE_PRIVATE_THREADS, m.Permissions.SEND_MESSAGES_IN_THREADS, m.Permissions.CONNECT, m.Permissions.SPEAK, m.Permissions.USE_VAD, m.Permissions.STREAM, m.Permissions.USE_EMBEDDED_ACTIVITIES, m.Permissions.USE_SOUNDBOARD, m.Permissions.REQUEST_TO_SPEAK, m.Permissions.USE_APPLICATION_COMMANDS, m.Permissions.CREATE_GUILD_EXPRESSIONS, m.Permissions.CREATE_EVENTS),
                C = s.default.combine(m.Permissions.VIEW_CHANNEL, m.Permissions.READ_MESSAGE_HISTORY),
                v = s.default.combine(m.Permissions.VIEW_CHANNEL, m.Permissions.SEND_MESSAGES, m.Permissions.CONNECT, m.Permissions.SPEAK, m.Permissions.STREAM, m.Permissions.USE_EMBEDDED_ACTIVITIES, m.Permissions.USE_EXTERNAL_EMOJIS, m.Permissions.USE_EXTERNAL_SOUNDS, m.Permissions.USE_EXTERNAL_STICKERS, m.Permissions.USE_SOUNDBOARD, m.Permissions.USE_VAD),
                A = s.default.combine(m.Permissions.VIEW_CHANNEL, m.Permissions.READ_MESSAGE_HISTORY),
                R = s.default.combine(m.Permissions.VIEW_CHANNEL, m.Permissions.READ_MESSAGE_HISTORY, m.Permissions.CHANGE_NICKNAME),
                N = s.default.combine(m.Permissions.MANAGE_GUILD, m.Permissions.MANAGE_ROLES, m.Permissions.ADMINISTRATOR, m.Permissions.BAN_MEMBERS, m.Permissions.MANAGE_NICKNAMES, m.Permissions.CREATE_GUILD_EXPRESSIONS, m.Permissions.MANAGE_GUILD_EXPRESSIONS, m.Permissions.MANAGE_WEBHOOKS, m.Permissions.VIEW_AUDIT_LOG);

            function O(e, t, n) {
                let i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
                if (i && t.mfaLevel === m.MFALevels.ELEVATED && n === E.default.getId()) {
                    var r;
                    !(null === (r = S.default.getCurrentUser()) || void 0 === r ? void 0 : r.mfaEnabled) && (e = s.default.remove(e, m.ElevatedPermissions))
                }
                return e
            }

            function D(e, t, n, i) {
                let r = i[e];
                if (null != r && (n = s.default.remove(n, r.deny), n = s.default.add(n, r.allow)), null != t) {
                    let e = T,
                        r = T;
                    for (let n = 0; n < t.roles.length; n++) {
                        let a = i[t.roles[n]];
                        null != a && (e = s.default.add(e, a.allow), r = s.default.add(r, a.deny))
                    }
                    n = s.default.remove(n, r), n = s.default.add(n, e);
                    let a = i[t.userId];
                    null != a && (n = s.default.remove(n, a.deny), n = s.default.add(n, a.allow));
                    let u = s.default.has(n, m.Permissions.ADMINISTRATOR),
                        c = (0, o.hasAutomodQuarantinedProfile)(t);
                    c && !u && (n = s.default.filter(n, R));
                    let d = (0, l.isMemberCommunicationDisabled)(t);
                    d && !u && (n = s.default.filter(n, A))
                }
                return n
            }

            function y(e) {
                let {
                    userId: t,
                    member: n,
                    guild: i,
                    overwrites: r,
                    roles: a,
                    checkElevated: o = !0,
                    excludeGuildPermissions: l = !1,
                    lurkerPermissionsMask: u = C
                } = e;
                if (l) return D(i.id, n, T, r);
                a = null != a ? {
                    ...i.roles,
                    ...a
                } : i.roles;
                let d = a[i.id],
                    f = null != d ? d.permissions : I;
                if (null != n)
                    for (let e = 0; e < n.roles.length; e++) {
                        let t = a[n.roles[e]];
                        void 0 !== t && (f = s.default.add(f, t.permissions))
                    }
                return f = s.default.has(f, m.Permissions.ADMINISTRATOR) ? g : D(i.id, n, f, r), (c.default.isLurking(i.id) || (null == n ? void 0 : n.isPending)) && (f = s.default.filter(f, u)), p.default.isCurrentUserGuest(i.id) && (f = s.default.filter(f, v)), O(f, i, t, o)
            }

            function P(e) {
                var t, n, i;
                let r, {
                    user: s,
                    context: a,
                    overwrites: o,
                    roles: l,
                    checkElevated: c = !0,
                    excludeGuildPermissions: E = !1
                } = e;
                if (null == s) return T;
                let m = "string" == typeof s ? s : s.id,
                    I = C;
                if (a instanceof f.ChannelRecordBase) {
                    if (a.isScheduledForDeletion()) return T;
                    if (f.THREAD_CHANNEL_TYPES.has(a.type)) {
                        let e = h.default.getChannel(a.parent_id);
                        if (null == e || e.isScheduledForDeletion()) return T;
                        let t = m === (null === (n = S.default.getCurrentUser()) || void 0 === n ? void 0 : n.id) && d.default.hasJoined(a.id);
                        return L(a, P({
                            user: s,
                            context: e,
                            overwrites: o,
                            roles: l,
                            checkElevated: c,
                            excludeGuildPermissions: E
                        }), t)
                    }
                    I = null !== (i = a.computeLurkerPermissionsAllowList()) && void 0 !== i ? i : I;
                    o = null != o ? {
                        ...a.permissionOverwrites,
                        ...o
                    } : a.permissionOverwrites;
                    let e = a.getGuildId();
                    r = null != e ? _.default.getGuild(e) : null
                } else o = null != o ? o : {}, r = a;
                if (null == r) return T;
                if (!(m === (null === (t = S.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) && u.default.isViewingRoles(r.id)) && r.isOwner(m)) return O(g, r, m, c);
                let v = p.default.getMember(r.id, m);
                return y({
                    userId: m,
                    member: v,
                    guild: r,
                    overwrites: o,
                    roles: l,
                    checkElevated: c,
                    excludeGuildPermissions: E,
                    lurkerPermissionsMask: I
                })
            }

            function L(e, t, n) {
                return e.type !== m.ChannelTypes.PRIVATE_THREAD || n || s.default.has(t, m.Permissions.MANAGE_THREADS) ? s.default.has(t, m.Permissions.SEND_MESSAGES_IN_THREADS) ? e.isLockedThread() && !s.default.has(t, m.Permissions.MANAGE_THREADS) ? s.default.remove(t, m.Permissions.SEND_MESSAGES) : s.default.combine(t, m.Permissions.SEND_MESSAGES) : s.default.remove(t, m.Permissions.SEND_MESSAGES) : T
            }

            function b(e) {
                return {
                    id: e,
                    type: a.PermissionOverwriteType.ROLE,
                    allow: T,
                    deny: T
                }
            }

            function M(e) {
                let {
                    permission: t,
                    user: n,
                    context: i,
                    overwrites: r,
                    roles: a,
                    excludeGuildPermissions: o
                } = e;
                return s.default.has(P({
                    user: n,
                    context: i,
                    overwrites: r,
                    roles: a,
                    checkElevated: !0,
                    excludeGuildPermissions: o
                }), t)
            }
            var U = {
                PASSTHROUGH: "PASSTHROUGH",
                ALLOW: "ALLOW",
                DENY: "DENY",
                NONE: T,
                DEFAULT: I,
                ALL: g,
                VIEW_GUILD_SETTINGS: N,
                computePermissionsForRoles: function e(t) {
                    let n, {
                            forceRoles: i,
                            context: r,
                            overwrites: s,
                            roles: a,
                            checkElevated: o = !0,
                            excludeGuildPermissions: l
                        } = t,
                        u = C;
                    if (r instanceof f.ChannelRecordBase) {
                        var c;
                        if (r.isScheduledForDeletion()) return T;
                        if (f.THREAD_CHANNEL_TYPES.has(r.type)) {
                            let t = h.default.getChannel(r.parent_id);
                            return null == t ? T : L(r, e({
                                forceRoles: i,
                                context: t,
                                overwrites: s,
                                roles: a,
                                checkElevated: o,
                                excludeGuildPermissions: l
                            }), !1)
                        }
                        u = null !== (c = r.computeLurkerPermissionsAllowList()) && void 0 !== c ? c : u;
                        s = null != s ? {
                            ...r.permissionOverwrites,
                            ...s
                        } : r.permissionOverwrites;
                        let t = r.getGuildId();
                        n = null != t ? _.default.getGuild(t) : null
                    } else s = null != s ? s : {}, n = r;
                    if (null == n) return T;
                    let d = {
                        userId: "",
                        nick: "",
                        guildId: n.id,
                        guildMemberAvatar: null,
                        roles: Object.keys(i),
                        colorString: null,
                        hoistRoleId: null,
                        premiumSince: null,
                        isPending: !1,
                        joinedAt: new Date().toISOString(),
                        communicationDisabledUntil: null
                    };
                    return y({
                        userId: "",
                        member: d,
                        guild: n,
                        overwrites: s,
                        roles: a,
                        checkElevated: o,
                        excludeGuildPermissions: l,
                        lurkerPermissionsMask: u
                    })
                },
                computePermissions: P,
                applyThreadPermissions: L,
                getGuildVisualOwnerId: function(e) {
                    var t;
                    let n = r.some(e.roles, e => e.hoist && s.default.has(e.permissions, m.Permissions.ADMINISTRATOR));
                    return n ? void 0 : null !== (t = e.ownerId) && void 0 !== t ? t : void 0
                },
                isRoleHigher: function(e, t, n, i) {
                    if (null != t && e.isOwner(t)) return !0;
                    if (null == n) return !1;
                    let s = r(e.roles).sortBy(e => e.position).map(e => e.id).value();
                    return s.indexOf(n.id) > (null != i ? s.indexOf(i.id) : -1)
                },
                getHighestRole: function(e, t) {
                    let n = p.default.getMember(e.id, t);
                    if (null != n) return r(e.roles).filter(e => -1 !== n.roles.indexOf(e.id)).sortBy(e => -e.position).first()
                },
                getHighestHoistedRole: function(e, t) {
                    return null == t.hoistRoleId ? null : e.getRole(t.hoistRoleId)
                },
                can: M,
                canEveryoneRole(e, t) {
                    let n;
                    let i = {};
                    if (t instanceof f.ChannelRecordBase) {
                        if (t.type === m.ChannelTypes.PRIVATE_THREAD || f.THREAD_CHANNEL_TYPES.has(t.type) && null == (t = h.default.getChannel(t.parent_id))) return !1;
                        i = t.permissionOverwrites;
                        let e = t.getGuildId();
                        n = null != e ? _.default.getGuild(e) : null
                    } else n = t;
                    if (null == n) return !1;
                    let r = n.roles[n.id],
                        a = r.permissions,
                        o = i[n.id];
                    return null != o && (a = s.default.remove(a, o.deny), a = s.default.add(a, o.allow)), s.default.has(a, e)
                },
                canEveryone(e, t) {
                    let n;
                    let i = {};
                    if (t instanceof f.ChannelRecordBase) {
                        if (t.type === m.ChannelTypes.PRIVATE_THREAD || f.THREAD_CHANNEL_TYPES.has(t.type) && null == (t = h.default.getChannel(t.parent_id))) return !1;
                        i = t.permissionOverwrites;
                        let e = t.getGuildId();
                        n = null != e ? _.default.getGuild(e) : null
                    } else n = t;
                    if (null == n) return !1;
                    let a = n.roles[n.id];
                    return !(!s.default.has(a.permissions, e) || r.some(i, t => s.default.has(t.deny, e))) && !0
                },
                canManageACategory: function(e, t, n) {
                    return !!M({
                        permission: m.Permissions.MANAGE_CHANNELS,
                        user: e,
                        context: t
                    }) || n.some(t => {
                        let {
                            channel: n
                        } = t;
                        return "null" !== n.id && M({
                            permission: m.Permissions.MANAGE_CHANNELS,
                            user: e,
                            context: n
                        })
                    })
                },
                areChannelsLocked: function(e, t) {
                    if (f.THREAD_CHANNEL_TYPES.has(e.type)) return !0;
                    let {
                        guild_id: n
                    } = e;
                    if (null == t || null == n || n !== t.guild_id) return !1;
                    let i = {
                            ...e.permissionOverwrites
                        },
                        r = {
                            ...t.permissionOverwrites
                        };
                    return null == i[n] && (i[n] = b(n)), null == r[n] && (r[n] = b(n)), Object.keys(i).length === Object.keys(r).length && !Object.keys(i).some(e => {
                        let t = i[e],
                            n = r[e];
                        return !(null != n && s.default.equals(n.deny, t.deny) && s.default.equals(n.allow, t.allow)) && !0
                    })
                },
                makeEveryoneOverwrite: b
            }