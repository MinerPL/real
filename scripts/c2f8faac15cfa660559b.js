(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["94548"], {
        279295: function(e, t, s) {
            "use strict";
            s.r(t), s("356305");
            try {
                null == Date.now && (Date.now = () => new Date().valueOf())
            } catch (e) {}
            let a = (() => {
                    try {
                        var e;
                        return null !== (e = s.g.performance.timing.navigationStart) && void 0 !== e ? e : s.g.performance.now()
                    } catch (e) {}
                    return Date.now()
                })(),
                n = (() => {
                    try {
                        var e;
                        return null !== (e = s.g.performance.timeOrigin) && void 0 !== e ? e : a
                    } catch (e) {}
                    return Date.now()
                })();
            if (null == s.g.performance.timing) try {
                s.g.performance.timing = {
                    navigationStart: a
                }
            } catch (e) {}
            if (null == s.g.performance.timeOrigin) try {
                s.g.performance.timeOrigin = n
            } catch (e) {}
            s.g.performance
        },
        356305: function(e, t, s) {
            var a, n, l, r, i, o, u;
            a = s.g, n = Date.now ? Date.now() : +new Date, l = a.performance || {}, r = [], i = {}, o = function(e, t) {
                for (var s = 0, a = r.length, n = []; s < a; s++) r[s][e] == t && n.push(r[s]);
                return n
            }, u = function(e, t) {
                for (var s, a = r.length; a--;)(s = r[a]).entryType == e && (void 0 === t || s.name == t) && r.splice(a, 1)
            }, l.now || (l.now = l.webkitNow || l.mozNow || l.msNow || function() {
                return (Date.now ? Date.now() : +new Date) - n
            }), l.mark || (l.mark = l.webkitMark || function(e) {
                var t = {
                    name: e,
                    entryType: "mark",
                    startTime: l.now(),
                    duration: 0
                };
                r.push(t), i[e] = t
            }), l.measure || (l.measure = l.webkitMeasure || function(e, t, s) {
                var a, n;
                if (void 0 !== s && void 0 === i[s]) throw SyntaxError("Failed to execute 'measure' on 'Performance': The mark '" + s + "' does not exist.");
                if (void 0 !== t && void 0 === i[t]) throw SyntaxError("Failed to execute 'measure' on 'Performance': The mark '" + t + "' does not exist.");
                a = i[t] ? i[t].startTime : 0, n = i[s] ? i[s].startTime : l.now(), r.push({
                    name: e,
                    entryType: "measure",
                    startTime: a,
                    duration: n - a
                })
            }), l.getEntriesByType || (l.getEntriesByType = l.webkitGetEntriesByType || function(e) {
                return o("entryType", e)
            }), l.getEntriesByName || (l.getEntriesByName = l.webkitGetEntriesByName || function(e) {
                return o("name", e)
            }), l.clearMarks || (l.clearMarks = l.webkitClearMarks || function(e) {
                u("mark", e)
            }), l.clearMeasures || (l.clearMeasures = l.webkitClearMeasures || function(e) {
                u("measure", e)
            }), a.performance = l, "function" == typeof define && (define.amd || define.ajs) && define("performance", [], function() {
                return l
            })
        },
        714358: function(e, t, s) {
            "use strict";
            e.exports = s.p + "e7c5287d6706ac82b14b.svg"
        },
        112545: function(e, t, s) {
            "use strict";
            e.exports = s.p + "91a0948fc3f2fcdae60b.png"
        },
        600310: function(e, t, s) {
            "use strict";
            e.exports = s.p + "20e943e83204fab6ff33.png"
        },
        129185: function(e, t, s) {
            "use strict";
            e.exports = s.p + "124659e036ed41dd2134.png"
        },
        338283: function(e, t, s) {
            "use strict";
            e.exports = s.p + "fa7ba1d8e3edcce69332.png"
        },
        62e4: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                ArrowsUpDownIcon: function() {
                    return r
                }
            });
            var a = s("920040");
            s("773670");
            var n = s("912557"),
                l = s("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: s = 24,
                    color: r = n.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...o
                } = e;
                return (0, a.jsx)("svg", {
                    ...(0, l.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, a.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        fillRule: "evenodd",
                        d: "M16.293 21.707a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L18 18.586V3a1 1 0 1 0-2 0v15.586l-2.293-2.293a1 1 0 0 0-1.414 1.414l4 4Zm-10-19.414a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1-1.414 1.414L8 5.414V21a1 1 0 1 1-2 0V5.414L3.707 7.707a1 1 0 0 1-1.414-1.414l4-4Z",
                        clipRule: "evenodd",
                        className: i
                    })
                })
            }
        },
        594881: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                MinimizeIcon: function() {
                    return r
                }
            });
            var a = s("920040");
            s("773670");
            var n = s("912557"),
                l = s("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: s = 24,
                    color: r = n.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...o
                } = e;
                return (0, a.jsx)("svg", {
                    ...(0, l.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, a.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        fillRule: "evenodd",
                        d: "M15 4v3.586l5.293-5.293a1 1 0 1 1 1.414 1.414L16.414 9H20a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1V4a1 1 0 1 1 2 0ZM9 16.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L7.586 15H4a1 1 0 1 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-3.586Z",
                        clipRule: "evenodd",
                        className: i
                    })
                })
            }
        },
        119161: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                makeEmptyTitleError: function() {
                    return u
                },
                makeEmptyMessageError: function() {
                    return d
                },
                makeAutomodViolationError: function() {
                    return c
                },
                renderError: function() {
                    return h
                }
            });
            var a, n, l = s("600798"),
                r = s("782340");

            function i(e, t) {
                return {
                    type: e,
                    message: null != t ? t : null
                }
            }

            function o(e) {
                return i(n.EmptyContent, e)
            }

            function u() {
                return o(r.default.Messages.FORUM_POST_EMPTY_TITLE_ERROR)
            }

            function d() {
                return o(r.default.Messages.FORUM_POST_EMPTY_MESSAGE_ERROR)
            }

            function c(e, t) {
                return i(n.AutomodViolation, (0, l.getAutomodErrorMessageFromErrorResponse)(e, null == t ? void 0 : t.id))
            }

            function h(e, t) {
                var s;
                return null == e || e.type === n.EmptyContent && null != t.content && t.content.trim().length > 0 || e.type === n.EmptyTags && null != t.tags && t.tags.length > 0 ? null : null !== (s = e.message) && void 0 !== s ? s : null
            }(a = n || (n = {}))[a.EmptyContent = 0] = "EmptyContent", a[a.AutomodViolation = 1] = "AutomodViolation", a[a.EmptyTags = 2] = "EmptyTags"
        },
        713955: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                getAllRolesRows: function() {
                    return i
                },
                getAllExistingRolesWithPermission: function() {
                    return o
                }
            });
            var a = s("754013"),
                n = s("454273"),
                l = s("991170");
            let r = (e, t, s) => {
                    if (null == e.id) return !1;
                    let n = l.default.computePermissionsForRoles({
                        forceRoles: {
                            [e.id]: e
                        },
                        context: s
                    });
                    return a.default.has(n, t)
                },
                i = e => null == e.roles ? [] : Object.values(e.roles).sort(n.sortRoles).map(e => (0, n.getRoleRowData)(e)),
                o = (e, t, s) => Object.values(e.roles).filter(e => (0, n.isAdmin)(e) || r(e, s, t))
        },
        706065: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return i
                }
            });
            var a = s("173333"),
                n = s("689988");
            let l = "formGuidelinesStorageKey";
            class r extends n.default {
                _initialize() {
                    let e = a.default.get(l);
                    null != e && (this.seenForumGuidelines = new Set(e))
                }
                _terminate() {
                    a.default.set(l, this.seenForumGuidelines)
                }
                markAsSeen(e) {
                    this.seenForumGuidelines.add(e), a.default.set(l, this.seenForumGuidelines)
                }
                hasSeen(e) {
                    return this.seenForumGuidelines.has(e)
                }
                constructor(...e) {
                    super(...e), this.seenForumGuidelines = new Set
                }
            }
            var i = new r
        },
        146290: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return i
                }
            });
            var a = s("773670"),
                n = s("471671"),
                l = s("816454"),
                r = s("250850"),
                i = {
                    useForumChannelSeenManager: function(e) {
                        let {
                            guildId: t,
                            channelId: s
                        } = e, i = a.useRef(null), o = (0, l.getMainWindowId)(), u = !n.default.isFocused(o);
                        return a.useLayoutEffect(() => (null == i.current && (i.current = new r.default({
                            guildId: t,
                            channelId: s,
                            isPaused: u,
                            windowId: o
                        }), i.current.initialize()), () => {
                            var e;
                            null === (e = i.current) || void 0 === e || e.terminate(), i.current = null
                        }), [s, t, u, o]), i.current
                    }
                }
        },
        43836: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                useIsRecentMessageDeleted: function() {
                    return l
                }
            });
            var a = s("498225"),
                n = s("324261");

            function l(e) {
                var t;
                let {
                    loaded: s,
                    message: l
                } = (0, a.useStateFromStores)([n.default], () => n.default.getMessageState(e.id));
                return s && (null !== (t = e.messageCount) && void 0 !== t ? t : 0) > 0 && null == l
            }
        },
        532308: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return g
                }
            });
            var a = s("920040");
            s("773670");
            var n = s("938252"),
                l = s.n(n),
                r = s("498225"),
                i = s("77078"),
                o = s("430568"),
                u = s("385976"),
                d = s("547896"),
                c = s("154695"),
                h = s("782340"),
                m = s("690127");
            let f = e => {
                let {
                    tag: t
                } = e, {
                    id: s,
                    name: n,
                    emojiId: l,
                    emojiName: c
                } = t, h = (0, r.useStateFromStores)([u.default], () => null != l ? u.default.getUsableCustomEmojiById(l) : null), f = null != l || null != c;
                return (0, a.jsx)(i.ComboboxItem, {
                    value: s,
                    children: (0, a.jsx)(i.ComboboxItem.Label, {
                        children: (0, a.jsxs)("div", {
                            className: m.row,
                            children: [f ? (0, a.jsx)(o.default, {
                                className: m.emoji,
                                emojiId: l,
                                emojiName: c,
                                animated: !!(null == h ? void 0 : h.animated)
                            }) : (0, a.jsx)(d.default, {
                                className: m.emoji
                            }), (0, a.jsx)(i.Text, {
                                variant: "text-md/semibold",
                                color: "header-secondary",
                                children: n
                            })]
                        })
                    })
                }, s)
            };

            function g(e) {
                let {
                    parentChannel: t,
                    appliedTags: s,
                    maxTagsApplied: n,
                    onSelectTag: r,
                    onClose: o
                } = e, u = (0, c.useVisibleForumTags)(t), d = (e, t) => t.filter(t => l(e.toLowerCase(), t.name.toLowerCase()));
                return (0, a.jsx)(i.ComboboxPopout, {
                    showScrollbar: !0,
                    value: s,
                    onChange: e => {
                        (!n || s.has(e)) && (r(e), o())
                    },
                    placeholder: h.default.Messages.FORUM_TAG_POST_SEARCH_PLACEHOLDER,
                    "aria-label": h.default.Messages.FORUM_TAG_POST_SEARCH_PLACEHOLDER,
                    children: e => d(e, u).map(e => (0, a.jsx)(f, {
                        tag: e
                    }, e.id))
                })
            }
        },
        479273: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return eC
                }
            });
            var a = s("920040"),
                n = s("773670"),
                l = s("575482"),
                r = s.n(l),
                i = s("895467"),
                o = s.n(i),
                u = s("47370"),
                d = s("947980"),
                c = s("756823"),
                h = s("925149"),
                m = s("498225"),
                f = s("975162"),
                g = s("77078"),
                C = s("264732"),
                x = s("731898"),
                p = s("206230"),
                S = s("679653"),
                _ = s("509802"),
                T = s("406043"),
                N = s("87635"),
                E = s("396856"),
                v = s("549077"),
                M = s("144491"),
                A = s("689275"),
                I = s("134947"),
                j = s("300322"),
                R = s("967241"),
                O = s("982108"),
                y = s("42203"),
                b = s("474643"),
                F = s("88093"),
                L = s("585722"),
                P = s("471671"),
                w = s("837899"),
                D = s("425190"),
                k = s("891152"),
                U = s("423487"),
                H = s("378765"),
                G = s("526812"),
                B = s("404607"),
                z = s("670902"),
                V = s("339792"),
                W = s("154695"),
                K = s("146290"),
                Y = s("250850"),
                q = s("867965"),
                Z = s("688169"),
                X = s("131600"),
                Q = s("912066"),
                J = s("657927"),
                $ = s("152637"),
                ee = s("578198"),
                et = s("530474"),
                es = s("592633"),
                ea = s("968462"),
                en = s("823968"),
                el = s("90625"),
                er = s("363622"),
                ei = s("193695"),
                eo = s("552683"),
                eu = s("589455"),
                ed = s("485055"),
                ec = s("219840"),
                eh = s("49111"),
                em = s("648564"),
                ef = s("782340"),
                eg = s("612023");

            function eC(e) {
                let {
                    channel: t,
                    guild: s,
                    sidebarState: n
                } = e;
                return (0, a.jsx)(ee.ForumPostComposerStoreProvider, {
                    createStore: () => (0, ee.createForumPostComposerStore)(t),
                    children: (0, a.jsx)(ev, {
                        channel: t,
                        guild: s,
                        sidebarState: n
                    })
                }, t.id)
            }
            let ex = new er.GridLayout({
                minWidth: 320,
                maxWidth: 450,
                gap: 16
            });

            function ep(e) {
                return "forum-grid-header-section-".concat(e)
            }
            let eS = (e, t, s) => 0 === e ? 0 : (0, er.getGridPostHeight)(s);

            function e_(e) {
                let {
                    itemRole: t,
                    coords: s,
                    section: n
                } = e;
                return (0, a.jsx)("div", {
                    className: r(eg.card, eg.archivedDividerRow, eg.columnsSpan),
                    style: s,
                    "data-item-role": t,
                    children: (0, a.jsx)("div", {
                        className: eg.emptyMainCard,
                        children: (0, a.jsx)(g.Heading, {
                            variant: "eyebrow",
                            className: eg.archivedDivider,
                            id: ep(n),
                            children: ef.default.Messages.FORUM_SECTION_ARCHIVED
                        })
                    })
                }, "section-divider")
            }

            function eT(e) {
                let {
                    section: t,
                    coords: s,
                    key: n,
                    isShowingSearchResult: l,
                    hasActiveThreads: r
                } = e;
                return () => 2 === t && !l && r ? (0, a.jsx)(e_, {
                    section: t,
                    coords: null == s ? void 0 : {
                        ...s,
                        position: "absolute"
                    },
                    itemRole: "section"
                }, n) : null
            }

            function eN(e, t) {
                return "card-".concat(e, "-").concat(t)
            }

            function eE(e) {
                if ("string" == typeof e) {
                    let t = e.match(/card-{\d+}-({\d+})$/);
                    return null == t ? null : t[1]
                }
                return null
            }

            function ev(e) {
                let {
                    channel: t,
                    sidebarState: s
                } = e, {
                    editorHeight: l,
                    editorAdditionRowHeight: i,
                    listViewCardHeights: o,
                    formOpen: c
                } = (0, ee.useForumPostComposerStore)(e => {
                    let {
                        editorHeight: t,
                        editorAdditionRowHeight: s,
                        listViewCardHeights: a,
                        formOpen: n,
                        cardHeightVersion: l
                    } = e;
                    return {
                        editorHeight: t,
                        editorAdditionRowHeight: s,
                        listViewCardHeights: a,
                        formOpen: n,
                        cardHeightVersion: l
                    }
                }, u.default), {
                    activeThreadIds: f,
                    archivedThreadIds: x,
                    searchResults: S,
                    canLoadMore: _,
                    loadMore: T,
                    activeThreadsLoading: N,
                    archivedThreadsLoading: j,
                    loading: F,
                    isSearchLoading: L,
                    layoutType: P
                } = function(e) {
                    let {
                        sortOrder: t,
                        tagFilter: s,
                        layoutType: a
                    } = (0, V.useForumChannelStore)(e.id), n = (0, W.useForumActiveThreadIds)({
                        channel: e,
                        sortOrder: t,
                        tagFilter: s,
                        shouldAutomaticallyAck: !0
                    }), l = (0, m.useStateFromStores)([A.default], () => !A.default.hasLoaded(e.guild_id)), {
                        threadIds: r,
                        canLoadMore: i,
                        loadMore: o,
                        loading: u
                    } = (0, I.useArchivedThreads)(e, t, s), {
                        searchResults: d,
                        isSearchLoading: c
                    } = (0, W.useForumSearchState)({
                        channelId: e.id
                    });
                    return (0, W.useLoadForumUnreadCounts)(e, t, s), {
                        activeThreadIds: n,
                        archivedThreadIds: r,
                        searchResults: d,
                        canLoadMore: i,
                        loadMore: o,
                        loading: l || u || c,
                        archivedThreadsLoading: u,
                        activeThreadsLoading: l,
                        isSearchLoading: c,
                        layoutType: a
                    }
                }(t), w = f.length > 0, D = w || x.length > 0, k = (0, E.default)(t), {
                    tagFilter: U
                } = (0, V.useForumChannelStore)(t.id);
                (0, W.useAutomaticForumSearch)(t, U, c);
                let H = (0, W.useCanSearchForumPosts)(t),
                    z = (0, W.useCanViewArchivedPosts)(t),
                    Q = n.useRef(null),
                    {
                        observePostVisibilityAnalytics: J
                    } = function(e) {
                        let {
                            guildId: t,
                            channelId: s,
                            scrollerRef: a
                        } = e;
                        K.default.useForumChannelSeenManager({
                            guildId: t,
                            channelId: s
                        });
                        let l = n.useRef(null),
                            r = n.useCallback((e, t) => {
                                for (let s of t) {
                                    let t = s.target.dataset.itemId;
                                    if (null == t) return;
                                    let a = Date.now();
                                    s.intersectionRatio >= .5 ? (0, Y.markForumPostItemAsSeen)(e, t, a) : (0, Y.markForumPostItemAsUnseen)(e, t, a)
                                }
                            }, []);
                        n.useEffect(() => {
                            var e;
                            let t = null === (e = a.current) || void 0 === e ? void 0 : e.getScrollerNode();
                            if (null != t) return l.current = new IntersectionObserver(e => r(s, e), {
                                root: t,
                                rootMargin: "0px 100000px 0px 100000px",
                                threshold: .5
                            }), () => {
                                var e;
                                null === (e = l.current) || void 0 === e || e.disconnect(), l.current = null
                            }
                        }, [s, r, a]);
                        let i = n.useCallback((e, t) => {
                            var a;
                            if (null == e) {
                                (0, Y.markForumPostItemAsUnseen)(s, t, Date.now());
                                return
                            }
                            null === (a = l.current) || void 0 === a || a.observe(e)
                        }, [s]);
                        return {
                            observePostVisibilityAnalytics: i
                        }
                    }({
                        scrollerRef: Q,
                        channelId: t.id,
                        guildId: t.guild_id
                    }),
                    et = P === h.ForumLayout.GRID,
                    en = null != S,
                    el = n.useRef(null),
                    {
                        containerRef: eo,
                        containerWidth: eC
                    } = (0, eu.default)();
                n.useEffect(() => () => {
                    null != t.id && B.default.clearForumSearch(t.id)
                }, [t.id]);
                let {
                    columns: e_
                } = n.useMemo(() => et ? ex.getRenderOptions(eC) : er.ForumListLayoutRenderOptions, [et, eC]), ev = n.useMemo(() => F ? Math.round((window.innerHeight - 200) / 118) : 0, [F]), ej = n.useMemo(() => {
                    let e = window.innerHeight,
                        t = Math.ceil(e / (0, er.getGridPostHeight)(ex.getWidth(eC))) * e_;
                    return N ? t : 0
                }, [eC, e_, N]), eO = n.useMemo(() => {
                    let e = window.innerHeight,
                        t = Math.ceil(e / (0, er.getGridPostHeight)(ex.getWidth(eC))) * e_;
                    return j ? t : 0
                }, [eC, e_, j]), ey = n.useMemo(() => {
                    let e = window.innerHeight,
                        t = Math.ceil(e / (0, er.getGridPostHeight)(ex.getWidth(eC))) * e_;
                    return L && en ? t : 0
                }, [eC, e_, L, en]), eb = n.useMemo(() => {
                    if (et) {
                        if (!H && en) return [1, 0];
                        if (!z) return [1, f.length + ej, 0];
                        else if (en) return [1, S.length + ey, 0];
                        else return [1, f.length + ej, x.length + eO]
                    }
                    if (!H && en) return [1, 1];
                    if (!z) return [1, f.length, 1];
                    else if (en) return [1, S.length, 0, ev];
                    else return [1, f.length, x.length, ev]
                }, [et, en, f.length, x.length, H, z, ev, S, ej, eO, ey]), eF = n.useMemo(() => {
                    if (!H && en) return [
                        [],
                        []
                    ];
                    if (!z) return [
                        [], f, []
                    ];
                    if (en) return [
                        [], S, [],
                        []
                    ];
                    else return [
                        [], f, x, []
                    ]
                }, [en, H, z, S, f, x]), eL = n.useCallback((e, s) => {
                    (0, q.trackForumPostClicked)({
                        guildId: t.guild_id,
                        channelId: t.id,
                        postId: e.id,
                        location: {
                            page: eh.AnalyticsPages.GUILD_CHANNEL,
                            section: eh.AnalyticsSections.FORUM_CHANNEL_POST
                        }
                    }), s ? (0, M.transitionToThread)(e, em.OpenThreadAnalyticsLocations.BROWSER) : (el.current = e.id, (0, R.openThreadSidebarForViewing)(e))
                }, [t.guild_id, t.id, el]), [eP, ew] = n.useState(l + i - 24), eD = n.useCallback((e, s, n) => {
                    if (0 === e) return (0, a.jsx)(eR, {
                        channel: t,
                        isEmpty: !w,
                        isSearchLoading: L,
                        numResults: null == S ? void 0 : S.length,
                        coords: s,
                        onHeightChange: ew,
                        children: !F && (0, a.jsx)(X.default, {
                            channel: t,
                            hasAnyThread: D
                        }, t.id)
                    }, "forum-channel-header");
                    return 2 !== e || z ? 1 === e && en && !H ? (0, a.jsx)(eA, {
                        channel: t,
                        coords: s
                    }, "archive-or-search-result") : n() : (0, a.jsx)(eM, {
                        channel: t,
                        coords: s
                    }, "archived-missing-reading-history-perm")
                }, [en, z, S, H, t, w, L, F, D]), ek = (0, m.useStateFromStores)([G.default], () => G.default.hasHidden(t.id));
                n.useEffect(() => {
                    var e, t;
                    let s = et ? eW : Q,
                        a = null === (e = s.current) || void 0 === e ? void 0 : e.getScrollerState();
                    null != a && !ek && a.scrollTop > l && (null === (t = s.current) || void 0 === t || t.scrollTo({
                        to: 0
                    }))
                }, [ek]);
                let eU = (0, Z.useForumActivityExperiment)(t.guild_id),
                    {
                        updateListScrollerRef: eH,
                        renderListSection: eG,
                        renderListItem: eB,
                        getListSectionHeight: ez,
                        getListItemHeight: eV
                    } = function(e) {
                        let {
                            listRef: t,
                            isIncreasedActivityView: s,
                            hasActiveThreads: l,
                            threadIdsBySection: i,
                            listViewCardHeights: o,
                            editorHeight: u,
                            editorAdditionRowHeight: d,
                            renderSectionOrItem: c,
                            goToThread: h,
                            observePostVisibilityAnalytics: m,
                            isShowingSearchResult: f
                        } = e, C = n.useCallback(e => s => {
                            var a;
                            t.current = s, e.current = null !== (a = null == s ? void 0 : s.getScrollerNode()) && void 0 !== a ? a : null
                        }, [t]), x = n.useCallback(e => eT({
                            section: e.section,
                            isShowingSearchResult: f,
                            hasActiveThreads: l
                        })(), [l, f]), p = n.useCallback(e => c(e.section, void 0, () => {
                            if (3 === e.section) return __OVERLAY__ ? null : s ? (0, a.jsx)("div", {
                                className: eg.placeholder,
                                children: (0, a.jsx)(ea.default, {})
                            }) : (0, a.jsx)("div", {
                                "data-item-role": "item",
                                className: r(eg.loadingCard, eg["loadingCard-".concat(e.row % 3)], {
                                    [eg.loadingCardWithIncreasedActivity]: s
                                })
                            }, "loading-".concat(e.row));
                            let t = i[e.section][e.row];
                            return (0, a.jsx)("li", {
                                className: eg.card,
                                "data-item-role": "item",
                                children: (0, a.jsx)(g.HeadingLevel, {
                                    children: s ? (0, a.jsx)(ei.default, {
                                        className: eg.increasedActivityMainCard,
                                        threadId: t,
                                        goToThread: h,
                                        observePostVisibilityAnalytics: m
                                    }) : (0, a.jsx)($.default, {
                                        className: eg.mainCard,
                                        threadId: t,
                                        goToThread: h,
                                        observePostVisibilityAnalytics: m
                                    })
                                })
                            }, "".concat(e.section, "-").concat(t))
                        }), [s, c, i, h, m]), S = n.useCallback((e, t) => {
                            if (0 === e) return u + d;
                            let a = i[e][t],
                                n = o[a],
                                l = (s ? ei.DEFAULT_INCREASED_ACTIVITY_FORUM_POST_HEIGHT : 96) + 8;
                            return null == n ? l : n + 8
                        }, [i, o, u, d, s]), _ = n.useCallback(e => 2 === e && l ? 40 : 0, [l]);
                        return {
                            updateListScrollerRef: C,
                            renderListSection: x,
                            renderListItem: p,
                            getListSectionHeight: _,
                            getListItemHeight: S
                        }
                    }({
                        listRef: Q,
                        hasActiveThreads: w,
                        threadIdsBySection: eF,
                        listViewCardHeights: o,
                        editorHeight: l,
                        editorAdditionRowHeight: i,
                        renderSectionOrItem: eD,
                        goToThread: eL,
                        observePostVisibilityAnalytics: J,
                        isShowingSearchResult: en,
                        isIncreasedActivityView: eU
                    }),
                    eW = n.useRef(null),
                    {
                        updateMasonryListScrollerRef: eK,
                        getItemKey: eY,
                        renderGridSection: eq,
                        renderGridItem: eZ,
                        getGridSectionHeight: eX,
                        getSectionProps: eQ,
                        handleGridFocus: eJ
                    } = function(e) {
                        let {
                            masonryListScrollerRef: t,
                            threadIdsBySection: s,
                            goToThread: l,
                            renderSectionOrItem: i,
                            hasActiveThreads: o,
                            isShowingSearchResult: u,
                            canSearchForumPosts: d,
                            canViewArchivedPosts: c,
                            observePostVisibilityAnalytics: h,
                            focusedThreadId: m,
                            headerHeight: f
                        } = e, g = n.useRef(null), C = n.useCallback(e => {
                            t.current = e, g.current = null == e ? void 0 : e.getScrollerNode()
                        }, [t]), x = n.useCallback((e, s) => {
                            let {
                                current: a
                            } = t;
                            if (null == a) return;
                            let n = document.querySelector(e);
                            if (null == n) return;
                            let l = a.getCoordsMap()[s],
                                r = null != l ? l.height + 20 : 200;
                            a.scrollIntoViewNode({
                                node: n,
                                padding: r,
                                callback() {
                                    requestAnimationFrame(() => {
                                        var t;
                                        null === (t = document.querySelector(e)) || void 0 === t || t.focus({
                                            preventScroll: !0
                                        })
                                    })
                                }
                            }), m.current = eE(s)
                        }, [t, m]), p = n.useCallback(e => {
                            let t = eE(e);
                            if (null == t) return;
                            let s = y.default.getChannel(t);
                            null != s && l(s, !0)
                        }, [l]), S = n.useCallback(function(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                                a = s[e];
                            if (0 === a.length) return "section-".concat(e, "-").concat(t);
                            {
                                let a = s[e][t];
                                return null == a ? eN(e, t) : eN(e, a)
                            }
                        }, [s]), _ = n.useCallback((e, t, s) => i(e, t, eT({
                            section: e,
                            coords: t,
                            key: s,
                            isShowingSearchResult: u,
                            hasActiveThreads: o
                        })), [i, o, u]), T = n.useCallback(e => 0 === e ? {} : {
                            role: "grid",
                            "aria-labelledby": "#".concat(ep(e))
                        }, []), N = n.useCallback((e, t, n, i, o) => {
                            if (0 === e) return null;
                            let u = s[e][t];
                            return null != u ? (0, a.jsx)(es.default, {
                                id: "".concat(i),
                                threadId: u,
                                className: r(eg.card, eg.mainCard),
                                goToThread: l,
                                observePostVisibilityAnalytics: h,
                                coords: n,
                                gridCoords: o.coordinates[i],
                                gridSectionBoundaries: o.boundaries
                            }, i) : __OVERLAY__ ? null : (0, a.jsx)("div", {
                                style: {
                                    ...n
                                },
                                "data-item-role": "item",
                                className: r(eg.loadingCard, eg["loadingCard-".concat(t % 3)])
                            }, i)
                        }, [s, l, h]), E = n.useCallback(e => 0 === e ? f - 8 - 24 : 2 === e ? o || !c ? 40 : 0 : 1 === e && u && !d ? 40 : 0, [f, u, d, o, c]);
                        return {
                            updateMasonryListScrollerRef: C,
                            masonryListContainerRef: g,
                            focusedThreadId: m,
                            handleGridFocus: x,
                            handleGridSelect: p,
                            getItemKey: S,
                            renderGridSection: _,
                            renderGridItem: N,
                            getSectionProps: T,
                            getGridSectionHeight: E
                        }
                    }({
                        masonryListScrollerRef: eW,
                        threadIdsBySection: eF,
                        goToThread: eL,
                        renderSectionOrItem: eD,
                        hasActiveThreads: w,
                        isShowingSearchResult: en,
                        canSearchForumPosts: H,
                        canViewArchivedPosts: z,
                        observePostVisibilityAnalytics: J,
                        focusedThreadId: el,
                        headerHeight: eP
                    });
                ! function(e) {
                    let {
                        masonryListScrollerRef: t,
                        containerWidth: s,
                        isGridLayout: a,
                        threadIdsBySection: l,
                        focusedThreadId: r,
                        parentId: i
                    } = e;
                    n.useEffect(() => {
                        if (a) {
                            let e = setTimeout(() => {
                                if (null == t.current || null == r.current) return;
                                let e = r.current;
                                if ("string" != typeof e) return;
                                let s = O.default.getSidebarState(i);
                                if (null == s) {
                                    r.current = null;
                                    return
                                }
                                let a = l.findIndex(t => t.find(t => t === e)),
                                    n = t.current.getCoordsMap(),
                                    o = "__section__".concat(a),
                                    u = n[o],
                                    d = n[eN(a, e)];
                                null != u && null != d && t.current.scrollIntoViewRect({
                                    start: u.top + d.top - 100,
                                    end: u.top + d.top + d.height + 50
                                })
                            }, 500);
                            return () => clearTimeout(e)
                        }
                    }, [i, s, a, l, r, t])
                }({
                    masonryListScrollerRef: eW,
                    containerWidth: eC,
                    isGridLayout: et,
                    threadIdsBySection: eF,
                    parentId: t.id,
                    focusedThreadId: el
                });
                let e$ = n.useCallback(() => {
                        var e, s;
                        if (en) return;
                        let a = et ? null === (e = eW.current) || void 0 === e ? void 0 : e.getScrollerState() : null === (s = Q.current) || void 0 === s ? void 0 : s.getScrollerState();
                        if (null == a) return;
                        (0, q.trackForumScrolled)({
                            guildId: t.guild_id,
                            channelId: t.id
                        });
                        let n = a.scrollTop + a.offsetHeight,
                            l = a.scrollHeight - n,
                            r = et ? Math.max(200, (0, er.getGridPostHeight)(eC)) : 200;
                        l < r && T()
                    }, [en, et, t.guild_id, t.id, eC, T]),
                    e0 = (0, m.useStateFromStores)([p.default], () => p.default.keyboardModeEnabled),
                    e1 = (0, ed.default)({
                        id: "forum-grid-view",
                        isEnabled: et && e0,
                        setFocus: eJ
                    }),
                    e2 = (0, ec.default)({
                        listRef: Q,
                        padding: 96,
                        isEnabled: !et && e0,
                        channel: t
                    }),
                    {
                        ref: e4,
                        ...e6
                    } = e1.containerProps,
                    e7 = O.default.getSidebarState(t.id),
                    e5 = null != e7 && (0, O.isViewChannelSidebar)(e7);
                return (0, a.jsx)("div", {
                    className: eg.container,
                    ref: eo,
                    children: (0, a.jsx)(g.FocusJumpSection, {
                        children: e => (0, a.jsxs)(a.Fragment, {
                            children: [c && (0, a.jsx)(C.default, {
                                channel: t,
                                draftType: b.DraftType.FirstThreadMessage,
                                className: eg.uploadArea,
                                style: {
                                    right: e5 && (null == s ? void 0 : s.isThreadSidebarFloating) ? s.threadSidebarWidth : 0
                                }
                            }), (0, a.jsx)(eI, {
                                channel: t
                            }), (0, a.jsx)(g.HiddenVisually, {
                                children: (0, a.jsx)(g.H, {
                                    children: ef.default.Messages.THREADS
                                })
                            }), k ? (0, a.jsx)("div", {
                                className: eg.optInNotice,
                                children: (0, a.jsx)(v.default, {
                                    channel: t
                                })
                            }) : null, et ? (0, a.jsx)(ed.GridNavigatorProvider, {
                                navigator: e1,
                                children: (0, a.jsx)(g.MasonryList, {
                                    ref: e => {
                                        var t;
                                        e4.current = null !== (t = null == e ? void 0 : e.getScrollerNode()) && void 0 !== t ? t : null, eK(e)
                                    },
                                    itemGutter: 16,
                                    padding: 24,
                                    className: eg.grid,
                                    columns: e_,
                                    sections: eb,
                                    getItemKey: eY,
                                    getSectionHeight: eX,
                                    getItemHeight: eS,
                                    renderSection: eq,
                                    renderItem: eZ,
                                    getSectionProps: eQ,
                                    onScroll: _ ? e$ : void 0,
                                    chunkSize: 350,
                                    ...e6,
                                    ...e
                                }, P)
                            }) : (0, a.jsx)(d.ListNavigatorProvider, {
                                navigator: e2,
                                children: (0, a.jsx)(d.ListNavigatorContainer, {
                                    children: t => {
                                        let {
                                            ref: s,
                                            ...n
                                        } = t;
                                        return (0, a.jsx)(g.ListAuto, {
                                            ref: eH(s),
                                            className: eg.list,
                                            sections: eb,
                                            sectionHeight: ez,
                                            rowHeight: eV,
                                            renderRow: eB,
                                            renderSection: eG,
                                            chunkSize: 150,
                                            onScroll: _ ? e$ : void 0,
                                            paddingBottom: 24,
                                            ...n,
                                            ...e,
                                            innerRole: "list"
                                        }, P)
                                    }
                                })
                            })]
                        })
                    })
                })
            }

            function eM(e) {
                let {
                    channel: t,
                    coords: s
                } = e, n = (0, S.default)(t);
                return (0, a.jsx)("div", {
                    className: r(eg.missingReadHistoryPermission, eg.columnsSpan),
                    style: s,
                    children: (0, a.jsx)(g.Text, {
                        color: "text-muted",
                        variant: "text-md/normal",
                        children: ef.default.Messages.FORUM_CHANNEL_NO_POST_HISTORY.format({
                            channelName: n
                        })
                    })
                })
            }

            function eA(e) {
                let {
                    channel: t,
                    coords: s
                } = e, n = (0, S.default)(t);
                return (0, a.jsx)("div", {
                    className: r(eg.missingReadHistoryPermission, eg.columnsSpan),
                    style: s,
                    children: (0, a.jsx)(g.Text, {
                        color: "text-muted",
                        variant: "text-md/normal",
                        children: ef.default.Messages.FORUM_CHANNEL_NO_SEARCH_POST_HISTORY.format({
                            channelName: n
                        })
                    })
                })
            }

            function eI(e) {
                let {
                    channel: t
                } = e, s = n.useCallback(() => {
                    B.default.resort(t.id)
                }, [t]), l = (0, m.useStateFromStores)([z.default], () => z.default.getNewThreadCount());
                return 0 === l ? null : (0, a.jsx)(g.Clickable, {
                    className: eg.newPostsButton,
                    onClick: s,
                    children: (0, a.jsx)(g.Text, {
                        color: "text-brand",
                        variant: "text-md/medium",
                        children: ef.default.Messages.NEW_FORUM_POST_COUNT.format({
                            count: l
                        })
                    })
                })
            }

            function ej() {
                return Promise.resolve()
            }

            function eR(e) {
                var t, s, l;
                let {
                    channel: i,
                    isEmpty: C,
                    isSearchLoading: S,
                    numResults: E,
                    children: v,
                    coords: M,
                    onHeightChange: A
                } = e, {
                    name: I,
                    formOpen: R,
                    titleFocused: O,
                    hasClickedForm: y,
                    textAreaState: k,
                    onboardingExpanded: G,
                    setEditorAdditionRowHeight: z
                } = (0, ee.useForumPostComposerStore)(e => {
                    let {
                        name: t,
                        formOpen: s,
                        titleFocused: a,
                        hasClickedForm: n,
                        textAreaState: l,
                        onboardingExpanded: r,
                        setEditorAdditionRowHeight: i
                    } = e;
                    return {
                        name: t,
                        formOpen: s,
                        titleFocused: a,
                        hasClickedForm: n,
                        textAreaState: l,
                        onboardingExpanded: r,
                        setEditorAdditionRowHeight: i
                    }
                }, u.default), {
                    tagFilter: K,
                    layoutType: Y
                } = (0, V.useForumChannelStore)(i.id), Z = (0, ee.useForumPostComposerStoreApi)(), X = (0, V.useForumChannelStoreApi)(), $ = (0, m.useStateFromStores)([F.default], () => F.default.canChatInGuild(i.guild_id)), es = (0, W.useCanManageChannel)(i), ea = (0, j.useCanStartThread)(i), [en, er] = n.useState(ea), [, ei] = (0, T.useCurrentUserCommunicationDisabled)(null !== (l = i.getGuildId()) && void 0 !== l ? l : void 0), eu = $ && (ea || en && ei), ed = i.isMediaChannel();
                n.useEffect(() => {
                    ea && er(!0)
                }, [ea]);
                let {
                    ref: ec,
                    height: em
                } = (0, x.default)();
                n.useEffect(() => {
                    null != em && A(em)
                }, [A, em]);
                let eC = n.useCallback(() => {
                    o(() => {
                        null != ec.current && Z.getState().setEditorHeight(ec.current.offsetHeight)
                    })
                }, [ec, Z]);
                n.useLayoutEffect(eC, [eC, C, eu, G]), (0, H.useComponentAction)({
                    event: eh.ComponentActions.REMEASURE_TARGET,
                    handler: eC
                });
                let ex = (0, m.useStateFromStores)([L.default], () => L.default.getUploads(i.id, b.DraftType.FirstThreadMessage)),
                    ep = (0, W.useChannelTemplate)(i),
                    eS = n.useRef(null),
                    e_ = n.useRef(null),
                    [eT, eN] = n.useState(0),
                    {
                        width: eE
                    } = (0, m.useStateFromStores)([P.default], () => P.default.windowSize()),
                    ev = null === (s = eS.current) || void 0 === s ? void 0 : null === (t = s.getBoundingClientRect()) || void 0 === t ? void 0 : t.width,
                    eM = n.useRef(null);
                n.useLayoutEffect(() => {
                    var e;
                    let t = e_.current,
                        s = null == t ? void 0 : null === (e = t.children) || void 0 === e ? void 0 : e[0];
                    if (null != eS.current && null != s && null != s.children) {
                        let {
                            left: e,
                            top: t
                        } = eS.current.getBoundingClientRect(), a = 0;
                        for (let n of s.children) {
                            let {
                                right: s,
                                top: l,
                                height: r
                            } = n.getBoundingClientRect();
                            if (l - t > r) break;
                            s - e > a && (a = s - e)
                        }
                        eN(a)
                    }
                }, [i.availableTags, eE, ev, K]);
                let eA = I.length > 0 && !R && (S || null != E),
                    eI = !__OVERLAY__ && !y && !R && O && (0 === k.textValue.trim().length || k.textValue.trim() === ep) && 0 === ex.length;
                n.useLayoutEffect(() => {
                    let e = eA || eI;
                    if (!e) return z(0);
                    null != eM.current && z(e ? eM.current.clientHeight : 0)
                }, [z, eA, eI, eM]);
                let eR = e => {
                        (0, q.trackForumTagFilterClicked)({
                            guildId: i.guild_id,
                            channelId: i.id,
                            tagId: e,
                            filterTagIds: Array.from(K),
                            added: !K.has(e),
                            location: {
                                page: eh.AnalyticsPages.GUILD_CHANNEL,
                                section: eh.AnalyticsSections.FORUM_CHANNEL_HEADER,
                                object: eh.AnalyticsObjects.CHANNEL_TAG
                            }
                        }), X.getState().toggleTagFilter(i.id, e)
                    },
                    ey = (0, d.default)({
                        id: "".concat(i.id, "-tags-navigator"),
                        isEnabled: !0,
                        wrap: !0,
                        scrollToStart: ej,
                        scrollToEnd: ej,
                        orientation: c.Orientations.HORIZONTAL
                    }),
                    {
                        role: eb,
                        onFocus: eF,
                        ...eL
                    } = (0, d.useListItem)("forum-channel-header"),
                    eP = n.useRef(null),
                    ew = function() {
                        let e = n.useRef(!1),
                            t = (0, m.useStateFromStores)([p.default], () => p.default.keyboardModeEnabled),
                            s = n.useCallback(t => {
                                e.current = t.shiftKey
                            }, [e]);
                        return n.useLayoutEffect(() => (t ? window.addEventListener("keydown", s) : window.removeEventListener("keydown", s), () => window.removeEventListener("keydown", s)), [t, s]), e
                    }(),
                    eD = n.useCallback(e => {
                        if (eF(e), e.target === ec.current && !ew.current) {
                            var t;
                            null === (t = eP.current) || void 0 === t || t.focus()
                        }
                    }, [eF, ec, ew]);
                return (0, a.jsx)("div", {
                    className: r(eg.card, eg.headerRow, eg.columnsSpan),
                    ref: ec,
                    onFocus: eD,
                    ...eL,
                    style: {
                        ...M,
                        position: "static",
                        height: "auto"
                    },
                    children: (0, a.jsxs)(H.ComponentDispatchGroupProvider, {
                        children: [null != i.guild_id ? (0, a.jsx)(N.default, {
                            className: r(eg.newMemberBanner, {
                                [eg.gridViewBanner]: Y === h.ForumLayout.GRID
                            }),
                            guildId: i.guild_id,
                            channel: i
                        }) : null, (0, a.jsx)("div", {
                            className: r(eg.mainCard, eg.header, {
                                [eg.headerWithMatchingPosts]: eA || eI
                            }),
                            children: (0, a.jsx)(et.default, {
                                parentChannel: i,
                                onChange: eC,
                                isSearchLoading: S,
                                canCreatePost: eu,
                                inputRef: eP
                            })
                        }), (eA || eI) && (0, a.jsxs)("div", {
                            className: eg.matchingPostsRow,
                            ref: eM,
                            children: [eA && (0, a.jsxs)("div", {
                                className: eg.matchingPosts,
                                children: [(0, a.jsx)(g.Heading, {
                                    variant: "text-xs/normal",
                                    color: "text-normal",
                                    children: S ? ef.default.Messages.FORUM_SEARCHING : 0 === E ? ef.default.Messages.FORUM_SEARCH_NO_MATCHING_POSTS : ef.default.Messages.FORUM_SEARCH_MATCHING_POSTS_ALT.format({
                                        numPosts: E,
                                        query: I
                                    })
                                }), !S && (0, a.jsx)(g.Clickable, {
                                    onClick: () => {
                                        (0, q.trackForumSearchCleared)({
                                            guildId: i.guild_id,
                                            channelId: i.id
                                        }), B.default.clearForumSearch(i.id), Z.getState().setName("")
                                    },
                                    children: (0, a.jsx)(g.Text, {
                                        variant: "text-xs/semibold",
                                        color: "text-brand",
                                        className: eg.clear,
                                        children: ef.default.Messages.CLEAR
                                    })
                                })]
                            }), (0, a.jsx)("div", {
                                className: eg.tagsSpacer
                            }), eI ? eu ? (0, a.jsxs)("div", {
                                className: eg.startPostHelp,
                                children: [(0, a.jsx)(g.KeyCombo, {
                                    shortcut: "SHIFT",
                                    className: eg.keyboardShortcut
                                }), (0, a.jsx)(g.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-normal",
                                    children: "+"
                                }), (0, a.jsx)(g.KeyCombo, {
                                    shortcut: "ENTER",
                                    className: eg.keyboardShortcut
                                }), (0, a.jsx)(g.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-normal",
                                    children: ef.default.Messages.FORUM_ENTER_TO_START_POST
                                })]
                            }) : (0, a.jsxs)("div", {
                                className: eg.startPostHelp,
                                children: [(0, a.jsx)(U.default, {
                                    height: 14,
                                    width: 14,
                                    className: eg.warnIcon
                                }), (0, a.jsx)(g.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-normal",
                                    children: ef.default.Messages.FORUM_NO_POST_PERMISSION_HELP
                                })]
                            }) : null]
                        }), (0, a.jsx)(Q.default, {
                            channel: i,
                            onChange: eC
                        }), (0, a.jsxs)("div", {
                            className: eg.tagsContainer,
                            ref: eS,
                            children: [(0, a.jsx)(eO, {
                                channel: i
                            }), i.availableTags.length > 0 ? (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)("div", {
                                    className: eg.divider
                                }), (0, a.jsx)("div", {
                                    className: eg.tagList,
                                    ref: e_,
                                    children: (0, a.jsx)(d.ListNavigatorProvider, {
                                        navigator: ey,
                                        children: (0, a.jsx)(d.ListNavigatorContainer, {
                                            children: e => {
                                                let {
                                                    ref: t,
                                                    ...s
                                                } = e;
                                                return (0, a.jsx)("div", {
                                                    className: eg.tagListInner,
                                                    ref: t,
                                                    ...s,
                                                    children: i.availableTags.map(e => (0, a.jsx)(el.default, {
                                                        className: eg.tag,
                                                        tag: e,
                                                        onClick: () => eR(e.id),
                                                        selected: K.has(e.id)
                                                    }, e.id))
                                                })
                                            }
                                        })
                                    })
                                }), (0, a.jsx)(g.Popout, {
                                    renderPopout: e => {
                                        let {
                                            closePopout: t,
                                            setPopoutRef: s
                                        } = e;
                                        return (0, a.jsx)(eo.default, {
                                            channel: i,
                                            closePopout: t,
                                            setPopoutRef: s
                                        })
                                    },
                                    position: "bottom",
                                    align: "right",
                                    children: (e, t) => {
                                        let {
                                            isShown: s
                                        } = t;
                                        return (0, a.jsxs)(g.Button, {
                                            ...e,
                                            size: g.Button.Sizes.MIN,
                                            color: g.Button.Colors.CUSTOM,
                                            className: r(eg.tagsButton, {
                                                [eg.tagsButtonWithCount]: K.size > 0
                                            }),
                                            style: {
                                                left: eT
                                            },
                                            innerClassName: eg.tagsButtonInner,
                                            "aria-label": K.size > 0 ? ef.default.Messages.FORUM_TAG_SEE_MORE_A11Y_LABEL : ef.default.Messages.FORUM_TAG_ALL_A11Y_LABEL,
                                            children: [K.size > 0 ? (0, a.jsx)("div", {
                                                className: eg.countContainer,
                                                children: (0, a.jsx)(g.Text, {
                                                    className: eg.countText,
                                                    color: "none",
                                                    variant: "text-xs/medium",
                                                    children: K.size
                                                })
                                            }) : ef.default.Messages.FORUM_TAG_ALL, s ? (0, a.jsx)(D.default, {
                                                width: 20
                                            }) : (0, a.jsx)(w.default, {
                                                width: 20
                                            })]
                                        })
                                    }
                                }), (0, a.jsxs)(g.Button, {
                                    size: g.Button.Sizes.MIN,
                                    color: g.Button.Colors.CUSTOM,
                                    className: r(eg.tagsButton, eg.tagsButtonPlaceholder),
                                    innerClassName: eg.tagsButtonInner,
                                    "aria-label": ef.default.Messages.FORUM_TAG_SEE_MORE_A11Y_LABEL,
                                    children: [K.size > 0 ? (0, a.jsx)("div", {
                                        className: eg.countContainer,
                                        children: (0, a.jsx)(g.Text, {
                                            className: eg.countText,
                                            color: "none",
                                            variant: "text-xs/medium",
                                            children: K.size
                                        })
                                    }) : null, (0, a.jsx)(D.default, {
                                        width: 24
                                    })]
                                })]
                            }) : null]
                        }), v, es && !ed && (0, a.jsx)(_.default, {
                            contentTypes: [f.DismissibleContent.FORUM_CHANNEL_HELPER_CARD],
                            children: e => {
                                let {
                                    visibleContent: t,
                                    markAsDismissed: s
                                } = e;
                                return t === f.DismissibleContent.FORUM_CHANNEL_HELPER_CARD ? (0, a.jsx)(J.default, {
                                    onDismiss: s
                                }) : null
                            }
                        })]
                    })
                }, "create-form")
            }

            function eO(e) {
                let {
                    channel: t
                } = e, s = t.isMediaChannel();
                return (0, a.jsx)(g.Popout, {
                    renderPopout: e => {
                        let {
                            closePopout: s
                        } = e;
                        return (0, a.jsx)(en.default, {
                            channel: t,
                            closePopout: s
                        })
                    },
                    position: "bottom",
                    align: "left",
                    children: (e, t) => {
                        let {
                            isShown: n
                        } = t;
                        return (0, a.jsxs)(g.Button, {
                            ...e,
                            size: g.Button.Sizes.MIN,
                            color: g.Button.Colors.CUSTOM,
                            className: eg.sortDropdown,
                            innerClassName: eg.sortDropdownInner,
                            "aria-label": s ? ef.default.Messages.MEDIA_CHANNEL_SORT : ef.default.Messages.FORUM_CHANNEL_SORT_AND_VIEW,
                            children: [(0, a.jsx)(k.default, {}), (0, a.jsx)(g.Text, {
                                className: eg.sortDropdownText,
                                variant: "text-sm/medium",
                                color: "interactive-normal",
                                children: s ? ef.default.Messages.MEDIA_CHANNEL_SORT : ef.default.Messages.FORUM_CHANNEL_SORT_AND_VIEW
                            }), n ? (0, a.jsx)(D.default, {
                                width: 20
                            }) : (0, a.jsx)(w.default, {
                                width: 20
                            })]
                        })
                    }
                })
            }
        },
        131600: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return eg
                }
            });
            var a = s("920040"),
                n = s("773670"),
                l = s("575482"),
                r = s.n(l),
                i = s("377849"),
                o = s.n(i),
                u = s("623829"),
                d = s("710984"),
                c = s("754013"),
                h = s("500947"),
                m = s("498225"),
                f = s("77078"),
                g = s("18054"),
                C = s("581583"),
                x = s("206230"),
                p = s("656038"),
                S = s("454273"),
                _ = s("781555"),
                T = s("305961"),
                N = s("36694"),
                E = s("945330"),
                v = s("717018"),
                M = s("673078"),
                A = s("68238"),
                I = s("904276"),
                j = s("772280"),
                R = s("423487"),
                O = s("956089"),
                y = s("659500"),
                b = s("526812"),
                F = s("404607"),
                L = s("713955"),
                P = s("339792"),
                w = s("154695"),
                D = s("867965"),
                k = s("258039"),
                U = s("729608"),
                H = s("578198"),
                G = s("953371"),
                B = s("49111"),
                z = s("782340"),
                V = s("314653");
            let W = {
                    width: 28,
                    height: 28
                },
                K = {
                    width: 20,
                    height: 20,
                    borderRadius: 10
                },
                Y = e => {
                    (0, D.trackForumOnboardingClicked)({
                        onboardingCTA: e
                    })
                };
            class q {
                addStep(e) {
                    ++this.currentIndex, this.steps.push({
                        index: this.currentIndex,
                        ...e
                    }), e.isDone && this.completedSteps++
                }
                getSteps() {
                    return this.steps
                }
                isAllDone() {
                    return this.steps.every(e => e.isDone)
                }
                constructor() {
                    this.currentIndex = 0, this.steps = [], this.completedSteps = 0
                }
            }
            let Z = (e, t, n) => {
                    let l = (0, p.default)(t) ? c.default.combine(B.Permissions.VIEW_CHANNEL, B.Permissions.SEND_MESSAGES) : B.Permissions.SEND_MESSAGES,
                        r = null != e ? (0, L.getAllExistingRolesWithPermission)(e, t, l).filter(s => t.permissionOverwrites.hasOwnProperty(s.id) || (0, S.isEveryoneRoleId)(e.id, s.id)) : [],
                        i = r.length > 0,
                        o = r.some(t => (0, S.isEveryoneRoleId)(e.id, t.id));
                    return {
                        name: z.default.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_PERMISSION_TITLE,
                        description: z.default.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_PERMISSION_DESCRIPTION,
                        isDone: i && o,
                        shouldWarn: i && !o,
                        children: i ? (0, a.jsx)(eu, {
                            guild: e,
                            roles: r
                        }) : null,
                        clickHandler: () => {
                            Y(G.ForumOnboardingCTAs.PERMISSIONS), (0, f.openModalLazy)(async () => {
                                let {
                                    default: i
                                } = await s.el("840489").then(s.bind(s, "840489"));
                                return n(!0), s => (0, a.jsx)(i, {
                                    ...s,
                                    channel: t,
                                    guild: e,
                                    permission: l,
                                    currentSelectedRoles: r
                                })
                            }, {
                                modalKey: "SEND_MESSAGE_ROLE_PERMISSION_FIX_MODAL_KEY",
                                onCloseRequest: B.NOOP_NULL,
                                onCloseCallback: () => n(!1)
                            })
                        }
                    }
                },
                X = e => {
                    let t = null != e.topic && e.topic.length > 0;
                    return {
                        name: z.default.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_GUIDELINES_TITLE,
                        description: z.default.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_GUIDELINES_DESCRIPTION,
                        clickHandler: () => {
                            Y(G.ForumOnboardingCTAs.GUIDELINES), g.default.open(e.id, void 0, B.ChannelSettingsSubsections.TOPIC)
                        },
                        isDone: t
                    }
                },
                Q = e => {
                    let t = null != e.availableTags && e.availableTags.length > 0;
                    return {
                        name: z.default.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_TAGS_TITLE,
                        description: z.default.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_TAGS_DESCRIPTION,
                        clickHandler: () => {
                            Y(G.ForumOnboardingCTAs.TAGS), g.default.open(e.id), (0, f.openModalLazy)(async () => {
                                let {
                                    default: t
                                } = await s.el("987034").then(s.bind(s, "987034"));
                                return s => (0, a.jsx)(t, {
                                    ...s,
                                    channelId: e.id,
                                    guildId: e.guild_id
                                })
                            })
                        },
                        isDone: t
                    }
                },
                J = e => {
                    let t = null != e.defaultReactionEmoji;
                    return {
                        name: z.default.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_DEFAULT_REACTION_TITLE,
                        description: z.default.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_DEFAULT_REACTION_DESCRIPTION,
                        clickHandler: () => {
                            Y(G.ForumOnboardingCTAs.DEFAULT_REACTION), (0, f.openModalLazy)(async () => {
                                let {
                                    default: t
                                } = await s.el("456552").then(s.bind(s, "456552"));
                                return s => (0, a.jsx)(t, {
                                    ...s,
                                    channel: e
                                })
                            })
                        },
                        isDone: t
                    }
                },
                $ = (e, t, n) => ({
                    name: z.default.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_FIRST_POST_TITLE,
                    description: t ? z.default.Messages.MEDIA_CHANNEL_ONBOARDING_CHECKLIST_FIRST_POST_DESCRIPTION : z.default.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_FIRST_POST_DESCRIPTION.format({
                        onClick: e => {
                            null != n && (e.preventDefault(), e.stopPropagation(), (0, D.trackForumUpsellModalViewed)(), (0, f.openModalLazy)(async () => {
                                let {
                                    default: e
                                } = await s.el("135430").then(s.bind(s, "135430"));
                                return t => (0, a.jsx)(e, {
                                    ...t,
                                    guildId: n
                                })
                            }))
                        }
                    }),
                    clickHandler: () => {
                        Y(G.ForumOnboardingCTAs.CREATE_POST), y.ComponentDispatch.dispatch(B.ComponentActions.FOCUS_COMPOSER_TITLE)
                    },
                    isDone: e
                }),
                ee = (e, t, s, a) => n.useMemo(() => {
                    let n = new q,
                        l = (null == t ? void 0 : t.isMediaChannel()) === !0;
                    return null != e && null != t && !l && n.addStep(Z(e, t, a)), !l && n.addStep(X(t)), n.addStep(Q(t)), n.addStep(J(t)), n.addStep($(s, l, null == e ? void 0 : e.id)), n
                }, [t, e, s, a]),
                et = (e, t) => n.useCallback(() => (t(!1), F.default.hideAdminOnboarding(e, !0)), [e, t]),
                es = e => {
                    let t = h.default.extractTimestamp(e),
                        s = o().isBefore(o(t).add(o.duration(15, "days")));
                    return s
                },
                ea = (e, t, s) => {
                    n.useEffect(() => {
                        !e && s(!t)
                    }, [e, s, t])
                },
                en = (e, t, s, a) => {
                    let l = n.useRef(0);
                    n.useEffect(() => (s || !e || t ? clearTimeout(l.current) : l.current = setTimeout(() => {
                        a()
                    }, 6e4), () => clearTimeout(l.current)), [e, t, a, s])
                },
                el = (e, t, s) => {
                    n.useEffect(() => {
                        e && t && s()
                    }, [])
                },
                er = e => {
                    let {
                        isAllDone: t,
                        isVisible: s,
                        canManageChannel: a,
                        guild: l,
                        channel: r
                    } = e, i = n.useCallback(() => {
                        y.ComponentDispatch.dispatch(B.ComponentActions.REMEASURE_TARGET)
                    }, []);
                    n.useEffect(() => {
                        i()
                    }, [i, t, s, a, null == l ? void 0 : l.roles, r.id, r.permissionOverwrites])
                },
                ei = () => {
                    let [e, t] = n.useState(!0), s = (0, m.useStateFromStores)([x.default], () => x.default.useReducedMotion), a = (0, u.useTransition)(e, {
                        keys: e => e ? "shown" : "hidden",
                        config: ed,
                        from: {
                            opacity: 0
                        },
                        enter: {
                            opacity: 1
                        },
                        leave: {
                            opacity: 0
                        },
                        unique: !0,
                        immediate: s
                    });
                    return {
                        transitions: a,
                        setVisible: t
                    }
                },
                eo = e => {
                    let t = (0, m.useStateFromStores)([x.default], () => x.default.useReducedMotion);
                    return (0, u.useTransition)(e, {
                        from: {
                            maxHeight: 0
                        },
                        enter: {
                            maxHeight: 500
                        },
                        leave: {
                            maxHeight: 0
                        },
                        config: {
                            duration: 200
                        },
                        immediate: t
                    })
                },
                eu = e => {
                    let {
                        guild: t,
                        roles: s
                    } = e;
                    return (0, a.jsx)("div", {
                        className: V.rolesList,
                        "aria-label": z.default.Messages.ROLES_LIST.format({
                            numRoles: s.length
                        }),
                        children: s.map(e => (0, a.jsx)(C.MemberRole, {
                            role: e,
                            canRemove: !1,
                            onRemove: B.NOOP_NULL,
                            guildId: t.id,
                            className: V.rolePill
                        }, e.id))
                    })
                },
                ed = {
                    mass: 1,
                    tension: 250,
                    friction: 18,
                    clamp: !0
                },
                ec = e => {
                    let {
                        guild: t,
                        channel: s,
                        hasAnyThread: a,
                        handleHide: l
                    } = e, [r, i] = n.useState(!1), o = (0, k.isOnboardingDismissed)(s.id), u = (0, m.useStateFromStores)([b.default], () => b.default.hasHidden(s.id)), d = ee(t, s, a, i), c = d.isAllDone(), h = o || u || !es(s.id);
                    return en(c, h, r, l), {
                        onboardingSteps: d,
                        isHidden: u,
                        isDismissed: o,
                        isAllDone: c
                    }
                },
                eh = () => n.useCallback(e => {
                    var t;
                    null === (t = e.clickHandler) || void 0 === t || t.call(e)
                }, []),
                em = e => {
                    let {
                        handleHide: t
                    } = e;
                    return (0, a.jsx)(f.Clickable, {
                        onClick: t,
                        className: V.closeButton,
                        "aria-label": z.default.Messages.DISMISS,
                        children: (0, a.jsx)(E.default, {
                            className: V.closeIcon
                        })
                    })
                },
                ef = e => {
                    let {
                        expanded: t,
                        onClick: s
                    } = e;
                    return (0, a.jsx)(f.Clickable, {
                        onClick: s,
                        className: V.closeButton,
                        "aria-label": t ? z.default.Messages.COLLAPSE : z.default.Messages.EXPAND,
                        children: t ? (0, a.jsx)(v.default, {
                            className: V.closeIcon
                        }) : (0, a.jsx)(M.default, {
                            className: V.closeIcon
                        })
                    })
                };
            var eg = e => {
                let {
                    hasAnyThread: t,
                    channel: s
                } = e, {
                    onboardingExpanded: l
                } = (0, H.useForumPostComposerStore)(e => {
                    let {
                        onboardingExpanded: t
                    } = e;
                    return {
                        onboardingExpanded: t
                    }
                }), {
                    tagFilter: i
                } = (0, P.useForumChannelStore)(s.id), o = (0, m.useStateFromStores)([T.default], () => T.default.getGuild(s.getGuildId())), c = (0, w.useCanManageChannel)(s), {
                    transitions: h,
                    setVisible: g
                } = ei(), C = eo(l), x = eh(), p = et(s.id, g), {
                    onboardingSteps: S,
                    isDismissed: E,
                    isHidden: v,
                    isAllDone: M
                } = ec({
                    guild: o,
                    channel: s,
                    hasAnyThread: t,
                    handleHide: p
                }), y = !v && !E, b = (0, H.useForumPostComposerStoreApi)(), F = s.isMediaChannel(), L = e => b.getState().setOnboardingExpanded(e);
                return (el(M, y, p), er({
                    isAllDone: M,
                    isVisible: y,
                    canManageChannel: c,
                    guild: o,
                    channel: s
                }), ea(E, v, g), n.useEffect(() => {
                    (!t || !y) && L(!0)
                }, []), null == o) ? null : y && c ? F ? t ? null : (0, a.jsx)(_.default, {
                    channel: s
                }) : (0, a.jsx)(a.Fragment, {
                    children: h((e, t) => t ? (0, a.jsx)(u.animated.div, {
                        style: e,
                        className: V.container,
                        children: (0, a.jsxs)("div", {
                            className: V.wrapper,
                            children: [(0, a.jsx)("div", {
                                className: V.headerRow,
                                children: (0, a.jsxs)(f.HeadingLevel, {
                                    component: (0, a.jsx)(f.Heading, {
                                        variant: "heading-md/semibold",
                                        children: z.default.Messages.GET_STARTED
                                    }),
                                    children: [(0, a.jsx)(f.Heading, {
                                        variant: "heading-md/medium",
                                        className: V.header,
                                        children: z.default.Messages.FORUM_CHANNEL_ONBOARDING_COMPLETED_COUNT.format({
                                            numCompleted: S.completedSteps.toString(),
                                            numSteps: S.steps.length.toString()
                                        })
                                    }), (0, a.jsxs)(f.Text, {
                                        variant: "text-xs/normal",
                                        className: V.visibilityInfo,
                                        children: [(0, a.jsx)(A.default, {
                                            width: 12,
                                            height: 12,
                                            className: V.icon
                                        }), z.default.Messages.FORUM_CHANNEL_ONBOARDING_VISIBILITY]
                                    }), (0, a.jsx)(ef, {
                                        expanded: l,
                                        onClick: () => L(!l)
                                    }), (0, a.jsx)(em, {
                                        handleHide: p
                                    })]
                                })
                            }), C((e, t) => t ? (0, a.jsx)(u.animated.div, {
                                style: e,
                                className: V.listContainer,
                                children: (0, a.jsx)("ol", {
                                    className: V.checklist,
                                    children: S.getSteps().map(e => (0, a.jsxs)(f.Clickable, {
                                        tag: "li",
                                        "aria-label": e.name,
                                        onClick: () => x(e),
                                        className: r(V.stepContainer, {
                                            [V.completed]: e.isDone
                                        }),
                                        children: [e.shouldWarn ? (0, a.jsx)(R.default, {
                                            color: d.default.STATUS_DANGER,
                                            className: V.stepStatus
                                        }) : e.isDone ? (0, a.jsx)(O.IconBadge, {
                                            color: d.default.STATUS_POSITIVE_BACKGROUND,
                                            icon: N.default,
                                            style: K,
                                            className: V.stepStatus
                                        }) : (0, a.jsx)(O.IconBadge, {
                                            disableColor: !0,
                                            icon: I.default,
                                            style: W,
                                            className: r(V.stepStatus, V.completed)
                                        }), (0, a.jsxs)("div", {
                                            className: V.step,
                                            children: [(0, a.jsx)(f.Text, {
                                                variant: "text-md/medium",
                                                color: e.isDone ? "header-secondary" : "header-primary",
                                                className: V.stepName,
                                                children: e.name
                                            }), (0, a.jsx)(f.Text, {
                                                variant: "text-sm/normal",
                                                color: "header-secondary",
                                                className: V.stepDescription,
                                                children: e.description
                                            }), e.children]
                                        }), (0, a.jsx)(j.default, {
                                            width: 12,
                                            className: V.stepStatus
                                        })]
                                    }, "onboard-step-".concat(e.index)))
                                })
                            }) : null)]
                        })
                    }) : null)
                }) : t ? null : (0, a.jsx)(U.default, {
                    channelName: s.name,
                    guildId: s.guild_id,
                    tagFilter: i,
                    channel: s
                })
            }
        },
        729608: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return C
                }
            });
            var a = s("920040"),
                n = s("773670"),
                l = s("77078"),
                r = s("300322"),
                i = s("660074"),
                o = s("543289"),
                u = s("772280"),
                d = s("659500"),
                c = s("154695"),
                h = s("867965"),
                m = s("49111"),
                f = s("782340"),
                g = s("838837");

            function C(e) {
                let {
                    channelName: t,
                    guildId: C,
                    tagFilter: x,
                    channel: p
                } = e, S = (0, c.useCanManageChannel)(p), _ = (0, r.useCanStartThread)(p), T = p.isMediaChannel(), N = n.useCallback(() => {
                    (0, h.trackForumUpsellModalViewed)(), (0, l.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await s.el("135430").then(s.bind(s, "135430"));
                        return t => (0, a.jsx)(e, {
                            ...t,
                            guildId: C
                        })
                    })
                }, [C]), E = x.size > 0, v = _ || S, M = !E && S && !T, A = n.useCallback(() => M ? N() : _ ? void d.ComponentDispatch.dispatch(m.ComponentActions.FOCUS_COMPOSER_TITLE) : (0, m.NOOP_NULL)(), [N, M, _]);
                return (0, a.jsxs)("div", {
                    className: g.container,
                    children: [(0, a.jsxs)("div", {
                        className: g.iconContainer,
                        children: [(0, a.jsx)("div", {
                            className: g.icon,
                            children: (0, a.jsx)(i.default, {
                                width: 30,
                                height: 30
                            })
                        }), (0, a.jsx)(o.default, {
                            className: g.stars
                        })]
                    }), (0, a.jsx)(l.Heading, {
                        className: g.header,
                        variant: "heading-md/semibold",
                        children: E ? f.default.Messages.FORUM_NO_POST_WITH_TAG_TITLE.format({
                            numTags: x.size
                        }) : f.default.Messages.FORUM_EMPTY_STATE_TITLE
                    }), (0, a.jsx)(l.Text, {
                        color: "header-secondary",
                        variant: "text-sm/normal",
                        children: E ? f.default.Messages.FORUM_NO_POST_WITH_TAG_DESCRIPTION.format({
                            numTags: x.size
                        }) : f.default.Messages.FORUM_EMPTY_STATE_DESCRIPTION.format({
                            channelName: t
                        })
                    }), v && (0, a.jsxs)(l.Button, {
                        look: l.Button.Looks.BLANK,
                        size: l.Button.Sizes.MIN,
                        color: l.Button.Colors.GREEN,
                        onClick: A,
                        className: g.cta,
                        innerClassName: g.button,
                        children: [M ? f.default.Messages.FORUM_EMPTY_STATE_CTA : f.default.Messages.FORUM_EMPTY_STATE_CREATE_POST_CTA, (0, a.jsx)(u.default, {
                            width: 12
                        })]
                    })]
                })
            }
        },
        912066: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return E
                }
            });
            var a = s("920040"),
                n = s("773670"),
                l = s("575482"),
                r = s.n(l),
                i = s("623829"),
                o = s("498225"),
                u = s("77078"),
                d = s("18054"),
                c = s("206230"),
                h = s("367376"),
                m = s("213523"),
                f = s("945330"),
                g = s("673078"),
                C = s("987772"),
                x = s("154695"),
                p = s("578198"),
                S = s("49111"),
                _ = s("782340"),
                T = s("3390"),
                N = s("422137"),
                E = n.memo(function(e) {
                    let {
                        channel: t,
                        onChange: l
                    } = e, E = (0, p.useForumPostComposerStoreApi)(), {
                        guidelinesOpen: v
                    } = (0, p.useForumPostComposerStore)(e => {
                        let {
                            guidelinesOpen: t
                        } = e;
                        return {
                            guidelinesOpen: t
                        }
                    }), M = (0, x.useCanManageChannel)(t), [A, I] = n.useState(!1), j = n.useCallback(e => {
                        if (null == e) return;
                        let t = e.clientHeight >= 220;
                        t !== A && I(t)
                    }, [A]);
                    n.useLayoutEffect(() => {
                        setTimeout(l, 350)
                    }, [v, l]);
                    let R = (0, o.useStateFromStores)([c.default], () => c.default.useReducedMotion),
                        [O, y] = n.useState(!v),
                        b = (0, i.useSpring)({
                            opacity: v ? 1 : 0,
                            maxHeight: v ? 500 : 0,
                            config: {
                                duration: 300
                            },
                            immediate: R,
                            onRest: () => y(!v)
                        }),
                        F = null != t.topic && t.topic.length > 0;
                    return F ? (0, a.jsx)(i.animated.div, {
                        style: b,
                        className: O ? T.hiddenVisually : void 0,
                        children: (0, a.jsxs)("div", {
                            className: T.container,
                            children: [(0, a.jsxs)("div", {
                                className: T.headerContainer,
                                children: [(0, a.jsxs)(u.Heading, {
                                    variant: "heading-lg/semibold",
                                    className: T.guidelinesHeader,
                                    children: [(0, a.jsx)(m.default, {
                                        width: 20,
                                        height: 20
                                    }), _.default.Messages.FORUM_POST_GUIDELINES_TITLE, M && (0, a.jsx)(u.Clickable, {
                                        onClick: () => {
                                            d.default.open(t.id, void 0, S.ChannelSettingsSubsections.TOPIC)
                                        },
                                        tag: "span",
                                        className: T.clickable,
                                        children: (0, a.jsx)(C.default, {
                                            width: 16,
                                            height: 16
                                        })
                                    })]
                                }), (0, a.jsx)(u.Clickable, {
                                    "aria-label": _.default.Messages.CLOSE,
                                    className: T.clickable,
                                    onClick: () => {
                                        E.getState().setGuidelinesOpen(!1)
                                    },
                                    children: (0, a.jsx)(f.default, {
                                        width: 16,
                                        height: 16
                                    })
                                })]
                            }), (0, a.jsxs)("div", {
                                className: T.descriptionContainer,
                                children: [(0, a.jsx)(u.Text, {
                                    selectable: !0,
                                    variant: "text-sm/normal",
                                    color: "header-secondary",
                                    style: {
                                        maxHeight: 220
                                    },
                                    className: r(T.guidelines, N.markup),
                                    children: (0, a.jsx)("div", {
                                        ref: j,
                                        children: h.default.parseForumPostGuidelines(t.topic, !0, {
                                            channelId: t.id,
                                            allowHeading: !0,
                                            allowList: !0
                                        })
                                    })
                                }), A && (0, a.jsxs)("div", {
                                    className: T.showMore,
                                    children: [(0, a.jsx)("div", {
                                        className: T.gradient
                                    }), (0, a.jsx)("div", {
                                        className: T.linkContainer,
                                        children: (0, a.jsx)(u.Clickable, {
                                            className: T.showMoreLink,
                                            onClick: () => {
                                                (0, u.openModalLazy)(async () => {
                                                    let {
                                                        default: e
                                                    } = await s.el("553415").then(s.bind(s, "553415"));
                                                    return s => (0, a.jsx)(e, {
                                                        ...s,
                                                        channel: t
                                                    })
                                                })
                                            },
                                            children: (0, a.jsxs)(u.Text, {
                                                variant: "text-sm/semibold",
                                                color: "text-brand",
                                                className: T.showMoreText,
                                                children: [_.default.Messages.FORUM_CHANNEL_TOPIC_VIEW_ALL, (0, a.jsx)(g.default, {
                                                    className: T.showMoreIcon
                                                })]
                                            })
                                        })
                                    })]
                                })]
                            })]
                        })
                    }) : null
                })
        },
        657927: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return S
                }
            });
            var a = s("920040");
            s("773670");
            var n = s("575482"),
                l = s.n(n),
                r = s("77078"),
                i = s("945330"),
                o = s("153769"),
                u = s("266926"),
                d = s("867965"),
                c = s("152637"),
                h = s("953371"),
                m = s("994428"),
                f = s("782340"),
                g = s("612023"),
                C = s("325195"),
                x = s("645583"),
                p = s("714358");

            function S(e) {
                let {
                    onDismiss: t
                } = e;
                return (0, a.jsxs)(r.Clickable, {
                    onClick: () => {
                        open(h.COMMUNITY_PORTAL_FORUM_PAGE), (0, d.trackForumHelperCardClicked)({
                            readGuideCta: !0
                        })
                    },
                    className: l(x.container, C.container, g.mainCard),
                    children: [(0, a.jsxs)("div", {
                        className: C.inline,
                        children: [(0, a.jsxs)("div", {
                            className: C.author,
                            children: [(0, a.jsx)(o.default, {
                                className: C.discordIcon
                            }), (0, a.jsx)(r.Text, {
                                variant: "text-sm/semibold",
                                color: "header-primary",
                                children: f.default.Messages.DISCORD_NAME
                            }), (0, a.jsxs)("div", {
                                className: C.notice,
                                children: [(0, a.jsx)(u.default, {
                                    className: C.infoIcon
                                }), (0, a.jsx)(r.Text, {
                                    variant: "text-sm/normal",
                                    color: "header-secondary",
                                    children: f.default.Messages.FORUM_HELPER_CARD_NOTICE
                                })]
                            })]
                        }), (0, a.jsx)(r.Clickable, {
                            onClick: e => {
                                e.stopPropagation(), t(m.ContentDismissActionType.DISMISS), (0, d.trackForumHelperCardClicked)({
                                    readGuideCta: !1
                                })
                            },
                            children: (0, a.jsx)(i.default, {
                                className: C.closeIcon,
                                width: 16,
                                height: 16
                            })
                        })]
                    }), (0, a.jsx)("hr", {
                        className: C.separator
                    }), (0, a.jsxs)("div", {
                        className: C.inline,
                        children: [(0, a.jsxs)("div", {
                            children: [(0, a.jsx)(r.Heading, {
                                className: l(x.channelName, C.title),
                                variant: "heading-lg/semibold",
                                color: "header-primary",
                                children: f.default.Messages.FORUM_HELPER_CARD_TITLE
                            }), (0, a.jsx)(r.Text, {
                                variant: "text-sm/normal",
                                color: "header-secondary",
                                children: f.default.Messages.FORUM_HELPER_CARD_BODY
                            })]
                        }), (0, a.jsx)("img", {
                            src: p,
                            alt: f.default.Messages.FORUM_HELPER_CARD_ALT_TEXT,
                            width: c.MAX_THUMBNAIL_WIDTH,
                            height: c.MAX_THUMBNAIL_WIDTH
                        })]
                    })]
                })
            }
        },
        1999: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                ComposerUploadButton: function() {
                    return j
                },
                default: function() {
                    return O
                }
            });
            var a = s("920040"),
                n = s("773670"),
                l = s("161179"),
                r = s.n(l),
                i = s("623829"),
                o = s("498225"),
                u = s("77078"),
                d = s("371642"),
                c = s("206230"),
                h = s("850391"),
                m = s("271972"),
                f = s("761354"),
                g = s("42203"),
                C = s("474643"),
                x = s("585722"),
                p = s("840817"),
                S = s("659500"),
                _ = s("412861"),
                T = s("867965"),
                N = s("49111"),
                E = s("516587");
            let v = {
                    scale: .95,
                    opacity: 0
                },
                M = {
                    scale: 1,
                    opacity: 1
                },
                A = {
                    scale: 1,
                    opacity: 1
                },
                I = {
                    tension: 2400,
                    friction: 52
                };

            function j(e) {
                let {
                    channelId: t,
                    onClick: s,
                    onClose: l,
                    onMouseEnter: i
                } = e, c = n.useRef(null), h = (0, o.useStateFromStores)([g.default], () => g.default.getChannel(t), [t]);
                return r(null != h, "Forum Channel is null"), (0, a.jsxs)(u.Clickable, {
                    className: E.uploadInput,
                    onMouseEnter: i,
                    onClick: () => {
                        (0, T.trackForumChannelMediaUploaderClicked)({
                            isMobile: !1
                        }), null == s || s()
                    },
                    onKeyPress: e => {
                        if ("Enter" === e.key) {
                            var t;
                            null === (t = c.current) || void 0 === t || t.activateUploadDialogue(), (0, T.trackForumChannelMediaUploaderClicked)({
                                isMobile: !1
                            })
                        }
                    },
                    children: [(0, a.jsx)(d.default, {
                        className: E.fileInput,
                        ref: c,
                        onChange: e => {
                            null == l || l(), (0, _.promptToUpload)(e.currentTarget.files, h, C.DraftType.FirstThreadMessage, {
                                requireConfirm: !0
                            }), S.ComponentDispatch.dispatch(N.ComponentActions.TEXTAREA_FOCUS), e.currentTarget.value = null
                        },
                        multiple: h.rateLimitPerUser <= 0,
                        tabIndex: -1,
                        "aria-hidden": !0
                    }), (0, a.jsx)(p.default, {
                        width: 28,
                        height: 28,
                        className: E.uploadIcon
                    })]
                })
            }

            function R(e) {
                let {
                    channelId: t,
                    closePopout: s
                } = e, [l, r] = n.useState(!1), {
                    reducedMotion: d
                } = n.useContext(u.AccessibilityPreferencesContext), g = (0, i.useSpring)({
                    from: d.enabled ? M : v,
                    to: A,
                    config: I
                }), C = (0, o.useStateFromStores)([c.default], () => c.default.keyboardModeEnabled), p = (0, o.useStateFromStores)([x.default], () => x.default.getUploads(t, h.ChatInputTypes.CREATE_FORUM_POST.drafts.type));
                return (0, a.jsx)(i.animated.div, {
                    className: E.popoutContainer,
                    onMouseLeave: () => {
                        !l && s()
                    },
                    style: g,
                    children: (0, a.jsxs)(u.ScrollerThin, {
                        orientation: "horizontal",
                        className: E.popout,
                        paddingFix: !1,
                        fade: !0,
                        children: [(0, a.jsx)(j, {
                            channelId: t,
                            onClick: () => {
                                r(!0)
                            },
                            onClose: () => {
                                r(!1), s()
                            }
                        }), (0, a.jsx)("div", {
                            className: E.uploads,
                            children: p.map(e => (0, a.jsx)(f.default, {
                                channelId: t,
                                draftType: h.ChatInputTypes.CREATE_FORUM_POST.drafts.type,
                                upload: e,
                                keyboardModeEnabled: C,
                                hideFileName: !0,
                                size: m.AttachmentListItemSizes.SMALL
                            }, e.id))
                        })]
                    })
                })
            }

            function O(e) {
                let {
                    channelId: t
                } = e, [s, l] = n.useState(!1), r = (0, o.useStateFromStores)([x.default], () => x.default.getUploads(t, h.ChatInputTypes.CREATE_FORUM_POST.drafts.type)), i = r.length, u = i > 0;
                n.useEffect(() => {
                    s && !u && l(!1)
                }, [s, u]);
                let d = () => {
                    u && l(!0)
                };
                return (0, a.jsxs)("div", {
                    className: E.container,
                    children: [u ? (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(f.UploadIcon, {
                            upload: r[0],
                            size: m.AttachmentListItemSizes.SMALL,
                            onMouseEnter: d
                        }), !s && (0, a.jsx)("div", {
                            className: E.badge,
                            children: i
                        })]
                    }) : (0, a.jsx)(j, {
                        onMouseEnter: d,
                        channelId: t
                    }), s && (0, a.jsx)(R, {
                        channelId: t,
                        closePopout: () => {
                            l(!1)
                        }
                    })]
                })
            }
        },
        530474: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return ei
                }
            });
            var a = s("920040"),
                n = s("773670"),
                l = s("575482"),
                r = s.n(l),
                i = s("161179"),
                o = s.n(i),
                u = s("47370"),
                d = s("947980"),
                c = s("756823"),
                h = s("498225"),
                m = s("77078"),
                f = s("295426"),
                g = s("81594"),
                C = s("850391"),
                x = s("740483"),
                p = s("681060"),
                S = s("830618"),
                _ = s("939563"),
                T = s("236003"),
                N = s("549558"),
                E = s("884351"),
                v = s("328511"),
                M = s("467094"),
                A = s("24337"),
                I = s("967241"),
                j = s("517141"),
                R = s("474643"),
                O = s("957255"),
                y = s("401848"),
                b = s("585722"),
                F = s("697218"),
                L = s("837899"),
                P = s("213523"),
                w = s("381546"),
                D = s("660074"),
                k = s("987772"),
                U = s("229915"),
                H = s("547896"),
                G = s("378765"),
                B = s("718422"),
                z = s("412861"),
                V = s("119161"),
                W = s("404607"),
                K = s("706065"),
                Y = s("154695"),
                q = s("867965"),
                Z = s("532308"),
                X = s("1999"),
                Q = s("578198"),
                J = s("90625"),
                $ = s("337113"),
                ee = s("589455"),
                et = s("953371"),
                es = s("49111"),
                ea = s("724210"),
                en = s("782340"),
                el = s("94480");
            let er = C.ChatInputTypes.CREATE_FORUM_POST;

            function ei(e) {
                let {
                    parentChannel: t,
                    isSearchLoading: s,
                    onChange: l,
                    canCreatePost: i,
                    inputRef: o
                } = e, {
                    textAreaState: d,
                    formOpen: c
                } = (0, Q.useForumPostComposerStore)(e => {
                    let {
                        textAreaState: t,
                        formOpen: s
                    } = e;
                    return {
                        textAreaState: t,
                        formOpen: s
                    }
                }, u.default), [f, g] = n.useState(null), C = n.useContext(G.ComponentDispatchGroupContext), x = n.useCallback(() => {
                    C.bumpDispatchPriority()
                }, [C]), p = (0, h.useStateFromStores)([O.default], () => O.default.can(es.Permissions.ATTACH_FILES, t)), S = (0, h.useStateFromStoresArray)([b.default], () => b.default.getUploads(t.id, R.DraftType.FirstThreadMessage)), _ = c && p && i, A = (null == t ? void 0 : t.isMediaChannel()) === !0, y = function(e, t) {
                    let s = (0, Q.useForumPostComposerStoreApi)(),
                        a = (0, Y.useChannelTemplate)(e),
                        l = n.useCallback(() => {
                            let {
                                formOpen: n,
                                setFormOpenFromUserAction: l,
                                name: r,
                                textAreaState: i,
                                hasClickedForm: o
                            } = s.getState();
                            !n && (setTimeout(() => {
                                if (t.current instanceof m.TextAreaAutosize) {
                                    var e, s, a, n;
                                    null === (s = t.current) || void 0 === s || null === (e = s._textArea) || void 0 === e || e.setSelectionRange(r.length, r.length), null === (n = t.current) || void 0 === n || null === (a = n._textArea) || void 0 === a || a.focus()
                                }
                            }, 0), (o && r.length > 0 || i.textValue.trim().length > 0 && i.textValue.trim() !== a || b.default.getUploads(e.id, R.DraftType.FirstThreadMessage).length > 0) && l())
                        }, [s, e.id, a, t]);
                    return l
                }(t, o), F = function(e) {
                    let {
                        formOpen: t
                    } = (0, Q.useForumPostComposerStore)(e => {
                        let {
                            formOpen: t
                        } = e;
                        return {
                            formOpen: t
                        }
                    }, u.default), s = (0, Q.useForumPostComposerStoreApi)(), a = (0, j.useCreateForumPost)({
                        parentChannel: e
                    });
                    n.useEffect(() => {
                        let {
                            setNameError: e,
                            setMessageError: t
                        } = s.getState();
                        e(null), t(null)
                    }, [t, s]);
                    let l = n.useCallback((t, a, n) => {
                        let {
                            name: l,
                            textAreaState: r
                        } = s.getState();
                        null == t && (t = r.textValue), t = t.trim();
                        let {
                            content: i
                        } = E.default.parse(e, t);
                        if (t = i, null == a || 0 === a.length) {
                            var o;
                            a = null === (o = v.default.getStickerPreview(e.id, er.drafts.type)) || void 0 === o ? void 0 : o.map(e => e.id)
                        }
                        if ((null == n || 0 === n.length) && (n = b.default.getUploads(e.id, R.DraftType.FirstThreadMessage)), null != n && n.length > 0 && e.isMediaChannel()) {
                            let e = n.findIndex(e => !0 === e.isThumbnail);
                            if (e > -1) {
                                let t = n[e];
                                n.splice(e, 1), n.unshift(t)
                            }
                        }
                        let u = 0 === l.length,
                            d = (null == t || 0 === t.length) && (null == a || 0 === a.length) && 0 === n.length;
                        return {
                            content: t,
                            stickers: a,
                            uploads: n,
                            hasNameError: u,
                            hasMessageError: d
                        }
                    }, [e, s]);
                    return n.useCallback(async (t, n, r) => {
                        let {
                            setNameError: i,
                            setMessageError: o,
                            setSubmitting: u,
                            resetFormState: d,
                            formOpen: c,
                            setFormOpen: h,
                            setFormOpenFromUserAction: m,
                            setGuidelinesOpen: f
                        } = s.getState(), g = K.default.hasSeen(e.id);
                        if (!c) return (0, q.trackForumCreateNewPostClick)({
                            guildId: e.guild_id,
                            channelId: e.id
                        }), !g && s.getState().setGuidelinesOpen(!0), m(), {
                            shouldClear: !1,
                            shouldRefocus: !1
                        };
                        let {
                            content: C,
                            stickers: x,
                            uploads: p,
                            hasNameError: S,
                            hasMessageError: _
                        } = l(t, n, r);
                        if (i(S ? (0, V.makeEmptyTitleError)() : null), o(_ ? (0, V.makeEmptyMessageError)() : null), S || _) return {
                            shouldClear: !1,
                            shouldRefocus: !0
                        };
                        try {
                            u(!0);
                            let {
                                valid: t
                            } = await (0, B.applyChatRestrictions)({
                                content: C,
                                stickers: x,
                                uploads: p,
                                type: er,
                                channel: e
                            });
                            if (!t) return {
                                shouldClear: !1,
                                shouldRefocus: !0
                            };
                            let s = await a(C, x, p);
                            return (0, I.openThreadSidebarForViewing)(s), W.default.resort(e.id), (0, M.clearStickerPreview)(e.id, er.drafts.type), d(), h(!1), K.default.markAsSeen(e.id), f(!1), {
                                shouldClear: !0,
                                shouldRefocus: !1
                            }
                        } catch (t) {
                            var T, N;
                            return (null === (T = t.body) || void 0 === T ? void 0 : T.code) === es.AbortCodes.AUTOMOD_TITLE_BLOCKED ? i((0, V.makeAutomodViolationError)(t.body, e)) : (null === (N = t.body) || void 0 === N ? void 0 : N.code) === es.AbortCodes.AUTOMOD_MESSAGE_BLOCKED && o((0, V.makeAutomodViolationError)(t.body, e)), {
                                shouldClear: !1,
                                shouldRefocus: !0
                            }
                        } finally {
                            u(!1)
                        }
                    }, [a, l, e, s])
                }(t);
                return n.useLayoutEffect(l, [c, d, S, l]), (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)("div", {
                        "aria-label": i ? en.default.Messages.NEW_FORUM_POST : en.default.Messages.SEARCH,
                        className: r(el.container, {
                            [el.collapsed]: !c
                        }),
                        onClick: !c && i ? y : void 0,
                        children: (0, a.jsxs)("form", {
                            onMouseDown: x,
                            onFocus: x,
                            onSubmit: e => {
                                e.preventDefault(), i && F()
                            },
                            children: [(0, a.jsxs)("div", {
                                className: el.formContainer,
                                children: [(0, a.jsxs)("div", {
                                    className: el.form,
                                    children: [(0, a.jsx)(eo, {
                                        editorRef: f,
                                        parentChannel: t,
                                        isSearchLoading: s,
                                        inputRef: o,
                                        canCreatePost: i
                                    }), c && (0, a.jsx)(ed, {
                                        editorRef: f,
                                        setEditorRef: g,
                                        parentChannel: t,
                                        submit: F,
                                        disabled: !i
                                    })]
                                }), _ && (A ? (0, a.jsx)(N.MediaPostThumbnail, {
                                    parentChannel: t
                                }) : (0, a.jsx)(X.default, {
                                    channelId: t.id
                                }))]
                            }), (0, a.jsxs)("div", {
                                className: el.form,
                                children: [_ && A && (0, a.jsx)(T.default, {
                                    parentChannel: t
                                }), c && (0, a.jsx)(ec, {
                                    className: el.horizontalPadding,
                                    parentChannel: t,
                                    canCreatePost: i
                                })]
                            })]
                        })
                    })
                })
            }
            let eo = n.memo(function(e) {
                let {
                    parentChannel: t,
                    isSearchLoading: s,
                    inputRef: l,
                    canCreatePost: r,
                    editorRef: i
                } = e, {
                    formOpen: d,
                    nameError: c,
                    name: C,
                    textAreaState: x,
                    hasClickedForm: p,
                    submitting: S
                } = (0, Q.useForumPostComposerStore)(e => {
                    let {
                        formOpen: t,
                        nameError: s,
                        name: a,
                        textAreaState: n,
                        hasClickedForm: l,
                        submitting: r
                    } = e;
                    return {
                        formOpen: t,
                        nameError: s,
                        name: a,
                        textAreaState: n,
                        hasClickedForm: l,
                        submitting: r
                    }
                }, u.default), _ = (0, Q.useForumPostComposerStoreApi)(), T = null != t.topic && 0 !== t.topic.length, N = K.default.hasSeen(t.id), E = (0, Y.useChannelTemplate)(t), v = (0, h.useStateFromStores)([F.default], () => F.default.getCurrentUser());
                o(null != v, "current user cannot be null");
                (0, G.useComponentAction)({
                    event: es.ComponentActions.FOCUS_COMPOSER_TITLE,
                    handler: () => {
                        var e;
                        let t = l.current instanceof m.TextAreaAutosize ? null === (e = l.current) || void 0 === e ? void 0 : e._textArea : l.current;
                        null == t || t.focus(), _.getState().setTitleFocused(!0), _.getState().setFormOpen(!0), _.getState().setHasClickedForm(!0)
                    }
                });
                let M = n.useCallback(() => {
                        var e;
                        _.getState().resetFormState(), f.default.clearDraft(t.id, R.DraftType.ThreadSettings), f.default.clearDraft(t.id, R.DraftType.FirstThreadMessage), g.default.clearAll(t.id, R.DraftType.FirstThreadMessage), _.getState().setFormOpen(!1), _.getState().setBodyFocused(!1), _.getState().setTitleFocused(!1), _.getState().setHasClickedForm(!1), null === (e = l.current) || void 0 === e || e.blur(), (0, q.trackForumNewPostCleared)({
                            guildId: t.guild_id,
                            channelId: t.id
                        })
                    }, [_, t.id, t.guild_id, l]),
                    I = n.useMemo(() => s && !d ? (0, a.jsx)(eg, {}) : s || d || 0 !== x.textValue.trim().length && x.textValue.trim() !== E ? !d && (C.trim().length > 0 || x.textValue.trim().length > 0 && x.textValue.trim() !== E || b.default.getUploads(t.id, R.DraftType.FirstThreadMessage).length > 0) && p ? (0, a.jsx)(k.default, {
                        className: el.pencilIcon,
                        width: 24,
                        height: 24
                    }) : S ? (0, a.jsx)(w.default, {
                        className: el.closeIconDisabled,
                        width: 24,
                        height: 24
                    }) : (0, a.jsx)(m.Tooltip, {
                        text: en.default.Messages.FORUM_CLEAR_ALL,
                        children: e => (0, a.jsx)(m.Clickable, {
                            ...e,
                            onClick: M,
                            children: (0, a.jsx)(w.default, {
                                className: el.closeIcon,
                                width: 24,
                                height: 24
                            })
                        })
                    }) : (0, a.jsx)(U.default, {
                        className: el.searchIcon,
                        width: 24,
                        height: 24
                    }), [s, d, p, C, x.textValue, M, t.id, E, S]),
                    j = n.useCallback(e => {
                        let s = e.clipboardData.files[0];
                        null != s && s.type.startsWith("image/") && (e.preventDefault(), (0, z.promptToUpload)([s], t, R.DraftType.FirstThreadMessage), _.getState().setFormOpenFromUserAction())
                    }, [t, _]),
                    O = (0, V.renderError)(c, {
                        content: C
                    });
                return (0, a.jsxs)("div", {
                    className: el.titleContainer,
                    onPaste: j,
                    children: [(0, a.jsx)("div", {
                        className: el.prefixElement,
                        children: I
                    }), (0, a.jsx)(m.TextArea, {
                        value: C,
                        placeholder: r ? d || x.textValue.length > 0 && x.textValue.trim() !== E ? en.default.Messages.FORUM_POST_TITLE_PLACEHOLDER_FOCUSED : en.default.Messages.FORUM_POST_TITLE_PLACEHOLDER_SEARCH : en.default.Messages.SEARCH,
                        flex: !0,
                        autosize: d,
                        rows: 1,
                        showCharacterCount: !1,
                        showRemainingCharacterCount: !1,
                        maxLength: es.MAX_CHANNEL_NAME_LENGTH,
                        onChange: e => {
                            let s = (0, A.default)(e, !1);
                            _.getState().setName(s);
                            let a = 0 === s.trim().length,
                                n = 0 === x.textValue.trim().length,
                                l = x.textValue.trim() === E;
                            a && (n || l) && _.getState().setHasClickedForm(!1), !d && W.default.updateForumSearchQuery(t.id, s)
                        },
                        onFocus: () => {
                            _.getState().setTitleFocused(!0), _.getState().setBodyFocused(!1)
                        },
                        onBlur: () => {
                            _.getState().setTitleFocused(!1);
                            let e = (0, A.default)(C, !0);
                            e !== C && (_.getState().setName(e), !d && W.default.updateForumSearchQuery(t.id, e))
                        },
                        onKeyDown: e => {
                            var s, a;
                            "Enter" === e.key && (e.preventDefault(), e.stopPropagation(), d && C.length > 0 ? null == i || i.focus() : r && e.shiftKey && ((0, q.trackForumCreateNewPostKeybindUsed)({
                                guildId: t.guild_id,
                                channelId: t.id
                            }), T && !N && _.getState().setGuidelinesOpen(!0), _.getState().setFormOpenFromUserAction(), C.trim().length > 0 && (_.getState().setBodyFocused(!0), null == i || i.focus())));
                            let n = l.current instanceof m.TextAreaAutosize ? null === (s = l.current) || void 0 === s ? void 0 : s._textArea : l.current;
                            if ("Home" === e.key || "End" === e.key) {
                                if (null == n) return;
                                if (e.preventDefault(), e.stopPropagation(), "Home" === e.key) n.setSelectionRange(0, 0);
                                else {
                                    let e = C.length;
                                    n.setSelectionRange(e, e)
                                }
                            }
                            "Escape" === e.key && !_.getState().submitting && (null === (a = l.current) || void 0 === a || a.blur(), _.getState().setFormOpen(!1), _.getState().setTitleFocused(!1), _.getState().setBodyFocused(!1))
                        },
                        error: O,
                        className: el.title,
                        inputRef: l
                    }), d ? null : (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(eu, {
                            parentChannel: t
                        }), (0, a.jsx)(eh, {
                            parentChannel: t,
                            canCreatePost: r
                        })]
                    })]
                })
            });

            function eu(e) {
                let {
                    parentChannel: t
                } = e, {
                    guidelinesOpen: s
                } = (0, Q.useForumPostComposerStore)(e => {
                    let {
                        guidelinesOpen: t
                    } = e;
                    return {
                        guidelinesOpen: t
                    }
                }), n = (0, Q.useForumPostComposerStoreApi)(), l = null != t.topic && 0 !== t.topic.length, i = () => {
                    n.getState().setGuidelinesOpen(!s)
                };
                return l ? (0, a.jsx)(m.Tooltip, {
                    text: en.default.Messages.FORUM_POST_GUIDELINES_TITLE,
                    children: e => (0, a.jsx)(m.Clickable, {
                        ...e,
                        onClick: i,
                        className: r(el.guidelinesButton, {
                            [el.guidelinesOpen]: s
                        }),
                        children: (0, a.jsx)(P.default, {
                            ...e,
                            width: 24,
                            height: 24
                        })
                    })
                }) : null
            }
            let ed = n.memo(function(e) {
                    let {
                        parentChannel: t,
                        submit: s,
                        disabled: l = !1,
                        editorRef: i,
                        setEditorRef: d
                    } = e, c = (0, h.useStateFromStores)([F.default], () => F.default.getCurrentUser());
                    o(null != c, "current user cannot be null");
                    let {
                        messageError: f,
                        textAreaState: g,
                        bodyFocused: C,
                        formOpen: x
                    } = (0, Q.useForumPostComposerStore)(e => {
                        let {
                            messageError: t,
                            textAreaState: s,
                            bodyFocused: a,
                            formOpen: n
                        } = e;
                        return {
                            messageError: t,
                            textAreaState: s,
                            bodyFocused: a,
                            formOpen: n
                        }
                    }, u.default), S = (0, Q.useForumPostComposerStoreApi)();
                    n.useEffect(() => () => (0, q.maybeTrackForumNewPostDraftCreated)({
                        guildId: t.guild_id,
                        channelId: t.id
                    }), [t.guild_id, t.id]);
                    let T = n.useCallback(() => {
                            S.getState().setBodyFocused(!0)
                        }, [S]),
                        N = n.useCallback(() => {
                            S.getState().setBodyFocused(!1)
                        }, [S]),
                        E = n.useCallback((e, t, s) => {
                            let {
                                setTextAreaState: a
                            } = S.getState();
                            a({
                                textValue: t,
                                richValue: s
                            })
                        }, [S]),
                        v = n.useCallback(e => {
                            let {
                                value: t,
                                uploads: a,
                                stickers: n
                            } = e;
                            return s(t, n, a)
                        }, [s]);
                    (0, G.useComponentAction)({
                        event: es.ComponentActions.TEXTAREA_FOCUS,
                        handler: T
                    }), (0, G.useComponentAction)({
                        event: es.ComponentActions.TEXTAREA_BLUR,
                        handler: N
                    });
                    let M = (0, V.renderError)(f, {
                        content: g.textValue
                    });
                    return (0, a.jsx)("div", {
                        className: el.bodyContainer,
                        children: (0, a.jsxs)("div", {
                            className: el.contentContainer,
                            children: [(0, a.jsx)("div", {
                                onClick: T,
                                children: (0, a.jsx)(p.default, {
                                    type: er,
                                    setEditorRef: d,
                                    channel: t,
                                    placeholder: en.default.Messages.FORUM_POST_MESSAGE_PLACEHOLDER,
                                    textValue: g.textValue,
                                    richValue: g.richValue,
                                    focused: C,
                                    className: el.channelTextArea,
                                    innerClassName: r(el.channelTextAreaInner, {
                                        [el.channelTextAreaInnerError]: null != M
                                    }),
                                    onChange: E,
                                    onSubmit: v,
                                    promptToUpload: z.promptToUpload,
                                    disabled: l,
                                    onKeyDown: e => {
                                        if (("ArrowUp" === e.key || "ArrowDown" === e.key) && e.stopPropagation(), "Home" === e.key || "End" === e.key) {
                                            if (null == i) return;
                                            e.preventDefault(), e.stopPropagation();
                                            let t = i.getSlateEditor();
                                            if (null == t) return;
                                            "Home" === e.key ? _.SlateTransforms.resetSelectionToStart(t) : _.SlateTransforms.resetSelectionToEnd(t)
                                        }
                                        if (x && "Escape" === e.key && !S.getState().submitting) null == i || i.blur(), S.getState().setFormOpen(!1), S.getState().setTitleFocused(!1), S.getState().setBodyFocused(!1)
                                    },
                                    autoCompletePosition: "bottom"
                                })
                            }), (0, a.jsx)(m.InputError, {
                                error: M
                            })]
                        })
                    })
                }),
                ec = n.memo(function(e) {
                    let {
                        parentChannel: t,
                        canCreatePost: s,
                        className: l
                    } = e, {
                        textAreaState: r,
                        appliedTags: i,
                        name: o
                    } = (0, Q.useForumPostComposerStore)(e => {
                        let {
                            textAreaState: t,
                            appliedTags: s,
                            name: a
                        } = e;
                        return {
                            textAreaState: t,
                            appliedTags: s,
                            name: a
                        }
                    }), {
                        rateLimitPerUser: u
                    } = t, d = u > 0, c = (0, h.useStateFromStores)([y.default], () => y.default.getSlowmodeCooldownGuess(t.id, y.SlowmodeType.CreateThread)), f = (0, h.useStateFromStores)([O.default], () => O.default.can(es.Permissions.MANAGE_THREADS, t) || O.default.can(es.Permissions.MANAGE_CHANNELS, t)), g = t.hasFlag(ea.ChannelFlags.REQUIRE_TAG) && 0 === i.size && o.length > 0 && r.textValue.length > 0, C = (0, Q.useForumPostComposerStoreApi)(), p = n.useCallback(() => {
                        C.getState().setBodyFocused(!1)
                    }, [C]);
                    return (0, a.jsxs)("div", {
                        className: l,
                        children: [(0, a.jsx)(ef, {
                            parentChannel: t
                        }), (0, a.jsx)("div", {
                            className: el.tagsDivider
                        }), (0, a.jsxs)("div", {
                            className: el.controlsContainer,
                            children: [(0, a.jsxs)("div", {
                                className: el.controls,
                                children: [(0, a.jsxs)("div", {
                                    className: el.wrappedControls,
                                    children: [g && (0, a.jsx)(m.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-danger",
                                        children: en.default.Messages.FORUM_POST_TAG_REQUIRED_ERROR
                                    }), (0, a.jsx)(S.default, {
                                        type: er,
                                        textValue: r.textValue,
                                        className: el.characterCount
                                    }), d && (0, a.jsx)($.default, {
                                        rateLimitPerUser: u,
                                        slowmodeCooldownGuess: c,
                                        isBypassSlowmode: f,
                                        leadingIcon: !0
                                    })]
                                }), (0, a.jsx)(eu, {
                                    parentChannel: t
                                }), (0, a.jsx)(eh, {
                                    parentChannel: t,
                                    disableIfInvalid: !0,
                                    canCreatePost: s,
                                    disabled: d && !f && c > 0
                                })]
                            }), (0, a.jsx)(x.default, {
                                type: er,
                                className: el.expressionPicker,
                                onClick: p
                            }, "expression")]
                        })]
                    })
                });

            function eh(e) {
                let {
                    parentChannel: t,
                    canCreatePost: s,
                    disabled: n,
                    disableIfInvalid: l = !1
                } = e, {
                    submitting: r,
                    textAreaState: i,
                    name: o,
                    appliedTags: u,
                    formOpen: d
                } = (0, Q.useForumPostComposerStore)(e => {
                    let {
                        submitting: t,
                        textAreaState: s,
                        name: a,
                        appliedTags: n,
                        formOpen: l
                    } = e;
                    return {
                        submitting: t,
                        textAreaState: s,
                        name: a,
                        appliedTags: n,
                        formOpen: l
                    }
                }), c = t.hasFlag(ea.ChannelFlags.REQUIRE_TAG) && 0 === u.size && o.length > 0 && i.textValue.length > 0, f = (0, h.useStateFromStoresArray)([b.default], () => b.default.getUploads(t.id, R.DraftType.FirstThreadMessage)), g = i.textValue.trim().length > 0 || f.length > 0, C = !c && g && o.trim().length > 0;
                if (__OVERLAY__) return null;
                let x = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return (0, a.jsxs)(m.Button, {
                        ...e,
                        size: m.Button.Sizes.SMALL,
                        className: el.submitButton,
                        innerClassName: el.submitButtonInner,
                        type: "submit",
                        submitting: r,
                        disabled: l && !C || n || !s,
                        children: [(0, a.jsx)(D.default, {
                            className: el.submitIcon,
                            width: 16,
                            height: 16
                        }), (0, a.jsx)(m.Text, {
                            variant: "text-md/semibold",
                            color: "none",
                            children: d ? en.default.Messages.SUBMIT_POST : en.default.Messages.NEW_FORUM_POST_NEW
                        })]
                    })
                };
                return s ? x() : (0, a.jsx)(m.Tooltip, {
                    text: en.default.Messages.FORUM_NO_POST_PERMISSION_HELP,
                    children: e => x(e)
                })
            }

            function em() {
                return Promise.resolve()
            }

            function ef(e) {
                let {
                    parentChannel: t
                } = e, {
                    appliedTags: s,
                    toggleAppliedTag: l,
                    setPopoutOpen: i
                } = (0, Q.useForumPostComposerStore)(e => {
                    let {
                        appliedTags: t,
                        toggleAppliedTag: s,
                        setPopoutOpen: a
                    } = e;
                    return {
                        appliedTags: t,
                        toggleAppliedTag: s,
                        setPopoutOpen: a
                    }
                }, u.default), o = s.size >= et.MAX_FORUM_POST_TAGS, h = (0, d.default)({
                    id: "".concat(t.id, "-post-form-tags-navigator"),
                    isEnabled: !0,
                    wrap: !0,
                    scrollToStart: em,
                    scrollToEnd: em,
                    orientation: c.Orientations.HORIZONTAL
                }), {
                    containerRef: f,
                    containerWidth: g
                } = (0, ee.default)(), C = n.useRef(null), [x, p] = n.useState(!0), S = (0, Y.useVisibleForumTags)(t), [_, T] = n.useState(0);
                return (n.useLayoutEffect(() => {
                    var e;
                    let t = C.current,
                        s = null == t ? void 0 : null === (e = t.children) || void 0 === e ? void 0 : e[0],
                        a = null == t || null == s || s.clientHeight > t.clientHeight;
                    if (a !== x && p(a), a && null != f.current && null != s && null != s.children) {
                        let {
                            left: e,
                            top: t
                        } = f.current.getBoundingClientRect(), a = 0;
                        for (let n of s.children) {
                            let {
                                right: s,
                                top: l,
                                height: r
                            } = n.getBoundingClientRect();
                            if (l - t > r) break;
                            s - e > a && (a = s - e)
                        }
                        T(a)
                    }
                }, [S, x, f, g]), 0 === S.length) ? null : (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsxs)("div", {
                        className: el.tagsContainer,
                        ref: f,
                        children: [(0, a.jsx)(H.default, {
                            className: el.tagsIcon,
                            width: 16,
                            height: 16
                        }), (0, a.jsx)("div", {
                            className: el.tagList,
                            ref: C,
                            children: (0, a.jsx)(d.ListNavigatorProvider, {
                                navigator: h,
                                children: (0, a.jsx)(d.ListNavigatorContainer, {
                                    children: e => {
                                        let {
                                            ref: t,
                                            ...n
                                        } = e;
                                        return (0, a.jsx)("div", {
                                            className: el.tagListInner,
                                            ref: t,
                                            ...n,
                                            children: S.map(e => (0, a.jsx)(J.default, {
                                                ariaLabel: en.default.Messages.FORUM_TAG_A11Y_ADD_TAG.format({
                                                    tagName: e.name
                                                }),
                                                tag: e,
                                                onClick: o && !s.has(e.id) ? void 0 : () => l(e.id),
                                                disabled: !s.has(e.id) && s.size >= et.MAX_FORUM_POST_TAGS,
                                                selected: s.has(e.id),
                                                size: J.default.Sizes.SMALL
                                            }, e.id))
                                        })
                                    }
                                })
                            })
                        }), x && (0, a.jsx)(m.Popout, {
                            onRequestOpen: () => i(!0),
                            onRequestClose: () => i(!1),
                            renderPopout: e => {
                                let {
                                    closePopout: n
                                } = e;
                                return (0, a.jsx)(Z.default, {
                                    parentChannel: t,
                                    appliedTags: s,
                                    maxTagsApplied: o,
                                    onSelectTag: l,
                                    onClose: n
                                })
                            },
                            position: "bottom",
                            align: "center",
                            children: e => (0, a.jsxs)(m.Button, {
                                ...e,
                                size: m.Button.Sizes.TINY,
                                className: el.tagsButton,
                                innerClassName: el.tagsButtonInner,
                                style: {
                                    left: _
                                },
                                look: m.Button.Looks.LINK,
                                "aria-label": en.default.Messages.ADD_TAG_FORUM_POST,
                                children: [en.default.Messages.FORUM_TAG_SEE_MORE_A11Y_LABEL, (0, a.jsx)(L.default, {
                                    width: 16
                                })]
                            })
                        }), (0, a.jsxs)(m.Button, {
                            size: m.Button.Sizes.TINY,
                            className: r(el.tagsButton, el.tagsButtonPlaceholder),
                            innerClassName: el.tagsButtonInner,
                            look: m.Button.Looks.LINK,
                            "aria-label": en.default.Messages.ADD_TAG_FORUM_POST,
                            children: [en.default.Messages.FORUM_TAG_SEE_MORE_A11Y_LABEL, (0, a.jsx)(L.default, {
                                width: 16
                            })]
                        })]
                    })
                })
            }

            function eg(e) {
                let {
                    style: t,
                    className: s
                } = e;
                return (0, a.jsx)("div", {
                    className: s,
                    style: t,
                    children: (0, a.jsx)("div", {
                        className: el.loader
                    })
                })
            }
        },
        592633: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return B
                }
            });
            var a = s("920040"),
                n = s("773670"),
                l = s("575482"),
                r = s.n(l),
                i = s("497411"),
                o = s("498225"),
                u = s("912557"),
                d = s("77078"),
                c = s("125667"),
                h = s("955735"),
                m = s("651693"),
                f = s("605160"),
                g = s("70845"),
                C = s("933629"),
                x = s("845579"),
                p = s("982108"),
                S = s("42203"),
                _ = s("957255"),
                T = s("594098"),
                N = s("887718"),
                E = s("95689"),
                v = s("132755"),
                M = s("497880"),
                A = s("956089"),
                I = s("154695"),
                j = s("612278"),
                R = s("791234"),
                O = s("512630"),
                y = s("152637"),
                b = s("363622"),
                F = s("855455"),
                L = s("136460"),
                P = s("601016"),
                w = s("485055"),
                D = s("390083"),
                k = s("953371"),
                U = s("49111"),
                H = s("782340"),
                G = s("559438"),
                B = n.memo(function(e) {
                    let {
                        id: t,
                        threadId: s,
                        goToThread: n,
                        overrideMedia: l,
                        className: r,
                        coords: i,
                        gridCoords: u,
                        gridSectionBoundaries: d,
                        observePostVisibilityAnalytics: c
                    } = e, h = (0, o.useStateFromStores)([S.default], () => S.default.getChannel(s));
                    return null == h ? null : (0, a.jsx)(z, {
                        id: t,
                        channel: h,
                        goToThread: n,
                        overrideMedia: l,
                        className: r,
                        coords: i,
                        gridCoords: u,
                        observePostVisibilityAnalytics: c,
                        gridSectionBoundaries: d
                    })
                });

            function z(e) {
                let {
                    id: t,
                    channel: s,
                    goToThread: l,
                    overrideMedia: c,
                    className: h,
                    coords: m,
                    gridCoords: f,
                    gridSectionBoundaries: C,
                    observePostVisibilityAnalytics: T
                } = e, N = (0, o.useStateFromStores)([S.default], () => S.default.getChannel(s.parent_id)), E = s.id, v = n.useRef(null), M = (0, o.useStateFromStores)([p.default], () => p.default.getCurrentSidebarChannelId(s.parent_id) === s.id), {
                    firstMessage: O,
                    loaded: F
                } = (0, j.useFirstForumPostMessage)(s), {
                    firstMedia: B
                } = (0, I.useForumPostFirstMessageMarkup)({
                    firstMessage: O,
                    formatInline: !1,
                    noStyleAndInteraction: !1
                }), {
                    messageCountText: z
                } = (0, I.useMessageCount)(s), {
                    isNew: W,
                    hasUnreads: K
                } = (0, I.useForumPostReadStates)(s), q = n.useRef(null), {
                    handleLeftClick: X,
                    handleRightClick: Q
                } = (0, D.default)({
                    facepileRef: q,
                    goToThread: l,
                    channel: s
                });
                n.useEffect(() => {
                    null == T || T(v.current, E)
                }, [T, E]);
                let J = (0, o.useStateFromStores)([_.default], () => _.default.can(U.Permissions.MANAGE_MESSAGES, s)),
                    $ = x.GifAutoPlay.useSetting(),
                    ee = x.RenderSpoilers.useSetting(),
                    et = (0, g.default)(ee, J),
                    es = (0, R.useForumPostMediaThumbnail)(O, N, !1),
                    [ea, en] = (0, b.getFrameDimensions)(m.width - 2 * b.IMAGE_PADDING),
                    el = (0, I.useLastActiveTimestamp)(s, i.ThreadSortOrder.CREATION_DATE, k.ForumTimestampFormats.POSTED_DURATION_AGO),
                    er = (0, y.useHighlightedChannelName)(s),
                    ei = (null == O ? void 0 : O.blocked) || null == (null != c ? c : B),
                    {
                        onFocus: eo,
                        ...eu
                    } = (0, w.useForumGridItem)({
                        id: t,
                        row: f.row,
                        column: f.column,
                        section: f.section,
                        boundaries: C
                    }),
                    ed = s.isMediaPost();
                return (0, a.jsxs)("li", {
                    ref: v,
                    onClick: X,
                    onFocus: eo,
                    onContextMenu: Q,
                    className: r(G.container, h, {
                        [G.isOpen]: M
                    }),
                    style: {
                        ...m
                    },
                    children: [(0, a.jsx)(d.Clickable, {
                        onClick: X,
                        focusProps: {
                            ringTarget: v
                        },
                        onContextMenu: Q,
                        "aria-label": H.default.Messages.FORUM_POST_ARIA_LABEL.format({
                            title: s.name,
                            count: z
                        }),
                        className: G.focusTarget,
                        ...eu
                    }), (0, a.jsxs)("div", {
                        className: G.header,
                        children: [(0, a.jsxs)("div", {
                            className: G.authorRow,
                            children: [(0, a.jsxs)("div", {
                                className: G.rowGroup,
                                children: [(0, a.jsx)(L.default, {
                                    channel: s,
                                    message: O
                                }), (0, a.jsx)(d.Text, {
                                    variant: "text-xs/normal",
                                    color: "header-secondary",
                                    className: G.postCreationTimestamp,
                                    children: el
                                })]
                            }), W ? (0, a.jsx)(A.TextBadge, {
                                className: r(G.newBadge),
                                color: u.default.unsafe_rawColors.BRAND_260.css,
                                text: H.default.Messages.NEW
                            }) : null]
                        }), (0, a.jsx)(d.HeadingLevel, {
                            children: (0, a.jsx)(d.Heading, {
                                variant: "heading-md/extrabold",
                                className: G.title,
                                color: K ? "header-primary" : "text-muted",
                                style: {
                                    width: "".concat(m.width - 2 * b.GRID_POST_CONTROLS_MARGIN, "px")
                                },
                                children: er
                            })
                        })]
                    }), (0, a.jsx)("div", {
                        className: G.postBody,
                        children: (0, a.jsx)(d.FocusBlock, {
                            children: ei ? (0, a.jsx)(Z, {
                                channel: s,
                                firstMessage: O,
                                isFirstMessageLoaded: F,
                                containerWidth: m.width,
                                hasUnreads: K
                            }) : (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)(Y, {
                                    mediaAttachments: es,
                                    globalSpoilerRenderSetting: et,
                                    containerWidth: ea,
                                    containerHeight: ed ? ea * (9 / 16) : en,
                                    canAutoPlay: $,
                                    shouldMaintainAspectRatio: ed
                                }), (0, a.jsx)("div", {
                                    className: G.tagsRow,
                                    children: (0, a.jsx)(P.default, {
                                        channel: s,
                                        tagsClassName: G.tagPill
                                    })
                                })]
                            })
                        })
                    }), (0, a.jsx)("div", {
                        className: G.footer,
                        children: (0, a.jsx)(d.FocusBlock, {
                            children: (0, a.jsx)(V, {
                                channel: s,
                                firstMessage: O,
                                facepileRef: q
                            })
                        })
                    })]
                })
            }

            function V(e) {
                let {
                    channel: t,
                    facepileRef: s,
                    firstMessage: n
                } = e, l = (0, I.useTypingUserIds)(t), r = (null == n ? void 0 : n.reactions) != null && n.reactions.length > 0;
                return (0, a.jsxs)("div", {
                    className: G.forumPostControls,
                    children: [(0, a.jsxs)("div", {
                        className: G.controlsGroup,
                        children: [(0, a.jsx)("div", {
                            className: G.messageCountContainer,
                            children: (0, a.jsx)(y.MessageCount, {
                                channel: t,
                                iconSize: 16,
                                showReadState: !0
                            })
                        }), l.length > 0 ? (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)("span", {
                                className: G.bullet,
                                children: "•"
                            }), (0, a.jsxs)("div", {
                                className: G.typing,
                                children: [(0, a.jsx)(y.Facepile, {
                                    channel: t,
                                    userIds: l,
                                    facepileRef: s
                                }), (0, a.jsx)("div", {
                                    className: G.dots,
                                    children: (0, a.jsx)(d.Dots, {
                                        themed: !0,
                                        dotRadius: 2
                                    })
                                }), (0, a.jsx)(c.default, {
                                    channel: t,
                                    className: G.typingUsers,
                                    renderDots: !1
                                })]
                            })]
                        }) : null]
                    }), (0, a.jsxs)("div", {
                        className: G.controlsGroup,
                        children: [r || null == n ? null : (0, a.jsx)(y.DefaultReaction, {
                            firstMessage: n,
                            channel: t
                        }), null == n ? null : (0, a.jsx)(y.MostUsedReaction, {
                            firstMessage: n,
                            channel: t
                        })]
                    })]
                })
            }
            let W = e => e.preventDefault(),
                K = n.memo(function(e) {
                    return (0, a.jsx)(a.Fragment, {
                        children: (0, C.renderImageComponent)(e)
                    })
                }),
                Y = n.memo(function(e) {
                    let {
                        mediaAttachments: t,
                        globalSpoilerRenderSetting: s,
                        containerWidth: l,
                        containerHeight: i,
                        canAutoPlay: o,
                        shouldMaintainAspectRatio: u = !1
                    } = e, {
                        containsVideo: d,
                        containsGif: c
                    } = n.useMemo(() => (0, R.messageContainsGifOrVideo)(t), [t]), g = n.useMemo(() => t.slice(F.MOSAIC_MIN_INDEX, F.MOSAIC_MAX_INDEX), [t]), C = (0, F.useImageContainerStyles)({
                        numAttachments: g.length,
                        containerWidth: l,
                        containerHeight: i
                    }), x = (0, F.useImageDimensionStyles)({
                        imageContainerStyles: C,
                        containerWidth: l,
                        containerHeight: i
                    }), p = n.useMemo(() => g.map((e, t) => {
                        var n;
                        let [l, i] = (0, f.getForumPostShouldObscure)(e, !s), g = (0, f.getObscuredAlt)(i), p = {
                            ...x[t],
                            src: e.src,
                            width: e.width,
                            height: e.height,
                            alt: null != e.alt && l ? g : e.alt,
                            onClick: W,
                            shouldRenderAccessory: !c && !d
                        }, S = (0, m.isAnimatedImageUrl)(e.src) ? "".concat(e.src, "?format=png") : e.src, _ = o && !l ? e.src : S;
                        return (0, a.jsxs)("div", {
                            className: G.bodyMediaFrame,
                            style: C[t],
                            children: [u ? (0, a.jsx)(h.default, {
                                ...p,
                                src: _,
                                backgroundSrc: S,
                                aspectRatio: p.maxWidth / p.maxHeight,
                                alt: null !== (n = p.alt) && void 0 !== n ? n : "",
                                className: r(G.mediaPostContainer, {
                                    [G.obscured]: l
                                }),
                                imageChildClassName: G.mediaPostThumbnail
                            }) : e.src.startsWith("data:") ? (0, a.jsx)(T.default, {
                                ...p,
                                className: G.mediaContainer,
                                imageClassName: r(G.thumbnailOverride, {
                                    [G.obscured]: l
                                })
                            }) : (0, a.jsx)(K, {
                                ...p,
                                autoPlay: o && !l,
                                containerClassName: G.mosaicMediaContainer,
                                imageClassName: r(G.imageCover, {
                                    [G.obscured]: l
                                }),
                                responsive: !0
                            }), l && (0, a.jsx)("div", {
                                className: G.obscuredTagContainer,
                                children: (0, a.jsx)(O.default, {
                                    obscureReason: i,
                                    iconClassname: G.obscuredTag
                                })
                            })]
                        }, e.src)
                    }), [o, c, d, s, C, x, g, u]);
                    return (0, a.jsxs)("div", {
                        className: G.bodyMedia,
                        style: {
                            width: l,
                            height: i
                        },
                        children: [(0, a.jsx)(a.Fragment, {
                            children: p
                        }), (c || d) && (0, a.jsxs)("div", {
                            className: G.mediaIconsRow,
                            children: [d && (0, a.jsx)(v.default, {
                                width: "22px",
                                height: "22px",
                                className: G.mediaIcon
                            }), c && (0, a.jsx)(N.default, {
                                className: G.mediaIcon
                            })]
                        }), t.length > F.MOSAIC_MAX_IMAGE_COUNT && (0, a.jsx)(q, {
                            text: (t.length - (0, F.MOSAIC_MAX_IMAGE_COUNT)).toString(),
                            icon: E.default,
                            pillClassName: G.moreImagesPill,
                            iconClassName: G.moreImagesPillIcon,
                            textClassName: G.moreImagesPillText
                        })]
                    })
                });

            function q(e) {
                let {
                    text: t,
                    icon: s,
                    pillClassName: n,
                    iconClassName: l,
                    textClassName: r
                } = e;
                return (0, a.jsxs)("div", {
                    className: n,
                    children: [(0, a.jsx)(s, {
                        className: l
                    }), (0, a.jsxs)(d.Text, {
                        variant: "text-xs/medium",
                        className: r,
                        children: ["+", t]
                    })]
                })
            }

            function Z(e) {
                let {
                    channel: t,
                    firstMessage: s,
                    isFirstMessageLoaded: l,
                    containerWidth: i,
                    hasUnreads: o
                } = e, [u, c] = (0, b.getFrameDimensions)(i - 2 * b.IMAGE_PADDING), {
                    content: h
                } = (0, I.useForumPostFirstMessageMarkup)({
                    firstMessage: s,
                    formatInline: !1,
                    noStyleAndInteraction: !0
                }), {
                    shouldRenderTagsRow: m
                } = (0, P.useTagsRowHooks)({
                    channel: t,
                    isNew: !1
                }), f = n.useMemo(() => ({
                    width: u,
                    height: c
                }), [u, c]), g = o ? G.textContentUnread : G.textContentRead;
                return (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsxs)("div", {
                        className: G.contentPreview,
                        style: f,
                        children: [(0, a.jsxs)("div", {
                            className: G.content,
                            children: [l && null == s && (0, a.jsx)(d.Text, {
                                variant: "text-sm/normal",
                                color: o ? "header-secondary" : "text-muted",
                                children: H.default.Messages.REPLY_QUOTE_MESSAGE_DELETED
                            }), l && null != s && (0, a.jsx)(M.default, {
                                message: s,
                                content: h,
                                className: g
                            })]
                        }), (0, a.jsx)("div", {
                            className: r(G.textContentFooter, {
                                [G.noTags]: !m
                            }),
                            children: m ? (0, a.jsx)(P.default, {
                                channel: t,
                                tagsClassName: G.tagPill,
                                className: G.row
                            }) : null
                        })]
                    })
                })
            }
        },
        968462: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                ForumPostMediaPreviewPlaceholder: function() {
                    return l
                },
                ForumPostContentPlaceholder: function() {
                    return r
                },
                default: function() {
                    return i
                }
            });
            var a = s("920040");
            s("773670");
            var n = s("589288");

            function l() {
                return (0, a.jsx)("div", {
                    className: n.bodyMedia
                })
            }

            function r() {
                return (0, a.jsxs)("div", {
                    className: n.content,
                    children: [(0, a.jsxs)("div", {
                        className: n.titleAndMessage,
                        children: [(0, a.jsxs)("div", {
                            className: n.header,
                            children: [(0, a.jsxs)("div", {
                                className: n.tags,
                                children: [(0, a.jsx)("div", {
                                    className: n.tag
                                }), (0, a.jsx)("div", {
                                    className: n.tag
                                }), (0, a.jsx)("div", {
                                    className: n.tag
                                })]
                            }), (0, a.jsx)("div", {
                                className: n.seperator
                            })]
                        }), (0, a.jsx)("div", {
                            className: n.time
                        }), (0, a.jsx)("div", {
                            className: n.title
                        }), (0, a.jsx)("div", {
                            className: n.firstMessage
                        })]
                    }), (0, a.jsxs)("div", {
                        className: n.engagement,
                        children: [(0, a.jsx)("div", {
                            className: n.reactions
                        }), (0, a.jsx)("div", {
                            className: n.replies
                        })]
                    })]
                })
            }

            function i() {
                return (0, a.jsx)("div", {
                    className: n.card,
                    children: (0, a.jsxs)("div", {
                        className: n.body,
                        children: [(0, a.jsx)(r, {}), (0, a.jsx)(l, {})]
                    })
                })
            }
        },
        823968: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return c
                }
            });
            var a = s("920040");
            s("773670");
            var n = s("925149"),
                l = s("497411"),
                r = s("77078"),
                i = s("339792"),
                o = s("867965"),
                u = s("782340"),
                d = s("128909");

            function c(e) {
                let {
                    channel: t,
                    closePopout: s
                } = e, {
                    sortOrder: c,
                    layoutType: h
                } = (0, i.useForumChannelStore)(t.id), m = (0, i.useForumChannelStoreApi)(), f = t.isMediaChannel(), g = e => {
                    (0, o.trackForumSortOrderUpdated)({
                        guildId: t.guild_id,
                        channelId: t.id,
                        sortOrder: e
                    }), m.getState().setSortOrder(t.id, e), s()
                }, C = e => {
                    (0, o.trackForumLayoutUpdated)({
                        guildId: t.guild_id,
                        channelId: t.id,
                        forumLayout: e
                    }), m.getState().setLayoutType(t.id, e), s()
                };
                return (0, a.jsx)("div", {
                    className: d.container,
                    children: (0, a.jsxs)(r.Menu, {
                        navId: "sort-and-view",
                        "aria-label": f ? u.default.Messages.MEDIA_CHANNEL_SORT_A11Y_LABEL : u.default.Messages.FORUM_SORT_AND_VIEW_AY11_LABEL,
                        hideScroller: !0,
                        onClose: s,
                        onSelect: s,
                        children: [(0, a.jsxs)(r.MenuGroup, {
                            label: u.default.Messages.FORUM_CHANNEL_SORT_BY,
                            children: [(0, a.jsx)(r.MenuRadioItem, {
                                id: "sort-by-recent-activity",
                                group: "sort-by",
                                label: u.default.Messages.FORUM_CHANNEL_SORT_BY_RECENTLY_ACTIVE,
                                action: () => g(l.ThreadSortOrder.LATEST_ACTIVITY),
                                checked: c === l.ThreadSortOrder.LATEST_ACTIVITY
                            }), (0, a.jsx)(r.MenuRadioItem, {
                                id: "sort-by-date-posted",
                                group: "sort-by",
                                label: u.default.Messages.FORUM_CHANNEL_SORT_BY_DATE_POSTED,
                                action: () => g(l.ThreadSortOrder.CREATION_DATE),
                                checked: c === l.ThreadSortOrder.CREATION_DATE
                            })]
                        }), !t.isMediaChannel() && (0, a.jsxs)(r.MenuGroup, {
                            label: u.default.Messages.FORUM_CHANNEL_VIEW_AS,
                            children: [(0, a.jsx)(r.MenuRadioItem, {
                                id: "view-as-list",
                                group: "view-as",
                                label: u.default.Messages.FORUM_CHANNEL_VIEW_AS_LIST,
                                action: () => C(n.ForumLayout.LIST),
                                checked: h === n.ForumLayout.LIST
                            }), (0, a.jsx)(r.MenuRadioItem, {
                                id: "view-as-grid",
                                group: "view-as",
                                label: u.default.Messages.FORUM_CHANNEL_VIEW_AS_GRID,
                                action: () => C(n.ForumLayout.GRID),
                                checked: h === n.ForumLayout.GRID
                            })]
                        }), (0, a.jsx)(r.MenuGroup, {
                            children: (0, a.jsx)(r.MenuItem, {
                                id: "reset-all",
                                className: d.clearText,
                                label: (0, a.jsx)(r.Text, {
                                    variant: "text-sm/medium",
                                    color: "none",
                                    children: u.default.Messages.FORUM_CHANNEL_RESET_ALL
                                }),
                                action: () => {
                                    g(t.getDefaultSortOrder()), C(t.getDefaultLayout())
                                }
                            })
                        })]
                    })
                })
            }
        },
        363622: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                GRID_POST_CONTROLS_MARGIN: function() {
                    return r
                },
                GridLayout: function() {
                    return i
                },
                ForumListLayoutRenderOptions: function() {
                    return o
                },
                getFrameDimensions: function() {
                    return u
                },
                IMAGE_PADDING: function() {
                    return d
                },
                getGridPostHeight: function() {
                    return c
                }
            });
            var a = s("161179"),
                n = s.n(a);
            let l = 2 / 3,
                r = 12;
            class i {
                getWidth(e) {
                    return this.getRenderOptions(e).columnWidth
                }
                getRenderOptions(e) {
                    if (e <= this.minWidth) return {
                        columns: 1,
                        columnWidth: this.minWidth
                    };
                    let t = e / this.maxWidth,
                        s = e / this.minWidth,
                        a = Math.max(Math.floor(t + (s - t) / 2), 1),
                        n = this.gap * (a - 1);
                    return {
                        columns: a,
                        columnWidth: (e - n) / a
                    }
                }
                constructor({
                    minWidth: e,
                    maxWidth: t,
                    gap: s
                }) {
                    n(e < t, "minWidth needs to be smaller than maxWidth"), this.minWidth = e, this.maxWidth = t, this.gap = s
                }
            }
            let o = {
                    columns: 1,
                    columnWidth: 450
                },
                u = e => {
                    let t = e - 2;
                    return [t, Math.ceil(t * l)]
                },
                d = 12,
                c = e => 60 + u(e - 2 * d)[1] + 24 + 3 * r
        },
        193695: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                DEFAULT_INCREASED_ACTIVITY_FORUM_POST_HEIGHT: function() {
                    return ej
                },
                default: function() {
                    return ey
                }
            });
            var a = s("920040"),
                n = s("773670"),
                l = s("575482"),
                r = s.n(l),
                i = s("161179"),
                o = s.n(i),
                u = s("377849"),
                d = s.n(u),
                c = s("947980"),
                h = s("497411"),
                m = s("500947"),
                f = s("498225"),
                g = s("912557"),
                C = s("77078"),
                x = s("125667"),
                p = s("225664"),
                S = s("731898"),
                _ = s("419135"),
                T = s("206230"),
                N = s("692171"),
                E = s("651693"),
                v = s("605160"),
                M = s("875978"),
                A = s("70845"),
                I = s("913491"),
                j = s("95045"),
                R = s("574073"),
                O = s("359132"),
                y = s("836943"),
                b = s("933629"),
                F = s("592707"),
                L = s("350134"),
                P = s("232259"),
                w = s("144491"),
                D = s("208021"),
                k = s("582713"),
                U = s("300322"),
                H = s("845579"),
                G = s("982108"),
                B = s("42203"),
                z = s("957255"),
                V = s("660478"),
                W = s("27618"),
                K = s("471671"),
                Y = s("738107"),
                q = s("952368"),
                Z = s("491605"),
                X = s("505684"),
                Q = s("109264"),
                J = s("566998"),
                $ = s("708062"),
                ee = s("956089"),
                et = s("888400"),
                es = s("700097"),
                ea = s("670902"),
                en = s("339792"),
                el = s("154695"),
                er = s("612278"),
                ei = s("791234"),
                eo = s("994810"),
                eu = s("867965"),
                ed = s("43836"),
                ec = s("512630"),
                eh = s("152637"),
                em = s("578198"),
                ef = s("968462"),
                eg = s("136460"),
                eC = s("601016"),
                ex = s("810758"),
                ep = s("390083"),
                eS = s("49111"),
                e_ = s("724210"),
                eT = s("648564"),
                eN = s("719347"),
                eE = s("782340"),
                ev = s("200547"),
                eM = s("854519"),
                eA = s("422137");
            let eI = 26,
                ej = 162 + eI,
                eR = async () => {
                    let {
                        default: e
                    } = await s.el("170206").then(s.t.bind(s, "170206", 19));
                    return e
                };

            function eO(e) {
                let {
                    shouldAnimate: t = !1
                } = e, s = (0, f.useStateFromStores)([T.default], () => T.default.useReducedMotion);
                return (0, a.jsxs)("div", {
                    className: ev.startTheConversation,
                    children: [(0, a.jsx)(Z.default, {
                        importData: eR,
                        shouldAnimate: t && !s,
                        className: ev.wavingHand
                    }), (0, a.jsx)(C.Text, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: eE.default.Messages.FORUM_START_THE_CONVERSATION_HEADER
                    })]
                })
            }
            var ey = n.memo(function(e) {
                let {
                    className: t,
                    threadId: s,
                    goToThread: l,
                    observePostVisibilityAnalytics: i
                } = e, u = n.useRef(null), {
                    channel: d,
                    isOpen: h,
                    messageCount: m,
                    unreadCount: g,
                    firstMessage: x,
                    firstMessageLoaded: p,
                    firstMedia: _,
                    firstMediaIsEmbed: T
                } = function(e) {
                    let {
                        threadId: t
                    } = e, s = (0, f.useStateFromStores)([B.default], () => B.default.getChannel(t));
                    o(null != s, "the thread should not be null here, a store must have missed an update");
                    let a = (0, f.useStateFromStores)([G.default], () => G.default.getCurrentSidebarChannelId(s.parent_id) === s.id),
                        {
                            loaded: n,
                            firstMessage: l
                        } = (0, er.useFirstForumPostMessage)(s),
                        {
                            content: r,
                            firstMedia: i,
                            firstMediaIsEmbed: u
                        } = (0, el.useForumPostFirstMessageMarkup)({
                            firstMessage: l
                        }),
                        {
                            messageCount: d,
                            unreadCount: c
                        } = (0, el.useMessageCount)(s);
                    return {
                        channel: s,
                        isOpen: a,
                        messageCount: d,
                        unreadCount: c,
                        firstMessage: l,
                        firstMessageLoaded: n,
                        firstMedia: i,
                        firstMediaIsEmbed: u,
                        content: r
                    }
                }({
                    threadId: s
                }), N = (0, f.useStateFromStores)([B.default], () => B.default.getChannel(d.parent_id)), {
                    ref: E,
                    height: v
                } = (0, S.default)(), M = (0, em.useForumPostComposerStore)(e => e.setCardHeight), [A, I] = n.useState(162);
                n.useEffect(() => {
                    null != v && (M(s, v + eI), I(v))
                }, [E, v, M, s, I, p]), n.useEffect(() => {
                    null == i || i(u.current, s)
                }, [i, s, p]);
                let j = n.useRef(null),
                    {
                        handleLeftClick: R,
                        handleRightClick: O
                    } = (0, ep.default)({
                        facepileRef: j,
                        goToThread: l,
                        channel: d
                    }),
                    {
                        role: y,
                        onFocus: b,
                        ...F
                    } = (0, c.useListItem)(s),
                    {
                        handleFocus: L,
                        handleBlur: P
                    } = (0, ex.default)(b);
                return (0, a.jsxs)("div", {
                    ref: u,
                    "data-item-id": s,
                    onClick: R,
                    onContextMenu: O,
                    className: r(ev.container, t, {
                        [ev.isOpen]: h
                    }),
                    children: [(0, a.jsx)(C.Clickable, {
                        onClick: R,
                        focusProps: {
                            ringTarget: u
                        },
                        onContextMenu: O,
                        "aria-label": eE.default.Messages.FORUM_POST_ARIA_LABEL.format({
                            title: d.name,
                            count: m
                        }),
                        className: ev.focusTarget,
                        onFocus: L,
                        onBlur: P,
                        ...F
                    }), (0, a.jsxs)("div", {
                        className: ev.body,
                        children: [(0, a.jsx)("div", {
                            ref: E,
                            className: ev.contentContainer,
                            children: p ? (0, a.jsx)(eb, {
                                parentChannel: N,
                                channel: d,
                                firstMessage: x,
                                messageCount: m,
                                unreadCount: g,
                                facepileRef: j,
                                onClick: R
                            }) : (0, a.jsx)(ef.ForumPostContentPlaceholder, {})
                        }), p ? (null == x ? void 0 : x.blocked) || null == _ ? null : (0, a.jsx)(eB, {
                            channel: d,
                            firstMedia: _,
                            firstMessage: x,
                            isEmbed: T,
                            contentHeight: A
                        }) : (0, a.jsx)(ef.ForumPostMediaPreviewPlaceholder, {})]
                    })]
                })
            });

            function eb(e) {
                let {
                    parentChannel: t,
                    channel: s,
                    firstMessage: n,
                    messageCount: l,
                    unreadCount: r,
                    facepileRef: i,
                    onClick: o
                } = e, {
                    isNew: u
                } = (0, el.useForumPostReadStates)(s), {
                    forumPostContainsTags: d
                } = (0, eC.useTagsRowHooks)({
                    channel: s,
                    isNew: u
                });
                return (0, a.jsxs)("div", {
                    className: ev.content,
                    children: [(0, a.jsxs)("div", {
                        className: ev.titleAndMessage,
                        children: [d && (0, a.jsx)(eC.IncreasedActivityTagsRow, {
                            channel: s,
                            className: ev.tagsRow,
                            tagsClassName: ev.tags
                        }), d && (0, a.jsx)("hr", {
                            className: ev.separator
                        }), (0, a.jsx)(eG, {
                            channel: s,
                            firstMessage: n,
                            isNew: u,
                            containsTags: d
                        }), (0, a.jsx)(C.HeadingLevel, {
                            children: (0, a.jsx)(ew, {
                                channel: s,
                                onClick: o
                            })
                        }), null != n && (0, a.jsx)(eF, {
                            firstMessage: n
                        })]
                    }), (0, a.jsxs)("div", {
                        className: ev.engagement,
                        children: [null != n && (0, a.jsx)(ek, {
                            channel: s,
                            firstMessage: n
                        }), (0, a.jsx)(eL, {
                            parentChannel: t,
                            channel: s,
                            messageCount: l,
                            unreadCount: r,
                            facepileRef: i
                        })]
                    })]
                })
            }

            function eF(e) {
                let {
                    firstMessage: t
                } = e, s = (0, f.useStateFromStores)([W.default], () => null != t && W.default.isBlocked(t.author.id)), {
                    content: l
                } = n.useMemo(() => (null == t ? void 0 : t.content) != null && "" !== t.content ? (0, j.default)(t, {
                    formatInline: !0,
                    noStyleAndInteraction: !0,
                    allowHeading: !0,
                    allowList: !0
                }) : {
                    content: null
                }, [t]);
                return (0, a.jsx)(C.FocusBlock, {
                    "aria-hidden": !0,
                    className: ev.firstMessageContent,
                    children: s ? eE.default.Messages.FORUM_POST_BLOCKED_FIRST_MESSAGE : null == l ? eE.default.Messages.REPLY_QUOTE_MESSAGE_DELETED : l
                })
            }

            function eL(e) {
                let {
                    parentChannel: t,
                    channel: s,
                    messageCount: n,
                    unreadCount: l,
                    facepileRef: i
                } = e, o = (0, el.useTypingUserIds)(s), {
                    mostRecentMessage: u
                } = (0, er.useMostRecentForumMessage)(t, s), d = (0, f.useStateFromStores)([z.default], () => z.default.can(eS.Permissions.SEND_MESSAGES_IN_THREADS, s)), {
                    hasUnreads: c
                } = (0, el.useForumPostReadStates)(s), h = (0, f.useStateFromStores)([ea.default], () => ea.default.getFirstNoReplyThreadId()), m = (0, U.useIsNonModInLockedThread)(s), g = (0, R.useNullableMessageAuthor)(u);
                if (n > 0) {
                    var x, p;
                    return (0, a.jsxs)(C.Clickable, {
                        onClick: e => {
                            null != u && null != s.parent_id && (e.stopPropagation(), (0, eu.trackForumPostClicked)({
                                guildId: s.guild_id,
                                channelId: s.parent_id,
                                postId: s.id,
                                location: {
                                    page: eS.AnalyticsPages.GUILD_CHANNEL,
                                    section: eS.AnalyticsSections.FORUM_CHANNEL_POST
                                }
                            }), e.shiftKey ? (0, w.transitionToThreadMessage)(s, u.id, eT.OpenThreadAnalyticsLocations.BROWSER) : D.default.openThreadAsSidebar({
                                guildId: s.guild_id,
                                channelId: s.id,
                                baseChannelId: s.parent_id,
                                flash: !0,
                                details: {
                                    type: k.SidebarOpenDetailsType.THREAD,
                                    initialMessageId: u.id
                                }
                            }))
                        },
                        children: [(0, a.jsxs)(C.HiddenVisually, {
                            children: ["Latest message:", null != g ? null !== (x = g.nick) && void 0 !== x ? x : eE.default.Messages.UNKNOWN_USER : null, " ", null == (p = null == u ? void 0 : u.content) ? "" : p.length > 120 ? "".concat(p.substring(0, 120), "...") : p]
                        }), (0, a.jsxs)(C.FocusBlock, {
                            className: ev.replies,
                            children: [(0, a.jsx)(eU, {
                                messageCount: n,
                                unreadCount: l,
                                iconSize: 16
                            }), o.length > 0 ? (0, a.jsx)(eP, {
                                channel: s,
                                typingUserIds: o,
                                facepileRef: i
                            }) : (0, a.jsx)(eD, {
                                channel: s,
                                mostRecentMessage: u,
                                hasUnreads: c
                            })]
                        })]
                    })
                }
                return m ? (0, a.jsx)("div", {
                    className: ev.replies,
                    children: (0, a.jsx)(C.Text, {
                        variant: "text-sm/semibold",
                        color: "text-muted",
                        className: r(ev.mostRecentMessageContent, ev.nonUserMessage, ev.lockedMessage),
                        children: eE.default.Messages.THREAD_HEADER_NOTICE_ACTIVE_LOCKED
                    })
                }) : d && 0 === n ? (0, a.jsx)(C.FocusBlock, {
                    "aria-hidden": !0,
                    className: ev.replies,
                    children: o.length > 0 ? (0, a.jsx)(eP, {
                        channel: s,
                        typingUserIds: o,
                        facepileRef: i
                    }) : (0, a.jsx)(eO, {
                        shouldAnimate: h === s.id
                    })
                }) : null
            }

            function eP(e) {
                let {
                    channel: t,
                    typingUserIds: s,
                    facepileRef: n
                } = e;
                return (0, a.jsxs)("div", {
                    className: ev.typing,
                    children: [(0, a.jsx)(eh.Facepile, {
                        channel: t,
                        userIds: s,
                        facepileRef: n
                    }), (0, a.jsx)("div", {
                        className: ev.dots,
                        children: (0, a.jsx)(C.Dots, {
                            themed: !0,
                            dotRadius: 2
                        })
                    }), (0, a.jsx)(x.default, {
                        channel: t,
                        className: ev.typingUsers,
                        renderDots: !1
                    })]
                })
            }

            function ew(e) {
                let {
                    channel: t,
                    onClick: s
                } = e, {
                    hasUnreads: l
                } = (0, el.useForumPostReadStates)(t), r = function(e) {
                    let t = (0, f.useStateFromStores)([eo.default], () => eo.default.getHasSearchResults(e.parent_id)),
                        s = (0, f.useStateFromStores)([eo.default], () => eo.default.getSearchQuery(e.parent_id)),
                        a = n.useMemo(() => (0, _.createASTHighlighter)(t && null != s ? s : ""), [t, s]),
                        l = n.useMemo(() => (0, j.default)({
                            content: e.name,
                            embeds: []
                        }, {
                            postProcessor: a
                        }).content, [e.name, a]);
                    return l
                }(t);
                return (0, a.jsx)(C.Heading, {
                    variant: "heading-lg/semibold",
                    color: l ? "header-primary" : "text-muted",
                    className: ev.title,
                    children: (0, a.jsx)(C.Clickable, {
                        onClick: s,
                        children: r
                    })
                })
            }
            let eD = n.memo(function(e) {
                var t;
                let {
                    channel: s,
                    mostRecentMessage: l,
                    hasUnreads: i
                } = e, o = (0, R.useNullableMessageAuthor)(l), u = (0, f.useStateFromStores)([W.default], () => null != l && W.default.isBlocked(l.author.id)), d = (0, f.useStateFromStores)([z.default], () => z.default.can(eS.Permissions.MANAGE_MESSAGES, s)), c = H.RenderSpoilers.useSetting(), h = (0, ed.useIsRecentMessageDeleted)(s), {
                    content: m
                } = n.useMemo(() => (null == l ? void 0 : l.content) != null && "" !== l.content ? (0, j.default)(l, {
                    formatInline: !0,
                    noStyleAndInteraction: !0
                }) : {
                    content: null
                }, [l]), g = null != l && (0, I.default)(l), x = null;
                if (u) x = (0, a.jsx)(C.Text, {
                    className: ev.nonUserMessage,
                    variant: "text-sm/medium",
                    color: "text-muted",
                    children: eE.default.Messages.FORUM_POST_BLOCKED_MOST_RECENT_MESSAGE
                });
                else {
                    let {
                        contentPlaceholder: e,
                        renderedContent: t
                    } = null == l ? {
                        contentPlaceholder: null,
                        renderedContent: null
                    } : g ? {
                        contentPlaceholder: null,
                        renderedContent: es.default.stringify(l, s)
                    } : (0, $.renderSingleLineMessage)(l, m, u, r(ev.mostRecentMessageContent, eA.inlineFormat, eA.smallFontSize), {
                        iconClass: ev.messageContentIcon,
                        iconSize: eN.SINGLE_LINE_MESSAGE_DEFAULT_ICON_SIZE
                    });
                    x = null != t ? (0, a.jsx)(C.Text, {
                        variant: "text-sm/semibold",
                        color: i ? "header-secondary" : "text-muted",
                        className: ev.mostRecentMessageContent,
                        children: t
                    }) : null != e ? (0, a.jsx)(C.Text, {
                        variant: "text-sm/semibold",
                        color: i ? "header-secondary" : "text-muted",
                        className: ev.mostRecentMessageContent,
                        children: e
                    }) : h ? (0, a.jsx)(C.Text, {
                        variant: "text-sm/semibold",
                        color: i ? "header-secondary" : "text-muted",
                        className: r(ev.mostRecentMessageContent, ev.nonUserMessage),
                        children: eE.default.Messages.FORUM_CHANNEL_MOST_RECENT_MESSAGE_DELETED
                    }) : null
                }
                let p = null != o ? null !== (t = o.nick) && void 0 !== t ? t : eE.default.Messages.UNKNOWN_USER : null,
                    S = (0, P.useUsernameHook)(null == l ? void 0 : l.author, s.id, s.guild_id, !0)(null != o ? o : void 0)((0, a.jsxs)(a.Fragment, {
                        children: [null != p ? p : "", null != l ? ":" : ""]
                    }), s.id);
                return (0, a.jsx)(X.ObscuredDisplayContext.Provider, {
                    value: (0, A.default)(c, d),
                    children: (0, a.jsxs)("div", {
                        className: ev.mostRecentMessage,
                        children: [null == p || g ? null : (0, a.jsx)("div", {
                            className: ev.mostRecentMessageAuthor,
                            children: (0, a.jsx)(C.Text, {
                                tag: "span",
                                variant: "text-sm/semibold",
                                children: S
                            })
                        }), (0, a.jsx)(C.FocusBlock, {
                            children: x
                        })]
                    })
                })
            });

            function ek(e) {
                let {
                    channel: t,
                    firstMessage: s
                } = e, l = (0, f.useStateFromStores)([B.default], () => B.default.getChannel(t.parent_id)), i = (0, el.useDefaultReactionEmoji)(l), {
                    disableReactionUpdates: o,
                    disableReactionCreates: u,
                    isLurking: d,
                    isPendingMember: c
                } = (0, O.default)(t), h = (0, F.findReactionIndex)(s.reactions, i) >= 0, {
                    enabled: m,
                    hasTwoButtonEntryPoint: g
                } = (0, p.useBurstReactionsExperiment)(t.guild_id), C = (0, f.useStateFromStores)([N.default], () => N.default.remainingBurstCurrency), {
                    ref: x,
                    width: _
                } = (0, S.default)(), [T, E] = n.useState(10), [v, A] = n.useState(!0);
                return n.useEffect(() => {
                    if (null == _) return;
                    let e = Math.floor((_ - 78) / 66);
                    E(e), A(!1)
                }, [_, s.reactions, i]), (0, a.jsxs)("div", {
                    className: r(ev.reactionRow, {
                        [ev.loading]: v
                    }),
                    ref: x,
                    children: [h || u || null == i ? null : (0, a.jsx)(L.Reaction, {
                        className: ev.defaultReaction,
                        message: s,
                        readOnly: !1,
                        useChatFontScaling: !0,
                        isLurking: d,
                        isPendingMember: c,
                        emoji: i,
                        type: M.ReactionTypes.NORMAL,
                        hideCount: !0,
                        count: 0,
                        me: !1,
                        burst_count: 0,
                        me_burst: !1
                    }), (0, a.jsx)(F.default, {
                        message: s,
                        channel: t,
                        disableReactionCreates: u,
                        disableReactionUpdates: o,
                        useChatFontScaling: !0,
                        className: ev.messageReactions,
                        reactionClassName: ev.reaction,
                        hoistReaction: i,
                        forceHideReactionCreates: !0,
                        maxReactions: T
                    }), (0, a.jsxs)("div", {
                        className: ev.addReactionContainer,
                        children: [!u && (0, a.jsx)(y.ButtonAddReaction, {
                            type: M.ReactionTypes.NORMAL,
                            message: s,
                            channel: t,
                            useChatFontScaling: !0,
                            className: ev.addReactButton,
                            isForumToolbar: !1
                        }), !u && m && g && (0, a.jsx)(y.ButtonAddReaction, {
                            type: M.ReactionTypes.BURST,
                            remainingBurstCurrency: C,
                            message: s,
                            channel: t,
                            useChatFontScaling: !0,
                            isForumToolbar: !1,
                            className: ev.addReactButton
                        })]
                    })]
                })
            }

            function eU(e) {
                let {
                    messageCount: t,
                    unreadCount: s,
                    iconSize: n
                } = e;
                return (0, a.jsxs)("div", {
                    className: ev.messageCountBox,
                    children: [(0, a.jsx)("span", {
                        className: ev.messageCountIcon,
                        children: (0, a.jsx)(Q.default, {
                            width: n,
                            height: n
                        })
                    }), "number" == typeof t ? (0, a.jsx)(Y.default, {
                        value: t,
                        className: ev.messageCountText
                    }) : (0, a.jsx)("div", {
                        className: ev.messageCountText,
                        children: t
                    }), null == s ? null : (0, a.jsx)(C.Text, {
                        className: ev.unreadMessagesCount,
                        variant: "text-sm/semibold",
                        color: "text-brand",
                        children: eE.default.Messages.FORUM_POST_MESSAGE_COUNT_SHORT_PARENTHETICAL.format({
                            count: s
                        })
                    })]
                })
            }

            function eH(e) {
                var t;
                let {
                    channel: s
                } = e, {
                    sortOrder: n
                } = (0, en.useForumChannelStore)(s.parent_id), l = (0, el.useLastActiveTimestamp)(s, n), r = (0, f.useStateFromStores)([V.default], () => V.default.lastMessageId(s.id)), i = null != r ? m.default.extractTimestamp(r) : null, o = null === (t = s.threadMetadata) || void 0 === t ? void 0 : t.createTimestamp, u = null == l ? null : n === h.ThreadSortOrder.CREATION_DATE ? eE.default.Messages.FORUM_POST_CREATED_AT_TOOLTIP.format({
                    timestamp: l
                }) : l, c = n === h.ThreadSortOrder.CREATION_DATE && null != o ? eE.default.Messages.FORUM_POST_CREATED_AT_TOOLTIP.format({
                    timestamp: (0, et.dateFormat)(d(o), "LLLL")
                }) : null != i ? (0, et.dateFormat)(d(i), "LLLL") : null;
                return null == c || null == u ? null : (0, a.jsx)(C.Tooltip, {
                    text: c,
                    tooltipClassName: ev.timestampTooltip,
                    "aria-label": eE.default.Messages.FORUM_POST_CREATED_AT_TOOLTIP_LABEL,
                    children: e => (0, a.jsx)(C.Text, {
                        variant: "text-xs/medium",
                        color: "header-secondary",
                        ...e,
                        children: u
                    })
                })
            }

            function eG(e) {
                let {
                    channel: t,
                    firstMessage: s,
                    isNew: n,
                    containsTags: l
                } = e, r = t.hasFlag(e_.ChannelFlags.PINNED), i = (0, f.useStateFromStores)([W.default], () => null != s && W.default.isBlocked(s.author.id));
                return (0, a.jsxs)("div", {
                    className: ev.header,
                    children: [!l && r && (0, a.jsx)("div", {
                        className: ev.pinIcon,
                        children: (0, a.jsx)(C.Tooltip, {
                            text: eE.default.Messages.PINNED_POST,
                            children: e => (0, a.jsx)(J.default, {
                                ...e,
                                width: eC.PIN_ICON_SIZE,
                                height: eC.PIN_ICON_SIZE,
                                color: "white"
                            })
                        })
                    }), !i && (0, a.jsx)(eg.default, {
                        channel: t,
                        message: s
                    }), (0, a.jsx)(eH, {
                        channel: t
                    }), n && (0, a.jsx)(ee.TextBadge, {
                        className: ev.newBadge,
                        color: g.default.unsafe_rawColors.BRAND_260.css,
                        text: eE.default.Messages.NEW
                    })]
                })
            }

            function eB(e) {
                let {
                    channel: t,
                    firstMedia: s,
                    firstMessage: n,
                    isEmbed: l,
                    contentHeight: i
                } = e, o = (0, f.useStateFromStores)([K.default], () => K.default.isFocused()), u = (0, E.isAnimatedImageUrl)(s.src), d = H.GifAutoPlay.useSetting(), {
                    src: c,
                    width: h,
                    height: m,
                    alt: g
                } = s, [x, p] = (0, v.useShouldObscure)({
                    media: s,
                    channel: t
                }), S = (0, v.getObscuredAlt)(p);
                return (0, a.jsx)(C.FocusBlock, {
                    enabled: !0,
                    children: (0, a.jsxs)("div", {
                        className: r(ev.bodyMedia, {
                            [eM.embedFull]: l
                        }),
                        style: {
                            height: i,
                            borderColor: (0, ei.getEmbedColor)(n, x)
                        },
                        onClick: e => e.stopPropagation(),
                        children: [c.startsWith("data:") ? (0, a.jsx)(q.default, {
                            src: c,
                            width: h,
                            height: m,
                            minWidth: 143,
                            minHeight: i,
                            maxHeight: i,
                            alt: null != g && x ? S : g,
                            imageClassName: r({
                                [ev.obscured]: x
                            })
                        }) : (0, b.renderImageComponent)({
                            src: c,
                            width: h,
                            height: m,
                            minWidth: 143,
                            minHeight: i,
                            maxHeight: i,
                            alt: null != g && x ? S : g,
                            autoPlay: d,
                            animated: u && !x && o,
                            imageContainerClassName: r({
                                [ev.obscured]: x
                            })
                        }), x && (0, a.jsx)(ec.default, {
                            iconClassname: ev.obscuredTag,
                            obscureReason: p
                        })]
                    })
                })
            }
        },
        855455: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                MOSAIC_MIN_INDEX: function() {
                    return r
                },
                MOSAIC_MAX_INDEX: function() {
                    return i
                },
                MOSAIC_MAX_IMAGE_COUNT: function() {
                    return o
                },
                useImageContainerStyles: function() {
                    return h
                },
                useImageDimensionStyles: function() {
                    return f
                }
            });
            var a = s("773670"),
                n = s("703275"),
                l = s.n(n);
            let r = 0,
                i = 4,
                o = 4,
                u = "absolute",
                d = (e, t, s, a) => {
                    if (0 === s) return [];
                    if (1 === s) return [{
                        width: e,
                        height: t,
                        top: 0,
                        left: 0,
                        position: u
                    }];
                    if (2 === s) {
                        let s = Math.ceil((e - a) / 2);
                        return [{
                            top: 0,
                            left: 0,
                            position: u,
                            width: s,
                            height: t
                        }, {
                            top: 0,
                            left: s + a,
                            position: u,
                            width: s,
                            height: t
                        }]
                    }
                    if (3 === s) {
                        let s = Math.ceil((e - a) / 2),
                            n = Math.ceil((t - a) / 2);
                        return [{
                            top: 0,
                            left: 0,
                            position: u,
                            width: s,
                            height: t
                        }, {
                            top: 0,
                            left: s + a,
                            position: u,
                            width: s,
                            height: n
                        }, {
                            top: n + a,
                            left: s + a,
                            position: u,
                            width: s,
                            height: n
                        }]
                    } else {
                        let s = Math.ceil((e - a) / 2),
                            n = Math.ceil((t - a) / 2);
                        return [{
                            top: 0,
                            left: 0,
                            position: u,
                            width: s,
                            height: n
                        }, {
                            top: n + a,
                            left: 0,
                            position: u,
                            width: s,
                            height: n
                        }, {
                            top: 0,
                            left: s + a,
                            position: u,
                            width: s,
                            height: n
                        }, {
                            top: n + a,
                            left: s + a,
                            position: u,
                            width: s,
                            height: n
                        }]
                    }
                },
                c = new l({
                    max: 100
                });

            function h(e) {
                let {
                    numAttachments: t,
                    containerWidth: s,
                    containerHeight: n
                } = e;
                return a.useMemo(() => (function(e) {
                    var t, s, a;
                    let {
                        numAttachments: n,
                        containerWidth: l,
                        containerHeight: r
                    } = e;
                    let i = (t = n, s = l, a = r, "".concat(t, "-").concat(s, "-").concat(a)),
                        o = c.get(i);
                    if (null != o) return o;
                    {
                        let e = d(l, r, n, 4);
                        return c.set(i, e), e
                    }
                })({
                    numAttachments: t,
                    containerWidth: s,
                    containerHeight: n
                }), [t, s, n])
            }

            function m(e) {
                return e.map((t, s) => ({
                    minWidth: 2 * e[s].width,
                    minHeight: 2 * e[s].height,
                    maxWidth: 2 * e[s].width,
                    maxHeight: 2 * e[s].height
                }))
            }

            function f(e) {
                let {
                    imageContainerStyles: t,
                    containerWidth: s,
                    containerHeight: n
                } = e, l = a.useRef(m(t)), r = a.useRef(s), i = a.useRef(n), o = s > r.current + 100, u = n > i.current + 100;
                return (o || u) && (l.current = m(t)), l.current
            }
        },
        337113: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return m
                }
            });
            var a = s("920040");
            s("773670");
            var n = s("575482"),
                l = s.n(n),
                r = s("377849"),
                i = s.n(r),
                o = s("77078"),
                u = s("32238"),
                d = s("49111"),
                c = s("782340"),
                h = s("536889"),
                m = e => {
                    let {
                        rateLimitPerUser: t,
                        slowmodeCooldownGuess: s,
                        isBypassSlowmode: n,
                        leadingIcon: r = !1
                    } = e, m = "", f = "";
                    if (t >= d.Durations.HOUR) {
                        let e = Math.floor(t / d.Durations.HOUR),
                            s = Math.floor((t - e * d.Durations.HOUR) / d.Durations.MINUTE),
                            a = t - e * d.Durations.HOUR - s * d.Durations.MINUTE;
                        f = c.default.Messages.FORUM_SLOWMODE_DESC_HOURS.format({
                            hours: e,
                            minutes: s,
                            seconds: a
                        })
                    } else if (t >= 60) {
                        let e = Math.floor(t / 60),
                            s = t - 60 * e;
                        f = c.default.Messages.FORUM_SLOWMODE_DESC_MINUTES.format({
                            minutes: e,
                            seconds: s
                        })
                    } else f = c.default.Messages.FORUM_SLOWMODE_DESC.format({
                        seconds: t
                    });
                    if (!n && s > 0) {
                        let e = i.duration(s);
                        if (s > 1e3 * d.Durations.HOUR) {
                            let t = "".concat(e.minutes()).padStart(2, "0"),
                                s = "".concat(e.seconds()).padStart(2, "0");
                            m = "".concat(e.hours(), ":").concat(t, ":").concat(s)
                        } else {
                            let t = "".concat(e.seconds()).padStart(2, "0");
                            m = "".concat(e.minutes(), ":").concat(t)
                        }
                    } else m = n ? c.default.Messages.CHANNEL_SLOWMODE_DESC_IMMUNE : c.default.Messages.CHANNEL_SLOWMODE_DESC_SHORT;
                    let g = (0, a.jsx)(o.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: m
                        }),
                        C = (0, a.jsx)(u.default, {
                            className: l(h.slowModeIcon, {
                                [h.leadingIcon]: r
                            })
                        });
                    return (0, a.jsx)(o.Tooltip, {
                        text: f,
                        children: e => (0, a.jsx)("div", {
                            className: h.cooldownWrapper,
                            ...e,
                            children: r ? (0, a.jsxs)(a.Fragment, {
                                children: [C, g]
                            }) : (0, a.jsxs)(a.Fragment, {
                                children: [g, C]
                            })
                        })
                    })
                }
        },
        552683: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return x
                }
            });
            var a = s("920040"),
                n = s("773670"),
                l = s("947980"),
                r = s("77078"),
                i = s("446674"),
                o = s("206230"),
                u = s("339792"),
                d = s("154695"),
                c = s("867965"),
                h = s("90625"),
                m = s("49111"),
                f = s("782340"),
                g = s("690127");

            function C() {
                return Promise.resolve()
            }

            function x(e) {
                let {
                    channel: t,
                    closePopout: s,
                    setPopoutRef: x
                } = e, p = (0, d.useVisibleForumTags)(t), {
                    tagFilter: S
                } = (0, u.useForumChannelStore)(t.id), _ = (0, u.useForumChannelStoreApi)(), T = (0, i.useStateFromStores)([o.default], () => o.default.keyboardModeEnabled), N = n.useCallback(e => {
                    (0, c.trackForumTagFilterClicked)({
                        guildId: t.guild_id,
                        channelId: t.id,
                        tagId: e,
                        filterTagIds: Array.from(S),
                        added: !S.has(e),
                        location: {
                            page: m.AnalyticsPages.GUILD_CHANNEL,
                            section: m.AnalyticsSections.FORUM_CHANNEL_HEADER,
                            object: m.AnalyticsObjects.CHANNEL_TAG
                        }
                    }), _.getState().toggleTagFilter(t.id, e)
                }, [t, S, _]), E = n.useCallback(() => {
                    _.getState().setTagFilter(t.id, new Set), !T && s()
                }, [_, t.id, T, s]), v = (0, l.default)({
                    id: "".concat(t.id, "-all-tags-dropdown-navigator"),
                    isEnabled: !0,
                    wrap: !0,
                    scrollToStart: C,
                    scrollToEnd: C
                }), M = n.useRef(null);
                return n.useEffect(() => {
                    requestAnimationFrame(() => {
                        if (null != M.current) {
                            let e = M.current.querySelector(".".concat(g.tag));
                            null != e && e.focus()
                        }
                    })
                }, []), (0, a.jsxs)(r.Dialog, {
                    ref: x,
                    "aria-label": f.default.Messages.FORUM_TAG_FILTER_HEADER,
                    className: g.container,
                    children: [(0, a.jsx)("div", {
                        className: g.header,
                        children: (0, a.jsxs)("div", {
                            className: g.headerLeft,
                            children: [(0, a.jsx)(r.Heading, {
                                color: "interactive-normal",
                                variant: "text-xs/bold",
                                className: g.headerText,
                                children: f.default.Messages.FORUM_TAG_POST_SELECT
                            }), (0, a.jsx)("div", {
                                className: g.countContainer,
                                children: (0, a.jsx)(r.Text, {
                                    className: g.countText,
                                    color: "none",
                                    variant: "text-xs/medium",
                                    children: S.size
                                })
                            })]
                        })
                    }), (0, a.jsx)(l.ListNavigatorProvider, {
                        navigator: v,
                        children: (0, a.jsx)(l.ListNavigatorContainer, {
                            children: e => {
                                let {
                                    ref: t,
                                    ...s
                                } = e;
                                return (0, a.jsx)("div", {
                                    ref: e => {
                                        t.current = e, M.current = e
                                    },
                                    ...s,
                                    className: g.tagContainer,
                                    children: p.map(e => (0, a.jsx)(h.default, {
                                        className: g.tag,
                                        tag: e,
                                        selected: S.has(e.id),
                                        onClick: () => N(e.id)
                                    }, e.id))
                                })
                            }
                        })
                    }), (0, a.jsx)("div", {
                        className: g.separator
                    }), (0, a.jsx)(r.Button, {
                        look: r.Button.Looks.LINK,
                        size: r.Button.Sizes.MIN,
                        color: r.Button.Colors.CUSTOM,
                        className: g.clear,
                        "aria-label": f.default.Messages.FORUM_CLEAR_ALL,
                        onClick: E,
                        children: (0, a.jsx)(r.Text, {
                            variant: "text-sm/medium",
                            color: "text-link",
                            children: f.default.Messages.FORUM_CLEAR_ALL
                        })
                    })]
                })
            }
        },
        589455: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return u
                }
            });
            var a = s("773670"),
                n = s("436961"),
                l = s("77078");
            let r = "undefined" == typeof ResizeObserver ? n.ResizeObserver : ResizeObserver,
                i = new Map,
                o = new r(e => {
                    e.forEach(e => {
                        var t;
                        let {
                            target: s
                        } = e;
                        null === (t = i.get(s)) || void 0 === t || t(e)
                    })
                });
            var u = () => {
                let e = a.useRef(null),
                    [t, s] = a.useState(400),
                    n = a.useCallback(() => {
                        null !== e.current && s(e.current.clientWidth)
                    }, [s, e]);
                return (0, l.useResizeObserverSubscription)({
                    ref: e,
                    key: "forum-container",
                    onUpdate: n,
                    resizeObserver: o,
                    listenerMap: i
                }), {
                    containerRef: e,
                    containerWidth: t
                }
            }
        },
        485055: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return m
                },
                useForumGridItem: function() {
                    return x
                },
                GridNavigatorProvider: function() {
                    return p
                }
            });
            var a = s("920040"),
                n = s("773670"),
                l = s("706137"),
                r = s("756823"),
                i = s("542194");
            let o = "data-grid-item-id",
                u = "data-grid-section",
                d = "data-grid-prev-section-boundary",
                c = new Set([r.Keys.UP, r.Keys.DOWN, r.Keys.LEFT, r.Keys.RIGHT]);

            function h(e) {
                let {
                    section: t,
                    column: s,
                    row: a
                } = e, n = "[".concat(u, '="').concat(t, '"]'), l = "[".concat("aria-colindex", '="').concat(s, '"]'), r = "[".concat("aria-rowindex", '="').concat(a, '"]');
                return "".concat(n).concat(l).concat(r)
            }

            function m(e) {
                let {
                    id: t,
                    isEnabled: s,
                    setFocus: a
                } = e, u = n.useRef(null), m = n.useRef(!1), f = n.useRef(null), g = n.useRef(s);
                n.useLayoutEffect(() => {
                    g.current = s
                }, [s]);
                let C = n.useCallback(e => {
                        var t;
                        return (null !== (t = f.current) && void 0 !== t ? t : document).querySelector(e)
                    }, []),
                    x = n.useCallback((e, t) => {
                        g.current && a(e, t)
                    }, [a]),
                    p = n.useCallback(e => {
                        if (g.current) {
                            var t;
                            null === (t = document.querySelector(e)) || void 0 === t || t.focus()
                        }
                    }, []),
                    S = n.useCallback(e => {
                        u.current = e;
                        let s = (0, i.createSelector)(e, o),
                            a = (0, i.getItemId)(e);
                        x(s, a), (0, l.notifyFocusSubscribers)(t, a, !0)
                    }, [t, x]),
                    [_, T] = n.useState(!1),
                    N = n.useRef(_);
                n.useLayoutEffect(() => {
                    N.current = _
                }, [_]), n.useLayoutEffect(() => {
                    let e = f.current;
                    if (null != e) return e.addEventListener("focusin", s), e.addEventListener("focusout", a), e.addEventListener("focus", n), e.addEventListener("scroll", l, {
                        passive: !0
                    }), () => {
                        e.removeEventListener("focusin", s), e.removeEventListener("focusout", a), e.removeEventListener("focus", n), e.removeEventListener("scroll", l)
                    };

                    function s() {
                        T(!0)
                    }

                    function a(e) {
                        !e.currentTarget.contains(e.relatedTarget) && (T(!1), requestAnimationFrame(() => {
                            let e = u.current;
                            if (null !== e) {
                                let s = (0, i.createSelector)(e, o);
                                null == C(s) && p((0, i.createSelector)(t, "data-grid-id"))
                            }
                        }))
                    }

                    function n() {
                        let e = f.current,
                            t = N.current;
                        if (t || null == e) return
                    }

                    function l() {
                        m.current = !0
                    }
                }, [t, x, p, S, C]);
                let E = n.useCallback(e => {
                        var t, s;
                        if (!g.current) return;
                        let a = u.current,
                            n = f.current;
                        if (null == a) return;
                        let l = (0, i.createSelector)(a, o),
                            m = null == n ? void 0 : n.querySelector(l);
                        if (null == m) return;
                        let x = parseInt(null !== (t = m.getAttribute("data-grid-section")) && void 0 !== t ? t : ""),
                            p = parseInt(m.getAttribute("aria-rowindex")),
                            _ = parseInt(m.getAttribute("aria-colindex"));
                        switch (c.has(e.key) && (e.stopPropagation(), e.preventDefault()), e.key) {
                            case r.Keys.RIGHT: {
                                let e = C(h({
                                    section: x,
                                    row: p,
                                    column: _ + 1
                                }));
                                if (null != e) {
                                    let t = e.getAttribute(o);
                                    null != t && S(t)
                                }
                                return
                            }
                            case r.Keys.LEFT: {
                                let e = C(h({
                                    section: x,
                                    row: p,
                                    column: _ - 1
                                }));
                                if (null != e) {
                                    let t = e.getAttribute(o);
                                    null != t && S(t)
                                }
                                return
                            }
                            case r.Keys.DOWN: {
                                let e = C(h({
                                    section: x,
                                    row: p + 1,
                                    column: _
                                }));
                                if (null == e && (e = C(h({
                                        section: x + 1,
                                        row: 0,
                                        column: _
                                    }))), null != e) {
                                    let t = e.getAttribute(o);
                                    null != t && S(t)
                                }
                                return
                            }
                            case r.Keys.UP: {
                                let e;
                                if (0 === p) {
                                    let t = parseInt(m.getAttribute(d));
                                    null == (e = C(h({
                                        section: x - 1,
                                        row: t,
                                        column: _
                                    }))) && (e = C(h({
                                        section: x - 1,
                                        row: t - 1,
                                        column: _
                                    })))
                                } else e = C(h({
                                    section: x,
                                    row: p - 1,
                                    column: _
                                }));
                                if (null != e) {
                                    let t = e.getAttribute(o);
                                    null != t && S(t)
                                }
                                return
                            }
                            case r.Keys.SPACE:
                            case r.Keys.ENTER: {
                                if (e.repeat) return;
                                let t = u.current;
                                if (null != t) {
                                    let a = (0, i.createSelector)(t, o),
                                        n = C(a),
                                        l = null !== (s = null == n ? void 0 : n.ownerDocument) && void 0 !== s ? s : document,
                                        r = n === l.activeElement;
                                    null != n && r && (e.preventDefault(), e.stopPropagation(), null == n || n.click())
                                }
                            }
                        }
                    }, [C, S]),
                    v = n.useCallback(e => {
                        let s = null != e ? (0, i.createListItemId)(t, e) : null;
                        u.current = s
                    }, [t]);
                return n.useMemo(() => ({
                    id: t,
                    containerProps: {
                        onKeyDown: E,
                        ref: f
                    },
                    setFocus: v
                }), [t, E, v])
            }
            let f = {
                    id: "NO_LIST",
                    onKeyDown() {},
                    ref: n.createRef()
                },
                g = n.createContext({
                    id: "NO_LIST",
                    setFocus() {}
                }),
                C = n.createContext(f);

            function x(e) {
                let {
                    id: t,
                    section: s,
                    row: a,
                    column: r,
                    boundaries: c
                } = e, [h, m] = n.useState(0 === a && 0 === r ? 0 : -1), f = n.useContext(g), {
                    id: C,
                    setFocus: x
                } = f, p = n.useCallback(() => x(t), [t, x]);
                return n.useLayoutEffect(() => (0, l.addFocusSubscriber)(C, e => {
                    m(e === t ? 0 : -1)
                }), [t, C]), {
                    [o]: (0, i.createListItemId)(C, t),
                    [u]: s,
                    [d]: c[s],
                    role: "gridcell",
                    "aria-rowindex": a,
                    "aria-colindex": r,
                    tabIndex: h,
                    onFocus: p
                }
            }

            function p(e) {
                let {
                    children: t,
                    navigator: s
                } = e, {
                    id: l,
                    setFocus: r,
                    containerProps: {
                        onKeyDown: i,
                        ref: o
                    }
                } = s, u = n.useMemo(() => ({
                    id: l,
                    setFocus: r
                }), [l, r]), d = n.useMemo(() => ({
                    onKeyDown: i,
                    ref: o,
                    id: l
                }), [i, o, l]);
                return (0, a.jsx)(C.Provider, {
                    value: d,
                    children: (0, a.jsx)(g.Provider, {
                        value: u,
                        children: t
                    })
                })
            }
        },
        219840: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return l
                }
            });
            var a = s("773670"),
                n = s("947980");

            function l(e) {
                let {
                    listRef: t,
                    padding: s,
                    channel: l,
                    isEnabled: r
                } = e, i = a.useCallback(e => {
                    let a = t.current,
                        n = document.querySelector(e);
                    if (null != n) null == a || a.scrollIntoViewNode({
                        node: n,
                        padding: s,
                        callback: () => {
                            var t;
                            null === (t = document.querySelector(e)) || void 0 === t || t.focus({
                                preventScroll: !0
                            })
                        }
                    })
                }, [s]), o = a.useCallback(() => new Promise(e => {
                    let s = t.current;
                    null == s || s.scrollToTop({
                        callback: () => requestAnimationFrame(e)
                    })
                }), []), u = a.useCallback(() => new Promise(e => {
                    let s = t.current;
                    null == s || s.scrollToBottom({
                        callback: () => requestAnimationFrame(e)
                    })
                }), []);
                return (0, n.default)({
                    id: "forum-channel-list-".concat(l.id),
                    isEnabled: r,
                    scrollToStart: o,
                    scrollToEnd: u,
                    setFocus: i
                })
            }
        },
        891475: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                useExtractEmbedPreview: function() {
                    return o
                }
            });
            var a = s("773670"),
                n = s("427964"),
                l = s("253981"),
                r = s("639440"),
                i = s("856220");

            function o(e, t, s) {
                let o = a.useRef(new Map),
                    [, u] = a.useState(null),
                    [d, c] = a.useState(null),
                    h = a.useMemo(() => n.debounce((e, s) => {
                        if (null == s || e || 0 === t) return;
                        let a = s.match(l.default.URL_REGEX);
                        if (null == a || 0 === a.length) {
                            o.current = new Map, c(null);
                            return
                        }
                        let r = n.uniq(a).slice(0, i.MAX_THUMBNAIL_COUNT);
                        c(r)
                    }, 1e3), [t, o]);
                a.useEffect(() => {
                    h(e, s)
                }, [h, s, e]), a.useEffect(() => {
                    (async function e(e, t) {
                        if (null == t) return;
                        let s = e.current,
                            a = new Set(s.keys()),
                            n = t.filter(e => !(null == a ? void 0 : a.has(e)));
                        if (0 !== n.length) try {
                            let t = await r.unfurlEmbedUrl(n);
                            e.current = function(e, t, s) {
                                return null == s || s.forEach(s => {
                                    let a = function(e, t) {
                                        return e.find(e => (null == t ? void 0 : t.url) != null && e.startsWith(t.url))
                                    }(t, s);
                                    if (null == a) return;
                                    let n = e.get(a);
                                    null == n ? e.set(a, [s]) : n.push(s)
                                }), e
                            }(new Map(s), n, null == t ? void 0 : t.embeds), u({})
                        } catch (e) {}
                    })(o, d)
                }, [d]);
                let m = o.current,
                    f = a.useMemo(() => {
                        let e = [];
                        return null == d || d.forEach(t => {
                            let s = m.get(t);
                            null != s && e.push(...s)
                        }), e.length > 0 ? e : null
                    }, [d, m]);
                return {
                    embeds: e ? null : f
                }
            }
        },
        781555: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return D
                }
            });
            var a = s("920040"),
                n = s("773670"),
                l = s("575482"),
                r = s.n(l),
                i = s("623829"),
                o = s("498225"),
                u = s("819855"),
                d = s("77078"),
                c = s("841098"),
                h = s("206230"),
                m = s("526812"),
                f = s("404607"),
                g = s("258039"),
                C = s("291444"),
                x = s("592407"),
                p = s("305961"),
                S = s("181114"),
                _ = s("191814"),
                T = s("109264"),
                N = s("945330"),
                E = s("68238"),
                v = s("758710"),
                M = s("58608"),
                A = s("701909"),
                I = s("753582"),
                j = s("49111"),
                R = s("782340"),
                O = s("958139"),
                y = s("112545"),
                b = s("600310"),
                F = s("129185"),
                L = s("338283");

            function P(e) {
                let {
                    handleHide: t
                } = e;
                return (0, a.jsx)(d.Clickable, {
                    onClick: t,
                    className: O.closeButton,
                    "aria-label": R.default.Messages.DISMISS,
                    children: (0, a.jsx)(N.default, {
                        className: O.closeIcon
                    })
                })
            }

            function w(e) {
                let {
                    username: t,
                    title: s,
                    videoSrc: n,
                    messageCount: l,
                    reaction: i,
                    reactionCount: o,
                    classname: u
                } = e;
                return (0, a.jsxs)("div", {
                    className: r(O.videoPreview, u),
                    children: [(0, a.jsx)("div", {
                        className: O.authorRow,
                        children: (0, a.jsxs)("div", {
                            className: O.rowGroup,
                            children: [(0, a.jsx)(d.Text, {
                                tag: "span",
                                className: O.author,
                                variant: "text-sm/semibold",
                                children: t
                            }), (0, a.jsx)(d.Text, {
                                variant: "text-xs/normal",
                                color: "header-secondary",
                                className: O.postCreationTimestamp,
                                children: R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_PREVIEW_TIMESTAMP
                            })]
                        })
                    }), (0, a.jsx)(d.Heading, {
                        variant: "heading-md/extrabold",
                        className: O.title,
                        color: "header-primary",
                        "aria-hidden": !0,
                        children: s
                    }), (0, a.jsx)(_.default, {
                        size: 10
                    }), (0, a.jsx)(M.default, {
                        className: O.video,
                        src: n,
                        autoPlay: !0,
                        loop: !0,
                        muted: !0
                    }), (0, a.jsx)(_.default, {
                        size: 10
                    }), (0, a.jsx)("div", {
                        className: O.footer,
                        children: (0, a.jsxs)("div", {
                            className: O.forumPostControls,
                            children: [(0, a.jsxs)("div", {
                                className: O.messageCountBox,
                                children: [(0, a.jsx)("span", {
                                    className: O.messageCountIcon,
                                    children: (0, a.jsx)(T.default, {
                                        width: 16,
                                        height: 16
                                    })
                                }), (0, a.jsx)(d.Text, {
                                    variant: "text-xs/normal",
                                    color: "interactive-normal",
                                    children: l
                                })]
                            }), (0, a.jsxs)("div", {
                                className: O.reactionBox,
                                children: [(0, a.jsx)("span", {
                                    role: "img",
                                    "aria-label": "",
                                    children: i
                                }), (0, a.jsx)(d.Text, {
                                    variant: "text-xs/normal",
                                    color: "interactive-normal",
                                    children: o
                                })]
                            })]
                        })
                    })]
                })
            }
            var D = e => {
                var t, s;
                let {
                    channel: l
                } = e, T = (0, c.default)(), N = (0, u.isThemeDark)(T), M = (0, o.useStateFromStores)([p.default], () => p.default.getGuild(l.guild_id)), D = (0, o.useStateFromStores)([h.default], () => h.default.useReducedMotion), k = (0, o.useStateFromStores)([m.default], () => m.default.hasHidden(l.id)), U = (0, C.useSubscriptionListingsForChannel)({
                    guildId: l.guild_id,
                    channelId: l.id
                }), {
                    transitions: H,
                    setVisible: G
                } = (0, I.useShowAnimation)(D), B = n.useCallback(() => {
                    G(!1), f.default.hideAdminOnboarding(l.id, !0)
                }, [l, G]);
                n.useEffect(() => {
                    let e = (0, g.isOnboardingDismissed)(l.id);
                    !e && G(!k)
                }, [l, G, k]);
                let z = n.useMemo(() => [R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_FAN_ART_TAG, R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_DESK_SETUP_TAG, R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_PETS_TAG, R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_HOUSEPLANTS_TAG], []),
                    V = n.useMemo(() => [R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_BEHIND_THE_SCENES_TAG, R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_EXCLUSIVE_ART_TAG, R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_PRERELEASES_TAG, R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_TUTORIALS_TAG], []),
                    W = () => {
                        x.default.open(l.guild_id, j.GuildSettingsSections.ROLE_SUBSCRIPTIONS)
                    },
                    K = null !== (t = null == M ? void 0 : M.hasFeature(j.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE)) && void 0 !== t && t,
                    Y = K ? R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_HAS_TIERS_CTA : R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_NO_TIERS_CTA,
                    q = null !== (s = (null == M ? void 0 : M.hasFeature(j.GuildFeatures.CREATOR_MONETIZABLE)) || (null == M ? void 0 : M.hasFeature(j.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL))) && void 0 !== s && s,
                    Z = q ? R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_ABOUT_MONETIZING_TITLE : R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_ABOUT_NON_MONETIZING_TITLE,
                    X = q ? R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_ABOUT_MONETIZING_SUBTITLE : R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_ABOUT_NON_MONETIZING_SUBTITLE;
                return (0, a.jsx)(a.Fragment, {
                    children: H((e, t) => t ? (0, a.jsxs)(i.animated.div, {
                        style: e,
                        className: O.container,
                        children: [(0, a.jsxs)("div", {
                            className: r(O.wrapper, O.headerRow),
                            children: [(0, a.jsxs)(d.Text, {
                                variant: "text-xs/normal",
                                className: O.visibilityInfo,
                                children: [(0, a.jsx)(E.default, {
                                    width: 12,
                                    height: 12,
                                    className: O.icon
                                }), R.default.Messages.FORUM_CHANNEL_ONBOARDING_VISIBILITY]
                            }), (0, a.jsx)(P, {
                                handleHide: B
                            })]
                        }), (0, a.jsxs)("div", {
                            className: O.contentContainer,
                            children: [(0, a.jsxs)("div", {
                                className: r(O.contentRow, q && O.contentRowOne),
                                children: [(0, a.jsx)("div", {
                                    className: r(O.contentMediaContainer),
                                    children: (0, a.jsxs)("div", {
                                        className: O.contentVideoContainer,
                                        children: [(0, a.jsx)(w, {
                                            username: R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_PREVIEW_USERNAME_ONE,
                                            videoSrc: "https://cdn.discordapp.com/assets/media_channel/admin_edu_discord_birthday.mp4",
                                            title: R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_PREVIEW_TITLE_ONE,
                                            messageCount: "34",
                                            reaction: "⚡️",
                                            reactionCount: "724",
                                            classname: O.backgroundVideo
                                        }), (0, a.jsx)(w, {
                                            username: R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_PREVIEW_USERNAME_TWO,
                                            videoSrc: "https://cdn.discordapp.com/assets/media_channel/admin_edu_wumpus_onboarding.mp4",
                                            title: R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_PREVIEW_TITLE_TWO,
                                            messageCount: "34",
                                            reactionCount: "84",
                                            reaction: "\uD83D\uDC9E",
                                            classname: r(O.backgroundVideo, O.secondaryVideo)
                                        }), (0, a.jsx)(w, {
                                            username: R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_PREVIEW_USERNAME_THREE,
                                            videoSrc: "https://cdn.discordapp.com/assets/media_channel/admin_edu_scientist_wumpus.mp4",
                                            title: R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_PREVIEW_TITLE_THREE,
                                            messageCount: "7,103",
                                            reaction: "⚡️",
                                            reactionCount: "724",
                                            classname: O.highlightVideo
                                        })]
                                    })
                                }), (0, a.jsxs)("article", {
                                    className: O.contentTextContainer,
                                    children: [(0, a.jsx)(d.Heading, {
                                        variant: "heading-lg/semibold",
                                        color: "header-primary",
                                        children: Z
                                    }), (0, a.jsx)(_.default, {
                                        size: 8
                                    }), (0, a.jsx)(d.Text, {
                                        variant: "text-md/normal",
                                        color: "text-muted",
                                        children: X
                                    }), (0, a.jsx)(_.default, {
                                        size: 16
                                    }), (0, a.jsxs)(d.Clickable, {
                                        onClick: () => open(A.default.getCreatorSupportArticleURL(j.HelpdeskArticles.MEDIA_CHANNEL)),
                                        className: O.helpCenterLink,
                                        children: [(0, a.jsx)(d.Text, {
                                            variant: "text-sm/medium",
                                            color: "text-link",
                                            className: O.helpCenterLinkText,
                                            children: R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_HELP_CENTER
                                        }), (0, a.jsx)(v.default, {
                                            width: 16,
                                            height: 16,
                                            className: O.helpCenterLinkIcon
                                        })]
                                    }), (0, a.jsx)(_.default, {
                                        size: 16
                                    }), (0, a.jsx)("div", {
                                        className: O.mediaChannelTagsContainer,
                                        children: z.map(e => (0, a.jsx)(d.Text, {
                                            variant: "text-sm/medium",
                                            color: "text-normal",
                                            className: O.mediaChannelTag,
                                            children: e
                                        }, e))
                                    })]
                                })]
                            }), q && (0, a.jsxs)("div", {
                                className: r(O.contentRow, O.contentRowTwo),
                                children: [(0, a.jsx)("div", {
                                    className: r(O.contentMediaContainer),
                                    children: (0, a.jsxs)("div", {
                                        className: O.contentImageContainer,
                                        children: [(0, a.jsx)("img", {
                                            src: N ? F : L,
                                            alt: "",
                                            className: r(O.previewEmbedImage, O.secondaryImage)
                                        }), (0, a.jsx)("img", {
                                            src: N ? y : b,
                                            alt: "",
                                            className: O.previewEmbedImage
                                        })]
                                    })
                                }), (0, a.jsxs)("article", {
                                    className: O.contentTextContainer,
                                    children: [(0, a.jsxs)(d.Text, {
                                        variant: "text-xxs/bold",
                                        className: O.serverSubPill,
                                        children: [R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_SERVER_SUB_PILL, " ", (0, a.jsx)("span", {
                                            role: "img",
                                            "aria-label": "",
                                            children: "\uD83D\uDD25"
                                        })]
                                    }), (0, a.jsx)(_.default, {
                                        size: 10
                                    }), (0, a.jsx)(d.Heading, {
                                        variant: "heading-lg/semibold",
                                        color: "header-primary",
                                        children: R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_SHARE_TITLE
                                    }), (0, a.jsx)(_.default, {
                                        size: 8
                                    }), (0, a.jsx)(d.Text, {
                                        variant: "text-md/normal",
                                        color: "text-muted",
                                        children: R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_SHARE_SUBTITLE
                                    }), (0, a.jsx)(_.default, {
                                        size: 16
                                    }), (0, a.jsx)("div", {
                                        className: O.mediaChannelTagsContainer,
                                        children: V.map(e => (0, a.jsx)(d.Text, {
                                            variant: "text-sm/medium",
                                            color: "text-normal",
                                            className: O.mediaChannelTag,
                                            children: e
                                        }, e))
                                    }), (0, a.jsx)(_.default, {
                                        size: 16
                                    }), 0 === U.length && (0, a.jsx)(S.default, {
                                        size: d.Button.Sizes.MEDIUM,
                                        pauseAnimation: D,
                                        onClick: W,
                                        className: O.addChannelButton,
                                        color: d.Button.Colors.CUSTOM,
                                        children: Y
                                    })]
                                })]
                            })]
                        })]
                    }) : null)
                })
            }
        },
        236003: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return m
                }
            });
            var a = s("920040");
            s("773670");
            var n = s("744196"),
                l = s("77078"),
                r = s("850391"),
                i = s("271972"),
                o = s("761354"),
                u = s("1999"),
                d = s("585722"),
                c = s("782340"),
                h = s("2898");

            function m(e) {
                let {
                    parentChannel: t
                } = e, s = (0, n.useStateFromStoresArray)([d.default], () => {
                    let e = d.default.getUploads(t.id, r.ChatInputTypes.CREATE_FORUM_POST.drafts.type);
                    return null == e ? void 0 : e.filter(e => !0 !== e.isThumbnail)
                });
                return (0, a.jsxs)("div", {
                    className: h.container,
                    children: [(0, a.jsx)(l.Text, {
                        variant: "text-md/semibold",
                        color: "text-muted",
                        children: c.default.Messages.MEDIA_CHANNEL_ATTACHMENTS_SECTION_TITLE
                    }), (0, a.jsx)(l.Text, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: c.default.Messages.MEDIA_CHANNEL_ATTACHMENTS_SECTION_DESCRIPTION
                    }), (0, a.jsx)("div", {
                        children: (0, a.jsx)(l.ScrollerThin, {
                            className: h.uploadsContainer,
                            orientation: "horizontal",
                            paddingFix: !1,
                            fade: !0,
                            children: (0, a.jsxs)("div", {
                                className: h.uploads,
                                children: [s.map(e => (0, a.jsx)(o.default, {
                                    channelId: t.id,
                                    draftType: r.ChatInputTypes.CREATE_FORUM_POST.drafts.type,
                                    upload: e,
                                    keyboardModeEnabled: !0,
                                    hideFileName: !0,
                                    size: i.AttachmentListItemSizes.SMALL
                                }, e.id)), (0, a.jsx)(u.ComposerUploadButton, {
                                    channelId: t.id
                                })]
                            })
                        })
                    })]
                })
            }
        },
        549558: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                MediaPostThumbnail: function() {
                    return b
                }
            });
            var a = s("920040"),
                n = s("773670"),
                l = s("575482"),
                r = s.n(l),
                i = s("161179"),
                o = s.n(i),
                u = s("744196"),
                d = s("77078"),
                c = s("81594"),
                h = s("206230"),
                m = s("850391"),
                f = s("9560"),
                g = s("271972"),
                C = s("578198"),
                x = s("855455"),
                p = s("476765"),
                S = s("857171"),
                _ = s("832132"),
                T = s("808404"),
                N = s("987772"),
                E = s("228220"),
                v = s("58608"),
                M = s("412861"),
                A = s("489898"),
                I = s("782340"),
                j = s("896742");
            let R = [{
                    name: "Media Post Thumbnail",
                    extensions: ["jpg", "jpeg", "png", "gif", "webp"]
                }],
                O = (0, p.uid)();

            function y(e) {
                let {
                    mediaAttachments: t,
                    containerWidth: s,
                    containerHeight: n
                } = e, l = (0, x.useImageContainerStyles)({
                    numAttachments: t.length,
                    containerWidth: s,
                    containerHeight: n
                });
                return (0, a.jsx)(a.Fragment, {
                    children: t.map((e, t) => {
                        var s;
                        return (0, a.jsx)("div", {
                            style: l[t],
                            children: !0 === e.isVideo ? (0, a.jsx)(v.default, {
                                src: e.src,
                                className: j.thumbnail,
                                "aria-hidden": !0
                            }) : (0, a.jsx)("img", {
                                src: e.src,
                                className: j.thumbnail,
                                "aria-hidden": !0,
                                alt: null !== (s = null == e ? void 0 : e.alt) && void 0 !== s ? s : ""
                            })
                        }, e.src)
                    })
                })
            }
            let b = e => {
                var t;
                let {
                    parentChannel: l
                } = e, {
                    textAreaState: i
                } = (0, C.useForumPostComposerStore)(e => {
                    let {
                        textAreaState: t
                    } = e;
                    return {
                        textAreaState: t
                    }
                }), x = (0, u.default)([h.default], () => h.default.keyboardModeEnabled), p = (0, A.default)(l, null === (t = i.textValue) || void 0 === t ? void 0 : t.trim()), v = n.useMemo(() => p.find(e => e.isThumbnail), [p]), b = null != p && p.length > 0, F = n.useMemo(() => {
                    let e = (null == p ? void 0 : p.length) > 1 ? 1.15 : 1;
                    return {
                        width: 153 * e,
                        height: 86 * e
                    }
                }, [p]), L = n.useCallback(e => {
                    null != v && c.default.remove(l.id, v.id, m.ChatInputTypes.CREATE_FORUM_POST.drafts.type), (0, M.promptToUpload)(e.currentTarget.files, l, m.ChatInputTypes.CREATE_FORUM_POST.drafts.type, {
                        requireConfirm: !0,
                        isThumbnail: !0
                    }), e.currentTarget.value = null
                }, [l, v]), P = e => {
                    e.stopPropagation(), (null == v ? void 0 : v.upload) != null && (0, d.openModalLazy)(async () => {
                        let e = v.upload;
                        o(null != e, "upload should not be null");
                        let {
                            default: t
                        } = await s.el("467339").then(s.bind(s, "467339"));
                        return s => (0, a.jsx)(t, {
                            ...s,
                            upload: e,
                            channelId: l.id,
                            draftType: m.ChatInputTypes.CREATE_FORUM_POST.drafts.type,
                            onSubmit: t => {
                                let {
                                    name: s,
                                    description: a,
                                    spoiler: n
                                } = t;
                                c.default.update(l.id, e.id, m.ChatInputTypes.CREATE_FORUM_POST.drafts.type, {
                                    filename: s,
                                    description: a,
                                    spoiler: n
                                })
                            },
                            disableSpoiler: !0
                        })
                    })
                }, w = (0, a.jsx)(S.default, {
                    color: d.ButtonColors.CUSTOM,
                    className: r(j.uploadFileInputContainer),
                    innerClassName: j.uploadThumbnailContainer,
                    onChange: L,
                    multiple: !1,
                    "aria-hidden": !0,
                    filters: R,
                    "aria-describedby": O,
                    "aria-label": b ? I.default.Messages.MEDIA_CHANNEL_CHANGE_THUMBNAIL_LABEL : I.default.Messages.MEDIA_CHANNEL_UPLOAD_THUMBNAIL_LABEL,
                    children: b ? (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(y, {
                            mediaAttachments: p,
                            containerWidth: F.width,
                            containerHeight: F.height
                        }), (0, a.jsxs)("div", {
                            className: r(j.changeThumbnailLabelContainer, {
                                [j.changeThumbnailLabelOverflow]: (null == p ? void 0 : p.length) > 2
                            }),
                            children: [(0, a.jsx)(d.Text, {
                                variant: "text-xs/medium",
                                color: "header-secondary",
                                children: I.default.Messages.MEDIA_CHANNEL_CHANGE_THUMBNAIL_LABEL
                            }), null == v && (0, a.jsx)(_.default, {
                                className: j.editIcon,
                                width: 16,
                                height: 16
                            })]
                        })]
                    }) : (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(T.default, {
                            className: j.uploadIcon
                        }), (0, a.jsx)(d.Text, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: I.default.Messages.MEDIA_CHANNEL_UPLOAD_THUMBNAIL_LABEL
                        })]
                    })
                });
                return (0, a.jsx)("div", {
                    className: j.thumbnailContainer,
                    style: F,
                    children: null != v ? (0, a.jsx)(g.default, {
                        actions: (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(f.default, {
                                className: j.action,
                                tooltip: I.default.Messages.ATTACHMENT_UTILITIES_MODIFY,
                                onClick: P,
                                children: (0, a.jsx)(N.default, {})
                            }), (0, a.jsx)(f.default, {
                                className: j.action,
                                tooltip: I.default.Messages.ATTACHMENT_UTILITIES_REMOVE,
                                onClick: () => c.default.remove(l.id, v.id, m.ChatInputTypes.CREATE_FORUM_POST.drafts.type),
                                dangerous: !0,
                                children: (0, a.jsx)(E.default, {})
                            })]
                        }),
                        draftType: m.ChatInputTypes.CREATE_FORUM_POST.drafts.type,
                        id: v.id,
                        channelId: l.id,
                        handleEditModal: P,
                        keyboardModeEnabled: x,
                        size: g.AttachmentListItemSizes.SMALL,
                        className: j.attachmentListItem,
                        children: w
                    }) : (0, a.jsx)(a.Fragment, {
                        children: w
                    })
                })
            }
        },
        489898: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return u
                }
            });
            var a = s("773670"),
                n = s("744196"),
                l = s("850391"),
                r = s("585722"),
                i = s("856220"),
                o = s("891475");

            function u(e, t) {
                var s, u;
                let {
                    mediaAttachments: d,
                    hasThumbnail: c
                } = function(e) {
                    let [t, s] = a.useState(null), o = (0, n.useStateFromStoresArray)([r.default], () => {
                        let t = r.default.getUploads(e.id, l.ChatInputTypes.CREATE_FORUM_POST.drafts.type),
                            s = t.find(e => e.isThumbnail);
                        return null != s ? [s] : t.filter(e => e.isVideo || e.isImage)
                    }), u = a.useMemo(() => o.some(e => e.isThumbnail), [o]);
                    return a.useEffect(() => {
                        let e = [],
                            t = o.slice(0, i.MAX_THUMBNAIL_COUNT).flatMap(t => {
                                var s;
                                let a = null == t ? void 0 : null === (s = t.item) || void 0 === s ? void 0 : s.file;
                                if (null == a) return [];
                                let n = URL.createObjectURL(a);
                                return e.push(n), {
                                    id: t.id,
                                    src: n,
                                    spoiler: t.spoiler,
                                    alt: t.description,
                                    isThumbnail: t.isThumbnail,
                                    upload: !0 === t.isThumbnail ? t : void 0,
                                    isVideo: t.isVideo
                                }
                            });
                        return s(t), () => {
                            s(null), e.forEach(e => URL.revokeObjectURL(e))
                        }
                    }, [o]), {
                        mediaAttachments: t,
                        hasThumbnail: u
                    }
                }(e), h = Math.max(i.MAX_THUMBNAIL_COUNT - (null !== (s = null == d ? void 0 : d.length) && void 0 !== s ? s : 0), 0), {
                    embeds: m
                } = (0, o.useExtractEmbedPreview)(c, h, t), f = a.useMemo(() => null == m ? void 0 : m.flatMap(e => {
                    let t = (0, i.getEmbedPreviewImageUrl)(e);
                    return null == t ? [] : {
                        id: t,
                        src: t,
                        spoiler: !1,
                        alt: e.title
                    }
                }), [m]), g = [...null != d ? d : []];
                return !c && h > 0 && g.push(...null !== (u = null == f ? void 0 : f.slice(0, h)) && void 0 !== u ? u : []), g
            }
        },
        753582: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                useShowAnimation: function() {
                    return l
                }
            });
            var a = s("773670"),
                n = s("623829");

            function l(e) {
                let [t, s] = a.useState(!0), l = (0, n.useTransition)(t, {
                    keys: e => e ? "shown" : "hidden",
                    config: r,
                    from: {
                        opacity: 0
                    },
                    enter: {
                        opacity: 1
                    },
                    leave: {
                        opacity: 0
                    },
                    unique: !0,
                    immediate: e
                });
                return {
                    transitions: l,
                    setVisible: s
                }
            }
            let r = {
                mass: 1,
                tension: 250,
                friction: 18,
                clamp: !0
            }
        },
        857171: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return o
                }
            });
            var a = s("920040");
            s("773670");
            var n = s("575482"),
                l = s.n(n),
                r = s("77078"),
                i = s("371642");

            function o(e) {
                let {
                    children: t,
                    className: s,
                    innerClassName: n,
                    onChange: o,
                    "aria-label": u,
                    "aria-describedby": d,
                    filters: c,
                    multiple: h = !1,
                    disabled: m = !1,
                    submitting: f = !1,
                    ...g
                } = e;
                return (0, a.jsx)(r.FocusRing, {
                    within: !0,
                    children: (0, a.jsxs)("div", {
                        className: l(s, (0, r.getButtonStyle)({
                            ...g,
                            submitting: f,
                            disabled: m
                        })),
                        "aria-disabled": m,
                        children: [(0, a.jsx)("span", {
                            "aria-hidden": !0,
                            className: n,
                            children: t
                        }), (0, a.jsx)(i.default, {
                            tabIndex: 0,
                            onChange: o,
                            filters: c,
                            multiple: h,
                            "aria-label": u,
                            "aria-describedby": d,
                            disabled: m
                        })]
                    })
                })
            }
        },
        717018: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return i
                }
            });
            var a = s("920040");
            s("773670");
            var n = s("469563"),
                l = s("594881"),
                r = s("75196"),
                i = (0, n.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: s = 16,
                        color: n = "currentColor",
                        foreground: l,
                        ...i
                    } = e;
                    return (0, a.jsxs)("svg", {
                        ...(0, r.default)(i),
                        width: t,
                        height: s,
                        viewBox: "0 0 16 16",
                        children: [(0, a.jsx)("path", {
                            className: l,
                            fill: n,
                            d: "M6.78802 8.60547H2.54555C2.211 8.60547 1.93949 8.87699 1.93949 9.21154C1.93949 9.54608 2.211 9.8176 2.54555 9.8176H5.32498L1.511 13.6316C1.27433 13.8682 1.27433 14.2519 1.511 14.4886C1.62918 14.607 1.78433 14.6661 1.93949 14.6661C2.09464 14.6661 2.24979 14.607 2.36798 14.4886L6.18195 10.6746V13.454C6.18195 13.7886 6.45347 14.0601 6.78802 14.0601C7.12257 14.0601 7.39409 13.7886 7.39409 13.454V9.21154C7.39409 8.87699 7.12257 8.60547 6.78802 8.60547Z"
                        }), (0, a.jsx)("path", {
                            className: l,
                            fill: n,
                            d: "M14.4891 1.50953C14.2524 1.27286 13.8687 1.27286 13.6321 1.50953L9.81809 5.32351V2.54409C9.81809 2.20954 9.54657 1.93802 9.21202 1.93802C8.87748 1.93802 8.60596 2.20954 8.60596 2.54409V6.78655C8.60596 7.1211 8.87748 7.39262 9.21202 7.39262H13.4545C13.789 7.39262 14.0606 7.1211 14.0606 6.78655C14.0606 6.45201 13.789 6.18049 13.4545 6.18049H10.6751L14.4891 2.36651C14.7257 2.12984 14.7257 1.7462 14.4891 1.50953Z"
                        })]
                    })
                }, l.MinimizeIcon)
        },
        673078: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return i
                }
            });
            var a = s("920040");
            s("773670");
            var n = s("469563"),
                l = s("159190"),
                r = s("75196"),
                i = (0, n.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: s = 16,
                        color: n = "currentColor",
                        foreground: l,
                        ...i
                    } = e;
                    return (0, a.jsxs)("svg", {
                        ...(0, r.default)(i),
                        width: t,
                        height: s,
                        viewBox: "0 0 16 16",
                        children: [(0, a.jsx)("path", {
                            className: l,
                            fill: n,
                            d: "M1.93944 14.6655H6.18191C6.51646 14.6655 6.78797 14.394 6.78797 14.0594C6.78797 13.7249 6.51646 13.4534 6.18191 13.4534H3.40249L7.21646 9.63937C7.45313 9.40271 7.45313 9.01906 7.21646 8.7824C7.09828 8.66391 6.94313 8.60482 6.78797 8.60482C6.63282 8.60482 6.47767 8.66391 6.35948 8.7824L2.54551 12.5964V9.81695C2.54551 9.4824 2.27399 9.21089 1.93944 9.21089C1.60489 9.21089 1.33337 9.4824 1.33337 9.81695V14.0594C1.33337 14.394 1.60489 14.6655 1.93944 14.6655Z"
                        }), (0, a.jsx)("path", {
                            className: l,
                            fill: n,
                            d: "M8.78362 7.21512C9.02029 7.45179 9.40393 7.45179 9.6406 7.21512L13.4546 3.40114V6.18056C13.4546 6.51511 13.7261 6.78663 14.0606 6.78663C14.3952 6.78663 14.6667 6.51511 14.6667 6.18056V1.9381C14.6667 1.60355 14.3952 1.33203 14.0606 1.33203L9.81818 1.33203C9.48363 1.33203 9.21211 1.60355 9.21211 1.9381C9.21211 2.27265 9.48363 2.54416 9.81818 2.54416H12.5976L8.78362 6.35814C8.54695 6.59481 8.54695 6.97845 8.78362 7.21512Z"
                        })]
                    })
                }, l.MaximizeIcon)
        },
        887718: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return i
                }
            });
            var a = s("920040");
            s("773670");
            var n = s("469563"),
                l = s("666031"),
                r = s("75196"),
                i = (0, n.replaceIcon)(function(e) {
                    let {
                        width: t = 29,
                        height: s = 22,
                        color: n = "currentColor",
                        backgroundColor: l,
                        ...i
                    } = e;
                    return (0, a.jsx)("svg", {
                        ...(0, r.default)(i),
                        width: t,
                        height: s,
                        viewBox: "0 0 29 22",
                        children: (0, a.jsxs)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: [(0, a.jsx)("rect", {
                                width: t,
                                height: s,
                                fill: l,
                                fillOpacity: ".8",
                                rx: "3"
                            }), (0, a.jsx)("path", {
                                d: "M8.01725 16.7054C7.17625 16.7054 6.43191 16.4879 5.78425 16.0529C5.13658 15.6179 4.63391 15.0089 4.27625 14.2259C3.91858 13.4333 3.73975 12.5246 3.73975 11.4999C3.73975 10.4849 3.92825 9.58593 4.30525 8.80293C4.69191 8.01993 5.24775 7.4061 5.97275 6.96143C6.70741 6.51677 7.58225 6.29443 8.59725 6.29443C9.45758 6.29443 10.2261 6.4781 10.9027 6.84543C11.5891 7.21277 12.1062 7.72993 12.4542 8.39693L10.8157 9.57143C10.3227 8.66277 9.58808 8.20843 8.61175 8.20843C7.72241 8.20843 7.04091 8.49843 6.56725 9.07843C6.09358 9.64877 5.85675 10.4559 5.85675 11.4999C5.85675 12.5536 6.09358 13.3656 6.56725 13.9359C7.04091 14.5063 7.72241 14.7914 8.61175 14.7914C9.00808 14.7914 9.37058 14.7189 9.69925 14.5739C10.0376 14.4193 10.2986 14.2114 10.4822 13.9504V12.7034H8.17675V10.8184H12.5412V16.5024H10.8302L10.5547 15.5454C9.98441 16.3188 9.13858 16.7054 8.01725 16.7054Z",
                                fill: n
                            }), (0, a.jsx)("path", {
                                d: "M16.5444 16.5024H14.4274V6.49743H16.5444V16.5024Z",
                                fill: n
                            }), (0, a.jsx)("path", {
                                d: "M20.6933 16.5024H18.5763V6.49743H25.2608V8.41143H20.6933V10.7894H24.4053V12.7034H20.6933V16.5024Z",
                                fill: n
                            })]
                        })
                    })
                }, l.GifIcon)
        },
        808404: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return i
                }
            });
            var a = s("920040");
            s("773670");
            var n = s("469563"),
                l = s("851298"),
                r = s("75196"),
                i = (0, n.replaceIcon)(function(e) {
                    let {
                        width: t = 39,
                        height: s = 27,
                        color: n = "currentColor",
                        foreground: l,
                        ...i
                    } = e;
                    return (0, a.jsxs)("svg", {
                        ...(0, r.default)(i),
                        width: t,
                        height: s,
                        viewBox: "0 0 39 27",
                        fill: n,
                        children: [(0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            className: l,
                            d: "M26.4909 2.76514H5.78906C3.20886 2.76514 1.11719 4.79342 1.11719 7.29544V20.8863C1.11719 23.3884 3.20886 25.4167 5.78906 25.4167H31.9922C34.5724 25.4167 36.6641 23.3884 36.6641 20.8863V12.63C35.9239 12.8436 35.1398 12.9583 34.3281 12.9583C29.8128 12.9583 26.1523 9.40882 26.1523 5.03029C26.1523 4.24318 26.2706 3.48286 26.4909 2.76514ZM13 7.29544C14.2885 7.29544 15.3359 8.30932 15.3359 9.56059C15.3359 10.8128 14.2885 11.8257 13 11.8257C11.7087 11.8257 10.6641 10.8128 10.6641 9.56059C10.6641 8.30932 11.7087 7.29544 13 7.29544ZM10.6641 20.8863L14.168 16.356L16.5039 18.6212L21.1758 12.9583L24.6797 20.8863H17.6719H10.6641Z",
                            fill: n
                        }), (0, a.jsx)("path", {
                            d: "M35.4961 0.5V3.89773H39V6.16288H35.4961V9.56061H33.1602V6.16288H29.6562V3.89773H33.1602V0.5H35.4961Z",
                            fill: n
                        })]
                    })
                }, l.ImagePlusIcon)
        },
        891152: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return i
                }
            });
            var a = s("920040");
            s("773670");
            var n = s("469563"),
                l = s("620000"),
                r = s("75196"),
                i = (0, n.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: s = 16,
                        color: n = "currentColor",
                        foreground: l,
                        ...i
                    } = e;
                    return (0, a.jsxs)("svg", {
                        ...(0, r.default)(i),
                        width: t,
                        height: s,
                        viewBox: "0 0 16 16",
                        fill: "none",
                        children: [(0, a.jsx)("path", {
                            className: l,
                            fill: n,
                            d: "M12.1803 4.66659L12.1803 14.6666H10.4701L10.4701 4.66659L8.53289 6.63325L7.33329 5.40825L11.3292 1.33325L15.3333 5.40825L14.1337 6.65825L12.1803 4.66659Z"
                        }), (0, a.jsx)("path", {
                            className: l,
                            fill: n,
                            d: "M3.81962 11.3333L3.81962 1.33325L5.52983 1.33325L5.52985 11.3333L7.46703 9.36658L8.66663 10.5916L4.67068 14.6666L0.666626 10.5916L1.86622 9.34158L3.81962 11.3333Z"
                        })]
                    })
                }, l.ArrowsUpDownIcon)
        },
        995113: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return n
                }
            });
            var a = s("805833");
            class n {
                attach(e) {
                    let {
                        stores: t
                    } = this;
                    t.forEach((t, s) => {
                        if (null == t) throw Error("".concat(e, " tried to load a non-existent store. Either it isn't defined or there is a circular dependency. Loaded ").concat(s, " stores before error."));
                        t.addReactChangeListener(this.handleStoreChange)
                    })
                }
                detach() {
                    let {
                        stores: e
                    } = this;
                    e.forEach(e => e.removeReactChangeListener(this.handleStoreChange))
                }
                constructor(e, t) {
                    this.handleStoreChange = () => {
                        let e = a.default.getChangeSentinel();
                        this.storeVersionHandled !== e && (this.changeCallback(), this.storeVersionHandled = e)
                    }, this.stores = e, this.changeCallback = t
                }
            }
        },
        782648: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return a
                }
            });
            class a {
                has(e) {
                    return this.listeners.has(e)
                }
                hasAny() {
                    return this.listeners.size > 0
                }
                invokeAll() {
                    this.listeners.forEach(e => e())
                }
                constructor() {
                    var e = this;
                    this.listeners = new Set, this.add = e => {
                        this.listeners.add(e)
                    }, this.remove = e => {
                        this.listeners.delete(e)
                    }, this.addConditional = function(t) {
                        let s = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                        if (s && !1 === t()) return;
                        let a = () => {
                            !1 === t() && e.remove(a)
                        };
                        e.add(a)
                    }
                }
            }
        },
        893346: function(e, t, s) {
            "use strict";
            s.r(t), s("36865"), s("920902"), s("102053"), s("704744");
            var a = s("811022");
            s("435660"), s("805833"), s("377678"), s("120082"), new a.default("Flux")
        },
        805833: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return i
                }
            }), s("704744");
            var a = s("811022"),
                n = s("377678");
            let l = new a.default("Flux"),
                r = e => e();
            var i = new class e {
                destroy() {
                    this.changedStores.clear(), this.reactChangedStores.clear(), r = e => e()
                }
                injectBatchEmitChanges(e) {
                    r = e
                }
                pause() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                    this.isPaused = !0, null !== this.pauseTimer && clearTimeout(this.pauseTimer), null !== e && (this.pauseTimer = setTimeout(() => {
                        this.pauseTimer = null, this.resume()
                    }, e))
                }
                resume() {
                    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                    clearTimeout(this.pauseTimer), this.pauseTimer = null, this.isPaused && (this.isPaused = !1, e && this.changedStores.size > 0 && setImmediate(() => this.emit()))
                }
                batched(e) {
                    if (this.isPaused) return e();
                    try {
                        return this.isPaused = !0, e()
                    } finally {
                        this.resume(!1), this.emit()
                    }
                }
                emit() {
                    !this.isBatchEmitting && !this.isPaused && r(() => {
                        try {
                            this.isBatchEmitting = !0, this.changeSentinel++;
                            let e = 0;
                            for (; this.changedStores.size > 0;) {
                                if (++e > 100) throw l.error("LastFewActions", n.serialize()), Error("change emit loop detected, aborting");
                                this.emitNonReactOnce()
                            }
                            for (; this.reactChangedStores.size > 0;) {
                                if (++e > 100) throw l.error("LastFewActions", n.serialize()), Error("react change emit loop detected, aborting");
                                this.emitReactOnce()
                            }
                        } finally {
                            this.isBatchEmitting = !1
                        }
                    })
                }
                getChangeSentinel() {
                    return this.changeSentinel
                }
                getIsPaused() {
                    return this.isPaused
                }
                markChanged(e) {
                    e._changeCallbacks.hasAny() && this.changedStores.add(e), e._reactChangeCallbacks.hasAny() && this.reactChangedStores.add(e), !this.isBatchEmitting && !this.isDispatching && !this.isPaused && this.emit()
                }
                emitNonReactOnce() {
                    let e = Date.now(),
                        t = this.changedStores;
                    this.changedStores = new Set, t.forEach(e => {
                        e._changeCallbacks.invokeAll(), this.changedStores.delete(e)
                    });
                    let s = Date.now();
                    s - e > 100 && l.verbose("Slow batch emitChanges took ".concat(s - e, "ms recentActions:"), n.serialize())
                }
                emitReactOnce() {
                    let e = Date.now(),
                        t = this.reactChangedStores;
                    this.reactChangedStores = new Set, t.forEach(e => {
                        e._reactChangeCallbacks.invokeAll(), this.reactChangedStores.delete(e)
                    });
                    let s = Date.now();
                    s - e > 100 && l.verbose("Slow batch emitReactChanges took ".concat(s - e, "ms recentActions:"), n.serialize())
                }
                constructor() {
                    this.changedStores = new Set, this.reactChangedStores = new Set, this.changeSentinel = 0, this.isBatchEmitting = !1, this.isDispatching = !1, this.isPaused = !1, this.pauseTimer = null
                }
            }
        },
        35092: function(e, t, s) {
            "use strict";
            s.r(t);
            var a = s("805833"),
                n = s("303365"),
                l = s("75247"),
                r = s("661496");
            a.default, l.default, n.default, n.DeviceSettingsStore, n.OfflineCacheStore, r.default
        },
        377678: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                serialize: function() {
                    return n
                }
            });
            let a = [];

            function n() {
                return a.join(" -> ")
            }
        },
        120082: function(e, t, s) {
            "use strict";
            s.r(t), s("311357");
            var a = s("811022");
            s("279295"), new a.default("Flux")
        },
        303365: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return d
                },
                DeviceSettingsStore: function() {
                    return h
                },
                OfflineCacheStore: function() {
                    return m
                }
            });
            var a = s("227675"),
                n = s.n(a),
                l = s("102053"),
                r = s("95410"),
                i = s("75247");
            let o = {
                    _state: void 0,
                    _version: void 0
                },
                u = null;
            class d extends i.default {
                getClass() {
                    return this.constructor
                }
                static clearAll(e) {
                    return u = e, null == d._clearAllPromise && (d._clearAllPromise = new Promise(t => {
                        requestIdleCallback(() => {
                            d.clearPersistQueue(e), d.allPersistKeys.forEach(t => {
                                d.shouldClear(e, t) && r.default.remove(t)
                            }), i.default.getAll().forEach(t => {
                                t instanceof d && d.shouldClear(e, t.getClass().persistKey) && (t._isInitialized = !1, t.initializeIfNeeded())
                            }), d._clearAllPromise = null, t()
                        }, {
                            timeout: 500
                        })
                    })), d._clearAllPromise
                }
                static shouldClear(e, t) {
                    var s;
                    return (null === (s = e.omit) || void 0 === s ? !void 0 : !s.includes(t)) && ("all" === e.type || "user-data-only" === e.type && !d.userAgnosticPersistKeys.has(t))
                }
                static clearPersistQueue(e) {
                    d._writeResolvers.forEach((t, s) => {
                        let [a, n] = t;
                        d.shouldClear(e, s) && (d._writePromises.delete(s), d._writeResolvers.delete(s), cancelIdleCallback(n), a(!1))
                    }), d._writePromises.clear(), d._writeResolvers.clear()
                }
                static getAllStates() {
                    return Promise.all(Array.from(d._writePromises.values())).then(() => {
                        let e = {};
                        return d.allPersistKeys.forEach(t => {
                            var s;
                            e[t] = (null !== (s = r.default.get(t)) && void 0 !== s ? s : o)._state
                        }), e
                    })
                }
                static initializeAll(e) {
                    i.default.getAll().forEach(t => {
                        if (t instanceof d) {
                            let s = t.getClass().persistKey;
                            e.hasOwnProperty(s) && t.initializeFromState(e[s])
                        }
                    })
                }
                initializeFromState(e) {
                    this.initialize(e) && this.asyncPersist(), this._isInitialized ? this.emitChange() : (d.allPersistKeys.add(this.getClass().persistKey), this._isInitialized = !0)
                }
                static destroy() {
                    u = null, i.default.destroy(), d.clearPersistQueue({
                        type: "all"
                    }), d.allPersistKeys.clear(), d.userAgnosticPersistKeys.clear()
                }
                initializeIfNeeded() {
                    if (!this._isInitialized) {
                        let e = Date.now();
                        d.allPersistKeys.add(this.getClass().persistKey);
                        let {
                            state: t,
                            requiresPersist: s
                        } = d.migrateAndReadStoreState(this.getClass().persistKey, this.getClass().migrations);
                        this.initialize(t) && this.asyncPersist(), s && this.asyncPersist(), this._isInitialized = !0;
                        let a = Date.now() - e;
                        a > 5 && l.default.mark("\uD83E\uDDA5", this.getName() + ".initialize()", a)
                    }
                }
                static migrateAndReadStoreState(e, t) {
                    if (null != u && d.shouldClear(u, e)) return r.default.remove(e), {
                        state: void 0,
                        requiresPersist: !1
                    };
                    let s = null != d._clearAllPromise ? null : r.default.get(e),
                        {
                            _state: a,
                            _version: n,
                            ...l
                        } = null != s ? s : o,
                        i = null == t ? 0 : t.length;
                    if (0 !== i && n !== i && null != t) {
                        let e = null != n ? n : 0,
                            s = a;
                        for (null == n && (s = l); e < i;) {
                            let a = t[e];
                            s = a(s), e++
                        }
                        return {
                            state: s,
                            requiresPersist: !0
                        }
                    }
                    if (Object.values(l).length > 0) return {
                        state: l,
                        requiresPersist: !0
                    };
                    return {
                        state: a,
                        requiresPersist: !1
                    }
                }
                asyncPersist() {
                    let {
                        persistKey: e,
                        disableWrite: t,
                        throttleDelay: s
                    } = this.getClass();
                    if (d.disableWrites || t) return Promise.resolve(!1);
                    let a = d._writePromises.get(e);
                    return null != a ? a : (a = new Promise(t => {
                        let a = s > 0 ? () => this.throttledCallback(t) : () => this.callback(t);
                        d._writeResolvers.set(e, [t, requestIdleCallback(a, {
                            timeout: 500
                        })])
                    }), d._writePromises.set(e, a), a)
                }
                persist() {
                    let {
                        persistKey: e
                    } = this.getClass(), t = this.getState(), s = this._version;
                    r.default.set(e, {
                        _state: t,
                        _version: s
                    })
                }
                clear() {
                    let {
                        persistKey: e
                    } = this.getClass();
                    r.default.remove(e)
                }
                constructor(e, t) {
                    if (super(e, t), this._version = null == this.getClass().migrations ? 0 : this.getClass().migrations.length, this.callback = e => {
                            let {
                                persistKey: t
                            } = this.getClass();
                            this.persist(), d._writePromises.delete(t), d._writeResolvers.delete(t), e()
                        }, this.throttledCallback = n.throttle(e => this.callback(e), this.getClass().throttleDelay, {
                            leading: !1
                        }), "string" != typeof this.getClass().persistKey) throw Error("".concat(this.getClass().name, " initialized without a `persistKey`. Add one so we know where to save your stuff!"));
                    if ("function" != typeof this.initialize) throw Error("".concat(this.getClass().name, " initialized without an `initialize` method. Add one that accepts the initial cached state."));
                    if ("function" != typeof this.getState) throw Error("".concat(this.getClass().name, " initialized without a `getState` method. Add one that returns the full state of the store for persistance to work."));
                    this.addChangeListener(() => this.asyncPersist())
                }
            }
            d.allPersistKeys = new Set, d.userAgnosticPersistKeys = new Set, d._writePromises = new Map, d._writeResolvers = new Map, d.disableWrites = !1, d.disableWrite = !1, d.throttleDelay = 0;
            class c extends d {
                initializeFromState(e) {
                    return d.userAgnosticPersistKeys.add(this.getClass().persistKey), super.initializeFromState(e)
                }
                initializeIfNeeded() {
                    return d.userAgnosticPersistKeys.add(this.getClass().persistKey), super.initializeIfNeeded()
                }
                getState() {
                    return this.getUserAgnosticState()
                }
            }
            class h extends c {}
            class m extends c {}
        },
        75247: function(e, t, s) {
            "use strict";
            let a;
            s.r(t), s.d(t, {
                default: function() {
                    return h
                }
            });
            var n = s("920902"),
                l = s.n(n),
                r = s("102053");
            s("704744");
            var i = s("782648"),
                o = s("805833");
            let u = [],
                d = !1,
                c = new Promise(e => {
                    a = () => {
                        e(), a = null
                    }
                });
            class h {
                static initialize() {
                    d = !0, u.forEach(e => e.initializeIfNeeded()), null != a && a()
                }
                static destroy() {
                    u.length = 0, o.default.destroy()
                }
                static getAll() {
                    return u
                }
                registerActionHandlers(e, t) {
                    this._dispatcher.register(this.getName(), e, e => {
                        (this._changeCallbacks.hasAny() || this._reactChangeCallbacks.hasAny()) && (o.default.markChanged(this), o.default.getIsPaused() && null != this._mustEmitChanges && this._mustEmitChanges(e) && o.default.resume(!1))
                    }, t, this._dispatchToken)
                }
                getName() {
                    var e;
                    return null !== (e = this.constructor.displayName) && void 0 !== e ? e : this.constructor.name
                }
                initializeIfNeeded() {
                    if (!this._isInitialized) {
                        let e = Date.now();
                        this.initialize(), this._isInitialized = !0;
                        let t = Date.now() - e;
                        t > 5 && r.default.mark("\uD83E\uDDA5", this.getName() + ".initialize()", t)
                    }
                }
                initialize() {}
                syncWith(e, t, s) {
                    var a, n;
                    let l;
                    this.waitFor(...e);
                    let r = 0,
                        i = () => {
                            r !== o.default.getChangeSentinel() && (r = o.default.getChangeSentinel(), !1 !== t() && this.emitChange())
                        };
                    a = null != s ? s : 0, n = i, l = null, i = 0 === a ? function() {
                        clearImmediate(l), l = setImmediate(n)
                    } : function() {
                        null == l && (l = setTimeout(() => {
                            try {
                                n()
                            } finally {
                                l = null
                            }
                        }, a))
                    }, e.forEach(e => e.addChangeListener(i))
                }
                waitFor() {
                    for (var e = arguments.length, t = Array(e), s = 0; s < e; s++) t[s] = arguments[s];
                    let a = t.map((e, t) => (l(null != e, "Store.waitFor(...) called with null Store at index ".concat(t, " for store ").concat(this.getName())), null != e._dispatcher) ? (l(e._dispatcher === this._dispatcher, "Stores belong to two separate dispatchers."), e.getDispatchToken()) : null);
                    this._dispatcher.addDependencies(this.getDispatchToken(), a.filter(e => null != e))
                }
                emitChange() {
                    o.default.markChanged(this)
                }
                getDispatchToken() {
                    return this._dispatchToken
                }
                mustEmitChanges() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => !0;
                    this._mustEmitChanges = e
                }
                constructor(e, t, s) {
                    this._changeCallbacks = new i.default, this._reactChangeCallbacks = new i.default, this._isInitialized = !1, this.addChangeListener = this._changeCallbacks.add, this.addConditionalChangeListener = this._changeCallbacks.addConditional, this.removeChangeListener = this._changeCallbacks.remove, this.addReactChangeListener = this._reactChangeCallbacks.add, this.removeReactChangeListener = this._reactChangeCallbacks.remove, this._dispatcher = e, this._dispatchToken = this._dispatcher.createToken(), null !== t && this.registerActionHandlers(null != t ? t : {}, s), u.push(this), d && this.initializeIfNeeded()
                }
            }
            h.initialized = c
        },
        661496: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return i
                }
            });
            var a = s("920040"),
                n = s("773670"),
                l = s("233736"),
                r = s("995113"),
                i = function(e, t, s) {
                    return null != s && s.forwardRef ? function(e, t) {
                        return s => {
                            let i = "FluxContainer(".concat(o(s), ")");
                            class d extends n.Component {
                                componentDidMount() {
                                    this.listener.attach(i)
                                }
                                componentWillUnmount() {
                                    this.listener.detach(), this.memoizedGetStateFromStores.clear()
                                }
                                render() {
                                    let {
                                        forwardedConnectStoresRef: e,
                                        childProps: t
                                    } = this.props, n = this.memoizedGetStateFromStores(t);
                                    return (0, a.jsx)(s, {
                                        ref: e,
                                        ...t,
                                        ...n
                                    })
                                }
                                constructor(...s) {
                                    super(...s), this.memoizedGetStateFromStores = u(t), this.listener = new r.default(e, () => {
                                        let e = this.memoizedGetStateFromStores.getCachedResult(this.props.childProps);
                                        if (!(null != e && (this.memoizedGetStateFromStores.clear(), (0, l.default)(this.memoizedGetStateFromStores(this.props.childProps), e)))) this.forceUpdate()
                                    })
                                }
                            }
                            d.displayName = i;
                            let c = n.forwardRef((e, t) => (0, a.jsx)(d, {
                                childProps: e,
                                forwardedConnectStoresRef: t
                            }));
                            return c.displayName = "ForwardRef(".concat(i, ")"), c
                        }
                    }(e, t) : function(e, t) {
                        return s => {
                            let i = "FluxContainer(".concat(o(s), ")");
                            class d extends n.Component {
                                componentDidMount() {
                                    this.listener.attach(i)
                                }
                                componentWillUnmount() {
                                    this.listener.detach(), this.memoizedGetStateFromStores.clear()
                                }
                                render() {
                                    let e = this.memoizedGetStateFromStores(this.props);
                                    return (0, a.jsx)(s, {
                                        ...this.props,
                                        ...e
                                    })
                                }
                                constructor(...s) {
                                    super(...s), this.memoizedGetStateFromStores = u(t), this.listener = new r.default(e, () => {
                                        let e = this.memoizedGetStateFromStores.getCachedResult(this.props);
                                        if (!(null != e && (this.memoizedGetStateFromStores.clear(), (0, l.default)(this.memoizedGetStateFromStores(this.props), e)))) this.forceUpdate()
                                    })
                                }
                            }
                            return d.displayName = i, d
                        }
                    }(e, t)
                };

            function o(e) {
                var t, s;
                return null !== (s = null !== (t = e.displayName) && void 0 !== t ? t : e.name) && void 0 !== s ? s : "<Unknown>"
            }

            function u(e) {
                let t = null,
                    s = null,
                    a = e => null != t && null != s && (0, l.default)(t, e) ? s : null != t && null != s && (0, l.default)(t, e) ? (t = e, s) : null,
                    n = n => {
                        let l = a(n);
                        return null != l ? l : s = e(t = n)
                    };
                return n.getCachedResult = a, n.clear = () => {
                    t = null, s = null
                }, n
            }
        },
        446674: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                useStateFromStores: function() {
                    return a.default
                }
            }), s("995113"), s("893346"), s("35092"), s("75247");
            var a = s("65597")
        },
        65597: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return i
                }
            });
            var a = s("773670"),
                n = s("233736"),
                l = s("995113");

            function r(e, t) {
                return e === t
            }

            function i(e, t, s) {
                let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : r,
                    {
                        current: o
                    } = (0, a.useRef)({
                        stores: e,
                        areStatesEqual: i,
                        getStateFromStores: t,
                        prevDeps: void 0,
                        state: void 0
                    }),
                    u = o.state;
                if (null == s || !(0, n.areArraysShallowEqual)(s, o.prevDeps)) {
                    let e = t();
                    (null == u || !i(u, e)) && (u = e)
                }(0, a.useLayoutEffect)(() => {
                    o.getStateFromStores = t, o.prevDeps = s, o.state = u
                });
                let [, d] = (0, a.useState)(null);
                return (0, a.useLayoutEffect)(() => {
                    let t = () => {
                        let e = o.getStateFromStores();
                        !i(o.state, e) && (o.state = e, d({}))
                    };
                    t();
                    let s = new l.default(e, t);
                    return s.attach("useStateFromStores"), () => s.detach()
                }, []), u
            }
        },
        233736: function(e, t, s) {
            "use strict";

            function a(e, t, s) {
                if (e === t) return !0;
                let a = Object.keys(e),
                    n = Object.keys(t);
                if (a.length !== n.length) return !1;
                for (let n = 0; n < a.length; n++) {
                    let l = a[n];
                    if (e[l] !== t[l] && (null == s || !s.includes(l))) return !1
                }
                return !0
            }

            function n(e, t) {
                return null != t && e.length === t.length && !e.some((e, s) => t[s] !== e)
            }
            s.r(t), s.d(t, {
                default: function() {
                    return a
                },
                areArraysShallowEqual: function() {
                    return n
                }
            })
        },
        95410: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return a
                }
            });
            var a = s("419243").impl
        },
        419243: function(e, t, s) {
            "use strict";
            let a;
            s.r(t), s.d(t, {
                ObjectStorage: function() {
                    return n
                },
                impl: function() {
                    return l
                }
            });
            try {
                a = window.localStorage
            } catch (e) {}
            try {
                delete window.localStorage
            } catch (e) {}
            class n {
                get(e, t) {
                    return this.storage.hasOwnProperty(e) ? this.storage[e] : t
                }
                set(e, t) {
                    this.storage[e] = t
                }
                remove(e) {
                    delete this.storage[e]
                }
                clear() {
                    this.storage = {}
                }
                stringify() {
                    return JSON.stringify(this.storage)
                }
                asyncGetRaw(e, t) {
                    return Promise.resolve(a.getItem(e))
                }
                setRaw(e, t) {
                    a.setItem(e, t)
                }
                constructor() {
                    this.storage = {}
                }
            }
            let l = ! function() {
                let e = "test";
                try {
                    return a.setItem(e, e), a.removeItem(e), !0
                } catch (e) {
                    return !1
                }
            }() ? new n : new class e {
                get(e, t) {
                    let s = a.getItem(e);
                    if (null != s) try {
                        s = JSON.parse(s)
                    } catch (e) {
                        s = t
                    } else s = t;
                    return s
                }
                set(e, t) {
                    a.setItem(e, JSON.stringify(t))
                }
                remove(e) {
                    a.removeItem(e)
                }
                clear() {
                    a.clear()
                }
                stringify() {
                    return JSON.stringify(a || {})
                }
                asyncGetRaw(e, t) {
                    return Promise.resolve(a.getItem(e))
                }
                setRaw(e, t) {
                    a.setItem(e, t)
                }
                getAfterRefresh(e) {
                    return Promise.resolve(this.get(e))
                }
            }
        },
        102053: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return l
                }
            });
            let a = null == s.g.__getTotalRequireTime ? () => 0 : () => s.g.__getTotalRequireTime(),
                n = "undefined" != typeof performance;
            var l = new class e {
                get isTracing() {
                    return !!n && !!this.isTracing_ && (!(Date.now() > this.endTime_) || (this.isTracing_ = !1, !1))
                }
                get endTime() {
                    return this.endTime_
                }
                set endTime(e) {
                    this.endTime_ = e, this.isTracing_ = !0
                }
                resumeTracing() {
                    !this.isTracing && (this.logGroups.unshift({
                        index: this.logGroups.length,
                        timestamp: Date.now(),
                        logs: [],
                        nativeLogs: []
                    }), this.logs = this.logGroups[0].logs), this.endTime = Date.now() + 1e4
                }
                mark(e, t, s) {
                    this.isTracing && (this.logs.push({
                        emoji: e,
                        prefix: "".concat(this.prefix),
                        log: t,
                        delta: s,
                        timestamp: Date.now()
                    }), this.addImportLogDetail())
                }
                markAndLog(e, t, s, a) {
                    e.log(s), this.isTracing && (this.logs.push({
                        emoji: t,
                        prefix: this.prefix,
                        log: s,
                        delta: a,
                        timestamp: Date.now()
                    }), this.addImportLogDetail())
                }
                addImportLogDetail() {
                    let e = a();
                    e - this.lastImportDuration > 25 && (this.addDetail("JS Imports", Math.ceil(e) + "ms"), this.lastImportDuration = e)
                }
                markWithDelta(e, t) {
                    let s = this.logs[this.logs.length - 1];
                    this.mark(e, t, null != s && null != s.timestamp ? Date.now() - s.timestamp : void 0)
                }
                markAt(e, t, s) {
                    var a, n;
                    if (!this.isTracing) return;
                    let l = 0;
                    for (; l < this.logs.length; l++) {
                        let {
                            timestamp: e
                        } = this.logs[l];
                        if (null != e && e > s) break
                    }
                    this.logs.splice(l, 0, {
                        emoji: e,
                        log: t,
                        timestamp: s,
                        prefix: null !== (n = null === (a = this.logs[l]) || void 0 === a ? void 0 : a.prefix) && void 0 !== n ? n : ""
                    })
                }
                addDetail(e, t) {
                    this.isTracing && this.logs.push({
                        emoji: this.logs[this.logs.length - 1].emoji,
                        prefix: this.prefix,
                        log: "  ↪ ".concat(e, " ").concat(t)
                    })
                }
                time(e, t, s) {
                    if (!this.isTracing) return s();
                    let a = this.prefix;
                    this.mark(e, "Start ".concat(t)), this.prefix += "| ";
                    let n = Date.now(),
                        l = s(),
                        r = Date.now() - n;
                    return this.prefix = a, this.mark(e, "Finish ".concat(t), r), l
                }
                async timeAsync(e, t, s) {
                    if (!this.isTracing) return s();
                    this.mark(e, "Start ".concat(t));
                    let a = Date.now(),
                        n = await s(),
                        l = Date.now() - a;
                    return this.mark(e, "Finish ".concat(t), l), n
                }
                setServerTrace(e) {
                    this.logGroups[0].serverTrace = e
                }
                constructor() {
                    this.isTracing_ = !0, this.endTime_ = Date.now() + 15e3, this.lastImportDuration = 0, this.logGroups = [{
                        index: 0,
                        timestamp: Date.now(),
                        logs: [],
                        nativeLogs: []
                    }], this.logs = this.logGroups[0].logs, this.prefix = ""
                }
            }
        },
        704744: function(e, t, s) {
            "use strict";
            s.r(t)
        },
        811022: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return n
                }
            });
            let a = () => {};
            class n {
                constructor(e = "default") {
                    var t = this;
                    this.log = function(e) {
                        for (var s = arguments.length, n = Array(s > 1 ? s - 1 : 0), l = 1; l < s; l++) n[l - 1] = arguments[l];
                        a(t.name, "log", e, ...n)
                    }, this.info = function(e) {
                        for (var s = arguments.length, n = Array(s > 1 ? s - 1 : 0), l = 1; l < s; l++) n[l - 1] = arguments[l];
                        a(t.name, "info", e, ...n)
                    }, this.warn = function(e) {
                        for (var s = arguments.length, n = Array(s > 1 ? s - 1 : 0), l = 1; l < s; l++) n[l - 1] = arguments[l];
                        a(t.name, "warn", e, ...n)
                    }, this.error = function(e) {
                        for (var s = arguments.length, n = Array(s > 1 ? s - 1 : 0), l = 1; l < s; l++) n[l - 1] = arguments[l];
                        a(t.name, "error", e, ...n)
                    }, this.trace = function(e) {
                        for (var s = arguments.length, n = Array(s > 1 ? s - 1 : 0), l = 1; l < s; l++) n[l - 1] = arguments[l];
                        a(t.name, "trace", e, ...n)
                    }, this.time = (e, t) => {
                        let s = Date.now(),
                            a = t();
                        return this.log(e, Date.now() - s), a
                    }, this.fileOnly = function(e) {
                        for (var s = arguments.length, n = Array(s > 1 ? s - 1 : 0), l = 1; l < s; l++) n[l - 1] = arguments[l];
                        a(t.name, "file-only", e, ...n)
                    }, this.verbose = function(e) {
                        for (var s = arguments.length, n = Array(s > 1 ? s - 1 : 0), l = 1; l < s; l++) n[l - 1] = arguments[l];
                        a(t.name, "debug", e, ...n)
                    }, this.name = e
                }
            }
        },
        435660: function(e, t, s) {
            "use strict";
            var a;
            s.r(t), s.g.performance
        }
    }
]);