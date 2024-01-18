"use strict";
n.r(t), n.d(t, {
  default: function() {
    return L
  }
}), n("424973"), n("808653");
var a = n("446674"),
  l = n("913144"),
  s = n("955513"),
  i = n("447909"),
  r = n("21121"),
  o = n("25292"),
  u = n("651879"),
  d = n("751520"),
  c = n("158998"),
  f = n("26989"),
  h = n("744983"),
  E = n("102985"),
  m = n("697218"),
  p = n("49111");
let S = {},
  g = {};

function N(e) {
  let {
    searchId: t,
    query: n,
    mode: a,
    tokens: l,
    cursorScope: s,
    autocompletes: r
  } = e, o = g[t];
  return null == o && (o = {
    results: [],
    context: i.default.getSearchContext(_.bind(null, t))
  }, g[t] = o), {
    query: null != n ? n : "",
    mode: null != a ? a : {
      type: p.SearchPopoutModes.EMPTY,
      filter: null,
      token: null
    },
    tokens: null != l ? l : [],
    cursorScope: null != s ? s : null,
    autocompletes: null != r ? r : []
  }
}

function _(e, t) {
  let {
    results: n
  } = t, a = g[e], l = S[e];
  if (null == a || null == l) return;
  let {
    type: s,
    filter: i
  } = l.mode;
  if (s === p.SearchPopoutModes.EMPTY || s === p.SearchPopoutModes.FILTER && i !== p.SearchTokenTypes.FILTER_FROM && i !== p.SearchTokenTypes.FILTER_MENTIONS) return;
  let r = 3;
  l.mode.type === p.SearchPopoutModes.FILTER && (r = 10), a.results = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
    return (e = e.reduce((e, t) => {
      let n = m.default.getUser(t.id);
      return null == n ? e : (e.push({
        id: n.id,
        text: c.default.getUserTag(n),
        user: n
      }), e)
    }, [])).length > t && (e.length = t), e
  }(n, r);
  let {
    query: o,
    mode: u,
    tokens: d,
    cursorScope: f
  } = l, {
    autocompletes: h
  } = l;
  h = C(e, u), S[e] = N({
    searchId: e,
    query: o,
    mode: u,
    tokens: d,
    cursorScope: f,
    autocompletes: h
  }), R.emitChange()
}

function T(e, t, n) {
  let a, l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 10;
  if (null == e || "" === e) return null;
  let i = h.default.getSearchType(n);
  if (i === p.SearchTypes.GUILD && (e === p.SearchTokenTypes.FILTER_FROM || e === p.SearchTokenTypes.FILTER_MENTIONS)) {
    let e = g[n];
    null == e ? a = null : ((null == t || 0 === t.getFullMatch().trim().length) && (e.results = o.default.getRecentlyTalked(n, 10).map(e => {
      let {
        record: t
      } = e;
      return {
        user: t,
        text: c.default.getUserTag(t)
      }
    })), a = e.results)
  } else {
    var r;
    let i = null === (r = s.default[e]) || void 0 === r ? void 0 : r.getAutocompletions,
      o = (null != t ? t.getFullMatch() : "").trim();
    a = null != i ? i(o, n, null != l ? l : 10) : []
  }
  return null == a || 0 === a.length ? null : {
    group: e,
    results: a
  }
}

function I(e) {
  let t = (null != e ? e.getFullMatch() : "").trim(),
    n = function() {
      let e = (0, r.isInMainTabsExperiment)() && !1;
      return {
        [p.SearchTokenTypes.FILTER_FROM]: !E.default.hidePersonalInformation,
        [p.SearchTokenTypes.FILTER_MENTIONS]: !E.default.hidePersonalInformation,
        [p.SearchTokenTypes.FILTER_HAS]: !0,
        [p.SearchTokenTypes.FILTER_BEFORE]: !0,
        [p.SearchTokenTypes.FILTER_AFTER]: !0,
        [p.SearchTokenTypes.FILTER_ON]: !0,
        [p.SearchTokenTypes.FILTER_IN]: h.default.getSearchType() === p.SearchTypes.GUILD,
        [p.SearchTokenTypes.FILTER_PINNED]: !e
      }
    }(),
    a = (0, s.getFilterAutocompletions)(t).filter(e => n[e.token]);
  return {
    group: p.SearchAutocompleteGroups.SEARCH_OPTIONS,
    results: a
  }
}

