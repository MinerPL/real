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
                u = n("191225"),
                d = n("379881"),
                s = n("106682"),
                r = n("398604"),
                E = n("401690"),
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
                p = n("319839"),
                D = n("695838"),
                R = n("843455");
            let h = [u.default, d.default, r.default, E.default, _.default, c.default, C.default, S.default, I.default, f.default, N.default, O.default];

            function g() {
                let [e, t] = i.useState(() => G());
                return i.useEffect(() => {
                    let e = l.throttle(() => t(G()), 100);
                    return h.forEach(t => t.addChangeListener(e)), () => h.forEach(t => t.removeChangeListener(e))
                }, []), e
            }

            function G() {
                let e = d.default.getFavoriteChannels(),
                    t = O.default.isGuildCollapsed(D.FAVORITES_RAW_GUILD_ID),
                    n = N.default.getChannelId(),
                    i = C.default.getChannel(n),
                    o = N.default.getVoiceChannelId(),
                    u = [],
                    r = {};
                for (let t in e) {
                    let n = e[t],
                        i = C.default.getChannel(n.id);
                    if (null == i || n.type === a.FavoriteChannelType.CATEGORY) continue;
                    let o = (0, s.createFavoritesChannelRecord)(e, n, i);
                    if (null == n.parentId || !(n.parentId in e)) {
                        u.push(o);
                        continue
                    }!(n.parentId in r) && (r[n.parentId] = []), r[n.parentId].push(o)
                }

                function _(n, a) {
                    let {
                        isCollapsed: u,
                        isMuted: d
                    } = a;
                    return l(n).map(n => {
                        var s;
                        if (!n.isPrivate() && !I.default.can(R.Permissions.VIEW_CHANNEL, n)) return null;
                        let r = null != i && (i.id === n.id || o === n.id),
                            _ = null != i && i.isThread() && i.parent_id === n.id,
                            c = null !== (s = r || _ || !u ? E.default.getActiveJoinedRelevantThreadsForParent(n.guild_id, n.id) : E.default.getActiveJoinedUnreadThreadsForParent(n.guild_id, n.id)) && void 0 !== s ? s : {},
                            C = (0, p.computeThreadIds)(n, c, i, o, t),
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
                                subtitle: (0, p.computeSubtitle)(n, S, !1),
                                isAssistantCallout: !1
                            };
                        return r || _ || f.default.getMentionCount(n.id) > 0 ? L : t && N || u && (N || d || (0, A.isGuildReadableType)(n.type) && !1 === f.default.hasUnread(n.id)) ? null : L
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
                        getChannelRecords: () => u,
                        getShownChannelIds: () => u.map(e => e.id),
                        getShownChannelAndThreadIds: () => u.map(e => e.id),
                        isEmpty: () => 0 === u.length,
                        get channelList() {
                            return null == S && (S = _(u, this)), S
                        }
                    },
                    g = l(e).values().filter(e => e.type === a.FavoriteChannelType.CATEGORY).sortBy(e => e.order).map(e => {
                        var t;
                        let {
                            id: n,
                            order: i
                        } = e, o = d.default.getCategoryRecord(n), l = null !== (t = r[n]) && void 0 !== t ? t : [], a = O.default.isChannelMuted(D.FAVORITES_RAW_GUILD_ID, n), u = c.default.isCollapsed(n), s = null;
                        return {
                            isMuted: a,
                            isCollapsed: u,
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
                        id: D.FAVORITES_RAW_GUILD_ID,
                        hideMutedChannels: t,
                        favoritesSectionNumber: 1,
                        recentsSectionNumber: 2,
                        voiceChannelsSectionNumber: -999,
                        getSections: () => [0, 0, 0, h.channelList.length, ...g.map(e => Math.max(1, e.channelList.length))],
                        isPlaceholderRow(e, t) {
                            if (e < p.SECTION_INDEX_FIRST_NAMED_CATEGORY || 0 !== t) return !1;
                            let n = g[e - p.SECTION_INDEX_FIRST_NAMED_CATEGORY];
                            return 0 === n.channelList.length
                        },
                        getCategoryFromSection: e => e === p.SECTION_INDEX_UNCATEGORIZED_CHANNELS ? h : g[e - p.SECTION_INDEX_FIRST_NAMED_CATEGORY],
                        getNamedCategoryFromSection: e => g[e - p.SECTION_INDEX_FIRST_NAMED_CATEGORY],
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
                                        section: n + p.SECTION_INDEX_UNCATEGORIZED_CHANNELS,
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