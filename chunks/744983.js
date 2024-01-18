"use strict";
let s;
n.r(t), n.d(t, {
  default: function() {
    return O
  }
}), n("843762");
var i = n("917351"),
  r = n.n(i),
  a = n("446674"),
  o = n("95410"),
  d = n("913144"),
  u = n("390933"),
  l = n("25932"),
  f = n("42203"),
  _ = n("305961"),
  c = n("18494"),
  g = n("49111");
let m = {},
  h = !1;

function v(e) {
  return null == m[e] && (m[e] = {
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
  }), m[e]
}

function E(e) {
  return e === g.SearchTypes.DMS ? g.SearchTypes.DMS : null != _.default.getGuild(e) ? g.SearchTypes.GUILD : null != f.default.getChannel(e) ? g.SearchTypes.CHANNEL : null
}

function p(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
  if (null == e) return n;
  let s = m[e];
  return null == s ? n : t(s)
}
let y = "SearchStore",
  C = !1,
  T = {},
  S = null;

function I(e) {
  var t;
  let {
    searchId: n,
    query: s
  } = e;
  if ("string" != typeof s || "" === (s = s.trim())) return;
  let i = T[n] = null !== (t = T[n]) && void 0 !== t ? t : [],
    r = i.indexOf(s); - 1 !== r ? (i.splice(r, 1), i.unshift(s)) : null != i[0] && "" !== i[0] && s.startsWith(i[0]) ? i[0] = s : r < 0 && i.unshift(s), i.length > 5 && i.splice(5, i.length), o.default.set(y, {
    history: T
  })
}

function A(e) {
  let {
    searchId: t
  } = e, n = m[t];
  if (null == n) return !1;
  null != n.searchFetcher && n.searchFetcher.cancel(), delete m[t]
}

function D(e) {
  if (e === S) return !1;
  null != e && null == m[e] && v(e), S = e
}
class N extends a.default.Store {
  initialize() {
    this.waitFor(_.default, f.default);
    let e = o.default.get(y);
    if ((null == e ? void 0 : e.history) != null) {
      var t;
      Object.keys(t = e.history).forEach(e => {
        Array.isArray(t[e]) && (t[e] = t[e].filter(e => "string" == typeof e && e.trim())), (!Array.isArray(t[e]) || 0 === t[e].length) && delete t[e]
      }), T = t
    }
    C = !!o.default.get("tokenized")
  }
  isOpen() {
    return h
  }
  getCurrentSearchModalType() {
    return s
  }
  getCurrentSearchId() {
    return S
  }
  isActive() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : S;
    return null != e && (this.isIndexing(e) || this.isSearching(e) || this.hasResults(e))
  }
  isTokenized() {
    return C
  }
  getSearchType(e) {
    return p(null != e ? e : S, e => e.searchType)
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
var O = new N(d.default, {
  SEARCH_START: function(e) {
    var t, n, s;
    let {
      queryString: i,
      searchId: a,
      query: o
    } = e, _ = v(a);
    null != _.searchFetcher && (_.searchFetcher.cancel(), _.searchFetcher = null);
    let m = a,
      h = _.searchType;
    a === g.FAVORITES && (m = null !== (n = c.default.getChannelId()) && void 0 !== n ? n : a, h = g.SearchTypes.CHANNEL);
    let E = new u.default(m, h, o);
    _.searchFetcher = E, _.isSearching = !0, _.rawResults = null, _.analyticsId = null, _.query = r.omit(o, "type"), _.offset = null !== (s = o.offset) && void 0 !== s ? s : 0, _.showBlockedResults = !1, I({
      type: "SEARCH_ADD_HISTORY",
      searchId: a,
      query: i
    });
    let p = a === g.FAVORITES ? null === (t = f.default.getChannel(m)) || void 0 === t ? void 0 : t.guild_id : h === g.SearchTypes.GUILD ? a : null;
    E.fetch(e => {
      var t, n;
      d.default.dispatch({
        type: "SEARCH_FINISH",
        searchId: a,
        guildId: p,
        analyticsId: e.body.analytics_id,
        totalResults: e.body.total_results,
        messages: e.body.messages,
        threads: null !== (t = e.body.threads) && void 0 !== t ? t : [],
        members: (null !== (n = e.body.members) && void 0 !== n ? n : []).map(e => (0, l.default)(e)),
        hasError: !1,
        doingHistoricalIndex: e.body.doing_deep_historical_index,
        documentsIndexed: e.body.documents_indexed
      })
    }, () => {
      d.default.dispatch({
        type: "SEARCH_INDEXING",
        searchId: a
      })
    }, () => {
      d.default.dispatch({
        type: "SEARCH_FINISH",
        searchId: a,
        guildId: p,
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
    } = e, n = v(t);
    n.isIndexing = !0, n.isHistoricalIndexing = !0, n.isSearching = !1
  },
  SEARCH_FINISH: function(e) {
    let {
      searchId: t
    } = e, n = v(t);
    n.isSearching = !1, n.isIndexing = !1, n.isHistoricalIndexing = e.doingHistoricalIndex || !1, n.searchFetcher = null, n.totalResults = e.totalResults, n.hasError = e.hasError, n.analyticsId = e.analyticsId, n.documentsIndexed = null != e.documentsIndexed ? e.documentsIndexed : 0, n.showNoResultsAlt = .05 > Math.random(), n.rawResults = e.messages;
    let s = n.query;
    null == s && (n.hasError = !0)
  },
  SEARCH_EDITOR_STATE_CLEAR: A,
  SEARCH_ENSURE_SEARCH_STATE: function(e) {
    let {
      searchId: t
    } = e;
    null != t && v(t)
  },
  SEARCH_EDITOR_STATE_CHANGE: function(e) {
    let {
      searchId: t,
      editorState: n
    } = e;
    v(t).editorState = n
  },
  SEARCH_SET_SHOW_BLOCKED_RESULTS: function(e) {
    let {
      searchId: t,
      showBlocked: n
    } = e, s = v(t);
    s.showBlockedResults = n
  },
  SEARCH_SCREEN_OPEN: function(e) {
    let {
      searchId: t
    } = e;
    D(t)
  },
  CHANNEL_SELECT: function(e) {
    let {
      guildId: t,
      channelId: n
    } = e;
    D(null != t ? t : n)
  },
  CHANNEL_TOGGLE_MEMBERS_SECTION: function() {
    return null != S && A({
      searchId: S
    })
  },
  SEARCH_CLEAR_HISTORY: function(e) {
    let {
      searchId: t
    } = e;
    null == t ? (o.default.remove(y), T = {}) : (delete T[t], o.default.set(y, {
      history: T
    }))
  },
  SEARCH_REMOVE_HISTORY: function(e) {
    let {
      searchId: t,
      query: n
    } = e;
    null != T[t] && (T[t] = T[t].filter(e => e !== n), o.default.set(y, {
      history: T
    }))
  },
  SEARCH_ADD_HISTORY: I,
  LOGOUT: function() {
    o.default.remove(y), T = {}
  },
  CONNECTION_OPEN: function() {
    Object.keys(m).forEach(e => {
      null != m[e] && (m[e].searchType = E(e))
    })
  },
  SEARCH_MODAL_OPEN: function(e) {
    let {
      searchId: t,
      searchType: n
    } = e;
    null != t && (S = t), h = !0, s = n
  },
  SEARCH_MODAL_CLOSE: function() {
    h = !1, s = void 0
  }
})