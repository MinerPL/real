            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
                }
            }), n("222007");
            var a = n("37983"),
                l = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("917351"),
                u = n("65597"),
                o = n("891722"),
                d = n("77078"),
                c = n("419135"),
                f = n("574933"),
                h = n("692038"),
                p = n("95045"),
                m = n("535260"),
                E = n("982108"),
                C = n("26989"),
                g = n("697218"),
                S = n("994906"),
                _ = n("180968"),
                I = n("789150"),
                T = n("782340"),
                v = n("953035");

            function x(e) {
                let {
                    onNavigate: t
                } = e;
                return (0, a.jsxs)("div", {
                    className: i(v.header),
                    children: [(0, a.jsx)("div", {
                        className: i(v.headerTitle),
                        children: (0, a.jsxs)(d.Clickable, {
                            className: i(v.backButton),
                            onClick: () => null == t ? void 0 : t(I.ModViewPanel.INFO),
                            children: [(0, a.jsx)(o.ArrowSmallLeftIcon, {
                                className: i(v.backButtonIcon),
                                width: 20,
                                height: 20
                            }), (0, a.jsx)(d.Heading, {
                                variant: "heading-md/semibold",
                                children: T.default.Messages.BACK
                            })]
                        })
                    }), (0, a.jsx)("div", {
                        className: i(v.options),
                        children: (0, a.jsx)(d.KeyCombo, {
                            shortcut: "esc",
                            keyClassName: v.keyComboInner,
                            className: v.keyComboContainer
                        })
                    })]
                })
            }

            function N(e) {
                var t, n;
                let {
                    userId: s,
                    guildId: o,
                    location: T,
                    className: N,
                    onNavigate: A
                } = e, M = l.useRef(null), R = (0, u.default)([E.default], () => E.default.getGuildSidebarState(o), [o]), j = l.useRef(0), [L, O] = l.useState(null !== (t = null == R ? void 0 : R.details.additionalSearchQuery) && void 0 !== t ? t : {}), {
                    messageHistoryState: y
                } = (0, _.useServerActivityForUser)(s, o, L), b = (0, u.default)([g.default], () => g.default.getUser(s), [s]), P = (0, u.default)([C.default], () => C.default.getMember(o, s), [o, s]);
                l.useLayoutEffect(() => {
                    let e = null == R ? void 0 : R.details.scrollOffset;
                    if (null != e) {
                        var t;
                        null === (t = M.current) || void 0 === t || t.scrollTo({
                            to: e,
                            animate: !1
                        })
                    }
                }, []);
                let D = l.useCallback(e => {
                        if (null == R) return;
                        let t = e.target.scrollTop;
                        j.current = t, (0, S.openGuildMemberModViewSidebar)(o, s, R.baseChannelId, {
                            modViewPanel: I.ModViewPanel.MESSAGE_HISTORY,
                            additionalSearchQuery: L,
                            scrollOffset: j.current
                        })
                    }, [o, s, R, L]),
                    U = (0, r.throttle)(D, 300),
                    w = l.useCallback(e => {
                        if (null == R) return;
                        let t = {
                            ...L,
                            offset: 25 * e
                        };
                        O(t), (0, S.openGuildMemberModViewSidebar)(o, s, R.baseChannelId, {
                            modViewPanel: I.ModViewPanel.MESSAGE_HISTORY,
                            additionalSearchQuery: t,
                            scrollOffset: j.current
                        })
                    }, [o, s, R, L]),
                    F = null !== (n = null == L ? void 0 : L.offset) && void 0 !== n ? n : 0,
                    k = (0, u.default)([f.default], () => {
                        if (null == y.result) return [];
                        let e = y.result.messages,
                            t = (0, c.createASTHighlighter)("");
                        return e.map(e => e.map(e => {
                            let n = f.default.getMessage(e.id, e.channel_id),
                                a = (0, h.createMessageRecord)(e);
                            return null != n && (a = a.merge({
                                attachments: n.attachments,
                                embeds: n.embeds
                            })), a.isSearchHit ? a.set("customRenderedContent", (0, p.default)(a, {
                                postProcessor: t,
                                allowHeading: !0,
                                allowList: !0
                            })) : a
                        }))
                    }, [y.result]),
                    V = l.useMemo(() => {
                        var e, t, n, a;
                        return null == y.result ? {
                            documentsIndexed: 0,
                            isSearching: !0,
                            isIndexing: !1,
                            isHistoricalIndexing: !1,
                            offset: F,
                            totalResults: 0,
                            hasError: !1,
                            showBlockedResults: !1,
                            showNoResultsAlt: !1
                        } : {
                            documentsIndexed: null !== (e = y.result.documents_indexed) && void 0 !== e ? e : 0,
                            isSearching: !1,
                            isIndexing: null !== (t = y.result.doing_deep_historical_index) && void 0 !== t && t,
                            isHistoricalIndexing: null !== (n = y.result.doing_deep_historical_index) && void 0 !== n && n,
                            offset: F,
                            totalResults: null !== (a = y.result.total_results) && void 0 !== a ? a : 0,
                            hasError: !1,
                            showBlockedResults: !1,
                            showNoResultsAlt: !1
                        }
                    }, [y.result, F]);
                return null == b || null == P || null == V ? null : (0, a.jsxs)("div", {
                    className: i(v.container, N),
                    children: [(0, a.jsx)(x, {
                        onNavigate: A
                    }), (0, a.jsx)(d.AdvancedScroller, {
                        className: i(v.innerContainer),
                        ref: M,
                        onScroll: U,
                        children: (0, a.jsx)(m.default, {
                            searchResults: k,
                            search: V,
                            searchId: s,
                            renderEmbeds: !0,
                            blockCount: 0,
                            scrollTo: () => {},
                            onChangePage: w
                        })
                    })]
                })
            }