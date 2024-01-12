            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return x
                }
            }), n("222007"), n("702976"), n("424973"), n("860677");
            var s = n("917351"),
                i = n.n(s),
                r = n("446674"),
                a = n("913144"),
                o = n("408062"),
                d = n("979911"),
                u = n("605250"),
                l = n("447435"),
                f = n("10853"),
                _ = n("38654"),
                c = n("692038"),
                g = n("61400");
            n("574073");
            var m = n("432173"),
                h = n("915639"),
                v = n("568734"),
                E = n("271938"),
                p = n("42203"),
                y = n("162805"),
                T = n("923959"),
                C = n("26989"),
                S = n("305961"),
                I = n("957255"),
                A = n("27618"),
                D = n("18494"),
                N = n("162771"),
                O = n("697218"),
                b = n("49111");
            let P = new Set,
                R = new u.default("MessageStore");

            function V() {
                o.default.forEach(e => {
                    o.default.commit(e.mutate({
                        ready: !1,
                        loadingMore: !1
                    }))
                }), P.clear()
            }

            function k() {
                o.default.forEach(e => {
                    e.forAll(e => {
                        e.timestamp.locale(h.default.locale)
                    })
                })
            }

            function M() {
                o.default.forEach(e => {
                    let {
                        channelId: t
                    } = e;
                    null == p.default.getChannel(t) && o.default.clear(t)
                })
            }

            function w() {
                o.default.forEach(e => {
                    o.default.commit(e.reset(e.map(e => e.set("blocked", A.default.isBlocked(e.author.id)))))
                })
            }

            function L(e) {}

            function U(e) {
                let {
                    type: t,
                    channelId: n,
                    messageId: s,
                    userId: i,
                    emoji: r,
                    burst: a,
                    reactionType: d
                } = e, u = o.default.get(n);
                if (null == u || !(0, m.shouldApplyReaction)(e)) return !1;
                let l = E.default.getId() === i;
                u = u.update(s, n => {
                    if ("MESSAGE_REACTION_ADD" !== t) return n.removeReaction(r, l, a, d);
                    {
                        let {
                            colors: t
                        } = e;
                        return n.addReaction(r, l, t, a, d)
                    }
                }), o.default.commit(u)
            }

            function G(e) {
                let {
                    type: t,
                    messageData: n
                } = e, {
                    message: s
                } = n, i = (0, d.getFailedMessageId)(n), r = s.channelId, a = o.default.getOrCreate(r);
                if (!a.has(i)) return !1;
                a = a.update(i, e => {
                    var n;
                    return (null === (n = e.embeds) || void 0 === n ? void 0 : n.filter(f.isNotAutomodEmbed).length) > 0 && (e = e.set("embeds", [])), "MESSAGE_SEND_FAILED_AUTOMOD" === t && (e = e.set("flags", (0, v.addFlag)(e.flags, b.MessageFlags.EPHEMERAL))), e
                }), o.default.commit(a)
            }
            class F extends r.default.Store {
                initialize() {
                    this.waitFor(O.default, p.default, y.default, C.default, h.default, D.default, N.default, S.default, A.default, T.default), this.syncWith([_.default], () => {})
                }
                getMessages(e) {
                    if (_.default.hasViewingRoles()) {
                        let t = p.default.getChannel(e),
                            n = null == t ? void 0 : t.getGuildId();
                        if (_.default.isViewingRoles(n) && !I.default.can(b.Permissions.VIEW_CHANNEL, t)) return new o.default(e)
                    }
                    return o.default.getOrCreate(e)
                }
                getMessage(e, t) {
                    return o.default.getOrCreate(e).get(t)
                }
                getLastEditableMessage(e) {
                    let t = O.default.getCurrentUser();
                    return i(this.getMessages(e).toArray()).reverse().find(e => (0, g.default)(e, null == t ? void 0 : t.id))
                }
                getLastCommandMessage(e) {
                    let t = O.default.getCurrentUser();
                    return this.getMessages(e).toArray().reverse().find(e => null != e.interaction && e.interaction.user.id === (null == t ? void 0 : t.id))
                }
                jumpedMessageId(e) {
                    let t = o.default.get(e);
                    return null == t ? void 0 : t.jumpTargetId
                }
                focusedMessageId(e) {
                    let t = o.default.get(e);
                    return null == t ? void 0 : t.focusTargetId
                }
                hasPresent(e) {
                    let t = o.default.get(e);
                    return null != t && t.ready && t.hasPresent()
                }
                isReady(e) {
                    return o.default.getOrCreate(e).ready
                }
                whenReady(e, t) {
                    this.addConditionalChangeListener(() => {
                        if (this.isReady(e)) return setImmediate(t), !1
                    })
                }
                isLoadingMessages(e) {
                    let t = o.default.getOrCreate(e);
                    return t.loadingMore
                }
                hasCurrentUserSentMessage(e) {
                    let t = O.default.getCurrentUser();
                    return null != this.getMessages(e).findNewest(e => e.author.id === (null == t ? void 0 : t.id))
                }
            }
            F.displayName = "MessageStore";
            var x = new F(a.default, {
                BACKGROUND_SYNC_CHANNEL_MESSAGES: function(e) {
                    let {
                        changesByChannelId: t
                    } = e;
                    for (let e in t) {
                        let n = o.default.get(e);
                        if (null == n) continue;
                        let s = n.cached || true;
                        if (!s) {
                            R.log("Skipping background message sync for ".concat(e, " cached:").concat(n.cached, " ") + "ready:".concat(n.ready, " hasMoreAfter:").concat(n.hasMoreAfter, " ") + "isConnected:".concat(!1));
                            continue
                        }
                        n.mergeDelta(t[e].new_messages, t[e].modified_messages, t[e].deleted_message_ids)
                    }
                },
                CONNECTION_OPEN: V,
                OVERLAY_INITIALIZE: V,
                CACHE_LOADED: function(e) {
                    for (let [t, n] of Object.entries(e.messages)) {
                        let e = o.default.getOrCreate(t).addCachedMessages(n, !0);
                        o.default.commit(e)
                    }
                },
                LOAD_MESSAGES: function() {
                    return !0
                },
                LOAD_MESSAGES_SUCCESS: function(e) {
                    let {
                        channelId: t,
                        isBefore: n,
                        isAfter: s,
                        jump: i,
                        hasMoreBefore: r,
                        hasMoreAfter: a,
                        messages: d,
                        isStale: u,
                        truncate: l
                    } = e, f = o.default.getOrCreate(t);
                    f = f.loadComplete({
                        newMessages: d,
                        isBefore: n,
                        isAfter: s,
                        jump: i,
                        hasMoreBefore: r,
                        hasMoreAfter: a,
                        cached: u,
                        hasFetched: !0
                    }), null != l && (n || s) && (!n || !s) && (f = f.truncate(n, s)), o.default.commit(f)
                },
                LOAD_MESSAGES_FAILURE: function(e) {
                    let {
                        channelId: t
                    } = e, n = o.default.getOrCreate(t);
                    o.default.commit(n.mutate({
                        loadingMore: !1,
                        error: !0
                    }))
                },
                LOAD_MESSAGES_SUCCESS_CACHED: function(e) {
                    let {
                        channelId: t,
                        jump: n,
                        focus: s,
                        before: i,
                        after: r,
                        limit: a,
                        truncate: d
                    } = e, u = o.default.getOrCreate(t);
                    (null == n ? void 0 : n.present) ? u = u.jumpToPresent(a): (null == s ? void 0 : s.messageId) != null ? u = u.focusOnMessage(s.messageId) : (null == n ? void 0 : n.messageId) != null ? u = u.jumpToMessage(n.messageId, n.flash, n.offset, n.returnMessageId, n.jumpType) : (null != i || null != r) && (u = u.loadFromCache(null != i, a)), null != d && (null != i || null != r) && (null == i || null == r) && (u = u.truncate(null != i, null != r)), o.default.commit(u)
                },
                LOCAL_MESSAGES_LOADED: function(e) {
                    let t = o.default.getOrCreate(e.channelId);
                    (t.cached || !t.ready) && o.default.commit(t.addCachedMessages(e.messages, e.stale))
                },
                LOAD_MESSAGE_INTERACTION_DATA_SUCCESS: function(e) {
                    let t = e.messageId,
                        n = e.channelId,
                        s = o.default.get(n);
                    if (null == s || !s.has(t)) return !1;
                    s = s.update(t, t => t.set("interactionData", e.interactionData)), o.default.commit(s)
                },
                TRUNCATE_MESSAGES: function(e) {
                    let {
                        channelId: t,
                        truncateBottom: n,
                        truncateTop: s
                    } = e;
                    R.log("Truncating messages for ".concat(t, " bottom:").concat(n, " top:").concat(s));
                    let i = o.default.getOrCreate(t);
                    i = i.truncate(n, s), o.default.commit(i)
                },
                CLEAR_MESSAGES: function(e) {
                    let {
                        channelId: t
                    } = e;
                    R.log("Clearing messages for ".concat(t)), o.default.clear(t), P.clear()
                },
                MESSAGE_CREATE: function(e) {
                    let {
                        channelId: t,
                        message: n,
                        isPushNotification: s
                    } = e, i = o.default.getOrCreate(t);
                    if (s) {
                        R.log("Inserting message tapped on from a push notification", n.id, n.channel_id), o.default.commit(i.receivePushNotification(n));
                        return
                    }
                    if (!i.ready) return !1;
                    null != n.nonce && n.state !== b.MessageStates.SENDING && P.has(n.nonce) && (i = i.remove(n.nonce), P.delete(n.nonce)), i = i.receiveMessage(n, y.default.isAtBottom(t)), o.default.commit(i)
                },
                MESSAGE_SEND_FAILED: function(e) {
                    let {
                        channelId: t,
                        messageId: n,
                        reason: s
                    } = e, i = o.default.getOrCreate(t);
                    if (null == i || !i.has(n)) return !1;
                    let r = i.get(n, !0);
                    i = (null == r ? void 0 : r.isPoll()) === !0 ? i.remove(n) : i.update(n, e => ((e = e.set("state", b.MessageStates.SEND_FAILED)).isCommandType() && (e = (e = e.set("interactionError", null != s ? s : "")).set("flags", (0, v.addFlag)(e.flags, b.MessageFlags.EPHEMERAL))), e)), o.default.commit(i)
                },
                MESSAGE_SEND_FAILED_AUTOMOD: G,
                MESSAGE_EDIT_FAILED_AUTOMOD: G,
                MESSAGE_UPDATE: function(e) {
                    let t = e.message.id,
                        n = e.message.channel_id,
                        s = o.default.getOrCreate(n);
                    if (null == s || !s.has(t)) return !1;
                    s = s.update(t, t => (0, c.updateMessageRecord)(t, e.message)), o.default.commit(s)
                },
                MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: function(e) {
                    let {
                        messageId: t,
                        channelId: n
                    } = e, s = o.default.get(n);
                    if (null == s || !s.has(t)) return !1;
                    s = s.update(t, l.handleExplicitMediaScanTimeoutForMessage), o.default.commit(s)
                },
                MESSAGE_DELETE: function(e) {
                    let {
                        id: t,
                        channelId: n
                    } = e, s = o.default.getOrCreate(n);
                    if (null == s || !s.has(t)) return !1;
                    if (s.revealedMessageId === t) {
                        let e = s.getAfter(t);
                        s = null != e && e.blocked ? s.mutate({
                            revealedMessageId: e.id
                        }) : s.mutate({
                            revealedMessageId: null
                        })
                    }
                    s = s.remove(t), o.default.commit(s), P.delete(t)
                },
                MESSAGE_DELETE_BULK: function(e) {
                    let {
                        ids: t,
                        channelId: n
                    } = e, s = o.default.getOrCreate(n);
                    if (null == s) return !1;
                    let r = s.removeMany(t);
                    if (s === r) return !1;
                    if (null != r.revealedMessageId && i.some(t, e => r.revealedMessageId === e)) {
                        let e = r.getAfter(r.revealedMessageId);
                        r = null != e && e.blocked ? r.mutate({
                            revealedMessageId: e.id
                        }) : r.mutate({
                            revealedMessageId: null
                        })
                    }
                    o.default.commit(r), t.forEach(e => {
                        P.delete(e)
                    })
                },
                MESSAGE_REVEAL: function(e) {
                    let {
                        channelId: t,
                        messageId: n
                    } = e, s = o.default.getOrCreate(t);
                    o.default.commit(s.mutate({
                        revealedMessageId: n
                    }))
                },
                USER_SETTINGS_PROTO_UPDATE: k,
                I18N_LOAD_SUCCESS: k,
                THREAD_CREATE_LOCAL: function(e) {
                    let {
                        channelId: t
                    } = e, n = o.default.getOrCreate(t);
                    n = n.loadComplete({
                        newMessages: [],
                        hasMoreAfter: !1,
                        hasMoreBefore: !1
                    }), o.default.commit(n)
                },
                CHANNEL_DELETE: M,
                THREAD_DELETE: M,
                GUILD_DELETE: M,
                RELATIONSHIP_ADD: w,
                RELATIONSHIP_REMOVE: w,
                GUILD_MEMBERS_CHUNK: L,
                THREAD_MEMBER_LIST_UPDATE: L,
                MESSAGE_REACTION_ADD: U,
                MESSAGE_REACTION_ADD_MANY: function(e) {
                    let {
                        channelId: t,
                        messageId: n,
                        reactions: s
                    } = e, i = o.default.get(t);
                    if (null == i) return !1;
                    i = i.update(n, e => {
                        var t;
                        return e.addReactionBatch(s, null === (t = O.default.getCurrentUser()) || void 0 === t ? void 0 : t.id)
                    }), o.default.commit(i)
                },
                MESSAGE_REACTION_REMOVE: U,
                MESSAGE_REACTION_REMOVE_ALL: function(e) {
                    let {
                        channelId: t,
                        messageId: n
                    } = e, s = o.default.get(t);
                    if (null == s) return !1;
                    s = s.update(n, e => e.set("reactions", [])), o.default.commit(s)
                },
                MESSAGE_REACTION_REMOVE_EMOJI: function(e) {
                    let {
                        channelId: t,
                        messageId: n,
                        emoji: s
                    } = e, i = o.default.get(t);
                    if (null == i) return !1;
                    i = i.update(n, e => e.removeReactionsForEmoji(s)), o.default.commit(i)
                },
                LOGOUT: function() {
                    o.default.forEach(e => {
                        o.default.clear(e.channelId)
                    }), P.clear()
                },
                UPLOAD_START: function(e) {
                    let {
                        message: t
                    } = e;
                    null != t.nonce && P.add(t.nonce)
                },
                UPLOAD_FAIL: function(e) {
                    let {
                        channelId: t,
                        messageRecord: n
                    } = e, s = null == n ? void 0 : n.nonce;
                    if (null != s && P.has(s)) {
                        let e = o.default.getOrCreate(t),
                            n = e.get(s);
                        if (null == n) return;
                        e = (e = e.remove(s)).merge([n]), P.delete(s), o.default.commit(e)
                    }
                }
            })