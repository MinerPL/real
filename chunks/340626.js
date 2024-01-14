"use strict";
n.r(t), n.d(t, {
  createAlgoliaIndex: function() {
    return E
  },
  doAlgoliaSearch: function() {
    return function e(t, n) {
      let l = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        {
          categoryId: a = h.DISCOVERY_ALL_CATEGORIES_ID,
          preferredLocale: s,
          offset: c,
          length: C,
          tag: p
        } = n,
        E = d.default.getSearchIndex();
      if (null == E) return;
      l && ! function(e) {
        let {
          query: t,
          preferredLocale: n,
          offset: l,
          limit: a,
          categoryId: s,
          tag: r
        } = e, o = (0, u.getHistory)(), d = i.stringify({
          query: t,
          offset: l,
          limit: a,
          preferredLocale: n,
          categoryId: s,
          tag: r
        }), c = o.location.search, h = null != c && c.length > 0 && c.startsWith("?"), C = !h || c.startsWith("?") && c.split("?")[1] !== d;
        C && (0, u.transitionTo)(f.Routes.GUILD_DISCOVERY, {
          search: d
        })
      }({
        query: t,
        preferredLocale: s,
        offset: c,
        limit: C,
        categoryId: a,
        tag: p
      }), o.default.dispatch({
        type: "GUILD_DISCOVERY_SEARCH_FETCH_START",
        section: f.GuildDiscoverySections.SEARCH,
        query: t,
        categoryId: a
      });
      let g = Object.assign({}, m, n.filters),
        I = Object.keys(g),
        S = I.map(e => "".concat(e).concat(g[e]));
      a !== h.DISCOVERY_ALL_CATEGORIES_ID && S.push("(primary_category_id=".concat(a, " OR categories.id=").concat(a, ")"));
      let _ = S.join(" AND ");
      try {
        let i = E.search(t, {
            filters: _,
            optionalFilters: ["preferred_locale: ".concat(s)],
            length: C,
            offset: c,
            restrictSearchableAttributes: ["name", "description", "keywords", "categories.name", "categories.name_localizations.".concat(s), "primary_category.name", "primary_category.name_localizations.".concat(s), "vanity_url_code"]
          }),
          u = r.default.get({
            url: f.Endpoints.GUILD_DISCOVERY_VALID_TERM,
            query: {
              term: t
            },
            oldFormErrors: !0
          });
        Promise.all([i, u]).then(e => {
          let [{
            hits: n,
            nbHits: l
          }, {
            body: {
              valid: s
            }
          }] = e;
          o.default.dispatch({
            type: "GUILD_DISCOVERY_SEARCH_FETCH_SUCCESS",
            section: f.GuildDiscoverySections.SEARCH,
            query: t,
            categoryId: a,
            guilds: s ? [...n.map(e => ({
              ...e,
              id: e.objectID
            }))] : [],
            offset: c,
            limit: C,
            total: s ? Math.min(l, h.MAX_ALGOLIA_PAGINATOR_RESULTS) : 0
          })
        }).catch(s => {
          s.body.retry_after > 0 && E === d.default.getSearchIndex() ? setTimeout(() => {
            e(t, n, l)
          }, 1e3 * s.body.retry_after) : o.default.dispatch({
            type: "GUILD_DISCOVERY_SEARCH_FETCH_FAILURE",
            section: f.GuildDiscoverySections.SEARCH,
            categoryId: a,
            query: t
          })
        })
      } catch (e) {
        o.default.dispatch({
          type: "GUILD_DISCOVERY_SEARCH_FETCH_FAILURE",
          section: f.GuildDiscoverySections.SEARCH,
          categoryId: a,
          query: t
        })
      }
    }
  },
  getSearchResultsCount: function() {
    return g
  },
  fetchPopularGuildsForCategory: function() {
    return I
  },
  fetchFeaturedOrPopularGuilds: function() {
    return S
  },
  fetchGamesYouPlayGuilds: function() {
    return _
  },
  clearSearch: function() {
    return N
  },
  selectCategory: function() {
    return T
  }
}), n("424973"), n("222007");
var l = n("542455"),
  a = n("472086"),
  s = n.n(a),
  i = n("522632"),
  r = n("872717"),
  o = n("913144"),
  u = n("393414"),
  d = n("926787"),
  c = n("251013"),
  f = n("49111"),
  h = n("447621");
