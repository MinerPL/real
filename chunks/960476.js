"use strict";
n.r(t), n.d(t, {
  trackSearchStart: function() {
    return R
  },
  trackSearchResultViewed: function() {
    return T
  },
  search: function() {
    return y
  },
  fetchSuggestions: function() {
    return v
  },
  resetSearch: function() {
    return A
  },
  trackSelectGIF: function() {
    return C
  },
  initializeSearch: function() {
    return M
  },
  fetchTrending: function() {
    return N
  },
  fetchTrendingGIFs: function() {
    return D
  },
  addFavoriteGIF: function() {
    return L
  },
  removeFavoriteGIF: function() {
    return O
  }
}), n("781738"), n("511434"), n("313619"), n("654714"), n("287168"), n("956660"), n("222007");
var r = n("917351"),
  l = n.n(r),
  a = n("748820"),
  i = n("872717"),
  u = n("713349"),
  s = n("913144"),
  c = n("716241"),
  o = n("787336"),
  d = n("915639"),
  I = n("872173"),
  f = n("510849"),
  _ = n("599110"),
  E = n("564703"),
  F = n("404118"),
  S = n("49111"),
  p = n("397336"),
  G = n("782340");
let h = /-/g;

function R(e) {
  let t = null != e ? {
    [e]: 1
  } : {};
  c.default.trackWithMetadata(S.AnalyticEvents.SEARCH_STARTED, {
    search_type: S.SearchTypes.GIF,
    load_id: f.default.getAnalyticsID(),
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
  }, a = (0, E.calculateAnalyticsMetadata)(f.default.getAnalyticsID(), t, {
    ...l,
    ...r,
    results: e
  }), i = null == n ? {} : {
    load_duration_ms: Date.now() - n
  };
  c.default.trackWithMetadata(S.AnalyticEvents.SEARCH_RESULT_VIEWED, {
    ...a,
    ...i
  })
}

function g(e, t, n) {
  let r = Date.now();
  R(t), i.default.get({
    url: S.Endpoints.GIFS_SEARCH,
    query: {
      q: e,
      media_format: f.default.getSelectedFormat(),
      provider: "tenor",
      locale: d.default.locale,
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
let m = l.debounce(g, 250);

function y(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    r = arguments.length > 3 ? arguments[3] : void 0;
  "" === e ? A() : (s.default.dispatch({
    type: "GIF_PICKER_QUERY",
    query: e
  }), n ? g(e, t, r) : m(e, t, r))
}

function v(e) {
  "" !== e && null != e && i.default.get({
    url: S.Endpoints.GIFS_SUGGEST,
    query: {
      q: e,
      provider: "tenor",
      limit: 5,
      locale: d.default.locale
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

function A() {
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
  } = e, d = (0, E.calculateAnalyticsMetadata)(f.default.getAnalyticsID(), t, {
    offset: r,
    limit: l,
    results: a,
    totalResults: u
  });
  c.default.trackWithMetadata(S.AnalyticEvents.SEARCH_RESULT_SELECTED, {
    ...d,
    index_num: n,
    source_object: "GIF Picker",
    query: s
  }), null != o && i.default.post({
    url: S.Endpoints.GIFS_SELECT,
    body: {
      id: o,
      q: s
    },
    oldFormErrors: !0
  })
}

function M() {
  let e = (0, a.v4)().replace(h, "");
  c.default.trackWithMetadata(S.AnalyticEvents.SEARCH_OPENED, {
    search_type: S.SearchTypes.GIF,
    load_id: e
  }), s.default.wait(() => {
    s.default.dispatch({
      type: "GIF_PICKER_INITIALIZE",
      analyticsID: e
    })
  })
}

function N() {
  i.default.get({
    url: S.Endpoints.GIFS_TRENDING,
    query: {
      provider: "tenor",
      locale: d.default.locale,
      media_format: f.default.getSelectedFormat()
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

function D(e) {
  let t = Date.now();
  R(S.GIFPickerResultTypes.TRENDING_GIFS), i.default.get({
    url: S.Endpoints.GIFS_TRENDING_GIFS,
    query: {
      media_format: f.default.getSelectedFormat(),
      provider: "tenor",
      locale: d.default.locale,
      limit: e
    },
    oldFormErrors: !0
  }).then(n => {
    let {
      body: r
    } = n;
    T(r, S.GIFPickerResultTypes.TRENDING_GIFS, {
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

function P(e) {
  let t = new URL(e);
  return (0, o.isAttachmentUrl)(t) ? (0, o.removeSignedUrlParameters)(t).toString() : e
}

function L(e) {
  I.FrecencyUserSettingsActionCreators.updateAsync("favoriteGifs", t => {
    var n;
    let r = null !== (n = l.max(Object.values(t.gifs).map(e => e.order))) && void 0 !== n ? n : 0;
    t.gifs[P(e.url)] = {
      ...e,
      order: r + 1
    };
    let a = u.FavoriteGIFs.toBinary(t).length;
    if (a > p.MAX_FAVORITE_GIFS_SIZE) return F.default.show({
      title: G.default.Messages.FAVORITES_LIMIT_REACHED_TITLE,
      body: G.default.Messages.FAVORITE_GIFS_LIMIT_REACHED_BODY
    }), !1;
    l.size(t.gifs) > 2 && (t.hideTooltip = !0)
  }, p.UserSettingsDelay.INFREQUENT_USER_ACTION), _.default.track(S.AnalyticEvents.GIF_FAVORITED)
}

function O(e) {
  I.FrecencyUserSettingsActionCreators.updateAsync("favoriteGifs", t => {
    e in t.gifs ? delete t.gifs[e] : delete t.gifs[P(e)]
  }, p.UserSettingsDelay.INFREQUENT_USER_ACTION), _.default.track(S.AnalyticEvents.GIF_UNFAVORITED)
}