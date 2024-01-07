            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return x
                }
            }), n("222007"), n("702976"), n("424973"), n("860677");
            var i = n("917351"),
                a = n.n(i),
                l = n("446674"),
                s = n("913144"),
                r = n("408062"),
                u = n("979911"),
                o = n("605250"),
                d = n("447435"),
                c = n("10853"),
                _ = n("38654"),
                E = n("692038"),
                f = n("61400");
            n("574073");
            var h = n("432173"),
                p = n("915639"),
                T = n("568734"),
                C = n("271938"),
                m = n("42203"),
                S = n("162805"),
                I = n("923959"),
                g = n("26989"),
                A = n("305961"),
                N = n("957255"),
                O = n("27618"),
                R = n("18494"),
                y = n("162771"),
                v = n("697218"),
                M = n("49111");
            let L = new Set,
                D = new o.default("MessageStore");

            function U() {
                r.default.forEach(e => {
                    r.default.commit(e.mutate({
                        ready: !1,
                        loadingMore: !1
                    }))
                }), L.clear()
            }

            function P() {
                r.default.forEach(e => {
                    e.forAll(e => {
                        e.timestamp.locale(p.default.locale)
                    })
                })
            }

            function b() {
                r.default.forEach(e => {
                    let {
                        channelId: t
                    } = e;
                    null == m.default.getChannel(t) && r.default.clear(t)
                })
            }

            function G() {
                r.default.forEach(e => {
                    r.default.commit(e.reset(e.map(e => e.set("blocked", O.default.isBlocked(e.author.id)))))
                })
            }

            function k(e) {}

            function F(e) {
                let {
                    type: t,
                    channelId: n,
                    messageId: i,
                    userId: a,
                    emoji: l,
                    burst: s,
                    reactionType: u
                } = e, o = r.default.get(n);
                if (null == o || !(0, h.shouldApplyReaction)(e)) return !1;
                let d = C.default.getId() === a;
                o = o.update(i, n => {
                    if ("MESSAGE_REACTION_ADD" !== t) return n.removeReaction(l, d, s, u);
                    {
                        let {
                            colors: t
                        } = e;
                        return n.addReaction(l, d, t, s, u)
                    }
                }), r.default.commit(o)
            }

            function w(e) {
                let {
                    type: t,
                    messageData: n
                } = e, {
                    message: i
                } = n, a = (0, u.getFailedMessageId)(n), l = i.channelId, s = r.default.getOrCreate(l);
                if (!s.has(a)) return !1;
                s = s.update(a, e => {
                    var n;
                    return (null === (n = e.embeds) || void 0 === n ? void 0 : n.filter(c.isNotAutomodEmbed).length) > 0 && (e = e.set("embeds", [])), "MESSAGE_SEND_FAILED_AUTOMOD" === t && (e = e.set("flags", (0, T.addFlag)(e.flags, M.MessageFlags.EPHEMERAL))), e
                }), r.default.commit(s)
            }
            class H extends l.default.Store {
                initialize() {
                    this.waitFor(v.default, m.default, S.default, g.default, p.default, R.default, y.default, A.default, O.default, I.default), this.syncWith([_.default], () => {})
                }
                getMessages(e) {
                    if (_.default.hasViewingRoles()) {
                        let t = m.default.getChannel(e),
                            n = null == t ? void 0 : t.getGuildId();
                        if (_.default.isViewingRoles(n) && !N.default.can(M.Permissions.VIEW_CHANNEL, t)) return new r.default(e)
                    }
                    return r.default.getOrCreate(e)
                }
                getMessage(e, t) {
                    return r.default.getOrCreate(e).get(t)
                }
                getLastEditableMessage(e) {
                    let t = v.default.getCurrentUser();
                    return a(this.getMessages(e).toArray()).reverse().find(e => (0, f.default)(e, null == t ? void 0 : t.id))
                }
                getLastCommandMessage(e) {
                    let t = v.default.getCurrentUser();
                    return this.getMessages(e).toArray().reverse().find(e => null != e.interaction && e.interaction.user.id === (null == t ? void 0 : t.id))
                }
                jumpedMessageId(e) {
                    let t = r.default.get(e);
                    return null == t ? void 0 : t.jumpTargetId
                }
                focusedMessageId(e) {
                    let t = r.default.get(e);
                    return null == t ? void 0 : t.focusTargetId
                }
                hasPresent(e) {
                    let t = r.default.get(e);
                    return null != t && t.ready && t.hasPresent()
                }
                isReady(e) {
                    return r.default.getOrCreate(e).ready
                }
                whenReady(e, t) {
                    this.addConditionalChangeListener(() => {
                        if (this.isReady(e)) return setImmediate(t), !1
                    })
                }
                isLoadingMessages(e) {
                    let t = r.default.getOrCreate(e);
                    return t.loadingMore
                }
                hasCurrentUserSentMessage(e) {
                    let t = v.default.getCurrentUser();
                    return null != this.getMessages(e).findNewest(e => e.author.id === (null == t ? void 0 : t.id))
                }
            }
            H.displayName = "MessageStore";
            var x = new H(s.default, {
                BACKGROUND_SYNC_CHANNEL_MESSAGES: function(e) {
                    let {
                        changesByChannelId: t
                    } = e;
                    for (let e in t) {
                        let n = r.default.get(e);
                        if (null == n) continue;
                        let i = n.cached || true;
                        if (!i) {
                            D.log("Skipping background message sync for ".concat(e, " cached:").concat(n.cached, " ") + "ready:".concat(n.ready, " hasMoreAfter:").concat(n.hasMoreAfter, " ") + "isConnected:".concat(!1));
                            continue
                        }
                        n.mergeDelta(t[e].new_messages, t[e].modified_messages, t[e].deleted_message_ids)
                    }
                },
                CONNECTION_OPEN: U,
                OVERLAY_INITIALIZE: U,
                CACHE_LOADED: function(e) {
                    for (let [t, n] of Object.entries(e.messages)) {
                        let e = r.default.getOrCreate(t).addCachedMessages(n, !0);
                        r.default.commit(e)
                    }
                },
                LOAD_MESSAGES: function() {
                    return !0
                },
                LOAD_MESSAGES_SUCCESS: function(e) {
                    let {
                        channelId: t,
                        isBefore: n,
                        isAfter: i,
                        jump: a,
                        hasMoreBefore: l,
                        hasMoreAfter: s,
                        messages: u,
                        isStale: o,
                        truncate: d
                    } = e, c = r.default.getOrCreate(t);
                    c = c.loadComplete({
                        newMessages: u,
                        isBefore: n,
                        isAfter: i,
                        jump: a,
                        hasMoreBefore: l,
                        hasMoreAfter: s,
                        cached: o,
                        hasFetched: !0
                    }), null != d && (n || i) && (!n || !i) && (c = c.truncate(n, i)), r.default.commit(c)
                },
                LOAD_MESSAGES_FAILURE: function(e) {
                    let {
                        channelId: t
                    } = e, n = r.default.getOrCreate(t);
                    r.default.commit(n.mutate({
                        loadingMore: !1,
                        error: !0
                    }))
                },
                LOAD_MESSAGES_SUCCESS_CACHED: function(e) {
                    let {
                        channelId: t,
                        jump: n,
                        focus: i,
                        before: a,
                        after: l,
                        limit: s,
                        truncate: u
                    } = e, o = r.default.getOrCreate(t);
                    (null == n ? void 0 : n.present) ? o = o.jumpToPresent(s): (null == i ? void 0 : i.messageId) != null ? o = o.focusOnMessage(i.messageId) : (null == n ? void 0 : n.messageId) != null ? o = o.jumpToMessage(n.messageId, n.flash, n.offset, n.returnMessageId, n.jumpType) : (null != a || null != l) && (o = o.loadFromCache(null != a, s)), null != u && (null != a || null != l) && (null == a || null == l) && (o = o.truncate(null != a, null != l)), r.default.commit(o)
                },
                LOCAL_MESSAGES_LOADED: function(e) {
                    let t = r.default.getOrCreate(e.channelId);
                    (t.cached || !t.ready) && r.default.commit(t.addCachedMessages(e.messages, e.stale))
                },
                LOAD_MESSAGE_INTERACTION_DATA_SUCCESS: function(e) {
                    let t = e.messageId,
                        n = e.channelId,
                        i = r.default.get(n);
                    if (null == i || !i.has(t)) return !1;
                    i = i.update(t, t => t.set("interactionData", e.interactionData)), r.default.commit(i)
                },
                TRUNCATE_MESSAGES: function(e) {
                    let {
                        channelId: t,
                        truncateBottom: n,
                        truncateTop: i
                    } = e;
                    D.log("Truncating messages for ".concat(t, " bottom:").concat(n, " top:").concat(i));
                    let a = r.default.getOrCreate(t);
                    a = a.truncate(n, i), r.default.commit(a)
                },
                CLEAR_MESSAGES: function(e) {
                    let {
                        channelId: t
                    } = e;
                    D.log("Clearing messages for ".concat(t)), r.default.clear(t), L.clear()
                },
                MESSAGE_CREATE: function(e) {
                    let {
                        channelId: t,
                        message: n,
                        isPushNotification: i
                    } = e, a = r.default.getOrCreate(t);
                    if (i) {
                        D.log("Inserting message tapped on from a push notification", n.id, n.channel_id), r.default.commit(a.receivePushNotification(n));
                        return
                    }
                    if (!a.ready) return !1;
                    null != n.nonce && n.state !== M.MessageStates.SENDING && L.has(n.nonce) && (a = a.remove(n.nonce), L.delete(n.nonce)), a = a.receiveMessage(n, S.default.isAtBottom(t)), r.default.commit(a)
                },
                MESSAGE_SEND_FAILED: function(e) {
                    let {
                        channelId: t,
                        messageId: n,
                        reason: i
                    } = e, a = r.default.getOrCreate(t);
                    if (null == a || !a.has(n)) return !1;
                    let l = a.get(n, !0);
                    a = (null == l ? void 0 : l.isPoll()) === !0 ? a.remove(n) : a.update(n, e => ((e = e.set("state", M.MessageStates.SEND_FAILED)).isCommandType() && (e = (e = e.set("interactionError", null != i ? i : "")).set("flags", (0, T.addFlag)(e.flags, M.MessageFlags.EPHEMERAL))), e)), r.default.commit(a)
                },
                MESSAGE_SEND_FAILED_AUTOMOD: w,
                MESSAGE_EDIT_FAILED_AUTOMOD: w,
                MESSAGE_UPDATE: function(e) {
                    let t = e.message.id,
                        n = e.message.channel_id,
                        i = r.default.getOrCreate(n);
                    if (null == i || !i.has(t)) return !1;
                    i = i.update(t, t => (0, E.updateMessageRecord)(t, e.message)), r.default.commit(i)
                },
                MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: function(e) {
                    let {
                        messageId: t,
                        channelId: n
                    } = e, i = r.default.get(n);
                    if (null == i || !i.has(t)) return !1;
                    i = i.update(t, d.handleExplicitMediaScanTimeoutForMessage), r.default.commit(i)
                },
                MESSAGE_DELETE: function(e) {
                    let {
                        id: t,
                        channelId: n
                    } = e, i = r.default.getOrCreate(n);
                    if (null == i || !i.has(t)) return !1;
                    if (i.revealedMessageId === t) {
                        let e = i.getAfter(t);
                        i = null != e && e.blocked ? i.mutate({
                            revealedMessageId: e.id
                        }) : i.mutate({
                            revealedMessageId: null
                        })
                    }
                    i = i.remove(t), r.default.commit(i), L.delete(t)
                },
                MESSAGE_DELETE_BULK: function(e) {
                    let {
                        ids: t,
                        channelId: n
                    } = e, i = r.default.getOrCreate(n);
                    if (null == i) return !1;
                    let l = i.removeMany(t);
                    if (i === l) return !1;
                    if (null != l.revealedMessageId && a.some(t, e => l.revealedMessageId === e)) {
                        let e = l.getAfter(l.revealedMessageId);
                        l = null != e && e.blocked ? l.mutate({
                            revealedMessageId: e.id
                        }) : l.mutate({
                            revealedMessageId: null
                        })
                    }
                    r.default.commit(l), t.forEach(e => {
                        L.delete(e)
                    })
                },
                MESSAGE_REVEAL: function(e) {
                    let {
                        channelId: t,
                        messageId: n
                    } = e, i = r.default.getOrCreate(t);
                    r.default.commit(i.mutate({
                        revealedMessageId: n
                    }))
                },
                USER_SETTINGS_PROTO_UPDATE: P,
                I18N_LOAD_SUCCESS: P,
                THREAD_CREATE_LOCAL: function(e) {
                    let {
                        channelId: t
                    } = e, n = r.default.getOrCreate(t);
                    n = n.loadComplete({
                        newMessages: [],
                        hasMoreAfter: !1,
                        hasMoreBefore: !1
                    }), r.default.commit(n)
                },
                CHANNEL_DELETE: b,
                THREAD_DELETE: b,
                GUILD_DELETE: b,
                RELATIONSHIP_ADD: G,
                RELATIONSHIP_REMOVE: G,
                GUILD_MEMBERS_CHUNK: k,
                THREAD_MEMBER_LIST_UPDATE: k,
                MESSAGE_REACTION_ADD: F,
                MESSAGE_REACTION_ADD_MANY: function(e) {
                    let {
                        channelId: t,
                        messageId: n,
                        reactions: i
                    } = e, a = r.default.get(t);
                    if (null == a) return !1;
                    a = a.update(n, e => {
                        var t;
                        return e.addReactionBatch(i, null === (t = v.default.getCurrentUser()) || void 0 === t ? void 0 : t.id)
                    }), r.default.commit(a)
                },
                MESSAGE_REACTION_REMOVE: F,
                MESSAGE_REACTION_REMOVE_ALL: function(e) {
                    let {
                        channelId: t,
                        messageId: n
                    } = e, i = r.default.get(t);
                    if (null == i) return !1;
                    i = i.update(n, e => e.set("reactions", [])), r.default.commit(i)
                },
                MESSAGE_REACTION_REMOVE_EMOJI: function(e) {
                    let {
                        channelId: t,
                        messageId: n,
                        emoji: i
                    } = e, a = r.default.get(t);
                    if (null == a) return !1;
                    a = a.update(n, e => e.removeReactionsForEmoji(i)), r.default.commit(a)
                },
                LOGOUT: function() {
                    r.default.forEach(e => {
                        r.default.clear(e.channelId)
                    }), L.clear()
                },
                UPLOAD_START: function(e) {
                    let {
                        message: t
                    } = e;
                    null != t.nonce && L.add(t.nonce)
                },
                UPLOAD_FAIL: function(e) {
                    let {
                        channelId: t,
                        messageRecord: n
                    } = e, i = null == n ? void 0 : n.nonce;
                    if (null != i && L.has(i)) {
                        let e = r.default.getOrCreate(t),
                            n = e.get(i);
                        if (null == n) return;
                        e = (e = e.remove(i)).merge([n]), L.delete(i), r.default.commit(e)
                    }
                }
            })