            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return x
                }
            }), n("222007");
            var a = n("37983"),
                l = n("884691"),
                s = n("446674"),
                i = n("77078"),
                r = n("913144"),
                u = n("267363"),
                o = n("27978"),
                d = n("660478"),
                c = n("599110"),
                f = n("15433"),
                h = n("71102"),
                p = n("393467"),
                m = n("209397"),
                E = n("187163"),
                C = n("132615"),
                S = n("663685"),
                g = n("516056"),
                _ = n("30176"),
                I = n("730647"),
                T = n("49111"),
                v = n("512233"),
                x = e => {
                    var t;
                    let {
                        channel: x,
                        guild: N
                    } = e, {
                        currentCategoryId: A,
                        directoryEntries: M,
                        categoryCounts: R,
                        allEntriesCount: j,
                        isLoading: L
                    } = (0, s.useStateFromStoresObject)([m.default], () => {
                        let e = m.default.getCurrentCategoryId(x.id),
                            t = m.default.getDirectoryEntries(x.id, e === I.DirectoryEntryCategories.ALL ? null : e),
                            n = m.default.getDirectoryCategoryCounts(x.id),
                            a = m.default.getDirectoryAllEntriesCount(x.id),
                            l = m.default.isFetching();
                        return {
                            currentCategoryId: e,
                            directoryEntries: t,
                            categoryCounts: n,
                            allEntriesCount: a,
                            isLoading: l
                        }
                    });
                    l.useEffect(() => () => {
                        let e = d.default.lastMessageId(x.id);
                        null != e && r.default.wait(() => {
                            (0, u.ack)(x.id, !0, !0, e)
                        })
                    }, [x.id]);
                    let O = l.useMemo(() => null != M ? (0, g.generateDirectoryRows)(Object.values(M), A) : null, [M, A]),
                        {
                            mostRecentQuery: y,
                            searchFetching: b,
                            searchResults: P
                        } = (0, s.useStateFromStoresObject)([p.default], () => {
                            let {
                                mostRecentQuery: e,
                                fetching: t
                            } = p.default.getSearchState(x.id);
                            return {
                                mostRecentQuery: e,
                                searchFetching: t,
                                searchResults: p.default.getSearchResults(x.id, e)
                            }
                        }),
                        [D, U] = l.useState(y),
                        w = "" !== y,
                        {
                            showHubEventsList: F
                        } = o.default.useExperiment({
                            guildId: null !== (t = N.id) && void 0 !== t ? t : "",
                            location: "6f7fb0_1"
                        }, {
                            autoTrackExposure: !1
                        });
                    l.useEffect(() => {
                        h.fetchDirectoryEntries(x.id), h.fetchDirectoryCounts(x.id), F && f.fetchDirectoryEntries(x.id), U(y)
                    }, [x.id]), l.useEffect(() => {
                        c.default.track(T.AnalyticEvents.GUILD_DIRECTORY_CHANNEL_VIEWED, {
                            directory_channel_id: x.id,
                            directory_guild_id: N.id,
                            primary_category_id: A
                        })
                    }, [x.id, N.id, A]);
                    let k = (0, E.useCanCreateOrAddGuildInDirectory)(x),
                        V = k ? () => {
                            (0, i.openModalLazy)(async () => {
                                let {
                                    default: e
                                } = await n.el("467085").then(n.bind(n, "467085"));
                                return t => (0, a.jsx)(e, {
                                    ...t,
                                    directoryGuildName: N.name,
                                    directoryGuildId: N.id,
                                    directoryChannelId: x.id,
                                    currentCategoryId: A === I.DirectoryEntryCategories.ALL ? null : A
                                })
                            })
                        } : void 0,
                        B = e => {
                            0 !== D.trim().length && e.charCode === T.KeyboardKeys.ENTER && (h.searchDirectoryEntries(x.id, D), c.default.track(T.AnalyticEvents.GUILD_DIRECTORY_SEARCH, {
                                directory_channel_id: x.id,
                                directory_guild_id: N.id
                            }))
                        },
                        H = () => {
                            U(""), h.clearDirectorySearch(x.id)
                        };
                    return w ? (0, a.jsx)(_.default, {
                        searchQuery: D,
                        setSearchQuery: U,
                        mostRecentQuery: y,
                        handleSearchKeyPress: B,
                        handleClearSearch: H,
                        handleCreateOrAddGuild: V,
                        searchResults: P,
                        searchFetching: b
                    }) : null == O && null == A ? (0, a.jsx)("div", {
                        className: v.pageContainer,
                        children: (0, a.jsx)(i.Spinner, {
                            className: v.spinner
                        })
                    }) : (null == O ? void 0 : O.length) === 0 && null == A ? (0, a.jsx)("div", {
                        className: v.pageContainer,
                        children: (0, a.jsx)(C.default, {
                            guild: N,
                            onAddGuild: V
                        })
                    }) : (0, a.jsx)(S.default, {
                        channel: x,
                        searchQuery: D,
                        setSearchQuery: U,
                        handleSearchKeyPress: B,
                        handleClearSearch: H,
                        handleCreateOrAddGuild: V,
                        currentCategoryId: A,
                        handleSelectCategory: e => {
                            h.selectDirectoryCategory(x.id, e)
                        },
                        directoryEntries: O,
                        categoryCounts: R,
                        allEntriesCount: j,
                        isLoading: L
                    })
                }