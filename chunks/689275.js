            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            }), n("222007");
            var i = n("917351"),
                a = n.n(i),
                l = n("446674"),
                s = n("913144"),
                r = n("233069"),
                u = n("42203");
            let o = {},
                d = new Set;

            function c(e) {
                return {
                    id: e.id,
                    parentId: e.parent_id
                }
            }

            function _(e) {
                e in o && delete o[e]
            }

            function E(e) {
                null != e.threads && e.threads.length > 0 && (o[e.id] = {}, e.threads.filter(e => r.ALL_CHANNEL_TYPES.has(e.type)).forEach(t => f(e.id, t))), e.hasThreadsSubscription && d.add(e.id)
            }

            function f(e, t) {
                let n = o[e],
                    i = t.parent_id;
                !(i in n) && (n[i] = {}), o[e][i][t.id] = c(t)
            }

            function h(e) {
                var t, n;
                let {
                    channel: i
                } = e;
                if (!r.ALL_CHANNEL_TYPES.has(i.type)) return !1;
                if ((null === (t = i.threadMetadata) || void 0 === t ? void 0 : t.archived) === !0) return p(i);
                {
                    let e = null !== (n = o[i.guild_id]) && void 0 !== n ? n : {};
                    o[i.guild_id] = {
                        ...e,
                        [i.parent_id]: {
                            ...e[i.parent_id],
                            [i.id]: c(i)
                        }
                    }
                }
            }

            function p(e) {
                let {
                    guild_id: t,
                    parent_id: n,
                    id: i
                } = e;
                if (null == t || null == n || !(t in o) || !(n in o[t]) || !(i in o[t][n])) return !1;
                o[t] = {
                    ...o[t],
                    [n]: {
                        ...o[t][n]
                    }
                }, delete o[t][n][i], a.isEmpty(o[t][n]) && delete o[t][n]
            }
            let T = {};
            class C extends l.default.Store {
                initialize() {
                    this.waitFor(u.default)
                }
                isActive(e, t, n) {
                    return null != e && null != this.getThreadsForParent(e, t)[n]
                }
                getThreadsForGuild(e) {
                    var t;
                    return null !== (t = o[e]) && void 0 !== t ? t : T
                }
                getThreadsForParent(e, t) {
                    var n;
                    return null !== (n = this.getThreadsForGuild(e)[t]) && void 0 !== n ? n : T
                }
                hasThreadsForChannel(e, t) {
                    return !a.isEmpty(this.getThreadsForParent(e, t))
                }
                forEachGuild(e) {
                    for (let t in o) e(t, o[t])
                }
                hasLoaded(e) {
                    return d.has(e)
                }
            }
            C.displayName = "ActiveThreadsStore";
            var m = new C(s.default, {
                CONNECTION_OPEN: function(e) {
                    o = {}, d.clear(), e.guilds.forEach(e => {
                        E(e)
                    })
                },
                OVERLAY_INITIALIZE: function(e) {
                    let {
                        channels: t
                    } = e;
                    o = {}, a(t).filter(e => r.THREAD_CHANNEL_TYPES.has(e.type)).groupBy("guild_id").forEach((e, t) => {
                        o[t] = {}, e.forEach(e => f(t, e))
                    })
                },
                GUILD_CREATE: function(e) {
                    let {
                        guild: t
                    } = e;
                    _(t.id), E(t)
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    _(t.id)
                },
                THREAD_CREATE: h,
                THREAD_UPDATE: h,
                THREAD_LIST_SYNC: function(e) {
                    let {
                        guildId: t,
                        threads: n,
                        channelIds: i
                    } = e;
                    for (let e in null == i && d.add(t), o[t] = {
                            ...o[t]
                        }, o[t]) o[t][e] = {
                        ...o[t][e]
                    };
                    n.forEach(e => f(t, e))
                },
                THREAD_DELETE: function(e) {
                    let {
                        channel: t
                    } = e;
                    return p(t)
                },
                CHANNEL_DELETE: function(e) {
                    let {
                        channel: t
                    } = e;
                    if (null == t.guild_id || !(t.guild_id in o)) return !1;
                    o[t.guild_id] = {
                        ...o[t.guild_id]
                    }, delete o[t.guild_id][t.id]
                }
            })