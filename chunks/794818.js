"use strict";
n.r(t), n.d(t, {
  AnalyticsContexts: function() {
    return l
  },
  MINIMUM_MEMBER_COUNT: function() {
    return g
  },
  startLurking: function() {
    return _
  },
  viewGuild: function() {
    return S
  },
  makeDiscoverableGuild: function() {
    return v
  },
  trackDiscoveryViewed: function() {
    return R
  },
  trackDiscoveryExited: function() {
    return m
  },
  trackSearchClosed: function() {
    return C
  },
  trackSearchStarted: function() {
    return N
  },
  trackTagSearchStarted: function() {
    return T
  },
  trackSearchResultsViewed: function() {
    return p
  },
  trackGuildJoinClicked: function() {
    return I
  },
  getDiscoverableGuild: function() {
    return x
  }
}), n("222007");
var l, a, r = n("522632"),
  s = n("872717"),
  i = n("851387"),
  u = n("267567"),
  o = n("393414"),
  c = n("239380"),
  d = n("525065"),
  f = n("305961"),
  E = n("599110"),
  h = n("49111");
(a = l || (l = {})).SEARCH = "Search", a.RECOMMENDED = "Recommended", a.POPULAR = "Popular", a.RECOMMENDED_E3 = "Recommended - E3", a.HEADER = "Header";
let g = ">200";
async function _(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
    {
      channelId: l,
      onSuccess: a,
      joinSource: r,
      loadId: s,
      setsHistorySnapshot: d = !0
    } = n,
    E = (0, o.getHistory)();
  d && u.default.setHistorySnapshot({
    ...E
  });
  let h = f.default.getGuild(e),
    g = {
      state: {
        analyticsSource: t
      }
    };
  null != h && null != h.joinedAt ? (0, c.transitionToGuild)(e, g) : (await i.default.joinGuild(e, {
    lurker: !0,
    source: r,
    loadId: s,
    lurkLocation: null == t ? void 0 : t.page
  }), await i.default.transitionToGuildSync(e, {
    ...g,
    welcomeModalChannelId: l,
    search: E.location.search
  }, l)), null == a || a()
}
async function S(e) {
  let t, {
    loadId: n,
    guildId: a,
    index: r,
    analyticsContext: s,
    categoryId: i
  } = e;
  "string" == typeof s && s in l && (t = s);
  let u = {
    page: h.AnalyticsPages.GUILD_DISCOVERY,
    object: h.AnalyticsObjects.CARD,
    section: t
  };
  await _(a, u, {
      loadId: n
    }),
    function(e) {
      let {
        loadId: t,
        guildId: n,
        index: l,
        analyticsContext: a,
        categoryId: r
      } = e, s = {
        page: h.AnalyticsPages.GUILD_DISCOVERY,
        section: a
      };
      "string" != typeof a && null != a.location && (s = a.location), E.default.track(h.AnalyticEvents.GUILD_DISCOVERY_GUILD_SELECTED, {
        location: s,
        guild_id: n,
        load_id: t,
        card_index: l,
        location_object: h.AnalyticsObjects.CARD,
        category_id: r
      })
    }({
      loadId: n,
      guildId: a,
      index: r,
      analyticsContext: s,
      categoryId: i
    })
}

function v(e) {
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
    stickers: e.stickers,
    stickerCount: e.sticker_count,
    keywords: e.keywords
  }
}

function R(e) {
  let {
    loadId: t,
    gamesYouPlayGuilds: n,
    allGuilds: l,
    categoryId: a,
    recommendationsSource: r = null
  } = e, s = n.length, i = l.length;
  E.default.track(h.AnalyticEvents.GUILD_DISCOVERY_VIEWED, {
    load_id: t,
    num_guilds: s + i,
    num_guilds_recommended: s,
    num_guilds_popular: i,
    recommended_guild_ids: n.map(e => e.id),
    category_id: a,
    recommendations_source: r
  })
}

function m(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
  E.default.track(h.AnalyticEvents.GUILD_DISCOVERY_EXITED, {
    load_id: e,
    guild_ids_viewed: t,
    recommendations_source: n
  })
}

function C(e) {
  E.default.track(h.AnalyticEvents.SEARCH_CLOSED, {
    load_id: e
  })
}

function N(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
  E.default.track(h.AnalyticEvents.SEARCH_STARTED, {
    search_type: h.SearchTypes.GUILD_DISCOVERY,
    load_id: e,
    location: n.location,
    category_id: t
  })
}

function T(e, t, n, l) {
  E.default.track(h.AnalyticEvents.SEARCH_STARTED, {
    search_type: h.SearchTypes.GUILD_DISCOVERY_TAG,
    load_id: e,
    location: {
      page: h.AnalyticsPages.GUILD_DISCOVERY,
      section: n
    },
    category_id: t,
    guild_id: l
  })
}

function p(e) {
  let {
    loadId: t,
    searchId: n,
    query: l,
    guildResults: a,
    analyticsContext: r,
    categoryId: s,
    isTagSearch: i
  } = e;
  E.default.track(h.AnalyticEvents.SEARCH_RESULT_VIEWED, {
    search_type: i ? h.SearchTypes.GUILD_DISCOVERY_TAG : h.SearchTypes.GUILD_DISCOVERY,
    load_id: t,
    search_id: n,
    total_results: void 0 !== a ? a.length : null,
    guild_ids: void 0 !== a ? a.map(e => e.id) : null,
    query: l,
    location: r.location,
    category_id: s
  })
}

function I(e) {
  let t = u.default.getLoadId(e);
  E.default.track(h.AnalyticEvents.GUILD_DISCOVERY_GUILD_JOIN_CLICKED, {
    guild_id: e,
    load_id: t,
    guild_size: d.default.getMemberCount(e)
  })
}
async function x(e) {
  try {
    var t, n;
    let l = await s.default.get({
        url: h.Endpoints.GUILD_DISCOVERY,
        query: r.stringify({
          guild_ids: e
        }),
        oldFormErrors: !0
      }),
      a = null === (n = l.body) || void 0 === n ? void 0 : null === (t = n.guilds) || void 0 === t ? void 0 : t[0];
    if (null == a) return a;
    return v(a)
  } catch (e) {
    return null
  }
}