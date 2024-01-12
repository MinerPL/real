            "use strict";
            n.r(t), n.d(t, {
                useFavoritesServerChannelList: function() {
                    return g
                },
                computeFavoritesState: function() {
                    return G
                }
            }), n("222007"), n("424973");
            var i = n("884691"),
                o = n("917351"),
                l = n.n(o),
                a = n("151426"),
                d = n("191225"),
                u = n("379881"),
                s = n("106682"),
                E = n("398604"),
                r = n("401690"),
                _ = n("755624"),
                A = n("233069"),
                c = n("870691"),
                C = n("42203"),
                T = n("816092"),
                S = n("546463"),
                I = n("957255"),
                f = n("660478"),
                N = n("18494"),
                O = n("282109"),
                L = n("449008"),
                D = n("319839"),
                R = n("695838"),
                p = n("843455");
            let h = [d.default, u.default, E.default, r.default, _.default, c.default, C.default, S.default, I.default, f.default, N.default, O.default];

            function g() {
                let [e, t] = i.useState(() => G());
                return i.useEffect(() => {
                    let e = l.throttle(() => t(G()), 100);
                    return h.forEach(t => t.addChangeListener(e)), () => h.forEach(t => t.removeChangeListener(e))
                }, []), e
            }

            function G() {
                let e = u.default.getFavoriteChannels(),
                    t = O.default.isGuildCollapsed(R.FAVORITES_RAW_GUILD_ID),
                    n = N.default.getChannelId(),
                    i = C.default.getChannel(n),
                    o = N.default.getVoiceChannelId(),
                    d = [],
                    E = {};
                for (let t in e) {
                    let n = e[t],
                        i = C.default.getChannel(n.id);
                    if (null == i || n.type === a.FavoriteChannelType.CATEGORY) continue;
                    let o = (0, s.createFavoritesChannelRecord)(e, n, i);
                    if (null == n.parentId || !(n.parentId in e)) {
                        d.push(o);
                        continue
                    }!(n.parentId in E) && (E[n.parentId] = []), E[n.parentId].push(o)
                }

                function _(n, a) {
                    let {
                        isCollapsed: d,
                        isMuted: u
                    } = a;
                    return l(n).map(n => {
                        var s;
                        if (!n.isPrivate() && !I.default.can(p.Permissions.VIEW_CHANNEL, n)) return null;
                        let E = null != i && (i.id === n.id || o === n.id),
                            _ = null != i && i.isThread() && i.parent_id === n.id,
                            c = null !== (s = E || _ || !d ? r.default.getActiveJoinedRelevantThreadsForParent(n.guild_id, n.id) : r.default.getActiveJoinedUnreadThreadsForParent(n.guild_id, n.id)) && void 0 !== s ? s : {},
                            C = (0, D.computeThreadIds)(n, c, i, o, t),
                            S = T.default.isCollapsed(n.id),
                            N = O.default.isChannelMuted(n.guild_id, n.id),
                            L = {
                                id: n.id,
                                record: n,
                                category: a,
                                position: e[n.id].order,
                                threadIds: C,
                                threadCount: l.size(C),
                                isCollapsed: S,
                                isMuted: N,
                                isFirstVoiceChannel: !1,
                                subtitle: (0, D.computeSubtitle)(n, S, !1),
                                isAssistantCallout: !1
                            };
                        return E || _ || f.default.getMentionCount(n.id) > 0 ? L : t && N || d && (N || u || (0, A.isGuildReadableType)(n.type) && !1 === f.default.hasUnread(n.id)) ? null : L
                    }).filter(L.isNotNullish).sortBy(e => {
                        let {
                            record: t
                        } = e;
                        return t.isGuildVocal() ? t.position + 1e4 : t.position
                    }).value()
                }
                let S = null,
                    h = {
                        isMuted: !1,
                        isCollapsed: !1,
                        position: 0,
                        getChannelRecords: () => d,
                        getShownChannelIds: () => d.map(e => e.id),
                        getShownChannelAndThreadIds: () => d.map(e => e.id),
                        isEmpty: () => 0 === d.length,
                        get channelList() {
                            return null == S && (S = _(d, this)), S
                        }
                    },
                    g = l(e).values().filter(e => e.type === a.FavoriteChannelType.CATEGORY).sortBy(e => e.order).map(e => {
                        var t;
                        let {
                            id: n,
                            order: i
                        } = e, o = u.default.getCategoryRecord(n), l = null !== (t = E[n]) && void 0 !== t ? t : [], a = O.default.isChannelMuted(R.FAVORITES_RAW_GUILD_ID, n), d = c.default.isCollapsed(n), s = null;
                        return {
                            isMuted: a,
                            isCollapsed: d,
                            record: o,
                            id: n,
                            position: i,
                            getChannelRecords: () => l,
                            getShownChannelIds: () => l.map(e => e.id),
                            getShownChannelAndThreadIds: () => l.map(e => e.id),
                            isEmpty: () => 0 === l.length,
                            get channelList() {
                                return null == s && (s = _(l, this)), s
                            }
                        }
                    }).value(),
                    G = {
                        isEmpty: () => !0,
                        getRows: () => [],
                        getRow: () => null
                    },
                    b = {
                        id: R.FAVORITES_RAW_GUILD_ID,
                        hideMutedChannels: t,
                        favoritesSectionNumber: 1,
                        recentsSectionNumber: 2,
                        voiceChannelsSectionNumber: -999,
                        getSections: () => [0, 0, 0, h.channelList.length, ...g.map(e => Math.max(1, e.channelList.length))],
                        isPlaceholderRow(e, t) {
                            if (e < D.SECTION_INDEX_FIRST_NAMED_CATEGORY || 0 !== t) return !1;
                            let n = g[e - D.SECTION_INDEX_FIRST_NAMED_CATEGORY];
                            return 0 === n.channelList.length
                        },
                        getCategoryFromSection: e => e === D.SECTION_INDEX_UNCATEGORIZED_CHANNELS ? h : g[e - D.SECTION_INDEX_FIRST_NAMED_CATEGORY],
                        getNamedCategoryFromSection: e => g[e - D.SECTION_INDEX_FIRST_NAMED_CATEGORY],
                        getChannelFromSectionRow(e, t) {
                            let n = this.getCategoryFromSection(e);
                            return null == n || null == n.channelList[t] ? null : {
                                category: n,
                                channel: n.channelList[t]
                            }
                        },
                        getCommunitySection: () => G,
                        getFirstVoiceChannel: () => null,
                        getSectionRowsFromChannel(e) {
                            let t = [h, ...g];
                            for (let n = 0; n < t.length; n++)
                                for (let i = 0; i < t[n].channelList.length; i++)
                                    if (t[n].channelList[i].id === e) return [{
                                        section: n + D.SECTION_INDEX_UNCATEGORIZED_CHANNELS,
                                        row: i
                                    }];
                            return []
                        },
                        forEachShownChannel(e) {
                            let t = [h, ...g];
                            for (let n of t)
                                for (let t of n.channelList)
                                    for (let n of (e(t.record), t.threadIds)) {
                                        let t = C.default.getChannel(n);
                                        null != t && e(t)
                                    }
                        },
                        forEachChannel(e) {
                            let t = [h, ...g];
                            for (let n of t)
                                for (let t of n.getChannelRecords()) e(t)
                        },
                        getSlicedChannels: e => [
                            [], e, []
                        ],
                        getChannels: () => []
                    };
                return b
            }