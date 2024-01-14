"use strict";
l.r(t), l.d(t, {
  default: function() {
    return M
  }
}), l("313619"), l("654714"), l("287168"), l("956660"), l("222007");
var i = l("37983"),
  a = l("884691"),
  n = l("917351"),
  s = l.n(n),
  r = l("642852"),
  c = l.n(r),
  o = l("90915"),
  d = l("974667"),
  u = l("641761"),
  p = l("997076"),
  m = l("65597"),
  _ = l("77078"),
  f = l("302437"),
  h = l("599110"),
  C = l("721698"),
  g = l("599994"),
  I = l("831109"),
  A = l("856894"),
  E = l("136110"),
  v = l("682777"),
  x = l("898656"),
  R = l("619288"),
  T = l("915267"),
  N = l("436846"),
  P = l("46425"),
  y = l("412707"),
  j = l("646186"),
  O = l("718765"),
  S = l("49111"),
  L = l("845121"),
  D = l("968579");

function M() {
  var e;
  let t;
  let l = (0, y.useApplicationDirectoryHistory)(e => e.guildId),
    n = (0, m.default)([I.default], () => I.default.getCategories()),
    r = (0, o.useLocation)(),
    {
      queryParam: c,
      pageParam: d,
      categoryIdParam: _
    } = a.useMemo(() => {
      let e = new URLSearchParams(r.search);
      return {
        queryParam: e.get("q"),
        pageParam: e.get("page"),
        categoryIdParam: e.get("category_id")
      }
    }, []),
    [f, g] = a.useState(null != d ? Number(d) : 1),
    [x, M] = a.useState(null != c ? c : ""),
    [Y, k] = a.useState(null !== (e = Number(_)) && void 0 !== e ? e : v.ALL_CATEGORY_ID),
    H = a.useMemo(() => null == n ? void 0 : n.find(e => e.id === Y), [n, Y]),
    G = a.useCallback(e => {
      k(e.id), g(1)
    }, []),
    F = a.useCallback(e => {
      M(e), g(1), 0 === e.length && k(v.ALL_CATEGORY_ID)
    }, []),
    w = a.useCallback(e => {
      var t, l;
      let {
        query: i,
        categoryId: a,
        page: n
      } = e, s = new URLSearchParams(r.search);
      "" === i ? s.delete("q") : s.set("q", i), a === v.ALL_CATEGORY_ID ? s.delete("category_id") : s.set("category_id", null !== (t = null == a ? void 0 : a.toString()) && void 0 !== t ? t : ""), 1 === n ? s.delete("page") : s.set("page", null !== (l = null == n ? void 0 : n.toString()) && void 0 !== l ? l : ""), (0, j.replaceAppDirectoryURLWith)("".concat(S.Routes.APPLICATION_DIRECTORY_SEARCH, "?").concat(s.toString()))
    }, [r.search]),
    U = a.useMemo(() => s.debounce(w, 400), [w]);
  a.useEffect(() => {
    U({
      query: x,
      categoryId: Y,
      page: f
    })
  }, [U, x, Y, f]);
  let B = (0, m.default)([A.default], () => A.default.getFetchState({
      query: x,
      guildId: l,
      page: f,
      categoryId: Y
    })),
    V = a.useRef({
      query: "",
      guildId: void 0,
      page: void 0,
      categoryId: void 0
    }),
    W = (0, m.useStateFromStoresObject)([A.default], () => {
      let e = A.default.getSearchResults({
        query: x,
        guildId: l
      });
      return null != e ? {
        [v.ALL_CATEGORY_ID]: e.totalCount,
        ...e.countsByCategory
      } : {}
    }),
    {
      pageResults: K,
      pageCount: z,
      searchResultsType: Z,
      loadId: q
    } = (0, m.useStateFromStoresObject)([A.default], () => {
      var e, t;
      let i = {
          query: x,
          guildId: l,
          page: f,
          categoryId: Y
        },
        a = A.default.getSearchResults(i);
      return null == a ? a = A.default.getSearchResults(V.current) : V.current = i, {
        pageResults: null == a ? void 0 : a.results,
        pageCount: null !== (e = null == a ? void 0 : a.totalPages) && void 0 !== e ? e : 0,
        searchResultsType: null !== (t = null == a ? void 0 : a.type) && void 0 !== t ? t : p.ApplicationDirectorySearchType.SEARCH_RESULTS,
        loadId: null == a ? void 0 : a.loadId
      }
    }),
    X = a.useMemo(() => null == K ? void 0 : K.filter(e => !(Z === p.ApplicationDirectorySearchType.SEARCH_RESULTS && e.type !== u.ApplicationDirectorySearchResultType.APPLICATION)), [K, Z]),
    J = a.useRef(null),
    Q = (0, y.getCurrentView)(),
    $ = a.useCallback(e => {
      h.default.track(S.AnalyticEvents.APP_DIRECTORY_SEARCHED, {
        search_term: x,
        num_results: e,
        current_page: null == Q ? void 0 : Q.type,
        result_page: f,
        category: null == H ? void 0 : H.name,
        category_id: null == H ? void 0 : H.id,
        guild_id: l
      })
    }, [null == H ? void 0 : H.id, null == H ? void 0 : H.name, f, l, x, Q]),
    ee = a.useCallback(e => {
      let {
        query: t,
        page: l,
        activeCategoryId: i,
        onSuccessCallback: a,
        guildId: n,
        fetchCounts: s
      } = e;
      s && C.search({
        query: t,
        guildId: n
      }), C.search({
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
      g(e)
    }, [g]),
    ei = a.useCallback(e => {
      let {
        application: t,
        mutualGuilds: i
      } = e;
      h.default.track(S.AnalyticEvents.APP_DIRECTORY_SEARCH_RESULT_CLICKED, {
        current_page: y.ApplicationDirectoryViews.SEARCH,
        application_id: t.id,
        load_id: q,
        search_term: x,
        guild_id: l,
        shown_mutual_guilds_count: i.length
      }), (0, j.goToApplication)({
        applicationId: t.id
      })
    }, [q, x, l]);
  a.useEffect(() => {
    ee({
      query: x,
      page: f,
      activeCategoryId: Y,
      guildId: l,
      fetchCounts: x !== J.current,
      onSuccessCallback: $
    })
  }, [ee, H, l, f]), a.useEffect(() => {
    et({
      query: x,
      page: f,
      activeCategoryId: Y,
      guildId: l,
      fetchCounts: x !== J.current,
      onSuccessCallback: $
    })
  }, [x, et]);
  let ea = a.useMemo(() => Object.keys(W).length > 0, [W]);
  return null != X && 0 === z || B === A.FetchState.ERROR ? t = (0, i.jsx)(R.default, {
    category: H,
    onViewAll: () => {
      g(1), k(v.ALL_CATEGORY_ID)
    }
  }) : null != X && X.length > 0 && Z === p.ApplicationDirectorySearchType.SEARCH_RESULTS ? t = (0, i.jsx)(b, {
    items: X,
    pageCount: z,
    currentPage: f,
    showPrimaryCategory: Y === v.ALL_CATEGORY_ID,
    onItemClick: ei,
    onChangePage: el
  }) : null != X && X.length > 0 && Z === p.ApplicationDirectorySearchType.MUSIC && (t = (0, i.jsx)(P.default, {
    guildId: l,
    results: X
  })), (0, i.jsx)(E.default, {
    children: (0, i.jsxs)("div", {
      className: L.page,
      children: [(0, i.jsxs)("div", {
        className: L.sidebar,
        children: [(0, i.jsx)("img", {
          src: D,
          alt: "",
          className: L.sidebarImage
        }), (0, i.jsx)(O.default, {
          className: L.categoryList,
          countsByCategory: ea ? W : void 0,
          currentCategoryId: Y,
          onView: G
        })]
      }), (0, i.jsxs)("div", {
        className: L.content,
        children: [(0, i.jsx)(N.default, {
          query: x,
          onChange: F
        }), (0, i.jsx)(T.default, {
          loading: B === A.FetchState.FETCHING,
          children: (0, i.jsx)("div", {
            className: L.contentContainer,
            children: t
          })
        })]
      })]
    })
  })
}

function b(e) {
  let {
    items: t,
    currentPage: l,
    pageCount: n,
    showPrimaryCategory: s,
    onItemClick: r,
    onChangePage: c
  } = e, o = (0, f.default)("application-directory-search");
  return (0, i.jsxs)(a.Fragment, {
    children: [(0, i.jsx)(d.ListNavigatorProvider, {
      navigator: o,
      children: (0, i.jsx)(d.ListNavigatorContainer, {
        children: e => {
          let {
            ref: l,
            ...a
          } = e;
          return (0, i.jsx)("ul", {
            ref: l,
            ...a,
            children: t.map(e => {
              if (e.type === u.ApplicationDirectorySearchResultType.APPLICATION) {
                var t;
                let l;
                let a = e.data;
                return (null === (t = a.directory_entry) || void 0 === t ? void 0 : t.short_description) != null && a.directory_entry.short_description.length > 0 ? l = a.directory_entry.short_description : null != a.description && a.description.length > 0 && (l = a.description), (0, i.jsx)(g.default, {
                  href: S.Routes.APPLICATION_DIRECTORY_PROFILE(a.id),
                  children: (0, i.jsx)(x.default, {
                    className: L.listing,
                    childrenClassName: L.listingDetails,
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
                    children: null != l ? (0, i.jsx)(_.Text, {
                      className: L.listingDescription,
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
    }), (0, i.jsx)(_.Paginator, {
      currentPage: l,
      totalCount: Math.min(7 * n, 700),
      pageSize: 7,
      onPageChange: c,
      disablePaginationGap: !0
    })]
  })
}
c.shim()