(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["73471"], {
        283383: function(e, t, n) {
            "use strict";
            e.exports = n.p + "a3ae1eb336230b986e2b.jpg"
        },
        681388: function(e, t, n) {
            "use strict";
            e.exports = n.p + "352ac6facb491ccbade2.jpg"
        },
        249705: function(e, t, n) {
            "use strict";
            e.exports = n.p + "251f0ec86481f9cab3cf.png"
        },
        518533: function(e, t, n) {
            "use strict";
            e.exports = n.p + "b9b0d61c8ad8b4c67ccf.png"
        },
        505406: function(e, t, n) {
            "use strict";
            e.exports = n.p + "0a01c3f1e9a1905a85c0.svg"
        },
        92440: function(e, t, n) {
            "use strict";
            e.exports = n.p + "6bc72dbd78c0bc7d199b.svg"
        },
        608108: function(e, t, n) {
            "use strict";
            e.exports = n.p + "7c8ce8acfec8f0df3ac3.svg"
        },
        794027: function(e, t, n) {
            "use strict";
            e.exports = n.p + "55b7a354cc2c75dc4b11.svg"
        },
        804621: function(e, t, n) {
            "use strict";
            e.exports = n.p + "54ca580fd4d4f935fd11.svg"
        },
        578299: function(e, t, n) {
            "use strict";
            e.exports = n.p + "06f557de76d06b1db825.svg"
        },
        522420: function(e, t, n) {
            "use strict";
            e.exports = n.p + "71d0243ce6c49e0112ea.svg"
        },
        371031: function(e, t, n) {
            "use strict";
            e.exports = n.p + "bacb0a99c70cc58ce8a6.svg"
        },
        674517: function(e, t, n) {
            "use strict";
            e.exports = n.p + "9d882ede81ee084f2929.svg"
        },
        989306: function(e, t, n) {
            "use strict";
            e.exports = n.p + "c563b974fd62dace82e2.svg"
        },
        786948: function(e, t, n) {
            "use strict";
            e.exports = n.p + "7d255b13622dffefb7f7.svg"
        },
        780810: function(e, t, n) {
            "use strict";
            e.exports = n.p + "33b84f5cd47bb4206c9a.svg"
        },
        695449: function(e, t, n) {
            "use strict";
            e.exports = n.p + "f22c6fd558a43f47d7e4.svg"
        },
        816428: function(e, t, n) {
            "use strict";
            e.exports = n.p + "16a2344f855adec72e1e.svg"
        },
        710672: function(e, t, n) {
            "use strict";
            e.exports = n.p + "a1d7e3a6eaf0f8585fca.svg"
        },
        789207: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("872717"),
                a = n("913144"),
                s = n("49111"),
                i = {
                    setGuildFilter(e) {
                        let {
                            guildFilter: t,
                            roleFilter: n,
                            everyoneFilter: l
                        } = e;
                        a.default.dispatch({
                            type: "SET_RECENT_MENTIONS_FILTER",
                            guildFilter: t,
                            roleFilter: n,
                            everyoneFilter: l
                        })
                    },
                    truncateMentions(e) {
                        a.default.dispatch({
                            type: "TRUNCATE_MENTIONS",
                            size: e
                        })
                    },
                    fetchRecentMentions(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.MAX_MENTIONS_PER_FETCH,
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                            i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3],
                            r = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4];
                        a.default.dispatch({
                            type: "LOAD_RECENT_MENTIONS",
                            guildId: n
                        }), l.default.get({
                            url: s.Endpoints.MENTIONS,
                            query: {
                                before: e,
                                limit: t,
                                guild_id: n,
                                roles: i,
                                everyone: r
                            },
                            retries: 2,
                            oldFormErrors: !0
                        }).then(t => {
                            let {
                                body: n
                            } = t;
                            a.default.dispatch({
                                type: "LOAD_RECENT_MENTIONS_SUCCESS",
                                messages: n,
                                isAfter: null != e,
                                hasMoreAfter: n.length >= s.MAX_MENTIONS_PER_FETCH
                            })
                        }, () => {
                            a.default.dispatch({
                                type: "LOAD_RECENT_MENTIONS_FAILURE"
                            })
                        })
                    },
                    deleteRecentMention(e) {
                        l.default.delete({
                            url: s.Endpoints.MENTIONS_MESSAGE_ID(e),
                            retries: 2,
                            oldFormErrors: !0
                        }), a.default.dispatch({
                            type: "RECENT_MENTION_DELETE",
                            id: e
                        })
                    },
                    setRecentMentionsStale() {
                        a.default.dispatch({
                            type: "SET_RECENT_MENTIONS_STALE"
                        })
                    }
                }
        },
        378438: function(e, t, n) {
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
                    return h
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
            });
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
                return S(e, t * r.SEARCH_PAGE_SIZE)
            }

            function E(e, t) {
                let n = s.default.getOffset(e);
                return S(e, n + t)
            }

            function S(e, t) {
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

            function h(e, t) {
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
        },
        167359: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var l = n("872717"),
                a = n("913144"),
                s = n("49111");
            let i = "".concat(s.STATUS_PAGE_ENDPOINT, "/api/v2/scheduled-maintenances"),
                r = "".concat(s.STATUS_PAGE_ENDPOINT, "/api/v2/incidents/unresolved.json");
            var o = {
                checkIncidents() {
                    Promise.all([l.default.get("".concat(i, "/active.json")), l.default.get(r)]).then(e => {
                        let [t, n] = e, [l] = t.body.scheduled_maintenances, [s] = n.body.incidents;
                        a.default.dispatch({
                            type: "STATUS_PAGE_INCIDENT",
                            incident: s || l
                        })
                    })
                },
                checkScheduledMaintenances() {
                    l.default.get("".concat(i, "/upcoming.json")).then(e => {
                        let [t] = e.body.scheduled_maintenances;
                        a.default.dispatch({
                            type: "STATUS_PAGE_SCHEDULED_MAINTENANCE",
                            maintenance: t
                        })
                    })
                },
                ackScheduledMaintenance() {
                    a.default.dispatch({
                        type: "STATUS_PAGE_SCHEDULED_MAINTENANCE_ACK"
                    })
                }
            }
        },
        518888: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                overrideSurvey: function() {
                    return u
                },
                surveyHide: function() {
                    return d
                },
                surveyFetch: function() {
                    return c
                }
            });
            var l = n("759843"),
                a = n("627929"),
                s = n("913144"),
                i = n("599110"),
                r = n("840707"),
                o = n("49111");

            function u(e) {
                s.default.dispatch({
                    type: "SURVEY_OVERRIDE",
                    id: e
                })
            }

            function d(e, t) {
                s.default.dispatch({
                    type: "SURVEY_HIDE",
                    key: e
                }), t ? i.default.track(o.AnalyticEvents.APP_NOTICE_CLOSED, {
                    notice_type: o.NoticeTypes.SURVEY,
                    survey_id: e,
                    dismissed: t
                }) : i.default.track(o.AnalyticEvents.APP_NOTICE_PRIMARY_CTA_OPENED, {
                    notice_type: o.NoticeTypes.SURVEY
                })
            }

            function c(e) {
                var t = {};
                return null != e && (t.survey_override = e), r.default.get({
                    url: o.Endpoints.USER_SURVEY,
                    query: t,
                    trackedActionData: {
                        event: l.NetworkActionNames.USER_SURVEY_FETCH,
                        properties: e => {
                            var t;
                            let n = null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.survey;
                            return (0, a.exact)({
                                key: null == n ? void 0 : n.key
                            })
                        }
                    }
                }).then(e => {
                    var t;
                    s.default.dispatch({
                        type: "SURVEY_FETCHED",
                        survey: null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.survey
                    })
                }, () => {
                    s.default.dispatch({
                        type: "SURVEY_FETCHED",
                        survey: null
                    })
                })
            }
        },
        590514: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Header: function() {
                    return P
                },
                EmptyStateCenter: function() {
                    return L
                },
                ItemsPopout: function() {
                    return x
                },
                default: function() {
                    return b
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("917351"),
                o = n.n(r),
                u = n("974667"),
                d = n("446674"),
                c = n("77078"),
                f = n("404118"),
                E = n("819689"),
                S = n("510889"),
                _ = n("699473"),
                h = n("393414"),
                T = n("161778"),
                p = n("42203"),
                N = n("377253"),
                I = n("957255"),
                m = n("600133"),
                A = n("471671"),
                g = n("822332"),
                R = n("945330"),
                C = n("599110"),
                O = n("659500"),
                M = n("49111"),
                D = n("782340"),
                y = n("466908");

            function v(e) {
                e.stopPropagation()
            }
            let P = e => {
                    let {
                        title: t,
                        children: n,
                        className: a
                    } = e;
                    return (0, l.jsxs)("div", {
                        className: i(a, y.header),
                        children: [null == t ? null : (0, l.jsx)(c.Heading, {
                            variant: "heading-md/medium",
                            children: t
                        }), n]
                    })
                },
                L = e => {
                    let {
                        msg: t,
                        image: n
                    } = e;
                    return (0, l.jsxs)("div", {
                        className: y.emptyPlaceholder,
                        children: [(0, l.jsx)("div", {
                            className: y.image,
                            style: {
                                backgroundImage: "url(".concat(n, ")")
                            }
                        }), (0, l.jsx)("div", {
                            className: y.body,
                            children: t
                        })]
                    })
                };
            class U extends a.PureComponent {
                renderJumpButton() {
                    let {
                        jumping: e
                    } = this.props;
                    return (0, l.jsxs)(c.Clickable, {
                        className: y.jumpButton,
                        onClick: this.handleClickJump,
                        children: [(0, l.jsx)("div", {
                            className: i(y.text, {
                                hidden: e
                            }),
                            children: D.default.Messages.JUMP
                        }), (0, l.jsx)(c.Spinner, {
                            type: c.Spinner.Type.PULSING_ELLIPSIS,
                            className: i(y.loading, {
                                [y.visible]: e
                            })
                        })]
                    })
                }
                renderCloseButton() {
                    let {
                        onCloseMessage: e,
                        canCloseAllMessages: t,
                        canManageMessages: n,
                        channel: a
                    } = this.props;
                    if (null == e) return null;
                    let s = t || n || null != a && a.isPrivate();
                    return s ? (0, l.jsx)(c.Button, {
                        look: c.Button.Looks.BLANK,
                        size: c.Button.Sizes.NONE,
                        onClick: this.handleClickClose,
                        children: (0, l.jsx)(R.default, {
                            className: y.closeIcon
                        })
                    }) : null
                }
                render() {
                    return (0, l.jsxs)("div", {
                        className: y.actionButtons,
                        children: [this.renderJumpButton(), this.renderCloseButton()]
                    })
                }
                constructor(...e) {
                    super(...e), this.handleClickJump = e => {
                        let {
                            jumpTo: t,
                            message: n
                        } = this.props;
                        t(n, e)
                    }, this.handleClickClose = e => {
                        let {
                            onCloseMessage: t,
                            message: n
                        } = this.props;
                        null != t && t(n, e)
                    }
                }
            }
            let F = d.default.connectStores([I.default], e => {
                let {
                    channel: t
                } = e;
                return {
                    canManageMessages: null != t && I.default.can(M.Permissions.MANAGE_MESSAGES, t)
                }
            })(U);

            function x(e) {
                let {
                    analyticsName: t,
                    items: n,
                    hasMore: s,
                    loading: r,
                    loadMore: f,
                    renderHeader: E,
                    renderEmptyState: _,
                    renderItem: h,
                    getProTip: p,
                    scrollerClassName: N,
                    className: I,
                    listName: R
                } = e, P = a.useRef(null), L = (0, S.default)(R, P), U = (0, d.useStateFromStores)([m.default], () => m.default.hasNotice()), F = (0, d.useStateFromStores)([A.default], () => A.default.windowSize());
                a.useEffect(() => {
                    C.default.track(M.AnalyticEvents.OPEN_POPOUT, {
                        type: t
                    })
                }, [t]), a.useEffect(() => {
                    function e() {
                        var e;
                        null === (e = P.current) || void 0 === e || e.scrollPageUp({
                            animate: !0
                        })
                    }

                    function t() {
                        var e;
                        null === (e = P.current) || void 0 === e || e.scrollPageDown({
                            animate: !0
                        })
                    }
                    return O.ComponentDispatch.subscribe(M.ComponentActions.SCROLL_PAGE_DOWN, t), O.ComponentDispatch.subscribe(M.ComponentActions.SCROLL_PAGE_UP, e), () => {
                        O.ComponentDispatch.unsubscribe(M.ComponentActions.SCROLL_PAGE_DOWN, t), O.ComponentDispatch.unsubscribe(M.ComponentActions.SCROLL_PAGE_UP, e)
                    }
                }, []);
                let x = a.useCallback(() => {
                        var e;
                        let t = null === (e = P.current) || void 0 === e ? void 0 : e.getScrollerState();
                        null != t && t.scrollHeight === t.scrollTop + t.offsetHeight && s && !r && (null == f || f())
                    }, [s, f, r]),
                    b = [],
                    G = !0;
                null == n ? b = [(0, l.jsx)("div", {
                    className: i(y.emptyPlaceholder, y.loadingPlaceholder),
                    children: (0, l.jsx)(c.Spinner, {})
                }, "spinner")] : 0 === n.length ? b.push((0, l.jsx)(a.Fragment, {
                    children: _(T.default.theme)
                }, "empty-state")) : (G = !1, b = [], o.each(n, e => {
                    b.push(...h(e))
                }));
                let k = null;
                null != n && n.length > 0 && null != f && (k = r ? (0, l.jsx)("div", {
                    className: y.loadingMore,
                    children: (0, l.jsx)(c.Spinner, {})
                }, "loading-more-after") : s ? (0, l.jsx)("div", {
                    className: y.hasMore,
                    children: (0, l.jsx)(c.Button, {
                        look: c.Button.Looks.FILLED,
                        color: c.Button.Colors.PRIMARY,
                        size: c.Button.Sizes.MAX,
                        onClick: f,
                        children: D.default.Messages.LOAD_MORE_MESSAGES
                    })
                }) : (0, l.jsx)("div", {
                    className: y.scrollingFooterWrap,
                    children: _(T.default.theme)
                }));
                let j = null == p ? void 0 : p(),
                    B = G && null != j ? (0, l.jsx)("div", {
                        className: y.footer,
                        children: (0, l.jsx)(g.default, {
                            style: {
                                width: "100%",
                                paddingTop: 10
                            },
                            children: j
                        })
                    }) : null,
                    w = {
                        maxHeight: F.height - 43 - 25
                    };
                U && (w.maxHeight -= 40);
                let H = null != f && s;
                return (0, l.jsx)("div", {
                    className: i(I, y.messagesPopoutWrap),
                    style: w,
                    onClick: v,
                    onDoubleClick: v,
                    "aria-label": e["aria-label"],
                    children: (0, l.jsxs)(c.HeadingLevel, {
                        component: E(),
                        children: [(0, l.jsxs)(c.AdvancedScroller, {
                            className: i(y.messagesPopout, N),
                            onScroll: H ? x : void 0,
                            ref: P,
                            children: [(0, l.jsx)(u.ListNavigatorProvider, {
                                navigator: L,
                                children: (0, l.jsx)(u.ListNavigatorContainer, {
                                    children: e => {
                                        let {
                                            ref: t,
                                            ...n
                                        } = e;
                                        return (0, l.jsx)("div", {
                                            ref: t,
                                            ...n,
                                            children: b
                                        })
                                    }
                                })
                            }), k]
                        }), B]
                    })
                })
            }

            function b(e) {
                let {
                    analyticsName: t,
                    onFetch: n,
                    channel: s,
                    messages: i,
                    hasMore: r,
                    loading: o,
                    loadMore: u,
                    onJump: c,
                    canCloseAllMessages: S = !1,
                    renderHeader: T,
                    renderEmptyState: I,
                    renderMessage: m,
                    getProTip: A,
                    scrollerClassName: g,
                    className: R,
                    onCloseMessage: C,
                    listName: O
                } = e, v = (0, d.useStateFromStores)([N.default], () => {
                    let e = null != s ? N.default.getMessages(s.id) : null;
                    return null != e && null != e.jumpTargetId && e.loadingMore && null == e.get(e.jumpTargetId)
                });

                function P(e, n) {
                    let {
                        id: l,
                        blocked: a,
                        author: s,
                        channel_id: i
                    } = e;
                    if (a) f.default.show({
                        title: D.default.Messages.UNBLOCK_TO_JUMP_TITLE,
                        body: D.default.Messages.UNBLOCK_TO_JUMP_BODY.format({
                            name: s.username
                        }),
                        confirmText: D.default.Messages.OKAY
                    });
                    else if (!v) {
                        let e = p.default.getChannel(i);
                        null != e && (E.default.trackJump(i, l, t), (0, h.transitionTo)(M.Routes.CHANNEL(e.getGuildId(), i, l))), null == c || c(n)
                    }
                }
                a.useEffect(() => {
                    n(s)
                }, [s, n]);
                let L = a.useMemo(() => null == i ? void 0 : i.map(e => ({
                    message: e,
                    channel: s
                })), [i, s]);
                return (0, l.jsx)(x, {
                    className: R,
                    scrollerClassName: g,
                    items: L,
                    loading: o,
                    analyticsName: t,
                    renderEmptyState: I,
                    renderHeader: T,
                    hasMore: r,
                    loadMore: u,
                    getProTip: A,
                    renderItem: function(e) {
                        let {
                            message: t,
                            channel: n
                        } = e;
                        if (null == t) return [];
                        if (null != m) return m(t, e => P(t, e));
                        let a = [];
                        return null == n ? [] : (a.push((0, l.jsxs)("div", {
                            className: y.messageGroupWrapper,
                            children: [(0, l.jsx)(_.default, {
                                className: y.messageGroupCozy,
                                message: t,
                                channel: n
                            }), (0, l.jsx)(F, {
                                channel: s,
                                message: t,
                                jumping: v,
                                canCloseAllMessages: S,
                                jumpTo: P,
                                onCloseMessage: C
                            })]
                        }, t.id)), a)
                    },
                    listName: O,
                    "aria-label": e["aria-label"]
                })
            }
        },
        425773: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getListboxOptionProps: function() {
                    return c
                },
                default: function() {
                    return E
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("77078"),
                o = n("782340"),
                u = n("544635");

            function d(e) {
                e.stopPropagation(), e.preventDefault()
            }

            function c(e, t, n) {
                return {
                    id: "".concat(e, "-").concat(t),
                    role: "option",
                    tabIndex: -1,
                    "aria-selected": n
                }
            }
            class f extends a.PureComponent {
                renderQuery(e) {
                    let {
                        query: t,
                        navId: n,
                        focusedIndex: a,
                        onSelectQuery: s,
                        onHighlightQuery: d,
                        hideQuery: f
                    } = this.props;
                    if (e || f) return null;
                    let E = -1 === a;
                    return (0, l.jsxs)(r.Clickable, {
                        className: i(u.queryContainer, {
                            [u.focused]: E
                        }),
                        ...c(n, -1, E),
                        onMouseEnter: d,
                        onClick: s,
                        children: [(0, l.jsx)("div", {
                            className: u.queryText,
                            children: o.default.Messages.SEARCH_FOR_VALUE.format({
                                value: t
                            })
                        }), (0, l.jsx)("div", {
                            className: u.queryShortcut,
                            "aria-hidden": !0,
                            children: (0, l.jsx)(r.KeyCombo, {
                                shortcut: "return",
                                dim: !0,
                                className: u.keyCombo
                            })
                        })]
                    })
                }
                renderResults(e) {
                    let {
                        numResults: t,
                        renderNoResults: n,
                        renderInitialState: l,
                        renderResult: a,
                        renderCustomResults: s
                    } = this.props;
                    if (e) return l();
                    if (0 === t) return n();
                    if (null != a) return Array.from({
                        length: t
                    }).map((e, t) => a(t));
                    if (null != s) return s();
                    throw Error("SearchResultsPopout.renderResults: Flow should never allow this...")
                }
                render() {
                    let {
                        query: e,
                        focusedIndex: t,
                        navId: n,
                        width: a
                    } = this.props, s = "" === e.trim();
                    return (0, l.jsxs)("div", {
                        className: u.container,
                        style: {
                            width: a
                        },
                        onMouseDown: d,
                        role: "listbox",
                        id: n,
                        tabIndex: -1,
                        "aria-activedescendant": "".concat(n, "-").concat(t),
                        children: [this.renderQuery(s), this.renderResults(s)]
                    })
                }
            }
            f.defaultProps = {
                renderInitialState: () => null,
                hideQuery: !1,
                width: 320
            };
            var E = f
        },
        954172: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Filter: function() {
                    return i
                },
                Answer: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("423149");

            function s(e, t) {
                let {
                    children: n
                } = e;
                return (0, l.jsx)("span", {
                    className: t,
                    children: n
                })
            }
            let i = e => s(e, a.searchFilter),
                r = e => s(e, a.searchAnswer)
        },
        756166: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var l = n("884691"),
                a = () => {
                    let e = l.useRef(!0);
                    l.useEffect(() => () => {
                        e.current = !1
                    }, []);
                    let t = l.useCallback(() => e.current, []);
                    return t
                }
        },
        976789: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var l = n("872717"),
                a = n("95410"),
                s = n("913144"),
                i = n("355025"),
                r = n("605250"),
                o = n("773336"),
                u = n("286235"),
                d = n("50885");
            let c = a.default.get("lastNonRequiredUpdateShown", Date.now()),
                f = new r.default("AutoUpdateManager");
            class E {
                destroy() {
                    clearInterval(this._checkInterval)
                }
                quitAndInstall() {
                    this.updateAvailable && (this.hasNativeUpdate ? null != this._bootstrapper ? this._bootstrapper.finishBootstrap() : d.default.send("QUIT_AND_INSTALL") : location.reload(!0))
                }
                async _requestNewUpdaterBootstrap() {
                    let e;
                    f.log("Bootstrapping new updater host...");
                    try {
                        await d.default.ensureModule("discord_updater_bootstrap"), e = d.default.requireModule("discord_updater_bootstrap"), this._bootstrapper = e
                    } catch (e) {
                        this._handleNativeUpdateNotAvailable();
                        return
                    }
                    try {
                        this._handleCheckingForUpdates(), await e.bootstrap(d.default.releaseChannel, "win"), this.updateAvailable = !0, this.hasNativeUpdate = !0, this._handleUpdateDownloaded(!0)
                    } catch (e) {
                        f.log("Failed to bootstrap new updater:", e), this._handleNativeUpdateNotAvailable(), u.default.captureException(e)
                    }
                }
                _emitCallbacks() {
                    this._callbacks.forEach(e => e(this.updateAvailable)), this._callbacks = []
                }
                constructor(e = 36e5) {
                    var t = this;
                    this.updateAvailable = !1, this.hasNativeUpdate = !1, this._callbacks = [], this._bootstrapper = null, this.checkForUpdates = function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        if (e || !t.hasNativeUpdate) {
                            if (o.isPlatformEmbedded) {
                                let e = "win32" === (0, o.getPlatformName)() && d.default.canBootstrapNewUpdater;
                                e ? t._requestNewUpdaterBootstrap() : d.default.send("CHECK_FOR_UPDATES")
                            } else t._handleNativeUpdateNotAvailable()
                        }
                        return new Promise(e => {
                            t.updateAvailable ? e(!0) : t._callbacks.push(e)
                        })
                    }, this._handleCheckingForUpdates = () => {
                        s.default.dispatch({
                            type: "CHECKING_FOR_UPDATES"
                        })
                    }, this._handleNativeUpdateNotAvailable = () => {
                        this._handleCheckingForUpdates(), l.default.get({
                            url: "".concat(location.protocol, "//").concat(location.host).concat("/assets/", "version.").concat(window.GLOBAL_ENV.RELEASE_CHANNEL, ".json"),
                            query: {
                                _: Date.now() / 1e3 / 60 / 5 | 0
                            },
                            oldFormErrors: !0
                        }).then(e => {
                            if (null == e.body || "aace71aea00ff41b27320df57c7ad4bf122ff035" === e.body.hash) return this._handleUpdateNotAvailable();
                            if (e.body.required || (0, i.probablyHasBuildOverride)()) return this._handleUpdateDownloaded(!1);
                            let t = "stable" === window.GLOBAL_ENV.RELEASE_CHANNEL ? 6048e5 : 864e5;
                            if (Date.now() - c > t) return a.default.set("lastNonRequiredUpdateShown", Date.now()), this._handleUpdateDownloaded(!1)
                        }, () => this._handleUpdateError())
                    }, this._handleUpdateNotAvailable = () => {
                        s.default.dispatch({
                            type: "UPDATE_NOT_AVAILABLE"
                        }), this._emitCallbacks()
                    }, this._handleUpdateAvailable = e => {
                        this.updateAvailable = !0, this.hasNativeUpdate = e, s.default.dispatch({
                            type: "UPDATE_AVAILABLE"
                        })
                    }, this._handleUpdateManually = () => {
                        this.updateAvailable = !0, this.hasNativeUpdate = !0, s.default.dispatch({
                            type: "UPDATE_MANUALLY"
                        })
                    }, this._handleUpdateError = e => {
                        this.updateAvailable = !1, s.default.dispatch({
                            type: "UPDATE_ERROR",
                            message: e
                        })
                    }, this._handleUpdateDownloaded = (e, t, n, l, a) => {
                        this._handleUpdateAvailable(e), s.default.dispatch({
                            type: "UPDATE_DOWNLOADED",
                            releaseNotes: t,
                            releaseName: n,
                            releaseDate: l,
                            updateURL: a
                        }), this._emitCallbacks()
                    }, o.isPlatformEmbedded && (d.default.on("CHECKING_FOR_UPDATES", this._handleCheckingForUpdates), d.default.on("UPDATE_NOT_AVAILABLE", this._handleNativeUpdateNotAvailable), d.default.on("UPDATE_AVAILABLE", () => this._handleUpdateAvailable(!0)), d.default.on("UPDATE_ERROR", this._handleUpdateError), d.default.on("UPDATE_DOWNLOADED", () => this._handleUpdateDownloaded(!0)), d.default.on("UPDATE_MANUALLY", this._handleUpdateManually)), s.default.wait(() => {
                        this.checkForUpdates()
                    }), this._checkInterval = setInterval(this.checkForUpdates, e)
                }
            }
        },
        619436: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useChannelNotificationRadioItems: function() {
                    return c
                },
                default: function() {
                    return f
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("446674"),
                s = n("77078"),
                i = n("519705"),
                r = n("282109"),
                o = n("49111"),
                u = n("782340");

            function d(e) {
                var t, n;
                switch (e.type) {
                    case o.ChannelTypes.GUILD_VOICE:
                        return null;
                    case o.ChannelTypes.GUILD_STAGE_VOICE:
                        ;
                        return t = e, [{
                            setting: o.UserNotificationSettings.NULL,
                            label: null != t.parent_id ? u.default.Messages.FORM_LABEL_DEFAULT_CATEGORY : u.default.Messages.FORM_LABEL_DEFAULT
                        }, {
                            setting: o.UserNotificationSettings.ONLY_MENTIONS,
                            label: u.default.Messages.FORM_LABEL_LIVE_STAGES_ONLY
                        }, {
                            setting: o.UserNotificationSettings.NO_MESSAGES,
                            label: u.default.Messages.FORM_LABEL_NOTHING
                        }];
                    default:
                        ;
                        return n = e, [{
                            setting: o.UserNotificationSettings.NULL,
                            label: null != n.parent_id ? u.default.Messages.FORM_LABEL_DEFAULT_CATEGORY : u.default.Messages.FORM_LABEL_DEFAULT
                        }, {
                            setting: o.UserNotificationSettings.ALL_MESSAGES,
                            label: u.default.Messages.FORM_LABEL_ALL_MESSAGES
                        }, {
                            setting: o.UserNotificationSettings.ONLY_MENTIONS,
                            label: u.default.Messages.FORM_LABEL_ONLY_MENTIONS.format()
                        }, {
                            setting: o.UserNotificationSettings.NO_MESSAGES,
                            label: u.default.Messages.FORM_LABEL_NOTHING
                        }]
                }
            }

            function c(e) {
                let t = e.getGuildId(),
                    n = e.id,
                    c = (0, a.useStateFromStores)([r.default], () => r.default.getChannelOverrides(t)[n], [t, n]),
                    f = (0, a.useStateFromStores)([r.default], () => {
                        let n = o.UserNotificationSettings.NULL;
                        return null != e.parent_id && (n = r.default.getChannelMessageNotifications(t, e.parent_id)), n !== o.UserNotificationSettings.NULL ? n : r.default.getMessageNotifications(t)
                    }, [t, e.parent_id]),
                    E = (0, a.useStateFromStores)([r.default], () => r.default.getNewForumThreadsCreated(e)),
                    S = null == c ? o.UserNotificationSettings.NULL : c.message_notifications,
                    _ = d(e);
                return null == _ ? null : (0, l.jsxs)(l.Fragment, {
                    children: [e.isForumLikeChannel() ? (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(s.MenuCheckboxItem, {
                            id: "new-forum-threads-created",
                            label: u.default.Messages.FORUM_NEW_POSTS_CREATED,
                            checked: E,
                            action: () => i.default.setForumThreadsCreated(e, !E)
                        }), (0, l.jsx)(s.MenuSeparator, {})]
                    }) : null, _.map(e => {
                        let {
                            setting: a,
                            label: r
                        } = e;
                        return (0, l.jsx)(s.MenuRadioItem, {
                            group: "channel-notifications",
                            id: "".concat(a),
                            label: r,
                            subtext: a === o.UserNotificationSettings.NULL ? function(e) {
                                switch (e) {
                                    case o.UserNotificationSettings.ALL_MESSAGES:
                                        return u.default.Messages.FORM_LABEL_ALL_MESSAGES;
                                    case o.UserNotificationSettings.ONLY_MENTIONS:
                                        return u.default.Messages.FORM_LABEL_ONLY_MENTIONS.format();
                                    case o.UserNotificationSettings.NO_MESSAGES:
                                        return u.default.Messages.FORM_LABEL_NOTHING;
                                    case o.UserNotificationSettings.NULL:
                                    default:
                                        return
                                }
                            }(f) : void 0,
                            action: () => {
                                var e;
                                return e = a, void(null != t && i.default.updateChannelOverrideSettings(t, n, {
                                    message_notifications: e
                                }))
                            },
                            checked: a === S
                        }, a)
                    })]
                })
            }

            function f(e) {
                var t, n;
                let i = c(e),
                    f = (0, a.useStateFromStores)([r.default], () => r.default.resolvedMessageNotifications(e), [e]),
                    E = (0, a.useStateFromStores)([r.default], () => r.default.getChannelOverrides(e.guild_id)[e.id], [e.guild_id, e.id]),
                    S = null == E ? o.UserNotificationSettings.NULL : E.message_notifications,
                    _ = S === o.UserNotificationSettings.NULL && e.isGuildStageVoice() ? u.default.Messages.FORM_LABEL_ONLY_MENTIONS.format() : null === (n = d(e)) || void 0 === n ? void 0 : null === (t = n.find(e => {
                        let {
                            setting: t
                        } = e;
                        return t === f
                    })) || void 0 === t ? void 0 : t.label;
                return null != i ? (0, l.jsx)(s.MenuItem, {
                    id: "channel-notifications",
                    label: u.default.Messages.NOTIFICATION_SETTINGS,
                    subtext: _,
                    children: i
                }) : null
            }
        },
        64016: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("446674"),
                s = n("77078"),
                i = n("755624"),
                r = n("263024"),
                o = n("782340");

            function u(e, t) {
                let n = (0, a.useStateFromStores)([i.default], () => i.default.hasJoined(e.id));
                return n ? (0, l.jsx)(s.MenuItem, {
                    id: "leave-thread",
                    label: e.isForumPost() ? o.default.Messages.LEAVE_FORUM_POST : o.default.Messages.LEAVE_THREAD,
                    action: () => r.default.leaveThread(e, t)
                }) : (0, l.jsx)(s.MenuItem, {
                    id: "join-thread",
                    label: e.isForumPost() ? o.default.Messages.JOIN_FORUM_POST : o.default.Messages.JOIN_THREAD,
                    action: () => r.default.joinThread(e, t)
                })
            }
        },
        255228: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("866227"),
                s = n.n(a),
                i = n("446674"),
                r = n("77078"),
                o = n("319165"),
                u = n("755624"),
                d = n("263024"),
                c = n("531674"),
                f = n("782340");

            function E(e) {
                let [t, n, a] = (0, i.useStateFromStoresArray)([u.default], () => [u.default.isMuted(e.id), u.default.getMuteConfig(e.id), u.default.hasJoined(e.id)]), E = (0, o.useMutedUntilText)(n);

                function S(t) {
                    d.default.setNotificationSettings(e, {
                        muted: t
                    })
                }
                return a ? t ? (0, l.jsx)(r.MenuItem, {
                    id: "unmute-channel",
                    label: e.isForumPost() ? f.default.Messages.UNMUTE_FORUM_POST : f.default.Messages.UNMUTE_THREAD,
                    subtext: E,
                    action: () => S(!1)
                }) : (0, l.jsx)(r.MenuItem, {
                    id: "mute-channel",
                    label: e.isForumPost() ? f.default.Messages.MUTE_FORUM_POST : f.default.Messages.MUTE_THREAD,
                    action: () => S(!0),
                    children: (0, c.getMuteTimes)().map(t => {
                        let {
                            value: n,
                            label: a
                        } = t;
                        return (0, l.jsx)(r.MenuItem, {
                            id: "".concat(n),
                            label: a,
                            action: () => (function(t) {
                                let n = t > 0 ? s().add(t, "second").toISOString() : null;
                                d.default.setNotificationSettings(e, {
                                    muted: !0,
                                    mute_config: {
                                        selected_time_window: t,
                                        end_time: n
                                    }
                                })
                            })(n)
                        }, n)
                    })
                }) : (0, l.jsx)(r.MenuItem, {
                    id: "mute-disabled",
                    label: e.isForumPost() ? f.default.Messages.MUTE_FORUM_POST : f.default.Messages.MUTE_THREAD,
                    disabled: !0
                })
            }
        },
        889293: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("446674"),
                a = n("913144");
            let s = [];
            class i extends l.default.Store {
                getEligibleGuildsForNagActivate() {
                    return s
                }
            }
            i.displayName = "CreatorMonetizationMarketingStore";
            var r = new i(a.default, {
                CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY_FETCH_SUCCESS: function(e) {
                    let {
                        eligibleGuilds: t
                    } = e;
                    s = t
                }
            })
        },
        336696: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var l = (0, n("862205").createExperiment)({
                kind: "user",
                id: "2021-12_inferno_spam_redaction",
                label: "Inferno Spam Redaction",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Allow guild channel messages from spammers to be collapsed",
                    config: {
                        enabled: !0
                    }
                }]
            })
        },
        376152: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchDropsEligibility: function() {
                    return r
                },
                fetchCodePlatformAvailability: function() {
                    return o
                },
                claimDropsRewardCode: function() {
                    return u
                },
                fetchDropsUserStatus: function() {
                    return d
                },
                unenrollDropsUser: function() {
                    return c
                },
                fetchEnrolledUser: function() {
                    return f
                },
                enrollDropsUser: function() {
                    return E
                },
                sendHeartbeat: function() {
                    return S
                },
                fetchProgress: function() {
                    return _
                }
            });
            var l = n("872717"),
                a = n("913144"),
                s = n("373469"),
                i = n("49111");
            let r = async e => {
                let t = !1;
                try {
                    let n = await l.default.get({
                        url: i.Endpoints.DROPS_ELIGIBILITY,
                        query: {
                            drops_quest_id: e
                        }
                    });
                    t = n.body.eligible
                } catch (e) {
                    t = !1
                }
                a.default.dispatch({
                    type: "DROPS_ELIGIBILITY_FETCH_SUCCESS",
                    isEligible: t,
                    dropsQuestId: e
                })
            }, o = async e => {
                let t = [];
                try {
                    let n = await l.default.get({
                        url: i.Endpoints.DROPS_PLATFORM_AVAILABILITY,
                        query: {
                            drops_quest_id: e
                        }
                    });
                    t = n.body.available_platforms
                } catch (e) {
                    t = []
                }
                a.default.dispatch({
                    type: "DROPS_PLATFORM_AVAILABILITY_SUCCESS",
                    availablePlatforms: t
                })
            }, u = async (e, t) => {
                try {
                    let n = await l.default.post({
                        url: i.Endpoints.DROPS_CLAIM_REWARD_CODE,
                        query: {
                            drops_quest_id: e,
                            platform: t
                        }
                    });
                    return a.default.dispatch({
                        type: "DROPS_REWARD_CODE_CLAIM_SUCCESS",
                        rewardCode: n.body.code
                    }), n.body.code
                } catch (e) {
                    throw e
                }
            }, d = async () => {
                try {
                    let e = await l.default.get({
                        url: i.Endpoints.DROPS_USER_STATUS
                    });
                    a.default.dispatch({
                        type: "DROPS_USER_STATUS_FETCH_SUCCESS",
                        codes: e.body
                    })
                } catch (e) {
                    a.default.dispatch({
                        type: "DROPS_USER_STATUS_FETCH_FAILURE"
                    })
                }
            }, c = async e => {
                await l.default.delete({
                    url: i.Endpoints.DROPS_ENROLL_USER,
                    query: {
                        drops_quest_id: e
                    }
                }), a.default.dispatch({
                    type: "DROPS_UNENROLL_USER",
                    dropsQuestId: e
                }), await d()
            }, f = async e => {
                let t = await l.default.get({
                    url: i.Endpoints.DROPS_ENROLL_USER,
                    query: {
                        drops_quest_id: e
                    }
                });
                await a.default.dispatch({
                    type: "DROPS_ENROLLED_USER_FETCH_SUCCESS",
                    enrolledUser: t.body.user,
                    isEnrolled: t.body.enrolled,
                    dropsQuestId: e
                })
            }, E = async e => {
                await l.default.post({
                    url: i.Endpoints.DROPS_ENROLL_USER,
                    query: {
                        drops_quest_id: e
                    }
                }), a.default.dispatch({
                    type: "DROPS_ENROLL_SUCCESS"
                })
            }, S = async (e, t, n) => {
                let r = s.default.getViewerIds(t);
                try {
                    let s = await l.default.post({
                        url: i.Endpoints.DROPS_HEARTBEAT(e),
                        query: {
                            stream_key: t,
                            application_id: n,
                            viewer_count: r.length
                        },
                        retries: 2
                    });
                    a.default.dispatch({
                        type: "DROPS_HEARTBEAT_SUCCESS",
                        dropsQuestId: e,
                        completed: s.body.completed,
                        progress: s.body.progress
                    })
                } catch (t) {
                    a.default.dispatch({
                        type: "DROPS_HEARTBEAT_FAILURE",
                        dropsQuestId: e,
                        statusCode: null == t ? void 0 : t.status
                    })
                }
            }, _ = async e => {
                try {
                    let t = await l.default.get({
                        url: i.Endpoints.DROPS_PROGRESS(e)
                    });
                    a.default.dispatch({
                        type: "DROPS_FETCH_PROGRESS_SUCCESS",
                        dropsQuestId: e,
                        completed: t.body.completed,
                        progress: t.body.progress
                    })
                } catch (t) {
                    a.default.dispatch({
                        type: "DROPS_FETCH_PROGRESS_FAILURE",
                        dropsQuestId: e
                    })
                }
            }
        },
        411511: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                DROPS_PLATFORMS: function() {
                    return a
                },
                DROPS_ELIGIBILITY_SEEN_GAMES_LOOKBACK_SECONDS: function() {
                    return s
                },
                DropsFaqUrl: function() {
                    return i
                },
                PartnerGame: function() {
                    return r
                },
                TooltipActions: function() {
                    return o
                },
                PartnerGameNameToSearchTermMapping: function() {
                    return u
                },
                noticeBannerDateFormat: function() {
                    return d
                },
                FORTNITE_QUEST_ID: function() {
                    return c
                },
                DROPS_GAMES: function() {
                    return f
                }
            });
            var l = n("782340");
            let a = ["XBOX", "PLAYSTATION", "SWITCH", "PC"],
                s = 2592e4,
                i = "https://support.discord.com/hc/en-us/articles/9146392276375",
                r = {
                    FORTNITE: "FORTNITE"
                },
                o = {
                    STREAM_CTA: "STREAM_CTA",
                    LOADING_INITIAL_PROGRESS: "LOADING_INITIAL_PROGRESS",
                    TRACK_PROGRESS: "TRACK_PROGRESS",
                    QUEST_COMPLETION: "QUEST_COMPLETION"
                },
                u = {
                    FORTNITE: ["Fortnite"]
                },
                d = "YYYY-MM-DD HH:mm",
                c = "1022633972510752774",
                f = {
                    [r.FORTNITE]: {
                        title: "Fortnite",
                        gameSearchTerm: u[r.FORTNITE],
                        assets: {
                            iconSrc: n("681388"),
                            tooltipSrc: n("249705"),
                            rewardSrc: n("283383")
                        },
                        dropsQuestId: c,
                        dropsGameId: "432980957394370572",
                        endDate: "2023-05-22 23:59",
                        finalClaimDate: "2023-5-29 08:00",
                        dropsNoticeBannerDurationDays: 3,
                        articleUrl: i,
                        messages: {
                            claimTip: () => l.default.Messages.FORTNITE_REDEMPTION_TIP.format({
                                learnMoreUrl: "https://discord.com/blog/fortnite-quest"
                            }),
                            giftInfo: () => l.default.Messages.FORTNITE_GIFT_INVENTORY_INFO.format({
                                guardOutfitName: l.default.Messages.FORNITE_GUARD_OUTPUT,
                                rewardName: l.default.Messages.FORTNITE_REWARD_NAME
                            }),
                            enrollmentTooltip: e => l.default.Messages.FORTNITE_DROPS_ELIGIBILITY_ENROLLMENT_TOOLTIP.format({
                                rewardName: l.default.Messages.FORTNITE_REWARD_NAME,
                                streamLengthRequirement: e
                            }),
                            completionTooltip: e => l.default.Messages.FORTNITE_DROPS_COMPLETION_TOOLTIP.format({
                                rewardName: l.default.Messages.FORTNITE_REWARD_NAME,
                                streamLengthRequirement: e
                            })
                        }
                    }
                }
        },
        931115: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                DropsForGoLiveFortniteExperiment: function() {
                    return a
                }
            });
            var l = n("862205");
            let a = (0, l.createExperiment)({
                kind: "user",
                id: "2023-05_go_live_quest_fortnite",
                label: "Fortnite: Go Live Quest",
                defaultConfig: {
                    dropsEnabled: !1,
                    streamLengthRequirement: 0,
                    viewerCountRequirement: 0,
                    autoEnrollment: !1,
                    showUnenroll: !1
                },
                treatments: [{
                    id: 1,
                    label: "15 min stream req + auto enrollment",
                    config: {
                        dropsEnabled: !0,
                        streamLengthRequirement: 15,
                        viewerCountRequirement: 1,
                        autoEnrollment: !0,
                        showUnenroll: !1
                    }
                }, {
                    id: 99,
                    label: "2 minute stream req + auto enrollment",
                    config: {
                        dropsEnabled: !0,
                        streamLengthRequirement: 2,
                        viewerCountRequirement: 1,
                        autoEnrollment: !0,
                        showUnenroll: !0
                    }
                }]
            })
        },
        180273: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            });
            var l = n("866227"),
                a = n.n(l),
                s = n("446674"),
                i = n("862337"),
                r = n("913144"),
                o = n("374014"),
                u = n("271938"),
                d = n("568307"),
                c = n("376152"),
                f = n("579565"),
                E = n("411511");
            let S = null,
                _ = null,
                h = {},
                T = {},
                p = E.TooltipActions.LOADING_INITIAL_PROGRESS,
                N = new i.Timeout,
                I = {
                    completed: !1,
                    initialProgressFetched: !1,
                    interrupted: !1,
                    retries: 0
                },
                m = e => {
                    let {
                        dropsQuestId: t,
                        streamKey: n,
                        game: l,
                        completed: a,
                        gameTitle: s
                    } = I;
                    !(null == t || null == s || a || null == l || null == n || N.isStarted()) && (e ? (0, c.sendHeartbeat)(t, n, l.pid) : N.start(6e4, () => {
                        (0, c.sendHeartbeat)(t, n, l.pid)
                    }))
                },
                A = e => {
                    I.retries = 0, I.completed = e.completed, I.initialProgressFetched = !0, I.progress = e.progress, I.lastCheckedAt = a.now(), p = I.completed ? E.TooltipActions.QUEST_COMPLETION : E.TooltipActions.TRACK_PROGRESS
                },
                g = (e, t, n) => {
                    (!I.completed || e.dropsQuestId !== I.dropsQuestId) && (I.game = t, I.dropsQuestId = e.dropsQuestId, I.gameTitle = e.title, I.completed = !1, I.interrupted = !1, I.streamKey = n, I.retries = 0, I.lastCheckedAt = a.now(), N.start(5e3, () => m(!0)))
                };
            class R extends s.default.Store {
                initialize() {
                    this.waitFor(d.default)
                }
                getActivityPanelTooltipAction() {
                    return p
                }
                getIsPartnerGameQuestComplete(e) {
                    var t;
                    let n = (0, f.getDrop)(e);
                    if (null == n || null == _) return !1;
                    let l = !!(null === (t = _[n.dropsQuestId]) || void 0 === t ? void 0 : t.completed_at),
                        a = I.completed && I.gameTitle === n.title || l;
                    return a
                }
                get serverEligibleByQuestIds() {
                    return h
                }
                get platformAvailability() {
                    return S
                }
                get userStatus() {
                    return _
                }
                get activityPanelTooltipAction() {
                    return p
                }
                get enrolledDropsByQuestId() {
                    return T
                }
                get hasInitialProgressFetched() {
                    return I.initialProgressFetched
                }
                get isCurrentQuestCompleted() {
                    return I.completed
                }
                get isCurrentQuestInterrupted() {
                    return I.interrupted
                }
                get currentDropQuestGameTitle() {
                    return I.gameTitle
                }
                get currentDropQuestStreamProgress() {
                    let e = I.progress;
                    if (null == e || null == e.steps || 0 === e.steps.length) return 0;
                    let t = e.steps.find(e => "stream_length" === e.name);
                    return null == t ? 0 : t.percent
                }
            }
            R.displayName = "DropsStore";
            var C = new R(r.default, {
                DROPS_ELIGIBILITY_FETCH_SUCCESS: e => {
                    h[e.dropsQuestId] = e.isEligible
                },
                DROPS_PLATFORM_AVAILABILITY_SUCCESS: e => {
                    S = e.availablePlatforms.filter(e => E.DROPS_PLATFORMS.includes(e))
                },
                DROPS_USER_STATUS_FETCH_SUCCESS: e => {
                    var t;
                    _ = null !== (t = e.codes) && void 0 !== t ? t : {}
                },
                DROPS_USER_STATUS_FETCH_FAILURE: e => {
                    _ = {}
                },
                DROPS_ENROLLED_USER_FETCH_SUCCESS: e => {
                    T[e.dropsQuestId] = {
                        isEnrolled: e.isEnrolled,
                        enrolledUser: e.enrolledUser
                    }
                },
                DROPS_FETCH_PROGRESS_SUCCESS: A,
                DROPS_FETCH_PROGRESS_FAILURE: e => {
                    !I.initialProgressFetched && (I.initialProgressFetched = !0, p = E.TooltipActions.STREAM_CTA)
                },
                DROPS_HEARTBEAT_SUCCESS: e => {
                    A(e), h[e.dropsQuestId] = !0, m()
                },
                DROPS_HEARTBEAT_FAILURE: e => {
                    let {
                        dropsQuestId: t,
                        statusCode: n
                    } = e;
                    if (I.completed = !1, I.initialProgressFetched = !0, I.lastCheckedAt = a.now(), 429 === n && 0 === I.retries) {
                        I.retries = I.retries + 1, m();
                        return
                    }
                    p = E.TooltipActions.STREAM_CTA, 403 === n ? h[t] = !1 : I.interrupted = !0
                },
                DROPS_UNENROLL_USER: e => {
                    _ = null, h = {
                        ...h
                    }, delete h[e.dropsQuestId], T = {
                        ...T
                    }, delete T[e.dropsQuestId], I.dropsQuestId === e.dropsQuestId && (I = {
                        completed: !1,
                        initialProgressFetched: !1,
                        interrupted: !1,
                        retries: 0
                    })
                },
                STREAM_CLOSE: () => {
                    I.completed && (p = E.TooltipActions.QUEST_COMPLETION), I.interrupted = !1, I.retries = 0, N.stop()
                },
                STREAM_START: function(e) {
                    var t;
                    let {
                        streamType: n,
                        guildId: l,
                        channelId: a,
                        pid: s
                    } = e, i = (0, o.encodeStreamKey)({
                        streamType: n,
                        guildId: l,
                        channelId: a,
                        ownerId: u.default.getId()
                    });
                    if (null == s) return;
                    let S = d.default.getGameForPID(s);
                    if (null == S) return;
                    let _ = Object.values(E.DROPS_GAMES).find(e => e.gameSearchTerm.find(e => {
                        var t;
                        return e.toLowerCase() === (null === (t = S.name) || void 0 === t ? void 0 : t.toLowerCase())
                    }));
                    if (null == _ || (0, f.getDropExpired)(_)) return;
                    let h = null === (t = (0, f.getDropsExperimentForDrop)(_)) || void 0 === t ? void 0 : t.getCurrentConfig({
                        location: "1"
                    }, {
                        autoTrackExposure: !1
                    });
                    if (null == h || !h.dropsEnabled) return;
                    let p = h.autoEnrollment;
                    null != T[_.dropsQuestId] && T[_.dropsQuestId].isEnrolled || p ? g(_, S, i) : r.default.wait(async () => {
                        var e;
                        await (0, c.fetchEnrolledUser)(_.dropsQuestId), (null === (e = T[_.dropsQuestId]) || void 0 === e ? void 0 : e.isEnrolled) && g(_, S, i)
                    })
                },
                LOGOUT: function() {
                    h = {}, T = {}, _ = {}, N.stop()
                }
            })
        },
        579565: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getDropsExperiment: function() {
                    return c
                },
                getDropsExperimentForDrop: function() {
                    return f
                },
                doesGameTitleMatchList: function() {
                    return E
                },
                getEligibleGameLastSeenStartTimeSeconds: function() {
                    return S
                },
                isDropGameDetected: function() {
                    return _
                },
                getEligibilityByRunningGameDetection: function() {
                    return h
                },
                getShowDropsNoticeBanner: function() {
                    return p
                },
                getShowDropsEndedIncompleteBanner: function() {
                    return N
                },
                getDropExpired: function() {
                    return I
                },
                getDrop: function() {
                    return m
                },
                getDropByQuestId: function() {
                    return A
                },
                getDropsPartnerGameNameByQuestId: function() {
                    return g
                },
                getPlatformLabel: function() {
                    return R
                }
            });
            var l = n("866227"),
                a = n.n(l),
                s = n("845579"),
                i = n("546463"),
                r = n("568307"),
                o = n("931115"),
                u = n("411511"),
                d = n("782340");

            function c(e) {
                let t = m(e);
                return null == t ? null : f(t)
            }

            function f(e) {
                if (e.dropsQuestId === u.FORTNITE_QUEST_ID) return o.DropsForGoLiveFortniteExperiment;
                return null
            }

            function E(e, t) {
                if (null == e) return !1;
                let n = i.default.getGameByName(e);
                return !!(null != n && t.some(e => {
                    var t;
                    return e.toLowerCase() === (null == n ? void 0 : null === (t = n.name) || void 0 === t ? void 0 : t.toLowerCase())
                })) || !1
            }

            function S() {
                return Math.floor(Date.now() / 1e3) - u.DROPS_ELIGIBILITY_SEEN_GAMES_LOOKBACK_SECONDS
            }

            function _(e, t, n) {
                var l, a, s, i;
                let r = m(e);
                if (null == r) return !1;
                let o = (l = t, a = u.PartnerGameNameToSearchTermMapping[e], null !== (s = l.find(e => E(e.name, a))) && void 0 !== s ? s : null);
                if (null != o) {
                    ;
                    let e = null !== (i = null == o ? void 0 : o.lastLaunched) && void 0 !== i ? i : 0;
                    return n <= o.lastFocused || 1e3 * n <= e
                }
                return !1
            }

            function h(e) {
                let t = r.default.getGamesSeen(!1);
                return _(e, t, S())
            }

            function T(e, t) {
                let {
                    endDate: n
                } = e, l = a(), s = a(n, u.noticeBannerDateFormat), i = a(l.clone().add(e.dropsNoticeBannerDurationDays, "days").format(u.noticeBannerDateFormat)), r = s.isSameOrBefore(i), o = s.isBefore(l, "minute");
                return r && (t && !o || !t && o)
            }

            function p(e) {
                var t;
                let n = m(e);
                if (null == n || !(null === (t = c(e)) || void 0 === t ? void 0 : t.getCurrentConfig({
                        location: "1"
                    }, {
                        autoTrackExposure: !1
                    }).dropsEnabled)) return !1;
                let l = s.DropsOptedOut.getSetting(),
                    a = T(n, !0);
                return !l && a
            }

            function N(e) {
                var t, n;
                let l = m(e);
                if (null == l || !(null === (n = c(e)) || void 0 === n ? void 0 : null === (t = n.getCurrentConfig({
                        location: "2"
                    }, {
                        autoTrackExposure: !1
                    })) || void 0 === t ? void 0 : t.dropsEnabled)) return !1;
                let a = s.DropsOptedOut.getSetting(),
                    i = T(l, !1);
                return I(l) && !a && i
            }

            function I(e) {
                let {
                    endDate: t
                } = e, n = a(t, "YYYY-MM-DD HH:mm"), l = a();
                return l > n
            }

            function m(e) {
                let t = u.DROPS_GAMES[e];
                return t
            }

            function A(e) {
                let t = Object.values(u.DROPS_GAMES).find(t => t.dropsQuestId === e);
                return t
            }

            function g(e) {
                let t = Object.keys(u.DROPS_GAMES).find(t => u.DROPS_GAMES[t].dropsQuestId === e);
                return t
            }

            function R(e) {
                switch (e) {
                    case "SWITCH":
                        return d.default.Messages.DROPS_PLATFORM_SWITCH;
                    case "PC":
                        return d.default.Messages.DROPS_PLATFORM_PC;
                    case "PLAYSTATION":
                        return d.default.Messages.DROPS_PLATFORM_PLAYSTATION;
                    case "XBOX":
                        return d.default.Messages.DROPS_PLATFORM_XBOX;
                    default:
                        return ""
                }
            }
        },
        875037: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("862205");
            let a = (0, l.createExperiment)({
                kind: "user",
                id: "2023-08_guild_usage_survey",
                label: "Guild Usage Survey",
                defaultConfig: {
                    showSurvey: !1
                },
                treatments: [{
                    id: 1,
                    label: "show survey nag bar",
                    config: {
                        showSurvey: !0
                    }
                }]
            });
            var s = a
        },
        957825: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("446674"),
                s = n("77078"),
                i = n("531674"),
                r = n("619436"),
                o = n("513472"),
                u = n("305961");

            function d(e) {
                let {
                    channel: t,
                    closePopout: n,
                    onSelect: d,
                    navId: c,
                    label: f,
                    location: E,
                    includeGuildMute: S
                } = e, _ = (0, a.useStateFromStores)([u.default], () => u.default.getGuild(t.guild_id)), h = (0, o.default)(_);
                return (0, l.jsxs)(s.Menu, {
                    navId: c,
                    onClose: n,
                    "aria-label": f,
                    onSelect: d,
                    children: [(0, l.jsx)(s.MenuGroup, {
                        children: (0, i.default)(t, E)
                    }), S ? (0, l.jsx)(s.MenuGroup, {
                        children: h
                    }) : null, (0, l.jsx)(s.MenuGroup, {
                        children: (0, r.useChannelNotificationRadioItems)(t)
                    })]
                })
            }
        },
        539938: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                handleDoubleClick: function() {
                    return A
                },
                default: function() {
                    return O
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("414456"),
                s = n.n(a),
                i = n("394846"),
                r = n("446674"),
                o = n("812204"),
                u = n("685665"),
                d = n("311197"),
                c = n("92790"),
                f = n("697218"),
                E = n("664336"),
                S = n("773336"),
                _ = n("50885"),
                h = n("836056"),
                T = n("922953"),
                p = n("879035"),
                N = n("49111"),
                I = n("724210"),
                m = n("122693");
            async function A() {
                if ((0, S.isMac)() && S.isPlatformEmbedded) {
                    var e, t, n;
                    let l = null !== (n = await (null === (e = (t = window.DiscordNative.remoteApp).getDefaultDoubleClickAction) || void 0 === e ? void 0 : e.call(t))) && void 0 !== n ? n : "Maximize";
                    "Minimize" === l ? _.default.minimize() : "Maximize" === l && _.default.maximize()
                }
            }

            function g(e) {
                let {
                    children: t,
                    className: n,
                    channelId: a,
                    guildId: s,
                    innerClassname: o,
                    transparent: u = !1,
                    toolbar: S,
                    mobileToolbar: _,
                    "aria-label": N,
                    "aria-labelledby": I,
                    scrollable: g,
                    role: R,
                    hideSearch: C
                } = e, O = (0, r.useStateFromStores)([f.default], () => f.default.getCurrentUser()), M = (null == O ? void 0 : O.isStaff()) || (null == O ? void 0 : O.isStaffPersonal()) || !1;
                return (0, l.jsx)(E.default, {
                    className: n,
                    innerClassName: o,
                    toolbar: function() {
                        if (null == S) return null;
                        let e = null != a && !C;
                        return i.isMobile ? _ : (0, l.jsxs)(l.Fragment, {
                            children: [S, e ? (0, l.jsx)(c.default, {
                                className: m.search
                            }, null != s ? s : a) : null, (0, l.jsx)(p.default, {}), (0, l.jsx)(d.default, {}), M ? (0, l.jsx)(T.default, {}) : (0, l.jsx)(h.default, {})]
                        })
                    }(),
                    transparent: u,
                    onDoubleClick: A,
                    "aria-label": N,
                    "aria-labelledby": I,
                    role: R,
                    scrollable: g,
                    children: t
                })
            }

            function R(e) {
                let {
                    children: t,
                    className: n,
                    "aria-label": a,
                    "aria-labelledby": s,
                    role: i
                } = e;
                return (0, l.jsx)(E.default, {
                    className: n,
                    onDoubleClick: A,
                    "aria-label": a,
                    "aria-labelledby": s,
                    role: i,
                    children: t
                })
            }

            function C(e) {
                let {
                    isAuthenticated: t = !0,
                    ...n
                } = e, {
                    AnalyticsLocationProvider: a
                } = (0, u.default)(o.default.HEADER_BAR), i = s(n.className, {
                    [m.forumOrHome]: null != n.channelType && N.ChannelTypesSets.GUILD_THREADS_ONLY.has(n.channelType) || n.channelId === I.StaticChannelRoute.GUILD_HOME
                });
                return (0, l.jsx)(a, {
                    children: t ? (0, l.jsx)(g, {
                        ...n,
                        className: i
                    }) : (0, l.jsx)(R, {
                        ...n,
                        className: i
                    })
                })
            }
            C.Title = E.default.Title, C.Icon = E.default.Icon, C.Divider = E.default.Divider, C.Caret = E.default.Caret;
            var O = C
        },
        836056: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("446674"),
                s = n("669491"),
                i = n("77078"),
                r = n("915639"),
                o = n("697218"),
                u = n("834179"),
                d = n("664336"),
                c = n("599110"),
                f = n("701909"),
                E = n("158998"),
                S = n("49111"),
                _ = n("782340");
            let h = new Set(["ko", "ja"]);

            function T() {
                let e = (0, a.useStateFromStores)([o.default], () => o.default.getCurrentUser()),
                    t = (0, a.useStateFromStores)([r.default], () => r.default.locale),
                    n = (0, E.isNewUser)(e);
                return (0, l.jsx)(i.Anchor, {
                    href: f.SUPPORT_LOCATION,
                    target: "_blank",
                    tabIndex: -1,
                    children: (0, l.jsx)(d.Icon, {
                        color: n ? s.default.unsafe_rawColors.GREEN_360.css : "currentColor",
                        onClick: () => c.default.track(S.AnalyticEvents.HELP_CLICKED, {
                            highlighted: n
                        }),
                        icon: u.default,
                        tooltipPosition: h.has(t) ? "left" : void 0,
                        tooltip: _.default.Messages.HELP
                    })
                })
            }
        },
        922953: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("446674"),
                i = n("77078"),
                r = n("545158"),
                o = n("370492"),
                u = n("584369"),
                d = n("471654"),
                c = n("496657"),
                f = n("758710"),
                E = n("664336"),
                S = n("701909"),
                _ = n("782340");

            function h() {
                let e = (0, s.useStateFromStores)([u.default], () => u.default.devToolsEnabled),
                    [t, h] = a.useState(!1),
                    [T, p] = a.useState(0),
                    N = e => {
                        clearTimeout(T), p(setTimeout(() => {
                            h(e)
                        }, 100))
                    };
                return (0, l.jsx)("div", {
                    onMouseEnter: () => N(!0),
                    onMouseLeave: () => N(!1),
                    children: (0, l.jsx)(i.Popout, {
                        shouldShow: t,
                        animation: i.Popout.Animation.NONE,
                        position: "bottom",
                        align: "right",
                        autoInvert: !1,
                        onRequestOpen: () => h(!0),
                        onRequestClose: () => h(!1),
                        renderPopout: () => (function(e) {
                            let {
                                onClose: t,
                                devToolsEnabled: a
                            } = e;
                            return (0, l.jsx)(i.Menu, {
                                onSelect: () => {},
                                navId: "staff-help-popout",
                                variant: "fixed",
                                onClose: t,
                                "aria-label": _.default.Messages.GUILD_ACTIONS_MENU_LABEL,
                                children: (0, l.jsxs)(i.MenuGroup, {
                                    children: [(0, l.jsx)(i.MenuItem, {
                                        id: "staff-help-bug-reporter",
                                        label: _.default.Messages.BUG_REPORT_TITLE,
                                        icon: d.default,
                                        action: () => (0, i.openModalLazy)(async () => {
                                            let {
                                                default: e
                                            } = await n.el("323518").then(n.bind(n, "323518"));
                                            return t => (0, l.jsx)(e, {
                                                ...t
                                            })
                                        })
                                    }), a && (0, l.jsx)(i.MenuItem, {
                                        id: "staff-devtools",
                                        label: "Toggle DevTools",
                                        icon: c.default,
                                        action: () => (0, o.toggleDisplayDevTools)()
                                    }), (0, l.jsx)(i.MenuItem, {
                                        id: "staff-help-center",
                                        label: "Go to Help Center",
                                        icon: f.default,
                                        action: () => (0, r.default)(S.SUPPORT_LOCATION)
                                    })]
                                })
                            })
                        })({
                            onClose: () => h(!1),
                            devToolsEnabled: e
                        }),
                        children: (e, t) => {
                            let {
                                isShown: n
                            } = t;
                            return (0, l.jsx)(E.Icon, {
                                ...e,
                                icon: d.default,
                                "aria-label": _.default.Messages.HELP,
                                selected: n
                            })
                        }
                    })
                })
            }
        },
        879035: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("446674"),
                i = n("77078"),
                r = n("404118"),
                o = n("649486"),
                u = n("236717"),
                d = n("945956"),
                c = n("195812"),
                f = n("733350"),
                E = n("664336"),
                S = n("868308"),
                _ = n("782340"),
                h = n("122693");
            class T extends a.PureComponent {
                static getDerivedStateFromProps(e, t) {
                    return e.mode !== t.memoizedMode ? {
                        memoizedMode: e.mode,
                        clicked: !1
                    } : null
                }
                handleDownloadApps() {
                    (0, i.openModal)(e => (0, l.jsx)(o.default, {
                        source: "Links",
                        ...e
                    }))
                }
                render() {
                    switch (this.props.mode) {
                        case "UPDATE_AVAILABLE":
                            return (0, l.jsx)(E.Icon, {
                                hideOnClick: !1,
                                tooltip: _.default.Messages.UPDATE_AVAILABLE,
                                foreground: h.downloadArrow,
                                background: h.cloud,
                                icon: f.default
                            });
                        case "UPDATE_MANUALLY":
                        case "UPDATE_DOWNLOADED":
                            return (0, l.jsx)(E.Icon, {
                                tooltip: _.default.Messages.UPDATE_DOWNLOADED,
                                foreground: h.updateIconForeground,
                                onClick: this.handleInstallDownload,
                                icon: c.default
                            });
                        default:
                            return null
                    }
                }
                constructor(...e) {
                    super(...e), this.state = {
                        memoizedMode: this.props.mode,
                        clicked: !1
                    }, this.handleInstallDownload = () => {
                        d.default.isConnected() ? r.default.show({
                            title: _.default.Messages.UPDATE_DURING_CALL_TITLE,
                            body: _.default.Messages.UPDATE_DURING_CALL_BODY,
                            onConfirm: this.doUpdate,
                            cancelText: _.default.Messages.CANCEL,
                            confirmText: _.default.Messages.UPDATE_DURING_CALL_CONTINUE
                        }) : this.doUpdate()
                    }, this.doUpdate = () => {
                        !this.state.clicked && (this.setState({
                            clicked: !0
                        }), (0, S.quitAndInstall)())
                    }
                }
            }
            var p = s.default.connectStores([u.default], () => ({
                mode: u.default.getState()
            }))(T)
        },
        960808: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useMessageRemindersLoader: function() {
                    return u
                }
            });
            var l = n("884691"),
                a = n("446674"),
                s = n("819689"),
                i = n("42203"),
                r = n("377253"),
                o = n("931318");

            function u(e) {
                let t = (0, a.useStateFromStoresArray)([i.default, r.default], () => e.filter(e => null != i.default.getChannel(e.channelId)).map(e => r.default.getMessage(e.channelId, e.messageId)).filter(e => null != e)),
                    n = e.filter(e => null == r.default.getMessage(e.channelId, e.messageId)),
                    [u, d] = l.useState(0 === n.length);
                return l.useEffect(() => {
                    (0, o.fetchAndUpdateSavedMessages)()
                }, []), l.useEffect(() => {
                    !u && (n.forEach(e => {
                        try {
                            s.default.fetchMessages({
                                channelId: e.channelId,
                                limit: 1,
                                jump: {
                                    messageId: e.messageId,
                                    flash: !1,
                                    offset: 1
                                }
                            })
                        } catch {}
                    }), d(!0))
                }, [n, u]), t
            }
        },
        45835: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getSavedMessageAndChannel: function() {
                    return d
                }
            });
            var l = n("298386"),
                a = n("233069"),
                s = n("719926"),
                i = n("766274"),
                r = n("42203"),
                o = n("377253"),
                u = n("697218");

            function d(e) {
                var t, n, d;
                let c = o.default.getMessage(e.channelId, e.messageId),
                    f = u.default.getUser(e.authorId),
                    E = r.default.getChannel(e.channelId),
                    S = null != f ? f : new i.default({
                        id: e.authorId,
                        username: e.authorSummary
                    }),
                    _ = new s.default({
                        id: e.messageId,
                        channel_id: e.channelId,
                        author: S,
                        content: e.messageSummary
                    }),
                    h = null == e.guildId ? new a.DMChannelRecord({
                        id: e.channelId,
                        type: l.ChannelTypes.DM,
                        name: null !== (t = e.channelSummary) && void 0 !== t ? t : "",
                        guild_id: "",
                        recipients: [null !== (n = e.authorId) && void 0 !== n ? n : ""]
                    }) : new a.GuildTextualChannelRecord({
                        id: e.channelId,
                        type: null == e.guildId ? l.ChannelTypes.DM : l.ChannelTypes.GUILD_TEXT,
                        name: null !== (d = e.channelSummary) && void 0 !== d ? d : "",
                        guild_id: e.guildId
                    });
                return {
                    channel: null != E ? E : h,
                    message: null != c ? c : _
                }
            }
        },
        459776: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                isNewGroupItem: function() {
                    return r
                },
                default: function() {
                    return o
                }
            });
            var l = n("888400"),
                a = n("500858"),
                s = n("913491"),
                i = n("49111");

            function r(e, t, n) {
                return null == t || t.type === i.ChannelStreamTypes.MESSAGE && t.content.id === t.content.channel_id || t.type !== i.ChannelStreamTypes.MESSAGE && t.type !== i.ChannelStreamTypes.THREAD_STARTER_MESSAGE || o(e, t.content, n)
            }

            function o(e, t, n) {
                if (n.hasFlag(i.MessageFlags.HAS_THREAD) || n.isCommandType()) return !0;
                if (n.type > i.MessageTypes.DEFAULT) return !(0, s.default)(t) || n.type === i.MessageTypes.REPLY || !1;
                return !!((0, s.default)(t) || t.author.id !== n.author.id || t.hasFlag(i.MessageFlags.EPHEMERAL) !== n.hasFlag(i.MessageFlags.EPHEMERAL) || null != n.webhookId && t.author.username !== n.author.username || (null == e ? void 0 : e.isForumPost()) && t.id === e.id || !(0, l.isWithinInterval)(t.timestamp, n.timestamp, 42e4) || n.hasFlag(i.MessageFlags.SUPPRESS_NOTIFICATIONS) && !t.hasFlag(i.MessageFlags.SUPPRESS_NOTIFICATIONS) || t.hasFlag(i.MessageFlags.SUPPRESS_NOTIFICATIONS) && !n.hasFlag(i.MessageFlags.SUPPRESS_NOTIFICATIONS) && (n.mentions.length > 0 || n.mentionRoles.length > 0 || n.mentionEveryone) || (0, a.default)(n)) || !1
            }
        },
        654017: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                isSpamSupported: function() {
                    return s
                },
                isSpam: function() {
                    return i
                }
            });
            var l = n("697218"),
                a = n("49111");

            function s(e) {
                return void 0 !== e && e.type !== a.ChannelTypes.DM
            }

            function i(e) {
                var t, n, s;
                return t = e.author.id, null !== (s = null === (n = l.default.getUser(t)) || void 0 === n ? void 0 : n.hasFlag(a.UserFlags.SPAMMER)) && void 0 !== s && s
            }
        },
        603531: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return F
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("446674"),
                o = n("193865"),
                u = n("467475"),
                d = n("256572"),
                c = n("845579"),
                f = n("42203"),
                E = n("27618"),
                S = n("945330"),
                _ = n("780571"),
                h = n("304198"),
                T = n("568734"),
                p = n("654017"),
                N = n("913491"),
                I = n("574073"),
                m = n("359132"),
                A = n("723931"),
                g = n("39331"),
                R = n("68480"),
                C = n("596368"),
                O = n("227439"),
                M = n("702905"),
                D = n("611792"),
                y = n("554372"),
                v = n("49111"),
                P = n("782340"),
                L = n("555821"),
                U = n("877671"),
                F = a.memo(function e(t) {
                    var n, a, s;
                    let S;
                    let {
                        channel: h,
                        message: L,
                        compact: F = !1,
                        className: b,
                        onContextMenu: G,
                        onClick: k,
                        disableInteraction: j = !1,
                        hasThread: B,
                        treatSpam: w
                    } = t, H = v.MessageTypesWithLazyLoadedReferences.has(L.type) ? L.messageReference : void 0, Y = (0, r.useStateFromStores)([d.default], () => d.default.getMessageByReference(H)), V = (0, r.useStateFromStores)([f.default], () => L.type === v.MessageTypes.THREAD_STARTER_MESSAGE && Y.state === d.ReferencedMessageState.LOADED ? f.default.getChannel(Y.message.channel_id) : null), K = c.InlineAttachmentMedia.useSetting(), Q = c.InlineEmbedMedia.useSetting(), W = c.RenderEmbeds.useSetting() && !L.author.isClyde(), z = c.GifAutoPlay.useSetting(), q = (0, o.useShowImprovedMarkdownUserExperimentConfig)((null !== (n = L.editedTimestamp) && void 0 !== n ? n : L.timestamp).valueOf()), X = (0, o.useShowImprovedMarkdownGuildExperimentConfig)(null !== (a = null == h ? void 0 : h.guild_id) && void 0 !== a ? a : "", (null !== (s = L.editedTimestamp) && void 0 !== s ? s : L.timestamp).valueOf()), J = (0, u.default)(null == h ? void 0 : h.id), {
                        disableReactionCreates: Z
                    } = (0, m.default)(h), {
                        content: $,
                        hasSpoilerEmbeds: ee
                    } = (0, g.default)(L, {
                        hideSimpleEmbedContent: Q && W,
                        allowList: q.showListsAndHeaders || X.showListsAndHeaders,
                        allowHeading: q.showListsAndHeaders || X.showListsAndHeaders,
                        allowLinks: q.showMaskedLinks || X.showMaskedLinks,
                        previewLinkTarget: q.showMaskedLinks || X.showMaskedLinks
                    }), et = (0, I.default)(L), en = (0, r.useStateFromStores)([f.default], () => L.hasFlag(v.MessageFlags.HAS_THREAD) && f.default.getChannel(L.id)), el = L.type === v.MessageTypes.THREAD_STARTER_MESSAGE && Y.state === d.ReferencedMessageState.LOADED && null != V, ea = !el && void 0 === S, es = (0, R.default)({
                        message: L,
                        channel: h,
                        enabled: ea
                    });
                    return el ? (0, l.jsx)(e, {
                        ...t,
                        message: Y.message,
                        channel: V,
                        hasThread: !1
                    }) : (E.default.isBlocked(L.author.id) ? S = P.default.Messages.BLOCKED_MESSAGE_COUNT : (0, p.isSpam)(L) && w && (S = P.default.Messages.HIDDEN_SPAM_MESSAGE_COUNT), void 0 !== S) ? (0, l.jsx)(x, {
                        className: b,
                        compact: F,
                        count: 1,
                        collapsedReason: S
                    }) : (0, l.jsx)(_.default, {
                        compact: F,
                        className: i(b, {
                            [U.ephemeral]: (0, T.hasFlag)(L.flags, v.MessageFlags.EPHEMERAL),
                            [U.disableInteraction]: j,
                            [U.groupStart]: t.isGroupStart
                        }),
                        childrenRepliedMessage: (0, y.default)(L, h, H, Y, F),
                        childrenHeader: (0, O.default)({
                            ...t,
                            author: et,
                            guildId: h.guild_id
                        }),
                        childrenAccessories: (0, l.jsx)(A.MessageAccessories, {
                            channel: h,
                            message: L,
                            hasSpoilerEmbeds: ee,
                            compact: F,
                            canSuppressEmbeds: !1,
                            canDeleteAttachments: !1,
                            disableReactionReads: !1,
                            disableReactionCreates: Z,
                            disableReactionUpdates: !1,
                            renderThreadAccessory: B,
                            renderComponentAccessory: !1,
                            inlineAttachmentMedia: K,
                            inlineEmbedMedia: Q,
                            renderEmbeds: W,
                            gifAutoPlay: z,
                            showListsAndHeaders: q.showListsAndHeaders || X.showListsAndHeaders,
                            showMaskedLinks: q.showMaskedLinks || X.showMaskedLinks,
                            shouldHideMediaOptions: J,
                            showClydeAiEmbeds: !1
                        }),
                        childrenExecutedCommand: (0, D.default)(L, h, F),
                        childrenMessageContent: (0, C.default)(t, $),
                        childrenSystemMessage: (0, M.default)(t),
                        onContextMenu: G,
                        onClick: k,
                        hasThread: !1 !== B && null != en && L.hasFlag(v.MessageFlags.HAS_THREAD),
                        hasReply: L.type === v.MessageTypes.REPLY,
                        isSystemMessage: (0, N.default)(L),
                        messageRef: es
                    })
                });

            function x(e) {
                let {
                    className: t,
                    count: n,
                    compact: a,
                    collapsedReason: s
                } = e;
                return (0, l.jsx)(_.default, {
                    className: t,
                    compact: a,
                    role: "group",
                    childrenMessageContent: (0, l.jsx)(h.default, {
                        compact: a,
                        className: L.blockedSystemMessage,
                        iconNode: (0, l.jsx)(S.default, {
                            className: L.blockedIcon
                        }),
                        children: (0, l.jsx)("div", {
                            className: L.blockedMessageText,
                            children: s.format({
                                count: n
                            })
                        })
                    })
                })
            }
        },
        739034: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("884691");
            let a = !1,
                s = new Set;

            function i(e) {
                e !== a && (a = e, s.forEach(e => e(a)))
            }

            function r() {
                let [e, t] = l.useState(a);
                return l.useEffect(() => {
                    let e = e => {
                        t(e)
                    };
                    return s.add(e), () => {
                        s.delete(e)
                    }
                }, []), e
            }
            window.addEventListener("keydown", e => {
                i(e.shiftKey)
            }), window.addEventListener("keyup", e => {
                i(e.shiftKey)
            }), window.addEventListener("mousemove", e => {
                i(e.shiftKey)
            }), window.addEventListener("blur", () => {
                i(!1)
            })
        },
        777204: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PROFILE_BACKGROUND: function() {
                    return l
                },
                FRIEND_BACKGROUND: function() {
                    return a
                },
                MESSAGE_BACKGROUND: function() {
                    return s
                }
            });
            let l = "#83DDC5",
                a = "#F47FFF",
                s = "#FFDE4D"
        },
        352273: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                setNotificationCenterActive: function() {
                    return f
                },
                resetNotificationCenter: function() {
                    return E
                },
                fetchNotificationCenterItems: function() {
                    return S
                },
                markNotificationCenterItemAcked: function() {
                    return _
                },
                deleteNotificationCenterItem: function() {
                    return T
                }
            });
            var l = n("759843"),
                a = n("872717"),
                s = n("627929"),
                i = n("913144"),
                r = n("845579"),
                o = n("840707"),
                u = n("136511"),
                d = n("342176"),
                c = n("49111");

            function f(e) {
                i.default.dispatch({
                    type: "NOTIFICATION_CENTER_SET_ACTIVE",
                    active: e
                })
            }

            function E() {
                i.default.dispatch({
                    type: "RESET_NOTIFICATION_CENTER"
                })
            }
            async function S(e, t) {
                if (u.default.loading) return;
                await i.default.dispatch({
                    type: "LOAD_NOTIFICATION_CENTER_ITEMS"
                });
                let n = Math.ceil(u.default.items.length / e.limit);
                try {
                    let a = await o.default.get({
                        url: c.Endpoints.NOTIF_CENTER_ITEMS(),
                        trackedActionData: {
                            event: l.NetworkActionNames.NOTIFICATION_CENTER_PAGE_FETCH,
                            properties: e => {
                                var t;
                                let l = ((null === (t = e.body) || void 0 === t ? void 0 : t.items) || []).map(e => e.type);
                                return (0, s.exact)({
                                    page: n,
                                    items: l,
                                    item_count: l.length
                                })
                            }
                        },
                        query: {
                            ...e
                        }
                    });
                    null == t || t(), await i.default.dispatch({
                        type: "LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS",
                        items: a.body.items,
                        cursor: a.body.cursor,
                        hasMore: a.body.has_more
                    })
                } catch (e) {
                    null == t || t(), await i.default.dispatch({
                        type: "LOAD_NOTIFICATION_CENTER_ITEMS_FAILURE"
                    })
                }
            }

            function _(e) {
                null != e.local_id ? function(e) {
                    i.default.dispatch({
                        type: "NOTIFICATION_CENTER_ITEMS_LOCAL_ACK",
                        localIds: e
                    })
                }([e.local_id]) : (0, d.isMentionItem)(e) ? function(e) {
                    i.default.dispatch({
                        type: "NOTIFICATION_CENTER_ITEMS_ACK",
                        optimistic: !0,
                        ids: [e]
                    })
                }(e.id) : h(e.id)
            }
            async function h(e) {
                try {
                    i.default.dispatch({
                        type: "NOTIFICATION_CENTER_ITEMS_ACK",
                        optimistic: !0,
                        ids: [e]
                    }), await a.default.post({
                        url: c.Endpoints.NOTIF_CENTER_ITEMS_ACK(e)
                    })
                } catch (t) {
                    i.default.dispatch({
                        type: "NOTIFICATION_CENTER_ITEMS_ACK_FAILURE",
                        ids: [e]
                    })
                }
            }
            async function T(e) {
                let t = r.NotificationCenterAckedBeforeId.getSetting();
                try {
                    i.default.dispatch({
                        type: "NOTIFICATION_CENTER_ITEM_DELETE",
                        id: e.id
                    }), await o.default.delete({
                        url: c.Endpoints.NOTIF_CENTER_ITEMS(e.id),
                        body: {
                            item_type: (0, d.isMentionItem)(e) ? "mention" : "regular"
                        },
                        trackedActionData: {
                            event: l.NetworkActionNames.NOTIFICATION_CENTER_ITEM_DELETE,
                            properties: {
                                notification_center_id: e.id,
                                acked: (0, d.isRemoteAcked)(e, t),
                                item_type: e.type
                            }
                        }
                    })
                } catch (t) {
                    throw i.default.dispatch({
                        type: "NOTIFICATION_CENTER_ITEM_DELETE_FAILURE",
                        item: e
                    }), t
                }
            }
        },
        204116: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var l = n("446674"),
                a = n("913144"),
                s = n("514933"),
                i = n("138217"),
                r = n("360191");
            let o = {
                tab: null,
                localItemAcks: {},
                hasNewMentions: !1,
                isDataStale: !1,
                isRefreshing: !1
            };
            class u extends l.default.PersistedStore {
                initialize(e) {
                    if (this.waitFor(i.default), null != e) {
                        var t;
                        (o = e).localItemAcks = function(e) {
                            let t = {};
                            for (let [n, l] of Object.entries(e)) Date.now() - l < 7776e6 && (t[n] = l);
                            return t
                        }(null !== (t = o.localItemAcks) && void 0 !== t ? t : {}), o.isDataStale = !0
                    }
                }
                getState() {
                    return o
                }
                getTab() {
                    var e;
                    return null !== (e = o.tab) && void 0 !== e ? e : r.NotificationCenterTabs.ForYou
                }
                isLocalItemAcked(e) {
                    return null != o.localItemAcks[e]
                }
                hasNewMentions() {
                    return o.hasNewMentions
                }
                isDataStale() {
                    return o.isDataStale
                }
                isRefreshing() {
                    return o.isRefreshing
                }
                shouldReload() {
                    return o.hasNewMentions || o.isDataStale || o.isRefreshing
                }
            }
            u.displayName = "NotificationCenterStore", u.persistKey = "NotificationCenterStore";

            function d() {
                o.hasNewMentions = !1, o.isDataStale = !1, o.isRefreshing = !1
            }
            var c = new u(a.default, {
                MESSAGE_CREATE: function(e) {
                    let {
                        message: t
                    } = e;
                    (0, s.isNotificationRedesignV2Enabled)() && i.default.hasMention(t.id) && (o.hasNewMentions = !0)
                },
                NOTIFICATION_CENTER_SET_TAB: function(e) {
                    o = {
                        ...o,
                        tab: e.tab
                    }
                },
                NOTIFICATION_CENTER_ITEMS_LOCAL_ACK: function(e) {
                    let {
                        localIds: t
                    } = e;
                    t.forEach(e => {
                        o = {
                            ...o,
                            localItemAcks: {
                                ...o.localItemAcks,
                                [e]: Date.now()
                            }
                        }
                    })
                },
                NOTIFICATION_CENTER_REFRESH: function() {
                    o.isRefreshing = !0
                },
                LOAD_NOTIFICATION_CENTER_ITEMS_FAILURE: d,
                LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS: d
            })
        },
        183030: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useNotificationCenterItemAcked: function() {
                    return i
                }
            });
            var l = n("446674"),
                a = n("204116"),
                s = n("342176");
            let i = (e, t) => {
                let n = (0, l.useStateFromStores)([a.default], () => null != e.local_id && a.default.isLocalItemAcked(e.local_id));
                return !e.forceUnacked && (n || (0, s.isRemoteAcked)(e, t))
            }
        },
        396539: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useDesktopNotificationCenterItemsLoader: function() {
                    return E
                }
            });
            var l = n("884691"),
                a = n("446674"),
                s = n("267363"),
                i = n("756166"),
                r = n("138217"),
                o = n("352273"),
                u = n("136511"),
                d = n("204116"),
                c = n("133335");
            let f = e => {
                    let {
                        isFocused: t,
                        navigatedAway: n,
                        isDesktop: f,
                        withMentions: E = !1,
                        initialPageSize: S
                    } = e, _ = (0, a.useStateFromStores)([d.default], () => d.default.shouldReload()), h = l.useRef(!1), [T, p] = l.useState(!1), {
                        initialized: N,
                        loading: I,
                        items: m,
                        hasMore: A,
                        cursor: g,
                        errored: R
                    } = (0, a.useStateFromStoresObject)([u.default], () => ({
                        initialized: u.default.initialized,
                        loading: u.default.loading,
                        items: u.default.items,
                        hasMore: u.default.hasMore,
                        cursor: u.default.cursor,
                        errored: u.default.errored
                    })), {
                        roleFilter: C,
                        everyoneFilter: O
                    } = (0, a.useStateFromStoresObject)([r.default], () => ({
                        everyoneFilter: r.default.everyoneFilter,
                        roleFilter: r.default.roleFilter
                    }));
                    l.useEffect(() => ((0, o.setNotificationCenterActive)(!0), () => (0, o.setNotificationCenterActive)(!1)), []), l.useEffect(() => {
                        N && t && (0, s.ackUserFeature)(c.ReadStateTypes.NOTIFICATION_CENTER)
                    }, [t, N]);
                    let M = (0, i.default)();
                    l.useEffect(() => () => {
                        f ? !M() && (R || m.length > 100) && (0, o.resetNotificationCenter)() : n && m.length > 100 && (0, o.resetNotificationCenter)()
                    }, [n, m, f, M, R]), l.useEffect(() => {
                        let e = _ && t;
                        (!N || e) && (0, o.fetchNotificationCenterItems)({
                            limit: null != S ? S : E ? 8 : 20,
                            with_mentions: E,
                            roles_filter: C,
                            everyone_filter: O
                        })
                    }, [N, _, t, E, C, O, S]);
                    let D = l.useCallback(async e => {
                        !h.current && N && A && null != g && (e || !R) && (h.current = !0, p(!0), await (0, o.fetchNotificationCenterItems)({
                            after: g,
                            with_mentions: E,
                            roles_filter: C,
                            everyone_filter: O,
                            limit: E ? 8 : 20
                        }, () => {
                            h.current = !1
                        }), p(!1))
                    }, [N, A, g, R, E, C, O]);
                    return {
                        initialized: N,
                        loading: I,
                        items: m,
                        hasMore: A,
                        loadMore: D,
                        loadingMore: T,
                        setReadNotifItemToAcked: e => {
                            !e.acked && (e.acked = !0)
                        },
                        errored: R
                    }
                },
                E = () => {
                    let {
                        initialized: e,
                        loading: t,
                        items: n,
                        hasMore: l,
                        loadMore: a
                    } = f({
                        isFocused: !0,
                        isDesktop: !0
                    });
                    return {
                        initialized: e,
                        loading: t,
                        items: n.filter(e => "notification-center-item" === e.kind),
                        hasMore: l,
                        loadMore: a
                    }
                }
        },
        839743: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ForYouEmptyState: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("782340"),
                s = n("210423"),
                i = n("794027");
            let r = () => (0, l.jsxs)("div", {
                className: s.container,
                children: [(0, l.jsx)("img", {
                    className: s.image,
                    alt: "",
                    src: i
                }), (0, l.jsx)("div", {
                    className: s.title,
                    children: a.default.Messages.FOR_YOU_EMPTY_TITLE
                }), (0, l.jsx)("div", {
                    className: s.body,
                    children: a.default.Messages.FOR_YOU_EMPTY_BODY
                })]
            })
        },
        86320: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                FOR_YOU_ICONS: function() {
                    return g
                },
                getIcon: function() {
                    return C
                },
                getIconByName: function() {
                    return O
                },
                getMask: function() {
                    return M
                },
                getBackground: function() {
                    return D
                }
            });
            var l, a, s, i, r = n("669491"),
                o = n("360191"),
                u = n("777204"),
                d = n("505406"),
                c = n("92440"),
                f = n("608108"),
                E = n("804621"),
                S = n("578299"),
                _ = n("522420"),
                h = n("371031"),
                T = n("674517"),
                p = n("989306"),
                N = n("695449"),
                I = n("816428"),
                m = n("710672");
            (l = s || (s = {})).CHECKED = "CHECKED", l.FRIENDS = "FRIENDS", l.SHARE_SCREEN = "SHARE_SCREEN", l.NEW_MESSAGE = "NEW_MESSAGE";
            let A = {
                CHECKED: f,
                FRIENDS: S,
                SHARE_SCREEN: I,
                NEW_MESSAGE: p
            };
            (a = i || (i = {})).MISSED_MESSAGES = "MISSED_MESSAGES", a.FRIEND_REQUEST_REMINDER = "FRIEND_REQUEST_REMINDER", a.SCHEDULED_GUILD_EVENT = "SCHEDULED_GUILD_EVENT", a.TOP_MESSAGES = "TOP_MESSAGES", a.NOTIFICATION_CENTER = "NOTIFICATION_CENTER", a.UPDATE_PROFILE = "UPDATE_PROFILE", a.FIND_FRIENDS = "FIND_FRIENDS", a.ADD_FRIEND = "ADD_FRIEND", a.FIRST_MESSAGE = "FIRST_MESSAGE";
            let g = {
                    MISSED_MESSAGES: T,
                    FRIEND_REQUEST_REMINDER: _,
                    SCHEDULED_GUILD_EVENT: E,
                    TOP_MESSAGES: h,
                    NOTIFICATION_CENTER: c,
                    UPDATE_PROFILE: m,
                    FIND_FRIENDS: d,
                    ADD_FRIEND: d,
                    FIRST_MESSAGE: N
                },
                R = e => {
                    switch (e.item_enum) {
                        case o.ItemEnum.ADD_FRIEND:
                            return i.ADD_FRIEND;
                        case o.ItemEnum.FIND_FRIENDS:
                            return i.FIND_FRIENDS;
                        case o.ItemEnum.FIRST_MESSAGE:
                            return i.FIRST_MESSAGE;
                        case o.ItemEnum.UPDATE_PROFILE:
                            return i.UPDATE_PROFILE;
                        default:
                            return i.NOTIFICATION_CENTER
                    }
                },
                C = e => {
                    switch (e.type) {
                        case "lifecycle_item":
                            return R(e);
                        case "missed_messages":
                            return i.MISSED_MESSAGES;
                        case "friend_request_reminder":
                            return i.FRIEND_REQUEST_REMINDER;
                        case "scheduled_guild_event_started":
                            return i.SCHEDULED_GUILD_EVENT;
                        case "top_messages":
                            return i.TOP_MESSAGES;
                        default:
                            return i.NOTIFICATION_CENTER
                    }
                },
                O = e => {
                    if ("icHighlight" === e) return i.TOP_MESSAGES;
                    return i.NOTIFICATION_CENTER
                },
                M = e => {
                    switch (e) {
                        case o.NotificationCenterItems.GO_LIVE_PUSH:
                            return {
                                icon: A.SHARE_SCREEN, color: r.default.colors.BACKGROUND_ACCENT
                            };
                        case o.NotificationCenterItems.FRIEND_REQUEST_ACCEPTED:
                            return {
                                icon: A.CHECKED, color: r.default.colors.STATUS_POSITIVE_BACKGROUND
                            };
                        case o.NotificationCenterItems.FRIEND_REQUEST_PENDING:
                        case o.NotificationCenterItems.FRIEND_SUGGESTION_CREATED:
                            return {
                                icon: A.FRIENDS, color: r.default.colors.BACKGROUND_ACCENT
                            };
                        case o.NotificationCenterItems.DM_FRIEND_NUDGE:
                            return {
                                icon: A.NEW_MESSAGE, color: r.default.colors.BACKGROUND_ACCENT
                            };
                        case o.NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS:
                        case o.NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS_ACCEPTED:
                            return {
                                icon: A.FRIENDS, color: r.default.colors.BACKGROUND_ACCENT
                            };
                        default:
                            return null
                    }
                },
                D = e => {
                    switch (e.item_enum) {
                        case o.ItemEnum.UPDATE_PROFILE:
                            return u.PROFILE_BACKGROUND;
                        case o.ItemEnum.ADD_FRIEND:
                        case o.ItemEnum.FIND_FRIENDS:
                            return u.FRIEND_BACKGROUND;
                        case o.ItemEnum.FIRST_MESSAGE:
                            return u.MESSAGE_BACKGROUND;
                        default:
                            return r.default.unsafe_rawColors.BRAND_500.css
                    }
                }
        },
        899779: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ForYouItemImage: function() {
                    return d
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("766274"),
                i = n("587974"),
                r = n("86320"),
                o = n("457201");
            let u = e => {
                    let {
                        mask: t
                    } = e;
                    return null == t ? null : (0, l.jsx)("div", {
                        className: o.maskBackground,
                        style: {
                            backgroundColor: t.color.css
                        },
                        children: (0, l.jsx)("img", {
                            className: o.maskIcon,
                            alt: "",
                            src: t.icon
                        })
                    })
                },
                d = a.memo(function(e) {
                    let {
                        item: t
                    } = e, n = null, a = !1;
                    if (null != t.icon_name) n = (0, l.jsx)("img", {
                        alt: "",
                        src: r.FOR_YOU_ICONS[(0, r.getIconByName)(t.icon_name)]
                    });
                    else if (null != t.other_user) {
                        let e = t.other_user instanceof s.default ? t.other_user : new s.default(t.other_user);
                        n = (0, l.jsx)("img", {
                            alt: "",
                            className: o.avatar,
                            src: e.getAvatarURL(void 0, 40)
                        }), a = !0
                    } else n = null != t.icon_url ? (0, l.jsx)("img", {
                        alt: "",
                        src: t.icon_url
                    }) : (0, l.jsx)("img", {
                        alt: "",
                        src: r.FOR_YOU_ICONS[(0, r.getIcon)(t)]
                    });
                    let d = (0, r.getMask)(t.type);
                    return (0, l.jsxs)(i.default, {
                        mask: null == d ? i.MaskIDs.AVATAR_DEFAULT : i.MaskIDs.AVATAR_STATUS_ROUND_16,
                        width: 40,
                        height: 40,
                        rightOverhang: 3,
                        bottomOverhang: 3,
                        className: o.mask,
                        children: [(0, l.jsx)("div", {
                            className: o.container,
                            style: a ? void 0 : {
                                backgroundColor: (0, r.getBackground)(t)
                            },
                            children: n
                        }), (0, l.jsx)(u, {
                            mask: d
                        })]
                    })
                })
        },
        322964: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ForYouItems: function() {
                    return L
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("249654"),
                i = n("77078"),
                r = n("308289"),
                o = n("537325"),
                u = n("367376"),
                d = n("401642"),
                c = n("845579"),
                f = n("766274"),
                E = n("697218"),
                S = n("599110"),
                _ = n("253981"),
                h = n("352273"),
                T = n("360191"),
                p = n("342176"),
                N = n("183030"),
                I = n("899779"),
                m = n("778597"),
                A = n("960082"),
                g = n("49111"),
                R = n("782340"),
                C = n("183419"),
                O = n("786948"),
                M = n("780810");

            function D(e) {
                var t, n, a;
                let {
                    item: s
                } = e, o = null === (t = s.message) || void 0 === t ? void 0 : t.content;
                if (null == o) return (0, l.jsx)("div", {
                    children: " "
                });
                let d = null !== (a = E.default.getUser(null === (n = s.other_user) || void 0 === n ? void 0 : n.id)) && void 0 !== a ? a : new f.default(s.other_user),
                    c = u.default.parse(o);
                return (0, l.jsxs)("div", {
                    className: C.messagePreviewContainer,
                    children: [(0, l.jsx)(r.default, {
                        user: d,
                        size: i.AvatarSizes.SIZE_24
                    }), (0, l.jsx)(i.Text, {
                        className: C.messagePreviewText,
                        variant: "text-sm/normal",
                        lineClamp: 2,
                        children: c
                    })]
                })
            }

            function y(e) {
                let {
                    item: {
                        callout: t
                    }
                } = e;
                if (null == t) return null;
                let n = u.default.parse(t);
                return (0, l.jsx)("div", {
                    className: C.calloutContainer,
                    children: (0, l.jsx)(i.Text, {
                        variant: "text-sm/normal",
                        lineClamp: 2,
                        children: n
                    })
                })
            }

            function v(e) {
                let {
                    item: t
                } = e, n = M, a = R.default.Messages.NOTIFICATION_CENTER_TODO;
                return t.completed && (n = O, a = R.default.Messages.NOTIFICATION_CENTER_DONE), (0, l.jsxs)("div", {
                    className: C.lifecycleContainer,
                    children: [(0, l.jsx)("img", {
                        className: C.checkbox,
                        alt: "",
                        src: n
                    }), (0, l.jsx)(i.Text, {
                        className: C.lifecycleText,
                        variant: "text-xs/bold",
                        color: "header-secondary",
                        children: a
                    })]
                })
            }
            let P = a.memo(function(e) {
                    var t;
                    let {
                        item: r,
                        ackedBeforeId: c
                    } = e, f = (0, N.useNotificationCenterItemAcked)(r, c), E = a.useCallback(async () => {
                        if (!f && (0, h.markNotificationCenterItemAcked)(r), null != r.item_enum && r.item_enum === T.ItemEnum.FIND_FRIENDS) {
                            (0, i.openModalLazy)(async () => {
                                let {
                                    default: e
                                } = await n.el("927960").then(n.bind(n, "927960"));
                                return t => (0, l.jsx)(e, {
                                    source: "Notification Center",
                                    ...t
                                })
                            });
                            return
                        }
                        if (null != r.deeplink) {
                            let e = _.default.safeParseWithQuery(r.deeplink);
                            if (null == e) return;
                            let t = e.hostname,
                                n = e.path;
                            if (null == t || null == n) return;
                            if (_.default.isDiscordHostname(t)) {
                                let e = n.match("^/users/(\\d+)");
                                null != e && 2 === e.length ? (0, d.openUserProfileModal)({
                                    userId: e[1],
                                    analyticsLocation: {
                                        section: g.AnalyticsSections.NOTIFICATION_CENTER
                                    }
                                }) : await (0, o.default)(n)
                            }
                            S.default.track(g.AnalyticEvents.NOTIFICATION_CENTER_ACTION, {
                                action_type: T.NotificationCenterActionTypes.CLICKED,
                                notification_center_id: r.id,
                                item_type: r.type,
                                acked: f
                            })
                        }
                    }, [r, f]), R = null;
                    r.type === T.NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS && null != r.other_user && (R = (0, l.jsx)(m.default, {
                        userId: r.other_user.id
                    }));
                    let O = null != r.local_id;
                    return (0, l.jsxs)("div", {
                        className: C.row,
                        children: [(0, l.jsxs)(i.ClickableContainer, {
                            className: C.rowContent,
                            focusProps: {
                                offset: 4
                            },
                            "aria-label": r.body,
                            onClick: E,
                            children: [f ? null : (0, l.jsx)("div", {
                                className: C.unread
                            }), (0, l.jsx)(I.ForYouItemImage, {
                                item: r
                            }), (0, l.jsxs)("div", {
                                className: C.body,
                                children: ["lifecycle_item" === r.type && null != r.item_enum && (0, l.jsx)(v, {
                                    item: r
                                }), (0, l.jsx)(i.Text, {
                                    variant: "text-md/normal",
                                    color: f ? "text-muted" : "text-normal",
                                    children: u.default.parse(r.body)
                                }), (null === (t = r.message) || void 0 === t ? void 0 : t.content) != null ? (0, l.jsx)(D, {
                                    item: r
                                }) : null, null != r.callout ? (0, l.jsx)(y, {
                                    item: r
                                }) : null, (0, l.jsx)(i.Text, {
                                    variant: "text-xs/medium",
                                    color: f ? "text-muted" : "header-secondary",
                                    children: (0, p.getRelativeTimestamp)(s.default.extractTimestamp(r.id))
                                }), R]
                            })]
                        }), O ? null : (0, l.jsx)(A.MoreButton, {
                            item: r
                        })]
                    })
                }),
                L = a.memo(function(e) {
                    let {
                        items: t
                    } = e, n = c.NotificationCenterAckedBeforeId.useSetting();
                    return (0, l.jsx)(l.Fragment, {
                        children: t.map(e => (0, l.jsx)(P, {
                            item: e,
                            ackedBeforeId: n
                        }, e.id))
                    })
                })
        },
        778597: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("77078"),
                i = n("736964"),
                r = n("782340"),
                o = n("183419");

            function u(e) {
                let {
                    userId: t
                } = e, n = a.useCallback(e => {
                    e.stopPropagation(), i.default.cancelFriendRequest(t)
                }, [t]), u = a.useCallback(e => {
                    e.stopPropagation(), i.default.addRelationship({
                        userId: t
                    })
                }, [t]);
                return (0, l.jsxs)("div", {
                    className: o.friendRequestContainer,
                    children: [(0, l.jsx)(s.Button, {
                        className: o.acceptButton,
                        look: s.Button.Looks.FILLED,
                        color: s.Button.Colors.GREEN,
                        size: s.Button.Sizes.NONE,
                        onClick: u,
                        children: (0, l.jsx)(s.Text, {
                            variant: "text-sm/medium",
                            color: "always-white",
                            children: r.default.Messages.FRIEND_REQUEST_ACCEPT
                        })
                    }), (0, l.jsx)(s.Button, {
                        className: o.ignoreButton,
                        look: s.Button.Looks.FILLED,
                        color: s.Button.Colors.PRIMARY,
                        size: s.Button.Sizes.NONE,
                        onClick: n,
                        children: (0, l.jsx)(s.Text, {
                            variant: "text-sm/medium",
                            color: "always-white",
                            children: r.default.Messages.FRIEND_REQUEST_IGNORE
                        })
                    })]
                })
            }
        },
        960082: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MoreButton: function() {
                    return f
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("77078"),
                i = n("211248"),
                r = n("433487"),
                o = n("228220"),
                u = n("352273"),
                d = n("782340");
            let c = e => {
                    let {
                        item: t,
                        closePopout: n
                    } = e;
                    return (0, l.jsx)(s.Menu, {
                        navId: "notification-actions",
                        onClose: n,
                        onSelect: n,
                        "aria-label": d.default.Messages.RECENTS_NOTIFICATIONS_MENU_LABEL,
                        children: (0, l.jsx)(s.MenuItem, {
                            id: "delete",
                            label: d.default.Messages.DELETE,
                            icon: o.default,
                            action: async () => {
                                await (0, u.deleteNotificationCenterItem)(t)
                            }
                        })
                    })
                },
                f = a.memo(function(e) {
                    let {
                        item: t
                    } = e;
                    return (0, l.jsx)(s.Popout, {
                        renderPopout: e => (0, l.jsx)(c, {
                            ...e,
                            item: t
                        }),
                        position: "bottom",
                        align: "right",
                        animation: s.Popout.Animation.NONE,
                        children: e => {
                            let {
                                onClick: t
                            } = e;
                            return (0, l.jsx)(i.default, {
                                tooltip: d.default.Messages.MORE,
                                color: i.CircleIconButtonColors.TERTIARY,
                                icon: (0, l.jsx)(r.default, {
                                    height: 16,
                                    width: 16
                                }),
                                onClick: e => {
                                    e.stopPropagation(), t(e)
                                },
                                "aria-haspopup": "menu"
                            })
                        }
                    })
                })
        },
        673699: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("759843"),
                i = n("974667"),
                r = n("77078"),
                o = n("510889"),
                u = n("428958"),
                d = n("839743"),
                c = n("322964"),
                f = n("954416");

            function E(e) {
                let {
                    initialized: t,
                    items: n,
                    loading: E,
                    loadMore: S
                } = e, _ = a.useRef(null), h = (0, o.default)("for-you", _);
                (0, u.default)({
                    type: s.ImpressionTypes.VIEW,
                    name: s.ImpressionNames.NOTIFICATION_CENTER_LANDING,
                    properties: {
                        empty: 0 === n.length
                    }
                }, {
                    disableTrack: !t
                }, [t]);
                let T = () => {
                    var e;
                    let t = null === (e = _.current) || void 0 === e ? void 0 : e.getScrollerState();
                    if (null == t) return;
                    let n = t.scrollHeight - t.scrollTop - t.offsetHeight;
                    n < 1500 && S()
                };
                return t ? 0 === n.length ? (0, l.jsx)(d.ForYouEmptyState, {}) : (0, l.jsx)(l.Fragment, {
                    children: (0, l.jsx)(i.ListNavigatorProvider, {
                        navigator: h,
                        children: (0, l.jsx)(i.ListNavigatorContainer, {
                            children: e => {
                                let {
                                    ref: t,
                                    ...a
                                } = e;
                                return (0, l.jsxs)(r.AdvancedScroller, {
                                    className: f.container,
                                    ref: e => {
                                        var n;
                                        _.current = e, t.current = null !== (n = null == e ? void 0 : e.getScrollerNode()) && void 0 !== n ? n : null
                                    },
                                    ...a,
                                    onScroll: T,
                                    children: [(0, l.jsx)(c.ForYouItems, {
                                        items: n
                                    }), E ? (0, l.jsx)(r.Spinner, {
                                        className: f.spinner
                                    }) : null]
                                })
                            }
                        })
                    })
                }) : (0, l.jsx)(r.Spinner, {
                    className: f.loadingPlaceholder
                })
            }
        },
        167209: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                isEligibleForPomelo: function() {
                    return i
                },
                useIsEligibleForPomelo: function() {
                    return r
                }
            });
            var l = n("65597"),
                a = n("697218"),
                s = n("553257");
            let i = () => o(a.default.getCurrentUser(), (0, s.getPomeloEligibility)()),
                r = () => o((0, l.default)([a.default], () => a.default.getCurrentUser()), (0, s.usePomeloEligibility)());

            function o(e, t) {
                return !(null == e || e.isPomelo()) && !!e.hasVerifiedEmailOrPhone() && !!t && !0
            }
        },
        104032: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var l = n("866227"),
                a = n.n(l),
                s = n("446674"),
                i = n("913144"),
                r = n("388290"),
                o = n("697218"),
                u = n("719923");
            let d = !1;
            class c extends s.default.Store {
                shouldShowReactivateNotice() {
                    let e = o.default.getCurrentUser();
                    return !(0, u.isPremium)(e) && d
                }
            }
            c.displayName = "SubscriptionRemindersStore";
            var f = new c(i.default, {
                BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: function(e) {
                    let {
                        subscription: t
                    } = e;
                    if (null != t) {
                        var n;
                        let e = r.default.createFromServer(t),
                            l = (0, u.getPremiumPlanItem)(e);
                        if (null == l || (null === (n = e.metadata) || void 0 === n ? void 0 : n.ended_at) == null) return;
                        let s = a(e.metadata.ended_at);
                        a().isBetween(s.clone().add(4, "days"), s.clone().add(11, "days")) && (d = !0)
                    }
                }
            })
        },
        983424: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PremiumTier2TrialOfferNoticeExperiment: function() {
                    return a
                },
                default: function() {
                    return s
                }
            });
            var l = n("862205");
            let a = (0, l.createExperiment)({
                kind: "user",
                id: "2023-10_premium_tier_2_trial_offer_expiring_notice",
                label: "Premium Tier 2 Trial Offer Expiring Notice",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enabled",
                    config: {
                        enabled: !0
                    }
                }]
            });
            var s = function() {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                    t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return a.useExperiment({
                    location: "experiment_hook"
                }, {
                    autoTrackExposure: e,
                    disable: t
                })
            }
        },
        897107: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("862205");
            let a = (0, l.createExperiment)({
                kind: "user",
                id: "2023-09_window_32_deprecation_message",
                label: "show deprecation message for 32-bit Windows",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "show message",
                    config: {
                        enabled: !0
                    }
                }]
            });
            var s = a
        },
        840895: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("862205");
            let a = (0, l.createExperiment)({
                kind: "user",
                id: "2023-09_proxy_block_notice",
                label: "Proxy Block Experiment",
                defaultConfig: {
                    eligibleForNotice: !1
                },
                treatments: [{
                    id: 1,
                    label: "Show nag bar when proxy blocks an API request",
                    config: {
                        eligibleForNotice: !0
                    }
                }]
            });
            var s = a
        },
        143573: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("446674"),
                a = n("913144");
            let s = !1;
            class i extends l.default.Store {
                get blockedByProxy() {
                    return s
                }
            }
            i.displayName = "ProxyBlockStore";
            var r = new i(a.default, {
                PROXY_BLOCKED_REQUEST: function(e) {
                    s = !0
                }
            })
        },
        138217: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return H
                }
            });
            var l = n("917351"),
                a = n.n(l),
                s = n("446674"),
                i = n("95410"),
                r = n("398183"),
                o = n("913144"),
                u = n("692038"),
                d = n("406297"),
                c = n("913491"),
                f = n("915639"),
                E = n("719926"),
                S = n("271938"),
                _ = n("42203"),
                h = n("377253"),
                T = n("660478"),
                p = n("27618"),
                N = n("162771"),
                I = n("282109"),
                m = n("697218"),
                A = n("49111");
            let g = "recentMentionFilterSettings",
                R = [],
                C = {},
                O = !1,
                M = !0,
                D = i.default.get(g, {
                    guildFilter: A.RecentMentionsFilters.ALL_SERVERS,
                    everyoneFilter: !0,
                    roleFilter: !0
                }),
                y = !1,
                v = 0,
                P = !1,
                L = !1;

            function U(e) {
                if (e instanceof E.default) return e;
                let t = h.default.getMessage(e.channel_id, e.id);
                return null != t ? t : (0, u.createMessageRecord)(e)
            }

            function F(e) {
                var t;
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                if ((0, c.default)(e)) return null;
                null == n && (n = e.channel_id);
                let l = _.default.getChannel(n);
                if (null == l || l.type === A.ChannelTypes.DM || D.guildFilter === A.RecentMentionsFilters.THIS_SERVER && l.getGuildId() !== N.default.getGuildId()) return null;
                let a = null === (t = e.author) || void 0 === t ? void 0 : t.id,
                    s = S.default.getId();
                if (null != a && p.default.isBlocked(a) || a === s) return null;
                e = U(e);
                let i = !D.everyoneFilter,
                    r = !D.roleFilter;
                return (0, d.default)({
                    message: e,
                    userId: s,
                    suppressEveryone: i,
                    suppressRoles: r
                }) ? (L && T.default.ackMessageId(l.id) !== e.id && (0, d.default)({
                    message: e,
                    userId: s,
                    suppressEveryone: I.default.isSuppressEveryoneEnabled(l.getGuildId()),
                    suppressRoles: I.default.isSuppressRolesEnabled(l.getGuildId())
                }) && (L = !1), e) : null
            }

            function x(e) {
                if (null == C[e]) return !1;
                delete C[e], R = a.filter(R, t => {
                    let {
                        id: n
                    } = t;
                    return n !== e
                })
            }

            function b(e) {
                let {
                    id: t
                } = e;
                return x(t)
            }

            function G(e) {
                let t = {
                    ...D
                };
                D = a.defaults(a.pick(e, ["guildFilter", "roleFilter", "everyoneFilter"]), D), i.default.set(g, D);
                let n = (e, n) => t[e] !== D[e] && D[e] === n,
                    l = n("guildFilter", A.RecentMentionsFilters.THIS_SERVER) || n("everyoneFilter", !1) || n("roleFilter", !1);
                C = {};
                let s = [];
                l && R.forEach(e => {
                    let t = F(e);
                    null != t && (s.push(t), C[t.id] = !0)
                }), 0 === (R = s).length && (y = !1)
            }

            function k() {
                a.forEach(R, e => {
                    e.timestamp.locale(f.default.locale)
                })
            }

            function j() {
                R = R.filter(e => !p.default.isBlocked(e.author.id))
            }

            function B(e) {
                let {
                    channel: t
                } = e;
                R = a.filter(R, e => e.channel_id !== t.id || (delete C[e.id], !1))
            }
            class w extends s.default.Store {
                initialize() {
                    this.waitFor(m.default, _.default, h.default, T.default)
                }
                isOpen() {
                    return P
                }
                get hasLoadedEver() {
                    return y
                }
                get lastLoaded() {
                    return v
                }
                getMentions() {
                    return y || R.length > 0 ? R : null
                }
                hasMention(e) {
                    return C[e]
                }
                get loading() {
                    return O
                }
                get hasMore() {
                    return M
                }
                get guildFilter() {
                    return D.guildFilter
                }
                get everyoneFilter() {
                    return D.everyoneFilter
                }
                get roleFilter() {
                    return D.roleFilter
                }
                get mentionsAreStale() {
                    return L
                }
            }
            w.displayName = "RecentMentionsStore";
            var H = new w(o.default, {
                LOAD_RECENT_MENTIONS: function(e) {
                    let {
                        guildId: t
                    } = e;
                    O = !0, null == t && D.guildFilter === A.RecentMentionsFilters.THIS_SERVER && G({
                        guildFilter: A.RecentMentionsFilters.ALL_SERVERS
                    })
                },
                LOAD_RECENT_MENTIONS_SUCCESS: function(e) {
                    let {
                        hasMoreAfter: t,
                        messages: n,
                        isAfter: l
                    } = e, s = a.map(n, U);
                    l ? R = R.concat(s) : (R = s, C = {}), a.forEach(s, e => {
                        C[e.id] = !0
                    }), O = !1, M = t, v = (0, r.now)(), y = !0
                },
                LOAD_RECENT_MENTIONS_FAILURE: function() {
                    O = !1
                },
                SET_RECENT_MENTIONS_FILTER: G,
                TRUNCATE_MENTIONS: function(e) {
                    let {
                        size: t
                    } = e;
                    for (let e = t; e < R.length; ++e) delete C[R[e].id];
                    let n = R.length;
                    n > (R = R.slice(0, t)).length && (M = !0)
                },
                CHANNEL_SELECT: function() {
                    if (D.guildFilter !== A.RecentMentionsFilters.THIS_SERVER) return !1;
                    y = !1
                },
                CONNECTION_OPEN: function() {
                    R = [], C = {}, y = !1, L = !1
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    R = a.filter(R, e => {
                        let n = _.default.getChannel(e.channel_id);
                        return null != n && n.getGuildId() !== t.id || (delete C[e.id], !1)
                    })
                },
                MESSAGE_CREATE: function(e) {
                    let {
                        channelId: t,
                        message: n
                    } = e, l = m.default.getCurrentUser();
                    if (null == l || !(0, d.isRawMessageMentioned)({
                            rawMessage: n,
                            userId: l.id,
                            suppressRoles: !1,
                            suppressEveryone: !1
                        })) return !1;
                    let a = F(n, t);
                    if (null == a) return !1;
                    (R = R.slice()).unshift(a), C[a.id] = !0
                },
                MESSAGE_UPDATE: function(e) {
                    let t = e.message.id;
                    if (null == C[String(t)]) return !1;
                    let n = a.findIndex(R, e => {
                        let {
                            id: n
                        } = e;
                        return n === t
                    });
                    R = R.slice();
                    let l = R[n];
                    null != l && (R[n] = (0, u.updateMessageRecord)(l, e.message))
                },
                MESSAGE_DELETE: b,
                RECENT_MENTION_DELETE: b,
                MESSAGE_DELETE_BULK: function(e) {
                    let {
                        ids: t
                    } = e;
                    a.forEach(t, x)
                },
                USER_SETTINGS_PROTO_UPDATE: k,
                I18N_LOAD_SUCCESS: k,
                CHANNEL_DELETE: B,
                THREAD_DELETE: B,
                RELATIONSHIP_ADD: j,
                RELATIONSHIP_REMOVE: j,
                MENTION_MODAL_OPEN: function() {
                    P = !0
                },
                MENTION_MODAL_CLOSE: function() {
                    P = !1
                },
                SET_RECENT_MENTIONS_STALE: function(e) {
                    L = !0
                }
            })
        },
        440612: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                FloatingActionButton: function() {
                    return i
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("77078"),
                s = n("102253");
            let i = e => {
                let {
                    text: t,
                    icon: n,
                    onClick: i
                } = e;
                return (0, l.jsxs)(a.Button, {
                    className: s.button,
                    innerClassName: s.buttonInner,
                    onClick: i,
                    children: [(0, l.jsx)(n, {}), (0, l.jsx)(a.Text, {
                        variant: "text-md/semibold",
                        color: "none",
                        children: t
                    })]
                })
            }
        },
        981024: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return A
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("249654"),
                i = n("446674"),
                r = n("151426"),
                o = n("136511"),
                u = n("360191"),
                d = n("342176"),
                c = n("396539"),
                f = n("673699"),
                E = n("845579"),
                S = n("211248"),
                _ = n("11539"),
                h = n("599110"),
                T = n("64318"),
                p = n("49111"),
                N = n("782340"),
                I = n("358468");

            function m(e) {
                let {
                    onClick: t
                } = e;
                return (0, l.jsx)(S.default, {
                    tooltip: N.default.Messages.MARK_ALL_AS_READ,
                    color: S.CircleIconButtonColors.SECONDARY,
                    icon: (0, l.jsx)(_.default, {}),
                    onClick: t
                })
            }

            function A(e) {
                let {
                    setTab: t,
                    badgeState: n,
                    closePopout: S
                } = e, {
                    initialized: _,
                    items: N,
                    loading: A,
                    loadMore: g
                } = (0, c.useDesktopNotificationCenterItemsLoader)(), R = (0, i.useStateFromStores)([o.default], () => o.default.localItems), C = a.useMemo(() => [...[...N, ...R].sort((e, t) => -1 * s.default.compare(e.id, t.id))], [N, R]), O = N.length > 0 ? N[0] : null, M = E.NotificationCenterAckedBeforeId.useSetting(), D = a.useMemo(() => {
                    let e = null != O && 0 >= s.default.compare(O.id, M);
                    if (e) return !1;
                    for (let e of C) {
                        if (0 >= s.default.compare(e.id, M)) break;
                        if (!(0, d.isRemoteAcked)(e, M)) return !0
                    }
                    return !1
                }, [O, M, C]);
                return (0, l.jsxs)("div", {
                    className: I.container,
                    children: [(0, l.jsx)(T.default, {
                        tab: r.InboxTab.FOR_YOU,
                        setTab: t,
                        badgeState: n,
                        closePopout: S,
                        children: D ? (0, l.jsx)(m, {
                            onClick: () => {
                                null != O && (E.NotificationCenterAckedBeforeId.updateSetting(O.id), h.default.track(p.AnalyticEvents.NOTIFICATION_CENTER_ACTION, {
                                    action_type: u.NotificationCenterActionTypes.MARK_ALL_READ
                                }))
                            }
                        }) : null
                    }), (0, l.jsx)(f.default, {
                        initialized: _,
                        items: C,
                        loading: A,
                        loadMore: g
                    })]
                })
            }
        },
        124031: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("446674"),
                s = n("77078"),
                i = n("630086"),
                r = n("20606"),
                o = n("360191"),
                u = n("393414"),
                d = n("27618"),
                c = n("564875"),
                f = n("956089"),
                E = n("599110"),
                S = n("49111"),
                _ = n("782340"),
                h = n("805122");

            function T(e) {
                let {
                    closePopout: t
                } = e, n = (0, a.useStateFromStores)([d.default], () => d.default.getPendingCount());
                return (0, l.jsx)(s.TooltipContainer, {
                    text: _.default.Messages.VIEW_FRIEND_REQUESTS,
                    children: (0, l.jsxs)(s.Clickable, {
                        className: h.friendRequestsButton,
                        onClick: () => {
                            E.default.track(S.AnalyticEvents.NOTIFICATION_CENTER_ACTION, {
                                action_type: o.NotificationCenterActionTypes.FRIEND_REQUESTS_BUTTON_CLICK
                            }), (0, u.transitionTo)(S.Routes.FRIENDS), i.default.setSection(S.FriendsSections.PENDING), t()
                        },
                        children: [(0, l.jsx)(c.default, {}), (0, l.jsx)(f.NumberBadge, {
                            count: n,
                            color: r.default.BACKGROUND_ACCENT
                        })]
                    })
                })
            }
        },
        530686: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("77078"),
                o = n("782340"),
                u = n("909550");

            function d(e) {
                let {
                    className: t,
                    onJump: n
                } = e, [s, d] = a.useState(!1);
                return (0, l.jsx)(r.Clickable, {
                    className: i(u.jumpButton, t),
                    onClick: e => {
                        d(!0), n(e)
                    },
                    children: s ? (0, l.jsx)(r.Spinner, {
                        type: r.Spinner.Type.PULSING_ELLIPSIS
                    }) : (0, l.jsx)(r.Text, {
                        variant: "text-xs/normal",
                        className: u.text,
                        children: o.default.Messages.JUMP
                    })
                })
            }
        },
        150938: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("77078"),
                i = n("913796"),
                r = n("211248"),
                o = n("11539"),
                u = n("599110"),
                d = n("440612"),
                c = n("49111"),
                f = n("782340");

            function E(e) {
                let {
                    type: t,
                    onClick: n
                } = e, [s, E] = a.useState(!1), _ = (0, i.useInDesktopNotificationCenterExperiment)(), h = () => {
                    n(), u.default.track(c.AnalyticEvents.INBOX_CHANNEL_ACKED, {
                        marked_all_channels_as_read: !0,
                        num_unread_channels_remaining: 0
                    })
                }, T = e => {
                    e.shiftKey ? h() : E(!0)
                };
                return (0, l.jsxs)(l.Fragment, {
                    children: [s ? (0, l.jsx)(S, {
                        confirm: h,
                        cancel: () => E(!1)
                    }) : null, "bottom-floating" === t ? (0, l.jsx)(d.FloatingActionButton, {
                        text: f.default.Messages.MARK_ALL_AS_READ,
                        icon: o.default,
                        onClick: T
                    }) : (0, l.jsx)(r.default, {
                        tooltip: _ ? f.default.Messages.MARK_ALL_AS_READ : f.default.Messages.UNREADS_MARK_READ,
                        color: r.CircleIconButtonColors.SECONDARY,
                        icon: (0, l.jsx)(o.default, {}),
                        onClick: T
                    })]
                })
            }

            function S(e) {
                let {
                    cancel: t,
                    confirm: n
                } = e;
                return (0, l.jsx)(s.DeclarativeConfirmModal, {
                    dismissable: !0,
                    header: f.default.Messages.UNREADS_CONFIRM_MARK_ALL_READ_HEADER,
                    confirmText: f.default.Messages.MARK_AS_READ,
                    cancelText: f.default.Messages.CANCEL,
                    confirmButtonColor: s.Button.Colors.BRAND,
                    onCancel: t,
                    onConfirm: n,
                    children: (0, l.jsx)(s.Text, {
                        color: "text-normal",
                        variant: "text-sm/normal",
                        children: f.default.Messages.UNREADS_CONFIRM_MARK_ALL_READ_DESCRIPTION
                    })
                })
            }
        },
        519540: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return B
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("627445"),
                o = n.n(r),
                u = n("866227"),
                d = n.n(u),
                c = n("446674"),
                f = n("151426"),
                E = n("77078"),
                S = n("272030"),
                _ = n("819689"),
                h = n("843962"),
                T = n("679653"),
                p = n("931318"),
                N = n("520899"),
                I = n("988864"),
                m = n("960808"),
                A = n("45835"),
                g = n("699473"),
                R = n("393414"),
                C = n("845579"),
                O = n("42203"),
                M = n("305961"),
                D = n("377253"),
                y = n("109024"),
                v = n("93393"),
                P = n("11539"),
                L = n("672571"),
                U = n("805614"),
                F = n("64318"),
                x = n("49111"),
                b = n("782340"),
                G = n("533370"),
                k = n("228146");
            let j = {
                offset: {
                    left: 4,
                    right: -12
                }
            };

            function B(e) {
                let {
                    setTab: t,
                    closePopout: n
                } = e, s = (0, c.useStateFromStores)([N.default], () => N.default.getMessageReminders());
                a.useEffect(() => () => {
                    (0, p.cleanupMessageReminders)()
                }, []);
                let [i, r] = a.useState(!1), o = a.useMemo(() => s.filter(e => null == e.dueAt || e.dueAt < new Date), [s]), u = i ? s : o, d = u.filter(e => !(0, I.savedMessageHasMetadata)(e));
                return (0, m.useMessageRemindersLoader)(d), (0, l.jsxs)("div", {
                    className: G.container,
                    children: [(0, l.jsx)(F.default, {
                        tab: f.InboxTab.TODOS,
                        setTab: t,
                        closePopout: n
                    }), (0, l.jsxs)("div", {
                        className: G.headerText,
                        children: [(0, l.jsx)(E.Heading, {
                            variant: "heading-lg/bold",
                            children: i ? b.default.Messages.MESSAGE_REMINDERS_HEADER_ALL : b.default.Messages.MESSAGE_REMINDERS_HEADER_OVERDUE
                        }), (0, l.jsx)(E.Anchor, {
                            onClick: () => r(!i),
                            children: (0, l.jsx)(E.Text, {
                                variant: "text-sm/normal",
                                color: "text-link",
                                children: i ? b.default.Messages.MESSAGE_REMINDERS_HEADER_SHOW_OVERDUE.format({
                                    count: o.length
                                }) : b.default.Messages.MESSAGE_REMINDERS_HEADER_SHOW_ALL.format({
                                    count: s.length
                                })
                            })
                        })]
                    }), 0 === u.length ? (0, l.jsx)(H, {}) : null, (0, l.jsx)(E.AdvancedScrollerThin, {
                        children: u.map(e => (function(e) {
                            return [(0, l.jsx)(w, {
                                messageId: e.messageId
                            }, e.messageId)]
                        })(e))
                    })]
                })
            }

            function w(e) {
                let t, {
                        messageId: a
                    } = e,
                    s = (0, c.useStateFromStores)([N.default], () => N.default.getMessageReminders().find(e => e.messageId === a));
                o(null != s, "should not be rendering a to-do message without a to-do message");
                let r = s.complete,
                    u = (0, c.useStateFromStores)([D.default], () => D.default.getMessage(s.channelId, s.messageId)),
                    {
                        message: f,
                        channel: I
                    } = (0, A.getSavedMessageAndChannel)(s),
                    m = O.default.getChannel(I.id),
                    P = (0, T.default)(m, !0),
                    U = null != P ? P : I.name,
                    F = (0, c.useStateFromStores)([M.default], () => M.default.getGuild(null == I ? void 0 : I.guild_id)),
                    B = null != I ? (0, h.getChannelIconURL)(I) : null,
                    w = null;
                return null != s.dueAt && (s.dueAt > new Date ? (t = "text-muted", w = b.default.Messages.MESSAGE_REMINDERS_DUE_IN.format({
                    duration: d.duration(s.dueAt.getTime() - Date.now(), "millisecond").humanize()
                })) : (t = "text-danger", w = b.default.Messages.MESSAGE_REMINDERS_OVERDUE.format({
                    duration: d.duration(Date.now() - s.dueAt.getTime(), "millisecond").humanize()
                }))), (0, l.jsxs)("div", {
                    className: k.container,
                    children: [(0, l.jsxs)("div", {
                        className: G.messageHeader,
                        children: [(0, l.jsxs)("div", {
                            children: [(0, l.jsxs)("div", {
                                className: G.messageInfo,
                                children: [null != F ? (0, l.jsx)(y.default, {
                                    className: G.guildIcon,
                                    guild: F,
                                    size: y.default.Sizes.SMALL,
                                    active: !0
                                }) : (0, l.jsx)(E.Avatar, {
                                    "aria-hidden": !0,
                                    src: null != B ? B : n("518533"),
                                    size: E.AvatarSizes.SIZE_32
                                }), (0, l.jsx)(E.Text, {
                                    variant: "text-md/medium",
                                    color: "header-primary",
                                    selectable: !0,
                                    children: U
                                })]
                            }), null != s.notes && s.notes.length > 0 ? (0, l.jsxs)(E.Text, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                className: G.notes,
                                selectable: !0,
                                children: [(0, l.jsx)(L.default, {
                                    width: 12,
                                    height: 12
                                }), s.notes]
                            }) : null, null != w ? (0, l.jsx)(E.Text, {
                                variant: "text-sm/medium",
                                color: t,
                                style: {
                                    marginTop: 4
                                },
                                children: w
                            }) : null]
                        }), (0, l.jsxs)("div", {
                            className: G.reminderActions,
                            children: [(0, l.jsx)(E.TooltipContainer, {
                                text: b.default.Messages.MESSAGE_REMINDERS_SNOOZE,
                                children: (0, l.jsx)(E.Clickable, {
                                    onClick: e => (0, S.openContextMenuLazy)(e, async () => {
                                        let {
                                            default: e
                                        } = await n.el("763582").then(n.bind(n, "763582"));
                                        return t => (0, l.jsx)(e, {
                                            ...t,
                                            message: f
                                        })
                                    }),
                                    className: G.clock,
                                    children: (0, l.jsx)(v.default, {})
                                })
                            }), (0, l.jsx)(E.Checkbox, {
                                type: E.Checkbox.Types.INVERTED,
                                value: r,
                                onChange: (e, t) => {
                                    (0, p.toggleMessageReminders)(s.messageId, t)
                                }
                            })]
                        })]
                    }), (0, l.jsxs)("div", {
                        className: i(k.messageContainer, G.unloadedMessage, {
                            [G.disabledMessage]: r
                        }),
                        children: [(0, l.jsx)(g.default, {
                            message: f,
                            channel: I,
                            className: k.message,
                            compact: C.MessageDisplayCompact.getSetting(),
                            animateAvatar: !1,
                            focusProps: j,
                            trackAnnouncementViews: !0
                        }, f.id), (0, l.jsxs)("div", {
                            className: G.actions,
                            children: [null == u ? (0, l.jsx)(E.Button, {
                                onClick: () => {
                                    _.default.fetchMessages({
                                        channelId: s.channelId,
                                        limit: 1,
                                        jump: {
                                            messageId: s.messageId,
                                            flash: !1,
                                            offset: 1
                                        }
                                    })
                                },
                                size: E.Button.Sizes.MIN,
                                color: E.Button.Colors.TRANSPARENT,
                                className: G.loadButton,
                                children: (0, l.jsx)(E.Text, {
                                    variant: "text-xs/normal",
                                    children: "Load"
                                })
                            }) : null, (0, l.jsx)(E.Button, {
                                onClick: () => {
                                    (0, R.transitionTo)(x.Routes.CHANNEL(null == I ? void 0 : I.getGuildId(), s.channelId, s.messageId))
                                },
                                size: E.Button.Sizes.MIN,
                                color: E.Button.Colors.TRANSPARENT,
                                className: G.loadButton,
                                children: (0, l.jsx)(E.Text, {
                                    variant: "text-xs/normal",
                                    children: b.default.Messages.JUMP
                                })
                            })]
                        })]
                    })]
                })
            }

            function H() {
                let e = (0, c.useStateFromStores)([N.default], () => N.default.getMessageReminders().length > 0);
                return e ? null : (0, l.jsx)(U.default, {
                    Icon: P.default,
                    header: b.default.Messages.MESSAGE_REMINDERS_EMPTY,
                    tip: b.default.Messages.MESSAGE_REMINDERS_EMPTY_TIP
                })
            }
        },
        333491: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("458960"),
                o = n("65597"),
                u = n("206230"),
                d = n("979268"),
                c = n("520899"),
                f = n("954038");
            class E extends a.PureComponent {
                componentDidUpdate(e) {
                    e.count < this.props.count && !this.props.reducedMotion && r.default.sequence([r.default.timing(this.animationScale, {
                        toValue: 1.8,
                        duration: 300
                    }), r.default.timing(this.animationScale, {
                        toValue: 1,
                        duration: 200
                    })]).start()
                }
                render() {
                    let {
                        count: e,
                        className: t
                    } = this.props;
                    return 0 === e ? null : (0, l.jsx)(r.default.div, {
                        className: i(f.badge, t),
                        style: {
                            transform: [{
                                scale: this.animationScale
                            }]
                        },
                        children: e
                    })
                }
                constructor(...e) {
                    super(...e), this.animationScale = new r.default.Value(1)
                }
            }

            function S(e) {
                let {
                    className: t
                } = e, {
                    showReminders: n
                } = d.default.useExperiment({
                    location: "f79435_1"
                }, {
                    autoTrackExposure: !1
                }), a = (0, o.default)([c.default], () => n ? c.default.getOverdueMessageReminderCount() : 0, [n]), s = (0, o.default)([u.default], () => u.default.useReducedMotion);
                return n ? (0, l.jsx)(E, {
                    count: a,
                    className: t,
                    reducedMotion: s
                }) : null
            }
        },
        815978: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("77078"),
                s = n("957825"),
                i = n("547772"),
                r = n("211248"),
                o = n("660279"),
                u = n("49111"),
                d = n("782340");

            function c(e) {
                let {
                    channel: t
                } = e;
                return (0, l.jsx)(a.Popout, {
                    align: "right",
                    animation: a.Popout.Animation.NONE,
                    position: "bottom",
                    renderPopout: e => t.isThread() ? (0, l.jsx)(i.default, {
                        ...e,
                        channel: t,
                        navId: "recents-thread-notifications",
                        label: d.default.Messages.RECENTS_NOTIFICATIONS_MENU_LABEL
                    }) : (0, l.jsx)(s.default, {
                        ...e,
                        channel: t,
                        navId: "recents-notifications",
                        label: d.default.Messages.RECENTS_NOTIFICATIONS_MENU_LABEL,
                        location: {
                            section: u.AnalyticsSections.INBOX
                        },
                        includeGuildMute: !0
                    }),
                    children: e => {
                        let {
                            onClick: t
                        } = e;
                        return (0, l.jsx)(r.default, {
                            tooltip: d.default.Messages.NOTIFICATION_SETTINGS,
                            color: r.CircleIconButtonColors.TERTIARY,
                            icon: (0, l.jsx)(o.default, {
                                width: 16,
                                height: 16
                            }),
                            onClick: t
                        })
                    }
                })
            }
        },
        80649: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return D
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("446674"),
                i = n("151426"),
                r = n("789207"),
                o = n("590514"),
                u = n("84339"),
                d = n("699473"),
                c = n("845579"),
                f = n("42203"),
                E = n("18494"),
                S = n("211248"),
                _ = n("116320"),
                h = n("945330"),
                T = n("138217"),
                p = n("530686"),
                N = n("998530"),
                I = n("814744"),
                m = n("805614"),
                A = n("64318"),
                g = n("49111"),
                R = n("782340"),
                C = n("228146");
            let O = {
                offset: {
                    left: 4,
                    right: -12
                }
            };

            function M(e, t, n) {
                let l = t ? T.default.guildFilter : null,
                    a = t ? T.default.roleFilter : null,
                    s = t ? T.default.everyoneFilter : null,
                    i = null;
                null != e && null != l && (i = l === g.RecentMentionsFilters.ALL_SERVERS ? null : e.getGuildId()), r.default.fetchRecentMentions(n, g.MAX_MENTIONS_PER_FETCH, i, a, s)
            }

            function D(e) {
                let {
                    setTab: t,
                    onJump: n,
                    badgeState: d,
                    closePopout: c
                } = e, S = (0, s.useStateFromStores)([f.default, E.default], () => f.default.getChannel(E.default.getChannelId())), {
                    messages: _,
                    hasMore: h,
                    loading: p,
                    guildFilter: I,
                    roleFilter: m,
                    everyoneFilter: O
                } = (0, s.useStateFromStoresObject)([T.default], () => ({
                    messages: T.default.getMentions(),
                    hasMore: T.default.hasMore,
                    loading: T.default.loading,
                    guildFilter: T.default.guildFilter,
                    roleFilter: T.default.roleFilter,
                    everyoneFilter: T.default.everyoneFilter
                })), D = (0, u.default)(I), y = (0, u.default)(m), P = (0, u.default)(O);
                a.useEffect(() => {
                    if (!T.default.hasLoadedEver) {
                        M(S, !0);
                        return
                    }(null != D && I !== D || null != y && m !== y || null != P && O !== P) && M(S, !0)
                }, [D, I, y, m, P, O, S, !0]);
                a.useEffect(() => () => {
                    r.default.truncateMentions(g.MAX_MENTIONS_PER_FETCH)
                }, []);
                let U = a.useCallback(() => (0, l.jsx)(A.default, {
                    tab: i.InboxTab.MENTIONS,
                    setTab: t,
                    badgeState: d,
                    closePopout: c,
                    children: (0, l.jsx)(N.default, {})
                }), [!0, t, d, c]);
                return (0, l.jsx)(l.Fragment, {
                    children: (0, l.jsx)(o.default, {
                        className: C.recentMentionsPopout,
                        scrollerClassName: C.scroller,
                        onFetch: () => null,
                        onJump: n,
                        onCloseMessage: function(e) {
                            r.default.deleteRecentMention(e.id)
                        },
                        channel: S,
                        messages: _,
                        loading: p,
                        hasMore: h,
                        analyticsName: "Recent Mentions",
                        loadMore: function() {
                            let e = null != _ && _.length > 0 ? _[_.length - 1].id : null;
                            M(S, !0, e)
                        },
                        canCloseAllMessages: !0,
                        renderHeader: U,
                        renderEmptyState: L,
                        renderMessage: v,
                        "aria-label": R.default.Messages.RECENT_MENTIONS,
                        listName: "recents"
                    })
                })
            }

            function y(e, t) {
                return [(0, l.jsx)(P, {
                    message: e,
                    gotoMessage: t
                }, e.id)]
            }

            function v(e, t) {
                return [(0, l.jsx)(P, {
                    message: e,
                    gotoMessage: t,
                    dismissible: !0
                }, e.id)]
            }

            function P(e) {
                let {
                    message: t,
                    gotoMessage: n,
                    dismissible: a
                } = e;
                if (null == t) return null;
                let s = f.default.getChannel(t.channel_id);
                return null == s ? null : (0, l.jsxs)("div", {
                    className: C.container,
                    children: [(0, l.jsx)(I.default, {
                        channel: s,
                        gotoChannel: n,
                        children: null != a ? (0, l.jsx)(S.default, {
                            className: C.closeButton,
                            tooltip: R.default.Messages.CLOSE,
                            color: S.CircleIconButtonColors.TERTIARY,
                            icon: (0, l.jsx)(h.default, {
                                width: 16,
                                height: 16
                            }),
                            onClick: () => r.default.deleteRecentMention(t.id)
                        }) : null
                    }), (0, l.jsxs)("div", {
                        className: C.messageContainer,
                        children: [(0, l.jsx)(p.default, {
                            className: C.jumpButton,
                            onJump: n
                        }), (0, l.jsx)(d.default, {
                            message: t,
                            channel: s,
                            className: C.message,
                            compact: c.MessageDisplayCompact.getSetting(),
                            animateAvatar: !1,
                            focusProps: O,
                            trackAnnouncementViews: !0
                        }, t.id)]
                    })]
                })
            }

            function L(e) {
                return (0, l.jsx)(m.default, {
                    Icon: _.default,
                    header: R.default.Messages.RECENT_MENTIONS_EMPTY_STATE_HEADER,
                    tip: R.default.Messages.RECENT_MENTIONS_EMPTY_STATE_TIP
                })
            }
        },
        998530: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("446674"),
                s = n("77078"),
                i = n("789207"),
                r = n("42203"),
                o = n("18494"),
                u = n("211248"),
                d = n("118530"),
                c = n("138217");
            n("440612");
            var f = n("49111"),
                E = n("782340");

            function S(e) {
                let {
                    closePopout: t,
                    onSelect: n
                } = e, u = (0, a.useStateFromStores)([r.default, o.default], () => r.default.getChannel(o.default.getChannelId())), {
                    everyoneFilter: d,
                    roleFilter: S,
                    guildFilter: _
                } = (0, a.useStateFromStoresObject)([c.default], () => {
                    let {
                        everyoneFilter: e,
                        roleFilter: t,
                        guildFilter: n
                    } = c.default;
                    return {
                        everyoneFilter: e,
                        roleFilter: t,
                        guildFilter: n
                    }
                });
                return (0, l.jsxs)(s.Menu, {
                    navId: "mentions-filter",
                    "aria-label": E.default.Messages.FILTER,
                    onClose: t,
                    onSelect: n,
                    children: [(0, l.jsx)(s.MenuCheckboxItem, {
                        id: "Everyone",
                        label: E.default.Messages.RECENT_MENTIONS_FILTER_EVERYONE,
                        action: function() {
                            i.default.setGuildFilter({
                                everyoneFilter: !d
                            })
                        },
                        checked: d
                    }), (0, l.jsx)(s.MenuCheckboxItem, {
                        id: "Roles",
                        label: E.default.Messages.RECENT_MENTIONS_FILTER_ROLES,
                        action: function() {
                            i.default.setGuildFilter({
                                roleFilter: !S
                            })
                        },
                        checked: S
                    }), null == u || u.isPrivate() ? null : (0, l.jsx)(s.MenuCheckboxItem, {
                        id: "All Servers",
                        label: E.default.Messages.RECENT_MENTIONS_FILTER_ALL_SERVERS,
                        action: function() {
                            i.default.setGuildFilter({
                                guildFilter: _ === f.RecentMentionsFilters.THIS_SERVER ? f.RecentMentionsFilters.ALL_SERVERS : f.RecentMentionsFilters.THIS_SERVER
                            })
                        },
                        checked: _ === f.RecentMentionsFilters.ALL_SERVERS
                    })]
                })
            }

            function _() {
                return (0, l.jsx)(s.Popout, {
                    align: "right",
                    animation: s.Popout.Animation.NONE,
                    position: "bottom",
                    renderPopout: e => {
                        let {
                            closePopout: t
                        } = e;
                        return (0, l.jsx)(S, {
                            closePopout: t
                        })
                    },
                    children: e => {
                        let {
                            onClick: t
                        } = e;
                        return (0, l.jsx)(u.default, {
                            tooltip: E.default.Messages.FILTER,
                            color: u.CircleIconButtonColors.SECONDARY,
                            icon: (0, l.jsx)(d.default, {}),
                            onClick: t
                        })
                    }
                })
            }
        },
        311197: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("446674"),
                s = n("913796"),
                i = n("660478"),
                r = n("697218"),
                o = n("826267"),
                u = n("664336"),
                d = n("333491"),
                c = n("263362"),
                f = n("133335"),
                E = n("782340"),
                S = n("759956");

            function _(e) {
                let {
                    onOpen: t,
                    onClose: n,
                    className: _
                } = e, h = (0, s.useInDesktopNotificationCenterExperiment)(), T = (0, a.useStateFromStores)([r.default], () => r.default.getCurrentUser()), p = (0, a.useStateFromStores)([i.default], () => !!h && (null == T ? void 0 : T.id) != null && i.default.getMentionCount(T.id, f.ReadStateTypes.NOTIFICATION_CENTER) > 0);
                return (0, l.jsx)(c.RecentsPopout, {
                    onOpen: t,
                    onClose: n,
                    badgeState: {
                        badgeForYou: p
                    },
                    popoutPosition: "bottom",
                    popoutAlign: "right",
                    children: (e, t, n) => (0, l.jsx)("div", {
                        className: S.recentsIcon,
                        children: (0, l.jsx)(u.Icon, {
                            ...n,
                            className: _,
                            onClick: e,
                            icon: o.default,
                            "aria-label": E.default.Messages.INBOX,
                            tooltip: t ? null : E.default.Messages.INBOX,
                            selected: t,
                            showBadge: p,
                            children: (0, l.jsx)(d.default, {
                                className: S.todoBadge
                            })
                        })
                    })
                })
            }
        },
        814744: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return R
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("414456"),
                s = n.n(a),
                i = n("974667"),
                r = n("446674"),
                o = n("77078"),
                u = n("943722"),
                d = n("843962"),
                c = n("679653"),
                f = n("419830"),
                E = n("373469"),
                S = n("42203"),
                _ = n("305961"),
                h = n("824563"),
                T = n("697218"),
                p = n("220677"),
                N = n("109024"),
                I = n("476765"),
                m = n("782340"),
                A = n("636431");
            let g = {
                top: 8,
                bottom: 8,
                left: -4,
                right: -4
            };

            function R(e) {
                let {
                    channel: t,
                    children: n,
                    gotoChannel: a,
                    mentionCount: s,
                    channelState: r,
                    toggleCollapsed: u
                } = e, d = (0, i.useListItem)("recents-header-".concat(t.id, "-").concat((0, I.useUID)()));
                return (0, l.jsx)(o.FocusRing, {
                    offset: g,
                    children: (0, l.jsxs)("div", {
                        className: A.channelHeader,
                        ...d,
                        tabIndex: 0,
                        "data-recents-channel": t.id,
                        onKeyDown: function(e) {
                            if (null != u && null != r && ("ArrowRight" === e.key && r.collapsed || "ArrowLeft" === e.key && !r.collapsed)) null == u || u(r)
                        },
                        children: [(0, l.jsx)(C, {
                            channel: t,
                            gotoChannel: a
                        }), (0, l.jsx)(D, {
                            channel: t,
                            gotoChannel: a,
                            mentionCount: s
                        }), n]
                    })
                })
            }

            function C(e) {
                let {
                    channel: t,
                    gotoChannel: n
                } = e;
                return t.isPrivate() ? (0, l.jsx)(O, {
                    channel: t,
                    gotoChannel: n
                }) : (0, l.jsx)(M, {
                    channel: t,
                    gotoChannel: n
                })
            }

            function O(e) {
                let {
                    channel: t,
                    gotoChannel: n
                } = e, a = (0, r.useStateFromStores)([T.default], () => t.isDM() ? T.default.getUser(t.getRecipientId()) : null), s = null == a ? (0, d.getChannelIconURL)(t) : a.getAvatarURL(void 0, 40);
                return (0, l.jsx)(o.Clickable, {
                    onClick: n,
                    tabIndex: -1,
                    children: (0, l.jsx)("img", {
                        className: A.dmIcon,
                        src: s,
                        alt: "",
                        "aria-hidden": !0
                    })
                })
            }

            function M(e) {
                let {
                    channel: t,
                    gotoChannel: n
                } = e, a = (0, r.useStateFromStores)([_.default], () => _.default.getGuild(t.guild_id));
                return null == a ? null : (0, l.jsx)(N.default, {
                    "aria-hidden": !0,
                    className: A.guildIcon,
                    guild: a,
                    size: N.default.Sizes.MEDIUM,
                    active: !0,
                    onClick: n,
                    tabIndex: -1
                })
            }

            function D(e) {
                let {
                    channel: t,
                    gotoChannel: n,
                    mentionCount: a
                } = e, i = (0, r.useStateFromStores)([_.default], () => _.default.getGuild(t.guild_id)), u = (0, r.useStateFromStores)([S.default], () => S.default.getChannel(t.parent_id)), d = (0, f.getChannelIconComponent)(t, i), E = (0, c.default)(t, !1), h = null == u ? null == i ? void 0 : i.name : "".concat(null == i ? void 0 : i.name, " › ").concat(u.name), T = t.isMultiUserDM() ? m.default.Messages.MEMBERS_HEADER.format({
                    members: t.recipients.length + 1
                }) : t.isPrivate() ? (0, l.jsx)(y, {
                    channel: t
                }) : (0, l.jsx)(o.Clickable, {
                    className: s(A.subtext, A.guildName),
                    onClick: n,
                    children: h
                });
                return (0, l.jsxs)("div", {
                    className: A.channelNameSection,
                    children: [(0, l.jsx)(o.Heading, {
                        variant: "heading-md/semibold",
                        className: A.channelNameHeader,
                        children: (0, l.jsxs)(o.Clickable, {
                            className: A.channelName,
                            onClick: n,
                            children: [t.isThread() || t.isGroupDM() || null == d ? null : (0, l.jsx)(d, {
                                className: t.isForumLikeChannel() ? A.forumIcon : void 0,
                                width: 18,
                                height: 18
                            }), (0, l.jsx)("span", {
                                className: A.channelNameSpan,
                                children: E
                            }), null != a && a > 0 ? (0, l.jsx)(p.default, {
                                value: a,
                                className: A.badge
                            }) : null]
                        })
                    }), (0, l.jsx)(o.Text, {
                        color: "header-secondary",
                        variant: "text-xs/normal",
                        className: A.subtextContainer,
                        children: T
                    })]
                })
            }

            function y(e) {
                let {
                    channel: t
                } = e, {
                    activities: n,
                    applicationStream: a
                } = (0, r.useStateFromStoresObject)([T.default, h.default, E.default], () => {
                    let e = T.default.getUser(t.getRecipientId());
                    return {
                        activities: null != e ? h.default.getActivities(e.id) : null,
                        applicationStream: null != e ? E.default.getAnyStreamForUser(e.id) : null
                    }
                });
                return null == n ? null : (0, l.jsx)(u.default, {
                    className: A.activityStatus,
                    emojiClassName: A.activityEmoji,
                    activities: n,
                    applicationStream: a,
                    hideTooltip: !0
                })
            }
        },
        805614: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("77078"),
                s = n("543289"),
                i = n("782340"),
                r = n("651245");

            function o(e) {
                let {
                    Icon: t,
                    header: n,
                    tip: o
                } = e;
                return (0, l.jsxs)("div", {
                    className: r.container,
                    children: [(0, l.jsxs)("div", {
                        className: r.iconContainer,
                        children: [(0, l.jsx)(t, {
                            className: r.icon,
                            width: 36,
                            height: 36
                        }), (0, l.jsx)(s.default, {
                            className: r.stars
                        })]
                    }), (0, l.jsx)(a.Heading, {
                        className: r.header,
                        variant: "heading-xl/semibold",
                        children: n
                    }), (0, l.jsxs)(a.Text, {
                        color: "header-secondary",
                        variant: "text-xs/normal",
                        children: [(0, l.jsxs)(a.Text, {
                            tag: "span",
                            className: r.protip,
                            variant: "text-xs/bold",
                            color: "text-positive",
                            children: [i.default.Messages.FORM_LABEL_ROLES_PRO_TIP, ":", " "]
                        }), o]
                    })]
                })
            }
        },
        64318: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("414456"),
                s = n.n(a),
                i = n("65597"),
                r = n("151426"),
                o = n("77078"),
                u = n("590514"),
                d = n("20606"),
                c = n("979268"),
                f = n("520899"),
                E = n("913796"),
                S = n("826267"),
                _ = n("956089"),
                h = n("124031"),
                T = n("782340"),
                p = n("804220");

            function N(e) {
                let t = (0, E.useInDesktopNotificationCenterExperiment)();
                return t ? (0, l.jsx)(I, {
                    ...e
                }) : (0, l.jsx)(m, {
                    ...e
                })
            }

            function I(e) {
                let {
                    tab: t,
                    setTab: n,
                    children: a,
                    badgeState: E,
                    closePopout: N
                } = e, {
                    showReminders: I
                } = c.default.useExperiment({
                    location: "489e3f_1"
                }, {
                    autoTrackExposure: !1
                }), m = (0, i.default)([f.default], () => f.default.getMessageReminders()), A = m.length;
                return (0, l.jsxs)(u.Header, {
                    className: s(p.header, p.expanded),
                    children: [(0, l.jsxs)("div", {
                        className: s(p.expandedInboxHeader),
                        children: [(0, l.jsx)(S.default, {
                            className: p.inboxIcon
                        }), (0, l.jsx)(o.Text, {
                            className: p.inboxTitle,
                            variant: "text-lg/semibold",
                            children: T.default.Messages.INBOX
                        }), (0, l.jsx)(h.default, {
                            closePopout: N
                        })]
                    }), (0, l.jsxs)("div", {
                        className: s(p.expandedTabSection),
                        children: [(0, l.jsxs)(o.TabBar, {
                            selectedItem: t,
                            type: "top-pill",
                            onItemSelect: n,
                            children: [(0, l.jsxs)(o.TabBar.Item, {
                                id: r.InboxTab.FOR_YOU,
                                "aria-label": T.default.Messages.FOR_YOU,
                                className: s(p.tab, p.expanded, {
                                    [p.active]: t === r.InboxTab.FOR_YOU
                                }),
                                children: [T.default.Messages.FOR_YOU, (null == E ? void 0 : E.badgeForYou) ? (0, l.jsx)(_.CircleBadge, {
                                    color: d.default.STATUS_DANGER,
                                    className: s(p.iconBadge)
                                }) : null]
                            }), (0, l.jsx)(o.TabBar.Item, {
                                id: r.InboxTab.UNREADS,
                                className: s(p.tab, p.expanded, {
                                    [p.active]: t === r.InboxTab.UNREADS
                                }),
                                children: T.default.Messages.UNREADS_TAB_LABEL
                            }), (0, l.jsx)(o.TabBar.Item, {
                                "aria-label": T.default.Messages.MENTIONS,
                                id: r.InboxTab.MENTIONS,
                                className: s(p.tab, p.expanded, {
                                    [p.active]: t === r.InboxTab.MENTIONS
                                }),
                                children: T.default.Messages.MENTIONS
                            }), I ? (0, l.jsxs)(o.TabBar.Item, {
                                "aria-label": "todos",
                                id: r.InboxTab.TODOS,
                                className: s(p.tab, p.expanded, {
                                    [p.active]: t === r.InboxTab.TODOS
                                }),
                                children: [T.default.Messages.MESSAGE_REMINDERS_HEADER, A > 0 ? (0, l.jsx)(_.CircleBadge, {
                                    color: d.default.STATUS_DANGER,
                                    className: s(p.iconBadge)
                                }) : null]
                            }) : null]
                        }), (0, l.jsx)("div", {
                            className: p.controls,
                            children: a
                        })]
                    })]
                })
            }

            function m(e) {
                let {
                    tab: t,
                    setTab: n,
                    children: a
                } = e, {
                    showReminders: i
                } = c.default.useExperiment({
                    location: "489e3f_2"
                }, {
                    autoTrackExposure: !1
                }), d = (0, E.useInDesktopNotificationCenterExperiment)();
                return (0, l.jsxs)(u.Header, {
                    className: p.header,
                    children: [(0, l.jsxs)(o.TabBar, {
                        selectedItem: t,
                        type: "top-pill",
                        onItemSelect: n,
                        className: p.tabBar,
                        children: [d ? (0, l.jsx)(o.TabBar.Item, {
                            id: r.InboxTab.FOR_YOU,
                            className: s(p.tab, {
                                [p.active]: t === r.InboxTab.FOR_YOU
                            }),
                            children: T.default.Messages.FOR_YOU
                        }) : null, (0, l.jsx)(o.TabBar.Item, {
                            id: r.InboxTab.MENTIONS,
                            className: s(p.tab, {
                                [p.active]: t === r.InboxTab.MENTIONS
                            }),
                            children: T.default.Messages.MENTIONS
                        }), (0, l.jsx)(o.TabBar.Item, {
                            id: r.InboxTab.UNREADS,
                            className: s(p.tab, {
                                [p.active]: t === r.InboxTab.UNREADS
                            }),
                            children: T.default.Messages.UNREADS_TAB_LABEL
                        }), i ? (0, l.jsx)(o.TabBar.Item, {
                            id: r.InboxTab.TODOS,
                            className: s(p.tab, {
                                [p.active]: t === r.InboxTab.TODOS
                            }),
                            children: T.default.Messages.MESSAGE_REMINDERS_HEADER
                        }) : null]
                    }), (0, l.jsx)("div", {
                        className: p.controls,
                        children: a
                    })]
                })
            }
        },
        263362: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                RecentsPopout: function() {
                    return N
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("446674"),
                i = n("151426"),
                r = n("77078"),
                o = n("979268"),
                u = n("913796"),
                d = n("872173"),
                c = n("374363"),
                f = n("659500"),
                E = n("981024"),
                S = n("519540"),
                _ = n("80649"),
                h = n("385730"),
                T = n("49111"),
                p = n("782340");

            function N(e) {
                let {
                    onOpen: t,
                    onClose: n,
                    children: N,
                    badgeState: I,
                    popoutPosition: m,
                    popoutAlign: A
                } = e, [g, R] = a.useState(!1), [C, O] = function() {
                    var e;
                    let t = (0, s.useStateFromStores)([c.default], () => {
                            var t;
                            return null !== (e = null === (t = c.default.settings.inbox) || void 0 === t ? void 0 : t.currentTab) && void 0 !== e ? e : i.InboxTab.UNREADS
                        }),
                        n = a.useCallback(e => {
                            d.PreloadedUserSettingsActionCreators.updateAsync("inbox", t => {
                                if (t.currentTab === e) return !1;
                                t.currentTab = e
                            }, d.UserSettingsDelay.FREQUENT_USER_ACTION)
                        }, []);
                    return [t, n]
                }(), {
                    showTutorial: M,
                    setSeenTutorial: D
                } = function(e) {
                    var t;
                    let n = (0, s.useStateFromStores)([c.default], () => {
                            var e;
                            return null !== (t = null === (e = c.default.settings.inbox) || void 0 === e ? void 0 : e.viewedTutorial) && void 0 !== t && t
                        }),
                        l = a.useCallback(() => {
                            d.PreloadedUserSettingsActionCreators.updateAsync("inbox", e => {
                                e.viewedTutorial = !0
                            }, d.UserSettingsDelay.INFREQUENT_USER_ACTION)
                        }, []),
                        r = !n && e === i.InboxTab.UNREADS;
                    return {
                        showTutorial: r,
                        setSeenTutorial: l
                    }
                }(C), y = a.useCallback(() => {
                    if (R(!1), g) null == n || n()
                }, [n, g]), v = a.useCallback(() => {
                    R(!g), g ? null == n || n() : null == t || t()
                }, [n, t, g]), P = a.useCallback(() => {
                    v(), O(i.InboxTab.UNREADS)
                }, [O, v]);
                a.useEffect(() => (f.ComponentDispatch.subscribe(T.ComponentActions.TOGGLE_INBOX_UNREADS_TAB, P), () => void f.ComponentDispatch.unsubscribe(T.ComponentActions.TOGGLE_INBOX_UNREADS_TAB, P)), [P]);
                let {
                    showReminders: L
                } = o.default.useExperiment({
                    location: "46fcf8_1"
                }, {
                    autoTrackExposure: !1
                }), U = (0, u.useInDesktopNotificationCenterExperiment)();
                a.useEffect(() => {
                    !L && C === i.InboxTab.TODOS && O(i.InboxTab.MENTIONS)
                });
                let F = a.useCallback(e => {
                    !e.shiftKey && y()
                }, [y]);
                return (0, l.jsx)(r.Popout, {
                    animation: r.Popout.Animation.NONE,
                    position: m,
                    align: A,
                    autoInvert: !1,
                    shouldShow: g,
                    onRequestClose: y,
                    renderPopout: function() {
                        return (0, l.jsx)(r.Dialog, {
                            "aria-label": p.default.Messages.INBOX,
                            children: C === i.InboxTab.FOR_YOU && U ? (0, l.jsx)(E.default, {
                                setTab: O,
                                badgeState: I,
                                closePopout: y
                            }) : C === i.InboxTab.MENTIONS ? (0, l.jsx)(_.default, {
                                setTab: O,
                                onJump: F,
                                badgeState: I,
                                closePopout: y
                            }) : L && C === i.InboxTab.TODOS ? (0, l.jsx)(S.default, {
                                setTab: O,
                                onJump: F,
                                closePopout: y
                            }) : (0, l.jsx)(h.default, {
                                setTab: O,
                                onJump: F,
                                showTutorial: M,
                                setSeenTutorial: D,
                                closePopout: y,
                                badgeState: I
                            })
                        })
                    },
                    ignoreModalClicks: !0,
                    children: (e, t) => {
                        let {
                            isShown: n
                        } = t;
                        return N(v, n, e)
                    }
                })
            }
        },
        660407: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return y
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("301165"),
                o = n("446674"),
                u = n("77078"),
                d = n("913144"),
                c = n("267363"),
                f = n("716241"),
                E = n("739034"),
                S = n("393414"),
                _ = n("42203"),
                h = n("10802"),
                T = n("211248"),
                p = n("461380"),
                N = n("36694"),
                I = n("11539"),
                m = n("815978"),
                A = n("814744"),
                g = n("879165"),
                R = n("609023"),
                C = n("49111"),
                O = n("782340"),
                M = n("951244");
            let D = a.memo(function(e) {
                let {
                    channel: t,
                    deleteChannel: n
                } = e, s = a.useRef(null), [
                    [i, o], u
                ] = a.useState([0, 0]), d = t.deleted && i > 0;
                if (t.deleted && 0 === i && null != s.current) {
                    let e = s.current.offsetHeight,
                        t = s.current.offsetTop,
                        n = s.current.parentElement.scrollTop,
                        l = n > t ? e - (n - t) : e;
                    u([e, e - l])
                }
                let {
                    opacity: c,
                    size: f
                } = (0, r.useSpring)({
                    config: {
                        clamp: !0,
                        friction: 18,
                        tension: 200
                    },
                    opacity: d ? 0 : 1,
                    size: d ? 0 : 1,
                    onRest: () => {
                        n(t.channelId)
                    }
                }), E = {
                    opacity: c,
                    height: f.to(e => d ? function(e, t, n) {
                        return t + (e - t) * n
                    }(i, o, e) : "auto")
                };
                return (0, l.jsx)(r.animated.div, {
                    ref: s,
                    style: E,
                    children: (0, l.jsx)(v, {
                        ...e
                    })
                })
            });
            var y = D;
            let v = a.memo(function(e) {
                let {
                    channel: t,
                    onJump: n,
                    deleteChannel: s,
                    toggle: i
                } = e, r = (0, o.useStateFromStores)([_.default], () => _.default.getChannel(t.channelId)), E = (0, o.useStateFromStores)([h.default], () => null == t.guildId || h.default.isSubscribedToThreads(t.guildId));
                if (a.useEffect(() => {
                        null != r && t.isFullyLoaded && !t.hasError && !t.collapsed && "messages" === t.type && 0 === t.messages.length && d.default.wait(() => {
                            (0, c.ack)(t.channelId, !0), s(t.channelId)
                        })
                    }), a.useEffect(() => {
                        t.hasLoadedAnything && null != t.guildId && !E && d.default.dispatch({
                            type: "GUILD_SUBSCRIPTIONS",
                            guildId: t.guildId
                        })
                    }, [t.hasLoadedAnything, t.guildId, E]), null == r || !t.hasLoadedAnything) return null;
                let T = (e, l) => {
                    (0, f.trackWithMetadata)(C.AnalyticEvents.INBOX_CHANNEL_CLICKED, {
                        channel_id: t.channelId,
                        guild_id: t.guildId
                    });
                    let a = null != l ? l : t.oldestUnreadMessageId;
                    (0, S.transitionTo)(C.Routes.CHANNEL(t.guildId, t.channelId, "forum" === t.type ? null : a)), n(e)
                };
                return (0, l.jsx)("div", {
                    className: M.channel,
                    children: (0, l.jsx)(u.HeadingLevel, {
                        component: (0, l.jsxs)(A.default, {
                            channel: r,
                            gotoChannel: T,
                            mentionCount: t.mentionCount,
                            toggleCollapsed: i,
                            channelState: t,
                            children: [(0, l.jsx)(m.default, {
                                channel: r
                            }), (0, l.jsx)(P, {
                                ...e
                            }), "nsfw" === t.type ? null : (0, l.jsx)(L, {
                                ...e
                            })]
                        }),
                        children: t.collapsed ? null : "messages" === t.type ? (0, l.jsx)(R.default, {
                            channel: t,
                            channelRecord: r,
                            gotoChannel: T
                        }) : "forum" === t.type ? (0, l.jsx)(g.default, {
                            channel: t,
                            channelRecord: r,
                            deleteChannel: s
                        }) : null
                    })
                })
            });

            function P(e) {
                let {
                    channel: t,
                    markChannelRead: n,
                    markGuildRead: a,
                    getNumUnreadChannels: s
                } = e, i = (0, E.default)(), r = i && null != t.guildId;
                return (0, l.jsx)(T.default, {
                    className: M.markReadButton,
                    tooltip: r ? O.default.Messages.MARK_GUILD_AS_READ : O.default.Messages.MARK_AS_READ,
                    color: T.CircleIconButtonColors.TERTIARY,
                    icon: r ? (0, l.jsx)(I.default, {
                        width: 16,
                        height: 16
                    }) : (0, l.jsx)(N.default, {
                        width: 16,
                        height: 16
                    }),
                    onClick: function() {
                        r && null != t.guildId ? a(t.guildId) : n(t), (0, f.trackWithMetadata)(C.AnalyticEvents.INBOX_CHANNEL_ACKED, {
                            channel_id: t.channelId,
                            guild_id: t.guildId,
                            marked_all_channels_as_read: !1,
                            num_unread_channels_remaining: s() - 1
                        })
                    }
                })
            }

            function L(e) {
                let {
                    channel: t,
                    toggle: n,
                    getNumUnreadChannels: a
                } = e;

                function s() {
                    n(t), (0, f.trackWithMetadata)(C.AnalyticEvents.INBOX_CHANNEL_COLLAPSED, {
                        channel_id: t.channelId,
                        guild_id: t.guildId,
                        num_unread_channels_remaining: a(),
                        is_now_collapsed: !t.collapsed
                    })
                }
                return (0, l.jsx)(u.Tooltip, {
                    text: O.default.Messages.COLLAPSE,
                    children: e => (0, l.jsx)(u.Clickable, {
                        ...e,
                        className: i(M.collapseButton, {
                            [M.collapsed]: t.collapsed
                        }),
                        onClick: s,
                        children: (0, l.jsx)(p.default, {
                            width: 16,
                            height: 16
                        })
                    })
                })
            }
        },
        879165: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("917351"),
                i = n.n(s),
                r = n("249654"),
                o = n("446674"),
                u = n("913144"),
                d = n("267363"),
                c = n("152637"),
                f = n("578198"),
                E = n("689275"),
                S = n("967241"),
                _ = n("42203"),
                h = n("449008"),
                T = n("648564"),
                p = n("419309");

            function N(e) {
                let {
                    channel: t,
                    channelRecord: n,
                    deleteChannel: s
                } = e, N = (0, o.useStateFromStoresArray)([E.default, _.default], () => i(E.default.getThreadsForParent(n.guild_id, n.id)).values().filter(e => {
                    let {
                        id: n
                    } = e;
                    return r.default.compare(n, t.oldestReadMessageId) > 0
                }).map(e => {
                    let {
                        id: t
                    } = e;
                    return _.default.getChannel(t)
                }).filter(h.isNotNullish).sort((e, t) => r.default.compare(e.id, t.id)).value(), [t.oldestReadMessageId, n.guild_id, n.id]), I = a.useCallback((e, t) => {
                    (0, S.openThreadSidebarForViewing)(e, t, T.OpenThreadAnalyticsLocations.INBOX)
                }, []);
                return a.useEffect(() => {
                    null != n && t.isFullyLoaded && !t.hasError && !t.collapsed && 0 === N.length && u.default.wait(() => {
                        (0, d.ack)(t.channelId, !0), s(t.channelId)
                    })
                }), (0, l.jsx)("div", {
                    className: p.container,
                    children: N.map(e => (0, l.jsx)(f.ForumPostComposerStoreProvider, {
                        createStore: () => (0, f.createForumPostComposerStore)(n),
                        children: (0, l.jsx)(c.default, {
                            className: p.forumPost,
                            threadId: e.id,
                            goToThread: I
                        })
                    }, e.id))
                })
            }
        },
        609023: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return D
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("866227"),
                i = n.n(s),
                r = n("974667"),
                o = n("446674"),
                u = n("77078"),
                d = n("336696"),
                c = n("383667"),
                f = n("459776"),
                E = n("654017"),
                S = n("603531"),
                _ = n("845579"),
                h = n("271938"),
                T = n("957255"),
                p = n("697218"),
                N = n("898260"),
                I = n("888400"),
                m = n("530686"),
                A = n("970268"),
                g = n("49111"),
                R = n("782340"),
                C = n("145568");
            let O = {
                left: 4,
                right: -12
            };

            function M(e) {
                var t;
                let {
                    channel: n,
                    message: s,
                    compact: i,
                    isGroupStart: o,
                    treatSpam: d,
                    gotoChannel: c
                } = e, f = (0, r.useListItem)(null !== (t = s.id) && void 0 !== t ? t : ""), E = a.useCallback(e => {
                    if ("ArrowLeft" === e.key) {
                        var t;
                        null === (t = document.querySelector('[data-recents-channel="'.concat(n.id, '"]'))) || void 0 === t || t.focus()
                    }
                }, [n.id]);
                return (0, l.jsx)(u.FocusRing, {
                    offset: O,
                    children: (0, l.jsxs)("div", {
                        className: C.messageContainer,
                        onKeyDown: E,
                        ...f,
                        children: [(0, l.jsx)(m.default, {
                            className: C.jumpButton,
                            onJump: e => c(e, s.id)
                        }), (0, l.jsx)(S.default, {
                            id: s.id,
                            message: s,
                            channel: n,
                            className: C.message,
                            compact: i,
                            animateAvatar: !1,
                            isGroupStart: o,
                            onKeyDown: E,
                            treatSpam: d
                        })]
                    }, s.id)
                })
            }

            function D(e) {
                var t, n;
                let {
                    channel: a,
                    channelRecord: s,
                    gotoChannel: r
                } = e, {
                    enabled: S
                } = d.default.useExperiment({
                    location: "20e3b0_1"
                }, {
                    autoTrackExposure: !1
                }), m = _.MessageDisplayCompact.useSetting(), O = (0, o.useStateFromStores)([T.default], () => T.default.can(g.Permissions.CREATE_INSTANT_INVITE, s)), D = (0, E.isSpamSupported)(s), y = !1, v = 0 === a.messages.length || a.messages[0].timestamp.isSame(i(), "day"), P = null !== (n = null === (t = p.default.getUser(h.default.getId())) || void 0 === t ? void 0 : t.hasFlag(g.UserFlags.SPAMMER)) && void 0 !== n && n, L = [];
                if (!a.collapsed) {
                    let e = null,
                        t = null,
                        n = a.messages.slice(0, A.MAX_SHOWN_MESSAGES);
                    n.forEach(n => {
                        if (!(0, c.default)(n, O)) {
                            if (!v && (null == e || !e.isSame(n.timestamp, "day"))) {
                                let t = (0, I.dateFormat)(n.timestamp, "LL");
                                L.push((0, l.jsx)(N.default, {
                                    className: C.divider,
                                    children: t
                                }, t)), e = n.timestamp
                            }
                            let a = null == t || (0, f.default)(s, t, n);
                            t = n, y = y || (0, E.isSpam)(n), L.push((0, l.jsx)(M, {
                                channel: s,
                                message: n,
                                compact: m,
                                isGroupStart: a,
                                treatSpam: !P && S && (0, E.isSpam)(n) && D,
                                gotoChannel: r
                            }, n.id))
                        }
                    }), a.messages.length >= A.MAX_SHOWN_MESSAGES && L.push((0, l.jsxs)(u.Button, {
                        color: u.Button.Colors.LINK,
                        look: u.Button.Looks.LINK,
                        onClick: e => r(e, n[n.length - 1].id),
                        children: [R.default.Messages.UNREADS_VIEW_CHANNEL, " ›"]
                    }, "view-all")), 0 === L.length && (L = [(0, l.jsx)(u.Spinner, {}, "spinner")])
                }
                return y && D && d.default.trackExposure({
                    location: "20e3b0_2"
                }), (0, l.jsx)("div", {
                    className: C.messages,
                    children: L
                })
            }
        },
        474282: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("917351"),
                s = n.n(a),
                i = n("898260"),
                r = n("660407"),
                o = n("970268"),
                u = n("782340"),
                d = n("962087");

            function c(e, t, n) {
                let {
                    markChannelRead: a,
                    markGuildRead: c,
                    deleteChannel: f,
                    toggle: E,
                    getNumUnreadChannels: S
                } = t, _ = null;
                return s.flatMap(e, e => {
                    let t = e.sortOrder !== _;
                    _ = e.sortOrder;
                    let s = [];
                    return t && (e.hasLoadedAnything && e.sortOrder === o.SortOrder.ReallyOldChannel ? s.push((0, l.jsx)(i.default, {
                        className: d.divider,
                        contentClassName: d.dividerContent,
                        children: u.default.Messages.UNREADS_OLD_CHANNELS_DIVIDER
                    }, "old-divider")) : e.hasLoadedAnything && e.sortOrder === o.SortOrder.NoNotifications && s.push((0, l.jsx)(i.default, {
                        className: d.divider,
                        contentClassName: d.dividerContent,
                        children: u.default.Messages.UNREADS_NO_NOTIFICATIONS_DIVIDER
                    }, "disabled-divider"))), s.push((0, l.jsx)(r.default, {
                        channel: e,
                        markChannelRead: a,
                        markGuildRead: c,
                        toggle: E,
                        deleteChannel: f,
                        onJump: n,
                        getNumUnreadChannels: S
                    }, e.channelId)), s
                })
            }
        },
        385730: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return M
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("597755"),
                o = n.n(r),
                u = n("974667"),
                d = n("446674"),
                c = n("151426"),
                f = n("77078"),
                E = n("913144"),
                S = n("206230"),
                _ = n("510889"),
                h = n("826267"),
                T = n("599110"),
                p = n("659500"),
                N = n("150938"),
                I = n("805614"),
                m = n("64318"),
                A = n("474282"),
                g = n("970268"),
                R = n("49111"),
                C = n("782340"),
                O = n("930391");

            function M(e) {
                let {
                    setTab: t,
                    onJump: n,
                    showTutorial: s,
                    setSeenTutorial: r,
                    closePopout: M,
                    badgeState: y
                } = e, v = a.useRef(null), [P, L] = (0, g.default)(v), {
                    loadState: U,
                    channels: F
                } = P, {
                    maybeLoadMore: x,
                    markAllRead: b
                } = L;
                (function(e, t, n) {
                    a.useLayoutEffect(() => {
                        var l;
                        let {
                            scrollToChannelIndex: a
                        } = t;
                        n.clearScrollToChannelIndex();
                        let {
                            current: s
                        } = e;
                        if (null == s || null == a) return;
                        let i = null === (l = s.getScrollerNode()) || void 0 === l ? void 0 : l.children;
                        if (null == i) return;
                        let r = i[a];
                        if (null == r) return;
                        let {
                            scrollTop: o,
                            scrollHeight: u
                        } = s.getScrollerState();
                        (r.offsetTop < o || r.offsetTop > o + u) && s.scrollTo({
                            to: r.offsetTop
                        })
                    })
                })(v, P, L),
                function(e, t) {
                    a.useEffect(() => {
                        let n = () => {
                            let n = e.channels.find(e => !e.collapsed);
                            null != n && t.markChannelRead(n)
                        };
                        return p.ComponentDispatch.subscribe(R.ComponentActions.MARK_TOP_INBOX_CHANNEL_READ, n), () => {
                            p.ComponentDispatch.unsubscribe(R.ComponentActions.MARK_TOP_INBOX_CHANNEL_READ, n)
                        }
                    }, [t, e.channels])
                }(P, L), a.useEffect(() => {
                    T.default.track(R.AnalyticEvents.OPEN_POPOUT, {
                        type: "Inbox"
                    })
                }, []), a.useEffect(() => (E.default.subscribe("CONNECTION_OPEN", M), () => {
                    E.default.unsubscribe("CONNECTION_OPEN", M)
                }), [M]);
                let G = (0, d.useStateFromStores)([S.default], () => S.default.messageGroupSpacing),
                    k = (0, _.default)("unreads", v);
                if (0 === F.length) {
                    var j;
                    return (0, l.jsxs)("div", {
                        className: O.container,
                        children: [(0, l.jsx)(m.default, {
                            tab: c.InboxTab.UNREADS,
                            setTab: t,
                            badgeState: y,
                            closePopout: M
                        }), (0, l.jsx)(I.default, {
                            Icon: h.default,
                            header: C.default.Messages.UNREADS_EMPTY_STATE_HEADER,
                            tip: (null === (j = o.os) || void 0 === j ? void 0 : j.family) === "OS X" ? C.default.Messages.UNREADS_EMPTY_STATE_TIP_MAC : C.default.Messages.UNREADS_EMPTY_STATE_TIP
                        })]
                    })
                }
                return (0, l.jsxs)("div", {
                    className: i(O.container, "group-spacing-".concat(G)),
                    "aria-label": C.default.Messages.UNREADS_TAB_LABEL,
                    children: [(0, l.jsx)(m.default, {
                        tab: c.InboxTab.UNREADS,
                        setTab: t,
                        badgeState: y,
                        closePopout: M,
                        children: (0, l.jsx)(N.default, {
                            type: "top-header",
                            onClick: b
                        })
                    }), (0, l.jsx)(u.ListNavigatorProvider, {
                        navigator: k,
                        children: (0, l.jsx)(u.ListNavigatorContainer, {
                            children: e => {
                                let {
                                    ref: t,
                                    ...a
                                } = e;
                                return (0, l.jsxs)(f.AdvancedScrollerThin, {
                                    ref: e => {
                                        var n;
                                        v.current = e, t.current = null !== (n = null == e ? void 0 : e.getScrollerNode()) && void 0 !== n ? n : null
                                    },
                                    ...a,
                                    onScroll: U === g.LoadState.Done ? void 0 : x,
                                    className: O.scroller,
                                    children: [s ? (0, l.jsx)(D, {
                                        setSeenTutorial: r
                                    }) : null, (0, A.default)(F, L, n), U === g.LoadState.Done ? null : (0, l.jsx)(f.Spinner, {
                                        className: O.spinner
                                    })]
                                })
                            }
                        })
                    })]
                })
            }

            function D(e) {
                let {
                    setSeenTutorial: t
                } = e;
                return (0, l.jsxs)("div", {
                    className: O.tutorial,
                    children: [(0, l.jsx)("div", {
                        className: O.tutorialIcon,
                        children: (0, l.jsx)(h.default, {
                            width: 24,
                            height: 24
                        })
                    }), (0, l.jsxs)("div", {
                        children: [(0, l.jsx)(f.Heading, {
                            className: O.tutorialHeader,
                            variant: "heading-md/semibold",
                            children: C.default.Messages.UNREADS_TUTORIAL_HEADER
                        }), (0, l.jsx)(f.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            children: C.default.Messages.UNREADS_TUTORIAL_BODY
                        }), (0, l.jsx)(f.Button, {
                            className: O.tutorialButton,
                            onClick: t,
                            size: f.Button.Sizes.SMALL,
                            children: C.default.Messages.TUTORIAL_CLOSE
                        })]
                    })]
                })
            }
        },
        970268: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SortOrder: function() {
                    return s
                },
                LoadState: function() {
                    return i
                },
                MAX_SHOWN_MESSAGES: function() {
                    return j
                },
                default: function() {
                    return V
                }
            });
            var l, a, s, i, r = n("884691"),
                o = n("44170"),
                u = n("627445"),
                d = n.n(u),
                c = n("917351"),
                f = n.n(c),
                E = n("913144"),
                S = n("819689"),
                _ = n("267363"),
                h = n("206230"),
                T = n("379881"),
                p = n("542827"),
                N = n("401690"),
                I = n("689275"),
                m = n("755624"),
                A = n("414833"),
                g = n("872173"),
                R = n("374363"),
                C = n("233069"),
                O = n("42203"),
                M = n("923959"),
                D = n("247013"),
                y = n("305961"),
                v = n("377253"),
                P = n("957255"),
                L = n("660478"),
                U = n("677099"),
                F = n("282109"),
                x = n("449008"),
                b = n("299039"),
                G = n("49111"),
                k = n("648564");
            (l = s || (s = {}))[l.Favorite = 0] = "Favorite", l[l.PrivateChannel = 1] = "PrivateChannel", l[l.Mentioned = 2] = "Mentioned", l[l.AllMessagesNotifications = 3] = "AllMessagesNotifications", l[l.GuildChannel = 4] = "GuildChannel", l[l.OldChannel = 5] = "OldChannel", l[l.NoNotifications = 6] = "NoNotifications", l[l.ReallyOldChannel = 7] = "ReallyOldChannel", (a = i || (i = {})).Loading = "loading", a.Loaded = "loaded", a.Done = "done";
            let j = 25;
            class B extends o.EventEmitter {
                loadMore() {
                    let {
                        loadState: e,
                        channels: t
                    } = this.state;
                    if (e !== i.Loaded) return;
                    let n = !1,
                        l = t.map(e => {
                            if (e.isFullyLoaded || e.deleted || n) return e;
                            if (e.collapsed) return e.hasLoadedAnything ? e : {
                                ...e,
                                hasLoadedAnything: !0
                            };
                            return (e = this.populateInitialStateFromStore(e)).isFullyLoaded ? e : (d("nsfw" !== e.type, "this channel should already be loaded"), "messages" === e.type && this.loadChannelMessages(e) && (n = !0), e)
                        });
                    (!n || l.some((e, n) => e !== t[n])) && this.setState({
                        channels: l,
                        loadState: n ? this.state.loadState : i.Done
                    })
                }
                populateInitialStateFromStore(e) {
                    if ("messages" === e.type) return w(e, !1);
                    if ("nsfw" === e.type) return {
                        ...e,
                        isFullyLoaded: !0,
                        hasLoadedAnything: !0
                    };
                    if ("forum" === e.type) {
                        let t = I.default.hasLoaded(e.guildId);
                        return {
                            ...e,
                            isFullyLoaded: t,
                            hasLoadedAnything: t
                        }
                    } else(0, x.assertNever)(e)
                }
                clearScrollToChannelIndex() {
                    this.setState({
                        scrollToChannelIndex: null
                    })
                }
                loadChannelMessages(e) {
                    S.default.clearChannel(e.channelId);
                    let t = S.default.fetchMessages({
                        channelId: e.channelId,
                        limit: G.MAX_MESSAGES_PER_CHANNEL,
                        jump: {
                            messageId: e.oldestReadMessageId,
                            flash: !0
                        }
                    });
                    return null != t && !1 !== t && (this.setState({
                        loadState: i.Loading
                    }), t.then(t => {
                        this.setState({
                            loadState: i.Loaded,
                            channels: this.updateChannel(e.channelId, e => {
                                d("messages" === e.type, "channel cannot change type");
                                let n = w(e, !0);
                                return (0 === n.messages.length || n.messages.length === e.messages.length) && (n = {
                                    ...n,
                                    hasLoadedAnything: !0,
                                    isFullyLoaded: !0,
                                    hasError: !t
                                }), n
                            })
                        })
                    }, () => {
                        this.setState({
                            loadState: i.Loaded,
                            channels: this.updateChannel(e.channelId, e => {
                                var t;
                                d("messages" === e.type, "channel cannot change type");
                                let n = w(e, !0);
                                return {
                                    ...n,
                                    isFullyLoaded: !0,
                                    hasError: !0,
                                    hasLoadedAnything: !0,
                                    newestUnreadMessageId: null === (t = e.messages[e.messages.length - 1]) || void 0 === t ? void 0 : t.id
                                }
                            })
                        })
                    }), !0)
                }
                updateChannel(e, t) {
                    return this.state.channels.map(n => n.channelId === e ? t(n) : n)
                }
                setState(e) {
                    for (let t in e)
                        if (e[t] !== this.state[t]) {
                            this.state = {
                                ...this.state,
                                ...e
                            }, this.emit("change", this.state);
                            return
                        }
                }
                constructor(e, t) {
                    super(), this.state = e, this.scrollerRef = t, this.maybeLoadMore = () => {
                        var e;
                        let t = null === (e = this.scrollerRef.current) || void 0 === e ? void 0 : e.getScrollerState();
                        if (null == t) return;
                        let n = t.scrollHeight - t.scrollTop - t.offsetHeight;
                        n < 2e3 && this.loadMore()
                    }, this.reloadMessages = () => {
                        this.setState({
                            channels: this.state.channels.map(e => "messages" === e.type && e.hasLoadedAnything ? w(e, !1, !0) : e)
                        })
                    }, this.getNumUnreadChannels = () => this.state.channels.length, this.markChannelRead = e => {
                        let {
                            channelId: t,
                            newestUnreadMessageId: n
                        } = e;
                        if (E.default.wait(() => _.ack(t, !0, void 0, n, {
                                section: G.AnalyticsSections.INBOX
                            })), 1 === this.state.channels.length) {
                            this.deleteChannel(t);
                            return
                        }
                        this.setState({
                            channels: this.updateChannel(t, e => ({
                                ...e,
                                deleted: !0
                            }))
                        }), h.default.useReducedMotion && this.deleteChannel(t), this.maybeLoadMore()
                    }, this.markGuildRead = e => {
                        E.default.wait(() => (0, p.default)([e], G.AnalyticsSections.INBOX)), this.setState({
                            channels: this.state.channels.filter(t => t.guildId !== e)
                        }), this.maybeLoadMore()
                    }, this.deleteChannel = e => {
                        this.setState({
                            scrollToChannelIndex: f.findIndex(this.state.channels, t => t.channelId === e),
                            channels: this.state.channels.filter(t => t.channelId !== e)
                        }), this.maybeLoadMore()
                    }, this.markAllRead = () => {
                        _.bulkAck(this.state.channels.map(e => ({
                            channelId: e.channelId,
                            messageId: e.newestUnreadMessageId
                        }))), this.setState({
                            channels: []
                        })
                    }, this.toggle = e => {
                        let {
                            channelId: t,
                            guildId: n
                        } = e, {
                            channels: l,
                            collapsedChannels: a,
                            loadState: s
                        } = this.state, r = f.findIndex(l, e => e.channelId === t), o = l[r], u = !o.collapsed;
                        a[t] = u, (0, g.updateUserChannelSettings)(n, t, e => {
                            e.collapsedInInbox = u
                        }, g.UserSettingsDelay.FREQUENT_USER_ACTION), this.setState({
                            scrollToChannelIndex: r,
                            collapsedChannels: a,
                            loadState: s !== i.Done || u || o.isFullyLoaded ? s : i.Loaded,
                            channels: this.updateChannel(t, e => ({
                                ...e,
                                collapsed: u
                            }))
                        }), o.collapsed ? !o.isFullyLoaded && this.loadMore() : this.maybeLoadMore()
                    }, this.handleUserGuildSettingsStoreChange = () => {
                        let e = this.state.channels.filter(e => !F.default.isGuildOrCategoryOrChannelMuted(e.guildId, e.channelId));
                        e.length !== this.state.channels.length && this.setState({
                            channels: e
                        })
                    }, this.handleJoinedThreadsStoreChange = () => {
                        let e = this.state.channels.filter(e => !m.default.isMuted(e.channelId));
                        e.length !== this.state.channels.length && this.setState({
                            channels: e
                        })
                    }, this.handleActiveThreadsStoreChange = () => {
                        let e = this.state.channels.map(e => {
                            if ("forum" !== e.type) return e;
                            {
                                let t = I.default.hasLoaded(e.guildId);
                                return {
                                    ...e,
                                    isFullyLoaded: t,
                                    hasLoadedAnything: t
                                }
                            }
                        });
                        this.setState({
                            channels: e
                        })
                    }
                }
            }

            function w(e, t) {
                var n;
                let l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    a = v.default.getMessages(e.channelId),
                    s = a.toArray().filter(t => b.default.compare(t.id, e.oldestReadMessageId) > 0 && 0 >= b.default.compare(t.id, e.newestUnreadMessageId)),
                    i = s.length === e.messages.length && s.every((t, n) => e.messages[n] === t);
                if (i && l) return e;
                let r = null != a.getAfter(e.oldestReadMessageId) || (null === (n = s[0]) || void 0 === n ? void 0 : n.id) === e.oldestUnreadMessageId,
                    o = s[s.length - 1],
                    u = b.default.compare(null == o ? void 0 : o.id, e.newestUnreadMessageId) >= 0 || s.length >= j;
                return {
                    ...e,
                    messages: s,
                    hasLoadedAnything: e.hasLoadedAnything || r || t,
                    hasLoadedFirst: e.hasLoadedFirst || r || t,
                    isFullyLoaded: e.isFullyLoaded || r && u || t && !a.hasMoreAfter
                }
            }

            function H() {
                let e = function() {
                        var e, t;
                        let n = {},
                            l = null !== (t = null === (e = R.default.settings.guilds) || void 0 === e ? void 0 : e.guilds) && void 0 !== t ? t : {};
                        for (let e in l)
                            for (let t in l[e].channels) {
                                let a = O.default.getChannel(t);
                                (!(t in n) || (null == a ? void 0 : a.guild_id) === e) && (n[t] = l[e].channels[t].collapsedInInbox)
                            }
                        return n
                    }(),
                    t = function(e) {
                        let t = [];
                        O.default.getSortedPrivateChannels().forEach(n => Y(e, t, null, n.id));
                        let n = U.default.getFlattenedGuildIds();
                        return n.forEach(n => {
                            if (null == n) return;
                            let l = M.default.getSelectableChannelIds(n),
                                a = N.default.getActiveJoinedUnreadThreadsForGuild(n);
                            l.forEach(l => {
                                var s;
                                Y(e, t, n, l);
                                let i = null !== (s = a[l]) && void 0 !== s ? s : {};
                                for (let l in i) Y(e, t, n, l)
                            })
                        }), f.sortBy(t, e => e.sortOrder)
                    }(e);
                return {
                    collapsedChannels: e,
                    loadState: i.Loaded,
                    channels: t,
                    scrollToChannelIndex: null
                }
            }

            function Y(e, t, n, l) {
                if (null == l) return;
                let a = O.default.getChannel(l);
                if (null == a) return;
                let i = C.THREAD_CHANNEL_TYPES.has(a.type);
                if (!i && F.default.isGuildOrCategoryOrChannelMuted(n, a.id)) return;
                if (a.isPrivate()) {
                    if (0 === L.default.getMentionCount(l)) return
                } else if (!L.default.hasRelevantUnread(a) && 0 === L.default.getMentionCount(l)) return;
                if (!a.isPrivate() && !P.default.can(G.Permissions.READ_MESSAGE_HISTORY, a)) return;
                let r = L.default.ackMessageId(l);
                if (null == r) {
                    let e = y.default.getGuild(a.guild_id);
                    if (null == e || null == e.joinedAt) return;
                    r = b.default.fromTimestamp(e.joinedAt.getTime())
                }
                let o = L.default.getOldestUnreadMessageId(l),
                    u = L.default.lastMessageId(l),
                    d = L.default.getMentionCount(l),
                    c = d > 0 || a.isPrivate();
                if (null == u || b.default.compare(r, u) >= 0) return;
                let f = {
                    guildId: n,
                    channelId: l,
                    oldestReadMessageId: r,
                    oldestUnreadMessageId: o,
                    newestUnreadMessageId: u,
                    collapsed: !0 === e[l],
                    hasLoadedAnything: !1,
                    hasLoadedFirst: !1,
                    isFullyLoaded: !1,
                    hasError: !1,
                    hasMentionsOrUnreads: c,
                    mentionCount: d,
                    sortOrder: function(e, t, n) {
                        let l = O.default.getChannel(t);
                        if (T.default.isFavorite(t)) return s.Favorite;
                        if (l.isPrivate()) return s.PrivateChannel;
                        if (L.default.getMentionCount(t) > 0) return s.Mentioned;
                        if (null != n) {
                            let e = b.default.extractTimestamp(n);
                            if (Date.now() - e > 864e6) return s.ReallyOldChannel;
                            if (Date.now() - e > 1728e5) return s.OldChannel
                        }
                        if (l.isThread()) {
                            let e = (0, A.computeThreadNotificationSetting)(l);
                            return e === k.ThreadMemberFlags.ALL_MESSAGES ? s.AllMessagesNotifications : e === k.ThreadMemberFlags.NO_MESSAGES ? s.NoNotifications : s.GuildChannel
                        } {
                            let n = F.default.getChannelMessageNotifications(e, t),
                                l = n === G.UserNotificationSettings.NULL ? F.default.getMessageNotifications(e) : n;
                            return l === G.UserNotificationSettings.ALL_MESSAGES ? s.AllMessagesNotifications : l === G.UserNotificationSettings.NO_MESSAGES ? s.NoNotifications : s.GuildChannel
                        }
                    }(n, l, o)
                };
                a.isNSFW() && D.default.didAgree(a.guild_id) ? t.push({
                    ...f,
                    type: "nsfw"
                }) : a.isForumLikeChannel() ? t.push({
                    ...f,
                    type: "forum"
                }) : t.push({
                    ...f,
                    type: "messages",
                    messages: []
                })
            }

            function V(e) {
                let [t, n] = r.useState(() => new B(H(), e)), [l, a] = r.useState(!1), s = r.useRef(Date.now()), [i, o] = r.useState(() => H());
                return r.useEffect(() => {
                    let e = e => o(e);
                    return t.on("change", e), o(t.state), () => {
                        t.off("change", e)
                    }
                }, [t]), r.useEffect(() => {
                    if (null == i || i.channels.length > 0 || l) return;
                    let t = Date.now(),
                        r = H();
                    0 === r.channels.length || t - s.current < 1e4 ? a(!0) : (s.current = Date.now(), n(new B(r, e)))
                }, [i, l, e]), r.useLayoutEffect(t.maybeLoadMore, [null == i ? void 0 : i.channels, null == i ? void 0 : i.loadState]), r.useEffect(() => (v.default.addChangeListener(t.reloadMessages), () => v.default.removeChangeListener(t.reloadMessages)), [t.reloadMessages]), r.useEffect(() => (F.default.addChangeListener(t.handleUserGuildSettingsStoreChange), () => F.default.removeChangeListener(t.handleUserGuildSettingsStoreChange)), [t]), r.useEffect(() => (m.default.addChangeListener(t.handleJoinedThreadsStoreChange), () => m.default.removeChangeListener(t.handleJoinedThreadsStoreChange)), [t]), r.useEffect(() => (I.default.addChangeListener(t.handleActiveThreadsStoreChange), () => I.default.removeChangeListener(t.handleActiveThreadsStoreChange)), [t]), [i, t]
            }
        },
        93015: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SafetyUserSentimentExperiment: function() {
                    return a
                }
            });
            var l = n("862205");
            let a = (0, l.createExperiment)({
                kind: "user",
                id: "2023-05_safety_user_sentiment",
                label: "Safety User Sentiment Feedback Eligible",
                defaultConfig: {
                    isEligible: !1
                },
                treatments: [{
                    id: 1,
                    label: "Eligible",
                    config: {
                        isEligible: !0
                    }
                }]
            })
        },
        703537: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                isEligibleForNotice: function() {
                    return u
                },
                markNoticeDismissed: function() {
                    return c
                }
            });
            var l = n("866227"),
                a = n.n(l),
                s = n("801340"),
                i = n("872173"),
                r = n("374363"),
                o = n("93015");
            let u = e => {
                    var t;
                    if (!d(e)) return !1;
                    let n = null === (t = r.default.settings.userContent) || void 0 === t ? void 0 : t.safetyUserSentimentNoticeDismissedAt,
                        l = null != n ? s.Timestamp.toDate(n) : void 0,
                        i = null != l ? a().diff(l, "days") : null,
                        u = null != n;
                    if (u && !(null != i && i > 30)) return !1;
                    let {
                        isEligible: c
                    } = o.SafetyUserSentimentExperiment.getCurrentConfig({
                        location: "657a81_1"
                    }, {
                        autoTrackExposure: !0
                    });
                    return c
                },
                d = e => null != e && Date.now() - e.createdAt.getTime() > 2592e6,
                c = () => {
                    let e = s.Timestamp.now();
                    i.PreloadedUserSettingsActionCreators.updateAsync("userContent", t => {
                        t.safetyUserSentimentNoticeDismissedAt = e
                    }, i.UserSettingsDelay.INFREQUENT_USER_ACTION)
                }
        },
        92790: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return x
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("98159"),
                o = n("369470"),
                u = n.n(o),
                d = n("446674"),
                c = n("77078"),
                f = n("378438"),
                E = n("137223"),
                S = n("76385"),
                _ = n("955513"),
                h = n("180748"),
                T = n("206230"),
                p = n("716241"),
                N = n("42203"),
                I = n("923959"),
                m = n("744983"),
                A = n("18494"),
                g = n("476765"),
                R = n("659500"),
                C = n("202752"),
                O = n("751520"),
                M = n("313483"),
                D = n("653291"),
                y = n("49111"),
                v = n("782340"),
                P = n("84691");
            n("525840");
            let L = (0, g.uid)(),
                U = u(f.search, 500);
            class F extends a.PureComponent {
                componentDidMount() {
                    var e, t;
                    R.ComponentDispatch.subscribe(y.ComponentActions.PERFORM_SEARCH, this.search), R.ComponentDispatch.subscribe(y.ComponentActions.SET_SEARCH_QUERY, this.handleSetSearchQuery), R.ComponentDispatch.subscribe(y.ComponentActions.FOCUS_SEARCH, this.handleFocusSearch), null === (t = this._editorRef) || void 0 === t || null === (e = t.editor) || void 0 === e || e.setAttribute("aria-haspopup", "listbox")
                }
                componentDidUpdate(e) {
                    let {
                        editorState: t,
                        searchId: n
                    } = this.props;
                    if (t !== e.editorState) {
                        let e = O.tokenizeQuery(C.getFirstTextBlock(t)),
                            l = M.getSelectionScope(e, t);
                        f.updateAutocompleteQuery(n, e, l), null != this._editorRef && C.scrollCursorIntoView(this._editorRef.editor)
                    }
                }
                componentWillUnmount() {
                    R.ComponentDispatch.unsubscribe(y.ComponentActions.PERFORM_SEARCH, this.search), R.ComponentDispatch.unsubscribe(y.ComponentActions.SET_SEARCH_QUERY, this.handleSetSearchQuery), R.ComponentDispatch.unsubscribe(y.ComponentActions.FOCUS_SEARCH, this.handleFocusSearch)
                }
                tokenize(e) {
                    let t = O.tokenizeQuery(C.getFirstTextBlock(e)).filter(e => e.type !== S.default.NON_TOKEN_TYPE);
                    return C.applyTokensAsEntities(t, e, _.default)
                }
                clearSearch() {
                    let {
                        searchId: e
                    } = this.props;
                    null != e && f.clearSearchState(e)
                }
                handlePastedFiles() {
                    return !0
                }
                handleDroppedFiles() {
                    return !0
                }
                handleDrop() {
                    return !0
                }
                renderInput(e) {
                    let {
                        editorState: t
                    } = this.props;
                    return (0, l.jsx)(r.Editor, {
                        autoCorrect: "off",
                        ref: this.setEditorRef,
                        onBlur: this.onBlur,
                        onFocus: this.onFocus,
                        handleReturn: this.handleReturn,
                        handleBeforeInput: this.handleBeforeInput,
                        handleKeyCommand: this.handleKeyCommand,
                        handlePastedText: this.handlePastedText,
                        handlePastedFiles: this.handlePastedFiles,
                        handleDroppedFiles: this.handleDroppedFiles,
                        handleDrop: this.handleDrop,
                        keyBindingFn: this.handleKeyBind,
                        placeholder: v.default.Messages.SEARCH,
                        editorState: t,
                        onChange: this.setEditorState,
                        role: "combobox",
                        ariaExpanded: e,
                        ariaControls: e ? L : void 0,
                        ariaLabel: v.default.Messages.SEARCH,
                        ariaAutocomplete: "list"
                    })
                }
                render() {
                    let {
                        searchId: e,
                        editorState: t,
                        hasResults: n,
                        className: a
                    } = this.props, {
                        focused: s
                    } = this.state, r = C.getFirstTextBlock(t).length > 0;
                    return null == e ? null : (0, l.jsx)(c.Popout, {
                        renderPopout: this.renderPopout,
                        position: "bottom",
                        animation: c.Popout.Animation.NONE,
                        shouldShow: s,
                        autoInvert: !1,
                        children: (t, o) => {
                            var u;
                            let {
                                isShown: d
                            } = o;
                            return (0, l.jsx)("div", {
                                className: a,
                                children: (0, l.jsx)("div", {
                                    className: i(P.search, {
                                        [P.open]: r || s,
                                        [P.focused]: s
                                    }),
                                    children: (0, l.jsx)(c.FocusRing, {
                                        focusTarget: {
                                            current: null === (u = this._editorRef) || void 0 === u ? void 0 : u.editor
                                        },
                                        ringTarget: this._searchBarRef,
                                        children: (0, l.jsxs)("div", {
                                            className: P.searchBar,
                                            ref: this._searchBarRef,
                                            children: [this.renderInput(d), (0, l.jsx)(E.SearchBarIcon, {
                                                onClear: this.handleClearSearch,
                                                hasContent: r || n,
                                                className: P.icon
                                            })]
                                        }, e)
                                    })
                                })
                            })
                        }
                    })
                }
                constructor(e) {
                    super(e), this.state = {
                        focused: !1,
                        selectedIndex: void 0
                    }, this._searchBarRef = a.createRef(), this._searchPopoutRef = a.createRef(), this.handleSetSearchQuery = e => {
                        let {
                            query: t,
                            anchor: n,
                            focus: l,
                            performSearch: a,
                            replace: s
                        } = e, {
                            editorState: i
                        } = this.props, r = C.getFirstTextBlock(i);
                        " " !== t.charAt(t.length - 1) && (t += " "), null != n && 0 !== n && " " !== r.charAt(n - 1) && " " !== t.charAt(0) && (t = " " + t), s ? (i = C.replaceAllContent(t, i), n = 0) : i = C.updateContent(t, i, n, l), i = C.truncateContent(i, 512), i = this.tokenize(i);
                        let o = Number(n) + t.length;
                        i = C.setCollapsedSelection(o, i), this.setEditorState(i), a && this.search(C.getFirstTextBlock(i))
                    }, this.handleSelectedIndexChanged = e => {
                        var t, n;
                        null === (n = this._editorRef) || void 0 === n || null === (t = n.editor) || void 0 === t || t.setAttribute("aria-activedescendant", null != e ? "".concat(L, "-").concat(e) : void 0), this.setState({
                            selectedIndex: e
                        })
                    }, this.renderPopout = () => (0, l.jsx)(D.default, {
                        ref: this._searchPopoutRef,
                        navId: L,
                        onSelectedIndexChanged: this.handleSelectedIndexChanged
                    }), this.search = e => {
                        let {
                            searchId: t,
                            isSearching: n
                        } = this.props;
                        if (null == e || "" === e) {
                            let {
                                editorState: t
                            } = this.props;
                            e = C.getFirstTextBlock(t)
                        }
                        if (null != t && !n) {
                            let n = O.tokenizeQuery(e),
                                l = O.getSearchQueryFromTokens(n);
                            for (let t = 0; t < n.length; t++) !O.filterHasAnswer(n[t], n[t + 1]) && (e = e.substring(0, n[t].start) + e.substring(n[t].end));
                            if (0 === n.length || 0 === Object.keys(l).length) return !1;
                            U(t, l, e), this.onBlur()
                        }
                        return !0
                    }, this.handleClearSearch = e => {
                        let {
                            editorState: t
                        } = this.props, {
                            focused: n
                        } = this.state;
                        e.preventDefault(), e.stopPropagation();
                        let l = C.getFirstTextBlock(t);
                        if ("" === l) {
                            this.focusEditor();
                            return
                        }
                        t = C.truncateContent(t, 0), this.setEditorState(t), !n && Promise.resolve().then(() => this.blurEditor())
                    }, this.handleFocusSearch = e => {
                        var t, n;
                        let {
                            prefillCurrentChannel: l
                        } = e;
                        if (!l) {
                            this.focusEditor();
                            return
                        }
                        let a = A.default.getChannelId(),
                            s = N.default.getChannel(a);
                        if ((null === (t = s) || void 0 === t ? void 0 : t.isThread()) && (s = N.default.getChannel(null === (n = s) || void 0 === n ? void 0 : n.parent_id)), null == s || s.isPrivate()) {
                            this.focusEditor();
                            return
                        }
                        let i = I.default.getTextChannelNameDisambiguations(s.getGuildId()),
                            r = i[s.id],
                            o = null != r ? r.name : s.name;
                        this.handleSetSearchQuery({
                            query: _.default[y.SearchTokenTypes.FILTER_IN].key + "#".concat(o, " "),
                            replace: !0
                        })
                    }, this.focusEditor = () => {
                        let {
                            _editorRef: e
                        } = this;
                        null != e && Promise.resolve().then(() => e.focus())
                    }, this.blurEditor = () => {
                        var e;
                        null === (e = this._editorRef) || void 0 === e || e.blur()
                    }, this.setEditorRef = e => {
                        this._editorRef = e
                    }, this.onFocus = () => {
                        let {
                            searchType: e
                        } = this.props;
                        p.default.trackWithMetadata(y.AnalyticEvents.SEARCH_OPENED, {
                            search_type: e
                        }), this.setState({
                            focused: !0
                        })
                    }, this.onBlur = () => {
                        this.setState({
                            focused: !1
                        }, () => {
                            C.isEmpty(this.props.editorState) && this.clearSearch()
                        })
                    }, this.handleReturn = e => {
                        e.preventDefault();
                        let {
                            current: t
                        } = this._searchPopoutRef, n = null != t && t.selectOption();
                        return !n && this.search(), !0
                    }, this.handleBeforeInput = e => {
                        let {
                            editorState: t
                        } = this.props, {
                            focused: n
                        } = this.state, l = C.getFirstTextBlock(t);
                        return !!(l.length >= 512) || (t = C.updateContent(e, t), t = C.truncateContent(t, 512), t = this.tokenize(t), this.setEditorState(t), !n && this.setState({
                            focused: !0
                        }), !0)
                    }, this.handleKeyCommand = e => {
                        let {
                            editorState: t
                        } = this.props, {
                            focused: n
                        } = this.state;
                        switch (e) {
                            case "backspace":
                            case "backspace-word":
                            case "backspace-to-start-of-line":
                            case "delete":
                            case "delete-word":
                                return t = C.deleteContent(e, t), t = this.tokenize(t), this.setEditorState(t), !n && this.setState({
                                    focused: !0
                                }), !0;
                            case "transpose-characters":
                            case "move-selection-to-start-of-block":
                            case "move-selection-to-end-of-block":
                                return t = C.miscCommand(e, t), t = this.tokenize(t), this.setEditorState(t), !0;
                            case "split-block":
                            case "underline":
                            case "bold":
                            case "italic":
                                return !0
                        }
                    }, this.handlePastedText = e => {
                        let {
                            editorState: t
                        } = this.props, {
                            focused: n
                        } = this.state;
                        return e = null != e ? e.replace(/\n/g, "") : "", t = C.updateContent(e, t), t = C.truncateContent(t, 512), t = this.tokenize(t), !n && this.setState({
                            focused: !0
                        }), this.setEditorState(t), !0
                    }, this.setEditorState = e => {
                        let {
                            searchId: t
                        } = this.props;
                        f.setSearchState(t, e)
                    }, this.handleKeyBind = e => {
                        let {
                            key: t,
                            metaKey: n,
                            shiftKey: l
                        } = e, {
                            editorState: a,
                            searchId: s,
                            keyboardModeEnabled: i
                        } = this.props;
                        if (e.stopPropagation(), "Escape" === t) {
                            if (e.preventDefault(), C.isEmpty(a)) this.blurEditor();
                            else {
                                let e = C.clearContent(a);
                                f.setSearchState(s, e), this.setState({
                                    focused: !0
                                })
                            }
                            return !0
                        }
                        if ("ArrowUp" === t) {
                            e.preventDefault();
                            let {
                                current: t
                            } = this._searchPopoutRef;
                            return null != t && t.focusPreviousOption(), !0
                        }
                        if ("ArrowDown" === t) {
                            e.preventDefault();
                            let {
                                current: t
                            } = this._searchPopoutRef;
                            return null != t && t.focusNextOption(), !0
                        }
                        if ("Tab" === t) {
                            if (i) return;
                            return (0, h.enableKeyboardMode)(), !0
                        }
                        if ("Home" === t || "ArrowLeft" === t && n) return e.preventDefault(), a = l ? C.setToStartSelection(a) : C.setCollapsedStartSelection(a), this.setEditorState(a), !0;
                        if ("End" === t || "ArrowRight" === t && n) return e.preventDefault(), a = l ? C.setToEndSelection(a) : C.setCollapsedEndSelection(a), this.setEditorState(a), !0;
                        if (("Delete" === t || "Backspace" === t) && n) {
                            let e = C.clearContent(a);
                            return this.setEditorState(e), !0
                        }
                        return C.getDefaultKeyBinding(e)
                    }, O.clearTokenCache()
                }
            }
            var x = d.default.connectStores([T.default, m.default], () => {
                var e;
                let t = m.default.getCurrentSearchId(),
                    n = m.default.getSearchType(),
                    l = null != t && m.default.isSearching(t),
                    a = null != t && null !== (e = m.default.getEditorState(t)) && void 0 !== e ? e : C.createEmptyEditorState(M.generateDecorators(_.default)),
                    s = T.default.keyboardModeEnabled;
                return {
                    searchId: t,
                    searchType: n,
                    isSearching: l,
                    editorState: a,
                    hasResults: m.default.hasResults(t),
                    keyboardModeEnabled: s
                }
            })(F)
        },
        653291: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return z
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("627445"),
                o = n.n(r),
                u = n("917351"),
                d = n.n(u),
                c = n("866227"),
                f = n.n(c),
                E = n("868233"),
                S = n("446674"),
                _ = n("77078"),
                h = n("378438"),
                T = n("425773"),
                p = n("76385"),
                N = n("955513"),
                I = n("679653"),
                m = n("419830"),
                A = n("42203"),
                g = n("26989"),
                R = n("27618"),
                C = n("712611"),
                O = n("18494"),
                M = n("162771"),
                D = n("102985"),
                y = n("697218"),
                v = n("834179"),
                P = n("689476"),
                L = n("228220"),
                U = n("659500"),
                F = n("701909"),
                x = n("751520"),
                b = n("158998"),
                G = n("49111"),
                k = n("782340"),
                j = n("813069");
            let B = f("2015-05-15").local(),
                w = (0, E.makeLazy)({
                    createPromise: () => n.el("201959").then(n.bind(n, "201959")),
                    webpackId: "201959"
                }),
                H = (e, t, n) => {
                    var a, s, i;
                    let {
                        user: r,
                        text: o
                    } = n;
                    if (null == r) return (0, l.jsx)("strong", {
                        children: o
                    });
                    let u = y.default.getUser(r.id),
                        d = A.default.getChannel(e),
                        c = (null == d ? void 0 : d.isPrivate()) ? R.default.getNickname(r.id) : null,
                        f = null !== (s = null !== (a = g.default.getNick(e, r.id)) && void 0 !== a ? a : c) && void 0 !== s ? s : b.default.getName(r),
                        E = null !== (i = null == u ? void 0 : u.getAvatarURL(e, 20)) && void 0 !== i ? i : r.getAvatarURL(null == d ? void 0 : d.guild_id, 20);
                    return [(0, l.jsx)("img", {
                        alt: "",
                        className: j.displayAvatar,
                        src: E
                    }, "avatar-".concat(t, "-").concat(r.id)), (0, l.jsx)("span", {
                        className: j.displayedNick,
                        children: f
                    }, "display-nick-".concat(t, "-").concat(r.id)), (0, l.jsx)("span", {
                        className: j.displayUsername,
                        children: b.default.getUserTag(r, {
                            identifiable: D.default.enabled && D.default.hidePersonalInformation ? "never" : "always"
                        })
                    }, "display-username-".concat(t, "-").concat(r.id))]
                },
                Y = (e, t, n) => {
                    let {
                        channel: a,
                        text: s
                    } = n;
                    if (null == a) return (0, l.jsx)("strong", {
                        children: s
                    });
                    let i = A.default.getChannel(a.parent_id),
                        r = (0, m.getChannelIconComponent)(a);
                    return (0, l.jsxs)("div", {
                        className: j.resultChannel,
                        children: [null != r ? (0, l.jsx)(r, {
                            className: j.searchResultChannelIcon
                        }) : null, (0, l.jsx)("strong", {
                            children: (0, I.computeChannelName)(a, y.default, R.default)
                        }), null != i ? (0, l.jsx)("span", {
                            className: j.searchResultChannelCategory,
                            children: (0, I.computeChannelName)(i, y.default, R.default)
                        }) : null]
                    })
                },
                V = e => {
                    let t, n, {
                        id: a,
                        searchId: s,
                        result: r,
                        group: o,
                        className: u,
                        role: d,
                        tabIndex: c,
                        "aria-selected": f,
                        onSelect: E,
                        onFocus: S,
                        showFilter: h,
                        renderResult: T
                    } = e;
                    if (h) {
                        var p, I;
                        t = (0, l.jsx)("span", {
                            className: j.filter,
                            children: null !== (I = null === (p = N.default[o]) || void 0 === p ? void 0 : p.key) && void 0 !== I ? I : "addme:"
                        })
                    }
                    return n = null != T ? T(s, o, r) : (0, l.jsx)("strong", {
                        children: r.text
                    }), (0, l.jsxs)(_.Clickable, {
                        tag: "li",
                        className: i(j.option, u),
                        onClick: E,
                        onFocus: S,
                        id: a,
                        role: d,
                        tabIndex: c,
                        "aria-selected": f,
                        children: [t, n, (0, l.jsx)(P.default, {
                            className: j.plusIcon
                        })]
                    })
                },
                K = e => (0, l.jsx)(V, {
                    ...e,
                    className: j.user,
                    renderResult: H
                }),
                Q = {
                    [G.SearchTokenTypes.FILTER_FROM]: {
                        titleText: () => k.default.Messages.SEARCH_GROUP_HEADER_FROM,
                        component: K
                    },
                    [G.SearchTokenTypes.FILTER_MENTIONS]: {
                        titleText: () => k.default.Messages.SEARCH_GROUP_HEADER_MENTIONS,
                        component: K
                    },
                    [G.SearchTokenTypes.FILTER_HAS]: {
                        titleText: () => k.default.Messages.SEARCH_GROUP_HEADER_HAS
                    },
                    [G.SearchTokenTypes.FILTER_FILE_TYPE]: {
                        titleText: () => k.default.Messages.SEARCH_GROUP_HEADER_FILE_TYPE
                    },
                    [G.SearchTokenTypes.FILTER_IN]: {
                        titleText: () => k.default.Messages.SEARCH_GROUP_HEADER_CHANNELS,
                        component: e => (0, l.jsx)(V, {
                            ...e,
                            renderResult: Y
                        })
                    },
                    [G.SearchAutocompleteGroups.DATES]: {
                        titleText: () => k.default.Messages.SEARCH_GROUP_HEADER_DATES
                    },
                    [G.SearchAutocompleteGroups.HISTORY]: {
                        titleText: () => k.default.Messages.SEARCH_GROUP_HEADER_HISTORY,
                        groupTip(e) {
                            let {
                                searchId: t
                            } = e;
                            return (0, l.jsx)(_.Tooltip, {
                                text: k.default.Messages.SEARCH_CLEAR_HISTORY,
                                position: "left",
                                children: e => {
                                    let {
                                        onMouseEnter: n,
                                        onMouseLeave: a
                                    } = e;
                                    return (0, l.jsx)(_.Clickable, {
                                        onClick: () => (0, h.clearHistory)(t),
                                        onMouseEnter: n,
                                        onMouseLeave: a,
                                        className: j.searchClearHistory,
                                        title: k.default.Messages.SEARCH_CLEAR_HISTORY,
                                        "aria-label": k.default.Messages.SEARCH_CLEAR_HISTORY,
                                        children: (0, l.jsx)(L.default, {})
                                    })
                                }
                            })
                        },
                        component: function(e) {
                            let {
                                onSelect: t,
                                onFocus: n,
                                result: s,
                                showFilter: r,
                                searchId: o,
                                renderResult: u,
                                group: d,
                                ...c
                            } = e, f = "", E = a.useMemo(() => (function(e) {
                                let t = x.tokenizeQuery(e).map((e, t, n) => x.filterHasAnswer(e, n[t + 1]) ? e : new p.Token(e.getFullMatch(), p.NON_TOKEN_TYPE));
                                return t
                            })(s.text), [s.text]), S = E.map(e => {
                                let t = e.getFullMatch();
                                if ("" === t.trim()) return null;
                                let n = G.IS_SEARCH_FILTER_TOKEN.test(e.type),
                                    a = G.IS_SEARCH_ANSWER_TOKEN.test(e.type);
                                return f += t, (0, l.jsx)("span", {
                                    className: i({
                                        [j.filter]: n,
                                        [j.answer]: a,
                                        [j.nonText]: !n && !a
                                    }),
                                    children: t
                                }, e.type + t)
                            });
                            return (0, l.jsxs)(_.Clickable, {
                                className: i(j.option, j.history),
                                onClick: t,
                                onFocus: n,
                                ...c,
                                "aria-label": k.default.Messages.SEARCH_FROM_SUGGESTIONS.format({
                                    suggestion: f
                                }),
                                children: [S, (0, l.jsx)(P.default, {
                                    className: j.plusIcon
                                })]
                            })
                        }
                    },
                    [G.SearchAutocompleteGroups.SEARCH_OPTIONS]: {
                        titleText: () => k.default.Messages.SEARCH_GROUP_HEADER_SEARCH_OPTIONS,
                        groupTip: () => (0, l.jsx)(_.Tooltip, {
                            text: k.default.Messages.LEARN_MORE,
                            position: "left",
                            children: e => (0, l.jsx)("div", {
                                className: j.searchLearnMore,
                                ...e,
                                children: (0, l.jsx)(_.Anchor, {
                                    href: F.default.getArticleURL(G.HelpdeskArticles.USING_SEARCH),
                                    title: k.default.Messages.LEARN_MORE,
                                    children: (0, l.jsx)(v.default, {})
                                })
                            })
                        }),
                        component: function(e) {
                            var t;
                            let {
                                result: n,
                                onSelect: a,
                                onFocus: s,
                                showFilter: r,
                                searchId: o,
                                ...u
                            } = e, d = x.getSearchOptionAnswer(null !== (t = n.token) && void 0 !== t ? t : "");
                            return (0, l.jsxs)(_.Clickable, {
                                className: i(j.option, j.searchOption),
                                onClick: a,
                                onFocus: s,
                                ...u,
                                children: [(0, l.jsx)("span", {
                                    className: j.filter,
                                    children: n.text
                                }), (0, l.jsx)("span", {
                                    className: i({
                                        [j.answer]: d
                                    }),
                                    children: d
                                }), (0, l.jsx)(P.default, {
                                    className: j.plusIcon
                                })]
                            })
                        }
                    }
                };
            class W extends a.PureComponent {
                componentDidUpdate(e, t) {
                    let {
                        resultsState: n,
                        totalResults: l
                    } = this.props, {
                        mode: a
                    } = n, {
                        resultsState: s
                    } = e;
                    null != a.filter && null == s.mode.filter && l > 0 ? this.setSelectedIndex(0) : a.type === G.SearchPopoutModes.FILTER_ALL && s.mode.type !== a.type ? this.setSelectedIndex(-1) : this.keepCurrentOptionSelected(e, t)
                }
                setSelectedIndex(e) {
                    this.setState({
                        selectedIndex: e
                    }, () => this.props.onSelectedIndexChanged(e))
                }
                render() {
                    let {
                        selectedIndex: e
                    } = this.state, {
                        navId: t,
                        resultsState: n,
                        totalResults: a
                    } = this.props;
                    return (0, l.jsx)(T.default, {
                        numResults: a,
                        query: n.query,
                        navId: t,
                        hideQuery: !this.shouldShowSearchQuery(),
                        focusedIndex: e,
                        renderCustomResults: this.renderAutocompletes,
                        renderInitialState: this.renderAutocompletes,
                        onHighlightQuery: () => this.focusOption(-1),
                        onSelectQuery: this.performSearch,
                        renderNoResults: () => null
                    })
                }
                constructor(...e) {
                    var t;
                    super(...e), t = this, this.state = {
                        dateHint: (0, N.getRandomDateShortcut)(),
                        selectedIndex: -1
                    }, this.handleDateChange = e => {
                        this.setSearchQuery(e.format(G.SEARCH_DATE_FORMAT) + " ", !0)
                    }, this.keepCurrentOptionSelected = (e, t) => {
                        let {
                            selectedIndex: n
                        } = this.state, {
                            resultsState: l,
                            totalResults: a
                        } = this.props, {
                            mode: s,
                            autocompletes: i
                        } = l, {
                            resultsState: r
                        } = e;
                        if (s.type !== r.mode.type) this.setSelectedIndex(-1);
                        else if (t.selectedIndex >= 0 && (t.selectedIndex === n || r.autocompletes.length !== i.length)) {
                            let e = x.getFlattenedStringArray(r.autocompletes, r.mode.type),
                                n = e[t.selectedIndex - 1],
                                l = x.getFlattenedStringArray(i, s.type),
                                o = l.indexOf(n); - 1 !== o ? this.setSelectedIndex(o) : t.selectedIndex >= a && this.setSelectedIndex(a - 1)
                        }
                    }, this.focusNextOption = () => {
                        this.focusOtherOption(1)
                    }, this.focusPreviousOption = () => {
                        this.focusOtherOption(-1)
                    }, this.focusOtherOption = e => {
                        let {
                            selectedIndex: t
                        } = this.state, {
                            resultsState: n
                        } = this.props;
                        !x.showDatePicker(n.mode.filter) && this.focusOption(t + e)
                    }, this.focusOption = e => {
                        let t = e,
                            {
                                autocompletes: n
                            } = this.props.resultsState,
                            l = this.shouldShowSearchQuery();
                        t < -1 || !l && t < 0 ? t = x.getTotalResults(n) - 1 : l && t >= x.getTotalResults(n) ? t = -1 : !l && t >= x.getTotalResults(n) && (t = 0), this.setSelectedIndex(t)
                    }, this.selectOption = e => {
                        let t = e;
                        if (null == t && (t = this.state.selectedIndex), t < 0) return !1;
                        let {
                            autocompletes: n,
                            mode: l
                        } = this.props.resultsState;
                        if (x.showDatePicker(l.filter)) return;
                        let a = x.getFlattenedStringArray(n, l.type);
                        if (t >= a.length) return !1;
                        let s = a[t],
                            i = function(e) {
                                let t = !0,
                                    n = e.trim();
                                return d(N.default).forOwn(e => {
                                    "" !== e.key && null != e.key && n === e.key && (t = !1)
                                }), t
                            }(s);
                        return this.setSearchQuery(s, i), !0
                    }, this.setSearchQuery = function(e) {
                        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            {
                                mode: l,
                                cursorScope: a
                            } = t.props.resultsState,
                            s = 0;
                        null != l.token ? s = l.token.start : (null == a ? void 0 : a.currentToken) != null && (s = a.currentToken.end);
                        let i = null != l.token ? l.token.end : s;
                        U.ComponentDispatch.dispatch(G.ComponentActions.SET_SEARCH_QUERY, {
                            query: e,
                            anchor: s,
                            focus: i,
                            performSearch: n
                        }), t.setSelectedIndex(-1)
                    }, this.shouldShowSearchQuery = () => {
                        let {
                            mode: e
                        } = this.props.resultsState;
                        return e.type !== G.SearchPopoutModes.FILTER && e.type !== G.SearchPopoutModes.EMPTY && !x.showDatePicker(e.filter)
                    }, this.renderDatePicker = () => (0, l.jsxs)("div", {
                        className: j.datePicker,
                        children: [(0, l.jsx)(w, {
                            onSelect: this.handleDateChange,
                            maxDate: f().local(),
                            minDate: B
                        }), (0, l.jsxs)("div", {
                            className: j.datePickerHint,
                            children: [(0, l.jsxs)("span", {
                                className: j.hint,
                                children: [k.default.Messages.SEARCH_DATE_PICKER_HINT, "\xa0"]
                            }), (0, l.jsx)(_.Clickable, {
                                tag: "span",
                                className: j.hintValue,
                                onClick: this.handleHintClick,
                                children: this.state.dateHint
                            })]
                        })]
                    }), this.handleHintClick = () => {
                        this.setSearchQuery(this.state.dateHint, !0)
                    }, this.performSearch = () => {
                        U.ComponentDispatch.dispatch(G.ComponentActions.PERFORM_SEARCH)
                    }, this.renderAutocompletes = () => {
                        let {
                            selectedIndex: e
                        } = this.state, {
                            navId: t,
                            searchId: n
                        } = this.props, {
                            autocompletes: a,
                            mode: s
                        } = this.props.resultsState;
                        if (x.showDatePicker(s.filter)) return this.renderDatePicker();
                        let i = -1;
                        return a.map(a => {
                            var r, o, u;
                            let d, c;
                            if (null == a || 0 === a.results.length) return null;
                            let f = null !== (r = Q[a.group]) && void 0 !== r ? r : {};
                            null != f.titleText && (c = "".concat(a.group, "-header"), d = (0, l.jsx)("div", {
                                id: c,
                                className: j.header,
                                children: f.titleText()
                            }));
                            let E = null !== (o = f.groupTip) && void 0 !== o ? o : null,
                                S = null != E ? (0, l.jsx)(E, {
                                    searchId: n
                                }) : null,
                                _ = null !== (u = f.component) && void 0 !== u ? u : V,
                                h = s.type === G.SearchPopoutModes.FILTER_ALL;
                            return (0, l.jsxs)("ul", {
                                role: "group",
                                "aria-labelledby": c,
                                className: j.resultsGroup,
                                children: [d, S, a.results.map(s => {
                                    var r, o;
                                    if (null == s || null == a) return null;
                                    i += 1;
                                    let u = e === i;
                                    return (0, l.jsx)(_, {
                                        searchId: n,
                                        group: null !== (r = s.group) && void 0 !== r ? r : a.group,
                                        result: s,
                                        showFilter: h,
                                        onSelect: this.selectOption.bind(null, i),
                                        onFocus: this.focusOption.bind(null, i),
                                        ...(0, T.getListboxOptionProps)(t, i, u)
                                    }, "".concat(a.group, "-").concat(s.text, "-").concat(null !== (o = s.key) && void 0 !== o ? o : ""))
                                })]
                            }, a.group)
                        })
                    }
                }
            }
            var z = a.forwardRef((e, t) => {
                let [n, a, s] = (0, S.useStateFromStoresArray)([M.default, O.default, C.default], () => {
                    let e = M.default.getGuildId(),
                        t = O.default.getChannelId(),
                        n = null != e ? e : t;
                    o(null != n, "SearchPopout.getStateFromStores - invalid searchId");
                    let l = C.default.getState(n),
                        a = x.getTotalResults(l.autocompletes);
                    return [n, l, a]
                });
                return (0, l.jsx)(W, {
                    ...e,
                    searchId: n,
                    resultsState: a,
                    totalResults: s,
                    ref: t
                })
            })
        },
        161345: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            }), n("65597");
            var l = n("460609"),
                a = n("697218");

            function s() {
                var e;
                let t = (null === (e = a.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff()) === !0,
                    n = (0, l.getCombinedMainTabsV2PhaseOneExperimentValue)("showNewSearch");
                return t || n
            }
        },
        208021: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var l = n("913144"),
                a = n("819689"),
                s = n("115718"),
                i = n("347895"),
                r = n("341329"),
                o = n("582713"),
                u = n("724210"),
                d = {
                    openPrivateChannelAsSidebar(e) {
                        let {
                            channelId: t,
                            messageId: n,
                            baseChannelId: s,
                            hasSingleMessageRequest: i
                        } = e;
                        l.default.dispatch({
                            type: "SIDEBAR_VIEW_CHANNEL",
                            sidebarType: o.SidebarType.VIEW_MESSAGE_REQUEST,
                            baseChannelId: s,
                            channelId: t,
                            details: {
                                type: o.SidebarOpenDetailsType.MESSAGE_REQUEST,
                                hasSingleMessageRequest: i
                            }
                        }), null != n ? a.default.jumpToMessage({
                            channelId: t,
                            messageId: n,
                            flash: !0
                        }) : r.default.fetchMessages({
                            channelId: t
                        })
                    },
                    openChannelAsSidebar(e) {
                        let {
                            guildId: t,
                            channelId: n,
                            baseChannelId: i,
                            flash: u = !0,
                            details: d
                        } = e;
                        l.default.dispatch({
                            type: "SIDEBAR_VIEW_CHANNEL",
                            sidebarType: o.SidebarType.VIEW_CHANNEL,
                            guildId: t,
                            baseChannelId: i,
                            channelId: n,
                            details: d
                        });
                        let c = null == d ? void 0 : d.initialMessageId;
                        null != c ? a.default.jumpToMessage({
                            channelId: n,
                            messageId: c,
                            flash: u,
                            jumpType: s.JumpTypes.INSTANT
                        }) : r.default.fetchMessages({
                            guildId: t,
                            channelId: n
                        })
                    },
                    openResourceChannelAsSidebar(e) {
                        let {
                            guildId: t,
                            channelId: n
                        } = e;
                        null != t && ((0, i.selectHomeResourceChannel)(t, n, !1), l.default.dispatch({
                            type: "SIDEBAR_VIEW_CHANNEL",
                            sidebarType: o.SidebarType.VIEW_CHANNEL,
                            guildId: t,
                            baseChannelId: u.StaticChannelRoute.GUILD_HOME,
                            channelId: n
                        }))
                    },
                    openThreadAsSidebar(e) {
                        let {
                            guildId: t,
                            baseChannelId: n,
                            channelId: i,
                            flash: u = !0,
                            details: d
                        } = e;
                        l.default.dispatch({
                            type: "SIDEBAR_VIEW_CHANNEL",
                            sidebarType: o.SidebarType.VIEW_THREAD,
                            baseChannelId: n,
                            channelId: i,
                            details: d
                        }), (null == d ? void 0 : d.initialMessageId) != null ? a.default.jumpToMessage({
                            channelId: i,
                            messageId: d.initialMessageId,
                            flash: u,
                            jumpType: s.JumpTypes.INSTANT
                        }) : r.default.fetchMessages({
                            guildId: t,
                            channelId: i
                        })
                    },
                    closeChannelSidebar(e) {
                        l.default.dispatch({
                            type: "SIDEBAR_CLOSE",
                            baseChannelId: e
                        })
                    },
                    openGuildSidebar(e) {
                        let {
                            guildId: t,
                            baseChannelId: n,
                            sidebarType: a,
                            details: s
                        } = e;
                        l.default.dispatch({
                            type: "SIDEBAR_VIEW_GUILD",
                            sidebarType: a,
                            baseChannelId: n,
                            guildId: t,
                            details: s
                        })
                    },
                    closeGuildSidebar(e) {
                        l.default.dispatch({
                            type: "SIDEBAR_CLOSE_GUILD",
                            guildId: e
                        })
                    }
                }
        },
        414833: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                computeThreadNotificationSetting: function() {
                    return c
                },
                useThreadNotificationSetting: function() {
                    return f
                }
            });
            var l = n("446674"),
                a = n("208127"),
                s = n("42203"),
                i = n("282109"),
                r = n("568734"),
                o = n("755624"),
                u = n("648564"),
                d = n("49111");

            function c(e) {
                let t = o.default.flags(e.id);
                if (null == t || (0, a.isReadStateStaffExperimentEnabled)() && o.default.isMuted(e.id)) return u.ThreadMemberFlags.NO_MESSAGES;
                if ((0, r.hasFlag)(t, u.ThreadMemberFlags.ALL_MESSAGES)) return u.ThreadMemberFlags.ALL_MESSAGES;
                if ((0, r.hasFlag)(t, u.ThreadMemberFlags.ONLY_MENTIONS)) return u.ThreadMemberFlags.ONLY_MENTIONS;
                if ((0, r.hasFlag)(t, u.ThreadMemberFlags.NO_MESSAGES)) return u.ThreadMemberFlags.NO_MESSAGES;
                let n = s.default.getChannel(e.parent_id);
                if (null == n || i.default.isGuildOrCategoryOrChannelMuted(n.guild_id, n.id)) return u.ThreadMemberFlags.NO_MESSAGES;
                let l = i.default.resolvedMessageNotifications(n);
                return l === d.UserNotificationSettings.NO_MESSAGES ? u.ThreadMemberFlags.NO_MESSAGES : l === d.UserNotificationSettings.ONLY_MENTIONS ? u.ThreadMemberFlags.ONLY_MENTIONS : u.ThreadMemberFlags.ALL_MESSAGES
            }

            function f(e) {
                return (0, l.useStateFromStores)([o.default, i.default, s.default], () => c(e), [e])
            }
        },
        547772: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("77078"),
                s = n("64016"),
                i = n("255228"),
                r = n("263024"),
                o = n("414833"),
                u = n("648564");

            function d(e) {
                let {
                    channel: t,
                    closePopout: n,
                    onSelect: d,
                    navId: c,
                    label: f
                } = e, E = (0, s.default)(t, "Notifications Bell"), S = (0, i.default)(t), _ = (0, o.useThreadNotificationSetting)(t);
                return (0, l.jsxs)(a.Menu, {
                    navId: c,
                    onClose: n,
                    "aria-label": f,
                    onSelect: d,
                    children: [(0, l.jsxs)(a.MenuGroup, {
                        children: [t.isForumPost() ? E : null, S]
                    }), (0, l.jsx)(a.MenuGroup, {
                        children: (0, u.getThreadNotificationOptions)().map(e => {
                            let {
                                setting: n,
                                label: s
                            } = e;
                            return (0, l.jsx)(a.MenuRadioItem, {
                                group: "thread-notifications",
                                id: "".concat(n),
                                label: s,
                                action: () => r.default.setNotificationSettings(t, {
                                    flags: n
                                }),
                                checked: n === _
                            }, n)
                        })
                    })]
                })
            }
        },
        250404: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var l = n("446674"),
                a = n("913144"),
                s = n("42203"),
                i = n("86878"),
                r = n("377253");
            let o = null;
            class u extends l.default.Store {
                initialize() {
                    this.waitFor(s.default, i.default, r.default)
                }
                getApps() {
                    return o
                }
            }
            u.displayName = "AuthorizedAppsStore";
            var d = new u(a.default, {
                USER_AUTHORIZED_APPS_UPDATE: function(e) {
                    o = e.apps
                }
            })
        },
        236717: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var l = n("446674"),
                a = n("913144");
            let s = "UPDATE_NOT_AVAILABLE";

            function i(e) {
                s = e.type
            }
            class r extends l.default.Store {
                getState() {
                    return s
                }
            }
            r.displayName = "AutoUpdateStore";
            var o = new r(a.default, {
                CHECKING_FOR_UPDATES: i,
                UPDATE_NOT_AVAILABLE: i,
                UPDATE_AVAILABLE: i,
                UPDATE_MANUALLY: i,
                UPDATE_ERROR: i,
                UPDATE_DOWNLOADED: i
            })
        },
        320268: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            });
            var l = n("917351"),
                a = n.n(l),
                s = n("446674"),
                i = n("95410"),
                r = n("913144"),
                o = n("251472"),
                u = n("823411"),
                d = n("465527"),
                c = n("546463"),
                f = n("568307"),
                E = n("697218"),
                S = n("437712"),
                _ = n("552712"),
                h = n("49111");
            let T = "DetectedOffPlatformPremiumPerksStore",
                p = {},
                N = {},
                I = [];

            function m() {
                let e = !1;
                for (let {
                        skuId: t,
                        applicationId: n
                    }
                    of a.values(N)) {
                    if (I.includes(t)) continue;
                    let l = c.default.getGame(n);
                    if (null == l) {
                        !c.default.isFetching(n) && !c.default.didFetchingFail(n) && u.default.fetchApplication(n);
                        continue
                    }
                    let a = _.default.get(t);
                    if (null == a) {
                        !_.default.isFetching(t) && !_.default.didFetchingSkuFail(t) && d.fetchSKU(l.id, t);
                        continue
                    }
                    S.default.applicationIdsFetching.has(l.id) || S.default.isEntitledToSku(E.default.getCurrentUser(), t, l.id, l.id) || !a.available ? null != p[t] && (delete p[t], e = !0) : (p[t] = {
                        skuId: t,
                        applicationId: n
                    }, e = !0)
                }
                return e
            }
            class A extends s.default.Store {
                initialize() {
                    var e;
                    this.waitFor(f.default, _.default, S.default), I = null !== (e = i.default.get(T)) && void 0 !== e ? e : I
                }
                getDetectedOffPlatformPremiumPerks() {
                    return a.values(p)
                }
            }
            A.displayName = "DetectedOffPlatformPremiumPerksStore";
            var g = new A(r.default, {
                LOGOUT: function() {
                    p = {}, N = {}
                },
                SKU_FETCH_SUCCESS: m,
                ENTITLEMENT_FETCH_APPLICATION_SUCCESS: m,
                ENTITLEMENT_CREATE: m,
                APPLICATION_FETCH_SUCCESS: m,
                DETECTED_OFF_PLATFORM_PREMIUM_PERKS_DISMISS: function(e) {
                    let {
                        skuId: t
                    } = e;
                    if (delete p[t], I.includes(t)) return !1;
                    I.push(t), i.default.set(T, I)
                },
                RUNNING_GAMES_CHANGE: function() {
                    let e = !1;
                    for (let {
                            id: t,
                            distributor: n
                        }
                        of f.default.getRunningGames())
                        if (null != t && n !== h.Distributors.DISCORD)
                            for (let {
                                    skuId: n,
                                    applicationId: l
                                }
                                of h.OFF_PLATFORM_PREMIUM_PERKS) {
                                if (!(l !== t || I.includes(n))) null == N[n] && (!S.default.applicationIdsFetched.has(l) && !S.default.applicationIdsFetching.has(l) && null == S.default.getForSku(n) && o.fetchUserEntitlementsForApplication(l), N[n] = {
                                    skuId: n,
                                    applicationId: l
                                }, e = !0)
                            }
                    return e && m(), e
                }
            })
        },
        669280: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var l = n("446674"),
                a = n("913144"),
                s = n("299039"),
                i = n("271938"),
                r = n("27618");
            let o = !1;
            class u extends l.default.Store {
                initialize() {
                    this.waitFor(r.default, i.default)
                }
                isEligible() {
                    return o
                }
            }
            u.displayName = "PremiumPromoStore";
            var d = new u(a.default, {
                CONNECTION_OPEN: function() {
                    let e = o;
                    return e !== (o = r.default.getFriendIDs().length >= 10 && s.default.extractTimestamp(i.default.getId()) < Date.now() - 15552e6)
                }
            })
        },
        712611: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return y
                }
            });
            var l = n("446674"),
                a = n("913144"),
                s = n("955513"),
                i = n("447909"),
                r = n("161345"),
                o = n("25292"),
                u = n("651879"),
                d = n("751520"),
                c = n("158998"),
                f = n("26989"),
                E = n("744983"),
                S = n("102985"),
                _ = n("697218"),
                h = n("49111");
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
                        type: h.SearchPopoutModes.EMPTY,
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
                if (s === h.SearchPopoutModes.EMPTY || s === h.SearchPopoutModes.FILTER && i !== h.SearchTokenTypes.FILTER_FROM && i !== h.SearchTokenTypes.FILTER_MENTIONS) return;
                let r = 3;
                a.mode.type === h.SearchPopoutModes.FILTER && (r = 10), l.results = function(e) {
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
                }), D.emitChange()
            }

            function m(e, t, n) {
                let l, a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 10;
                if (null == e || "" === e) return null;
                let i = E.default.getSearchType(n);
                if (i === h.SearchTypes.GUILD && (e === h.SearchTokenTypes.FILTER_FROM || e === h.SearchTokenTypes.FILTER_MENTIONS)) {
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
                        let e = (0, r.default)();
                        return {
                            [h.SearchTokenTypes.FILTER_FROM]: !S.default.hidePersonalInformation,
                            [h.SearchTokenTypes.FILTER_MENTIONS]: !S.default.hidePersonalInformation,
                            [h.SearchTokenTypes.FILTER_HAS]: !0,
                            [h.SearchTokenTypes.FILTER_BEFORE]: !0,
                            [h.SearchTokenTypes.FILTER_AFTER]: !0,
                            [h.SearchTokenTypes.FILTER_ON]: !0,
                            [h.SearchTokenTypes.FILTER_IN]: E.default.getSearchType() === h.SearchTypes.GUILD,
                            [h.SearchTokenTypes.FILTER_PINNED]: !e
                        }
                    }(),
                    l = (0, s.getFilterAutocompletions)(t).filter(e => n[e.token]);
                return {
                    group: h.SearchAutocompleteGroups.SEARCH_OPTIONS,
                    results: l
                }
            }

            function g(e, t) {
                let n = [];
                if (t.type === h.SearchPopoutModes.FILTER) n.push(m(t.filter, t.token, e, 10));
                else if (t.type === h.SearchPopoutModes.FILTER_ALL) n = function(e, t) {
                    let n = (null != e ? e.getFullMatch() : "").trim(),
                        l = [];
                    null != n && "" !== n && ((function(e) {
                        let t = E.default.getSearchType(e),
                            n = [h.SearchTokenTypes.FILTER_HAS];
                        return !S.default.hidePersonalInformation && (n.push(h.SearchTokenTypes.FILTER_FROM), n.push(h.SearchTokenTypes.FILTER_MENTIONS)), t === h.SearchTypes.GUILD && n.push(h.SearchTokenTypes.FILTER_IN), n
                    })(t).forEach(n => {
                        if (null == n) return;
                        let a = m(n, e, t, 3);
                        null != a && l.push(a)
                    }), l.push(function(e, t) {
                        let n = (null != e ? e.getFullMatch() : "").trim();
                        if (null != n && "" !== n) {
                            var l, a, i;
                            let e = null === (l = s.default[h.SearchTokenTypes.FILTER_BEFORE]) || void 0 === l ? void 0 : l.getAutocompletions(n, t, 1)[0],
                                r = null === (a = s.default[h.SearchTokenTypes.FILTER_ON]) || void 0 === a ? void 0 : a.getAutocompletions(n, t, 1)[0],
                                o = null === (i = s.default[h.SearchTokenTypes.FILTER_AFTER]) || void 0 === i ? void 0 : i.getAutocompletions(n, t, 1)[0];
                            return null == e ? null : {
                                group: h.SearchAutocompleteGroups.DATES,
                                results: [e, r, o]
                            }
                        }
                    }(e, t)));
                    let a = (0, d.getTotalResults)(l);
                    return a < 5 && l.push(A(e)), l
                }(t.token, e);
                else if (t.type === h.SearchPopoutModes.EMPTY) {
                    n.push(A(t.token));
                    let l = (0, r.default)();
                    !l && n.push(function(e) {
                        if (S.default.hidePersonalInformation) return null;
                        let t = E.default.getHistory(e);
                        return null == t ? null : {
                            group: h.SearchAutocompleteGroups.HISTORY,
                            results: t.map(e => ({
                                text: e
                            }))
                        }
                    }(e))
                }
                return n
            }

            function R() {
                (0, d.clearTokenCache)()
            }

            function C(e) {
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
                    autocompletes: i.map(e => (null == e ? void 0 : e.group) === h.SearchAutocompleteGroups.HISTORY ? null : e)
                })
            }

            function O() {
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
            class M extends l.default.Store {
                initialize() {
                    this.waitFor(f.default, S.default)
                }
                getState(e) {
                    var t;
                    return null !== (t = T[e]) && void 0 !== t ? t : N({
                        searchId: e
                    })
                }
            }
            M.displayName = "SearchAutocompleteStore";
            let D = new M(a.default, {
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
                    else if (r.type === h.SearchPopoutModes.EMPTY || r.type === h.SearchPopoutModes.FILTER && r.filter !== h.SearchTokenTypes.FILTER_FROM && r.filter !== h.SearchTokenTypes.FILTER_MENTIONS) null != c && (c.context.clearQuery(), c.results = []), n = g(l, r);
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
                CHANNEL_CREATE: R,
                CHANNEL_DELETE: R,
                STREAMER_MODE_UPDATE: O,
                SEARCH_MODAL_OPEN: O,
                SEARCH_SCREEN_OPEN: O,
                SEARCH_CLEAR_HISTORY: function(e) {
                    let {
                        searchId: t
                    } = e;
                    null != t ? C(t) : Object.keys(T).forEach(C)
                },
                LOGOUT: function() {
                    Object.keys(T).forEach(C)
                }
            });
            var y = D
        },
        262768: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var l = n("446674"),
                a = n("95410"),
                s = n("913144"),
                i = n("167359");
            let r = "MaintenanceStore",
                o = null,
                u = null,
                d = null;
            class c extends l.default.Store {
                initialize() {
                    d = a.default.get(r)
                }
                getIncident() {
                    return o
                }
                getScheduledMaintenance() {
                    return null != u && u.id !== d ? u : null
                }
            }
            c.displayName = "MaintenanceStore";
            var f = new c(s.default, {
                CONNECTION_OPEN: function() {
                    o = null, i.default.checkScheduledMaintenances()
                },
                STATUS_PAGE_INCIDENT: function(e) {
                    o = e.incident
                },
                STATUS_PAGE_SCHEDULED_MAINTENANCE: function(e) {
                    u = e.maintenance
                },
                STATUS_PAGE_SCHEDULED_MAINTENANCE_ACK: function() {
                    if (null == u) return !1;
                    d = u.id, a.default.set(r, d)
                }
            })
        },
        381684: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return R
                }
            }), n("866227");
            var l, a, s, i = n("316693"),
                r = n("446674"),
                o = n("95410"),
                u = n("913144"),
                d = n("518888"),
                c = n("525065"),
                f = n("305961"),
                E = n("957255"),
                S = n("162771"),
                _ = n("697218"),
                h = n("49111");
            let T = {
                    hiddenSurveys: {},
                    validSurveys: {},
                    currentSurvey: null,
                    surveyOverride: null,
                    iosIsPushNotificationClicked: !1,
                    iosIsInviteShown: !1,
                    iosFirstRunDate: null !== (l = o.default.get(h.FIRST_RUN_DATE_KEY)) && void 0 !== l ? l : null,
                    lastFetched: null
                },
                p = T;
            (s = a || (a = {})).IS_OWNER = "is_owner", s.IS_ADMIN = "is_admin", s.IS_COMMUNITY = "is_community", s.GUILD_SIZE = "guild_size", s.IS_HUB = "is_hub", s.IS_VIEWING = "is_viewing", s.GUILD_PERMISSIONS = "guild_permissions", s.GUILD_SIZE_ALL = "guild_size_all";
            let N = new Set(Object.values(a));

            function I(e) {
                let {
                    guild_requirements: t = [],
                    guild_size: n = [null, null],
                    guild_permissions: l = []
                } = e;
                if (0 === t.length) return !0;
                for (let e of t)
                    if (!N.has(e)) return !1;
                let s = t.includes(a.GUILD_SIZE_ALL),
                    r = !0,
                    o = Object.values(f.default.getGuilds());
                for (let d of o) {
                    var u;
                    if (s || t.includes(a.GUILD_SIZE)) {
                        let e = c.default.getMemberCount(d.id);
                        if (null == e || null != n[0] && e < n[0] || null != n[1] && e > n[1]) {
                            r = !1;
                            continue
                        }
                    }
                    if (t.includes(a.IS_COMMUNITY) && !d.hasFeature(h.GuildFeatures.COMMUNITY) || t.includes(a.IS_HUB) && !d.hasFeature(h.GuildFeatures.HUB)) continue;
                    if (t.includes(a.GUILD_PERMISSIONS)) {
                        if (0 === l.length) continue;
                        let e = !1;
                        for (let t of l) try {
                            let n = i.default.deserialize(t);
                            if (E.default.can(n, d)) {
                                e = !0;
                                break
                            }
                        } catch (e) {}
                        if (!e) continue
                    }
                    let o = _.default.getCurrentUser(),
                        f = (null == o ? void 0 : o.id) === d.ownerId,
                        T = E.default.can(h.Permissions.ADMINISTRATOR, d);
                    if (t.includes(a.IS_OWNER) && !f || t.includes(a.IS_ADMIN) && !T) continue;
                    p.validSurveys = null !== (u = p.validSurveys) && void 0 !== u ? u : {}, null == p.validSurveys[e.key] && (p.validSurveys[e.key] = e);
                    let N = S.default.getGuildId(),
                        I = null != N && N === d.id;
                    if ((!t.includes(a.IS_VIEWING) || I) && !s) return !0
                }
                return !!s && !!r || !1
            }

            function m(e) {
                let {
                    survey: t
                } = e, {
                    hiddenSurveys: n,
                    iosIsPushNotificationClicked: l,
                    iosIsInviteShown: a
                } = p;
                if (p.lastFetched = Date.now(), null != t && null == n[t.key]) {
                    if (!I(t)) return;
                    p.currentSurvey = t
                }
            }

            function A() {
                if (null != p.currentSurvey && (I(p.currentSurvey) || (p.currentSurvey = null, 0))) return !1;
                ! function() {
                    var e;
                    p.validSurveys = null !== (e = p.validSurveys) && void 0 !== e ? e : {};
                    let t = Object.values(p.validSurveys)[0];
                    if (null != t && I(t)) {
                        m({
                            type: "SURVEY_FETCHED",
                            survey: t
                        });
                        return
                    }
                    if (null == p.currentSurvey) return;
                    p.currentSurvey = null
                }()
            }
            class g extends r.default.PersistedStore {
                initialize(e) {
                    p = null != e ? e : T, this.syncWith([S.default], A)
                }
                getState() {
                    return p
                }
                getCurrentSurvey() {
                    return p.currentSurvey
                }
                getSurveyOverride() {
                    return p.surveyOverride
                }
            }
            g.displayName = "SurveyStore", g.persistKey = "SurveyStore";
            var R = new g(u.default, {
                CONNECTION_OPEN: function() {
                    var e;
                    if (!(null != p.lastFetched && Date.now() - (null !== (e = p.lastFetched) && void 0 !== e ? e : 0) < 864e5) || null != p.surveyOverride)(0, d.surveyFetch)(p.surveyOverride)
                },
                SURVEY_FETCHED: m,
                SURVEY_HIDE: function(e) {
                    var t;
                    let {
                        key: n
                    } = e;
                    p.hiddenSurveys[n] = !0, p.currentSurvey = null, p.validSurveys = null !== (t = p.validSurveys) && void 0 !== t ? t : {}, delete p.validSurveys[n]
                },
                SURVEY_OVERRIDE: function(e) {
                    let {
                        id: t
                    } = e;
                    p.surveyOverride = t, null != t && delete p.hiddenSurveys[t], (0, d.surveyFetch)(p.surveyOverride)
                },
                PUSH_NOTIFICATION_CLICK: function() {
                    p.iosIsPushNotificationClicked = !0
                },
                DISPLAYED_INVITE_SHOW: function() {
                    p.iosIsInviteShown = !0
                },
                LOGOUT: function() {
                    p.hiddenSurveys = {}
                }
            })
        },
        330387: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var l = n("446674"),
                a = n("913144");
            let s = null;
            class i extends l.default.Store {
                hasAction() {
                    return null != s
                }
                getAction() {
                    return s
                }
            }

            function r(e) {
                s = e.requiredAction
            }
            i.displayName = "UserRequiredActionStore";
            var o = new i(a.default, {
                CONNECTION_OPEN: r,
                USER_REQUIRED_ACTION_UPDATE: r
            })
        },
        189459: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var l = n("446674"),
                a = n("913144"),
                s = n("49111");
            let i = null,
                r = [s.DispatchErrorCodes.REDISTRIBUTABLE_INSTALL_FAILED, s.DispatchErrorCodes.POST_INSTALL_FAILED, s.DispatchErrorCodes.POST_INSTALL_CANCELLED],
                o = [s.DispatchErrorCodes.APPLICATION_NOT_FOUND, s.DispatchErrorCodes.APPLICATION_LOAD_FAILED, s.DispatchErrorCodes.INTERRUPTED, s.DispatchErrorCodes.DESERIALIZATION_FAILED];
            class u extends l.default.Store {
                getLastError() {
                    return i
                }
            }
            u.displayName = "DispatchApplicationErrorStore";
            var d = new u(a.default, {
                DISPATCH_APPLICATION_LAUNCH_SETUP_START: function() {
                    null != i && null != i.code && r.includes(i.code) && (i = null)
                },
                DISPATCH_APPLICATION_ERROR: function(e) {
                    let {
                        error: t
                    } = e;
                    i = null != t.code && o.includes(t.code) ? null : t
                }
            })
        },
        600133: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                typeToDismissibleContent: function() {
                    return eM
                },
                default: function() {
                    return eH
                }
            });
            var l, a = n("866227"),
                s = n.n(a),
                i = n("446674"),
                r = n("741397"),
                o = n("151426"),
                u = n("95410"),
                d = n("913144"),
                c = n("49671"),
                f = n("376556"),
                E = n("7331"),
                S = n("889293"),
                _ = n("10641"),
                h = n("180273"),
                T = n("579565"),
                p = n("789563"),
                N = n("619443"),
                I = n("875037"),
                m = n("398654"),
                A = n("54346"),
                g = n("681937"),
                R = n("926809"),
                C = n("619259"),
                O = n("179803"),
                M = n("38654"),
                D = n("267567"),
                y = n("167209"),
                v = n("104032"),
                P = n("983424"),
                L = n("897107"),
                U = n("44678"),
                F = n("807345"),
                x = n("840895"),
                b = n("143573"),
                G = n("703537"),
                k = n("662285"),
                j = n("808422"),
                B = n("374363"),
                w = n("271938"),
                H = n("250404"),
                Y = n("533222"),
                V = n("42203"),
                K = n("47319"),
                Q = n("320268"),
                W = n("546463"),
                z = n("26989"),
                q = n("305961"),
                X = n("42887"),
                J = n("385649"),
                Z = n("957255"),
                $ = n("669280"),
                ee = n("945956"),
                et = n("568307"),
                en = n("18494"),
                el = n("162771"),
                ea = n("262768"),
                es = n("102985"),
                ei = n("381684"),
                er = n("330387"),
                eo = n("697218"),
                eu = n("800762"),
                ed = n("160299"),
                ec = n("357957"),
                ef = n("521012"),
                eE = n("340412"),
                eS = n("437712"),
                e_ = n("167726"),
                eh = n("773336"),
                eT = n("719923"),
                ep = n("189459"),
                eN = n("316661"),
                eI = n("352326"),
                em = n("49111"),
                eA = n("492397"),
                eg = n("411511"),
                eR = n("646718"),
                eC = n("843455"),
                eO = n("353927");
            let eM = {
                    [em.NoticeTypes.LOCALIZED_PRICING]: o.DismissibleContent.NAGBAR_NOTICE_LOCALIZED_PRICING,
                    [em.NoticeTypes.DOWNLOAD_NAG]: o.DismissibleContent.NAGBAR_NOTICE_DOWNLOAD,
                    [em.NoticeTypes.CONNECT_SPOTIFY]: o.DismissibleContent.NAGBAR_NOTICE_CONNECT_SPOTIFY,
                    [em.NoticeTypes.CONNECT_PLAYSTATION]: o.DismissibleContent.NAGBAR_NOTICE_CONNECT_PLAYSTATION,
                    [em.NoticeTypes.MFA_SMS_BACKUP]: o.DismissibleContent.NAGBAR_NOTICE_MFA_SMS_BACKUP,
                    [em.NoticeTypes.PREMIUM_TIER_2_TRIAL_ENDING]: o.DismissibleContent.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING,
                    [em.NoticeTypes.PREMIUM_REACTIVATE]: o.DismissibleContent.NAGBAR_NOTICE_PREMIUM_REACTIVATE,
                    [em.NoticeTypes.DROPS_GO_LIVE_BANNER]: o.DismissibleContent.QUEST_2_GO_LIVE_BANNER,
                    [em.NoticeTypes.DROPS_ENDED_INCOMPLETE]: o.DismissibleContent.QUEST_2_ENDED_INCOMPLETE,
                    [em.NoticeTypes.BOUNCED_EMAIL_DETECTED]: o.DismissibleContent.NAGBAR_BOUNCED_EMAIL_NOTICE,
                    [em.NoticeTypes.ACTIVATE_SERVER_SUBSCRIPTION]: o.DismissibleContent.NAGBAR_ACTIVATE_SERVER_SUBSCRIPTION,
                    [em.NoticeTypes.PREMIUM_TIER_0_TRIAL_ENDING]: o.DismissibleContent.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING,
                    [em.NoticeTypes.GUILD_ONBOARDING_UPSELL_NAGBAR]: o.DismissibleContent.GUILD_ONBOARDING_UPSELL_NAGBAR,
                    [em.NoticeTypes.POMELO_ELIGIBLE]: o.DismissibleContent.NAGBAR_NOTICE_POMELO
                },
                eD = {
                    [em.NoticeTypes.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: "hideDetectedOffPlatformPremiumPerkUpsell",
                    [em.NoticeTypes.PREMIUM_UNCANCEL]: "hideUncancelReminder",
                    [em.NoticeTypes.PREMIUM_MISSING_PAYMENT]: "hideMissingPaymentReminder",
                    [em.NoticeTypes.PREMIUM_PAST_DUE_MISSING_PAYMENT]: "hidePastDueMissingPaymentReminder",
                    [em.NoticeTypes.PREMIUM_PAST_DUE_INVALID_PAYMENT]: "hidePastDueInvalidPaymentReminder",
                    [em.NoticeTypes.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: "hidePastDueOneTimePaymentReminder",
                    [em.NoticeTypes.AUTO_MODERATION_MENTION_RAID_DETECTION]: "hideAutoModerationMentionRaidDetectionNotice",
                    [em.NoticeTypes.GUILD_RAID_NOTIFICATION]: "hideGuildRaidDetectionNotice",
                    [em.NoticeTypes.SERVER_USAGE_SURVEY]: "hideServerUsageSurvey",
                    [em.NoticeTypes.WIN32_DEPRECATED_MESSAGE]: "hideWin32DeprecationMessageNotice",
                    [em.NoticeTypes.PREMIUM_TIER_2_TRIAL_ENDING]: "hidePremiumTier2TrialOfferEndingNotice"
                },
                ey = new Set([em.NoticeTypes.NO_INPUT_DETECTED, em.NoticeTypes.STREAMER_MODE, em.NoticeTypes.VIDEO_UNSUPPORTED_BROWSER, em.NoticeTypes.SPOTIFY_AUTO_PAUSED, em.NoticeTypes.DISPATCH_ERROR, em.NoticeTypes.DISPATCH_ERROR, em.NoticeTypes.DISPATCH_INSTALL_SCRIPT_PROGRESS, em.NoticeTypes.BLOCKED_BY_PROXY]),
                ev = {},
                eP = Object.freeze({
                    id: null,
                    message: null,
                    buttonText: null,
                    callback: void 0,
                    metadata: null
                }),
                eL = null;

            function eU(e) {
                return eD[e] + "-untilAtLeast"
            }

            function eF(e, t, n) {
                var l, a, s;
                if (null == e) return;
                let i = eD[e];
                if (null != i && !t && u.default.set(i, !0), ey.has(e) && (ev[e] = !0), null != n && null != i) {
                    ;
                    l = e, a = n, u.default.set(eU(l), a.format("YYYY-MM-DDTHH:mm:ss.SSSZ"))
                } else {
                    ;
                    s = e, u.default.remove(eU(s))
                }
            }

            function ex(e) {
                if (null == e) return !1;
                let t = function(e) {
                    let {
                        enabled: t
                    } = P.PremiumTier2TrialOfferNoticeExperiment.getCurrentConfig({
                        location: "NoticeStore_isNoticeDismissed"
                    }, {
                        autoTrackExposure: !0,
                        disable: e !== em.NoticeTypes.PREMIUM_TIER_2_TRIAL_ENDING
                    });
                    return t ? null : eM[e]
                }(e);
                if (null != t) return (0, _.isDismissibleContentDismissed)(t);
                let n = eD[e];
                if (null != n) {
                    let t = function(e) {
                        let t = u.default.get(eU(e));
                        return null != t ? s(t) : null
                    }(e);
                    if (null != t) return null == t ? void 0 : t.isAfter(s())
                }
                let l = ev[e];
                return !!l || (null != n && "" !== n ? u.default.get(n) : !!ey.has(e) && l)
            }
            let eb = [em.NoticeTypes.QUARANTINED, em.NoticeTypes.AUTOMOD_QUARANTINED_USER_PROFILE, em.NoticeTypes.VIEWING_ROLES, em.NoticeTypes.INVITED_TO_SPEAK, em.NoticeTypes.LURKING_GUILD, em.NoticeTypes.VOICE_DISABLED, em.NoticeTypes.NO_INPUT_DETECTED, em.NoticeTypes.HARDWARE_MUTE, em.NoticeTypes.H264_DISABLED, em.NoticeTypes.DISPATCH_ERROR, em.NoticeTypes.DISPATCH_INSTALL_SCRIPT_PROGRESS, em.NoticeTypes.SPOTIFY_AUTO_PAUSED, em.NoticeTypes.DROPS_PROGRESS_INTERRUPTION, em.NoticeTypes.WIN32_DEPRECATED_MESSAGE, em.NoticeTypes.BLOCKED_BY_PROXY, em.NoticeTypes.AUTO_MODERATION_MENTION_RAID_DETECTION, em.NoticeTypes.GUILD_RAID_NOTIFICATION, em.NoticeTypes.UNCLAIMED_ACCOUNT, em.NoticeTypes.POMELO_ELIGIBLE, em.NoticeTypes.PENDING_MEMBER, em.NoticeTypes.OUTBOUND_PROMOTION, em.NoticeTypes.CORRUPT_INSTALLATION, em.NoticeTypes.VIDEO_UNSUPPORTED_BROWSER, em.NoticeTypes.DETECTED_OFF_PLATFORM_PREMIUM_PERK, em.NoticeTypes.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL, em.NoticeTypes.STREAMER_MODE, em.NoticeTypes.SCHEDULED_MAINTENANCE, em.NoticeTypes.BOUNCED_EMAIL_DETECTED, em.NoticeTypes.UNVERIFIED_ACCOUNT, em.NoticeTypes.PREMIUM_TIER_2_TRIAL_ENDING, em.NoticeTypes.PREMIUM_TIER_0_TRIAL_ENDING, em.NoticeTypes.PREMIUM_UNCANCEL, em.NoticeTypes.PREMIUM_MISSING_PAYMENT, em.NoticeTypes.PREMIUM_PAST_DUE_INVALID_PAYMENT, em.NoticeTypes.PREMIUM_PAST_DUE_MISSING_PAYMENT, em.NoticeTypes.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT, em.NoticeTypes.PREMIUM_REACTIVATE, em.NoticeTypes.ACTIVATE_SERVER_SUBSCRIPTION, em.NoticeTypes.MFA_SMS_BACKUP, em.NoticeTypes.APPLICATION_TEST_MODE, em.NoticeTypes.LOCALIZED_PRICING, em.NoticeTypes.DOWNLOAD_NAG, em.NoticeTypes.CONNECT_SPOTIFY, em.NoticeTypes.CONNECT_PLAYSTATION, em.NoticeTypes.SURVEY, em.NoticeTypes.SERVER_USAGE_SURVEY, em.NoticeTypes.SAFETY_USER_SENTIMENT_NAGBAR, em.NoticeTypes.DROPS_GO_LIVE_BANNER, em.NoticeTypes.DROPS_ENDED_INCOMPLETE, em.NoticeTypes.GUILD_ONBOARDING_UPSELL_NAGBAR],
                eG = [em.NoticeTypes.QUARANTINED, em.NoticeTypes.AUTOMOD_QUARANTINED_USER_PROFILE, em.NoticeTypes.VIEWING_ROLES, em.NoticeTypes.INVITED_TO_SPEAK, em.NoticeTypes.LURKING_GUILD, em.NoticeTypes.VOICE_DISABLED, em.NoticeTypes.NO_INPUT_DETECTED, em.NoticeTypes.HARDWARE_MUTE, em.NoticeTypes.H264_DISABLED, em.NoticeTypes.DISPATCH_ERROR, em.NoticeTypes.DISPATCH_INSTALL_SCRIPT_PROGRESS, em.NoticeTypes.SPOTIFY_AUTO_PAUSED, em.NoticeTypes.BLOCKED_BY_PROXY, em.NoticeTypes.PENDING_MEMBER, em.NoticeTypes.STREAMER_MODE, em.NoticeTypes.SCHEDULED_MAINTENANCE],
                ek = {
                    [em.NoticeTypes.GUILD_RAID_NOTIFICATION]: {
                        predicate: () => (0, m.shouldShowRaidNotificationNagbar)().show && !ex(em.NoticeTypes.GUILD_RAID_NOTIFICATION),
                        metadata: () => {
                            let e = {
                                dismissUntil: s().add(3, "hours").toDate()
                            };
                            return e
                        }
                    },
                    [em.NoticeTypes.AUTOMOD_QUARANTINED_USER_PROFILE]: {
                        predicate: e => {
                            let {
                                currentUser: t,
                                selectedGuildId: n
                            } = e;
                            if (null == n) return !1;
                            let l = z.default.getMember(n, t.id);
                            return null != l && !l.isPending && (0, g.hasAutomodQuarantinedProfile)(l)
                        }
                    },
                    [em.NoticeTypes.QUARANTINED]: {
                        predicate: e => {
                            let {
                                currentUser: t
                            } = e;
                            return t.hasFlag(em.UserFlags.QUARANTINED)
                        }
                    },
                    [em.NoticeTypes.VIEWING_ROLES]: {
                        predicate: e => {
                            let {
                                selectedGuildId: t
                            } = e;
                            return M.default.isViewingRoles(t)
                        }
                    },
                    [em.NoticeTypes.INVITED_TO_SPEAK]: {
                        predicate: e => {
                            let {
                                voiceState: t
                            } = e;
                            return (0, j.getAudienceRequestToSpeakState)(t) === j.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK
                        }
                    },
                    [em.NoticeTypes.LURKING_GUILD]: {
                        predicate: e => {
                            let {
                                selectedGuildId: t
                            } = e;
                            return null != t && D.default.isLurking(t)
                        }
                    },
                    [em.NoticeTypes.VOICE_DISABLED]: {
                        predicate: () => null != ee.default.getRemoteDisconnectVoiceChannelId()
                    },
                    [em.NoticeTypes.NO_INPUT_DETECTED]: {
                        predicate: e => {
                            let {
                                voiceChannelId: t,
                                voiceState: n
                            } = e, l = V.default.getChannel(t), a = (null == l ? void 0 : l.isGuildStageVoice()) && (null == n ? void 0 : n.suppress);
                            return !1 === X.default.getInputDetected() && !a
                        }
                    },
                    [em.NoticeTypes.H264_DISABLED]: {
                        predicate: e => {
                            let {
                                voiceChannelId: t
                            } = e, n = V.default.getChannel(t);
                            return !X.default.getOpenH264() && null != t && eu.default.hasVideo(t) && null != n && n.isGuildStageVoice()
                        }
                    },
                    [em.NoticeTypes.HARDWARE_MUTE]: {
                        predicate: () => ee.default.isConnected() && X.default.isHardwareMute(),
                        metadata: () => {
                            let e = X.default.getInputDeviceId(),
                                t = Y.default.getVendor(e),
                                n = Y.default.getModel(e);
                            if (null != t && null != n) return {
                                vendor: t,
                                model: n
                            }
                        }
                    },
                    [em.NoticeTypes.DISPATCH_ERROR]: {
                        predicate: () => null != ep.default.getLastError(),
                        metadata: () => ({
                            error: ep.default.getLastError()
                        })
                    },
                    [em.NoticeTypes.DISPATCH_INSTALL_SCRIPT_PROGRESS]: {
                        predicate: () => null != eN.default.getLastProgress(),
                        metadata: () => eN.default.getLastProgress()
                    },
                    [em.NoticeTypes.SPOTIFY_AUTO_PAUSED]: {
                        predicate: () => k.default.wasAutoPaused()
                    },
                    [em.NoticeTypes.BLOCKED_BY_PROXY]: {
                        predicate: () => !ex(em.NoticeTypes.BLOCKED_BY_PROXY) && b.default.blockedByProxy && x.default.getCurrentConfig({
                            location: "notice_store"
                        }).eligibleForNotice
                    },
                    [em.NoticeTypes.UNCLAIMED_ACCOUNT]: {
                        predicate: e => {
                            let {
                                currentUser: t
                            } = e;
                            return null != t && !t.isClaimed()
                        }
                    },
                    [em.NoticeTypes.PENDING_MEMBER]: {
                        predicate: e => {
                            var t, n;
                            let {
                                selectedGuildId: a,
                                currentUser: s
                            } = e;
                            return null !== (l = null != a && null != s && !(null === (t = q.default.getGuild(a)) || void 0 === t ? void 0 : t.hasFeature(em.GuildFeatures.GUILD_ONBOARDING)) && (null === (n = z.default.getMember(a, s.id)) || void 0 === n ? void 0 : n.isPending)) && void 0 !== l && l
                        }
                    },
                    [em.NoticeTypes.OUTBOUND_PROMOTION]: {
                        predicate: () => (0, U.shouldShowOutboundPromotionNotice)()
                    },
                    [em.NoticeTypes.CORRUPT_INSTALLATION]: {
                        predicate: () => eh.isPlatformEmbedded && (!r.default.supported() || eI.default.isCorruptInstallation())
                    },
                    [em.NoticeTypes.VIDEO_UNSUPPORTED_BROWSER]: {
                        predicate: e => {
                            let {
                                voiceChannelId: t
                            } = e;
                            return null != t && eu.default.hasVideo(t) && !X.default.supports(eO.Features.VIDEO) && !ex(em.NoticeTypes.VIDEO_UNSUPPORTED_BROWSER)
                        }
                    },
                    [em.NoticeTypes.DETECTED_OFF_PLATFORM_PREMIUM_PERK]: {
                        predicate: e => {
                            let {
                                currentUser: t
                            } = e;
                            return eT.default.canRedeemPremiumPerks(t) && Q.default.getDetectedOffPlatformPremiumPerks().length > 0
                        },
                        metadata: () => {
                            let e = Q.default.getDetectedOffPlatformPremiumPerks();
                            return e[0]
                        }
                    },
                    [em.NoticeTypes.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: {
                        predicate: () => !ex(em.NoticeTypes.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL) && Q.default.getDetectedOffPlatformPremiumPerks().length > 0,
                        metadata: () => {
                            let e = Q.default.getDetectedOffPlatformPremiumPerks();
                            return e[0]
                        }
                    },
                    [em.NoticeTypes.STREAMER_MODE]: {
                        predicate: () => es.default.enabled
                    },
                    [em.NoticeTypes.DOWNLOAD_NAG]: {
                        predicate: () => !eh.isPlatformEmbedded && !ex(em.NoticeTypes.DOWNLOAD_NAG)
                    },
                    [em.NoticeTypes.SCHEDULED_MAINTENANCE]: {
                        predicate: () => null != ea.default.getScheduledMaintenance(),
                        metadata: () => {
                            let e = ea.default.getScheduledMaintenance();
                            if (null != e) return {
                                id: e.id,
                                start: new Date(e.scheduled_for),
                                end: new Date(e.scheduled_until)
                            }
                        }
                    },
                    [em.NoticeTypes.SURVEY]: {
                        predicate: () => null != ei.default.getCurrentSurvey(),
                        metadata: () => ei.default.getCurrentSurvey()
                    },
                    [em.NoticeTypes.SERVER_USAGE_SURVEY]: {
                        predicate: e => {
                            let {
                                selectedGuildId: t
                            } = e;
                            return null != t && I.default.getCurrentConfig({
                                location: "notice_store"
                            }).showSurvey && !ex(em.NoticeTypes.SERVER_USAGE_SURVEY)
                        },
                        metadata: e => {
                            let {
                                selectedGuildId: t,
                                currentUser: n
                            } = e;
                            return {
                                selectedGuildId: t,
                                currentUser: n
                            }
                        }
                    },
                    [em.NoticeTypes.UNVERIFIED_ACCOUNT]: {
                        predicate: e => {
                            let {
                                currentUser: t
                            } = e;
                            return (null == t ? void 0 : t.email) != null && !t.verified
                        }
                    },
                    [em.NoticeTypes.BOUNCED_EMAIL_DETECTED]: {
                        predicate: e => {
                            let {
                                currentUser: t
                            } = e;
                            return null == t ? void 0 : t.hasBouncedEmail
                        }
                    },
                    [em.NoticeTypes.CONNECT_SPOTIFY]: {
                        predicate: () => !k.default.hasConnectedAccount() && et.default.isObservedAppRunning(f.default.get(em.PlatformTypes.SPOTIFY).name) && !ex(em.NoticeTypes.CONNECT_SPOTIFY)
                    },
                    [em.NoticeTypes.WIN32_DEPRECATED_MESSAGE]: {
                        predicate: () => {
                            var e, t;
                            let {
                                enabled: n
                            } = L.default.getCurrentConfig({
                                location: "window32_deprecation_message"
                            });
                            return n && (null === (e = c.default) || void 0 === e ? void 0 : e.os.arch) === "ia32" && (null === (t = c.default) || void 0 === t ? void 0 : t.process.platform) === "win32"
                        },
                        metadata: () => {
                            let e = {
                                dismissUntil: s().add(5, "days").toDate()
                            };
                            return e
                        }
                    },
                    [em.NoticeTypes.CONNECT_PLAYSTATION]: {
                        predicate: () => K.default.isSuggestedAccountType(em.PlatformTypes.PLAYSTATION) && null == K.default.getAccount(null, em.PlatformTypes.PLAYSTATION) && !ex(em.NoticeTypes.CONNECT_PLAYSTATION)
                    },
                    [em.NoticeTypes.PREMIUM_TIER_2_TRIAL_ENDING]: {
                        predicate: () => {
                            let e = eE.default.getAlmostExpiringTrialOffers([eR.PremiumSubscriptionSKUs.TIER_2]);
                            return e.length > 0 && !ex(em.NoticeTypes.PREMIUM_TIER_2_TRIAL_ENDING)
                        }
                    },
                    [em.NoticeTypes.PREMIUM_TIER_0_TRIAL_ENDING]: {
                        predicate: () => {
                            let e = eE.default.getAlmostExpiringTrialOffers([eR.PremiumSubscriptionSKUs.TIER_0]);
                            return e.length > 0 && !ex(em.NoticeTypes.PREMIUM_TIER_0_TRIAL_ENDING)
                        }
                    },
                    [em.NoticeTypes.PREMIUM_UNCANCEL]: {
                        predicate: e => {
                            let {
                                premiumSubscription: t,
                                currentUser: n
                            } = e, l = null != t ? s(t.currentPeriodEnd).diff(s().startOf("day"), "days") : 0, a = (null == t ? void 0 : t.canceledAt) != null && (null == t ? void 0 : t.status) === em.SubscriptionStatusTypes.CANCELED && 1 >= s().diff(s(t.canceledAt), "days"), i = null != t && s(t.currentPeriodEnd).isBefore(s()), r = null != t && t.status === em.SubscriptionStatusTypes.CANCELED && !i && l <= 7 && l >= 0 && (0, eT.isPremiumExactly)(n, eR.PremiumTypes.TIER_2) && !a && !n.hasFreePremium() && !t.isPurchasedExternally;
                            return !ex(em.NoticeTypes.PREMIUM_UNCANCEL) && r
                        },
                        metadata: e => {
                            var t;
                            let {
                                premiumSubscription: n
                            } = e, l = null != n ? s(n.currentPeriodEnd).diff(s().startOf("day"), "days") : 0, a = null != n ? null === (t = (0, eT.getPremiumPlanItem)(n)) || void 0 === t ? void 0 : t.planId : null, i = null != a ? eT.default.getPremiumType(a) : null;
                            return {
                                daysLeft: l,
                                premiumType: i,
                                premiumSubscription: n
                            }
                        }
                    },
                    [em.NoticeTypes.PREMIUM_MISSING_PAYMENT]: {
                        predicate: e => {
                            let {
                                premiumSubscription: t,
                                currentUser: n
                            } = e, l = null != t ? s(t.currentPeriodEnd).diff(s().startOf("day"), "days") : 0, a = null != t ? s(t.currentPeriodEnd).diff(s(t.currentPeriodStart).startOf("day"), "days") : 0, i = null != t && s(t.currentPeriodEnd).isBefore(s()), r = eS.default.applicationIdsFetched.has(eR.PREMIUM_SUBSCRIPTION_APPLICATION), o = eS.default.getForApplication(eR.PREMIUM_SUBSCRIPTION_APPLICATION), u = null != t ? (0, eT.getPremiumPlanItem)(t) : null, d = null != u ? eT.default.getSkuIdForPlan(u.planId) : null, c = null != o && null != u && Array.from(o).filter(e => {
                                let {
                                    skuId: t,
                                    consumed: n
                                } = e;
                                return !n && t === d
                            }).length > 0, f = null != t && l <= (a > 14 ? 7 : 2) && l >= 0 && t.status !== em.SubscriptionStatusTypes.PAST_DUE && !i && r && !c && null === t.paymentSourceId && !n.hasFreePremium() && !t.isPurchasedExternally;
                            return !ex(em.NoticeTypes.PREMIUM_MISSING_PAYMENT) && f
                        },
                        metadata: e => {
                            var t;
                            let {
                                premiumSubscription: n
                            } = e, l = null != n ? s(n.currentPeriodEnd).diff(s().startOf("day"), "days") : 0, a = null != n ? null === (t = (0, eT.getPremiumPlanItem)(n)) || void 0 === t ? void 0 : t.planId : null, i = null != a ? eT.default.getPremiumType(a) : null;
                            return {
                                daysLeft: l,
                                premiumType: i,
                                premiumSubscription: n
                            }
                        }
                    },
                    [em.NoticeTypes.PREMIUM_PAST_DUE_INVALID_PAYMENT]: {
                        predicate: e => {
                            let {
                                premiumSubscription: t,
                                currentUser: n
                            } = e, l = null != t && null != t.paymentSourceId ? ec.default.getPaymentSource(t.paymentSourceId) : null, a = null != t && s(t.currentPeriodEnd).isBefore(s()), i = null != t && t.status === em.SubscriptionStatusTypes.PAST_DUE && !a && null != l && l.invalid && !n.hasFreePremium() && !t.isPurchasedExternally;
                            return !ex(em.NoticeTypes.PREMIUM_PAST_DUE_INVALID_PAYMENT) && i
                        },
                        metadata: e => {
                            let {
                                premiumSubscription: t
                            } = e;
                            return {
                                premiumSubscription: t
                            }
                        }
                    },
                    [em.NoticeTypes.PREMIUM_PAST_DUE_MISSING_PAYMENT]: {
                        predicate: e => {
                            let {
                                premiumSubscription: t,
                                currentUser: n
                            } = e, l = null != t && s(t.currentPeriodEnd).isBefore(s()), a = null != t && t.status === em.SubscriptionStatusTypes.PAST_DUE && !l && null === t.paymentSourceId && !n.hasFreePremium() && !t.isPurchasedExternally;
                            return !ex(em.NoticeTypes.PREMIUM_PAST_DUE_MISSING_PAYMENT) && a
                        },
                        metadata: e => {
                            let {
                                premiumSubscription: t
                            } = e;
                            return {
                                premiumSubscription: t
                            }
                        }
                    },
                    [em.NoticeTypes.MFA_SMS_BACKUP]: {
                        predicate: e => {
                            let {
                                currentUser: t
                            } = e;
                            return null != t && t.mfaEnabled && !t.hasFlag(em.UserFlags.MFA_SMS) && !t.hasFlag(em.UserFlags.STAFF) && !t.hasFlag(em.UserFlags.PARTNER) && !ex(em.NoticeTypes.MFA_SMS_BACKUP)
                        }
                    },
                    [em.NoticeTypes.APPLICATION_TEST_MODE]: {
                        predicate: () => null != e_.default.testModeApplicationId,
                        metadata: () => {
                            if (null == e_.default.testModeApplicationId) return {};
                            let e = e_.default.testModeApplicationId,
                                t = W.default.getGame(e),
                                n = null != t ? t.name : e;
                            return {
                                applicationName: n,
                                applicationId: e
                            }
                        }
                    },
                    [em.NoticeTypes.PREMIUM_REACTIVATE]: {
                        predicate: () => !ex(em.NoticeTypes.PREMIUM_REACTIVATE) && v.default.shouldShowReactivateNotice()
                    },
                    [em.NoticeTypes.LOCALIZED_PRICING]: {
                        predicate: e => {
                            let {
                                isLocalizedPromoEnabled: t
                            } = e;
                            return !ex(em.NoticeTypes.LOCALIZED_PRICING) && t
                        },
                        metadata: e => {
                            let {
                                premiumSubscription: t
                            } = e;
                            return {
                                premiumSubscription: t
                            }
                        }
                    },
                    [em.NoticeTypes.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: {
                        predicate: e => {
                            let {
                                premiumSubscription: t,
                                currentUser: n
                            } = e, l = null != t && s(t.currentPeriodEnd).isBefore(s()), a = null != t && null != t.paymentSourceId ? ec.default.getPaymentSource(t.paymentSourceId) : null, i = null != a && eC.PREPAID_PAYMENT_SOURCES.has(a.type), r = null != t && t.status === em.SubscriptionStatusTypes.PAST_DUE && !l && i && !n.hasFreePremium() && !t.isPurchasedExternally;
                            return !ex(em.NoticeTypes.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT) && r
                        },
                        metadata: e => {
                            let {
                                premiumSubscription: t
                            } = e, n = (null == t ? void 0 : t.status) === em.SubscriptionStatusTypes.PAST_DUE ? s().diff(s(t.currentPeriodStart), "days") : 0, l = s(null == t ? void 0 : t.currentPeriodStart).add((0, eT.getBillingGracePeriodDays)(t), "days").toDate();
                            return {
                                daysPastDue: n,
                                dismissUntil: l
                            }
                        }
                    },
                    [em.NoticeTypes.DROPS_GO_LIVE_BANNER]: {
                        predicate: () => !ex(em.NoticeTypes.DROPS_GO_LIVE_BANNER) && (0, _.isDismissibleContentDismissed)(o.DismissibleContent.QUEST_2_ENROLLMENT_TOOLTIP) && !(0, _.isDismissibleContentDismissed)(o.DismissibleContent.QUEST_2_COMPLETION_TOOLTIP) && (0, T.getShowDropsNoticeBanner)(eg.PartnerGame.FORTNITE),
                        metadata: () => ({
                            partnerGame: eg.PartnerGame.FORTNITE
                        })
                    },
                    [em.NoticeTypes.DROPS_PROGRESS_INTERRUPTION]: {
                        predicate: () => h.default.isCurrentQuestInterrupted && null != h.default.currentDropQuestGameTitle,
                        metadata: () => ({
                            gameTitle: h.default.currentDropQuestGameTitle,
                            reloadCallback: () => window.location.reload(!0)
                        })
                    },
                    [em.NoticeTypes.POMELO_ELIGIBLE]: {
                        predicate: () => (0, y.isEligibleForPomelo)() && !ex(em.NoticeTypes.POMELO_ELIGIBLE)
                    },
                    [em.NoticeTypes.DROPS_ENDED_INCOMPLETE]: {
                        predicate: () => !ex(em.NoticeTypes.DROPS_ENDED_INCOMPLETE) && (0, _.isDismissibleContentDismissed)(o.DismissibleContent.QUEST_2_ENROLLMENT_TOOLTIP) && !(0, _.isDismissibleContentDismissed)(o.DismissibleContent.QUEST_2_COMPLETION_TOOLTIP) && (0, T.getShowDropsEndedIncompleteBanner)(eg.PartnerGame.FORTNITE),
                        metadata: () => ({
                            partnerGame: eg.PartnerGame.FORTNITE
                        })
                    },
                    [em.NoticeTypes.AUTO_MODERATION_MENTION_RAID_DETECTION]: {
                        predicate: e => {
                            let {
                                selectedGuildId: t
                            } = e;
                            return null != t && null != C.default.getMentionRaidDetected(t) && (0, R.isInMentionRaidNoticeExperiment)(t) && !ex(em.NoticeTypes.AUTO_MODERATION_MENTION_RAID_DETECTION)
                        },
                        metadata: e => {
                            let {
                                selectedGuildId: t
                            } = e, n = {
                                dismissUntil: s().add(2, "hours").toDate()
                            };
                            if (null != t) {
                                let e = C.default.getMentionRaidDetected(t);
                                null != e && (n.decisionId = e.decisionId)
                            }
                            return n
                        }
                    },
                    [em.NoticeTypes.ACTIVATE_SERVER_SUBSCRIPTION]: {
                        predicate: () => !ex(em.NoticeTypes.ACTIVATE_SERVER_SUBSCRIPTION) && 0 !== S.default.getEligibleGuildsForNagActivate().length && (0, E.isCreatorMonetizationNagActivateEnabled)()
                    },
                    [em.NoticeTypes.GUILD_ONBOARDING_UPSELL_NAGBAR]: {
                        predicate: e => {
                            let {
                                selectedGuildId: t
                            } = e;
                            return !ex(em.NoticeTypes.GUILD_ONBOARDING_UPSELL_NAGBAR) && null != t && (0, O.shouldShowGuildOnboardingUpsell)(t, o.DismissibleContent.GUILD_ONBOARDING_UPSELL_NAGBAR)
                        }
                    },
                    [em.NoticeTypes.SAFETY_USER_SENTIMENT_NAGBAR]: {
                        predicate: e => {
                            let {
                                currentUser: t
                            } = e;
                            return G.isEligibleForNotice(t)
                        }
                    }
                };

            function ej() {
                if (!N.default.isConnected()) return !1;
                eL = null;
                let e = eo.default.getCurrentUser();
                if (null == e) return !1;
                let t = ef.default.getPremiumSubscription(),
                    n = ed.default.isLocalizedPromoEnabled,
                    l = el.default.getGuildId(),
                    a = en.default.getVoiceChannelId(),
                    s = null != a ? eu.default.getVoiceStateForChannel(a) : null,
                    i = eA.CONFERENCE_MODE_ENABLED ? eG : eb;
                for (let u of i)
                    if (null != ek[u] && ek[u].predicate({
                            selectedGuildId: l,
                            voiceChannelId: a,
                            voiceState: s,
                            currentUser: e,
                            premiumSubscription: t,
                            isLocalizedPromoEnabled: n
                        })) {
                        var r, o;
                        let n = null === (r = (o = ek[u]).metadata) || void 0 === r ? void 0 : r.call(o, {
                            currentUser: e,
                            premiumSubscription: t,
                            selectedGuildId: l
                        });
                        eL = {
                            ...eP,
                            type: u,
                            metadata: n
                        };
                        break
                    } null != eL && ex(eL.type) && (eL = null)
            }

            function eB() {
                return !es.default.enabled && delete ev[em.NoticeTypes.STREAMER_MODE], ej()
            }
            class ew extends i.default.Store {
                initialize() {
                    this.syncWith([ei.default, $.default, Q.default, el.default, F.default, eE.default, H.default, K.default, B.default, A.default], ej), this.waitFor(eo.default, ea.default, q.default, z.default, ee.default, X.default, es.default, p.default, el.default, er.default, k.default, et.default, $.default, ep.default, eN.default, e_.default, J.default, ef.default, eI.default, Q.default, ec.default, Z.default, F.default, eS.default, eE.default, K.default, D.default, h.default, S.default, b.default)
                }
                hasNotice() {
                    return null != eL && null != eL.type
                }
                getNotice() {
                    return null == er.default.getAction() ? eL : null
                }
                isNoticeDismissed(e) {
                    return ex(e)
                }
            }
            ew.displayName = "NoticeStore";
            var eH = new ew(d.default, {
                CURRENT_USER_UPDATE: ej,
                MEDIA_ENGINE_SET_AUDIO_ENABLED: ej,
                CLEAR_REMOTE_DISCONNECT_VOICE_CHANNEL_ID: ej,
                STATUS_PAGE_SCHEDULED_MAINTENANCE: ej,
                STATUS_PAGE_SCHEDULED_MAINTENANCE_ACK: ej,
                GUILD_CREATE: ej,
                GUILD_DELETE: ej,
                AUDIO_INPUT_DETECTED: ej,
                AUDIO_SET_DISPLAY_SILENCE_WARNING: ej,
                CERTIFIED_DEVICES_SET: ej,
                AUDIO_SET_INPUT_DEVICE: ej,
                AUDIO_SET_OUTPUT_DEVICE: ej,
                MEDIA_ENGINE_DEVICES: ej,
                RTC_CONNECTION_STATE: ej,
                RPC_APP_AUTHENTICATED: ej,
                RPC_APP_DISCONNECTED: ej,
                USER_CONNECTIONS_UPDATE: ej,
                WINDOW_FOCUS: ej,
                INSTANT_INVITE_CREATE: ej,
                INSTANT_INVITE_REVOKE_SUCCESS: ej,
                SPOTIFY_PLAYER_PAUSE: ej,
                RUNNING_GAMES_CHANGE: ej,
                EXPERIMENTS_FETCH_SUCCESS: ej,
                PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: ej,
                DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS: ej,
                DEVELOPER_TEST_MODE_AUTHORIZATION_FAIL: ej,
                DEVELOPER_TEST_MODE_RESET: ej,
                BILLING_SUBSCRIPTION_FETCH_SUCCESS: ej,
                DISPATCH_APPLICATION_INSTALL: ej,
                IMPERSONATE_STOP: ej,
                IMPERSONATE_UPDATE: ej,
                GUILD_MEMBER_ADD: function(e) {
                    return e.user.id === w.default.getId() && ej()
                },
                GUILD_MEMBER_UPDATE: ej,
                SURVEY_FETCHED: ej,
                ENTITLEMENT_FETCH_APPLICATION_SUCCESS: ej,
                BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: ej,
                BILLING_SUBSCRIPTION_UPDATE_SUCCESS: ej,
                BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: ej,
                VOICE_STATE_UPDATES: function(e) {
                    let {
                        voiceStates: t
                    } = e;
                    return t.some(e => {
                        let {
                            userId: t
                        } = e;
                        return t !== w.default.getId()
                    }) && ej()
                },
                STREAMER_MODE_UPDATE: eB,
                RUNNING_STREAMER_TOOLS_CHANGE: eB,
                DISPATCH_APPLICATION_ERROR: function() {
                    return delete ev[em.NoticeTypes.DISPATCH_ERROR], ej()
                },
                DISPATCH_APPLICATION_LAUNCH_SETUP_START: function() {
                    return delete ev[em.NoticeTypes.DISPATCH_INSTALL_SCRIPT_PROGRESS], ej()
                },
                DISPATCH_APPLICATION_INSTALL_SCRIPTS_PROGRESS_UPDATE: function() {
                    return ej()
                },
                DISPATCH_APPLICATION_LAUNCH_SETUP_COMPLETE: function() {
                    return ej()
                },
                NOTICE_SHOW: function(e) {
                    eL = e.notice
                },
                NOTICE_DISMISS: function(e) {
                    return null != eL && (null == e.id || e.id === eL.id) && (eF(eL.type, e.isTemporary, e.untilAtLeast), ej())
                },
                NOTICE_DISABLE: function(e) {
                    let {
                        noticeType: t
                    } = e;
                    return eF(t), ej()
                },
                LOGOUT: function() {
                    ev = {}, eL = null
                },
                SUBSCRIPTION_PLANS_FETCH_SUCCESS: ej,
                AUTO_MODERATION_MENTION_RAID_DETECTION: ej,
                CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY_FETCH_SUCCESS: ej,
                PROXY_BLOCKED_REQUEST: ej
            })
        },
        868308: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                quitAndInstall: function() {
                    return s
                }
            });
            var l = n("976789");
            let a = new l.default;

            function s() {
                a.quitAndInstall()
            }
        },
        313483: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                generateDecorators: function() {
                    return r
                },
                getSelectionScope: function() {
                    return o
                }
            });
            var l = n("954172");
            n("76385");
            var a = n("955513");
            n("202752");
            var s = n("751520");
            n("49111");
            let i = {
                [a.ComponentTypes.FILTER]: l.Filter,
                [a.ComponentTypes.ANSWER]: l.Answer
            };

            function r() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = [];
                return Object.keys(e).forEach(n => {
                    let l = e[n];
                    t.push({
                        strategy: (e, t, l) => (function(e, t, n, l) {
                            t.findEntityRanges(t => {
                                let n = t.getEntity();
                                return null !== n && e.getEntity(n).getType() === l
                            }, n)
                        })(l, e, t, n),
                        component: i[l.componentType]
                    })
                }), t
            }

            function o(e, t) {
                let {
                    focusOffset: n,
                    anchorOffset: l
                } = t.getSelection();
                return (0, s.getSelectionScope)(e, n, l)
            }
        }
    }
]);