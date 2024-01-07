            "use strict";
            n.r(t), n.d(t, {
                getUserIdFromCommunicationDisabledUserKey: function() {
                    return G
                },
                getGuildIdFromCommunicationDisabledUserKey: function() {
                    return w
                },
                default: function() {
                    return q
                }
            }), n("222007"), n("702976"), n("424973");
            var i, r, s = n("917351"),
                a = n.n(s),
                o = n("509043"),
                l = n("446674"),
                u = n("913144"),
                c = n("605250"),
                d = n("509"),
                f = n("564568"),
                E = n("38654"),
                h = n("568734"),
                p = n("449008"),
                _ = n("271938"),
                S = n("42203"),
                m = n("305961"),
                T = n("657944");
            let g = new c.default("GuildMemberStore"),
                I = {},
                C = {},
                v = {},
                A = !1,
                R = 0,
                N = 0,
                O = {},
                D = {},
                y = {
                    added: [],
                    removed: []
                };

            function P(e, t) {
                if (null == t.communicationDisabledUntil || !(0, d.isMemberCommunicationDisabled)(t)) return L(e, t.userId);
                let n = U(e, t.userId),
                    i = v[n];
                i !== t.communicationDisabledUntil && (0, d.isMemberCommunicationDisabled)(t) && (v[n] = t.communicationDisabledUntil, b(n))
            }

            function L(e, t) {
                if (null != t) {
                    let n = U(e, t);
                    null != v[n] && b(n), M(U(e, t))
                } else
                    for (let t in v) {
                        let n = w(t);
                        n === e && (b(t), M(t))
                    }
            }

            function b(e) {
                R += 1, O[e] = R
            }

            function M(e) {
                G(e) === _.default.getId() && (0, f.clearCommunicationDisabledNotice)(w(e)), delete v[e]
            }

            function U(e, t) {
                let n = [];
                return n[0] = e, n[1] = t, n.join("-")
            }

            function G(e) {
                return e.split("-")[1]
            }

            function w(e) {
                return e.split("-")[0]
            }

            function k(e, t) {
                let n, i, r, s, a;
                if (0 === t.length) return {
                    colorString: void 0,
                    colorRoleId: void 0,
                    hoistRoleId: void 0,
                    iconRoleId: void 0,
                    highestRoleId: void 0
                };
                for (let n of t) {
                    let t = e[n];
                    if (null == t) continue;
                    (null == a || t.position > a.position) && (a = t), t.color > 0 && (null == i || t.position > i.position) && (i = t), t.hoist && (null == r || t.position > r.position) && (r = t);
                    let o = null != t.icon || null != t.unicodeEmoji;
                    o && (null == s || t.position > s.position) && (s = t)
                }
                if (null != i) {
                    var l;
                    null == i.colorString && i.color > 0 && (i.colorString = (0, o.int2hex)(i.color)), n = null !== (l = i.colorString) && void 0 !== l ? l : void 0
                }
                return {
                    colorString: n,
                    colorRoleId: null == i ? void 0 : i.id,
                    iconRoleId: null == s ? void 0 : s.id,
                    hoistRoleId: null == r ? void 0 : r.id,
                    highestRoleId: null == a ? void 0 : a.id
                }
            }

            function x(e) {
                let {
                    userId: t,
                    nick: n,
                    guildId: i,
                    avatar: r,
                    guildRoles: s,
                    roles: a,
                    premiumSince: o,
                    isPending: l,
                    joinedAt: u,
                    communicationDisabledUntil: c,
                    unusualDMActivityUntil: d,
                    fullProfileLoadedTimestamp: f,
                    flags: h
                } = e, {
                    colorString: p,
                    colorRoleId: S,
                    iconRoleId: m,
                    hoistRoleId: T,
                    highestRoleId: g
                } = k(s, a), v = {
                    userId: t,
                    nick: n,
                    guildId: i,
                    avatar: r,
                    roles: a,
                    colorString: p,
                    colorRoleId: S,
                    iconRoleId: m,
                    hoistRoleId: T,
                    highestRoleId: g,
                    premiumSince: o,
                    isPending: l,
                    joinedAt: u,
                    communicationDisabledUntil: c,
                    unusualDMActivityUntil: d,
                    fullProfileLoadedTimestamp: f,
                    flags: h
                }, A = I[i];
                if (null == A) return v;
                if (t === _.default.getId()) {
                    if (E.default.isViewingRoles(i) || E.default.isFullServerPreview(i)) {
                        let e = E.default.getViewingRoles(i);
                        C[i] = {
                            ...v,
                            ...E.default.getMemberOptions(i),
                            roles: null != e ? Object.keys(e) : []
                        }
                    } else null != C[i] && delete C[i]
                }
                return v
            }(r = i || (i = {}))[r.GUILD = 0] = "GUILD", r[r.USER = 1] = "USER";

            function F(e) {
                e.guilds.forEach(e => {
                    H(e)
                })
            }

            function V(e) {
                var t;
                let {
                    guildId: n,
                    user: i,
                    nick: r,
                    avatar: s,
                    roles: a,
                    premiumSince: o,
                    isPending: l,
                    joinedAt: u,
                    communicationDisabledUntil: c,
                    unusualDMActivityUntil: d,
                    flags: f
                } = e, E = I[n];
                if (null == E) return !1;
                let h = m.default.getGuild(n);
                if (null == h) return g.warn("Guild ".concat(n, " not found during GUILD_MEMBER_UPDATE.")), !1;
                E[i.id] = x({
                    userId: i.id,
                    nick: r,
                    guildId: n,
                    avatar: s,
                    guildRoles: h.roles,
                    roles: a,
                    premiumSince: o,
                    isPending: l,
                    joinedAt: u,
                    communicationDisabledUntil: c,
                    unusualDMActivityUntil: d,
                    fullProfileLoadedTimestamp: null === (t = E[i.id]) || void 0 === t ? void 0 : t.fullProfileLoadedTimestamp,
                    flags: f
                }), P(n, E[i.id])
            }

            function B(e, t) {
                let n = I[e];
                if (null == n) return !1;
                let i = m.default.getGuild(e);
                return null == i ? (g.warn("Guild ".concat(e, " not found during GUILD_MEMBERS_CHUNK.")), !1) : (t.forEach(t => {
                    var r;
                    let s = n[t.user.id];
                    n[t.user.id] = x({
                        userId: t.user.id,
                        nick: t.nick,
                        guildId: e,
                        avatar: t.avatar,
                        guildRoles: i.roles,
                        roles: t.roles,
                        premiumSince: t.premium_since,
                        isPending: t.pending,
                        joinedAt: t.joined_at,
                        communicationDisabledUntil: t.communication_disabled_until,
                        flags: t.flags,
                        fullProfileLoadedTimestamp: null == s ? void 0 : s.fullProfileLoadedTimestamp,
                        unusualDMActivityUntil: null !== (r = t.unusual_dm_activity_until) && void 0 !== r ? r : null == s ? void 0 : s.unusualDMActivityUntil
                    }), P(e, n[t.user.id])
                }), N++, !0)
            }

            function H(e) {
                let t = e.id;
                !(t in I) && (I[e.id] = {});
                let n = m.default.getGuild(t);
                if (null == n) return !1;
                let i = I[t];
                for (let s of e.members) {
                    var r;
                    let a = s.user.id,
                        o = i[a],
                        l = x({
                            userId: a,
                            nick: s.nick,
                            guildId: e.id,
                            avatar: s.avatar,
                            guildRoles: n.roles,
                            roles: s.roles,
                            premiumSince: s.premium_since,
                            isPending: s.pending,
                            joinedAt: s.joined_at,
                            communicationDisabledUntil: s.communication_disabled_until,
                            fullProfileLoadedTimestamp: null == o ? void 0 : o.fullProfileLoadedTimestamp,
                            flags: s.flags,
                            unusualDMActivityUntil: null !== (r = s.unusual_dm_activity_until) && void 0 !== r ? r : null == o ? void 0 : o.unusualDMActivityUntil
                        });
                    i[a] = l, P(t, l)
                }
                return !0
            }

            function j(e) {
                let t = I[e.guildId];
                if (null == t) return !1;
                let n = m.default.getGuild(e.guildId);
                if (null == n) return g.warn("Guild ".concat(e.guildId, " not found during ").concat(e.type, ".")), !1;
                for (let i of Object.keys(t)) {
                    let r = t[i];
                    (null != r.roles && r.roles.length > 0 || null != r.colorString || null != r.hoistRoleId) && (t[i] = x({
                        userId: i,
                        nick: r.nick,
                        guildId: e.guildId,
                        avatar: r.avatar,
                        guildRoles: n.roles,
                        roles: r.roles,
                        premiumSince: r.premiumSince,
                        isPending: r.isPending,
                        joinedAt: r.joinedAt,
                        flags: r.flags,
                        fullProfileLoadedTimestamp: null == r ? void 0 : r.fullProfileLoadedTimestamp
                    }), P(e.guildId, t[i]))
                }
            }

            function Y(e) {
                let {
                    guildId: t
                } = e, n = I[t];
                if (null == n) return !1;
                let i = m.default.getGuild(t);
                if (null == i) return g.warn("Guild ".concat(t, " not found during IMPERSONATE_UPDATE.")), !1;
                let r = _.default.getId(),
                    s = n[r];
                n[r] = x({
                    userId: r,
                    nick: s.nick,
                    guildId: t,
                    avatar: s.avatar,
                    guildRoles: i.roles,
                    roles: s.roles,
                    premiumSince: s.premiumSince,
                    isPending: s.isPending,
                    joinedAt: s.joinedAt,
                    communicationDisabledUntil: s.communicationDisabledUntil,
                    fullProfileLoadedTimestamp: s.fullProfileLoadedTimestamp,
                    flags: s.flags
                })
            }

            function W(e) {
                var t;
                let {
                    message: n,
                    guildId: i
                } = e;
                (null === (t = n.resolved) || void 0 === t ? void 0 : t.members) != null && null != i && H({
                    id: i,
                    members: Object.entries(n.resolved.members).map(e => {
                        var t, i;
                        let [r, s] = e, a = null === (i = n.resolved) || void 0 === i ? void 0 : null === (t = i.users) || void 0 === t ? void 0 : t[r];
                        if (null != a) return {
                            ...s,
                            user: a
                        }
                    }).filter(e => null != e)
                })
            }

            function K(e) {
                let {
                    messages: t
                } = e;
                t.forEach(e => (function(e) {
                    var t;
                    if ((null === (t = e.resolved) || void 0 === t ? void 0 : t.members) == null) return;
                    let n = S.default.getChannel(e.channel_id);
                    !(null == n || n.isPrivate()) && H({
                        id: n.guild_id,
                        members: Object.entries(e.resolved.members).map(t => {
                            var n, i;
                            let [r, s] = t, a = null === (i = e.resolved) || void 0 === i ? void 0 : null === (n = i.users) || void 0 === n ? void 0 : n[r];
                            if (null != a) return {
                                ...s,
                                user: a
                            }
                        }).filter(e => null != e)
                    })
                })(e))
            }
            class z extends l.default.Store {
                initialize() {
                    this.waitFor(m.default, _.default, E.default)
                }
                getMutableAllGuildsAndMembers() {
                    return I
                }
                memberOf(e) {
                    return a(I).toPairs().filter(t => {
                        let [n, i] = t;
                        return null != i[e]
                    }).map(e => {
                        let [t] = e;
                        return t
                    }).value()
                }
                getNicknameGuildsMapping(e) {
                    let t = {};
                    for (let i in I) {
                        var n;
                        let r = I[i],
                            s = null === (n = r[e]) || void 0 === n ? void 0 : n.nick;
                        null != s && (!Object.prototype.hasOwnProperty.call(t, s) && (t[s] = []), t[s].push(i))
                    }
                    return t
                }
                getNicknames(e) {
                    return Object.keys(this.getNicknameGuildsMapping(e))
                }
                isMember(e, t) {
                    if (null == e || null == t) return !1;
                    let n = I[e];
                    return null != n && null != n[t]
                }
                isGuestOrLurker(e, t) {
                    var n;
                    if (null == e || null == t) return !1;
                    let i = I[e];
                    return null != i && (null === (n = i[t]) || void 0 === n ? void 0 : n.joinedAt) == null
                }
                isCurrentUserGuest(e) {
                    if (null == e) return !1;
                    let t = _.default.getId(),
                        n = I[e];
                    if (null == n || null == n[t]) return !1;
                    let i = n[t].flags;
                    return null != i && (0, h.hasFlag)(i, T.GuildMemberFlags.IS_GUEST)
                }
                getMemberIds(e) {
                    if (null == e) return [];
                    let t = I[e];
                    return null == t ? [] : Object.keys(t)
                }
                getMembers(e) {
                    if (null == e) return [];
                    let t = I[e];
                    return null == t ? [] : Object.values(t)
                }
                getTrueMember(e, t) {
                    let n = I[e];
                    return null != n ? n[t] : null
                }
                getMember(e, t) {
                    let n = this.getTrueMember(e, t);
                    if (null != n && t === _.default.getId() && (E.default.isViewingRoles(e) || E.default.isFullServerPreview(e))) {
                        var i;
                        return null !== (i = C[e]) && void 0 !== i ? i : n
                    }
                    return n
                }
                getSelfMember(e) {
                    return this.getMember(e, _.default.getId())
                }
                getNick(e, t) {
                    if (null == e || null == t) return null;
                    let n = this.getMember(e, t);
                    return null != n ? n.nick : null
                }
                getCommunicationDisabledUserMap() {
                    return v
                }
                getCommunicationDisabledVersion() {
                    return R
                }
                getPendingRoleUpdates(e) {
                    var t;
                    return null !== (t = D[e]) && void 0 !== t ? t : y
                }
                getMemberRoleWithPendingUpdates(e, t) {
                    var n, i;
                    let r = null !== (i = null === (n = this.getMember(e, t)) || void 0 === n ? void 0 : n.roles) && void 0 !== i ? i : [],
                        s = D[e];
                    return null == s ? r : a.difference(a.union(r, s.added), s.removed)
                }
                getMemberVersion() {
                    return N
                }
            }
            z.displayName = "GuildMemberStore";
            var q = new z(u.default, {
                CONNECTION_OPEN: function(e) {
                    A ? A = !1 : I = {}, v = {}, F(e)
                },
                CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
                    F(e)
                },
                OVERLAY_INITIALIZE: function(e) {
                    let {
                        guildMembers: t
                    } = e;
                    I = {
                        ...t
                    }
                },
                CACHE_LOADED: function(e) {
                    let {
                        guildMembers: t
                    } = e;
                    A = !0, I = {
                        ...t
                    }
                },
                GUILD_CREATE: function(e) {
                    let {
                        guild: t
                    } = e;
                    return H(t)
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    delete I[t.id], L(t.id)
                },
                GUILD_MEMBER_ADD: V,
                GUILD_MEMBER_UPDATE: V,
                GUILD_MEMBER_UPDATE_LOCAL: function(e) {
                    var t, n, i;
                    let {
                        guildId: r,
                        roles: s,
                        addedRoleIds: o,
                        removedRoleIds: l,
                        flags: u
                    } = e, c = _.default.getId(), d = I[r], f = null != d ? d[c] : null;
                    if (null == f) return !1;
                    let E = m.default.getGuild(r);
                    if (null == E) return !1;
                    let h = null !== (t = D[r]) && void 0 !== t ? t : {};
                    D[r] = {
                        added: a.difference(a.union(null !== (n = h.added) && void 0 !== n ? n : [], o), null != l ? l : []),
                        removed: a.difference(a.union(null !== (i = h.removed) && void 0 !== i ? i : [], l), null != o ? o : [])
                    }, d[c] = x({
                        userId: c,
                        guildId: r,
                        nick: f.nick,
                        avatar: f.avatar,
                        guildRoles: E.roles,
                        roles: null != s ? s : f.roles,
                        premiumSince: f.premiumSince,
                        isPending: f.isPending,
                        joinedAt: f.joinedAt,
                        flags: null != u ? u : f.flags,
                        fullProfileLoadedTimestamp: f.fullProfileLoadedTimestamp
                    })
                },
                GUILD_MEMBERS_CHUNK: function(e) {
                    return B(e.guildId, e.members)
                },
                GUILD_MEMBER_REMOVE: function(e) {
                    let {
                        guildId: t,
                        user: n
                    } = e, i = I[t];
                    if (null == i || null == i[n.id]) return !1;
                    delete i[n.id], L(t, n.id), N++
                },
                THREAD_MEMBER_LIST_UPDATE: function(e) {
                    let {
                        guildId: t,
                        members: n
                    } = e;
                    return B(t, n.map(e => e.member).filter(p.isNotNullish))
                },
                THREAD_MEMBERS_UPDATE: function(e) {
                    let {
                        guildId: t,
                        addedMembers: n
                    } = e;
                    return null != n && B(t, n.map(e => e.member).filter(p.isNotNullish))
                },
                LOAD_ARCHIVED_THREADS_SUCCESS: function(e) {
                    let {
                        guildId: t,
                        owners: n
                    } = e;
                    return B(t, n)
                },
                LOAD_FORUM_POSTS: function(e) {
                    let {
                        guildId: t,
                        threads: n
                    } = e;
                    return B(t, Object.values(n).map(e => e.owner).filter(p.isNotNullish))
                },
                GUILD_ROLE_UPDATE: j,
                GUILD_ROLE_DELETE: j,
                GUILD_ROLE_MEMBER_REMOVE: function(e) {
                    let {
                        guildId: t,
                        userId: n,
                        roleId: i
                    } = e, r = I[t];
                    if (null == r) return !1;
                    let s = m.default.getGuild(t);
                    if (null == s) return g.warn("Guild ".concat(t, " not found during GUILD_MEMBER_UPDATE.")), !1;
                    let a = r[n];
                    if (null == a || !a.roles.includes(i)) return !1;
                    a.roles = a.roles.filter(e => e !== i);
                    let o = k(s.roles, a.roles);
                    return r[n] = {
                        ...a,
                        ...o
                    }, !0
                },
                GUILD_ROLE_MEMBER_ADD: function(e) {
                    let {
                        guildId: t,
                        userId: n,
                        roleId: i
                    } = e, r = I[t];
                    if (null == r) return !1;
                    let s = m.default.getGuild(t);
                    if (null == s) return g.warn("Guild ".concat(t, " not found during GUILD_MEMBER_UPDATE.")), !1;
                    let a = r[n];
                    if (null == a || a.roles.includes(i)) return !1;
                    a.roles.push(i);
                    let o = k(s.roles, a.roles);
                    return r[n] = {
                        ...a,
                        ...o
                    }, !0
                },
                GUILD_MEMBER_PROFILE_UPDATE: function(e) {
                    let {
                        guildMember: t,
                        guildId: n
                    } = e, i = I[n];
                    if (null == i) return !1;
                    let r = m.default.getGuild(n);
                    if (null == r) return g.warn("Guild ".concat(n, " not found during GUILD_MEMBER_UPDATE.")), !1;
                    i[t.user.id] = x({
                        userId: t.user.id,
                        nick: t.nick,
                        guildId: n,
                        avatar: t.avatar,
                        guildRoles: r.roles,
                        roles: t.roles,
                        premiumSince: t.premium_since,
                        isPending: t.pending,
                        joinedAt: t.joined_at,
                        communicationDisabledUntil: t.communication_disabled_until,
                        unusualDMActivityUntil: t.unusual_dm_activity_until,
                        flags: t.flags,
                        fullProfileLoadedTimestamp: Date.now()
                    }), P(n, i[t.user.id])
                },
                IMPERSONATE_UPDATE: Y,
                IMPERSONATE_STOP: Y,
                PASSIVE_UPDATE_V1: function(e) {
                    return null != e.members && B(e.guildId, e.members)
                },
                CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES: function(e) {
                    let {
                        guildId: t
                    } = e;
                    if (null == t) return !1;
                    delete D[t]
                },
                LOCAL_MESSAGES_LOADED: function(e) {
                    var t, n;
                    if (null == e.guildId || null == m.default.getGuild(e.guildId)) return !1;
                    A = !0, I[e.guildId] = null !== (t = I[e.guildId]) && void 0 !== t ? t : {};
                    let i = !1;
                    for (let t of (A = !0, I[e.guildId] = null !== (n = I[e.guildId]) && void 0 !== n ? n : {}, e.members)) null == I[e.guildId][t.userId] && (i = !0, I[e.guildId][t.userId] = t);
                    return i
                },
                MESSAGE_CREATE: W,
                MESSAGE_UPDATE: W,
                LOAD_MESSAGES_SUCCESS: K,
                LOAD_MESSAGES_AROUND_SUCCESS: K,
                LOAD_PINNED_MESSAGES_SUCCESS: K,
                LOAD_RECENT_MENTIONS_SUCCESS: K,
                SEARCH_FINISH: function(e) {
                    let {
                        messages: t
                    } = e;
                    t.forEach(e => K({
                        messages: e
                    }))
                },
                MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: function(e) {
                    let {
                        guildId: t,
                        members: n
                    } = e, i = n.map(e => {
                        let {
                            member: t
                        } = e;
                        return t
                    });
                    return B(t, i)
                }
            })