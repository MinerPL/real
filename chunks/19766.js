            "use strict";
            n.r(t), n.d(t, {
                EVERYONE_ID: function() {
                    return N
                },
                EVERYONE_CHANNEL_ID: function() {
                    return C
                },
                MemberListRowTypes: function() {
                    return i
                },
                default: function() {
                    return H
                }
            }), n("808653"), n("424973"), n("222007");
            var i, l, a = n("917351"),
                s = n.n(a),
                r = n("210696"),
                u = n.n(r),
                d = n("316693"),
                o = n("446674"),
                c = n("913144"),
                _ = n("991170"),
                f = n("373469"),
                h = n("271938"),
                E = n("42203"),
                g = n("525065"),
                m = n("26989"),
                A = n("305961"),
                T = n("824563"),
                p = n("101125"),
                S = n("697218"),
                M = n("49111"),
                v = n("782340");
            let N = "everyone",
                C = 0;

            function O(e, t, n, i) {
                switch (t) {
                    case M.StatusTypes.ONLINE:
                    case M.StatusTypes.OFFLINE:
                    case M.StatusTypes.UNKNOWN:
                        return {
                            type: "GROUP", key: t, id: t, get title() {
                                switch (t) {
                                    case M.StatusTypes.ONLINE:
                                        return v.default.Messages.STATUS_ONLINE;
                                    case M.StatusTypes.OFFLINE:
                                        return v.default.Messages.STATUS_OFFLINE;
                                    default:
                                        return v.default.Messages.STATUS_UNKNOWN
                                }
                            }, count: n, index: i
                        };
                    default:
                        let l = A.default.getGuild(e),
                            a = null != l ? l.getRole(t) : null;
                        return {
                            type: "GROUP", key: t, id: t, title: null != a ? a.name : "", count: n, index: i
                        }
                }
            }

            function R(e, t, n) {
                let i = n === h.default.getId(),
                    l = T.default.isMobileOnline(n),
                    a = i ? p.default.getStatus() : T.default.getStatus(n, e),
                    s = i ? p.default.getActivities() : T.default.getActivities(n, e),
                    r = f.default.getStreamForUser(n, e),
                    u = S.default.getUser(n);
                return null == u ? null : {
                    type: "MEMBER",
                    ...m.default.getMember(e, n),
                    user: u,
                    status: a,
                    activities: s,
                    applicationStream: r,
                    isOwner: t === n,
                    isMobileOnline: l
                }
            }

            function I(e) {
                let t = E.default.getChannel(e);
                return null == t ? N : null == t.memberListId ? function(e) {
                    return _.default.canEveryone(M.Permissions.VIEW_CHANNEL, e) ? N : u.v3(s(e.permissionOverwrites).reduce((e, t) => {
                        let {
                            id: n,
                            allow: i,
                            deny: l
                        } = t;
                        return d.default.has(i, M.Permissions.VIEW_CHANNEL) ? e.push("allow:".concat(n)) : d.default.has(l, M.Permissions.VIEW_CHANNEL) && e.push("deny:".concat(n)), e
                    }, []).sort().join(",")).toString()
                }(t) : t.memberListId
            }(l = i || (i = {})).GROUP = "GROUP", l.MEMBER = "MEMBER";
            class D {
                updateOwnerId() {
                    let e = A.default.getGuild(this.guildId);
                    if (null == e) return !1;
                    let t = _.default.getGuildVisualOwnerId(e);
                    return this.ownerId !== t && (this.ownerId = t, !0)
                }
                setGroups(e) {
                    let t = 0;
                    this.groups = e.map(e => {
                        var n;
                        let i = t,
                            l = Math.max(0, null !== (n = e.count) && void 0 !== n ? n : 0);
                        return t += l + 1, O(this.guildId, e.id, l, i)
                    }), this.rows.length = t
                }
                sync(e, t) {
                    let [n] = e;
                    t.forEach((e, t) => this.update(n + t, e))
                }
                invalidate(e) {
                    let [t, n] = e;
                    for (let e = t; e <= n; e++) {
                        let t = this.rows[e];
                        if (null == t) break;
                        delete this.rows[e], "MEMBER" === t.type && delete this.members[t.user.id]
                    }
                    this.version++
                }
                insert(e, t) {
                    let {
                        group: n,
                        member: i
                    } = t;
                    if (null != n) this.rows.splice(e, 0, O(this.guildId, n.id, n.count));
                    else if (null != i) {
                        let t = R(this.guildId, this.ownerId, i.user.id);
                        if (null == t) return;
                        this.rows.splice(e, 0, t), this.members[i.user.id] = t
                    }
                    this.version++
                }
                update(e, t) {
                    let {
                        group: n,
                        member: i
                    } = t, l = this.rows[e];
                    if (null != l && "MEMBER" === l.type && delete this.members[l.user.id], null != n) this.rows[e] = O(this.guildId, n.id, n.count);
                    else if (null != i) {
                        let t = R(this.guildId, this.ownerId, i.user.id);
                        if (null == t) return;
                        this.rows[e] = t, this.members[i.user.id] = t
                    }
                    this.version++
                }
                delete(e) {
                    let t = this.rows[e];
                    null != t && ("MEMBER" === t.type && delete this.members[t.user.id], this.rows.splice(e, 1), this.version++)
                }
                rebuildMember(e) {
                    let t = this.members[e];
                    null != t && (Object.assign(t, R(this.guildId, this.ownerId, e)), this.version++)
                }
                rebuildMembers() {
                    s.forEach(this.members, (e, t) => {
                        this.rebuildMember(t)
                    })
                }
                constructor(e, t) {
                    this.rows = [], this.groups = [], this.members = {}, this.version = 0, this.guildId = e, this.listId = t, this.updateOwnerId()
                }
            }
            let b = new class e {
                get(e, t) {
                    let n = this._guildLists[e];
                    null == n && (n = this._guildLists[e] = {});
                    let i = n[t];
                    return null == i && ((i = new D(e, t)).setGroups([{
                        id: M.StatusTypes.UNKNOWN,
                        count: 0
                    }]), n[t] = i), i
                }
                forEach(e, t) {
                    if (null == e) s.forEach(this._guildLists, e => {
                        s.forEach(e, t)
                    });
                    else {
                        let n = this._guildLists[e];
                        null != n && s.forEach(n, t)
                    }
                }
                delete(e) {
                    delete this._guildLists[e]
                }
                reset() {
                    this._guildLists = {}
                }
                constructor() {
                    this._guildLists = {}
                }
            };

            function L() {
                b.reset()
            }
            let y = [];

            function P() {
                let e = f.default.getAllApplicationStreams(),
                    t = y.concat(e);
                y = e, t.forEach(e => {
                    b.forEach(null, t => t.rebuildMember(e.ownerId))
                })
            }

            function F() {
                let e = h.default.getId();
                b.forEach(null, t => t.rebuildMember(e))
            }
            class U extends o.default.Store {
                initialize() {
                    this.waitFor(S.default, A.default, E.default, m.default, T.default, p.default, h.default, g.default, f.default), this.syncWith([p.default], F), this.syncWith([f.default], P)
                }
                getProps(e, t) {
                    let n = b.get(e, I(t));
                    return {
                        listId: "".concat(n.guildId, ":").concat(n.listId),
                        groups: n.groups,
                        rows: n.rows,
                        version: n.version
                    }
                }
                getRows(e, t) {
                    let n = b.get(e, I(t));
                    return n.rows
                }
            }
            U.displayName = "ChannelMemberStore";
            var H = new U(c.default, {
                CONNECTION_OPEN: L,
                OVERLAY_INITIALIZE: L,
                GUILD_MEMBER_LIST_UPDATE: function(e) {
                    let t = b.get(e.guildId, e.id);
                    e.ops.forEach(e => {
                        switch (e.op) {
                            case "SYNC":
                                t.sync(e.range, e.items);
                                break;
                            case "INVALIDATE":
                                t.invalidate(e.range);
                                break;
                            case "INSERT":
                                t.insert(e.index, e.item);
                                break;
                            case "UPDATE":
                                t.update(e.index, e.item);
                                break;
                            case "DELETE":
                                t.delete(e.index)
                        }
                    }), t.setGroups(e.groups)
                },
                GUILD_UPDATE: function(e) {
                    let {
                        guild: t
                    } = e;
                    b.forEach(t.id, e => {
                        e.updateOwnerId() && e.rebuildMembers()
                    })
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    b.delete(t.id)
                },
                GUILD_ROLE_UPDATE: function(e) {
                    let {
                        guildId: t
                    } = e;
                    b.forEach(t, e => e.rebuildMembers())
                },
                GUILD_MEMBER_UPDATE: function(e) {
                    let {
                        guildId: t,
                        user: n
                    } = e;
                    b.forEach(t, e => e.rebuildMember(n.id))
                },
                CHANNEL_UPDATES: function() {
                    return !0
                }
            })