            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return y
                }
            }), n("808653"), n("424973"), n("222007");
            var a = n("37983"),
                l = n("884691"),
                s = n("880317"),
                i = n("77078"),
                r = n("404118"),
                o = n("819689"),
                u = n("378438"),
                d = n("419135"),
                c = n("206230"),
                f = n("679653"),
                h = n("619335"),
                p = n("70845"),
                m = n("95045"),
                E = n("393414"),
                C = n("144491"),
                g = n("845579"),
                S = n("42203"),
                _ = n("957255"),
                I = n("27618"),
                T = n("744983"),
                v = n("18494"),
                x = n("697218"),
                N = n("505684"),
                A = n("593195"),
                M = n("420861"),
                R = n("18061"),
                j = n("49111"),
                L = n("782340"),
                O = n("211631");

            function y(e) {
                var t;
                let {
                    search: n,
                    searchId: f,
                    renderEmbeds: h,
                    scrollTo: p,
                    searchResults: m,
                    blockCount: C,
                    onChangePage: g
                } = e, {
                    offset: _,
                    totalResults: v,
                    isSearching: x,
                    showBlockedResults: N
                } = n, A = l.useCallback(e => {
                    if (x) return;
                    let t = e - 1;
                    null == g || g(t), u.changePage(f, t)
                }, [f, x, g]), R = l.useCallback(e => {
                    if (e.blocked) r.default.show({
                        title: L.default.Messages.UNBLOCK_TO_JUMP_TITLE,
                        body: L.default.Messages.UNBLOCK_TO_JUMP_BODY.format({
                            name: e.author.username
                        }),
                        confirmText: L.default.Messages.OKAY
                    });
                    else {
                        let t = S.default.getChannel(e.channel_id),
                            n = null != t ? t.getGuildId() : null;
                        o.default.trackJump(e.channel_id, e.id, "Search Results", {
                            search_id: T.default.getAnalyticsId(f)
                        }), (0, E.transitionTo)(j.Routes.CHANNEL(n, e.channel_id, e.id))
                    }
                }, [f]), y = l.useMemo(() => {
                    let e;
                    if (null == m) return [];
                    let t = 0;
                    return m.reduce((n, a) => {
                        let l = a.find(e => e.isSearchHit);
                        if (!N && null != l && I.default.isBlocked(l.author.id)) return n;
                        let s = S.default.getChannel(a[0].channel_id);
                        return null == s ? n : ((null == e || e !== s.id) && n.push({
                            channel: s,
                            results: [],
                            startIndex: t
                        }), t += 1, n[n.length - 1].results.push(a), e = null == s ? void 0 : s.id, n)
                    }, [])
                }, [m, N]), P = l.useRef([]), D = y.reduce((e, t) => e + 1 + t.results.length, 0), U = l.useCallback((e, t) => {
                    if (!c.default.keyboardModeEnabled) return;
                    let n = P.current,
                        a = null != t ? n[t] : void 0;
                    if (null == a || null == a.hitRef.current) return;
                    let l = a.hitRef.current.getClientRects()[0],
                        s = l.top - .5 * l.height;
                    p(s, !1, () => {
                        var t;
                        null === (t = document.getElementById(e)) || void 0 === t || t.focus()
                    })
                }, [p]), w = l.useCallback(e => {
                    let t = P.current[e];
                    null == t || t.jumpTo()
                }, []), F = (0, s.useListNavigator)({
                    navId: "search-results",
                    itemCount: D,
                    focusedIndex: 0,
                    setFocus: U,
                    onSelect: w
                }), k = T.default.getQuery(f), V = (0, d.createASTHighlighter)(null !== (t = null == k ? void 0 : k.content) && void 0 !== t ? t : ""), B = y.map(e => {
                    let {
                        channel: t,
                        results: n,
                        startIndex: l
                    } = e;
                    return (0, a.jsx)(b, {
                        channel: t,
                        results: n,
                        highlighter: V,
                        startIndex: l,
                        resultRefs: P,
                        totalResults: v,
                        scrollTo: p,
                        searchId: f,
                        renderEmbeds: h,
                        offset: _,
                        jumpToMessage: R,
                        listNavigator: F
                    }, "".concat(t.id, "-").concat(l))
                });
                B.push();
                let H = l.useRef(null);
                l.useLayoutEffect(() => {
                    var e;
                    null === (e = H.current) || void 0 === e || e.focus()
                }, [m]);
                let G = (0, i.useFocusJumpSection)();
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)("div", {
                        ref: H,
                        ...F.getContainerProps(),
                        ...G,
                        "aria-busy": x,
                        children: B
                    }), C > 0 ? (0, a.jsxs)(i.Clickable, {
                        tag: "div",
                        className: O.resultsBlocked,
                        onClick: () => u.setShowBlockedResults(f, !N),
                        children: [(0, a.jsx)("div", {
                            className: O.resultsBlockedImage
                        }), (0, a.jsx)("div", {
                            className: O.resultsBlockedText,
                            children: N ? L.default.Messages.SEARCH_HIDE_BLOCKED_MESSAGES.format({
                                count: C
                            }) : L.default.Messages.SEARCH_NUM_RESULTS_BLOCKED_NOT_SHOWN.format({
                                count: C
                            })
                        })]
                    }) : null, !x && (0, a.jsx)(M.default, {
                        changePage: A,
                        offset: _,
                        totalResults: v,
                        pageLength: j.SEARCH_PAGE_SIZE
                    })]
                })
            }

            function b(e) {
                var t;
                let {
                    channel: n,
                    results: s,
                    highlighter: r,
                    startIndex: o,
                    resultRefs: u,
                    totalResults: d,
                    scrollTo: c,
                    searchId: E,
                    renderEmbeds: T,
                    offset: M,
                    jumpToMessage: L,
                    listNavigator: y
                } = e, b = g.RenderSpoilers.useSetting(), P = l.useCallback(e => {
                    if (e === v.default.getChannelId()) return;
                    let t = S.default.getChannel(e);
                    if (null != t) _.default.can(j.Permissions.VIEW_CHANNEL, t) && (0, C.transitionToChannel)(t.id)
                }, []), D = null != n ? (0, f.computeChannelName)(n, x.default, I.default, !1) : "???", U = (null == n ? void 0 : n.parent_id) != null ? S.default.getChannel(n.parent_id) : null, w = null != U ? U.name : null, F = null !== (t = (0, h.default)(n)) && void 0 !== t ? t : A.default, k = null != U ? (0, h.default)(U) : null, V = _.default.can(j.Permissions.MANAGE_MESSAGES, n), {
                    content: B
                } = (0, m.default)({
                    content: D,
                    embeds: []
                }, {
                    postProcessor: r
                }), H = l.useRef(null), [G, W] = l.useState(!1);
                return l.useEffect(() => {
                    let e = H.current;
                    null != e && null != e.offsetWidth && null != e.scrollWidth && W(e.offsetWidth < e.scrollWidth)
                }, []), (0, a.jsx)(N.ObscuredDisplayContext.Provider, {
                    value: (0, p.default)(b, V),
                    children: (0, a.jsxs)("ul", {
                        role: "group",
                        className: O.searchResultGroup,
                        "aria-label": null == w ? D : "".concat(D, ", ").concat(w),
                        children: [(0, a.jsx)(i.Clickable, {
                            onClick: () => P(n.id),
                            children: (0, a.jsxs)("div", {
                                className: O.channelNameContainer,
                                children: [(0, a.jsx)(F, {
                                    className: O.channelNameIcon,
                                    width: 16,
                                    height: 16
                                }), (0, a.jsx)(i.Tooltip, {
                                    text: D,
                                    shouldShow: G,
                                    children: e => (0, a.jsx)("span", {
                                        ...e,
                                        ref: H,
                                        className: O.channelNameText,
                                        children: B
                                    })
                                }), null != U && null != w && null != k ? (0, a.jsxs)(i.Clickable, {
                                    className: O.parentChannelNameClickable,
                                    onClick: e => {
                                        e.stopPropagation(), P(U.id)
                                    },
                                    children: [(0, a.jsx)(k, {
                                        className: O.parentChannelNameIcon,
                                        width: 12,
                                        height: 12
                                    }), (0, a.jsx)(i.Text, {
                                        className: O.parentChannelNameText,
                                        variant: "text-xs/medium",
                                        color: "header-secondary",
                                        children: w
                                    })]
                                }) : null]
                            })
                        }), s.map((e, t) => {
                            let n = o + t;
                            return (0, a.jsx)(R.default, {
                                ref: e => u.current[n] = e,
                                totalResults: d,
                                scrollTo: c,
                                searchId: E,
                                renderEmbeds: T,
                                searchOffset: M,
                                pageResultsLength: s.length,
                                result: e,
                                index: n,
                                onJump: L,
                                listItemProps: y.getItemProps({
                                    index: n
                                })
                            }, "search-result-".concat(n))
                        })]
                    })
                })
            }