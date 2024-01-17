"use strict";
n.r(t), n.d(t, {
  MAX_GUILDS_PER_PAGE: function() {
    return p
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
  f = n("926787"),
  E = n("246053"),
  _ = n("794818"),
  h = n("961098"),
  C = n("338638"),
  I = n("719369"),
  T = n("447621"),
  S = n("782340"),
  m = n("492898");
let p = 12,
  A = () => {
    let e = (0, c.getHistory)(),
      t = e.location.search,
      n = null != t && t.length > 0 && t.startsWith("?");
    return n ? r.parse(t) : {}
  },
  g = e => {
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
      className: m.emptyContainer,
      children: [(0, a.jsx)("div", {
        className: m.emptyImage
      }), (0, a.jsx)(u.Heading, {
        variant: "heading-xl/semibold",
        className: m.emptyHeader,
        children: l
      }), (0, a.jsx)(u.Text, {
        variant: "text-md/normal",
        color: "header-secondary",
        children: r
      })]
    })
  },
  N = () => (0, a.jsxs)("div", {
    className: m.emptyContainer,
    children: [(0, a.jsx)("div", {
      className: m.errorImage
    }), (0, a.jsx)(u.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: m.emptyHeader,
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
    total: w
  } = n, [k, F] = s.useState(!1), {
    tag: H
  } = A(), [B, V] = s.useState(H), Y = (0, o.useStateFromStores)([f.default], () => f.default.hasSearchError()), W = (e, t, n) => {
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
    } = A(), n = null != e ? Math.floor(parseInt(e, 10) / p) + 1 : 1;
    V(!!t), 1 === n && F(!0)
  }, [i]);
  let z = M === T.DISCOVERY_ALL_CATEGORIES_ID ? S.default.Messages.GUILD_DISCOVERY_SEARCH_RESULTS_HEADER.format({
    count: null != w ? w.toLocaleString() : "0",
    query: i
  }) : S.default.Messages.GUILD_DISCOVERY_SEARCH_RESULTS_CATEGORY_HEADER.format({
    count: null != w ? w.toLocaleString() : "0",
    query: i,
    category: P
  });
  return (0, a.jsxs)("div", {
    className: m.container,
    children: [(0, a.jsxs)("div", {
      className: m.searchHeader,
      children: [(0, a.jsx)(u.Clickable, {
        onClick: () => {
          d.clearSearch(), _.trackSearchClosed(t)
        },
        className: m.arrow,
        "aria-label": S.default.Messages.BACK,
        children: (0, a.jsx)(E.default, {
          direction: E.default.Directions.LEFT
        })
      }), (0, a.jsx)(u.Heading, {
        variant: "heading-xl/semibold",
        className: m.header,
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
      isTagSearch: B
    }), Y ? (0, a.jsx)(N, {}) : w <= 0 ? (0, a.jsx)(g, {
      categoryId: M,
      categoryName: P,
      onClick: () => {
        d.selectCategory(T.DISCOVERY_ALL_CATEGORIES_ID), W(0, p, !0)
      }
    }) : (0, a.jsx)("div", {
      className: m.results,
      children: (0, a.jsx)(h.default, {
        pageSize: p,
        totalCount: w,
        resetCurrentPage: k,
        onPageChange: e => {
          let t = (e - 1) * p;
          W(t, p), K()
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
              loadingPlaceholderCount: p,
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