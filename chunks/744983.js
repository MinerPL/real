            "use strict";
            let i;
            n.r(t), n.d(t, {
                default: function() {
                    return v
                }
            }), n("843762");
            var a = n("917351"),
                l = n.n(a),
                s = n("446674"),
                r = n("95410"),
                u = n("913144"),
                o = n("390933"),
                d = n("25932"),
                c = n("42203"),
                _ = n("305961"),
                E = n("18494"),
                f = n("49111");
            let h = {},
                p = !1;

            function T(e) {
                return null == h[e] && (h[e] = {
                    searchId: e,
                    searchType: C(e),
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

            function C(e) {
                return e === f.SearchTypes.DMS ? f.SearchTypes.DMS : null != _.default.getGuild(e) ? f.SearchTypes.GUILD : null != c.default.getChannel(e) ? f.SearchTypes.CHANNEL : null
            }

            function m(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                if (null == e) return n;
                let i = h[e];
                return null == i ? n : t(i)
            }
            let S = "SearchStore",
                I = !1,
                g = {},
                A = null;

            function N(e) {
                var t;
                let {
                    searchId: n,
                    query: i
                } = e;
                if ("string" != typeof i || "" === (i = i.trim())) return;
                let a = g[n] = null !== (t = g[n]) && void 0 !== t ? t : [],
                    l = a.indexOf(i); - 1 !== l ? (a.splice(l, 1), a.unshift(i)) : null != a[0] && "" !== a[0] && i.startsWith(a[0]) ? a[0] = i : l < 0 && a.unshift(i), a.length > 5 && a.splice(5, a.length), r.default.set(S, {
                    history: g
                })
            }

            function O(e) {
                let {
                    searchId: t
                } = e, n = h[t];
                if (null == n) return !1;
                null != n.searchFetcher && n.searchFetcher.cancel(), delete h[t]
            }

            function R(e) {
                if (e === A) return !1;
                null != e && null == h[e] && T(e), A = e
            }
            class y extends s.default.Store {
                initialize() {
                    this.waitFor(_.default, c.default);
                    let e = r.default.get(S);
                    if ((null == e ? void 0 : e.history) != null) {
                        var t;
                        Object.keys(t = e.history).forEach(e => {
                            Array.isArray(t[e]) && (t[e] = t[e].filter(e => "string" == typeof e && e.trim())), (!Array.isArray(t[e]) || 0 === t[e].length) && delete t[e]
                        }), g = t
                    }
                    I = !!r.default.get("tokenized")
                }
                isOpen() {
                    return p
                }
                getCurrentSearchModalType() {
                    return i
                }
                getCurrentSearchId() {
                    return A
                }
                isActive() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : A;
                    return null != e && (this.isIndexing(e) || this.isSearching(e) || this.hasResults(e))
                }
                isTokenized() {
                    return I
                }
                getSearchType(e) {
                    return m(null != e ? e : A, e => e.searchType)
                }
                getRawResults(e) {
                    return m(e, e => e.rawResults)
                }
                hasResults(e) {
                    return null != m(e, e => e.rawResults)
                }
                isIndexing(e) {
                    return m(e, e => e.isIndexing) || !1
                }
                isHistoricalIndexing(e) {
                    return m(e, e => e.isHistoricalIndexing) || !1
                }
                isSearching(e) {
                    return m(e, e => e.isSearching) || !1
                }
                getAnalyticsId(e) {
                    return m(e, e => e.analyticsId)
                }
                getResultsBlocked(e) {
                    return m(e, e => e.resultsBlocked)
                }
                getDocumentsIndexedCount(e) {
                    return m(e, e => e.documentsIndexed)
                }
                getSearchFetcher(e) {
                    return m(e, e => e.searchFetcher)
                }
                getTotalResults(e) {
                    var t;
                    return null !== (t = m(e, e => e.totalResults)) && void 0 !== t ? t : 0
                }
                getEditorState(e) {
                    return m(e, e => e.editorState)
                }
                getHistory(e) {
                    return g[e]
                }
                getOffset(e) {
                    var t;
                    return null !== (t = m(e, e => e.offset)) && void 0 !== t ? t : 0
                }
                getQuery(e) {
                    return m(e, e => e.query)
                }
                hasError(e) {
                    var t;
                    return null !== (t = m(e, e => e.hasError)) && void 0 !== t && t
                }
                shouldShowBlockedResults(e) {
                    var t;
                    return null !== (t = m(e, e => e.showBlockedResults, !1)) && void 0 !== t && t
                }
                shouldShowNoResultsAlt(e) {
                    var t;
                    return null !== (t = m(e, e => e.showNoResultsAlt, !1)) && void 0 !== t && t
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
            y.displayName = "SearchStore";
            var v = new y(u.default, {
                SEARCH_START: function(e) {
                    var t, n, i;
                    let {
                        queryString: a,
                        searchId: s,
                        query: r
                    } = e, _ = T(s);
                    null != _.searchFetcher && (_.searchFetcher.cancel(), _.searchFetcher = null);
                    let h = s,
                        p = _.searchType;
                    s === f.FAVORITES && (h = null !== (n = E.default.getChannelId()) && void 0 !== n ? n : s, p = f.SearchTypes.CHANNEL);
                    let C = new o.default(h, p, r);
                    _.searchFetcher = C, _.isSearching = !0, _.rawResults = null, _.analyticsId = null, _.query = l.omit(r, "type"), _.offset = null !== (i = r.offset) && void 0 !== i ? i : 0, _.showBlockedResults = !1, N({
                        type: "SEARCH_ADD_HISTORY",
                        searchId: s,
                        query: a
                    });
                    let m = s === f.FAVORITES ? null === (t = c.default.getChannel(h)) || void 0 === t ? void 0 : t.guild_id : p === f.SearchTypes.GUILD ? s : null;
                    C.fetch(e => {
                        var t, n;
                        u.default.dispatch({
                            type: "SEARCH_FINISH",
                            searchId: s,
                            guildId: m,
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
                        u.default.dispatch({
                            type: "SEARCH_INDEXING",
                            searchId: s
                        })
                    }, () => {
                        u.default.dispatch({
                            type: "SEARCH_FINISH",
                            searchId: s,
                            guildId: m,
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
                    } = e, n = T(t);
                    n.isIndexing = !0, n.isHistoricalIndexing = !0, n.isSearching = !1
                },
                SEARCH_FINISH: function(e) {
                    let {
                        searchId: t
                    } = e, n = T(t);
                    n.isSearching = !1, n.isIndexing = !1, n.isHistoricalIndexing = e.doingHistoricalIndex || !1, n.searchFetcher = null, n.totalResults = e.totalResults, n.hasError = e.hasError, n.analyticsId = e.analyticsId, n.documentsIndexed = null != e.documentsIndexed ? e.documentsIndexed : 0, n.showNoResultsAlt = .05 > Math.random(), n.rawResults = e.messages;
                    let i = n.query;
                    null == i && (n.hasError = !0)
                },
                SEARCH_EDITOR_STATE_CLEAR: O,
                SEARCH_ENSURE_SEARCH_STATE: function(e) {
                    let {
                        searchId: t
                    } = e;
                    null != t && T(t)
                },
                SEARCH_EDITOR_STATE_CHANGE: function(e) {
                    let {
                        searchId: t,
                        editorState: n
                    } = e;
                    T(t).editorState = n
                },
                SEARCH_SET_SHOW_BLOCKED_RESULTS: function(e) {
                    let {
                        searchId: t,
                        showBlocked: n
                    } = e, i = T(t);
                    i.showBlockedResults = n
                },
                SEARCH_SCREEN_OPEN: function(e) {
                    let {
                        searchId: t
                    } = e;
                    R(t)
                },
                CHANNEL_SELECT: function(e) {
                    let {
                        guildId: t,
                        channelId: n
                    } = e;
                    R(null != t ? t : n)
                },
                CHANNEL_TOGGLE_MEMBERS_SECTION: function() {
                    return null != A && O({
                        searchId: A
                    })
                },
                SEARCH_CLEAR_HISTORY: function(e) {
                    let {
                        searchId: t
                    } = e;
                    null == t ? (r.default.remove(S), g = {}) : (delete g[t], r.default.set(S, {
                        history: g
                    }))
                },
                SEARCH_REMOVE_HISTORY: function(e) {
                    let {
                        searchId: t,
                        query: n
                    } = e;
                    null != g[t] && (g[t] = g[t].filter(e => e !== n), r.default.set(S, {
                        history: g
                    }))
                },
                SEARCH_ADD_HISTORY: N,
                LOGOUT: function() {
                    r.default.remove(S), g = {}
                },
                CONNECTION_OPEN: function() {
                    Object.keys(h).forEach(e => {
                        null != h[e] && (h[e].searchType = C(e))
                    })
                },
                SEARCH_MODAL_OPEN: function(e) {
                    let {
                        searchId: t,
                        searchType: n
                    } = e;
                    null != t && (A = t), p = !0, i = n
                },
                SEARCH_MODAL_CLOSE: function() {
                    p = !1, i = void 0
                }
            })