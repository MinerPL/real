            "use strict";
            n.r(t), n.d(t, {
                ReferencedMessageState: function() {
                    return i
                },
                default: function() {
                    return y
                }
            }), n("222007"), n("424973");
            var i, a, l = n("693566"),
                s = n.n(l),
                r = n("446674"),
                u = n("913144"),
                o = n("447435"),
                d = n("560208"),
                c = n("692038"),
                _ = n("42203"),
                E = n("377253"),
                f = n("49111");
            (a = i || (i = {}))[a.LOADED = 0] = "LOADED", a[a.NOT_LOADED = 1] = "NOT_LOADED", a[a.DELETED = 2] = "DELETED";
            let h = Object.freeze({
                    state: 1
                }),
                p = new Set;
            class T {
                handleCacheDisposed(e, t) {
                    this._cachedMessageIds.has(e) && (this._cachedMessageIds = new Set(this._cachedMessageIds), this._cachedMessageIds.delete(e))
                }
                set(e, t) {
                    this._cachedMessages.set(e, t), !this._cachedMessageIds.has(e) && (this._cachedMessageIds = new Set(this._cachedMessageIds), this._cachedMessageIds.add(e))
                }
                has(e) {
                    return this._cachedMessageIds.has(e)
                }
                get(e) {
                    return this._cachedMessages.get(e)
                }
                getCachedMessageIds() {
                    return this._cachedMessageIds
                }
                constructor() {
                    this._cachedMessages = new s({
                        max: 100,
                        dispose: (e, t) => this.handleCacheDisposed(e, t)
                    }), this._cachedMessageIds = new Set
                }
            }
            let C = new class e {
                has(e, t) {
                    var n, i;
                    return null !== (i = null === (n = this._channelCaches.get(e)) || void 0 === n ? void 0 : n.has(t)) && void 0 !== i && i
                }
                get(e, t) {
                    var n;
                    return null === (n = this._channelCaches.get(e)) || void 0 === n ? void 0 : n.get(t)
                }
                set(e, t, n) {
                    let i = this._channelCaches.get(e);
                    null == i && (i = new T, this._channelCaches.set(e, i)), i.set(t, n)
                }
                updateExistingMessageIfCached(e) {
                    let t = this._channelCaches.get(e.channel_id);
                    return !!(null != t && t.has(e.id)) && (t.set(e.id, {
                        state: 0,
                        message: (0, c.createMessageRecord)(e)
                    }), !0)
                }
                deleteChannelCache(e) {
                    return this._channelCaches.delete(e)
                }
                retainWhere(e) {
                    let t = [];
                    for (let [n] of this._channelCaches) !e(n) && t.push(n);
                    for (let e of t) this.deleteChannelCache(e);
                    return t.length
                }
                getCachedMessageIdsForChannel(e) {
                    let t = this._channelCaches.get(e);
                    return null == t ? null : t.getCachedMessageIds()
                }
                clear() {
                    this._channelCaches.clear()
                }
                constructor() {
                    this._channelCaches = new Map
                }
            };

            function m(e) {
                let t = !1;
                if (C.updateExistingMessageIfCached(e) && (t = !0), f.MessageTypesWithLazyLoadedReferences.has(e.type)) {
                    let n = e.message_reference;
                    if (null == n) return t;
                    let i = n.message_id;
                    if (null == i) return t;
                    if ("referenced_message" in e) {
                        let t = e.referenced_message;
                        null != t ? (C.set(t.channel_id, t.id, {
                            state: 0,
                            message: (0, c.createMessageRecord)(t)
                        }), e.type === f.MessageTypes.THREAD_STARTER_MESSAGE && m(t)) : C.set(e.channel_id, i, {
                            state: 2
                        })
                    } else {
                        let e = E.default.getMessage(n.channel_id, i);
                        null != e ? C.set(n.channel_id, i, {
                            state: 0,
                            message: e
                        }) : C.set(n.channel_id, i, h)
                    }
                    t = !0
                }
                return t
            }

            function S(e, t) {
                let n = !1;
                for (let i of e) n = !1 !== t(i) || n;
                return n
            }

            function I(e) {
                let {
                    messages: t
                } = e;
                return S(t, e => m(e))
            }

            function g(e) {
                return C.deleteChannelCache(e.channel.id)
            }

            function A(e, t) {
                if (!C.has(e, t)) return !1;
                C.set(e, t, {
                    state: 2
                })
            }

            function N() {
                C.clear()
            }

            function O(e) {
                let {
                    firstMessages: t
                } = e;
                return null != t && S(t, e => m(e))
            }
            class R extends r.default.Store {
                initialize() {
                    this.waitFor(E.default, _.default)
                }
                getMessageByReference(e) {
                    let t;
                    return null != e && (t = C.get(e.channel_id, e.message_id)), null != t ? t : h
                }
                getMessage(e, t) {
                    var n;
                    return null !== (n = C.get(e, t)) && void 0 !== n ? n : h
                }
                getReplyIdsForChannel(e) {
                    let t;
                    return null != e && (t = C.getCachedMessageIdsForChannel(e)), null != t ? t : p
                }
            }
            R.displayName = "ReferencedMessageStore";
            var y = new R(u.default, {
                CACHE_LOADED: function(e) {
                    let {
                        messages: t
                    } = e;
                    return S(Object.values(t), e => S(Object.values(e), e => m(e)))
                },
                LOCAL_MESSAGES_LOADED: I,
                LOAD_MESSAGES_SUCCESS: I,
                LOAD_MESSAGES_AROUND_SUCCESS: I,
                SEARCH_FINISH: function(e) {
                    let {
                        messages: t
                    } = e;
                    return S(t, e => S(e, e => m(e)))
                },
                GUILD_FEED_FETCH_SUCCESS: function(e) {
                    let {
                        data: t
                    } = e, n = (0, d.getMessagesFromGuildFeedFetch)(t);
                    return S(n, e => m(e))
                },
                LOAD_THREADS_SUCCESS: O,
                LOAD_ARCHIVED_THREADS_SUCCESS: O,
                MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: function(e) {
                    let {
                        messageId: t,
                        channelId: n
                    } = e;
                    if (!C.has(n, t)) return !1;
                    let i = C.get(n, t);
                    if (null == i || 0 !== i.state) return !1;
                    C.set(n, t, {
                        state: 0,
                        message: (0, o.handleExplicitMediaScanTimeoutForMessage)(i.message)
                    })
                },
                LOAD_FORUM_POSTS: function(e) {
                    let {
                        threads: t
                    } = e;
                    return S(Object.values(t), e => {
                        let {
                            first_message: t
                        } = e;
                        return null != t && m(t)
                    })
                },
                MESSAGE_CREATE: function(e) {
                    let {
                        message: t
                    } = e;
                    return !!E.default.getMessages(t.channel_id).ready && m(t)
                },
                MESSAGE_UPDATE: function(e) {
                    let {
                        message: t
                    } = e, n = t.id, i = t.channel_id;
                    if (!C.has(i, n)) return !1;
                    let a = C.get(i, n);
                    if (null == a || 0 !== a.state) return !1;
                    C.set(i, n, {
                        state: 0,
                        message: (0, c.updateMessageRecord)(a.message, t)
                    })
                },
                MESSAGE_DELETE: function(e) {
                    let {
                        id: t,
                        channelId: n
                    } = e;
                    return A(n, t)
                },
                MESSAGE_DELETE_BULK: function(e) {
                    let {
                        ids: t,
                        channelId: n
                    } = e;
                    return S(t, e => A(n, e))
                },
                CREATE_PENDING_REPLY: function(e) {
                    let {
                        message: t
                    } = e;
                    C.set(t.channel_id, t.id, {
                        state: 0,
                        message: t
                    })
                },
                CHANNEL_DELETE: g,
                THREAD_DELETE: g,
                GUILD_DELETE: function() {
                    let e = C.retainWhere(e => null != _.default.getChannel(e));
                    if (0 === e) return !1
                },
                CONNECTION_OPEN: N,
                LOGOUT: N
            })