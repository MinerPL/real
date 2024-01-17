"use strict";
n.r(t), n.d(t, {
  createAlgoliaIndex: function() {
    return g
  },
  doAlgoliaSearch: function() {
    return function e(t, n) {
      let l = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        {
          categoryId: a = C.DISCOVERY_ALL_CATEGORIES_ID,
          preferredLocale: s,
          offset: c,
          length: p,
          tag: m
        } = n,
        g = d.default.getSearchIndex();
      if (null == g) return;
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
        }), c = o.location.search, f = null != c && c.length > 0 && c.startsWith("?"), C = !f || c.startsWith("?") && c.split("?")[1] !== d;
        C && (0, u.transitionTo)(h.Routes.GUILD_DISCOVERY, {
          search: d
        })
      }({
        query: t,
        preferredLocale: s,
        offset: c,
        limit: p,
        categoryId: a,
        tag: m
      }), o.default.dispatch({
        type: "GUILD_DISCOVERY_SEARCH_FETCH_START",
        section: h.GuildDiscoverySections.SEARCH,
        query: t,
        categoryId: a
      });
      let I = Object.assign({}, E, n.filters),
        S = Object.keys(I),
        _ = S.map(e => "".concat(e).concat(I[e]));
      a !== C.DISCOVERY_ALL_CATEGORIES_ID && _.push("(primary_category_id=".concat(a, " OR categories.id=").concat(a, ")"));
      let N = _.join(" AND ");
      try {
        let i = g.search(t, {
            filters: N,
            optionalFilters: ["preferred_locale: ".concat(s)],
            length: p,
            offset: c,
            restrictSearchableAttributes: ["name", "description", "keywords", "categories.name", "categories.name_localizations.".concat(s), "primary_category.name", "primary_category.name_localizations.".concat(s), "vanity_url_code"]
          }),
          u = r.default.get({
            url: h.Endpoints.GUILD_DISCOVERY_VALID_TERM,
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
            section: h.GuildDiscoverySections.SEARCH,
            query: t,
            categoryId: a,
            guilds: s ? [...n.map(e => ({
              ...e,
              id: e.objectID
            }))] : [],
            offset: c,
            limit: p,
            total: s ? Math.min(l, C.MAX_ALGOLIA_PAGINATOR_RESULTS) : 0
          })
        }).catch(s => {
          s.body.retry_after > 0 && g === d.default.getSearchIndex() ? setTimeout(() => {
            e(t, n, l)
          }, s.body.retry_after * f.default.Millis.SECOND) : o.default.dispatch({
            type: "GUILD_DISCOVERY_SEARCH_FETCH_FAILURE",
            section: h.GuildDiscoverySections.SEARCH,
            categoryId: a,
            query: t
          })
        })
      } catch (e) {
        o.default.dispatch({
          type: "GUILD_DISCOVERY_SEARCH_FETCH_FAILURE",
          section: h.GuildDiscoverySections.SEARCH,
          categoryId: a,
          query: t
        })
      }
    }
  },
  getSearchResultsCount: function() {
    return I
  },
  fetchPopularGuildsForCategory: function() {
    return S
  },
  fetchFeaturedOrPopularGuilds: function() {
    return _
  },
  fetchGamesYouPlayGuilds: function() {
    return N
  },
  clearSearch: function() {
    return T
  },
  selectCategory: function() {
    return A
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
  f = n("718517"),
  h = n("49111"),
  C = n("447621");
let p = window.GLOBAL_ENV.ALGOLIA_KEY,
  m = "production" === window.GLOBAL_ENV.PROJECT_ENV ? "prod_discoverable_guilds" : "staging" === window.GLOBAL_ENV.PROJECT_ENV ? "stg_discoverable_guilds" : "dev_discoverable_guilds",
  E = {
    "auto_removed:": !1,
    approximate_presence_count: "> 0",
    approximate_member_count: "> 0"
  };

function g() {
  if (null == p) return;
  let e = s("NKTZZ4AIZU", p, {
      responsesCache: (0, l.createNullCache)()
    }),
    t = e.initIndex(m);
  o.default.wait(() => o.default.dispatch({
    type: "GUILD_DISCOVERY_SEARCH_INIT",
    index: t
  }))
}

function I(e, t) {
  let n = d.default.getSearchIndex();
  if (null == n) return;
  let l = Object.assign({}, E, t),
    a = Object.keys(l),
    s = a.map(e => "".concat(e).concat(l[e]));
  try {
    let t = n.search(e, {
        filters: s.join(" AND "),
        facets: ["categories.id"]
      }),
      l = r.default.get({
        url: h.Endpoints.GUILD_DISCOVERY_VALID_TERM,
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
async function S(e) {
  o.default.dispatch({
    type: "GUILD_DISCOVERY_POPULAR_FETCH_START",
    categoryId: e
  });
  try {
    let t = await r.default.get({
        url: h.Endpoints.GUILD_DISCOVERY,
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
async function _(e, t) {
  o.default.dispatch({
    type: "GUILD_DISCOVERY_FETCH_START",
    section: h.GuildDiscoverySections.FEATURED
  });
  try {
    let n = await r.default.get({
      url: h.Endpoints.GUILD_DISCOVERY,
      query: i.stringify({
        offset: e,
        limit: t
      }),
      oldFormErrors: !0
    });
    L(n.body, h.GuildDiscoverySections.FEATURED)
  } catch (e) {
    o.default.dispatch({
      type: "GUILD_DISCOVERY_FETCH_FAILURE",
      section: h.GuildDiscoverySections.FEATURED
    })
  }
}
async function N() {
  let e = c.default.applicationStatistics,
    t = Object.keys(e);
  o.default.dispatch({
    type: "GUILD_DISCOVERY_FETCH_START",
    section: h.GuildDiscoverySections.GAMES_YOU_PLAY
  });
  try {
    let e = await r.default.get({
      url: h.Endpoints.GUILD_DISCOVERY,
      query: i.stringify({
        application_ids: t
      }),
      oldFormErrors: !0
    });
    L(e.body, h.GuildDiscoverySections.GAMES_YOU_PLAY)
  } catch (e) {
    o.default.dispatch({
      type: "GUILD_DISCOVERY_FETCH_FAILURE",
      section: h.GuildDiscoverySections.GAMES_YOU_PLAY
    })
  }
}

function T() {
  let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
  e && (0, u.transitionTo)(h.Routes.GUILD_DISCOVERY), o.default.dispatch({
    type: "GUILD_DISCOVERY_CLEAR_SEARCH"
  })
}

function A(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  o.default.dispatch({
    type: "GUILD_DISCOVERY_SELECT_CATEGORY",
    categoryId: e,
    isHomepage: t
  })
}

function L(e, t) {
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