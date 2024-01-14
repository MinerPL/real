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
    return _
  },
  setSearchState: function() {
    return S
  },
  clearSearchState: function() {
    return T
  },
  updateAutocompleteQuery: function() {
    return p
  },
  setShowBlockedResults: function() {
    return N
  }
}), n("808653");
var l = n("913144"),
  a = n("716241"),
  s = n("744983"),
  i = n("751520"),
  r = n("49111");

function o(e, t, n) {
  (0, i.setIncludeNSFW)(t, e);
  let o = Object.keys(t);
  a.default.trackWithMetadata(r.AnalyticEvents.SEARCH_STARTED, {
    search_type: s.default.getSearchType(),
    prev_search_id: s.default.getAnalyticsId(e),
    num_modifiers: o.length,
    modifiers: o.reduce((e, n) => {
      let l = t[n];
      return e[n] = Array.isArray(l) ? l.length : 1, e
    }, {})
  }), l.default.dispatch({
    type: "SEARCH_START",
    query: t,
    searchId: e,
    queryString: n
  })
}

function u(e, t) {
  let n = s.default.getQuery(e),
    l = function(e) {
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
    ...l,
    offset: 0
  })
}

function d(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.SEARCH_PAGE_SIZE;
  return E(e, t)
}

function c(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.SEARCH_PAGE_SIZE;
  return E(e, -t)
}

function f(e, t) {
  return h(e, t * r.SEARCH_PAGE_SIZE)
}

function E(e, t) {
  let n = s.default.getOffset(e);
  return h(e, n + t)
}

function h(e, t) {
  let n = s.default.getQuery(e),
    l = s.default.getTotalResults(e);
  if (!(t < 0) && !(t > l)) return o(e, {
    ...n,
    offset: t
  })
}

function _(e) {
  l.default.dispatch({
    type: "SEARCH_CLEAR_HISTORY",
    searchId: e
  })
}

function S(e, t) {
  null != e && l.default.dispatch({
    type: "SEARCH_EDITOR_STATE_CHANGE",
    searchId: e,
    editorState: t
  })
}

function T(e) {
  a.default.trackWithMetadata(r.AnalyticEvents.SEARCH_CLOSED, {
    search_id: s.default.getAnalyticsId(e)
  }), l.default.wait(() => l.default.dispatch({
    type: "SEARCH_EDITOR_STATE_CLEAR",
    searchId: e
  }))
}

function p(e, t, n) {
  null != e && l.default.dispatch({
    type: "SEARCH_AUTOCOMPLETE_QUERY_UPDATE",
    searchId: e,
    tokens: t,
    cursorScope: n
  })
}

function N(e, t) {
  l.default.dispatch({
    type: "SEARCH_SET_SHOW_BLOCKED_RESULTS",
    searchId: e,
    showBlocked: t
  })
}