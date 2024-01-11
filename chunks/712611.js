            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return v
                }
            }), n("424973"), n("808653");
            var l = n("446674"),
                a = n("913144"),
                s = n("955513"),
                i = n("447909"),
                r = n("21121"),
                o = n("25292"),
                u = n("651879"),
                d = n("751520"),
                c = n("158998"),
                f = n("26989"),
                E = n("744983"),
                h = n("102985"),
                _ = n("697218"),
                S = n("49111");
            let T = {},
                p = {};

            function N(e) {
                let {
                    searchId: t,
                    query: n,
                    mode: l,
                    tokens: a,
                    cursorScope: s,
                    autocompletes: r
                } = e, o = p[t];
                return null == o && (o = {
                    results: [],
                    context: i.default.getSearchContext(I.bind(null, t))
                }, p[t] = o), {
                    query: null != n ? n : "",
                    mode: null != l ? l : {
                        type: S.SearchPopoutModes.EMPTY,
                        filter: null,
                        token: null
                    },
                    tokens: null != a ? a : [],
                    cursorScope: null != s ? s : null,
                    autocompletes: null != r ? r : []
                }
            }

            function I(e, t) {
                let {
                    results: n
                } = t, l = p[e], a = T[e];
                if (null == l || null == a) return;
                let {
                    type: s,
                    filter: i
                } = a.mode;
                if (s === S.SearchPopoutModes.EMPTY || s === S.SearchPopoutModes.FILTER && i !== S.SearchTokenTypes.FILTER_FROM && i !== S.SearchTokenTypes.FILTER_MENTIONS) return;
                let r = 3;
                a.mode.type === S.SearchPopoutModes.FILTER && (r = 10), l.results = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
                    return (e = e.reduce((e, t) => {
                        let n = _.default.getUser(t.id);
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
                } = a, {
                    autocompletes: E
                } = a;
                E = g(e, u), T[e] = N({
                    searchId: e,
                    query: o,
                    mode: u,
                    tokens: d,
                    cursorScope: f,
                    autocompletes: E
                }), L.emitChange()
            }

            function m(e, t, n) {
                let l, a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 10;
                if (null == e || "" === e) return null;
                let i = E.default.getSearchType(n);
                if (i === S.SearchTypes.GUILD && (e === S.SearchTokenTypes.FILTER_FROM || e === S.SearchTokenTypes.FILTER_MENTIONS)) {
                    let e = p[n];
                    null == e ? l = null : ((null == t || 0 === t.getFullMatch().trim().length) && (e.results = o.default.getRecentlyTalked(n, 10).map(e => {
                        let {
                            record: t
                        } = e;
                        return {
                            user: t,
                            text: c.default.getUserTag(t)
                        }
                    })), l = e.results)
                } else {
                    var r;
                    let i = null === (r = s.default[e]) || void 0 === r ? void 0 : r.getAutocompletions,
                        o = (null != t ? t.getFullMatch() : "").trim();
                    l = null != i ? i(o, n, null != a ? a : 10) : []
                }
                return null == l || 0 === l.length ? null : {
                    group: e,
                    results: l
                }
            }

            function A(e) {
                let t = (null != e ? e.getFullMatch() : "").trim(),
                    n = function() {
                        let e = (0, r.isInMainTabsExperiment)() && !1;
                        return {
                            [S.SearchTokenTypes.FILTER_FROM]: !h.default.hidePersonalInformation,
                            [S.SearchTokenTypes.FILTER_MENTIONS]: !h.default.hidePersonalInformation,
                            [S.SearchTokenTypes.FILTER_HAS]: !0,
                            [S.SearchTokenTypes.FILTER_BEFORE]: !0,
                            [S.SearchTokenTypes.FILTER_AFTER]: !0,
                            [S.SearchTokenTypes.FILTER_ON]: !0,
                            [S.SearchTokenTypes.FILTER_IN]: E.default.getSearchType() === S.SearchTypes.GUILD,
                            [S.SearchTokenTypes.FILTER_PINNED]: !e
                        }
                    }(),
                    l = (0, s.getFilterAutocompletions)(t).filter(e => n[e.token]);
                return {
                    group: S.SearchAutocompleteGroups.SEARCH_OPTIONS,
                    results: l
                }
            }

            function g(e, t) {
                let n = [];
                if (t.type === S.SearchPopoutModes.FILTER) n.push(m(t.filter, t.token, e, 10));
                else if (t.type === S.SearchPopoutModes.FILTER_ALL) n = function(e, t) {
                    let n = (null != e ? e.getFullMatch() : "").trim(),
                        l = [];
                    null != n && "" !== n && ((function(e) {
                        let t = E.default.getSearchType(e),
                            n = [S.SearchTokenTypes.FILTER_HAS];
                        return !h.default.hidePersonalInformation && (n.push(S.SearchTokenTypes.FILTER_FROM), n.push(S.SearchTokenTypes.FILTER_MENTIONS)), t === S.SearchTypes.GUILD && n.push(S.SearchTokenTypes.FILTER_IN), n
                    })(t).forEach(n => {
                        if (null == n) return;
                        let a = m(n, e, t, 3);
                        null != a && l.push(a)
                    }), l.push(function(e, t) {
                        let n = (null != e ? e.getFullMatch() : "").trim();
                        if (null != n && "" !== n) {
                            var l, a, i;
                            let e = null === (l = s.default[S.SearchTokenTypes.FILTER_BEFORE]) || void 0 === l ? void 0 : l.getAutocompletions(n, t, 1)[0],
                                r = null === (a = s.default[S.SearchTokenTypes.FILTER_ON]) || void 0 === a ? void 0 : a.getAutocompletions(n, t, 1)[0],
                                o = null === (i = s.default[S.SearchTokenTypes.FILTER_AFTER]) || void 0 === i ? void 0 : i.getAutocompletions(n, t, 1)[0];
                            return null == e ? null : {
                                group: S.SearchAutocompleteGroups.DATES,
                                results: [e, r, o]
                            }
                        }
                    }(e, t)));
                    let a = (0, d.getTotalResults)(l);
                    return a < 5 && l.push(A(e)), l
                }(t.token, e);
                else if (t.type === S.SearchPopoutModes.EMPTY) {
                    n.push(A(t.token));
                    let l = (0, r.isInMainTabsExperiment)() && !1;
                    !l && n.push(function(e) {
                        if (h.default.hidePersonalInformation) return null;
                        let t = E.default.getHistory(e);
                        return null == t ? null : {
                            group: S.SearchAutocompleteGroups.HISTORY,
                            results: t.map(e => ({
                                text: e
                            }))
                        }
                    }(e))
                }
                return n
            }

            function C() {
                (0, d.clearTokenCache)()
            }

            function R(e) {
                let t = T[e];
                if (null == t) return;
                let {
                    query: n,
                    mode: l,
                    tokens: a,
                    cursorScope: s,
                    autocompletes: i
                } = t;
                T[e] = N({
                    searchId: e,
                    query: n,
                    mode: l,
                    tokens: a,
                    cursorScope: s,
                    autocompletes: i.map(e => (null == e ? void 0 : e.group) === S.SearchAutocompleteGroups.HISTORY ? null : e)
                })
            }

            function M() {
                let e = E.default.getCurrentSearchId();
                if (null == e || null == T[e]) return;
                let {
                    query: t,
                    mode: n,
                    tokens: l,
                    cursorScope: a
                } = T[e];
                T[e] = N({
                    searchId: e,
                    query: t,
                    mode: n,
                    tokens: l,
                    cursorScope: a,
                    autocompletes: g(e, n)
                })
            }
            class O extends l.default.Store {
                initialize() {
                    this.waitFor(f.default, h.default)
                }
                getState(e) {
                    var t;
                    return null !== (t = T[e]) && void 0 !== t ? t : N({
                        searchId: e
                    })
                }
            }
            O.displayName = "SearchAutocompleteStore";
            let L = new O(a.default, {
                SEARCH_AUTOCOMPLETE_QUERY_UPDATE: function(e) {
                    var t;
                    let n, {
                            searchId: l,
                            tokens: a,
                            cursorScope: s
                        } = e,
                        i = (0, d.getQueryFromTokens)(a),
                        r = (0, d.getAutocompleteMode)(s, a),
                        o = null !== (t = T[l]) && void 0 !== t ? t : {},
                        c = p[l],
                        f = !0;
                    if (i === o.query && (null == o.mode || o.mode.filter === r.filter)) n = o.autocompletes, f = !1;
                    else if (r.type === S.SearchPopoutModes.EMPTY || r.type === S.SearchPopoutModes.FILTER && r.filter !== S.SearchTokenTypes.FILTER_FROM && r.filter !== S.SearchTokenTypes.FILTER_MENTIONS) null != c && (c.context.clearQuery(), c.results = []), n = g(l, r);
                    else if (null != c) {
                        let {
                            token: e
                        } = r;
                        null != e && e.getFullMatch().trim().length > 0 ? (u.default.requestMembers(l, e.getFullMatch(), 10), c.context.setQuery(e.getFullMatch().trim(), {
                            guild: l
                        }), n = o.autocompletes, f = !1) : (c.context.clearQuery(), n = g(l, r))
                    }
                    return T[l] = N({
                        searchId: l,
                        query: i,
                        mode: r,
                        tokens: a,
                        cursorScope: s,
                        autocompletes: n
                    }), f
                },
                SEARCH_EDITOR_STATE_CLEAR: function(e) {
                    let {
                        searchId: t
                    } = e, n = p[t];
                    null != n && (n.context.destroy(), n.results = [], delete p[t]), delete T[t]
                },
                CHANNEL_CREATE: C,
                CHANNEL_DELETE: C,
                STREAMER_MODE_UPDATE: M,
                SEARCH_MODAL_OPEN: M,
                SEARCH_SCREEN_OPEN: M,
                SEARCH_CLEAR_HISTORY: function(e) {
                    let {
                        searchId: t
                    } = e;
                    null != t ? R(t) : Object.keys(T).forEach(R)
                },
                LOGOUT: function() {
                    Object.keys(T).forEach(R)
                }
            });
            var v = L