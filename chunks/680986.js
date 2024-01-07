            "use strict";
            u.r(t), u.d(t, {
                GuildForumExperiment: function() {
                    return H
                },
                getEnableForumPermissions: function() {
                    return x
                },
                useCanCreateForumChannel: function() {
                    return Y
                },
                useLoadForumUnreadCounts: function() {
                    return V
                },
                useExistingPin: function() {
                    return Q
                },
                useAppliedTags: function() {
                    return X
                },
                useSomeAppliedTags: function() {
                    return B
                },
                useFacepileUsers: function() {
                    return q
                },
                useLastActiveTimestamp: function() {
                    return z
                },
                useMostUsedReaction: function() {
                    return K
                },
                useDefaultReactionEmoji: function() {
                    return J
                },
                useMessageCount: function() {
                    return Z
                },
                useForumPostAuthor: function() {
                    return $
                },
                getForumPostAuthor: function() {
                    return ee
                },
                useTypingUserIds: function() {
                    return et
                },
                useForumPostFirstMessageMarkup: function() {
                    return eu
                },
                useCanManageChannel: function() {
                    return en
                },
                useForumPostReadStates: function() {
                    return el
                },
                useChannelTemplate: function() {
                    return ea
                },
                useVisibleForumTags: function() {
                    return ei
                },
                useVisibleAppliedForumTags: function() {
                    return eo
                },
                useCanSearchForumPosts: function() {
                    return ed
                },
                useCanViewArchivedPosts: function() {
                    return es
                },
                useForumSearchState: function() {
                    return ef
                },
                useAutomaticForumSearch: function() {
                    return ec
                },
                useUnreadThreadsCountForParent: function() {
                    return em
                },
                useForumActiveThreadIds: function() {
                    return eg
                }
            }), u("222007"), u("808653");
            var n = u("884691"),
                r = u("917351"),
                l = u.n(r),
                a = u("335710"),
                i = u("249654"),
                o = u("446674"),
                d = u("913144"),
                s = u("267363"),
                f = u("385976"),
                c = u("296892"),
                m = u("95045"),
                g = u("574073"),
                S = u("401690"),
                T = u("689275"),
                h = u("69890"),
                E = u("610730"),
                _ = u("487269"),
                v = u("42203"),
                A = u("124948"),
                p = u("305961"),
                C = u("957255"),
                M = u("660478"),
                F = u("27618"),
                I = u("191542"),
                N = u("697218"),
                O = u("449008"),
                R = u("404607"),
                U = u("670902"),
                P = u("791234"),
                y = u("430475"),
                b = u("419501"),
                L = u("994810"),
                D = u("786742"),
                w = u("953371"),
                G = u("49111"),
                k = u("724210"),
                j = u("648564");
            let H = (0, c.default)({
                id: "2023-01_forums_non_community",
                label: "Forum non-community",
                kind: "guild",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "On",
                    config: {
                        enabled: !0
                    }
                }]
            });

            function x(e) {
                return H.getCurrentConfig({
                    guildId: e,
                    location: "553713_2"
                }).enabled
            }

            function Y(e) {
                return function(e) {
                    let t = (0, o.useStateFromStores)([p.default], () => p.default.getGuild(e));
                    return H.useExperiment({
                        guildId: e,
                        location: "553713_1"
                    }, {
                        autoTrackExposure: !1
                    }).enabled || !!((null == t ? void 0 : t.hasFeature(G.GuildFeatures.COMMUNITY)) || (null == t ? void 0 : t.hasFeature(G.GuildFeatures.INTERNAL_EMPLOYEE_ONLY)))
                }(e)
            }

            function V(e, t, u) {
                let r = (0, o.useStateFromStores)([T.default], () => T.default.hasLoaded(e.guild_id));
                n.useEffect(() => {
                    if (!r) return;
                    let n = U.default.getThreadIds(e.id, t, u),
                        l = b.default.getThreadIdsMissingCounts(e.guild_id, n).filter(e => (0, D.canDisplayPostUnreadMessageCount)(e, [M.default])).slice(0, 180).map(e => ({
                            threadId: e,
                            ackMessageId: M.default.getTrackedAckMessageId(e)
                        }));
                    l.length > 0 && d.default.dispatch({
                        type: "REQUEST_FORUM_UNREADS",
                        guildId: e.guild_id,
                        channelId: e.id,
                        threads: l
                    })
                }, [e.id, e.guild_id, r, u, t])
            }

            function Q(e) {
                return (0, o.useStateFromStores)([T.default, v.default], () => {
                    let t = l(T.default.getThreadsForParent(e.guild_id, e.parent_id)).keys().filter(e => {
                        var t;
                        return (null === (t = v.default.getChannel(e)) || void 0 === t ? void 0 : t.hasFlag(k.ChannelFlags.PINNED)) === !0
                    }).head();
                    return v.default.getChannel(t)
                })
            }
            let W = [];

            function X(e) {
                let t = function(e) {
                    let t = null == e ? void 0 : e.parent_id;
                    return (0, o.useStateFromStoresObject)([v.default], () => {
                        var e;
                        let u = v.default.getChannel(t),
                            n = null !== (e = null == u ? void 0 : u.availableTags) && void 0 !== e ? e : [];
                        return n.reduce((e, t) => ({
                            ...e,
                            [t.id]: t
                        }), {})
                    }, [t])
                }(e);
                return n.useMemo(() => {
                    var u, n, r;
                    return null !== (r = null == e ? void 0 : null === (n = e.appliedTags) || void 0 === n ? void 0 : null === (u = n.map(e => t[e])) || void 0 === u ? void 0 : u.filter(O.isNotNullish)) && void 0 !== r ? r : W
                }, [t, null == e ? void 0 : e.appliedTags])
            }

            function B(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                    u = X(e);
                return n.useMemo(() => [u.slice(0, t), Math.max(0, u.length - t)], [u, t])
            }

            function q(e, t) {
                let u = (0, o.useStateFromStoresArray)([N.default], () => t.map(e => N.default.getUser(e)).filter(O.isNotNullish));
                return n.useEffect(() => {
                    u.forEach(t => {
                        A.default.requestMember(e.guild_id, t.id)
                    })
                }, []), u
            }

            function z(e, t) {
                let u = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : w.ForumTimestampFormats.DURATION_AGO,
                    r = n.useMemo(() => i.default.extractTimestamp(e.id), [e.id]),
                    l = (0, _.useLastMessageTimestamp)(e),
                    o = n.useMemo(() => (0, D.getForumTimestampFormatter)(t, u), [t, u]);
                return n.useMemo(() => t === a.ThreadSortOrder.CREATION_DATE ? (0, _.getTimestampString)(r, o) : (0, _.getTimestampString)(l, o), [l, t, r, o])
            }

            function K(e) {
                return n.useMemo(() => {
                    var t;
                    return l.maxBy(null !== (t = null == e ? void 0 : e.reactions) && void 0 !== t ? t : [], e => Math.max(e.burst_count, e.count))
                }, [null == e ? void 0 : e.reactions])
            }

            function J(e) {
                let t = null == e ? void 0 : e.defaultReactionEmoji,
                    u = (0, o.useStateFromStores)([f.default], () => (null == t ? void 0 : t.emojiId) != null ? f.default.getUsableCustomEmojiById(t.emojiId) : null);
                return null == t ? null : null != t.emojiId && null != u ? {
                    id: t.emojiId,
                    name: u.name,
                    animated: u.animated
                } : null != t.emojiName ? {
                    id: t.emojiId,
                    name: t.emojiName,
                    animated: !1
                } : null
            }

            function Z(e) {
                let t = (0, o.useStateFromStores)([E.default], () => {
                        var t;
                        return null !== (t = E.default.getCount(e.id)) && void 0 !== t ? t : 0
                    }),
                    u = (0, h.getMessageCountText)(t, e.id),
                    n = (0, o.useStateFromStores)([M.default], () => (0, D.canDisplayPostUnreadMessageCount)(e.id, [M.default])),
                    r = (0, o.useStateFromStores)([b.default], () => {
                        if (!n) return null;
                        let u = b.default.getCount(e.id);
                        if (null == u || !(u > 0)) return "1+";
                        {
                            let e = Math.min(u, t);
                            return e >= j.MAX_THREAD_UNREAD_MESSAGE_COUNT ? "".concat(j.MAX_THREAD_UNREAD_MESSAGE_COUNT, "+") : e
                        }
                    });
                return {
                    messageCount: t,
                    isMaxMessageCount: null != t && "".concat(t) !== u,
                    messageCountText: u,
                    unreadCount: r
                }
            }

            function $(e) {
                var t;
                let u = (0, o.useStateFromStores)([N.default], () => N.default.getUser(e.ownerId)),
                    r = (0, o.useStateFromStores)([y.default], () => {
                        var t;
                        return null === (t = y.default.getMessage(e.id)) || void 0 === t ? void 0 : t.firstMessage
                    }),
                    l = (0, g.useNullableUserAuthor)(null !== (t = null == r ? void 0 : r.author) && void 0 !== t ? t : u, e);
                return n.useEffect(() => {
                    null != e.ownerId && A.default.requestMember(e.guild_id, e.ownerId)
                }, [e.guild_id, e.ownerId]), {
                    user: u,
                    author: l
                }
            }

            function ee(e) {
                var t, u;
                let n = N.default.getUser(e.ownerId),
                    r = null === (t = y.default.getMessage(e.id)) || void 0 === t ? void 0 : t.firstMessage,
                    l = (0, g.getUserAuthor)(null !== (u = null == r ? void 0 : r.author) && void 0 !== u ? u : n, e);
                return {
                    user: n,
                    author: l
                }
            }

            function et(e) {
                return (0, o.useStateFromStoresArray)([I.default, N.default, F.default], () => {
                    let t = N.default.getCurrentUser();
                    return l(I.default.getTypingUsers(e.id)).keys().filter(e => e !== (null == t ? void 0 : t.id)).reject(F.default.isBlocked).map(e => N.default.getUser(e)).filter(O.isNotNullish).map(e => e.id).value()
                })
            }

            function eu(e) {
                let {
                    firstMessage: t,
                    formatInline: u = !0,
                    noStyleAndInteraction: r = !0
                } = e, {
                    hasSpoilerEmbeds: l,
                    content: a
                } = n.useMemo(() => (null == t ? void 0 : t.content) != null && "" !== t.content ? (0, m.default)(t, {
                    formatInline: u,
                    noStyleAndInteraction: r,
                    allowHeading: !0,
                    allowList: !0
                }) : {
                    hasSpoilerEmbeds: !1,
                    content: null
                }, [t, u, r]), i = (0, P.useFindFirstMediaProperties)(t, l), o = (0, P.useFirstMediaIsEmbed)(t, l);
                return {
                    hasSpoilerEmbeds: l,
                    content: a,
                    firstMedia: i,
                    firstMediaIsEmbed: o
                }
            }

            function en(e) {
                return (0, o.useStateFromStores)([C.default], () => C.default.can(G.Permissions.MANAGE_CHANNELS, e))
            }
            let er = {
                isNew: !1,
                hasUnreads: !1
            };

            function el(e) {
                return (0, o.useStateFromStoresObject)([p.default, M.default], () => {
                    var t;
                    let u = p.default.getGuild(null !== (t = e.getGuildId()) && void 0 !== t ? t : "");
                    return null == u ? er : (0, D.getForumPostReadStates)(e, u, [M.default])
                })
            }

            function ea(e) {
                return n.useMemo(() => null == e ? "" : null == e.template ? "" : e.template.trim(), [e])
            }

            function ei(e) {
                let t = (0, o.useStateFromStores)([C.default], () => C.default.can(G.Permissions.MANAGE_THREADS, e));
                return n.useMemo(() => {
                    var u;
                    let n = [...null !== (u = null == e ? void 0 : e.availableTags) && void 0 !== u ? u : []];
                    return !t && (n = n.filter(e => !e.moderated)), n
                }, [t, null == e ? void 0 : e.availableTags])
            }

            function eo(e, t) {
                let u = (0, o.useStateFromStores)([v.default], () => v.default.getChannel(null == e ? void 0 : e.parent_id), [e]),
                    r = ei(u);
                return n.useMemo(() => t.filter(e => r.includes(e)), [t, r])
            }

            function ed(e) {
                return (0, o.useStateFromStores)([C.default], () => C.default.can(G.Permissions.READ_MESSAGE_HISTORY, e))
            }

            function es(e) {
                return (0, o.useStateFromStores)([C.default], () => C.default.can(G.Permissions.READ_MESSAGE_HISTORY, e))
            }

            function ef(e) {
                let {
                    channelId: t
                } = e;
                return (0, o.useStateFromStoresObject)([L.default], () => ({
                    isSearchLoading: L.default.getSearchLoading(t),
                    searchQuery: L.default.getSearchQuery(t),
                    searchResults: L.default.getSearchResults(t)
                }))
            }

            function ec(e, t) {
                let u = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    {
                        isSearchLoading: r,
                        searchQuery: l
                    } = ef({
                        channelId: e.id
                    }),
                    a = ed(e),
                    i = n.useRef(null),
                    o = n.useRef(new Set);
                n.useEffect(() => {
                    if (null == l && null != i.current) {
                        R.default.clearForumSearch(e.id), i.current = null;
                        return
                    }
                    if (null == l || 0 === l.length || u) return;
                    if (!a) {
                        R.default.clearForumSearch(e.id);
                        return
                    }
                    if (i.current === l && o.current === t || r) return;
                    let n = setTimeout(async () => {
                        i.current = l, o.current = t;
                        try {
                            await R.default.searchForumPosts(e.guild_id, e.id, l, t)
                        } catch {}
                    }, 350);
                    return () => clearTimeout(n)
                }, [a, e.guild_id, e.id, u, r, l, t])
            }

            function em(e, t) {
                return (0, o.useStateFromStores)([S.default, M.default, v.default], () => {
                    let u = v.default.getChannel(t);
                    if (!(null == u ? void 0 : u.isForumLikeChannel())) return 0;
                    let n = S.default.getActiveJoinedUnreadThreadsForParent(e, t),
                        r = S.default.getActiveUnjoinedUnreadThreadsForParent(e, t),
                        l = M.default.ackMessageId(t),
                        a = Object.values(n).filter(e => {
                            if (null == l) return !1;
                            let t = M.default.lastMessageId(e.channel.id);
                            return null != t && t > l
                        }),
                        i = Object.values(r).filter(e => {
                            if (null == l) return !1;
                            let t = M.default.lastMessageId(e.id);
                            return null != t && t > l
                        });
                    return a.length + i.length
                })
            }

            function eg(e) {
                let {
                    channel: t,
                    sortOrder: u,
                    tagFilter: r,
                    shouldAutomaticallyAck: l
                } = e, a = (0, o.useStateFromStoresArray)([U.default], () => U.default.getThreadIds(t.id, u, r)), i = em(t.guild_id, t.id), d = (0, o.useStateFromStores)([U.default], () => l && (i > 0 || U.default.getCanAckThreads()), [l, i]);
                return n.useEffect(() => {
                    d && (0, s.ackChannel)(t)
                }, [t, d]), a
            }