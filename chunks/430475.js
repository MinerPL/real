            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            }), n("222007");
            var i = n("446674"),
                a = n("913144"),
                l = n("692038"),
                s = n("10802"),
                r = n("697218");
            let u = {};

            function o(e) {
                let {
                    threads: t,
                    firstMessages: n
                } = e;
                if (null == n) return !1;
                for (let e of t) u[e.id] = {
                    loaded: !0,
                    firstMessage: null
                };
                for (let e of n) d(e.channel_id, e)
            }

            function d(e, t) {
                let n = null == t ? null : (0, l.createMessageRecord)(t);
                u[e] = {
                    loaded: !0,
                    firstMessage: n
                }
            }

            function c(e) {
                let {
                    type: t,
                    channelId: n,
                    messageId: i,
                    userId: a,
                    emoji: l,
                    optimistic: s,
                    burst: o,
                    reactionType: d
                } = e, c = u[n];
                if (null == c || null == c.firstMessage || i !== c.firstMessage.id) return !1;
                let _ = r.default.getCurrentUser(),
                    f = null != _ && _.id === a;
                if (s && !f) return !1;
                if (u[n] = {
                        ...c
                    }, "MESSAGE_REACTION_ADD" === t) {
                    let {
                        colors: t
                    } = e;
                    u[n].firstMessage = c.firstMessage.addReaction(l, f, t, o, d)
                } else u[n].firstMessage = c.firstMessage.removeReaction(l, f, o, d)
            }
            class _ extends i.default.Store {
                initialize() {
                    this.waitFor(s.default, r.default)
                }
                isLoading(e) {
                    var t;
                    return (null === (t = u[e]) || void 0 === t ? void 0 : t.loaded) !== !0
                }
                getMessage(e) {
                    return !(e in u) && (u[e] = {
                        loaded: !1,
                        firstMessage: null
                    }), u[e]
                }
            }
            _.displayName = "ForumPostMessagesStore";
            var f = new _(a.default, {
                CONNECTION_OPEN: function() {
                    u = {}
                },
                MESSAGE_CREATE: function(e) {
                    if (e.isPushNotification || e.message.id !== e.message.channel_id) return !1;
                    d(e.message.channel_id, e.message)
                },
                MESSAGE_UPDATE: function(e) {
                    if (e.message.id !== e.message.channel_id) return !1;
                    let t = u[e.message.id];
                    if (null == t || null == t.firstMessage) return !1;
                    u[e.message.id] = {
                        ...t,
                        firstMessage: (0, l.updateMessageRecord)(t.firstMessage, e.message)
                    }
                },
                MESSAGE_DELETE: function(e) {
                    if (e.id !== e.channelId) return !1;
                    u[e.channelId] = {
                        loaded: !0,
                        firstMessage: null
                    }
                },
                THREAD_CREATE: function(e) {
                    let t = u[e.channel.id];
                    if (null != t || !s.default.isSubscribedToThreads(e.channel.guild_id)) return !1;
                    u[e.channel.id] = {
                        loaded: !0,
                        firstMessage: null
                    }
                },
                MESSAGE_REACTION_ADD: c,
                MESSAGE_REACTION_REMOVE: c,
                MESSAGE_REACTION_REMOVE_ALL: function(e) {
                    let {
                        channelId: t,
                        messageId: n
                    } = e, i = u[t];
                    if (null == i || null == i.firstMessage || n !== i.firstMessage.id) return !1;
                    u[t] = {
                        ...i,
                        firstMessage: i.firstMessage.set("reactions", [])
                    }
                },
                MESSAGE_REACTION_REMOVE_EMOJI: function(e) {
                    let {
                        channelId: t,
                        messageId: n,
                        emoji: i
                    } = e, a = u[t];
                    if (null == a || null == a.firstMessage || n !== a.firstMessage.id) return !1;
                    u[t] = {
                        ...a,
                        firstMessage: a.firstMessage.removeReactionsForEmoji(i)
                    }
                },
                MESSAGE_REACTION_ADD_MANY: function(e) {
                    let {
                        channelId: t,
                        messageId: n,
                        reactions: i
                    } = e, a = u[t];
                    if (null == a || null == a.firstMessage || n !== a.firstMessage.id) return !1;
                    let l = r.default.getCurrentUser(),
                        s = a.firstMessage.addReactionBatch(i, null == l ? void 0 : l.id);
                    u[t] = {
                        ...a,
                        firstMessage: s
                    }
                },
                LOAD_FORUM_POSTS: function(e) {
                    let {
                        threads: t
                    } = e;
                    for (let e in t) d(e, t[e].first_message)
                },
                LOAD_THREADS_SUCCESS: o,
                LOAD_ARCHIVED_THREADS_SUCCESS: o,
                LOAD_MESSAGES_SUCCESS: function(e) {
                    let {
                        channelId: t,
                        messages: n
                    } = e, i = n[n.length - 1];
                    null != i && i.id === t && (u[t] = {
                        loaded: !0,
                        firstMessage: (0, l.createMessageRecord)(i)
                    })
                }
            })