"use strict";
n.r(t), n.d(t, {
  EMPTY_DISCOVERABLE_GUILDS_SECTION: function() {
    return _
  },
  default: function() {
    return y
  }
}), n("222007"), n("424973");
var i, r, s = n("627445"),
  a = n.n(s),
  o = n("917351"),
  l = n.n(o),
  u = n("446674");
n("233736");
var c = n("913144"),
  d = n("197231"),
  f = n("271938"),
  E = n("251013"),
  h = n("49111"),
  p = n("447621");
(r = i || (i = {})).UNSET = "unset", r.FETCHING = "fetching", r.FAILED = "failed", r.SUCCEEDED = "succeeded";
let _ = {
    guilds: [],
    total: 0,
    offset: 0,
    limit: 0,
    loading: !1,
    isFirstLoad: !0
  },
  S = {
    [h.GuildDiscoverySections.FEATURED]: {
      ..._
    },
    [h.GuildDiscoverySections.GAMES_YOU_PLAY]: {
      ..._
    },
    [h.GuildDiscoverySections.MISC]: {
      ..._
    },
    [h.GuildDiscoverySections.SEARCH]: {},
    [p.DISCOVERY_ALL_CATEGORIES_ID]: {
      ..._
    }
  },
  m = "",
  T = !1,
  g = "unset",
  I = null,
  C = p.DISCOVERY_ALL_CATEGORIES_ID,
  v = p.DISCOVERY_ALL_CATEGORIES_ID,
  A = null,
  R = [],
  N = (0, d.makeAnalyticsID)();

