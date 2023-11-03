(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["94548"], {
        966760: function(e, t, a) {
            e.exports = function(e, t, a) {
                if ("function" != typeof e) throw TypeError("Expected a function");
                return setTimeout(function() {
                    e.apply(void 0, a)
                }, t)
            }
        },
        474820: function(e, t, a) {
            var s = a("966760"),
                n = a("616601")(function(e, t) {
                    return s(e, 1, t)
                });
            e.exports = n
        },
        714358: function(e, t, a) {
            "use strict";
            e.exports = a.p + "e7c5287d6706ac82b14b.svg"
        },
        112545: function(e, t, a) {
            "use strict";
            e.exports = a.p + "91a0948fc3f2fcdae60b.png"
        },
        600310: function(e, t, a) {
            "use strict";
            e.exports = a.p + "20e943e83204fab6ff33.png"
        },
        129185: function(e, t, a) {
            "use strict";
            e.exports = a.p + "124659e036ed41dd2134.png"
        },
        338283: function(e, t, a) {
            "use strict";
            e.exports = a.p + "fa7ba1d8e3edcce69332.png"
        },
        62e4: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                ArrowsUpDownIcon: function() {
                    return r
                }
            });
            var s = a("37983");
            a("884691");
            var n = a("669491"),
                l = a("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: a = 24,
                    color: r = n.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...o
                } = e;
                return (0, s.jsx)("svg", {
                    ...(0, l.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: a,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, s.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "M16.293 21.707a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L18 18.586V3a1 1 0 1 0-2 0v15.586l-2.293-2.293a1 1 0 0 0-1.414 1.414l4 4ZM6.293 2.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1-1.414 1.414L8 5.414V21a1 1 0 1 1-2 0V5.414L3.707 7.707a1 1 0 0 1-1.414-1.414l4-4Z",
                        className: i
                    })
                })
            }
        },
        594881: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                MinimizeIcon: function() {
                    return r
                }
            });
            var s = a("37983");
            a("884691");
            var n = a("669491"),
                l = a("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: a = 24,
                    color: r = n.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...o
                } = e;
                return (0, s.jsx)("svg", {
                    ...(0, l.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: a,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, s.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "M15 4v3.586l5.293-5.293a1 1 0 1 1 1.414 1.414L16.414 9H20a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1V4a1 1 0 1 1 2 0ZM9 16.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L7.586 15H4a1 1 0 1 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-3.586Z",
                        className: i
                    })
                })
            }
        },
        119161: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
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
                    return m
                }
            });
            var s, n, l = a("600798"),
                r = a("782340");

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

            function m(e, t) {
                var a;
                return null == e || e.type === n.EmptyContent && null != t.content && t.content.trim().length > 0 || e.type === n.EmptyTags && null != t.tags && t.tags.length > 0 ? null : null !== (a = e.message) && void 0 !== a ? a : null
            }(s = n || (n = {}))[s.EmptyContent = 0] = "EmptyContent", s[s.AutomodViolation = 1] = "AutomodViolation", s[s.EmptyTags = 2] = "EmptyTags"
        },
        713955: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                getAllRolesRows: function() {
                    return i
                },
                getAllExistingRolesWithPermission: function() {
                    return o
                }
            });
            var s = a("316693"),
                n = a("454273"),
                l = a("991170");
            let r = (e, t, a) => {
                    if (null == e.id) return !1;
                    let n = l.default.computePermissionsForRoles({
                        forceRoles: {
                            [e.id]: e
                        },
                        context: a
                    });
                    return s.default.has(n, t)
                },
                i = e => null == e.roles ? [] : Object.values(e.roles).sort(n.sortRoles).map(e => (0, n.getRoleRowData)(e)),
                o = (e, t, a) => Object.values(e.roles).filter(e => (0, n.isAdmin)(e) || r(e, a, t))
        },
        706065: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return i
                }
            });
            var s = a("95410"),
                n = a("689988");
            let l = "formGuidelinesStorageKey";
            class r extends n.default {
                _initialize() {
                    let e = s.default.get(l);
                    null != e && (this.seenForumGuidelines = new Set(e))
                }
                _terminate() {
                    s.default.set(l, this.seenForumGuidelines)
                }
                markAsSeen(e) {
                    this.seenForumGuidelines.add(e), s.default.set(l, this.seenForumGuidelines)
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
        146290: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return i
                }
            });
            var s = a("884691"),
                n = a("471671"),
                l = a("816454"),
                r = a("250850"),
                i = {
                    useForumChannelSeenManager: function(e) {
                        let {
                            guildId: t,
                            channelId: a
                        } = e, i = s.useRef(null), o = (0, l.getMainWindowId)(), u = !n.default.isFocused(o);
                        return s.useLayoutEffect(() => (null == i.current && (i.current = new r.default({
                            guildId: t,
                            channelId: a,
                            isPaused: u,
                            windowId: o
                        }), i.current.initialize()), () => {
                            var e;
                            null === (e = i.current) || void 0 === e || e.terminate(), i.current = null
                        }), [a, t, u, o]), i.current
                    }
                }
        },
        43836: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                useIsRecentMessageDeleted: function() {
                    return l
                }
            });
            var s = a("446674"),
                n = a("324261");

            function l(e) {
                var t;
                let {
                    loaded: a,
                    message: l
                } = (0, s.useStateFromStores)([n.default], () => n.default.getMessageState(e.id));
                return a && (null !== (t = e.messageCount) && void 0 !== t ? t : 0) > 0 && null == l
            }
        },
        532308: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return g
                }
            });
            var s = a("37983");
            a("884691");
            var n = a("448105"),
                l = a.n(n),
                r = a("446674"),
                i = a("77078"),
                o = a("430568"),
                u = a("385976"),
                d = a("547896"),
                c = a("680986"),
                m = a("782340"),
                h = a("224300");
            let f = e => {
                let {
                    tag: t
                } = e, {
                    id: a,
                    name: n,
                    emojiId: l,
                    emojiName: c
                } = t, m = (0, r.useStateFromStores)([u.default], () => null != l ? u.default.getUsableCustomEmojiById(l) : null), f = null != l || null != c;
                return (0, s.jsx)(i.ComboboxItem, {
                    value: a,
                    children: (0, s.jsx)(i.ComboboxItem.Label, {
                        children: (0, s.jsxs)("div", {
                            className: h.row,
                            children: [f ? (0, s.jsx)(o.default, {
                                className: h.emoji,
                                emojiId: l,
                                emojiName: c,
                                animated: !!(null == m ? void 0 : m.animated)
                            }) : (0, s.jsx)(d.default, {
                                className: h.emoji
                            }), (0, s.jsx)(i.Text, {
                                variant: "text-md/semibold",
                                color: "header-secondary",
                                children: n
                            })]
                        })
                    })
                }, a)
            };

            function g(e) {
                let {
                    parentChannel: t,
                    appliedTags: a,
                    maxTagsApplied: n,
                    onSelectTag: r,
                    onClose: o
                } = e, u = (0, c.useVisibleForumTags)(t), d = (e, t) => t.filter(t => l(e.toLowerCase(), t.name.toLowerCase()));
                return (0, s.jsx)(i.ComboboxPopout, {
                    showScrollbar: !0,
                    value: a,
                    onChange: e => {
                        (!n || a.has(e)) && (r(e), o())
                    },
                    placeholder: m.default.Messages.FORUM_TAG_POST_SEARCH_PLACEHOLDER,
                    "aria-label": m.default.Messages.FORUM_TAG_POST_SEARCH_PLACEHOLDER,
                    children: e => d(e, u).map(e => (0, s.jsx)(f, {
                        tag: e
                    }, e.id))
                })
            }
        },
        479273: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return ex
                }
            });
            var s = a("37983"),
                n = a("884691"),
                l = a("414456"),
                r = a.n(l),
                i = a("474820"),
                o = a.n(i),
                u = a("16470"),
                d = a("974667"),
                c = a("942367"),
                m = a("482402"),
                h = a("446674"),
                f = a("151426"),
                g = a("77078"),
                x = a("264732"),
                C = a("731898"),
                _ = a("206230"),
                T = a("679653"),
                S = a("509802"),
                N = a("406043"),
                p = a("87635"),
                E = a("396856"),
                M = a("549077"),
                A = a("144491"),
                v = a("689275"),
                I = a("707443"),
                j = a("300322"),
                R = a("967241"),
                O = a("982108"),
                L = a("42203"),
                F = a("474643"),
                b = a("88093"),
                y = a("585722"),
                P = a("471671"),
                D = a("837899"),
                U = a("425190"),
                w = a("891152"),
                H = a("423487"),
                k = a("378765"),
                B = a("526812"),
                G = a("404607"),
                V = a("670902"),
                z = a("339792"),
                W = a("680986"),
                K = a("146290"),
                Y = a("250850"),
                Z = a("867965"),
                X = a("688169"),
                q = a("131600"),
                Q = a("912066"),
                J = a("657927"),
                $ = a("152637"),
                ee = a("578198"),
                et = a("530474"),
                ea = a("592633"),
                es = a("968462"),
                en = a("823968"),
                el = a("90625"),
                er = a("363622"),
                ei = a("193695"),
                eo = a("552683"),
                eu = a("589455"),
                ed = a("485055"),
                ec = a("219840"),
                em = a("49111"),
                eh = a("648564"),
                ef = a("782340"),
                eg = a("761953");

            function ex(e) {
                let {
                    channel: t,
                    guild: a,
                    sidebarState: n
                } = e;
                return (0, s.jsx)(ee.ForumPostComposerStoreProvider, {
                    createStore: () => (0, ee.createForumPostComposerStore)(t),
                    children: (0, s.jsx)(eM, {
                        channel: t,
                        guild: a,
                        sidebarState: n
                    })
                }, t.id)
            }
            let eC = new er.GridLayout({
                minWidth: 320,
                maxWidth: 450,
                gap: 16
            });

            function e_(e) {
                return "forum-grid-header-section-".concat(e)
            }
            let eT = (e, t, a) => 0 === e ? 0 : (0, er.getGridPostHeight)(a);

            function eS(e) {
                let {
                    itemRole: t,
                    coords: a,
                    section: n
                } = e;
                return (0, s.jsx)("div", {
                    className: r(eg.card, eg.archivedDividerRow, eg.columnsSpan),
                    style: a,
                    "data-item-role": t,
                    children: (0, s.jsx)("div", {
                        className: eg.emptyMainCard,
                        children: (0, s.jsx)(g.Heading, {
                            variant: "eyebrow",
                            className: eg.archivedDivider,
                            id: e_(n),
                            children: ef.default.Messages.FORUM_SECTION_ARCHIVED
                        })
                    })
                }, "section-divider")
            }

            function eN(e) {
                let {
                    section: t,
                    coords: a,
                    key: n,
                    isShowingSearchResult: l,
                    hasActiveThreads: r
                } = e;
                return () => 2 === t && !l && r ? (0, s.jsx)(eS, {
                    section: t,
                    coords: null == a ? void 0 : {
                        ...a,
                        position: "absolute"
                    },
                    itemRole: "section"
                }, n) : null
            }

            function ep(e, t) {
                return "card-".concat(e, "-").concat(t)
            }

            function eE(e) {
                if ("string" == typeof e) {
                    let t = e.match(/card-{\d+}-({\d+})$/);
                    return null == t ? null : t[1]
                }
                return null
            }

            function eM(e) {
                let {
                    channel: t,
                    sidebarState: a
                } = e, {
                    editorHeight: l,
                    editorAdditionRowHeight: i,
                    listViewCardHeights: o,
                    formOpen: c
                } = (0, ee.useForumPostComposerStore)(e => {
                    let {
                        editorHeight: t,
                        editorAdditionRowHeight: a,
                        listViewCardHeights: s,
                        formOpen: n,
                        cardHeightVersion: l
                    } = e;
                    return {
                        editorHeight: t,
                        editorAdditionRowHeight: a,
                        listViewCardHeights: s,
                        formOpen: n,
                        cardHeightVersion: l
                    }
                }, u.default), {
                    activeThreadIds: f,
                    archivedThreadIds: C,
                    searchResults: T,
                    canLoadMore: S,
                    loadMore: N,
                    activeThreadsLoading: p,
                    archivedThreadsLoading: j,
                    loading: b,
                    isSearchLoading: y,
                    layoutType: P
                } = function(e) {
                    let {
                        sortOrder: t,
                        tagFilter: a,
                        layoutType: s
                    } = (0, z.useForumChannelStore)(e.id), n = (0, W.useForumActiveThreadIds)({
                        channel: e,
                        sortOrder: t,
                        tagFilter: a,
                        shouldAutomaticallyAck: !0
                    }), l = (0, h.useStateFromStores)([v.default], () => !v.default.hasLoaded(e.guild_id)), {
                        threadIds: r,
                        canLoadMore: i,
                        loadMore: o,
                        loading: u
                    } = (0, I.useArchivedThreads)(e, t, a), {
                        searchResults: d,
                        isSearchLoading: c
                    } = (0, W.useForumSearchState)({
                        channelId: e.id
                    });
                    return (0, W.useLoadForumUnreadCounts)(e, t, a), {
                        activeThreadIds: n,
                        archivedThreadIds: r,
                        searchResults: d,
                        canLoadMore: i,
                        loadMore: o,
                        loading: l || u || c,
                        archivedThreadsLoading: u,
                        activeThreadsLoading: l,
                        isSearchLoading: c,
                        layoutType: s
                    }
                }(t), D = f.length > 0, U = D || C.length > 0, w = (0, E.default)(t), {
                    tagFilter: H
                } = (0, z.useForumChannelStore)(t.id);
                (0, W.useAutomaticForumSearch)(t, H, c);
                let k = (0, W.useCanSearchForumPosts)(t),
                    V = (0, W.useCanViewArchivedPosts)(t),
                    Q = n.useRef(null),
                    {
                        observePostVisibilityAnalytics: J
                    } = function(e) {
                        let {
                            guildId: t,
                            channelId: a,
                            scrollerRef: s
                        } = e;
                        K.default.useForumChannelSeenManager({
                            guildId: t,
                            channelId: a
                        });
                        let l = n.useRef(null),
                            r = n.useCallback((e, t) => {
                                for (let a of t) {
                                    let t = a.target.dataset.itemId;
                                    if (null == t) return;
                                    let s = Date.now();
                                    a.intersectionRatio >= .5 ? (0, Y.markForumPostItemAsSeen)(e, t, s) : (0, Y.markForumPostItemAsUnseen)(e, t, s)
                                }
                            }, []);
                        n.useEffect(() => {
                            var e;
                            let t = null === (e = s.current) || void 0 === e ? void 0 : e.getScrollerNode();
                            if (null != t) return l.current = new IntersectionObserver(e => r(a, e), {
                                root: t,
                                rootMargin: "0px 100000px 0px 100000px",
                                threshold: .5
                            }), () => {
                                var e;
                                null === (e = l.current) || void 0 === e || e.disconnect(), l.current = null
                            }
                        }, [a, r, s]);
                        let i = n.useCallback((e, t) => {
                            var s;
                            if (null == e) {
                                (0, Y.markForumPostItemAsUnseen)(a, t, Date.now());
                                return
                            }
                            null === (s = l.current) || void 0 === s || s.observe(e)
                        }, [a]);
                        return {
                            observePostVisibilityAnalytics: i
                        }
                    }({
                        scrollerRef: Q,
                        channelId: t.id,
                        guildId: t.guild_id
                    }),
                    et = P === m.ForumLayout.GRID,
                    en = null != T,
                    el = n.useRef(null),
                    {
                        containerRef: eo,
                        containerWidth: ex
                    } = (0, eu.default)();
                n.useEffect(() => () => {
                    null != t.id && G.default.clearForumSearch(t.id)
                }, [t.id]);
                let {
                    columns: eS
                } = n.useMemo(() => et ? eC.getRenderOptions(ex) : er.ForumListLayoutRenderOptions, [et, ex]), eM = n.useMemo(() => b ? Math.round((window.innerHeight - 200) / 118) : 0, [b]), ej = n.useMemo(() => {
                    let e = window.innerHeight,
                        t = Math.ceil(e / (0, er.getGridPostHeight)(eC.getWidth(ex))) * eS;
                    return p ? t : 0
                }, [ex, eS, p]), eO = n.useMemo(() => {
                    let e = window.innerHeight,
                        t = Math.ceil(e / (0, er.getGridPostHeight)(eC.getWidth(ex))) * eS;
                    return j ? t : 0
                }, [ex, eS, j]), eL = n.useMemo(() => {
                    let e = window.innerHeight,
                        t = Math.ceil(e / (0, er.getGridPostHeight)(eC.getWidth(ex))) * eS;
                    return y && en ? t : 0
                }, [ex, eS, y, en]), eF = n.useMemo(() => {
                    if (et) {
                        if (!k && en) return [1, 0];
                        if (!V) return [1, f.length + ej, 0];
                        else if (en) return [1, T.length + eL, 0];
                        else return [1, f.length + ej, C.length + eO]
                    }
                    if (!k && en) return [1, 1];
                    if (!V) return [1, f.length, 1];
                    else if (en) return [1, T.length, 0, eM];
                    else return [1, f.length, C.length, eM]
                }, [et, en, f.length, C.length, k, V, eM, T, ej, eO, eL]), eb = n.useMemo(() => {
                    if (!k && en) return [
                        [],
                        []
                    ];
                    if (!V) return [
                        [], f, []
                    ];
                    if (en) return [
                        [], T, [],
                        []
                    ];
                    else return [
                        [], f, C, []
                    ]
                }, [en, k, V, T, f, C]), ey = n.useCallback((e, a) => {
                    (0, Z.trackForumPostClicked)({
                        guildId: t.guild_id,
                        channelId: t.id,
                        postId: e.id,
                        location: {
                            page: em.AnalyticsPages.GUILD_CHANNEL,
                            section: em.AnalyticsSections.FORUM_CHANNEL_POST
                        }
                    }), a ? (0, A.transitionToThread)(e, eh.OpenThreadAnalyticsLocations.BROWSER) : (el.current = e.id, (0, R.openThreadSidebarForViewing)(e))
                }, [t.guild_id, t.id, el]), [eP, eD] = n.useState(l + i - 24), eU = n.useCallback((e, a, n) => {
                    if (0 === e) return (0, s.jsx)(eR, {
                        channel: t,
                        isEmpty: !D,
                        isSearchLoading: y,
                        numResults: null == T ? void 0 : T.length,
                        coords: a,
                        onHeightChange: eD,
                        children: !b && (0, s.jsx)(q.default, {
                            channel: t,
                            hasAnyThread: U
                        }, t.id)
                    }, "forum-channel-header");
                    return 2 !== e || V ? 1 === e && en && !k ? (0, s.jsx)(ev, {
                        channel: t,
                        coords: a
                    }, "archive-or-search-result") : n() : (0, s.jsx)(eA, {
                        channel: t,
                        coords: a
                    }, "archived-missing-reading-history-perm")
                }, [en, V, T, k, t, D, y, b, U]), ew = (0, h.useStateFromStores)([B.default], () => B.default.hasHidden(t.id));
                n.useEffect(() => {
                    var e, t;
                    let a = et ? eW : Q,
                        s = null === (e = a.current) || void 0 === e ? void 0 : e.getScrollerState();
                    null != s && !ew && s.scrollTop > l && (null === (t = a.current) || void 0 === t || t.scrollTo({
                        to: 0
                    }))
                }, [ew]);
                let eH = (0, X.useForumActivityExperiment)(t.guild_id),
                    {
                        updateListScrollerRef: ek,
                        renderListSection: eB,
                        renderListItem: eG,
                        getListSectionHeight: eV,
                        getListItemHeight: ez
                    } = function(e) {
                        let {
                            listRef: t,
                            isIncreasedActivityView: a,
                            hasActiveThreads: l,
                            threadIdsBySection: i,
                            listViewCardHeights: o,
                            editorHeight: u,
                            editorAdditionRowHeight: d,
                            renderSectionOrItem: c,
                            goToThread: m,
                            observePostVisibilityAnalytics: h,
                            isShowingSearchResult: f
                        } = e, x = n.useCallback(e => a => {
                            var s;
                            t.current = a, e.current = null !== (s = null == a ? void 0 : a.getScrollerNode()) && void 0 !== s ? s : null
                        }, [t]), C = n.useCallback(e => eN({
                            section: e.section,
                            isShowingSearchResult: f,
                            hasActiveThreads: l
                        })(), [l, f]), _ = n.useCallback(e => c(e.section, void 0, () => {
                            if (3 === e.section) return __OVERLAY__ ? null : a ? (0, s.jsx)("div", {
                                className: eg.placeholder,
                                children: (0, s.jsx)(es.default, {})
                            }) : (0, s.jsx)("div", {
                                "data-item-role": "item",
                                className: r(eg.loadingCard, eg["loadingCard-".concat(e.row % 3)], {
                                    [eg.loadingCardWithIncreasedActivity]: a
                                })
                            }, "loading-".concat(e.row));
                            let t = i[e.section][e.row];
                            return (0, s.jsx)("li", {
                                className: eg.card,
                                "data-item-role": "item",
                                children: (0, s.jsx)(g.HeadingLevel, {
                                    children: a ? (0, s.jsx)(ei.default, {
                                        className: eg.increasedActivityMainCard,
                                        threadId: t,
                                        goToThread: m,
                                        observePostVisibilityAnalytics: h
                                    }) : (0, s.jsx)($.default, {
                                        className: eg.mainCard,
                                        threadId: t,
                                        goToThread: m,
                                        observePostVisibilityAnalytics: h
                                    })
                                })
                            }, "".concat(e.section, "-").concat(t))
                        }), [a, c, i, m, h]), T = n.useCallback((e, t) => {
                            if (0 === e) return u + d;
                            let s = i[e][t],
                                n = o[s],
                                l = (a ? ei.DEFAULT_INCREASED_ACTIVITY_FORUM_POST_HEIGHT : 96) + 8;
                            return null == n ? l : n + 8
                        }, [i, o, u, d, a]), S = n.useCallback(e => 2 === e && l ? 40 : 0, [l]);
                        return {
                            updateListScrollerRef: x,
                            renderListSection: C,
                            renderListItem: _,
                            getListSectionHeight: S,
                            getListItemHeight: T
                        }
                    }({
                        listRef: Q,
                        hasActiveThreads: D,
                        threadIdsBySection: eb,
                        listViewCardHeights: o,
                        editorHeight: l,
                        editorAdditionRowHeight: i,
                        renderSectionOrItem: eU,
                        goToThread: ey,
                        observePostVisibilityAnalytics: J,
                        isShowingSearchResult: en,
                        isIncreasedActivityView: eH
                    }),
                    eW = n.useRef(null),
                    {
                        updateMasonryListScrollerRef: eK,
                        getItemKey: eY,
                        renderGridSection: eZ,
                        renderGridItem: eX,
                        getGridSectionHeight: eq,
                        getSectionProps: eQ,
                        handleGridFocus: eJ
                    } = function(e) {
                        let {
                            masonryListScrollerRef: t,
                            threadIdsBySection: a,
                            goToThread: l,
                            renderSectionOrItem: i,
                            hasActiveThreads: o,
                            isShowingSearchResult: u,
                            canSearchForumPosts: d,
                            canViewArchivedPosts: c,
                            observePostVisibilityAnalytics: m,
                            focusedThreadId: h,
                            headerHeight: f
                        } = e, g = n.useRef(null), x = n.useCallback(e => {
                            t.current = e, g.current = null == e ? void 0 : e.getScrollerNode()
                        }, [t]), C = n.useCallback((e, a) => {
                            let {
                                current: s
                            } = t;
                            if (null == s) return;
                            let n = document.querySelector(e);
                            if (null == n) return;
                            let l = s.getCoordsMap()[a],
                                r = null != l ? l.height + 20 : 200;
                            s.scrollIntoViewNode({
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
                            }), h.current = eE(a)
                        }, [t, h]), _ = n.useCallback(e => {
                            let t = eE(e);
                            if (null == t) return;
                            let a = L.default.getChannel(t);
                            null != a && l(a, !0)
                        }, [l]), T = n.useCallback(function(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                                s = a[e];
                            if (0 === s.length) return "section-".concat(e, "-").concat(t);
                            {
                                let s = a[e][t];
                                return null == s ? ep(e, t) : ep(e, s)
                            }
                        }, [a]), S = n.useCallback((e, t, a) => i(e, t, eN({
                            section: e,
                            coords: t,
                            key: a,
                            isShowingSearchResult: u,
                            hasActiveThreads: o
                        })), [i, o, u]), N = n.useCallback(e => 0 === e ? {} : {
                            role: "grid",
                            "aria-labelledby": "#".concat(e_(e))
                        }, []), p = n.useCallback((e, t, n, i, o) => {
                            if (0 === e) return null;
                            let u = a[e][t];
                            return null != u ? (0, s.jsx)(ea.default, {
                                id: "".concat(i),
                                threadId: u,
                                className: r(eg.card, eg.mainCard),
                                goToThread: l,
                                observePostVisibilityAnalytics: m,
                                coords: n,
                                gridCoords: o.coordinates[i],
                                gridSectionBoundaries: o.boundaries
                            }, i) : __OVERLAY__ ? null : (0, s.jsx)("div", {
                                style: {
                                    ...n
                                },
                                "data-item-role": "item",
                                className: r(eg.loadingCard, eg["loadingCard-".concat(t % 3)])
                            }, i)
                        }, [a, l, m]), E = n.useCallback(e => 0 === e ? f - 8 - 24 : 2 === e ? o || !c ? 40 : 0 : 1 === e && u && !d ? 40 : 0, [f, u, d, o, c]);
                        return {
                            updateMasonryListScrollerRef: x,
                            masonryListContainerRef: g,
                            focusedThreadId: h,
                            handleGridFocus: C,
                            handleGridSelect: _,
                            getItemKey: T,
                            renderGridSection: S,
                            renderGridItem: p,
                            getSectionProps: N,
                            getGridSectionHeight: E
                        }
                    }({
                        masonryListScrollerRef: eW,
                        threadIdsBySection: eb,
                        goToThread: ey,
                        renderSectionOrItem: eU,
                        hasActiveThreads: D,
                        isShowingSearchResult: en,
                        canSearchForumPosts: k,
                        canViewArchivedPosts: V,
                        observePostVisibilityAnalytics: J,
                        focusedThreadId: el,
                        headerHeight: eP
                    });
                ! function(e) {
                    let {
                        masonryListScrollerRef: t,
                        containerWidth: a,
                        isGridLayout: s,
                        threadIdsBySection: l,
                        focusedThreadId: r,
                        parentId: i
                    } = e;
                    n.useEffect(() => {
                        if (s) {
                            let e = setTimeout(() => {
                                if (null == t.current || null == r.current) return;
                                let e = r.current;
                                if ("string" != typeof e) return;
                                let a = O.default.getSidebarState(i);
                                if (null == a) {
                                    r.current = null;
                                    return
                                }
                                let s = l.findIndex(t => t.find(t => t === e)),
                                    n = t.current.getCoordsMap(),
                                    o = "__section__".concat(s),
                                    u = n[o],
                                    d = n[ep(s, e)];
                                null != u && null != d && t.current.scrollIntoViewRect({
                                    start: u.top + d.top - 100,
                                    end: u.top + d.top + d.height + 50
                                })
                            }, 500);
                            return () => clearTimeout(e)
                        }
                    }, [i, a, s, l, r, t])
                }({
                    masonryListScrollerRef: eW,
                    containerWidth: ex,
                    isGridLayout: et,
                    threadIdsBySection: eb,
                    parentId: t.id,
                    focusedThreadId: el
                });
                let e$ = n.useCallback(() => {
                        var e, a;
                        if (en) return;
                        let s = et ? null === (e = eW.current) || void 0 === e ? void 0 : e.getScrollerState() : null === (a = Q.current) || void 0 === a ? void 0 : a.getScrollerState();
                        if (null == s) return;
                        (0, Z.trackForumScrolled)({
                            guildId: t.guild_id,
                            channelId: t.id
                        });
                        let n = s.scrollTop + s.offsetHeight,
                            l = s.scrollHeight - n,
                            r = et ? Math.max(200, (0, er.getGridPostHeight)(ex)) : 200;
                        l < r && N()
                    }, [en, et, t.guild_id, t.id, ex, N]),
                    e0 = (0, h.useStateFromStores)([_.default], () => _.default.keyboardModeEnabled),
                    e1 = (0, ed.default)({
                        id: "forum-grid-view",
                        isEnabled: et && e0,
                        setFocus: eJ
                    }),
                    e6 = (0, ec.default)({
                        listRef: Q,
                        padding: 96,
                        isEnabled: !et && e0,
                        channel: t
                    }),
                    {
                        ref: e4,
                        ...e8
                    } = e1.containerProps,
                    e2 = O.default.getSidebarState(t.id),
                    e3 = null != e2 && (0, O.isViewChannelSidebar)(e2);
                return (0, s.jsx)("div", {
                    className: eg.container,
                    ref: eo,
                    children: (0, s.jsx)(g.FocusJumpSection, {
                        children: e => (0, s.jsxs)(s.Fragment, {
                            children: [c && (0, s.jsx)(x.default, {
                                channel: t,
                                draftType: F.DraftType.FirstThreadMessage,
                                className: eg.uploadArea,
                                style: {
                                    right: e3 && (null == a ? void 0 : a.isThreadSidebarFloating) ? a.threadSidebarWidth : 0
                                }
                            }), (0, s.jsx)(eI, {
                                channel: t
                            }), (0, s.jsx)(g.HiddenVisually, {
                                children: (0, s.jsx)(g.H, {
                                    children: ef.default.Messages.THREADS
                                })
                            }), w ? (0, s.jsx)("div", {
                                className: eg.optInNotice,
                                children: (0, s.jsx)(M.default, {
                                    channel: t
                                })
                            }) : null, et ? (0, s.jsx)(ed.GridNavigatorProvider, {
                                navigator: e1,
                                children: (0, s.jsx)(g.MasonryList, {
                                    ref: e => {
                                        var t;
                                        e4.current = null !== (t = null == e ? void 0 : e.getScrollerNode()) && void 0 !== t ? t : null, eK(e)
                                    },
                                    itemGutter: 16,
                                    padding: 24,
                                    className: eg.grid,
                                    columns: eS,
                                    sections: eF,
                                    getItemKey: eY,
                                    getSectionHeight: eq,
                                    getItemHeight: eT,
                                    renderSection: eZ,
                                    renderItem: eX,
                                    getSectionProps: eQ,
                                    onScroll: S ? e$ : void 0,
                                    chunkSize: 350,
                                    ...e8,
                                    ...e
                                }, P)
                            }) : (0, s.jsx)(d.ListNavigatorProvider, {
                                navigator: e6,
                                children: (0, s.jsx)(d.ListNavigatorContainer, {
                                    children: t => {
                                        let {
                                            ref: a,
                                            ...n
                                        } = t;
                                        return (0, s.jsx)(g.ListAuto, {
                                            ref: ek(a),
                                            className: eg.list,
                                            sections: eF,
                                            sectionHeight: eV,
                                            rowHeight: ez,
                                            renderRow: eG,
                                            renderSection: eB,
                                            chunkSize: 150,
                                            onScroll: S ? e$ : void 0,
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

            function eA(e) {
                let {
                    channel: t,
                    coords: a
                } = e, n = (0, T.default)(t);
                return (0, s.jsx)("div", {
                    className: r(eg.missingReadHistoryPermission, eg.columnsSpan),
                    style: a,
                    children: (0, s.jsx)(g.Text, {
                        color: "text-muted",
                        variant: "text-md/normal",
                        children: ef.default.Messages.FORUM_CHANNEL_NO_POST_HISTORY.format({
                            channelName: n
                        })
                    })
                })
            }

            function ev(e) {
                let {
                    channel: t,
                    coords: a
                } = e, n = (0, T.default)(t);
                return (0, s.jsx)("div", {
                    className: r(eg.missingReadHistoryPermission, eg.columnsSpan),
                    style: a,
                    children: (0, s.jsx)(g.Text, {
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
                } = e, a = n.useCallback(() => {
                    G.default.resort(t.id)
                }, [t]), l = (0, h.useStateFromStores)([V.default], () => V.default.getNewThreadCount());
                return 0 === l ? null : (0, s.jsx)(g.Clickable, {
                    className: eg.newPostsButton,
                    onClick: a,
                    children: (0, s.jsx)(g.Text, {
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
                var t, a, l;
                let {
                    channel: i,
                    isEmpty: x,
                    isSearchLoading: T,
                    numResults: E,
                    children: M,
                    coords: A,
                    onHeightChange: v
                } = e, {
                    name: I,
                    formOpen: R,
                    titleFocused: O,
                    hasClickedForm: L,
                    textAreaState: w,
                    onboardingExpanded: B,
                    setEditorAdditionRowHeight: V
                } = (0, ee.useForumPostComposerStore)(e => {
                    let {
                        name: t,
                        formOpen: a,
                        titleFocused: s,
                        hasClickedForm: n,
                        textAreaState: l,
                        onboardingExpanded: r,
                        setEditorAdditionRowHeight: i
                    } = e;
                    return {
                        name: t,
                        formOpen: a,
                        titleFocused: s,
                        hasClickedForm: n,
                        textAreaState: l,
                        onboardingExpanded: r,
                        setEditorAdditionRowHeight: i
                    }
                }, u.default), {
                    tagFilter: K,
                    layoutType: Y
                } = (0, z.useForumChannelStore)(i.id), X = (0, ee.useForumPostComposerStoreApi)(), q = (0, z.useForumChannelStoreApi)(), $ = (0, h.useStateFromStores)([b.default], () => b.default.canChatInGuild(i.guild_id)), ea = (0, W.useCanManageChannel)(i), es = (0, j.useCanStartThread)(i), [en, er] = n.useState(es), [, ei] = (0, N.useCurrentUserCommunicationDisabled)(null !== (l = i.getGuildId()) && void 0 !== l ? l : void 0), eu = $ && (es || en && ei), ed = i.isMediaChannel();
                n.useEffect(() => {
                    es && er(!0)
                }, [es]);
                let {
                    ref: ec,
                    height: eh
                } = (0, C.default)();
                n.useEffect(() => {
                    null != eh && v(eh)
                }, [v, eh]);
                let ex = n.useCallback(() => {
                    o(() => {
                        null != ec.current && X.getState().setEditorHeight(ec.current.offsetHeight)
                    })
                }, [ec, X]);
                n.useLayoutEffect(ex, [ex, x, eu, B]), (0, k.useComponentAction)({
                    event: em.ComponentActions.REMEASURE_TARGET,
                    handler: ex
                });
                let eC = (0, h.useStateFromStores)([y.default], () => y.default.getUploads(i.id, F.DraftType.FirstThreadMessage)),
                    e_ = (0, W.useChannelTemplate)(i),
                    eT = n.useRef(null),
                    eS = n.useRef(null),
                    [eN, ep] = n.useState(0),
                    {
                        width: eE
                    } = (0, h.useStateFromStores)([P.default], () => P.default.windowSize()),
                    eM = null === (a = eT.current) || void 0 === a ? void 0 : null === (t = a.getBoundingClientRect()) || void 0 === t ? void 0 : t.width,
                    eA = n.useRef(null);
                n.useLayoutEffect(() => {
                    var e;
                    let t = eS.current,
                        a = null == t ? void 0 : null === (e = t.children) || void 0 === e ? void 0 : e[0];
                    if (null != eT.current && null != a && null != a.children) {
                        let {
                            left: e,
                            top: t
                        } = eT.current.getBoundingClientRect(), s = 0;
                        for (let n of a.children) {
                            let {
                                right: a,
                                top: l,
                                height: r
                            } = n.getBoundingClientRect();
                            if (l - t > r) break;
                            a - e > s && (s = a - e)
                        }
                        ep(s)
                    }
                }, [i.availableTags, eE, eM, K]);
                let ev = I.length > 0 && !R && (T || null != E),
                    eI = !__OVERLAY__ && !L && !R && O && (0 === w.textValue.trim().length || w.textValue.trim() === e_) && 0 === eC.length;
                n.useLayoutEffect(() => {
                    let e = ev || eI;
                    if (!e) return V(0);
                    null != eA.current && V(e ? eA.current.clientHeight : 0)
                }, [V, ev, eI, eA]);
                let eR = e => {
                        (0, Z.trackForumTagFilterClicked)({
                            guildId: i.guild_id,
                            channelId: i.id,
                            tagId: e,
                            filterTagIds: Array.from(K),
                            added: !K.has(e),
                            location: {
                                page: em.AnalyticsPages.GUILD_CHANNEL,
                                section: em.AnalyticsSections.FORUM_CHANNEL_HEADER,
                                object: em.AnalyticsObjects.CHANNEL_TAG
                            }
                        }), q.getState().toggleTagFilter(i.id, e)
                    },
                    eL = (0, d.default)({
                        id: "".concat(i.id, "-tags-navigator"),
                        isEnabled: !0,
                        wrap: !0,
                        scrollToStart: ej,
                        scrollToEnd: ej,
                        orientation: c.Orientations.HORIZONTAL
                    }),
                    {
                        role: eF,
                        onFocus: eb,
                        ...ey
                    } = (0, d.useListItem)("forum-channel-header"),
                    eP = n.useRef(null),
                    eD = function() {
                        let e = n.useRef(!1),
                            t = (0, h.useStateFromStores)([_.default], () => _.default.keyboardModeEnabled),
                            a = n.useCallback(t => {
                                e.current = t.shiftKey
                            }, [e]);
                        return n.useLayoutEffect(() => (t ? window.addEventListener("keydown", a) : window.removeEventListener("keydown", a), () => window.removeEventListener("keydown", a)), [t, a]), e
                    }(),
                    eU = n.useCallback(e => {
                        if (eb(e), e.target === ec.current && !eD.current) {
                            var t;
                            null === (t = eP.current) || void 0 === t || t.focus()
                        }
                    }, [eb, ec, eD]);
                return (0, s.jsx)("div", {
                    className: r(eg.card, eg.headerRow, eg.columnsSpan),
                    ref: ec,
                    onFocus: eU,
                    ...ey,
                    style: {
                        ...A,
                        position: "static",
                        height: "auto"
                    },
                    children: (0, s.jsxs)(k.ComponentDispatchGroupProvider, {
                        children: [null != i.guild_id ? (0, s.jsx)(p.default, {
                            className: r(eg.newMemberBanner, {
                                [eg.gridViewBanner]: Y === m.ForumLayout.GRID
                            }),
                            guildId: i.guild_id,
                            channel: i
                        }) : null, (0, s.jsx)("div", {
                            className: r(eg.mainCard, eg.header, {
                                [eg.headerWithMatchingPosts]: ev || eI
                            }),
                            children: (0, s.jsx)(et.default, {
                                parentChannel: i,
                                onChange: ex,
                                isSearchLoading: T,
                                canCreatePost: eu,
                                inputRef: eP
                            })
                        }), (ev || eI) && (0, s.jsxs)("div", {
                            className: eg.matchingPostsRow,
                            ref: eA,
                            children: [ev && (0, s.jsxs)("div", {
                                className: eg.matchingPosts,
                                children: [(0, s.jsx)(g.Heading, {
                                    variant: "text-xs/normal",
                                    color: "text-normal",
                                    children: T ? ef.default.Messages.FORUM_SEARCHING : 0 === E ? ef.default.Messages.FORUM_SEARCH_NO_MATCHING_POSTS : ef.default.Messages.FORUM_SEARCH_MATCHING_POSTS_ALT.format({
                                        numPosts: E,
                                        query: I
                                    })
                                }), !T && (0, s.jsx)(g.Clickable, {
                                    onClick: () => {
                                        (0, Z.trackForumSearchCleared)({
                                            guildId: i.guild_id,
                                            channelId: i.id
                                        }), G.default.clearForumSearch(i.id), X.getState().setName("")
                                    },
                                    children: (0, s.jsx)(g.Text, {
                                        variant: "text-xs/semibold",
                                        color: "text-brand",
                                        className: eg.clear,
                                        children: ef.default.Messages.CLEAR
                                    })
                                })]
                            }), (0, s.jsx)("div", {
                                className: eg.tagsSpacer
                            }), eI ? eu ? (0, s.jsxs)("div", {
                                className: eg.startPostHelp,
                                children: [(0, s.jsx)(g.KeyCombo, {
                                    shortcut: "SHIFT",
                                    className: eg.keyboardShortcut
                                }), (0, s.jsx)(g.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-normal",
                                    children: "+"
                                }), (0, s.jsx)(g.KeyCombo, {
                                    shortcut: "ENTER",
                                    className: eg.keyboardShortcut
                                }), (0, s.jsx)(g.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-normal",
                                    children: ef.default.Messages.FORUM_ENTER_TO_START_POST
                                })]
                            }) : (0, s.jsxs)("div", {
                                className: eg.startPostHelp,
                                children: [(0, s.jsx)(H.default, {
                                    height: 14,
                                    width: 14,
                                    className: eg.warnIcon
                                }), (0, s.jsx)(g.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-normal",
                                    children: ef.default.Messages.FORUM_NO_POST_PERMISSION_HELP
                                })]
                            }) : null]
                        }), (0, s.jsx)(Q.default, {
                            channel: i,
                            onChange: ex
                        }), (0, s.jsxs)("div", {
                            className: eg.tagsContainer,
                            ref: eT,
                            children: [(0, s.jsx)(eO, {
                                channel: i
                            }), i.availableTags.length > 0 ? (0, s.jsxs)(s.Fragment, {
                                children: [(0, s.jsx)("div", {
                                    className: eg.divider
                                }), (0, s.jsx)("div", {
                                    className: eg.tagList,
                                    ref: eS,
                                    children: (0, s.jsx)(d.ListNavigatorProvider, {
                                        navigator: eL,
                                        children: (0, s.jsx)(d.ListNavigatorContainer, {
                                            children: e => {
                                                let {
                                                    ref: t,
                                                    ...a
                                                } = e;
                                                return (0, s.jsx)("div", {
                                                    className: eg.tagListInner,
                                                    ref: t,
                                                    ...a,
                                                    children: i.availableTags.map(e => (0, s.jsx)(el.default, {
                                                        className: eg.tag,
                                                        tag: e,
                                                        onClick: () => eR(e.id),
                                                        selected: K.has(e.id)
                                                    }, e.id))
                                                })
                                            }
                                        })
                                    })
                                }), (0, s.jsx)(g.Popout, {
                                    renderPopout: e => {
                                        let {
                                            closePopout: t,
                                            setPopoutRef: a
                                        } = e;
                                        return (0, s.jsx)(eo.default, {
                                            channel: i,
                                            closePopout: t,
                                            setPopoutRef: a
                                        })
                                    },
                                    position: "bottom",
                                    align: "right",
                                    children: (e, t) => {
                                        let {
                                            isShown: a
                                        } = t;
                                        return (0, s.jsxs)(g.Button, {
                                            ...e,
                                            size: g.Button.Sizes.MIN,
                                            color: g.Button.Colors.CUSTOM,
                                            className: r(eg.tagsButton, {
                                                [eg.tagsButtonWithCount]: K.size > 0
                                            }),
                                            style: {
                                                left: eN
                                            },
                                            innerClassName: eg.tagsButtonInner,
                                            "aria-label": K.size > 0 ? ef.default.Messages.FORUM_TAG_SEE_MORE_A11Y_LABEL : ef.default.Messages.FORUM_TAG_ALL_A11Y_LABEL,
                                            children: [K.size > 0 ? (0, s.jsx)("div", {
                                                className: eg.countContainer,
                                                children: (0, s.jsx)(g.Text, {
                                                    className: eg.countText,
                                                    color: "none",
                                                    variant: "text-xs/medium",
                                                    children: K.size
                                                })
                                            }) : ef.default.Messages.FORUM_TAG_ALL, a ? (0, s.jsx)(U.default, {
                                                width: 20
                                            }) : (0, s.jsx)(D.default, {
                                                width: 20
                                            })]
                                        })
                                    }
                                }), (0, s.jsxs)(g.Button, {
                                    size: g.Button.Sizes.MIN,
                                    color: g.Button.Colors.CUSTOM,
                                    className: r(eg.tagsButton, eg.tagsButtonPlaceholder),
                                    innerClassName: eg.tagsButtonInner,
                                    "aria-label": ef.default.Messages.FORUM_TAG_SEE_MORE_A11Y_LABEL,
                                    children: [K.size > 0 ? (0, s.jsx)("div", {
                                        className: eg.countContainer,
                                        children: (0, s.jsx)(g.Text, {
                                            className: eg.countText,
                                            color: "none",
                                            variant: "text-xs/medium",
                                            children: K.size
                                        })
                                    }) : null, (0, s.jsx)(U.default, {
                                        width: 24
                                    })]
                                })]
                            }) : null]
                        }), M, ea && !ed && (0, s.jsx)(S.default, {
                            contentTypes: [f.DismissibleContent.FORUM_CHANNEL_HELPER_CARD],
                            children: e => {
                                let {
                                    visibleContent: t,
                                    markAsDismissed: a
                                } = e;
                                return t === f.DismissibleContent.FORUM_CHANNEL_HELPER_CARD ? (0, s.jsx)(J.default, {
                                    onDismiss: a
                                }) : null
                            }
                        })]
                    })
                }, "create-form")
            }

            function eO(e) {
                let {
                    channel: t
                } = e, a = t.isMediaChannel();
                return (0, s.jsx)(g.Popout, {
                    renderPopout: e => {
                        let {
                            closePopout: a
                        } = e;
                        return (0, s.jsx)(en.default, {
                            channel: t,
                            closePopout: a
                        })
                    },
                    position: "bottom",
                    align: "left",
                    children: (e, t) => {
                        let {
                            isShown: n
                        } = t;
                        return (0, s.jsxs)(g.Button, {
                            ...e,
                            size: g.Button.Sizes.MIN,
                            color: g.Button.Colors.CUSTOM,
                            className: eg.sortDropdown,
                            innerClassName: eg.sortDropdownInner,
                            "aria-label": a ? ef.default.Messages.MEDIA_CHANNEL_SORT : ef.default.Messages.FORUM_CHANNEL_SORT_AND_VIEW,
                            children: [(0, s.jsx)(w.default, {}), (0, s.jsx)(g.Text, {
                                className: eg.sortDropdownText,
                                variant: "text-sm/medium",
                                color: "interactive-normal",
                                children: a ? ef.default.Messages.MEDIA_CHANNEL_SORT : ef.default.Messages.FORUM_CHANNEL_SORT_AND_VIEW
                            }), n ? (0, s.jsx)(U.default, {
                                width: 20
                            }) : (0, s.jsx)(D.default, {
                                width: 20
                            })]
                        })
                    }
                })
            }
        },
        131600: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return eg
                }
            });
            var s = a("37983"),
                n = a("884691"),
                l = a("414456"),
                r = a.n(l),
                i = a("866227"),
                o = a.n(i),
                u = a("301165"),
                d = a("171210"),
                c = a("316693"),
                m = a("249654"),
                h = a("446674"),
                f = a("77078"),
                g = a("18054"),
                x = a("581583"),
                C = a("206230"),
                _ = a("656038"),
                T = a("454273"),
                S = a("781555"),
                N = a("305961"),
                p = a("36694"),
                E = a("945330"),
                M = a("717018"),
                A = a("673078"),
                v = a("68238"),
                I = a("904276"),
                j = a("772280"),
                R = a("423487"),
                O = a("956089"),
                L = a("659500"),
                F = a("526812"),
                b = a("404607"),
                y = a("713955"),
                P = a("339792"),
                D = a("680986"),
                U = a("867965"),
                w = a("258039"),
                H = a("729608"),
                k = a("578198"),
                B = a("953371"),
                G = a("49111"),
                V = a("782340"),
                z = a("358040");
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
                    (0, U.trackForumOnboardingClicked)({
                        onboardingCTA: e
                    })
                };
            class Z {
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
            let X = (e, t, n) => {
                    let l = (0, _.default)(t) ? c.default.combine(G.Permissions.VIEW_CHANNEL, G.Permissions.SEND_MESSAGES) : G.Permissions.SEND_MESSAGES,
                        r = null != e ? (0, y.getAllExistingRolesWithPermission)(e, t, l).filter(a => t.permissionOverwrites.hasOwnProperty(a.id) || (0, T.isEveryoneRoleId)(e.id, a.id)) : [],
                        i = r.length > 0,
                        o = r.some(t => (0, T.isEveryoneRoleId)(e.id, t.id));
                    return {
                        name: V.default.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_PERMISSION_TITLE,
                        description: V.default.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_PERMISSION_DESCRIPTION,
                        isDone: i && o,
                        shouldWarn: i && !o,
                        children: i ? (0, s.jsx)(eu, {
                            guild: e,
                            roles: r
                        }) : null,
                        clickHandler: () => {
                            Y(B.ForumOnboardingCTAs.PERMISSIONS), (0, f.openModalLazy)(async () => {
                                let {
                                    default: i
                                } = await a.el("840489").then(a.bind(a, "840489"));
                                return n(!0), a => (0, s.jsx)(i, {
                                    ...a,
                                    channel: t,
                                    guild: e,
                                    permission: l,
                                    currentSelectedRoles: r
                                })
                            }, {
                                modalKey: "SEND_MESSAGE_ROLE_PERMISSION_FIX_MODAL_KEY",
                                onCloseRequest: G.NOOP_NULL,
                                onCloseCallback: () => n(!1)
                            })
                        }
                    }
                },
                q = e => {
                    let t = null != e.topic && e.topic.length > 0;
                    return {
                        name: V.default.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_GUIDELINES_TITLE,
                        description: V.default.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_GUIDELINES_DESCRIPTION,
                        clickHandler: () => {
                            Y(B.ForumOnboardingCTAs.GUIDELINES), g.default.open(e.id, void 0, G.ChannelSettingsSubsections.TOPIC)
                        },
                        isDone: t
                    }
                },
                Q = e => {
                    let t = null != e.availableTags && e.availableTags.length > 0;
                    return {
                        name: V.default.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_TAGS_TITLE,
                        description: V.default.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_TAGS_DESCRIPTION,
                        clickHandler: () => {
                            Y(B.ForumOnboardingCTAs.TAGS), g.default.open(e.id), (0, f.openModalLazy)(async () => {
                                let {
                                    default: t
                                } = await a.el("987034").then(a.bind(a, "987034"));
                                return a => (0, s.jsx)(t, {
                                    ...a,
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
                        name: V.default.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_DEFAULT_REACTION_TITLE,
                        description: V.default.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_DEFAULT_REACTION_DESCRIPTION,
                        clickHandler: () => {
                            Y(B.ForumOnboardingCTAs.DEFAULT_REACTION), (0, f.openModalLazy)(async () => {
                                let {
                                    default: t
                                } = await a.el("456552").then(a.bind(a, "456552"));
                                return a => (0, s.jsx)(t, {
                                    ...a,
                                    channel: e
                                })
                            })
                        },
                        isDone: t
                    }
                },
                $ = (e, t, n) => ({
                    name: V.default.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_FIRST_POST_TITLE,
                    description: t ? V.default.Messages.MEDIA_CHANNEL_ONBOARDING_CHECKLIST_FIRST_POST_DESCRIPTION : V.default.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_FIRST_POST_DESCRIPTION.format({
                        onClick: e => {
                            null != n && (e.preventDefault(), e.stopPropagation(), (0, U.trackForumUpsellModalViewed)(), (0, f.openModalLazy)(async () => {
                                let {
                                    default: e
                                } = await a.el("135430").then(a.bind(a, "135430"));
                                return t => (0, s.jsx)(e, {
                                    ...t,
                                    guildId: n
                                })
                            }))
                        }
                    }),
                    clickHandler: () => {
                        Y(B.ForumOnboardingCTAs.CREATE_POST), L.ComponentDispatch.dispatch(G.ComponentActions.FOCUS_COMPOSER_TITLE)
                    },
                    isDone: e
                }),
                ee = (e, t, a, s) => n.useMemo(() => {
                    let n = new Z,
                        l = (null == t ? void 0 : t.isMediaChannel()) === !0;
                    return null != e && null != t && !l && n.addStep(X(e, t, s)), !l && n.addStep(q(t)), n.addStep(Q(t)), n.addStep(J(t)), n.addStep($(a, l, null == e ? void 0 : e.id)), n
                }, [t, e, a, s]),
                et = (e, t) => n.useCallback(() => (t(!1), b.default.hideAdminOnboarding(e, !0)), [e, t]),
                ea = e => {
                    let t = m.default.extractTimestamp(e),
                        a = o().isBefore(o(t).add(o.duration(15, "days")));
                    return a
                },
                es = (e, t, a) => {
                    n.useEffect(() => {
                        !e && a(!t)
                    }, [e, a, t])
                },
                en = (e, t, a, s) => {
                    let l = n.useRef(0);
                    n.useEffect(() => (a || !e || t ? clearTimeout(l.current) : l.current = setTimeout(() => {
                        s()
                    }, 6e4), () => clearTimeout(l.current)), [e, t, s, a])
                },
                el = (e, t, a) => {
                    n.useEffect(() => {
                        e && t && a()
                    }, [])
                },
                er = e => {
                    let {
                        isAllDone: t,
                        isVisible: a,
                        canManageChannel: s,
                        guild: l,
                        channel: r
                    } = e, i = n.useCallback(() => {
                        L.ComponentDispatch.dispatch(G.ComponentActions.REMEASURE_TARGET)
                    }, []);
                    n.useEffect(() => {
                        i()
                    }, [i, t, a, s, null == l ? void 0 : l.roles, r.id, r.permissionOverwrites])
                },
                ei = () => {
                    let [e, t] = n.useState(!0), a = (0, h.useStateFromStores)([C.default], () => C.default.useReducedMotion), s = (0, u.useTransition)(e, {
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
                        immediate: a
                    });
                    return {
                        transitions: s,
                        setVisible: t
                    }
                },
                eo = e => {
                    let t = (0, h.useStateFromStores)([C.default], () => C.default.useReducedMotion);
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
                        roles: a
                    } = e;
                    return (0, s.jsx)("div", {
                        className: z.rolesList,
                        "aria-label": V.default.Messages.ROLES_LIST.format({
                            numRoles: a.length
                        }),
                        children: a.map(e => (0, s.jsx)(x.MemberRole, {
                            role: e,
                            canRemove: !1,
                            onRemove: G.NOOP_NULL,
                            guildId: t.id,
                            className: z.rolePill
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
                        channel: a,
                        hasAnyThread: s,
                        handleHide: l
                    } = e, [r, i] = n.useState(!1), o = (0, w.isOnboardingDismissed)(a.id), u = (0, h.useStateFromStores)([F.default], () => F.default.hasHidden(a.id)), d = ee(t, a, s, i), c = d.isAllDone(), m = o || u || !ea(a.id);
                    return en(c, m, r, l), {
                        onboardingSteps: d,
                        isHidden: u,
                        isDismissed: o,
                        isAllDone: c
                    }
                },
                em = () => n.useCallback(e => {
                    var t;
                    null === (t = e.clickHandler) || void 0 === t || t.call(e)
                }, []),
                eh = e => {
                    let {
                        handleHide: t
                    } = e;
                    return (0, s.jsx)(f.Clickable, {
                        onClick: t,
                        className: z.closeButton,
                        "aria-label": V.default.Messages.DISMISS,
                        children: (0, s.jsx)(E.default, {
                            className: z.closeIcon
                        })
                    })
                },
                ef = e => {
                    let {
                        expanded: t,
                        onClick: a
                    } = e;
                    return (0, s.jsx)(f.Clickable, {
                        onClick: a,
                        className: z.closeButton,
                        "aria-label": t ? V.default.Messages.COLLAPSE : V.default.Messages.EXPAND,
                        children: t ? (0, s.jsx)(M.default, {
                            className: z.closeIcon
                        }) : (0, s.jsx)(A.default, {
                            className: z.closeIcon
                        })
                    })
                };
            var eg = e => {
                let {
                    hasAnyThread: t,
                    channel: a
                } = e, {
                    onboardingExpanded: l
                } = (0, k.useForumPostComposerStore)(e => {
                    let {
                        onboardingExpanded: t
                    } = e;
                    return {
                        onboardingExpanded: t
                    }
                }), {
                    tagFilter: i
                } = (0, P.useForumChannelStore)(a.id), o = (0, h.useStateFromStores)([N.default], () => N.default.getGuild(a.getGuildId())), c = (0, D.useCanManageChannel)(a), {
                    transitions: m,
                    setVisible: g
                } = ei(), x = eo(l), C = em(), _ = et(a.id, g), {
                    onboardingSteps: T,
                    isDismissed: E,
                    isHidden: M,
                    isAllDone: A
                } = ec({
                    guild: o,
                    channel: a,
                    hasAnyThread: t,
                    handleHide: _
                }), L = !M && !E, F = (0, k.useForumPostComposerStoreApi)(), b = a.isMediaChannel(), y = e => F.getState().setOnboardingExpanded(e);
                return (el(A, L, _), er({
                    isAllDone: A,
                    isVisible: L,
                    canManageChannel: c,
                    guild: o,
                    channel: a
                }), es(E, M, g), n.useEffect(() => {
                    (!t || !L) && y(!0)
                }, []), null == o) ? null : L && c ? b ? t ? null : (0, s.jsx)(S.default, {
                    channel: a
                }) : (0, s.jsx)(s.Fragment, {
                    children: m((e, t) => t ? (0, s.jsx)(u.animated.div, {
                        style: e,
                        className: z.container,
                        children: (0, s.jsxs)("div", {
                            className: z.wrapper,
                            children: [(0, s.jsx)("div", {
                                className: z.headerRow,
                                children: (0, s.jsxs)(f.HeadingLevel, {
                                    component: (0, s.jsx)(f.Heading, {
                                        variant: "heading-md/semibold",
                                        children: V.default.Messages.GET_STARTED
                                    }),
                                    children: [(0, s.jsx)(f.Heading, {
                                        variant: "heading-md/medium",
                                        className: z.header,
                                        children: V.default.Messages.FORUM_CHANNEL_ONBOARDING_COMPLETED_COUNT.format({
                                            numCompleted: T.completedSteps.toString(),
                                            numSteps: T.steps.length.toString()
                                        })
                                    }), (0, s.jsxs)(f.Text, {
                                        variant: "text-xs/normal",
                                        className: z.visibilityInfo,
                                        children: [(0, s.jsx)(v.default, {
                                            width: 12,
                                            height: 12,
                                            className: z.icon
                                        }), V.default.Messages.FORUM_CHANNEL_ONBOARDING_VISIBILITY]
                                    }), (0, s.jsx)(ef, {
                                        expanded: l,
                                        onClick: () => y(!l)
                                    }), (0, s.jsx)(eh, {
                                        handleHide: _
                                    })]
                                })
                            }), x((e, t) => t ? (0, s.jsx)(u.animated.div, {
                                style: e,
                                className: z.listContainer,
                                children: (0, s.jsx)("ol", {
                                    className: z.checklist,
                                    children: T.getSteps().map(e => (0, s.jsxs)(f.Clickable, {
                                        tag: "li",
                                        "aria-label": e.name,
                                        onClick: () => C(e),
                                        className: r(z.stepContainer, {
                                            [z.completed]: e.isDone
                                        }),
                                        children: [e.shouldWarn ? (0, s.jsx)(R.default, {
                                            color: d.default.STATUS_DANGER,
                                            className: z.stepStatus
                                        }) : e.isDone ? (0, s.jsx)(O.IconBadge, {
                                            color: d.default.STATUS_POSITIVE_BACKGROUND,
                                            icon: p.default,
                                            style: K,
                                            className: z.stepStatus
                                        }) : (0, s.jsx)(O.IconBadge, {
                                            disableColor: !0,
                                            icon: I.default,
                                            style: W,
                                            className: r(z.stepStatus, z.completed)
                                        }), (0, s.jsxs)("div", {
                                            className: z.step,
                                            children: [(0, s.jsx)(f.Text, {
                                                variant: "text-md/medium",
                                                color: e.isDone ? "header-secondary" : "header-primary",
                                                className: z.stepName,
                                                children: e.name
                                            }), (0, s.jsx)(f.Text, {
                                                variant: "text-sm/normal",
                                                color: "header-secondary",
                                                className: z.stepDescription,
                                                children: e.description
                                            }), e.children]
                                        }), (0, s.jsx)(j.default, {
                                            width: 12,
                                            className: z.stepStatus
                                        })]
                                    }, "onboard-step-".concat(e.index)))
                                })
                            }) : null)]
                        })
                    }) : null)
                }) : t ? null : (0, s.jsx)(H.default, {
                    channelName: a.name,
                    guildId: a.guild_id,
                    tagFilter: i,
                    channel: a
                })
            }
        },
        729608: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return x
                }
            });
            var s = a("37983"),
                n = a("884691"),
                l = a("77078"),
                r = a("300322"),
                i = a("660074"),
                o = a("543289"),
                u = a("772280"),
                d = a("659500"),
                c = a("680986"),
                m = a("867965"),
                h = a("49111"),
                f = a("782340"),
                g = a("731808");

            function x(e) {
                let {
                    channelName: t,
                    guildId: x,
                    tagFilter: C,
                    channel: _
                } = e, T = (0, c.useCanManageChannel)(_), S = (0, r.useCanStartThread)(_), N = _.isMediaChannel(), p = n.useCallback(() => {
                    (0, m.trackForumUpsellModalViewed)(), (0, l.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await a.el("135430").then(a.bind(a, "135430"));
                        return t => (0, s.jsx)(e, {
                            ...t,
                            guildId: x
                        })
                    })
                }, [x]), E = C.size > 0, M = S || T, A = !E && T && !N, v = n.useCallback(() => A ? p() : S ? void d.ComponentDispatch.dispatch(h.ComponentActions.FOCUS_COMPOSER_TITLE) : (0, h.NOOP_NULL)(), [p, A, S]);
                return (0, s.jsxs)("div", {
                    className: g.container,
                    children: [(0, s.jsxs)("div", {
                        className: g.iconContainer,
                        children: [(0, s.jsx)("div", {
                            className: g.icon,
                            children: (0, s.jsx)(i.default, {
                                width: 30,
                                height: 30
                            })
                        }), (0, s.jsx)(o.default, {
                            className: g.stars
                        })]
                    }), (0, s.jsx)(l.Heading, {
                        className: g.header,
                        variant: "heading-md/semibold",
                        children: E ? f.default.Messages.FORUM_NO_POST_WITH_TAG_TITLE.format({
                            numTags: C.size
                        }) : f.default.Messages.FORUM_EMPTY_STATE_TITLE
                    }), (0, s.jsx)(l.Text, {
                        color: "header-secondary",
                        variant: "text-sm/normal",
                        children: E ? f.default.Messages.FORUM_NO_POST_WITH_TAG_DESCRIPTION.format({
                            numTags: C.size
                        }) : f.default.Messages.FORUM_EMPTY_STATE_DESCRIPTION.format({
                            channelName: t
                        })
                    }), M && (0, s.jsxs)(l.Button, {
                        look: l.Button.Looks.BLANK,
                        size: l.Button.Sizes.MIN,
                        color: l.Button.Colors.GREEN,
                        onClick: v,
                        className: g.cta,
                        innerClassName: g.button,
                        children: [A ? f.default.Messages.FORUM_EMPTY_STATE_CTA : f.default.Messages.FORUM_EMPTY_STATE_CREATE_POST_CTA, (0, s.jsx)(u.default, {
                            width: 12
                        })]
                    })]
                })
            }
        },
        912066: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return E
                }
            });
            var s = a("37983"),
                n = a("884691"),
                l = a("414456"),
                r = a.n(l),
                i = a("301165"),
                o = a("446674"),
                u = a("77078"),
                d = a("18054"),
                c = a("206230"),
                m = a("367376"),
                h = a("213523"),
                f = a("945330"),
                g = a("673078"),
                x = a("987772"),
                C = a("680986"),
                _ = a("578198"),
                T = a("49111"),
                S = a("782340"),
                N = a("743344"),
                p = a("632215"),
                E = n.memo(function(e) {
                    let {
                        channel: t,
                        onChange: l
                    } = e, E = (0, _.useForumPostComposerStoreApi)(), {
                        guidelinesOpen: M
                    } = (0, _.useForumPostComposerStore)(e => {
                        let {
                            guidelinesOpen: t
                        } = e;
                        return {
                            guidelinesOpen: t
                        }
                    }), A = (0, C.useCanManageChannel)(t), [v, I] = n.useState(!1), j = n.useCallback(e => {
                        if (null == e) return;
                        let t = e.clientHeight >= 220;
                        t !== v && I(t)
                    }, [v]);
                    n.useLayoutEffect(() => {
                        setTimeout(l, 350)
                    }, [M, l]);
                    let R = (0, o.useStateFromStores)([c.default], () => c.default.useReducedMotion),
                        [O, L] = n.useState(!M),
                        F = (0, i.useSpring)({
                            opacity: M ? 1 : 0,
                            maxHeight: M ? 500 : 0,
                            config: {
                                duration: 300
                            },
                            immediate: R,
                            onRest: () => L(!M)
                        }),
                        b = null != t.topic && t.topic.length > 0;
                    return b ? (0, s.jsx)(i.animated.div, {
                        style: F,
                        className: O ? N.hiddenVisually : void 0,
                        children: (0, s.jsxs)("div", {
                            className: N.container,
                            children: [(0, s.jsxs)("div", {
                                className: N.headerContainer,
                                children: [(0, s.jsxs)(u.Heading, {
                                    variant: "heading-lg/semibold",
                                    className: N.guidelinesHeader,
                                    children: [(0, s.jsx)(h.default, {
                                        width: 20,
                                        height: 20
                                    }), S.default.Messages.FORUM_POST_GUIDELINES_TITLE, A && (0, s.jsx)(u.Clickable, {
                                        onClick: () => {
                                            d.default.open(t.id, void 0, T.ChannelSettingsSubsections.TOPIC)
                                        },
                                        tag: "span",
                                        className: N.clickable,
                                        children: (0, s.jsx)(x.default, {
                                            width: 16,
                                            height: 16
                                        })
                                    })]
                                }), (0, s.jsx)(u.Clickable, {
                                    "aria-label": S.default.Messages.CLOSE,
                                    className: N.clickable,
                                    onClick: () => {
                                        E.getState().setGuidelinesOpen(!1)
                                    },
                                    children: (0, s.jsx)(f.default, {
                                        width: 16,
                                        height: 16
                                    })
                                })]
                            }), (0, s.jsxs)("div", {
                                className: N.descriptionContainer,
                                children: [(0, s.jsx)(u.Text, {
                                    selectable: !0,
                                    variant: "text-sm/normal",
                                    color: "header-secondary",
                                    style: {
                                        maxHeight: 220
                                    },
                                    className: r(N.guidelines, p.markup),
                                    children: (0, s.jsx)("div", {
                                        ref: j,
                                        children: m.default.parseForumPostGuidelines(t.topic, !0, {
                                            channelId: t.id,
                                            allowHeading: !0,
                                            allowList: !0
                                        })
                                    })
                                }), v && (0, s.jsxs)("div", {
                                    className: N.showMore,
                                    children: [(0, s.jsx)("div", {
                                        className: N.gradient
                                    }), (0, s.jsx)("div", {
                                        className: N.linkContainer,
                                        children: (0, s.jsx)(u.Clickable, {
                                            className: N.showMoreLink,
                                            onClick: () => {
                                                (0, u.openModalLazy)(async () => {
                                                    let {
                                                        default: e
                                                    } = await a.el("553415").then(a.bind(a, "553415"));
                                                    return a => (0, s.jsx)(e, {
                                                        ...a,
                                                        channel: t
                                                    })
                                                })
                                            },
                                            children: (0, s.jsxs)(u.Text, {
                                                variant: "text-sm/semibold",
                                                color: "text-brand",
                                                className: N.showMoreText,
                                                children: [S.default.Messages.FORUM_CHANNEL_TOPIC_VIEW_ALL, (0, s.jsx)(g.default, {
                                                    className: N.showMoreIcon
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
        657927: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return T
                }
            });
            var s = a("37983");
            a("884691");
            var n = a("414456"),
                l = a.n(n),
                r = a("77078"),
                i = a("945330"),
                o = a("153769"),
                u = a("266926"),
                d = a("867965"),
                c = a("152637"),
                m = a("953371"),
                h = a("994428"),
                f = a("782340"),
                g = a("761953"),
                x = a("241558"),
                C = a("260177"),
                _ = a("714358");

            function T(e) {
                let {
                    onDismiss: t
                } = e;
                return (0, s.jsxs)(r.Clickable, {
                    onClick: () => {
                        open(m.COMMUNITY_PORTAL_FORUM_PAGE), (0, d.trackForumHelperCardClicked)({
                            readGuideCta: !0
                        })
                    },
                    className: l(C.container, x.container, g.mainCard),
                    children: [(0, s.jsxs)("div", {
                        className: x.inline,
                        children: [(0, s.jsxs)("div", {
                            className: x.author,
                            children: [(0, s.jsx)(o.default, {
                                className: x.discordIcon
                            }), (0, s.jsx)(r.Text, {
                                variant: "text-sm/semibold",
                                color: "header-primary",
                                children: f.default.Messages.DISCORD_NAME
                            }), (0, s.jsxs)("div", {
                                className: x.notice,
                                children: [(0, s.jsx)(u.default, {
                                    className: x.infoIcon
                                }), (0, s.jsx)(r.Text, {
                                    variant: "text-sm/normal",
                                    color: "header-secondary",
                                    children: f.default.Messages.FORUM_HELPER_CARD_NOTICE
                                })]
                            })]
                        }), (0, s.jsx)(r.Clickable, {
                            onClick: e => {
                                e.stopPropagation(), t(h.ContentDismissActionType.DISMISS), (0, d.trackForumHelperCardClicked)({
                                    readGuideCta: !1
                                })
                            },
                            children: (0, s.jsx)(i.default, {
                                className: x.closeIcon,
                                width: 16,
                                height: 16
                            })
                        })]
                    }), (0, s.jsx)("hr", {
                        className: x.separator
                    }), (0, s.jsxs)("div", {
                        className: x.inline,
                        children: [(0, s.jsxs)("div", {
                            children: [(0, s.jsx)(r.Heading, {
                                className: l(C.channelName, x.title),
                                variant: "heading-lg/semibold",
                                color: "header-primary",
                                children: f.default.Messages.FORUM_HELPER_CARD_TITLE
                            }), (0, s.jsx)(r.Text, {
                                variant: "text-sm/normal",
                                color: "header-secondary",
                                children: f.default.Messages.FORUM_HELPER_CARD_BODY
                            })]
                        }), (0, s.jsx)("img", {
                            src: _,
                            alt: f.default.Messages.FORUM_HELPER_CARD_ALT_TEXT,
                            width: c.MAX_THUMBNAIL_WIDTH,
                            height: c.MAX_THUMBNAIL_WIDTH
                        })]
                    })]
                })
            }
        },
        1999: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                ComposerUploadButton: function() {
                    return j
                },
                default: function() {
                    return O
                }
            });
            var s = a("37983"),
                n = a("884691"),
                l = a("627445"),
                r = a.n(l),
                i = a("301165"),
                o = a("446674"),
                u = a("77078"),
                d = a("371642"),
                c = a("206230"),
                m = a("850391"),
                h = a("271972"),
                f = a("761354"),
                g = a("42203"),
                x = a("474643"),
                C = a("585722"),
                _ = a("840817"),
                T = a("659500"),
                S = a("412861"),
                N = a("867965"),
                p = a("49111"),
                E = a("572228");
            let M = {
                    scale: .95,
                    opacity: 0
                },
                A = {
                    scale: 1,
                    opacity: 1
                },
                v = {
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
                    onClick: a,
                    onClose: l,
                    onMouseEnter: i
                } = e, c = n.useRef(null), m = (0, o.useStateFromStores)([g.default], () => g.default.getChannel(t), [t]);
                return r(null != m, "Forum Channel is null"), (0, s.jsxs)(u.Clickable, {
                    className: E.uploadInput,
                    onMouseEnter: i,
                    onClick: () => {
                        (0, N.trackForumChannelMediaUploaderClicked)({
                            isMobile: !1
                        }), null == a || a()
                    },
                    onKeyPress: e => {
                        if ("Enter" === e.key) {
                            var t;
                            null === (t = c.current) || void 0 === t || t.activateUploadDialogue(), (0, N.trackForumChannelMediaUploaderClicked)({
                                isMobile: !1
                            })
                        }
                    },
                    children: [(0, s.jsx)(d.default, {
                        className: E.fileInput,
                        ref: c,
                        onChange: e => {
                            null == l || l(), (0, S.promptToUpload)(e.currentTarget.files, m, x.DraftType.FirstThreadMessage, {
                                requireConfirm: !0
                            }), T.ComponentDispatch.dispatch(p.ComponentActions.TEXTAREA_FOCUS), e.currentTarget.value = null
                        },
                        multiple: m.rateLimitPerUser <= 0,
                        tabIndex: -1,
                        "aria-hidden": !0
                    }), (0, s.jsx)(_.default, {
                        width: 28,
                        height: 28,
                        className: E.uploadIcon
                    })]
                })
            }

            function R(e) {
                let {
                    channelId: t,
                    closePopout: a
                } = e, [l, r] = n.useState(!1), {
                    reducedMotion: d
                } = n.useContext(u.AccessibilityPreferencesContext), g = (0, i.useSpring)({
                    from: d.enabled ? A : M,
                    to: v,
                    config: I
                }), x = (0, o.useStateFromStores)([c.default], () => c.default.keyboardModeEnabled), _ = (0, o.useStateFromStores)([C.default], () => C.default.getUploads(t, m.ChatInputTypes.CREATE_FORUM_POST.drafts.type));
                return (0, s.jsx)(i.animated.div, {
                    className: E.popoutContainer,
                    onMouseLeave: () => {
                        !l && a()
                    },
                    style: g,
                    children: (0, s.jsxs)(u.ScrollerThin, {
                        orientation: "horizontal",
                        className: E.popout,
                        paddingFix: !1,
                        fade: !0,
                        children: [(0, s.jsx)(j, {
                            channelId: t,
                            onClick: () => {
                                r(!0)
                            },
                            onClose: () => {
                                r(!1), a()
                            }
                        }), (0, s.jsx)("div", {
                            className: E.uploads,
                            children: _.map(e => (0, s.jsx)(f.default, {
                                channelId: t,
                                draftType: m.ChatInputTypes.CREATE_FORUM_POST.drafts.type,
                                upload: e,
                                keyboardModeEnabled: x,
                                hideFileName: !0,
                                size: h.AttachmentListItemSizes.SMALL
                            }, e.id))
                        })]
                    })
                })
            }

            function O(e) {
                let {
                    channelId: t
                } = e, [a, l] = n.useState(!1), r = (0, o.useStateFromStores)([C.default], () => C.default.getUploads(t, m.ChatInputTypes.CREATE_FORUM_POST.drafts.type)), i = r.length, u = i > 0;
                n.useEffect(() => {
                    a && !u && l(!1)
                }, [a, u]);
                let d = () => {
                    u && l(!0)
                };
                return (0, s.jsxs)("div", {
                    className: E.container,
                    children: [u ? (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)(f.UploadIcon, {
                            upload: r[0],
                            size: h.AttachmentListItemSizes.SMALL,
                            onMouseEnter: d
                        }), !a && (0, s.jsx)("div", {
                            className: E.badge,
                            children: i
                        })]
                    }) : (0, s.jsx)(j, {
                        onMouseEnter: d,
                        channelId: t
                    }), a && (0, s.jsx)(R, {
                        channelId: t,
                        closePopout: () => {
                            l(!1)
                        }
                    })]
                })
            }
        },
        530474: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return ei
                }
            });
            var s = a("37983"),
                n = a("884691"),
                l = a("414456"),
                r = a.n(l),
                i = a("627445"),
                o = a.n(i),
                u = a("16470"),
                d = a("974667"),
                c = a("942367"),
                m = a("446674"),
                h = a("77078"),
                f = a("295426"),
                g = a("81594"),
                x = a("850391"),
                C = a("740483"),
                _ = a("681060"),
                T = a("830618"),
                S = a("939563"),
                N = a("236003"),
                p = a("549558"),
                E = a("884351"),
                M = a("328511"),
                A = a("467094"),
                v = a("24337"),
                I = a("967241"),
                j = a("517141"),
                R = a("474643"),
                O = a("957255"),
                L = a("401848"),
                F = a("585722"),
                b = a("697218"),
                y = a("837899"),
                P = a("213523"),
                D = a("381546"),
                U = a("660074"),
                w = a("987772"),
                H = a("229915"),
                k = a("547896"),
                B = a("378765"),
                G = a("718422"),
                V = a("412861"),
                z = a("119161"),
                W = a("404607"),
                K = a("706065"),
                Y = a("680986"),
                Z = a("867965"),
                X = a("532308"),
                q = a("1999"),
                Q = a("578198"),
                J = a("90625"),
                $ = a("337113"),
                ee = a("589455"),
                et = a("953371"),
                ea = a("49111"),
                es = a("724210"),
                en = a("782340"),
                el = a("842875");
            let er = x.ChatInputTypes.CREATE_FORUM_POST;

            function ei(e) {
                let {
                    parentChannel: t,
                    isSearchLoading: a,
                    onChange: l,
                    canCreatePost: i,
                    inputRef: o
                } = e, {
                    textAreaState: d,
                    formOpen: c
                } = (0, Q.useForumPostComposerStore)(e => {
                    let {
                        textAreaState: t,
                        formOpen: a
                    } = e;
                    return {
                        textAreaState: t,
                        formOpen: a
                    }
                }, u.default), [f, g] = n.useState(null), x = n.useContext(B.ComponentDispatchGroupContext), C = n.useCallback(() => {
                    x.bumpDispatchPriority()
                }, [x]), _ = (0, m.useStateFromStores)([O.default], () => O.default.can(ea.Permissions.ATTACH_FILES, t)), T = (0, m.useStateFromStoresArray)([F.default], () => F.default.getUploads(t.id, R.DraftType.FirstThreadMessage)), S = c && _ && i, v = (null == t ? void 0 : t.isMediaChannel()) === !0, L = function(e, t) {
                    let a = (0, Q.useForumPostComposerStoreApi)(),
                        s = (0, Y.useChannelTemplate)(e),
                        l = n.useCallback(() => {
                            let {
                                formOpen: n,
                                setFormOpenFromUserAction: l,
                                name: r,
                                textAreaState: i,
                                hasClickedForm: o
                            } = a.getState();
                            !n && (setTimeout(() => {
                                if (t.current instanceof h.TextAreaAutosize) {
                                    var e, a, s, n;
                                    null === (a = t.current) || void 0 === a || null === (e = a._textArea) || void 0 === e || e.setSelectionRange(r.length, r.length), null === (n = t.current) || void 0 === n || null === (s = n._textArea) || void 0 === s || s.focus()
                                }
                            }, 0), (o && r.length > 0 || i.textValue.trim().length > 0 && i.textValue.trim() !== s || F.default.getUploads(e.id, R.DraftType.FirstThreadMessage).length > 0) && l())
                        }, [a, e.id, s, t]);
                    return l
                }(t, o), b = function(e) {
                    let {
                        formOpen: t
                    } = (0, Q.useForumPostComposerStore)(e => {
                        let {
                            formOpen: t
                        } = e;
                        return {
                            formOpen: t
                        }
                    }, u.default), a = (0, Q.useForumPostComposerStoreApi)(), s = (0, j.useCreateForumPost)({
                        parentChannel: e
                    });
                    n.useEffect(() => {
                        let {
                            setNameError: e,
                            setMessageError: t
                        } = a.getState();
                        e(null), t(null)
                    }, [t, a]);
                    let l = n.useCallback((t, s, n) => {
                        let {
                            name: l,
                            textAreaState: r
                        } = a.getState();
                        null == t && (t = r.textValue), t = t.trim();
                        let {
                            content: i
                        } = E.default.parse(e, t);
                        if (t = i, null == s || 0 === s.length) {
                            var o;
                            s = null === (o = M.default.getStickerPreview(e.id, er.drafts.type)) || void 0 === o ? void 0 : o.map(e => e.id)
                        }
                        if ((null == n || 0 === n.length) && (n = F.default.getUploads(e.id, R.DraftType.FirstThreadMessage)), null != n && n.length > 0 && e.isMediaChannel()) {
                            let e = n.findIndex(e => !0 === e.isThumbnail);
                            if (e > -1) {
                                let t = n[e];
                                n.splice(e, 1), n.unshift(t)
                            }
                        }
                        let u = 0 === l.length,
                            d = (null == t || 0 === t.length) && (null == s || 0 === s.length) && 0 === n.length;
                        return {
                            content: t,
                            stickers: s,
                            uploads: n,
                            hasNameError: u,
                            hasMessageError: d
                        }
                    }, [e, a]);
                    return n.useCallback(async (t, n, r) => {
                        let {
                            setNameError: i,
                            setMessageError: o,
                            setSubmitting: u,
                            resetFormState: d,
                            formOpen: c,
                            setFormOpen: m,
                            setFormOpenFromUserAction: h,
                            setGuidelinesOpen: f
                        } = a.getState(), g = K.default.hasSeen(e.id);
                        if (!c) return (0, Z.trackForumCreateNewPostClick)({
                            guildId: e.guild_id,
                            channelId: e.id
                        }), !g && a.getState().setGuidelinesOpen(!0), h(), {
                            shouldClear: !1,
                            shouldRefocus: !1
                        };
                        let {
                            content: x,
                            stickers: C,
                            uploads: _,
                            hasNameError: T,
                            hasMessageError: S
                        } = l(t, n, r);
                        if (i(T ? (0, z.makeEmptyTitleError)() : null), o(S ? (0, z.makeEmptyMessageError)() : null), T || S) return {
                            shouldClear: !1,
                            shouldRefocus: !0
                        };
                        try {
                            u(!0);
                            let {
                                valid: t
                            } = await (0, G.applyChatRestrictions)({
                                content: x,
                                stickers: C,
                                uploads: _,
                                type: er,
                                channel: e
                            });
                            if (!t) return {
                                shouldClear: !1,
                                shouldRefocus: !0
                            };
                            let a = await s(x, C, _);
                            return (0, I.openThreadSidebarForViewing)(a), W.default.resort(e.id), (0, A.clearStickerPreview)(e.id, er.drafts.type), d(), m(!1), K.default.markAsSeen(e.id), f(!1), {
                                shouldClear: !0,
                                shouldRefocus: !1
                            }
                        } catch (t) {
                            var N, p;
                            return (null === (N = t.body) || void 0 === N ? void 0 : N.code) === ea.AbortCodes.AUTOMOD_TITLE_BLOCKED ? i((0, z.makeAutomodViolationError)(t.body, e)) : (null === (p = t.body) || void 0 === p ? void 0 : p.code) === ea.AbortCodes.AUTOMOD_MESSAGE_BLOCKED && o((0, z.makeAutomodViolationError)(t.body, e)), {
                                shouldClear: !1,
                                shouldRefocus: !0
                            }
                        } finally {
                            u(!1)
                        }
                    }, [s, l, e, a])
                }(t);
                return n.useLayoutEffect(l, [c, d, T, l]), (0, s.jsx)(s.Fragment, {
                    children: (0, s.jsx)("div", {
                        "aria-label": i ? en.default.Messages.NEW_FORUM_POST : en.default.Messages.SEARCH,
                        className: r(el.container, {
                            [el.collapsed]: !c
                        }),
                        onClick: !c && i ? L : void 0,
                        children: (0, s.jsxs)("form", {
                            onMouseDown: C,
                            onFocus: C,
                            onSubmit: e => {
                                e.preventDefault(), i && b()
                            },
                            children: [(0, s.jsxs)("div", {
                                className: el.formContainer,
                                children: [(0, s.jsxs)("div", {
                                    className: el.form,
                                    children: [(0, s.jsx)(eo, {
                                        editorRef: f,
                                        parentChannel: t,
                                        isSearchLoading: a,
                                        inputRef: o,
                                        canCreatePost: i
                                    }), c && (0, s.jsx)(ed, {
                                        editorRef: f,
                                        setEditorRef: g,
                                        parentChannel: t,
                                        submit: b,
                                        disabled: !i
                                    })]
                                }), S && (v ? (0, s.jsx)(p.MediaPostThumbnail, {
                                    parentChannel: t
                                }) : (0, s.jsx)(q.default, {
                                    channelId: t.id
                                }))]
                            }), (0, s.jsxs)("div", {
                                className: el.form,
                                children: [S && v && (0, s.jsx)(N.default, {
                                    parentChannel: t
                                }), c && (0, s.jsx)(ec, {
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
                    isSearchLoading: a,
                    inputRef: l,
                    canCreatePost: r,
                    editorRef: i
                } = e, {
                    formOpen: d,
                    nameError: c,
                    name: x,
                    textAreaState: C,
                    hasClickedForm: _,
                    submitting: T
                } = (0, Q.useForumPostComposerStore)(e => {
                    let {
                        formOpen: t,
                        nameError: a,
                        name: s,
                        textAreaState: n,
                        hasClickedForm: l,
                        submitting: r
                    } = e;
                    return {
                        formOpen: t,
                        nameError: a,
                        name: s,
                        textAreaState: n,
                        hasClickedForm: l,
                        submitting: r
                    }
                }, u.default), S = (0, Q.useForumPostComposerStoreApi)(), N = null != t.topic && 0 !== t.topic.length, p = K.default.hasSeen(t.id), E = (0, Y.useChannelTemplate)(t), M = (0, m.useStateFromStores)([b.default], () => b.default.getCurrentUser());
                o(null != M, "current user cannot be null");
                (0, B.useComponentAction)({
                    event: ea.ComponentActions.FOCUS_COMPOSER_TITLE,
                    handler: () => {
                        var e;
                        let t = l.current instanceof h.TextAreaAutosize ? null === (e = l.current) || void 0 === e ? void 0 : e._textArea : l.current;
                        null == t || t.focus(), S.getState().setTitleFocused(!0), S.getState().setFormOpen(!0), S.getState().setHasClickedForm(!0)
                    }
                });
                let A = n.useCallback(() => {
                        var e;
                        S.getState().resetFormState(), f.default.clearDraft(t.id, R.DraftType.ThreadSettings), f.default.clearDraft(t.id, R.DraftType.FirstThreadMessage), g.default.clearAll(t.id, R.DraftType.FirstThreadMessage), S.getState().setFormOpen(!1), S.getState().setBodyFocused(!1), S.getState().setTitleFocused(!1), S.getState().setHasClickedForm(!1), null === (e = l.current) || void 0 === e || e.blur(), (0, Z.trackForumNewPostCleared)({
                            guildId: t.guild_id,
                            channelId: t.id
                        })
                    }, [S, t.id, t.guild_id, l]),
                    I = n.useMemo(() => a && !d ? (0, s.jsx)(eg, {}) : a || d || 0 !== C.textValue.trim().length && C.textValue.trim() !== E ? !d && (x.trim().length > 0 || C.textValue.trim().length > 0 && C.textValue.trim() !== E || F.default.getUploads(t.id, R.DraftType.FirstThreadMessage).length > 0) && _ ? (0, s.jsx)(w.default, {
                        className: el.pencilIcon,
                        width: 24,
                        height: 24
                    }) : T ? (0, s.jsx)(D.default, {
                        className: el.closeIconDisabled,
                        width: 24,
                        height: 24
                    }) : (0, s.jsx)(h.Tooltip, {
                        text: en.default.Messages.FORUM_CLEAR_ALL,
                        children: e => (0, s.jsx)(h.Clickable, {
                            ...e,
                            onClick: A,
                            children: (0, s.jsx)(D.default, {
                                className: el.closeIcon,
                                width: 24,
                                height: 24
                            })
                        })
                    }) : (0, s.jsx)(H.default, {
                        className: el.searchIcon,
                        width: 24,
                        height: 24
                    }), [a, d, _, x, C.textValue, A, t.id, E, T]),
                    j = n.useCallback(e => {
                        let a = e.clipboardData.files[0];
                        null != a && a.type.startsWith("image/") && (e.preventDefault(), (0, V.promptToUpload)([a], t, R.DraftType.FirstThreadMessage), S.getState().setFormOpenFromUserAction())
                    }, [t, S]),
                    O = (0, z.renderError)(c, {
                        content: x
                    });
                return (0, s.jsxs)("div", {
                    className: el.titleContainer,
                    onPaste: j,
                    children: [(0, s.jsx)("div", {
                        className: el.prefixElement,
                        children: I
                    }), (0, s.jsx)(h.TextArea, {
                        value: x,
                        placeholder: r ? d || C.textValue.length > 0 && C.textValue.trim() !== E ? en.default.Messages.FORUM_POST_TITLE_PLACEHOLDER_FOCUSED : en.default.Messages.FORUM_POST_TITLE_PLACEHOLDER_SEARCH : en.default.Messages.SEARCH,
                        flex: !0,
                        autosize: d,
                        rows: 1,
                        showCharacterCount: !1,
                        showRemainingCharacterCount: !1,
                        maxLength: ea.MAX_CHANNEL_NAME_LENGTH,
                        onChange: e => {
                            let a = (0, v.default)(e, !1);
                            S.getState().setName(a);
                            let s = 0 === a.trim().length,
                                n = 0 === C.textValue.trim().length,
                                l = C.textValue.trim() === E;
                            s && (n || l) && S.getState().setHasClickedForm(!1), !d && W.default.updateForumSearchQuery(t.id, a)
                        },
                        onFocus: () => {
                            S.getState().setTitleFocused(!0), S.getState().setBodyFocused(!1)
                        },
                        onBlur: () => {
                            S.getState().setTitleFocused(!1);
                            let e = (0, v.default)(x, !0);
                            e !== x && (S.getState().setName(e), !d && W.default.updateForumSearchQuery(t.id, e))
                        },
                        onKeyDown: e => {
                            var a, s;
                            "Enter" === e.key && (e.preventDefault(), e.stopPropagation(), d && x.length > 0 ? null == i || i.focus() : r && e.shiftKey && ((0, Z.trackForumCreateNewPostKeybindUsed)({
                                guildId: t.guild_id,
                                channelId: t.id
                            }), N && !p && S.getState().setGuidelinesOpen(!0), S.getState().setFormOpenFromUserAction(), x.trim().length > 0 && (S.getState().setBodyFocused(!0), null == i || i.focus())));
                            let n = l.current instanceof h.TextAreaAutosize ? null === (a = l.current) || void 0 === a ? void 0 : a._textArea : l.current;
                            if ("Home" === e.key || "End" === e.key) {
                                if (null == n) return;
                                if (e.preventDefault(), e.stopPropagation(), "Home" === e.key) n.setSelectionRange(0, 0);
                                else {
                                    let e = x.length;
                                    n.setSelectionRange(e, e)
                                }
                            }
                            "Escape" === e.key && !S.getState().submitting && (null === (s = l.current) || void 0 === s || s.blur(), S.getState().setFormOpen(!1), S.getState().setTitleFocused(!1), S.getState().setBodyFocused(!1))
                        },
                        error: O,
                        className: el.title,
                        inputRef: l
                    }), d ? null : (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)(eu, {
                            parentChannel: t
                        }), (0, s.jsx)(em, {
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
                    guidelinesOpen: a
                } = (0, Q.useForumPostComposerStore)(e => {
                    let {
                        guidelinesOpen: t
                    } = e;
                    return {
                        guidelinesOpen: t
                    }
                }), n = (0, Q.useForumPostComposerStoreApi)(), l = null != t.topic && 0 !== t.topic.length, i = () => {
                    n.getState().setGuidelinesOpen(!a)
                };
                return l ? (0, s.jsx)(h.Tooltip, {
                    text: en.default.Messages.FORUM_POST_GUIDELINES_TITLE,
                    children: e => (0, s.jsx)(h.Clickable, {
                        ...e,
                        onClick: i,
                        className: r(el.guidelinesButton, {
                            [el.guidelinesOpen]: a
                        }),
                        children: (0, s.jsx)(P.default, {
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
                        submit: a,
                        disabled: l = !1,
                        editorRef: i,
                        setEditorRef: d
                    } = e, c = (0, m.useStateFromStores)([b.default], () => b.default.getCurrentUser());
                    o(null != c, "current user cannot be null");
                    let {
                        messageError: f,
                        textAreaState: g,
                        bodyFocused: x,
                        formOpen: C
                    } = (0, Q.useForumPostComposerStore)(e => {
                        let {
                            messageError: t,
                            textAreaState: a,
                            bodyFocused: s,
                            formOpen: n
                        } = e;
                        return {
                            messageError: t,
                            textAreaState: a,
                            bodyFocused: s,
                            formOpen: n
                        }
                    }, u.default), T = (0, Q.useForumPostComposerStoreApi)();
                    n.useEffect(() => () => (0, Z.maybeTrackForumNewPostDraftCreated)({
                        guildId: t.guild_id,
                        channelId: t.id
                    }), [t.guild_id, t.id]);
                    let N = n.useCallback(() => {
                            T.getState().setBodyFocused(!0)
                        }, [T]),
                        p = n.useCallback(() => {
                            T.getState().setBodyFocused(!1)
                        }, [T]),
                        E = n.useCallback((e, t, a) => {
                            let {
                                setTextAreaState: s
                            } = T.getState();
                            s({
                                textValue: t,
                                richValue: a
                            })
                        }, [T]),
                        M = n.useCallback(e => {
                            let {
                                value: t,
                                uploads: s,
                                stickers: n
                            } = e;
                            return a(t, n, s)
                        }, [a]);
                    (0, B.useComponentAction)({
                        event: ea.ComponentActions.TEXTAREA_FOCUS,
                        handler: N
                    }), (0, B.useComponentAction)({
                        event: ea.ComponentActions.TEXTAREA_BLUR,
                        handler: p
                    });
                    let A = (0, z.renderError)(f, {
                        content: g.textValue
                    });
                    return (0, s.jsx)("div", {
                        className: el.bodyContainer,
                        children: (0, s.jsxs)("div", {
                            className: el.contentContainer,
                            children: [(0, s.jsx)("div", {
                                onClick: N,
                                children: (0, s.jsx)(_.default, {
                                    type: er,
                                    setEditorRef: d,
                                    channel: t,
                                    placeholder: en.default.Messages.FORUM_POST_MESSAGE_PLACEHOLDER,
                                    textValue: g.textValue,
                                    richValue: g.richValue,
                                    focused: x,
                                    className: el.channelTextArea,
                                    innerClassName: r(el.channelTextAreaInner, {
                                        [el.channelTextAreaInnerError]: null != A
                                    }),
                                    onChange: E,
                                    onSubmit: M,
                                    promptToUpload: V.promptToUpload,
                                    disabled: l,
                                    onKeyDown: e => {
                                        if (("ArrowUp" === e.key || "ArrowDown" === e.key) && e.stopPropagation(), "Home" === e.key || "End" === e.key) {
                                            if (null == i) return;
                                            e.preventDefault(), e.stopPropagation();
                                            let t = i.getSlateEditor();
                                            if (null == t) return;
                                            "Home" === e.key ? S.SlateTransforms.resetSelectionToStart(t) : S.SlateTransforms.resetSelectionToEnd(t)
                                        }
                                        if (C && "Escape" === e.key && !T.getState().submitting) null == i || i.blur(), T.getState().setFormOpen(!1), T.getState().setTitleFocused(!1), T.getState().setBodyFocused(!1)
                                    },
                                    autoCompletePosition: "bottom"
                                })
                            }), (0, s.jsx)(h.InputError, {
                                error: A
                            })]
                        })
                    })
                }),
                ec = n.memo(function(e) {
                    let {
                        parentChannel: t,
                        canCreatePost: a,
                        className: l
                    } = e, {
                        textAreaState: r,
                        appliedTags: i,
                        name: o
                    } = (0, Q.useForumPostComposerStore)(e => {
                        let {
                            textAreaState: t,
                            appliedTags: a,
                            name: s
                        } = e;
                        return {
                            textAreaState: t,
                            appliedTags: a,
                            name: s
                        }
                    }), {
                        rateLimitPerUser: u
                    } = t, d = u > 0, c = (0, m.useStateFromStores)([L.default], () => L.default.getSlowmodeCooldownGuess(t.id, L.SlowmodeType.CreateThread)), f = (0, m.useStateFromStores)([O.default], () => O.default.can(ea.Permissions.MANAGE_THREADS, t) || O.default.can(ea.Permissions.MANAGE_CHANNELS, t)), g = t.hasFlag(es.ChannelFlags.REQUIRE_TAG) && 0 === i.size && o.length > 0 && r.textValue.length > 0, x = (0, Q.useForumPostComposerStoreApi)(), _ = n.useCallback(() => {
                        x.getState().setBodyFocused(!1)
                    }, [x]);
                    return (0, s.jsxs)("div", {
                        className: l,
                        children: [(0, s.jsx)(ef, {
                            parentChannel: t
                        }), (0, s.jsx)("div", {
                            className: el.tagsDivider
                        }), (0, s.jsxs)("div", {
                            className: el.controlsContainer,
                            children: [(0, s.jsxs)("div", {
                                className: el.controls,
                                children: [(0, s.jsxs)("div", {
                                    className: el.wrappedControls,
                                    children: [g && (0, s.jsx)(h.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-danger",
                                        children: en.default.Messages.FORUM_POST_TAG_REQUIRED_ERROR
                                    }), (0, s.jsx)(T.default, {
                                        type: er,
                                        textValue: r.textValue,
                                        className: el.characterCount
                                    }), d && (0, s.jsx)($.default, {
                                        rateLimitPerUser: u,
                                        slowmodeCooldownGuess: c,
                                        isBypassSlowmode: f,
                                        leadingIcon: !0
                                    })]
                                }), (0, s.jsx)(eu, {
                                    parentChannel: t
                                }), (0, s.jsx)(em, {
                                    parentChannel: t,
                                    disableIfInvalid: !0,
                                    canCreatePost: a,
                                    disabled: d && !f && c > 0
                                })]
                            }), (0, s.jsx)(C.default, {
                                type: er,
                                className: el.expressionPicker,
                                onClick: _
                            }, "expression")]
                        })]
                    })
                });

            function em(e) {
                let {
                    parentChannel: t,
                    canCreatePost: a,
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
                        textAreaState: a,
                        name: s,
                        appliedTags: n,
                        formOpen: l
                    } = e;
                    return {
                        submitting: t,
                        textAreaState: a,
                        name: s,
                        appliedTags: n,
                        formOpen: l
                    }
                }), c = t.hasFlag(es.ChannelFlags.REQUIRE_TAG) && 0 === u.size && o.length > 0 && i.textValue.length > 0, f = (0, m.useStateFromStoresArray)([F.default], () => F.default.getUploads(t.id, R.DraftType.FirstThreadMessage)), g = i.textValue.trim().length > 0 || f.length > 0, x = !c && g && o.trim().length > 0;
                if (__OVERLAY__) return null;
                let C = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return (0, s.jsxs)(h.Button, {
                        ...e,
                        size: h.Button.Sizes.SMALL,
                        className: el.submitButton,
                        innerClassName: el.submitButtonInner,
                        type: "submit",
                        submitting: r,
                        disabled: l && !x || n || !a,
                        children: [(0, s.jsx)(U.default, {
                            className: el.submitIcon,
                            width: 16,
                            height: 16
                        }), (0, s.jsx)(h.Text, {
                            variant: "text-md/semibold",
                            color: "none",
                            children: d ? en.default.Messages.SUBMIT_POST : en.default.Messages.NEW_FORUM_POST_NEW
                        })]
                    })
                };
                return a ? C() : (0, s.jsx)(h.Tooltip, {
                    text: en.default.Messages.FORUM_NO_POST_PERMISSION_HELP,
                    children: e => C(e)
                })
            }

            function eh() {
                return Promise.resolve()
            }

            function ef(e) {
                let {
                    parentChannel: t
                } = e, {
                    appliedTags: a,
                    toggleAppliedTag: l,
                    setPopoutOpen: i
                } = (0, Q.useForumPostComposerStore)(e => {
                    let {
                        appliedTags: t,
                        toggleAppliedTag: a,
                        setPopoutOpen: s
                    } = e;
                    return {
                        appliedTags: t,
                        toggleAppliedTag: a,
                        setPopoutOpen: s
                    }
                }, u.default), o = a.size >= et.MAX_FORUM_POST_TAGS, m = (0, d.default)({
                    id: "".concat(t.id, "-post-form-tags-navigator"),
                    isEnabled: !0,
                    wrap: !0,
                    scrollToStart: eh,
                    scrollToEnd: eh,
                    orientation: c.Orientations.HORIZONTAL
                }), {
                    containerRef: f,
                    containerWidth: g
                } = (0, ee.default)(), x = n.useRef(null), [C, _] = n.useState(!0), T = (0, Y.useVisibleForumTags)(t), [S, N] = n.useState(0);
                return (n.useLayoutEffect(() => {
                    var e;
                    let t = x.current,
                        a = null == t ? void 0 : null === (e = t.children) || void 0 === e ? void 0 : e[0],
                        s = null == t || null == a || a.clientHeight > t.clientHeight;
                    if (s !== C && _(s), s && null != f.current && null != a && null != a.children) {
                        let {
                            left: e,
                            top: t
                        } = f.current.getBoundingClientRect(), s = 0;
                        for (let n of a.children) {
                            let {
                                right: a,
                                top: l,
                                height: r
                            } = n.getBoundingClientRect();
                            if (l - t > r) break;
                            a - e > s && (s = a - e)
                        }
                        N(s)
                    }
                }, [T, C, f, g]), 0 === T.length) ? null : (0, s.jsx)(s.Fragment, {
                    children: (0, s.jsxs)("div", {
                        className: el.tagsContainer,
                        ref: f,
                        children: [(0, s.jsx)(k.default, {
                            className: el.tagsIcon,
                            width: 16,
                            height: 16
                        }), (0, s.jsx)("div", {
                            className: el.tagList,
                            ref: x,
                            children: (0, s.jsx)(d.ListNavigatorProvider, {
                                navigator: m,
                                children: (0, s.jsx)(d.ListNavigatorContainer, {
                                    children: e => {
                                        let {
                                            ref: t,
                                            ...n
                                        } = e;
                                        return (0, s.jsx)("div", {
                                            className: el.tagListInner,
                                            ref: t,
                                            ...n,
                                            children: T.map(e => (0, s.jsx)(J.default, {
                                                ariaLabel: en.default.Messages.FORUM_TAG_A11Y_ADD_TAG.format({
                                                    tagName: e.name
                                                }),
                                                tag: e,
                                                onClick: o && !a.has(e.id) ? void 0 : () => l(e.id),
                                                disabled: !a.has(e.id) && a.size >= et.MAX_FORUM_POST_TAGS,
                                                selected: a.has(e.id),
                                                size: J.default.Sizes.SMALL
                                            }, e.id))
                                        })
                                    }
                                })
                            })
                        }), C && (0, s.jsx)(h.Popout, {
                            onRequestOpen: () => i(!0),
                            onRequestClose: () => i(!1),
                            renderPopout: e => {
                                let {
                                    closePopout: n
                                } = e;
                                return (0, s.jsx)(X.default, {
                                    parentChannel: t,
                                    appliedTags: a,
                                    maxTagsApplied: o,
                                    onSelectTag: l,
                                    onClose: n
                                })
                            },
                            position: "bottom",
                            align: "center",
                            children: e => (0, s.jsxs)(h.Button, {
                                ...e,
                                size: h.Button.Sizes.TINY,
                                className: el.tagsButton,
                                innerClassName: el.tagsButtonInner,
                                style: {
                                    left: S
                                },
                                look: h.Button.Looks.LINK,
                                "aria-label": en.default.Messages.ADD_TAG_FORUM_POST,
                                children: [en.default.Messages.FORUM_TAG_SEE_MORE_A11Y_LABEL, (0, s.jsx)(y.default, {
                                    width: 16
                                })]
                            })
                        }), (0, s.jsxs)(h.Button, {
                            size: h.Button.Sizes.TINY,
                            className: r(el.tagsButton, el.tagsButtonPlaceholder),
                            innerClassName: el.tagsButtonInner,
                            look: h.Button.Looks.LINK,
                            "aria-label": en.default.Messages.ADD_TAG_FORUM_POST,
                            children: [en.default.Messages.FORUM_TAG_SEE_MORE_A11Y_LABEL, (0, s.jsx)(y.default, {
                                width: 16
                            })]
                        })]
                    })
                })
            }

            function eg(e) {
                let {
                    style: t,
                    className: a
                } = e;
                return (0, s.jsx)("div", {
                    className: a,
                    style: t,
                    children: (0, s.jsx)("div", {
                        className: el.loader
                    })
                })
            }
        },
        592633: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return G
                }
            });
            var s = a("37983"),
                n = a("884691"),
                l = a("414456"),
                r = a.n(l),
                i = a("335710"),
                o = a("446674"),
                u = a("669491"),
                d = a("77078"),
                c = a("125667"),
                m = a("955735"),
                h = a("651693"),
                f = a("605160"),
                g = a("70845"),
                x = a("933629"),
                C = a("845579"),
                _ = a("982108"),
                T = a("42203"),
                S = a("957255"),
                N = a("594098"),
                p = a("887718"),
                E = a("95689"),
                M = a("132755"),
                A = a("497880"),
                v = a("956089"),
                I = a("680986"),
                j = a("612278"),
                R = a("791234"),
                O = a("512630"),
                L = a("152637"),
                F = a("363622"),
                b = a("855455"),
                y = a("136460"),
                P = a("601016"),
                D = a("485055"),
                U = a("390083"),
                w = a("953371"),
                H = a("49111"),
                k = a("782340"),
                B = a("507134"),
                G = n.memo(function(e) {
                    let {
                        id: t,
                        threadId: a,
                        goToThread: n,
                        overrideMedia: l,
                        className: r,
                        coords: i,
                        gridCoords: u,
                        gridSectionBoundaries: d,
                        observePostVisibilityAnalytics: c
                    } = e, m = (0, o.useStateFromStores)([T.default], () => T.default.getChannel(a));
                    return null == m ? null : (0, s.jsx)(V, {
                        id: t,
                        channel: m,
                        goToThread: n,
                        overrideMedia: l,
                        className: r,
                        coords: i,
                        gridCoords: u,
                        observePostVisibilityAnalytics: c,
                        gridSectionBoundaries: d
                    })
                });

            function V(e) {
                let {
                    id: t,
                    channel: a,
                    goToThread: l,
                    overrideMedia: c,
                    className: m,
                    coords: h,
                    gridCoords: f,
                    gridSectionBoundaries: x,
                    observePostVisibilityAnalytics: N
                } = e, p = (0, o.useStateFromStores)([T.default], () => T.default.getChannel(a.parent_id)), E = a.id, M = n.useRef(null), A = (0, o.useStateFromStores)([_.default], () => _.default.getCurrentSidebarChannelId(a.parent_id) === a.id), {
                    firstMessage: O,
                    loaded: b
                } = (0, j.useFirstForumPostMessage)(a), {
                    firstMedia: G
                } = (0, I.useForumPostFirstMessageMarkup)({
                    firstMessage: O,
                    formatInline: !1,
                    noStyleAndInteraction: !1
                }), {
                    messageCountText: V
                } = (0, I.useMessageCount)(a), {
                    isNew: W,
                    hasUnreads: K
                } = (0, I.useForumPostReadStates)(a), Z = n.useRef(null), {
                    handleLeftClick: q,
                    handleRightClick: Q
                } = (0, U.default)({
                    facepileRef: Z,
                    goToThread: l,
                    channel: a
                });
                n.useEffect(() => {
                    null == N || N(M.current, E)
                }, [N, E]);
                let J = (0, o.useStateFromStores)([S.default], () => S.default.can(H.Permissions.MANAGE_MESSAGES, a)),
                    $ = C.GifAutoPlay.useSetting(),
                    ee = C.RenderSpoilers.useSetting(),
                    et = (0, g.default)(ee, J),
                    ea = (0, R.useForumPostMediaThumbnail)(O, p, !1),
                    [es, en] = (0, F.getFrameDimensions)(h.width - 2 * F.IMAGE_PADDING),
                    el = (0, I.useLastActiveTimestamp)(a, i.ThreadSortOrder.CREATION_DATE, w.ForumTimestampFormats.POSTED_DURATION_AGO),
                    er = (0, L.useHighlightedChannelName)(a),
                    ei = (null == O ? void 0 : O.blocked) || null == (null != c ? c : G),
                    {
                        onFocus: eo,
                        ...eu
                    } = (0, D.useForumGridItem)({
                        id: t,
                        row: f.row,
                        column: f.column,
                        section: f.section,
                        boundaries: x
                    }),
                    ed = a.isMediaPost();
                return (0, s.jsxs)("li", {
                    ref: M,
                    onClick: q,
                    onFocus: eo,
                    onContextMenu: Q,
                    className: r(B.container, m, {
                        [B.isOpen]: A
                    }),
                    style: {
                        ...h
                    },
                    children: [(0, s.jsx)(d.Clickable, {
                        onClick: q,
                        focusProps: {
                            ringTarget: M
                        },
                        onContextMenu: Q,
                        "aria-label": k.default.Messages.FORUM_POST_ARIA_LABEL.format({
                            title: a.name,
                            count: V
                        }),
                        className: B.focusTarget,
                        ...eu
                    }), (0, s.jsxs)("div", {
                        className: B.header,
                        children: [(0, s.jsxs)("div", {
                            className: B.authorRow,
                            children: [(0, s.jsxs)("div", {
                                className: B.rowGroup,
                                children: [(0, s.jsx)(y.default, {
                                    channel: a,
                                    message: O
                                }), (0, s.jsx)(d.Text, {
                                    variant: "text-xs/normal",
                                    color: "header-secondary",
                                    className: B.postCreationTimestamp,
                                    children: el
                                })]
                            }), W ? (0, s.jsx)(v.TextBadge, {
                                className: r(B.newBadge),
                                color: u.default.unsafe_rawColors.BRAND_260.css,
                                text: k.default.Messages.NEW
                            }) : null]
                        }), (0, s.jsx)(d.HeadingLevel, {
                            children: (0, s.jsx)(d.Heading, {
                                variant: "heading-md/extrabold",
                                className: B.title,
                                color: K ? "header-primary" : "text-muted",
                                style: {
                                    width: "".concat(h.width - 2 * F.GRID_POST_CONTROLS_MARGIN, "px")
                                },
                                children: er
                            })
                        })]
                    }), (0, s.jsx)("div", {
                        className: B.postBody,
                        children: (0, s.jsx)(d.FocusBlock, {
                            children: ei ? (0, s.jsx)(X, {
                                channel: a,
                                firstMessage: O,
                                isFirstMessageLoaded: b,
                                containerWidth: h.width,
                                hasUnreads: K
                            }) : (0, s.jsxs)(s.Fragment, {
                                children: [(0, s.jsx)(Y, {
                                    mediaAttachments: ea,
                                    globalSpoilerRenderSetting: et,
                                    containerWidth: es,
                                    containerHeight: ed ? es * (9 / 16) : en,
                                    canAutoPlay: $,
                                    shouldMaintainAspectRatio: ed
                                }), (0, s.jsx)("div", {
                                    className: B.tagsRow,
                                    children: (0, s.jsx)(P.default, {
                                        channel: a,
                                        tagsClassName: B.tagPill
                                    })
                                })]
                            })
                        })
                    }), (0, s.jsx)("div", {
                        className: B.footer,
                        children: (0, s.jsx)(d.FocusBlock, {
                            children: (0, s.jsx)(z, {
                                channel: a,
                                firstMessage: O,
                                facepileRef: Z
                            })
                        })
                    })]
                })
            }

            function z(e) {
                let {
                    channel: t,
                    facepileRef: a,
                    firstMessage: n
                } = e, l = (0, I.useTypingUserIds)(t), r = (null == n ? void 0 : n.reactions) != null && n.reactions.length > 0;
                return (0, s.jsxs)("div", {
                    className: B.forumPostControls,
                    children: [(0, s.jsxs)("div", {
                        className: B.controlsGroup,
                        children: [(0, s.jsx)("div", {
                            className: B.messageCountContainer,
                            children: (0, s.jsx)(L.MessageCount, {
                                channel: t,
                                iconSize: 16,
                                showReadState: !0
                            })
                        }), l.length > 0 ? (0, s.jsxs)(s.Fragment, {
                            children: [(0, s.jsx)("span", {
                                className: B.bullet,
                                children: "•"
                            }), (0, s.jsxs)("div", {
                                className: B.typing,
                                children: [(0, s.jsx)(L.Facepile, {
                                    channel: t,
                                    userIds: l,
                                    facepileRef: a
                                }), (0, s.jsx)("div", {
                                    className: B.dots,
                                    children: (0, s.jsx)(d.Dots, {
                                        themed: !0,
                                        dotRadius: 2
                                    })
                                }), (0, s.jsx)(c.default, {
                                    channel: t,
                                    className: B.typingUsers,
                                    renderDots: !1
                                })]
                            })]
                        }) : null]
                    }), (0, s.jsxs)("div", {
                        className: B.controlsGroup,
                        children: [r || null == n ? null : (0, s.jsx)(L.DefaultReaction, {
                            firstMessage: n,
                            channel: t
                        }), null == n ? null : (0, s.jsx)(L.MostUsedReaction, {
                            firstMessage: n,
                            channel: t
                        })]
                    })]
                })
            }
            let W = e => e.preventDefault(),
                K = n.memo(function(e) {
                    return (0, s.jsx)(s.Fragment, {
                        children: (0, x.renderImageComponent)(e)
                    })
                }),
                Y = n.memo(function(e) {
                    let {
                        mediaAttachments: t,
                        globalSpoilerRenderSetting: a,
                        containerWidth: l,
                        containerHeight: i,
                        canAutoPlay: o,
                        shouldMaintainAspectRatio: u = !1
                    } = e, {
                        containsVideo: d,
                        containsGif: c
                    } = n.useMemo(() => (0, R.messageContainsGifOrVideo)(t), [t]), g = n.useMemo(() => t.slice(b.MOSAIC_MIN_INDEX, b.MOSAIC_MAX_INDEX), [t]), x = (0, b.useImageContainerStyles)({
                        numAttachments: g.length,
                        containerWidth: l,
                        containerHeight: i
                    }), C = (0, b.useImageDimensionStyles)({
                        imageContainerStyles: x,
                        containerWidth: l,
                        containerHeight: i
                    }), _ = n.useMemo(() => g.map((e, t) => {
                        var n;
                        let [l, i] = (0, f.getForumPostShouldObscure)(e, !a), g = (0, f.getObscuredAlt)(i), _ = {
                            ...C[t],
                            src: e.src,
                            width: e.width,
                            height: e.height,
                            alt: null != e.alt && l ? g : e.alt,
                            onClick: W,
                            shouldRenderAccessory: !c && !d
                        }, T = (0, h.isAnimatedImageUrl)(e.src) ? "".concat(e.src, "?format=png") : e.src, S = o && !l ? e.src : T;
                        return (0, s.jsxs)("div", {
                            className: B.bodyMediaFrame,
                            style: x[t],
                            children: [u ? (0, s.jsx)(m.default, {
                                ..._,
                                src: S,
                                backgroundSrc: T,
                                aspectRatio: _.maxWidth / _.maxHeight,
                                alt: null !== (n = _.alt) && void 0 !== n ? n : "",
                                className: r(B.mediaPostContainer, {
                                    [B.obscured]: l
                                }),
                                imageChildClassName: B.mediaPostThumbnail
                            }) : e.src.startsWith("data:") ? (0, s.jsx)(N.default, {
                                ..._,
                                className: B.mediaContainer,
                                imageClassName: r(B.thumbnailOverride, {
                                    [B.obscured]: l
                                })
                            }) : (0, s.jsx)(K, {
                                ..._,
                                autoPlay: o && !l,
                                containerClassName: B.mosaicMediaContainer,
                                imageClassName: r(B.imageCover, {
                                    [B.obscured]: l
                                }),
                                responsive: !0
                            }), l && (0, s.jsx)("div", {
                                className: B.obscuredTagContainer,
                                children: (0, s.jsx)(O.default, {
                                    obscureReason: i,
                                    iconClassname: B.obscuredTag
                                })
                            })]
                        }, e.src)
                    }), [o, c, d, a, x, C, g, u]);
                    return (0, s.jsxs)("div", {
                        className: B.bodyMedia,
                        style: {
                            width: l,
                            height: i
                        },
                        children: [(0, s.jsx)(s.Fragment, {
                            children: _
                        }), (c || d) && (0, s.jsxs)("div", {
                            className: B.mediaIconsRow,
                            children: [d && (0, s.jsx)(M.default, {
                                width: "22px",
                                height: "22px",
                                className: B.mediaIcon
                            }), c && (0, s.jsx)(p.default, {
                                className: B.mediaIcon
                            })]
                        }), t.length > b.MOSAIC_MAX_IMAGE_COUNT && (0, s.jsx)(Z, {
                            text: (t.length - (0, b.MOSAIC_MAX_IMAGE_COUNT)).toString(),
                            icon: E.default,
                            pillClassName: B.moreImagesPill,
                            iconClassName: B.moreImagesPillIcon,
                            textClassName: B.moreImagesPillText
                        })]
                    })
                });

            function Z(e) {
                let {
                    text: t,
                    icon: a,
                    pillClassName: n,
                    iconClassName: l,
                    textClassName: r
                } = e;
                return (0, s.jsxs)("div", {
                    className: n,
                    children: [(0, s.jsx)(a, {
                        className: l
                    }), (0, s.jsxs)(d.Text, {
                        variant: "text-xs/medium",
                        className: r,
                        children: ["+", t]
                    })]
                })
            }

            function X(e) {
                let {
                    channel: t,
                    firstMessage: a,
                    isFirstMessageLoaded: l,
                    containerWidth: i,
                    hasUnreads: o
                } = e, [u, c] = (0, F.getFrameDimensions)(i - 2 * F.IMAGE_PADDING), {
                    content: m
                } = (0, I.useForumPostFirstMessageMarkup)({
                    firstMessage: a,
                    formatInline: !1,
                    noStyleAndInteraction: !0
                }), {
                    shouldRenderTagsRow: h
                } = (0, P.useTagsRowHooks)({
                    channel: t,
                    isNew: !1
                }), f = n.useMemo(() => ({
                    width: u,
                    height: c
                }), [u, c]), g = o ? B.textContentUnread : B.textContentRead;
                return (0, s.jsx)(s.Fragment, {
                    children: (0, s.jsxs)("div", {
                        className: B.contentPreview,
                        style: f,
                        children: [(0, s.jsxs)("div", {
                            className: B.content,
                            children: [l && null == a && (0, s.jsx)(d.Text, {
                                variant: "text-sm/normal",
                                color: o ? "header-secondary" : "text-muted",
                                children: k.default.Messages.REPLY_QUOTE_MESSAGE_DELETED
                            }), l && null != a && (0, s.jsx)(A.default, {
                                message: a,
                                content: m,
                                className: g
                            })]
                        }), (0, s.jsx)("div", {
                            className: r(B.textContentFooter, {
                                [B.noTags]: !h
                            }),
                            children: h ? (0, s.jsx)(P.default, {
                                channel: t,
                                tagsClassName: B.tagPill,
                                className: B.row
                            }) : null
                        })]
                    })
                })
            }
        },
        968462: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
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
            var s = a("37983");
            a("884691");
            var n = a("687791");

            function l() {
                return (0, s.jsx)("div", {
                    className: n.bodyMedia
                })
            }

            function r() {
                return (0, s.jsxs)("div", {
                    className: n.content,
                    children: [(0, s.jsxs)("div", {
                        className: n.titleAndMessage,
                        children: [(0, s.jsxs)("div", {
                            className: n.header,
                            children: [(0, s.jsxs)("div", {
                                className: n.tags,
                                children: [(0, s.jsx)("div", {
                                    className: n.tag
                                }), (0, s.jsx)("div", {
                                    className: n.tag
                                }), (0, s.jsx)("div", {
                                    className: n.tag
                                })]
                            }), (0, s.jsx)("div", {
                                className: n.seperator
                            })]
                        }), (0, s.jsx)("div", {
                            className: n.time
                        }), (0, s.jsx)("div", {
                            className: n.title
                        }), (0, s.jsx)("div", {
                            className: n.firstMessage
                        })]
                    }), (0, s.jsxs)("div", {
                        className: n.engagement,
                        children: [(0, s.jsx)("div", {
                            className: n.reactions
                        }), (0, s.jsx)("div", {
                            className: n.replies
                        })]
                    })]
                })
            }

            function i() {
                return (0, s.jsx)("div", {
                    className: n.card,
                    children: (0, s.jsxs)("div", {
                        className: n.body,
                        children: [(0, s.jsx)(r, {}), (0, s.jsx)(l, {})]
                    })
                })
            }
        },
        823968: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return c
                }
            });
            var s = a("37983");
            a("884691");
            var n = a("482402"),
                l = a("335710"),
                r = a("77078"),
                i = a("339792"),
                o = a("867965"),
                u = a("782340"),
                d = a("517178");

            function c(e) {
                let {
                    channel: t,
                    closePopout: a
                } = e, {
                    sortOrder: c,
                    layoutType: m
                } = (0, i.useForumChannelStore)(t.id), h = (0, i.useForumChannelStoreApi)(), f = t.isMediaChannel(), g = e => {
                    (0, o.trackForumSortOrderUpdated)({
                        guildId: t.guild_id,
                        channelId: t.id,
                        sortOrder: e
                    }), h.getState().setSortOrder(t.id, e), a()
                }, x = e => {
                    (0, o.trackForumLayoutUpdated)({
                        guildId: t.guild_id,
                        channelId: t.id,
                        forumLayout: e
                    }), h.getState().setLayoutType(t.id, e), a()
                };
                return (0, s.jsx)("div", {
                    className: d.container,
                    children: (0, s.jsxs)(r.Menu, {
                        navId: "sort-and-view",
                        "aria-label": f ? u.default.Messages.MEDIA_CHANNEL_SORT_A11Y_LABEL : u.default.Messages.FORUM_SORT_AND_VIEW_AY11_LABEL,
                        hideScroller: !0,
                        onClose: a,
                        onSelect: a,
                        children: [(0, s.jsxs)(r.MenuGroup, {
                            label: u.default.Messages.FORUM_CHANNEL_SORT_BY,
                            children: [(0, s.jsx)(r.MenuRadioItem, {
                                id: "sort-by-recent-activity",
                                group: "sort-by",
                                label: u.default.Messages.FORUM_CHANNEL_SORT_BY_RECENTLY_ACTIVE,
                                action: () => g(l.ThreadSortOrder.LATEST_ACTIVITY),
                                checked: c === l.ThreadSortOrder.LATEST_ACTIVITY
                            }), (0, s.jsx)(r.MenuRadioItem, {
                                id: "sort-by-date-posted",
                                group: "sort-by",
                                label: u.default.Messages.FORUM_CHANNEL_SORT_BY_DATE_POSTED,
                                action: () => g(l.ThreadSortOrder.CREATION_DATE),
                                checked: c === l.ThreadSortOrder.CREATION_DATE
                            })]
                        }), !t.isMediaChannel() && (0, s.jsxs)(r.MenuGroup, {
                            label: u.default.Messages.FORUM_CHANNEL_VIEW_AS,
                            children: [(0, s.jsx)(r.MenuRadioItem, {
                                id: "view-as-list",
                                group: "view-as",
                                label: u.default.Messages.FORUM_CHANNEL_VIEW_AS_LIST,
                                action: () => x(n.ForumLayout.LIST),
                                checked: m === n.ForumLayout.LIST
                            }), (0, s.jsx)(r.MenuRadioItem, {
                                id: "view-as-grid",
                                group: "view-as",
                                label: u.default.Messages.FORUM_CHANNEL_VIEW_AS_GRID,
                                action: () => x(n.ForumLayout.GRID),
                                checked: m === n.ForumLayout.GRID
                            })]
                        }), (0, s.jsx)(r.MenuGroup, {
                            children: (0, s.jsx)(r.MenuItem, {
                                id: "reset-all",
                                className: d.clearText,
                                label: (0, s.jsx)(r.Text, {
                                    variant: "text-sm/medium",
                                    color: "none",
                                    children: u.default.Messages.FORUM_CHANNEL_RESET_ALL
                                }),
                                action: () => {
                                    g(t.getDefaultSortOrder()), x(t.getDefaultLayout())
                                }
                            })
                        })]
                    })
                })
            }
        },
        363622: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
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
            var s = a("627445"),
                n = a.n(s);
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
                        a = e / this.minWidth,
                        s = Math.max(Math.floor(t + (a - t) / 2), 1),
                        n = this.gap * (s - 1);
                    return {
                        columns: s,
                        columnWidth: (e - n) / s
                    }
                }
                constructor({
                    minWidth: e,
                    maxWidth: t,
                    gap: a
                }) {
                    n(e < t, "minWidth needs to be smaller than maxWidth"), this.minWidth = e, this.maxWidth = t, this.gap = a
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
        193695: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                DEFAULT_INCREASED_ACTIVITY_FORUM_POST_HEIGHT: function() {
                    return ej
                },
                default: function() {
                    return eL
                }
            });
            var s = a("37983"),
                n = a("884691"),
                l = a("414456"),
                r = a.n(l),
                i = a("627445"),
                o = a.n(i),
                u = a("866227"),
                d = a.n(u),
                c = a("974667"),
                m = a("335710"),
                h = a("249654"),
                f = a("446674"),
                g = a("669491"),
                x = a("77078"),
                C = a("125667"),
                _ = a("225664"),
                T = a("731898"),
                S = a("419135"),
                N = a("206230"),
                p = a("692171"),
                E = a("651693"),
                M = a("605160"),
                A = a("875978"),
                v = a("70845"),
                I = a("913491"),
                j = a("95045"),
                R = a("574073"),
                O = a("359132"),
                L = a("836943"),
                F = a("933629"),
                b = a("592707"),
                y = a("350134"),
                P = a("232259"),
                D = a("144491"),
                U = a("208021"),
                w = a("582713"),
                H = a("300322"),
                k = a("845579"),
                B = a("982108"),
                G = a("42203"),
                V = a("957255"),
                z = a("660478"),
                W = a("27618"),
                K = a("471671"),
                Y = a("738107"),
                Z = a("952368"),
                X = a("491605"),
                q = a("505684"),
                Q = a("109264"),
                J = a("566998"),
                $ = a("93427"),
                ee = a("956089"),
                et = a("888400"),
                ea = a("700097"),
                es = a("670902"),
                en = a("339792"),
                el = a("680986"),
                er = a("612278"),
                ei = a("791234"),
                eo = a("994810"),
                eu = a("867965"),
                ed = a("43836"),
                ec = a("512630"),
                em = a("152637"),
                eh = a("578198"),
                ef = a("968462"),
                eg = a("136460"),
                ex = a("601016"),
                eC = a("810758"),
                e_ = a("390083"),
                eT = a("49111"),
                eS = a("724210"),
                eN = a("648564"),
                ep = a("719347"),
                eE = a("782340"),
                eM = a("552175"),
                eA = a("590787"),
                ev = a("632215");
            let eI = 26,
                ej = 162 + eI,
                eR = async () => {
                    let {
                        default: e
                    } = await a.el("170206").then(a.t.bind(a, "170206", 19));
                    return e
                };

            function eO(e) {
                let {
                    shouldAnimate: t = !1
                } = e, a = (0, f.useStateFromStores)([N.default], () => N.default.useReducedMotion);
                return (0, s.jsxs)("div", {
                    className: eM.startTheConversation,
                    children: [(0, s.jsx)(X.default, {
                        importData: eR,
                        shouldAnimate: t && !a,
                        className: eM.wavingHand
                    }), (0, s.jsx)(x.Text, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: eE.default.Messages.FORUM_START_THE_CONVERSATION_HEADER
                    })]
                })
            }
            var eL = n.memo(function(e) {
                let {
                    className: t,
                    threadId: a,
                    goToThread: l,
                    observePostVisibilityAnalytics: i
                } = e, u = n.useRef(null), {
                    channel: d,
                    isOpen: m,
                    messageCount: h,
                    unreadCount: g,
                    firstMessage: C,
                    firstMessageLoaded: _,
                    firstMedia: S,
                    firstMediaIsEmbed: N
                } = function(e) {
                    let {
                        threadId: t
                    } = e, a = (0, f.useStateFromStores)([G.default], () => G.default.getChannel(t));
                    o(null != a, "the thread should not be null here, a store must have missed an update");
                    let s = (0, f.useStateFromStores)([B.default], () => B.default.getCurrentSidebarChannelId(a.parent_id) === a.id),
                        {
                            loaded: n,
                            firstMessage: l
                        } = (0, er.useFirstForumPostMessage)(a),
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
                        } = (0, el.useMessageCount)(a);
                    return {
                        channel: a,
                        isOpen: s,
                        messageCount: d,
                        unreadCount: c,
                        firstMessage: l,
                        firstMessageLoaded: n,
                        firstMedia: i,
                        firstMediaIsEmbed: u,
                        content: r
                    }
                }({
                    threadId: a
                }), p = (0, f.useStateFromStores)([G.default], () => G.default.getChannel(d.parent_id)), {
                    ref: E,
                    height: M
                } = (0, T.default)(), A = (0, eh.useForumPostComposerStore)(e => e.setCardHeight), [v, I] = n.useState(162);
                n.useEffect(() => {
                    null != M && (A(a, M + eI), I(M))
                }, [E, M, A, a, I, _]), n.useEffect(() => {
                    null == i || i(u.current, a)
                }, [i, a, _]);
                let j = n.useRef(null),
                    {
                        handleLeftClick: R,
                        handleRightClick: O
                    } = (0, e_.default)({
                        facepileRef: j,
                        goToThread: l,
                        channel: d
                    }),
                    {
                        role: L,
                        onFocus: F,
                        ...b
                    } = (0, c.useListItem)(a),
                    {
                        handleFocus: y,
                        handleBlur: P
                    } = (0, eC.default)(F);
                return (0, s.jsxs)("div", {
                    ref: u,
                    "data-item-id": a,
                    onClick: R,
                    onContextMenu: O,
                    className: r(eM.container, t, {
                        [eM.isOpen]: m
                    }),
                    children: [(0, s.jsx)(x.Clickable, {
                        onClick: R,
                        focusProps: {
                            ringTarget: u
                        },
                        onContextMenu: O,
                        "aria-label": eE.default.Messages.FORUM_POST_ARIA_LABEL.format({
                            title: d.name,
                            count: h
                        }),
                        className: eM.focusTarget,
                        onFocus: y,
                        onBlur: P,
                        ...b
                    }), (0, s.jsxs)("div", {
                        className: eM.body,
                        children: [(0, s.jsx)("div", {
                            ref: E,
                            className: eM.contentContainer,
                            children: _ ? (0, s.jsx)(eF, {
                                parentChannel: p,
                                channel: d,
                                firstMessage: C,
                                messageCount: h,
                                unreadCount: g,
                                facepileRef: j,
                                onClick: R
                            }) : (0, s.jsx)(ef.ForumPostContentPlaceholder, {})
                        }), _ ? (null == C ? void 0 : C.blocked) || null == S ? null : (0, s.jsx)(eG, {
                            channel: d,
                            firstMedia: S,
                            firstMessage: C,
                            isEmbed: N,
                            contentHeight: v
                        }) : (0, s.jsx)(ef.ForumPostMediaPreviewPlaceholder, {})]
                    })]
                })
            });

            function eF(e) {
                let {
                    parentChannel: t,
                    channel: a,
                    firstMessage: n,
                    messageCount: l,
                    unreadCount: r,
                    facepileRef: i,
                    onClick: o
                } = e, {
                    isNew: u
                } = (0, el.useForumPostReadStates)(a), {
                    forumPostContainsTags: d
                } = (0, ex.useTagsRowHooks)({
                    channel: a,
                    isNew: u
                });
                return (0, s.jsxs)("div", {
                    className: eM.content,
                    children: [(0, s.jsxs)("div", {
                        className: eM.titleAndMessage,
                        children: [d && (0, s.jsx)(ex.IncreasedActivityTagsRow, {
                            channel: a,
                            className: eM.tagsRow,
                            tagsClassName: eM.tags
                        }), d && (0, s.jsx)("hr", {
                            className: eM.separator
                        }), (0, s.jsx)(eB, {
                            channel: a,
                            firstMessage: n,
                            isNew: u,
                            containsTags: d
                        }), (0, s.jsx)(x.HeadingLevel, {
                            children: (0, s.jsx)(eD, {
                                channel: a,
                                onClick: o
                            })
                        }), null != n && (0, s.jsx)(eb, {
                            firstMessage: n
                        })]
                    }), (0, s.jsxs)("div", {
                        className: eM.engagement,
                        children: [null != n && (0, s.jsx)(ew, {
                            channel: a,
                            firstMessage: n
                        }), (0, s.jsx)(ey, {
                            parentChannel: t,
                            channel: a,
                            messageCount: l,
                            unreadCount: r,
                            facepileRef: i
                        })]
                    })]
                })
            }

            function eb(e) {
                let {
                    firstMessage: t
                } = e, a = (0, f.useStateFromStores)([W.default], () => null != t && W.default.isBlocked(t.author.id)), {
                    content: l
                } = n.useMemo(() => (null == t ? void 0 : t.content) != null && "" !== t.content ? (0, j.default)(t, {
                    formatInline: !0,
                    noStyleAndInteraction: !0,
                    allowHeading: !0,
                    allowList: !0
                }) : {
                    content: null
                }, [t]);
                return (0, s.jsx)(x.FocusBlock, {
                    "aria-hidden": !0,
                    className: eM.firstMessageContent,
                    children: a ? eE.default.Messages.FORUM_POST_BLOCKED_FIRST_MESSAGE : null == l ? eE.default.Messages.REPLY_QUOTE_MESSAGE_DELETED : l
                })
            }

            function ey(e) {
                let {
                    parentChannel: t,
                    channel: a,
                    messageCount: n,
                    unreadCount: l,
                    facepileRef: i
                } = e, o = (0, el.useTypingUserIds)(a), {
                    mostRecentMessage: u
                } = (0, er.useMostRecentForumMessage)(t, a), d = (0, f.useStateFromStores)([V.default], () => V.default.can(eT.Permissions.SEND_MESSAGES_IN_THREADS, a)), {
                    hasUnreads: c
                } = (0, el.useForumPostReadStates)(a), m = (0, f.useStateFromStores)([es.default], () => es.default.getFirstNoReplyThreadId()), h = (0, H.useIsNonModInLockedThread)(a), g = (0, R.useNullableMessageAuthor)(u);
                if (n > 0) {
                    var C, _;
                    return (0, s.jsxs)(x.Clickable, {
                        onClick: e => {
                            null != u && null != a.parent_id && (e.stopPropagation(), (0, eu.trackForumPostClicked)({
                                guildId: a.guild_id,
                                channelId: a.parent_id,
                                postId: a.id,
                                location: {
                                    page: eT.AnalyticsPages.GUILD_CHANNEL,
                                    section: eT.AnalyticsSections.FORUM_CHANNEL_POST
                                }
                            }), e.shiftKey ? (0, D.transitionToThreadMessage)(a, u.id, eN.OpenThreadAnalyticsLocations.BROWSER) : U.default.openThreadAsSidebar({
                                guildId: a.guild_id,
                                channelId: a.id,
                                baseChannelId: a.parent_id,
                                flash: !0,
                                details: {
                                    type: w.SidebarOpenDetailsType.THREAD,
                                    initialMessageId: u.id
                                }
                            }))
                        },
                        children: [(0, s.jsxs)(x.HiddenVisually, {
                            children: ["Latest message:", null != g ? null !== (C = g.nick) && void 0 !== C ? C : eE.default.Messages.UNKNOWN_USER : null, " ", null == (_ = null == u ? void 0 : u.content) ? "" : _.length > 120 ? "".concat(_.substring(0, 120), "...") : _]
                        }), (0, s.jsxs)(x.FocusBlock, {
                            className: eM.replies,
                            children: [(0, s.jsx)(eH, {
                                messageCount: n,
                                unreadCount: l,
                                iconSize: 16
                            }), o.length > 0 ? (0, s.jsx)(eP, {
                                channel: a,
                                typingUserIds: o,
                                facepileRef: i
                            }) : (0, s.jsx)(eU, {
                                channel: a,
                                mostRecentMessage: u,
                                hasUnreads: c
                            })]
                        })]
                    })
                }
                return h ? (0, s.jsx)("div", {
                    className: eM.replies,
                    children: (0, s.jsx)(x.Text, {
                        variant: "text-sm/semibold",
                        color: "text-muted",
                        className: r(eM.mostRecentMessageContent, eM.nonUserMessage, eM.lockedMessage),
                        children: eE.default.Messages.THREAD_HEADER_NOTICE_ACTIVE_LOCKED
                    })
                }) : d && 0 === n ? (0, s.jsx)(x.FocusBlock, {
                    "aria-hidden": !0,
                    className: eM.replies,
                    children: o.length > 0 ? (0, s.jsx)(eP, {
                        channel: a,
                        typingUserIds: o,
                        facepileRef: i
                    }) : (0, s.jsx)(eO, {
                        shouldAnimate: m === a.id
                    })
                }) : null
            }

            function eP(e) {
                let {
                    channel: t,
                    typingUserIds: a,
                    facepileRef: n
                } = e;
                return (0, s.jsxs)("div", {
                    className: eM.typing,
                    children: [(0, s.jsx)(em.Facepile, {
                        channel: t,
                        userIds: a,
                        facepileRef: n
                    }), (0, s.jsx)("div", {
                        className: eM.dots,
                        children: (0, s.jsx)(x.Dots, {
                            themed: !0,
                            dotRadius: 2
                        })
                    }), (0, s.jsx)(C.default, {
                        channel: t,
                        className: eM.typingUsers,
                        renderDots: !1
                    })]
                })
            }

            function eD(e) {
                let {
                    channel: t,
                    onClick: a
                } = e, {
                    hasUnreads: l
                } = (0, el.useForumPostReadStates)(t), r = function(e) {
                    let t = (0, f.useStateFromStores)([eo.default], () => eo.default.getHasSearchResults(e.parent_id)),
                        a = (0, f.useStateFromStores)([eo.default], () => eo.default.getSearchQuery(e.parent_id)),
                        s = n.useMemo(() => (0, S.createASTHighlighter)(t && null != a ? a : ""), [t, a]),
                        l = n.useMemo(() => (0, j.default)({
                            content: e.name,
                            embeds: []
                        }, {
                            postProcessor: s
                        }).content, [e.name, s]);
                    return l
                }(t);
                return (0, s.jsx)(x.Heading, {
                    variant: "heading-lg/semibold",
                    color: l ? "header-primary" : "text-muted",
                    className: eM.title,
                    children: (0, s.jsx)(x.Clickable, {
                        onClick: a,
                        children: r
                    })
                })
            }
            let eU = n.memo(function(e) {
                var t;
                let {
                    channel: a,
                    mostRecentMessage: l,
                    hasUnreads: i
                } = e, o = (0, R.useNullableMessageAuthor)(l), u = (0, f.useStateFromStores)([W.default], () => null != l && W.default.isBlocked(l.author.id)), d = (0, f.useStateFromStores)([V.default], () => V.default.can(eT.Permissions.MANAGE_MESSAGES, a)), c = k.RenderSpoilers.useSetting(), m = (0, ed.useIsRecentMessageDeleted)(a), {
                    content: h
                } = n.useMemo(() => (null == l ? void 0 : l.content) != null && "" !== l.content ? (0, j.default)(l, {
                    formatInline: !0,
                    noStyleAndInteraction: !0
                }) : {
                    content: null
                }, [l]), g = null != l && (0, I.default)(l), C = null;
                if (u) C = (0, s.jsx)(x.Text, {
                    className: eM.nonUserMessage,
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
                        renderedContent: ea.default.stringify(l, a)
                    } : (0, $.renderSingleLineMessage)(l, h, u, r(eM.mostRecentMessageContent, ev.inlineFormat, ev.smallFontSize), {
                        iconClass: eM.messageContentIcon,
                        iconSize: ep.SINGLE_LINE_MESSAGE_DEFAULT_ICON_SIZE
                    });
                    C = null != t ? (0, s.jsx)(x.Text, {
                        variant: "text-sm/semibold",
                        color: i ? "header-secondary" : "text-muted",
                        className: eM.mostRecentMessageContent,
                        children: t
                    }) : null != e ? (0, s.jsx)(x.Text, {
                        variant: "text-sm/semibold",
                        color: i ? "header-secondary" : "text-muted",
                        className: eM.mostRecentMessageContent,
                        children: e
                    }) : m ? (0, s.jsx)(x.Text, {
                        variant: "text-sm/semibold",
                        color: i ? "header-secondary" : "text-muted",
                        className: r(eM.mostRecentMessageContent, eM.nonUserMessage),
                        children: eE.default.Messages.FORUM_CHANNEL_MOST_RECENT_MESSAGE_DELETED
                    }) : null
                }
                let _ = null != o ? null !== (t = o.nick) && void 0 !== t ? t : eE.default.Messages.UNKNOWN_USER : null,
                    T = (0, P.useUsernameHook)(null == l ? void 0 : l.author, a.id, a.guild_id, !0)(null != o ? o : void 0)((0, s.jsxs)(s.Fragment, {
                        children: [null != _ ? _ : "", null != l ? ":" : ""]
                    }), a.id);
                return (0, s.jsx)(q.ObscuredDisplayContext.Provider, {
                    value: (0, v.default)(c, d),
                    children: (0, s.jsxs)("div", {
                        className: eM.mostRecentMessage,
                        children: [null == _ || g ? null : (0, s.jsx)("div", {
                            className: eM.mostRecentMessageAuthor,
                            children: (0, s.jsx)(x.Text, {
                                tag: "span",
                                variant: "text-sm/semibold",
                                children: T
                            })
                        }), (0, s.jsx)(x.FocusBlock, {
                            children: C
                        })]
                    })
                })
            });

            function ew(e) {
                let {
                    channel: t,
                    firstMessage: a
                } = e, l = (0, f.useStateFromStores)([G.default], () => G.default.getChannel(t.parent_id)), i = (0, el.useDefaultReactionEmoji)(l), {
                    disableReactionUpdates: o,
                    disableReactionCreates: u,
                    isLurking: d,
                    isPendingMember: c
                } = (0, O.default)(t), m = (0, b.findReactionIndex)(a.reactions, i) >= 0, {
                    enabled: h,
                    hasTwoButtonEntryPoint: g
                } = (0, _.useBurstReactionsExperiment)(t.guild_id), x = (0, f.useStateFromStores)([p.default], () => p.default.remainingBurstCurrency), {
                    ref: C,
                    width: S
                } = (0, T.default)(), [N, E] = n.useState(10), [M, v] = n.useState(!0);
                return n.useEffect(() => {
                    if (null == S) return;
                    let e = Math.floor((S - 78) / 66);
                    E(e), v(!1)
                }, [S, a.reactions, i]), (0, s.jsxs)("div", {
                    className: r(eM.reactionRow, {
                        [eM.loading]: M
                    }),
                    ref: C,
                    children: [m || u || null == i ? null : (0, s.jsx)(y.Reaction, {
                        className: eM.defaultReaction,
                        message: a,
                        readOnly: !1,
                        useChatFontScaling: !0,
                        isLurking: d,
                        isPendingMember: c,
                        emoji: i,
                        type: A.ReactionTypes.NORMAL,
                        hideCount: !0,
                        count: 0,
                        me: !1,
                        burst_count: 0,
                        me_burst: !1
                    }), (0, s.jsx)(b.default, {
                        message: a,
                        channel: t,
                        disableReactionCreates: u,
                        disableReactionUpdates: o,
                        useChatFontScaling: !0,
                        className: eM.messageReactions,
                        reactionClassName: eM.reaction,
                        hoistReaction: i,
                        forceHideReactionCreates: !0,
                        maxReactions: N
                    }), (0, s.jsxs)("div", {
                        className: eM.addReactionContainer,
                        children: [!u && (0, s.jsx)(L.ButtonAddReaction, {
                            type: A.ReactionTypes.NORMAL,
                            message: a,
                            channel: t,
                            useChatFontScaling: !0,
                            className: eM.addReactButton,
                            isForumToolbar: !1
                        }), !u && h && g && (0, s.jsx)(L.ButtonAddReaction, {
                            type: A.ReactionTypes.BURST,
                            remainingBurstCurrency: x,
                            message: a,
                            channel: t,
                            useChatFontScaling: !0,
                            isForumToolbar: !1,
                            className: eM.addReactButton
                        })]
                    })]
                })
            }

            function eH(e) {
                let {
                    messageCount: t,
                    unreadCount: a,
                    iconSize: n
                } = e;
                return (0, s.jsxs)("div", {
                    className: eM.messageCountBox,
                    children: [(0, s.jsx)("span", {
                        className: eM.messageCountIcon,
                        children: (0, s.jsx)(Q.default, {
                            width: n,
                            height: n
                        })
                    }), "number" == typeof t ? (0, s.jsx)(Y.default, {
                        value: t,
                        className: eM.messageCountText
                    }) : (0, s.jsx)("div", {
                        className: eM.messageCountText,
                        children: t
                    }), null == a ? null : (0, s.jsx)(x.Text, {
                        className: eM.unreadMessagesCount,
                        variant: "text-sm/semibold",
                        color: "text-brand",
                        children: eE.default.Messages.FORUM_POST_MESSAGE_COUNT_SHORT_PARENTHETICAL.format({
                            count: a
                        })
                    })]
                })
            }

            function ek(e) {
                var t;
                let {
                    channel: a
                } = e, {
                    sortOrder: n
                } = (0, en.useForumChannelStore)(a.parent_id), l = (0, el.useLastActiveTimestamp)(a, n), r = (0, f.useStateFromStores)([z.default], () => z.default.lastMessageId(a.id)), i = null != r ? h.default.extractTimestamp(r) : null, o = null === (t = a.threadMetadata) || void 0 === t ? void 0 : t.createTimestamp, u = null == l ? null : n === m.ThreadSortOrder.CREATION_DATE ? eE.default.Messages.FORUM_POST_CREATED_AT_TOOLTIP.format({
                    timestamp: l
                }) : l, c = n === m.ThreadSortOrder.CREATION_DATE && null != o ? eE.default.Messages.FORUM_POST_CREATED_AT_TOOLTIP.format({
                    timestamp: (0, et.dateFormat)(d(o), "LLLL")
                }) : null != i ? (0, et.dateFormat)(d(i), "LLLL") : null;
                return null == c || null == u ? null : (0, s.jsx)(x.Tooltip, {
                    text: c,
                    tooltipClassName: eM.timestampTooltip,
                    "aria-label": eE.default.Messages.FORUM_POST_CREATED_AT_TOOLTIP_LABEL,
                    children: e => (0, s.jsx)(x.Text, {
                        variant: "text-xs/medium",
                        color: "header-secondary",
                        ...e,
                        children: u
                    })
                })
            }

            function eB(e) {
                let {
                    channel: t,
                    firstMessage: a,
                    isNew: n,
                    containsTags: l
                } = e, r = t.hasFlag(eS.ChannelFlags.PINNED), i = (0, f.useStateFromStores)([W.default], () => null != a && W.default.isBlocked(a.author.id));
                return (0, s.jsxs)("div", {
                    className: eM.header,
                    children: [!l && r && (0, s.jsx)("div", {
                        className: eM.pinIcon,
                        children: (0, s.jsx)(x.Tooltip, {
                            text: eE.default.Messages.PINNED_POST,
                            children: e => (0, s.jsx)(J.default, {
                                ...e,
                                width: ex.PIN_ICON_SIZE,
                                height: ex.PIN_ICON_SIZE,
                                color: "white"
                            })
                        })
                    }), !i && (0, s.jsx)(eg.default, {
                        channel: t,
                        message: a
                    }), (0, s.jsx)(ek, {
                        channel: t
                    }), n && (0, s.jsx)(ee.TextBadge, {
                        className: eM.newBadge,
                        color: g.default.unsafe_rawColors.BRAND_260.css,
                        text: eE.default.Messages.NEW
                    })]
                })
            }

            function eG(e) {
                let {
                    channel: t,
                    firstMedia: a,
                    firstMessage: n,
                    isEmbed: l,
                    contentHeight: i
                } = e, o = (0, f.useStateFromStores)([K.default], () => K.default.isFocused()), u = (0, E.isAnimatedImageUrl)(a.src), d = k.GifAutoPlay.useSetting(), {
                    src: c,
                    width: m,
                    height: h,
                    alt: g
                } = a, [C, _] = (0, M.useShouldObscure)({
                    media: a,
                    channel: t
                }), T = (0, M.getObscuredAlt)(_);
                return (0, s.jsx)(x.FocusBlock, {
                    enabled: !0,
                    children: (0, s.jsxs)("div", {
                        className: r(eM.bodyMedia, {
                            [eA.embedFull]: l
                        }),
                        style: {
                            height: i,
                            borderColor: (0, ei.getEmbedColor)(n, C)
                        },
                        onClick: e => e.stopPropagation(),
                        children: [c.startsWith("data:") ? (0, s.jsx)(Z.default, {
                            src: c,
                            width: m,
                            height: h,
                            minWidth: 143,
                            minHeight: i,
                            maxHeight: i,
                            alt: null != g && C ? T : g,
                            imageClassName: r({
                                [eM.obscured]: C
                            })
                        }) : (0, F.renderImageComponent)({
                            src: c,
                            width: m,
                            height: h,
                            minWidth: 143,
                            minHeight: i,
                            maxHeight: i,
                            alt: null != g && C ? T : g,
                            autoPlay: d,
                            animated: u && !C && o,
                            imageContainerClassName: r({
                                [eM.obscured]: C
                            })
                        }), C && (0, s.jsx)(ec.default, {
                            iconClassname: eM.obscuredTag,
                            obscureReason: _
                        })]
                    })
                })
            }
        },
        855455: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
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
                    return m
                },
                useImageDimensionStyles: function() {
                    return f
                }
            });
            var s = a("884691"),
                n = a("693566"),
                l = a.n(n);
            let r = 0,
                i = 4,
                o = 4,
                u = "absolute",
                d = (e, t, a, s) => {
                    if (0 === a) return [];
                    if (1 === a) return [{
                        width: e,
                        height: t,
                        top: 0,
                        left: 0,
                        position: u
                    }];
                    if (2 === a) {
                        let a = Math.ceil((e - s) / 2);
                        return [{
                            top: 0,
                            left: 0,
                            position: u,
                            width: a,
                            height: t
                        }, {
                            top: 0,
                            left: a + s,
                            position: u,
                            width: a,
                            height: t
                        }]
                    }
                    if (3 === a) {
                        let a = Math.ceil((e - s) / 2),
                            n = Math.ceil((t - s) / 2);
                        return [{
                            top: 0,
                            left: 0,
                            position: u,
                            width: a,
                            height: t
                        }, {
                            top: 0,
                            left: a + s,
                            position: u,
                            width: a,
                            height: n
                        }, {
                            top: n + s,
                            left: a + s,
                            position: u,
                            width: a,
                            height: n
                        }]
                    } else {
                        let a = Math.ceil((e - s) / 2),
                            n = Math.ceil((t - s) / 2);
                        return [{
                            top: 0,
                            left: 0,
                            position: u,
                            width: a,
                            height: n
                        }, {
                            top: n + s,
                            left: 0,
                            position: u,
                            width: a,
                            height: n
                        }, {
                            top: 0,
                            left: a + s,
                            position: u,
                            width: a,
                            height: n
                        }, {
                            top: n + s,
                            left: a + s,
                            position: u,
                            width: a,
                            height: n
                        }]
                    }
                },
                c = new l({
                    max: 100
                });

            function m(e) {
                let {
                    numAttachments: t,
                    containerWidth: a,
                    containerHeight: n
                } = e;
                return s.useMemo(() => (function(e) {
                    var t, a, s;
                    let {
                        numAttachments: n,
                        containerWidth: l,
                        containerHeight: r
                    } = e;
                    let i = (t = n, a = l, s = r, "".concat(t, "-").concat(a, "-").concat(s)),
                        o = c.get(i);
                    if (null != o) return o;
                    {
                        let e = d(l, r, n, 4);
                        return c.set(i, e), e
                    }
                })({
                    numAttachments: t,
                    containerWidth: a,
                    containerHeight: n
                }), [t, a, n])
            }

            function h(e) {
                return e.map((t, a) => ({
                    minWidth: 2 * e[a].width,
                    minHeight: 2 * e[a].height,
                    maxWidth: 2 * e[a].width,
                    maxHeight: 2 * e[a].height
                }))
            }

            function f(e) {
                let {
                    imageContainerStyles: t,
                    containerWidth: a,
                    containerHeight: n
                } = e, l = s.useRef(h(t)), r = s.useRef(a), i = s.useRef(n), o = a > r.current + 100, u = n > i.current + 100;
                return (o || u) && (l.current = h(t)), l.current
            }
        },
        337113: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return h
                }
            });
            var s = a("37983");
            a("884691");
            var n = a("414456"),
                l = a.n(n),
                r = a("866227"),
                i = a.n(r),
                o = a("77078"),
                u = a("32238"),
                d = a("49111"),
                c = a("782340"),
                m = a("17366"),
                h = e => {
                    let {
                        rateLimitPerUser: t,
                        slowmodeCooldownGuess: a,
                        isBypassSlowmode: n,
                        leadingIcon: r = !1
                    } = e, h = "", f = "";
                    if (t >= d.Durations.HOUR) {
                        let e = Math.floor(t / d.Durations.HOUR),
                            a = Math.floor((t - e * d.Durations.HOUR) / d.Durations.MINUTE),
                            s = t - e * d.Durations.HOUR - a * d.Durations.MINUTE;
                        f = c.default.Messages.FORUM_SLOWMODE_DESC_HOURS.format({
                            hours: e,
                            minutes: a,
                            seconds: s
                        })
                    } else if (t >= 60) {
                        let e = Math.floor(t / 60),
                            a = t - 60 * e;
                        f = c.default.Messages.FORUM_SLOWMODE_DESC_MINUTES.format({
                            minutes: e,
                            seconds: a
                        })
                    } else f = c.default.Messages.FORUM_SLOWMODE_DESC.format({
                        seconds: t
                    });
                    if (!n && a > 0) {
                        let e = i.duration(a);
                        if (a > 1e3 * d.Durations.HOUR) {
                            let t = "".concat(e.minutes()).padStart(2, "0"),
                                a = "".concat(e.seconds()).padStart(2, "0");
                            h = "".concat(e.hours(), ":").concat(t, ":").concat(a)
                        } else {
                            let t = "".concat(e.seconds()).padStart(2, "0");
                            h = "".concat(e.minutes(), ":").concat(t)
                        }
                    } else h = n ? c.default.Messages.CHANNEL_SLOWMODE_DESC_IMMUNE : c.default.Messages.CHANNEL_SLOWMODE_DESC_SHORT;
                    let g = (0, s.jsx)(o.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: h
                        }),
                        x = (0, s.jsx)(u.default, {
                            className: l(m.slowModeIcon, {
                                [m.leadingIcon]: r
                            })
                        });
                    return (0, s.jsx)(o.Tooltip, {
                        text: f,
                        children: e => (0, s.jsx)("div", {
                            className: m.cooldownWrapper,
                            ...e,
                            children: r ? (0, s.jsxs)(s.Fragment, {
                                children: [x, g]
                            }) : (0, s.jsxs)(s.Fragment, {
                                children: [g, x]
                            })
                        })
                    })
                }
        },
        552683: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return C
                }
            });
            var s = a("37983"),
                n = a("884691"),
                l = a("974667"),
                r = a("77078"),
                i = a("446674"),
                o = a("206230"),
                u = a("339792"),
                d = a("680986"),
                c = a("867965"),
                m = a("90625"),
                h = a("49111"),
                f = a("782340"),
                g = a("224300");

            function x() {
                return Promise.resolve()
            }

            function C(e) {
                let {
                    channel: t,
                    closePopout: a,
                    setPopoutRef: C
                } = e, _ = (0, d.useVisibleForumTags)(t), {
                    tagFilter: T
                } = (0, u.useForumChannelStore)(t.id), S = (0, u.useForumChannelStoreApi)(), N = (0, i.useStateFromStores)([o.default], () => o.default.keyboardModeEnabled), p = n.useCallback(e => {
                    (0, c.trackForumTagFilterClicked)({
                        guildId: t.guild_id,
                        channelId: t.id,
                        tagId: e,
                        filterTagIds: Array.from(T),
                        added: !T.has(e),
                        location: {
                            page: h.AnalyticsPages.GUILD_CHANNEL,
                            section: h.AnalyticsSections.FORUM_CHANNEL_HEADER,
                            object: h.AnalyticsObjects.CHANNEL_TAG
                        }
                    }), S.getState().toggleTagFilter(t.id, e)
                }, [t, T, S]), E = n.useCallback(() => {
                    S.getState().setTagFilter(t.id, new Set), !N && a()
                }, [S, t.id, N, a]), M = (0, l.default)({
                    id: "".concat(t.id, "-all-tags-dropdown-navigator"),
                    isEnabled: !0,
                    wrap: !0,
                    scrollToStart: x,
                    scrollToEnd: x
                }), A = n.useRef(null);
                return n.useEffect(() => {
                    requestAnimationFrame(() => {
                        if (null != A.current) {
                            let e = A.current.querySelector(".".concat(g.tag));
                            null != e && e.focus()
                        }
                    })
                }, []), (0, s.jsxs)(r.Dialog, {
                    ref: C,
                    "aria-label": f.default.Messages.FORUM_TAG_FILTER_HEADER,
                    className: g.container,
                    children: [(0, s.jsx)("div", {
                        className: g.header,
                        children: (0, s.jsxs)("div", {
                            className: g.headerLeft,
                            children: [(0, s.jsx)(r.Heading, {
                                color: "interactive-normal",
                                variant: "text-xs/bold",
                                className: g.headerText,
                                children: f.default.Messages.FORUM_TAG_POST_SELECT
                            }), (0, s.jsx)("div", {
                                className: g.countContainer,
                                children: (0, s.jsx)(r.Text, {
                                    className: g.countText,
                                    color: "none",
                                    variant: "text-xs/medium",
                                    children: T.size
                                })
                            })]
                        })
                    }), (0, s.jsx)(l.ListNavigatorProvider, {
                        navigator: M,
                        children: (0, s.jsx)(l.ListNavigatorContainer, {
                            children: e => {
                                let {
                                    ref: t,
                                    ...a
                                } = e;
                                return (0, s.jsx)("div", {
                                    ref: e => {
                                        t.current = e, A.current = e
                                    },
                                    ...a,
                                    className: g.tagContainer,
                                    children: _.map(e => (0, s.jsx)(m.default, {
                                        className: g.tag,
                                        tag: e,
                                        selected: T.has(e.id),
                                        onClick: () => p(e.id)
                                    }, e.id))
                                })
                            }
                        })
                    }), (0, s.jsx)("div", {
                        className: g.separator
                    }), (0, s.jsx)(r.Button, {
                        look: r.Button.Looks.LINK,
                        size: r.Button.Sizes.MIN,
                        color: r.Button.Colors.CUSTOM,
                        className: g.clear,
                        "aria-label": f.default.Messages.FORUM_CLEAR_ALL,
                        onClick: E,
                        children: (0, s.jsx)(r.Text, {
                            variant: "text-sm/medium",
                            color: "text-link",
                            children: f.default.Messages.FORUM_CLEAR_ALL
                        })
                    })]
                })
            }
        },
        589455: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return u
                }
            });
            var s = a("884691"),
                n = a("405665"),
                l = a("77078");
            let r = "undefined" == typeof ResizeObserver ? n.ResizeObserver : ResizeObserver,
                i = new Map,
                o = new r(e => {
                    e.forEach(e => {
                        var t;
                        let {
                            target: a
                        } = e;
                        null === (t = i.get(a)) || void 0 === t || t(e)
                    })
                });
            var u = () => {
                let e = s.useRef(null),
                    [t, a] = s.useState(400),
                    n = s.useCallback(() => {
                        null !== e.current && a(e.current.clientWidth)
                    }, [a, e]);
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
        485055: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return h
                },
                useForumGridItem: function() {
                    return C
                },
                GridNavigatorProvider: function() {
                    return _
                }
            });
            var s = a("37983"),
                n = a("884691"),
                l = a("909283"),
                r = a("942367"),
                i = a("74139");
            let o = "data-grid-item-id",
                u = "data-grid-section",
                d = "data-grid-prev-section-boundary",
                c = new Set([r.Keys.UP, r.Keys.DOWN, r.Keys.LEFT, r.Keys.RIGHT]);

            function m(e) {
                let {
                    section: t,
                    column: a,
                    row: s
                } = e, n = "[".concat(u, '="').concat(t, '"]'), l = "[".concat("aria-colindex", '="').concat(a, '"]'), r = "[".concat("aria-rowindex", '="').concat(s, '"]');
                return "".concat(n).concat(l).concat(r)
            }

            function h(e) {
                let {
                    id: t,
                    isEnabled: a,
                    setFocus: s
                } = e, u = n.useRef(null), h = n.useRef(!1), f = n.useRef(null), g = n.useRef(a);
                n.useLayoutEffect(() => {
                    g.current = a
                }, [a]);
                let x = n.useCallback(e => {
                        var t;
                        return (null !== (t = f.current) && void 0 !== t ? t : document).querySelector(e)
                    }, []),
                    C = n.useCallback((e, t) => {
                        g.current && s(e, t)
                    }, [s]),
                    _ = n.useCallback(e => {
                        if (g.current) {
                            var t;
                            null === (t = document.querySelector(e)) || void 0 === t || t.focus()
                        }
                    }, []),
                    T = n.useCallback(e => {
                        u.current = e;
                        let a = (0, i.createSelector)(e, o),
                            s = (0, i.getItemId)(e);
                        C(a, s), (0, l.notifyFocusSubscribers)(t, s, !0)
                    }, [t, C]),
                    [S, N] = n.useState(!1),
                    p = n.useRef(S);
                n.useLayoutEffect(() => {
                    p.current = S
                }, [S]), n.useLayoutEffect(() => {
                    let e = f.current;
                    if (null != e) return e.addEventListener("focusin", a), e.addEventListener("focusout", s), e.addEventListener("focus", n), e.addEventListener("scroll", l, {
                        passive: !0
                    }), () => {
                        e.removeEventListener("focusin", a), e.removeEventListener("focusout", s), e.removeEventListener("focus", n), e.removeEventListener("scroll", l)
                    };

                    function a() {
                        N(!0)
                    }

                    function s(e) {
                        !e.currentTarget.contains(e.relatedTarget) && (N(!1), requestAnimationFrame(() => {
                            let e = u.current;
                            if (null !== e) {
                                let a = (0, i.createSelector)(e, o);
                                null == x(a) && _((0, i.createSelector)(t, "data-grid-id"))
                            }
                        }))
                    }

                    function n() {
                        let e = f.current,
                            t = p.current;
                        if (t || null == e) return
                    }

                    function l() {
                        h.current = !0
                    }
                }, [t, C, _, T, x]);
                let E = n.useCallback(e => {
                        var t, a;
                        if (!g.current) return;
                        let s = u.current,
                            n = f.current;
                        if (null == s) return;
                        let l = (0, i.createSelector)(s, o),
                            h = null == n ? void 0 : n.querySelector(l);
                        if (null == h) return;
                        let C = parseInt(null !== (t = h.getAttribute("data-grid-section")) && void 0 !== t ? t : ""),
                            _ = parseInt(h.getAttribute("aria-rowindex")),
                            S = parseInt(h.getAttribute("aria-colindex"));
                        switch (c.has(e.key) && (e.stopPropagation(), e.preventDefault()), e.key) {
                            case r.Keys.RIGHT: {
                                let e = x(m({
                                    section: C,
                                    row: _,
                                    column: S + 1
                                }));
                                if (null != e) {
                                    let t = e.getAttribute(o);
                                    null != t && T(t)
                                }
                                return
                            }
                            case r.Keys.LEFT: {
                                let e = x(m({
                                    section: C,
                                    row: _,
                                    column: S - 1
                                }));
                                if (null != e) {
                                    let t = e.getAttribute(o);
                                    null != t && T(t)
                                }
                                return
                            }
                            case r.Keys.DOWN: {
                                let e = x(m({
                                    section: C,
                                    row: _ + 1,
                                    column: S
                                }));
                                if (null == e && (e = x(m({
                                        section: C + 1,
                                        row: 0,
                                        column: S
                                    }))), null != e) {
                                    let t = e.getAttribute(o);
                                    null != t && T(t)
                                }
                                return
                            }
                            case r.Keys.UP: {
                                let e;
                                if (0 === _) {
                                    let t = parseInt(h.getAttribute(d));
                                    null == (e = x(m({
                                        section: C - 1,
                                        row: t,
                                        column: S
                                    }))) && (e = x(m({
                                        section: C - 1,
                                        row: t - 1,
                                        column: S
                                    })))
                                } else e = x(m({
                                    section: C,
                                    row: _ - 1,
                                    column: S
                                }));
                                if (null != e) {
                                    let t = e.getAttribute(o);
                                    null != t && T(t)
                                }
                                return
                            }
                            case r.Keys.SPACE:
                            case r.Keys.ENTER: {
                                if (e.repeat) return;
                                let t = u.current;
                                if (null != t) {
                                    let s = (0, i.createSelector)(t, o),
                                        n = x(s),
                                        l = null !== (a = null == n ? void 0 : n.ownerDocument) && void 0 !== a ? a : document,
                                        r = n === l.activeElement;
                                    null != n && r && (e.preventDefault(), e.stopPropagation(), null == n || n.click())
                                }
                            }
                        }
                    }, [x, T]),
                    M = n.useCallback(e => {
                        let a = null != e ? (0, i.createListItemId)(t, e) : null;
                        u.current = a
                    }, [t]);
                return n.useMemo(() => ({
                    id: t,
                    containerProps: {
                        onKeyDown: E,
                        ref: f
                    },
                    setFocus: M
                }), [t, E, M])
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
                x = n.createContext(f);

            function C(e) {
                let {
                    id: t,
                    section: a,
                    row: s,
                    column: r,
                    boundaries: c
                } = e, [m, h] = n.useState(0 === s && 0 === r ? 0 : -1), f = n.useContext(g), {
                    id: x,
                    setFocus: C
                } = f, _ = n.useCallback(() => C(t), [t, C]);
                return n.useLayoutEffect(() => (0, l.addFocusSubscriber)(x, e => {
                    h(e === t ? 0 : -1)
                }), [t, x]), {
                    [o]: (0, i.createListItemId)(x, t),
                    [u]: a,
                    [d]: c[a],
                    role: "gridcell",
                    "aria-rowindex": s,
                    "aria-colindex": r,
                    tabIndex: m,
                    onFocus: _
                }
            }

            function _(e) {
                let {
                    children: t,
                    navigator: a
                } = e, {
                    id: l,
                    setFocus: r,
                    containerProps: {
                        onKeyDown: i,
                        ref: o
                    }
                } = a, u = n.useMemo(() => ({
                    id: l,
                    setFocus: r
                }), [l, r]), d = n.useMemo(() => ({
                    onKeyDown: i,
                    ref: o,
                    id: l
                }), [i, o, l]);
                return (0, s.jsx)(x.Provider, {
                    value: d,
                    children: (0, s.jsx)(g.Provider, {
                        value: u,
                        children: t
                    })
                })
            }
        },
        219840: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return l
                }
            });
            var s = a("884691"),
                n = a("974667");

            function l(e) {
                let {
                    listRef: t,
                    padding: a,
                    channel: l,
                    isEnabled: r
                } = e, i = s.useCallback(e => {
                    let s = t.current,
                        n = document.querySelector(e);
                    if (null != n) null == s || s.scrollIntoViewNode({
                        node: n,
                        padding: a,
                        callback: () => {
                            var t;
                            null === (t = document.querySelector(e)) || void 0 === t || t.focus({
                                preventScroll: !0
                            })
                        }
                    })
                }, [a]), o = s.useCallback(() => new Promise(e => {
                    let a = t.current;
                    null == a || a.scrollToTop({
                        callback: () => requestAnimationFrame(e)
                    })
                }), []), u = s.useCallback(() => new Promise(e => {
                    let a = t.current;
                    null == a || a.scrollToBottom({
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
        891475: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                useExtractEmbedPreview: function() {
                    return o
                }
            });
            var s = a("884691"),
                n = a("917351"),
                l = a("253981"),
                r = a("639440"),
                i = a("856220");

            function o(e, t, a) {
                let o = s.useRef(new Map),
                    [, u] = s.useState(null),
                    [d, c] = s.useState(null),
                    m = s.useMemo(() => n.debounce((e, a) => {
                        if (null == a || e || 0 === t) return;
                        let s = a.match(l.default.URL_REGEX);
                        if (null == s || 0 === s.length) {
                            o.current = new Map, c(null);
                            return
                        }
                        let r = n.uniq(s).slice(0, i.MAX_THUMBNAIL_COUNT);
                        c(r)
                    }, 1e3), [t, o]);
                s.useEffect(() => {
                    m(e, a)
                }, [m, a, e]), s.useEffect(() => {
                    (async function e(e, t) {
                        if (null == t) return;
                        let a = e.current,
                            s = new Set(a.keys()),
                            n = t.filter(e => !(null == s ? void 0 : s.has(e)));
                        if (0 !== n.length) try {
                            let t = await r.unfurlEmbedUrl(n);
                            e.current = function(e, t, a) {
                                return null == a || a.forEach(a => {
                                    let s = function(e, t) {
                                        return e.find(e => (null == t ? void 0 : t.url) != null && e.startsWith(t.url))
                                    }(t, a);
                                    if (null == s) return;
                                    let n = e.get(s);
                                    null == n ? e.set(s, [a]) : n.push(a)
                                }), e
                            }(new Map(a), n, null == t ? void 0 : t.embeds), u({})
                        } catch (e) {}
                    })(o, d)
                }, [d]);
                let h = o.current,
                    f = s.useMemo(() => {
                        let e = [];
                        return null == d || d.forEach(t => {
                            let a = h.get(t);
                            null != a && e.push(...a)
                        }), e.length > 0 ? e : null
                    }, [d, h]);
                return {
                    embeds: e ? null : f
                }
            }
        },
        781555: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return U
                }
            });
            var s = a("37983"),
                n = a("884691"),
                l = a("414456"),
                r = a.n(l),
                i = a("301165"),
                o = a("446674"),
                u = a("819855"),
                d = a("77078"),
                c = a("841098"),
                m = a("206230"),
                h = a("526812"),
                f = a("404607"),
                g = a("258039"),
                x = a("291444"),
                C = a("592407"),
                _ = a("305961"),
                T = a("181114"),
                S = a("191814"),
                N = a("109264"),
                p = a("945330"),
                E = a("68238"),
                M = a("758710"),
                A = a("58608"),
                v = a("701909"),
                I = a("753582"),
                j = a("49111"),
                R = a("782340"),
                O = a("528639"),
                L = a("112545"),
                F = a("600310"),
                b = a("129185"),
                y = a("338283");

            function P(e) {
                let {
                    handleHide: t
                } = e;
                return (0, s.jsx)(d.Clickable, {
                    onClick: t,
                    className: O.closeButton,
                    "aria-label": R.default.Messages.DISMISS,
                    children: (0, s.jsx)(p.default, {
                        className: O.closeIcon
                    })
                })
            }

            function D(e) {
                let {
                    username: t,
                    title: a,
                    videoSrc: n,
                    messageCount: l,
                    reaction: i,
                    reactionCount: o,
                    classname: u
                } = e;
                return (0, s.jsxs)("div", {
                    className: r(O.videoPreview, u),
                    children: [(0, s.jsx)("div", {
                        className: O.authorRow,
                        children: (0, s.jsxs)("div", {
                            className: O.rowGroup,
                            children: [(0, s.jsx)(d.Text, {
                                tag: "span",
                                className: O.author,
                                variant: "text-sm/semibold",
                                children: t
                            }), (0, s.jsx)(d.Text, {
                                variant: "text-xs/normal",
                                color: "header-secondary",
                                className: O.postCreationTimestamp,
                                children: R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_PREVIEW_TIMESTAMP
                            })]
                        })
                    }), (0, s.jsx)(d.Heading, {
                        variant: "heading-md/extrabold",
                        className: O.title,
                        color: "header-primary",
                        "aria-hidden": !0,
                        children: a
                    }), (0, s.jsx)(S.default, {
                        size: 10
                    }), (0, s.jsx)(A.default, {
                        className: O.video,
                        src: n,
                        autoPlay: !0,
                        loop: !0,
                        muted: !0
                    }), (0, s.jsx)(S.default, {
                        size: 10
                    }), (0, s.jsx)("div", {
                        className: O.footer,
                        children: (0, s.jsxs)("div", {
                            className: O.forumPostControls,
                            children: [(0, s.jsxs)("div", {
                                className: O.messageCountBox,
                                children: [(0, s.jsx)("span", {
                                    className: O.messageCountIcon,
                                    children: (0, s.jsx)(N.default, {
                                        width: 16,
                                        height: 16
                                    })
                                }), (0, s.jsx)(d.Text, {
                                    variant: "text-xs/normal",
                                    color: "interactive-normal",
                                    children: l
                                })]
                            }), (0, s.jsxs)("div", {
                                className: O.reactionBox,
                                children: [(0, s.jsx)("span", {
                                    role: "img",
                                    "aria-label": "",
                                    children: i
                                }), (0, s.jsx)(d.Text, {
                                    variant: "text-xs/normal",
                                    color: "interactive-normal",
                                    children: o
                                })]
                            })]
                        })
                    })]
                })
            }
            var U = e => {
                var t, a;
                let {
                    channel: l
                } = e, N = (0, c.default)(), p = (0, u.isThemeDark)(N), A = (0, o.useStateFromStores)([_.default], () => _.default.getGuild(l.guild_id)), U = (0, o.useStateFromStores)([m.default], () => m.default.useReducedMotion), w = (0, o.useStateFromStores)([h.default], () => h.default.hasHidden(l.id)), H = (0, x.useSubscriptionListingsForChannel)({
                    guildId: l.guild_id,
                    channelId: l.id
                }), {
                    transitions: k,
                    setVisible: B
                } = (0, I.useShowAnimation)(U), G = n.useCallback(() => {
                    B(!1), f.default.hideAdminOnboarding(l.id, !0)
                }, [l, B]);
                n.useEffect(() => {
                    let e = (0, g.isOnboardingDismissed)(l.id);
                    !e && B(!w)
                }, [l, B, w]);
                let V = n.useMemo(() => [R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_FAN_ART_TAG, R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_DESK_SETUP_TAG, R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_PETS_TAG, R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_HOUSEPLANTS_TAG], []),
                    z = n.useMemo(() => [R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_BEHIND_THE_SCENES_TAG, R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_EXCLUSIVE_ART_TAG, R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_PRERELEASES_TAG, R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_TUTORIALS_TAG], []),
                    W = () => {
                        C.default.open(l.guild_id, j.GuildSettingsSections.ROLE_SUBSCRIPTIONS)
                    },
                    K = null !== (t = null == A ? void 0 : A.hasFeature(j.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE)) && void 0 !== t && t,
                    Y = K ? R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_HAS_TIERS_CTA : R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_NO_TIERS_CTA,
                    Z = null !== (a = (null == A ? void 0 : A.hasFeature(j.GuildFeatures.CREATOR_MONETIZABLE)) || (null == A ? void 0 : A.hasFeature(j.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL))) && void 0 !== a && a,
                    X = Z ? R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_ABOUT_MONETIZING_TITLE : R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_ABOUT_NON_MONETIZING_TITLE,
                    q = Z ? R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_ABOUT_MONETIZING_SUBTITLE : R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_ABOUT_NON_MONETIZING_SUBTITLE;
                return (0, s.jsx)(s.Fragment, {
                    children: k((e, t) => t ? (0, s.jsxs)(i.animated.div, {
                        style: e,
                        className: O.container,
                        children: [(0, s.jsxs)("div", {
                            className: r(O.wrapper, O.headerRow),
                            children: [(0, s.jsxs)(d.Text, {
                                variant: "text-xs/normal",
                                className: O.visibilityInfo,
                                children: [(0, s.jsx)(E.default, {
                                    width: 12,
                                    height: 12,
                                    className: O.icon
                                }), R.default.Messages.FORUM_CHANNEL_ONBOARDING_VISIBILITY]
                            }), (0, s.jsx)(P, {
                                handleHide: G
                            })]
                        }), (0, s.jsxs)("div", {
                            className: O.contentContainer,
                            children: [(0, s.jsxs)("div", {
                                className: r(O.contentRow, Z && O.contentRowOne),
                                children: [(0, s.jsx)("div", {
                                    className: r(O.contentMediaContainer),
                                    children: (0, s.jsxs)("div", {
                                        className: O.contentVideoContainer,
                                        children: [(0, s.jsx)(D, {
                                            username: R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_PREVIEW_USERNAME_ONE,
                                            videoSrc: "https://cdn.discordapp.com/assets/media_channel/admin_edu_discord_birthday.mp4",
                                            title: R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_PREVIEW_TITLE_ONE,
                                            messageCount: "34",
                                            reaction: "⚡️",
                                            reactionCount: "724",
                                            classname: O.backgroundVideo
                                        }), (0, s.jsx)(D, {
                                            username: R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_PREVIEW_USERNAME_TWO,
                                            videoSrc: "https://cdn.discordapp.com/assets/media_channel/admin_edu_wumpus_onboarding.mp4",
                                            title: R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_PREVIEW_TITLE_TWO,
                                            messageCount: "34",
                                            reactionCount: "84",
                                            reaction: "\uD83D\uDC9E",
                                            classname: r(O.backgroundVideo, O.secondaryVideo)
                                        }), (0, s.jsx)(D, {
                                            username: R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_PREVIEW_USERNAME_THREE,
                                            videoSrc: "https://cdn.discordapp.com/assets/media_channel/admin_edu_scientist_wumpus.mp4",
                                            title: R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_PREVIEW_TITLE_THREE,
                                            messageCount: "7,103",
                                            reaction: "⚡️",
                                            reactionCount: "724",
                                            classname: O.highlightVideo
                                        })]
                                    })
                                }), (0, s.jsxs)("article", {
                                    className: O.contentTextContainer,
                                    children: [(0, s.jsx)(d.Heading, {
                                        variant: "heading-lg/semibold",
                                        color: "header-primary",
                                        children: X
                                    }), (0, s.jsx)(S.default, {
                                        size: 8
                                    }), (0, s.jsx)(d.Text, {
                                        variant: "text-md/normal",
                                        color: "text-muted",
                                        children: q
                                    }), (0, s.jsx)(S.default, {
                                        size: 16
                                    }), (0, s.jsxs)(d.Clickable, {
                                        onClick: () => open(v.default.getCreatorSupportArticleURL(j.HelpdeskArticles.MEDIA_CHANNEL)),
                                        className: O.helpCenterLink,
                                        children: [(0, s.jsx)(d.Text, {
                                            variant: "text-sm/medium",
                                            color: "text-link",
                                            className: O.helpCenterLinkText,
                                            children: R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_HELP_CENTER
                                        }), (0, s.jsx)(M.default, {
                                            width: 16,
                                            height: 16,
                                            className: O.helpCenterLinkIcon
                                        })]
                                    }), (0, s.jsx)(S.default, {
                                        size: 16
                                    }), (0, s.jsx)("div", {
                                        className: O.mediaChannelTagsContainer,
                                        children: V.map(e => (0, s.jsx)(d.Text, {
                                            variant: "text-sm/medium",
                                            color: "text-normal",
                                            className: O.mediaChannelTag,
                                            children: e
                                        }, e))
                                    })]
                                })]
                            }), Z && (0, s.jsxs)("div", {
                                className: r(O.contentRow, O.contentRowTwo),
                                children: [(0, s.jsx)("div", {
                                    className: r(O.contentMediaContainer),
                                    children: (0, s.jsxs)("div", {
                                        className: O.contentImageContainer,
                                        children: [(0, s.jsx)("img", {
                                            src: p ? b : y,
                                            alt: "",
                                            className: r(O.previewEmbedImage, O.secondaryImage)
                                        }), (0, s.jsx)("img", {
                                            src: p ? L : F,
                                            alt: "",
                                            className: O.previewEmbedImage
                                        })]
                                    })
                                }), (0, s.jsxs)("article", {
                                    className: O.contentTextContainer,
                                    children: [(0, s.jsxs)(d.Text, {
                                        variant: "text-xxs/bold",
                                        className: O.serverSubPill,
                                        children: [R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_SERVER_SUB_PILL, " ", (0, s.jsx)("span", {
                                            role: "img",
                                            "aria-label": "",
                                            children: "\uD83D\uDD25"
                                        })]
                                    }), (0, s.jsx)(S.default, {
                                        size: 10
                                    }), (0, s.jsx)(d.Heading, {
                                        variant: "heading-lg/semibold",
                                        color: "header-primary",
                                        children: R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_SHARE_TITLE
                                    }), (0, s.jsx)(S.default, {
                                        size: 8
                                    }), (0, s.jsx)(d.Text, {
                                        variant: "text-md/normal",
                                        color: "text-muted",
                                        children: R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_SHARE_SUBTITLE
                                    }), (0, s.jsx)(S.default, {
                                        size: 16
                                    }), (0, s.jsx)("div", {
                                        className: O.mediaChannelTagsContainer,
                                        children: z.map(e => (0, s.jsx)(d.Text, {
                                            variant: "text-sm/medium",
                                            color: "text-normal",
                                            className: O.mediaChannelTag,
                                            children: e
                                        }, e))
                                    }), (0, s.jsx)(S.default, {
                                        size: 16
                                    }), 0 === H.length && (0, s.jsx)(T.default, {
                                        size: d.Button.Sizes.MEDIUM,
                                        pauseAnimation: U,
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
        236003: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return h
                }
            });
            var s = a("37983");
            a("884691");
            var n = a("65597"),
                l = a("77078"),
                r = a("850391"),
                i = a("271972"),
                o = a("761354"),
                u = a("1999"),
                d = a("585722"),
                c = a("782340"),
                m = a("909067");

            function h(e) {
                let {
                    parentChannel: t
                } = e, a = (0, n.useStateFromStoresArray)([d.default], () => {
                    let e = d.default.getUploads(t.id, r.ChatInputTypes.CREATE_FORUM_POST.drafts.type);
                    return null == e ? void 0 : e.filter(e => !0 !== e.isThumbnail)
                });
                return (0, s.jsxs)("div", {
                    className: m.container,
                    children: [(0, s.jsx)(l.Text, {
                        variant: "text-md/semibold",
                        color: "text-muted",
                        children: c.default.Messages.MEDIA_CHANNEL_ATTACHMENTS_SECTION_TITLE
                    }), (0, s.jsx)(l.Text, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: c.default.Messages.MEDIA_CHANNEL_ATTACHMENTS_SECTION_DESCRIPTION
                    }), (0, s.jsx)("div", {
                        children: (0, s.jsx)(l.ScrollerThin, {
                            className: m.uploadsContainer,
                            orientation: "horizontal",
                            paddingFix: !1,
                            fade: !0,
                            children: (0, s.jsxs)("div", {
                                className: m.uploads,
                                children: [a.map(e => (0, s.jsx)(o.default, {
                                    channelId: t.id,
                                    draftType: r.ChatInputTypes.CREATE_FORUM_POST.drafts.type,
                                    upload: e,
                                    keyboardModeEnabled: !0,
                                    hideFileName: !0,
                                    size: i.AttachmentListItemSizes.SMALL
                                }, e.id)), (0, s.jsx)(u.ComposerUploadButton, {
                                    channelId: t.id
                                })]
                            })
                        })
                    })]
                })
            }
        },
        549558: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                MediaPostThumbnail: function() {
                    return F
                }
            });
            var s = a("37983"),
                n = a("884691"),
                l = a("414456"),
                r = a.n(l),
                i = a("627445"),
                o = a.n(i),
                u = a("65597"),
                d = a("77078"),
                c = a("81594"),
                m = a("206230"),
                h = a("850391"),
                f = a("9560"),
                g = a("271972"),
                x = a("578198"),
                C = a("855455"),
                _ = a("476765"),
                T = a("857171"),
                S = a("832132"),
                N = a("808404"),
                p = a("987772"),
                E = a("228220"),
                M = a("58608"),
                A = a("412861"),
                v = a("489898"),
                I = a("782340"),
                j = a("73386");
            let R = [{
                    name: "Media Post Thumbnail",
                    extensions: ["jpg", "jpeg", "png", "gif", "webp"]
                }],
                O = (0, _.uid)();

            function L(e) {
                let {
                    mediaAttachments: t,
                    containerWidth: a,
                    containerHeight: n
                } = e, l = (0, C.useImageContainerStyles)({
                    numAttachments: t.length,
                    containerWidth: a,
                    containerHeight: n
                });
                return (0, s.jsx)(s.Fragment, {
                    children: t.map((e, t) => {
                        var a;
                        return (0, s.jsx)("div", {
                            style: l[t],
                            children: !0 === e.isVideo ? (0, s.jsx)(M.default, {
                                src: e.src,
                                className: j.thumbnail,
                                "aria-hidden": !0
                            }) : (0, s.jsx)("img", {
                                src: e.src,
                                className: j.thumbnail,
                                "aria-hidden": !0,
                                alt: null !== (a = null == e ? void 0 : e.alt) && void 0 !== a ? a : ""
                            })
                        }, e.src)
                    })
                })
            }
            let F = e => {
                var t;
                let {
                    parentChannel: l
                } = e, {
                    textAreaState: i
                } = (0, x.useForumPostComposerStore)(e => {
                    let {
                        textAreaState: t
                    } = e;
                    return {
                        textAreaState: t
                    }
                }), C = (0, u.default)([m.default], () => m.default.keyboardModeEnabled), _ = (0, v.default)(l, null === (t = i.textValue) || void 0 === t ? void 0 : t.trim()), M = n.useMemo(() => _.find(e => e.isThumbnail), [_]), F = null != _ && _.length > 0, b = n.useMemo(() => {
                    let e = (null == _ ? void 0 : _.length) > 1 ? 1.15 : 1;
                    return {
                        width: 153 * e,
                        height: 86 * e
                    }
                }, [_]), y = n.useCallback(e => {
                    null != M && c.default.remove(l.id, M.id, h.ChatInputTypes.CREATE_FORUM_POST.drafts.type), (0, A.promptToUpload)(e.currentTarget.files, l, h.ChatInputTypes.CREATE_FORUM_POST.drafts.type, {
                        requireConfirm: !0,
                        isThumbnail: !0
                    }), e.currentTarget.value = null
                }, [l, M]), P = e => {
                    e.stopPropagation(), (null == M ? void 0 : M.upload) != null && (0, d.openModalLazy)(async () => {
                        let e = M.upload;
                        o(null != e, "upload should not be null");
                        let {
                            default: t
                        } = await a.el("467339").then(a.bind(a, "467339"));
                        return a => (0, s.jsx)(t, {
                            ...a,
                            upload: e,
                            channelId: l.id,
                            draftType: h.ChatInputTypes.CREATE_FORUM_POST.drafts.type,
                            onSubmit: t => {
                                let {
                                    name: a,
                                    description: s,
                                    spoiler: n
                                } = t;
                                c.default.update(l.id, e.id, h.ChatInputTypes.CREATE_FORUM_POST.drafts.type, {
                                    filename: a,
                                    description: s,
                                    spoiler: n
                                })
                            },
                            disableSpoiler: !0
                        })
                    })
                }, D = (0, s.jsx)(T.default, {
                    color: d.ButtonColors.CUSTOM,
                    className: r(j.uploadFileInputContainer),
                    innerClassName: j.uploadThumbnailContainer,
                    onChange: y,
                    multiple: !1,
                    "aria-hidden": !0,
                    filters: R,
                    "aria-describedby": O,
                    "aria-label": F ? I.default.Messages.MEDIA_CHANNEL_CHANGE_THUMBNAIL_LABEL : I.default.Messages.MEDIA_CHANNEL_UPLOAD_THUMBNAIL_LABEL,
                    children: F ? (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)(L, {
                            mediaAttachments: _,
                            containerWidth: b.width,
                            containerHeight: b.height
                        }), (0, s.jsxs)("div", {
                            className: r(j.changeThumbnailLabelContainer, {
                                [j.changeThumbnailLabelOverflow]: (null == _ ? void 0 : _.length) > 2
                            }),
                            children: [(0, s.jsx)(d.Text, {
                                variant: "text-xs/medium",
                                color: "header-secondary",
                                children: I.default.Messages.MEDIA_CHANNEL_CHANGE_THUMBNAIL_LABEL
                            }), null == M && (0, s.jsx)(S.default, {
                                className: j.editIcon,
                                width: 16,
                                height: 16
                            })]
                        })]
                    }) : (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)(N.default, {
                            className: j.uploadIcon
                        }), (0, s.jsx)(d.Text, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: I.default.Messages.MEDIA_CHANNEL_UPLOAD_THUMBNAIL_LABEL
                        })]
                    })
                });
                return (0, s.jsx)("div", {
                    className: j.thumbnailContainer,
                    style: b,
                    children: null != M ? (0, s.jsx)(g.default, {
                        actions: (0, s.jsxs)(s.Fragment, {
                            children: [(0, s.jsx)(f.default, {
                                className: j.action,
                                tooltip: I.default.Messages.ATTACHMENT_UTILITIES_MODIFY,
                                onClick: P,
                                children: (0, s.jsx)(p.default, {})
                            }), (0, s.jsx)(f.default, {
                                className: j.action,
                                tooltip: I.default.Messages.ATTACHMENT_UTILITIES_REMOVE,
                                onClick: () => c.default.remove(l.id, M.id, h.ChatInputTypes.CREATE_FORUM_POST.drafts.type),
                                dangerous: !0,
                                children: (0, s.jsx)(E.default, {})
                            })]
                        }),
                        draftType: h.ChatInputTypes.CREATE_FORUM_POST.drafts.type,
                        id: M.id,
                        channelId: l.id,
                        handleEditModal: P,
                        keyboardModeEnabled: C,
                        size: g.AttachmentListItemSizes.SMALL,
                        className: j.attachmentListItem,
                        children: D
                    }) : (0, s.jsx)(s.Fragment, {
                        children: D
                    })
                })
            }
        },
        489898: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return u
                }
            });
            var s = a("884691"),
                n = a("65597"),
                l = a("850391"),
                r = a("585722"),
                i = a("856220"),
                o = a("891475");

            function u(e, t) {
                var a, u;
                let {
                    mediaAttachments: d,
                    hasThumbnail: c
                } = function(e) {
                    let [t, a] = s.useState(null), o = (0, n.useStateFromStoresArray)([r.default], () => {
                        let t = r.default.getUploads(e.id, l.ChatInputTypes.CREATE_FORUM_POST.drafts.type),
                            a = t.find(e => e.isThumbnail);
                        return null != a ? [a] : t.filter(e => e.isVideo || e.isImage)
                    }), u = s.useMemo(() => o.some(e => e.isThumbnail), [o]);
                    return s.useEffect(() => {
                        let e = [],
                            t = o.slice(0, i.MAX_THUMBNAIL_COUNT).flatMap(t => {
                                var a;
                                let s = null == t ? void 0 : null === (a = t.item) || void 0 === a ? void 0 : a.file;
                                if (null == s) return [];
                                let n = URL.createObjectURL(s);
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
                        return a(t), () => {
                            a(null), e.forEach(e => URL.revokeObjectURL(e))
                        }
                    }, [o]), {
                        mediaAttachments: t,
                        hasThumbnail: u
                    }
                }(e), m = Math.max(i.MAX_THUMBNAIL_COUNT - (null !== (a = null == d ? void 0 : d.length) && void 0 !== a ? a : 0), 0), {
                    embeds: h
                } = (0, o.useExtractEmbedPreview)(c, m, t), f = s.useMemo(() => null == h ? void 0 : h.flatMap(e => {
                    let t = (0, i.getEmbedPreviewImageUrl)(e);
                    return null == t ? [] : {
                        id: t,
                        src: t,
                        spoiler: !1,
                        alt: e.title
                    }
                }), [h]), g = [...null != d ? d : []];
                return !c && m > 0 && g.push(...null !== (u = null == f ? void 0 : f.slice(0, m)) && void 0 !== u ? u : []), g
            }
        },
        753582: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                useShowAnimation: function() {
                    return l
                }
            });
            var s = a("884691"),
                n = a("301165");

            function l(e) {
                let [t, a] = s.useState(!0), l = (0, n.useTransition)(t, {
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
                    setVisible: a
                }
            }
            let r = {
                mass: 1,
                tension: 250,
                friction: 18,
                clamp: !0
            }
        },
        857171: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return o
                }
            });
            var s = a("37983");
            a("884691");
            var n = a("414456"),
                l = a.n(n),
                r = a("77078"),
                i = a("371642");

            function o(e) {
                let {
                    children: t,
                    className: a,
                    innerClassName: n,
                    onChange: o,
                    "aria-label": u,
                    "aria-describedby": d,
                    filters: c,
                    multiple: m = !1,
                    disabled: h = !1,
                    submitting: f = !1,
                    ...g
                } = e;
                return (0, s.jsx)(r.FocusRing, {
                    within: !0,
                    children: (0, s.jsxs)("div", {
                        className: l(a, (0, r.getButtonStyle)({
                            ...g,
                            submitting: f,
                            disabled: h
                        })),
                        "aria-disabled": h,
                        children: [(0, s.jsx)("span", {
                            "aria-hidden": !0,
                            className: n,
                            children: t
                        }), (0, s.jsx)(i.default, {
                            tabIndex: 0,
                            onChange: o,
                            filters: c,
                            multiple: m,
                            "aria-label": u,
                            "aria-describedby": d,
                            disabled: h
                        })]
                    })
                })
            }
        },
        717018: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return i
                }
            });
            var s = a("37983");
            a("884691");
            var n = a("469563"),
                l = a("594881"),
                r = a("75196"),
                i = (0, n.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: a = 16,
                        color: n = "currentColor",
                        foreground: l,
                        ...i
                    } = e;
                    return (0, s.jsxs)("svg", {
                        ...(0, r.default)(i),
                        width: t,
                        height: a,
                        viewBox: "0 0 16 16",
                        children: [(0, s.jsx)("path", {
                            className: l,
                            fill: n,
                            d: "M6.78802 8.60547H2.54555C2.211 8.60547 1.93949 8.87699 1.93949 9.21154C1.93949 9.54608 2.211 9.8176 2.54555 9.8176H5.32498L1.511 13.6316C1.27433 13.8682 1.27433 14.2519 1.511 14.4886C1.62918 14.607 1.78433 14.6661 1.93949 14.6661C2.09464 14.6661 2.24979 14.607 2.36798 14.4886L6.18195 10.6746V13.454C6.18195 13.7886 6.45347 14.0601 6.78802 14.0601C7.12257 14.0601 7.39409 13.7886 7.39409 13.454V9.21154C7.39409 8.87699 7.12257 8.60547 6.78802 8.60547Z"
                        }), (0, s.jsx)("path", {
                            className: l,
                            fill: n,
                            d: "M14.4891 1.50953C14.2524 1.27286 13.8687 1.27286 13.6321 1.50953L9.81809 5.32351V2.54409C9.81809 2.20954 9.54657 1.93802 9.21202 1.93802C8.87748 1.93802 8.60596 2.20954 8.60596 2.54409V6.78655C8.60596 7.1211 8.87748 7.39262 9.21202 7.39262H13.4545C13.789 7.39262 14.0606 7.1211 14.0606 6.78655C14.0606 6.45201 13.789 6.18049 13.4545 6.18049H10.6751L14.4891 2.36651C14.7257 2.12984 14.7257 1.7462 14.4891 1.50953Z"
                        })]
                    })
                }, l.MinimizeIcon)
        },
        673078: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return i
                }
            });
            var s = a("37983");
            a("884691");
            var n = a("469563"),
                l = a("159190"),
                r = a("75196"),
                i = (0, n.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: a = 16,
                        color: n = "currentColor",
                        foreground: l,
                        ...i
                    } = e;
                    return (0, s.jsxs)("svg", {
                        ...(0, r.default)(i),
                        width: t,
                        height: a,
                        viewBox: "0 0 16 16",
                        children: [(0, s.jsx)("path", {
                            className: l,
                            fill: n,
                            d: "M1.93944 14.6655H6.18191C6.51646 14.6655 6.78797 14.394 6.78797 14.0594C6.78797 13.7249 6.51646 13.4534 6.18191 13.4534H3.40249L7.21646 9.63937C7.45313 9.40271 7.45313 9.01906 7.21646 8.7824C7.09828 8.66391 6.94313 8.60482 6.78797 8.60482C6.63282 8.60482 6.47767 8.66391 6.35948 8.7824L2.54551 12.5964V9.81695C2.54551 9.4824 2.27399 9.21089 1.93944 9.21089C1.60489 9.21089 1.33337 9.4824 1.33337 9.81695V14.0594C1.33337 14.394 1.60489 14.6655 1.93944 14.6655Z"
                        }), (0, s.jsx)("path", {
                            className: l,
                            fill: n,
                            d: "M8.78362 7.21512C9.02029 7.45179 9.40393 7.45179 9.6406 7.21512L13.4546 3.40114V6.18056C13.4546 6.51511 13.7261 6.78663 14.0606 6.78663C14.3952 6.78663 14.6667 6.51511 14.6667 6.18056V1.9381C14.6667 1.60355 14.3952 1.33203 14.0606 1.33203L9.81818 1.33203C9.48363 1.33203 9.21211 1.60355 9.21211 1.9381C9.21211 2.27265 9.48363 2.54416 9.81818 2.54416H12.5976L8.78362 6.35814C8.54695 6.59481 8.54695 6.97845 8.78362 7.21512Z"
                        })]
                    })
                }, l.MaximizeIcon)
        },
        887718: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return i
                }
            });
            var s = a("37983");
            a("884691");
            var n = a("469563"),
                l = a("666031"),
                r = a("75196"),
                i = (0, n.replaceIcon)(function(e) {
                    let {
                        width: t = 29,
                        height: a = 22,
                        color: n = "currentColor",
                        backgroundColor: l,
                        ...i
                    } = e;
                    return (0, s.jsx)("svg", {
                        ...(0, r.default)(i),
                        width: t,
                        height: a,
                        viewBox: "0 0 29 22",
                        children: (0, s.jsxs)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: [(0, s.jsx)("rect", {
                                width: t,
                                height: a,
                                fill: l,
                                fillOpacity: ".8",
                                rx: "3"
                            }), (0, s.jsx)("path", {
                                d: "M8.01725 16.7054C7.17625 16.7054 6.43191 16.4879 5.78425 16.0529C5.13658 15.6179 4.63391 15.0089 4.27625 14.2259C3.91858 13.4333 3.73975 12.5246 3.73975 11.4999C3.73975 10.4849 3.92825 9.58593 4.30525 8.80293C4.69191 8.01993 5.24775 7.4061 5.97275 6.96143C6.70741 6.51677 7.58225 6.29443 8.59725 6.29443C9.45758 6.29443 10.2261 6.4781 10.9027 6.84543C11.5891 7.21277 12.1062 7.72993 12.4542 8.39693L10.8157 9.57143C10.3227 8.66277 9.58808 8.20843 8.61175 8.20843C7.72241 8.20843 7.04091 8.49843 6.56725 9.07843C6.09358 9.64877 5.85675 10.4559 5.85675 11.4999C5.85675 12.5536 6.09358 13.3656 6.56725 13.9359C7.04091 14.5063 7.72241 14.7914 8.61175 14.7914C9.00808 14.7914 9.37058 14.7189 9.69925 14.5739C10.0376 14.4193 10.2986 14.2114 10.4822 13.9504V12.7034H8.17675V10.8184H12.5412V16.5024H10.8302L10.5547 15.5454C9.98441 16.3188 9.13858 16.7054 8.01725 16.7054Z",
                                fill: n
                            }), (0, s.jsx)("path", {
                                d: "M16.5444 16.5024H14.4274V6.49743H16.5444V16.5024Z",
                                fill: n
                            }), (0, s.jsx)("path", {
                                d: "M20.6933 16.5024H18.5763V6.49743H25.2608V8.41143H20.6933V10.7894H24.4053V12.7034H20.6933V16.5024Z",
                                fill: n
                            })]
                        })
                    })
                }, l.GifIcon)
        },
        808404: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return i
                }
            });
            var s = a("37983");
            a("884691");
            var n = a("469563"),
                l = a("851298"),
                r = a("75196"),
                i = (0, n.replaceIcon)(function(e) {
                    let {
                        width: t = 39,
                        height: a = 27,
                        color: n = "currentColor",
                        foreground: l,
                        ...i
                    } = e;
                    return (0, s.jsxs)("svg", {
                        ...(0, r.default)(i),
                        width: t,
                        height: a,
                        viewBox: "0 0 39 27",
                        fill: n,
                        children: [(0, s.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            className: l,
                            d: "M26.4909 2.76514H5.78906C3.20886 2.76514 1.11719 4.79342 1.11719 7.29544V20.8863C1.11719 23.3884 3.20886 25.4167 5.78906 25.4167H31.9922C34.5724 25.4167 36.6641 23.3884 36.6641 20.8863V12.63C35.9239 12.8436 35.1398 12.9583 34.3281 12.9583C29.8128 12.9583 26.1523 9.40882 26.1523 5.03029C26.1523 4.24318 26.2706 3.48286 26.4909 2.76514ZM13 7.29544C14.2885 7.29544 15.3359 8.30932 15.3359 9.56059C15.3359 10.8128 14.2885 11.8257 13 11.8257C11.7087 11.8257 10.6641 10.8128 10.6641 9.56059C10.6641 8.30932 11.7087 7.29544 13 7.29544ZM10.6641 20.8863L14.168 16.356L16.5039 18.6212L21.1758 12.9583L24.6797 20.8863H17.6719H10.6641Z",
                            fill: n
                        }), (0, s.jsx)("path", {
                            d: "M35.4961 0.5V3.89773H39V6.16288H35.4961V9.56061H33.1602V6.16288H29.6562V3.89773H33.1602V0.5H35.4961Z",
                            fill: n
                        })]
                    })
                }, l.ImagePlusIcon)
        },
        891152: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return i
                }
            });
            var s = a("37983");
            a("884691");
            var n = a("469563"),
                l = a("620000"),
                r = a("75196"),
                i = (0, n.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: a = 16,
                        color: n = "currentColor",
                        foreground: l,
                        ...i
                    } = e;
                    return (0, s.jsxs)("svg", {
                        ...(0, r.default)(i),
                        width: t,
                        height: a,
                        viewBox: "0 0 16 16",
                        fill: "none",
                        children: [(0, s.jsx)("path", {
                            className: l,
                            fill: n,
                            d: "M12.1803 4.66659L12.1803 14.6666H10.4701L10.4701 4.66659L8.53289 6.63325L7.33329 5.40825L11.3292 1.33325L15.3333 5.40825L14.1337 6.65825L12.1803 4.66659Z"
                        }), (0, s.jsx)("path", {
                            className: l,
                            fill: n,
                            d: "M3.81962 11.3333L3.81962 1.33325L5.52983 1.33325L5.52985 11.3333L7.46703 9.36658L8.66663 10.5916L4.67068 14.6666L0.666626 10.5916L1.86622 9.34158L3.81962 11.3333Z"
                        })]
                    })
                }, l.ArrowsUpDownIcon)
        }
    }
]);