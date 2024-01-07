            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            }), n("424973"), n("808653"), n("702976");
            var i = n("866227"),
                a = n.n(i),
                l = n("666038"),
                s = n("584375"),
                r = n("875978"),
                u = n("432173"),
                o = n("568734"),
                d = n("773336"),
                c = n("49111");
            class _ extends l.default {
                isEdited() {
                    return null != this.editedTimestamp
                }
                getChannelId() {
                    return this.channel_id
                }
                getReaction(e) {
                    return this.reactions.find(t => (0, u.emojiEquals)(t.emoji, e))
                }
                userHasReactedWithEmoji(e, t) {
                    return this.reactions.some(n => {
                        if ((0, u.emojiEquals)(n.emoji, e)) return t && n.me || !t && n.me_burst
                    })
                }
                addReaction(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
                        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                        a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : r.ReactionTypes.NORMAL,
                        l = -1,
                        o = this.reactions.map((o, c) => {
                            if ((0, u.emojiEquals)(o.emoji, e)) {
                                if (l = c, i) {
                                    if (t && o.me) return o;
                                    let e = t && o.me_burst ? o.burst_count : o.burst_count + 1,
                                        i = null != o.burst_colors && o.burst_colors.length > 0 ? o.burst_colors : n;
                                    o = {
                                        ...o,
                                        me_burst: !!t || o.me_burst,
                                        burst_count: e,
                                        count_details: {
                                            ...o.count_details,
                                            burst: e
                                        },
                                        burst_colors: i,
                                        themedBurstColors: (0, s.buildPlatformedThemedEmojiColorPalette)({
                                            colors: i,
                                            shouldProcessMobileColors: (0, d.isIOS)()
                                        })
                                    }
                                } else if (a === r.ReactionTypes.VOTE) {
                                    var _, E;
                                    let e = null !== (E = null === (_ = o.count_details) || void 0 === _ ? void 0 : _.vote) && void 0 !== E ? E : 0,
                                        n = t && o.me_vote ? e : e + 1;
                                    o = {
                                        ...o,
                                        count_details: {
                                            ...o.count_details,
                                            vote: n
                                        },
                                        me_vote: !!t || o.me_vote
                                    }
                                } else {
                                    if (t && o.me_burst) return o;
                                    let e = t && o.me ? o.count : o.count + 1;
                                    o = {
                                        ...o,
                                        count: e,
                                        count_details: {
                                            ...o.count_details,
                                            normal: e
                                        },
                                        me: !!t || o.me
                                    }
                                }
                            }
                            return o
                        });
                    return -1 === l && (i ? o.push({
                        emoji: e,
                        me: !1,
                        me_burst: t,
                        count: 0,
                        count_details: {
                            burst: 1,
                            normal: 0
                        },
                        burst_count: 1,
                        burst_colors: n,
                        themedBurstColors: (0, s.buildPlatformedThemedEmojiColorPalette)({
                            colors: null != n ? n : [],
                            shouldProcessMobileColors: (0, d.isIOS)()
                        })
                    }) : a === r.ReactionTypes.VOTE ? o.push({
                        emoji: e,
                        me: !1,
                        me_burst: !1,
                        me_vote: t,
                        count: 0,
                        count_details: {
                            burst: 0,
                            normal: 0,
                            vote: 1
                        },
                        burst_count: 0,
                        burst_colors: []
                    }) : o.push({
                        emoji: e,
                        me: t,
                        me_burst: !1,
                        count: 1,
                        count_details: {
                            burst: 0,
                            normal: 1
                        },
                        burst_count: 0,
                        burst_colors: []
                    })), this.set("reactions", o)
                }
                addReactionBatch(e, t) {
                    return e.reduce((e, n) => {
                        let {
                            users: i,
                            emoji: a
                        } = n;
                        return i.reduce((e, n) => e.addReaction(a, n === t), e)
                    }, this)
                }
                removeReaction(e) {
                    var t, n, i, a;
                    let l = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : r.ReactionTypes.NORMAL,
                        d = -1,
                        c = this.reactions.map((t, n) => {
                            if ((0, u.emojiEquals)(t.emoji, e)) {
                                if (s) {
                                    let e = l && !t.me_burst ? t.burst_count : t.burst_count - 1;
                                    t = {
                                        ...t,
                                        burst_count: e,
                                        me_burst: !l && t.me_burst,
                                        count_details: {
                                            ...t.count_details,
                                            burst: e
                                        }
                                    }
                                } else if (o === r.ReactionTypes.VOTE) {
                                    var i, a;
                                    let e = null !== (a = null === (i = t.count_details) || void 0 === i ? void 0 : i.vote) && void 0 !== a ? a : 0,
                                        n = l && !t.me_vote ? e : e - 1;
                                    t = {
                                        ...t,
                                        count_details: {
                                            ...t.count_details,
                                            vote: n
                                        },
                                        me_vote: !l && t.me_vote
                                    }
                                } else {
                                    let e = l && !t.me ? t.count : t.count - 1;
                                    t = {
                                        ...t,
                                        count: e,
                                        me: !l && t.me,
                                        count_details: {
                                            ...t.count_details,
                                            normal: e
                                        }
                                    }
                                }
                                d = n
                            }
                            return t
                        }),
                        {
                            count: _,
                            burst_count: E,
                            count_details: f
                        } = null !== (t = c[d]) && void 0 !== t ? t : {},
                        h = null !== (n = null == f ? void 0 : f.normal) && void 0 !== n ? n : 0,
                        p = null !== (i = null == f ? void 0 : f.burst) && void 0 !== i ? i : 0,
                        T = null !== (a = null == f ? void 0 : f.vote) && void 0 !== a ? a : 0;
                    return -1 !== d && _ <= 0 && E <= 0 && h <= 0 && p <= 0 && T <= 0 && c.splice(d, 1), this.set("reactions", c)
                }
                removeReactionsForEmoji(e) {
                    return this.set("reactions", this.reactions.filter(t => !(0, u.emojiEquals)(t.emoji, e)))
                }
                isSystemDM() {
                    return this.author.isSystemUser()
                }
                hasFlag(e) {
                    return (0, o.hasFlag)(this.flags, e)
                }
                isCommandType() {
                    return this.type === c.MessageTypes.CHAT_INPUT_COMMAND || this.type === c.MessageTypes.CONTEXT_MENU_COMMAND
                }
                isPoll() {
                    return null != this.poll
                }
                toJS() {
                    return {
                        ...this,
                        webkhook_id: this.webhookId,
                        edited_timestamp: this.editedTimestamp,
                        mention_everyone: this.mentionEveryone
                    }
                }
                isFirstMessageInForumPost(e) {
                    return this.id === this.channel_id && e.isForumPost()
                }
                constructor(e) {
                    var t, n, i;
                    super(), this.id = e.id, this.type = e.type || c.MessageTypes.DEFAULT, this.channel_id = e.channel_id, this.author = e.author, this.content = e.content || "", this.customRenderedContent = e.customRenderedContent, this.attachments = e.attachments || [], this.embeds = e.embeds || [], this.mentions = e.mentions || [], this.mentionRoles = e.mentionRoles || [], this.mentionChannels = e.mentionChannels || [], this.mentioned = e.mentioned || !1, this.pinned = e.pinned || !1, this.mentionEveryone = e.mentionEveryone || !1, this.tts = e.tts || !1, this.codedLinks = e.codedLinks || [], this.giftCodes = e.giftCodes || [], this.timestamp = e.timestamp || a(), this.editedTimestamp = e.editedTimestamp || null, this.state = e.state || c.MessageStates.SENT, this.nonce = e.nonce || null, this.blocked = e.blocked || !1, this.call = e.call || null, this.bot = e.bot || !1, this.webhookId = e.webhookId || null, this.reactions = e.reactions || [], this.applicationId = e.application_id || e.applicationId || null, this.application = e.application || null, this.activity = e.activity || null, this.activityInstance = e.activity_instance || e.activityInstance || null, this.messageReference = e.messageReference || null, this.flags = e.flags || 0, this.isSearchHit = e.hit || e.isSearchHit || !1, this.stickers = e.stickers || [], this.stickerItems = null !== (n = null !== (t = e.sticker_items) && void 0 !== t ? t : e.stickerItems) && void 0 !== n ? n : [], this.components = e.components, this.loggingName = e.loggingName || null, this.colorString = e.colorString, this.nick = e.nick, this.interaction = e.interaction || null, this.interactionData = e.interactionData || null, this.interactionError = e.interactionError || null, this.roleSubscriptionData = e.roleSubscriptionData, this.purchaseNotification = e.purchaseNotification, this.poll = e.poll, this.referralTrialOfferId = e.referralTrialOfferId || null, this.giftInfo = null !== (i = e.gift_info) && void 0 !== i ? i : e.giftInfo
                }
            }
            var E = _