"use strict";
n.r(t), n.d(t, {
  search: function() {
    return o
  },
  searchByMode: function() {
    return u
  },
  searchNextPage: function() {
    return d
  },
  searchPreviousPage: function() {
    return c
  },
  changePage: function() {
    return f
  },
  clearHistory: function() {
    return m
  },
  setSearchState: function() {
    return p
  },
  clearSearchState: function() {
    return S
  },
  updateAutocompleteQuery: function() {
    return g
  },
  setShowBlockedResults: function() {
    return N
  }
}), n("808653");
var a = n("913144"),
  l = n("716241"),
  s = n("744983"),
  i = n("751520"),
  r = n("49111");

function o(e, t, n) {
  (0, i.setIncludeNSFW)(t, e);
  let o = Object.keys(t);
  l.default.trackWithMetadata(r.AnalyticEvents.SEARCH_STARTED, {
    search_type: s.default.getSearchType(),
    prev_search_id: s.default.getAnalyticsId(e),
    num_modifiers: o.length,
    modifiers: o.reduce((e, n) => {
      let a = t[n];
      return e[n] = Array.isArray(a) ? a.length : 1, e
    }, {})
  }), a.default.dispatch({
    type: "SEARCH_START",
    query: t,
    searchId: e,
    queryString: n
  })
}

function u(e, t) {
  let n = s.default.getQuery(e),
    a = function(e) {
      switch (e) {
        case r.SearchModes.MOST_RELEVANT:
          return {
            sort_by: "relevance", sort_order: "desc"
          };
        case r.SearchModes.OLDEST:
          return {
            sort_by: "timestamp", sort_order: "asc"
          };
        case r.SearchModes.NEWEST:
        default:
          return {
            sort_by: "timestamp", sort_order: "desc"
          }
      }
    }(t);
  return o(e, {
    ...n,
    ...a,
    offset: 0
  })
}

function d(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.SEARCH_PAGE_SIZE;
  return h(e, t)
}

function c(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.SEARCH_PAGE_SIZE;
  return h(e, -t)
}

function f(e, t) {
  return E(e, t * r.SEARCH_PAGE_SIZE)
}

function h(e, t) {
  let n = s.default.getOffset(e);
  return E(e, n + t)
}

function E(e, t) {
  let n = s.default.getQuery(e),
    a = s.default.getTotalResults(e);
  if (!(t < 0) && !(t > a)) return o(e, {
    ...n,
    offset: t
  })
}

function m(e) {
  a.default.dispatch({
    type: "SEARCH_CLEAR_HISTORY",
    searchId: e
  })
}

function p(e, t) {
  null != e && a.default.dispatch({
    type: "SEARCH_EDITOR_STATE_CHANGE",
    searchId: e,
    editorState: t
  })
}

function S(e) {
  l.default.trackWithMetadata(r.AnalyticEvents.SEARCH_CLOSED, {
    search_id: s.default.getAnalyticsId(e)
  }), a.default.wait(() => a.default.dispatch({
    type: "SEARCH_EDITOR_STATE_CLEAR",
    searchId: e
  }))
}

function g(e, t, n) {
  null != e && a.default.dispatch({
    type: "SEARCH_AUTOCOMPLETE_QUERY_UPDATE",
    searchId: e,
    tokens: t,
    cursorScope: n
  })
}

function N(e, t) {
  a.default.dispatch({
    type: "SEARCH_SET_SHOW_BLOCKED_RESULTS",
    searchId: e,
    showBlocked: t
  })
}