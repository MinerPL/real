            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return L
                }
            }), l("313619"), l("654714"), l("287168"), l("956660"), l("222007");
            var i = l("37983"),
                a = l("884691"),
                n = l("917351"),
                s = l.n(n),
                r = l("90915"),
                c = l("974667"),
                o = l("641761"),
                d = l("997076"),
                u = l("65597"),
                p = l("77078"),
                m = l("302437"),
                _ = l("599110"),
                f = l("721698"),
                h = l("599994"),
                C = l("831109"),
                g = l("856894"),
                I = l("136110"),
                A = l("682777"),
                E = l("898656"),
                v = l("619288"),
                x = l("915267"),
                R = l("436846"),
                T = l("46425"),
                N = l("412707"),
                P = l("646186"),
                y = l("718765"),
                j = l("49111"),
                O = l("845121"),
                S = l("968579");

            function L() {
                var e;
                let t;
                let l = (0, N.useApplicationDirectoryHistory)(e => e.guildId),
                    n = (0, u.default)([C.default], () => C.default.getCategories()),
                    c = (0, r.useLocation)(),
                    {
                        queryParam: p,
                        pageParam: m,
                        categoryIdParam: h
                    } = a.useMemo(() => {
                        let e = new URLSearchParams(c.search);
                        return {
                            queryParam: e.get("q"),
                            pageParam: e.get("page"),
                            categoryIdParam: e.get("category_id")
                        }
                    }, []),
                    [E, L] = a.useState(null != m ? Number(m) : 1),
                    [M, b] = a.useState(null != p ? p : ""),
                    [Y, k] = a.useState(null !== (e = Number(h)) && void 0 !== e ? e : A.ALL_CATEGORY_ID),
                    H = a.useMemo(() => null == n ? void 0 : n.find(e => e.id === Y), [n, Y]),
                    G = a.useCallback(e => {
                        k(e.id), L(1)
                    }, []),
                    F = a.useCallback(e => {
                        b(e), L(1), 0 === e.length && k(A.ALL_CATEGORY_ID)
                    }, []),
                    w = a.useCallback(e => {
                        var t, l;
                        let {
                            query: i,
                            categoryId: a,
                            page: n
                        } = e, s = new URLSearchParams(c.search);
                        "" === i ? s.delete("q") : s.set("q", i), a === A.ALL_CATEGORY_ID ? s.delete("category_id") : s.set("category_id", null !== (t = null == a ? void 0 : a.toString()) && void 0 !== t ? t : ""), 1 === n ? s.delete("page") : s.set("page", null !== (l = null == n ? void 0 : n.toString()) && void 0 !== l ? l : ""), (0, P.replaceAppDirectoryURLWith)("".concat(j.Routes.APPLICATION_DIRECTORY_SEARCH, "?").concat(s.toString()))
                    }, [c.search]),
                    U = a.useMemo(() => s.debounce(w, 400), [w]);
                a.useEffect(() => {
                    U({
                        query: M,
                        categoryId: Y,
                        page: E
                    })
                }, [U, M, Y, E]);
                let B = (0, u.default)([g.default], () => g.default.getFetchState({
                        query: M,
                        guildId: l,
                        page: E,
                        categoryId: Y
                    })),
                    V = a.useRef({
                        query: "",
                        guildId: void 0,
                        page: void 0,
                        categoryId: void 0
                    }),
                    W = (0, u.useStateFromStoresObject)([g.default], () => {
                        let e = g.default.getSearchResults({
                            query: M,
                            guildId: l
                        });
                        return null != e ? {
                            [A.ALL_CATEGORY_ID]: e.totalCount,
                            ...e.countsByCategory
                        } : {}
                    }),
                    {
                        pageResults: K,
                        pageCount: z,
                        searchResultsType: Z,
                        loadId: q
                    } = (0, u.useStateFromStoresObject)([g.default], () => {
                        var e, t;
                        let i = {
                                query: M,
                                guildId: l,
                                page: E,
                                categoryId: Y
                            },
                            a = g.default.getSearchResults(i);
                        return null == a ? a = g.default.getSearchResults(V.current) : V.current = i, {
                            pageResults: null == a ? void 0 : a.results,
                            pageCount: null !== (e = null == a ? void 0 : a.totalPages) && void 0 !== e ? e : 0,
                            searchResultsType: null !== (t = null == a ? void 0 : a.type) && void 0 !== t ? t : d.ApplicationDirectorySearchType.SEARCH_RESULTS,
                            loadId: null == a ? void 0 : a.loadId
                        }
                    }),
                    X = a.useMemo(() => null == K ? void 0 : K.filter(e => !(Z === d.ApplicationDirectorySearchType.SEARCH_RESULTS && e.type !== o.ApplicationDirectorySearchResultType.APPLICATION)), [K, Z]),
                    J = a.useRef(null),
                    Q = (0, N.getCurrentView)(),
                    $ = a.useCallback(e => {
                        _.default.track(j.AnalyticEvents.APP_DIRECTORY_SEARCHED, {
                            search_term: M,
                            num_results: e,
                            current_page: null == Q ? void 0 : Q.type,
                            result_page: E,
                            category: null == H ? void 0 : H.name,
                            category_id: null == H ? void 0 : H.id,
                            guild_id: l
                        })
                    }, [null == H ? void 0 : H.id, null == H ? void 0 : H.name, E, l, M, Q]),
                    ee = a.useCallback(e => {
                        let {
                            query: t,
                            page: l,
                            activeCategoryId: i,
                            onSuccessCallback: a,
                            guildId: n,
                            fetchCounts: s
                        } = e;
                        s && f.search({
                            query: t,
                            guildId: n
                        }), f.search({
                            query: t,
                            guildId: n,
                            options: {
                                page: l,
                                categoryId: i
                            },
                            onSuccessCallback: a
                        }), J.current = t
                    }, []),
                    [et] = a.useState(() => s.debounce(ee, 400, {
                        leading: !1,
                        trailing: !0
                    })),
                    el = a.useCallback(e => {
                        L(e)
                    }, [L]),
                    ei = a.useCallback(e => {
                        let {
                            application: t,
                            mutualGuilds: i
                        } = e;
                        _.default.track(j.AnalyticEvents.APP_DIRECTORY_SEARCH_RESULT_CLICKED, {
                            current_page: N.ApplicationDirectoryViews.SEARCH,
                            application_id: t.id,
                            load_id: q,
                            search_term: M,
                            guild_id: l,
                            shown_mutual_guilds_count: i.length
                        }), (0, P.goToApplication)({
                            applicationId: t.id
                        })
                    }, [q, M, l]);
                a.useEffect(() => {
                    ee({
                        query: M,
                        page: E,
                        activeCategoryId: Y,
                        guildId: l,
                        fetchCounts: M !== J.current,
                        onSuccessCallback: $
                    })
                }, [ee, H, l, E]), a.useEffect(() => {
                    et({
                        query: M,
                        page: E,
                        activeCategoryId: Y,
                        guildId: l,
                        fetchCounts: M !== J.current,
                        onSuccessCallback: $
                    })
                }, [M, et]);
                let ea = a.useMemo(() => Object.keys(W).length > 0, [W]);
                return null != X && 0 === z || B === g.FetchState.ERROR ? t = (0, i.jsx)(v.default, {
                    category: H,
                    onViewAll: () => {
                        L(1), k(A.ALL_CATEGORY_ID)
                    }
                }) : null != X && X.length > 0 && Z === d.ApplicationDirectorySearchType.SEARCH_RESULTS ? t = (0, i.jsx)(D, {
                    items: X,
                    pageCount: z,
                    currentPage: E,
                    showPrimaryCategory: Y === A.ALL_CATEGORY_ID,
                    onItemClick: ei,
                    onChangePage: el
                }) : null != X && X.length > 0 && Z === d.ApplicationDirectorySearchType.MUSIC && (t = (0, i.jsx)(T.default, {
                    guildId: l,
                    results: X
                })), (0, i.jsx)(I.default, {
                    children: (0, i.jsxs)("div", {
                        className: O.page,
                        children: [(0, i.jsxs)("div", {
                            className: O.sidebar,
                            children: [(0, i.jsx)("img", {
                                src: S,
                                alt: "",
                                className: O.sidebarImage
                            }), (0, i.jsx)(y.default, {
                                className: O.categoryList,
                                countsByCategory: ea ? W : void 0,
                                currentCategoryId: Y,
                                onView: G
                            })]
                        }), (0, i.jsxs)("div", {
                            className: O.content,
                            children: [(0, i.jsx)(R.default, {
                                query: M,
                                onChange: F
                            }), (0, i.jsx)(x.default, {
                                loading: B === g.FetchState.FETCHING,
                                children: (0, i.jsx)("div", {
                                    className: O.contentContainer,
                                    children: t
                                })
                            })]
                        })]
                    })
                })
            }

            function D(e) {
                let {
                    items: t,
                    currentPage: l,
                    pageCount: n,
                    showPrimaryCategory: s,
                    onItemClick: r,
                    onChangePage: d
                } = e, u = (0, m.default)("application-directory-search");
                return (0, i.jsxs)(a.Fragment, {
                    children: [(0, i.jsx)(c.ListNavigatorProvider, {
                        navigator: u,
                        children: (0, i.jsx)(c.ListNavigatorContainer, {
                            children: e => {
                                let {
                                    ref: l,
                                    ...a
                                } = e;
                                return (0, i.jsx)("ul", {
                                    ref: l,
                                    ...a,
                                    children: t.map(e => {
                                        if (e.type === o.ApplicationDirectorySearchResultType.APPLICATION) {
                                            var t;
                                            let l;
                                            let a = e.data;
                                            return (null === (t = a.directory_entry) || void 0 === t ? void 0 : t.short_description) != null && a.directory_entry.short_description.length > 0 ? l = a.directory_entry.short_description : null != a.description && a.description.length > 0 && (l = a.description), (0, i.jsx)(h.default, {
                                                href: j.Routes.APPLICATION_DIRECTORY_PROFILE(a.id),
                                                children: (0, i.jsx)(E.default, {
                                                    className: O.listing,
                                                    childrenClassName: O.listingDetails,
                                                    application: a,
                                                    onView: e => {
                                                        let {
                                                            mutualGuilds: t
                                                        } = e;
                                                        return r({
                                                            application: a,
                                                            mutualGuilds: t
                                                        })
                                                    },
                                                    showMutualGuilds: !0,
                                                    showPrimaryCategory: s,
                                                    source: "search",
                                                    children: null != l ? (0, i.jsx)(p.Text, {
                                                        className: O.listingDescription,
                                                        variant: "text-md/normal",
                                                        lineClamp: 3,
                                                        children: l
                                                    }) : null
                                                })
                                            }, a.id)
                                        }
                                    })
                                })
                            }
                        })
                    }), (0, i.jsx)(p.Paginator, {
                        currentPage: l,
                        totalCount: Math.min(7 * n, 700),
                        pageSize: 7,
                        onPageChange: d,
                        disablePaginationGap: !0
                    })]
                })
            }