            "use strict";
            n.r(t), n.d(t, {
                GUILD_FEED_FETCH_LIMIT: function() {
                    return F
                },
                LoadingStatus: function() {
                    return d
                },
                default: function() {
                    return X
                }
            }), n("424973"), n("222007");
            var d, i, r = n("446674"),
                l = n("407846"),
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
            (i = d || (d = {}))[i.LOADING_FRESH_FEED = 0] = "LOADING_FRESH_FEED", i[i.LOADING_PAGE = 1] = "LOADING_PAGE", i[i.NONE = 2] = "NONE";
            let S = {
                    loading: 2,
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
                v = {},
                p = {},
                y = {};

            function h(e) {
                let t = y[e];
                return null == t && (t = new l.default(L, R), y[e] = t), t
            }

            function R(e) {
                let {
                    featured: t,
                    sortIndex: n
                } = e;
                return "".concat(t ? "\x00" : "\x01").concat(n.toString().padStart(5, "0"))
            }

            function L(e) {
                let {
                    seen: t,
                    highlighted: n
                } = e, d = [f.GuildFeedSectionTypes.ALL];
                return n ? d.push(f.GuildFeedSectionTypes.HIGHLIGHTED) : t ? d.push(f.GuildFeedSectionTypes.READ) : d.push(f.GuildFeedSectionTypes.UNREAD), d
            }
            let N = {},
                O = {},
                U = {},
                C = {};

            function H(e, t, n) {
                var d, i;
                return null === (i = p[e]) || void 0 === i ? void 0 : null === (d = i[t]) || void 0 === d ? void 0 : d[n]
            }

            function P(e, t) {
                var n;
                return null === (n = v[e]) || void 0 === n ? void 0 : n[t]
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
                return p[d][e][t] = r, !0
            }

            function V(e, t) {
                (0, c.getAllMessagesFromFeedItem)(t).forEach(t => k(e, t))
            }

            function k(e, t) {
                var n, d;
                (null === (n = p[e]) || void 0 === n ? void 0 : n[t.channel_id]) == null && (p[e] = null !== (d = p[e]) && void 0 !== d ? d : {}, p[e][t.channel_id] = {}), p[e][t.channel_id][t.id] = t, null == v[t.channel_id] && (v[t.channel_id] = {}), v[t.channel_id][t.id] = e
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
                return null != r && (null === (d = p[r]) || void 0 === d || null === (n = d[e]) || void 0 === n || delete n[t], null === (i = v[e]) || void 0 === i || delete i[t], ! function(e, t) {
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
                    let {
                        reactionType: d
                    } = e;
                    if ("MESSAGE_REACTION_ADD" !== t) return n.removeReaction(r, l, void 0, d);
                    {
                        let {
                            burst: t,
                            colors: i
                        } = e;
                        return n.addReaction(r, l, i, t, d)
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
                delete v[e.id], null === (t = p[n]) || void 0 === t || delete t[e.id]
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
                    return !!(null === (n = N[e]) || void 0 === n ? void 0 : n.has(t))
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
                        loading: 0,
                        error: null
                    }, delete y[t], delete M[t], delete A[t], N[t] = new Set, O[t] = new Set, U[t] = new Set, p[t] = {}
                },
                GUILD_FEED_FETCH_PAGE_START: function(e) {
                    let {
                        guildId: t
                    } = e;
                    G[t] = {
                        loading: 1,
                        error: null
                    }
                },
                GUILD_FEED_FETCH_SUCCESS: function(e) {
                    var t, n, d, i, r;
                    let {
                        guildId: l,
                        data: u
                    } = e;
                    if (g[l] = Date.now(), G[l] = {
                            loading: 2,
                            error: null
                        }, l in M && M[l].load_id !== u.load_id) return;
                    let s = null !== (i = null === (n = M[l]) || void 0 === n ? void 0 : null === (t = n.results) || void 0 === t ? void 0 : t.items) && void 0 !== i ? i : [];
                    M[l] = {
                        load_id: u.load_id,
                        results: {
                            items: s.concat(u.results.items)
                        }
                    };
                    let a = h(l),
                        E = a.values().length,
                        c = E;
                    for (let e of u.results.items) {
                        let t = (0, o.createGuildFeedItemFromServer)(e, c);
                        if (null != t) c += 1, null == a.get(t.id) && (t.featured && U[l].add(t.id), V(l, t), a.set(t.id, t))
                    }
                    let _ = null !== (r = null === (d = A[l]) || void 0 === d ? void 0 : d.offset) && void 0 !== r ? r : 0;
                    A[l] = {
                        offset: _ + F,
                        hasMoreItems: E !== a.values().length
                    }
                },
                GUILD_FEED_FETCH_FAILURE: function(e) {
                    let {
                        guildId: t,
                        error: n
                    } = e;
                    G[t] = {
                        loading: 2,
                        error: n
                    }
                },
                GUILD_FEED_FEATURED_ITEMS_FETCH_SUCCESS: function(e) {
                    let {
                        guildId: t,
                        data: n
                    } = e;
                    D[t] = {
                        loading: 2,
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
                        loading: 2,
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
                    null != d && (!(d in N) && (N[d] = new Set), N[d].add(n))
                },
                GUILD_FEED_ITEM_UNHIDE: function(e) {
                    let {
                        item: t
                    } = e, n = (0, I.default)(t), d = w(t);
                    null != d && N[d].delete(n)
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
                    null != a && (null != a.message && (null === (n = p[l]) || void 0 === n ? void 0 : null === (t = n[a.message.channel_id]) || void 0 === t ? void 0 : t[a.message.id]) == null && k(l, a.message), s.delete(a.id), a.featured = !0, a.seen = !1, s.set(a.id, a))
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
                    for (let e of Object.keys(N)) null == O[e] && (O[e] = new Set), O[e] = new Set([...Array.from(O[e]), ...Array.from(N[e])]), delete N[e]
                },
                CHANNEL_DELETE: K,
                THREAD_DELETE: K,
                GUILD_DELETE: function(e) {
                    var t;
                    let {
                        guild: n
                    } = e;
                    if (null == g[n.id]) return !1;
                    for (let e in delete g[n.id], delete M[n.id], null !== (t = p[n.id]) && void 0 !== t ? t : {}) delete v[e];
                    delete p[n.id], delete y[n.id]
                },
                CHANNEL_UPDATES: function(e) {
                    let {
                        channels: t
                    } = e;
                    for (let e of t)
                        if (null == e ? void 0 : e.hasFlag(m.ChannelFlags.GUILD_FEED_REMOVED)) return j(e)
                },
                LOGOUT: function() {
                    g = {}, M = {}, v = {}, p = {}, y = {}, N = {}, O = {}, U = {}, C = {}
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