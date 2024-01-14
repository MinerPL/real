"use strict";
n.r(t), n.d(t, {
  trackSearchStart: function() {
    return h
  },
  trackSearchResultViewed: function() {
    return T
  },
  search: function() {
    return m
  },
  fetchSuggestions: function() {
    return y
  },
  resetSearch: function() {
    return v
  },
  trackSelectGIF: function() {
    return C
  },
  initializeSearch: function() {
    return A
  },
  fetchTrending: function() {
    return M
  },
  fetchTrendingGIFs: function() {
    return N
  },
  addFavoriteGIF: function() {
    return D
  },
  removeFavoriteGIF: function() {
    return P
  }
}), n("781738");
var r = n("917351"),
  l = n.n(r),
  a = n("748820"),
  i = n("872717"),
  u = n("713349"),
  s = n("913144"),
  c = n("716241"),
  o = n("915639"),
  d = n("872173"),
  I = n("510849"),
  f = n("599110"),
  _ = n("564703"),
  E = n("404118"),
  F = n("49111"),
  S = n("397336"),
  p = n("782340");
let G = /-/g;

function h(e) {
  let t = null != e ? {
    [e]: 1
  } : {};
  c.default.trackWithMetadata(F.AnalyticEvents.SEARCH_STARTED, {
    search_type: F.SearchTypes.GIF,
    load_id: I.default.getAnalyticsID(),
    num_modifiers: Object.keys(t).length,
    modifiers: t
  })
}

function T(e, t) {
  let {
    startTime: n,
    ...r
  } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, l = {
    offset: 0,
    limit: null,
    totalResults: e.length
  }, a = (0, _.calculateAnalyticsMetadata)(I.default.getAnalyticsID(), t, {
    ...l,
    ...r,
    results: e
  }), i = null == n ? {} : {
    load_duration_ms: Date.now() - n
  };
  c.default.trackWithMetadata(F.AnalyticEvents.SEARCH_RESULT_VIEWED, {
    ...a,
    ...i
  })
}

function R(e, t, n) {
  let r = Date.now();
  h(t), i.default.get({
    url: F.Endpoints.GIFS_SEARCH,
    query: {
      q: e,
      media_format: I.default.getSelectedFormat(),
      provider: "tenor",
      locale: o.default.locale,
      limit: n
    },
    oldFormErrors: !0
  }).then(l => {
    let a = l.body;
    T(a, t, {
      startTime: r,
      limit: n
    }), s.default.dispatch({
      type: "GIF_PICKER_QUERY_SUCCESS",
      query: e,
      items: a
    })
  }, () => s.default.dispatch({
    type: "GIF_PICKER_QUERY_FAILURE",
    query: e
  }))
}
let g = l.debounce(R, 250);

function m(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    r = arguments.length > 3 ? arguments[3] : void 0;
  "" === e ? v() : (s.default.dispatch({
    type: "GIF_PICKER_QUERY",
    query: e
  }), n ? R(e, t, r) : g(e, t, r))
}

function y(e) {
  "" !== e && null != e && i.default.get({
    url: F.Endpoints.GIFS_SUGGEST,
    query: {
      q: e,
      provider: "tenor",
      limit: 5,
      locale: o.default.locale
    },
    oldFormErrors: !0
  }).then(t => {
    let n = t.body;
    s.default.dispatch({
      type: "GIF_PICKER_SUGGESTIONS_SUCCESS",
      query: e,
      items: n
    })
  })
}

function v() {
  s.default.dispatch({
    type: "GIF_PICKER_QUERY",
    query: ""
  })
}

function C(e) {
  let {
    type: t,
    index: n,
    offset: r,
    limit: l,
    results: a,
    totalResults: u,
    query: s,
    gifId: o
  } = e, d = (0, _.calculateAnalyticsMetadata)(I.default.getAnalyticsID(), t, {
    offset: r,
    limit: l,
    results: a,
    totalResults: u
  });
  c.default.trackWithMetadata(F.AnalyticEvents.SEARCH_RESULT_SELECTED, {
    ...d,
    index_num: n,
    source_object: "GIF Picker",
    query: s
  }), null != o && i.default.post({
    url: F.Endpoints.GIFS_SELECT,
    body: {
      id: o,
      q: s
    },
    oldFormErrors: !0
  })
}

function A() {
  let e = (0, a.v4)().replace(G, "");
  c.default.trackWithMetadata(F.AnalyticEvents.SEARCH_OPENED, {
    search_type: F.SearchTypes.GIF,
    load_id: e
  }), s.default.wait(() => {
    s.default.dispatch({
      type: "GIF_PICKER_INITIALIZE",
      analyticsID: e
    })
  })
}

function M() {
  i.default.get({
    url: F.Endpoints.GIFS_TRENDING,
    query: {
      provider: "tenor",
      locale: o.default.locale,
      media_format: I.default.getSelectedFormat()
    },
    oldFormErrors: !0
  }).then(e => {
    let {
      body: t
    } = e, {
      categories: n,
      gifs: r
    } = t;
    s.default.dispatch({
      type: "GIF_PICKER_TRENDING_FETCH_SUCCESS",
      trendingCategories: n,
      trendingGIFPreview: r[0]
    })
  })
}

function N(e) {
  let t = Date.now();
  h(F.GIFPickerResultTypes.TRENDING_GIFS), i.default.get({
    url: F.Endpoints.GIFS_TRENDING_GIFS,
    query: {
      media_format: I.default.getSelectedFormat(),
      provider: "tenor",
      locale: o.default.locale,
      limit: e
    },
    oldFormErrors: !0
  }).then(n => {
    let {
      body: r
    } = n;
    T(r, F.GIFPickerResultTypes.TRENDING_GIFS, {
      startTime: t,
      limit: e
    }), s.default.dispatch({
      type: "GIF_PICKER_QUERY_SUCCESS",
      items: r
    })
  }, () => {
    s.default.dispatch({
      type: "GIF_PICKER_QUERY_FAILURE"
    })
  })
}

function D(e) {
  d.FrecencyUserSettingsActionCreators.updateAsync("favoriteGifs", t => {
    var n;
    let r = null !== (n = l.max(Object.values(t.gifs).map(e => e.order))) && void 0 !== n ? n : 0;
    t.gifs[e.url] = {
      ...e,
      order: r + 1
    };
    let a = u.FavoriteGIFs.toBinary(t).length;
    if (a > S.MAX_FAVORITE_GIFS_SIZE) return E.default.show({
      title: p.default.Messages.FAVORITES_LIMIT_REACHED_TITLE,
      body: p.default.Messages.FAVORITE_GIFS_LIMIT_REACHED_BODY
    }), !1;
    l.size(t.gifs) > 2 && (t.hideTooltip = !0)
  }, S.UserSettingsDelay.INFREQUENT_USER_ACTION), f.default.track(F.AnalyticEvents.GIF_FAVORITED)
}

function P(e) {
  d.FrecencyUserSettingsActionCreators.updateAsync("favoriteGifs", t => {
    delete t.gifs[e]
  }, S.UserSettingsDelay.INFREQUENT_USER_ACTION), f.default.track(F.AnalyticEvents.GIF_UNFAVORITED)
}