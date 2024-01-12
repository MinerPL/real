            "use strict";
            let i;
            n.r(t), n.d(t, {
                shouldBadgeMessage: function() {
                    return eA
                },
                default: function() {
                    return eX
                }
            }), n("222007"), n("70102"), n("424973"), n("702976");
            var a, l, s = n("627445"),
                r = n.n(s),
                u = n("866227"),
                o = n.n(u),
                d = n("446674"),
                c = n("872717"),
                _ = n("862337"),
                E = n("627929"),
                f = n("913144"),
                h = n("191225"),
                p = n("716241"),
                T = n("191145"),
                C = n("203288"),
                m = n("605250"),
                S = n("398604"),
                I = n("21121"),
                g = n("288518"),
                A = n("415435"),
                N = n("486503"),
                O = n("406297"),
                R = n("136511"),
                y = n("342176"),
                v = n("512395"),
                M = n("614305"),
                D = n("689275"),
                L = n("755624"),
                U = n("526311"),
                P = n("374363"),
                b = n("233069"),
                G = n("845078"),
                k = n("718517"),
                F = n("568734"),
                w = n("449008"),
                V = n("35468"),
                H = n("299039"),
                x = n("271938"),
                B = n("982108"),
                Y = n("42203"),
                K = n("162805"),
                j = n("760190"),
                W = n("341542"),
                z = n("305961"),
                q = n("603699"),
                Q = n("377253"),
                X = n("957255"),
                Z = n("27618"),
                J = n("18494"),
                $ = n("282109"),
                ee = n("697218"),
                et = n("471671"),
                en = n("49111"),
                ei = n("272505"),
                ea = n("724210"),
                el = n("745049"),
                es = n("133335");
            let er = new m.default("ReadStateStore");
            __OVERLAY__ && (i = n("901165").default);
            let eu = en.BasicPermissions.VIEW_CHANNEL | en.BasicPermissions.READ_MESSAGE_HISTORY,
                eo = null,
                ed = null,
                ec = null,
                e_ = !1,
                eE = [],
                ef = !1,
                eh = null,
                ep = {};

            function eT() {
                return H.default.fromTimestamp(Date.now() - 2592e6)
            }
            let eC = 0,
                em = 0,
                eS = null;

            function eI() {
                eC = Date.now() - 6048e5, em = Date.now() - 2592e5, clearTimeout(eS), eS = setTimeout(() => {
                    f.default.dispatch({
                        type: "DECAY_READ_STATES"
                    })
                }, 36e5)
            }

            function eg(e) {
                if (null == e) return 0;
                let t = Date.parse(e);
                return isNaN(t) ? 0 : t
            }

            function eA(e, t) {
                let n = Y.default.getChannel(e.channel_id);
                return !(null == n || Z.default.isBlocked(e.author.id)) && (!!((0, O.default)({
                    message: e,
                    userId: t.id,
                    suppressEveryone: $.default.isSuppressEveryoneEnabled(n.guild_id),
                    suppressRoles: $.default.isSuppressRolesEnabled(n.guild_id)
                }) || eN(n)) || !1)
            }

            function eN(e) {
                return null != e && e.isPrivate() && !$.default.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id)
            }
            async function eO(e) {
                if (0 === eE.length) {
                    ef = !1, null == e || e();
                    return
                }
                ef = !0;
                let t = eE.splice(0, 100);
                await eR(() => c.default.post({
                    url: en.Endpoints.BULK_ACK,
                    body: {
                        read_states: t
                    },
                    oldFormErrors: !0
                })), await (0, _.timeoutPromise)(1e3), eO(e)
            }
            async function eR(e) {
                let t = x.default.getId();
                for (let n = 0; n < 3; n++) try {
                    return await e()
                } catch (e) {
                    if (er.error("", e), n + 1 < 3 && (await (0, _.timeoutPromise)((n + 1) * 2e3), await V.default.awaitOnline(), t !== x.default.getId())) return Promise.reject(Error("User changed."))
                }
            }

            function ey(e) {
                if (e.type !== es.ReadStateTypes.CHANNEL) return !1;
                let t = Y.default.getChannel(e.channelId),
                    n = null != t && t.isForumPost();
                if (null != h.default.getConnectedActivityChannelId() && h.default.getActivityPanelMode() === ei.ActivityPanelModes.PANEL && h.default.getFocusedLayout() === ei.FocusedActivityLayouts.NO_CHAT || q.default.isIdle() || !e.canTrackUnreads()) return !1;
                if ((null == t ? void 0 : t.isForumLikeChannel()) !== !0) {
                    let t = ep[e.channelId],
                        n = null != t && et.default.isFocused(t),
                        a = null != i && i.isInstanceFocused() && i.isPinned(en.OverlayWidgets.TEXT);
                    if (!n && !a) return !1
                }
                if (n && !e._persisted) return !0;
                let a = e.hasUnreadOrMentions();
                if (!a || (null == t ? void 0 : t.isForumLikeChannel()) === !0) return !1;
                let l = n && !e._isJoinedThread;
                if (!l && !K.default.isAtBottom(e.channelId)) return !1;
                let s = T.default.getLayout(e.channelId),
                    r = T.default.getChatOpen(e.channelId);
                if (!r && (s === en.ChannelLayouts.NO_CHAT || s === en.ChannelLayouts.FULL_SCREEN) || null == ep[e.channelId]) return !1;
                let u = Q.default.getMessages(e.channelId);
                return !(null == u || !u.ready || u.loadingMore || (0, M.default)() && !r) && !0
            }(l = a || (a = {}))[l.IS_GUILD_CHANNEL = 1] = "IS_GUILD_CHANNEL", l[l.IS_THREAD = 2] = "IS_THREAD";
            class ev {
                static forEach(e) {
                    for (let n of Object.keys(ev._readStates)) {
                        var t;
                        let i = null !== (t = ev._readStates[parseInt(n)]) && void 0 !== t ? t : {};
                        for (let t of Object.keys(i))
                            if (!1 === e(i[t])) break
                    }
                }
                static get(e) {
                    var t;
                    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es.ReadStateTypes.CHANNEL,
                        i = null === (t = ev._readStates[n]) || void 0 === t ? void 0 : t[e];
                    return null == i && (i = new ev(e, n), null == ev._readStates[n] && (ev._readStates[n] = {}), ev._readStates[n][e] = i), i
                }
                static getGuildSentinels(e) {
                    return null == this._guildReadStateSentinels[e] && (this._guildReadStateSentinels[e] = {
                        unreadsSentinel: 0
                    }), this._guildReadStateSentinels[e]
                }
                static resetGuildSentinels() {
                    this._guildReadStateSentinels = {}
                }
                static getIfExists(e) {
                    var t;
                    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es.ReadStateTypes.CHANNEL;
                    return null === (t = ev._readStates[n]) || void 0 === t ? void 0 : t[e]
                }
                static getMentionChannelIds() {
                    let e = [];
                    for (let t of ev._mentionChannels) {
                        let n = ev.getIfExists(t);
                        null != n && n.canHaveMentions() ? e.push(t) : ev._mentionChannels.delete(t)
                    }
                    return e
                }
                static getValue(e) {
                    var t;
                    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es.ReadStateTypes.CHANNEL,
                        i = arguments.length > 2 ? arguments[2] : void 0,
                        a = arguments.length > 3 ? arguments[3] : void 0,
                        l = null === (t = ev._readStates[n]) || void 0 === t ? void 0 : t[e];
                    return null == l ? a : i(l)
                }
                static clear(e) {
                    var t;
                    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es.ReadStateTypes.CHANNEL;
                    return (null === (t = ev._readStates[n]) || void 0 === t ? void 0 : t[e]) != null && (delete ev._readStates[n][e], ev._mentionChannels.delete(e), !0)
                }
                static clearAll() {
                    ev._readStates = {}, ev._mentionChannels.clear()
                }
                serialize(e) {
                    let {
                        channelId: t,
                        type: n,
                        _guildId: i,
                        _isThread: a,
                        _isActiveThread: l,
                        _isJoinedThread: s,
                        _persisted: r,
                        loadedMessages: u,
                        _lastMessageId: o,
                        _lastMessageTimestamp: d,
                        _ackMessageId: c,
                        _ackMessageTimestamp: _,
                        ackPinTimestamp: E,
                        isManualAck: f,
                        lastPinTimestamp: h,
                        _oldestUnreadMessageId: p,
                        oldestUnreadMessageIdStale: T,
                        estimated: C,
                        _mentionCount: m,
                        flags: S,
                        lastViewed: I
                    } = this;
                    if (e) return {
                        channelId: t,
                        type: n,
                        _guildId: i,
                        _isThread: a,
                        _isActiveThread: l,
                        _isJoinedThread: s,
                        _persisted: r,
                        loadedMessages: u,
                        _lastMessageId: o,
                        _lastMessageTimestamp: d,
                        _ackMessageId: c,
                        _ackMessageTimestamp: _,
                        ackPinTimestamp: E,
                        isManualAck: f,
                        lastPinTimestamp: h,
                        _oldestUnreadMessageId: p,
                        oldestUnreadMessageIdStale: T,
                        estimated: C,
                        _mentionCount: m,
                        flags: S,
                        lastViewed: I
                    };
                    let g = {
                        channelId: t,
                        type: n,
                        _guildId: i,
                        _persisted: r,
                        _lastMessageId: o,
                        _lastMessageTimestamp: d,
                        _ackMessageId: c,
                        _ackMessageTimestamp: _,
                        ackPinTimestamp: E,
                        lastPinTimestamp: h,
                        _mentionCount: m,
                        flags: S
                    };
                    return null != I && I > 0 && (g.lastViewed = I), a && (g._isThread = a, g._isActiveThread = l, g._isJoinedThread = s), g
                }
                deserializeForOverlay(e) {
                    let {
                        channelId: t,
                        type: n,
                        _guildId: i,
                        _isThread: a,
                        _isActiveJoinedThread: l,
                        _isActiveThread: s,
                        _isJoinedThread: r,
                        _persisted: u,
                        loadedMessages: o,
                        _lastMessageId: d,
                        _lastMessageTimestamp: c,
                        _ackMessageId: _,
                        _ackMessageTimestamp: E,
                        ackPinTimestamp: f,
                        isManualAck: h,
                        lastPinTimestamp: p,
                        _oldestUnreadMessageId: T,
                        oldestUnreadMessageIdStale: C,
                        estimated: m,
                        _unreadCount: S,
                        _mentionCount: I,
                        flags: g,
                        lastViewed: A
                    } = e;
                    this.channelId = t, this.type = null != n ? n : es.ReadStateTypes.CHANNEL, this._guildId = i, this._isThread = null != a && a, null != l ? (this._isActiveThread = l, this._isJoinedThread = l) : (this._isActiveThread = null != s && s, this._isJoinedThread = null != r && r), this._persisted = !1 !== u, this.loadedMessages = null != o && o, this._lastMessageId = d, this._lastMessageTimestamp = c, this._ackMessageId = _, this._ackMessageTimestamp = E, this.ackPinTimestamp = f, this.isManualAck = null != h && h, this.lastPinTimestamp = p, this._oldestUnreadMessageId = T, this.oldestUnreadMessageIdStale = null != C && C, this.estimated = null != m && m, this._unreadCount = null != S ? S : 0, this._mentionCount = I, this.flags = g, this.lastViewed = A, ev._mentionChannels.delete(this.channelId), this._mentionCount > 0 && this.canHaveMentions() && ev._mentionChannels.add(this.channelId)
                }
                incrementGuildUnreadsSentinel() {
                    null != this._guildId && ev.getGuildSentinels(this._guildId).unreadsSentinel++
                }
                get oldestUnreadMessageId() {
                    return this._oldestUnreadMessageId
                }
                set oldestUnreadMessageId(e) {
                    this._oldestUnreadMessageId = e, this.oldestUnreadMessageIdStale = !1
                }
                get lastMessageId() {
                    return this._lastMessageId
                }
                set lastMessageId(e) {
                    this._lastMessageId = e, this._lastMessageTimestamp = null != e ? H.default.extractTimestamp(e) : 0
                }
                get lastMessageTimestamp() {
                    return this._lastMessageTimestamp
                }
                get ackMessageId() {
                    return this._ackMessageId
                }
                set ackMessageId(e) {
                    this._ackMessageId = e, this._ackMessageTimestamp = null != e ? H.default.extractTimestamp(e) : 0
                }
                get unreadCount() {
                    var e;
                    return null !== (e = this._unreadCount) && void 0 !== e ? e : 0
                }
                set unreadCount(e) {
                    (void 0 === this._unreadCount || 0 === this._unreadCount || 0 === e) && this.incrementGuildUnreadsSentinel(), this._unreadCount = e
                }
                get mentionCount() {
                    return this._mentionCount
                }
                set mentionCount(e) {
                    (0 === this._mentionCount || 0 === e) && this._mentionCount !== e && this.incrementGuildUnreadsSentinel(), this._mentionCount = e, ev._mentionChannels.delete(this.channelId), this._mentionCount > 0 && this.canHaveMentions() && ev._mentionChannels.add(this.channelId)
                }
                guessAckMessageId() {
                    let e = Q.default.getMessages(this.channelId);
                    if (null != this.ackMessageId || !this.isPrivate() || e.hasMoreAfter) return this.ackMessageId;
                    if (!this.hasMentions()) return this.lastMessageId;
                    let t = null,
                        n = this.mentionCount,
                        i = ee.default.getCurrentUser();
                    return e.forEach(e => {
                        if (n > 0 && e.author.id !== (null == i ? void 0 : i.id)) --n;
                        else if (0 === n) return t = e.id, !1
                    }, this, !0), t
                }
                get guildId() {
                    if (null != this._guildId) return this._guildId;
                    let e = Y.default.getChannel(this.channelId);
                    return this._guildId = null != e ? e.getGuildId() : null
                }
                isPrivate() {
                    if (this.type !== es.ReadStateTypes.CHANNEL) return !1;
                    let e = Y.default.getChannel(this.channelId);
                    return null != e && e.isPrivate()
                }
                rebuildChannelState(e) {
                    var t, n;
                    let i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        a = arguments.length > 2 ? arguments[2] : void 0;
                    if (this.ackMessageId = null !== (t = null != e ? e : this._ackMessageId) && void 0 !== t ? t : this.guessAckMessageId(), this.isManualAck = null != e, this.oldestUnreadMessageId = null, this.estimated = !1, this.unreadCount = 0, i && (this.mentionCount = 0), this.hasUnread()) {
                        let e = ee.default.getCurrentUser(),
                            t = this.getAckTimestamp(),
                            a = !1,
                            l = !1,
                            s = null,
                            r = Q.default.getMessages(this.channelId);
                        r.forAll(n => {
                            if (a) {
                                var r;
                                this.oldestUnreadMessageId = null !== (r = this._oldestUnreadMessageId) && void 0 !== r ? r : n.id
                            } else a = n.id === this._ackMessageId;
                            H.default.extractTimestamp(n.id) > t ? (this.unreadCount++, i && eA(n, e) && this.mentionCount++, s = null != s ? s : n.id) : l = !0
                        }), this.estimated = !r.hasPresent() || !(a || l) && r.length === this.unreadCount, this.oldestUnreadMessageId = null !== (n = this._oldestUnreadMessageId) && void 0 !== n ? n : s
                    }
                    null != a && (this.mentionCount = a)
                }
                handleGuildEventRemoval(e, t) {
                    var n;
                    if (H.default.compare(this.ackMessageId, t) >= 0) return;
                    let i = S.default.getGuildScheduledEventsForGuild(e),
                        a = this.getAckTimestamp();
                    if (isNaN(a)) return;
                    let l = null !== (n = this._ackMessageId) && void 0 !== n ? n : H.default.fromTimestamp(a),
                        s = null,
                        r = 0;
                    i.forEach(e => {
                        (0, S.isEventUpcoming)(e) && (H.default.compare(e.id, s) > 0 && (s = e.id), H.default.compare(e.id, l) > 0 && r++)
                    }), this.lastMessageId = s, this.mentionCount = r
                }
                canTrackUnreads() {
                    if (this.type !== es.ReadStateTypes.CHANNEL) return !0;
                    if (this._isThread && !this._isActiveThread || this._isResourceChannel) return !1;
                    let e = Y.default.getBasicChannel(this.channelId);
                    return null != e && ("basicPermissions" in e ? G.default.has(e.basicPermissions, en.BasicPermissions.VIEW_CHANNEL) : !C.default.isChannelGated(this.guildId, this.channelId) || X.default.can(en.Permissions.VIEW_CHANNEL, e))
                }
                canBeUnread() {
                    return !(this._isThread && !this._isJoinedThread || (0, A.isMessageRequestOrSpamRequest)(this.channelId, [g.default, N.default]) || !this._isThread && (0, v.isOptInEnabledForGuild)(this._guildId) && (this._lastMessageTimestamp < eC || !$.default.isChannelOrParentOptedIn(this._guildId, this.channelId) && !this.hasRecentlyVisitedAndRead() && !this.hasMentions())) && this.canTrackUnreads()
                }
                canHaveMentions() {
                    return !(0 === this.mentionCount || this._isThread && !this._isJoinedThread || (0, A.isMessageRequestOrSpamRequest)(this.channelId, [g.default, N.default]) || (0, v.isOptInEnabledForGuild)(this._guildId) && this._lastMessageTimestamp < eC) && this.canTrackUnreads()
                }
                getGuildChannelUnreadState(e, t, n, i, a) {
                    if (t && (this._lastMessageTimestamp < eC || !$.default.isChannelRecordOrParentOptedIn(e) && !this.hasRecentlyVisitedAndRead() && this.mentionCount <= 0)) return {
                        mentionCount: 0,
                        unread: !1
                    };
                    if ("basicPermissions" in e) {
                        if (!G.default.has(e.basicPermissions, en.BasicPermissions.VIEW_CHANNEL)) return {
                            mentionCount: 0,
                            unread: !1
                        }
                    } else if (C.default.isChannelGated(this.guildId, this.channelId) && !X.default.can(en.Permissions.VIEW_CHANNEL, e)) return {
                        mentionCount: 0,
                        unread: !1
                    };
                    return i || a ? {
                        mentionCount: this.mentionCount,
                        unread: !1
                    } : {
                        mentionCount: this.mentionCount,
                        unread: this.getAckTimestamp() < this._lastMessageTimestamp
                    }
                }
                hasUnread() {
                    return this.getAckTimestamp() < this._lastMessageTimestamp
                }
                hasRecentlyVisitedAndRead() {
                    return this._lastMessageTimestamp > 0 && null != this._ackMessageId && this.getAckTimestamp() > em && P.default.getGuildRecentsDismissedAt(this._guildId) < this.getAckTimestamp()
                }
                isForumPostUnread() {
                    return !!this._isActiveThread && this.hasUnread()
                }
                hasMentions() {
                    return this.getMentionCount() > 0
                }
                getMentionCount() {
                    return this.mentionCount
                }
                hasUnreadOrMentions() {
                    return this.hasMentions() || this.hasUnread()
                }
                ackPins() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                    if (this.type !== es.ReadStateTypes.CHANNEL || !this.canTrackUnreads()) return !1;
                    if (null == e) {
                        if (this.lastPinTimestamp === this.ackPinTimestamp) return !1;
                        this._persisted = !0, eR(() => c.default.post({
                            url: en.Endpoints.PINS_ACK(this.channelId),
                            oldFormErrors: !0
                        }))
                    }
                    let t = eg(e);
                    return this.ackPinTimestamp = 0 !== t ? t : this.lastPinTimestamp, !0
                }
                ack(e) {
                    let {
                        messageId: t,
                        local: n = !1,
                        immediate: i = !1,
                        force: a = !1,
                        isExplicitUserAction: l = !1,
                        location: s = {
                            section: en.AnalyticsSections.CHANNEL
                        },
                        trackAnalytics: r = !0
                    } = e;
                    if (!this._shouldAck(a, n, l) || !a && !this.canTrackUnreads()) return !1;
                    let u = this.hasMentions();
                    return this.estimated = !1, this.unreadCount = 0, this.mentionCount = 0, (null != t || null != (t = this.lastMessageId)) && (this.ackMessageId = t, this.isManualAck = !1, this._persisted = !0, e_ && (this.ackedWhileCached = !0), function(e) {
                        if (null == e) return;
                        let t = ev.get(e);
                        if (t.type !== es.ReadStateTypes.CHANNEL) return;
                        let n = Y.default.getChannel(t.channelId);
                        if (null == n || !n.isForumPost() || null == n.parent_id) return;
                        let i = n.parent_id,
                            a = ev.get(i);
                        D.default.hasLoaded(n.guild_id) && Object.keys(D.default.getThreadsForParent(n.guild_id, i)).every(e => eQ.hasOpenedThread(e) || 0 > H.default.compare(e, a.ackMessageId)) && a.ack({})
                    }(this.channelId), n ? this.oldestUnreadMessageId = null : (null == this.outgoingAck && (this.outgoingAckTimer = setTimeout(() => {
                        this.type === es.ReadStateTypes.CHANNEL ? this._ack(s, r) : this._nonChannelAck(), this.outgoingAck = null, this.outgoingAckTimer = null
                    }, u || i ? 0 : 3e3)), this.outgoingAck = t), !0)
                }
                clearOutgoingAck() {
                    this.outgoingAck = null, null != this.outgoingAckTimer && (clearTimeout(this.outgoingAckTimer), this.outgoingAckTimer = null)
                }
                _shouldAck(e, t, n) {
                    var i;
                    return !!e || !!n || !!t || !!(!this.isManualAck && (this.type !== es.ReadStateTypes.CHANNEL || this.loadedMessages || (null === (i = Y.default.getChannel(this.channelId)) || void 0 === i ? void 0 : i.isForumLikeChannel()))) || !1
                }
                _ack(e, t) {
                    let {
                        outgoingAck: n
                    } = this;
                    if (null == n) return;
                    let i = x.default.getId(),
                        a = ec;
                    this._persisted = !0;
                    let l = this.recalculateFlags(),
                        s = l === this.flags ? void 0 : l;
                    eR(() => c.default.post({
                        url: en.Endpoints.MESSAGE_ACK(this.channelId, n),
                        body: {
                            token: ec,
                            last_viewed: this.lastViewed,
                            flags: s
                        },
                        oldFormErrors: !0
                    })).then(n => {
                        if (null != n && (ec === a && i === x.default.getId() && (ec = n.body.token), f.default.dispatch({
                                type: "MESSAGE_ACKED",
                                channelId: this.channelId
                            }), t)) {
                            let t = Y.default.getChannel(this.channelId);
                            (0, p.trackWithMetadata)(en.AnalyticEvents.ACK_MESSAGES, {
                                channel_id: this.channelId,
                                guild_id: null == t ? void 0 : t.getGuildId(),
                                location: e
                            })
                        }
                    })
                }
                recalculateFlags() {
                    if (this.type !== es.ReadStateTypes.CHANNEL) return;
                    let e = Y.default.getChannel(this.channelId);
                    if (null != e) return e.isThread() ? 2 : null != e.guild_id ? 1 : 0
                }
                _nonChannelAck() {
                    let e;
                    let {
                        outgoingAck: t,
                        channelId: n,
                        type: i
                    } = this;
                    if (null != t) {
                        switch (i) {
                            case es.ReadStateTypes.GUILD_HOME:
                            case es.ReadStateTypes.GUILD_EVENT:
                            case es.ReadStateTypes.GUILD_ONBOARDING_QUESTION:
                                e = en.Endpoints.GUILD_FEATURE_ACK(n, t, i);
                                break;
                            case es.ReadStateTypes.NOTIFICATION_CENTER:
                                e = en.Endpoints.USER_NON_CHANNEL_ACK(t, i);
                                break;
                            default:
                                return
                        }
                        this._persisted = !0, eR(() => c.default.post({
                            url: e,
                            body: {},
                            oldFormErrors: !0
                        }))
                    }
                }
                delete() {
                    var e;
                    let t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                        n = Y.default.getBasicChannel(this.channelId);
                    er.log("Deleting ReadState", this.channelId, this.type, {
                        remote: t,
                        persisted: this._persisted,
                        channelMissing: null == n,
                        isOld: eb(this, eT()),
                        validType: null != n && b.ALL_CHANNEL_TYPES.has(n.type),
                        readableType: null != n && (0, b.isReadableType)(n.type),
                        oldThreadCutoff: eT(),
                        mentionCount: this.mentionCount,
                        channelId: this.channelId,
                        ackMessageId: this._ackMessageId,
                        lastMessageId: this._lastMessageId
                    }), t && this._persisted && c.default.delete({
                        url: en.Endpoints.CHANNEL_ACK(this.channelId),
                        body: {
                            version: 2,
                            read_state_type: this.type
                        },
                        oldFormErrors: !0
                    }), null === (e = ev._readStates[this.type]) || void 0 === e || delete e[this.channelId], ev._mentionChannels.delete(this.channelId)
                }
                shouldDeleteReadState(e) {
                    if (0 !== W.default.totalUnavailableGuilds) return !1;
                    if (null != this.type && this.type !== es.ReadStateTypes.CHANNEL) return ! function(e) {
                        switch (e.type) {
                            case es.ReadStateTypes.GUILD_HOME:
                            case es.ReadStateTypes.GUILD_EVENT:
                            case es.ReadStateTypes.GUILD_ONBOARDING_QUESTION:
                                return null != z.default.getGuild(e.channelId);
                            case es.ReadStateTypes.NOTIFICATION_CENTER:
                                var t;
                                return (null === (t = ee.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) === e.channelId;
                            default:
                                return !0
                        }
                    }(this);
                    let t = Y.default.getBasicChannel(this.channelId);
                    if (null == t) return !!eb(this, e) || !1;
                    return !!b.ALL_CHANNEL_TYPES.has(t.type) && (!(0, b.isReadableType)(t.type) || !(0, b.isPrivate)(t.type) && (!!(b.THREAD_CHANNEL_TYPES.has(t.type) && function(e, t, n) {
                        let i = e.guildId,
                            a = null != i && D.default.isActive(i, t.parent_id, e.channelId);
                        return !a && eb(e, n)
                    }(this, t, e)) || !!(this.mentionCount > 0) && !X.default.canBasicChannel(eu, t) || !1))
                }
                getAckTimestamp() {
                    let e, t;
                    if (0 !== this._ackMessageTimestamp) return this._ackMessageTimestamp;
                    if (this._isThread) return this._ackMessageTimestamp = eU(this.guildId, this.channelId), this._ackMessageId = H.default.fromTimestamp(this._ackMessageTimestamp), this._ackMessageTimestamp;
                    if (this.type === es.ReadStateTypes.GUILD_EVENT || this.type === es.ReadStateTypes.GUILD_ONBOARDING_QUESTION) e = z.default.getGuild(this.channelId);
                    else if ((0, ea.isStaticChannelRoute)(this.channelId)) e = z.default.getGuild(this.guildId);
                    else {
                        let t = Y.default.getChannel(this.channelId);
                        if (null != t) {
                            let n = t.getGuildId();
                            e = z.default.getGuild(n)
                        }
                    }
                    return t = null != e ? eP(e) : H.default.extractTimestamp(this.channelId), this._ackMessageTimestamp = t, t
                }
                get oldestUnreadTimestamp() {
                    return null != this.oldestUnreadMessageId ? H.default.extractTimestamp(this.oldestUnreadMessageId) : 0
                }
                syncThreadSettings() {
                    this._isThread = !0;
                    let e = Y.default.getChannel(this.channelId);
                    if (null == e) return er.warn("syncThreadSettings called with channel not in memory ".concat(this.channelId)), !1;
                    let t = this.guildId,
                        n = null != t && D.default.isActive(t, e.parent_id, this.channelId),
                        i = L.default.hasJoined(this.channelId);
                    return (this._isActiveThread !== n || this._isJoinedThread !== i) && (this._isActiveThread = n, this._isJoinedThread = i, !0)
                }
                recordLastViewedTime() {
                    let e = Math.ceil((Date.now() - H.DISCORD_EPOCH) / k.default.Millis.DAY);
                    e !== this.lastViewed && (this.lastViewed = e, this.canTrackUnreads() && !this.hasUnread() && this.ack({
                        force: !0,
                        trackAnalytics: !1
                    }))
                }
                constructor(e, t = es.ReadStateTypes.CHANNEL) {
                    this.type = es.ReadStateTypes.CHANNEL, this.outgoingAckTimer = null, this.ackMessageIdAtChannelSelect = null, this.ackedWhileCached = void 0, this.channelId = e, this.type = t, this._guildId = null, this._isThread = !1, this._isActiveThread = !1, this._isJoinedThread = !1, this._isResourceChannel = !1, this._persisted = !1, this.loadedMessages = !1, this._lastMessageId = null, this._lastMessageTimestamp = 0, this._ackMessageId = null, this._ackMessageTimestamp = 0, this.isManualAck = !1, this.ackPinTimestamp = 0, this.lastPinTimestamp = 0, this._oldestUnreadMessageId = null, this.oldestUnreadMessageIdStale = !1, this.estimated = !1, this._unreadCount = 0, this._mentionCount = 0, this.outgoingAck = null
                }
            }

            function eM(e) {
                e.forEach(e => {
                    if ((0, b.isReadableType)(e.type)) {
                        let t = ev.get(e.id);
                        t._guildId = e.guild_id, t.lastMessageId = e.lastMessageId, t.lastPinTimestamp = eg(e.lastPinTimestamp), t._isResourceChannel = e.hasFlag(ea.ChannelFlags.IS_GUILD_RESOURCE_CHANNEL), b.THREAD_CHANNEL_TYPES.has(e.type) && t.syncThreadSettings()
                    }
                })
            }

            function eD(e) {
                e.forEach(e => {
                    if ((0, b.isReadableType)(e.type)) {
                        var t;
                        let n = ev.get(e.id);
                        n.lastMessageId = e.last_message_id, n.lastPinTimestamp = eg(e.last_pin_timestamp), n._isResourceChannel = (0, F.hasFlag)(null !== (t = e.flags) && void 0 !== t ? t : 0, ea.ChannelFlags.IS_GUILD_RESOURCE_CHANNEL), b.THREAD_CHANNEL_TYPES.has(e.type) && n.syncThreadSettings()
                    }
                })
            }

            function eL(e) {
                (function(e) {
                    var t;
                    null === (t = e.threads) || void 0 === t || t.forEach(t => {
                        if (!b.ALL_CHANNEL_TYPES.has(t.type)) return;
                        let n = ev.get(t.id);
                        n.lastMessageId = t.lastMessageId, n.lastPinTimestamp = eg(t.lastPinTimestamp), n._isThread = !0, n._isActiveThread = !0, n._isJoinedThread = null != t.member, null == n.ackMessageId && (n.ackMessageId = H.default.fromTimestamp(eU(e.id, t.id))), null == n.ackPinTimestamp && (n.ackPinTimestamp = eU(e.id, t.id))
                    })
                })(e),
                function(e) {
                    var t, n;
                    if ((null === (t = e.guild_scheduled_events) || void 0 === t ? void 0 : t.length) === 0 && null == ev.getIfExists(e.id, es.ReadStateTypes.GUILD_EVENT)) return;
                    let i = ev.get(e.id, es.ReadStateTypes.GUILD_EVENT);
                    i._guildId = e.id;
                    let a = 0,
                        l = null,
                        s = null !== (n = i._ackMessageId) && void 0 !== n ? n : H.default.fromTimestamp(i.getAckTimestamp());
                    e.guild_scheduled_events.forEach(e => {
                        H.default.compare(e.id, l) > 0 && (l = e.id), H.default.compare(e.id, s) > 0 && a++
                    }), i.lastMessageId = l, i.mentionCount = a
                }(e),
                function(e) {
                    let t = ev.get(e.id, es.ReadStateTypes.GUILD_HOME);
                    t.lastMessageId = H.default.fromTimestamp(o(Date.now()).subtract(24, "h").valueOf())
                }(e),
                function(e) {
                    let t = e.properties.latest_onboarding_question_id;
                    if (null == t) return;
                    let n = ev.get(e.id, es.ReadStateTypes.GUILD_ONBOARDING_QUESTION);
                    n._guildId = e.id, n.lastMessageId = t
                }(e)
            }
            ev._guildReadStateSentinels = {}, ev._readStates = {}, ev._mentionChannels = new Set;

            function eU(e, t) {
                var n, i, a;
                let l = Y.default.getChannel(t),
                    s = z.default.getGuild(null != e ? e : null == l ? void 0 : l.guild_id),
                    r = (null == l ? void 0 : l.isForumPost()) ? 0 : eP(s),
                    u = (null !== (a = null === (n = L.default.joinTimestamp(t)) || void 0 === n ? void 0 : n.getTime()) && void 0 !== a ? a : 0) - 5e3,
                    o = null == l ? void 0 : null === (i = l.threadMetadata) || void 0 === i ? void 0 : i.archiveTimestamp,
                    d = null != o ? new Date(o).getTime() - 1 : 0,
                    c = Math.max(u, d);
                return c <= 0 && (c = H.default.extractTimestamp(t) - 1), isNaN(r) ? c : Math.max(r, c)
            }

            function eP(e) {
                if (null != e && null != e.joinedAt) {
                    if (e.joinedAt instanceof Date) return e.joinedAt.getTime();
                    if ("string" == typeof e.joinedAt) return new Date(e.joinedAt).getTime();
                    else if ("number" == typeof e.joinedAt && !isNaN(e.joinedAt)) return e.joinedAt
                }
                return Date.now()
            }

            function eb(e, t) {
                return !!(e.mentionCount > 0) || !(H.default.compare(e.channelId, t) > 0 || null != e._ackMessageId && H.default.compare(e._ackMessageId, t) > 0 || null != e._lastMessageId && H.default.compare(e._lastMessageId, t) > 0) && !0
            }

            function eG(e) {
                if (null != e) {
                    let t = ev.get(e);
                    if (ey(t)) return t.ack({})
                }
                return !1
            }

            function ek() {
                null != eh && clearTimeout(eh)
            }

            function eF(e) {
                if (null != e.channelUpdates) {
                    var t;
                    eM(null === (t = e.channelUpdates) || void 0 === t ? void 0 : t.writes)
                }
                if (null != e.channelTimestampUpdates)
                    for (let t of e.channelTimestampUpdates) {
                        let e = ev.get(t.id);
                        null != t.last_message_id && (e.lastMessageId = t.last_message_id), null != t.last_pin_timestamp && (e.lastPinTimestamp = eg(t.last_pin_timestamp))
                    }
            }

            function ew(e) {
                let {
                    channelId: t
                } = e, n = ev.get(t);
                n.rebuildChannelState()
            }

            function eV(e) {
                let {
                    threads: t
                } = e;
                eD(t)
            }

            function eH(e) {
                let t = ee.default.getCurrentUser();
                return null != e.creator_id && null != t && e.creator_id === t.id
            }

            function ex(e) {
                let {
                    channel: t
                } = e;
                return ev.clear(t.id)
            }

            function eB() {
                let e = B.default.getCurrentSidebarChannelId(eo),
                    t = !1;
                return ed !== e ? (t = eK(ed), ed = e) : t = eG(e) || t, t
            }

            function eY(e) {
                if (null == e) return;
                let t = ev.get(e);
                t.isManualAck = !1
            }

            function eK(e) {
                if (null == e) return !1;
                let t = ev.get(e);
                return !t.hasUnread() && (t.oldestUnreadMessageId = null, !0)
            }

            function ej(e) {
                let {
                    channelId: t,
                    messageId: n,
                    manual: i,
                    newMentionCount: a
                } = e, l = ev.get(t);
                return i ? (l.rebuildChannelState(n, !0, a), !0) : n !== l._ackMessageId && l.ack({
                    messageId: n,
                    local: !0
                })
            }

            function eW(e) {
                let {
                    id: t,
                    ackType: n,
                    ackedId: i,
                    local: a
                } = e;
                return ez(t, n, i, a)
            }

            function ez(e, t, n, i) {
                var a;
                let l = ev.get(e, t);
                return n !== l.ackMessageId && l.lastMessageId !== l.ackMessageId && (null != l.lastMessageId || 0 !== l.mentionCount) && (n = null !== (a = null != n ? n : l.lastMessageId) && void 0 !== a ? a : H.default.fromTimestamp(l.getAckTimestamp()), l.ack({
                    messageId: n,
                    local: null == i || i
                }))
            }
            class eq extends d.default.Store {
                initialize() {
                    this.waitFor(K.default, ee.default, z.default, W.default, Y.default, J.default, Q.default, X.default, T.default, D.default, L.default, B.default, S.default, j.default, C.default, $.default, et.default, R.default, g.default, P.default, N.default), this.syncWith([B.default], eB)
                }
                getReadStatesByChannel() {
                    var e;
                    return null !== (e = ev._readStates[es.ReadStateTypes.CHANNEL]) && void 0 !== e ? e : {}
                }
                getForDebugging(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es.ReadStateTypes.CHANNEL;
                    return ev.getIfExists(e, t)
                }
                getNotifCenterReadState(e) {
                    return ev._readStates[es.ReadStateTypes.NOTIFICATION_CENTER][e]
                }
                hasUnread(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es.ReadStateTypes.CHANNEL;
                    return ev.getValue(e, t, e => e.canBeUnread() && e.hasUnread(), !1)
                }
                hasTrackedUnread(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es.ReadStateTypes.CHANNEL;
                    return ev.getValue(e, t, e => e.canTrackUnreads() && e.hasUnread(), !1)
                }
                isForumPostUnread(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es.ReadStateTypes.CHANNEL;
                    return ev.getValue(e, t, e => e.isForumPostUnread(), !1)
                }
                getUnreadCount(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es.ReadStateTypes.CHANNEL;
                    return ev.getValue(e, t, e => e.canBeUnread() ? e.unreadCount : 0, 0)
                }
                getMentionCount(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es.ReadStateTypes.CHANNEL;
                    return ev.getValue(e, t, e => e.canHaveMentions() ? e.getMentionCount() : 0, 0)
                }
                getGuildChannelUnreadState(e, t, n, i, a) {
                    return ev.getValue(e.id, es.ReadStateTypes.CHANNEL, l => l.getGuildChannelUnreadState(e, t, n, i, a), {
                        mentionCount: 0,
                        unread: !1
                    })
                }
                hasRecentlyVisitedAndRead(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es.ReadStateTypes.CHANNEL;
                    return ev.getValue(e, t, e => e.hasRecentlyVisitedAndRead(), !1)
                }
                ackMessageId(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es.ReadStateTypes.CHANNEL;
                    return ev.getValue(e, t, e => e.canBeUnread() ? e.ackMessageId : null, null)
                }
                getTrackedAckMessageId(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es.ReadStateTypes.CHANNEL;
                    return ev.getValue(e, t, e => e.canTrackUnreads() ? e._ackMessageId : null, null)
                }
                lastMessageId(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es.ReadStateTypes.CHANNEL;
                    return ev.getValue(e, t, e => e.lastMessageId, null)
                }
                lastMessageTimestamp(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es.ReadStateTypes.CHANNEL;
                    return ev.getValue(e, t, e => e.lastMessageTimestamp, 0)
                }
                lastPinTimestamp(e) {
                    return ev.getValue(e, es.ReadStateTypes.CHANNEL, e => e.lastPinTimestamp, null)
                }
                getOldestUnreadMessageId(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es.ReadStateTypes.CHANNEL;
                    return ev.getValue(e, t, e => e.canTrackUnreads() ? e.oldestUnreadMessageId : null, null)
                }
                getOldestUnreadTimestamp(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es.ReadStateTypes.CHANNEL;
                    return ev.getValue(e, t, e => e.canTrackUnreads() ? e.oldestUnreadTimestamp : 0, 0)
                }
                isEstimated(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es.ReadStateTypes.CHANNEL;
                    return ev.getValue(e, t, e => e.estimated, !1)
                }
                hasOpenedThread(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es.ReadStateTypes.CHANNEL;
                    return ev.getValue(e, t, e => e._persisted, !1)
                }
                hasUnreadPins(e) {
                    return ev.getValue(e, es.ReadStateTypes.CHANNEL, e => e.canBeUnread() && e.lastPinTimestamp > e.ackPinTimestamp, !1)
                }
                isNewForumThread(e, t, n) {
                    let i = ev.get(t),
                        a = ev.get(e);
                    if (!0 === a._persisted || null == i.ackMessageIdAtChannelSelect || 0 >= H.default.compare(e, i.ackMessageIdAtChannelSelect)) return !1;
                    let l = eP(n),
                        s = H.default.extractTimestamp(e);
                    return s > l
                }
                getAllReadStates(e) {
                    let t = [];
                    return ev.forEach(n => {
                        switch (n.type) {
                            case es.ReadStateTypes.GUILD_HOME:
                            case es.ReadStateTypes.GUILD_EVENT:
                            case es.ReadStateTypes.GUILD_ONBOARDING_QUESTION:
                                let i = z.default.getGuild(n.channelId);
                                null != i && t.push(n.serialize(e));
                                break;
                            case es.ReadStateTypes.NOTIFICATION_CENTER:
                                var a;
                                let l = null === (a = ee.default.getCurrentUser()) || void 0 === a ? void 0 : a.id;
                                l === n.channelId && t.push(n.serialize(e));
                                break;
                            default:
                                t.push(n.serialize(e))
                        }
                    }), t
                }
                getGuildUnreadsSentinel(e) {
                    return ev.getGuildSentinels(e).unreadsSentinel
                }
                getMentionChannelIds() {
                    return ev.getMentionChannelIds()
                }
            }
            eq.displayName = "ReadStateStore";
            let eQ = new eq(f.default, {
                CONNECTION_OPEN: function(e) {
                    var t, n;
                    let {
                        guilds: i,
                        relationships: a,
                        initialPrivateChannels: l,
                        readState: s
                    } = e;
                    eI(), ec = null, !e_ && !s.partial && ev.clearAll(), e_ = !1, s.entries.forEach(e => {
                        var t, n, i;
                        let a = null !== (t = e.read_state_type) && void 0 !== t ? t : es.ReadStateTypes.CHANNEL;
                        if (a !== es.ReadStateTypes.CHANNEL) {
                            ;
                            e = {
                                id: (i = e).id,
                                read_state_type: i.read_state_type,
                                mention_count: i.badge_count,
                                last_message_id: i.last_acked_id
                            }
                        }
                        let l = ev.get(e.id, a);
                        l._persisted = !0, l._mentionCount = null !== (n = e.mention_count) && void 0 !== n ? n : 0, l.flags = e.flags, l.lastViewed = e.last_viewed;
                        let s = Y.default.getBasicChannel(e.id);
                        null != s && (0, b.isThread)(s.type) && (null == e.last_message_id || 0 === e.last_message_id) ? l.ackMessageId = H.default.fromTimestamp(eU(s.guild_id, s.id)) : l.ackedWhileCached ? -1 === H.default.compare(l.ackMessageId, e.last_message_id) && (l.ackMessageId = e.last_message_id) : l.ackMessageId = e.last_message_id, l.ackedWhileCached = void 0, l.ackPinTimestamp = eg(e.last_pin_timestamp), ev._mentionChannels.delete(l.channelId), l._mentionCount > 0 && l.canHaveMentions() && ev._mentionChannels.add(l.channelId)
                    }), ev.resetGuildSentinels();
                    let r = null === (t = ee.default.getCurrentUser()) || void 0 === t ? void 0 : t.id;
                    if (null != r) {
                        let e = ev.get(r, es.ReadStateTypes.NOTIFICATION_CENTER);
                        e.lastMessageId = H.default.fromTimestamp(Date.now())
                    }
                    for (let e of (function(e) {
                            let t = ee.default.getCurrentUser();
                            if (!(0, y.inNotificationCenterEnabled)() || null == t) return 0;
                            let n = ev.get(t.id, es.ReadStateTypes.NOTIFICATION_CENTER);
                            e.forEach(e => {
                                if (null == e.since || e.type !== en.RelationshipTypes.PENDING_INCOMING) return;
                                let t = new Date(e.since).getTime(),
                                    i = null != n.ackMessageId ? H.default.extractTimestamp(n.ackMessageId) : 0;
                                i < t && (n.mentionCount++, n.lastMessageId = H.default.fromTimestamp(t))
                            })
                        }(a), eM(l), i)) eM(null !== (n = e.channels) && void 0 !== n ? n : []), eF(e), eL(e);
                    ek(), eh = setTimeout(() => (function(e) {
                        let t = eT();
                        for (let i of e) {
                            var n;
                            let e = null !== (n = i.read_state_type) && void 0 !== n ? n : es.ReadStateTypes.CHANNEL,
                                a = ev.get(i.id, e);
                            a.shouldDeleteReadState(t) && a.delete()
                        }
                    })(s.entries), 1e4)
                },
                CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
                    let {
                        lazyPrivateChannels: t
                    } = e;
                    eM(t)
                },
                LOGOUT: ek,
                OVERLAY_INITIALIZE: function(e) {
                    let {
                        readStates: t,
                        selectedChannelId: n
                    } = e;
                    eI(), ec = null, eo = n, ed = B.default.getCurrentSidebarChannelId(eo), ev.clearAll(), t.forEach(e => {
                        let t = ev.get(e.channelId);
                        t.deserializeForOverlay(e), t.type === es.ReadStateTypes.CHANNEL && t.rebuildChannelState()
                    })
                },
                CACHE_LOADED: function(e) {
                    let {
                        readStates: t
                    } = e;
                    e_ = !0, eI(), t.forEach(e => {
                        var t;
                        let n = null !== (t = e.type) && void 0 !== t ? t : es.ReadStateTypes.CHANNEL;
                        e.type = n, null == ev._readStates[n] && (ev._readStates[n] = {}), ev._readStates[n][e.channelId] = (0, E.dangerouslyCast)(e, ev)
                    })
                },
                GUILD_CREATE: function(e) {
                    var t;
                    let {
                        guild: n
                    } = e, i = eT();
                    ev.forEach(e => {
                        e.guildId === n.id && e.shouldDeleteReadState(i) && e.delete(!1)
                    }), eM(null !== (t = n.channels) && void 0 !== t ? t : []), eF(n), eL(n)
                },
                LOAD_MESSAGES_SUCCESS: function(e) {
                    let {
                        channelId: t,
                        isAfter: n,
                        messages: i
                    } = e, a = ev.get(t);
                    a.loadedMessages = !0;
                    let l = Q.default.getMessages(t);
                    null != l && (i.length > 0 && 1 === H.default.compare(i[0].id, a.ackMessageId) && 0 === a.unreadCount ? a.rebuildChannelState() : l.hasPresent() || l.jumpTargetId === a.ackMessageId ? a.rebuildChannelState() : n && null != a.ackMessageId && l.has(a.ackMessageId, !0) && (a.unreadCount += i.length, null == a.oldestUnreadMessageId && a.rebuildChannelState())), eD(i.map(e => e.thread).filter(w.isNotNullish))
                },
                MESSAGE_CREATE: function(e) {
                    let t, n, {
                            channelId: a,
                            message: l,
                            isPushNotification: s
                        } = e,
                        r = ev.get(a);
                    r.lastMessageId = l.id;
                    let u = ee.default.getCurrentUser(),
                        o = Y.default.getBasicChannel(a);
                    if (null != l.author && null != u && l.author.id === u.id) return null != r.outgoingAck && r.clearOutgoingAck(), ej({
                        channelId: a,
                        messageId: l.id,
                        manual: !1
                    });
                    let d = (0, I.getRootNavigationRefIfInExperiment)();
                    if ((null == d ? void 0 : d.isReady()) === !0) {
                        let e = d.getCurrentRoute(),
                            n = T.default.getChatOpen(r.channelId);
                        if (n) t = r.channelId;
                        else if ((null == e ? void 0 : e.name) === "channel") t = e.params.channelId;
                        else if ((null == e ? void 0 : e.name) === "guilds") {
                            var c;
                            t = null === (c = e.params) || void 0 === c ? void 0 : c.channelId
                        }
                    } else null == d && (t = J.default.getChannelId(), n = B.default.getCurrentSidebarChannelId(t));
                    let _ = t === a || n === a;
                    if (_ && ey(r) && !s || null != i && i.isInstanceFocused() && _ && i.isInstanceUILocked() && i.isPinned(en.OverlayWidgets.TEXT)) return r.ack({
                        messageId: l.id
                    });
                    (null == r.oldestUnreadMessageId || r.oldestUnreadMessageIdStale) && (r.oldestUnreadMessageId = l.id), r.unreadCount++;
                    let E = null != l.author && Z.default.isBlocked(l.author.id) || l.type === en.MessageTypes.RECIPIENT_REMOVE && (null == o ? void 0 : o.type) === en.ChannelTypes.GROUP_DM;
                    !E && (null != u && (0, O.isRawMessageMentioned)({
                        rawMessage: l,
                        userId: u.id,
                        suppressEveryone: $.default.isSuppressEveryoneEnabled(r.guildId),
                        suppressRoles: $.default.isSuppressRolesEnabled(r.guildId)
                    }) || eN(Y.default.getChannel(a))) && r.mentionCount++
                },
                MESSAGE_DELETE: ew,
                MESSAGE_DELETE_BULK: ew,
                MESSAGE_ACK: ej,
                CHANNEL_ACK: function(e) {
                    let {
                        channelId: t,
                        messageId: n,
                        immediate: i = !1,
                        force: a = !1,
                        context: l,
                        location: s
                    } = e, r = ev.get(t), u = r.ack({
                        messageId: n,
                        local: l !== en.CURRENT_APP_CONTEXT,
                        immediate: i,
                        force: a,
                        isExplicitUserAction: !0,
                        location: s
                    });
                    return null != n ? (r.rebuildChannelState(), !0) : u
                },
                CHANNEL_LOCAL_ACK: function(e) {
                    let {
                        channelId: t
                    } = e, n = ev.get(t);
                    return n.ack({
                        messageId: void 0,
                        local: !0,
                        immediate: void 0,
                        force: void 0,
                        isExplicitUserAction: !0
                    })
                },
                CHANNEL_PINS_ACK: function(e) {
                    let {
                        channelId: t,
                        timestamp: n
                    } = e, i = ev.get(t);
                    return i.ackPins(n)
                },
                CHANNEL_PINS_UPDATE: function(e) {
                    let {
                        channelId: t,
                        lastPinTimestamp: n
                    } = e, i = ev.get(t), a = eg(n);
                    return i.lastPinTimestamp !== a && (i.lastPinTimestamp = a, !0)
                },
                CHANNEL_SELECT: function(e) {
                    let {
                        channelId: t
                    } = e, n = B.default.getCurrentSidebarChannelId(t), i = Y.default.getChannel(t);
                    if (null != i) {
                        var a;
                        let e = ev.get(i.id);
                        e.ackMessageIdAtChannelSelect = null !== (a = e.ackMessageId) && void 0 !== a ? a : H.default.fromTimestamp(e.getAckTimestamp()), e.recordLastViewedTime()
                    }
                    eY(eo), eY(ed);
                    let l = !1;
                    return eo !== t && (l = eK(eo) || l, l = eK(ed) || l), (eo === t || (null == i ? void 0 : i.type) != null && en.ChannelTypesSets.GUILD_THREADS_ONLY.has(i.type)) && (l = eG(t) || l), eo === t && (l = eG(n) || l), eo = t, ed = n, l
                },
                VOICE_CHANNEL_SELECT: function(e) {
                    let {
                        channelId: t
                    } = e;
                    if (null == t) return;
                    let n = ev.get(t);
                    if (!n.hasMentions()) return n.oldestUnreadMessageId = null, n.ack({
                        isExplicitUserAction: !0
                    })
                },
                CHANNEL_CREATE: function(e) {
                    let {
                        channel: t
                    } = e;
                    if (!(0, b.isReadableType)(t.type)) return !1;
                    let n = ev.get(t.id);
                    n.lastMessageId = t.lastMessageId, n.lastPinTimestamp = eg(t.lastPinTimestamp)
                },
                THREAD_CREATE: function(e) {
                    let {
                        channel: t
                    } = e;
                    (function(e) {
                        if (!b.ALL_CHANNEL_TYPES.has(e.type)) return 0;
                        let t = ev.get(e.id);
                        t.lastMessageId = e.lastMessageId, t.lastPinTimestamp = eg(e.lastPinTimestamp), t.syncThreadSettings(), e.ownerId === x.default.getId() && (t.loadedMessages = !0)
                    })(t),
                    function(e) {
                        let t = e.parent_id,
                            n = ev.get(t);
                        n.lastMessageId = e.id;
                        let i = ee.default.getCurrentUser();
                        if (e.ownerId === (null == i ? void 0 : i.id)) {
                            let n = ev.get(e.id);
                            n._persisted = !0, ej({
                                channelId: t,
                                messageId: e.id,
                                manual: !1
                            })
                        }
                    }(t)
                },
                THREAD_UPDATE: function(e) {
                    let {
                        channel: t
                    } = e;
                    return !!b.ALL_CHANNEL_TYPES.has(t.type) && ev.get(t.id).syncThreadSettings()
                },
                THREAD_LIST_SYNC: function(e) {
                    let {
                        threads: t
                    } = e;
                    t.forEach(e => {
                        if (!b.ALL_CHANNEL_TYPES.has(e.type)) return;
                        let t = ev.get(e.id);
                        if (t.lastMessageId = e.lastMessageId, t.lastPinTimestamp = eg(e.lastPinTimestamp), t._isThread = !0, t._isActiveThread = !0, t._isJoinedThread = L.default.hasJoined(e.id), e.isForumPost()) {
                            let t = ev.get(e.parent_id);
                            0 > H.default.compare(t.lastMessageId, e.id) && (t.lastMessageId = e.id)
                        }
                    })
                },
                LOAD_THREADS_SUCCESS: eV,
                LOAD_ARCHIVED_THREADS_SUCCESS: eV,
                SEARCH_FINISH: function(e) {
                    let {
                        messages: t,
                        threads: n
                    } = e;
                    for (let e of t) eD(e.map(e => {
                        let {
                            thread: t
                        } = e;
                        return t
                    }).filter(w.isNotNullish));
                    eD(n)
                },
                THREAD_MEMBER_UPDATE: function(e) {
                    let {
                        id: t
                    } = e;
                    return ev.get(t).syncThreadSettings()
                },
                THREAD_MEMBERS_UPDATE: function(e) {
                    return (0, U.doesThreadMembersActionAffectMe)(e) && ev.get(e.id).syncThreadSettings()
                },
                CHANNEL_DELETE: ex,
                THREAD_DELETE: ex,
                WINDOW_FOCUS: function(e) {
                    let t = !1;
                    for (let [n, i] of Object.entries(ep)) i === e.windowId && (t = function(e, t) {
                        if (null == e) return !1;
                        let n = ev.get(e);
                        return !t && !n.hasUnread() && (n.oldestUnreadMessageIdStale = !0), eG(e)
                    }(n, e.focused) || t);
                    return t
                },
                UPDATE_CHANNEL_DIMENSIONS: function(e) {
                    let {
                        channelId: t
                    } = e;
                    return eG(t)
                },
                CURRENT_USER_UPDATE: function() {
                    ec = null
                },
                DRAWER_OPEN: function() {
                    if (null != eo) {
                        let e = ev.get(eo);
                        !e.hasUnread() && (e.oldestUnreadMessageIdStale = !0)
                    }
                    return !1
                },
                DRAWER_CLOSE: function() {
                    return eG(eo)
                },
                BULK_ACK: function(e) {
                    var t, n, i;
                    let {
                        channels: a,
                        context: l,
                        onFinished: s
                    } = e, r = a.filter(e => null != e.messageId && eQ.hasUnread(e.channelId, e.readStateType));
                    t = r, n = l, i = s, t.forEach(e => {
                        let {
                            channelId: t,
                            messageId: n,
                            readStateType: i
                        } = e, a = ev.get(t, i);
                        a.ack({
                            messageId: n,
                            local: !0,
                            immediate: void 0,
                            force: void 0,
                            isExplicitUserAction: !0
                        })
                    }), n !== en.CURRENT_APP_CONTEXT || (eE.push(...t.map(e => ({
                        channel_id: e.channelId,
                        message_id: e.messageId,
                        read_state_type: e.readStateType
                    }))), ef || eO(i))
                },
                ENABLE_AUTOMATIC_ACK: function(e) {
                    let {
                        channelId: t,
                        windowId: n
                    } = e;
                    return ep[t] !== n && (r(void 0 === ep[t], "handleEnableAutomaticAck: channel already visible in another window"), ep[t] = n, eG(t))
                },
                DISABLE_AUTOMATIC_ACK: function(e) {
                    let {
                        channelId: t
                    } = e;
                    return ep[t] = void 0, !1
                },
                GUILD_FEATURE_ACK: eW,
                GUILD_SCHEDULED_EVENT_CREATE: function(e) {
                    let {
                        guildScheduledEvent: t
                    } = e, n = t.guild_id, i = ev.get(t.guild_id, es.ReadStateTypes.GUILD_EVENT);
                    if (i.lastMessageId = t.id, eH(t)) {
                        eW({
                            type: "GUILD_FEATURE_ACK",
                            id: n,
                            ackType: es.ReadStateTypes.GUILD_EVENT,
                            ackedId: t.id,
                            local: !1
                        });
                        return
                    }!$.default.isMuteScheduledEventsEnabled(n) && i.mentionCount++
                },
                GUILD_SCHEDULED_EVENT_UPDATE: function(e) {
                    let {
                        guildScheduledEvent: t
                    } = e, n = t.guild_id;
                    if (eH(t) || ![el.GuildScheduledEventStatus.CANCELED, el.GuildScheduledEventStatus.COMPLETED].includes(t.status)) return !1;
                    let i = ev.get(n, es.ReadStateTypes.GUILD_EVENT);
                    i.handleGuildEventRemoval(n, t.id)
                },
                GUILD_SCHEDULED_EVENT_DELETE: function(e) {
                    let {
                        guildScheduledEvent: t
                    } = e, n = t.guild_id;
                    if (eH(t)) return !1;
                    let i = ev.get(t.guild_id, es.ReadStateTypes.GUILD_EVENT);
                    i.handleGuildEventRemoval(n, t.id)
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    return ev.clear(t.id, es.ReadStateTypes.GUILD_EVENT)
                },
                GUILD_UPDATE: function(e) {
                    let {
                        guild: t
                    } = e, n = t.latest_onboarding_question_id;
                    if (null == n) return;
                    let i = ev.get(t.id, es.ReadStateTypes.GUILD_ONBOARDING_QUESTION);
                    i._guildId = t.id, i.lastMessageId = n
                },
                RESORT_THREADS: function(e) {
                    let {
                        channelId: t
                    } = e;
                    return eG(t)
                },
                CHANNEL_RTC_UPDATE_CHAT_OPEN: function(e) {
                    let {
                        channelId: t,
                        chatOpen: n
                    } = e
                },
                DECAY_READ_STATES: eI,
                NOTIFICATION_CENTER_ITEM_CREATE: function(e) {
                    var t;
                    let {
                        item: n
                    } = e;
                    if (!(0, y.inNotificationCenterEnabled)()) return !1;
                    let i = null === (t = ee.default.getCurrentUser()) || void 0 === t ? void 0 : t.id;
                    if (null == i) return !1;
                    let a = ev.get(i, es.ReadStateTypes.NOTIFICATION_CENTER);
                    a.lastMessageId = n.id;
                    if (0, R.default.active) {
                        ez(i, es.ReadStateTypes.NOTIFICATION_CENTER, n.id, !1);
                        return
                    }
                    a.mentionCount++
                },
                RELATIONSHIP_ADD: function(e) {
                    let t = ee.default.getCurrentUser();
                    if (!(0, y.inNotificationCenterEnabled)() || null == t || null == e.relationship.since || e.relationship.type !== en.RelationshipTypes.PENDING_INCOMING && e.relationship.type !== en.RelationshipTypes.FRIEND) return !1;
                    let n = ev.get(t.id, es.ReadStateTypes.NOTIFICATION_CENTER),
                        i = e.relationship.type === en.RelationshipTypes.FRIEND,
                        a = i ? new Date(Date.now()).getTime() : new Date(e.relationship.since).getTime(),
                        l = null != n.ackMessageId ? H.default.extractTimestamp(n.ackMessageId) : 0;
                    l < a && (n.lastMessageId = H.default.fromTimestamp(a), (0, R.default.active) ? ez(t.id, es.ReadStateTypes.NOTIFICATION_CENTER, void 0, !1) : i ? n.mentionCount-- : n.mentionCount++)
                },
                RELATIONSHIP_REMOVE: function(e) {
                    let t = ee.default.getCurrentUser();
                    if (!(0, y.inNotificationCenterEnabled)() || null == t || null == e.relationship.since || e.relationship.type !== en.RelationshipTypes.PENDING_INCOMING) return !1;
                    let n = ev.get(t.id, es.ReadStateTypes.NOTIFICATION_CENTER),
                        i = new Date(e.relationship.since).getTime(),
                        a = null != n.ackMessageId ? H.default.extractTimestamp(n.ackMessageId) : 0;
                    a <= i && (n.mentionCount = Math.max(0, n.mentionCount - 1))
                },
                NOTIFICATION_CENTER_ITEMS_ACK: function(e) {
                    var t;
                    let {
                        ids: n,
                        optimistic: i
                    } = e;
                    if (i || !(0, y.inNotificationCenterEnabled)() || R.default.active) return !1;
                    let a = null === (t = ee.default.getCurrentUser()) || void 0 === t ? void 0 : t.id;
                    if (null == a) return !1;
                    let l = ev.get(a, es.ReadStateTypes.NOTIFICATION_CENTER);
                    n.forEach(e => {
                        0 > H.default.compare(l.ackMessageId, e) && (l.mentionCount = Math.max(l.mentionCount - 1, 0))
                    })
                },
                USER_NON_CHANNEL_ACK: function(e) {
                    var t;
                    let {
                        ackType: n,
                        ackedId: i,
                        local: a
                    } = e, l = null === (t = ee.default.getCurrentUser()) || void 0 === t ? void 0 : t.id;
                    return null != l && ez(l, n, i, a)
                },
                PASSIVE_UPDATE_V1: function(e) {
                    var t;
                    let n = !1;
                    for (let i of null !== (t = e.channels) && void 0 !== t ? t : []) {
                        let e = ev.get(i.id),
                            t = eg(i.lastPinTimestamp);
                        (e.lastMessageId !== i.lastMessageId || e.lastPinTimestamp !== t) && (n = !0, e.lastMessageId = i.lastMessageId, e.lastPinTimestamp = t)
                    }
                    return n
                },
                CLEAR_OLDEST_UNREAD_MESSAGE: function(e) {
                    let {
                        channelId: t
                    } = e;
                    return eK(t)
                }
            });
            var eX = eQ