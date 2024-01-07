            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return W
                }
            }), n("222007");
            var i = n("917351"),
                r = n.n(i),
                s = n("316693"),
                a = n("446674"),
                o = n("913144"),
                l = n("560208"),
                u = n("38654"),
                c = n("267567"),
                d = n("834052"),
                f = n("755624"),
                E = n("526311"),
                h = n("233069"),
                p = n("813006"),
                _ = n("766274"),
                S = n("845078"),
                m = n("991170"),
                T = n("42203"),
                g = n("926787"),
                I = n("26989"),
                C = n("305961"),
                v = n("697218"),
                A = n("49111"),
                R = n("562980");
            let N = {},
                O = {},
                D = {},
                y = 0;

            function P(e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    n = N[e];
                if (null != n) return n;
                let i = v.default.getCurrentUser();
                if (null == i) return m.default.NONE;
                let r = C.default.getGuild(e);
                return null == r ? m.default.NONE : N[e] = m.default.computePermissions({
                    user: i,
                    context: r,
                    checkElevated: t
                })
            }

            function L(e) {
                var t;
                let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    i = v.default.getCurrentUser();
                if (null == i) return m.default.NONE;
                let s = T.default.getChannel(e);
                if (null == s) return m.default.NONE;
                let a = s.getGuildId(),
                    o = null != a && (c.default.isLurking(a) || (null === (t = I.default.getMember(a, i.id)) || void 0 === t ? void 0 : t.isPending));
                return !s.isScheduledForDeletion() && !o && r.isEmpty(s.permissionOverwrites) && null != a ? P(a) : m.default.computePermissions({
                    user: i,
                    context: s,
                    checkElevated: n
                })
            }

            function b(e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    n = O[e];
                return null != n ? n : O[e] = L(e, t)
            }

            function M(e) {
                if (null != e) {
                    var t;
                    D[e] = (null !== (t = D[e]) && void 0 !== t ? t : 0) + 1
                }
            }

            function U() {
                for (let e in N = {}, O = {}, D) D[e] += 1;
                y += 1
            }

            function w() {
                U()
            }

            function G() {
                U()
            }

            function k(e) {
                var t;
                let {
                    user: n
                } = e;
                if (n.id !== (null === (t = v.default.getCurrentUser()) || void 0 === t ? void 0 : t.id)) return !1;
                U()
            }

            function x() {
                return !0
            }

            function F(e) {
                let {
                    guildId: t
                } = e;
                delete N[t];
                let n = T.default.getMutableBasicGuildChannelsForGuild(t);
                r.forEach(n, e => {
                    delete O[e.id]
                }), y += 1, M(t)
            }

            function V(e) {
                let {
                    instance: t
                } = e, n = T.default.getChannel(t.channel_id);
                if (null == n) return !1;
                let i = v.default.getCurrentUser(),
                    r = m.default.computePermissions({
                        user: i,
                        context: n
                    });
                if (r === O[n.id]) return !1;
                O[n.id] = r, y += 1
            }

            function B(e) {
                let {
                    guildId: t
                } = e;
                delete N[t];
                let n = T.default.getMutableBasicGuildChannelsForGuild(t);
                r.forEach(n, e => {
                    delete O[e.id]
                }), y += 1, M(t)
            }

            function H(e, t, n, i) {
                let r = m.default.NONE;
                if (e instanceof h.ChannelRecordBase) {
                    if (h.THREAD_CHANNEL_TYPES.has(e.type)) {
                        let r = T.default.getChannel(e.parent_id);
                        return null == r ? m.default.NONE : m.default.applyThreadPermissions(e, H(r, t, n, i), f.default.hasJoined(e.id))
                    }
                    r = b(e.id)
                } else e instanceof p.default && (r = P(e.id));
                return void 0 !== t || void 0 !== n || void 0 !== i ? m.default.computePermissions({
                    user: v.default.getCurrentUser(),
                    context: e,
                    overwrites: t,
                    roles: n,
                    checkElevated: !0,
                    excludeGuildPermissions: i
                }) : r
            }
            class j extends a.default.Store {
                initialize() {
                    this.waitFor(v.default, C.default, T.default, I.default, g.default, f.default, d.default, u.default)
                }
                getChannelPermissions(e) {
                    return h.THREAD_CHANNEL_TYPES.has(e.type) ? L(e.id) : b(e.id)
                }
                getGuildPermissions(e) {
                    return P(e.id)
                }
                getGuildPermissionProps(e) {
                    let t = v.default.getCurrentUser();
                    return {
                        canManageGuild: this.can(A.Permissions.MANAGE_GUILD, e),
                        canManageChannels: this.can(A.Permissions.MANAGE_CHANNELS, e),
                        canManageRoles: this.can(A.Permissions.MANAGE_ROLES, e),
                        canManageBans: this.can(A.Permissions.BAN_MEMBERS, e),
                        canManageNicknames: this.can(A.Permissions.MANAGE_NICKNAMES, e),
                        canManageGuildExpressions: this.can(A.Permissions.MANAGE_GUILD_EXPRESSIONS, e) || this.can(A.Permissions.CREATE_GUILD_EXPRESSIONS, e),
                        canViewAuditLog: this.can(A.Permissions.VIEW_AUDIT_LOG, e),
                        canViewAuditLogV2: this.can(A.Permissions.VIEW_AUDIT_LOG, e),
                        canManageWebhooks: this.can(A.Permissions.MANAGE_WEBHOOKS, e),
                        canViewGuildAnalytics: this.can(A.Permissions.VIEW_GUILD_ANALYTICS, e),
                        canAccessMembersPage: this.canAccessMemberSafetyPage(e),
                        isGuildAdmin: this.can(A.Permissions.ADMINISTRATOR, e),
                        isOwner: null != t && e.isOwner(t),
                        isOwnerWithRequiredMfaLevel: null != t && e.isOwnerWithRequiredMfaLevel(t),
                        guild: e
                    }
                }
                canAccessMemberSafetyPage(e) {
                    return s.default.hasAny(P(e.id), R.MemberSafetyPagePermissions)
                }
                canAccessGuildSettings(e) {
                    return s.default.hasAny(P(e.id), m.default.VIEW_GUILD_SETTINGS)
                }
                canWithPartialContext(e, t) {
                    return "channelId" in t && "string" == typeof t.channelId ? this.can(e, T.default.getChannel(t.channelId)) : "guildId" in t && "string" == typeof t.guildId && this.can(e, C.default.getGuild(t.guildId))
                }
                can(e, t, n, i, r) {
                    let a = H(t, n, i, r);
                    return s.default.has(a, e)
                }
                canBasicChannel(e, t, n, i, r) {
                    return "basicPermissions" in t ? S.default.has(t.basicPermissions, e) : s.default.has(H(t, n, i, r), S.default.asBigFlag(e))
                }
                computePermissions(e, t, n, i) {
                    return H(e, t, n, i)
                }
                computeBasicPermissions(e) {
                    return "basicPermissions" in e ? e.basicPermissions : S.default.asBasicFlag(H(e))
                }
                canManageUser(e, t, n) {
                    let i = t instanceof _.default ? t.id : t;
                    if (n.isOwner(i)) return !1;
                    let r = v.default.getCurrentUser();
                    if (!this.can(e, n)) return !1;
                    let s = null != r ? m.default.getHighestRole(n, r.id) : void 0,
                        a = m.default.getHighestRole(n, i);
                    return null != r && m.default.isRoleHigher(n, r.id, s, a)
                }
                getHighestRole(e) {
                    let t = v.default.getCurrentUser();
                    return null != t ? m.default.getHighestRole(e, t.id) : null
                }
                isRoleHigher(e, t, n) {
                    let i = v.default.getCurrentUser(),
                        r = u.default.isViewingRoles(e.id);
                    return m.default.isRoleHigher(e, r ? void 0 : null == i ? void 0 : i.id, t, n)
                }
                canImpersonateRole(e, t) {
                    let n = this.getHighestRole(e),
                        i = this.can(A.Permissions.MANAGE_GUILD, e) && this.can(A.Permissions.MANAGE_ROLES, e),
                        r = this.isRoleHigher(e, n, t);
                    return i && (r || t.id === (null == n ? void 0 : n.id))
                }
                getGuildVersion(e) {
                    var t;
                    return null !== (t = D[e]) && void 0 !== t ? t : 0
                }
                getChannelsVersion() {
                    return y
                }
            }

            function Y() {
                O = {}, N = {}, D = {}, y = 0
            }
            j.displayName = "PermissionStore";
            var W = new j(o.default, {
                BACKGROUND_SYNC: w,
                CONNECTION_OPEN: w,
                OVERLAY_INITIALIZE: w,
                CACHE_LOADED: w,
                CACHE_LOADED_LAZY: w,
                CONNECTION_CLOSED: function() {
                    Y()
                },
                GUILD_CREATE: G,
                GUILD_UPDATE: G,
                GUILD_DELETE: G,
                GUILD_MEMBER_ADD: k,
                GUILD_MEMBER_UPDATE: k,
                CURRENT_USER_UPDATE: k,
                CHANNEL_CREATE: function(e) {
                    let {
                        channel: {
                            id: t
                        }
                    } = e, n = T.default.getChannel(t);
                    if (null == n || n.isPrivate()) return !1;
                    let i = v.default.getCurrentUser(),
                        r = m.default.computePermissions({
                            user: i,
                            context: n
                        });
                    if (O[n.id] === r) return !1;
                    O[n.id] = r, y += 1, M(n.getGuildId())
                },
                THREAD_CREATE: x,
                THREAD_UPDATE: x,
                THREAD_LIST_SYNC: x,
                LOAD_THREADS_SUCCESS: x,
                LOAD_ARCHIVED_THREADS_SUCCESS: x,
                CHANNEL_UPDATES: function(e) {
                    let {
                        channels: t
                    } = e, n = !1;
                    for (let {
                            id: e
                        }
                        of t) {
                        let t = T.default.getChannel(e);
                        if (null == t || t.isPrivate()) continue;
                        let i = v.default.getCurrentUser(),
                            r = m.default.computePermissions({
                                user: i,
                                context: t
                            });
                        O[t.id] !== r && (O[t.id] = r, M(t.getGuildId()), n = !0)
                    }
                    return !!n && (y += 1, n)
                },
                LOAD_MESSAGES_SUCCESS: function(e) {
                    let {
                        messages: t
                    } = e;
                    return t.some(e => null != e.thread)
                },
                SEARCH_FINISH: function(e) {
                    let {
                        messages: t,
                        threads: n
                    } = e;
                    return !!(n.length > 0) || t.some(e => e.some(e => null != e.thread))
                },
                GUILD_FEED_FETCH_SUCCESS: function(e) {
                    let {
                        data: t
                    } = e;
                    return (0, l.getThreadsFromGuildFeedFetch)(t).length > 0
                },
                THREAD_MEMBER_UPDATE: function(e) {
                    var t;
                    return (null === (t = v.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) === e.userId && (M(e.guildId), !0)
                },
                THREAD_MEMBERS_UPDATE: function(e) {
                    return !!(0, E.doesThreadMembersActionAffectMe)(e) && (M(e.guildId), !0)
                },
                CHANNEL_DELETE: function(e) {
                    let {
                        channel: t
                    } = e;
                    return delete O[t.id], y += 1, M(t.guild_id), !1
                },
                GUILD_ROLE_CREATE: F,
                GUILD_ROLE_UPDATE: F,
                GUILD_ROLE_DELETE: F,
                LOGOUT: Y,
                STAGE_INSTANCE_CREATE: V,
                STAGE_INSTANCE_UPDATE: V,
                STAGE_INSTANCE_DELETE: V,
                IMPERSONATE_UPDATE: B,
                IMPERSONATE_STOP: B
            })