let C = window.GLOBAL_ENV.ALGOLIA_KEY,
  p = "production" === window.GLOBAL_ENV.PROJECT_ENV ? "prod_discoverable_guilds" : "staging" === window.GLOBAL_ENV.PROJECT_ENV ? "stg_discoverable_guilds" : "dev_discoverable_guilds",
  m = {
    "auto_removed:": !1,
    approximate_presence_count: "> 0",
    approximate_member_count: "> 0"
  };

function E() {
  if (null == C) return;
  let e = s("NKTZZ4AIZU", C, {
      responsesCache: (0, l.createNullCache)()
    }),
    t = e.initIndex(p);
  o.default.wait(() => o.default.dispatch({
    type: "GUILD_DISCOVERY_SEARCH_INIT",
    index: t
  }))
}

function g(e, t) {
  let n = d.default.getSearchIndex();
  if (null == n) return;
  let l = Object.assign({}, m, t),
    a = Object.keys(l),
    s = a.map(e => "".concat(e).concat(l[e]));
  try {
    let t = n.search(e, {
        filters: s.join(" AND "),
        facets: ["categories.id"]
      }),
      l = r.default.get({
        url: f.Endpoints.GUILD_DISCOVERY_VALID_TERM,
        query: {
          term: e
        },
        oldFormErrors: !0
      });
    Promise.all([t, l]).then(t => {
      let [{
        nbHits: n,
        facets: l
      }, {
        body: {
          valid: a
        }
      }] = t;
      o.default.dispatch({
        type: "GUILD_DISCOVERY_SEARCH_UPDATE_COUNTS",
        query: e,
        nbHits: a ? n : 0,
        facets: a ? l : void 0
      })
    })
  } catch (t) {
    o.default.dispatch({
      type: "GUILD_DISCOVERY_SEARCH_COUNTS_FAIL",
      query: e
    })
  }
}
async function I(e) {
  o.default.dispatch({
    type: "GUILD_DISCOVERY_POPULAR_FETCH_START",
    categoryId: e
  });
  try {
    let t = await r.default.get({
        url: f.Endpoints.GUILD_DISCOVERY,
        query: i.stringify({
          categories: [e]
        }),
        oldFormErrors: !0
      }),
      {
        guilds: n
      } = t.body;
    o.default.dispatch({
      type: "GUILD_DISCOVERY_POPULAR_FETCH_SUCCESS",
      categoryId: e,
      guilds: n
    })
  } catch (t) {
    o.default.dispatch({
      type: "GUILD_DISCOVERY_POPULAR_FETCH_FAILURE",
      categoryId: e
    })
  }
}
async function S(e, t) {
  o.default.dispatch({
    type: "GUILD_DISCOVERY_FETCH_START",
    section: f.GuildDiscoverySections.FEATURED
  });
  try {
    let n = await r.default.get({
      url: f.Endpoints.GUILD_DISCOVERY,
      query: i.stringify({
        offset: e,
        limit: t
      }),
      oldFormErrors: !0
    });
    A(n.body, f.GuildDiscoverySections.FEATURED)
  } catch (e) {
    o.default.dispatch({
      type: "GUILD_DISCOVERY_FETCH_FAILURE",
      section: f.GuildDiscoverySections.FEATURED
    })
  }
}
async function _() {
  let e = c.default.applicationStatistics,
    t = Object.keys(e);
  o.default.dispatch({
    type: "GUILD_DISCOVERY_FETCH_START",
    section: f.GuildDiscoverySections.GAMES_YOU_PLAY
  });
  try {
    let e = await r.default.get({
      url: f.Endpoints.GUILD_DISCOVERY,
      query: i.stringify({
        application_ids: t
      }),
      oldFormErrors: !0
    });
    A(e.body, f.GuildDiscoverySections.GAMES_YOU_PLAY)
  } catch (e) {
    o.default.dispatch({
      type: "GUILD_DISCOVERY_FETCH_FAILURE",
      section: f.GuildDiscoverySections.GAMES_YOU_PLAY
    })
  }
}

function N() {
  let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
  e && (0, u.transitionTo)(f.Routes.GUILD_DISCOVERY), o.default.dispatch({
    type: "GUILD_DISCOVERY_CLEAR_SEARCH"
  })
}

function T(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  o.default.dispatch({
    type: "GUILD_DISCOVERY_SELECT_CATEGORY",
    categoryId: e,
    isHomepage: t
  })
}

function A(e, t) {
  let {
    offset: n,
    limit: l,
    guilds: a,
    total: s
  } = e;
  o.default.dispatch({
    type: "GUILD_DISCOVERY_FETCH_SUCCESS",
    section: t,
    guilds: a,
    offset: n,
    limit: l,
    total: s
  })
}