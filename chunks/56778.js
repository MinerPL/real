            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return j
                }
            }), n("222007");
            var a = n("37983"),
                l = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("917351"),
                o = n.n(r),
                u = n("446674"),
                d = n("77078"),
                c = n("970728"),
                f = n("378438"),
                h = n("716241"),
                p = n("161778"),
                m = n("845579"),
                E = n("744983"),
                C = n("18494"),
                g = n("230559"),
                S = n("659500"),
                _ = n("767094"),
                I = n("565996"),
                T = n("535260"),
                v = n("49111"),
                x = n("782340"),
                N = n("557398");
            class A extends l.Component {
                componentDidMount() {
                    this.autoAnalytics()
                }
                componentDidUpdate(e) {
                    (this.props.searchAnalyticsId !== e.searchAnalyticsId || this.props.searchOffset !== e.searchOffset) && this.autoAnalytics(e.searchAnalyticsId)
                }
                render() {
                    return null
                }
                constructor(...e) {
                    var t;
                    super(...e), t = this, this.autoAnalytics = function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                        if (null == t.props.searchAnalyticsId) return;
                        let n = 0,
                            a = 0,
                            l = 0,
                            s = 0;
                        null != t.props.searchResults && o(t.props.searchResults).flatten().filter(e => e.isSearchHit).forEach(e => {
                            null != e.content && "" !== e.content && (n++, /https?:\/\/[^\s]+/.test(e.content) && s++), null != e.embeds && e.embeds.length > 0 && l++, null != e.attachments && e.attachments.length > 0 && a++
                        }), h.default.trackWithMetadata(v.AnalyticEvents.SEARCH_RESULT_VIEWED, {
                            search_type: t.props.searchType,
                            search_id: t.props.searchAnalyticsId,
                            prev_search_id: e !== t.props.searchAnalyticsId ? e : null,
                            is_error: t.props.searchHasError,
                            limit: t.props.searchLimit,
                            offset: t.props.searchOffset,
                            page: Math.floor(t.props.searchOffset / t.props.searchLimit) + 1,
                            total_results: t.props.searchTotalResults,
                            page_results: null != t.props.searchResults ? t.props.searchResults.length : null,
                            is_indexing: t.props.searchIsIndexing,
                            page_num_messages: n,
                            page_num_links: s,
                            page_num_embeds: l,
                            page_num_attach: a
                        })
                    }
                }
            }
            let M = e => {
                let {
                    children: t
                } = e;
                return (0, a.jsx)("div", {
                    className: N.emptyResultsWrap,
                    children: (0, a.jsx)("div", {
                        className: N.emptyResultsContent,
                        children: t
                    })
                })
            };
            class R extends l.PureComponent {
                componentDidMount() {
                    S.ComponentDispatch.subscribe(v.ComponentActions.SEARCH_RESULTS_CLOSE, this.handleSearchResultsClose)
                }
                componentWillUnmount() {
                    S.ComponentDispatch.unsubscribe(v.ComponentActions.SEARCH_RESULTS_CLOSE, this.handleSearchResultsClose)
                }
                componentDidUpdate(e) {
                    let {
                        search: t
                    } = e;
                    if (this.props.search.showBlockedResults !== t.showBlockedResults) {
                        let e = this.scrollerRef.current;
                        if (null == e) return;
                        e.scrollToBottom()
                    }
                    let n = E.default.getQuery(this.props.searchId);
                    JSON.stringify(n) !== JSON.stringify(this.state.searchQuery) && this.setState({
                        searchQuery: n,
                        searchMode: v.SearchModes.NEWEST
                    })
                }
                render() {
                    let {
                        searchAnalyticsId: e,
                        searchType: t,
                        searchResults: n
                    } = this.props, {
                        offset: l,
                        hasError: s,
                        totalResults: i,
                        isHistoricalIndexing: r
                    } = this.props.search;
                    return (0, a.jsxs)("section", {
                        className: N.searchResultsWrap,
                        "aria-label": x.default.Messages.SEARCH_RESULTS_SECTION_LABEL,
                        children: [this.renderHeader(), (0, a.jsx)(d.AdvancedScroller, {
                            ref: this.scrollerRef,
                            className: N.scroller,
                            children: this.renderContent()
                        }), (0, a.jsx)(A, {
                            searchType: t,
                            searchAnalyticsId: e,
                            searchResults: n,
                            searchOffset: l,
                            searchLimit: v.SEARCH_PAGE_SIZE,
                            searchHasError: s,
                            searchTotalResults: i,
                            searchIsIndexing: r
                        })]
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        searchMode: v.SearchModes.NEWEST,
                        searchQuery: null
                    }, this.scrollerRef = l.createRef(), this.scrollTo = (e, t, n) => {
                        let a = this.scrollerRef.current;
                        if (null == a) return;
                        let l = a.getScrollerState().scrollTop - e;
                        a.scrollTo({
                            to: l,
                            animate: t,
                            callback: n
                        })
                    }, this.selectChannel = e => {
                        e !== C.default.getChannelId() && c.default.transitionToInviteChannelSync(e)
                    }, this.searchPrevious = () => {
                        let {
                            searchId: e,
                            search: {
                                isSearching: t
                            }
                        } = this.props;
                        !t && f.searchPreviousPage(e)
                    }, this.searchNext = () => {
                        let {
                            searchId: e,
                            search: {
                                isSearching: t
                            }
                        } = this.props;
                        !t && f.searchNextPage(e)
                    }, this.handleSearchResultsClose = () => {
                        let {
                            searchId: e
                        } = this.props;
                        f.clearSearchState(e)
                    }, this.searchByMode = e => {
                        let {
                            searchId: t,
                            search: {
                                isSearching: n
                            }
                        } = this.props, {
                            searchMode: a
                        } = this.state;
                        e !== a && !n && (h.default.trackWithMetadata(v.AnalyticEvents.SEARCH_RESULT_SORT_CHANGED, {
                            search_id: E.default.getAnalyticsId(t),
                            new_sort_type: e
                        }), f.searchByMode(t, e), this.setState({
                            searchMode: e
                        }))
                    }, this.toggleShowBlockedMessages = () => {
                        let {
                            searchId: e,
                            search: {
                                showBlockedResults: t
                            }
                        } = this.props;
                        f.setShowBlockedResults(e, !t)
                    }, this.renderHeader = () => {
                        let {
                            searchMode: e
                        } = this.state, {
                            totalResults: t,
                            isSearching: n,
                            isHistoricalIndexing: l,
                            documentsIndexed: s
                        } = this.props.search;
                        return (0, a.jsx)(I.default, {
                            searchMode: e,
                            searchByMode: this.searchByMode,
                            totalResults: t,
                            isSearching: n,
                            isIndexing: l,
                            documentsIndexed: s
                        })
                    }, this.renderIndexing = () => {
                        let e = E.default.getSearchType(this.props.searchId),
                            t = e === v.SearchTypes.GUILD ? x.default.Messages.SEARCH_GUILD_STILL_INDEXING : x.default.Messages.SEARCH_DM_STILL_INDEXING;
                        return (0, a.jsxs)(M, {
                            children: [(0, a.jsx)(g.default, {}), (0, a.jsx)("div", {
                                className: (N.emptyResultsText, N.stillIndexing),
                                children: t
                            })]
                        })
                    }, this.renderNoResults = () => {
                        let {
                            showNoResultsAlt: e
                        } = this.props.search, t = e ? x.default.Messages.SEARCH_NO_RESULTS_ALT : x.default.Messages.SEARCH_NO_RESULTS;
                        return (0, a.jsxs)(M, {
                            children: [(0, a.jsx)("div", {
                                className: i(N.noResultsImage, {
                                    [N.alt]: e
                                })
                            }), (0, a.jsx)("div", {
                                className: i(N.emptyResultsText, N.noResults, {
                                    [N.alt]: e
                                }),
                                children: t
                            })]
                        })
                    }, this.renderError = () => (0, a.jsxs)(M, {
                        children: [(0, a.jsx)("div", {
                            className: N.errorImage
                        }), (0, a.jsx)("div", {
                            className: i(N.emptyResultsText, N.errorMessage),
                            children: x.default.Messages.SEARCH_ERROR
                        })]
                    }), this.renderContent = () => {
                        let {
                            searchResults: e,
                            blockCount: t
                        } = this.props, {
                            totalResults: n,
                            isSearching: l,
                            isIndexing: s,
                            hasError: i
                        } = this.props.search;
                        return i ? this.renderError() : s ? this.renderIndexing() : l ? null : n > 0 ? (0, a.jsx)(T.default, {
                            search: this.props.search,
                            searchResults: e,
                            blockCount: t,
                            searchId: this.props.searchId,
                            renderEmbeds: this.props.renderEmbeds,
                            scrollTo: this.scrollTo
                        }) : this.renderNoResults()
                    }
                }
            }

            function j(e) {
                let {
                    searchId: t
                } = e;
                return (0, a.jsx)(R, {
                    searchId: t,
                    ...(0, u.useStateFromStoresObject)([E.default], () => ({
                        search: E.default.getResultsState(t),
                        searchAnalyticsId: E.default.getAnalyticsId(t),
                        searchType: E.default.getSearchType()
                    }), [t]),
                    ...(0, _.default)(t),
                    renderEmbeds: m.RenderEmbeds.useSetting(),
                    developerMode: m.DeveloperMode.useSetting(),
                    ...(0, u.useStateFromStoresObject)([p.default], () => {
                        let {
                            theme: e
                        } = p.default;
                        return {
                            theme: e
                        }
                    })
                })
            }