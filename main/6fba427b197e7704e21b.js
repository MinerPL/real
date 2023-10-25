(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["64612"], {
        515631: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                FeedItemInteractionType: function() {
                    return u
                },
                GuildFeedSectionTypes: function() {
                    return s
                },
                GuildFeedRenderMode: function() {
                    return a
                },
                COLLAPSED_SIZE_MEDIA_QUERY: function() {
                    return c
                },
                GUILD_FEED_CHANNEL_TYPES: function() {
                    return _
                },
                GuildHomeLandingSource: function() {
                    return E
                }
            });
            var d, i, r, l, u, s, a, E, o = n("558714");
            (d = u || (u = {})).MESSAGE_CLICKED = "message_clicked", d.MESSAGE_CHANNEL_CLICKED = "message_channel_clicked", d.REACTION_ADDED = "reaction_added", d.REACTION_REMOVED = "reaction_removed", d.THREAD_EMBED_CLICKED = "thread_embed_clicked", d.LINK_CLICKED = "link_clicked", d.IMAGE_CLICKED = "image_clicked", d.BUTTON_CLICKED = "button_clicked", d.REFERENCED_MESSAGE_CLICKED = "referenced_message_clicked", d.MESSAGED_IN_SIDEBAR = "messaged_in_sidebar", d.REPLIED_IN_SIDEBAR = "replied_in_sidebar", d.REPLIED_TO_MESSAGE = "replied_to_message", d.EXPANDED_ITEM = "expanded_item", d.VIEW_MORE_REPLIES = "view_more_replies", (i = s || (s = {})).UNREAD = "UNREAD", i.READ = "READ", i.HIGHLIGHTED = "HIGHLIGHTED", i.ALL = "ALL", (r = a || (a = {}))[r.SEGMENTED_READ = 0] = "SEGMENTED_READ", r[r.TOP = 1] = "TOP", r[r.NEW = 2] = "NEW";
            let c = "(max-width: 1300px)",
                _ = new Set([o.ChannelTypes.GUILD_TEXT, o.ChannelTypes.GUILD_ANNOUNCEMENT, o.ChannelTypes.GUILD_FORUM]);
            (l = E || (E = {})).ORGANIC = "ORGANIC", l.TIMER = "TIMER", l.HIGHLIGHTS = "HIGHLIGHTS"
        },
        185014: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GUILD_FEED_FETCH_LIMIT: function() {
                    return F
                },
                LoadingStatus: function() {
                    return i
                },
                default: function() {
                    return X
                }
            });
            var d, i, r = n("498225"),
                l = n("810479"),
                u = n("913144"),
                s = n("692038"),
                a = n("432173"),
                E = n("271938"),
                o = n("886484"),
                c = n("60036"),
                _ = n("145708"),
                I = n("2804"),
                f = n("515631"),
                m = n("724210");
            let F = 10;
            (d = i || (i = {}))[d.LOADING_FRESH_FEED = 0] = "LOADING_FRESH_FEED", d[d.LOADING_PAGE = 1] = "LOADING_PAGE", d[d.NONE = 2] = "NONE";
            let S = {
                    loading: i.NONE,
                    error: null
                },
                T = {
                    offset: null,
                    hasMoreItems: null
                },
                g = {},
                G = {},
                A = {},
                D = {},
                M = {},
                p = {},
                v = {},
                y = {};

            function h(e) {
                let t = y[e];
                return null == t && (t = new l.default(R, N), y[e] = t), t
            }

            function N(e) {
                let {
                    featured: t,
                    sortIndex: n
                } = e;
                return "".concat(t ? "\x00" : "\x01").concat(n.toString().padStart(5, "0"))
            }

            function R(e) {
                let {
                    seen: t,
                    highlighted: n
                } = e, d = [f.GuildFeedSectionTypes.ALL];
                return n ? d.push(f.GuildFeedSectionTypes.HIGHLIGHTED) : t ? d.push(f.GuildFeedSectionTypes.READ) : d.push(f.GuildFeedSectionTypes.UNREAD), d
            }
            let L = {},
                O = {},
                U = {},
                C = {};

            function H(e, t, n) {
                var d, i;
                return null === (i = v[e]) || void 0 === i ? void 0 : null === (d = i[t]) || void 0 === d ? void 0 : d[n]
            }

            function P(e, t) {
                var n;
                return null === (n = p[e]) || void 0 === n ? void 0 : n[t]
            }

            function w(e) {
                let t = (0, c.default)(e);
                return P(t.channel_id, t.id)
            }

            function b(e, t, n) {
                if (null == e || null == t) return !1;
                let d = P(e, t);
                if (null == d) return !1;
                let i = H(d, e, t);
                if (null == i) return !1;
                let r = n(i);
                return v[d][e][t] = r, !0
            }

            function V(e, t) {
                (0, c.getAllMessagesFromFeedItem)(t).forEach(t => k(e, t))
            }

            function k(e, t) {
                var n, d;
                (null === (n = v[e]) || void 0 === n ? void 0 : n[t.channel_id]) == null && (v[e] = null !== (d = v[e]) && void 0 !== d ? d : {}, v[e][t.channel_id] = {}), v[e][t.channel_id][t.id] = t, null == p[t.channel_id] && (p[t.channel_id] = {}), p[t.channel_id][t.id] = e
            }

            function B(e, t) {
                let n = h(e),
                    d = n.values(f.GuildFeedSectionTypes.ALL);
                for (let e of d)
                    if ((0, c.getAllMessageIdsFromFeedItem)(e).has(t)) return e
            }

            function Y(e, t) {
                var n, d, i;
                let r = P(e, t);
                return null != r && (null === (d = v[r]) || void 0 === d || null === (n = d[e]) || void 0 === n || delete n[t], null === (i = p[e]) || void 0 === i || delete i[t], ! function(e, t) {
                    let n = B(e, t);
                    if (null == n) return;
                    let d = (0, I.default)(n),
                        i = h(e),
                        r = Array.from((0, c.getAllMessagesFromFeedItem)(n));
                    !(r.filter(t => H(e, t.channel_id, t.id)).length > 0) && i.delete(d)
                }(r, t), !0)
            }

            function x(e) {
                let {
                    type: t,
                    channelId: n,
                    messageId: d,
                    userId: i,
                    emoji: r
                } = e;
                if (!(0, a.shouldApplyReaction)(e)) return !1;
                let l = E.default.getId() === i;
                return b(n, d, n => {
                    if ("MESSAGE_REACTION_ADD" !== t) return n.removeReaction(r, l);
                    {
                        let {
                            burst: t,
                            colors: d
                        } = e;
                        return n.addReaction(r, l, i, d, t)
                    }
                })
            }

            function K(e) {
                let {
                    channel: t
                } = e;
                return j(t)
            }

            function j(e) {
                var t;
                let n = e.guild_id;
                if (null == n) return !1;
                delete p[e.id], null === (t = v[n]) || void 0 === t || delete t[e.id]
            }
            class W extends r.default.Store {
                getLastFetchedMillis(e) {
                    return g[e]
                }
                getFeedItemsForGuild(e) {
                    let t = h(e);
                    return t.values()
                }
                getFeedItemSection(e, t) {
                    let n = h(e);
                    return n.values(t)
                }
                getItem(e, t) {
                    return h(e).get(t)
                }
                getItemForMessageId(e, t) {
                    return B(e, t)
                }
                getMessageItem(e, t) {
                    return this.getItem(e, (0, I.GUILD_FEED_MESSAGE_ITEM_ID_TEMPLATE)(t))
                }
                getLoadId(e) {
                    var t;
                    return null === (t = M[e]) || void 0 === t ? void 0 : t.load_id
                }
                getCachedMessage(e, t, n) {
                    return H(e, t, n)
                }
                getFetchStatus(e) {
                    var t;
                    return null !== (t = G[e]) && void 0 !== t ? t : S
                }
                getFeaturedItemsFetchStatus(e) {
                    var t;
                    return null !== (t = D[e]) && void 0 !== t ? t : S
                }
                getPaginationStatus(e) {
                    var t;
                    return null !== (t = A[e]) && void 0 !== t ? t : T
                }
                getIsItemHiding(e, t) {
                    var n;
                    return !!(null === (n = L[e]) || void 0 === n ? void 0 : n.has(t))
                }
                getIsItemHidden(e, t) {
                    var n;
                    return !!(null === (n = O[e]) || void 0 === n ? void 0 : n.has(t))
                }
                getIsItemFeatured(e) {
                    var t;
                    let n = (0, I.getGuildFeedItemIdFromFeatureableItem)(e),
                        {
                            guildId: d
                        } = e;
                    return !!(null === (t = U[d]) || void 0 === t ? void 0 : t.has(n))
                }
                getFeaturedItems(e) {
                    var t;
                    return Object.values(null !== (t = C[e]) && void 0 !== t ? t : [])
                }
                getFeaturedItemByMessageId(e, t) {
                    var n;
                    return Object.values(null !== (n = C[e]) && void 0 !== n ? n : []).find(e => "message" in e && e.message.id === t)
                }
            }
            W.displayName = "GuildFeedStore";
            var X = new W(u.default, {
                GUILD_FEED_FETCH_FRESH_START: function(e) {
                    let {
                        guildId: t
                    } = e;
                    G[t] = {
                        loading: i.LOADING_FRESH_FEED,
                        error: null
                    }, delete y[t], delete M[t], delete A[t], L[t] = new Set, O[t] = new Set, U[t] = new Set, v[t] = {}
                },
                GUILD_FEED_FETCH_PAGE_START: function(e) {
                    let {
                        guildId: t
                    } = e;
                    G[t] = {
                        loading: i.LOADING_PAGE,
                        error: null
                    }
                },
                GUILD_FEED_FETCH_SUCCESS: function(e) {
                    var t, n, d, r, l;
                    let {
                        guildId: u,
                        data: s
                    } = e;
                    if (g[u] = Date.now(), G[u] = {
                            loading: i.NONE,
                            error: null
                        }, u in M && M[u].load_id !== s.load_id) return;
                    let a = null !== (r = null === (n = M[u]) || void 0 === n ? void 0 : null === (t = n.results) || void 0 === t ? void 0 : t.items) && void 0 !== r ? r : [];
                    M[u] = {
                        load_id: s.load_id,
                        results: {
                            items: a.concat(s.results.items)
                        }
                    };
                    let E = h(u),
                        c = E.values().length,
                        _ = c;
                    for (let e of s.results.items) {
                        let t = (0, o.createGuildFeedItemFromServer)(e, _);
                        if (null != t) _ += 1, null == E.get(t.id) && (t.featured && U[u].add(t.id), V(u, t), E.set(t.id, t))
                    }
                    let I = null !== (l = null === (d = A[u]) || void 0 === d ? void 0 : d.offset) && void 0 !== l ? l : 0;
                    A[u] = {
                        offset: I + F,
                        hasMoreItems: c !== E.values().length
                    }
                },
                GUILD_FEED_FETCH_FAILURE: function(e) {
                    let {
                        guildId: t,
                        error: n
                    } = e;
                    G[t] = {
                        loading: i.NONE,
                        error: n
                    }
                },
                GUILD_FEED_FEATURED_ITEMS_FETCH_SUCCESS: function(e) {
                    let {
                        guildId: t,
                        data: n
                    } = e;
                    D[t] = {
                        loading: i.NONE,
                        error: null
                    };
                    let d = {};
                    for (let [e, i] of n.results.entries()) {
                        let n = (0, o.createGuildFeedItemFromServer)(i, e);
                        null != n && (0, o.isGuildFeedFeaturedItem)(n) && (n.featured && U[t].add(n.id), V(t, n), d[n.id] = n)
                    }
                    C[t] = d
                },
                GUILD_FEED_FEATURED_ITEMS_FETCH_FAILURE: function(e) {
                    let {
                        guildId: t,
                        error: n
                    } = e;
                    D[t] = {
                        loading: i.NONE,
                        error: n
                    }
                },
                GUILD_FEED_ITEM_REMOVE: function(e) {
                    let {
                        item: t
                    } = e;
                    (0, c.getAllMessagesFromFeedItem)(t).forEach(e => Y(e.channel_id, e.id))
                },
                GUILD_FEED_ITEM_HIDE: function(e) {
                    let {
                        item: t
                    } = e, n = (0, I.default)(t), d = w(t);
                    null != d && (!(d in L) && (L[d] = new Set), L[d].add(n))
                },
                GUILD_FEED_ITEM_UNHIDE: function(e) {
                    let {
                        item: t
                    } = e, n = (0, I.default)(t), d = w(t);
                    null != d && L[d].delete(n)
                },
                GUILD_FEED_FEATURE_ITEM: function(e) {
                    var t, n, d;
                    let {
                        featureableItem: i,
                        options: r
                    } = e, {
                        guildId: l
                    } = i, u = (0, I.getGuildFeedItemIdFromFeatureableItem)(i);
                    if (!(l in U) && (U[l] = new Set), U[l].add(u), !r.hoist) return;
                    let s = h(l),
                        a = null !== (d = s.get(u)) && void 0 !== d ? d : (0, _.createFakeGuildFeedItem)(i);
                    null != a && (null != a.message && (null === (n = v[l]) || void 0 === n ? void 0 : null === (t = n[a.message.channel_id]) || void 0 === t ? void 0 : t[a.message.id]) == null && k(l, a.message), s.delete(a.id), a.featured = !0, a.seen = !1, s.set(a.id, a))
                },
                GUILD_FEED_UNFEATURE_ITEM: function(e) {
                    var t, n, d, i;
                    let {
                        featureableItem: r
                    } = e, {
                        guildId: l
                    } = r, u = (0, I.getGuildFeedItemIdFromFeatureableItem)(r);
                    t = l, n = u, null === (d = U[t]) || void 0 === d || d.delete(n), null === (i = C[t]) || void 0 === i || delete i[n]
                },
                CHANNEL_SELECT: function() {
                    for (let e of Object.keys(L)) null == O[e] && (O[e] = new Set), O[e] = new Set([...Array.from(O[e]), ...Array.from(L[e])]), delete L[e]
                },
                CHANNEL_DELETE: K,
                THREAD_DELETE: K,
                GUILD_DELETE: function(e) {
                    var t;
                    let {
                        guild: n
                    } = e;
                    if (null == g[n.id]) return !1;
                    for (let e in delete g[n.id], delete M[n.id], null !== (t = v[n.id]) && void 0 !== t ? t : {}) delete p[e];
                    delete v[n.id], delete y[n.id]
                },
                CHANNEL_UPDATES: function(e) {
                    let {
                        channels: t
                    } = e;
                    for (let e of t) {
                        if (null == e ? void 0 : e.hasFlag(m.ChannelFlags.GUILD_FEED_REMOVED)) return j(e)
                    }
                },
                LOGOUT: function() {
                    g = {}, M = {}, p = {}, v = {}, y = {}, L = {}, O = {}, U = {}, C = {}
                },
                MESSAGE_UPDATE: function(e) {
                    let {
                        message: t
                    } = e;
                    return b(t.channel_id, t.id, e => (0, s.updateMessageRecord)(e, t))
                },
                MESSAGE_DELETE: function(e) {
                    let {
                        id: t,
                        channelId: n
                    } = e;
                    return Y(n, t)
                },
                MESSAGE_DELETE_BULK: function(e) {
                    let {
                        ids: t,
                        channelId: n
                    } = e, d = !1;
                    for (let e of t) d = Y(n, e) || d;
                    return d
                },
                MESSAGE_REACTION_ADD: x,
                MESSAGE_REACTION_ADD_MANY: function(e) {
                    let {
                        channelId: t,
                        messageId: n,
                        reactions: d
                    } = e, i = E.default.getId();
                    return b(t, n, e => e.addReactionBatch(d, i))
                },
                MESSAGE_REACTION_REMOVE: x,
                MESSAGE_REACTION_REMOVE_ALL: function(e) {
                    let {
                        channelId: t,
                        messageId: n
                    } = e;
                    return b(t, n, e => e.set("reactions", []))
                },
                MESSAGE_REACTION_REMOVE_EMOJI: function(e) {
                    let {
                        channelId: t,
                        messageId: n,
                        emoji: d
                    } = e;
                    return b(t, n, e => e.removeReactionsForEmoji(d))
                }
            })
        },
        886484: function(e, t, n) {
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
            var d = n("427964"),
                i = n.n(d),
                r = n("402924"),
                l = n("619415"),
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
        },
        60036: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                },
                getAllMessagesFromFeedItem: function() {
                    return l
                },
                getAllMessageIdsFromFeedItem: function() {
                    return u
                }
            });
            var d = n("402924"),
                i = n("449008");

            function r(e) {
                switch (e.type) {
                    case d.GuildFeedItemTypes.MESSAGE:
                    case d.GuildFeedItemTypes.FORUM_POST:
                        return e.message;
                    case d.GuildFeedItemTypes.MESSAGE_BUNDLE:
                        return e.messages[e.messages.length - 1].message;
                    case d.GuildFeedItemTypes.CONVERSATION:
                        return e.root.messages[e.root.messages.length - 1];
                    default:
                        (0, i.assertNever)(e)
                }
            }

            function l(e) {
                switch (e.type) {
                    case d.GuildFeedItemTypes.MESSAGE:
                    case d.GuildFeedItemTypes.FORUM_POST:
                        return new Set([e.message]);
                    case d.GuildFeedItemTypes.MESSAGE_BUNDLE:
                        return new Set(e.messages.map(e => e.message));
                    case d.GuildFeedItemTypes.CONVERSATION:
                        return new Set(function e(t) {
                            let n = t.children.map(t => e(t));
                            return [t.messages, ...n].flat()
                        }(e.root));
                    default:
                        (0, i.assertNever)(e)
                }
            }

            function u(e) {
                return new Set(Array.from(l(e)).map(e => e.id))
            }
        },
        145708: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                },
                createFakeGuildFeedItem: function() {
                    return s
                }
            });
            var d = n("402924"),
                i = n("430475"),
                r = n("449008"),
                l = n("2804");

            function u(e) {
                switch (e.entityType) {
                    case d.GuildFeedItemTypes.FORUM_POST:
                        return {
                            entityId: e.entity.id, details: {
                                parent_channel_id: e.entity.parent_id
                            }, entityType: e.entityType, guildId: e.guildId
                        };
                    case d.GuildFeedItemTypes.MESSAGE:
                        return {
                            entityId: e.entity.id, details: {
                                channel_id: e.entity.channel_id
                            }, entityType: e.entityType, guildId: e.guildId
                        };
                    default:
                        (0, r.assertNever)(e)
                }
            }

            function s(e) {
                switch (e.entityType) {
                    case d.GuildFeedItemTypes.FORUM_POST:
                        let t = e.entity.id,
                            {
                                firstMessage: n
                            } = i.default.getMessage(t);
                        if (null == n) return null;
                        return {
                            type: d.GuildFeedItemTypes.FORUM_POST, id: (0, l.getGuildFeedItemIdFromFeatureableItem)(e), sortIndex: 0, message: n, thread: e.entity, featured: !0, seen: !1, highlighted: !1, unreadMention: !1
                        };
                    case d.GuildFeedItemTypes.MESSAGE:
                        return {
                            type: d.GuildFeedItemTypes.MESSAGE, id: (0, l.getGuildFeedItemIdFromFeatureableItem)(e), sortIndex: 0, message: e.entity, referenceMessages: [], featured: !0, seen: !1, highlighted: !1, unreadMention: !1
                        }
                }
            }
        },
        2804: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GUILD_FEED_MESSAGE_ITEM_ID_TEMPLATE: function() {
                    return l
                },
                default: function() {
                    return u
                },
                getGuildFeedItemIdFromFeatureableItem: function() {
                    return s
                },
                getFeedItemTypeFromId: function() {
                    return a
                }
            });
            var d = n("402924"),
                i = n("449008");
            let r = e => "".concat(d.GuildFeedItemTypes.FORUM_POST, "/").concat(e),
                l = e => "".concat(d.GuildFeedItemTypes.MESSAGE, "/").concat(e);

            function u(e) {
                switch (e.type) {
                    case d.GuildFeedItemTypes.FORUM_POST:
                        return r(e.message.id);
                    case d.GuildFeedItemTypes.MESSAGE:
                        return l(e.message.id);
                    case d.GuildFeedItemTypes.MESSAGE_BUNDLE:
                    case d.GuildFeedItemTypes.CONVERSATION:
                        return e.id;
                    default:
                        (0, i.assertNever)(e)
                }
            }

            function s(e) {
                switch (e.entityType) {
                    case d.GuildFeedItemTypes.FORUM_POST:
                        return r(e.entity.id);
                    case d.GuildFeedItemTypes.MESSAGE:
                        return l(e.entity.id);
                    default:
                        (0, i.assertNever)(e)
                }
            }

            function a(e) {
                return e.split("/")[0]
            }
        }
    }
]);