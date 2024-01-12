            "use strict";
            n.r(t), n.d(t, {
                EVERYONE_ID: function() {
                    return C
                },
                MemberListRowTypes: function() {
                    return l
                },
                default: function() {
                    return V
                }
            }), n("808653"), n("424973"), n("222007");
            var l, i, r = n("917351"),
                s = n.n(r),
                a = n("210696"),
                u = n.n(a),
                o = n("316693"),
                d = n("446674"),
                c = n("913144"),
                f = n("991170"),
                h = n("373469"),
                g = n("271938"),
                m = n("42203"),
                p = n("525065"),
                I = n("26989"),
                v = n("305961"),
                E = n("824563"),
                _ = n("101125"),
                T = n("697218"),
                N = n("49111"),
                S = n("782340");
            let C = "everyone";

            function w(e, t, n, l) {
                switch (t) {
                    case N.StatusTypes.ONLINE:
                    case N.StatusTypes.OFFLINE:
                    case N.StatusTypes.UNKNOWN:
                        return {
                            type: "GROUP", key: t, id: t, get title() {
                                switch (t) {
                                    case N.StatusTypes.ONLINE:
                                        return S.default.Messages.STATUS_ONLINE;
                                    case N.StatusTypes.OFFLINE:
                                        return S.default.Messages.STATUS_OFFLINE;
                                    default:
                                        return S.default.Messages.STATUS_UNKNOWN
                                }
                            }, count: n, index: l
                        };
                    default:
                        let i = v.default.getGuild(e),
                            r = null != i ? i.getRole(t) : null;
                        return {
                            type: "GROUP", key: t, id: t, title: null != r ? r.name : "", count: n, index: l
                        }
                }
            }

            function x(e, t, n) {
                let l = n === g.default.getId(),
                    i = E.default.isMobileOnline(n),
                    r = l ? _.default.getStatus() : E.default.getStatus(n, e),
                    s = l ? _.default.getActivities() : E.default.getActivities(n, e),
                    a = h.default.getStreamForUser(n, e),
                    u = T.default.getUser(n);
                return null == u ? null : {
                    type: "MEMBER",
                    ...I.default.getMember(e, n),
                    user: u,
                    status: r,
                    activities: s,
                    applicationStream: a,
                    isOwner: t === n,
                    isMobileOnline: i
                }
            }

            function A(e) {
                let t = m.default.getChannel(e);
                return null == t ? C : null == t.memberListId ? function(e) {
                    return f.default.canEveryone(N.Permissions.VIEW_CHANNEL, e) ? C : u.v3(s(e.permissionOverwrites).reduce((e, t) => {
                        let {
                            id: n,
                            allow: l,
                            deny: i
                        } = t;
                        return o.default.has(l, N.Permissions.VIEW_CHANNEL) ? e.push("allow:".concat(n)) : o.default.has(i, N.Permissions.VIEW_CHANNEL) && e.push("deny:".concat(n)), e
                    }, []).sort().join(",")).toString()
                }(t) : t.memberListId
            }(i = l || (l = {})).GROUP = "GROUP", i.MEMBER = "MEMBER";
            class M {
                updateOwnerId() {
                    let e = v.default.getGuild(this.guildId);
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
                        return t += i + 1, w(this.guildId, e.id, i, l)
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
                    if (null != n) this.rows.splice(e, 0, w(this.guildId, n.id, n.count));
                    else if (null != l) {
                        let t = x(this.guildId, this.ownerId, l.user.id);
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
                    if (null != i && "MEMBER" === i.type && delete this.members[i.user.id], null != n) this.rows[e] = w(this.guildId, n.id, n.count);
                    else if (null != l) {
                        let t = x(this.guildId, this.ownerId, l.user.id);
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
                    null != t && (Object.assign(t, x(this.guildId, this.ownerId, e)), this.version++)
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
            let L = new class e {
                get(e, t) {
                    let n = this._guildLists[e];
                    null == n && (n = this._guildLists[e] = {});
                    let l = n[t];
                    return null == l && ((l = new M(e, t)).setGroups([{
                        id: N.StatusTypes.UNKNOWN,
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

            function y() {
                L.reset()
            }
            let R = [];

            function b() {
                let e = h.default.getAllApplicationStreams(),
                    t = R.concat(e);
                R = e, t.forEach(e => {
                    L.forEach(null, t => t.rebuildMember(e.ownerId))
                })
            }

            function O() {
                let e = g.default.getId();
                L.forEach(null, t => t.rebuildMember(e))
            }
            class U extends d.default.Store {
                initialize() {
                    this.waitFor(T.default, v.default, m.default, I.default, E.default, _.default, g.default, p.default, h.default), this.syncWith([_.default], O), this.syncWith([h.default], b)
                }
                getProps(e, t) {
                    let n = L.get(e, A(t));
                    return {
                        listId: "".concat(n.guildId, ":").concat(n.listId),
                        groups: n.groups,
                        rows: n.rows,
                        version: n.version
                    }
                }
                getRows(e, t) {
                    let n = L.get(e, A(t));
                    return n.rows
                }
            }
            U.displayName = "ChannelMemberStore";
            var V = new U(c.default, {
                CONNECTION_OPEN: y,
                OVERLAY_INITIALIZE: y,
                GUILD_MEMBER_LIST_UPDATE: function(e) {
                    let t = L.get(e.guildId, e.id);
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
                    L.forEach(t.id, e => {
                        e.updateOwnerId() && e.rebuildMembers()
                    })
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    L.delete(t.id)
                },
                GUILD_ROLE_UPDATE: function(e) {
                    let {
                        guildId: t
                    } = e;
                    L.forEach(t, e => e.rebuildMembers())
                },
                GUILD_MEMBER_UPDATE: function(e) {
                    let {
                        guildId: t,
                        user: n
                    } = e;
                    L.forEach(t, e => e.rebuildMember(n.id))
                },
                CHANNEL_UPDATES: function() {
                    return !0
                }
            })