function O(e) {
  return {
    id: e.id,
    name: e.name,
    description: e.description,
    splash: e.splash,
    banner: e.banner,
    icon: e.icon,
    features: new Set(e.features),
    presenceCount: e.approximate_presence_count,
    memberCount: e.approximate_member_count,
    premiumSubscriptionCount: e.premium_subscription_count,
    preferredLocale: e.preferred_locale,
    discoverySplash: e.discovery_splash,
    emojis: e.emojis,
    emojiCount: e.emoji_count,
    keywords: e.keywords
  }
}
class D extends u.default.Store {
  initialize() {
    this.waitFor(f.default)
  }
  isFetching() {
    return T || null == I || null == E.default.lastFetched
  }
  isFetchingSearch() {
    return "fetching" === g
  }
  hasSearchError() {
    return "failed" === g
  }
  getDiscoverableGuilds() {
    return S
  }
  getCurrentCategoryId() {
    return C
  }
  getCurrentHomepageCategoryId() {
    return v
  }
  getSearchIndex() {
    return A
  }
  getMostRecentQuery() {
    return m
  }
  getTopCategoryCounts(e) {
    var t;
    return null === (t = S[h.GuildDiscoverySections.SEARCH][e]) || void 0 === t ? void 0 : t.resultCounts
  }
  getSeenGuildIds() {
    return R
  }
  getLoadId() {
    return N
  }
}
D.displayName = "GuildDiscoveryStore";
var y = new D(c.default, {
  GUILD_DISCOVERY_SEARCH_INIT: function(e) {
    let {
      index: t
    } = e;
    A = t
  },
  GUILD_DISCOVERY_FETCH_START: function(e) {
    let {
      section: t
    } = e;
    T = !0, S = {
      ...S,
      [t]: {
        ...S[t],
        loading: !0
      }
    }
  },
  GUILD_DISCOVERY_FETCH_SUCCESS: function(e) {
    let {
      guilds: t,
      section: n,
      total: i,
      offset: r,
      limit: s
    } = e;
    T = !1, I = Date.now(), N = (0, d.makeAnalyticsID)();
    let a = l.map(t, O);
    S = {
      ...S,
      [n]: {
        guilds: a,
        offset: r,
        limit: s,
        total: i,
        loading: !1,
        isFirstLoad: !1
      }
    }
  },
  GUILD_DISCOVERY_FETCH_FAILURE: function(e) {
    let {
      section: t
    } = e;
    T = !1, S = {
      ...S,
      [t]: {
        ..._,
        loading: !1
      }
    }
  },
  GUILD_DISCOVERY_POPULAR_FETCH_START: function(e) {
    let {
      categoryId: t
    } = e;
    T = !0, S = {
      ...S,
      [t]: {
        ..._,
        ...S[t],
        loading: !0
      }
    }
  },
  GUILD_DISCOVERY_POPULAR_FETCH_SUCCESS: function(e) {
    let {
      categoryId: t,
      guilds: n
    } = e;
    T = !1, I = Date.now();
    let i = l.map(n, O);
    S = {
      ...S,
      [t]: {
        ..._,
        guilds: i,
        loading: !1,
        isFirstLoad: !1
      }
    }
  },
  GUILD_DISCOVERY_POPULAR_FETCH_FAILURE: function(e) {
    let {
      categoryId: t
    } = e;
    T = !1, S = {
      ...S,
      [t]: {
        ..._,
        loading: !1
      }
    }
  },
  GUILD_DISCOVERY_SEARCH_FETCH_START: function(e) {
    var t;
    let {
      section: n,
      query: i,
      categoryId: r
    } = e;
    a("search" === n, "This action only supports search it seems"), g = "fetching", S = {
      ...S,
      [n]: {
        ...S[n],
        [i]: {
          ...S[n][i],
          [r]: {
            ...null === (t = S[n][i]) || void 0 === t ? void 0 : t[r],
            loading: !0
          }
        }
      }
    }, m = i
  },
  GUILD_DISCOVERY_SEARCH_FETCH_SUCCESS: function(e) {
    var t;
    let {
      section: n,
      guilds: i,
      total: r,
      offset: s,
      limit: o,
      query: l,
      categoryId: u
    } = e;
    a("search" === n, "This action only supports search it seems");
    let c = i.map(O);
    S = {
      ...S,
      [n]: {
        ...S[n],
        [l]: {
          ...S[n][l],
          [u]: {
            ...null === (t = S[n][l]) || void 0 === t ? void 0 : t[u],
            guilds: c,
            total: r,
            offset: s,
            limit: o,
            loading: !1
          }
        }
      }
    }, m = l, g = "succeeded"
  },
  GUILD_DISCOVERY_SEARCH_FETCH_FAILURE: function(e) {
    var t;
    let {
      section: n,
      query: i,
      categoryId: r
    } = e;
    a("search" === n, "This action only supports search it seems"), g = "failed", S = {
      ...S,
      [n]: {
        ...S[n],
        [i]: {
          ...S[n][i],
          [r]: {
            ...null === (t = S[n][i]) || void 0 === t ? void 0 : t[r],
            loading: !1
          }
        }
      }
    }
  },
  GUILD_DISCOVERY_SELECT_CATEGORY: function(e) {
    let {
      categoryId: t,
      isHomepage: n
    } = e;
    C = t, n && (v = t)
  },
  GUILD_DISCOVERY_CLEAR_SEARCH: function() {
    m = ""
  },
  GUILD_DISCOVERY_SEARCH_UPDATE_COUNTS: function(e) {
    let {
      nbHits: t,
      facets: n,
      query: i
    } = e, r = [];
    if (null != n) {
      var s;
      let e = null !== (s = n["categories.id"]) && void 0 !== s ? s : {};
      delete e[p.DEFAULT_DISCOVERY_CATEGORY_ID], r = Object.entries(e).map(e => {
        let [t, n] = e;
        return [parseInt(t, 10), n]
      }).sort((e, t) => t[1] - e[1]).slice(0, 7)
    }
    S = {
      ...S,
      [h.GuildDiscoverySections.SEARCH]: {
        ...S[h.GuildDiscoverySections.SEARCH],
        [i]: {
          ...S[h.GuildDiscoverySections.SEARCH][i],
          resultCounts: [
            [p.DISCOVERY_ALL_CATEGORIES_ID, Math.min(p.MAX_ALGOLIA_PAGINATOR_RESULTS, t)], ...r
          ]
        }
      }
    }
  },
  GUILD_DISCOVERY_SEARCH_COUNTS_FAIL: function(e) {
    let {
      query: t
    } = e;
    S = {
      ...S,
      [h.GuildDiscoverySections.SEARCH]: {
        ...S[h.GuildDiscoverySections.SEARCH],
        [t]: {
          ...S[h.GuildDiscoverySections.SEARCH][t],
          resultCounts: null
        }
      }
    }
  },
  GUILD_DISCOVERY_GUILD_SEEN: function(e) {
    let {
      guildId: t
    } = e;
    !R.includes(t) && R.push(t)
  },
  GUILD_DISCOVERY_CLEAR_SEEN_GUILDS: function() {
    R = []
  }
})