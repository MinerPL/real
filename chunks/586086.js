            "use strict";
            n.r(t), n.d(t, {
                MAX_GUILDS_PER_PAGE: function() {
                    return A
                },
                default: function() {
                    return R
                }
            }), n("222007");
            var a = n("37983"),
                s = n("884691"),
                i = n("917351"),
                l = n.n(i),
                r = n("522632"),
                o = n("446674"),
                u = n("77078"),
                d = n("340626"),
                c = n("393414"),
                E = n("926787"),
                f = n("246053"),
                _ = n("794818"),
                h = n("961098"),
                C = n("338638"),
                I = n("719369"),
                T = n("447621"),
                S = n("782340"),
                N = n("492898");
            let A = 12,
                m = () => {
                    let e = (0, c.getHistory)(),
                        t = e.location.search,
                        n = null != t && t.length > 0 && t.startsWith("?");
                    return n ? r.parse(t) : {}
                },
                p = e => {
                    let {
                        categoryId: t,
                        categoryName: n,
                        onClick: s
                    } = e, i = t === T.DISCOVERY_ALL_CATEGORIES_ID, l = i ? S.default.Messages.GUILD_DISCOVERY_SEARCH_EMPTY_HEADER : S.default.Messages.GUILD_DISCOVERY_SEARCH_EMPTY_CATEGORY_HEADER.format({
                        categoryName: n
                    }), r = i ? S.default.Messages.GUILD_DISCOVERY_SEARCH_EMPTY_BODY : S.default.Messages.GUILD_DISCOVERY_SEARCH_EMPTY_CATEGORY_BODY.format({
                        onClick: s
                    });
                    return (0, a.jsxs)("div", {
                        className: N.emptyContainer,
                        children: [(0, a.jsx)("div", {
                            className: N.emptyImage
                        }), (0, a.jsx)(u.Heading, {
                            variant: "heading-xl/semibold",
                            className: N.emptyHeader,
                            children: l
                        }), (0, a.jsx)(u.Text, {
                            variant: "text-md/normal",
                            color: "header-secondary",
                            children: r
                        })]
                    })
                },
                g = () => (0, a.jsxs)("div", {
                    className: N.emptyContainer,
                    children: [(0, a.jsx)("div", {
                        className: N.errorImage
                    }), (0, a.jsx)(u.Text, {
                        variant: "text-md/normal",
                        color: "header-secondary",
                        className: N.emptyHeader,
                        children: S.default.Messages.GUILD_DISCOVERY_SEARCH_ERROR
                    })]
                });
            var R = e => {
                let {
                    loadId: t,
                    searchResults: n,
                    mostRecentQuery: i,
                    defaultLanguage: r,
                    availableLanguages: c,
                    isFetchingSearch: R,
                    scroller: O,
                    loadingGuildId: L,
                    theme: v,
                    currentCategoryId: M,
                    currentCategoryName: P,
                    onViewGuild: D,
                    onGuildCardSeen: y,
                    placeholder: x,
                    onTagClick: b
                } = e, U = l.uniqueId("GuildDiscovery"), {
                    guilds: G,
                    loading: j,
                    total: k
                } = n, [w, F] = s.useState(!1), {
                    tag: B
                } = m(), [H, V] = s.useState(B), Y = (0, o.useStateFromStores)([E.default], () => E.default.hasSearchError()), W = (e, t, n) => {
                    d.doAlgoliaSearch(i, {
                        categoryId: n ? T.DISCOVERY_ALL_CATEGORIES_ID : M,
                        preferredLocale: r.code,
                        offset: e,
                        length: t,
                        filters: {
                            approximate_member_count: _.MINIMUM_MEMBER_COUNT
                        }
                    }), F(!1)
                }, K = () => {
                    null == O || O.scrollTo({
                        to: 0
                    })
                };
                s.useEffect(() => {
                    let {
                        offset: e,
                        tag: t
                    } = m(), n = null != e ? Math.floor(parseInt(e, 10) / A) + 1 : 1;
                    V(!!t), 1 === n && F(!0)
                }, [i]);
                let z = M === T.DISCOVERY_ALL_CATEGORIES_ID ? S.default.Messages.GUILD_DISCOVERY_SEARCH_RESULTS_HEADER.format({
                    count: null != k ? k.toLocaleString() : "0",
                    query: i
                }) : S.default.Messages.GUILD_DISCOVERY_SEARCH_RESULTS_CATEGORY_HEADER.format({
                    count: null != k ? k.toLocaleString() : "0",
                    query: i,
                    category: P
                });
                return (0, a.jsxs)("div", {
                    className: N.container,
                    children: [(0, a.jsxs)("div", {
                        className: N.searchHeader,
                        children: [(0, a.jsx)(u.Clickable, {
                            onClick: () => {
                                d.clearSearch(), _.trackSearchClosed(t)
                            },
                            className: N.arrow,
                            "aria-label": S.default.Messages.BACK,
                            children: (0, a.jsx)(f.default, {
                                direction: f.default.Directions.LEFT
                            })
                        }), (0, a.jsx)(u.Heading, {
                            variant: "heading-xl/semibold",
                            className: N.header,
                            children: z
                        })]
                    }), (0, a.jsx)(C.default, {
                        loadId: t,
                        searchResults: n,
                        mostRecentQuery: i,
                        isFetchingSearch: R,
                        defaultLanguage: r,
                        placeholder: x,
                        availableLanguages: c,
                        isSearchPage: !0,
                        currentCategoryId: M,
                        isTagSearch: H
                    }), Y ? (0, a.jsx)(g, {}) : k <= 0 ? (0, a.jsx)(p, {
                        categoryId: M,
                        categoryName: P,
                        onClick: () => {
                            d.selectCategory(T.DISCOVERY_ALL_CATEGORIES_ID), W(0, A, !0)
                        }
                    }) : (0, a.jsx)("div", {
                        className: N.results,
                        children: (0, a.jsx)(h.default, {
                            pageSize: A,
                            totalCount: k,
                            resetCurrentPage: w,
                            onPageChange: e => {
                                let t = (e - 1) * A;
                                W(t, A), K()
                            },
                            children: e => {
                                let {
                                    controller: t
                                } = e;
                                return (0, a.jsxs)("section", {
                                    "aria-labelledby": U,
                                    children: [(0, a.jsx)(I.default, {
                                        guilds: G,
                                        loading: j,
                                        loadingPlaceholderCount: A,
                                        onViewGuild: D,
                                        loadingGuildId: L,
                                        theme: v,
                                        analyticsContext: _.AnalyticsContexts.SEARCH,
                                        onGuildCardSeen: y,
                                        onTagClick: b
                                    }), t]
                                })
                            }
                        })
                    })]
                })
            }