function C(e, t) {
  let n = [];
  if (t.type === p.SearchPopoutModes.FILTER) n.push(T(t.filter, t.token, e, 10));
  else if (t.type === p.SearchPopoutModes.FILTER_ALL) n = function(e, t) {
    let n = (null != e ? e.getFullMatch() : "").trim(),
      a = [];
    null != n && "" !== n && ((function(e) {
      let t = h.default.getSearchType(e),
        n = [p.SearchTokenTypes.FILTER_HAS];
      return !E.default.hidePersonalInformation && (n.push(p.SearchTokenTypes.FILTER_FROM), n.push(p.SearchTokenTypes.FILTER_MENTIONS)), t === p.SearchTypes.GUILD && n.push(p.SearchTokenTypes.FILTER_IN), n
    })(t).forEach(n => {
      if (null == n) return;
      let l = T(n, e, t, 3);
      null != l && a.push(l)
    }), a.push(function(e, t) {
      let n = (null != e ? e.getFullMatch() : "").trim();
      if (null != n && "" !== n) {
        var a, l, i;
        let e = null === (a = s.default[p.SearchTokenTypes.FILTER_BEFORE]) || void 0 === a ? void 0 : a.getAutocompletions(n, t, 1)[0],
          r = null === (l = s.default[p.SearchTokenTypes.FILTER_ON]) || void 0 === l ? void 0 : l.getAutocompletions(n, t, 1)[0],
          o = null === (i = s.default[p.SearchTokenTypes.FILTER_AFTER]) || void 0 === i ? void 0 : i.getAutocompletions(n, t, 1)[0];
        return null == e ? null : {
          group: p.SearchAutocompleteGroups.DATES,
          results: [e, r, o]
        }
      }
    }(e, t)));
    let l = (0, d.getTotalResults)(a);
    return l < 5 && a.push(I(e)), a
  }(t.token, e);
  else if (t.type === p.SearchPopoutModes.EMPTY) {
    n.push(I(t.token));
    let a = (0, r.isInMainTabsExperiment)() && !1;
    !a && n.push(function(e) {
      if (E.default.hidePersonalInformation) return null;
      let t = h.default.getHistory(e);
      return null == t ? null : {
        group: p.SearchAutocompleteGroups.HISTORY,
        results: t.map(e => ({
          text: e
        }))
      }
    }(e))
  }
  return n
}

function A() {
  (0, d.clearTokenCache)()
}

function M(e) {
  let t = S[e];
  if (null == t) return;
  let {
    query: n,
    mode: a,
    tokens: l,
    cursorScope: s,
    autocompletes: i
  } = t;
  S[e] = N({
    searchId: e,
    query: n,
    mode: a,
    tokens: l,
    cursorScope: s,
    autocompletes: i.map(e => (null == e ? void 0 : e.group) === p.SearchAutocompleteGroups.HISTORY ? null : e)
  })
}

function v() {
  let e = h.default.getCurrentSearchId();
  if (null == e || null == S[e]) return;
  let {
    query: t,
    mode: n,
    tokens: a,
    cursorScope: l
  } = S[e];
  S[e] = N({
    searchId: e,
    query: t,
    mode: n,
    tokens: a,
    cursorScope: l,
    autocompletes: C(e, n)
  })
}
class x extends a.default.Store {
  initialize() {
    this.waitFor(f.default, E.default)
  }
  getState(e) {
    var t;
    return null !== (t = S[e]) && void 0 !== t ? t : N({
      searchId: e
    })
  }
}
x.displayName = "SearchAutocompleteStore";
let R = new x(l.default, {
  SEARCH_AUTOCOMPLETE_QUERY_UPDATE: function(e) {
    var t;
    let n, {
        searchId: a,
        tokens: l,
        cursorScope: s
      } = e,
      i = (0, d.getQueryFromTokens)(l),
      r = (0, d.getAutocompleteMode)(s, l),
      o = null !== (t = S[a]) && void 0 !== t ? t : {},
      c = g[a],
      f = !0;
    if (i === o.query && (null == o.mode || o.mode.filter === r.filter)) n = o.autocompletes, f = !1;
    else if (r.type === p.SearchPopoutModes.EMPTY || r.type === p.SearchPopoutModes.FILTER && r.filter !== p.SearchTokenTypes.FILTER_FROM && r.filter !== p.SearchTokenTypes.FILTER_MENTIONS) null != c && (c.context.clearQuery(), c.results = []), n = C(a, r);
    else if (null != c) {
      let {
        token: e
      } = r;
      null != e && e.getFullMatch().trim().length > 0 ? (u.default.requestMembers(a, e.getFullMatch(), 10), c.context.setQuery(e.getFullMatch().trim(), {
        guild: a
      }), n = o.autocompletes, f = !1) : (c.context.clearQuery(), n = C(a, r))
    }
    return S[a] = N({
      searchId: a,
      query: i,
      mode: r,
      tokens: l,
      cursorScope: s,
      autocompletes: n
    }), f
  },
  SEARCH_EDITOR_STATE_CLEAR: function(e) {
    let {
      searchId: t
    } = e, n = g[t];
    null != n && (n.context.destroy(), n.results = [], delete g[t]), delete S[t]
  },
  CHANNEL_CREATE: A,
  CHANNEL_DELETE: A,
  STREAMER_MODE_UPDATE: v,
  SEARCH_MODAL_OPEN: v,
  SEARCH_SCREEN_OPEN: v,
  SEARCH_CLEAR_HISTORY: function(e) {
    let {
      searchId: t
    } = e;
    null != t ? M(t) : Object.keys(S).forEach(M)
  },
  LOGOUT: function() {
    Object.keys(S).forEach(M)
  }
});
var L = R