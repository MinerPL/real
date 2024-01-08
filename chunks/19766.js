            "use strict";
            n.r(t), n.d(t, {
                EVERYONE_ID: function() {
                    return A
                },
                MemberListRowTypes: function() {
                    return l
                },
                default: function() {
                    return P
                }
            }), n("808653"), n("424973"), n("222007");
            var l, i, r = n("917351"),
                s = n.n(r),
                a = n("210696"),
                o = n.n(a),
                u = n("316693"),
                d = n("446674"),
                c = n("913144"),
                f = n("991170"),
                E = n("373469"),
                _ = n("271938"),
                I = n("42203"),
                h = n("525065"),
                g = n("26989"),
                p = n("305961"),
                m = n("824563"),
                N = n("101125"),
                S = n("697218"),
                T = n("49111"),
                v = n("782340");
            let A = "everyone";

            function R(e, t, n, l) {
                switch (t) {
                    case T.StatusTypes.ONLINE:
                    case T.StatusTypes.OFFLINE:
                    case T.StatusTypes.UNKNOWN:
                        return {
                            type: "GROUP", key: t, id: t, get title() {
                                switch (t) {
                                    case T.StatusTypes.ONLINE:
                                        return v.default.Messages.STATUS_ONLINE;
                                    case T.StatusTypes.OFFLINE:
                                        return v.default.Messages.STATUS_OFFLINE;
                                    default:
                                        return v.default.Messages.STATUS_UNKNOWN
                                }
                            }, count: n, index: l
                        };
                    default:
                        let i = p.default.getGuild(e),
                            r = null != i ? i.getRole(t) : null;
                        return {
                            type: "GROUP", key: t, id: t, title: null != r ? r.name : "", count: n, index: l
                        }
                }
            }

            function C(e, t, n) {
                let l = n === _.default.getId(),
                    i = m.default.isMobileOnline(n),
                    r = l ? N.default.getStatus() : m.default.getStatus(n, e),
                    s = l ? N.default.getActivities() : m.default.getActivities(n, e),
                    a = E.default.getStreamForUser(n, e),
                    o = S.default.getUser(n);
                return null == o ? null : {
                    type: "MEMBER",
                    ...g.default.getMember(e, n),
                    user: o,
                    status: r,
                    activities: s,
                    applicationStream: a,
                    isOwner: t === n,
                    isMobileOnline: i
                }
            }

            function L(e) {
                let t = I.default.getChannel(e);
                return null == t ? A : null == t.memberListId ? function(e) {
                    return f.default.canEveryone(T.Permissions.VIEW_CHANNEL, e) ? A : o.v3(s(e.permissionOverwrites).reduce((e, t) => {
                        let {
                            id: n,
                            allow: l,
                            deny: i
                        } = t;
                        return u.default.has(l, T.Permissions.VIEW_CHANNEL) ? e.push("allow:".concat(n)) : u.default.has(i, T.Permissions.VIEW_CHANNEL) && e.push("deny:".concat(n)), e
                    }, []).sort().join(",")).toString()
                }(t) : t.memberListId
            }(i = l || (l = {})).GROUP = "GROUP", i.MEMBER = "MEMBER";
            class M {
                updateOwnerId() {
                    let e = p.default.getGuild(this.guildId);
                    if (null == e) return !1;
                    let t = f.default.getGuildVisualOwnerId(e);
                    return this.ownerId !== t && (this.ownerId = t, !0)
                }
                setGroups(e) {
                    let t = 0;
                    this.groups = e.map(e => {
                        var n;
                        let l = t,
                            i = Math.max(0, null !== (n = e.count) && void 0 !== n ? n : 0);
                        return t += i + 1, R(this.guildId, e.id, i, l)
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
                        member: l
                    } = t;
                    if (null != n) this.rows.splice(e, 0, R(this.guildId, n.id, n.count));
                    else if (null != l) {
                        let t = C(this.guildId, this.ownerId, l.user.id);
                        if (null == t) return;
                        this.rows.splice(e, 0, t), this.members[l.user.id] = t
                    }
                    this.version++
                }
                update(e, t) {
                    let {
                        group: n,
                        member: l
                    } = t, i = this.rows[e];
                    if (null != i && "MEMBER" === i.type && delete this.members[i.user.id], null != n) this.rows[e] = R(this.guildId, n.id, n.count);
                    else if (null != l) {
                        let t = C(this.guildId, this.ownerId, l.user.id);
                        if (null == t) return;
                        this.rows[e] = t, this.members[l.user.id] = t
                    }
                    this.version++
                }
                delete(e) {
                    let t = this.rows[e];
                    null != t && ("MEMBER" === t.type && delete this.members[t.user.id], this.rows.splice(e, 1), this.version++)
                }
                rebuildMember(e) {
                    let t = this.members[e];
                    null != t && (Object.assign(t, C(this.guildId, this.ownerId, e)), this.version++)
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
            let O = new class e {
                get(e, t) {
                    let n = this._guildLists[e];
                    null == n && (n = this._guildLists[e] = {});
                    let l = n[t];
                    return null == l && ((l = new M(e, t)).setGroups([{
                        id: T.StatusTypes.UNKNOWN,
                        count: 0
                    }]), n[t] = l), l
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

            function D() {
                O.reset()
            }
            let U = [];

            function y() {
                let e = E.default.getAllApplicationStreams(),
                    t = U.concat(e);
                U = e, t.forEach(e => {
                    O.forEach(null, t => t.rebuildMember(e.ownerId))
                })
            }

            function x() {
                let e = _.default.getId();
                O.forEach(null, t => t.rebuildMember(e))
            }
            class w extends d.default.Store {
                initialize() {
                    this.waitFor(S.default, p.default, I.default, g.default, m.default, N.default, _.default, h.default, E.default), this.syncWith([N.default], x), this.syncWith([E.default], y)
                }
                getProps(e, t) {
                    let n = O.get(e, L(t));
                    return {
                        listId: "".concat(n.guildId, ":").concat(n.listId),
                        groups: n.groups,
                        rows: n.rows,
                        version: n.version
                    }
                }
                getRows(e, t) {
                    let n = O.get(e, L(t));
                    return n.rows
                }
            }
            w.displayName = "ChannelMemberStore";
            var P = new w(c.default, {
                CONNECTION_OPEN: D,
                OVERLAY_INITIALIZE: D,
                GUILD_MEMBER_LIST_UPDATE: function(e) {
                    let t = O.get(e.guildId, e.id);
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
                    O.forEach(t.id, e => {
                        e.updateOwnerId() && e.rebuildMembers()
                    })
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    O.delete(t.id)
                },
                GUILD_ROLE_UPDATE: function(e) {
                    let {
                        guildId: t
                    } = e;
                    O.forEach(t, e => e.rebuildMembers())
                },
                GUILD_MEMBER_UPDATE: function(e) {
                    let {
                        guildId: t,
                        user: n
                    } = e;
                    O.forEach(t, e => e.rebuildMember(n.id))
                },
                CHANNEL_UPDATES: function() {
                    return !0
                }
            })