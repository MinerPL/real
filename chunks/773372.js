            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return U
                }
            }), s("222007");
            var a = s("37983"),
                n = s("884691"),
                l = s("414456"),
                i = s.n(l),
                r = s("817736"),
                o = s.n(r),
                d = s("974667"),
                u = s("118810"),
                c = s("446674"),
                E = s("77078"),
                _ = s("642950"),
                T = s("206625"),
                I = s("84339"),
                S = s("510889"),
                N = s("287103"),
                g = s("900938"),
                f = s("161778"),
                A = s("305961"),
                L = s("102985"),
                m = s("941886"),
                C = s("309021"),
                O = s("203114"),
                h = s("423290"),
                R = s("782340"),
                D = s("808414"),
                M = s("241372");
            let G = s("170456"),
                x = s("90578");

            function p(e) {
                let {
                    logs: t,
                    guildId: s,
                    expandedId: l,
                    lastExpandedId: i,
                    scroller: r,
                    setExpandedRef: o,
                    setLastExpandedRef: u,
                    onHeaderClick: c,
                    onContentClick: E
                } = e, _ = n.useRef(r);
                n.useEffect(() => {
                    _.current = r
                }, [r]);
                let T = (0, S.default)("audit-log", _);
                return (0, a.jsx)(d.ListNavigatorProvider, {
                    navigator: T,
                    children: (0, a.jsx)(d.ListNavigatorContainer, {
                        children: e => {
                            let {
                                ref: n,
                                ...r
                            } = e;
                            return (0, a.jsx)("div", {
                                ref: n,
                                ...r,
                                className: D.listContainer,
                                children: null == t ? void 0 : t.map(e => {
                                    let t = l === e.id,
                                        n = i === e.id;
                                    return (0, a.jsx)(O.default, {
                                        guildId: s,
                                        ref: t ? o : n ? u : null,
                                        className: D.row,
                                        onHeaderClick: c,
                                        onContentClick: E,
                                        log: e,
                                        expanded: t
                                    }, e.id)
                                })
                            })
                        }
                    })
                })
            }

            function U() {
                let e, t;
                let {
                    guildId: s,
                    guild: l,
                    isInitialLoading: r,
                    isLoading: d,
                    isLoadingNextPage: S,
                    showLoadMore: O,
                    hasError: U,
                    hasOlderLogs: v,
                    rawLogs: j,
                    theme: P,
                    hide: y
                } = (0, c.useStateFromStoresObject)([g.default, A.default, N.default, L.default, f.default], () => {
                    let e = g.default.getGuildId(),
                        t = A.default.getGuild(e),
                        s = N.default.logs;
                    return {
                        guildId: e,
                        guild: t,
                        isInitialLoading: N.default.isInitialLoading,
                        isLoading: N.default.isLoading,
                        isLoadingNextPage: N.default.isLoadingNextPage,
                        showLoadMore: N.default.groupedFetchCount > 2,
                        hasError: N.default.hasError,
                        hasOlderLogs: N.default.hasOlderLogs,
                        rawLogs: null != s && null != t ? s : [],
                        theme: f.default.theme,
                        hide: L.default.enabled
                    }
                }), [b, B] = n.useState({
                    expandedId: null,
                    lastExpandedId: null,
                    actionFilterQuery: ""
                }), F = C.transformLogs(j, l), H = !1, V = n.useRef(null), w = (0, I.default)(b), k = (0, I.default)(F), Y = () => {
                    var e;
                    return (null === (e = V.current) || void 0 === e ? void 0 : e.isScrolledToBottom()) || !1
                };
                O || (null == F ? void 0 : F.length) === (null == k ? void 0 : k.length) || null == V || Y();
                let K = () => {
                        let s = {
                            expanded: null,
                            lastExpanded: null
                        };
                        if (null != t) {
                            let e = o.findDOMNode(t);
                            null != e && (0, u.isElement)(e) && (s.lastExpanded = e.getBoundingClientRect())
                        }
                        if (null != e) {
                            let t = o.findDOMNode(e);
                            null != t && (0, u.isElement)(t) && (s.expanded = t.getBoundingClientRect())
                        }
                        return s
                    },
                    W = K(),
                    z = (0, T.default)(null, () => {
                        let {
                            expandedId: s
                        } = b;
                        null == s || H ? null != s && (H = !1) : (e = null, t = null, B(e => ({
                            ...e,
                            expandedId: null,
                            lastExpandedId: null
                        })), W = K())
                    });
                n.useEffect(() => {
                    b.expandedId !== (null == w ? void 0 : w.expandedId) && X()
                }, []);
                let X = () => {
                        let e = V.current;
                        if (null == e) return;
                        let t = K(),
                            s = W;
                        if (null == t.expanded || null == t.lastExpanded || null == s.expanded || t.expanded.top < t.lastExpanded.top) return;
                        let a = s.expanded.height - t.lastExpanded.height,
                            n = e.getScrollerState(),
                            l = n.scrollTop - a;
                        e.scrollTo({
                            to: l
                        })
                    },
                    Z = s => {
                        let {
                            expandedId: a
                        } = b;
                        a !== s.id ? (H = !0, B(e => ({
                            ...e,
                            expandedId: null == s ? void 0 : s.id,
                            lastExpandedId: a
                        })), W = K()) : (e = null, t = null, null != a && (W = K()), B(e => ({
                            ...e,
                            expandedId: null,
                            lastExpandedId: null
                        })))
                    },
                    J = e => {
                        H = !0, e.stopPropagation()
                    },
                    Q = () => {},
                    q = t => {
                        e = t
                    },
                    $ = e => {
                        t = e
                    },
                    ee = () => (0, a.jsx)(E.Spinner, {
                        type: E.Spinner.Type.SPINNING_CIRCLE,
                        className: D.spinner
                    });
                return (0, a.jsx)("div", {
                    ref: z,
                    className: M.customColumn,
                    children: (0, a.jsx)("div", {
                        className: M.customContainer,
                        children: (0, a.jsx)(E.AdvancedScrollerAuto, {
                            className: i(M.customScroller, D.scroller),
                            onScroll: () => {
                                Y() && Q()
                            },
                            ref: V,
                            children: (0, a.jsxs)("div", {
                                className: D.content,
                                children: [(0, a.jsxs)(a.Fragment, {
                                    children: [(0, a.jsx)("div", {
                                        className: D.customHeader,
                                        children: (0, a.jsx)(E.FormTitle, {
                                            tag: E.FormTitleTags.H1,
                                            className: D.formTitle,
                                            children: R.default.Messages.GUILD_SETTINGS_LABEL_AUDIT_LOG
                                        })
                                    }), (0, a.jsx)(E.FormDivider, {
                                        className: D.divider
                                    })]
                                }), (0, a.jsx)(h.GuildAuditLogSearch, {
                                    className: D.search
                                }), (() => {
                                    if (y) return (0, a.jsx)(_.default, {});
                                    if (d || r) return ee();
                                    if ((null == F ? void 0 : F.length) === 0) {
                                        let e = U ? R.default.Messages.GUILD_SETTINGS_LABEL_AUDIT_LOG_ERROR_BODY : R.default.Messages.GUILD_SETTINGS_LABEL_AUDIT_LOG_EMPTY_BODY,
                                            t = U ? R.default.Messages.GUILD_SETTINGS_LABEL_AUDIT_LOG_ERROR_TITLE : R.default.Messages.GUILD_SETTINGS_LABEL_AUDIT_LOG_EMPTY_TITLE;
                                        return (0, a.jsxs)(m.default, {
                                            theme: P,
                                            className: D.empty,
                                            children: [(0, a.jsx)(m.EmptyStateImage, {
                                                darkSrc: G,
                                                lightSrc: x,
                                                width: 272,
                                                height: 130
                                            }), (0, a.jsx)(m.EmptyStateText, {
                                                note: e,
                                                style: {
                                                    maxWidth: 300
                                                },
                                                children: t
                                            })]
                                        })
                                    }
                                    let {
                                        expandedId: e,
                                        lastExpandedId: t
                                    } = b;
                                    return (0, a.jsx)(p, {
                                        logs: F,
                                        guildId: s,
                                        expandedId: e,
                                        lastExpandedId: t,
                                        setExpandedRef: q,
                                        setLastExpandedRef: $,
                                        onHeaderClick: Z,
                                        onContentClick: J,
                                        scroller: V.current
                                    })
                                })(), (() => {
                                    if (O && v && !y) return (0, a.jsx)(E.Button, {
                                        color: E.Button.Colors.PRIMARY,
                                        className: D.loadMore,
                                        onClick: Q,
                                        children: R.default.Messages.GUILD_SETTINGS_AUDIT_LOG_LOAD_MORE
                                    })
                                })(), !S || y || d ? null : ee()]
                            })
                        })
                    })
                })
            }