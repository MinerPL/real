            "use strict";
            n.r(t), n.d(t, {
                createMessageRecord: function() {
                    return S
                },
                updateServerMessage: function() {
                    return I
                },
                updateMessageRecord: function() {
                    return g
                },
                canEditMessageWithStickers: function() {
                    return y
                }
            }), n("702976");
            var i = n("866227"),
                a = n.n(i),
                l = n("312016");
            n("584375");
            var s = n("552310"),
                r = n("24373"),
                u = n("459018"),
                o = n("719926"),
                d = n("766274"),
                c = n("271938"),
                _ = n("27618"),
                E = n("697218"),
                f = n("240873"),
                h = n("659632");
            n("773336"), n("158998");
            var p = n("406297");
            n("574073");
            var T = n("894488"),
                C = n("49111");
            n("782340");
            let m = new d.default({
                id: "???",
                username: "???"
            });

            function S(e) {
                var t, n, i, r, f, T, S, I, g;
                let {
                    reactions: y,
                    interactionData: v
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, M = null !== (r = null === (t = e.mentions) || void 0 === t ? void 0 : t.map(e => e.id)) && void 0 !== r ? r : [], D = null !== (f = e.mention_roles) && void 0 !== f ? f : [], L = null !== (T = e.mention_channels) && void 0 !== T ? T : [], U = e.message_reference, P = a(new Date(e.timestamp)), b = e.type === C.MessageTypes.THREAD_CREATED ? [] : (0, l.default)(e.content);
                let G = null == (I = e).author ? m : null != I.webhook_id ? new d.default(I.author) : null !== (g = E.default.getUser(I.author.id)) && void 0 !== g ? g : new d.default(I.author),
                    k = null == e ? void 0 : e.gift_info,
                    F = null != e.interaction ? u.default.createFromServer(e.interaction) : null,
                    w = e.type === C.MessageTypes.THREAD_STARTER_MESSAGE ? null === (i = e.referenced_message) || void 0 === i ? void 0 : null === (n = i.author) || void 0 === n ? void 0 : n.id : void 0,
                    V = e.type === C.MessageTypes.PREMIUM_REFERRAL ? e.content : void 0,
                    H = e.content;
                return e.type === C.MessageTypes.PREMIUM_REFERRAL && (H = ""), new o.default({
                    ...e,
                    author: G,
                    webhookId: e.webhook_id,
                    blocked: _.default.isBlocked(G.id) || null != w && _.default.isBlocked(w),
                    timestamp: P,
                    editedTimestamp: null != e.edited_timestamp ? a(new Date(e.edited_timestamp)) : null,
                    mentionEveryone: e.mention_everyone,
                    mentions: M,
                    mentionRoles: D,
                    mentionChannels: L,
                    messageReference: U,
                    mentioned: (0, p.isMentioned)({
                        userId: c.default.getId(),
                        channelId: e.channel_id,
                        mentionEveryone: null !== (S = e.mention_everyone) && void 0 !== S && S,
                        mentionUsers: M,
                        mentionRoles: D
                    }),
                    attachments: A(e),
                    embeds: O(e),
                    codedLinks: b,
                    giftCodes: (0, h.isGiftCodeEmbed)(e) ? (0, h.findGiftCodes)((null == e ? void 0 : e.embeds[0]).url) : (0, h.findGiftCodes)(e.content),
                    content: H,
                    referralTrialOfferId: V,
                    call: N(e.call, P),
                    reactions: R(null != y ? y : e.reactions),
                    interaction: F,
                    interactionData: null != v ? v : e.interaction_data,
                    roleSubscriptionData: e.role_subscription_data,
                    purchaseNotification: e.purchase_notification,
                    poll: null == e.poll ? void 0 : (0, s.default)(e.poll),
                    giftInfo: null == k ? void 0 : k
                })
            }

            function I(e, t) {
                return null != t.edited_timestamp ? {
                    ...t,
                    reactions: e.reactions,
                    interaction_data: e.interaction_data
                } : {
                    ...e,
                    ...t
                }
            }

            function g(e, t) {
                if (null != t.edited_timestamp) return S(t, {
                    reactions: e.reactions,
                    interactionData: e.interactionData
                });
                let n = e;
                if (null != t.call && (n = n.set("call", N(t.call, e.timestamp))), null != t.attachments && (n = n.set("attachments", A(t))), null != t.content && "" !== t.content && (n = n.set("content", t.content)), null != t.embeds && (n = n.set("embeds", O(t))), t.pinned !== n.pinned && (n = n.set("pinned", t.pinned)), null != n.webhookId && null != t.author && (n = n.set("author", new d.default(t.author))), null != t.flags && t.flags !== n.flags && (n = n.set("flags", t.flags)), null != t.components && (n = n.set("components", t.components)), null != t.role_subscription_data && (n = n.set("roleSubscriptionData", t.role_subscription_data)), null != t.reactions) {
                    var i;
                    n = n.set("reactions", R(null !== (i = e.reactions) && void 0 !== i ? i : t.reactions))
                }
                return n
            }

            function A(e) {
                return null == e.attachments ? [] : e.attachments.map(e => ({
                    ...e,
                    spoiler: e.filename.startsWith(T.SPOILER_ATTACHMENT_PREFIX)
                }))
            }

            function N(e, t) {
                if (null != e) {
                    let n = null != e.ended_timestamp ? a(new Date(e.ended_timestamp)) : null,
                        i = null != n ? a.duration(n.diff(t)) : null;
                    return {
                        participants: e.participants,
                        endedTimestamp: n,
                        duration: i
                    }
                }
                return null
            }

            function O(e) {
                if (null == e.embeds) return [];
                let t = e.embeds.map(t => (0, f.sanitizeEmbed)(e.channel_id, e.id, t));
                return (0, f.mergeEmbedsOnURL)(t)
            }

            function R(e) {
                return null == e ? [] : e.map(e => {
                    let t = {
                        ...e
                    };
                    if ((null == t ? void 0 : t.count_details) != null) {
                        var n, i;
                        t.burst_count = null !== (n = t.count_details.burst) && void 0 !== n ? n : 0, t.count = null !== (i = t.count_details.normal) && void 0 !== i ? i : 0
                    }
                    return t.count < 0 && (t.count = 0), t.burst_count < 0 && (t.burst_count = 0), t
                })
            }
            let y = e => {
                let t = (0, r.getMessageStickers)(e);
                return 0 === t.length || "" !== e.content
            }