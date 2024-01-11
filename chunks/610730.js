            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return R
                }
            }), n("222007");
            var i = n("917351"),
                a = n.n(i),
                l = n("446674"),
                s = n("913144"),
                r = n("560208"),
                u = n("692038"),
                o = n("233069"),
                d = n("719926"),
                c = n("766274"),
                _ = n("42203"),
                f = n("377253"),
                h = n("648564"),
                E = n("49111");
            let g = new Set,
                m = {},
                A = {};

            function T(e, t) {
                o.ALL_CHANNEL_TYPES.has(e.type) && p(function(e) {
                    if (!(e.id in m)) {
                        var t;
                        m[e.id] = {
                            guildId: e.guild_id,
                            parentId: e.parent_id,
                            count: null !== (t = e.messageCount) && void 0 !== t ? t : 0,
                            mostRecentRawMessage: null,
                            mostRecentMessage: null
                        }
                    }
                    return m[e.id]
                }(e), t)
            }

            function p(e, t) {
                var n;
                let i = (null !== (n = A[e.parentId]) && void 0 !== n ? n : 0) + 1;
                A[e.parentId] = i, t(e)
            }

            function S(e) {
                var t;
                null === (t = e.threads) || void 0 === t || t.forEach(v)
            }

            function v(e) {
                T(e, t => {
                    var n;
                    null != e.messageCount && (t.count = e.messageCount);
                    let i = null !== (n = t.mostRecentRawMessage) && void 0 !== n ? n : t.mostRecentMessage;
                    null != e.lastMessageId && (null == i ? void 0 : i.id) !== e.lastMessageId && (t.mostRecentRawMessage = null, t.mostRecentMessage = null)
                })
            }

            function M(e) {
                if (null != e && !(e.id in m)) {
                    let t = _.default.getChannel(e.id);
                    if (null != t) return v(t), !0
                }
                return !1
            }

            function C(e) {
                let {
                    channel: t
                } = e;
                v(t)
            }

            function N(e) {
                let {
                    threads: t
                } = e;
                t.forEach(M)
            }
            class O extends l.default.Store {
                initialize() {
                    this.waitFor(_.default, f.default)
                }
                getCount(e) {
                    var t, n;
                    return null !== (n = null === (t = m[e]) || void 0 === t ? void 0 : t.count) && void 0 !== n ? n : null
                }
                getMostRecentMessage(e) {
                    var t, n;
                    let i = m[e];
                    return null == i ? null : (null == i.mostRecentMessage && null != i.mostRecentRawMessage && (i.mostRecentMessage = null !== (t = f.default.getMessage(e, i.mostRecentRawMessage.id)) && void 0 !== t ? t : (0, u.createMessageRecord)(i.mostRecentRawMessage), i.mostRecentRawMessage = null), null !== (n = i.mostRecentMessage) && void 0 !== n ? n : null)
                }
                getChannelThreadsVersion(e) {
                    return A[e]
                }
                getInitialOverlayState() {
                    return m
                }
            }
            O.displayName = "ThreadMessageStore";
            var R = new O(s.default, {
                CONNECTION_OPEN: function(e) {
                    A = {}, g.clear(), e.guilds.forEach(S)
                },
                OVERLAY_INITIALIZE: function(e) {
                    let {
                        threadMessages: t
                    } = e;
                    for (let e in m = {
                            ...t
                        }) {
                        let n = t[e].mostRecentMessage;
                        null != n && (t[e].mostRecentMessage = new d.default({
                            ...n,
                            author: new c.default(n.author)
                        }))
                    }
                },
                GUILD_CREATE: function(e) {
                    let {
                        guild: t
                    } = e;
                    S(t)
                },
                GUILD_DELETE: function(e) {
                    var t;
                    let {
                        guild: n
                    } = e;
                    t = n.id, m = a.omitBy(m, e => {
                        let n = e.guildId === t;
                        return n && delete A[e.parentId], n
                    })
                },
                THREAD_CREATE: C,
                THREAD_UPDATE: C,
                THREAD_LIST_SYNC: function(e) {
                    let {
                        threads: t,
                        mostRecentMessages: n
                    } = e;
                    t.forEach(v), null == n || n.forEach(e => {
                        let t = _.default.getChannel(e.channel_id);
                        null != t && e.type !== E.MessageTypes.THREAD_STARTER_MESSAGE && T(t, t => {
                            t.mostRecentRawMessage = e, t.mostRecentMessage = null
                        })
                    })
                },
                LOAD_THREADS_SUCCESS: N,
                LOAD_ARCHIVED_THREADS_SUCCESS: N,
                SEARCH_FINISH: function(e) {
                    let {
                        messages: t,
                        threads: n
                    } = e;
                    for (let e of t)
                        for (let t of e) M(t.thread);
                    n.forEach(M)
                },
                THREAD_DELETE: function(e) {
                    let {
                        channel: t
                    } = e;
                    delete m[t.id]
                },
                CHANNEL_DELETE: function(e) {
                    var t;
                    let {
                        channel: n
                    } = e;
                    t = n.id, m = a.omitBy(m, e => e.parentId === t), delete A[t]
                },
                MESSAGE_CREATE: function(e) {
                    let {
                        message: t,
                        optimistic: n,
                        isPushNotification: i,
                        sendMessageOptions: a
                    } = e;
                    if (n || i || null != a) return !1;
                    let l = _.default.getChannel(t.channel_id);
                    if (null == l || !o.THREAD_CHANNEL_TYPES.has(l.type) || ! function(e, t) {
                            return !(t.type === E.MessageTypes.THREAD_STARTER_MESSAGE || e.isForumPost() && t.id === e.id) && !0
                        }(l, t)) return !1;
                    T(l, e => {
                        e.count = Math.min(e.count + 1, h.MAX_THREAD_MESSAGE_COUNT), e.mostRecentRawMessage = t, e.mostRecentMessage = null
                    })
                },
                MESSAGE_UPDATE: function(e) {
                    var t;
                    let {
                        message: n
                    } = e, i = m[n.channel_id], a = null !== (t = null == i ? void 0 : i.mostRecentRawMessage) && void 0 !== t ? t : null == i ? void 0 : i.mostRecentMessage;
                    if (null == i || null == a || a.id !== n.id) return !1;
                    p(i, e => {
                        null != e.mostRecentMessage && (e.mostRecentMessage = (0, u.updateMessageRecord)(e.mostRecentMessage, n)), null != e.mostRecentRawMessage && (e.mostRecentRawMessage = (0, u.updateServerMessage)(e.mostRecentRawMessage, n))
                    })
                },
                MESSAGE_DELETE: function(e) {
                    let {
                        id: t,
                        channelId: n
                    } = e, i = m[n];
                    if (null == i) return !1;
                    let a = n !== t,
                        l = !g.has(t);
                    p(i, e => {
                        var n;
                        let i = null !== (n = e.mostRecentRawMessage) && void 0 !== n ? n : e.mostRecentMessage;
                        null != i && i.id === t && (e.mostRecentMessage = null, e.mostRecentRawMessage = null), e.count = a && l ? Math.max(e.count - 1, 0) : e.count, g.add(t)
                    })
                },
                MESSAGE_DELETE_BULK: function(e) {
                    let {
                        ids: t,
                        channelId: n
                    } = e, i = m[n];
                    if (null == i) return !1;
                    let a = t.filter(e => {
                        let t = n !== e,
                            i = !g.has(e);
                        return t && i
                    }).length;
                    a > 0 && p(i, e => {
                        var n;
                        let i = null !== (n = e.mostRecentRawMessage) && void 0 !== n ? n : e.mostRecentMessage;
                        null != i && t.includes(i.id) && (e.mostRecentMessage = null, e.mostRecentRawMessage = null), e.count -= a, t.forEach(e => g.add(e))
                    })
                },
                LOAD_MESSAGES_SUCCESS: function(e) {
                    let t = !1;
                    for (let n of e.messages) t = M(n.thread) || t;
                    if (e.isAfter || e.isBefore || e.hasMoreAfter) return t;
                    let n = _.default.getChannel(e.channelId);
                    if (null == n || !o.THREAD_CHANNEL_TYPES.has(n.type)) return t;
                    T(n, t => {
                        if (0 === e.messages.length) t.mostRecentRawMessage = null, t.mostRecentMessage = null, t.count = 0;
                        else {
                            var n;
                            let i = null !== (n = e.messages[0]) && void 0 !== n ? n : null;
                            t.count = e.messages.length >= h.MAX_THREAD_MESSAGE_COUNT ? h.MAX_THREAD_MESSAGE_COUNT : t.count, (null == i ? void 0 : i.type) !== E.MessageTypes.THREAD_STARTER_MESSAGE && (t.mostRecentRawMessage = i, t.mostRecentMessage = null)
                        }
                    })
                },
                GUILD_FEED_FETCH_SUCCESS: function(e) {
                    let {
                        data: t
                    } = e, n = !1;
                    for (let e of (0, r.getThreadsFromGuildFeedFetch)(t)) n = M(e) || n;
                    return n
                }
            })