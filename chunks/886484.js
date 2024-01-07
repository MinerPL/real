            "use strict";
            n.r(t), n.d(t, {
                FEATURE_EXPIRES_SECONDS: function() {
                    return _
                },
                isGuildFeedFeaturedItem: function() {
                    return m
                },
                createGuildFeedItemFromServer: function() {
                    return F
                },
                isChannelAvailableInGuildFeed: function() {
                    return S
                },
                isMessageAvailableInGuildFeed: function() {
                    return T
                },
                createFeatureItemsTimeLabel: function() {
                    return g
                },
                getFeatureItemsTimes: function() {
                    return G
                },
                getSidebarMessageId: function() {
                    return A
                },
                getChannelIdForItem: function() {
                    return D
                }
            });
            var d = n("917351"),
                i = n.n(d),
                r = n("611221"),
                l = n("637612"),
                u = n("692038"),
                s = n("233069"),
                a = n("449008"),
                E = n("2804"),
                o = n("724210"),
                c = n("782340");
            let _ = {
                ONE_DAY: 86400,
                THREE_DAYS: 259200,
                SEVEN_DAYS: 604800
            };

            function I(e) {
                return {
                    entityId: e.entity_id,
                    entityType: e.entity_type,
                    guildId: e.guild_id,
                    details: {
                        actorUserId: e.details.actor_user_id,
                        expiresAt: new Date(e.details.expires_at)
                    }
                }
            }

            function f(e) {
                return null != e.featured_item || !1
            }

            function m(e) {
                return null != e.featuredItem || !1
            }

            function F(e, t) {
                var n, d, l, a, o, c, _;
                switch (e.type) {
                    case r.GuildFeedItemTypes.FORUM_POST: {
                        let i = (0, u.createMessageRecord)(e.message),
                            l = (0, s.createChannelRecordFromServer)(e.thread),
                            a = {
                                type: r.GuildFeedItemTypes.FORUM_POST,
                                id: (0, E.default)(e),
                                sortIndex: t,
                                message: i,
                                thread: l,
                                featured: null !== (n = e.featured) && void 0 !== n && n,
                                highlighted: null !== (d = e.highlighted) && void 0 !== d && d,
                                seen: e.seen,
                                unreadMention: !1
                            };
                        return f(e) && (a = {
                            ...a,
                            featuredItem: I(e.featured_item)
                        }), a
                    }
                    case r.GuildFeedItemTypes.MESSAGE:
                        let m = (0, u.createMessageRecord)(e.message),
                            F = i.map(e.reference_messages, e => (0, u.createMessageRecord)(e)),
                            S = {
                                type: r.GuildFeedItemTypes.MESSAGE,
                                id: (0, E.default)(e),
                                sortIndex: t,
                                message: m,
                                referenceMessages: F,
                                featured: null !== (l = e.featured) && void 0 !== l && l,
                                highlighted: null !== (a = e.highlighted) && void 0 !== a && a,
                                unreadMention: null !== (o = e.unread_mention) && void 0 !== o && o,
                                seen: e.seen
                            };
                        return f(e) && (S = {
                            ...S,
                            featuredItem: I(e.featured_item)
                        }), S;
                    case r.GuildFeedItemTypes.MESSAGE_BUNDLE:
                        let T = e.messages.map(e => ({
                            message: (0, u.createMessageRecord)(e.message),
                            referenceMessages: e.reference_messages.map(e => (0, u.createMessageRecord)(e))
                        }));
                        return {
                            type: r.GuildFeedItemTypes.MESSAGE_BUNDLE, id: e.id, sortIndex: t, messages: T, featured: !1, highlighted: !1, unreadMention: null !== (c = e.unread_mention) && void 0 !== c && c, seen: e.seen
                        };
                    case r.GuildFeedItemTypes.CONVERSATION:
                        let g = function e(t) {
                            let n = t.messages.map(e => (0, u.createMessageRecord)(e.message));
                            return {
                                id: t.id,
                                type: t.type,
                                messages: n,
                                children: t.children.map(t => e(t))
                            }
                        }(e.root);
                        return {
                            type: r.GuildFeedItemTypes.CONVERSATION, id: e.id, sortIndex: t, root: g, featured: !1, highlighted: !1, unreadMention: null !== (_ = e.unread_mention) && void 0 !== _ && _, seen: e.seen
                        };
                    default:
                        return null
                }
            }

            function S(e) {
                return !(e.hasFlag(o.ChannelFlags.GUILD_FEED_REMOVED) || e.isNSFW()) && !0
            }

            function T(e) {
                return !!l.MessageTypesSets.AVAILABLE_IN_GUILD_FEED.has(e.type) || !1
            }
            let g = e => c.default.Messages.GUILD_FEED_FEATURE_ITEM_MENU_ITEM_TEXT.format({
                    timePeriod: e
                }),
                G = () => [{
                    value: _.ONE_DAY,
                    timePeriod: c.default.Messages.GUILD_FEED_FEATURE_ITEM_24_HOURS
                }, {
                    value: _.THREE_DAYS,
                    timePeriod: c.default.Messages.GUILD_FEED_FEATURE_ITEM_THREE_DAYS
                }, {
                    value: _.SEVEN_DAYS,
                    timePeriod: c.default.Messages.GUILD_FEED_FEATURE_ITEM_SEVEN_DAYS
                }],
                A = (e, t) => null != t && t.isThread() ? t.id : null != e && "details" in e && null != e.details && "initialMessageId" in e.details ? e.details.initialMessageId : null;

            function D(e) {
                switch (e.type) {
                    case r.GuildFeedItemTypes.MESSAGE:
                    case r.GuildFeedItemTypes.FORUM_POST:
                        return e.message.channel_id;
                    case r.GuildFeedItemTypes.MESSAGE_BUNDLE:
                        return e.messages[0].message.channel_id;
                    case r.GuildFeedItemTypes.CONVERSATION:
                        return e.root.messages[0].channel_id;
                    default:
                        (0, a.assertNever)(e)
                }
            }