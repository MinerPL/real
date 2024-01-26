"use strict";
let i;
n.r(t), n.d(t, {
  default: function() {
    return R
  }
}), n("843762");
var s = n("917351"),
  r = n.n(s),
  a = n("446674"),
  o = n("95410"),
  l = n("913144"),
  u = n("390933"),
  d = n("25932"),
  c = n("42203"),
  f = n("305961"),
  _ = n("49111");
let h = {},
  g = !1;

function m(e) {
  return null == h[e] && (h[e] = {
    searchId: e,
    searchType: E(e),
    isIndexing: !1,
    isHistoricalIndexing: !1,
    isSearching: !1,
    analyticsId: null,
    editorState: null,
    offset: 0,
    query: null,
    hasError: !1,
    searchFetcher: null,
    rawResults: null,
    totalResults: 0,
    documentsIndexed: 0,
    resultsBlocked: 0,
    showBlockedResults: !1,
    showNoResultsAlt: !1
  }), h[e]
}

function E(e) {
  return e === _.SearchTypes.DMS ? _.SearchTypes.DMS : e === _.FAVORITES ? _.SearchTypes.FAVORITES : null != f.default.getGuild(e) ? _.SearchTypes.GUILD : null != c.default.getChannel(e) ? _.SearchTypes.CHANNEL : null
}

function p(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
  if (null == e) return n;
  let i = h[e];
  return null == i ? n : t(i)
}
let v = "SearchStore",
  S = !1,
  T = {},
  I = null;

function C(e) {
  var t;
  let {
    searchId: n,
    query: i
  } = e;
  if ("string" != typeof i || "" === (i = i.trim())) return;
  let s = T[n] = null !== (t = T[n]) && void 0 !== t ? t : [],
    r = s.indexOf(i); - 1 !== r ? (s.splice(r, 1), s.unshift(i)) : null != s[0] && "" !== s[0] && i.startsWith(s[0]) ? s[0] = i : r < 0 && s.unshift(i), s.length > 5 && s.splice(5, s.length), o.default.set(v, {
    history: T
  })
}

function A(e) {
  let {
    searchId: t
  } = e, n = h[t];
  if (null == n) return !1;
  null != n.searchFetcher && n.searchFetcher.cancel(), delete h[t]
}

