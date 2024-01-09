            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return x
                }
            }), n("222007"), n("424973"), n("808653");
            var a = n("917351"),
                l = n.n(a),
                s = n("249654"),
                i = n("446674"),
                r = n("913144"),
                u = n("42203"),
                o = n("26989"),
                d = n("10802"),
                c = n("824563"),
                f = n("101125"),
                h = n("697218"),
                p = n("449008"),
                m = n("991170"),
                E = n("158998"),
                C = n("49111");
            let S = {};
            class g {
                rebuild(e) {
                    this.version++, this.sections = {}, null != e && (this.allUserIds = new Set(e));
                    let t = u.default.getChannel(this.parentId);
                    l(Array.from(this.allUserIds)).map(e => {
                        let [n, a, l] = this.calculateNewState(e, t);
                        return {
                            userId: e,
                            sectionId: n,
                            displayName: a,
                            canViewChannel: l
                        }
                    }).sort((e, t) => s.default.compare(e.userId, t.userId)).sortBy(e => e.displayName).forEach(e => {
                        this.addUser(e.userId, e.sectionId, e.displayName, e.canViewChannel, !0)
                    })
                }
                updateMultipleUserIds(e, t) {
                    return (null == t || this.guildId === t) && 0 !== (e = e.filter(e => this.allUserIds.has(e))).length && (e.length > 50 ? this.rebuild() : e.forEach(e => this.updateUserId(e)), !0)
                }
                updateUserId(e) {
                    if (!this.allUserIds.has(e)) return !1;
                    let [t, n, a] = this.findOldState(e), [l, s, i] = this.calculateNewState(e, u.default.getChannel(this.parentId));
                    return (t !== l || n !== s || a !== i) && (this.removeUserId(e, t), this.addUser(e, l, s, i), !0)
                }
                addUserId(e) {
                    let [t, n, a] = this.calculateNewState(e, u.default.getChannel(this.parentId));
                    this.addUser(e, t, n, a)
                }
                removeUserId(e, t) {
                    if (this.allUserIds.delete(e), null != t && this.removeUserIdFromSection(e, t)) return !0;
                    for (let t in this.sections)
                        if (this.removeUserIdFromSection(e, t)) return !0;
                    return !1
                }
                addUser(e, t, n, a, l) {
                    this.allUserIds.add(e);
                    let s = h.default.getUser(e);
                    if (null == s || "" === s.username) return;
                    !(t in this.sections) && (this.sections[t] = {
                        sectionId: t,
                        usersById: {},
                        userIds: []
                    });
                    let i = this.sections[t];
                    if (i.usersById[e] = {
                            userId: e,
                            displayName: n,
                            canViewChannel: a
                        }, l) i.userIds.push(e);
                    else {
                        let t = this.findUserIdSortedPosition(i, e, n);
                        i.userIds.splice(t, 0, e)
                    }
                    this.version++
                }
                findUserIdSortedPosition(e, t, n) {
                    let {
                        userIds: a,
                        usersById: l
                    } = e;
                    for (let e = 0; e < a.length; e++) {
                        let s = a[e],
                            i = l[s].displayName;
                        if (i === n) {
                            if (t < s) return e
                        } else if (null == i) {
                            if (null != n) return e
                        } else if (null != n && n < i) return e
                    }
                    return a.length
                }
                removeUserIdFromSection(e, t) {
                    let n = this.sections[t];
                    return null != t && e in n.usersById && (delete n.usersById[e], n.userIds = n.userIds.filter(t => t !== e), this.version++, !0)
                }
                findOldState(e) {
                    for (let t in this.sections) {
                        let n = this.sections[t];
                        if (e in n.usersById) {
                            let a = n.usersById[e];
                            return [t, a.displayName, a.canViewChannel]
                        }
                    }
                    return [void 0, void 0, !1]
                }
                calculateNewState(e, t) {
                    var n, a;
                    let l = o.default.getMember(this.guildId, e),
                        s = h.default.getUser(e),
                        i = h.default.getCurrentUser(),
                        r = (null == s ? void 0 : s.id) === (null == i ? void 0 : i.id),
                        u = r ? f.default.getStatus() : c.default.getStatus(e, this.guildId),
                        d = null != s && null != t && m.default.can({
                            permission: C.Permissions.VIEW_CHANNEL,
                            user: s,
                            context: t
                        }),
                        p = u !== C.StatusTypes.OFFLINE && u !== C.StatusTypes.INVISIBLE && u !== C.StatusTypes.UNKNOWN,
                        S = p ? null !== (n = null == l ? void 0 : l.hoistRoleId) && void 0 !== n ? n : "online" : "offline",
                        g = null !== (a = null == l ? void 0 : l.nick) && void 0 !== a ? a : E.default.getName(s);
                    return [S, null == g ? void 0 : g.toLowerCase(), d]
                }
                constructor(e, t, n) {
                    this.guildId = e, this.parentId = t, this.threadId = n, this.version = 0, this.sections = {}, this.allUserIds = new Set
                }
            }

            function _(e) {
                return I(e.user.id)
            }

            function I(e) {
                if (null == e) return !1;
                let t = !1;
                for (let n in S) S[n].updateUserId(e) && (t = !0);
                return t
            }

            function T(e) {
                let {
                    guildId: t
                } = e, n = !1;
                for (let e in S) S[e].guildId === t && (S[e].rebuild(), n = !0);
                return n
            }
            class v extends i.default.Store {
                initialize() {
                    this.waitFor(u.default, o.default, d.default, c.default, f.default, h.default), this.syncWith([d.default], () => {
                        let e = d.default.getSubscribedThreadIds(),
                            t = !1;
                        for (let n in S) !e.has(n) && (delete S[n], t = !0);
                        return t
                    }), this.syncWith([f.default], () => {
                        var e;
                        return I(null === (e = h.default.getCurrentUser()) || void 0 === e ? void 0 : e.id)
                    })
                }
                getMemberListVersion(e) {
                    var t;
                    return null === (t = S[e]) || void 0 === t ? void 0 : t.version
                }
                getMemberListSections(e) {
                    var t;
                    return null === (t = S[e]) || void 0 === t ? void 0 : t.sections
                }
                canUserViewChannel(e, t, n) {
                    var a, l;
                    let s = S[e];
                    if (null == s) return !1;
                    let i = null === (a = s.sections[t]) || void 0 === a ? void 0 : a.usersById[n];
                    return null !== (l = null == i ? void 0 : i.canViewChannel) && void 0 !== l && l
                }
            }
            v.displayName = "ThreadMemberListStore";
            var x = new v(r.default, {
                CONNECTION_OPEN: function() {
                    S = {}
                },
                THREAD_MEMBERS_UPDATE: function(e) {
                    var t, n;
                    if (!(e.id in S)) return !1;
                    null === (t = e.addedMembers) || void 0 === t || t.forEach(t => {
                        let {
                            userId: n
                        } = t;
                        return S[e.id].addUserId(n)
                    }), null === (n = e.removedMemberIds) || void 0 === n || n.forEach(t => S[e.id].removeUserId(t))
                },
                THREAD_UPDATE: function(e) {
                    var t;
                    let {
                        channel: n
                    } = e;
                    if (!(n.id in S) || (null === (t = n.threadMetadata) || void 0 === t ? void 0 : t.archived) !== !0) return !1;
                    delete S[n.id]
                },
                THREAD_DELETE: function(e) {
                    let {
                        channel: t
                    } = e;
                    if (!(t.id in S)) return !1;
                    delete S[t.id]
                },
                CHANNEL_UPDATES: function(e) {
                    let {
                        channels: t
                    } = e, n = new Set(t.map(e => e.id)), a = !1;
                    for (let e in S) n.has(S[e].parentId) && (S[e].rebuild(), a = !0);
                    return a
                },
                THREAD_MEMBER_LIST_UPDATE: function(e) {
                    let {
                        threadId: t,
                        guildId: n,
                        members: a
                    } = e, l = u.default.getChannel(t), s = null == l ? void 0 : l.parent_id;
                    null != s && (S[t] = new g(n, s, t), S[t].rebuild(a.map(e => e.user_id)))
                },
                USER_UPDATE: _,
                PRESENCE_UPDATES: function(e) {
                    let {
                        updates: t
                    } = e;
                    return t.map(e => {
                        let {
                            user: t
                        } = e;
                        return I(t.id)
                    }).some(e => e)
                },
                GUILD_MEMBER_ADD: _,
                GUILD_MEMBER_UPDATE: _,
                GUILD_MEMBER_REMOVE: _,
                PRESENCES_REPLACE: function(e) {
                    let {
                        presences: t
                    } = e, n = l(t).map(e => {
                        var t;
                        return null === (t = e.user) || void 0 === t ? void 0 : t.id
                    }).filter(p.isNotNullish).uniq().value(), a = !1;
                    for (let e in S) S[e].updateMultipleUserIds(n) && (a = !0);
                    return a
                },
                GUILD_MEMBERS_CHUNK: function(e) {
                    let {
                        guildId: t,
                        members: n
                    } = e, a = n.map(e => e.user.id), l = !1;
                    for (let e in S) S[e].updateMultipleUserIds(a, t) && (l = !0);
                    return l
                },
                GUILD_ROLE_UPDATE: T,
                GUILD_ROLE_DELETE: T,
                PASSIVE_UPDATE_V1: function(e) {
                    var t;
                    return null === (t = e.members) || void 0 === t ? void 0 : t.reduce((e, t) => I(t.user.id) || e, !1)
                }
            })