function y(e) {
  if (e === I) return !1;
  null != e && null == h[e] && m(e), I = e
}
class N extends a.default.Store {
  initialize() {
    this.waitFor(f.default, c.default);
    let e = o.default.get(v);
    if ((null == e ? void 0 : e.history) != null) {
      var t;
      Object.keys(t = e.history).forEach(e => {
        Array.isArray(t[e]) && (t[e] = t[e].filter(e => "string" == typeof e && e.trim())), (!Array.isArray(t[e]) || 0 === t[e].length) && delete t[e]
      }), T = t
    }
    S = !!o.default.get("tokenized")
  }
  isOpen() {
    return g
  }
  getCurrentSearchModalType() {
    return i
  }
  getCurrentSearchId() {
    return I
  }
  isActive() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : I;
    return null != e && (this.isIndexing(e) || this.isSearching(e) || this.hasResults(e))
  }
  isTokenized() {
    return S
  }
  getSearchType(e) {
    return p(null != e ? e : I, e => e.searchType)
  }
  getRawResults(e) {
    return p(e, e => e.rawResults)
  }
  hasResults(e) {
    return null != p(e, e => e.rawResults)
  }
  isIndexing(e) {
    return p(e, e => e.isIndexing) || !1
  }
  isHistoricalIndexing(e) {
    return p(e, e => e.isHistoricalIndexing) || !1
  }
  isSearching(e) {
    return p(e, e => e.isSearching) || !1
  }
  getAnalyticsId(e) {
    return p(e, e => e.analyticsId)
  }
  getResultsBlocked(e) {
    return p(e, e => e.resultsBlocked)
  }
  getDocumentsIndexedCount(e) {
    return p(e, e => e.documentsIndexed)
  }
  getSearchFetcher(e) {
    return p(e, e => e.searchFetcher)
  }
  getTotalResults(e) {
    var t;
    return null !== (t = p(e, e => e.totalResults)) && void 0 !== t ? t : 0
  }
  getEditorState(e) {
    return p(e, e => e.editorState)
  }
  getHistory(e) {
    return T[e]
  }
  getOffset(e) {
    var t;
    return null !== (t = p(e, e => e.offset)) && void 0 !== t ? t : 0
  }
  getQuery(e) {
    return p(e, e => e.query)
  }
  hasError(e) {
    var t;
    return null !== (t = p(e, e => e.hasError)) && void 0 !== t && t
  }
  shouldShowBlockedResults(e) {
    var t;
    return null !== (t = p(e, e => e.showBlockedResults, !1)) && void 0 !== t && t
  }
  shouldShowNoResultsAlt(e) {
    var t;
    return null !== (t = p(e, e => e.showNoResultsAlt, !1)) && void 0 !== t && t
  }
  getResultsState(e) {
    return {
      isSearching: this.isSearching(e),
      isIndexing: this.isIndexing(e),
      isHistoricalIndexing: this.isHistoricalIndexing(e),
      documentsIndexed: this.getDocumentsIndexedCount(e),
      offset: this.getOffset(e),
      totalResults: this.getTotalResults(e),
      hasError: this.hasError(e),
      showBlockedResults: this.shouldShowBlockedResults(e),
      showNoResultsAlt: this.shouldShowNoResultsAlt(e)
    }
  }
}
N.displayName = "SearchStore";
var R = new N(l.default, {
  SEARCH_START: function(e) {
    var t, n;
    let {
      queryString: i,
      searchId: s,
      query: a
    } = e, o = m(s);
    null != o.searchFetcher && (o.searchFetcher.cancel(), o.searchFetcher = null);
    let f = o.searchType,
      h = new u.default(s, f, a);
    o.searchFetcher = h, o.isSearching = !0, o.rawResults = null, o.analyticsId = null, o.query = r.omit(a, "type"), o.offset = null !== (n = a.offset) && void 0 !== n ? n : 0, o.showBlockedResults = !1, C({
      type: "SEARCH_ADD_HISTORY",
      searchId: s,
      query: i
    });
    let g = s === _.FAVORITES ? null === (t = c.default.getChannel(s)) || void 0 === t ? void 0 : t.guild_id : f === _.SearchTypes.GUILD ? s : null;
    h.fetch(e => {
      var t, n;
      l.default.dispatch({
        type: "SEARCH_FINISH",
        searchId: s,
        guildId: g,
        analyticsId: e.body.analytics_id,
        totalResults: e.body.total_results,
        messages: e.body.messages,
        threads: null !== (t = e.body.threads) && void 0 !== t ? t : [],
        members: (null !== (n = e.body.members) && void 0 !== n ? n : []).map(e => (0, d.default)(e)),
        hasError: !1,
        doingHistoricalIndex: e.body.doing_deep_historical_index,
        documentsIndexed: e.body.documents_indexed
      })
    }, () => {
      l.default.dispatch({
        type: "SEARCH_INDEXING",
        searchId: s
      })
    }, () => {
      l.default.dispatch({
        type: "SEARCH_FINISH",
        searchId: s,
        guildId: g,
        messages: [],
        threads: [],
        members: [],
        totalResults: 0,
        analyticsId: null,
        hasError: !0,
        doingHistoricalIndex: !1,
        documentsIndexed: 0
      })
    })
  },
  SEARCH_INDEXING: function(e) {
    let {
      searchId: t
    } = e, n = m(t);
    n.isIndexing = !0, n.isHistoricalIndexing = !0, n.isSearching = !1
  },
  SEARCH_FINISH: function(e) {
    let {
      searchId: t
    } = e, n = m(t);
    n.isSearching = !1, n.isIndexing = !1, n.isHistoricalIndexing = e.doingHistoricalIndex || !1, n.searchFetcher = null, n.totalResults = e.totalResults, n.hasError = e.hasError, n.analyticsId = e.analyticsId, n.documentsIndexed = null != e.documentsIndexed ? e.documentsIndexed : 0, n.showNoResultsAlt = .05 > Math.random(), n.rawResults = e.messages;
    let i = n.query;
    null == i && (n.hasError = !0)
  },
  SEARCH_EDITOR_STATE_CLEAR: A,
  SEARCH_ENSURE_SEARCH_STATE: function(e) {
    let {
      searchId: t
    } = e;
    null != t && m(t)
  },
  SEARCH_EDITOR_STATE_CHANGE: function(e) {
    let {
      searchId: t,
      editorState: n
    } = e;
    m(t).editorState = n
  },
  SEARCH_SET_SHOW_BLOCKED_RESULTS: function(e) {
    let {
      searchId: t,
      showBlocked: n
    } = e, i = m(t);
    i.showBlockedResults = n
  },
  SEARCH_SCREEN_OPEN: function(e) {
    let {
      searchId: t
    } = e;
    y(t)
  },
  CHANNEL_SELECT: function(e) {
    let {
      guildId: t,
      channelId: n
    } = e;
    y(null != t ? t : n)
  },
  CHANNEL_TOGGLE_MEMBERS_SECTION: function() {
    return null != I && A({
      searchId: I
    })
  },
  SEARCH_CLEAR_HISTORY: function(e) {
    let {
      searchId: t
    } = e;
    null == t ? (o.default.remove(v), T = {}) : (delete T[t], o.default.set(v, {
      history: T
    }))
  },
  SEARCH_REMOVE_HISTORY: function(e) {
    let {
      searchId: t,
      query: n
    } = e;
    null != T[t] && (T[t] = T[t].filter(e => e !== n), o.default.set(v, {
      history: T
    }))
  },
  SEARCH_ADD_HISTORY: C,
  LOGOUT: function() {
    o.default.remove(v), T = {}
  },
  CONNECTION_OPEN: function() {
    Object.keys(h).forEach(e => {
      null != h[e] && (h[e].searchType = E(e))
    })
  },
  SEARCH_MODAL_OPEN: function(e) {
    let {
      searchId: t,
      searchType: n
    } = e;
    null != t && (I = t), g = !0, i = n
  },
  SEARCH_MODAL_CLOSE: function() {
    g = !1, i = void 0
  }
})